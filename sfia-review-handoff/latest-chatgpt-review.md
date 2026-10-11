# Review Pack FULL — P6-MIN-01…09 Feasible-First QA Sweep

at: 2026-10-11T07:45:13Z
level: FULL
mode: publish-in-cycle
cycleType: 9 — QA / validation
profile: Critical
campaign: P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
macro: STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
milestone: P6 — GLOBAL INTEGRATED PRODUCT QA

---

## 1. GO Morris

GO poursuite campagne + balayage MIN-01…09 feasible-first.
Faire le réalisable maintenant. Conserver gaps. Pas de correction Product.
MIN-03 NOT READY conservé (Pilot Review accept). Ne pas immobiliser les indépendants.

Autorisé: tests déterministes sûrs, lecture preuves, matrice, runbook MIN-06, pack, handoff L3.
Interdit: Nora/OpenAI, nouveau projet, HD, EC, Cursor métier, mutation SQLite QA, restart serveur, modif Product, install deps, commit/push projet.

---

## 2. Cycle 9 / Critical

CKC Cycle 9 Candidate — no execution authority.
Typologie: N/A QA/validation.
Capacités v3 framing applicables: F02/F04/F08/F11/F12/F14/F15 — Runtime v3 NON ADOPTED.

---

## 3. Git Truth Check

| Check | Result |
|---|---|
| workspace | `/Users/morris/Projects/sfia-workspace-p6-rec01-human-qa` |
| remote | origin https://github.com/mcleland147/sfia-workspace.git |
| branch | `qa/p6-hqa-02-rec01-human-qa` |
| HEAD | `f31bb8f610802c102edbe68889fb8ecf0339ec28` |
| origin/main | `f31bb8f610802c102edbe68889fb8ecf0339ec28` |
| staged | none |
| Product dirty | none |
| prior handoff tip | `1292814c` / blob `5fe43707` (MIN-03 precheck) |

STOP Git: not triggered.

---

## 4. Convergence / Roadmap / v3

- Build Doctrine / Roadmap / C1 / P6 §Z MIN-01…09 read (canonical).
- Trajectoire: REC-01 reserves → MIN-03 NOT READY → **this sweep** → Human QA MIN-06 → indépendants → blockers → consolidation.
- P6 GLOBAL PASS NO · Runtime v3 NON ADOPTED.

---

## 5. Contrat P6-MIN + Queue

Mandatory P6-MIN-01…09 per `07-chat-first-product-simplification-p6-global-integrated-product-qa.md` §Z.
Queue (historical WT READ ONLY): HQ-01=MIN-03, HQ-02=MIN-04, HQ-03=MIN-05, HQ-05=MIN-09 WAITING HUMAN QA.
MIN-01/02/06/07/08 not all separately queued — still mandatory for global disposition.

---

## 6. Matrice MIN-01…09

See embedded full matrix (§21).

| ID | exitStatus |
|---|---|
| MIN-01 | DETERMINISTIC PASS |
| MIN-02 | DETERMINISTIC PASS |
| MIN-03 | BLOCKED (PRODUCT GAP conserved) |
| MIN-04 | DETERMINISTIC PASS (negative fail-closed) |
| MIN-05 | BLOCKED full / det. partial |
| MIN-06 | FUNCTIONAL PASS CANDIDATE + HUMAN QA READY |
| MIN-07 | PASS WITH RESERVES |
| MIN-08 | DETERMINISTIC PASS |
| MIN-09 | NOT RUN / HUMAN QA REQUIRED |

---

## 7. Tests exécutés

Command pattern (from `projects/sfia-studio/app`):

```
npx vitest run <files> --reporter=verbose
```

| Batch | Files | Tests | Failed | Log |
|---|---|---|---|---|
| A cycle/review | 5 | 192 | 0 | batch-a-cycle-review.log |
| B continuity/journal | 7 | 123 | 0 | batch-b-continuity-journal.log |
| C frontDoor/REC01/RB | 3 | 11 | 0 | batch-c-frontdoor-rec01-rb.log |
| **Total** | **15** | **326** | **0** | |

