# ChatGPT Critical Review Pack — C6-GMR-FINOPS-CONTRACT-TRUTH

| Field | Value |
| --- | --- |
| **Timestamp** | 2026-09-05 22:53:24 CEST / `2026-09-05T20:53:24Z` |
| **Cycle** | 8 — EVOL / CRITICAL |
| **Identifier** | **C6-GMR-FINOPS-CONTRACT-TRUTH** |
| **GO** | CORRECTIF OPTION C FINOPS + CONTRACT TRUTH — ZERO REAL |
| **Morris decisions prior** | D-GMR-ASTRA-01/02 Option C ADOPTED (technical) |
| **Blockers addressed** | **C6-01** Contract 10 current-truth · **C6-02** FinOps hosted web-search cost accounting |
| **Prior Review Handoff** | `e782a279e382f5463339979b30c30d985807a40a` |
| **Mode** | publish-in-cycle |
| **ZERO REAL** | **YES** |

---

## 1. Verdict

**READY FOR CHATGPT CRITICAL REVIEW — GLOBAL MODEL × REASONING STAGE A OPTION C FINOPS + CONTRACT TRUTH CORRECTED — 78 / 438 / 464 UNCHANGED — MODEL-TOKEN PLANNED RESERVE ≈ 13.06896 — MAX FIXED WEB-SEARCH TOOL FEES = 0.26 — KNOWN PLANNED SUBTOTAL ≈ 13.32896 — VARIABLE SEARCH-CONTENT / CACHE EXPOSURE VISIBLE — MORRIS FINANCIAL ENVELOPE DECISION STILL REQUIRED — ZERO REAL — REVIEW HANDOFF PUBLISHED**

### Sub-status

| Item | Status |
| --- | --- |
| Option C technical design | **UNCHANGED / ACCEPTED** |
| GPT-5.6 primary | **54** |
| Astra challenger | **6 / medium / one-shot** |
| base / max cells / model / hosted / aggregate | **60 / 78 / 438 / 26 / 464** |
| current policy | **6 / 9 / 12** |
| current policy feasibility | **FAIL** |
| plannedModelTokenReserveUsd | ≈ **13.06896** |
| plannedHostedWebSearchToolFeesUsd | **0.26** |
| knownPlannedSubtotalUsd | ≈ **13.32896** |
| search-content / cache exposure | **VISIBLE / VARIABLE** |
| invoice | **NOT_OBSERVED** |
| Astra account | **NOT PROVEN** |
| Stage A REAL | **NOT AUTHORIZED** |
| Stage B Astra-only | CONDITIONAL FUTURE / NOT IMPLEMENTED |
| production routing | NOT SELECTED |
| Cognitive Completion | NOT PROVEN |
| runtime v3 | NON ADOPTED |
| product commit/push/PR/merge | **NONE** |

### Next gate

ChatGPT Critical Review → Morris financial envelope decision + Git integration GO → product integration / post-merge → DISTINCT Stage A REAL GO

---

## 2. Git Truth

| Item | Value |
| --- | --- |
| `origin/main` | `1dd5d67ad942c448becd637f4c2e55883d16ffca` |
| Delivery branch | `delivery/sfia-studio-global-mr-stage-a-astra-challenger` |
| HEAD | `1dd5d67ad942c448becd637f4c2e55883d16ffca` (dirty local candidate) |
| Prior handoff | `e782a279e382f5463339979b30c30d985807a40a` |

---

## 3. Official OpenAI pricing snapshot (API docs)

Source: `https://developers.openai.com/api/docs/pricing` · revalidated this cycle · **2026-09-05**

| Item | Value |
| --- | --- |
| Web search (all models) tool-call fee | **$10.00 / 1k calls = $0.01 / call** |
| Search content tokens | **Billed at chosen model token rates** |
| Built-in tool tokens | **Billed at chosen model rates** |
| GPT-6 Astra short-context | input **10** / cached **1** / cache writes **12.50** / output **50** USD/MTok |
| Invoice | **NOT_OBSERVED** |
| Account entitlement | **NOT PROVEN** |

Disposition: fixed tool-call fee included in known planned subtotal; search-content + cache-write quantity = **VARIABLE / NOT DETERMINISTICALLY METERED** on current narrow path (no ProviderUsage redesign).

---

## 4. C6-01 — Contract 10 current-truth corrections

Stale CURRENT phrases corrected (historical v2 72/405/429/~9.77 retained only as labelled history):

- Max hosted **26** (was stale **24** in current table)
- maxModelInvocations derivation **438** (=330+108) (was stale 297+108=405)
- Hard cap feasibility **INSUFFICIENT** vs known subtotal ≈13.32896 (was stale feasibility OK vs ~9.77)
- FinOps cost-class table added

---

## 5. C6-02 — FinOps completeness

Envelope `usdFeasibility` now derives:

- `plannedModelTokenReserveUsd` ≈ 13.06896
- `webSearchToolCallUsd` = 0.01
- `plannedHostedWebSearchToolFeesUsd` = 26 × 0.01 = 0.26
- `knownPlannedSubtotalUsd` ≈ 13.32896
- feasibility evaluated against **knownPlannedSubtotalUsd** → FAIL / REQUIRES_MORRIS_BUDGET_DECISION

Observed USD accounting (`createEvalAgentsUsdAccounting` / `settleTurn`):

- optional `hostedWebSearchCalls` (factual REAL only)
- `modelTokenEstimatedUsd` + `hostedToolCallFeesUsd` → `observedEstimatedUsd` once
- deterministic fixtures → fee **0**
- overrun → authorizationEnvelopeExceeded → next dispatch denied
- `invoice: NOT_OBSERVED`

`runNoraAgentsTurn` settles **after** hosted observation; factual live hosted count only when not deterministic.

---

## 6. Tests (ZERO REAL)

| Suite | Result |
| --- | --- |
| c6.finops-contract-truth.d0.test.ts | **PASS** (6) |
| c5 / c4 / c3 / e1 / e3 / e4 / g1 / mw6 | **PASS** |
| tsc / lint / build / git diff --check | **PASS** |

189 targeted tests in regression batch PASS.

---

## 7. Files / diffs

### Name-status
```
M	.tmp-sfia-review/chatgpt-review.md
M	projects/sfia-studio/app/__tests__/nora-eval/c3.call-accounting.d0.test.ts
M	projects/sfia-studio/app/__tests__/nora-eval/c4.final-safety.d0.test.ts
M	projects/sfia-studio/app/__tests__/nora-eval/e3.shared-campaign-budget.d0.test.ts
M	projects/sfia-studio/app/__tests__/nora-eval/e4.stage-a-driver.d0.test.ts
M	projects/sfia-studio/app/__tests__/nora-eval/g1.global-capability-policy.test.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/agentsUsdAccounting.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/reasoningCapability.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
M	projects/sfia-studio/app/lib/nora-eval/agentsUsdBridge.ts
M	projects/sfia-studio/app/lib/nora-eval/capabilityBudget.ts
M	projects/sfia-studio/app/lib/nora-eval/globalModelReasoningStageA.ts
M	projects/sfia-studio/app/lib/nora-eval/index.ts
M	projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
M	projects/sfia-studio/nora-cognitive-completion/08-nora-openai-native-first-cognitive-trajectory.md
M	projects/sfia-studio/nora-cognitive-completion/10-nora-global-model-reasoning-campaign-execution-contract.md

```

### Diffstat
```
 .tmp-sfia-review/chatgpt-review.md                 | 2235 +++++++++++++++++---
 .../nora-eval/c3.call-accounting.d0.test.ts        |   55 +-
 .../__tests__/nora-eval/c4.final-safety.d0.test.ts |   10 +-
 .../nora-eval/e3.shared-campaign-budget.d0.test.ts |   11 +-
 .../nora-eval/e4.stage-a-driver.d0.test.ts         |    9 +-
 .../nora-eval/g1.global-capability-policy.test.ts  |   19 +-
 .../nora-cognitive-runtime/agentsUsdAccounting.ts  |   17 +-
 .../nora-cognitive-runtime/reasoningCapability.ts  |   10 +-
 .../nora-cognitive-runtime/runNoraAgentsTurn.ts    |   33 +-
 .../app/lib/nora-eval/agentsUsdBridge.ts           |   28 +-
 .../app/lib/nora-eval/capabilityBudget.ts          |   73 +-
 .../lib/nora-eval/globalModelReasoningStageA.ts    |  332 ++-
 projects/sfia-studio/app/lib/nora-eval/index.ts    |    7 +
 .../convergence/sfia-studio-convergence-roadmap.md |   14 +-
 ...ora-openai-native-first-cognitive-trajectory.md |   22 +-
 ...-model-reasoning-campaign-execution-contract.md |  167 +-
 16 files changed, 2540 insertions(+), 502 deletions(-)

```

---

## 8. Anti-claims / non-actions

- ≠ Stage A REAL
- ≠ budget raised / hardCap bypassed
- ≠ 78/438/464 changed
- ≠ Astra design / repeats changed
- ≠ Stage B/C code
- ≠ invoice proven / account proven
- ≠ product commit/push/PR
- ≠ ProviderUsage redesign / second budget engine

---

## 9. Exact diffs (tracked)

### `projects/sfia-studio/app/lib/nora-eval/capabilityBudget.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/nora-eval/capabilityBudget.ts b/projects/sfia-studio/app/lib/nora-eval/capabilityBudget.ts
index 9320995b..8ffe2b3a 100644
--- a/projects/sfia-studio/app/lib/nora-eval/capabilityBudget.ts
+++ b/projects/sfia-studio/app/lib/nora-eval/capabilityBudget.ts
@@ -77,28 +77,79 @@ export function buildMw0CapabilityManifest(retrievedAtIso: string): CapabilityMa
   };
 }

+/**
+ * Current OpenAI provider capability snapshot for runtime + Global MR (R22).
+ * Includes GPT-6 Astra. Does NOT mutate {@link buildMw0CapabilityManifest}.
+ * Snapshot ≠ permanent doctrine; account availability ≠ documented capability.
+ */
+export function buildCurrentOpenAiCapabilityManifest(
+  retrievedAtIso: string,
+): CapabilityManifest {
+  const historical = buildMw0CapabilityManifest(retrievedAtIso);
+  return {
+    ...historical,
+    sourceName: "Official OpenAI API Models documentation (current provider snapshot)",
+    sourceNote:
+      "CURRENT OpenAI provider capability snapshot (GPT-5.6 Luna/Terra/Sol + GPT-6 Astra) — campaign Evidence only; ≠ permanent SFIA doctrine; ≠ production routing; Astra account availability NOT PROVEN until authorized REAL boundary.",
+    models: [
+      ...historical.models,
+      {
+        modelId: "gpt-6-astra",
+        inputUsdPerMTok: 10,
+        cachedInputUsdPerMTok: 1,
+        outputUsdPerMTok: 50,
+        // Official docs: low/medium/high/xhigh/max — NO none.
+        reasoningEfforts: ["low", "medium", "high", "xhigh", "max"],
+      },
+    ],
+    // Provider snapshot is not a campaign allowlist — keep MW0 allowlist shape unused here.
+    campaignAllowlist: {
+      modelIds: [
+        "gpt-5.6-luna",
+        "gpt-5.6-terra",
+        "gpt-5.6-sol",
+        "gpt-6-astra",
+      ],
+      reasoningEfforts: ["none", "low", "medium", "high", "xhigh", "max"],
+    },
+    caveats: [
+      ...historical.caveats,
+      "CURRENT provider snapshot includes GPT-6 Astra (no none / no minimal).",
+      "Documented capability ≠ account/API entitlement.",
+      "Do not silently coerce Astra none→low.",
+    ],
+  };
+}
+
 /**
  * Distinct campaign capability policy for the Global Model × Reasoning Campaign.
  * EXIT: campaign evaluation contract only — ≠ production model routing / ≠ multi-model router.
  * Does not mutate or replace {@link buildMw0CapabilityManifest} historical semantics.
+ * Option C: GPT-5.6 primary cohort + bounded GPT-6 Astra challenger capability.
  */
 export function buildGlobalModelReasoningCapabilityManifest(
   retrievedAtIso: string,
 ): CapabilityManifest {
-  const base = buildMw0CapabilityManifest(retrievedAtIso);
+  const current = buildCurrentOpenAiCapabilityManifest(retrievedAtIso);
   return {
-    ...base,
+    ...current,
     sourceNote:
-      "Global Model × Reasoning campaign candidate baseline (GPT-5.6 Luna/Terra/Sol) — not production routing. Revalidate each campaign. EXIT → global campaign contract only.",
+      "Global Model × Reasoning campaign candidate (GPT-5.6 Luna/Terra/Sol + GPT-6 Astra capability) — Stage A Option C challenger. ≠ production routing. Revalidate each campaign. EXIT → global campaign contract only.",
     campaignAllowlist: {
-      modelIds: ["gpt-5.6-luna", "gpt-5.6-terra", "gpt-5.6-sol"],
+      modelIds: [
+        "gpt-5.6-luna",
+        "gpt-5.6-terra",
+        "gpt-5.6-sol",
+        "gpt-6-astra",
+      ],
       reasoningEfforts: ["none", "low", "medium", "high", "xhigh", "max"],
     },
     caveats: [
-      ...base.caveats,
+      ...current.caveats,
       "Global campaign allowlist ≠ MW0 historical allowlist.",
-      "minimal remains non-admissible for GPT-5.6 family.",
-      "Campaign candidate ≠ adopted production routing.",
+      "minimal remains non-admissible for GPT-5.6 / Astra.",
+      "Astra Stage A challenger uses medium only (matrix); capability set is broader.",
+      "Campaign candidate ≠ adopted production routing / ≠ Astra-only selection.",
     ],
   };
 }
@@ -165,6 +216,14 @@ export function estimateCostUsd(input: {
 }

 /** Conservative pre-call estimate for a structured intent / short completion. */
+/**
+ * Official OpenAI API Pricing — Web search (all models) tool-call fee.
+ * Source: developers.openai.com/api/docs/pricing (revalidated 2026-09-05).
+ * $10.00 / 1k calls = $0.01 / call. Search-content tokens billed separately at model rates.
+ * ≠ invoice; ≠ permanent doctrine.
+ */
+export const OPENAI_WEB_SEARCH_TOOL_CALL_USD = 0.01;
+
 export function conservativePreCallEstimateUsd(input: {
   manifest: CapabilityManifest;
   modelId: string;

```

### `projects/sfia-studio/app/lib/nora-eval/globalModelReasoningStageA.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/nora-eval/globalModelReasoningStageA.ts b/projects/sfia-studio/app/lib/nora-eval/globalModelReasoningStageA.ts
index c4282cbb..80336908 100644
--- a/projects/sfia-studio/app/lib/nora-eval/globalModelReasoningStageA.ts
+++ b/projects/sfia-studio/app/lib/nora-eval/globalModelReasoningStageA.ts
@@ -25,26 +25,53 @@ import {
   BudgetTracker,
   buildGlobalModelReasoningCapabilityManifest,
   conservativePreCallEstimateUsd,
+  OPENAI_WEB_SEARCH_TOOL_CALL_USD,
   validateCellAgainstManifest,
   type CapabilityManifest,
 } from "./capabilityBudget";
 import { getScenario } from "./catalog";

 export const GLOBAL_MR_STAGE_A_CONTRACT_VERSION =
-  "global-mr-campaign-contract-v2-candidate" as const;
+  "global-mr-campaign-contract-v3-candidate" as const;

-export const GLOBAL_MR_STAGE_A_MODELS = [
+/** Primary GPT-5.6 cohort — preserved Cartesian product (Option C). */
+export const GLOBAL_MR_STAGE_A_PRIMARY_MODELS = [
   "gpt-5.6-luna",
   "gpt-5.6-terra",
   "gpt-5.6-sol",
 ] as const;

+/** @deprecated Alias — prefer PRIMARY_MODELS; does NOT include Astra. */
+export const GLOBAL_MR_STAGE_A_MODELS = GLOBAL_MR_STAGE_A_PRIMARY_MODELS;
+
 export const GLOBAL_MR_STAGE_A_EFFORTS = [
   "none",
   "medium",
   "high",
 ] as const satisfies readonly OpenAiReasoningEffort[];

+/** Bounded Astra challenger — medium only; ONE-SHOT (no selective repeats). */
+export const GLOBAL_MR_STAGE_A_ASTRA_CHALLENGER = {
+  modelId: "gpt-6-astra",
+  reasoningEffort: "medium",
+} as const satisfies {
+  modelId: "gpt-6-astra";
+  reasoningEffort: OpenAiReasoningEffort;
+};
+
+export type GlobalMrStageAPrimaryModel =
+  (typeof GLOBAL_MR_STAGE_A_PRIMARY_MODELS)[number];
+
+export type GlobalMrStageAModelId =
+  | GlobalMrStageAPrimaryModel
+  | typeof GLOBAL_MR_STAGE_A_ASTRA_CHALLENGER.modelId;
+
+/** Full Stage A model universe (primary + challenger). */
+export const GLOBAL_MR_STAGE_A_MODEL_UNIVERSE = [
+  ...GLOBAL_MR_STAGE_A_PRIMARY_MODELS,
+  GLOBAL_MR_STAGE_A_ASTRA_CHALLENGER.modelId,
+] as const;
+
 export const GLOBAL_MR_STAGE_A_WORKLOADS = [
   "W-Routine",
   "W-Clarification",
@@ -170,13 +197,19 @@ export function buildGlobalMrStageAWorkloadCallPlans(): Record<
 /** Candidate hosted tool-calls/response (campaign). */
 export const GLOBAL_MR_STAGE_A_PROVIDER_TOOL_CALLS_PER_RESPONSE = 2;

-/** Cell execution envelope — NOT model invocations. */
+/** Cell execution envelope — NOT model invocations. Option C: 54 primary + 6 Astra + 18 primary repeats. */
 export const GLOBAL_MR_STAGE_A_CELL_CAPS = {
-  baseCells: 54,
+  primaryBaseCells: 54,
+  astraChallengerCells: 6,
+  baseCells: 54 + 6,
   maxSelectiveRepeats: 18,
-  /** One selective extra run per base cell (runIndex 0 base + runIndex 1 repeat). */
+  /** One selective extra run per *primary* base cell (runIndex 0 base + runIndex 1 repeat). */
   maxRepeatsPerCell: 1,
-  maxCellExecutions: 54 + 18,
+  /** Astra challenger cells are ONE-SHOT — not selective-repeat eligible. */
+  astraSelectiveRepeats: 0,
+  maxCellExecutions: 54 + 6 + 18,
+  /** Hosted: primary pool 24 + Astra W-Sources challenger +2. */
+  maxHostedWebOperations: 24 + 2,
 } as const;

 /** Candidate USD envelope — authorization ≠ invoice. */
@@ -190,8 +223,14 @@ export type GlobalMrStageADerivedEnvelope = {
   contractVersion: typeof GLOBAL_MR_STAGE_A_CONTRACT_VERSION;
   maxCellExecutions: number;
   maxSelectiveRepeats: number;
+  primaryBaseCells: number;
+  astraChallengerCells: number;
+  baseCells: number;
+  primaryBaseModelInvocationCeiling: number;
+  astraBaseModelInvocationCeiling: number;
   baseModelInvocationCeiling: number;
   repeatModelInvocationCeiling: number;
+  astraRepeatModelInvocationCeiling: number;
   maxModelInvocations: number;
   maxHostedWebOperations: number;
   maxAggregateRealCalls: number;
@@ -199,8 +238,23 @@ export type GlobalMrStageADerivedEnvelope = {
   usd: CampaignBudgetPolicy;
   usdFeasibility: {
     ok: boolean;
+    /** Model-token planned reserve (4k/1.2k assumptions) — NOT total provider cost. */
+    plannedModelTokenReserveUsd: number;
+    /** Model-token base cells only (no repeats). */
     plannedReserveUsdBase: number;
+    /**
+     * @deprecated Alias of plannedModelTokenReserveUsd — model-token only.
+     * Do NOT treat as known planned subtotal or invoice ceiling.
+     */
     plannedReserveUsdWorstCaseWithRepeats: number;
+    webSearchToolCallUsd: number;
+    plannedHostedWebSearchToolFeesUsd: number;
+    /** model-token reserve + max fixed web-search tool-call fees. ≠ invoice. */
+    knownPlannedSubtotalUsd: number;
+    searchContentTokenExposure: "VARIABLE_PROVIDER_USAGE_DEPENDENT";
+    cacheWritePricingDocumented: true;
+    cacheWriteQuantityDeterministicallyKnown: false;
+    invoice: "NOT_OBSERVED";
     hardCapUsd: number;
     status: "COMPATIBLE_WITH_CANDIDATE_12" | "REQUIRES_MORRIS_BUDGET_DECISION";
   };
@@ -214,54 +268,61 @@ export type GlobalMrStageADerivedEnvelope = {
  */
 export function deriveGlobalMrStageAEnvelope(): GlobalMrStageADerivedEnvelope {
   const plans = buildGlobalMrStageAWorkloadCallPlans();
+  const basePlan = buildGlobalMrStageABaseCellPlan();
   const derivationNotes: string[] = [
-    "maxCellExecutions = 54 base + 18 selective repeats = 72 (cell executions, not model calls).",
+    "Option C: primary 54 (3×3×6) + Astra challenger 6 (medium×6) = 60 base cells.",
+    "maxCellExecutions = 60 base + 18 primary selective repeats = 78 (Astra repeats = 0).",
     `maxAgentsModelTurns = CT_MAX_TOOL_ROUNDS+1 = ${GLOBAL_MR_STAGE_A_MAX_AGENTS_MODEL_TURNS}.`,
     "F2 workloads include 1 constitutive analyzeIntent structured model call.",
-    "Repeat ceiling uses the 18 highest per-cell model-call costs (≤1 repeat/base cell).",
+    "Repeat ceiling uses the 18 highest *primary* per-cell model-call costs (≤1 repeat/primary base cell).",
+    "USD 6/9/12 policy retained; known planned subtotal (model-token + fixed hosted fees) REQUIRES_MORRIS_BUDGET_DECISION.",
+    "plannedModelTokenReserveUsd ≠ total provider cost; search-content/cache exposure VARIABLE; invoice NOT_OBSERVED.",
   ];

-  const cellCosts: Array<{
-    model: (typeof GLOBAL_MR_STAGE_A_MODELS)[number];
+  const primaryCellCosts: Array<{
+    model: GlobalMrStageAPrimaryModel;
     effort: (typeof GLOBAL_MR_STAGE_A_EFFORTS)[number];
     workloadId: GlobalMrStageAWorkloadId;
     modelCalls: number;
     estimatedUsd: number;
   }> = [];

-  let baseModelInvocationCeiling = 0;
+  let primaryBaseModelInvocationCeiling = 0;
+  let astraBaseModelInvocationCeiling = 0;
   let plannedReserveUsdBase = 0;

-  for (const model of GLOBAL_MR_STAGE_A_MODELS) {
-    for (const effort of GLOBAL_MR_STAGE_A_EFFORTS) {
-      for (const workloadId of GLOBAL_MR_STAGE_A_WORKLOADS) {
-        const plan = plans[workloadId];
-        const modelCalls = plan.maxModelInvocationsPerCell;
-        baseModelInvocationCeiling += modelCalls;
-        const perCall = conservativePreCallEstimateUsd({
-          manifest: buildGlobalModelReasoningCapabilityManifest(
-            "2026-09-05T00:00:00.000Z",
-          ),
-          modelId: model,
-        });
-        const estimatedUsd = perCall * modelCalls;
-        plannedReserveUsdBase += estimatedUsd;
-        cellCosts.push({
-          model,
-          effort,
-          workloadId,
-          modelCalls,
-          estimatedUsd,
-        });
-      }
+  const manifest = buildGlobalModelReasoningCapabilityManifest(
+    "2026-09-05T00:00:00.000Z",
+  );
+
+  for (const entry of basePlan) {
+    const plan = plans[entry.workloadId];
+    const modelCalls = plan.maxModelInvocationsPerCell;
+    const perCall = conservativePreCallEstimateUsd({
+      manifest,
+      modelId: entry.model,
+    });
+    const estimatedUsd = perCall * modelCalls;
+    plannedReserveUsdBase += estimatedUsd;
+    if (entry.isChallenger) {
+      astraBaseModelInvocationCeiling += modelCalls;
+    } else {
+      primaryBaseModelInvocationCeiling += modelCalls;
+      primaryCellCosts.push({
+        model: entry.model as GlobalMrStageAPrimaryModel,
+        effort: entry.reasoningEffort as (typeof GLOBAL_MR_STAGE_A_EFFORTS)[number],
+        workloadId: entry.workloadId,
+        modelCalls,
+        estimatedUsd,
+      });
     }
   }

-  cellCosts.sort(
+  primaryCellCosts.sort(
     (a, b) =>
       b.modelCalls - a.modelCalls || b.estimatedUsd - a.estimatedUsd,
   );
-  const topRepeats = cellCosts.slice(
+  const topRepeats = primaryCellCosts.slice(
     0,
     GLOBAL_MR_STAGE_A_CELL_CAPS.maxSelectiveRepeats,
   );
@@ -273,24 +334,39 @@ export function deriveGlobalMrStageAEnvelope(): GlobalMrStageADerivedEnvelope {
     (s, c) => s + c.estimatedUsd,
     0,
   );
-  const plannedReserveUsdWorstCaseWithRepeats =
+  const plannedModelTokenReserveUsd =
     plannedReserveUsdBase + plannedReserveUsdRepeats;

+  const baseModelInvocationCeiling =
+    primaryBaseModelInvocationCeiling + astraBaseModelInvocationCeiling;
   const maxModelInvocations =
     baseModelInvocationCeiling + repeatModelInvocationCeiling;
-  const maxHostedWebOperations = 24; // campaign pool (retained candidate pool)
+  const maxHostedWebOperations =
+    GLOBAL_MR_STAGE_A_CELL_CAPS.maxHostedWebOperations;
   const maxAggregateRealCalls = maxModelInvocations + maxHostedWebOperations;

+  const webSearchToolCallUsd = OPENAI_WEB_SEARCH_TOOL_CALL_USD;
+  const plannedHostedWebSearchToolFeesUsd =
+    maxHostedWebOperations * webSearchToolCallUsd;
+  const knownPlannedSubtotalUsd =
+    plannedModelTokenReserveUsd + plannedHostedWebSearchToolFeesUsd;
+
   const usdOk =
-    plannedReserveUsdWorstCaseWithRepeats <=
+    knownPlannedSubtotalUsd <=
     GLOBAL_MR_STAGE_A_USD_POLICY.hardCapUsd + 1e-12;

   return {
     contractVersion: GLOBAL_MR_STAGE_A_CONTRACT_VERSION,
     maxCellExecutions: GLOBAL_MR_STAGE_A_CELL_CAPS.maxCellExecutions,
     maxSelectiveRepeats: GLOBAL_MR_STAGE_A_CELL_CAPS.maxSelectiveRepeats,
+    primaryBaseCells: GLOBAL_MR_STAGE_A_CELL_CAPS.primaryBaseCells,
+    astraChallengerCells: GLOBAL_MR_STAGE_A_CELL_CAPS.astraChallengerCells,
+    baseCells: GLOBAL_MR_STAGE_A_CELL_CAPS.baseCells,
+    primaryBaseModelInvocationCeiling,
+    astraBaseModelInvocationCeiling,
     baseModelInvocationCeiling,
     repeatModelInvocationCeiling,
+    astraRepeatModelInvocationCeiling: 0,
     maxModelInvocations,
     maxHostedWebOperations,
     maxAggregateRealCalls,
@@ -298,8 +374,16 @@ export function deriveGlobalMrStageAEnvelope(): GlobalMrStageADerivedEnvelope {
     usd: GLOBAL_MR_STAGE_A_USD_POLICY,
     usdFeasibility: {
       ok: usdOk,
+      plannedModelTokenReserveUsd,
       plannedReserveUsdBase,
-      plannedReserveUsdWorstCaseWithRepeats,
+      plannedReserveUsdWorstCaseWithRepeats: plannedModelTokenReserveUsd,
+      webSearchToolCallUsd,
+      plannedHostedWebSearchToolFeesUsd,
+      knownPlannedSubtotalUsd,
+      searchContentTokenExposure: "VARIABLE_PROVIDER_USAGE_DEPENDENT",
+      cacheWritePricingDocumented: true,
+      cacheWriteQuantityDeterministicallyKnown: false,
+      invoice: "NOT_OBSERVED",
       hardCapUsd: GLOBAL_MR_STAGE_A_USD_POLICY.hardCapUsd,
       status: usdOk
         ? "COMPATIBLE_WITH_CANDIDATE_12"
@@ -348,15 +432,63 @@ export type GlobalMrStageACell = {
   workloadId: GlobalMrStageAWorkloadId;
   scenarioId: string;
   scenarioVersion: typeof NORA_EVAL_GLOBAL_CATALOG_VERSION;
-  model: (typeof GLOBAL_MR_STAGE_A_MODELS)[number];
-  reasoningEffort: (typeof GLOBAL_MR_STAGE_A_EFFORTS)[number];
+  model: GlobalMrStageAModelId;
+  reasoningEffort: OpenAiReasoningEffort;
   runIndex: number;
   isSelectiveRepeat: boolean;
+  /** True for Astra Stage A challenger cells. */
+  isChallenger: boolean;
+  /** False for Astra ONE-SHOT challenger cells. */
+  selectiveRepeatEligible: boolean;
   executionKind: GlobalMrStageAExecutionKind;
   attachHostedWebSearch: boolean;
   cell: CampaignCellConfig;
 };

+export type GlobalMrStageABaseCellPlanEntry = {
+  model: GlobalMrStageAModelId;
+  reasoningEffort: OpenAiReasoningEffort;
+  workloadId: GlobalMrStageAWorkloadId;
+  isChallenger: boolean;
+  selectiveRepeatEligible: boolean;
+};
+
+/**
+ * Shared base-cell plan — single SoT for matrix builder + envelope derivation.
+ * Primary Cartesian product + explicit Astra medium×6 challenger (NOT full 4×3×6).
+ */
+export function buildGlobalMrStageABaseCellPlan(): GlobalMrStageABaseCellPlanEntry[] {
+  const plan: GlobalMrStageABaseCellPlanEntry[] = [];
+  for (const model of GLOBAL_MR_STAGE_A_PRIMARY_MODELS) {
+    for (const reasoningEffort of GLOBAL_MR_STAGE_A_EFFORTS) {
+      for (const workloadId of GLOBAL_MR_STAGE_A_WORKLOADS) {
+        plan.push({
+          model,
+          reasoningEffort,
+          workloadId,
+          isChallenger: false,
+          selectiveRepeatEligible: true,
+        });
+      }
+    }
+  }
+  for (const workloadId of GLOBAL_MR_STAGE_A_WORKLOADS) {
+    plan.push({
+      model: GLOBAL_MR_STAGE_A_ASTRA_CHALLENGER.modelId,
+      reasoningEffort: GLOBAL_MR_STAGE_A_ASTRA_CHALLENGER.reasoningEffort,
+      workloadId,
+      isChallenger: true,
+      selectiveRepeatEligible: false,
+    });
+  }
+  if (plan.length !== GLOBAL_MR_STAGE_A_CELL_CAPS.baseCells) {
+    throw new Error(
+      `GLOBAL_MR_STAGE_A_BASE_PLAN_SIZE_INVALID: expected ${GLOBAL_MR_STAGE_A_CELL_CAPS.baseCells}, got ${plan.length}`,
+    );
+  }
+  return plan;
+}
+
 export type GlobalMrStageAStopReason =
   | "NONE"
   | "HARD_USD_CAP"
@@ -415,45 +547,41 @@ export function buildGlobalMrStageAMatrix(input: {
 }): GlobalMrStageACell[] {
   const plans = buildGlobalMrStageAWorkloadCallPlans();
   const cells: GlobalMrStageACell[] = [];
-  let ordinal = 0;
-  for (const model of GLOBAL_MR_STAGE_A_MODELS) {
-    for (const reasoningEffort of GLOBAL_MR_STAGE_A_EFFORTS) {
-      for (const workloadId of GLOBAL_MR_STAGE_A_WORKLOADS) {
-        const scenarioId = GLOBAL_MR_STAGE_A_SEMANTIC_SCENARIOS[workloadId];
-        const plan = plans[workloadId];
-        const executionKind = plan.productPath;
-        const cellConfig: CampaignCellConfig = {
-          model,
-          reasoningEffort,
-          scenarioId,
-          scenarioVersion: NORA_EVAL_GLOBAL_CATALOG_VERSION,
-          runIndex: 0,
-          campaignId: input.campaignId,
-          tier: "R2",
-          sourceSet: workloadId === "W-Sources" ? "E" : "C",
-          toolSet: workloadId === "W-Sources" ? "f1_tools" : "none",
-        };
-        cells.push({
-          campaignId: input.campaignId,
-          stage: "A",
-          workloadId,
-          scenarioId,
-          scenarioVersion: NORA_EVAL_GLOBAL_CATALOG_VERSION,
-          model,
-          reasoningEffort,
-          runIndex: 0,
-          isSelectiveRepeat: false,
-          executionKind,
-          attachHostedWebSearch: workloadId === "W-Sources",
-          cell: cellConfig,
-        });
-        ordinal += 1;
-      }
-    }
+  for (const entry of buildGlobalMrStageABaseCellPlan()) {
+    const scenarioId = GLOBAL_MR_STAGE_A_SEMANTIC_SCENARIOS[entry.workloadId];
+    const plan = plans[entry.workloadId];
+    const executionKind = plan.productPath;
+    const cellConfig: CampaignCellConfig = {
+      model: entry.model,
+      reasoningEffort: entry.reasoningEffort,
+      scenarioId,
+      scenarioVersion: NORA_EVAL_GLOBAL_CATALOG_VERSION,
+      runIndex: 0,
+      campaignId: input.campaignId,
+      tier: "R2",
+      sourceSet: entry.workloadId === "W-Sources" ? "E" : "C",
+      toolSet: entry.workloadId === "W-Sources" ? "f1_tools" : "none",
+    };
+    cells.push({
+      campaignId: input.campaignId,
+      stage: "A",
+      workloadId: entry.workloadId,
+      scenarioId,
+      scenarioVersion: NORA_EVAL_GLOBAL_CATALOG_VERSION,
+      model: entry.model,
+      reasoningEffort: entry.reasoningEffort,
+      runIndex: 0,
+      isSelectiveRepeat: false,
+      isChallenger: entry.isChallenger,
+      selectiveRepeatEligible: entry.selectiveRepeatEligible,
+      executionKind,
+      attachHostedWebSearch: entry.workloadId === "W-Sources",
+      cell: cellConfig,
+    });
   }
-  if (ordinal !== 54 || cells.length !== 54) {
+  if (cells.length !== GLOBAL_MR_STAGE_A_CELL_CAPS.baseCells) {
     throw new Error(
-      `GLOBAL_MR_STAGE_A_MATRIX_SIZE_INVALID: expected 54, got ${cells.length}`,
+      `GLOBAL_MR_STAGE_A_MATRIX_SIZE_INVALID: expected ${GLOBAL_MR_STAGE_A_CELL_CAPS.baseCells}, got ${cells.length}`,
     );
   }
   return cells;
@@ -464,7 +592,16 @@ export function assertGlobalMrStageAMatrixInvariants(
 ): { ok: boolean; issues: string[] } {
   const plans = buildGlobalMrStageAWorkloadCallPlans();
   const issues: string[] = [];
-  if (cells.length !== 54) issues.push(`size=${cells.length}`);
+  const expected = GLOBAL_MR_STAGE_A_CELL_CAPS.baseCells;
+  if (cells.length !== expected) issues.push(`size=${cells.length}`);
+  const primary = cells.filter((c) => !c.isChallenger);
+  const challengers = cells.filter((c) => c.isChallenger);
+  if (primary.length !== GLOBAL_MR_STAGE_A_CELL_CAPS.primaryBaseCells) {
+    issues.push(`primary=${primary.length}`);
+  }
+  if (challengers.length !== GLOBAL_MR_STAGE_A_CELL_CAPS.astraChallengerCells) {
+    issues.push(`astra=${challengers.length}`);
+  }
   const keys = new Set<string>();
   for (const c of cells) {
     if (c.scenarioVersion !== NORA_EVAL_GLOBAL_CATALOG_VERSION) {
@@ -485,13 +622,26 @@ export function assertGlobalMrStageAMatrixInvariants(
     if (c.workloadId !== "W-Sources" && c.attachHostedWebSearch) {
       issues.push(`hosted-default:${c.workloadId}`);
     }
+    if (c.isChallenger) {
+      if (c.model !== GLOBAL_MR_STAGE_A_ASTRA_CHALLENGER.modelId) {
+        issues.push(`challenger-model:${c.model}`);
+      }
+      if (c.reasoningEffort !== GLOBAL_MR_STAGE_A_ASTRA_CHALLENGER.reasoningEffort) {
+        issues.push(`challenger-effort:${c.reasoningEffort}`);
+      }
+      if (c.selectiveRepeatEligible) {
+        issues.push(`challenger-repeat-eligible:${c.workloadId}`);
+      }
+    } else if (!c.selectiveRepeatEligible) {
+      issues.push(`primary-not-repeat-eligible:${c.workloadId}`);
+    }
     const key = `${c.model}|${c.reasoningEffort}|${c.workloadId}`;
     if (keys.has(key)) issues.push(`dup:${key}`);
     keys.add(key);
     const scenario = getScenario(c.scenarioId, NORA_EVAL_GLOBAL_CATALOG_VERSION);
     if (!scenario) issues.push(`missing-scenario:${c.scenarioId}`);
   }
-  if (keys.size !== 54) issues.push(`unique=${keys.size}`);
+  if (keys.size !== expected) issues.push(`unique=${keys.size}`);
   return { ok: issues.length === 0, issues };
 }

@@ -522,12 +672,8 @@ export function createGlobalMrStageADriver(input: {
   carryInUsd?: number;
 }): GlobalMrStageADriverState {
   const derived = deriveGlobalMrStageAEnvelope();
-  if (!derived.usdFeasibility.ok) {
-    throw new Error(
-      "STOP — STAGE A USD ENVELOPE REQUIRES MORRIS BUDGET DECISION: " +
-        `worstCase=${derived.usdFeasibility.plannedReserveUsdWorstCaseWithRepeats} > hardCap=${derived.usdFeasibility.hardCapUsd}`,
-    );
-  }
+  // Option C may be DETERMINISTIC PROVEN while usdFeasibility.ok=false.
+  // Do NOT raise hardCap here — REAL authorization still requires Morris budget decision.
   const manifest = buildGlobalModelReasoningCapabilityManifest(
     input.retrievedAtIso ?? new Date().toISOString(),
   );
@@ -630,6 +776,9 @@ export function canScheduleSelectiveRepeat(
   if (baseCell.isSelectiveRepeat) {
     return { allowed: false, reason: "already_a_repeat" };
   }
+  if (baseCell.isChallenger || !baseCell.selectiveRepeatEligible) {
+    return { allowed: false, reason: "SELECTIVE_REPEAT_DENIED" };
+  }
   if (baseCell.runIndex >= 1) {
     return { allowed: false, reason: "cell_already_repeated" };
   }
@@ -654,6 +803,11 @@ export function materializeSelectiveRepeat(
       "SELECTIVE_REPEAT_RUN_INDEX_INVALID: runIndex>0 cannot be re-materialized",
     );
   }
+  if (baseCell.isChallenger || !baseCell.selectiveRepeatEligible) {
+    throw new Error(
+      "SELECTIVE_REPEAT_DENIED: Astra Stage A challenger cells are ONE-SHOT",
+    );
+  }
   return {
     ...baseCell,
     runIndex: 1,
@@ -706,7 +860,11 @@ function toRunEvidence(
       `contract:${GLOBAL_MR_STAGE_A_CONTRACT_VERSION}`,
       `workload:${cell.workloadId}`,
       `stage:A`,
+      `model:${cell.model}`,
+      `effort:${cell.reasoningEffort}`,
       `executionKind:${cell.executionKind}`,
+      `challenger:${cell.isChallenger}`,
+      `selectiveRepeatEligible:${cell.selectiveRepeatEligible}`,
       `canonicalDeltaModel:${canonicalDelta.model}`,
       `canonicalDeltaHosted:${canonicalDelta.hosted}`,
       ...softReviewRefs.map((r) => `soft-review-ack:${r}`),
@@ -714,6 +872,8 @@ function toRunEvidence(
     productObservation: {
       ...(result.productObservation ?? {}),
       executionKind: cell.executionKind,
+      isChallenger: cell.isChallenger,
+      selectiveRepeatEligible: cell.selectiveRepeatEligible,
       canonicalDelta,
       reportedModelInvocationsConsumed:
         result.reportedModelInvocationsConsumed ?? null,

```

### `projects/sfia-studio/app/lib/nora-eval/agentsUsdBridge.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/nora-eval/agentsUsdBridge.ts b/projects/sfia-studio/app/lib/nora-eval/agentsUsdBridge.ts
index 19f871c6..58724705 100644
--- a/projects/sfia-studio/app/lib/nora-eval/agentsUsdBridge.ts
+++ b/projects/sfia-studio/app/lib/nora-eval/agentsUsdBridge.ts
@@ -6,6 +6,8 @@
  * - NOT a guaranteed provider invoice ceiling
  * - observed estimate may exceed reserved after a response → Evidence + fail-close
  * - invoice = NOT OBSERVED
+ * - hosted web_search fixed tool-call fee ($0.01/call) is reconciled POST-OBSERVATION
+ *   for factual REAL hosted calls only (deterministic fixtures → fee 0)
  */
 import type {
   NoraAgentsUsdAccounting,
@@ -14,6 +16,7 @@ import type {
 } from "@/lib/nora-cognitive-runtime";
 import {
   BudgetTracker,
+  OPENAI_WEB_SEARCH_TOOL_CALL_USD,
   conservativePreCallEstimateUsd,
   estimateCostUsd,
   type CapabilityManifest,
@@ -25,6 +28,8 @@ export type CreateEvalAgentsUsdAccountingInput = {
   modelId: string;
   assumedInputTokens?: number;
   assumedOutputTokens?: number;
+  /** Override unit fee for tests; default = official OpenAI web_search tool-call fee. */
+  webSearchToolCallUsd?: number;
 };

 export function createEvalAgentsUsdAccounting(
@@ -39,6 +44,8 @@ export function createEvalAgentsUsdAccounting(
   const assumedIn = input.assumedInputTokens ?? 4000;
   const assumedOut = input.assumedOutputTokens ?? 1200;
   const hardCap = input.budget.policy.hardCapUsd;
+  const webSearchUnit =
+    input.webSearchToolCallUsd ?? OPENAI_WEB_SEARCH_TOOL_CALL_USD;

   return {
     estimateNextInvocationUsd(): number {
@@ -96,25 +103,34 @@ export function createEvalAgentsUsdAccounting(
       const hasObserved =
         observation.inputTokens != null || observation.outputTokens != null;
       let usedConservativeFallback = !hasObserved;
-      let observedEstimate: number;
+      let modelTokenEstimatedUsd: number;
       if (hasObserved) {
-        observedEstimate = estimateCostUsd({
+        modelTokenEstimatedUsd = estimateCostUsd({
           manifest: input.manifest,
           modelId: input.modelId,
           inputTokens: observation.inputTokens ?? assumedIn,
           outputTokens: observation.outputTokens ?? assumedOut,
         });
       } else {
-        observedEstimate = turnReservedUsd;
+        modelTokenEstimatedUsd = turnReservedUsd;
         usedConservativeFallback = true;
       }

+      const hostedCalls = Math.max(0, observation.hostedWebSearchCalls ?? 0);
+      const hostedToolCallFeesUsd = hostedCalls * webSearchUnit;
+      const observedEstimate = modelTokenEstimatedUsd + hostedToolCallFeesUsd;
+
       const observedOverrun = observedEstimate > turnReservedUsd + 1e-12;

-      // Monotone top-up of BudgetTracker when observed > reserved.
+      // Monotone top-up of BudgetTracker when observed (model + hosted fees) > reserved.
       if (observedOverrun) {
         const delta = observedEstimate - turnReservedUsd;
-        input.budget.recordSpend(delta, "agents-usd-observed-overrun-topup");
+        input.budget.recordSpend(
+          delta,
+          hostedToolCallFeesUsd > 0
+            ? "agents-usd-observed-overrun-topup-incl-hosted-tool-fees"
+            : "agents-usd-observed-overrun-topup",
+        );
       }

       cumulativeObservedEstimatedUsd += observedEstimate;
@@ -125,6 +141,8 @@ export function createEvalAgentsUsdAccounting(

       const result: NoraAgentsUsdSettleResult = {
         reservedUsd: turnReservedUsd,
+        modelTokenEstimatedUsd,
+        hostedToolCallFeesUsd,
         observedEstimatedUsd: observedEstimate,
         estimatedUsd: observedEstimate,
         cumulativeReservedUsd,

```

### `projects/sfia-studio/app/lib/nora-cognitive-runtime/agentsUsdAccounting.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/agentsUsdAccounting.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/agentsUsdAccounting.ts
index b5f28063..a2464055 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/agentsUsdAccounting.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/agentsUsdAccounting.ts
@@ -15,12 +15,25 @@ export type NoraAgentsUsdSettleObservation = {
   inputTokens: number | null;
   outputTokens: number | null;
   totalTokens: number | null;
+  /**
+   * Factual REAL hosted web_search tool calls observed this turn.
+   * Deterministic fixtures MUST pass 0 / omit — Fake ≠ provider-billed.
+   */
+  hostedWebSearchCalls?: number;
 };

 export type NoraAgentsUsdSettleResult = {
-  /** Reserved USD committed for this turn (pre-dispatch). */
+  /** Reserved USD committed for this turn (pre-dispatch model-token estimate). */
   reservedUsd: number;
-  /** Observed estimated USD for this turn (usage-based or conservative retain). */
+  /** Model/token estimated USD for this turn (usage-based or conservative retain). */
+  modelTokenEstimatedUsd: number;
+  /** Fixed web-search tool-call fees (N × unit price); 0 for deterministic fixtures. */
+  hostedToolCallFeesUsd: number;
+  /**
+   * Observed estimated USD for this turn =
+   * modelTokenEstimatedUsd + hostedToolCallFeesUsd (once; no double count).
+   * ≠ invoice.
+   */
   observedEstimatedUsd: number;
   /** Alias of observedEstimatedUsd for callers expecting estimatedUsd. */
   estimatedUsd: number;

```

### `projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
index e95998b2..d941406b 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
@@ -573,19 +573,6 @@ export async function runNoraAgentsTurn(
     }
   }

-  const usdObserve: RunNoraAgentsTurnUsdObserve | undefined = usdAccounting
-    ? (() => {
-        const reservedInvocations = usdAccounting.reservedInvocationCount();
-        const settled = usdAccounting.settleTurn({
-          reservedInvocations,
-          inputTokens: usageAgg?.inputTokens ?? null,
-          outputTokens: usageAgg?.outputTokens ?? null,
-          totalTokens: usageAgg?.totalTokens ?? null,
-        });
-        return { ...settled, reservedInvocations };
-      })()
-    : undefined;
-
   const usage = {
     inputTokens: usageAgg?.inputTokens ?? null,
     outputTokens: usageAgg?.outputTokens ?? null,
@@ -630,6 +617,26 @@ export async function runNoraAgentsTurn(
     }
   }

+  // USD settlement AFTER hosted observation so factual REAL hosted-call fees
+  // can be included. Deterministic fixtures → hostedWebSearchCalls=0 (not billed).
+  const usdObserve: RunNoraAgentsTurnUsdObserve | undefined = usdAccounting
+    ? (() => {
+        const reservedInvocations = usdAccounting.reservedInvocationCount();
+        const factualHostedCalls =
+          deterministicBoundaryUsed || !enableHostedWebSearch
+            ? 0
+            : liveCalls.length;
+        const settled = usdAccounting.settleTurn({
+          reservedInvocations,
+          inputTokens: usageAgg?.inputTokens ?? null,
+          outputTokens: usageAgg?.outputTokens ?? null,
+          totalTokens: usageAgg?.totalTokens ?? null,
+          hostedWebSearchCalls: factualHostedCalls,
+        });
+        return { ...settled, reservedInvocations };
+      })()
+    : undefined;
+
   const hostedSearchObserve: RunNoraAgentsTurnHostedSearchObserve | undefined =
     enableHostedWebSearch || deterministicBoundaryUsed
       ? {

```

### `projects/sfia-studio/app/lib/nora-eval/index.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/nora-eval/index.ts b/projects/sfia-studio/app/lib/nora-eval/index.ts
index 2970c326..02f42bde 100644
--- a/projects/sfia-studio/app/lib/nora-eval/index.ts
+++ b/projects/sfia-studio/app/lib/nora-eval/index.ts
@@ -80,7 +80,10 @@ export {
 export {
   GLOBAL_MR_STAGE_A_CONTRACT_VERSION,
   GLOBAL_MR_STAGE_A_MODELS,
+  GLOBAL_MR_STAGE_A_PRIMARY_MODELS,
   GLOBAL_MR_STAGE_A_EFFORTS,
+  GLOBAL_MR_STAGE_A_ASTRA_CHALLENGER,
+  GLOBAL_MR_STAGE_A_MODEL_UNIVERSE,
   GLOBAL_MR_STAGE_A_WORKLOADS,
   GLOBAL_MR_STAGE_A_SEMANTIC_SCENARIOS,
   GLOBAL_MR_STAGE_A_CALL_CAPS,
@@ -89,6 +92,7 @@ export {
   GLOBAL_MR_STAGE_A_MAX_AGENTS_MODEL_TURNS,
   GLOBAL_MR_STAGE_A_PROVIDER_TOOL_CALLS_PER_RESPONSE,
   buildGlobalMrStageAWorkloadCallPlans,
+  buildGlobalMrStageABaseCellPlan,
   deriveGlobalMrStageAEnvelope,
   buildGlobalMrStageAMatrix,
   assertGlobalMrStageAMatrixInvariants,
@@ -111,4 +115,7 @@ export {
   type GlobalMrStageADerivedEnvelope,
   type GlobalMrStageAWorkloadCallPlan,
   type GlobalMrStageAProductPath,
+  type GlobalMrStageAModelId,
+  type GlobalMrStageAPrimaryModel,
+  type GlobalMrStageABaseCellPlanEntry,
 } from "./globalModelReasoningStageA";

```

### `projects/sfia-studio/app/__tests__/nora-eval/c3.call-accounting.d0.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/nora-eval/c3.call-accounting.d0.test.ts b/projects/sfia-studio/app/__tests__/nora-eval/c3.call-accounting.d0.test.ts
index 03084afd..db8bd516 100644
--- a/projects/sfia-studio/app/__tests__/nora-eval/c3.call-accounting.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/nora-eval/c3.call-accounting.d0.test.ts
@@ -49,7 +49,7 @@ import { resetMw5ChallengeStoreForTests } from "@/features/project-assistant/f2/
 import { setConversationProviderForTests } from "@/lib/platform/ai";

 describe("C3-01 — cell executions ≠ model invocations", () => {
-  it("derives envelope: 72 cell executions ≠ model invocations", () => {
+  it("derives Option C envelope: 78 cell executions ≠ model invocations", () => {
     expect(GLOBAL_MR_STAGE_A_MAX_AGENTS_MODEL_TURNS).toBe(
       CT_MAX_TOOL_ROUNDS + 1,
     );
@@ -60,42 +60,57 @@ describe("C3-01 — cell executions ≠ model invocations", () => {
     expect(plans["W-Clarification"].preAgentsStructuredModelCalls).toBe(1);

     const d = deriveGlobalMrStageAEnvelope();
-    expect(d.maxCellExecutions).toBe(72);
-    expect(GLOBAL_MR_STAGE_A_CELL_CAPS.maxCellExecutions).toBe(72);
-    // 3×3×(5+6+6+6+5+5)=297 base; top-18 F2 cells×6=108; total 405
-    expect(d.baseModelInvocationCeiling).toBe(297);
+    expect(d.maxCellExecutions).toBe(78);
+    expect(GLOBAL_MR_STAGE_A_CELL_CAPS.maxCellExecutions).toBe(78);
+    // primary 297 + Astra 33 = 330 base; top-18 primary F2×6=108; total 438
+    expect(d.primaryBaseModelInvocationCeiling).toBe(297);
+    expect(d.astraBaseModelInvocationCeiling).toBe(33);
+    expect(d.baseModelInvocationCeiling).toBe(330);
     expect(d.repeatModelInvocationCeiling).toBe(108);
-    expect(d.maxModelInvocations).toBe(405);
-    expect(d.maxHostedWebOperations).toBe(24);
-    expect(d.maxAggregateRealCalls).toBe(429);
-    expect(GLOBAL_MR_STAGE_A_CALL_CAPS.maxModelInvocations).toBe(405);
-    expect(GLOBAL_MR_STAGE_A_CALL_CAPS.maxAggregateRealCalls).toBe(429);
+    expect(d.astraRepeatModelInvocationCeiling).toBe(0);
+    expect(d.maxModelInvocations).toBe(438);
+    expect(d.maxHostedWebOperations).toBe(26);
+    expect(d.maxAggregateRealCalls).toBe(464);
+    expect(GLOBAL_MR_STAGE_A_CALL_CAPS.maxModelInvocations).toBe(438);
+    expect(GLOBAL_MR_STAGE_A_CALL_CAPS.maxAggregateRealCalls).toBe(464);
     expect(d.maxModelInvocations).not.toBe(d.maxCellExecutions);
-    expect(d.usdFeasibility.ok).toBe(true);
-    expect(d.usdFeasibility.status).toBe("COMPATIBLE_WITH_CANDIDATE_12");
+    expect(d.usdFeasibility.ok).toBe(false);
+    expect(d.usdFeasibility.status).toBe("REQUIRES_MORRIS_BUDGET_DECISION");
+    expect(d.usdFeasibility.plannedModelTokenReserveUsd).toBeCloseTo(
+      13.06896,
+      4,
+    );
+    expect(d.usdFeasibility.knownPlannedSubtotalUsd).toBeCloseTo(13.32896, 4);
+    expect(d.usdFeasibility.plannedReserveUsdWorstCaseWithRepeats).toBeCloseTo(
+      13.06896,
+      4,
+    );
     expect(GLOBAL_MR_STAGE_A_CONTRACT_VERSION).toBe(
-      "global-mr-campaign-contract-v2-candidate",
+      "global-mr-campaign-contract-v3-candidate",
     );
     const proof = globalMrStageAEnvelopeProof();
-    expect(proof.maxModelInvocations).toBe(405);
-    expect(proof.maxCellExecutions).toBe(72);
+    expect(proof.maxModelInvocations).toBe(438);
+    expect(proof.maxCellExecutions).toBe(78);
     expect(proof.usdSemantics).toBe(
       "pre_dispatch_reservation_authorization_envelope",
     );
   });

-  it("matrix paths match call plans", () => {
+  it("matrix paths match call plans (54 primary + 6 Astra)", () => {
     const cells = buildGlobalMrStageAMatrix({ campaignId: "c3-matrix" });
-    expect(cells).toHaveLength(54);
+    expect(cells).toHaveLength(60);
+    expect(cells.filter((c) => !c.isChallenger)).toHaveLength(54);
+    expect(cells.filter((c) => c.isChallenger)).toHaveLength(6);
+    // primary 27 f2 + 3 Astra f2 = 30; primary 18 agents + 2 Astra = 20; primary 9 mw6 + 1 Astra = 10
     expect(
       cells.filter((c) => c.executionKind === "f2_product"),
-    ).toHaveLength(27);
+    ).toHaveLength(30);
     expect(
       cells.filter((c) => c.executionKind === "agents_cognitive"),
-    ).toHaveLength(18);
+    ).toHaveLength(20);
     expect(
       cells.filter((c) => c.executionKind === "mw6_governed"),
-    ).toHaveLength(9);
+    ).toHaveLength(10);
   });
 });


```

### `projects/sfia-studio/app/__tests__/nora-eval/c4.final-safety.d0.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/nora-eval/c4.final-safety.d0.test.ts b/projects/sfia-studio/app/__tests__/nora-eval/c4.final-safety.d0.test.ts
index 20d821b7..fbe55623 100644
--- a/projects/sfia-studio/app/__tests__/nora-eval/c4.final-safety.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/nora-eval/c4.final-safety.d0.test.ts
@@ -295,14 +295,14 @@ describe("C4-03 — structured F2 USD via MeteredConversationProvider", () => {
   });
 });

-describe("C4-04 — maxRepeatsPerCell = 1; envelope unchanged", () => {
+describe("C4-04 — maxRepeatsPerCell = 1; Option C envelope 78/438/464", () => {
   it("constant and derived envelope", () => {
     expect(GLOBAL_MR_STAGE_A_CELL_CAPS.maxRepeatsPerCell).toBe(1);
     const d = deriveGlobalMrStageAEnvelope();
-    expect(d.maxCellExecutions).toBe(72);
-    expect(d.maxModelInvocations).toBe(405);
-    expect(d.maxAggregateRealCalls).toBe(429);
-    expect(GLOBAL_MR_STAGE_A_CALL_CAPS.maxModelInvocations).toBe(405);
+    expect(d.maxCellExecutions).toBe(78);
+    expect(d.maxModelInvocations).toBe(438);
+    expect(d.maxAggregateRealCalls).toBe(464);
+    expect(GLOBAL_MR_STAGE_A_CALL_CAPS.maxModelInvocations).toBe(438);
   });
 });


```

### `projects/sfia-studio/app/__tests__/nora-eval/e3.shared-campaign-budget.d0.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/nora-eval/e3.shared-campaign-budget.d0.test.ts b/projects/sfia-studio/app/__tests__/nora-eval/e3.shared-campaign-budget.d0.test.ts
index 1a92aa11..1cb4275f 100644
--- a/projects/sfia-studio/app/__tests__/nora-eval/e3.shared-campaign-budget.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/nora-eval/e3.shared-campaign-budget.d0.test.ts
@@ -21,19 +21,22 @@ import {
 } from "@/features/project-assistant/mw6GovernedNoraTurn";

 describe("E3 — driver canonical campaign lease × MW6 (deterministic)", () => {
-  it("F3-AC01 — create driver → canonical lease derived 405/24/429", () => {
+  it("F3-AC01 — create driver → canonical lease derived 438/26/464", () => {
     const state = createGlobalMrStageADriver({
       campaignId: `f3-ac01-${Date.now()}`,
     });
     expect(state.campaignBudget.maxModelInvocations).toBe(
       GLOBAL_MR_STAGE_A_CALL_CAPS.maxModelInvocations,
     );
-    expect(state.campaignBudget.maxHostedWebOperations).toBe(24);
+    expect(state.campaignBudget.maxHostedWebOperations).toBe(
+      GLOBAL_MR_STAGE_A_CALL_CAPS.maxHostedWebOperations,
+    );
     expect(state.campaignBudget.maxAggregateRealCalls).toBe(
       GLOBAL_MR_STAGE_A_CALL_CAPS.maxAggregateRealCalls,
     );
-    expect(GLOBAL_MR_STAGE_A_CALL_CAPS.maxModelInvocations).toBe(405);
-    expect(GLOBAL_MR_STAGE_A_CALL_CAPS.maxAggregateRealCalls).toBe(429);
+    expect(GLOBAL_MR_STAGE_A_CALL_CAPS.maxModelInvocations).toBe(438);
+    expect(GLOBAL_MR_STAGE_A_CALL_CAPS.maxHostedWebOperations).toBe(26);
+    expect(GLOBAL_MR_STAGE_A_CALL_CAPS.maxAggregateRealCalls).toBe(464);
     expect(state.campaignBudget.campaignId).toBe(state.campaignId);
   });


```

### `projects/sfia-studio/app/__tests__/nora-eval/e4.stage-a-driver.d0.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/nora-eval/e4.stage-a-driver.d0.test.ts b/projects/sfia-studio/app/__tests__/nora-eval/e4.stage-a-driver.d0.test.ts
index 339d2131..6ed3f813 100644
--- a/projects/sfia-studio/app/__tests__/nora-eval/e4.stage-a-driver.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/nora-eval/e4.stage-a-driver.d0.test.ts
@@ -32,12 +32,13 @@ describe("E4 — Global MR Stage A driver corrections (deterministic)", () => {
     const cells = buildGlobalMrStageAMatrix({
       campaignId: "nora-global-mr-stage-a-test",
     });
-    expect(cells).toHaveLength(54);
+    expect(cells.filter((c) => !c.isChallenger)).toHaveLength(54);
+    expect(cells).toHaveLength(60);
     expect(assertGlobalMrStageAMatrixInvariants(cells).ok).toBe(true);
     const proof = globalMrStageAEnvelopeProof();
-    expect(proof.maxCellExecutions).toBe(72);
-    expect(proof.maxModelInvocations).toBe(405);
-    expect(proof.maxAggregateRealCalls).toBe(429);
+    expect(proof.maxCellExecutions).toBe(78);
+    expect(proof.maxModelInvocations).toBe(438);
+    expect(proof.maxAggregateRealCalls).toBe(464);
     expect(proof.usd).toEqual({ targetUsd: 6, softStopUsd: 9, hardCapUsd: 12 });
     expect(proof.usdSemantics).toBe(
       "pre_dispatch_reservation_authorization_envelope",

```

### `projects/sfia-studio/app/__tests__/nora-eval/g1.global-capability-policy.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/nora-eval/g1.global-capability-policy.test.ts b/projects/sfia-studio/app/__tests__/nora-eval/g1.global-capability-policy.test.ts
index 028a0172..23d477fe 100644
--- a/projects/sfia-studio/app/__tests__/nora-eval/g1.global-capability-policy.test.ts
+++ b/projects/sfia-studio/app/__tests__/nora-eval/g1.global-capability-policy.test.ts
@@ -69,12 +69,13 @@ describe("G1 — campaign capability policy (MW0 preserved + global distinct)",
     }
   });

-  it("Global policy: Luna/Terra/Sol + none→max admissible; minimal FAIL", () => {
+  it("Global policy: GPT-5.6 + Astra capability; Astra none FAIL; minimal FAIL", () => {
     const global = buildGlobalModelReasoningCapabilityManifest(RETRIEVED);
     expect(global.campaignAllowlist.modelIds).toEqual([
       "gpt-5.6-luna",
       "gpt-5.6-terra",
       "gpt-5.6-sol",
+      "gpt-6-astra",
     ]);
     expect(global.campaignAllowlist.reasoningEfforts).toEqual([
       "none",
@@ -84,7 +85,7 @@ describe("G1 — campaign capability policy (MW0 preserved + global distinct)",
       "xhigh",
       "max",
     ]);
-    for (const modelId of global.campaignAllowlist.modelIds) {
+    for (const modelId of ["gpt-5.6-luna", "gpt-5.6-terra", "gpt-5.6-sol"]) {
       for (const effort of global.campaignAllowlist.reasoningEfforts) {
         expect(
           validateCellAgainstManifest({
@@ -95,6 +96,20 @@ describe("G1 — campaign capability policy (MW0 preserved + global distinct)",
         ).toBe(true);
       }
     }
+    expect(
+      validateCellAgainstManifest({
+        manifest: global,
+        modelId: "gpt-6-astra",
+        reasoningEffort: "medium",
+      }).ok,
+    ).toBe(true);
+    expect(
+      validateCellAgainstManifest({
+        manifest: global,
+        modelId: "gpt-6-astra",
+        reasoningEffort: "none",
+      }).ok,
+    ).toBe(false);
     const minimal = validateCellAgainstManifest({
       manifest: global,
       modelId: "gpt-5.6-luna",

```

### `projects/sfia-studio/app/lib/nora-cognitive-runtime/reasoningCapability.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/reasoningCapability.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/reasoningCapability.ts
index b9b14308..4e865ae5 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/reasoningCapability.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/reasoningCapability.ts
@@ -1,11 +1,11 @@
 /**
- * MW2 runtime model capability validation — fail-closed, no campaign allowlist.
- * Reuses dated manifest model lookup; NOT MW0 campaignEffectiveCapabilitySet.
+ * Runtime model capability validation — fail-closed, no campaign allowlist.
+ * Uses CURRENT OpenAI provider snapshot (incl. Astra). MW0 historical snapshot untouched.
  */
 import type { OpenAiReasoningEffort } from "@/lib/platform/ai";
 import { TechnicalError } from "@/lib/platform/ai/errors";
 import {
-  buildMw0CapabilityManifest,
+  buildCurrentOpenAiCapabilityManifest,
   modelCapabilitySet,
 } from "@/lib/nora-eval/capabilityBudget";

@@ -13,7 +13,7 @@ export function validateRuntimeReasoningCapability(
   modelId: string,
   reasoningEffort: OpenAiReasoningEffort,
 ): void {
-  const manifest = buildMw0CapabilityManifest(new Date().toISOString());
+  const manifest = buildCurrentOpenAiCapabilityManifest(new Date().toISOString());
   const supported = modelCapabilitySet(manifest, modelId);
   if (!supported) {
     throw new TechnicalError(
@@ -24,7 +24,7 @@ export function validateRuntimeReasoningCapability(
   if (reasoningEffort === "minimal") {
     throw new TechnicalError(
       "PROVIDER",
-      "minimal n'est pas supporté pour la famille GPT-5.6 courante",
+      "minimal n'est pas supporté pour les modèles OpenAI courants du snapshot provider",
     );
   }
   if (!supported.includes(reasoningEffort)) {

```

### `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`

```diff
diff --git a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
index 8773c95c..02ce41ea 100644
--- a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
+++ b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
@@ -4,11 +4,13 @@
 | --- | --- |
 | **Rôle** | Roadmap **vivante** de convergence vers l’utilisation complète de la doctrine produit SFIA Studio v3 |
 | **Statut** | **VALIDATED — ACTIVE LIVING ROADMAP** |
-| **Timestamp maintenance NORA-MW6-CONSOLIDATED-INTEGRATION-TRUTH-SYNC-01** | 2026-09-05 11:19:35 CEST — **MW6 CONSOLIDATED INTEGRATION + CLOSURE TRUTH-SYNC** · Cycle **8** · EVOL · CRITICAL · **MORRIS DECISION — MW6 PROVEN SCOPE ACCEPTED FOR CLOSURE** **CONSUMED** · GO MORRIS — MW6 CONSOLIDATED INTEGRATION + TRUTH-SYNC PR **CONSUMED** · MW6 = **CLOSURE ACCEPTED BY MORRIS / INTEGRATION PENDING** · effective COMPLETE/CLOSED condition = exact accepted product candidate integrated on main + required PR/CI PASS · product candidate anchor `MW6-AUTH-INTEGRATION-BRIDGE-FINAL-CANDIDATE-ANCHOR-V1` = `9129cc4336281dbfbbf616d683ea7a00d9c419f0610150baaa6de714769f0398` · n=66 · REAL proof handoff `e73ccf0c2760473bd2da347d98e9c202ded5782e` · OpenAI hosted web_search REAL observed = **1** · model `gpt-5.6-luna` · deterministicBoundaryUsed=false · authorityBound=true · realAuthorized=true · eligible=true · N2+HD+Confirmation+S1+server governedAuthority used · Auth REAL @ V1 carried forward · temporary construction REAL grant remains **TEMPORARY WITH EXIT** · branch `delivery/sfia-studio-mw6-auth-binding` · repository lifecycle = **RESOLVE FROM CURRENT GIT / PR EVIDENCE** · Cognitive Completion **NOT PROVEN** · runtime v3 **NON ADOPTED** · Production model routing **NOT SELECTED** · Responses Compaction **CANDIDATE / NOT ADOPTED** · **NEXT PRODUCT CAPABILITY GATE = GLOBAL MODEL × REASONING CAMPAIGN READINESS / QUALIFICATION — NOT AUTHORIZED / NOT STARTED** · **≠** MW6 integrated on main yet · **≠** MW6 COMPLETE/CLOSED on main yet · **≠** END-TO-END REAL · **≠** Cognitive Completion PROVEN · **≠** runtime v3 ADOPTED · **≠** production model routing selected · **≠** generalized REAL gate adopted · merge remains **distinct Morris gate** |
+| **Timestamp maintenance NORA-GLOBAL-MR-STAGE-A-OPTION-C-ASTRA-CHALLENGER-01** | 2026-09-05 22:26:41 CEST — **GLOBAL MODEL × REASONING STAGE A OPTION C / BOUNDED GPT-6 ASTRA CHALLENGER** · Cycle **8** · EVOL · CRITICAL · GO MORRIS — OPTION C ADOPTED (D-GMR-ASTRA-01) + Astra-only future trajectory instructable (D-GMR-ASTRA-02) **CONSUMED** · base `origin/main`=`1dd5d67ad942c448becd637f4c2e55883d16ffca` (PR #467 INTEGRATED) · delivery branch `delivery/sfia-studio-global-mr-stage-a-astra-challenger` **LOCAL DIRTY CANDIDATE / NOT INTEGRATED** · contract `global-mr-campaign-contract-v3-candidate` · primary 54 + Astra challenger 6 = base **60** · maxCellExecutions **78** · maxModelInvocations **438** · maxHostedWebOperations **26** · maxAggregateRealCalls **464** · Astra = medium × 6 ONE-SHOT (no selective repeats) · USD policy **6/9/12 RETAINED** · model-token planned ≈13.06896 · fixed hosted max 0.26 · known subtotal ≈13.32896 · usdFeasibility = REQUIRES_MORRIS_BUDGET_DECISION (C6 FinOps truth) · Astra account **NOT PROVEN** · Stage A REAL **NOT AUTHORIZED** · Stage B Astra-only viability = CONDITIONAL FUTURE GATE / NOT IMPLEMENTED · Stage C NOT AUTHORIZED · production routing NOT SELECTED · Cognitive Completion NOT PROVEN · runtime v3 NON ADOPTED · product commit/push/PR/merge **NONE** · ZERO REAL · **NEXT = ChatGPT Critical Review → Morris technical acceptance + financial envelope + Git integration GO → distinct Stage A REAL GO** |
+| **Timestamp maintenance historique NORA-GLOBAL-MR-STAGE-A-POST-MERGE-READINESS-01 (pre-Option-C Astra challenger)** | 2026-09-05 20:57:01 CEST — **GLOBAL MODEL × REASONING STAGE A POST-MERGE CLOSURE + REAL READINESS QUALIFICATION** · Cycle **14** · DOC · CRITICAL · GO MORRIS — STAGE A POST-MERGE CLOSURE / TRUTH-SYNC + REAL READINESS QUALIFICATION — ZERO REAL **CONSUMED** · PR **#467 MERGED** @ 2026-09-05T17:36:03Z · accepted head `3fb1624c8b373b75dfcd48a64797a7927cb76019` · merge/main `1dd5d67ad942c448becd637f4c2e55883d16ffca` · parents `23d850fda45fe55ba519e0feefe63369d349afcc` + `3fb1624c8b373b75dfcd48a64797a7927cb76019` · head→merge product delta **ZERO** · post-merge CI **`33981467237` SUCCESS** · Required Gate **PASS** · source branch `docs/sfia-studio-global-model-reasoning-campaign-contract` **PRESERVED** @ `3fb1624c…` · Stage A deterministic harness (E1–E4 / F1→F5 / C3 / C4) = **INTEGRATED ON MAIN / POST-MERGE VERIFIED** · candidate envelope **72 / 405 / 429** · USD 6/9/12 · maxRepeatsPerCell **1** · contract `global-mr-campaign-contract-v2-candidate` · ZERO REAL for construction + this DOC cycle · Stage A REAL **NOT AUTHORIZED** · production routing **NOT SELECTED** · Cognitive Completion **NOT PROVEN** · runtime v3 **NON ADOPTED** · MW6 = **COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE — INTEGRATED ON MAIN / POST-MERGE VERIFIED** (PR **#465** merge `d3fee38b270d805144e621804b96ef1e5de3e208` · post-merge CI `33958548479` SUCCESS — closure decision already consumed; no second closure) · G1/G2/G3 integrated (PR **#466**) · provider-universe readiness qualification **ACTIVE** · GPT-5.6 Luna/Terra/Sol = **CURRENT CONTRACT COHORT** · GPT-6 Astra = **CURRENT PROVIDER DRIFT / DISPOSITION REQUIRED** (official docs: most capable; efforts low/medium/high/xhigh/max — **no none**; $10/$1/$50 per 1MTok; account availability **NOT PROVEN**) · **NEXT PRODUCT CAPABILITY GATE = STAGE A REAL READINESS — DECISION REQUIRED — MODEL UNIVERSE / BUDGET NOT CONSUMED** · **≠** Stage A REAL AUTHORIZED · **≠** Astra selected · **≠** 72/405/429 silently expanded · **≠** spend · **≠** production routing · documentary candidate **LOCAL until ChatGPT Critical Review → Morris publication GO** · **ZERO REAL** |
+| **Timestamp maintenance historique NORA-MW6-CONSOLIDATED-INTEGRATION-TRUTH-SYNC-01 (pre-Stage-A post-merge readiness)** | 2026-09-05 11:19:35 CEST — **MW6 CONSOLIDATED INTEGRATION + CLOSURE TRUTH-SYNC** · Cycle **8** · EVOL · CRITICAL · **MORRIS DECISION — MW6 PROVEN SCOPE ACCEPTED FOR CLOSURE** **CONSUMED** · GO MORRIS — MW6 CONSOLIDATED INTEGRATION + TRUTH-SYNC PR **CONSUMED** · MW6 = **CLOSURE ACCEPTED BY MORRIS / INTEGRATION PENDING** · effective COMPLETE/CLOSED condition = exact accepted product candidate integrated on main + required PR/CI PASS · product candidate anchor `MW6-AUTH-INTEGRATION-BRIDGE-FINAL-CANDIDATE-ANCHOR-V1` = `9129cc4336281dbfbbf616d683ea7a00d9c419f0610150baaa6de714769f0398` · n=66 · REAL proof handoff `e73ccf0c2760473bd2da347d98e9c202ded5782e` · OpenAI hosted web_search REAL observed = **1** · model `gpt-5.6-luna` · deterministicBoundaryUsed=false · authorityBound=true · realAuthorized=true · eligible=true · N2+HD+Confirmation+S1+server governedAuthority used · Auth REAL @ V1 carried forward · temporary construction REAL grant remains **TEMPORARY WITH EXIT** · branch `delivery/sfia-studio-mw6-auth-binding` · repository lifecycle = **RESOLVE FROM CURRENT GIT / PR EVIDENCE** · Cognitive Completion **NOT PROVEN** · runtime v3 **NON ADOPTED** · Production model routing **NOT SELECTED** · Responses Compaction **CANDIDATE / NOT ADOPTED** · **NEXT PRODUCT CAPABILITY GATE = GLOBAL MODEL × REASONING CAMPAIGN READINESS / QUALIFICATION — NOT AUTHORIZED / NOT STARTED** · **≠** MW6 integrated on main yet · **≠** MW6 COMPLETE/CLOSED on main yet · **≠** END-TO-END REAL · **≠** Cognitive Completion PROVEN · **≠** runtime v3 ADOPTED · **≠** production model routing selected · **≠** generalized REAL gate adopted · merge remains **distinct Morris gate** |
 | **Timestamp maintenance historique NORA-MW5-CLOSURE-DOC-INTEGRATION-01 (pre-MW6 consolidated integration)** | 2026-09-04 08:56:17 CEST — **NORA MW5 CLOSURE DOC INTEGRATION / TRUTH-SYNC** · Cycle **13** · DOC · CRITICAL · **MORRIS DECISION — MW5 COMPLETE / CLOSED AT PROVEN SCOPE WITH RETAINED GOVERNANCE DEVIATION AND NON-BLOCKING RESERVES** **CONSUMED** · GO MORRIS — NORA-MW5-CLOSURE-DOC-INTEGRATION-01 **CONSUMED** · MW5 = **COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE WITH RETAINED GOVERNANCE DEVIATION AND NON-BLOCKING RESERVES** · MW5 Delivery = **INTEGRATED ON MAIN / POST-MERGE VERIFIED** · PR **#463 MERGED** · pre-merge head `642c502d649a3dad46b66ade95bdea1b5ed8b787` · squash merge `7e2f4c2799be70380362630a1c6734837cc453d9` · parent `9b45f0d7700a3127fa28c13f37ffae40432ae05c` · tree `b58cea7a8d0ddd173c1467d5a522e26a9c643fe3` · HEAD→MERGE TREE PARITY **PROVEN** · post-merge CI **`33841337376` SUCCESS** · Required Gate **PASS** · delivery branch `delivery/sfia-studio-nora-mw5-critical-challenge-clarification` **PRESERVED** · CORR-MW5-PR-01/02 **CLOSED AT TESTED DETERMINISTIC SCOPE** · CORR-MW5-CLOSURE-C5-CURRENT-TRAJECTORY-01 **CLOSED AT REVIEWED DOCUMENTARY SCOPE** · MW5-R2-REAL-03 PASS at tested scope · SHA-01/02 CLOSED · MW0→MW5 cognitive evidence ACCEPTED BY MORRIS FOR MW5 PURPOSES · H17 FAIL — RETAINED HISTORICAL GOVERNANCE DEVIATION (141/100 · delta +41) · H18 INCONCLUSIVE · ZERO NEW REAL · Cognitive Completion **NOT PROVEN** · runtime v3 **NON ADOPTED** · Production model routing **NOT SELECTED** · Responses Compaction **CANDIDATE / NOT ADOPTED** · *(tip superseded by NORA-MW6-CONSOLIDATED-INTEGRATION-TRUTH-SYNC-01)* · historical next was MW6 readiness — now superseded |
 | **Doctrine cible** | SFIA Studio v3 framing `30`–`37` (destination produit) |
 | **Build Doctrine** | [`sfia-studio-convergence-build-doctrine.md`](./sfia-studio-convergence-build-doctrine.md) |
-| **Snapshot Git courant** | **RESOLVE FROM REPOSITORY** *(Git SoT ; this living Roadmap **≠** embed permanent `origin/main` HEAD · repository publication/integration status = **RESOLVE FROM GIT / PR evidence**)* · **CURRENT REPOSITORY TRUTH** = **RESOLVE FROM GIT / `origin/main` / PR evidence** · **Last verified Nora Option C implementation anchor** = PR **#447 MERGED** · head `0fdf06a518e2693f6d08fa16ddcc8fc821ce0f6b` · merge `127c6ecf5658e7f3954d94b2cef8269ab9eaf07e` · tree `cf88184cf8f036c671740cffffcc7ecdfb0953d1` · HEAD→MERGE tree parity **PROVEN** · post-merge CI **`33338927956` SUCCESS** · Required Gate **PASS** · source branch `delivery/sfia-studio-nora-mw1-option-c-migration` **PRESERVED** @ `0fdf06a5…` · **historical MW0 integration anchor** = PR **#442 MERGED** · head `67a0023892b7daac7e1e6f5d5f36c611b3275091` · merge `99ae9fe372e60d4263318df265d8f13fbf218de8` · tree `5d7b386cd9fc253ba682d0d55520556c3d737b05` · HEAD→MERGE tree parity **PROVEN** · mergedAt `2026-08-30T04:35:34Z` · post-merge CI **`33292834920` SUCCESS** · Required Gate **PASS** · source branch `feat/sfia-studio-nora-mw0-eval-harness` **PRESERVED** @ `67a00238…` · prior C5 Type14 anchor PR **#439** @ `70143b6d…` · **Product Completion = COMPLETE / CLOSED BY MORRIS** · **REAL-A = COMPLETE / CONSUMED** at **PASS WITH PARITY GAPS** · **NCC-R08 = CLOSED BY EVIDENCE** · Nora C1→C5 CONTENT VALIDATED / INTEGRATED / POST-MERGE VERIFIED · **ACTIVE CONSTRUCTION PRIORITY = NORA COGNITIVE COMPLETION** · **MW0 Readiness = PASS / CLOSED** · **MW0 Delivery = INTEGRATED ON MAIN / POST-MERGE VERIFIED** · **MW0 EXIT = PROVEN WITH NON-BLOCKING RESERVES** · **MW0-R01** BAR-09 Option↔Recommendation = **NOT_PROVEN / NON-BLOCKING** · **MW0-R02** ChatGPT↔Cursor parity = **NOT_PROVEN / NON-BLOCKING** · **CORR-MW0-05/06/07/08 = CLOSED** · no new REAL after bounded evidence · total MW0 usage-based estimated API cost **$0.0490246** *(≠ invoice spend)* · **REAL-B = QUALIFIED CANDIDATE / DEFERRED / PRESERVED / NOT AUTHORIZED / NOT STARTED** · OD-07 **CONSUMED** (NORA-FIRST) · **OD-03 = BUILD / CONSUMED** · OD-02 **CONSUMED — OPTION B** · OD-05/06/08 **OPEN** · **OD-04 = CONSUMED** · **OD04-I01 = ACTIVE** · Architecture **OPTION C TARGET ADOPTED (OD-04)** · **Agents SDK Runner = TARGET ADOPTED** · **custom Product SQLite Session = TARGET ADOPTED** · **Session/model-input policy = TARGET** · **Responses compaction = CANDIDATE / NOT ADOPTED** · product @openai/agents / Zod dependency integration **INTEGRATED ON MAIN** (PR **#447** / Option C implementation) · runtime Option C implementation migration **INTEGRATED ON MAIN / POST-MERGE VERIFIED** (PR **#447**) · Production model routing **NOT SELECTED** · FinOps/T7 **FREEZE** · C6 **CLOSED / DO NOT REOPEN** · Cognitive Completion **NOT PROVEN** · runtime v3 **NON ADOPTED** · **MW1 = MEMORY B + COMPACTION** · **MW1 Readiness = PASS / VALIDATED BY MORRIS** · **MW1 = COMPLETE / CLOSED BY MORRIS** at proven MW1 scope · **MW1 Delivery = INTEGRATED ON MAIN / POST-MERGE VERIFIED** (PR **#450 MERGED** · head `dd21ab45a3a8ce2090b7a193e76c1d92e0a5cc02` · merge `d09e21485343ce04703fb7a013b7ad84e5ab392c` · tree `2679810b4a8eaee6fcc9460dab43c123baecf327` · post-merge CI **`33480454434` SUCCESS** · Required Gate **PASS**) · **MW1 Final Deterministic Proof = PASS** · **MW1 REAL BOUNDARY = PROVEN** (MW1-REAL-01/CORR-01 · handoff `bcc607ae08bc419188505f91d6bbf7f947660671` · campaign `mw1-real-boundary-corr01-1788253662383` · evidence SHA256 `de149e12621f2f003da5f935d6c467574ea8f70a7079ae8aea16c919054b0678`) · **MW1-S01 = CLOSED / REAL BOUNDARY PROVEN** · **MW1-S02 = CLOSED / REAL BOUNDARY PROVEN** (current governed compaction/model-input boundary) · **MW1-S03 = CLOSED / REAL BOUNDARY PROVEN** (current governed materialization boundary) · **MW0×MW1 REAL integration proven on current F1 path** · **historical REAL-B candidate preserved as provenance** · MW1 REAL-01/CORR-01 executed under later Morris authorization · **MW1 CLOSURE DOCUMENTARY REPOSITORY LIFECYCLE = INTEGRATED ON MAIN / POST-MERGE VERIFIED — PR #451** · head `3785e271d897af5e34e1ce34cdddfc3782ec0e52` · merge `783f7619284f9cd2309d54e7efaa092093c3671e` · tree `831c0fb66bd213afd47f701a8afe3f00da0ea351` · post-merge CI **`33499812659` SUCCESS** · Required Gate **PASS** · **MW2 READINESS = VALIDATED BY MORRIS** · **CORR-MW2-RDY-01/02 SATISFIED** · **OD-02 = CONSUMED — OPTION B** · **MW2 closure/truth-sync repository publication state = RESOLVE FROM CURRENT GIT / PR EVIDENCE** · **MW2 = COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE** · Delivery PR **#456 MERGED** · CORR PR **#457 MERGED** · post-merge CI **`33621406965` SUCCESS** · **MW3 = COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE** · Delivery PR **#459 MERGED** · merge `0220253a2c65957dc802838d71075912402f3afd` · post-merge CI **`33710122738` SUCCESS** · **MW4 Delivery = INTEGRATED ON MAIN / POST-MERGE VERIFIED** (PR **#461** / CI `33753929894`) · MW4 **COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE WITH NON-BLOCKING RESERVES** · **CURRENT PRODUCT CAPABILITY = MW5 — Critical Challenge + Clarification — **COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE WITH RETAINED GOVERNANCE DEVIATION AND NON-BLOCKING RESERVES** — Morris closure decision **CONSUMED** — Delivery **INTEGRATED ON MAIN / POST-MERGE VERIFIED** — PR **#463 MERGED** · pre-merge head `642c502d649a3dad46b66ade95bdea1b5ed8b787` · squash merge `7e2f4c2799be70380362630a1c6734837cc453d9` · tree `b58cea7a8d0ddd173c1467d5a522e26a9c643fe3` · HEAD→MERGE TREE PARITY **PROVEN** · post-merge CI **`33841337376` SUCCESS** · Required Gate **PASS** · delivery branch `delivery/sfia-studio-nora-mw5-critical-challenge-clarification` **PRESERVED** · CORR-MW5-PR-01/02 **CLOSED AT TESTED DETERMINISTIC SCOPE** · CORR-MW5-CLOSURE-C5-CURRENT-TRAJECTORY-01 **CLOSED AT REVIEWED DOCUMENTARY SCOPE** · MW5-R2-REAL-03 PASS at tested scope · D-MW5-QA-SHA-01/02 CLOSED · MW0→MW5 cognitive evidence ACCEPTED BY MORRIS FOR MW5 PURPOSES · H17 FAIL = 141/100 RETAINED HISTORICAL GOVERNANCE DEVIATION · H18 INCONCLUSIVE · ZERO NEW REAL — ≠ campaign governance-compliant · ≠ Cognitive Completion PROVEN · ≠ runtime v3 ADOPTED · MW6 = CLOSURE ACCEPTED BY MORRIS / INTEGRATION PENDING · effective COMPLETE/CLOSED conditioned on exact candidate merge + required CI PASS · repository lifecycle = RESOLVE FROM CURRENT GIT / PR EVIDENCE · NEXT PRODUCT CAPABILITY GATE = GLOBAL MODEL × REASONING CAMPAIGN READINESS / QUALIFICATION — NOT AUTHORIZED / NOT STARTED · ≠ MW6 integrated on main yet · ≠ MW6 COMPLETE/CLOSED on main yet** · **Responses compaction = CANDIDATE / NOT ADOPTED** · **Production model routing = NOT SELECTED** · **Cognitive Completion = NOT PROVEN** · **runtime v3 = NON ADOPTED** · **≠ END-TO-END REAL PROVEN** · **MW1 Delivery anchor = PR #450** · historical **MW1 Delivery authorized earlier** consumed · **Option C implementation = INTEGRATED ON MAIN / POST-MERGE VERIFIED** (PR **#447**) · CORR-OPT-C-01…05 **CLOSED** · Runner/Fake convergence **CLOSED** · Nora legacy generic runtime retirement **CLOSED** · project Git integration **CLOSED / POST-MERGE VERIFIED** · **MW0 Option C regression/parity = PASS WITH NON-BLOCKING RESERVES — DETERMINISTIC ONLY — CHATGPT CRITICAL REVIEW PASS** · evidence Review Handoff L3 `35a2b1ae17085af09e9e59bf9bb96ddf61e02e8c` · proof ceiling **DETERMINISTIC ONLY** · historical R1/R2/R3 RETAINED / NOT RE-RUN / NOT UPGRADED · MW0-R01/R02 remain NOT_PROVEN/NB · RESERVE-OPT-C-02/03 remain OPEN/NB · MW0 remains historically CLOSED · **MW1 architecture = ADAPT-FIRST / NO FA REQUIRED / NO TA CURRENTLY REQUIRED / TA TRIGGER CANDIDATE** · **MW0 OPTION C REGRESSION / PARITY = CLOSED AS CURRENT REGRESSION GATE / PASS WITH NON-BLOCKING RESERVES / DETERMINISTIC ONLY / ChatGPT CRITICAL REVIEW PASS** · evidence Review Handoff L3 `35a2b1ae17085af09e9e59bf9bb96ddf61e02e8c` · **MW1 CLOSURE DOCUMENTARY REPOSITORY LIFECYCLE = INTEGRATED ON MAIN / POST-MERGE VERIFIED — PR #451** · head `3785e271d897af5e34e1ce34cdddfc3782ec0e52` · merge `783f7619284f9cd2309d54e7efaa092093c3671e` · tree `831c0fb66bd213afd47f701a8afe3f00da0ea351` · post-merge CI **`33499812659` SUCCESS** · Required Gate **PASS** · **MW2 READINESS = VALIDATED BY MORRIS** · **CORR-MW2-RDY-01/02 SATISFIED** · **OD-02 = CONSUMED — OPTION B** · **MW2 closure/truth-sync repository publication state = RESOLVE FROM CURRENT GIT / PR EVIDENCE** · **MW2 = COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE** · Delivery PR **#456 MERGED** · CORR PR **#457 MERGED** · post-merge CI **`33621406965` SUCCESS** · **MW3 = COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE** · Delivery PR **#459 MERGED** · merge `0220253a2c65957dc802838d71075912402f3afd` · post-merge CI **`33710122738` SUCCESS** · **MW4 Delivery = INTEGRATED ON MAIN / POST-MERGE VERIFIED** (PR **#461** / CI `33753929894`) · MW4 **COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE WITH NON-BLOCKING RESERVES** · **CURRENT PRODUCT CAPABILITY = MW5 — Critical Challenge + Clarification — **COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE WITH RETAINED GOVERNANCE DEVIATION AND NON-BLOCKING RESERVES** — Morris closure decision **CONSUMED** — Delivery **INTEGRATED ON MAIN / POST-MERGE VERIFIED** — PR **#463 MERGED** · pre-merge head `642c502d649a3dad46b66ade95bdea1b5ed8b787` · squash merge `7e2f4c2799be70380362630a1c6734837cc453d9` · tree `b58cea7a8d0ddd173c1467d5a522e26a9c643fe3` · HEAD→MERGE TREE PARITY **PROVEN** · post-merge CI **`33841337376` SUCCESS** · Required Gate **PASS** · delivery branch `delivery/sfia-studio-nora-mw5-critical-challenge-clarification` **PRESERVED** · CORR-MW5-PR-01/02 **CLOSED AT TESTED DETERMINISTIC SCOPE** · CORR-MW5-CLOSURE-C5-CURRENT-TRAJECTORY-01 **CLOSED AT REVIEWED DOCUMENTARY SCOPE** · MW5-R2-REAL-03 PASS at tested scope · D-MW5-QA-SHA-01/02 CLOSED · MW0→MW5 cognitive evidence ACCEPTED BY MORRIS FOR MW5 PURPOSES · H17 FAIL = 141/100 RETAINED HISTORICAL GOVERNANCE DEVIATION · H18 INCONCLUSIVE · ZERO NEW REAL — ≠ campaign governance-compliant · ≠ Cognitive Completion PROVEN · ≠ runtime v3 ADOPTED · MW6 = CLOSURE ACCEPTED BY MORRIS / INTEGRATION PENDING · effective COMPLETE/CLOSED conditioned on exact candidate merge + required CI PASS · repository lifecycle = RESOLVE FROM CURRENT GIT / PR EVIDENCE · NEXT PRODUCT CAPABILITY GATE = GLOBAL MODEL × REASONING CAMPAIGN READINESS / QUALIFICATION — NOT AUTHORIZED / NOT STARTED · ≠ MW6 integrated on main yet · ≠ MW6 COMPLETE/CLOSED on main yet** · **MW3 = COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE** · **next capability after MW4 delivery integration = MW5 — Critical Challenge + Clarification readiness — NOT AUTHORIZED / NOT STARTED** · **≠** END-TO-END REAL PROVEN · **≠** Cognitive Completion PROVEN · **≠** runtime v3 ADOPTED · **≠** MW5 AUTHORIZED · **≠** Option C REAL parity PROVEN · **≠** ChatGPT↔Cursor parity PROVEN · **≠** READY FOR REAL from D0 alone · **≠** Responses compaction adopted · **≠** HITL as HD · **≠** Trace as Evidence · **≠** TA REQUIRED · **≠** REAL-B AUTHORIZED · **≠** BAR-09 PROVEN · **≠** parity PROVEN · **≠** Cognitive Completion PROVEN · **≠** runtime v3 ADOPTED · *(living Roadmap repository-state summary **≠** replacement for Git/PR as repository lifecycle SoT)* |
+| **Snapshot Git courant** | **RESOLVE FROM REPOSITORY** *(Git SoT ; this living Roadmap **≠** embed permanent `origin/main` HEAD · repository publication/integration status = **RESOLVE FROM GIT / PR evidence**)* · **CURRENT REPOSITORY TRUTH** = **RESOLVE FROM GIT / `origin/main` / PR evidence** · **Last verified Nora Option C implementation anchor** = PR **#447 MERGED** · head `0fdf06a518e2693f6d08fa16ddcc8fc821ce0f6b` · merge `127c6ecf5658e7f3954d94b2cef8269ab9eaf07e` · tree `cf88184cf8f036c671740cffffcc7ecdfb0953d1` · HEAD→MERGE tree parity **PROVEN** · post-merge CI **`33338927956` SUCCESS** · Required Gate **PASS** · source branch `delivery/sfia-studio-nora-mw1-option-c-migration` **PRESERVED** @ `0fdf06a5…` · **historical MW0 integration anchor** = PR **#442 MERGED** · head `67a0023892b7daac7e1e6f5d5f36c611b3275091` · merge `99ae9fe372e60d4263318df265d8f13fbf218de8` · tree `5d7b386cd9fc253ba682d0d55520556c3d737b05` · HEAD→MERGE tree parity **PROVEN** · mergedAt `2026-08-30T04:35:34Z` · post-merge CI **`33292834920` SUCCESS** · Required Gate **PASS** · source branch `feat/sfia-studio-nora-mw0-eval-harness` **PRESERVED** @ `67a00238…` · prior C5 Type14 anchor PR **#439** @ `70143b6d…` · **Product Completion = COMPLETE / CLOSED BY MORRIS** · **REAL-A = COMPLETE / CONSUMED** at **PASS WITH PARITY GAPS** · **NCC-R08 = CLOSED BY EVIDENCE** · Nora C1→C5 CONTENT VALIDATED / INTEGRATED / POST-MERGE VERIFIED · **ACTIVE CONSTRUCTION PRIORITY = NORA COGNITIVE COMPLETION** · **MW0 Readiness = PASS / CLOSED** · **MW0 Delivery = INTEGRATED ON MAIN / POST-MERGE VERIFIED** · **MW0 EXIT = PROVEN WITH NON-BLOCKING RESERVES** · **MW0-R01** BAR-09 Option↔Recommendation = **NOT_PROVEN / NON-BLOCKING** · **MW0-R02** ChatGPT↔Cursor parity = **NOT_PROVEN / NON-BLOCKING** · **CORR-MW0-05/06/07/08 = CLOSED** · no new REAL after bounded evidence · total MW0 usage-based estimated API cost **$0.0490246** *(≠ invoice spend)* · **REAL-B = QUALIFIED CANDIDATE / DEFERRED / PRESERVED / NOT AUTHORIZED / NOT STARTED** · OD-07 **CONSUMED** (NORA-FIRST) · **OD-03 = BUILD / CONSUMED** · OD-02 **CONSUMED — OPTION B** · OD-05/06/08 **OPEN** · **OD-04 = CONSUMED** · **OD04-I01 = ACTIVE** · Architecture **OPTION C TARGET ADOPTED (OD-04)** · **Agents SDK Runner = TARGET ADOPTED** · **custom Product SQLite Session = TARGET ADOPTED** · **Session/model-input policy = TARGET** · **Responses compaction = CANDIDATE / NOT ADOPTED** · product @openai/agents / Zod dependency integration **INTEGRATED ON MAIN** (PR **#447** / Option C implementation) · runtime Option C implementation migration **INTEGRATED ON MAIN / POST-MERGE VERIFIED** (PR **#447**) · Production model routing **NOT SELECTED** · FinOps/T7 **FREEZE** · C6 **CLOSED / DO NOT REOPEN** · Cognitive Completion **NOT PROVEN** · runtime v3 **NON ADOPTED** · **MW1 = MEMORY B + COMPACTION** · **MW1 Readiness = PASS / VALIDATED BY MORRIS** · **MW1 = COMPLETE / CLOSED BY MORRIS** at proven MW1 scope · **MW1 Delivery = INTEGRATED ON MAIN / POST-MERGE VERIFIED** (PR **#450 MERGED** · head `dd21ab45a3a8ce2090b7a193e76c1d92e0a5cc02` · merge `d09e21485343ce04703fb7a013b7ad84e5ab392c` · tree `2679810b4a8eaee6fcc9460dab43c123baecf327` · post-merge CI **`33480454434` SUCCESS** · Required Gate **PASS**) · **MW1 Final Deterministic Proof = PASS** · **MW1 REAL BOUNDARY = PROVEN** (MW1-REAL-01/CORR-01 · handoff `bcc607ae08bc419188505f91d6bbf7f947660671` · campaign `mw1-real-boundary-corr01-1788253662383` · evidence SHA256 `de149e12621f2f003da5f935d6c467574ea8f70a7079ae8aea16c919054b0678`) · **MW1-S01 = CLOSED / REAL BOUNDARY PROVEN** · **MW1-S02 = CLOSED / REAL BOUNDARY PROVEN** (current governed compaction/model-input boundary) · **MW1-S03 = CLOSED / REAL BOUNDARY PROVEN** (current governed materialization boundary) · **MW0×MW1 REAL integration proven on current F1 path** · **historical REAL-B candidate preserved as provenance** · MW1 REAL-01/CORR-01 executed under later Morris authorization · **MW1 CLOSURE DOCUMENTARY REPOSITORY LIFECYCLE = INTEGRATED ON MAIN / POST-MERGE VERIFIED — PR #451** · head `3785e271d897af5e34e1ce34cdddfc3782ec0e52` · merge `783f7619284f9cd2309d54e7efaa092093c3671e` · tree `831c0fb66bd213afd47f701a8afe3f00da0ea351` · post-merge CI **`33499812659` SUCCESS** · Required Gate **PASS** · **MW2 READINESS = VALIDATED BY MORRIS** · **CORR-MW2-RDY-01/02 SATISFIED** · **OD-02 = CONSUMED — OPTION B** · **MW2 closure/truth-sync repository publication state = RESOLVE FROM CURRENT GIT / PR EVIDENCE** · **MW2 = COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE** · Delivery PR **#456 MERGED** · CORR PR **#457 MERGED** · post-merge CI **`33621406965` SUCCESS** · **MW3 = COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE** · Delivery PR **#459 MERGED** · merge `0220253a2c65957dc802838d71075912402f3afd` · post-merge CI **`33710122738` SUCCESS** · **MW4 Delivery = INTEGRATED ON MAIN / POST-MERGE VERIFIED** (PR **#461** / CI `33753929894`) · MW4 **COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE WITH NON-BLOCKING RESERVES** · **CURRENT PRODUCT CAPABILITY = MW5 — Critical Challenge + Clarification — **COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE WITH RETAINED GOVERNANCE DEVIATION AND NON-BLOCKING RESERVES** — Morris closure decision **CONSUMED** — Delivery **INTEGRATED ON MAIN / POST-MERGE VERIFIED** — PR **#463 MERGED** · pre-merge head `642c502d649a3dad46b66ade95bdea1b5ed8b787` · squash merge `7e2f4c2799be70380362630a1c6734837cc453d9` · tree `b58cea7a8d0ddd173c1467d5a522e26a9c643fe3` · HEAD→MERGE TREE PARITY **PROVEN** · post-merge CI **`33841337376` SUCCESS** · Required Gate **PASS** · delivery branch `delivery/sfia-studio-nora-mw5-critical-challenge-clarification` **PRESERVED** · CORR-MW5-PR-01/02 **CLOSED AT TESTED DETERMINISTIC SCOPE** · CORR-MW5-CLOSURE-C5-CURRENT-TRAJECTORY-01 **CLOSED AT REVIEWED DOCUMENTARY SCOPE** · MW5-R2-REAL-03 PASS at tested scope · D-MW5-QA-SHA-01/02 CLOSED · MW0→MW5 cognitive evidence ACCEPTED BY MORRIS FOR MW5 PURPOSES · H17 FAIL = 141/100 RETAINED HISTORICAL GOVERNANCE DEVIATION · H18 INCONCLUSIVE · ZERO NEW REAL — ≠ campaign governance-compliant · ≠ Cognitive Completion PROVEN · ≠ runtime v3 ADOPTED · MW6 = COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE — INTEGRATED ON MAIN / POST-MERGE VERIFIED (PR #465 / `d3fee38b270d805144e621804b96ef1e5de3e208` / CI `33958548479`) · Stage A deterministic harness = INTEGRATED ON MAIN / POST-MERGE VERIFIED (PR #467 / `1dd5d67ad942c448becd637f4c2e55883d16ffca` / CI `33981467237`) · integrated main still carries historical v2 envelope 72/405/429 until Option C integration · LOCAL Option C candidate = 78/438/464 · NEXT PRODUCT CAPABILITY GATE = ChatGPT Critical Review of Option C → Morris technical+financial+Git GO · Stage A REAL NOT AUTHORIZED · ≠ Stage A REAL AUTHORIZED · ≠ MW6 END-TO-END REAL global · ≠ Cognitive Completion PROVEN · ≠ runtime v3 ADOPTED · ≠ production routing SELECTED** · **Responses compaction = CANDIDATE / NOT ADOPTED** · **Production model routing = NOT SELECTED** · **Cognitive Completion = NOT PROVEN** · **runtime v3 = NON ADOPTED** · **≠ END-TO-END REAL PROVEN** · **MW1 Delivery anchor = PR #450** · historical **MW1 Delivery authorized earlier** consumed · **Option C implementation = INTEGRATED ON MAIN / POST-MERGE VERIFIED** (PR **#447**) · CORR-OPT-C-01…05 **CLOSED** · Runner/Fake convergence **CLOSED** · Nora legacy generic runtime retirement **CLOSED** · project Git integration **CLOSED / POST-MERGE VERIFIED** · **MW0 Option C regression/parity = PASS WITH NON-BLOCKING RESERVES — DETERMINISTIC ONLY — CHATGPT CRITICAL REVIEW PASS** · evidence Review Handoff L3 `35a2b1ae17085af09e9e59bf9bb96ddf61e02e8c` · proof ceiling **DETERMINISTIC ONLY** · historical R1/R2/R3 RETAINED / NOT RE-RUN / NOT UPGRADED · MW0-R01/R02 remain NOT_PROVEN/NB · RESERVE-OPT-C-02/03 remain OPEN/NB · MW0 remains historically CLOSED · **MW1 architecture = ADAPT-FIRST / NO FA REQUIRED / NO TA CURRENTLY REQUIRED / TA TRIGGER CANDIDATE** · **MW0 OPTION C REGRESSION / PARITY = CLOSED AS CURRENT REGRESSION GATE / PASS WITH NON-BLOCKING RESERVES / DETERMINISTIC ONLY / ChatGPT CRITICAL REVIEW PASS** · evidence Review Handoff L3 `35a2b1ae17085af09e9e59bf9bb96ddf61e02e8c` · **MW1 CLOSURE DOCUMENTARY REPOSITORY LIFECYCLE = INTEGRATED ON MAIN / POST-MERGE VERIFIED — PR #451** · head `3785e271d897af5e34e1ce34cdddfc3782ec0e52` · merge `783f7619284f9cd2309d54e7efaa092093c3671e` · tree `831c0fb66bd213afd47f701a8afe3f00da0ea351` · post-merge CI **`33499812659` SUCCESS** · Required Gate **PASS** · **MW2 READINESS = VALIDATED BY MORRIS** · **CORR-MW2-RDY-01/02 SATISFIED** · **OD-02 = CONSUMED — OPTION B** · **MW2 closure/truth-sync repository publication state = RESOLVE FROM CURRENT GIT / PR EVIDENCE** · **MW2 = COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE** · Delivery PR **#456 MERGED** · CORR PR **#457 MERGED** · post-merge CI **`33621406965` SUCCESS** · **MW3 = COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE** · Delivery PR **#459 MERGED** · merge `0220253a2c65957dc802838d71075912402f3afd` · post-merge CI **`33710122738` SUCCESS** · **MW4 Delivery = INTEGRATED ON MAIN / POST-MERGE VERIFIED** (PR **#461** / CI `33753929894`) · MW4 **COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE WITH NON-BLOCKING RESERVES** · **CURRENT PRODUCT CAPABILITY = MW5 — Critical Challenge + Clarification — **COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE WITH RETAINED GOVERNANCE DEVIATION AND NON-BLOCKING RESERVES** — Morris closure decision **CONSUMED** — Delivery **INTEGRATED ON MAIN / POST-MERGE VERIFIED** — PR **#463 MERGED** · pre-merge head `642c502d649a3dad46b66ade95bdea1b5ed8b787` · squash merge `7e2f4c2799be70380362630a1c6734837cc453d9` · tree `b58cea7a8d0ddd173c1467d5a522e26a9c643fe3` · HEAD→MERGE TREE PARITY **PROVEN** · post-merge CI **`33841337376` SUCCESS** · Required Gate **PASS** · delivery branch `delivery/sfia-studio-nora-mw5-critical-challenge-clarification` **PRESERVED** · CORR-MW5-PR-01/02 **CLOSED AT TESTED DETERMINISTIC SCOPE** · CORR-MW5-CLOSURE-C5-CURRENT-TRAJECTORY-01 **CLOSED AT REVIEWED DOCUMENTARY SCOPE** · MW5-R2-REAL-03 PASS at tested scope · D-MW5-QA-SHA-01/02 CLOSED · MW0→MW5 cognitive evidence ACCEPTED BY MORRIS FOR MW5 PURPOSES · H17 FAIL = 141/100 RETAINED HISTORICAL GOVERNANCE DEVIATION · H18 INCONCLUSIVE · ZERO NEW REAL — ≠ campaign governance-compliant · ≠ Cognitive Completion PROVEN · ≠ runtime v3 ADOPTED · MW6 = COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE — INTEGRATED ON MAIN / POST-MERGE VERIFIED (PR #465 / `d3fee38b270d805144e621804b96ef1e5de3e208` / CI `33958548479`) · Stage A deterministic harness = INTEGRATED ON MAIN / POST-MERGE VERIFIED (PR #467 / `1dd5d67ad942c448becd637f4c2e55883d16ffca` / CI `33981467237`) · integrated main still carries historical v2 envelope 72/405/429 until Option C integration · LOCAL Option C candidate = 78/438/464 · NEXT PRODUCT CAPABILITY GATE = ChatGPT Critical Review of Option C → Morris technical+financial+Git GO · Stage A REAL NOT AUTHORIZED · ≠ Stage A REAL AUTHORIZED · ≠ MW6 END-TO-END REAL global · ≠ Cognitive Completion PROVEN · ≠ runtime v3 ADOPTED · ≠ production routing SELECTED** · **MW3 = COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE** · **next capability after MW4 delivery integration = MW5 — Critical Challenge + Clarification readiness — NOT AUTHORIZED / NOT STARTED** · **≠** END-TO-END REAL PROVEN · **≠** Cognitive Completion PROVEN · **≠** runtime v3 ADOPTED · **≠** MW5 AUTHORIZED · **≠** Option C REAL parity PROVEN · **≠** ChatGPT↔Cursor parity PROVEN · **≠** READY FOR REAL from D0 alone · **≠** Responses compaction adopted · **≠** HITL as HD · **≠** Trace as Evidence · **≠** TA REQUIRED · **≠** REAL-B AUTHORIZED · **≠** BAR-09 PROVEN · **≠** parity PROVEN · **≠** Cognitive Completion PROVEN · **≠** runtime v3 ADOPTED · *(living Roadmap repository-state summary **≠** replacement for Git/PR as repository lifecycle SoT)* |
 | **Timestamp maintenance historique NORA-MW5-POST-MERGE-CLOSURE-01 (pre-MW5 closure decision consumption)** | 2026-09-04 07:57:56 CEST — **NORA MW5 POST-MERGE / CLOSURE READINESS TRUTH-SYNC** · Cycle **14** · DOC · CRITICAL · GO MORRIS — NORA-MW5-POST-MERGE-CLOSURE-01 **CONSUMED** · PR **#463 MERGED** · pre-merge head `642c502d649a3dad46b66ade95bdea1b5ed8b787` · squash merge `7e2f4c2799be70380362630a1c6734837cc453d9` · parent `9b45f0d7700a3127fa28c13f37ffae40432ae05c` · tree `b58cea7a8d0ddd173c1467d5a522e26a9c643fe3` · HEAD→MERGE TREE PARITY **PROVEN** · post-merge CI **`33841337376` SUCCESS** · Required Gate **PASS** · delivery branch `delivery/sfia-studio-nora-mw5-critical-challenge-clarification` **PRESERVED** · MW5 Delivery = **INTEGRATED ON MAIN / POST-MERGE VERIFIED** · MW5 = **POST-MERGE VERIFIED / CLOSURE READINESS CANDIDATE** · MW5 COMPLETE = **NOT DECIDED** · MW5 CLOSED BY MORRIS = **NO / NOT YET DECIDED** · CORR-MW5-PR-01/02 CLOSED at tested deterministic scope · MW5-R2-REAL-03 PASS at tested scope · SHA-01/02 CLOSED · MW0→MW5 cognitive evidence ACCEPTED BY MORRIS FOR MW5 PURPOSES · H17 FAIL — RETAINED HISTORICAL GOVERNANCE DEVIATION (141/100 · delta +41) · H18 INCONCLUSIVE · ZERO NEW REAL · Cognitive Completion **NOT PROVEN** · runtime v3 **NON ADOPTED** · Production model routing **NOT SELECTED** · Responses Compaction **CANDIDATE / NOT ADOPTED** · **NEXT PRODUCT CAPABILITY AFTER MW5 CLOSURE = MW6 READINESS / REQUALIFICATION — NOT AUTHORIZED / NOT STARTED** · truth-sync = **LOCAL CANDIDATE** · project commit/push/PR = **NONE this cycle** · **≠** MW5 COMPLETE · **≠** CLOSED BY MORRIS · **≠** MW6 AUTHORIZED · **≠** campaign governance-compliant · **≠** H17 PASS |
 | **Timestamp maintenance historique NORA-MW5-INTEGRATION-LIFECYCLE-01 (pre-MW5 post-merge closure)** | 2026-09-04 01:09:24 CEST — **NORA MW5 INTEGRATION / CLOSURE READINESS TRUTH-SYNC** · Cycle **13** · INC · CRITICAL · GO MORRIS — NORA-MW5-INTEGRATION-LIFECYCLE-01 **CONSUMED** · MORRIS DECISION — ACCEPT NORA-MW0-MW5-BUSINESS-INTEGRATED-REAL-01 EVIDENCE FOR MW5 INTEGRATION PURPOSES DESPITE CONFIRMED H17 GOVERNANCE NON-CONFORMITY **CONSUMED / CAPITALIZED** · H17 FAIL — RETAINED HISTORICAL GOVERNANCE DEVIATION (TOTAL_REAL_CALLS_UNDER_MORRIS_GO = 141 / AUTHORIZED = 100 / delta = +41) · H18 INCONCLUSIVE (measured ≈ 0.1474548 USD · 68 native F1 unmetered · conservative hard-cap upper bound NOT PROVEN) · MW5 Delivery = **LOCAL / PENDING PROJECT GIT INTEGRATION / PR CANDIDATE / NOT INTEGRATED / COMPLETE NOT DECIDED** · proof: DLV-01→DLV-05 deterministic · MW5-R2-REAL-03 PASS at tested scope · D-MW5-QA-SHA-01/02 CLOSED · NORA-MW0-MW5-BUSINESS-INTEGRATED-REAL-01 cognitive PASS CANDIDATE at tested scope · burn handoff `c3cc6dda…` · MW4 remains COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE WITH NON-BLOCKING RESERVES · Cognitive Completion **NOT PROVEN** · runtime v3 **NON ADOPTED** · Production model routing **NOT SELECTED** · Responses Compaction **CANDIDATE / NOT ADOPTED** · MW6 **NOT AUTHORIZED** · ZERO NEW REAL · **≠** MW5 COMPLETE · **≠** CLOSED BY MORRIS · **≠** INTEGRATED ON MAIN · **≠** POST-MERGE VERIFIED · **≠** campaign governance-compliant · **≠** H17 PASS · merge remains distinct Morris gate |
 | **Timestamp maintenance historique NORA-MW4-CLOSURE-TRUTH-SYNC-01 (pre-MW5 integration lifecycle)** | 2026-09-03 14:56:05 CEST — **NORA MW4 CLOSURE / TRUTH-SYNC** · Morris closure decision **CONSUMED** · **MORRIS DECISION — MW4 COMPLETE / CLOSED AT PROVEN SCOPE WITH NON-BLOCKING RESERVES** · Cycle **13** · DOC · CRITICAL · MW4 = **COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE WITH NON-BLOCKING RESERVES** · MW4 Delivery = **INTEGRATED ON MAIN / POST-MERGE VERIFIED** · PR **#461 MERGED** · head `fa58b210b7b683353f04c66b5e49ab0914e885ab` · squash merge `6b86f9c384d6d6d19a81ecb9bfb3a42acfbfe6a5` · tree `d857baa2a1cd8651c7c11f0233f9f6a92976cbda` · post-merge CI **`33753929894` SUCCESS** · Required Gate **PASS** · same-turn MW4-S03 product proof blob `a23f57e19726f53df5e00c7303102b97e10709cc` present on main · delivery branch `delivery/sfia-studio-nora-mw4-grounding-durability` **PRESERVED** @ `fa58b210…` · MW0×MW1×MW2×MW3×MW4 Integrated REAL **KEEP ACCEPTED AT TESTED SCOPE** · MW4 bounded REAL **KEEP ACCEPTED AT TESTED SCOPE** · R-MW4-PR-CI-01 **CLOSED** · R-MW4-PR-CI-02 **CLOSED AT PROJECT-GIT/PR-CI CORRECTION SCOPE** · R-MW4-PR-CI-02-LOCAL-TIMING **OPEN / NON-BLOCKING** · intra-turn partial→full **OPEN / NON-BLOCKING / FAIL-CLOSED** · RA-06/RA-07/MW2-R01/R02/R03/R-MW4-REAL-02 **CARRY** · **CURRENT PRODUCT CAPABILITY = MW5 — Critical Challenge + Clarification — **COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE WITH RETAINED GOVERNANCE DEVIATION AND NON-BLOCKING RESERVES** — Morris closure decision **CONSUMED** — Delivery **INTEGRATED ON MAIN / POST-MERGE VERIFIED** — PR **#463 MERGED** · pre-merge head `642c502d649a3dad46b66ade95bdea1b5ed8b787` · squash merge `7e2f4c2799be70380362630a1c6734837cc453d9` · tree `b58cea7a8d0ddd173c1467d5a522e26a9c643fe3` · HEAD→MERGE TREE PARITY **PROVEN** · post-merge CI **`33841337376` SUCCESS** · Required Gate **PASS** · delivery branch `delivery/sfia-studio-nora-mw5-critical-challenge-clarification` **PRESERVED** · CORR-MW5-PR-01/02 **CLOSED AT TESTED DETERMINISTIC SCOPE** · CORR-MW5-CLOSURE-C5-CURRENT-TRAJECTORY-01 **CLOSED AT REVIEWED DOCUMENTARY SCOPE** · MW5-R2-REAL-03 PASS at tested scope · D-MW5-QA-SHA-01/02 CLOSED · MW0→MW5 cognitive evidence ACCEPTED BY MORRIS FOR MW5 PURPOSES · H17 FAIL = 141/100 RETAINED HISTORICAL GOVERNANCE DEVIATION · H18 INCONCLUSIVE · ZERO NEW REAL — ≠ campaign governance-compliant · ≠ Cognitive Completion PROVEN · ≠ runtime v3 ADOPTED · MW6 = CLOSURE ACCEPTED BY MORRIS / INTEGRATION PENDING · effective COMPLETE/CLOSED conditioned on exact candidate merge + required CI PASS · repository lifecycle = RESOLVE FROM CURRENT GIT / PR EVIDENCE · NEXT PRODUCT CAPABILITY GATE = GLOBAL MODEL × REASONING CAMPAIGN READINESS / QUALIFICATION — NOT AUTHORIZED / NOT STARTED · ≠ MW6 integrated on main yet · ≠ MW6 COMPLETE/CLOSED on main yet** · Cognitive Completion **NOT PROVEN** · runtime v3 **NON ADOPTED** · Production model routing **NOT SELECTED** · Responses Compaction **CANDIDATE / NOT ADOPTED** · closure documentation repository lifecycle = **PENDING PR INTEGRATION** · **ZERO REAL** |
@@ -93,7 +95,7 @@
 | **Product Completion Functional Architecture (Cycle 3)** | **VALIDATED BY MORRIS — INTEGRATED ON MAIN** · path : `projects/sfia-studio/product-completion/03-product-completion-architecture-fonctionnelle.md` · PR **#378 MERGED** · head `1018aa79d1d8ebb8783d11ce25ff08036764e87e` · merge `18b89ec9d6f1a91f8ff49df9c895299b6676b572` · PR CI **#240 SUCCESS** · post-merge CI **#241 SUCCESS** · post-merge sync PR **#379 MERGED** · sync head `0aa644d935b5df1ba7f4c2278fd63320555b9f6a` · sync merge `134f4105fea09543a100749e74ca5e3be32bfda2` · PR CI **#242 SUCCESS** · post-merge CI **#243 SUCCESS** · final closure PR **#380 MERGED** · head `53aeceea…` · merge `14329c60…` · post-merge CI **#245 SUCCESS** · **POST-MERGE COHERENCE COMPLETE** · PM-R01 **CLOSED** · PM-R02 **CLOSED** · FC-01…FC-15 **APPROVED** · OA-aligned Option A + thin orchestration C **APPROVED** · no parallel architecture · targeted durability technical delta **QUALIFIED** then **partially realized via W1** · FA-R01…FA-R12 **CLOSED** · C1 §H/J.1 + C2 A→W preserved · H-01…H-04 **CARRY** · Confirmation **runtime** durability **IMPLEMENTED AT W1 SCOPE** (requested ephemeral / granted+ durable · PR #395) · ProjectTrajectory durability **IMPLEMENTED AT W1 SCOPE** (PR #395) · **downstream gaps remain** (HD/replan liaison complète · Recovery E2E · taxonomie épistémique complète → W2/W3) · UAT **OPEN** · SC-02 **NON-BLOCKING** · **RESERVE-GOV-EC-ORDER CLOSED** · Pre-M6 debt **CARRY** · source branch cleanup **NOT PERFORMED** · **≠** Architecture technique fully exhausted · **≠** Product Completion terminée · **≠** REAL |
 | **RESERVE-GOV-EC-ORDER** | **CLOSED ON MAIN** via PR **#381** — Build Doctrine execution order aligned with validated C2 / Functional Architecture : HumanDecision → EC Prepare → EC Inspect → Confirmation if required → effective authority → Execute · Confirmation **runtime** durability **IMPLEMENTED AT W1 SCOPE** (PR #395) · remaining continuity/authority gaps stay **DOWNSTREAM** · ≠ reserve reopen |
 | **Morris trajectory decision (post-FA requalification)** | **HISTORICAL** — Governance EC Order Sync → C6 → Next-Cycle Requalification *(superseded for forward path by CKC-first)* |
-| **Morris trajectory decision (post-C6 / CKC)** | **SUPERSEDED FOR FORWARD PATH** — CKC-first + G2 + W1 + W2 + W3-A/B/C/D + **W4** + **Product Completion COMPLETE / CLOSED BY MORRIS** + **REAL-A COMPLETE / CONSUMED (PR #428)** + Nora C1→C4 + Type14 NCC-R08 CLOSED + **PR #438 MERGED** completed · **NOW:** **CURRENT REPOSITORY TRUTH** = **RESOLVE FROM GIT / `origin/main` / PR evidence** · **Last verified Nora/MW0 integration anchor** = PR **#442 MERGED** · head `67a00238…` · merge `99ae9fe372e60d4263318df265d8f13fbf218de8` · tree `5d7b386c…` · post-merge CI **`33292834920` SUCCESS** · Required Gate **PASS** · prior C5 anchor PR **#439** @ `70143b6d…` · **Product Completion = COMPLETE / CLOSED BY MORRIS** · **REAL-A = COMPLETE / CONSUMED** · **NCC-R08 = CLOSED BY EVIDENCE** · **ACTIVE CONSTRUCTION PRIORITY = NORA COGNITIVE COMPLETION** · **NORA C5 = CONTENT VALIDATED BY MORRIS / INTEGRATED ON MAIN / POST-MERGE VERIFIED** · **REAL-B = QUALIFIED CANDIDATE / DEFERRED / NOT AUTHORIZED / NOT STARTED** · **OD-07 CONSUMED** · **OD-03 = BUILD / CONSUMED** · OD-02 **CONSUMED — OPTION B** · OD-05/06/08 **OPEN** · **OD-04 = CONSUMED** · C6 **CLOSED / DO NOT REOPEN** · FinOps/T7 **FREEZE** · runtime v3 **NON ADOPTED** · Architecture **OPTION C TARGET ADOPTED** · MW1 Delivery **AUTHORIZED EARLIER** · **MW0 Readiness = PASS / CLOSED** · **MW0 Delivery = INTEGRATED ON MAIN / POST-MERGE VERIFIED** · **MW0 EXIT = PROVEN WITH NON-BLOCKING RESERVES** · MW0-R01/R02 **NOT_PROVEN / NON-BLOCKING** · CORR-MW0-05/06/07/08 **CLOSED** · **MW1 = MEMORY B + COMPACTION** · **MW1 Readiness = PASS / VALIDATED BY MORRIS** · **MW1 = COMPLETE / CLOSED BY MORRIS** at proven MW1 scope · **MW1 Delivery = INTEGRATED ON MAIN / POST-MERGE VERIFIED** (PR **#450 MERGED** · head `dd21ab45a3a8ce2090b7a193e76c1d92e0a5cc02` · merge `d09e21485343ce04703fb7a013b7ad84e5ab392c` · tree `2679810b4a8eaee6fcc9460dab43c123baecf327` · post-merge CI **`33480454434` SUCCESS** · Required Gate **PASS**) · **MW1 Final Deterministic Proof = PASS** · **MW1 REAL BOUNDARY = PROVEN** (MW1-REAL-01/CORR-01 · handoff `bcc607ae08bc419188505f91d6bbf7f947660671` · campaign `mw1-real-boundary-corr01-1788253662383` · evidence SHA256 `de149e12621f2f003da5f935d6c467574ea8f70a7079ae8aea16c919054b0678`) · **MW1-S01 = CLOSED / REAL BOUNDARY PROVEN** · **MW1-S02 = CLOSED / REAL BOUNDARY PROVEN** (current governed compaction/model-input boundary) · **MW1-S03 = CLOSED / REAL BOUNDARY PROVEN** (current governed materialization boundary) · **MW0×MW1 REAL integration proven on current F1 path** · **historical REAL-B candidate preserved as provenance** · MW1 REAL-01/CORR-01 executed under later Morris authorization · **MW1 CLOSURE DOCUMENTARY REPOSITORY LIFECYCLE = INTEGRATED ON MAIN / POST-MERGE VERIFIED — PR #451** · head `3785e271d897af5e34e1ce34cdddfc3782ec0e52` · merge `783f7619284f9cd2309d54e7efaa092093c3671e` · tree `831c0fb66bd213afd47f701a8afe3f00da0ea351` · post-merge CI **`33499812659` SUCCESS** · Required Gate **PASS** · **MW2 READINESS = VALIDATED BY MORRIS** · **CORR-MW2-RDY-01/02 SATISFIED** · **OD-02 = CONSUMED — OPTION B** · **MW2 closure/truth-sync repository publication state = RESOLVE FROM CURRENT GIT / PR EVIDENCE** · **MW2 = COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE** · Delivery PR **#456 MERGED** · CORR PR **#457 MERGED** · post-merge CI **`33621406965` SUCCESS** · **MW3 = COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE** · Delivery PR **#459 MERGED** · merge `0220253a2c65957dc802838d71075912402f3afd` · post-merge CI **`33710122738` SUCCESS** · **MW4 Delivery = INTEGRATED ON MAIN / POST-MERGE VERIFIED** (PR **#461** / CI `33753929894`) · MW4 **COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE WITH NON-BLOCKING RESERVES** · **CURRENT PRODUCT CAPABILITY = MW5 — Critical Challenge + Clarification — **COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE WITH RETAINED GOVERNANCE DEVIATION AND NON-BLOCKING RESERVES** — Morris closure decision **CONSUMED** — Delivery **INTEGRATED ON MAIN / POST-MERGE VERIFIED** — PR **#463 MERGED** · pre-merge head `642c502d649a3dad46b66ade95bdea1b5ed8b787` · squash merge `7e2f4c2799be70380362630a1c6734837cc453d9` · tree `b58cea7a8d0ddd173c1467d5a522e26a9c643fe3` · HEAD→MERGE TREE PARITY **PROVEN** · post-merge CI **`33841337376` SUCCESS** · Required Gate **PASS** · delivery branch `delivery/sfia-studio-nora-mw5-critical-challenge-clarification` **PRESERVED** · CORR-MW5-PR-01/02 **CLOSED AT TESTED DETERMINISTIC SCOPE** · CORR-MW5-CLOSURE-C5-CURRENT-TRAJECTORY-01 **CLOSED AT REVIEWED DOCUMENTARY SCOPE** · MW5-R2-REAL-03 PASS at tested scope · D-MW5-QA-SHA-01/02 CLOSED · MW0→MW5 cognitive evidence ACCEPTED BY MORRIS FOR MW5 PURPOSES · H17 FAIL = 141/100 RETAINED HISTORICAL GOVERNANCE DEVIATION · H18 INCONCLUSIVE · ZERO NEW REAL — ≠ campaign governance-compliant · ≠ Cognitive Completion PROVEN · ≠ runtime v3 ADOPTED · MW6 = CLOSURE ACCEPTED BY MORRIS / INTEGRATION PENDING · effective COMPLETE/CLOSED conditioned on exact candidate merge + required CI PASS · repository lifecycle = RESOLVE FROM CURRENT GIT / PR EVIDENCE · NEXT PRODUCT CAPABILITY GATE = GLOBAL MODEL × REASONING CAMPAIGN READINESS / QUALIFICATION — NOT AUTHORIZED / NOT STARTED · ≠ MW6 integrated on main yet · ≠ MW6 COMPLETE/CLOSED on main yet** · **Responses compaction = CANDIDATE / NOT ADOPTED** · **Production model routing = NOT SELECTED** · **Cognitive Completion = NOT PROVEN** · **runtime v3 = NON ADOPTED** · **≠ END-TO-END REAL PROVEN** · Option C **#447** · CORR-OPT-C / Runner-Fake / legacy retirement / project Git integration **CLOSED** · **MW0 Option C regression/parity = PASS WITH NON-BLOCKING RESERVES — DETERMINISTIC ONLY — CHATGPT CRITICAL REVIEW PASS** · evidence Review Handoff L3 `35a2b1ae17085af09e9e59bf9bb96ddf61e02e8c` · DETERMINISTIC ONLY · R1/R2/R3 NOT RE-RUN · MW0-R01/R02 NOT_PROVEN/NB · RESERVE-OPT-C-02/03 OPEN/NB · MW0 historically CLOSED · **OD-03 = BUILD / CONSUMED** · **ADAPT-FIRST** · **NO FA REQUIRED** · **NO TA CURRENTLY REQUIRED** · **TA TRIGGER CANDIDATE** · Architecture **OPTION C TARGET ADOPTED (OD-04)** · Agents SDK Runner **TARGET ADOPTED** · Product SQLite Session **TARGET ADOPTED** · Session/model-input policy **TARGET** · Responses compaction **CANDIDATE / NOT ADOPTED** · product @openai/agents / Zod dependency integration **INTEGRATED ON MAIN** (PR **#447**) · runtime Option C implementation **INTEGRATED ON MAIN / POST-MERGE VERIFIED** (PR **#447**) · **MW0 OPTION C REGRESSION / PARITY = CLOSED AS CURRENT REGRESSION GATE / PASS WITH NON-BLOCKING RESERVES / DETERMINISTIC ONLY / ChatGPT CRITICAL REVIEW PASS** · evidence Review Handoff L3 `35a2b1ae17085af09e9e59bf9bb96ddf61e02e8c` · **MW1 CLOSURE DOCUMENTARY REPOSITORY LIFECYCLE = INTEGRATED ON MAIN / POST-MERGE VERIFIED — PR #451** · head `3785e271d897af5e34e1ce34cdddfc3782ec0e52` · merge `783f7619284f9cd2309d54e7efaa092093c3671e` · tree `831c0fb66bd213afd47f701a8afe3f00da0ea351` · post-merge CI **`33499812659` SUCCESS** · Required Gate **PASS** · **MW2 READINESS = VALIDATED BY MORRIS** · **CORR-MW2-RDY-01/02 SATISFIED** · **OD-02 = CONSUMED — OPTION B** · **MW2 closure/truth-sync repository publication state = RESOLVE FROM CURRENT GIT / PR EVIDENCE** · **MW2 = COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE** · Delivery PR **#456 MERGED** · CORR PR **#457 MERGED** · post-merge CI **`33621406965` SUCCESS** · **MW3 = COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE** · Delivery PR **#459 MERGED** · merge `0220253a2c65957dc802838d71075912402f3afd` · post-merge CI **`33710122738` SUCCESS** · **MW4 Delivery INTEGRATED ON MAIN / POST-MERGE VERIFIED** · MW4 **COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE WITH NON-BLOCKING RESERVES** · **CURRENT PRODUCT CAPABILITY = MW5 — Critical Challenge + Clarification — **COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE WITH RETAINED GOVERNANCE DEVIATION AND NON-BLOCKING RESERVES** — Morris closure decision **CONSUMED** — Delivery **INTEGRATED ON MAIN / POST-MERGE VERIFIED** — PR **#463 MERGED** · pre-merge head `642c502d649a3dad46b66ade95bdea1b5ed8b787` · squash merge `7e2f4c2799be70380362630a1c6734837cc453d9` · tree `b58cea7a8d0ddd173c1467d5a522e26a9c643fe3` · HEAD→MERGE TREE PARITY **PROVEN** · post-merge CI **`33841337376` SUCCESS** · Required Gate **PASS** · delivery branch `delivery/sfia-studio-nora-mw5-critical-challenge-clarification` **PRESERVED** · CORR-MW5-PR-01/02 **CLOSED AT TESTED DETERMINISTIC SCOPE** · CORR-MW5-CLOSURE-C5-CURRENT-TRAJECTORY-01 **CLOSED AT REVIEWED DOCUMENTARY SCOPE** · MW5-R2-REAL-03 PASS at tested scope · D-MW5-QA-SHA-01/02 CLOSED · MW0→MW5 cognitive evidence ACCEPTED BY MORRIS FOR MW5 PURPOSES · H17 FAIL = 141/100 RETAINED HISTORICAL GOVERNANCE DEVIATION · H18 INCONCLUSIVE · ZERO NEW REAL — ≠ campaign governance-compliant · ≠ Cognitive Completion PROVEN · ≠ runtime v3 ADOPTED · MW6 = CLOSURE ACCEPTED BY MORRIS / INTEGRATION PENDING · effective COMPLETE/CLOSED conditioned on exact candidate merge + required CI PASS · repository lifecycle = RESOLVE FROM CURRENT GIT / PR EVIDENCE · NEXT PRODUCT CAPABILITY GATE = GLOBAL MODEL × REASONING CAMPAIGN READINESS / QUALIFICATION — NOT AUTHORIZED / NOT STARTED · ≠ MW6 integrated on main yet · ≠ MW6 COMPLETE/CLOSED on main yet** · next capability after MW4 delivery = **MW5 — Critical Challenge + Clarification readiness — NOT AUTHORIZED / NOT STARTED** · **≠** END-TO-END REAL PROVEN · **≠** Cognitive Completion PROVEN · **≠** runtime v3 ADOPTED · next capability after MW4 delivery = **MW5 — Critical Challenge + Clarification readiness — NOT AUTHORIZED / NOT STARTED** · **≠** REAL-B AUTHORIZED · **≠** REAL-B STARTED · **≠** REAL-B CLOSED/CANCELLED · **≠** MW1 complete · **≠** TA REQUIRED · **≠** Responses compaction adopted · **≠** READY FOR V3 ADOPTION · **≠** runtime v3 ADOPTED · **≠** FinOps PASS |
+| **Morris trajectory decision (post-C6 / CKC)** | **SUPERSEDED FOR FORWARD PATH** — CKC-first + G2 + W1 + W2 + W3-A/B/C/D + **W4** + **Product Completion COMPLETE / CLOSED BY MORRIS** + **REAL-A COMPLETE / CONSUMED (PR #428)** + Nora C1→C4 + Type14 NCC-R08 CLOSED + **PR #438 MERGED** completed · **NOW:** **CURRENT REPOSITORY TRUTH** = **RESOLVE FROM GIT / `origin/main` / PR evidence** · **Last verified Nora/MW0 integration anchor** = PR **#442 MERGED** · head `67a00238…` · merge `99ae9fe372e60d4263318df265d8f13fbf218de8` · tree `5d7b386c…` · post-merge CI **`33292834920` SUCCESS** · Required Gate **PASS** · prior C5 anchor PR **#439** @ `70143b6d…` · **Product Completion = COMPLETE / CLOSED BY MORRIS** · **REAL-A = COMPLETE / CONSUMED** · **NCC-R08 = CLOSED BY EVIDENCE** · **ACTIVE CONSTRUCTION PRIORITY = NORA COGNITIVE COMPLETION** · **NORA C5 = CONTENT VALIDATED BY MORRIS / INTEGRATED ON MAIN / POST-MERGE VERIFIED** · **REAL-B = QUALIFIED CANDIDATE / DEFERRED / NOT AUTHORIZED / NOT STARTED** · **OD-07 CONSUMED** · **OD-03 = BUILD / CONSUMED** · OD-02 **CONSUMED — OPTION B** · OD-05/06/08 **OPEN** · **OD-04 = CONSUMED** · C6 **CLOSED / DO NOT REOPEN** · FinOps/T7 **FREEZE** · runtime v3 **NON ADOPTED** · Architecture **OPTION C TARGET ADOPTED** · MW1 Delivery **AUTHORIZED EARLIER** · **MW0 Readiness = PASS / CLOSED** · **MW0 Delivery = INTEGRATED ON MAIN / POST-MERGE VERIFIED** · **MW0 EXIT = PROVEN WITH NON-BLOCKING RESERVES** · MW0-R01/R02 **NOT_PROVEN / NON-BLOCKING** · CORR-MW0-05/06/07/08 **CLOSED** · **MW1 = MEMORY B + COMPACTION** · **MW1 Readiness = PASS / VALIDATED BY MORRIS** · **MW1 = COMPLETE / CLOSED BY MORRIS** at proven MW1 scope · **MW1 Delivery = INTEGRATED ON MAIN / POST-MERGE VERIFIED** (PR **#450 MERGED** · head `dd21ab45a3a8ce2090b7a193e76c1d92e0a5cc02` · merge `d09e21485343ce04703fb7a013b7ad84e5ab392c` · tree `2679810b4a8eaee6fcc9460dab43c123baecf327` · post-merge CI **`33480454434` SUCCESS** · Required Gate **PASS**) · **MW1 Final Deterministic Proof = PASS** · **MW1 REAL BOUNDARY = PROVEN** (MW1-REAL-01/CORR-01 · handoff `bcc607ae08bc419188505f91d6bbf7f947660671` · campaign `mw1-real-boundary-corr01-1788253662383` · evidence SHA256 `de149e12621f2f003da5f935d6c467574ea8f70a7079ae8aea16c919054b0678`) · **MW1-S01 = CLOSED / REAL BOUNDARY PROVEN** · **MW1-S02 = CLOSED / REAL BOUNDARY PROVEN** (current governed compaction/model-input boundary) · **MW1-S03 = CLOSED / REAL BOUNDARY PROVEN** (current governed materialization boundary) · **MW0×MW1 REAL integration proven on current F1 path** · **historical REAL-B candidate preserved as provenance** · MW1 REAL-01/CORR-01 executed under later Morris authorization · **MW1 CLOSURE DOCUMENTARY REPOSITORY LIFECYCLE = INTEGRATED ON MAIN / POST-MERGE VERIFIED — PR #451** · head `3785e271d897af5e34e1ce34cdddfc3782ec0e52` · merge `783f7619284f9cd2309d54e7efaa092093c3671e` · tree `831c0fb66bd213afd47f701a8afe3f00da0ea351` · post-merge CI **`33499812659` SUCCESS** · Required Gate **PASS** · **MW2 READINESS = VALIDATED BY MORRIS** · **CORR-MW2-RDY-01/02 SATISFIED** · **OD-02 = CONSUMED — OPTION B** · **MW2 closure/truth-sync repository publication state = RESOLVE FROM CURRENT GIT / PR EVIDENCE** · **MW2 = COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE** · Delivery PR **#456 MERGED** · CORR PR **#457 MERGED** · post-merge CI **`33621406965` SUCCESS** · **MW3 = COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE** · Delivery PR **#459 MERGED** · merge `0220253a2c65957dc802838d71075912402f3afd` · post-merge CI **`33710122738` SUCCESS** · **MW4 Delivery = INTEGRATED ON MAIN / POST-MERGE VERIFIED** (PR **#461** / CI `33753929894`) · MW4 **COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE WITH NON-BLOCKING RESERVES** · **CURRENT PRODUCT CAPABILITY = MW5 — Critical Challenge + Clarification — **COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE WITH RETAINED GOVERNANCE DEVIATION AND NON-BLOCKING RESERVES** — Morris closure decision **CONSUMED** — Delivery **INTEGRATED ON MAIN / POST-MERGE VERIFIED** — PR **#463 MERGED** · pre-merge head `642c502d649a3dad46b66ade95bdea1b5ed8b787` · squash merge `7e2f4c2799be70380362630a1c6734837cc453d9` · tree `b58cea7a8d0ddd173c1467d5a522e26a9c643fe3` · HEAD→MERGE TREE PARITY **PROVEN** · post-merge CI **`33841337376` SUCCESS** · Required Gate **PASS** · delivery branch `delivery/sfia-studio-nora-mw5-critical-challenge-clarification` **PRESERVED** · CORR-MW5-PR-01/02 **CLOSED AT TESTED DETERMINISTIC SCOPE** · CORR-MW5-CLOSURE-C5-CURRENT-TRAJECTORY-01 **CLOSED AT REVIEWED DOCUMENTARY SCOPE** · MW5-R2-REAL-03 PASS at tested scope · D-MW5-QA-SHA-01/02 CLOSED · MW0→MW5 cognitive evidence ACCEPTED BY MORRIS FOR MW5 PURPOSES · H17 FAIL = 141/100 RETAINED HISTORICAL GOVERNANCE DEVIATION · H18 INCONCLUSIVE · ZERO NEW REAL — ≠ campaign governance-compliant · ≠ Cognitive Completion PROVEN · ≠ runtime v3 ADOPTED · MW6 = COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE — INTEGRATED ON MAIN / POST-MERGE VERIFIED (PR #465 / `d3fee38b270d805144e621804b96ef1e5de3e208` / CI `33958548479`) · Stage A deterministic harness = INTEGRATED ON MAIN / POST-MERGE VERIFIED (PR #467 / `1dd5d67ad942c448becd637f4c2e55883d16ffca` / CI `33981467237`) · integrated main still carries historical v2 envelope 72/405/429 until Option C integration · LOCAL Option C candidate = 78/438/464 · NEXT PRODUCT CAPABILITY GATE = ChatGPT Critical Review of Option C → Morris technical+financial+Git GO · Stage A REAL NOT AUTHORIZED · ≠ Stage A REAL AUTHORIZED · ≠ MW6 END-TO-END REAL global · ≠ Cognitive Completion PROVEN · ≠ runtime v3 ADOPTED · ≠ production routing SELECTED** · **Responses compaction = CANDIDATE / NOT ADOPTED** · **Production model routing = NOT SELECTED** · **Cognitive Completion = NOT PROVEN** · **runtime v3 = NON ADOPTED** · **≠ END-TO-END REAL PROVEN** · Option C **#447** · CORR-OPT-C / Runner-Fake / legacy retirement / project Git integration **CLOSED** · **MW0 Option C regression/parity = PASS WITH NON-BLOCKING RESERVES — DETERMINISTIC ONLY — CHATGPT CRITICAL REVIEW PASS** · evidence Review Handoff L3 `35a2b1ae17085af09e9e59bf9bb96ddf61e02e8c` · DETERMINISTIC ONLY · R1/R2/R3 NOT RE-RUN · MW0-R01/R02 NOT_PROVEN/NB · RESERVE-OPT-C-02/03 OPEN/NB · MW0 historically CLOSED · **OD-03 = BUILD / CONSUMED** · **ADAPT-FIRST** · **NO FA REQUIRED** · **NO TA CURRENTLY REQUIRED** · **TA TRIGGER CANDIDATE** · Architecture **OPTION C TARGET ADOPTED (OD-04)** · Agents SDK Runner **TARGET ADOPTED** · Product SQLite Session **TARGET ADOPTED** · Session/model-input policy **TARGET** · Responses compaction **CANDIDATE / NOT ADOPTED** · product @openai/agents / Zod dependency integration **INTEGRATED ON MAIN** (PR **#447**) · runtime Option C implementation **INTEGRATED ON MAIN / POST-MERGE VERIFIED** (PR **#447**) · **MW0 OPTION C REGRESSION / PARITY = CLOSED AS CURRENT REGRESSION GATE / PASS WITH NON-BLOCKING RESERVES / DETERMINISTIC ONLY / ChatGPT CRITICAL REVIEW PASS** · evidence Review Handoff L3 `35a2b1ae17085af09e9e59bf9bb96ddf61e02e8c` · **MW1 CLOSURE DOCUMENTARY REPOSITORY LIFECYCLE = INTEGRATED ON MAIN / POST-MERGE VERIFIED — PR #451** · head `3785e271d897af5e34e1ce34cdddfc3782ec0e52` · merge `783f7619284f9cd2309d54e7efaa092093c3671e` · tree `831c0fb66bd213afd47f701a8afe3f00da0ea351` · post-merge CI **`33499812659` SUCCESS** · Required Gate **PASS** · **MW2 READINESS = VALIDATED BY MORRIS** · **CORR-MW2-RDY-01/02 SATISFIED** · **OD-02 = CONSUMED — OPTION B** · **MW2 closure/truth-sync repository publication state = RESOLVE FROM CURRENT GIT / PR EVIDENCE** · **MW2 = COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE** · Delivery PR **#456 MERGED** · CORR PR **#457 MERGED** · post-merge CI **`33621406965` SUCCESS** · **MW3 = COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE** · Delivery PR **#459 MERGED** · merge `0220253a2c65957dc802838d71075912402f3afd` · post-merge CI **`33710122738` SUCCESS** · **MW4 Delivery INTEGRATED ON MAIN / POST-MERGE VERIFIED** · MW4 **COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE WITH NON-BLOCKING RESERVES** · **CURRENT PRODUCT CAPABILITY = MW5 — Critical Challenge + Clarification — **COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE WITH RETAINED GOVERNANCE DEVIATION AND NON-BLOCKING RESERVES** — Morris closure decision **CONSUMED** — Delivery **INTEGRATED ON MAIN / POST-MERGE VERIFIED** — PR **#463 MERGED** · pre-merge head `642c502d649a3dad46b66ade95bdea1b5ed8b787` · squash merge `7e2f4c2799be70380362630a1c6734837cc453d9` · tree `b58cea7a8d0ddd173c1467d5a522e26a9c643fe3` · HEAD→MERGE TREE PARITY **PROVEN** · post-merge CI **`33841337376` SUCCESS** · Required Gate **PASS** · delivery branch `delivery/sfia-studio-nora-mw5-critical-challenge-clarification` **PRESERVED** · CORR-MW5-PR-01/02 **CLOSED AT TESTED DETERMINISTIC SCOPE** · CORR-MW5-CLOSURE-C5-CURRENT-TRAJECTORY-01 **CLOSED AT REVIEWED DOCUMENTARY SCOPE** · MW5-R2-REAL-03 PASS at tested scope · D-MW5-QA-SHA-01/02 CLOSED · MW0→MW5 cognitive evidence ACCEPTED BY MORRIS FOR MW5 PURPOSES · H17 FAIL = 141/100 RETAINED HISTORICAL GOVERNANCE DEVIATION · H18 INCONCLUSIVE · ZERO NEW REAL — ≠ campaign governance-compliant · ≠ Cognitive Completion PROVEN · ≠ runtime v3 ADOPTED · MW6 = COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE — INTEGRATED ON MAIN / POST-MERGE VERIFIED (PR #465 / `d3fee38b270d805144e621804b96ef1e5de3e208` / CI `33958548479`) · Stage A deterministic harness = INTEGRATED ON MAIN / POST-MERGE VERIFIED (PR #467 / `1dd5d67ad942c448becd637f4c2e55883d16ffca` / CI `33981467237`) · integrated main still carries historical v2 envelope 72/405/429 until Option C integration · LOCAL Option C candidate = 78/438/464 · NEXT PRODUCT CAPABILITY GATE = ChatGPT Critical Review of Option C → Morris technical+financial+Git GO · Stage A REAL NOT AUTHORIZED · ≠ Stage A REAL AUTHORIZED · ≠ MW6 END-TO-END REAL global · ≠ Cognitive Completion PROVEN · ≠ runtime v3 ADOPTED · ≠ production routing SELECTED** · next capability after MW4 delivery = **MW5 — Critical Challenge + Clarification readiness — NOT AUTHORIZED / NOT STARTED** · **≠** END-TO-END REAL PROVEN · **≠** Cognitive Completion PROVEN · **≠** runtime v3 ADOPTED · next capability after MW4 delivery = **MW5 — Critical Challenge + Clarification readiness — NOT AUTHORIZED / NOT STARTED** · **≠** REAL-B AUTHORIZED · **≠** REAL-B STARTED · **≠** REAL-B CLOSED/CANCELLED · **≠** MW1 complete · **≠** TA REQUIRED · **≠** Responses compaction adopted · **≠** READY FOR V3 ADOPTION · **≠** runtime v3 ADOPTED · **≠** FinOps PASS |
 | **Product Completion W2 Track D / bounded CKC Phase B** | **INTEGRATED ON MAIN** · PR **#403 MERGED** · head `1cdf4b41270cffe31be28e02e3effe17a1b15477` · merge `e4a93fea77c7edd01c4e6fc2d47455db14e102e8` · PR-head CI **`32645232920` SUCCESS / Required Gate PASS** · head→merge **0-file content delta** · push/main CI **`32646038871` SUCCESS / Required Gate PASS** · D-W2-02 / US-P1-14 / REQ-24 · product-native CKC cognition before Options/Recommendation · delivery + security via **same generic product path** · Recommendation remains Recommendation · no automatic HumanDecision · no authority from CKC · **STOP BEFORE EXECUTE** · legacy OptionSet cutover fail-closed · business-first Pilote output · structured provenance retained · proof **DETERMINISTIC PROVEN** · PB-RES-REAL-01 **OPEN / TRACE ONLY** · W2 later **CLOSED BY MORRIS** *(post-requalification)* · full CKC track later **SATISFIED VIA W3-D** · C6 **CLOSED** · FinOps/T7 **FREEZE** · Execute **OUT** · REAL **OUT** · runtime v3 **NON ADOPTED** · **≠** W2 incomplete at Phase B timestamp · **≠** full CKC completion · **≠** REAL BOUNDARY PROVEN · **≠** W3 authorized |
 | **Product Completion W2 Final Closure Requalification** | **ACCEPTED BY MORRIS** · Cycle 9 QA · typology DOC · evidence on `main@1e4b0dbb…` · X01…X08 **PROVEN** · H→N 18-step **PROVEN** · PASS WITH NON-BLOCKING RESERVES · W2-CL-R01…R03 **CLOSED** · W2-CL-R04 **OPEN_NON_BLOCKING** · PB-RES-REAL-01 **OPEN / TRACE ONLY** · proof ceiling **DETERMINISTIC PRODUCT E2E PROVEN** · path `projects/sfia-studio/product-completion/10-product-completion-wave-2-final-closure-qualification.md` · **≠** W3 authorized · **≠** REAL · runtime v3 **NON ADOPTED** |
 | **Product Completion W2 Closure Decision** | **W2 CLOSED BY MORRIS** · exit contracts X01…X08 + integrated H→N path **ACCEPTED AS SUFFICIENT W2 EXIT PROOF** · residuals retained · Product Completion **INCOMPLETE** · W3 later **AUTHORIZED** under distinct GO · **≠** W3 CLOSED · **≠** REAL · **≠** FinOps PASS · runtime v3 **NON ADOPTED** |
@@ -110,7 +112,7 @@

 | **Product Completion Integrated Proof / Final Completion Qualification** | **INTEGRATED ON MAIN / POST-MERGE VERIFIED** · PR **#426 MERGED** · head `57f46c7adbac7cbb1a65d2193d42153490743615` · merge `19349d024b3dc10a180cda52b2300279af361bf2` · tree `00bc236ae3631b638746e34c221dbc19253bf8ab` · exact scope DOC14 + `studio-product-completion-integrated-proof.spec.ts` · PR CI attempt-1 `33079667982` Vitest timeout failure → unchanged attempt-2 SUCCESS *(transient CI timing)* · post-merge CI **`33082002188` SUCCESS** · Required Gate **PASS** · CORR-01 technical **PASS WITH NON-BLOCKING RESERVES** · CORR-02 documentary **PASS** · Integrated E2E **7/7** · PC-BAR-01→10 **PASS** · full-loop genericity **cyc:delivery + cyc:security** · restart checkpoint A+B **PROVEN** · PCQA-BLK-01 **CLOSED BY CORR-01 EVIDENCE** · PCQA-R01 **NON_BLOCKING** · proof **DETERMINISTIC PRODUCT COMPLETION INTEGRATED PROVEN** · source branch `qa/sfia-studio-product-completion-integrated-proof` **PRESERVED** · path DOC14 `projects/sfia-studio/product-completion/14-product-completion-integrated-proof-final-qualification.md` *(historical QA record — may still say INCOMPLETE as qualification-time truth)* · **≠** READY FOR REAL · **≠** REAL BOUNDARY PROVEN · **≠** runtime v3 ADOPTED |
 | **Product Completion Closure Decision** | **COMPLETE / CLOSED BY MORRIS** · decision source = Morris explicit conversation decision **« ok on valide alors »** (after reviewing QA synthesis + completion bar + Git proof + post-merge CI) · consumes Final Qualification · accepts C1 completion bar **SATISFIED** · accepts non-blocking reserves · **≠** READY FOR REAL · **≠** GO REAL · **≠** runtime v3 ADOPTED · **≠** FinOps/T7 unfreeze · **≠** C6 reopen · **≠** automatic next-capability selection · **≠** Delivery |
-| **Nora Cognitive Completion — C1→C5 programme register** | **ACTIVE Nora programme register** · **ACTIVE CONSTRUCTION PRIORITY** under NORA-FIRST sequencing · **≠** REAL-B cancelled · **C1** CLOSED / CONTENT VALIDATED / INTEGRATED / POST-MERGE VERIFIED · PR **#430** / truth-sync **#431** · **C2** CLOSED / CONTENT VALIDATED / INTEGRATED / POST-MERGE VERIFIED · PR **#432** / lifecycle **#433** · **C3** CLOSED / CONTENT VALIDATED / INTEGRATED / POST-MERGE VERIFIED · PR **#434** / lifecycle **#435** · **C4** CONTENT VALIDATED BY MORRIS / INTEGRATED ON MAIN / POST-MERGE VERIFIED · PR **#436** · truth-sync **#437** · Type14 semantics **#438 MERGED** · merge `6f5b5cc381f0a1ed6d9a3ef6146c8a6c99bf61a4` · post-merge CI `33256449007` SUCCESS · **NCC-R08 = CLOSED BY EVIDENCE** · **C5** Source-Locked Cognitive Backlog = **CONTENT VALIDATED BY MORRIS / INTEGRATED ON MAIN / POST-MERGE VERIFIED** · path `projects/sfia-studio/nora-cognitive-completion/05-nora-source-locked-cognitive-backlog.md` · PR **#439 MERGED** · head `dba0d0a7…` · merge `70143b6d…` · tree `b51cb83c…` · post-merge CI `33265306670` SUCCESS · MW0→MW6 **VALIDATED NORA CONSTRUCTION BACKLOG** · Cognitive Completion **NOT PROVEN** · **REAL-B = QUALIFIED CANDIDATE / DEFERRED / NOT AUTHORIZED / NOT STARTED** · **OD-07 = CONSUMED** · **OD-03 = BUILD / CONSUMED** · OD-02 **CONSUMED — OPTION B** · OD-05/06/08 **OPEN** · **OD-04 = CONSUMED** · Architecture **OPTION C TARGET ADOPTED** · MW1 Delivery **AUTHORIZED EARLIER** · Option C implementation **INTEGRATED ON MAIN / POST-MERGE VERIFIED** (PR **#447**) · runtime v3 **NON ADOPTED** · **MW0 = INTEGRATED ON MAIN / POST-MERGE VERIFIED (PR #442)** · **MW0 EXIT = PROVEN WITH NON-BLOCKING RESERVES** · **MW1 = MEMORY B + COMPACTION** · **MW1 Readiness = PASS / VALIDATED BY MORRIS** · **MW1 = COMPLETE / CLOSED BY MORRIS** · MW1 Delivery **AUTHORIZED EARLIER** · **Option C implementation = INTEGRATED ON MAIN / POST-MERGE VERIFIED** (PR **#447 MERGED** · head `0fdf06a518e2693f6d08fa16ddcc8fc821ce0f6b` · merge `127c6ecf5658e7f3954d94b2cef8269ab9eaf07e` · tree `cf88184cf8f036c671740cffffcc7ecdfb0953d1` · HEAD→MERGE tree parity **PROVEN** · post-merge CI **`33338927956` SUCCESS** · Required Gate **PASS** · source branch `delivery/sfia-studio-nora-mw1-option-c-migration` **PRESERVED** @ `0fdf06a5…`) · CORR-OPT-C-01…05 **CLOSED** · Runner/Fake convergence **CLOSED** · Nora legacy generic runtime retirement **CLOSED** · project Git integration **CLOSED / POST-MERGE VERIFIED** · **MW0 Option C regression/parity = PASS WITH NON-BLOCKING RESERVES — DETERMINISTIC ONLY — CHATGPT CRITICAL REVIEW PASS** · evidence Review Handoff L3 `35a2b1ae17085af09e9e59bf9bb96ddf61e02e8c` · proof ceiling **DETERMINISTIC ONLY** · historical R1/R2/R3 RETAINED / NOT RE-RUN / NOT UPGRADED · MW0-R01/R02 remain NOT_PROVEN/NB · RESERVE-OPT-C-02/03 remain OPEN/NB · MW0 remains historically CLOSED · **OD-03 = BUILD / CONSUMED** · **ADAPT-FIRST** · **NO FA REQUIRED** · **NO TA CURRENTLY REQUIRED** · **TA TRIGGER CANDIDATE** · Architecture **OPTION C TARGET ADOPTED (OD-04)** · Agents SDK Runner **TARGET ADOPTED** · Product SQLite Session **TARGET ADOPTED** · Session/model-input policy **TARGET** · Responses compaction **CANDIDATE / NOT ADOPTED** · @openai/agents / Zod **INTEGRATED ON MAIN** · **MW0 OPTION C REGRESSION / PARITY = CLOSED AS CURRENT REGRESSION GATE / PASS WITH NON-BLOCKING RESERVES / DETERMINISTIC ONLY / ChatGPT CRITICAL REVIEW PASS** · evidence Review Handoff L3 `35a2b1ae17085af09e9e59bf9bb96ddf61e02e8c` · **MW1 CLOSURE DOCUMENTARY REPOSITORY LIFECYCLE = INTEGRATED ON MAIN / POST-MERGE VERIFIED — PR #451** · head `3785e271d897af5e34e1ce34cdddfc3782ec0e52` · merge `783f7619284f9cd2309d54e7efaa092093c3671e` · tree `831c0fb66bd213afd47f701a8afe3f00da0ea351` · post-merge CI **`33499812659` SUCCESS** · Required Gate **PASS** · **MW2 READINESS = VALIDATED BY MORRIS** · **CORR-MW2-RDY-01/02 SATISFIED** · **OD-02 = CONSUMED — OPTION B** · **MW2 closure/truth-sync repository publication state = RESOLVE FROM CURRENT GIT / PR EVIDENCE** · **MW2 = COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE** · Delivery PR **#456 MERGED** · CORR PR **#457 MERGED** · post-merge CI **`33621406965` SUCCESS** · **MW3 = COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE** · Delivery PR **#459 MERGED** · merge `0220253a2c65957dc802838d71075912402f3afd` · post-merge CI **`33710122738` SUCCESS** · **MW4 Delivery INTEGRATED ON MAIN / POST-MERGE VERIFIED** · MW4 **COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE WITH NON-BLOCKING RESERVES** · **CURRENT PRODUCT CAPABILITY = MW5 — Critical Challenge + Clarification — **COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE WITH RETAINED GOVERNANCE DEVIATION AND NON-BLOCKING RESERVES** — Morris closure decision **CONSUMED** — Delivery **INTEGRATED ON MAIN / POST-MERGE VERIFIED** — PR **#463 MERGED** · pre-merge head `642c502d649a3dad46b66ade95bdea1b5ed8b787` · squash merge `7e2f4c2799be70380362630a1c6734837cc453d9` · tree `b58cea7a8d0ddd173c1467d5a522e26a9c643fe3` · HEAD→MERGE TREE PARITY **PROVEN** · post-merge CI **`33841337376` SUCCESS** · Required Gate **PASS** · delivery branch `delivery/sfia-studio-nora-mw5-critical-challenge-clarification` **PRESERVED** · CORR-MW5-PR-01/02 **CLOSED AT TESTED DETERMINISTIC SCOPE** · CORR-MW5-CLOSURE-C5-CURRENT-TRAJECTORY-01 **CLOSED AT REVIEWED DOCUMENTARY SCOPE** · MW5-R2-REAL-03 PASS at tested scope · D-MW5-QA-SHA-01/02 CLOSED · MW0→MW5 cognitive evidence ACCEPTED BY MORRIS FOR MW5 PURPOSES · H17 FAIL = 141/100 RETAINED HISTORICAL GOVERNANCE DEVIATION · H18 INCONCLUSIVE · ZERO NEW REAL — ≠ campaign governance-compliant · ≠ Cognitive Completion PROVEN · ≠ runtime v3 ADOPTED · MW6 = CLOSURE ACCEPTED BY MORRIS / INTEGRATION PENDING · effective COMPLETE/CLOSED conditioned on exact candidate merge + required CI PASS · repository lifecycle = RESOLVE FROM CURRENT GIT / PR EVIDENCE · NEXT PRODUCT CAPABILITY GATE = GLOBAL MODEL × REASONING CAMPAIGN READINESS / QUALIFICATION — NOT AUTHORIZED / NOT STARTED · ≠ MW6 integrated on main yet · ≠ MW6 COMPLETE/CLOSED on main yet** · next capability after MW4 delivery = **MW5 — Critical Challenge + Clarification readiness — NOT AUTHORIZED / NOT STARTED** · **≠** END-TO-END REAL PROVEN · **≠** Cognitive Completion PROVEN · **≠** runtime v3 ADOPTED · **≠** Option C REAL parity PROVEN · **≠** ChatGPT↔Cursor parity PROVEN · **≠** READY FOR REAL from D0 alone · **≠** TA REQUIRED · **≠** Cognitive Completion PROVEN · Runner/Session = TARGET ADOPTED · **≠** REAL-B AUTHORIZED · **≠** REAL-B CLOSED |
+| **Nora Cognitive Completion — C1→C5 programme register** | **ACTIVE Nora programme register** · **ACTIVE CONSTRUCTION PRIORITY** under NORA-FIRST sequencing · **≠** REAL-B cancelled · **C1** CLOSED / CONTENT VALIDATED / INTEGRATED / POST-MERGE VERIFIED · PR **#430** / truth-sync **#431** · **C2** CLOSED / CONTENT VALIDATED / INTEGRATED / POST-MERGE VERIFIED · PR **#432** / lifecycle **#433** · **C3** CLOSED / CONTENT VALIDATED / INTEGRATED / POST-MERGE VERIFIED · PR **#434** / lifecycle **#435** · **C4** CONTENT VALIDATED BY MORRIS / INTEGRATED ON MAIN / POST-MERGE VERIFIED · PR **#436** · truth-sync **#437** · Type14 semantics **#438 MERGED** · merge `6f5b5cc381f0a1ed6d9a3ef6146c8a6c99bf61a4` · post-merge CI `33256449007` SUCCESS · **NCC-R08 = CLOSED BY EVIDENCE** · **C5** Source-Locked Cognitive Backlog = **CONTENT VALIDATED BY MORRIS / INTEGRATED ON MAIN / POST-MERGE VERIFIED** · path `projects/sfia-studio/nora-cognitive-completion/05-nora-source-locked-cognitive-backlog.md` · PR **#439 MERGED** · head `dba0d0a7…` · merge `70143b6d…` · tree `b51cb83c…` · post-merge CI `33265306670` SUCCESS · MW0→MW6 **VALIDATED NORA CONSTRUCTION BACKLOG** · Cognitive Completion **NOT PROVEN** · **REAL-B = QUALIFIED CANDIDATE / DEFERRED / NOT AUTHORIZED / NOT STARTED** · **OD-07 = CONSUMED** · **OD-03 = BUILD / CONSUMED** · OD-02 **CONSUMED — OPTION B** · OD-05/06/08 **OPEN** · **OD-04 = CONSUMED** · Architecture **OPTION C TARGET ADOPTED** · MW1 Delivery **AUTHORIZED EARLIER** · Option C implementation **INTEGRATED ON MAIN / POST-MERGE VERIFIED** (PR **#447**) · runtime v3 **NON ADOPTED** · **MW0 = INTEGRATED ON MAIN / POST-MERGE VERIFIED (PR #442)** · **MW0 EXIT = PROVEN WITH NON-BLOCKING RESERVES** · **MW1 = MEMORY B + COMPACTION** · **MW1 Readiness = PASS / VALIDATED BY MORRIS** · **MW1 = COMPLETE / CLOSED BY MORRIS** · MW1 Delivery **AUTHORIZED EARLIER** · **Option C implementation = INTEGRATED ON MAIN / POST-MERGE VERIFIED** (PR **#447 MERGED** · head `0fdf06a518e2693f6d08fa16ddcc8fc821ce0f6b` · merge `127c6ecf5658e7f3954d94b2cef8269ab9eaf07e` · tree `cf88184cf8f036c671740cffffcc7ecdfb0953d1` · HEAD→MERGE tree parity **PROVEN** · post-merge CI **`33338927956` SUCCESS** · Required Gate **PASS** · source branch `delivery/sfia-studio-nora-mw1-option-c-migration` **PRESERVED** @ `0fdf06a5…`) · CORR-OPT-C-01…05 **CLOSED** · Runner/Fake convergence **CLOSED** · Nora legacy generic runtime retirement **CLOSED** · project Git integration **CLOSED / POST-MERGE VERIFIED** · **MW0 Option C regression/parity = PASS WITH NON-BLOCKING RESERVES — DETERMINISTIC ONLY — CHATGPT CRITICAL REVIEW PASS** · evidence Review Handoff L3 `35a2b1ae17085af09e9e59bf9bb96ddf61e02e8c` · proof ceiling **DETERMINISTIC ONLY** · historical R1/R2/R3 RETAINED / NOT RE-RUN / NOT UPGRADED · MW0-R01/R02 remain NOT_PROVEN/NB · RESERVE-OPT-C-02/03 remain OPEN/NB · MW0 remains historically CLOSED · **OD-03 = BUILD / CONSUMED** · **ADAPT-FIRST** · **NO FA REQUIRED** · **NO TA CURRENTLY REQUIRED** · **TA TRIGGER CANDIDATE** · Architecture **OPTION C TARGET ADOPTED (OD-04)** · Agents SDK Runner **TARGET ADOPTED** · Product SQLite Session **TARGET ADOPTED** · Session/model-input policy **TARGET** · Responses compaction **CANDIDATE / NOT ADOPTED** · @openai/agents / Zod **INTEGRATED ON MAIN** · **MW0 OPTION C REGRESSION / PARITY = CLOSED AS CURRENT REGRESSION GATE / PASS WITH NON-BLOCKING RESERVES / DETERMINISTIC ONLY / ChatGPT CRITICAL REVIEW PASS** · evidence Review Handoff L3 `35a2b1ae17085af09e9e59bf9bb96ddf61e02e8c` · **MW1 CLOSURE DOCUMENTARY REPOSITORY LIFECYCLE = INTEGRATED ON MAIN / POST-MERGE VERIFIED — PR #451** · head `3785e271d897af5e34e1ce34cdddfc3782ec0e52` · merge `783f7619284f9cd2309d54e7efaa092093c3671e` · tree `831c0fb66bd213afd47f701a8afe3f00da0ea351` · post-merge CI **`33499812659` SUCCESS** · Required Gate **PASS** · **MW2 READINESS = VALIDATED BY MORRIS** · **CORR-MW2-RDY-01/02 SATISFIED** · **OD-02 = CONSUMED — OPTION B** · **MW2 closure/truth-sync repository publication state = RESOLVE FROM CURRENT GIT / PR EVIDENCE** · **MW2 = COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE** · Delivery PR **#456 MERGED** · CORR PR **#457 MERGED** · post-merge CI **`33621406965` SUCCESS** · **MW3 = COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE** · Delivery PR **#459 MERGED** · merge `0220253a2c65957dc802838d71075912402f3afd` · post-merge CI **`33710122738` SUCCESS** · **MW4 Delivery INTEGRATED ON MAIN / POST-MERGE VERIFIED** · MW4 **COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE WITH NON-BLOCKING RESERVES** · **CURRENT PRODUCT CAPABILITY = MW5 — Critical Challenge + Clarification — **COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE WITH RETAINED GOVERNANCE DEVIATION AND NON-BLOCKING RESERVES** — Morris closure decision **CONSUMED** — Delivery **INTEGRATED ON MAIN / POST-MERGE VERIFIED** — PR **#463 MERGED** · pre-merge head `642c502d649a3dad46b66ade95bdea1b5ed8b787` · squash merge `7e2f4c2799be70380362630a1c6734837cc453d9` · tree `b58cea7a8d0ddd173c1467d5a522e26a9c643fe3` · HEAD→MERGE TREE PARITY **PROVEN** · post-merge CI **`33841337376` SUCCESS** · Required Gate **PASS** · delivery branch `delivery/sfia-studio-nora-mw5-critical-challenge-clarification` **PRESERVED** · CORR-MW5-PR-01/02 **CLOSED AT TESTED DETERMINISTIC SCOPE** · CORR-MW5-CLOSURE-C5-CURRENT-TRAJECTORY-01 **CLOSED AT REVIEWED DOCUMENTARY SCOPE** · MW5-R2-REAL-03 PASS at tested scope · D-MW5-QA-SHA-01/02 CLOSED · MW0→MW5 cognitive evidence ACCEPTED BY MORRIS FOR MW5 PURPOSES · H17 FAIL = 141/100 RETAINED HISTORICAL GOVERNANCE DEVIATION · H18 INCONCLUSIVE · ZERO NEW REAL — ≠ campaign governance-compliant · ≠ Cognitive Completion PROVEN · ≠ runtime v3 ADOPTED · MW6 = COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE — INTEGRATED ON MAIN / POST-MERGE VERIFIED (PR #465 / `d3fee38b270d805144e621804b96ef1e5de3e208` / CI `33958548479`) · Stage A deterministic harness = INTEGRATED ON MAIN / POST-MERGE VERIFIED (PR #467 / `1dd5d67ad942c448becd637f4c2e55883d16ffca` / CI `33981467237`) · integrated main still carries historical v2 envelope 72/405/429 until Option C integration · LOCAL Option C candidate = 78/438/464 · NEXT PRODUCT CAPABILITY GATE = ChatGPT Critical Review of Option C → Morris technical+financial+Git GO · Stage A REAL NOT AUTHORIZED · ≠ Stage A REAL AUTHORIZED · ≠ MW6 END-TO-END REAL global · ≠ Cognitive Completion PROVEN · ≠ runtime v3 ADOPTED · ≠ production routing SELECTED** · next capability after MW4 delivery = **MW5 — Critical Challenge + Clarification readiness — NOT AUTHORIZED / NOT STARTED** · **≠** END-TO-END REAL PROVEN · **≠** Cognitive Completion PROVEN · **≠** runtime v3 ADOPTED · **≠** Option C REAL parity PROVEN · **≠** ChatGPT↔Cursor parity PROVEN · **≠** READY FOR REAL from D0 alone · **≠** TA REQUIRED · **≠** Cognitive Completion PROVEN · Runner/Session = TARGET ADOPTED · **≠** REAL-B AUTHORIZED · **≠** REAL-B CLOSED |
 | **Product Completion W3 Delivery** | **CLOSED BY MORRIS** · slices **W3-A** + **W3-B** + **W3-C** + **W3-D** **INTEGRATED AND PROVEN** · W3-E **NOT REQUIRED** · canonical `/studio` · MAIN `73de0616a127b230eea068267e44c6cf3150006f` · **≠** W4 AUTHORIZED · **≠** READY FOR REAL · **≠** Product Completion COMPLETE |
 | **Product Completion W2 Final Closure Product Correction** | **INTEGRATED ON MAIN** · PR **#405 MERGED** · head `330b36258f5a5fcb117fb562b12ff173b3675d94` · merge `1e4b0dbb8de291f1a02e084f03231d62d04dfb0b` · PR-head CI SUCCESS · push/main CI **`32654262020` SUCCESS** · R01 Phase B Product E2E cognition · R02 material EC amend/reinspect + R1 recovery-safe · C6 **CLOSED** · no `lib/oa` mutation · **≠** W3 · **≠** REAL · runtime v3 **NON ADOPTED** |
 | **Product Completion W2-G3 Delivery** | **INTEGRATED ON MAIN** · PR **#400 MERGED** · delivery head `a276f170faece84a2121f5fe5796c24ae443674d` · merge `dd852243a652e85cce455a68fae5ac7aa13d2bea` · PR-head CI **`32632461315` SUCCESS / Required Gate PASS** · push/main CI **`32633308148` SUCCESS** · E+A+B+C governed trajectory: Options / Recommendation / HumanDecision / EC inspect / conditional Confirmation / authority+executor sufficiency · **STOP BEFORE EXECUTE** · ProjectTrajectory SoT **KEEP** · C6 **CLOSED** · D-W2-CI-FINOPS-FREEZE-01 **ADOPTED** · FinOps/T7 **FREEZE** · T7-C04 **DEFERRED** · Phase B later **INTEGRATED** via PR **#403** · **≠** W2 finally closed · **≠** Execute · **≠** REAL · **≠** FinOps PASS · runtime v3 **NON ADOPTED** |
@@ -126,10 +128,10 @@
 | **ROADMAP-POST-MERGE-CKC-388** | **CLOSED ON MAIN** via PR **#389** / merge `c4dc1c9ce78290f00354e58dde451dd09616f49e` · post-merge CI **`32527209975` SUCCESS** · Roadmap sync integrated on main · **≠** DoctrinePackage runtime binding · **≠** Nora proven |
 | **DoctrinePackage / runtime CKC architecture qualification** | **ARCHITECTURE DIRECTION ADOPTED BY MORRIS — INTEGRATED ON MAIN** via PR **#390 + PR #391** · **G2 materialization DECIDED + GIT-INTEGRATED** via PR **#394** (`b3e978fe…`) · **W1 runtime materialization INTEGRATED** via PR **#395** (`ddd39181…`) · `pkg:sfia-studio-doctrine-v3@1.0.0` · OPTION A root `projects/sfia-studio/app/lib/oa/doctrine/product/` · resolver/repository **KEEP** · D02 Option B **KEEP** · fallback **NONE** · fixture quarantine/test-only → retire later · Product pin **fail-closed** · Phase A package-bound **INTEGRATED** · Phase A **≠** Phase B complete · bounded CKC→Nora seam **PROVEN (W1)** · bounded Phase B / generic multi-cycle cognition **INTEGRATED** (PR **#403**) · full CKC catalog evolvability **SATISFIED VIA W3-D** · runtime v3 **NON ADOPTED** |
 | **SFIA Studio product design tooling** | **MORRIS DECISION — PENPOT IS THE REFERENCE DESIGN WORKSPACE FOR SFIA STUDIO PRODUCT DESIGN** · Studio product design only · Git remains SoT for governance/contracts/decisions · R-04 EA historical recommendation **SUPERSEDED FOR FUTURE SFIA STUDIO PRODUCT DESIGN** · **≠** global SFIA methodological baseline · **≠** v3 doctrine change · **≠** runtime v3 adoption · EA document **not** retroactively rewritten |
-| **Gates courants** | C1…C6 **INTEGRATED / C6 CLOSED** · W1 **CLOSED** · **W2 CLOSED BY MORRIS** · **W3 CLOSED BY MORRIS** · **W3-A/B/C CLOSED BY MORRIS** · **W3-D INTEGRATED AND PROVEN** · **W4 PRESENTATION INTEGRATED** (PR **#420**) · **W4-C CLOSED BY MORRIS** (PR **#422**) · **W4 CLOSED BY MORRIS** · **W4 POST-CLOSURE TRUTH SYNC INTEGRATED** (PR **#423**) · **Product Completion Final Qualification INTEGRATED** (PR **#426** / merge `19349d024…` / CI `33082002188`) · **Product Completion = COMPLETE / CLOSED BY MORRIS** · Final Qualification **PASS WITH NON-BLOCKING RESERVES / CONSUMED** · C1 completion bar **SATISFIED** · PC-BAR-01→10 **PASS** · Integrated E2E **7/7** · genericity delivery+security **PROVEN** · restart A+B **PROVEN** · PCQA-BLK-01 **CLOSED BY EVIDENCE** · PCQA-R01 **NON_BLOCKING** · W3A-D03 **OPEN_CARRY_NON_BLOCKING** · W2-CL-R04 **OPEN_CARRY_NON_BLOCKING** · PB-RES-REAL-01 **TRACE_ONLY** · **REAL-A = COMPLETE / CONSUMED / PASS WITH PARITY GAPS** · RA-06 **OPEN NON_BLOCKING** · RA-07 **OPEN PARITY GAP NON_BLOCKING** · FinOps/T7 **FREEZE** · runtime v3 **NON ADOPTED** · **ACTIVE CONSTRUCTION PRIORITY = NORA COGNITIVE COMPLETION** · **NORA C5 = CONTENT VALIDATED BY MORRIS / INTEGRATED ON MAIN / POST-MERGE VERIFIED** · MW0→MW6 **VALIDATED NORA CONSTRUCTION BACKLOG** · **REAL-B = QUALIFIED CANDIDATE / DEFERRED / PRESERVED / NOT AUTHORIZED / NOT STARTED** · **OD-07 CONSUMED** · **OD-03 = BUILD / CONSUMED** · OD-02 **CONSUMED — OPTION B** · OD-05/06/08 **OPEN** · **OD-04 = CONSUMED** · Architecture **OPTION C TARGET ADOPTED (OD-04)** · @openai/agents / Zod **INTEGRATED ON MAIN** (PR **#447**) · Option C runtime implementation **INTEGRATED ON MAIN / POST-MERGE VERIFIED** (PR **#447**) · **MW0 Readiness = PASS / CLOSED** · **MW0 Delivery = INTEGRATED ON MAIN / POST-MERGE VERIFIED** · **MW0 EXIT = PROVEN WITH NON-BLOCKING RESERVES** · MW0-R01/R02 **NOT_PROVEN / NON-BLOCKING** · CORR-MW0-05/06/07/08 **CLOSED** · Cognitive Completion **NOT PROVEN** · **MW1 = MEMORY B + COMPACTION** · **MW1 Readiness = PASS / VALIDATED BY MORRIS** · **MW1 = COMPLETE / CLOSED BY MORRIS** at proven MW1 scope · **MW1 Delivery = INTEGRATED ON MAIN / POST-MERGE VERIFIED** (PR **#450 MERGED** · head `dd21ab45a3a8ce2090b7a193e76c1d92e0a5cc02` · merge `d09e21485343ce04703fb7a013b7ad84e5ab392c` · tree `2679810b4a8eaee6fcc9460dab43c123baecf327` · post-merge CI **`33480454434` SUCCESS** · Required Gate **PASS**) · **MW1 Final Deterministic Proof = PASS** · **MW1 REAL BOUNDARY = PROVEN** (MW1-REAL-01/CORR-01 · handoff `bcc607ae08bc419188505f91d6bbf7f947660671` · campaign `mw1-real-boundary-corr01-1788253662383` · evidence SHA256 `de149e12621f2f003da5f935d6c467574ea8f70a7079ae8aea16c919054b0678`) · **MW1-S01 = CLOSED / REAL BOUNDARY PROVEN** · **MW1-S02 = CLOSED / REAL BOUNDARY PROVEN** (current governed compaction/model-input boundary) · **MW1-S03 = CLOSED / REAL BOUNDARY PROVEN** (current governed materialization boundary) · **MW0×MW1 REAL integration proven on current F1 path** · **historical REAL-B candidate preserved as provenance** · MW1 REAL-01/CORR-01 executed under later Morris authorization · **MW1 CLOSURE DOCUMENTARY REPOSITORY LIFECYCLE = INTEGRATED ON MAIN / POST-MERGE VERIFIED — PR #451** · head `3785e271d897af5e34e1ce34cdddfc3782ec0e52` · merge `783f7619284f9cd2309d54e7efaa092093c3671e` · tree `831c0fb66bd213afd47f701a8afe3f00da0ea351` · post-merge CI **`33499812659` SUCCESS** · Required Gate **PASS** · **MW2 READINESS = VALIDATED BY MORRIS** · **CORR-MW2-RDY-01/02 SATISFIED** · **OD-02 = CONSUMED — OPTION B** · **MW2 closure/truth-sync repository publication state = RESOLVE FROM CURRENT GIT / PR EVIDENCE** · **MW2 = COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE** · Delivery PR **#456 MERGED** · CORR PR **#457 MERGED** · post-merge CI **`33621406965` SUCCESS** · **MW3 = COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE** · Delivery PR **#459 MERGED** · merge `0220253a2c65957dc802838d71075912402f3afd` · post-merge CI **`33710122738` SUCCESS** · **MW4 Delivery = INTEGRATED ON MAIN / POST-MERGE VERIFIED** (PR **#461** / CI `33753929894`) · MW4 **COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE WITH NON-BLOCKING RESERVES** · **CURRENT PRODUCT CAPABILITY = MW5 — Critical Challenge + Clarification — **COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE WITH RETAINED GOVERNANCE DEVIATION AND NON-BLOCKING RESERVES** — Morris closure decision **CONSUMED** — Delivery **INTEGRATED ON MAIN / POST-MERGE VERIFIED** — PR **#463 MERGED** · pre-merge head `642c502d649a3dad46b66ade95bdea1b5ed8b787` · squash merge `7e2f4c2799be70380362630a1c6734837cc453d9` · tree `b58cea7a8d0ddd173c1467d5a522e26a9c643fe3` · HEAD→MERGE TREE PARITY **PROVEN** · post-merge CI **`33841337376` SUCCESS** · Required Gate **PASS** · delivery branch `delivery/sfia-studio-nora-mw5-critical-challenge-clarification` **PRESERVED** · CORR-MW5-PR-01/02 **CLOSED AT TESTED DETERMINISTIC SCOPE** · CORR-MW5-CLOSURE-C5-CURRENT-TRAJECTORY-01 **CLOSED AT REVIEWED DOCUMENTARY SCOPE** · MW5-R2-REAL-03 PASS at tested scope · D-MW5-QA-SHA-01/02 CLOSED · MW0→MW5 cognitive evidence ACCEPTED BY MORRIS FOR MW5 PURPOSES · H17 FAIL = 141/100 RETAINED HISTORICAL GOVERNANCE DEVIATION · H18 INCONCLUSIVE · ZERO NEW REAL — ≠ campaign governance-compliant · ≠ Cognitive Completion PROVEN · ≠ runtime v3 ADOPTED · MW6 = CLOSURE ACCEPTED BY MORRIS / INTEGRATION PENDING · effective COMPLETE/CLOSED conditioned on exact candidate merge + required CI PASS · repository lifecycle = RESOLVE FROM CURRENT GIT / PR EVIDENCE · NEXT PRODUCT CAPABILITY GATE = GLOBAL MODEL × REASONING CAMPAIGN READINESS / QUALIFICATION — NOT AUTHORIZED / NOT STARTED · ≠ MW6 integrated on main yet · ≠ MW6 COMPLETE/CLOSED on main yet** · **Responses compaction = CANDIDATE / NOT ADOPTED** · **Production model routing = NOT SELECTED** · **Cognitive Completion = NOT PROVEN** · **runtime v3 = NON ADOPTED** · **≠ END-TO-END REAL PROVEN** · Option C **#447** · CORR-OPT-C-01…05 **CLOSED** · Runner/Fake convergence **CLOSED** · Nora legacy generic runtime retirement **CLOSED** · project Git integration **CLOSED / POST-MERGE VERIFIED** · **MW0 Option C regression/parity = PASS WITH NON-BLOCKING RESERVES — DETERMINISTIC ONLY — CHATGPT CRITICAL REVIEW PASS** · evidence Review Handoff L3 `35a2b1ae17085af09e9e59bf9bb96ddf61e02e8c` · proof ceiling **DETERMINISTIC ONLY** · historical R1/R2/R3 RETAINED / NOT RE-RUN / NOT UPGRADED · MW0-R01/R02 remain NOT_PROVEN/NB · RESERVE-OPT-C-02/03 remain OPEN/NB · MW0 remains historically CLOSED · **OD-03 = BUILD / CONSUMED** · **ADAPT-FIRST** · **NO FA REQUIRED** · **NO TA CURRENTLY REQUIRED** · **TA TRIGGER CANDIDATE** · Architecture **OPTION C TARGET ADOPTED (OD-04)** · Agents SDK Runner **TARGET ADOPTED** · Product SQLite Session **TARGET ADOPTED** · Session/model-input policy **TARGET** · Responses compaction **CANDIDATE / NOT ADOPTED** · @openai/agents / Zod **INTEGRATED ON MAIN** · **MW0 OPTION C REGRESSION / PARITY = CLOSED AS CURRENT REGRESSION GATE / PASS WITH NON-BLOCKING RESERVES / DETERMINISTIC ONLY / ChatGPT CRITICAL REVIEW PASS** · evidence Review Handoff L3 `35a2b1ae17085af09e9e59bf9bb96ddf61e02e8c` · **MW1 CLOSURE DOCUMENTARY REPOSITORY LIFECYCLE = INTEGRATED ON MAIN / POST-MERGE VERIFIED — PR #451** · head `3785e271d897af5e34e1ce34cdddfc3782ec0e52` · merge `783f7619284f9cd2309d54e7efaa092093c3671e` · tree `831c0fb66bd213afd47f701a8afe3f00da0ea351` · post-merge CI **`33499812659` SUCCESS** · Required Gate **PASS** · **MW2 READINESS = VALIDATED BY MORRIS** · **CORR-MW2-RDY-01/02 SATISFIED** · **OD-02 = CONSUMED — OPTION B** · **MW2 closure/truth-sync repository publication state = RESOLVE FROM CURRENT GIT / PR EVIDENCE** · **MW2 = COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE** · Delivery PR **#456 MERGED** · CORR PR **#457 MERGED** · post-merge CI **`33621406965` SUCCESS** · **MW3 = COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE** · Delivery PR **#459 MERGED** · merge `0220253a2c65957dc802838d71075912402f3afd` · post-merge CI **`33710122738` SUCCESS** · **MW4 Delivery INTEGRATED ON MAIN / POST-MERGE VERIFIED** · MW4 **COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE WITH NON-BLOCKING RESERVES** · **CURRENT PRODUCT CAPABILITY = MW5 — Critical Challenge + Clarification — **COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE WITH RETAINED GOVERNANCE DEVIATION AND NON-BLOCKING RESERVES** — Morris closure decision **CONSUMED** — Delivery **INTEGRATED ON MAIN / POST-MERGE VERIFIED** — PR **#463 MERGED** · pre-merge head `642c502d649a3dad46b66ade95bdea1b5ed8b787` · squash merge `7e2f4c2799be70380362630a1c6734837cc453d9` · tree `b58cea7a8d0ddd173c1467d5a522e26a9c643fe3` · HEAD→MERGE TREE PARITY **PROVEN** · post-merge CI **`33841337376` SUCCESS** · Required Gate **PASS** · delivery branch `delivery/sfia-studio-nora-mw5-critical-challenge-clarification` **PRESERVED** · CORR-MW5-PR-01/02 **CLOSED AT TESTED DETERMINISTIC SCOPE** · CORR-MW5-CLOSURE-C5-CURRENT-TRAJECTORY-01 **CLOSED AT REVIEWED DOCUMENTARY SCOPE** · MW5-R2-REAL-03 PASS at tested scope · D-MW5-QA-SHA-01/02 CLOSED · MW0→MW5 cognitive evidence ACCEPTED BY MORRIS FOR MW5 PURPOSES · H17 FAIL = 141/100 RETAINED HISTORICAL GOVERNANCE DEVIATION · H18 INCONCLUSIVE · ZERO NEW REAL — ≠ campaign governance-compliant · ≠ Cognitive Completion PROVEN · ≠ runtime v3 ADOPTED · MW6 = CLOSURE ACCEPTED BY MORRIS / INTEGRATION PENDING · effective COMPLETE/CLOSED conditioned on exact candidate merge + required CI PASS · repository lifecycle = RESOLVE FROM CURRENT GIT / PR EVIDENCE · NEXT PRODUCT CAPABILITY GATE = GLOBAL MODEL × REASONING CAMPAIGN READINESS / QUALIFICATION — NOT AUTHORIZED / NOT STARTED · ≠ MW6 integrated on main yet · ≠ MW6 COMPLETE/CLOSED on main yet** · next capability after MW4 delivery = **MW5 — Critical Challenge + Clarification readiness — NOT AUTHORIZED / NOT STARTED** · **≠** END-TO-END REAL PROVEN · **≠** Cognitive Completion PROVEN · **≠** runtime v3 ADOPTED · next capability after MW4 delivery = **MW5 — Critical Challenge + Clarification readiness — NOT AUTHORIZED / NOT STARTED** · **≠** REAL-B AUTHORIZED · **≠** REAL-B STARTED · **≠** READY FOR REAL · **≠** runtime v3 ADOPTED · **≠** FinOps/T7 unfrozen · **≠** MW1 complete · **≠** Option C REAL parity PROVEN · **≠** ChatGPT↔Cursor parity PROVEN · **≠** READY FOR REAL from D0 alone · **≠** TA REQUIRED · **≠** Cognitive Completion PROVEN · **≠** Responses compaction adopted · Runner/Session = TARGET ADOPTED |
+| **Gates courants** | C1…C6 **INTEGRATED / C6 CLOSED** · W1 **CLOSED** · **W2 CLOSED BY MORRIS** · **W3 CLOSED BY MORRIS** · **W3-A/B/C CLOSED BY MORRIS** · **W3-D INTEGRATED AND PROVEN** · **W4 PRESENTATION INTEGRATED** (PR **#420**) · **W4-C CLOSED BY MORRIS** (PR **#422**) · **W4 CLOSED BY MORRIS** · **W4 POST-CLOSURE TRUTH SYNC INTEGRATED** (PR **#423**) · **Product Completion Final Qualification INTEGRATED** (PR **#426** / merge `19349d024…` / CI `33082002188`) · **Product Completion = COMPLETE / CLOSED BY MORRIS** · Final Qualification **PASS WITH NON-BLOCKING RESERVES / CONSUMED** · C1 completion bar **SATISFIED** · PC-BAR-01→10 **PASS** · Integrated E2E **7/7** · genericity delivery+security **PROVEN** · restart A+B **PROVEN** · PCQA-BLK-01 **CLOSED BY EVIDENCE** · PCQA-R01 **NON_BLOCKING** · W3A-D03 **OPEN_CARRY_NON_BLOCKING** · W2-CL-R04 **OPEN_CARRY_NON_BLOCKING** · PB-RES-REAL-01 **TRACE_ONLY** · **REAL-A = COMPLETE / CONSUMED / PASS WITH PARITY GAPS** · RA-06 **OPEN NON_BLOCKING** · RA-07 **OPEN PARITY GAP NON_BLOCKING** · FinOps/T7 **FREEZE** · runtime v3 **NON ADOPTED** · **ACTIVE CONSTRUCTION PRIORITY = NORA COGNITIVE COMPLETION** · **NORA C5 = CONTENT VALIDATED BY MORRIS / INTEGRATED ON MAIN / POST-MERGE VERIFIED** · MW0→MW6 **VALIDATED NORA CONSTRUCTION BACKLOG** · **REAL-B = QUALIFIED CANDIDATE / DEFERRED / PRESERVED / NOT AUTHORIZED / NOT STARTED** · **OD-07 CONSUMED** · **OD-03 = BUILD / CONSUMED** · OD-02 **CONSUMED — OPTION B** · OD-05/06/08 **OPEN** · **OD-04 = CONSUMED** · Architecture **OPTION C TARGET ADOPTED (OD-04)** · @openai/agents / Zod **INTEGRATED ON MAIN** (PR **#447**) · Option C runtime implementation **INTEGRATED ON MAIN / POST-MERGE VERIFIED** (PR **#447**) · **MW0 Readiness = PASS / CLOSED** · **MW0 Delivery = INTEGRATED ON MAIN / POST-MERGE VERIFIED** · **MW0 EXIT = PROVEN WITH NON-BLOCKING RESERVES** · MW0-R01/R02 **NOT_PROVEN / NON-BLOCKING** · CORR-MW0-05/06/07/08 **CLOSED** · Cognitive Completion **NOT PROVEN** · **MW1 = MEMORY B + COMPACTION** · **MW1 Readiness = PASS / VALIDATED BY MORRIS** · **MW1 = COMPLETE / CLOSED BY MORRIS** at proven MW1 scope · **MW1 Delivery = INTEGRATED ON MAIN / POST-MERGE VERIFIED** (PR **#450 MERGED** · head `dd21ab45a3a8ce2090b7a193e76c1d92e0a5cc02` · merge `d09e21485343ce04703fb7a013b7ad84e5ab392c` · tree `2679810b4a8eaee6fcc9460dab43c123baecf327` · post-merge CI **`33480454434` SUCCESS** · Required Gate **PASS**) · **MW1 Final Deterministic Proof = PASS** · **MW1 REAL BOUNDARY = PROVEN** (MW1-REAL-01/CORR-01 · handoff `bcc607ae08bc419188505f91d6bbf7f947660671` · campaign `mw1-real-boundary-corr01-1788253662383` · evidence SHA256 `de149e12621f2f003da5f935d6c467574ea8f70a7079ae8aea16c919054b0678`) · **MW1-S01 = CLOSED / REAL BOUNDARY PROVEN** · **MW1-S02 = CLOSED / REAL BOUNDARY PROVEN** (current governed compaction/model-input boundary) · **MW1-S03 = CLOSED / REAL BOUNDARY PROVEN** (current governed materialization boundary) · **MW0×MW1 REAL integration proven on current F1 path** · **historical REAL-B candidate preserved as provenance** · MW1 REAL-01/CORR-01 executed under later Morris authorization · **MW1 CLOSURE DOCUMENTARY REPOSITORY LIFECYCLE = INTEGRATED ON MAIN / POST-MERGE VERIFIED — PR #451** · head `3785e271d897af5e34e1ce34cdddfc3782ec0e52` · merge `783f7619284f9cd2309d54e7efaa092093c3671e` · tree `831c0fb66bd213afd47f701a8afe3f00da0ea351` · post-merge CI **`33499812659` SUCCESS** · Required Gate **PASS** · **MW2 READINESS = VALIDATED BY MORRIS** · **CORR-MW2-RDY-01/02 SATISFIED** · **OD-02 = CONSUMED — OPTION B** · **MW2 closure/truth-sync repository publication state = RESOLVE FROM CURRENT GIT / PR EVIDENCE** · **MW2 = COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE** · Delivery PR **#456 MERGED** · CORR PR **#457 MERGED** · post-merge CI **`33621406965` SUCCESS** · **MW3 = COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE** · Delivery PR **#459 MERGED** · merge `0220253a2c65957dc802838d71075912402f3afd` · post-merge CI **`33710122738` SUCCESS** · **MW4 Delivery = INTEGRATED ON MAIN / POST-MERGE VERIFIED** (PR **#461** / CI `33753929894`) · MW4 **COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE WITH NON-BLOCKING RESERVES** · **CURRENT PRODUCT CAPABILITY = MW5 — Critical Challenge + Clarification — **COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE WITH RETAINED GOVERNANCE DEVIATION AND NON-BLOCKING RESERVES** — Morris closure decision **CONSUMED** — Delivery **INTEGRATED ON MAIN / POST-MERGE VERIFIED** — PR **#463 MERGED** · pre-merge head `642c502d649a3dad46b66ade95bdea1b5ed8b787` · squash merge `7e2f4c2799be70380362630a1c6734837cc453d9` · tree `b58cea7a8d0ddd173c1467d5a522e26a9c643fe3` · HEAD→MERGE TREE PARITY **PROVEN** · post-merge CI **`33841337376` SUCCESS** · Required Gate **PASS** · delivery branch `delivery/sfia-studio-nora-mw5-critical-challenge-clarification` **PRESERVED** · CORR-MW5-PR-01/02 **CLOSED AT TESTED DETERMINISTIC SCOPE** · CORR-MW5-CLOSURE-C5-CURRENT-TRAJECTORY-01 **CLOSED AT REVIEWED DOCUMENTARY SCOPE** · MW5-R2-REAL-03 PASS at tested scope · D-MW5-QA-SHA-01/02 CLOSED · MW0→MW5 cognitive evidence ACCEPTED BY MORRIS FOR MW5 PURPOSES · H17 FAIL = 141/100 RETAINED HISTORICAL GOVERNANCE DEVIATION · H18 INCONCLUSIVE · ZERO NEW REAL — ≠ campaign governance-compliant · ≠ Cognitive Completion PROVEN · ≠ runtime v3 ADOPTED · MW6 = COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE — INTEGRATED ON MAIN / POST-MERGE VERIFIED (PR #465 / `d3fee38b270d805144e621804b96ef1e5de3e208` / CI `33958548479`) · Stage A deterministic harness = INTEGRATED ON MAIN / POST-MERGE VERIFIED (PR #467 / `1dd5d67ad942c448becd637f4c2e55883d16ffca` / CI `33981467237`) · integrated main still carries historical v2 envelope 72/405/429 until Option C integration · LOCAL Option C candidate = 78/438/464 · NEXT PRODUCT CAPABILITY GATE = ChatGPT Critical Review of Option C → Morris technical+financial+Git GO · Stage A REAL NOT AUTHORIZED · ≠ Stage A REAL AUTHORIZED · ≠ MW6 END-TO-END REAL global · ≠ Cognitive Completion PROVEN · ≠ runtime v3 ADOPTED · ≠ production routing SELECTED** · **Responses compaction = CANDIDATE / NOT ADOPTED** · **Production model routing = NOT SELECTED** · **Cognitive Completion = NOT PROVEN** · **runtime v3 = NON ADOPTED** · **≠ END-TO-END REAL PROVEN** · Option C **#447** · CORR-OPT-C-01…05 **CLOSED** · Runner/Fake convergence **CLOSED** · Nora legacy generic runtime retirement **CLOSED** · project Git integration **CLOSED / POST-MERGE VERIFIED** · **MW0 Option C regression/parity = PASS WITH NON-BLOCKING RESERVES — DETERMINISTIC ONLY — CHATGPT CRITICAL REVIEW PASS** · evidence Review Handoff L3 `35a2b1ae17085af09e9e59bf9bb96ddf61e02e8c` · proof ceiling **DETERMINISTIC ONLY** · historical R1/R2/R3 RETAINED / NOT RE-RUN / NOT UPGRADED · MW0-R01/R02 remain NOT_PROVEN/NB · RESERVE-OPT-C-02/03 remain OPEN/NB · MW0 remains historically CLOSED · **OD-03 = BUILD / CONSUMED** · **ADAPT-FIRST** · **NO FA REQUIRED** · **NO TA CURRENTLY REQUIRED** · **TA TRIGGER CANDIDATE** · Architecture **OPTION C TARGET ADOPTED (OD-04)** · Agents SDK Runner **TARGET ADOPTED** · Product SQLite Session **TARGET ADOPTED** · Session/model-input policy **TARGET** · Responses compaction **CANDIDATE / NOT ADOPTED** · @openai/agents / Zod **INTEGRATED ON MAIN** · **MW0 OPTION C REGRESSION / PARITY = CLOSED AS CURRENT REGRESSION GATE / PASS WITH NON-BLOCKING RESERVES / DETERMINISTIC ONLY / ChatGPT CRITICAL REVIEW PASS** · evidence Review Handoff L3 `35a2b1ae17085af09e9e59bf9bb96ddf61e02e8c` · **MW1 CLOSURE DOCUMENTARY REPOSITORY LIFECYCLE = INTEGRATED ON MAIN / POST-MERGE VERIFIED — PR #451** · head `3785e271d897af5e34e1ce34cdddfc3782ec0e52` · merge `783f7619284f9cd2309d54e7efaa092093c3671e` · tree `831c0fb66bd213afd47f701a8afe3f00da0ea351` · post-merge CI **`33499812659` SUCCESS** · Required Gate **PASS** · **MW2 READINESS = VALIDATED BY MORRIS** · **CORR-MW2-RDY-01/02 SATISFIED** · **OD-02 = CONSUMED — OPTION B** · **MW2 closure/truth-sync repository publication state = RESOLVE FROM CURRENT GIT / PR EVIDENCE** · **MW2 = COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE** · Delivery PR **#456 MERGED** · CORR PR **#457 MERGED** · post-merge CI **`33621406965` SUCCESS** · **MW3 = COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE** · Delivery PR **#459 MERGED** · merge `0220253a2c65957dc802838d71075912402f3afd` · post-merge CI **`33710122738` SUCCESS** · **MW4 Delivery INTEGRATED ON MAIN / POST-MERGE VERIFIED** · MW4 **COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE WITH NON-BLOCKING RESERVES** · **CURRENT PRODUCT CAPABILITY = MW5 — Critical Challenge + Clarification — **COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE WITH RETAINED GOVERNANCE DEVIATION AND NON-BLOCKING RESERVES** — Morris closure decision **CONSUMED** — Delivery **INTEGRATED ON MAIN / POST-MERGE VERIFIED** — PR **#463 MERGED** · pre-merge head `642c502d649a3dad46b66ade95bdea1b5ed8b787` · squash merge `7e2f4c2799be70380362630a1c6734837cc453d9` · tree `b58cea7a8d0ddd173c1467d5a522e26a9c643fe3` · HEAD→MERGE TREE PARITY **PROVEN** · post-merge CI **`33841337376` SUCCESS** · Required Gate **PASS** · delivery branch `delivery/sfia-studio-nora-mw5-critical-challenge-clarification` **PRESERVED** · CORR-MW5-PR-01/02 **CLOSED AT TESTED DETERMINISTIC SCOPE** · CORR-MW5-CLOSURE-C5-CURRENT-TRAJECTORY-01 **CLOSED AT REVIEWED DOCUMENTARY SCOPE** · MW5-R2-REAL-03 PASS at tested scope · D-MW5-QA-SHA-01/02 CLOSED · MW0→MW5 cognitive evidence ACCEPTED BY MORRIS FOR MW5 PURPOSES · H17 FAIL = 141/100 RETAINED HISTORICAL GOVERNANCE DEVIATION · H18 INCONCLUSIVE · ZERO NEW REAL — ≠ campaign governance-compliant · ≠ Cognitive Completion PROVEN · ≠ runtime v3 ADOPTED · MW6 = COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE — INTEGRATED ON MAIN / POST-MERGE VERIFIED (PR #465 / `d3fee38b270d805144e621804b96ef1e5de3e208` / CI `33958548479`) · Stage A deterministic harness = INTEGRATED ON MAIN / POST-MERGE VERIFIED (PR #467 / `1dd5d67ad942c448becd637f4c2e55883d16ffca` / CI `33981467237`) · integrated main still carries historical v2 envelope 72/405/429 until Option C integration · LOCAL Option C candidate = 78/438/464 · NEXT PRODUCT CAPABILITY GATE = ChatGPT Critical Review of Option C → Morris technical+financial+Git GO · Stage A REAL NOT AUTHORIZED · ≠ Stage A REAL AUTHORIZED · ≠ MW6 END-TO-END REAL global · ≠ Cognitive Completion PROVEN · ≠ runtime v3 ADOPTED · ≠ production routing SELECTED** · next capability after MW4 delivery = **MW5 — Critical Challenge + Clarification readiness — NOT AUTHORIZED / NOT STARTED** · **≠** END-TO-END REAL PROVEN · **≠** Cognitive Completion PROVEN · **≠** runtime v3 ADOPTED · next capability after MW4 delivery = **MW5 — Critical Challenge + Clarification readiness — NOT AUTHORIZED / NOT STARTED** · **≠** REAL-B AUTHORIZED · **≠** REAL-B STARTED · **≠** READY FOR REAL · **≠** runtime v3 ADOPTED · **≠** FinOps/T7 unfrozen · **≠** MW1 complete · **≠** Option C REAL parity PROVEN · **≠** ChatGPT↔Cursor parity PROVEN · **≠** READY FOR REAL from D0 alone · **≠** TA REQUIRED · **≠** Cognitive Completion PROVEN · **≠** Responses compaction adopted · Runner/Session = TARGET ADOPTED |
 | **Intégration Git** | **C2 :** PR #369 / head `3c78c6763d0d090bdc38f3866ecd71ed6be219d0` / merge `2406ccda211842fc7f8da3699bb186a30f7dc105` · **Post-merge sync :** PR #370 (integration vehicle · Git evidence authoritative) · CI SFIA Studio **#222** SUCCESS (PR head) · post-merge CI **#223** SUCCESS · source branch `docs/sfia-studio-product-completion-c2-integration-clean` **PRESERVED** · historical unauthorized branch `docs/sfia-studio-product-completion-c2-functional-design` @ `780ab4c5` **PRESERVED FOR AUDIT** · Gouvernance : PR #334 / merge `1d09e4159932b3885817911e10a2d29a82ae9ea7` · **M1 :** PR #337 / head `5cbda862885b36658fc7f2b33a20311611da969e` / merge `c6925954a7aa86f34c9fcd6f7babf0336014eba3` · CI SFIA Studio **#158** SUCCESS · **M2 :** PR #339 / head `8a920a4726f3ef41a8660ef6fb0b5be88a7d8e51` / merge `a9a4765c242948f2287392a2910fb1cd30061a7a` · CI SFIA Studio **#162** SUCCESS · **M2 post-merge Roadmap :** PR #340 / merge `4a8a6121f8c46b60a3e4bd760e04c6dd4a64fd0a` · **M3 :** PR #341 / head `5ec6aaa5fe9b75a1a6cec0520a4e32ecf3226b19` / merge `8eea4cbf211d9e159626394477353f19126fe900` · CI SFIA Studio **#166** SUCCESS · **M3 post-merge Roadmap :** PR #342 / merge `607763d9a1349d6b48633d8763f75ae3c07c84fc` · **M4 Architecture docs :** PR #343 / merge `e974b7306f7400249c31399fd2890d5817833dbf` · **M4 Delivery :** PR #344 / head `f7270b21ccdbcf1cd543879e7c4120d87b874479` / merge `ec65fb47c04b451d892297c806b9b041995339a5` · CI SFIA Studio **#172** SUCCESS (same head `f7270b21` after Morris-authorized rerun ; initial T7-C08 Class C / M4 causality not established — diagnostic handoff `bf4928389fd1ec50ecf2cf2d485bfbd2d7d3ba63` ; no code change between failure and success) · **M4 post-Delivery Roadmap :** PR #345 / merge `3575c8863d8a13b610dbfde96a33426a620b2c56` · **M4 pre-reproof bounding :** PR #346 / head `8900cd06be195b2dd9fa154a7153608fdde6f9a3` / merge `fc7e20aaeb5153b4d73c1809f865e361f00e1b34` · CI SFIA Studio **#176** SUCCESS · ZERO REAL in bounding integration · **M4 post-pre-reproof Roadmap :** PR #347 / merge `2d1361ee71bec7a21f6f76efc7c33eaf3146802a` · CI SFIA Studio **#178** SUCCESS · **M4 GOVERNED REAL COMPLETION PROOF** handoff `1123a30f2261756a2ec744ee002ec023b7fea0af` · GO Morris **ACCEPT M4 EXIT PROOF + CLOSE M4 — NO M5 EXECUTION** · **M4 closure Roadmap :** PR #348 / merge `5132f1bc2c147b2c7ebf6d331c04b1c6b1bd047e` · **M5 Entry Qualification** handoff `63f41e3f328868286c14312a58a7b79f850383c0` · GO Morris **ADOPT M5 ARCHITECTURE TRAJECTORY — M5-A OPTION B — M5-B W1 — M5-C KEEP TEMPORARY WITH EXIT — NO REAL — NO DELIVERY** · GO Morris **SYNC M5 ARCHITECTURE DECISION INTO CONVERGENCE ROADMAP — NO REAL — NO DELIVERY** · **M5 Delivery (Option B + W1) :** PR #350 / head `17461dad78f92a3d5e5e1d9bd36aa20d1e86ac11` / merge `8f753218e4fff7d68d78c1d57e9c3e8fb7e60943` · CI SFIA Studio **#184** SUCCESS · post-merge CI **#185** SUCCESS · **M5 UI/Nora durable rehydrate :** PR #351 / head `ced7b172969c27b5e2d6fda06e9caa8c84e1e0d7` / merge `d8961f1d85a98b5d4185f007f16ddac209e2e557` · CI SFIA Studio **#186** SUCCESS · post-merge CI **#187** SUCCESS · M5 exit re-evaluation handoff `54b0f5b43a50861c26226aa3ffc06460f8ffbafe` · blob `131c85172bbd6370a3edcd71347a64932c9303ab` · M5 EXIT PROOF **SATISFIED ON MAIN** · **M5 capitalization / Roadmap sync :** PR #352 / head `c26824c602ec041cb1d40e9078191c0f1cde4e95` / merge `3467ecdf74ac2010c45f34545fb8684563dea547` · CI SFIA Studio PR run **#31875337665** SUCCESS · post-merge CI run **#31875621317** SUCCESS · post-merge handoff `0121e184c936f8dc73ffe80e20d43027fec495d7` · blob `4c293ae07a0d516b16d6dd2d4087d3e25858e275` · GO Morris **ACCEPT M5 EXIT PROOF + CLOSE M5 — KEEP M5-C TECHNICAL JOURNAL — ZERO REAL — NO M6 EXECUTION — RUNTIME V3 NON ADOPTED — NO BRANCH DELETE** · M5 EXIT PROOF **ACCEPTED BY MORRIS** · M5 **CLOSED** · User wording **« ok go pour la modification »** · governed interpretation **ALIGN M5 CLOSURE ROADMAP WITH PRE-M6 USER JOURNEY / UX BASELINE TRAJECTORY — KEEP M5 CLOSED — KEEP M5-C — NO UX DESIGN EXECUTION YET — NO FIGMA ACTION YET — NO UI DELIVERY — NO M6 — ZERO REAL — NO PROJECT GIT WRITE** · **M5 closure / Pre-M6 sequencing Roadmap :** PR #353 / title `docs(sfia-studio): close M5 and sequence Pre-M6 UX baseline` / base `3467ecdf74ac2010c45f34545fb8684563dea547` / head `7a744c8cec889be547eebe231279620189819dd0` / merge `2f0d7236e4e1b7c7ca8e987b9d4e6e3ece3c37a7` — records M5 closure + inserts Pre-M6 before M6 · **≠** Slice A candidate (Slice A is later local work) · PRE-M6 USER JOURNEY / UX BASELINE = **FUNCTIONAL BASELINE + GAP READINESS COMPLETE · G-UX-15 EXIT PROOF ACCEPTED / TECHNICAL BLOCKER CLOSED · LOCAL CANDIDATE NOT YET ON MAIN · FIGMA/UI DELIVERY NOT AUTHORIZED** · **G-UX-15 Slice A controlled integration :** PR #354 / title `feat(sfia-studio): close Pre-M6 G-UX-15 execution wiring gap` / base `2f0d7236e4e1b7c7ca8e987b9d4e6e3ece3c37a7` / head `22ae8e5e4bddb0f997384a5e8ba87c9b35245693` / merge `a6df83a640afeb0911cb572d118d27a03c9923a7` · CI SFIA Studio **#192** SUCCESS · post-merge main CI **#193** SUCCESS · post-merge truth **PASS** (exact 5-file SHAs on main) · feature branch **PRESERVED** (no delete) · **Cycle 14 docs sync :** PR #355 / title `docs(sfia-studio): sync Pre-M6 G-UX-15 post-merge current state` / merge `dd284e9f20de89b2c8fc7782e4177d0d125c24d2` — **MERGED ON MAIN** · **historique :** OPEN / DRAFT avant merge · **Cycle 15 visual adoption docs integration :** PR #356 / title `docs(sfia-studio): record Pre-M6 visual contract adoption` / head `3a93d0e5cfd86e46bb795ce22c0f7dd79078ef2a` / merge `50f31994b0d9b5a3a3514e2fa9a063d688071c50` — **MERGED ON MAIN** · CI SFIA Studio **#198** SUCCESS on final PR head · post-merge main CI **#199** SUCCESS · post-merge truth **PASS** · source branch **PRESERVED** (NO BRANCH DELETE) · **historique :** OPEN / DRAFT avant merge · **D-PRE-M6-UX-05 :** ADOPTED AS PRE-M6 VISUAL REFERENCE ON MAIN (Freeze `uUdLBElF2B4dOefaAYt4QY`) — UI Delivery still **NOT AUTHORIZED** · **Cycle 14 PR #356 post-merge current-state sync :** PR #357 / title `docs(sfia-studio): sync PR 356 post-merge current state` / head `70643624c494f16fb91e3bede772a80f4eece783` / merge `b834fdd40d3e7028e80cf7b388b93df2f31e18e4` — **MERGED ON MAIN** · CI SFIA Studio **#200** SUCCESS on PR head · post-merge CI **#201** SUCCESS · source branch **PRESERVED** · **historique :** OPEN / DRAFT avant merge · **PRE-M6 UI DELIVERY GATE / SCOPE QUALIFICATION :** **COMPLETE** — Review Handoff `2577776360c8a5a3492806b447d4bf88f0239898` / blob `9084a97b368472aaaa7ab61f85baf2efcb819e51` — verdict READY FOR MORRIS DELIVERY DECISION (**≠** UI Delivery authorized) — OPTION A = RECOMMENDATION AWAITING MORRIS DECISION *(historique qualification)* · **Cycle 15 Pre-M6 UI gap + CKC trajectory Roadmap :** PR #358 / title `docs(sfia-studio): record Pre-M6 UI gap and CKC trajectory` / head `c91ce1afd498ef9a5275e3b90509e7a045f240a0` / merge `0a80b92cb2c05f5b3f001438988b52c07c3bf0b6` — **MERGED ON MAIN** · CI SFIA Studio **#202** SUCCESS on PR head · post-merge CI **#203** SUCCESS · source branch **PRESERVED** · **historique :** OPEN / DRAFT avant merge · GO Morris **ADOPT PRE-M6 UI DELIVERY SCOPE OPTION A** (user « bon ok go option A ») — OPTION A = **ADOPTED BY MORRIS AS PRE-M6 UI DELIVERY SCOPE** · OPTION A SCOPE ADOPTED **≠** UI DELIVERY EXECUTION AUTHORIZED · NEXT PRODUCT GATE *(historique jusqu’à PR #361)* = **MORRIS PRE-M6 UI DELIVERY EXECUTION AUTHORIZATION — OPTION A** · **PR #359** Option A adoption sync **MERGED** (`0d33478…`) · **PR #360** fake-real progressive proof **MERGED** (`a3ac418…`) · **PRE-M6 PRODUCT VERTICAL SLICE :** PR #361 / title `feat(sfia-studio): consolidate Pre-M6 product vertical slice` / head `3c4c478d7664c6111f38e6c4f49e98042e3a8473` / merge `a53c323e47e5fae1d35671f3ae232609a59b0f3f` — **MERGED ON MAIN** · post-merge CI run **`32122892559` SUCCESS** · source branch `delivery/sfia-studio-pre-m6-ui-option-a` **PRESERVED** · GO Morris **PR #361 READY + MERGE — PRESERVE SOURCE BRANCH — THEN POST-MERGE VALIDATION** · **MORRIS DECISION — CURRENT SFIA STUDIO VERTICAL SLICE ON MAIN IS THE FUNCTIONAL MVP BASELINE FOR THE PRODUCT COMPLETION TRAJECTORY — REUSE EXISTING BACKBONE — DO NOT RESTART FROM ZERO — RUNTIME V3 REMAINS NON ADOPTED** · **MORRIS DECISION — ACCEPT PRE-M6 EXIT FOR PRODUCT-TRAJECTORY PURPOSES WITH GOVERNED DEBT — CURRENT MAIN VERTICAL SLICE IS THE SFIA STUDIO FUNCTIONAL MVP BASELINE FOR PRODUCT COMPLETION — CARRY UAT-UX-06 / UAT-RECOVERY-03 / V3-F10 / PROCESS-LOCAL DURABILITY / N7 AS GOVERNED DEBT — RUNTIME V3 REMAINS NON ADOPTED** · PRE-M6 EXIT = **ACCEPTED FOR PRODUCT-TRAJECTORY PURPOSES WITH GOVERNED DEBT** · PRE-M6 **≠ COMPLETE WITHOUT RESERVES** · NEXT PRODUCT GATE = **GO MORRIS — CYCLE 1 CADRAGE — SFIA STUDIO PRODUCT COMPLETION FROM MVP** (consumable only after this documentation is integrated on main · **NOT AUTHORIZED now**) · NEXT REPOSITORY GATE = **MORRIS REVIEW — PRODUCT COMPLETION REBASELINE DRAFT PR — NO MERGE UNTIL EXPLICIT GO** |
 | **Sources** | Git `main` @ `a53c323e47e5fae1d35671f3ae232609a59b0f3f` · PR #337/#339/#340/#341/#342/#343/#344/#345/#346/#347/#348/#349/#350/#351/#352/#353/#354/#355/#356/#357/#358/#359/#360/#361 · CI #158/#162/#166/#172/#176/#178/#184/#185/#186/#187/#192/#193/#197/#198/#199/#200/#201/#202/#203 · Pre-M6 UI Delivery qualification handoff `2577776360c8a5a3492806b447d4bf88f0239898` / blob `9084a97b368472aaaa7ab61f85baf2efcb819e51` · GO Morris **ADOPT PRE-M6 UI DELIVERY SCOPE OPTION A** · PR #352 CI run #31875337665 / post-merge #31875621317 · decision pack G0 · framing `30`–`37` (dont `34`) · M4 Architecture Handoff `sfia/review-handoff` @ `366726945f8f533d958c82b7251edb1a5a4b45f0` · M4 CI diagnostic handoff `bf4928389fd1ec50ecf2cf2d485bfbd2d7d3ba63` · FIRST REAL handoff `2234931e682bfede4b8515fd1ede7c2e1e2d2d01` · timeout diagnosis handoff `797daeccfa2ec445a1ecaf10f042de635cb1fe21` · pre-reproof bounding handoffs `3c56cb29367268231c1db26b4de7af5cfe0ef499` / `9ffce8cc4a78f15af322d4fb4aab8bf63896ff6c` · final M4 governed REAL completion handoff `1123a30f2261756a2ec744ee002ec023b7fea0af` · D-PRE-M6-UX-05 visual review handoff `69106c82024158889f77e9d31508a222ea5f3a0f` / blob `3593ddbdc286cd244790f0ca1d2c421128202c5c` · GO Morris **ADOPT M4 ARCHITECTURE TRAJECTORY** (D-M4-01→05) · GO Morris **M4 Delivery** / **MERGE PR #344** · GO Morris **FIRST M4 CURSOR REAL** · GO Morris **DIAGNOSE TIMEOUT** · GO Morris **PRE-REPROOF BOUNDING** / **MERGE PR #346** · GO Morris **ACCEPT M4 EXIT PROOF + CLOSE M4 — NO M5 EXECUTION** · PR #348 / merge `5132f1bc2c147b2c7ebf6d331c04b1c6b1bd047e` · M5 Entry Qualification handoff `63f41e3f328868286c14312a58a7b79f850383c0` · GO Morris **ADOPT M5 ARCHITECTURE TRAJECTORY — M5-A OPTION B — M5-B W1 — M5-C KEEP TEMPORARY WITH EXIT — NO REAL — NO DELIVERY** · GO Morris **SYNC M5 ARCHITECTURE DECISION INTO CONVERGENCE ROADMAP — NO REAL — NO DELIVERY** · GO Morris **VALIDATE D-PRE-M6-UX-05 FIGMA VISUAL CONTRACT — ADOPT AS PRE-M6 VISUAL REFERENCE** · M4 Product path on main `projects/sfia-studio/app/**` |
-| **Anti-claims** | G0-A/G0-B **consommés** · M1–M3 **mergés** · M3 exit proof **SATISFIED** · M4 exit proof **ACCEPTED BY MORRIS** · M4 **CLOSED** · M5 Entry Qualification **COMPLETE** · M5 architecture trajectory **ADOPTED BY MORRIS** · M5 Delivery **IMPLEMENTED ON MAIN** (PR #350) · M5 UI rehydrate **IMPLEMENTED ON MAIN** (PR #351) · M5 technical/functional exit proof **SATISFIED ON MAIN** · M5 EXIT PROOF **ACCEPTED BY MORRIS** · M5 **CLOSED** · M5 CLOSED **≠** M6 AUTHORIZED · M5 CLOSED **≠** M6 STARTED · M5 CLOSED **≠** runtime v3 ADOPTED · M5 CLOSED **≠** global v3 baseline promoted · M5 CLOSED **≠** M5-C retired · M5 exit accepted **≠** global Cursor REAL authorization · M5 CLOSED future **≠** M6 automatically authorized · Pre-M6 trajectory decided **≠** Pre-M6 UX qualification executed · **D-PRE-M6-UX-05 ADOPTED AS PRE-M6 VISUAL REFERENCE ≠ UI Delivery authorized ≠ runtime implemented ≠ browser/product E2E proven ≠ Figma/runtime aligned ≠ WCAG compliant ≠ Pre-M6 complete ≠ historical UI retired** · Accepted M-03/M-04/provenance reserves ≠ reserves closed · new UX baseline **≠** runtime rewrite · existing UI not canonical **≠** existing UI automatically deleted · UI asset audit **COMPLETE/CLASSIFIED** **≠** individual dispositions ADOPTED · existing UI audit **≠** REPLACE/retirement authorized · M1→M5 runtime KEEP **≠** all runtime complete · Pre-M6 user proof **≠** runtime v3 ADOPTED · M6 after Pre-M6 **≠** M6 automatically authorized · Validated UX decisions in framing **30/37** (CC-D01) prevail over older candidate wording in framing **11** · M5-A OPTION B **IMPLEMENTED ON MAIN** · M5-B W1 **IMPLEMENTED ON MAIN** · M5-B W1 factual write-back **≠** Recommendation becomes Decision · Recommendation **≠** HumanDecision · Recommendation **≠** gate consumed · Recommendation **≠** ExecutionAuthority · LPS factual evidence link **≠** structural trajectory validation · readback **≠** execution · remount UI visibility **≠** automatic next-cycle launch · M5-C KEEP TEMPORARY WITH EXIT **≠** technical journal retired · durable Product Attempt **≠** technical M4 journal automatically obsolete · M5 implementation **≠** runtime v3 ADOPTED · M5 implementation **≠** global v3 baseline promoted · M5 ZERO REAL **≠** global Cursor REAL authorization · M5 architecture ADOPTED **≠** M6 started · M4 CLOSED **≠** runtime v3 ADOPTED · one bounded successful REAL completion **≠** global Cursor REAL safety for arbitrary capabilities/tasks · strict runtime read-only proof applies to the **demonstrated M4 bounded path**, not arbitrary future Cursor tasks · timeout 60000 **proven sufficient for demonstrated M4 bounded RO path** **≠** universal Cursor REAL timeout policy · FIRST REAL historical timeout **≠** timeout proven defective · `CURSOR_REAL_TIMEOUT_POLICY` OPEN / NON-BLOCKING **unchanged by M5 architecture decision** **≠** M4/M5 reopened · technical launch journal **≠** Product Store · Critical Ack/Auth.js future IAM **≠** required retroactively for M4 first low-risk RO path · v3 global baseline **NOT PROMOTED** · runtime v3 **NON ADOPTED** · ≠ full OA durable · G-UX-15 technical blocker **CLOSED BY MORRIS** ≠ Pre-M6 complete · G-UX-15 exit proof accepted ≠ browser/product E2E proven · fixture-safe proof accepted ≠ REAL proof · G-UX-15 Slice A **MERGED ON MAIN** (PR #354) ≠ Pre-M6 complete · merged on main ≠ product/browser E2E proven · merged on main ≠ UI Delivery/M6 authorized · Pre-M6 progress ≠ M6 authorized · Confirmation process-local = KEEP RESERVE *(HISTORICAL Pre-M6 / G-UX-15)* · **SUPERSEDED for Confirmation by W1 selective durability** · **≠** restart-safe Confirmation as full envelope · **PR #356 MERGED ≠ UI Delivery authorized** · CI #197/#198/#199 SUCCESS ≠ Pre-M6 complete ≠ UI Delivery authorized · post-merge truth PASS ≠ UI Delivery gate consumed · UI Delivery qualification COMPLETE ≠ UI Delivery authorized · **Option A SCOPE ADOPTED BY MORRIS ≠ UI Delivery execution authorized** · gap treatment adopted as scope ≠ gap closed · G-UX-08 deferred ≠ G-UX-08 closed · G-UX-09 accepted ≠ Conversation durable · Confirmation KEEP *(historical Pre-M6)* ≠ restart-safe · G-UX-11 planned ≠ browser E2E proven · M7 CKC 15/15 future ≠ CKC complete now ≠ CKC Delivery authorized · 4 pilots + 11 fallback ≠ CKC system complete · CKC→v2.6 capitalization option ≠ v2.6 modification decided · CKC validation future ≠ runtime v3 ADOPTED · PR #357 MERGED ≠ UI Delivery authorized · CI #201 SUCCESS ≠ Pre-M6 complete · PR #358 MERGED ≠ UI Delivery authorized · CI #202/#203 SUCCESS ≠ Pre-M6 complete ≠ Delivery authorized · Option A scope adopted ≠ Delivery GO consumed · Execution Authorization IS the Delivery GO ≠ second Delivery GO required · G-UX-11 E2E exit proof ≠ Delivery entry prerequisite · global v3 baseline **NOT PROMOTED** · **PR #361 MERGED ≠ PRE-M6 COMPLETE ≠ PRE-M6 EXIT ACCEPTED ≠ runtime v3 ADOPTED ≠ M6 AUTHORIZED ≠ M7 AUTHORIZED ≠ CKC 15/15 COMPLETE ≠ generic Cursor write/dev/commit/push/PR proven** · **MVP FUNCTIONAL BASELINE ≠ produit final ≠ UX finale ≠ production-ready ≠ generic ExecutionContract complete** · Product Completion trajectory recorded **≠** Cycle 1 Cadrage authorized **≠** Delivery authorized · PRE-M6 requalification **≠** PRE-M6 CLOSED · **PRE-M6 EXIT ACCEPTED FOR PRODUCT-TRAJECTORY PURPOSES WITH GOVERNED DEBT ≠ PRE-M6 COMPLETE ≠ PRE-M6 all gaps closed ≠ runtime v3 ADOPTED ≠ M6 STARTED ≠ M6 AUTHORIZED ≠ Product Completion Delivery authorized ≠ Cycle 1 Cadrage authorized** | · **NORA-FIRST = VALIDATED sequencing** · **C5 = CONTENT VALIDATED BY MORRIS / INTEGRATED ON MAIN / POST-MERGE VERIFIED** · **MW0 = INTEGRATED ON MAIN / POST-MERGE VERIFIED (PR #442)** · **HISTORICAL PRE-OD04 Nora anti-claims** (architecture/Agents SDK/Sessions not selected · MW1 Delivery not authorized · next gate = distinct MW1 Delivery GO · OD-04 OPEN) = **SUPERSEDED FOR FORWARD PATH** · retained only in historique timestamps / then-current GO strings · **CURRENT Nora / OD-04 / OD04-I01 anti-claims:** **OD-04 = CONSUMED** · **OD04-I01 = ACTIVE** · Studio owns product/business/**authority model** + durable HD/Confirmation objects/lifecycle · **Pilote = runtime human decision/confirmation actor** · Studio **≠** human decision actor · Nora owns cognition · **Morris = construction/governance ≠ runtime persona** · **OPTION C TARGET ADOPTED** · Agents SDK Runner **TARGET ADOPTED** · Product SQLite Session **TARGET ADOPTED** · Session/model-input = **cognitive context integrity ≠ business authorization** · **OD04-I01 ≠ new architecture ≠ Product Completion reopen ≠ Build Doctrine / v3 framing mutation** · **Responses compaction = CANDIDATE / NOT ADOPTED** · HITL **≠** HD/Confirmation · Trace **≠** Evidence · **MW0 remains CLOSED** · Option C migration requires **MW0 REGRESSION / PARITY ON OPTION C** **≠** MW0 reopen · consumed trajectory steps = **CORR-OPT-C CLOSED → Runner/Fake convergence CLOSED → legacy retirement CLOSED → project Git integration CLOSED / POST-MERGE VERIFIED (PR #447)** · **MW0 OPTION C REGRESSION / PARITY = CLOSED AS CURRENT REGRESSION GATE / PASS WITH NON-BLOCKING RESERVES / DETERMINISTIC ONLY** · evidence Review Handoff L3 `35a2b1ae17085af09e9e59bf9bb96ddf61e02e8c` · **MW1 FINAL PROOF / EXIT = CONSUMED / CLOSED** · **MW1 = COMPLETE / CLOSED BY MORRIS** at proven scope · **MW1 CLOSURE DOCUMENTARY REPOSITORY LIFECYCLE = INTEGRATED ON MAIN / POST-MERGE VERIFIED — PR #451** · head `3785e271d897af5e34e1ce34cdddfc3782ec0e52` · merge `783f7619284f9cd2309d54e7efaa092093c3671e` · tree `831c0fb66bd213afd47f701a8afe3f00da0ea351` · post-merge CI **`33499812659` SUCCESS** · Required Gate **PASS** · **MW2 READINESS = VALIDATED BY MORRIS** · **CORR-MW2-RDY-01/02 SATISFIED** · **OD-02 = CONSUMED — OPTION B** · **MW2 closure/truth-sync repository publication state = RESOLVE FROM CURRENT GIT / PR EVIDENCE** · **MW2 = COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE** · Delivery PR **#456 MERGED** · CORR PR **#457 MERGED** · post-merge CI **`33621406965` SUCCESS** · **MW3 = COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE** · Delivery PR **#459 MERGED** · merge `0220253a2c65957dc802838d71075912402f3afd` · post-merge CI **`33710122738` SUCCESS** · **MW4 Delivery = INTEGRATED ON MAIN / POST-MERGE VERIFIED** · **MW4 = COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE WITH NON-BLOCKING RESERVES** · **CURRENT PRODUCT CAPABILITY = MW5 — Critical Challenge + Clarification — **COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE WITH RETAINED GOVERNANCE DEVIATION AND NON-BLOCKING RESERVES** — Morris closure decision **CONSUMED** — Delivery **INTEGRATED ON MAIN / POST-MERGE VERIFIED** — PR **#463 MERGED** · pre-merge head `642c502d649a3dad46b66ade95bdea1b5ed8b787` · squash merge `7e2f4c2799be70380362630a1c6734837cc453d9` · tree `b58cea7a8d0ddd173c1467d5a522e26a9c643fe3` · HEAD→MERGE TREE PARITY **PROVEN** · post-merge CI **`33841337376` SUCCESS** · Required Gate **PASS** · delivery branch `delivery/sfia-studio-nora-mw5-critical-challenge-clarification` **PRESERVED** · CORR-MW5-PR-01/02 **CLOSED AT TESTED DETERMINISTIC SCOPE** · CORR-MW5-CLOSURE-C5-CURRENT-TRAJECTORY-01 **CLOSED AT REVIEWED DOCUMENTARY SCOPE** · MW5-R2-REAL-03 PASS at tested scope · D-MW5-QA-SHA-01/02 CLOSED · MW0→MW5 cognitive evidence ACCEPTED BY MORRIS FOR MW5 PURPOSES · H17 FAIL = 141/100 RETAINED HISTORICAL GOVERNANCE DEVIATION · H18 INCONCLUSIVE · ZERO NEW REAL — ≠ campaign governance-compliant · ≠ Cognitive Completion PROVEN · ≠ runtime v3 ADOPTED · MW6 = CLOSURE ACCEPTED BY MORRIS / INTEGRATION PENDING · effective COMPLETE/CLOSED conditioned on exact candidate merge + required CI PASS · repository lifecycle = RESOLVE FROM CURRENT GIT / PR EVIDENCE · NEXT PRODUCT CAPABILITY GATE = GLOBAL MODEL × REASONING CAMPAIGN READINESS / QUALIFICATION — NOT AUTHORIZED / NOT STARTED · ≠ MW6 integrated on main yet · ≠ MW6 COMPLETE/CLOSED on main yet** · **MW1 Delivery AUTHORIZED EARLIER ≠ MW1 COMPLETE** · **Option C implementation = INTEGRATED ON MAIN / POST-MERGE VERIFIED (PR #447) ≠ MW1 COMPLETE** · **REAL-B DEFERRED / NOT AUTHORIZED / NOT STARTED** · **OD-07 CONSUMED ≠ OD-02/05/06/08 consumed** · runtime v3 **NON ADOPTED** · **≠** embed local candidate branch/HEAD as permanent repository truth |
+| **Anti-claims** | G0-A/G0-B **consommés** · M1–M3 **mergés** · M3 exit proof **SATISFIED** · M4 exit proof **ACCEPTED BY MORRIS** · M4 **CLOSED** · M5 Entry Qualification **COMPLETE** · M5 architecture trajectory **ADOPTED BY MORRIS** · M5 Delivery **IMPLEMENTED ON MAIN** (PR #350) · M5 UI rehydrate **IMPLEMENTED ON MAIN** (PR #351) · M5 technical/functional exit proof **SATISFIED ON MAIN** · M5 EXIT PROOF **ACCEPTED BY MORRIS** · M5 **CLOSED** · M5 CLOSED **≠** M6 AUTHORIZED · M5 CLOSED **≠** M6 STARTED · M5 CLOSED **≠** runtime v3 ADOPTED · M5 CLOSED **≠** global v3 baseline promoted · M5 CLOSED **≠** M5-C retired · M5 exit accepted **≠** global Cursor REAL authorization · M5 CLOSED future **≠** M6 automatically authorized · Pre-M6 trajectory decided **≠** Pre-M6 UX qualification executed · **D-PRE-M6-UX-05 ADOPTED AS PRE-M6 VISUAL REFERENCE ≠ UI Delivery authorized ≠ runtime implemented ≠ browser/product E2E proven ≠ Figma/runtime aligned ≠ WCAG compliant ≠ Pre-M6 complete ≠ historical UI retired** · Accepted M-03/M-04/provenance reserves ≠ reserves closed · new UX baseline **≠** runtime rewrite · existing UI not canonical **≠** existing UI automatically deleted · UI asset audit **COMPLETE/CLASSIFIED** **≠** individual dispositions ADOPTED · existing UI audit **≠** REPLACE/retirement authorized · M1→M5 runtime KEEP **≠** all runtime complete · Pre-M6 user proof **≠** runtime v3 ADOPTED · M6 after Pre-M6 **≠** M6 automatically authorized · Validated UX decisions in framing **30/37** (CC-D01) prevail over older candidate wording in framing **11** · M5-A OPTION B **IMPLEMENTED ON MAIN** · M5-B W1 **IMPLEMENTED ON MAIN** · M5-B W1 factual write-back **≠** Recommendation becomes Decision · Recommendation **≠** HumanDecision · Recommendation **≠** gate consumed · Recommendation **≠** ExecutionAuthority · LPS factual evidence link **≠** structural trajectory validation · readback **≠** execution · remount UI visibility **≠** automatic next-cycle launch · M5-C KEEP TEMPORARY WITH EXIT **≠** technical journal retired · durable Product Attempt **≠** technical M4 journal automatically obsolete · M5 implementation **≠** runtime v3 ADOPTED · M5 implementation **≠** global v3 baseline promoted · M5 ZERO REAL **≠** global Cursor REAL authorization · M5 architecture ADOPTED **≠** M6 started · M4 CLOSED **≠** runtime v3 ADOPTED · one bounded successful REAL completion **≠** global Cursor REAL safety for arbitrary capabilities/tasks · strict runtime read-only proof applies to the **demonstrated M4 bounded path**, not arbitrary future Cursor tasks · timeout 60000 **proven sufficient for demonstrated M4 bounded RO path** **≠** universal Cursor REAL timeout policy · FIRST REAL historical timeout **≠** timeout proven defective · `CURSOR_REAL_TIMEOUT_POLICY` OPEN / NON-BLOCKING **unchanged by M5 architecture decision** **≠** M4/M5 reopened · technical launch journal **≠** Product Store · Critical Ack/Auth.js future IAM **≠** required retroactively for M4 first low-risk RO path · v3 global baseline **NOT PROMOTED** · runtime v3 **NON ADOPTED** · ≠ full OA durable · G-UX-15 technical blocker **CLOSED BY MORRIS** ≠ Pre-M6 complete · G-UX-15 exit proof accepted ≠ browser/product E2E proven · fixture-safe proof accepted ≠ REAL proof · G-UX-15 Slice A **MERGED ON MAIN** (PR #354) ≠ Pre-M6 complete · merged on main ≠ product/browser E2E proven · merged on main ≠ UI Delivery/M6 authorized · Pre-M6 progress ≠ M6 authorized · Confirmation process-local = KEEP RESERVE *(HISTORICAL Pre-M6 / G-UX-15)* · **SUPERSEDED for Confirmation by W1 selective durability** · **≠** restart-safe Confirmation as full envelope · **PR #356 MERGED ≠ UI Delivery authorized** · CI #197/#198/#199 SUCCESS ≠ Pre-M6 complete ≠ UI Delivery authorized · post-merge truth PASS ≠ UI Delivery gate consumed · UI Delivery qualification COMPLETE ≠ UI Delivery authorized · **Option A SCOPE ADOPTED BY MORRIS ≠ UI Delivery execution authorized** · gap treatment adopted as scope ≠ gap closed · G-UX-08 deferred ≠ G-UX-08 closed · G-UX-09 accepted ≠ Conversation durable · Confirmation KEEP *(historical Pre-M6)* ≠ restart-safe · G-UX-11 planned ≠ browser E2E proven · M7 CKC 15/15 future ≠ CKC complete now ≠ CKC Delivery authorized · 4 pilots + 11 fallback ≠ CKC system complete · CKC→v2.6 capitalization option ≠ v2.6 modification decided · CKC validation future ≠ runtime v3 ADOPTED · PR #357 MERGED ≠ UI Delivery authorized · CI #201 SUCCESS ≠ Pre-M6 complete · PR #358 MERGED ≠ UI Delivery authorized · CI #202/#203 SUCCESS ≠ Pre-M6 complete ≠ Delivery authorized · Option A scope adopted ≠ Delivery GO consumed · Execution Authorization IS the Delivery GO ≠ second Delivery GO required · G-UX-11 E2E exit proof ≠ Delivery entry prerequisite · global v3 baseline **NOT PROMOTED** · **PR #361 MERGED ≠ PRE-M6 COMPLETE ≠ PRE-M6 EXIT ACCEPTED ≠ runtime v3 ADOPTED ≠ M6 AUTHORIZED ≠ M7 AUTHORIZED ≠ CKC 15/15 COMPLETE ≠ generic Cursor write/dev/commit/push/PR proven** · **MVP FUNCTIONAL BASELINE ≠ produit final ≠ UX finale ≠ production-ready ≠ generic ExecutionContract complete** · Product Completion trajectory recorded **≠** Cycle 1 Cadrage authorized **≠** Delivery authorized · PRE-M6 requalification **≠** PRE-M6 CLOSED · **PRE-M6 EXIT ACCEPTED FOR PRODUCT-TRAJECTORY PURPOSES WITH GOVERNED DEBT ≠ PRE-M6 COMPLETE ≠ PRE-M6 all gaps closed ≠ runtime v3 ADOPTED ≠ M6 STARTED ≠ M6 AUTHORIZED ≠ Product Completion Delivery authorized ≠ Cycle 1 Cadrage authorized** | · **NORA-FIRST = VALIDATED sequencing** · **C5 = CONTENT VALIDATED BY MORRIS / INTEGRATED ON MAIN / POST-MERGE VERIFIED** · **MW0 = INTEGRATED ON MAIN / POST-MERGE VERIFIED (PR #442)** · **HISTORICAL PRE-OD04 Nora anti-claims** (architecture/Agents SDK/Sessions not selected · MW1 Delivery not authorized · next gate = distinct MW1 Delivery GO · OD-04 OPEN) = **SUPERSEDED FOR FORWARD PATH** · retained only in historique timestamps / then-current GO strings · **CURRENT Nora / OD-04 / OD04-I01 anti-claims:** **OD-04 = CONSUMED** · **OD04-I01 = ACTIVE** · Studio owns product/business/**authority model** + durable HD/Confirmation objects/lifecycle · **Pilote = runtime human decision/confirmation actor** · Studio **≠** human decision actor · Nora owns cognition · **Morris = construction/governance ≠ runtime persona** · **OPTION C TARGET ADOPTED** · Agents SDK Runner **TARGET ADOPTED** · Product SQLite Session **TARGET ADOPTED** · Session/model-input = **cognitive context integrity ≠ business authorization** · **OD04-I01 ≠ new architecture ≠ Product Completion reopen ≠ Build Doctrine / v3 framing mutation** · **Responses compaction = CANDIDATE / NOT ADOPTED** · HITL **≠** HD/Confirmation · Trace **≠** Evidence · **MW0 remains CLOSED** · Option C migration requires **MW0 REGRESSION / PARITY ON OPTION C** **≠** MW0 reopen · consumed trajectory steps = **CORR-OPT-C CLOSED → Runner/Fake convergence CLOSED → legacy retirement CLOSED → project Git integration CLOSED / POST-MERGE VERIFIED (PR #447)** · **MW0 OPTION C REGRESSION / PARITY = CLOSED AS CURRENT REGRESSION GATE / PASS WITH NON-BLOCKING RESERVES / DETERMINISTIC ONLY** · evidence Review Handoff L3 `35a2b1ae17085af09e9e59bf9bb96ddf61e02e8c` · **MW1 FINAL PROOF / EXIT = CONSUMED / CLOSED** · **MW1 = COMPLETE / CLOSED BY MORRIS** at proven scope · **MW1 CLOSURE DOCUMENTARY REPOSITORY LIFECYCLE = INTEGRATED ON MAIN / POST-MERGE VERIFIED — PR #451** · head `3785e271d897af5e34e1ce34cdddfc3782ec0e52` · merge `783f7619284f9cd2309d54e7efaa092093c3671e` · tree `831c0fb66bd213afd47f701a8afe3f00da0ea351` · post-merge CI **`33499812659` SUCCESS** · Required Gate **PASS** · **MW2 READINESS = VALIDATED BY MORRIS** · **CORR-MW2-RDY-01/02 SATISFIED** · **OD-02 = CONSUMED — OPTION B** · **MW2 closure/truth-sync repository publication state = RESOLVE FROM CURRENT GIT / PR EVIDENCE** · **MW2 = COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE** · Delivery PR **#456 MERGED** · CORR PR **#457 MERGED** · post-merge CI **`33621406965` SUCCESS** · **MW3 = COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE** · Delivery PR **#459 MERGED** · merge `0220253a2c65957dc802838d71075912402f3afd` · post-merge CI **`33710122738` SUCCESS** · **MW4 Delivery = INTEGRATED ON MAIN / POST-MERGE VERIFIED** · **MW4 = COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE WITH NON-BLOCKING RESERVES** · **CURRENT PRODUCT CAPABILITY = MW5 — Critical Challenge + Clarification — **COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE WITH RETAINED GOVERNANCE DEVIATION AND NON-BLOCKING RESERVES** — Morris closure decision **CONSUMED** — Delivery **INTEGRATED ON MAIN / POST-MERGE VERIFIED** — PR **#463 MERGED** · pre-merge head `642c502d649a3dad46b66ade95bdea1b5ed8b787` · squash merge `7e2f4c2799be70380362630a1c6734837cc453d9` · tree `b58cea7a8d0ddd173c1467d5a522e26a9c643fe3` · HEAD→MERGE TREE PARITY **PROVEN** · post-merge CI **`33841337376` SUCCESS** · Required Gate **PASS** · delivery branch `delivery/sfia-studio-nora-mw5-critical-challenge-clarification` **PRESERVED** · CORR-MW5-PR-01/02 **CLOSED AT TESTED DETERMINISTIC SCOPE** · CORR-MW5-CLOSURE-C5-CURRENT-TRAJECTORY-01 **CLOSED AT REVIEWED DOCUMENTARY SCOPE** · MW5-R2-REAL-03 PASS at tested scope · D-MW5-QA-SHA-01/02 CLOSED · MW0→MW5 cognitive evidence ACCEPTED BY MORRIS FOR MW5 PURPOSES · H17 FAIL = 141/100 RETAINED HISTORICAL GOVERNANCE DEVIATION · H18 INCONCLUSIVE · ZERO NEW REAL — ≠ campaign governance-compliant · ≠ Cognitive Completion PROVEN · ≠ runtime v3 ADOPTED · MW6 = COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE — INTEGRATED ON MAIN / POST-MERGE VERIFIED (PR #465 / `d3fee38b270d805144e621804b96ef1e5de3e208` / CI `33958548479`) · Stage A deterministic harness = INTEGRATED ON MAIN / POST-MERGE VERIFIED (PR #467 / `1dd5d67ad942c448becd637f4c2e55883d16ffca` / CI `33981467237`) · integrated main still carries historical v2 envelope 72/405/429 until Option C integration · LOCAL Option C candidate = 78/438/464 · NEXT PRODUCT CAPABILITY GATE = ChatGPT Critical Review of Option C → Morris technical+financial+Git GO · Stage A REAL NOT AUTHORIZED · ≠ Stage A REAL AUTHORIZED · ≠ MW6 END-TO-END REAL global · ≠ Cognitive Completion PROVEN · ≠ runtime v3 ADOPTED · ≠ production routing SELECTED** · **MW1 Delivery AUTHORIZED EARLIER ≠ MW1 COMPLETE** · **Option C implementation = INTEGRATED ON MAIN / POST-MERGE VERIFIED (PR #447) ≠ MW1 COMPLETE** · **REAL-B DEFERRED / NOT AUTHORIZED / NOT STARTED** · **OD-07 CONSUMED ≠ OD-02/05/06/08 consumed** · runtime v3 **NON ADOPTED** · **≠** embed local candidate branch/HEAD as permanent repository truth |

 > **Lecture post-C1 :** le snapshot historique, la maintenance du 2026-08-18, l’ancienne ligne `Sources`, l’historique d’intégration et les anti-claims/gates enregistrés avant C1 sont **HISTORIQUES PRE-C1**. Les lignes marquées **courant**, l’intégration C1 et les gates courants les supersèdent pour la trajectoire active. Les preuves et anti-claims génériques restent conservés ; toute mention « C1 not authorized / next M6 / next M7 » dans ces lignes historiques est superseded.


```

### `projects/sfia-studio/nora-cognitive-completion/08-nora-openai-native-first-cognitive-trajectory.md`

```diff
diff --git a/projects/sfia-studio/nora-cognitive-completion/08-nora-openai-native-first-cognitive-trajectory.md b/projects/sfia-studio/nora-cognitive-completion/08-nora-openai-native-first-cognitive-trajectory.md
index 440b2a2e..e5aa64d7 100644
--- a/projects/sfia-studio/nora-cognitive-completion/08-nora-openai-native-first-cognitive-trajectory.md
+++ b/projects/sfia-studio/nora-cognitive-completion/08-nora-openai-native-first-cognitive-trajectory.md
@@ -10,7 +10,9 @@
 | **Intégration Git** | PR **#453** · merge `d640b5ba7210b9da3593bea9eeae2100c6da6c09` · tree `080fb6a73cd465fe5188d1fd5aee614d011b35e2` · post-merge CI `33530815963` **SUCCESS** · Required Gate **PASS** |
 | **Cycle d’origine** | Cycle 14 · DOC · CRITICAL · Pre-MW2 transverse truth-sync |
 | **Delivery** | **MW2 COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE** — PR **#456 MERGED** · CORR **#457 MERGED** · post-merge verified · **≠** Cognitive Completion proven |
-| **Timestamp maintenance NORA-MW6-CONSOLIDATED-INTEGRATION-TRUTH-SYNC-01** | 2026-09-05 11:19:35 CEST — **MW6 CONSOLIDATED INTEGRATION + CLOSURE TRUTH-SYNC** · Cycle **8** · EVOL · CRITICAL · **MORRIS DECISION — MW6 PROVEN SCOPE ACCEPTED FOR CLOSURE** **CONSUMED** · GO MORRIS — MW6 CONSOLIDATED INTEGRATION + TRUTH-SYNC PR **CONSUMED** · MW6 = **CLOSURE ACCEPTED BY MORRIS AT PROVEN SCOPE / INTEGRATION PENDING** · evidence = hosted OpenAI web_search REAL boundary proven on governed product path · REAL handoff `e73ccf0c2760473bd2da347d98e9c202ded5782e` · product candidate `9129cc4336281dbfbbf616d683ea7a00d9c419f0610150baaa6de714769f0398` n=66 · hosted web_search REAL observed = **1** · model `gpt-5.6-luna` · Auth REAL @ V1 carried forward · temporary construction REAL grant remains **TEMPORARY WITH EXIT** · effective COMPLETE/CLOSED after exact candidate integration on main + required CI PASS · repository lifecycle = **RESOLVE FROM CURRENT GIT / PR EVIDENCE** · Production model routing **NOT SELECTED** · Cognitive Completion **NOT PROVEN** · runtime v3 **NON ADOPTED** · Responses Compaction **CANDIDATE / NOT ADOPTED** · **NEXT = GLOBAL MODEL × REASONING CAMPAIGN READINESS / QUALIFICATION — NOT AUTHORIZED / NOT STARTED** · **≠** MW6 integrated on main yet · **≠** MW6 COMPLETE/CLOSED on main yet · **≠** END-TO-END REAL · **≠** Cognitive Completion PROVEN · **≠** production model routing selected · **≠** runtime v3 ADOPTED · global Model × Reasoning campaign remains after MW6 by default before Cognitive Completion / runtime-v3 conclusions that depend on that choice · merge remains **distinct Morris gate** |
+| **Timestamp maintenance NORA-GLOBAL-MR-STAGE-A-OPTION-C-ASTRA-CHALLENGER-01** | 2026-09-05 22:26:41 CEST — **STAGE A OPTION C ASTRA CHALLENGER** · Cycle **8** · EVOL · CRITICAL · D-GMR-ASTRA-01 OPTION C ADOPTED · D-GMR-ASTRA-02 Astra-only+adaptive-effort trajectory instructable post-Stage-A **CONSUMED** · PR #467 harness INTEGRATED on main · local delivery `delivery/sfia-studio-global-mr-stage-a-astra-challenger` Option C candidate · v3-candidate · 78/438/464 · Astra medium×6 ONE-SHOT · budget decision OPEN (known subtotal ≈13.32896 = model-token ≈13.06896 + hosted fixed ≤0.26 vs hard 12; C6) · Stage A → (if material Astra signal) Stage B Astra-only viability → Stage C confirmation — **DOCUMENT ONLY / NOT IMPLEMENTED** · Stage A REAL NOT AUTHORIZED · ZERO REAL · ≠ production routing · ≠ Cognitive Completion PROVEN · ≠ runtime v3 |
+| **Timestamp maintenance historique NORA-GLOBAL-MR-STAGE-A-POST-MERGE-READINESS-01 (pre-Option-C Astra challenger)** | 2026-09-05 20:57:01 CEST — **STAGE A POST-MERGE + REAL READINESS** · Cycle **14** · DOC · CRITICAL · GO MORRIS post-merge closure/readiness **CONSUMED** · MW6 = **COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE — INTEGRATED ON MAIN / POST-MERGE VERIFIED** (PR **#465** `d3fee38b270d805144e621804b96ef1e5de3e208` / CI `33958548479`) — prior closure decision consumed; no second closure · G1/G2/G3 harness prerequisites integrated (PR **#466**) · PR **#467** Stage A deterministic harness **INTEGRATED ON MAIN / POST-MERGE VERIFIED** (head `3fb1624c8b373b75dfcd48a64797a7927cb76019` · merge `1dd5d67ad942c448becd637f4c2e55883d16ffca` · CI `33981467237` · head→merge ZERO) · campaign preparation moved from NOT STARTED → **REAL READINESS QUALIFICATION ACTIVE** · GPT-5.6 Luna/Terra/Sol = current contract cohort · GPT-6 Astra = **provider drift / disposition required** (no `none`; $10/$50; account **NOT PROVEN**) · **NEXT GATE = STAGE A REAL READINESS — DECISION REQUIRED — MODEL UNIVERSE / BUDGET** · Stage A REAL **NOT AUTHORIZED** · production routing **NOT SELECTED** · Cognitive Completion **NOT PROVEN** · runtime v3 **NON ADOPTED** · **ZERO REAL** · ≠ campaign result |
+| **Timestamp maintenance historique NORA-MW6-CONSOLIDATED-INTEGRATION-TRUTH-SYNC-01 (pre-Stage-A post-merge readiness)** | 2026-09-05 11:19:35 CEST — **MW6 CONSOLIDATED INTEGRATION + CLOSURE TRUTH-SYNC** · Cycle **8** · EVOL · CRITICAL · **MORRIS DECISION — MW6 PROVEN SCOPE ACCEPTED FOR CLOSURE** **CONSUMED** · GO MORRIS — MW6 CONSOLIDATED INTEGRATION + TRUTH-SYNC PR **CONSUMED** · MW6 = **CLOSURE ACCEPTED BY MORRIS AT PROVEN SCOPE / INTEGRATION PENDING** · evidence = hosted OpenAI web_search REAL boundary proven on governed product path · REAL handoff `e73ccf0c2760473bd2da347d98e9c202ded5782e` · product candidate `9129cc4336281dbfbbf616d683ea7a00d9c419f0610150baaa6de714769f0398` n=66 · hosted web_search REAL observed = **1** · model `gpt-5.6-luna` · Auth REAL @ V1 carried forward · temporary construction REAL grant remains **TEMPORARY WITH EXIT** · effective COMPLETE/CLOSED after exact candidate integration on main + required CI PASS · repository lifecycle = **RESOLVE FROM CURRENT GIT / PR EVIDENCE** · Production model routing **NOT SELECTED** · Cognitive Completion **NOT PROVEN** · runtime v3 **NON ADOPTED** · Responses Compaction **CANDIDATE / NOT ADOPTED** · **NEXT = GLOBAL MODEL × REASONING CAMPAIGN READINESS / QUALIFICATION — NOT AUTHORIZED / NOT STARTED** · **≠** MW6 integrated on main yet · **≠** MW6 COMPLETE/CLOSED on main yet · **≠** END-TO-END REAL · **≠** Cognitive Completion PROVEN · **≠** production model routing selected · **≠** runtime v3 ADOPTED · global Model × Reasoning campaign remains after MW6 by default before Cognitive Completion / runtime-v3 conclusions that depend on that choice · merge remains **distinct Morris gate** |
 | **Timestamp maintenance historique NORA-MW5-CLOSURE-DOC-INTEGRATION-01 (pre-MW6 consolidated integration)** | 2026-09-04 08:56:17 CEST — **NORA MW5 CLOSURE DOC INTEGRATION / TRUTH-SYNC** · Cycle **13** · DOC · CRITICAL · **MORRIS DECISION — MW5 COMPLETE / CLOSED AT PROVEN SCOPE WITH RETAINED GOVERNANCE DEVIATION AND NON-BLOCKING RESERVES** **CONSUMED** · GO MORRIS — NORA-MW5-CLOSURE-DOC-INTEGRATION-01 **CONSUMED** · MW5 = **COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE WITH RETAINED GOVERNANCE DEVIATION AND NON-BLOCKING RESERVES** · MW5 Delivery = **INTEGRATED ON MAIN / POST-MERGE VERIFIED** · PR **#463 MERGED** · pre-merge head `642c502d649a3dad46b66ade95bdea1b5ed8b787` · squash merge `7e2f4c2799be70380362630a1c6734837cc453d9` · parent `9b45f0d7700a3127fa28c13f37ffae40432ae05c` · tree `b58cea7a8d0ddd173c1467d5a522e26a9c643fe3` · HEAD→MERGE TREE PARITY **PROVEN** · post-merge CI **`33841337376` SUCCESS** · Required Gate **PASS** · delivery branch `delivery/sfia-studio-nora-mw5-critical-challenge-clarification` **PRESERVED** · CORR-MW5-PR-01/02 **CLOSED AT TESTED DETERMINISTIC SCOPE** · CORR-MW5-CLOSURE-C5-CURRENT-TRAJECTORY-01 **CLOSED AT REVIEWED DOCUMENTARY SCOPE** · MW5-R2-REAL-03 PASS at tested scope · SHA-01/02 CLOSED · MW0→MW5 cognitive evidence ACCEPTED BY MORRIS FOR MW5 PURPOSES · H17 FAIL — RETAINED HISTORICAL GOVERNANCE DEVIATION (141/100 · delta +41) · H18 INCONCLUSIVE · ZERO NEW REAL · Cognitive Completion **NOT PROVEN** · runtime v3 **NON ADOPTED** · Production model routing **NOT SELECTED** · Responses Compaction **CANDIDATE / NOT ADOPTED** · **NEXT PRODUCT CAPABILITY GATE = MW6 READINESS / REQUALIFICATION — NOT AUTHORIZED / NOT STARTED** · closure-doc repository lifecycle = **PR CANDIDATE / PENDING MERGE** · **≠** campaign governance-compliant · **≠** H17 PASS · **≠** H18 PASS · **≠** MW6 AUTHORIZED · **≠** Cognitive Completion PROVEN · **≠** runtime v3 ADOPTED · merge of this closure-doc PR remains **distinct Morris gate** |
 | **Timestamp maintenance historique NORA-MW5-POST-MERGE-CLOSURE-01 (pre-MW5 closure decision consumption)** | 2026-09-04 07:57:56 CEST — **NORA MW5 POST-MERGE / CLOSURE READINESS TRUTH-SYNC** · Cycle **14** · DOC · CRITICAL · GO MORRIS — NORA-MW5-POST-MERGE-CLOSURE-01 **CONSUMED** · PR **#463 MERGED** · pre-merge head `642c502d649a3dad46b66ade95bdea1b5ed8b787` · squash merge `7e2f4c2799be70380362630a1c6734837cc453d9` · parent `9b45f0d7700a3127fa28c13f37ffae40432ae05c` · tree `b58cea7a8d0ddd173c1467d5a522e26a9c643fe3` · HEAD→MERGE TREE PARITY **PROVEN** · post-merge CI **`33841337376` SUCCESS** · Required Gate **PASS** · delivery branch `delivery/sfia-studio-nora-mw5-critical-challenge-clarification` **PRESERVED** · MW5 Delivery = **INTEGRATED ON MAIN / POST-MERGE VERIFIED** · MW5 = **POST-MERGE VERIFIED / CLOSURE READINESS CANDIDATE** · MW5 COMPLETE = **NOT DECIDED** · MW5 CLOSED BY MORRIS = **NO / NOT YET DECIDED** · CORR-MW5-PR-01/02 CLOSED at tested deterministic scope · MW5-R2-REAL-03 PASS at tested scope · SHA-01/02 CLOSED · MW0→MW5 cognitive evidence ACCEPTED BY MORRIS FOR MW5 PURPOSES · H17 FAIL — RETAINED HISTORICAL GOVERNANCE DEVIATION (141/100 · delta +41) · H18 INCONCLUSIVE · ZERO NEW REAL · Cognitive Completion **NOT PROVEN** · runtime v3 **NON ADOPTED** · Production model routing **NOT SELECTED** · Responses Compaction **CANDIDATE / NOT ADOPTED** · **NEXT PRODUCT CAPABILITY AFTER MW5 CLOSURE = MW6 READINESS / REQUALIFICATION — NOT AUTHORIZED / NOT STARTED** · truth-sync = **LOCAL CANDIDATE** · project commit/push/PR = **NONE this cycle** · **≠** MW5 COMPLETE · **≠** CLOSED BY MORRIS · **≠** MW6 AUTHORIZED · **≠** campaign governance-compliant · **≠** H17 PASS |
 | **Timestamp maintenance historique NORA-MW4-CLOSURE-TRUTH-SYNC-01 (pre-MW5 post-merge/closure)** | 2026-09-03 14:56:05 CEST — **NORA MW4 CLOSURE / TRUTH-SYNC** · Morris closure decision **CONSUMED** · **MORRIS DECISION — MW4 COMPLETE / CLOSED AT PROVEN SCOPE WITH NON-BLOCKING RESERVES** · Cycle **13** · DOC · CRITICAL · MW4 = **COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE WITH NON-BLOCKING RESERVES** · MW4 Delivery = **INTEGRATED ON MAIN / POST-MERGE VERIFIED** · PR **#461 MERGED** · head `fa58b210b7b683353f04c66b5e49ab0914e885ab` · squash merge `6b86f9c384d6d6d19a81ecb9bfb3a42acfbfe6a5` · tree `d857baa2a1cd8651c7c11f0233f9f6a92976cbda` · post-merge CI **`33753929894` SUCCESS** · Required Gate **PASS** · same-turn MW4-S03 product proof blob `a23f57e19726f53df5e00c7303102b97e10709cc` present on main · delivery branch `delivery/sfia-studio-nora-mw4-grounding-durability` **PRESERVED** @ `fa58b210…` · MW0×MW1×MW2×MW3×MW4 Integrated REAL **KEEP ACCEPTED AT TESTED SCOPE** · MW4 bounded REAL **KEEP ACCEPTED AT TESTED SCOPE** · R-MW4-PR-CI-01 **CLOSED** · R-MW4-PR-CI-02 **CLOSED AT PROJECT-GIT/PR-CI CORRECTION SCOPE** · R-MW4-PR-CI-02-LOCAL-TIMING **OPEN / NON-BLOCKING** · intra-turn partial→full **OPEN / NON-BLOCKING / FAIL-CLOSED** · RA-06/RA-07/MW2-R01/R02/R03/R-MW4-REAL-02 **CARRY** · **NEXT PRODUCT CAPABILITY GATE = MW5 READINESS / REQUALIFICATION — DISTINCT MORRIS GO REQUIRED — NOT AUTHORIZED / NOT STARTED** · Cognitive Completion **NOT PROVEN** · runtime v3 **NON ADOPTED** · Production model routing **NOT SELECTED** · Responses Compaction **CANDIDATE / NOT ADOPTED** · closure documentation repository lifecycle = **PENDING PR INTEGRATION** · **ZERO REAL** |
@@ -436,10 +438,10 @@ Pas d’adoption automatique.
 12. MW3 Delivery + closure — COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE (PR #459 / post-merge verified)
 13. MW4 Delivery — INTEGRATED ON MAIN / POST-MERGE VERIFIED (PR #461) — COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE WITH NON-BLOCKING RESERVES
 14. MW5 — COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE WITH RETAINED GOVERNANCE DEVIATION AND NON-BLOCKING RESERVES — Delivery INTEGRATED ON MAIN / POST-MERGE VERIFIED (PR #463 / CI 33841337376)
-15. MW6 — CLOSURE ACCEPTED BY MORRIS AT PROVEN SCOPE / INTEGRATION PENDING — hosted web_search REAL boundary proven — exact candidate pending authorized merge · repository lifecycle = RESOLVE FROM CURRENT GIT / PR EVIDENCE
-16. MW6 effective COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE — conditioned on exact accepted candidate integrated on main + required CI PASS (no second substantive closure decision)
-17. Global Model × Reasoning campaign readiness / qualification — NEXT PRODUCT CAPABILITY GATE — NOT AUTHORIZED / NOT STARTED
-    (campaign after MW6 by default, before Cognitive Completion / runtime-v3 conclusions that depend on that choice; OR earlier targeted campaign if a wave QA justifies it)
+15. MW6 — COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE — INTEGRATED ON MAIN / POST-MERGE VERIFIED (PR **#465** / `d3fee38b270d805144e621804b96ef1e5de3e208` / CI `33958548479`) — hosted web_search REAL boundary proven at MW6 proven scope · anti-claims retained
+16. G1/G2/G3 + Stage A deterministic harness — INTEGRATED ON MAIN / POST-MERGE VERIFIED (PR **#466** + PR **#467** / `1dd5d67ad942c448becd637f4c2e55883d16ffca` / CI `33981467237` · head→merge ZERO)
+17. Global Model × Reasoning Stage A Option C — **ADOPTED BY MORRIS (local candidate)** · model universe DECIDED · envelope 78/438/464 deterministic · financial envelope **OPEN** · Stage A REAL **NOT AUTHORIZED** · Stage B Astra-only viability = conditional future gate / not implemented
+18. (Future, distinct) Stage A REAL GO — only after Morris readiness disposition + explicit REAL authorization
 ```

 Les étapes MW2–MW5 ci-dessus sont des faits de trajectoire enregistrés (MW5 COMPLETE/CLOSED = décision Morris distincte consommée). Ce document **n’a pas, par lui-même, autorisé** ces clôtures ; il synchronise la vérité aval. **MORRIS DECISION — MW6 PROVEN SCOPE ACCEPTED FOR CLOSURE** est consommée : MW6 = **CLOSURE ACCEPTED / INTEGRATION PENDING** jusqu’à intégration exacte du candidat accepté + required CI PASS, moment auquel MW6 devient **COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE** sans nouvelle décision de clôture substantive. La campagne globale Model × Reasoning readiness reste **NOT AUTHORIZED / NOT STARTED**.
@@ -451,11 +453,11 @@ Les étapes MW2–MW5 ci-dessus sont des faits de trajectoire enregistrés (MW5
 | Source | Disposition |
 | --- | --- |
 | Build Doctrine | **R22 ACTIVE ON MAIN** via PR #453 ; pas de modèle spécifique figé dans la doctrine |
-| Convergence Roadmap | **KEEP** · **CURRENT trajectory:** MW4 Delivery **INTEGRATED ON MAIN / POST-MERGE VERIFIED** → MW4 **COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE WITH NON-BLOCKING RESERVES** → **MW5 Delivery INTEGRATED ON MAIN / POST-MERGE VERIFIED** (PR **#463** / CI **`33841337376`**) → MW5 **COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE WITH RETAINED GOVERNANCE DEVIATION AND NON-BLOCKING RESERVES** → MW6 = **CLOSURE ACCEPTED BY MORRIS / INTEGRATION PENDING** → **NEXT PRODUCT CAPABILITY GATE = GLOBAL MODEL × REASONING CAMPAIGN READINESS / QUALIFICATION — NOT AUTHORIZED / NOT STARTED** · Production model routing **NOT SELECTED** · runtime v3 **NON ADOPTED** |
+| Convergence Roadmap | **KEEP** · **CURRENT trajectory:** MW4 Delivery **INTEGRATED ON MAIN / POST-MERGE VERIFIED** → MW4 **COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE WITH NON-BLOCKING RESERVES** → **MW5 Delivery INTEGRATED ON MAIN / POST-MERGE VERIFIED** (PR **#463** / CI **`33841337376`**) → MW5 **COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE WITH RETAINED GOVERNANCE DEVIATION AND NON-BLOCKING RESERVES** → MW6 = **COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE — INTEGRATED ON MAIN / POST-MERGE VERIFIED** → Stage A harness **INTEGRATED** (PR **#467**) → **NEXT PRODUCT CAPABILITY GATE = STAGE A REAL READINESS — DECISION REQUIRED — MODEL UNIVERSE / BUDGET NOT CONSUMED** · Production model routing **NOT SELECTED** · runtime v3 **NON ADOPTED** |
 | C5 source-locked backlog | **KEEP source-lock** · pas de nouvelle story / pas de changement AC dans ce truth-sync |
 | MW0 doc06 | **KEEP measurement contract** · historique validé non réécrit ; ce document consomme D0/R1/R2/R3 et le contrat model/reasoning |
 | OD-04 doc07 | **KEEP architecture decision** · Option C preserved · lifecycle synchronisé après PR #453 |
-| MW2 Readiness / OD-02 / Closure | **MW3 COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE** · Delivery PR **#459** · **MW4 Delivery INTEGRATED** (PR **#461**) · **COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE WITH NON-BLOCKING RESERVES** · **MW5 Delivery INTEGRATED ON MAIN / POST-MERGE VERIFIED** (PR **#463**) · MW5 **COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE WITH RETAINED GOVERNANCE DEVIATION AND NON-BLOCKING RESERVES** · MW6 = **CLOSURE ACCEPTED BY MORRIS / INTEGRATION PENDING** · **NEXT PRODUCT CAPABILITY GATE = GLOBAL MODEL × REASONING CAMPAIGN READINESS / QUALIFICATION — NOT AUTHORIZED / NOT STARTED** |
+| MW2 Readiness / OD-02 / Closure | **MW3 COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE** · Delivery PR **#459** · **MW4 Delivery INTEGRATED** (PR **#461**) · **COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE WITH NON-BLOCKING RESERVES** · **MW5 Delivery INTEGRATED ON MAIN / POST-MERGE VERIFIED** (PR **#463**) · MW5 **COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE WITH RETAINED GOVERNANCE DEVIATION AND NON-BLOCKING RESERVES** · MW6 = **COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE — INTEGRATED ON MAIN / POST-MERGE VERIFIED** · Stage A harness **INTEGRATED** · **NEXT = STAGE A REAL READINESS — DECISION REQUIRED** |

 ---

@@ -506,7 +508,9 @@ Cette trajectoire **VALIDATED — ACTIVE ON MAIN** via PR **#453** :
 **MW3 — COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE — DELIVERY PR #459 — POST-MERGE VERIFIED**
 **MW4 — DELIVERY INTEGRATED ON MAIN / POST-MERGE VERIFIED — PR #461 — COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE WITH NON-BLOCKING RESERVES**
 **MW5 — COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE WITH RETAINED GOVERNANCE DEVIATION AND NON-BLOCKING RESERVES — Delivery INTEGRATED ON MAIN / POST-MERGE VERIFIED — PR #463 — CI 33841337376**
-**MW6 — CLOSURE ACCEPTED BY MORRIS AT PROVEN SCOPE / INTEGRATION PENDING — hosted web_search REAL boundary PROVEN — exact candidate pending authorized merge — RESOLVE FROM CURRENT GIT / PR EVIDENCE**
-**NEXT PRODUCT CAPABILITY GATE = GLOBAL MODEL × REASONING CAMPAIGN READINESS / QUALIFICATION — NOT AUTHORIZED / NOT STARTED**
+**MW6 — COMPLETE / CLOSED BY MORRIS AT PROVEN SCOPE — INTEGRATED ON MAIN / POST-MERGE VERIFIED (PR #465)**
+**STAGE A DETERMINISTIC HARNESS — INTEGRATED ON MAIN / POST-MERGE VERIFIED (PR #467)**
+**NEXT PRODUCT CAPABILITY GATE = STAGE A REAL READINESS — DECISION REQUIRED — MODEL UNIVERSE / BUDGET NOT CONSUMED**
+**Stage A REAL = NOT AUTHORIZED**
 **PRODUCTION MODEL ROUTING — NOT SELECTED**
 **RUNTIME V3 — NON ADOPTED**

```

### `projects/sfia-studio/nora-cognitive-completion/10-nora-global-model-reasoning-campaign-execution-contract.md`

```diff
diff --git a/projects/sfia-studio/nora-cognitive-completion/10-nora-global-model-reasoning-campaign-execution-contract.md b/projects/sfia-studio/nora-cognitive-completion/10-nora-global-model-reasoning-campaign-execution-contract.md
index 143d7369..235f3f37 100644
--- a/projects/sfia-studio/nora-cognitive-completion/10-nora-global-model-reasoning-campaign-execution-contract.md
+++ b/projects/sfia-studio/nora-cognitive-completion/10-nora-global-model-reasoning-campaign-execution-contract.md
@@ -3,13 +3,17 @@
 | Field | Value |
 | --- | --- |
 | **Document ID** | `NORA-GLOBAL-MR-CAMPAIGN-EXECUTION-CONTRACT-01` |
-| **Contract version** | `global-mr-campaign-contract-v2-candidate` |
-| **Status** | **CANDIDATE LOCAL — ZERO REAL — STAGE A FINAL DETERMINISTIC SAFETY CORRECTION (C4-01→C4-05) — DETERMINISTIC PROVEN — AWAITING CHATGPT CRITICAL REVIEW → MORRIS GIT INTEGRATION DECISION** |
-| **Baseline Git** | `origin/main` = `23d850fda45fe55ba519e0feefe63369d349afcc` (PR #466 squash merge) |
-| **Parent** | `d3fee38b270d805144e621804b96ef1e5de3e208` |
-| **Tree** | `7f940e0a772ebf566cfa64ec6e0c6f9f8f477505` |
-| **G1/G2/G3** | INTEGRATED ON MAIN / POST-MERGE VERIFIED |
-| **Post-merge CI** | run `33965677986` SUCCESS |
+| **Contract version** | `global-mr-campaign-contract-v3-candidate` (Option C local candidate; main still hosts v2 until integration) |
+| **Status** | **LOCAL OPTION C CANDIDATE** — D-GMR-ASTRA-01/02 consumed · harness adapted for Astra challenger · deterministic 78/438/464 · USD 6/9/12 retained / budget decision OPEN · ZERO REAL — Stage A REAL NOT AUTHORIZED — product Git **NOT INTEGRATED** |
+| **Baseline Git (snapshot)** | `origin/main` = `1dd5d67ad942c448becd637f4c2e55883d16ffca` (PR **#467** merge) |
+| **Accepted product head** | `3fb1624c8b373b75dfcd48a64797a7927cb76019` |
+| **Merge parents** | `23d850fda45fe55ba519e0feefe63369d349afcc` + `3fb1624c8b373b75dfcd48a64797a7927cb76019` |
+| **Head→merge product delta** | **ZERO** |
+| **Post-merge CI** | run `33981467237` SUCCESS · Required Gate **PASS** |
+| **G1/G2/G3** | INTEGRATED ON MAIN / POST-MERGE VERIFIED (PR **#466** @ `23d850fda45fe55ba519e0feefe63369d349afcc`) |
+| **Integration GO** | `GO MORRIS — GLOBAL MODEL × REASONING STAGE A GIT INTEGRATION + PUBLISH REVIEW HANDOFF — ZERO REAL` **CONSUMED** |
+| **Merge GO** | `GO Morris — merge PR #467` **CONSUMED** |
+| **This DOC maintenance** | `NORA-GLOBAL-MR-STAGE-A-OPTION-C-ASTRA-CHALLENGER-01` — Option C Astra challenger adaptation (**local delivery candidate until ChatGPT Critical Review → Morris technical+financial+Git GO**) |
 | **Authoring date** | 2026-09-05 |
 | **Preparation GO** | `GO MORRIS — PRÉPARER LE GLOBAL MODEL × REASONING CAMPAIGN EXECUTIONCONTRACT CONSOLIDÉ — ZERO REAL` **CONSUMED** |
 | **Enablement GO** | `GO MORRIS — CORRECTION GLOBAL MODEL × REASONING STAGE A ENABLEMENT — ZERO REAL` **CONSUMED (local candidate only)** |
@@ -22,9 +26,9 @@

 | Layer | What it contains | Status |
 | --- | --- | --- |
-| **A. CURRENT MAIN** (`main@23d850fd`) | G1/G2/G3 only for this campaign readiness | INTEGRATED |
-| **B. LOCAL CANDIDATE** (this worktree) | Stage A enablement glue E1–E4 + F1→F5 + C3-01→C3-05 + **C4-01→C4-05** final deterministic safety — code/tests/doc **NOT** on main | DETERMINISTIC PROVEN locally; **NOT integrated** |
-| **C. PROOF CEILING** | DETERMINISTIC ONLY | REAL NOT AUTHORIZED / NOT PROVEN |
+| **A. INTEGRATED MAIN TRUTH** (`main@1dd5d67a`) | G1/G2/G3 + Stage A deterministic harness E1–E4 / F1→F5 / C3 / C4 + this contract text as integrated via PR **#467** | **INTEGRATED ON MAIN / POST-MERGE VERIFIED** |
+| **B. CAMPAIGN READINESS** | Option C model universe **DECIDED** · financial envelope + REAL auth still required | **TECHNICAL PROVEN / FINANCIAL OPEN** (see doc `11-…`) |
+| **C. PROOF CEILING** | Deterministic harness proof + Git integration + post-merge CI | **DETERMINISTIC PROVEN + GIT INTEGRATED + POST-MERGE VERIFIED** — Stage A REAL **NOT AUTHORIZED / NOT EXECUTED / NOT PROVEN** |

 ---

@@ -33,8 +37,8 @@
 ### IS
 - A **construction/evaluation campaign contract** for a future Global Model × Reasoning empirical campaign.
 - An **executable specification** of stages, matrix, budgets, metrics, early-stop, promotion, Evidence, authority, and outcomes.
-- An **input** to a future Morris Stage A REAL gate (only after Git integration + CI + requalification + explicit REAL GO).
-- An **assembly** of existing repository primitives **plus** local Stage A enablement glue (E1–E4) present in this worktree candidate.
+- An **input** to a future Morris Stage A REAL gate (only after REAL readiness qualification + explicit Morris Stage A REAL GO).
+- An **assembly** of repository primitives **plus** Stage A enablement glue (E1–E4) now **integrated on main** via PR **#467**.

 ### IS NOT
 - A product `ExecutionContract` schema mutation.
@@ -42,7 +46,7 @@
 - A production model selection.
 - An authorization to spend OpenAI / Hosted Web Search / Stage A–C.
 - A campaign result or Cognitive Completion proof.
-- A claim that E1–E4 already live on `origin/main`.
+- A claim that Stage A REAL has been executed or that Cognitive Completion / production routing / runtime v3 are proven/selected/adopted.

 **Preparation authorization ≠ REAL execution authorization.**
 **Deterministic proven ≠ REAL proven (R21).**
@@ -83,7 +87,10 @@ Sources (public):
 - Same three model IDs; same effort universe; same list prices for input/output.
 - `minimal` remains **NON-ADMISSIBLE** for GPT-5.6 family in campaign matrix.
 - Unknown model → **FAIL-CLOSED / PROVIDER_CAPABILITY** (never cognitive FAIL).
-- No GPT-6 / Astra / other models added.
+- **Primary cohort (KEEP):** Luna/Terra/Sol × none/medium/high × 6 = **54**.
+- **Astra challenger (Option C ADOPTED):** `gpt-6-astra` × **medium only** × 6 = **6** ONE-SHOT (no selective repeats).
+- Astra efforts capability: `low|medium|high|xhigh|max` (**no `none`/`minimal`**); pricing $10 / $1 cached / $50 per 1MTok; account availability **NOT PROVEN**.
+- Stage A is **not** a 4×3×6 Cartesian expansion.

 **Caveats**
 - Snapshot = **campaign Evidence**, not permanent doctrine; revalidate at Stage A REAL start.
@@ -104,16 +111,16 @@ Sources (public):
 | Eval USD tracker | `BudgetTracker` + `CampaignBudgetPolicy` | `capabilityBudget.ts` / `types.ts` | MAIN |
 | Runtime call caps | `acquireNoraCampaignBudget` / `NoraCampaignBudget` | `campaignBudget.ts` | MAIN |
 | Option C Agents runner | `runNoraAgentsTurn` | `runNoraAgentsTurn.ts` | MAIN |
-| Agents USD authorization hook | `NoraAgentsUsdAccounting` + `createEvalAgentsUsdAccounting` | `agentsUsdAccounting.ts` / `agentsUsdBridge.ts` | **LOCAL CANDIDATE** |
-| Eval model×effort pin | `NoraEvalModelReasoningControl` (+ product F1/F2 passthrough) | `runNoraCognitiveTurn.ts` / `orchestrateTurn.ts` / `orchestrateF2.ts` | **LOCAL CANDIDATE** |
-| Eval cell provider factory | `EvalCellProviderFactory` / `resolveEvalCellConversationProvider` | `evalCellProvider.ts` | **LOCAL CANDIDATE** |
-| Derived Stage A call envelope | `deriveGlobalMrStageAEnvelope` / `buildGlobalMrStageAWorkloadCallPlans` | `globalModelReasoningStageA.ts` | **LOCAL CANDIDATE** |
-| MW6 shared campaign lease | `resolveMw6GovernedCampaignBudget` + full `runMw6GovernedNoraProductTurn` | `mw6GovernedNoraTurn.ts` | **LOCAL CANDIDATE** |
-| Stage A driver | `globalModelReasoningStageA.ts` | `app/lib/nora-eval/` | **LOCAL CANDIDATE** |
+| Agents USD authorization hook | `NoraAgentsUsdAccounting` + `createEvalAgentsUsdAccounting` | `agentsUsdAccounting.ts` / `agentsUsdBridge.ts` | **INTEGRATED (PR #467)** |
+| Eval model×effort pin | `NoraEvalModelReasoningControl` (+ product F1/F2 passthrough) | `runNoraCognitiveTurn.ts` / `orchestrateTurn.ts` / `orchestrateF2.ts` | **INTEGRATED (PR #467)** |
+| Eval cell provider factory | `EvalCellProviderFactory` / `resolveEvalCellConversationProvider` | `evalCellProvider.ts` | **INTEGRATED (PR #467)** |
+| Derived Stage A call envelope | `deriveGlobalMrStageAEnvelope` / `buildGlobalMrStageAWorkloadCallPlans` | `globalModelReasoningStageA.ts` | **INTEGRATED (PR #467)** |
+| MW6 shared campaign lease | `resolveMw6GovernedCampaignBudget` + full `runMw6GovernedNoraProductTurn` | `mw6GovernedNoraTurn.ts` | **INTEGRATED (PR #467)** |
+| Stage A driver | `globalModelReasoningStageA.ts` | `app/lib/nora-eval/` | **INTEGRATED (PR #467)** |

 **MAIN:** G1/G2/G3 integrated.

-**LOCAL CANDIDATE:** Stage A enablement glue E1/E2/E3/E4 + F1→F5 + C3-01→C3-05 implemented and deterministically tested, subject to ChatGPT Critical Review → Morris Git integration.
+**INTEGRATED ON MAIN (PR #467):** Stage A enablement glue E1/E2/E3/E4 + F1→F5 + C3-01→C3-05 + C4-01→C4-05 integrated and post-merge CI verified. Contract parameters remain **candidate for REAL** until Morris REAL GO.

 **REAL:** not authorized / not proven.

@@ -160,7 +167,7 @@ Catalog `requiredTier: ["D0"]` scenarios are **semantic identities + scorer bind

 ### Injection facts

-#### On CURRENT MAIN (`main@23d850fd`)
+#### On INTEGRATED MAIN (`main@1dd5d67a` — includes G1/G2/G3 + Stage A harness)
 | Mechanism | Model injectable | Effort injectable | Metering | Budget |
 | --- | --- | --- | --- | --- |
 | `runNoraAgentsTurn({ model, runnerModelSettings, campaignBudget })` | **YES** | **YES** | Agents usage + campaign counters | `NoraCampaignBudget` |
@@ -195,7 +202,7 @@ Catalog `requiredTier: ["D0"]` scenarios are **semantic identities + scorer bind
 **Operational constraints:**
 1. Do not silently use `runR2ProductScenario` for MW6 / global provenance without correcting catalog version (function hardcodes `mw0-catalog-v1`).
 2. Prefer Agents/`CampaignCellConfig` Evidence writer that sets `scenarioVersion: "global-mr-catalog-v1"`.
-3. Stage A driver exists in the **local candidate** (`globalModelReasoningStageA.ts`) — deterministic proven; REAL execution still requires Morris Stage A REAL GO after Git integration.
+3. Stage A driver exists on **main** (`globalModelReasoningStageA.ts`) — deterministic proven + Git integrated + post-merge verified; REAL execution still requires Morris Stage A REAL GO after readiness disposition.

 ---

@@ -205,25 +212,27 @@ Catalog `requiredTier: ["D0"]` scenarios are **semantic identities + scorer bind

 | Parameter | Candidate value | Status |
 | --- | --- | --- |
-| Models | Luna / Terra / Sol | CANDIDATE |
-| Efforts | none / medium / high | CANDIDATE |
-| Workloads | 6 (W-Routine … W-Sources) | CANDIDATE |
-| Base cells | **54** (= 3 × 3 × 6) | CANDIDATE |
-| Base runs/cell | 1 | CANDIDATE |
-| Max repeats/cell | **1** (runIndex 0 base + runIndex 1 unique selective repeat) | CANDIDATE — C4-04 |
-| Selective repeat pool | **18 max** | CANDIDATE |
-| **Max cell executions** | **72** (= 54 + 18) | **CELL EXECUTION ENVELOPE** — not model invocations |
-| **Max model invocations** | **405** (= base 297 + worst-case repeat 108) | **DERIVED CANDIDATE — AWAITING MORRIS ACCEPTANCE FOR REAL** |
-| Max hosted web operations | **24** | CANDIDATE (retained pool) |
-| **Max aggregate REAL calls** | **429** (= 405 + 24) | **DERIVED CANDIDATE — AWAITING MORRIS ACCEPTANCE FOR REAL** |
-| Target USD | **6.00** | CANDIDATE |
-| Soft stop USD | **9.00** | CANDIDATE |
-| Hard cap USD | **12.00** — **pre-dispatch estimated/reservation authorization envelope** (≠ guaranteed provider invoice ceiling) | CANDIDATE — feasibility OK vs planned reserve ≈ **9.77** worst-case |
+| Models | Luna / Terra / Sol **primary** + GPT-6 Astra **challenger** | OPTION C |
+| Efforts | primary: none / medium / high · Astra Stage A: **medium only** | OPTION C |
+| Workloads | 6 (W-Routine … W-Sources) | OPTION C |
+| Primary base cells | **54** (= 3 × 3 × 6) | OPTION C |
+| Astra challenger cells | **6** (medium × 6; ONE-SHOT) | OPTION C |
+| Total base cells | **60** | OPTION C |
+| Base runs/cell | 1 | OPTION C |
+| Max repeats/cell | **1** primary only (Astra `selectiveRepeatEligible=false`) | OPTION C |
+| Selective repeat pool | **18 max** (primary only) | OPTION C |
+| **Max cell executions** | **78** (= 60 + 18) | **CELL EXECUTION ENVELOPE** — not model invocations |
+| **Max model invocations** | **438** (= base 330 + primary repeats 108) | OPTION C DERIVED |
+| Max hosted web operations | **26** (= primary 24 + Astra W-Sources +2) | OPTION C |
+| **Max aggregate REAL calls** | **464** (= 438 + 26) | OPTION C |
+| Target USD | **6.00** | CURRENT POLICY |
+| Soft stop USD | **9.00** | CURRENT POLICY |
+| Hard cap USD | **12.00** — **pre-dispatch estimated/reservation authorization envelope** (≠ invoice) | **INSUFFICIENT** vs known planned subtotal ≈ **13.32896** → `REQUIRES_MORRIS_BUDGET_DECISION` |
 | Provider tool calls / response (campaign) | **2** (use min(campaign, runtime ceiling)) | CANDIDATE |
 | Catalog | `global-mr-catalog-v1` | MAIN |
 | Capability manifest | `buildGlobalModelReasoningCapabilityManifest(retrievedAt)` | MAIN |
 | Budget identity | **≠** `MW0_BUDGET_POLICY` (3/4/5) **≠** `H17_HISTORICAL_AUTHORIZED_AGGREGATE_CALLS` (100) | — |
-| Contract version | `global-mr-campaign-contract-v2-candidate` | LOCAL CANDIDATE |
+| Contract version | `global-mr-campaign-contract-v3-candidate` | LOCAL OPTION C CANDIDATE |

 ### Per-workload constitutive model-call ceilings (DERIVED)

@@ -236,14 +245,20 @@ Catalog `requiredTier: ["D0"]` scenarios are **semantic identities + scorer bind
 | W-Memory | `agents_cognitive` | 0 | 5 | **5** | 0 |
 | W-Sources | `mw6_governed` | 0 | 5 | **5** | 2 |

-**Derivation:**
-- `baseModelInvocationCeiling` = 3×3×(5+6+6+6+5+5) = **297**
-- `repeatModelInvocationCeiling` = sum of 18 highest per-cell costs (all F2 @ 6) = **108**
-- `maxModelInvocations` = 297 + 108 = **405**
-- `maxAggregateRealCalls` = 405 + 24 = **429**
+**Derivation (Option C):**
+- `primaryBaseModelInvocationCeiling` = 3×3×(5+6+6+6+5+5) = **297**
+- `astraBaseModelInvocationCeiling` = 5+6+6+6+5+5 = **33**
+- `baseModelInvocationCeiling` = 297 + 33 = **330**
+- `repeatModelInvocationCeiling` = sum of 18 highest *primary* per-cell costs (all F2 @ 6) = **108** (Astra repeats = 0)
+- `maxModelInvocations` = 330 + 108 = **438**
+- `maxHostedWebOperations` = 24 + 2 = **26**
+- `maxAggregateRealCalls` = 438 + 26 = **464**
+
+*(Historical contract-v2 on integrated main before Option C integration: primary-only 297+108=**405**, hosted **24**, aggregate **429**, cells **72**.)*
+- `maxAggregateRealCalls` = 438 + 26 = **464**
 - Function: `deriveGlobalMrStageAEnvelope()` / proof: `globalMrStageAEnvelopeProof()`

-**Do not equate** `maxCellExecutions=72` with `maxModelInvocations`. A cell may contain multiple constitutive model calls (F2: analyzeIntent + Agents turns).
+**Do not equate** `maxCellExecutions=78` with `maxModelInvocations`. A cell may contain multiple constitutive model calls (F2: analyzeIntent + Agents turns). Historical v2 cell envelope was **72**.

 ### Stage A effort justification (CANDIDATE)
 - **none** — absence of explicit reasoning
@@ -266,13 +281,25 @@ Second run **only if** ≥1 trigger: top candidate · borderline · suspected va
 - Campaign `max_tool_calls` = **2** unless a specific W-Sources cell justifies more in the REAL GO (must be explicit).

 ### Aggregate derivation note
-429 aggregate = 405 model + 24 hosted. **429 ≠ H17 historical 100.** H17 remains provenance only.
-Former mistaken equality `54+18=72 model invocations` is **REJECTED**.
+464 aggregate = 438 model + 26 hosted. Historical v2 **429** (=405+24) remains correct for integrated main until Option C integration.
+Former mistaken equality `54+18=72 model invocations` remains **REJECTED** (cell≠model).

 ### Financial envelope label
 `PROPOSED STAGE A FINANCIAL ENVELOPE — AWAITING MORRIS REAL DECISION`
 **Not spendable** under preparation / enablement GOs.
-USD 6/9/12 **retained** after feasibility check vs derived call envelope (worst-case planned reserve ≈ 9.77 < 12).
+USD 6/9/12 **retained** (not auto-raised). FinOps cost classes (official OpenAI API Pricing 2026-09-05):
+
+| Class | Value | Meaning |
+| --- | --- | --- |
+| **plannedModelTokenReserveUsd** | ≈ **13.06896** | Model-token planned reserve under 4k/1.2k assumptions (≠ total provider cost) |
+| **webSearchToolCallUsd** | **0.01** | Fixed tool-call fee ($10 / 1k calls) |
+| **plannedHostedWebSearchToolFeesUsd** | **0.26** (= 26 × 0.01) | Max fixed hosted web-search tool-call fees |
+| **knownPlannedSubtotalUsd** | ≈ **13.32896** | Model-token reserve + max fixed hosted fees |
+| **searchContentTokenExposure** | VARIABLE / PROVIDER-USAGE-DEPENDENT | Search-content tokens billed at model rates; no safe deterministic pre-call quantity |
+| **cache-write / cached-token exact qty** | NOT DETERMINISTICALLY KNOWN / NOT SEPARATELY METERED on current path | Documented provider cost component; invoice NOT_OBSERVED |
+| **invoice** | NOT_OBSERVED | Never claimed as ceiling |
+
+`knownPlannedSubtotalUsd` ≈ 13.32896 > hardCap 12 → `usdFeasibility.ok=false` / `REQUIRES_MORRIS_BUDGET_DECISION`. Do **not** treat 13.32896 as a safe new hard cap or guaranteed worst-case invoice.

 ### USD semantics (honest — F1 correction)
 | Term | Meaning |
@@ -290,6 +317,9 @@ Client-side estimators cannot guarantee a maximum provider invoice when exact co

 ## 8. Stage B — Deepening (defined, NOT auto-authorized)

+
+**D-GMR-ASTRA-02:** if Stage A Evidence shows material Astra signal, Morris may gate Stage B for **GPT-6 ASTRA-ONLY VIABILITY + ADAPTIVE REASONING EFFORT**. Stage B matrix NOT fixed today; GPT-5.6 best-survivor anchors as controls if authorized. Stage C = confirmation only if Stage B justifies. **NOT IMPLEMENTED this cycle.**
+
 - **Not** authorized to run automatically after Stage A.
 - **Never** full model × 6 efforts × workloads.
 - Promote only: top 1–2 models/workload; efforts needed for curve (incl. low/xhigh/max and anchors); unresolved material uncertainty.
@@ -446,7 +476,7 @@ Any proposed weighting = **CANDIDATE** until Morris accepts it in a REAL/post-ca

 Each future run MUST reconstruct:

-`campaignId` · `contractVersion=global-mr-campaign-contract-v2-candidate` · provider snapshot date · model · reasoningEffort · workloadId · scenarioId · scenarioVersion=`global-mr-catalog-v1` · runIndex · stage · tool/source set · timestamps · usage · estimated cost · cumulative campaign usage · scorers · hard invariant status · Evidence refs · providerResponseId if available · budget policy identity
+`campaignId` · `contractVersion=global-mr-campaign-contract-v3-candidate` · provider snapshot date · model · reasoningEffort · workloadId · scenarioId · scenarioVersion=`global-mr-catalog-v1` · runIndex · stage · tool/source set · timestamps · usage · estimated cost · cumulative campaign usage · scorers · hard invariant status · Evidence refs · providerResponseId if available · budget policy identity

 Historical `mw0-catalog-v1` remains provenance — **not** silent campaign corpus.

@@ -526,7 +556,7 @@ No cognitive gain expands authority. No stronger model gains more authority.
 | Forbidden silent reuse | Correct campaign binding |
 | --- | --- |
 | `MW0_BUDGET_POLICY` 3 / 4 / 5 USD | Stage A 6 / 9 / 12 USD (candidate) |
-| `H17_HISTORICAL_AUTHORIZED_AGGREGATE_CALLS = 100` | maxAggregateRealCalls **429** (derived candidate) |
+| `H17_HISTORICAL_AUTHORIZED_AGGREGATE_CALLS = 100` | maxAggregateRealCalls **464** (Option C); historical v2 **429** |
 | MW0 historical allowlist Luna/Terra × none/low/medium | Global manifest Luna/Terra/Sol × none→max (campaign allowlist) |
 | Production router | **NO ROUTER BEFORE EVIDENCE** |
 | Runtime v3 | **NON ADOPTED** |
@@ -541,18 +571,18 @@ No cognitive gain expands authority. No stronger model gains more authority.
 | **C4-01** | Stage A eval seams on client-callable Server Action | Removed from `projectAssistantSendAction`; campaign uses internal orchestrators only | `c4.final-safety.d0.test.ts` PASS |
 | **C4-02** | Eval control accepted arbitrary provider fallback | Factory mandatory when eval control set | same PASS |
 | **C4-03** | F2 structured not on shared USD BudgetTracker; claim-before-USD risk | MeteredConversationProvider `beforeAuthorizedDispatch` after USD preflight; `createMeteredEvalCellProviderFactory` | same PASS |
-| **C4-04** | `maxRepeatsPerCell=2` incoherent | Corrected to **1** (72/405/429 unchanged) | same PASS |
+| **C4-04** | `maxRepeatsPerCell=2` incoherent | Corrected to **1** (Option C: 78/438/464; Astra repeats=0) | same PASS |
 | **C4-05** | Evidence productPath dishonest for F2 | `productPath=f2` + `executionKind` observation | same PASS |

-**Status:** C4-01→C4-05 = **CLOSED AT DETERMINISTIC TESTED SCOPE**. C3-01/C3-03/C3-04/C3-05 remain closed. 72/405/429 unchanged.
+**Status:** C4-01→C4-05 = **CLOSED**. C3 closures retained; C3-01 adapted to Option C **78/438/464**. Historical **72/405/429** = v2 truth on main.

 **Client boundary:** Stage A model/effort/campaign/USD seams are **server-internal only** — not on `projectAssistantSendAction`.

 **F2 FinOps:** structured `completeStructured` shares Stage A `BudgetTracker` via MeteredConversationProvider; order = USD preflight → canonical claim → dispatch → record. `hardCapUsd=12` remains estimated authorization envelope ≠ invoice.

-**Next gate:** ChatGPT Critical Review → **Morris Git integration decision** (NOT Stage A REAL).
+**Historical next gate (satisfied):** ChatGPT Critical Review → Morris Git integration → PR **#467** MERGED / post-merge CI PASS.

-Stage A REAL comes only after: Git integration → CI → post-merge verification → campaign REAL requalification → Morris Stage A REAL GO.
+**Current next gate:** ChatGPT Critical Review of this DOC readiness pack → Morris model-universe/readiness decision → (only then) contract adaptation if needed → **distinct** future Stage A REAL GO.

 ## Critical Review remediation (E1–E4 + F1→F5 + C3-01→C3-05) — retained

@@ -564,7 +594,7 @@ Stage A REAL comes only after: Git integration → CI → post-merge verificatio
 | **E4 / F4A** | Repeat gate computed then ignored (`void gate`) | Driver enforces one repeat/base cell + pool 18; runIndex>1 denied | `e4.stage-a-driver.d0.test.ts` PASS |
 | **E4 / F4B** | `SOFT_USD_REVIEW` allowed silent continuation | Soft stop blocks new cells until `acknowledgeGlobalMrStageASoftReview` (non-authoritative; no HD) | same PASS |
 | **F5** | Contract conflated main / local / REAL | Three truth layers + USD honesty + checklist corrected | this document |
-| **C3-01** | `54+18=72` wrongly treated as maxModelInvocations | Cell executions (72) ≠ model invocations; derived **405** / aggregate **429** | `c3.call-accounting.d0.test.ts` PASS |
+| **C3-01** | `54+18=72` wrongly treated as maxModelInvocations | Cell ≠ model; Option C derived **438** / aggregate **464** (historical v2: **405**/**429**) | `c3.call-accounting.d0.test.ts` PASS |
 | **C3-02** | F2 pin metadata ≠ structured provider binding | `EvalCellProviderFactory(model, effort)` → analyzeIntent provider | same + F2 path PASS |
 | **C3-03** | MW6 proof stopped at resolver | Full `runMw6GovernedNoraProductTurn` + same Stage A lease; ZERO LIVE | `c3.mw6-full-product-path.d0.test.ts` PASS |
 | **C3-04** | Repeat pool exhaustion latched campaign stop | Per-cell denial only; base cells still execute | `c3` + `e4` PASS |
@@ -572,26 +602,27 @@ Stage A REAL comes only after: Git integration → CI → post-merge verificatio

 **Status:** C3-01→C3-05 = **CLOSED AT DETERMINISTIC TESTED SCOPE**. F1→F5 remain closed.

-**Next gate:** ChatGPT Critical Review → **Morris Git integration decision** (NOT Stage A REAL).
+**Historical next gate (satisfied):** ChatGPT Critical Review → Morris Git integration → PR **#467** MERGED / post-merge CI PASS.

-Stage A REAL comes only after: Git integration → CI → post-merge verification → campaign REAL requalification → Morris Stage A REAL GO.
+**Current next gate:** ChatGPT Critical Review of this DOC readiness pack → Morris model-universe/readiness decision → (only then) contract adaptation if needed → **distinct** future Stage A REAL GO.

 ## 22. Gates

 | Gate | Status |
 | --- | --- |
-| Preparation GO | **CONSUMED** |
-| Enablement correction GO | **CONSUMED (local)** |
-| Correction 4 GO | **CONSUMED (local)** |
-| ChatGPT Critical Review (final deterministic safety candidate) | **NEXT** |
-| Morris Git integration decision | **NOT YET** |
+| Preparation / enablement / C3 / C4 GOs | **CONSUMED** (historical construction) |
+| ChatGPT Critical Review (C4) | **PASS** (pre-integration) |
+| Morris Git integration + PR **#467** merge | **CONSUMED** — harness **INTEGRATED ON MAIN / POST-MERGE VERIFIED** |
+| Post-merge CI `33981467237` | **SUCCESS** / Required Gate **PASS** |
+| Provider capability fit (R22) this DOC cycle | **EXECUTED** — GPT-5.6 primary + Astra challenger capability in current snapshot |
+| Morris model-universe / Astra disposition | **DECIDED — OPTION C** (D-GMR-ASTRA-01) |
 | Morris Stage A REAL decision | **NOT AUTHORIZED** |
 | Stage A/B/C REAL | **NOT AUTHORIZED** |
 | OpenAI spend | **NOT AUTHORIZED** |
 | Production model selection / routing | **NOT AUTHORIZED** |
-| Product commit/push/PR/merge | **NOT in this cycle** |
+| This DOC product commit/push/PR/merge | **NOT in this cycle** (local documentary candidate) |
 | Runtime v3 / Cognitive Completion promotion | **FORBIDDEN** |
-| Handoff publication (`sfia/review-handoff`) | **PUBLISHED + REMOTE VERIFIED** — pre-integration Critical Review tip `bf94d7eab54c8b8f7ce25bf2a13eb2ee4cb370c0` (Correction 4). Integration-cycle handoff publishes after commit/PR on the same channel; not self-referenced in this product commit. |
+| Handoff publication (`sfia/review-handoff`) | Integration pack tip `d2aa25d04578a5c2db9b6cc4d45b36e9fa2f1008` historical; this DOC cycle publishes a new Cycle 14 handoff after pack generation |

 ---

@@ -610,8 +641,8 @@ Stage A REAL comes only after: Git integration → CI → post-merge verificatio
 - [x] Experimental question + model vs effort separation
 - [x] Dated provider snapshot aligned with G1
 - [x] Six workloads + catalog semantic IDs + REAL substitutes
-- [x] Three truth layers: MAIN / LOCAL CANDIDATE / PROOF CEILING
-- [x] Stage A candidate matrix + **cell** envelope 72 + **derived** model/aggregate 405/429 + financial 6/9/12
+- [x] Three truth layers: INTEGRATED MAIN / CAMPAIGN READINESS / PROOF CEILING
+- [x] Stage A Option C matrix + **cell** envelope 78 + **derived** model/aggregate 438/464 + financial 6/9/12 (feasibility FAIL → budget decision)
 - [x] USD 12 = authorization envelope ≠ invoice guarantee (documented); feasibility vs derived calls OK
 - [x] E1/F1 first-dispatch YES / second denied + observed overrun fail-close (deterministic)
 - [x] E2/F2 product-equivalent model×effort pin (F1+F2 paths; no client surface)
@@ -626,8 +657,10 @@ Stage A REAL comes only after: Git integration → CI → post-merge verificatio
 - [x] Evidence / campaignId / authority / W-Sources
 - [x] FinOps realism gaps documented
 - [x] ZERO REAL / no router / no production selection
-- [ ] Integrated on main / CI green for enablement glue — **NOT YET** (await Morris Git decision)
+- [x] Integrated on main / CI green for enablement glue — **DONE** (PR **#467** / CI `{CI_POST}`)
+- [x] Model-universe / Astra disposition — **DECIDED OPTION C**
+- [ ] Financial envelope for full Option C worst-case — **OPEN (Morris)**
 - [ ] Stage A REAL — **NOT AUTHORIZED**

 **Verdict target for ChatGPT review:**
-`READY FOR CHATGPT CRITICAL REVIEW — GLOBAL MODEL × REASONING STAGE A ENABLEMENT CORRECTED — DETERMINISTIC PROVEN — ZERO REAL`
+`READY FOR CHATGPT CRITICAL REVIEW — STAGE A POST-MERGE TRUTH-SYNC — REAL READINESS DECISION PACK — MODEL UNIVERSE MORRIS DECISION REQUIRED — ZERO REAL`

```

## 10. New / rewritten full files

### `projects/sfia-studio/app/__tests__/nora-eval/c6.finops-contract-truth.d0.test.ts`

```ts
/** @vitest-environment node */
/**
 * C6 — Option C FinOps completeness + contract truth — ZERO REAL.
 */
import { describe, expect, it } from "vitest";
import {
  BudgetTracker,
  OPENAI_WEB_SEARCH_TOOL_CALL_USD,
  buildMw0CapabilityManifest,
  createEvalAgentsUsdAccounting,
  createGlobalMrStageADriver,
  deriveGlobalMrStageAEnvelope,
  GLOBAL_MR_STAGE_A_ASTRA_CHALLENGER,
  GLOBAL_MR_STAGE_A_CELL_CAPS,
  GLOBAL_MR_STAGE_A_CONTRACT_VERSION,
  GLOBAL_MR_STAGE_A_USD_POLICY,
} from "@/lib/nora-eval";

describe("C6 — Option C FinOps + contract truth (ZERO REAL)", () => {
  it("C6-01 — structural envelope 78/438/464 unchanged", () => {
    const d = deriveGlobalMrStageAEnvelope();
    expect(GLOBAL_MR_STAGE_A_CONTRACT_VERSION).toBe(
      "global-mr-campaign-contract-v3-candidate",
    );
    expect(d.primaryBaseCells).toBe(54);
    expect(d.astraChallengerCells).toBe(6);
    expect(d.baseCells).toBe(60);
    expect(d.maxSelectiveRepeats).toBe(18);
    expect(d.astraRepeatModelInvocationCeiling).toBe(0);
    expect(GLOBAL_MR_STAGE_A_CELL_CAPS.maxCellExecutions).toBe(78);
    expect(d.maxCellExecutions).toBe(78);
    expect(d.primaryBaseModelInvocationCeiling).toBe(297);
    expect(d.astraBaseModelInvocationCeiling).toBe(33);
    expect(d.baseModelInvocationCeiling).toBe(330);
    expect(d.repeatModelInvocationCeiling).toBe(108);
    expect(d.maxModelInvocations).toBe(438);
    expect(d.maxHostedWebOperations).toBe(26);
    expect(d.maxAggregateRealCalls).toBe(464);
  });

  it("C6-02..07 — model-token / hosted fee / known subtotal / feasibility", () => {
    const d = deriveGlobalMrStageAEnvelope();
    const f = d.usdFeasibility;
    expect(f.plannedModelTokenReserveUsd).toBeCloseTo(13.06896, 4);
    expect(f.plannedReserveUsdWorstCaseWithRepeats).toBeCloseTo(13.06896, 4);
    expect(f.webSearchToolCallUsd).toBe(OPENAI_WEB_SEARCH_TOOL_CALL_USD);
    expect(OPENAI_WEB_SEARCH_TOOL_CALL_USD).toBe(0.01);
    expect(f.plannedHostedWebSearchToolFeesUsd).toBeCloseTo(0.26, 8);
    expect(f.plannedHostedWebSearchToolFeesUsd).toBeCloseTo(
      d.maxHostedWebOperations * f.webSearchToolCallUsd,
      8,
    );
    expect(f.knownPlannedSubtotalUsd).toBeCloseTo(13.32896, 4);
    expect(f.knownPlannedSubtotalUsd).toBeCloseTo(
      f.plannedModelTokenReserveUsd + f.plannedHostedWebSearchToolFeesUsd,
      8,
    );
    expect(f.hardCapUsd).toBe(12);
    expect(GLOBAL_MR_STAGE_A_USD_POLICY.hardCapUsd).toBe(12);
    expect(f.ok).toBe(false);
    expect(f.status).toBe("REQUIRES_MORRIS_BUDGET_DECISION");
    expect(f.searchContentTokenExposure).toBe(
      "VARIABLE_PROVIDER_USAGE_DEPENDENT",
    );
    expect(f.cacheWritePricingDocumented).toBe(true);
    expect(f.cacheWriteQuantityDeterministicallyKnown).toBe(false);
    expect(f.invoice).toBe("NOT_OBSERVED");
  });

  it("C6-08/09/12/13 — settlement adds hosted fees once; invoice NOT_OBSERVED", () => {
    const state = createGlobalMrStageADriver({
      campaignId: `c6-settle-${Date.now()}`,
    });
    const usd = createEvalAgentsUsdAccounting({
      budget: state.budget,
      manifest: state.manifest,
      modelId: "gpt-5.6-luna",
      assumedInputTokens: 40,
      assumedOutputTokens: 20,
    });
    const estimate = usd.estimateNextInvocationUsd();
    expect(usd.canDispatchUnderHardCap(estimate).allowed).toBe(true);
    usd.commitReserve(estimate);
    const settled = usd.settleTurn({
      reservedInvocations: 1,
      inputTokens: 40,
      outputTokens: 20,
      totalTokens: 60,
      hostedWebSearchCalls: 2,
    });
    expect(settled.hostedToolCallFeesUsd).toBeCloseTo(0.02, 8);
    expect(settled.modelTokenEstimatedUsd).toBeGreaterThan(0);
    expect(settled.observedEstimatedUsd).toBeCloseTo(
      settled.modelTokenEstimatedUsd + settled.hostedToolCallFeesUsd,
      8,
    );
    expect(settled.estimatedUsd).toBe(settled.observedEstimatedUsd);
    expect(settled.invoice).toBe("NOT_OBSERVED");
  });

  it("C6-10 — hosted fees pushing cumulative observed > hard → next dispatch denied", () => {
    const policy = { targetUsd: 0.01, softStopUsd: 0.015, hardCapUsd: 0.02 };
    const budget = new BudgetTracker(policy, 0);
    const manifest = buildMw0CapabilityManifest("2026-09-05T00:00:00.000Z");
    const usd = createEvalAgentsUsdAccounting({
      budget,
      manifest,
      modelId: "gpt-5.6-luna",
      assumedInputTokens: 1,
      assumedOutputTokens: 1,
      webSearchToolCallUsd: 0.01,
    });
    const reserve = 0.005;
    expect(usd.canDispatchUnderHardCap(reserve).allowed).toBe(true);
    usd.commitReserve(reserve);
    // Model tokens tiny; 2 hosted calls = 0.02 → total observed ≈ 0.005+0.02 > 0.02 hard
    const settled = usd.settleTurn({
      reservedInvocations: 1,
      inputTokens: null,
      outputTokens: null,
      totalTokens: null,
      hostedWebSearchCalls: 2,
    });
    expect(settled.hostedToolCallFeesUsd).toBeCloseTo(0.02, 8);
    expect(settled.authorizationEnvelopeExceeded).toBe(true);
    expect(budget.hardStopTriggered).toBe(true);
    const next = usd.canDispatchUnderHardCap(0.001);
    expect(next.allowed).toBe(false);
    expect(next.reason).toBe("OBSERVED_AUTHORIZATION_ENVELOPE_EXCEEDED");
  });

  it("C6-11 — deterministic/fixture hosted calls do not add REAL tool fee when omitted/0", () => {
    const state = createGlobalMrStageADriver({
      campaignId: `c6-fixture-${Date.now()}`,
    });
    const usd = createEvalAgentsUsdAccounting({
      budget: state.budget,
      manifest: state.manifest,
      modelId: "gpt-5.6-luna",
      assumedInputTokens: 40,
      assumedOutputTokens: 20,
    });
    usd.commitReserve(usd.estimateNextInvocationUsd());
    const settled = usd.settleTurn({
      reservedInvocations: 1,
      inputTokens: 40,
      outputTokens: 20,
      totalTokens: 60,
      // omit / 0 — deterministic fixtures must not bill
      hostedWebSearchCalls: 0,
    });
    expect(settled.hostedToolCallFeesUsd).toBe(0);
    expect(settled.observedEstimatedUsd).toBeCloseTo(
      settled.modelTokenEstimatedUsd,
      8,
    );
  });

  it("C6-14/15 — Astra one-shot medium preserved; MW0 unchanged", () => {
    expect(GLOBAL_MR_STAGE_A_ASTRA_CHALLENGER).toEqual({
      modelId: "gpt-6-astra",
      reasoningEffort: "medium",
    });
    const mw0 = buildMw0CapabilityManifest("2026-09-05T00:00:00.000Z");
    expect(mw0.models.map((m) => m.modelId)).not.toContain("gpt-6-astra");
    expect(mw0.campaignAllowlist.modelIds).toEqual([
      "gpt-5.6-luna",
      "gpt-5.6-terra",
    ]);
  });
});

```

### `projects/sfia-studio/nora-cognitive-completion/11-nora-global-model-reasoning-stage-a-real-readiness.md`

```md
# 11 — Nora Global Model × Reasoning — Stage A REAL Readiness

| Field | Value |
| --- | --- |
| **Document ID** | `NORA-GLOBAL-MR-STAGE-A-REAL-READINESS-01` |
| **Maintenance** | `NORA-GLOBAL-MR-STAGE-A-OPTION-C-FINOPS-CONTRACT-TRUTH-01` (C6) |
| **Date** | 2026-09-05 22:50:00 CEST / `2026-09-05T20:50:00Z` |
| **Cycle** | 8 — EVOL / CRITICAL |
| **GO** | `GO MORRIS — CORRECTIF OPTION C FINOPS + CONTRACT TRUTH — ZERO REAL` **CONSUMED** |
| **Prior** | Option C technical design ADOPTED (D-GMR-ASTRA-01/02) · handoff `e782a279…` |
| **Status** | **LOCAL DELIVERY CANDIDATE** — branch `delivery/sfia-studio-global-mr-stage-a-astra-challenger` · **NO product commit/push/PR this cycle** |
| **REAL** | **NOT AUTHORIZED / NOT EXECUTED** |

---

## 1. Purpose

Correct FinOps completeness + Contract 10 current-truth consistency (C6-01 / C6-02) after ChatGPT Critical Review of Option C, without changing Option C structural envelope or model universe.

## 2. Git truth

| Item | Value |
| --- | --- |
| `origin/main` | `1dd5d67ad942c448becd637f4c2e55883d16ffca` |
| Prior Option C handoff | `e782a279e382f5463339979b30c30d985807a40a` |
| Delivery branch | `delivery/sfia-studio-global-mr-stage-a-astra-challenger` — **LOCAL DIRTY** |
| Product commit/push/PR | **NONE** |

## 3. Option C structural envelope — UNCHANGED

| Metric | Value |
| --- | --- |
| Primary base | **54** |
| Astra challenger | **6** medium ONE-SHOT |
| Base total | **60** |
| maxCellExecutions | **78** |
| maxModelInvocations | **438** |
| maxHostedWebOperations | **26** |
| maxAggregateRealCalls | **464** |
| contractVersion | `global-mr-campaign-contract-v3-candidate` |

## 4. FinOps decomposition (official OpenAI API Pricing 2026-09-05)

| Class | Value |
| --- | --- |
| plannedModelTokenReserveUsd | ≈ **13.06896** |
| webSearchToolCallUsd | **0.01** ($10 / 1k calls) |
| plannedHostedWebSearchToolFeesUsd | **0.26** (= 26 × 0.01) |
| knownPlannedSubtotalUsd | ≈ **13.32896** |
| searchContentTokenExposure | VARIABLE / PROVIDER-USAGE-DEPENDENT |
| cache-write qty on current path | NOT DETERMINISTICALLY KNOWN / NOT SEPARATELY METERED |
| invoice | NOT_OBSERVED |
| USD policy | **6 / 9 / 12** RETAINED |
| usdFeasibility | **FAIL** / `REQUIRES_MORRIS_BUDGET_DECISION` |

≈13.06896 is **model-token planned reserve only** — not total provider cost / not invoice ceiling.
≈13.32896 is **known planned subtotal** (model-token + max fixed hosted tool fees) — still not a safe new hard cap.

## 5. Stage A readiness checklist

| ID | Item | Status |
| --- | --- | --- |
| R-16 | Model universe accepted | **PASS / DECIDED OPTION C** |
| R-17 | Stage A grid accepted | **PASS** |
| R-18 | Financial envelope accepted | **OPEN — MORRIS FINANCIAL ENVELOPE DECISION REQUIRED** (known subtotal ≈13.32896 > hard 12; variable search-content/cache exposure visible) |
| R-19 | Astra account availability | **NOT PROVEN** |
| R-20 | REAL authorization explicit | **NOT AUTHORIZED** |

## 6. Anti-claims

- FinOps truth corrected **≠** Stage A REAL authorized
- knownPlannedSubtotal ≈13.32896 **≠** invoice / guaranteed ceiling
- Option C structure unchanged **≠** production routing / Astra-only selected
- C6 correctif **≠** Stage B/C implementation

## Readiness verdict

**STAGE A OPTION C DETERMINISTIC READINESS — TECHNICAL / MODEL UNIVERSE PROVEN — FINOPS TRUTH CORRECTED — MORRIS FINANCIAL ENVELOPE + REAL AUTHORIZATION STILL REQUIRED**

```

### `projects/sfia-studio/app/__tests__/nora-eval/c5.astra-challenger.d0.test.ts` (untracked full)

```ts
/** @vitest-environment node */
/**
 * C5 — Stage A Option C bounded GPT-6 Astra challenger — ZERO REAL.
 */
import { describe, expect, it } from "vitest";
import { ScriptedModel, assistantMessage } from "@openai/agents/testing";
import { FakeConversationProvider } from "@/lib/platform/ai";
import {
  assertGlobalMrStageAMatrixInvariants,
  buildCurrentOpenAiCapabilityManifest,
  buildGlobalModelReasoningCapabilityManifest,
  buildGlobalMrStageABaseCellPlan,
  buildGlobalMrStageAMatrix,
  buildMw0CapabilityManifest,
  canScheduleSelectiveRepeat,
  createEvalAgentsUsdAccounting,
  createGlobalMrStageADriver,
  createMeteredEvalCellProviderFactory,
  deriveGlobalMrStageAEnvelope,
  GLOBAL_MR_STAGE_A_ASTRA_CHALLENGER,
  GLOBAL_MR_STAGE_A_CELL_CAPS,
  GLOBAL_MR_STAGE_A_CONTRACT_VERSION,
  GLOBAL_MR_STAGE_A_EFFORTS,
  GLOBAL_MR_STAGE_A_PRIMARY_MODELS,
  materializeSelectiveRepeat,
  resolveEvalCellConversationProvider,
  runGlobalMrStageACell,
  type EvalCellProviderFactory,
  type GlobalMrStageAExecutor,
} from "@/lib/nora-eval";
import { validateRuntimeReasoningCapability } from "@/lib/nora-cognitive-runtime/reasoningCapability";
import {
  runNoraAgentsTurn,
  runNoraCognitiveTurn,
  sfiaBoundaryInstructions,
} from "@/lib/nora-cognitive-runtime";
import { analyzeIntent } from "@/features/project-assistant/f2/intentAnalysis";
import { projectAssistantSendAction } from "@/features/project-assistant/actions";

const RETRIEVED = "2026-09-05T20:00:00.000Z";

describe("C5 — Option C Astra challenger (ZERO REAL)", () => {
  it("MW0 historical manifest unchanged (no Astra)", () => {
    const mw0 = buildMw0CapabilityManifest(RETRIEVED);
    expect(mw0.models.map((m) => m.modelId)).not.toContain("gpt-6-astra");
    expect(mw0.campaignAllowlist.modelIds).toEqual([
      "gpt-5.6-luna",
      "gpt-5.6-terra",
    ]);
  });

  it("current provider + Global MR include Astra; Astra none fail-close", () => {
    const current = buildCurrentOpenAiCapabilityManifest(RETRIEVED);
    expect(current.models.some((m) => m.modelId === "gpt-6-astra")).toBe(true);
    const astra = current.models.find((m) => m.modelId === "gpt-6-astra")!;
    expect(astra.reasoningEfforts).toEqual([
      "low",
      "medium",
      "high",
      "xhigh",
      "max",
    ]);
    expect(astra.inputUsdPerMTok).toBe(10);
    expect(astra.cachedInputUsdPerMTok).toBe(1);
    expect(astra.outputUsdPerMTok).toBe(50);

    const global = buildGlobalModelReasoningCapabilityManifest(RETRIEVED);
    expect(global.campaignAllowlist.modelIds).toContain("gpt-6-astra");

    expect(() =>
      validateRuntimeReasoningCapability("gpt-6-astra", "medium"),
    ).not.toThrow();
    expect(() =>
      validateRuntimeReasoningCapability("gpt-6-astra", "low"),
    ).not.toThrow();
    expect(() =>
      validateRuntimeReasoningCapability("gpt-6-astra", "none"),
    ).toThrow(/PROVIDER|Effort none/i);
    expect(() =>
      validateRuntimeReasoningCapability("gpt-6-astra", "minimal"),
    ).toThrow(/minimal/i);
  });

  it("Stage A primary 54 + Astra 6 = 60; medium-only challenger; invariants", () => {
    expect(GLOBAL_MR_STAGE_A_CONTRACT_VERSION).toBe(
      "global-mr-campaign-contract-v3-candidate",
    );
    expect(GLOBAL_MR_STAGE_A_PRIMARY_MODELS).toHaveLength(3);
    expect(GLOBAL_MR_STAGE_A_EFFORTS).toEqual(["none", "medium", "high"]);
    expect(GLOBAL_MR_STAGE_A_ASTRA_CHALLENGER).toEqual({
      modelId: "gpt-6-astra",
      reasoningEffort: "medium",
    });

    const plan = buildGlobalMrStageABaseCellPlan();
    expect(plan).toHaveLength(60);
    expect(plan.filter((p) => !p.isChallenger)).toHaveLength(54);
    expect(plan.filter((p) => p.isChallenger)).toHaveLength(6);

    const cells = buildGlobalMrStageAMatrix({ campaignId: "c5-matrix" });
    expect(cells).toHaveLength(60);
    const astra = cells.filter((c) => c.isChallenger);
    expect(astra).toHaveLength(6);
    expect(astra.every((c) => c.model === "gpt-6-astra")).toBe(true);
    expect(astra.every((c) => c.reasoningEffort === "medium")).toBe(true);
    expect(astra.every((c) => c.selectiveRepeatEligible === false)).toBe(true);
    expect(astra.every((c) => c.runIndex === 0)).toBe(true);

    const inv = assertGlobalMrStageAMatrixInvariants(cells);
    expect(inv.ok).toBe(true);
  });

  it("derived envelope 78/438/464; USD decision required ~13.06896", () => {
    const d = deriveGlobalMrStageAEnvelope();
    expect(d.primaryBaseCells).toBe(54);
    expect(d.astraChallengerCells).toBe(6);
    expect(d.baseCells).toBe(60);
    expect(GLOBAL_MR_STAGE_A_CELL_CAPS.maxCellExecutions).toBe(78);
    expect(d.maxCellExecutions).toBe(78);
    expect(d.primaryBaseModelInvocationCeiling).toBe(297);
    expect(d.astraBaseModelInvocationCeiling).toBe(33);
    expect(d.baseModelInvocationCeiling).toBe(330);
    expect(d.repeatModelInvocationCeiling).toBe(108);
    expect(d.astraRepeatModelInvocationCeiling).toBe(0);
    expect(d.maxModelInvocations).toBe(438);
    expect(d.maxHostedWebOperations).toBe(26);
    expect(d.maxAggregateRealCalls).toBe(464);
    expect(d.usd.hardCapUsd).toBe(12);
    expect(d.usdFeasibility.ok).toBe(false);
    expect(d.usdFeasibility.status).toBe("REQUIRES_MORRIS_BUDGET_DECISION");
    expect(d.usdFeasibility.plannedModelTokenReserveUsd).toBeCloseTo(
      13.06896,
      4,
    );
    expect(d.usdFeasibility.plannedHostedWebSearchToolFeesUsd).toBeCloseTo(
      0.26,
      4,
    );
    expect(d.usdFeasibility.knownPlannedSubtotalUsd).toBeCloseTo(13.32896, 4);
    expect(d.usdFeasibility.plannedReserveUsdWorstCaseWithRepeats).toBeCloseTo(
      13.06896,
      4,
    );
  });

  it("Astra selective repeat denied; primary 18 repeats still possible", async () => {
    const state = createGlobalMrStageADriver({
      campaignId: `c5-repeat-${Date.now()}`,
    });
    const cells = buildGlobalMrStageAMatrix({ campaignId: state.campaignId });
    const astra = cells.find((c) => c.isChallenger)!;
    expect(canScheduleSelectiveRepeat(state, astra).allowed).toBe(false);
    expect(() => materializeSelectiveRepeat(astra)).toThrow(
      /SELECTIVE_REPEAT_DENIED/,
    );

    const primary = cells.filter((c) => !c.isChallenger);
    const executor: GlobalMrStageAExecutor = async () => ({
      passFail: "PASS",
      failureClass: "NONE",
      rawSummary: "ok",
      usage: null,
    });
    for (let i = 0; i < 18; i += 1) {
      const out = await runGlobalMrStageACell({
        state,
        cell: materializeSelectiveRepeat(primary[i]!),
        executor,
      });
      expect(out.stopped).toBe(false);
    }
    expect(state.selectiveRepeatsUsed).toBe(18);
    const gate19 = canScheduleSelectiveRepeat(state, primary[18]!);
    expect(gate19.allowed).toBe(false);
    expect(gate19.reason).toBe("SELECTIVE_REPEAT_POOL_EXHAUSTED");
    // base cell still runnable
    const baseOut = await runGlobalMrStageACell({
      state,
      cell: primary[18]!,
      executor,
    });
    expect(baseOut.stopped).toBe(false);
  });

  it("agents_cognitive path pins gpt-6-astra medium (ZERO REAL)", async () => {
    delete process.env.OPENAI_API_KEY;
    const state = createGlobalMrStageADriver({
      campaignId: `c5-agents-${Date.now()}`,
    });
    const cell = buildGlobalMrStageAMatrix({
      campaignId: state.campaignId,
    }).find(
      (c) => c.isChallenger && c.executionKind === "agents_cognitive",
    )!;
    expect(cell.model).toBe("gpt-6-astra");
    expect(cell.reasoningEffort).toBe("medium");

    const usd = createEvalAgentsUsdAccounting({
      budget: state.budget,
      manifest: state.manifest,
      modelId: "gpt-6-astra",
      assumedInputTokens: 40,
      assumedOutputTokens: 20,
    });
    const turn = await runNoraCognitiveTurn({
      correlationId: "c5-agents",
      projectId: "proj-c5",
      messages: [
        { role: "system", content: "You are Nora test." },
        { role: "user", content: "hello astra" },
      ],
      provider: new FakeConversationProvider({ scripted: ["unused"] }),
      enableTools: false,
      skipSourceStrategy: true,
      cognitiveWorkloadSignals: {
        ambiguity: "low",
        rigorCriticality: "low",
        contradictionRisk: "low",
        verificationNeed: "low",
      },
      evalModelReasoningControl: {
        modelId: "gpt-6-astra",
        reasoningEffort: "medium",
        agentsModel: new ScriptedModel([[assistantMessage("ASTRA_AGENTS")]]),
      },
      campaignBudget: state.campaignBudget,
      usdAccounting: usd,
    });
    expect(turn.text).toContain("ASTRA_AGENTS");
    expect(turn.evalPinnedModelId).toBe("gpt-6-astra");
    expect(turn.evalPinnedReasoningEffort).toBe("medium");

    const agents = await runNoraAgentsTurn({
      correlationId: "c5-agents-direct",
      projectId: "proj-c5",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: "x",
      model: new ScriptedModel([[assistantMessage("ASTRA_DIRECT")]]),
      enableTools: false,
      maxTurns: 1,
      campaignBudget: state.campaignBudget,
      usdAccounting: createEvalAgentsUsdAccounting({
        budget: state.budget,
        manifest: state.manifest,
        modelId: "gpt-6-astra",
        assumedInputTokens: 40,
        assumedOutputTokens: 20,
      }),
    });
    expect(agents.text).toContain("ASTRA_DIRECT");
  });

  it("F2 / MW6 factory pin receives gpt-6-astra medium exactly", async () => {
    delete process.env.OPENAI_API_KEY;
    const state = createGlobalMrStageADriver({
      campaignId: `c5-f2-${Date.now()}`,
    });
    const seen: string[] = [];
    const innerFactory: EvalCellProviderFactory = ({
      modelId,
      reasoningEffort,
    }) => {
      seen.push(`${modelId}|${reasoningEffort}`);
      return new FakeConversationProvider();
    };
    const factory = createMeteredEvalCellProviderFactory({
      innerFactory,
      manifest: state.manifest,
      budget: state.budget,
      campaignBudget: state.campaignBudget,
      assumedPreflight: { inputTokens: 10, outputTokens: 5 },
    });

    const provider = resolveEvalCellConversationProvider({
      evalModelReasoningControl: {
        modelId: "gpt-6-astra",
        reasoningEffort: "medium",
      },
      evalCellProviderFactory: factory,
    });
    expect(provider).toBeTruthy();
    expect(seen).toEqual(["gpt-6-astra|medium"]);

    await analyzeIntent({
      userContent: "Résume __F2_INFORMATIVE__",
      projectSummary: "p",
      provider: factory({
        modelId: "gpt-6-astra",
        reasoningEffort: "medium",
      }),
      evalModelReasoningControl: {
        modelId: "gpt-6-astra",
        reasoningEffort: "medium",
      },
    });
    expect(seen.filter((s) => s === "gpt-6-astra|medium").length).toBeGreaterThanOrEqual(
      2,
    );

    // MW6 governed cell uses the same factory pin contract (no live hosted).
    const mw6Cell = buildGlobalMrStageAMatrix({
      campaignId: state.campaignId,
    }).find((c) => c.isChallenger && c.executionKind === "mw6_governed")!;
    expect(mw6Cell.model).toBe("gpt-6-astra");
    const mw6Provider = resolveEvalCellConversationProvider({
      evalModelReasoningControl: {
        modelId: mw6Cell.model,
        reasoningEffort: mw6Cell.reasoningEffort,
      },
      evalCellProviderFactory: factory,
    });
    expect(mw6Provider).toBeTruthy();
    expect(seen.at(-1)).toBe("gpt-6-astra|medium");
  });

  it("zero client-callable model override surfaces (C4-01 regression)", () => {
    const src = projectAssistantSendAction.toString();
    expect(src).not.toMatch(/evalModelReasoningControl/);
    expect(src).not.toMatch(/evalCellProviderFactory/);
    expect(src).not.toMatch(/campaignBudget/);
    expect(src).not.toMatch(/gpt-6-astra/);
  });
});

describe("C5 — MW6 governed Astra identity (ZERO LIVE)", () => {
  it("mw6_governed Astra challenger Evidence identity", async () => {
    const state = createGlobalMrStageADriver({
      campaignId: `c5-mw6-ev-${Date.now()}`,
    });
    const cell = buildGlobalMrStageAMatrix({
      campaignId: state.campaignId,
    }).find(
      (c) => c.isChallenger && c.executionKind === "mw6_governed",
    )!;
    expect(cell.model).toBe("gpt-6-astra");
    expect(cell.reasoningEffort).toBe("medium");
    expect(cell.attachHostedWebSearch).toBe(true);
    expect(cell.selectiveRepeatEligible).toBe(false);

    const out = await runGlobalMrStageACell({
      state,
      cell,
      executor: async (c) => ({
        passFail: "PASS",
        failureClass: "NONE",
        rawSummary: "astra-mw6-ok",
        usage: null,
        productObservation: {
          pinnedModel: c.model,
          pinnedEffort: c.reasoningEffort,
        },
        reportedModelInvocationsConsumed: 0,
        reportedHostedOperationsConsumed: 0,
      }),
    });
    expect(out.stopped).toBe(false);
    expect(out.evidence?.cell.model).toBe("gpt-6-astra");
    expect(out.evidence?.productPath).toBe("f1");
    expect(out.evidence?.evidenceRefs).toEqual(
      expect.arrayContaining([
        "challenger:true",
        "executionKind:mw6_governed",
        "model:gpt-6-astra",
        "effort:medium",
      ]),
    );
  });

  it("Evidence identity for Astra challenger cell (any path)", async () => {
    const state = createGlobalMrStageADriver({
      campaignId: `c5-ev-${Date.now()}`,
    });
    const cell = buildGlobalMrStageAMatrix({
      campaignId: state.campaignId,
    }).find((c) => c.isChallenger)!;
    const out = await runGlobalMrStageACell({
      state,
      cell,
      executor: async () => ({
        passFail: "PASS",
        failureClass: "NONE",
        rawSummary: "astra-ok",
        usage: null,
      }),
    });
    expect(out.evidence?.cell.model).toBe("gpt-6-astra");
    expect(out.evidence?.cell.reasoningEffort).toBe("medium");
    expect(out.evidence?.evidenceRefs).toEqual(
      expect.arrayContaining([
        "challenger:true",
        "selectiveRepeatEligible:false",
        "model:gpt-6-astra",
        "effort:medium",
        `contract:${GLOBAL_MR_STAGE_A_CONTRACT_VERSION}`,
      ]),
    );
    expect(out.evidence?.productObservation?.isChallenger).toBe(true);
  });
});

```

---

## 11. Publish plan

- `scripts/sfia/publish-review-handoff.sh`
- branch `sfia/review-handoff`
- file `sfia-review-handoff/latest-chatgpt-review.md`
- product Git: **NONE**
