import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import axe from "axe-core";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { StudioShell } from "@/components/shell/StudioShell";
import { ProjectAssistantPanel } from "@/features/project-assistant/ProjectAssistantPanel";
import { ProjectWorkspaceView } from "@/features/vertical-slice-ui/ProjectWorkspaceView";

const {
  projectAssistantSendActionMock,
  projectAssistantDecideActionMock,
  projectAssistantPrepareF3FixtureActionMock,
  projectAssistantConfirmAndExecuteF3FixtureActionMock,
  projectAssistantRehydrateEvidenceOutcomeActionMock,
} = vi.hoisted(() => ({
  projectAssistantSendActionMock: vi.fn(),
  projectAssistantDecideActionMock: vi.fn(),
  projectAssistantPrepareF3FixtureActionMock: vi.fn(),
  projectAssistantConfirmAndExecuteF3FixtureActionMock: vi.fn(),
  projectAssistantRehydrateEvidenceOutcomeActionMock: vi.fn(),
}));

vi.mock("@/features/project-assistant/actions", () => ({
  projectAssistantSendAction: (...args: unknown[]) =>
    projectAssistantSendActionMock(...args),
  projectAssistantDecideAction: (...args: unknown[]) =>
    projectAssistantDecideActionMock(...args),
  projectAssistantPrepareF3FixtureAction: (...args: unknown[]) =>
    projectAssistantPrepareF3FixtureActionMock(...args),
  projectAssistantConfirmAndExecuteF3FixtureAction: (...args: unknown[]) =>
    projectAssistantConfirmAndExecuteF3FixtureActionMock(...args),
  projectAssistantRehydrateEvidenceOutcomeAction: (...args: unknown[]) =>
    projectAssistantRehydrateEvidenceOutcomeActionMock(...args),
}));

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

const SUCCESS_RESULT = {
  ok: true as const,
  project: {
    projectId: "prj:f1-ui",
    name: "Projet F1 UI",
    shortReference: "F1UI",
    objective: "Valider le panneau assistant.",
    contextSummary: "UI F1.",
    criticality: "STANDARD" as const,
    constraints: [] as string[],
    localMode: true as const,
    source: "REAL_LOCAL_CORE" as const,
    fixture: false as const,
  },
  doctrine: {
    id: "pkg:studio-v3-oa",
    version: "1.0.0",
    digest: "digest:f1-ui",
    status: "RESOLVED",
  },
  livingState: {
    id: "lps:f1-ui",
    version: 1 as const,
    createdAt: "2026-08-10T12:00:00.000Z",
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
    runReady: false as const,
    productReady: false as const,
  },
  disclosures: {
    runtimeMode: "LOCAL_PROCESS" as const,
    persistence: "PARTIAL_PROJECT_LPS_CYCLE_DECISION_CONTRACT_DURABLE" as const,
    agentExecution: "DISABLED" as const,
    iam: "NOT_SELECTED" as const,
    productPersistence: "SQLITE_OA_PRODUCT_STORE" as const,
    delivery: "NOT_AUTHORIZED" as const,
    cutover: "NOT_AUTHORIZED" as const,
    localDataVolatile: true as const,
    restartMayLoseState: true as const,
    projectLpsRestartSafe: true as const,
    cycleInstanceRestartSafe: true as const,
    humanDecisionRestartSafe: true as const,
    executionContractRestartSafe: true as const,
    messages: [] as const,
  },
};

const NO_EVIDENCE_OUTCOME = {
  ok: false as const,
  status: "rehydrate_error" as const,
  code: "NO_EVIDENCE_OUTCOME_REFS",
  message: "Aucune référence Evidence/ReviewBundle sur le LPS courant.",
  mode: "fixture" as const,
  retryable: false,
};

