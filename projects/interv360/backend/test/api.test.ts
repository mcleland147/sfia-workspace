import request from "supertest";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { createApp } from "../src/app.js";
import { getDatabase } from "../src/persistence/sqliteDatabase.js";
import {
  applyTransition,
  closeDemoStoreForTests,
  resetDemoStoreForTests,
} from "../src/store/demoStore.js";

const app = createApp();

describe("Interv360 API", () => {
  beforeEach(() => {
    process.env.SQLITE_PATH = ":memory:";
    closeDemoStoreForTests();
    resetDemoStoreForTests();
  });

  afterEach(() => {
    resetDemoStoreForTests();
    closeDemoStoreForTests();
    delete process.env.DEMO_MODE;
    delete process.env.SQLITE_PATH;
  });

  it("GET /health returns ok", async () => {
    const response = await request(app).get("/health");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: "ok", mode: "demo" });
  });

  it("GET /api/v1/requests returns 3 fictitious requests", async () => {
    const response = await request(app).get("/api/v1/requests");
    expect(response.status).toBe(200);
    expect(response.body.items).toHaveLength(3);
    expect(
      response.body.items.every(
        (item: { isDemo: boolean }) => item.isDemo === true,
      ),
    ).toBe(true);
  });

  it("GET /api/v1/users returns seeded users", async () => {
    const response = await request(app).get("/api/v1/users");

    expect(response.status).toBe(200);
    expect(response.body.users).toHaveLength(5);

    const technician = response.body.users.find(
      (user: { id: string }) => user.id === "user-technician",
    );

    expect(technician).toMatchObject({
      id: "user-technician",
      displayName: "Théo Technicien",
      email: "theo.technicien@example.test",
      role: "technician",
      team: "Support technique",
      isActive: true,
    });
    expect(technician.password).toBeUndefined();
    expect(technician.passwordHash).toBeUndefined();
    expect(technician.token).toBeUndefined();

    expect(
      response.body.users.every(
        (user: { isActive: boolean }) => typeof user.isActive === "boolean",
      ),
    ).toBe(true);
  });

  it("GET /api/v1/users returns expected role mapping", async () => {
    const response = await request(app).get("/api/v1/users");
    expect(response.status).toBe(200);

    const byId = new Map(
      response.body.users.map((user: { id: string; role: string }) => [
        user.id,
        user.role,
      ]),
    );

    expect(byId.get("user-requester")).toBe("requester");
    expect(byId.get("user-technician")).toBe("technician");
    expect(byId.get("user-manager")).toBe("manager");
    expect(byId.get("user-admin")).toBe("admin");
    expect(byId.get("user-viewer")).toBe("viewer");
  });

  it("GET /api/v1/users/:id returns one user", async () => {
    const response = await request(app).get("/api/v1/users/user-technician");
    expect(response.status).toBe(200);
    expect(response.body.user).toMatchObject({
      id: "user-technician",
      displayName: "Théo Technicien",
      role: "technician",
      isActive: true,
    });
  });

  it("GET /api/v1/users/:id unknown returns USER_NOT_FOUND", async () => {
    const response = await request(app).get("/api/v1/users/unknown");
    expect(response.status).toBe(404);
    expect(response.body.error.code).toBe("USER_NOT_FOUND");
    expect(response.body.error.message).toBe("User not found.");
  });

  it("GET /api/v1/users returns only active users", async () => {
    const database = getDatabase();
    database
      .prepare("UPDATE users SET is_active = 0 WHERE id = ?")
      .run("user-viewer");

    const response = await request(app).get("/api/v1/users");
    expect(response.status).toBe(200);
    expect(response.body.users).toHaveLength(4);
    expect(
      response.body.users.every((user: { isActive: boolean }) => user.isActive),
    ).toBe(true);
    expect(
      response.body.users.some((user: { id: string }) => user.id === "user-viewer"),
    ).toBe(false);
  });

  it("GET /api/v1/users never returns sensitive fields", async () => {
    const response = await request(app).get("/api/v1/users");
    expect(response.status).toBe(200);

    for (const user of response.body.users) {
      expect(user.password).toBeUndefined();
      expect(user.passwordHash).toBeUndefined();
      expect(user.token).toBeUndefined();
      expect(user.provider).toBeUndefined();
      expect(user.externalId).toBeUndefined();
    }
  });

  it("GET /api/v1/users/:id never returns sensitive fields", async () => {
    const response = await request(app).get("/api/v1/users/user-admin");
    expect(response.status).toBe(200);
    expect(response.body.user.password).toBeUndefined();
    expect(response.body.user.passwordHash).toBeUndefined();
    expect(response.body.user.token).toBeUndefined();
    expect(response.body.user.provider).toBeUndefined();
    expect(response.body.user.externalId).toBeUndefined();
  });

  it("GET /api/v1/users does not modify existing requests data", async () => {
    const before = await request(app).get("/api/v1/requests");
    expect(before.status).toBe(200);
    expect(before.body.items).toHaveLength(3);
    const beforeIds = before.body.items.map((item: { id: string }) => item.id);

    const usersResponse = await request(app).get("/api/v1/users");
    expect(usersResponse.status).toBe(200);

    const after = await request(app).get("/api/v1/requests");
    expect(after.status).toBe(200);
    expect(after.body.items).toHaveLength(3);
    const afterIds = after.body.items.map((item: { id: string }) => item.id);
    expect(afterIds.sort()).toEqual(beforeIds.sort());
  });

  it("GET /api/v1/requests/:id returns request and detail", async () => {
    const response = await request(app).get("/api/v1/requests/SAV-DEMO-001");
    expect(response.status).toBe(200);
    expect(response.body.request.id).toBe("SAV-DEMO-001");
    expect(response.body.detail.requestId).toBe("SAV-DEMO-001");
    expect(response.body.request.isDemo).toBe(true);
  });

  it("GET /api/v1/requests/:id exposes productized detail fields", async () => {
    const response = await request(app).get("/api/v1/requests/SAV-DEMO-001");
    expect(response.status).toBe(200);
    expect(response.body.request.siteLabel).toBe("Lyon Démo");
    expect(response.body.detail.category).toBe("Panne machine");
    expect(response.body.detail.requestedDate).toBe("2026-01-12T09:00:00.000Z");
    expect(response.body.detail.equipmentLabel).toBe(
      "Ligne d'assemblage démo — poste 3",
    );
    expect(response.body.detail.businessImpact).toBe(
      "Interruption d'un flux de production fictif planifié",
    );
    expect(response.body.detail.impact).toBe("Production démo limitée");
  });

  it("GET /api/v1/requests/:id unknown returns REQUEST_NOT_FOUND", async () => {
    const response = await request(app).get("/api/v1/requests/UNKNOWN");
    expect(response.status).toBe(404);
    expect(response.body.error.code).toBe("REQUEST_NOT_FOUND");
  });

  it("GET /api/v1/requests/:id/events returns a list", async () => {
    const response = await request(app).get(
      "/api/v1/requests/SAV-DEMO-001/events",
    );
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body.items)).toBe(true);
  });

  it("POST transition valid returns request and event", async () => {
    const response = await request(app)
      .post("/api/v1/requests/SAV-DEMO-001/transitions")
      .send({ action: "qualify" });

    expect(response.status).toBe(200);
    expect(response.body.request.status).toBe("STAT-02");
    expect(response.body.event.type).toBe("qualification.confirmed");
    expect(response.body.event.isDemo).toBe(true);
    expect(response.body.event.action).toBe("qualify");
    expect(response.body.event.actorUserId).toBeUndefined();
  });

  it("POST transition without actor keeps legacy behavior", async () => {
    const response = await request(app)
      .post("/api/v1/requests/SAV-DEMO-001/transitions")
      .send({ action: "qualify" });

    expect(response.status).toBe(200);

    const eventsResponse = await request(app).get(
      "/api/v1/requests/SAV-DEMO-001/events",
    );
    expect(eventsResponse.status).toBe(200);
    expect(eventsResponse.body.items).toHaveLength(1);
    expect(eventsResponse.body.items[0]?.action).toBe("qualify");
    expect(eventsResponse.body.items[0]?.actorUserId).toBeUndefined();
  });

  it("POST transition with valid actor stores action and actor snapshot", async () => {
    const response = await request(app)
      .post("/api/v1/requests/SAV-DEMO-001/transitions")
      .send({ action: "qualify", actorUserId: "user-technician" });

    expect(response.status).toBe(200);
    expect(response.body.event).toMatchObject({
      action: "qualify",
      actorUserId: "user-technician",
      actorDisplayName: "Théo Technicien",
      actorRole: "technician",
      fromStatus: "STAT-01",
      toStatus: "STAT-02",
    });

    const eventsResponse = await request(app).get(
      "/api/v1/requests/SAV-DEMO-001/events",
    );
    expect(eventsResponse.body.items[0]).toMatchObject({
      action: "qualify",
      actorUserId: "user-technician",
      actorDisplayName: "Théo Technicien",
      actorRole: "technician",
    });
  });

  it("POST transition with unknown actor returns INVALID_ACTOR_USER", async () => {
    const before = await request(app).get("/api/v1/requests/SAV-DEMO-001");
    expect(before.status).toBe(200);

    const response = await request(app)
      .post("/api/v1/requests/SAV-DEMO-001/transitions")
      .send({ action: "qualify", actorUserId: "unknown" });

    expect(response.status).toBe(400);
    expect(response.body.error.code).toBe("INVALID_ACTOR_USER");
    expect(response.body.error.message).toBe(
      "Actor user is invalid or inactive.",
    );

    const after = await request(app).get("/api/v1/requests/SAV-DEMO-001");
    expect(after.body.request.status).toBe(before.body.request.status);

    const eventsResponse = await request(app).get(
      "/api/v1/requests/SAV-DEMO-001/events",
    );
    expect(eventsResponse.body.items).toHaveLength(0);
  });

  it("POST transition with inactive actor returns INVALID_ACTOR_USER", async () => {
    getDatabase()
      .prepare("UPDATE users SET is_active = 0 WHERE id = ?")
      .run("user-viewer");

    const before = await request(app).get("/api/v1/requests/SAV-DEMO-001");

    const response = await request(app)
      .post("/api/v1/requests/SAV-DEMO-001/transitions")
      .send({ action: "qualify", actorUserId: "user-viewer" });

    expect(response.status).toBe(400);
    expect(response.body.error.code).toBe("INVALID_ACTOR_USER");

    const after = await request(app).get("/api/v1/requests/SAV-DEMO-001");
    expect(after.body.request.status).toBe(before.body.request.status);

    const eventsResponse = await request(app).get(
      "/api/v1/requests/SAV-DEMO-001/events",
    );
    expect(eventsResponse.body.items).toHaveLength(0);
  });

  it("POST transition rejects non-string actorUserId", async () => {
    const response = await request(app)
      .post("/api/v1/requests/SAV-DEMO-001/transitions")
      .send({ action: "qualify", actorUserId: 42 });

    expect(response.status).toBe(400);
    expect(response.body.error.code).toBe("INVALID_ACTOR_USER");
  });

  it("POST transition rejects empty actorUserId", async () => {
    const response = await request(app)
      .post("/api/v1/requests/SAV-DEMO-001/transitions")
      .send({ action: "qualify", actorUserId: "   " });

    expect(response.status).toBe(400);
    expect(response.body.error.code).toBe("INVALID_ACTOR_USER");
  });

  it("POST transition invalid returns TRANSITION_NOT_ALLOWED", async () => {
    const response = await request(app)
      .post("/api/v1/requests/SAV-DEMO-002/transitions")
      .send({ action: "qualify" });

    expect(response.status).toBe(409);
    expect(response.body.error.code).toBe("TRANSITION_NOT_ALLOWED");
  });

  it("POST unknown action returns INVALID_TRANSITION_ACTION", async () => {
    const response = await request(app)
      .post("/api/v1/requests/SAV-DEMO-001/transitions")
      .send({ action: "not_a_real_action" });

    expect(response.status).toBe(400);
    expect(response.body.error.code).toBe("INVALID_TRANSITION_ACTION");
  });

  it("POST transition on unknown request returns REQUEST_NOT_FOUND", async () => {
    const response = await request(app)
      .post("/api/v1/requests/UNKNOWN/transitions")
      .send({ action: "qualify" });

    expect(response.status).toBe(404);
    expect(response.body.error.code).toBe("REQUEST_NOT_FOUND");
  });

  it("POST transition without action returns INVALID_TRANSITION_ACTION", async () => {
    const response = await request(app)
      .post("/api/v1/requests/SAV-DEMO-001/transitions")
      .send({});

    expect(response.status).toBe(400);
    expect(response.body.error.code).toBe("INVALID_TRANSITION_ACTION");
    expect(response.body.error.message).toBe("Transition action is required.");
  });

  it("POST transition with non-string action returns INVALID_TRANSITION_ACTION", async () => {
    const response = await request(app)
      .post("/api/v1/requests/SAV-DEMO-001/transitions")
      .send({ action: 42 });

    expect(response.status).toBe(400);
    expect(response.body.error.code).toBe("INVALID_TRANSITION_ACTION");
    expect(response.body.error.message).toBe("Transition action is required.");
  });

  it("POST transition with invalid JSON body returns INVALID_JSON_BODY", async () => {
    const response = await request(app)
      .post("/api/v1/requests/SAV-DEMO-001/transitions")
      .set("Content-Type", "application/json")
      .send("{invalid");

    expect(response.status).toBe(400);
    expect(response.body.error.code).toBe("INVALID_JSON_BODY");
    expect(response.body.error.message).toBe(
      "Request body must be valid JSON.",
    );
  });

  it("POST transition with disallowed action from current status returns TRANSITION_NOT_ALLOWED", async () => {
    const response = await request(app)
      .post("/api/v1/requests/SAV-DEMO-001/transitions")
      .send({ action: "close_report" });

    expect(response.status).toBe(409);
    expect(response.body.error.code).toBe("TRANSITION_NOT_ALLOWED");
  });

  it("POST transition from STAT-06 is refused", async () => {
    const response = await request(app)
      .post("/api/v1/requests/SAV-DEMO-003/transitions")
      .send({ action: "close_report" });

    expect(response.status).toBe(409);
    expect(response.body.error.code).toBe("TRANSITION_NOT_ALLOWED");
  });

  it("POST put_on_hold from STAT-03 returns STAT-05", async () => {
    const response = await request(app)
      .post("/api/v1/requests/SAV-DEMO-002/transitions")
      .send({ action: "put_on_hold" });

    expect(response.status).toBe(200);
    expect(response.body.request.status).toBe("STAT-05");
    expect(response.body.event.type).toBe("hold.placed");
  });

  it("POST resume from STAT-05 returns STAT-03", async () => {
    applyTransition("SAV-DEMO-002", "put_on_hold");

    const response = await request(app)
      .post("/api/v1/requests/SAV-DEMO-002/transitions")
      .send({ action: "resume" });

    expect(response.status).toBe(200);
    expect(response.body.request.status).toBe("STAT-03");
    expect(response.body.event.type).toBe("hold.resumed");
  });

  it("POST cancel from STAT-01 returns STAT-07", async () => {
    const response = await request(app)
      .post("/api/v1/requests/SAV-DEMO-001/transitions")
      .send({ action: "cancel" });

    expect(response.status).toBe(200);
    expect(response.body.request.status).toBe("STAT-07");
    expect(response.body.event.type).toBe("request.cancelled");
  });

  it("POST cancel from STAT-02 returns STAT-07", async () => {
    applyTransition("SAV-DEMO-001", "qualify");

    const response = await request(app)
      .post("/api/v1/requests/SAV-DEMO-001/transitions")
      .send({ action: "cancel" });

    expect(response.status).toBe(200);
    expect(response.body.request.status).toBe("STAT-07");
  });

  it("POST cancel from STAT-03 returns STAT-07", async () => {
    const response = await request(app)
      .post("/api/v1/requests/SAV-DEMO-002/transitions")
      .send({ action: "cancel" });

    expect(response.status).toBe(200);
    expect(response.body.request.status).toBe("STAT-07");
  });

  it("POST cancel from STAT-05 returns STAT-07", async () => {
    applyTransition("SAV-DEMO-002", "put_on_hold");

    const response = await request(app)
      .post("/api/v1/requests/SAV-DEMO-002/transitions")
      .send({ action: "cancel" });

    expect(response.status).toBe(200);
    expect(response.body.request.status).toBe("STAT-07");
  });

  it("POST put_on_hold from STAT-04 returns TRANSITION_NOT_ALLOWED", async () => {
    applyTransition("SAV-DEMO-002", "complete_intervention");

    const response = await request(app)
      .post("/api/v1/requests/SAV-DEMO-002/transitions")
      .send({ action: "put_on_hold" });

    expect(response.status).toBe(409);
    expect(response.body.error.code).toBe("TRANSITION_NOT_ALLOWED");
  });

  it("POST cancel from STAT-04 returns TRANSITION_NOT_ALLOWED", async () => {
    applyTransition("SAV-DEMO-002", "complete_intervention");

    const response = await request(app)
      .post("/api/v1/requests/SAV-DEMO-002/transitions")
      .send({ action: "cancel" });

    expect(response.status).toBe(409);
    expect(response.body.error.code).toBe("TRANSITION_NOT_ALLOWED");
  });

  it("POST resume from STAT-03 returns TRANSITION_NOT_ALLOWED", async () => {
    const response = await request(app)
      .post("/api/v1/requests/SAV-DEMO-002/transitions")
      .send({ action: "resume" });

    expect(response.status).toBe(409);
    expect(response.body.error.code).toBe("TRANSITION_NOT_ALLOWED");
  });

  it("POST transition from STAT-07 is refused", async () => {
    applyTransition("SAV-DEMO-001", "cancel");

    const response = await request(app)
      .post("/api/v1/requests/SAV-DEMO-001/transitions")
      .send({ action: "qualify" });

    expect(response.status).toBe(409);
    expect(response.body.error.code).toBe("TRANSITION_NOT_ALLOWED");
  });

  it("POST requalify from STAT-03 returns STAT-02 and request.requalified event", async () => {
    const response = await request(app)
      .post("/api/v1/requests/SAV-DEMO-002/transitions")
      .send({ action: "requalify" });

    expect(response.status).toBe(200);
    expect(response.body.request.status).toBe("STAT-02");
    expect(response.body.event.type).toBe("request.requalified");
    expect(response.body.event.fromStatus).toBe("STAT-03");
    expect(response.body.event.toStatus).toBe("STAT-02");
  });

  it("POST requalify from STAT-02 returns STAT-02", async () => {
    applyTransition("SAV-DEMO-001", "qualify");

    const response = await request(app)
      .post("/api/v1/requests/SAV-DEMO-001/transitions")
      .send({ action: "requalify" });

    expect(response.status).toBe(200);
    expect(response.body.request.status).toBe("STAT-02");
    expect(response.body.event.type).toBe("request.requalified");
  });

  it("POST requalify from STAT-05 returns STAT-02", async () => {
    applyTransition("SAV-DEMO-002", "put_on_hold");

    const response = await request(app)
      .post("/api/v1/requests/SAV-DEMO-002/transitions")
      .send({ action: "requalify" });

    expect(response.status).toBe(200);
    expect(response.body.request.status).toBe("STAT-02");
    expect(response.body.event.type).toBe("request.requalified");
    expect(response.body.event.fromStatus).toBe("STAT-05");
  });

  it("POST requalify from STAT-01 returns TRANSITION_NOT_ALLOWED", async () => {
    const response = await request(app)
      .post("/api/v1/requests/SAV-DEMO-001/transitions")
      .send({ action: "requalify" });

    expect(response.status).toBe(409);
    expect(response.body.error.code).toBe("TRANSITION_NOT_ALLOWED");
  });

  it("POST requalify from STAT-04 returns TRANSITION_NOT_ALLOWED", async () => {
    applyTransition("SAV-DEMO-002", "complete_intervention");

    const response = await request(app)
      .post("/api/v1/requests/SAV-DEMO-002/transitions")
      .send({ action: "requalify" });

    expect(response.status).toBe(409);
    expect(response.body.error.code).toBe("TRANSITION_NOT_ALLOWED");
  });

  it("POST /api/v1/demo/reset restores seed and clears journal", async () => {
    applyTransition("SAV-DEMO-001", "qualify");

    const eventsBefore = await request(app).get(
      "/api/v1/requests/SAV-DEMO-001/events",
    );
    expect(eventsBefore.body.items.length).toBeGreaterThan(0);

    const resetResponse = await request(app).post("/api/v1/demo/reset");
    expect(resetResponse.status).toBe(200);
    expect(resetResponse.body).toEqual({
      status: "reset",
      mode: "demo",
      requestsCount: 3,
    });

    const listResponse = await request(app).get("/api/v1/requests");
    const sav001 = listResponse.body.items.find(
      (item: { id: string }) => item.id === "SAV-DEMO-001",
    );
    expect(sav001?.status).toBe("STAT-01");

    const eventsAfter = await request(app).get(
      "/api/v1/requests/SAV-DEMO-001/events",
    );
    expect(eventsAfter.body.items).toHaveLength(0);

    const detailAfterReset = await request(app).get(
      "/api/v1/requests/SAV-DEMO-001",
    );
    expect(detailAfterReset.body.detail.requestedDate).toBe(
      "2026-01-12T09:00:00.000Z",
    );
    expect(detailAfterReset.body.detail.equipmentLabel).toBe(
      "Ligne d'assemblage démo — poste 3",
    );
    expect(detailAfterReset.body.detail.businessImpact).toBe(
      "Interruption d'un flux de production fictif planifié",
    );
  });

  it("POST /api/v1/demo/reset returns DEMO_MODE_REQUIRED when disabled", async () => {
    process.env.DEMO_MODE = "false";

    const response = await request(app).post("/api/v1/demo/reset");
    expect(response.status).toBe(403);
    expect(response.body.error.code).toBe("DEMO_MODE_REQUIRED");
  });
});
