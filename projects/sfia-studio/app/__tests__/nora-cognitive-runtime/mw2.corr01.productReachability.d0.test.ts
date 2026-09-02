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
