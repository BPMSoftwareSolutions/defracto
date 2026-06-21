# Operator Intent

Run Slice 007H as a multi-agent conveyor.

Do not perform the whole slice as one agent.

Create a run manifest.

For each lane:

- assign exactly one bounded responsibility
- declare inputs
- declare outputs
- declare forbidden responsibilities
- require a receipt
- block if the prior receipt is missing

No lane may silently repair another lane’s artifact.
No lane may hand-author generated kernel source.
No lane may hand-author ASCII proof.
No lane may embed final ASCII output as hard-coded artifact content and call it rendering.

The slice passes only if every lane emits its receipt and the final evidence review confirms the generated kernel, conformance test, visual proof, and receipts are all aligned.
