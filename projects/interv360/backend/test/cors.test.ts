import request from "supertest";
import { afterEach, describe, expect, it } from "vitest";
import { createApp } from "../src/app.js";
import {
  DEFAULT_LOCAL_CORS_ORIGINS,
  resolveCorsOrigins,
} from "../src/config/cors.js";

describe("local CORS configuration", () => {
  afterEach(() => {
    delete process.env.INTERV360_CORS_ORIGINS;
    delete process.env.CORS_ORIGIN;
  });

  it("defaults to common local Vite origins", () => {
    expect(resolveCorsOrigins()).toEqual([...DEFAULT_LOCAL_CORS_ORIGINS]);
  });

  it("parses INTERV360_CORS_ORIGINS as a comma-separated list", () => {
    process.env.INTERV360_CORS_ORIGINS =
      "http://localhost:5180, http://127.0.0.1:5180";

    expect(resolveCorsOrigins()).toEqual([
      "http://localhost:5180",
      "http://127.0.0.1:5180",
    ]);
  });

  it("falls back to CORS_ORIGIN for a single legacy origin", () => {
    process.env.CORS_ORIGIN = "http://localhost:5199";

    expect(resolveCorsOrigins()).toEqual(["http://localhost:5199"]);
  });

  it("reflects allowed Vite alternate origins on API preflight", async () => {
    const app = createApp();

    for (const origin of [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://127.0.0.1:5175",
    ]) {
      const response = await request(app)
        .options("/api/v1/requests")
        .set("Origin", origin)
        .set("Access-Control-Request-Method", "GET");

      expect(response.status).toBe(204);
      expect(response.headers["access-control-allow-origin"]).toBe(origin);
    }
  });

  it("does not allow unknown browser origins", async () => {
    const app = createApp();

    const response = await request(app)
      .get("/api/v1/requests")
      .set("Origin", "http://localhost:5999");

    expect(response.status).toBe(200);
    expect(response.headers["access-control-allow-origin"]).toBeUndefined();
  });
});
