# Implementation Plan

Status: Accepted for Architecture; Slice 000.1 Required; Slice 000.2 Recommended

Role: Slice 000 Architecture Acceptance Plan

False Narrative Review: Passed after required wording refinements

Reviewed inputs:

- [Narrative-driven Development Review.md](Narrative-driven%20Development%20Review.md)
- [Narrative-driven Development Review by ChatGPT and Gemini Flash.md](Narrative-driven%20Development%20Review%20by%20ChatGPT%20and%20Gemini%20Flash.md)
- [Truth Above Code.md](Truth%20Above%20Code.md)
- [Narrative-driven Development.md](Narrative-driven%20Development.md)

## Implementation Posture

This repo should move forward as a truth-escalation system before it becomes an execution system.

The first proof is not generated code, SEJ runtime execution, or a working application. The first proof is:

```text
source narrative
-> story packet
-> canonical spec
-> projection manifest
-> markdown projection
-> lineage receipt
-> narrative graph report
```

Defracto can use Defracto to build Defracto, but only if each tool enters through the same conveyor it will later enforce. That means `tools/` may exist early, but executable tools should not become hidden sources of truth.

This document does not claim that Defracto has implemented lineage validation, SEJ execution, resolver execution, projection expansion, or narrative coverage. It only authorizes the sequence by which those capabilities will be defined and proven.

## False Narrative Policy for This Plan

This document is accepted only as an implementation plan, not as proof that any runtime, validator, SEJ resolver, generated facade, UI projection, or narrative coverage engine already exists.

Any future artifact that claims execution behavior must trace back to:

```text
source narrative
-> story
-> canonical spec
-> contract/schema
-> evidence
```

If implementation discovers a rule not present in the current story or canonical spec, implementation must stop and promote that rule back into the appropriate narrative layer before continuing.

## Working Decisions

### D001: Project Identity

Status: accepted

Decision: Use `Defracto` as the project identity and `Narrative Execution Fabric` as the architecture category.

Implication: The current repository can continue from its existing path, but public-facing documentation should refer to:

```text
Defracto: Narrative Execution Fabric
```

Required before: README and governance finalization.

### D002: First Proof

Status: accepted

Decision: Slice 001 proves lineage, not runtime.

Required before: Any SEJ runtime, generated facade, UI sketch, or code projection work.

### D003: Tool Discipline

Status: accepted

Decision: `tools/` may contain contracts and intent documents early. Executable validator or reporter bodies may only appear after their story, canonical spec, input schema, output schema, and evidence expectation exist.

Required before: `validate-lineage.js` implementation.

### D004: Root Code Policy

Status: accepted

Decision: No root-level `src/` or `src_facades/` in the seed phase. Generated code belongs under example projections or later under a clearly named projection output folder.

Required before: Any generated facade work.

### D005: Documentation Truth Policy

Status: accepted

Decision: Repo-bound planning documents must pass false-narrative review before becoming accepted architecture material.

Required before: Slice 000 completion.

## Slice 000: Architecture Acceptance

Goal:

Freeze the current architectural direction so implementation has a stable doctrine to build from.

Changes:

- Add this implementation plan.
- Treat the review documents as origin and acceptance material.
- Convert open questions into a decision queue.
- Record the first governance posture in `GOVERNANCE.md` when root files are created.

Artifacts:

```text
docs/Implementation Plan.md
docs/Narrative-driven Development Review.md
docs/Narrative-driven Development Review by ChatGPT and Gemini Flash.md
```

Completion rule:

```text
The repo has a documented sequence that starts with truth lineage and explicitly defers runtime execution.
```

Blocks:

- No implementation blockers.
- Documentation must pass false-narrative review before being treated as accepted architecture material.

Ships next:

Slice 000.1: Minimum Artifact Shape Lock.

## Slice 000.1: Minimum Artifact Shape Lock

Goal:

Lock the minimum required fields for Slice 001 artifacts before implementation begins, so the founding lineage proof does not invent schema fields ad hoc.

Changes:

- Define the minimum viable field sets for:
  - `narrativeSource`
  - `storyPacket`
  - `canonicalSpec`
  - `projectionManifest`
  - `lineageReceipt`
  - `narrativeGraphReport`
  - `lineageReport`
- Remove accepted decisions from Slice 001 blockers.
- Define the minimum report structures for manually generated seed reports.

Minimum report shapes:

- `reports/narrative-graph.latest.md`
  - `# Narrative Graph Report`
  - `## Report Metadata`
  - `## Graph Summary`
  - `## Nodes`
  - `## Edges`
  - `## Findings`
  - `## Completion Posture`
- `reports/lineage.latest.md`
  - `# Lineage Report`
  - `## Report Metadata`
  - `## Source Narrative`
  - `## Story Packet`
  - `## Canonical Spec`
  - `## Projection Manifest`
  - `## Projection Output`
  - `## Lineage Checks`
  - `## Findings`
  - `## Completion Posture`

Artifacts:

```text
docs/decisions/D006-minimum-artifact-shapes.md
contracts/schemas/README.md
reports/README.md
```

Completion rule:

```text
Slice 001 may begin only after every required artifact has a minimum field contract and every seed report has a minimum section contract.
```

Blocks:

- No implementation blockers.

Ships next:

Slice 001: Founding Narrative Lineage.

## Slice 000.2: Semantic Coherence Review

Goal:

Review the seed repo as a narrative artifact before adding executable tools.

The repo must prove that its file system, docs, schemas, examples, reports, and tool contracts all express the same intent without drift.

Scope:

```text
README.md
GOVERNANCE.md
ROADMAP.md
docs/
contracts/
conveyor/
examples/founding-conversation/
tools/README.md
tools/validate-lineage.contract.md
reports/
```

Explicitly out of scope:

```text
No executable validators.
No SEJ runtime.
No resolver spike.
No generated facades.
No UI projections.
No code facade projections.
No automation scripts.
```

Changes:

- Add a working-tree shape review artifact.
- Add a semantic coherence report template.
- Keep all future tool behavior as contracts only.

Artifacts:

```text
docs/architecture/working-tree-shape.md
reports/semantic-coherence-review.latest.md
tools/README.md
tools/validate-lineage.contract.md
```

Completion rule:

```text
The repo can be reviewed as one coherent narrative system, and no executable tool exists yet.
```

Blocks:

- Slice 000.1 minimum artifact shape lock must be complete.

Ships next:

Slice 001: Founding Narrative Lineage.

## Slice 001: Founding Narrative Lineage

Goal:

Prove that a preserved source conversation can become a story packet, canonical spec, Markdown projection, lineage receipt, and narrative graph report.

Changes:

- Create the seed repo structure.
- Add minimal schemas for narrative source, story packet, canonical spec, projection manifest, and lineage receipt.
- Add the founding conversation example.
- Add a Markdown projection manifest and rendered Markdown projection.
- Add a lineage receipt tying the projection back to canonical paths, story paths, and source material.
- Add a narrative graph report that humans can inspect.

Artifacts:

