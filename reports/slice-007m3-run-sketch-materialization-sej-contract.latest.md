# Slice 007M.3 Run Sketch Materialization SEJ Contract

## Status

passed

## Purpose

Slice 007M.3 declares the pipeline path for static ASCII run-sketch materialization without invoking the resolver.

It does not materialize the sketch yet.

It does not repair the existing sketch by hand.

It does not claim governed visual evidence yet.

Slice 007M.3A corrects the posture so the SEJ is explicitly classified as static ASCII materialization, not deterministic visual projection.

## Created Artifacts

```text
contracts/sej/materialize-run-sketch-007m1.sej.v1.json
contracts/schemas/run-sketch-materialization-receipt.schema.v1.json
contracts/policies/no-manual-run-sketch-authoring.policy.v1.json
```

## Materialization Boundary

The materialization SEJ declares:

- source visual authority
- target run sketch path
- materialization receipt path
- generated file anchors
- artifact hash expectation
- forbidden manual edit policy
- static ASCII materialization posture
- completion posture

Target run sketch path:

- `reports/sketches/slice-007m1-run-visual-evidence-standard.ascii`

Materialization receipt path:

- `evidence/visual/run-sketches/slice-007m1-run-visual-evidence-standard.materialization.receipt.v1.json`

## Governed Status

The existing sketch remains manual visual seed or ungoverned visual draft until resolver materialization occurs.

No governed visual evidence is claimed in this slice.

The current contract is a resolver-backed static ASCII materialization bridge, not a deterministic visual renderer.

The ASCII content is declared in the SEJ, and the resolver would write that declared content if and when materialization occurs.

The contract does not prove `visualProjectionModel` rendering, deterministic layout generation, or the existence of a renderer.

## Completion Posture

Slice 007M.3 passes only as a materialization contract, and Slice 007M.3A corrects it as a static ASCII materialization bridge.

No sketch is materialized yet.

Governed visual evidence remains deferred.

The pipeline path is now declared, but execution remains for a later slice.

Future visual evidence must move to `visualProjectionModel`-driven rendering rather than hard-coded ASCII lines.
