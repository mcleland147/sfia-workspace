/** @vitest-environment node */
/**
 * C3 — call envelope + product path corrections — ZERO REAL.
 */
import { describe, expect, it } from "vitest";
import { ScriptedModel, assistantMessage } from "@openai/agents/testing";
import {
  FakeConversationProvider,
  type ConversationProvider,
  type OpenAiReasoningEffort,
  type ProviderChatMessage,
  type ProviderCompletionResult,
} from "@/lib/platform/ai";
import { CT_MAX_TOOL_ROUNDS } from "@/lib/platform/tools";
import {
  buildGlobalMrStageAMatrix,
  buildGlobalMrStageAWorkloadCallPlans,
  createEvalAgentsUsdAccounting,
  createGlobalMrStageADriver,
  createMeteredEvalCellProviderFactory,
  deriveGlobalMrStageAEnvelope,
  GLOBAL_MR_STAGE_A_CALL_CAPS,
  GLOBAL_MR_STAGE_A_CELL_CAPS,
  GLOBAL_MR_STAGE_A_CONTRACT_VERSION,
  GLOBAL_MR_STAGE_A_MAX_AGENTS_MODEL_TURNS,
  globalMrStageAEnvelopeProof,
  materializeSelectiveRepeat,
  runGlobalMrStageACell,
  type EvalCellProviderFactory,
  type GlobalMrStageAExecutor,
} from "@/lib/nora-eval";
import {
  buildRunnerModelSettingsForEffort,
  runNoraAgentsTurn,
  sfiaBoundaryInstructions,
} from "@/lib/nora-cognitive-runtime";
import { analyzeIntent } from "@/features/project-assistant/f2/intentAnalysis";
import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach } from "vitest";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
import { resetMw5ChallengeStoreForTests } from "@/features/project-assistant/f2/mw5ChallengeSessionStore";
import { setConversationProviderForTests } from "@/lib/platform/ai";

describe("C3-01 — cell executions ≠ model invocations", () => {
  it("derives Option C envelope: 78 cell executions ≠ model invocations", () => {
    expect(GLOBAL_MR_STAGE_A_MAX_AGENTS_MODEL_TURNS).toBe(
      CT_MAX_TOOL_ROUNDS + 1,
    );
    const plans = buildGlobalMrStageAWorkloadCallPlans();
    expect(plans["W-Routine"].maxModelInvocationsPerCell).toBe(5);
    expect(plans["W-Clarification"].maxModelInvocationsPerCell).toBe(6);
    expect(plans["W-Sources"].maxModelInvocationsPerCell).toBe(5);
    expect(plans["W-Clarification"].preAgentsStructuredModelCalls).toBe(1);

    const d = deriveGlobalMrStageAEnvelope();
    expect(d.maxCellExecutions).toBe(78);
    expect(GLOBAL_MR_STAGE_A_CELL_CAPS.maxCellExecutions).toBe(78);
    // primary 297 + Astra 33 = 330 base; top-18 primary F2×6=108; total 438
    expect(d.primaryBaseModelInvocationCeiling).toBe(297);
    expect(d.astraBaseModelInvocationCeiling).toBe(33);
    expect(d.baseModelInvocationCeiling).toBe(330);
    expect(d.repeatModelInvocationCeiling).toBe(108);
    expect(d.astraRepeatModelInvocationCeiling).toBe(0);
    expect(d.maxModelInvocations).toBe(438);
    expect(d.maxHostedWebOperations).toBe(26);
    expect(d.maxAggregateRealCalls).toBe(464);
    expect(GLOBAL_MR_STAGE_A_CALL_CAPS.maxModelInvocations).toBe(438);
    expect(GLOBAL_MR_STAGE_A_CALL_CAPS.maxAggregateRealCalls).toBe(464);
    expect(d.maxModelInvocations).not.toBe(d.maxCellExecutions);
    expect(d.usdFeasibility.ok).toBe(true);
    expect(d.usdFeasibility.status).toBe("COMPATIBLE_WITH_CURRENT_POLICY");
    expect(d.usdFeasibility.plannedModelTokenReserveUsd).toBeCloseTo(
      13.06896,
      4,
    );
    expect(d.usdFeasibility.knownPlannedSubtotalUsd).toBeCloseTo(13.32896, 4);
    expect(d.usdFeasibility.plannedReserveUsdWorstCaseWithRepeats).toBeCloseTo(
      13.06896,
      4,
    );
    expect(GLOBAL_MR_STAGE_A_CONTRACT_VERSION).toBe(
      "global-mr-campaign-contract-v3-candidate",
    );
    const proof = globalMrStageAEnvelopeProof();
    expect(proof.maxModelInvocations).toBe(438);
    expect(proof.maxCellExecutions).toBe(78);
    expect(proof.usdSemantics).toBe(
      "pre_dispatch_reservation_authorization_envelope",
    );
  });

  it("matrix paths match call plans (54 primary + 6 Astra)", () => {
    const cells = buildGlobalMrStageAMatrix({ campaignId: "c3-matrix" });
    expect(cells).toHaveLength(60);
    expect(cells.filter((c) => !c.isChallenger)).toHaveLength(54);
    expect(cells.filter((c) => c.isChallenger)).toHaveLength(6);
    // primary 27 f2 + 3 Astra f2 = 30; primary 18 agents + 2 Astra = 20; primary 9 mw6 + 1 Astra = 10
    expect(
      cells.filter((c) => c.executionKind === "f2_product"),
    ).toHaveLength(30);
    expect(
      cells.filter((c) => c.executionKind === "agents_cognitive"),
    ).toHaveLength(20);
    expect(
      cells.filter((c) => c.executionKind === "mw6_governed"),
    ).toHaveLength(10);
  });
});

