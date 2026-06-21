# Slice 007H Run

This run envelope records the bounded conveyor for the ASCII render kernel slice.

It is organized as lane workers, not as a single broad agent.

Structure:

- `run.manifest.v1.json` for the run contract
- `operator-intent.md` for the human/operator request
- `lanes/` for the bounded agent handoffs and receipts
- `final/` for the release packet and run summary
