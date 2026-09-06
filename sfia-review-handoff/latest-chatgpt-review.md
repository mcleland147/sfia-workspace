# GLOBAL-MR-STAGE-A-REAL-CORR-01 — Review Pack FULL (incl. CORR-02B)

- **timestamp (UTC):** 2026-09-06T07:23:27Z
- **Cycle:** 8 continuation — RUN / CORRECTIVE / CRITICAL
- **SAME CORRECTIVE LOT:** GLOBAL-MR-STAGE-A-REAL-CORR-01
- **Morris GO decisions consumed:**
  1. STAGE A REAL CORRECTIVE F2 + HOSTED ACCOUNTING + STOP/REPEAT GOVERNANCE — ZERO REAL
  2. EXTEND MW6 OBSERVATION SCOPE — pass through existing hostedSearchObserve via runNoraCognitiveTurn to mw6GovernedNoraTurn, with types.ts type widen only — ZERO REAL — SAME LOT — NO SECOND HOSTED COUNTER/LEDGER
- **CKC:** ABSENT (fallback = routing + v2.6 + Contract 10/11 + REAL Evidence + Build Doctrine)

---

## 1. Repository / worktree truth

| Item | Value |
|------|-------|
| Repository | mcleland147/sfia-workspace |
| origin/main | 718de6506532be7e2ae1a504f992240e548e62ed (PR #469 MERGED) |
| Worktree | /Users/morris/Projects/sfia-workspace-global-mr-stage-a-real-corr-01 |
| Branch | fix/sfia-studio-global-mr-stage-a-real-corr-01 |
| HEAD | 718de6506532be7e2ae1a504f992240e548e62ed (= origin/main) |
| Product candidate | LOCAL DIRTY — NO product commit/push/PR |
| Prior CORR-01 handoff | c7167a84fca0b14a607bd14c90589d0c0fbff8a7 |
| Prior Stage A REAL handoff | 0918a0bf8127bfe63ec6b4670a39901b00678cb5 |
| Campaign (prior REAL) | nora-global-mr-stage-a-1788669913998 |
| Prior Outcome | C — INSUFFICIENT EVIDENCE retained |
| Contract | global-mr-campaign-contract-v3-candidate |

Baseline drift: NONE. Handoff tip before this cycle: c7167a84 (reconciled).

---

## 2. Convergence Pre-check

KEEP: runNoraAgentsTurn; hostedSearchObserve; NoraCampaignBudget (enforcement SoT); Stage A integrity; Option C matrix; F2 path; eval cell provider; MeteredConversationProvider; BudgetTracker.

ADAPT: runNoraCognitiveTurn (factual pass-through); mw6GovernedNoraTurn (factual composition); project-assistant types (representation widen only); F2 mode ordering; Stage A hosted parity / systemic stop / repeat triggers (prior CORR-01).

DO NOT BUILD: second hosted counter/ledger; second MW6 path; new provider; new runner; new hosted abstraction. None built.

---

## 3. Accepted prior Stage A REAL facts

Agents 20/20 REAL PASS; F2 48/48 INCONCLUSIVE (PROVIDER_UNAVAILABLE); MW6 model-path observations with liveHostedDispatchCalls=0 vs canonical hosted sum 12; 18/18 invalid repeats; Outcome C.

---

## 4. Full corrective lot status

| ID | Status |
|----|--------|
| CORR-01 F2 provider binding | CLOSED AT DETERMINISTIC SCOPE |
| CORR-02A hosted mismatch fail-close | CLOSED AT DETERMINISTIC SCOPE |
| CORR-02B factual MW6 hosted propagation | CLOSED AT DETERMINISTIC SCOPE |
| CORR-03A systemic stop | CLOSED AT DETERMINISTIC SCOPE |
| CORR-03B repeat trigger governance | CLOSED AT DETERMINISTIC SCOPE |

---

## 5. CORR-02B root cause + design

Root cause: runNoraAgentsTurn already exposes hostedSearchObserve (rawCallsObserved, deterministicBoundaryUsed, …). runNoraCognitiveTurn consumed it then dropped it (hostedSearchObserve: _drop) on both Memory-B-unavailable and session-available paths. mw6GovernedNoraTurn therefore hardcoded liveHostedDispatchCalls: 0.

Design retained:
1. Pass through existing hostedSearchObserve on both cognitive-turn paths (no recompute; no observations.length; no budget-derived count).
2. resolveLiveHostedDispatchCallsFromHostedObserve: LIVE-shaped (deterministicBoundaryUsed===false) → rawCallsObserved; else → 0.
3. Compose that value into mw6AuthorityComposition.liveHostedDispatchCalls.
4. Widen DTO type literal 0 → number (representation only).
5. Stage A integrity (CORR-02A) remains enforcement of observed-vs-canonical mismatch; NoraCampaignBudget remains sole accounting SoT. MW6 does not call claimHostedWebOperations.

No second counter/ledger: claim remains only in runNoraAgentsTurn after factual liveCalls; MW6 is Evidence/parity observation only.

---

## 6. Files modified (same lot — local only)

| Path | Role |
|------|------|
| features/project-assistant/f2/orchestrateF2.ts | CORR-01 |
| lib/nora-eval/globalModelReasoningStageA.ts | CORR-02A/03A/03B |
| lib/nora-eval/index.ts | exports |
| lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts | CORR-02B pass-through |
| features/project-assistant/mw6GovernedNoraTurn.ts | CORR-02B mapping |
| features/project-assistant/types.ts | type widen only |
| __tests__/nora-eval/corr-stage-a-real-integrity.d0.test.ts | CORR-01 suite |
| __tests__/nora-eval/corr-02b-mw6-hosted-observation.d0.test.ts | CORR-02B suite |
| __tests__/nora-eval/e4|c3.call-accounting|c5 | trigger-arg updates |

NOT modified: runNoraAgentsTurn.ts accounting; campaignBudget; Roadmap/08/10/11; method; package/lock; CI; nora-cognitive-runtime/index.ts.

---

## 7. Option C / FinOps invariants (unchanged)

54 + 6 / 60 / 78 / 438 / 26 / 464 / maxSelectiveRepeats 18
FinOps 15 / 18 / 20
contractVersion global-mr-campaign-contract-v3-candidate
Prior Outcome C retained.

---

## 8. Validation (ZERO REAL)

| Command | Outcome |
|---------|---------|
| targeted (corr-02b + corr integrity + e2/e4/c3x2/c4/c5) | 8 files / 73 tests PASS |
| npx vitest run __tests__/nora-eval/ | 29 passed / 3 skipped; 239 passed / 3 skipped |
| npm run typecheck | PASS |
| npm run lint | PASS |
| npm test | 308 passed / 17 skipped; 3032 passed / 135 skipped |
| npm run build | PASS |
| git diff --check (product) | clean |

ZERO REAL: no OPENAI_API_KEY; Fake/Scripted/synthetic observe only; no models.retrieve / responses.create / live web_search / spend.

---

## 9. Product Git publication

- product commit = NONE
- product push = NONE
- product PR = NONE

---

## 10. Anti-claims

DO NOT CLAIM: Stage A complete; Stage A REAL rerun; F2/W-Sources hosted REAL proven; Stage B/C authorized; production model/routing; Cognitive Completion proven; runtime v3 ADOPTED; invoice <=20.

---

## 11. Allowed claims

- CORR-01 F2 = CLOSED AT DETERMINISTIC SCOPE
- CORR-02A hosted mismatch = CLOSED AT DETERMINISTIC SCOPE
- CORR-02B factual hosted propagation = CLOSED AT DETERMINISTIC SCOPE
- CORR-03A systemic stop = CLOSED AT DETERMINISTIC SCOPE
- CORR-03B repeat governance = CLOSED AT DETERMINISTIC SCOPE
- GLOBAL-MR-STAGE-A-REAL-CORR-01 COMPLETE AT DETERMINISTIC SCOPE
- ZERO REAL — Option C unchanged — Outcome C retained — product local/uncommitted

---

## 12. Reservations

- No new REAL proof this cycle.
- Future REAL continuation still requires distinct Morris GO after integration/post-merge.
- Future REAL launcher must report factual hosted / map composition; mismatch still hard-stops.

---

## 13. Next gate

ChatGPT Critical Review → Morris Git integration GO
Then distinct Stage A REAL continuation decision — NOT Stage B.

---

## 14. Verdict

READY FOR CHATGPT CRITICAL REVIEW —
GLOBAL-MR-STAGE-A-REAL-CORR-01 COMPLETE AT DETERMINISTIC SCOPE —
CORR-01 F2 CLOSED —
CORR-02A HOSTED MISMATCH CLOSED —
CORR-02B FACTUAL HOSTED PROPAGATION CLOSED —
CORR-03A SYSTEMIC STOP CLOSED —
CORR-03B REPEAT GOVERNANCE CLOSED —
54 PRIMARY + 6 ASTRA / 60 BASE / 78 CELLS / 438 MODEL / 26 HOSTED / 464 AGGREGATE UNCHANGED —
15 / 18 / 20 UNCHANGED —
PRIOR STAGE A OUTCOME C RETAINED —
ZERO REAL —
ZERO PRODUCT COMMIT/PUSH/PR —
CHATGPT CRITICAL REVIEW REQUIRED BEFORE ANY PRODUCT GIT INTEGRATION DECISION.

### Sub-status

| Item | Status |
|------|--------|
| F2 injected-provider mode | PASS deterministic |
| MW6 live-shaped factual observation | PASS deterministic |
| MW6 deterministic fixture | 0 REAL hosted |
| hosted parity equal | PASS |
| hosted parity mismatch | HARD STOP |
| systemic config defect | HARD STOP |
| post-stop dispatch | DENIED |
| generic INCONCLUSIVE repeat | DENIED |
| valid repeat trigger | SUPPORTED |
| Astra repeat | DENIED |
| Option C | UNCHANGED |
| Stage A REAL / Stage B | NOT AUTHORIZED |
| product commit/push/PR | NONE |

---

## 15. Full useful diffs — CORR-02B cognitive pass-through

```diff

diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
index fa9b6b33..463db0da 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
@@ -22,6 +22,7 @@ import { resolveNoraSessionSqlitePath } from "./sessionPaths";
 import {
   runNoraAgentsTurn,
   shouldUseProviderAgentsModelAdapter,
+  type RunNoraAgentsTurnHostedSearchObserve,
 } from "./runNoraAgentsTurn";
 import type { NoraCognitiveTurnResult } from "./types";
 import {
@@ -208,6 +209,14 @@ export type RunNoraCognitiveTurnInput = {
   usdAccounting?: NoraAgentsUsdAccounting;
 };

+/**
+ * CORR-02B — cognitive turn result preserves factual hosted observation from
+ * runNoraAgentsTurn (Evidence / parity only — not a second accounting SoT).
+ */
+export type NoraCognitiveTurnResultWithHostedObserve = NoraCognitiveTurnResult & {
+  hostedSearchObserve?: RunNoraAgentsTurnHostedSearchObserve;
+};
+
 function emitCognitiveStrategyTelemetry(
   sink: EventSink | undefined,
   correlationId: string,
@@ -637,7 +646,7 @@ async function prepareMw4Grounding(input: {

 export async function runNoraCognitiveTurn(
   input: RunNoraCognitiveTurnInput,
-): Promise<NoraCognitiveTurnResult> {
+): Promise<NoraCognitiveTurnResultWithHostedObserve> {
   const strategyDecision = resolveCognitiveStrategyForTurn(input);
   if (strategyDecision) {
     emitCognitiveStrategyTelemetry(
@@ -758,8 +767,7 @@ export async function runNoraCognitiveTurn(
       mw6 = composed.surface;
       turn.text = composed.governedText;
     }
-    const { hostedSearchObserve: _drop, budgetObserve, ...turnBase } = turn;
-    void _drop;
+    const { hostedSearchObserve, budgetObserve, ...turnBase } = turn;
     const mw6AuthorityBinding = budgetObserve
       ? {
           authorityBound: budgetObserve.authorityBound,
@@ -784,18 +792,22 @@ export async function runNoraCognitiveTurn(
             readCoverageDisclosure: readDisclosure || null,
           }
         : undefined;
-    return finalizeTurn(
-      {
-        ...turnBase,
-        memoryBCompactionState: "none",
-        memoryBCompactionDetails: null,
-        ...(mw6AuthorityBinding ? { mw6AuthorityBinding } : {}),
-      },
-      input,
-      strategyDecision,
-      mw4,
-      mw6,
-    );
+    return {
+      ...finalizeTurn(
+        {
+          ...turnBase,
+          memoryBCompactionState: "none",
+          memoryBCompactionDetails: null,
+          ...(mw6AuthorityBinding ? { mw6AuthorityBinding } : {}),
+        },
+        input,
+        strategyDecision,
+        mw4,
+        mw6,
+      ),
+      // CORR-02B — factual hosted observation pass-through (no drop).
+      ...(hostedSearchObserve ? { hostedSearchObserve } : {}),
+    };
   }

   const probe = await probeMemoryBAvailability({
@@ -920,8 +932,7 @@ export async function runNoraCognitiveTurn(
       mw6 = composed.surface;
       turn.text = composed.governedText;
     }
-    const { hostedSearchObserve: _drop, budgetObserve, ...turnBase } = turn;
-    void _drop;
+    const { hostedSearchObserve, budgetObserve, ...turnBase } = turn;
     const mw6AuthorityBinding = budgetObserve
       ? {
           authorityBound: budgetObserve.authorityBound,
@@ -971,7 +982,11 @@ export async function runNoraCognitiveTurn(
       }
     }

-    return finalized;
+    return {
+      ...finalized,
+      // CORR-02B — factual hosted observation pass-through (no drop).
+      ...(hostedSearchObserve ? { hostedSearchObserve } : {}),
+    };
   } finally {
     if (probe.session) {
       probe.session.close();

```

## 16. Full useful diffs — CORR-02B MW6 + types

```diff

diff --git a/projects/sfia-studio/app/features/project-assistant/mw6GovernedNoraTurn.ts b/projects/sfia-studio/app/features/project-assistant/mw6GovernedNoraTurn.ts
index 95c37200..ad844736 100644
--- a/projects/sfia-studio/app/features/project-assistant/mw6GovernedNoraTurn.ts
+++ b/projects/sfia-studio/app/features/project-assistant/mw6GovernedNoraTurn.ts
@@ -28,7 +28,6 @@ import {
   requireCanonicalCampaignBudget,
   runNoraCognitiveTurn,
   type NoraCampaignBudget,
-  type NoraCognitiveTurnResult,
   type NoraEvalModelReasoningControl,
   type NoraAgentsUsdAccounting,
 } from "@/lib/nora-cognitive-runtime";
@@ -54,6 +53,27 @@ import type {

 const MAX_HISTORY_MESSAGES = 20;

+/**
+ * CORR-02B — factual LIVE hosted dispatch count from hostedSearchObserve.
+ * Deterministic/fixture boundary and absent observation → 0 REAL.
+ * Evidence/parity only — does not claim NoraCampaignBudget.
+ */
+export function resolveLiveHostedDispatchCallsFromHostedObserve(
+  hostedSearchObserve:
+    | {
+        deterministicBoundaryUsed: boolean;
+        rawCallsObserved: number;
+      }
+    | undefined
+    | null,
+): number {
+  if (!hostedSearchObserve) return 0;
+  if (hostedSearchObserve.deterministicBoundaryUsed === true) return 0;
+  const n = hostedSearchObserve.rawCallsObserved;
+  if (!Number.isSafeInteger(n) || n < 0) return 0;
+  return n;
+}
+
 function toContextDto(
   result: Extract<
     Awaited<ReturnType<typeof loadProjectRuntimeForAssistant>>,
@@ -156,7 +176,11 @@ export type Mw6GovernedNoraProductTurnSuccess = Extract<
     executionContractId: string;
     authorityEvidenceId: string;
     actorId: string;
-    liveHostedDispatchCalls: 0;
+    /**
+     * Factual LIVE hosted web-search dispatch count from turn.hostedSearchObserve.
+     * Fixture/deterministic boundary → 0 (not REAL). Evidence only — not budget SoT.
+     */
+    liveHostedDispatchCalls: number;
   };
 };

@@ -373,7 +397,7 @@ export async function runMw6GovernedNoraProductTurn(
   const provider = input.provider ?? resolveConversationProvider();
   const workspaceRoot = resolveWorkspaceRootFromAppCwd();

-  let turn: NoraCognitiveTurnResult;
+  let turn: Awaited<ReturnType<typeof runNoraCognitiveTurn>>;
   try {
     turn = await runNoraCognitiveTurn({
       correlationId: `mw6-gov:${project.projectId}:${composed.executionContractId}`,
@@ -413,6 +437,9 @@ export async function runMw6GovernedNoraProductTurn(
   }

   const binding = turn.mw6AuthorityBinding;
+  const liveHostedDispatchCalls = resolveLiveHostedDispatchCallsFromHostedObserve(
+    turn.hostedSearchObserve,
+  );
   return {
     ok: true,
     status: "ok",
@@ -442,7 +469,7 @@ export async function runMw6GovernedNoraProductTurn(
       executionContractId: composed.executionContractId,
       authorityEvidenceId: composed.authorityEvidenceId,
       actorId: pilote.actor.actorId,
-      liveHostedDispatchCalls: 0,
+      liveHostedDispatchCalls,
       realPreflightBlocked: binding?.realPreflightBlocked === true,
     },
   };
diff --git a/projects/sfia-studio/app/features/project-assistant/types.ts b/projects/sfia-studio/app/features/project-assistant/types.ts
index 6811370c..ed914e60 100644
--- a/projects/sfia-studio/app/features/project-assistant/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/types.ts
@@ -227,7 +227,11 @@ export type ProjectAssistantSendSuccess = {
     executionContractId: string;
     authorityEvidenceId: string;
     actorId: string;
-    liveHostedDispatchCalls: 0;
+    /**
+     * Factual LIVE hosted web-search dispatch count from turn.hostedSearchObserve.
+     * Fixture/deterministic boundary → 0 (not REAL). Evidence only — not budget SoT.
+     */
+    liveHostedDispatchCalls: number;
   };
 };


```

## 17. Full useful diffs — CORR-01 F2

```diff

diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index 7c314422..3e137822 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -578,18 +578,11 @@ export async function orchestrateAssistantSend(input: {
   }

   let project = toContextDto(projectResult);
-  const modeResolution = resolveMode(input.provider);
-  if (!modeResolution.canProceed) {
-    return {
-      ok: false,
-      status: "provider_unavailable",
-      code: "PROVIDER_UNAVAILABLE",
-      message: modeResolution.message ?? "Provider indisponible.",
-      mode: "unavailable",
-      retryable: false,
-    };
-  }

+  // CORR-01 — resolve eval cell provider BEFORE mode/availability gating.
+  // Under eval control, evalCellProviderFactory is the required pin source;
+  // global OPENAI_MODEL absence must not fail before the injected cell provider
+  // is assessed (and must never be manufactured via process.env mutation).
   const cellProvider = resolveEvalCellConversationProvider({
     evalModelReasoningControl: input.evalModelReasoningControl,
     evalCellProviderFactory: input.evalCellProviderFactory,
@@ -602,11 +595,22 @@ export async function orchestrateAssistantSend(input: {
       code: "EVAL_CELL_PROVIDER_REQUIRED",
       message:
         "evalModelReasoningControl requires evalCellProviderFactory (no arbitrary provider fallback).",
-      mode: modeResolution.mode,
+      mode: isFakeConversationProviderForced() ? "fixture" : "unavailable",
       retryable: false,
     };
   }
   const effectiveProvider = cellProvider ?? input.provider;
+  const modeResolution = resolveMode(effectiveProvider);
+  if (!modeResolution.canProceed) {
+    return {
+      ok: false,
+      status: "provider_unavailable",
+      code: "PROVIDER_UNAVAILABLE",
+      message: modeResolution.message ?? "Provider indisponible.",
+      mode: "unavailable",
+      retryable: false,
+    };
+  }

   let analysisResult: Awaited<ReturnType<typeof analyzeIntent>>;
   let truthCContextForF1: string | undefined;

```

## 18. Full useful diffs — Stage A / index (CORR-02A/03)

```diff

diff --git a/projects/sfia-studio/app/lib/nora-eval/globalModelReasoningStageA.ts b/projects/sfia-studio/app/lib/nora-eval/globalModelReasoningStageA.ts
index 689430aa..e397bd3e 100644
--- a/projects/sfia-studio/app/lib/nora-eval/globalModelReasoningStageA.ts
+++ b/projects/sfia-studio/app/lib/nora-eval/globalModelReasoningStageA.ts
@@ -440,6 +440,11 @@ export type GlobalMrStageACell = {
   isChallenger: boolean;
   /** False for Astra ONE-SHOT challenger cells. */
   selectiveRepeatEligible: boolean;
+  /**
+   * Required for selective-repeat materialization (CORR-03B).
+   * Absent / invalid → repeat denied.
+   */
+  selectiveRepeatTrigger?: GlobalMrStageASelectiveRepeatTrigger;
   executionKind: GlobalMrStageAExecutionKind;
   attachHostedWebSearch: boolean;
   cell: CampaignCellConfig;
@@ -498,7 +503,11 @@ export type GlobalMrStageAStopReason =
   | "AGGREGATE_CAP"
   | "UNSUPPORTED_CELL"
   | "CAMPAIGN_STOP"
-  | "EXECUTOR_DENIED";
+  | "EXECUTOR_DENIED"
+  /** Systemic required-config / provider-binding defect — not cognitive failure. */
+  | "REQUIRED_CONFIG_UNAVAILABLE"
+  /** Observed hosted count ≠ canonical campaign-budget hosted delta. */
+  | "EVIDENCE_INTEGRITY_HOSTED_MISMATCH";

 /** Per-cell denial — never latches campaign-wide stop. */
 export type GlobalMrStageACellDenialReason =
@@ -506,6 +515,38 @@ export type GlobalMrStageACellDenialReason =
   | "SELECTIVE_REPEAT_DENIED"
   | "RUN_INDEX_INVALID";

+/**
+ * Contract-valid selective-repeat triggers (CORR-03B).
+ * Generic passFail_INCONCLUSIVE alone is NOT a trigger.
+ */
+export type GlobalMrStageASelectiveRepeatTrigger =
+  | "TOP_CANDIDATE"
+  | "BORDERLINE"
+  | "SUSPECTED_VARIANCE"
+  | "NEIGHBOR_CONTRADICTION"
+  | "LATENCY_TOKEN_COST_ANOMALY"
+  | "STAGE_B_DEPENDENCY";
+
+export const GLOBAL_MR_STAGE_A_SELECTIVE_REPEAT_TRIGGERS = [
+  "TOP_CANDIDATE",
+  "BORDERLINE",
+  "SUSPECTED_VARIANCE",
+  "NEIGHBOR_CONTRADICTION",
+  "LATENCY_TOKEN_COST_ANOMALY",
+  "STAGE_B_DEPENDENCY",
+] as const satisfies readonly GlobalMrStageASelectiveRepeatTrigger[];
+
+export function isGlobalMrStageASelectiveRepeatTrigger(
+  value: unknown,
+): value is GlobalMrStageASelectiveRepeatTrigger {
+  return (
+    typeof value === "string" &&
+    (GLOBAL_MR_STAGE_A_SELECTIVE_REPEAT_TRIGGERS as readonly string[]).includes(
+      value,
+    )
+  );
+}
+
 export type GlobalMrStageAExecutorResult = {
   passFail: PassFail;
   failureClass: FailureClass;
@@ -514,8 +555,9 @@ export type GlobalMrStageAExecutorResult = {
   scorers?: RunEvidence["scorers"];
   productObservation?: Record<string, unknown>;
   /**
-   * DIAGNOSTIC ONLY — not enforcement authority.
-   * Driver compares against canonical NoraCampaignBudget deltas when present.
+   * Observation / Evidence-integrity field — NOT enforcement authority.
+   * Driver compares against canonical NoraCampaignBudget deltas.
+   * Mismatch latches EVIDENCE_INTEGRITY_HOSTED_MISMATCH (CORR-02).
    */
   reportedModelInvocationsConsumed?: number;
   reportedHostedOperationsConsumed?: number;
@@ -772,7 +814,11 @@ export function acknowledgeGlobalMrStageASoftReview(
 export function canScheduleSelectiveRepeat(
   state: GlobalMrStageADriverState,
   baseCell: GlobalMrStageACell,
+  trigger?: GlobalMrStageASelectiveRepeatTrigger | null,
 ): { allowed: boolean; reason?: GlobalMrStageACellDenialReason | string } {
+  if (!isGlobalMrStageASelectiveRepeatTrigger(trigger)) {
+    return { allowed: false, reason: "SELECTIVE_REPEAT_TRIGGER_REQUIRED" };
+  }
   if (baseCell.isSelectiveRepeat) {
     return { allowed: false, reason: "already_a_repeat" };
   }
@@ -795,9 +841,19 @@ export function canScheduleSelectiveRepeat(
   return { allowed: true };
 }

+/**
+ * Materialize a selective repeat. Requires an explicit contractual trigger (CORR-03B).
+ * Generic INCONCLUSIVE alone is not a valid trigger.
+ */
 export function materializeSelectiveRepeat(
   baseCell: GlobalMrStageACell,
+  trigger: GlobalMrStageASelectiveRepeatTrigger,
 ): GlobalMrStageACell {
+  if (!isGlobalMrStageASelectiveRepeatTrigger(trigger)) {
+    throw new Error(
+      "SELECTIVE_REPEAT_TRIGGER_REQUIRED: contractual trigger must be provided",
+    );
+  }
   if (baseCell.runIndex > 0 || baseCell.isSelectiveRepeat) {
     throw new Error(
       "SELECTIVE_REPEAT_RUN_INDEX_INVALID: runIndex>0 cannot be re-materialized",
@@ -812,10 +868,62 @@ export function materializeSelectiveRepeat(
     ...baseCell,
     runIndex: 1,
     isSelectiveRepeat: true,
+    selectiveRepeatTrigger: trigger,
     cell: { ...baseCell.cell, runIndex: 1 },
   };
 }

+/**
+ * Resolve factual observed hosted-call count for Evidence integrity (CORR-02).
+ * Prefers explicit executor report; falls back to nested MW6 composition field.
+ */
+export function resolveFactualHostedOperationsObserved(
+  result: GlobalMrStageAExecutorResult,
+): number | null {
+  if (typeof result.reportedHostedOperationsConsumed === "number") {
+    return result.reportedHostedOperationsConsumed;
+  }
+  const composition = result.productObservation?.mw6AuthorityComposition;
+  if (
+    composition &&
+    typeof composition === "object" &&
+    typeof (composition as { liveHostedDispatchCalls?: unknown })
+      .liveHostedDispatchCalls === "number"
+  ) {
+    return (composition as { liveHostedDispatchCalls: number })
+      .liveHostedDispatchCalls;
+  }
+  return null;
+}
+
+/**
+ * Narrow systemic required-config / provider-binding defect (CORR-03A).
+ * Differentiated from isolated cognitive INCONCLUSIVE.
+ */
+export function isStageASystemicRequiredConfigDefect(
+  result: GlobalMrStageAExecutorResult,
+): boolean {
+  const code = result.productObservation?.code;
+  if (
+    code === "PROVIDER_UNAVAILABLE" ||
+    code === "EVAL_CELL_PROVIDER_REQUIRED"
+  ) {
+    return true;
+  }
+  if (result.failureClass === "CONFIG") {
+    return true;
+  }
+  if (
+    result.failureClass === "PROVIDER_ERROR" &&
+    (code === "PROVIDER_UNAVAILABLE" ||
+      /\bPROVIDER_UNAVAILABLE\b/.test(result.rawSummary) ||
+      /\bEVAL_CELL_PROVIDER_REQUIRED\b/.test(result.rawSummary))
+  ) {
+    return true;
+  }
+  return false;
+}
+
 function toRunEvidence(
   cell: GlobalMrStageACell,
   result: GlobalMrStageAExecutorResult,
@@ -828,6 +936,7 @@ function toRunEvidence(
     hosted: number;
     aggregate: number;
     reportedMismatch: boolean;
+    factualHostedObserved: number | null;
   },
 ): RunEvidence {
   return {
@@ -865,8 +974,12 @@ function toRunEvidence(
       `executionKind:${cell.executionKind}`,
       `challenger:${cell.isChallenger}`,
       `selectiveRepeatEligible:${cell.selectiveRepeatEligible}`,
+      ...(cell.selectiveRepeatTrigger
+        ? [`selectiveRepeatTrigger:${cell.selectiveRepeatTrigger}`]
+        : []),
       `canonicalDeltaModel:${canonicalDelta.model}`,
       `canonicalDeltaHosted:${canonicalDelta.hosted}`,
+      `factualHostedObserved:${canonicalDelta.factualHostedObserved}`,
       ...softReviewRefs.map((r) => `soft-review-ack:${r}`),
     ],
     productObservation: {
@@ -874,11 +987,15 @@ function toRunEvidence(
       executionKind: cell.executionKind,
       isChallenger: cell.isChallenger,
       selectiveRepeatEligible: cell.selectiveRepeatEligible,
+      ...(cell.selectiveRepeatTrigger
+        ? { selectiveRepeatTrigger: cell.selectiveRepeatTrigger }
+        : {}),
       canonicalDelta,
       reportedModelInvocationsConsumed:
         result.reportedModelInvocationsConsumed ?? null,
       reportedHostedOperationsConsumed:
         result.reportedHostedOperationsConsumed ?? null,
+      factualHostedObserved: canonicalDelta.factualHostedObserved,
     },
   };
 }
@@ -922,9 +1039,14 @@ export async function runGlobalMrStageACell(input: {
       ...input.cell,
       runIndex: 0,
       isSelectiveRepeat: false,
+      selectiveRepeatTrigger: undefined,
       cell: { ...input.cell.cell, runIndex: 0 },
     };
-    const gate = canScheduleSelectiveRepeat(state, baseIdentity);
+    const gate = canScheduleSelectiveRepeat(
+      state,
+      baseIdentity,
+      input.cell.selectiveRepeatTrigger,
+    );
     if (!gate.allowed) {
       const denial: GlobalMrStageACellDenialReason =
         gate.reason === "SELECTIVE_REPEAT_POOL_EXHAUSTED"
@@ -955,7 +1077,13 @@ export async function runGlobalMrStageACell(input: {
       startedAt,
       new Date().toISOString(),
       state.softReviewAcknowledgments,
-      { model: 0, hosted: 0, aggregate: 0, reportedMismatch: false },
+      {
+        model: 0,
+        hosted: 0,
+        aggregate: 0,
+        reportedMismatch: false,
+        factualHostedObserved: null,
+      },
     );
     state.evidence.push(evidence);
     state.stopReason = "UNSUPPORTED_CELL";
@@ -980,12 +1108,52 @@ export async function runGlobalMrStageACell(input: {
   const deltaAgg =
     after.consumedAggregateRealCalls - before.consumedAggregateRealCalls;

+  const factualHostedObserved = resolveFactualHostedOperationsObserved(result);
+
+  // CORR-02 — Evidence integrity: observed hosted must match canonical delta.
+  // Missing observation with non-zero canonical consumption is also a mismatch
+  // (prior REAL campaign: liveHosted=0 / reported=null while canonical hosted accrued).
+  let hostedIntegrityMismatch = false;
+  if (input.cell.attachHostedWebSearch) {
+    if (factualHostedObserved === null) {
+      hostedIntegrityMismatch = deltaHosted !== 0;
+    } else {
+      hostedIntegrityMismatch = factualHostedObserved !== deltaHosted;
+    }
+  } else if (factualHostedObserved !== null) {
+    hostedIntegrityMismatch = factualHostedObserved !== deltaHosted;
+  }
+
   const reportedMismatch =
+    hostedIntegrityMismatch ||
     (result.reportedModelInvocationsConsumed != null &&
       result.reportedModelInvocationsConsumed !== deltaModel) ||
     (result.reportedHostedOperationsConsumed != null &&
       result.reportedHostedOperationsConsumed !== deltaHosted);

+  // CORR-02E — W-Sources cannot claim hosted REAL PASS with observed 0 / absent.
+  let effectiveResult = result;
+  if (
+    input.cell.attachHostedWebSearch &&
+    result.passFail === "PASS" &&
+    (factualHostedObserved === null || factualHostedObserved === 0)
+  ) {
+    effectiveResult = {
+      ...result,
+      passFail: "NOT_PROVEN",
+      failureClass:
+        result.failureClass === "NONE"
+          ? "MISSING_OBSERVABLE"
+          : result.failureClass,
+      rawSummary: `${result.rawSummary} [HOSTED_REAL_BOUNDARY_NOT_PROVEN: factualHostedObserved=${factualHostedObserved}]`,
+      productObservation: {
+        ...(result.productObservation ?? {}),
+        hostedRealBoundary: "NOT_PROVEN",
+        factualHostedObserved,
+      },
+    };
+  }
+
   // Canonical SoT mirrors — never trust executor-reported counts for enforcement.
   state.modelInvocations = after.consumedModelInvocations;
   state.hostedOperations = after.consumedHostedWebOperations;
@@ -1007,7 +1175,7 @@ export async function runGlobalMrStageACell(input: {

   const evidence = toRunEvidence(
     input.cell,
-    result,
+    effectiveResult,
     state.budget.cumulativeUsd,
     startedAt,
     finishedAt,
@@ -1017,10 +1185,24 @@ export async function runGlobalMrStageACell(input: {
       hosted: deltaHosted,
       aggregate: deltaAgg,
       reportedMismatch,
+      factualHostedObserved,
     },
   );
   state.evidence.push(evidence);

+  // CORR-02D — hosted observation/canonical mismatch → hard stop (not diagnostic).
+  if (hostedIntegrityMismatch) {
+    state.stopReason = "EVIDENCE_INTEGRITY_HOSTED_MISMATCH";
+    return { state, evidence, stopped: true };
+  }
+
+  // CORR-03A — systemic required-config / provider-path defect → campaign stop.
+  // Isolated cognitive INCONCLUSIVE does NOT latch this stop.
+  if (isStageASystemicRequiredConfigDefect(effectiveResult)) {
+    state.stopReason = "REQUIRED_CONFIG_UNAVAILABLE";
+    return { state, evidence, stopped: true };
+  }
+
   if (
     !state.softReviewCleared &&
     (state.budget.softStopTriggered ||
diff --git a/projects/sfia-studio/app/lib/nora-eval/index.ts b/projects/sfia-studio/app/lib/nora-eval/index.ts
index 02f42bde..75aa5819 100644
--- a/projects/sfia-studio/app/lib/nora-eval/index.ts
+++ b/projects/sfia-studio/app/lib/nora-eval/index.ts
@@ -101,6 +101,10 @@ export {
   acknowledgeGlobalMrStageASoftReview,
   canScheduleSelectiveRepeat,
   materializeSelectiveRepeat,
+  isGlobalMrStageASelectiveRepeatTrigger,
+  resolveFactualHostedOperationsObserved,
+  isStageASystemicRequiredConfigDefect,
+  GLOBAL_MR_STAGE_A_SELECTIVE_REPEAT_TRIGGERS,
   globalMrStageABaseCellKey,
   runGlobalMrStageACell,
   globalMrStageAEnvelopeProof,
@@ -111,6 +115,7 @@ export {
   type GlobalMrStageADriverState,
   type GlobalMrStageAStopReason,
   type GlobalMrStageACellDenialReason,
+  type GlobalMrStageASelectiveRepeatTrigger,
   type GlobalMrStageAExecutionKind,
   type GlobalMrStageADerivedEnvelope,
   type GlobalMrStageAWorkloadCallPlan,

```

## 19. Full useful diffs — CORR-01 test trigger updates

```diff

diff --git a/projects/sfia-studio/app/__tests__/nora-eval/c3.call-accounting.d0.test.ts b/projects/sfia-studio/app/__tests__/nora-eval/c3.call-accounting.d0.test.ts
index b1a46dc4..f1360afd 100644
--- a/projects/sfia-studio/app/__tests__/nora-eval/c3.call-accounting.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/nora-eval/c3.call-accounting.d0.test.ts
@@ -129,14 +129,14 @@ describe("C3-04 — repeat pool does not latch campaign stop", () => {
     for (let i = 0; i < 18; i += 1) {
       const out = await runGlobalMrStageACell({
         state,
-        cell: materializeSelectiveRepeat(cells[i]!),
+        cell: materializeSelectiveRepeat(cells[i]!, "TOP_CANDIDATE"),
         executor,
       });
       expect(out.stopped).toBe(false);
     }
     const denied = await runGlobalMrStageACell({
       state,
-      cell: materializeSelectiveRepeat(cells[18]!),
+      cell: materializeSelectiveRepeat(cells[18]!, "TOP_CANDIDATE"),
       executor,
     });
     expect(denied.cellDenied).toBe("SELECTIVE_REPEAT_POOL_EXHAUSTED");
diff --git a/projects/sfia-studio/app/__tests__/nora-eval/c5.astra-challenger.d0.test.ts b/projects/sfia-studio/app/__tests__/nora-eval/c5.astra-challenger.d0.test.ts
index 0fca757e..bcdf7feb 100644
--- a/projects/sfia-studio/app/__tests__/nora-eval/c5.astra-challenger.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/nora-eval/c5.astra-challenger.d0.test.ts
@@ -149,8 +149,8 @@ describe("C5 — Option C Astra challenger (ZERO REAL)", () => {
     });
     const cells = buildGlobalMrStageAMatrix({ campaignId: state.campaignId });
     const astra = cells.find((c) => c.isChallenger)!;
-    expect(canScheduleSelectiveRepeat(state, astra).allowed).toBe(false);
-    expect(() => materializeSelectiveRepeat(astra)).toThrow(
+    expect(canScheduleSelectiveRepeat(state, astra, "TOP_CANDIDATE").allowed).toBe(false);
+    expect(() => materializeSelectiveRepeat(astra, "TOP_CANDIDATE")).toThrow(
       /SELECTIVE_REPEAT_DENIED/,
     );

@@ -164,13 +164,13 @@ describe("C5 — Option C Astra challenger (ZERO REAL)", () => {
     for (let i = 0; i < 18; i += 1) {
       const out = await runGlobalMrStageACell({
         state,
-        cell: materializeSelectiveRepeat(primary[i]!),
+        cell: materializeSelectiveRepeat(primary[i]!, "TOP_CANDIDATE"),
         executor,
       });
       expect(out.stopped).toBe(false);
     }
     expect(state.selectiveRepeatsUsed).toBe(18);
-    const gate19 = canScheduleSelectiveRepeat(state, primary[18]!);
+    const gate19 = canScheduleSelectiveRepeat(state, primary[18]!, "TOP_CANDIDATE");
     expect(gate19.allowed).toBe(false);
     expect(gate19.reason).toBe("SELECTIVE_REPEAT_POOL_EXHAUSTED");
     // base cell still runnable
diff --git a/projects/sfia-studio/app/__tests__/nora-eval/e4.stage-a-driver.d0.test.ts b/projects/sfia-studio/app/__tests__/nora-eval/e4.stage-a-driver.d0.test.ts
index b9314bac..63099db6 100644
--- a/projects/sfia-studio/app/__tests__/nora-eval/e4.stage-a-driver.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/nora-eval/e4.stage-a-driver.d0.test.ts
@@ -54,8 +54,8 @@ describe("E4 — Global MR Stage A driver corrections (deterministic)", () => {
       campaignId: `f4a-repeat-${Date.now()}`,
     });
     const [base] = buildGlobalMrStageAMatrix({ campaignId: state.campaignId });
-    expect(canScheduleSelectiveRepeat(state, base!).allowed).toBe(true);
-    const repeat1 = materializeSelectiveRepeat(base!);
+    expect(canScheduleSelectiveRepeat(state, base!, "TOP_CANDIDATE").allowed).toBe(true);
+    const repeat1 = materializeSelectiveRepeat(base!, "TOP_CANDIDATE");
     let calls = 0;
     const executor: GlobalMrStageAExecutor = async () => {
       calls += 1;
@@ -90,7 +90,7 @@ describe("E4 — Global MR Stage A driver corrections (deterministic)", () => {
     expect(second.cellDenied).toBe("SELECTIVE_REPEAT_DENIED");
     expect(second.evidence).toBeNull();
     expect(calls).toBe(1);
-    expect(canScheduleSelectiveRepeat(state, base!).allowed).toBe(false);
+    expect(canScheduleSelectiveRepeat(state, base!, "TOP_CANDIDATE").allowed).toBe(false);
     expect(state.stopReason).toBe("NONE");
   });

@@ -108,12 +108,12 @@ describe("E4 — Global MR Stage A driver corrections (deterministic)", () => {
       reportedHostedOperationsConsumed: 0,
     });
     for (let i = 0; i < 18; i += 1) {
-      const repeat = materializeSelectiveRepeat(cells[i]!);
+      const repeat = materializeSelectiveRepeat(cells[i]!, "TOP_CANDIDATE");
       const out = await runGlobalMrStageACell({ state, cell: repeat, executor });
       expect(out.stopped).toBe(false);
     }
     expect(state.selectiveRepeatsUsed).toBe(18);
-    const nineteenth = materializeSelectiveRepeat(cells[18]!);
+    const nineteenth = materializeSelectiveRepeat(cells[18]!, "TOP_CANDIDATE");
     const denied = await runGlobalMrStageACell({
       state,
       cell: nineteenth,
@@ -150,17 +150,25 @@ describe("E4 — Global MR Stage A driver corrections (deterministic)", () => {
     });
     const [base] = buildGlobalMrStageAMatrix({ campaignId: state.campaignId });
     expect(() =>
-      materializeSelectiveRepeat({
-        ...base!,
-        runIndex: 1,
-        isSelectiveRepeat: true,
-      }),
+      materializeSelectiveRepeat(
+        {
+          ...base!,
+          runIndex: 1,
+          isSelectiveRepeat: true,
+        },
+        "TOP_CANDIDATE",
+      ),
     ).toThrow(/SELECTIVE_REPEAT_RUN_INDEX_INVALID/);

     let called = false;
     const out = await runGlobalMrStageACell({
       state,
-      cell: { ...base!, runIndex: 2, isSelectiveRepeat: true },
+      cell: {
+        ...base!,
+        runIndex: 2,
+        isSelectiveRepeat: true,
+        selectiveRepeatTrigger: "TOP_CANDIDATE",
+      },
       executor: async () => {
         called = true;
         return {

```

## 20. New file — corr-stage-a-real-integrity.d0.test.ts

```typescript

/** @vitest-environment node */
/**
 * GLOBAL-MR-STAGE-A-REAL-CORR-01 — F2 binding + hosted parity + stop/repeat
 * governance — ZERO REAL.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { ScriptedModel, assistantMessage } from "@openai/agents/testing";
import {
  FakeConversationProvider,
  setConversationProviderForTests,
  type ConversationProvider,
  type ProviderChatMessage,
  type ProviderCompletionResult,
} from "@/lib/platform/ai";
import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
import { resetMw5ChallengeStoreForTests } from "@/features/project-assistant/f2/mw5ChallengeSessionStore";
import {
  buildGlobalMrStageAMatrix,
  canScheduleSelectiveRepeat,
  createEvalAgentsUsdAccounting,
  createGlobalMrStageADriver,
  deriveGlobalMrStageAEnvelope,
  globalMrStageAEnvelopeProof,
  isGlobalMrStageASelectiveRepeatTrigger,
  materializeSelectiveRepeat,
  runGlobalMrStageACell,
  type GlobalMrStageAExecutor,
} from "@/lib/nora-eval";
import {
  buildRunnerModelSettingsForEffort,
  claimHostedWebOperations,
  runNoraAgentsTurn,
  sfiaBoundaryInstructions,
} from "@/lib/nora-cognitive-runtime";

class CellPinnedFakeProvider implements ConversationProvider {
  readonly providerId = "fake-test";
  structuredCalls = 0;
  constructor(
    readonly cellModelId: string,
    readonly cellEffort: string,
  ) {}
  private readonly inner = new FakeConversationProvider();
  async complete(messages: ProviderChatMessage[]): Promise<ProviderCompletionResult> {
    const r = await this.inner.complete(messages);
    return {
      ...r,
      usage: {
        inputTokens: r.usage?.inputTokens ?? 1,
        outputTokens: r.usage?.outputTokens ?? 1,
        totalTokens: r.usage?.totalTokens ?? 2,
        model: this.cellModelId,
        providerResponseId: "corr-cell",
      },
    };
  }
  async completeStructured(input: {
    messages: ProviderChatMessage[];
    schemaName: string;
    jsonSchema: Record<string, unknown>;
  }): Promise<ProviderCompletionResult> {
    this.structuredCalls += 1;
    const r = await this.inner.completeStructured(input);
    return {
      ...r,
      usage: {
        inputTokens: r.usage?.inputTokens ?? 1,
        outputTokens: r.usage?.outputTokens ?? 1,
        totalTokens: r.usage?.totalTokens ?? 2,
        model: this.cellModelId,
        providerResponseId: "corr-cell-struct",
      },
    };
  }
}

describe("CORR-01 — F2 provider binding before mode gate (ZERO REAL)", () => {
  const previousFake = process.env.OPS1_CONVERSATION_PROVIDER;
  const previousModel = process.env.OPENAI_MODEL;
  const tempDirs: string[] = [];
  let projectId = "";
  let sessionDbPath = "";

  beforeEach(async () => {
    // Reproduce REAL defect context: no fake-force, no OPENAI_MODEL.
    delete process.env.OPS1_CONVERSATION_PROVIDER;
    delete process.env.OPENAI_MODEL;
    delete process.env.OPENAI_API_KEY;
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetRuntimeApplicationServiceForTests();
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-corr-f2-"));
    tempDirs.push(dir);
    sessionDbPath = path.join(dir, "session.sqlite");
    const runtime = getRuntimeApplicationService({
      productDbPath: path.join(dir, "oa.sqlite"),
      auditMode: "noop",
      nowIso: "2026-09-06T12:00:00.000Z",
    });
    const created = await runtime.createProject({
      name: "CORR F2",
      objective: "binding",
      context: "corr-01",
      criticality: "STANDARD",
      constraints: ["Lecture seule"],
      shortReference: "CORR",
      idempotencyKey: `idem:corr-f2-${Date.now()}-${Math.random()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("setup");
    projectId = created.projectId;
  });

  afterEach(() => {
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetRuntimeApplicationServiceForTests();
    while (tempDirs.length) {
      const d = tempDirs.pop();
      if (d) fs.rmSync(d, { recursive: true, force: true });
    }
    if (previousFake === undefined) delete process.env.OPS1_CONVERSATION_PROVIDER;
    else process.env.OPS1_CONVERSATION_PROVIDER = previousFake;
    if (previousModel === undefined) delete process.env.OPENAI_MODEL;
    else process.env.OPENAI_MODEL = previousModel;
  });

  it("F2-A/B/C/G — eval factory proceeds without OPENAI_MODEL; pin exact; no env mutation", async () => {
    const envBefore = process.env.OPENAI_MODEL;
    const cell = new CellPinnedFakeProvider("gpt-5.6-terra", "medium");
    const scripted = new ScriptedModel([
      [assistantMessage("PIN:gpt-5.6-terra:medium")],
    ]);
    const result = await orchestrateAssistantSend({
      projectId,
      content: "Résume l'objectif __F2_INFORMATIVE__",
      sessionDbPath,
      // no input.provider — REAL defect path
      evalModelReasoningControl: {
        modelId: "gpt-5.6-terra",
        reasoningEffort: "medium",
        agentsModel: scripted,
      },
      evalCellProviderFactory: ({ modelId, reasoningEffort }) => {
        expect(modelId).toBe("gpt-5.6-terra");
        expect(reasoningEffort).toBe("medium");
        return cell;
      },
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(cell.structuredCalls).toBeGreaterThanOrEqual(1);
    expect(result.mode).toBe("fixture");
    expect(process.env.OPENAI_MODEL).toBe(envBefore);
    expect(process.env.OPENAI_API_KEY).toBeUndefined();
  });

  it("F2-E — eval control without factory → EVAL_CELL_PROVIDER_REQUIRED", async () => {
    const result = await orchestrateAssistantSend({
      projectId,
      content: "x",
      sessionDbPath,
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
      },
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.code).toBe("EVAL_CELL_PROVIDER_REQUIRED");
  });

  it("F2-F — no eval control + absent provider config → historical PROVIDER_UNAVAILABLE", async () => {
    const result = await orchestrateAssistantSend({
      projectId,
      content: "x",
      sessionDbPath,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.code).toBe("PROVIDER_UNAVAILABLE");
  });
});

describe("CORR-02 — hosted observation / canonical parity (ZERO REAL)", () => {
  it("H-A — deterministic fixture hosted observation → zero REAL hosted budget", async () => {
    const state = createGlobalMrStageADriver({
      campaignId: `corr-ha-${Date.now()}`,
    });
    const cell = buildGlobalMrStageAMatrix({
      campaignId: state.campaignId,
    }).find((c) => c.workloadId === "W-Sources")!;
    const usd = createEvalAgentsUsdAccounting({
      budget: state.budget,
      manifest: state.manifest,
      modelId: cell.model,
      assumedInputTokens: 40,
      assumedOutputTokens: 20,
    });
    const out = await runGlobalMrStageACell({
      state,
      cell,
      executor: async (c, ctx) => {
        const turn = await runNoraAgentsTurn({
          correlationId: "corr-ha",
          projectId: "proj",
          systemInstructions: sfiaBoundaryInstructions(),
          userContent: "search",
          model: new ScriptedModel([[assistantMessage("FIXTURE_OK")]]),
          runnerModelSettings: buildRunnerModelSettingsForEffort(
            c.reasoningEffort,
          ),
          enableTools: true,
          enableHostedWebSearch: true,
          maxTurns: 1,
          campaignBudget: ctx.campaignBudget,
          usdAccounting: usd,
          deterministicHostedWebSearchCalls: [
            {
              type: "hosted_tool_call",
              name: "web_search_call",
              status: "completed",
              providerData: {
                type: "web_search_call",
                action: {
                  type: "search",
                  sources: [{ type: "url", url: "https://example.com" }],
                },
              },
            },
          ],
        });
        const observed = turn.hostedSearchObserve?.rawCallsObserved ?? 0;
        return {
          passFail: "PASS" as const,
          failureClass: "NONE" as const,
          rawSummary: turn.text,
          usage: null,
          reportedHostedOperationsConsumed: 0, // fixture ≠ REAL consumption
          productObservation: {
            deterministicBoundaryUsed:
              turn.hostedSearchObserve?.deterministicBoundaryUsed === true,
            rawCallsObserved: observed,
          },
        };
      },
    });
    expect(state.campaignBudget.consumedHostedWebOperations).toBe(0);
    expect(out.stopped).toBe(false);
    // Observed REAL hosted = 0 → cannot claim hosted REAL PASS
    expect(out.evidence?.passFail).toBe("NOT_PROVEN");
  });

  it("H-B — no factual live hosted → canonical hosted delta 0", async () => {
    const state = createGlobalMrStageADriver({
      campaignId: `corr-hb-${Date.now()}`,
    });
    const cell = buildGlobalMrStageAMatrix({
      campaignId: state.campaignId,
    }).find((c) => c.workloadId === "W-Routine")!;
    const out = await runGlobalMrStageACell({
      state,
      cell,
      executor: async () => ({
        passFail: "PASS",
        failureClass: "NONE",
        rawSummary: "no-hosted",
        usage: null,
        reportedHostedOperationsConsumed: 0,
      }),
    });
    expect(out.evidence?.productObservation?.canonicalDelta).toMatchObject({
      hosted: 0,
      reportedMismatch: false,
    });
    expect(state.stopReason).toBe("NONE");
  });

  it("H-C/F — simulated factual N hosted → canonical delta N once; match → no stop", async () => {
    const state = createGlobalMrStageADriver({
      campaignId: `corr-hc-${Date.now()}`,
    });
    const cell = buildGlobalMrStageAMatrix({
      campaignId: state.campaignId,
    }).find((c) => c.workloadId === "W-Sources")!;
    const out = await runGlobalMrStageACell({
      state,
      cell,
      executor: async (_c, ctx) => {
        expect(claimHostedWebOperations(ctx.campaignBudget, 2)).toBe(true);
        return {
          passFail: "PASS",
          failureClass: "NONE",
          rawSummary: "hosted-n",
          usage: null,
          reportedHostedOperationsConsumed: 2,
        };
      },
    });
    expect(state.campaignBudget.consumedHostedWebOperations).toBe(2);
    expect(out.evidence?.productObservation?.canonicalDelta).toMatchObject({
      hosted: 2,
      reportedMismatch: false,
      factualHostedObserved: 2,
    });
    expect(out.evidence?.passFail).toBe("PASS");
    expect(state.stopReason).toBe("NONE");
  });

  it("H-D — observed 0 while canonical >0 → Evidence integrity hard stop", async () => {
    const state = createGlobalMrStageADriver({
      campaignId: `corr-hd-${Date.now()}`,
    });
    const cell = buildGlobalMrStageAMatrix({
      campaignId: state.campaignId,
    }).find((c) => c.workloadId === "W-Sources")!;
    const out = await runGlobalMrStageACell({
      state,
      cell,
      executor: async (_c, ctx) => {
        claimHostedWebOperations(ctx.campaignBudget, 1);
        return {
          passFail: "PASS",
          failureClass: "NONE",
          rawSummary: "mismatch-0",
          usage: null,
          reportedHostedOperationsConsumed: 0,
          productObservation: {
            mw6AuthorityComposition: { liveHostedDispatchCalls: 0 },
          },
        };
      },
    });
    expect(out.stopped).toBe(true);
    expect(state.stopReason).toBe("EVIDENCE_INTEGRITY_HOSTED_MISMATCH");
    expect(out.evidence).toBeTruthy();
  });

  it("H-E — observed N while canonical != N → hard stop", async () => {
    const state = createGlobalMrStageADriver({
      campaignId: `corr-he-${Date.now()}`,
    });
    const cell = buildGlobalMrStageAMatrix({
      campaignId: state.campaignId,
    }).find((c) => c.workloadId === "W-Sources")!;
    const out = await runGlobalMrStageACell({
      state,
      cell,
      executor: async (_c, ctx) => {
        claimHostedWebOperations(ctx.campaignBudget, 1);
        return {
          passFail: "PASS",
          failureClass: "NONE",
          rawSummary: "mismatch-n",
          usage: null,
          reportedHostedOperationsConsumed: 3,
        };
      },
    });
    expect(out.stopped).toBe(true);
    expect(state.stopReason).toBe("EVIDENCE_INTEGRITY_HOSTED_MISMATCH");
  });

  it("H-G — W-Sources PASS with observed 0 → NOT_PROVEN (not hosted REAL PASS)", async () => {
    const state = createGlobalMrStageADriver({
      campaignId: `corr-hg-${Date.now()}`,
    });
    const cell = buildGlobalMrStageAMatrix({
      campaignId: state.campaignId,
    }).find((c) => c.workloadId === "W-Sources")!;
    const out = await runGlobalMrStageACell({
      state,
      cell,
      executor: async () => ({
        passFail: "PASS",
        failureClass: "NONE",
        rawSummary: "no-live-hosted",
        usage: null,
        reportedHostedOperationsConsumed: 0,
      }),
    });
    expect(out.evidence?.passFail).toBe("NOT_PROVEN");
    expect(out.evidence?.failureClass).toBe("MISSING_OBSERVABLE");
    expect(state.stopReason).toBe("NONE");
  });
});

describe("CORR-03A — systemic config hard stop (ZERO REAL)", () => {
  it("S-A/B/C/E — first PROVIDER_UNAVAILABLE latches stop; later cells/repeats denied", async () => {
    const state = createGlobalMrStageADriver({
      campaignId: `corr-sa-${Date.now()}`,
    });
    const cells = buildGlobalMrStageAMatrix({ campaignId: state.campaignId });
    const f2 = cells.find((c) => c.executionKind === "f2_product")!;
    let calls = 0;
    const executor: GlobalMrStageAExecutor = async () => {
      calls += 1;
      return {
        passFail: "INCONCLUSIVE",
        failureClass: "PROVIDER_ERROR",
        rawSummary: "provider_unavailable:PROVIDER_UNAVAILABLE missing OPENAI_MODEL",
        usage: null,
        productObservation: { code: "PROVIDER_UNAVAILABLE" },
        reportedHostedOperationsConsumed: 0,
        reportedModelInvocationsConsumed: 0,
      };
    };
    const first = await runGlobalMrStageACell({ state, cell: f2, executor });
    expect(first.evidence).toBeTruthy();
    expect(state.stopReason).toBe("REQUIRED_CONFIG_UNAVAILABLE");
    expect(calls).toBe(1);
    const hostedBefore = state.hostedOperations;
    const modelBefore = state.modelInvocations;

    const second = await runGlobalMrStageACell({
      state,
      cell: cells.find((c) => c.workloadId === "W-Routine")!,
      executor,
    });
    expect(second.stopped).toBe(true);
    expect(second.evidence).toBeNull();
    expect(calls).toBe(1);
    expect(state.hostedOperations).toBe(hostedBefore);
    expect(state.modelInvocations).toBe(modelBefore);

    const repeatDenied = await runGlobalMrStageACell({
      state,
      cell: materializeSelectiveRepeat(
        cells.find((c) => c.workloadId === "W-Memory" && !c.isChallenger)!,
        "TOP_CANDIDATE",
      ),
      executor,
    });
    expect(repeatDenied.stopped).toBe(true);
    expect(calls).toBe(1);
  });

  it("S-D — isolated cognitive INCONCLUSIVE does NOT hard-stop", async () => {
    const state = createGlobalMrStageADriver({
      campaignId: `corr-sd-${Date.now()}`,
    });
    const cell = buildGlobalMrStageAMatrix({
      campaignId: state.campaignId,
    }).find((c) => c.workloadId === "W-Analysis")!;
    const out = await runGlobalMrStageACell({
      state,
      cell,
      executor: async () => ({
        passFail: "INCONCLUSIVE",
        failureClass: "INCONCLUSIVE",
        rawSummary: "ambiguous cognitive outcome",
        usage: null,
        reportedHostedOperationsConsumed: 0,
      }),
    });
    expect(out.stopped).toBe(false);
    expect(state.stopReason).toBe("NONE");
  });
});

describe("CORR-03B — selective repeat trigger governance (ZERO REAL)", () => {
  it("R-A/B — no trigger / generic INCONCLUSIVE → denied", () => {
    const state = createGlobalMrStageADriver({
      campaignId: `corr-ra-${Date.now()}`,
    });
    const base = buildGlobalMrStageAMatrix({
      campaignId: state.campaignId,
    }).find((c) => !c.isChallenger)!;
    expect(canScheduleSelectiveRepeat(state, base).allowed).toBe(false);
    expect(canScheduleSelectiveRepeat(state, base, null).reason).toBe(
      "SELECTIVE_REPEAT_TRIGGER_REQUIRED",
    );
    expect(isGlobalMrStageASelectiveRepeatTrigger("passFail_INCONCLUSIVE")).toBe(
      false,
    );
    expect(() =>
      materializeSelectiveRepeat(base, "passFail_INCONCLUSIVE" as never),
    ).toThrow(/SELECTIVE_REPEAT_TRIGGER_REQUIRED/);
  });

  it("R-C/D — valid trigger materializes runIndex=1 with Evidence trigger", async () => {
    const state = createGlobalMrStageADriver({
      campaignId: `corr-rc-${Date.now()}`,
    });
    const base = buildGlobalMrStageAMatrix({
      campaignId: state.campaignId,
    }).find((c) => c.workloadId === "W-Routine")!;
    const repeat = materializeSelectiveRepeat(base, "BORDERLINE");
    expect(repeat.runIndex).toBe(1);
    expect(repeat.selectiveRepeatTrigger).toBe("BORDERLINE");
    const out = await runGlobalMrStageACell({
      state,
      cell: repeat,
      executor: async () => ({
        passFail: "PASS",
        failureClass: "NONE",
        rawSummary: "rep",
        usage: null,
        reportedHostedOperationsConsumed: 0,
      }),
    });
    expect(out.stopped).toBe(false);
    expect(out.evidence?.evidenceRefs).toEqual(
      expect.arrayContaining(["selectiveRepeatTrigger:BORDERLINE"]),
    );
    expect(out.evidence?.productObservation?.selectiveRepeatTrigger).toBe(
      "BORDERLINE",
    );
  });

  it("R-E/F/G/H — second repeat denied; Astra denied; pool 18; exhaustion non-latching", async () => {
    const state = createGlobalMrStageADriver({
      campaignId: `corr-re-${Date.now()}`,
    });
    const cells = buildGlobalMrStageAMatrix({ campaignId: state.campaignId });
    const primary = cells.filter((c) => !c.isChallenger);
    const astra = cells.find((c) => c.isChallenger)!;
    expect(
      canScheduleSelectiveRepeat(state, astra, "TOP_CANDIDATE").allowed,
    ).toBe(false);
    expect(() => materializeSelectiveRepeat(astra, "TOP_CANDIDATE")).toThrow(
      /SELECTIVE_REPEAT_DENIED/,
    );

    const executor: GlobalMrStageAExecutor = async () => ({
      passFail: "PASS",
      failureClass: "NONE",
      rawSummary: "ok",
      usage: null,
      reportedHostedOperationsConsumed: 0,
    });
    for (let i = 0; i < 18; i += 1) {
      const out = await runGlobalMrStageACell({
        state,
        cell: materializeSelectiveRepeat(primary[i]!, "SUSPECTED_VARIANCE"),
        executor,
      });
      expect(out.stopped).toBe(false);
    }
    expect(state.selectiveRepeatsUsed).toBe(18);
    const nineteenth = await runGlobalMrStageACell({
      state,
      cell: materializeSelectiveRepeat(primary[18]!, "TOP_CANDIDATE"),
      executor,
    });
    expect(nineteenth.cellDenied).toBe("SELECTIVE_REPEAT_POOL_EXHAUSTED");
    expect(state.stopReason).toBe("NONE");

    // Same base cannot repeat twice
    expect(
      canScheduleSelectiveRepeat(state, primary[0]!, "BORDERLINE").allowed,
    ).toBe(false);

    const baseStill = await runGlobalMrStageACell({
      state,
      cell: primary[30]!,
      executor,
    });
    expect(baseStill.stopped).toBe(false);
    expect(state.stopReason).toBe("NONE");
  });
});

describe("CORR — Option C envelope immutable", () => {
  it("deriveGlobalMrStageAEnvelope unchanged 78/438/26/464 + FinOps 15/18/20", () => {
    const env = deriveGlobalMrStageAEnvelope();
    expect(env.primaryBaseCells).toBe(54);
    expect(env.astraChallengerCells).toBe(6);
    expect(env.baseCells).toBe(60);
    expect(env.maxCellExecutions).toBe(78);
    expect(env.maxModelInvocations).toBe(438);
    expect(env.maxHostedWebOperations).toBe(26);
    expect(env.maxAggregateRealCalls).toBe(464);
    expect(env.maxSelectiveRepeats).toBe(18);
    const proof = globalMrStageAEnvelopeProof();
    expect(proof.usd).toEqual({
      targetUsd: 15,
      softStopUsd: 18,
      hardCapUsd: 20,
    });
    expect(proof.contractVersion).toBe(
      "global-mr-campaign-contract-v3-candidate",
    );
  });
});

```

## 21. New file — corr-02b-mw6-hosted-observation.d0.test.ts

```typescript

/** @vitest-environment node */
/**
 * CORR-02B — MW6 factual hosted observation propagation — ZERO REAL.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { ScriptedModel, assistantMessage } from "@openai/agents/testing";
import { FakeConversationProvider } from "@/lib/platform/ai";
import {
  acquireNoraCampaignBudget,
  claimHostedWebOperations,
  runNoraCognitiveTurn,
  sfiaBoundaryInstructions,
} from "@/lib/nora-cognitive-runtime";
import { resolveLiveHostedDispatchCallsFromHostedObserve } from "@/features/project-assistant/mw6GovernedNoraTurn";
import {
  buildGlobalMrStageAMatrix,
  createGlobalMrStageADriver,
  runGlobalMrStageACell,
} from "@/lib/nora-eval";

const FIXTURE_CALL = {
  type: "hosted_tool_call",
  name: "web_search_call",
  status: "completed",
  providerData: {
    type: "web_search_call",
    action: {
      type: "search",
      sources: [{ type: "url", url: "https://example.com" }],
    },
  },
} as const;

describe("CORR-02B — resolveLiveHostedDispatchCallsFromHostedObserve", () => {
  it("MW6-HOSTED-01 — LIVE-shaped factual N → N", () => {
    expect(
      resolveLiveHostedDispatchCallsFromHostedObserve({
        deterministicBoundaryUsed: false,
        rawCallsObserved: 2,
      }),
    ).toBe(2);
  });

  it("MW6-HOSTED-02 — deterministic fixture N → 0 REAL", () => {
    expect(
      resolveLiveHostedDispatchCallsFromHostedObserve({
        deterministicBoundaryUsed: true,
        rawCallsObserved: 2,
      }),
    ).toBe(0);
  });

  it("MW6-HOSTED-03 — absent observation → 0", () => {
    expect(resolveLiveHostedDispatchCallsFromHostedObserve(undefined)).toBe(0);
    expect(resolveLiveHostedDispatchCallsFromHostedObserve(null)).toBe(0);
  });
});

describe("CORR-02B — runNoraCognitiveTurn pass-through (ZERO REAL)", () => {
  const tempDirs: string[] = [];
  afterEach(() => {
    while (tempDirs.length) {
      const d = tempDirs.pop();
      if (d) fs.rmSync(d, { recursive: true, force: true });
    }
  });

  it("path A (Memory B unavailable) — preserves hostedSearchObserve; no drop", async () => {
    const turn = await runNoraCognitiveTurn({
      correlationId: "corr02b-path-a",
      projectId: "proj-a",
      messages: [
        { role: "system", content: sfiaBoundaryInstructions() },
        { role: "user", content: "corroborate externally CEO of Acme" },
      ],
      provider: new FakeConversationProvider({ scripted: ["OK"] }),
      // Force path A — invalid session path → Memory B unavailable branch
      sessionDbPath: "/nonexistent/corr02b/session.sqlite",
      enableTools: true,
      enableHostedWebSearch: true,
      deterministicHostedWebSearchCalls: [FIXTURE_CALL, FIXTURE_CALL],
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
        agentsModel: new ScriptedModel([[assistantMessage("OK")]]),
      },
    });

    expect(turn.hostedSearchObserve).toBeDefined();
    expect(turn.hostedSearchObserve!.deterministicBoundaryUsed).toBe(true);
    expect(turn.hostedSearchObserve!.rawCallsObserved).toBe(2);
    expect(
      resolveLiveHostedDispatchCallsFromHostedObserve(turn.hostedSearchObserve),
    ).toBe(0);
  });

  it("path B (session available) — preserves hostedSearchObserve; no drop", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-corr02b-"));
    tempDirs.push(dir);
    const sessionDbPath = path.join(dir, "session.sqlite");
    const campaign = acquireNoraCampaignBudget({
      campaignId: `corr02b-path-b-${Date.now()}`,
      maxModelInvocations: 10,
      maxHostedWebOperations: 26,
      maxAggregateRealCalls: 40,
      hostedHardCapCapability: "provider_max_tool_calls",
    });

    const turn = await runNoraCognitiveTurn({
      correlationId: "corr02b-path-b",
      projectId: "proj-b",
      messages: [
        { role: "system", content: sfiaBoundaryInstructions() },
        { role: "user", content: "corroborate externally CEO of Acme" },
      ],
      provider: new FakeConversationProvider({ scripted: ["OK"] }),
      sessionDbPath,
      enableTools: true,
      enableHostedWebSearch: true,
      campaignBudget: campaign,
      deterministicHostedWebSearchCalls: [FIXTURE_CALL],
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
        agentsModel: new ScriptedModel([[assistantMessage("OK")]]),
      },
    });

    expect(turn.hostedSearchObserve).toBeDefined();
    expect(turn.hostedSearchObserve!.deterministicBoundaryUsed).toBe(true);
    expect(turn.hostedSearchObserve!.rawCallsObserved).toBeGreaterThanOrEqual(1);
    // Fixture ≠ REAL hosted budget consumption
    expect(campaign.consumedHostedWebOperations).toBe(0);
    expect(
      resolveLiveHostedDispatchCallsFromHostedObserve(turn.hostedSearchObserve),
    ).toBe(0);
  });
});

describe("CORR-02B — Stage A parity with composed factual observation", () => {
  it("MW6-HOSTED-04 — canonical N == factual N → no integrity stop; PASS kept", async () => {
    const state = createGlobalMrStageADriver({
      campaignId: `corr02b-h04-${Date.now()}`,
    });
    const cell = buildGlobalMrStageAMatrix({
      campaignId: state.campaignId,
    }).find((c) => c.workloadId === "W-Sources")!;
    const out = await runGlobalMrStageACell({
      state,
      cell,
      executor: async (_c, ctx) => {
        expect(claimHostedWebOperations(ctx.campaignBudget, 2)).toBe(true);
        return {
          passFail: "PASS",
          failureClass: "NONE",
          rawSummary: "parity-ok",
          usage: null,
          reportedHostedOperationsConsumed: 2,
          productObservation: {
            mw6AuthorityComposition: { liveHostedDispatchCalls: 2 },
          },
        };
      },
    });
    expect(out.stopped).toBe(false);
    expect(state.stopReason).toBe("NONE");
    expect(out.evidence?.passFail).toBe("PASS");
    expect(out.evidence?.productObservation?.canonicalDelta).toMatchObject({
      hosted: 2,
      reportedMismatch: false,
      factualHostedObserved: 2,
    });
  });

  it("MW6-HOSTED-05 — canonical N != composed factual → hard stop", async () => {
    const state = createGlobalMrStageADriver({
      campaignId: `corr02b-h05-${Date.now()}`,
    });
    const cell = buildGlobalMrStageAMatrix({
      campaignId: state.campaignId,
    }).find((c) => c.workloadId === "W-Sources")!;
    const out = await runGlobalMrStageACell({
      state,
      cell,
      executor: async (_c, ctx) => {
        claimHostedWebOperations(ctx.campaignBudget, 2);
        return {
          passFail: "PASS",
          failureClass: "NONE",
          rawSummary: "parity-bad",
          usage: null,
          // Prefer composition seam (reported omitted) — matches REAL paradox shape
          productObservation: {
            mw6AuthorityComposition: { liveHostedDispatchCalls: 0 },
          },
        };
      },
    });
    expect(out.stopped).toBe(true);
    expect(state.stopReason).toBe("EVIDENCE_INTEGRITY_HOSTED_MISMATCH");
  });

  it("MW6-HOSTED-06 — W-Sources PASS @ factual 0 + canonical 0 → NOT_PROVEN", async () => {
    const state = createGlobalMrStageADriver({
      campaignId: `corr02b-h06-${Date.now()}`,
    });
    const cell = buildGlobalMrStageAMatrix({
      campaignId: state.campaignId,
    }).find((c) => c.workloadId === "W-Sources")!;
    const out = await runGlobalMrStageACell({
      state,
      cell,
      executor: async () => ({
        passFail: "PASS",
        failureClass: "NONE",
        rawSummary: "fixture-zero-real",
        usage: null,
        reportedHostedOperationsConsumed: 0,
        productObservation: {
          mw6AuthorityComposition: { liveHostedDispatchCalls: 0 },
        },
      }),
    });
    expect(out.evidence?.passFail).toBe("NOT_PROVEN");
    expect(state.stopReason).toBe("NONE");
  });
});

```


---

END REVIEW PACK — GLOBAL-MR-STAGE-A-REAL-CORR-01 (CORR-02B included)
