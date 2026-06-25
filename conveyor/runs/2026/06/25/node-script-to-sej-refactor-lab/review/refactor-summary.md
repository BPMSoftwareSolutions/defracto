# Node Script to SEJ Refactor Lab

Status: Accepted for refactor review; replacement blocked.

Original script: 
generated/workers/node/vendor-evidence-readiness-checker.cjs

Target capability: 
vendor.evidence.readiness.evaluate.v1

Original behavior was characterized against a safe fixture. The semantic target and thin facade were projected. The missing generic operations were added as data-driven conveyor runtime-surface contracts, but before/after equivalence remains blocked until those operations are bound and executable in the refactor lane.

Runtime-surface operations added: object.read_field.v1, array.contains.v1, array.filter.v1, predicate.any.v1, result.project.v1.