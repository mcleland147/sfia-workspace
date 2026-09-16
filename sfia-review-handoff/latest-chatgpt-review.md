# SFIA STUDIO — PR493 POST-MERGE CI REMEDIATION
## Review Pack FULL — NORA-GLOBAL-MR-STAGE-A-PR493-CI-REMEDIATION-01

- timestamp Europe/Paris: 2026-09-17 00:14:01 CEST
- timestamp UTC: 2026-09-16T22:14:01Z
- milestone: NORA-GLOBAL-MR-STAGE-A-PR493-CI-REMEDIATION-01
- cycle: Cycle 8 — Delivery / implementation — post-merge prerequisite remediation
- typology: RUN — bounded correction / maintenance
- profile: CRITICAL
- Morris GO consumed: PR493 POST-MERGE CI REMEDIATION — ZERO REAL — ROOT-CAUSE FIRST — BOUNDED FIX + VALIDATION + COMMIT + PUSH + PR + CI + CHATGPT CRITICAL REVIEW — NO MERGE
- Verdict: **PR493 POST-MERGE CI REMEDIATION — PASS — ROOT CAUSE PROVEN — BOUNDED FIX IN PR #494 — PR CI GREEN ON 8bda5012e5cc723f3efeacb55fdba39e56883235 — READY FOR CHATGPT CRITICAL REVIEW — NO MERGE PERFORMED — ZERO REAL**

---

## 1. Exact Morris GO

GO MORRIS — PR493 POST-MERGE CI REMEDIATION — ZERO REAL — ROOT-CAUSE FIRST — BOUNDED FIX + VALIDATION + COMMIT + PUSH + PR + CI + CHATGPT CRITICAL REVIEW — NO MERGE

Authorized: forensic root-cause, bounded fix, local validation, one project commit, push, one PR, observe that PR CI, FULL Review Pack, Review Handoff publish-in-cycle, return for Critical Review.

NOT authorized: merge, Stage A REAL, provider preflight, OpenAI LIVE, hosted calls, Cursor REAL, doctrine/method/roadmap/C1/framing/workflow mutation, Stage B/C, runtime v3 adoption.

---

## 2. Repository / Git truth

| Item | Value |
|------|-------|
| Worktree | `/Users/morris/Projects/sfia-studio-product-real-docs-write-wiring` |
| Initial branch | `delivery/sfia-studio-product-real-docs-write-wiring` @ `61fb41f6…` |
| Remediation branch | `fix/sfia-studio-pr493-post-merge-ci` |
| Starting origin/main | `61ee233abf651b4ea5f262b68e97e63032c5a5fb` (exact match) |
| Merge parents | `a8a5dffaa84fe25f792074b93696a74722de8fdf` + `61fb41f65ef88419d3d224b401e56129515a5572` |
| PR #493 head tree | `f34c3f7ba8d8e7ca647b5b633b702e3ae285076e` |
| Merge/main tree | `f34c3f7ba8d8e7ca647b5b633b702e3ae285076e` (**identical**) |
| Final project HEAD | `8bda5012e5cc723f3efeacb55fdba39e56883235` |
| Commit parent | `61ee233abf651b4ea5f262b68e97e63032c5a5fb` |
| Dirty (excluded) | `.tmp-sfia-review/**` only; no staged unrelated project files |

**HEAD→merge PRODUCT CONTENT DELTA = ZERO** — post-merge red is NOT “merge introduced failing content.”

---

## 3. Canonical sources read

