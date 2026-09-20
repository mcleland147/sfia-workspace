# ChatGPT Review Pack — FULL (PR #506 POST-MERGE CI FAILURE DIAGNOSTIC)

- **Timestamp UTC:** 2026-09-20T08:51:13Z
- **Timestamp Europe/Paris:** 2026-09-20T10:51:13+0200
- **Macro:** PRODUCT-PROJECT-WORKSPACE-ARTIFACT-ROUTING-01
- **Mode:** SAME MACRO / NO MICRO-CYCLE
- **Cycle:** 14 — Post-merge
- **Lens:** QA / Validation
- **Typologie:** EVOL
- **Profil:** Critical
- **Morris GO consumed:** bounded post-merge CI failure diagnosis (read-only)
- **Diagnostic target merge:** `8448c3f514fdaad631e1b5865859f9b8a3663fc7`
- **PR #506 approved head:** `8488e82724ea70e91ba206aefe039e69749774d6`
- **Post-merge CI run:** `35498525775`
- **Pre-merge CI run:** `35498091602`
- **Mutations this cycle:** source 0 · project commit 0 · project push 0 · GitHub rerun 0 · REAL 0 · LIVE 0

## 1. Local Git Truth

| Field | Value |
|---|---|
| Diagnostic worktree | `/tmp/sfia-pr506-postmerge-ci-diag` (detached) |
| HEAD | `8448c3f514fdaad631e1b5865859f9b8a3663fc7` |
| origin/main | `8448c3f514fdaad631e1b5865859f9b8a3663fc7` |
| Parents | `a6dba977…` + `8488e827…` |
| Worktree status | clean throughout |
| Local Node | **v22.14.0** (CI uses Node **24** — limitation recorded; not exact GitHub Node reproduction) |
| npm | 10.9.7 |
| Vitest | 3.2.7 |

## 2. Tree identity proof

| Ref | Commit | Tree |
|---|---|---|
| PR head | `8488e82724ea70e91ba206aefe039e69749774d6` | `7daf6d6c97ff20a1e48ef2969840c5afb6138496` |
| Merge | `8448c3f514fdaad631e1b5865859f9b8a3663fc7` | `7daf6d6c97ff20a1e48ef2969840c5afb6138496` |

**NO POST-MERGE SOURCE/TREE DELTA**

Implication: post-merge failure cannot be explained by changed repository file content versus the successful pre-merge Required Gate.

## 3. CI comparison

| | Pre-merge | Post-merge |
|---|---|---|
| Run | 35498091602 | 35498525775 |
| Event | `pull_request` | `push` |
| headSha | `8488e827…` | `8448c3f5…` |
| Tree | `7daf6d6c…` | `7daf6d6c…` (identical) |
| Detect | PASS | PASS |
| Typecheck/Lint/Build | PASS | PASS |
| Unit tests (Vitest) | PASS (~249s wall) | FAIL (~411s wall) |
| Required Gate | SUCCESS | FAIL |

### Exact post-merge failures (timeout-only; no assertion failures)

1. `activeCycleCognitiveWork.d0.test.ts` — CR-ACW-04 catalog-wide — **Test timed out in 5000ms**
2. `candidateTrajectoryCycleStart.d0.test.ts` — BAR-START-CORR-01…15 — **Test timed out in 5000ms**
3. same file — BAR-START-CORR2-01…15 — **Test timed out in 5000ms**

Suite: 2 failed files / 392 passed / 17 skipped · 3 failed tests / 4390 passed / 137 skipped.

### Pre-merge exact timings (same tree, successful CI)

| Test | Duration |
|---|---|
| CR-ACW-04 | ≈ 1514 ms |
| BAR-START-CORR-01…15 | ≈ 1187 ms |
| BAR-START-CORR2-01…15 | ≈ 1279 ms |
| ACW file total | ≈ 6667 ms (57 tests) |
| CTS file total | ≈ 4962 ms (13 tests) |

Lower-bound slowdown on failure: **>5000 / 1514 ≈ 3.3×** (ACW) · **>5000 / 1187 ≈ 4.2×** (CORR) · **>5000 / 1279 ≈ 3.9×** (CORR2).

## 4. Workflow event-context comparison

Workflow: `.github/workflows/sfia-studio-ci.yml` (READ ONLY — not modified).

