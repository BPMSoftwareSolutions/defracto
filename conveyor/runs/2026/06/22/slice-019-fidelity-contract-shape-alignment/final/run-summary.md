# Slice 019 Fidelity Contract Shape Alignment

Status: blocked

What changed:
- The fidelity SEJ contract now loads through the resolver-compatible path.
- The graph execution boundary was reached.
- The blocker moved from `contract_missing` to `graph_step_failed`.

Observed blocker:
- `fidelity.evidence_matrix.evaluate.v1`
- `Unsupported primitive operation: fidelity.evidence_matrix.evaluate.v1`

Meaning:
- Contract shape is aligned enough for graph execution.
- The next gap is primitive support, not contract loading.

Next move:
- implement or bind `fidelity.evidence_matrix.evaluate.v1`
- then rerun the reducer to see whether the achieved level and next-level projections compute live
