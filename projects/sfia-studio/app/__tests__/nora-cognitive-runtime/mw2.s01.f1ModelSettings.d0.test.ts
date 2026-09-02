/** @vitest-environment node */
/**
 * MW2-S01 D0 — F1 Agents modelSettings.reasoning wiring proof.
 */
import { describe, expect, it } from "vitest";
import { Agent } from "@openai/agents";
import {
  ScriptedModel,
  assistantMessage,
} from "@openai/agents/testing";
import {
  buildRunnerModelSettingsForEffort,
  createNoraAgentsRunner,
  runNoraAgentsTurn,
  runNoraCognitiveTurn,
  sfiaBoundaryInstructions,
} from "@/lib/nora-cognitive-runtime";
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";

describe("MW2-S01 — F1 modelSettings D0", () => {
  it("D0-15 — selected policy effort reaches ModelRequest modelSettings.reasoning.effort", async () => {
    const model = new ScriptedModel([[assistantMessage("ok")]]);
    const runnerModelSettings = buildRunnerModelSettingsForEffort("medium");
    await runNoraAgentsTurn({
      correlationId: "mw2-d0-15",
      projectId: "prj:mw2",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: "probe",
      model,
      enableTools: false,
      runnerModelSettings,
    });
    expect(model.calls.length).toBeGreaterThan(0);
    const settings = model.calls[0]?.request.modelSettings;
    expect(settings?.reasoning?.effort).toBe("medium");
  });

  it("D0-16 — unrelated baseline text.verbosity preserved on Runner settings", async () => {
    const model = new ScriptedModel([[assistantMessage("ok")]]);
    const runnerModelSettings = buildRunnerModelSettingsForEffort("high");
    await runNoraAgentsTurn({
      correlationId: "mw2-d0-16",
      projectId: "prj:mw2",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: "probe",
      model,
      enableTools: false,
      runnerModelSettings,
    });
    const settings = model.calls[0]?.request.modelSettings;
    expect(settings?.text?.verbosity).toBe("low");
    expect(settings?.reasoning?.effort).toBe("high");
  });

  it("D0-19 — Fake path uses same Runner orchestration with modelSettings", async () => {
    const provider = new FakeConversationProvider({
      toolScript: [{ kind: "message", text: "[TEST/FAKE] MW2 probe." }],
    });
    const result = await runNoraCognitiveTurn({
      correlationId: "mw2-d0-19",
      projectId: "prj:mw2",
      messages: [
        { role: "system", content: sfiaBoundaryInstructions() },
        { role: "user", content: "probe" },
      ],
      provider,
      enableTools: false,
      cognitiveWorkloadSignals: {
        rigorCriticality: "high",
        verificationNeed: "high",
      },
      trustedSfiaProfile: "trusted-profile",
      skipCognitiveStrategy: false,
    });
    expect(result.cognitiveRuntime).toBe("agents");
    expect(result.selectedReasoningEffort).toBe("high");
    expect(result.criticalChallengeArmed).toBe(true);
  });

  it("Runner explicit modelSettings override via createNoraAgentsRunner", async () => {
    const model = new ScriptedModel([[assistantMessage("runner override")]]);
    const agent = new Agent({
      name: "Mw2Probe",
      instructions: sfiaBoundaryInstructions(),
      model,
    });
    const runner = createNoraAgentsRunner(
      sfiaBoundaryInstructions(),
      undefined,
      buildRunnerModelSettingsForEffort("low"),
    );
    await runner.run(agent, "probe");
    expect(model.calls[0]?.request.modelSettings?.reasoning?.effort).toBe(
      "low",
    );
  });
});
