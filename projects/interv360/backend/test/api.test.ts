import request from "supertest";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { createApp } from "../src/app.js";
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

  it("GET /api/v1/requests/:id returns request and detail", async () => {
    const response = await request(app).get("/api/v1/requests/SAV-DEMO-001");
    expect(response.status).toBe(200);
    expect(response.body.request.id).toBe("SAV-DEMO-001");
    expect(response.body.detail.requestId).toBe("SAV-DEMO-001");
    expect(response.body.request.isDemo).toBe(true);
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

  it("POST transition from STAT-06 is refused", async () => {
    const response = await request(app)
      .post("/api/v1/requests/SAV-DEMO-003/transitions")
      .send({ action: "close_report" });

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
  });

  it("POST /api/v1/demo/reset returns DEMO_MODE_REQUIRED when disabled", async () => {
    process.env.DEMO_MODE = "false";

    const response = await request(app).post("/api/v1/demo/reset");
    expect(response.status).toBe(403);
    expect(response.body.error.code).toBe("DEMO_MODE_REQUIRED");
  });
});
