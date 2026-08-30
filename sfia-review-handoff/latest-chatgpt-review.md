# SFIA Review Pack FULL — NORA MW0 CORR-MW0-08 — Real-Campaign Secret Resolution Portability

- **timestamp (Europe/Paris):** 2026-08-30 06:18:18 CEST
- **repository:** mcleland147/sfia-workspace
- **worktree:** /Users/morris/Projects/sfia-workspace-nora-mw0-delivery
- **branch:** feat/sfia-studio-nora-mw0-eval-harness
- **origin/main / merge-base:** `fb11c44f4a32accf504ee6ab334b44f0501a680c`
- **PR:** #442 — https://github.com/mcleland147/sfia-workspace/pull/442
- **pre-correction HEAD:** `6116fa659362c73115edcf2e90ac78d7a7807558`
- **CORR08 final HEAD:** `67a0023892b7daac7e1e6f5d5f36c611b3275091`
- **pack level:** FULL

## Morris CORR-MW0-08 GO (consumed)

```
GO MORRIS — CORRECT NORA MW0 PR #442 REAL-CAMPAIGN SECRET RESOLUTION PORTABILITY — CORR-MW0-08 — MW0 EXIT EVIDENCE REMAINS PROVEN WITH NON-BLOCKING RESERVES — CORR-MW0-05/06/07 REMAIN CLOSED — REMOVE ALL USER/MACHINE-SPECIFIC ABSOLUTE .ENV.LOCAL PATHS FROM MW0 REAL RUNNER + REAL CAMPAIGN TEST — USE PORTABLE OPENAI_API_KEY ENV / APP .ENV.LOCAL RESOLUTION ONLY — DO NOT LOG OR PERSIST USER-SPECIFIC SECRET FILE PATHS — NO PRODUCT F1/F2 CHANGE — NO HARNESS EVIDENCE SEMANTICS CHANGE — NO NEW REAL CALLS — SPEND REMAINS $0.0490246 — EXACT SCOPE app/__tests__/nora-eval/runMw0RealCampaign.ts + app/__tests__/nora-eval/mw0.realCampaign.test.ts + DIRECTLY RELATED TEST IF REQUIRED — COMMIT + PUSH EXISTING PR #442 + CI + FULL REVIEW HANDOFF — NO C5 / ROADMAP / DOC06 CHANGE — NO TA — NO ARCHITECTURE SELECTION — NO TECHNOLOGY ADOPTION — NO MW1 — NO REAL-B — NO MERGE — NO BRANCH DELETE
```

## Sources read

Cycle template, routing guide, operating model, guardrails, v2.5 cycles, CKC synthetic map, Build Doctrine, Roadmap, Product Completion cadrage, Nora C5 backlog, Doc06 readiness, v3 framing 35/37, target PR files, prior handoff tip `a0b3388f`.

## Convergence

- Priority: NORA COGNITIVE COMPLETION
- Capability: MW0 Versioned Cognitive Eval Harness
- Milestone: PR #442 pre-merge hardening (portability only)
- Architecture: NOT SELECTED — NO TA
- Technology / production routing: NOT SELECTED
- FinOps/T7 FREEZE — MW1/REAL-B NOT STARTED
- Cognitive Completion NOT PROVEN — runtime v3 NON ADOPTED
- C5 / Doc06 / Roadmap / Build Doctrine: UNCHANGED

## Root defect (CORR-MW0-08)

### BEFORE
- `runMw0RealCampaign.ts` candidates included:
  - `path.resolve(__dirname, "../../../.env.local")` (wrong relative)
  - repository-name-relative `.../sfia-workspace/projects/...`
  - absolute `/Users/morris/Projects/sfia-workspace/projects/sfia-studio/app/.env.local`
  - `source: file` (physical path logged/persisted via `secrets_source` / `secretsSource`)
- `mw0.realCampaign.test.ts` included the same absolute `/Users/morris/...` candidate

### AFTER
- `OPENAI_API_KEY` first → source `process.env`
- portable candidates only:
  - `path.resolve(process.cwd(), ".env.local")`
  - `path.resolve(__dirname, "../../.env.local")`
- source categorical only: `env.local`
- no `/Users/`, `/home/`, Windows user-home, `source: file`

## Exact changed files

1. `projects/sfia-studio/app/__tests__/nora-eval/runMw0RealCampaign.ts`
2. `projects/sfia-studio/app/__tests__/nora-eval/mw0.realCampaign.test.ts`
3. `projects/sfia-studio/app/__tests__/nora-eval/mw0.corr08.secretResolutionPortability.test.ts` (new)

Unauthorized / Product / lib/nora-eval: **0**

## FAKE / REAL

- `MW0_RUN_REAL` unset / != 1 during CORR-08
- standalone runner NOT executed
- newRealCalls = **0**
- additionalApiSpend = **$0**
- cumulative usage-based estimated = **$0.0490246**

## Local validation

- path scan clean
- CORR-08 test PASS (7)
- nora-eval suite PASS (61) + REAL skipped
- CORR-05/06/07 PASS
- typecheck / lint / build PASS
- git diff --check PASS

