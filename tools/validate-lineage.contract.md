# validate-lineage Contract

Status: draft

Purpose:

Define the lineage validation tool as a contract before any executable body exists.

## Required Inputs

- A narrative source artifact with `sourceKey`, `sourceHash`, and `sourcePath`.
- A story packet with `storyKey` and `storyPath`.
- A canonical spec with `canonicalSpecKey` and `canonicalSpecPath`.
- A projection manifest with `projectionManifestKey`, `projectionType`, and `projectionManifestPath`.
- A projection output with `outputPath` and `outputType`.
- A lineage receipt with `lineageReceiptKey` and `lineageReceiptPath`.

## Required Behavior

- Verify that projection sections map to canonical paths.
- Verify that canonical paths map to story paths.
- Verify that story paths map back to source narrative.
- Emit named findings only from the bounded taxonomy:
  - `pass`
  - `missing-path`
  - `broken-source-trace`
  - `false-narrative`
- Report false narrative findings when lineage is broken.

## Output Shape

- Machine-readable validation result with `resultKey`, `status`, `checkedAt`, `mode`, and findings.
- Human-readable lineage report.

## Boundary Rule

No executable validator may be added until this contract has a story, canonical spec, schemas, and evidence expectations.
