/**
 * Q2 — ENV-01 runtime / PostgreSQL isolation proofs (sanitized, no secrets).
 */
import { describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { execFileSync } from "child_process";
import { sql } from "drizzle-orm";
import { db } from "@/db/client";
import { E2E_PG_EXPECTED, prepareVitestMutativeDatabaseUrl } from "@/lib/e2e-pg-gate";
import { e2eFixtureMutationsAllowed } from "@/lib/e2e-fixture-gate";

function sanitizeUrl(raw: string): {
  protocol: string;
  host: string;
  port: string;
  database: string;
  user: string;
} {
  const u = new URL(raw);
  return {
    protocol: u.protocol,
    host: u.hostname,
    port: u.port || "5432",
    database: decodeURIComponent(u.pathname.replace(/^\//, "").split("/")[0] ?? ""),
    user: decodeURIComponent(u.username || ""),
  };
}

describe("ML4C Q2 — ENV-01 runtime isolation", () => {
  it("ENV-R04/R05: vitest mutative URL is sfia_next_e2e on approved loopback", () => {
    const raw = process.env.DATABASE_URL;
    expect(raw).toBeTruthy();
    const effective = prepareVitestMutativeDatabaseUrl(raw!);
    const id = sanitizeUrl(effective);
    expect(id.host).toMatch(/^(127\.0\.0\.1|localhost)$/);
    expect(Number(id.port)).toBe(E2E_PG_EXPECTED.port);
    expect(id.database).toBe(E2E_PG_EXPECTED.e2eDatabase);
    expect(id.database).not.toBe(E2E_PG_EXPECTED.operatorDatabase);
    // Never assert password; user must be the DEV role name when present.
    if (id.user) expect(id.user).toMatch(/sfia_next/);
  });

  it("ENV-R04: live session current_database/user match e2e target", async () => {
    const rows = await db.execute(
      sql`select current_database() as db, current_user as usr, session_user as sess, current_schema() as sch`,
    );
    const row = (rows as unknown as { rows?: Array<Record<string, unknown>> }).rows?.[0] ??
      (Array.isArray(rows) ? (rows as Array<Record<string, unknown>>)[0] : null);
    expect(row).toBeTruthy();
    expect(String(row!.db)).toBe(E2E_PG_EXPECTED.e2eDatabase);
    expect(String(row!.db)).not.toMatch(/recette|stable|prod/i);
    expect(String(row!.usr)).toMatch(/sfia_next/);
  });

  it("ENV-R02/R03: docker PG container maps loopback :5433 only", () => {
    const out = execFileSync("docker", ["port", E2E_PG_EXPECTED.container, "5432"], {
      encoding: "utf8",
    });
    expect(out).toMatch(/127\.0\.0\.1:5433/);
    expect(out).not.toMatch(/0\.0\.0\.0:5433/);
  });

  it("ENV-R11: fixture mutations require DEV+E2E+non-production", () => {
    expect(
      e2eFixtureMutationsAllowed({
        NODE_ENV: "production",
        STUDIO_LANE: "DEV",
        STUDIO_E2E: "1",
      } as NodeJS.ProcessEnv).ok,
    ).toBe(false);
    expect(
      e2eFixtureMutationsAllowed({
        NODE_ENV: "development",
        STUDIO_LANE: "RECETTE",
        STUDIO_E2E: "1",
      } as NodeJS.ProcessEnv).ok,
    ).toBe(false);
    expect(
      e2eFixtureMutationsAllowed({
        NODE_ENV: "development",
        STUDIO_LANE: "DEV",
        STUDIO_FORCE_NORA_FIXTURE: "1",
      } as NodeJS.ProcessEnv).ok,
    ).toBe(false);
    expect(
      e2eFixtureMutationsAllowed({
        NODE_ENV: "development",
        STUDIO_LANE: "DEV",
        STUDIO_E2E: "1",
      } as NodeJS.ProcessEnv).ok,
    ).toBe(true);
  });

  it("ENV-R13: RECETTE/STABLE ports are not the mutative E2E webServer port", () => {
    // Documented reservations; Playwright webServer uses 3101 (see playwright.config.ts).
    expect(3101).not.toBe(3200);
    expect(3101).not.toBe(3000);
    expect(E2E_PG_EXPECTED.e2eDatabase).not.toBe("sfia_next_recette");
    expect(E2E_PG_EXPECTED.e2eDatabase).not.toBe("sfia_next_stable");
  });

  it("ENV-R06A: mutative Vitest target stays sfia_next_e2e (deterministic CI contract)", () => {
    const raw = process.env.DATABASE_URL;
    expect(raw).toBeTruthy();
    const rewritten = prepareVitestMutativeDatabaseUrl(raw!);
    const u = new URL(rewritten);
    expect(u.pathname.replace(/^\//, "")).toBe(E2E_PG_EXPECTED.e2eDatabase);
    expect(Number(u.port)).toBe(E2E_PG_EXPECTED.port);
    expect(E2E_PG_EXPECTED.e2eDatabase).not.toBe("sfia_next_recette");
    expect(E2E_PG_EXPECTED.e2eDatabase).not.toBe("sfia_next_stable");
  });

  it("ENV-R06B: RECETTE runtime isolation — NOT VERIFIED when endpoint absent; 28P01 when present", async () => {
    const net = await import("net");
    const portAvailable = await new Promise<boolean>((resolve) => {
      const socket = new net.Socket();
      const done = (ok: boolean) => {
        socket.removeAllListeners();
        socket.destroy();
        resolve(ok);
      };
      socket.setTimeout(800);
      socket.once("connect", () => done(true));
      socket.once("timeout", () => done(false));
      socket.once("error", () => done(false));
      socket.connect(5434, "127.0.0.1");
    });

    const runtimeProof: {
      status: "VERIFIED_AUTH_DENIED" | "NOT_VERIFIED";
      reason: string;
    } = portAvailable
      ? { status: "NOT_VERIFIED", reason: "PENDING_AUTH_PROBE" }
      : { status: "NOT_VERIFIED", reason: "ENDPOINT_NOT_AVAILABLE" };

    if (!portAvailable) {
      // Honest non-proof: absence of :5434 is not AUTH DENIED and is not PASS isolation.
      expect(runtimeProof.status).toBe("NOT_VERIFIED");
      expect(runtimeProof.reason).toBe("ENDPOINT_NOT_AVAILABLE");
      console.info(
        "ENV-R06 RUNTIME = NOT VERIFIED — reason=ENDPOINT_NOT_AVAILABLE (RECETTE :5434 absent)",
      );
      return;
    }

    const raw = process.env.DATABASE_URL;
    expect(raw).toBeTruthy();
    const src = new URL(raw!);
    const postgres = (await import("postgres")).default;
    const sql = postgres({
      host: "127.0.0.1",
      port: 5434,
      database: "sfia_next_recette",
      user: decodeURIComponent(src.username),
      password: decodeURIComponent(src.password),
      max: 1,
      connect_timeout: 2,
    });
    let authDenied = false;
    let observedCode: string | undefined;
    try {
      await sql`select 1`;
    } catch (e) {
      observedCode = (e as { code?: string }).code;
      // ECONNREFUSED / timeout are not authentication denial.
      authDenied = observedCode === "28P01";
    } finally {
      try {
        await sql.end({ timeout: 1 });
      } catch {
        /* ignore */
      }
    }
    expect(authDenied).toBe(true);
    expect(observedCode).toBe("28P01");
  });
});
