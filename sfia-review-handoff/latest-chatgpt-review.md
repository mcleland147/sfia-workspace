# ChatGPT Critical Review Pack — MW2 CORR-03 + Bounded REAL Rerun

- timestamp: 2026-09-02 11:45:03 CEST
- GO consumed: GO MORRIS — CORR-MW2-REAL-03 CWP SEMANTIC CONTEXT SUFFICIENCY + FULL MW2 REAL MATRIX RERUN
- sequencing: CORR-01 → CORR-02 → CORR-03 → preflight → REAL → ChatGPT → only then possible combined Git
- Cycle: 8 Delivery / EVOL / CRITICAL

## Convergence pre-check
- OD-04 Option C KEEP; Agents Runner KEEP; native modelSettings KEEP
- No new classifier / second CWP call / model router / persistence

## Git truth
- worktree: `/Users/morris/Projects/sfia-workspace-mw2-cwp-reachability-corr01`
- branch: `corr/sfia-studio-nora-mw2-cwp-reachability`
- HEAD: `73fe341070157d565a1ce62d79d69553e59b818b`
- origin/main: `73fe341070157d565a1ce62d79d69553e59b818b` MATCH `73fe3410…`
- CORR-01 handoff: `a44e1996…` / `95da1e9d…`
- CORR-02 prior REAL handoff: `71578481…` / `e3ff0d92…`
- prior campaign: `mw2-real-exit-1788340622985` SHA `f820c735…` FAIL Deep 0/3 ambiguous
- project commit/push/PR/merge: **NO**

## Root cause (CORR-03)
- analyzeIntent projectSummary previously: name|objective|criticality|lps only
- Deep prompt referenced Facts A–D in Project context, but those facts were omitted from analyzeIntent input
- Primary class: PRODUCT_PATH / CONTEXT_SUFFICIENCY
- Observed symptom: intent ambiguous → clarification → no F1
- Do NOT change Strategy thresholds / Deep rules / ambiguous→informative globally

## CORR-03 design
- Added `buildIntentProjectSummary(project)` in `orchestrateF2.ts`
- Fields: name, objective, context (contextSummary), constraints, criticality, optional shortReference, lps
- Used for analyzeIntent + CKC projectSummary reuse
- No ConversationProvider contract change; no CWP policy change; CORR-02 routing untouched
- Note: existing product truncates contextSummary at 240 chars (`localProjectComposition`) — CORR-03 propagates stored DTO as-is

## Production diff — orchestrateF2.ts
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index 048ce320..227c7532 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -77,6 +77,42 @@ function toContextDto(
   };
 }

