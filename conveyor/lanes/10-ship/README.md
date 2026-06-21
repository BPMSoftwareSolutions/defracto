# 10 Ship

## Role

Ship only evidence-authorized state and emit ship receipt.

## Inputs

- `releasePacket`
- `releasePreparationReceipt`

## Outputs

- `shipReceipt`
- `shippedState`

## Owns

- ship execution
- ship receipt
- release state transition

## Must Not Own

- truth creation
- post-ship telemetry interpretation

## Blocks On

- release packet blocked
- ship authority missing
- git state dirty unexpectedly
- ship receipt cannot be emitted

## Next Lane

`11-observe-telemetry`
