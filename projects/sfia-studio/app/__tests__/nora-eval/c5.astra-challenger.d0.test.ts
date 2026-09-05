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

  it("derived envelope 78/438/464; known subtotal ~13.32896 compatible with 15/18/20", () => {
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
    expect(d.usd.hardCapUsd).toBe(20);
    expect(d.usdFeasibility.ok).toBe(true);
    expect(d.usdFeasibility.status).toBe("COMPATIBLE_WITH_CURRENT_POLICY");
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
