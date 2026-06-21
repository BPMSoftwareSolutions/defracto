# NDD CLI Source Narrative

Artifact Key: `defracto.source.cli.ndd.self_binding.v1`

## Narrative

The `ndd` CLI is the doorway into the Defracto / Narrative-Driven Development conveyor.

The CLI must not become a hidden brain, a hand-authored exception, or a competing narrative. It must only accept operator intent, shape that intent into a bounded invocation, and hand execution to the governed conveyor through declared Semantic Executable JSON and resolver-backed stages.

The CLI exists so an operator can submit conversational intent into the conveyor and receive generated artifacts, receipts, visual evidence, and release posture without relying on invisible platform-agent edits.

## Governing Principle

```text
The CLI is not the brain.
The CLI is the doorway.
The SEJ is the executable instruction.
The resolver is the mechanism.
The conveyor is the development environment.
The receipt is memory.
The self-sketch is visual evidence.
```

## Product Boundary

The CLI may parse arguments, read stdin, construct bounded invocation DTOs, call the resolver runtime, forward output, and fail closed.

The CLI must not invent story truth, canonical behavior, worker outputs, ASCII sketches, signatures, release authority, or documentation truth.

## Trust Requirement

The CLI is trusted only when its behavior is bound to:

```text
source narrative
-> story packet
-> canonical spec
-> DTO contracts
-> SEJ contract
-> projection manifest
-> generated facade
-> resolver invocation receipt
-> visual evidence receipt
```

## Initial Commands

- `ndd handoff run --text <text>`
- `ndd handoff status <run-path>`
- `ndd handoff continue <run-path>`
- `ndd handoff review <run-path>`
- `ndd self sketch`
- `ndd self explain`

## Completion Posture

The CLI self-binding is complete only when the CLI source surface is projected from declared authority, the generated facade is receipt-backed, and the CLI can produce a visual sketch of itself through the same governed projection path it enforces.
