# Defracto: Narrative Execution Fabric

Defracto is a truth-escalation system for turning preserved narrative into governed story, canonical specification, projections, lineage evidence, and reports.

The repository is now shaped as a delivery conveyor:

```text
source
-> conveyor
-> projections
-> generated
-> evidence
-> releases
-> telemetry
```

## Founding Principle

Intent is sovereign.
Narrative is source truth.
Canonical spec is authority.
Code is projection.
Evidence is memory.

## Repository Shape

- `source/` holds intake surfaces and preserved narrative entry points.
- `conveyor/` defines the lanes, gates, pipelines, and run envelopes.
- `conveyor/runs/2026/06/21/slice-007h-sej-projected-ascii-render-kernel/` shows the bounded multi-agent pattern for the ASCII render kernel slice.
- `stories/` preserves the story packets that authorize transformations.
- `specs/` preserves canonical specs for source, tool, and projection authority.
- `contracts/` declares the minimum schema, policy, operation, and SEJ shapes.
- `projections/` will hold published surfaces promoted from the conveyor.
- `generated/` will hold machine-authored working outputs and derived artifacts.
- `tests/` holds conformance checks and executable evidence.
- `evidence/` stores receipts and validation outputs.
- `conveyor/runs/2026/06/21/reports/` holds human-readable proof surfaces.
- `releases/` collects release packets and promotion records.
- `telemetry/` captures observations that can become new source signal.
- `archive/` keeps retired or superseded material out of the active conveyor.

## Current Posture

The repo is accepted for architecture.

The existing lineage and visual-proof slices remain valid, but the next structural lock is the conveyor spine itself: intake, lanes, projections, receipts, release, and telemetry.

`generated/tools/validate-lineage.js`, `generated/tools/validate-story-packet.js`, and `generated/tools/render-narrative-graph.js` exist only as resolver-materialized generated doorways.
No hand-authored executable validator body, SEJ runtime, resolver execution code, UI projection, or automation script exists yet.
The canonical target sketch validation has passed for `projections/target-sketches/founding-lineage-flow.ascii`; the older doorway file remains a stale artifact until a later cleanup slice classifies or removes it.
Hard-coded ASCII in a SEJ is static materialization only; it is not the product foundation.
The `visualProjectionModel` is the product center for future renderers, and future ASCII, SVG, HTML/CSS, DOCX, PDF, PPTX, Google Docs, Google Slides, and video outputs must derive from it.


