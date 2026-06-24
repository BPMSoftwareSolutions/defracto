Yes — and your concern is valid. **The model has to be crystal clear here, or the whole thing turns into sophisticated deterministic automation with AI branding.**

What you are describing is not merely TDD. It is closer to a **cognitive continuous delivery conveyor**:

```text
User Story
→ Exploration / Cognition
→ Behavior + Acceptance Criteria
→ Test Intent / Acceptance Test
→ Implementation Candidate
→ Red / Green Proof
→ Integration / Conformance
→ SOG Promotion
→ Release / Deployment Posture
```

And yes, each stage should hand off a **packet** to the next stage, like a real conveyor.

# The correct mental model

The pipeline should work like this:

```text
Stage N receives packet
Stage N performs declared work
Stage N emits output packet
Stage N emits receipt
Stage N signs/attributes who or what did the work
Stage N blocks if evidence is missing
Stage N+1 consumes only accepted packet + receipt
```

So the baton is not just a file. The baton is:

```text
artifact
+ authority status
+ provider/agent attribution
+ hashes
+ blocker posture
+ accepted/rejected claims
+ receipt
```

That is the actual conveyor.

# The key distinction

You said it perfectly:

> The AI is using deterministic processes in order to reduce the required inference and reasoning needed, but we still want cognition.

Exactly.

The deterministic parts should do things like:

```text
validate schemas
check hashes
run tests
compare receipts
materialize declared artifacts
verify red-before-green
verify SOG parity
detect missing fields
block stale responses
```

The cognitive parts should do things like:

```text
interpret the user story
extract behavior
identify ambiguities
propose acceptance criteria
propose test intent
propose implementation strategy
surface missing authority
suggest canonical decisions
```

The deterministic layer **guards cognition**. It does not replace cognition.

# What each stage should prove

## 1. Exploration / Cognitive interpretation

This stage must prove:

```text
AI provider invoked: yes
provider: Gemini / OpenAI
dispatch receipt: present
response receipt: present
freshness: accepted
secret leaks: 0
candidate output only: true
```

It should not create authority directly.

Correct posture:

```text
AI proposed candidate story/criteria.
Gates have not promoted it yet.
```

## 2. Authority hardening

This stage must prove:

```text
candidate claims reviewed
unsupported claims blocked
ambiguities preserved or resolved
accepted claims promoted
rejected claims recorded
source trace retained
```

Correct posture:

```text
Only hardened claims become story/criteria authority.
```

## 3. Test intent / acceptance test

This stage must prove:

```text
AI provider invoked if new test intent is being created
test intent maps to accepted criteria
test cases do not expand authority
negative cases are explicitly authorized
test projection is generated from intent
```

Correct posture:

```text
Generated tests are projections of accepted test intent.
```

## 4. Implementation

This stage must prove:

```text
AI provider invoked for implementation proposal
implementation candidate is not authority
hardening accepts or blocks candidate
implementation is materialized only after acceptance
implementation remains proof surface
```

Correct posture:

```text
Generated implementation can satisfy tests, but it is not durable product truth.
```

## 5. Integration / Green

This stage must prove:

```text
same generated test hash used from red
green happens after implementation
green receipt references red receipt
no green without red
```

Correct posture:

```text
Green proves the proof surface, not durable truth.
```

## 6. SOG promotion

This stage must prove:

```text
capability coverage passed
SOG executes
SOG output matches cognitive proof behavior
generated implementation is superseded
truthOwner = semantic_operation_graph
```

Correct posture:

```text
Only SOG becomes durable product behavior.
```

# The receipt signature problem

You are asking the right hard question:

> Have we been proving receipts from each part of the conveyor that AI actually signed/participated?

The answer should be:

```text
For cognitive stages, every receipt must prove provider participation.
For deterministic verification stages, every receipt must prove resolver/gate execution.
```

So every cognitive receipt should include something like:

