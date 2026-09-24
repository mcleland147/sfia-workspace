# SFIA Studio — Review Pack FULL
## PILOTABILITY & JOURNAL SEMANTIC INTEGRITY

- **timestamp**: `2026-09-24T19:46:18+02:00` (Europe/Paris)
- **cycle**: macro-lot construction / EVOL
- **profil SFIA**: Critical
- **GO Morris**: CONSUMED — construction locale + Review Pack + Handoff L3
- **NON autorisé ce cycle**: commit/push/PR/merge produit ; convergence/** ; doctrine v3 ; runtime v3 ADOPTED
- **branche**: `feat/sfia-studio-pilotability-journal-integrity-01` @ `dc462d9f` (= origin/main tip, uncommitted WIP)
- **base / origin/main**: `dc462d9f43661fb63f222f37691e80efb8650157` (PR #516 INTEGRATED)
- **runtime v3**: **NON ADOPTED**
- **Fake/Real**: DETERMINISTIC PRODUCT PROOF + local browser MealFlow reopen. REAL Journal semantic quality **NOT PROVEN**. DETERMINISTIC PROVEN ≠ READY FOR REAL.

## Verdict

**READY FOR MACRO PR READINESS**

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
| full suite | **4580 passed / 137 skipped** (409 files + 17 skipped) |

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

## 10. Fake / Real

- Deterministic unit/UI + local authenticated browser reopen of MealFlow
- **≠** REAL provider Journal semantic quality campaign
- **≠** READY FOR REAL

---

## 11. Réserves / dette

1. **Existing MealFlow Reservation blocking=true** for stabilized/out-of-scope statements remain until Pilot resolve or a future reclassification GO — gate+prompt prevent *new* Observation-as-blocker and instruct Nora; no silent auto-resolve.
2. **Legacy journal entries** have empty `stabilizedPoints`/`openPoints` until next CREATE/UPDATE with enriched delta.
3. **Live mid-session reconcile** proven by code path + tests; browser proof used reopen (reload) where durable ids already match — mid-turn live proof deferred to PR readiness / usage.
4. Roadmap tip still pre-#516 formally — truth-sync REQUIRED (below).

---

## 12. ROADMAP TRUTH-SYNC

- **REQUIRED**
- Sections: tip maintenance / Snapshot Git / Intégration Git / Nora programme / Product Experience continuity
- Delta: #516 + this lot (pilotability integrity) INTEGRATED pending PR; ordinals/rich journal/epistemic blocking gate/Lifecycle Cadrage/grouped applicability/one-shot resume hint
- **Aucune modification appliquée** this cycle

---

## 13. Décisions Morris encore nécessaires

1. MACRO PR READINESS GO (commit/push/PR) — next
2. Optional Roadmap truth-sync GO
3. Optional MealFlow epistemic cleanup / resolve of legacy blocking reservations
4. Branch cleanup — out of scope

---

## 14. Anti-claims

- NOT runtime v3 ADOPTED
- NOT Product Completion COMPLETE
- NOT Nora Cognitive Completion COMPLETE
- NOT READY FOR REAL
- NOT REAL Journal semantic quality PROVEN

---

**END FULL REVIEW PACK**
