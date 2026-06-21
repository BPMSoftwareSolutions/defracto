# Slice 003C.1 SEJ Contract Rewrite Using Existing Resolver Capabilities

## Status

passed

## Reviewed Chain

SEJ contract -> existing resolver primitives -> operation requirements -> capability packet -> working-tree sketch

## Operations Removed From The Missing List

- `resolve.reference.v1`
- `resolve.value.v1`
- `evaluate.predicate.v1`
- `artifact.materialize.v1`
- `evidence.emit.v1`
- `project.value.v1`

## Operations Still Missing

- `json.read_file.v1`
- `json.parse.v1`
- `array.every.v1`
- `array.map.v1`

## Operations Forbidden From Resolver

- `lineage.compare_keys.v1`

## Notes On Projection Responsibilities

- `finding.emit.v1` remains a Defracto projection responsibility.
- `result.build.v1` remains a Defracto projection responsibility.
- No resolver change is requested for product-specific lineage comparison.
- The SEJ now speaks resolver-native primitives where possible instead of asking for Defracto-specific behavior.

## Should Slice 003D Be Re-run?

Yes.
The SEJ contract changed materially again, so Slice 003D should be re-run against the rewritten contract before any facade projection is considered.

## Completion Posture

Slice 003C.1 passes.
The contract now uses existing resolver-native primitives where possible.
No executable code exists.
No facade projection is allowed yet.