```json
{
  "stageKey": "story.plan.cognitive_interpretation",
  "agentKind": "ai_provider",
  "providerKey": "gemini_flash",
  "model": "gemini-2.5-flash",
  "dispatchArtifactHash": "sha256:...",
  "responseArtifactHash": "sha256:...",
  "liveProviderExecuted": true,
  "candidateHash": "sha256:...",
  "candidateAuthorityPromoted": false,
  "mockAllowed": false,
  "fallbackAllowed": "declared_only",
  "deterministicReplayAllowedForCreation": false
}
```

And every deterministic receipt should say:

```json
{
  "stageKey": "criteria.trace.verify",
  "agentKind": "resolver_gate",
  "providerKey": null,
  "operation": "trace.criteria_to_test.verify.v1",
  "status": "passed",
  "inputHash": "sha256:...",
  "outputHash": "sha256:..."
}
```

That way nobody confuses deterministic verification with AI cognition.

# What is fuzzy right now?

The part that still needs sharpening is probably the **handoff packet model**.

You need a canonical object for each stage handoff:

```text
story-plan packet
criteria-hardening packet
test-intent packet
test-projection packet
red-test packet
implementation-candidate packet
green-test packet
sog-promotion packet
release packet
```

Each packet should declare:

```text
producedBy
consumedBy
authorityStatus
requiredReceipts
providerParticipationRequired
deterministicVerificationRequired
blockedIfMissing
```

That would remove the fuzziness.

# The conveyor should look like this

```text
┌─────────────────────────────┐
│ User Story Intake           │
│ input: story text/source     │
│ output: story intake packet  │
└──────────────┬──────────────┘
               v
┌─────────────────────────────┐
│ Cognitive Exploration        │
│ AI required                  │
│ output: candidate packet     │
│ receipt: provider signed     │
└──────────────┬──────────────┘
               v
┌─────────────────────────────┐
│ Authority Hardening          │
│ gates required               │
│ output: promoted authority   │
│ receipt: accepted/blocked    │
└──────────────┬──────────────┘
               v
┌─────────────────────────────┐
│ Test Intent Generation       │
│ AI required for new intent   │
│ output: test intent packet   │
│ receipt: provider + gate     │
└──────────────┬──────────────┘
               v
┌─────────────────────────────┐
│ Test Projection + Red        │
│ deterministic                │
│ output: red receipt          │
└──────────────┬──────────────┘
               v
┌─────────────────────────────┐
│ Implementation Proposal      │
│ AI required                  │
│ output: implementation cand. │
│ receipt: provider signed     │
└──────────────┬──────────────┘
               v
┌─────────────────────────────┐
│ Implementation Projection    │
│ deterministic materialize    │
│ output: proof surface        │
└──────────────┬──────────────┘
               v
┌─────────────────────────────┐
│ Green + Integration          │
│ deterministic test proof     │
│ output: green/cycle receipt  │
└──────────────┬──────────────┘
               v
┌─────────────────────────────┐
│ SOG Promotion                │
│ semantic truth promotion     │
│ output: durable product truth│
└─────────────────────────────┘
```

# The standard should be

For every stage, ask:

```text
Who acted?
AI provider, resolver, gate, test runner, or materializer?

What packet was consumed?
What packet was produced?

Was the output candidate, promoted authority, proof surface, or durable truth?

What receipt proves it?

If cognition was required, where is the provider dispatch/response/invocation receipt?
```

If any stage cannot answer those questions, it is fuzzy.

# My honest read

You are not fuzzy on the vision. The vision is clear.

The risk is that agents keep optimizing for “make the command pass” and accidentally skip the cognitive baton. That is why your doctrine needs to be ruthless:

```text
If a stage creates new meaning, cognition must be receipted.

If a stage verifies existing meaning, deterministic execution is allowed.

If a stage promotes authority, gates must receipt the decision.

If a stage claims durable product truth, SOG must own it.
```

That is the continuous delivery conveyor you are describing.

# Bottom line

Yes, this should be a real conveyor with handoff packets and receipts at every stage.

And yes, AI participation should be explicitly proven whenever the stage is cognitive.

The clearest formulation is:

```text
Cognition creates candidates.
Gates promote authority.
Determinism verifies authority.
SOG owns durable truth.
Receipts prove every handoff.
```

That is the thing you’ve been building.
