# Slice 029: Story Slug Generated Test Red Receipt

Status: passed

## Outcome

Slice 029 materialized the generated Node test projection from declared semantic authority, then ran it before implementation existed and captured the expected red receipt.

## Materialization Invocation

```text
node node_modules/@bpmsoftwaresolutions/sej-resolver-node/src/cli.cjs resolve --contract contracts/sej/materialize-story-slug-generated-test.sej.v1.json
```

Observed resolver result:

```text
status: passed
stageCount: 6
executedStageIds:
  - projectGeneratedTestSource
  - ensureGeneratedTestDirectory
  - ensureTddEvidenceDirectory
  - materializeGeneratedTest
  - hashGeneratedTest
  - emitGeneratedTestReceipt
```

Generated test artifact:

```text
tests/generated/user-stories/story-slug.generated.test.js
```

Generated test hash:

```text
sha256:246299c26d138d78257f747c2554ba87687b511421bc2f0f27a49e6e0d2c6a7a
```

Materialization receipt:

```text
evidence/tdd/story-slug.generated-test.materialization.receipt.v1.json
```

## Red Test Invocation

```text
node --test tests/generated/user-stories/story-slug.generated.test.js
```

Observed result:

```text
exitCode: 1
tests: 4
pass: 0
fail: 4
failureCode: MODULE_NOT_FOUND
```

The failure reason matches the expected red posture:

```text
missing generated implementation module
```

The implementation target remains absent:

```text
generated/implementations/user-stories/story-slug.cjs
```

## Red Receipt

```text
evidence/tdd/story-slug.red-test.receipt.v1.json
```

The red receipt records:

- exact command
- exit code
- generated test artifact hash
- stdout hash
- stderr hash
- failed test names
- covered criteria
- missing implementation artifact path

## Trace Tightening Completed

Before materialization, the acceptance criteria authority was tightened so each criterion has:

- `criteriaKey`
- source trace
- canonical spec node trace
- one or more test intent keys
- observable input
- exact expected result
- failure/blocker shape when applicable

The empty input case uses the exact blocker:

```json
{
  "status": "blocked",
  "blocker": "empty_slug_input"
}
```

## Boundary

No hand-authored test file was introduced.

The generated test file appeared only after the resolver materialization SEJ ran.

No implementation file was created.

No green test was run.

No resolver repository changes are required.

## Visual Evidence

```text
conveyor/runs/2026/06/24/slice-029-story-slug-generated-test-red-receipt/sketches/story-slug-red-test.ascii
```

## Completion Posture

Slice 029 passes because the generated test projection exists with a matching materialization receipt, and the first red run fails for the expected missing implementation module.

Slice 030 should generate the implementation projection, rerun the same generated test artifact, and emit green evidence.
