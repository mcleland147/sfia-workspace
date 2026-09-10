# ChatGPT Review Pack — FULL

- Timestamp (Europe/Paris): **2026-09-10T21:30:31 CEST**
- Campaign: Greenfield Product Proof
- Package: Lifecycle Closure Corrective — **PHASE A / ROOT-CAUSE ANALYSIS ONLY**
- Cycle SFIA (externe): 8 — Delivery / implémentation
- Typologie: EVOL
- Profile: CRITICAL
- Niveau de preuve visé ici: ROOT CAUSES QUALIFIED / DETERMINISTIC DIAGNOSTIC
- REAL new calls this phase: **ZERO**
- Product code modifications: **NOT PERFORMED / NOT AUTHORIZED**
- Product commit / push / PR / merge: **NOT PERFORMED**
- Product Completion: **CLOSED** — not reopened
- Runtime v3: **NON ADOPTED**
- Morris GO consumed: **ANALYSE EN VUE DE CORRECTION UNIQUEMENT**
- Correction code: **awaiting distinct Morris GO after ChatGPT review of this diagnostic**

---

## 1. Local Git Truth

| Check | Value | Match |
|---|---|---|
| Worktree | `/Users/morris/Projects/sfia-product-proof-corr-qual-to-governed-cycle-a9f6c310` | YES |
| Branch | `delivery/sfia-studio-product-proof-qual-to-governed-cycle` | YES |
| HEAD | `624642fff960b41be27fe0476404cf570cfa8b22` | YES |
| Parent | `0ac7b54b677cc7182fd36189fcc186202e8a2232` | YES |
| origin/main | `a9f6c310a0826d0e5bd6f7264603382a86564db1` | YES |
| Product tracked mutation | **ZERO** under `projects/sfia-studio` | YES |

Exact status (non-Product / review temps only):

```
 M .tmp-sfia-review/chatgpt-review.md
?? .tmp-sfia-review/acw-same-lot-corr-diffs/
?? .tmp-sfia-review/candidate-bridge-diffs/
?? .tmp-sfia-review/candidate-f70-diffs/
?? .tmp-sfia-review/live-diagnostic/
?? .tmp-sfia-review/publish-review-handoff.out
?? .tmp-sfia-review/runtime-captures/
?? .tmp-sfia-review/sfia-studio-product-proof-dev.pid
?? .tmp-sfia-review/lifecycle-closure-phase-a-forensics/   (created this phase)
```

`git diff --stat` / cached: only `.tmp-sfia-review/**` — **SAFE FOR ROOT-CAUSE ANALYSIS**.

Pre-publish handoff tip was `5577b703749cfdceb9c9bbee5ad2d178f1fbbf6d` (env readiness LIGHT). This pack supersedes it on `sfia/review-handoff`.

---

## 2. Sources read (ref = last commit touching file)

| Source | Ref | Usage |
|---|---|---|
| `prompts/templates/sfia-cycle-execution-template.md` | 085828e1 | Cycle execution / handoff rules |
| `method/.../sfia-cycle-routing-guide.md` | da0618db | External routing |
| `method/.../sfia-chatgpt-cursor-operating-model.md` | 085828e1 | Operating model |
| `method/.../sfia-rules-and-guardrails.md` | 085828e1 | Guardrails |
| `method/.../sfia-v2.5-project-cycles-method-candidate.md` | 2014e941 | External process only |
| `method/.../pilots/04-qa-validation.md` | 2014e941 | QA pilot |
| `convergence/sfia-studio-convergence-build-doctrine.md` | 8383c2e5 | HOW (R18/R19/R21/R22) |
| `convergence/sfia-studio-convergence-roadmap.md` | 1b4f78ff | WHERE |
| `product-completion/01-product-completion-cadrage.md` | 75d77e21 | CLOSED C1 |
| v3 framing 30 / 32 / 33 / 35 | 75d77e21 | Destination product; NON ADOPTED runtime |
| Product HEAD code + tests listed in §3 | 624642ff | Runtime truth |

