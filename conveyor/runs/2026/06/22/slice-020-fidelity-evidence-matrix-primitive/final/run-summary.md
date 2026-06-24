# Slice 020 Fidelity Evidence Matrix Primitive

Status: blocked

What changed:
- `fidelity.evidence_matrix.evaluate.v1` now resolves and returns a deterministic ladder result.
- The probe reports highest satisfied level 3 and first blocked level 4.
- The full reducer contract now stops at `reduceAchievedLevel`.

Observed blocker:
- `fidelity.achieved_level.reduce.v1`

Meaning:
- The evidence-matrix primitive is now closed.
- The next gap is reducer capability coverage.

Next move:
- implement or bind `fidelity.achieved_level.reduce.v1`
- then rerun the reducer and see whether the report can emit live
