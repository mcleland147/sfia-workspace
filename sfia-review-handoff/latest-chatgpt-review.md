# ChatGPT Review Pack — CORR-MW4-PR-CI-02 PROJECT GIT PUBLICATION
# (pre-publication regularization → will be updated after push/CI)

## 1. Timestamp / identity

- timestamp_utc: `2026-09-03T11:19:51Z`
- timestamp_europe_paris: `2026-09-03T13:19:51+0200`
- cycle: `CORR-MW4-PR-CI-02` — **PROJECT GIT PUBLICATION**
- SFIA Cycle: **7** (Intégration / DevOps) / Typology: **RUN** / Profile: **CRITICAL**
- Morris GO PROJECT GIT PUBLICATION: **CONSUMED**
- FA = NO · TA = NO · REAL OpenAI this cycle = **ZERO**

## 2. Sources read

1. `prompts/templates/sfia-cycle-execution-template.md`
2. `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
3. `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
4. `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
5. `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md`
6. `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`
7. `projects/sfia-studio/product-completion/01-product-completion-cadrage.md`
8. `projects/sfia-studio/nora-cognitive-completion/05-nora-source-locked-cognitive-backlog.md`
9. `projects/sfia-studio/nora-cognitive-completion/08-nora-openai-native-first-cognitive-trajectory.md`
10. `projects/sfia-studio/sfia-v3-framing/33-epistemology-provenance-and-contradiction-model.md`
11. `projects/sfia-studio/sfia-v3-framing/35-artifact-evidence-debt-and-controlled-learning.md`
12. `origin/sfia/review-handoff:sfia-review-handoff/latest-chatgpt-review.md` (entry tip `83dfafee…` / blob `96aa49b6…`)
13. `projects/sfia-studio/app/__tests__/setup.ts` (exact candidate verified)
14. `projects/sfia-studio/app/vitest.config.ts` — read-only, unchanged
15. `.github/workflows/sfia-studio-ci.yml` — read-only, unchanged
16. `scripts/sfia/publish-review-handoff.sh`

## 3. Convergence qualification

- Build Doctrine / Roadmap / Product Completion C1: validated on main (consumed as context).
- Capability served: MW4 Grounding durability + Narrative/Evidence — **NOT CLOSED**.
- Correction class: **TEST-HARNESS ONLY** (per-worker Nora Session SQLite isolation).
- Architecture: ADAPT FIRST / Option C existing — **no parallel architecture**.
- Product persistence/schema/API: **unchanged**.
- Next capability MW5: **NOT AUTHORIZED**.
- Cognitive Completion: **NOT PROVEN** · runtime v3: **NON ADOPTED** · production routing: **NOT SELECTED**.

## 4. Local Git Truth Check — PASS

| Field | Value |
|---|---|
| worktree | `/Users/morris/Projects/sfia-workspace-nora-mw4-grounding` |
| branch | `delivery/sfia-studio-nora-mw4-grounding-durability` |
| entry HEAD | `01956bdc808d459a5def4a7018ab7a1b16530f42` |
| origin/delivery | `01956bdc808d459a5def4a7018ab7a1b16530f42` |
| origin/main | `deb34943dd85472644c221243cd7c0fd5369614e` |
| PR #461 | OPEN / NOT MERGED |
| PR head | `01956bdc808d459a5def4a7018ab7a1b16530f42` |
| PR base | main @ `deb34943dd85472644c221243cd7c0fd5369614e` |
| staged | empty |
| tracked modified (project) | **only** `projects/sfia-studio/app/__tests__/setup.ts` |
| setup.ts exact candidate match | **TRUE** (byte-identical to source-locked candidate) |

Non-project dirty: `.tmp-sfia-review/**`, `node_modules` symlink — never staged into project commit.

## 5. Entry handoff truth

| Field | Value |
|---|---|
| branch | `sfia/review-handoff` |
| tip | `83dfafeedb7be5148e16c9d8b09f7356a502319c` |
| blob | `96aa49b6aa82da9b1adf696900840cd6c5e7ffd0` |
| prior verdict | `STOP — CORR-MW4-PR-CI-02 LOCAL CORRECTION PROOF FAILED` |
| handoff worktree resolved | `/Users/morris/Projects/sfia-workspace/sfia-review-handoff` |

## 6. ChatGPT requalification consumed

`PASS WITH RESERVE — CORR-MW4-PR-CI-02 CAUSAL CORRECTION REQUALIFIED FOR PROJECT GIT PUBLICATION GATE`

Consumed conclusions:

- Causal SQLite isolation proven (focused parallel 5/5; locks=0).
- Local full `npm test` 5s timeouts are **pre-existing** (same titles with and without patch) → **not** a regression from the harness fix.
- Local full `npm test` is **NOT** the publication acceptance gate for this cycle.
- Integration-environment full-suite proof = **GitHub PR CI** after project push.
- MW2 / MW4 deterministic / MW4 REAL / Integrated REAL: **KEEP ACCEPTED**.

## 7. Exact setup.ts content (COMPLETE)

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

## 8. Exact setup.ts diff vs entry HEAD `01956bdc…` (COMPLETE)

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

## 9. Causal lineage (SQLite)

QA-MW4-PR-CI-02 proved shared default `.sfia-exec/product/nora-session.sqlite` under Vitest `fileParallelism` → `database is locked` → `PROVIDER_ERROR` → `result.ok=false` (CI D0-10; local parallel other cases).

CORR causal treatment (same 7-file parallel set, default parallelism, per-worker `SFIA_STUDIO_NORA_SESSION_DB_PATH`): **5/5 PASS**, locks=0.

## 10. Failure class discrimination

### Class 1 — SQLite lock (CI-blocking defect)

**CAUSALLY FIXED BY HARNESS ISOLATION CANDIDATE**

Envelope: `provider_error` / `PROVIDER_ERROR` / `database is locked`.

### Class 2 — local 5s timeouts

**PRE-EXISTING TEST/HOST TIMING LIMITATION + CI/LOCAL ENVIRONMENT DIFFERENCE**

Observed with AND without patch on this host under default Vitest 5000ms timeout; same four titles (f3 / qa-pre-m6). Focused trio PASS. Prior GitHub full-suite red run failed only on D0/SQLite class, not these timeouts.

## 11. Reserves

- **R-MW4-PR-CI-02-LOCAL-TIMING** — **OPEN / PRESERVED / NON-BLOCKING FOR PROJECT-GIT PUBLICATION**
- Local Git truth: **reverified PASS** at entry of this gate
- CI integration proof: **PENDING** until post-push GitHub Actions on PROJECT_COMMIT_SHA
- R-MW4-PR-CI-01: **KEEP CLOSED** (Build boundary; build remains green locally)

## 12. MW0→MW4 proof impact

| Boundary | Status |
|---|---|
| MW0 | KEEP ACCEPTED |
| MW1 | KEEP ACCEPTED |
| MW2 | KEEP ACCEPTED |
| MW3 | KEEP ACCEPTED |
| MW4 deterministic/product-bound | KEEP ACCEPTED |
| MW4 REAL | KEEP ACCEPTED |
| MW0→MW4 Integrated REAL | KEEP ACCEPTED |

No new REAL this cycle. No proof upgrade beyond harness/CI integration scope after green CI.

## 13. Anti-claims

- PR #461 MERGE = **NOT AUTHORIZED**
- MW4 = **NOT CLOSED**
- MW5 = **NOT AUTHORIZED**
- COGNITIVE COMPLETION = **NOT PROVEN**
- RUNTIME V3 = **NON ADOPTED**
- PRODUCTION MODEL ROUTING = **NOT SELECTED**
- REAL this cycle = **ZERO**
- Architecture/persistence/product runtime change = **NO**
- Vitest config / CI workflow / timeout change = **NO**

## 14. Authorized project Git actions (this gate)

1. Stage/commit **only** `projects/sfia-studio/app/__tests__/setup.ts`
2. Fast-forward push `delivery/sfia-studio-nora-mw4-grounding-durability`
3. Read-only observe PR #461 CI for PROJECT_COMMIT_SHA
4. L3 handoff publications (pre + final)

## 15. Forbidden actions (confirmed)

No merge; no PR metadata mutation; no force push; no amend/rebase; no product/runtime/config/CI/timeout changes; no REAL; no MW4 closure; no MW5.

## 16. Pre-publication verdict

`PASS WITH RESERVE — CORR-MW4-PR-CI-02 CAUSAL CORRECTION REQUALIFIED FOR PROJECT GIT PUBLICATION GATE`

## 17. Post-publication section (TO BE FILLED AFTER PUSH/CI)

- Regularization handoff tip/blob: _pending this publish_
- Fresh typecheck/lint/build/focused: _pending_
- PROJECT_COMMIT_SHA: _pending_
- Remote parity / PR head: _pending_
- GitHub Actions run / Unit tests / Required Gate: _pending_
- Final verdict: _pending_
