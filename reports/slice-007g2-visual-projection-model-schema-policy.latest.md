# Slice 007G.2 Visual Projection Model Schema and Policy Artifacts

## Status

passed

## Purpose

Slice 007G.2 promotes the visual projection model from report-first posture into governed schema and policy artifacts.

Hard-coded ASCII in a SEJ is only static materialization, not the product foundation.

The `visualProjectionModel` is now the governed product center for future renderers.

Target sketches remain visual intent fixtures.

Render adapters must consume the `visualProjectionModel`.

Future outputs such as ASCII, SVG, HTML/CSS, DOCX, PDF, PPTX, Google Docs, Google Slides, and video must derive from this model.

No renderer exists yet.

No renderer-owned product truth is introduced.

## Governing Flow

```text
voice
-> narrative intent
-> canonical visual/spec truth
-> visualProjectionModel
-> render adapter
-> materialized artifact
-> evidence
```

The repo is still before any deterministic visual projection implementation.

This slice only defines the model and policy boundary that future renderers must obey.

## Created Artifacts

```text
contracts/schemas/visual-projection-model.schema.v1.json
contracts/schemas/visual-surface.schema.v1.json
contracts/schemas/visual-region.schema.v1.json
contracts/schemas/visual-container.schema.v1.json
contracts/schemas/visual-render-adapter.schema.v1.json
contracts/policies/visual-projection-determinism.policy.v1.json
```

## Model Boundary

The `visualProjectionModel` is the governed center for future renderers.

It names the source narrative, source story, canonical spec, target sketches, surfaces, regions, nodes, edges, containers, lanes, layout rules, semantic bindings, render adapters, equivalence rules, forbidden claims, and completion posture.

The model does not authorize a renderer to invent layout meaning, labels, edges, or visual hierarchy.

## Policy Boundary

The determinism policy requires stable ordering, stable layout rules, stable connector routing, stable label handling, stable overflow behavior, stable failure behavior, and stable receipt shape.

It forbids random placement, implicit layout inference, unrecorded fallback behavior, and any claim that visual projection already exists in implementation.

The model is the foundation; hard-coded ASCII is only a transitional static materialization bridge and not a replacement for model-driven rendering.

## Relationship To Target Sketches

Target sketches remain visual intent fixtures.

They describe what a visual output should mean and resemble.

The `visualProjectionModel` describes the renderer-neutral structure that renderers must consume.

Render adapters translate that governed model into a declared artifact format.

## Completion Posture

Slice 007G.2 passes as schema/policy artifact creation only.

No renderer is implemented.

No visual artifact is generated.

No resolver code is changed.

Future Slice 007H may define the deterministic ASCII render kernel contract.
