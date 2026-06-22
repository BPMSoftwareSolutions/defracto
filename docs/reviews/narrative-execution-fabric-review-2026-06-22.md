# Narrative Execution Fabric Review

Review date: 2026-06-22

Review status: manual analysis surface. This document is not canonical authority. It summarizes the current repository state and points back to source narratives, stories, canonical specs, semantic operation graphs, SEJ contracts, projection manifests, generated surfaces, and receipts.

## Executive Summary

The Narrative Execution Fabric is coherent as a narrative-driven development system. Its strongest idea is also its clearest invariant: product behavior should not originate in generated code. Behavior originates in source narrative, hardens into story and canonical spec, becomes semantic executable JSON or a semantic operation graph, and only then projects into generated runtime, documentation, visual, evidence, and release surfaces.

The architecture is already more than a document set. It has a working resolver doorway pattern, generated facades, receipts, gates, DTO contracts, conformance fixtures, and at least one passing generated test for the ASCII render kernel. The lane-worker and CLI surfaces are the most mature runtime paths. Runner is already materialized, and inspector, shipper, and telemetry now have resolver-built node doorways and projection receipts as well.

The current risk is not that the story is incoherent. The risk is that some projected or historical surfaces look official while their receipts are blocked, stale, missing, or sensitive to line-ending drift. The system mostly tells the truth about this, but it needs a stronger live artifact graph and stricter drift receipts to make that truth obvious at scale.

## What Matters Most

The thing that matters most in this fabric is not whether something can be generated. It is whether the generated thing is faithful, polished, and receipted enough to be trusted as a projection of the story instead of a hand-shaped artifact.

In practice, that means:

- Narrative, canonical spec, semantic JSON, and projection output must stay in lockstep.
- The conveyor must own the compiler path; generated surfaces should not quietly become the source of meaning.
- Projection should be selectable by surface, audience, and channel, not hardwired to one output type.
- Repair should be governed and receipted, not silent.
- Refactoring should preserve meaning while changing implementation shape.

## The Story Spine

The core conveyor story is:

```text
The CLI opens.
The runner moves.
The workers transform.
The ledger remembers.
The inspector judges.
The shipper releases.
Telemetry reflects.
The conveyor lives.
```

That story is repeated across the source narratives and is the best human-level summary of the architecture.

The intended authority chain is:

```text
source narrative
-> story packet
-> canonical spec
-> semantic operation graph / SEJ
-> projection manifest
-> generated or projected surface
-> receipt
-> conformance / gate / release posture
-> telemetry back to source candidates
```

This is the no-drift contract: a generated surface must not invent meaning that is absent from the story, canonical spec, semantic body, projection manifest, and receipts.

## Character Map

| Character | Verb | Source authority | Semantic authority | Projection surface | Current maturity |
| --- | --- | --- | --- | --- | --- |
| NDD CLI | opens | `source/cli/ndd-cli.source-narrative.md` | `contracts/sej/ndd-cli.execute.sej.v1.json` and `contracts/semantic-operation-graphs/cli/ndd-cli.conveyor-run.execute.sog.v1.json` | `bin/ndd.cjs`, `generated/cli/node/ndd.cjs` | Real resolver doorway, but node receipt hash is stale |
| Conveyor Runner | moves | `source/runner/conveyor-runner.source-narrative.md` | `contracts/semantic-operation-graphs/runner/conveyor-runner.execute.sog.v1.json` | `generated/runner/node/conveyor-runner.cjs` | Story/spec/SOG present, generated thin facade materialized, receipt passed |
| Lane Workers | transform | `source/workers/lane-workers.source-narrative.md` | `contracts/semantic-operation-graphs/workers/lane-workers.execute.sog.v1.json` | `generated/workers/node/lane-worker.cjs` | Strongest mature facade after CLI; receipt hash matches |
| Evidence Inspector | judges | `source/inspector/evidence-inspector.source-narrative.md` | `contracts/semantic-operation-graphs/inspector/evidence-inspector.execute.sog.v1.json` | `generated/inspector/node/evidence-inspector.cjs` | Story/spec/SOG present, generated doorway materialized, receipt passed |
| Shipper | releases | `source/shipper/shipper.source-narrative.md` | `contracts/semantic-operation-graphs/shipper/shipper.execute.sog.v1.json` | `generated/shipper/node/shipper.cjs` | Story/spec/SOG present, generated doorway materialized, receipt passed |
| Telemetry Observer | reflects | `source/telemetry/telemetry-observer.source-narrative.md` | `contracts/semantic-operation-graphs/telemetry/telemetry-observer.execute.sog.v1.json` | `generated/telemetry/node/telemetry-observer.cjs` | Story/spec/SOG present, generated doorway materialized, receipt passed |
| ASCII Render Kernel | renders deterministic visual proof | `stories/kernels/ascii-render-kernel.story.v1.json` | `contracts/sej/ascii-render-kernel.semantic-kernel.v1.json` | `generated/kernels/ascii-render-kernel.cjs` | Executable and test-backed |

