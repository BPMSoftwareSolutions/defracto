# D006: Minimum Artifact Shape Lock

Status: accepted

Decision:

Slice 001 may not begin until the minimum field sets are defined for:

- `narrativeSource`
- `storyPacket`
- `canonicalSpec`
- `projectionManifest`
- `lineageReceipt`
- `narrativeGraphReport`
- `lineageReport`

Implication:

Seed artifacts and seed reports must have explicit minimum shapes before the founding lineage slice can be implemented.

Required before:

Slice 001: Founding Narrative Lineage.

## Minimum Report Shapes

### `conveyor/runs/2026/06/21/reports/narrative-graph.latest.md`

- `# Narrative Graph Report`
- `## Report Metadata`
- `## Graph Summary`
- `## Nodes`
- `## Edges`
- `## Findings`
- `## Completion Posture`

### `conveyor/runs/2026/06/21/reports/lineage.latest.md`

- `# Lineage Report`
- `## Report Metadata`
- `## Source Narrative`
- `## Story Packet`
- `## Canonical Spec`
- `## Projection Manifest`
- `## Projection Output`
- `## Lineage Checks`
- `## Findings`
- `## Completion Posture`

## Minimum JSON Artifact Field Sets

### `narrativeSource`

- `schemaVersion`
- `sourceKey`
- `sourceType`
- `path`
- `sourceHash`
- `summary`
- `status`

### `storyPacket`

- `schemaVersion`
- `storyKey`
- `derivedFrom.sourceKey`
- `derivedFrom.sourcePath`
- `derivedFrom.sourceHash`
- `actor.role`
- `actor.goal`
- `story.asA`
- `story.iWant`
- `story.soThat`
- `acceptanceCriteria`
- `status`

### `canonicalSpec`

- `schemaVersion`
- `canonicalSpecKey`
- `derivedFromStory`
- `purpose`
- `canonicalNodes`
- `canonicalNodes[].canonicalPath`
- `canonicalNodes[].storyPath`
- `canonicalNodes[].statement`
- `canonicalNodes[].nodeType`
- `rules`
- `status`

### `projectionManifest`

- `schemaVersion`
- `projectionManifestKey`
- `projectionType`
- `derivedFromCanonicalSpec`
- `outputPath`
- `sections`
- `sections[].sectionKey`
- `sections[].heading`
- `sections[].canonicalPath`
- `sections[].storyPath`
- `sections[].required`
- `status`

### `lineageReceipt`

- `schemaVersion`
- `lineageReceiptKey`
- `status`
- `checkedAt`
- `mode`
- `source.sourceKey`
- `source.sourceHash`
- `story.storyKey`
- `canonicalSpec.canonicalSpecKey`
- `projection.projectionManifestKey`
- `projection.projectionType`
- `projection.outputPath`
- `checks`
- `findings`

