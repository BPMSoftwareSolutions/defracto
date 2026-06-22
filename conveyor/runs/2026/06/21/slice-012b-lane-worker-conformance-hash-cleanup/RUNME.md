
# Slice 012B — Lane Worker Conformance Hash Cleanup

The executable path is already proven with resolver `@bpmsoftwaresolutions/sej-resolver-node@0.1.7`.

This cleanup only updates stale conformance authority.

## Superseded expected hash

```text
sha256:0201959b0367c8b0ad759d2ed6484fbc332876ad908c54bed5cbc4128eb54160
```

## New expected hash

```text
sha256:b0e05e3f92010a9844faa9bb500302cf96cb1737fdeade17470620659554e52d
```

## Run

```powershell
node node_modules/@bpmsoftwaresolutions/sej-resolver-node/src/cli.cjs resolve --sej contracts/sej/conform-lane-workers-node-facade.sej.v1.json
```

## Completion condition

The conformance receipt must show:

```text
targetArtifactHash == expectedArtifactHash == sha256:b0e05e3f92010a9844faa9bb500302cf96cb1737fdeade17470620659554e52d
```
