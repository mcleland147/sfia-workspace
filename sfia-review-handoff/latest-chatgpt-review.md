# SFIA Studio — Review Pack FULL
## PILOTABILITY & JOURNAL SEMANTIC INTEGRITY

- **timestamp**: `2026-09-24T21:43:45+02:00` (Europe/Paris) — MACRO PR READINESS & INTEGRATION
- **cycle**: Macro PR Readiness / intégration Git — EVOL — Critical
- **profil SFIA**: Critical
- **GO Morris**: CONSUMED — inspection + commit + push + PR + CI + Review Pack + Handoff L3
- **NON autorisé ce cycle**: **MERGE** ; suppression branche ; convergence/** ; doctrine v3 ; runtime v3 ADOPTED ; cleanup MealFlow historique ; pivot architecture
- **branche**: `feat/sfia-studio-pilotability-journal-integrity-01`
- **base / origin/main**: `dc462d9f43661fb63f222f37691e80efb8650157` (PR #516 INTEGRATED; main unchanged)
- **commit produit**: `c0bb0236ebbbb45824958cc7e9ecef6277d440ab`
- **PR**: [#517](https://github.com/mcleland147/sfia-workspace/pull/517)
- **runtime v3**: **NON ADOPTED**
- **Fake/Real**: DETERMINISTIC PRODUCT PROOF + LOCAL RUNTIME USER-FLOW PROOF (MealFlow mid-session, no reload). REAL Journal semantic quality **NOT PROVEN**. ≠ READY FOR REAL.

## Verdict

**PR OPEN — READY FOR MERGE REVIEW**

**MERGE NOT AUTHORIZED**

---

## 1. Git Truth

| Check | Result |
| --- | --- |
| Branch | `feat/sfia-studio-pilotability-journal-integrity-01` created from `origin/main` |
| HEAD / origin/main | `dc462d9f…` |
| Dirty | product WIP intentional + `.tmp-sfia-review/**` only |
| Foreign worktree main stale | known / not modified |
| Protected convergence | untouched |

---

## 2. Sources

Build Doctrine, Roadmap (READ ONLY), C1, framing 30/32/33/35, UX PE 01/02, CKC Delivery, cycle template, routing guide, handoff `33152dfc…` (PR #516 post-merge).

v2.6 = external process only.

---

## 3. Capacité v3

**PILOTABILITY & JOURNAL SEMANTIC INTEGRITY** — ADAPT/COMPLETE of PROJECT CONVERSATIONAL CONTINUITY & CYCLE JOURNAL (#516).

Serves V3-F02 / V3-F05 / epistemic integrity / Product Experience / Nora Cognitive Completion (bounded).

---

## 4. MealFlow observations → root causes

| Observation | Confirmed cause | Fix track |
| --- | --- | --- |
| Sources `pt:*` before reload | UI messages local ids; refresh did not reconcile messages | A |
| No Sujet N / unstable order | list by `updated_at`; no ordinal | B |
| All `Actif` ≠ current | status conflated with current | B |
| Thin entry (no stab/open) | schema/delta lacked points | C |
| Topics too broad / SPLIT weak | prompt weak on granularity | D |
| Stabilized constraints as blocking | Nora emitted Reservation blocking; Observation could carry blocking | E |
| Lifecycle title `Cycle` | no catalog label on projection | F |
| Duplicate applicability labels | 5 unknown blockers → same string | F |
| Restored hint after live turns | hint keyed only on `available` | G |

Rejected: second Journal engine, regex summarizer, RAG, parallel blockers store, new EpistemicItemType.

---

## 5. Architecture KEEP / ADAPT / COMPLETE

| Asset | Disposition |
| --- | --- |
| ProductSqliteSession + journal tables | KEEP + ALTER migration |
| journalDelta same-turn structured output | ADAPT (points fields) |
| Journal Agents tools | ADAPT (return ordinal/points) |
| JournalSurface / useProductConversation | ADAPT |
| Active Cycle Work materialize | ADAPT (blocking gate) |
| Lifecycle projection / presentation | ADAPT |
| Automatic Resume presentation | ADAPT (one-shot hint) |

No parallel architecture.

---

## 6. Migrations

`ensureCycleJournalRichColumns()`:

- `topic_ordinal INTEGER` + deterministic backfill (created_at + id)
- `stabilized_points_json` / `open_points_json` DEFAULT `[]`
- idempotent ALTER; no DROP; legacy rows readable

---

## 7. Files changed (product)

21 product files + 1 new test file (+726 / −93 vs HEAD excluding `.tmp`).

Key seams: `cycleJournal*`, `productSqliteSession`, `noraProductTurnOutputType`, `useProductConversation`, `JournalSurface*`, `presentationLabels`, `LifecycleSurface` / `lifecyclePresentation`, `lifecycleProjection`, `actions`, `buildProjectSystemPrompt`, `materializeActiveCycleWork`, tests.

---

## 8. Test matrix

### JPI-01…18 / EPI / LIFE / ARH

Covered by `pilotabilityJournalIntegrity.d0.test.ts` + UI/AR/journey updates:

- Ordinals stable / UPDATE order / ARCHIVE·MERGE·SPLIT no renumber
- Rich points persist; legacy empty; compact prompt
- CREATE/UPDATE/SPLIT/MERGE generic semantics
- Resume hint only with `allowRestoredHint`
- Framing catalog label; applicability grouped
- Blocking gate: only Reservation; derive ignores Observation blocking

### #516 regression

`cycleJournalContinuity.d0` + `cycleJournalSurface` + `automaticProjectResume` + `w1RecoveryFoundation` — PASS.

### Validations

| Gate | Result |
| --- | --- |
| typecheck | PASS |
| lint | PASS |
| build | PASS |
| full suite | **4580 passed / 137 skipped** (409 files + 17 skipped) — *historical pre-F2-seam; superseded by authoritative **4582 / 137*** |

---

## 9. Runtime proof (local MealFlow)

Project `prj:7c3d2c3d-…` MealFlow reopen on localhost:3020:

1. Restored hint on open — observed
2. Journal **Sujet 1 / Sujet 2**, **En cours** on current — observed
3. Exchanges expand → **Pilote/Nora** readable excerpts (no raw `pt:*`) — observed
4. Lifecycle title **Cadrage** — observed
5. Blockers: **Effets gouvernés à qualifier (5 familles)** grouped — observed
6. Historical Reservation blocking statements still listed (pre-existing MealFlow data) — documented reserve

Screenshots (`.tmp` only, never commit):

- `pilotability-journal-integrity-proof/mealfow-desktop-1440-journal-exchanges.png`
- `pilotability-journal-integrity-proof/mealfow-desktop-lifecycle-cadrage.png`
- `pilotability-journal-integrity-proof/mealfow-mobile-390-journal.png`

---

## 10. LIVE MID-SESSION RUNTIME PROOF

- **timestamp**: `2026-09-24T20:03→20:48 Europe/Paris`
- **branche / HEAD base**: `feat/sfia-studio-pilotability-journal-integrity-01` @ `dc462d9f` (dirty WIP expected)
- **runtime URL**: `http://localhost:3020/studio/projects/prj:7c3d2c3d-0b11-42d1-a01d-ffad41f402dd`
- **projet**: MealFlow (existing)
- **aucun reload** between send and Journal validation (same browser session; URL unchanged)

### Discovery during proof

1. First attempts (`LIVE-PROOF-…-A/B`) were routed to **F2 formalization** (`update_existing_project_topic` DECISION_REQUIRED). F2 persisted Memory B `session_items` only — **not** `pilot_transcript_turns` — so post-turn reconcile wiped local UI messages and Journal was not updated.
2. **Same-macro Track A correction**: `persistCanonicalF2AssistantTurn` now also appends Pilote durable transcript turns (`canonicalConversationSession.ts` + `orchestrateF2.ts` pass `cycleInstanceId`).
3. Soft framing continuation (`LIVE-PROOF-…-C/D`) routed **F1** → transcript + `journalDelta` UPDATE with new `pt:*` refs.

### LIVE-01…08

| ID | Result |
| --- | --- |
| LIVE-01 | **PASS** — new Pilote exchange in Journal sources immediately (`LIVE-PROOF-20260924-C`) |
| LIVE-02 | **PASS** — Nora reply source present immediately |
| LIVE-03 | **PASS** — labels `Pilote` / `Nora` |
| LIVE-04 | **PASS** — human excerpts |
| LIVE-05 | **PASS** — no nominal raw `pt:*` |
| LIVE-06 | **PASS** — click Pilote source → transcript turn in view (`ConversationSurface_turnMine`, LIVE-C visible) |
| LIVE-07 | **PASS** — click Nora source → Nora reply focused |
| LIVE-08 | **PASS** — no reload/reopen |

### Second turn (anti-fluke)

| Marker | Result |
| --- | --- |
| `LIVE-PROOF-20260924-D` | **PASS** — transcript rows `pt:4ed1e255…` / `pt:067e155f…`; Journal UPDATE; Journal source preview `Pilote LIVE-PROOF-20260924-D…` + Nora; click navigates; still no reload |

### Screenshots (`.tmp-sfia-review/pilotability-journal-integrity-proof/`)

1. `live-mid-session-journal-preview-before-reload.png`
2. `live-mid-session-journal-focus-before-reload.png`
3. `live-mid-session-second-turn-before-reload.png`

### Code touch (same macro only)

- `app/features/project-assistant/f2/canonicalConversationSession.ts` — F2 persist also writes `pilot_transcript_turns`
- `app/features/project-assistant/f2/orchestrateF2.ts` — pass `activeCycleInstanceId`

### Tests rejoués after code change

- `pilotabilityJournalIntegrity.d0` — 8 PASS
- `cycleJournalSurface.ui` — 6 PASS
- `automaticProjectResume.ui` — 4 PASS
- `tsc --noEmit` — PASS
- Prior full suite reference **4580 / 137** was pre-F2-seam; authoritative post-F2 validation is **4582 / 137**

### Fake/Real (this proof)

- **LOCAL RUNTIME USER-FLOW PROOF** (closes MealFlow live-before-reload anomaly)
- **≠** REAL Journal semantic quality PROVEN
- **≠** READY FOR REAL
- **≠** runtime v3 ADOPTED

---

## 11. Fake / Real

- Deterministic unit/UI + local MealFlow reopen (prior) + **live mid-session user-flow** (this update)
- **≠** REAL provider Journal semantic quality campaign
- **≠** READY FOR REAL

---

## 12. Réserves / dette

1. **Existing MealFlow Reservation blocking=true** for stabilized/out-of-scope statements remain until Pilot resolve or a future reclassification GO — gate+prompt prevent *new* Observation-as-blocker and instruct Nora; no silent auto-resolve.
2. **Legacy journal entries** have empty `stabilizedPoints`/`openPoints` until next CREATE/UPDATE with enriched delta.
3. ~~Live mid-session reconcile deferred~~ — **CLOSED** by LIVE-01…08 + second-turn proof (this update).
4. Roadmap tip still pre-#516 formally — truth-sync REQUIRED (below).
5. F2 formalization still does not emit `journalDelta` (by design); Journal updates remain on F1/cognitive structured path. F2 now at least keeps Pilote transcript coherent for reconcile.

---

## 13. ROADMAP TRUTH-SYNC

- **REQUIRED** (READ ONLY this cycle)
- Sections: tip maintenance / Snapshot Git / Intégration Git / Nora programme / Product Experience continuity
- Delta: #516 + this lot (pilotability integrity + live mid-session evidence + F2 pilot transcript seam) INTEGRATED pending PR
- **Aucune modification appliquée** this cycle

---

## 14. Décisions Morris encore nécessaires

1. **MERGE GO** — cycle Morris distinct (NOT authorized here)
2. Optional Roadmap truth-sync GO
3. Optional MealFlow epistemic cleanup / resolve of legacy blocking reservations
4. Branch cleanup — out of scope

---

## 15. Anti-claims

- NOT runtime v3 ADOPTED
- NOT Product Completion COMPLETE
- NOT Nora Cognitive Completion COMPLETE
- NOT READY FOR REAL
- NOT REAL Journal semantic quality PROVEN
- **MERGE NOT AUTHORIZED**

---

## 16. POST-F2-FIX FINAL VALIDATION (pre-integration evidence)

- **timestamp**: `2026-09-24T21:28→21:30 Europe/Paris`
- **branche**: `feat/sfia-studio-pilotability-journal-integrity-01`
- **HEAD / origin/main then**: `dc462d9f43661fb63f222f37691e80efb8650157` (ahead=0, dirty WIP)
- **Parasites**: `.tmp-sfia-review/**`, sqlite proofs — **excluded** from Git candidate

### F2 seam coverage

`app/__tests__/project-assistant/f2PilotTranscriptPersist.d0.test.ts`

| Invariant | Result |
| --- | --- |
| F2 persist writes durable user+assistant `pt:*` | **PASS** |
| `cycleInstanceId` attached when provided | **PASS** |
| retry same `logicalTurnId` → no transcript duplicate | **PASS** |
| reconcile-shaped messages retain turn content | **PASS** |
| no invented `journalDelta` / mutation ledger empty | **PASS** (2/2) |

### Validations (authoritative local)

| Gate | Result |
| --- | --- |
| typecheck | **PASS** |
| lint | **PASS** (0 warnings/errors) |
| build | **PASS** (pre-existing `better-sqlite3` resolve warning on w2 eval path — not new) |
| full Studio suite | **4582 passed / 137 skipped** (410 files + 17 skipped) — authoritative; supersedes historical 4580 |

---

## 17. MACRO PR READINESS & INTEGRATION

- **timestamp**: `2026-09-24T21:36→21:43 Europe/Paris`
- **pre-check SoT** (READ ONLY, matched expected):
  - Build Doctrine `99232e4582e4ef4cf489020a46b818ebb41ac397`
  - Roadmap `df2ad6f3c4cd5504d586f344bc0d76f737b0ce65`
  - C1 `806d672fe21ad82a641bf88fe95fc87870481105`
  - Template `948156a21309ef99c3aaed6410947dc6b9bc569a`
  - Routing `8949e764d96faf3fa812d39307dbc298b500f5ef`
  - prior handoff tip `d1241164…` / blob `ed23c8a4…`

### Git Truth pré-intégration

| Check | Result |
| --- | --- |
| Branch | `feat/sfia-studio-pilotability-journal-integrity-01` |
| HEAD then | `dc462d9f43661fb63f222f37691e80efb8650157` |
| origin/main | `dc462d9f43661fb63f222f37691e80efb8650157` (ahead/behind 0/0) |
| Dirty | product candidate + `.tmp-sfia-review/**` only |
| convergence/** | untouched |
| Secrets / DB / PNG in product | none |

### Candidate purity / staging

- Explicit path staging only (no `git add .`)
- **25 files** product+tests — **1425 insertions / 93 deletions**
- Excluded: `.tmp-sfia-review/**` (pack, screenshots, sqlite proofs)

### Critical seams confirmed in commit

1. Migration additive/idempotent (`topic_ordinal`, points JSON; no DROP)
2. Journal ordinal / En cours / stabilized+open / lineage / durable refs
3. Live reconcile UI → `pt:*` without reload
4. F2 durable pilot transcript + retry-safe `logicalTurnId` + `cycleInstanceId`; no invented journalDelta
5. Epistemic: only Reservation+blocking → blockers
6. Lifecycle Cadrage + applicability UX grouping (Truth C unchanged)
7. Automatic Resume one-shot hint

### Commit / push / PR

| Field | Value |
| --- | --- |
| Commit | `c0bb0236ebbbb45824958cc7e9ecef6277d440ab` |
| Message | `feat(studio): strengthen journal pilotability and semantic integrity` |
| Remote head | `c0bb0236…` == local HEAD (no force push) |
| origin/main | still `dc462d9f…` |
| PR | **#517** — https://github.com/mcleland147/sfia-workspace/pull/517 |
| Base / Head OID | `dc462d9f…` / `c0bb0236…` |
| Files / +/- | **25** / **+1425 / −93** |
| mergeable | **MERGEABLE** |
| mergeStateStatus | **CLEAN** |

### CI (required)

| Check | Result |
| --- | --- |
| Detect SFIA Studio changes | **SUCCESS** |
| Build and validate SFIA Studio | **SUCCESS** (6m25s) |
| SFIA Studio Required Gate | **SUCCESS** |
| Workflow | https://github.com/mcleland147/sfia-workspace/actions/runs/36049317065 |

### Local validation (pre-commit evidence, no product drift)

**4582 passed / 137 skipped** — authoritative

### Roadmap truth-sync

**REQUIRED** — document only: #516 + this lot (rich Journal, ordinal/order/current, semantic integrity, Lifecycle Cadrage, applicability grouping, AR one-shot, F2 durable transcript, live proofs). **NOT in PR #517**.

### MERGE

**NOT AUTHORIZED** — distinct Morris cycle.

---

**END FULL REVIEW PACK**
