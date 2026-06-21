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
- `runner/`, `inspector/`, `shipper/`, and `telemetry/` are first-class role roots.
- `handoff/` defines the handoff package and packet schemas used by the CLI.
- `cli/` defines the CLI orchestration contract and command map.
- `trust/` defines the surface-signature language used to prove provenance through the trust fabric.
- `runs/` contains concrete run envelopes and receipts.

Slice 008B makes the doorway explicit:

- `stories/cli/ndd-cli.story.v1.json` authorizes the CLI as part of the narrative fabric.
- `specs/canonical/cli/ndd-cli.canonical-spec.v1.json` declares the CLI behavior authority.
- `contracts/sej/ndd-cli.execute.sej.v1.json` and `contracts/sej/ndd-cli.self-sketch.sej.v1.json` define executable command truth.
- `contracts/projections/ndd-cli.*-projection-manifest.v1.json` classify the generated doorway surfaces.
- `projections/visual-models/ndd-cli-self.visual-model.v1.json` drives the self-sketch.
- `conveyor/runs/2026/06/21/slice-008b-ndd-cli-self-binding/` holds the ledgered self-binding run envelope.

Slice 008D moves the visual projection model into `projections/visual-models/` and makes the role roots visible in the filesystem.

Operating rule:

- The CLI is the orchestration entrypoint.
- Gemini Flash is the bounded worker runtime.
- One lane owns one dispatch packet, one response packet, one receipt, and one ledger entry.
- The conveyor advances only on receipts.
- Every meaningful lane surface must carry or reference a trust signature before release can advance.
- The CLI fails closed if Gemini Flash is unavailable or if the live trust signature is missing.
