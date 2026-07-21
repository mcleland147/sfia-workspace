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
  ops1AppendUserMessageAction: vi.fn(),
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
