/** @vitest-environment jsdom */
/**
 * P5-S07 CP01 — « Journal du cycle » is a dedicated principal view (P3 94:2),
 * exactly like Historique: it owns the main column, the context rail steps
 * aside, and the rail keeps only a compact shortcut into the same surface.
 */
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ProjectWorkspacePage } from "@/features/pre-m6-product-ui/ProjectWorkspacePage";

const {
  getProjectRuntimeActionMock,
  useProductConversationMock,
  deriveContinuityMock,
  readCurrentContinuityMock,
  readHistoryMock,
} = vi.hoisted(() => ({
  getProjectRuntimeActionMock: vi.fn(),
  useProductConversationMock: vi.fn(),
  deriveContinuityMock: vi.fn(),
  readCurrentContinuityMock: vi.fn(),
  readHistoryMock: vi.fn(),
}));

vi.mock("@/lib/vertical-slice-runtime/actions", () => ({
  getProjectRuntimeAction: (...args: unknown[]) =>
    getProjectRuntimeActionMock(...args),
  setProjectRepositoryBindingAction: vi.fn(),
}));

vi.mock("@/features/pre-m6-product-ui/hooks/useProductConversation", () => ({
  useProductConversation: (...args: unknown[]) =>
    useProductConversationMock(...args),
}));

vi.mock("@/features/project-assistant/w2/actions", () => ({
  w2DeriveGovernedExecutionContinuityAction: (...args: unknown[]) =>
    deriveContinuityMock(...args),
  w2ReadCurrentGovernedExecutionContinuityAction: (...args: unknown[]) =>
    readCurrentContinuityMock(...args),
  w2ReadProjectHistoryAction: (...args: unknown[]) => readHistoryMock(...args),
  w2ConfirmExecutionContractAction: vi.fn(),
  w2InspectExecutionContractAction: vi.fn(),
  w2AuthorizeExecutionContractAction: vi.fn(),
  w2ReconcileGovernedExecutionAction: vi.fn(),
}));

vi.mock("@/features/project-assistant/synthesisActions", () => ({
  getLatestRelevantProductSynthesisAction: vi.fn(async () => ({
    ok: true,
    synthesis: null,
    count: 0,
  })),
  listProductSynthesesAction: vi.fn(async () => ({ ok: true, items: [] })),
  getProductSynthesisAction: vi.fn(),
  searchProductSynthesesAction: vi.fn(async () => ({ ok: true, items: [] })),
  materializeProductSynthesisFromLineageAction: vi.fn(),
}));

vi.mock("@/features/project-assistant/actions", () => ({
  projectAssistantConversationContinuityAction: vi.fn(async () => ({
    ok: true,
    transcriptAvailability: "empty",
    messages: [],
    journal: { cycleInstanceId: null, entries: [] },
  })),
  projectAssistantActiveCycleWorkspaceAction: vi.fn().mockResolvedValue({
    ok: true,
    cycleTypeId: null,
    repositoryWorkspaceSegment: null,
  }),
  projectAssistantConfirmReservationResolutionAction: vi.fn(),
  projectAssistantDeferReservationAction: vi.fn(),
  projectAssistantPilotLifecycleProjection: vi.fn(),
  projectAssistantPilotLifecycleAction: vi.fn(),
  projectAssistantRecordObligationPolicyAction: vi.fn(),
  projectAssistantCompleteTrajectoryStepAction: vi.fn(),
  projectAssistantResolveBlockingReservationAction: vi.fn(),
  projectAssistantRehydrateEvidenceOutcomeAction: vi.fn().mockResolvedValue({
    ok: false,
  }),
}));

vi.mock("@/features/pre-m6-product-ui/surfaces/LifecycleSurface", () => ({
  LifecycleSurface: () => <div data-testid="lifecycle-stub" />,
}));

vi.mock("@/features/pre-m6-product-ui/surfaces/TrajectorySurface", () => ({
  TrajectorySurface: () => <div data-testid="trajectory-stub" />,
}));

vi.mock("@/features/pre-m6-product-ui/surfaces/HistorySurface", () => ({
  HistorySurface: () => <div data-testid="history-stub" />,
}));

vi.mock("@/features/pre-m6-product-ui/surfaces/LpsSurface", () => ({
  LpsSurface: () => <div data-testid="lps-stub" />,
  lpsNextAction: () => "Poursuivre avec Nora",
}));

vi.mock("@/features/pre-m6-product-ui/surfaces/RecoverySurface", () => ({
  RecoverySurface: () => null,
}));

vi.mock(
  "@/features/pre-m6-product-ui/surfaces/ProjectWorkspaceRoutingPanel",
  () => ({
    ProjectWorkspaceRoutingPanelLazy: () => null,
  }),
);

vi.mock("@/features/pre-m6-product-ui/surfaces/ConversationSurface", () => ({
  ConversationSurface: () => (
    <div data-testid="project-assistant-panel">Conversation</div>
  ),
}));

