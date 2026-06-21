# Slice 006 Resolver Path Consolidation and Evidence Model

## Status

passed

## Findings

### Blockers

- None.

### Warnings

- No new runtime capability was added.
- Existing generated doorways remain unchanged.
- This slice consolidates evidence rules only.

### Notes

#### What Resolver-Backed Invocation Proves

- The resolver accepted a declared SEJ invocation.
- The resolver executed only the declared primitive surface.
- The resolver produced evidence attached to that declared contract.

#### What Materialization Receipts Prove

- A generated doorway or facade was materialized from accepted semantic truth.
- The artifact path, source SEJ, manifest, and content hash were recorded.

#### What Bootstrap Invocation Receipts Prove

- A generated doorway was invoked against bounded already-loaded bootstrap inputs.
- The invocation result proves invocation only, not generalized validation or reporting.

#### What Remains Deferred

- Generalized file loading.
- Directory traversal.
- Generalized graph traversal.
- Generalized validation.
- Generalized reporting.
- Any claim that bootstrap evidence alone proves equivalence for all future inputs.

#### Required Fields for Future Resolver Receipts

- `receiptKey`
- `status`
- `checkedAt`
- `invocationKind`
- `toolPath`
- `sourceSej`
- `invocationShape`
- `exitCode`

#### Required Evidence for Equivalence Claims

- Resolver invocation receipt.
- Materialization receipt.
- Bootstrap invocation receipt.
- Equivalence report.

#### Forbidden Claims When Only Bootstrap Evidence Exists

- Generalized validation is implemented.
- Generalized reporting is implemented.
- File loading is implemented.
- Graph traversal is implemented.
- Equivalence has been proven for all future inputs.

## Completion Posture

Slice 006 passes as resolver evidence consolidation.
No new runtime capability is added.
Existing generated doorways remain unchanged.
Future generalized execution must use this evidence model.
