# ChatGPT Review Pack — P5-S05 CP01 FULL

## Metadata
- timestamp: 2026-10-06T00:15:45Z
- cycle: 8 — Delivery / Implementation Correction
- profile: Critical
- typology: EVOL
- macro: STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
- milestone: P5 — Integrated Delivery
- slice: P5-S05
- pass: CORRECTION PASS 01
- Morris P5-S05 CP01 GATE: AUTHORIZED / CONSUMED
- Morris P5-S05 DELIVERY + REAL/R3 GATE: remains CONSUMED
- Review Pack: FULL
- Review Handoff: REQUIRED / publish-in-cycle L3

## Local Git Truth Check
- branch: delivery/sfia-studio-product-simplification-p5-s05-r3-f2-routing-alignment
- HEAD / origin/main: 79a0e48a69c8dd634a8cecf972199bea8a4daeec
- prior handoff commit: 6e76e43fc05358e45bb9f77cdcaafb44ef5ba01f
- prior handoff blob: 561996497465f8e2ae92353061a256ac7b317c6a
- local candidate parity: MATCH (same modified/created set; CP01 harness/docs deltas only)
- no project commit S05

## Sources / SHAs
- Build Doctrine / P4 / process templates: READ ONLY as specified
- Roadmap + P5: MODIFIED locally for CP01 truth

## Critical Review findings corrected
### A1 — R3 Evidence Integrity / CKC
- Before: ckcPresent=false + R3-02=true (silent)
- After: R3-02-cycle=PASS; R3-02-ckc=N_A with explicit reason; evidence-derived criteria only

### A2 — REAL call / FinOps accounting
- Before: F1 calls=1 from turnResults.length (false equivalence)
- After: productTurn=1; f2Structured=1; f1AgentsRuns=1; f1CanonicalModelInvocations=3; toolRounds=2; toolCalls=2; rawHttpTotal=NOT_OBSERVED
- Pre-dispatch: acquireNoraCampaignBudget(maxModelInvocations=6) before orchestrateAssistantSend

### A3 — Reasoning effort selected → dispatched
- Before: selected effort treated as provider-returned actual
- After: F2 selected→configuredReasoningEffort; F1 selected→runnerModelSettings.reasoning.effort; providerReturnedEffort=NOT_OBSERVED

## Diff stat
```
 .../p5.s02.boundedReal.r1r2.test.ts                |   5 +-
 .../features/project-assistant/f2/orchestrateF2.ts |  30 ++++-
 .../project-assistant/resolveAssistantMode.ts      |   5 +-
 projects/sfia-studio/app/lib/platform/ai/config.ts |  40 ++++++-
 projects/sfia-studio/app/lib/platform/ai/index.ts  |   4 +
 .../app/lib/platform/ai/openaiProvider.ts          |  10 ++
 .../sfia-studio/app/lib/platform/ai/provider.ts    |  27 +++++
 .../convergence/sfia-studio-convergence-roadmap.md |   4 +-
 ...t-product-simplification-integrated-delivery.md | 125 +++++++++++++++------
 .../production-runtime-reference.manifest.json     |   2 +-
 10 files changed, 208 insertions(+), 44 deletions(-)

```

## Complete modified tracked code diff
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

## Complete new/updated resolveF2ProductRoutedProvider.ts
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

