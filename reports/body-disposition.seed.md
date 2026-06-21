# Body Disposition Seed

## Report Metadata

- Report key: body-disposition.seed
- Generated mode: manual-seed
- Status: passed

## Body Records

| Body Key | Body Kind | Location | Disposition |
|---|---|---|---|
| defracto.tools.validate_lineage.story.v1 | dto_shape | stories/tools/validate-lineage.story.v1.json | authorized_dto_shape |
| defracto.tools.validate_lineage.canonical_spec.v1 | canonical_spec_body | specs/canonical/tools/validate-lineage.canonical-spec.v1.json | canonical_spec_body |
| defracto.lineage_validation_input.v1 | dto_shape | contracts/schemas/lineage-validation-input.schema.v1.json | authorized_dto_shape |
| defracto.lineage_validation_result.v1 | dto_shape | contracts/schemas/lineage-validation-result.schema.v1.json | authorized_dto_shape |
| defracto.lineage_finding.v1 | dto_shape | contracts/schemas/lineage-finding.schema.v1.json | authorized_dto_shape |
| defracto.tools.validate_lineage.executable_body.v1 | executable_tool_body | tools/validate-lineage.js | projected_executable_boundary |

## Findings

- No hand-authored executable body exists yet for `tools/validate-lineage.js`.
- The generated doorway exists only as a resolver-materialized artifact and carries no validation truth.
- The receipt proves materialization only, not operational validation.
- The body taxonomy is now precise enough to support bounded execution later.

## Completion Posture

The seed repo can classify the validate-lineage body lineage as a projected executable boundary while keeping the hand-authored validator absent and the generated doorway subordinate to semantic truth.
