/**
 * P6-HQA-02 UX-REC-02 — Journal Work Recommendation cards drop repeated disclaimer.
 * @vitest-environment jsdom
 */
import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { JournalSurface } from "@/features/pre-m6-product-ui/surfaces/JournalSurface";

describe("P6-HQA-02 UX-REC-02 Journal recommendation disclaimer", () => {
  it("omits per-card authority disclaimer while keeping status and discuss CTA", () => {
    const onResume = vi.fn();
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
            epistemicItemId: "epi:acw:uxrec02",
            statement: "Structurer le suivi des responsabilités",
            status: "active",
            source: "active-cycle-work:nora",
            optionSetRef: null,
            proposalId: null,
            cycleInstanceId: "cycinst:test",
            createdAt: "2026-10-10T10:00:00.000Z",
            dispositionDecisionId: null,
            workRecommendationEpistemicItemId: "epi:acw:uxrec02",
            workRecommendationRelation: null,
          },
        ]}
        decisions={[]}
        reservations={[]}
        memoryTab="recommandations"
        onResumeRecommendationInChat={onResume}
      />,
    );
    expect(screen.queryByText(/Disposez-en dans/i)).toBeNull();
    expect(
      screen.queryByText(/RECOMMANDATION — PAS UNE DÉCISION HUMAINE/i),
    ).toBeNull();
    expect(screen.getAllByText(/À examiner/i).length).toBeGreaterThanOrEqual(1);
    expect(
      screen.getByTestId("cycle-recommendation-resume-epi:acw:uxrec02"),
    ).toBeTruthy();
    expect(screen.getByText("Structurer le suivi des responsabilités")).toBeTruthy();
  });
});
