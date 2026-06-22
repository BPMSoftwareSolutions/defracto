# Defracto

Defracto is a narrative execution fabric with a conveyor-first working tree.

The living proof is not the root docs. The living proof is the governed conveyor state under `conveyor/`, the semantic authority under `contracts/`, the generated surfaces under `generated/`, and the receipts under `evidence/`.

## Current Proof

- Slice 012 proved the generated CLI can run the conveyor.
- Slice 014 hardened the generated CLI and worker surfaces against drift.
- Slice 015 declares documentation as a projected surface of conveyor state.

## Where To Start

- [Working tree shape](docs/architecture/working-tree-shape.md)
- [Governance](GOVERNANCE.md)
- [Roadmap](ROADMAP.md)
- [Docs landing page](docs/README.md)
- [Docs contracts](contracts/docs/README.md)
- [Run reports](conveyor/runs/2026/06/21/README.md)
- [Run reports index](conveyor/runs/2026/06/21/reports/README.md)
- [Top-level reports](reports/README.md)
- [Top-level tools](tools/README.md)

## Live Authority

- `conveyor/runs/2026/06/21/slice-012-lane-worker-mature-materialization/`
- `conveyor/runs/2026/06/21/slice-014-generated-surface-drift-gate/`
- `conveyor/runs/2026/06/21/slice-015-documentation-projection-conveyor/`

## Doctrine

- Generated code is projection, not source truth.
- Generated docs are projection, not source truth.
- Receipts prove the projection.
- Hashes prove the on-disk surface.
- Drift without authority delta is a block.

## Notes

The legacy seed artifacts still exist in the tree, but they are no longer the center of the repo story.
