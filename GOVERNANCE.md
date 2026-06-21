# Governance

## Root Rule

No Competing Narratives.

No artifact may claim behavior, policy, design intent, data shape, UI layout, execution authority, or evidence posture that cannot be traced back to authorized story truth.

## Working Decisions

- D001: Project identity is `Defracto`, with `Narrative Execution Fabric` as the architecture category.
- D002: Slice 001 proves lineage, not runtime.
- D003: `tools/` may contain contracts and intent documents early, but executable bodies only appear after their story, canonical spec, schemas, and evidence expectations exist.
- D004: No root-level `src/` or `src_facades/` in the seed phase.
- D005: Repo-bound planning documents must pass false-narrative review before becoming accepted architecture material.
- D006: Minimum artifact shapes must be locked before Slice 001 begins.

## Approval Posture

Seed artifacts may be written manually for Slice 001, but they must remain within the minimum field and section contracts approved by D006.

## Escalation Rule

If implementation discovers a rule not present in the current story or canonical spec, stop and promote that rule back into the narrative layer before continuing.

## DTO Shape Doctrine

A DTO is not an implementation convenience.
A DTO is a narrative-bearing transfer shape.

Every DTO must answer:

- What story requires this shape?
- What canonical spec authorizes it?
- What projection or evidence surface consumes it?
- What fields are required for lineage?
- What fields are forbidden because they invent unsupported meaning?

No executable tool may introduce a DTO field that is absent from the authorized schema.

## Preserved Truth Rule

A blocker discovered before execution is not delay.
It is preserved truth.

Early blockers are how Defracto prevents late drift.

No artifact earns execution authority until its meaning is already bounded.

## Light Principle

Let there be light means make the meaning visible before execution begins.

Defracto brings light to software by exposing intent before code can hide it.

The executable must be a projection of the contract, not the author of the contract.