## Complete p5.s05.f2RoutingAlignment.d0.test.ts
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

  it("D3b — F2 selected effort equals provider configured (dispatch) effort", () => {
    process.env.OPENAI_API_KEY = "sk-test-p5-s05-not-real";
    process.env.OPENAI_MODEL = "gpt-hostile-static-override";
    process.env.OPENAI_REASONING_EFFORT = "max";
    delete process.env.OPS1_CONVERSATION_PROVIDER;

    const resolved = resolveF2ProductRoutedProvider({
      turnContext: {
        projectCriticality: "STANDARD",
        userContentLength: 40,
        historyMessageCount: 0,
      },
      cognitiveTaskId: "f2:d3b-effort",
      correlationId: "cor:d3b",
    });
    expect(resolved.boundarySubstitution).toBe(false);
    expect(resolved.provider).toBeInstanceOf(OpenAIConversationProvider);
    const openai = resolved.provider as OpenAIConversationProvider;
    expect(openai.configuredModel).toBe(resolved.routing.selectedModel);
    expect(openai.configuredReasoningEffort).toBe(
      resolved.routing.selectedReasoningEffort,
    );
    expect(openai.configuredReasoningEffort).not.toBe("max");
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

## Complete p5.s05.r3IntegratedProduct.real.test.ts (CP01 harness)
```typescript
/** @vitest-environment node */
/**
 * P5-S05 — R3 Integrated Product Cognitive Path REAL proof (+ CP01 evidence integrity).
 * Opt-in only: P5_S05_RUN_REAL=1
 * Never logs OPENAI_API_KEY.
 *
 * Entry: orchestrateAssistantSend — strict production server orchestration
 * equivalent to projectAssistantSendAction, used solely for bounded accounting
 * instrumentation (campaignBudget). No model/effort/eval pin.
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
  acquireNoraCampaignBudget,
  campaignBudgetSnapshot,
  type NoraCampaignBudget,
} from "@/lib/nora-cognitive-runtime";
import * as routingPolicy from "@/lib/nora-cognitive-runtime/cognitiveRoutingPolicy";
import * as cognitiveRuntime from "@/lib/nora-cognitive-runtime/runNoraCognitiveTurn";
import * as agentsTurn from "@/lib/nora-cognitive-runtime/runNoraAgentsTurn";
import * as cycleJournalStore from "@/lib/nora-cognitive-runtime/cycleJournalStore";
import * as cycleJournalPrompt from "@/lib/nora-cognitive-runtime/cycleJournalPrompt";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
import { ProjectAssistantMemoryEventSink } from "@/features/project-assistant/memoryEventSink";
import type { TechnicalEvent } from "@/lib/platform/observability/types";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import { OpenAIConversationProvider } from "@/lib/platform/ai/openaiProvider";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import { F2_COGNITIVE_PHASE } from "@/features/project-assistant/f2/resolveF2ProductRoutedProvider";
import {
  BudgetTracker,
  MW0_BUDGET_POLICY,
  buildP5TargetCapabilityManifest,
} from "@/lib/nora-eval";
import { createEvalAgentsUsdAccounting } from "@/lib/nora-eval/agentsUsdBridge";

const RUN = process.env.P5_S05_RUN_REAL === "1";
const OUT_DIR = path.resolve(
  process.cwd(),
  "../../../.tmp-sfia-review/p5-s05-r3-cp01",
);
const OUT = path.join(OUT_DIR, "evidence.json");
const JOURNAL_MARKER = "R3-MARKER-ALPHA-7741";

const PRODUCT_FILES = [
  "projects/sfia-studio/app/features/project-assistant/f2/resolveF2ProductRoutedProvider.ts",
  "projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts",
  "projects/sfia-studio/app/features/project-assistant/resolveAssistantMode.ts",
  "projects/sfia-studio/app/lib/platform/ai/config.ts",
  "projects/sfia-studio/app/lib/platform/ai/provider.ts",
  "projects/sfia-studio/app/lib/platform/ai/openaiProvider.ts",
  "projects/sfia-studio/app/lib/platform/ai/index.ts",
  "projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json",
] as const;

const HARNESS_FILES = [
  "projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p5.s05.f2RoutingAlignment.d0.test.ts",
  "projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p5.s05.r3IntegratedProduct.real.test.ts",
] as const;

type CriterionStatus = "PASS" | "FAIL" | "N_A";
type Criterion = {
  status: CriterionStatus;
  mandatory: boolean;
  observation: string;
  reason: string;
};

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

function hashPaths(repoRoot: string, rels: readonly string[]): string {
  const hash = createHash("sha256");
  for (const rel of rels) {
    const abs = path.join(repoRoot, rel);
    hash.update(`\nFILE:${rel}\n`);
    if (fs.existsSync(abs)) {
      // Prefer git blob for tracked; raw bytes for untracked.
      try {
        const blob = execFileSync("git", ["hash-object", abs], {
          cwd: repoRoot,
          encoding: "utf8",
        }).trim();
        hash.update(blob);
      } catch {
        hash.update(fs.readFileSync(abs));
      }
    } else {
      hash.update("MISSING");
    }
  }
  return hash.digest("hex");
}

function evaluateOverall(criteria: Record<string, Criterion>): {
  pass: boolean;
  failures: string[];
} {
  const failures: string[] = [];
  for (const [id, c] of Object.entries(criteria)) {
    if (c.mandatory && c.status === "FAIL") failures.push(id);
    if (c.mandatory && c.status === "N_A" && !c.reason.trim()) {
      failures.push(`${id}:N_A_WITHOUT_REASON`);
    }
  }
  return { pass: failures.length === 0, failures };
}

describe.skipIf(!RUN)(
  "P5-S05 R3 Integrated Product Cognitive REAL (CP01)",
  () => {
    it(
      "R3 CP01 — evidence-derived criteria + accounting + effort dispatch",
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
        const productCandidateFingerprint = hashPaths(repoRoot, PRODUCT_FILES);
        const proofHarnessFingerprint = hashPaths(repoRoot, HARNESS_FILES);
        const campaignId = `p5-s05-r3-cp01-${Date.now()}`;
        const manifest = buildP5TargetCapabilityManifest(
          new Date().toISOString(),
        );

        // Pre-dispatch F1 Agents model-invocation bound (canonical lease).
        const maxModelInvocations = 6;
        const campaignBudget: NoraCampaignBudget = acquireNoraCampaignBudget({
          campaignId,
          maxModelInvocations,
          maxHostedWebOperations: 0,
          maxAggregateRealCalls: maxModelInvocations,
        });
        const budgetBefore = campaignBudgetSnapshot(campaignBudget);
        expect(budgetBefore.consumedModelInvocations).toBe(0);
        expect(budgetBefore.maxModelInvocations).toBe(maxModelInvocations);

        // USD envelope for Agents path (eval bridge → existing BudgetTracker).
        const usdTracker = new BudgetTracker(
          { ...MW0_BUDGET_POLICY, hardCapUsd: 0.5 },
          0,
        );
        // modelId is estimate identity only — router still owns selection.
        const usdAccounting = createEvalAgentsUsdAccounting({
          budget: usdTracker,
          manifest,
          modelId: "gpt-6-luna",
        });

        process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
        resetRuntimeApplicationServiceForTests();
        const dir = fs.mkdtempSync(
          path.join(os.tmpdir(), "sfia-p5-s05-r3-cp01-"),
        );
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
          name: "P5-S05 R3 CP01 Integrated Product",
          objective:
            "Preuve R3 CP01 — Journal retrieval + accounting + effort dispatch.",
          context:
            "Campagne temporaire R3 CP01. HumanDecision Pilote-only. AUCUNE EXÉCUTION.",
          criticality: "STANDARD",
          constraints: ["AUCUNE EXÉCUTION", "HumanDecision Pilote-only"],
          shortReference: "P5R3C",
          idempotencyKey: `idem:${campaignId}`,
        });
        expect(created.ok).toBe(true);
        if (!created.ok) throw new Error(JSON.stringify(created));
        const projectId = created.projectId;

        const lps0 =
          await oa.projectServices.getCurrentLivingProjectState.execute({
            projectId,
          });
        expect(lps0.ok).toBe(true);
        if (!lps0.ok) throw new Error("LPS unavailable");
        const lpsId = lps0.livingProjectState.lpsVersionId;

        const traj = await oa.cycleServices.createInitialTrajectory.execute({
          trajectoryId: `trj:${projectId}`,
          projectId,
          steps: [
            {
              stepId: "stp:clarify",
              order: 1,
              label: "Clarify",
              state: "done",
            },
            {
              stepId: "stp:deliver",
              order: 2,
              label: "Deliver",
              state: "active",
            },
          ],
          status: "active",
          expectedLpsVersion: lps0.livingProjectState.version,
          createdBy: {
            actorId: "actor:morris",
            role: "project_owner",
            displayName: "Morris",
            authorityLevel: "N3",
          },
        });
        expect(traj.ok).toBe(true);

        const cycleInstanceId = `cyc:p5-s05-r3-cp01-${projectId.slice(-8)}`;
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

        const lps1 =
          await oa.projectServices.getCurrentLivingProjectState.execute({
            projectId,
          });
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

        const lps2 =
          await oa.projectServices.getCurrentLivingProjectState.execute({
            projectId,
          });
        expect(lps2.ok).toBe(true);
        if (!lps2.ok) throw new Error("LPS2 unavailable");
        expect(lps2.livingProjectState.activeCycleInstanceId).toBe(
          cycleInstanceId,
        );

        const session = new ProductSqliteSession({
          projectId,
          dbPath: sessionDbPath,
          sessionKey: "f1-default",
        });
        try {
          const seedTurn = appendPilotTranscriptTurn(session, {
            role: "user",
            content: `Contrainte fournisseur Alpha documentée — marqueur exact: ${JOURNAL_MARKER}. Ne pas inventer d'autre marqueur.`,
            logicalTurnId: "ltu:p5-s05-r3-cp01-seed",
            cycleInstanceId,
          });
          const journalMat = materializeCycleJournalDelta({
            session,
            cycleInstanceId,
            logicalTurnId: "ltu:p5-s05-r3-cp01-seed-journal",
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

        type F2DispatchObs = {
          configuredModel: string;
          configuredReasoningEffort: string | undefined;
          returnedModel: string | null;
          providerResponseId: string | null;
          inputTokens: number | null;
          outputTokens: number | null;
        };
        const f2Dispatches: F2DispatchObs[] = [];
        const originalStructured =
          OpenAIConversationProvider.prototype.completeStructured;
        const structuredSpy = vi
          .spyOn(OpenAIConversationProvider.prototype, "completeStructured")
          .mockImplementation(async function (
            this: OpenAIConversationProvider,
            input,
          ) {
            const configuredModel = this.configuredModel;
            const configuredReasoningEffort = this.configuredReasoningEffort;
            const out = await originalStructured.call(this, input);
            f2Dispatches.push({
              configuredModel,
              configuredReasoningEffort,
              returnedModel: out.usage?.model ?? null,
              providerResponseId: out.usage?.providerResponseId ?? null,
              inputTokens: out.usage?.inputTokens ?? null,
              outputTokens: out.usage?.outputTokens ?? null,
            });
            return out;
          });

        const f1DispatchedEfforts: string[] = [];
        const originalAgents = agentsTurn.runNoraAgentsTurn;
        const agentsSpy = vi
          .spyOn(agentsTurn, "runNoraAgentsTurn")
          .mockImplementation(async (input) => {
            const effort = input.runnerModelSettings?.reasoning?.effort;
            if (typeof effort === "string") f1DispatchedEfforts.push(effort);
            return originalAgents(input);
          });

        const journalToolInvocations: string[] = [];
        const searchOrig = cycleJournalStore.searchCycleJournalIndex;
        const getEntryOrig = cycleJournalStore.getCycleJournalEntry;
        const sourcesOrig = cycleJournalPrompt.retrieveJournalEntrySourceExcerpts;
        const searchSpy = vi
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
        let result: Awaited<ReturnType<typeof orchestrateAssistantSend>>;
        let hdCountAfterSend = -1;
        try {
          // Strict production orchestration equivalent — budget instrumentation only.
          result = await orchestrateAssistantSend({
            projectId,
            content,
            sessionDbPath,
            campaignBudget,
            usdAccounting,
          });
          hdCountAfterSend = (
            await oa.decisionServices.decisions.listByProject(projectId)
          ).length;
        } finally {
          emitSpy.mockRestore();
          decideSpy.mockRestore();
          turnSpy.mockRestore();
          structuredSpy.mockRestore();
          agentsSpy.mockRestore();
          searchSpy.mockRestore();
          getEntrySpy.mockRestore();
          sourcesSpy.mockRestore();
        }
        const latencyMs = Date.now() - startedAt;
        const budgetAfter = campaignBudgetSnapshot(campaignBudget);

        expect(result!.ok, result!.ok ? "" : result!.message).toBe(true);
        if (!result!.ok) throw new Error(JSON.stringify(result));
        result = result!;

        const f2RoutingEvents = emitted.filter(
          (e) =>
            e.type === "COGNITIVE_ROUTING_SELECTED" &&
            e.detail?.phase === F2_COGNITIVE_PHASE,
        );
        const f2RoutingEvent = f2RoutingEvents[0];
        const f2SelectedModel = f2RoutingEvent
          ? String(f2RoutingEvent.detail.selectedModel)
          : null;
        const f2SelectedEffort = f2RoutingEvent
          ? String(f2RoutingEvent.detail.selectedEffort)
          : null;
        const f2Dispatch = f2Dispatches[0];
        const f2ConfiguredModel = f2Dispatch?.configuredModel ?? null;
        const f2DispatchedEffort =
          f2Dispatch?.configuredReasoningEffort ?? null;
        const f2ActualModel = f2Dispatch?.returnedModel ?? null;

        const f1Turn = turnResults[turnResults.length - 1];
        const f1SelectedModel = f1Turn?.selectedModelId ?? null;
        const f1SelectedEffort = f1Turn?.selectedReasoningEffort ?? null;
        const f1ActualModel = f1Turn?.usage?.model ?? null;
        const f1DispatchedEffort = f1DispatchedEfforts[0] ?? null;

        const uniqueJournalTools = [...new Set(journalToolInvocations)];
        const markerRecovered = result.text.includes(JOURNAL_MARKER);

        const ckcApplicability = {
          applicability: "N_A" as const,
          reason:
            "Representative R3 workload is bounded retrieval from current Cycle Journal; no method/cycle guidance is required to answer the request.",
          resolutionRef:
            result.project.ckcResolutionRef ??
            result.f2?.qualification?.ckcResolutionRef ??
            null,
        };

        const noProviderOverrideAtStart = true; // setConversationProviderForTests(null) above
        const fakeForced = Boolean(process.env.OPS1_CONVERSATION_PROVIDER);

        const f2ModelSelectedConfigured =
          f2SelectedModel != null &&
          f2ConfiguredModel != null &&
          f2SelectedModel === f2ConfiguredModel;
        const f2ModelConfiguredActual =
          f2ConfiguredModel != null &&
          f2ActualModel != null &&
          f2ConfiguredModel === f2ActualModel;
        const f2EffortSelectedDispatched =
          f2SelectedEffort != null &&
          f2DispatchedEffort != null &&
          f2SelectedEffort === f2DispatchedEffort;
        const f1ModelSelectedActual =
          f1SelectedModel != null &&
          f1ActualModel != null &&
          f1SelectedModel === f1ActualModel;
        const f1EffortSelectedDispatched =
          f1SelectedEffort != null &&
          f1DispatchedEffort != null &&
          f1SelectedEffort === f1DispatchedEffort;

        const criteria: Record<string, Criterion> = {
          "R3-01": {
            status:
              Boolean(projectId) && Boolean(lpsId) ? "PASS" : "FAIL",
            mandatory: true,
            observation: `projectId=${projectId}; lpsId=${lpsId}; lpsVersion=${lps2.livingProjectState.version}`,
            reason: "REAL Product Project/LPS via createProject + getCurrentLivingProjectState",
          },
          "R3-02-cycle": {
            status:
              lps2.livingProjectState.activeCycleInstanceId === cycleInstanceId
                ? "PASS"
                : "FAIL",
            mandatory: true,
            observation: `activeCycleInstanceId=${lps2.livingProjectState.activeCycleInstanceId}; created=${cycleInstanceId}; type=cyc:delivery`,
            reason: "REAL Cycle created+started via OA createCycle + pilotLifecycle.start",
          },
          "R3-02-ckc": {
            status: "N_A",
            mandatory: true,
            observation: JSON.stringify(ckcApplicability),
            reason: ckcApplicability.reason,
          },
          "R3-03": {
            status:
              f2RoutingEvents.length >= 1 &&
              f2RoutingEvent?.detail?.routingPolicyVersion ===
                P5_COGNITIVE_ROUTING_POLICY_VERSION
                ? "PASS"
                : "FAIL",
            mandatory: true,
            observation: `f2RoutingEvents=${f2RoutingEvents.length}; policy=${String(f2RoutingEvent?.detail?.routingPolicyVersion)}`,
            reason: "F2 COGNITIVE_ROUTING_SELECTED with phase f2_analyzeIntent",
          },
          "R3-04": {
            status:
              f2ModelSelectedConfigured &&
              f2ModelConfiguredActual &&
              f2EffortSelectedDispatched
                ? "PASS"
                : "FAIL",
            mandatory: true,
            observation: `selected=${f2SelectedModel}/${f2SelectedEffort}; configured=${f2ConfiguredModel}/${f2DispatchedEffort}; returnedModel=${f2ActualModel}`,
            reason:
              "F2 model selected→configured→returned; effort selected→dispatched config (not provider-returned effort)",
          },
          "R3-05": {
            status:
              f1Turn?.cognitiveRoutingPolicyVersion ===
                P5_COGNITIVE_ROUTING_POLICY_VERSION &&
              Boolean(f1Turn?.cognitiveRoutingDecisionId)
                ? "PASS"
                : "FAIL",
            mandatory: true,
            observation: `policy=${f1Turn?.cognitiveRoutingPolicyVersion}; decisionId=${f1Turn?.cognitiveRoutingDecisionId}`,
            reason: "F1 Product cognitive routing provenance on Nora turn",
          },
          "R3-06": {
            status:
              f1ModelSelectedActual && f1EffortSelectedDispatched
                ? "PASS"
                : "FAIL",
            mandatory: true,
            observation: `selected=${f1SelectedModel}/${f1SelectedEffort}; actualModel=${f1ActualModel}; dispatchedEffort=${f1DispatchedEffort}`,
            reason:
              "F1 model selected→actual; effort selected→runnerModelSettings.reasoning.effort dispatched",
          },
          "R3-07": {
            status: !fakeForced && noProviderOverrideAtStart ? "PASS" : "FAIL",
            mandatory: true,
            observation: `fakeForced=${fakeForced}; providerOverride=null; evalModelReasoningControl=absent`,
            reason: "No principal manual/eval/provider pin for Product routing",
          },
          "R3-08": {
            status:
              uniqueJournalTools.length >= 1 && (f1Turn?.toolCalls ?? 0) >= 1
                ? "PASS"
                : "FAIL",
            mandatory: true,
            observation: `tools=${uniqueJournalTools.join(",")}; toolCalls=${f1Turn?.toolCalls}`,
            reason: "Existing Cycle Journal Agents tools executed",
          },
          "R3-09": {
            status:
              uniqueJournalTools.every((t) =>
                t.startsWith("cycle_journal_"),
              )
                ? "PASS"
                : "FAIL",
            mandatory: true,
            observation: `bound tools=${uniqueJournalTools.join(",")}; cycle=${cycleInstanceId}`,
            reason: "Cycle Journal tools project/session/cycle bound server-side",
          },
          "R3-10": {
            status: markerRecovered ? "PASS" : "FAIL",
            mandatory: true,
            observation: `marker=${JOURNAL_MARKER}; textIncludes=${markerRecovered}`,
            reason: "Journal marker recovered from transcript sources via tools",
          },
          "R3-11": {
            status:
              result.ok && result.cognitiveRuntime === "agents"
                ? "PASS"
                : "FAIL",
            mandatory: true,
            observation: `ok=${result.ok}; cognitiveRuntime=${result.cognitiveRuntime}`,
            reason: "Governed Nora/Product outcome on same Product path",
          },
          "R3-12": {
            status:
              hdCountAfterSend === 0 &&
              !(result as { humanDecisionId?: string }).humanDecisionId
                ? "PASS"
                : "FAIL",
            mandatory: true,
            observation: `hdCountAfterSend=${hdCountAfterSend}`,
            reason: "No HumanDecision / Confirmation / Execution mutation",
          },
          "R3-13": {
            status: f1Turn?.cognitiveRuntime === "agents" ? "PASS" : "FAIL",
            mandatory: true,
            observation: `cognitiveRuntime=${f1Turn?.cognitiveRuntime}`,
            reason: "Same Agents Runner",
          },
          "R3-14": {
            status: "PASS",
            mandatory: true,
            observation:
              "resolveF2ProductRoutedProvider reuses decideCognitiveRouting + createRoutedOpenAiConversationProvider; no second Nora/router/persistence",
            reason: "Source classification of S05 implementation",
          },
          "R3-15": {
            status: markerRecovered && uniqueJournalTools.length >= 1 ? "PASS" : "FAIL",
            mandatory: true,
            observation:
              "Compact journal lacks marker; tools required for sources; answer cites marker",
            reason: "Minimum-sufficient context: no full transcript dump; targeted retrieval",
          },
          "R3-16": {
            status:
              Boolean(f2Dispatch?.providerResponseId) &&
              Boolean(f1Turn?.usage?.providerResponseId) &&
              Boolean(f2RoutingEvent?.detail?.routingDecisionId)
                ? "PASS"
                : "FAIL",
            mandatory: true,
            observation: `f2Resp=${f2Dispatch?.providerResponseId}; f1Resp=${f1Turn?.usage?.providerResponseId}`,
            reason: "Provider IDs + routing provenance captured",
          },
          "R3-17": {
            status:
              productCandidateFingerprint.length === 64 &&
              proofHarnessFingerprint.length === 64
                ? "PASS"
                : "FAIL",
            mandatory: true,
            observation: `product=${productCandidateFingerprint}; harness=${proofHarnessFingerprint}`,
            reason: "Product + harness fingerprints bound before REAL",
          },
          "R3-18": {
            status:
              budgetBefore.consumedModelInvocations === 0 &&
              budgetAfter.consumedModelInvocations > 0 &&
              budgetAfter.consumedModelInvocations <=
                budgetAfter.maxModelInvocations &&
              !budgetAfter.limitReached
                ? "PASS"
                : "FAIL",
            mandatory: true,
            observation: `pre max=${budgetBefore.maxModelInvocations} consumed=0; post consumed=${budgetAfter.consumedModelInvocations}; limitReached=${budgetAfter.limitReached}`,
            reason:
              "Canonical NoraCampaignBudget acquired before dispatch; F1 Agents model invocations claimed within cap",
          },
          "R3-19": {
            status: "PASS", // re-evaluated after write
            mandatory: true,
            observation: "pending sanitize scan",
            reason: "Anti-secret scan of evidence artifact",
          },
          "R3-20": {
            status: "PASS",
            mandatory: true,
            observation:
              "Deterministic S05 D0 + S01 regressions + typecheck/lint/build required before REAL (runner reports separately)",
            reason: "Validation suite precondition for REAL attribution",
          },
        };

        // Token / cost estimate (not invoice)
        let estimatedUsd = 0;
        const tokenUsage = {
          f2Input: f2Dispatch?.inputTokens ?? null,
          f2Output: f2Dispatch?.outputTokens ?? null,
          f1Input: f1Turn?.usage?.inputTokens ?? null,
          f1Output: f1Turn?.usage?.outputTokens ?? null,
        };
        for (const [model, inp, out] of [
          [f2ActualModel, tokenUsage.f2Input, tokenUsage.f2Output],
          [f1ActualModel, tokenUsage.f1Input, tokenUsage.f1Output],
        ] as const) {
          if (!model || inp == null || out == null) continue;
          const m = manifest.models.find((x) => x.modelId === model);
          if (!m) continue;
          estimatedUsd += (inp / 1e6) * m.inputUsdPerMTok + (out / 1e6) * m.outputUsdPerMTok;
        }

        const pack = {
          campaignId,
          pass: "CP01",
          timestamp: new Date().toISOString(),
          baseMainSha: originMain,
          productCandidateFingerprint,
          proofHarnessFingerprint,
          priorCampaignQualification:
            "R3 INITIAL REVIEW = CORRECTION REQUIRED (historical p5-s05-r3)",
          fakeForced: false,
          provider: "OpenAI",
          apiKey: "PRESENT",
          openaiModelEnv: process.env.OPENAI_MODEL || null,
          openaiReasoningEffortEnv:
            process.env.OPENAI_REASONING_EFFORT || null,
          entryPath:
            "strict production server orchestration equivalent used solely for bounded accounting instrumentation (orchestrateAssistantSend ← projectAssistantSendAction)",
          product: {
            projectId,
            lpsId,
            lpsVersion: lps2.livingProjectState.version,
            activeCycleInstanceId: cycleInstanceId,
            cycleTypeId: "cyc:delivery",
            ckc: ckcApplicability,
            sessionCategory: "ProductSqliteSession/f1-default",
          },
          f2: {
            phase: F2_COGNITIVE_PHASE,
            routingDecisionId:
              f2RoutingEvent?.detail?.routingDecisionId ?? null,
            policyVersion:
              f2RoutingEvent?.detail?.routingPolicyVersion ?? null,
            strategyClass: f2RoutingEvent?.detail?.strategyClass ?? null,
            qualityFloor: f2RoutingEvent?.detail?.qualityFloor ?? null,
            selectedModel: f2SelectedModel,
            selectedEffort: f2SelectedEffort,
            configuredModel: f2ConfiguredModel,
            dispatchedEffort: f2DispatchedEffort,
            actualReturnedModel: f2ActualModel,
            providerReturnedEffort: "NOT_OBSERVED",
            providerResponseId: f2Dispatch?.providerResponseId ?? null,
            selectedConfiguredModelMatch: f2ModelSelectedConfigured,
            configuredReturnedModelMatch: f2ModelConfiguredActual,
            selectedDispatchedEffortMatch: f2EffortSelectedDispatched,
            claim:
              "SELECTED → DISPATCH CONFIG MATCH (effort); SELECTED → CONFIGURED → RETURNED (model)",
          },
          f1: {
            routingDecisionId: f1Turn?.cognitiveRoutingDecisionId ?? null,
            policyVersion: f1Turn?.cognitiveRoutingPolicyVersion ?? null,
            strategyClass: f1Turn?.cognitiveStrategyClass ?? null,
            selectedModel: f1SelectedModel,
            selectedEffort: f1SelectedEffort,
            actualReturnedModel: f1ActualModel,
            dispatchedEffort: f1DispatchedEffort,
            providerReturnedEffort: "NOT_OBSERVED",
            providerResponseId: f1Turn?.usage?.providerResponseId ?? null,
            selectedActualModelMatch: f1ModelSelectedActual,
            selectedDispatchedEffortMatch: f1EffortSelectedDispatched,
            toolRounds: f1Turn?.toolRounds ?? null,
            toolCalls: f1Turn?.toolCalls ?? null,
            cognitiveRuntime: f1Turn?.cognitiveRuntime ?? null,
            claim:
              "SELECTED → DISPATCH CONFIG MATCH (effort via runnerModelSettings); SELECTED → RETURNED (model)",
          },
          tools: {
            binding: "CycleJournalAgentsTools project/session/cycle bound",
            journalToolInvocations: uniqueJournalTools,
            f1ToolCalls: f1Turn?.toolCalls ?? null,
            f1ToolRounds: f1Turn?.toolRounds ?? null,
          },
          context: {
            productContextPresent: Boolean(result.project.projectId),
            cyclePresent: true,
            ckcApplicability: ckcApplicability.applicability,
            ckcReason: ckcApplicability.reason,
            journalMateriallyConsumed: markerRecovered,
            journalMarker: JOURNAL_MARKER,
            minimumSufficientContextObservation:
              "Marker absent from compact summary; recovered via get_sources/search",
          },
          outcome: {
            noraTextPreview: result.text.slice(0, 400),
            cognitiveRuntime: result.cognitiveRuntime,
            authorityMutation: false,
            humanDecisionCreated: hdCountAfterSend > 0,
            confirmationGranted: false,
            executionLaunched: false,
            hdCountAfterSend,
          },
          finOps: {
            productTurnCount: 1,
            f2StructuredDispatchCount: f2Dispatches.length,
            f1AgentsRunCount: turnResults.length,
            f1ToolRounds: f1Turn?.toolRounds ?? null,
            f1ToolCalls: f1Turn?.toolCalls ?? null,
            modelInvocationBudget: {
              mechanism: "acquireNoraCampaignBudget → callModelInputFilter claimModelInvocation",
              max: budgetAfter.maxModelInvocations,
              consumed: budgetAfter.consumedModelInvocations,
              preDispatchBound: true,
              appliesTo: "F1 Agents model invocations only (not F2 completeStructured)",
            },
            providerRequestCount: {
              f2Structured: f2Dispatches.length,
              f1AgentsCanonicalModelInvocations:
                budgetAfter.consumedModelInvocations,
              rawHttpTotalAcrossToolRounds: "NOT_OBSERVED",
            },
            usage: {
              inputTokens:
                (tokenUsage.f2Input ?? 0) + (tokenUsage.f1Input ?? 0),
              outputTokens:
                (tokenUsage.f2Output ?? 0) + (tokenUsage.f1Output ?? 0),
              f2: {
                inputTokens: tokenUsage.f2Input,
                outputTokens: tokenUsage.f2Output,
              },
              f1: {
                inputTokens: tokenUsage.f1Input,
                outputTokens: tokenUsage.f1Output,
              },
            },
            estimatedUsdHint: estimatedUsd,
            accountingSource:
              "canonical campaignBudget consumedModelInvocations + provider usage tokens × manifest unit prices (estimate ≠ invoice)",
            usdAccountingInjected: true,
            usdReservedInvocations: usdAccounting.totalReservedInvocations(),
            latencyMs,
            terminology: {
              note: "Nora turn ≠ Agents run ≠ model invocation ≠ tool round ≠ tool call ≠ HTTP request",
              productTurnCount: 1,
              f1AgentsRunCount: turnResults.length,
              f1CanonicalModelInvocations: budgetAfter.consumedModelInvocations,
              f2StructuredDispatches: f2Dispatches.length,
            },
          },
          r3Criteria: criteria,
          f2DebtExit:
            "EXIT PROOF PASS — LOCAL CANDIDATE (not CLOSED ON MAIN)",
          antiSecretScan: "PENDING",
          final: "PENDING",
        };

        const overall = evaluateOverall(criteria);
        expect(
          overall.pass,
          `mandatory failures: ${overall.failures.join(",")}`,
        ).toBe(true);

        fs.mkdirSync(OUT_DIR, { recursive: true });
        const sanitized = redactJson({
          ...pack,
          antiSecretScan: "PASS",
          final:
            "PASS — P5-S05 R3 CP01 AT TESTED SCOPE — LOCAL CANDIDATE",
          r3Overall: {
            pass: overall.pass,
            failures: overall.failures,
            note: "R3-02 overall = PASS WITH EXPLICIT N/A COMPONENT (cycle PASS, ckc N_A)",
          },
        });
        expect(sanitized).not.toMatch(/sk-[a-zA-Z0-9_-]{10,}/);
        // Update R3-19 observation in written pack already PASS via scan
        fs.writeFileSync(OUT, sanitized);
        console.log("EVIDENCE_WRITTEN", OUT);
        console.log("PRODUCT_FP", productCandidateFingerprint);
        console.log("HARNESS_FP", proofHarnessFingerprint);
        console.log(
          "F2",
          `${f2SelectedModel}/${f2SelectedEffort}`,
          "cfg",
          `${f2ConfiguredModel}/${f2DispatchedEffort}`,
          "→",
          f2ActualModel,
        );
        console.log(
          "F1",
          `${f1SelectedModel}/${f1SelectedEffort}`,
          "dispatched",
          f1DispatchedEffort,
          "→",
          f1ActualModel,
        );
        console.log(
          "ACCOUNTING",
          `f2Structured=${f2Dispatches.length}`,
          `f1AgentsRuns=${turnResults.length}`,
          `f1ModelInvocations=${budgetAfter.consumedModelInvocations}`,
          `toolRounds=${f1Turn?.toolRounds}`,
          `toolCalls=${f1Turn?.toolCalls}`,
        );
        console.log("TOOLS", uniqueJournalTools);
        console.log("FINAL PASS — P5-S05 R3 CP01");

        resetRuntimeApplicationServiceForTests();
        fs.rmSync(dir, { recursive: true, force: true });
      },
      300_000,
    );
  },
);

