import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { Ops1SessionScreen } from "@/features/ops1/Ops1SessionScreen";

const create = vi.fn();
const get = vi.fn();
const append = vi.fn();

vi.mock("@/lib/ops1/actions", () => ({
  ops1CreateSessionAction: (...args: unknown[]) => create(...args),
  ops1GetSessionAction: (...args: unknown[]) => get(...args),
  ops1AppendUserMessageAction: (...args: unknown[]) => append(...args),
}));

describe("Ops1SessionScreen", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    window.sessionStorage.clear();
  });

  it("shows empty state and fixture badge", async () => {
    render(<Ops1SessionScreen />);
    await waitFor(() => {
      expect(screen.getByTestId("ops1-empty-state")).toBeInTheDocument();
    });
    expect(screen.getByText("MODE FIXTURE / NON LIVE")).toBeInTheDocument();
    expect(screen.getByText("Aucune session active")).toBeInTheDocument();
  });

  it("creates OPEN session and shows sessionId", async () => {
    const user = userEvent.setup();
    create.mockResolvedValue({
      ok: true,
      data: {
        session: {
          sessionId: "ops1-sess-11111111-1111-4111-8111-111111111111",
          projectKey: "sfia-studio-ops1",
          status: "OPEN",
          createdAt: "2026-07-20T21:00:00+02:00",
          updatedAt: "2026-07-20T21:00:00+02:00",
          parentSessionId: null,
          fixtureMode: true,
        },
      },
    });
    get.mockResolvedValue({
      ok: true,
      data: {
        session: {
          sessionId: "ops1-sess-11111111-1111-4111-8111-111111111111",
          projectKey: "sfia-studio-ops1",
          status: "OPEN",
          createdAt: "2026-07-20T21:00:00+02:00",
          updatedAt: "2026-07-20T21:00:00+02:00",
          parentSessionId: null,
          fixtureMode: true,
        },
        turns: [],
      },
    });

    render(<Ops1SessionScreen />);
    await waitFor(() =>
      expect(screen.getAllByTestId("ops1-create-session").length).toBeGreaterThan(
        0,
      ),
    );
    await user.click(screen.getAllByTestId("ops1-create-session")[0]);
    await waitFor(() => {
      expect(screen.getByTestId("ops1-session-id")).toHaveTextContent(
        "ops1-sess-11111111-1111-4111-8111-111111111111",
      );
    });
    expect(screen.getByTestId("ops1-session-status")).toHaveTextContent("OPEN");
  });

  it("shows create error", async () => {
    const user = userEvent.setup();
    create.mockResolvedValue({
      ok: false,
      code: "PERSISTENCE",
      message: "Échec de création de la session.",
    });
    render(<Ops1SessionScreen />);
    await waitFor(() =>
      expect(screen.getAllByTestId("ops1-create-session").length).toBeGreaterThan(
        0,
      ),
    );
    await user.click(screen.getAllByTestId("ops1-create-session")[0]);
    await waitFor(() => {
      expect(screen.getByTestId("ops1-error")).toHaveTextContent(
        "Échec de création de la session.",
      );
    });
  });
});
