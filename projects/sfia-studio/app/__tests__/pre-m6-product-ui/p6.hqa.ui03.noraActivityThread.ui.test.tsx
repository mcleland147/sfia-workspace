/** @vitest-environment jsdom */
/**
 * P6-HQA-UI-03 — Nora activity belongs in the conversation thread (DP06 / P3 §28).
 */
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ConversationSurface } from "@/features/pre-m6-product-ui/surfaces/ConversationSurface";
import type { ProductConversationController } from "@/features/pre-m6-product-ui/hooks/useProductConversation";

afterEach(() => {
  cleanup();
});

function stubController(
  overrides: Partial<ProductConversationController>,
): ProductConversationController {
  return {
    listRef: { current: null },
    messages: [
      {
        id: "m-user-1",
        role: "user",
        content: "Préparer le Deliverable requis pour HQ-01.",
      },
    ],
    draft: "",
    setDraft: vi.fn(),
    toolEvents: [],
    uiState: "READY",
    error: null,
    modeLabel: "fixture",
    ephemeralNotice: "notice",
    lrMaterializeNotice: null,
    lrMaterializeCode: null,
    f2: null,
    activeProposal: null,
    reservesText: "",
    setReservesText: vi.fn(),
    f3Prepare: null,
    f3M3Resolved: null,
    f3Execute: null,
    durableEvidenceOutcome: null,
    durableRehydrateError: null,
    focusTurnId: null,
    clearFocusTurn: vi.fn(),
    busy: false,
    blocked: false,
    canSend: true,
    stopAvailable: false,
    stopCurrentResponse: vi.fn(),
    gateOpen: false,
    recommendationFreshness: "none",
    qualificationFreshness: "none",
    durableOutcomeFreshness: "none",
    canPrepareResolvedM3: false,
    canPrepareLegacyFixture: false,
    canConfirmResolvedM3: false,
    canConfirmLegacyFixture: false,
    canRefreshResolvedM3Running: false,
    sendMessage: vi.fn(),
    decide: vi.fn(),
    prepareResolvedM3: vi.fn(),
    prepareLegacyFixture: vi.fn(),
    confirmAndExecuteResolvedM3: vi.fn(),
    confirmAndExecuteLegacyFixture: vi.fn(),
    refreshResolvedM3RunningAttempt: vi.fn(),
    retryLastUserMessage: vi.fn(),
    reservationResolutionProposal: null,
    transcriptAvailability: "available",
    openContinuityPresentation: null,
    journalEntries: [],
    journalCycleInstanceId: null,
    selectedJournalEntryId: null,
    setSelectedJournalEntryId: vi.fn(),
    focusJournalExchanges: vi.fn(),
    focusTranscriptTurn: vi.fn(),
    refreshConversationContinuity: vi.fn(),
    armReinstructionOfProposalId: vi.fn(),
    armedReinstructionOfProposalId: null,
    armReservationInteractionContext: vi.fn(),
    armedReservationInteractionContext: null,
    clearReservationResolutionProposal: vi.fn(),
    ...overrides,
  } as ProductConversationController;
}

