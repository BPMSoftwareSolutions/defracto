# 11 Observe Telemetry

## Role

Capture post-ship observations and promote meaningful signals back to source candidates.

## Inputs

- `shipReceipt`
- `runtimeObservation`
- `operatorFeedback`

## Outputs

- `telemetryCapture`
- `sourcePromotionCandidates`
- `telemetryReceipt`

## Owns

- observation capture
- feedback summarization
- source promotion candidate creation

## Must Not Own

- canonical promotion without review
- silent product change
- release authority

## Blocks On

- ship receipt missing
- observation source ambiguous
- telemetry cannot be captured
- promotion would bypass source review

## Next Lane

`complete`
