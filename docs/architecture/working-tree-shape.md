# Working Tree Shape

```text
defracto/
|-- README.md
|-- GOVERNANCE.md
|-- ROADMAP.md
|
|-- source/
|   |-- README.md
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
|   `-- runs/
|       `-- 2026/
|           `-- 06/
|               `-- 21/
|                   |-- README.md
|                   |-- reports/
|                   |-- sketches/
|                   `-- slice-007h-sej-projected-ascii-render-kernel/
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

The legacy artifact buckets still exist during migration, but they are no longer the root story the repository tells.

