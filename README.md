# Conveyor Lane Contracts

This bundle replaces placeholder lane contracts with runnable lane authority.

Each lane declares:

- inputs
- outputs
- worker runtime
- handoff behavior
- evidence requirements
- blocked conditions
- allowed responsibilities
- forbidden responsibilities
- next lane

These contracts are designed for the Defracto / NDD handoff conveyor:

```text
00 capture source
-> 01 extract story
-> 02 author canonical spec
-> 03 author semantic contract
-> 04 project runtime surface
-> 05 materialize artifacts
-> 06 run conformance
-> 07 render visual evidence
-> 08 review evidence
-> 09 prepare release
-> 10 ship
-> 11 observe telemetry
```
