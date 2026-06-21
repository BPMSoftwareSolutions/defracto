# Slice 007F.2 Target Sketch Equivalence Validation

## Status

passed

## Invocation

- `npx sej-resolver resolve --sej contracts/sej/validate-founding-ui-sketch-equivalence.sej.v1.json`

## Findings

### Blockers

- None.

### Warnings

- No HTML, SVG, React, CSS, or runtime projection behavior was introduced.
- No renderer code was added.
- The older doorway file remains on disk as a stale artifact until a later cleanup slice classifies or removes it.

### Notes

- The equivalence gate passed for the canonical target path `projections/target-sketches/founding-lineage-flow.ascii`.
- The invocation receipt records the target sketch fixture path, rendered sketch path, equivalence rule set, checked node keys, checked edge keys, checked semantic bindings, checked layout constraints, and both hashes.
- The target sketch hash was `be784d53dbf7af232aebc2f343a20bf76352e7bb8ca97594a0f92d7c4acf63a5`.
- The rendered sketch hash was `ce5845f9e567e44ccd2e6691fbe1c2777dbd747602841d309ec0da5330abfa2d`.
- The target sketch remains the authority, the resolver output remains the projection, and the receipt records the judgment.

## Completion Posture

Slice 007F.2 passes only if the materialized sketch validates against the declared target sketch fixture.
The receipt proves target-sketch equivalence invocation only.
It does not prove generalized UI rendering.
It does not prove SVG, HTML, React, CSS, or runtime projection.
No renderer-owned product truth is introduced.

