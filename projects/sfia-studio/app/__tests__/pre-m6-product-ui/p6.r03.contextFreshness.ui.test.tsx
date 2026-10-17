/** @vitest-environment jsdom */
/**
 * STUDIO-P6-EXECUTION-INSPECTION-CLOSURE-03 — R3 CTX async freshness.
 */
import {
  act,
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
  useProductConversationMock,
  lifecycleProjectionMock,
} = vi.hoisted(() => ({
  getProjectRuntimeActionMock: vi.fn(),
  useProductConversationMock: vi.fn(),
  lifecycleProjectionMock: vi.fn(),
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

vi.mock("@/features/project-assistant/w2/actions", () => ({
  w2DeriveGovernedExecutionContinuityAction: vi.fn().mockResolvedValue({
    ok: true,
    projection: {
      projectId: "prj:ctx",
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
      reason: null,
      blockingCode: null,
      context: null,
    },
  }),
  w2ReadCurrentGovernedExecutionContinuityAction: vi
    .fn()
    .mockResolvedValue({ ok: true, kind: "none" }),
  w2ReadProjectHistoryAction: vi.fn().mockResolvedValue({
    ok: true,
    history: {
      projectId: "prj:ctx",
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
  }),
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
  projectAssistantPilotLifecycleProjection: (...args: unknown[]) =>
    lifecycleProjectionMock(...args),
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
  lpsNextAction: () => null,
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
vi.mock("@/features/pre-m6-product-ui/ProductRailRecents", () => ({
  ProductRailRecents: () => (
    <div data-testid="studio-rail-recents-stub">Projets récents</div>
  ),
}));
vi.mock("@/features/pre-m6-product-ui/surfaces/ConversationSurface", () => ({
  ConversationSurface: () => (
    <div data-testid="project-assistant-panel">Conversation</div>
  ),
}));
vi.mock("@/features/pre-m6-product-ui/surfaces/ExecutionSurface", () => ({
  ExecutionSurface: () => <div data-testid="execution-stub" />,
}));
vi.mock("@/features/pre-m6-product-ui/surfaces/SynthesesSurface", () => ({
  SynthesesSurface: () => <div data-testid="syntheses-stub" />,
}));

function deferred<T>() {
  let resolve!: (v: T) => void;
  let reject!: (e: unknown) => void;
  const promise = new Promise<T>((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
}

function minimalLifecycleProjection(activeCycleInstanceId: string | null) {
  return {
    activeCycleInstanceId,
    selectedCycleInstanceId: activeCycleInstanceId,
    activeCycle: activeCycleInstanceId
      ? {
          cycleInstanceId: activeCycleInstanceId,
          createdAt: "2026-10-01T00:00:00.000Z",
          status: "active",
        }
      : null,
    pausedCycles: [] as const,
    terminalCycles: [] as const,
    candidateCycles: [] as const,
    cycleReservations: [] as const,
    cycleWorkRecommendations: [] as const,
    cycleDecisions: [] as const,
    reservationSummary: { activeCount: 0 },
  };
}

function runtimeFor(projectId: string) {
  return {
    ok: true as const,
    project: {
      projectId,
      name: `Project ${projectId}`,
      shortReference: "P3",
      objective: "ctx freshness",
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
      id: `lps:${projectId}`,
      version: 3,
      createdAt: "2026-10-05T00:00:00.000Z",
      activeCycleInstanceId: null,
    },
    doctrine: { id: "d", version: "1", digest: "x", status: "RESOLVED" },
    readiness: {
      status: "NOT_READY",
      hard: "OPEN",
      tA6: "INCOMPLETE",
      iam: "NOT_SELECTED",
      productPersistence: "SQLITE_OA_PRODUCT_STORE",
      realAgentExecution: "DISABLED",
      delivery: "NOT_AUTHORIZED",
      cutover: "NOT_AUTHORIZED",
      runReady: false,
      productReady: false,
    },
    disclosures: {},
  };
}

describe("P6 R03 — context freshness async", () => {
  afterEach(() => {
    cleanup();
  });

  beforeEach(() => {
    vi.clearAllMocks();
    getProjectRuntimeActionMock.mockImplementation(async (id: string) =>
      runtimeFor(id),
    );
    useProductConversationMock.mockReturnValue({
      listRef: { current: null },
      messages: [],
      draft: "",
      setDraft: vi.fn(),
      toolEvents: [],
      busy: false,
      error: null,
      send: vi.fn(),
      stop: vi.fn(),
      transcriptAvailability: "available",
      journalEntries: [],
      activeProposal: null,
      decisionSubjectContinuity: null,
      governedExecutionContinuity: null,
      refreshConversationContinuity: vi.fn(),
      armReservationInteractionContext: vi.fn(),
      clearReservationResolutionProposal: vi.fn(),
      setActiveView: vi.fn(),
    });
  });

  it("CTX05 — pending load never shows À jour prematurely", async () => {
    const d = deferred<{ ok: true; projection: { activeCycleInstanceId: string } }>();
    lifecycleProjectionMock.mockReturnValue(d.promise);

    render(
      <ProjectWorkspacePage projectId="prj:ctx-a" onProjectName={vi.fn()} />,
    );

    await waitFor(() => {
      expect(screen.getByTestId("project-currentness-chip").textContent).toMatch(
        /Lecture en cours/,
      );
    });
    expect(screen.getByTestId("project-currentness-chip").textContent).not.toBe(
      "À jour",
    );

    await act(async () => {
      d.resolve({
        ok: true,
        projection: minimalLifecycleProjection("cyc:1") as never,
      });
    });

    await waitFor(() => {
      expect(screen.getByTestId("project-currentness-chip").textContent).toBe(
        "À jour",
      );
    });
  });

  it("CTX01 — stale resolve for previous project is ignored", async () => {
    const first = deferred<{
      ok: true;
      projection: ReturnType<typeof minimalLifecycleProjection>;
    }>();
    const second = deferred<{
      ok: true;
      projection: ReturnType<typeof minimalLifecycleProjection>;
    }>();

    lifecycleProjectionMock.mockImplementation(
      ({ projectId }: { projectId: string }) => {
        if (projectId === "prj:ctx-old") return first.promise;
        return second.promise;
      },
    );

    const { rerender } = render(
      <ProjectWorkspacePage projectId="prj:ctx-old" onProjectName={vi.fn()} />,
    );

    rerender(
      <ProjectWorkspacePage projectId="prj:ctx-new" onProjectName={vi.fn()} />,
    );

    await act(async () => {
      second.resolve({
        ok: true,
        projection: minimalLifecycleProjection("cyc:new"),
      });
    });

    await act(async () => {
      first.resolve({
        ok: true,
        projection: minimalLifecycleProjection("cyc:old"),
      });
    });

    await waitFor(() => {
      expect(lifecycleProjectionMock).toHaveBeenCalledWith(
        expect.objectContaining({ projectId: "prj:ctx-new" }),
      );
    });
    await waitFor(() => {
      expect(screen.getByTestId("project-currentness-chip").textContent).toBe(
        "À jour",
      );
    });
  });

  it("CTX02/CTX06 — failed refresh marks unavailable (not À jour)", async () => {
    lifecycleProjectionMock.mockResolvedValue({
      ok: false,
      code: "UNAVAILABLE",
      message: "fail",
    });

    render(
      <ProjectWorkspacePage projectId="prj:ctx-fail" onProjectName={vi.fn()} />,
    );

    await waitFor(() => {
      expect(screen.getByTestId("project-currentness-chip").textContent).toMatch(
        /À vérifier/,
      );
    });
    expect(screen.getByTestId("project-currentness-chip").textContent).not.toBe(
      "À jour",
    );
  });

  it("CTX01 — distinguishing projects uses observable cycle ids, not only À jour badge", async () => {
    lifecycleProjectionMock.mockImplementation(
      ({ projectId }: { projectId: string }) =>
        Promise.resolve({
          ok: true as const,
          projection: minimalLifecycleProjection(
            projectId === "prj:ctx-a" ? "cyc:alpha" : "cyc:beta",
          ),
        }),
    );

    const { rerender } = render(
      <ProjectWorkspacePage projectId="prj:ctx-a" onProjectName={vi.fn()} />,
    );
    await waitFor(() => {
      expect(screen.getByTestId("project-currentness-chip").textContent).toBe(
        "À jour",
      );
    });
    expect(lifecycleProjectionMock).toHaveBeenCalledWith(
      expect.objectContaining({ projectId: "prj:ctx-a" }),
    );

    rerender(
      <ProjectWorkspacePage projectId="prj:ctx-b" onProjectName={vi.fn()} />,
    );
    await waitFor(() => {
      expect(lifecycleProjectionMock).toHaveBeenCalledWith(
        expect.objectContaining({ projectId: "prj:ctx-b" }),
      );
    });
    await waitFor(() => {
      expect(screen.getByTestId("project-currentness-chip").textContent).toBe(
        "À jour",
      );
    });
    const calls = lifecycleProjectionMock.mock.calls.map(
      (c) => (c[0] as { projectId: string }).projectId,
    );
    expect(calls).toEqual(expect.arrayContaining(["prj:ctx-a", "prj:ctx-b"]));
  });

  it("CTX03 — concurrent lifecycle resolves do not leave a stuck pending chip", async () => {
    const a = deferred<{
      ok: true;
      projection: ReturnType<typeof minimalLifecycleProjection>;
    }>();
    const b = deferred<{
      ok: true;
      projection: ReturnType<typeof minimalLifecycleProjection>;
    }>();
    let n = 0;
    lifecycleProjectionMock.mockImplementation(() => {
      n += 1;
      return n === 1 ? a.promise : b.promise;
    });

    render(
      <ProjectWorkspacePage projectId="prj:ctx-race" onProjectName={vi.fn()} />,
    );
    await waitFor(() => {
      expect(screen.getByTestId("project-currentness-chip").textContent).toMatch(
        /Lecture en cours/,
      );
    });

    await act(async () => {
      b.resolve({
        ok: true,
        projection: minimalLifecycleProjection("cyc:second"),
      });
      a.resolve({
        ok: true,
        projection: minimalLifecycleProjection("cyc:first"),
      });
    });

    await waitFor(() => {
      expect(screen.getByTestId("project-currentness-chip").textContent).toBe(
        "À jour",
      );
    });
  });

  it("CTX04/CTX08 — view navigation without Product mutation keeps currentness readable", async () => {
    lifecycleProjectionMock.mockResolvedValue({
      ok: true,
      projection: minimalLifecycleProjection("cyc:nav"),
    });
    render(
      <ProjectWorkspacePage projectId="prj:ctx-nav" onProjectName={vi.fn()} />,
    );
    await waitFor(() => {
      expect(screen.getByTestId("project-currentness-chip").textContent).toBe(
        "À jour",
      );
    });
    const before = lifecycleProjectionMock.mock.calls.length;
    // Switching tabs is presentation-only when no durable refresh is forced.
    fireEvent.click(screen.getByTestId("project-tab-execution"));
    fireEvent.click(screen.getByTestId("project-tab-conversation"));
    expect(lifecycleProjectionMock.mock.calls.length).toBe(before);
    expect(screen.getByTestId("project-currentness-chip").textContent).toBe(
      "À jour",
    );
  });

  it("CTX07 — remount after failed lifecycle refresh recovers to À jour", async () => {
    lifecycleProjectionMock
      .mockResolvedValueOnce({
        ok: false,
        code: "UNAVAILABLE",
        message: "fail",
      })
      .mockResolvedValueOnce({
        ok: true,
        projection: minimalLifecycleProjection("cyc:retry"),
      });

    const { rerender } = render(
      <ProjectWorkspacePage projectId="prj:ctx-retry" onProjectName={vi.fn()} />,
    );
    await waitFor(() => {
      expect(screen.getByTestId("project-currentness-chip").textContent).toMatch(
        /À vérifier/,
      );
    });

    rerender(
      <ProjectWorkspacePage
        projectId="prj:ctx-retry"
        onProjectName={vi.fn()}
        key="retry-2"
      />,
    );
    await waitFor(() => {
      expect(screen.getByTestId("project-currentness-chip").textContent).toBe(
        "À jour",
      );
    });
  });
});
