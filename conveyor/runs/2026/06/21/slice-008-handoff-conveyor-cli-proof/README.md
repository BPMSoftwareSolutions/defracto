# Slice 008 Run

This run envelope records the explicit CLI-to-Gemini Flash handoff conveyor proof.

It is organized as lane workers with lane-local dispatch, response, receipt, and ledger evidence.

Structure:

- `run.manifest.v1.json` for the run contract
- `handoff.package.v1.json` for the CLI-authored handoff package
- `lanes/` for lane-scoped dispatch, response, and receipt records
- `final/` for the blocked release packet, run ledger, commit message, and run summary
