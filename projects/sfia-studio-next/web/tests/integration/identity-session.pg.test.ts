import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import { accounts, pilots, sessions, users } from "@/db/schema";
import { newId } from "@/lib/ids";
import { ensurePilotForAuthUser } from "@/domains/identity/provision-pilot";
import { createDevTestSession, revokeSession } from "@/domains/identity/session";

describe("D1 identity → Pilot provisioning (simulated OAuth association)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    process.env.STUDIO_DEV_TEST_LOGIN = "1";
    process.env.STUDIO_LANE = "DEV";
  });

  it("same GitHub account id maps to the same PilotId on repeat", async () => {
    const githubUserId = `gh-sim-${newId("acct")}`;
    const userId1 = newId("user");
    await db.insert(users).values({
      id: userId1,
      name: "Sim OAuth User",
      email: `${userId1}@sim.local`,
      emailVerified: true,
    });
    await db.insert(accounts).values({
      id: newId("acct"),
      accountId: githubUserId,
      providerId: "github",
      userId: userId1,
    });

    const first = await ensurePilotForAuthUser(userId1);
    const again = await ensurePilotForAuthUser(userId1);
    expect(again.pilotId).toBe(first.pilotId);
    expect(again.githubUserId).toBe(githubUserId);

    // Second auth user with same GitHub account id (re-link / re-login shape) → same Pilot.
    const userId2 = newId("user");
    await db.insert(users).values({
      id: userId2,
      name: "Sim OAuth User Relink",
      email: `${userId2}@sim.local`,
      emailVerified: true,
    });
    await db.insert(accounts).values({
      id: newId("acct"),
      accountId: githubUserId,
      providerId: "github",
      userId: userId2,
    });
    const relinked = await ensurePilotForAuthUser(userId2);
    expect(relinked.pilotId).toBe(first.pilotId);

    const u1 = (await db.select().from(users).where(eq(users.id, userId1)))[0];
    const u2 = (await db.select().from(users).where(eq(users.id, userId2)))[0];
    expect(u1.pilotId).toBe(first.pilotId);
    expect(u2.pilotId).toBe(first.pilotId);
  });

  it("two GitHub accounts yield isolated PilotIds", async () => {
    const mk = async (label: string) => {
      const githubUserId = `gh-iso-${newId("acct")}`;
      const userId = newId("user");
      await db.insert(users).values({
        id: userId,
        name: label,
        email: `${userId}@iso.local`,
        emailVerified: true,
      });
      await db.insert(accounts).values({
        id: newId("acct"),
        accountId: githubUserId,
        providerId: "github",
        userId,
      });
      return ensurePilotForAuthUser(userId);
    };
    const a = await mk("Iso A");
    const b = await mk("Iso B");
    expect(a.pilotId).not.toBe(b.pilotId);
  });

  it("DEV login gate rejects absent/non-DEV lane, non-loopback Host/proxy; allows DEV+loopback", async () => {
    const prevLane = process.env.STUDIO_LANE;
    try {
      delete process.env.STUDIO_LANE;
      await expect(
        createDevTestSession("a", { host: "127.0.0.1:3100" }),
      ).rejects.toThrow(/LANE_FORBIDDEN/);

      process.env.STUDIO_LANE = "RECETTE";
      await expect(
        createDevTestSession("a", { host: "127.0.0.1:3100" }),
      ).rejects.toThrow(/LANE_FORBIDDEN/);

      process.env.STUDIO_LANE = "DEV";
      await expect(
        createDevTestSession("a", {
          host: "127.0.0.1:3100",
          forwardedFor: "1.2.3.4",
        }),
      ).rejects.toThrow(/PROXY_FORBIDDEN/);

      await expect(
        createDevTestSession("a", {
          host: "127.0.0.1:3100",
          forwardedHost: "evil.example.com",
        }),
      ).rejects.toThrow(/PROXY_FORBIDDEN/);

      await expect(
        createDevTestSession("a", { host: "evil.example.com" }),
      ).rejects.toThrow(/HOST_FORBIDDEN/);

      // Next DEV often mirrors loopback into x-forwarded-* — still allowed.
      const created = await createDevTestSession("a", {
        host: "127.0.0.1:3100",
        forwardedHost: "127.0.0.1:3100",
        forwardedFor: "127.0.0.1",
      });
      expect(created.pilotId).toBeTruthy();
      await revokeSession(created.sessionId);
      const row = (await db.select().from(sessions).where(eq(sessions.id, created.sessionId)))[0];
      expect(row.revokedAt).toBeTruthy();
      expect(row.authMode).toBe("dev-test-login");
    } finally {
      if (prevLane === undefined) delete process.env.STUDIO_LANE;
      else process.env.STUDIO_LANE = prevLane;
    }
  });

  it("pilot row exists after provisioning and is stable by github_user_id unique index", async () => {
    const githubUserId = `gh-stable-${newId("acct")}`;
    const userId = newId("user");
    await db.insert(users).values({
      id: userId,
      name: "Stable",
      email: `${userId}@stable.local`,
      emailVerified: true,
    });
    await db.insert(accounts).values({
      id: newId("acct"),
      accountId: githubUserId,
      providerId: "github",
      userId,
    });
    const linked = await ensurePilotForAuthUser(userId);
    const pilotsFound = await db
      .select()
      .from(pilots)
      .where(eq(pilots.githubUserId, githubUserId));
    expect(pilotsFound).toHaveLength(1);
    expect(pilotsFound[0].id).toBe(linked.pilotId);
  });

  it("hook-order: early Pilot without github id is backfilled without changing PilotId", async () => {
    const userId = newId("user");
    await db.insert(users).values({
      id: userId,
      name: "Early Pilot",
      email: `${userId}@early.local`,
      emailVerified: true,
    });
    // Simulate user.create.after before GitHub account row exists.
    const early = await ensurePilotForAuthUser(userId);
    expect(early.githubUserId).toBeNull();
    const pilotBefore = (await db.select().from(pilots).where(eq(pilots.id, early.pilotId)))[0];
    expect(pilotBefore.githubUserId).toBeNull();

    const githubUserId = `gh-late-${newId("acct")}`;
    await db.insert(accounts).values({
      id: newId("acct"),
      accountId: githubUserId,
      providerId: "github",
      userId,
    });

    const after = await ensurePilotForAuthUser(userId);
    expect(after.pilotId).toBe(early.pilotId);
    expect(after.githubUserId).toBe(githubUserId);
    const pilotAfter = (await db.select().from(pilots).where(eq(pilots.id, early.pilotId)))[0];
    expect(pilotAfter.githubUserId).toBe(githubUserId);

    // Repeat is stable.
    const again = await ensurePilotForAuthUser(userId);
    expect(again.pilotId).toBe(early.pilotId);
    expect(again.githubUserId).toBe(githubUserId);
  });
});
