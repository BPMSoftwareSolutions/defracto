# Slice 032: Story Slug Semantic Operation Graph Seed

Status: passed with promotion blocked

## Goal

Create the semantic operation graph candidate for story-slug generation and keep durable promotion blocked until capability coverage, resolver execution, and SOG parity evidence are proven.

## Produced Artifacts

- `contracts/semantic-actions/story-slug.generate.v1.json`
- `contracts/semantic-operation-graphs/user-stories/story-slug.generate.sog.v1.json`
- `contracts/capabilities/story-slug.capability-bindings.v1.json`
- `contracts/schemas/story-slug-result.schema.v1.json`
- `evidence/tdd/story-slug.proof-surface-to-sog-trace.receipt.v1.json`
- `evidence/sog/story-slug.sog-seed.receipt.v1.json`

## SOG Seed

The semantic operation graph seed was derived from canonical behavior and test intent:

```text
canonical spec:
  specs/canonical/user-stories/story-slug.canonical-spec.v1.json

test intent:
  contracts/test-intents/story-slug.test-intent.v1.json

SOG candidate:
  contracts/semantic-operation-graphs/user-stories/story-slug.generate.sog.v1.json
  sha256:70f369227c427823050e4a0f6ac0da92a8c124f621fced7db5c9f7a605b14b12
```

The generated CJS implementation is referenced only as prior proof evidence:

```text
generated/implementations/user-stories/story-slug.cjs
sha256:d9fdcb9780fecee2b4049ab8620911cceec90d70d22b961c505fd891599992b8
role: evidence_only_not_source_truth
```

## Capability Chain

```text
input.require_non_empty_string.v1
string.trim.v1
string.lowercase_ascii.v1
string.replace_whitespace_with_hyphen.v1
string.remove_unsupported_slug_chars.v1
string.collapse_repeated_hyphens.v1
string.trim_hyphen_edges.v1
result.project.v1
```

Every SOG step binds to a `capabilityKey`.

## Guardrails

- SOG does not copy host-language JavaScript body: passed
- `hostLanguageBodyAllowed` is false: passed
- generated implementation is referenced only as evidence: passed
- generated implementation is not source truth: passed
- durable product truth remains blocked: passed

## Promotion Block

The SOG seed exists, but it is not executable promotion evidence yet.

```json
{
  "status": "blocked",
  "blockedReason": "capability_coverage_missing",
  "capabilityCoverageComplete": false,
  "resolverExecutionProven": false,
  "sogParityReceiptExists": false,
  "durableProductTruthAccepted": false,
  "promotionStatus": "blocked_until_capability_coverage_and_sog_execution"
}
```

Required next evidence:

- capability coverage receipt
- SOG resolver execution receipt
- SOG parity receipt against story-slug generated test intent

## Verdict

Slice 032 starts semantic body promotion without laundering generated code into JSON. The chain now says:

```text
green proof surface
→ canonical behavior trace
→ SOG seed candidate
→ blocked until capabilities and execution prove parity
```
