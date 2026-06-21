# 08 Review Evidence

## Role

Inspect artifacts, receipts, content parity, signatures, and blocked claims.

## Inputs

- `allLaneReceipts`
- `materializedArtifacts`
- `visualEvidenceReceipt`

## Outputs

- `evidenceReview`
- `contentDispositionLedger`
- `truthReconciliationReceipt`

## Owns

- truth reconciliation
- content disposition
- receipt validation
- pass/block judgment

## Must Not Own

- silent repair
- shipping
- artifact invention

## Blocks On

- receipt missing
- hash mismatch
- unauthorized drift
- forbidden claim present

## Next Lane

`09-prepare-release`
