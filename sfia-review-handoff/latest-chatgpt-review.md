# ChatGPT Review Pack — Lifecycle Recommendation CI Timeout Qualification

## 1. Identity

| Field | Value |
|---|---|
| UTC timestamp | 2026-09-08T20:05:25Z (pre-pack git truth); pack finalized 2026-09-08T20:12:00Z approx |
| Cycle ID | SFIA-STUDIO-PRODUCT-PROOF-LIFECYCLE-RECOMMENDATION-PR-CI-TIMEOUT-QUAL-01 |
| Cycle | Cycle 9 — QA / Validation |
| Typology | EVOL |
| Profile | CRITICAL |
| Execution mode | READ-ONLY PRODUCT QA / DIAGNOSTIC QUALIFICATION |
| Capability | Lifecycle Recommendation & Pilot Decision Continuity |
| Milestone | Product Proof / Pilot-Governed Project Lifecycle / PR CI closure |
| Runtime v3 | NON ADOPTED |
| REAL status | ZERO REAL = YES |

## 2. Product Git Truth

| Field | Value |
|---|---|
| Product workspace | `/Users/morris/Projects/sfia-lr-delivery-isolated-e6d7c649` |
| Expected repository | mcleland147/sfia-workspace |
| Product branch | `delivery/sfia-studio-lifecycle-recommendation-product` |
| Initial Product HEAD | `2081ce477182d133cc71c93dd7d547433bd6a976` |
| Final Product HEAD | `2081ce477182d133cc71c93dd7d547433bd6a976` (unchanged) |
| main/base | `e6d7c649e9d0522b60401f11fb8dd1fd4b122637` |
| Predecessor candidate | `dbc1755315f0878ccc5be122966ad0b34895da47` |
| Incoming handoff SHA | `1b163bf74bd98e21d3190158f3f9d799e02c9ada` |
| PR | #477 (draft/open; not mutated this cycle) |
| Required CI run | `34262518389` |

### Pre-check (mandatory)

- `pwd` = `/Users/morris/Projects/sfia-lr-delivery-isolated-e6d7c649`
- branch = `delivery/sfia-studio-lifecycle-recommendation-product`
- `HEAD` = `2081ce477182d133cc71c93dd7d547433bd6a976`
- `origin/main` = `e6d7c649e9d0522b60401f11fb8dd1fd4b122637`
- staged Product = empty
- tracked Product source/test/config diff = **none**
- dirty/untracked = review-only under `.tmp-sfia-review/**` (authorized overwrite target)
- No Product commit newer than `2081ce47…` on branch/PR head

## 3. Morris authorization consumed

Morris “ok go” authorizes **only** this bounded read-only CI timeout qualification cycle:

**Authorized:** repo/local Git truth; source inspection; history/diff; bounded local diagnostic test execution; timings/causal evidence; overwrite `.tmp-sfia-review/chatgpt-review.md`; publish Review Handoff to `sfia/review-handoff`; remote verify handoff.

**NOT authorized (and NOT performed):** Product source/test/config edits; timeout/config mutation; Product staging/commit/push; PR mutation; mark-ready; merge; GitHub CI/workflow rerun; second Product fix; schema/model/DDL; architecture change; package install; REAL execution; executing the recommended next action after qualification.

Recommendation is **not** a Morris decision.

## 4. Sources read (with refs)

### Process / method (workspace HEAD / present files)

- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md`
- `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/04-qa-validation.md`

### Studio convergence / Product Completion / v3 framing (present; Runtime v3 NON ADOPTED)

- `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md`
- `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`
- `projects/sfia-studio/product-completion/01-product-completion-cadrage.md`
- `projects/sfia-studio/sfia-v3-framing/32-living-project-state-and-dynamic-trajectory.md`
- `projects/sfia-studio/sfia-v3-framing/33-epistemology-provenance-and-contradiction-model.md`
- `projects/sfia-studio/sfia-v3-framing/35-artifact-evidence-debt-and-controlled-learning.md`
- `projects/sfia-studio/sfia-v3-framing/37-studio-v3-foundations-and-consolidation-decision-pack.md`

### Review / CI evidence

- Incoming handoff tip `1b163bf7…` (`sfia-review-handoff/latest-chatgpt-review.md` on `origin/sfia/review-handoff`)
- GitHub Actions run `34262518389` @ head `2081ce47…` (logs downloaded)
- Prior PR CI run `34234709184` @ head `dbc17553…` (logs downloaded for comparative timings)

### Product sources inspected at `2081ce47…` (and compared to `e6d7c649…` / `dbc17553…`)

- Failing tests (blob-identical across main/dbc/2081):
  - `projects/sfia-studio/app/__tests__/nora-eval/g2.catalog-versioning-mw6.test.ts` blob `3505378284e3a40528fb9febf7f66fb879626d14`
  - `projects/sfia-studio/app/__tests__/nora-eval/mw0.d0.test.ts` blob `138142a6f811298b878ff76ac20d2c34e78060b3`
  - `projects/sfia-studio/app/__tests__/project-assistant/w3cPostEvidenceCorrection.test.ts` blob `aa52da53b5a29f445ff4271bd787851f210ab59f`
- `projects/sfia-studio/app/vitest.config.ts` (no `testTimeout` override; Vitest default **5000 ms**)
- `projects/sfia-studio/app/package.json` (`"test": "vitest run"`)
- `.github/workflows/sfia-studio-ci.yml` (Unit tests step: `npm test`)
- `2081ce47` changed files (actual paths):
  - `projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts`
  - `projects/sfia-studio/app/features/project-assistant/mw3AvailableEvidence.ts`
  - `projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts`
  - `projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts`
- Call-chain related:
  - `lib/nora-eval/d0Runner.ts` / `mw1S01Observe.ts` (imports `orchestrateProjectAssistantTurn`)
  - `lib/nora-eval/mw4Observe.ts` (imports `mw3AvailableEvidence`)
  - `features/project-assistant/f3/postEvidenceNoraAnalysis.ts` (uses `resolveConversationProvider` / FakeConversation — **not** Agents model wrap)

**Note:** Contract text listed incorrect expected titles (`CATALOG_VERSIONING_FAILED`, `NEEDS_USER_INPUT→EXECUTED`, deferred DecisionRecord) and some wrong 2081 paths (`lib/oa/...`). Qualification uses **CI + Git truth** titles/paths below.

## 5. Convergence qualification

| Item | State |
|---|---|
| LR deterministic Product candidate | KEEP pending CI closure |
| Bounded correction `2081ce47…` | KEEP pending causal qualification → **qualified as not proven Product regression for these timeouts** |
| Vitest harness / GitHub CI | REUSE |
| ADAPT / new architecture | NOT authorized; not performed |
| Merge readiness | **NOT proven** (required CI still red on observed run) |
| Runtime v3 | NON ADOPTED |
| Known remaining gap | Causal class of three 5000 ms CI timeouts (this cycle) |
| Trajectory | timeout qualification → **Morris gate** → (A rerun / B test-infra / C Product / D more evidence) → CI green → readiness → merge gate |
| Critical path | No parallel architecture / harness / CI framework created |

## 6. CI run / job / runner evidence

### Run `34262518389` @ `2081ce477182d133cc71c93dd7d547433bd6a976`

| Job | ID | Conclusion |
|---|---|---|
| Detect SFIA Studio changes | `102183747216` | PASS |
| Build and validate SFIA Studio | `102183789143` | FAIL |
| SFIA Studio Required Gate | `102185842539` | FAIL |

Build job steps: Typecheck PASS; Lint PASS; Build PASS; **Unit tests (Vitest) FAIL**.

Vitest summary (CI): **3 failed / 3283 passed / 135 skipped**; Duration **267.72s** (tests aggregate **577.79s**).

### Runner / environment (from job log header)

- GitHub-hosted runner
- Runner version: **2.337.0** (contract expected ~2.333.0 — observed differs)
- OS: Ubuntu; Image: **ubuntu-24.04**
- Image release: **ubuntu24/20260907.300**
- Node: workflow Node 24 default note present
- Checkout SHA: `2081ce47…`

### Exact three failures (CI)

1. `__tests__/nora-eval/g2.catalog-versioning-mw6.test.ts` > `G2 — catalog versioning + MW6 coverage` > **`historical D0 suite still PASS; global suite includes MW6`**
   Error: `Test timed out in 5000ms.` (file wall ~10977 ms; line ~106)

2. `__tests__/nora-eval/mw0.d0.test.ts` > `MW0 nora-eval D0 harness` > **`full D0 suite PASS`**
   Error: `Test timed out in 5000ms.` (file wall ~5586 ms; line ~49)

3. `__tests__/project-assistant/w3cPostEvidenceCorrection.test.ts` > `W3C-R04/R05 evidence binding` > **`R04/R05: terminal B rehydrates correctly; A never gets B analysis`**
   Error: `Test timed out in 5000ms.` (reported ~**5423 ms**; file wall ~29514 ms; line ~371)

Original GAP-01/GAP-02 **absent** from this failure set.

## 7. GAP-01 / GAP-02 status

| Gap | Prior blocker | This cycle evidence | Status |
|---|---|---|---|
| GAP-01 | `importBoundaries` forbidden `orchestrateTurn→vertical-slice-runtime` | Local `npx vitest run __tests__/vertical-slice-runtime/importBoundaries.test.ts` → **5/5 PASS** | **CLOSED** |
| GAP-02 | e2 product-equivalent-control Invalid output type / schema | Local `npx vitest run __tests__/nora-eval/e2.product-equivalent-control.d0.test.ts` → **12/12 PASS** | **CLOSED** |

Prior CI on predecessor `dbc17553…` run `34234709184` failed on GAP-01/GAP-02 (9 failed tests) — **not** on these three timeouts. The three timeout tests **passed** on that predecessor CI run (see §9).

## 8. Source / history comparison (main vs dbc vs 2081)

### Test files

All three failing test files are **byte-identical** at `e6d7c649` = `dbc17553` = `2081ce47` (same Git blobs). No test edit in LR product commit or correction commit.

### Production delta `dbc17553…` → `2081ce47…`

Only the four boundary/coercion files listed in §4. Intent: restore import boundary + Fake/Scripted product-turn coerce — **not** timeout changes.

### Relation of failures to those four files

| Test | Direct import of 2081 files? | Plausible transitive path? | Evidence FOR link to 2081 | Evidence AGAINST |
|---|---|---|---|---|
| g2 historical D0 dual suite | No | Yes: `runFullD0Suite` → `mw1S01Observe` → `orchestrateTurn`; `mw4Observe` → `mw3AvailableEvidence` | Shares D0 path that touches changed seams | Test identical; local timings ~273–400 ms; predecessor CI PASS 1116 ms; 2081 change is seam/coercion not suite expansion |
| mw0 full D0 suite | No | Same D0 path | Same | Local ~161–177 ms; predecessor CI PASS 628 ms |
| w3c R04/R05 | **No** (BFS import scan of test+helpers: **0 hits** to the four files) | Uses `FakeConversationProvider` + `postEvidenceNoraAnalysis` → `resolveConversationProvider` — **not** `providerAgentsModel` / `runNoraAgentsTurn` | Only temporal correlation (failed on 2081 CI after correction) | **No code-path link**; predecessor CI PASS **385 ms**; local ~104–226 ms; suite-wide CI slowdown unexplained by Agents wrap |

### Vitest timeout behavior

- Repo `vitest.config.ts`: **no** `testTimeout` / `hookTimeout`
- Default Vitest timeout **5000 ms** applies
- No intentional near-5s waits found in the three failing tests
- g2 intentionally runs **two** `runFullD0Suite` passes (heavier than mw0)

## 9. Comparative CI timings (predecessor vs current)

| Test | `dbc17553` CI `34234709184` | `2081ce47` CI `34262518389` |
|---|---|---|
| g2 historical D0… | **PASS 1116 ms** | **FAIL timeout 5000 ms** |
| mw0 full D0 suite PASS | **PASS 628 ms** | **FAIL timeout 5000 ms** |
| w3c R04/R05… | **PASS 385 ms** | **FAIL ~5423 ms timeout** |
| Suite Duration | 140.54s (tests agg 122.66s) | 267.72s (tests agg **577.79s**) |
| Runner image | ubuntu24/**20260831.293** | ubuntu24/**20260907.300** |

Suite-wide ~**4.7×** increase in aggregated test time between the two CI runs cannot be explained by the narrow four-file boundary fix alone (especially for w3c, which does not call those files). Different runner image releases are an environmental confounder.

## 10. Local diagnostic commands actually run

Working directory unless noted: `…/projects/sfia-studio/app` at Product HEAD `2081ce47…`.
**No** `npm install` / lockfile mutation. Existing `node_modules` reused.

Artifacts under `.tmp-sfia-review/timeout-qual/`.

### A/B — individual tests ×5 @ default timeout

```bash
npx vitest run __tests__/nora-eval/g2.catalog-versioning-mw6.test.ts -t "historical D0 suite still PASS" --reporter=verbose
npx vitest run __tests__/nora-eval/mw0.d0.test.ts -t "full D0 suite PASS" --reporter=verbose
npx vitest run __tests__/project-assistant/w3cPostEvidenceCorrection.test.ts -t "R04/R05: terminal B rehydrates correctly" --reporter=verbose
```

### C — three-file batch ×5 @ default timeout

```bash
npx vitest run \
  __tests__/nora-eval/g2.catalog-versioning-mw6.test.ts \
  __tests__/nora-eval/mw0.d0.test.ts \
  __tests__/project-assistant/w3cPostEvidenceCorrection.test.ts \
  --reporter=verbose
