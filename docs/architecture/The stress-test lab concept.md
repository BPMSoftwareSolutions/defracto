# Story-To-TDD Conveyor Stress Lab

Status: architecture concept

Date: 2026-06-24

Purpose: define a controlled stress-test lab for proving that the Story-to-TDD conveyor can process many user-story shapes, produce the right governed posture, and report fidelity across happy paths, blocked paths, fallback paths, and mismatch paths.

## Why This Lab Exists

The slug story proved the full arc:

```text
story
-> cognitive interpretation
-> candidate authority
-> hardening
-> test intent
-> generated test
-> red receipt
-> generated implementation proof surface
-> green receipt
-> SOG execution
-> parity
-> durable semantic promotion
```

The next question is broader:

```text
Can the conveyor do this repeatedly across different story types,
and can it block honestly when the right answer is not green?
```

The stress lab is the proof environment for that question. It is not just "try another story." It is a repeatable scenario catalog, runner, scorecard, and dashboard that measures whether the conveyor preserved authority, evidence, and posture.

## Core Flow

The lab should run scenarios through the same authority ladder:

```text
scenario catalog
-> story batch runner
-> cognitive compile
-> authority hardening
-> red/green proof
-> SOG promotion or honest block
-> fidelity scoring
-> dashboard/report
```

Every scenario should answer:

```text
Did cognition happen?
Did authority harden correctly?
Did tests generate correctly?
Did red happen before green?
Did SOG promotion happen when required?
Did unsupported or ambiguous stories block honestly?
Did the output match the expected target outcome?
```

## Proposed Folder Shape

```text
stress-lab/
  story-cases/
    001-slug-generator/
    002-receipt-staleness-detector/
    003-resume-tailor/
    004-job-description-parser/
    005-cli-command-map-validator/
    006-release-packet-validator/
    007-evidence-graph-renderer/
    008-value-calculator/
    009-file-system-shape-reviewer/
    010-provider-fallback-demo/
  expected-outcomes/
  run-manifests/
  reports/
  dashboard/
```

Each scenario should include:

```text
user story
inputs
fixtures
expected behavior
expected artifacts
expected blocked or green posture
fidelity criteria
```

Possible command surfaces:

```text
ndd stress run --suite story-to-tdd-lab.v1.json
ndd story batch --suite stress-lab/story-cases/
```

The output should be a batch report with per-scenario receipts and a dashboard summary.

## What The Lab Builds

The lab should not be limited to scripts or code utilities. Its job is to prove that user stories can compile into governed work products.

Target work-product classes:

```text
1. Pure behavior utilities
2. CLI commands
3. Data validators
4. Report generators
5. Document generators
6. Evidence inspectors
7. UI and projection surfaces
8. Conveyor lanes
9. Policy and gate systems
10. SOG-backed product behavior
```

Possible outputs:

```text
generated tests
generated proof implementation
semantic operation graph
CLI command contract
run manifest
Markdown report
JSON receipt
resume document
Mermaid graph
HTML projection
calculator model
validation gate
```

The common rule:

```text
Whatever gets built must have authority, tests or checks, receipts, and promotion posture.
```

## Example 20-Story Stress Suite

### Tier 1: Deterministic Behavior Stories

These are small, clean, and easy to verify.

| Case | Story | Target Outcome |
| --- | --- | --- |
| 001 | Generate slug from title | Utility behavior + SOG |
| 002 | Normalize email address | Utility behavior + validation |
| 003 | Parse comma-separated tags | Utility behavior + tests |
| 004 | Format run key from date/slice | Naming utility + SOG |
| 005 | Validate receipt hash shape | Validator + receipt gate |

Example story:

```text
As a Defracto operator,
I want receipt hashes validated against the sha256:<hex> shape,
so that malformed evidence cannot enter a release packet.
```

Expected output:

```text
schema
test intent
generated test
red/green proof
SOG
receipt-hash validator gate
```

### Tier 2: Evidence And Conveyor Operations

These prove the conveyor can build governance capabilities for itself.

| Case | Story | Target Outcome |
| --- | --- | --- |
| 006 | Detect stale evidence receipt | Evidence inspector conveyor |
| 007 | Verify red-before-green cycle | TDD gate |
| 008 | Build claim-to-evidence graph | Mermaid/JSON graph projection |
| 009 | Validate release packet readiness | Release gate |
| 010 | Verify provider fallback receipt | Multi-provider governance gate |

Example story:

```text
As a release reviewer,
I want the conveyor to detect when a green receipt does not reference the same test hash as the red receipt,
so that false red/green proof cannot ship.
```

Expected output:

```text
red-green validator
negative tests
gate contract
SOG
evidence receipt
```

