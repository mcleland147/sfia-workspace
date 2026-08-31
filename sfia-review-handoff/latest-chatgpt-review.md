# MW1 FINAL DETERMINISTIC PROOF — Review Pack FULL / CRITICAL

**Timestamp:** 2026-08-31 09:21:32 CEST
**Repository:** mcleland147/sfia-workspace
**Cycle:** 9 — QA / validation
**Typology:** RUN
**Profile:** CRITICAL
**Morris GO consumed:** GO MORRIS — AUTHORIZE MW1 FINAL DETERMINISTIC PROOF — QA / VALIDATION ONLY

---

## 1. Verdict

**MW1 FINAL DETERMINISTIC PROOF — INCOMPLETE**

| Story | Verdict | Primary gap type |
|---|---|---|
| MW1-S01 | **INCOMPLETE — TOOLING / PROOF GAP** | Partial Option C Session/authority D0 proofs exist; no story-level E2E+eval for full resume-from-Truth-C + honest B-unavailability + NCC-BAR-07 memory-honesty binding |
| MW1-S02 | **INCOMPLETE — IMPLEMENTATION GAP** | No production-path compaction mechanism with provenance/loss signaling/Truth-C invalidation |
| MW1-S03 | **INCOMPLETE — IMPLEMENTATION GAP** | No governed B→C materialization path (MaterializationBasis, Class 1–4) in product code |

**Cross-invariants CI-01→CI-14:** PASS at Option C boundary layer (existing D0 tests + architecture)
**Full non-regression:** PASS on main@0f265149 via CI workflow 33364556408 (234 test files, 2248 tests)
**Local test execution:** NOT RUN (worktree lacks node_modules; npm install forbidden this cycle) — CI used as remote execution evidence
**MW1 NOT COMPLETE** — this cycle does not claim MW1 COMPLETE or closure

---

## 2. Git Truth

| Item | Value |
|---|---|
| origin/main | `0f265149dc7e088ac62ff99c6f998274bec6c94f` |
| origin/main tree | `92fce49d245ffb4cbfc43b2b55e1004648b6a900` |
| Local branch | `docs/sfia-studio-nora-mw0-option-c-regression-truth-sync` |
| Local HEAD | `d9ab48322f34ffbe40ef1da92f9f00ab793dfd9c` |
| Local HEAD tree | `92fce49d…` (= origin/main tree) |
| Input handoff | `8993d37aaea0a247f28607da57b50c7e47e03890` |
| Project mutation | **NONE** |

---

## 3. Convergence Pre-check

triggered: YES · Capability: Nora Cognitive Completion / honest continuity + governed memory · Milestone: MW1 FINAL DETERMINISTIC PROOF · MW0 CLOSED · Option C INTEGRATED · Responses Compaction NOT ADOPTED · MW1 NOT COMPLETE · no REAL · no parallel architecture

---

## 4. Memory A/B/C Model Applied

| Memory | Production implementation |
|---|---|
| Memory A | Within-turn Runner working context (volatile) |
| Memory B | `ProductSqliteSession` → `nora-session.sqlite` / `session_items` — conversational continuity only, NOT Truth C |
| Truth C | `oa-product.sqlite` — LPS, HumanDecision, Evidence, ExecutionAttempt, etc. |

Hard invariants verified at boundary layer: Session≠Truth C, B≠authority, filter≠authorization, trace≠evidence

---

## 5. Option C Runtime Path (current main)

```
orchestrateProjectAssistantTurn (F1)
  → loadProjectRuntimeForAssistant (Truth C from Product SQLite)
  → runNoraCognitiveTurn (CORR-OPT-C-01: no caller history seed)
    → ProductSqliteSession (Memory B)
    → runNoraAgentsTurn (Agents SDK Runner)
      → createSfiaCallModelInputFilter (context integrity)
      → createSfiaRouteToolAdapters → routeToolCall (business authority)
```

Key files:
- `app/lib/nora-cognitive-runtime/productSqliteSession.ts`
- `app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts`
- `app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts`
- `app/lib/nora-cognitive-runtime/callModelInputFilter.ts`
- `app/lib/nora-cognitive-runtime/sfiaAgentsTools.ts`
- `app/lib/platform/tools/toolRouter.ts`
- `app/features/project-assistant/orchestrateTurn.ts`

---

## 6. Implementation Inventory

