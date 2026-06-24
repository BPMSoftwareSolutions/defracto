# slice-045-048-multi-provider-cognitive-implementation-green-and-sog-posture

Status: passed for cognitive red/green proof surface; SOG promotion remains blocked.

## Provider fallback

- Primary provider: gemini_flash
- Primary failure: primary_provider_503
- Fallback provider: openai
- Fallback receipt: evidence/workers/story-to-tdd.provider-fallback.receipt.v1.json
- OpenAI invocation receipt: evidence/workers/story-to-tdd.openai-invocation.receipt.v1.json
- Provider candidate granted authority: false
- Candidate accepted by hardening: true
- Silent substitution detected: false

## Red/green

- Generated test hash: sha256:cc56c2aea3d030818fc64509e21624e21506f29b0da1a21c62307c7ca932a5c8
- Red receipt: evidence/tdd/story-slug.cognitive-red-test.receipt.v1.json
- Red receipt hash: sha256:fa72a7e84307c5198b7c2bdeb307b4470c8a3e9466ce4604002432ea42973a80
- Generated implementation: generated/implementations/user-stories/story-slug.cognitive.cjs
- Generated implementation hash: sha256:d81f3758b7ea16b7522c9a64efcd31eb766ca525966c5e25db534417d6a7e416
- Green receipt: evidence/tdd/story-slug.cognitive-green-test.receipt.v1.json
- Green receipt hash: sha256:71b7abadc56047346beb73c47e1e74f27c54d5db292e2fc9935423f37c3daf4f
- Red/green cycle receipt: evidence/tdd/story-slug.cognitive-red-green-cycle.receipt.v1.json
- Test result: 4 tests, 4 passed, 0 failed

## Posture

- Proof surface accepted: true
- Durable product truth accepted: false
- SOG promotion required: true
- SOG posture receipt: evidence/sog/story-slug.cognitive-sog-promotion-posture.receipt.v1.json
