/** @vitest-environment node */
/**
 * MW3 — runNoraCognitiveTurn wires disposition + Cognitive STOP (Fake provider).
 * ZERO REAL OpenAI.
 */
import { describe, expect, it } from "vitest";
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
import { runNoraCognitiveTurn } from "@/lib/nora-cognitive-runtime";

describe("MW3 — cognitive turn MW3 field wiring D0", () => {
  it("applies evidence-backed governing STOP onto turn result", async () => {
    const provider = new FakeConversationProvider({
      toolScript: [{ kind: "message", text: "[TEST/FAKE] base turn." }],
    });
    const turn = await runNoraCognitiveTurn({
      correlationId: "mw3-turn-stop",
      projectId: "prj:mw3",
      messages: [
        { role: "system", content: "SFIA boundary." },
        { role: "user", content: "Assess contradiction." },
      ],
      provider,
      enableTools: false,
      skipCognitiveStrategy: true,
      simulateMemoryBUnavailable: true,
      contradictionAssessment: {
        conflict: {
          conflictPresent: true,
          requiredSourceCount: 2,
          requiredDomains: ["governance"],
          evidencePointers: [
            {
              evidenceId: "ev:1",
              sourceId: "src:a",
              domain: "governance",
              freshness: "fresh",
              attributable: true,
            },
            {
              evidenceId: "ev:2",
              sourceId: "src:b",
              domain: "governance",
              freshness: "fresh",
              attributable: true,
            },
          ],
          trustedSfiaProfile: null,
        },
        governingPremiseInvalidated: true,
        governingPremise: "Must remain FinOps-frozen",
      },
    });

    expect(turn.contradictionDisposition?.disposition).toBe("evidence_backed");
    expect(turn.cognitiveStopDecision?.cognitiveStop).toBe(true);
    expect(turn.cognitiveStopDecision?.outcome).toBe("COGNITIVE_STOP");
    expect(turn.cognitiveStopDecision?.allowsSilentSuccess).toBe(false);
    expect(turn.text).toMatch(/COGNITIVE STOP/);
  });

  it("keeps candidate without STOP when evidence insufficient", async () => {
    const provider = new FakeConversationProvider({
      toolScript: [{ kind: "message", text: "[TEST/FAKE] candidate path." }],
    });
    const turn = await runNoraCognitiveTurn({
      correlationId: "mw3-turn-candidate",
      projectId: "prj:mw3",
      messages: [
        { role: "system", content: "SFIA boundary." },
        { role: "user", content: "Possible conflict?" },
      ],
      provider,
      enableTools: false,
      skipCognitiveStrategy: true,
      simulateMemoryBUnavailable: true,
      contradictionAssessment: {
        conflict: {
          conflictPresent: true,
          evidencePointers: [],
          trustedSfiaProfile: null,
        },
        governingPremiseInvalidated: true,
        governingPremise: "Would-be premise",
      },
    });

    expect(turn.contradictionDisposition?.disposition).toBe("candidate");
    expect(turn.cognitiveStopDecision?.cognitiveStop).toBe(false);
    expect(turn.cognitiveStopDecision?.outcome).toBe(
      "PROGRESS_WITH_CONTRADICTION",
    );
  });
});
