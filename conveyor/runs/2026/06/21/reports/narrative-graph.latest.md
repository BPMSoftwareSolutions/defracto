# Narrative Graph Report

## Report Metadata

- Report key: narrative-graph.latest
- Generated mode: manual-seed
- Source: source/conversations/founding-conversation

## Graph Summary

The founding narrative chain is present and remains intentionally minimal.

## Nodes

| Node Type | Key | Path | Status |
|---|---|---|---|
| source narrative | defracto.origin.conversation_fractal.v1 | source/conversations/founding-conversation/conversation-fractal.md | present |
| story packet | defracto.founding.story.v1 | stories/founding-conversation/founding-story.v1.json | present |
| canonical spec | defracto.founding.canonical_spec.v1 | specs/canonical/founding-conversation/founding-canonical-spec.v1.json | present |
| projection manifest | defracto.founding.markdown_manifest.v1 | projections/founding-conversation/markdown/founding-markdown.projection-manifest.v1.json | present |
| markdown projection | defracto.founding.markdown_projection.v1 | projections/founding-conversation/markdown/founding-story.md | present |
| lineage receipt | defracto.founding.lineage_receipt.v1 | evidence/founding-conversation/founding-lineage.receipt.v1.json | present |

## Edges

| From | Relationship | To |
|---|---|---|
| source narrative | authorizes | story packet |
| story packet | hardens into | canonical spec |
| canonical spec | projects into | projection manifest |
| projection manifest | renders as | markdown projection |
| markdown projection | is attested by | lineage receipt |

## Findings

- No executable validation was run.
- No runtime execution is claimed.
- The chain is reviewable by inspection.

## Completion Posture

Manual-seed graph report only. Executable validation remains deferred.


