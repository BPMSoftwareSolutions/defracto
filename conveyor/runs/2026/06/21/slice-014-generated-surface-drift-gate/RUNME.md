# Slice 014 - Generated Surface Drift Gate

This slice hardens the first living conveyor by proving the generated CLI and worker facades are reproducible from authority.

## What it checks

- regenerate `generated/cli/node/ndd.cjs`
- regenerate `generated/workers/node/lane-worker.cjs`
- compare hashes from disk
- verify the projection and conformance receipts
- fail closed if the generated surfaces drift without matching authority changes

## Run

```powershell
node node_modules/@bpmsoftwaresolutions/sej-resolver-node/src/cli.cjs facade:generate --sej contracts/sej/materialize-ndd-cli-node.sej.v1.json
node node_modules/@bpmsoftwaresolutions/sej-resolver-node/src/cli.cjs resolve --sej contracts/sej/materialize-lane-workers-node.sej.v1.json
node node_modules/@bpmsoftwaresolutions/sej-resolver-node/src/cli.cjs resolve --sej contracts/sej/conform-lane-workers-node-facade.sej.v1.json
```

## Pass condition

- `generated/cli/node/ndd.cjs` hashes to `sha256:b311972b2a5384b4acf0a0647348cffa0e10c36d464388ea9735d87387ccddf1`
- `generated/workers/node/lane-worker.cjs` hashes to `sha256:df847af9471946f891f346e2dac2bf84c0595cdaf67e63bfe6b7dc0656323ca8`
- the receipts exist and remain valid
- manual edits to generated surfaces are not accepted as proof

## Completion posture

The gate passes only when the generated surfaces are reproducible from SEJ authority and the evidence proves the hashes match.
