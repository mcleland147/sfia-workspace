/** @vitest-environment jsdom */
/**
 * P5-S04 — Synthèses UI (Overview / Conversation teasers + surface read-only).
 */
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ProjectWorkspacePage } from "@/features/pre-m6-product-ui/ProjectWorkspacePage";
import { SynthesesSurface } from "@/features/pre-m6-product-ui/surfaces/SynthesesSurface";
import { formatVerifiedElementsCount } from "@/features/pre-m6-product-ui/surfaces/synthesisPresentation";
import type { ProductSynthesisProjection } from "@/lib/oa/synthesis";

const mockSynthesis: ProductSynthesisProjection = {
  synthesisId: "syn:ui-1",
  projectId: "prj:p5-s04",
  cycleInstanceId: "cyc:1",
  title: "Synthèse UI test",
  subject: "Affirmation de test",
  status: "current",
  verdictLabel: "atteint",
  canonicalVerdict: "PASS",
  sections: {
    summary: "Résumé déterministe pour UI.",
    planned: "Prévu.",
    done: "Réalisé.",
    evaluation: "Évaluation.",
    gaps: "Manques.",
    impact: "Impact.",
    verdict: "Verdict.",
    recommendation: "Aucune recommandation Product courante n'est disponible pour cette synthèse.",
    verified: "Vérifié.",
  },
  sourceBindings: {
    projectId: "prj:p5-s04",
    cycleInstanceId: "cyc:1",
    executionContractId: "xct:1",
    attemptId: "xat:1",
    evidenceIds: ["ev:1"],
    reviewBundleId: "rb:1",
    claimEvaluationId: "clm:1",
    recommendationRef: null,
  },
  sourceFingerprint: "fp:ui",
  generatedAt: "2026-10-05T12:00:00.000Z",
  generatedBy: "deterministic_product_synthesis_builder_s04",
  authority: "none",
  supersedes: null,
  version: 1,
};