```text
README.md
GOVERNANCE.md
ROADMAP.md

contracts/schemas/narrative-source.schema.v1.json
contracts/schemas/story-packet.schema.v1.json
contracts/schemas/canonical-spec.schema.v1.json
contracts/schemas/projection-manifest.schema.v1.json
contracts/schemas/lineage-receipt.schema.v1.json
contracts/policies/no-competing-narratives.policy.v1.json

conveyor/lanes/00-capture-narrative/README.md
conveyor/lanes/01-extract-story/README.md
conveyor/lanes/02-author-canonical-spec/README.md
conveyor/lanes/03-project-markdown/README.md
conveyor/gates/no-competing-narratives.gate.v1.json
conveyor/gates/projection-lineage-required.gate.v1.json

examples/founding-conversation/source/conversation-fractal.md
examples/founding-conversation/story/founding-story.v1.json
examples/founding-conversation/canonical/founding-canonical-spec.v1.json
examples/founding-conversation/projections/markdown/founding-markdown.projection-manifest.v1.json
examples/founding-conversation/projections/markdown/founding-story.md
examples/founding-conversation/evidence/founding-lineage.receipt.v1.json

tools/README.md
tools/validate-lineage.contract.md

reports/narrative-graph.latest.md
reports/lineage.latest.md
```

Completion rule:

```text
Every projection section maps to a canonical path.
Every canonical path maps to a story node.
Every story node traces back to source narrative material.
No executable validator is required yet.
```

Blocks:

- D006 minimum artifact shape lock must be complete.

Ships next:

Slice 002: Lineage Validator Contract.

## Slice 002: Lineage Validator Contract

Goal:

Define `validate-lineage` as a Defracto-born tool before implementing it.

Changes:

- Add a story packet for the lineage validator.
- Add a canonical spec for lineage validation behavior.
- Define input and output schemas for the validator.
- Define expected findings for pass, missing path, broken source trace, and false narrative.
- Define tool evidence expectations.

Path rule:

Root-level `stories/` and `specs/` begin in Slice 002 as the first promoted pattern after the founding example proves lineage. Until then, `examples/founding-conversation` remains the canonical seed proof.

Artifacts:

```text
stories/tools/validate-lineage.story.v1.json
specs/canonical/tools/validate-lineage.canonical-spec.v1.json
contracts/schemas/lineage-validation-input.schema.v1.json
contracts/schemas/lineage-validation-result.schema.v1.json
contracts/schemas/lineage-finding.schema.v1.json
examples/tools/validate-lineage/
tools/validate-lineage.contract.md
```

Completion rule:

```text
The validator's behavior is fully described by story, canonical spec, schemas, and expected evidence before any executable script exists.
```

Blocks:

- Slice 001 lineage artifact shape must be stable enough to validate.

Ships next:

Slice 002A: DTO and Finding Taxonomy Tightening.

## Slice 002A: DTO and Finding Taxonomy Tightening

Goal:

Tighten the lineage validator DTO shapes and make the finding taxonomy precise enough to support bounded execution later.

Changes:

- Refine the input, result, and finding schemas with explicit nested fields.
- Separate precise finding keys from summary finding classes.
- Keep executable bodies out of scope.

Artifacts:

```text
contracts/schemas/lineage-validation-input.schema.v1.json
contracts/schemas/lineage-validation-result.schema.v1.json
contracts/schemas/lineage-finding.schema.v1.json
contracts/taxonomies/finding-taxonomy.v1.json
```

Completion rule:

```text
The validator contract can name precise findings and summary finding classes without adding executable code.
```

Blocks:

- Slice 002 contract must remain stable.

Ships next:

Slice 002B: Body Disposition Taxonomy Seed.

## Slice 002B: Body Disposition Taxonomy Seed

Goal:

Define the first body taxonomy and disposition schema before any executable body exists.

Changes:

- Define body kinds and body dispositions.
- Define a body record schema for meaning-bearing artifacts.
- Add a doctrine note for body disposition.
- Add a manual-seed review report that classifies current non-executable bodies.

Artifacts:

```text
contracts/schemas/body-record.schema.v1.json
contracts/taxonomies/body-kind.taxonomy.v1.json
contracts/taxonomies/body-disposition.taxonomy.v1.json
docs/doctrine/body-disposition.md
reports/body-disposition.seed.md
```

Completion rule:

```text
The seed repo can classify its existing non-executable bodies by kind, lineage, disposition, and allowed next state without creating executable tools.
```

Blocks:

- Slice 002A DTO and finding taxonomy tightening must be complete.

Ships next:

Slice 003A: Executable Body Projection Contract.

## Slice 003A: Executable Body Projection Contract

Goal:

Define the future executable validator body as a projection of the Slice 002 contract, not as an independent source of validation behavior.

Changes:

- Define the executable identity for `tools/validate-lineage.js`.
- Define the allowed and forbidden responsibilities of the future executable body.
- Define the allowed finding taxonomy as the executable boundary.
- Define the bounded input and output mechanics for the future executable doorway.

Artifacts:

```text
tools/validate-lineage.executable-projection.contract.md
```

Completion rule:

```text
The future executable body has a bounded identity, bounded inputs, bounded outputs, bounded finding taxonomy, bounded failure behavior, and explicit non-goals before any implementation code exists.
```

Blocks:

- Slice 002 contract must remain stable.
- No executable code may be introduced yet.

Ships next:

Slice 003B: Executable Entry Gate Review.

## Slice 003B: Executable Entry Gate Review

Goal:

Confirm that the future executable body has a minimum executable-body rule before `tools/validate-lineage.js` is introduced.

Changes:

- Review the executable projection contract against the body disposition seed.
- Confirm the future executable body is still deferred.
- Confirm the minimum executable body rule is explicit enough to block drift.

Minimum executable body rule:

```text
The first executable body may only:
  1. read the declared input payload
  2. load declared JSON artifacts
  3. perform declared lineage checks
  4. emit the declared validation result
  5. exit nonzero on blockers

It may not:
  - infer new rules
  - mutate source artifacts
  - rewrite projections
  - generate reports beyond declared output
  - invoke SEJ/resolver/runtime
  - introduce new DTO fields
  - introduce new finding keys
```

Artifacts:

```text
docs/doctrine/executable-entry-gate.md
reports/slice-003b-entry-gate-review.latest.md
```

Completion rule:

```text
The future executable body is gated by explicit minimum behavior, explicit non-goals, and explicit review posture before any code is introduced.
```

Blocks:

- Slice 003A executable projection contract must remain stable.
- No executable code may be introduced yet.

Ships next:

Slice 003C: validate-lineage SEJ Contract.

## Slice 003C: validate-lineage SEJ Contract

Goal:

Express validate-lineage behavior as Semantic Executable JSON before any executable facade exists.

Changes:

- Define the `validate-lineage` SEJ contract.
- List required resolver operations.
- Mark unsupported operations as blocked or missing capability.
- Keep hand-authored validator behavior out of scope.

Artifacts:

```text
contracts/schemas/sej-contract.schema.v1.json
contracts/sej/validate-lineage.sej.v1.json
contracts/operations/validate-lineage.operation-requirements.v1.json
reports/slice-003c-sej-contract-review.latest.md
```

Completion rule:

```text
The validate-lineage behavior is fully declared in SEJ using only registered or explicitly required semantic operations.
No hand-authored validator body exists.
```

Blocks:

- Slice 003B executable entry gate review must remain passed.
- Resolver capability remains unconfirmed.

Ships next:

Slice 003D: Resolver Capability Handshake.