Safety: `@vitest-environment node` / temp mkdtemp SQLite / Fake provider / ZERO REAL headers verified before run.
No QA Product DB paths touched.

Files:

- lifecycleClosure.phaseB.d0.test.ts
- corrProof05.pilotLifecycle.d0.test.ts
- corrProof06.artifactObligation.d0.test.ts
- lifecycleClosure.criticalReviewFollowUp.d0.test.ts
- reviewBundleLifecycle.test.ts
- greenfieldRecoveryContinuityCorr01.d0.test.ts
- chatFirstWorkRecommendationContinuity.d0.test.ts
- p5.s07.cp01.continuityExitProof.d0.test.ts
- genericExecutionReviewResultConvergence01.d0.test.ts
- cycleJournalContinuity.d0.test.ts
- pilotabilityJournalIntegrity.d0.test.ts
- automaticProjectResume.ui.test.tsx
- productCycleE2eStabilization.frontDoor.d0.test.ts
- p6.hqa.rec01.optionB.workRecommendationsContext.d0.test.ts
- adversarialReviewBundleValidation.test.ts

---

## 8. Preuves réutilisées

See §21 evidence-reuse-index.
Accepted: this sweep; REC-01 on f31bb8f6 WITH RESERVES; MIN-03 precheck blocker; queue as routing.
Rejected: Oct-8 READY historical; det=REAL promotion.

---

## 9. MIN-03 blocker

Conserved without re-investigation:
Pilot-facing ReviewBundle accept absent → BLOCKED FOR HUMAN QA.
Still mandatory for GLOBAL P6 EXIT.
Does not block independent MIN scenarios.

---

## 10. MIN-04 / MIN-05 dependencies

- MIN-04 negative fail-closed evaluated **independently** — DETERMINISTIC PASS.
- MIN-05 correction portions det. PASS; **full exit leg** blocked by same Review accept as MIN-03.

---

## 11. Human QA MIN-06

READY — runbook embedded §21.
Next single recommended Human action (not auto-started).
REC-01 usable observe/resume-only without structural HD.

---

## 12. Other Human QA

| Scenario | Need |
|---|---|
| MIN-09 GDR | REQUIRED (provider/doc prep; ≠ RB accept) |
| MIN-08 Journal UI | Recommended (P6-SC-JH-04) |
| MIN-01/04 Pilot UI | Optional confirmation |
| MIN-03/05 full | Blocked until Review UI |

---

## 13. Fake / Real Qualification

Applicable: YES.
This sweep: DETERMINISTIC only.
Inherited REAL: REC-01 (scoped reserves); HQA-06 restart (MIN-06 related).
No new provider/EC/Cursor REAL.
Claims forbidden avoided: no P6 GLOBAL PASS; no v3 adopt; no det=REAL; no NOT RUN=PASS.

---

## 14. Findings / severity

| Finding | Severity |
|---|---|
| Pilot Review accept missing (MIN-03/05 exit) | PRODUCT-BLOCKER (global exit) |
| MIN-09 no det suite | EVIDENCE GAP |
| Det. PASS ≠ Pilot UI REAL | CONTRACT awareness |
| Independent scenarios unblocked | Progress |

---

## 15. Dette / exit

Global exit still needs MIN-03 disposition + Human MIN-06/09 (+ optional UI).
Independent det. coverage advanced.

---

## 16. Gates Morris

1. Accept sweep verdict.
2. GO Human QA MIN-06 (runbook).
3. Keep/defer MIN-03 Delivery disposition.
4. Later: MIN-09 GDR GO (provider).
5. No Product correction this cycle unless Morris chooses.

---

## 17. Fichiers

Created under `.tmp-sfia-review/p6-global-integrated-qa/p6-min01-09-feasible-sweep/`:
matrix, runbook, reuse index, reserves, synthesis, run-results, logs, ledger-entry.
Append ledger. Reset/wrote this pack.
Product/method/prompts/app: untouched.

---

## 18. Verdict

