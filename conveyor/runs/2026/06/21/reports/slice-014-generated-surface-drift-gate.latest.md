# Slice 014 Generated Surface Drift Gate

Slice 012 proved the conveyor can run.
Slice 014 hardens that proof by turning the generated CLI and worker surfaces into reproducible artifacts with hash-based drift checks.

## Gate intent

- treat generated surfaces as projections, not source truth
- regenerate the CLI and worker from declared authority
- compare the on-disk hashes with the expected hashes
- fail closed if a generated surface was edited by hand

## Why it matters

This is the guardrail that keeps the living conveyor honest after the first successful run.

## Declared surfaces

- `generated/cli/node/ndd.cjs`
- `generated/workers/node/lane-worker.cjs`

## Expected hashes

- CLI: `sha256:b311972b2a5384b4acf0a0647348cffa0e10c36d464388ea9735d87387ccddf1`
- worker: `sha256:df847af9471946f891f346e2dac2bf84c0595cdaf67e63bfe6b7dc0656323ca8`
