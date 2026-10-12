/**
 * P6 Nora P0 — Panel surfaces incomplete execution limit (≠ full success).
 * Fake send action only — ZERO REAL.
 * @vitest-environment jsdom
 */
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ProjectAssistantPanel } from "@/features/project-assistant/ProjectAssistantPanel";

const {
  projectAssistantSendActionMock,
  projectAssistantRehydrateEvidenceOutcomeActionMock,
} = vi.hoisted(() => ({
  projectAssistantSendActionMock: vi.fn(),
  projectAssistantRehydrateEvidenceOutcomeActionMock: vi.fn(),
}));

vi.mock("@/features/project-assistant/actions", () => ({
  projectAssistantConversationContinuityAction: vi.fn(async () => ({
    ok: true,
    transcriptAvailability: "empty",
    messages: [],
    journal: { cycleInstanceId: null, entries: [] },
  })),
  projectAssistantSendAction: (...args: unknown[]) =>
    projectAssistantSendActionMock(...args),
  projectAssistantDecideAction: vi.fn(),
  projectAssistantPrepareF3FixtureAction: vi.fn(),
  projectAssistantConfirmAndExecuteF3FixtureAction: vi.fn(),
  projectAssistantPrepareResolvedM3Action: vi.fn(),
  projectAssistantConfirmAndExecuteResolvedM3Action: vi.fn(),
  projectAssistantRehydrateEvidenceOutcomeAction: (...args: unknown[]) =>
    projectAssistantRehydrateEvidenceOutcomeActionMock(...args),
  projectAssistantPilotLifecycleProjection: vi.fn(async () => ({
    ok: true,
    status: "ok",
    selectedCycleInstanceId: null,
    selectedStatus: null,
    activeCycleInstanceId: null,
    selectionAmbiguous: false,
    cta: {
      canStart: false,
      canPause: false,
      canResume: false,
      canFinalize: false,
      canCancel: false,
    },
  })),
  projectAssistantPilotLifecycleAction: vi.fn(),
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

const PROJECT = {
  projectId: "prj:p0-ui",
  name: "Projet P0 UI",
  shortReference: "P0UI",
  objective: "Surface incomplete.",
  contextSummary: "P0 UX",
  criticality: "STANDARD" as const,
  constraints: [] as string[],
  lpsId: "lps:p0-ui",
  lpsVersion: 1,
  lpsCreatedAt: "2026-10-12T00:00:00.000Z",
  doctrineId: "pkg:studio-v3-oa",
  doctrineVersion: "1.0.0",
  doctrineDigest: "digest:p0-ui",
  doctrineStatus: "RESOLVED",
  runtimeMode: "LOCAL_PROCESS" as const,
  persistence: "PARTIAL_PROJECT_LPS_CYCLE_DECISION_CONTRACT_DURABLE" as const,
  readiness: "NOT_READY" as const,
};

describe("P6 Nora P0 — ProjectAssistantPanel incomplete UX", () => {
  beforeEach(() => {
    projectAssistantSendActionMock.mockReset();
    projectAssistantRehydrateEvidenceOutcomeActionMock.mockReset();
    projectAssistantRehydrateEvidenceOutcomeActionMock.mockResolvedValue({
      ok: false,
      status: "error",
      code: "NO_EVIDENCE_OUTCOME_REFS",
      message: "none",
      mode: "fixture",
      retryable: false,
    });
  });

  afterEach(() => {
    cleanup();
  });

  it("T4 — incomplete status shows Analyse inachevée (not full success)", async () => {
    projectAssistantSendActionMock.mockResolvedValue({
      ok: true,
      status: "incomplete",
      text: "Model-turn budget reached (maxTurns).",
      mode: "fixture",
      presentation: "test_provider",
      toolRounds: 2,
      toolCalls: 2,
      sources: [],
      toolEvents: [],
      project: PROJECT,
      ephemeralNotice:
        "Limite d'exécution cognitive atteinte — l'analyse demandée n'est pas considérée comme achevée.",
      limitReached: true,
      cognitiveRuntime: "agents",
      sessionId: "sess:p0-ui",
      memoryBAvailability: "unavailable",
      memoryBCompactionState: "none",
      lifecycleRecommendationMaterialized: false,
    });

    render(<ProjectAssistantPanel projectId="prj:p0-ui" />);
    const input = screen.getByTestId("project-assistant-input");
    fireEvent.change(input, {
      target: { value: "Continuer l'analyse documentaire." },
    });
    fireEvent.click(screen.getByTestId("project-assistant-send"));

    await waitFor(() => {
      expect(
        screen.getByTestId("project-assistant-incomplete-surface"),
      ).toBeTruthy();
    });
    const panel = screen.getByTestId("project-assistant-panel");
    expect(panel.getAttribute("data-execution-incomplete")).toBe("true");
    expect(screen.getByTestId("project-assistant-incomplete-notice").textContent).toMatch(
      /Analyse|inachev|limite/i,
    );
    expect(screen.getByText(/Model-turn budget reached/i)).toBeTruthy();
    expect(screen.queryByTestId("project-assistant-mw3-surface")).toBeNull();
  });

  it("T7 UI — ok status does not show incomplete surface", async () => {
    projectAssistantSendActionMock.mockResolvedValue({
      ok: true,
      status: "ok",
      text: "[TEST/FAKE] reply",
      mode: "fixture",
      presentation: "test_provider",
      toolRounds: 0,
      toolCalls: 0,
      sources: [],
      toolEvents: [],
      project: PROJECT,
      ephemeralNotice: "Session ok.",
      limitReached: false,
      cognitiveRuntime: "agents",
      sessionId: "sess:p0-ui",
      memoryBAvailability: "unavailable",
      memoryBCompactionState: "none",
    });

    render(<ProjectAssistantPanel projectId="prj:p0-ui" />);
    fireEvent.change(screen.getByTestId("project-assistant-input"), {
      target: { value: "ping" },
    });
    fireEvent.click(screen.getByTestId("project-assistant-send"));

    await waitFor(() => {
      expect(screen.getByText(/TEST\/FAKE/i)).toBeTruthy();
    });
    expect(screen.queryByTestId("project-assistant-incomplete-surface")).toBeNull();
    expect(
      screen.getByTestId("project-assistant-panel").getAttribute(
        "data-execution-incomplete",
      ),
    ).toBe("false");
  });
});
