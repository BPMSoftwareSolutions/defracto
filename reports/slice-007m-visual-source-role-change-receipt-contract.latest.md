# Slice 007M Visual Source Role-Change Receipt Contract

## Status

passed

## Purpose

Slice 007M defines how an artifact can change role from a projection output to a source-intent surface through an explicit governed receipt.

This is a boundary slice only.

It does not implement extraction, OCR, image analysis, canonicalization, or renderer behavior.

## Created Artifacts

```text
contracts/schemas/source-role-change-receipt.schema.v1.json
contracts/policies/source-surface-role-change.policy.v1.json
```

## Role-Change Boundary

The receipt records:

- previous artifact role
- new artifact role
- artifact path
- artifact hash
- prior projection evidence
- source capture evidence
- role-change reason
- required human review posture
- canonicalization status
- allowed next states
- forbidden claims

The receipt proves that a role change was declared and evidenced.

It does not prove visual extraction.

It does not prove canonicalization.

It does not prove source truth on its own.

## Completion Posture

Slice 007M passes only as a role-change receipt contract.

No visual extraction occurs.

No canonical spec is generated from a visual source yet.

No renderer-owned or extractor-owned product truth is introduced.
