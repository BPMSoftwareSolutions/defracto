# Slice 003G Resolver-Backed Facade Materialization

## Status

passed

## Invocation

- Resolver command: `npx sej-resolver facade:generate --sej contracts/sej/materialize-validate-lineage-facade.sej.v1.json`
- Materialized artifact: `tools/validate-lineage.js`
- Emitted receipt: `evidence/facades/validate-lineage.facade-materialization.receipt.v1.json`

## Findings

### Blockers

- None.

### Warnings

- `tools/validate-lineage.js` is generated, not hand-authored.
- No validation logic was authored by the platform agent.
- The facade owns no lineage truth.

### Notes

- The resolver executed `artifact.materialize.v1` and `evidence.emit.v1` from the accepted materialization SEJ.
- The generated doorway includes generated-file anchors.
- The receipt records the source SEJ, facade manifest, target path, and content hash.
- No resolver code was changed.

## Completion Posture

Slice 003G passed as a resolver-backed facade materialization.
`tools/validate-lineage.js` exists only as a resolver-materialized generated doorway.
The receipt proves the materialization outcome.
The facade remains subordinate to semantic truth and owns no lineage authority.
