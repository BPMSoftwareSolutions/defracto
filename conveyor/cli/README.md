# CLI

This folder defines the live orchestration surface.

The `ndd` command is live-only and fail-closed:

- no dry run
- no mock mode
- no offline simulation
- no fake handoff output

If Gemini Flash cannot be reached through `LOC_GEMINI_API_KEY`, the command fails instead of inventing a response.
