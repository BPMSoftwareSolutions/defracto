# 07 Render Visual Evidence

## Role

Generate or update run visual evidence from declared visual authority.

## Inputs

- `runState`
- `conformanceReceipt`
- `visualProjectionModel`

## Outputs

- `visualEvidenceSurface`
- `visualEvidenceReceipt`

## Owns

- visual evidence projection
- run sketch target
- visual proof receipt

## Must Not Own

- freehand ASCII
- layout invention
- renderer-owned truth

## Blocks On

- visual authority missing
- conformance receipt missing
- manual sketch detected
- visual receipt missing

## Next Lane

`08-review-evidence`
