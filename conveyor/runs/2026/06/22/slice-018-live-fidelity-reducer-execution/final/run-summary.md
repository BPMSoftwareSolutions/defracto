# Slice 018 Live Fidelity Reducer Execution

Status: blocked

The resolver accepted the contract file syntax, but the fidelity execution path still failed closed with `contract_missing`.

Observed blocker:
- `contract_missing`
- `A SEJ contract object is required.`

Attempted invocations:
- `node node_modules/@bpmsoftwaresolutions/sej-resolver-node/src/cli.cjs resolve --contract .tmp/fidelity-achievement-computation.fixture.json`
- `node node_modules/@bpmsoftwaresolutions/sej-resolver-node/src/cli.cjs resolve --contract contracts/sej/fidelity-achievement-computation.execute.sej.v1.json`

Control checks:
- Known repo SEJs still resolve successfully through the same resolver library.
- The fidelity contract remains the first unresolved shape boundary.

Next alignment needed:
- make the fidelity contract land in the exact SEJ shape the resolver accepts for live execution
- then rerun the reducer so the computed achievement report and receipts can be emitted from the resolver path
