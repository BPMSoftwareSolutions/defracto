# Naming Doctrine

Defracto uses two primary naming namespaces.

`defracto.*` is the product and conveyor identity namespace.
`loc.*` is the runtime, resolver, semantic execution, and cross-language substrate namespace.

Use `defracto.*` when an artifact belongs to the product story, conveyor, projection, release, or user-facing governance surface.

Use `loc.*` when an artifact belongs to language-neutral execution, resolver capability, operation graphs, primitive catalogs, projection mechanics, or runtime conformance.

A `defracto.*` artifact may depend on `loc.*` authority.
A `loc.*` artifact must not depend on Defracto product meaning.

## Practical Rule

- `defracto` names the thing the operator experiences.
- `loc` names the mechanism that makes the thing real.

## Why This Exists

This keeps the resolver authority from looking like a competing project identity and keeps product surfaces from being mistaken for runtime substrate.
