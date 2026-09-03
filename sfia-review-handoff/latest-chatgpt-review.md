# ChatGPT Review Pack — CORR-MW4-PR-CI-02
# VITEST NORA SESSION SQLITE PER-WORKER ISOLATION — LOCAL PROOF STOP

## 1. Timestamp / identity

- timestamp_utc: `2026-09-03T10:13:09Z`
- timestamp_europe_paris: `2026-09-03T12:13:09+0200`
- cycle: `CORR-MW4-PR-CI-02`
- SFIA Cycle: **9** / Typology: **RUN** / Profile: **CRITICAL**
- Morris GO: **CONSUMED**
- FA = NO · TA = NO · REAL OpenAI = **ZERO**

## 2. Sources read

- `prompts/templates/sfia-cycle-execution-template.md` (v2.6)
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/04-qa-validation.md`
- `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md`
- `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`
- `projects/sfia-studio/product-completion/01-product-completion-cadrage.md`
- `projects/sfia-studio/nora-cognitive-completion/05-nora-source-locked-cognitive-backlog.md`
- `origin/sfia/review-handoff:sfia-review-handoff/latest-chatgpt-review.md` (QA tip `c58c0bc3…` / blob `65a3b95b…`)
- `projects/sfia-studio/app/__tests__/setup.ts`
- `projects/sfia-studio/app/vitest.config.ts` (read-only; **not modified**)
- `projects/sfia-studio/app/lib/nora-cognitive-runtime/sessionPaths.ts` (read-only; **not modified**)
- mw2.corr04 D0 test + env-mutating session path tests (`session.d0`, `mw1.s01.honestMemoryB`)
- `.github/workflows/sfia-studio-ci.yml` (Unit tests = `npm test`; **not modified**)

## 3. Convergence qualification

Harness-only isolation of Nora Session SQLite under Vitest fileParallelism. No new Nora capability. MW4 remains pre-merge / NOT CLOSED. Product default path KEEP; concurrent test sharing of that default is the defect class proven by QA-MW4-PR-CI-02.

## 4. Entry Local Git Truth — PASS

| Field | Value |
|---|---|
| worktree | `/Users/morris/Projects/sfia-workspace-nora-mw4-grounding` |
| branch | `delivery/sfia-studio-nora-mw4-grounding-durability` |
| entry HEAD | `01956bdc808d459a5def4a7018ab7a1b16530f42` |
| origin/delivery | `01956bdc808d459a5def4a7018ab7a1b16530f42` |
| origin/main | `deb34943dd85472644c221243cd7c0fd5369614e` |
| PR #461 | OPEN / NOT MERGED / base main @ deb34943… / head @ 01956bdc… |

Acceptable dirty: `.tmp-sfia-review/**`, `node_modules` symlink. Not staged.

## 5. QA-MW4-PR-CI-02 causal lineage (not re-diagnosed)

Proven root cause: shared default `nora-session.sqlite` under fileParallelism → `database is locked` → `PROVIDER_ERROR` → `result.ok=false`. Causal treatment with per-worker `SFIA_STUDIO_NORA_SESSION_DB_PATH`: 5/5 PASS, locks=0.

## 6. Implemented correction (working tree only — NOT COMMITTED)

### Intended tracked file (only)

`projects/sfia-studio/app/__tests__/setup.ts`

### FULL current content

```ts
import "@testing-library/jest-dom/vitest";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

/**
 * Test-harness only: Vitest fileParallelism uses separate worker processes that
 * would otherwise share the product default Nora Session SQLite file and contend
 * under concurrent writers. Assign one temp session DB per worker/process.
 * Explicit sessionDbPath arguments and intentional env overrides remain authoritative.
 */
const workerKey =
  process.env.VITEST_POOL_ID?.trim() ||
  process.env.VITEST_WORKER_ID?.trim() ||
  String(process.pid);
const sessionDir = fs.mkdtempSync(
  path.join(os.tmpdir(), `sfia-vitest-nora-session-${workerKey}-`),
);
process.env.SFIA_STUDIO_NORA_SESSION_DB_PATH = path.join(
  sessionDir,
  "nora-session.sqlite",
);

```

### FULL diff vs entry HEAD

```diff
diff --git a/projects/sfia-studio/app/__tests__/setup.ts b/projects/sfia-studio/app/__tests__/setup.ts
index f149f27a..873a765e 100644
--- a/projects/sfia-studio/app/__tests__/setup.ts
+++ b/projects/sfia-studio/app/__tests__/setup.ts
@@ -1 +1,22 @@
 import "@testing-library/jest-dom/vitest";
+import fs from "node:fs";
+import os from "node:os";
+import path from "node:path";
+
+/**
+ * Test-harness only: Vitest fileParallelism uses separate worker processes that
+ * would otherwise share the product default Nora Session SQLite file and contend
+ * under concurrent writers. Assign one temp session DB per worker/process.
+ * Explicit sessionDbPath arguments and intentional env overrides remain authoritative.
+ */
+const workerKey =
+  process.env.VITEST_POOL_ID?.trim() ||
+  process.env.VITEST_WORKER_ID?.trim() ||
+  String(process.pid);
+const sessionDir = fs.mkdtempSync(
+  path.join(os.tmpdir(), `sfia-vitest-nora-session-${workerKey}-`),
+);
+process.env.SFIA_STUDIO_NORA_SESSION_DB_PATH = path.join(
+  sessionDir,
+  "nora-session.sqlite",
+);

