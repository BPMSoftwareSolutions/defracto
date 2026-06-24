# Story-To-TDD Conveyor Stress Lab Dashboard

## Run Summary

- Suite: Story-To-TDD Conveyor Demo Stress Suite (demo-suite)
- Run key: demo-suite
- Run date: 2026-06-24
- Status: Passed
- Runner mode: catalog_projection

## Scenario Scorecard

| Scenario | Status | Lab Assertion | Fidelity | Truth Owner | Outcome |
| --- | --- | --- | ---: | --- | --- |
| Generate slug from title | Passed | Passed | 0.98 | SOG | passed |
| Generate tailored resume | Passed | Passed | 0.91 | Projection + Receipts | passed |
| Red/green test hash validator | Passed | Passed | 0.95 | SOG | passed |
| Provider fallback story | Passed | Passed | 0.93 | SOG | fallback |
| Ambiguous story honest block | Blocked | Passed | 1.00 | None, correctly blocked | honest_blocked |

## Outcome Classes

- Passed outcomes: 3
- Honest blocked outcomes: 1
- Fallback outcomes: 1
- Mismatch outcomes: 0

## Guardrails

- Catalog projection does not create cognitive authority.
- Expected live-provider requirements remain declared in the scenario manifests.
- Blocked scenarios count as passing lab assertions only when the expected outcome is honest_blocked.
- Generated proof surfaces are not durable truth unless SOG promotion posture is declared and later receipted by the conveyor.

## Artifacts

- Summary: stress-lab/runs/2026-06-24/demo-suite/summary.json
- Suite receipt: stress-lab/runs/2026-06-24/demo-suite/suite.receipt.v1.json
- Scenario results: stress-lab/runs/2026-06-24/demo-suite/scenario-results
- Dashboard: stress-lab/runs/2026-06-24/demo-suite/dashboard.md