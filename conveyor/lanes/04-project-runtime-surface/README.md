# 04 Project Runtime Surface

## Role

Bind semantic contract to projected runtime surfaces without hand-authoring behavior.

## Inputs

- `sejContract`
- `operationRequirements`
- `semanticContractReceipt`

## Outputs

- `projectionManifest`
- `runtimeSurfaceBinding`
- `projectionReceipt`

## Owns

- projection manifest
- target paths
- runtime bindings
- generated surface responsibilities

## Must Not Own

- generated source content
- product truth
- manual code edits

## Blocks On

- SEJ receipt missing
- target path ambiguous
- projection would own product meaning
- runtime binding missing

## Next Lane

`05-materialize-artifacts`
