/**
 * Protected-route policy helpers — full identity evaluation semantics (no cookie-only).
 * Middleware uses resolveCurrentAuthenticatedPilote; these tests cover the decision matrix
 * without a real Next request pipeline / GitHub network.
 */

import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { mapGithubIdentityToPiloteActor } from "@/lib/auth/actorMapping";
import type { ReadBoundGithubAccountResult } from "@/lib/auth/providerAccountBinding";

describe("AUTH route protection decision matrix", () => {
  beforeEach(() => {
    vi.resetModules();
  });
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("AUTH-D19 no session → deny", async () => {
    vi.doMock("@/lib/auth/auth", () => ({
      getSfiaAuth: () => ({
        api: {
          getSession: async () => null,
        },
      }),
    }));
    const { resolveCurrentAuthenticatedPilote } = await import(
      "@/lib/auth/resolveCurrentPilote"
    );
    const r = await resolveCurrentAuthenticatedPilote({
      headers: new Headers(),
      env: {
        NODE_ENV: "test",
        SFIA_STUDIO_ALLOWED_GITHUB_USER_IDS: "11111111,22222222",
      } as NodeJS.ProcessEnv,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("NO_SESSION");
  });

  it("AUTH-D20 invalid/missing provider binding → deny even with session", async () => {
    vi.doMock("@/lib/auth/auth", () => ({
      getSfiaAuth: () => ({
        api: {
          getSession: async () => ({
            user: { id: "ba-user-a", name: "A" },
            session: { id: "sess-a" },
          }),
        },
      }),
    }));
    const { resolveCurrentAuthenticatedPilote } = await import(
      "@/lib/auth/resolveCurrentPilote"
    );
    const r = await resolveCurrentAuthenticatedPilote({
      headers: new Headers(),
      env: {
        NODE_ENV: "test",
        SFIA_STUDIO_ALLOWED_GITHUB_USER_IDS: "11111111",
      } as NodeJS.ProcessEnv,
      readBoundGithubAccount: async () =>
        ({
          ok: false,
          code: "PROVIDER_ACCOUNT_MISSING",
          message: "missing",
        }) satisfies ReadBoundGithubAccountResult,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("PROVIDER_ACCOUNT_MISSING");
  });

  it("authenticated + allowlisted proceeds; removed user denied; hostile claim ignored; cross-user mix denied", async () => {
    vi.doMock("@/lib/auth/auth", () => ({
      getSfiaAuth: () => ({
        api: {
          getSession: async () => ({
            user: { id: "ba-user-a", name: "A" },
            session: { id: "sess-a" },
          }),
        },
      }),
    }));
    const { resolveCurrentAuthenticatedPilote } = await import(
      "@/lib/auth/resolveCurrentPilote"
    );

    const boundOk: ReadBoundGithubAccountResult = {
      ok: true,
      account: {
        betterAuthUserId: "ba-user-a",
        githubUserId: "11111111",
        providerId: "github",
        accountRowId: "acc-1",
        issuer: "local:oauth:github",
      },
    };

    const allowed = await resolveCurrentAuthenticatedPilote({
      headers: new Headers(),
      env: {
        NODE_ENV: "test",
        SFIA_STUDIO_ALLOWED_GITHUB_USER_IDS: "11111111,22222222",
      } as NodeJS.ProcessEnv,
      claimedGithubUserId: "22222222",
      claimedRole: "Admin",
      claimedCanActAsMorris: true,
      readBoundGithubAccount: async () => boundOk,
    });
    expect(allowed.ok).toBe(true);
    if (allowed.ok) {
      expect(allowed.githubUserId).toBe("11111111");
      expect(allowed.actor).toEqual(
        mapGithubIdentityToPiloteActor({
          githubUserId: "11111111",
          displayName: "A",
        }),
      );
      expect(allowed.betterAuthUserId).not.toBe(allowed.githubUserId);
    }

    const removed = await resolveCurrentAuthenticatedPilote({
      headers: new Headers(),
      env: {
        NODE_ENV: "test",
        SFIA_STUDIO_ALLOWED_GITHUB_USER_IDS: "22222222",
      } as NodeJS.ProcessEnv,
      readBoundGithubAccount: async () => boundOk,
    });
    expect(removed.ok).toBe(false);
    if (!removed.ok) expect(removed.code).toBe("ALLOWLIST_DENIED");

    const crossUser = await resolveCurrentAuthenticatedPilote({
      headers: new Headers(),
      env: {
        NODE_ENV: "test",
        SFIA_STUDIO_ALLOWED_GITHUB_USER_IDS: "11111111,22222222",
      } as NodeJS.ProcessEnv,
      readBoundGithubAccount: async () => ({
        ok: false,
        code: "SESSION_USER_MISMATCH",
        message: "B session + A account",
      }),
    });
    expect(crossUser.ok).toBe(false);
    if (!crossUser.ok) expect(crossUser.code).toBe("SESSION_USER_MISMATCH");
  });
});