Process / routing (current Git):
- `prompts/templates/sfia-cycle-execution-template.md` (routing context via operating model)
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`

Studio convergence / governance (read-only):
- `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md`
- `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`
- `projects/sfia-studio/sfia-v3-framing/34-agent-capabilities-reversibility-and-execution-governance.md`
- `projects/sfia-studio/sfia-v3-framing/35-artifact-evidence-debt-and-controlled-learning.md`

CI (READ-ONLY):
- `.github/workflows/sfia-studio-ci.yml`

Implementation / tests inspected:
- Actual failing files from run `35152213361` (see §5 — **differs from Stage A STOP pack list**)
- `projects/sfia-studio/app/vitest.config.ts`
- `projects/sfia-studio/app/__tests__/setup.ts`
- `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx` (continuityMutationBlocked / Reformuler disable gate)

---

## 4. Convergence Pre-check

| Axis | Status |
|------|--------|
| Product Completion | CLOSED / COMPLETE BY MORRIS — unchanged |
| Build Doctrine / Roadmap | VALIDATED / ACTIVE — **not modified** |
| Nora Cognitive Completion | ACTIVE construction priority — CI integrity prerequisite only |
| runtime v3 | NON ADOPTED |
| Stage A REAL | NOT STARTED (prior GO terminated; this cycle does not relaunch) |
| Capability served | Restore truthful deterministic CI / Evidence integrity before any future Stage A reconsideration |

---

## 5. CI failure baseline (actual run 35152213361)

| Field | Value |
|-------|-------|
| Event | `push` (post-merge main) |
| Head | `61ee233abf651b4ea5f262b68e97e63032c5a5fb` |
| Conclusion | FAILURE |
| Required Gate | FAIL (`Studio validation required but result=failure`) |
| Vitest summary | **8 failed files / 10 failed tests** + **1 unhandled error** |
| Duration | 415.05s (tests sum **1023.46s**) |

### Actual failing tests (forensic truth — NOT the Stage A STOP pack list)

1. `__tests__/nora-eval/g2.catalog-versioning-mw6.test.ts` — `historical D0 suite still PASS; global suite includes MW6` — **5000ms timeout**
2. `__tests__/nora-eval/mw0.d0.test.ts` — `full D0 suite PASS` — **5000ms timeout**
3. `__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx` — `U03 — single non-recoverable: Reformulez + sole ID callback` — **AssertionError: spy called 0 times**
4. `__tests__/project-assistant/activeCycleCognitiveWork.d0.test.ts` — catalog-wide compose — **5000ms timeout**
5. `__tests__/project-assistant/candidateTrajectoryCycleStart.d0.test.ts` — BAR-START-08… / CORR-01… / CORR2-01… — **3 × 5000ms timeout**
6. `__tests__/project-assistant/preM6.realProductWiringAmend.test.ts` — T6/T9 — **5000ms timeout**
7. `__tests__/vertical-slice-runtime/deterministicCursorBoundary.test.ts` — product orchestration — **5000ms timeout**
8. `__tests__/oa/cycle/gcecOneLotDelivery.d0.test.ts` — docs_write prepare — **5000ms timeout**

Unhandled: `[vitest-worker]: Timeout calling "onTaskUpdate"`

### PR-green / push-red identical-tree invariant

| Run | Event | Head | Tree | Result | Duration / tests sum |
|-----|-------|------|------|--------|----------------------|
| 35150853828 | pull_request | `61fb41f6…` | `f34c3f7…` | SUCCESS | 189.80s / 177.63s |
| 35152213361 | push | `61ee233a…` | `f34c3f7…` | FAILURE | 415.05s / 1023.46s |

Same principal commands (`npm ci`, typecheck, lint, build, `npm test`). Divergence is nondeterminism / contention, not content delta.

**Note:** Prompt §5 “known failure set” (cycle-start ENOENT / overallSynthesis etc.) does **not** match this run’s log. Forensic work used the GitHub failed-log truth above.

---

## 6. ROOT-CAUSE PROOF

### OBSERVATION
- Identical trees; PR CI green; push CI red with clustered 5s timeouts + worker RPC timeout + U03 spy=0.
- Individually, all 8 files PASS in <4s locally.
- Failset under default pool (6 runs): **3/6 failed**, always including U03; sometimes also D0/BAR timeouts.
- Failset `--maxWorkers=2` (4 runs): **4/4 PASS**.
- Full local `CI=true npm test` before fix: **1 fail = U03 only** (374 files otherwise green).
- Product `TrajectorySurface`: Reformuler `disabled` when `continuityMutationBlocked` (subject or EC pending/error). Subject ready paints title before EC rehydrate completes. Sibling test “READY lost pass re-enables Reformuler” already `waitFor(…toBeEnabled())`; U03 did not.

### HYPOTHESIS
1. U03 clicks before EC continuity clears → disabled button → onClick not invoked → spy 0 (test race against intentional fail-closed gate).
2. Unbounded file parallelism under contested GHA CPUs delays intentional mega-tests past default 5s and starves vitest worker RPC (`onTaskUpdate`), cascading clustered timeouts.

### EXPERIMENT
| Experiment | Result |
|------------|--------|
| Individual 8 files | All PASS |
| Failset ×6 default | 3/6 FAIL (U03 ± timeouts) |
| Failset ×4 `--maxWorkers=2` | 4/4 PASS |
| Full `CI=true` before fix | U03 FAIL only |
| After U03 wait + CI maxWorkers=2: failset ×3 default + ×3 CI | 6/6 PASS |
| After fix: full `CI=true npm test` | **374 passed \| 17 skipped; 4175 passed \| 137 skipped** |
| PR #494 CI run 35156019998 on `8bda5012` | Detect PASS / Build PASS / Required Gate PASS |

### CAUSAL CONCLUSION
**Two coupled causes, one remediation lot:**
1. **Primary assertion flake:** U03 omitted wait-for-enabled against `continuityMutationBlocked` (test harness defect vs product fail-closed — not an Evidence semantic change).
2. **Primary timeout cascade:** CI worker contention on identical tree; proven by maxWorkers=2 eliminating failset flakes and restoring green PR CI under `CI=true` cap.

Cascade vs independent: timeouts cluster with `onTaskUpdate` (worker thrash). U03 is independent race that also worsens under load. Not eight independent product defects.

### PR-green / push-red interpretation
Event-type difference is correlative (different runner load windows), not a workflow bug. No `.github/workflows/**` change.

---

## 7. BOUNDED FIX — complete modified content

### Files changed (exact)
1. `projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx`
2. `projects/sfia-studio/app/vitest.config.ts`

Production code touched: **NO**
Architecture / schema / persistence / workflow / doctrine: **NO**

### Diff — trajectorySurface.ui.test.tsx (U03)

```diff
     expect(screen.queryByTestId("w2-propose-options")).toBeNull();
+    // Fail-closed: Reformuler stays disabled until subject + governed EC
+    // continuity both leave pending/error (continuityMutationBlocked). Title
+    // can paint before EC resolves — wait for enabled, same as READY recover.
+    await waitFor(() => {
+      expect(screen.getByTestId("w2-reformulate-with-nora")).toBeEnabled();
+    });
     fireEvent.click(screen.getByTestId("w2-reformulate-with-nora"));
```

### Diff — vitest.config.ts

```diff
     include: ["__tests__/**/*.test.{ts,tsx}"],
