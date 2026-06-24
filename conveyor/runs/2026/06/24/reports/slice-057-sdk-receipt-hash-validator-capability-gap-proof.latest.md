# slice-057-sdk-receipt-hash-validator-capability-gap-proof

Status: blocked
Blocker: missing_semantic_capability
Required capability: hash.shape.validate.v1
Nearby capability rejected: evidence.receipt.verify.v1

## Proof

The receipt-hash SDK capability requires exact sha256:<64 lowercase hex> string-shape validation. evidence.receipt.verify.v1 was rejected because it verifies declared receipt/artifact hash equality, not hash string shape.

SDK strategy:
contracts/sdk/receipt-hash-validator.strategy.v1.json
Capability gap:
contracts/capabilities/hash.shape.validate.capability-gap.v1.json
Capability-gap receipt:
evidence/sdk/receipt-hash-validator.capability-gap.receipt.v1.json
Next conveyor story:
stories/generated/capability-gaps/hash.shape.validate.story.md

Durable product truth accepted: false
Host-language product body created: false
Temp builder used: false
Resolver/node_modules patched: false