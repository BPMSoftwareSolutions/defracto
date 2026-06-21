# Working Tree Shape

```text
defracto/
|-- README.md
|-- GOVERNANCE.md
|-- ROADMAP.md
|
|-- docs/
|   |-- Implementation Plan.md
|   |-- decisions/
|   |   `-- D006-minimum-artifact-shapes.md
|   |-- architecture/
|   |   `-- working-tree-shape.md
|   |-- doctrine/
|   |   |-- body-disposition.md
|   |   `-- executable-entry-gate.md
|   `-- origin/
|
|-- contracts/
|   |-- schemas/
|   |   |-- README.md
|   |   |-- body-record.schema.v1.json
|   |   |-- narrative-source.schema.v1.json
|   |   |-- story-packet.schema.v1.json
|   |   |-- canonical-spec.schema.v1.json
|   |   |-- lineage-validation-input.schema.v1.json
|   |   |-- lineage-validation-result.schema.v1.json
|   |   |-- lineage-finding.schema.v1.json
|   |   |-- projection-manifest.schema.v1.json
|   |   |-- lineage-receipt.schema.v1.json
|   |   |-- target-sketch.schema.v1.json
|   |   |-- visual-node.schema.v1.json
|   |   |-- visual-edge.schema.v1.json
|   |   |-- visual-layout.schema.v1.json
|   |   |-- visual-projection-model.schema.v1.json
|   |   |-- visual-surface.schema.v1.json
|   |   |-- visual-region.schema.v1.json
|   |   |-- visual-container.schema.v1.json
|   |   |-- visual-render-adapter.schema.v1.json
|   |   |-- ascii-render-kernel.schema.v1.json
|   |   |-- ascii-render-result.schema.v1.json
|   |   |-- visual-narrative-source.schema.v1.json
|   |   |-- source-role-change-receipt.schema.v1.json
|   |   |-- run-visual-evidence.schema.v1.json
|   |   |-- run-sketch-materialization-receipt.schema.v1.json
|   |   `-- sketch-equivalence.schema.v1.json
|   |   `-- sej-contract.schema.v1.json
|   `-- policies/
|       |-- visual-projection-determinism.policy.v1.json
|       |-- no-manual-run-sketch-authoring.policy.v1.json
|       `-- ascii-render-kernel-boundary.policy.v1.json
|   |-- operations/
|   |   |-- render-narrative-graph.operation-requirements.v1.json
|   |   |-- validate-story-packet.operation-requirements.v1.json
|   |   |-- validate-lineage.operation-requirements.v1.json
|   |   |-- validate-lineage.resolver-capability-requirements.v1.json
|   |   |-- ascii-render-kernel.operation-requirements.v1.json
|   |   `-- sketch-equivalence.operation-requirements.v1.json
|   |-- projections/
|   |   |-- render-narrative-graph.facade-manifest.v1.json
|   |   `-- validate-story-packet.facade-manifest.v1.json
|   |   `-- validate-lineage.facade-manifest.v1.json
|   `-- sej/
|       |-- materialize-render-narrative-graph-facade.sej.v1.json
|       |-- materialize-validate-story-packet-facade.sej.v1.json
|       |-- render-narrative-graph.sej.v1.json
|       |-- validate-story-packet.sej.v1.json
|       `-- materialize-validate-lineage-facade.sej.v1.json
|       |-- validate-lineage.sej.v1.json
|       |-- materialize-run-sketch-007m1.sej.v1.json
|       `-- validate-founding-ui-sketch-equivalence.sej.v1.json
|   `-- taxonomies/
|       |-- body-kind.taxonomy.v1.json
|       |-- body-disposition.taxonomy.v1.json
|       `-- finding-taxonomy.v1.json
|   `-- policies/
|       `-- no-competing-narratives.policy.v1.json
|
|-- stories/
|   |-- tools/
|       |-- render-narrative-graph.story.v1.json
|       |-- validate-story-packet.story.v1.json
|       `-- validate-lineage.story.v1.json
|   `-- sources/
|       `-- visual-narrative-source.story.v1.json
|
|-- specs/
|   |-- canonical/
|       `-- tools/
|           |-- render-narrative-graph.canonical-spec.v1.json
|           |-- validate-story-packet.canonical-spec.v1.json
|           `-- validate-lineage.canonical-spec.v1.json
|       `-- sources/
|           `-- visual-narrative-source.canonical-spec.v1.json
|
|-- conveyor/
|   |-- lanes/
|   |   |-- 00-capture-narrative/
|   |   |-- 01-extract-story/
|   |   |-- 02-author-canonical-spec/
|   |   `-- 03-project-markdown/
|   `-- gates/
|       |-- no-competing-narratives.gate.v1.json
|       `-- projection-lineage-required.gate.v1.json
|
|-- examples/
|   |-- founding-conversation/
|       |-- source/
|       |   `-- conversation-fractal.md
|       |-- story/
|       |   `-- founding-story.v1.json
|       |-- canonical/
|       |   `-- founding-canonical-spec.v1.json
|       |-- projections/
|       |   `-- markdown/
|       |       |-- founding-markdown.projection-manifest.v1.json
|       |       `-- founding-story.md
|       `-- evidence/
|           `-- founding-lineage.receipt.v1.json
|   |-- target-sketches/
|       |-- founding-lineage-flow.target.v1.json
|       |-- semantic-execution-conveyor.target.v1.json
|       |-- governed-visual-projection.target.v1.json
|       |-- projections/
|       |   `-- founding-lineage-flow.ascii
|       `-- evidence/
|           `-- founding-lineage-flow.render.receipt.v1.json
|-- evidence/
|   |-- facades/
|   |   |-- render-narrative-graph.facade-materialization.receipt.v1.json
|   |   |-- validate-story-packet.facade-materialization.receipt.v1.json
|   |   `-- validate-lineage.facade-materialization.receipt.v1.json
|   `-- invocations/
|       `-- founding-ui-sketch.equivalence-invocation.receipt.v1.json
|
|-- tools/
|   |-- README.md
|   |-- render-narrative-graph.contract.md
|   |-- validate-story-packet.contract.md
|   |-- render-narrative-graph.js
|   |-- validate-story-packet.js
|   |-- validate-lineage.js
|   `-- validate-lineage.contract.md
|   `-- validate-lineage.executable-projection.contract.md
|
`-- reports/
    |-- README.md
    |-- sketches/
    |   |-- README.md
    |   `-- slice-007m1-run-visual-evidence-standard.ascii
    |-- body-disposition.seed.md
    |-- narrative-graph.latest.md
    |-- lineage.latest.md
    |-- slice-001-artifact-review.latest.md
    |-- slice-002-contract-review.latest.md
    |-- slice-003a-contract-review.latest.md
    |-- slice-003b-entry-gate-review.latest.md
    |-- slice-003c-sej-contract-review.latest.md
    |-- slice-003c1-sej-existing-primitive-rewrite.latest.md
    |-- slice-003c2-bootstrap-sej-narrowing.latest.md
    |-- slice-003d-resolver-capability-handshake.latest.md
    |-- slice-003d1-resolver-capability-requirements.latest.md
    |-- slice-003d2-resolver-capability-handshake-refresh.latest.md
    |-- slice-003d3-final-bootstrap-resolver-handshake.latest.md
    |-- slice-003e-facade-projection-review.latest.md
    |-- slice-003f-facade-materialization-sej-review.latest.md
    |-- slice-003g-resolver-backed-facade-materialization.latest.md
    |-- slice-003h-generated-doorway-coherence-review.latest.md
    |-- slice-004a-story-packet-validator-contract-review.latest.md
    |-- slice-004b-narrative-graph-reporter-contract-review.latest.md
    |-- slice-004c-story-graph-tool-pair-coherence-review.latest.md
    |-- slice-004d-story-graph-sej-contract-review.latest.md
    |-- slice-004e-story-graph-resolver-capability-handshake.latest.md
    |-- slice-004f-story-graph-facade-projection-review.latest.md
