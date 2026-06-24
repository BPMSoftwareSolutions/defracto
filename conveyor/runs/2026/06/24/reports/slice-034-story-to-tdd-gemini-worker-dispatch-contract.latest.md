# Slice 034: Story-to-TDD Gemini Worker Dispatch Contract

Status: passed with live invocation blocked

## Goal

Declare the live Gemini Flash worker invocation path for cognitive Story-to-TDD lanes before `ndd story plan`, `ndd story test`, or `ndd story implement` manifests depend on it.

## Produced Artifacts

- `conveyor/workers/gemini-flash.story-to-tdd.worker-profile.v1.json`
- `conveyor/workers/gemini-flash.story-to-tdd.dispatch-contract.v1.json`
- `conveyor/workers/gemini-flash.story-to-tdd.response-contract.v1.json`
- `contracts/sej/story-to-tdd-gemini-invoke.sej.v1.json`
- `contracts/semantic-operation-graphs/workers/story-to-tdd-gemini-invoke.sog.v1.json`
- `evidence/workers/story-to-tdd.gemini-dispatch.receipt.v1.json`
- `evidence/workers/story-to-tdd.gemini-response.receipt.v1.json`
- `evidence/workers/story-to-tdd.gemini-invocation.receipt.v1.json`

## Worker Lane

```text
worker profile:
  defracto.workers.gemini_flash.story_to_tdd.v1

base worker:
  defracto.workers.gemini_flash.v1

invocation capability:
  worker.gemini_flash.invoke.v1

required credential:
  LOC_GEMINI_API_KEY
```

## Cognitive Contract

```text
laneMode: cognitive_compile
aiWorkerRequired: true
fallbackAllowed: false
mockAllowed: false
staleResponseAllowed: false
deterministicReplayAllowedForCreation: false
```

## Candidate-Only Output

Gemini output may include:

- candidate story packet
- candidate acceptance criteria
- candidate test intent
- candidate implementation proposal
- ambiguities
- assumptions

But it remains candidate-only until accepted by gates.

## Evidence Expectations

Declared downstream evidence:

```text
evidence/workers/story-to-tdd.gemini-dispatch.receipt.v1.json
evidence/workers/story-to-tdd.gemini-response.receipt.v1.json
evidence/workers/story-to-tdd.gemini-invocation.receipt.v1.json
```

The invocation receipt is intentionally blocked in this slice because no live provider run occurred:

```text
status: blocked
blockedReasons:
  gemini_response_missing
  gemini_invocation_receipt_missing
```

## Blockers

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

## Guardrail

The CLI must not own worker behavior. Future story command manifests should call this declared worker lane:

```text
ndd story plan
-> run manifest
-> story-to-TDD Gemini worker lane
-> candidate artifacts
-> acceptance gates
-> receipts
```

## Verdict

Slice 034 defines the cognitive worker lane. It does not fake Gemini participation.

```text
Replay proves shape.
Gemini provides cognition.
Gates grant authority.
Receipts prove participation.
SOG grants durable product truth.
```
