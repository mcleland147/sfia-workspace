/** @vitest-environment jsdom */
/**
 * AUTOMATIC PROJECT RESUME — AR-01…AR-08 Product Workspace proofs.
 */
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ProjectWorkspacePage } from "@/features/pre-m6-product-ui/ProjectWorkspacePage";
import {
  W1_AUTO_RESUME_RESTORED_HINT,
  W1_TRANSCRIPT_UNAVAILABLE_DISCLOSURE,
} from "@/features/project-assistant/presentationLabels";

const {
  getProjectRuntimeActionMock,
  useProductConversationMock,
} = vi.hoisted(() => ({
  getProjectRuntimeActionMock: vi.fn(),
  useProductConversationMock: vi.fn(),
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
}));

vi.mock("@/features/pre-m6-product-ui/surfaces/ProjectWorkspaceRoutingPanel", () => ({
  ProjectWorkspaceRoutingPanelLazy: () => null,
}));

vi.mock("@/features/project-assistant/actions", () => ({
  projectAssistantConversationContinuityAction: vi.fn(async () => ({
    ok: true,
    transcriptAvailability: "empty",
    messages: [],
    journal: { cycleInstanceId: null, entries: [] },
  })),
  projectAssistantPilotLifecycleProjection: vi.fn(),
  projectAssistantActiveCycleWorkspaceAction: vi.fn().mockResolvedValue({
    ok: true,
    cycleTypeId: null,
    repositoryWorkspaceSegment: null,
  }),
  projectAssistantPilotLifecycleAction: vi.fn(),
  projectAssistantRecordObligationPolicyAction: vi.fn(),
  projectAssistantCompleteTrajectoryStepAction: vi.fn(),
  projectAssistantResolveBlockingReservationAction: vi.fn(),
  projectAssistantRehydrateEvidenceOutcomeAction: vi.fn().mockResolvedValue({
    ok: false,
    status: "rehydrate_error",
    code: "NO_EVIDENCE_OUTCOME_REFS",
    message: "none",
    mode: "fixture",
    retryable: false,
  }),
  projectAssistantSendAction: vi.fn(),
  projectAssistantDecideAction: vi.fn(),
  projectAssistantPrepareF3FixtureAction: vi.fn(),
  projectAssistantPrepareM3Action: vi.fn(),
  projectAssistantConfirmAndExecuteF3FixtureAction: vi.fn(),
}));

vi.mock("@/features/project-assistant/w2/actions", () => ({
  w2ProposeTrajectoryOptionsAction: vi.fn(),
  w2DecideTrajectoryAction: vi.fn(),
  w2InspectExecutionContractAction: vi.fn(),
  w2ConfirmExecutionContractAction: vi.fn(),
  w2AuthorizeExecutionContractAction: vi.fn(),
  w2AmendExecutionContractAction: vi.fn(),
  w2PrepareExecutionContractAction: vi.fn(),
  w2GovernedExecuteSelectAction: vi.fn(),
  w2GovernedExecuteStartAction: vi.fn(),
  w2GovernedExecuteCompleteAction: vi.fn(),
  w2ReadActiveDecisionSubjectAction: vi.fn().mockResolvedValue({
    ok: true,
    kind: "none",
  }),
  w2ReadCurrentGovernedExecutionContinuityAction: vi.fn().mockResolvedValue({
    ok: true,
    kind: "none",
  }),
  w2ReadProjectHistoryAction: vi.fn().mockResolvedValue({
    ok: false,
    code: "UNUSED",
    message: "unused",
  }),
  w2RehydrateProductOutcomeAction: vi.fn(),
}));

vi.mock("@/features/project-assistant/preCycleCandidateTrajectoryActions", () => ({
  projectAssistantReadPreCycleCandidateTrajectoryAction: vi
    .fn()
    .mockResolvedValue({ ok: true, candidate: null }),
  projectAssistantPrepareCandidateTrajectoryAction: vi.fn(),
  projectAssistantReadCandidateTrajectoryApprovalPresentationAction: vi
    .fn()
    .mockResolvedValue({ ok: true, presentation: null, alreadyDecided: null }),
  projectAssistantApprovePreCycleCandidateTrajectoryAction: vi.fn(),
  prepareCycleFromValidatedTrajectoryAction: vi.fn(),
  readPreparedTrajectoryCycleAction: vi.fn().mockResolvedValue({
    ok: true,
    prepared: null,
  }),
  startPreparedTrajectoryCycleAction: vi.fn(),
}));

