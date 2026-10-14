/** @vitest-environment jsdom */
/**
 * P6 UX closure — Sources regroupées on REAL ConversationSurface (DET).
 */
import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ConversationSurface } from "@/features/pre-m6-product-ui/surfaces/ConversationSurface";
import type { ProductConversationController } from "@/features/pre-m6-product-ui/hooks/useProductConversation";
import type { AssistantToolEventDto } from "@/features/project-assistant/types";

afterEach(() => {
  cleanup();
});

function stubController(
  overrides: Partial<ProductConversationController>,
): ProductConversationController {
  return {
    listRef: { current: null },
    messages: [],
    draft: "",
    setDraft: vi.fn(),
    toolEvents: [],
    liveActivityEvents: [],
    uiState: "READY",
    error: null,
    executionIncomplete: false,
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

const P3 =
  "projects/sfia-studio/product-simplification/03-chat-first-product-simplification-workspace-interaction-architecture.md";
const P4 =
  "projects/sfia-studio/product-simplification/04-chat-first-product-simplification-semantic-projection-cognitive-architecture.md";

describe("ConversationSurface sources UX closure", () => {
  it("UX-14/15/18/19 + SRC ranges — grouped sources + honest tech detail", () => {
    const toolEvents: AssistantToolEventDto[] = [
      {
        toolName: "git_local_read_file",
        status: "succeeded",
        pathOrRef: `${P3}#L1-240`,
        summary: `read ${P3} L1-240/780 returned L1-240 (ok) hasMore documentHasMore`,
        errorCode: null,
        readOnly: true,
      },
      {
        toolName: "git_local_read_file",
        status: "succeeded",
        pathOrRef: `${P3}#L241-500`,
        summary: `read ${P3} L241-500/780 returned L241-500 (ok) hasMore documentHasMore`,
        errorCode: null,
        readOnly: true,
      },
      {
        toolName: "git_local_read_file",
        status: "succeeded",
        pathOrRef: `${P4}#L1-100`,
        summary: `read ${P4} L1-100/400 returned L1-100 (ok) hasMore documentHasMore`,
        errorCode: null,
        readOnly: true,
      },
    ];

    render(
      <ConversationSurface
        controller={stubController({
          toolEvents,
          messages: [
            { id: "u1", role: "user", content: "Comparer P3 et P4." },
            { id: "a1", role: "assistant", content: "Voici la synthèse." },
          ],
        })}
      />,
    );

    const sources = screen.getByTestId("project-assistant-sources");
    expect(
      screen.getByTestId("project-assistant-sources-scope"),
    ).toHaveTextContent(/cette conversation/i);

    const items = within(sources).getAllByTestId("project-assistant-source-item");
    expect(items).toHaveLength(2);
    expect(items[0]!.textContent).toMatch(/P3/);
    expect(items[0]!.textContent).toMatch(/2 consultations regroupées/);
    expect(items[0]!.textContent).not.toMatch(/\bFULL\b/);
    expect(items[1]!.textContent).toMatch(/P4/);

    const techSummary = within(items[0]!).getByText("Détail technique");
    fireEvent.click(techSummary);
    const tech = within(items[0]!).getAllByTestId(
      "project-assistant-source-tech-item",
    );
    expect(tech).toHaveLength(2);
    expect(tech[0]!.textContent).toMatch(/git_local_read_file/);
    expect(tech[0]!.textContent).toMatch(`${P3}#L1-240`);
    expect(tech[0]!.textContent).toMatch(/Consultation réussie/);
    expect(tech[0]!.textContent).toMatch(/Opération en lecture seule/);
    expect(tech[0]!.textContent).not.toMatch(/lecture seule confirmée/i);
  });
});