## Projection Surfaces

The repo has several projection families:

- Runtime facades: `bin/`, `generated/cli/`, `generated/workers/`, `generated/runner/`, `generated/inspector/`, `generated/shipper/`, `generated/telemetry/`, `generated/kernels/`.
- Contracted projection manifests: `contracts/projections/*.json`.
- Documentation projections: `README.md`, `ROADMAP.md`, run indexes, run reports, RUNME files, and doc ASCII sketches governed by `contracts/docs/*.json`.
- Visual projections: `projections/visual-models/`, `projections/ascii/`, `projections/target-sketches/`, and founding conversation UI/markdown projections.
- Evidence projections: `evidence/**`, including receipts, conformance records, release gates, and drift gates.
- Release projections: `releases/` and run-scoped release packets.

The repository correctly says projections are not source truth. They are outputs with lineage.

## Conveyor Flow

The live conveyor pattern is:

1. Source enters through `source/`.
2. Work is structured into lanes under `conveyor/lanes/`.
3. A run manifest declares stages, required receipts, hashes, and release posture.
4. The CLI doorway invokes resolver authority instead of owning the conveyor brain.
5. The runner loads the run manifest, verifies resolver authority, resolves materialization and conformance SEJs, smoke-tests generated facades, verifies receipts and hashes, then emits a run receipt.
6. Lane workers transform one authorized input into one authorized output and leave receipts.
7. The inspector reconciles evidence and classifies mismatches.
8. The shipper only releases when gates pass.
9. Telemetry captures observations and may create source-promotion candidates, but cannot silently mutate canonical truth.

The important design choice is that movement, transformation, judgment, release, and reflection are separate responsibilities. No one character gets to become the hidden author of the whole system.

## Coherence Findings

### Strong Alignment

- The top-level governance rule, "No Competing Narratives", is consistently reflected in gates, policies, stories, canonical specs, and facade manifests.
- Most major conveyor characters have source narrative, story, canonical spec, SOG/SEJ, projection manifest, visual model, and evidence posture.
- The generated doorway pattern is disciplined: generated facades should call the resolver and should not shape DTOs, hide fallback logic, or own product meaning.
- Release posture is honest. The shipper and release-gate receipts are blocked when evidence is not complete.
- DTO doctrine is strong. The repo explicitly rejects ornamental DTOs and shape matches without projection lineage.
- Telemetry is designed as a feedback loop into source candidates, not as automatic canonical mutation.

### Drift And Contradictions

1. `generated/cli/node/ndd.cjs` has a passed node-projection receipt whose recorded `artifactHash` does not match current file bytes.
   - Current file hash: `sha256:9fab97ecaafae253960660f5583be85a3939facdf970ba961c2db637f7990d5c`
   - Receipt hash: `sha256:f86df141ffd285fc7dc79f45baa5c619277fd6a6183b876c19e79a87427b0167`
   - `bin/ndd.cjs` does match its receipt, so this looks like generated node-surface drift or a stale receipt.

2. Two passed receipts mismatch raw file bytes because of line endings, while LF-normalized content matches the recorded hash.
   - `tests/kernels/ascii-render-kernel.generated.test.js`
   - `conveyor/runs/2026/06/21/slice-007h-sej-projected-ascii-render-kernel/final/run-sketch.ascii`
   - This is not semantic drift, but it is operational drift unless hash policy explicitly normalizes line endings.

3. Slice 009 declares a package materialization goal for runner, workers, inspector, shipper, and telemetry, and the doorway projections are now in better shape.
   - Runner, inspector, shipper, and telemetry node projection receipts are now passed.
   - The remaining gap is to persist companion conformance receipts and clean up any older placeholder claims that still point at the pre-materialized state.

4. Several docs and decision/doctrine pages are placeholders while their filenames imply important authority.
   - Examples: `docs/architecture/voice-to-value-flow.md`, `docs/architecture/conveyor-cast.md`, `docs/doctrine/no-competing-narratives.md`, and decisions D007-D011.
   - This is acceptable as target shape only if their placeholder status remains explicit and receipt-backed.

5. Singular `lane-worker` and plural `lane-workers` chains both exist.
   - The singular chain appears to be a seed artifact.
   - The plural chain is more mature and carries source lineage and projection authority.
   - A supersession receipt would make this evolution unambiguous.

6. Early generated tools are no-op stubs.
   - `generated/tools/validate-lineage.js`, `generated/tools/validate-story-packet.js`, and `generated/tools/render-narrative-graph.js` run successfully but do not perform validation or rendering.
   - Their status should stay clearly classified as doorway/stub/future unless materialized into real resolver-backed operations.