const PROJECT = {
  ok: true as const,
  project: {
    projectId: "prj:auto-resume",
    name: "KidPlan",
    shortReference: "KP",
    objective: "Planifier",
    contextSummary: "ctx",
    criticality: "STANDARD" as const,
    constraints: [] as string[],
    localMode: true,
    source: "REAL_LOCAL_CORE" as const,
    fixture: false,
    projectWorkspaceKey: null,
    repositoryBinding: null,
  },
  livingState: {
    id: "lps:1",
    version: 3,
    createdAt: "2026-09-01T00:00:00.000Z",
    activeCycleInstanceId: "cyc:1",
  },
  doctrine: { id: "d", version: "1", digest: "x", status: "RESOLVED" },
  readiness: {
    status: "NOT_READY" as const,
    hard: "OPEN" as const,
    tA6: "INCOMPLETE" as const,
    iam: "NOT_SELECTED" as const,
    productPersistence: "SQLITE_OA_PRODUCT_STORE" as const,
    realAgentExecution: "DISABLED" as const,
    delivery: "NOT_AUTHORIZED" as const,
    cutover: "NOT_AUTHORIZED" as const,
    runReady: false,
    productReady: false,
  },
  disclosures: {
    runtimeMode: "LOCAL_PROCESS" as const,
    persistence: "PARTIAL_PROJECT_LPS_CYCLE_DECISION_CONTRACT_DURABLE" as const,
    agentExecution: "DISABLED" as const,
    iam: "NOT_SELECTED" as const,
    productPersistence: "SQLITE_OA_PRODUCT_STORE" as const,
    delivery: "NOT_AUTHORIZED" as const,
    cutover: "NOT_AUTHORIZED" as const,
    localDataVolatile: true,
    restartMayLoseState: true,
    projectLpsRestartSafe: true,
    cycleInstanceRestartSafe: true,
    humanDecisionRestartSafe: true,
    executionContractRestartSafe: true,
    messages: [] as const,
  },
};

function baseController(overrides: Record<string, unknown> = {}) {
  return {
    listRef: { current: null },
    messages: [],
    draft: "",
    setDraft: vi.fn(),
    toolEvents: [],
    uiState: "READY",
    error: null,
    modeLabel: "fixture",
    ephemeralNotice: "",
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
    busy: false,
    blocked: false,
    canSend: true,
    gateOpen: false,
    recommendationFreshness: null,
    qualificationFreshness: null,
    durableOutcomeFreshness: null,
    canPrepareResolvedM3: false,
    canPrepareLegacyFixture: false,
    canConfirmResolvedM3: false,
    canConfirmLegacyFixture: false,
    canRefreshResolvedM3Running: false,
    sendMessage: vi.fn(),
    armReinstructionOfProposalId: vi.fn(),
    armedReinstructionOfProposalId: null,
    decide: vi.fn(),
    prepareResolvedM3: vi.fn(),
    prepareLegacyFixture: vi.fn(),
    confirmAndExecuteResolvedM3: vi.fn(),
    confirmAndExecuteLegacyFixture: vi.fn(),
    refreshResolvedM3RunningAttempt: vi.fn(),
    retryLastUserMessage: vi.fn(),
    transcriptAvailability: "empty",
    openContinuityPresentation: { kind: "none" as const },
    journalEntries: [],
    journalCycleInstanceId: "cyc:1",
    selectedJournalEntryId: null,
    setSelectedJournalEntryId: vi.fn(),
    focusJournalExchanges: vi.fn(),
    focusTranscriptTurn: vi.fn(),
    clearFocusTurn: vi.fn(),
    focusTurnId: null,
    refreshConversationContinuity: vi.fn(),
    ...overrides,
  };
}

afterEach(() => {
  cleanup();
});

beforeEach(() => {
  getProjectRuntimeActionMock.mockReset();
  useProductConversationMock.mockReset();
  getProjectRuntimeActionMock.mockResolvedValue(PROJECT);
});

