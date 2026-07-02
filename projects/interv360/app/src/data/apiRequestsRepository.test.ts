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
  requesterName: "Alice Demandeur",
  requesterTeam: "Centre demandeur",
  assignedToUserId: "user-technician",
  assignedToDisplayName: "Théo Technicien",
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
    expect(requests[0]?.requesterName).toBe("Alice Demandeur");
    expect(requests[0]?.assignedToDisplayName).toBe("Théo Technicien");
  });

  it("maps enriched request model fields from API detail", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => apiDetailPayload,
      }),
    );

    const repository = createApiRequestsRepository();
    const request = await repository.getRequestById("SAV-DEMO-001");

    expect(request).toMatchObject({
      requesterName: "Alice Demandeur",
      requesterTeam: "Centre demandeur",
      assignedToUserId: "user-technician",
      assignedToDisplayName: "Théo Technicien",
      customerLabel: "Client Démo Industrie",
      assignedTechnicianLabel: "Technicien Démo 01",
    });
    expect(request).not.toHaveProperty("token");
    expect(request).not.toHaveProperty("session");
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

  it("omits enriched request model fields when absent from API", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({
          items: [
            {
              ...apiRequest,
              requesterName: undefined,
              requesterTeam: undefined,
              assignedToUserId: undefined,
              assignedToDisplayName: undefined,
            },
          ],
        }),
      }),
    );

    const repository = createApiRequestsRepository();
    const requests = await repository.listRequests();

    expect(requests[0]?.requesterName).toBeUndefined();
    expect(requests[0]?.assignedToDisplayName).toBeUndefined();
    expect(requests[0]?.customerLabel).toBe("Client Démo Industrie");
    expect(requests[0]?.assignedTechnicianLabel).toBe("Technicien Démo 01");
  });

  it("applies a transition via the API", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
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
    });
    vi.stubGlobal("fetch", fetchMock);

    const repository = createApiRequestsRepository();
    const updated = await repository.applyTransition("SAV-DEMO-001", "qualify");

    expect(updated?.status).toBe("STAT-02");
    expect(fetchMock).toHaveBeenCalledWith(
      "http://localhost:3001/api/v1/requests/SAV-DEMO-001/transitions",
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify({ action: "qualify" }),
      }),
    );
  });

  it("sends actorUserId when applying a transition with actor options", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        request: { ...apiRequest, status: "STAT-02" },
      }),
    });
    vi.stubGlobal("fetch", fetchMock);

    const repository = createApiRequestsRepository();
    await repository.applyTransition("SAV-DEMO-001", "qualify", {
      actorUserId: "user-technician",
      actorDisplayName: "Théo Technicien",
      actorRole: "technician",
    });

    expect(fetchMock).toHaveBeenCalledWith(
      "http://localhost:3001/api/v1/requests/SAV-DEMO-001/transitions",
      expect.objectContaining({
        body: JSON.stringify({
          action: "qualify",
          actorUserId: "user-technician",
        }),
      }),
    );
  });

  it("does not add Authorization header to transition requests", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        request: { ...apiRequest, status: "STAT-02" },
      }),
    });
    vi.stubGlobal("fetch", fetchMock);

    const repository = createApiRequestsRepository();
    await repository.applyTransition("SAV-DEMO-001", "qualify", {
      actorUserId: "user-technician",
    });

    const [, init] = fetchMock.mock.calls[0] ?? [];
    const headers = init?.headers as Record<string, string> | undefined;
    expect(headers?.Authorization).toBeUndefined();
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

  it("maps enriched workflow events from the API", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({
          items: [
            {
              id: "evt-demo-002",
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
        }),
      }),
    );

    const repository = createApiRequestsRepository();
    const events = await repository.listEventsForRequest("SAV-DEMO-001");

    expect(events[0]).toMatchObject({
      action: "qualify",
      actorUserId: "user-technician",
      actorDisplayName: "Théo Technicien",
      actorRole: "technician",
      fromStatus: "STAT-01",
      toStatus: "STAT-02",
    });
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
      message: "Transition not allowed from current status",
    } satisfies Partial<RequestsRepositoryError>);
  });

  it("maps ROUTE_NOT_FOUND from list requests API errors", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
        status: 404,
        json: async () => ({
          error: {
            code: "ROUTE_NOT_FOUND",
            message: "API route not found.",
          },
        }),
      }),
    );

    const repository = createApiRequestsRepository();

    await expect(repository.listRequests()).rejects.toMatchObject({
      code: "ROUTE_NOT_FOUND",
      message: "API route not found.",
    } satisfies Partial<RequestsRepositoryError>);
  });

  it("falls back to API error code when message is absent", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
        status: 400,
        json: async () => ({
          error: {
            code: "INVALID_TRANSITION_ACTION",
          },
        }),
      }),
    );

    const repository = createApiRequestsRepository();

    await expect(
      repository.applyTransition("SAV-DEMO-001", "qualify"),
    ).rejects.toMatchObject({
      code: "INVALID_TRANSITION_ACTION",
      message: "INVALID_TRANSITION_ACTION",
    } satisfies Partial<RequestsRepositoryError>);
  });

  it("maps INVALID_TRANSITION_ACTION message from structured API errors", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
        status: 400,
        json: async () => ({
          error: {
            code: "INVALID_TRANSITION_ACTION",
            message: "Transition action is required.",
          },
        }),
      }),
    );

    const repository = createApiRequestsRepository();

    await expect(
      repository.applyTransition("SAV-DEMO-001", "qualify"),
    ).rejects.toMatchObject({
      code: "INVALID_TRANSITION_ACTION",
      message: "Transition action is required.",
    } satisfies Partial<RequestsRepositoryError>);
  });
});