**P6-MIN-01…09 — COVERAGE SWEEP EXECUTED WITH QUALIFIED BLOCKERS / REMAINING HUMAN QA**

P6 GLOBAL PASS NO · Runtime v3 NON ADOPTED · Human QA not started.

---

## 19. run-results.json

```json
{
  "kind": "P6_MIN01_09_FEASIBLE_SWEEP",
  "at": "2026-10-11T07:42:42Z",
  "baseline": "f31bb8f610802c102edbe68889fb8ecf0339ec28",
  "workspace": "sfia-workspace-p6-rec01-human-qa",
  "branch": "qa/p6-hqa-02-rec01-human-qa",
  "batches": [
    {
      "batch": "A-cycle-review",
      "log": "batch-a-cycle-review.log",
      "testFiles": [
        "lifecycleClosure.phaseB.d0.test.ts",
        "corrProof05.pilotLifecycle.d0.test.ts",
        "corrProof06.artifactObligation.d0.test.ts",
        "lifecycleClosure.criticalReviewFollowUp.d0.test.ts",
        "reviewBundleLifecycle.test.ts"
      ],
      "filesPassed": 5,
      "testsPassed": 192,
      "failed": 0,
      "exit": 0,
      "proofLevel": "UNIT_DETERMINISTIC"
    },
    {
      "batch": "B-continuity-journal",
      "log": "batch-b-continuity-journal.log",
      "testFiles": [
        "greenfieldRecoveryContinuityCorr01.d0.test.ts",
        "chatFirstWorkRecommendationContinuity.d0.test.ts",
        "p5.s07.cp01.continuityExitProof.d0.test.ts",
        "genericExecutionReviewResultConvergence01.d0.test.ts",
        "cycleJournalContinuity.d0.test.ts",
        "pilotabilityJournalIntegrity.d0.test.ts",
        "automaticProjectResume.ui.test.tsx"
      ],
      "filesPassed": 7,
      "testsPassed": 123,
      "failed": 0,
      "exit": 0,
      "proofLevel": "UNIT_DETERMINISTIC"
    },
    {
      "batch": "C-frontdoor-rec01-rb",
      "log": "batch-c-frontdoor-rec01-rb.log",
      "testFiles": [
        "productCycleE2eStabilization.frontDoor.d0.test.ts",
        "p6.hqa.rec01.optionB.workRecommendationsContext.d0.test.ts",
        "adversarialReviewBundleValidation.test.ts"
      ],
      "filesPassed": 3,
      "testsPassed": 11,
      "failed": 0,
      "exit": 0,
      "proofLevel": "UNIT_DETERMINISTIC"
    }
  ],
  "totals": {
    "testFilesPassed": 15,
    "testsPassed": 326,
    "failed": 0
  },
  "productMutation": false,
  "qaDbMutation": false,
  "providerCalls": false
}

```

---

## 20. ledger-entry

```json
{
  "campaignId": "P6-GLOBAL-INTEGRATED-PRODUCT-QA-01",
  "scenarioId": "P6-MIN-01\u202609",
  "kind": "FEASIBLE_FIRST_COVERAGE_SWEEP",
  "at": "2026-10-11T07:45:13Z",
  "baseline": "f31bb8f610802c102edbe68889fb8ecf0339ec28",
  "workspace": "sfia-workspace-p6-rec01-human-qa",
  "testFilesPassed": 15,
  "testsPassed": 326,
  "failed": 0,
  "min03": "BLOCKED \u2014 PRODUCT GAP conserved",
  "min06": "HUMAN QA READY \u2014 runbook prepared",
  "nextHumanQa": "P6-MIN-06",
  "verdict": "P6-MIN-01\u202609 \u2014 COVERAGE SWEEP EXECUTED WITH QUALIFIED BLOCKERS / REMAINING HUMAN QA",
  "productMutation": false,
  "newNoraTurn": false,
  "providerCalls": false
}
```

---

## 21. Contenu complet des preuves créées

### 21.a Matrix

