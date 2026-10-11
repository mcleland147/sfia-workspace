# Review Pack FULL — P6-HQA-02 / REC-01 — HQA-07 Partial Coverage

**Horodatage :** 2026-10-11T07:05:00Z
**GO Morris :** "ok go" — contrôle technique borné puis poursuite P6
**Cycle :** 9 — QA / validation — Critical
**Campaign :** P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
**Lot :** P6-HQA-02 / REC-01
**Scenario :** HQA-07 — Partial Coverage
**Prior handoff tip :** 1d430fa2 (HQA-06 controlled restart)

---

## 1. Git Truth Check

| Check | Result |
|---|---|
| Workspace | `/Users/morris/Projects/sfia-workspace-p6-rec01-human-qa` |
| Branch | `qa/p6-hqa-02-rec01-human-qa` |
| HEAD | `f31bb8f610802c102edbe68889fb8ecf0339ec28` (= origin/main) |
| REC-01 | PRESENT |
| Product mutation this cycle | NONE |

---

## 2. Convergence / trajectoire

- C1 / Doctrine / Roadmap: reference only
- REC-01 integrated → HQA-01…06 → HQA-07 deterministic coverage gate
- P6 IN PROGRESS · GLOBAL PASS NO · v3 NON ADOPTED
- Next independent Human QA batch remains WAITING (not started here)

---

## 3. REC-01 coverage invariants (verified)

| Rule | Evidence |
|---|---|
| maxOpenWorkRecommendations = 12 | budget constant test PASS + code |
| >12 → PARTIAL (truncated projection) | code `studioCognitiveContext.ts` truncated/slice; filter tests with coverage=PARTIAL |
| Product reader OK ≠ COMPLETE when truncated | orchestrateTurn uses Nora projection coverage |
| PARTIAL blocks NEW/DISTINCT/CONTRADICTORY mint | qualify + minimalStabilization PASS |
| UNAVAILABLE fail-closed | PASS |
| PARTIAL + ALREADY_COVERED / exact duplicate | resolve/suppress without new mint — PASS |
| Non-Recommendation + sourceIndexes | preserved — PASS |
| COMPLETE + NEW + exploitable rationale | may mint (bounded trust) — PASS |

---

## 4. Tests executed

See `test-run-meta.json`. **40/40 passed**, 3 files, exit 0.

Key assertion lines (40 ✓ lines in verbose log; selected):

```
✓ __tests__/oa/cycle/qualifyProspectiveWorkRecommendationMaterialization.d0.test.ts > P6-HQA-02 bounded cognitive trust policy > NEW + exploitable rationale without Product id citation may mint under COMPLETE 0ms
✓ __tests__/oa/cycle/qualifyProspectiveWorkRecommendationMaterialization.d0.test.ts > P6-HQA-02 coverage continuity > PARTIAL blocks NEW even when statement differs from all opens 0ms
✓ __tests__/oa/cycle/qualifyProspectiveWorkRecommendationMaterialization.d0.test.ts > P6-HQA-02 coverage continuity > UNAVAILABLE blocks mint 0ms
✓ __tests__/oa/cycle/qualifyProspectiveWorkRecommendationMaterialization.d0.test.ts > P6-HQA-02 coverage continuity > PARTIAL does not block non-Recommendation ACW items 0ms
✓ __tests__/oa/cycle/qualifyProspectiveWorkRecommendationMaterialization.d0.test.ts > P6-HQA-02 coverage continuity > ALREADY_COVERED still resolves against Product facts under PARTIAL 0ms
✓ __tests__/project-assistant/p6.hqa.rec01.optionB.workRecommendationsContext.d0.test.ts > P6-HQA-02 REC-01 Option B workRecommendationsContext coverage > COMPLETE renders ids and does not invent coverage 1ms
✓ __tests__/project-assistant/p6.hqa.rec01.optionB.workRecommendationsContext.d0.test.ts > P6-HQA-02 REC-01 Option B workRecommendationsContext coverage > PARTIAL warns against NEW-by-absence 0ms
✓ __tests__/project-assistant/p6.hqa.rec01.optionB.workRecommendationsContext.d0.test.ts > P6-HQA-02 REC-01 Option B workRecommendationsContext coverage > UNAVAILABLE forbids invented ids 0ms
✓ __tests__/oa/cycle/p6.hqa.rec01.minimalStabilization.d0.test.ts > P6-HQA-02 REC-01 stabilization — Coverage PARTIAL > budget maxOpenWorkRecommendations is 12 0ms
✓ __tests__/oa/cycle/p6.hqa.rec01.minimalStabilization.d0.test.ts > P6-HQA-02 REC-01 stabilization — Coverage PARTIAL > 13+ opens with coverage=PARTIAL blocks NEW (Nora truncated view) 0ms
✓ __tests__/oa/cycle/p6.hqa.rec01.minimalStabilization.d0.test.ts > P6-HQA-02 REC-01 stabilization — Coverage PARTIAL > PARTIAL still allows exact-duplicate suppress against full Product facts 0ms
✓ __tests__/oa/cycle/p6.hqa.rec01.minimalStabilization.d0.test.ts > P6-HQA-02 REC-01 stabilization — Coverage PARTIAL > PARTIAL blocks CONTRADICTORY mint even with Product-resolved ref (current policy) 0ms
✓ __tests__/oa/cycle/p6.hqa.rec01.minimalStabilization.d0.test.ts > P6-HQA-02 REC-01 stabilization — Coverage PARTIAL > filter under PARTIAL preserves non-Recommendation sourceIndexes 0ms
```

