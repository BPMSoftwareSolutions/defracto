# Slice 007F Target Sketch Equivalence Invocation Evidence

## Status

blocked

## Invocation

- `npx sej-resolver resolve --sej contracts/sej/validate-founding-ui-sketch-equivalence.sej.v1.json`

## Findings

### Blockers

- `missing_reference`: the equivalence gate failed closed because the current rendered doorway does not match the target sketch fixture's expected future artifact path.

### Warnings

- No HTML, SVG, React, CSS, or runtime projection behavior was introduced.
- The current ASCII doorway is still the generated resolver-materialized shell, not the governed founding-lineage-flow target sketch.
- No renderer-owned product truth was introduced.

### Notes

- The invocation evidence records the target sketch fixture path, rendered sketch path, equivalence rule set, checked node keys, checked edge keys, checked semantic bindings, checked layout constraints, and both hashes.
- The resolver computed the target sketch hash and rendered sketch hash, then failed closed at the equivalence gate.
- The blocked result is honest evidence that the current doorway is not yet equivalent to the declared target sketch fixture.

## Completion Posture

Slice 007F passes only if the materialized sketch validates against the declared target sketch fixture.
The receipt proves target-sketch equivalence invocation only.
It does not prove generalized UI rendering.
It does not prove SVG, HTML, React, CSS, or runtime projection.
No renderer-owned product truth is introduced.
