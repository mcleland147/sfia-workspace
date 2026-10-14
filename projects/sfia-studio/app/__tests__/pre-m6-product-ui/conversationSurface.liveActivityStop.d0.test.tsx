/** @vitest-environment jsdom */
/**
 * P6 — REAL ConversationSurface (React + RTL), not static CSS harness HTML.
 * Proves idle Send, working Stop + in-thread Nora activity, live activity
 * timeline disclosure, and stopped / incomplete banners via data-testid contract.
 * ZERO OpenAI / ZERO :3020.
 */
import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ConversationSurface } from "@/features/pre-m6-product-ui/surfaces/ConversationSurface";
import type { ProductConversationController } from "@/features/pre-m6-product-ui/hooks/useProductConversation";
import type { NoraLiveActivityEvent } from "@/features/project-assistant/liveActivityEvents";

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

const SAMPLE_EVENTS: readonly NoraLiveActivityEvent[] = [
  {
    kind: "mission_started",
    seq: 1,
    at: "2026-10-14T12:00:00.000Z",
    label: "Mission démarrée",
  },
  {
    kind: "tool_started",
    seq: 2,
    at: "2026-10-14T12:00:01.000Z",
    label: "Lecture du dépôt",
    toolName: "read_file",
    sourcePath: "docs/plan.md",
  },
  {
    kind: "activity_update",
    seq: 3,
    at: "2026-10-14T12:00:02.000Z",
    label: "Analyse en cours…",
  },
];

describe("ConversationSurface live activity + Stop (REAL React DET)", () => {
  it("idle — stopAvailable false shows Envoyer, hides Arrêter", () => {
    render(
      <ConversationSurface
        controller={stubController({
          stopAvailable: false,
          busy: false,
          canSend: true,
          draft: "Bonjour Nora",
          uiState: "READY",
        })}
      />,
    );

    expect(screen.queryByTestId("project-assistant-stop")).toBeNull();
    const send = screen.getByTestId("project-assistant-send");
    expect(send).toHaveTextContent("Envoyer");
    expect(send).not.toBeDisabled();
    expect(screen.getByTestId("project-assistant-status")).toHaveAttribute(
      "data-nora-stop",
      "unavailable",
    );
    expect(
      screen.queryByTestId("project-assistant-nora-activity"),
    ).toBeNull();
  });

  it("working — stopAvailable true + in-thread activity shows Arrêter and live label", () => {
    render(
      <ConversationSurface
        controller={stubController({
          busy: true,
          canSend: false,
          stopAvailable: true,
          uiState: "ASSISTANT_WORKING",
          messages: [
            { id: "m-user-1", role: "user", content: "Analyser le périmètre." },
          ],
        })}
      />,
    );

    expect(screen.queryByTestId("project-assistant-send")).toBeNull();
    const stop = screen.getByTestId("project-assistant-stop");
    expect(stop).toHaveTextContent("Arrêter");
    expect(stop).toHaveAttribute("aria-label", "Arrêter la réponse de Nora");

    const activity = screen.getByTestId("project-assistant-nora-activity");
    expect(screen.getByTestId("project-assistant-messages").contains(activity)).toBe(
      true,
    );
    expect(
      screen.getByTestId("project-assistant-nora-activity-label"),
    ).toHaveTextContent("Nora travaille…");
    expect(activity).toHaveAttribute("data-nora-stop", "available");
  });

  it("liveActivityEvents — Détail de l’activité lists timeline events", () => {
    render(
      <ConversationSurface
        controller={stubController({
          busy: true,
          canSend: false,
          stopAvailable: true,
          uiState: "ASSISTANT_WORKING",
          liveActivityEvents: [...SAMPLE_EVENTS],
          messages: [
            { id: "m-user-1", role: "user", content: "Mission longue." },
          ],
        })}
      />,
    );

    expect(
      screen.getByTestId("project-assistant-nora-activity-label"),
    ).toHaveTextContent("Analyse en cours…");

    const details = screen.getByTestId("project-assistant-nora-activity-details");
    expect(within(details).getByText("Détail de l’activité")).toBeInTheDocument();

    fireEvent.click(within(details).getByText("Détail de l’activité"));

    const timeline = details.querySelector("ul");
    expect(timeline).toBeTruthy();
    // UX-01 / UX-02 — no technical kind codes, no numbering column
    expect(timeline!.textContent).not.toMatch(/mission_started/);
    expect(timeline!.textContent).not.toMatch(/tool_started/);
    expect(timeline!.textContent).not.toMatch(/activity_update/);
    expect(timeline!.textContent).toMatch(/Mission démarrée/);
    // SAMPLE_EVENTS tool_started has toolName read_file (non git_local) + sourcePath
    expect(timeline!.textContent).toMatch(/Nora consulte « plan\.md »|Lecture du dépôt/);
    expect(timeline!.textContent).toMatch(/Analyse en cours/);
    expect(timeline!.textContent).not.toMatch(/terminé la lecture|intégralement/i);
    expect(
      screen.getByTestId("project-assistant-nora-activity-pulse"),
    ).toBeInTheDocument();
    expect(screen.getByTestId("project-assistant-stop").querySelector("svg")).toBeTruthy();
  });

  it("STOPPED banner — Réponse interrompue + retry; Send returns when idle", () => {
    render(
      <ConversationSurface
        controller={stubController({
          busy: false,
          canSend: true,
          stopAvailable: false,
          uiState: "STOPPED",
          error: null,
          draft: "",
        })}
      />,
    );

    expect(screen.getByTestId("project-assistant-stopped")).toHaveTextContent(
      "Réponse interrompue",
    );
    expect(screen.getByTestId("project-assistant-retry-stopped")).toHaveTextContent(
      "Réessayer",
    );
    expect(
      screen.queryByTestId("project-assistant-incomplete-surface"),
    ).toBeNull();
    expect(screen.getByTestId("project-assistant-send")).toBeInTheDocument();
  });

  it("executionIncomplete — Analyse inachevée banner on REAL panel root", () => {
    render(
      <ConversationSurface
        controller={stubController({
          busy: false,
          canSend: true,
          stopAvailable: false,
          uiState: "ANSWERED",
          executionIncomplete: true,
          messages: [
            { id: "m-user-1", role: "user", content: "Question." },
            {
              id: "m-asst-1",
              role: "assistant",
              content: "Réponse partielle (budget).",
            },
          ],
        })}
      />,
    );

    const panel = screen.getByTestId("project-assistant-panel");
    expect(panel.getAttribute("data-execution-incomplete")).toBe("true");
    expect(
      screen.getByTestId("project-assistant-incomplete-surface"),
    ).toHaveTextContent("Analyse inachevée");
    expect(
      screen.getByTestId("project-assistant-incomplete-notice").textContent,
    ).toMatch(/limite|inachev|analyse complète/i);
    expect(screen.queryByTestId("project-assistant-stopped")).toBeNull();
  });

  it("Stop click invokes stopCurrentResponse once", async () => {
    const stopCurrentResponse = vi.fn();
    const user = userEvent.setup();
    render(
      <ConversationSurface
        controller={stubController({
          busy: true,
          canSend: false,
          stopAvailable: true,
          uiState: "ASSISTANT_WORKING",
          stopCurrentResponse,
        })}
      />,
    );
    await user.click(screen.getByTestId("project-assistant-stop"));
    expect(stopCurrentResponse).toHaveBeenCalledTimes(1);
  });
});
