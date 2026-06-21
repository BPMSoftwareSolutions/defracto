# 02 Author Canonical Spec

## Role

Harden the accepted story into canonical authority.

## Inputs

- `storyPacket`
- `storyExtractionReceipt`

## Outputs

- `canonicalSpec`
- `canonicalizationReceipt`

## Owns

- canonical nodes
- canonical paths
- rules
- source/story traceability

## Must Not Own

- SEJ body
- projection code
- worker execution
- shipping

## Blocks On

- story receipt missing
- canonical node lacks story path
- rule lacks story authority
- conflicting story claims

## Next Lane

`03-author-semantic-contract`