Vitest footer:

```
 ✓ __tests__/oa/cycle/p6.hqa.rec01.minimalStabilization.d0.test.ts > P6-HQA-02 REC-01 stabilization — Coverage PARTIAL > filter under PARTIAL preserves non-Recommendation sourceIndexes 0ms
 ✓ __tests__/oa/cycle/p6.hqa.rec01.minimalStabilization.d0.test.ts > P6-HQA-02 REC-01 stabilization — Currentness claims > applicable only when source and target are open active WR 0ms
 ✓ __tests__/oa/cycle/p6.hqa.rec01.minimalStabilization.d0.test.ts > P6-HQA-02 REC-01 stabilization — Currentness claims > not_applicable when target superseded 0ms
 ✓ __tests__/oa/cycle/p6.hqa.rec01.minimalStabilization.d0.test.ts > P6-HQA-02 REC-01 stabilization — Currentness claims > unknown when context unavailable or target missing 0ms
 ✓ __tests__/oa/cycle/p6.hqa.rec01.minimalStabilization.d0.test.ts > P6-HQA-02 REC-01 stabilization — Currentness claims > not_applicable when source is superseded even if target remains open 0ms
 ✓ __tests__/oa/cycle/p6.hqa.rec01.minimalStabilization.d0.test.ts > P6-HQA-02 REC-01 stabilization — Currentness claims > projection cards expose relation without inventing CURRENT 0ms
 ✓ __tests__/oa/cycle/p6.hqa.rec01.minimalStabilization.d0.test.ts > P6-HQA-02 REC-01 stabilization — planDurable unchanged > CONTRADICTORY plans envelope; DISTINCT_RELATED does not 0ms

 Test Files  3 passed (3)
      Tests  40 passed (40)
   Start at  09:04:58
   Duration  1.16s (transform 637ms, setup 208ms, collect 1.87s, tests 9ms, environment 0ms, prepare 119ms)
```

---

## 5. Proof classification

| Level | Result |
|---|---|
| UNIT DETERMINISTIC | **PROVEN** |
| INTEGRATION DETERMINISTIC (13-item compose→PARTIAL) | Code-inspected; not a dedicated executed compose test |
| REAL BOUNDARY / E2E REAL PARTIAL journey | **NOT RUN** |

QA project has 3 open WR → naturally COMPLETE; PARTIAL not invented in Product DB.

---

## 6. Fake / Real

Deterministic fixtures only. Fake silent fallback N/A. REAL PARTIAL journey not authorized. Claims: DETERMINISTIC PROVEN. Not MODEL VERIFIED / REAL BOUNDARY PROVEN / P6 GLOBAL PASS.

---

## 7. HQA-06 Human UI PASS integrated

Technical restart evidence retained. Morris browser confirmation recorded:
same project · Cadrage active · WR=3 · sujets=2 · décisions Journal=0.
**HQA-06 — PASS — SERVER RESTART & REHYDRATION VERIFIED.**
Local capture files: NOT PRESENT.