## Slice 003D: Resolver Capability Handshake

Goal:

Confirm whether the resolver can execute the required operations in the `validate-lineage` SEJ contract.

Changes:

- Review the resolver against the required operation set.
- Mark any unsupported operation as missing capability.
- Stop if the resolver cannot execute the required contract primitives.

Artifacts:

```text
docs/architecture/sej-resolver-boundary.md
reports/slice-003d-resolver-handshake-review.latest.md
```

Completion rule:

```text
The resolver capability set is either confirmed for the required operations or explicitly blocked as missing capability.
```

Blocks:

- Slice 003C validate-lineage SEJ Contract must be complete.

Ships next:

Slice 003D.1: Resolver Capability Requirement Packet.

## Slice 003D.1: Resolver Capability Requirement Packet

Goal:

Convert the blocked resolver handshake into a resolver-facing capability request without adding product-specific logic.

Changes:

- Classify each missing or uncertain capability from Slice 003D.
- Separate generic resolver candidate primitives from SEJ projection responsibilities.
- Identify product-specific resolver logic that must remain forbidden.
- State whether the SEJ contract should be revised before asking for resolver changes.

Artifacts:

```text
contracts/operations/validate-lineage.resolver-capability-requirements.v1.json
reports/slice-003d1-resolver-capability-requirements.latest.md
```

Completion rule:

```text
The semantic gap is classified into resolver candidates, SEJ projection responsibilities, and forbidden product-specific logic without adding executable code.
```

Blocks:

- Slice 003D resolver capability handshake must remain blocked until capability classes are explicit.

Ships next:

Slice 003D.2: Resolver Capability Handshake Refresh

Goal:

Re-check the rewritten validate-lineage SEJ against the resolver catalog and separate true generic gaps from first-proof bootstrap choices.

Changes:

- Re-run the resolver capability handshake against the rewritten SEJ contract.
- Identify which primitives are already supported by the resolver catalog.
- Determine whether file-loading can be deferred by requiring already-loaded JSON artifacts as invocation input.
- Determine whether collection quantifiers are still required for the first bounded proof.
- Keep facade projection blocked until the handshake is honest.

Artifacts:

```text
reports/slice-003d2-resolver-capability-handshake-refresh.latest.md
```

Completion rule:

```text
The rewritten SEJ is either executable by the current resolver or the remaining generic gaps are explicitly isolated for a narrower bootstrap contract.
```

Blocks:

- Slice 003C.1 rewritten SEJ must remain stable.
- No facade projection may begin from the refresh alone.

Ships next:

Slice 003C.2: Bootstrap SEJ Narrowing, if the refresh remains blocked.

## Slice 003C.2: Bootstrap SEJ Narrowing

Goal:

Make the validate-lineage SEJ executable by the current resolver surface in a narrow founding-chain bootstrap sense, without touching resolver code or introducing an executable tool body.

Changes:

- Accept already-loaded artifact JSON as invocation input.
- Remove file loading and general array traversal from the first proof.
- Replace generalized traversal with explicit founding-chain predicates.
- Keep the contract declarative only.

Artifacts:

```text
reports/slice-003c2-bootstrap-sej-narrowing.latest.md
```

Completion rule:

```text
The bootstrap contract no longer requires file-read, parse, map, or every primitives and instead speaks only resolver-native primitives for the founding chain.
```

Blocks:

- Slice 003D.2 refresh must remain informative.
- No facade projection may begin from the bootstrap rewrite alone.

Ships next:

Slice 003D.3: Final Bootstrap Resolver Handshake.

## Slice 003D.3: Final Bootstrap Resolver Handshake

Goal:

Confirm the narrowed bootstrap SEJ is executable by the current resolver surface before any facade projection is considered.

Changes:

- Re-run the resolver handshake against the narrowed bootstrap SEJ.
- Confirm the current resolver can satisfy the bootstrap proof without product-specific logic.
- Keep facade projection blocked until the handshake passes.

Artifacts:

```text
reports/slice-003d3-final-bootstrap-resolver-handshake.latest.md
```

Completion rule:

```text
The bootstrap SEJ passes the resolver handshake and remains a bounded founding-chain proof only.
```

Blocks:

- Slice 003C.2 bootstrap narrowing must be complete.
- No facade projection may begin from the handshake alone.

Ships next:

Slice 003E: Facade Projection Manifest.

## Slice 003E: Facade Projection Manifest

Goal:

Project the facade only after the SEJ contract is authoritative and resolver capability has been confirmed.

Changes:

- Define the facade projection manifest for the future executable doorway.
- Keep the projected body thin and subordinate to semantic truth.

Artifacts:

```text
contracts/projections/validate-lineage.facade-manifest.v1.json
reports/slice-003e-facade-projection-review.latest.md
```

Completion rule:

```text
The facade exists only as a projected doorway from semantic truth, not as a source of validation truth.
```

Blocks:

- Slice 003D.3 final bootstrap resolver handshake must be complete.

Ships next:

Slice 003F: Facade Materialization SEJ.

## Slice 003F: Facade Materialization SEJ

Goal:

Define the resolver-mediated materialization contract that can project the accepted facade manifest and accepted validate-lineage SEJ into a future generated doorway artifact.

Changes:

- Reference the accepted facade manifest.
- Reference the accepted validate-lineage SEJ contract.
- Declare `tools/validate-lineage.js` as the target artifact.
- Use resolver materialization primitives only.
- Declare receipt emission and generated-file anchors.
- Forbid hand-authored validation behavior.

Artifacts:

```text
contracts/sej/materialize-validate-lineage-facade.sej.v1.json
reports/slice-003f-facade-materialization-sej-review.latest.md
```

Completion rule:

```text
The materialization SEJ is accepted as a projection contract review, but no generated facade exists yet.
```

Blocks:

- Slice 003E facade projection manifest must be complete.
- No generated facade may exist yet.
- No hand-authored executable body may be introduced.

Ships next:

Slice 003G: Facade Materialization Invocation.

## Slice 003G: Facade Materialization Invocation

Goal:

Invoke the resolver against the accepted facade materialization SEJ to materialize the generated doorway and emit the receipt.

Changes:

- Call the resolver with the accepted facade manifest and accepted materialization SEJ.
- Materialize `tools/validate-lineage.js` as a generated doorway.
- Emit the declared projection receipt.
- Keep the facade generated, evidenced, and subordinate to semantic truth.

Artifacts:

```text
reports/slice-003g-resolver-backed-facade-materialization.latest.md
evidence/facades/validate-lineage.facade-materialization.receipt.v1.json
```

Completion rule:

```text
The generated facade exists only as a resolver-materialized doorway with an emitted receipt.
```

Blocks:

- Slice 003F facade materialization SEJ must remain accepted.

Ships next:

Slice 003H: Generated Doorway Coherence Review.

## Slice 003H: Generated Doorway Coherence Review

Goal:

Review the repo after resolver-backed facade materialization so all docs consistently say that `tools/validate-lineage.js` exists only as a resolver-materialized generated doorway.

Changes:

- Align posture wording across README, tools docs, reports, doctrine, and working-tree shape.
- Distinguish the generated doorway from any hand-authored executable validator.
- Keep the receipt narrative limited to materialization proof, not operational validation.

Artifacts:

```text
reports/slice-003h-generated-doorway-coherence-review.latest.md
```

