/** @vitest-environment node */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  FakeConversationProvider,
  setConversationProviderForTests,
} from "@/lib/platform/ai";
import { analyzeIntent } from "@/features/project-assistant/f2/intentAnalysis";
import { createCellProvider } from "@/lib/nora-eval";

const AMBIGUOUS_JSON = JSON.stringify({
  intentClass: "ambiguous",
  candidateCycleTypeId: null,
  signals: null,
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

describe("MW0 provider injection seam (no process.env matrix)", () => {
  const previousModel = process.env.OPENAI_MODEL;
  const previousEffort = process.env.OPENAI_REASONING_EFFORT;

  beforeEach(() => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    setConversationProviderForTests(null);
  });

  afterEach(() => {
    setConversationProviderForTests(null);
    if (previousModel === undefined) delete process.env.OPENAI_MODEL;
    else process.env.OPENAI_MODEL = previousModel;
    if (previousEffort === undefined) delete process.env.OPENAI_REASONING_EFFORT;
    else process.env.OPENAI_REASONING_EFFORT = previousEffort;
  });

  it("analyzeIntent accepts explicit provider without env mutation", async () => {
    const provider = new FakeConversationProvider({
      scripted: [AMBIGUOUS_JSON],
    });
    process.env.OPENAI_MODEL = "should-not-be-used-for-injection";
    process.env.OPENAI_REASONING_EFFORT = "max";

    const result = await analyzeIntent({
      userContent: "bonjour",
      projectSummary: "test",
      provider,
    });
    expect(result.analysis.intentClass).toBe("ambiguous");
    expect(result.presentation).toBe("test_provider");
    expect(process.env.OPENAI_MODEL).toBe("should-not-be-used-for-injection");
    expect(process.env.OPENAI_REASONING_EFFORT).toBe("max");
  });

  it("createCellProvider builds per-instance model/effort", () => {
    const a = createCellProvider({
      apiKey: "k",
      model: "gpt-5.6-luna",
      reasoningEffort: "none",
    });
    const b = createCellProvider({
      apiKey: "k",
      model: "gpt-5.6-terra",
      reasoningEffort: "low",
    });
    expect(a).not.toBe(b);
    expect(a.providerId).toBeTruthy();
  });
});