const {
  getProjectRuntimeActionMock,
  useProductConversationMock,
  deriveContinuityMock,
  readCurrentContinuityMock,
  readHistoryMock,
  latestSynthesisMock,
  listSynthesesMock,
  getSynthesisMock,
  searchSynthesesMock,
} = vi.hoisted(() => ({
  getProjectRuntimeActionMock: vi.fn(),
  useProductConversationMock: vi.fn(),
  deriveContinuityMock: vi.fn(),
  readCurrentContinuityMock: vi.fn(),
  readHistoryMock: vi.fn(),
  latestSynthesisMock: vi.fn(),
  listSynthesesMock: vi.fn(),
  getSynthesisMock: vi.fn(),
  searchSynthesesMock: vi.fn(),
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
  getLatestRelevantProductSynthesisAction: (...args: unknown[]) =>
    latestSynthesisMock(...args),
  listProductSynthesesAction: (...args: unknown[]) => listSynthesesMock(...args),
  getProductSynthesisAction: (...args: unknown[]) => getSynthesisMock(...args),
  searchProductSynthesesAction: (...args: unknown[]) =>
    searchSynthesesMock(...args),
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

vi.mock("@/features/pre-m6-product-ui/surfaces/ExecutionSurface", () => ({
  ExecutionSurface: () => <div data-testid="execution-stub" />,
}));

function baseConversationController() {
  return {
    listRef: { current: null },
    messages: [],
    draft: "",
    setDraft: vi.fn(),
    toolEvents: [],
    uiState: "IDLE",
    error: null,
    modeLabel: "Mode",
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
    focusTurnId: null,
    clearFocusTurn: vi.fn(),
    busy: false,
    blocked: false,
    canSend: true,
    gateOpen: false,
    recommendationFreshness: { label: "—", tone: "ok" },
    qualificationFreshness: { label: "—", tone: "ok" },
    durableOutcomeFreshness: { label: "—", tone: "ok" },
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
    journalEntries: [],
    journalCycleInstanceId: null,
    selectedJournalEntryId: null,
    setSelectedJournalEntryId: vi.fn(),
    focusJournalExchanges: vi.fn(),
    focusTranscriptTurn: vi.fn(),
    openContinuityPresentation: { kind: "none" as const },
    transcriptAvailability: "empty" as const,
    refreshConversationContinuity: vi.fn(),
    armReinstructionOfProposalId: vi.fn(),
  };
}

function baseProjectResult() {
  return {
    ok: true,
    project: {
      projectId: "prj:p5-s04",
      name: "Projet S04",
      objective: "Tester les synthèses",
      projectWorkspaceKey: null,
      repositoryBinding: null,
    },
    livingState: { version: 1, activeCycleInstanceId: null },
    readiness: { status: "ready" },
  };
}

describe("P5-S04 Synthèses UI", () => {
  afterEach(() => {
    cleanup();
  });

  beforeEach(() => {
    vi.clearAllMocks();
    deriveContinuityMock.mockResolvedValue({
      ok: true,
      projection: {
        projectId: "prj:p5-s04",
        activeCycleInstanceId: null,
        executionContractId: null,
        executionContractVersion: null,
        stage: "idle",
        status: "idle",
        attemptId: null,
        attemptStatus: null,
        claimEvaluationId: null,
        claimEvaluationStatus: null,
        evidenceIds: [],
        reviewBundleIds: [],
        nextActionCode: null,
        terminalOutcome: null,
        reconcile: { kind: "none" },
      },
    });
    readCurrentContinuityMock.mockResolvedValue({ ok: false, code: "NONE" });
    readHistoryMock.mockResolvedValue({ ok: true, history: { decisions: [], trajectory: { versions: [] }, contracts: [] } });
    getProjectRuntimeActionMock.mockResolvedValue(baseProjectResult());
    useProductConversationMock.mockReturnValue(baseConversationController());
    listSynthesesMock.mockResolvedValue({ ok: true, items: [] });
    getSynthesisMock.mockResolvedValue({ ok: true, synthesis: mockSynthesis });
    searchSynthesesMock.mockResolvedValue({ ok: true, items: [] });
  });

  it("T14 — Overview shows synthesis count without inspector preview block", async () => {
    latestSynthesisMock.mockResolvedValue({
      ok: true,
      synthesis: mockSynthesis,
      count: 2,
    });
    listSynthesesMock.mockResolvedValue({
      ok: true,
      items: [
        {
          synthesisId: mockSynthesis.synthesisId,
          title: mockSynthesis.title,
          subject: mockSynthesis.subject,
          status: "current",
          verdictLabel: "atteint",
          generatedAt: mockSynthesis.generatedAt,
          authority: "none",
        },
      ],
    });

    render(<ProjectWorkspacePage projectId="prj:p5-s04" />);

    await waitFor(() => {
      expect(screen.getByTestId("project-tab-overview")).toBeTruthy();
    });
    fireEvent.click(screen.getByTestId("project-tab-overview"));

    await waitFor(() => {
      expect(screen.getByTestId("project-overview-synthesis-count").textContent).toBe(
        "2",
      );
    });
    // P3 51:2 — four key-object rows; recommendation count is Product truth (may be 0).
    expect(screen.getByTestId("project-overview-key-objects").textContent).toMatch(
      /Recommandations/,
    );
    expect(screen.getByTestId("project-overview-recommendation-count").textContent).toMatch(
      /^\d+$/,
    );
    // Inspector ends at next step; no Synthèses preview rail block.
    expect(screen.queryByTestId("project-overview-synthesis")).toBeNull();
    expect(screen.queryByTestId("project-overview-synthesis-preview")).toBeNull();
  });

  it("T15 — Conversation shows UI05 synthesis card and opens Synthèses view", async () => {
    latestSynthesisMock.mockResolvedValue({
      ok: true,
      synthesis: mockSynthesis,
      count: 1,
    });
    listSynthesesMock.mockResolvedValue({
      ok: true,
      items: [
        {
          synthesisId: mockSynthesis.synthesisId,
          title: mockSynthesis.title,
          subject: mockSynthesis.subject,
          status: "current",
          verdictLabel: "atteint",
          generatedAt: mockSynthesis.generatedAt,
          authority: "none",
        },
      ],
    });

    render(<ProjectWorkspacePage projectId="prj:p5-s04" />);

    await waitFor(() => {
      expect(screen.getByTestId("conversation-synthesis-card")).toBeTruthy();
      expect(screen.getByTestId("conversation-synthesis-card")).toHaveAttribute(
        "data-ui05-object",
        "synthesis",
      );
    });
    fireEvent.click(screen.getByTestId("conversation-open-synthesis"));

    await waitFor(() => {
      expect(screen.getByTestId("project-syntheses-surface")).toBeTruthy();
    });
    expect(screen.getByTestId("project-syntheses-detail")).toBeTruthy();
  });

  it("T16 — Synthèses surface is read-only (no authority mutation controls)", async () => {
    listSynthesesMock.mockResolvedValue({
      ok: true,
      items: [
        {
          synthesisId: mockSynthesis.synthesisId,
          title: mockSynthesis.title,
          subject: mockSynthesis.subject,
          status: "current",
          verdictLabel: "atteint",
          generatedAt: mockSynthesis.generatedAt,
          authority: "none",
        },
      ],
    });
    getSynthesisMock.mockResolvedValue({ ok: true, synthesis: mockSynthesis });

    render(
      <SynthesesSurface
        projectId="prj:p5-s04"
        onReturnToOverview={vi.fn()}
      />,
    );

    await waitFor(() => {
      expect(screen.getByTestId("project-syntheses-section-summary")).toBeTruthy();
    });

    expect(screen.queryByTestId("project-syntheses-authority-none")).toBeNull();
    expect(screen.queryByText(/NON-AUTORITATIVE/i)).toBeNull();
    expect(screen.queryByRole("button", { name: /promouvoir|autorité|décider/i })).toBeNull();
    expect(screen.queryByRole("form")).toBeNull();

    // B1 — header lives in the left contextual column
    expect(screen.getByTestId("project-syntheses-return-overview")).toBeTruthy();
    expect(screen.getByText("Synthèses")).toBeTruthy();

    fireEvent.change(screen.getByTestId("project-syntheses-search"), {
      target: { value: "token-ui-search" },
    });
    await waitFor(() => {
      expect(searchSynthesesMock).toHaveBeenCalled();
    });
  });

  it("T17 — detail scroll + Product-truth verified count; no dead CTA", async () => {
    listSynthesesMock.mockResolvedValue({
      ok: true,
      items: [
        {
          synthesisId: mockSynthesis.synthesisId,
          title: mockSynthesis.title,
          subject: mockSynthesis.subject,
          status: "current",
          verdictLabel: "atteint",
          generatedAt: mockSynthesis.generatedAt,
          authority: "none",
        },
      ],
    });
    getSynthesisMock.mockResolvedValue({ ok: true, synthesis: mockSynthesis });

    render(
      <SynthesesSurface
        projectId="prj:p5-s04"
        onReturnToOverview={vi.fn()}
      />,
    );

    await waitFor(() => {
      expect(screen.getByTestId("project-syntheses-detail-scroll")).toBeTruthy();
    });

    expect(screen.getByTestId("project-syntheses-section-gaps")).toBeTruthy();
    expect(screen.getByTestId("project-syntheses-section-impact")).toBeTruthy();
    expect(screen.getByTestId("project-syntheses-section-verdict")).toBeTruthy();
    expect(
      screen.getByTestId("project-syntheses-section-recommendation"),
    ).toBeTruthy();
    expect(screen.getByTestId("project-syntheses-section-verified")).toBeTruthy();
    expect(screen.getByTestId("project-syntheses-verified-count").textContent).toBe(
      "1 élément",
    );
    expect(
      screen.getByTestId("project-syntheses-verified-summary").textContent,
    ).toBe(mockSynthesis.sections.verified);
    expect(screen.queryByText(/Voir le détail/i)).toBeNull();

    const scroll = screen.getByTestId(
      "project-syntheses-detail-scroll",
    ) as HTMLDivElement;
    Object.defineProperty(scroll, "scrollHeight", {
      configurable: true,
      value: 2000,
    });
    Object.defineProperty(scroll, "clientHeight", {
      configurable: true,
      value: 400,
    });
    fireEvent.scroll(scroll);
    scroll.scrollTop = 1200;
    fireEvent.scroll(scroll);
    expect(scroll.scrollTop).toBe(1200);
    expect(scroll.scrollHeight).toBeGreaterThan(scroll.clientHeight);
    // Bound affordance appears only when overflow is real.
    await waitFor(() => {
      expect(
        screen.getByTestId("project-syntheses-scroll-indicator"),
      ).toBeTruthy();
    });
  });

  it("T18 — verified zero state uses Product evidenceIds length", async () => {
    const emptyEvidence: ProductSynthesisProjection = {
      ...mockSynthesis,
      synthesisId: "syn:ui-zero",
      sourceBindings: {
        ...mockSynthesis.sourceBindings,
        evidenceIds: [],
      },
      sections: {
        ...mockSynthesis.sections,
        verified:
          "Aucun élément de preuve détaillé n'est disponible pour cette synthèse.",
      },
    };
    listSynthesesMock.mockResolvedValue({
      ok: true,
      items: [
        {
          synthesisId: emptyEvidence.synthesisId,
          title: emptyEvidence.title,
          subject: emptyEvidence.subject,
          status: "current",
          verdictLabel: "atteint",
          generatedAt: emptyEvidence.generatedAt,
          authority: "none",
        },
      ],
    });
    getSynthesisMock.mockResolvedValue({ ok: true, synthesis: emptyEvidence });

    render(
      <SynthesesSurface
        projectId="prj:p5-s04"
        onReturnToOverview={vi.fn()}
      />,
    );

    await waitFor(() => {
      expect(screen.getByTestId("project-syntheses-verified-count").textContent).toBe(
        "0 élément",
      );
    });
  });

  it("formatVerifiedElementsCount — French singular/plural", () => {
    expect(formatVerifiedElementsCount(0)).toBe("0 élément");
    expect(formatVerifiedElementsCount(1)).toBe("1 élément");
    expect(formatVerifiedElementsCount(4)).toBe("4 éléments");
  });
});
