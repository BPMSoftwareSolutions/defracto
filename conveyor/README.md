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
- `workers/` defines the bounded Gemini Flash worker profile, dispatch, and response contracts.
- `handoff/` defines the handoff package and packet schemas used by the CLI.
- `cli/` defines the CLI orchestration contract and command map.
- `trust/` defines the surface-signature language used to prove provenance through the trust fabric.
- `runs/` contains concrete run envelopes and receipts.

Operating rule:

- The CLI is the orchestration entrypoint.
- Gemini Flash is the bounded worker runtime.
- One lane owns one dispatch packet, one response packet, one receipt, and one ledger entry.
- The conveyor advances only on receipts.
- Every meaningful lane surface must carry or reference a trust signature before release can advance.
