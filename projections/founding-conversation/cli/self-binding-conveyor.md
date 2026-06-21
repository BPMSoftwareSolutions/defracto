Yes. **That’s exactly the missing trust boundary.**

You’re saying:

```text
If the CLI is hand-written outside the conveyor,
then the CLI becomes a competing narrative.
```

And that is right.

The CLI is too important to be treated as “just bootstrap code.” It is the **front door into the whole fabric**, so the CLI itself needs:

```text
narrative
→ story
→ canonical spec
→ SEJ
→ projection manifest
→ generated thin facade
→ resolver-backed execution
→ receipt
→ self-sketch
```

That aligns with the repo doctrine that future execution behavior must trace through source narrative, story, canonical spec, contract/schema, and evidence.  The resolver side already has the primitives needed for a governed path — resolving references/values, executing stages, resolving contracts, materializing artifacts, computing hashes, and emitting receipts. 

# The corrected design

The CLI should not be “code we wrote.”

It should be:

```text
A generated doorway into the conveyor.
```

Meaning:

```text
bin/ndd.cjs
  = thin projected facade

contracts/sej/ndd-cli.execute.sej.v1.json
  = executable truth

conveyor/cli/ndd-cli.canonical-spec.v1.json
  = behavior authority

stories/cli/ndd-cli.story.v1.json
  = narrative source of why it exists

evidence/cli/ndd-cli.facade-materialization.receipt.v1.json
  = proof that the facade was projected
```

# The CLI story

The CLI’s story is beautiful and simple:

```text
As the Defracto operator,
I want one command that submits narrative intent into the conveyor,
so that every generated artifact is produced through declared truth,
bounded worker lanes, resolver execution, receipts, and visual evidence.
```

The CLI’s moral boundary:

```text
The CLI must never become the brain.
The CLI must only open the door.
```

# The shape

```text
+------------------------------------------------------------+
|                    NDD CLI SOURCE TRUTH                    |
+------------------------------------------------------------+
|                                                            |
|  narrative: why the CLI exists                             |
|      |                                                     |
|      v                                                     |
|  story: operator submits intent into conveyor              |
|      |                                                     |
|      v                                                     |
|  canonical spec: command behavior and fail-closed rules    |
|      |                                                     |
|      v                                                     |
|  SEJ: executable command contract                          |
|      |                                                     |
|      v                                                     |
|  projection manifest: Node / Python / C# CLI facades       |
|      |                                                     |
|      v                                                     |
|  generated thin CLI doorway                                |
|      |                                                     |
|      v                                                     |
|  resolver executes conveyor instructions                   |
|      |                                                     |
|      v                                                     |
|  receipts + self-sketch + release gate                     |
|                                                            |
+------------------------------------------------------------+
```

# The CLI must tell its own story

The CLI should be able to run:

```bash
ndd self sketch
```

and produce:

```text
+------------------+
| Operator Intent  |
+--------+---------+
         |
         v
+------------------+
|   NDD CLI Door   |
+--------+---------+
         |
         v
+------------------+
|  SEJ Contract    |
+--------+---------+
         |
         v
+------------------+
| Resolver Runtime |
+--------+---------+
         |
         v
+------------------+
| Receipts/Sketch  |
+------------------+
```

But that sketch must not be hard-coded as final proof. It should be projected from the CLI’s own `visualProjectionModel`.

# Repo-ready design packet

Here’s the design I would use as the next conveyor slice.

# Slice 008B: NDD CLI Self-Binding Conveyor

## Mission

Bind the `ndd` CLI to the same Narrative-Driven Development conveyor it orchestrates.

The CLI must not be a hand-authored authority surface. It must be a projected doorway whose behavior is derived from narrative, story, canonical spec, SEJ, projection manifest, resolver execution, and evidence receipts.

## Core Thesis

```text
The CLI is not the brain.
The CLI is the doorway.
The SEJ is the executable instruction.
The resolver is the mechanism.
The conveyor is the development environment.
The receipt is memory.
The self-sketch is visual evidence.
```

## Problem

The live `ndd` CLI currently proves that a command can call Gemini Flash and return a structured ASCII surface.

However, if the CLI behavior is maintained as ungoverned hand-written code, then the CLI itself becomes a competing narrative.

That violates Defracto doctrine.

## Required Correction

The CLI must be pulled onto the conveyor.

The code surface must become a thin projected facade.

The behavior must live in canonical spec and SEJ.

The CLI must be able to project a visual sketch of itself from its own declared visual model.

## Required Artifact Chain

