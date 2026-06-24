# Review Package

Status: accepted_for_review
Next Step Owner: Product Owner

## What did you build?

A reusable Build Setup template and CLI proof lane that materializes Business Analysis, Build Setup, Test Results, Review Package, and acceptance evidence for a story run.

## Why did you build it?

To make the conveyor read like a normal product delivery pipeline: User Story, Business Analysis, Build Setup, Conveyor Run, Test Results, Review Package, Acceptance Decision.

## How do I use it?

1. node generated/cli/node/ndd.cjs story plan --text "<story>" --slice <slice> --run-date 2026/06/24
2. node generated/cli/node/ndd.cjs story implement --slice <slice> --target-kind build-setup

## Did it pass?

Yes. The conveyor loaded the manifest, materialized the planned outputs, hashed them, and emitted receipts.

## What evidence proves it?

- Source story:
conveyor/runs/2026/06/24/build-setup-template-cli-proof/source/story.source.v1.md
- Source story hash:
sha256:608db378ba564b0ed597559f918c70868e331e8797252ce0ce60d385389a56ff
- Business Analysis:
conveyor/runs/2026/06/24/build-setup-template-cli-proof/artifacts/business-analysis.v1.json
- Business Analysis hash:
sha256:2a99602dc6031bafb57cfc8f4d7ed8234878f7cdcf4f597ac96aefcb085c4029
- Build Setup:
conveyor/runs/2026/06/24/build-setup-template-cli-proof/artifacts/build-setup.v1.json
- Build Setup hash:
sha256:a985c6b49be085f0d3c6a8d238785289cbdc7b7534f32bf07af294139ffc8ce5
- Test Results:
conveyor/runs/2026/06/24/build-setup-template-cli-proof/artifacts/test-results.v1.json
- Test Results hash:
sha256:26f7eb2ab824e7a84fa9d197e90a58e93c00ebd41829b9e8e7326bf0433482b6
- Build Setup receipt:
conveyor/runs/2026/06/24/build-setup-template-cli-proof/receipts/build-setup.receipt.v1.json
- Test Results receipt:
conveyor/runs/2026/06/24/build-setup-template-cli-proof/receipts/test-results.receipt.v1.json
- Review Package receipt:
conveyor/runs/2026/06/24/build-setup-template-cli-proof/receipts/review-package.receipt.v1.json
- Acceptance decision receipt:
conveyor/runs/2026/06/24/build-setup-template-cli-proof/receipts/acceptance-decision.receipt.v1.json

## What is still blocked?

Live cognitive BA/provider execution for arbitrary stories is not claimed by this template proof; that belongs to the conveyor-worker runtime lane.

## Acceptance Decision

Accepted for review: true
Accepted for release: false