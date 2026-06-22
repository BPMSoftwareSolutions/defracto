
# Slice 013 — NDD CLI Conveyor Run Execution Authority

## Materialize CLI

```powershell
node node_modules/@bpmsoftwaresolutions/sej-resolver-node/src/cli.cjs facade:generate --sej contracts/sej/materialize-ndd-cli-node.sej.v1.json
```

## Run by slice

```powershell
node generated/cli/node/ndd.cjs conveyor run --slice slice-012-lane-worker-mature-materialization
```

## Run by manifest

```powershell
node generated/cli/node/ndd.cjs conveyor run --manifest conveyor/runs/2026/06/21/slice-012-lane-worker-mature-materialization/run.manifest.v1.json
```

## Pass condition

The CLI must not delegate to `../../../bin/ndd.cjs`.

The generated CLI is only a doorway. The conveyor-run behavior must come from:

```text
contracts/semantic-operation-graphs/cli/ndd-cli.conveyor-run.execute.sog.v1.json
```