describe("C3-04 — repeat pool does not latch campaign stop", () => {
  it("after 18 repeats, base cell still executes", async () => {
    const state = createGlobalMrStageADriver({
      campaignId: `c3-repeat-${Date.now()}`,
    });
    const cells = buildGlobalMrStageAMatrix({ campaignId: state.campaignId });
    const executor: GlobalMrStageAExecutor = async () => ({
      passFail: "PASS",
      failureClass: "NONE",
      rawSummary: "ok",
      usage: null,
    });
    for (let i = 0; i < 18; i += 1) {
      const out = await runGlobalMrStageACell({
        state,
        cell: materializeSelectiveRepeat(cells[i]!),
        executor,
      });
      expect(out.stopped).toBe(false);
    }
    const denied = await runGlobalMrStageACell({
      state,
      cell: materializeSelectiveRepeat(cells[18]!),
      executor,
    });
    expect(denied.cellDenied).toBe("SELECTIVE_REPEAT_POOL_EXHAUSTED");
    expect(state.stopReason).toBe("NONE");

    // Base cell still allowed
    let called = false;
    const base = await runGlobalMrStageACell({
      state,
      cell: cells[30]!,
      executor: async () => {
        called = true;
        return {
          passFail: "PASS",
          failureClass: "NONE",
          rawSummary: "base-ok",
          usage: null,
        };
      },
    });
    expect(called).toBe(true);
    expect(base.stopped).toBe(false);
    expect(state.stopReason).toBe("NONE");
  });
});

describe("C3-05 — canonical counters are source of truth", () => {
  it("executor reported 0 does not override canonical delta", async () => {
    const state = createGlobalMrStageADriver({
      campaignId: `c3-canon-${Date.now()}`,
    });
    const cell = buildGlobalMrStageAMatrix({
      campaignId: state.campaignId,
    }).find((c) => c.workloadId === "W-Routine")!;
    const usd = createEvalAgentsUsdAccounting({
      budget: state.budget,
      manifest: state.manifest,
      modelId: cell.model,
      assumedInputTokens: 50,
      assumedOutputTokens: 20,
    });
    const out = await runGlobalMrStageACell({
      state,
      cell,
      executor: async (c, ctx) => {
        const turn = await runNoraAgentsTurn({
          correlationId: "c3-canon",
          projectId: "proj",
          systemInstructions: sfiaBoundaryInstructions(),
          userContent: "x",
          model: new ScriptedModel([[assistantMessage("OK")]]),
          runnerModelSettings: buildRunnerModelSettingsForEffort(
            c.reasoningEffort,
          ),
          enableTools: false,
          maxTurns: 1,
          campaignBudget: ctx.campaignBudget,
          usdAccounting: usd,
        });
        return {
          passFail: "PASS",
          failureClass: "NONE",
          rawSummary: turn.text,
          usage: null,
          // Lie: report 0 while canonical claimed 1
          reportedModelInvocationsConsumed: 0,
          reportedHostedOperationsConsumed: 0,
        };
      },
    });
    expect(state.campaignBudget.consumedModelInvocations).toBe(1);
    expect(state.modelInvocations).toBe(1);
    expect(out.evidence?.productObservation?.canonicalDelta).toMatchObject({
      model: 1,
      reportedMismatch: true,
    });
  });
});

