# 00 Capture Source

## Role

Preserve operator/source intent as governed source material.

## Inputs

- `operatorText`
- `uploadedSource`
- `visualSource`
- `telemetrySourceCandidate`

## Outputs

- `narrativeSource`
- `sourceCaptureReceipt`

## Owns

- source preservation
- source summary
- source hash reference
- source capture receipt

## Must Not Own

- story extraction
- canonical spec
- implementation
- visual rendering

## Blocks On

- missing source
- source cannot be preserved
- source hash cannot be computed
- source role ambiguous

## Next Lane

`01-extract-story`