|-- slice-004g-story-graph-facade-materialization-sej-review.latest.md
|-- slice-004h-story-graph-resolver-backed-facade-materialization.latest.md
|-- slice-004i-story-graph-doorway-operationalization-contract-review.latest.md
|-- slice-004j-story-graph-operational-doorway-materialization.latest.md
|-- slice-004k-story-graph-bootstrap-invocation-evidence.latest.md
|-- slice-004-story-graph-bootstrap-closure.latest.md
|-- slice-005-sej-validation-contract-expansion.latest.md
|-- slice-006-resolver-path-consolidation.latest.md
|-- slice-007a-ui-sketch-projection-contract-review.latest.md
|-- slice-007b-ui-sketch-sej-render-contract-review.latest.md
|-- slice-007c-ui-sketch-resolver-capability-handshake.latest.md
|-- slice-007d-ui-sketch-materialization-sej-review.latest.md
|-- slice-007d1-ui-sketch-deterministic-layout-review.latest.md
|-- slice-007e-resolver-backed-ui-sketch-materialization.latest.md
|-- slice-007d2-visual-target-sketch-definition-review.latest.md
|-- slice-007e1-rematerialize-target-sketch-canonical-path.latest.md
|-- slice-007f-target-sketch-equivalence-invocation-evidence.latest.md
|-- slice-007f1-target-sketch-projection-path-reconciliation.latest.md
|-- slice-007f2-target-sketch-equivalence-validation.latest.md
|-- slice-007g-visual-projection-model-contract.latest.md
|-- slice-007g2-visual-projection-model-schema-policy.latest.md
|-- slice-007h-deterministic-ascii-render-kernel-contract.latest.md
|-- slice-007l-visual-narrative-source-contract-review.latest.md
|-- slice-007m-visual-source-role-change-receipt-contract.latest.md
|-- slice-007m1-run-visual-evidence-standard.latest.md
|-- slice-007m2-run-sketch-authoring-violation-disposition.latest.md
|-- slice-007m3-run-sketch-materialization-sej-contract.latest.md
|-- slice-007m3a-static-ascii-materialization-posture-correction.latest.md
`-- semantic-coherence-review.latest.md
```

