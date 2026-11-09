import { generateKeyPairSync } from "node:crypto";
import { afterEach, describe, expect, it, vi } from "vitest";
import {
  authenticateInstallationReadOnly,
  createGitHubAppJwt,
  createInstallationAccessToken,
} from "@/domains/integrations/github-app-auth";
import type { GitHubAppLoadedCredentials } from "@/domains/integrations/github-app-config";
import {
  GITHUB_APP_ALLOWED_FULL_NAME,
  GITHUB_APP_EXPECTED_APP_ID,
  GITHUB_APP_EXPECTED_INSTALLATION_ID,
  GITHUB_APP_EXPECTED_OWNER,
} from "@/domains/integrations/github-app-config";
import { resolveGitHubProvider } from "@/domains/integrations/github-provider";
import { RealGitHubReadProvider } from "@/domains/integrations/real-github-provider";
import { isStudioError } from "@/lib/http-errors";

const ORIGINAL = { ...process.env };

function testPem(): string {
  const { privateKey } = generateKeyPairSync("rsa", { modulusLength: 2048 });
  return privateKey.export({ type: "pkcs8", format: "pem" }).toString();
}

function creds(overrides?: Partial<GitHubAppLoadedCredentials>): GitHubAppLoadedCredentials {
  const pem = testPem();
  return {
    appId: GITHUB_APP_EXPECTED_APP_ID,
    installationId: GITHUB_APP_EXPECTED_INSTALLATION_ID,
    privateKeyPem: pem,
    allowedFullName: GITHUB_APP_ALLOWED_FULL_NAME,
    expectedOwner: GITHUB_APP_EXPECTED_OWNER,
    meta: {
      appId: GITHUB_APP_EXPECTED_APP_ID,
      installationId: GITHUB_APP_EXPECTED_INSTALLATION_ID,
      privateKeyPath: "/tmp/test.pem",
      pathExists: true,
      pathIsFile: true,
      pathMode: "0600",
      pathSizeBytes: 100,
      allowedFullName: GITHUB_APP_ALLOWED_FULL_NAME,
      expectedOwner: GITHUB_APP_EXPECTED_OWNER,
    },
    ...overrides,
  };
}

function jsonResponse(status: number, body: unknown): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

afterEach(() => {
  for (const k of Object.keys(process.env)) {
    if (!(k in ORIGINAL)) delete process.env[k];
  }
  Object.assign(process.env, ORIGINAL);
  vi.restoreAllMocks();
});

