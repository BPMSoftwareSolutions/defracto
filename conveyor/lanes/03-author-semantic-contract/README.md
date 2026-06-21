# 03 Author Semantic Contract

## Role

Express canonical behavior as Semantic Executable JSON and operation requirements.

## Inputs

- `canonicalSpec`
- `canonicalizationReceipt`

## Outputs

- `sejContract`
- `operationRequirements`
- `semanticContractReceipt`

## Owns

- SEJ stages
- bounded inputs
- bounded outputs
- required operations
- fail-closed posture

## Must Not Own

- host-language source
- manual artifact materialization
- release judgment

## Blocks On

- canonical spec missing
- required operation unsupported
- SEJ invents rule
- unbounded input/output

## Next Lane

`04-project-runtime-surface`
