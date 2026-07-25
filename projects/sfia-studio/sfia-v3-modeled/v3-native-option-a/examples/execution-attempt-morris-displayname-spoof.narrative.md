# Narrative — Morris displayName spoof (runtime-only)

A client may present `provenance.actor.displayName: "Morris"` (or similar) without verified Morris identity.

JSON Schema cannot prove actor identity. Runtime MUST refuse Select/Start/Cancel/Retry that claim Morris authority based on displayName alone.

Authority requires verified N3 **and** `canActAsMorris: true` (server-side evidence). Spoof → `AUTHORITY_DENIED` / `ExecutionAuthorizationDenied`.

**Anti-claim:** system never equals Morris.
