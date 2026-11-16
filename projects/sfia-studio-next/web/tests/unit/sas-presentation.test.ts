import { describe, expect, it } from "vitest";
import {
  resolveSasPresentationStage,
  sasPresentationCopy,
} from "@/components/figma/sas-presentation";

describe("Sas Nora presentation stage", () => {
  it("maps assessment to Figma stages without text heuristics", () => {
    expect(
      resolveSasPresentationStage({
        isResumed: false,
        assessment: "EXPLORING",
        messageCount: 0,
      }),
    ).toBe("first_intention");
    expect(
      resolveSasPresentationStage({
        isResumed: false,
        assessment: "CLARIFYING",
        messageCount: 2,
      }),
    ).toBe("clarification");
    expect(
      resolveSasPresentationStage({
        isResumed: false,
        assessment: "PROPOSAL",
        messageCount: 3,
      }),
    ).toBe("proposal");
    expect(
      resolveSasPresentationStage({
        isResumed: false,
        assessment: "BASE_SUFFICIENTE",
        messageCount: 4,
      }),
    ).toBe("base_sufficient");
  });

  it("prefers resume stage when preparation is reopened", () => {
    expect(
      resolveSasPresentationStage({
        isResumed: true,
        assessment: "BASE_SUFFICIENTE",
        messageCount: 5,
      }),
    ).toBe("resume");
  });

  it("falls back from empty vs non-empty thread when assessment absent", () => {
    expect(
      resolveSasPresentationStage({
        isResumed: false,
        assessment: null,
        messageCount: 0,
      }),
    ).toBe("first_intention");
    expect(
      resolveSasPresentationStage({
        isResumed: false,
        assessment: undefined,
        messageCount: 2,
      }),
    ).toBe("clarification");
  });

  it("exposes Figma copy for each stage", () => {
    expect(sasPresentationCopy("first_intention").title).toBe("Parlons de votre projet");
    expect(sasPresentationCopy("clarification").panelBadge).toBe("Clarification");
    expect(sasPresentationCopy("proposal").kicker).toBe("PROPOSITION ÉVOLUTIVE");
    expect(sasPresentationCopy("base_sufficient").panelBadgeTone).toBe("green");
    expect(sasPresentationCopy("resume").headerBreadcrumb).toBe("Préparation reprise");
  });
});
