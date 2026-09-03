/**
 * MW3-S02 UX — ProjectAssistantPanel surfaces Cognitive STOP distinctly.
 * Fake send action only — ZERO REAL OpenAI.
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
  projectAssistantSendAction: (...args: unknown[]) =>
    projectAssistantSendActionMock(...args),
  projectAssistantDecideAction: vi.fn(),
  projectAssistantPrepareF3FixtureAction: vi.fn(),
  projectAssistantConfirmAndExecuteF3FixtureAction: vi.fn(),
  projectAssistantPrepareResolvedM3Action: vi.fn(),
  projectAssistantConfirmAndExecuteResolvedM3Action: vi.fn(),
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

const PROJECT = {
  projectId: "prj:mw3-ui",
  name: "Projet MW3 UI",
  shortReference: "MW3UI",
  objective: "Surface Cognitive STOP.",
  contextSummary: "MW3 UX",
  criticality: "STANDARD" as const,
  constraints: [] as string[],
  lpsId: "lps:mw3-ui",
  lpsVersion: 1,
  lpsCreatedAt: "2026-09-02T12:00:00.000Z",
  doctrineId: "pkg:studio-v3-oa",
  doctrineVersion: "1.0.0",
  doctrineDigest: "digest:mw3-ui",
  doctrineStatus: "RESOLVED",
  runtimeMode: "LOCAL_PROCESS" as const,
  persistence: "PARTIAL_PROJECT_LPS_CYCLE_DECISION_CONTRACT_DURABLE" as const,
  readiness: "NOT_READY" as const,
};

describe("MW3-S02 — ProjectAssistantPanel Cognitive STOP UX", () => {
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

  it("renders Arrêt cognitif surface from mw3 DTO (≠ technical error)", async () => {
    projectAssistantSendActionMock.mockResolvedValue({
      ok: true,
      status: "cognitive_stop",
      text: "[TEST/FAKE] blocked by Cognitive STOP.",
      mode: "fixture",
      presentation: "test_provider",
      toolRounds: 0,
      toolCalls: 0,
      sources: [],
      toolEvents: [],
      project: PROJECT,
      ephemeralNotice: "ARRÊT COGNITIF (≠ erreur technique).",
      cognitiveRuntime: "agents",
      sessionId: "sess:mw3",
      memoryBAvailability: "unavailable",
      memoryBCompactionState: "none",
      mw3: {
        disposition: "evidence_backed",
        progression: "COGNITIVE_STOP",
        cognitiveStop: true,
        reason: "Evidence-backed contradiction invalidates governing premise: FinOps freeze",
        evidenceIds: ["ev:1", "ev:2"],
        sourceIds: ["src:a", "src:b"],
        governingPremise: "FinOps freeze",
        nextAction: "Cognitive STOP — replan/recovery as recommendation.",
        insufficiencyReasons: [],
        allowsSilentSuccess: false,
      },
    });

    render(<ProjectAssistantPanel projectId="prj:mw3-ui" />);
    const input = screen.getByTestId("project-assistant-input");
    fireEvent.change(input, { target: { value: "Évalue la contradiction." } });
    fireEvent.click(screen.getByTestId("project-assistant-send"));

    await waitFor(() => {
      expect(screen.getByTestId("project-assistant-mw3-surface")).toBeTruthy();
    });
    const surface = screen.getByTestId("project-assistant-mw3-surface");
    expect(surface.getAttribute("data-mw3-cognitive-stop")).toBe("true");
    expect(surface.getAttribute("data-mw3-disposition")).toBe("evidence_backed");
    expect(surface.getAttribute("data-mw3-progression")).toBe("COGNITIVE_STOP");
    expect(surface.textContent).toMatch(/Arrêt cognitif/i);
    expect(surface.textContent).not.toMatch(/erreur technique/i);
  });

  it("renders candidate surface without Cognitive STOP", async () => {
    projectAssistantSendActionMock.mockResolvedValue({
      ok: true,
      status: "ok",
      text: "[TEST/FAKE] candidate retained.",
      mode: "fixture",
      presentation: "test_provider",
      toolRounds: 0,
      toolCalls: 0,
      sources: [],
      toolEvents: [],
      project: PROJECT,
      ephemeralNotice: "Session Memory B unavailable.",
      cognitiveRuntime: "agents",
      sessionId: "sess:mw3-cand",
      memoryBAvailability: "unavailable",
      memoryBCompactionState: "none",
      mw3: {
        disposition: "candidate",
        progression: "PROGRESS_WITH_CONTRADICTION",
        cognitiveStop: false,
        reason: "Possible conflict retained as candidate.",
        evidenceIds: [],
        sourceIds: [],
        governingPremise: null,
        nextAction: "Verify sources.",
        insufficiencyReasons: ["insufficient_source_coverage"],
        allowsSilentSuccess: false,
      },
    });

    render(<ProjectAssistantPanel projectId="prj:mw3-ui" />);
    fireEvent.change(screen.getByTestId("project-assistant-input"), {
      target: { value: "Conflit possible ?" },
    });
    fireEvent.click(screen.getByTestId("project-assistant-send"));

    await waitFor(() => {
      expect(screen.getByTestId("project-assistant-mw3-surface")).toBeTruthy();
    });
    const surface = screen.getByTestId("project-assistant-mw3-surface");
    expect(surface.getAttribute("data-mw3-cognitive-stop")).toBe("false");
    expect(surface.getAttribute("data-mw3-disposition")).toBe("candidate");
    expect(surface.textContent).toMatch(/Contradiction candidate/i);
  });
});
