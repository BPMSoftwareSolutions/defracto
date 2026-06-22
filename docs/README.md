# Docs

This folder holds the repo's navigation surfaces, doctrine, decisions, and architecture notes.

The current rule is simple:

- conveyor state is source authority
- docs are projections of that state
- run receipts and drift gates decide whether the projection is trusted

## Start Here

- [Architecture shape](architecture/working-tree-shape.md)
- [Governance](../GOVERNANCE.md)
- [Roadmap](../ROADMAP.md)
- [Naming doctrine](doctrine/naming.md)
- [Documentation contracts](../contracts/docs/README.md)
- [Top-level reports](../reports/README.md)
- [Top-level tools](../tools/README.md)

## Doctrine

The docs layer should explain the repo only insofar as it can be traced back to run manifests, receipts, contracts, and evidence.

If a doc claims the current truth, that truth should be derivable from the conveyor.
