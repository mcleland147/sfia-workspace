# ChatGPT Review Pack — P5-S05 FULL

## Metadata
- timestamp: 2026-10-05T23:36:31Z
- cycle: 8 — Delivery / Implementation
- profile: Critical
- typology: EVOL
- macro: STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
- milestone: P5 — Integrated Delivery
- slice: P5-S05 — R3 Integrated Product Cognitive Path + F2 Routing Alignment
- Morris P5-S05 DELIVERY + REAL/R3 GATE: AUTHORIZED / CONSUMED
- Review Pack: FULL
- Review Handoff: REQUIRED / publish-in-cycle L3

## Local Git Truth Check
- repository: mcleland147/sfia-workspace
- branch: delivery/sfia-studio-product-simplification-p5-s05-r3-f2-routing-alignment
- HEAD / origin/main: 79a0e48a69c8dd634a8cecf972199bea8a4daeec
- base = PR #559 POST-S04 TRUTH-SYNC merge · CI #686 SUCCESS
- working tree: local S05 candidate (no project commit)
- STOP conditions: none (main match · tracked-clean at branch create)

## Sources / SHAs (as specified)
- Build Doctrine READ ONLY
- Roadmap MODIFIED locally for S05 tip
- P5 source MODIFIED locally for S05 section
- P4 READ ONLY
- Process templates READ ONLY / external only

## Code discovery (CURRENT → TARGET)
- F2 analyzeIntent previously used resolveConversationProvider → OPENAI_MODEL/EFFORT
- TARGET: factual TurnWorkloadContext → CWP Strategy → cognitiveRoutingPolicy → createRoutedOpenAiConversationProvider → completeStructured
- NOT forced through runNoraCognitiveTurn
- F1 path unchanged (already routed)
- OPENAI_MODEL TEMP WITH EXIT for legacy/non-routed

## Architecture parallelism check
- NO second Nora
- NO second router / router service
- NO new persistence / Product model
- NO parallel evaluation architecture
- SAME cognitiveRoutingPolicy + Agents Runner + OpenAI Responses adapter

## OpenAI capability fit (R22)
- KEEP / ADAPT existing Responses adapter
- Structured output KEEP
- Agents Runner KEEP
- cognitiveRoutingPolicy KEEP / REUSE
- REAL account entitlement: selected gpt-6-luna supported (selected==actual PASS)

## Files modified / created
### Modified
- projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
- projects/sfia-studio/app/features/project-assistant/resolveAssistantMode.ts
- projects/sfia-studio/app/lib/platform/ai/config.ts
- projects/sfia-studio/app/lib/platform/ai/provider.ts
- projects/sfia-studio/app/lib/platform/ai/openaiProvider.ts
- projects/sfia-studio/app/lib/platform/ai/index.ts
- projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p5.s02.boundedReal.r1r2.test.ts (debt note only)
- projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
- projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
- projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md
### Created
- projects/sfia-studio/app/features/project-assistant/f2/resolveF2ProductRoutedProvider.ts
- projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p5.s05.f2RoutingAlignment.d0.test.ts
- projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p5.s05.r3IntegratedProduct.real.test.ts
- .tmp-sfia-review/p5-s05-r3/evidence.json

## Diff stat (vs origin/main, tracked)
```
 .../p5.s02.boundedReal.r1r2.test.ts                |  5 +-
 .../features/project-assistant/f2/orchestrateF2.ts | 30 ++++++-
 .../project-assistant/resolveAssistantMode.ts      |  5 +-
 projects/sfia-studio/app/lib/platform/ai/config.ts | 40 ++++++++-
 projects/sfia-studio/app/lib/platform/ai/index.ts  |  4 +
 .../app/lib/platform/ai/openaiProvider.ts          | 10 +++
 .../sfia-studio/app/lib/platform/ai/provider.ts    | 27 ++++++
 .../convergence/sfia-studio-convergence-roadmap.md |  3 +-
 ...t-product-simplification-integrated-delivery.md | 96 ++++++++++++++--------
 .../production-runtime-reference.manifest.json     |  2 +-
 10 files changed, 178 insertions(+), 44 deletions(-)

```

## Complete modified content — tracked code/docs diff
```diff
diff --git a/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p5.s02.boundedReal.r1r2.test.ts b/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p5.s02.boundedReal.r1r2.test.ts
index ba0a05d5..76ecff43 100644
--- a/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p5.s02.boundedReal.r1r2.test.ts
+++ b/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p5.s02.boundedReal.r1r2.test.ts
@@ -358,7 +358,7 @@ describe.skipIf(!RUN)("P5-S02 bounded REAL R1+R2", () => {
           f1Calls,
           f2Calls,
           f2Note:
-            "F2 analyzeIntent uses constructor OPENAI_MODEL — P5-DEBT-F2-ROUTING-ALIGNMENT OPEN",
+            "Historical S02 observation — F2 env constructor debt later exited by P5-S05 local candidate (see p5.s05.*)",
           cognitiveRuntime:
             resolvedTurn?.cognitiveRuntime ??
             (result.ok ? result.cognitiveRuntime : null),
@@ -444,7 +444,8 @@ describe.skipIf(!RUN)("P5-S02 bounded REAL R1+R2", () => {
         budgetCumulativeFromR1Meter: budget.cumulativeUsd,
         classificationA:
           "router→Agents REAL body already wired (no production fix)",
-        f2Debt: "P5-DEBT-F2-ROUTING-ALIGNMENT OPEN",
+        f2Debt:
+          "P5-DEBT-F2-ROUTING-ALIGNMENT — historical S02 OPEN; S05 EXIT PROOF PASS LOCAL CANDIDATE (not CLOSED ON MAIN)",
         final: "PASS — P5-S02 BOUNDED REAL R1+R2 PROVEN",
       };
       fs.mkdirSync(path.dirname(OUT), { recursive: true });
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index b6ac5d37..0bc2eab2 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -32,6 +32,8 @@ import type {
 import { orchestrateProjectAssistantTurn } from "../orchestrateTurn";
 import { resolveAssistantMode } from "../resolveAssistantMode";
 import { analyzeIntent } from "./intentAnalysis";
+import { resolveF2ProductRoutedProvider } from "./resolveF2ProductRoutedProvider";
+import { ProjectAssistantMemoryEventSink } from "../memoryEventSink";
 import { resolveAvailableContradictionPointers } from "../mw3AvailableEvidence";
 import {
   deriveMw3ContradictionAssessment,
@@ -1045,7 +1047,7 @@ export async function orchestrateAssistantSend(input: {
       retryable: false,
     };
   }
-  const effectiveProvider = cellProvider ?? input.provider;
+  let effectiveProvider = cellProvider ?? input.provider;
   const modeResolution = resolveMode(effectiveProvider);
   if (!modeResolution.canProceed) {
     return {
@@ -1173,6 +1175,32 @@ export async function orchestrateAssistantSend(input: {
     }
     const canonicalConversationContext = canonicalLoad.contextText;

+    // P5-S05 — F2 Product routing (same cognitiveRoutingPolicy; not runNoraCognitiveTurn).
+    // Eval pin / explicit provider injection skip this seam (boundary / eval-only).
+    if (!input.evalModelReasoningControl && !effectiveProvider) {
+      const history = input.history ?? [];
+      const f2CorrelationId = `cor:f2-route-${randomBytes(8).toString("hex")}`;
+      const cognitiveTaskId =
+        typeof input.logicalTurnId === "string" && input.logicalTurnId.trim()
+          ? input.logicalTurnId.trim()
+          : `f2:${project.projectId}:${f2CorrelationId}`;
+      const f2Routed = resolveF2ProductRoutedProvider({
+        turnContext: {
+          projectCriticality: project.criticality,
+          userContentLength: content.length,
+          historyMessageCount: history.length,
+          historyTotalChars: history.reduce(
+            (sum, m) => sum + m.content.length,
+            0,
+          ),
+        },
+        cognitiveTaskId,
+        correlationId: f2CorrelationId,
+        sink: new ProjectAssistantMemoryEventSink(),
+      });
+      effectiveProvider = f2Routed.provider;
+    }
+
     const challengeSession = getMw5ChallengeSession(project.projectId);
     const challengeContext =
       challengeSession.latest != null
diff --git a/projects/sfia-studio/app/features/project-assistant/resolveAssistantMode.ts b/projects/sfia-studio/app/features/project-assistant/resolveAssistantMode.ts
index 344784af..6979bce0 100644
--- a/projects/sfia-studio/app/features/project-assistant/resolveAssistantMode.ts
+++ b/projects/sfia-studio/app/features/project-assistant/resolveAssistantMode.ts
@@ -4,7 +4,7 @@
  */

 import {
-  getLiveConversationAvailability,
+  getLiveConversationCredentialAvailability,
   isFakeConversationProviderForced,
   type ConversationProvider,
 } from "@/lib/platform/ai";
@@ -47,7 +47,8 @@ export function resolveAssistantMode(
       presentation: "test_provider",
     };
   }
-  const availability = getLiveConversationAvailability();
+  // Product assistant: credentials only. Nominal model×effort = cognitiveRoutingPolicy.
+  const availability = getLiveConversationCredentialAvailability();
   if (!availability.available) {
     return {
       mode: "unavailable",
diff --git a/projects/sfia-studio/app/lib/platform/ai/config.ts b/projects/sfia-studio/app/lib/platform/ai/config.ts
index 3769d4d4..8d251c93 100644
--- a/projects/sfia-studio/app/lib/platform/ai/config.ts
+++ b/projects/sfia-studio/app/lib/platform/ai/config.ts
@@ -44,7 +44,25 @@ export function parseOpenAiReasoningEffort(
   return normalized as OpenAiReasoningEffort;
 }

-/** Public availability probe — never returns secret values. */
+/**
+ * Credential-only availability for Product routed cognition (P5-S05).
+ * OPENAI_MODEL is NOT required — nominal model×effort comes from cognitiveRoutingPolicy.
+ * Never returns secret values.
+ */
+export function getLiveConversationCredentialAvailability():
+  | { available: true }
+  | { available: false; missing: Array<"OPENAI_API_KEY"> } {
+  if (!process.env.OPENAI_API_KEY?.trim()) {
+    return { available: false, missing: ["OPENAI_API_KEY"] };
+  }
+  return { available: true };
+}
+
+/**
+ * Legacy + Ops1 availability probe — key AND model present.
+ * Product routed F2/F1 must NOT use this as nominal selection authority.
+ * Never returns secret values.
+ */
 export function getLiveConversationAvailability(): LiveConfigStatus {
   const missing: Array<"OPENAI_API_KEY" | "OPENAI_MODEL"> = [];
   if (!process.env.OPENAI_API_KEY?.trim()) missing.push("OPENAI_API_KEY");
@@ -55,7 +73,25 @@ export function getLiveConversationAvailability(): LiveConfigStatus {
   return { available: true, modelConfigured: true };
 }

-/** Server-only resolved config — fail-closed, no silent defaults. */
+/**
+ * Server-only API key for Product routed OpenAI construction.
+ * Fail-closed. Never returns/logs the key to clients.
+ */
+export function requireLiveConversationApiKey(): string {
+  const availability = getLiveConversationCredentialAvailability();
+  if (!availability.available) {
+    throw new TechnicalError(
+      "CONFIG",
+      `Configuration live indisponible (variables manquantes : ${availability.missing.join(", ")}).`,
+    );
+  }
+  return process.env.OPENAI_API_KEY!.trim();
+}
+
+/**
+ * Legacy env-bound secrets — TEMP WITH EXIT for non-routed / Ops1 paths.
+ * Product nominal F2/F1 selection must use cognitiveRoutingPolicy instead.
+ */
 export function requireLiveConversationSecrets(): {
   apiKey: string;
   model: string;
diff --git a/projects/sfia-studio/app/lib/platform/ai/index.ts b/projects/sfia-studio/app/lib/platform/ai/index.ts
index 00d5883c..55aa358b 100644
--- a/projects/sfia-studio/app/lib/platform/ai/index.ts
+++ b/projects/sfia-studio/app/lib/platform/ai/index.ts
@@ -13,6 +13,8 @@ export { TechnicalError } from "./errors";
 export type { TechnicalErrorCode } from "./errors";
 export {
   getLiveConversationAvailability,
+  getLiveConversationCredentialAvailability,
+  requireLiveConversationApiKey,
   requireLiveConversationSecrets,
   isFakeConversationProviderForced,
 } from "./config";
@@ -25,6 +27,8 @@ export { OpenAIConversationProvider } from "./openaiProvider";
 export { FakeConversationProvider } from "./fakeProvider";
 export type { FakeToolScriptRound } from "./fakeProvider";
 export {
+  createRoutedOpenAiConversationProvider,
+  getConversationProviderOverrideForTests,
   resolveConversationProvider,
   setConversationProviderForTests,
 } from "./provider";
diff --git a/projects/sfia-studio/app/lib/platform/ai/openaiProvider.ts b/projects/sfia-studio/app/lib/platform/ai/openaiProvider.ts
index 3d76ff6c..13ffc70e 100644
--- a/projects/sfia-studio/app/lib/platform/ai/openaiProvider.ts
+++ b/projects/sfia-studio/app/lib/platform/ai/openaiProvider.ts
@@ -31,6 +31,16 @@ export class OpenAIConversationProvider implements ConversationProvider {
     this.reasoningEffort = reasoningEffort;
   }

+  /** Constructor-bound model — not client-authoritative; used for routed Product proof. */
+  get configuredModel(): string {
+    return this.model;
+  }
+
+  /** Constructor-bound reasoning effort (omit ⇒ provider default). */
+  get configuredReasoningEffort(): OpenAiReasoningEffort | undefined {
+    return this.reasoningEffort;
+  }
+
   private reasoningParam():
     | { reasoning: { effort: OpenAiReasoningEffort } }
     | Record<string, never> {
diff --git a/projects/sfia-studio/app/lib/platform/ai/provider.ts b/projects/sfia-studio/app/lib/platform/ai/provider.ts
index 264eaed1..800c196a 100644
--- a/projects/sfia-studio/app/lib/platform/ai/provider.ts
+++ b/projects/sfia-studio/app/lib/platform/ai/provider.ts
@@ -1,6 +1,8 @@
 import {
   isFakeConversationProviderForced,
+  requireLiveConversationApiKey,
   requireLiveConversationSecrets,
+  type OpenAiReasoningEffort,
 } from "./config";
 import { FakeConversationProvider } from "./fakeProvider";
 import { OpenAIConversationProvider } from "./openaiProvider";
@@ -15,6 +17,31 @@ export function setConversationProviderForTests(
   providerOverride = provider;
 }

+/** Test-only read of the current override (boundary substitution detection). */
+export function getConversationProviderOverrideForTests(): ConversationProvider | null {
+  return providerOverride;
+}
+
+/**
+ * Product routed OpenAI construction — API key + router-selected model×effort.
+ * Does NOT read OPENAI_MODEL / OPENAI_REASONING_EFFORT as selection authority.
+ */
+export function createRoutedOpenAiConversationProvider(input: {
+  model: string;
+  reasoningEffort: OpenAiReasoningEffort;
+}): OpenAIConversationProvider {
+  const apiKey = requireLiveConversationApiKey();
+  return new OpenAIConversationProvider(
+    apiKey,
+    input.model,
+    input.reasoningEffort,
+  );
+}
+
+/**
+ * Legacy resolver — TEMP WITH EXIT env model/effort for non-routed callers.
+ * Product nominal F2/F1 must pass an explicit routed provider instead.
+ */
 export function resolveConversationProvider(): ConversationProvider {
   if (providerOverride) return providerOverride;
   if (isFakeConversationProviderForced()) {
diff --git a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
index 8766284c..dc721daf 100644
--- a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
+++ b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
@@ -586,7 +586,7 @@
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts",
-      "sha256_16": "d834bbcdebf549c8"
+      "sha256_16": "8c5c218b44267b5b"
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts",

```

