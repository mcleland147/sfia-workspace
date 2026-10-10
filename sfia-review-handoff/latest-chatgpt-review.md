# Review Pack FULL — P6-HQA-02 / REC-01 — HQA-01 READ-ONLY Root Cause Investigation

**Horodatage :** 2026-10-10T22:19:50Z
**GO Morris :** "ok go" — investigation technique en lecture seule
**Cycle :** 9 — QA / validation — Critical
**Campaign :** P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
**Milestone :** P6 Human QA — IN PROGRESS
**Scenario :** HQA-01 — Guidance Only
**Mode :** READ ONLY — aucune correction Product, aucun nouveau test REAL, aucune mutation Product

---

## 1. Git Truth Check

| Check | Result |
|---|---|
| Workspace | `/Users/morris/Projects/sfia-workspace-p6-rec01-human-qa` |
| Branch | `qa/p6-hqa-02-rec01-human-qa` |
| HEAD | `f31bb8f610802c102edbe68889fb8ecf0339ec28` |
| `origin/main` | `f31bb8f610802c102edbe68889fb8ecf0339ec28` (identical) |
| status | clean (no staged/unstaged Product diffs from this investigation) |
| REC-01 on HEAD | PRESENT |
| Baseline Product | COMPATIBLE with investigation contract |

**Serving runtime at Human QA observation (separate worktree — not checked out):**

| Check | Result |
|---|---|
| Live Studio pid | 30453 |
| cwd | `/Users/morris/Projects/sfia-workspace/projects/sfia-studio/app` |
| branch | `qa/sfia-studio-p6-global-integrated-product-qa` |
| HEAD | `980064c05f1769f00d0ef85ef5284a899c6a0d73` |
| REC-01 | **ABSENT** |

No checkout of historical P6 branch. No reset/stash/clean/rebase. No other worktree sync.

---

## 2. Convergence Pre-check

- Convergence doctrine / roadmap consulted as routing context (read-only).
- Product Completion C1 / P2–P6 Product Simplification / Doctrine v3 (V3-F04/F08) remain reference only.
- No Convergence mutation. No runtime v3 promotion. No Delivery authorized.

---

## 3. Baseline REC-01 (integrated at investigation HEAD)

Central guards on `f31bb8f6`:

- `filterActiveCycleWorkItemsForProspectiveMaterialization` before `materializeActiveCycleWork`
- `qualifyProspectiveWorkRecommendationMaterialization` requires `relationKind`; missing → `missing_structured_contract` → no mint
- Exact `conversationGuidance` match → `conversational_channel_exact`
- Exact open duplicate → `exact_open_duplicate`
- `UNCERTAIN` / `ALREADY_COVERED` fail-closed; mint paths need COMPLETE coverage + exploitable `trackingRationale`
- Bounded cognitive trust: no second deterministic semantic materiality proof; no product-anchor pseudo-proof

Historical serving runtime materializes ACW Recommendations **without** this prospective filter.

---

## 4. Intent HQA-01

Pilot asked a purely explanatory nuance (task progress vs global project progress).
Expected: no unjustified durable Work Recommendation materialization.

---

## 5. Observation 8 → 9

UI: 8 → 9 Work Recommendations after the explanatory turn.
Product proof below confirms a real create (not UI-only).

---

## 6. Objet Epistemic + provenance

| Field | Value |
|---|---|
| epistemicItemId | `epi:acw:3879e9bc68c83f60d578` |
| projectId | `prj:60d7003d-3fbb-4298-a395-00f7704781a9` |
| cycleInstanceId | `cyc:trj-934f5d47cd06a233bb354fcc` |
| type | Recommendation |
| status | active |
| source | `active-cycle-work:nora` |
| createdAt | `2026-10-10T21:28:01.292Z` |
| statement | Lors de l’examen d’épisodes réels de manque de visibilité, distinguer ce que les responsables savent de l’état des tâches et ce qu’ils savent de la progression ou des risques du projet entier. |
| provenance.correlationId | `ltu:df0f94982562de55cf148802410240c0` |
| provenance.actor | `actor:nora` (agent, N1) |
| workRecommendationRelation | absent |