## Commit

- SHA: `67a0023892b7daac7e1e6f5d5f36c611b3275091`
- tree: `5d7b386cd9fc253ba682d0d55520556c3d737b05`
- parent: `6116fa659362c73115edcf2e90ac78d7a7807558` (expected `6116fa659362c73115edcf2e90ac78d7a7807558`)
- message: `fix(sfia-studio): make MW0 secret resolution portable`

## Push / PR

- remote branch SHA = local HEAD = PR head = `67a0023892b7daac7e1e6f5d5f36c611b3275091`
- PR #442: OPEN / **DRAFT** / not merged
- base: main (`fb11c44f4a32accf504ee6ab334b44f0501a680c`)
- merge: **NO**

## CI (new HEAD only)

- run ID: **33292059326**
- URL: https://github.com/mcleland147/sfia-workspace/actions/runs/33292059326
- head: `67a0023892b7daac7e1e6f5d5f36c611b3275091`
- conclusion: **success**
- Detect / Build+validate (typecheck, lint, build, Vitest, FinOps freeze, governance, secrets, whitespace) / **Required Gate PASS**

Historical pre-CORR08 success run 33283787067 is superseded for final proof.

## MW0 governance

| Item | Status |
|---|---|
| MW0 EXIT | PROVEN WITH NON-BLOCKING RESERVES |
| MW0-R01 BAR-09 | NOT_PROVEN / NON-BLOCKING |
| MW0-R02 parity | NOT_PROVEN / NON-BLOCKING |
| CORR-MW0-05/06/07 | CLOSED (unchanged) |
| CORR-MW0-08 | candidate CLOSED subject to ChatGPT review |

## Claims permitted / forbidden

Permitted: portable secret resolution on PR #442; no path leak; CI green; spend unchanged.
Forbidden: Cognitive Completion PROVEN; MW1/REAL-B; architecture/tech/routing selected; merge; ready-for-review without Morris.

## Final Cursor verdict (pre-handoff)

CORR-MW0-08 COMPLETE on Draft PR #442 — portable secret resolution — CI SUCCESS — Required Gate PASS — ready for ChatGPT merge-readiness re-review — NO MERGE.

---

## DIFF STAT (6116fa659362c73115edcf2e90ac78d7a7807558..67a0023892b7daac7e1e6f5d5f36c611b3275091)

 .../mw0.corr08.secretResolutionPortability.test.ts | 77 ++++++++++++++++++++++
 .../__tests__/nora-eval/mw0.realCampaign.test.ts   | 14 +++-
 .../app/__tests__/nora-eval/runMw0RealCampaign.ts  | 19 ++++--
 3 files changed, 103 insertions(+), 7 deletions(-)

## FULL CORR-MW0-08 DIFF

