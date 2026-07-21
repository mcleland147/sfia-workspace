import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { Ops1SessionScreen } from "@/features/ops1/Ops1SessionScreen";

const create = vi.fn();
const get = vi.fn();
const send = vi.fn();
const liveConfig = vi.fn();

vi.mock("@/lib/ops1/actions", () => ({
  ops1CreateSessionAction: (...args: unknown[]) => create(...args),
  ops1GetSessionAction: (...args: unknown[]) => get(...args),
  ops1SendMessageAction: (...args: unknown[]) => send(...args),
  ops1GetLiveConfigAction: (...args: unknown[]) => liveConfig(...args),
  ops1GetRealCursorAvailabilityAction: vi.fn(async () => ({
    ok: true,
    data: { flagEnabled: false, binPath: null, available: false },
  })),
  ops1AppendUserMessageAction: vi.fn(),
  ops1QualifyActionNotRequiredAction: vi.fn(),
  ops1CreateFixtureActionCandidateAction: vi.fn(),
  ops1RefineActionCandidateAction: vi.fn(),
  ops1RecordGateDecisionAction: vi.fn(),
  ops1RefuseExecutionAction: vi.fn(),
  ops1EvaluateAllowlistAction: vi.fn(),
  ops1CreateExecutionContractAction: vi.fn(),
  ops1RecordExecutionGateAction: vi.fn(),
  ops1RunExecutionAttemptAction: vi.fn(),
  ops1GenerateExecutionReportAction: vi.fn(),
  ops1ResumePostReportChatAction: vi.fn(),
  ops1CloseSessionAction: vi.fn(),
  ops1OpenContinuationAction: vi.fn(),
}));

const emptyI3 = {
  qualification: null,
  candidates: [] as unknown[],
  latestDecisionsByAction: {} as Record<string, null>,
  latestAllowlistByAction: {} as Record<string, null>,
};

const fixtureSession = {
  sessionId: "ops1-sess-11111111-1111-4111-8111-111111111111",
  projectKey: "sfia-studio-ops1",
  status: "OPEN" as const,
  createdAt: "2026-07-20T21:00:00+02:00",
  updatedAt: "2026-07-20T21:00:00+02:00",
  parentSessionId: null,
  fixtureMode: true,
  conversationMode: "fixture" as const,
};

const liveSession = {
  ...fixtureSession,
  fixtureMode: false,
  conversationMode: "live" as const,
};

describe("Ops1SessionScreen I2 immutable mode + signalétique", () => {
  afterEach(() => cleanup());

  beforeEach(() => {
    vi.clearAllMocks();
    window.sessionStorage.clear();
    liveConfig.mockResolvedValue({
      ok: true,
      data: {
        available: false,
        missing: ["OPENAI_API_KEY", "OPENAI_MODEL"],
        testProvider: false,
      },
    });
  });

  it("shows mode selection and live unavailable", async () => {
    render(<Ops1SessionScreen />);
    await waitFor(() => {
      expect(screen.getByTestId("ops1-empty-state")).toBeInTheDocument();
    });
    expect(screen.getByTestId("ops1-create-mode-selector")).toBeInTheDocument();
    expect(screen.getByTestId("ops1-badge-live-unavailable")).toBeInTheDocument();
    expect(screen.getByTestId("ops1-create-mode-live")).toBeDisabled();
  });

  it("creates fixture session locked and refuses interactive mode change", async () => {
    const user = userEvent.setup();
    create.mockResolvedValue({ ok: true, data: { session: fixtureSession } });
    get.mockResolvedValue({
      ok: true,
      data: {
        session: fixtureSession,
        turns: [],
        attempts: [],
        presentation: "fixture",
        ...emptyI3,
      },
    });
    render(<Ops1SessionScreen />);
    await waitFor(() =>
      expect(
        screen.getAllByTestId("ops1-create-session").length,
      ).toBeGreaterThan(0),
    );
    await user.click(screen.getAllByTestId("ops1-create-session")[0]);
    expect(screen.getByTestId("ops1-mode-locked").textContent).toMatch(
      /FIXTURE — verrouillé/,
    );
    expect(screen.getByTestId("ops1-mode-fixture")).toBeDisabled();
    expect(screen.getByTestId("ops1-mode-live")).toBeDisabled();
    expect(create.mock.calls[0][0]).toEqual({ mode: "fixture" });
  });

  it("shows test provider badges — never LIVE GPT", async () => {
    liveConfig.mockResolvedValue({
      ok: true,
      data: { available: true, missing: [], testProvider: true },
    });
    get.mockResolvedValue({
      ok: true,
      data: {
        session: liveSession,
        turns: [
          {
            turnId: "t1",
            sessionId: liveSession.sessionId,
            sequence: 1,
            role: "user",
            content: "q",
            fixture: false,
            createdAt: "t",
          },
          {
            turnId: "t2",
            sessionId: liveSession.sessionId,
            sequence: 2,
            role: "assistant_live",
            content: "[TEST/FAKE · NON LIVE] reply",
            fixture: false,
            createdAt: "t",
          },
        ],
        attempts: [],
        presentation: "test_provider",
        ...emptyI3,
      },
    });
    window.sessionStorage.setItem(
      "sfia-ops1-i1-active-session",
      liveSession.sessionId,
    );
    render(<Ops1SessionScreen />);
    await waitFor(() => {
      expect(screen.getByTestId("ops1-badge-test-provider")).toBeInTheDocument();
    });
    expect(screen.queryByTestId("ops1-badge-live")).toBeNull();
    expect(screen.getByText("TEST / FAKE")).toBeInTheDocument();
    expect(screen.getByText("Assistant test")).toBeInTheDocument();
    expect(screen.getByTestId("ops1-mode-locked").textContent).toMatch(
      /verrouillé/,
    );
  });

  it("shows GPT LIVE badges for real live presentation", async () => {
    liveConfig.mockResolvedValue({
      ok: true,
      data: { available: true, missing: [], testProvider: false },
    });
    get.mockResolvedValue({
      ok: true,
      data: {
        session: liveSession,
        turns: [
          {
            turnId: "t2",
            sessionId: liveSession.sessionId,
            sequence: 2,
            role: "assistant_live",
            content: "hello from openai",
            fixture: false,
            createdAt: "t",
          },
        ],
        attempts: [],
        presentation: "openai_live",
        ...emptyI3,
      },
    });
    window.sessionStorage.setItem(
      "sfia-ops1-i1-active-session",
      liveSession.sessionId,
    );
    render(<Ops1SessionScreen />);
    await waitFor(() => {
      expect(screen.getByTestId("ops1-badge-live")).toHaveTextContent("GPT LIVE");
    });
    expect(screen.queryByText("TEST / FAKE")).toBeNull();
    expect(screen.getByText("Assistant live")).toBeInTheDocument();
  });
});
