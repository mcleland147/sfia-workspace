# Review Pack — CORR-MW2-REAL-01 Product CWP Signal Reachability
# FULL / CRITICAL / CONTENT-COMPLETE

Status: **FULL** · **CRITICAL** · **CONTENT-COMPLETE**
Timestamp (Europe/Paris): 2026-09-02 10:39:43 CEST

## 1–9. Qualification / GO / Git / blocker provenance

- Cycle: **8 — Delivery / implementation — correction**
- Typology: **EVOL** · Profile: **CRITICAL**
- Exact Morris GO: **GO MORRIS — CORR-MW2-REAL-01 PRODUCT CWP SIGNAL REACHABILITY**
- Worktree: `/Users/morris/Projects/sfia-workspace-mw2-cwp-reachability-corr01`
- Branch: `corr/sfia-studio-nora-mw2-cwp-reachability`
- HEAD / base / origin/main: `73fe341070157d565a1ce62d79d69553e59b818b`
- Note: agent root move aborted earlier (unrelated worktree branch conflict); correction executed via absolute paths without move_agent_to_root.
- Phase 0 blocker handoff consumed:
  - commit `75f5eac6a504259d4ec53ed779986fc00817ce3d`
  - blob `121793e0cbd37bf17fe56219d9a22ec5c3f8c6fc`
- Source hierarchy: Build Doctrine / Roadmap / C5 / doc08 / doc09 KEEP (unchanged)
- Convergence Pre-check: MW2 Delivery integrated on main; REAL preflight BLOCKED on Routine/Deep product reachability; this correction is D0 Delivery only.

## 10. Reachability before correction

| Strategy | Before |
|----------|--------|
| Focused | product-reachable (bootstrap) |
| High-Assurance | product-reachable only if turn criticality string CRITICAL (product projects use HIGH — mapped in this corr) |
| Routine | NOT product-reachable |
| Deep | NOT product-reachable |

## 11–14. Design

- Reuse existing `analyzeIntent` structured call — **ADAPT** schema with INTERNAL `cognitiveWorkload`
- **NO** second provider/CWP call
- Governed merge in `cognitiveWorkloadPolicy.mergeCognitiveWorkloadSignals`
- Product: `orchestrateAssistantSend` → pass validated `analysis.cognitiveWorkload` → `orchestrateProjectAssistantTurn` → `runNoraCognitiveTurn`
- `trustedSfiaProfile` remains **null** (no Profile invention)
- Client DTO: no CWP fields (CORR-05 retained)

### Semantic dimensions

ambiguity, reasoningDepth, sourceBreadth, toolDependency, contradictionRisk, verificationNeed
∈ {low, medium, high, unknown}

### Factual precedence

- factual wins when known
- HIGH|CRITICAL → rigor=high + verification=high (cannot be downgraded by semantic low)
- contextSize / rigorCriticality / multimodality factual
- enableTools ≠ toolDependency
- UNKNOWN ≠ LOW

## 15–18. Files

### Created
- `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw2.corr01.productReachability.d0.test.ts`

### Modified
- `projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts`
- `projects/sfia-studio/app/features/project-assistant/f2/types.ts`
- `projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts`
- `projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts`
- `projects/sfia-studio/app/lib/nora-cognitive-runtime/cognitiveWorkloadPolicy.ts`
- `projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts`
- `projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts`
- `projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts`
- `projects/sfia-studio/app/lib/nora-eval/d0Runner.ts`
- `projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts`

---

# FULL NEW FILE CONTENTS

## FULL NEW — `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw2.corr01.productReachability.d0.test.ts`

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

---

# COMPLETE DIFFS vs HEAD (modified)

## DIFF — `projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts`

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

## DIFF — `projects/sfia-studio/app/features/project-assistant/f2/types.ts`

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

