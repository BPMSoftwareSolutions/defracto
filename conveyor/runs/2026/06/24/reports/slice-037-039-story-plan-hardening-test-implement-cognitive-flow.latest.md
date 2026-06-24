# Slice 037-039: Story Plan Hardening, Test, And Implement Cognitive Flow

Status: passed with authority promotion blocked

## Goal

Take the live Gemini story-plan candidate from Slice 036, harden/promote only governed authority, then wire `ndd story test` and `ndd story implement` so they require cognitive evidence and cannot fall back to deterministic replay.

## Slice 037: Candidate Hardening

Produced:

- `contracts/gates/story-plan-candidate-hardening-required.gate.v1.json`
- `contracts/policies/gemini-candidate-is-not-authority.policy.v1.json`
- `contracts/schemas/story-plan-candidate-hardening-receipt.schema.v1.json`
- `evidence/workers/story-to-tdd.gemini-candidate-hardening.receipt.v1.json`
- `evidence/cli/ndd-story-plan.authority-promotion.receipt.v1.json`

Hardening result:

```text
status: blocked
candidateStoryAuthorityCreated: false
candidateCriteriaAuthorityCreated: false
candidateTestIntentAuthorityCreated: false
candidateImplementationAuthorityCreated: false
```

Blocked reasons:

```text
candidate_ambiguity_unresolved
candidate_expected_result_shape_mismatch
candidate_test_intent_expands_criteria_without_authority
```

The live Gemini candidate is preserved as evidence but not promoted. Two candidate choices require hardening before authority:

- unsupported punctuation / character set assumptions
- blocked return shape as string literal instead of accepted object shape

## Slice 038: Story Test Cognitive Manifest

Produced:

- `contracts/gates/story-test-gemini-receipt-required.gate.v1.json`
- `contracts/sej/ndd-story-test.execute.sej.v1.json`
- `contracts/semantic-operation-graphs/cli/ndd-story-test.execute.sog.v1.json`
- `conveyor/runs/2026/06/24/slice-037-039-story-plan-hardening-test-implement-cognitive-flow/story-test.manifest.v1.json`

Posture:

```text
ndd story test: cognitive_compile
Gemini evidence required: true
promoted story authority required: true
deterministic replay can create test intent authority: false
current status: blocked
```

## Slice 039: Story Implement Cognitive Manifest

Produced:

- `contracts/gates/story-implement-gemini-receipt-required.gate.v1.json`
- `contracts/sej/ndd-story-implement.execute.sej.v1.json`
- `contracts/semantic-operation-graphs/cli/ndd-story-implement.execute.sog.v1.json`
- `conveyor/runs/2026/06/24/slice-037-039-story-plan-hardening-test-implement-cognitive-flow/story-implement.manifest.v1.json`

Posture:

```text
ndd story implement: cognitive_compile
implementation proposal requires Gemini participation: true
red receipt required before implementation: true
green receipt requires prior red: true
generated implementation remains proof_surface_only: true
SOG promotion remains required: true
current status: blocked
```

## Authority Separation

This batch keeps the authority stages distinct:

```text
Gemini candidate
!= promoted story authority
!= test intent authority
!= generated test projection
!= generated implementation proof surface
!= durable SOG product truth
```

## Verdict

The batch is complete in the honest state:

```text
live Gemini candidate: captured
candidate hardening: blocked
story authority promotion: blocked
story test cognitive path: declared and blocked pending promoted authority
story implement cognitive path: declared and blocked pending promoted authority
fallback/mock/stale/deterministic creation: forbidden
```

The next live red/green slices should not run until either the candidate is hardened or a new live Gemini candidate resolves the blocked ambiguity.