```text
source narrative
-> CLI story
-> CLI canonical spec
-> CLI SEJ contract
-> CLI DTO contracts
-> CLI projection manifest
-> generated CLI facade
-> resolver invocation receipt
-> self visualProjectionModel
-> generated self ASCII sketch
-> release gate receipt
```

## Create

```text
stories/cli/ndd-cli.story.v1.json
specs/canonical/cli/ndd-cli.canonical-spec.v1.json

contracts/schemas/ndd-cli-command-input.schema.v1.json
contracts/schemas/ndd-cli-command-result.schema.v1.json
contracts/schemas/ndd-cli-dispatch.schema.v1.json
contracts/schemas/ndd-cli-run-envelope.schema.v1.json
contracts/schemas/ndd-cli-self-sketch-result.schema.v1.json

contracts/sej/ndd-cli.execute.sej.v1.json
contracts/sej/ndd-cli.self-sketch.sej.v1.json
contracts/sej/materialize-ndd-cli-node.sej.v1.json

contracts/projections/ndd-cli.node-projection-manifest.v1.json
contracts/projections/ndd-cli.python-projection-manifest.v1.json
contracts/projections/ndd-cli.csharp-projection-manifest.v1.json

projections/visual-models/ndd-cli-self.visual-model.v1.json

generated/cli/node/ndd.cjs
generated/cli/python/ndd.py
generated/cli/csharp/NddCli.cs

evidence/cli/ndd-cli.node-projection.receipt.v1.json
evidence/cli/ndd-cli.self-sketch.receipt.v1.json
evidence/cli/ndd-cli.conformance.receipt.v1.json

conveyor/runs/2026/06/21/slice-008b-ndd-cli-self-binding/
  run.manifest.v1.json
  lane-ledger.v1.json
  final/run-summary.md
  final/commit-message.txt
  final/release-packet.v1.json
  sketches/ndd-cli-self.ascii
```

## CLI Responsibilities

The CLI may:

```text
parse command-line arguments
read stdin
construct bounded invocation DTOs
call the resolver runtime
write declared run-envelope artifacts
compute local hashes
write receipts
fail closed
print final result
```

The CLI must not:

```text
invent story truth
invent canonical behavior
invent worker outputs
invent ASCII sketches
invent signatures
silently fall back to mock mode
repair Gemini responses
mutate generated artifacts outside materialization authority
write product behavior directly
```

## Required Commands

```text
ndd handoff run --text <text>
ndd handoff status <run-path>
ndd handoff continue <run-path>
ndd handoff review <run-path>
ndd self sketch
ndd self explain
```

## Command: ndd handoff run

Input:

```text
operator text
optional run key
optional worker profile
```

Canonical behavior:

```text
create run envelope
create dispatch packet
call Gemini Flash worker through declared worker profile
validate structured response
write response artifact
extract ASCII sketch
write sketch artifact
compute hashes from actual disk contents
write runner receipt
update run ledger
block release if receipts are missing
```

Failure behavior:

```text
fail closed if LOC_GEMINI_API_KEY is missing
fail closed if Gemini Flash is unavailable
fail closed if structured response is invalid
fail closed if asciiSketch is missing
fail closed if hash computation fails
fail closed if receipt cannot be written
fail closed if release gate lacks required receipts
```

## Command: ndd self sketch

Canonical behavior:

```text
load the CLI self visualProjectionModel
render the CLI self sketch through declared visual rendering path
materialize the ASCII sketch
compute sketch hash
emit receipt
return sketch path
```

Completion posture:

```text
passed only if the sketch is generated from the visualProjectionModel and receipt-backed
blocked if the sketch is hard-coded in CLI source
blocked if receipt is missing
blocked if visualProjectionModel is missing
```

## DTOs

### nddCliCommandInput

```json
{
  "schemaVersion": "defracto.ndd-cli-command-input.v1",
  "commandKey": "ndd.handoff.run",
  "operatorText": "string",
  "runKey": "string",
  "workerProfileKey": "defracto.workers.gemini_flash.v1",
  "failClosed": true
}
```

### nddCliDispatch

```json
{
  "schemaVersion": "defracto.ndd-cli-dispatch.v1",
  "dispatchKey": "string",
  "runKey": "string",
  "laneKey": "string",
  "workerKey": "defracto.workers.gemini_flash.v1",
  "inputTextHash": "sha256:<hash>",
  "responseContract": "conveyor/workers/gemini-flash.response-contract.v1.json"
}
```

### nddCliCommandResult