const DURABLE_REHYDRATE_SUCCESS = {
  ok: true as const,
  status: "ok" as const,
  mode: "fixture" as const,
  presentation: "unconfirmed" as const,
  text: "REHYDRATE EVIDENCE OUTCOME",
  project: {
    projectId: "prj:m5-ui",
    name: "Projet M5 UI",
    shortReference: "M5UI",
    objective: "Durable rehydrate UI",
    contextSummary: "M5-27/M5-28",
    criticality: "STANDARD",
    constraints: [] as string[],
    lpsId: "lps:m5-ui",
    lpsVersion: 3,
    lpsCreatedAt: "2026-08-15T12:00:00.000Z",
    doctrineId: "pkg:studio-v3-oa",
    doctrineVersion: "1.0.0",
    doctrineDigest: "digest:m5-ui",
    doctrineStatus: "RESOLVED",
    runtimeMode: "LOCAL_PROCESS",
    persistence: "PARTIAL_PROJECT_LPS_CYCLE_DECISION_CONTRACT_DURABLE",
    readiness: "NOT_READY",
  },
  ephemeralNotice:
    "F3 fixture execution — Attempt, Evidence, ReviewBundle and LPS evidence links are persisted in Product SQLite. REAL execution remains disabled. Recommendation is not a Morris decision.",
  evidence: [
    {
      evidenceId: "ev:m5-ui",
      status: "available",
      sourceKind: "execution_attempt",
      technicalResultRef: "res:m5-ui",
      verified: false as const,
      mode: "fixture" as const,
    },
  ],
  reviewBundles: [
    {
      reviewBundleId: "rb:m5-ui",
      status: "draft",
      version: 1,
      evidenceRefs: ["ev:m5-ui"],
      mode: "fixture" as const,
    },
  ],
  recommendation: {
    kind: "recommendation" as const,
    status: "not_recommended",
    executionAuthority: false as const,
    gateConsumed: false as const,
    decisionCreated: false as const,
    attemptAutoLaunchNextCycle: false as const,
    openHardReservationRefs: [] as string[],
    hardBlockers: [] as string[],
    nextGateCode: null,
    nextActionCode: null,
    recommendationLabel: "RECOMMANDATION — PAS UNE DÉCISION MORRIS" as const,
    mode: "fixture" as const,
  },
  lpsVersion: 3,
  evidenceIds: ["ev:m5-ui"],
  reviewBundleIds: ["rb:m5-ui"],
};

