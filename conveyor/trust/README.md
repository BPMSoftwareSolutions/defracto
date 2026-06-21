# Trust Fabric

This folder defines the surface-signature language for the conveyor.

Every meaningful lane artifact should be able to point at a trust signature that shows:

- who attested it
- which worker runtime produced it
- which artifact it covers
- when it was attested
- how it ties back to the handoff chain

The canonical Gemini Flash credential environment variable for this conveyor is `LOC_GEMINI_API_KEY`.

No file should imply trust fabric alignment without an explicit signature object or an explicit blocked reason.
