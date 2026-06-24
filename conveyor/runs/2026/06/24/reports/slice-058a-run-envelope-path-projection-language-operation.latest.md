# slice-058a-run-envelope-path-projection-language-operation

Status: blocked
Blocker: missing_sej_language_operation
Required operation: run.envelope.paths.project.v1

## Purpose

`run.envelope.paths.project.v1` is a tiny SEJ language/conveyor infrastructure operation. It projects bounded run envelope paths from `sliceKey`, `runDate`, `runRoot`, and `allowedRoot`.

It must not create files, durable authority, story meaning, policy, gates, SEJ, SOG, schemas, or product behavior.

## Projected Paths

- runEnvelopeRoot
- runManifestPath
- sourceStoryPath
- handoffPacketPath
- bootstrapReceiptPath

## Current Result

The operation is declared and requested, but not executable by the current resolver surface yet. Story/run bootstrap remains blocked rather than hardcoding concrete run paths.

## Doctrine

Run paths are language infrastructure.
Run artifacts are evidence.
Durable authority must not hardcode concrete run paths.
