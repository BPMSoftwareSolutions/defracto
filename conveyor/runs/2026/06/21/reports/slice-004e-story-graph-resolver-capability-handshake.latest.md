# Slice 004E Story/Graph Resolver Capability Handshake

## Status

passed

## Reviewed Contracts

- `contracts/sej/validate-story-packet.sej.v1.json`
- `contracts/sej/render-narrative-graph.sej.v1.json`

## Findings

### `validate-story-packet`

**Status:** passed

**Supported primitives**

- `resolve.reference.v1`
- `resolve.value.v1`
- `evaluate.predicate.v1`
- `project.value.v1`

**Missing primitives**

- None.

**Forbidden primitives**

- `story.compare_keys`
- `json.read_file.v1`
- `json.parse.v1`
- `directory.traverse.v1`

**Facade projection**

- Allowed in principle after this handshake, subject to later projection manifest and materialization slices.

**Narrowing required before projection**

- No.

### `render-narrative-graph`

**Status:** passed

**Supported primitives**

- `resolve.reference.v1`
- `resolve.value.v1`
- `evaluate.predicate.v1`
- `project.value.v1`

**Missing primitives**

- None.

**Forbidden primitives**

- `graph.traverse`
- `json.read_file.v1`
- `json.parse.v1`
- `directory.traverse.v1`

**Facade projection**

- Allowed in principle after this handshake, subject to later projection manifest and materialization slices.

**Narrowing required before projection**

- No.

## Notes

- Both bootstrap SEJ contracts are executable by the current resolver surface.
- The handshake only confirms primitive coverage; it does not materialize any tool body.
- No product-code workaround was needed or used.
- No generated doorway exists for either tool.

## Completion Posture

Slice 004E passed.
Both bootstrap SEJ contracts are executable by the current resolver surface.
Facade projection is allowed in principle for both tools, but still deferred until later projection and materialization slices.
