# Slice 003D Resolver Capability Handshake

## Status

blocked

## Reviewed Chain

validate-lineage SEJ contract -> operation requirements -> resolver primitive catalog -> working-tree sketch

## Required Primitives

- `json.read_file.v1`
- `json.parse.v1`
- `object.get.v1`
- `json.path.exists.v1`
- `array.every.v1`
- `array.map.v1`
- `lineage.compare_keys.v1`
- `finding.emit.v1`
- `result.build.v1`
- `json.write_file.v1`

## Supported Primitives

The current resolver surface described for the handshake exposes these generic primitives:

- `resolve.reference.v1`
- `resolve.value.v1`
- `evaluate.predicate.v1`
- `project.value.v1`
- `execute.stage.v1`
- `resolve.contract.v1`
- `filesystem.ensure_directory.v1`
- `artifact.materialize.v1`
- `hash.compute.v1`
- `evidence.emit.v1`

## Missing Primitives

- `json.read_file.v1`
- `json.parse.v1`
- `object.get.v1`
- `json.path.exists.v1`
- `array.every.v1`
- `array.map.v1`
- `lineage.compare_keys.v1`
- `finding.emit.v1`
- `result.build.v1`
- `json.write_file.v1`

## Blocked Reasons

- The resolver catalog does not explicitly confirm the required `validate-lineage` primitives.
- The SEJ contract is declarative, but it cannot be considered executable until the required primitives are confirmed.
- No product-specific workaround is permitted, so missing primitives must remain missing capability rather than becoming hand-authored validator logic.

## Findings

- The resolver has a strong generic execution surface, but the `validate-lineage` contract still needs direct capability confirmation for each required operation.
- The current handshake does not justify projecting a facade body.
- The repo remains correctly free of `generated/tools/validate-lineage.js`.

## Completion Posture

Slice 003D is blocked.
Every required `validate-lineage` primitive must be explicitly supported before the SEJ contract can be treated as executable by the current resolver.
No facade projection is allowed yet.

