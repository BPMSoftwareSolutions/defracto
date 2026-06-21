# Slice 007F.1 Target Sketch Projection Path Reconciliation

## Status

passed

## Findings

### Blockers

- None.

### Warnings

- The existing rendered doorway file was not modified in this slice.
- No sketch was re-rendered in this slice.
- No equivalence invocation was re-run in this slice.
- The previous doorway path remains a stale artifact until the next materialization slice writes the canonical target path.

### Notes

- The projection manifest, layout contract, render SEJ, materialization SEJ, and equivalence SEJ now agree on the canonical target artifact path: `projections/target-sketches/founding-lineage-flow.ascii`.
- The receipt target path was updated to the canonical evidence path: `evidence/target-sketches/founding-lineage-flow.render.receipt.v1.json`.
- The target sketch fixture already pointed at the canonical target path, so the path mismatch was in the projection authority chain rather than in the target fixture.

## Completion Posture

Slice 007F.1 passes only when the target sketch fixture, materialization SEJ, render SEJ, layout contract, projection manifest, and equivalence SEJ all agree on the same target artifact path.
No sketch is re-rendered in this slice.
No equivalence invocation is re-run in this slice.
No renderer-owned product truth is introduced.

