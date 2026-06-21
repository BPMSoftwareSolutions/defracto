# render-narrative-graph Contract

Status: draft

Purpose:

Define the narrative graph reporter as a contract before any executable body exists.

## Required Inputs

- A narrative source artifact with `sourceKey`, `sourceHash`, and `sourcePath`.
- A story packet with `storyKey` and `storyPath`.
- A canonical spec with `canonicalSpecKey` and `canonicalSpecPath`.
- A projection manifest with `projectionManifestKey`, `projectionType`, and `projectionManifestPath`.
- A lineage receipt with `lineageReceiptKey` and `lineageReceiptPath`.

## Required Behavior

- Render the bounded lineage chain as a narrative graph.
- Preserve the distinction between source narrative, story packet, canonical spec, projection manifest, and lineage receipt.
- Emit named findings only from the bounded taxonomy:
  - `pass`
  - `missing-node`
  - `broken-edge`
  - `stale-report`
- Report stale-report findings when the narrative graph no longer matches the bounded chain.

## Output Shape

- Machine-readable validation result with `resultKey`, `status`, `checkedAt`, `mode`, graph data, and findings.
- Human-readable narrative graph report.

## Boundary Rule

No executable narrative graph reporter may be added until this contract has a story, canonical spec, schemas, and evidence expectations.
