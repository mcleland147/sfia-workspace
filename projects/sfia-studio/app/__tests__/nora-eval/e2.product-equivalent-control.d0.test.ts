/** @vitest-environment node */
/**
 * E2 product-equivalent model×effort control — ZERO REAL.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { ScriptedModel, assistantMessage } from "@openai/agents/testing";
import {
  FakeConversationProvider,
  setConversationProviderForTests,
  TechnicalError,
  type ConversationProvider,
  type ProviderChatMessage,
  type ProviderCompletionResult,
} from "@/lib/platform/ai";
import { orchestrateProjectAssistantTurn } from "@/features/project-assistant/orchestrateTurn";
import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
import { analyzeIntent } from "@/features/project-assistant/f2/intentAnalysis";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
import { resetMw5ChallengeStoreForTests } from "@/features/project-assistant/f2/mw5ChallengeSessionStore";

/** Cell provider that stamps model identity into usage for Observation. */
class CellPinnedFakeProvider implements ConversationProvider {
  readonly providerId = "fake-test";
  readonly cellModelId: string;
  readonly cellEffort: string;
  structuredCalls = 0;
  private readonly inner: FakeConversationProvider;

  constructor(modelId: string, effort: string) {
    this.cellModelId = modelId;
    this.cellEffort = effort;
    this.inner = new FakeConversationProvider();
  }

