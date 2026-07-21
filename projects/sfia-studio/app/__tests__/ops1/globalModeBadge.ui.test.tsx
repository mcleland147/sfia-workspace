import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { NouvelleDemandePageClient } from "@/features/nouvelle-demande/NouvelleDemandePageClient";

const create = vi.fn();
const get = vi.fn();
const send = vi.fn();
const liveConfig = vi.fn();

vi.mock("next/navigation", () => ({
  useSearchParams: () => new URLSearchParams(),
}));

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

describe("global mode badge on nouvelle-demande shell", () => {
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

  it("shows MODE FIXTURE on empty screen", async () => {
    render(<NouvelleDemandePageClient />);
    await waitFor(() => {
      expect(screen.getByTestId("global-mode-badge")).toHaveTextContent(
        "MODE FIXTURE / NON LIVE",
      );
    });
  });

  it("shows OPS1 I6 shell signaling (not obsolete I2/I3/I4)", async () => {
    render(<NouvelleDemandePageClient />);
    await waitFor(() => {
      expect(screen.getByTestId("ops1-increment-badge")).toHaveTextContent(
        "OPS1 I6",
      );
    });
    expect(screen.queryByText("OPS1 I2")).not.toBeInTheDocument();
    expect(screen.getByText("Parcours I6")).toBeInTheDocument();
    expect(
      screen.getByText(
        /OPS1 I6 — rapport post-exécution \/ reprise conversationnelle/,
      ),
    ).toBeInTheDocument();
    expect(screen.queryByText(/Parcours I2/)).not.toBeInTheDocument();
  });

  it("keeps MODE FIXTURE after fixture session create", async () => {
    const user = userEvent.setup();
    create.mockResolvedValue({ ok: true, data: { session: fixtureSession } });
    get.mockResolvedValue({
      ok: true,
      data: {
        session: fixtureSession,
        turns: [],
        attempts: [],
        presentation: "fixture",
        qualification: null,
        candidates: [],
        latestDecisionsByAction: {},
        latestAllowlistByAction: {},
      },
    });
    render(<NouvelleDemandePageClient />);
    await waitFor(() =>
      expect(screen.getByTestId("ops1-create-session")).toBeInTheDocument(),
    );
    await user.click(screen.getByTestId("ops1-create-session"));
    await waitFor(() => {
      expect(screen.getByTestId("ops1-mode-locked").textContent).toMatch(
        /FIXTURE — verrouillé/,
      );
    });
    expect(screen.getByTestId("global-mode-badge")).toHaveTextContent(
      "MODE FIXTURE / NON LIVE",
    );
    expect(screen.getByTestId("ops1-mode-fixture")).toBeDisabled();
  });

  it("shows TEST PROVIDER global badge for fake live session", async () => {
    liveConfig.mockResolvedValue({
      ok: true,
      data: { available: true, missing: [], testProvider: true },
    });
    get.mockResolvedValue({
      ok: true,
      data: {
        session: {
          ...fixtureSession,
          fixtureMode: false,
          conversationMode: "live",
        },
        turns: [],
        attempts: [],
        presentation: "test_provider",
        qualification: null,
        candidates: [],
        latestDecisionsByAction: {},
        latestAllowlistByAction: {},
      },
    });
    window.sessionStorage.setItem(
      "sfia-ops1-i1-active-session",
      fixtureSession.sessionId,
    );
    render(<NouvelleDemandePageClient />);
    await waitFor(() => {
      expect(screen.getByTestId("global-mode-badge")).toHaveTextContent(
        "TEST PROVIDER / NON LIVE",
      );
    });
    expect(screen.getByTestId("ops1-badge-test-provider")).toBeInTheDocument();
  });

  it("shows MODE GPT LIVE for openai presentation", async () => {
    liveConfig.mockResolvedValue({
      ok: true,
      data: { available: true, missing: [], testProvider: false },
    });
    get.mockResolvedValue({
      ok: true,
      data: {
        session: {
          ...fixtureSession,
          fixtureMode: false,
          conversationMode: "live",
        },
        turns: [],
        attempts: [],
        presentation: "openai_live",
        qualification: null,
        candidates: [],
        latestDecisionsByAction: {},
        latestAllowlistByAction: {},
      },
    });
    window.sessionStorage.setItem(
      "sfia-ops1-i1-active-session",
      fixtureSession.sessionId,
    );
    render(<NouvelleDemandePageClient />);
    await waitFor(() => {
      expect(screen.getByTestId("global-mode-badge")).toHaveTextContent(
        "MODE GPT LIVE",
      );
    });
  });
});