Completion rule:

```text
The repo consistently reflects the generated-doorway posture and does not imply that operational validation has begun.
```

Blocks:

- Slice 003G resolver-backed facade materialization must remain complete.

Ships next:

Slice 004A: Story Packet Validator Contract.

## Slice 004A: Story Packet Validator Contract

Goal:

Define the story packet validator as a non-executable contract before any body exists.

Changes:

- Add a story packet validator story.
- Add a canonical spec for story packet validation behavior.
- Define input and result schemas for the validator.
- Define a contract document that keeps executable behavior out of scope.

Artifacts:

```text
stories/tools/validate-story-packet.story.v1.json
specs/canonical/tools/validate-story-packet.canonical-spec.v1.json
contracts/schemas/story-packet-validation-input.schema.v1.json
contracts/schemas/story-packet-validation-result.schema.v1.json
tools/validate-story-packet.contract.md
reports/slice-004a-story-packet-validator-contract-review.latest.md
```

Completion rule:

```text
The validate-story-packet behavior is fully bounded before any executable body exists.
```

Blocks:

- Slice 003H generated-doorway posture must remain consistent.
- No executable behavior may be introduced.

Ships next:

Slice 004B: Narrative Graph Reporter Contract.

## Slice 004B: Narrative Graph Reporter Contract

Goal:

Define the narrative graph reporter as a non-executable contract before any body exists.

Changes:

- Add a narrative graph reporter story.
- Add a canonical spec for narrative graph rendering behavior.
- Define input and result schemas for the reporter.
- Define a contract document that keeps executable behavior out of scope.

Artifacts:

```text
stories/tools/render-narrative-graph.story.v1.json
specs/canonical/tools/render-narrative-graph.canonical-spec.v1.json
contracts/schemas/narrative-graph-render-input.schema.v1.json
contracts/schemas/narrative-graph-render-result.schema.v1.json
tools/render-narrative-graph.contract.md
reports/slice-004b-narrative-graph-reporter-contract-review.latest.md
```

Completion rule:

```text
The render-narrative-graph behavior is fully bounded before any executable body exists.
```

Blocks:

- Slice 004A story packet contract must remain complete.
- No executable behavior may be introduced.

Ships next:

Slice 004C: Story/Graph Tool Pair Coherence Review.

## Slice 004C: Story/Graph Tool Pair Coherence Review

Goal:

Review the `validate-story-packet` and `render-narrative-graph` contract packages together and confirm that they stay distinct, bounded, and non-executable.

Changes:

- Compare the two contract packages side by side.
- Confirm neither package claims executable behavior.
- Confirm neither package invents source truth.
- Confirm both packages can later enter the same semantic conveyor without changing their current contract-only posture.

Artifacts:

```text
reports/slice-004c-story-graph-tool-pair-coherence-review.latest.md
```

Completion rule:

```text
The paired contract posture is coherent, bounded, and still non-executable.
```

Blocks:

- Slice 004A story packet contract must remain complete.
- Slice 004B narrative graph reporter contract must remain complete.
- No executable behavior may be introduced.

Ships next:

Slice 004D: Story/Graph SEJ Contract Definitions.

## Slice 004D: Story/Graph SEJ Contract Definitions

Goal:

Define bootstrap SEJ contracts for `validate-story-packet` and `render-narrative-graph` using already-loaded JSON inputs, without any resolver handshake yet.

Changes:

- Add a SEJ contract for story packet validation.
- Add a SEJ contract for narrative graph rendering.
- Define operation requirement packets for both tools.
- Keep file loading, JSON parsing, traversal, and report writing out of scope.

Artifacts:

```text
contracts/sej/validate-story-packet.sej.v1.json
contracts/sej/render-narrative-graph.sej.v1.json
contracts/operations/validate-story-packet.operation-requirements.v1.json
contracts/operations/render-narrative-graph.operation-requirements.v1.json
reports/slice-004d-story-graph-sej-contract-review.latest.md
```

Completion rule:

```text
The two tools are fully declared in bootstrap SEJ form without a resolver handshake or generated doorway.
```

Blocks:

- Slice 004C story/graph tool pair coherence review must remain complete.
- No resolver handshake may occur yet.
- No generated doorway may exist yet.

Ships next:

Slice 004F: Story/Graph Facade Projection Manifests.

## Slice 004F: Story/Graph Facade Projection Manifests

Goal:

Define facade projection manifests for the story packet validator and narrative graph reporter without creating generated doorways.

Changes:

- Add a facade manifest for `validate-story-packet`.
- Add a facade manifest for `render-narrative-graph`.
- Keep generated doorways absent.
- Keep materialization deferred.

Artifacts:

```text
contracts/projections/validate-story-packet.facade-manifest.v1.json
contracts/projections/render-narrative-graph.facade-manifest.v1.json
reports/slice-004f-story-graph-facade-projection-review.latest.md
```

Completion rule:

```text
The two facade manifests are accepted as projection manifests only; no doorway exists yet.
```

Blocks:

- Slice 004E story/graph resolver capability handshake must remain complete.
- No generated facade may exist yet.

Ships next:

Slice 004H: Story/Graph Resolver-Backed Facade Materialization.

## Slice 004H: Story/Graph Resolver-Backed Facade Materialization

Goal:

Invoke the resolver against the accepted story/graph materialization SEJs to materialize both generated doorways and emit both receipts.

Changes:

- Call the resolver with the accepted story/graph materialization SEJs.
- Materialize `tools/validate-story-packet.js` as a generated doorway.
- Materialize `tools/render-narrative-graph.js` as a generated doorway.
- Emit the declared projection receipts.

Artifacts:

```text
reports/slice-004h-story-graph-resolver-backed-facade-materialization.latest.md
evidence/facades/validate-story-packet.facade-materialization.receipt.v1.json
evidence/facades/render-narrative-graph.facade-materialization.receipt.v1.json
```

Completion rule:

```text
Both generated facades exist only as resolver-materialized doorways with emitted receipts.
```

Blocks:

- Slice 004G story/graph facade materialization SEJ must remain accepted.

Ships next:

Slice 004I: Story/Graph Generated Doorway Operationalization Contract.

## Slice 004I: Story/Graph Generated Doorway Operationalization Contract

Goal:

Define the next generated doorway shape for the story packet validator and narrative graph reporter without editing the generated files by hand.

Changes:

- Add an operational-doorway materialization contract for `validate-story-packet`.
- Add an operational-doorway materialization contract for `render-narrative-graph`.
- Keep hand-authored executable behavior out of scope.
- Slice 004J materializes the operational doorway; Slice 004K records bootstrap invocation evidence.

Artifacts:

```text
contracts/sej/materialize-operational-validate-story-packet-facade.sej.v1.json
contracts/sej/materialize-operational-render-narrative-graph-facade.sej.v1.json
reports/slice-004i-story-graph-doorway-operationalization-contract-review.latest.md
```

Completion rule:

```text
The next generated doorway shape is fully declared, and the operational doorway is now materialized.
```

Blocks:

- Slice 004H story/graph resolver-backed facade materialization must remain complete.
- No hand-authored executable behavior may be introduced.

Ships next:

Slice 004K: Story/Graph Bootstrap Invocation Evidence.