Sibling Observation same LTU: `epi:acw:d9c0f7582448f1bd890b`.
Active ACW Recommendations on project after turn: **9**.

**EPISTEMIC CREATION VERIFIED.**

---

## 7. LogicalTurnId / transcript

- `logicalTurnId` = `ltu:df0f94982562de55cf148802410240c0` (accepted)
- User seq 28 = Pilot explanatory question (exact match to observed message)
- Assistant seq 29 = relevant explanatory narrative
- Correlation via provenance.correlationId ↔ logical_turn_id

Transcript bodies not recopied beyond necessity; no secrets.

---

## 8. Sortie Nora structurée

**STRUCTURED NORA CANDIDATE OBSERVABLE** (session_items seq=7, output_text JSON).

- `conversationGuidance.kind` = `RECOMMEND_NEXT_STEP` (soft keep-in-mind; rationale says no presumed follow-up type)
- `activeCycleWork.items` = Observation + **Recommendation** (statement identical to durable WR)
- Absent: `trackingRationale`, `relationKind`, `relatedRecommendationRef`
- `recommendedOptionRef` = null
- Guidance statement ≠ Recommendation statement → not an exact conversational-channel match

No reconstructed narrative-only candidate used.

---

## 9. Qualification Product

| Topic | Finding |
|---|---|
| Path that ran | Historical `orchestrateTurn` → `materializeActiveCycleWork(acwItems)` without prospective filter |
| REC-01 qualify on serving tree | File absent |
| Coverage COMPLETE/PARTIAL at turn | Not persisted as a decision record for this turn; irrelevant to historical path (no prospective gate) |
| Exact duplicate vs prior 8 | Statement is new (mechanical exact match would not block) |
| Decision record persisted | No separate qualify decision row; effect is the Epistemic write |

**Attribution:** Case **A** demonstrated on historical runtime (Nora proposed durable WR; Product applied then-available guards = none for prospective WR). Cases B and C refuted. Observability sufficient for creation/turn/candidate/runtime.

**REC-01 counterfactual (investigation HEAD code, not re-run):** missing `relationKind` → `materialize:false` / `missing_structured_contract`.

---

## 10. Frontière provider (Fake/Real)

| Item | Result |
|---|---|
| Declared mode | HUMAN REAL QA |
| Fake silent fallback | Not observed |
| Provider-shaped ids | OpenAI Responses-like (`msg_…`, `rs_…` + encrypted_content) |
| Model / effort | **NOT VERIFIED** in session rows |
| Verdict | PROVIDER IDENTITY PARTIAL — REAL boundary likely; MODEL NOT VERIFIED |
| New provider calls | None |

---

## 11. Qualification du défaut (12 points)

1. **Intent :** explanatory guidance-only question.
2. **Attendu :** no unjustified durable WR.
3. **Observé :** 9th WR created + relevant narrative.
4. **Objet créé :** YES — `epi:acw:3879e9bc68c83f60d578`.
5. **Candidat structuré :** YES — ACW Recommendation + conversationGuidance.
6. **Qualification Product réelle :** historical materialize without REC-01 prospective filter.
7. **Cause démontrée :** baseline-contaminated Studio (pre-REC-01) accepted Nora ACW Recommendation on a guidance-only turn.
8. **Impact Pilote :** unjustified durable WR; trust in recommendation materiality reduced.
9. **Impact REC-01 :** does **not** prove integrated REC-01 failed; suggests REC-01 would fail-closed on this payload shape; live re-proof required.
10. **Sévérité P6 proposée :** **MAJOR** for Human QA validity / baseline control; **not** proven PRODUCT-BLOCKER on merged REC-01 baseline.
11. **Limites :** model id unknown; REC-01 counterfactual not live-executed; no decision telemetry row.
12. **Options (no impl) :** restart Studio on `f31bb8f6`; re-run HQA-01; no new semantic Product classifier; no HQA-02 this cycle; optional Pilot disposition of the 9th WR.

---

## 12. Cause démontrée / incertitudes

**Démontré :**

- Durable WR created on the explanatory turn.
- Structured Nora Recommendation emitted alongside conversationGuidance.
- Serving runtime = historical P6 HEAD without REC-01.
- Historical path has no prospective WR materialization filter.