  async complete(
    messages: ProviderChatMessage[],
  ): Promise<ProviderCompletionResult> {
    const r = await this.inner.complete(messages);
    return {
      ...r,
      usage: r.usage
        ? { ...r.usage, model: this.cellModelId }
        : {
            inputTokens: 1,
            outputTokens: 1,
            totalTokens: 2,
            model: this.cellModelId,
            providerResponseId: "cell-pin",
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
      usage: r.usage
        ? { ...r.usage, model: this.cellModelId }
        : {
            inputTokens: 1,
            outputTokens: 1,
            totalTokens: 2,
            model: this.cellModelId,
            providerResponseId: "cell-pin-struct",
          },
    };
  }
}

describe("E2 — product-equivalent model×effort control (deterministic)", () => {
  const previousFake = process.env.OPS1_CONVERSATION_PROVIDER;
  let sessionDbPath: string;
  const tempDirs: string[] = [];
  let projectId = "";

  beforeEach(async () => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    delete process.env.OPENAI_API_KEY;
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetRuntimeApplicationServiceForTests();
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-e2-prod-"));
    tempDirs.push(dir);
    sessionDbPath = path.join(dir, "session.sqlite");
    const runtime = getRuntimeApplicationService({
      productDbPath: path.join(dir, "oa-product.sqlite"),
      auditMode: "noop",
      nowIso: "2026-09-05T12:00:00.000Z",
    });
    const created = await runtime.createProject({
      name: "Projet E2 Product",
      objective: "Product-equivalent pin.",
      context: "Contexte E2 product path.",
      criticality: "STANDARD",
      constraints: ["Lecture seule"],
      shortReference: "E2P",
      idempotencyKey: `idem:e2-${Date.now()}-${Math.random()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("setup failed");
    projectId = created.projectId;
  });

  afterEach(() => {
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetRuntimeApplicationServiceForTests();
    while (tempDirs.length) {
      const dir = tempDirs.pop();
      if (dir) fs.rmSync(dir, { recursive: true, force: true });
    }
    if (previousFake === undefined) delete process.env.OPS1_CONVERSATION_PROVIDER;
    else process.env.OPS1_CONVERSATION_PROVIDER = previousFake;
  });

  for (const pin of [
    { modelId: "gpt-5.6-luna", reasoningEffort: "none" as const, ac: "F2-AC01" },
    {
      modelId: "gpt-5.6-terra",
      reasoningEffort: "medium" as const,
      ac: "F2-AC02",
    },
    { modelId: "gpt-5.6-sol", reasoningEffort: "high" as const, ac: "F2-AC03" },
  ]) {
    it(`${pin.ac} — F1 product orchestrator transmits ${pin.modelId}+${pin.reasoningEffort}`, async () => {
      const scripted = new ScriptedModel([
        [assistantMessage(`PIN:${pin.modelId}:${pin.reasoningEffort}`)],
      ]);
      const result = await orchestrateProjectAssistantTurn({
        projectId,
        content: "hello pin",
        sessionDbPath,
        provider: new FakeConversationProvider({ scripted: ["unused"] }),
        evalModelReasoningControl: {
          modelId: pin.modelId,
          reasoningEffort: pin.reasoningEffort,
          agentsModel: scripted,
        },
      });
      expect(result.ok).toBe(true);
      if (!result.ok) return;
      expect(result.text).toContain(`PIN:${pin.modelId}:${pin.reasoningEffort}`);
    });
  }

  it("F2-AC04 — analyzeIntent uses cell provider/model/effort (not live default)", async () => {
    const cell = new CellPinnedFakeProvider("gpt-5.6-terra", "medium");
    const out = await analyzeIntent({
      userContent: "Résume __F2_INFORMATIVE__",
      projectSummary: "Projet test",
      provider: cell,
      evalModelReasoningControl: {
        modelId: "gpt-5.6-terra",
        reasoningEffort: "medium",
      },
    });
    expect(cell.structuredCalls).toBe(1);
    expect(out.evalPinnedModelId).toBe("gpt-5.6-terra");
    expect(out.evalPinnedReasoningEffort).toBe("medium");
    expect(out.model).toBe("gpt-5.6-terra");
    expect(out.presentation).toBe("test_provider");
  });

  it("F2-AC05 — F2 informative → downstream F1 keeps same cell identity", async () => {
    const cell = new CellPinnedFakeProvider("gpt-5.6-luna", "none");
    const scripted = new ScriptedModel([
      [assistantMessage("PIN:gpt-5.6-luna:none")],
    ]);
    const result = await orchestrateAssistantSend({
      projectId,
      content: "Résume l'objectif __F2_INFORMATIVE__",
      sessionDbPath,
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
        agentsModel: scripted,
      },
      evalCellProviderFactory: ({ modelId, reasoningEffort }) => {
        expect(modelId).toBe("gpt-5.6-luna");
        expect(reasoningEffort).toBe("none");
        return cell;
      },
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.f2?.turnKind).toBe("f1_informative");
    expect(cell.structuredCalls).toBeGreaterThanOrEqual(1);
    expect(result.text).toContain("PIN:gpt-5.6-luna:none");
  });

  it("F2-AC06 — CWP-derived effort may differ but pin wins on F1 orchestrator", async () => {
    const scripted = new ScriptedModel([[assistantMessage("PINNED_NONE")]]);
    const result = await orchestrateProjectAssistantTurn({
      projectId,
      content: "Critical high-assurance analysis needed urgently",
      sessionDbPath,
      provider: new FakeConversationProvider({ scripted: ["unused"] }),
      semanticCognitiveWorkload: {
        ambiguity: "high",
        reasoningDepth: "high",
        sourceBreadth: "high",
        toolDependency: "high",
        contradictionRisk: "high",
        verificationNeed: "high",
      },
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
        agentsModel: scripted,
      },
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.text).toContain("PINNED_NONE");
  });

  it("F2-AC07 — absence d'override = comportement courant non régressé", async () => {
    const result = await orchestrateProjectAssistantTurn({
      projectId,
      content: "hello default",
      sessionDbPath,
      provider: new FakeConversationProvider({ scripted: ["DEFAULT_OK"] }),
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.text).toMatch(/TEST\/FAKE|DEFAULT_OK/);
  });

  it("F2-AC08 — minimal fail-close before analyzeIntent dispatch", async () => {
    const cell = new CellPinnedFakeProvider("gpt-5.6-luna", "minimal");
    await expect(
      analyzeIntent({
        userContent: "x",
        projectSummary: "p",
        provider: cell,
        evalModelReasoningControl: {
          modelId: "gpt-5.6-luna",
          reasoningEffort: "minimal" as never,
        },
      }),
    ).rejects.toBeInstanceOf(TechnicalError);
    expect(cell.structuredCalls).toBe(0);
  });

  it("F2-AC08b — unknown model fail-close before dispatch", async () => {
    const cell = new CellPinnedFakeProvider("gpt-9-unknown", "none");
    await expect(
      analyzeIntent({
        userContent: "x",
        projectSummary: "p",
        provider: cell,
        evalModelReasoningControl: {
          modelId: "gpt-9-unknown",
          reasoningEffort: "none",
        },
      }),
    ).rejects.toBeInstanceOf(TechnicalError);
    expect(cell.structuredCalls).toBe(0);
  });

  it("F2-AC09 — eval control without factory fail-close on F2 orchestrator", async () => {
    const result = await orchestrateAssistantSend({
      projectId,
      content: "x",
      sessionDbPath,
      provider: new CellPinnedFakeProvider("gpt-5.6-luna", "none"),
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
      },
      // no evalCellProviderFactory — C4-02
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.code).toBe("EVAL_CELL_PROVIDER_REQUIRED");
  });

  it("F2-AC09b — analyzeIntent without provider fail-close", async () => {
    await expect(
      analyzeIntent({
        userContent: "x",
        projectSummary: "p",
        evalModelReasoningControl: {
          modelId: "gpt-5.6-luna",
          reasoningEffort: "none",
        },
      }),
    ).rejects.toThrow(/EVAL_CELL_PROVIDER_REQUIRED/);
  });

  it("F2-AC10 — ZERO REAL (no OpenAI key consumed)", () => {
    expect(process.env.OPENAI_API_KEY).toBeUndefined();
  });
});