```

### D — CLI timeout override

**Not used.** All default-timeout local runs completed successfully well under 5000 ms; override would not add causal discrimination beyond already-observed CI completion-vs-timeout contrast.

### E — GAP re-check

```bash
npx vitest run __tests__/vertical-slice-runtime/importBoundaries.test.ts --reporter=verbose
npx vitest run __tests__/nora-eval/e2.product-equivalent-control.d0.test.ts --reporter=verbose
```

### F — baseline/predecessor worktrees (created this cycle; node_modules symlinked; no install)

- `/Users/morris/Projects/sfia-lr-timeout-qual-worktrees/main-e6d7c649` @ `e6d7c649…`
- `/Users/morris/Projects/sfia-lr-timeout-qual-worktrees/dbc-dbc17553` @ `dbc17553…`

```bash
npx vitest run <three files> -t "historical D0 suite still PASS|full D0 suite PASS|R04/R05: terminal B rehydrates correctly" --reporter=verbose
```

×3 iterations each ref.

## 11. Repeated-run corpus (current head `2081ce47…`)

### Individual (default timeout)

| Label | Result | Vitest test ms | Wall s (process) |
|---|---|---|---|
| g2-default-i1..i5 | **5/5 PASS** | 289, 308, 301, 400, 273 | 2.650, 2.049, 1.911, 2.104, 1.916 |
| mw0-default-i1..i5 | **5/5 PASS** | 161, 169, 177, 161, 161 | 1.825, 1.876, 1.764, 1.770, 1.906 |
| w3c-default-i1..i5 | **5/5 PASS** | 116, 126, 121, 116, 226 | 1.619, 1.679, 1.684, 1.616, 1.781 |

**No FAIL / no timeout** under local default 5000 ms. Therefore **not** labeled FLAKY from this corpus (no PASS+FAIL under equivalent local conditions).

### Batch three files (default timeout)

| Iter | Result | g2 ms | mw0 ms | w3c ms | Wall s |
|---|---|---|---|---|---|
| 1 | PASS (exit 0) | 366 | 246 | 110 | 2.850 |
| 2 | PASS | 377 | 233 | 109 | 3.553 |
| 3 | PASS | 342 | 211 | 104 | 2.424 |
| 4 | PASS | 338 | 216 | 101 | 2.631 |
| 5 | PASS | 360 | 225 | 109 | 2.419 |

### Baseline / predecessor local runtime

| Ref | Iters | Result | Approx test ms (g2/mw0/w3c) |
|---|---|---|---|
| main `e6d7c649` | 3/3 PASS | 328–358 / 221–226 / 165–172 |
| dbc `dbc17553` | 3/3 PASS | 334–362 / 223–257 / 160–210 |
| current `2081ce47` | see above | same order of magnitude |

**BASELINE RUNTIME COMPARISON = PERFORMED** (local worktrees). Locally, no unique slowdown at `2081ce47` vs main/dbc for these three tests.

**GitHub CI baseline for main @ these exact Product binaries:** not re-run (forbidden). Predecessor CI timings in §9 stand as the strongest remote comparative evidence.

## 12. Per-test evidence matrix

### Test 1 — g2 historical D0 suite / global MW6

| Field | Evidence |
|---|---|
| File / title | `g2.catalog-versioning-mw6.test.ts` / `historical D0 suite still PASS; global suite includes MW6` |
| Current-head default corpus | 5/5 PASS; 273–400 ms |
| Batch corpus | 5/5 PASS; 338–377 ms |
| main runtime | 3/3 PASS ~328–358 ms |
| dbc runtime | 3/3 PASS ~334–362 ms; **CI PASS 1116 ms** |
| Relation to 2081 files | Transitive via D0→mw1→orchestrateTurn (+ mw4→mw3) |
| Timing | Heavy dual `runFullD0Suite`; CI timed out at default 5s after suite-wide slowdown |
| FOR Product regression | Failed only on post-correction CI; touches orchestrateTurn transitively |
| AGAINST Product regression | Local parity with main/dbc; predecessor CI PASS; change is seam not suite logic; suite-wide CI slowdown |
| FOR test/infra timing | Default 5s; CI timeout class; completes quickly when not contended |
| FOR pre-existing/baseline | Test blob on main unchanged; risk of 5s budget under load is structural |
| **Causal classification** | **TEST_OR_INFRA_TIMING_SUSPECTED** |
| Confidence | **MEDIUM–HIGH** (timing nature HIGH; 2081 non-causality MEDIUM) |
| Unproven | Exact CI scheduler/CPU contention; whether a second 2081 CI run would pass |

### Test 2 — mw0 full D0 suite PASS

| Field | Evidence |
|---|---|
| File / title | `mw0.d0.test.ts` / `full D0 suite PASS` |
| Current-head default corpus | 5/5 PASS; 161–177 ms |
| Batch corpus | 5/5 PASS; 211–246 ms |
| main / dbc local | PASS ~221–257 ms |
| dbc CI | **PASS 628 ms** |
| Relation to 2081 | Same transitive D0 path as Test 1 |
| FOR / AGAINST Product | Same pattern as Test 1; local/CI-predecessor strongly against unique Product hang |
| FOR test/infra | Same 5000 ms default timeout class |
| **Causal classification** | **TEST_OR_INFRA_TIMING_SUSPECTED** |
| Confidence | **MEDIUM–HIGH** |
| Unproven | Same as Test 1 |

### Test 3 — w3c R04/R05 rehydrate binding

| Field | Evidence |
|---|---|
| File / title | `w3cPostEvidenceCorrection.test.ts` / `R04/R05: terminal B rehydrates correctly; A never gets B analysis` |
| Current-head default corpus | 5/5 PASS; 116–226 ms |
| Batch corpus | 5/5 PASS; 101–110 ms |
| main / dbc local | PASS ~160–210 ms |
| dbc CI | **PASS 385 ms** |
| Relation to 2081 files | **None in import graph**; FakeConversation path ≠ Agents coerce wrap |
| FOR Product regression | Temporal only |
| AGAINST Product regression | **Strong** (no path; predecessor CI 385 ms; local fast; file identical) |
| FOR test/infra | CI 5423 ms timeout under 5s default amid 29.5s file wall / suite slowdown |
| FOR pre-existing | Test exists unchanged on main; timeout risk under load |
| **Causal classification** | **TEST_OR_INFRA_TIMING_SUSPECTED** |
| Confidence | **HIGH** |
| Unproven | Precise CI contention mechanism |

## 13. Global causal verdict

**Overall family: A — RERUN-ONLY CANDIDATE**

Rationale:

1. Current Product code at `2081ce47…` **repeatedly completes successfully** under normal/default Vitest timeout locally (15 individual + 5 batch; all PASS, all ≪ 5s).
2. No material Product regression proven: w3c has **no** link to the four changed files; D0 local timings match main/dbc; predecessor CI passed all three.
3. Observed CI failures are **exclusively** `Test timed out in 5000ms` amid a suite-wide slowdown and a **different** runner image release vs the green predecessor timings.
4. Single red CI sample ≠ proof of flakiness; also ≠ proof of Product defect. Smallest next gated action is **CI rerun authorization**, not Product mutation.

**Not selected as primary:**

- **C PRODUCT CORRECTION** — would require Product regression PROVEN/strong SUSPECTED unique to `2081ce47`; evidence insufficient / contradicted for w3c.
- **B TEST/INFRA CORRECTION** — plausible **if rerun fails again** (raise per-test timeout / isolate heavy D0), but not the first Morris gate while a single contended CI sample exists and local defaults are green.
- **D INCONCLUSIVE** — residual uncertainty remains, but evidence is sufficient to recommend a concrete next gate (rerun) without implementing anything.

**Do not call FLAKY** as causal conclusion (no controlled PASS+FAIL corpus under materially equivalent CI conditions).

### Recommended NEXT Morris gate

**Authorize GitHub Actions rerun of required CI for PR #477 at head `2081ce477182d133cc71c93dd7d547433bd6a976` only** (no Product edit, no timeout config edit, no mark-ready, no merge).

If rerun **PASSes** → proceed to separate PR readiness review cycle.
If rerun **FAILs again** on the same three timeouts → authorize a **bounded TEST/INFRA** Delivery cycle (evidence-backed timeout/isolation), not an automatic Product correction.

### STOP condition language (for Morris)

`STOP — CI RERUN REQUIRES MORRIS DECISION`

## 14. ZERO REAL / reserves

- **ZERO REAL = YES** (unit/local/CI fake adapters only; no external REAL proof)
- **RESERVE-UX-01** = remains OPEN (R14 visual) — this cycle does not close it
- **RESERVE-PROOF-01** = remains OPEN (entrypoint reader-fault) — this cycle does not close it
- Runtime v3 **NOT** ADOPTED
- Product **NOT** READY / merge **NOT** proven

## 15. Product mutation invariant proof

| Check | Result |
|---|---|
| Product HEAD before | `2081ce477182d133cc71c93dd7d547433bd6a976` |
| Product HEAD after | `2081ce477182d133cc71c93dd7d547433bd6a976` |
| Product commit | **NO** |
| Product push | **NO** |
| Product staging | **NO** |
| Product source/test/config edit | **NO** (`git diff` empty under `projects/sfia-studio`, `.github`) |
| PR #477 mutation | **NO** |
| CI rerun | **NO** |
| mark-ready / merge | **NO** |
| Review-only state | `.tmp-sfia-review/**` (pack + `timeout-qual/` logs) |
| Diagnostic worktrees left | `/Users/morris/Projects/sfia-lr-timeout-qual-worktrees/{main-e6d7c649,dbc-dbc17553}` (created this cycle; node_modules symlink only) |

## 16. Actions explicitly NOT performed

Product edits; test edits; Vitest/CI config edits; sleeps/skips; package install; Product commit/push; PR edit; CI rerun; mark-ready; merge; second Product fix; schema/DDL; architecture; REAL; executing the recommended rerun.

## 17. Final verdict

**TIMEOUT QUALIFICATION COMPLETE — RERUN-ONLY CANDIDATE — MORRIS RERUN AUTHORIZATION REQUIRED — PRODUCT UNCHANGED — ZERO REAL — HANDOFF REMOTE VERIFIED** *(handoff verification completed after publication step)*

### Coverage footer

- report complete: **YES**
- test evidence complete: **YES**
- source comparison complete: **YES**
- all 3 CI failures represented: **YES**
- Product mutation performed: **NO**
- synthesis-only: **NO**
- artificial truncation: **NO**
- verdict: **COMPLETE**