**Incertain / non observé :**

- Model/effort identity.
- Live behavior of REC-01 schema-constrained Nora on the same Pilot question.
- Whether coverage would be PARTIAL (budget 12) on REC-01 path for this project state.

---

## 13. Éléments non observables

- Persisted prospective qualify decision object for the turn.
- Provider model/effort fields in session_items.
- Live REC-01 execution outcome (intentionally not re-run).

---

## 14. Sévérité proposée

**MAJOR** — Human QA baseline contamination + unjustified durable WR under pre-REC-01 runtime.
Not escalated to global P6 STOP without wider contamination proof.

---

## 15. Options de traitement

1. Restart Studio from REC-01 investigation WT / `f31bb8f6`.
2. Re-run HQA-01 Guidance Only (Morris=Pilot).
3. Keep HQA-02…07 NOT RUN / HQA-02 suspended for this path.
4. No Product code change from this cycle.
5. Optional Pilot hygiene for the already-created 9th WR.

---

## 16. Aucun changement Product

- No Product file edits.
- No SQLite writes (read-only URI `mode=ro&immutable=1`).
- No new Nora interaction / replay.
- No new REAL test authored.
- No project commit/push/PR/merge.

---

## 17. Réserves

- Observation was taken against a non-REC-01 serving binary.
- REC-01 effectiveness against this scenario remains a **re-QA** item, not a Delivery item.
- Provider model not attested.

---

## 18. Décisions Morris requises

1. Accept verdict below.
2. Authorize Studio restart on REC-01 baseline.
3. Authorize HQA-01 re-run on correct baseline.
4. Keep HQA-02 suspended until then.
5. Decline Product change authorization from this investigation.

---

## 19. Verdict

**HQA-01 — ROOT CAUSE QUALIFIED — PRODUCT CHANGE NOT AUTHORIZED**

---

## 20. Preuve QA créée (contenu exploitable — template v2.6)

### File: `.tmp-sfia-review/p6-global-integrated-qa/human-qa/rec01/hqa-01-root-cause-investigation.md`

