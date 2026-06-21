#!/usr/bin/env node

const crypto = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");

const MODEL_DEFAULT = "gemini-2.5-flash";
const API_URL_BASE = "https://generativelanguage.googleapis.com/v1beta";
const WORKER_KEY = "defracto.workers.gemini_flash.v1";

function fail(message, code = 1) {
  console.error(`ndd: ${message}`);
  process.exitCode = code;
  process.exit(code);
}

function sha256(value) {
  return `sha256:${crypto.createHash("sha256").update(String(value)).digest("hex")}`;
}

function isPipedInput() {
  return !process.stdin.isTTY;
}

function readStdin() {
  return new Promise((resolve, reject) => {
    let data = "";
    process.stdin.setEncoding("utf8");
    process.stdin.on("data", (chunk) => { data += chunk; });
    process.stdin.on("end", () => resolve(data));
    process.stdin.on("error", reject);
  });
}

function parseArgs(argv) {
  const result = { _: [] };
  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (!token.startsWith("--")) {
      result._.push(token);
      continue;
    }
    const key = token.slice(2);
    const next = argv[i + 1];
    if (!next || next.startsWith("--")) {
      result[key] = true;
      continue;
    }
    result[key] = next;
    i += 1;
  }
  return result;
}

function help() {
  return [
    "ndd - Defracto conveyor CLI",
    "",
    "Usage:",
    "  ndd handoff run --text \"<conversation text>\" [--slice <slice-key>] [--model gemini-2.5-flash] [--out-dir <path>]",
    "  cat prompt.txt | ndd handoff run --slice <slice-key>",
    "",
    "Live-only rules:",
    "  - no dry run",
    "  - no mock mode",
    "  - no fake output",
    "  - missing Gemini Flash connectivity fails closed",
    "",
    "Environment:",
    "  LOC_GEMINI_API_KEY (canonical)",
    "  GEMINI_MODEL (optional override)",
    ""
  ].join("\n");
}

function buildSchema() {
  return {
    type: "object",
    required: ["status", "summary", "asciiSketch", "surfaceSignature", "findings", "artifacts"],
    properties: {
      status: { type: "string", enum: ["passed", "blocked"] },
      summary: { type: "string" },
      asciiSketch: { type: "string" },
      findings: { type: "array", items: { type: "string" } },
      artifacts: {
        type: "object",
        required: ["responseText"],
        properties: {
          responseText: { type: "string" }
        }
      },
      surfaceSignature: {
        type: "object",
        required: ["signatureKey", "signedBy", "signedAt", "attestationMode", "trustFabricStatus", "workerKey", "surfaceArtifactPath", "sourceArtifactPaths"],
        properties: {
          signatureKey: { type: "string" },
          signedBy: { type: "string" },
          signedAt: { type: "string" },
          attestationMode: { type: "string" },
          trustFabricStatus: { type: "string", enum: ["live", "missing"] },
          workerKey: { type: "string" },
          surfaceArtifactPath: { type: "string" },
          surfaceArtifactHash: { type: "string" },
          sourceArtifactPaths: { type: "array", items: { type: "string" } },
          sourceArtifactHashes: { type: "array", items: { type: "string" } },
          signatureHash: { type: "string" },
          reason: {}
        }
      }
    }
  };
}

async function callGemini({ prompt, model }) {
  const apiKey = String(process.env.LOC_GEMINI_API_KEY || "").trim();
  if (!apiKey) {
    fail("LOC_GEMINI_API_KEY is required and missing. Refusing to fabricate output.", 2);
  }

  const targetModel = model || process.env.GEMINI_MODEL || MODEL_DEFAULT;
  const url = `${API_URL_BASE}/models/${encodeURIComponent(targetModel)}:generateContent?key=${encodeURIComponent(apiKey)}`;
  const payload = {
    contents: [
      {
        role: "user",
        parts: [{ text: prompt }]
      }
    ],
    generationConfig: {
      responseMimeType: "application/json",
      responseSchema: buildSchema(),
      temperature: 0.2,
      maxOutputTokens: 8192
    }
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    fail(`Gemini Flash request failed closed: ${response.status} ${response.statusText}${body ? ` :: ${body}` : ""}`, 4);
  }

  const json = await response.json().catch((error) => {
    fail(`Gemini Flash returned non-JSON: ${error.message || String(error)}`, 4);
  });

  const text = json?.candidates?.[0]?.content?.parts?.map((part) => part.text || "").join("") || "";
  if (!text.trim()) {
    fail("Gemini Flash returned an empty response. Refusing to invent output.", 5);
  }

  let parsed;
  try {
    parsed = JSON.parse(text);
  } catch (error) {
    fail(`Gemini Flash response was not valid JSON: ${error.message || String(error)}`, 5);
  }

  return { parsed, raw: json };
}