```

### Why harness isolation (not product hardening)

Matches QA causal treatment; uses official env override; no `sessionPaths` / `ProductSqliteSession` / orchestrator / busy_timeout / workflow / vitest.config / package changes.

### Product runtime unchanged

- `sessionPaths.ts`: untouched
- `ProductSqliteSession`: untouched
- orchestrators: untouched
- `vitest.config.ts`: untouched
- `.github/workflows/**`: untouched
- `package.json` / lock: untouched
- No `SFIA_STUDIO_PRODUCT_DB_PATH` introduced

Env-mutating tests (`session.d0`, `mw1.s01.honestMemoryB`) only assert basename `nora-session.sqlite` after deleting env, then restore `prev` — compatible with worker baseline.

## 7. Local validation evidence

node=`v24.16.0` · npm=`11.13.0`

### A. Diff hygiene

Tracked delta before stop: **setup.ts only** (+21 lines). `git diff --check` clean on that file.

### B. Causal focused parallel (same 7-file QA set; default parallelism; NO `--no-file-parallelism`)

| Iter | Result | database is locked |
|---|---|---|
| 1–5 | **PASS** 7/7 | **0** |

**5/5 PASS · lock count = 0**

### C. Focused MW2

- D0-10: **PASS**
- full mw2.corr04: **PASS**

### D–F

- typecheck: **PASS**
- lint: **PASS**
- build: **PASS** (R-MW4-PR-CI-01 local Build remains green)

### G. FULL default-parallel `npm test` (acceptance gate)

**Run 1 WITH correction:** FAIL

```
Test Files  3 failed | 269 passed | 14 skipped (286)
Tests       4 failed | 2504 passed | 132 skipped (2640)
database is locked = 0
```

Failures (all **Test timed out in 5000ms**, default Vitest timeout — NOT session-lock class):

1. `f3.fixtureVerticalSlice` — AC-F3-FIX-17/18
2. `qa-pre-m6-01.finalHardening` — H1
3. `qa-pre-m6-01.finalHardening` — H2/H3/…
4. `qa-pre-m6-01.postGoDurableM3Path` — T4/T5/…

Failing trio alone under default parallelism: **PASS** (3/3 files).

**Run 2:** **NOT RUN** — contract forbids rerunning until green after first full-suite failure; first failure was not the proven lock class, but acceptance still failed.

### Baseline discrimination (diagnostic; HEAD setup restored temporarily then correction restored)

**`npm test` WITHOUT isolation (entry HEAD setup.ts):**

```
ec=1 · 3 failed | 269 passed | 14 skipped
database is locked = 0
timeouts = 8
same four FAIL titles as with correction
```

Conclusion: local full-suite 5s timeouts reproduce **with and without** the correction on this machine. They are **not** evidence that session isolation broke those tests, and they are **not** the QA-proven `database is locked` defect. They still block the cycle acceptance bar requiring green local default-parallel `npm test`.

### H. Diff-check

PASS on setup.ts. Correction remains unstaged/uncommitted in working tree.

## 8. Project Git / push / PR CI

| Action | Status |
|---|---|
| Commit | **NOT PERFORMED** (acceptance bar failed) |
| Push | **NOT PERFORMED** |
| PR #461 head | remains `01956bdc808d459a5def4a7018ab7a1b16530f42` |
| Remote CI on correction | **NOT TRIGGERED** |
| Merge | **NO** |

## 9. Reserves / proof impact

| Item | Posture |
|---|---|
| R-MW4-PR-CI-01 | **KEEP CLOSED** (local Build PASS; no product barrel change) |
| R-MW4-PR-CI-02 | **OPEN** — causal harness fix prepared & causally validated on focused parallel set, but **local full default-parallel acceptance not met** |
| R-QA-MW4-PR-CI-02-01 | PRESERVED (CI envelope precision) |
| R-QA-MW4-PR-CI-02-02 | PRESERVED / observed handoff SHAs used |
| MW2 / MW4 det / MW4 REAL / Integrated REAL | **KEEP ACCEPTED** |
| New local finding | Full default-parallel `npm test` on this agent host hits **5s timeouts** on long f3/qa-pre-m6 cases even at entry HEAD — distinct from session-lock; may need separate requalification vs CI (where those cases previously passed under the red D0-10 run) |

## 10. Governance anti-claims

- PR #461 MERGE = NOT AUTHORIZED / NOT PERFORMED
- MW4 = NOT CLOSED
- MW5 = NOT AUTHORIZED
- COGNITIVE COMPLETION = NOT PROVEN
- RUNTIME V3 = NON ADOPTED
- PRODUCTION MODEL ROUTING = NOT SELECTED
- REAL this cycle = ZERO
- Architecture/persistence change = NO
- Product runtime modified = NO (uncommitted harness-only working tree)

## 11. Final verdict

`STOP — CORR-MW4-PR-CI-02 LOCAL CORRECTION PROOF FAILED`

Reason: causal focused parallel proof **PASS 5/5 / locks=0**, but acceptance-required full default-parallel `npm test` **FAIL** (5s timeouts; lock count 0). Same timeouts occur at entry HEAD without isolation → not attributed to the session isolation patch, yet commit/push are forbidden until the local full-suite bar passes or Morris/ChatGPT requalifies the acceptance criteria vs CI-only full-suite proof.

## 12. Next gate

ChatGPT CRITICAL requalification:

1. Accept focused causal 5/5 + typecheck/lint/build as sufficient to authorize commit/push and rely on PR CI full suite; **or**
2. Authorize a bounded timeout/config approach (currently **forbidden** by this GO); **or**
3. Require agent to obtain green local full `npm test` under default 5s (may be host-load constrained).

Working-tree correction left in place for inspection; **not committed**.
