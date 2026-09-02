/** @vitest-environment node */
/**
 * CORR-MW2-REAL-04 — Truth-C cognitive context + semantic intent/CWP stability D0.
 * LIVE OpenAI = 0. Fake substitutes external provider only.
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
import { ANALYSIS_SYSTEM } from "@/features/project-assistant/f2/intentAnalysis";
import { loadProjectRuntimeForAssistant } from "@/features/vertical-slice-ui/ProjectWorkspaceView";
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

const DEEP_PROMPT =
  "À partir des faits A–D du contexte, réconcilie les tensions entre vitesse de livraison, exigences d'auditabilité et plafond de coût. Propose une articulation cohérente des compromis possibles sans inventer de faits absents, sans prendre de HumanDecision, et sans revendiquer d'exécution.";

const DEEP_CONTEXT =
  "Fact A: delivery prefers a two-week slice with partial automation. Fact B: audit requires durable evidence of each HumanDecision and forbids silent auto-approval. Fact C: cost ceiling is USD 500 for the fixture wave and forbids a second paid judge. Fact D: operations wants fewer manual gates. These premises partially tension each other.";

function deepCwp(
  overrides: Partial<SemanticCognitiveWorkloadAssessment> = {},
): SemanticCognitiveWorkloadAssessment {
  return {
    ambiguity: "medium",
    reasoningDepth: "high",
    sourceBreadth: "high",
    toolDependency: "low",
    contradictionRisk: "medium",
    verificationNeed: "medium",
    ...overrides,
  };
}

function focusedCwp(): SemanticCognitiveWorkloadAssessment {
  return {
    ambiguity: "medium",
    reasoningDepth: "medium",
    sourceBreadth: "low",
    toolDependency: "low",
    contradictionRisk: "low",
    verificationNeed: "medium",
  };
}

function intentJson(input: {
  intentClass: "informative" | "actionable" | "ambiguous" | "execution_request";
  cognitiveWorkload?: SemanticCognitiveWorkloadAssessment | null;
  candidateCycleTypeId?: string | null;
  signals?: Record<string, boolean> | null;
}): string {
  return JSON.stringify({
    intentClass: input.intentClass,
    candidateCycleTypeId: input.candidateCycleTypeId ?? null,
    signals: input.signals ?? null,
    cognitiveWorkload: input.cognitiveWorkload ?? null,
    objective: "Bounded ask",
    scope: null,
    rephrasedRequest: "Rephrased",
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

describe("CORR-MW2-REAL-04 — Truth-C + intent/CWP stability", () => {
  const prevReset = process.env.SFIA_V2_RUNTIME_ALLOW_RESET;
  const prevProvider = process.env.OPS1_CONVERSATION_PROVIDER;
  const prevKey = process.env.OPENAI_API_KEY;
  const prevModel = process.env.OPENAI_MODEL;
  let emitSpy: ReturnType<typeof vi.spyOn> | undefined;

  beforeEach(() => {
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    // Prefer Truth-C path: do not force fake mode for OA availability.
    delete process.env.OPS1_CONVERSATION_PROVIDER;
    process.env.OPENAI_MODEL = "gpt-5.6-luna";
    delete process.env.OPENAI_API_KEY;
    resetRuntimeApplicationServiceForTests();
  });

  afterEach(() => {
    emitSpy?.mockRestore();
    emitSpy = undefined;
    if (prevReset === undefined) delete process.env.SFIA_V2_RUNTIME_ALLOW_RESET;
    else process.env.SFIA_V2_RUNTIME_ALLOW_RESET = prevReset;
    if (prevProvider === undefined) delete process.env.OPS1_CONVERSATION_PROVIDER;
    else process.env.OPS1_CONVERSATION_PROVIDER = prevProvider;
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
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-mw2-corr04-"));
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
      idempotencyKey: `idem:corr04-${Date.now()}-${Math.random()}`,
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

  it("D0-01 — Truth C full context includes Fact D beyond UI 240 summary", async () => {
    expect(DEEP_CONTEXT.length).toBeGreaterThan(240);
    expect(DEEP_CONTEXT.indexOf("Fact D")).toBeGreaterThan(240);

    const projectId = await createProject({
      criticality: "STANDARD",
      name: "Concord Constraint Mesh",
      objective:
        "Reconcile delivery speed, auditability, and cost ceiling for a synthetic studio fixture.",
      context: DEEP_CONTEXT,
      constraints: [
        "LECTURE SEULE",
        "AUCUNE EXÉCUTION",
        "No silent auto-approval",
        "Cost ceiling USD 500",
      ],
      shortReference: "CCM-1",
    });

    const loaded = await loadProjectRuntimeForAssistant(projectId);
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error("load failed");
    // UI projection remains truncated
    expect(loaded.project.contextSummary.length).toBeLessThanOrEqual(240);
    expect(loaded.project.contextSummary.includes("Fact D")).toBe(false);

    const provider = new FakeConversationProvider({
      scripted: [intentJson({ intentClass: "informative", cognitiveWorkload: deepCwp() })],
      toolScript: [{ kind: "message", text: "[TEST/FAKE] ok" }],
    });
    const structuredSpy = vi.spyOn(provider, "completeStructured");

    const result = await orchestrateAssistantSend({
      projectId,
      content: DEEP_PROMPT,
      provider,
    });
    expect(result.ok).toBe(true);
    expect(structuredSpy).toHaveBeenCalledTimes(1);
    const userMsg =
      structuredSpy.mock.calls[0]![0]!.messages.find((m) => m.role === "user")
        ?.content ?? "";
    expect(userMsg).toContain("Fact D:");
    expect(userMsg).toContain("contextSource=TRUTH_C_LPS");
    expect(userMsg).toContain("operations wants fewer manual gates");
    // Client DTO still truncated — no Truth C leak field
    expect(result).not.toHaveProperty("truthCContext");
    expect(result).not.toHaveProperty("fullContext");
  });

  it("D0-02 — Deep user effect can reach F1 / Deep via informative", async () => {
    const projectId = await createProject({
      criticality: "STANDARD",
      name: "Concord Constraint Mesh",
      objective:
        "Reconcile delivery speed, auditability, and cost ceiling for a synthetic studio fixture.",
      context: DEEP_CONTEXT,
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
      scripted: [intentJson({ intentClass: "informative", cognitiveWorkload: deepCwp() })],
      toolScript: [
        {
          kind: "message",
          text: "[TEST/FAKE] Reconcile A–D trade-offs. AUCUNE EXÉCUTION.",
        },
      ],
    });

    const result = await orchestrateAssistantSend({
      projectId,
      content: DEEP_PROMPT,
      provider,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error("failed");
    expect(result.f2?.turnKind).toBe("f1_informative");
    const events = emitted.filter((e) => e.type === "COGNITIVE_STRATEGY_SELECTED");
    expect(events[0]!.detail.strategyClass).toBe("Deep");
  });

  it("D0-03 — propose/recommend cognitive request stays informative (not F2)", async () => {
    const projectId = await createProject({
      criticality: "STANDARD",
      name: "Propose Fixture",
      objective: "Cognitive recommendation only",
      context: "Two options exist with mild tension.",
      constraints: ["LECTURE SEULE", "AUCUNE EXÉCUTION"],
      shortReference: "PRF",
    });
    const provider = new FakeConversationProvider({
      scripted: [
        intentJson({
          intentClass: "informative",
          cognitiveWorkload: focusedCwp(),
        }),
      ],
      toolScript: [{ kind: "message", text: "[TEST/FAKE] options" }],
    });
    const result = await orchestrateAssistantSend({
      projectId,
      content:
        "Compare les options et recommande la plus cohérente, sans décider ni exécuter.",
      provider,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error("failed");
    expect(result.f2?.turnKind).toBe("f1_informative");
  });

  it("D0-04 — true F2 cycle qualification still actionable", async () => {
    const projectId = await createProject({
      criticality: "STANDARD",
      name: "Cycle Fixture",
      objective: "Governed cycle path",
      context: "Ready for qualification.",
      constraints: ["LECTURE SEULE"],
      shortReference: "CYC",
    });
    const provider = new FakeConversationProvider({
      scripted: [
        intentJson({
          intentClass: "actionable",
          candidateCycleTypeId: "cyc:functional-architecture",
          signals: {
            structuralChange: true,
            securityImpact: false,
            architectureImpact: true,
            dataImpact: false,
            irreversible: false,
            lowRiskBounded: true,
          },
          cognitiveWorkload: focusedCwp(),
        }),
      ],
    });
    const result = await orchestrateAssistantSend({
      projectId,
      content:
        "Qualifie ce chantier en cycle Delivery et prépare la proposition.",
      provider,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error("failed");
    expect(result.f2?.turnKind).not.toBe("f1_informative");
  });

  it("D0-05 — structural underspecification still clarifies", async () => {
    const projectId = await createProject({
      criticality: "STANDARD",
      name: "Ambiguous Fixture",
      objective: "Underspecified effect",
      context: "Sparse.",
      constraints: ["LECTURE SEULE"],
      shortReference: "AMB",
    });
    const provider = new FakeConversationProvider({
      scripted: [intentJson({ intentClass: "ambiguous", cognitiveWorkload: null })],
    });
    const result = await orchestrateAssistantSend({
      projectId,
      content: "Fais quelque chose avec ça.",
      provider,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error("failed");
    expect(result.text).toMatch(/Clarification requise/i);
  });

  it("D0-06 — cognitive ambiguity may be high while intent stays informative", () => {
    expect(ANALYSIS_SYSTEM).toContain("intentClass = EFFET");
    expect(ANALYSIS_SYSTEM).toContain("cognitiveWorkload = CHARGE COGNITIVE");
    expect(ANALYSIS_SYSTEM).toContain(
      "high cognitive ambiguity ≠ intentClass ambiguous",
    );
    expect(ANALYSIS_SYSTEM).toContain(
      "N'IMPLIQUENT PAS à eux seuls actionable/F2",
    );
  });

  it("D0-07 — Focused fixture can carry moderate CWP without Routine coercion", async () => {
    const projectId = await createProject({
      criticality: "STANDARD",
      name: "Beacon Planning Fixture",
      objective: "Prepare a bounded planning note for a synthetic milestone.",
      context:
        "Milestone M1 target is 2026-09-15. Two open questions remain about stakeholder availability. No contradictory constraints recorded yet.",
      constraints: ["LECTURE SEULE", "AUCUNE EXÉCUTION", "Recommendation only"],
      shortReference: "BCN-P",
    });
    const emitted = spyStrategy();
    const provider = new FakeConversationProvider({
      scripted: [
        intentJson({ intentClass: "informative", cognitiveWorkload: focusedCwp() }),
      ],
      toolScript: [{ kind: "message", text: "[TEST/FAKE] status" }],
    });
    const result = await orchestrateAssistantSend({
      projectId,
      content:
        "Sur la base du contexte projet, propose une synthèse courte du statut de planification et indique quelles incertitudes restent à lever avant M1. Ne décide rien.",
      provider,
    });
    expect(result.ok).toBe(true);
    const events = emitted.filter((e) => e.type === "COGNITIVE_STRATEGY_SELECTED");
    expect(events[0]!.detail.strategyClass).toBe("Focused");
    expect(events[0]!.detail.strategyClass).not.toBe("Routine");
  });

  it("D0-08 — HIGH criticality remains High-Assurance", async () => {
    const projectId = await createProject({
      criticality: "HIGH",
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
    });
    const emitted = spyStrategy();
    const provider = new FakeConversationProvider({
      scripted: [
        intentJson({
          intentClass: "informative",
          cognitiveWorkload: {
            ambiguity: "low",
            reasoningDepth: "low",
            sourceBreadth: "low",
            toolDependency: "low",
            contradictionRisk: "low",
            verificationNeed: "low",
          },
        }),
      ],
      toolScript: [{ kind: "message", text: "[TEST/FAKE] Harbor; cutover unknown" }],
    });
    const result = await orchestrateAssistantSend({
      projectId,
      content:
        "Quel est le propriétaire du rollback, et quelle est la fenêtre de cutover production ? Si une information manque dans le projet, réserve clairement plutôt que d'inventer.",
      provider,
    });
    expect(result.ok).toBe(true);
    const events = emitted.filter((e) => e.type === "COGNITIVE_STRATEGY_SELECTED");
    expect(events[0]!.detail.strategyClass).toBe("High-Assurance");
    expect(events[0]!.detail.criticalChallengeArmed).toBe(true);
  });

  it("D0-09 — CORR-02 OpenAI native F1 routing retained", () => {
    const openaiLike = {
      providerId: "openai" as const,
      async complete() {
        return {
          text: "",
          usage: {
            model: "x",
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
            model: "x",
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

  it("D0-10 — client boundary: no CWP / Truth C leak", async () => {
    const projectId = await createProject({
      criticality: "LOW",
      name: "Boundary Fixture",
      objective: "Boundary",
      context: "Simple.",
      constraints: ["LECTURE SEULE"],
      shortReference: "BND",
    });
    const provider = new FakeConversationProvider({
      scripted: [intentJson({ intentClass: "informative", cognitiveWorkload: null })],
      toolScript: [{ kind: "message", text: "ok" }],
    });
    const result = await orchestrateAssistantSend({
      projectId,
      content: "Statut ?",
      provider,
    });
    expect(result.ok).toBe(true);
    expect(result).not.toHaveProperty("cognitiveWorkload");
    expect(result).not.toHaveProperty("cognitiveStrategyClass");
    expect(result).not.toHaveProperty("selectedReasoningEffort");
    expect(result).not.toHaveProperty("criticalChallengeArmed");
    expect(result).not.toHaveProperty("truthCContext");
    expect(result).not.toHaveProperty("contextSource");
  });

  it("contract — ANALYSIS_SYSTEM embeds required taxonomy anchors", () => {
    expect(ANALYSIS_SYSTEM).toMatch(/Analyse les tensions entre délai/);
    expect(ANALYSIS_SYSTEM).toMatch(/Qualifie ce chantier en cycle Delivery/);
    expect(ANALYSIS_SYSTEM).toMatch(/Exécute ce contrat/);
    expect(ANALYSIS_SYSTEM).toMatch(/sourceBreadth/);
    expect(ANALYSIS_SYSTEM).toMatch(/verificationNeed/);
  });

  it("helper — Truth C source marker is explicit", () => {
    const s = buildIntentProjectSummary({
      name: "n",
      objective: "o",
      context: "Fact D: beyond truncation marker",
      constraints: [],
      criticality: "STANDARD",
      lpsId: "lps:1",
      lpsVersion: 1,
      contextSource: "TRUTH_C_LPS",
    });
    expect(s).toContain("contextSource=TRUTH_C_LPS");
    expect(s).toContain("Fact D:");
  });
});