Applied: Git=SoT; Recommendation ≠ HumanDecision; Pilote authority; no parallel architecture; R18 same-lot; R21 deterministic ≠ REAL; R22 OpenAI-native-first; Product Completion CLOSED; runtime v3 NON ADOPTED.

---

## 3. Convergence qualification

- Capacité: Greenfield Product Proof loop (Nora → LR → Pilot HD → START/work/FINALIZE → assessment → durable cycle/LPS → trajectory → UI).
- Trajectoire: REAL campaign gaps → Phase A diagnostic (this) → Phase B same-lot corrective (pending Morris GO) → deterministic proof → REAL resume.
- Product Completion: CLOSED.
- Runtime v3: NON ADOPTED.
- Next capacity after Phase B GO: same-lot closure then Morris manual REAL resume.

---

## 4. REAL observations (campaign project)

### Identity (PROVEN from Product SQLite read-only)

| Field | Value |
|---|---|
| Product DB | `…/product-proof-greenfield-task-app/product.sqlite` via `SFIA_STUDIO_PRODUCT_DB_PATH` |
| Project title | **Gestion de tâches** |
| projectId | `prj:22fc4a03-ff89-4f97-98a2-877dc9ea781e` |
| cycleInstanceId | `cyc:trj-bc8bfdc19942868116fc4b53` |
| cycleTypeId | `cyc:framing` |
| profile | Light |
| cycle status (now) | **active** |
| LPS current | `lps:fff6284320841105` **version 10** |
| LPS activeCycleInstanceId | `cyc:trj-bc8bfdc19942868116fc4b53` |
| Trajectory | `trj:lr-bridge-4db9f4b59463` v1 status **validated**; step `stp:cadrage-231ff2b3` state **active** |
| Nora Session DB used | `…/corr-qual…/.sfia-exec/product/nora-session.sqlite` (session_key `f1-default`) |

Observations A1–A5 as reported by Morris remain the campaign claim set; below maps each to proven mechanisms.

---

## 5. Root-cause matrix A1..A5

### A1 — POST-START UI PROJECTION REFRESH

| Field | Content |
|---|---|
| Observation REAL | After « Démarrer le cadrage », durable START succeeds; Lifecycle stays « Aucun cycle sélectionné » until full refresh → « En cours · active ». |
| Expected | LifecycleSurface reflects active selection immediately after durable START. |
| Code path | CTA is on **TrajectorySurface** `startPreparedCycle` → `startPreparedTrajectoryCycleAction` → `pilotLifecycle.start` → client `onDurableFactsChanged` → parent **only** `loadProject()` + `setTrajectoryRefreshSignal`. **LifecycleSurface is not refreshed.** |
| Facts Git/code | `TrajectorySurface.tsx` startPreparedCycle; `ProjectWorkspacePage.tsx:199-221` dual callbacks without Lifecycle refresh; badge empty when `selectedStatus` null (`lifecyclePresentation.ts:53`). Lifecycle own START path *does* `refresh()` but is not the greenfield CTA used. |
| Facts runtime | Cycle created 18:32:38; START transition audit 18:49:09; LPS gains activeCycle from v5; cycle remains active — durable mutation PROVEN. |
| Hypotheses tested | Race on Lifecycle START response — **NOT primary** (Trajectory path returns no projection). Stale selectedCycleId React state — **REFUTED** (no such state). Double-source — **PROVEN**. |
| Root cause | **PROVEN — A (UI state/projection): double-source refresh gap.** Trajectory START updates durable + Trajectory local state; Lifecycle local `projection` untouched until remount. |
| Severity | HIGH (false empty lifecycle after successful START) |
| Dependencies | Independent of A2–A5 persistence; worsens operator trust before finalize. |
| Correction candidate | Same-lot: parent durable callback (or shared signal) must refresh LifecycleSurface projection; optionally apply returned projection on Lifecycle START. |
| Files likely | `ProjectWorkspacePage.tsx`, `LifecycleSurface.tsx`, possibly `TrajectorySurface.tsx` |
| Tests needed | START via Trajectory CTA → immediate Lifecycle badge active without full reload; reload parity. |
| Risk | Low if refresh is additive; avoid double-fetch thrash. |
| Debt / exit | Close in Phase B; no new store. |

