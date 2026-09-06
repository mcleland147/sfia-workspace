/** @vitest-environment node */
/**
 * GLOBAL-MR-STAGE-A-REAL-CORR-01 — F2 binding + hosted parity + stop/repeat
 * governance — ZERO REAL.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { ScriptedModel, assistantMessage } from "@openai/agents/testing";
import {
  FakeConversationProvider,
  setConversationProviderForTests,
  type ConversationProvider,
  type ProviderChatMessage,
  type ProviderCompletionResult,
} from "@/lib/platform/ai";
import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
import { resetMw5ChallengeStoreForTests } from "@/features/project-assistant/f2/mw5ChallengeSessionStore";
import {
  buildGlobalMrStageAMatrix,
  canScheduleSelectiveRepeat,
  createEvalAgentsUsdAccounting,
  createGlobalMrStageADriver,
  deriveGlobalMrStageAEnvelope,
  globalMrStageAEnvelopeProof,
  isGlobalMrStageASelectiveRepeatTrigger,
  materializeSelectiveRepeat,
  runGlobalMrStageACell,
  type GlobalMrStageAExecutor,
} from "@/lib/nora-eval";
import {
  buildRunnerModelSettingsForEffort,
  claimHostedWebOperations,
  runNoraAgentsTurn,
  sfiaBoundaryInstructions,
} from "@/lib/nora-cognitive-runtime";

class CellPinnedFakeProvider implements ConversationProvider {
  readonly providerId = "fake-test";
  structuredCalls = 0;
  constructor(
    readonly cellModelId: string,
    readonly cellEffort: string,
  ) {}
  private readonly inner = new FakeConversationProvider();
  async complete(messages: ProviderChatMessage[]): Promise<ProviderCompletionResult> {
    const r = await this.inner.complete(messages);
    return {
      ...r,
      usage: {
        inputTokens: r.usage?.inputTokens ?? 1,
        outputTokens: r.usage?.outputTokens ?? 1,
        totalTokens: r.usage?.totalTokens ?? 2,
        model: this.cellModelId,
        providerResponseId: "corr-cell",
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
      usage: {
        inputTokens: r.usage?.inputTokens ?? 1,
        outputTokens: r.usage?.outputTokens ?? 1,
        totalTokens: r.usage?.totalTokens ?? 2,
        model: this.cellModelId,
        providerResponseId: "corr-cell-struct",
      },
    };
  }
}

describe("CORR-01 — F2 provider binding before mode gate (ZERO REAL)", () => {
  const previousFake = process.env.OPS1_CONVERSATION_PROVIDER;
  const previousModel = process.env.OPENAI_MODEL;
  const tempDirs: string[] = [];
  let projectId = "";
  let sessionDbPath = "";

  beforeEach(async () => {
    // Reproduce REAL defect context: no fake-force, no OPENAI_MODEL.
    delete process.env.OPS1_CONVERSATION_PROVIDER;
    delete process.env.OPENAI_MODEL;
    delete process.env.OPENAI_API_KEY;
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetRuntimeApplicationServiceForTests();
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-corr-f2-"));
    tempDirs.push(dir);
    sessionDbPath = path.join(dir, "session.sqlite");
    const runtime = getRuntimeApplicationService({
      productDbPath: path.join(dir, "oa.sqlite"),
      auditMode: "noop",
      nowIso: "2026-09-06T12:00:00.000Z",
    });
    const created = await runtime.createProject({
      name: "CORR F2",
      objective: "binding",
      context: "corr-01",
      criticality: "STANDARD",
      constraints: ["Lecture seule"],
      shortReference: "CORR",
      idempotencyKey: `idem:corr-f2-${Date.now()}-${Math.random()}`,
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
    if (previousModel === undefined) delete process.env.OPENAI_MODEL;
    else process.env.OPENAI_MODEL = previousModel;
  });

  it("F2-A/B/C/G — eval factory proceeds without OPENAI_MODEL; pin exact; no env mutation", async () => {
    const envBefore = process.env.OPENAI_MODEL;
    const cell = new CellPinnedFakeProvider("gpt-5.6-terra", "medium");
    const scripted = new ScriptedModel([
      [assistantMessage("PIN:gpt-5.6-terra:medium")],
    ]);
    const result = await orchestrateAssistantSend({
      projectId,
      content: "Résume l'objectif __F2_INFORMATIVE__",
      sessionDbPath,
      // no input.provider — REAL defect path
      evalModelReasoningControl: {
        modelId: "gpt-5.6-terra",
        reasoningEffort: "medium",
        agentsModel: scripted,
      },
      evalCellProviderFactory: ({ modelId, reasoningEffort }) => {
        expect(modelId).toBe("gpt-5.6-terra");
        expect(reasoningEffort).toBe("medium");
        return cell;
      },
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(cell.structuredCalls).toBeGreaterThanOrEqual(1);
    expect(result.mode).toBe("fixture");
    expect(process.env.OPENAI_MODEL).toBe(envBefore);
    expect(process.env.OPENAI_API_KEY).toBeUndefined();
  });

  it("F2-E — eval control without factory → EVAL_CELL_PROVIDER_REQUIRED", async () => {
    const result = await orchestrateAssistantSend({
      projectId,
      content: "x",
      sessionDbPath,
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
      },
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.code).toBe("EVAL_CELL_PROVIDER_REQUIRED");
  });

  it("F2-F — no eval control + absent provider config → historical PROVIDER_UNAVAILABLE", async () => {
    const result = await orchestrateAssistantSend({
      projectId,
      content: "x",
      sessionDbPath,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.code).toBe("PROVIDER_UNAVAILABLE");
  });
});

describe("CORR-02 — hosted observation / canonical parity (ZERO REAL)", () => {
  it("H-A — deterministic fixture hosted observation → zero REAL hosted budget", async () => {
    const state = createGlobalMrStageADriver({
      campaignId: `corr-ha-${Date.now()}`,
    });
    const cell = buildGlobalMrStageAMatrix({
      campaignId: state.campaignId,
    }).find((c) => c.workloadId === "W-Sources")!;
    const usd = createEvalAgentsUsdAccounting({
      budget: state.budget,
      manifest: state.manifest,
      modelId: cell.model,
      assumedInputTokens: 40,
      assumedOutputTokens: 20,
    });
    const out = await runGlobalMrStageACell({
      state,
      cell,
      executor: async (c, ctx) => {
        const turn = await runNoraAgentsTurn({
          correlationId: "corr-ha",
          projectId: "proj",
          systemInstructions: sfiaBoundaryInstructions(),
          userContent: "search",
          model: new ScriptedModel([[assistantMessage("FIXTURE_OK")]]),
          runnerModelSettings: buildRunnerModelSettingsForEffort(
            c.reasoningEffort,
          ),
          enableTools: true,
          enableHostedWebSearch: true,
          maxTurns: 1,
          campaignBudget: ctx.campaignBudget,
          usdAccounting: usd,
          deterministicHostedWebSearchCalls: [
            {
              type: "hosted_tool_call",
              name: "web_search_call",
              status: "completed",
              providerData: {
                type: "web_search_call",
                action: {
                  type: "search",
                  sources: [{ type: "url", url: "https://example.com" }],
                },
              },
            },
          ],
        });
        const observed = turn.hostedSearchObserve?.rawCallsObserved ?? 0;
        return {
          passFail: "PASS" as const,
          failureClass: "NONE" as const,
          rawSummary: turn.text,
          usage: null,
          reportedHostedOperationsConsumed: 0, // fixture ≠ REAL consumption
          productObservation: {
            deterministicBoundaryUsed:
              turn.hostedSearchObserve?.deterministicBoundaryUsed === true,
            rawCallsObserved: observed,
          },
        };
      },
    });
    expect(state.campaignBudget.consumedHostedWebOperations).toBe(0);
    expect(out.stopped).toBe(false);
    // Observed REAL hosted = 0 → cannot claim hosted REAL PASS
    expect(out.evidence?.passFail).toBe("NOT_PROVEN");
  });

  it("H-B — no factual live hosted → canonical hosted delta 0", async () => {
    const state = createGlobalMrStageADriver({
      campaignId: `corr-hb-${Date.now()}`,
    });
    const cell = buildGlobalMrStageAMatrix({
      campaignId: state.campaignId,
    }).find((c) => c.workloadId === "W-Routine")!;
    const out = await runGlobalMrStageACell({
      state,
      cell,
      executor: async () => ({
        passFail: "PASS",
        failureClass: "NONE",
        rawSummary: "no-hosted",
        usage: null,
        reportedHostedOperationsConsumed: 0,
      }),
    });
    expect(out.evidence?.productObservation?.canonicalDelta).toMatchObject({
      hosted: 0,
      reportedMismatch: false,
    });
    expect(state.stopReason).toBe("NONE");
  });

  it("H-C/F — simulated factual N hosted → canonical delta N once; match → no stop", async () => {
    const state = createGlobalMrStageADriver({
      campaignId: `corr-hc-${Date.now()}`,
    });
    const cell = buildGlobalMrStageAMatrix({
      campaignId: state.campaignId,
    }).find((c) => c.workloadId === "W-Sources")!;
    const out = await runGlobalMrStageACell({
      state,
      cell,
      executor: async (_c, ctx) => {
        expect(claimHostedWebOperations(ctx.campaignBudget, 2)).toBe(true);
        return {
          passFail: "PASS",
          failureClass: "NONE",
          rawSummary: "hosted-n",
          usage: null,
          reportedHostedOperationsConsumed: 2,
        };
      },
    });
    expect(state.campaignBudget.consumedHostedWebOperations).toBe(2);
    expect(out.evidence?.productObservation?.canonicalDelta).toMatchObject({
      hosted: 2,
      reportedMismatch: false,
      factualHostedObserved: 2,
    });
    expect(out.evidence?.passFail).toBe("PASS");
    expect(state.stopReason).toBe("NONE");
  });

  it("H-D — observed 0 while canonical >0 → Evidence integrity hard stop", async () => {
    const state = createGlobalMrStageADriver({
      campaignId: `corr-hd-${Date.now()}`,
    });
    const cell = buildGlobalMrStageAMatrix({
      campaignId: state.campaignId,
    }).find((c) => c.workloadId === "W-Sources")!;
    const out = await runGlobalMrStageACell({
      state,
      cell,
      executor: async (_c, ctx) => {
        claimHostedWebOperations(ctx.campaignBudget, 1);
        return {
          passFail: "PASS",
          failureClass: "NONE",
          rawSummary: "mismatch-0",
          usage: null,
          reportedHostedOperationsConsumed: 0,
          productObservation: {
            mw6AuthorityComposition: { liveHostedDispatchCalls: 0 },
          },
        };
      },
    });
    expect(out.stopped).toBe(true);
    expect(state.stopReason).toBe("EVIDENCE_INTEGRITY_HOSTED_MISMATCH");
    expect(out.evidence).toBeTruthy();
  });

  it("H-E — observed N while canonical != N → hard stop", async () => {
    const state = createGlobalMrStageADriver({
      campaignId: `corr-he-${Date.now()}`,
    });
    const cell = buildGlobalMrStageAMatrix({
      campaignId: state.campaignId,
    }).find((c) => c.workloadId === "W-Sources")!;
    const out = await runGlobalMrStageACell({
      state,
      cell,
      executor: async (_c, ctx) => {
        claimHostedWebOperations(ctx.campaignBudget, 1);
        return {
          passFail: "PASS",
          failureClass: "NONE",
          rawSummary: "mismatch-n",
          usage: null,
          reportedHostedOperationsConsumed: 3,
        };
      },
    });
    expect(out.stopped).toBe(true);
    expect(state.stopReason).toBe("EVIDENCE_INTEGRITY_HOSTED_MISMATCH");
  });

  it("H-G — W-Sources PASS with observed 0 → NOT_PROVEN (not hosted REAL PASS)", async () => {
    const state = createGlobalMrStageADriver({
      campaignId: `corr-hg-${Date.now()}`,
    });
    const cell = buildGlobalMrStageAMatrix({
      campaignId: state.campaignId,
    }).find((c) => c.workloadId === "W-Sources")!;
    const out = await runGlobalMrStageACell({
      state,
      cell,
      executor: async () => ({
        passFail: "PASS",
        failureClass: "NONE",
        rawSummary: "no-live-hosted",
        usage: null,
        reportedHostedOperationsConsumed: 0,
      }),
    });
    expect(out.evidence?.passFail).toBe("NOT_PROVEN");
    expect(out.evidence?.failureClass).toBe("MISSING_OBSERVABLE");
    expect(state.stopReason).toBe("NONE");
  });
});

describe("CORR-03A — systemic config hard stop (ZERO REAL)", () => {
  it("S-A/B/C/E — first PROVIDER_UNAVAILABLE latches stop; later cells/repeats denied", async () => {
    const state = createGlobalMrStageADriver({
      campaignId: `corr-sa-${Date.now()}`,
    });
    const cells = buildGlobalMrStageAMatrix({ campaignId: state.campaignId });
    const f2 = cells.find((c) => c.executionKind === "f2_product")!;
    let calls = 0;
    const executor: GlobalMrStageAExecutor = async () => {
      calls += 1;
      return {
        passFail: "INCONCLUSIVE",
        failureClass: "PROVIDER_ERROR",
        rawSummary: "provider_unavailable:PROVIDER_UNAVAILABLE missing OPENAI_MODEL",
        usage: null,
        productObservation: { code: "PROVIDER_UNAVAILABLE" },
        reportedHostedOperationsConsumed: 0,
        reportedModelInvocationsConsumed: 0,
      };
    };
    const first = await runGlobalMrStageACell({ state, cell: f2, executor });
    expect(first.evidence).toBeTruthy();
    expect(state.stopReason).toBe("REQUIRED_CONFIG_UNAVAILABLE");
    expect(calls).toBe(1);
    const hostedBefore = state.hostedOperations;
    const modelBefore = state.modelInvocations;

    const second = await runGlobalMrStageACell({
      state,
      cell: cells.find((c) => c.workloadId === "W-Routine")!,
      executor,
    });
    expect(second.stopped).toBe(true);
    expect(second.evidence).toBeNull();
    expect(calls).toBe(1);
    expect(state.hostedOperations).toBe(hostedBefore);
    expect(state.modelInvocations).toBe(modelBefore);

    const repeatDenied = await runGlobalMrStageACell({
      state,
      cell: materializeSelectiveRepeat(
        cells.find((c) => c.workloadId === "W-Memory" && !c.isChallenger)!,
        "TOP_CANDIDATE",
      ),
      executor,
    });
    expect(repeatDenied.stopped).toBe(true);
    expect(calls).toBe(1);
  });

  it("S-D — isolated cognitive INCONCLUSIVE does NOT hard-stop", async () => {
    const state = createGlobalMrStageADriver({
      campaignId: `corr-sd-${Date.now()}`,
    });
    const cell = buildGlobalMrStageAMatrix({
      campaignId: state.campaignId,
    }).find((c) => c.workloadId === "W-Analysis")!;
    const out = await runGlobalMrStageACell({
      state,
      cell,
      executor: async () => ({
        passFail: "INCONCLUSIVE",
        failureClass: "INCONCLUSIVE",
        rawSummary: "ambiguous cognitive outcome",
        usage: null,
        reportedHostedOperationsConsumed: 0,
      }),
    });
    expect(out.stopped).toBe(false);
    expect(state.stopReason).toBe("NONE");
  });
});

describe("CORR-03B — selective repeat trigger governance (ZERO REAL)", () => {
  it("R-A/B — no trigger / generic INCONCLUSIVE → denied", () => {
    const state = createGlobalMrStageADriver({
      campaignId: `corr-ra-${Date.now()}`,
    });
    const base = buildGlobalMrStageAMatrix({
      campaignId: state.campaignId,
    }).find((c) => !c.isChallenger)!;
    expect(canScheduleSelectiveRepeat(state, base).allowed).toBe(false);
    expect(canScheduleSelectiveRepeat(state, base, null).reason).toBe(
      "SELECTIVE_REPEAT_TRIGGER_REQUIRED",
    );
    expect(isGlobalMrStageASelectiveRepeatTrigger("passFail_INCONCLUSIVE")).toBe(
      false,
    );
    expect(() =>
      materializeSelectiveRepeat(base, "passFail_INCONCLUSIVE" as never),
    ).toThrow(/SELECTIVE_REPEAT_TRIGGER_REQUIRED/);
  });

  it("R-C/D — valid trigger materializes runIndex=1 with Evidence trigger", async () => {
    const state = createGlobalMrStageADriver({
      campaignId: `corr-rc-${Date.now()}`,
    });
    const base = buildGlobalMrStageAMatrix({
      campaignId: state.campaignId,
    }).find((c) => c.workloadId === "W-Routine")!;
    const repeat = materializeSelectiveRepeat(base, "BORDERLINE");
    expect(repeat.runIndex).toBe(1);
    expect(repeat.selectiveRepeatTrigger).toBe("BORDERLINE");
    const out = await runGlobalMrStageACell({
      state,
      cell: repeat,
      executor: async () => ({
        passFail: "PASS",
        failureClass: "NONE",
        rawSummary: "rep",
        usage: null,
        reportedHostedOperationsConsumed: 0,
      }),
    });
    expect(out.stopped).toBe(false);
    expect(out.evidence?.evidenceRefs).toEqual(
      expect.arrayContaining(["selectiveRepeatTrigger:BORDERLINE"]),
    );
    expect(out.evidence?.productObservation?.selectiveRepeatTrigger).toBe(
      "BORDERLINE",
    );
  });

  it("R-E/F/G/H — second repeat denied; Astra denied; pool 18; exhaustion non-latching", async () => {
    const state = createGlobalMrStageADriver({
      campaignId: `corr-re-${Date.now()}`,
    });
    const cells = buildGlobalMrStageAMatrix({ campaignId: state.campaignId });
    const primary = cells.filter((c) => !c.isChallenger);
    const astra = cells.find((c) => c.isChallenger)!;
    expect(
      canScheduleSelectiveRepeat(state, astra, "TOP_CANDIDATE").allowed,
    ).toBe(false);
    expect(() => materializeSelectiveRepeat(astra, "TOP_CANDIDATE")).toThrow(
      /SELECTIVE_REPEAT_DENIED/,
    );

    const executor: GlobalMrStageAExecutor = async () => ({
      passFail: "PASS",
      failureClass: "NONE",
      rawSummary: "ok",
      usage: null,
      reportedHostedOperationsConsumed: 0,
    });
    for (let i = 0; i < 18; i += 1) {
      const out = await runGlobalMrStageACell({
        state,
        cell: materializeSelectiveRepeat(primary[i]!, "SUSPECTED_VARIANCE"),
        executor,
      });
      expect(out.stopped).toBe(false);
    }
    expect(state.selectiveRepeatsUsed).toBe(18);
    const nineteenth = await runGlobalMrStageACell({
      state,
      cell: materializeSelectiveRepeat(primary[18]!, "TOP_CANDIDATE"),
      executor,
    });
    expect(nineteenth.cellDenied).toBe("SELECTIVE_REPEAT_POOL_EXHAUSTED");
    expect(state.stopReason).toBe("NONE");

    // Same base cannot repeat twice
    expect(
      canScheduleSelectiveRepeat(state, primary[0]!, "BORDERLINE").allowed,
    ).toBe(false);

    const baseStill = await runGlobalMrStageACell({
      state,
      cell: primary[30]!,
      executor,
    });
    expect(baseStill.stopped).toBe(false);
    expect(state.stopReason).toBe("NONE");
  });
});

describe("CORR — Option C envelope immutable", () => {
  it("deriveGlobalMrStageAEnvelope unchanged 78/438/26/464 + FinOps 15/18/20", () => {
    const env = deriveGlobalMrStageAEnvelope();
    expect(env.primaryBaseCells).toBe(54);
    expect(env.astraChallengerCells).toBe(6);
    expect(env.baseCells).toBe(60);
    expect(env.maxCellExecutions).toBe(78);
    expect(env.maxModelInvocations).toBe(438);
    expect(env.maxHostedWebOperations).toBe(26);
    expect(env.maxAggregateRealCalls).toBe(464);
    expect(env.maxSelectiveRepeats).toBe(18);
    const proof = globalMrStageAEnvelopeProof();
    expect(proof.usd).toEqual({
      targetUsd: 15,
      softStopUsd: 18,
      hardCapUsd: 20,
    });
    expect(proof.contractVersion).toBe(
      "global-mr-campaign-contract-v3-candidate",
    );
  });
});
