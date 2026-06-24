# slice-058b-run-envelope-path-projection-language-support

Status: blocked
Blocker: resolver_package_support_missing
Required operation: run.envelope.paths.project.v1

## Result

The operation is declared, but the approved resolver package currently installed and published as `@bpmsoftwaresolutions/sej-resolver-node@0.1.8` does not expose `run.envelope.paths.project.v1`.

The operation was not satisfied by editing ignored `node_modules`.

## Resolver Evolution Request

`contracts/resolver-authority/run-envelope-path-projection.resolver-evolution-request.v1.json`

## Guardrail

Runtime evolution is allowed only for tiny universal language mechanics. This request projects paths only. It must not create files, materialize manifests, emit receipts, interpret stories, or create durable authority.

## Next

`slice-058c-conveyor-owned-story-run-bootstrap` remains blocked until the approved resolver package supports the operation.
