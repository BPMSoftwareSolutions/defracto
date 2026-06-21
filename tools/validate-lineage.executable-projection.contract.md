# validate-lineage Executable Projection Contract

Status: accepted

Purpose:

Define `tools/validate-lineage.js` as a future executable projection of the accepted Slice 002 contract before any code exists.

## Executable Identity

- `toolKey`: `defracto.tools.validate_lineage`
- `executablePath`: `tools/validate-lineage.js`
- `projectionOf`: `tools/validate-lineage.contract.md`
- `derivedFromStory`: `stories/tools/validate-lineage.story.v1.json`
- `derivedFromSpec`: `specs/canonical/tools/validate-lineage.canonical-spec.v1.json`

## Allowed Responsibilities

The future executable body may only:

- read declared input artifacts
- load JSON payloads
- verify declared lineage relationships
- emit allowed finding keys
- produce validation result JSON
- update or support lineage report output
- fail closed on missing or unsupported structure

## Forbidden Responsibilities

The future executable body must not:

- invent new finding keys
- invent new validation rules
- infer business meaning
- modify source, story, canonical, or projection artifacts
- execute SEJ
- call a resolver
- generate facades
- perform automation outside declared input/output
- silently repair broken lineage

## Inputs

- Source narrative artifact
- Story packet
- Canonical spec
- Projection manifest
- Projection output
- Lineage receipt

## Outputs

- Machine-readable validation result JSON
- Human-readable lineage report support

## Failure Behavior

- Fail closed when required inputs are missing.
- Fail closed when a referenced lineage relationship is unsupported.
- Emit only bounded findings from the approved taxonomy.
- Stop rather than invent a new meaning or recovery path.

## Allowed Finding Taxonomy

- `pass`
- `missing_projection_section`
- `missing_canonical_path`
- `unresolved_canonical_path`
- `missing_story_path`
- `unresolved_story_path`
- `missing_source_trace`
- `lineage_receipt_mismatch`
- `unexpected_projection_claim`
- `false_narrative_candidate`

## Finding Classes

- `pass`
- `missing-path`
- `broken-source-trace`
- `false-narrative`

## Taxonomy Rule

The executable body may emit precise finding keys only through the bounded taxonomy above, and each finding key must map to exactly one finding class.

## Completion Posture

The future executable body has a bounded identity, bounded inputs, bounded outputs, bounded finding taxonomy, bounded failure behavior, and explicit non-goals before any implementation code exists.
