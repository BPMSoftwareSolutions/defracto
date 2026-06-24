# slice-058c-conveyor-owned-story-run-bootstrap

Status: passed

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

## CLI Dispatch

`story plan` is now recognized by the top-level semantic CLI dispatcher.

Without a run date, the route blocks closed:

```json
{
  "status": "blocked",
  "blocker": "run_date_missing",
  "error": "Run envelope path projection failed closed: run_date_missing"
}
```

This avoids hardcoding concrete dates in durable dispatch authority.

With an explicit run date:

```powershell
node generated\cli\node\ndd.cjs story plan `
  --text "As a Defracto platform operator, I want platform-agent-created durable authority to be invalid unless it is backed by conveyor source, manifest, handoff packet, and receipt, so that agents coordinate through the conveyor instead of manually authoring semantic authority." `
  --slice platform-agent-authority-routing `
  --run-date 2026/06/24
```

Observed result:

```json
{
  "status": "ready",
  "sliceKey": "platform-agent-authority-routing",
  "runManifest": "conveyor/runs/2026/06/24/platform-agent-authority-routing/run.manifest.v1.json",
  "nextCommand": "node generated/cli/node/ndd.cjs story implement --slice <slice>"
}
```

## Materialized Run Evidence

```text
conveyor/runs/2026/06/24/platform-agent-authority-routing/run.manifest.v1.json
conveyor/runs/2026/06/24/platform-agent-authority-routing/source/story.source.v1.md
conveyor/runs/2026/06/24/platform-agent-authority-routing/handoff-packets/01-story-intake.packet.v1.json
conveyor/runs/2026/06/24/platform-agent-authority-routing/receipts/story-run-bootstrap.receipt.v1.json
```

The bootstrap receipt reports:

```json
{
  "status": "ready",
  "durableAuthorityCreated": false
}
```

The manifest now includes:

```text
stages.storyImplement.blocker = story_implement_lane_not_declared
```

## Guardrail Result

Bootstrap created run evidence only. It did not create policy, gate, schema, SEJ, SOG, SDK, or durable product authority.

## Remaining Gap

The next downstream platform-agent authority-routing lane is not declared yet. `story implement --slice platform-agent-authority-routing` now loads this manifest and blocks on that missing lane instead of falling through to visual proof.

