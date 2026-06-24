# High Fidelity Maturity Ladder

This ladder describes how the Narrative Execution Fabric moves from a believable compiler story to a user-facing, proof-backed delivery system.

The rule is simple: each level must have a visible artifact, a receipt, and a failure mode. If a level cannot be proven, it is not mature yet.

## Level 0: Narrative Intent

What exists:

- A story, prompt, source document, or spoken request.

What it proves:

- Someone has expressed intent.

What is missing:

- Canonical meaning, executable authority, or verified output.

Typical evidence:

- Source narrative
- Conversation capture
- Imported document or transcript

## Level 1: Governed Canonicalization

What exists:

- Story packet
- Canonical spec
- DTO or schema shape
- Semantic executable JSON or semantic operation graph

What it proves:

- The narrative has been translated into governed meaning.
- The fabric can separate intent from implementation.

What is missing:

- Materialized user-facing surfaces
- Receipted projection equivalence

Typical evidence:

- Story/spec receipts
- SEJ or SOG contracts
- Lineage receipts

## Level 2: Disposable Projection

What exists:

- Generated code, docs, ASCII, SVG, HTML, or other projection surfaces
- Receipts proving the surfaces were materialized from authority

What it proves:

- The fabric can compile authority into an output surface.
- The surface is disposable unless receipts confirm it.

What is missing:

- Cross-surface consistency
- Explicit freshness enforcement
- User-facing quality guarantees

Typical evidence:

- Node projection receipts
- Docs drift receipts
- Visual proof receipts
- Hash confirmation

## Level 3: Governed Fidelity

What exists:

- Projection registry
- Receipt registry
- Freshness gate
- Drift gate
- Supersession records

What it proves:

- The conveyor can answer what is current, stale, blocked, or superseded.
- The system can fail closed before a stale surface is trusted.

What is missing:

- End-to-end polish across all user-facing surfaces
- Robust self-healing across multiple failure classes

Typical evidence:

- Registry query results
- Gate review artifacts
- Release-gate reviews
- Blocked and passed proofs side by side

## Level 4: User-Facing Experience

What exists:

- Polished HTML, SVG, Docs, Slides, PDFs, or app shells
- Surface-specific projection adapters
- Accessibility, layout, and brand equivalence checks
- Publish-safe output lanes for external channels

What it proves:

- The fabric can produce something a real user would accept as finished.
- Fidelity is no longer just structural; it is experiential.

What is missing:

- Broader automation across document-to-product and voice-to-value intake
- Cross-repo refactor lanes

Typical evidence:

- Review artifact saying the user-facing experience passes
- Visual diffs
- Accessibility checks
- Channel-specific publish receipts

## Level 5: Compiler-Grade Evolution

What exists:

- Voice-to-value intake
- Document-to-product compilation
- Refactor orchestration for legacy codebases
- Repair proposals with review and rematerialization
- LOC-style blocker routing

What it proves:

- The fabric can absorb real-world sources, transform them, and keep truth coherent while the implementation changes.

What is missing:

- Nothing essential for the platform story, though individual lanes may still mature.

Typical evidence:

- Transcript receipts
- Document extraction receipts
- Refactor equivalence receipts
- Repair-pilot receipts
- Promotion and rollback receipts

## How To Prove A Level

To claim a level, the run should produce a concise achievement artifact with:

- Target level
- Scope
- Source authority
- Projection surfaces touched
- Required receipts
- Required gates
- Pass or block decision
- Short notes on what was learned

That artifact should be receipted and queryable, so the conveyor can say not just "something moved" but "this level of fidelity was achieved for this scope."

## Practical Reading

Right now, the fabric is:

- Above Level 1 for several core characters
- At Level 2 for a few working projection slices
- Early Level 3 for the registry and gate control plane
- Below Level 4 for most user-facing production surfaces

That means the system can already prove lineage, projection, and drift control in selected lanes. It is not yet a universal user-facing experience compiler.

## Receipt Family

The ladder should now be treated as a receipt family, not just a description:

- Schema: `contracts/schemas/fidelity-achievement-report.schema.v1.json`
- Level catalog: `contracts/fidelity/high-fidelity-maturity-levels.v1.json`
- Gate: `contracts/gates/fidelity-level-required.gate.v1.json`
- Sample achievement report: `evidence/fidelity/sample.slice-achievement-report.v1.json`
- Computed achievement report: `evidence/fidelity/slice-017.computed-achievement-report.v1.json`
- Sample human-readable report: `conveyor/runs/2026/06/22/reports/fidelity-achievement-report.sample.md`
- Computed human-readable report: `conveyor/runs/2026/06/22/reports/fidelity-achievement-report.slice-017.md`
- ASCII projection: `projections/ascii/high-fidelity-maturity-ladder.ascii`
- Computed ASCII projection: `projections/ascii/slice-017-fidelity-achievement.ascii`