---

## 8. REC-01 scenario rollup

| ID | Status |
|---|---|
| HQA-01 | FUNCTIONAL PASS / PRODUCT EVIDENCE VERIFIED |
| HQA-02 | First-run FAIL cognitive under-materialization qualified; later visual 1 WR (distinct) |
| HQA-03 | FUNCTIONAL PASS CANDIDATE |
| HQA-04 | FUNCTIONAL PASS CANDIDATE |
| HQA-05 | FUNCTIONAL PASS CANDIDATE (+ R3 CONTRADICTORY persisted) |
| HQA-06 | PASS — SERVER RESTART & REHYDRATION VERIFIED |
| HQA-07 | DETERMINISTIC PASS — REAL JOURNEY NOT RUN |

---

## 9. Debt / exit / next tranche

- Debt: REAL PARTIAL-COVERAGE JOURNEY NOT RUN — exit via separate Morris GO if campaign bar requires it; not campaign-invalidating for independent tracks.
- PASS CANDIDATE residues HQA-02…05 preserved.
- **Recommended next (not started):** P6-HQ-01 / P6-SC-MIN-03 Required Deliverable Exit Proof (Human QA batch A-blocking).

---

## 10. Product unchanged

No Product/code/test edits. No Nora. No SQLite QA mutation. No project Git.

---

## 11. Décisions Morris

1. Accept HQA-07 deterministic verdict + REAL limit.
2. Select next independent P6 Human QA tranche (candidate P6-HQ-01).
3. Optional later: authorize REAL PARTIAL journey if required.

---

## 12. Verdict

**HQA-07 — DETERMINISTIC PASS — PARTIAL COVERAGE FAIL-CLOSED VERIFIED — REAL JOURNEY NOT RUN**

---

## 13. Evidence files (exploitable)

### `hqa-07-partial-coverage-evidence.md`