describe("P6-HQA-UI-03 Nora activity in conversation thread", () => {
  it("T01/T03 — START/ACTIVITY renders Nora block in the thread with honest fallback", () => {
    render(
      <ConversationSurface
        controller={stubController({
          busy: true,
          canSend: false,
          uiState: "SENDING",
          stopAvailable: false,
        })}
      />,
    );
    const activity = screen.getByTestId("project-assistant-nora-activity");
    const thread = screen.getByTestId("project-assistant-messages");
    expect(thread.contains(activity)).toBe(true);
    expect(activity).toHaveAttribute("data-nora-phase", "start");
    expect(
      screen.getByTestId("project-assistant-nora-activity-label"),
    ).toHaveTextContent("Nora travaille…");
    expect(activity.textContent).not.toMatch(
      /Contexte du projet chargé|Journal du cycle|Analyse des éléments|%/i,
    );
  });

  it("T02 — ACTIVITY label is not visible in composerTools", () => {
    render(
      <ConversationSurface
        controller={stubController({
          busy: true,
          canSend: false,
          uiState: "ASSISTANT_WORKING",
          stopAvailable: true,
        })}
      />,
    );
    const tools = screen.getByTestId("project-assistant-composer-tools");
    expect(tools.textContent).not.toMatch(/Nora travaille/i);
    const status = screen.getByTestId("project-assistant-status");
    expect(status.className).toMatch(/srOnly|sr-only/i);
    expect(status).toHaveAttribute("data-nora-phase", "activity");
  });

  it("T05 — COMPLETE removes transient activity and keeps the real answer", () => {
    render(
      <ConversationSurface
        controller={stubController({
          busy: true,
          canSend: true,
          uiState: "ANSWERED",
          messages: [
            {
              id: "m-user-1",
              role: "user",
              content: "Préparer le Deliverable requis pour HQ-01.",
            },
            {
              id: "m-asst-1",
              role: "assistant",
              content: "Voici ma qualification du livrable requis.",
            },
          ],
        })}
      />,
    );
    expect(
      screen.queryByTestId("project-assistant-nora-activity"),
    ).toBeNull();
    expect(screen.getByTestId("project-assistant-turn-assistant")).toHaveTextContent(
      "Voici ma qualification du livrable requis.",
    );
  });

  it("T06/T09 — STOPPED stays STOPPED and is not SUCCESS; ERROR distinct", () => {
    const { rerender } = render(
      <ConversationSurface
        controller={stubController({
          busy: false,
          canSend: false,
          uiState: "STOPPED",
          error: null,
        })}
      />,
    );
    expect(screen.getByTestId("project-assistant-stopped")).toHaveTextContent(
      "Réponse interrompue",
    );
    expect(screen.queryByTestId("project-assistant-error")).toBeNull();
    expect(
      screen.queryByTestId("project-assistant-nora-activity"),
    ).toBeNull();

    rerender(
      <ConversationSurface
        controller={stubController({
          busy: false,
          canSend: false,
          uiState: "ERROR_RECOVERABLE",
          error: "Échec fournisseur",
        })}
      />,
    );
    expect(screen.getByTestId("project-assistant-error")).toHaveTextContent(
      "Échec fournisseur",
    );
    expect(screen.queryByTestId("project-assistant-stopped")).toBeNull();
  });

  it("T07/T08 — STOP remains operable only when stopAvailable", async () => {
    const stopCurrentResponse = vi.fn();
    const user = userEvent.setup();
    const { rerender } = render(
      <ConversationSurface
        controller={stubController({
          busy: true,
          canSend: false,
          uiState: "ASSISTANT_WORKING",
          stopAvailable: true,
          stopCurrentResponse,
        })}
      />,
    );
    expect(screen.getByTestId("project-assistant-stop")).toBeInTheDocument();
    await user.click(screen.getByTestId("project-assistant-stop"));
    expect(stopCurrentResponse).toHaveBeenCalledTimes(1);

    rerender(
      <ConversationSurface
        controller={stubController({
          busy: true,
          canSend: false,
          uiState: "ASSISTANT_WORKING",
          stopAvailable: false,
        })}
      />,
    );
    expect(screen.queryByTestId("project-assistant-stop")).toBeNull();
    expect(screen.getByTestId("project-assistant-send")).toBeDisabled();
  });

  it("T14 — activity turn is ephemeral presentation (no durable assistant message invented)", () => {
    render(
      <ConversationSurface
        controller={stubController({
          busy: true,
          canSend: false,
          uiState: "ASSISTANT_WORKING",
          messages: [
            {
              id: "m-user-1",
              role: "user",
              content: "Message pilote",
            },
          ],
        })}
      />,
    );
    expect(screen.getAllByTestId("project-assistant-turn-user")).toHaveLength(1);
    expect(screen.queryByTestId("project-assistant-turn-assistant")).toBeNull();
    expect(
      screen.getByTestId("project-assistant-nora-activity"),
    ).toBeInTheDocument();
  });
});