7. Some historical reports are stale relative to current artifacts.
   - Example: `conveyor/runs/2026/06/21/reports/ndd-cli-self-binding-gap-analysis.md` says the Node projection receipt remains pending, while current evidence says it passed.
   - Historical reports need supersession metadata or generated freshness stamps.

8. Documentation projection receipts should become more complete.
   - `evidence/docs/generated-docs.receipt.v1.json` lists materialized outputs but does not include per-output hashes.
   - `evidence/docs/generated-doc-drift.receipt.v1.json` verifies one artifact path.
   - At scale, the doc drift gate should cover every listed materialized doc output.

## Self-Healing Assessment

The system has the beginning of self-healing, but it is not autonomous silent repair. That is good.

A minimal repair-proposal authority now exists in the repo as governed candidate shape:

- `contracts/schemas/repair-proposal.schema.v1.json`
- `conveyor/inspector/repair-proposal.policy.v1.json`
- `conveyor/telemetry/repair-proposal.flow.v1.json`

That gives the conveyor a place to name the gap, the affected artifacts, and the proposed fix without pretending the fix is canonical before review.

The first closed-loop pilot now exists as well:

- `.tmp/proofs/repair-pilot.proposal.sej.v1.json` emitted an approved repair proposal for the stale slice-015 docs report.
- `.tmp/proofs/repair-pilot.rematerialize.sej.v1.json` rematerialized the report from that proposal.
- `conveyor/runs/2026/06/21/reports/slice-015-documentation-projection-conveyor.latest.md` now says `passed` and references the live receipt chain.

That is the basic self-healing loop the fabric needed: observe, propose, approve, rematerialize, receipted verify.

Current self-healing shape:

```text
drift or observation
-> telemetry capture
-> source promotion candidate
-> human or operator review
-> story/spec/contract update
-> projection rematerialization
-> conformance receipt
-> release gate
```

This is safer than automatic mutation because it preserves the root rule: telemetry cannot become canonical truth without promotion. The next maturity jump is to make the inspector and telemetry loop executable enough to produce repair proposals with exact affected artifacts, expected regenerated hashes, and blocked release posture until rematerialization passes.

## Voice To Value Assessment

The architecture can support voice to value, but the current repository is not yet a fully push-button spoken-intent-to-shipped-solution system.

There are three maturity levels:

1. Voice/audio to preserved source.
2. Preserved source or transcript to governed story/spec/contract.
3. Governed contract to implemented, tested, projected, reviewed, and shipped solution.

The repo has strong coverage for levels 2 and 3 as target architecture, and partial live coverage for text-to-conveyor execution. It has only placeholder-level coverage for raw voice/audio capture.

Existing support:

- `source/voice-notes/` exists as the intended intake bucket for spoken drafts.
- `source/conversations/` already proves that preserved conversation can become story, canonical spec, projection, and lineage evidence.
- `conveyor/pipeline/voice-to-value.pipeline.v1.json` declares the full accepted lane sequence from source capture through telemetry.
- `conveyor/lanes/00-capture-source/lane.contract.v1.json` accepts `operatorText`, uploaded source, visual source, and telemetry source candidates.
- Lanes 01-11 define the path from extracted story through canonical spec, semantic contract, runtime projection, materialization, conformance, visual evidence, evidence review, release preparation, ship, and telemetry.
- `projections/founding-conversation/cli/the-cli-story.md` describes `ndd handoff run --text ...` as a live doorway pattern.
- Gemini Flash worker profile and dispatch/response contracts exist for bounded lane work.

Current gaps:

- The dedicated architecture page `docs/architecture/voice-to-value-flow.md` is still a placeholder.
- There is no explicit speech-to-text adapter contract, audio evidence schema, or transcription receipt.
- `source/voice-notes/` has only a README, not a governed audio/transcript example.
- CLI command authority is split: some projected docs and live dispatch files mention `ndd handoff run --text`, while `conveyor/cli/ndd-handoff-command-map.v1.json` only declares older slice-specific handoff commands.
- Two CLI input schemas exist with different shapes: one includes `operatorText` directly, while the newer JSON Schema uses a generic `payload`.
- The runner/inspector/shipper/telemetry generated facades are not yet mature enough to complete the whole conveyor as a live self-contained implementation path.
- Release remains correctly gated on receipts and conformance, so an arbitrary spoken description cannot honestly become shipped product without passing the evidence chain.

The practical answer is: yes, voice to value is possible in this architecture, but the current mature path is closer to "text description to governed candidate artifacts" than "spoken audio to shipped implementation."

To make it real end to end, the next slice should add:

1. A voice-source DTO with audio path, transcript text, speaker, timestamp, consent/source posture, and content hash.
2. A transcription lane or adapter contract that turns audio into transcript with a transcript receipt.
3. A source-capture receipt that binds audio hash, transcript hash, and operator text.
4. A unified `ndd handoff run --text` / `--voice` command contract.
5. A generated run manifest for voice-to-value runs.
6. A sample tiny spoken-request fixture that generates a small implemented solution.
7. Conformance evidence proving the generated implementation matches the canonical spec.
8. Inspector and shipper receipts proving the result is releasable.