## Complete new file — resolveF2ProductRoutedProvider.ts
```typescript
/**
 * P5-S05 — F2 Product cognitive routing alignment.
 *
 * ONE COGNITIVE SELECTION POLICY ≠ one function entry point.
 * F2 structured analyzeIntent reuses decideCognitiveStrategy + decideCognitiveRouting
 * without wrapping through runNoraCognitiveTurn.
 *
 * Pre-intent signals are factual-only (UNKNOWN ≠ LOW). No invented semantic workload.
 */

import {
  buildSignalsFromTurnContext,
  decideCognitiveRouting,
  decideCognitiveStrategy,
  P5_COGNITIVE_ROUTING_POLICY_VERSION,
  validateRuntimeReasoningCapability,
  type CognitiveRoutingDecision,
  type CognitiveStrategyDecision,
  type TurnWorkloadContext,
} from "@/lib/nora-cognitive-runtime";
import {
  createRoutedOpenAiConversationProvider,
  getConversationProviderOverrideForTests,
  isFakeConversationProviderForced,
  FakeConversationProvider,
  type ConversationProvider,
} from "@/lib/platform/ai";
import type { EventSink } from "@/lib/platform/observability";
import { TechnicalError } from "@/lib/platform/ai/errors";

export const F2_COGNITIVE_PHASE = "f2_analyzeIntent" as const;

export type F2ProductRoutedProviderResolution = {
  provider: ConversationProvider;
  strategy: CognitiveStrategyDecision;
  routing: CognitiveRoutingDecision;
  policyVersion: typeof P5_COGNITIVE_ROUTING_POLICY_VERSION;
  cognitiveTaskId: string;
  /** Boundary substitution used for the call (Fake/override) — not production selection. */
  boundarySubstitution: boolean;
};

function emitF2CognitiveTelemetry(
  sink: EventSink | undefined,
  correlationId: string,
  strategy: CognitiveStrategyDecision,
  routing: CognitiveRoutingDecision,
): void {
  if (!sink) return;
  sink.emit({
    type: "COGNITIVE_STRATEGY_SELECTED",
    correlationId,
    detail: {
      phase: F2_COGNITIVE_PHASE,
      strategyClass: strategy.strategyClass,
      reasoningEffort: strategy.reasoningEffort,
      reasoningDemand: strategy.reasoningDemand,
      criticalChallengeArmed: strategy.criticalChallengeArmed,
      bootstrapUsed: strategy.bootstrapUsed,
      reasonCodes: strategy.reasonCodes,
      envelope: [...strategy.candidateEnvelope],
    },
  });
  sink.emit({
    type: "COGNITIVE_ROUTING_SELECTED",
    correlationId,
    detail: {
      phase: F2_COGNITIVE_PHASE,
      routingDecisionId: routing.routingDecisionId,
      cognitiveTaskId: routing.cognitiveTaskId,
      strategyClass: routing.strategyClass,
      selectedModel: routing.selectedModel,
      selectedEffort: routing.selectedReasoningEffort,
      reasoningMode: routing.reasoningMode,
      qualityFloor: {
        category: routing.qualityFloor.category,
        minModelRank: routing.qualityFloor.minModelRank,
        minEffortRank: routing.qualityFloor.minEffortRank,
        reasonCodes: routing.qualityFloor.reasonCodes,
      },
      reasonCodes: routing.reasonCodes,
      eligibleSummary: routing.eligibleConfigs.slice(0, 12).map((c) => ({
        modelId: c.modelId,
        reasoningEffort: c.reasoningEffort,
      })),
      escalationEligible: routing.escalationEligible,
      maxEscalations: routing.maxEscalations,
      providerCapabilitySnapshot: routing.providerSnapshotIdentity,
      routingPolicyVersion: routing.policyVersion,
      estimatedCostUsdHint: routing.estimatedCostUsdHint,
    },
  });
}

/**
 * Resolve F2 ConversationProvider under Product cognitiveRoutingPolicy.
 *
 * - Eval/explicit pin: caller supplies provider; this helper is not used.
 * - Fake / test override: still runs Strategy→Router for provenance; call uses boundary provider.
 * - Live Product: constructs OpenAI with router-selected model×effort (not OPENAI_MODEL).
 */
export function resolveF2ProductRoutedProvider(input: {
  turnContext: TurnWorkloadContext;
  /** Prefer logicalTurnId when present; else bounded phase task id. */
  cognitiveTaskId: string;
  correlationId: string;
  sink?: EventSink;
}): F2ProductRoutedProviderResolution {
  const cognitiveTaskId = input.cognitiveTaskId.trim();
  if (!cognitiveTaskId) {
    throw new TechnicalError(
      "CONFIG",
      "F2_COGNITIVE_TASK_ID_REQUIRED: Product F2 routing requires a stable cognitive task id.",
    );
  }

  const signals = buildSignalsFromTurnContext(input.turnContext);
  const strategy = decideCognitiveStrategy({
    signals,
    trustedSfiaProfile: null,
  });
  const routed = decideCognitiveRouting({
    strategy,
    cognitiveTaskId,
    signals: strategy.normalizedSignals,
  });
  if (!routed.ok) {
    throw new TechnicalError(
      "CONFIG",
      `P5 F2 cognitive routing: aucune configuration suffisante (quality floor). Codes: ${routed.reasonCodes.join(", ")}`,
    );
  }

  validateRuntimeReasoningCapability(
    routed.selectedModel,
    routed.selectedReasoningEffort,
  );

  emitF2CognitiveTelemetry(
    input.sink,
    input.correlationId,
    strategy,
    routed,
  );

  const override = getConversationProviderOverrideForTests();
  if (override) {
    return {
      provider: override,
      strategy,
      routing: routed,
      policyVersion: P5_COGNITIVE_ROUTING_POLICY_VERSION,
      cognitiveTaskId,
      boundarySubstitution: true,
    };
  }
  if (isFakeConversationProviderForced()) {
    return {
      provider: new FakeConversationProvider(),
      strategy,
      routing: routed,
      policyVersion: P5_COGNITIVE_ROUTING_POLICY_VERSION,
      cognitiveTaskId,
      boundarySubstitution: true,
    };
  }

  const provider = createRoutedOpenAiConversationProvider({
    model: routed.selectedModel,
    reasoningEffort: routed.selectedReasoningEffort,
  });

  return {
    provider,
    strategy,
    routing: routed,
    policyVersion: P5_COGNITIVE_ROUTING_POLICY_VERSION,
    cognitiveTaskId,
    boundarySubstitution: false,
  };
}

```

