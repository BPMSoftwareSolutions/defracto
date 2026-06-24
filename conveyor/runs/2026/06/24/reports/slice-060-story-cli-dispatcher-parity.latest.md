# slice-060-story-cli-dispatcher-parity

Status: passed with declared next blocker

## Goal

Make top-level CLI dispatch honor Story-to-TDD routes without turning the generated Node CLI into a host-language switchboard.

## Changes

Semantic dispatch now recognizes:

```text
story plan
story implement
```

through:

```text
contracts/semantic-operation-graphs/cli/ndd-cli.route-dispatch.execute.sog.v1.json
```

The generated Node CLI remains a resolver doorway and was not patched.

## Story Plan

`story plan` now routes to:

```text
contracts/semantic-operation-graphs/cli/ndd-story-plan-bootstrap.execute.sog.v1.json
```

Without `--run-date`, it blocks closed on:

```text
run_date_missing
```

With `--run-date 2026/06/24`, it materializes the bootstrap run envelope.

## Story Implement

`story implement --slice platform-agent-authority-routing` now routes to:

```text
contracts/semantic-operation-graphs/cli/ndd-story-implement.execute.sog.v1.json
contracts/semantic-operation-graphs/cli/ndd-story-implement-manifest-lane.execute.sog.v1.json
```

It loads:

```text
conveyor/runs/2026/06/24/platform-agent-authority-routing/run.manifest.v1.json
```

and blocks on:

```text
story_implement_lane_not_declared
```

instead of defaulting to:

```text
contracts/semantic-operation-graphs/projections/visual-proof-materialize.sog.v1.json
```

## Evidence

```text
evidence/cli/ndd-story-cli-dispatcher-parity.receipt.v1.json
```

Receipt emission hash:

```text
b3da5d53894f4e01f19d7950385ecf4b7692a8101008af431c35bd29ebf05213
```

## Guardrail Result

```text
generatedCliHostPatched: false
storyPlanRouteRecognized: true
storyImplementLoadsBootstrapManifest: true
storyImplementDefaultVisualProofFallbackRemoved: true
platformAgentAuthorityCreated: false
durableAuthorityCreatedByBootstrap: false
```

## Next

Declare the downstream platform-agent authority-routing lane through the conveyor so Slice 059 can move from:

```text
story_implement_lane_not_declared
```

to governed policy/gate/SOG projection or the next honest blocker inside that lane.

