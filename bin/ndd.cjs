#!/usr/bin/env node

const crypto = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");

const MODEL_DEFAULT = "gemini-2.5-flash";
const API_URL_BASE = "https://generativelanguage.googleapis.com/v1beta";
const WORKER_KEY = "defracto.workers.gemini_flash.v1";
const LIVE_RUN_DIR = path.join(process.cwd(), "conveyor", "runs", "2026", "06", "21", "slice-008-handoff-conveyor-cli-proof", "live");
const SELF_BINDING_RUN_DIR = path.join(process.cwd(), "conveyor", "runs", "2026", "06", "21", "slice-008b-ndd-cli-self-binding");
const SELF_VISUAL_MODEL_PATH = path.join(process.cwd(), "examples", "visual-projection-models", "ndd-cli-self.visual-model.v1.json");
const SELF_SKETCH_PATH = path.join(SELF_BINDING_RUN_DIR, "sketches", "ndd-cli-self.ascii");

function fail(message, code = 1) {
  console.error(`ndd: ${message}`);
  process.exitCode = code;
  process.exit(code);
}

function sha256(value) {
  return `sha256:${crypto.createHash("sha256").update(String(value)).digest("hex")}`;
}

function sha256Buffer(buffer) {
  return `sha256:${crypto.createHash("sha256").update(buffer).digest("hex")}`;
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

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function writeTextFile(filePath, text) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, text, "utf8");
}

function writeJsonFile(filePath, value) {
  writeTextFile(filePath, `${JSON.stringify(value, null, 2)}\n`);
}

function fileHash(filePath) {
  return sha256Buffer(fs.readFileSync(filePath));
}

function fileExists(filePath) {
  try {
    fs.accessSync(filePath, fs.constants.R_OK);
    return true;
  } catch {
    return false;
  }
}