### A2 — COGNITIVE RECOMMENDATION NOT MATERIALIZED (reframed)

| Field | Content |
|---|---|
| Observation REAL | Nora prose: framing can be finalized + recommends Conception fonctionnelle; after response + full refresh Lifecycle shows « Aucune recommandation lifecycle courante ». |
| Expected | Durable CURRENT Lifecycle Recommendation visible when Nora emits structured LR; Recommendation ≠ auto HD / auto transition. |
| Code path | Agents structured product turn → `materializeLifecycleRecommendationFromStructuredOutput` → EpistemicItem → `selectCurrentLifecycleRecommendations` (CURRENT only) → LifecycleSurface. |
| Facts Git/code | Schema allows `lifecycleRecommendation: null` independent of narrative (`noraProductTurnOutputType.ts`). FINALIZE validation **forces `targetCycleTypeId: null`** (`validateLifecycleRecommendation.ts:124-130`). Currentness = fingerprint equality including **`lpsVersion`** (`currentness.ts` + `basisFingerprint`). Orchestrate order: **LR materialize first**, then **ACW materialize** which **appends LPS** (`orchestrateTurn.ts` ~501 then ~692). #477 tests inject ScriptedModel candidates — plumbing only. Prompt WHEN rules exist in `buildProjectSystemPrompt.ts`; studio cognitive context does not encode emit WHEN. Dual-intent priority for single nullable field: **contract gap**. |
| Facts runtime (PROVEN) | Session seq **5** structured LR **present**: `intent=FINALIZE_CURRENT_CYCLE`, `targetCycleTypeId=cyc:functional-design`, statement mentions finalize **then** Conception fonctionnelle. Epistemic **materialized**: `epi:lr:23501980575bcac3:20260910T190138937Z` status=active, intent=FINALIZE, **persisted targetCycleTypeId=null**, basis **lpsVersion=9**. Same second: ACW adds 4 items → **LPS 9→10** (19:01:38.946). FINALIZE LR **never** appears in any LPS `epistemicItemIds`. After LPS 10, fingerprint ≠ persisted → **derivedCurrentness STALE** → UI empty. Session seq **2** earlier: narrative continue + **`lifecycleRecommendation: null`** (allowed). Pre-start NEXT_CYCLE framing LRs exist; latest still DB-status active but basis pre-active (would also be STALE). |
| Hypotheses tested | « Never materialized » — **REFUTED** for the finalize turn. « Null structured always » — **REFUTED** for seq 5; **PROVEN possible** (seq 2). « Presentation-only bug » — **REFUTED** (selectCurrent filters STALE). |
| Root cause | **PROVEN — C+B compound:** (1) Same-turn **ACW LPS bump invalidates LR currentness** immediately after materialization. (2) Dual cognitive intent compressed: structured carries FINALIZE + `targetCycleTypeId=functional-design`, but validator **drops** next-cycle type → **no separate NEXT_CYCLE CURRENT item**. (3) **PARTIAL**: live null-LR while prose recommends remains a residual desync risk (seq 2 pattern; no narrative↔LR coherence by design). Raw structured recovery for seq 5: **PROVEN via Memory B** without new REAL. |
| Severity | CRITICAL (Recommendation disappears from UI despite successful materialization) |
| Dependencies | Couples ACW same-lot writes to LR currentness; interacts with A3 CTA honesty (finalize CTA can appear via status even without CURRENT finalize rec — secondary path). |
| Correction candidate | Same-lot options (Morris pick): re-bind LR fingerprint **after** ACW LPS append in same turn; or materialize LR after ACW with post-ACW LPS version; or exclude non-semantic LPS churn from FINALIZE fingerprint with explicit contract. Separately decide dual FINALIZE+NEXT_CYCLE contract (see Morris decisions). Do **not** parse prose; do **not** second LLM. |
| Files likely | `orchestrateTurn.ts`, `materializeFromProductTurn.ts` / currentness / fingerprint, prompt contract if dual-intent clarified, LifecycleSurface display |
| Tests needed | Same-turn LR+ACW → LR remains CURRENT after LPS bump; dual-intent contract test once decided; STALE after unrelated LPS change still correct. |
| Risk | Over-loosening currentness → stale recommendations shown; must keep fail-closed semantics. |
| Debt | Dual-intent authoring gap; no product telemetry table for structured turns (Memory B only). |

