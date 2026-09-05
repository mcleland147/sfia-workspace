/** @vitest-environment node */
/**
 * C4 — final deterministic safety / client-boundary — ZERO REAL.
 */
import { describe, expect, it } from "vitest";
import { ScriptedModel, assistantMessage } from "@openai/agents/testing";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach } from "vitest";
import {
  FakeConversationProvider,
  setConversationProviderForTests,
  type ConversationProvider,
  type ProviderChatMessage,
  type ProviderCompletionResult,
} from "@/lib/platform/ai";
import {
  buildGlobalMrStageAMatrix,
  createEvalAgentsUsdAccounting,
  createGlobalMrStageADriver,
  createMeteredEvalCellProviderFactory,
  deriveGlobalMrStageAEnvelope,
  GLOBAL_MR_STAGE_A_CALL_CAPS,
  GLOBAL_MR_STAGE_A_CELL_CAPS,
  MeteredConversationProvider,
  resolveEvalCellConversationProvider,
  runGlobalMrStageACell,
  type EvalCellProviderFactory,
} from "@/lib/nora-eval";
import { analyzeIntent } from "@/features/project-assistant/f2/intentAnalysis";
import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
import { projectAssistantSendAction } from "@/features/project-assistant/actions";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
import { resetMw5ChallengeStoreForTests } from "@/features/project-assistant/f2/mw5ChallengeSessionStore";

describe("C4-01 — Server Action has no Stage A eval seams", () => {
  it("projectAssistantSendAction parameter keys exclude Stage A eval controls", () => {
    // Static/type-level surrogate: inspect function source for forbidden Stage A seams.
    const src = projectAssistantSendAction.toString();
    expect(src).not.toMatch(/evalModelReasoningControl/);
    expect(src).not.toMatch(/evalCellProviderFactory/);
    expect(src).not.toMatch(/sharedCampaignBudget/);
    expect(src).not.toMatch(/usdAccounting/);
    // campaignBudget as Stage A lease injection must not appear on the action.
    expect(src).not.toMatch(/campaignBudget/);
  });
});

describe("C4-02 — factory mandatory when eval control active", () => {
  it("control + factory → provider from factory only", () => {
    let called = false;
    const factory: EvalCellProviderFactory = ({ modelId, reasoningEffort }) => {
      called = true;
      expect(modelId).toBe("gpt-5.6-sol");
      expect(reasoningEffort).toBe("high");
      return new FakeConversationProvider();
    };
    const arbitrary = new FakeConversationProvider();
    const resolved = resolveEvalCellConversationProvider({
      evalModelReasoningControl: {
        modelId: "gpt-5.6-sol",
        reasoningEffort: "high",
      },
      evalCellProviderFactory: factory,
      provider: arbitrary,
    });
    expect(called).toBe(true);
    expect(resolved).not.toBe(arbitrary);
  });

  it("control + provider only → undefined (fail-close)", () => {
    const resolved = resolveEvalCellConversationProvider({
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
      },
      provider: new FakeConversationProvider(),
    });
    expect(resolved).toBeUndefined();
  });

  it("no control + provider → historical passthrough", () => {
    const p = new FakeConversationProvider();
    expect(
      resolveEvalCellConversationProvider({ provider: p }),
    ).toBe(p);
  });
});

