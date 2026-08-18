import { cleanup, render, screen, waitFor, within } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ProjectPrincipalClient } from "@/features/studio-projects/ProjectPrincipalClient";
import type { ProjectAssistantRehydrateEvidenceOutcomeSuccess } from "@/features/project-assistant/types";

const {
  getProjectRuntimeActionMock,
  projectAssistantRehydrateEvidenceOutcomeActionMock,
} = vi.hoisted(() => ({
  getProjectRuntimeActionMock: vi.fn(),
  projectAssistantRehydrateEvidenceOutcomeActionMock: vi.fn(),
}));

vi.mock("@/lib/vertical-slice-runtime/actions", () => ({
  getProjectRuntimeAction: getProjectRuntimeActionMock,
}));

vi.mock("@/features/project-assistant/actions", () => ({
  projectAssistantRehydrateEvidenceOutcomeAction:
    projectAssistantRehydrateEvidenceOutcomeActionMock,
  projectAssistantDecideAction: vi.fn(),
  projectAssistantSendAction: vi.fn(),
  projectAssistantPrepareF3FixtureAction: vi.fn(),
  projectAssistantPrepareM3Action: vi.fn(),
  projectAssistantConfirmAndExecuteF3FixtureAction: vi.fn(),
}));

const BASE_PROJECT = {
  ok: true as const,
  project: {
    projectId: "prj:amend-1",
    name: "Projet AMEND",
    shortReference: "AMEND",
    objective: "Objectif",
    contextSummary: "Contexte",
    constraints: [] as string[],
    criticality: "STANDARD" as const,
    localMode: true as const,
    source: "REAL_LOCAL_CORE" as const,
    fixture: false as const,
  },
  doctrine: {
    id: "pkg:studio-v3-oa",
    version: "1.0.0",
    digest: "digest:amend",
    status: "RESOLVED",
  },
  livingState: {
    id: "lps:amend-1",
    version: 1,
    createdAt: "2026-08-16T10:00:00.000Z",
    activeCycleInstanceId: null as string | null,
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
    persistence: "PARTIAL",
    agentExecution: "DISABLED",
    iam: "NOT_SELECTED",
    productPersistence: "SQLITE_OA_PRODUCT_STORE",
    delivery: "NOT_AUTHORIZED",
    cutover: "NOT_AUTHORIZED",
    localDataVolatile: true as const,
    restartMayLoseState: true as const,
    projectLpsRestartSafe: true as const,
    cycleInstanceRestartSafe: true as const,
    humanDecisionRestartSafe: true as const,
    executionContractRestartSafe: true as const,
    messages: [] as string[],
  },
};

const DURABLE_OUTCOME: ProjectAssistantRehydrateEvidenceOutcomeSuccess = {
  ok: true,
  status: "ok",
  mode: "fixture",
  presentation: "unconfirmed",
  text: "durable",
  project: {
    projectId: "prj:amend-1",
    name: "Projet AMEND",
    shortReference: null,
    objective: "Objectif",
    contextSummary: "Contexte",
    criticality: "standard",
    constraints: [],
    lpsId: "lps:1",
    lpsVersion: 2,
    lpsCreatedAt: "2026-08-16T10:00:00.000Z",
    doctrineId: "doc",
    doctrineVersion: "1",
    doctrineDigest: "digest",
    doctrineStatus: "active",
    runtimeMode: "local",
    persistence: "product_sqlite",
    readiness: "NOT_READY",
  },
  ephemeralNotice: "process-local",
  evidence: [
    {
      evidenceId: "ev:1",
      status: "available",
      sourceKind: "execution_attempt",
      technicalResultRef: "res:1",
      verified: false,
      mode: "FIXTURE",
    },
  ],
  reviewBundles: [
    {
      reviewBundleId: "rb:1",
      status: "draft",
      version: 1,
      evidenceRefs: ["ev:1"],
      mode: "FIXTURE",
    },
  ],
  recommendation: {
    kind: "recommendation",
    status: "not_recommended",
    executionAuthority: false,
    gateConsumed: false,
    decisionCreated: false,
    attemptAutoLaunchNextCycle: false,
    openHardReservationRefs: [],
    hardBlockers: [],
    nextGateCode: null,
    nextActionCode: null,
    recommendationLabel: "RECOMMANDATION — PAS UNE DÉCISION MORRIS",
    mode: "FIXTURE",
  },
  lpsVersion: 2,
  evidenceIds: ["ev:1"],
  reviewBundleIds: ["rb:1"],
};

afterEach(() => {
  cleanup();
  getProjectRuntimeActionMock.mockReset();
  projectAssistantRehydrateEvidenceOutcomeActionMock.mockReset();
});

describe("ProjectPrincipalClient AMEND readback / recovery", () => {
  it("hides Recovery banner on nominal project without durable advance", async () => {
    getProjectRuntimeActionMock.mockResolvedValue(BASE_PROJECT);
    projectAssistantRehydrateEvidenceOutcomeActionMock.mockResolvedValue({
      ok: false,
      status: "rehydrate_error",
      code: "NO_EVIDENCE_OUTCOME_REFS",
      message: "none",
      mode: "fixture",
      retryable: false,
    });

    render(<ProjectPrincipalClient projectId="prj:amend-1" />);

    await waitFor(() => {
      expect(screen.getByTestId("project-principal")).toBeInTheDocument();
    });
    expect(screen.queryByTestId("project-recovery-banner")).toBeNull();
    expect(screen.getByTestId("project-durability-hint")).toBeVisible();
    expect(screen.getByTestId("project-history-panel")).toBeVisible();
    expect(
      within(screen.getByTestId("project-history-panel")).queryByText(
        /Evidence|ReviewBundle/,
      ),
    ).toBeNull();
  });

  it("shows Recovery and History durable anchors when outcome rehydrates", async () => {
    getProjectRuntimeActionMock.mockResolvedValue({
      ...BASE_PROJECT,
      livingState: {
        ...BASE_PROJECT.livingState,
        version: 2,
      },
    });
    projectAssistantRehydrateEvidenceOutcomeActionMock.mockResolvedValue(
      DURABLE_OUTCOME,
    );

    render(<ProjectPrincipalClient projectId="prj:amend-1" />);

    await waitFor(() => {
      expect(screen.getByTestId("project-recovery-banner")).toBeVisible();
    });
    expect(screen.getByTestId("recovery-resume-durable")).toBeVisible();
    expect(screen.getByTestId("recovery-requalify")).toBeVisible();

    const history = await screen.findByTestId("project-history-panel");
    await waitFor(() => {
      expect(
        within(history).getByText("RECOMMANDATION — PAS UNE DÉCISION MORRIS"),
      ).toBeVisible();
    });
    expect(within(history).getByText("Evidence")).toBeVisible();
    expect(within(history).getByText("ReviewBundle")).toBeVisible();
    expect(within(history).getByText("≠ Décision humaine")).toBeVisible();
  });
});
