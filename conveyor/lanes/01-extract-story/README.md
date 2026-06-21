# 01 Extract Story

## Role

Transform captured source into a bounded story packet.

## Inputs

- `narrativeSource`
- `sourceCaptureReceipt`

## Outputs

- `storyPacket`
- `storyExtractionReceipt`

## Owns

- actor/goal extraction
- story packet
- acceptance criteria candidates
- forbidden claim candidates

## Must Not Own

- canonical authority
- SEJ execution
- runtime projection
- release authority

## Blocks On

- missing source receipt
- untraceable story claim
- hallucinated rule
- ambiguous actor/goal

## Next Lane

`02-author-canonical-spec`