```markdown
# P6-MIN-01…09 — Feasible-First Coverage Matrix

at: 2026-10-11T07:44:35Z
baseline: f31bb8f610802c102edbe68889fb8ecf0339ec28
workspace: sfia-workspace-p6-rec01-human-qa
branch: qa/p6-hqa-02-rec01-human-qa
deterministicTotals: 15 files / 326 tests / 0 failed
proofMode: UNIT_DETERMINISTIC + requalified prior evidence (no new Product mutation)

Legend exitStatus:
DETERMINISTIC PASS | REAL PASS | FUNCTIONAL PASS CANDIDATE | PASS WITH RESERVES |
FAIL | BLOCKED | NOT RUN | INCONCLUSIVE

---

## MIN-01 — Cycle completes with NO Execution

| Field | Value |
|---|---|
| oracle | Cycle closes/exit-eligible with zero ExecutionContract Attempt |
| capability | PRODUCT AVAILABLE (NO_GOVERNED_EFFECTS / N/A execution + finalize) |
| preconditions | Active cycle; obligation policy allows exit without EC |
| dependencies | Independent of MIN-03 |
| proofs now | lifecycleClosure.phaseB (LC-B finalize NO_GOVERNED); corrProof05 |
| baseline proofs | f31bb8f6 (this sweep) |
| proof level | UNIT_DETERMINISTIC |
| independent | YES |
| test now | EXECUTED PASS |
| Human QA | Recommended Pilot UI observation of finalize without EC (not blocking det.) |
| blocker | none for deterministic slice |
| next action | Optional Human QA smoke finalize-sans-exécution on fresh/non-REC01 project |
| exit condition | Det. PASS held; Pilot-observable close without EC recorded OR accepted as det.-sufficient per Morris |
| **exitStatus** | **DETERMINISTIC PASS** (REAL NOT PROVEN) |

MUST-PROVE note: do not equate unrelated smoke with MIN-01; this sweep ran dedicated closure suites.

---

## MIN-02 — Optional artifact/execution not required for exit

| Field | Value |
|---|---|
| oracle | Non-applicable optional obligations do not falsely block finalize |
| capability | PRODUCT AVAILABLE (NO_ARTIFACT / NO_EXECUTION / NO_GOVERNED policies) |
| preconditions | Policy HD selecting N/A families |
| dependencies | Independent |
| proofs now | corrProof05; corrProof06 (N/A vs REQUIRE); phaseB policy finalize |
| baseline | f31bb8f6 |
| proof level | UNIT_DETERMINISTIC |
| independent | YES |
| test now | EXECUTED PASS |
| Human QA | Optional |
| blocker | none |
| next action | none required for det. bar |
| exit condition | Det. PASS conserved |
| **exitStatus** | **DETERMINISTIC PASS** |

---

## MIN-03 — Required Deliverable → reviewed → validated → Exit Proof

| Field | Value |
|---|---|
| oracle | Required → produced → reviewed → validated → Exit Proof |
| capability | PARTIAL — obligation/produce/Exit engine AVAILABLE; Pilot Review accept NOT OBSERVABLE |
| preconditions | Fresh QA project + Pilot Review UI (missing) |
| dependencies | Blocks full positive exit for MIN-05; does NOT auto-block MIN-04 negative |
| proofs | Prior HQ-01 precheck NOT READY (handoff 1292814c); RB lifecycle det. proves OA completeReview only |
| baseline prior | f31bb8f6 precheck |
| proof level | READINESS / PRODUCT GAP (no new investigation) |
| independent | NO (Product gap) |
| test now | NOT re-run as Human path; RB lifecycle in sweep = service-only |
| Human QA | BLOCKED FOR HUMAN QA until Pilot Review accept Delivery/disposition |
| blocker | PRODUCT GAP — Pilot-facing ReviewBundle accept absent |
| next action | Morris disposition G1 (Delivery or contract); keep mandatory for global exit |
| exit condition | Pilot-observable review accept + full oracle REAL/Human PASS |
| **exitStatus** | **BLOCKED** (NOT READY — PRODUCT GAP; conserved) |

BLOCKED FOR HUMAN QA ≠ campaign halt. Still BLOCKED FOR GLOBAL P6 EXIT.

---

## MIN-04 — SUCCESS + Artifact + blocking Review → Exit NOT · Cycle OPEN

| Field | Value |
|---|---|
| oracle | Attempt SUCCESS + artifact present + blocking/pending review ⇒ Exit unsatisfied; cycle remains OPEN |
| capability | Fail-closed assessment AVAILABLE; Pilot visibility of blockers PARTIAL |
| preconditions | Cycle with applicable review_bundle; non-accepted/blocking RB |
| dependencies | Independent of Pilot *accept* for negative proof (pending/incomplete suffices) |
| proofs now | reviewBundleLifecycle (incomplete/refuse complete); adversarial RB; chatFirst WR canComplete=false; criticalReviewFollowUp; frontDoor produces RB draft without accept |
| baseline | f31bb8f6 |
| proof level | UNIT_DETERMINISTIC (negative fail-closed) |
| independent | YES (negative path) |
| test now | EXECUTED PASS (negative/service) |
| Human QA | Still valuable for Pilot UI: SUCCESS+artifact+blocker visible — not required to claim det. fail-closed |
| blocker | none for det. negative; full Pilot UX = HUMAN QA optional |
| next action | Optional Human QA after MIN-06; not gated on MIN-03 accept |
| exit condition | Det. fail-closed conserved; optional Human confirms UI |
| **exitStatus** | **DETERMINISTIC PASS** (negative fail-closed; REAL/UI NOT PROVEN) |

---

## MIN-05 — Correction → subsequent EC → re-review → validation → exit

| Field | Value |
|---|---|
| oracle | Correction path → new EC/Attempt → re-review clears → validation → Exit |
| capability | Correction/recovery prepare paths PARTIAL; positive exit needs Review accept |
| preconditions | Post blocking-review state; Pilot review accept for exit leg |
| dependencies | **First hard blocker for full PASS = same Pilot Review accept as MIN-03**; recovery/correction det. portions independent |
| proofs now | greenfieldRecovery; genericExecutionReviewResultConvergence; frontDoor rehydrate; (no full re-review→exit Pilot path) |
| baseline | f31bb8f6 |
| proof level | UNIT_DETERMINISTIC PARTIAL |
| independent | PARTIAL |
| test now | EXECUTED PASS on accessible portions |
| Human QA | BLOCKED for full oracle until Review accept; correction prep may be Human-testable earlier |
| blocker | PRODUCT GAP on exit leg (Review accept); not on correction prepare alone |
| next action | After MIN-03 unblock, Human QA full chain; until then keep PARTIAL |
| exit condition | Full oracle Human/REAL PASS |
| **exitStatus** | **BLOCKED** (full path) / det. portions PASS |

---

## MIN-06 — Interrupted conversation / Project recovery

| Field | Value |
|---|---|
| oracle | Interrupt → resume → project found → Product context rebuilt → decisions preserved → no invented authority → Nora continuity honest → no false success |
| capability | PRODUCT AVAILABLE for resume/recovery surfaces (det. + prior HQA-06 restart REAL) |
| preconditions | Authenticated Studio; project with durable state; controlled interrupt |
| dependencies | Independent of MIN-03 |
| proofs now | greenfieldRecoveryContinuityCorr01; automaticProjectResume.ui; p5.s07.cp01 |
| inherited | REC-01 HQA-06 REAL PASS server restart/rehydration @ f31bb8f6 (related continuity; ≠ full conversation interrupt oracle) |
| proof level | UNIT_DETERMINISTIC PASS + inherited REAL restart PASS WITH SCOPE LIMIT |
| independent | YES |
| test now | EXECUTED PASS |
| Human QA | **REQUIRED — READY** (priority next) |
| blocker | none for starting Human QA |
| next action | Execute runbook `p6-min-06-human-qa-runbook.md` (GO separate) |
| exit condition | Human PASS/FAIL/INCONCLUSIVE per runbook |
| **exitStatus** | **FUNCTIONAL PASS CANDIDATE** (det.) · **HUMAN QA REQUIRED / READY** |

REC-01 reuse: allowed for **observe/resume only** if Morris avoids new WR/HD contamination; prefer interrupt of current session without structural decisions. New project not required for MIN-06 if REC-01 used read-conservatively.

---

## MIN-07 — Recommendation / HD / currentness continuity

| Field | Value |
|---|---|
| oracle | Recommendations / HD / currentness continuity without invented authority |
| capability | AVAILABLE (chat-first WR + REC-01 lot) |
| preconditions | REC-01 evidence on matching baseline |
| dependencies | Independent |
| proofs now | chatFirstWorkRecommendationContinuity; p6.hqa.rec01.optionB |
| inherited | REC-01 HQA-01…07 on f31bb8f6 — PASS WITH RESERVES (HQA-02 cognitive under-materialization reserve; HQA-07 det. partial coverage) |
| proof level | UNIT_DETERMINISTIC + REAL (REC-01 scoped) |
| independent | YES |
| test now | EXECUTED PASS (continuity suites) |
| Human QA | Residual currentness/HD transitions — optional follow-up; do not re-run full REC-01 |
| blocker | none for sweep disposition |
| next action | Accept PASS WITH RESERVES; residual Human only if Morris wants extra currentness transitions |
| exit condition | Reserves explicit; no silent promotion to clean REAL PASS |
| **exitStatus** | **PASS WITH RESERVES** |

---

## MIN-08 — Journal projection coherence

| Field | Value |
|---|---|
| oracle | Journal ↔ Product/subjects/recs/HD/history/resume coherence; no parallel UI truth |
| capability | Journal store/projection AVAILABLE; French UI labels Human-queued (P6-HQ-16) |
| preconditions | Session with journal entries |
| dependencies | Independent |
| proofs now | cycleJournalContinuity; pilotabilityJournalIntegrity |
| baseline | f31bb8f6 |
| proof level | UNIT_DETERMINISTIC |
| independent | YES |
| test now | EXECUTED PASS |
| Human QA | Recommended (Journal/History labels P6-SC-JH-04) — not blocking det. |
| blocker | none for det. |
| next action | Human QA Journal UI after MIN-06 |
| exit condition | Det. PASS + optional Human UI PASS |
| **exitStatus** | **DETERMINISTIC PASS** (UI Human NOT PROVEN) |

---

## MIN-09 — Guided Document Review

| Field | Value |
|---|---|
| oracle | GDR cognitive+Product path with sources; governed materializations; ≠ ReviewBundle accept |
| capability | Cognitive GDR path — no dedicated unit suite found on baseline; queue Human |
| preconditions | Project with suitable document/source set; Nora turn (provider) |
| dependencies | Independent of MIN-03 ReviewBundle accept (different mechanism) |
| proofs | none executed (no GDR d0 suite discovered); queue P6-HQ-05 WAITING |
| proof level | NOT PROVEN |
| independent | YES |
| test now | NOT RUN (no safe det. GDR suite identified) |
| Human QA | REQUIRED — needs provider/Nora GO + document fixture |
| blocker | ENVIRONMENT / EVIDENCE — needs prepared doc context + provider GO |
| next action | After MIN-06: prepare GDR Human QA (separate GO for Nora) |
| exit condition | Human GDR PASS with provenance; no invented global validation |
| **exitStatus** | **NOT RUN** / **HUMAN QA REQUIRED** |

---

## Summary table

| ID | exitStatus | Independent | Human QA |
|---|---|---|---|
| MIN-01 | DETERMINISTIC PASS | Y | optional |
| MIN-02 | DETERMINISTIC PASS | Y | optional |
| MIN-03 | BLOCKED (PRODUCT GAP) | N | blocked |
| MIN-04 | DETERMINISTIC PASS (neg.) | Y | optional UI |
| MIN-05 | BLOCKED full / det. partial | partial | blocked exit leg |
| MIN-06 | FUNCTIONAL PASS CANDIDATE + HUMAN READY | Y | **NEXT** |
| MIN-07 | PASS WITH RESERVES | Y | residual optional |
| MIN-08 | DETERMINISTIC PASS | Y | recommended UI |
| MIN-09 | NOT RUN / HUMAN REQUIRED | Y | after MIN-06 |

P6 GLOBAL PASS: NO
Runtime v3: NON ADOPTED

```

