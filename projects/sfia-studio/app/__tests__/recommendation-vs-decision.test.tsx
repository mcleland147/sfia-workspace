import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import {
  assertDistinctTypes,
  isMorrisDecision,
  isRecommendation,
} from "@/lib/domain";
import {
  copilotRecommendations,
  pendingMorrisDecision,
} from "@/fixtures";

describe("Recommendation vs MorrisDecision", () => {
  it("keeps distinct type guards", () => {
    const rec = copilotRecommendations[0];
    const decision = pendingMorrisDecision;

    expect(isRecommendation(rec)).toBe(true);
    expect(isMorrisDecision(rec)).toBe(false);
    expect(isMorrisDecision(decision)).toBe(true);
    expect(isRecommendation(decision)).toBe(false);
    expect(() => assertDistinctTypes(rec, decision)).not.toThrow();
  });

  it("surfaces Morris authority label in decision UI", () => {
    render(
      <section>
        <p>Recommandation copilot — non décision Morris</p>
        <p>Décision Morris — autorité humaine</p>
      </section>,
    );

    expect(
      screen.getByText(/Recommandation copilot — non décision Morris/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Décision Morris — autorité humaine/i),
    ).toBeInTheDocument();
  });
});