describe("C3-02 — F2 provider factory binding + canonical F2 counts", () => {
  const previousFake = process.env.OPS1_CONVERSATION_PROVIDER;
  const tempDirs: string[] = [];
  let projectId = "";
  let sessionDbPath = "";

  beforeEach(async () => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    delete process.env.OPENAI_API_KEY;
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetRuntimeApplicationServiceForTests();
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-c3-f2-"));
    tempDirs.push(dir);
    sessionDbPath = path.join(dir, "session.sqlite");
    const runtime = getRuntimeApplicationService({
      productDbPath: path.join(dir, "oa.sqlite"),
      auditMode: "noop",
      nowIso: "2026-09-05T12:00:00.000Z",
    });
    const created = await runtime.createProject({
      name: "C3 F2",
      objective: "binding",
      context: "c3",
      criticality: "STANDARD",
      constraints: [],
      shortReference: "C3",
      idempotencyKey: `idem:c3-${Date.now()}-${Math.random()}`,
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
  });

  it("factory receives exact Luna+none / Terra+medium / Sol+high", () => {
    const received: Array<{
      modelId: string;
      reasoningEffort: OpenAiReasoningEffort;
    }> = [];
    const factory: EvalCellProviderFactory = ({
      modelId,
      reasoningEffort,
    }) => {
      received.push({ modelId, reasoningEffort });
      return new FakeConversationProvider();
    };
    const pins = [
      { modelId: "gpt-5.6-luna", reasoningEffort: "none" as const },
      { modelId: "gpt-5.6-terra", reasoningEffort: "medium" as const },
      { modelId: "gpt-5.6-sol", reasoningEffort: "high" as const },
    ];
    for (const pin of pins) {
      const provider = factory(pin);
      expect(provider).toBeTruthy();
    }
    expect(received).toEqual(pins);
  });

  it("factory receives exact model+effort; F2 informative counts analyzeIntent + Agents", async () => {
    const received: Array<{
      modelId: string;
      reasoningEffort: OpenAiReasoningEffort;
    }> = [];
    class BoundFake implements ConversationProvider {
      readonly providerId = "fake-test";
      constructor(
        readonly modelId: string,
        readonly reasoningEffort: OpenAiReasoningEffort,
      ) {}
      async complete(messages: ProviderChatMessage[]) {
        return {
          text: `[TEST/FAKE] ${JSON.stringify({
            intentClass: "informative",
            candidateCycleTypeId: null,
            signals: null,
            cognitiveWorkload: null,
            objective: null,
            scope: null,
            rephrasedRequest: "x",
            outOfScope: [],
            risks: [],
            reservations: [],
            stopConditions: [],
            activatedBlocks: [],
            expectedOutcome: null,
            criticalJustification: null,
            requestedOperation: null,
          })}`,
          usage: {
            inputTokens: 1,
            outputTokens: 1,
            totalTokens: 2,
            model: this.modelId,
            providerResponseId: "b",
          },
        };
      }
      async completeStructured(input: {
        messages: ProviderChatMessage[];
        schemaName: string;
        jsonSchema: Record<string, unknown>;
      }): Promise<ProviderCompletionResult> {
        return this.complete(input.messages);
      }
    }
    const innerFactory: EvalCellProviderFactory = ({
      modelId,
      reasoningEffort,
    }) => {
      received.push({ modelId, reasoningEffort });
      return new BoundFake(modelId, reasoningEffort);
    };

    const state = createGlobalMrStageADriver({
      campaignId: `c3-f2-${Date.now()}`,
    });
    const before = state.campaignBudget.consumedModelInvocations;
    const beforeUsd = state.budget.cumulativeUsd;
    const scripted = new ScriptedModel([
      [assistantMessage("PIN:gpt-5.6-terra:medium")],
    ]);
    const result = await orchestrateAssistantSend({
      projectId,
      content: "Résume l'objectif __F2_INFORMATIVE__",
      sessionDbPath,
      evalModelReasoningControl: {
        modelId: "gpt-5.6-terra",
        reasoningEffort: "medium",
        agentsModel: scripted,
      },
      evalCellProviderFactory: createMeteredEvalCellProviderFactory({
        innerFactory,
        manifest: state.manifest,
        budget: state.budget,
        campaignBudget: state.campaignBudget,
        assumedPreflight: { inputTokens: 50, outputTokens: 20 },
      }),
      campaignBudget: state.campaignBudget,
      usdAccounting: createEvalAgentsUsdAccounting({
        budget: state.budget,
        manifest: state.manifest,
        modelId: "gpt-5.6-terra",
        assumedInputTokens: 50,
        assumedOutputTokens: 20,
      }),
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(received).toEqual([
      { modelId: "gpt-5.6-terra", reasoningEffort: "medium" },
    ]);
    expect(result.text).toContain("PIN:gpt-5.6-terra:medium");
    expect(result.f2?.turnKind).toBe("f1_informative");
    // analyzeIntent metered claim (1) + Agents claim (1) = 2
    expect(state.campaignBudget.consumedModelInvocations - before).toBe(2);
    expect(state.budget.cumulativeUsd).toBeGreaterThan(beforeUsd);
  });

  it("metered structured alone claims one canonical slot after USD preflight", async () => {
    const state = createGlobalMrStageADriver({
      campaignId: `c3-ai-${Date.now()}`,
    });
    const before = state.campaignBudget.consumedModelInvocations;
    const factory = createMeteredEvalCellProviderFactory({
      innerFactory: () => new FakeConversationProvider(),
      manifest: state.manifest,
      budget: state.budget,
      campaignBudget: state.campaignBudget,
      assumedPreflight: { inputTokens: 50, outputTokens: 20 },
    });
    const provider = factory({
      modelId: "gpt-5.6-luna",
      reasoningEffort: "none",
    });
    await analyzeIntent({
      userContent: "Résume __F2_INFORMATIVE__",
      projectSummary: "p",
      provider,
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
      },
    });
    expect(state.campaignBudget.consumedModelInvocations - before).toBe(1);
  });
});
