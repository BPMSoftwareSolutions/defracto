# Story-To-TDD Conveyor Implementation Plan

Status: research-backed implementation proposal

Date: 2026-06-23

Purpose: define the shortest governed path for taking a user story from the `ndd` CLI and producing acceptance criteria, generated unit tests, and an implementation that passes those tests through the existing narrative execution fabric.

## Desired Operator Experience

```text
node generated/cli/node/ndd.cjs story implement --text "As a ..., I want ..., so that ..."
```

or:

```text
node generated/cli/node/ndd.cjs story implement --source source/user-stories/example.md
```

The command should create a run envelope, move the user story through semantic lanes, and stop at the first missing authority, failed test, missing receipt, or resolver capability gap.

The eventual happy path is:

```text
operator story
-> source narrative artifact
-> story packet
-> acceptance criteria
-> canonical spec
-> test intent contract
-> generated unit test projection
-> red test receipt
-> implementation projection
-> green test receipt
-> conformance receipt
-> evidence review
-> release packet
```

## Current Baseline

The repo already has the right spine:

- Generated CLI doorway: `generated/cli/node/ndd.cjs` delegates to `@bpmsoftwaresolutions/sej-resolver-node/doorway`.
- CLI execution authority: `contracts/sej/ndd-cli.execute.sej.v1.json` points to a semantic operation graph, not host-language command logic.
- Concrete conveyor-run graph: `contracts/semantic-operation-graphs/cli/ndd-cli.conveyor-run.execute.sog.v1.json` supports `ndd conveyor run` and `ndd handoff run` patterns, manifest loading, resolver authority verification, materialization, conformance, smoke testing, receipt verification, and run receipt emission.
- Gemini Flash worker profile and handoff contracts exist under `conveyor/workers/` and `conveyor/handoff/`.
- Story and canonical spec schemas already exist under `contracts/schemas/`.
- Generated tests are already proven in one place: `tests/kernels/ascii-render-kernel.generated.test.js` passes with `node --test`.
- The ASCII kernel materialization SEJ already demonstrates a useful pattern: one SEJ can materialize both generated runtime and generated conformance test artifacts while emitting receipts.

The main gaps:

- `package.json` still has a placeholder `npm test` script.
- The CLI command schema does not yet include `story implement`, `story plan`, `story test`, or equivalent story-driven TDD commands.
- The runner can execute declared stage manifests, but there is no stage manifest for story-to-TDD.
- The live Gemini path is visible as dispatch/response artifacts, but this repo does not yet define a first-class semantic operation such as `worker.gemini_flash.invoke.v1` for story-to-TDD lanes.
- Acceptance criteria are present as a field in story packets, but there is no stricter acceptance-criteria schema, test-intent schema, or acceptance-to-test trace schema.
- There is no explicit red/green receipt family yet.

## Architectural Decision

Do not make Gemini Flash, the generated CLI, or generated code own product truth.

Gemini may propose candidate artifacts. The resolver and conveyor gates decide whether those artifacts can become accepted source, story, canonical spec, test projection, implementation projection, or evidence.

The new story-to-TDD conveyor should be a governed compiler front end:

```text
LLM-assisted authoring
-> JSON authority
-> resolver-executed semantic graph
-> generated disposable surfaces
-> tests and receipts
```

## Proposed New Command Surface

Add these command patterns to the CLI authority:

```text
ndd story plan --text <operatorText> --slice <sliceKey>
ndd story plan --source <sourcePath> --slice <sliceKey>
ndd story implement --text <operatorText> --slice <sliceKey>
ndd story implement --source <sourcePath> --slice <sliceKey>
ndd story status --slice <sliceKey>
```

`story plan` should stop after source, story packet, acceptance criteria, canonical spec, semantic graph, projection manifests, and run plan artifacts exist.

`story implement` should continue into generated tests, red test execution, implementation materialization, green test execution, conformance, and evidence review.

## Required New Artifact Families

Add contract schemas:

```text
contracts/schemas/user-story-intake.schema.v1.json
contracts/schemas/acceptance-criteria.schema.v1.json
contracts/schemas/test-intent.schema.v1.json
contracts/schemas/test-projection-manifest.schema.v1.json
contracts/schemas/test-execution-receipt.schema.v1.json
contracts/schemas/implementation-plan.schema.v1.json
contracts/schemas/implementation-projection-manifest.schema.v1.json
contracts/schemas/red-green-cycle-receipt.schema.v1.json
```

Add policies/gates:

```text
contracts/policies/story-to-test-traceability.policy.v1.json
contracts/policies/red-before-green.policy.v1.json
contracts/policies/generated-implementation-boundary.policy.v1.json
conveyor/gates/acceptance-criteria-trace-required.gate.v1.json
conveyor/gates/red-test-required.gate.v1.json
conveyor/gates/green-test-required.gate.v1.json
```

Add command and semantic authority:

