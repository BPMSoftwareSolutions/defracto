# slice-058b-run-envelope-path-projection-language-support

Status: passed
Required operation: `run.envelope.paths.project.v1`
Resolver package: `@bpmsoftwaresolutions/sej-resolver-node@0.1.9`

## Result

The approved resolver package now exposes `run.envelope.paths.project.v1`.

The probe:

```text
contracts/sej/run-envelope-path-projection.probe.sej.v1.json
```

was executed with:

```json
{
  "sliceKey": "platform-agent-authority-routing",
  "runDate": "2026/06/24",
  "runRoot": "conveyor/runs",
  "allowedRoot": "conveyor/runs"
}
```

Observed result:

```json
{
  "status": "passed",
  "createsFiles": false,
  "paths": {
    "runEnvelopeRoot": "conveyor/runs/2026/06/24/platform-agent-authority-routing",
    "runManifestPath": "conveyor/runs/2026/06/24/platform-agent-authority-routing/run.manifest.v1.json",
    "sourceStoryPath": "conveyor/runs/2026/06/24/platform-agent-authority-routing/source/story.source.v1.md",
    "handoffPacketPath": "conveyor/runs/2026/06/24/platform-agent-authority-routing/handoff-packets/01-story-intake.packet.v1.json",
    "bootstrapReceiptPath": "conveyor/runs/2026/06/24/platform-agent-authority-routing/receipts/story-run-bootstrap.receipt.v1.json"
  }
}
```

## Evidence

`evidence/conveyor/run-envelope-path-projection.language-support.receipt.v1.json`

Receipt content hash from resolver emission:

```text
1c8221ba0054785845856ad91a5f40145c0512919f44f7088a697498a939f7d0
```

## Guardrail

The operation projected bounded paths only. It did not create files, materialize manifests, emit bootstrap receipts, interpret story text, or create durable authority.