describe("F1 ProjectAssistantPanel UI", () => {
  beforeEach(() => {
    projectAssistantSendActionMock.mockReset();
    projectAssistantDecideActionMock.mockReset();
    projectAssistantPrepareF3FixtureActionMock.mockReset();
    projectAssistantConfirmAndExecuteF3FixtureActionMock.mockReset();
    projectAssistantRehydrateEvidenceOutcomeActionMock.mockReset();
    projectAssistantRehydrateEvidenceOutcomeActionMock.mockResolvedValue(
      NO_EVIDENCE_OUTCOME,
    );
  });

  afterEach(() => {
    cleanup();
  });

  it(
    "enables composer in Copilot interactive slot without OPS1 navigation",
    async () => {
    projectAssistantSendActionMock.mockResolvedValue({
      ok: true,
      status: "ok",
      text: "[TEST/FAKE · NON LIVE] Bonjour projet",
      mode: "fixture",
      presentation: "test_provider",
      toolRounds: 0,
      toolCalls: 0,
      sources: [],
      toolEvents: [],
      project: {
        projectId: "prj:f1-ui",
        name: "Projet F1 UI",
        shortReference: "F1UI",
        objective: "Valider le panneau assistant.",
        contextSummary: "UI F1.",
        criticality: "STANDARD",
        constraints: [],
        lpsId: "lps:f1-ui",
        lpsVersion: 1,
        lpsCreatedAt: "2026-08-10T12:00:00.000Z",
        doctrineId: "pkg:studio-v3-oa",
        doctrineVersion: "1.0.0",
        doctrineDigest: "digest:f1-ui",
        doctrineStatus: "RESOLVED",
        runtimeMode: "LOCAL_PROCESS",
        persistence: "PARTIAL_PROJECT_LPS_CYCLE_DECISION_CONTRACT_DURABLE",
        readiness: "NOT_READY",
      },
      ephemeralNotice: "Conversation éphémère",
    });

    render(
      <StudioShell
        variant="flush"
        activeRoute={"/studio/projects/prj:f1-ui" as never}
        title="Espace projet"
        showTabs={false}
        primaryAction={null}
        copilot={{
          variant: "flush",
          name: "Nora · Assistant projet",
          subtitle: "Analyse · conversation · lecture seule",
          summary: "unused when interactive",
          interactiveContent: <ProjectAssistantPanel projectId="prj:f1-ui" />,
        }}
      >
        <ProjectWorkspaceView projectId="prj:f1-ui" result={SUCCESS_RESULT} />
      </StudioShell>,
    );

    expect(screen.getByTestId("project-assistant-panel")).toBeVisible();
    expect(screen.queryByTestId("copilot-composer-disabled")).toBeNull();
    expect(screen.getByTestId("project-assistant-composer")).toBeVisible();
    expect(screen.getByTestId("project-assistant-input")).toBeEnabled();
    expect(screen.getByTestId("project-assistant-no-cursor")).toBeInTheDocument();
    expect(screen.getByTestId("project-assistant-no-write")).toBeInTheDocument();
    expect(screen.getByTestId("workspace-primary-assistant-hint")).toBeVisible();
    expect(screen.getByTestId("workspace-continue-pilotage")).toHaveTextContent(
      /temporaire/i,
    );

    fireEvent.change(screen.getByTestId("project-assistant-input"), {
      target: { value: "Bonjour" },
    });
    fireEvent.click(screen.getByTestId("project-assistant-send"));

    await waitFor(() => {
      expect(projectAssistantSendActionMock).toHaveBeenCalledWith(
        expect.objectContaining({
          projectId: "prj:f1-ui",
          content: "Bonjour",
        }),
      );
    });

    expect(
      await screen.findByText("[TEST/FAKE · NON LIVE] Bonjour projet"),
    ).toBeVisible();

    // multi-tour
    projectAssistantSendActionMock.mockResolvedValueOnce({
      ok: true,
      status: "ok",
      text: "[TEST/FAKE · NON LIVE] Tour 2",
      mode: "fixture",
      presentation: "test_provider",
      toolRounds: 1,
      toolCalls: 1,
      sources: [],
      toolEvents: [
        {
          toolName: "git_local_get_status",
          status: "succeeded",
          pathOrRef: null,
          summary: "status ok",
          errorCode: null,
          readOnly: true,
        },
      ],
      project: {
        projectId: "prj:f1-ui",
        name: "Projet F1 UI",
        shortReference: "F1UI",
        objective: "Valider le panneau assistant.",
        contextSummary: "UI F1.",
        criticality: "STANDARD",
        constraints: [],
        lpsId: "lps:f1-ui",
        lpsVersion: 1,
        lpsCreatedAt: "2026-08-10T12:00:00.000Z",
        doctrineId: "pkg:studio-v3-oa",
        doctrineVersion: "1.0.0",
        doctrineDigest: "digest:f1-ui",
        doctrineStatus: "RESOLVED",
        runtimeMode: "LOCAL_PROCESS",
        persistence: "PARTIAL_PROJECT_LPS_CYCLE_DECISION_CONTRACT_DURABLE",
        readiness: "NOT_READY",
      },
      ephemeralNotice: "Conversation éphémère",
    });

    fireEvent.change(screen.getByTestId("project-assistant-input"), {
      target: { value: "Deuxième tour" },
    });
    fireEvent.click(screen.getByTestId("project-assistant-send"));
    expect(await screen.findByText("[TEST/FAKE · NON LIVE] Tour 2")).toBeVisible();
    expect(screen.getByTestId("project-assistant-source-item")).toHaveAttribute(
      "data-status",
      "succeeded",
    );

    const results = await axe.run(document.body, {
      rules: {
        "color-contrast": { enabled: false },
        region: { enabled: false },
      },
    });
    expect(results.violations).toEqual([]);
  }, 15_000);

  it("shows deny events and recoverable errors", async () => {
    projectAssistantSendActionMock.mockResolvedValueOnce({
      ok: true,
      status: "ok",
      text: "[TEST/FAKE · NON LIVE] Deny handled",
      mode: "fixture",
      presentation: "test_provider",
      toolRounds: 1,
      toolCalls: 1,
      sources: [],
      toolEvents: [
        {
          toolName: "git_local_read_file",
          status: "denied",
          pathOrRef: ".env",
          summary: "PATH_NOT_ALLOWED",
          errorCode: "PATH_NOT_ALLOWED",
          readOnly: true,
        },
      ],
      project: {
        projectId: "prj:f1-ui",
        name: "Projet F1 UI",
        shortReference: null,
        objective: "x",
        contextSummary: "y",
        criticality: "STANDARD",
        constraints: [],
        lpsId: "lps:f1-ui",
        lpsVersion: 1,
        lpsCreatedAt: "2026-08-10T12:00:00.000Z",
        doctrineId: "pkg:studio-v3-oa",
        doctrineVersion: "1.0.0",
        doctrineDigest: "digest:f1-ui",
        doctrineStatus: "RESOLVED",
        runtimeMode: "LOCAL_PROCESS",
        persistence: "PARTIAL_PROJECT_LPS_CYCLE_DECISION_CONTRACT_DURABLE",
        readiness: "NOT_READY",
      },
      ephemeralNotice: "éphémère",
    });

    render(<ProjectAssistantPanel projectId="prj:f1-ui" />);
    fireEvent.change(screen.getByTestId("project-assistant-input"), {
      target: { value: "deny" },
    });
    fireEvent.click(screen.getByTestId("project-assistant-send"));
    const denyItem = await screen.findByTestId("project-assistant-source-item");
    expect(denyItem).toHaveAttribute("data-status", "denied");
    expect(within(denyItem).getByText(/Refus policy/)).toBeVisible();

    projectAssistantSendActionMock.mockResolvedValueOnce({
      ok: false,
      status: "provider_error",
      code: "PROVIDER_ERROR",
      message: "Erreur de démonstration",
      mode: "fixture",
      retryable: true,
    });
    fireEvent.change(screen.getByTestId("project-assistant-input"), {
      target: { value: "error" },
    });
    fireEvent.click(screen.getByTestId("project-assistant-send"));
    expect(await screen.findByTestId("project-assistant-error")).toBeVisible();
    expect(screen.getByTestId("project-assistant-retry")).toBeVisible();
  });


  it("shows MODE À CONFIRMER before first provider response", () => {
    render(<ProjectAssistantPanel projectId="prj:f1-ui" />);
    expect(screen.getByTestId("project-assistant-mode-pill")).toHaveTextContent(
      /MODE À CONFIRMER/,
    );
    expect(screen.getByTestId("project-assistant-mode-pill")).not.toHaveTextContent(
      /Fixture/,
    );
  });

  it("blocks empty send", () => {
    render(<ProjectAssistantPanel projectId="prj:f1-ui" />);
    expect(screen.getByTestId("project-assistant-send")).toBeDisabled();
  });
});

