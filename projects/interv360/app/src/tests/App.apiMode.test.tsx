import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { App } from "../app/App";
import { CURRENT_USER_STORAGE_KEY } from "../domain/demoUsers";

const apiRequest = {
  id: "SAV-DEMO-001",
  title: "Machine client en panne intermittente",
  status: "STAT-01",
  priority: "high",
  criticality: "urgent",
  customerLabel: "Client Démo Industrie",
  siteLabel: "Lyon Démo",
  assignedTechnicianLabel: "Technicien Démo 01",
  createdAt: "2026-03-12T07:30:00.000Z",
  updatedAt: "2026-03-12T07:30:00.000Z",
  detailId: "SAV-DEMO-001",
  isDemo: true,
};

const apiDetailPayload = {
  request: apiRequest,
  detail: {
    id: "SAV-DEMO-001",
    requestId: "SAV-DEMO-001",
    category: "Panne machine",
    channel: "Portail démo",
    impact: "Production démo limitée",
    demoCenter: "Centre démo Nord",
    description: "Panne intermittente constatée sur une machine de démonstration.",
    readonlyBlocks: {
      qualification: { summary: "Contexte confirmé, intervention nécessaire." },
      planning: { slot: "J+1 matin" },
      intervention: { location: "Zone Démo Atelier" },
      report: { summary: "Contrôle effectué sur scénario de démonstration." },
    },
  },
};

const apiUsersPayload = {
  users: [
    {
      id: "user-requester",
      displayName: "Alice Demandeur",
      email: "alice.demandeur@example.test",
      role: "requester",
      team: "Centre demandeur",
      isActive: true,
    },
    {
      id: "user-technician",
      displayName: "Théo Technicien",
      email: "theo.technicien@example.test",
      role: "technician",
      team: "Support technique",
      isActive: true,
    },
    {
      id: "user-manager",
      displayName: "Maya Responsable",
      email: "maya.responsable@example.test",
      role: "manager",
      team: "Pilotage SAV",
      isActive: true,
    },
  ],
};

function createFetchMock(options?: {
  usersPayload?: typeof apiUsersPayload;
  usersFail?: boolean;
  eventsPayload?: Array<Record<string, unknown>>;
}) {
  const calls: Array<{ url: string; method: string; body?: string }> = [];
  const usersPayload = options?.usersPayload ?? apiUsersPayload;
  const eventsPayload = options?.eventsPayload ?? [];

  const mock = vi.fn(async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = String(input);
    const method = init?.method ?? "GET";
    const body =
      typeof init?.body === "string"
        ? init.body
        : init?.body
          ? JSON.stringify(init.body)
          : undefined;

    calls.push({ url, method, body });

    if (url.endsWith("/users") && method === "GET") {
      if (options?.usersFail) {
        return {
          ok: false,
          status: 503,
        };
      }

      return {
        ok: true,
        json: async () => usersPayload,
      };
    }

    if (url.endsWith("/requests") && method === "GET") {
      return {
        ok: true,
        json: async () => ({ items: [apiRequest] }),
      };
    }

    if (url.includes("/requests/SAV-DEMO-001/events") && method === "GET") {
      return {
        ok: true,
        json: async () => ({ items: eventsPayload }),
      };
    }

    if (url.includes("/transitions") && method === "POST") {
      const payload = JSON.parse(String(init?.body ?? "{}")) as { action?: string };
      const nextStatus = payload.action === "cancel" ? "STAT-07" : "STAT-02";

      return {
        ok: true,
        json: async () => ({
          request: { ...apiRequest, status: nextStatus },
          event: {
            id: "evt-demo-001",
            requestId: "SAV-DEMO-001",
            type:
              payload.action === "cancel"
                ? "request.cancelled"
                : "qualification.confirmed",
            fromStatus: "STAT-01",
            toStatus: nextStatus,
            label: "Qualification fictive confirmée",
            createdAt: "2026-03-12T08:10:00.000Z",
            source: "demo",
            isDemo: true,
            action: payload.action ?? "qualify",
          },
        }),
      };
    }

    if (url.includes("/requests/SAV-DEMO-001") && method === "GET") {
      return {
        ok: true,
        json: async () => apiDetailPayload,
      };
    }

    if (url.includes("/demo/reset") && method === "POST") {
      return {
        ok: true,
        json: async () => ({
          status: "reset",
          mode: "demo",
          requestsCount: 1,
        }),
      };
    }

    return {
      ok: false,
      status: 404,
      json: async () => ({
        error: { code: "REQUEST_NOT_FOUND", message: "Request not found" },
      }),
    };
  });

  return { mock, calls };
}

