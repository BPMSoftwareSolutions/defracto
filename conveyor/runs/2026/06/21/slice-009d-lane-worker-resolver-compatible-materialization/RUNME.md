
# Slice 009D — Lane Worker Resolver-Compatible Materialization

Run these from the repo root:

```powershell
node node_modules/@bpmsoftwaresolutions/sej-resolver-node/src/cli.cjs facade:generate --sej contracts/sej/materialize-lane-workers-node.sej.v1.json
node node_modules/@bpmsoftwaresolutions/sej-resolver-node/src/cli.cjs resolve --sej contracts/sej/conform-lane-workers-node-facade.sej.v1.json
```

This package intentionally uses `artifact.content` because the current resolver does not support `artifact.contentRef` or `facade.compose.v1`.

The semantic source remains:

```text
contracts/sej/materialize-lane-workers-node.semantic.sej.v1.json
```

The compiled bridge is:

```text
contracts/sej/materialize-lane-workers-node.sej.v1.json
```

The bridge is not semantic source truth.
