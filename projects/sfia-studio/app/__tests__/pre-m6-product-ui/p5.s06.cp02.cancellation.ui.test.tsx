/** @vitest-environment jsdom */
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ConversationSurface } from "@/features/pre-m6-product-ui/surfaces/ConversationSurface";
import type { ProductConversationController } from "@/features/pre-m6-product-ui/hooks/useProductConversation";
import { NewProjectIntentionPage } from "@/features/pre-m6-product-ui/NewProjectIntentionPage";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn() }),
}));

vi.mock("next/link", () => ({
  default: ({
    href,
    children,
    ...rest
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

vi.mock("@/lib/vertical-slice-runtime/actions", () => ({
  createProjectRuntimeAction: vi.fn(),
  listProjectsRuntimeAction: vi.fn(),
}));

afterEach(() => {
  cleanup();
});

function stubController(
  overrides: Partial<ProductConversationController>,
): ProductConversationController {
  return {
    listRef: { current: null },
    messages: [],
    draft: "hello",
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
    transcriptAvailability: "empty",
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

describe("P5-S06 CP02 Conversation STOP UI", () => {
  it("T15 — no stop control when not cancellable", () => {
    render(
      <ConversationSurface
        controller={stubController({ stopAvailable: false, busy: false })}
      />,
    );
    expect(screen.queryByTestId("project-assistant-stop")).toBeNull();
    expect(screen.getByTestId("project-assistant-send")).toBeInTheDocument();
    expect(screen.getByTestId("project-assistant-status")).toHaveAttribute(
      "data-nora-stop",
      "unavailable",
    );
  });

  it("T03/T14 — ■ visible when cancellable and abort called once", async () => {
    const stopCurrentResponse = vi.fn();
    const user = userEvent.setup();
    render(
      <ConversationSurface
        controller={stubController({
          busy: true,
          canSend: false,
          stopAvailable: true,
          uiState: "ASSISTANT_WORKING",
          draft: "",
          stopCurrentResponse,
        })}
      />,
    );
    const stop = screen.getByTestId("project-assistant-stop");
    expect(stop).toHaveAttribute("aria-label", "Arrêter la réponse de Nora");
    expect(screen.getByTestId("project-assistant-status")).toHaveAttribute(
      "data-nora-phase",
      "activity",
    );
    expect(screen.getByTestId("project-assistant-status")).toHaveAttribute(
      "data-nora-stop",
      "available",
    );
    await user.click(stop);
    expect(stopCurrentResponse).toHaveBeenCalledTimes(1);
  });

  it("T04 — STOPPED projection is not ERROR", () => {
    render(
      <ConversationSurface
        controller={stubController({
          busy: false,
          canSend: false,
          stopAvailable: false,
          uiState: "STOPPED",
          draft: "",
          error: null,
        })}
      />,
    );
    expect(screen.getByTestId("project-assistant-stopped")).toHaveTextContent(
      "Réponse interrompue",
    );
    expect(screen.queryByTestId("project-assistant-error")).toBeNull();
    expect(screen.getByTestId("project-assistant-status")).toHaveAttribute(
      "data-nora-phase",
      "stopped",
    );
  });
});

describe("P5-S06 CP02 New Project mobile order", () => {
  it("keeps Nora question in the thread before composer in DOM", () => {
    const { container } = render(<NewProjectIntentionPage />);
    const thread = screen.getByTestId("new-project-thread");
    const composer = screen.getByTestId("new-project-composer");
    const page = container.querySelector("[data-testid='create-project-form']");
    expect(page).toBeTruthy();
    expect(
      thread.compareDocumentPosition(composer) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(thread.textContent).toMatch(/objectif|intention|projet/i);
  });
});