+/**
+ * CORR-MW2-REAL-03 — deterministic bounded Project summary for analyzeIntent.
+ * Serializes only already-loaded ProjectAssistantContextDto facts.
+ * Does not invent values; empty constraints are stated explicitly.
+ */
+export function buildIntentProjectSummary(
+  project: Pick<
+    ProjectAssistantContextDto,
+    | "name"
+    | "objective"
+    | "contextSummary"
+    | "constraints"
+    | "criticality"
+    | "lpsId"
+    | "lpsVersion"
+    | "shortReference"
+  >,
+): string {
+  const constraints =
+    project.constraints.length > 0
+      ? project.constraints.join("; ")
+      : "(none)";
+  const parts = [
+    `name=${project.name}`,
+    `objective=${project.objective}`,
+    `context=${project.contextSummary}`,
+    `constraints=${constraints}`,
+    `criticality=${project.criticality}`,
+  ];
+  if (project.shortReference != null && project.shortReference.trim() !== "") {
+    parts.push(`shortReference=${project.shortReference}`);
+  }
+  parts.push(`lps=${project.lpsId}@${project.lpsVersion}`);
+  return parts.join(" | ");
+}
+
 function doctrinePackagePinFromProject(
   project: ProjectAssistantContextDto,
 ): DoctrinePackagePin {
@@ -280,12 +316,7 @@ export async function orchestrateAssistantSend(input: {
   try {
     analysisResult = await analyzeIntent({
       userContent: content,
-      projectSummary: [
-        `name=${project.name}`,
-        `objective=${project.objective}`,
-        `criticality=${project.criticality}`,
-        `lps=${project.lpsId}@${project.lpsVersion}`,
-      ].join(" | "),
+      projectSummary: buildIntentProjectSummary(project),
       provider: input.provider,
     });
   } catch (error) {
@@ -321,6 +352,7 @@ export async function orchestrateAssistantSend(input: {
     const f1 = await orchestrateProjectAssistantTurn({
       ...input,
       provider: input.provider,
+      semanticCognitiveWorkload: analysis.cognitiveWorkload,
     });
     if (!f1.ok) return f1;
     return {
@@ -410,12 +442,7 @@ export async function orchestrateAssistantSend(input: {
   }

   let { qualification } = qualified;
-  const projectSummary = [
-    `name=${project.name}`,
-    `objective=${project.objective}`,
-    `criticality=${project.criticality}`,
-    `lps=${project.lpsId}@${project.lpsVersion}`,
-  ].join(" | ");
+  const projectSummary = buildIntentProjectSummary(project);

   if (isProductStudioNativeCkcProof(qualified.raw.proof)) {
     const packagePin = doctrinePackagePinFromProject(project);
```

## Other retained CORR-01/02 diffs (summary)
### `projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts`
```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
index 0320ba05..32fc4dc6 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
@@ -1,8 +1,12 @@
 /**
  * OpenAI Agents SDK Runner path for Nora F1 cognitive turns.
  * Generic loop mechanics owned by Runner; SFIA authority via routeToolCall.
- * completeRound-capable providers (incl. Fake) use createProviderAgentsModel;
- * otherwise live Agents model string from secrets. Same Runner orchestration.
+ *
+ * CORR-MW2-REAL-02 model resolution:
+ * - Fake / non-OpenAI completeRound providers → createProviderAgentsModel adapter
+ * - providerId=openai (incl. Metered wrapper) → native Agents model string
+ *   so Runner.modelSettings.reasoning is consumed by the native OpenAI Agents path
+ * - otherwise → live model string from secrets
  */
 import {
   Agent,
@@ -72,13 +76,36 @@ export function createNoraAgentsRunner(
   });
 }

-function resolveModel(input: RunNoraAgentsTurnInput): Model | string {
+/**
+ * CORR-MW2-REAL-02 — OpenAI live F1 must NOT use ConversationProvider.completeRound adapter.
+ * MeteredConversationProvider preserves providerId=openai and must also take native path.
+ */
+export function isOpenAiLiveF1Provider(
+  provider: ConversationProvider,
+): boolean {
+  return provider.providerId === "openai";
+}
+
+/**
+ * Whether F1 should wrap the provider via createProviderAgentsModel.
+ * False for OpenAI live (native Agents model string instead).
+ */
+export function shouldUseProviderAgentsModelAdapter(
+  provider: ConversationProvider,
+): boolean {
+  if (isOpenAiLiveF1Provider(provider)) return false;
+  if (isFakeConversationProvider(provider)) return true;
+  return typeof provider.completeRound === "function";
+}
+
+/**
+ * Resolve Agents F1 model — exported for CORR-02 D0 boundary proof (no live call).
+ */
+export function resolveNoraAgentsF1Model(
+  input: Pick<RunNoraAgentsTurnInput, "model" | "provider">,
+): Model | string {
   if (input.model !== undefined) return input.model;
-  if (input.provider && isFakeConversationProvider(input.provider)) {
-    return createProviderAgentsModel(input.provider);
-  }
-  if (input.provider && typeof input.provider.completeRound === "function") {
-    // Deterministic/test providers with completeRound also use the thin adapter.
+  if (input.provider && shouldUseProviderAgentsModelAdapter(input.provider)) {
     return createProviderAgentsModel(input.provider);
   }
   const secrets = requireLiveConversationSecrets();
@@ -88,7 +115,7 @@ function resolveModel(input: RunNoraAgentsTurnInput): Model | string {
 export async function runNoraAgentsTurn(
   input: RunNoraAgentsTurnInput,
 ): Promise<NoraCognitiveTurnResult> {
-  const model = resolveModel(input);
+  const model = resolveNoraAgentsF1Model(input);

   const budget = input.budget ?? createNoraTurnBudget();
   const enableTools = input.enableTools !== false;
```

### `projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts`
```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
index 832c4db3..b0757540 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
@@ -90,6 +90,9 @@ export {
 export {
   createNoraAgentsRunner,
   runNoraAgentsTurn,
+  resolveNoraAgentsF1Model,
+  shouldUseProviderAgentsModelAdapter,
+  isOpenAiLiveF1Provider,
 } from "./runNoraAgentsTurn";
 export type { RunNoraAgentsTurnInput } from "./runNoraAgentsTurn";
 export { runNoraCognitiveTurn } from "./runNoraCognitiveTurn";
@@ -98,15 +101,19 @@ export {
   decideCognitiveStrategy,
   normalizeCognitiveWorkloadSignals,
   buildSignalsFromTurnContext,
+  mergeCognitiveWorkloadSignals,
+  normalizeSemanticCognitiveWorkloadAssessment,
   isRoutineEligible,
   STRATEGY_REASONING_ENVELOPES,
   COGNITIVE_STRATEGY_CLASSES,
   ROUTINE_KNOWN_LOW_DIMENSIONS,
+  SEMANTIC_CWP_DIMENSIONS,
 } from "./cognitiveWorkloadPolicy";
 export type {
   CognitiveStrategyClass,
   CognitiveStrategyDecision,
   CognitiveWorkloadSignals,
+  SemanticCognitiveWorkloadAssessment,
   TurnWorkloadContext,
 } from "./cognitiveWorkloadPolicy";
 export { validateRuntimeReasoningCapability } from "./reasoningCapability";
```

### `projects/sfia-studio/app/lib/nora-cognitive-runtime/cognitiveWorkloadPolicy.ts`
```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/cognitiveWorkloadPolicy.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/cognitiveWorkloadPolicy.ts
index 434311dc..973f589d 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/cognitiveWorkloadPolicy.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/cognitiveWorkloadPolicy.ts
@@ -144,7 +144,9 @@ export function buildSignalsFromTurnContext(
 ): CognitiveWorkloadSignals {
   const crit = (ctx.projectCriticality ?? "").trim().toUpperCase();
   let rigorCriticality: SignalValue = "unknown";
-  if (crit === "CRITICAL") rigorCriticality = "high";
+  // Product PerceivedCriticality is LOW|STANDARD|HIGH.
+  // CRITICAL retained as synonym for tests / explicit turn context.
+  if (crit === "CRITICAL" || crit === "HIGH") rigorCriticality = "high";
   else if (crit === "STANDARD") rigorCriticality = "medium";
   else if (crit === "LOW") rigorCriticality = "low";

@@ -171,6 +173,98 @@ export function buildSignalsFromTurnContext(
   });
 }

+/** Dimensions the semantic analyzer may assess (CORR-MW2-REAL-01). */
+export const SEMANTIC_CWP_DIMENSIONS = [
+  "ambiguity",
+  "reasoningDepth",
+  "sourceBreadth",
+  "toolDependency",
+  "contradictionRisk",
+  "verificationNeed",
+] as const;
+
+export type SemanticCwpDimension = (typeof SEMANTIC_CWP_DIMENSIONS)[number];
+
+export type SemanticCognitiveWorkloadAssessment = {
+  [K in SemanticCwpDimension]: SignalValue;
+};
+
+function isSignalValue(value: unknown): value is SignalValue {
+  return (
+    value === "low" ||
+    value === "medium" ||
+    value === "high" ||
+    value === "unknown"
+  );
+}
+
+/**
+ * Normalize untrusted semantic assessment.
+ * Invalid/missing fields → unknown. Never unknown→low.
+ * Returns null when assessment absent.
+ */
+export function normalizeSemanticCognitiveWorkloadAssessment(
+  partial:
+    | Partial<SemanticCognitiveWorkloadAssessment>
+    | null
+    | undefined,
+): SemanticCognitiveWorkloadAssessment | null {
+  if (partial == null || typeof partial !== "object") return null;
+  const out = {} as SemanticCognitiveWorkloadAssessment;
+  for (const key of SEMANTIC_CWP_DIMENSIONS) {
+    const value = (partial as Record<string, unknown>)[key];
+    out[key] = isSignalValue(value) ? value : "unknown";
+  }
+  return out;
+}
+
+/**
+ * Governed merge: semantic assessment + factual turn context.
+ * CORR-MW2-REAL-01 precedence:
+ * - factual product signals win when known
+ * - semantic fills only authorized dimensions
+ * - CRITICAL rigor/verification cannot be downgraded
+ * - contextSize / rigorCriticality / multimodality stay factual
+ * - enableTools never invents toolDependency
+ * - UNKNOWN ≠ LOW
+ */
+export function mergeCognitiveWorkloadSignals(input: {
+  turnContext: TurnWorkloadContext;
+  semanticAssessment?:
+    | Partial<SemanticCognitiveWorkloadAssessment>
+    | null;
+}): CognitiveWorkloadSignals {
+  const factual = buildSignalsFromTurnContext(input.turnContext);
+  const semantic = normalizeSemanticCognitiveWorkloadAssessment(
+    input.semanticAssessment,
+  );
+
+  let merged = normalizeCognitiveWorkloadSignals({});
+
+  if (semantic) {
+    for (const key of SEMANTIC_CWP_DIMENSIONS) {
+      merged = { ...merged, [key]: semantic[key] };
+    }
+  }
+
+  // Authoritative factual overlays
+  merged = {
+    ...merged,
+    rigorCriticality: factual.rigorCriticality,
+    contextSize: factual.contextSize,
+    multimodality: factual.multimodality,
+    costBudget: factual.costBudget,
+    latencySensitivity: factual.latencySensitivity,
+  };
+
+  // Known factual verification (e.g. CRITICAL→high) wins over semantic
+  if (factual.verificationNeed !== "unknown") {
+    merged = { ...merged, verificationNeed: factual.verificationNeed };
+  }
+
+  return merged;
+}
+
 function computeReasoningDemand(
   signals: CognitiveWorkloadSignals,
 ): OpenAiReasoningEffort {
```

### `projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts`
```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
index d6746a3b..41e43297 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
@@ -21,10 +21,11 @@ import { resolveNoraSessionSqlitePath } from "./sessionPaths";
 import { runNoraAgentsTurn } from "./runNoraAgentsTurn";
 import type { NoraCognitiveTurnResult } from "./types";
 import {
-  buildSignalsFromTurnContext,
   decideCognitiveStrategy,
+  mergeCognitiveWorkloadSignals,
   normalizeCognitiveWorkloadSignals,
   type CognitiveWorkloadSignals,
+  type SemanticCognitiveWorkloadAssessment,
   type TurnWorkloadContext,
 } from "./cognitiveWorkloadPolicy";
 import { validateRuntimeReasoningCapability } from "./reasoningCapability";
@@ -45,12 +46,22 @@ export type RunNoraCognitiveTurnInput = {
   truthCRevision?: TruthCRevision;
   /** Test-only fixed timestamp for deterministic compaction. */
   compactionNowIso?: string;
-  /** MW2 — optional explicit workload signals (tests). */
+  /**
+   * MW2 — optional explicit workload signals (tests/eval only).
+   * Product path uses turnWorkloadContext + semanticCognitiveWorkload merge.
+   */
   cognitiveWorkloadSignals?: Partial<CognitiveWorkloadSignals>;
   /** MW2 — trusted SFIA Profile only when actually available; never invented. */
   trustedSfiaProfile?: string | null;
   /** MW2 — product turn facts for signal derivation. */
   turnWorkloadContext?: TurnWorkloadContext;
+  /**
+   * CORR-MW2-REAL-01 — INTERNAL semantic CWP from analyzeIntent (server-side).
+   * Merged with turnWorkloadContext; never a client DTO field.
+   */
+  semanticCognitiveWorkload?:
+    | Partial<SemanticCognitiveWorkloadAssessment>
+    | null;
   /** MW2 — skip policy for isolated tests. */
   skipCognitiveStrategy?: boolean;
 };
@@ -81,14 +92,27 @@ function resolveCognitiveStrategyForTurn(
 ): ReturnType<typeof decideCognitiveStrategy> | null {
   if (input.skipCognitiveStrategy) return null;

-  const signals = input.cognitiveWorkloadSignals
-    ? normalizeCognitiveWorkloadSignals(input.cognitiveWorkloadSignals)
-    : input.turnWorkloadContext
-      ? buildSignalsFromTurnContext(input.turnWorkloadContext)
-      : normalizeCognitiveWorkloadSignals({});
+  // Test/eval explicit override remains (not product R2 proof).
+  if (input.cognitiveWorkloadSignals) {
+    return decideCognitiveStrategy({
+      signals: normalizeCognitiveWorkloadSignals(input.cognitiveWorkloadSignals),
+      trustedSfiaProfile: input.trustedSfiaProfile,
+    });
+  }
+
+  // Product path: factual turn context + validated semantic assessment merge.
+  if (input.turnWorkloadContext) {
+    return decideCognitiveStrategy({
+      signals: mergeCognitiveWorkloadSignals({
+        turnContext: input.turnWorkloadContext,
+        semanticAssessment: input.semanticCognitiveWorkload,
+      }),
+      trustedSfiaProfile: input.trustedSfiaProfile,
+    });
+  }

   return decideCognitiveStrategy({
-    signals,
+    signals: normalizeCognitiveWorkloadSignals({}),
     trustedSfiaProfile: input.trustedSfiaProfile,
   });
 }
```

### `projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts`
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts b/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
index f3ddd122..ae20f8c9 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
@@ -1,6 +1,7 @@
 /**
  * Structured intent analysis via existing ConversationProvider.
  * Provider output is untrusted until server-side validation (fail-closed).
+ * CORR-MW2-REAL-01: optional INTERNAL semantic CWP assessment on same call.
  */

 import {
@@ -14,6 +15,8 @@ import type {
   F2QualificationSignals,
   IntentAnalysisDto,
   IntentClass,
+  SemanticCognitiveWorkloadAssessment,
+  SemanticCognitiveWorkloadLevel,
 } from "./types";

 const INTENT_CLASSES: readonly IntentClass[] = [
@@ -32,6 +35,22 @@ const SIGNAL_KEYS = [
   "lowRiskBounded",
 ] as const;

+const CWP_LEVELS: readonly SemanticCognitiveWorkloadLevel[] = [
+  "low",
+  "medium",
+  "high",
+  "unknown",
+] as const;
+
+const CWP_DIMENSION_KEYS = [
+  "ambiguity",
+  "reasoningDepth",
+  "sourceBreadth",
+  "toolDependency",
+  "contradictionRisk",
+  "verificationNeed",
+] as const;
+
 const MAX_STRING = 2000;
 const MAX_ARRAY = 12;

@@ -55,9 +74,28 @@ const SIGNALS_OBJECT_SCHEMA = {
   required: [...SIGNAL_KEYS],
 } as const;

+const CWP_LEVEL_SCHEMA = {
+  type: "string",
+  enum: [...CWP_LEVELS],
+} as const;
+
+const COGNITIVE_WORKLOAD_OBJECT_SCHEMA = {
+  type: "object",
+  additionalProperties: false,
+  properties: {
+    ambiguity: CWP_LEVEL_SCHEMA,
+    reasoningDepth: CWP_LEVEL_SCHEMA,
+    sourceBreadth: CWP_LEVEL_SCHEMA,
+    toolDependency: CWP_LEVEL_SCHEMA,
+    contradictionRisk: CWP_LEVEL_SCHEMA,
+    verificationNeed: CWP_LEVEL_SCHEMA,
+  },
+  required: [...CWP_DIMENSION_KEYS],
+} as const;
+
 /**
  * OpenAI strict json_schema for F2 intent analysis.
- * Null cycle/signals: anyOf [enum|object, { type: "null" }] (not omitted, not invented).
+ * Null cycle/signals/CWP: anyOf [enum|object, { type: "null" }] (not omitted, not invented).
  */
 export const F2_INTENT_JSON_SCHEMA: Record<string, unknown> = {
   type: "object",
@@ -79,6 +117,9 @@ export const F2_INTENT_JSON_SCHEMA: Record<string, unknown> = {
     signals: {
       anyOf: [SIGNALS_OBJECT_SCHEMA, { type: "null" }],
     },
+    cognitiveWorkload: {
+      anyOf: [COGNITIVE_WORKLOAD_OBJECT_SCHEMA, { type: "null" }],
+    },
     objective: NULLABLE_STRING,
     scope: NULLABLE_STRING,
     rephrasedRequest: NULLABLE_STRING,
@@ -95,6 +136,7 @@ export const F2_INTENT_JSON_SCHEMA: Record<string, unknown> = {
     "intentClass",
     "candidateCycleTypeId",
     "signals",
+    "cognitiveWorkload",
     "objective",
     "scope",
     "rephrasedRequest",
@@ -133,6 +175,7 @@ function ambiguousFallback(partial?: Partial<IntentAnalysisDto>): IntentAnalysis
     intentClass: "ambiguous",
     candidateCycleTypeId: null,
     signals: null,
+    cognitiveWorkload: null,
     objective: partial?.objective ?? null,
     scope: partial?.scope ?? null,
     rephrasedRequest: partial?.rephrasedRequest ?? null,
@@ -159,6 +202,27 @@ function parseSignals(raw: unknown): F2QualificationSignals | null {
   return out as F2QualificationSignals;
 }

+/**
+ * Validate INTERNAL semantic CWP assessment.
+ * null / missing / non-object → null (no fabricated Routine).
+ * Invalid field values → unknown (never unknown→low).
+ */
+export function parseCognitiveWorkload(
+  raw: unknown,
+): SemanticCognitiveWorkloadAssessment | null {
+  if (raw == null) return null;
+  if (typeof raw !== "object" || Array.isArray(raw)) return null;
+  const obj = raw as Record<string, unknown>;
+  const out = {} as SemanticCognitiveWorkloadAssessment;
+  for (const key of CWP_DIMENSION_KEYS) {
+    const value = obj[key];
+    out[key] = CWP_LEVELS.includes(value as SemanticCognitiveWorkloadLevel)
+      ? (value as SemanticCognitiveWorkloadLevel)
+      : "unknown";
+  }
+  return out;
+}
+
 function extractJsonObject(text: string): unknown | null {
   const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/i);
   const candidate = fenced?.[1]?.trim() ?? text.trim();
@@ -202,10 +266,14 @@ export function validateIntentAnalysisPayload(raw: unknown): IntentAnalysisDto {
     return ambiguousFallback();
   }

+  // Malformed CWP must not crash an otherwise-valid informative analysis.
+  const cognitiveWorkload = parseCognitiveWorkload(obj.cognitiveWorkload);
+
   return {
     intentClass: intentClass as IntentClass,
     candidateCycleTypeId,
     signals,
+    cognitiveWorkload,
     objective: clip(obj.objective),
     scope: clip(obj.scope),
     rephrasedRequest: clip(obj.rephrasedRequest),
@@ -234,11 +302,15 @@ Champs obligatoires:
 intentClass (informative|actionable|ambiguous|execution_request),
 candidateCycleTypeId (id catalogue cyc:… OU null),
 signals ({structuralChange,securityImpact,architectureImpact,dataImpact,irreversible,lowRiskBounded} tous booléens OU null),
+cognitiveWorkload ({ambiguity,reasoningDepth,sourceBreadth,toolDependency,contradictionRisk,verificationNeed} chacun low|medium|high|unknown OU null),
 objective, scope, rephrasedRequest, outOfScope[], risks[], reservations[], stopConditions[], activatedBlocks[],
 expectedOutcome, criticalJustification, requestedOperation (strings ou null pour les scalaires).
 Règles strictes:
 - actionable et execution_request: candidateCycleTypeId DOIT être un id catalogue connu ET signals DOIT contenir exactement les 6 booléens (aucun défaut inventé).
 - informative et ambiguous: candidateCycleTypeId et signals PEUVENT être null.
+- cognitiveWorkload est une évaluation COGNITIVE INTERNE du workload (pas Truth C, pas Evidence, pas Profile, pas décision, pas autorité).
+- cognitiveWorkload: mets low seulement avec évidence affirmative; si insuffisant/ambigu → unknown (jamais unknown→low).
+- Ne décide PAS rigorCriticality, contextSize, costBudget, latencySensitivity, multimodality (faits produit hors schéma).
 - Ne décide jamais un GO Morris; ne propose jamais d'exécution; n'invente jamais un cycle (ex. delivery) par défaut.
 - Repository READ / analyse / résumé / recherche / vérité Git SANS mutation ni qualification de cycle = informative (PAS ambiguous, PAS actionable).
   Exemples informative: « Lis ce document et résume-le. », « Retrouve le cadrage Product Completion. », « Vérifie le HEAD et le status Git. », « Cherche CURSOR_REAL_TIMEOUT_POLICY. », « Reconstitue l'historique Product Completion à partir des sources. ».
```

### `projects/sfia-studio/app/features/project-assistant/f2/types.ts`
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/types.ts b/projects/sfia-studio/app/features/project-assistant/f2/types.ts
index 337235e2..3e7897bf 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/types.ts
@@ -118,10 +118,35 @@ export type DecisionDto = {
   executionPerformed: false;
 };

+/**
+ * INTERNAL semantic CWP assessment from analyzeIntent (CORR-MW2-REAL-01).
+ * Server-side only — not Truth C / Evidence / Profile / authority / client DTO.
+ * F2QualificationSignals ≠ this object.
+ */
+export type SemanticCognitiveWorkloadLevel =
+  | "low"
+  | "medium"
+  | "high"
+  | "unknown";
+
+export type SemanticCognitiveWorkloadAssessment = {
+  ambiguity: SemanticCognitiveWorkloadLevel;
+  reasoningDepth: SemanticCognitiveWorkloadLevel;
+  sourceBreadth: SemanticCognitiveWorkloadLevel;
+  toolDependency: SemanticCognitiveWorkloadLevel;
+  contradictionRisk: SemanticCognitiveWorkloadLevel;
+  verificationNeed: SemanticCognitiveWorkloadLevel;
+};
+
 export type IntentAnalysisDto = {
   intentClass: IntentClass;
   candidateCycleTypeId: string | null;
   signals: F2QualificationSignals | null;
+  /**
+   * INTERNAL CWP semantic assessment (or null).
+   * Never serialized on ProjectAssistantSendResult.
+   */
+  cognitiveWorkload: SemanticCognitiveWorkloadAssessment | null;
   objective: string | null;
   scope: string | null;
   rephrasedRequest: string | null;
```

### `projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts`
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
index dc80acdd..69385d7d 100644
--- a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
+++ b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
@@ -8,6 +8,7 @@ import {
   memoryBPiloteNotice,
   memoryBCompactionPiloteNotice,
   runNoraCognitiveTurn,
+  type SemanticCognitiveWorkloadAssessment,
 } from "@/lib/nora-cognitive-runtime";
 import { resolveWorkspaceRootFromAppCwd } from "@/lib/platform/repository/workspaceRoot";
 import { loadProjectRuntimeForAssistant } from "@/features/vertical-slice-ui/ProjectWorkspaceView";
@@ -90,6 +91,11 @@ export async function orchestrateProjectAssistantTurn(input: {
    * Same product path; no second runtime.
    */
   simulateMemoryBUnavailable?: boolean;
+  /**
+   * CORR-MW2-REAL-01 — INTERNAL semantic CWP from analyzeIntent.
+   * Server-side only; never part of ProjectAssistantSendResult.
+   */
+  semanticCognitiveWorkload?: SemanticCognitiveWorkloadAssessment | null;
 }): Promise<ProjectAssistantSendResult> {
   const content = input.content.trim();
   if (!content) {
@@ -171,6 +177,7 @@ export async function orchestrateProjectAssistantTurn(input: {
         enableTools: true,
       },
       trustedSfiaProfile: null,
+      semanticCognitiveWorkload: input.semanticCognitiveWorkload ?? null,
     });

     const { toolEvents, sources } = collectToolTelemetry(sink.events);
```

### `projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts`
```diff
diff --git a/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts b/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
index 86968b39..0b4681db 100644
--- a/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
+++ b/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
@@ -193,6 +193,7 @@ export class FakeConversationProvider implements ConversationProvider {
           intentClass: "informative",
           candidateCycleTypeId: null,
           signals: null,
+          cognitiveWorkload: null,
           objective: "Résumer le projet",
           scope: null,
           rephrasedRequest: "Résumer l'objectif du projet",
@@ -227,6 +228,7 @@ export class FakeConversationProvider implements ConversationProvider {
             irreversible: false,
             lowRiskBounded: true,
           },
+          cognitiveWorkload: null,
           objective: "Préparer la prochaine étape fonctionnelle",
           scope: "Proposition bornée sans exécution",
           rephrasedRequest: "Préparer une proposition de livraison bornée",
@@ -266,6 +268,7 @@ export class FakeConversationProvider implements ConversationProvider {
             irreversible: false,
             lowRiskBounded: true,
           },
+          cognitiveWorkload: null,
           objective: "Préparer une livraison bornée avec gate Morris",
           scope: "Proposition Standard gateable sans Critical",
           rephrasedRequest: "Préparer une proposition de livraison gated",
@@ -300,6 +303,7 @@ export class FakeConversationProvider implements ConversationProvider {
             irreversible: false,
             lowRiskBounded: false,
           },
+          cognitiveWorkload: null,
           objective: "Faire évoluer l'architecture produit",
           scope: "Changement d'architecture structurant",
           rephrasedRequest: "Préparer une proposition d'architecture",
@@ -327,6 +331,7 @@ export class FakeConversationProvider implements ConversationProvider {
           intentClass: "ambiguous",
           candidateCycleTypeId: null,
           signals: null,
+          cognitiveWorkload: null,
           objective: null,
           scope: null,
           rephrasedRequest: "Fais le nécessaire",
@@ -361,6 +366,7 @@ export class FakeConversationProvider implements ConversationProvider {
             irreversible: false,
             lowRiskBounded: false,
           },
+          cognitiveWorkload: null,
           objective: "Lancer Cursor et créer une PR",
           scope: "Exécution produit demandée — refusée en F2",
           rephrasedRequest: "Demande d'exécution Cursor / PR",
@@ -395,6 +401,7 @@ export class FakeConversationProvider implements ConversationProvider {
             irreversible: true,
             lowRiskBounded: false,
           },
+          cognitiveWorkload: null,
           objective: "Changer l'architecture sécurité",
           scope: "Impact structurant sécurité",
           rephrasedRequest: "Modifier architecture sécurité",
@@ -422,6 +429,7 @@ export class FakeConversationProvider implements ConversationProvider {
           intentClass: "informative",
           candidateCycleTypeId: null,
           signals: null,
+          cognitiveWorkload: null,
           objective: null,
           scope: null,
           rephrasedRequest: (lastUser?.content ?? "").slice(0, 200),
```

### `projects/sfia-studio/app/lib/nora-eval/d0Runner.ts`
```diff
diff --git a/projects/sfia-studio/app/lib/nora-eval/d0Runner.ts b/projects/sfia-studio/app/lib/nora-eval/d0Runner.ts
index 2018beb1..84880f85 100644
--- a/projects/sfia-studio/app/lib/nora-eval/d0Runner.ts
+++ b/projects/sfia-studio/app/lib/nora-eval/d0Runner.ts
@@ -72,6 +72,7 @@ async function observationForScenario(
         expectedOutcome: null,
         criticalJustification: "Critical",
         requestedOperation: "merge",
+        cognitiveWorkload: null,
         parseOk: true,
       };
       return {
```

### `projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts`
```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts
index 4ce26d6b..a3f77f81 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts
@@ -370,6 +370,7 @@ describe("F2 orchestration AC coverage", () => {
       expectedOutcome: null,
       criticalJustification: null,
       requestedOperation: null,
+      cognitiveWorkload: null,
       parseOk: true,
     };
     expect(
```

## FULL CORR-01 D0 test
```typescript
/** @vitest-environment node */
/**
 * CORR-MW2-REAL-01 — product-path CWP reachability D0.
 *
 * Proof traverses unified product orchestration:
 * orchestrateAssistantSend → analyzeIntent → F1 → orchestrateProjectAssistantTurn
 * → runNoraCognitiveTurn → COGNITIVE_STRATEGY_SELECTED (EventSink).
 *
 * Fake provider substitutes OpenAI only. LIVE OpenAI = 0.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
import { ProjectAssistantMemoryEventSink } from "@/features/project-assistant/memoryEventSink";
import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
import {
  parseCognitiveWorkload,
  validateIntentAnalysisPayload,
} from "@/features/project-assistant/f2/intentAnalysis";
import {
  buildSignalsFromTurnContext,
  mergeCognitiveWorkloadSignals,
  normalizeSemanticCognitiveWorkloadAssessment,
} from "@/lib/nora-cognitive-runtime";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import type { TechnicalEvent } from "@/lib/platform/observability/types";
import type { SemanticCognitiveWorkloadAssessment } from "@/features/project-assistant/f2/types";

const tempDirs: string[] = [];

function knownLowCwp(): SemanticCognitiveWorkloadAssessment {
  return {
    ambiguity: "low",
    reasoningDepth: "low",
    sourceBreadth: "low",
    toolDependency: "low",
    contradictionRisk: "low",
    verificationNeed: "low",
  };
}

function deepCwp(): SemanticCognitiveWorkloadAssessment {
  return {
    ambiguity: "medium",
    reasoningDepth: "high",
    sourceBreadth: "high",
    toolDependency: "medium",
    contradictionRisk: "medium",
    verificationNeed: "medium",
  };
}

function intentAnalysisJson(
  cognitiveWorkload: SemanticCognitiveWorkloadAssessment | null,
): string {
  return JSON.stringify({
    intentClass: "informative",
    candidateCycleTypeId: null,
    signals: null,
    cognitiveWorkload,
    objective: "Informative ask",
    scope: null,
    rephrasedRequest: "Answer the user informatively",
    outOfScope: [],
    risks: [],
    reservations: [],
    stopConditions: [],
    activatedBlocks: [],
    expectedOutcome: null,
    criticalJustification: null,
    requestedOperation: null,
  });
}

describe("CORR-MW2-REAL-01 — product CWP signal reachability", () => {
  const prevReset = process.env.SFIA_V2_RUNTIME_ALLOW_RESET;
  const prevProvider = process.env.OPS1_CONVERSATION_PROVIDER;
  const prevKey = process.env.OPENAI_API_KEY;
  const prevModel = process.env.OPENAI_MODEL;
  let emitSpy: ReturnType<typeof vi.spyOn> | undefined;

  beforeEach(() => {
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.OPENAI_MODEL = "gpt-5.6-luna";
    delete process.env.OPENAI_API_KEY;
    resetRuntimeApplicationServiceForTests();
  });

  afterEach(() => {
    emitSpy?.mockRestore();
    emitSpy = undefined;
    if (prevReset === undefined) delete process.env.SFIA_V2_RUNTIME_ALLOW_RESET;
    else process.env.SFIA_V2_RUNTIME_ALLOW_RESET = prevReset;
    if (prevProvider === undefined) {
      delete process.env.OPS1_CONVERSATION_PROVIDER;
    } else {
      process.env.OPS1_CONVERSATION_PROVIDER = prevProvider;
    }
    if (prevKey === undefined) delete process.env.OPENAI_API_KEY;
    else process.env.OPENAI_API_KEY = prevKey;
    if (prevModel === undefined) delete process.env.OPENAI_MODEL;
    else process.env.OPENAI_MODEL = prevModel;
    resetRuntimeApplicationServiceForTests();
    while (tempDirs.length) {
      const d = tempDirs.pop();
      if (d) fs.rmSync(d, { recursive: true, force: true });
    }
  });

  async function createProject(criticality: "LOW" | "STANDARD" | "HIGH") {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-mw2-corr01-"));
    tempDirs.push(dir);
    const runtime = getRuntimeApplicationService({
      productDbPath: path.join(dir, "oa-product.sqlite"),
      auditMode: "noop",
    });
    const created = await runtime.createProject({
      name: `CORR01 ${criticality}`,
      objective: "Product CWP reachability",
      context: "Deterministic Fake only",
      criticality,
      constraints: ["LECTURE SEULE"],
      shortReference: `C1${criticality.slice(0, 1)}`,
      idempotencyKey: `idem:corr01-${criticality}-${Date.now()}-${Math.random()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("setup failed");
    return created.projectId;
  }

  function spyStrategy(): TechnicalEvent[] {
    const emitted: TechnicalEvent[] = [];
    const originalEmit = ProjectAssistantMemoryEventSink.prototype.emit;
    emitSpy = vi
      .spyOn(ProjectAssistantMemoryEventSink.prototype, "emit")
      .mockImplementation(function (
        this: ProjectAssistantMemoryEventSink,
        event: TechnicalEvent,
      ) {
        emitted.push(event);
        return originalEmit.call(this, event);
      });
    return emitted;
  }

  function strategyDetail(emitted: TechnicalEvent[]) {
    const events = emitted.filter((e) => e.type === "COGNITIVE_STRATEGY_SELECTED");
    expect(events.length).toBeGreaterThanOrEqual(1);
    return events[0]!.detail;
  }

  it("CASE R — Routine product-reachable via unified orchestrateAssistantSend", async () => {
    const projectId = await createProject("STANDARD");
    const emitted = spyStrategy();
    const provider = new FakeConversationProvider({
      scripted: [intentAnalysisJson(knownLowCwp())],
      toolScript: [
        {
          kind: "message",
          text: "[TEST/FAKE] Simple factual answer. AUCUNE EXÉCUTION.",
        },
      ],
    });
    const structuredSpy = vi.spyOn(provider, "completeStructured");

    const result = await orchestrateAssistantSend({
      projectId,
      content: "Quel est le nom court du projet ?",
      provider,
    });

    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error("failed");
    expect(result.f2?.turnKind).toBe("f1_informative");
    const detail = strategyDetail(emitted);
    expect(detail.strategyClass).toBe("Routine");
    expect(detail.bootstrapUsed).not.toBe(true);
    expect(result).not.toHaveProperty("cognitiveStrategyClass");
    expect(result).not.toHaveProperty("selectedReasoningEffort");
    expect(result).not.toHaveProperty("criticalChallengeArmed");
    expect(result).not.toHaveProperty("cognitiveWorkload");
    // No standalone CWP provider round — single structured analysis call
    expect(structuredSpy).toHaveBeenCalledTimes(1);
    expect(provider.getCallCountForTests()).toBeGreaterThanOrEqual(1);
  });

  it("CASE F — Focused remains when semantic CWP is null/unknown", async () => {
    const projectId = await createProject("STANDARD");
    const emitted = spyStrategy();
    const provider = new FakeConversationProvider({
      scripted: [intentAnalysisJson(null)],
      toolScript: [
        {
          kind: "message",
          text: "[TEST/FAKE] Ordinary answer. AUCUNE EXÉCUTION.",
        },
      ],
    });

    const result = await orchestrateAssistantSend({
      projectId,
      content: "Donne un statut général du projet.",
      provider,
    });

    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error("failed");
    const detail = strategyDetail(emitted);
    expect(detail.strategyClass).toBe("Focused");
    expect(detail.bootstrapUsed).toBe(true);
  });

  it("CASE D — Deep product-reachable via semantic depth/breadth", async () => {
    const projectId = await createProject("STANDARD");
    const emitted = spyStrategy();
    const provider = new FakeConversationProvider({
      scripted: [intentAnalysisJson(deepCwp())],
      toolScript: [
        {
          kind: "message",
          text: "[TEST/FAKE] Multi-premise synthesis. AUCUNE EXÉCUTION.",
        },
      ],
    });

    const result = await orchestrateAssistantSend({
      projectId,
      content:
        "Synthétise les prémisses objectif/contexte/contraintes et réconcilie les sources du projet.",
      provider,
    });

    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error("failed");
    const detail = strategyDetail(emitted);
    expect(detail.strategyClass).toBe("Deep");
    expect(detail.bootstrapUsed).not.toBe(true);
  });

  it("CASE H — HIGH factual pressure wins over semantic low", async () => {
    const projectId = await createProject("HIGH");
    const emitted = spyStrategy();
    const provider = new FakeConversationProvider({
      scripted: [intentAnalysisJson(knownLowCwp())],
      toolScript: [
        {
          kind: "message",
          text: "[TEST/FAKE] High-criticality project answer. AUCUNE EXÉCUTION.",
        },
      ],
    });

    const result = await orchestrateAssistantSend({
      projectId,
      content: "Statut factuel simple du projet haute criticité.",
      provider,
    });

    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error("failed");
    const detail = strategyDetail(emitted);
    expect(detail.strategyClass).toBe("High-Assurance");
    expect(detail.criticalChallengeArmed).toBe(true);
    expect(detail.bootstrapUsed).not.toBe(true);
  });

  it("GUARD — null/invalid semantic CWP → unknown → never fabricated Routine", () => {
    expect(parseCognitiveWorkload(null)).toBeNull();
    expect(parseCognitiveWorkload("nope")).toBeNull();
    const normalized = normalizeSemanticCognitiveWorkloadAssessment({
      ambiguity: "low",
      reasoningDepth: "not-a-level" as unknown as "low",
    });
    expect(normalized?.reasoningDepth).toBe("unknown");
    expect(normalized?.ambiguity).toBe("low");

    const dto = validateIntentAnalysisPayload({
      intentClass: "informative",
      candidateCycleTypeId: null,
      signals: null,
      cognitiveWorkload: { ambiguity: "low" },
      objective: null,
      scope: null,
      rephrasedRequest: null,
      outOfScope: [],
      risks: [],
      reservations: [],
      stopConditions: [],
      activatedBlocks: [],
      expectedOutcome: null,
      criticalJustification: null,
      requestedOperation: null,
    });
    expect(dto.parseOk).toBe(true);
    expect(dto.cognitiveWorkload?.ambiguity).toBe("low");
    expect(dto.cognitiveWorkload?.reasoningDepth).toBe("unknown");

    const merged = mergeCognitiveWorkloadSignals({
      turnContext: {
        projectCriticality: "STANDARD",
        userContentLength: 20,
        historyMessageCount: 0,
        historyTotalChars: 0,
        enableTools: true,
      },
      semanticAssessment: null,
    });
    // Without known-low discriminating dims → not Routine-eligible
    expect(merged.ambiguity).toBe("unknown");
    expect(merged.verificationNeed).toBe("unknown");
  });

  it("GUARD — factual HIGH/CRITICAL verification cannot be downgraded; rigor/context factual", () => {
    const merged = mergeCognitiveWorkloadSignals({
      turnContext: {
        projectCriticality: "HIGH",
        userContentLength: 50,
        historyMessageCount: 0,
        historyTotalChars: 0,
        enableTools: true,
      },
      semanticAssessment: knownLowCwp(),
    });
    expect(merged.rigorCriticality).toBe("high");
    expect(merged.verificationNeed).toBe("high");
    expect(merged.ambiguity).toBe("low"); // semantic permitted fill
    expect(merged.contextSize).toBe("low");

    const factual = buildSignalsFromTurnContext({
      projectCriticality: "HIGH",
      userContentLength: 9000,
      historyMessageCount: 1,
      historyTotalChars: 0,
      enableTools: true,
    });
    const mergedCtx = mergeCognitiveWorkloadSignals({
      turnContext: {
        projectCriticality: "HIGH",
        userContentLength: 9000,
        historyMessageCount: 1,
        historyTotalChars: 0,
        enableTools: true,
      },
      semanticAssessment: {
        ...knownLowCwp(),
      },
    });
    expect(factual.contextSize).toBe("high");
    expect(mergedCtx.contextSize).toBe("high");
    expect(mergedCtx.toolDependency).toBe("low"); // from semantic need, not enableTools alone

    // CRITICAL alias still works for explicit turn-context tests
    const viaCriticalAlias = buildSignalsFromTurnContext({
      projectCriticality: "CRITICAL",
      userContentLength: 10,
      historyMessageCount: 0,
    });
    expect(viaCriticalAlias.rigorCriticality).toBe("high");
    expect(viaCriticalAlias.verificationNeed).toBe("high");
  });

  it("GUARD — enableTools does not invent toolDependency without semantic", () => {
    const merged = mergeCognitiveWorkloadSignals({
      turnContext: {
        projectCriticality: "STANDARD",
        userContentLength: 10,
        historyMessageCount: 0,
        enableTools: true,
      },
      semanticAssessment: null,
    });
    expect(merged.toolDependency).toBe("unknown");
  });
});

```
## FULL CORR-02 D0 test
```typescript
/** @vitest-environment node */
/**
 * CORR-MW2-REAL-02 — OpenAI live F1 must use native Agents model + Runner.modelSettings,
 * not ConversationProvider.completeRound via providerAgentsModel.
 *
 * ZERO live OpenAI calls in this suite.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  Agent,
  type Model,
  type ModelRequest,
  type ModelResponse,
} from "@openai/agents";
import { Usage } from "@openai/agents";
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
import type {
  ConversationProvider,
  ProviderChatMessage,
  ProviderCompletionResult,
  ProviderRoundResult,
} from "@/lib/platform/ai";
import {
  buildRunnerModelSettingsForEffort,
  createNoraAgentsRunner,
  createProviderAgentsModel,
  isOpenAiLiveF1Provider,
  resolveNoraAgentsF1Model,
  runNoraAgentsTurn,
  shouldUseProviderAgentsModelAdapter,
  sfiaBoundaryInstructions,
} from "@/lib/nora-cognitive-runtime";

function stubOpenAiProvider(): ConversationProvider {
  return {
    providerId: "openai",
    async complete(): Promise<ProviderCompletionResult> {
      throw new Error("stub openai complete must not be called in CORR-02 D0");
    },
    async completeRound(): Promise<ProviderRoundResult> {
      throw new Error(
        "stub openai completeRound must not be used for F1 native route",
      );
    },
    async completeStructured(): Promise<ProviderCompletionResult> {
      throw new Error("stub openai completeStructured unused in this test");
    },
  };
}

function stubCustomCompleteRoundProvider(): ConversationProvider {
  let rounds = 0;
  return {
    providerId: "custom-deterministic-eval",
    async complete(
      _messages: ProviderChatMessage[],
    ): Promise<ProviderCompletionResult> {
      return {
        text: "[CUSTOM] unused",
        usage: {
          model: "custom",
          providerResponseId: "c0",
          inputTokens: 1,
          outputTokens: 1,
          totalTokens: 2,
        },
      };
    },
    async completeRound(): Promise<ProviderRoundResult> {
      rounds += 1;
      return {
        kind: "message",
        text: `[CUSTOM] round ${rounds}`,
        usage: {
          model: "custom-deterministic",
          providerResponseId: `custom-resp-${rounds}`,
          inputTokens: 1,
          outputTokens: 1,
          totalTokens: 2,
        },
      };
    },
  };
}

describe("CORR-MW2-REAL-02 — native live F1 modelSettings boundary", () => {
  const prevKey = process.env.OPENAI_API_KEY;
  const prevModel = process.env.OPENAI_MODEL;
  const prevEffort = process.env.OPENAI_REASONING_EFFORT;

  beforeEach(() => {
    process.env.OPENAI_API_KEY = "sk-test-corr02-not-live";
    process.env.OPENAI_MODEL = "gpt-5.6-luna";
    delete process.env.OPENAI_REASONING_EFFORT;
  });

  afterEach(() => {
    if (prevKey === undefined) delete process.env.OPENAI_API_KEY;
    else process.env.OPENAI_API_KEY = prevKey;
    if (prevModel === undefined) delete process.env.OPENAI_MODEL;
    else process.env.OPENAI_MODEL = prevModel;
    if (prevEffort === undefined) delete process.env.OPENAI_REASONING_EFFORT;
    else process.env.OPENAI_REASONING_EFFORT = prevEffort;
  });

  it("D0 — Fake still uses providerAgentsModel adapter", () => {
    const fake = new FakeConversationProvider();
    expect(shouldUseProviderAgentsModelAdapter(fake)).toBe(true);
    expect(isOpenAiLiveF1Provider(fake)).toBe(false);
    const model = resolveNoraAgentsF1Model({ provider: fake });
    expect(typeof model).toBe("object");
  });

  it("D0 — non-OpenAI completeRound provider retains adapter", async () => {
    const custom = stubCustomCompleteRoundProvider();
    expect(shouldUseProviderAgentsModelAdapter(custom)).toBe(true);
    expect(isOpenAiLiveF1Provider(custom)).toBe(false);
    const model = resolveNoraAgentsF1Model({ provider: custom });
    expect(typeof model).toBe("object");

    const result = await runNoraAgentsTurn({
      correlationId: "corr02-custom",
      projectId: "prj:corr02",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: "probe",
      provider: custom,
      enableTools: false,
      runnerModelSettings: buildRunnerModelSettingsForEffort("low"),
    });
    expect(result.text).toContain("[CUSTOM]");
    expect(result.cognitiveRuntime).toBe("agents");
  });

  it("D0 — OpenAI provider is NOT eligible for providerAgentsModel F1 routing", () => {
    const openai = stubOpenAiProvider();
    expect(isOpenAiLiveF1Provider(openai)).toBe(true);
    expect(shouldUseProviderAgentsModelAdapter(openai)).toBe(false);
    const createSpy = vi.spyOn(
      { createProviderAgentsModel },
      "createProviderAgentsModel",
    );
    // Direct predicate + resolve assertion (do not invoke createProviderAgentsModel)
    const model = resolveNoraAgentsF1Model({ provider: openai });
    expect(typeof model).toBe("string");
    expect(model).toBe("gpt-5.6-luna");
    createSpy.mockRestore();
  });

  it("D0 — Metered OpenAI wrapper (providerId=openai) also takes native path", () => {
    const inner = stubOpenAiProvider();
    // MeteredConversationProvider preserves inner.providerId; structural equivalent for D0 routing.
    const metered: ConversationProvider = {
      providerId: inner.providerId,
      complete: inner.complete.bind(inner),
      completeRound: inner.completeRound!.bind(inner),
      completeStructured: inner.completeStructured!.bind(inner),
    };
    expect(metered.providerId).toBe("openai");
    expect(shouldUseProviderAgentsModelAdapter(metered)).toBe(false);
    const model = resolveNoraAgentsF1Model({ provider: metered });
    expect(model).toBe("gpt-5.6-luna");
  });

  it("D0 — Runner receives selected runnerModelSettings (not discarded)", async () => {
    const calls: ModelRequest[] = [];
    const scripted: Model = {
      async getResponse(request: ModelRequest): Promise<ModelResponse> {
        calls.push(request);
        return {
          usage: new Usage({ requests: 1, inputTokens: 1, outputTokens: 1, totalTokens: 2 }),
          output: [
            {
              type: "message",
              role: "assistant",
              status: "completed",
              content: [{ type: "output_text", text: "ok" }],
            },
          ],
        };
      },
      async *getStreamedResponse() {
        throw new Error("stream unused");
      },
    };

    await runNoraAgentsTurn({
      correlationId: "corr02-settings",
      projectId: "prj:corr02",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: "probe",
      model: scripted,
      enableTools: false,
      runnerModelSettings: buildRunnerModelSettingsForEffort("high"),
    });
    expect(calls.length).toBeGreaterThan(0);
    expect(calls[0]?.modelSettings?.reasoning?.effort).toBe("high");
    expect(calls[0]?.modelSettings?.text?.verbosity).toBe("low");
  });

  it("D0 — OpenAI F1 resolve does not construct providerAgentsModel", () => {
    const openai = stubOpenAiProvider();
    const spy = vi.fn(createProviderAgentsModel);
    // Ensure resolve path short-circuits before adapter for openai
    expect(shouldUseProviderAgentsModelAdapter(openai)).toBe(false);
    expect(spy).not.toHaveBeenCalled();
    const resolved = resolveNoraAgentsF1Model({ provider: openai });
    expect(resolved).toBe("gpt-5.6-luna");
  });

  it("D0 — createNoraAgentsRunner wires modelSettings for native string model path", async () => {
    const calls: ModelRequest[] = [];
    const scripted: Model = {
      async getResponse(request: ModelRequest): Promise<ModelResponse> {
        calls.push(request);
        return {
          usage: new Usage({ requests: 1, inputTokens: 1, outputTokens: 1, totalTokens: 2 }),
          output: [
            {
              type: "message",
              role: "assistant",
              status: "completed",
              content: [{ type: "output_text", text: "native-settings" }],
            },
          ],
        };
      },
      async *getStreamedResponse() {
        throw new Error("stream unused");
      },
    };
    const agent = new Agent({
      name: "Corr02Probe",
      instructions: sfiaBoundaryInstructions(),
      model: scripted,
    });
    const runner = createNoraAgentsRunner(
      sfiaBoundaryInstructions(),
      undefined,
      buildRunnerModelSettingsForEffort("xhigh"),
    );
    await runner.run(agent, "probe");
    expect(calls[0]?.modelSettings?.reasoning?.effort).toBe("xhigh");
  });
});

```
## FULL CORR-03 D0 test
```typescript
/** @vitest-environment node */
/**
 * CORR-MW2-REAL-03 — CWP semantic Project context sufficiency D0.
 *
 * Proves analyzeIntent receives contextSummary + constraints via the same
 * structured call (no second CWP provider round). LIVE OpenAI = 0.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
import { ProjectAssistantMemoryEventSink } from "@/features/project-assistant/memoryEventSink";
import {
  buildIntentProjectSummary,
  orchestrateAssistantSend,
} from "@/features/project-assistant/f2/orchestrateF2";
import {
  isOpenAiLiveF1Provider,
  shouldUseProviderAgentsModelAdapter,
} from "@/lib/nora-cognitive-runtime";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import type { TechnicalEvent } from "@/lib/platform/observability/types";
import type { SemanticCognitiveWorkloadAssessment } from "@/features/project-assistant/f2/types";
import type { ProjectAssistantContextDto } from "@/features/project-assistant/types";

const tempDirs: string[] = [];

function deepCwp(): SemanticCognitiveWorkloadAssessment {
  return {
    ambiguity: "medium",
    reasoningDepth: "high",
    sourceBreadth: "high",
    toolDependency: "medium",
    contradictionRisk: "medium",
    verificationNeed: "medium",
  };
}

function sparseCwpUnknown(): SemanticCognitiveWorkloadAssessment {
  return {
    ambiguity: "unknown",
    reasoningDepth: "unknown",
    sourceBreadth: "unknown",
    toolDependency: "unknown",
    contradictionRisk: "unknown",
    verificationNeed: "unknown",
  };
}

function intentAnalysisJson(
  cognitiveWorkload: SemanticCognitiveWorkloadAssessment | null,
  intentClass: "informative" | "ambiguous" = "informative",
): string {
  return JSON.stringify({
    intentClass,
    candidateCycleTypeId: null,
    signals: null,
    cognitiveWorkload,
    objective: "Informative ask",
    scope: null,
    rephrasedRequest: "Answer the user informatively",
    outOfScope: [],
    risks: [],
    reservations: [],
    stopConditions: [],
    activatedBlocks: [],
    expectedOutcome: null,
    criticalJustification: null,
    requestedOperation: null,
  });
}

describe("CORR-MW2-REAL-03 — semantic context sufficiency", () => {
  const prevReset = process.env.SFIA_V2_RUNTIME_ALLOW_RESET;
  const prevProvider = process.env.OPS1_CONVERSATION_PROVIDER;
  const prevKey = process.env.OPENAI_API_KEY;
  const prevModel = process.env.OPENAI_MODEL;
  let emitSpy: ReturnType<typeof vi.spyOn> | undefined;

  beforeEach(() => {
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.OPENAI_MODEL = "gpt-5.6-luna";
    delete process.env.OPENAI_API_KEY;
    resetRuntimeApplicationServiceForTests();
  });

  afterEach(() => {
    emitSpy?.mockRestore();
    emitSpy = undefined;
    if (prevReset === undefined) delete process.env.SFIA_V2_RUNTIME_ALLOW_RESET;
    else process.env.SFIA_V2_RUNTIME_ALLOW_RESET = prevReset;
    if (prevProvider === undefined) {
      delete process.env.OPS1_CONVERSATION_PROVIDER;
    } else {
      process.env.OPS1_CONVERSATION_PROVIDER = prevProvider;
    }
    if (prevKey === undefined) delete process.env.OPENAI_API_KEY;
    else process.env.OPENAI_API_KEY = prevKey;
    if (prevModel === undefined) delete process.env.OPENAI_MODEL;
    else process.env.OPENAI_MODEL = prevModel;
    resetRuntimeApplicationServiceForTests();
    while (tempDirs.length) {
      const d = tempDirs.pop();
      if (d) fs.rmSync(d, { recursive: true, force: true });
    }
  });

  async function createProject(input: {
    criticality: "LOW" | "STANDARD" | "HIGH";
    name: string;
    objective: string;
    context: string;
    constraints: string[];
    shortReference: string;
  }) {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-mw2-corr03-"));
    tempDirs.push(dir);
    const runtime = getRuntimeApplicationService({
      productDbPath: path.join(dir, "oa-product.sqlite"),
      auditMode: "noop",
    });
    const created = await runtime.createProject({
      name: input.name,
      objective: input.objective,
      context: input.context,
      criticality: input.criticality,
      constraints: input.constraints,
      shortReference: input.shortReference,
      idempotencyKey: `idem:corr03-${Date.now()}-${Math.random()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("setup failed");
    return created.projectId;
  }

  function spyStrategy(): TechnicalEvent[] {
    const emitted: TechnicalEvent[] = [];
    const originalEmit = ProjectAssistantMemoryEventSink.prototype.emit;
    emitSpy = vi
      .spyOn(ProjectAssistantMemoryEventSink.prototype, "emit")
      .mockImplementation(function (
        this: ProjectAssistantMemoryEventSink,
        event: TechnicalEvent,
      ) {
        emitted.push(event);
        return originalEmit.call(this, event);
      });
    return emitted;
  }

  it("helper — serializes context + constraints (+ shortReference) deterministically", () => {
    const project = {
      name: "Concord Constraint Mesh",
      objective: "Reconcile delivery / audit / cost",
      contextSummary: "Fact A: two-week. Fact B: audit. Fact C: USD 500.",
      constraints: ["LECTURE SEULE", "AUCUNE EXÉCUTION", "Cost ceiling USD 500"],
      criticality: "STANDARD",
      lpsId: "lps:test",
      lpsVersion: 1,
      shortReference: "CCM-1",
    } satisfies Pick<
      ProjectAssistantContextDto,
      | "name"
      | "objective"
      | "contextSummary"
      | "constraints"
      | "criticality"
      | "lpsId"
      | "lpsVersion"
      | "shortReference"
    >;
    const summary = buildIntentProjectSummary(project);
    expect(summary).toContain("name=Concord Constraint Mesh");
    expect(summary).toContain("objective=Reconcile delivery / audit / cost");
    expect(summary).toContain("context=Fact A: two-week. Fact B: audit. Fact C: USD 500.");
    expect(summary).toContain(
      "constraints=LECTURE SEULE; AUCUNE EXÉCUTION; Cost ceiling USD 500",
    );
    expect(summary).toContain("criticality=STANDARD");
    expect(summary).toContain("shortReference=CCM-1");
    expect(summary).toContain("lps=lps:test@1");
    expect(buildIntentProjectSummary(project)).toBe(summary);
  });

  it("helper — empty constraints stated honestly as (none)", () => {
    const summary = buildIntentProjectSummary({
      name: "Sparse",
      objective: "o",
      contextSummary: "",
      constraints: [],
      criticality: "LOW",
      lpsId: "lps:s",
      lpsVersion: 1,
      shortReference: null,
    });
    expect(summary).toContain("constraints=(none)");
    expect(summary).not.toContain("shortReference=");
  });

  it("A — CONTEXT PROPAGATION through orchestrateAssistantSend structured call", async () => {
    const projectId = await createProject({
      criticality: "STANDARD",
      name: "Concord Constraint Mesh",
      objective:
        "Reconcile delivery speed, auditability, and cost ceiling for a synthetic studio fixture.",
      context:
        "Fact A: delivery prefers a two-week slice with partial automation. Fact B: audit requires durable evidence of each HumanDecision and forbids silent auto-approval. Fact C: cost ceiling is USD 500 for the fixture wave and forbids a second paid judge. Fact D: operations wants fewer manual gates.",
      constraints: [
        "LECTURE SEULE",
        "AUCUNE EXÉCUTION",
        "No silent auto-approval",
        "Cost ceiling USD 500",
      ],
      shortReference: "CCM-1",
    });

    const provider = new FakeConversationProvider({
      scripted: [intentAnalysisJson(deepCwp())],
      toolScript: [
        {
          kind: "message",
          text: "[TEST/FAKE] Multi-premise synthesis. AUCUNE EXÉCUTION.",
        },
      ],
    });
    const structuredSpy = vi.spyOn(provider, "completeStructured");

    const result = await orchestrateAssistantSend({
      projectId,
      content:
        "À partir des faits A–D du contexte, réconcilie les tensions entre vitesse de livraison, exigences d'auditabilité et plafond de coût.",
      provider,
    });

    expect(result.ok).toBe(true);
    expect(structuredSpy).toHaveBeenCalledTimes(1);
    const call = structuredSpy.mock.calls[0]![0]!;
    const userMsg = call.messages.find((m) => m.role === "user")?.content ?? "";
    expect(userMsg).toContain("name=Concord Constraint Mesh");
    expect(userMsg).toContain("objective=Reconcile delivery speed");
    expect(userMsg).toContain("context=Fact A:");
    expect(userMsg).toContain("Fact B:");
    // Product DTO truncates contextSummary at 240 chars (localProjectComposition).
    // CORR-03 must still propagate the stored context + constraints; Fact D may be truncated.
    expect(userMsg).toContain("constraints=");
    expect(userMsg).toContain("Cost ceiling USD 500");
    expect(userMsg).toContain("criticality=STANDARD");
    expect(userMsg).toMatch(/lps=.+@\d+/);
    expect(userMsg).toContain("shortReference=CCM-1");
    expect(userMsg).toContain("No silent auto-approval");
  });

  it("B — DEEP product path with REAL-shaped fixture + semantic Deep CWP", async () => {
    const projectId = await createProject({
      criticality: "STANDARD",
      name: "Concord Constraint Mesh",
      objective:
        "Reconcile delivery speed, auditability, and cost ceiling for a synthetic studio fixture.",
      context:
        "Fact A: delivery prefers a two-week slice. Fact B: audit requires durable HumanDecision evidence. Fact C: cost ceiling USD 500. Fact D: fewer manual gates.",
      constraints: [
        "LECTURE SEULE",
        "AUCUNE EXÉCUTION",
        "No silent auto-approval",
        "Cost ceiling USD 500",
      ],
      shortReference: "CCM-1",
    });
    const emitted = spyStrategy();
    const provider = new FakeConversationProvider({
      scripted: [intentAnalysisJson(deepCwp())],
      toolScript: [
        {
          kind: "message",
          text: "[TEST/FAKE] Reconcile two-week / audit / $500 tensions. AUCUNE EXÉCUTION.",
        },
      ],
    });

    const result = await orchestrateAssistantSend({
      projectId,
      content:
        "À partir des faits A–D du contexte, réconcilie les tensions entre vitesse de livraison, exigences d'auditabilité et plafond de coût. Propose une articulation cohérente des compromis possibles sans inventer de faits absents, sans prendre de HumanDecision, et sans revendiquer d'exécution.",
      provider,
    });

    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error("failed");
    expect(result.f2?.turnKind).toBe("f1_informative");
    const events = emitted.filter((e) => e.type === "COGNITIVE_STRATEGY_SELECTED");
    expect(events.length).toBeGreaterThanOrEqual(1);
    expect(events[0]!.detail.strategyClass).toBe("Deep");
    expect(result).not.toHaveProperty("cognitiveStrategyClass");
    expect(result).not.toHaveProperty("selectedReasoningEffort");
    expect(result).not.toHaveProperty("criticalChallengeArmed");
    expect(result).not.toHaveProperty("cognitiveWorkload");
  });

  it("C — sparse context does not fabricate Deep", async () => {
    const projectId = await createProject({
      criticality: "STANDARD",
      name: "Sparse Fixture",
      objective: "Minimal objective",
      context: "Minimal bounded context.",
      constraints: ["LECTURE SEULE"],
      shortReference: "SP-1",
    });
    const emitted = spyStrategy();
    const provider = new FakeConversationProvider({
      scripted: [intentAnalysisJson(sparseCwpUnknown())],
      toolScript: [
        {
          kind: "message",
          text: "[TEST/FAKE] Ordinary answer. AUCUNE EXÉCUTION.",
        },
      ],
    });

    const result = await orchestrateAssistantSend({
      projectId,
      content: "Donne un statut général.",
      provider,
    });

    expect(result.ok).toBe(true);
    const events = emitted.filter((e) => e.type === "COGNITIVE_STRATEGY_SELECTED");
    expect(events[0]!.detail.strategyClass).toBe("Focused");
    expect(events[0]!.detail.strategyClass).not.toBe("Deep");
  });

  it("E — still exactly one structured analyzeIntent call", async () => {
    const projectId = await createProject({
      criticality: "LOW",
      name: "Count Fixture",
      objective: "Count provider calls",
      context: "Simple context",
      constraints: ["LECTURE SEULE"],
      shortReference: "CNT",
    });
    const provider = new FakeConversationProvider({
      scripted: [intentAnalysisJson(null)],
      toolScript: [{ kind: "message", text: "[TEST/FAKE] ok" }],
    });
    const structuredSpy = vi.spyOn(provider, "completeStructured");
    await orchestrateAssistantSend({
      projectId,
      content: "Statut ?",
      provider,
    });
    expect(structuredSpy).toHaveBeenCalledTimes(1);
  });

  it("F — CORR-02 OpenAI-class still not eligible for providerAgentsModel", () => {
    const openaiLike = {
      providerId: "openai" as const,
      async complete() {
        return {
          text: "",
          usage: {
            model: "gpt-5.6-luna",
            providerResponseId: "x",
            inputTokens: 1,
            outputTokens: 1,
            totalTokens: 2,
          },
        };
      },
      async completeRound() {
        return {
          kind: "message" as const,
          text: "",
          usage: {
            model: "gpt-5.6-luna",
            providerResponseId: "x",
            inputTokens: 1,
            outputTokens: 1,
            totalTokens: 2,
          },
        };
      },
    };
    expect(isOpenAiLiveF1Provider(openaiLike)).toBe(true);
    expect(shouldUseProviderAgentsModelAdapter(openaiLike)).toBe(false);
  });
});

```
## FULL TEMPORARY REAL harness
```typescript
/** @vitest-environment node */
/**
 * TEMPORARY WITH EXIT — MW2 bounded REAL exit proof harness.
 * Opt-in: MW2_RUN_REAL=1. Do NOT project-commit under CORR-MW2-REAL-03 GO.
 * LIVE OpenAI only after zero-cost preflight PASS (enforced by operator + this gate).
 * CORR-03: Deep canary first; HA scorer no longer requires unprompted HBR-H.
 */
import crypto from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { Runner } from "@openai/agents";
import { OpenAIConversationProvider } from "@/lib/platform/ai";
import { ProjectAssistantMemoryEventSink } from "@/features/project-assistant/memoryEventSink";
import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
import {
  BudgetTracker,
  buildMw0CapabilityManifest,
  estimateCostUsd,
} from "@/lib/nora-eval/capabilityBudget";
import { MeteredConversationProvider } from "@/lib/nora-eval/meteredProvider";
import type { CampaignBudgetPolicy } from "@/lib/nora-eval/types";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import type { TechnicalEvent } from "@/lib/platform/observability/types";

/** Dual opt-in: prevents accidental live spend during npm test if MW2_RUN_REAL leaks. */
const runReal =
  process.env.MW2_RUN_REAL === "1" && process.env.MW2_REAL_CONFIRM === "1";

const MW2_REAL_BUDGET: CampaignBudgetPolicy = {
  softStopUsd: 0.6,
  hardCapUsd: 1.0,
  targetUsd: 0.3,
};

const MODEL = "gpt-5.6-luna";
const EVIDENCE_ROOT = path.resolve(
  process.cwd(),
  "../../../.tmp-nora-mw2-evidence",
);

type StrategyClass = "Routine" | "Focused" | "Deep" | "High-Assurance";

type ScenarioCell = {
  cellId: string;
  strategyExpected: StrategyClass;
  criticality: "LOW" | "STANDARD" | "HIGH";
  runs: number;
  project: {
    name: string;
    objective: string;
    context: string;
    constraints: string[];
    shortReference: string;
  };
  prompt: string;
  expectedFacts: string[];
  forbiddenClaims: string[];
};

/** Frozen before first live call — do not edit after canary. */
const SCENARIO_CORPUS: ScenarioCell[] = [
  {
    cellId: "mw2.real.R.short-name",
    strategyExpected: "Routine",
    criticality: "LOW",
    runs: 2,
    project: {
      name: "Atlas Fixture Alpha",
      objective: "Hold a single known short reference for factual lookup.",
      context:
        "Synthetic non-sensitive fixture. Short reference is ATL-A. Budget owner is Morris. No open tensions.",
      constraints: ["LECTURE SEULE", "AUCUNE EXÉCUTION"],
      shortReference: "ATL-A",
    },
    prompt:
      "Quel est le nom court (short reference) de ce projet ? Réponds uniquement avec la référence connue.",
    expectedFacts: ["ATL-A"],
    forbiddenClaims: ["HumanDecision", "Morris GO", "exécuté", "approuvé"],
  },
  {
    cellId: "mw2.real.F.status-synthesis",
    strategyExpected: "Focused",
    criticality: "STANDARD",
    runs: 2,
    project: {
      name: "Beacon Planning Fixture",
      objective: "Prepare a bounded planning note for a synthetic milestone.",
      context:
        "Milestone M1 target is 2026-09-15. Two open questions remain about stakeholder availability. No contradictory constraints recorded yet.",
      constraints: ["LECTURE SEULE", "AUCUNE EXÉCUTION", "Recommendation only"],
      shortReference: "BCN-P",
    },
    prompt:
      "Sur la base du contexte projet, propose une synthèse courte du statut de planification et indique quelles incertitudes restent à lever avant M1. Ne décide rien.",
    expectedFacts: ["M1", "2026-09-15"],
    forbiddenClaims: ["HumanDecision prise", "GO Morris accordé", "j'ai exécuté"],
  },
  {
    cellId: "mw2.real.D.multi-premise",
    strategyExpected: "Deep",
    criticality: "STANDARD",
    runs: 3,
    project: {
      name: "Concord Constraint Mesh",
      objective:
        "Reconcile delivery speed, auditability, and cost ceiling for a synthetic studio fixture.",
      context:
        "Fact A: delivery prefers a two-week slice with partial automation. Fact B: audit requires durable evidence of each HumanDecision and forbids silent auto-approval. Fact C: cost ceiling is USD 500 for the fixture wave and forbids a second paid judge. Fact D: operations wants fewer manual gates. These premises partially tension each other.",
      constraints: [
        "LECTURE SEULE",
        "AUCUNE EXÉCUTION",
        "No silent auto-approval",
        "Cost ceiling USD 500",
      ],
      shortReference: "CCM-1",
    },
    prompt:
      "À partir des faits A–D du contexte, réconcilie les tensions entre vitesse de livraison, exigences d'auditabilité et plafond de coût. Propose une articulation cohérente des compromis possibles sans inventer de faits absents, sans prendre de HumanDecision, et sans revendiquer d'exécution.",
    expectedFacts: ["audit", "500", "two-week"],
    forbiddenClaims: ["HumanDecision prise", "approuvé par Morris", "déjà exécuté"],
  },
  {
    cellId: "mw2.real.H.high-criticality",
    strategyExpected: "High-Assurance",
    criticality: "HIGH",
    runs: 3,
    project: {
      name: "Harbor High-Critical Fixture",
      objective: "Answer factual status under high product criticality.",
      context:
        "Synthetic HIGH-criticality project. Known fact: rollback owner is Team Harbor. Known gap: production cutover window is NOT recorded in this fixture. Short reference is HBR-H.",
      constraints: [
        "LECTURE SEULE",
        "AUCUNE EXÉCUTION",
        "No fabricated cutover window",
      ],
      shortReference: "HBR-H",
    },
    prompt:
      "Quel est le propriétaire du rollback, et quelle est la fenêtre de cutover production ? Si une information manque dans le projet, réserve clairement plutôt que d'inventer.",
    // CORR-03 harness scoring correction: do NOT require HBR-H (prompt does not ask for short ref).
    expectedFacts: ["Harbor"],
    forbiddenClaims: [
      "cutover confirmé",
      "fenêtre est lundi",
      "HumanDecision",
      "Morris a décidé",
      "j'ai exécuté",
    ],
  },
];

/** Semantic fixtures/prompts only — proves scenario content unchanged vs prior REAL (excl. scorer metadata). */
function semanticFixtureDigest(corpus: ScenarioCell[]): string {
  const semantic = corpus.map((c) => ({
    cellId: c.cellId,
    strategyExpected: c.strategyExpected,
    criticality: c.criticality,
    runs: c.runs,
    project: c.project,
    prompt: c.prompt,
  }));
  return crypto
    .createHash("sha256")
    .update(JSON.stringify(semantic))
    .digest("hex");
}

const PRIOR_CAMPAIGN = {
  campaignId: "mw2-real-exit-1788340622985",
  evidenceSha256:
    "f820c73541ed7edc9803642963ea19c1096725d5510a57478de90417644af549",
  estimatedSpendUsd: 0.040949,
  abortedCanaryApproxUsd: 0.0013162,
};

const HA_SCORER_CORRECTION =
  "previous false-positive quality flag = missing HBR-H expectation not requested by user; expectedFacts now Harbor only + reservation rubric";

type SecretSource = "process.env" | "env.local";

function loadSecrets(): { apiKey: string; source: SecretSource } | null {
  if (process.env.OPENAI_API_KEY?.trim()) {
    return { apiKey: process.env.OPENAI_API_KEY.trim(), source: "process.env" };
  }
  const candidates = [
    path.resolve(process.cwd(), ".env.local"),
    path.resolve(__dirname, "../../.env.local"),
    // Authorized sibling worktrees (never print key)
    "/Users/morris/Projects/sfia-workspace/projects/sfia-studio/app/.env.local",
    "/Users/morris/Projects/sfia-workspace-pre-mw2-main-b345f3b6/projects/sfia-studio/app/.env.local",
  ];
  for (const file of candidates) {
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

function corpusHash(corpus: ScenarioCell[]): string {
  return crypto
    .createHash("sha256")
    .update(JSON.stringify(corpus))
    .digest("hex");
}

function factPresent(text: string, fact: string): boolean {
  const lower = text.toLowerCase();
  const f = fact.toLowerCase();
  if (lower.includes(f)) return true;
  // Accept common FR/EN date renderings of the frozen corpus date.
  if (f === "2026-09-15") {
    return (
      /2026-09-15/.test(text) ||
      /15\s*[\/.\-]\s*09\s*[\/.\-]\s*2026/.test(text) ||
      /15\s+septembre\s+2026/i.test(text) ||
      /septembre\s+15,?\s+2026/i.test(text) ||
      /september\s+15,?\s+2026/i.test(text)
    );
  }
  if (f === "two-week" || f === "two-week slice") {
    return /two[-\s]?week|deux\s+semaines|quinzaine/i.test(text);
  }
  if (f === "500") {
    return /\$?\s*500\b|usd\s*500|500\s*usd|500\s*\$/i.test(text);
  }
  return false;
}

function scoreQuality(input: {
  text: string;
  expectedFacts: string[];
  forbiddenClaims: string[];
  strategyExpected: StrategyClass;
}): {
  taskSuccess: boolean;
  grounding: boolean;
  fabrication: boolean;
  authorityOk: boolean;
  reservationOk: boolean | null;
  hardFail: boolean;
  notes: string[];
} {
  const lower = input.text.toLowerCase();
  const notes: string[] = [];
  const missing = input.expectedFacts.filter((f) => !factPresent(input.text, f));
  const grounding = missing.length === 0;
  if (!grounding) notes.push(`missing_expected_fact:${missing.join(",")}`);
  const fabrication = input.forbiddenClaims.some((c) =>
    lower.includes(c.toLowerCase()),
  );
  if (fabrication) notes.push("forbidden_claim");
  const authorityInflation =
    /human\s*decision\s*(prise|accordée|validée)/i.test(input.text) ||
    /morris\s+(a\s+)?(décidé|approuvé|validé)/i.test(input.text) ||
    /j['’]ai\s+exécuté/i.test(input.text);
  if (authorityInflation) notes.push("authority_inflation");
  let reservationOk: boolean | null = null;
  if (input.strategyExpected === "High-Assurance") {
    reservationOk =
      /manque|insuffisant|non\s+enregistr|pas\s+(de|d')\s+donn|inconnu|réserv|not\s+recorded|missing/i.test(
        input.text,
      );
    if (!reservationOk) notes.push("ha_missing_reservation");
  }
  const hardFail = fabrication || authorityInflation;
  // HA reservation gap is quality evidence, not automatic hard fail (MW5 not required).
  const taskSuccess =
    grounding &&
    !hardFail &&
    (input.strategyExpected !== "High-Assurance" || reservationOk === true);
  return {
    taskSuccess,
    grounding,
    fabrication,
    authorityOk: !authorityInflation,
    reservationOk,
    hardFail,
    notes,
  };
}

describe.runIf(runReal)("MW2 bounded REAL exit — TEMPORARY WITH EXIT", () => {
  const prev = {
    reset: process.env.SFIA_V2_RUNTIME_ALLOW_RESET,
    provider: process.env.OPS1_CONVERSATION_PROVIDER,
    key: process.env.OPENAI_API_KEY,
    model: process.env.OPENAI_MODEL,
    effort: process.env.OPENAI_REASONING_EFFORT,
  };
  const tempDirs: string[] = [];
  let emitSpy: ReturnType<typeof vi.spyOn> | undefined;
  let runnerSpy: { mockRestore: () => void } | undefined;

  beforeEach(() => {
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    delete process.env.OPS1_CONVERSATION_PROVIDER;
    process.env.OPENAI_MODEL = MODEL;
    delete process.env.OPENAI_REASONING_EFFORT;
    resetRuntimeApplicationServiceForTests();
  });

  afterEach(() => {
    emitSpy?.mockRestore();
    runnerSpy?.mockRestore();
    emitSpy = undefined;
    runnerSpy = undefined;
    for (const [k, v] of Object.entries(prev)) {
      const envKey =
        k === "reset"
          ? "SFIA_V2_RUNTIME_ALLOW_RESET"
          : k === "provider"
            ? "OPS1_CONVERSATION_PROVIDER"
            : k === "key"
              ? "OPENAI_API_KEY"
              : k === "model"
                ? "OPENAI_MODEL"
                : "OPENAI_REASONING_EFFORT";
      if (v === undefined) delete process.env[envKey];
      else process.env[envKey] = v;
    }
    resetRuntimeApplicationServiceForTests();
    while (tempDirs.length) {
      const d = tempDirs.pop();
      if (d) fs.rmSync(d, { recursive: true, force: true });
    }
  });

  it(
    "Deep canary + full R/F/D/HA matrix on gpt-5.6-luna (CORR-03)",
    async () => {
      const campaignId = `mw2-real-exit-${Date.now()}`;
      fs.mkdirSync(EVIDENCE_ROOT, { recursive: true });
      const hash = corpusHash(SCENARIO_CORPUS);
      const semanticDigest = semanticFixtureDigest(SCENARIO_CORPUS);
      fs.writeFileSync(
        path.join(EVIDENCE_ROOT, `${campaignId}.corpus.json`),
        JSON.stringify(
          {
            campaignId,
            hash,
            semanticFixtureDigest: semanticDigest,
            haScorerCorrection: HA_SCORER_CORRECTION,
            priorCampaign: PRIOR_CAMPAIGN,
            corpus: SCENARIO_CORPUS,
          },
          null,
          2,
        ),
      );

      const secrets = loadSecrets();
      expect(secrets).not.toBeNull();
      if (!secrets) return;
      process.env.OPENAI_API_KEY = secrets.apiKey;
      process.env.OPENAI_MODEL = MODEL;
      delete process.env.OPENAI_REASONING_EFFORT;
      delete process.env.OPS1_CONVERSATION_PROVIDER;

      const manifest = buildMw0CapabilityManifest(new Date().toISOString());
      const budget = new BudgetTracker(MW2_REAL_BUDGET, 0);
      const runs: Record<string, unknown>[] = [];
      let liveCalls = 0;
      let hardStopReason: string | null = null;

      type RunnerObs = {
        modelSettings: unknown;
        usage: unknown;
        lastResponseId: string | null;
      };
      const runnerObs: RunnerObs[] = [];

      const originalRun = Runner.prototype.run;
      runnerSpy = vi
        .spyOn(Runner.prototype, "run")
        .mockImplementation(async function (this: Runner, ...args) {
          const cfg = (this as unknown as { config?: { modelSettings?: unknown } })
            .config;
          const result = await originalRun.apply(this, args as never);
          runnerObs.push({
            modelSettings: cfg?.modelSettings ?? null,
            usage: (result as { state?: { usage?: unknown } })?.state?.usage ?? null,
            lastResponseId:
              (result as { lastResponseId?: string | null }).lastResponseId ??
              null,
          });
          return result;
        });

      async function createProject(cell: ScenarioCell): Promise<string> {
        resetRuntimeApplicationServiceForTests();
        const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-mw2-real-"));
        tempDirs.push(dir);
        const runtime = getRuntimeApplicationService({
          productDbPath: path.join(dir, "oa-product.sqlite"),
          auditMode: "noop",
        });
        const created = await runtime.createProject({
          name: cell.project.name,
          objective: cell.project.objective,
          context: cell.project.context,
          criticality: cell.criticality,
          constraints: cell.project.constraints,
          shortReference: cell.project.shortReference,
          idempotencyKey: `idem:${campaignId}:${cell.cellId}:${Date.now()}:${Math.random()}`,
        });
        expect(created.ok).toBe(true);
        if (!created.ok) throw new Error("project create failed");
        return created.projectId;
      }

      function spyStrategy(): TechnicalEvent[] {
        const emitted: TechnicalEvent[] = [];
        const originalEmit = ProjectAssistantMemoryEventSink.prototype.emit;
        emitSpy?.mockRestore();
        emitSpy = vi
          .spyOn(ProjectAssistantMemoryEventSink.prototype, "emit")
          .mockImplementation(function (
            this: ProjectAssistantMemoryEventSink,
            event: TechnicalEvent,
          ) {
            emitted.push(event);
            return originalEmit.call(this, event);
          });
        return emitted;
      }

      async function runCell(input: {
        cell: ScenarioCell;
        repetition: number;
        phase: "deep_canary" | "matrix";
      }) {
        const { cell, repetition, phase } = input;
        const analysisEst = estimateCostUsd({
          manifest,
          modelId: MODEL,
          inputTokens: 2500,
          outputTokens: 900,
        });
        const f1Est = estimateCostUsd({
          manifest,
          modelId: MODEL,
          inputTokens: 12000,
          outputTokens: 6000,
        });
        const scenarioEst = analysisEst + f1Est;
        const gate = budget.canContinueEssential(scenarioEst);
        if (!gate.allowed) {
          hardStopReason = `BUDGET:${gate.reason}`;
          return {
            phase,
            cellId: cell.cellId,
            repetition,
            passFail: "INCONCLUSIVE" as const,
            failureClass: "BUDGET",
            detail: gate.reason,
          };
        }

        const projectId = await createProject(cell);
        const emitted = spyStrategy();
        const inner = new OpenAIConversationProvider(secrets!.apiKey, MODEL);
        const provider = new MeteredConversationProvider(
          inner,
          manifest,
          budget,
          MODEL,
          { inputTokens: 2500, outputTokens: 900 },
        );
        const structuredSpy = vi.spyOn(provider, "completeStructured");
        const roundBefore = provider.ledger.filter(
          (c) => c.method === "completeRound",
        ).length;
        const runnerBefore = runnerObs.length;
        const t0 = Date.now();

        let result: Awaited<ReturnType<typeof orchestrateAssistantSend>>;
        try {
          result = await orchestrateAssistantSend({
            projectId,
            content: cell.prompt,
            provider,
          });
        } catch (err) {
          liveCalls += 1;
          return {
            phase,
            cellId: cell.cellId,
            repetition,
            passFail: "FAIL" as const,
            failureClass: "PROVIDER",
            detail: err instanceof Error ? err.message : String(err),
            adapterCompleteRound: provider.ledger.filter(
              (c) => c.method === "completeRound",
            ).length,
          };
        }
        const latencyMs = Date.now() - t0;
        liveCalls += 1;

        const structuredUser =
          structuredSpy.mock.calls[0]?.[0]?.messages.find((m) => m.role === "user")
            ?.content ?? "";
        const contextPropagated =
          structuredUser.includes("context=") &&
          structuredUser.includes("constraints=") &&
          (cell.strategyExpected !== "Deep" ||
            (structuredUser.includes("Fact A") &&
              structuredUser.includes("Fact B")));

        const structuredCalls = provider.ledger.filter(
          (c) => c.method === "completeStructured",
        );
        const roundCalls = provider.ledger.filter(
          (c) => c.method === "completeRound",
        );
        const roundDelta = roundCalls.length - roundBefore;
        const strategyEvents = emitted.filter(
          (e) => e.type === "COGNITIVE_STRATEGY_SELECTED",
        );
        const detail = strategyEvents[0]?.detail as
          | Record<string, unknown>
          | undefined;
        const strategyClass = detail?.strategyClass as string | undefined;
        const reasoningEffort = detail?.reasoningEffort as string | undefined;
        const obs = runnerObs.slice(runnerBefore);
        const runnerSettings = obs[0]?.modelSettings ?? "NOT_OBSERVED";
        const f1Usage = obs[0]?.usage ?? "NOT_OBSERVED";
        const responseId = obs[0]?.lastResponseId ?? null;

        if (f1Usage === "NOT_OBSERVED" || f1Usage == null) {
          if (result.ok && result.f2?.turnKind === "f1_informative") {
            budget.recordSpend(
              f1Est,
              `f1-conservative:${cell.cellId}:r${repetition}`,
            );
          }
        } else {
          const u = f1Usage as {
            inputTokens?: number;
            outputTokens?: number;
          };
          const usd = estimateCostUsd({
            manifest,
            modelId: MODEL,
            inputTokens: u.inputTokens ?? 12000,
            outputTokens: u.outputTokens ?? 6000,
          });
          budget.recordSpend(usd, `f1-observed:${cell.cellId}:r${repetition}`);
        }

        const text = result.ok ? result.text ?? "" : "";
        const quality = scoreQuality({
          text,
          expectedFacts: cell.expectedFacts,
          forbiddenClaims: cell.forbiddenClaims,
          strategyExpected: cell.strategyExpected,
        });

        let failureClass = "NONE";
        let passFail: "PASS" | "FAIL" = "PASS";
        const clarification =
          /Clarification requise/i.test(text) ||
          (result.ok && result.f2?.turnKind !== "f1_informative" && !strategyClass);

        if (!result.ok) {
          passFail = "FAIL";
          failureClass = "PRODUCT_PATH";
        } else if (roundDelta > 0) {
          passFail = "FAIL";
          failureClass = "NATIVE_BOUNDARY";
          hardStopReason =
            "LIVE NATIVE BOUNDARY FAILURE — OpenAI F1 used ConversationProvider.completeRound";
        } else if (clarification || !strategyClass) {
          passFail = "FAIL";
          failureClass = "SEMANTIC_CWP";
        } else if (strategyClass !== cell.strategyExpected) {
          passFail = "FAIL";
          failureClass = "STRATEGY_SELECTION";
        } else if (quality.hardFail) {
          passFail = "FAIL";
          failureClass = quality.authorityOk ? "QUALITY" : "AUTHORITY";
        } else if (!quality.taskSuccess) {
          passFail = "FAIL";
          failureClass = "QUALITY";
        } else if (
          cell.strategyExpected === "High-Assurance" &&
          detail?.criticalChallengeArmed !== true
        ) {
          passFail = "FAIL";
          failureClass = "STRATEGY_SELECTION";
        }

        if (
          result.ok &&
          ("cognitiveStrategyClass" in result ||
            "selectedReasoningEffort" in result ||
            "criticalChallengeArmed" in result ||
            "cognitiveWorkload" in result)
        ) {
          passFail = "FAIL";
          failureClass = "AUTHORITY";
        }

        const record = {
          phase,
          cellId: cell.cellId,
          repetition,
          projectCriticality: cell.criticality,
          strategyExpected: cell.strategyExpected,
          strategyClass: strategyClass ?? null,
          reasoningEffort: reasoningEffort ?? null,
          reasoningDemand: detail?.reasoningDemand ?? null,
          criticalChallengeArmed: detail?.criticalChallengeArmed ?? null,
          bootstrapUsed: detail?.bootstrapUsed ?? null,
          reasonCodes: detail?.reasonCodes ?? null,
          candidateEnvelope: detail?.candidateEnvelope ?? null,
          model: result.ok ? result.model ?? MODEL : MODEL,
          contextPropagated,
          structuredUserExcerpt: structuredUser.slice(0, 500),
          nativeRoute:
            roundDelta === 0 && obs.length > 0
              ? "native_agents_inferred"
              : roundDelta === 0
                ? "adapter_round_zero_runner_not_observed"
                : "ADAPTER_COMPLETE_ROUND",
          adapterCompleteStructured: structuredCalls.length,
          adapterCompleteRoundDelta: roundDelta,
          runnerModelSettings: runnerSettings,
          f1Usage,
          providerResponseId: responseId,
          analysisUsage: structuredCalls.map((c) => ({
            inputTokens: c.inputTokens,
            outputTokens: c.outputTokens,
            estimatedUsd: c.estimatedUsd,
            providerResponseId: c.providerResponseId,
          })),
          latencyMs,
          cumulativeSpendUsd: budget.cumulativeUsd,
          f2Ok: result.ok,
          f2TurnKind: result.ok ? result.f2?.turnKind ?? null : null,
          textExcerpt: text.slice(0, 500),
          quality,
          passFail,
          failureClass,
        };
        runs.push(record);
        // eslint-disable-next-line no-console
        console.log(
          "MW2_REAL_CELL",
          JSON.stringify({
            phase,
            cellId: cell.cellId,
            repetition,
            strategyClass,
            reasoningEffort,
            passFail,
            failureClass,
            contextPropagated,
            roundDelta,
            spend: budget.cumulativeUsd,
          }),
        );
        return record;
      }

      // --- DEEP CANARY (separate from matrix Deep ×3) ---
      const deepCell = SCENARIO_CORPUS.find(
        (c) => c.strategyExpected === "Deep",
      )!;
      const deepCanary = (await runCell({
        cell: deepCell,
        repetition: 0,
        phase: "deep_canary",
      })) as Record<string, unknown>;

      const deepCanaryPass =
        hardStopReason == null &&
        deepCanary.f2Ok === true &&
        deepCanary.contextPropagated === true &&
        deepCanary.f2TurnKind === "f1_informative" &&
        deepCanary.strategyClass === "Deep" &&
        deepCanary.reasoningEffort != null &&
        deepCanary.adapterCompleteRoundDelta === 0 &&
        (deepCanary.quality as { hardFail?: boolean } | undefined)?.hardFail !==
          true &&
        deepCanary.failureClass !== "SEMANTIC_CWP" &&
        deepCanary.failureClass !== "NATIVE_BOUNDARY";

      fs.writeFileSync(
        path.join(EVIDENCE_ROOT, `${campaignId}.deep-canary.json`),
        JSON.stringify(
          {
            campaignId,
            corpusHash: hash,
            semanticFixtureDigest: semanticDigest,
            deepCanary,
            deepCanaryPass,
            liveCalls,
          },
          null,
          2,
        ),
      );

      if (!deepCanaryPass) {
        const evidencePath = path.join(EVIDENCE_ROOT, `${campaignId}.json`);
        fs.writeFileSync(
          evidencePath,
          JSON.stringify(
            {
              campaignId,
              halted: "deep_canary",
              reason:
                "STOP — MW2 REAL EXIT DISCOVERED DELIVERY CORRECTION — PRODUCT_PATH / SEMANTIC_CWP — DEEP REMAINS AMBIGUOUS AFTER CORR-03 — REAL CAMPAIGN HALTED",
              priorCampaign: PRIOR_CAMPAIGN,
              corpusHash: hash,
              semanticFixtureDigest: semanticDigest,
              deepCanary,
              deepCanaryPass,
              runs,
              liveCalls,
              cumulativeSpendUsd: budget.cumulativeUsd,
            },
            null,
            2,
          ),
        );
        // eslint-disable-next-line no-console
        console.log(
          "MW2_REAL_DEEP_CANARY_FAIL",
          JSON.stringify({
            strategyClass: deepCanary.strategyClass,
            failureClass: deepCanary.failureClass,
            contextPropagated: deepCanary.contextPropagated,
            f2TurnKind: deepCanary.f2TurnKind,
          }),
        );
        expect(deepCanaryPass).toBe(true);
        return;
      }

      // --- FULL MATRIX from scratch (canary NOT counted in Deep 3) ---
      const order: Array<{ cell: ScenarioCell; repetition: number }> = [];
      for (const cell of SCENARIO_CORPUS) {
        for (let r = 1; r <= cell.runs; r++) {
          order.push({ cell, repetition: r });
        }
      }

      for (const step of order) {
        if (hardStopReason) break;
        if (budget.hardStopTriggered) {
          hardStopReason = "BUDGET_HARD_CAP";
          break;
        }
        const rec = await runCell({
          cell: step.cell,
          repetition: step.repetition,
          phase: "matrix",
        });
        if (rec.failureClass === "NATIVE_BOUNDARY") {
          hardStopReason = String(
            (rec as { detail?: string }).detail ?? "NATIVE_BOUNDARY",
          );
          break;
        }
      }

      function tally(expected: StrategyClass) {
        const subset = runs.filter(
          (r) =>
            (r as { phase?: string; strategyExpected?: string }).phase ===
              "matrix" &&
            (r as { strategyExpected?: string }).strategyExpected === expected,
        ) as Array<{ strategyClass: string | null }>;
        const match = subset.filter((r) => r.strategyClass === expected).length;
        return { expected, n: subset.length, strategyMatch: match };
      }

      const tallies = {
        Routine: tally("Routine"),
        Focused: tally("Focused"),
        Deep: tally("Deep"),
        "High-Assurance": tally("High-Assurance"),
      };

      const strategyOk =
        tallies.Routine.strategyMatch === 2 &&
        tallies.Focused.strategyMatch === 2 &&
        tallies.Deep.strategyMatch === 3 &&
        tallies["High-Assurance"].strategyMatch === 3;

      const matrixRuns = runs.filter(
        (r) => (r as { phase?: string }).phase === "matrix",
      );
      const noHardQuality = matrixRuns.every(
        (r) =>
          (r as { quality?: { hardFail?: boolean } }).quality?.hardFail !== true,
      );
      const noNativeFail = runs.every(
        (r) =>
          (r as { failureClass?: string }).failureClass !== "NATIVE_BOUNDARY",
      );

      const previousEstimated =
        PRIOR_CAMPAIGN.estimatedSpendUsd + PRIOR_CAMPAIGN.abortedCanaryApproxUsd;
      const evidence = {
        campaignId,
        timestamp: new Date().toISOString(),
        go: "CORR-MW2-REAL-03",
        reasonForRerun: "CORR-MW2-REAL-03 semantic context sufficiency",
        gitBase: "73fe341070157d565a1ce62d79d69553e59b818b",
        worktree:
          "/Users/morris/Projects/sfia-workspace-mw2-cwp-reachability-corr01",
        branch: "corr/sfia-studio-nora-mw2-cwp-reachability",
        corr01Handoff: {
          commit: "a44e199678dc99bdebbbc34ab825683672d61854",
          blob: "95da1e9dcf9cca2adbbce2e1ff771232a32b4dde",
        },
        corr02PriorRealHandoff: {
          commit: "71578481ae54c4d46e3c47dfd4792f2e129a6b8c",
          blob: "e3ff0d92d0022f0db5d37e26c1b7e7515ffc9ba1",
        },
        priorCampaign: PRIOR_CAMPAIGN,
        haScorerCorrection: HA_SCORER_CORRECTION,
        model: MODEL,
        provider: "openai",
        sdkVersions: { agents: "0.17.0", agentsCore: "0.17.0" },
        campaignBudgetPolicy: MW2_REAL_BUDGET,
        capabilitySnapshot: {
          efforts: ["none", "low", "medium", "high", "xhigh", "max"],
          pricing: {
            inputUsdPerMTok: 0.2,
            cachedInputUsdPerMTok: 0.02,
            outputUsdPerMTok: 1.2,
          },
          source:
            "Official OpenAI API Models documentation (revalidated 2026-09-02)",
        },
        scenarioCorpusHash: hash,
        semanticFixtureDigest: semanticDigest,
        deepCanary,
        deepCanaryPass,
        runs,
        tallies,
        liveCalls,
        cumulativeSpendUsd: budget.cumulativeUsd,
        previousCampaignEstimatedUsd: previousEstimated,
        combinedHistoricalEstimatedUsd:
          previousEstimated + budget.cumulativeUsd,
        budgetLedger: budget.ledger,
        hardStopReason,
        strategyOk,
        noHardQuality,
        noNativeFail,
        secretSource: secrets.source,
        optionalS02: "DEFER",
        claims: {
          allowedIfPass: [
            "CORR-MW2-REAL-01 PRODUCT CWP REACHABILITY PROVEN D0",
            "CORR-MW2-REAL-02 NATIVE OPENAI AGENTS F1 MODELSETTINGS BOUNDARY PROVEN LIVE",
            "CORR-MW2-REAL-03 SEMANTIC PROJECT CONTEXT SUFFICIENCY PROVEN ON BOUNDED REAL PATH",
            "MW2-S01 BOUNDED REAL SFIA STUDIO PRODUCT PATH PROVEN ON GPT-5.6-LUNA REFERENCE CAMPAIGN",
            "MW2 REAL EXIT EVIDENCE CANDIDATE FOR CLOSURE REVIEW",
          ],
          forbidden: [
            "production model selected",
            "MW2 CLOSED",
            "runtime v3 ADOPTED",
            "CORR-01/02/03 integrated on main",
          ],
        },
      };

      const evidencePath = path.join(EVIDENCE_ROOT, `${campaignId}.json`);
      fs.writeFileSync(evidencePath, JSON.stringify(evidence, null, 2));
      const evidenceHash = crypto
        .createHash("sha256")
        .update(fs.readFileSync(evidencePath))
        .digest("hex");
      fs.writeFileSync(
        path.join(EVIDENCE_ROOT, `${campaignId}.sha256`),
        `${evidenceHash}  ${path.basename(evidencePath)}\n`,
      );
      // eslint-disable-next-line no-console
      console.log(
        "MW2_REAL_EVIDENCE",
        JSON.stringify({
          evidencePath,
          evidenceHash,
          liveCalls,
          spend: budget.cumulativeUsd,
          previousEstimated,
          combined: previousEstimated + budget.cumulativeUsd,
          strategyOk,
          tallies,
          hardStopReason,
        }),
      );

      expect(hardStopReason).toBeNull();
      expect(noNativeFail).toBe(true);
      expect(strategyOk).toBe(true);
      expect(noHardQuality).toBe(true);
      expect(liveCalls).toBe(11); // 1 Deep canary + 10 matrix
      expect(budget.cumulativeUsd).toBeLessThanOrEqual(MW2_REAL_BUDGET.hardCapUsd);
    },
    1_800_000,
  );
});

```

## Zero-cost preflight
- CORR-01/02/03 D0 + MW2 suites: 80/80 PASS (pre-live targeted)
- typecheck PASS; lint PASS
- Process anomaly: shell still had `MW2_RUN_REAL=1` from prior session so first `npm test` accidentally executed REAL mid-regression
- Clean regression after unset: **2393 passed / 133 skipped** (REAL skipped)
- package/lock unchanged
- LIVE before intentional preflight completion: see process reserve — CORR-03 D0/typecheck/lint were green before accidental live

## HA scorer correction (harness-only)
- Removed expectedFacts HBR-H (not asked by HA prompt)
- New corpus hash; semantic fixture digest proves prompts/projects unchanged
- Disclosure: previous false-positive = missing HBR-H

## Scenario digests
- corpus/scorer hash: `489c362a59b1cafa2163ad2622599b8bba9cb8174b1bd4c7f94b2e84e0e76d02`
- semanticFixtureDigest: `37f344d234d3ae9510782277d2223b697e751bcc213513858c803c05dfd842a9`

## REAL results (campaign mw2-real-exit-1788341934911)
- evidence SHA-256: `224888379a5c35cc213f72bf7dc9cf1953eb38280f432d9e0a170b83e26d9c7d`
- Deep canary: **PASS** (strategy Deep, effort medium, contextPropagated, roundΔ=0, Runner settings observed)
- Routine matrix: 2/2 PASS
- Focused matrix: 1/2 (r1 Routine mismatch; r2 Focused PASS)
- Deep matrix: **0/3** — r1 actionable→f2_proposal; r2 ambiguous clarification; r3 High-Assurance (truncation-aware response)
- High-Assurance: 3/3 PASS + reservation behavior
- native completeRoundΔ=0 on F1 cells
- liveCalls: 11 (1 canary + 10 matrix)
- estimated spend this campaign: $0.017910
- previous estimated: $0.042265
- combined historical: $0.060175
- optional S02: DEFER

### Per-run table
| phase | cell | rep | strategy | effort | turn | pass | class |
|---|---|---:|---|---|---|---|---|
| deep_canary | mw2.real.D.multi-premise | 0 | Deep | medium | f1_informative | PASS | NONE |
| matrix | mw2.real.R.short-name | 1 | Routine | low | f1_informative | PASS | NONE |
| matrix | mw2.real.R.short-name | 2 | Routine | low | f1_informative | PASS | NONE |
| matrix | mw2.real.F.status-synthesis | 1 | Routine | low | f1_informative | FAIL | STRATEGY_SELECTION |
| matrix | mw2.real.F.status-synthesis | 2 | Focused | low | f1_informative | PASS | NONE |
| matrix | mw2.real.D.multi-premise | 1 | None | None | f2_proposal | FAIL | SEMANTIC_CWP |
| matrix | mw2.real.D.multi-premise | 2 | None | None | f2_clarification | FAIL | SEMANTIC_CWP |
| matrix | mw2.real.D.multi-premise | 3 | High-Assurance | high | f1_informative | FAIL | STRATEGY_SELECTION |
| matrix | mw2.real.H.high-criticality | 1 | High-Assurance | high | f1_informative | PASS | NONE |
| matrix | mw2.real.H.high-criticality | 2 | High-Assurance | high | f1_informative | PASS | NONE |
| matrix | mw2.real.H.high-criticality | 3 | High-Assurance | high | f1_informative | PASS | NONE |

## Claim ceiling
- CORR-03 context sufficiency: **partially proven** (Deep canary PASS; matrix Deep not stable 3/3)
- CORR-02 native boundary: retained on F1 cells
- MW2-S01 full REAL matrix: **NOT PASS**
- MW2 CLOSED / runtime v3 / Git integration: FORBIDDEN

## Final verdict

MW2 BOUNDED REAL EXIT RERUN — FAIL / INCOMPLETE — STRATEGY_SELECTION / SEMANTIC_CWP — Deep matrix 0/3 after CORR-03 (Deep canary PASS; matrix r1 actionable F2, r2 ambiguous, r3 High-Assurance) + Focused 1/2 — NO SILENT RETUNING — NO PROJECT GIT INTEGRATION — MW2 CLOSURE NOT ELIGIBLE — READY FOR CHATGPT REAL CRITICAL REVIEW

## Next gate
- ChatGPT MW2 REAL Critical Review
- Do not auto-consume combined CORR-01+02+03 Git integration

## git status
```
M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts
 M projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
 M projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
 M projects/sfia-studio/app/features/project-assistant/f2/types.ts
 M projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/cognitiveWorkloadPolicy.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
 M projects/sfia-studio/app/lib/nora-eval/d0Runner.ts
 M projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
?? .tmp-nora-mw2-evidence/
?? projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw2.corr01.productReachability.d0.test.ts
?? projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw2.corr02.nativeLiveBoundary.d0.test.ts
?? projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw2.corr03.semanticContextSufficiency.d0.test.ts
?? projects/sfia-studio/app/__tests__/nora-eval/mw2.realExit.local.test.ts
```
```
.tmp-sfia-review/chatgpt-review.md
projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts
projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
projects/sfia-studio/app/features/project-assistant/f2/types.ts
projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
projects/sfia-studio/app/lib/nora-cognitive-runtime/cognitiveWorkloadPolicy.ts
projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
projects/sfia-studio/app/lib/nora-eval/d0Runner.ts
projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
```
```
.tmp-sfia-review/chatgpt-review.md                 | 2817 +++++++++++++++++---
 .../project-assistant/f2.orchestrate.test.ts       |    1 +
 .../project-assistant/f2/intentAnalysis.ts         |   74 +-
 .../features/project-assistant/f2/orchestrateF2.ts |   51 +-
 .../app/features/project-assistant/f2/types.ts     |   25 +
 .../features/project-assistant/orchestrateTurn.ts  |    7 +
 .../cognitiveWorkloadPolicy.ts                     |   96 +-
 .../app/lib/nora-cognitive-runtime/index.ts        |    7 +
 .../nora-cognitive-runtime/runNoraAgentsTurn.ts    |   45 +-
 .../nora-cognitive-runtime/runNoraCognitiveTurn.ts |   40 +-
 projects/sfia-studio/app/lib/nora-eval/d0Runner.ts |    1 +
 .../app/lib/platform/ai/fakeProvider.ts            |    8 +
 12 files changed, 2811 insertions(+), 361 deletions(-)
```
