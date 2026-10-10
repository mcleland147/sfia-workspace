/**
 * P6-HQA REC-03 — Journal Work Recommendation status label honesty.
 * @vitest-environment jsdom
 */
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { JournalSurface } from "@/features/pre-m6-product-ui/surfaces/JournalSurface";

describe("P6-HQA REC-03 Journal recommendation label", () => {
  it("active undipositioned Work Recommendation is « À examiner », not unanswered-chat wording", () => {
    render(
      <JournalSurface
        entries={[]}
        cycleInstanceId="cycinst:test"
        selectedEntryId={null}
        onSelectEntry={() => {}}
        onViewExchanges={() => {}}
        onFocusTurn={() => {}}
        recommendations={[
          {
            epistemicItemId: "epi:acw:rec03",
            statement: "Clarifier les responsabilités de suivi",
            status: "active",
            source: "active-cycle-work:nora",
            optionSetRef: null,
            proposalId: null,
            cycleInstanceId: "cycinst:test",
            createdAt: "2026-10-10T10:00:00.000Z",
            dispositionDecisionId: null,
            workRecommendationEpistemicItemId: "epi:acw:rec03",
          },
        ]}
        decisions={[]}
        reservations={[]}
        memoryTab="recommandations"
      />,
    );
    expect(screen.queryByText(/en attente de votre réponse/i)).toBeNull();
    expect(screen.getAllByText(/À examiner/i).length).toBeGreaterThanOrEqual(1);
    expect(
      screen.getByText("Clarifier les responsabilités de suivi"),
    ).toBeTruthy();
  });
});
