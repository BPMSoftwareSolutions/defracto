# Slice 031: Story Slug Red-Green Conformance And SOG Promotion Gate

Status: passed

## Goal

Prove the completed red-green chain is reviewable while blocking promotion of the generated implementation to durable product truth until equivalent behavior exists as a Semantic Operation Graph.

## Produced Artifacts

- `contracts/gates/tdd-proof-surface-not-product-truth.gate.v1.json`
- `contracts/gates/sog-promotion-required-for-generated-implementation.gate.v1.json`
- `contracts/schemas/red-green-conformance-receipt.schema.v1.json`
- `evidence/tdd/story-slug.red-green-conformance.receipt.v1.json`
- `evidence/tdd/story-slug.sog-promotion-posture.receipt.v1.json`

## Accepted Proof Posture

The Story-to-TDD proof surface is reviewable:

```text
red receipt:
  evidence/tdd/story-slug.red-test.receipt.v1.json
  sha256:851b47dc550767eb9b4ff002e59ce33b0237f7906504a258d7cd39e66be145f2

green receipt:
  evidence/tdd/story-slug.green-test.receipt.v1.json
  sha256:06fc050058b22b2e96180cf495216755917fd64185ae302c009a8704a682d203

red-green cycle receipt:
  evidence/tdd/story-slug.red-green-cycle.receipt.v1.json
  sha256:9892bffd51d242ed0ea5d7e3e93fd2e3a5a118ef12deb85bc0093afd0c962353
```

The generated test artifact remained fixed across red and green:

```text
tests/generated/user-stories/story-slug.generated.test.js
sha256:246299c26d138d78257f747c2554ba87687b511421bc2f0f27a49e6e0d2c6a7a
```

The generated implementation hash matches its materialization receipt:

```text
generated/implementations/user-stories/story-slug.cjs
sha256:d9fdcb9780fecee2b4049ab8620911cceec90d70d22b961c505fd891599992b8
```

## Gate Results

- Red receipt exists: passed
- Green receipt exists: passed
- Red occurred before green: passed
- Same generated test hash used for red and green: passed
- Generated implementation hash matches materialization receipt: passed
- Implementation classified as `proof_surface_only`: passed
- Generated implementation is not valid as durable product behavior: passed
- Must promote through `semantic_operation_graph`: passed

## Blocked Promotion Posture

Promotion to durable product truth is blocked.

```json
{
  "promotionStatus": "blocked_until_sog_exists",
  "blockedReason": "semantic_operation_graph_missing",
  "requiredSogArtifacts": [
    "specs/sog/user-stories/story-slug.semantic-operation-graph.v1.json",
    "evidence/tdd/story-slug.sog-parity.receipt.v1.json"
  ]
}
```

Current allowed use:

- review generated proof surface
- inspect red-green evidence
- derive future SOG candidate

Current forbidden use:

- claim durable product truth
- ship generated implementation as product behavior
- skip SOG parity evidence
- promote green receipt directly to canonical runtime behavior

## Verdict

Slice 031 locks the maturity line:

```text
green = generated proof surface satisfies story test authority
green != product truth
product truth requires Semantic Operation Graph promotion
```
