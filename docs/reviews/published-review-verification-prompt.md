# Published Review Verification Prompt

Use this prompt when you want ChatGPT to verify a published Google Doc against the governed repo artifacts.
Replace the placeholders with the surface you want checked.
The HTML presentation of this prompt should be conveyor-generated, not hand-authored.

## Paste Into ChatGPT

You are verifying a published Google Docs mirror of a governed review surface.

Open the Google Doc and compare it against the repo-backed posture below. Do not treat the Google Doc as source truth. Treat it as a published mirror that must stay faithful to the governed artifacts.

### Fill In

- `SURFACE_KEY`: `<surface-key>`
- `DOC_URL`: `<google-doc-url>`
- `EXPECTED_TITLE`: `<published-title>`
- `EXPECTED_LEVEL`: `<level>`
- `EXPECTED_BOUNDARY`: `<boundary>`

### Verify These Facts

- Title matches the expected surface name.
- The doc presents the surface as a governed review surface, not source truth.
- The doc preserves the current fidelity posture exactly.
- The doc does not claim Level 4 unless the receipts support it.
- The graph counts match the proof graph.
- The named receipts match the expected receipt family.
- The boundary statement is honest and not inflated.
- The missing Level 4 evidence is stated clearly.

### Expected Posture

- Surface: `SURFACE_KEY`
- Status: review-ready
- Fidelity: Level 3 achieved
- Level 4: blocked
- Graph posture: 9 nodes, 8 edges, zero orphan nodes, zero orphan edges
- Source truth: remains in contracts, receipts, visual models, and projection manifests

### Expected Missing Level 4 Proof

- Surface-specific accessibility acceptance
- Publish-ready approval posture
- Stronger interaction readiness proof
- User-facing equivalence review

### Expected Receipts To Look For

- Edge verification receipt
- SVG projection receipt
- Visual equivalence receipt
- HTML projection receipt
- CSS projection receipt
- Review-surface receipt

### What To Return

Return a short verification report with these fields:

- `status`: `passed` or `blocked`
- `title_check`
- `posture_check`
- `graph_count_check`
- `receipt_check`
- `boundary_check`
- `overclaims_found`
- `missing_claims`
- `notes`

### Rule

If the doc claims or implies Level 4 without the receipts, mark it blocked.

## Example Target

Published doc URL:

`DOC_URL`

Published surface:

`EXPECTED_TITLE`