## Slice 004K: Story/Graph Bootstrap Invocation Evidence

Goal:

Invoke the generated operational doorways against bounded already-loaded bootstrap inputs and record evidence of successful invocation without generalized validation or reporting.

Changes:

- Run `tools/validate-story-packet.js` against its authorized bootstrap payload.
- Run `tools/render-narrative-graph.js` against its authorized bootstrap payload.
- Record invocation receipts only.
- Keep generalized traversal, file loading, and report writing deferred.

Artifacts:

```text
evidence/invocations/validate-story-packet.bootstrap-invocation.receipt.v1.json
evidence/invocations/render-narrative-graph.bootstrap-invocation.receipt.v1.json
reports/slice-004k-story-graph-bootstrap-invocation-evidence.latest.md
```

Completion rule:

```text
The generated doorways are invoked successfully, and the receipts prove invocation only.
```

Blocks:

- Slice 004J operational doorway materialization must remain complete.
- No new executable behavior may be introduced.

Ships next:

Slice 004: Story Packet Validator and Narrative Graph Reporter Bootstrap Closure.

## Slice 004: Story Packet Validator and Narrative Graph Reporter Bootstrap Closure

Goal:

Close out the story/graph bootstrap line after contract, SEJ, facade, materialization, and invocation evidence are all in place.

Changes:

- Summarize Slice 004A through Slice 004K.
- Confirm the contract posture, SEJ posture, resolver handshake posture, facade projection posture, materialization posture, and invocation evidence posture.
- Record the deferred capabilities that remain out of scope for the bootstrap line.

Artifacts:

```text
reports/slice-004-story-graph-bootstrap-closure.latest.md
```

Completion rule:

```text
Slice 004 passes only when the bootstrap closure report confirms the entire story/graph line is bounded and evidence-backed.
```

Blocks:

- Slice 004K bootstrap invocation evidence must remain complete.
- No new executable behavior may be introduced.

Ships next:

Slice 005: Generalized SEJ Validation Contract Expansion.

## Slice 004G: Story/Graph Facade Materialization SEJ

Goal:

Define resolver-mediated materialization SEJs for the story packet validator and narrative graph reporter without invoking the resolver.

Changes:

- Add a materialization SEJ for `validate-story-packet`.
- Add a materialization SEJ for `render-narrative-graph`.
- Keep generated doorways absent.
- Keep materialization deferred.

Artifacts:

```text
contracts/sej/materialize-validate-story-packet-facade.sej.v1.json
contracts/sej/materialize-render-narrative-graph-facade.sej.v1.json
reports/slice-004g-story-graph-facade-materialization-sej-review.latest.md
```

Completion rule:

```text
The two materialization SEJs are accepted as projection contracts only; no generated doorway exists yet.
```

Blocks:

- Slice 004F story/graph facade projection manifests must remain complete.
- No resolver invocation may occur yet.

Ships next:

Slice 004: Story Packet Validator and Narrative Graph Reporter.

## Slice 004E: Story/Graph Resolver Capability Handshake

Goal:

Compare the two bootstrap SEJ contracts against the current resolver-native surface and confirm whether either contract needs narrowing before projection.

Changes:

- Review both SEJ contracts against the resolver-native primitive set.
- Confirm which primitives are supported by the current resolver surface.
- Confirm whether facade projection is allowed in principle for either tool.
- Keep generated doorway materialization out of scope.

Artifacts:

```text
reports/slice-004e-story-graph-resolver-capability-handshake.latest.md
```

Completion rule:

```text
Both bootstrap SEJ contracts are executable by the current resolver surface, or the review explicitly isolates unsupported primitives as blockers.
```

Blocks:

- Slice 004D story/graph SEJ contract definitions must remain complete.
- No product-code workaround may be introduced.

Ships next:

Slice 004: Story Packet Validator and Narrative Graph Reporter.

## Slice 004: Story Validator and Narrative Graph Reporter

Goal:

Round out the seed inspection layer without adding runtime execution.

Changes:

- Define and implement `validate-story-packet`.
- Define and implement `render-narrative-graph`.
- Ensure both tools are covered by story/spec lineage before executable bodies are added.
- Render the founding graph from source to evidence.

Artifacts:

```text
stories/tools/validate-story-packet.story.v1.json
stories/tools/render-narrative-graph.story.v1.json
specs/canonical/tools/validate-story-packet.canonical-spec.v1.json
specs/canonical/tools/render-narrative-graph.canonical-spec.v1.json
tools/validate-story-packet.js
tools/render-narrative-graph.js
reports/narrative-graph.latest.md
```

Completion rule:

```text
The repo can validate the founding story packet, validate projection lineage, and render the narrative graph from local artifacts.
```

Blocks:

- Slice 003 validation result format should be stable.

Ships next:

Slice 005: Generalized SEJ Validation Contract Expansion.

## Slice 005: Generalized SEJ Validation Contract Expansion

Goal:

Expand the SEJ validation contract boundary from bootstrap-only proof into a generalized contract posture, without adding executable behavior.

Changes:

- Define a generalized SEJ validation contract schema.
- Define operation requirement families for generalized validation.
- Define a policy that separates bootstrap validation posture from generalized validation posture.
- Keep file loading, generalized traversal, and report writing out of scope.

Artifacts:

```text
contracts/schemas/sej-validation-contract.schema.v1.json
contracts/operations/general-validation.operation-requirements.v1.json
contracts/policies/sej-validation-expansion.policy.v1.json
reports/slice-005-sej-validation-contract-expansion.latest.md
```

Completion rule:

```text
The validation contract expansion is bounded before implementation and introduces no executable behavior.
```

Blocks:

- Slice 004 bootstrap closure must remain complete.
- The contract must not reintroduce hidden host-language behavior.

Ships next:

Slice 006: Resolver Path Consolidation and Evidence Model.

## Slice 006: Resolver Path Consolidation and Evidence Model

Goal:

Consolidate resolver invocation, materialization, bootstrap invocation, and equivalence evidence into a single evidence model without adding runtime capability.

Changes:

- Define resolver invocation receipt requirements.
- Define equivalence report receipt requirements.
- Define evidence policy for materialization and bootstrap invocation claims.
- Keep generalized validation, generalized graph rendering, and report writing out of scope.

Evidence model classification:

Resolver-backed evidence is not a product runtime and not a permanent source of execution truth. It is:

1. A record of resolver-mediated invocation against declared SEJ contracts.
2. A bounded proof surface for materialization and bootstrap invocation receipts.

Resolver evidence receipts must state which declared source SEJ and invocation shape were used.

Artifacts:

```text
contracts/schemas/resolver-invocation-receipt.schema.v1.json
contracts/schemas/resolver-equivalence-report.schema.v1.json
contracts/policies/resolver-execution-evidence.policy.v1.json
reports/slice-006-resolver-path-consolidation.latest.md
```

Completion rule:

```text
The resolver evidence model is bounded before implementation and introduces no runtime capability.
```

Blocks:

- Slice 005 generalized validation contract expansion.
- Existing generated doorways must remain unchanged.

Ships next:

Slice 007: UI Projection Expansion.

## Slice 007: UI Projection Expansion

Goal:

Add a governed UI projection track after Markdown lineage is proven.

Candidate order:

1. UI sketch projection.
2. Slide/deck projection.
3. HTML projection.
4. Code facade projection.