### A3 — FINALIZE USER-FACING FAILURE / HIDDEN ASSESSMENT

| Field | Content |
|---|---|
| Observation REAL | Cycle active; Finaliser clicked; no useful explanation; no Terminé; still active after return. |
| Expected | Incomplete finalize must surface blockers; must not feel like silent success; cycle stays active when `canComplete=false` (fail-closed OK). |
| Code path | `pilotLifecycleActions` FINALIZE → HD `pilot.lifecycle.finalize:<id>` → `assessFinalization` → if incomplete: `ok:true`, cycle unchanged, assessment returned, audit `CYCLE_FINALIZE_INCOMPLETE` → server action success → LifecycleSurface `refresh()` **ignores assessment** → projection rebuild **without** assessment. |
| Facts Git/code | Chain **PROVEN** in `pilotLifecycleTransitions.ts`, `actions.ts`, `LifecycleSurface.tsx`, `lifecycleProjection.ts` (`assessment: input.assessment ?? null`). ProjectAssistantPanel *does* stash assessment; LifecycleSurface does not. |
| Facts runtime | **8** finalize HDs on subject `pilot.lifecycle.finalize:cyc:trj-bc8bfdc19942868116fc4b53`, selectedOptionId=`opt:accept`, authority=morris. 7 superseded + 1 accepted current (`dec:pilot-life:aab3f5da-…` @ 19:06:57). Repeated clicks create new HDs with supersession (dedup by subject currentness — **not** silent no-op). Durable audits for each click: `oa.cycle.finalization_assessed` + `lifecycle_transition` with `detailCode=CYCLE_FINALIZE_INCOMPLETE`, `canComplete=false`. |
| Exact blockers (PROVEN, repeated on all assessments) | `exit_criteria_open`, `artifact_applicability_unknown`, `execution_contract_applicability_unknown`, `evidence_applicability_unknown`, `review_bundle_applicability_unknown`, `git_repository_applicability_unknown`, `blocking_reservations` |
| Persistence finalize | **NOT broken** — HD + assessment + audit all durable; cycle correctly remains active. |
| Root cause | **PROVEN — G+E+A:** incomplete finalize treated as UX success; assessment not consumed by LifecycleSurface; projection does not recompute assessment on refresh. |
| Severity | CRITICAL (operator cannot see why finalize failed) |
| Dependencies | A4 (CTA enabled without completeness); A5 (UNKNOWN families + no policy HD path). |
| Correction candidate | Recompute assessment in `buildAssistantPilotLifecycleProjection`; LifecycleSurface must render obligations/blockers on incomplete finalize; messaging must not say undifferentiated « applied » success for incomplete. |
| Files likely | `actions.ts`, `LifecycleSurface.tsx`, `lifecyclePresentation.ts`, optionally `pilotLifecycleActions.ts` result typing |
| Tests needed | Incomplete finalize → UI shows blockers; reload still shows assessment/blockers; repeated finalize does not fake completion. |
| Risk | Noise if assessment always shown; keep scoped to non-terminal selected cycle. |

### A4 — FINALIZE CTA HONESTY

| Field | Content |
|---|---|
| Observation REAL | Finaliser enabled while cycle not completable. |
| Expected | CTA honest vs fail-closed: distinguish attempt vs completion eligibility. |
| Code path | `canFinalize` = status active\|paused\|blocked only (`lifecycleProjection.ts:110-116`). `lifecycleCtaPresentation` enables Finaliser primary/secondary from `canFinalize` (+ optional finalize rec). |
| Facts | Recommendation ≠ eligibility already documented in presentation/validator. |
| Root cause | **PROVEN — G:** `canFinalize` means **transition legally attemptable**, not **eligible to complete**. UI conflates the two for Pilote. |
| Severity | HIGH |
| Correction candidate | Keep fail-closed assessment; split attemptable vs completable in presentation; incomplete path must show assessment (A3). Do not weaken gates. |
| Morris arbitration | Whether primary CTA remains « attempt finalize / assess » vs disabled until `canComplete` (see decisions). |

