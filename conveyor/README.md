# Conveyor

This folder defines the delivery spine.

The conveyor answers:

- Where did the source enter?
- Which lane transformed it?
- Which receipt proved the transformation?
- What projection was emitted?
- What was promoted for release?
- What telemetry came back?

Structure:

- `pipeline/` describes the ordered transformation graph.
- `lanes/` defines reusable lane contracts.
- `gates/` defines blocking conditions.
- `runs/` contains concrete run envelopes and receipts.
