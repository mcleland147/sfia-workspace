import { describe, expect, it } from "vitest";
import {
  createEmptyInvestigation,
  evaluateContractReadiness,
  qualifySearchMiss,
  resumeInvestigation,
  type InvestigationState,
} from "@/domains/conversation/investigation-state";

describe("ML5 A — investigation-state", () => {
  it("blocks contract ready when determinant questions remain open", () => {
    const state: InvestigationState = {
      ...createEmptyInvestigation("Préparer un contrat Cursor"),
      profileHint: "investigation",
      questions: [
        {
          id: "q1",
          text: "Quelle branche de travail ?",
          status: "OPEN",
          importance: "DETERMINANT",
        },
      ],
    };
    const next = evaluateContractReadiness(state);
    expect(next.contractReady).toBe(false);
    expect(next.sufficiency).toBe("INSUFFICIENT");
    expect(next.contractReadyBlockedReason).toMatch(/q1/);
  });

  it("blocks when late unknown restriction is recorded", () => {
    const state: InvestigationState = {
      ...createEmptyInvestigation("mission"),
      questions: [],
      sufficiency: "BLOCKED_BY_UNKNOWN_RESTRICTION",
    };
    const next = evaluateContractReadiness(state);
    expect(next.contractReady).toBe(false);
    expect(next.sufficiency).toBe("BLOCKED_BY_UNKNOWN_RESTRICTION");
  });

  it("allows ready only when determinants answered and no contradictions", () => {
    const state: InvestigationState = {
      ...createEmptyInvestigation("mission"),
      questions: [
        {
          id: "q1",
          text: "Cible ?",
          status: "ANSWERED",
          importance: "DETERMINANT",
          answerSummary: "sandbox only",
        },
      ],
      sources: [
        {
          kind: "GIT",
          ref: "repo@abc",
          coverage: "VERIFIED",
        },
      ],
      contradictions: [],
      sufficiency: "UNKNOWN",
    };
    const next = evaluateContractReadiness(state);
    expect(next.contractReady).toBe(true);
    expect(next.sufficiency).toBe("SUFFICIENT");
  });

  it("does not treat lexical miss as demonstrated absence", () => {
    expect(qualifySearchMiss("LEXICAL_MISS")).toBe("UNKNOWN");
    expect(qualifySearchMiss("DEMONSTRATED_ABSENCE")).toBe("VERIFIED");
  });

  it("resume does not invent sources", () => {
    const resumed = resumeInvestigation(
      {
        intentSummary: "reprendre",
        sources: [{ kind: "D4", ref: "", coverage: "CONSULTED" }],
      } as Partial<InvestigationState>,
      "reprendre",
    );
    expect(resumed.sources).toEqual([]);
  });
});
