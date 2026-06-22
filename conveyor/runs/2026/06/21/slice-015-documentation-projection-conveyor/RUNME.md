# Slice 015 - Documentation Projection Conveyor

This slice declares the next maturity turn: operational docs become projections of conveyor state.

## What it should do

- project the run README from run manifests and receipts
- project the run index from current slice envelopes and reports
- project the run report from the slice authority and drift gates
- project the RUNME from the manifest, not from memory
- project the ASCII proof from the visual model and evidence
- fail closed on manual documentation drift

## Authority files

- `contracts/sej/project-run-docs.sej.v1.json`
- `contracts/semantic-operation-graphs/docs/project-run-docs.sog.v1.json`
- `contracts/doc-projections/readme.projection.v1.json`
- `contracts/doc-projections/run-index.projection.v1.json`
- `contracts/doc-projections/run-report.projection.v1.json`
- `contracts/doc-projections/runme.projection.v1.json`
- `contracts/doc-projections/visual-proof.projection.v1.json`
- `conveyor/gates/generated-doc-drift.gate.v1.json`

## Completion posture

Documentation is governed only when the generated surface can be reproduced from authority and verified by receipts.
