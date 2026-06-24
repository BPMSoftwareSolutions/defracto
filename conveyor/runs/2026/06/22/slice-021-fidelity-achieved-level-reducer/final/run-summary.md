# Slice 021 Fidelity Achieved-Level Reducer

Status: blocked

What changed:
- `fidelity.achieved_level.reduce.v1` is now live and deterministically reduces the evaluated matrix to Level 3.
- The full resolver run now advances past `reduceAchievedLevel`.
- The next missing primitive is `fidelity.next_level.compute.v1`.

Observed blocker:
- `fidelity.next_level.compute.v1`

Meaning:
- The reducer boundary is closed.
- The remaining gap is next-level computation, not reduction.

Next move:
- implement or bind `fidelity.next_level.compute.v1`
- then rerun the slice and verify the report emits live
