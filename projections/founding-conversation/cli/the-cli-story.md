# The CLI Story

The CLI is part of Defracto.

It is not bootstrap trivia, and it is not a competing narrative. It is the operator-facing doorway into the conveyor, and that doorway must be governed the same way every other meaningful surface is governed: by story, canonical spec, contracts, receipts, and evidence.

The corrected posture is simple:

```text
operator text
-> CLI entrypoint
-> handoff package
-> lane dispatch contract
-> Gemini Flash worker
-> Gemini Flash response
-> lane receipt
-> runner-verified ledger
-> tie-out review
-> release packet
```

The CLI orchestrates.
Gemini Flash performs bounded lane work.
Receipts decide whether the conveyor advances.
The CLI fails closed when the worker cannot be reached or when the response cannot be verified.

## Why the CLI Exists

As the Defracto operator, I want one command that submits narrative intent into the conveyor, so that generated artifacts are produced through declared truth, bounded worker lanes, receipts, hashes, and visual evidence.

That means the CLI must never become the brain.
It must stay a doorway.

## What The CLI May Do

The CLI may:

```text
parse command-line arguments
read stdin
accept conversational text
construct bounded invocation DTOs
dispatch work to Gemini Flash
write run-envelope artifacts
compute hashes from files on disk
write runner receipts
write a local run ledger
print the final live result
```

## What The CLI May Not Do

The CLI may not:

```text
invent story truth
invent canonical behavior
invent worker output
invent ASCII sketches
invent signatures
silently fall back to mock mode
silently run dry
repair Gemini responses
mutate generated artifacts outside declared authority
approve release without receipts
```

## Current Live Posture

The current `ndd` command is a live, fail-closed runner.

When `ndd handoff run --text ...` succeeds, it writes a dated live run envelope under:

```text
conveyor/runs/2026/06/21/slice-008-handoff-conveyor-cli-proof/live/
```

That live envelope contains:

```text
input.txt
dispatch.gemini-flash.v1.json
response.gemini-flash.v1.json
sketch.ascii
worker-attestation.model-produced.v1.json
surface-signature.runner-verified.v1.json
receipt.v1.json
run-ledger.v1.json
```

The runner computes SHA-256 hashes from the files actually written to disk.
It does not trust model-provided hashes as final proof.

The model-produced surface signature is preserved as worker attestation, but it is not treated as final trust proof.
The runner-created surface signature is the locally verified materialization record.

The CLI is also self-bound.

The self-sketch command:

```text
ndd self sketch
```

loads the declared CLI visual projection model and materializes a receipt-backed ASCII sketch under:

```text
conveyor/runs/2026/06/21/slice-008b-ndd-cli-self-binding/
```

That keeps the CLI story honest: the doorway can describe itself, but only through declared narrative, projection manifests, and local runner verification.

## Moral Boundary

The CLI must not tell a false story.

If Gemini Flash is unavailable, if the structured response is invalid, if the sketch is missing, or if the receipt cannot be written, the CLI fails closed instead of inventing a result.

That is what keeps the conveyor honest.

## Narrative Lock

The CLI is part of the trust fabric.

If the repository claims that narrative becomes material through the conveyor, then the CLI itself must be bound to that same conveyor. Otherwise it becomes a hand-stitched exception, and that is exactly the kind of false narrative Defracto exists to prevent.