The strongest version of this system would let a person speak a desired outcome, then watch the conveyor expose every intermediate claim before code appears:

```text
spoken intent
-> transcript receipt
-> source capture receipt
-> story packet
-> canonical spec
-> semantic operation graph / SEJ
-> projection manifest
-> generated implementation
-> tests / conformance
-> visual or behavioral evidence
-> inspector judgment
-> release packet
-> telemetry
```

That is the right shape. The missing work is binding voice capture and CLI command authority into the same receipt-backed lane system that already exists for text and generated surfaces.

## Compiler Framing

The strongest way to understand this architecture is as a compiler.

The chatbot, voice interface, or human author is the front-end. It captures intent and helps author JSON authority. The JSON artifacts are the intermediate representation. The resolver is the compiler/runtime backend. Generated code, docs, receipts, visual sketches, tests, and release packets are build outputs.

The compiler pipeline looks like this:

```text
description / voice / imported source
-> source artifact
-> story packet
-> canonical spec
-> semantic operation graph / SEJ
-> capability binding
-> projection manifest
-> materialized artifact
-> receipt / hash
-> conformance
-> release
```

That is why the lightweight authoring workflow works. A chatbot can generate the JSON IR, the operator can drop it into the repo, and the resolver can compile it into governed outputs. The product behavior is not hand-coded in the generated surface. The generated surface is a compiled projection from authority.

This changes what "coding" means:

- Authoring becomes describing intent, constraints, acceptance criteria, forbidden claims, DTO shapes, and projection targets.
- Compilation becomes resolver execution over declared JSON authority.
- Type checking becomes lineage validation, DTO validation, capability binding, hash verification, and conformance.
- Build artifacts become generated facades, docs, sketches, receipts, and release packets.
- Refactoring becomes changing authority and recompiling projections, not hand-editing product code.

The architecture should lean into this by adding compiler-grade passes:

1. Parse pass: turn source text, transcript, imported docs, or legacy code into source artifacts.
2. Story pass: extract actors, goals, acceptance criteria, and forbidden claims.
3. Canonicalization pass: harden story into canonical nodes and rules.
4. Type pass: validate DTOs, schemas, lineage, capabilities, and forbidden responsibilities.
5. Lowering pass: convert canonical behavior into SOG/SEJ.
6. Linking pass: bind semantic actions to resolver capabilities and target projection manifests.
7. Emit pass: materialize generated surfaces, docs, tests, receipts, and visual evidence.
8. Verify pass: run conformance, hash checks, equivalence checks, inspector review, and release gates.
9. Feedback pass: capture telemetry and create source-promotion candidates.

The main architectural risk is allowing the chatbot to become an ungoverned compiler frontend. The right posture is: the model may propose JSON authority, but the conveyor must type-check it, compile it, test it, and refuse release when evidence is missing.

## Document To Product Compiler

The same compiler model applies to documents, slide decks, resumes, business plans, go-to-market strategies, operating plans, and client strategy artifacts.

A document should enter the conveyor as source evidence, not as automatic truth. The deck, DOCX, PDF, spreadsheet, or resume is the source artifact. The conveyor extracts candidate meaning, promotes reviewed meaning into story/spec authority, and then compiles that authority into products, apps, workflows, dashboards, automations, and generated docs.

General document-to-product pipeline:

```text
PPTX / DOCX / PDF / spreadsheet / resume
-> source capture with file hash and metadata
-> document parse: slides, sections, tables, charts, notes, images
-> intent extraction: goals, actors, metrics, constraints, initiatives
-> story packets: user/business/operator stories
-> canonical specs: product, workflow, data, KPI, policy, UX requirements
-> semantic operation graphs / SEJ
-> app projections: UI, API, data model, jobs, reports, automations
-> generated implementation
-> conformance and evidence
-> release
-> telemetry back to roadmap
```

The Roll-Rite deck at `G:\My Drive\BPM Software Solutions\Clients\Roll-Rite\Executive Summary\RR Growth Roadmap Final 121317.pptx` is a good concrete example. It has 47 slides and a strong strategy structure: Vision 2022, growth criteria, strategic priorities, a 5x5 growth strategy, and five initiatives around service/install centers, fleet sales and services, tarp upsell, retractable flatbed tarp acquisition, and international expansion.

Compiled as software, that deck is not just a presentation. It is a source program for a growth-execution system.

A dedicated pilot note for that deck now lives at [docs/reviews/roll-rite-strategy-deck-conveyor-pilot.md](</C:/Users/Sidney Jones/OneDrive - bpmsoftwaresolutions.com/Documents/narrative-execution-fabric/docs/reviews/roll-rite-strategy-deck-conveyor-pilot.md>).

