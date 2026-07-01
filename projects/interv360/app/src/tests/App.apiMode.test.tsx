import { render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { App } from "../app/App";

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

function createFetchMock() {
  return vi.fn(async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = String(input);
    const method = init?.method ?? "GET";

    if (url.endsWith("/requests") && method === "GET") {
      return {
        ok: true,
        json: async () => ({ items: [apiRequest] }),
      };
    }

    if (url.includes("/requests/SAV-DEMO-001/events") && method === "GET") {
      return {
        ok: true,
        json: async () => ({ items: [] }),
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
}

describe("App API mode", () => {
  beforeEach(() => {
    vi.stubEnv("VITE_INTERV360_DATA_SOURCE", "api");
    vi.stubEnv(
      "VITE_INTERV360_API_BASE_URL",
      "http://localhost:3001/api/v1",
    );
    vi.stubGlobal("fetch", createFetchMock());
  });

  it("shows API mode and loads requests from backend", async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getByText("Mode API local")).toBeInTheDocument();
    });

    expect(
      screen.getByRole("heading", { name: /Demandes SAV/i }),
    ).toBeInTheDocument();
    expect(screen.getAllByText("SAV-DEMO-001").length).toBeGreaterThan(0);
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
});
