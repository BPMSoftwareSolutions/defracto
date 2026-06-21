# Slice 003D.2 Resolver Capability Handshake Refresh

## Status

blocked

## Reviewed Chain

rewritten SEJ -> resolver primitive catalog -> first-proof bootstrap options -> facade gating

## Supported By Existing Resolver Catalog

- `resolve.reference.v1`
- `resolve.value.v1`
- `evaluate.predicate.v1`
- `project.value.v1`
- `artifact.materialize.v1`
- `evidence.emit.v1`

## Still Missing In The Current SEJ

- `json.read_file.v1`
- `json.parse.v1`
- `array.every.v1`
- `array.map.v1`

## Can File Loading Be Deferred?

Yes, architecturally.

If the invocation provides already-loaded artifact JSON, then `json.read_file.v1` and `json.parse.v1` can be deferred out of the first semantic proof and handled by invocation preparation or a later adapter slice.

## Are `array.every.v1` and `array.map.v1` Still Required?

Not necessarily for the first bounded proof.

If the first proof uses explicitly declared bounded checks instead of generic collection traversal, then both operations can be deferred from the bootstrap contract. The current SEJ still requests them, so the contract would need a narrower rewrite before this refresh can pass.

## Operations Forbidden From Resolver

- `lineage.compare_keys.v1`

## Blocked Reasons

- The current SEJ still requests generic primitives that are not guaranteed by the resolver catalog.
- The contract has not yet been narrowed to an already-loaded-input bootstrap shape.
- No product-code workaround is allowed.

## Facade Projection

- Facade projection remains blocked.
- `generated/tools/validate-lineage.js` remains absent.

## Required SEJ Rewrites

- Rewrite the SEJ to accept already-loaded artifact JSON inputs for the first proof.
- Remove or defer file-loading primitives from the first semantic proof.
- Replace collection traversal requirements with explicitly declared bounded checks if the bootstrap contract can express them directly.

## Required Resolver Capability Requests

- None required for the already-supported primitives listed above.
- Only request additional resolver primitives after the bootstrap SEJ is narrowed and the remaining gap is clearly generic.

## Completion Posture

Slice 003D.2 is blocked.
The existing resolver can support the semantic core of the contract, but the current SEJ still asks for bootstrap work that should be moved out of the first proof.
Facade projection remains withheld.