## DIFF — `projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index 048ce320..247eb16e 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -321,6 +321,7 @@ export async function orchestrateAssistantSend(input: {
     const f1 = await orchestrateProjectAssistantTurn({
       ...input,
       provider: input.provider,
+      semanticCognitiveWorkload: analysis.cognitiveWorkload,
     });
     if (!f1.ok) return f1;
     return {
```

## DIFF — `projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts`

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

## DIFF — `projects/sfia-studio/app/lib/nora-cognitive-runtime/cognitiveWorkloadPolicy.ts`

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

## DIFF — `projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts`

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

## DIFF — `projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
index 832c4db3..c3590fa9 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
@@ -98,15 +98,19 @@ export {
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

## DIFF — `projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts`

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

## DIFF — `projects/sfia-studio/app/lib/nora-eval/d0Runner.ts`

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

## DIFF — `projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts`

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

---

## 19–28. Product-path / guard proofs (D0)

| Case | Result |
|------|--------|
| R Routine via `orchestrateAssistantSend` + EventSink | **PASS** |
| F Focused (null semantic) | **PASS** |
| D Deep via semantic depth/breadth | **PASS** |
| H High-Assurance via product criticality **HIGH** + semantic low | **PASS** |
| Critical/HIGH precedence | **PASS** |
| null/invalid semantic → unknown, never Routine | **PASS** |
| UNKNOWN ≠ LOW | **PASS** |
| completeStructured called once (no extra CWP round) | **PASS** |
| trusted Profile remains null | **PASS** |
| client boundary no CWP fields | **PASS** |

## 29–36. QA

- CORR-MW2-DLV-01..05 suites: **PASS** (targeted re-run)
- MW2 eval matrix / strategy eval / CKC authority: **PASS**
- F2 orchestrate tests: **PASS**
- `npm run typecheck`: **PASS**
- `npm run lint`: **PASS** (No ESLint warnings or errors)
- `npm test`: **2379 passed** / 132 skipped / 0 failed
- `git diff --check`: clean
- package/lock: **unchanged**

## 37. Final file list

Created (1) + Modified (10) as listed above.

## 38–47. Anti-claims / posture

- LIVE OpenAI calls: **0**
- Fake/Real: Fake substitutes provider only · DETERMINISTIC PRODUCT-PATH PROVEN
- Proof tier: **D0 / DETERMINISTIC**
- project commit / push / PR / merge: **NO**
- Roadmap / C5 / doc09: **unchanged**
- reasoning.context / mode: **DEFER**
- production routing: **NOT SELECTED**
- MW2 REAL / R2 / R3 / CLOSED: **NOT CLAIMED**

## 48–51. Gaps / ceiling / verdict / next

### Reserves
- Semantic CWP quality under live OpenAI remains unproven (D0 Fake only)
- HIGH is the product criticality token; CRITICAL retained as turn-context alias
- No REAL campaign under this GO

### Claim ceiling
**CORR-MW2-REAL-01 — PRODUCT CWP SIGNAL REACHABILITY — DETERMINISTIC PRODUCT-PATH CANDIDATE PROVEN**

### Candidate verdict

**CORR-MW2-REAL-01 — PRODUCT CWP SIGNAL REACHABILITY — DELIVERY CANDIDATE PASS — ROUTINE/FOCUSED/DEEP/HIGH-ASSURANCE PRODUCT-REACHABLE IN D0 — FACTUAL SIGNAL PRECEDENCE PRESERVED — UNKNOWN ≠ LOW — NO EXTRA CWP PROVIDER CALL — NO SFIA PROFILE INVENTION — CWP INTERNAL BOUNDARY PRESERVED — CORR-MW2-DLV-01..05 RETAINED — ZERO LIVE OPENAI CALLS — FULL REGRESSION GREEN — NO PRODUCTION GIT INTEGRATION — READY FOR CHATGPT CRITICAL REVIEW**

### Next gate
ChatGPT Critical Review of CORR-MW2-REAL-01.
Do NOT auto project-commit / push / PR / merge / REAL.

Pack finalized (Europe/Paris): 2026-09-02 10:39:43 CEST