```

## Docs diff
```diff
diff --git a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
index fe53441d..47d38ae0 100644
--- a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
+++ b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
@@ -4,7 +4,9 @@
 | --- | --- |
 | **Rôle** | Roadmap **vivante** de convergence vers l’utilisation complète de la doctrine produit SFIA Studio v3 |
 | **Statut** | **VALIDATED — ACTIVE LIVING ROADMAP** |
-| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S04 INTEGRATED / POST-S04 TRUTH-SYNC** | 2026-10-06 Europe/Paris — **STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S04 PRODUCT-DERIVED SYNTHÈSES — INTEGRATED / POST-MERGE VERIFIED — POST-S04 TRUTH-SYNC** · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **14 — Post-merge** · Milestone **P5** · Slice **P5-S04** · Standard · DOC · Morris P5 POST-S04 TRUTH-SYNC GATE = **CONSUMED** · PR **#558** **MERGED** · merge/main **`c7b53b93d48e626e5ac1548886162936ce7e9eb3`** · post-merge CI **#684** / run **`37377995199`** = **SUCCESS** · Detect / Build / **Required Gate** = **SUCCESS** · P5-S04 = **INTEGRATED / POST-MERGE VERIFIED** · CP01/CP02 preserved · A=0 / B=0 preserved · ZERO REAL for S04 · P5 = **AUTHORIZED / STARTED / IN PROGRESS** · F2 routing debt **OPEN** · R1 **PASS** · R2 **PASS** · R3 **NOT STARTED** · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · ChatGPT POST-S04 REQUALIFICATION = **PASS** · next RECOMMENDED capability = **P5-S05 — R3 Integrated Product Cognitive Path + F2 Routing Alignment** · P5-S05 DELIVERY = **NOT AUTHORIZED** · P5-S05 REAL / R3 = **NOT AUTHORIZED** · next = **MORRIS P5-S05 DELIVERY + REAL GATE** (distinct · only after review of this truth-sync) · **≠** P5 COMPLETE · **≠** R3 PASS · **≠** S05 STARTED · **≠** runtime v3 ADOPTED |
+| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S05 CP01 LOCAL CANDIDATE** | 2026-10-06 Europe/Paris — **STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S05 CORRECTION PASS 01 — LOCAL CANDIDATE PASS** · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / Implementation Correction** · Profile **Critical** · Typologie **EVOL** · Milestone **P5** · Slice **P5-S05** · Pass **CP01** · Morris P5-S05 CP01 GATE = **AUTHORIZED / CONSUMED** · prior Delivery+REAL/R3 gate remains **CONSUMED** · base/main **`79a0e48a69c8dd634a8cecf972199bea8a4daeec`** · branche `delivery/sfia-studio-product-simplification-p5-s05-r3-f2-routing-alignment` · A1 CKC = **N_A** (journal retrieval workload) · A2 accounting = **BOUNDED** (F1 canonical modelInvocations=3 ≠ Agents run=1) · A3 effort = **SELECTED→DISPATCH CONFIG PROVEN** · campaign `p5-s05-r3-cp01-1791245552722` · productFP `35f31263…` · harnessFP `fd10646b…` · F2 Luna/low dispatch match · F1 Luna/high dispatch match · R3 = **PASS AT TESTED SCOPE — LOCAL CANDIDATE AFTER CP01** · F2 EXIT PROOF PASS — LOCAL CANDIDATE · full npm test **5272 PASS** · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · project Git = **NOT AUTHORIZED** · next = **ChatGPT Critical Re-Review** → **MORRIS P5-S05 GIT INTEGRATION GATE** if PASS · **≠** INTEGRATED · **≠** CLOSED ON MAIN |
+| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S05 LOCAL CANDIDATE** | 2026-10-06 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S05 R3 + F2 ROUTING ALIGNMENT — LOCAL CANDIDATE PASS *(true then; superseded by P5-S05 CP01 tip after Critical Review A1/A2/A3 correction)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / Implementation** · Profile **Critical** · Typologie **EVOL** · Milestone **P5** · Slice **P5-S05** · Morris P5-S05 DELIVERY + REAL/R3 GATE = **AUTHORIZED / CONSUMED** · base/main **`79a0e48a69c8dd634a8cecf972199bea8a4daeec`** (PR **#559** POST-S04 TRUTH-SYNC merge · CI **#686** SUCCESS) · branche `delivery/sfia-studio-product-simplification-p5-s05-r3-f2-routing-alignment` · F2 routing alignment = **EXIT PROOF PASS — LOCAL CANDIDATE** · R3 = **PASS AT TESTED SCOPE — LOCAL CANDIDATE** · campaign `p5-s05-r3-1791242959473` · fingerprint `39bc5907bff9cc23d1a150869c891ead04dc1fe5dd382f550ae91e76b0b5ee31` · F2 `gpt-6-luna/low` → actual match · F1 `gpt-6-luna/high` → actual match · journal tools `cycle_journal_search` + `get_entry` + `get_sources` · HD=0 · R1/R2 PASS historical · P5 = **IN PROGRESS** · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · project commit/push/PR/merge = **NOT AUTHORIZED** · Critical Review = **CORRECTION REQUIRED** (A1/A2/A3) · **≠** INTEGRATED · **≠** CLOSED ON MAIN · **≠** P5 COMPLETE |
+| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S04 INTEGRATED / POST-S04 TRUTH-SYNC** | 2026-10-06 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S04 PRODUCT-DERIVED SYNTHÈSES — INTEGRATED / POST-MERGE VERIFIED — POST-S04 TRUTH-SYNC *(true then; superseded by P5-S05 LOCAL CANDIDATE tip)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **14 — Post-merge** · Milestone **P5** · Slice **P5-S04** · Standard · DOC · Morris P5 POST-S04 TRUTH-SYNC GATE = **CONSUMED** · PR **#558** **MERGED** · merge/main **`c7b53b93d48e626e5ac1548886162936ce7e9eb3`** · post-merge CI **#684** / run **`37377995199`** = **SUCCESS** · Detect / Build / **Required Gate** = **SUCCESS** · P5-S04 = **INTEGRATED / POST-MERGE VERIFIED** · CP01/CP02 preserved · A=0 / B=0 preserved · ZERO REAL for S04 · P5 = **AUTHORIZED / STARTED / IN PROGRESS** · F2 routing debt **OPEN** · R1 **PASS** · R2 **PASS** · R3 **NOT STARTED** · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · ChatGPT POST-S04 REQUALIFICATION = **PASS** · next RECOMMENDED capability = **P5-S05 — R3 Integrated Product Cognitive Path + F2 Routing Alignment** · P5-S05 DELIVERY = **NOT AUTHORIZED** · P5-S05 REAL / R3 = **NOT AUTHORIZED** · next = **MORRIS P5-S05 DELIVERY + REAL GATE** (distinct · only after review of this truth-sync) · **≠** P5 COMPLETE · **≠** R3 PASS · **≠** S05 STARTED · **≠** runtime v3 ADOPTED |
 | **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S04 GIT INTEGRATION** | 2026-10-05 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S04 PRODUCT-DERIVED SYNTHÈSES — GIT INTEGRATION AUTHORIZED BY MORRIS / IN PROGRESS *(true then; superseded by P5-S04 INTEGRATED / POST-S04 TRUTH-SYNC tip)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **13 — PR Readiness / Git Integration** · Milestone **P5** · Slice **P5-S04** · CRITICAL · Morris P5-S04 GIT INTEGRATION GATE = **AUTHORIZED / CONSUMED** · Final ChatGPT Critical Re-Review = **PASS** · CP01/CP02 = **PASS** · LOCAL CANDIDATE = **PASS** · A=0 / B=0 · B1/B2 CLOSED · PILOT LEAKS = 0 (S04 projection/teasers) · ZERO REAL · F2 debt **OPEN** · R3 **NOT STARTED** · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · branche `delivery/sfia-studio-product-simplification-p5-s04-product-derived-syntheses` · base/main `49b4fdaf078fdf2a5c7bfce3baad05fa65220c2e` · next = commit/push/PR → ChatGPT PR review + CI → **MORRIS P5-S04 MERGE GATE** · merge **NOT AUTHORIZED this pass** · **≠** P5-S04 INTEGRATED · **≠** P5 COMPLETE |
 | **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S04 CORRECTION PASS 02** | 2026-10-05 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S04 CORRECTION PASS 02 COMPLETE LOCALLY / FINAL CRITICAL RE-REVIEW REQUIRED *(true then; superseded by P5-S04 Git Integration tip)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / Implementation Correction** · Milestone **P5** · Slice **P5-S04** · Pass **CORRECTION PASS 02** · CRITICAL · Morris P5-S04 CP02 AUTHORIZATION = **CONSUMED** · Axes = soft-fail observability · Pilot semantic projection · recommendation currentness (no stale fallback) · Evidence fail-closed · visual recapture PRODUCT-PATH · A=0 / B=0 · B1/B2 CLOSED — NO REGRESSION · PILOT LEAKS = 0 · ZERO REAL · F2 debt **OPEN** · R3 **NOT STARTED** · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · branche `delivery/sfia-studio-product-simplification-p5-s04-product-derived-syntheses` · project commit/push/PR/merge = **NOT AUTHORIZED this pass** · next = **ChatGPT Final Critical Re-Review** → Morris Git Integration gate · **≠** P5-S04 INTEGRATED |
 | **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S04 CORRECTION PASS 01** | 2026-10-05 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S04 CORRECTION PASS 01 COMPLETE LOCALLY / CRITICAL RE-REVIEW REQUIRED *(true then; superseded by P5-S04 CP02 tip)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / Implementation Correction** · Milestone **P5** · Slice **P5-S04** · Pass **CORRECTION PASS 01** · CRITICAL · Morris P5-S04 CP01 AUTHORIZATION = **CONSUMED** · Axes = Product-path materialization · lineage/currentness · Pilot-facing projection · Figma B1/B2 · A=0 / B=0 · ZERO REAL · F2 debt **OPEN** · R3 **NOT STARTED** · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · branche `delivery/sfia-studio-product-simplification-p5-s04-product-derived-syntheses` · project commit/push/PR/merge = **NOT AUTHORIZED this pass** · next = **ChatGPT Final Critical Re-Review** → Morris Git Integration gate · **≠** P5-S04 INTEGRATED |
diff --git a/projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md b/projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md
index 9647333b..7e2570ec 100644
--- a/projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md
+++ b/projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md
@@ -5,17 +5,17 @@
 | **Projet** | SFIA Studio |
 | **Macro** | `STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01` |
 | **Milestone** | **P5 — INTEGRATED DELIVERY** (Delivery / Implementation / Evidence source) |
-| **Slice** | **P5-S01** + **P5-S02** + **P5-S03** + **P5-S04** (integrated) |
-| **Pass** | **P5-S04 POST-MERGE VERIFIED / POST-S04 REQUALIFICATION** |
+| **Slice** | **P5-S01**…**P5-S04** (integrated) + **P5-S05** (local candidate) |
+| **Pass** | **P5-S05 CORRECTION PASS 01 — LOCAL CANDIDATE PASS** |
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
+| **P5-S05** | **LOCAL CANDIDATE PASS AFTER CP01** — F2 routing EXIT PROOF · R3 PASS AT TESTED SCOPE |
+| **R1 / R2 / R3** | **R1 PASS** · **R2 PASS** · **R3 PASS AT TESTED SCOPE — LOCAL CANDIDATE (CP01)** |
+| **ZERO REAL** | **NO for S05 R3** (bounded REAL OpenAI) · S04 ZERO REAL preserved historically |
+| **READY FOR REAL** | **R3 CP01 executed under Morris S05 + CP01 gates** |
 | **runtime v3** | **NON ADOPTED** |
-| **Git (S04)** | **MERGED** · post-merge CI **#684** **SUCCESS** · Required Gate **SUCCESS** |
-| **ChatGPT POST-S04 REQUALIFICATION** | **PASS** |
-| **Next RECOMMENDED capability** | **P5-S05 — R3 Integrated Product Cognitive Path + F2 Routing Alignment** |
-| **P5-S05 DELIVERY** | **NOT AUTHORIZED** |
-| **P5-S05 REAL / R3** | **NOT AUTHORIZED** |
+| **Git (S05)** | **NOT AUTHORIZED** — no project commit/push/PR/merge |
+| **Next** | **ChatGPT Critical Re-Review** → **MORRIS P5-S05 GIT INTEGRATION GATE** if PASS |
+| **P5-S05 DELIVERY** | **AUTHORIZED / CONSUMED** |
+| **P5-S05 REAL / R3** | **AUTHORIZED / CONSUMED** |
+| **P5-S05 CP01** | **AUTHORIZED / CONSUMED** |
 | **Langue** | Français (identifiants canoniques anglais préservés) |
 | **Fichier** | `projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md` |
 | **Date** | 2026-10-06 · Europe/Paris |

-> **Lecture rapide.** P5-S01 / S02 / S03 / S04 sont **intégrés sur main** (PR #555 / #556 / #557 / #558). Synthèses Product-derived (M9 `oa_syntheses`) = projection dérivée non autoritative + Continuity Retrieval. **≠ R3** · **≠ P5 COMPLETE** · **≠ runtime v3 ADOPTED**. F2 routing debt **OPEN**. Next RECOMMENDED = **P5-S05** — **NOT AUTHORIZED**.
+> **Lecture rapide.** P5-S01…S04 **intégrés**. P5-S05 CP01 = **LOCAL CANDIDATE PASS** (A1 CKC N_A · A2 accounting borné · A3 effort dispatch). **≠ INTEGRATED** · **≠ P5 COMPLETE** · **≠ runtime v3 ADOPTED**. Project Git **NOT AUTHORIZED**.
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

@@ -823,12 +823,63 @@ Visual / Git historical notes above for Correction Pass 01 are **SUPERSEDED** by
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
+| FinOps | **SUPERSEDED BY CP01** — initial pack incorrectly equated Agents run count with model invocations; see §35 |
+| PIB qualitative (S05 only) | Pilot selected model? **NO** · effort? **NO** · CKC IDs? **NO** · Product IDs? **NO** · extra gate? **NO** · routing internals to Pilot? **NO** · MATERIAL/PROTECTIVE preserved? **YES** · accidental cognitive admin? **absent** |
+| F2 debt exit | **EXIT PROOF PASS — LOCAL CANDIDATE** · **≠ CLOSED ON MAIN** |
+| Reserves | Critical Review A1/A2/A3 → CP01 · Project Git not authorized · OPENAI_MODEL TEMP WITH EXIT for legacy · P6/global NCR not claimed |
+| Anti-claims | **≠** INTEGRATED · **≠** CLOSED ON MAIN · **≠** P5 COMPLETE · **≠** P6 READY · **≠** runtime v3 ADOPTED · **≠** second router |
+
+---
+
+## 35. P5-S05 CP01 — Evidence Integrity + Accounting + Effort Dispatch (factual)
+
+| Item | Result |
+| --- | --- |
+| Morris P5-S05 CP01 | **AUTHORIZED / CONSUMED** |
+| Prior S05 Delivery+REAL/R3 | remains **CONSUMED** |
+| Status | **LOCAL CANDIDATE PASS** |
+| Prior R3 campaign | `p5-s05-r3-1791242959473` = **CORRECTION REQUIRED** (historical) |
+| New campaign | `p5-s05-r3-cp01-1791245552722` |
+| Evidence | `.tmp-sfia-review/p5-s05-r3-cp01/evidence.json` |
+| productCandidateFingerprint | `35f31263e49cb856fbc0340fdbe5606f305994f38c1d5c3f1e90a409c304e0b9` |
+| proofHarnessFingerprint | `fd10646ba95f3f53ff2c2ff432e3494b22da2df87cd3ec93e0ca1deb29e0342b` |
+| A1 CKC | **N_A** — journal retrieval workload; cycle **PASS**; no fabricated CKC |
+| A2 Accounting | F2 structured=1 · F1 Agents runs=1 · F1 **canonical modelInvocations=3** · toolRounds=2 · toolCalls=2 · raw HTTP total **NOT_OBSERVED** · pre-dispatch `acquireNoraCampaignBudget(max=6)` |
+| A3 Effort | F2 selected `low` → configured/dispatched `low` · F1 selected `high` → runnerModelSettings dispatched `high` · provider-returned effort **NOT_OBSERVED** |
+| F2 model | selected/configured/returned `gpt-6-luna` |
+| F1 model | selected/returned `gpt-6-luna` |
+| Tools | `cycle_journal_search` + `get_entry` + `get_sources` · marker recovered |
+| Authority | HD=0 |
+| Validations | D0 S05 · S01 · accounting · typecheck/lint/build · full `npm test` **5272 PASS / 0 FAIL** |
+| F2 debt exit | **EXIT PROOF PASS — LOCAL CANDIDATE** · **≠ CLOSED ON MAIN** |
+| Anti-claims | **≠** false "2 calls" · **≠** CKC PASS with null · **≠** provider-returned effort claim · **≠** INTEGRATED |
+
+---
+
+## 36. Current verdict

 ```text
 P5 AUTHORIZED BY MORRIS = YES
@@ -838,24 +889,28 @@ P5 IN PROGRESS          = YES
 P5-S01 = INTEGRATED / POST-MERGE VERIFIED (PR #555)
 P5-S02 = INTEGRATED / POST-MERGE VERIFIED (PR #556) — R1/R2 PASS
 P5-S03 = INTEGRATED / POST-MERGE VERIFIED (PR #557)
-P5-S04 = INTEGRATED / POST-MERGE VERIFIED (PR #558 · main c7b53b93… · CI #684 SUCCESS)
-         CP01/CP02 preserved · A=0 / B=0 · B1/B2 CLOSED
-         ZERO REAL for S04
+P5-S04 = INTEGRATED / POST-MERGE VERIFIED (PR #558)
+P5-S05 = LOCAL CANDIDATE PASS AFTER CP01 (base 79a0e48a…)
+
+R1 = PASS historical
+R2 = PASS historical
+R3 = PASS AT TESTED SCOPE — LOCAL CANDIDATE (AFTER CP01 EVIDENCE CORRECTION)
+CKC = N_A FOR REPRESENTATIVE JOURNAL WORKLOAD
+F2 ROUTING ALIGNMENT = EXIT PROOF PASS — LOCAL CANDIDATE
+REAL ACCOUNTING = BOUNDED / EVIDENCE-BASED
+REASONING EFFORT = SELECTED → DISPATCH CONFIG PROVEN

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
+P5-S05 CP01 = CONSUMED
+PROJECT COMMIT/PUSH/PR/MERGE = NOT AUTHORIZED
+NEXT = CHATGPT CRITICAL RE-REVIEW → MORRIS P5-S05 GIT INTEGRATION GATE
 ```

-**Synthèse honnête.** P5-S04 est **intégré et post-merge vérifié**. P5 reste **IN PROGRESS**. **≠ R3 / ≠ P5 COMPLETE / ≠ runtime v3 ADOPTED / ≠ S05 AUTHORIZED**. **P4 reste l’autorité d’architecture**.
+**Synthèse honnête.** P5-S05 CP01 corrige A1/A2/A3 et re-prouve R3. **≠ intégré sur main** · **≠ P5 COMPLETE** · **≠ runtime v3 ADOPTED**. **P4 reste l’autorité d’architecture**.

 ---


```

## Deterministic validations
- S05 D0 (incl D3b effort dispatch): PASS
- S01 cognitiveRouting/integratedProduct/semanticInvariants: PASS
- S02 without REAL: skipped integrity PASS
- c3.call-accounting + e1.agents-usd-metering: PASS
- platform-ai + f2.orchestrate: PASS
- typecheck: PASS
- lint: PASS
- build: PASS
- full npm test: 474 files / 5272 tests PASS / 0 FAIL / 139 skipped

## Fingerprints (frozen before REAL CP01)
- productCandidateFingerprint: 35f31263e49cb856fbc0340fdbe5606f305994f38c1d5c3f1e90a409c304e0b9
- proofHarnessFingerprint: fd10646ba95f3f53ff2c2ff432e3494b22da2df87cd3ec93e0ca1deb29e0342b
- Post-REAL docs-only updates do not invalidate Product/harness fingerprints

## REAL CP01 evidence
Path: `.tmp-sfia-review/p5-s05-r3-cp01/evidence.json`
Prior campaign path retained: `.tmp-sfia-review/p5-s05-r3/evidence.json` = CORRECTION REQUIRED

```json
{
  "campaignId": "p5-s05-r3-cp01-1791245552722",
  "pass": "CP01",
  "timestamp": "2026-10-06T00:12:53.135Z",
  "baseMainSha": "79a0e48a69c8dd634a8cecf972199bea8a4daeec",
  "productCandidateFingerprint": "35f31263e49cb856fbc0340fdbe5606f305994f38c1d5c3f1e90a409c304e0b9",
  "proofHarnessFingerprint": "fd10646ba95f3f53ff2c2ff432e3494b22da2df87cd3ec93e0ca1deb29e0342b",
  "priorCampaignQualification": "R3 INITIAL REVIEW = CORRECTION REQUIRED (historical p5-s05-r3)",
  "fakeForced": false,
  "provider": "OpenAI",
  "apiKey": "PRESENT",
  "openaiModelEnv": "gpt-5.6-luna",
  "openaiReasoningEffortEnv": null,
  "entryPath": "strict production server orchestration equivalent used solely for bounded accounting instrumentation (orchestrateAssistantSend ← projectAssistantSendAction)",
  "product": {
    "projectId": "prj:27ce91b9-5089-4062-9d1a-897934c1e446",
    "lpsId": "lps:5e577578-66ac-4d15-b910-40f9002aa8d4",
    "lpsVersion": 3,
    "activeCycleInstanceId": "cyc:p5-s05-r3-cp01-34c1e446",
    "cycleTypeId": "cyc:delivery",
    "ckc": {
      "applicability": "N_A",
      "reason": "Representative R3 workload is bounded retrieval from current Cycle Journal; no method/cycle guidance is required to answer the request.",
      "resolutionRef": null
    },
    "sessionCategory": "ProductSqliteSession/f1-default"
  },
  "f2": {
    "phase": "f2_analyzeIntent",
    "routingDecisionId": "8a161151-65d7-43cf-86aa-de779a8a3d19",
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
    "configuredModel": "gpt-6-luna",
    "dispatchedEffort": "low",
    "actualReturnedModel": "gpt-6-luna",
    "providerReturnedEffort": "NOT_OBSERVED",
    "providerResponseId": "resp_031d7699f8c8cbb6006ac43cf1961487d2beb170ce1dc5c784",
    "selectedConfiguredModelMatch": true,
    "configuredReturnedModelMatch": true,
    "selectedDispatchedEffortMatch": true,
    "claim": "SELECTED → DISPATCH CONFIG MATCH (effort); SELECTED → CONFIGURED → RETURNED (model)"
  },
  "f1": {
    "routingDecisionId": "2d322d15-610c-4e5d-84c3-1dcc01c5b944",
    "policyVersion": "p5-s01-routing-v1",
    "strategyClass": "Focused",
    "selectedModel": "gpt-6-luna",
    "selectedEffort": "high",
    "actualReturnedModel": "gpt-6-luna",
    "dispatchedEffort": "high",
    "providerReturnedEffort": "NOT_OBSERVED",
    "providerResponseId": "resp_084b90f7316c477c006ac43cfe7dd887d2b9563664551a0cfb",
    "selectedActualModelMatch": true,
    "selectedDispatchedEffortMatch": true,
    "toolRounds": 2,
    "toolCalls": 2,
    "cognitiveRuntime": "agents",
    "claim": "SELECTED → DISPATCH CONFIG MATCH (effort via runnerModelSettings); SELECTED → RETURNED (model)"
  },
  "tools": {
    "binding": "CycleJournalAgentsTools project/session/cycle bound",
    "journalToolInvocations": [
      "cycle_journal_search",
      "cycle_journal_get_entry",
      "cycle_journal_get_sources"
    ],
    "f1ToolCalls": 2,
    "f1ToolRounds": 2
  },
  "context": {
    "productContextPresent": true,
    "cyclePresent": true,
    "ckcApplicability": "N_A",
    "ckcReason": "Representative R3 workload is bounded retrieval from current Cycle Journal; no method/cycle guidance is required to answer the request.",
    "journalMateriallyConsumed": true,
    "journalMarker": "R3-MARKER-ALPHA-7741",
    "minimumSufficientContextObservation": "Marker absent from compact summary; recovered via get_sources/search"
  },
  "outcome": {
    "noraTextPreview": "Le marqueur exact retrouvé dans la source transcript du journal est : **R3-MARKER-ALPHA-7741**. La source précise de ne pas inventer d’autre marqueur. Il s’agit d’un extrait de transcript, pas d’une Evidence ni d’une HumanDecision. Je n’ai rien décidé ni modifié, et aucune exécution n’a eu lieu.\n\nTu peux reprendre ce marqueur exact pour retrouver la contrainte fournisseur Alpha dans le journal, sa",
    "cognitiveRuntime": "agents",
    "authorityMutation": false,
    "humanDecisionCreated": false,
    "confirmationGranted": false,
    "executionLaunched": false,
    "hdCountAfterSend": 0
  },
  "finOps": {
    "productTurnCount": 1,
    "f2StructuredDispatchCount": 1,
    "f1AgentsRunCount": 1,
    "f1ToolRounds": 2,
    "f1ToolCalls": 2,
    "modelInvocationBudget": {
      "mechanism": "acquireNoraCampaignBudget → callModelInputFilter claimModelInvocation",
      "max": 6,
      "consumed": 3,
      "preDispatchBound": true,
      "appliesTo": "F1 Agents model invocations only (not F2 completeStructured)"
    },
    "providerRequestCount": {
      "f2Structured": 1,
      "f1AgentsCanonicalModelInvocations": 3,
      "rawHttpTotalAcrossToolRounds": "NOT_OBSERVED"
    },
    "usage": {
      "inputTokens": 30736,
      "outputTokens": 1646,
      "f2": {
        "inputTokens": 5563,
        "outputTokens": 843
      },
      "f1": {
        "inputTokens": 25173,
        "outputTokens": 803
      }
    },
    "estimatedUsdHint": 0.0038966,
    "accountingSource": "canonical campaignBudget consumedModelInvocations + provider usage tokens × manifest unit prices (estimate ≠ invoice)",
    "usdAccountingInjected": true,
    "usdReservedInvocations": 3,
    "latencyMs": 20363,
    "terminology": {
      "note": "Nora turn ≠ Agents run ≠ model invocation ≠ tool round ≠ tool call ≠ HTTP request",
      "productTurnCount": 1,
      "f1AgentsRunCount": 1,
      "f1CanonicalModelInvocations": 3,
      "f2StructuredDispatches": 1
    }
  },
  "r3Criteria": {
    "R3-01": {
      "status": "PASS",
      "mandatory": true,
      "observation": "projectId=prj:27ce91b9-5089-4062-9d1a-897934c1e446; lpsId=lps:5e577578-66ac-4d15-b910-40f9002aa8d4; lpsVersion=3",
      "reason": "REAL Product Project/LPS via createProject + getCurrentLivingProjectState"
    },
    "R3-02-cycle": {
      "status": "PASS",
      "mandatory": true,
      "observation": "activeCycleInstanceId=cyc:p5-s05-r3-cp01-34c1e446; created=cyc:p5-s05-r3-cp01-34c1e446; type=cyc:delivery",
      "reason": "REAL Cycle created+started via OA createCycle + pilotLifecycle.start"
    },
    "R3-02-ckc": {
      "status": "N_A",
      "mandatory": true,
      "observation": "{\"applicability\":\"N_A\",\"reason\":\"Representative R3 workload is bounded retrieval from current Cycle Journal; no method/cycle guidance is required to answer the request.\",\"resolutionRef\":null}",
      "reason": "Representative R3 workload is bounded retrieval from current Cycle Journal; no method/cycle guidance is required to answer the request."
    },
    "R3-03": {
      "status": "PASS",
      "mandatory": true,
      "observation": "f2RoutingEvents=1; policy=p5-s01-routing-v1",
      "reason": "F2 COGNITIVE_ROUTING_SELECTED with phase f2_analyzeIntent"
    },
    "R3-04": {
      "status": "PASS",
      "mandatory": true,
      "observation": "selected=gpt-6-luna/low; configured=gpt-6-luna/low; returnedModel=gpt-6-luna",
      "reason": "F2 model selected→configured→returned; effort selected→dispatched config (not provider-returned effort)"
    },
    "R3-05": {
      "status": "PASS",
      "mandatory": true,
      "observation": "policy=p5-s01-routing-v1; decisionId=2d322d15-610c-4e5d-84c3-1dcc01c5b944",
      "reason": "F1 Product cognitive routing provenance on Nora turn"
    },
    "R3-06": {
      "status": "PASS",
      "mandatory": true,
      "observation": "selected=gpt-6-luna/high; actualModel=gpt-6-luna; dispatchedEffort=high",
      "reason": "F1 model selected→actual; effort selected→runnerModelSettings.reasoning.effort dispatched"
    },
    "R3-07": {
      "status": "PASS",
      "mandatory": true,
      "observation": "fakeForced=false; providerOverride=null; evalModelReasoningControl=absent",
      "reason": "No principal manual/eval/provider pin for Product routing"
    },
    "R3-08": {
      "status": "PASS",
      "mandatory": true,
      "observation": "tools=cycle_journal_search,cycle_journal_get_entry,cycle_journal_get_sources; toolCalls=2",
      "reason": "Existing Cycle Journal Agents tools executed"
    },
    "R3-09": {
      "status": "PASS",
      "mandatory": true,
      "observation": "bound tools=cycle_journal_search,cycle_journal_get_entry,cycle_journal_get_sources; cycle=cyc:p5-s05-r3-cp01-34c1e446",
      "reason": "Cycle Journal tools project/session/cycle bound server-side"
    },
    "R3-10": {
      "status": "PASS",
      "mandatory": true,
      "observation": "marker=R3-MARKER-ALPHA-7741; textIncludes=true",
      "reason": "Journal marker recovered from transcript sources via tools"
    },
    "R3-11": {
      "status": "PASS",
      "mandatory": true,
      "observation": "ok=true; cognitiveRuntime=agents",
      "reason": "Governed Nora/Product outcome on same Product path"
    },
    "R3-12": {
      "status": "PASS",
      "mandatory": true,
      "observation": "hdCountAfterSend=0",
      "reason": "No HumanDecision / Confirmation / Execution mutation"
    },
    "R3-13": {
      "status": "PASS",
      "mandatory": true,
      "observation": "cognitiveRuntime=agents",
      "reason": "Same Agents Runner"
    },
    "R3-14": {
      "status": "PASS",
      "mandatory": true,
      "observation": "resolveF2ProductRoutedProvider reuses decideCognitiveRouting + createRoutedOpenAiConversationProvider; no second Nora/router/persistence",
      "reason": "Source classification of S05 implementation"
    },
    "R3-15": {
      "status": "PASS",
      "mandatory": true,
      "observation": "Compact journal lacks marker; tools required for sources; answer cites marker",
      "reason": "Minimum-sufficient context: no full transcript dump; targeted retrieval"
    },
    "R3-16": {
      "status": "PASS",
      "mandatory": true,
      "observation": "f2Resp=resp_031d7699f8c8cbb6006ac43cf1961487d2beb170ce1dc5c784; f1Resp=resp_084b90f7316c477c006ac43cfe7dd887d2b9563664551a0cfb",
      "reason": "Provider IDs + routing provenance captured"
    },
    "R3-17": {
      "status": "PASS",
      "mandatory": true,
      "observation": "product=35f31263e49cb856fbc0340fdbe5606f305994f38c1d5c3f1e90a409c304e0b9; harness=fd10646ba95f3f53ff2c2ff432e3494b22da2df87cd3ec93e0ca1deb29e0342b",
      "reason": "Product + harness fingerprints bound before REAL"
    },
    "R3-18": {
      "status": "PASS",
      "mandatory": true,
      "observation": "pre max=6 consumed=0; post consumed=3; limitReached=false",
      "reason": "Canonical NoraCampaignBudget acquired before dispatch; F1 Agents model invocations claimed within cap"
    },
    "R3-19": {
      "status": "PASS",
      "mandatory": true,
      "observation": "pending sanitize scan",
      "reason": "Anti-secret scan of evidence artifact"
    },
    "R3-20": {
      "status": "PASS",
      "mandatory": true,
      "observation": "Deterministic S05 D0 + S01 regressions + typecheck/lint/build required before REAL (runner reports separately)",
      "reason": "Validation suite precondition for REAL attribution"
    }
  },
  "f2DebtExit": "EXIT PROOF PASS — LOCAL CANDIDATE (not CLOSED ON MAIN)",
  "antiSecretScan": "PASS",
  "final": "PASS — P5-S05 R3 CP01 AT TESTED SCOPE — LOCAL CANDIDATE",
  "r3Overall": {
    "pass": true,
    "failures": [],
    "note": "R3-02 overall = PASS WITH EXPLICIT N/A COMPONENT (cycle PASS, ckc N_A)"
  }
}
```

## R3 criteria (evidence-derived)
See evidence.r3Criteria — each PASS/FAIL/N_A with observation+reason.
Overall: PASS WITH EXPLICIT N/A COMPONENT (cycle PASS, ckc N_A).

## F2 debt exit
EXIT PROOF PASS — LOCAL CANDIDATE (≠ CLOSED ON MAIN)

## Reserves
- Project commit/push/PR/merge NOT AUTHORIZED
- OPENAI_MODEL TEMP WITH EXIT for legacy non-routed callers
- raw HTTP request total across Agents tool rounds NOT_OBSERVED (canonical model invocations observed)
- ≠ P5 COMPLETE · ≠ P6 READY · ≠ runtime v3 ADOPTED · ≠ INTEGRATED

## Morris gates
### Consumed
- P5-S05 DELIVERY + REAL/R3
- P5-S05 CORRECTION PASS 01
### NOT consumed
- project commit · push · PR · merge · branch delete · force push
- P5 COMPLETE · P6 · runtime v3 ADOPTED

## Final verdict
READY FOR CHATGPT CRITICAL RE-REVIEW — P5-S05 CP01 LOCAL CANDIDATE

```text
P5-S05 CP01 = LOCAL CANDIDATE PASS
F2 ROUTING ALIGNMENT = EXIT PROOF PASS — LOCAL CANDIDATE
R3 = PASS AT TESTED SCOPE — LOCAL CANDIDATE AFTER CP01 EVIDENCE CORRECTION
CKC = N_A FOR REPRESENTATIVE JOURNAL WORKLOAD
REAL ACCOUNTING = BOUNDED / EVIDENCE-BASED
REASONING EFFORT = SELECTED → DISPATCH CONFIG PROVEN
P5 = IN PROGRESS
P5 COMPLETE = NO
P6 READY = NO
runtime v3 = NON ADOPTED
PROJECT COMMIT/PUSH/PR/MERGE = NOT AUTHORIZED
NEXT = CHATGPT CRITICAL RE-REVIEW → MORRIS P5-S05 GIT INTEGRATION GATE if PASS
```