```markdown
# HQA-07 — Partial Coverage Deterministic Evidence

campaignId: P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
lot: P6-HQA-02 / REC-01
scenario: HQA-07 — Partial Coverage
at: 2026-10-11T07:05:00Z
baseline: f31bb8f610802c102edbe68889fb8ecf0339ec28
mode: deterministic tests + Product wiring inspection — no Nora, no SQLite QA mutation

---

## RAW OBSERVATION

- QA project currently has 3 open ACW Work Recommendations → naturally COMPLETE, not PARTIAL.
- No REAL PARTIAL journey authorized/executed.
- Morris confirmed HQA-06 UI after restart: same project, Cadrage active, WR=3, sujets=2, décisions Journal=0.

## TECHNICAL FACT — Coverage resolution (studioCognitiveContext.ts)

- maxOpenWorkRecommendations = 12 (constant STUDIO_COGNITIVE_CONTEXT_BUDGET).
- openWr filtered active + undisposed; truncated = openWr.length > 12.
- coverage = PARTIAL when truncated else COMPLETE.
- catch path → coverage UNAVAILABLE.
- Code: slice(0, 12) + coverage flag; Product reader success alone does not force COMPLETE when truncated.

## TECHNICAL FACT — orchestrateTurn wiring

- openWorkRecommendationsCoverage = UNAVAILABLE if !openRecommendationsContextAvailable
  else studio.workRecommendationsContext?.coverage ?? UNAVAILABLE.
- Comment explicit: Product reader available ≠ COMPLETE; PARTIAL/UNAVAILABLE ⇒ no new WR mint.
- Passed into filterActiveCycleWorkItemsForProspectiveMaterialization.

## TECHNICAL FACT — Filter invariants (qualifyProspective…)

- UNAVAILABLE → open_context_unavailable / fail-closed.
- PARTIAL → insufficient_context_coverage for NEW / DISTINCT_RELATED / CONTRADICTORY mint.
- PARTIAL + ALREADY_COVERED / exact duplicate still resolve against Product facts (no new mint).
- Non-Recommendation ACW items preserved; sourceIndexes preserved when Recommendation suppressed.
- COMPLETE + NEW + exploitable rationale may mint (bounded cognitive trust — not semantic proof).

## TECHNICAL FACT — Tests executed

Command:
`npx vitest run __tests__/oa/cycle/p6.hqa.rec01.minimalStabilization.d0.test.ts __tests__/oa/cycle/qualifyProspectiveWorkRecommendationMaterialization.d0.test.ts __tests__/project-assistant/p6.hqa.rec01.optionB.workRecommendationsContext.d0.test.ts --reporter=verbose`

Result: Test Files 3/3 · Tests 40/40 passed · exit 0

Key assertions (from verbose log):

```
✓ __tests__/oa/cycle/qualifyProspectiveWorkRecommendationMaterialization.d0.test.ts > P6-HQA-02 bounded cognitive trust policy > NEW + exploitable rationale without Product id citation may mint under COMPLETE 0ms
✓ __tests__/oa/cycle/qualifyProspectiveWorkRecommendationMaterialization.d0.test.ts > P6-HQA-02 coverage continuity > PARTIAL blocks NEW even when statement differs from all opens 0ms
✓ __tests__/oa/cycle/qualifyProspectiveWorkRecommendationMaterialization.d0.test.ts > P6-HQA-02 coverage continuity > UNAVAILABLE blocks mint 0ms
✓ __tests__/oa/cycle/qualifyProspectiveWorkRecommendationMaterialization.d0.test.ts > P6-HQA-02 coverage continuity > PARTIAL does not block non-Recommendation ACW items 0ms
✓ __tests__/oa/cycle/qualifyProspectiveWorkRecommendationMaterialization.d0.test.ts > P6-HQA-02 coverage continuity > ALREADY_COVERED still resolves against Product facts under PARTIAL 0ms
✓ __tests__/project-assistant/p6.hqa.rec01.optionB.workRecommendationsContext.d0.test.ts > P6-HQA-02 REC-01 Option B workRecommendationsContext coverage > COMPLETE renders ids and does not invent coverage 1ms
✓ __tests__/project-assistant/p6.hqa.rec01.optionB.workRecommendationsContext.d0.test.ts > P6-HQA-02 REC-01 Option B workRecommendationsContext coverage > PARTIAL warns against NEW-by-absence 0ms
✓ __tests__/project-assistant/p6.hqa.rec01.optionB.workRecommendationsContext.d0.test.ts > P6-HQA-02 REC-01 Option B workRecommendationsContext coverage > UNAVAILABLE forbids invented ids 0ms
✓ __tests__/oa/cycle/p6.hqa.rec01.minimalStabilization.d0.test.ts > P6-HQA-02 REC-01 stabilization — Coverage PARTIAL > budget maxOpenWorkRecommendations is 12 0ms
✓ __tests__/oa/cycle/p6.hqa.rec01.minimalStabilization.d0.test.ts > P6-HQA-02 REC-01 stabilization — Coverage PARTIAL > 13+ opens with coverage=PARTIAL blocks NEW (Nora truncated view) 0ms
✓ __tests__/oa/cycle/p6.hqa.rec01.minimalStabilization.d0.test.ts > P6-HQA-02 REC-01 stabilization — Coverage PARTIAL > PARTIAL still allows exact-duplicate suppress against full Product facts 0ms
✓ __tests__/oa/cycle/p6.hqa.rec01.minimalStabilization.d0.test.ts > P6-HQA-02 REC-01 stabilization — Coverage PARTIAL > PARTIAL blocks CONTRADICTORY mint even with Product-resolved ref (current policy) 0ms
✓ __tests__/oa/cycle/p6.hqa.rec01.minimalStabilization.d0.test.ts > P6-HQA-02 REC-01 stabilization — Coverage PARTIAL > filter under PARTIAL preserves non-Recommendation sourceIndexes 0ms
```

## Proof level

| Layer | Status |
|---|---|
| UNIT DETERMINISTIC | PROVEN (40/40) |
| INTEGRATION DETERMINISTIC (compose 13 WR → PARTIAL) | CODE-INSPECTED wiring; no dedicated 13-item compose integration test in executed suite |
| REAL BOUNDARY PARTIAL journey | NOT RUN |
| END-TO-END REAL | NOT RUN |

## HQA-06 consolidation

Prior technical: SERVER RESTART VERIFIED · HUMAN UI RECHECK PENDING.
Morris human UI confirmation (conversation): PASS.
Qualification recorded: **HQA-06 — PASS — SERVER RESTART & REHYDRATION VERIFIED**.
Local screenshot files: NOT PRESENT (not invented).

## REC-01 scenario status (preserved)

| Scenario | Status |
|---|---|
| HQA-01 | FUNCTIONAL PASS / PRODUCT EVIDENCE VERIFIED |
| HQA-02 | First-run: Option without Recommendation (FAIL cognitive under-materialization qualified). Later visual: 1 WR — technical consolidation of last attempt distinct from visual candidate |
| HQA-03 | FUNCTIONAL PASS CANDIDATE — 1→1 |
| HQA-04 | FUNCTIONAL PASS CANDIDATE — 1→2 |
| HQA-05 | FUNCTIONAL PASS CANDIDATE — 2→3; R3 CONTRADICTORY→R1 persisted (seen in HQA-06) |
| HQA-06 | PASS — SERVER RESTART & REHYDRATION VERIFIED |
| HQA-07 | DETERMINISTIC PASS — REAL PARTIAL JOURNEY NOT RUN |

## Debt / exit

- REAL PARTIAL-COVERAGE JOURNEY NOT RUN — exit: separate Morris GO if required for campaign bar; not blocking independent P6 Human QA tracks.
- HQA-02/03/04/05 PASS CANDIDATE residues preserved — not auto-promoted.
- No Product change authorized from this cycle.

## Next P6 tranche (recommendation only — not started)

Resume independent Human QA batch starting with **P6-HQ-01 / P6-SC-MIN-03** (Required Deliverable → reviewed → validated → Exit Proof) — A-blocking, WAITING HUMAN QA in campaign batch. Selection remains Morris.

## VERDICT

**HQA-07 — DETERMINISTIC PASS — PARTIAL COVERAGE FAIL-CLOSED VERIFIED — REAL JOURNEY NOT RUN**
```

