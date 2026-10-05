/** @vitest-environment jsdom */
/**
 * P5-S01 — Workspace / Conversation P3 layout smoke (UI).
 */
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ProductShell } from "@/features/pre-m6-product-ui/ProductShell";
import { ProjectWorkspacePage } from "@/features/pre-m6-product-ui/ProjectWorkspacePage";
import nextConfig from "../../next.config";

const { getProjectRuntimeActionMock, useProductConversationMock } = vi.hoisted(
  () => ({
    getProjectRuntimeActionMock: vi.fn(),
    useProductConversationMock: vi.fn(),
  }),
);

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
      projectId: "prj:p5-s01",
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
      projectId: "prj:p5-s01",
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

describe("P5-S01 Workspace layout", () => {
  afterEach(() => {
    cleanup();
  });

  beforeEach(() => {
    vi.clearAllMocks();
    getProjectRuntimeActionMock.mockResolvedValue({
      ok: true,
      project: {
        projectId: "prj:p5-s01",
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
        id: "lps:p5",
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
    });
    useProductConversationMock.mockReturnValue({
      listRef: { current: null },
      messages: [],
      draft: "",
      setDraft: vi.fn(),
      toolEvents: [],
      busy: false,
      error: null,
      send: vi.fn(),
      transcriptAvailability: "available",
      openContinuityPresentation: { kind: "none" },
      refreshConversationContinuity: vi.fn(),
      journalEntries: [],
      activeProposal: null,
      f3Prepare: null,
      f3M3Resolved: null,
      f3Execute: null,
      durableEvidenceOutcome: null,
    });
  });

  it("renders P3 shell rail + Conversation workspace without internals", async () => {
    render(
      <ProductShell
        activeNav="current"
        currentProjectHref="/studio/projects/prj%3Ap5-s01"
      >
        <ProjectWorkspacePage projectId="prj:p5-s01" />
      </ProductShell>,
    );

    expect(screen.getByTestId("studio-shell")).toBeTruthy();
    expect(screen.getByTestId("studio-rail")).toBeTruthy();
    expect(screen.getByTestId("studio-rail-meridian")).toBeTruthy();
    expect(screen.getAllByText("SFIA Studio").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Pilote").length).toBeGreaterThan(0);

    await waitFor(() => {
      expect(screen.getByTestId("project-principal")).toBeTruthy();
    });

    expect(screen.getByTestId("project-tab-conversation")).toHaveAttribute(
      "data-selected",
      "true",
    );
    expect(screen.getByTestId("project-tab-overview").textContent).toMatch(
      /Aperçu/,
    );
    expect(screen.getByTestId("project-tab-execution").textContent).toMatch(
      /Exécution/,
    );
    expect(screen.getByTestId("project-conversation-main")).toBeTruthy();
    expect(screen.getByTestId("project-lps-column")).toBeTruthy();

    const body = document.body.textContent ?? "";
    expect(body).not.toMatch(
      /HumanDecision|ExecutionContract|\bCKC\b|reasoning effort|gpt-6|OPENAI_MODEL/i,
    );
    expect(screen.queryByLabelText(/modèle/i)).toBeNull();
    expect(screen.queryByLabelText(/reasoning/i)).toBeNull();
  });

  it("hides Next.js floating « N » indicator (B1) and keeps Mobile Conversation primary", () => {
    // B1 root cause: Next.js 15 `devIndicators` (default bottom-left black « N »),
    // not Product Nora chrome. P3 Mobile 190:306 has no such floating control.
    expect(nextConfig.devIndicators).toBe(false);

    const shellCss = readFileSync(
      resolve(__dirname, "../../features/pre-m6-product-ui/ProductShell.module.css"),
      "utf8",
    );
    expect(shellCss).toMatch(
      /@media\s*\(max-width:\s*767px\)[\s\S]*\.rail\s*\{\s*display:\s*none;/,
    );

    const conversationCss = readFileSync(
      resolve(
        __dirname,
        "../../features/pre-m6-product-ui/surfaces/ConversationSurface.module.css",
      ),
      "utf8",
    );
    expect(conversationCss).toMatch(
      /\.composer\s*\{[\s\S]*position:\s*sticky;[\s\S]*bottom:\s*0;/,
    );
    // Product Nora message avatars remain in-flow (not viewport-fixed).
    expect(conversationCss).not.toMatch(
      /\.turnAvatar\s*\{[\s\S]*position:\s*fixed/,
    );
  });
});
