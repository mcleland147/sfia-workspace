/** @vitest-environment node */
/**
 * CORR-MW2-DLV-05 — internal runtime retains Strategy metadata;
 * client DTO / tool telemetry do not leak it.
 */
import { describe, expect, it } from "vitest";
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
import { collectToolTelemetry } from "@/features/project-assistant/collectToolTelemetry";
import {
  runNoraCognitiveTurn,
  sfiaBoundaryInstructions,
} from "@/lib/nora-cognitive-runtime";
import type { TechnicalEvent } from "@/lib/platform/observability/types";

describe("CORR-MW2-DLV-05 — internal Strategy vs client boundary", () => {
  it("CORR-D0-07 — NoraCognitiveTurnResult retains internal Strategy metadata", async () => {
    const provider = new FakeConversationProvider({
      toolScript: [{ kind: "message", text: "[TEST/FAKE] internal." }],
    });
    const turn = await runNoraCognitiveTurn({
      correlationId: "mw2-corr05-d0-07",
      projectId: "prj:mw2-corr05",
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
    });
    expect(turn.cognitiveStrategyClass).toBe("High-Assurance");
    expect(turn.selectedReasoningEffort).toBeDefined();
    expect(turn.criticalChallengeArmed).toBe(true);
  });

  it("CORR-D0-10 — collectToolTelemetry ignores COGNITIVE_STRATEGY_SELECTED", () => {
    const events: TechnicalEvent[] = [
      {
        type: "COGNITIVE_STRATEGY_SELECTED",
        correlationId: "c",
        detail: {
          strategyClass: "Focused",
          reasoningEffort: "low",
          criticalChallengeArmed: false,
          bootstrapUsed: true,
        },
      },
      {
        type: "TOOL_SUCCEEDED",
        correlationId: "c",
        detail: {
          toolName: "git_local_get_head",
          status: "succeeded",
          summary: "ok",
        },
      },
    ];
    const { toolEvents, sources } = collectToolTelemetry(events);
    expect(toolEvents).toHaveLength(1);
    expect(toolEvents[0]?.toolName).toBe("git_local_get_head");
    expect(JSON.stringify({ toolEvents, sources })).not.toContain(
      "strategyClass",
    );
  });
});
