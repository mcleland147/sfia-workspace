/**
 * Better Auth integration — deterministic, ZERO real GitHub OAuth.
 */

import { describe, expect, it, beforeEach, afterEach } from "vitest";
import {
  assertStatelessAuthConfig,
  createSfiaAuth,
  resetSfiaAuthSingletonForTests,
} from "@/lib/auth/auth";
import { GITHUB_PROVIDER_ID } from "@/lib/auth/constants";
import { canonicalizeGithubUserId } from "@/lib/auth/allowlist";

const TEST_ENV = {
  BETTER_AUTH_SECRET: "test-secret-at-least-32-characters-long!!",
  BETTER_AUTH_URL: "http://localhost:3020",
  GITHUB_CLIENT_ID: "test-github-client-id",
  GITHUB_CLIENT_SECRET: "test-github-client-secret",
  SFIA_STUDIO_ALLOWED_GITHUB_USER_IDS: "11111111,22222222",
} as unknown as NodeJS.ProcessEnv;

describe("Better Auth foundation BA-D*", () => {
  beforeEach(() => {
    resetSfiaAuthSingletonForTests();
  });
  afterEach(() => {
    resetSfiaAuthSingletonForTests();
  });

  it("BA-D01 initializes with deterministic fake env", () => {
    const auth = createSfiaAuth({ env: TEST_ENV, baseURL: "http://localhost:3020" });
    expect(auth).toBeTruthy();
    expect(auth.handler).toBeTypeOf("function");
  });

  it("BA-D02/D04 stateless config — no DB; GitHub only social provider", () => {
    const auth = createSfiaAuth({ env: TEST_ENV });
    const proof = assertStatelessAuthConfig(auth);
    expect(proof.hasDatabase).toBe(false);
    expect(proof.socialProviders).toEqual([GITHUB_PROVIDER_ID]);
    expect(auth.options.account?.storeAccountCookie).toBe(true);
    expect(auth.options.session?.cookieCache?.enabled).toBe(true);
  });

  it("BA-D05/D06 validateUserInfo rejects unauthorized / accepts authorized raw ids", async () => {
    const auth = createSfiaAuth({ env: TEST_ENV });
    const validate = auth.options.user?.validateUserInfo;
    expect(validate).toBeTypeOf("function");
    if (!validate) return;

    const denied = await validate({
      user: { email: "x@y.z", name: "C" },
      source: {
        action: "create-user",
        method: "oauth",
        oauth: {
          providerId: "github",
          profile: { id: 33333333, login: "not-allowed" },
        },
      },
    } as never);
    expect(denied && typeof denied === "object" && "error" in denied ? denied.error : null).toBe(
      "github_user_not_allowlisted",
    );

    const allowed = await validate({
      user: { email: "a@y.z", name: "A" },
      source: {
        action: "sign-in",
        method: "oauth",
        oauth: {
          providerId: "github",
          profile: { id: 11111111, login: "alice" },
        },
      },
    } as never);
    expect(allowed).toBeUndefined();
  });

  it("BA-D07/D08 provider id originates from profile.id — not session.user.id assumption", () => {
    // GitHub accountSubject uses profile.id (package: accountSubject: ({ profile }) => profile.id)
    expect(canonicalizeGithubUserId(11111111)).toBe("11111111");
    // Explicit non-assumption: a Better Auth internal uuid must not be treated as GitHub id
    expect(canonicalizeGithubUserId("ba-internal-uuid-not-github")).toBeNull();
  });

  it("BA-D03 route handler module exports without invoking OAuth", async () => {
    // Dynamic import of route wiring must not call GitHub.
    const mod = await import("@/app/api/auth/[...all]/route");
    expect(mod.GET).toBeTypeOf("function");
    expect(mod.POST).toBeTypeOf("function");
  });
});
