# slice-058c-conveyor-owned-story-run-bootstrap

Status: blocked
Primary blocker: resolver_package_support_missing
Required operation: run.envelope.paths.project.v1

## Goal

Create a conveyor-owned bootstrap path from raw story text to run evidence:

```text
raw story text
-> run envelope paths
-> source story artifact
-> first handoff packet
-> run.manifest.v1.json
-> bootstrap receipt
```

## CLI Attempt

```powershell
node generated\cli\node\ndd.cjs story plan `
  --text "As a Defracto platform operator, I want platform-agent-created durable authority to be invalid unless it is backed by conveyor source, manifest, handoff packet, and receipt, so that agents coordinate through the conveyor instead of manually authoring semantic authority." `
  --slice platform-agent-authority-routing
```

Observed result:

```json
{
  "status": "blocked",
  "blocker": "unsupported_cli_command",
  "error": "Unsupported CLI command."
}
```

## Direct Bootstrap SOG Probe

The bootstrap SOG was invoked directly with:

```json
{
  "argv": [
    "story",
    "plan",
    "--text",
    "<operator story>",
    "--slice",
    "platform-agent-authority-routing"
  ],
  "runDate": "2026/06/24",
  "runRoot": "conveyor/runs",
  "allowedRoot": "conveyor/runs"
}
```

Observed result:

```json
{
  "status": "blocked",
  "blocker": "graph_step_failed",
  "error": "Unsupported primitive operation: run.envelope.paths.project.v1",
  "evidence": {
    "details": {
      "stepId": "projectRunEnvelopePaths",
      "capabilityKey": "run.envelope.paths.project.v1"
    }
  }
}
```

## Guardrail Result

No run envelope was created for `platform-agent-authority-routing`.

No source story, handoff packet, run manifest, bootstrap receipt, policy, gate, schema, SEJ, or SOG authority was materialized by this blocked bootstrap attempt.

## Next

058c can resume only after:

```text
1. the approved resolver package supports run.envelope.paths.project.v1
2. the top-level CLI route dispatch selects the story plan bootstrap route
```

