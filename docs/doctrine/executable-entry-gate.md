# Executable Entry Gate

Before a hand-authored executable body is allowed to appear, Defracto requires a minimum executable-body rule.

The resolver-materialized generated doorway is not that body. It is a projected artifact that proves materialization only and does not claim validation truth.

## Minimum Rule

The first hand-authored executable body may only:

1. Read the declared input payload.
2. Load declared JSON artifacts.
3. Perform declared lineage checks.
4. Emit the declared validation result.
5. Exit nonzero on blockers.

## Prohibitions

The first executable body may not:

- infer new rules
- mutate source artifacts
- rewrite projections
- generate reports beyond declared output
- invoke SEJ, resolver, or runtime behavior
- introduce new DTO fields
- introduce new finding keys

## Purpose

The gate keeps execution subordinate to contract truth.
