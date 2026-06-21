# Defracto: Narrative Execution Fabric

Defracto is a truth-escalation system for turning preserved narrative into governed story, canonical specification, projections, lineage evidence, release material, and reports.

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
- `source/cli/` holds the source narrative for the NDD CLI doorway.
- `conveyor/` defines the lanes, gates, pipelines, and run envelopes.
- `conveyor/workers/` declares the bounded Gemini Flash worker profiles and response contracts.
- `conveyor/handoff/` declares the handoff package, dispatch, and response schemas.
- `conveyor/cli/` declares the CLI orchestration contract and command map.
- `conveyor/trust/` declares the surface-signature language that proves a lane passed through the trust fabric.
- `conveyor/runs/2026/06/21/slice-008-handoff-conveyor-cli-proof/` shows the explicit CLI-to-Gemini Flash handoff stack for the conveyor proof slice.
- `conveyor/runs/2026/06/21/slice-008b-ndd-cli-self-binding/` shows the CLI self-binding envelope, including the projected self-sketch and ledgered receipts.
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

The existing lineage and visual-proof slices remain valid, but the next structural lock is the handoff spine itself: CLI entrypoint, handoff package, lane dispatch, Gemini Flash worker profile, Gemini Flash response, receipt, run ledger, tie-out review, and release packet.

The CLI is now part of the doctrine, not a hidden bootstrap afterthought. Slice 008B binds the `ndd` doorway back to its story, canonical spec, SEJ, projection manifest, self visual-projection model, and receipt-backed self-sketch.
The CLI lineage now also starts in `source/cli/ndd-cli.source-narrative.md`, so the doorway is traceable from source narrative through story and projection.

`generated/tools/validate-lineage.js`, `generated/tools/validate-story-packet.js`, and `generated/tools/render-narrative-graph.js` exist only as resolver-materialized generated doorways.
No hand-authored executable validator body, SEJ runtime, resolver execution code, UI projection, or automation script exists yet.
The canonical target sketch validation has passed for `projections/target-sketches/founding-lineage-flow.ascii`; the older doorway file remains a stale artifact until a later cleanup slice classifies or removes it.
Hard-coded ASCII in a SEJ is static materialization only; it is not the product foundation.
The `visualProjectionModel` is the product center for future renderers, and future ASCII, SVG, HTML/CSS, DOCX, PDF, PPTX, Google Docs, Google Slides, and video outputs must derive from it.
The conveyor does not hide agent work behind a generic architecture label; CLI orchestrates, Gemini Flash performs bounded lane work, receipts prove the lane, and the conveyor advances only on receipts.
The trust fabric adds a surface signature requirement so every meaningful lane artifact can be traced to an attested Gemini Flash worker rather than a hand-stitched platform or human edit.
The canonical Gemini Flash API key environment variable for this conveyor is `LOC_GEMINI_API_KEY`.

Live CLI entrypoint:

```text
npx ndd handoff run --text "Describe the conveyor as a clean ASCII sketch."
```

CLI self-binding proof:

```text
ndd self sketch
```

That command materializes the CLI self visual projection model into a receipt-backed ASCII surface under `conveyor/runs/2026/06/21/slice-008b-ndd-cli-self-binding/`.

The CLI fails closed if Gemini Flash is unavailable, the key is missing, or the response does not carry a live trust signature.


