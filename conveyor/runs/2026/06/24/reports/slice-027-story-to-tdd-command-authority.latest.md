# Slice 027: Story-To-TDD Command Authority

## Outcome

Slice 027 starts the story-to-TDD conveyor with declaration-only authority. It adds the CLI command contract, command map, story intake schema, acceptance criteria schema, gates, Gemini Flash invocation capability declaration, and the first slug-story source/story/spec chain.

## What Changed

- Added `ndd story plan`, `ndd story test`, and `ndd story implement` command keys to the CLI command input schema.
- Added the story command contract at `contracts/cli/ndd-story-implement.command.v1.json`.
- Added the story command map at `conveyor/cli/ndd-story-command-map.v1.json`.
- Added user story intake and acceptance criteria schemas.
- Added acceptance criteria trace, red-test, green-test, and no-hand-authored-code gates.
- Added the repo-local semantic capability declaration `worker.gemini_flash.invoke.v1`.
- Added the first slug story source, intake record, story packet, acceptance criteria, and canonical spec.

## Boundary

No runtime code, test code, adapter code, CLI code, or implementation code was hand-authored in this slice.

This slice does not materialize generated tests.

This slice does not materialize generated implementation files.

This slice does not claim red or green test execution.

This slice does not require resolver repository changes.

## First Story Chain

```text
source/user-stories/story-slug.source.v1.md
-> source/user-stories/story-slug.intake.v1.json
-> stories/user-stories/story-slug.story.v1.json
-> contracts/acceptance-criteria/story-slug.acceptance-criteria.v1.json
-> specs/canonical/user-stories/story-slug.canonical-spec.v1.json
```

Source hash:

```text
sha256:785f1215944f2b5754aa32ef78308051b74e9291e9332a5d785172cc988917d9
```

## Command Modes

`story plan` stops after source, story, criteria, canonical spec, and run plan authority.

`story test` stops after test intent, generated test projection, generated test receipt, and red-test evidence. It must not materialize implementation artifacts.

`story implement` continues through generated implementation projection, green-test evidence, conformance, and evidence review only after red evidence exists.

## Gemini Flash Boundary

`worker.gemini_flash.invoke.v1` is declared as repo-local semantic authority. It makes Gemini Flash invocation loud and traceable through worker profile, dispatch contract, response contract, response artifact, and receipt evidence.

The declaration does not turn the resolver into a provider SDK and does not imply resolver repository changes.

## Completion Posture

Slice 027 passes as a kickoff slice when the declaration artifacts are present and parseable.

Story-to-TDD execution remains deferred until test intent, test projection manifests, generated test materialization, red/green receipts, and implementation projection materialization are declared.

## Next Slice

Slice 028 should add test intent authority for the slug story:

```text
contracts/schemas/test-intent.schema.v1.json
contracts/test-intents/story-slug.test-intent.v1.json
contracts/projections/story-slug.node-test-projection-manifest.v1.json
contracts/sej/materialize-story-slug-generated-test.sej.v1.json
```

No hand-authored test code should be introduced in Slice 028.
