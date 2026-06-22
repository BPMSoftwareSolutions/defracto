# Slice 015 Documentation Projection Conveyor

Slice 014 hardened generated surfaces.
Slice 015 extends the same doctrine to documentation surfaces.

## What changes

- README files become projections of run authority
- run indexes become projections of slice and receipt state
- RUNME files become projections of manifest commands
- reports become receipt-backed summaries instead of memory-backed notes
- ASCII proof surfaces become projections of visual model and evidence

## Drift rule

- same authority + same inputs = same doc hash
- changed doc hash without authority delta = drift
- missing receipt = block

## Target surfaces

- `conveyor/runs/2026/06/21/README.md`
- `conveyor/runs/2026/06/21/reports/README.md`
- `conveyor/runs/2026/06/21/slice-015-documentation-projection-conveyor/RUNME.md`
- `conveyor/runs/2026/06/21/sketches/slice-015-documentation-projection-conveyor.ascii`

## Gate

The generated-doc-drift gate should fail closed until docs are actually projected from authority and receipts exist.
