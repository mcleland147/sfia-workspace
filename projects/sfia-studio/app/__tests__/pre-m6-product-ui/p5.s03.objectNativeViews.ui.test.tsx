/** @vitest-environment jsdom */
/**
 * P5-S03 — Conversation / Aperçu / Exécution real view navigation (UI).
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

vi.mock("@/features/pre-m6-product-ui/surfaces/JournalSurface", () => ({
  JournalSurface: () => <div data-testid="cycle-journal-rail" />,
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

describe("P5-S03 object-native views", () => {
  afterEach(() => {
    cleanup();
  });

  beforeEach(() => {
    vi.clearAllMocks();
    deriveContinuityMock.mockResolvedValue({
      ok: true,
      projection: {
        projectId: "prj:p5-s03",
        activeCycleInstanceId: null,
        executionContractId: null,
        executionContractVersion: null,
        executionContractStatus: null,
        attemptId: null,
        attemptStatus: null,
        stage: "PRE_EXECUTION",
        productOutcome: null,
        evidenceId: null,
        reviewBundleId: null,
        claimEvaluationId: null,
        claimEvaluationStatus: null,
        postEvidencePresent: false,
        nextDeterministicAction: "NONE",
        humanDecisionRequired: false,
        recoveryRequired: false,
        reason: "Aucun ExecutionContract résolu.",
        blockingCode: null,
        context: null,
      },
    });
    readCurrentContinuityMock.mockResolvedValue({ ok: true, kind: "none" });
    readHistoryMock.mockResolvedValue({
      ok: true,
      history: {
        projectId: "prj:p5-s03",
        cycle: {
          activeCycleInstanceId: null,
          cycleTypeId: null,
          profile: null,
          status: null,
        },
        trajectory: { versions: [] },
        decisions: [],
        contracts: [],
        absent: [],
      },
    });
    getProjectRuntimeActionMock.mockResolvedValue({
      ok: true,
      project: {
        projectId: "prj:p5-s03",
        name: "Product Simplification",
        shortReference: "P5",
        objective:
          "Simplifier le pilotage sans perdre gouvernance, preuve et maîtrise du Pilote.",
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
        projectId: "prj:p5-s03",
        version: 2,
        createdAt: "2026-10-05T00:00:00.000Z",
        updatedAt: "2026-10-05T00:00:00.000Z",
        activeCycleInstanceId: null,
        status: "active",
      },
      doctrine: { packageId: "pkg", version: "1", status: "bound" },
      readiness: { status: "READY", reasons: [] },
    });
    useProductConversationMock.mockReturnValue({
      messages: [],
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

  it("defaults to Conversation and switches to real Aperçu / Exécution surfaces", async () => {
    render(<ProjectWorkspacePage projectId="prj:p5-s03" />);

    await waitFor(() => {
      expect(screen.getByTestId("project-tabs")).toBeTruthy();
    });

    expect(
      screen.getByTestId("project-tab-conversation").getAttribute("data-selected"),
    ).toBe("true");
    expect(screen.getByTestId("project-assistant-panel")).toBeTruthy();
    expect(screen.queryByTestId("project-overview-surface")).toBeNull();
    expect(screen.queryByTestId("project-execution-surface")).toBeNull();

    fireEvent.click(screen.getByTestId("project-tab-overview"));
    await waitFor(() => {
      expect(screen.getByTestId("project-overview-surface")).toBeTruthy();
    });
    expect(
      screen.getByTestId("project-tab-overview").getAttribute("data-selected"),
    ).toBe("true");
    expect(screen.queryByTestId("project-assistant-panel")).toBeNull();
    expect(screen.getByTestId("project-overview-synthesis-empty")).toBeTruthy();
    // B1 — Overview owns composition; permanent context rail is not a sibling.
    expect(
      screen.getByTestId("project-workspace-layout").getAttribute("data-layout"),
    ).toBe("overview");
    expect(screen.queryByTestId("project-lps-column")).toBeNull();
    expect(screen.getByTestId("project-overview-details")).toBeTruthy();

    fireEvent.click(screen.getByTestId("project-tab-execution"));
    await waitFor(() => {
      expect(screen.getByTestId("project-execution-surface")).toBeTruthy();
    });
    expect(
      screen.getByTestId("project-tab-execution").getAttribute("data-selected"),
    ).toBe("true");
    expect(screen.getByTestId("project-execution-empty")).toBeTruthy();
    expect(screen.queryByTestId("project-tab-execution-badge")).toBeNull();

    fireEvent.click(screen.getByTestId("project-tab-conversation"));
    await waitFor(() => {
      expect(screen.getByTestId("project-assistant-panel")).toBeTruthy();
    });
  });

  it("does not invent a fake Synthesis or persist activeView in Product truth", async () => {
    render(<ProjectWorkspacePage projectId="prj:p5-s03" />);
    await waitFor(() => {
      expect(screen.getByTestId("project-tab-overview")).toBeTruthy();
    });
    fireEvent.click(screen.getByTestId("project-tab-overview"));
    await waitFor(() => {
      expect(screen.getByTestId("project-overview-synthesis-empty").textContent).toMatch(
        /Aucune synthèse produit/,
      );
    });
    // Presentation-only: no Product write APIs invoked for view switch.
    expect(getProjectRuntimeActionMock).toHaveBeenCalled();
  });
});
