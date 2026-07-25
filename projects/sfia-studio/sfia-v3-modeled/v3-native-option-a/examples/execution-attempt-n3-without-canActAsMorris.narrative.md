# Narrative — N3 without canActAsMorris (runtime-only)

An actor may hold authorityLevel N3 without `canActAsMorris: true`.

**N3 ≠ Morris.** Runtime MUST refuse Morris-only actions (emergency stop, Morris-gated paths) when `canActAsMorris` is absent or false → `AUTHORITY_DENIED`.

Schema models Attempt structure only; this gate is runtime AuthorityEvidence.