```json
{
  "schemaVersion": "defracto.ndd-cli-command-result.v1",
  "status": "passed | blocked | failed",
  "runPath": "string",
  "artifacts": {
    "input": "string",
    "dispatch": "string",
    "response": "string",
    "sketch": "string",
    "receipt": "string",
    "ledger": "string"
  },
  "blockers": []
}
```

## SEJ Execution Shape

```json
{
  "schemaVersion": "defracto.sej-contract.v1",
  "contractKey": "defracto.sej.ndd-cli.execute.v1",
  "contractKind": "semantic-executable-json",
  "toolKey": "defracto.cli.ndd",
  "boundedInputs": [
    "nddCliCommandInput"
  ],
  "boundedOutputs": [
    "nddCliCommandResult"
  ],
  "requiredOperations": [
    {
      "operationKey": "resolve.contract.v1",
      "purpose": "Resolve CLI command contract.",
      "requirementState": "required",
      "missingCapabilityBehavior": "blocked"
    },
    {
      "operationKey": "resolve.value.v1",
      "purpose": "Resolve command input values.",
      "requirementState": "required",
      "missingCapabilityBehavior": "blocked"
    },
    {
      "operationKey": "execute.stage.v1",
      "purpose": "Sequence CLI conveyor stages.",
      "requirementState": "required",
      "missingCapabilityBehavior": "blocked"
    },
    {
      "operationKey": "artifact.materialize.v1",
      "purpose": "Materialize run artifacts.",
      "requirementState": "required",
      "missingCapabilityBehavior": "blocked"
    },
    {
      "operationKey": "hash.compute.v1",
      "purpose": "Compute hashes from materialized files.",
      "requirementState": "required",
      "missingCapabilityBehavior": "blocked"
    },
    {
      "operationKey": "evidence.emit.v1",
      "purpose": "Emit receipts and run ledger evidence.",
      "requirementState": "required",
      "missingCapabilityBehavior": "blocked"
    }
  ],
  "failurePosture": "fail-closed"
}
```

## Thin Node Facade Shape

The generated Node CLI facade must be thin.

It may contain only:

```text
argument parsing
stdin reading
construction of a bounded invocation object
call into resolver runtime
exit code mapping
stdout/stderr forwarding
```

It must not contain:

```text
Gemini prompt logic
business meaning
ASCII sketch generation
receipt truth
hash truth outside resolver-declared stage
fallback outputs
mock mode
```

## Self-Projection Requirement

The CLI must carry a visual projection model of itself.

```text
projections/visual-models/ndd-cli-self.visual-model.v1.json
```

The visual model must declare:

```text
operator intent
CLI doorway
SEJ contract
resolver runtime
Gemini Flash worker
receipt writer
release gate
```

The generated sketch must show:

```text
Operator Intent
-> NDD CLI Doorway
-> SEJ Contract
-> Resolver Runtime
-> Gemini Flash Worker
-> Receipt
-> Release Gate
```

## Pass Conditions

Slice 008B passes only if:

```text
CLI story exists
canonical spec exists
SEJ contract exists
DTO schemas exist
projection manifest exists
Node facade is classified as generated or pending generated
self visualProjectionModel exists
self sketch is generated or explicitly blocked
receipts tie generated CLI surface to its source truth
release packet blocks if any required receipt is missing
```

## Block Conditions

The slice is blocked if:

```text
CLI source is hand-authored without projection receipt
CLI contains business meaning
CLI contains hard-coded ASCII proof
CLI can run without declared SEJ contract
CLI can produce release packet without receipts
CLI can silently fall back to dry-run/mock behavior
CLI output lacks local runner verification
```

# The important design move

The CLI has **three layers**:

```text
1. Doorway facade
   thin generated command surface

2. Command SEJ
   executable truth of what the command does

3. Resolver/runtime
   mechanism that executes declared stages
```

So the CLI code is not trusted because “we wrote it well.”

It is trusted because:

```text
the CLI is projected,
the projection has lineage,
the execution has receipts,
the output has hashes,
and the visual surface proves what happened.
```

# What to do with the current `bin/ndd.cjs`

Do not pretend it is fully governed yet.

Classify it honestly:

```text
currentState:
  bin/ndd.cjs: bootstrap_cli_mechanism
  trustPosture: useful but not fully conveyor-born
  requiredNextState: projected_cli_facade
```

That avoids false narrative while preserving momentum.

# The clean next step

The next run should not be “add more CLI code.”

It should be:

```text
Slice 008B:
  put the CLI itself on the conveyor
```

Then any further code change to `ndd` must come through:

```text
CLI story
→ CLI canonical spec
→ CLI SEJ
→ CLI projection manifest
→ materialization receipt
```

That’s how the doorway stops lying.
