# 06 Run Conformance

## Role

Run conformance and equivalence checks against materialized artifacts.

## Inputs

- `materializedArtifacts`
- `artifactMaterializationReceipts`

## Outputs

- `conformanceReport`
- `conformanceReceipt`

## Owns

- test invocation
- equivalence checks
- conformance findings
- conformance receipt

## Must Not Own

- repairing generated artifacts
- changing target fixtures
- release decision

## Blocks On

- materialization receipt missing
- test failure
- target mismatch
- unsupported conformance check

## Next Lane

`07-render-visual-evidence`
