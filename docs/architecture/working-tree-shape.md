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
|   |   `-- sej-contract.schema.v1.json
|   |-- operations/
|   |   |-- render-narrative-graph.operation-requirements.v1.json
|   |   |-- validate-story-packet.operation-requirements.v1.json
|   |   |-- validate-lineage.operation-requirements.v1.json
|   |   `-- validate-lineage.resolver-capability-requirements.v1.json
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
|       `-- validate-lineage.sej.v1.json
|   `-- taxonomies/
|       |-- body-kind.taxonomy.v1.json
|       |-- body-disposition.taxonomy.v1.json
|       `-- finding-taxonomy.v1.json
|   `-- policies/
|       `-- no-competing-narratives.policy.v1.json
|
|-- stories/
|   `-- tools/
|       |-- render-narrative-graph.story.v1.json
|       |-- validate-story-packet.story.v1.json
|       `-- validate-lineage.story.v1.json
|
|-- specs/
|   `-- canonical/
|       `-- tools/
|           |-- render-narrative-graph.canonical-spec.v1.json
|           |-- validate-story-packet.canonical-spec.v1.json
|           `-- validate-lineage.canonical-spec.v1.json
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
|   `-- tools/
|       `-- validate-lineage/
|           `-- README.md
|
|-- evidence/
|   `-- facades/
|       |-- render-narrative-graph.facade-materialization.receipt.v1.json
|       |-- validate-story-packet.facade-materialization.receipt.v1.json
|       `-- validate-lineage.facade-materialization.receipt.v1.json
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

Operational doorway shape under contract review:

- `contracts/sej/materialize-operational-validate-story-packet-facade.sej.v1.json`
- `contracts/sej/materialize-operational-render-narrative-graph-facade.sej.v1.json`
- The operational doorway materialization is complete; bootstrap invocation evidence is now recorded.