```markdown
# HQA-01 — READ-ONLY Root Cause Investigation

campaignId: P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
milestone: P6 Human QA — IN PROGRESS
scenario: HQA-01 — Guidance Only
investigationAt: 2026-10-10T22:19:50Z
GO: Morris "ok go" — read-only technical investigation
mode: HUMAN REAL QA (declared) — no new Nora turn, no Product mutation

---

## RAW OBSERVATION

- Before Pilot message: 8 Work Recommendations to examine (UI).
- Pilot message (explanatory only): nuance between task progress vs global project progress.
- After: 9 Work Recommendations to examine (UI).
- New displayed statement matches Product Recommendation below.
- Nora conversational narrative judged relevant by Pilot.

## TECHNICAL FACT

### Git / runtime baseline at observation time

| Surface | Value |
|---|---|
| Investigation WT | `/Users/morris/Projects/sfia-workspace-p6-rec01-human-qa` |
| Investigation branch / HEAD | `qa/p6-hqa-02-rec01-human-qa` @ `f31bb8f610802c102edbe68889fb8ecf0339ec28` (= `origin/main`) |
| REC-01 on investigation HEAD | PRESENT (`qualifyProspectiveWorkRecommendationMaterialization.ts`) |
| Live Studio pid | 30453 |
| Live Studio cwd | `/Users/morris/Projects/sfia-workspace/projects/sfia-studio/app` |
| Live Studio Git | branch `qa/sfia-studio-p6-global-integrated-product-qa` @ `980064c05f1769f00d0ef85ef5284a899c6a0d73` |
| REC-01 on live Studio tree | ABSENT (qualify file missing; orchestrateTurn materializes ACW without prospective filter) |
| Product DB (read-only URI) | `…/.sfia-exec/new-project-campaign-01/product/oa-product.sqlite` |
| Session DB (read-only URI) | `…/.sfia-exec/new-project-campaign-01/product/nora-session.sqlite` |

### Durable Epistemic object (creation verified)

| Field | Value |
|---|---|
| epistemicItemId | `epi:acw:3879e9bc68c83f60d578` |
| projectId | `prj:60d7003d-3fbb-4298-a395-00f7704781a9` |
| project title | Gestion de projets pour petites entreprises |
| type | Recommendation |
| status | active |
| source | `active-cycle-work:nora` |
| createdAt / updatedAt | `2026-10-10T21:28:01.292Z` |
| statement | Lors de l’examen d’épisodes réels de manque de visibilité, distinguer ce que les responsables savent de l’état des tâches et ce qu’ils savent de la progression ou des risques du projet entier. |
| provenance.actor | `actor:nora` / role agent / N1 |
| provenance.correlationId | `ltu:df0f94982562de55cf148802410240c0` |
| provenance.cycleInstanceId | `cyc:trj-934f5d47cd06a233bb354fcc` |
| workRecommendationRelation | absent (null / empty) |
| Active ACW Recommendations on project after turn | 9 (8 prior + this one) |

Sibling item same correlationId:

| Field | Value |
|---|---|
| epistemicItemId | `epi:acw:d9c0f7582448f1bd890b` |
| type | Observation |
| createdAt | `2026-10-10T21:28:01.291Z` |
| source | `active-cycle-work:nora` |

Prior 8 active ACW Recommendations on same project have earlier `created_at` (2026-10-09 … 2026-10-10T13:58:48Z). The 9th is exclusively this LTU.

### Logical turn / transcript

| Field | Value |
|---|---|
| logicalTurnId | `ltu:df0f94982562de55cf148802410240c0` |
| logical_product_turns.status | accepted |
| logical_product_turns.created_at | `2026-10-10T21:27:54.156Z` |
| cycleInstanceId | `cyc:trj-934f5d47cd06a233bb354fcc` |
| session_key | `f1-default` |
| user seq 28 | matches Pilot explanatory question (154 chars) |
| assistant seq 29 | explanatory narrative on task vs project progress (1032 chars) |

Correlation is by `provenance.correlationId` = `logical_turn_id`, not by time proximity alone.

### Structured Nora candidate (session_items seq=7 — OBSERVABLE)

Top-level keys: narrative, conversationGuidance, activeCycleWork, journalDelta=null, lifecycleRecommendation=null, reservationDelta=null, preCycleRoutingAssessment.

**conversationGuidance**

- kind: `RECOMMEND_NEXT_STEP`
- scope: `ACTIVE_CYCLE`
- statement: soft keep-in-mind distinction for concrete episodes (conversational channel)
- rationale: links nuance to ongoing exploration without presuming a follow-up type is needed

**activeCycleWork.items**

1. Observation (confidence high, blocking false) — conceptual distinction task vs project progress
2. Recommendation (confidence medium, blocking false) — **same statement as durable WR**

**Absent on Recommendation item (observed payload):**

- `trackingRationale`
- `relationKind`
- `relatedRecommendationRef`
- `recommendedOptionRef` = null

Exact conversationGuidance statement ≠ Recommendation statement (REC-01 `conversational_channel_exact` would not fire).

### Product path that actually ran (historical runtime)

- `orchestrateTurn` @ historical HEAD calls `materializeActiveCycleWork({ items: acwItems, … })` with **no** `filterActiveCycleWorkItemsForProspectiveMaterialization`.
- `qualifyProspectiveWorkRecommendationMaterialization.ts` **does not exist** on the live Studio tree.

### REC-01 counterfactual (code on investigation HEAD `f31bb8f6` — not live re-run)

For the observed candidate (relationKind absent):

- `qualifyProspectiveWorkRecommendationMaterialization` → `{ materialize: false, reason: "missing_structured_contract" }`
- Therefore the Recommendation would be stripped by `filterActiveCycleWorkItemsForProspectiveMaterialization` before materialize.
- Observation would still be eligible (non-Recommendation items not blocked by WR coverage rules).

This counterfactual is **code analysis**, not a new REAL execution.

### Provider boundary

| Check | Result |
|---|---|
| Fake silent fallback observed | NO |
| OpenAI-shaped message id | YES (`msg_0039cd08…`) |
| Reasoning item with encrypted_content | YES (`rs_0039cd08…`) — Responses API shaped |
| Model / effort attested in session rows | NO |
| OPENAI_API_KEY visible in `ps eww` | NO (not dispositive) |
| Qualification | PROVIDER IDENTITY PARTIAL — OpenAI-shaped REAL likely; MODEL NOT VERIFIED |

## INFERENCE

1. The 8→9 UI observation corresponds to a real Product create of `epi:acw:3879e9bc68c83f60d578` on this turn.
2. Nora dual-channelled: appropriate conversational guidance **and** an ACW Recommendation treated as durable work.
3. Materialization succeeded because the **serving runtime lacked REC-01**, not because integrated `main`/`f31bb8f6` prospective guards failed in production.

## HYPOTHESIS (not required for verdict)

- On a REC-01 schema runtime, Nora might emit `relationKind`/`trackingRationale`; outcome would depend on those fields + coverage COMPLETE/PARTIAL. Not tested here.

## Attribution case (contract A/B/C/D)

| Case | Status |
|---|---|
| A — Nora proposed durable WR; Product applied its then-guards | **DEMONSTRATED** on historical runtime (guards = none for prospective WR) |
| B — Nora guidance-only; Product invented WR | **REFUTED** (ACW Recommendation present in structured output) |
| C — Historical/replay/projection only | **REFUTED** (new Epistemic ids + LTU correlation + created_at) |
| D — Traces insufficient | **REFUTED** for creation/turn/candidate/runtime; PARTIAL only for model id |

## RECOMMENDATION (no implementation)

1. Treat HQA-01 observation as **baseline-contaminated** Human QA (Studio served pre-REC-01 code).
2. Restart Studio from REC-01 baseline (`f31bb8f6` / investigation WT) before any further HQA scenario.
3. Re-run HQA-01 Guidance Only on that baseline; do not claim REC-01 closed this defect until that re-run.
4. Do **not** authorize a new Product semantic classifier / lexical rule from this cycle.
5. Optional Pilot hygiene: the 9th WR is a durable artifact of the contaminated turn; disposition is a Pilot/Product UX decision outside this investigation.

## MORRIS DECISION

- Accept verdict: ROOT CAUSE QUALIFIED — PRODUCT CHANGE NOT AUTHORIZED
- Authorize Studio restart on REC-01 baseline + HQA-01 re-run
- Keep HQA-02 suspended for this path until HQA-01 re-qualified on correct baseline
- No global P6 STOP from this local contamination alone

## Verdict

**HQA-01 — ROOT CAUSE QUALIFIED — PRODUCT CHANGE NOT AUTHORIZED**
```