| Factor | Material difference for `npm test`? |
|---|---|
| Node | No — both `node-version: "24"` |
| Install | No — `npm ci` |
| Working directory | No — `projects/sfia-studio/app` |
| Test command | No — `npm test` → `vitest run` |
| Secrets / special Vitest env | No material Unit-test env delta found |
| Runner OS | No — `ubuntu-latest` |
| Concurrency group | Event-dependent group key (`pr.number` vs `ref`) but does not alter test command |
| Job `if` condition | PR requires `studio_changed`; push always eligible — both runs executed validate |
| Trailing whitespace step | Event-dependent SHA range — **after** Vitest; irrelevant to timeout failures |

**NO MATERIAL TEST-COMMAND EVENT DELTA FOUND**

Event difference alone does not change the Vitest invocation. Remaining plausible drivers: runner load / parallel worker contention / stochastic timing.

## 5. Relation to PR #506

| Question | Answer |
|---|---|
| Were the two failing **test files** modified by PR #506? | **NO** |
| Were Product deps modified? | YES — many features/lib files including `createProject`, workspace routing, `cycleTypeCatalog` (+`repositoryWorkspaceSegment` fields) |
| Did catalog add new selectable cycle types? | **NO** — field additions only; ACW-04 iteration count not expanded by new types |
| Can Product path delta alone explain pre-PASS → post-FAIL on **identical tree**? | **NO** — same bytes passed Required Gate minutes earlier |

Call-path cost (read-only):
- ACW-04: loops all selectable active cycle types; each iteration `seedStarted` (runtime/SQLite bootstrap + START) + `composeStudioCognitiveContext` + CKC asserts. Heavy but deterministic catalog-wide proof.
- BAR-START-CORR: multi-case mega-test (~9 `seedPrepared` boots) fail-closed/reuse/legacy smoke.
- BAR-START-CORR2: multi-case mega-test (~12 `seedPrepared`) atomic UoW / binding classifier.
- Cleanup via afterEach temp dirs; no intentional sleeps.
- Expected complexity: multi-second under load, but pre-merge CI completed at ~1.2–1.5 s — should remain below 5 s under normal runner conditions.

D-PC-09 / managed-repo work may add I/O on Product create paths exercised by seeds, but that cost is present in the **same tree that already passed** pre-merge CI.

## 6. Reproduction matrix (exact merge tree · CI=true · Node 22 local)

### Phase A — each failing test ×5 isolated

| Test | R1 | R2 | R3 | R4 | R5 | Failures |
|---|---|---|---|---|---|---|
| CR-ACW-04 | 4058 PASS | 4786 PASS | 3683 PASS | 3993 PASS | 3212 PASS | **0/5** |
| BAR-START-CORR | 3104 PASS | 2472 PASS | 3208 PASS | 2974 PASS | 3120 PASS | **0/5** |
| BAR-START-CORR2 | 3813 PASS | 3675 PASS | 4287 PASS | 3593 PASS | 3715 PASS | **0/5** |

Note: local isolated maxima (4786 / 4287 ms) approach the 5000 ms budget more closely than pre-merge GitHub (~1.2–1.5 s). Local Node 22 ≠ CI Node 24; still all isolated PASS.

### Phase B — file level ×3

| File | Run results | Target test max observed |
|---|---|---|
| ACW (57 tests) | all PASS (file ~18–20 s) | ACW-04 3375–4134 ms PASS |
| CTS (13 tests) | all PASS (file ~14–15 s) | CORR ~2772–2922 · CORR2 ~3183–3519 PASS |

### Phase C — two-file matrix

| Mode | Result |
|---|---|
| Default concurrency run 1 | ACW-04 PASS 3634 · **CORR TIMEOUT · CORR2 TIMEOUT** |
| Default concurrency run 2 | ACW-04 PASS 4391 · CORR PASS · **CORR2 TIMEOUT** |
| Default concurrency run 3 | **all PASS** (ACW-04 4193) |
| Single worker (`--pool=forks --maxWorkers=1`) | **all PASS** — CORR 2195 · CORR2 3183 |

**Contention evidence:** timeouts reproduce under parallel two-file load; disappear under single worker / isolation.

### Phase D — full `npm test` observation (once)

