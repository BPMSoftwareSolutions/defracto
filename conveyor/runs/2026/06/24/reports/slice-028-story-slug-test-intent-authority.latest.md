# Slice 028: Story Slug Test Intent Authority

## Outcome

Slice 028 adds test intent authority for the slug story without generating test source or implementation source.

The slice defines how accepted criteria should become generated tests later, but it keeps materialization deferred until generated test projection can be resolved and receipted.

## What Changed

- Added `contracts/schemas/test-intent.schema.v1.json`.
- Added `contracts/schemas/test-projection-manifest.schema.v1.json`.
- Added `contracts/schemas/test-execution-receipt.schema.v1.json`.
- Added `contracts/test-intents/story-slug.test-intent.v1.json`.
- Added `contracts/projections/story-slug.node-test-projection-manifest.v1.json`.
- Added `contracts/sej/materialize-story-slug-generated-test.sej.v1.json` as a future materialization boundary with no JavaScript body.
- Added repo-local semantic capability declarations:
  - `generated.test.materialize.v1`
  - `test.node.run.v1`
  - `test.red_green.evaluate.v1`
  - `trace.criteria_to_test.verify.v1`

## Boundary

No runtime code was hand-authored.

No test code was hand-authored.

No generated test artifact was materialized.

No implementation artifact was materialized.

No red test execution occurred.

No green test execution occurred.

No resolver repository changes are required by this slice.

## Test Intent Chain

```text
source/user-stories/story-slug.source.v1.md
-> stories/user-stories/story-slug.story.v1.json
-> contracts/acceptance-criteria/story-slug.acceptance-criteria.v1.json
-> specs/canonical/user-stories/story-slug.canonical-spec.v1.json
-> contracts/test-intents/story-slug.test-intent.v1.json
-> contracts/projections/story-slug.node-test-projection-manifest.v1.json
-> contracts/sej/materialize-story-slug-generated-test.sej.v1.json
```

## Coverage

The test intent covers these accepted criteria:

- `story-slug.lowercase-ascii`
- `story-slug.whitespace-to-hyphen`
- `story-slug.remove-punctuation`
- `story-slug.collapse-hyphens`
- `story-slug.empty-input-blocked`
- `story-slug.no-hand-authored-code`

The test intent covers these canonical paths:

- `$.storySlug.rules.lowercaseAscii`
- `$.storySlug.rules.whitespaceToHyphen`
- `$.storySlug.rules.removeUnsupportedPunctuation`
- `$.storySlug.rules.collapseRepeatedHyphens`
- `$.storySlug.failures.emptyInput`
- `$.storySlug.boundary.noHandAuthoredCode`

## Future Generated Test Target

```text
tests/generated/user-stories/story-slug.generated.test.js
```

This path is declared as a future generated projection target only. The file must not be hand-authored.

## Completion Posture

Slice 028 passes as test intent authority when all new JSON artifacts are parseable and no generated test or implementation code exists.

## Next Slice

Slice 029 should add generated test materialization evidence:

```text
tests/generated/user-stories/story-slug.generated.test.js
evidence/tdd/story-slug.generated-test.materialization.receipt.v1.json
```

The generated test file must be materialized from declared semantic authority and must carry a generated projection receipt. No hand-authored test code is allowed.