### `hqa-07-evidence-summary.json`

```json
{
  "campaignId": "P6-GLOBAL-INTEGRATED-PRODUCT-QA-01",
  "scenarioId": "HQA-07-PARTIAL-COVERAGE",
  "kind": "DETERMINISTIC_COVERAGE_GATE",
  "at": "2026-10-11T07:05:00Z",
  "baseline": "f31bb8f610802c102edbe68889fb8ecf0339ec28",
  "testsPassed": 40,
  "testsTotal": 40,
  "testFilesPassed": 3,
  "proofLevel": "UNIT_DETERMINISTIC",
  "realPartialJourney": "NOT_RUN",
  "hqa06HumanUi": "PASS — SERVER RESTART & REHYDRATION VERIFIED",
  "verdict": "HQA-07 — DETERMINISTIC PASS — PARTIAL COVERAGE FAIL-CLOSED VERIFIED — REAL JOURNEY NOT RUN",
  "nextP6Recommendation": "P6-HQ-01 / P6-SC-MIN-03 Deliverable Exit Proof (Human QA batch)",
  "productMutation": false,
  "newNoraTurn": false
}
```

### `test-run-meta.json`

```json
{
  "startedAt": "2026-10-11T07:04:58Z",
  "finishedAt": "2026-10-11T07:05:00Z",
  "cwd": "/Users/morris/Projects/sfia-workspace-p6-rec01-human-qa/projects/sfia-studio/app",
  "head": "f31bb8f610802c102edbe68889fb8ecf0339ec28",
  "command": "npx vitest run __tests__/oa/cycle/p6.hqa.rec01.minimalStabilization.d0.test.ts __tests__/oa/cycle/qualifyProspectiveWorkRecommendationMaterialization.d0.test.ts __tests__/project-assistant/p6.hqa.rec01.optionB.workRecommendationsContext.d0.test.ts --reporter=verbose",
  "testFilesPassed": 3,
  "testsPassed": 40,
  "testsTotal": 40,
  "failed": 0,
  "skipped": 0,
  "exitCode": 0,
  "qaRuntimeDuringRun": "PID 6378 next-server still listening 3020 \u2014 not used as fixture",
  "network": "none required"
}
```

### `vitest-hqa07.log`

Full verbose log retained at:
`.tmp-sfia-review/p6-global-integrated-qa/human-qa/rec01/hqa07-partial-coverage/vitest-hqa07.log`
(40 passing assertion lines; footer above).
