import { beforeEach, describe, expect, it, vi } from "vitest";
import { createApiRequestsRepository } from "./apiRequestsRepository";
import { RequestsRepositoryError } from "./requestsRepository.types";

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
    requestedDate: "2026-01-12T09:00:00.000Z",
    equipmentLabel: "Ligne d'assemblage démo — poste 3",
    businessImpact: "Interruption d'un flux de production fictif planifié",
    demoCenter: "Centre démo Nord",
    description: "Panne intermittente constatée sur une machine de démonstration.",
    readonlyBlocks: {
      qualification: {
        summary: "Contexte confirmé, intervention nécessaire.",
        checklist: ["Contexte de panne confirmé"],
        notes: "Qualification fictive préparée pour démonstration readonly.",
      },
      planning: {
        slot: "J+1 matin",
        technician: "Technicien Démo 01",
        notes: "Créneau fictif proposé pour démonstration readonly.",
      },
      intervention: {
        location: "Zone Démo Atelier",
        window: "J+1 matin",
        notes: "Intervention fictive préparée pour démonstration readonly.",
        safetyChecklist: ["Accès site fictif confirmé"],
      },
      report: {
        summary: "Contrôle effectué sur scénario de démonstration.",
        result: "Remise en service fictive confirmée.",
        notes: "Compte rendu fictif préparé pour démonstration readonly.",
        checklist: ["Diagnostic démo consulté"],
      },
    },
  },
};

describe("apiRequestsRepository", () => {
  beforeEach(() => {
    vi.stubEnv("VITE_INTERV360_API_BASE_URL", "http://localhost:3001/api/v1");
  });

  it("loads requests from the API", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ items: [apiRequest] }),
    });
    vi.stubGlobal("fetch", fetchMock);

    const repository = createApiRequestsRepository();
    const requests = await repository.listRequests();

    expect(fetchMock).toHaveBeenCalledWith(
      "http://localhost:3001/api/v1/requests",
      expect.objectContaining({ headers: expect.any(Object) }),
    );
    expect(requests).toHaveLength(1);
    expect(requests[0]?.id).toBe("SAV-DEMO-001");
    expect(requests[0]?.customerLabel).toBe("Client Démo Industrie");
  });

  it("loads request detail from the API", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => apiDetailPayload,
      }),
    );

    const repository = createApiRequestsRepository();
    const request = await repository.getRequestById("SAV-DEMO-001");

    expect(request?.categoryLabel).toBe("Panne machine");
    expect(request?.qualificationSummary).toContain("Contexte confirmé");
    expect(request?.requestedDate).toContain("2026");
    expect(request?.equipmentLabel).toBe("Ligne d'assemblage démo — poste 3");
    expect(request?.businessImpact).toBe(
      "Interruption d'un flux de production fictif planifié",
    );
    expect(request?.impactLabel).toBe("Production démo limitée");
    expect(request?.siteLabel).toBe("Lyon Démo");
  });

  it("applies a transition via the API", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({
          request: { ...apiRequest, status: "STAT-02" },
          event: {
            id: "evt-demo-001",
            requestId: "SAV-DEMO-001",
            type: "qualification.confirmed",
            fromStatus: "STAT-01",
            toStatus: "STAT-02",
            label: "Qualification fictive confirmée",
            createdAt: "2026-03-12T08:10:00.000Z",
            source: "demo",
            isDemo: true,
          },
        }),
      }),
    );

    const repository = createApiRequestsRepository();
    const updated = await repository.applyTransition("SAV-DEMO-001", "qualify");

    expect(updated?.status).toBe("STAT-02");
  });

  it("loads workflow events from the API", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({
          items: [
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
            },
          ],
        }),
      }),
    );

    const repository = createApiRequestsRepository();
    const events = await repository.listEventsForRequest("SAV-DEMO-001");

    expect(events).toHaveLength(1);
    expect(events[0]?.message).toBe("Qualification fictive confirmée");
  });

  it("resets demo data via the API", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        status: "reset",
        mode: "demo",
        requestsCount: 3,
      }),
    });
    vi.stubGlobal("fetch", fetchMock);

    const repository = createApiRequestsRepository();
    await repository.resetDemo();

    expect(fetchMock).toHaveBeenCalledWith(
      "http://localhost:3001/api/v1/demo/reset",
      expect.objectContaining({ method: "POST" }),
    );
  });

  it("throws when backend is unavailable", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("network")));

    const repository = createApiRequestsRepository();

    await expect(repository.listRequests()).rejects.toMatchObject({
      code: "BACKEND_UNAVAILABLE",
    } satisfies Partial<RequestsRepositoryError>);
  });

  it("maps transition errors from the API", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
        status: 409,
        json: async () => ({
          error: {
            code: "TRANSITION_NOT_ALLOWED",
            message: "Transition not allowed from current status",
          },
        }),
      }),
    );

    const repository = createApiRequestsRepository();

    await expect(
      repository.applyTransition("SAV-DEMO-003", "close_report"),
    ).rejects.toMatchObject({
      code: "TRANSITION_NOT_ALLOWED",
    } satisfies Partial<RequestsRepositoryError>);
  });
});
