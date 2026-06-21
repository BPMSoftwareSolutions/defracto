# 05 Materialize Artifacts

## Role

Materialize generated surfaces, documents, sketches, receipts, and run artifacts through declared authority.

## Inputs

- `projectionManifest`
- `runtimeSurfaceBinding`
- `projectionReceipt`

## Outputs

- `materializedArtifacts`
- `artifactMaterializationReceipts`

## Owns

- artifact materialization request
- target artifact list
- hash expectations
- materialization receipts

## Must Not Own

- artifact meaning
- manual repair
- post-materialization edits

## Blocks On

- projection receipt missing
- write authority missing
- hash mismatch
- manual output detected

## Next Lane

`06-run-conformance`