### Append-only campaign ledger entry (historical evidence space)

Path: `/Users/morris/Projects/sfia-workspace/.tmp-sfia-review/p6-global-integrated-qa/evidence-ledger.jsonl` (append only)

```json
{"campaignId":"P6-GLOBAL-INTEGRATED-PRODUCT-QA-01","scenarioId":"HQA-01-GUIDANCE-ONLY","kind":"ROOT_CAUSE_INVESTIGATION_READONLY","at":"2026-10-10T22:19:50Z","epistemicItemId":"epi:acw:3879e9bc68c83f60d578","logicalTurnId":"ltu:df0f94982562de55cf148802410240c0","servingRuntimeHead":"980064c05f1769f00d0ef85ef5284a899c6a0d73","investigationHead":"f31bb8f610802c102edbe68889fb8ecf0339ec28","rec01OnServingRuntime":false,"verdict":"HQA-01 — ROOT CAUSE QUALIFIED — PRODUCT CHANGE NOT AUTHORIZED","evidencePath":"human-qa/HQA-01-REC01/hqa-01-root-cause-investigation.md","productMutation":false,"newNoraTurn":false}
```

Mirror path: `human-qa/HQA-01-REC01/hqa-01-root-cause-investigation.md` under the same historical campaign evidence root.

HQA-02…07 remain NOT RUN. HQA-02 remains suspended for this path. No parallel campaign.

---

## 21. Instruction ChatGPT

Lire : `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`
Vérifier preuves exploitables, causalité, qualification Product, incertitudes, sévérité, options, respect READ ONLY, verdict.