### A5 — FINALIZATION OBLIGATION POLICY / RESOLVABILITY

| Field | Content |
|---|---|
| Observation REAL | Framing cycle cannot complete; UNKNOWN families block. |
| Expected | Explicit human path to declare N/A when families truly inapplicable; no silent absence→N/A. |
| Code path | `deriveFinalizationApplicability` / `assessFinalization`: UNKNOWN ⇒ BLOCKING; N/A requires obligation-policy HD (`pilot.lifecycle.obligation-policy:<cycleId>`), options including `opt:no-governed-effects` (N/A artifact+git+execution+evidence+review in one). |
| Facts runtime | **OBLIGATION_POLICY_COUNT = 0** on campaign project. Blocking reservation Epistemic `epi:acw:aaa62f7eb67407427032` (deadline definition) status active blocking=true. Trajectory step still `state=active` → `exit_criteria_open`. |
| Product UI/action path | **NONE found** under `features/` — designed in OA + corrProof05 tests only (**designed-but-unwired**). |
| Answers | (1) No real Pilote UI path today. (2) Therefore not triggered in campaign. (3) Framing **effectively uncompletable** on product path under current fail-closed + unwired policy + open exit criteria + blocking reservation. (4) Intention exists in domain/tests. (5) Yes — close with existing HD + assessment + REEVALUATE; no new store. (6) Prefer single `opt:no-governed-effects` HD + separate finalize HD; surface blockers once; do not family-spam. |
| Root cause | **PROVEN — F+G:** policy HD unwired in Product UI; plus real blockers (exit_criteria_open, blocking_reservations) that policy alone does not clear. |
| Severity | CRITICAL for closure |
| Correction candidate | Wire thin Product action + Lifecycle CTA for obligation-policy (existing options); surface assessment; Pilote still resolves reservations / trajectory exit separately. |
| Forbidden | Silent absence→N/A; Nora inventing HD; auto-FINALIZE. |

---

## 6. Cross-anomaly synthesis

| Class | Anomalies |
|---|---|
| A UI projection / refresh | A1, part of A3 |
| B Cognitive contract / structured | A2 dual-intent + null-LR residual |
| C Epistemic materialization / currentness | A2 same-turn STALE |
| D HumanDecision | A3 finalize HD works; A5 policy HD missing |
| E FinalizationAssessment | A3 hidden; A4/A5 consume it |
| F Applicability policy | A5 |
| G UX honesty / resolvability | A3, A4, A5 |
| H Persistence lifecycle engine | **Not broken** for START/FINALIZE incomplete |

**Single coherent package** (not five micro-cycles): *Lifecycle Closure Corrective* on existing OA + Product UI + same Nora Agent/Runner/structured turn.

---

## 7. Test holes that allowed deterministic PASS despite REAL gaps

Focused suite re-run this phase (ZERO REAL):

- `lifecycleRecommendation.delivery.d0.test.ts`
- `lifecycleRecommendation.finalCorr.d0.test.ts`
- `corrProof05.pilotLifecycle.d0.test.ts`
- Result: **3 files / 160 tests PASSED**

Holes (PROVEN by absence / injection style):

1. No test: Trajectory « Démarrer le cadrage » → LifecycleSurface immediate projection.
2. No test: same Product turn LR materialize **then** ACW LPS append → LR remains CURRENT.
3. #477 injects structured candidates — does not prove live model fill; does not prove dual FINALIZE+NEXT_CYCLE authoring.
4. Incomplete finalize returns `ok:true` locked in corrProof05 — **no** LifecycleSurface assertion that blockers are visible.
5. Obligation-policy only recorded in test helpers — **no** Product UI/action wiring test.
6. Repeated finalize HD supersession not asserted at UI honesty layer.

---

## 8. Proposed same-lot Phase B package

**Name:** Lifecycle Closure Corrective (UI refresh + LR currentness + finalize honesty + obligation-policy wiring)