### 21.b MIN-06 runbook

```markdown
# P6-MIN-06 — Human QA Runbook (Interrupted conversation / Project recovery)

at: 2026-10-11T07:44:35Z
status: READY FOR HUMAN QA — not started
baseline: f31bb8f610802c102edbe68889fb8ecf0339ec28
runtime: http://localhost:3020 (REC-01-capable instance; verify HEAD before start)
priority: NEXT Human QA after this sweep

## Environment

- Workspace truth: `sfia-workspace-p6-rec01-human-qa` @ f31bb8f6
- Do not switch Product branch
- Do not stop/restart server unless Morris separately authorizes (HQA-06 already proved restart)
- No OpenAI/Cursor GO beyond normal Studio conversation resume unless stated

## Project target

**Preferred:** existing REC-01 project `prj:5d63119d-063e-43ab-bcb0-d1d45ac045f2` for continuity observation only.

Constraints if using REC-01:
- Do **not** take new structural HumanDecisions
- Do **not** Require Artifact / Finalize / Confirm Execute
- Do **not** invent options or accept contradictory WR as truth
- Goal is interrupt/resume integrity, not WR remediation

**Alternative:** create new project only if Morris authorizes (out of this runbook default).

## Initial state

1. Login Studio
2. Open target project
3. Confirm durable identifiers visible (projectId, active cycle if any, Journal/subjects)
4. Record screenshot/notes: WR count, subjects, Journal décisions, cycle badge

## Actions — interrupt controlled

1. With project open and conversation visible, note last assistant/user turn ids if shown
2. Interrupt controlled — choose ONE:
   - A. Close browser tab / navigate away from project then return via project list
   - B. Hard refresh (reload) on project page
   - C. Sign out then sign in (heavier; optional)
3. Do not clear site data / IndexedDB unless testing that specific recovery (default: avoid)

## Actions — resume

1. Re-open same project via Studio project entry (not deep-link invent)
2. Observe recovery/resume surfaces if any (banner, requalify, resume durable)
3. Confirm conversation/context reconstructs without claiming false SUCCESS
4. Confirm prior HumanDecisions unchanged (Journal)
5. Confirm no new authority invented (no surprise HD)
6. Send at most one low-risk continuity ping only if needed to observe Nora continuity — prefer zero new provider spend; if ping used, record it

## Expected observations (PASS)

- Same project recovered
- Product context coherent (cycle/subjects/WR or honest empty/unavailable)
- Decisions preserved (no silent drop of durable HD)
- No invented HumanDecision
- Nora does not claim false execution SUCCESS
- Recovery path honest if recoveryRequired (disclose, not hide)

## Captures / IDs

- projectId, cycleInstanceId
- timestamps interrupt / resume
- screenshots: before, recovery surface (if any), after
- Journal décision count before/after
- WR/subject counts before/after
- any recovery banner testids observed

## PASS / FAIL / INCONCLUSIVE

- **PASS:** project+context recovered; decisions stable; no invented authority; no false success
- **FAIL:** lost durable decisions; invented HD; false SUCCESS; wrong project; silent corruption
- **INCONCLUSIVE:** auth/provider/environment blocked mid-path

## Forbidden

- SQLite mutation
- Finalize / Require Artifact / Confirm Execute on REC-01
- Contaminating REC-01 WR remediation during this scenario
- Claiming MIN-03 progress
- Auto-starting next cycle

## Relation to prior HQA-06

HQA-06 proved server restart rehydration REAL PASS — complementary, not a substitute for conversation interrupt/resume Human QA in this runbook.

```