function assertNoGenericRecoveryCtas() {
  expect(screen.queryByTestId("project-recovery-banner")).toBeNull();
  expect(screen.queryByTestId("recovery-resume-durable")).toBeNull();
  expect(screen.queryByTestId("recovery-requalify")).toBeNull();
  expect(screen.queryByText(/Reprendre l'état enregistré/i)).toBeNull();
  expect(screen.queryByText(/Repartir d'une nouvelle intention/i)).toBeNull();
}

describe("AUTOMATIC PROJECT RESUME — ProjectWorkspacePage", () => {
  it("AR-01/02/03/04/05 — available transcript: workspace usable, no Recovery CTAs", async () => {
    useProductConversationMock.mockReturnValue(
      baseController({
        transcriptAvailability: "available",
        openContinuityPresentation: {
          kind: "restored_hint",
          message: W1_AUTO_RESUME_RESTORED_HINT,
        },
        messages: [
          { id: "pt:1", role: "user", content: "Bonjour" },
          { id: "pt:2", role: "assistant", content: "Salut" },
        ],
        journalEntries: [
          {
            journalEntryId: "cje:1",
            topicOrdinal: 1,
            title: "Périmètre",
            currentSummary: "ok",
            stabilizedPoints: [],
            openPoints: [],
            status: "active",
            updatedAt: "2026-09-24T12:00:00.000Z",
            sourceTurnRefs: ["pt:1"],
            sourceTurnCount: 1,
            isCurrentTopic: true,
          },
        ],
      }),
    );

    render(<ProjectWorkspacePage projectId="prj:auto-resume" />);
    expect(await screen.findByTestId("project-principal")).toBeTruthy();
    expect(await screen.findByTestId("project-workspace-layout")).toBeTruthy();
    expect(screen.getByTestId("cycle-journal-rail")).toBeTruthy();
    expect(screen.getByText("Périmètre")).toBeTruthy();
    expect(screen.getByText("Bonjour")).toBeTruthy();
    expect(screen.getByTestId("project-auto-resume-hint").textContent).toBe(
      W1_AUTO_RESUME_RESTORED_HINT,
    );
    assertNoGenericRecoveryCtas();
  });

  it("AR-07 — empty transcript is normal; no Recovery CTA", async () => {
    useProductConversationMock.mockReturnValue(
      baseController({ transcriptAvailability: "empty" }),
    );
    render(<ProjectWorkspacePage projectId="prj:auto-resume" />);
    expect(await screen.findByTestId("project-principal")).toBeTruthy();
    expect(screen.queryByTestId("project-auto-resume-hint")).toBeNull();
    expect(screen.queryByTestId("project-transcript-anomaly")).toBeNull();
    assertNoGenericRecoveryCtas();
    expect(screen.getByTestId("project-assistant-input")).toBeTruthy();
  });

  it("AR-06 — pending shows no Recovery flash/CTA", async () => {
    useProductConversationMock.mockReturnValue(
      baseController({ transcriptAvailability: "pending" }),
    );
    render(<ProjectWorkspacePage projectId="prj:auto-resume" />);
    expect(await screen.findByTestId("project-principal")).toBeTruthy();
    expect(screen.queryByTestId("project-transcript-anomaly")).toBeNull();
    expect(screen.queryByTestId("project-auto-resume-hint")).toBeNull();
    assertNoGenericRecoveryCtas();
  });

  it("AR-08 — unavailable: precise anomaly, durable workspace still rendered", async () => {
    const retry = vi.fn();
    useProductConversationMock.mockReturnValue(
      baseController({
        transcriptAvailability: "unavailable",
        openContinuityPresentation: {
          kind: "transcript_unavailable",
          message: W1_TRANSCRIPT_UNAVAILABLE_DISCLOSURE,
        },
        refreshConversationContinuity: retry,
        journalEntries: [
          {
            journalEntryId: "cje:1",
            topicOrdinal: 1,
            title: "Sujet durable",
            currentSummary: "kept",
            stabilizedPoints: [],
            openPoints: [],
            status: "active",
            updatedAt: "2026-09-24T12:00:00.000Z",
            sourceTurnRefs: [],
            sourceTurnCount: 0,
            isCurrentTopic: true,
          },
        ],
      }),
    );
    render(<ProjectWorkspacePage projectId="prj:auto-resume" />);
    expect(await screen.findByTestId("project-transcript-anomaly")).toBeTruthy();
    expect(screen.getByTestId("project-transcript-anomaly-text").textContent).toBe(
      W1_TRANSCRIPT_UNAVAILABLE_DISCLOSURE,
    );
    assertNoGenericRecoveryCtas();
    expect(screen.getByText("Sujet durable")).toBeTruthy();
    expect(screen.getByTestId("recovery-retry-transcript")).toBeTruthy();
  });
});
