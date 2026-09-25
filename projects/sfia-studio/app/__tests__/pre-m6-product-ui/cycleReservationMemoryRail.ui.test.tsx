/**
 * CYCLE-RESERVATION-PILOTING-01 — Memory rail Réserves tab + Traiter avec Nora.
 */
import { describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import {
  JournalSurface,
  type JournalReservationCard,
} from "@/features/pre-m6-product-ui/surfaces/JournalSurface";

const reservation: JournalReservationCard = {
  epistemicItemId: "epi:rsv:1",
  ordinal: 2,
  title: "Fiabilité de la liste",
  summary: "Source des courses incertaine",
  statement: "Fiabilité de la liste — Source des courses incertaine",
  presentationState: "blocks_finalization",
  presentationStateLabel: "BLOQUE LA CLÔTURE",
  impactLabel: "Majeur",
  attentionLabel: "Avant finalisation",
  finalizationRelevanceLabel: "À traiter avant finalisation",
  rationale: "Sinon clôture trompeuse",
  resolutionCondition: "Source validée",
  journalEntryRefs: ["je:sujet-1"],
  sourceTurnRefs: ["pt:1"],
  hasResolutionProposal: true,
  resolutionProposalRationale: "Clarification suffisante",
  isLegacy: false,
  canDefer: false,
};

describe("Memory rail Réserves (CR-RSV-20…26)", () => {
  it("CR-RSV-20/22/24/25/26 — tabs, card, Traiter avec Nora zero-send, no permanent resolve", () => {
    const onTreat = vi.fn();
    const onConfirm = vi.fn();
    const onViewSubject = vi.fn();

    render(
      <JournalSurface
        entries={[]}
        cycleInstanceId="cyc:1"
        selectedEntryId={null}
        onSelectEntry={() => {}}
        onViewExchanges={() => {}}
        onFocusTurn={() => {}}
        reservations={[reservation]}
        memoryTab="reserves"
        onTreatWithNora={onTreat}
        onConfirmResolve={onConfirm}
        onViewJournalSubject={onViewSubject}
      />,
    );

    expect(screen.getByTestId("memory-rail-tab-sujets")).toBeTruthy();
    expect(screen.getByTestId("memory-rail-tab-reserves")).toBeTruthy();
    expect(screen.getByText("Réserves du cycle")).toBeTruthy();
    expect(screen.getByText(/Réserve 2/)).toBeTruthy();
    expect(screen.getByText("Fiabilité de la liste")).toBeTruthy();
    expect(screen.getByText(/Impact : Majeur/)).toBeTruthy();
    expect(
      screen.queryByText("Marquer la réserve comme résolue"),
    ).toBeNull();

    fireEvent.click(screen.getByTestId("cycle-reservation-treat-epi:rsv:1"));
    expect(onTreat).toHaveBeenCalledTimes(1);
    expect(onTreat).toHaveBeenCalledWith("epi:rsv:1");
    // Treat must not confirm/resolve
    expect(onConfirm).not.toHaveBeenCalled();

    fireEvent.click(screen.getByTestId("cycle-reservation-confirm-epi:rsv:1"));
    expect(onConfirm).toHaveBeenCalledWith("epi:rsv:1");
  });

  it("CR-RSV-50 — Reporter opens confirm; Annuler = zero writes", () => {
    const onConfirmDefer = vi.fn();
    const deferCard: JournalReservationCard = {
      epistemicItemId: "epi:rsv:defer",
      ordinal: 1,
      title: "Critère V1",
      summary: "Indéterminé",
      statement: "Critère V1",
      presentationState: "potential",
      presentationStateLabel: "POTENTIELLE",
      impactLabel: "Majeur",
      attentionLabel: "Avant finalisation",
      finalizationRelevanceLabel: "Peut affecter la clôture",
      rationale: "R",
      resolutionCondition: "C",
      journalEntryRefs: [],
      sourceTurnRefs: [],
      hasResolutionProposal: false,
      isLegacy: false,
      canDefer: true,
      deferTargetCycleTypeId: "cyc:functional-design",
      deferTargetLabel: "Conception fonctionnelle",
    };
    render(
      <JournalSurface
        entries={[]}
        cycleInstanceId="cyc:1"
        selectedEntryId={null}
        onSelectEntry={() => {}}
        onViewExchanges={() => {}}
        onFocusTurn={() => {}}
        reservations={[deferCard]}
        memoryTab="reserves"
        onConfirmDefer={onConfirmDefer}
      />,
    );
    fireEvent.click(
      screen.getByTestId("cycle-reservation-detail-epi:rsv:defer"),
    );
    fireEvent.click(screen.getByTestId("cycle-reservation-defer-epi:rsv:defer"));
    expect(
      screen.getByTestId("cycle-reservation-defer-confirm-epi:rsv:defer"),
    ).toBeTruthy();
    expect(onConfirmDefer).not.toHaveBeenCalled();
    fireEvent.click(
      screen.getByTestId("cycle-reservation-defer-confirm-no-epi:rsv:defer"),
    );
    expect(onConfirmDefer).not.toHaveBeenCalled();
  });
});