function validateResponseShape(result) {
  if (!result || typeof result !== "object") {
    fail("Gemini Flash response must be a JSON object.", 5);
  }
  if (result.status !== "passed") {
    fail(`Gemini Flash response did not pass. Status: ${String(result.status)}`, 6);
  }
  if (typeof result.asciiSketch !== "string" || !result.asciiSketch.trim()) {
    fail("Gemini Flash response is missing asciiSketch. Refusing to fake it.", 6);
  }
  const signature = result.surfaceSignature;
  if (!signature || typeof signature !== "object") {
    fail("Gemini Flash response is missing surfaceSignature. Refusing to fake it.", 6);
  }
  if (signature.trustFabricStatus !== "live") {
    fail("Gemini Flash response did not live-attest the surface signature.", 6);
  }
  if (signature.workerKey !== WORKER_KEY || signature.signedBy !== WORKER_KEY) {
    fail("Gemini Flash surface signature is not bound to the Gemini Flash worker key.", 6);
  }
  if (typeof signature.signatureKey !== "string" || !signature.signatureKey.trim()) {
    fail("Gemini Flash surface signature is missing signatureKey.", 6);
  }
  return result;
}

async function runHandoff(argv) {
  const textParts = [];
  if (argv.text) textParts.push(String(argv.text));
  if (argv._.length > 0) textParts.push(argv._.join(" "));
  if (!textParts.length && isPipedInput()) {
    const piped = await readStdin();
    if (piped.trim()) textParts.push(piped.trim());
  }
  if (!textParts.length) {
    fail("Provide conversational text with --text or via stdin.", 2);
  }

  const sliceKey = argv.slice || "slice-008-handoff-conveyor-cli-proof";
  const prompt = [
    "You are a Gemini Flash worker inside the Defracto conveyor.",
    "Return one JSON object only.",
    "Do not wrap your answer in markdown.",
    "Do not invent any fields outside the schema.",
    "If you cannot live-attest the output, return status blocked and explain in reason.",
    "",
    `Slice key: ${sliceKey}`,
    `Conversation text: ${textParts.join("\n")}`,
    "",
    "Required shape:",
    "{",
    '  "status": "passed" | "blocked",',
    '  "summary": "string",',
    '  "asciiSketch": "string",',
    '  "findings": ["string"],',
    '  "artifacts": { "responseText": "string" },',
    '  "surfaceSignature": {',
    '    "signatureKey": "string",',
    `    "signedBy": "${WORKER_KEY}",`,
    '    "signedAt": "ISO-8601 timestamp",',
    '    "attestationMode": "live_worker_attestation",',
    '    "trustFabricStatus": "live",',
    `    "workerKey": "${WORKER_KEY}",`,
    '    "surfaceArtifactPath": "string",',
    '    "surfaceArtifactHash": "string",',
    '    "sourceArtifactPaths": ["string"],',
    '    "sourceArtifactHashes": ["string"],',
    '    "signatureHash": "string",',
    '    "reason": null | "string"',
    "  }",
    "}",
    "",
    "The asciiSketch should be a real ASCII sketch with visible structure."
  ].join("\n");

  const { parsed } = await callGemini({ prompt, model: argv.model });
  const validated = validateResponseShape(parsed);

  validated.surfaceSignature.surfaceArtifactHash = sha256(validated.asciiSketch);
  validated.surfaceSignature.signatureHash = sha256(JSON.stringify(validated.surfaceSignature));

  const output = {
    runKind: "handoff-run",
    sliceKey,
    model: argv.model || process.env.GEMINI_MODEL || MODEL_DEFAULT,
    workerKey: WORKER_KEY,
    status: validated.status,
    summary: validated.summary,
    findings: validated.findings,
    asciiSketch: validated.asciiSketch,
    surfaceSignature: validated.surfaceSignature,
    artifacts: validated.artifacts,
    receivedAt: new Date().toISOString()
  };

  if (argv["out-dir"]) {
    const outDir = path.resolve(String(argv["out-dir"]));
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, "response.json"), `${JSON.stringify(output, null, 2)}\n`, "utf8");
    fs.writeFileSync(path.join(outDir, "run-sketch.ascii"), `${validated.asciiSketch}\n`, "utf8");
    fs.writeFileSync(path.join(outDir, "receipt.json"), `${JSON.stringify({
      receiptKey: `defracto.cli.${sliceKey}.receipt.v1`,
      workerKey: WORKER_KEY,
      status: "passed",
      surfaceSignature: validated.surfaceSignature,
      responseHash: sha256(JSON.stringify(output)),
      receiptHash: sha256(`${sliceKey}:${validated.surfaceSignature.signatureHash}`)
    }, null, 2)}\n`, "utf8");
  }

  process.stdout.write(`${JSON.stringify(output, null, 2)}\n`);
}

async function main() {
  const argv = process.argv.slice(2);
  if (argv.length === 0 || argv.includes("-h") || argv.includes("--help")) {
    process.stdout.write(`${help()}\n`);
    return;
  }

  const [group, action, ...rest] = argv;
  if (group !== "handoff") {
    fail(`Unsupported command group: ${group}.`, 2);
  }

  if (action === "run") {
    const parsed = parseArgs(rest);
    await runHandoff(parsed);
    return;
  }

  fail(`Unsupported handoff action: ${action}.`, 2);
}

main().catch((error) => {
  fail(error && error.message ? error.message : String(error), 1);
});
