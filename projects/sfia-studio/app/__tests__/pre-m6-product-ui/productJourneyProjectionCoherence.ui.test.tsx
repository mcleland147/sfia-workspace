/** @vitest-environment jsdom */
/**
 * JOURNEY-INTEGRITY — cross-surface CASE A composition:
 * Trajectory ownership → ProjectWorkspacePage → Recovery/Lifecycle CTA suppression.
 */
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ProjectWorkspacePage } from "@/features/pre-m6-product-ui/ProjectWorkspacePage";

const {
  getProjectRuntimeActionMock,
  readActiveDecisionSubjectMock,
  lifecycleProjectionMock,
  useProductConversationMock,
} = vi.hoisted(() => ({
  getProjectRuntimeActionMock: vi.fn(),
  readActiveDecisionSubjectMock: vi.fn(),
  lifecycleProjectionMock: vi.fn(),
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

vi.mock("@/features/project-assistant/actions", () => ({
  projectAssistantPilotLifecycleProjection: (...args: unknown[]) =>
    lifecycleProjectionMock(...args),
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
  w2ReadActiveDecisionSubjectAction: (...args: unknown[]) =>
    readActiveDecisionSubjectMock(...args),
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
    .mockResolvedValue({
      ok: true,
      candidate: null,
      activeCycleInstanceId: "cyc:case-a",
      hasCurrentNextCycleRecommendation: false,
    }),
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
    projectId: "prj:case-a",
    name: "CASE A",
    shortReference: "CASEA",
    objective: "Reformuler owns next action",
    contextSummary: "Pending proposal without snapshot",
    constraints: [] as string[],
    criticality: "STANDARD" as const,
    localMode: true as const,
    source: "REAL_LOCAL_CORE" as const,
    fixture: false as const,
    repositoryBinding: {
      provider: "github" as const,
      identity: "mcleland147/sfia-workspace",
      remoteUrl: "https://github.com/mcleland147/sfia-workspace.git",
      defaultBranch: "main",
      pathRoot: "projects/sfia-studio/.sandbox",
    },
  },
  doctrine: {
    id: "pkg:studio-v3-oa",
    version: "1.0.0",
    digest: "digest:case-a",
    status: "RESOLVED",
  },
  livingState: {
    id: "lps:case-a",
    version: 2,
    createdAt: "2026-09-15T10:00:00.000Z",
    activeCycleInstanceId: "cyc:case-a" as string | null,
  },
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
    runtimeMode: "LOCAL_PROCESS",
    persistence: "PARTIAL_PROJECT_LPS_CYCLE_DECISION_CONTRACT_DURABLE",
    productPersistence: "SQLITE_OA_PRODUCT_STORE",
    projectLpsRestartSafe: true,
    cycleInstanceRestartSafe: true,
    agentExecution: "DISABLED",
  },
};

const LIFECYCLE_ARTIFACT_MISSING = {
  ok: true,
  projection: {
    projectId: "prj:case-a",
    activeCycleInstanceId: "cyc:case-a",
    activeCycle: null,
    pausedCycles: [],
    candidateCycles: [],
    supersededCycles: [],
    terminalCycles: [],
    selectedCycleInstanceId: "cyc:case-a",
    selectedStatus: "active",
    selectionAmbiguous: false,
    assessment: {
      cycleInstanceId: "cyc:case-a",
      projectId: "prj:case-a",
      finalizeDecisionId: null,
      finalizeAccepted: false,
      assessedAt: "2026-09-15T10:00:00.000Z",
      canComplete: false,
      blockers: ["artifact_missing"],
      obligations: [
        {
          family: "artifact",
          status: "MISSING",
          applicability: "APPLICABLE",
          blocking: true,
        },
      ],
    },
    cta: {
      canStart: false,
      canPause: true,
      canResume: false,
      canFinalize: true,
      canCancel: true,
    },
    currentRecommendations: [],
  },
};

afterEach(() => {
  cleanup();
});

beforeEach(() => {
  getProjectRuntimeActionMock.mockReset();
  readActiveDecisionSubjectMock.mockReset();
  lifecycleProjectionMock.mockReset();
  useProductConversationMock.mockReset();
  getProjectRuntimeActionMock.mockResolvedValue(PROJECT);
  lifecycleProjectionMock.mockResolvedValue(LIFECYCLE_ARTIFACT_MISSING);
  useProductConversationMock.mockReturnValue({
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
  });
});

describe("JOURNEY-INTEGRITY — ProjectWorkspace CASE A composition", () => {
  it("CTA-1 cross-surface — Reformuler owns next action; Recovery/Lifecycle generics absent", async () => {
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: true,
      kind: "pending_reinstruction_required",
      message:
        "Cette demande doit être reformulée avec Nora pour continuer. Rien ne sera exécuté sans une nouvelle décision de votre part.",
      proposalIds: ["prop:f2:4a90b644-3eb7-43b8-9e83-b140cfeb9a9c"],
      recoverableProposalIds: [],
    });

    render(<ProjectWorkspacePage projectId="prj:case-a" />);

    expect(await screen.findByTestId("project-principal")).toBeTruthy();
    expect(await screen.findByTestId("project-recovery-banner")).toBeTruthy();
    expect(screen.getByTestId("recovery-resume-durable")).toBeTruthy();

    fireEvent.click(screen.getByTestId("lps-drawer-toggle"));

    expect(await screen.findByTestId("w2-reformulate-with-nora")).toBeVisible();
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
    expect(screen.queryByTestId("w2-prepare-contract")).toBeNull();
    expect(screen.queryByTestId("w2-prepare-contract-sandbox")).toBeNull();
    expect(screen.queryByTestId("w3a-execute")).toBeNull();

    await waitFor(() => {
      expect(screen.queryByTestId("recovery-requalify")).toBeNull();
      expect(
        screen.queryByTestId("lifecycle-define-deliverable-cta"),
      ).toBeNull();
    });

    expect(
      screen.getByTestId("lifecycle-require-artifact-continuation"),
    ).toBeTruthy();
    expect(await screen.findByTestId("repo-binding-status")).toHaveTextContent(
      /Binding durable chargé/i,
    );
    expect(screen.getByTestId("repo-binding-identity")).toHaveValue(
      "mcleland147/sfia-workspace",
    );
  });

  it("CTA-5 — no Proposal ownership restores Recovery requalify + Lifecycle Nora CTA", async () => {
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: true,
      kind: "none",
    });

    render(<ProjectWorkspacePage projectId="prj:case-a" />);
    expect(await screen.findByTestId("project-recovery-banner")).toBeTruthy();
    fireEvent.click(screen.getByTestId("lps-drawer-toggle"));

    await waitFor(() => {
      expect(screen.getByTestId("recovery-requalify")).toBeTruthy();
      expect(
        screen.getByTestId("lifecycle-define-deliverable-cta"),
      ).toBeTruthy();
    });
    expect(screen.queryByTestId("w2-reformulate-with-nora")).toBeNull();
  });

  it("CTA-6 — Decision Subject read error keeps generics fail-closed", async () => {
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: false,
      code: "READ_FAILED",
      message: "Decision Subject illisible",
    });

    render(<ProjectWorkspacePage projectId="prj:case-a" />);
    expect(await screen.findByTestId("project-recovery-banner")).toBeTruthy();
    fireEvent.click(screen.getByTestId("lps-drawer-toggle"));

    await waitFor(() => {
      expect(readActiveDecisionSubjectMock).toHaveBeenCalled();
    });
    expect(screen.queryByTestId("recovery-requalify")).toBeNull();
    expect(
      screen.queryByTestId("lifecycle-define-deliverable-cta"),
    ).toBeNull();
  });
});
