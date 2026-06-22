
# RF-002 / RF-003 DTO Body Mechanics Notes

## Core law

```text
No DTO contract may be ornamental.
No projection contract may be bypassed.
No matching shape counts unless lineage proves it.
No generated surface, adapter, worker, or SOG may shape its own DTO.
```

## RF-002

Implement:

- `dto.shape.validate.v1`
- `dto.project.v1`
- `dto.language_projection.v1`

DTO projection evidence must include:

- `dtoContractKey`
- `projectionContractKey`
- `projectionSource`
- `projectedOutputShape`
- `projectedOutputShapeHash`
- `resolverLanguage`
- `unsupportedProjectionReason`

## RF-003

Implement:

- `dto.lineage.audit.v1`

Audit must block:

- `declared_dto_not_consumed`
- `declared_projection_not_consumed`
- `dto_projection_bypassed`
- `local_dto_stitching_detected`
- `shape_match_without_contract_lineage`
- `receipt_missing_dto_projection_evidence`

## Boundary

Resolver applies projection contracts and emits evidence.
Resolver does not invent product DTO meaning.
Conveyor/gates interpret promotion posture.