+    /**
+     * CI-only worker cap — causal, not accommodation.
+     * … (see commit message / comment in file) …
+     */
+    ...(process.env.CI === "true" ? { maxWorkers: 2 } : {}),
```

### Why each file is necessary
| File | Causal reason |
|------|----------------|
| trajectorySurface.ui.test.tsx | Closes proven U03 race; aligns with existing READY-recover wait pattern |
| vitest.config.ts | CI-only pool cap proven to stop contention timeouts / onTaskUpdate thrash without weakening assertions |

### Anti-accommodation check
- no skipped tests
- no weakened business assertion
- no blind global timeout inflation
- no Evidence control removal
- no workflow mutation
- ZERO REAL
- maxWorkers reduction is CI-scoped and causally proven (not blind serialization of the complete suite without experiment)

---

## 8. ZERO REAL

| Boundary | Count |
|----------|-------|
| Provider / OpenAI LIVE | 0 |
| Hosted web_search | 0 |
| Cursor REAL launches | 0 |
| Stage A cells | 0 |
| Spend | $0 |
| Stage A | NOT STARTED |
| Astra / account preflight | NOT RUN |

Filenames containing `.real.` exercised only deterministic Fake / harness paths.

---

## 9. VALIDATIONS

| Check | Result |
|-------|--------|
| Focused trajectorySurface.ui.test.tsx | 41 PASS |
| Failset 8 files ×3 default (post-fix) | PASS |
| Failset 8 files ×3 `CI=true` (post-fix) | PASS |
| `npm run typecheck` | PASS |
| `npm run lint` | PASS |
| `npm run build` | PASS |
| `CI=true npm test` | **374 passed \| 17 skipped (391)**; **4175 passed \| 137 skipped (4312)**; Duration 220.08s |
| Modeled governance (`node --test` ×3) | 73 PASS |
| Secret pattern scan | PASS |
| `git diff --check` | PASS |
| Scope audit | only 2 authorized project files in commit |

---

## 10. GIT / PR / CI

| Item | Value |
|------|-------|
| Branch | `fix/sfia-studio-pr493-post-merge-ci` |
| Project commit | `8bda5012e5cc723f3efeacb55fdba39e56883235` |
| Parent | `61ee233abf651b4ea5f262b68e97e63032c5a5fb` |
| Push | normal `-u` (no force) |
| PR | **#494** — https://github.com/mcleland147/sfia-workspace/pull/494 |
| PR base | `main` |
| Exact PR head SHA | `8bda5012e5cc723f3efeacb55fdba39e56883235` |
| CI run ID | **35156019998** |
| Detect | PASS |
| Build & validate | PASS |
| Required Gate | PASS |
| Merge | **NOT PERFORMED** |

Do not reuse 35150853828 / 35152213361 as proof for this remediation commit.

---

## 11. SCOPE / debt / prohibited surfaces

| Surface | Modified? |
|---------|-----------|
| `projects/sfia-studio/app/**` (2 files) | YES — causal |
| `.github/workflows/**` | NO |
| Doctrine / method / roadmap / C1 / framing | NO |
| Nora 08/09/10/11 | NO |
| Persistence / schema | NO |
| Unrelated Product/GCEC | NO |

Debt created: **NONE** (CI maxWorkers=2 is an explicit harness bound; local non-CI keeps default pool).
Exit: ChatGPT Critical Review → separate Morris merge decision.

---

## 12. Fake/Real qualification

Mode: ZERO REAL. Deterministic Vitest + Node governance only. No provider entitlement claim. Stage A readiness by execution is **not** proven by this cycle.

---

## 13. Reservations

- Campaign lease / crash recovery / invoice exactness / Stage A REAL remain out of scope.
- Post-merge Required Gate PASS on **main** after a future merge is still required before any NEW Stage A GO.
- Prompt’s “known failure set” names were inaccurate vs run 35152213361; remediations address the logged failures.

---

## 14. Forbidden claims preserved

- NO MERGE performed
- NO Stage A / B / C
- NO production routing
- runtime v3 NON ADOPTED
- NO Cognitive Completion promotion
- NO doctrine/roadmap/C1/framing/workflow change
- ZERO REAL

---

## 15. Next gate

1. **ChatGPT Critical Review** of this pack + PR #494.
2. Separate **Morris merge decision** (not this GO).
3. After merge: observe **post-merge** Required Gate on main.
4. Only then may a **NEW DISTINCT Morris GO** authorize Stage A REAL Option C.

---

## 16. Exact verdict

**PR493 POST-MERGE CI REMEDIATION — PASS — ROOT CAUSE PROVEN — BOUNDED FIX IN PR #494 — PR CI GREEN ON 8bda5012e5cc723f3efeacb55fdba39e56883235 — READY FOR CHATGPT CRITICAL REVIEW — NO MERGE PERFORMED — ZERO REAL**