Completion rule:

```text
Each new projection type must carry a projection manifest, semantic anchors, lineage receipt, and validation result.
```

Blocks:

- Slice 006 evidence model must remain complete.

Ships next:

Slice 007A: UI Sketch Projection Contract.

## Slice 007A: UI Sketch Projection Contract

Goal:

Declare a governed UI/ASCII sketch projection as a non-Markdown projection contract before any rendering implementation exists.

Changes:

- Add a story for the UI sketch projection.
- Add a canonical spec for the UI sketch projection.
- Add a projection manifest schema and render-result schema.
- Add a facade projection manifest for the founding UI sketch.
- Keep HTML, React, CSS, SVG, and runtime projection out of scope.

Artifacts:

```text
stories/projections/ui-sketch-projection.story.v1.json
specs/canonical/projections/ui-sketch-projection.canonical-spec.v1.json
contracts/schemas/ui-sketch-projection-manifest.schema.v1.json
contracts/schemas/ui-sketch-render-result.schema.v1.json
contracts/projections/founding-ui-sketch.projection-manifest.v1.json
reports/slice-007a-ui-sketch-projection-contract-review.latest.md
```

Completion rule:

```text
The UI sketch projection is declared but not rendered, and no executable behavior is introduced.
```

Blocks:

- Slice 006 resolver evidence model must remain complete.
- No rendering behavior may be introduced.

Ships next:

Slice 007B: UI Sketch Projection Handshake.

## Slice 007B: UI Sketch SEJ Render Contract

Goal:

Define a declarative SEJ render contract for the governed UI/ASCII sketch projection without introducing any renderer or rendering behavior.

Changes:

- Add a SEJ contract for the founding UI sketch projection.
- Add operation requirement seeds for bounded render execution.
- Declare render output shape, semantic anchors, deferred rendering surfaces, and evidence expectations.
- Keep HTML, React, CSS, SVG, and runtime projection out of scope.

Artifacts:

```text
contracts/sej/render-founding-ui-sketch.sej.v1.json
contracts/operations/ui-sketch-render.operation-requirements.v1.json
reports/slice-007b-ui-sketch-sej-render-contract-review.latest.md
```

Completion rule:

```text
The UI sketch projection remains unrendered, and no executable renderer exists.
```

Blocks:

- Slice 007A UI sketch projection contract must remain complete.
- No resolver invocation may occur yet.

Ships next:

Slice 007C: UI Sketch Resolver Capability Handshake.

## Slice 007C: UI Sketch Resolver Capability Handshake

Goal:

Compare the UI sketch render SEJ against the current resolver-supported primitive surface without invoking the resolver.

Changes:

- Review the UI sketch render SEJ.
- Review the UI sketch render operation requirements.
- Review the founding UI sketch projection manifest.
- Determine whether the bounded render SEJ is executable by the current resolver surface.
- Keep rendering, materialization, and resolver code changes out of scope.

Artifacts:

```text
reports/slice-007c-ui-sketch-resolver-capability-handshake.latest.md
```

Completion rule:

```text
The UI sketch render SEJ is executable by the current resolver surface if it requires only supported primitives and no narrowing is needed before materialization.
```

Blocks:

- Slice 007B UI sketch SEJ render contract must remain complete.
- No resolver invocation may occur yet.

Ships next:

Slice 007D: UI Sketch Materialization SEJ.

## Slice 007D: UI Sketch Materialization SEJ

Goal:

Define the resolver-mediated materialization contract for the governed UI/ASCII sketch projection without invoking the resolver.

Changes:

- Add a materialization SEJ for the founding UI sketch projection.
- Declare the future ASCII sketch target and future render receipt target.
- Declare generated/rendered artifact anchors and evidence emission shape.
- Keep HTML, React, CSS, SVG, and runtime projection out of scope.

Artifacts:

```text
contracts/sej/materialize-founding-ui-sketch.sej.v1.json
reports/slice-007d-ui-sketch-materialization-sej-review.latest.md
```

Completion rule:

```text
The UI sketch materialization SEJ is accepted as a projection contract review, but no UI sketch artifact exists yet.
```

Blocks:

- Slice 007C UI sketch resolver capability handshake must remain complete.
- No resolver invocation may occur yet.

Ships next:

Slice 007D.1: UI Sketch Deterministic Layout Contract.

## Slice 007D.1: UI Sketch Deterministic Layout Contract

Goal:

Define exact layout authority for the governed ASCII sketch so later materialization can render it without creative interpretation.

Changes:

- Add a schema for deterministic ASCII sketch layouts.
- Add a layout manifest for the founding UI sketch.
- Lock canvas constraints, node order, node labels, edge relationships, connector rules, and rendered line content.
- Forbid layout invention and alternate spacing or box behavior.

Artifacts:

```text
contracts/schemas/ascii-sketch-layout.schema.v1.json
contracts/projections/founding-ui-sketch.layout.v1.json
reports/slice-007d1-ui-sketch-deterministic-layout-review.latest.md
```

Completion rule:

```text
The ASCII sketch has deterministic layout authority and materialization may not invent layout meaning.
```

Blocks:

- Slice 007D UI sketch materialization SEJ must remain complete.
- No sketch is rendered in this slice.

Ships next:

Slice 007D.2: Visual Target Sketch Definition Contract.

## Slice 007D.2: Visual Target Sketch Definition Contract

Goal:

Define exact visual target sketches for the governed projection line so future materialization can validate against fixed target fixtures instead of inventing layout or semantic meaning.

Changes:

- Add a schema family for target sketches, visual nodes, visual edges, visual layouts, and sketch equivalence.
- Add target sketch fixtures for the founding lineage flow, semantic execution conveyor, and governed visual projection.
- Lock exact visual intent, canvas constraints, node lists, edge lists, layout rules, semantic bindings, expected future artifacts, equivalence rules, and forbidden claims.
- Keep rendering, resolver invocation, and executable behavior out of scope.

Artifacts:

```text
contracts/schemas/target-sketch.schema.v1.json
contracts/schemas/visual-node.schema.v1.json
contracts/schemas/visual-edge.schema.v1.json
contracts/schemas/visual-layout.schema.v1.json
contracts/schemas/sketch-equivalence.schema.v1.json
examples/target-sketches/founding-lineage-flow.target.v1.json
examples/target-sketches/semantic-execution-conveyor.target.v1.json
examples/target-sketches/governed-visual-projection.target.v1.json
reports/slice-007d2-visual-target-sketch-definition-review.latest.md
```

Completion rule:

```text
The target sketches define exact visual authority, and future materialized sketches must validate against them without creative interpretation.
```

Blocks:

- Slice 007D.1 deterministic layout authority must remain complete.
- No sketch is rendered in this slice.

Ships next:

Slice 007E: Resolver-Backed UI Sketch Materialization.

## Slice 007E: Resolver-Backed UI Sketch Materialization

Goal:

Materialize the governed ASCII sketch doorway from the accepted UI sketch SEJ materialization contract and deterministic layout authority without adding any renderer behavior.

Changes:

- Invoke the resolver against the accepted UI sketch materialization SEJ.
- Materialize the ASCII sketch doorway at the approved target path.
- Emit the declared render receipt.
- Keep HTML, React, CSS, SVG, and runtime projection out of scope.

