/**
 * RESERVATION-CONTEXT-PILOT-CONFIRMATION-01 — Proposal surface presentation.
 * RC-02 — human-facing cycle label; no generic DÉCISION REQUISE semantics.
 */
import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import { ConversationSurface } from "@/features/pre-m6-product-ui/surfaces/ConversationSurface";
import type { ProductConversationController } from "@/features/pre-m6-product-ui/hooks/useProductConversation";

afterEach(() => {
  cleanup();
});

function baseController(
  overrides: Partial<ProductConversationController> = {},
): ProductConversationController {
  return {
    listRef: { current: null },
    messages: [],
    draft: "",
    setDraft: vi.fn(),
    toolEvents: [],
    uiState: "ANSWERED",
    error: null,
    modeLabel: "Fixture",
    ephemeralNotice: "",
    lrMaterializeNotice: null,
    lrMaterializeCode: null,
    f2: {
      turnKind: "f1_informative",
      intentClass: "informative",
      qualification: null,
      proposal: null,
      decision: null,
      labels: {
        recommendation: null,
        proposition: "PROPOSITION",
        decisionRequired: null,
        decisionTaken: null,
        noExecution: "AUCUNE EXÉCUTION",
      },
      executionBlocked: false,
      processLocalNotice: "process-local",
    },
    activeProposal: null,
    reservesText: "",
    setReservesText: vi.fn(),
    f3Prepare: null,
    f3M3Resolved: null,
    f3Execute: null,
    durableEvidenceOutcome: null,
    durableRehydrateError: null,
    transcriptAvailability: "empty",
    openContinuityPresentation: { kind: "none" },
    journalEntries: [],
    journalCycleInstanceId: null,
    selectedJournalEntryId: null,
    setSelectedJournalEntryId: vi.fn(),
    focusTurnId: null,
    focusJournalExchanges: vi.fn(),
    focusTranscriptTurn: vi.fn(),
    clearFocusTurn: vi.fn(),
    refreshConversationContinuity: vi.fn(),
    busy: false,
    blocked: false,
    canSend: true,
    gateOpen: false,
    recommendationFreshness: {
      status: "undetermined",
      label: "Recommandation — actualité non déterminée",
    },
    qualificationFreshness: {
      status: "undetermined",
      label: "Recommandation — actualité non déterminée",
    },
    durableOutcomeFreshness: {
      status: "undetermined",
      label: "Recommandation — actualité non déterminée",
    },
    canPrepareResolvedM3: false,
    canPrepareLegacyFixture: false,
    canConfirmResolvedM3: false,
    canConfirmLegacyFixture: false,
    canRefreshResolvedM3Running: false,
    sendMessage: vi.fn(),
    armReinstructionOfProposalId: vi.fn(),
    armedReinstructionOfProposalId: null,
    armReservationInteractionContext: vi.fn(),
    armedReservationInteractionContext: null,
    reservationResolutionProposal: {
      epistemicItemId: "epi:rsv:1",
      cycleInstanceId: "cyc:active",
      cycleLabel: "Cadrage",
      ordinal: 3,
      title: "Rappels V1",
      proposed: true,
    },
    clearReservationResolutionProposal: vi.fn(),
    decide: vi.fn(),
    prepareResolvedM3: vi.fn(),
    prepareLegacyFixture: vi.fn(),
    confirmAndExecuteResolvedM3: vi.fn(),
    confirmAndExecuteLegacyFixture: vi.fn(),
    refreshResolvedM3RunningAttempt: vi.fn(),
    retryLastUserMessage: vi.fn(),
    ...overrides,
  } as ProductConversationController;
}

describe("Reservation resolution proposal surface", () => {
  it("CR-RCP-10 / RC-02 — human cycle label + Confirmation Pilote; Confirmer once", () => {
    const onConfirm = vi.fn();
    render(
      <ConversationSurface
        controller={baseController()}
        onConfirmReservationResolve={onConfirm}
      />,
    );

    expect(screen.getByTestId("reservation-resolution-proposal")).toBeTruthy();
    const context = screen.getByTestId("reservation-resolution-context");
    expect(context.textContent).toMatch(/Réserve 3/);
    expect(context.textContent).toMatch(/Cadrage actif/);
    expect(context.textContent).not.toMatch(/cyc:active/);
    expect(screen.getByText("Proposition de levée")).toBeTruthy();
    expect(
      screen.getByTestId("reservation-pilot-confirmation-required").textContent,
    ).toMatch(/Confirmation Pilote requise/i);
    expect(screen.queryByText("DÉCISION REQUISE")).toBeNull();
    expect(screen.getByTestId("reservation-no-auto-resolve")).toBeTruthy();
    expect(screen.queryByTestId("project-assistant-qualification")).toBeNull();
    expect(screen.queryByTestId("product-authority-path-guidance")).toBeNull();
    // Technical id retained for metadata/tests, not primary context.
    expect(screen.getByTestId("reservation-resolution-cycle-id").textContent).toBe(
      "cyc:active",
    );

    fireEvent.click(
      screen.getByTestId("reservation-confirm-from-proposal-epi:rsv:1"),
    );
    expect(onConfirm).toHaveBeenCalledTimes(1);
    expect(onConfirm).toHaveBeenCalledWith("epi:rsv:1");
  });

  it("CR-RCP-11 — insufficient basis: context without Confirmer CTA", () => {
    render(
      <ConversationSurface
        controller={baseController({
          reservationResolutionProposal: {
            epistemicItemId: "epi:rsv:1",
            cycleInstanceId: "cyc:active",
            cycleLabel: "Cadrage",
            ordinal: 3,
            title: "Rappels V1",
            proposed: false,
          },
          f2: {
            turnKind: "f1_informative",
            intentClass: "informative",
            qualification: null,
            proposal: null,
            decision: null,
            labels: {
              recommendation: null,
              proposition: null,
              decisionRequired: null,
              decisionTaken: null,
              noExecution: "AUCUNE EXÉCUTION",
            },
            executionBlocked: false,
            processLocalNotice: "process-local",
          },
        })}
        onConfirmReservationResolve={vi.fn()}
      />,
    );

    expect(screen.getByText("Traitement de réserve")).toBeTruthy();
    expect(
      screen.queryByTestId("reservation-confirm-from-proposal-epi:rsv:1"),
    ).toBeNull();
    expect(
      screen.queryByTestId("reservation-pilot-confirmation-required"),
    ).toBeNull();
  });

  it("RC-02 — hostile DÉCISION REQUISE chip suppressed under Reservation proposal", () => {
    render(
      <ConversationSurface
        controller={baseController({
          f2: {
            turnKind: "f1_informative",
            intentClass: "informative",
            qualification: null,
            proposal: null,
            decision: null,
            labels: {
              recommendation: null,
              proposition: "PROPOSITION",
              decisionRequired: "DÉCISION REQUISE",
              decisionTaken: null,
              noExecution: "AUCUNE EXÉCUTION",
            },
            executionBlocked: false,
            processLocalNotice: "process-local",
          },
        })}
      />,
    );
    expect(screen.queryByText("DÉCISION REQUISE")).toBeNull();
    expect(
      screen.getByTestId("reservation-pilot-confirmation-required"),
    ).toBeTruthy();
  });
});