Potential products the conveyor could derive:

- Growth roadmap operating system: goals, milestones, owners, initiative status, receipts, and release-style governance for business execution.
- Market and fleet targeting CRM: target fleet inventory, segmentation, account scoring, sales motions, relationship history, and conversion evidence.
- Service center expansion planner: geographic coverage, install-center economics, authorized installer network, capacity planning, and revenue dashboards.
- Fleet ROI and value-selling app: payload/productivity ROI model, driver safety story, downtime reduction calculator, proof artifacts, and proposal generation.
- Aftermarket tarp growth engine: installed-base targeting, upsell cadence, product fit, replacement cycles, pricing strategy, and repeat-purchase tracking.
- Acquisition diligence workspace: target-company pipeline, Pugh scoring, integration plan, product/market requirements, risk register, and synergy tracking.
- International expansion cockpit: country prioritization, partner/OEM pipeline, market research ledger, trade-show plan, and localized go-to-market strategy.
- Strategy-to-execution dashboard: converts slide goals into measurable KPIs, stage gates, initiative receipts, and leadership review packets.

This is where the compiler framing matters. The deck supplies intent, goals, hypotheses, and constraints. The conveyor turns those into typed artifacts:

- Business actors become personas, roles, and permissions.
- Growth initiatives become bounded product epics.
- Goals become KPI contracts.
- Action plans become milestones, jobs, workflows, and dashboards.
- Market maps become data ingestion and segmentation requirements.
- Value propositions become sales enablement flows and ROI calculators.
- Success requirements become gates and conformance checks.
- Risks and questions become evidence obligations.

For this to work safely, the conveyor needs a document-intake frontend:

1. File capture DTO: path, type, size, hash, author/source, confidentiality posture, received date, and source role.
2. Parser adapters: PPTX, DOCX, PDF, XLSX, images/OCR, speaker notes, charts, and embedded media.
3. Extraction receipts: what text/tables/images were extracted, what was skipped, and what could not be parsed.
4. Strategy ontology: goals, KPIs, initiatives, markets, segments, channels, capabilities, risks, milestones, owners, and financial targets.
5. Product compiler pass: translate strategy ontology into app candidates, epics, data models, workflows, UI surfaces, jobs, and reports.
6. Ambiguity gate: block or ask for review when a slide implies a product rule that is not explicit.
7. Equivalence evidence: every generated app feature maps back to a slide, table, note, or reviewed operator decision.

The important rule: business documents are high-value source material, but they are often aspirational, ambiguous, and incomplete. The conveyor should compile them into products only through reviewable intermediate artifacts, not by treating every slide bullet as implementation truth.

## Projection Surface Abstraction

The conveyor should treat projection as a first-class compiler phase. A description, strategy, ASCII sketch, source document, or canonical spec should compile into a semantic projection model first, then fan out into selected render surfaces.

The abstraction is:

```text
source meaning
-> semantic projection model
-> projection manifest
-> render adapter
-> surface artifact
-> evidence receipt
-> equivalence / drift gate
```

The repo already has the beginning of this:

- `contracts/schemas/visual-projection-model.schema.v1.json` defines visual concepts, surfaces, regions, nodes, edges, containers, lanes, layout rules, semantic bindings, render adapters, equivalence rules, and forbidden claims.
- `contracts/schemas/visual-render-adapter.schema.v1.json` defines adapter families and output artifact kinds.
- `contracts/policies/visual-projection-determinism.policy.v1.json` says adapters must consume the model, apply deterministic rules, emit declared artifact formats, fail closed on missing semantics or geometry, and emit evidence.
- `contracts/docs/documentation-surface.catalog.v1.json` catalogs doc projection surfaces.
- ASCII sketches and target sketches already exist as early projection surfaces.

The missing piece is a generalized projection registry that lets the conveyor pick target surfaces by intent, audience, channel, and evidence requirement.

Target projection families:

- Static visual: ASCII, SVG, PNG, PDF figure, infographic image.
- Interactive web: HTML/CSS, React/Vue/Svelte component, embeddable web widget.
- Product UI: wireframe, design spec, app screen, dashboard, workflow console.
- Document: Markdown, Google Docs, Word DOCX, PDF, report packet.
- Presentation: PowerPoint, Google Slides, executive briefing.
- Motion: animated SVG, CSS animation, Lottie, MP4, explainer video storyboard.
- Publishing: website article, blog post, LinkedIn post, newsletter, press release.
- Distribution: website publish, LinkedIn publish package, YouTube upload package, email campaign package.
- Runtime: generated app, API, job, automation, data pipeline, CRM workflow.

The semantic projection model should own meaning; adapters should own only rendering mechanics.

Examples:

```text
ASCII sketch
-> visual projection model
-> SVG adapter
-> infographic.svg
-> SVG render receipt
```