**Keep:** one Nora Agent/Runner; ProductSqliteSession conversation-only; Product SQLite OA objects; Epistemic LR; HumanDecision; FinalizationAssessment; pilotLifecycle transitions; fail-closed UNKNOWN≠N/A; Recommendation ≠ HD; no prose parser; no second LLM; no auto-FINALIZE; no new table unless proven impossible (not required).

### B1 — Cross-surface durable refresh (A1)
- Parent `onDurableFactsChanged` (or shared signal) refreshes LifecycleSurface projection after Trajectory START/prepare and after Lifecycle actions.
- Tests: immediate « En cours · active » without full reload.

### B2 — Same-turn LR currentness vs ACW (A2)
- After ACW LPS append in same turn, **rebind** FINALIZE/NEXT_CYCLE LR basis to post-ACW LPS version **or** order materialization so LR fingerprint uses final LPS version of the turn.
- Preserve STALE when basis truly changes (cycle status, trajectory, blockers, doctrine, etc.).
- Tests: LR+ACW same turn → CURRENT; unrelated later LPS bump → STALE.

### B3 — Finalize honesty + visible assessment (A3/A4)
- Projection builder always attaches recomputed assessment for selected non-terminal cycle.
- LifecycleSurface consumes assessment on FINALIZE/REEVALUATE/refresh; render blocker families.
- CTA copy/enablement distinguishes attemptable vs completable (**Morris D-LC-02**).
- Incomplete finalize never looks like silent success.
- Repeated finalize: keep HD supersession; UI explains still incomplete.

### B4 — Obligation-policy Product path (A5)
- Thin server action + Lifecycle UI to record existing obligation-policy HD (prefer `opt:no-governed-effects` for light framing without governed effects).
- Then REEVALUATE/FINALIZE using existing engine.
- Still require Pilote to clear `exit_criteria_open` / blocking reservations honestly (no silent N/A).

### B5 — Dual-intent contract (A2) — **requires Morris decision before coding**
Options (do not invent silently):

| Option | Behavior |
|---|---|
| **A** | Single nullable LR: FINALIZE wins when both present; NEXT_CYCLE emitted only after cycle completed (prompt/validator explicit). |
| **B** | Allow **two** CURRENT LRs via distinct semanticKeys in one turn (FINALIZE + NEXT_CYCLE) — still one Agent output shape may need schema change to array or second field — **may be STOP if schema change is structural**. |
| **C** | Keep one LR; encode next cycle only in statement text — **rejected** (non-durable / non-typed). |

Default recommendation for Phase B **if Morris wants minimal schema change:** **Option A** + prompt clarity; after completion, separate NEXT_CYCLE turn/materialization.

---

## 9. Files likely impacted (Phase B — not modified now)

- `features/pre-m6-product-ui/ProjectWorkspacePage.tsx`
- `features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx`
- `features/pre-m6-product-ui/surfaces/lifecyclePresentation.ts`
- `features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx` (refresh notify only)
- `features/project-assistant/actions.ts`
- `features/project-assistant/f2/pilotLifecycleActions.ts` (obligation-policy action)
- `features/project-assistant/orchestrateTurn.ts` (LR/ACW ordering or rebind)
- `lib/oa/cycle/application/lifecycleProjection.ts`
- Possibly `lifecycleRecommendation/currentness.ts` / materialize helpers
- `buildProjectSystemPrompt.ts` (dual-intent WHEN clarity after decision)
- Tests under `__tests__/oa/cycle/` + UI tests for LifecycleSurface

---

## 10. Exit proof proposed for Phase B (not executed here)

### Deterministic
- Structured FINALIZE LR on same Product turn materializes and stays CURRENT after same-turn ACW.
- No Recommendation → HD automatic; no auto-FINALIZE.
- Trajectory START → immediate Lifecycle projection correct; reload parity.
- Assessment visible; incomplete finalize ≠ silent success.
- Obligation-policy HD path works when Pilote chooses it.
- Cycle stays active with real blockers; completes when obligations satisfied.
- LPS `activeCycleInstanceId` cleared on completion.
- Repeated finalize idempotent at UX meaning (no false completion).
- NEXT_CYCLE coherent after completion per Morris dual-intent decision.
- Full focused regression + added tests green.

