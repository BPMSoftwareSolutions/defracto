# Slice 063 - cognitive provider runtime boundary correction

Status: passed

## Correction

The previous loop misclassified provider invocation and governance evaluation as resolver evolution.

Corrected blocker:

```text
cognitive_worker_lane_not_executable
```

## Doctrine

```text
Resolver resolves language.
SEJ expresses behavior.
Conveyor moves packets.
Workers touch external systems.
Gates decide authority.
Receipts prove every handoff.
```

## Classification

Conveyor worker/lane concern:

```text
worker.gemini_flash.invoke.v1
worker.openai.responses.invoke.v1
environment.require_secret.v1
```

SEJ/governance contract concern:

```text
gate.evaluate.v1
policy.evaluate.v1
evidence.freshness.verify.v1
```

Generic validation utility, not automatic resolver evolution:

```text
object.require_fields.v1
json.schema.validate.v1
```

## CLI Proof

```text
node generated\cli\node\ndd.cjs story implement --slice platform-agent-authority-routing
```

now blocks with:

```text
cognitive_worker_lane_not_executable
```

## Superseded

The resolver evolution request and resolver handoff package for cognitive provider primitives are superseded. No resolver package change is required for Gemini/OpenAI product flow unless a later slice proves a tiny universal SEJ language mechanic is truly missing.

Corrected handoff:

```text
conveyor/workers/cognitive-provider-lane-execution.handoff.v1.json
```

## Next Move

Build the conveyor worker lane execution path so the platform-agent authority-routing run can produce receipted cognitive candidates through Gemini/OpenAI worker adapters and then pass through hardening gates.