```text
contracts/cli/ndd-story-implement.command.v1.json
contracts/sej/ndd-story-implement.execute.sej.v1.json
contracts/semantic-operation-graphs/cli/ndd-story-implement.execute.sog.v1.json
contracts/semantic-operation-graphs/tdd/story-to-tdd.execute.sog.v1.json
```

Add source/story/spec locations:

```text
source/user-stories/
stories/user-stories/
specs/canonical/user-stories/
contracts/test-intents/
tests/generated/user-stories/
generated/implementations/user-stories/
evidence/tdd/
```

## Proposed Conveyor Lanes

1. `00-intake-story`

Capture `--text` or `--source`, normalize it into `source/user-stories/<sliceKey>.source.v1.md`, hash it, and emit a command invocation receipt.

2. `01-extract-story-packet`

Use Gemini Flash as a bounded candidate author for the story packet. Required output: actor, user story, acceptance criteria candidates, assumptions, ambiguities, forbidden claims, and trace links to source text.

3. `02-acceptance-criteria-hardening`

Normalize criteria into a stricter schema with stable `criteriaKey`, observable behavior, preconditions, inputs, expected outputs, negative cases, and source trace. Block if criteria are vague or untestable.

4. `03-canonical-spec`

Promote accepted criteria into canonical nodes and rules. Every node must trace back to a story path and source path.

5. `04-test-intent`

Create test intent JSON. This is not a JS test yet. It names each test case, covered criteria, fixture inputs, expected outputs, negative cases, and test runner target.

6. `05-test-projection`

Materialize generated unit tests from test intent. For this repo, start with `node:test` because the existing generated kernel test already uses it.

7. `06-red-test`

Run the generated test before implementation materialization. Expected result: fail for the right reason. Emit `test-execution-receipt` with command, exit code, stdout/stderr hash, failed test names, and covered criteria.

8. `07-implementation-plan`

Create an implementation projection plan from canonical spec plus red-test evidence. This plan must name target files, allowed mutation scope, forbidden mutation scope, and criteria coverage.

9. `08-implementation-materialization`

Materialize implementation through resolver-controlled projection or a bounded worker lane. The lane must not edit outside the declared target paths.

10. `09-green-test`

Run the same generated tests. Expected result: pass. Emit green test receipt.

11. `10-conformance`

Verify story-to-canonical-to-test-to-implementation traceability. Verify generated surfaces and receipts. Block on missing criteria coverage, stale hashes, or unreceipted mutations.

12. `11-evidence-review`

Produce a human-readable run summary, claim-to-evidence graph update, and release posture.

## Repo-Local Semantic Capability Needs

The resolver boundary should stay intact. This plan does not require changing the resolver repository or turning the resolver into a Gemini SDK, test runner, patch engine, or vendor integration layer.

The work belongs in this repo: define the semantic operation names, contracts, worker profiles, dispatch packets, response shapes, receipts, gates, and run manifests that the existing resolver can resolve as data-driven semantic language.

Current resolver support is enough for:

- semantic operation graph execution
- artifact materialization
- hash computation
- CLI argv matching
- run manifest loading
- SEJ stage resolution
- generated facade smoke execution
- receipt verification
- run receipt emission

The story-to-TDD flow needs these additional repo-local semantic capabilities or bounded worker-lane equivalents:

- `worker.gemini_flash.invoke.v1` as a loud, explicit semantic operation for invoking the Gemini Flash worker through declared dispatch/response/evidence contracts
- `json.schema.validate.v1`
- `test.node.run.v1`
- `test.result.normalize.v1`
- `test.red_green.evaluate.v1`
- `patch.apply_bounded.v1` or a generated implementation materializer that can only write declared targets
- `trace.criteria_to_test.verify.v1`
- `trace.criteria_to_implementation.verify.v1`

Bootstrap recommendation: add these as repo-local semantic authority first. Do not cross the resolver repo boundary unless a later review proves the current resolver cannot resolve the declared language shape.

- Resolver-mediated stages for materialization, hashing, smoke execution, receipts, and trace checks.
- Explicit Gemini Flash worker dispatch lanes for authoring candidate story/spec/test/implementation artifacts through `worker.gemini_flash.invoke.v1`.
- Clear receipts proving the Gemini Flash worker was invoked, what it received, what it returned, and whether the response was accepted, blocked, or only captured as candidate evidence.

## Implementation Slices

### Slice A: Command Authority Reconciliation

Goal: make the CLI command surface coherent before adding new behavior.

Changes:

- Add `story plan` and `story implement` to `contracts/schemas/ndd-cli.command-input.schema.v1.json`.
- Add `contracts/cli/ndd-story-implement.command.v1.json`.
- Extend the concrete CLI SOG with story command patterns or create a dedicated story CLI SOG and route to it from `ndd-cli.execute.sej.v1.json`.
- Add command invocation receipt expectations.