### REAL manual resume (future, distinct GO)
- Resume Gestion de tâches / equivalent framing path.
- Nora emits structured LR; UI shows CURRENT recommendation.
- Pilote decides; blockers visible; completion after honest conditions; reload completed; next recommendation; no implicit transition.

Claims still forbidden after Phase B deterministic: REAL BOUNDARY PROVEN, PRODUCT PROOF PASS, RUNTIME V3 ADOPTED, READY FOR PRODUCTION.

---

## 11. Debt / risks

- Blocking reservation + open trajectory step are **real** content blockers — UX wiring alone will not complete the cycle without Pilote action.
- Loosening currentness incorrectly could resurface stale LRs.
- Wiring obligation-policy without clear copy could be misused as rubber-stamp — needs Pilote-facing honesty.
- `oa.cycle.load_failed` noise in audit (many rows) — out of scope unless it blocks projection; noted as debt.
- Publisher may report stale-origin false-negative; verify via `ls-remote` + blob.

---

## 12. Morris decisions required before / with Phase B GO

| ID | Question | Why |
|---|---|---|
| **D-LC-01** | Same-turn LR currentness strategy: rebind after ACW vs reorder materialization vs fingerprint carve-out? | A2 proven STALE |
| **D-LC-02** | FINALIZE CTA: keep as « attempt/assess » while incomplete, or disable until `canComplete`? | A4 honesty |
| **D-LC-03** | Wire obligation-policy HD with primary option `opt:no-governed-effects` for Light framing without governed effects? | A5 unwired |
| **D-LC-04** | Dual FINALIZE + next cycle: Option A (FINALIZE only now) vs structural multi-LR (possible STOP)? | A2 contract gap |
| **D-LC-05** | How should Pilote clear `exit_criteria_open` / blocking reservations in-product for framing (existing objects only)? | A5 residual blockers |

Phase A does **not** choose these silently. Package B can implement A1+A3 scaffolding while awaiting D-LC-01..05, but **coding A2/A4/A5 semantics needs the decisions**.

If Morris prefers a single GO covering defaults: recommend **D-LC-01=rebind-after-ACW**, **D-LC-02=attempt+visible assessment**, **D-LC-03=YES wire opt:no-governed-effects**, **D-LC-04=Option A**, **D-LC-05=surface blockers + existing trajectory/reservation resolution paths only**.

---

## 13. Claims

### Allowed now
- ROOT CAUSES QUALIFIED for A1–A5 (with noted PARTIAL residual on live null-LR desync)
- SAME-LOT CORRECTION PACKAGE READY FOR MORRIS GO (pending D-LC-*)
- DETERMINISTIC diagnostic evidence from code + read-only SQLite + Memory B
- REAL CALLS DURING PHASE A = ZERO
- PRODUCT HEAD UNCHANGED `624642ff`

### Forbidden
- REAL BOUNDARY PROVEN / END-TO-END REAL PROVEN / PRODUCT PROOF PASS
- PRODUCT VALIDATED / NO BUGS / COGNITIVE COMPLETION PROVEN
- RUNTIME V3 ADOPTED / READY FOR PRODUCTION
- Correction authorized without new Morris GO

---

## 14. Verdict

```
PASS — ROOT CAUSES QUALIFIED / SAME-LOT CORRECTION PACKAGE READY FOR MORRIS GO

GIT TRUTH MATCH @ 624642ff
PRODUCT MUTATION ZERO
REAL CALLS ZERO
A1 PROVEN (cross-surface refresh gap)
A2 PROVEN (LR materialized then STALE via same-turn ACW LPS bump; dual-intent stripped)
A3 PROVEN (incomplete finalize durable; assessment hidden in Lifecycle UI)
A4 PROVEN (canFinalize = attemptable ≠ completable)
A5 PROVEN (obligation-policy unwired; framing blocked by UNKNOWN + exit_criteria + reservation)
PHASE B PACKAGE PROPOSED — AWAITING MORRIS DECISIONS D-LC-01..05 + CORRECTION GO
```
