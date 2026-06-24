# hash.shape.validate.v1 semantic capability story

As a Defracto semantic runtime designer,
I want hash.shape.validate.v1 to validate sha256:<64 lowercase hex> strings,
so that evidence SDK capabilities can validate hash fields without host-language product logic.

## Conveyor Order

1. Compose hash.shape.validate.v1 from existing SEJ language operations.
2. If missing generic language operations are found, emit a language capability gap.
3. If resolver evolution is required, request only tiny universal operations.
4. Never add hash product logic to the resolver.
