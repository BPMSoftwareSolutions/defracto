# Slice 003D.1 Resolver Capability Requirement Packet

## Status

passed

## Reviewed Chain

blocked handshake -> capability classification -> SEJ rewrite decision -> resolver request decision

## Required Primitives

- `json.read_file.v1`
- `json.parse.v1`
- `resolve.reference.v1`
- `resolve.value.v1`
- `evaluate.predicate.v1`
- `array.every.v1`
- `array.map.v1`
- `lineage.compare_keys.v1`
- `finding.emit.v1`
- `result.build.v1`
- `artifact.materialize.v1`
- `evidence.emit.v1`
- `project.value.v1`

## Classification Summary

### expressible_with_existing_primitives

- `resolve.reference.v1`
- `resolve.value.v1`
- `evaluate.predicate.v1`

### generic_resolver_primitive_candidate

- `json.read_file.v1`
- `json.parse.v1`
- `array.every.v1`
- `array.map.v1`
- `artifact.materialize.v1`
- `evidence.emit.v1`
- `project.value.v1`

### defracto_sej_projection_responsibility

- `finding.emit.v1`
- `result.build.v1`

### forbidden_product_specific_resolver_logic

- `lineage.compare_keys.v1`

## Operations Removed From Missing List

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
- `finding.emit.v1`
- `result.build.v1`

## Required SEJ Rewrites

- Revise `contracts/sej/validate-lineage.sej.v1.json` to use `resolve.reference.v1`, `resolve.value.v1`, and `evaluate.predicate.v1` instead of object-field and path-existence operations.
- Keep `finding.emit.v1` and `result.build.v1` as SEJ projection responsibilities rather than resolver primitives.
- Keep `lineage.compare_keys.v1` out of the resolver entirely; it remains forbidden product-specific resolver logic.
- Re-evaluate whether `json.parse.v1` is needed if the resolver can already materialize parsed JSON from `json.read_file.v1`.

## Required Resolver Capability Requests

- `json.read_file.v1`
- `json.parse.v1` if the resolver does not already materialize parsed JSON
- `array.every.v1`
- `array.map.v1`
- `json.write_file.v1`

## Should Slice 003D Be Re-run?

Yes.
The SEJ contract changed materially, so Slice 003D should be re-run against the rewritten contract before any facade projection is considered.

## Blockers

- The resolver handshake remains blocked until the generic capability requests are answered.
- Product-specific logic remains forbidden in the resolver.

## Warnings

- The SEJ contract should be revised before asking for resolver changes anywhere existing primitives already suffice.
- `finding.emit.v1` and `result.build.v1` should not be recast as resolver semantics.

## Notes

- This packet converts the blocked handshake into a capability request without adding executable code.
- The classification keeps Defracto-specific meaning inside the SEJ/projection layer.
- The repo still has no `tools/validate-lineage.js`.

## Completion Posture

Slice 003D.1 is passed as a capability requirement packet.
The SEJ should be revised where existing primitives are sufficient before any resolver change request is escalated.
Resolver capability remains blocked until the requested generic primitives are confirmed.
