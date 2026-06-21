# Tools

This folder is reserved for bounded execution contracts, validators, and reporters.

No hand-authored executable validator body exists.
`tools/validate-lineage.js` exists only as a resolver-materialized generated doorway and owns no validation truth.

Current contract files:

- `validate-lineage.contract.md`

Related Slice 002 contract package:

- `stories/tools/validate-lineage.story.v1.json`
- `specs/canonical/tools/validate-lineage.canonical-spec.v1.json`
- `contracts/schemas/lineage-validation-input.schema.v1.json`
- `contracts/schemas/lineage-validation-result.schema.v1.json`
- `contracts/schemas/lineage-finding.schema.v1.json`
- `examples/tools/validate-lineage/README.md`

Related Slice 003A executable projection contract:

- `tools/validate-lineage.executable-projection.contract.md`

Related Slice 003C SEJ contract package:

- `contracts/schemas/sej-contract.schema.v1.json`
- `contracts/sej/validate-lineage.sej.v1.json`
- `contracts/operations/validate-lineage.operation-requirements.v1.json`
- `reports/slice-003c-sej-contract-review.latest.md`

Related Slice 003D.1 capability packet:

- `contracts/operations/validate-lineage.resolver-capability-requirements.v1.json`
- `reports/slice-003d1-resolver-capability-requirements.latest.md`

Related Slice 003E facade projection manifest:

- `contracts/projections/validate-lineage.facade-manifest.v1.json`
- `reports/slice-003e-facade-projection-review.latest.md`

Related Slice 003F facade materialization SEJ:

- `contracts/sej/materialize-validate-lineage-facade.sej.v1.json`
- `reports/slice-003f-facade-materialization-sej-review.latest.md`

Related Slice 003G resolver-backed facade materialization:

- `evidence/facades/validate-lineage.facade-materialization.receipt.v1.json`
- `reports/slice-003g-resolver-backed-facade-materialization.latest.md`

Related Slice 003H generated doorway coherence review:

- `reports/slice-003h-generated-doorway-coherence-review.latest.md`

Related body disposition seed:

- `contracts/schemas/body-record.schema.v1.json`
- `contracts/taxonomies/body-kind.taxonomy.v1.json`
- `contracts/taxonomies/body-disposition.taxonomy.v1.json`
- `contracts/taxonomies/finding-taxonomy.v1.json`
- `docs/doctrine/body-disposition.md`
- `reports/body-disposition.seed.md`

Related Slice 004A story packet validator contract:

- `stories/tools/validate-story-packet.story.v1.json`
- `specs/canonical/tools/validate-story-packet.canonical-spec.v1.json`
- `contracts/schemas/story-packet-validation-input.schema.v1.json`
- `contracts/schemas/story-packet-validation-result.schema.v1.json`
- `tools/validate-story-packet.contract.md`
- `reports/slice-004a-story-packet-validator-contract-review.latest.md`

Related Slice 004B narrative graph reporter contract:

- `stories/tools/render-narrative-graph.story.v1.json`
- `specs/canonical/tools/render-narrative-graph.canonical-spec.v1.json`
- `contracts/schemas/narrative-graph-render-input.schema.v1.json`
- `contracts/schemas/narrative-graph-render-result.schema.v1.json`
- `tools/render-narrative-graph.contract.md`
- `reports/slice-004b-narrative-graph-reporter-contract-review.latest.md`

Related Slice 004C story/graph tool pair coherence review:

- `reports/slice-004c-story-graph-tool-pair-coherence-review.latest.md`

Related Slice 004D story/graph SEJ contract definitions:

- `contracts/sej/validate-story-packet.sej.v1.json`
- `contracts/sej/render-narrative-graph.sej.v1.json`
- `contracts/operations/validate-story-packet.operation-requirements.v1.json`
- `contracts/operations/render-narrative-graph.operation-requirements.v1.json`
- `reports/slice-004d-story-graph-sej-contract-review.latest.md`

Related Slice 004E story/graph resolver capability handshake:

- `reports/slice-004e-story-graph-resolver-capability-handshake.latest.md`

Related Slice 004F story/graph facade projection manifests:

- `contracts/projections/validate-story-packet.facade-manifest.v1.json`
- `contracts/projections/render-narrative-graph.facade-manifest.v1.json`
- `reports/slice-004f-story-graph-facade-projection-review.latest.md`

Related Slice 004G story/graph facade materialization SEJ:

- `contracts/sej/materialize-validate-story-packet-facade.sej.v1.json`
- `contracts/sej/materialize-render-narrative-graph-facade.sej.v1.json`
- `reports/slice-004g-story-graph-facade-materialization-sej-review.latest.md`

Related Slice 004H story/graph resolver-backed facade materialization:

- `evidence/facades/validate-story-packet.facade-materialization.receipt.v1.json`
- `evidence/facades/render-narrative-graph.facade-materialization.receipt.v1.json`
- `reports/slice-004h-story-graph-resolver-backed-facade-materialization.latest.md`

Related Slice 004I story/graph generated doorway operationalization contract:

- `contracts/sej/materialize-operational-validate-story-packet-facade.sej.v1.json`
- `contracts/sej/materialize-operational-render-narrative-graph-facade.sej.v1.json`
- `reports/slice-004i-story-graph-doorway-operationalization-contract-review.latest.md`

Slice 004J story/graph operational doorway materialization:

- `reports/slice-004j-story-graph-operational-doorway-materialization.latest.md`

Slice 004K story/graph bootstrap invocation evidence:

- `evidence/invocations/validate-story-packet.bootstrap-invocation.receipt.v1.json`
- `evidence/invocations/render-narrative-graph.bootstrap-invocation.receipt.v1.json`
- `reports/slice-004k-story-graph-bootstrap-invocation-evidence.latest.md`

Slice 004 bootstrap closure:

- `reports/slice-004-story-graph-bootstrap-closure.latest.md`

Slice 005 generalized SEJ validation contract expansion:

- `contracts/schemas/sej-validation-contract.schema.v1.json`
- `contracts/operations/general-validation.operation-requirements.v1.json`
- `contracts/policies/sej-validation-expansion.policy.v1.json`
- `reports/slice-005-sej-validation-contract-expansion.latest.md`

Slice 006 resolver path consolidation and evidence model:

- `contracts/schemas/resolver-invocation-receipt.schema.v1.json`
- `contracts/schemas/resolver-equivalence-report.schema.v1.json`
- `contracts/policies/resolver-execution-evidence.policy.v1.json`
- `reports/slice-006-resolver-path-consolidation.latest.md`

Related Slice 007H deterministic ASCII render kernel contract:

- `contracts/schemas/ascii-render-kernel.schema.v1.json`
- `contracts/schemas/ascii-render-result.schema.v1.json`
- `contracts/operations/ascii-render-kernel.operation-requirements.v1.json`
- `contracts/policies/ascii-render-kernel-boundary.policy.v1.json`
- `reports/slice-007h-deterministic-ascii-render-kernel-contract.latest.md`

Future hand-authored tools must be introduced only after their story, canonical spec, schemas, and evidence expectations are approved.
