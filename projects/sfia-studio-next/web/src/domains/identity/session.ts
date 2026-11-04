import { and, eq, isNull, gt } from "drizzle-orm";
import { headers } from "next/headers";
import { db } from "@/db/client";
import { pilots, sessions, users } from "@/db/schema";
import { auth } from "@/lib/auth";
import { newId } from "@/lib/ids";
import { cookies } from "next/headers";
import { ensurePilotForAuthUser } from "@/domains/identity/provision-pilot";

export type AuthMode = "github-oauth" | "dev-test-login" | "unknown";

export type StudioSession = {
  pilotId: string;
  displayName: string;
  sessionId: string;
  authMode: AuthMode;
};

const COOKIE = "sfia_studio_session";

/**
 * Single Studio session resolver.
 * Authority order:
 * 1. Better Auth session cookie (GitHub OAuth) → Pilot via users.pilotId / provision
 * 2. DEV-only `sfia_studio_session` cookie (explicit test adapter, not OAuth proof)
 */
export async function resolveStudioSession(): Promise<StudioSession | null> {
  const fromBetterAuth = await resolveBetterAuthStudioSession();
  if (fromBetterAuth) return fromBetterAuth;
  return resolveDevAdapterSession();
}

async function resolveBetterAuthStudioSession(): Promise<StudioSession | null> {
  try {
    const h = await headers();
    const result = await auth.api.getSession({ headers: h });
    if (!result?.session?.id || !result.user?.id) return null;

    const sessionRow = (
      await db
        .select({
          id: sessions.id,
          revokedAt: sessions.revokedAt,
          expiresAt: sessions.expiresAt,
          authMode: sessions.authMode,
        })
        .from(sessions)
        .where(eq(sessions.id, result.session.id))
        .limit(1)
    )[0];

    if (!sessionRow) return null;
    if (sessionRow.revokedAt) return null;
    if (sessionRow.expiresAt <= new Date()) return null;

    const linked = await ensurePilotForAuthUser(result.user.id);
    const authMode = (sessionRow.authMode as AuthMode) || "github-oauth";
    return {
      pilotId: linked.pilotId,
      displayName: linked.displayName,
      sessionId: sessionRow.id,
      authMode: authMode === "dev-test-login" ? "dev-test-login" : "github-oauth",
    };
  } catch {
    // Better Auth misconfig / missing secret must not crash every API — fall through to DEV adapter.
    return null;
  }
}

async function resolveDevAdapterSession(): Promise<StudioSession | null> {
  const jar = await cookies();
  const token = jar.get(COOKIE)?.value;
  if (!token) return null;

  const rows = await db
    .select({
      sessionId: sessions.id,
      revokedAt: sessions.revokedAt,
      expiresAt: sessions.expiresAt,
      authMode: sessions.authMode,
      pilotId: pilots.id,
      displayName: pilots.displayName,
    })
    .from(sessions)
    .innerJoin(users, eq(sessions.userId, users.id))
    .innerJoin(pilots, eq(users.pilotId, pilots.id))
    .where(and(eq(sessions.token, token), isNull(sessions.revokedAt), gt(sessions.expiresAt, new Date())))
    .limit(1);

  const row = rows[0];
  if (!row?.pilotId) return null;

  // DEV adapter cookie must never be treated as GitHub OAuth.
  if (row.authMode !== "dev-test-login") return null;

  return {
    pilotId: row.pilotId,
    displayName: row.displayName,
    sessionId: row.sessionId,
    authMode: "dev-test-login",
  };
}

export async function requireStudioSession(): Promise<StudioSession> {
  const s = await resolveStudioSession();
  if (!s) {
    const err = new Error("SESSION_INVALID");
    (err as Error & { code: string }).code = "SESSION_INVALID";
    throw err;
  }
  return s;
}

export async function revokeSession(sessionId: string): Promise<void> {
  await db
    .update(sessions)
    .set({ revokedAt: new Date(), updatedAt: new Date() })
    .where(eq(sessions.id, sessionId));
}