```diff
diff --git a/projects/sfia-studio/app/__tests__/nora-eval/mw0.corr08.secretResolutionPortability.test.ts b/projects/sfia-studio/app/__tests__/nora-eval/mw0.corr08.secretResolutionPortability.test.ts
new file mode 100644
index 00000000..657eddae
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/nora-eval/mw0.corr08.secretResolutionPortability.test.ts
@@ -0,0 +1,77 @@
+/** @vitest-environment node */
+/**
+ * CORR-MW0-08 — deterministic portability contract for REAL secret resolution.
+ * Source-level only: does NOT import the standalone runner (avoids main()).
+ * Must NOT set MW0_RUN_REAL=1 or call OpenAI.
+ */
+import fs from "node:fs";
+import path from "node:path";
+import { describe, expect, it } from "vitest";
+
+const DIR = path.resolve(__dirname);
+const TARGETS = [
+  path.join(DIR, "runMw0RealCampaign.ts"),
+  path.join(DIR, "mw0.realCampaign.test.ts"),
+] as const;
+
+function read(file: string): string {
+  return fs.readFileSync(file, "utf8");
+}
+
+describe("CORR-MW0-08 secret resolution portability", () => {
+  it("target files exist", () => {
+    for (const file of TARGETS) {
+      expect(fs.existsSync(file), file).toBe(true);
+    }
+  });
+
+  it("contains no user/machine-specific absolute home paths", () => {
+    for (const file of TARGETS) {
+      const src = read(file);
+      expect(src, file).not.toMatch(/\/Users\//);
+      expect(src, file).not.toMatch(/\/home\//);
+      expect(src, file).not.toMatch(/:\\Users\\/i);
+      expect(src, file).not.toMatch(/C:\\Users\\/i);
+    }
+  });
+
+  it("does not persist physical secret file path as source", () => {
+    for (const file of TARGETS) {
+      const src = read(file);
+      expect(src, file).not.toMatch(/source:\s*file\b/);
+      expect(src, file).not.toMatch(/source:\s*[`'\"]?\$\{?file/);
+      expect(src, file).not.toMatch(/return\s*\{\s*apiKey[^}]*source:\s*file\b/);
+    }
+  });
+
+  it("retains OPENAI_API_KEY first + categorical env.local source", () => {
+    for (const file of TARGETS) {
+      const src = read(file);
+      expect(src).toMatch(/OPENAI_API_KEY/);
+      expect(src).toMatch(/source:\s*["']process\.env["']/);
+      expect(src).toMatch(/source:\s*["']env\.local["']/);
+      expect(src).toMatch(/\.env\.local/);
+      expect(src).toMatch(/path\.resolve\(process\.cwd\(\),\s*["']\.env\.local["']\)/);
+      expect(src).toMatch(
+        /path\.resolve\(__dirname,\s*["']\.\.\/\.\.\/\.env\.local["']\)/,
+      );
+    }
+  });
+
+  it("Vitest REAL campaign remains opt-in via MW0_RUN_REAL === \"1\"", () => {
+    const src = read(path.join(DIR, "mw0.realCampaign.test.ts"));
+    expect(src).toMatch(/MW0_RUN_REAL\s*===\s*["']1["']/);
+    expect(src).toMatch(/describe\.runIf\(runReal\)/);
+  });
+
+  it("standalone runner is not imported/executed by this suite", () => {
+    // This file must never pull in runMw0RealCampaign (would risk main()).
+    const self = read(path.join(DIR, "mw0.corr08.secretResolutionPortability.test.ts"));
+    expect(self).not.toMatch(/from\s+["'].*runMw0RealCampaign/);
+    expect(self).not.toMatch(/require\(["'].*runMw0RealCampaign/);
+  });
+
+  it("MW0_RUN_REAL is not enabled during CORR-08 deterministic suite", () => {
+    expect(process.env.MW0_RUN_REAL).not.toBe("1");
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/nora-eval/mw0.realCampaign.test.ts b/projects/sfia-studio/app/__tests__/nora-eval/mw0.realCampaign.test.ts
index a2b42735..0d8b3467 100644
--- a/projects/sfia-studio/app/__tests__/nora-eval/mw0.realCampaign.test.ts
+++ b/projects/sfia-studio/app/__tests__/nora-eval/mw0.realCampaign.test.ts
@@ -26,15 +26,25 @@ import {

 const HISTORICAL_CAMPAIGN_ID = "mw0-1788039895203";

-function loadSecrets(): { apiKey: string; source: string } | null {
+type SecretSource = "process.env" | "env.local";
+
+/**
+ * CORR-MW0-08 — portable secret resolution only.
+ * Returns categorical source (never a physical file path).
+ */
+function loadSecrets(): { apiKey: string; source: SecretSource } | null {
   if (process.env.OPENAI_API_KEY?.trim()) {
     return { apiKey: process.env.OPENAI_API_KEY.trim(), source: "process.env" };
   }
+  // app/__tests__/nora-eval → ../../.env.local = app/.env.local
   const candidates = [
     path.resolve(process.cwd(), ".env.local"),
-    "/Users/morris/Projects/sfia-workspace/projects/sfia-studio/app/.env.local",
+    path.resolve(__dirname, "../../.env.local"),
   ];
+  const seen = new Set<string>();
   for (const file of candidates) {
+    if (seen.has(file)) continue;
+    seen.add(file);
     if (!fs.existsSync(file)) continue;
     const text = fs.readFileSync(file, "utf8");
     const m = text.match(/^OPENAI_API_KEY=(.+)$/m);
diff --git a/projects/sfia-studio/app/__tests__/nora-eval/runMw0RealCampaign.ts b/projects/sfia-studio/app/__tests__/nora-eval/runMw0RealCampaign.ts
index 968595c9..0f4ba3e2 100644
--- a/projects/sfia-studio/app/__tests__/nora-eval/runMw0RealCampaign.ts
+++ b/projects/sfia-studio/app/__tests__/nora-eval/runMw0RealCampaign.ts
@@ -26,22 +26,31 @@ import {

 const HISTORICAL_CAMPAIGN_ID = "mw0-1788039895203";

-function loadSecrets(): { apiKey: string; source: string } | null {
+type SecretSource = "process.env" | "env.local";
+
+/**
+ * CORR-MW0-08 — portable secret resolution only.
+ * Returns categorical source (never a physical file path).
+ */
+function loadSecrets(): { apiKey: string; source: SecretSource } | null {
   if (process.env.OPENAI_API_KEY?.trim()) {
     return { apiKey: process.env.OPENAI_API_KEY.trim(), source: "process.env" };
   }
+  // app/__tests__/nora-eval → ../../.env.local = app/.env.local
   const candidates = [
-    path.resolve(__dirname, "../../../.env.local"),
-    path.resolve(__dirname, "../../../../sfia-workspace/projects/sfia-studio/app/.env.local"),
-    "/Users/morris/Projects/sfia-workspace/projects/sfia-studio/app/.env.local",
+    path.resolve(process.cwd(), ".env.local"),
+    path.resolve(__dirname, "../../.env.local"),
   ];
+  const seen = new Set<string>();
   for (const file of candidates) {
+    if (seen.has(file)) continue;
+    seen.add(file);
     if (!fs.existsSync(file)) continue;
     const text = fs.readFileSync(file, "utf8");
     const m = text.match(/^OPENAI_API_KEY=(.+)$/m);
     if (m?.[1]) {
       const apiKey = m[1].trim().replace(/^["']|["']$/g, "");
-      if (apiKey) return { apiKey, source: file };
+      if (apiKey) return { apiKey, source: "env.local" };
     }
   }
   return null;
```

## Full changed file contents (post-correction)

### `projects/sfia-studio/app/__tests__/nora-eval/runMw0RealCampaign.ts`

```typescript
/**
 * MW0 CORR-05 bounded REAL campaign runner (local Delivery only).
 * Loads secrets from env or sibling .env.local — never logs the key.
 *
 * Run: npx tsx __tests__/nora-eval/runMw0RealCampaign.ts
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import {
  BudgetTracker,
  buildMw0CapabilityManifest,
  campaignEffectiveCapabilitySet,
  runFullD0Suite,
  runR1ProviderSmoke,
  runR2ProductScenario,
  serializeEvidencePack,
  MW0_BUDGET_POLICY,
  MW0_HISTORICAL_USAGE_BASED_ESTIMATED_SPEND_USD,
  type RunEvidence,
} from "../../lib/nora-eval";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "../../lib/vertical-slice-runtime";

const HISTORICAL_CAMPAIGN_ID = "mw0-1788039895203";

type SecretSource = "process.env" | "env.local";

/**
 * CORR-MW0-08 — portable secret resolution only.
 * Returns categorical source (never a physical file path).
 */
function loadSecrets(): { apiKey: string; source: SecretSource } | null {
  if (process.env.OPENAI_API_KEY?.trim()) {
    return { apiKey: process.env.OPENAI_API_KEY.trim(), source: "process.env" };
  }
  // app/__tests__/nora-eval → ../../.env.local = app/.env.local
  const candidates = [
    path.resolve(process.cwd(), ".env.local"),
    path.resolve(__dirname, "../../.env.local"),
  ];
  const seen = new Set<string>();
  for (const file of candidates) {
    if (seen.has(file)) continue;
    seen.add(file);
    if (!fs.existsSync(file)) continue;
    const text = fs.readFileSync(file, "utf8");
    const m = text.match(/^OPENAI_API_KEY=(.+)$/m);
    if (m?.[1]) {
      const apiKey = m[1].trim().replace(/^["']|["']$/g, "");
      if (apiKey) return { apiKey, source: "env.local" };
    }
  }
  return null;
}

async function main(): Promise<void> {
  const campaignId = `mw0-corr05-${Date.now()}`;
  const outDir = path.resolve(__dirname, "../../.tmp-nora-mw0-evidence");
  fs.mkdirSync(outDir, { recursive: true });

  const historicalPath = path.join(outDir, `${HISTORICAL_CAMPAIGN_ID}.json`);
  if (!fs.existsSync(historicalPath)) {
    console.error(
      "STOP — historical campaign evidence missing (must preserve)",
      historicalPath,
    );
    process.exit(2);
  }
  console.log("HISTORICAL_CAMPAIGN", {
    id: HISTORICAL_CAMPAIGN_ID,
    classification:
      "HISTORICAL CAMPAIGN — R1 usable — R2/R3 EXIT CLAIMS SUPERSEDED / INVALIDATED BY CORR-MW0-05 REVIEW — budget debit retained",
    debitUsd: MW0_HISTORICAL_USAGE_BASED_ESTIMATED_SPEND_USD,
    terminology: "usage-based estimated API cost (NOT invoice spend)",
  });

  const d0 = runFullD0Suite();
  if (!d0.ok) {
    console.error("STOP — D0 NOT PROVEN", d0.failed);
    process.exit(2);
  }
  console.log("D0 PROVEN", { scenarios: d0.results.length });

  const retrievedAt = new Date().toISOString();
  const manifest = buildMw0CapabilityManifest(retrievedAt);
  const luna = campaignEffectiveCapabilitySet(manifest, "gpt-5.6-luna");
  if (!luna.ok || !luna.efforts.includes("none")) {
    console.error("STOP BEFORE REAL — PROVIDER CAPABILITY OR PRICING NOT ESTABLISHED");
    process.exit(3);
  }

  const secrets = loadSecrets();
  if (!secrets) {
    console.error("STOP BEFORE REAL — OPENAI_API_KEY not available");
    process.exit(4);
  }
  console.log("secrets_source", secrets.source);
  console.log("budget_policy", MW0_BUDGET_POLICY);

  const plan = {
    model: "gpt-5.6-luna",
    reasoningEffort: "none" as const,
    r1: { runs: 1 },
    r2: [
      { scenarioId: "mw0.s03.ambiguous-clarification", n: 3, essential: false },
      { scenarioId: "mw0.s04.option-rec-hd-separation", n: 3, essential: false },
      { scenarioId: "mw0.s05.authority-anti-nora-grant", n: 5, essential: true },
      { scenarioId: "mw0.s06.genericity-cycle-a", n: 3, essential: false },
      { scenarioId: "mw0.s06.genericity-cycle-b", n: 3, essential: false },
    ],
    expectedProviderCallsPerR2: "2-4 (intent + optional CKC + rounds)",
  };

  const totalR2 = plan.r2.reduce((a, c) => a + c.n, 0);
  // Conservative: up to 4 provider calls × inflated tokens at Sol rates (upper bound)
  const conservativeMaxAdditional =
    plan.r1.runs *
      ((2000 / 1e6) * 4 + (500 / 1e6) * 20) +
    totalR2 *
      4 *
      ((8000 / 1e6) * 4 + (2000 / 1e6) * 20);
  const carryIn = MW0_HISTORICAL_USAGE_BASED_ESTIMATED_SPEND_USD;
  const expectedMaxCumulative = carryIn + conservativeMaxAdditional;

  console.log(
    "REAL_CAMPAIGN_PLAN",
    JSON.stringify(
      {
        campaignId,
        carryInUsd: carryIn,
        remainingHardCapBudgetUsd: MW0_BUDGET_POLICY.hardCapUsd - carryIn,
        plan,
        conservativeMaxAdditionalUsd: conservativeMaxAdditional,
        expectedMaxCumulativeUsd: expectedMaxCumulative,
        softStopUsd: MW0_BUDGET_POLICY.softStopUsd,
        hardCapUsd: MW0_BUDGET_POLICY.hardCapUsd,
      },
      null,
      2,
    ),
  );

  if (expectedMaxCumulative > MW0_BUDGET_POLICY.hardCapUsd) {
    // Still allow if luna pricing makes actual spend tiny — but warn with Sol-bound check
    console.warn(
      "NOTE — Sol-priced conservative ceiling exceeds hard cap; live metering + preflight still enforce $5",
      expectedMaxCumulative,
    );
  }

  const budget = new BudgetTracker(MW0_BUDGET_POLICY, carryIn);
  const runs: RunEvidence[] = [...d0.results];
  const spendAtStart = budget.cumulativeUsd;

  // R1
  const r1 = await runR1ProviderSmoke({
    campaignId,
    apiKey: secrets.apiKey,
    model: plan.model,
    reasoningEffort: plan.reasoningEffort,
    runIndex: 1,
    manifest,
    budget,
    essential: true,
  });
  runs.push(r1);
  console.log("R1", r1.passFail, r1.failureClass, `spend=${budget.cumulativeUsd.toFixed(6)}`);
  if (r1.passFail !== "PASS") {
    console.error("STOP — R1 failed", r1.rawSummary.slice(0, 200));
    fs.writeFileSync(
      path.join(outDir, `${campaignId}.json`),
      serializeEvidencePack({
        campaignId,
        createdAt: new Date().toISOString(),
        runs,
        extra: {
          manifest,
          plan,
          historical: {
            campaignId: HISTORICAL_CAMPAIGN_ID,
            classification: "SUPERSEDED_R2_R3",
            debitUsd: carryIn,
          },
          stop: "R1_FAIL",
        },
      }),
    );
    process.exit(6);
  }

  // Project fixture for R2
  resetRuntimeApplicationServiceForTests();
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-mw0-"));
  const runtime = getRuntimeApplicationService({
    productDbPath: path.join(dir, "oa-product.sqlite"),
    auditMode: "noop",
    nowIso: "2026-08-29T22:00:00.000Z",
  });
  const created = await runtime.createProject({
    name: "MW0 Eval Project",
    objective: "Bounded cognitive eval harness evidence.",
    context: "Authorized class C representative fixture for MW0 Delivery.",
    criticality: "STANDARD",
    constraints: ["AUCUNE EXÉCUTION", "HumanDecision Pilote-only"],
    shortReference: "MW0",
    idempotencyKey: `idem:mw0-${campaignId}`,
  });
  if (!created.ok) {
    console.error("STOP — project fixture failed");
    process.exit(7);
  }

  let hardInvariantStop = false;
  for (const cell of plan.r2) {
    for (let i = 1; i <= cell.n; i++) {
      if (budget.hardStopTriggered) {
        console.error("STOP — MW0 HARD CAP $5 REACHED");
        break;
      }
      const run = await runR2ProductScenario({
        campaignId,
        apiKey: secrets.apiKey,
        model: plan.model,
        reasoningEffort: plan.reasoningEffort,
        scenarioId: cell.scenarioId,
        runIndex: i,
        projectId: created.projectId,
        manifest,
        budget,
        essential: cell.essential,
      });
      runs.push(run);
      const obs = run.productObservation as
        | { f2Ok?: boolean; f2Status?: string; turnKind?: string }
        | undefined;
      console.log(
        "R2",
        cell.scenarioId,
        `n=${i}/${cell.n}`,
        run.passFail,
        run.failureClass,
        `f2.ok=${obs?.f2Ok}`,
        `status=${obs?.f2Status}`,
        `turnKind=${obs?.turnKind}`,
        `calls=${run.usage?.providerCallCount ?? 0}`,
        `spend=${budget.cumulativeUsd.toFixed(6)}`,
      );
      if (run.failureClass === "HARD_INVARIANT") {
        console.error("STOP — MW0 AUTHORITY INVARIANT FAILURE");
        hardInvariantStop = true;
        break;
      }
      if (run.failureClass === "BUDGET_STOP") break;
    }
    if (hardInvariantStop || budget.hardStopTriggered) break;
  }

  const correctionSpend = budget.cumulativeUsd - spendAtStart;
  const packPath = path.join(outDir, `${campaignId}.json`);
  fs.writeFileSync(
    packPath,
    serializeEvidencePack({
      campaignId,
      createdAt: new Date().toISOString(),
      runs,
      extra: {
        corr: "CORR-MW0-05",
        manifest,
        plan,
        historical: {
          campaignId: HISTORICAL_CAMPAIGN_ID,
          classification:
            "HISTORICAL CAMPAIGN — R1 usable — R2 EXIT CLAIM SUPERSEDED / INVALIDATED BY CORR-MW0-05 REVIEW — R3 EXIT CLAIM SUPERSEDED / INVALIDATED — budget debit retained",
          debitUsd: carryIn,
          terminology: "usage-based / harness-estimated historical spend",
        },
        budget: {
          historicalCarryInUsd: carryIn,
          correctionCampaignSpendUsd: correctionSpend,
          cumulativeUsageBasedEstimatedUsd: budget.cumulativeUsd,
          softStopTriggered: budget.softStopTriggered,
          hardStopTriggered: budget.hardStopTriggered,
          ledger: budget.ledger,
          policy: MW0_BUDGET_POLICY,
          terminology: "usage-based estimated API cost (NOT invoice spend)",
        },
        secretsSource: secrets.source,
        hardInvariantStop,
      },
    }),
  );
  console.log("EVIDENCE_PACK", packPath);
  console.log("CORRECTION_SPEND_USD", correctionSpend);
  console.log("CUMULATIVE_USAGE_BASED_ESTIMATED_USD", budget.cumulativeUsd);
  console.log(
    "SUMMARY",
    JSON.stringify(
      {
        d0: d0.ok,
        r1: r1.passFail,
        r2: runs
          .filter((r) => r.cell.tier === "R2")
          .map((r) => ({
            s: r.cell.scenarioId,
            i: r.cell.runIndex,
            p: r.passFail,
            f: r.failureClass,
            f2Ok: r.productObservation?.f2Ok ?? null,
            f2Status: r.productObservation?.f2Status ?? null,
            turnKind: r.productObservation?.turnKind ?? null,
            observed: r.productObservation?.observedObservableIds ?? null,
          })),
        carryIn,
        correctionSpend,
        cumulative: budget.cumulativeUsd,
      },
      null,
      2,
    ),
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
```

### `projects/sfia-studio/app/__tests__/nora-eval/mw0.realCampaign.test.ts`

```typescript
/** @vitest-environment node */
/**
 * CORR-MW0-05 bounded REAL campaign — skipped unless MW0_RUN_REAL=1.
 * Secrets from OPENAI_API_KEY or sibling .env.local (never asserted/logged).
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  BudgetTracker,
  buildMw0CapabilityManifest,
  campaignEffectiveCapabilitySet,
  runFullD0Suite,
  runR1ProviderSmoke,
  runR2ProductScenario,
  serializeEvidencePack,
  MW0_BUDGET_POLICY,
  MW0_HISTORICAL_USAGE_BASED_ESTIMATED_SPEND_USD,
  type RunEvidence,
} from "@/lib/nora-eval";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";

const HISTORICAL_CAMPAIGN_ID = "mw0-1788039895203";

type SecretSource = "process.env" | "env.local";

/**
 * CORR-MW0-08 — portable secret resolution only.
 * Returns categorical source (never a physical file path).
 */
function loadSecrets(): { apiKey: string; source: SecretSource } | null {
  if (process.env.OPENAI_API_KEY?.trim()) {
    return { apiKey: process.env.OPENAI_API_KEY.trim(), source: "process.env" };
  }
  // app/__tests__/nora-eval → ../../.env.local = app/.env.local
  const candidates = [
    path.resolve(process.cwd(), ".env.local"),
    path.resolve(__dirname, "../../.env.local"),
  ];
  const seen = new Set<string>();
  for (const file of candidates) {
    if (seen.has(file)) continue;
    seen.add(file);
    if (!fs.existsSync(file)) continue;
    const text = fs.readFileSync(file, "utf8");
    const m = text.match(/^OPENAI_API_KEY=(.+)$/m);
    if (m?.[1]) {
      const apiKey = m[1].trim().replace(/^["']|["']$/g, "");
      if (apiKey) return { apiKey, source: "env.local" };
    }
  }
  return null;
}

const runReal = process.env.MW0_RUN_REAL === "1";

describe.runIf(runReal)("MW0 CORR-05 bounded REAL campaign", () => {
  it(
    "D0 → R1 → R2 under cumulative $5 hard cap with carry-in",
    async () => {
      const campaignId = `mw0-corr05-${Date.now()}`;
      const outDir = path.resolve(process.cwd(), ".tmp-nora-mw0-evidence");
      fs.mkdirSync(outDir, { recursive: true });

      const historicalPath = path.join(outDir, `${HISTORICAL_CAMPAIGN_ID}.json`);
      expect(fs.existsSync(historicalPath)).toBe(true);

      const d0 = runFullD0Suite();
      expect(d0.ok).toBe(true);

      const manifest = buildMw0CapabilityManifest(new Date().toISOString());
      const luna = campaignEffectiveCapabilitySet(manifest, "gpt-5.6-luna");
      expect(luna.ok).toBe(true);
      expect(luna.efforts).toContain("none");

      const secrets = loadSecrets();
      expect(secrets).not.toBeNull();
      if (!secrets) return;

      const plan = {
        model: "gpt-5.6-luna" as const,
        reasoningEffort: "none" as const,
        r2: [
          { scenarioId: "mw0.s03.ambiguous-clarification", n: 3, essential: false },
          { scenarioId: "mw0.s04.option-rec-hd-separation", n: 3, essential: false },
          { scenarioId: "mw0.s05.authority-anti-nora-grant", n: 5, essential: true },
          { scenarioId: "mw0.s06.genericity-cycle-a", n: 3, essential: false },
          { scenarioId: "mw0.s06.genericity-cycle-b", n: 3, essential: false },
        ],
      };

      const carryIn = MW0_HISTORICAL_USAGE_BASED_ESTIMATED_SPEND_USD;
      const budget = new BudgetTracker(MW0_BUDGET_POLICY, carryIn);
      const spendAtStart = budget.cumulativeUsd;
      const runs: RunEvidence[] = [...d0.results];

      // eslint-disable-next-line no-console
      console.log(
        "REAL_CAMPAIGN_PLAN",
        JSON.stringify({
          campaignId,
          carryInUsd: carryIn,
          remainingHardCapBudgetUsd: MW0_BUDGET_POLICY.hardCapUsd - carryIn,
          model: plan.model,
          reasoningEffort: plan.reasoningEffort,
          r2Cells: plan.r2,
        }),
      );

      const r1 = await runR1ProviderSmoke({
        campaignId,
        apiKey: secrets.apiKey,
        model: plan.model,
        reasoningEffort: plan.reasoningEffort,
        runIndex: 1,
        manifest,
        budget,
        essential: true,
      });
      runs.push(r1);
      expect(r1.passFail).toBe("PASS");

      resetRuntimeApplicationServiceForTests();
      process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
      delete process.env.OPS1_CONVERSATION_PROVIDER;

      const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-mw0-"));
      const runtime = getRuntimeApplicationService({
        productDbPath: path.join(dir, "oa-product.sqlite"),
        auditMode: "noop",
        nowIso: "2026-08-29T22:00:00.000Z",
      });
      const created = await runtime.createProject({
        name: "MW0 Eval Project",
        objective: "Bounded cognitive eval harness evidence.",
        context: "Authorized class C representative fixture for MW0 Delivery.",
        criticality: "STANDARD",
        constraints: ["AUCUNE EXÉCUTION", "HumanDecision Pilote-only"],
        shortReference: "MW0",
        idempotencyKey: `idem:mw0-${campaignId}`,
      });
      expect(created.ok).toBe(true);
      if (!created.ok) return;

      let hardInvariantFail = false;
      for (const cell of plan.r2) {
        for (let i = 1; i <= cell.n; i++) {
          if (budget.hardStopTriggered) break;
          const run = await runR2ProductScenario({
            campaignId,
            apiKey: secrets.apiKey,
            model: plan.model,
            reasoningEffort: plan.reasoningEffort,
            scenarioId: cell.scenarioId,
            runIndex: i,
            projectId: created.projectId,
            manifest,
            budget,
            essential: cell.essential,
          });
          runs.push(run);
          // eslint-disable-next-line no-console
          console.log(
            "R2",
            cell.scenarioId,
            i,
            run.passFail,
            run.failureClass,
            `f2.ok=${String(run.productObservation?.f2Ok)}`,
            `spend=${budget.cumulativeUsd.toFixed(6)}`,
          );
          if (run.failureClass === "HARD_INVARIANT") {
            hardInvariantFail = true;
            break;
          }
          if (run.failureClass === "BUDGET_STOP") break;
        }
        if (hardInvariantFail || budget.hardStopTriggered) break;
      }

      expect(hardInvariantFail).toBe(false);
      expect(budget.cumulativeUsd).toBeLessThanOrEqual(MW0_BUDGET_POLICY.hardCapUsd);

      const correctionSpend = budget.cumulativeUsd - spendAtStart;
      const packPath = path.join(outDir, `${campaignId}.json`);
      fs.writeFileSync(
        packPath,
        serializeEvidencePack({
          campaignId,
          createdAt: new Date().toISOString(),
          runs,
          extra: {
            corr: "CORR-MW0-05",
            manifest,
            plan,
            historical: {
              campaignId: HISTORICAL_CAMPAIGN_ID,
              classification:
                "HISTORICAL CAMPAIGN — R1 usable — R2/R3 EXIT CLAIMS SUPERSEDED / INVALIDATED BY CORR-MW0-05 — budget debit retained",
              debitUsd: carryIn,
              terminology: "usage-based / harness-estimated historical spend",
            },
            budget: {
              historicalCarryInUsd: carryIn,
              correctionCampaignSpendUsd: correctionSpend,
              cumulativeUsageBasedEstimatedUsd: budget.cumulativeUsd,
              softStopTriggered: budget.softStopTriggered,
              hardStopTriggered: budget.hardStopTriggered,
              ledger: budget.ledger,
              policy: MW0_BUDGET_POLICY,
              terminology: "usage-based estimated API cost (NOT invoice spend)",
            },
            secretsSourceKind: secrets.source,
          },
        }),
      );

      // Historical must still exist unchanged
      expect(fs.existsSync(historicalPath)).toBe(true);

      const r2 = runs.filter((r) => r.cell.tier === "R2");
      // No PASS when f2.ok=false
      for (const r of r2) {
        if (r.productObservation?.f2Ok === false) {
          expect(r.passFail).not.toBe("PASS");
          expect(r.failureClass).not.toBe("NONE");
        }
      }

      const byScenario = new Map<string, RunEvidence[]>();
      for (const r of r2) {
        const list = byScenario.get(r.cell.scenarioId) ?? [];
        list.push(r);
        byScenario.set(r.cell.scenarioId, list);
      }

      // eslint-disable-next-line no-console
      console.log(
        JSON.stringify({
          campaignId,
          packPath,
          carryIn,
          correctionSpend,
          cumulative: budget.cumulativeUsd,
          r1: r1.passFail,
          r2Counts: [...byScenario.entries()].map(([s, list]) => ({
            s,
            n: list.length,
            pass: list.filter((x) => x.passFail === "PASS").length,
            f2OkTrue: list.filter((x) => x.productObservation?.f2Ok === true)
              .length,
          })),
        }),
      );
    },
    600_000,
  );
});
```

### `projects/sfia-studio/app/__tests__/nora-eval/mw0.corr08.secretResolutionPortability.test.ts`

```typescript
/** @vitest-environment node */
/**
 * CORR-MW0-08 — deterministic portability contract for REAL secret resolution.
 * Source-level only: does NOT import the standalone runner (avoids main()).
 * Must NOT set MW0_RUN_REAL=1 or call OpenAI.
 */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const DIR = path.resolve(__dirname);
const TARGETS = [
  path.join(DIR, "runMw0RealCampaign.ts"),
  path.join(DIR, "mw0.realCampaign.test.ts"),
] as const;

function read(file: string): string {
  return fs.readFileSync(file, "utf8");
}

describe("CORR-MW0-08 secret resolution portability", () => {
  it("target files exist", () => {
    for (const file of TARGETS) {
      expect(fs.existsSync(file), file).toBe(true);
    }
  });

  it("contains no user/machine-specific absolute home paths", () => {
    for (const file of TARGETS) {
      const src = read(file);
      expect(src, file).not.toMatch(/\/Users\//);
      expect(src, file).not.toMatch(/\/home\//);
      expect(src, file).not.toMatch(/:\\Users\\/i);
      expect(src, file).not.toMatch(/C:\\Users\\/i);
    }
  });

  it("does not persist physical secret file path as source", () => {
    for (const file of TARGETS) {
      const src = read(file);
      expect(src, file).not.toMatch(/source:\s*file\b/);
      expect(src, file).not.toMatch(/source:\s*[`'\"]?\$\{?file/);
      expect(src, file).not.toMatch(/return\s*\{\s*apiKey[^}]*source:\s*file\b/);
    }
  });

  it("retains OPENAI_API_KEY first + categorical env.local source", () => {
    for (const file of TARGETS) {
      const src = read(file);
      expect(src).toMatch(/OPENAI_API_KEY/);
      expect(src).toMatch(/source:\s*["']process\.env["']/);
      expect(src).toMatch(/source:\s*["']env\.local["']/);
      expect(src).toMatch(/\.env\.local/);
      expect(src).toMatch(/path\.resolve\(process\.cwd\(\),\s*["']\.env\.local["']\)/);
      expect(src).toMatch(
        /path\.resolve\(__dirname,\s*["']\.\.\/\.\.\/\.env\.local["']\)/,
      );
    }
  });

  it("Vitest REAL campaign remains opt-in via MW0_RUN_REAL === \"1\"", () => {
    const src = read(path.join(DIR, "mw0.realCampaign.test.ts"));
    expect(src).toMatch(/MW0_RUN_REAL\s*===\s*["']1["']/);
    expect(src).toMatch(/describe\.runIf\(runReal\)/);
  });

  it("standalone runner is not imported/executed by this suite", () => {
    // This file must never pull in runMw0RealCampaign (would risk main()).
    const self = read(path.join(DIR, "mw0.corr08.secretResolutionPortability.test.ts"));
    expect(self).not.toMatch(/from\s+["'].*runMw0RealCampaign/);
    expect(self).not.toMatch(/require\(["'].*runMw0RealCampaign/);
  });

  it("MW0_RUN_REAL is not enabled during CORR-08 deterministic suite", () => {
    expect(process.env.MW0_RUN_REAL).not.toBe("1");
  });
});
```
