import { describe, expect, it } from "vitest";
import {
  assessUncertainty,
  isOverconfidentFalseAtZero,
  shouldFallbackToResponses,
  validateDecisionsAnswer,
} from "@/domains/conversation/bounded-judgment";

describe("ml2 bounded-judgment validation", () => {
  it("rejects type mismatch and invalid choice", () => {
    expect(
      validateDecisionsAnswer({
        kind: "choice",
        answer: { type: "predicate", probability: 0.9 },
        choices: ["A", "B"],
      }).reason,
    ).toMatch(/INVALID_TYPE_MISMATCH/);
    expect(
      validateDecisionsAnswer({
        kind: "choice",
        answer: { type: "choice", choice: "Z" },
        choices: ["A", "B"],
      }).ok,
    ).toBe(false);
  });

  it("does not invent probability=1 for choice/score", () => {
    const c = validateDecisionsAnswer({
      kind: "choice",
      answer: { type: "choice", choice: "SUPPORTS" },
      choices: ["SUPPORTS", "INSUFFICIENT"],
    });
    expect(c.ok).toBe(true);
    expect(c.probability).toBeNull();
    const s = validateDecisionsAnswer({
      kind: "score",
      answer: { type: "score", score: 3 },
      levels: ["1", "2", "3"],
    });
    expect(s.ok).toBe(true);
    expect(s.probability).toBeNull();
  });

  it("treats p=0 false as overconfident — fallback required", () => {
    expect(
      isOverconfidentFalseAtZero({
        kind: "predicate",
        value: false,
        probability: 0,
      }),
    ).toBe(true);
    expect(
      shouldFallbackToResponses({
        kind: "predicate",
        value: false,
        probability: 0,
        uncertain: false,
        abstain: false,
      }),
    ).toBe(true);
  });

  it("mid-band probability is uncertain", () => {
    expect(assessUncertainty(0.5)).toBe(true);
    expect(assessUncertainty(0.9)).toBe(false);
  });

  it("invalid answer reason triggers fallback", () => {
    expect(
      shouldFallbackToResponses({
        uncertain: false,
        abstain: false,
        probability: null,
        value: null,
        reason: "INVALID_CHOICE",
      }),
    ).toBe(true);
  });
});