Artifacts:

```text
examples/founding-conversation/projections/ui/founding-ui-sketch.ascii
examples/founding-conversation/evidence/founding-ui-sketch.render.receipt.v1.json
reports/slice-007e-resolver-backed-ui-sketch-materialization.latest.md
```

Completion rule:

```text
The ASCII sketch is resolver-materialized from deterministic layout authority and the receipt proves materialization only.
```

Blocks:

- Slice 007D UI sketch materialization SEJ must remain complete.
- No renderer-owned product truth may be introduced.

Ships next:

Slice 007F: Target Sketch Equivalence Invocation Evidence.

## Slice 007F: Target Sketch Equivalence Invocation Evidence

Goal:

Invoke the bounded target-sketch equivalence contract against the current materialized ASCII doorway and record whether the rendered sketch genuinely matches the declared target sketch fixture.

Changes:

- Validate the materialized sketch against the founding-lineage-flow target sketch fixture.
- Record the target sketch fixture path, rendered sketch path, equivalence rule set, checked node keys, checked edge keys, checked semantic bindings, checked layout constraints, and hashes.
- Keep renderer code, layout repair, and generalized UI rendering out of scope.

Artifacts:

```text
contracts/sej/validate-founding-ui-sketch-equivalence.sej.v1.json
contracts/operations/sketch-equivalence.operation-requirements.v1.json
evidence/invocations/founding-ui-sketch.equivalence-invocation.receipt.v1.json
reports/slice-007f-target-sketch-equivalence-invocation-evidence.latest.md
```

Completion rule:

```text
The materialized sketch validates against the declared target sketch fixture, or the invocation evidence remains blocked if it does not.
```

Blocks:

- Slice 007D.2 target sketch definition must remain complete.
- No renderer-owned layout meaning may be invented during validation.

## Slice 007E.1: Re-materialize Target Sketch To Canonical Path

Goal:

Re-run the governed materialization against the reconciled canonical target path so the resolver writes the sketch at `examples/target-sketches/projections/founding-lineage-flow.ascii` without changing the sketch content by hand.

Changes:

- Invoke the resolver against the accepted materialization SEJ.
- Materialize the governed ASCII sketch doorway at the canonical target-sketch path.
- Emit the reconciled render receipt at the canonical evidence path.
- Keep the existing rendered doorway file untouched until a later cleanup slice.
- Keep equivalence invocation out of scope for this slice.

Artifacts:

```text
reports/slice-007e1-rematerialize-target-sketch-canonical-path.latest.md
```

Completion rule:

```text
The sketch is resolver-materialized at the canonical target-sketch path, and the receipt references that canonical path.
```

Blocks:

- Slice 007D.2 target sketch definition must remain complete.
- No equivalence invocation may be re-run in this slice.
- No hand-authored layout changes may be introduced.

## Slice 007F.1: Target Sketch Projection Path Reconciliation

Goal:

Reconcile the projection authority chain so the target sketch fixture, projection manifest, layout contract, render SEJ, materialization SEJ, and equivalence SEJ all name the same canonical target artifact path without changing the rendered doorway content in this slice.

Changes:

- Update the governed projection path to `examples/target-sketches/projections/founding-lineage-flow.ascii`.
- Update the governed receipt path to `examples/target-sketches/evidence/founding-lineage-flow.render.receipt.v1.json`.
- Keep the existing rendered doorway file untouched until a later materialization slice.
- Keep equivalence invocation out of scope for this slice.

Artifacts:

```text
reports/slice-007f1-target-sketch-projection-path-reconciliation.latest.md
```

Completion rule:

```text
The governed projection path is consistent across the contract chain, and the stale doorway artifact is left intact until the next materialization slice.
```

Blocks:

- Slice 007D.2 target sketch definition must remain complete.
- No rendered doorway content may be changed in this slice.
- No equivalence invocation may be re-run in this slice.

Ships next:

Slice 007F: Target Sketch Equivalence Invocation Evidence.

## Slice 007F.2: Target Sketch Equivalence Validation

Goal:

Validate the canonical-path materialized sketch against the founding-lineage-flow target sketch fixture and record the passed judgment as evidence.

Changes:

- Re-run the equivalence gate against the canonical path sketch.
- Record the target sketch fixture path, rendered sketch path, equivalence rule set, checked node keys, checked edge keys, checked semantic bindings, checked layout constraints, and hashes.
- Keep renderer code, layout repair, and generalized UI rendering out of scope.

Artifacts:

```text
reports/slice-007f2-target-sketch-equivalence-validation.latest.md
```

Completion rule:

```text
The materialized sketch validates against the declared target sketch fixture, and the receipt records the passed judgment.
```

Blocks:

- Slice 007D.2 target sketch definition must remain complete.
- No renderer-owned layout meaning may be invented during validation.
- No hand-authored rendering logic may be introduced.

## Slice 007G.1: Visual Projection Model Navigation Alignment

Goal:

Align repo navigation and posture around the new visual projection model report without introducing schemas, renderers, or materialization.

Changes:

- Record `reports/slice-007g-visual-projection-model-contract.latest.md` as the report-first Slice 007G artifact.
- State that the current system proves deterministic writing, not yet deterministic visual projection.
- State that `visualProjectionModel` is the product center for future renderers.
- Point the repo toward Slice 007G.2 as the next implementation slice.

Artifacts:

```text
README.md
ROADMAP.md
docs/Implementation Plan.md
docs/architecture/working-tree-shape.md
contracts/schemas/README.md
reports/README.md
```

Completion rule:

```text
The repo navigation clearly discovers Slice 007G, names the visualProjectionModel as the center for future renderers, and points implementation to Slice 007G.2 without adding schemas or renderer code.
```

Blocks:

- Slice 007G report-only posture must remain intact.
- No schema artifacts may be introduced yet.
- No renderer, materialization, or equivalence behavior may be introduced.

## Slice 007G.2: Visual Projection Model Schema and Policy Artifacts

Goal:

Promote the visual projection model from report-only posture into governed schema and policy artifacts, without introducing a renderer or any materialized visual output.

Changes:

- Create the visual projection model schema and supporting surface/region/render-adapter schemas.
- Create the visual projection determinism policy.
- Keep target sketches as visual intent fixtures.
- Keep future adapters subordinate to the governed `visualProjectionModel`.

Artifacts:

```text
contracts/schemas/visual-projection-model.schema.v1.json
contracts/schemas/visual-surface.schema.v1.json
contracts/schemas/visual-region.schema.v1.json
contracts/schemas/visual-render-adapter.schema.v1.json
contracts/policies/visual-projection-determinism.policy.v1.json
reports/slice-007g2-visual-projection-model-schema-policy.latest.md
```

Completion rule:

```text
The repo has the governing visual projection schemas and policy artifacts, but no renderer and no materialized visual artifact.
```

Blocks:

- Slice 007G.1 report-only posture must remain intact.
- No renderer, adapter implementation, or materialized visual artifact may be introduced.
- No resolver code may be changed.

Ships next:

Slice 007H: Deterministic ASCII Render Kernel Contract.

## Slice 007H: Deterministic ASCII Render Kernel Contract

Goal:

Declare a deterministic ASCII render kernel as a governed mechanism that consumes `visualProjectionModel`, emits `asciiRenderResult`, and stays subordinate to SEJ materialization and evidence receipts.