### 21.c Evidence reuse index

```markdown
# Evidence reuse index — P6-MIN-01…09 sweep

at: 2026-10-11T07:44:35Z
baseline_required: f31bb8f610802c102edbe68889fb8ecf0339ec28

## Accepted (baseline + scope match)

| Source | Baseline | Scope | Level | Maps to | Decision |
|---|---|---|---|---|---|
| This sweep batches A/B/C | f31bb8f6 | 15 files / 326 tests | UNIT_DETERMINISTIC | MIN-01,02,04,05partial,06,07,08 | ACCEPT |
| REC-01 HQA-01…07 ledger + packs | f31bb8f6 | WR/currentness/restart | REAL + DET | MIN-07; MIN-06 related (HQA-06 restart) | ACCEPT WITH RESERVES (HQA-02 framing; HQA-07 det≠REAL journey) |
| P6-HQ-01 precheck handoff 1292814c | f31bb8f6 | Pilot Review gap | READINESS | MIN-03 | ACCEPT — blocker conserved |
| Queue/batch manifests historical WT | 980064c0 WT | queue status | CAMPAIGN DOC | all MIN queue mapping | ACCEPT as queue truth; not Product proof on f31bb8f6 |

## Rejected / not auto-valid

| Source | Reason |
|---|---|
| Oct-8 HQ-01 READY on historical runtime | Wrong baseline (980064c0); Deliverable not declared |
| Any det. PASS as REAL PASS | Forbidden claim |
| Historical auto-proven exclusions without re-verify | Not revalidated this sweep |

## Historical WT artefacts

Readable READ ONLY from `/Users/morris/Projects/sfia-workspace/.tmp-sfia-review/p6-global-integrated-qa/`.
Not treated as automatic Product proofs on f31bb8f6.

```

