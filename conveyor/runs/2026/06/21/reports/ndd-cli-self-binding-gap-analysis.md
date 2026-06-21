# NDD CLI Self-Binding Gap Analysis

Date: 2026-06-21

## Scope

This analysis compares the external artifact bundle at:

`C:\Users\Sidney Jones\OneDrive - bpmsoftwaresolutions.com\AI\NDD\ndd-cli-self-binding-artifacts`

against the current repository surface for Slice 008B.

Bundle inventory:

- `README.md`
- `source/cli/ndd-cli.source-narrative.md`
- `stories/cli/ndd-cli.story.v1.json`
- `specs/canonical/cli/ndd-cli.canonical-spec.v1.json`
- `contracts/sej/ndd-cli.execute.sej.v1.json`
- `contracts/projections/ndd-cli.node-projection-manifest.v1.json`
- `contracts/schemas/ndd-cli-command-input.schema.v1.json`
- `contracts/schemas/ndd-cli-command-result.schema.v1.json`
- `contracts/schemas/ndd-cli-dispatch.schema.v1.json`
- `contracts/schemas/ndd-cli-run-envelope.schema.v1.json`
- `contracts/schemas/ndd-cli-self-sketch-result.schema.v1.json`

Repo surface also includes additional Slice 008B material not present in the bundle, including:

- `source/cli/README.md`
- `contracts/sej/ndd-cli.self-sketch.sej.v1.json`
- `contracts/sej/materialize-ndd-cli-node.sej.v1.json`
- `contracts/projections/ndd-cli.python-projection-manifest.v1.json`
- `contracts/projections/ndd-cli.csharp-projection-manifest.v1.json`
- `projections/visual-models/ndd-cli-self.visual-model.v1.json`
- `generated/cli/node/ndd.cjs`
- `generated/cli/python/ndd.py`
- `generated/cli/csharp/NddCli.cs`
- `evidence/cli/ndd-cli.node-projection.receipt.v1.json`
- `evidence/cli/ndd-cli.self-sketch.receipt.v1.json`
- `conveyor/runs/2026/06/21/slice-008b-ndd-cli-self-binding/`

## Overall Result

- All bundle paths are represented in the repo.
- `source/cli/ndd-cli.source-narrative.md` is a hash match.
- The remaining bundle files are present but materially different from the bundle versions.
- The repo has also advanced beyond the bundle by adding additional self-binding, generation, evidence, and run-envelope surfaces.

## File-Level Status

| Bundle Path | Repo Status | Notes |
| --- | --- | --- |
| `README.md` | Different | Repo README now describes the live conveyor, Slice 008B, and CLI self-binding. The bundle README is only an artifact inventory. |
| `source/cli/ndd-cli.source-narrative.md` | Match | Exact content match. This is the strongest lineage anchor in the comparison set. |
| `stories/cli/ndd-cli.story.v1.json` | Different | Repo story is a lighter product-oriented packet. The bundle story is a more formal acceptance-oriented packet with `derivedFrom`, `forbiddenClaims`, and `status: accepted-for-slice-008b`. |
| `specs/canonical/cli/ndd-cli.canonical-spec.v1.json` | Different | Repo spec is concise and narrative-driven. The bundle spec is more explicit about canonical nodes, rules, and command identity. |
| `contracts/sej/ndd-cli.execute.sej.v1.json` | Different | Repo SEJ is richer in lineage and stage detail. The bundle SEJ is a more compact accepted contract. |
| `contracts/projections/ndd-cli.node-projection-manifest.v1.json` | Different | Repo manifest currently classifies the CLI as a thin projected doorway with current-state metadata. The bundle manifest emphasizes future projection authority and runtime bindings. |
| `contracts/schemas/ndd-cli-command-input.schema.v1.json` | Different | Repo schema includes the current command set and fail-closed fields. The bundle schema is narrower and less operationalized. |
| `contracts/schemas/ndd-cli-command-result.schema.v1.json` | Different | Repo schema is aligned to the current command surface and result envelope shape, not the bundle’s earlier acceptance form. |
| `contracts/schemas/ndd-cli-dispatch.schema.v1.json` | Different | Repo schema reflects the live handoff and runner posture. |
| `contracts/schemas/ndd-cli-run-envelope.schema.v1.json` | Different | Repo schema reflects the live envelope and receipt posture. |
| `contracts/schemas/ndd-cli-self-sketch-result.schema.v1.json` | Different | Repo schema reflects the locally verified self-sketch output path and receipt posture. |

## Key Gaps

### 1. Bundle-to-repo content drift

The repo has the same logical slice coverage as the bundle, but most files are not exact content matches. This is expected if the repo has already advanced from a static acceptance bundle into a more operationalized implementation surface.

Most important drift points:

- The repo story/spec/SEJ/manifest language is more implementation-forward.
- The bundle language is more explicit about acceptance posture and projection authority.
- The repo now carries live run evidence and generated surfaces that the bundle does not include.

### 2. Missing source-layer helper in the original repo shape

The bundle includes `source/cli/ndd-cli.source-narrative.md`, and the repo now matches it. That closes the major lineage gap the bundle was pointing at.

The repo also adds `source/cli/README.md`, which is a useful extra, but not part of the bundle.

### 3. Projection completeness is still intentionally partial

The repo now contains:

- Node projection surface
- Python projection stub
- C# projection stub
- self-sketch visual projection model
- self-sketch receipt

However, the Node projection receipt remains pending, so the release packet is still blocked by design. That is a documented honesty gap, not a defect.

### 4. Bundle does not capture the live conveyor envelope

The repo contains additional live and run-scoped evidence that is not in the bundle:

- `conveyor/runs/2026/06/21/slice-008-handoff-conveyor-cli-proof/live/`
- `conveyor/runs/2026/06/21/slice-008b-ndd-cli-self-binding/`
- `evidence/cli/ndd-cli.self-sketch.receipt.v1.json`
- `evidence/cli/ndd-cli.node-projection.receipt.v1.json`

This means the repo is now beyond the bundle’s static acceptance packet and into receipt-backed execution evidence.

## Material Observations

- The repo and bundle agree on the core doctrine: the CLI is a doorway, not the brain.
- The repo now reflects that doctrine in executable artifacts and run evidence.
- The bundle is a cleaner acceptance snapshot; the repo is the richer operational state.
- The only exact hash match in the bundle set is the source narrative, which is appropriate because the source narrative should anchor the slice.

## Recommended Next Steps

1. Materialize the pending Node projection receipt so the projection story is complete.
2. Decide whether the repo should preserve the extra `source/cli/README.md` helper or treat it as optional documentation.
3. If strict bundle mirroring is desired, reconcile the repo’s story/spec/SEJ/manifest wording to the bundle’s acceptance-oriented language.
4. If the goal is operational truth rather than bundle parity, keep the current repo state and treat the bundle as a narrower source packet, not the canonical end state.

## Conclusion

The repo now covers the external bundle completely at the path level and exceeds it at the operational evidence level.

The only exact file match is the source narrative, which is the correct anchor.
The remaining differences are mainly in emphasis and maturity:

- the bundle is an acceptance packet,
- the repo is an evolving receipt-backed conveyor implementation.

The biggest remaining honest gap is the pending Node projection receipt, which keeps release blocked until the generated doorway is fully projected.