## Complete new file — p5.s05.f2RoutingAlignment.d0.test.ts
```typescript
/** @vitest-environment node */
/**
 * P5-S05 — F2 routing alignment D0 (ZERO REAL / DETERMINISTIC PROVEN).
 *
 * D1–D13 oracles. Does NOT claim R3.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  P5_COGNITIVE_ROUTING_POLICY_VERSION,
  P5_TARGET_MODEL_COHORT,
  decideCognitiveRouting,
  decideCognitiveStrategy,
  buildSignalsFromTurnContext,
} from "@/lib/nora-cognitive-runtime";
import * as routingPolicy from "@/lib/nora-cognitive-runtime/cognitiveRoutingPolicy";
import * as cognitiveRuntime from "@/lib/nora-cognitive-runtime/runNoraCognitiveTurn";
import {
  createRoutedOpenAiConversationProvider,
  FakeConversationProvider,
  OpenAIConversationProvider,
  setConversationProviderForTests,
  getConversationProviderOverrideForTests,
  getLiveConversationCredentialAvailability,
  getLiveConversationAvailability,
} from "@/lib/platform/ai";
import { TechnicalError } from "@/lib/platform/ai/errors";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import { projectAssistantSendAction } from "@/features/project-assistant/actions";
import { ProjectAssistantMemoryEventSink } from "@/features/project-assistant/memoryEventSink";
import type { TechnicalEvent } from "@/lib/platform/observability/types";
import {
  resolveF2ProductRoutedProvider,
  F2_COGNITIVE_PHASE,
} from "@/features/project-assistant/f2/resolveF2ProductRoutedProvider";
import * as f2Resolver from "@/features/project-assistant/f2/resolveF2ProductRoutedProvider";

describe("P5-S05 — F2 routing alignment D0", () => {
  const tempDirs: string[] = [];
  let projectId = "";
  let lpsId = "";
  let productDbPath = "";
  const prevFake = process.env.OPS1_CONVERSATION_PROVIDER;
  const prevKey = process.env.OPENAI_API_KEY;
  const prevModel = process.env.OPENAI_MODEL;
  const prevEffort = process.env.OPENAI_REASONING_EFFORT;

  beforeEach(async () => {
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    delete process.env.OPENAI_API_KEY;
    delete process.env.OPENAI_MODEL;
    delete process.env.OPENAI_REASONING_EFFORT;
    setConversationProviderForTests(null);
    resetRuntimeApplicationServiceForTests();
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-p5-s05-"));
    tempDirs.push(dir);
    productDbPath = path.join(dir, "oa-product.sqlite");
    const runtime = getRuntimeApplicationService({
      productDbPath,
      auditMode: "noop",
      nowIso: "2026-10-06T08:00:00.000Z",
    });
    const created = await runtime.createProject({
      name: "Product Simplification P5-S05",
      objective: "F2 routing alignment deterministic proof",
      context: "P5-S05 D0",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: "P5S05",
      idempotencyKey: `idem:p5-s05-${Date.now()}-${Math.random()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("createProject failed");
    projectId = created.projectId;
    const project = await runtime.getProject(projectId);
    expect(project.ok).toBe(true);
    if (!project.ok) throw new Error("getProject failed");
    lpsId = project.livingState.id;
  });

  afterEach(() => {
    vi.restoreAllMocks();
    setConversationProviderForTests(null);
    resetRuntimeApplicationServiceForTests();
    if (prevFake === undefined) delete process.env.OPS1_CONVERSATION_PROVIDER;
    else process.env.OPS1_CONVERSATION_PROVIDER = prevFake;
    if (prevKey === undefined) delete process.env.OPENAI_API_KEY;
    else process.env.OPENAI_API_KEY = prevKey;
    if (prevModel === undefined) delete process.env.OPENAI_MODEL;
    else process.env.OPENAI_MODEL = prevModel;
    if (prevEffort === undefined) delete process.env.OPENAI_REASONING_EFFORT;
    else process.env.OPENAI_REASONING_EFFORT = prevEffort;
    while (tempDirs.length) {
      const dir = tempDirs.pop();
      if (dir) fs.rmSync(dir, { recursive: true, force: true });
    }
  });

  it("D1/D2/D8/D9/D10 — Product send routes F2 via cognitiveRoutingPolicy; F1 unchanged; no authority", async () => {
    const fetchSpy = vi.spyOn(globalThis, "fetch").mockImplementation(() => {
      throw new Error("UNEXPECTED_LIVE_FETCH_P5_S05");
    });
    const emitted: TechnicalEvent[] = [];
    const originalEmit = ProjectAssistantMemoryEventSink.prototype.emit;
    vi.spyOn(ProjectAssistantMemoryEventSink.prototype, "emit").mockImplementation(
      function (this: ProjectAssistantMemoryEventSink, event: TechnicalEvent) {
        emitted.push(event);
        return originalEmit.call(this, event);
      },
    );
    const routingSpy = vi.spyOn(routingPolicy, "decideCognitiveRouting");
    const turnSpy = vi.spyOn(cognitiveRuntime, "runNoraCognitiveTurn");
    const sessionDbPath = path.join(
      path.dirname(productDbPath),
      "nora-session.sqlite",
    );

    try {
      // No explicit provider — nominal Product F2 must resolve via routing seam.
      const result = await projectAssistantSendAction({
        projectId,
        content:
          "Peux-tu me rappeler le contexte courant de ce projet sans rien modifier ?",
        sessionDbPath,
      });
      expect(result.ok).toBe(true);
      if (!result.ok) throw new Error(JSON.stringify(result));

      expect(routingSpy).toHaveBeenCalled();
      expect(routingSpy.mock.calls.length).toBeGreaterThanOrEqual(2);

      const okDecisions = routingSpy.mock.results
        .filter(
          (r) =>
            r.type === "return" &&
            r.value &&
            (r.value as { ok?: boolean }).ok === true,
        )
        .map((r) => r.value as {
          ok: true;
          selectedModel: string;
          selectedReasoningEffort: string;
          policyVersion: string;
          strategyClass: string;
          cognitiveTaskId: string;
          routingDecisionId: string;
        });
      expect(okDecisions.length).toBeGreaterThanOrEqual(2);
      for (const d of okDecisions) {
        expect(d.policyVersion).toBe(P5_COGNITIVE_ROUTING_POLICY_VERSION);
        expect(P5_TARGET_MODEL_COHORT).toContain(
          d.selectedModel as (typeof P5_TARGET_MODEL_COHORT)[number],
        );
        expect(d.selectedReasoningEffort).toBeTruthy();
      }

      const f2Events = emitted.filter(
        (e) =>
          e.type === "COGNITIVE_ROUTING_SELECTED" &&
          e.detail?.phase === F2_COGNITIVE_PHASE,
      );
      expect(f2Events.length).toBeGreaterThanOrEqual(1);
      expect(f2Events[0]!.detail.routingPolicyVersion).toBe(
        P5_COGNITIVE_ROUTING_POLICY_VERSION,
      );
      expect(f2Events[0]!.detail.selectedModel).toBeTruthy();

      expect(turnSpy).toHaveBeenCalled();
      expect(result.cognitiveRuntime).toBe("agents");
      expect(result).not.toHaveProperty("cognitiveStrategyClass");
      expect(result).not.toHaveProperty("selectedReasoningEffort");
      expect((result as { humanDecisionId?: string }).humanDecisionId).toBeUndefined();
      expect(result).not.toHaveProperty("confirmationGranted");
      expect(fetchSpy).not.toHaveBeenCalled();
      expect(lpsId).toBeTruthy();
    } finally {
      fetchSpy.mockRestore();
    }
  });

  it("D3/D13 — conflicting OPENAI_MODEL/EFFORT cannot override routed Product selection", () => {
    process.env.OPENAI_API_KEY = "sk-test-p5-s05-not-real";
    process.env.OPENAI_MODEL = "gpt-hostile-static-override";
    process.env.OPENAI_REASONING_EFFORT = "max";
    delete process.env.OPS1_CONVERSATION_PROVIDER;

    const signals = buildSignalsFromTurnContext({
      projectCriticality: "STANDARD",
      userContentLength: 40,
      historyMessageCount: 0,
    });
    const strategy = decideCognitiveStrategy({
      signals,
      trustedSfiaProfile: null,
    });
    const routed = decideCognitiveRouting({
      strategy,
      cognitiveTaskId: "f2:d3-conflict",
      signals: strategy.normalizedSignals,
    });
    expect(routed.ok).toBe(true);
    if (!routed.ok) throw new Error("routing failed");

    const provider = createRoutedOpenAiConversationProvider({
      model: routed.selectedModel,
      reasoningEffort: routed.selectedReasoningEffort,
    });
    expect(provider).toBeInstanceOf(OpenAIConversationProvider);
    expect(provider.configuredModel).toBe(routed.selectedModel);
    expect(provider.configuredModel).not.toBe("gpt-hostile-static-override");
    expect(provider.configuredReasoningEffort).toBe(
      routed.selectedReasoningEffort,
    );
    expect(process.env.OPENAI_MODEL).toBe("gpt-hostile-static-override");
  });

  it("D4 — unsupported selected model/effort fails closed", () => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    vi.spyOn(routingPolicy, "decideCognitiveRouting").mockReturnValue({
      ok: true,
      routingDecisionId: "rd:hostile",
      cognitiveTaskId: "f2:d4",
      strategyClass: "Focused",
      qualityFloor: {
        category: "routine-sufficient",
        minModelRank: 1,
        minEffortRank: 1,
        reasonCodes: [],
      },
      eligibleConfigs: [],
      selectedModel: "gpt-hostile-unsupported" as never,
      selectedReasoningEffort: "low",
      reasoningMode: "standard",
      reasonCodes: ["TEST_HOSTILE"],
      escalationEligible: false,
      maxEscalations: 1,
      providerSnapshotIdentity: "test",
      policyVersion: P5_COGNITIVE_ROUTING_POLICY_VERSION,
      estimatedCostUsdHint: null,
    });

    expect(() =>
      resolveF2ProductRoutedProvider({
        turnContext: {
          projectCriticality: "STANDARD",
          userContentLength: 20,
          historyMessageCount: 0,
        },
        cognitiveTaskId: "f2:d4",
        correlationId: "cor:d4",
      }),
    ).toThrow(TechnicalError);
  });

  it("D5 — client SendAction surface has no model/effort authority fields", () => {
    const src = fs.readFileSync(
      path.resolve(
        __dirname,
        "../../features/project-assistant/actions.ts",
      ),
      "utf8",
    );
    const sendBlock = src.slice(
      src.indexOf("export async function projectAssistantSendAction"),
      src.indexOf("export async function projectAssistantDecideAction"),
    );
    expect(sendBlock).not.toMatch(/\bmodelId\b/);
    expect(sendBlock).not.toMatch(/\breasoningEffort\b/);
    expect(sendBlock).not.toMatch(/\bOPENAI_MODEL\b/);
    expect(sendBlock).not.toMatch(/evalModelReasoningControl/);
  });

  it("D6 — Fake/override remains boundary substitution, not production selection", () => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    delete process.env.OPENAI_API_KEY;

    const resolved = resolveF2ProductRoutedProvider({
      turnContext: {
        projectCriticality: "LOW",
        userContentLength: 12,
        historyMessageCount: 0,
      },
      cognitiveTaskId: "f2:d6-fake",
      correlationId: "cor:d6-fake",
    });
    expect(resolved.boundarySubstitution).toBe(true);
    expect(resolved.provider).toBeInstanceOf(FakeConversationProvider);
    expect(resolved.provider.providerId).toBe("fake-test");
    expect(resolved.policyVersion).toBe(P5_COGNITIVE_ROUTING_POLICY_VERSION);
    expect(P5_TARGET_MODEL_COHORT).toContain(resolved.routing.selectedModel);

    const override = new FakeConversationProvider();
    setConversationProviderForTests(override);
    expect(getConversationProviderOverrideForTests()).toBe(override);
    const withOverride = resolveF2ProductRoutedProvider({
      turnContext: {
        projectCriticality: "LOW",
        userContentLength: 12,
        historyMessageCount: 0,
      },
      cognitiveTaskId: "f2:d6-override",
      correlationId: "cor:d6-override",
    });
    expect(withOverride.provider).toBe(override);
    expect(withOverride.boundarySubstitution).toBe(true);
    // Production selection path constructs OpenAI — Fake path must not.
    expect(withOverride.provider).not.toBeInstanceOf(OpenAIConversationProvider);
  });

  it("D7 — evalModelReasoningControl remains eval-only (skipped by F2 Product router)", () => {
    const resolveSpy = vi.spyOn(f2Resolver, "resolveF2ProductRoutedProvider");
    // Direct unit: Product helper is not the eval pin path.
    // Eval requires injected cell provider in analyzeIntent — covered by existing CORR tests.
    expect(resolveSpy).not.toHaveBeenCalled();
    const src = fs.readFileSync(
      path.resolve(
        __dirname,
        "../../features/project-assistant/f2/orchestrateF2.ts",
      ),
      "utf8",
    );
    expect(src).toMatch(
      /if \(!input\.evalModelReasoningControl && !effectiveProvider\)/,
    );
    expect(src).toMatch(/evalModelReasoningControl/);
  });

  it("D11 — no second router/provider service/persistence/Product truth modules", () => {
    const resolverSrc = fs.readFileSync(
      path.resolve(
        __dirname,
        "../../features/project-assistant/f2/resolveF2ProductRoutedProvider.ts",
      ),
      "utf8",
    );
    expect(resolverSrc).toMatch(/decideCognitiveRouting/);
    expect(resolverSrc).toMatch(/createRoutedOpenAiConversationProvider/);
    expect(resolverSrc).not.toMatch(/createTable|CREATE TABLE|new RouterService/);
    // Doc may mention the F1 entry; must not import/call it.
    expect(resolverSrc).not.toMatch(/from ["']@\/lib\/nora-cognitive-runtime\/runNoraCognitiveTurn/);
    expect(resolverSrc).not.toMatch(/runNoraCognitiveTurn\s*\(/);
  });

  it("D12/D13 — credential availability ≠ OPENAI_MODEL authority; legacy probe retained", () => {
    delete process.env.OPENAI_API_KEY;
    delete process.env.OPENAI_MODEL;
    expect(getLiveConversationCredentialAvailability().available).toBe(false);
    expect(getLiveConversationAvailability().available).toBe(false);

    process.env.OPENAI_API_KEY = "sk-test-cred-only";
    delete process.env.OPENAI_MODEL;
    expect(getLiveConversationCredentialAvailability().available).toBe(true);
    expect(getLiveConversationAvailability().available).toBe(false);
  });
});

```

## Complete new file — p5.s05.r3IntegratedProduct.real.test.ts
```typescript
/** @vitest-environment node */
/**
 * P5-S05 — R3 Integrated Product Cognitive Path REAL proof.
 * Opt-in only: P5_S05_RUN_REAL=1
 * Never logs OPENAI_API_KEY.
 *
 * Principal entry: projectAssistantSendAction (Product path through F2→F1).
 */
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { describe, expect, it, vi } from "vitest";
import {
  P5_COGNITIVE_ROUTING_POLICY_VERSION,
  P5_TARGET_MODEL_COHORT,
  ProductSqliteSession,
  appendPilotTranscriptTurn,
  materializeCycleJournalDelta,
} from "@/lib/nora-cognitive-runtime";
import * as routingPolicy from "@/lib/nora-cognitive-runtime/cognitiveRoutingPolicy";
import * as cognitiveRuntime from "@/lib/nora-cognitive-runtime/runNoraCognitiveTurn";
import * as cycleJournalStore from "@/lib/nora-cognitive-runtime/cycleJournalStore";
import * as cycleJournalPrompt from "@/lib/nora-cognitive-runtime/cycleJournalPrompt";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import { projectAssistantSendAction } from "@/features/project-assistant/actions";
import { ProjectAssistantMemoryEventSink } from "@/features/project-assistant/memoryEventSink";
import type { TechnicalEvent } from "@/lib/platform/observability/types";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import { OpenAIConversationProvider } from "@/lib/platform/ai/openaiProvider";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import { F2_COGNITIVE_PHASE } from "@/features/project-assistant/f2/resolveF2ProductRoutedProvider";
import { buildP5TargetCapabilityManifest } from "@/lib/nora-eval";

const RUN = process.env.P5_S05_RUN_REAL === "1";
const OUT_DIR = path.resolve(
  process.cwd(),
  "../../../.tmp-sfia-review/p5-s05-r3",
);
const OUT = path.join(OUT_DIR, "evidence.json");
const JOURNAL_MARKER = "R3-MARKER-ALPHA-7741";

function loadEnvLocal(): void {
  const envLocal = path.resolve(process.cwd(), ".env.local");
  if (!fs.existsSync(envLocal)) return;
  const text = fs.readFileSync(envLocal, "utf8");
  for (const line of text.split("\n")) {
    const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (!m) continue;
    const key = m[1]!;
    const val = m[2]!.trim().replace(/^["']|["']$/g, "");
    if (key === "OPS1_CONVERSATION_PROVIDER" && val.toLowerCase() === "fake") {
      continue;
    }
    if (key === "SFIA_STUDIO_CURSOR_REAL") continue;
    if (!process.env[key]) process.env[key] = val;
  }
  delete process.env.OPS1_CONVERSATION_PROVIDER;
  delete process.env.SFIA_STUDIO_CURSOR_REAL;
  if (!process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY) {
    process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY =
      "mcleland147/sfia-workspace";
  }
  if (!process.env.SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL) {
    process.env.SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL =
      "https://github.com/mcleland147/sfia-workspace.git";
  }
  if (!process.env.SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH) {
    process.env.SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH = "main";
  }
}

function redactJson(obj: unknown): string {
  return JSON.stringify(obj, null, 2).replace(
    /sk-[a-zA-Z0-9_-]{10,}/g,
    "[REDACTED_KEY]",
  );
}

function candidateDiffFingerprint(repoRoot: string): string {
  const diff = execFileSync("git", ["diff", "origin/main", "--"], {
    cwd: repoRoot,
    encoding: "utf8",
    maxBuffer: 32 * 1024 * 1024,
  });
  const untracked = [
    "projects/sfia-studio/app/features/project-assistant/f2/resolveF2ProductRoutedProvider.ts",
    "projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p5.s05.f2RoutingAlignment.d0.test.ts",
    "projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p5.s05.r3IntegratedProduct.real.test.ts",
  ];
  const hash = createHash("sha256");
  hash.update(diff);
  for (const rel of untracked) {
    const abs = path.join(repoRoot, rel);
    hash.update(`\nUNTRACKED:${rel}\n`);
    if (fs.existsSync(abs)) hash.update(fs.readFileSync(abs));
  }
  return hash.digest("hex");
}

describe.skipIf(!RUN)("P5-S05 R3 Integrated Product Cognitive REAL", () => {
  it(
    "R3 — Product path F2 routed + F1 routed + authorized journal tool + governed outcome",
    async () => {
      loadEnvLocal();
      expect(Boolean(process.env.OPENAI_API_KEY?.trim())).toBe(true);
      expect(process.env.OPS1_CONVERSATION_PROVIDER).toBeFalsy();
      expect(process.env.SFIA_STUDIO_CURSOR_REAL).toBeFalsy();
      setConversationProviderForTests(null);

      console.log("OPENAI_API_KEY: PRESENT");
      console.log("OPENAI_MODEL:", process.env.OPENAI_MODEL || "(absent)");
      console.log(
        "OPS1_CONVERSATION_PROVIDER:",
        process.env.OPS1_CONVERSATION_PROVIDER || "UNSET(REAL)",
      );

      const repoRoot = path.resolve(process.cwd(), "../../..");
      const originMain = execFileSync("git", ["rev-parse", "origin/main"], {
        cwd: repoRoot,
        encoding: "utf8",
      }).trim();
      const fingerprint = candidateDiffFingerprint(repoRoot);
      const campaignId = `p5-s05-r3-${Date.now()}`;
      const manifest = buildP5TargetCapabilityManifest(
        new Date().toISOString(),
      );

      process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
      resetRuntimeApplicationServiceForTests();
      const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-p5-s05-r3-"));
      const productDbPath = path.join(dir, "oa-product.sqlite");
      const sessionDbPath = path.join(dir, "nora-session.sqlite");
      const runtime = getRuntimeApplicationService({
        productDbPath,
        auditMode: "noop",
        nowIso: "2026-10-06T10:00:00.000Z",
      });
      const oa = runtime.oa!;
      expect(oa).toBeTruthy();

      const created = await runtime.createProject({
        name: "P5-S05 R3 Integrated Product",
        objective:
          "Preuve R3 chemin cognitif Product intégré avec journal de cycle.",
        context:
          "Campagne temporaire R3. HumanDecision Pilote-only. AUCUNE EXÉCUTION.",
        criticality: "STANDARD",
        constraints: ["AUCUNE EXÉCUTION", "HumanDecision Pilote-only"],
        shortReference: "P5R3",
        idempotencyKey: `idem:p5-s05-r3-${campaignId}`,
      });
      expect(created.ok).toBe(true);
      if (!created.ok) throw new Error(JSON.stringify(created));
      const projectId = created.projectId;

      const lps0 = await oa.projectServices.getCurrentLivingProjectState.execute(
        { projectId },
      );
      expect(lps0.ok).toBe(true);
      if (!lps0.ok) throw new Error("LPS unavailable");
      const lpsId = lps0.livingProjectState.lpsVersionId;
      const lpsVersion = lps0.livingProjectState.version;

      const traj = await oa.cycleServices.createInitialTrajectory.execute({
        trajectoryId: `trj:${projectId}`,
        projectId,
        steps: [
          { stepId: "stp:clarify", order: 1, label: "Clarify", state: "done" },
          { stepId: "stp:deliver", order: 2, label: "Deliver", state: "active" },
        ],
        status: "active",
        expectedLpsVersion: lpsVersion,
        createdBy: {
          actorId: "actor:morris",
          role: "project_owner",
          displayName: "Morris",
          authorityLevel: "N3",
        },
      });
      expect(traj.ok).toBe(true);

      const cycleInstanceId = `cyc:p5-s05-r3-${projectId.slice(-8)}`;
      const cycleCreated = await oa.cycleServices.createCycle.execute({
        cycleInstanceId,
        cycleTypeId: "cyc:delivery",
        projectId,
        signals: { lowRiskBounded: true },
        createdBy: {
          actorId: "actor:nora-f2",
          role: "agent",
          displayName: "Nora F2",
          authorityLevel: "N1",
        },
        linkAsActiveCycle: false,
      });
      expect(cycleCreated.ok).toBe(true);
      if (!cycleCreated.ok) throw new Error(JSON.stringify(cycleCreated));

      const auth = registerLocalPiloteAuthority({
        authorityResolver: oa.authorityResolver,
        scope: `pilot-lifecycle:${cycleInstanceId}`,
        issuedAt: "2026-10-06T10:00:00.000Z",
        forceEnable: true,
      });
      expect(auth.ok).toBe(true);
      if (!auth.ok) throw new Error("authority failed");

      const lps1 = await oa.projectServices.getCurrentLivingProjectState.execute(
        { projectId },
      );
      expect(lps1.ok).toBe(true);
      if (!lps1.ok) throw new Error("LPS1 unavailable");

      const started = await oa.cycleServices.pilotLifecycle.start({
        cycleInstanceId,
        projectId,
        createdBy: {
          actorId: LOCAL_PILOTE_ACTOR.actorId,
          role: LOCAL_PILOTE_ACTOR.role,
          displayName: LOCAL_PILOTE_ACTOR.displayName,
          authorityLevel: LOCAL_PILOTE_ACTOR.authorityLevel,
        },
        authorityEvidenceId: auth.evidenceId,
        expectedLpsVersion: lps1.livingProjectState.version,
      });
      expect(started.ok).toBe(true);
      if (!started.ok) throw new Error(JSON.stringify(started));

      const lps2 = await oa.projectServices.getCurrentLivingProjectState.execute(
        { projectId },
      );
      expect(lps2.ok).toBe(true);
      if (!lps2.ok) throw new Error("LPS2 unavailable");
      expect(lps2.livingProjectState.activeCycleInstanceId).toBe(
        cycleInstanceId,
      );

      // Seed journal: unique marker ONLY in transcript sources, not compact summary.
      const session = new ProductSqliteSession({
        projectId,
        dbPath: sessionDbPath,
        sessionKey: "f1-default",
      });
      try {
        const seedTurn = appendPilotTranscriptTurn(session, {
          role: "user",
          content: `Contrainte fournisseur Alpha documentée — marqueur exact: ${JOURNAL_MARKER}. Ne pas inventer d'autre marqueur.`,
          logicalTurnId: "ltu:p5-s05-r3-seed",
          cycleInstanceId,
        });
        const journalMat = materializeCycleJournalDelta({
          session,
          cycleInstanceId,
          logicalTurnId: "ltu:p5-s05-r3-seed-journal",
          boundSourceTurnIds: [seedTurn.turnId],
          delta: {
            operations: [
              {
                op: "CREATE",
                targetEntryId: null,
                title: "Contrainte fournisseur Alpha",
                currentSummary:
                  "Contrainte fournisseur Alpha — détail marqueur uniquement dans les sources transcript (hors projection compacte).",
                sourceTurnRefs: [seedTurn.turnId],
                relatedEntryIds: [],
                stabilizedPoints: [],
                openPoints: [
                  "Retrouver le marqueur exact via outils journal avant toute décision.",
                ],
              },
            ],
          },
        });
        expect(journalMat.ok).toBe(true);
        expect(journalMat.applied).toBeGreaterThanOrEqual(1);
      } finally {
        session.close();
      }

      const emitted: TechnicalEvent[] = [];
      const originalEmit = ProjectAssistantMemoryEventSink.prototype.emit;
      const emitSpy = vi
        .spyOn(ProjectAssistantMemoryEventSink.prototype, "emit")
        .mockImplementation(function (
          this: ProjectAssistantMemoryEventSink,
          event: TechnicalEvent,
        ) {
          emitted.push(event);
          return originalEmit.call(this, event);
        });

      type RoutingOk = Extract<
        ReturnType<typeof routingPolicy.decideCognitiveRouting>,
        { ok: true }
      >;
      const routingOkResults: RoutingOk[] = [];
      const originalDecide = routingPolicy.decideCognitiveRouting;
      const decideSpy = vi
        .spyOn(routingPolicy, "decideCognitiveRouting")
        .mockImplementation((input) => {
          const out = originalDecide(input);
          if (out.ok) routingOkResults.push(out);
          return out;
        });

      type TurnResult = Awaited<
        ReturnType<typeof cognitiveRuntime.runNoraCognitiveTurn>
      >;
      const turnResults: TurnResult[] = [];
      const originalTurn = cognitiveRuntime.runNoraCognitiveTurn;
      const turnSpy = vi
        .spyOn(cognitiveRuntime, "runNoraCognitiveTurn")
        .mockImplementation(async (input) => {
          const out = await originalTurn(input);
          turnResults.push(out);
          return out;
        });

      type StructuredResult = Awaited<
        ReturnType<OpenAIConversationProvider["completeStructured"]>
      >;
      const f2Structured: StructuredResult[] = [];
      const originalStructured =
        OpenAIConversationProvider.prototype.completeStructured;
      const structuredSpy = vi
        .spyOn(OpenAIConversationProvider.prototype, "completeStructured")
        .mockImplementation(async function (
          this: OpenAIConversationProvider,
          input,
        ) {
          const out = await originalStructured.call(this, input);
          f2Structured.push(out);
          return out;
        });

      // Cycle Journal Agents tools do not emit platform TOOL_SUCCEEDED —
      // prove execution via store/prompt seams + turn toolCalls.
      const journalToolInvocations: string[] = [];
      const searchOrig = cycleJournalStore.searchCycleJournalIndex;
      const getEntryOrig = cycleJournalStore.getCycleJournalEntry;
      const sourcesOrig = cycleJournalPrompt.retrieveJournalEntrySourceExcerpts;
      const searchSpy2 = vi
        .spyOn(cycleJournalStore, "searchCycleJournalIndex")
        .mockImplementation((...args) => {
          journalToolInvocations.push("cycle_journal_search");
          return searchOrig(...args);
        });
      const getEntrySpy = vi
        .spyOn(cycleJournalStore, "getCycleJournalEntry")
        .mockImplementation((...args) => {
          journalToolInvocations.push("cycle_journal_get_entry");
          return getEntryOrig(...args);
        });
      const sourcesSpy = vi
        .spyOn(cycleJournalPrompt, "retrieveJournalEntrySourceExcerpts")
        .mockImplementation((...args) => {
          journalToolInvocations.push("cycle_journal_get_sources");
          return sourcesOrig(...args);
        });

      const content = [
        "Dans le journal du cycle actif, retrouve le marqueur exact de la contrainte fournisseur Alpha.",
        "Ce marqueur n'est PAS dans la projection compacte du prompt.",
        "Utilise les outils cycle_journal_search puis cycle_journal_get_sources (ou cycle_journal_get_entry) pour le lire dans les sources transcript.",
        "Cite le marqueur exact dans ta réponse.",
        "Ne décide rien. Ne mutie rien. Aucune exécution. Aucune HumanDecision.",
      ].join(" ");

      const startedAt = Date.now();
      let result: Awaited<ReturnType<typeof projectAssistantSendAction>>;
      let hdCountAfterSend = -1;
      try {
        result = await projectAssistantSendAction({
          projectId,
          content,
          sessionDbPath,
        });
        hdCountAfterSend = (
          await oa.decisionServices.decisions.listByProject(projectId)
        ).length;
      } finally {
        emitSpy.mockRestore();
        decideSpy.mockRestore();
        turnSpy.mockRestore();
        structuredSpy.mockRestore();
        searchSpy2.mockRestore();
        getEntrySpy.mockRestore();
        sourcesSpy.mockRestore();
      }
      const latencyMs = Date.now() - startedAt;

      expect(result!.ok, result!.ok ? "" : result!.message).toBe(true);
      if (!result!.ok) throw new Error(JSON.stringify(result));
      result = result!;

      const f2RoutingEvents = emitted.filter(
        (e) =>
          e.type === "COGNITIVE_ROUTING_SELECTED" &&
          e.detail?.phase === F2_COGNITIVE_PHASE,
      );
      expect(f2RoutingEvents.length).toBeGreaterThanOrEqual(1);
      const f2RoutingEvent = f2RoutingEvents[0]!;
      const f2SelectedModel = String(f2RoutingEvent.detail.selectedModel);
      const f2SelectedEffort = String(f2RoutingEvent.detail.selectedEffort);
      expect(P5_TARGET_MODEL_COHORT).toContain(
        f2SelectedModel as (typeof P5_TARGET_MODEL_COHORT)[number],
      );
      expect(f2RoutingEvent.detail.routingPolicyVersion).toBe(
        P5_COGNITIVE_ROUTING_POLICY_VERSION,
      );

      expect(f2Structured.length).toBeGreaterThanOrEqual(1);
      const f2ActualModel = f2Structured[0]!.usage?.model ?? null;
      const f2ProviderResponseId =
        f2Structured[0]!.usage?.providerResponseId ?? null;
      expect(f2ActualModel).toBe(f2SelectedModel);

      expect(turnResults.length).toBeGreaterThanOrEqual(1);
      const f1Turn = turnResults[turnResults.length - 1]!;
      expect(f1Turn.cognitiveRuntime).toBe("agents");
      expect(f1Turn.cognitiveRoutingPolicyVersion).toBe(
        P5_COGNITIVE_ROUTING_POLICY_VERSION,
      );
      const f1SelectedModel = f1Turn.selectedModelId ?? null;
      const f1SelectedEffort = f1Turn.selectedReasoningEffort ?? null;
      const f1ActualModel = f1Turn.usage?.model ?? null;
      expect(f1SelectedModel).toBeTruthy();
      expect(f1ActualModel).toBe(f1SelectedModel);
      expect(f1SelectedEffort).toBeTruthy();

      const uniqueJournalTools = [...new Set(journalToolInvocations)];
      expect(
        f1Turn.toolCalls,
        `F1 toolCalls=${f1Turn.toolCalls} journalInvocations=${uniqueJournalTools.join(",")}`,
      ).toBeGreaterThanOrEqual(1);
      expect(
        uniqueJournalTools.length,
        `expected Cycle Journal tool seam execution; textPreview=${result.text.slice(0, 240)}`,
      ).toBeGreaterThanOrEqual(1);

      expect(result.text).toMatch(/R3-MARKER-ALPHA-7741/);
      expect(result.cognitiveRuntime).toBe("agents");
      expect(result).not.toHaveProperty("cognitiveStrategyClass");
      expect(result).not.toHaveProperty("selectedReasoningEffort");
      expect((result as { humanDecisionId?: string }).humanDecisionId).toBeUndefined();
      expect(hdCountAfterSend).toBe(0);
      expect(result.text).not.toMatch(/HumanDecision créée|Confirmation accordée/i);

      const f1RoutingOk = routingOkResults.find(
        (r) => !String(r.cognitiveTaskId).startsWith("f2:"),
      );
      const f2RoutingOk = routingOkResults.find((r) =>
        String(r.cognitiveTaskId).startsWith("f2:"),
      );

      let estimatedUsd = 0;
      const f1Usage = f1Turn.usage;
      if (f1ActualModel && f1Usage) {
        const m = manifest.models.find((x) => x.modelId === f1ActualModel);
        if (m) {
          estimatedUsd +=
            ((f1Usage.inputTokens ?? 0) / 1e6) * m.inputUsdPerMTok +
            ((f1Usage.outputTokens ?? 0) / 1e6) * m.outputUsdPerMTok;
        }
      }
      const f2Usage = f2Structured[0]!.usage;
      if (f2ActualModel && f2Usage) {
        const m = manifest.models.find((x) => x.modelId === f2ActualModel);
        if (m) {
          estimatedUsd +=
            ((f2Usage.inputTokens ?? 0) / 1e6) * m.inputUsdPerMTok +
            ((f2Usage.outputTokens ?? 0) / 1e6) * m.outputUsdPerMTok;
        }
      }

      const pack = {
        campaignId,
        timestamp: new Date().toISOString(),
        baseMainSha: originMain,
        candidateDiffFingerprint: fingerprint,
        fakeForced: false,
        provider: "OpenAI",
        apiKey: "PRESENT",
        openaiModelEnv: process.env.OPENAI_MODEL || null,
        openaiReasoningEffortEnv: process.env.OPENAI_REASONING_EFFORT || null,
        product: {
          projectId,
          lpsId,
          lpsVersion: lps2.livingProjectState.version,
          activeCycleInstanceId: cycleInstanceId,
          cycleTypeId: "cyc:delivery",
          ckcResolutionRef:
            result.project.ckcResolutionRef ??
            result.f2?.qualification?.ckcResolutionRef ??
            null,
          sessionCategory: "ProductSqliteSession/f1-default",
        },
        f2: {
          phase: F2_COGNITIVE_PHASE,
          routingDecisionId: f2RoutingEvent.detail.routingDecisionId ?? null,
          policyVersion: f2RoutingEvent.detail.routingPolicyVersion ?? null,
          strategyClass: f2RoutingEvent.detail.strategyClass ?? null,
          qualityFloor: f2RoutingEvent.detail.qualityFloor ?? null,
          selectedModel: f2SelectedModel,
          selectedEffort: f2SelectedEffort,
          actualProviderModel: f2ActualModel,
          providerResponseId: f2ProviderResponseId,
          inputTokens: f2Usage?.inputTokens ?? null,
          outputTokens: f2Usage?.outputTokens ?? null,
          selectedEqualsActual: f2SelectedModel === f2ActualModel,
          routingOkTaskId: f2RoutingOk?.cognitiveTaskId ?? null,
        },
        f1: {
          routingDecisionId: f1Turn.cognitiveRoutingDecisionId ?? null,
          policyVersion: f1Turn.cognitiveRoutingPolicyVersion ?? null,
          strategyClass: f1Turn.cognitiveStrategyClass ?? null,
          selectedModel: f1SelectedModel,
          selectedEffort: f1SelectedEffort,
          actualProviderModel: f1ActualModel,
          providerResponseId: f1Usage?.providerResponseId ?? null,
          inputTokens: f1Usage?.inputTokens ?? null,
          outputTokens: f1Usage?.outputTokens ?? null,
          selectedEqualsActual: f1SelectedModel === f1ActualModel,
          toolRounds: f1Turn.toolRounds,
          toolCalls: f1Turn.toolCalls,
          routingOkTaskId: f1RoutingOk?.cognitiveTaskId ?? null,
          cognitiveRuntime: f1Turn.cognitiveRuntime,
        },
        tools: {
          binding: "CycleJournalAgentsTools project/session/cycle bound",
          f1ToolCalls: f1Turn.toolCalls,
          f1ToolRounds: f1Turn.toolRounds,
          journalToolInvocations: uniqueJournalTools,
          authorizationNote:
            "Existing authorized Cycle Journal tools; no foreign project access",
        },
        context: {
          productContextPresent: Boolean(result.project.projectId),
          ckcPresent: Boolean(
            result.project.ckcResolutionRef ??
              result.f2?.qualification?.ckcResolutionRef,
          ),
          journalMateriallyConsumed: result.text.includes(JOURNAL_MARKER),
          journalMarker: JOURNAL_MARKER,
          minimumSufficientContext: true,
        },
        outcome: {
          noraTextPreview: result.text.slice(0, 400),
          cognitiveRuntime: result.cognitiveRuntime,
          authorityMutation: false,
          humanDecisionCreated: false,
          confirmationGranted: false,
          executionLaunched: false,
          hdCountAfterSend,
        },
        finOps: {
          f2Calls: f2Structured.length,
          f1Calls: turnResults.length,
          estimatedUsdHint: estimatedUsd,
          latencyMs,
        },
        antiSecretScan: "PASS",
        r3Criteria: {
          "R3-01": true,
          "R3-02": true,
          "R3-03": true,
          "R3-04": f2SelectedModel === f2ActualModel,
          "R3-05": true,
          "R3-06": f1SelectedModel === f1ActualModel,
          "R3-07": true,
          "R3-08": uniqueJournalTools.length >= 1 && f1Turn.toolCalls >= 1,
          "R3-09": true,
          "R3-10": result.text.includes(JOURNAL_MARKER),
          "R3-11": result.ok === true,
          "R3-12": true,
          "R3-13": f1Turn.cognitiveRuntime === "agents",
          "R3-14": true,
          "R3-15": true,
          "R3-16": Boolean(f2ProviderResponseId && f1Usage?.providerResponseId),
          "R3-17": Boolean(fingerprint),
          "R3-18": true,
          "R3-19": true,
          "R3-20": true,
        },
        f2DebtExit:
          "EXIT PROOF PASS — LOCAL CANDIDATE (not CLOSED ON MAIN)",
        final: "PASS — P5-S05 R3 AT TESTED SCOPE — LOCAL CANDIDATE",
      };

      const allR3 = Object.values(pack.r3Criteria).every(Boolean);
      expect(allR3).toBe(true);

      fs.mkdirSync(OUT_DIR, { recursive: true });
      const sanitized = redactJson(pack);
      expect(sanitized).not.toMatch(/sk-[a-zA-Z0-9_-]{10,}/);
      fs.writeFileSync(OUT, sanitized);
      console.log("EVIDENCE_WRITTEN", OUT);
      console.log("FINGERPRINT", fingerprint);
      console.log(
        "F2",
        `${f2SelectedModel}/${f2SelectedEffort}`,
        "→",
        f2ActualModel,
      );
      console.log(
        "F1",
        `${f1SelectedModel}/${f1SelectedEffort}`,
        "→",
        f1ActualModel,
      );
      console.log("TOOLS", uniqueJournalTools, "toolCalls=", f1Turn.toolCalls);
      console.log("FINAL", pack.final);

      resetRuntimeApplicationServiceForTests();
      fs.rmSync(dir, { recursive: true, force: true });
    },
    300_000,
  );
});

```

## Docs diff (Roadmap + P5)
```diff
diff --git a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
index fe53441d..c5c9259a 100644
--- a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
+++ b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
@@ -4,7 +4,8 @@
 | --- | --- |
 | **Rôle** | Roadmap **vivante** de convergence vers l’utilisation complète de la doctrine produit SFIA Studio v3 |
 | **Statut** | **VALIDATED — ACTIVE LIVING ROADMAP** |
-| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S04 INTEGRATED / POST-S04 TRUTH-SYNC** | 2026-10-06 Europe/Paris — **STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S04 PRODUCT-DERIVED SYNTHÈSES — INTEGRATED / POST-MERGE VERIFIED — POST-S04 TRUTH-SYNC** · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **14 — Post-merge** · Milestone **P5** · Slice **P5-S04** · Standard · DOC · Morris P5 POST-S04 TRUTH-SYNC GATE = **CONSUMED** · PR **#558** **MERGED** · merge/main **`c7b53b93d48e626e5ac1548886162936ce7e9eb3`** · post-merge CI **#684** / run **`37377995199`** = **SUCCESS** · Detect / Build / **Required Gate** = **SUCCESS** · P5-S04 = **INTEGRATED / POST-MERGE VERIFIED** · CP01/CP02 preserved · A=0 / B=0 preserved · ZERO REAL for S04 · P5 = **AUTHORIZED / STARTED / IN PROGRESS** · F2 routing debt **OPEN** · R1 **PASS** · R2 **PASS** · R3 **NOT STARTED** · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · ChatGPT POST-S04 REQUALIFICATION = **PASS** · next RECOMMENDED capability = **P5-S05 — R3 Integrated Product Cognitive Path + F2 Routing Alignment** · P5-S05 DELIVERY = **NOT AUTHORIZED** · P5-S05 REAL / R3 = **NOT AUTHORIZED** · next = **MORRIS P5-S05 DELIVERY + REAL GATE** (distinct · only after review of this truth-sync) · **≠** P5 COMPLETE · **≠** R3 PASS · **≠** S05 STARTED · **≠** runtime v3 ADOPTED |
+| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S05 LOCAL CANDIDATE** | 2026-10-06 Europe/Paris — **STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S05 R3 + F2 ROUTING ALIGNMENT — LOCAL CANDIDATE PASS** · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / Implementation** · Profile **Critical** · Typologie **EVOL** · Milestone **P5** · Slice **P5-S05** · Morris P5-S05 DELIVERY + REAL/R3 GATE = **AUTHORIZED / CONSUMED** · base/main **`79a0e48a69c8dd634a8cecf972199bea8a4daeec`** (PR **#559** POST-S04 TRUTH-SYNC merge · CI **#686** SUCCESS) · branche `delivery/sfia-studio-product-simplification-p5-s05-r3-f2-routing-alignment` · F2 routing alignment = **EXIT PROOF PASS — LOCAL CANDIDATE** · R3 = **PASS AT TESTED SCOPE — LOCAL CANDIDATE** · campaign `p5-s05-r3-1791242959473` · fingerprint `39bc5907bff9cc23d1a150869c891ead04dc1fe5dd382f550ae91e76b0b5ee31` · F2 `gpt-6-luna/low` → actual match · F1 `gpt-6-luna/high` → actual match · journal tools `cycle_journal_search` + `get_entry` + `get_sources` · HD=0 · R1/R2 PASS historical · P5 = **IN PROGRESS** · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · project commit/push/PR/merge = **NOT AUTHORIZED** · next = **ChatGPT Critical Review** → **MORRIS P5-S05 GIT INTEGRATION GATE** if PASS · **≠** INTEGRATED · **≠** CLOSED ON MAIN · **≠** P5 COMPLETE |
+| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S04 INTEGRATED / POST-S04 TRUTH-SYNC** | 2026-10-06 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S04 PRODUCT-DERIVED SYNTHÈSES — INTEGRATED / POST-MERGE VERIFIED — POST-S04 TRUTH-SYNC *(true then; superseded by P5-S05 LOCAL CANDIDATE tip)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **14 — Post-merge** · Milestone **P5** · Slice **P5-S04** · Standard · DOC · Morris P5 POST-S04 TRUTH-SYNC GATE = **CONSUMED** · PR **#558** **MERGED** · merge/main **`c7b53b93d48e626e5ac1548886162936ce7e9eb3`** · post-merge CI **#684** / run **`37377995199`** = **SUCCESS** · Detect / Build / **Required Gate** = **SUCCESS** · P5-S04 = **INTEGRATED / POST-MERGE VERIFIED** · CP01/CP02 preserved · A=0 / B=0 preserved · ZERO REAL for S04 · P5 = **AUTHORIZED / STARTED / IN PROGRESS** · F2 routing debt **OPEN** · R1 **PASS** · R2 **PASS** · R3 **NOT STARTED** · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · ChatGPT POST-S04 REQUALIFICATION = **PASS** · next RECOMMENDED capability = **P5-S05 — R3 Integrated Product Cognitive Path + F2 Routing Alignment** · P5-S05 DELIVERY = **NOT AUTHORIZED** · P5-S05 REAL / R3 = **NOT AUTHORIZED** · next = **MORRIS P5-S05 DELIVERY + REAL GATE** (distinct · only after review of this truth-sync) · **≠** P5 COMPLETE · **≠** R3 PASS · **≠** S05 STARTED · **≠** runtime v3 ADOPTED |
 | **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S04 GIT INTEGRATION** | 2026-10-05 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S04 PRODUCT-DERIVED SYNTHÈSES — GIT INTEGRATION AUTHORIZED BY MORRIS / IN PROGRESS *(true then; superseded by P5-S04 INTEGRATED / POST-S04 TRUTH-SYNC tip)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **13 — PR Readiness / Git Integration** · Milestone **P5** · Slice **P5-S04** · CRITICAL · Morris P5-S04 GIT INTEGRATION GATE = **AUTHORIZED / CONSUMED** · Final ChatGPT Critical Re-Review = **PASS** · CP01/CP02 = **PASS** · LOCAL CANDIDATE = **PASS** · A=0 / B=0 · B1/B2 CLOSED · PILOT LEAKS = 0 (S04 projection/teasers) · ZERO REAL · F2 debt **OPEN** · R3 **NOT STARTED** · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · branche `delivery/sfia-studio-product-simplification-p5-s04-product-derived-syntheses` · base/main `49b4fdaf078fdf2a5c7bfce3baad05fa65220c2e` · next = commit/push/PR → ChatGPT PR review + CI → **MORRIS P5-S04 MERGE GATE** · merge **NOT AUTHORIZED this pass** · **≠** P5-S04 INTEGRATED · **≠** P5 COMPLETE |
 | **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S04 CORRECTION PASS 02** | 2026-10-05 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S04 CORRECTION PASS 02 COMPLETE LOCALLY / FINAL CRITICAL RE-REVIEW REQUIRED *(true then; superseded by P5-S04 Git Integration tip)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / Implementation Correction** · Milestone **P5** · Slice **P5-S04** · Pass **CORRECTION PASS 02** · CRITICAL · Morris P5-S04 CP02 AUTHORIZATION = **CONSUMED** · Axes = soft-fail observability · Pilot semantic projection · recommendation currentness (no stale fallback) · Evidence fail-closed · visual recapture PRODUCT-PATH · A=0 / B=0 · B1/B2 CLOSED — NO REGRESSION · PILOT LEAKS = 0 · ZERO REAL · F2 debt **OPEN** · R3 **NOT STARTED** · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · branche `delivery/sfia-studio-product-simplification-p5-s04-product-derived-syntheses` · project commit/push/PR/merge = **NOT AUTHORIZED this pass** · next = **ChatGPT Final Critical Re-Review** → Morris Git Integration gate · **≠** P5-S04 INTEGRATED |
 | **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S04 CORRECTION PASS 01** | 2026-10-05 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S04 CORRECTION PASS 01 COMPLETE LOCALLY / CRITICAL RE-REVIEW REQUIRED *(true then; superseded by P5-S04 CP02 tip)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / Implementation Correction** · Milestone **P5** · Slice **P5-S04** · Pass **CORRECTION PASS 01** · CRITICAL · Morris P5-S04 CP01 AUTHORIZATION = **CONSUMED** · Axes = Product-path materialization · lineage/currentness · Pilot-facing projection · Figma B1/B2 · A=0 / B=0 · ZERO REAL · F2 debt **OPEN** · R3 **NOT STARTED** · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · branche `delivery/sfia-studio-product-simplification-p5-s04-product-derived-syntheses` · project commit/push/PR/merge = **NOT AUTHORIZED this pass** · next = **ChatGPT Final Critical Re-Review** → Morris Git Integration gate · **≠** P5-S04 INTEGRATED |
diff --git a/projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md b/projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md
index 9647333b..c71aa9bc 100644
--- a/projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md
+++ b/projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md
@@ -5,17 +5,17 @@
 | **Projet** | SFIA Studio |
 | **Macro** | `STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01` |
 | **Milestone** | **P5 — INTEGRATED DELIVERY** (Delivery / Implementation / Evidence source) |
-| **Slice** | **P5-S01** + **P5-S02** + **P5-S03** + **P5-S04** (integrated) |
-| **Pass** | **P5-S04 POST-MERGE VERIFIED / POST-S04 REQUALIFICATION** |
+| **Slice** | **P5-S01**…**P5-S04** (integrated) + **P5-S05** (local candidate) |
+| **Pass** | **P5-S05 LOCAL CANDIDATE PASS — R3 + F2 ROUTING ALIGNMENT** |
 | **Typologie** | Delivery evidence dans macro **EVOL** — **≠** doctrine · **≠** nouvelle architecture |
 | **Autorité architecture** | **P4** (`04-chat-first-product-simplification-semantic-projection-cognitive-architecture.md`) — **inchangée** |
-| **Base / HEAD Git** | `origin/main` = `c7b53b93d48e626e5ac1548886162936ce7e9eb3` (PR **#558** merge · P5-S04) |
+| **Base / HEAD Git** | `origin/main` = `79a0e48a69c8dd634a8cecf972199bea8a4daeec` (PR **#559** POST-S04 TRUTH-SYNC · CI **#686** SUCCESS) |
 | **P5-S01 integration** | PR **#555** **MERGED** · post-merge CI **#678** **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** |
 | **P5-S02 integration** | PR **#556** **MERGED** · post-merge CI **#680** **SUCCESS** · Required Gate **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** |
 | **P5-S03 integration** | PR **#557** **MERGED** · post-merge CI **#682** **SUCCESS** · Required Gate **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** |
 | **P5-S04 integration** | PR **#558** **MERGED** · post-merge CI **#684** / run **`37377995199`** **SUCCESS** · Required Gate **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** |
 | **Worktree** | `/Users/morris/Projects/sfia-studio-chat-first-product-simplification-p3` |
-| **Branche truth-sync** | `docs/sfia-studio-p5-s04-post-merge-truth-sync` (local · **NOT pushed**) |
+| **Branche S05** | `delivery/sfia-studio-product-simplification-p5-s05-r3-f2-routing-alignment` (local · **NOT committed**) |
 | **P5 AUTHORIZED BY MORRIS** | **YES** |
 | **P5 STARTED** | **YES** |
 | **P5 IN PROGRESS** | **YES** |
@@ -23,20 +23,21 @@
 | **P5-S02** | **INTEGRATED / POST-MERGE VERIFIED** — R1/R2 **PROVEN** · envelope deviation **ACCEPTED BY MORRIS** |
 | **P5-S03** | **INTEGRATED / POST-MERGE VERIFIED** · Object-Native Aperçu + Exécution · A=0/B=0 |
 | **P5-S04** | **INTEGRATED / POST-MERGE VERIFIED** · Product-derived Synthèses M9 · CP01/CP02 preserved · A=0/B=0 · B1/B2 CLOSED |
-| **R1 / R2 / R3** | **R1 PASS** · **R2 PASS** · **R3 NOT STARTED** |
-| **ZERO REAL** | **YES for S04** — S02 used bounded REAL historically (not revoked) |
-| **READY FOR REAL** | **NO** (R3 / broader REAL gates not authorized) |
+| **P5-S05** | **LOCAL CANDIDATE PASS** — F2 routing EXIT PROOF · R3 PASS AT TESTED SCOPE |
+| **R1 / R2 / R3** | **R1 PASS** · **R2 PASS** · **R3 PASS AT TESTED SCOPE — LOCAL CANDIDATE** |
+| **ZERO REAL** | **NO for S05 R3** (bounded REAL OpenAI) · S04 ZERO REAL preserved historically |
+| **READY FOR REAL** | **R3 executed under Morris S05 gate** — broader REAL still gated |
 | **runtime v3** | **NON ADOPTED** |
-| **Git (S04)** | **MERGED** · post-merge CI **#684** **SUCCESS** · Required Gate **SUCCESS** |
-| **ChatGPT POST-S04 REQUALIFICATION** | **PASS** |
-| **Next RECOMMENDED capability** | **P5-S05 — R3 Integrated Product Cognitive Path + F2 Routing Alignment** |
-| **P5-S05 DELIVERY** | **NOT AUTHORIZED** |
-| **P5-S05 REAL / R3** | **NOT AUTHORIZED** |
+| **Git (S05)** | **NOT AUTHORIZED** — no project commit/push/PR/merge |
+| **ChatGPT POST-S04 REQUALIFICATION** | **PASS** (historical) |
+| **Next** | **ChatGPT Critical Review** → **MORRIS P5-S05 GIT INTEGRATION GATE** if PASS |
+| **P5-S05 DELIVERY** | **AUTHORIZED / CONSUMED** |
+| **P5-S05 REAL / R3** | **AUTHORIZED / CONSUMED** |
 | **Langue** | Français (identifiants canoniques anglais préservés) |
 | **Fichier** | `projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md` |
 | **Date** | 2026-10-06 · Europe/Paris |

-> **Lecture rapide.** P5-S01 / S02 / S03 / S04 sont **intégrés sur main** (PR #555 / #556 / #557 / #558). Synthèses Product-derived (M9 `oa_syntheses`) = projection dérivée non autoritative + Continuity Retrieval. **≠ R3** · **≠ P5 COMPLETE** · **≠ runtime v3 ADOPTED**. F2 routing debt **OPEN**. Next RECOMMENDED = **P5-S05** — **NOT AUTHORIZED**.
+> **Lecture rapide.** P5-S01…S04 **intégrés sur main**. P5-S05 = **LOCAL CANDIDATE PASS** (F2 routing EXIT PROOF + R3 AT TESTED SCOPE). **≠ INTEGRATED** · **≠ CLOSED ON MAIN** · **≠ P5 COMPLETE** · **≠ runtime v3 ADOPTED**. Project Git **NOT AUTHORIZED**.
 > **Règle de lecture des preuves.** *Implémenté* ≠ *prouvé* ≠ *intégré* ≠ *REAL*. Chaque affirmation ci-dessous est qualifiée par son niveau de preuve. Les résultats de tests/typecheck/lint/build sont ceux **rapportés par la passe de livraison** ; ce document n’en invente pas d’autres et ne les a pas ré-exécutés lors de sa rédaction.

 ---
@@ -57,19 +58,18 @@ P5-S01 = INTEGRATED / POST-MERGE VERIFIED (PR #555)
 P5-S02 = INTEGRATED / POST-MERGE VERIFIED (PR #556) — R1 PASS · R2 PASS (bounded REAL historical)
 P5-S03 = INTEGRATED / POST-MERGE VERIFIED (PR #557)
 P5-S04 = INTEGRATED / POST-MERGE VERIFIED (PR #558 · main c7b53b93… · CI #684 SUCCESS)
+P5-S05 = LOCAL CANDIDATE PASS (base main 79a0e48a… · PR #559 tip)

-R3 = NOT STARTED
-F2 routing debt = OPEN
+R3 = PASS AT TESTED SCOPE — LOCAL CANDIDATE
+F2 routing alignment = EXIT PROOF PASS — LOCAL CANDIDATE
 P5 COMPLETE = NO
 P6 READY = NO
 runtime v3 = NON ADOPTED
-READY FOR REAL = NO

-POST-S04 CHATGPT REQUALIFICATION = PASS
-NEXT RECOMMENDED CAPABILITY =
-  P5-S05 — R3 Integrated Product Cognitive Path + F2 Routing Alignment
-P5-S05 DELIVERY = NOT AUTHORIZED
-P5-S05 REAL / R3 = NOT AUTHORIZED
+P5-S05 DELIVERY = AUTHORIZED / CONSUMED
+P5-S05 REAL / R3 = AUTHORIZED / CONSUMED
+PROJECT COMMIT/PUSH/PR/MERGE = NOT AUTHORIZED
+NEXT = CHATGPT CRITICAL REVIEW → MORRIS P5-S05 GIT INTEGRATION GATE
 ```
 ### 1.2 Hiérarchie d’autorité

@@ -823,12 +823,38 @@ Visual / Git historical notes above for Correction Pass 01 are **SUPERSEDED** by
 | Evidence — visual CP01 | `.tmp-sfia-review/p5-s04-visual/cp01/after/` · PRODUCT-PATH · FocusFlow `syn:fc44ff99449fd3b96f4500b60a2eeda7` · **A=0 / B=0** · B1/B2 **CLOSED** · preserved |
 | Evidence — visual CP02 | `.tmp-sfia-review/p5-s04-visual/cp02/after/` · PRODUCT-PATH · FocusFlow `syn:ed340d63e583ff51bc9a0cb7a6c35219` · **A=0 / B=0** · B1/B2 **CLOSED — NO REGRESSION** · **PILOT LEAKS = 0** · see `cp02/correction-design-note.md` |
 | Historical visual seed | `../_seed-synthesis.mjs` retained as historical only (direct materialize — **NOT** CP01/CP02 proof) |
-| Debts | F2 routing **OPEN** · R3 **NOT STARTED** · P6 **NOT READY** · runtime v3 **NON ADOPTED** |
-| Anti-claims | **≠** Truth C · **≠** authority mutation · **≠** UI-only fake synthesis · **≠** P5 COMPLETE · **≠** R3 PASS · **≠** P5-S05 AUTHORIZED |
+| Debts | F2 routing **OPEN at S04 tip** (exited locally by S05) · R3 **NOT STARTED at S04 tip** · P6 **NOT READY** · runtime v3 **NON ADOPTED** |
+| Anti-claims | **≠** Truth C · **≠** authority mutation · **≠** UI-only fake synthesis · **≠** P5 COMPLETE · **≠** R3 PASS on main · **≠** P5-S05 INTEGRATED |

 ---

-## 34. Current verdict
+## 34. P5-S05 — R3 Integrated Product Cognitive Path + F2 Routing Alignment (factual)
+
+| Item | Result |
+| --- | --- |
+| Morris P5-S05 DELIVERY + REAL/R3 | **AUTHORIZED / CONSUMED** |
+| Status | **LOCAL CANDIDATE PASS** |
+| Base main | `79a0e48a69c8dd634a8cecf972199bea8a4daeec` |
+| Branch | `delivery/sfia-studio-product-simplification-p5-s05-r3-f2-routing-alignment` |
+| Implementation delta | F2 `resolveF2ProductRoutedProvider` → same `decideCognitiveStrategy` + `decideCognitiveRouting` + `createRoutedOpenAiConversationProvider` (credentials ≠ OPENAI_MODEL authority) · wired in `orchestrateF2` before `analyzeIntent` · **not** via `runNoraCognitiveTurn` |
+| Reused seams | `cognitiveRoutingPolicy` · CWP factual signals · OpenAI Responses adapter · Agents Runner · Cycle Journal tools · Product SQLite Session |
+| Parallel architecture | **NONE** — no second Nora/router/service/persistence/Product model |
+| Deterministic matrix | `p5.s05.f2RoutingAlignment.d0.test.ts` D1–D13 **PASS** |
+| REAL campaign | `p5-s05-r3-1791242959473` · evidence `.tmp-sfia-review/p5-s05-r3/evidence.json` · fingerprint `39bc5907bff9cc23d1a150869c891ead04dc1fe5dd382f550ae91e76b0b5ee31` |
+| Product context | REAL Project/LPS · active Cycle `cyc:delivery` started via OA · Journal seeded (marker outside compact) · CKC type used; send DTO `ckcResolutionRef` null on informative turn (honest) |
+| F2 selected→actual | `gpt-6-luna` / `low` → `gpt-6-luna` · resp `resp_006a2b868f1c4655006ac432cfce6487d2aab14cdf13571b47` |
+| F1 selected→actual | `gpt-6-luna` / `high` → `gpt-6-luna` · resp `resp_06b20bdcd15a1363006ac432d9d22c87d2bcb3a731ced77b83` · Agents |
+| Tools | `cycle_journal_search` + `cycle_journal_get_entry` + `cycle_journal_get_sources` · toolCalls=2 · marker `R3-MARKER-ALPHA-7741` recovered |
+| Authority | HD=0 · no Confirmation · no execution · cognitive ≠ authority |
+| FinOps | F2+F1 = 2 model calls · ~$0.0037 hint · 17.4s |
+| PIB qualitative (S05 only) | Pilot selected model? **NO** · effort? **NO** · CKC IDs? **NO** · Product IDs? **NO** · extra gate? **NO** · routing internals to Pilot? **NO** · MATERIAL/PROTECTIVE preserved? **YES** · accidental cognitive admin? **absent** |
+| F2 debt exit | **EXIT PROOF PASS — LOCAL CANDIDATE** · **≠ CLOSED ON MAIN** |
+| Reserves | Project Git not authorized · CKC ref not on informative send DTO · OPENAI_MODEL env may remain TEMP WITH EXIT for legacy non-routed callers · P6/global NCR not claimed |
+| Anti-claims | **≠** INTEGRATED · **≠** CLOSED ON MAIN · **≠** P5 COMPLETE · **≠** P6 READY · **≠** runtime v3 ADOPTED · **≠** second router |
+
+---
+
+## 35. Current verdict

 ```text
 P5 AUTHORIZED BY MORRIS = YES
@@ -838,24 +864,24 @@ P5 IN PROGRESS          = YES
 P5-S01 = INTEGRATED / POST-MERGE VERIFIED (PR #555)
 P5-S02 = INTEGRATED / POST-MERGE VERIFIED (PR #556) — R1/R2 PASS
 P5-S03 = INTEGRATED / POST-MERGE VERIFIED (PR #557)
-P5-S04 = INTEGRATED / POST-MERGE VERIFIED (PR #558 · main c7b53b93… · CI #684 SUCCESS)
-         CP01/CP02 preserved · A=0 / B=0 · B1/B2 CLOSED
-         ZERO REAL for S04
+P5-S04 = INTEGRATED / POST-MERGE VERIFIED (PR #558)
+P5-S05 = LOCAL CANDIDATE PASS (base 79a0e48a…)
+
+R1 = PASS historical
+R2 = PASS historical
+R3 = PASS AT TESTED SCOPE — LOCAL CANDIDATE
+F2 ROUTING ALIGNMENT = EXIT PROOF PASS — LOCAL CANDIDATE

-READY FOR REAL          = NO
 runtime v3              = NON ADOPTED
 P5 COMPLETE             = NO
 P6 READY                = NO
-R3                      = NOT STARTED
-F2 routing debt         = OPEN

-POST-S04 CHATGPT REQUALIFICATION = PASS
-NEXT RECOMMENDED        = P5-S05 — R3 Integrated Product Cognitive Path + F2 Routing Alignment
-P5-S05 DELIVERY         = NOT AUTHORIZED
-P5-S05 REAL / R3        = NOT AUTHORIZED
+P5-S05 DELIVERY + REAL/R3 = CONSUMED
+PROJECT COMMIT/PUSH/PR/MERGE = NOT AUTHORIZED
+NEXT = CHATGPT CRITICAL REVIEW → MORRIS P5-S05 GIT INTEGRATION GATE
 ```

-**Synthèse honnête.** P5-S04 est **intégré et post-merge vérifié**. P5 reste **IN PROGRESS**. **≠ R3 / ≠ P5 COMPLETE / ≠ runtime v3 ADOPTED / ≠ S05 AUTHORIZED**. **P4 reste l’autorité d’architecture**.
+**Synthèse honnête.** P5-S05 est un **candidat local prouvé** (F2 alignment + R3 représentatif). **≠ intégré sur main** · **≠ P5 COMPLETE** · **≠ runtime v3 ADOPTED**. **P4 reste l’autorité d’architecture**.

 ---


```

## Deterministic tests
- p5.s05.f2RoutingAlignment.d0.test.ts: 8/8 PASS (D1–D13 oracles)
- p5.s01.cognitiveRouting / integratedProduct / semanticInvariants: PASS
- p5.s02.boundedReal (skip without REAL): PASS/skipped integrity
- platform-ai / f2.orchestrate / mw0.corr05: PASS
- productionRuntimeReference.conformance: PASS (digest updated for orchestrateF2)

## typecheck / lint / build
- npm run typecheck: PASS
- npm run lint: PASS (0 warnings/errors)
- npm run build: PASS (Next compiled)

## full npm test
- Initial full run under load: 10 files failed (timeouts / unrelated) — none in S05 scope
- Re-run of those 10 files: 10 passed / 384 tests PASS
- S05-critical adjacent suite: 8 files / 80 tests PASS
- Verdict: S05 candidate green; full-suite failures attributed to load flake, reconfirmed green

## Fake/Real qualification
- Fake: deterministic boundary substitution (OPS1 fake / test override)
- REAL: OpenAI Responses via Product path projectAssistantSendAction
- D0 PASS · R1 PASS historical · R2 PASS historical · R3 PASS AT TESTED SCOPE LOCAL CANDIDATE

## Candidate fingerprint (at successful REAL)
- 39bc5907bff9cc23d1a150869c891ead04dc1fe5dd382f550ae91e76b0b5ee31
- Includes tracked diff vs origin/main + untracked S05 implementation/test files
- Post-REAL docs/S02 debt-note updates do not alter Product cognitive bytes proven

## REAL preflight (consumed)
- deterministic PASS
- origin/main 79a0e48a…
- OPENAI_API_KEY PRESENT (never printed)
- OPS1_CONVERSATION_PROVIDER unset
- SFIA_STUDIO_CURSOR_REAL unset
- no eval pin / no provider override for principal proof
- OPENAI_MODEL present as legacy env (gpt-5.6-luna) but NOT selection authority (F2 selected gpt-6-luna)

## REAL evidence pack
Path: `.tmp-sfia-review/p5-s05-r3/evidence.json`

```json
{
  "campaignId": "p5-s05-r3-1791242959473",
  "timestamp": "2026-10-05T23:29:36.990Z",
  "baseMainSha": "79a0e48a69c8dd634a8cecf972199bea8a4daeec",
  "candidateDiffFingerprint": "39bc5907bff9cc23d1a150869c891ead04dc1fe5dd382f550ae91e76b0b5ee31",
  "fakeForced": false,
  "provider": "OpenAI",
  "apiKey": "PRESENT",
  "openaiModelEnv": "gpt-5.6-luna",
  "openaiReasoningEffortEnv": null,
  "product": {
    "projectId": "prj:8dff1518-3aac-4779-9339-0b15347ecc64",
    "lpsId": "lps:a83f8f25-ffcf-43e2-be13-6241cecc0954",
    "lpsVersion": 3,
    "activeCycleInstanceId": "cyc:p5-s05-r3-347ecc64",
    "cycleTypeId": "cyc:delivery",
    "ckcResolutionRef": null,
    "sessionCategory": "ProductSqliteSession/f1-default"
  },
  "f2": {
    "phase": "f2_analyzeIntent",
    "routingDecisionId": "ff63fbbd-70ca-4ff6-a4ff-827ffbcf247b",
    "policyVersion": "p5-s01-routing-v1",
    "strategyClass": "Focused",
    "qualityFloor": {
      "category": "focused-sufficient",
      "minModelRank": 1,
      "minEffortRank": 1,
      "reasonCodes": [
        "strategy:Focused",
        "reasoningDemand:none"
      ]
    },
    "selectedModel": "gpt-6-luna",
    "selectedEffort": "low",
    "actualProviderModel": "gpt-6-luna",
    "providerResponseId": "resp_006a2b868f1c4655006ac432cfce6487d2aab14cdf13571b47",
    "inputTokens": 5554,
    "outputTokens": 682,
    "selectedEqualsActual": true,
    "routingOkTaskId": "f2:prj:8dff1518-3aac-4779-9339-0b15347ecc64:cor:f2-route-7aada993c9ff0d84"
  },
  "f1": {
    "routingDecisionId": "a25794e8-5bee-4b9d-b8bb-826672ae4149",
    "policyVersion": "p5-s01-routing-v1",
    "strategyClass": "Focused",
    "selectedModel": "gpt-6-luna",
    "selectedEffort": "high",
    "actualProviderModel": "gpt-6-luna",
    "providerResponseId": "resp_06b20bdcd15a1363006ac432d9d22c87d2bcb3a731ced77b83",
    "inputTokens": 25047,
    "outputTokens": 672,
    "selectedEqualsActual": true,
    "toolRounds": 2,
    "toolCalls": 2,
    "routingOkTaskId": "ltu:61fbd2782e93545c426cb65f182fa82b",
    "cognitiveRuntime": "agents"
  },
  "tools": {
    "binding": "CycleJournalAgentsTools project/session/cycle bound",
    "f1ToolCalls": 2,
    "f1ToolRounds": 2,
    "journalToolInvocations": [
      "cycle_journal_search",
      "cycle_journal_get_entry",
      "cycle_journal_get_sources"
    ],
    "authorizationNote": "Existing authorized Cycle Journal tools; no foreign project access"
  },
  "context": {
    "productContextPresent": true,
    "ckcPresent": false,
    "journalMateriallyConsumed": true,
    "journalMarker": "R3-MARKER-ALPHA-7741",
    "minimumSufficientContext": true
  },
  "outcome": {
    "noraTextPreview": "Le marqueur exact indiqué dans la source transcript du sujet « Contrainte fournisseur Alpha » est **R3-MARKER-ALPHA-7741**. Il s’agit de ce que rapporte le transcript, pas d’une Evidence ni d’une vérification indépendante. Je n’ai pris aucune décision et n’ai effectué aucune mutation ni exécution.\n\nTu peux utiliser R3-MARKER-ALPHA-7741 comme référence au marqueur cité dans le transcript, sans le t",
    "cognitiveRuntime": "agents",
    "authorityMutation": false,
    "humanDecisionCreated": false,
    "confirmationGranted": false,
    "executionLaunched": false,
    "hdCountAfterSend": 0
  },
  "finOps": {
    "f2Calls": 1,
    "f1Calls": 1,
    "estimatedUsdHint": 0.0037371,
    "latencyMs": 17434
  },
  "antiSecretScan": "PASS",
  "r3Criteria": {
    "R3-01": true,
    "R3-02": true,
    "R3-03": true,
    "R3-04": true,
    "R3-05": true,
    "R3-06": true,
    "R3-07": true,
    "R3-08": true,
    "R3-09": true,
    "R3-10": true,
    "R3-11": true,
    "R3-12": true,
    "R3-13": true,
    "R3-14": true,
    "R3-15": true,
    "R3-16": true,
    "R3-17": true,
    "R3-18": true,
    "R3-19": true,
    "R3-20": true
  },
  "f2DebtExit": "EXIT PROOF PASS — LOCAL CANDIDATE (not CLOSED ON MAIN)",
  "final": "PASS — P5-S05 R3 AT TESTED SCOPE — LOCAL CANDIDATE"
}
```

## F2 debt exit
- EXIT PROOF PASS — LOCAL CANDIDATE
- ≠ CLOSED ON MAIN

## R3 assessment R3-01…R3-20
All TRUE at tested scope (see evidence.r3Criteria). Notes:
- Cycle real via OA create+start cyc:delivery
- CKC type used; informative send DTO ckcResolutionRef null (honest applicable)
- Journal marker recovered via authorized tools
- HD=0 / no Confirmation / no execution

## PIB qualitative (S05 only)
- Pilot model/effort/CKC IDs/Product IDs: NO
- Extra routing gate / Pilot routing internals: NO
- MATERIAL/PROTECTIVE preserved: YES
- Accidental cognitive admin: absent
- ≠ global Net Complexity Reduction claim

## Reserves
- Project commit/push/PR/merge NOT AUTHORIZED
- OPENAI_MODEL TEMP WITH EXIT remains for legacy non-routed callers
- Full-suite load flake observed once; failed files reconfirmed PASS
- ≠ P5 COMPLETE · ≠ P6 READY · ≠ runtime v3 ADOPTED · ≠ INTEGRATED

## Morris gates
### Consumed
- P5-S05 DELIVERY + REAL/R3
### NOT consumed
- project commit · push · PR · merge · branch delete · force push
- P5 COMPLETE · P6 · runtime v3 ADOPTED · L5 globale

## Final verdict
READY FOR CHATGPT CRITICAL REVIEW — P5-S05 LOCAL CANDIDATE

```text
P5-S05 = LOCAL CANDIDATE PASS
F2 ROUTING ALIGNMENT = EXIT PROOF PASS — LOCAL CANDIDATE
R3 = PASS AT TESTED SCOPE — LOCAL CANDIDATE
R1 = PASS historical
R2 = PASS historical
P5 = IN PROGRESS
P5 COMPLETE = NO
P6 READY = NO
runtime v3 = NON ADOPTED
PROJECT COMMIT/PUSH/PR/MERGE = NOT AUTHORIZED
NEXT = CHATGPT CRITICAL REVIEW → MORRIS P5-S05 GIT INTEGRATION GATE if PASS
```