describe("M5-27/M5-28 durable Nora/UI rehydrate", () => {
  beforeEach(() => {
    projectAssistantSendActionMock.mockReset();
    projectAssistantDecideActionMock.mockReset();
    projectAssistantPrepareF3FixtureActionMock.mockReset();
    projectAssistantConfirmAndExecuteF3FixtureActionMock.mockReset();
    projectAssistantRehydrateEvidenceOutcomeActionMock.mockReset();
    projectAssistantRehydrateEvidenceOutcomeActionMock.mockResolvedValue(
      NO_EVIDENCE_OUTCOME,
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("shows durable ReviewBundle + Recommendation after mount without f3Execute", async () => {
    projectAssistantRehydrateEvidenceOutcomeActionMock.mockResolvedValue(
      DURABLE_REHYDRATE_SUCCESS,
    );

    render(<ProjectAssistantPanel projectId="prj:m5-ui" />);

    expect(
      await screen.findByTestId("durable-evidence-outcome"),
    ).toBeVisible();
    expect(projectAssistantRehydrateEvidenceOutcomeActionMock).toHaveBeenCalledWith(
      { projectId: "prj:m5-ui" },
    );
    expect(screen.getByTestId("durable-review-bundle-id")).toHaveTextContent(
      "rb:m5-ui",
    );
    expect(screen.getByTestId("durable-review-bundle-status")).toHaveTextContent(
      "draft",
    );
    expect(screen.getByTestId("durable-recommendation-label")).toHaveTextContent(
      "RECOMMANDATION — PAS UNE DÉCISION MORRIS",
    );
    expect(
      screen.getByTestId("durable-recommendation-execution-authority"),
    ).toHaveTextContent("executionAuthority: false");
    expect(
      screen.getByTestId("durable-recommendation-gate-consumed"),
    ).toHaveTextContent("gateConsumed: false");
    expect(
      screen.getByTestId("durable-recommendation-decision-created"),
    ).toHaveTextContent("decisionCreated: false");
    expect(screen.queryByTestId("project-assistant-f3-execute")).toBeNull();
    expect(
      projectAssistantConfirmAndExecuteF3FixtureActionMock,
    ).not.toHaveBeenCalled();
  });

  it("reloads durable ReviewBundle + Recommendation after unmount/remount", async () => {
    projectAssistantRehydrateEvidenceOutcomeActionMock.mockResolvedValue(
      DURABLE_REHYDRATE_SUCCESS,
    );

    const first = render(<ProjectAssistantPanel projectId="prj:m5-ui" />);
    expect(
      await screen.findByTestId("durable-review-bundle-id"),
    ).toHaveTextContent("rb:m5-ui");
    expect(
      screen.getByTestId("durable-recommendation-label"),
    ).toHaveTextContent("RECOMMANDATION — PAS UNE DÉCISION MORRIS");

    first.unmount();

    render(<ProjectAssistantPanel projectId="prj:m5-ui" />);
    expect(
      await screen.findByTestId("durable-review-bundle-id"),
    ).toHaveTextContent("rb:m5-ui");
    expect(
      screen.getByTestId("durable-recommendation-label"),
    ).toHaveTextContent("RECOMMANDATION — PAS UNE DÉCISION MORRIS");
    expect(
      screen.getByTestId("durable-recommendation-execution-authority"),
    ).toHaveTextContent("executionAuthority: false");
    expect(
      projectAssistantRehydrateEvidenceOutcomeActionMock.mock.calls.length,
    ).toBeGreaterThanOrEqual(2);
    expect(screen.queryByTestId("project-assistant-f3-execute")).toBeNull();
    expect(
      projectAssistantConfirmAndExecuteF3FixtureActionMock,
    ).not.toHaveBeenCalled();
  });

  it("keeps composer usable when LPS has no durable outcome refs", async () => {
    projectAssistantRehydrateEvidenceOutcomeActionMock.mockResolvedValue(
      NO_EVIDENCE_OUTCOME,
    );

    render(<ProjectAssistantPanel projectId="prj:m5-empty" />);

    await waitFor(() => {
      expect(
        projectAssistantRehydrateEvidenceOutcomeActionMock,
      ).toHaveBeenCalledWith({ projectId: "prj:m5-empty" });
    });

    expect(screen.queryByTestId("durable-evidence-outcome")).toBeNull();
    expect(screen.queryByTestId("durable-review-bundle-card")).toBeNull();
    expect(screen.queryByTestId("durable-recommendation-card")).toBeNull();
    expect(screen.queryByTestId("durable-rehydrate-error")).toBeNull();
    expect(screen.queryByTestId("project-assistant-error")).toBeNull();
    expect(screen.getByTestId("project-assistant-input")).toBeEnabled();
    expect(screen.getByTestId("project-assistant-composer")).toBeVisible();
  });

  it("shows bounded durable rehydrate error without blocking composer", async () => {
    projectAssistantRehydrateEvidenceOutcomeActionMock.mockResolvedValue({
      ok: false,
      status: "rehydrate_error",
      code: "EVIDENCE_REF_MISSING",
      message: "Evidence manquante",
      mode: "fixture",
      retryable: false,
    });

    render(<ProjectAssistantPanel projectId="prj:m5-err" />);

    expect(await screen.findByTestId("durable-rehydrate-error")).toHaveTextContent(
      /Impossible de relire le dernier outcome durable/,
    );
    expect(screen.queryByTestId("durable-recommendation-card")).toBeNull();
    expect(screen.getByTestId("project-assistant-input")).toBeEnabled();
    expect(
      projectAssistantConfirmAndExecuteF3FixtureActionMock,
    ).not.toHaveBeenCalled();
  });
});