```text
business strategy deck
-> strategy ontology
-> product roadmap model
-> dashboard UI adapter
-> runnable growth cockpit
-> conformance and release receipts
```

```text
canonical spec
-> article projection model
-> website article adapter
-> CMS-ready HTML/Markdown
-> publish receipt
```

```text
story + canonical spec + target sketch
-> motion projection model
-> storyboard adapter
-> video script + scene list + assets
-> YouTube package receipt
```

The projection registry should answer:

- Which surfaces are requested?
- Which surfaces are allowed for this source authority?
- Which adapter family owns each surface?
- What evidence is required?
- What equivalence rules apply?
- What publish channels are allowed?
- What surfaces are generated, draft-only, review-only, or release-capable?

For social and website publishing, the conveyor should separate content generation from external publication:

```text
article/post/video package generated
-> internal evidence and review
-> publish authority check
-> channel adapter
-> external publish receipt
```

That distinction matters because LinkedIn, YouTube, CMS, email, and website publishing create external-state effects. Those should require stronger authorization than local projection.

To make this powerful, add:

1. `contracts/projection-registry/projection-surface.catalog.v1.json`
2. Render adapter contracts for `ascii`, `svg`, `html-css`, `docx`, `pdf`, `pptx`, `article`, `linkedin-post`, `youtube-package`, and `website-page`.
3. Projection capability bindings for each adapter family.
4. A shared artifact receipt schema with `sourceModelHash`, `adapterKey`, `targetPath`, `artifactHash`, `surfaceKind`, and `publishStatus`.
5. Equivalence gates for layout, semantic bindings, accessibility, brand rules, and target-channel constraints.
6. A sample ASCII-to-SVG-to-HTML projection slice.
7. A sample strategy-to-infographic projection slice.
8. A publish-safe channel adapter pattern where external posting is blocked unless explicit release authority exists.

The end-state is a projection switchboard: one governed meaning model, many selectable outputs.

This is the practical answer to the user's highest-priority concern. The conveyor is useful at scale only if it can keep meaning stable while changing the surface: HTML, SVG, DOCX, PDF, Google Docs, Slides, website pages, infographics, or runnable app shells.

## Refactoring Other Codebases

Yes, this architecture can become a governed refactoring system for other codebases, but it needs additional intake and equivalence lanes.

The existing hook is `source/legacy-code/`: legacy code snapshots can serve as source material until the conveyor re-expresses them as story, spec, and contract.

A scalable refactoring conveyor would add:

1. Legacy intake: import code, dependency graphs, tests, docs, and runtime traces as source artifacts.
2. Body classification: mark each file/function/module as legacy fossil, generated surface, semantic body, adapter, DTO, policy, or evidence.
3. Story extraction: infer current behavior as story candidates, not canonical truth.
4. Canonicalization: promote reviewed behavior into canonical specs.
5. Projection planning: declare target language/framework/runtime surfaces.
6. Equivalence gates: compare old behavior, new generated behavior, tests, traces, schemas, and visual output.
7. Patch projection: generate changes as disposable projections with receipts.
8. Inspector judgment: block when behavior changes without story/spec authority.

The value is not "AI rewrites code". The value is "AI cannot rewrite code without making the intended meaning, boundary, evidence, and release posture visible first."

The compiler framing makes refactoring more precise. An existing codebase is imported as source, parsed into a behavior inventory, lifted into story/spec authority, and then recompiled into cleaner projections. The old code is not automatically trusted as truth. It is treated as evidence of current behavior until reviewed.

A coherent refactoring lane should behave like a decompiler plus compiler:

```text
legacy codebase
-> file/module/function inventory
-> dependency and runtime behavior graph
-> observed behavior candidates
-> story/spec candidates
-> reviewed canonical authority
-> generated target implementation
-> equivalence tests against legacy behavior
-> inspector disposition for intentional differences
-> release packet
```

This enables several powerful refactoring modes:

- Strangler refactor: wrap one legacy capability, express it as story/spec, generate a replacement, prove equivalence, then route traffic to the new surface.
- DTO coherence refactor: discover mismatched transfer shapes, lift them into DTO contracts, regenerate projections, and block local stitching.
- Architecture recovery: turn scattered code behavior into bounded conveyor characters, roles, and forbidden responsibilities.
- Cross-language migration: compile the same canonical authority into Node, Python, C#, or another target once resolver conformance exists.
- Documentation repair: regenerate docs from authority instead of manually rewriting stale explanations.
- Policy hardening: move hidden business rules out of code and into canonical specs, gates, and semantic actions.

The refactoring promise is not automatic perfection. It is controlled decomposition: every extracted behavior either becomes authorized truth, rejected noise, or an explicitly preserved compatibility fossil.

## GitRefactor SDK And LOC Integration