function renderSelfSketch(model) {
  const keys = Array.isArray(model?.rendering?.orderedNodeKeys) ? model.rendering.orderedNodeKeys : [];
  const nodeByKey = new Map((Array.isArray(model?.nodes) ? model.nodes : []).map((node) => [node.nodeKey, node]));
  const labels = keys.map((key) => nodeByKey.get(key)?.label || key);
  if (!labels.length) {
    return [
      "+------------------+",
      "|  NDD CLI Story   |",
      "+------------------+"
    ].join("\n");
  }
  const width = Math.max(...labels.map((label) => label.length), 18) + 4;
  const lines = [];
  const box = (label) => {
    const pad = width - 2 - label.length;
    const left = Math.floor(pad / 2);
    const right = pad - left;
    return [
      `+${"-".repeat(width - 2)}+`,
      `|${" ".repeat(left)}${label}${" ".repeat(right)}|`
    ];
  };
  for (let i = 0; i < labels.length; i += 1) {
    lines.push(...box(labels[i]));
    if (i < labels.length - 1) {
      lines.push(`${" ".repeat(Math.floor((width - 1) / 2))}|`);
      lines.push(`${" ".repeat(Math.floor((width - 2) / 2))}v`);
    }
  }
  lines.push(`+${"-".repeat(width - 2)}+`);
  return lines.join("\n");
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
    "  - successful runs write a live envelope under conveyor/runs/2026/06/21/slice-008-handoff-conveyor-cli-proof/live/",
    "  - self sketch is projected from the declared visual model",
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
  const liveDir = argv["out-dir"] ? path.resolve(String(argv["out-dir"])) : LIVE_RUN_DIR;
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

  const runtime = {
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

  const livePaths = {
    root: liveDir,
    input: path.join(liveDir, "input.txt"),
    dispatch: path.join(liveDir, "dispatch.gemini-flash.v1.json"),
    response: path.join(liveDir, "response.gemini-flash.v1.json"),
    sketch: path.join(liveDir, "sketch.ascii"),
    workerAttestation: path.join(liveDir, "worker-attestation.model-produced.v1.json"),
    runnerSignature: path.join(liveDir, "surface-signature.runner-verified.v1.json"),
    receipt: path.join(liveDir, "receipt.v1.json"),
    ledger: path.join(liveDir, "run-ledger.v1.json")
  };

  ensureDir(livePaths.root);

  try {
    writeTextFile(livePaths.input, textParts.join("\n"));
  } catch (error) {
    fail(`input cannot be written: ${error.message || String(error)}`, 7);
  }

  const inputHash = fileHash(livePaths.input);

  const dispatch = {
    schemaVersion: "defracto.handoff-dispatch.v1",
    handoffKey: `defracto.handoff.${sliceKey}.live.v1`,
    runKey: `defracto.run.${sliceKey}.live.v1`,
    sliceKey,
    laneKey: "live",
    dispatchKey: `defracto.dispatch.${sliceKey}.live.v1`,
    workerKey: WORKER_KEY,
    workerProfilePath: "conveyor/workers/gemini-flash.worker-profile.v1.json",
    dispatchContractPath: "conveyor/workers/gemini-flash.dispatch-contract.v1.json",
    responseContractPath: "conveyor/workers/gemini-flash.response-contract.v1.json",
    cliCommand: `ndd handoff run --text <conversation> --slice ${sliceKey}`,
    apiKeyEnvVar: "LOC_GEMINI_API_KEY",
    model: runtime.model,
    request: {
      url: `${API_URL_BASE}/models/${encodeURIComponent(runtime.model)}:generateContent`,
      responseMimeType: "application/json",
      responseSchema: buildSchema(),
      temperature: 0.2,
      maxOutputTokens: 8192
    },
    inputArtifactPath: "conveyor/runs/2026/06/21/slice-008-handoff-conveyor-cli-proof/live/input.txt",
    inputArtifactHash: inputHash,
    prompt
  };

  try {
    writeJsonFile(livePaths.dispatch, dispatch);
  } catch (error) {
    fail(`dispatch cannot be written: ${error.message || String(error)}`, 7);
  }
  const dispatchHash = fileHash(livePaths.dispatch);

  try {
    writeJsonFile(livePaths.response, validated);
  } catch (error) {
    fail(`response cannot be written: ${error.message || String(error)}`, 7);
  }
  const responseHash = fileHash(livePaths.response);

  try {
    writeTextFile(livePaths.sketch, `${validated.asciiSketch}\n`);
  } catch (error) {
    fail(`sketch cannot be written: ${error.message || String(error)}`, 7);
  }
  const sketchHash = fileHash(livePaths.sketch);

  const modelHashComparison = {
    modelProvidedSurfaceArtifactHash: validated.surfaceSignature.surfaceArtifactHash || null,
    actualSurfaceArtifactHash: sketchHash,
    verificationStatus: validated.surfaceSignature.surfaceArtifactHash === sketchHash ? "matched" : "mismatched",
    trustImpact: "model_attestation_preserved_but_not_final_proof"
  };

  const workerAttestation = {
    schemaVersion: "defracto.worker-attestation.model-produced.v1",
    attestationMode: "model_produced_live_worker_attestation",
    verificationStatus: "unverified_by_external_trust_service",
    externalTrustServiceStatus: "not_integrated",
    workerKey: WORKER_KEY,
    runKey: dispatch.runKey,
    sliceKey,
    laneKey: "live",
    inputArtifactPath: "conveyor/runs/2026/06/21/slice-008-handoff-conveyor-cli-proof/live/input.txt",
    inputArtifactHash: inputHash,
    dispatchArtifactPath: "conveyor/runs/2026/06/21/slice-008-handoff-conveyor-cli-proof/live/dispatch.gemini-flash.v1.json",
    dispatchArtifactHash: dispatchHash,
    responseArtifactPath: "conveyor/runs/2026/06/21/slice-008-handoff-conveyor-cli-proof/live/response.gemini-flash.v1.json",
    responseArtifactHash: responseHash,
    surfaceArtifactPath: "conveyor/runs/2026/06/21/slice-008-handoff-conveyor-cli-proof/live/sketch.ascii",
    surfaceArtifactHash: sketchHash,
    modelProvidedSurfaceSignature: validated.surfaceSignature,
    modelHashComparison,
    sourceArtifactPaths: [
      "conveyor/runs/2026/06/21/slice-008-handoff-conveyor-cli-proof/live/input.txt",
      "conveyor/runs/2026/06/21/slice-008-handoff-conveyor-cli-proof/live/dispatch.gemini-flash.v1.json",
      "conveyor/runs/2026/06/21/slice-008-handoff-conveyor-cli-proof/live/response.gemini-flash.v1.json",
      "conveyor/runs/2026/06/21/slice-008-handoff-conveyor-cli-proof/live/sketch.ascii"
    ],
    sourceArtifactHashes: [inputHash, dispatchHash, responseHash, sketchHash],
    modelStatus: validated.status,
    modelSummary: validated.summary,
    modelFindings: validated.findings
  };

  try {
    writeJsonFile(livePaths.workerAttestation, workerAttestation);
  } catch (error) {
    fail(`worker attestation cannot be written: ${error.message || String(error)}`, 7);
  }
  const workerAttestationHash = fileHash(livePaths.workerAttestation);

  const runnerSignature = {
    schemaVersion: "defracto.surface-signature.runner-verified.v1",
    signatureKey: `defracto.surface-signature.${sliceKey}.runner-verified.v1`,
    signedBy: "ndd-cli-runner",
    signedAt: new Date().toISOString(),
    attestationMode: "cli_runner_verified_materialization",
    verificationStatus: "locally_verified",
    externalTrustServiceStatus: "not_integrated",
    workerKey: WORKER_KEY,
    runKey: dispatch.runKey,
    sliceKey,
    laneKey: "live",
    surfaceArtifactPath: "conveyor/runs/2026/06/21/slice-008-handoff-conveyor-cli-proof/live/sketch.ascii",
    surfaceArtifactHash: sketchHash,
    dispatchArtifactPath: "conveyor/runs/2026/06/21/slice-008-handoff-conveyor-cli-proof/live/dispatch.gemini-flash.v1.json",
    dispatchArtifactHash: dispatchHash,
    responseArtifactPath: "conveyor/runs/2026/06/21/slice-008-handoff-conveyor-cli-proof/live/response.gemini-flash.v1.json",
    responseArtifactHash: responseHash,
    workerAttestationArtifactPath: "conveyor/runs/2026/06/21/slice-008-handoff-conveyor-cli-proof/live/worker-attestation.model-produced.v1.json",
    workerAttestationArtifactHash: workerAttestationHash,
    inputArtifactPath: "conveyor/runs/2026/06/21/slice-008-handoff-conveyor-cli-proof/live/input.txt",
    inputArtifactHash: inputHash,
    sourceArtifactPaths: [
      "conveyor/runs/2026/06/21/slice-008-handoff-conveyor-cli-proof/live/input.txt",
      "conveyor/runs/2026/06/21/slice-008-handoff-conveyor-cli-proof/live/dispatch.gemini-flash.v1.json",
      "conveyor/runs/2026/06/21/slice-008-handoff-conveyor-cli-proof/live/response.gemini-flash.v1.json",
      "conveyor/runs/2026/06/21/slice-008-handoff-conveyor-cli-proof/live/sketch.ascii",
      "conveyor/runs/2026/06/21/slice-008-handoff-conveyor-cli-proof/live/worker-attestation.model-produced.v1.json"
    ],
    sourceArtifactHashes: [inputHash, dispatchHash, responseHash, sketchHash, workerAttestationHash]
  };

  try {
    writeJsonFile(livePaths.runnerSignature, runnerSignature);
  } catch (error) {
    fail(`runner signature cannot be written: ${error.message || String(error)}`, 7);
  }
  const runnerSignatureHash = fileHash(livePaths.runnerSignature);

  const receipt = {
    schemaVersion: "defracto.live-run-receipt.v1",
    receiptKey: `defracto.live.${sliceKey}.receipt.v1`,
    runKey: dispatch.runKey,
    sliceKey,
    laneKey: "live",
    workerKey: WORKER_KEY,
    status: "passed",
    verificationStatus: "locally_verified",
    externalTrustServiceStatus: "not_integrated",
    liveEnvelopePath: "conveyor/runs/2026/06/21/slice-008-handoff-conveyor-cli-proof/live/",
    inputArtifactPath: "conveyor/runs/2026/06/21/slice-008-handoff-conveyor-cli-proof/live/input.txt",
    inputArtifactHash: inputHash,
    dispatchArtifactPath: "conveyor/runs/2026/06/21/slice-008-handoff-conveyor-cli-proof/live/dispatch.gemini-flash.v1.json",
    dispatchArtifactHash: dispatchHash,
    responseArtifactPath: "conveyor/runs/2026/06/21/slice-008-handoff-conveyor-cli-proof/live/response.gemini-flash.v1.json",
    responseArtifactHash: responseHash,
    sketchArtifactPath: "conveyor/runs/2026/06/21/slice-008-handoff-conveyor-cli-proof/live/sketch.ascii",
    sketchArtifactHash: sketchHash,
    workerAttestationArtifactPath: "conveyor/runs/2026/06/21/slice-008-handoff-conveyor-cli-proof/live/worker-attestation.model-produced.v1.json",
    workerAttestationArtifactHash: workerAttestationHash,
    runnerSignatureArtifactPath: "conveyor/runs/2026/06/21/slice-008-handoff-conveyor-cli-proof/live/surface-signature.runner-verified.v1.json",
    runnerSignatureArtifactHash: runnerSignatureHash,
    modelProvidedSurfaceSignature: validated.surfaceSignature,
    modelHashComparison,
    checks: [
      "Gemini call succeeded",
      "structured response validated",
      "asciiSketch present",
      "sketch hash verified from file on disk",
      "response written",
      "receipt written"
    ],
    blockedReasons: []
  };

  try {
    writeJsonFile(livePaths.receipt, receipt);
  } catch (error) {
    fail(`receipt cannot be written: ${error.message || String(error)}`, 7);
  }
  if (!fileExists(livePaths.receipt)) {
    fail("receipt cannot be written: file missing after write.", 7);
  }
  const receiptHash = fileHash(livePaths.receipt);

  const readBackReceipt = JSON.parse(fs.readFileSync(livePaths.receipt, "utf8"));
  if (readBackReceipt.sketchArtifactHash !== sketchHash) {
    fail("sketch file hash does not match runner receipt.", 8);
  }

  const ledger = {
    schemaVersion: "defracto.live-run-ledger.v1",
    ledgerKey: `defracto.live.${sliceKey}.ledger.v1`,
    runKey: dispatch.runKey,
    sliceKey,
    laneKey: "live",
    workerKey: WORKER_KEY,
    status: "passed",
    verificationStatus: "locally_verified",
    externalTrustServiceStatus: "not_integrated",
    liveEnvelopePath: "conveyor/runs/2026/06/21/slice-008-handoff-conveyor-cli-proof/live/",
    fileHashes: {
      input: inputHash,
      dispatch: dispatchHash,
      response: responseHash,
      sketch: sketchHash,
      workerAttestation: workerAttestationHash,
      runnerSignature: runnerSignatureHash,
      receipt: receiptHash
    },
    artifacts: {
      input: "conveyor/runs/2026/06/21/slice-008-handoff-conveyor-cli-proof/live/input.txt",
      dispatch: "conveyor/runs/2026/06/21/slice-008-handoff-conveyor-cli-proof/live/dispatch.gemini-flash.v1.json",
      response: "conveyor/runs/2026/06/21/slice-008-handoff-conveyor-cli-proof/live/response.gemini-flash.v1.json",
      sketch: "conveyor/runs/2026/06/21/slice-008-handoff-conveyor-cli-proof/live/sketch.ascii",
      workerAttestation: "conveyor/runs/2026/06/21/slice-008-handoff-conveyor-cli-proof/live/worker-attestation.model-produced.v1.json",
      runnerSignature: "conveyor/runs/2026/06/21/slice-008-handoff-conveyor-cli-proof/live/surface-signature.runner-verified.v1.json",
      receipt: "conveyor/runs/2026/06/21/slice-008-handoff-conveyor-cli-proof/live/receipt.v1.json"
    },
    trustPosture: {
      workerAttestationMode: "model_produced_live_worker_attestation",
      workerVerificationStatus: "unverified_by_external_trust_service",
      runnerAttestationMode: "cli_runner_verified_materialization",
      runnerVerificationStatus: "locally_verified",
      runnerExternalTrustServiceStatus: "not_integrated"
    },
    checks: [
      "Gemini call succeeded",
      "structured response validated",
      "asciiSketch present",
      "sketch file hash verified from disk",
      "response written",
      "receipt written"
    ]
  };

  try {
    writeJsonFile(livePaths.ledger, ledger);
  } catch (error) {
    fail(`run ledger cannot be written: ${error.message || String(error)}`, 7);
  }

  runtime.liveEnvelopePath = "conveyor/runs/2026/06/21/slice-008-handoff-conveyor-cli-proof/live/";
  runtime.materializedArtifacts = {
    input: livePaths.input,
    dispatch: livePaths.dispatch,
    response: livePaths.response,
    sketch: livePaths.sketch,
    workerAttestation: livePaths.workerAttestation,
    runnerSignature: livePaths.runnerSignature,
    receipt: livePaths.receipt,
    ledger: livePaths.ledger
  };
  runtime.fileHashes = {
    input: inputHash,
    dispatch: dispatchHash,
    response: responseHash,
    sketch: sketchHash,
    workerAttestation: workerAttestationHash,
    runnerSignature: runnerSignatureHash,
    receipt: receiptHash
  };

  process.stdout.write(`${JSON.stringify(runtime, null, 2)}\n`);
}

function writeSelfSketchEnvelope({ sketch, model, sketchHash, receiptHash, envelopeDir }) {
  const liveDir = envelopeDir || SELF_BINDING_RUN_DIR;
  const sketchesDir = path.join(liveDir, "sketches");
  const finalDir = path.join(liveDir, "final");
  const evidenceDir = path.join(process.cwd(), "evidence", "cli");
  ensureDir(sketchesDir);
  ensureDir(finalDir);
  ensureDir(evidenceDir);
  const sketchPath = path.join(sketchesDir, "ndd-cli-self.ascii");
  const receiptPath = path.join(evidenceDir, "ndd-cli.self-sketch.receipt.v1.json");
  const nodeProjectionReceiptPath = path.join(evidenceDir, "ndd-cli.node-projection.receipt.v1.json");
  writeTextFile(sketchPath, `${sketch}\n`);
  writeJsonFile(path.join(liveDir, "run.manifest.v1.json"), {
    schemaVersion: "defracto.run-manifest.v1",
    runKey: "defracto.run.slice-008b-ndd-cli-self-binding.v1",
    runKind: "conveyor-run",
    sliceKey: "slice-008b-ndd-cli-self-binding",
    operatorRole: "platform agent",
    objective: "Bind the NDD CLI to the same conveyor it orchestrates.",
    laneOrder: ["self-sketch"],
    inputs: [
      "examples/visual-projection-models/ndd-cli-self.visual-model.v1.json",
      "stories/cli/ndd-cli.story.v1.json",
      "specs/canonical/cli/ndd-cli.canonical-spec.v1.json",
      "contracts/sej/ndd-cli.self-sketch.sej.v1.json",
      "contracts/projections/ndd-cli.node-projection-manifest.v1.json"
    ],
    requiredReceipts: [
      "evidence/cli/ndd-cli.self-sketch.receipt.v1.json",
      "evidence/cli/ndd-cli.node-projection.receipt.v1.json"
    ],
    finalArtifacts: [
      "conveyor/runs/2026/06/21/slice-008b-ndd-cli-self-binding/sketches/ndd-cli-self.ascii",
      "conveyor/runs/2026/06/21/slice-008b-ndd-cli-self-binding/final/run-summary.md",
      "conveyor/runs/2026/06/21/slice-008b-ndd-cli-self-binding/final/commit-message.txt",
      "conveyor/runs/2026/06/21/slice-008b-ndd-cli-self-binding/final/release-packet.v1.json"
    ],
    blockedIfMissing: [
      "visual projection model",
      "self sketch receipt",
      "node projection receipt"
    ],
    releaseBlockedUntilAllReceiptsExist: true
  });
  const liveReceipt = {
    schemaVersion: "defracto.ndd-cli-self-sketch.receipt.v1",
    receiptKey: "defracto.ndd-cli-self-sketch.receipt.v1",
    status: "passed",
    visualProjectionModelPath: "examples/visual-projection-models/ndd-cli-self.visual-model.v1.json",
    sketchPath: "conveyor/runs/2026/06/21/slice-008b-ndd-cli-self-binding/sketches/ndd-cli-self.ascii",
    sketchHash,
    receiptHash,
    verificationStatus: "locally_verified",
    externalTrustServiceStatus: "not_integrated",
    modelUsed: model
  };
  writeJsonFile(receiptPath, liveReceipt);
  const nodeProjectionReceipt = {
    schemaVersion: "defracto.ndd-cli.node-projection.receipt.v1",
    receiptKey: "defracto.ndd-cli.node-projection.receipt.v1",
    status: "pending",
    projectionTarget: "generated/cli/node/ndd.cjs",
    projectionKind: "thin_generated_facade",
    verificationStatus: "pending_projection_receipt",
    reason: "The CLI facade remains a bootstrap mechanism until a resolver-backed projection receipt is materialized.",
    sourceTruth: "declared_json_contract"
  };
  writeJsonFile(nodeProjectionReceiptPath, nodeProjectionReceipt);
  writeTextFile(path.join(finalDir, "run-summary.md"), [
    "# NDD CLI Self-Binding Run Summary",
    "",
    "The CLI self-sketch was generated from the declared visual model and written to the live envelope.",
    "The Node facade remains a bootstrap mechanism pending a resolver-backed projection receipt."
  ].join("\n"));
  writeTextFile(path.join(finalDir, "commit-message.txt"), [
    "Slice 008B: bind the NDD CLI to the conveyor",
    "",
    "Project the CLI self sketch from its declared visual model and classify the Node facade honestly."
  ].join("\n"));
  writeJsonFile(path.join(finalDir, "release-packet.v1.json"), {
    schemaVersion: "defracto.release-packet.v1",
    releaseKey: "defracto.release.slice-008b-ndd-cli-self-binding.v1",
    status: "blocked",
    checkedAt: new Date().toISOString(),
    runKey: "defracto.run.slice-008b-ndd-cli-self-binding.v1",
    blockedReasons: [
      "Node facade is pending projection receipt",
      "resolver-backed projection receipt not yet materialized"
    ],
    promotionTarget: "conveyor/runs/2026/06/21/reports/slice-008b-ndd-cli-self-binding.latest.md"
  });
  writeJsonFile(path.join(liveDir, "lane-ledger.v1.json"), {
    schemaVersion: "defracto.lane-ledger.v1",
    ledgerKey: "defracto.slice-008b-ndd-cli-self-binding.ledger.v1",
    status: "passed",
    sketchPath: "conveyor/runs/2026/06/21/slice-008b-ndd-cli-self-binding/sketches/ndd-cli-self.ascii",
    receiptPath: "evidence/cli/ndd-cli.self-sketch.receipt.v1.json",
    nodeProjectionReceiptPath: "evidence/cli/ndd-cli.node-projection.receipt.v1.json"
  });
  return { sketchPath, receiptPath, nodeProjectionReceiptPath };
}

function runSelfSketch(argv) {
  const modelPath = path.resolve(SELF_VISUAL_MODEL_PATH);
  if (!fileExists(modelPath)) {
    fail(`Self visual projection model is missing at ${SELF_VISUAL_MODEL_PATH}.`, 9);
  }
  const model = JSON.parse(fs.readFileSync(modelPath, "utf8"));
  const sketch = renderSelfSketch(model);
  const sketchHash = sha256Buffer(Buffer.from(`${sketch}\n`, "utf8"));
  const liveReceiptStub = {
    receiptKey: "defracto.ndd-cli-self-sketch.receipt.v1",
    sketchHash,
    receiptHash: null
  };
  const receiptHash = sha256(JSON.stringify(liveReceiptStub));
  const envelopeDir = argv["out-dir"] ? path.resolve(String(argv["out-dir"])) : SELF_BINDING_RUN_DIR;
  const written = writeSelfSketchEnvelope({
    sketch,
    model: model.modelKey || model.title || "ndd-cli-self",
    sketchHash,
    receiptHash,
    envelopeDir
  });
  const output = {
    schemaVersion: "defracto.ndd-cli-self-sketch-result.v1",
    status: "passed",
    visualProjectionModelPath: "examples/visual-projection-models/ndd-cli-self.visual-model.v1.json",
    sketchPath: written.sketchPath,
    sketchHash,
    receiptPath: written.receiptPath,
    nodeProjectionReceiptPath: written.nodeProjectionReceiptPath,
    envelopePath: path.relative(process.cwd(), envelopeDir).replace(/\\/g, "/")
  };
  process.stdout.write(`${JSON.stringify(output, null, 2)}\n`);
}

function runSelfExplain() {
  const text = [
    "NDD CLI Self-Binding",
    "",
    "The CLI is a projected doorway into the conveyor.",
    "The CLI story, canonical spec, SEJ, projection manifest, and receipts define its authority.",
    "The live Node facade is still pending a full projection receipt, so the bootstrap implementation is classified honestly.",
    "The self sketch is projected from the declared visual model, not hard-coded as proof."
  ].join("\n");
  process.stdout.write(`${text}\n`);
}

async function main() {
  const argv = process.argv.slice(2);
  if (argv.length === 0 || argv.includes("-h") || argv.includes("--help")) {
    process.stdout.write(`${help()}\n`);
    return;
  }

  const [group, action, ...rest] = argv;
  if (group !== "handoff") {
    if (group === "self" && action === "sketch") {
      const parsed = parseArgs(rest);
      runSelfSketch(parsed);
      return;
    }
    if (group === "self" && action === "explain") {
      runSelfExplain();
      return;
    }
    fail(`Unsupported command group: ${group}.`, 2);
  }

  if (action === "run") {
    const parsed = parseArgs(rest);
    await runHandoff(parsed);
    return;
  }

  fail(`Unsupported handoff action: ${action}.`, 2);
}

module.exports = {
  main,
  runHandoff,
  runSelfSketch,
  runSelfExplain
};

if (require.main === module) {
  main().catch((error) => {
    fail(error && error.message ? error.message : String(error), 1);
  });
}
