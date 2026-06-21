# Contracts Schemas

This folder holds the minimum schema contracts for the founding narrative lineage seed.

The required minimum field contracts are defined by `docs/decisions/D006-minimum-artifact-shapes.md`.

Seed schema families:

- `narrativeSource`
- `storyPacket`
- `canonicalSpec`
- `projectionManifest`
- `lineageReceipt`
- `targetSketch`
- `visualNode`
- `visualEdge`
- `visualLayout`
- `visualProjectionModel`
- `visualSurface`
- `visualRegion`
- `visualRenderAdapter`
- `asciiRenderKernel`
- `asciiRenderResult`
- `sketchEquivalence`
- `resolverInvocationReceipt`
- `resolverEquivalenceReport`

Slice 007G.1 exists as `reports/slice-007g-visual-projection-model-contract.latest.md` and intentionally stops at posture alignment.
Slice 007G.2 exists as `reports/slice-007g2-visual-projection-model-schema-policy.latest.md` and introduces the governing schema and policy artifacts only.
Slice 007H exists as `reports/slice-007h-deterministic-ascii-render-kernel-contract.latest.md` and introduces the deterministic ASCII render kernel contract only.

Later slices may add more schemas, but they must not invent fields outside the approved decision and story/spec chain.