### 21.d Reserves

```markdown
# Reserves and exit conditions — P6-MIN-01…09 sweep

at: 2026-10-11T07:44:35Z

## Conserved blockers

1. MIN-03 PRODUCT GAP — Pilot ReviewBundle accept absent — mandatory for global P6 exit — correction deferred not abandoned.
2. MIN-05 full path blocked on same Review accept for exit leg.

## Reserves

- MIN-01/02/04/08 DETERMINISTIC PASS ≠ REAL/Human Pilot PASS.
- MIN-07 PASS WITH RESERVES from REC-01 (HQA-02 expectation/framing; HQA-07 det partial).
- MIN-06 det + HQA-06 restart ≠ full interrupt oracle until Human runbook executed.
- MIN-09 no det suite — NOT RUN.
- Queue manifests from historical WT — campaign routing only.
- No Product Delivery this cycle.

## Exit conditions (campaign)

Global P6 exit still requires disposition of MIN-03 (and dependent full MIN-05), plus Human QA for MIN-06/09 (and optional UI for others).
Independent scenarios may proceed.

```

### 21.e Synthesis

```markdown
# P6-MIN-01…09 — Feasible sweep synthesis

at: 2026-10-11T07:44:35Z
verdict: P6-MIN-01…09 — COVERAGE SWEEP EXECUTED WITH QUALIFIED BLOCKERS / REMAINING HUMAN QA

## Executed now

- 3 vitest batches · 15 files · 326 passed · 0 failed
- Temp SQLite / Fake provider / ZERO REAL only
- No QA DB mutation · no Nora · no Product code change

## Disposition counts

- DETERMINISTIC PASS: MIN-01, MIN-02, MIN-04 (neg), MIN-08
- PASS WITH RESERVES: MIN-07
- FUNCTIONAL PASS CANDIDATE + HUMAN READY: MIN-06
- BLOCKED: MIN-03; MIN-05 (full)
- NOT RUN: MIN-09

## Next single Human QA action

**P6-MIN-06** — follow `p6-min-06-human-qa-runbook.md` (do not auto-start).

## Claims

- P6 GLOBAL PASS = NO
- Runtime v3 = NON ADOPTED
- DETERMINISTIC ≠ REAL

```

---

## 22. Instruction ChatGPT

Relire handoff distant `sfia-review-handoff/latest-chatgpt-review.md`.
Vérifier matrice, tests 326/0, limites REAL, blocker MIN-03, runbook MIN-06.
Ne pas promouvoir déterministe en E2E REAL.