| Metric | Value |
|---|---|
| Duration | 353.77 s |
| Files | 6 failed / 388 passed / 17 skipped |
| Tests | 12 failed / 4381 passed / 137 skipped |
| Three target tests | **PASSED** (ACW file 19354 ms · CTS file 16192 ms) |
| Other failures | pre-existing local env class (`gcecGitCommit*`, governed wiring flake, etc.) — **not** the post-merge GitHub failset |

LOCAL FULL SUITE FAILURE ≠ POST-MERGE REGRESSION.
LOCAL FULL SUITE PASS of the three targets supports load sensitivity, not Product assertion defect.

## 7. Classification (each failure)

| Failure | Classification |
|---|---|
| CR-ACW-04 timeout | **CI_LOAD_TIMING_FLAKE** |
| BAR-START-CORR-01…15 timeout | **CI_LOAD_TIMING_FLAKE** |
| BAR-START-CORR2-01…15 timeout | **CI_LOAD_TIMING_FLAKE** |

Secondary observation (not primary classification): under contention / slower local Node, durations approach the default 5000 ms individual budget → budget is relatively tight, but **pre-merge GitHub proof at ~1.2–1.5 s** shows the budget is adequate under normal CI load for this exact tree. Therefore do **not** select TEST_TIMEOUT_BUDGET_TOO_TIGHT as primary without first exhausting a load-flake rerun.

Rejected for now:
- PRODUCT_PERFORMANCE_REGRESSION — same tree passed Required Gate; isolated/single-worker PASS; no assertion failure.
- EVENT_CONTEXT_DIFFERENCE — no material `npm test` command/env delta.
- TEST_GLOBAL_STATE_LEAK — not evidenced; failures align with parallel CPU/IO contention, not residual env pointers.
- UNKNOWN — evidence sufficient for CASE A.

## 8. Consolidated root cause

**CI_LOAD_TIMING_FLAKE / load-sensitive timeout** on three heavy multi-bootstrap tests, exposed on post-merge `push` runner conditions despite identical tree and prior Required Gate PASS.

Challenge to initial hypothesis: **sustained**. Phase C reproduced timeout under default parallel load and cleared it under single worker. Pre-merge same-tree PASS remains decisive against Product regression claim.

## 9. Exactly one recommended next action

**ONE BOUNDED GITHUB CI RERUN** of workflow `SFIA Studio CI` on main at merge `8448c3f5…` (or equivalent Required Gate re-evaluation on that SHA) — **no source/test/timeout/workflow change**.

| | |
|---|---|
| Requires Morris GO? | **YES** — GitHub CI rerun not authorized in this diagnostic cycle |
| Not authorized yet | timeout edits, test harness changes, Product fixes, second PR |

If rerun FAILS again on the same three timeouts with similar evidence, escalate to a **separate** Morris GO for bounded test-only timeout/harness hardening (CASE B path) — not selected as this cycle's action.

## 10. Fake / Real / reserves

- Cursor REAL: **0**
- OpenAI LIVE: **0**
- Historical bounded REAL remains associated with Product source from PR #506
- Reserve: **REAL EVIDENCE PAYLOAD VERIFICATION ADAPTER ABSENT**
- No runtime v3 adoption claim
- No POST-MERGE VERIFIED claim
- No "rerun will pass" guarantee

## 11. Mutation ledger

| Action | Count |
|---|---|
| Product/source modification | **0** |
| Test/timeout/workflow modification | **0** |
| Project commit | **0** |
| Project push | **0** |
| Branch/PR creation | **0** |
| GitHub CI rerun | **0** |
| Merge/revert | **0** |

## 12. Verdict

```
PRODUCT-PROJECT-WORKSPACE-ARTIFACT-ROUTING-01
— PR #506 MERGED
— POST-MERGE REQUIRED GATE FAILED ON THREE TIMEOUTS
— PR HEAD TREE == MERGE TREE
— PRE-MERGE SAME TREE REQUIRED GATE PASSED
— THREE TIMEOUTS QUALIFIED AS CI LOAD/TIMING FLAKE
— NO PRODUCT REGRESSION EVIDENCE
— NO SOURCE FIX RECOMMENDED
— SAME MACRO / NO MICRO-CYCLE
— RECOMMEND ONE BOUNDED GITHUB CI RERUN
— RERUN REQUIRES MORRIS GO
— POST-MERGE VERIFIED STILL PENDING
```

Fin.