The GitRefactor SDK is the best available local pattern for turning the refactoring promise into an operational conveyor. It should be borrowed as the refactoring adapter layer, not as a replacement for the Narrative Execution Fabric's story/spec/projection governance.

The useful boundary is:

```text
Narrative Execution Fabric
-> owns source intake, story authority, canonical specs, projection governance, receipts, and release posture

GitRefactor SDK
-> owns codebase refactor lanes, target profiles, dependency census, DTO collapse, promotion transactions, rollback, and self-heal routing
```

Live Operational Cognition (LOC) is the intelligence layer that lets this become more than a linear script. In the GitRefactor contracts, LOC is expressed as route intelligence for known friction: detect a blocker, classify it against a taxonomy, select an authorized route, bind the mutation envelope, validate the repair, rollback on failure, and resume the interrupted lane with receipts.

That is exactly the self-healing shape this fabric needs. Self-healing should not mean "an agent guesses at edits." It should mean "the conveyor knows the failure class, knows which repair route is authorized, knows what files may be touched, knows how to validate, and knows how to resume or stop cleanly."

The concrete refactoring flow should look like this:

```text
external repository or SDK target
-> refactor target profile
-> source/code inventory
-> dependency and runtime census
-> code-to-SEJ collapse
-> DTO shape census
-> dependency and symbol authority gates
-> thin facade or generated projection
-> target tests and equivalence checks
-> promotion transaction
-> rollback/resume evidence
-> Narrative Execution Fabric receipt
```

Capabilities worth borrowing from `C:\source\repos\bpm\internal\ai-engine\sdks\git-refactor-sdk`:

1. `route-next` and handoff packet flow as the next-lane selector pattern.
2. `target-profile.v1.json` style maturity ladder for external codebases.
3. Code-to-SEJ collapse lanes for lifting existing implementation bodies into semantic execution authority.
4. DTO census and DTO stitching collapse lanes for transfer-shape coherence.
5. Dependency readiness, package import readiness, and symbol authority lanes for multi-language refactors.
6. Promotion transactions with rollback-aware source/facade relocation.
7. Self-healing policy, route table, blocker taxonomies, router agent, repair agent, and resume validator contracts.
8. Generation Fabric handoff policy that blocks raw platform-agent JSON from becoming mature authority without trusted generation or reviewed bootstrap exception.
9. The disposable `git-refactor-test-target-sdk` as a safe Node/Python/C# proving ground before touching production repositories.

The integration gap is mostly namespace and evidence plumbing. The Narrative Execution Fabric needs a `refactor-target` intake model that can reference external repositories without copying their source into this repo. It also needs an evidence bridge so GitRefactor receipts can be indexed under the fabric's lineage graph.

Recommended adapter contracts:

1. `contracts/refactor-targets/refactor-target-profile.schema.v1.json`
2. `contracts/refactor-targets/external-repository-binding.schema.v1.json`
3. `contracts/refactor-targets/gitrefactor-evidence-bridge.schema.v1.json`
4. `contracts/refactor-targets/refactor-equivalence-gate.schema.v1.json`
5. `contracts/refactor-targets/promotion-transaction-bridge.schema.v1.json`

Recommended first pilot:

```text
git-refactor-test-target-sdk
-> declare external target binding
-> import target profile as source evidence
-> run tests read-only
-> select one dirty Node specimen
-> extract behavior candidates
-> author one story/spec/SOG collapse slice
-> run GitRefactor smoke against the disposable target
-> emit Narrative Execution Fabric evidence bridge receipt
```

This would prove the real thesis: a legacy codebase can enter through operational evidence, be lifted into semantic authority, and come back out as a cleaner implementation without losing the story.

## Scale Outlook

The model can scale if the artifact graph becomes first-class.

The first registry slices for that now exist in `contracts/registry/artifact-graph.index.v1.json` and `contracts/registry/receipt-registry.v1.json`. They do not solve the whole scale problem yet, but they give the conveyor a truthful place to query lineage and receipt maturity instead of forcing readers to reconstruct it by hand.

What scales well:

- Bounded responsibilities per conveyor character.
- Declarative DTOs and projection contracts.
- Fail-closed gates.
- Receipts and hashes as evidence.
- Resolver doorway pattern for generated surfaces.
- Separation between product identity (`defracto.*`) and runtime substrate (`loc.*`).
- Parallelizable lanes and independent conformance checks.

What will strain at scale:

- Manual navigation through hundreds or thousands of JSON artifacts.
- Stale generated reports without supersession metadata.
- Hash sensitivity to OS line endings.
- Placeholder docs that look like authoritative doctrine.
- Missing receipt indexes.
- Partial resolver capability coverage.
- Human review bottlenecks for source promotion.

Scale requirements:

- A generated artifact graph index with edges for source, story, canonical spec, SOG, SEJ, projection, generated surface, receipt, gate, release, and supersession.
- A receipt registry that can answer "what is mature, blocked, missing, stale, or superseded?"
- A normalized hash policy or byte-stable materialization policy.
- A projection freshness gate for docs, visual surfaces, generated code, and reports.
- A supersession ledger for seed artifacts and historical reports.
- A reusable import pipeline for legacy codebases.
- Cross-language resolver conformance for Node, Python, and C# before treating multi-language projections as mature.
- A GitRefactor bridge for external target profiles, self-heal routes, promotion transactions, and rollback/resume receipts.

## Recommended Next Moves

1. Regenerate or supersede the stale `generated/cli/node/ndd.cjs` receipt.
2. Decide whether receipts hash raw bytes or normalized text, then enforce that policy everywhere.
3. Emit blocked placeholder receipts for missing telemetry node projection and missing conformance receipts, or materialize the facades.
4. Add supersession metadata from singular `lane-worker` seed artifacts to plural `lane-workers` authority.
5. Convert high-value placeholder docs into projected docs or mark them as placeholder surfaces in the docs catalog.
6. Broaden the docs drift gate to every file listed in `evidence/docs/generated-docs.receipt.v1.json`.
7. Promote inspector and telemetry from declared SOGs into executable repair-proposal workflows.
8. Add a `source/legacy-code` pilot slice with one tiny imported codebase and an equivalence gate.
9. Add a voice-to-value pilot slice with transcript receipt, unified CLI command contract, and one tiny implemented solution.
10. Add a document-to-product pilot slice using a PPTX strategy deck as source, with extraction receipt, strategy ontology, product candidates, and one generated runnable app.
11. Add a projection-registry pilot with ASCII-to-SVG, SVG-to-HTML, DOCX/PDF, and website article adapters.
12. Add a GitRefactor bridge pilot using `git-refactor-test-target-sdk` as the disposable target and `git-refactor-sdk` as the refactoring lane provider.
13. Model LOC as first-class conveyor intelligence: blocker taxonomy, route decision, mutation envelope, rollback plan, validation receipt, and resume receipt.

## Verification Performed

- Ran `node --test tests/kernels/ascii-render-kernel.generated.test.js`: passed.
- Materialized `generated/inspector/node/evidence-inspector.cjs`, `generated/shipper/node/shipper.cjs`, and `generated/telemetry/node/telemetry-observer.cjs` through the resolver, with node-projection receipts passing.
- Ran the inspector, shipper, and telemetry conformance SEJs through the resolver; each returned `passed`.
- Materialized a temp visual proof in `.tmp/proofs/mini-visual.sej.v1.json`, which projected both `compiler-proof.visual.svg` and `compiler-proof.visual.html` and emitted a passing receipt.
- Ran `node generated/tools/validate-lineage.js`: exited successfully with no output, confirming it is currently a stub doorway.
- Ran `node generated/tools/validate-story-packet.js`: exited successfully with no output, confirming it is currently a stub doorway.
- Ran `node generated/tools/render-narrative-graph.js`: exited successfully with no output, confirming it is currently a stub doorway.
- Audited representative story/spec/SOG/SEJ/projection chains for CLI, runner, workers, inspector, shipper, telemetry, docs, and ASCII kernel.
- Audited required run-manifest receipts and passed receipt hashes for simple projected artifact paths.
- Audited the voice-to-value pipeline, source voice-notes bucket, capture-source lane, CLI handoff command map, and CLI input schemas.
- Inspected the Roll-Rite growth roadmap PPTX as a concrete document-to-product source sample: 47 slides, with text extracted from the PPTX package without modifying the original file.
- Audited visual projection model, visual render adapter, visual determinism policy, UI sketch projection manifest, and documentation surface catalog.
- Audited the local GitRefactor SDK and test target SDK READMEs, package manifests, conveyor map, generation handoff policy, self-healing policy, route table, blocker taxonomies, and target profile.

## Bottom Line

This is a credible narrative execution fabric, not just a naming experiment. The big idea is viable: turn narrative into constrained executable authority and make every projection disposable unless receipts prove it.

The next frontier is operational maturity. The fabric needs a live artifact graph, stricter drift gates, explicit supersession, normalized hash policy, and executable inspector/telemetry loops. With those in place, this could scale from "zero-code generated service" into a governed refactoring and software evolution system where the story remains the source of truth and code is only one projection of it.

## Practical Build Order

If the goal is to close the gap in the shortest useful path, the build order should be:

1. First-class artifact graph and receipt registry.
2. Governed repair-proposal loop with blocked-release posture.
3. Projection registry for ASCII, SVG, HTML, DOCX, PDF, Slides, and publish-safe web surfaces.
4. Voice-to-value intake lane with transcript and capture receipts.
5. Document-to-product pilot for the Roll-Rite deck or a similar strategy deck.
6. GitRefactor bridge for refactoring external codebases into reviewed, receipted projections.
