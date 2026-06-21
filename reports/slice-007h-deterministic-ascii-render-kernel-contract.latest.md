# Slice 007H Deterministic ASCII Render Kernel Contract

## Status

passed

## Purpose

Slice 007H defines the deterministic ASCII render kernel as a governed mechanism, not as product meaning.

The kernel consumes `visualProjectionModel` and emits `asciiRenderResult`.

It is a generic render mechanism for future ASCII projection, not a source of narrative truth, layout truth, or evidence truth.

## Created Artifacts

```text
contracts/schemas/ascii-render-kernel.schema.v1.json
contracts/schemas/ascii-render-result.schema.v1.json
contracts/operations/ascii-render-kernel.operation-requirements.v1.json
contracts/policies/ascii-render-kernel-boundary.policy.v1.json
```

## Kernel Boundary

The kernel consumes `visualProjectionModel`.

The kernel emits `asciiRenderResult`.

The kernel does not write artifacts directly.

The kernel does not emit receipts directly.

Artifact writing remains SEJ materialization responsibility.

Evidence remains receipt responsibility.

The kernel is generic mechanism, not product meaning.

## Determinism Boundary

The future implementation must be deterministic and fail closed.

It must preserve stable ordering, stable whitespace, stable line breaks, stable connector routing, stable label handling, stable overflow behavior, and stable result shape.

It must reject missing model fields, ambiguous layout authority, missing anchors, and any attempt to invent renderer-owned product truth.

## Completion Posture

Slice 007H passes only as a kernel contract review.

No renderer code exists yet.

No visual artifact is generated.

No resolver code is changed.

Future Slice 007I may implement or bind the approved ASCII render kernel.
