# 07 — Validation findings and Morris decision pack

| Field | Value |
|-------|-------|
| **Gate** | `GO VALIDATION DELIVERY OPTION A — SFIA STUDIO V3-NATIVE — T-A3` |
| **Date** | 2026-07-24 (Europe/Paris) |
| **HEAD start** | `a71f0b44ee980092b93a7a06e505df60a66d07fb` |
| **HEAD final (validation)** | tip after docs commit (see handoff META / `git rev-parse HEAD`) |
| **Scope** | Prove defects with adversarial tests; fix only proven T-A3-scoped defects |
| **Morris** | **NOT VALIDATED** — recommendations only |

## Validation commits

| SHA | Message |
|-----|---------|
| `f1cf170f0995560e638ef45355ea88f39424ac7f` | fix(sfia-studio): correct T-A3 validation findings |
| `5d988dda0cc467a07d273726ea6f2b0929f9aaf6` | test(sfia-studio): strengthen T-A3 adversarial validation |
| `4ba555fd8d433d9a4cc4ca3c41c276aafe0d491c` | docs(sfia-studio): record T-A3 validation findings |

## Evidence method

1. Baseline: `__tests__/oa/decision` → **38 PASS**
2. Adversarial validation suite added (`validationAdversarial.test.ts`) → defects proven (B1–B4)
3. Fixes in `lib/oa/decision/**` only
4. Final: `__tests__/oa/decision` → **50 PASS** (+12)

## Findings

| ID | Title | Proven? | Blocker? | Fixed? | Evidence (test) |
|----|-------|---------|----------|--------|-----------------|
| **B1** | TOCTOU: authority/actor/selectedOptionId/status/subject/scope read after await | Yes | Yes | Yes | `ignores authority/selectedOptionId/actor mutated after await starts` · `ignores supersede selectedOptionId/authority mutated after await starts` |
| **B2** | Refuse/cancel overwrite grant (stale status outside txn) | Yes | Yes | Yes | `concurrent grant+refuse…` · `refuse after grant is STATE_CONFLICT` · `cancel after consume is STATE_CONFLICT` |
| **B3** | Concurrent supersede → dual accepted | Yes | Yes | Yes | `concurrent supersede of same prior yields one accepted successor` · `refuses supersede of already superseded prior` |
| **B4** | Silent LPS/epistemic link failures after decision persist | Yes | Yes | Yes | `LPS link version conflict fails closed and compensates orphan` · `LPS link without expectedLpsVersion fails closed` · `successful LPS link still returns ok` |
| **E** | actorId/evidence mismatch | Yes (already guarded) | Yes if regress | Guard confirmed + frozen evidence | `denies when evidence actorId mismatches…` · `rejects re-register escalating canActAsMorris` |
| **B5** | LPS satellite ids beyond `decisionIds` | Investigated | No (T-A1 debt) | **OPEN RESERVE** | Inherited |
| **R1** | Cross-store Project↔Cycle atomicity | Accepted | No | Reserve | Inherited |
| **R-T-A3-1** | No public Critical acknowledge API | Accepted | No | Reserve | Critical stays `proposed` |
| **R-T-A3-2** | Decision↔LPS / Decision↔Epistemic not single atomic txn | Accepted | Residual if compensate fails | Fail-closed + compensate supersede; residual OPEN | B4 compensation path |

## Fixes applied (T-A3 only)

1. **B1** — Snapshot authority, actor, selectedOptionId, status, nonStructuring, subject, scope (and related scalars) immediately after clone / before any await in `RecordHumanDecision` and `SupersedeHumanDecision`; persist only snapshots.
2. **B2** — `RefuseConfirmation` / `CancelConfirmation`: re-load under txn; refuse only from `requested`; cancel only from `requested`\|`granted`.
3. **B3** — Inside supersede txn: require `current.status === expectedPreStatus` and supersedable; reject concurrent second supersede; clear other accepted for subject.
4. **B4** — When LPS/epistemic link requested and fails: compensate by superseding the just-created decision; return `LPS_VERSION_CONFLICT` or `PERSISTENCE_FAILURE` (fail-closed). Residual orphan only if compensate itself fails → **R-T-A3-2**.
5. **Evidence immutability** — `MemoryAuthorityResolver.register` rejects overwrite of same `evidenceId` (`evidence_immutable`).

## Reserves (not closed here)

| ID | Reserve | Why not closed |
|----|---------|----------------|
| **B5** | T-A1 append still omits `reservationIds` / `contradictionIds` / … | T-A1 scope |
| **R1** | No strict cross-store Project↔Cycle atomicity | Foundation reserve |
| **R-T-A3-1** | No public T-A2 Critical acknowledge | Needs T-A2 API |
| **R-T-A3-2** | Cross-store Decision↔LPS/Epistemic; compensate residual | No distributed txn invented |
| **R-T-A3-3** | In-memory authority registry | NOT DATABASE SELECTED |
| **R-T-A3-4** | `AUTHORITY_SCOPE_MISMATCH` → modeled `AUTHORITY_DENIED` | Enum debt |

## Recommended Morris decisions (candidates — not consumed)

| ID | Recommendation |
|----|----------------|
| **T-A3-D01** | **ACCEPT** — Dual enums Decision.authority vs Confirmation.level |
| **T-A3-D02** | **ACCEPT** — Morris gate = N3 + `canActAsMorris` |
| **T-A3-D03** | **ACCEPT** — Never trust client `authorityLevel` / displayName; B1 snapshots |
| **T-A3-D04** | **ACCEPT** — One accepted per subject; B3 concurrent supersede fixed |
| **T-A3-D05** | **ACCEPT** — Supersede as immutable history / rollback |
| **T-A3-D06** | **ACCEPT WITH RESERVE** — In-memory authority + immutable register | R-T-A3-3 |
| **T-A3-D07** | **ACCEPT WITH RESERVE** — Critical cycle: record without status mutate | R-T-A3-1 |
| **T-A3-D08** | **ACCEPT** — LPS `decisionIds` non-breaking append; B5 remains | B5 |
| **T-A3-D09** | **ACCEPT WITH RESERVE** — Detail→modeled mapping; B4 fail-closed | R-T-A3-4 |
| **T-A3-D10** | **ACCEPT WITH RESERVE** — Foundation-only; B4 compensate; R1 / R-T-A3-2 | R1 / R-T-A3-2 |

## Verdict (exact allowed string)

**SFIA STUDIO V3-NATIVE OPTION A T-A3 VALIDATION PASSED AFTER CORRECTION — MORRIS DECISION REQUIRED**

## Anti-claims

Pas MERGED · Pas Morris validated décisions · Pas T-A4 AUTHORIZED · Pas DATABASE SELECTED · Pas B5 / R1 / R-T-A3-* CLOSED · Pas `VALIDATED WITH RESERVES` comme claim Morris · Pas push / PR
