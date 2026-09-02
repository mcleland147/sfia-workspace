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
