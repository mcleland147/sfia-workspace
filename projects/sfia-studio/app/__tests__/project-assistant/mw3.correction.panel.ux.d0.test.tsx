/**
 * MW3 correction UX — C10–C12 visible STOP / candidate / continue anatomy.
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
  projectId: "prj:mw3-corr-ui",
  name: "Projet MW3 correction UI",
  shortReference: "MW3CUI",
  objective: "Surface anatomy",
  contextSummary: "MW3 UX correction",
  criticality: "STANDARD" as const,
  constraints: [] as string[],
  lpsId: "lps:mw3-corr-ui",
  lpsVersion: 1,
  lpsCreatedAt: "2026-09-02T12:00:00.000Z",
  doctrineId: "pkg:studio-v3-oa",
  doctrineVersion: "1.0.0",
  doctrineDigest: "digest:mw3-corr-ui",
  doctrineStatus: "RESOLVED",
  runtimeMode: "LOCAL_PROCESS" as const,
  persistence: "PARTIAL_PROJECT_LPS_CYCLE_DECISION_CONTRACT_DURABLE" as const,
  readiness: "NOT_READY" as const,
};

describe("MW3 correction — panel anatomy C10–C12", () => {
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

  it("C10 — STOP UX renders reason, premise, Evidence, Sources, blocked impact, next action", async () => {
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
      sessionId: "sess:mw3-c10",
      memoryBAvailability: "unavailable",
      memoryBCompactionState: "none",
      mw3: {
        disposition: "evidence_backed",
        progression: "COGNITIVE_STOP",
        cognitiveStop: true,
        reason:
          "Evidence-backed contradiction invalidates governing premise: FinOps freeze",
        evidenceIds: ["ev:1", "ev:2"],
        sourceIds: ["src:a", "src:b"],
        governingPremise: "FinOps freeze",
        nextAction: "Cognitive STOP — replan/recovery as recommendation.",
        insufficiencyReasons: [],
        allowsSilentSuccess: false,
        blockedImpact:
          "Progression bloquée — prémisse gouvernante invalidée (FinOps freeze).",
        mayContinue: false,
        notTechnicalFailure: true,
      },
    });

    render(<ProjectAssistantPanel projectId="prj:mw3-corr-ui" />);
    fireEvent.change(screen.getByTestId("project-assistant-input"), {
      target: { value: "Évalue la contradiction gouvernante." },
    });
    fireEvent.click(screen.getByTestId("project-assistant-send"));

    await waitFor(() => {
      expect(screen.getByTestId("project-assistant-mw3-surface")).toBeTruthy();
    });
    const surface = screen.getByTestId("project-assistant-mw3-surface");
    expect(surface.textContent).toMatch(/Arrêt cognitif/i);
    expect(screen.getByTestId("project-assistant-mw3-reason").textContent).toMatch(
      /FinOps freeze/,
    );
    expect(screen.getByTestId("project-assistant-mw3-premise").textContent).toMatch(
      /Prémisse gouvernante/,
    );
    expect(screen.getByTestId("project-assistant-mw3-evidence").textContent).toMatch(
      /ev:1/,
    );
    expect(screen.getByTestId("project-assistant-mw3-sources").textContent).toMatch(
      /src:a/,
    );
    expect(screen.getByTestId("project-assistant-mw3-blocked").textContent).toMatch(
      /Impact bloqué/,
    );
    expect(screen.getByTestId("project-assistant-mw3-next").textContent).toMatch(
      /Suite gouvernée/,
    );
    expect(
      screen.getByTestId("project-assistant-mw3-not-technical").textContent,
    ).toMatch(/pas une panne provider/i);
  });

  it("C11 — candidate UX shows insufficient proof and no STOP", async () => {
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
      sessionId: "sess:mw3-c11",
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
        insufficiencyReasons: ["insufficient_evidence_pointers"],
        allowsSilentSuccess: false,
        blockedImpact: null,
        mayContinue: true,
        notTechnicalFailure: true,
      },
    });

    render(<ProjectAssistantPanel projectId="prj:mw3-corr-ui" />);
    fireEvent.change(screen.getByTestId("project-assistant-input"), {
      target: { value: "Conflit possible ?" },
    });
    fireEvent.click(screen.getByTestId("project-assistant-send"));

    await waitFor(() => {
      expect(screen.getByTestId("project-assistant-mw3-surface")).toBeTruthy();
    });
    const surface = screen.getByTestId("project-assistant-mw3-surface");
    expect(surface.getAttribute("data-mw3-cognitive-stop")).toBe("false");
    expect(surface.textContent).toMatch(/Contradiction candidate/i);
    expect(screen.getByTestId("project-assistant-mw3-insufficiency").textContent).toMatch(
      /Preuve insuffisante/,
    );
    expect(surface.textContent).not.toMatch(/Arrêt cognitif/i);
    expect(screen.queryByTestId("project-assistant-mw3-blocked")).toBeNull();
  });

  it("C12 — evidence-backed non-governing UX shows progression may continue", async () => {
    projectAssistantSendActionMock.mockResolvedValue({
      ok: true,
      status: "ok",
      text: "[TEST/FAKE] evidence-backed continue.",
      mode: "fixture",
      presentation: "test_provider",
      toolRounds: 0,
      toolCalls: 0,
      sources: [],
      toolEvents: [],
      project: PROJECT,
      ephemeralNotice: "Session Memory B unavailable.",
      cognitiveRuntime: "agents",
      sessionId: "sess:mw3-c12",
      memoryBAvailability: "unavailable",
      memoryBCompactionState: "none",
      mw3: {
        disposition: "evidence_backed",
        progression: "PROGRESS_WITH_CONTRADICTION",
        cognitiveStop: false,
        reason: "Evidence-backed contradiction surfaced.",
        evidenceIds: ["ev:1", "ev:2"],
        sourceIds: ["src:a", "src:b"],
        governingPremise: "Local claim only",
        nextAction: "Correct recommendation path if needed; no Cognitive STOP.",
        insufficiencyReasons: [],
        allowsSilentSuccess: false,
        blockedImpact: null,
        mayContinue: true,
        notTechnicalFailure: true,
      },
    });

    render(<ProjectAssistantPanel projectId="prj:mw3-corr-ui" />);
    fireEvent.change(screen.getByTestId("project-assistant-input"), {
      target: { value: "Contradiction locale." },
    });
    fireEvent.click(screen.getByTestId("project-assistant-send"));

    await waitFor(() => {
      expect(screen.getByTestId("project-assistant-mw3-surface")).toBeTruthy();
    });
    expect(screen.getByTestId("project-assistant-mw3-continue").textContent).toMatch(
      /Progression possible/,
    );
    expect(
      screen.getByTestId("project-assistant-mw3-surface").getAttribute(
        "data-mw3-cognitive-stop",
      ),
    ).toBe("false");
  });
});
