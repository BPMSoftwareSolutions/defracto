# Slice 007E.1 Re-materialize Target Sketch To Canonical Path

## Status

passed

## Invocations

- `npx sej-resolver facade:generate --sej contracts/sej/materialize-founding-ui-sketch.sej.v1.json`

## Findings

### Blockers

- None.

### Warnings

- No HTML, React, CSS, SVG, or runtime projection behavior was introduced.
- The old artifact path remains on disk as a stale doorway artifact until a later cleanup slice classifies or removes it.
- No equivalence invocation was re-run in this slice.

### Notes

- The resolver materialized the governed ASCII sketch at the reconciled canonical target path: `examples/target-sketches/projections/founding-lineage-flow.ascii`.
- The resolver emitted the reconciled render receipt at `examples/target-sketches/evidence/founding-lineage-flow.render.receipt.v1.json`.
- The receipt records the canonical target path and the governed materialization hash.
- The older doorway file at `examples/founding-conversation/projections/ui/founding-ui-sketch.ascii` was left untouched.
- No renderer-owned product truth was introduced.

## Completion Posture

Slice 007E.1 passes only if the sketch is resolver-materialized at the canonical target-sketch path.
The receipt references the canonical target path.
The old artifact path remains stale unless explicitly classified or removed in a later cleanup slice.
No equivalence invocation is re-run in this slice.
No renderer-owned product truth is introduced.
