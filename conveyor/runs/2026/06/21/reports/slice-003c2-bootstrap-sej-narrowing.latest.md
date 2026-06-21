# Slice 003C.2 Bootstrap SEJ Narrowing

## Status

passed

## Reviewed Chain

already-loaded invocation inputs -> narrowed bootstrap SEJ -> explicit founding-chain predicates -> projection result posture

## What Changed

- The SEJ now accepts already-loaded artifact JSON instead of file paths.
- The first proof is bounded to the founding chain rather than generalized array traversal.
- File loading is deferred to a later orchestration slice.
- Array traversal is deferred to a later generalized validation slice.

## Bootstrap Input Shape

- `sourceNarrative`
- `storyPacket`
- `canonicalSpec`
- `projectionManifest`
- `lineageReceipt`

## Bootstrap Validation Scope

- `projectionManifest.sections.0.canonicalPath` equals `canonicalSpec.canonicalNodes.0.canonicalPath`
- `projectionManifest.sections.0.storyPath` equals `canonicalSpec.canonicalNodes.0.storyPath`
- `canonicalSpec.derivedFromStory` equals `storyPacket.storyKey`
- `storyPacket.derivedFrom.sourceKey` equals `sourceNarrative.sourceKey`
- `lineageReceipt.source.sourceKey` equals `sourceNarrative.sourceKey`
- `lineageReceipt.story.storyKey` equals `storyPacket.storyKey`
- `lineageReceipt.canonicalSpec.canonicalSpecKey` equals `canonicalSpec.canonicalSpecKey`
- `lineageReceipt.projection.projectionManifestKey` equals `projectionManifest.projectionManifestKey`

## Operations Removed

- `json.read_file.v1`
- `json.parse.v1`
- `array.every.v1`
- `array.map.v1`

## Remaining Required Primitives

- `resolve.reference.v1`
- `resolve.value.v1`
- `evaluate.predicate.v1`
- `project.value.v1`

## Operations Forbidden From Resolver

- `lineage.compare_keys.v1`

## Notes

- The current SEJ is now a bounded founding-chain bootstrap proof.
- The contract remains declarative only.
- No executable validator exists.
- No facade projection is allowed until the refreshed handshake passes.

## Should Slice 003D.3 Run?

Yes.
The bootstrap narrowing materially changed the contract shape, so the final bootstrap resolver handshake should be re-run against the narrowed SEJ before any facade projection is considered.

## Blockers

- None in the contract shape itself.

## Warnings

- This is a bootstrap proof, not the full generalized validator.
- General array traversal and file loading remain intentionally deferred.

## Completion Posture

Slice 003C.2 passes.
The validate-lineage SEJ no longer requires file-read, parse, map, or every primitives.
It uses only existing resolver-native primitives for the bootstrap proof.
It remains declarative only.
No executable validator exists.
Facade projection remains withheld until the refreshed handshake passes.