| Component | Status on main |
|---|---|
| ProductSqliteSession | **IMPLEMENTED** |
| Session≠Truth C separation | **IMPLEMENTED + TESTED** |
| runNoraCognitiveTurn no history import | **IMPLEMENTED + TESTED** |
| callModelInputFilter | **IMPLEMENTED + TESTED** |
| routeToolCall authority | **IMPLEMENTED + TESTED** |
| Fake→Runner convergence | **IMPLEMENTED + TESTED** |
| Legacy Nora loop retirement | **PROVEN** (fakeConvergence.d0.test.ts) |
| Compaction with provenance/loss | **NOT IMPLEMENTED** |
| MaterializationBasis / Class 1–4 B→C | **NOT IMPLEMENTED** |
| OpenAIResponsesCompactionSession | **NOT ADOPTED** (`responsesCompactionAdopted: false`) |
| nora-eval MW0 spine | **IMPLEMENTED** (MW0 scenarios only) |
| nora-eval MW1-S01/S02/S03 scenarios | **NOT PRESENT** |

---

## 7. Existing Test/Eval Inventory

**nora-cognitive-runtime/** (5 files, 38 tests — all PASS on CI):
- `session.d0.test.ts` — isolation, 2-turn continuity, SQLite resume, retrieval≠empty, atomic batch, schema
- `sessionTruthC.d0.test.ts` — Session never writes oa_*; compaction not adopted observable
- `authority.d0.test.ts` — filter preserves/demotes roles; no HD reconstruction; no caller history seed
- `runner.d0.test.ts` — tool rounds, deny paths, schema fidelity
- `fakeConvergence.d0.test.ts` — Fake F1→Runner; legacy loop gone; Session resume

**nora-eval/** (MW0-focused):
- `mw0.d0.test.ts`, corr05–08, providerInjection — MW0 harness/bar bindings
- `mw0.realCampaign.test.ts` — skipped (REAL, out of scope)

**No dedicated tests for:** MW1-S02 compaction, MW1-S03 materialization, MW1-S01 full project-restart E2E

---

## 8. Cross-Invariant Matrix CI-01→CI-14

| ID | Claim | Result | Evidence |
|---|---|---|---|
| CI-01 | Session != LPS/Truth C | **PASS** | sessionTruthC.d0.test.ts; productSqliteSession doc |
| CI-02 | Session cannot silently mutate Truth C | **PASS** | sessionTruthC.d0.test.ts (session_items only) |
| CI-03 | Memory B replay ≠ business authority | **PASS** | authority.d0.test.ts A4; runNoraCognitiveTurn CORR-OPT-C-01 |
| CI-04 | No false GO/HD from history | **PASS** | authority.d0.test.ts C1/C4 |
| CI-05 | Agent output != HumanDecision | **PASS** | authority.d0.test.ts A1/A2 |
| CI-06 | Runner availability != effective authority | **PASS** | runner.d0.test.ts deny paths; routeToolCall |
| CI-07 | callModelInputFilter = context integrity only | **PASS** | authority.d0.test.ts C3/C5 |
| CI-08 | routeToolCall authoritative for tools | **PASS** | sfiaAgentsTools.ts → toolRouter.ts |
| CI-09 | Unknown/forbidden tools fail closed | **PASS** | runner.d0.test.ts |
| CI-10 | Runner bounded by turn/budget | **PASS** | turnBudget.ts + runner tests |
| CI-11 | Fake uses same Runner path | **PASS** | fakeConvergence.d0.test.ts P3/P5 |
| CI-12 | No second Nora generic loop on F1 | **PASS** | fakeConvergence.d0.test.ts R1 (resolveRuntime gone) |
| CI-13 | Trace != Evidence | **PASS** | architecture + existing OA Evidence pipeline separate |
| CI-14 | No provider-backed REAL executed | **PASS** | mw0.realCampaign skipped; no API calls this cycle |

---

## 9. MW1-S01 Criteria Matrix

| Criterion | Result | Evidence |
|---|---|---|
| S01-01 Session continuity survives restart | **PARTIAL PASS** | session.d0.test.ts S2 recreate Session from SQLite |
| S01-02 Project isolation | **PASS** | session.d0.test.ts S1 |
| S01-03 Session identity/isolation | **PASS** | sessionKey in resume test |
| S01-04 Truth from Truth C not Session | **PASS** | orchestrateTurn loads Truth C; sessionTruthC boundary |
| S01-05 Honest unavailable B signaling | **INCOMPLETE** | Retrieval error≠empty (S3) exists; no deterministic E2E proving project-resume honest disclosure of missing B vs available C per story AC |
| S01-06 No invented transcript | **PASS** | runNoraCognitiveTurn uses last user only; no reconstruction |
| S01-07 No HD from replay | **PASS** | authority.d0.test.ts A4/C6 |
| S01-08 No legacy history import | **PASS** | runNoraCognitiveTurn.ts CORR-OPT-C-01; authority C6 |
| S01-09 NCC-BAR-07/CE-03 eval coverage | **INCOMPLETE** | barBindings.ts binds NCC-BAR-07 to `obs.tool.boundary` not memory honesty; no nora-eval scenario for S01 AC |
| S01-10 Truth C unchanged by Session ops | **PASS** | sessionTruthC.d0.test.ts |

**MW1-S01 verdict: INCOMPLETE — TOOLING / PROOF GAP**

Smallest corrective surfaces:
- Add MW1-S01 deterministic E2E (project restart + Truth C rehydrate + honest B limitation)
- Extend nora-eval BAR binding or add CE-03 observable for memory honesty (NCC-BAR-07 per C5 semantics)

---

## 10. MW1-S02 Mechanism Identification

**Actual current mechanism:** NONE satisfying MW1-S02 semantics.

Observed substitutes (NOT compaction):
- `orchestrateTurn.ts` `MAX_HISTORY_MESSAGES = 20` + `.slice(-20)` — process-local UI history truncation, no provenance/loss signaling, no Truth-C invalidation
- `ProductSqliteSession.getItems(limit?)` — tail slice only, no summarization

**responsesCompactionAdopted:** `false` in `optionCObservables.ts` — Responses Compaction NOT ADOPTED

---

## 11. MW1-S02 Criteria Matrix

| Criterion | Result |
|---|---|
| S02-01..S02-15 (all) | **INCOMPLETE — IMPLEMENTATION GAP** |

No production compaction policy exists. Cannot prove provenance retention, loss signaling, HD/STOP preservation, or stale-B invalidation on Truth C change.

**MW1-S02 verdict: INCOMPLETE — IMPLEMENTATION GAP**

Smallest corrective surface:
- Implement governed compaction module (separate from Responses Compaction) with unit+modeled+eval proof per C5
- Candidate files: new module under `app/lib/nora-cognitive-runtime/` + tests under `__tests__/nora-cognitive-runtime/`

---

## 12. MW1-S03 Materialization Path Identification

**Actual current path:** NO governed Memory B→Truth C materialization in TypeScript.

Existing OA writes (HumanDecision, Evidence, LPS) are direct product-domain persistence — NOT Class 1–4 + MaterializationBasis governed B→C promotion.

Session explicitly forbidden from writing Truth C (productSqliteSession.ts, sessionTruthC.d0.test.ts).

---

## 13. MW1-S03 Class 1–4 + MaterializationBasis Matrix

| Criterion | Result |
|---|---|
| S03-C1-01..C1-02 Class 1 | **INCOMPLETE — IMPLEMENTATION GAP** |
| S03-C2-01..C2-03 Class 2 | **INCOMPLETE — IMPLEMENTATION GAP** |
| S03-C3-01..C3-05 Class 3 | **PARTIAL** — HD pipeline exists (`recordHumanDecision.ts`) but NOT as governed B→C Class 3 materialization with MaterializationBasis |
| S03-C4-01..C4-05 Class 4 | **PARTIAL** — Evidence pipeline exists (`registerEvidence.ts`, `ingestExecutionAttemptEvidence.ts`) but NOT as governed B→C Class 4 materialization |
| S03-M-01..M-06 Common | **INCOMPLETE — IMPLEMENTATION GAP** — no MaterializationBasis type/function in codebase |

**MW1-S03 verdict: INCOMPLETE — IMPLEMENTATION GAP**

---

## 14. CORR-MW1-07 / CORR-MW1-08 Status

| Correction | Still required? | Reason |
|---|---|---|
| CORR-MW1-07 (MaterializationBasis / Class matrix) | **YES** | Zero TypeScript implementation found |
| CORR-MW1-08 (materializeToTruthC / Evidence path) | **YES** | No governed B→C materialization workflow; existing Evidence/HD paths are not MaterializationBasis-governed |

---

## 15. Test Execution Results

### Local execution (this cycle)

| Command | Result | Note |
|---|---|---|
| npm run typecheck | **NOT RUN locally** | node_modules absent; install forbidden |
| npm run lint | **NOT RUN locally** | same |
| npm run build | **NOT RUN locally** | same |
| npm test | **NOT RUN locally** | same |

### Remote CI evidence — workflow 33364556408 @ main `0f265149`

| Step | Result |
|---|---|
| Typecheck | **SUCCESS** |
| Lint | **SUCCESS** |
| Build | **SUCCESS** |
| Unit tests (Vitest) | **SUCCESS** — 234 files passed, 2248 tests passed, 132 skipped |
| Modeled governance tests | **SUCCESS** |
| Secret pattern scan | **SUCCESS** |
| Trailing whitespace | **SUCCESS** |
| SFIA Studio Required Gate | **SUCCESS** |

**Targeted nora-cognitive-runtime (CI):** 38/38 PASS across 5 files
**Targeted nora-eval (CI, excl REAL):** all PASS; mw0.realCampaign skipped

---

## 16. Fake/Real Qualification

Applicable: N/A for REAL · No provider calls · No REAL subprocess · Morris REAL gate NOT consumed · Fake used only via existing deterministic paths

---

## 17. Proof Ceiling

Entry: MW0 DETERMINISTIC PROVEN · This cycle maximum: DETERMINISTIC PROVEN (not achieved for MW1 stories)
NOT proven: REAL BOUNDARY, E2E REAL, READY FOR REAL, MW1 closure, Cognitive Completion
DETERMINISTIC PROVEN ≠ READY FOR REAL

---

## 18. Responses Compaction Status

**CANDIDATE / NOT ADOPTED** — confirmed in code (`optionCObservables.ts`) and tests (`sessionTruthC.d0.test.ts`)

---

## 19. MW0 Inherited Reserves

MW0-R01, MW0-R02, RESERVE-OPT-C-02, RESERVE-OPT-C-03 — OPEN / NON-BLOCKING (unchanged)

---

## 20. Implementation Gaps (blocking MW1 proof)

1. **GAP-S02-IMPL:** No compaction mechanism — `orchestrateTurn.ts` slice(-20) is not MW1-S02
2. **GAP-S03-IMPL:** No MaterializationBasis / Class 1–4 B→C workflow in product code
3. **GAP-CORR-07-08:** CORR-MW1-07/08 still required per OD-04

---

## 21. Tooling/Proof Gaps

1. **GAP-S01-PROOF:** No MW1-S01 story-level deterministic E2E (project restart + Truth C + honest B disclosure)
2. **GAP-S01-EVAL:** NCC-BAR-07 bound to tool boundary in `barBindings.ts`, not memory honesty per C5 S01 AC; no CE-03 eval scenario
3. **GAP-S02-PROOF:** No unit/modeled/eval tests for compaction (mechanism absent)
4. **GAP-S03-PROOF:** No deterministic E2E for governed materialization (path absent)
5. **GAP-LOCAL-EXEC:** Proof worktree lacks node_modules — local vitest not executable without install (CI used instead)

---

## 22. Files Requiring Future Correction (reference only — NOT modified)

| Area | Candidate paths |
|---|---|
| S02 compaction | new module + `orchestrateTurn.ts` integration |
| S03 materialization | new `materializationBasis` / `materializeToTruthC` per OD-04 |
| S01 E2E proof | `__tests__/nora-cognitive-runtime/` + nora-eval catalog extension |
| BAR-07 binding | `app/lib/nora-eval/barBindings.ts` |

---

## 23. Project Mutation Proof

git status: clean (untracked `.tmp-sfia-review/` only) · No commit/push/PR/merge

---

## 24. Next Gate

**CHATGPT GAP REVIEW → MORRIS DECISION ON SEPARATE BOUNDED CORRECTIVE CYCLE(S)**

Do NOT mark MW1 COMPLETE. Do NOT start MW2.

---

## 25. Instruction ChatGPT

Read `sfia-review-handoff/latest-chatgpt-review.md` at MW1_HANDOFF_SHA published by this cycle.

Verify: Cycle 9/RUN/CRITICAL, main 0f265149, S01/S02/S03 results, gap classifications, cross-invariants, CI evidence, no REAL, RC NOT ADOPTED, no project mutation, Review Pack completeness.

If S01/S02/S03 not proven: **MW1 FINAL DETERMINISTIC PROOF — INCOMPLETE**

---

## Appendix A — CI Targeted Test Log Excerpt (workflow 33364556408)

```
✓ __tests__/nora-cognitive-runtime/fakeConvergence.d0.test.ts (11 tests)
✓ __tests__/nora-cognitive-runtime/runner.d0.test.ts (11 tests)
✓ __tests__/nora-cognitive-runtime/authority.d0.test.ts (7 tests)
✓ __tests__/nora-cognitive-runtime/session.d0.test.ts (7 tests)
✓ __tests__/nora-cognitive-runtime/sessionTruthC.d0.test.ts (2 tests)
Test Files 234 passed | 14 skipped (248)
Tests 2248 passed | 132 skipped (2380)
```