This tier is important because it proves the conveyor can improve and protect its own governance rules.

### Tier 3: Document And Report Generation

These prove the conveyor is not limited to code.

| Case | Story | Target Outcome |
| --- | --- | --- |
| 011 | Generate tailored resume | Markdown/DOCX resume + claim trace |
| 012 | Generate cover letter draft | Document projection + source trace |
| 013 | Generate QBR report | Business report + evidence packet |
| 014 | Generate implementation summary | Release summary |
| 015 | Generate architecture decision record | ADR + trace receipts |

Example story:

```text
As a job seeker,
I want a tailored resume generated from a job description and verified experience log,
so that every bullet is relevant and traceable to real experience.
```

Expected output:

```text
job requirement extraction
experience match map
resume draft
unsupported-claims-blocked receipt
final resume projection
claim-to-source trace
```

### Tier 4: UI And Projection Stories

These prove visual and dashboard-style surfaces.

| Case | Story | Target Outcome |
| --- | --- | --- |
| 016 | Render evidence graph as Mermaid | Diagram projection |
| 017 | Render run summary as HTML dashboard | UI/report surface |
| 018 | Render CLI command map | ASCII/Mermaid/Markdown |
| 019 | Render scenario comparison table | Calculator/report surface |
| 020 | Render trust cockpit summary | UI-ready projection model |

Example story:

```text
As a conveyor reviewer,
I want the claim-to-evidence graph rendered as Mermaid,
so that I can visually inspect how story, tests, implementation, receipts, and SOG promotion connect.
```

Expected output:

```text
graph model JSON
Mermaid projection
ASCII sketch
render receipt
visual proof surface
```

## Fidelity Definition

High fidelity does not mean "the generated output looks good."

High fidelity means:

```text
The final output preserves the original user story intent
through every authority layer
without adding unsupported claims
or losing required behavior.
```

## Fidelity Dimensions

1. Intent fidelity
   Did the output satisfy the original story?

2. Criteria fidelity
   Did every accepted criterion map to tests or checks?

3. Test fidelity
   Did generated tests cover the criteria without adding unauthorized behavior?

4. Implementation fidelity
   Did implementation satisfy tests without hidden logic?

5. Evidence fidelity
   Are receipts complete, fresh, hash-bound, and provider-attributed?

6. SOG fidelity
   Did durable behavior move into a semantic operation graph, not host code?

7. Boundary fidelity
   Did the conveyor block when ambiguity, provider failure, or authority gaps appeared?

8. Projection fidelity
   Did docs, UI, and reports match the same canonical source truth?

Example scorecard:

```json
{
  "scenarioKey": "receipt-hash-validator",
  "status": "passed",
  "fidelityScore": 0.94,
  "checks": {
    "liveCognitionReceipted": true,
    "criteriaCoverage": 1.0,
    "redBeforeGreen": true,
    "sogPromoted": true,
    "unsupportedClaimsBlocked": true,
    "providerFallbackUsed": false,
    "secretLeaks": 0
  }
}
```

## Outcome Classes

The lab should expect four kinds of valid outcomes.

### 1. Passed Outcomes

The conveyor produces the expected artifact and promotes SOG truth.

```text
story -> green -> SOG promoted
```

Examples:

```text
slug generator
receipt hash validator
run key formatter
```

### 2. Honest Blocked Outcomes

The conveyor refuses to proceed for the right reason.

```text
story -> provider candidate -> ambiguity -> blocked
```

Examples:

```text
"Make the resume sound impressive"
```

This should block if claims cannot trace to verified experience.

```text
"Generate a payment processor integration"
```

This should block if API, security, or compliance authority is missing.

Blocked outcomes are valuable because they prove governance.

### 3. Fallback Outcomes

The primary provider fails, a declared fallback provider runs, and the fallback output remains candidate-only until gates accept it.

```text
Gemini 503 -> OpenAI fallback -> candidate -> gates
```

This proves reliability without creating a silent escape hatch.

### 4. Mismatch Outcomes

The conveyor produces something, but parity fails.

```text
green test passed
but SOG parity failed
```

This proves the lab can detect drift after proof-surface success.

## Stress Case Manifest Shape

Each stress case should have a manifest like:

```json
{
  "schemaVersion": "defracto.story-stress-case.v1",
  "caseKey": "case-006-red-green-hash-validator",
  "title": "Red/green test hash validator",
  "mode": "cognitive_compile",
  "story": {
    "asA": "release reviewer",
    "iWant": "the conveyor to verify that green receipts reference the same generated test hash as the red receipt",
    "soThat": "false red/green proof cannot ship"
  },
  "inputs": {
    "sourceStoryPath": "stress-lab/story-cases/006/source.story.md",
    "fixtures": [
      "stress-lab/story-cases/006/fixtures/red.receipt.valid.json",
      "stress-lab/story-cases/006/fixtures/green.receipt.mismatch.json"
    ]
  },
  "expectedOutcome": {
    "finalStatus": "passed",
    "durableTruthOwner": "semantic_operation_graph",
    "requiredArtifacts": [
      "contracts/gates/red-green-same-test-hash-required.gate.v1.json",
      "tests/generated/red-green-hash-validator.generated.test.js",
      "evidence/sog/red-green-hash-validator.sog-promotion.receipt.v1.json"
    ],
    "requiredReceipts": [
      "gemini_invocation",
      "test_intent_promotion",
      "red_test",
      "green_test",
      "sog_parity",
      "sog_promotion"
    ]
  },
  "fidelityChecks": {
    "mustUseLiveProvider": true,
    "mustBlockUnsupportedClaims": true,
    "mustRequireRedBeforeGreen": true,
    "mustPromoteSog": true,
    "mustNotPromoteGeneratedCode": true
  }
}
```

## Demo Suite

For a demo, show five cases instead of twenty:

```text
1. Slug generator
   Shows the full happy path.

2. Resume tailor
   Shows document generation and claim trace.

3. Red/green receipt validator
   Shows the conveyor building conveyor governance.

4. Provider fallback story
   Shows Gemini failure -> OpenAI fallback.

5. Ambiguous story
   Shows honest block.
```

Demo command:

```text
ndd stress run --suite stress-lab/demo-suite.v1.json
```

Expected output shape:

```text
stress-lab/runs/2026-06-24/demo-suite/
  dashboard.md
  summary.json
  scenario-results/
    001-slug-generator/
    002-resume-tailor/
    003-red-green-validator/
    004-provider-fallback/
    005-ambiguous-story/
```

Dashboard example:

```text
Scenario                Status      Fidelity   Truth Owner
Slug Generator          Passed      0.98       SOG
Resume Tailor           Passed      0.91       Projection + Receipts
Red/Green Validator     Passed      0.95       SOG
Provider Fallback       Passed      0.93       SOG
Ambiguous Story         Blocked     1.00       None, correctly blocked
```

## Guardrails

The lab must preserve the same doctrine as the slug conveyor:

```text
Gemini or another cognitive provider can propose.
Gates grant authority.
Generated code is proof surface unless SOG promotion supersedes it.
Receipts prove participation and freshness.
SOG grants durable product truth.
Blocked outcomes are first-class proof.
```

The lab must not allow:

```text
deterministic replay pretending to be cognitive compile
silent provider substitution
green without prior red
generated code becoming durable truth
SOG promotion without capability coverage
SOG promotion without execution
SOG promotion without parity
unsupported document claims
unreceipted artifacts
secret leakage into evidence
```

## Recommended Build Sequence

### Slice 053: Stress Lab Schema And Catalog Seed

Add:

```text
contracts/schemas/story-stress-case.schema.v1.json
contracts/schemas/story-stress-suite.schema.v1.json
stress-lab/story-cases/001-slug-generator/case.manifest.v1.json
stress-lab/demo-suite.v1.json
```

Completion:

```text
stress case manifests validate
demo suite references valid cases
expected outcomes include pass/block/fallback/parity posture
```

### Slice 054: Stress Lab Runner Manifest

Add:

```text
contracts/sej/ndd-stress-run.execute.sej.v1.json
contracts/semantic-operation-graphs/cli/ndd-stress-run.execute.sog.v1.json
contracts/cli/ndd-stress-run.command.v1.json
```

Completion:

```text
ndd stress run resolves a declared suite
runner emits a suite-level receipt
unsupported scenario mode blocks
```

### Slice 055: Demo Dashboard Projection

Add:

```text
contracts/projections/stress-lab-dashboard.markdown-projection.v1.json
contracts/sej/materialize-stress-lab-dashboard.sej.v1.json
stress-lab/runs/<date>/<suite>/dashboard.md
stress-lab/runs/<date>/<suite>/summary.json
```

Completion:

```text
dashboard summarizes scenario status, fidelity, truth owner, blockers, and receipts
dashboard is projected from suite receipts, not hand-authored
```

## Platform Claim

The stress lab proves this platform claim:

```text
Give the system a story.
It reasons over the story.
It creates candidate authority.
It hardens the authority.
It proves behavior.
It promotes semantic truth.
Or it blocks with evidence.
```

This is where the conveyor becomes visibly more than a slug generator. It becomes a general-purpose governed work compiler.
