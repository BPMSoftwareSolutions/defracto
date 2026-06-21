# 09 Prepare Release

## Role

Assemble release packet and commit message only after evidence review permits it.

## Inputs

- `truthReconciliationReceipt`
- `contentDispositionLedger`

## Outputs

- `releasePacket`
- `commitMessage`
- `releasePreparationReceipt`

## Owns

- release packet
- commit message
- release gate preparation

## Must Not Own

- truth creation
- bypassing evidence review
- actual ship execution

## Blocks On

- evidence review blocked
- required receipt missing
- release packet incomplete
- commit message lacks evidence summary

## Next Lane

`10-ship`
