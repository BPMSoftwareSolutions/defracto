# Slice 034-035: Story Plan Gemini Lane And Cognitive Manifest

Status: passed with live invocation blocked

## Goal

Declare the Story-to-TDD Gemini worker lane and make `ndd story plan` depend on it as a cognitive compile command.

This slice proves:

```text
ndd story plan
-> declared run manifest
-> required Gemini worker lane
-> dispatch/response/invocation receipt obligations
-> blocks until live Gemini evidence exists
```

## Produced In Slice 034

- `conveyor/workers/gemini-flash.story-to-tdd.worker-profile.v1.json`
- `conveyor/workers/gemini-flash.story-to-tdd.dispatch-contract.v1.json`
- `conveyor/workers/gemini-flash.story-to-tdd.response-contract.v1.json`
- `contracts/sej/story-to-tdd-gemini-invoke.sej.v1.json`
- `contracts/semantic-operation-graphs/workers/story-to-tdd-gemini-invoke.sog.v1.json`
- `evidence/workers/story-to-tdd.gemini-dispatch.receipt.v1.json`
- `evidence/workers/story-to-tdd.gemini-response.receipt.v1.json`
- `evidence/workers/story-to-tdd.gemini-invocation.receipt.v1.json`

## Produced In Slice 035

- `contracts/gates/story-plan-gemini-receipt-required.gate.v1.json`
- `contracts/sej/ndd-story-plan.execute.sej.v1.json`
- `contracts/semantic-operation-graphs/cli/ndd-story-plan.execute.sog.v1.json`
- `conveyor/runs/2026/06/24/slice-034-035-story-plan-gemini-lane-and-cognitive-manifest/run.manifest.v1.json`

## Cognitive Classification

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

## Manifest Dependency

The run manifest requires:

```text
Gemini worker lane:
  contracts/sej/story-to-tdd-gemini-invoke.sej.v1.json

Gemini receipt gate:
  contracts/gates/story-plan-gemini-receipt-required.gate.v1.json

Required receipts:
  evidence/workers/story-to-tdd.gemini-dispatch.receipt.v1.json
  evidence/workers/story-to-tdd.gemini-response.receipt.v1.json
  evidence/workers/story-to-tdd.gemini-invocation.receipt.v1.json
```

## Current Expected Posture

The combined slice intentionally remains blocked for live cognitive proof:

```text
invocationReceiptStatus: blocked
blockedReasons:
  gemini_response_missing
  gemini_invocation_receipt_missing
candidateStoryAuthorityCreated: false
```

That is correct. Slice 034-035 wires the dependency; Slice 036 should perform live Gemini proof.

## Guardrail

`ndd story plan` may not create story, criteria, or canonical spec authority from deterministic replay. It must pass through the declared Gemini worker lane and receipt gate first.

## Verdict

The CLI no longer owns worker behavior:

```text
ndd story plan
-> run manifest
-> Story-to-TDD Gemini worker lane
-> Gemini receipt gate
-> candidate authority only after live evidence
```
