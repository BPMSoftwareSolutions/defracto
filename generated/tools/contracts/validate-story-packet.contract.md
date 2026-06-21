# validate-story-packet Contract

Status: draft

Purpose:

Define the story packet validation tool as a contract before any executable body exists.

## Required Inputs

- A narrative source artifact with `sourceKey`, `sourceHash`, and `sourcePath`.
- A story packet with `storyKey` and `storyPath`.

## Required Behavior

- Verify that the story packet traces back to source narrative.
- Verify that the story packet is bounded by the source narrative it claims.
- Emit named findings only from the bounded taxonomy:
  - `pass`
  - `missing-source`
  - `story-mismatch`
  - `source-trace-break`
- Report bounded findings when the story packet is not authorized.

## Output Shape

- Machine-readable validation result with `resultKey`, `status`, `checkedAt`, `mode`, and findings.
- Human-readable story packet review.

## Boundary Rule

No executable story validator may be added until this contract has a story, canonical spec, schemas, and evidence expectations.
