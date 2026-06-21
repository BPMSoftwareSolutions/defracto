# Slice 007G Visual Projection Model Contract

## Status

proposed

## Purpose

Slice 007G defines the canonical visual model that all future renderers must consume.

This slice exists because the governed sketch path has proven an important distinction:

```text
The current system proves deterministic writing.
It does not yet prove deterministic visual projection.
```

The product center is not ASCII.

The product center is the `visualProjectionModel`.

ASCII, SVG, HTML, CSS, PowerPoint, PDF, Word, Google Docs, Google Slides, and video storyboards are all downstream render surfaces.

## Foundational Flow

```text
voice
-> narrative intent
-> canonical visual/spec truth
-> visual projection model
-> deterministic projection
-> materialized artifact
-> evidence
```

This is the first canonical path for Voice to Value.

A human should be able to speak a visual intent, have that intent captured as narrative truth, hardened into canonical visual/spec truth, projected into a visual model, rendered deterministically, and verified by evidence.

## Core Correction

The current ASCII sketch work revealed that deterministic materialization alone is not enough.

This is not sufficient:

```text
declared content lines
-> artifact.materialize
-> written file
```

That proves only deterministic writing.

The intended capability is:

```text
declared visual model
-> deterministic layout kernel
-> deterministic render adapter
-> materialized visual artifact
-> equivalence receipt
```

That proves deterministic visual projection.

## Doctrine

A visual artifact is not authored.

A visual artifact is projected.

A renderer is not a designer.

A renderer is a deterministic mechanism.

The designer is the narrative.

The authority is the canonical visual model.

The proof is the equivalence receipt.

## Visual Projection Model Definition

A `visualProjectionModel` is the canonical, renderer-neutral visual truth that sits between narrative intent and materialized visual artifacts.

It defines:

- visual surfaces
- visual regions
- nodes
- edges
- containers
- lanes
- sequence
- hierarchy
- semantic bindings
- layout rules
- spacing rules
- connector rules
- render constraints
- equivalence rules
- forbidden claims

It does not define renderer-specific implementation code.

It does not authorize freehand layout invention.

It does not allow an adapter to introduce new visual meaning.

## Required Artifacts

Create:

```text
contracts/schemas/visual-projection-model.schema.v1.json
contracts/schemas/visual-surface.schema.v1.json
contracts/schemas/visual-region.schema.v1.json
contracts/schemas/visual-render-adapter.schema.v1.json
contracts/policies/visual-projection-determinism.policy.v1.json
conveyor/runs/2026/06/21/reports/slice-007g-visual-projection-model-contract.latest.md
```

Update:

```text
README.md
ROADMAP.md
docs/Implementation Plan.md
docs/architecture/working-tree-shape.md
contracts/schemas/README.md
conveyor/runs/2026/06/21/reports/README.md
```

## Required Shape: visual-projection-model.schema.v1.json

The schema must define at least:

```text
schemaVersion
modelKey
modelKind
modelStatus
sourceNarrative
sourceStory
canonicalSpec
targetSketches
surfaces
regions
nodes
edges
containers
lanes
layoutRules
semanticBindings
renderAdapters
equivalenceRules
forbiddenClaims
completionPosture
```

## Model Responsibilities

The visual projection model owns:

```text
what visual concepts exist
where visual concepts are allowed to appear
how visual concepts relate
what semantic meaning each visual element carries
what render surfaces are allowed
what equivalence rules must pass
```

The visual projection model does not own:

```text
ASCII drawing implementation
SVG path generation implementation
HTML layout implementation
CSS styling implementation
PowerPoint generation implementation
PDF rendering implementation
video generation implementation
```

Those belong to render adapters or approved kernels.

## Renderer Responsibilities

A renderer may only:

```text
consume the visualProjectionModel
apply deterministic layout rules
emit a declared artifact format
fail closed on missing geometry
fail closed on missing semantic bindings
fail closed on overlap if overlap is forbidden
fail closed on wrapping if wrapping is forbidden
emit evidence
```

A renderer may not:

```text
invent nodes
invent labels
invent edges
invent visual hierarchy
invent layout meaning
repair missing semantics silently
change the target sketch
change the canonical visual model
claim design authority
```

## Render Adapter Families

The visual projection model must support future adapters such as:

```text
ascii.render
svg.render
html_css.render
pptx.render
docx.render
pdf.render
google_docs.render
google_slides.render
video_storyboard.render
figma.render
react.render
wpf.render
```

This slice does not implement any adapter.

It only defines the model all adapters must consume.

## Determinism Policy

The visual projection determinism policy must state:

```text
Same model + same adapter + same adapter version = same output hash.
```

The policy must require:

```text
stable ordering
stable layout rules
stable connector routing
stable label handling
stable overflow behavior
stable failure behavior
stable receipt shape
```

The policy must forbid:

```text
random placement
model preference
agent taste
auto-repair without contract authority
implicit layout inference
unrecorded fallback behavior
```

## Relationship To Existing Target Sketches

Existing target sketch fixtures remain valid, but they are now understood as visual intent fixtures that must be bound into or derived from the visual projection model.

Target sketches answer:

```text
What should this visual output mean and resemble?
```

The visual projection model answers:

```text
What renderer-neutral visual structure must all renderers consume?
```

Render adapters answer:

```text
How is that model projected into a specific artifact format?
```

Equivalence receipts answer:

```text
Did the materialized artifact match the declared visual authority?
```

## Completion Rule

Slice 007G passes only when the repo has a declared canonical visual projection model contract and determinism policy.

No renderer is implemented.

No visual artifact is re-rendered.

No resolver code is modified.

No adapter code is introduced.

No renderer-owned product truth is introduced.

## Explicit Non-Goals

Slice 007G does not:

```text
implement ASCII rendering
implement SVG rendering
implement HTML/CSS rendering
implement PowerPoint rendering
implement PDF rendering
implement document generation
implement video generation
modify resolver code
modify existing target sketch outputs
re-run materialization
re-run equivalence
```

## Next Slices

After Slice 007G:

```text
Slice 007H: Deterministic ASCII Render Kernel Contract
Slice 007I: Deterministic ASCII Render Kernel Implementation
Slice 007J: Target Sketch Render From Visual Model
Slice 007K: Visual Projection Equivalence Validation
```

## Final Posture

Slice 007G establishes the missing center of the Voice to Value pipeline.

The system moves from:

```text
deterministic writing
```

to a governed path toward:

```text
deterministic visual projection
```

The long-term projection path becomes:

```text
voice
-> narrative intent
-> story packet
-> canonical visual/spec truth
-> visual projection model
-> render adapter
-> materialized artifact
-> evidence
```