The tree itself tells the conveyor story:

- `docs/` explains intent and decisions.
- `contracts/` defines shape.
- `conveyor/` defines movement.
- `examples/` proves the founding chain.
- `tools/` declares future bounded execution.
- `reports/` renders reviewable posture.

Current generated-doorway posture:

- `tools/validate-lineage.js`, `tools/validate-story-packet.js`, and `tools/render-narrative-graph.js` exist only as resolver-materialized generated doorways.
- `evidence/facades/validate-lineage.facade-materialization.receipt.v1.json`, `evidence/facades/validate-story-packet.facade-materialization.receipt.v1.json`, and `evidence/facades/render-narrative-graph.facade-materialization.receipt.v1.json` prove materialization only.
- `evidence/invocations/validate-story-packet.bootstrap-invocation.receipt.v1.json` and `evidence/invocations/render-narrative-graph.bootstrap-invocation.receipt.v1.json` prove bootstrap invocation only.
- No hand-authored executable validator body owns truth yet.
- `reports/slice-004-story-graph-bootstrap-closure.latest.md` closes the bootstrap line as evidence-backed and bounded.
- `reports/slice-005-sej-validation-contract-expansion.latest.md` expands the SEJ validation boundary without adding executable behavior.
- `reports/slice-006-resolver-path-consolidation.latest.md` consolidates resolver evidence posture without adding runtime capability.
- `reports/slice-007a-ui-sketch-projection-contract-review.latest.md` declares a governed UI sketch projection without rendering behavior.
- `reports/slice-007b-ui-sketch-sej-render-contract-review.latest.md` declares the UI sketch SEJ render contract without rendering behavior.
- `reports/slice-007c-ui-sketch-resolver-capability-handshake.latest.md` confirms the bounded render SEJ against the current resolver primitive surface.
- `reports/slice-007d-ui-sketch-materialization-sej-review.latest.md` declares the UI sketch materialization SEJ without invoking the resolver.
- `reports/slice-007d1-ui-sketch-deterministic-layout-review.latest.md` locks the ASCII sketch layout authority without rendering behavior.
- `reports/slice-007e-resolver-backed-ui-sketch-materialization.latest.md` records resolver-backed ASCII sketch materialization only, using deterministic layout authority.
- `reports/slice-007d2-visual-target-sketch-definition-review.latest.md` defines target sketch fixtures for future governed visual projections without rendering behavior.
- `reports/slice-007e1-rematerialize-target-sketch-canonical-path.latest.md` records canonical-path rematerialization without re-running equivalence.
- `reports/slice-007f-target-sketch-equivalence-invocation-evidence.latest.md` records target-sketch equivalence invocation evidence for the materialized doorway.
- `reports/slice-007f1-target-sketch-projection-path-reconciliation.latest.md` reconciles the projection authority chain without re-rendering.
- `reports/slice-007f2-target-sketch-equivalence-validation.latest.md` records the passed equivalence judgment for the canonical-path sketch.
- `reports/slice-007g-visual-projection-model-contract.latest.md` establishes the report-only visualProjectionModel posture.
- `reports/slice-007g2-visual-projection-model-schema-policy.latest.md` establishes the governed visualProjectionModel schema and policy artifacts.
- `examples/target-sketches/evidence/founding-lineage-flow.render.receipt.v1.json` records the canonical-path render receipt.
- `evidence/invocations/founding-ui-sketch.equivalence-invocation.receipt.v1.json` records the passed equivalence invocation evidence, including target and rendered hashes.
- The current system proves deterministic writing, not yet deterministic visual projection.
- Hard-coded ASCII materialization is only a static bridge; the `visualProjectionModel` is the governed foundation for future renderers.
- Slice 007H defines the deterministic ASCII render kernel contract, Slice 007L defines the visual narrative source contract, Slice 007M defines the visual source role-change receipt contract, Slice 007M.3 defines the run-sketch materialization SEJ contract, and Slice 007M.3A corrects its static ASCII posture.
- `reports/slice-007m3-run-sketch-materialization-sej-contract.latest.md` declares the run-sketch materialization path without invoking the resolver.
- `reports/slice-007m3a-static-ascii-materialization-posture-correction.latest.md` corrects the posture so the bridge is not mistaken for deterministic visual projection.

Operational doorway shape under contract review:

- `contracts/sej/materialize-operational-validate-story-packet-facade.sej.v1.json`
- `contracts/sej/materialize-operational-render-narrative-graph-facade.sej.v1.json`
- The operational doorway materialization is complete; bootstrap invocation evidence is now recorded.
