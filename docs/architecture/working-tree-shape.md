# Working Tree Shape

```text
defracto/
|-- README.md
|-- GOVERNANCE.md
|-- ROADMAP.md
|
|-- source/
|   |-- README.md
|   |-- cli/
|   |-- visual-intent/
|   |-- conversations/
|   |-- voice-notes/
|   |-- whiteboards/
|   |-- imported-docs/
|   `-- legacy-code/
|
|-- conveyor/
|   |-- README.md
|   |-- pipeline/
|   |-- lanes/
|   |-- gates/
|   |-- workers/
|   |-- handoff/
|   |-- cli/
|   |-- trust/
|   `-- runs/
|       `-- 2026/
|           `-- 06/
|               `-- 21/
|                   |-- README.md
|                   |-- reports/
|                   |-- sketches/
|                   `-- slice-007h-sej-projected-ascii-render-kernel/
|                   `-- slice-008-handoff-conveyor-cli-proof/
|                   `-- slice-008b-ndd-cli-self-binding/
|
|-- docs/
|   |-- Implementation Plan.md
|   |-- architecture/
|   |   `-- working-tree-shape.md
|   |-- decisions/
|   |   `-- D006-minimum-artifact-shapes.md
|   `-- doctrine/
|       |-- body-disposition.md
|       `-- executable-entry-gate.md
|
|-- stories/
|-- specs/
|-- contracts/
|-- projections/
|-- generated/
|   |-- README.md
|   `-- tools/
|-- tests/
|-- evidence/
|   |-- README.md
|   |-- founding-conversation/
|   `-- target-sketches/
|-- releases/
|-- telemetry/
`-- archive/
    |-- README.md
    |-- examples/
    `-- tools/
```

The active repository shape is now conveyor-first.

Source enters through `source/`, transformation logic lives in `conveyor/`, and published or derived surfaces leave through `projections/`, `generated/`, `evidence/`, `conveyor/runs/2026/06/21/reports/`, and `releases/`.

The CLI source narrative now lives under `source/cli/` so the doorway has an explicit narrative origin before it becomes story, spec, SEJ, and projection.

The active conveyor spine is now explicit:

CLI entrypoint -> handoff package -> lane dispatch contract -> Gemini Flash worker profile -> Gemini Flash response contract -> lane receipt -> run ledger -> tie-out review -> release packet

Trust fabric signature -> lane dispatch -> lane response -> lane receipt -> run ledger -> release packet

The CLI is also self-bound:

CLI story -> CLI canonical spec -> CLI SEJ -> projection manifest -> generated thin facade -> self visual projection model -> self-sketch receipt

The legacy artifact buckets still exist during migration, but they are no longer the root story the repository tells.