Changes:

- Add an ASCII render kernel schema and result schema.
- Add operation requirements for the kernel boundary.
- Add a boundary policy that forbids the kernel from writing artifacts or receipts directly.
- Keep renderer code, runtime projection, and visual artifact generation out of scope.

Artifacts:

```text
contracts/schemas/ascii-render-kernel.schema.v1.json
contracts/schemas/ascii-render-result.schema.v1.json
contracts/operations/ascii-render-kernel.operation-requirements.v1.json
contracts/policies/ascii-render-kernel-boundary.policy.v1.json
reports/slice-007h-deterministic-ascii-render-kernel-contract.latest.md
```

Completion rule:

```text
The kernel is contractually bounded as a deterministic mechanism only, and it does not own artifact writing or receipt emission.
```

Blocks:

- Slice 007G.2 visual projection model schema and policy artifacts must remain complete.
- No renderer code may be introduced yet.

Ships next:

Slice 007L: Visual Narrative Source Contract.

## Slice 007L: Visual Narrative Source Contract

Goal:

Define a governed source-surface family for sketches, whiteboards, diagrams, wireframes, and similar authored visual intent surfaces so they can enter the conveyor as source truth only through explicit role change and evidence.

Changes:

- Add a schema for visual narrative source records.
- Add a story packet for treating visual surfaces as source intent.
- Add a canonical spec that requires capture, normalization, ambiguity tracking, and explicit role-change evidence.
- Keep visual extraction, OCR, and source-to-code automation out of scope.

Artifacts:

```text
contracts/schemas/visual-narrative-source.schema.v1.json
stories/sources/visual-narrative-source.story.v1.json
specs/canonical/sources/visual-narrative-source.canonical-spec.v1.json
reports/slice-007l-visual-narrative-source-contract-review.latest.md
```

Completion rule:

```text
Visual intent surfaces may enter the conveyor as source truth only when their source role is explicit, bounded, and evidenced.
```

Blocks:

- Slice 007H deterministic ASCII render kernel contract must remain complete.
- No source extraction engine may be introduced yet.

Ships next:

Slice 007M: Visual Source Role-Change Receipt Contract.

## Slice 007M: Visual Source Role-Change Receipt Contract

Goal:

Define the receipt boundary for changing an artifact role from projection output to source-intent surface without implementing extraction, OCR, or canonicalization.

Changes:

- Add a schema for source role-change receipts.
- Add a policy for projection-output-to-source-intent transitions.
- Record prior projection evidence and source capture evidence as separate governed inputs.
- Keep visual extraction, OCR, image analysis, and canonicalization out of scope.

Artifacts:

```text
contracts/schemas/source-role-change-receipt.schema.v1.json
contracts/policies/source-surface-role-change.policy.v1.json
reports/slice-007m-visual-source-role-change-receipt-contract.latest.md
```

Completion rule:

```text
An artifact can change role from projection output to source-intent surface only through an explicit governed receipt, and no extraction or canonicalization is implied.
```

Blocks:

- Slice 007L visual narrative source contract must remain complete.
- No visual extraction engine may be introduced yet.

Ships next:

Slice 007M.1: Run Visual Evidence Standard.

## Slice 007M.1: Run Visual Evidence Standard

Goal:

Make ASCII visual evidence a required proof surface for meaningful slices so every meaningful run leaves a visual trace alongside textual evidence.

Changes:

- Add a schema for run visual evidence.
- Add a policy requiring visual evidence for meaningful slices.
- Add a sketch folder README that defines the run-sketch convention.
- Add the first run sketch artifact for this standard slice.
- Keep renderer code, SVG, HTML/CSS, DOCX, PDF, PPTX, Google Docs, Google Slides, and video out of scope.

Artifacts:

```text
contracts/schemas/run-visual-evidence.schema.v1.json
contracts/policies/run-visual-evidence-required.policy.v1.json
reports/sketches/README.md
reports/sketches/slice-007m1-run-visual-evidence-standard.ascii
reports/slice-007m1-run-visual-evidence-standard.latest.md
```

Completion rule:

```text
Meaningful slices produce or update visual evidence, and the evidence is still subordinate to textual reports and receipts.
```

Blocks:

- Slice 007M visual source role-change receipt contract must remain complete.
- No renderer may be introduced yet.

Ships next:

Slice 007M.2: Run Sketch Authoring Violation Disposition.

## Slice 007M.2: Run Sketch Authoring Violation Disposition

Goal:

Record that the `Slice 007M.1` ASCII sketch was hand-authored and therefore cannot be treated as governed pipeline evidence.

Changes:

- Classify the existing sketch as manual visual seed or ungoverned visual draft.
- Record that the artifact does not prove deterministic visual generation.
- Record that the artifact does not prove `visualProjectionModel` rendering.
- Record that the artifact does not satisfy future governed visual evidence requirements.
- Keep renderer code, extraction, OCR, image analysis, and canonicalization out of scope.

Artifacts:

```text
reports/slice-007m2-run-sketch-authoring-violation-disposition.latest.md
```

Completion rule:

```text
The existing run sketch is downgraded to manual visual seed or ungoverned visual draft, and no hand repair is treated as governed evidence.
```

Blocks:

- Slice 007M.1 run visual evidence standard must remain complete.
- No sketch is repaired by hand.

Ships next:

## Slice 008: Narrative Coverage Prototype

Goal:

Prototype the reverse-conveyor modernization path.

Changes:

- Define `narrative-coverage-report.schema.v1.json`.
- Create a tiny legacy-code fixture with one authorized path and one false narrative path.
- Produce a ghost-narrative register.
- Route findings through a human reconciliation report.

Artifacts:

```text
contracts/schemas/narrative-coverage-report.schema.v1.json
examples/legacy-remediation/
reports/narrative-coverage.latest.md
```

Completion rule:

```text
The prototype distinguishes authorized behavior from unanchored behavior and reports narrative coverage.
```

Blocks:

- Stable canonical spec and finding formats.

## Immediate Work Queue

1. Treat D001 through D005 as accepted working decisions for Slice 000.
2. Record D006 as the minimum artifact shape lock decision.
3. Create root `README.md`, `GOVERNANCE.md`, and `ROADMAP.md`.
4. Create Slice 001 directory structure.
5. Define minimum schemas for source, story, canonical spec, projection manifest, and lineage receipt.
6. Create the founding example chain.
7. Add `tools/README.md` and `tools/validate-lineage.contract.md`, but no executable tool body yet.
8. Add `reports/narrative-graph.latest.md` and `reports/lineage.latest.md` as manually generated seed reports.
9. Define the validate-lineage SEJ contract in Slice 003C before any executable facade exists.
10. Confirm resolver capability in Slice 003D before any facade projection is accepted.
11. Project the facade manifest in Slice 003E before any executable body is considered.
12. Keep `tools/validate-lineage.js` deferred until the semantic runway is complete.

## First Completion Bar

Slice 001 is complete when a reviewer can open the repo and answer:

```text
What source narrative started this?
What story did it authorize?
What canonical spec hardened the story?
What Markdown projection rendered it?
What receipt proves the projection stayed aligned?
What report shows the chain?
```

No runtime execution is required for that first bar. That restraint is the point.
