# Slice 033: Gemini Invocation Required For Cognitive Story Lane

Status: passed

## Goal

Declare that cognitive Story-to-TDD lanes require live Gemini Flash worker execution, with dispatch, response, and invocation receipt evidence.

## Produced Artifacts

- `contracts/gates/gemini-invocation-required-for-cognitive-story-lane.gate.v1.json`
- `contracts/policies/cognitive-compile-requires-ai-worker.policy.v1.json`
- `contracts/policies/deterministic-replay-is-not-cognitive-compile.policy.v1.json`
- `contracts/schemas/gemini-invocation-receipt.schema.v1.json`
- `contracts/schemas/cognitive-lane-classification.schema.v1.json`
- `contracts/cli/ndd-story-plan.command.v1.json`
- `contracts/cli/ndd-story-test.command.v1.json`

## Updated Artifacts

- `contracts/cli/ndd-story-implement.command.v1.json`
- `docs/architecture/story-to-tdd-conveyor-implementation-plan.md`

## Doctrine

```text
Deterministic replay can verify previously declared artifacts.
Cognitive compile must invoke Gemini Flash.

A lane may not create new story, criteria, test intent, ambiguity analysis,
or implementation proposal authority unless the Gemini Flash worker ran and
left dispatch, response, and invocation receipt evidence.

Any deterministic-only path that claims cognitive compile authority is a
failure mode and must block closed.
```

## Cognitive Lane Classification

`ndd story plan`, `ndd story test`, and `ndd story implement` are classified as:

```text
laneMode: cognitive_compile
aiWorkerRequired: true
requiredWorker: defracto.workers.gemini_flash.v1
requiredInvocationCapability: worker.gemini_flash.invoke.v1
fallbackAllowed: false
mockAllowed: false
staleResponseAllowed: false
deterministicReplayAllowedForCreation: false
```

## Blocker Codes

```text
gemini_api_key_missing
gemini_dispatch_missing
gemini_response_missing
gemini_invocation_receipt_missing
gemini_response_stale
gemini_response_unaccepted
deterministic_fallback_attempted
mock_ai_response_forbidden
```

## Slug Chain Reclassification

Slices 027-032 remain accepted as a governed fixture/replay/proof-surface conveyor seed:

```text
027 story authority fixture
028 test intent fixture
029 generated test + red receipt
030 generated implementation + green receipt
031 proof posture lock
032 SOG seed, blocked pending capability coverage
```

They prove conveyor body shape and proof discipline. They do not claim the full arbitrary-story cognitive product path.

## Boundary

This slice does not invoke Gemini Flash. It defines the fail-closed gate and command classification that later cognitive manifests must satisfy.

The next live cognitive slices must prove:

- Gemini dispatch packet written
- Gemini response packet written
- Gemini invocation receipt emitted
- response freshness against source hash and slice key
- response accepted only through governed gates

## Verdict

Slice 033 protects the conveyor mind:

```text
If it says cognitive, Gemini Flash must have actually run.
```
