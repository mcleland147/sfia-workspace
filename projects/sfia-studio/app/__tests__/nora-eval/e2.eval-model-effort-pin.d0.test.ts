/** @vitest-environment node */
/**
 * E2 — eval-only model × reasoning effort pin — ZERO REAL.
 */
import { describe, expect, it } from "vitest";
import { ScriptedModel, assistantMessage } from "@openai/agents/testing";
import {
  runNoraCognitiveTurn,
  resolveNoraAgentsF1Model,
  buildRunnerModelSettingsForEffort,
  runNoraAgentsTurn,
  sfiaBoundaryInstructions,
} from "@/lib/nora-cognitive-runtime";
import { FakeConversationProvider } from "@/lib/platform/ai";
import { validateRuntimeReasoningCapability } from "@/lib/nora-cognitive-runtime/reasoningCapability";

describe("E2 — eval model×effort pin (deterministic)", () => {
  it("E2-AC01 — Luna + none pin at resolve / settings boundary", () => {
    expect(
      resolveNoraAgentsF1Model({
        model: "gpt-5.6-luna",
        provider: new FakeConversationProvider({ scripted: ["x"] }),
      }),
    ).toBe("gpt-5.6-luna");
    expect(buildRunnerModelSettingsForEffort("none").reasoning.effort).toBe(
      "none",
    );
  });

  it("E2-AC02/AC03 — Terra/Sol pins reach Runner via ScriptedModel agentsModel", async () => {
    for (const pin of [
      { modelId: "gpt-5.6-terra", reasoningEffort: "medium" as const },
      { modelId: "gpt-5.6-sol", reasoningEffort: "high" as const },
    ]) {
      const scripted = new ScriptedModel([
        [assistantMessage(`PIN:${pin.modelId}:${pin.reasoningEffort}`)],
      ]);
      const turn = await runNoraCognitiveTurn({
        correlationId: `e2-${pin.modelId}`,
        projectId: "proj-e2",
        messages: [
          { role: "system", content: "You are Nora test." },
          { role: "user", content: "hello" },
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
          ...pin,
          agentsModel: scripted,
        },
      });
      expect(turn.text).toContain(`PIN:${pin.modelId}`);
      expect(turn.evalPinnedModelId).toBe(pin.modelId);
      expect(turn.evalPinnedReasoningEffort).toBe(pin.reasoningEffort);
      expect(turn.selectedReasoningEffort).toBe(pin.reasoningEffort);
    }
  });

  it("E2-AC04 — CWP-derived effort observable while pin wins", async () => {
    const scripted = new ScriptedModel([
      [assistantMessage("PINNED_NONE")],
    ]);
    const turn = await runNoraCognitiveTurn({
      correlationId: "e2-cwp-obs",
      projectId: "proj-e2",
      messages: [
        { role: "system", content: "sys" },
        { role: "user", content: "Critical high-assurance analysis needed" },
      ],
      provider: new FakeConversationProvider({ scripted: ["unused"] }),
      enableTools: false,
      skipSourceStrategy: true,
      cognitiveWorkloadSignals: {
        ambiguity: "high",
        rigorCriticality: "high",
        contradictionRisk: "high",
        verificationNeed: "high",
        reasoningDepth: "high",
      },
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
        agentsModel: scripted,
      },
    });
    expect(turn.selectedReasoningEffort).toBe("none");
    expect(turn.evalPinnedReasoningEffort).toBe("none");
    expect(turn.cwpDerivedReasoningEffort).toBeDefined();
    expect(turn.selectedReasoningEffort).toBe(turn.evalPinnedReasoningEffort);
  });

  it("E2-AC05 — absent override leaves pin fields undefined on Agents result", async () => {
    const agents = await runNoraAgentsTurn({
      correlationId: "e2-default-agents",
      projectId: "proj-e2",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: "x",
      model: new ScriptedModel([[assistantMessage("DEFAULT2")]]),
      enableTools: false,
      maxTurns: 1,
    });
    expect(agents.text).toContain("DEFAULT2");
    expect(
      (agents as { evalPinnedModelId?: string }).evalPinnedModelId,
    ).toBeUndefined();
  });

  it("E2-AC06 — minimal fail-close before dispatch", () => {
    expect(() =>
      validateRuntimeReasoningCapability("gpt-5.6-luna", "minimal"),
    ).toThrow(/minimal/i);
  });

  it("E2-AC07 — unknown model fail-close before dispatch", () => {
    expect(() =>
      validateRuntimeReasoningCapability("gpt-9-unknown", "medium"),
    ).toThrow();
  });
});