Completion: unsupported story commands block closed, supported story commands load a declared run manifest.

### Slice B: Story Intake And Acceptance Criteria Contracts

Goal: define the source-to-criteria authority before test generation.

Changes:

- Add schemas for user story intake and acceptance criteria.
- Add a sample story fixture.
- Add a sample story packet and canonical spec under `stories/user-stories/` and `specs/canonical/user-stories/`.
- Add acceptance criteria trace gate.

Completion: every acceptance criterion has source trace and testability metadata.

### Slice C: Test Intent And Generated Test Projection

Goal: generate tests from canonical criteria without implementation.

Changes:

- Add test intent schema and projection manifest.
- Add a materialization SEJ that creates a `node:test` file under `tests/generated/user-stories/`.
- Add generated test materialization receipt.
- Add `test.node.run.v1` as a repo-local semantic capability, or run the first test execution through a declared command receipt until the semantic operation is fully governed.

Completion: generated tests exist, are hash-receipted, and fail before implementation for the expected reason.

### Slice D: Red/Green Evidence Contract

Goal: make red before green mandatory and auditable.

Changes:

- Add red/green cycle receipt schema.
- Add red-test-required and green-test-required gates.
- Add a run summary format that records the red failure and green pass for the same test artifact hash.

Completion: green cannot be accepted unless matching red evidence exists first.

### Slice E: Bounded Implementation Materialization

Goal: implement only what the canonical spec and tests authorize.

Changes:

- Add implementation plan schema.
- Add implementation projection manifest.
- Add bounded target path policy.
- Use Gemini worker lane to propose implementation changes, but only materialize through declared target paths and receipts.

Completion: implementation files are produced or patched only within declared scope and tied to criteria/test evidence.

### Slice F: Full Story-To-TDD Run Manifest

Goal: make `ndd story implement` run the full manifest.

Changes:

- Add `conveyor/runs/<date>/<sliceKey>/run.manifest.v1.json` using the newer stage shape.
- Stages: story intake, criteria hardening, test projection, red test, implementation materialization, green test, conformance, evidence review.
- Add required receipts and required hashes for every generated surface.

Completion: `node generated/cli/node/ndd.cjs story implement --source ... --slice ...` runs until passed or honestly blocked.

### Slice G: Fidelity And Visual Proof Integration

Goal: make the new flow visible in the existing trust surfaces.

Changes:

- Extend the claim-to-evidence graph to include story-to-test-to-code edges.
- Compute fidelity level for the run.
- Publish a review surface showing source, criteria, tests, red receipt, implementation, green receipt, and blocked claims.

Completion: a reviewer can see exactly why the implementation is accepted.

## First Thin Vertical Slice

Use a tiny deterministic target instead of arbitrary application code.

Example story:

```text
As a Defracto operator, I want a slug key generated from a short story title, so that run artifact paths stay predictable.
```

Acceptance criteria:

- lowercases ASCII letters
- replaces whitespace with hyphens
- removes unsupported punctuation
- collapses repeated hyphens
- returns `blocked` for empty input

Generated test target:

```text
tests/generated/user-stories/story-slug.generated.test.js
```

Generated implementation target:

```text
generated/implementations/user-stories/story-slug.cjs
```

Why this target works:

- It is small.
- It is deterministic.
- It does not require product file mutation.
- It can prove red/green receipts without risking existing generated surfaces.

## Acceptance Bar For The First Release

The first release is successful when:

- The CLI accepts a story via `--text` or `--source`.
- The source story is captured and hashed.
- Acceptance criteria are emitted with trace links.
- Canonical spec nodes map to criteria.
- Generated tests map to criteria.
- Red test receipt proves the implementation was not already passing.
- Implementation materialization is bounded to declared target paths.
- Green test receipt proves the same tests pass.
- Conformance receipt verifies criteria-to-test-to-implementation coverage.
- Missing Gemini credentials, missing resolver capabilities, untestable criteria, failed tests, and unreceipted mutations all block closed.

## Open Risks

- The Gemini Flash invocation boundary is not explicit enough yet. Define `worker.gemini_flash.invoke.v1` in this repo so the worker invocation is loud, traceable, and receipted without implying resolver repo changes.
- Generated implementation could become a hidden source of truth if target boundaries are not enforced. Require target path manifests and patch receipts.
- Acceptance criteria may be too vague for tests. Block on vague criteria instead of generating weak tests.
- Existing command authority is split between command map, command schema, and two CLI SOGs. Reconcile this first.
- Repo-level `npm test` currently fails by design. Add a governed test script only after generated test projection has a receipt-backed path.

## Recommended Next Action

Implement Slice A and Slice B together as a non-codegen planning slice:

```text
CLI command contract
-> intake schema
-> acceptance criteria schema
-> sample story fixture
-> sample story packet
-> sample canonical spec
-> acceptance trace gate
-> run report
```

Then use the slug story as the first red/green vertical slice.