describe("C4-03 — structured F2 USD via MeteredConversationProvider", () => {
  it("C4-03A — USD preflight deny → 0 canonical claim / 0 dispatch", async () => {
    const state = createGlobalMrStageADriver({
      campaignId: `c4-03a-${Date.now()}`,
      carryInUsd: 20,
    });
    expect(state.budget.hardStopTriggered || state.budget.cumulativeUsd >= 20).toBe(
      true,
    );
    let dispatches = 0;
    class CountingFake implements ConversationProvider {
      readonly providerId = "fake-test";
      async complete() {
        dispatches += 1;
        return {
          text: "{}",
          usage: {
            inputTokens: 1,
            outputTokens: 1,
            totalTokens: 2,
            model: "gpt-5.6-luna",
            providerResponseId: "x",
          },
        };
      }
      async completeStructured() {
        return this.complete();
      }
    }
    const factory = createMeteredEvalCellProviderFactory({
      innerFactory: () => new CountingFake(),
      manifest: state.manifest,
      budget: state.budget,
      campaignBudget: state.campaignBudget,
      assumedPreflight: { inputTokens: 50, outputTokens: 20 },
    });
    const provider = factory({
      modelId: "gpt-5.6-luna",
      reasoningEffort: "none",
    });
    const before = state.campaignBudget.consumedModelInvocations;
    await expect(
      analyzeIntent({
        userContent: "Résume __F2_INFORMATIVE__",
        projectSummary: "p",
        provider,
        evalModelReasoningControl: {
          modelId: "gpt-5.6-luna",
          reasoningEffort: "none",
        },
      }),
    ).rejects.toThrow(/BUDGET_STOP/);
    expect(dispatches).toBe(0);
    expect(state.campaignBudget.consumedModelInvocations).toBe(before);
  });

  it("C4-03B — allowed structured → 1 claim / 1 dispatch / ledger + spend", async () => {
    const state = createGlobalMrStageADriver({
      campaignId: `c4-03b-${Date.now()}`,
    });
    let dispatches = 0;
    class CountingFake implements ConversationProvider {
      readonly providerId = "fake-test";
      async complete(messages: ProviderChatMessage[]) {
        dispatches += 1;
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
            inputTokens: 10,
            outputTokens: 5,
            totalTokens: 15,
            model: "gpt-5.6-luna",
            providerResponseId: "s",
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
    const factory = createMeteredEvalCellProviderFactory({
      innerFactory: () => new CountingFake(),
      manifest: state.manifest,
      budget: state.budget,
      campaignBudget: state.campaignBudget,
      assumedPreflight: { inputTokens: 50, outputTokens: 20 },
    });
    const provider = factory({
      modelId: "gpt-5.6-luna",
      reasoningEffort: "none",
    }) as MeteredConversationProvider;
    const beforeModel = state.campaignBudget.consumedModelInvocations;
    const beforeUsd = state.budget.cumulativeUsd;
    await analyzeIntent({
      userContent: "Résume __F2_INFORMATIVE__",
      projectSummary: "p",
      provider,
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
      },
    });
    expect(dispatches).toBe(1);
    expect(state.campaignBudget.consumedModelInvocations - beforeModel).toBe(1);
    expect(provider.ledger).toHaveLength(1);
    expect(provider.ledger[0]?.method).toBe("completeStructured");
    expect(state.budget.cumulativeUsd).toBeGreaterThan(beforeUsd);
  });

  it("C4-03D — after hardStopTriggered, next structured has 0 claim / 0 dispatch", async () => {
    const state = createGlobalMrStageADriver({
      campaignId: `c4-03d-${Date.now()}`,
    });
    // Exhaust authorization envelope.
    state.budget.recordSpend(20, "force-hard-cap");
    expect(state.budget.hardStopTriggered || state.budget.cumulativeUsd >= 20).toBe(
      true,
    );
    let dispatches = 0;
    const factory = createMeteredEvalCellProviderFactory({
      innerFactory: () => {
        const inner = new FakeConversationProvider();
        const orig = inner.completeStructured?.bind(inner);
        return {
          providerId: "fake-test",
          complete: async () => {
            dispatches += 1;
            return {
              text: "x",
              usage: {
                inputTokens: 1,
                outputTokens: 1,
                totalTokens: 2,
                model: "gpt-5.6-luna",
                providerResponseId: "d",
              },
            };
          },
          completeStructured: async (input: {
            messages: ProviderChatMessage[];
            schemaName: string;
            jsonSchema: Record<string, unknown>;
          }) => {
            dispatches += 1;
            if (orig) return orig(input);
            return {
              text: "x",
              usage: {
                inputTokens: 1,
                outputTokens: 1,
                totalTokens: 2,
                model: "gpt-5.6-luna",
                providerResponseId: "d",
              },
            };
          },
        } as ConversationProvider;
      },
      manifest: state.manifest,
      budget: state.budget,
      campaignBudget: state.campaignBudget,
      assumedPreflight: { inputTokens: 50, outputTokens: 20 },
    });
    const before = state.campaignBudget.consumedModelInvocations;
    await expect(
      analyzeIntent({
        userContent: "Résume __F2_INFORMATIVE__",
        projectSummary: "p",
        provider: factory({
          modelId: "gpt-5.6-luna",
          reasoningEffort: "none",
        }),
        evalModelReasoningControl: {
          modelId: "gpt-5.6-luna",
          reasoningEffort: "none",
        },
      }),
    ).rejects.toThrow(/BUDGET_STOP/);
    expect(dispatches).toBe(0);
    expect(state.campaignBudget.consumedModelInvocations).toBe(before);
  });
});

describe("C4-04 — maxRepeatsPerCell = 1; Option C envelope 78/438/464", () => {
  it("constant and derived envelope", () => {
    expect(GLOBAL_MR_STAGE_A_CELL_CAPS.maxRepeatsPerCell).toBe(1);
    const d = deriveGlobalMrStageAEnvelope();
    expect(d.maxCellExecutions).toBe(78);
    expect(d.maxModelInvocations).toBe(438);
    expect(d.maxAggregateRealCalls).toBe(464);
    expect(GLOBAL_MR_STAGE_A_CALL_CAPS.maxModelInvocations).toBe(438);
  });
});

describe("C4-05 — Evidence exposes f2_product execution truth", () => {
  it("F2 cell Evidence productPath=f2 and executionKind", async () => {
    const state = createGlobalMrStageADriver({
      campaignId: `c4-05-${Date.now()}`,
    });
    const cell = buildGlobalMrStageAMatrix({
      campaignId: state.campaignId,
    }).find((c) => c.executionKind === "f2_product")!;
    const out = await runGlobalMrStageACell({
      state,
      cell,
      executor: async () => ({
        passFail: "PASS",
        failureClass: "NONE",
        rawSummary: "f2-ok",
        usage: null,
      }),
    });
    expect(out.evidence?.productPath).toBe("f2");
    expect(out.evidence?.productPathAttempted).toBe("f2");
    expect(out.evidence?.productPathSucceeded).toBe(true);
    expect(out.evidence?.productObservation).toMatchObject({
      executionKind: "f2_product",
    });
    expect(out.evidence?.evidenceRefs.some((r) => r === "executionKind:f2_product")).toBe(
      true,
    );
  });
});

describe("C4-03C — F2 informative shares BudgetTracker structured + Agents", () => {
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
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-c4-f2-"));
    tempDirs.push(dir);
    sessionDbPath = path.join(dir, "session.sqlite");
    const runtime = getRuntimeApplicationService({
      productDbPath: path.join(dir, "oa.sqlite"),
      auditMode: "noop",
      nowIso: "2026-09-05T12:00:00.000Z",
    });
    const created = await runtime.createProject({
      name: "C4 F2",
      objective: "usd",
      context: "c4",
      criticality: "STANDARD",
      constraints: [],
      shortReference: "C4",
      idempotencyKey: `idem:c4-${Date.now()}-${Math.random()}`,
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

  it("shared BudgetTracker + canonical delta = analyzeIntent + Agents", async () => {
    const state = createGlobalMrStageADriver({
      campaignId: `c4-03c-${Date.now()}`,
    });
    const beforeModel = state.campaignBudget.consumedModelInvocations;
    const beforeUsd = state.budget.cumulativeUsd;
    const scripted = new ScriptedModel([
      [assistantMessage("PIN:gpt-5.6-luna:none")],
    ]);
    let meteredLedger: { method: string }[] = [];
    const innerFactory: EvalCellProviderFactory = () =>
      new FakeConversationProvider();
    const factory: EvalCellProviderFactory = (pin) => {
      const p = createMeteredEvalCellProviderFactory({
        innerFactory,
        manifest: state.manifest,
        budget: state.budget,
        campaignBudget: state.campaignBudget,
        assumedPreflight: { inputTokens: 40, outputTokens: 20 },
      })(pin);
      meteredLedger = (p as MeteredConversationProvider).ledger;
      return p;
    };
    const result = await orchestrateAssistantSend({
      projectId,
      content: "Résume l'objectif __F2_INFORMATIVE__",
      sessionDbPath,
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
        agentsModel: scripted,
      },
      evalCellProviderFactory: factory,
      campaignBudget: state.campaignBudget,
      usdAccounting: createEvalAgentsUsdAccounting({
        budget: state.budget,
        manifest: state.manifest,
        modelId: "gpt-5.6-luna",
        assumedInputTokens: 40,
        assumedOutputTokens: 20,
      }),
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(state.campaignBudget.consumedModelInvocations - beforeModel).toBe(2);
    expect(meteredLedger.some((e) => e.method === "completeStructured")).toBe(
      true,
    );
    expect(state.budget.cumulativeUsd).toBeGreaterThan(beforeUsd);
  });
});
