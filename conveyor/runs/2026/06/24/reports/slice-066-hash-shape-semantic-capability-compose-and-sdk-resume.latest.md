# slice-066-hash-shape-semantic-capability-compose-and-sdk-resume

Status: accepted for local semantic use, release blocked
Release blocker: resolver_package_not_published_to_registry

## What changed

hash.shape.validate.v1 is now represented as a semantic composition over string.matches_pattern.v1.

The receipt-hash SDK validator now executes the composed hash.shape.validate.v1 SOG instead of substituting evidence.receipt.verify.v1 or using host-language product logic.

## Product proof

Product proof packet:
evidence/product-proof/receipt-hash-validator.product-proof-packet.v1.json

SOG execution receipts:
evidence/sog/hash-shape.validate.sog-execution.receipt.v1.json
evidence/sog/receipt-hash-validator.sog-execution.receipt.v1.json

Usage smoke receipt:
evidence/product-proof/receipt-hash-validator.usage-smoke.receipt.v1.json

Valid case:
sha256:<64 lowercase hex> passes

Invalid case:
uppercase sha256 suffix blocks with malformed_receipt_hash

## Usage posture

Local semantic use:
passed with @bpmsoftwaresolutions/sej-resolver-node@0.1.10 installed from a local tarball

Operator commands:
node node_modules/@bpmsoftwaresolutions/sej-resolver-node/src/cli.cjs resolve --sej conveyor/runs/2026/06/24/sdk-receipt-hash-validator/usage/receipt-hash-validator.valid-usage.sej.v1.json
node node_modules/@bpmsoftwaresolutions/sej-resolver-node/src/cli.cjs resolve --sej conveyor/runs/2026/06/24/sdk-receipt-hash-validator/usage/receipt-hash-validator.invalid-usage.sej.v1.json

Published release use:
blocked because npm authentication is unavailable in this environment

## Guardrails held

- no host-language receipt-hash product body
- no nearby evidence.receipt.verify.v1 substitution
- no node_modules patch to source files
- SOG owns durable behavior authority
- product-proof packet distinguishes local use from release acceptance

## Next release step

Publish @bpmsoftwaresolutions/sej-resolver-node@0.1.10, update the narrative dependency from 0.1.9 to 0.1.10, and rerun the product proof packet as accepted_for_use.
