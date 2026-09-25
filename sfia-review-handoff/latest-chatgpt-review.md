# SFIA Studio — Review Pack FULL
## CYCLE RESERVATION MANAGEMENT & GATE-AWARE PILOTING

- **timestamp**: `2026-09-25T04:01:20+02:00` (Europe/Paris)
- **Macro ID**: `CYCLE-RESERVATION-PILOTING-01`
- **cycle**: 8 — Delivery / implémentation — EVOL — Critical
- **profil SFIA**: Critical
- **GO Morris**: CONSUMED — construction locale + runtime proof + Review Pack + Handoff L3
- **NON autorisé ce cycle**: commit/push/PR/merge produit ; convergence/** ; doctrine v3 ; runtime v3 ADOPTED
- **branche**: `feat/sfia-studio-cycle-reservation-piloting-01`
- **HEAD / origin/main**: `385c764458c5212913388d5e0e5b80f5390c23db` (PR #517 merged; dirty WIP expected)
- **runtime v3**: **NON ADOPTED**
- **Fake/Real**: DETERMINISTIC PRODUCT PROOF + LOCAL USER-FLOW PROOF (MealFlow legacy surface). REAL semantic reservation quality **NOT PROVEN**. ≠ READY FOR REAL.

## Verdict

**CYCLE RESERVATION MANAGEMENT & GATE-AWARE PILOTING — LOCAL MACRO COMPLETE — READY FOR MACRO PR READINESS**

**MERGE / PRODUCT COMMIT / PRODUCT PUSH / PRODUCT PR — NOT AUTHORIZED**

---

## 1. Git Truth

| Check | Result |
| --- | --- |
| Branch | `feat/sfia-studio-cycle-reservation-piloting-01` from `origin/main` |
| HEAD / origin/main | `385c7644…` (ahead/behind 0/0 before WIP) |
| Dirty | product WIP intentional + `.tmp-sfia-review/**` only |
| Protected convergence | untouched |
| SoT blobs matched | Doctrine `99232e45…` · Roadmap `df2ad6f3…` · C1 `806d672f…` · Nora-08 `1dfd8fd4…` · Template `948156a2…` · Routing `8949e764…` |

---

## 2. Sources (READ ONLY)

Build Doctrine, Roadmap, C1, framing 30/32/33/35/06/07/11/16, Nora OpenAI-native trajectory, CKC Delivery, cycle template, routing guide, prior handoff `500f6e54…` (PRE-MERGE #517 — Git truth primes).

v2.6 = external process only.

---

## 3. Convergence / Roadmap qualification

- Product Completion = historical COMPLETE/CLOSED — **not newly claimed**
- ACTIVE PRIORITY Nora Cognitive Completion PRESERVED
- Documentary Roadmap **lags** #516 / #517 / this macro selection
- **ROADMAP TRUTH-SYNC — REQUIRED** (READ ONLY this cycle — delta below)

---

## 4. OpenAI Capability Fit Check (R22)

| Disposition | Choice |
| --- | --- |
| KEEP | Agents Runner · same Product turn · structured output · tools · Product SQLite Session · journalDelta · EpistemicItem store |
| ADAPT | structured output (`reservationDelta`) · blocker derivation · Nora prompt compact · Lifecycle projection |
| COMPLETE (SFIA-specific) | Reservation metadata · ordinal · Journal refs · PROPOSE_RESOLUTION · Pilot confirm · FINALIZE gate semantics · Memory rail Réserves · Traiter avec Nora |
| FORBIDDEN avoided | second model call · second Nora runtime · NLP/regex semantics · parallel ReservationStore · OpenAI HITL as HumanDecision |

**STOP not triggered** — no new runtime/provider/engine required.

---

## 5. Capacité v3

**CYCLE RESERVATION MANAGEMENT & GATE-AWARE PILOTING**

Serves V3-F05 · LPS/trajectory · epistemology · cycle routing · HumanDecision · Product Experience · Nora Cognitive Completion (bounded).

Previous: PILOTABILITY & JOURNAL SEMANTIC INTEGRITY (#517 @ `385c7644`).

---

## 6. Architecture KEEP / ADAPT / COMPLETE / REPLACE

| Class | Assets |
| --- | --- |
| KEEP | EpistemicItem JSON store · LPS · HumanDecision · Journal · Lifecycle assess · Agents Runner · single Product turn · ConversationSurface |
| ADAPT | `EpistemicItem.reservation?` · `deriveLifecycleBlockers` · projection · Nora context · product turn schema |
| COMPLETE | `reservationDelta` · materialize · Memory tabs · Traiter avec Nora · confirm resolution · compact Lifecycle · deferred metadata (minimal) |
| REPLACE | Permanent Lifecycle « Réserves bloquantes » list + permanent « Marquer comme résolue » |
| FORBIDDEN | parallel Reservation store · blocker ledger · second model call · new dashboard |

---

## 7. Reservation contract (final)

```ts
reservation?: {
  ordinal: number
  title / summary
  impact: minor | moderate | major
  attentionBy: during_cycle | before_recommendation | before_decision | before_execution_contract | before_finalization
  finalizationRelevance: none | may_affect | must_resolve
  rationale / resolutionCondition
  journalEntryRefs[] / sourceTurnRefs[]
  resolutionProposal? { rationale, basisType, basisRefs, proposedAt, sourceTurnRefs? }
  deferred? { deferredAt, humanDecisionId?, targetCycleTypeId?, rationale? }
}
```

**FINALIZE gate**: active Reservation + `finalizationRelevance=must_resolve`
**Legacy fail-closed**: active Reservation without metadata + `blocking=true`
**Impact alone never blocks.**

Presentation states: POTENTIELLE · BLOQUE LA CLÔTURE · RÉSOLUE · REPORTÉE · À QUALIFIER · REJETÉE

---

## 8. Schema / migration

- Persistence: existing `oa_epistemic_items.payload_json` — **additive JSON only**
- **No DDL** · no DROP · no DB reset
- `UpdateEpistemicState` passes through `reservation`

---

## 9. Exact files (candidate)

**New (6):**
- `lib/oa/cycle/domain/reservationSemantics.ts`
- `lib/nora-cognitive-runtime/reservationDelta.ts`
- `lib/nora-cognitive-runtime/reservationPrompt.ts`
- `features/project-assistant/materializeReservationDelta.ts`
- `__tests__/nora-cognitive-runtime/cycleReservationPiloting.d0.test.ts`
- `__tests__/pre-m6-product-ui/cycleReservationMemoryRail.ui.test.tsx`

**Modified (17):** domain types/index, deriveLifecycleBlockers, lifecycleProjection, updateEpistemicState, noraProductTurnOutputType, orchestrateTurn, buildProjectSystemPrompt, studioCognitiveContext, actions, pilotLifecycleActions, JournalSurface(+css), LifecycleSurface, ProjectWorkspacePage, + 2 fixture tests.

Diff modified: **+1515 / −76** (tracked); +~1460 lines new files.

**Excluded:** `.tmp-sfia-review/**` (proofs/screenshots/sqlite)

---

## 10. Nora integration

- Same Product turn adds nullable `reservationDelta` (CREATE|UPDATE|PROPOSE_RESOLUTION — **no RESOLVE**)
- ACW Reservation stripped when reservationDelta present (CR-RSV-19)
- Compact reservation prompt section in studio cognitive context
- Prompt: openPoint ≠ Réserve; impact ≠ blocker; must_resolve alone gates FINALIZE

---

## 11. Journal integration

- `journalEntryRefs` on metadata; UI « Voir le sujet »
- Same turn may emit journalDelta + reservationDelta
- Memory rail: `Sujets (N) | Réserves (M)` — Journal default

---

## 12. HumanDecision / resolution

- Nora cannot resolve; PROPOSE_RESOLUTION only
- Pilot `Confirmer la levée` validates basis (clarification / human_decision / evidence) fail-closed
- Confirm does **not** auto-create HumanDecision
- `deferReservationAction` minimal metadata; **refuses must_resolve**; HumanDecision id optional / not auto-recorded (documented)

---

## 13. Finalization / Lifecycle UX

- Normal: compact « Réserves du cycle — X actives · … » + « Voir les réserves »
- Permanent resolve buttons **removed**
- Gate mode: « Clôture indisponible — N réserves à traiter » + Traiter avec Nora
- Obligation family still surfaces gate blockers (legacy MealFlow remain fail-closed until requalified)

---

## 14. CR-RSV acceptance (summary)

| Band | Status |
| --- | --- |
| Domain CR-RSV-01…10 | **PASS** (deterministic) |
| Nora CR-RSV-11…19 | **PASS** schema/materialize/prompt strip; live REAL CREATE not re-proven this pass |
| UI CR-RSV-20…28 | **PASS** rail + treat draft (desktop/mobile screenshots); responsive OK |
| Resolution CR-RSV-29…34 | **PASS** propose≠resolve + confirm action; basis fail-closed coded |
| Finalization CR-RSV-35…42 | **PASS** derive + Lifecycle compact + legacy gate |
| Defer CR-RSV-43…47 | **PARTIAL** — server action exists; UI not wired; no HD auto-record (honest gap, not STOP) |

---

## 15. Regression #516 / #517

Targeted: Journal surface · pilotability integrity · F2 transcript · lifecycle closure LC-B-17 still callable via legacy action (UI no longer exposes permanent resolve).

Full suite: **4591 passed / 137 skipped**

---

## 16. Validations

| Gate | Result |
| --- | --- |
| typecheck | **PASS** |
| lint | **PASS** (0 warnings/errors) |
| build | **PASS** (exit 0; pre-existing better-sqlite3 warning; transient PageNotFoundError log during collect — exit 0) |
| full Studio suite | **4591 passed / 137 skipped** (412 files + 17 skipped) |

---

## 17. Runtime proof (local)

Proof dir: `.tmp-sfia-review/cycle-reservation-piloting-proof/`

| Shot | Observation |
| --- | --- |
| `mealfow-desktop-journal-sujets-1440.png` | Sujets default; tabs Sujets(2)/Réserves(11); Cadrage |
| `mealfow-desktop-reserves-a-qualifier-1440.png` | Legacy cards **À QUALIFIER**; Traiter avec Nora; Impact —; modèle précédent |
| `mealfow-desktop-treat-with-nora-draft-1440.png` | Draft prérempli; **Envoyer** idle — **no auto-send**; no durable mutation from click |
| `mealfow-mobile-390-reserves.png` | Mobile reserves cards usable |

Lifecycle compact observed via DOM:
`Réserves du cycle — 11 actives · 0 peut affecter la clôture · 11 à qualifier` + Voir les réserves.

Legacy blockers remain fail-closed on FINALIZE assessment (expected until requalify via Nora).

**Not fully runtime-proven this pass:** brand-new reservationDelta CREATE → propose → confirm on disposable project with live model (covered deterministically).

---

## 18. Fake / Real

- DETERMINISTIC PRODUCT PROOF
- LOCAL USER-FLOW PROOF (MealFlow)
- REAL bounded reservation create/propose **not** executed this pass (provider available but not required for readiness gate)
- ≠ READY FOR REAL · ≠ global semantic reservation quality PROVEN

---

## 19. Roadmap truth-sync delta (READ ONLY — recommend)

Integrate at next GO:
- PR #516 merge `dc462d9f…` — Cycle Journal continuity
- PR #517 merge `385c7644…` — Pilotability & Journal semantic integrity
- Post-merge CI #594 attempt 2 SUCCESS
- Capability CYCLE RESERVATION MANAGEMENT & GATE-AWARE PILOTING — LOCAL MACRO COMPLETE (this branch WIP)
- Next after merge: MealFlow campaign — semantic reservation quality · gate-aware finalization · Nora Journal+Réserves continuity
- runtime v3 NON ADOPTED
- Product Completion remains historical CLOSED
- Nora Cognitive Completion **not** newly COMPLETE

---

## 20. Dettes / exit / gaps

1. Defer UI not exposed (server action only)
2. Defer does not auto-record HumanDecision (documented)
3. Composer context chip skipped — draft prefill used
4. Live REAL new-reservation end-to-end not re-run (deterministic + legacy UX proven)
5. Obligation label copy still says « Réserve bloquante » for gate family (semantic gate OK; wording ADAPT optional later)

---

## 21. Décisions Morris restantes

1. MACRO PR READINESS GO (commit/push/PR)
2. Roadmap truth-sync GO
3. Optional MealFlow requalification campaign of legacy À QUALIFIER
4. Optional Defer UI + HumanDecision wiring GO if structural report needed

---

## 22. Anti-claims

- NOT runtime v3 ADOPTED
- NOT READY FOR REAL
- NOT global semantic reservation quality PROVEN
- NOT Nora Cognitive Completion COMPLETE
- NOT new Product Completion closure
- NOT product commit/push/PR/merge performed

---

**END FULL REVIEW PACK**
