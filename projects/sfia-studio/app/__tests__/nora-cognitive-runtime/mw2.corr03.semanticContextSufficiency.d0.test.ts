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
    const summary = buildIntentProjectSummary({
      name: "Concord Constraint Mesh",
      objective: "Reconcile delivery / audit / cost",
      context: "Fact A: two-week. Fact B: audit. Fact C: USD 500.",
      constraints: ["LECTURE SEULE", "AUCUNE EXÉCUTION", "Cost ceiling USD 500"],
      criticality: "STANDARD",
      lpsId: "lps:test",
      lpsVersion: 1,
      shortReference: "CCM-1",
      contextSource: "TEST_FALLBACK_UI_SUMMARY",
    });
    expect(summary).toContain("name=Concord Constraint Mesh");
    expect(summary).toContain("objective=Reconcile delivery / audit / cost");
    expect(summary).toContain("context=Fact A: two-week. Fact B: audit. Fact C: USD 500.");
    expect(summary).toContain(
      "constraints=LECTURE SEULE; AUCUNE EXÉCUTION; Cost ceiling USD 500",
    );
    expect(summary).toContain("criticality=STANDARD");
    expect(summary).toContain("shortReference=CCM-1");
    expect(summary).toContain("lps=lps:test@1");
    expect(summary).toContain("contextSource=TEST_FALLBACK_UI_SUMMARY");
    expect(
      buildIntentProjectSummary({
        name: "Concord Constraint Mesh",
        objective: "Reconcile delivery / audit / cost",
        context: "Fact A: two-week. Fact B: audit. Fact C: USD 500.",
        constraints: ["LECTURE SEULE", "AUCUNE EXÉCUTION", "Cost ceiling USD 500"],
        criticality: "STANDARD",
        lpsId: "lps:test",
        lpsVersion: 1,
        shortReference: "CCM-1",
        contextSource: "TEST_FALLBACK_UI_SUMMARY",
      }),
    ).toBe(summary);
  });

  it("helper — empty constraints stated honestly as (none)", () => {
    const summary = buildIntentProjectSummary({
      name: "Sparse",
      objective: "o",
      context: "",
      constraints: [],
      criticality: "LOW",
      lpsId: "lps:s",
      lpsVersion: 1,
      shortReference: null,
      contextSource: "TEST_FALLBACK_UI_SUMMARY",
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