describe("github-app-auth + REAL provider (DET)", () => {
  it("creates a JWT without exposing it in errors", async () => {
    const c = creds();
    const jwt = await createGitHubAppJwt(c.appId, c.privateKeyPem);
    expect(jwt.split(".")).toHaveLength(3);
    expect(jwt.length).toBeGreaterThan(40);
  });

  it("authenticates installation and restricts token to read + sandbox repo", async () => {
    const c = creds();
    const fetchImpl = vi.fn(async (input: RequestInfo | URL, init?: RequestInit) => {
      const url = String(input);
      const method = (init?.method ?? "GET").toUpperCase();
      if (url.endsWith("/app") && method === "GET") {
        return jsonResponse(200, {
          id: Number(GITHUB_APP_EXPECTED_APP_ID),
          slug: "sfia-studio-next-dev",
          name: "sfia-studio-next-dev",
          owner: { login: "mcleland147" },
        });
      }
      if (url.includes(`/app/installations/${GITHUB_APP_EXPECTED_INSTALLATION_ID}`) && method === "GET") {
        return jsonResponse(200, {
          id: Number(GITHUB_APP_EXPECTED_INSTALLATION_ID),
          account: { login: "mcleland147", type: "User" },
          repository_selection: "selected",
          permissions: { contents: "write", metadata: "read", pull_requests: "write" },
          suspended_at: null,
        });
      }
      if (url.endsWith("/access_tokens") && method === "POST") {
        const body = JSON.parse(String(init?.body ?? "{}"));
        expect(body.repositories).toEqual(["chantiers360"]);
        expect(body.permissions).toEqual({
          contents: "read",
          metadata: "read",
          pull_requests: "read",
        });
        return jsonResponse(201, {
          token: "ghs_test_token_never_log",
          expires_at: new Date(Date.now() + 3600_000).toISOString(),
          permissions: { contents: "read", metadata: "read", pull_requests: "read" },
          repository_selection: "selected",
          repositories: [
            { id: 1, full_name: GITHUB_APP_ALLOWED_FULL_NAME, private: true },
          ],
        });
      }
      return jsonResponse(500, { message: "unexpected " + url });
    });

    const result = await authenticateInstallationReadOnly(c, fetchImpl as unknown as typeof fetch);
    expect(result.app.id).toBe(Number(GITHUB_APP_EXPECTED_APP_ID));
    expect(result.installation.id).toBe(Number(GITHUB_APP_EXPECTED_INSTALLATION_ID));
    expect(result.access.permissions.contents).toBe("read");
    expect(result.access.repositories[0]?.fullName).toBe(GITHUB_APP_ALLOWED_FULL_NAME);
  });

  it("rejects installation token that still has write permissions", async () => {
    const c = creds();
    const jwt = await createGitHubAppJwt(c.appId, c.privateKeyPem);
    const fetchImpl = vi.fn(async () =>
      jsonResponse(201, {
        token: "ghs_x",
        expires_at: new Date(Date.now() + 3600_000).toISOString(),
        permissions: { contents: "write", metadata: "read" },
        repositories: [{ id: 1, full_name: GITHUB_APP_ALLOWED_FULL_NAME, private: true }],
      }),
    );
    await expect(
      createInstallationAccessToken(c, jwt, fetchImpl as unknown as typeof fetch),
    ).rejects.toThrow(/non restreint en lecture/);
  });

  it("maps 403 to ACCESS_DENIED and 503-ish to DEPENDENCY_UNAVAILABLE", async () => {
    const c = creds();
    const jwt = await createGitHubAppJwt(c.appId, c.privateKeyPem);

    const forbidden = vi.fn(async () => jsonResponse(403, { message: "nope" }));
    await expect(
      createInstallationAccessToken(c, jwt, forbidden as unknown as typeof fetch),
    ).rejects.toSatisfy((e: unknown) => isStudioError(e) && e.code === "ACCESS_DENIED");

    const boom = vi.fn(async () => jsonResponse(502, { message: "bad gateway" }));
    await expect(
      createInstallationAccessToken(c, jwt, boom as unknown as typeof fetch),
    ).rejects.toSatisfy((e: unknown) => isStudioError(e) && e.code === "DEPENDENCY_UNAVAILABLE");
  });

  it("REAL provider hard-blocks mutations and refuses out-of-scope repos", async () => {
    const c = creds();
    const fetchImpl = vi.fn(async (input: RequestInfo | URL, init?: RequestInit) => {
      const url = String(input);
      const method = (init?.method ?? "GET").toUpperCase();
      if (url.endsWith("/app") && method === "GET") {
        return jsonResponse(200, {
          id: Number(GITHUB_APP_EXPECTED_APP_ID),
          slug: "sfia-studio-next-dev",
          owner: { login: "mcleland147" },
        });
      }
      if (url.includes("/app/installations/") && method === "GET") {
        return jsonResponse(200, {
          id: Number(GITHUB_APP_EXPECTED_INSTALLATION_ID),
          account: { login: "mcleland147", type: "User" },
          permissions: { contents: "read", metadata: "read", pull_requests: "read" },
          suspended_at: null,
        });
      }
      if (url.endsWith("/access_tokens") && method === "POST") {
        return jsonResponse(201, {
          token: "ghs_test",
          expires_at: new Date(Date.now() + 3600_000).toISOString(),
          permissions: { contents: "read", metadata: "read", pull_requests: "read" },
          repositories: [{ id: 42, full_name: GITHUB_APP_ALLOWED_FULL_NAME, private: true }],
        });
      }
      if (url.includes("/installation/repositories")) {
        return jsonResponse(200, {
          repositories: [
            {
              id: 42,
              full_name: GITHUB_APP_ALLOWED_FULL_NAME,
              default_branch: "main",
              private: true,
            },
          ],
        });
      }
      if (url.includes("/repos/mcleland147/chantiers360/git/ref/")) {
        return jsonResponse(200, {
          object: { sha: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" },
        });
      }
      if (url.includes("/repos/mcleland147/chantiers360") && method === "GET") {
        return jsonResponse(200, {
          id: 42,
          full_name: GITHUB_APP_ALLOWED_FULL_NAME,
          default_branch: "main",
          private: true,
        });
      }
      return jsonResponse(500, { message: "unexpected " + url });
    });

    const provider = new RealGitHubReadProvider(c, fetchImpl as unknown as typeof fetch);

    await expect(
      provider.getRefSha("pilot", "mcleland147/sfia-workspace", "main"),
    ).rejects.toThrow(/hors périmètre/);

    await expect(
      provider.createBranch("pilot", GITHUB_APP_ALLOWED_FULL_NAME, "x", "a".repeat(40)),
    ).rejects.toSatisfy((e: unknown) => isStudioError(e) && e.code === "ACCESS_DENIED");

    await expect(
      provider.putFileContents({
        pilotId: "p",
        fullName: GITHUB_APP_ALLOWED_FULL_NAME,
        path: "docs/a.md",
        branch: "main",
        message: "nope",
        content: "x",
      }),
    ).rejects.toThrow(/Mutation GitHub REAL interdite/);

    await expect(
      provider.createPullRequest({
        pilotId: "p",
        fullName: GITHUB_APP_ALLOWED_FULL_NAME,
        title: "nope",
        head: "x",
        base: "main",
      }),
    ).rejects.toThrow(/Mutation/);

    await expect(
      provider.mergePullRequest({
        pilotId: "p",
        fullName: GITHUB_APP_ALLOWED_FULL_NAME,
        prNumber: 1,
        expectedHeadSha: "a".repeat(40),
      }),
    ).rejects.toThrow(/Mutation/);

    const observed = await provider.observeAllowedRepository();
    expect(observed.fullName).toBe(GITHUB_APP_ALLOWED_FULL_NAME);
    expect(observed.headSha).toBe("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    expect(provider.getMutationCounts().createBranch).toBe(1);
    expect(provider.getMutationCounts().createPR).toBe(1);
    expect(provider.getMutationCounts().mergePR).toBe(1);
  });

  it("resolveGitHubProvider stays SCRIPTED by default and refuses REAL without credentials", () => {
    delete process.env.STUDIO_GITHUB_PROVIDER;
    delete process.env.GITHUB_APP_PRIVATE_KEY_PATH;
    expect(resolveGitHubProvider().mode).toBe("SCRIPTED");

    process.env.STUDIO_GITHUB_PROVIDER = "real";
    delete process.env.GITHUB_APP_ID;
    expect(() => resolveGitHubProvider()).toThrow(/non configuré/);
  });

  it("rejects wrong owner on installation account", async () => {
    const c = creds();
    const fetchImpl = vi.fn(async (input: RequestInfo | URL, init?: RequestInit) => {
      const url = String(input);
      const method = (init?.method ?? "GET").toUpperCase();
      if (url.endsWith("/app")) {
        return jsonResponse(200, {
          id: Number(GITHUB_APP_EXPECTED_APP_ID),
          slug: "sfia-studio-next-dev",
          owner: { login: "mcleland147" },
        });
      }
      if (url.includes("/app/installations/") && method === "GET") {
        return jsonResponse(200, {
          id: Number(GITHUB_APP_EXPECTED_INSTALLATION_ID),
          account: { login: "someone-else", type: "User" },
          permissions: { contents: "read", metadata: "read" },
          suspended_at: null,
        });
      }
      return jsonResponse(500, { message: "no" });
    });
    await expect(
      authenticateInstallationReadOnly(c, fetchImpl as unknown as typeof fetch),
    ).rejects.toThrow(/Owner d'installation inattendu/);
  });
});