describe("App API mode", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.stubEnv("VITE_INTERV360_DATA_SOURCE", "api");
    vi.stubEnv(
      "VITE_INTERV360_API_BASE_URL",
      "http://localhost:3001/api/v1",
    );
    const { mock } = createFetchMock();
    vi.stubGlobal("fetch", mock);
  });

  it("shows API mode and loads requests from backend", async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getByText("Mode API local")).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole("button", { name: "Demandes" }));

    await waitFor(() => {
      expect(
        screen.getByRole("heading", { name: /Demandes SAV/i }),
      ).toBeInTheDocument();
    });
    expect(screen.getAllByText("SAV-DEMO-001").length).toBeGreaterThan(0);
  });

  it("loads users from API and keeps technician as default", async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getByText(/Utilisateur démo/i)).toHaveTextContent(
        "Théo Technicien",
      );
    });

    expect(localStorage.getItem(CURRENT_USER_STORAGE_KEY)).toBe("user-technician");
  });

  it("switches to manager and keeps role derived from selected user", async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getByLabelText(/Changer d'utilisateur/i)).toBeInTheDocument();
    });

    fireEvent.change(screen.getByLabelText(/Changer d'utilisateur/i), {
      target: { value: "user-manager" },
    });

    expect(screen.getByText(/Utilisateur démo/i)).toHaveTextContent(
      "Maya Responsable",
    );
    expect(screen.getByText(/Rôle :/i)).toHaveTextContent("Responsable");
    expect(localStorage.getItem(CURRENT_USER_STORAGE_KEY)).toBe("user-manager");
  });

  it("sends actorUserId in API transitions without token or session fields", async () => {
    const { mock, calls } = createFetchMock();
    vi.stubGlobal("fetch", mock);

    render(<App />);

    await waitFor(() => {
      expect(screen.getByRole("button", { name: "Détail" })).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole("button", { name: "Détail" }));

    await waitFor(() => {
      expect(
        screen.getByRole("button", { name: /Qualifier la demande/i }),
      ).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole("button", { name: /Qualifier la demande/i }));

    await waitFor(() => {
      expect(
        calls.some(
          (call) => call.url.endsWith("/transitions") && call.method === "POST",
        ),
      ).toBe(true);
    });

    expect(
      calls.some((call) => /\/(login|logout|session|auth|token)(\/|$)/.test(call.url)),
    ).toBe(false);

    const transitionCall = calls.find(
      (call) => call.url.endsWith("/transitions") && call.method === "POST",
    );
    expect(transitionCall?.body).toBe(
      JSON.stringify({ action: "qualify", actorUserId: "user-technician" }),
    );

    const payload = JSON.parse(transitionCall?.body ?? "{}") as Record<string, unknown>;
    expect(payload.token).toBeUndefined();
    expect(payload.session).toBeUndefined();
    expect(payload.password).toBeUndefined();
    expect(payload.passwordHash).toBeUndefined();
    expect(payload.actorDisplayName).toBeUndefined();
    expect(payload.actorRole).toBeUndefined();
  });

  it("sends selected user as actorUserId in API transitions", async () => {
    const { mock, calls } = createFetchMock();
    vi.stubGlobal("fetch", mock);

    render(<App />);

    await waitFor(() => {
      expect(screen.getByLabelText(/Changer d'utilisateur/i)).toBeInTheDocument();
    });

    fireEvent.change(screen.getByLabelText(/Changer d'utilisateur/i), {
      target: { value: "user-manager" },
    });

    fireEvent.click(screen.getByRole("button", { name: "Détail" }));

    await waitFor(() => {
      expect(
        screen.getByRole("button", { name: /Annuler la demande/i }),
      ).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole("button", { name: /Annuler la demande/i }));

    await waitFor(() => {
      expect(
        calls.some(
          (call) => call.url.endsWith("/transitions") && call.method === "POST",
        ),
      ).toBe(true);
    });

    const transitionCall = calls.find(
      (call) => call.url.endsWith("/transitions") && call.method === "POST",
    );
    expect(JSON.parse(transitionCall?.body ?? "{}")).toMatchObject({
      action: "cancel",
      actorUserId: "user-manager",
    });
  });

  it("displays enriched workflow events in API mode journal", async () => {
    const { mock } = createFetchMock({
      eventsPayload: [
        {
          id: "evt-demo-001",
          requestId: "SAV-DEMO-001",
          type: "qualification.confirmed",
          fromStatus: "STAT-01",
          toStatus: "STAT-02",
          label: "Qualification fictive confirmée",
          createdAt: "2026-03-12T08:10:00.000Z",
          source: "demo",
          isDemo: true,
          action: "qualify",
          actorUserId: "user-technician",
          actorDisplayName: "Théo Technicien",
          actorRole: "technician",
        },
      ],
    });
    vi.stubGlobal("fetch", mock);

    render(<App />);

    await waitFor(() => {
      expect(screen.getByRole("button", { name: "Journal" })).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole("button", { name: "Journal" }));

    await waitFor(() => {
      expect(screen.getByText(/Par Théo Technicien — technician/i)).toBeInTheDocument();
    });
    expect(screen.getByText(/Action : qualify/i)).toBeInTheDocument();
    expect(screen.getByText(/STAT-01 → STAT-02/)).toBeInTheDocument();
  });

  it("keeps legacy API events readable in journal", async () => {
    const { mock } = createFetchMock({
      eventsPayload: [
        {
          id: "evt-legacy-001",
          requestId: "SAV-DEMO-001",
          type: "qualification.confirmed",
          fromStatus: "STAT-01",
          toStatus: "STAT-02",
          label: "Qualification fictive confirmée",
          createdAt: "2026-03-12T08:10:00.000Z",
          source: "demo",
          isDemo: true,
        },
      ],
    });
    vi.stubGlobal("fetch", mock);

    render(<App />);

    await waitFor(() => {
      expect(screen.getByRole("button", { name: "Journal" })).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole("button", { name: "Journal" }));

    await waitFor(() => {
      expect(screen.getByText(/Qualification fictive confirmée/i)).toBeInTheDocument();
    });
    expect(screen.queryByText(/Par /i)).not.toBeInTheDocument();
    expect(screen.queryByText(/undefined/i)).not.toBeInTheDocument();
  });

  it("shows backend unavailable message when API cannot be reached", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("network")));

    render(<App />);

    await waitFor(() => {
      expect(
        screen.getByText(
          /Backend indisponible en mode API local/i,
        ),
      ).toBeInTheDocument();
    });
  });

  it("keeps stored user-manager when API returns manager", async () => {
    localStorage.setItem(CURRENT_USER_STORAGE_KEY, "user-manager");

    render(<App />);

    await waitFor(() => {
      expect(screen.getByText(/Utilisateur démo/i)).toHaveTextContent(
        "Maya Responsable",
      );
    });

    expect(localStorage.getItem(CURRENT_USER_STORAGE_KEY)).toBe("user-manager");
  });

  it("falls back to user-technician when stored user id is unknown", async () => {
    localStorage.setItem(CURRENT_USER_STORAGE_KEY, "unknown-user");

    render(<App />);

    await waitFor(() => {
      expect(screen.getByText(/Utilisateur démo/i)).toHaveTextContent(
        "Théo Technicien",
      );
    });

    expect(localStorage.getItem(CURRENT_USER_STORAGE_KEY)).toBe("user-technician");
  });

  it("falls back to first active user when technician is absent", async () => {
    const usersWithoutTechnician = {
      users: [
        {
          id: "user-manager",
          displayName: "Maya Responsable",
          email: "maya.responsable@example.test",
          role: "manager",
          team: "Pilotage SAV",
          isActive: true,
        },
        {
          id: "user-admin",
          displayName: "Amin Admin",
          email: "amin.admin@example.test",
          role: "admin",
          team: "Administration",
          isActive: true,
        },
      ],
    };

    const { mock } = createFetchMock({ usersPayload: usersWithoutTechnician });
    vi.stubGlobal("fetch", mock);

    render(<App />);

    await waitFor(() => {
      expect(screen.getByText(/Utilisateur démo/i)).toHaveTextContent(
        "Maya Responsable",
      );
    });

    expect(localStorage.getItem(CURRENT_USER_STORAGE_KEY)).toBe("user-manager");
  });

  it("falls back to local users when /users fails", async () => {
    const { mock } = createFetchMock({ usersFail: true });
    vi.stubGlobal("fetch", mock);

    render(<App />);

    await waitFor(() => {
      expect(
        screen.getByText(
          /Impossible de charger les utilisateurs API\. Utilisation des utilisateurs locaux\./i,
        ),
      ).toBeInTheDocument();
    });

    expect(screen.getByText(/Utilisateur démo/i)).toHaveTextContent(
      "Théo Technicien",
    );
  });

  it("does not call login, logout, session, auth or token endpoints", async () => {
    const { mock, calls } = createFetchMock();
    vi.stubGlobal("fetch", mock);

    render(<App />);

    await waitFor(() => {
      expect(screen.getByText("Mode API local")).toBeInTheDocument();
    });

    expect(
      calls.some((call) =>
        /\/(login|logout|session|auth|token)(\/|$)/.test(call.url),
      ),
    ).toBe(false);
  });
});
