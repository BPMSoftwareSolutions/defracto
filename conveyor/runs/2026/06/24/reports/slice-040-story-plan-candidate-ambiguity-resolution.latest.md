# Slice 040: Story Plan Candidate Ambiguity Resolution

Status: passed

## Goal

Resolve the three blocked hardening reasons from the live Gemini candidate and produce promoted story/criteria authority only where the decisions are explicit.

## Produced Artifacts

- `contracts/policies/story-plan-ambiguity-resolution.policy.v1.json`
- `evidence/workers/story-to-tdd.gemini-candidate-ambiguity-resolution.receipt.v1.json`
- `evidence/cli/ndd-story-plan.authority-promotion.receipt.v2.json`
- `evidence/cli/ndd-story-test.readiness.receipt.v1.json`
- `evidence/cli/ndd-story-implement.readiness.receipt.v1.json`

## Resolved Decisions

### Unsupported Punctuation

Decision:

```text
Keep accepted criterion: unsupported punctuation is removed for covered story examples.
Do not promote Gemini's broader digit/non-ASCII exclusion claim.
```

Effect:

```text
candidate assumption rejected for promotion
future expansion requires acceptance criteria hardening
```

### Blocked Return Shape

Decision:

```json
{
  "status": "blocked",
  "blocker": "empty_slug_input"
}
```

Effect:

```text
object shape accepted
Gemini string literal rejected
```

### Extra Test Proposals

Decision:

```text
Gemini may propose extra tests, but extra criteria cannot become authority
unless explicitly promoted through acceptance criteria hardening.
```

Effect:

```text
extra tests quarantined as proposals
no extra Gemini tests promoted in this slice
```

## Authority Promotion

Promoted:

```text
story: true
criteria: true
canonical spec: true
```

Not promoted:

```text
test intent: false
implementation proposal: false
extra Gemini tests: false
Gemini-only claims: false
durable product truth: false
```

## Readiness Transitions

`ndd story test` moves from blocked by missing story authority to:

```text
ready-for-test-intent-cognitive-lane
```

`ndd story implement` remains:

```text
blocked-until-test-intent-and-red-evidence
```

## Verdict

Slice 040 resolves the cognitive findings without laundering Gemini output into authority:

```text
Gemini can propose.
Only governed hardening can promote.
```

The next slice can run the `ndd story test` cognitive lane for real.