export type DevLoginGateInput = {
  host?: string | null;
  /** Reject when any of these proxy headers are present — Host alone is forgeable. */
  forwardedHost?: string | null;
  forwardedFor?: string | null;
  realIp?: string | null;
};

function isLoopbackHost(value: string | null | undefined): boolean {
  const host = (value ?? "").toLowerCase().split(",")[0]?.trim() ?? "";
  if (!host) return false;
  return (
    host.startsWith("127.0.0.1") ||
    host.startsWith("localhost") ||
    host.startsWith("[::1]") ||
    host === "::1"
  );
}

function assertDevTestLoginAllowed(gate: DevLoginGateInput) {
  if (process.env.STUDIO_DEV_TEST_LOGIN !== "1") {
    throw new Error("DEV_TEST_LOGIN_DISABLED");
  }
  // Fail-closed: DEV test login requires an explicit STUDIO_LANE=DEV (absent ≠ DEV).
  if (process.env.STUDIO_LANE !== "DEV") {
    throw new Error("DEV_TEST_LOGIN_LANE_FORBIDDEN");
  }
  // Host alone is forgeable. Next DEV may set x-forwarded-* to loopback — allow only if
  // every present forwarding signal is itself loopback. Non-loopback forward = reject.
  if (!isLoopbackHost(gate.host)) {
    throw new Error("DEV_TEST_LOGIN_HOST_FORBIDDEN");
  }
  if (gate.forwardedHost && !isLoopbackHost(gate.forwardedHost)) {
    throw new Error("DEV_TEST_LOGIN_PROXY_FORBIDDEN");
  }
  if (gate.forwardedFor && !isLoopbackHost(gate.forwardedFor)) {
    throw new Error("DEV_TEST_LOGIN_PROXY_FORBIDDEN");
  }
  if (gate.realIp && !isLoopbackHost(gate.realIp)) {
    throw new Error("DEV_TEST_LOGIN_PROXY_FORBIDDEN");
  }
}

/** DEV-ONLY test login — Fake/Real: NOT GitHub OAuth proof. Loopback + DEV lane only. */
export async function createDevTestSession(
  which: "a" | "b",
  gate: DevLoginGateInput | string | null = null,
): Promise<{ token: string; pilotId: string; sessionId: string }> {
  const normalized: DevLoginGateInput =
    typeof gate === "string" || gate == null ? { host: gate } : gate;
  assertDevTestLoginAllowed(normalized);

  const label = which === "a" ? "Pilot A (DEV)" : "Pilot B (DEV)";
  const email = which === "a" ? "dev+pilot-a@studio.local" : "dev+pilot-b@studio.local";
  const githubMarker = which === "a" ? "dev-github-a" : "dev-github-b";

  let pilot = (
    await db.select().from(pilots).where(eq(pilots.githubUserId, githubMarker)).limit(1)
  )[0];
  if (!pilot) {
    const pilotId = newId("pilot");
    await db.insert(pilots).values({
      id: pilotId,
      githubUserId: githubMarker,
      displayName: label,
    });
    pilot = (await db.select().from(pilots).where(eq(pilots.id, pilotId)).limit(1))[0];
  }

  let user = (await db.select().from(users).where(eq(users.email, email)).limit(1))[0];
  if (!user) {
    const userId = newId("user");
    await db.insert(users).values({
      id: userId,
      name: label,
      email,
      emailVerified: true,
      pilotId: pilot.id,
    });
    user = (await db.select().from(users).where(eq(users.id, userId)).limit(1))[0];
  } else if (!user.pilotId) {
    await db.update(users).set({ pilotId: pilot.id }).where(eq(users.id, user.id));
  }

  const token = newId("sess");
  const sessionId = newId("sid");
  const expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7);
  await db.insert(sessions).values({
    id: sessionId,
    token,
    userId: user.id,
    expiresAt,
    authMode: "dev-test-login",
  });

  return { token, pilotId: pilot.id, sessionId };
}

export { COOKIE as STUDIO_SESSION_COOKIE };