const journalEntries = [
  {
    journalEntryId: "cje:1",
    topicOrdinal: 1,
    title: "Architecture de l'espace projet",
    currentSummary: "La conversation reste le canal principal.",
    stabilizedPoints: ["Conversation principale"],
    openPoints: ["Cohérence finale"],
    status: "active",
    updatedAt: "2026-10-06T08:00:00.000Z",
    sourceTurnRefs: ["pt:a"],
    sourceTurnCount: 1,
    isCurrentTopic: true,
  },
];

describe("P5-S07 CP01 Journal principal view wiring", () => {
  afterEach(() => {
    cleanup();
  });

  beforeEach(() => {
    vi.clearAllMocks();
    deriveContinuityMock.mockResolvedValue({ ok: false });
    readCurrentContinuityMock.mockResolvedValue({ ok: true, kind: "none" });
    readHistoryMock.mockResolvedValue({ ok: false });
    getProjectRuntimeActionMock.mockResolvedValue({
      ok: true,
      project: {
        projectId: "prj:p5-s07",
        name: "Product Simplification",
        shortReference: "P5",
        objective: "Simplifier le pilotage sans perdre gouvernance.",
        contextSummary: "ctx",
        criticality: "STANDARD",
        constraints: [],
        localMode: true,
        source: "REAL_LOCAL_CORE",
        fixture: false,
        projectWorkspaceKey: null,
        repositoryBinding: null,
      },
      livingState: {
        projectId: "prj:p5-s07",
        id: "lps:p5-s07",
        version: 2,
        createdAt: "2026-10-05T00:00:00.000Z",
        updatedAt: "2026-10-05T00:00:00.000Z",
        activeCycleInstanceId: "cyc:p5-s07",
        status: "active",
      },
      doctrine: { packageId: "pkg", version: "1", status: "bound" },
      readiness: { status: "READY", reasons: [] },
    });
    useProductConversationMock.mockReturnValue({
      messages: [{ id: "pt:a", role: "user", content: "Bonjour Nora" }],
      draft: "",
      setDraft: vi.fn(),
      ephemeralNotice: null,
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
      transcriptAvailability: "available",
      openContinuityPresentation: { kind: "none" },
      journalEntries,
      journalCycleInstanceId: "cyc:p5-s07",
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
      gateOpen: true,
      recommendationFreshness: "fresh",
      qualificationFreshness: "fresh",
      durableOutcomeFreshness: "fresh",
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
      reservationResolutionProposal: null,
      clearReservationResolutionProposal: vi.fn(),
      decide: vi.fn(),
      prepareResolvedM3: vi.fn(),
      prepareLegacyFixture: vi.fn(),
      confirmAndExecuteResolvedM3: vi.fn(),
      confirmAndExecuteLegacyFixture: vi.fn(),
      refreshResolvedM3RunningAttempt: vi.fn(),
      retryLastUserMessage: vi.fn(),
    });
  });

  it("opens the Journal as a principal surface and returns to the conversation", async () => {
    render(<ProjectWorkspacePage projectId="prj:p5-s07" />);

    await waitFor(() => {
      expect(screen.getByTestId("project-context-shortcuts")).toBeTruthy();
    });

    // Conversation layout: the rail shows the compact Journal shortcut only.
    expect(screen.getByTestId("cycle-journal-rail")).toHaveAttribute(
      "data-variant",
      "rail",
    );
    expect(screen.getByTestId("cycle-journal-open-full")).toBeTruthy();
    expect(screen.queryByTestId("project-journal-surface")).toBeNull();

    fireEvent.click(screen.getByTestId("project-shortcut-journal"));

    await waitFor(() => {
      expect(screen.getByTestId("project-journal-surface")).toBeTruthy();
    });
    expect(screen.getByTestId("project-principal")).toHaveAttribute(
      "data-active-view",
      "journal",
    );
    // Dedicated principal view — no sibling context rail, no second Journal.
    expect(
      screen.getByTestId("project-workspace-layout").getAttribute("data-layout"),
    ).toBe("overview");
    expect(screen.queryByTestId("project-lps-column")).toBeNull();
    expect(screen.queryByTestId("cycle-journal-rail")).toBeNull();
    expect(screen.queryByTestId("project-assistant-panel")).toBeNull();
    expect(screen.getByTestId("project-journal-detail-title").textContent).toBe(
      "Architecture de l'espace projet",
    );

    fireEvent.click(screen.getByTestId("project-journal-return-conversation"));
    await waitFor(() => {
      expect(screen.getByTestId("project-assistant-panel")).toBeTruthy();
    });
    expect(screen.getByTestId("project-principal")).toHaveAttribute(
      "data-active-view",
      "conversation",
    );
  });

  it("the rail shortcut promotes the same surface (no second cockpit)", async () => {
    render(<ProjectWorkspacePage projectId="prj:p5-s07" />);
    await waitFor(() => {
      expect(screen.getByTestId("cycle-journal-open-full")).toBeTruthy();
    });

    fireEvent.click(screen.getByTestId("cycle-journal-open-full"));
    await waitFor(() => {
      expect(screen.getByTestId("project-journal-surface")).toBeTruthy();
    });
    expect(screen.getAllByTestId("project-journal-surface")).toHaveLength(1);
    expect(
      screen.getByTestId("memory-rail-tab-sujets").getAttribute("aria-selected"),
    ).toBe("true");
  });
});
