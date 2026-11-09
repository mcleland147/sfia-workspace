import { afterEach, describe, expect, it, vi } from "vitest";
import {
  assertInstallationAuthorized,
  assertSandboxRepoInList,
  buildGitHubAppUserAuthorizeUrl,
  exchangeAuthorizationCode,
  fetchGitHubUserIdentity,
  isGitHubAppUserOauthConfigured,
  mintPkcePair,
  readGitHubAppUserOauthConfig,
} from "@/domains/integrations/github-app-user-oauth";
import {
  GITHUB_APP_EXPECTED_APP_ID,
  GITHUB_APP_EXPECTED_INSTALLATION_ID,
} from "@/domains/integrations/github-app-config";

const ORIGINAL = { ...process.env };

afterEach(() => {
  for (const k of Object.keys(process.env)) {
    if (!(k in ORIGINAL)) delete process.env[k];
  }
  Object.assign(process.env, ORIGINAL);
  vi.restoreAllMocks();
});

describe("github-app-user-oauth helpers", () => {
  it("detects missing client credentials without inventing them", () => {
    delete process.env.GITHUB_APP_CLIENT_ID;
    delete process.env.GITHUB_APP_CLIENT_SECRET;
    delete process.env.GITHUB_APP_CALLBACK_URL;
    expect(isGitHubAppUserOauthConfigured()).toBe(false);
    expect(() => readGitHubAppUserOauthConfig()).toThrow(/GITHUB_APP_CLIENT_ID/);
  });

  it("builds authorize URL with PKCE and dedicated App client id", () => {
    process.env.GITHUB_APP_CLIENT_ID = "Iv1.app-client";
    process.env.GITHUB_APP_CLIENT_SECRET = "secret";
    process.env.GITHUB_APP_CALLBACK_URL = "http://127.0.0.1:3100/api/integrations/github/callback";
    process.env.GITHUB_APP_ID = GITHUB_APP_EXPECTED_APP_ID;
    const config = readGitHubAppUserOauthConfig();
    const pkce = mintPkcePair();
    const url = buildGitHubAppUserAuthorizeUrl({
      config,
      state: "st",
      codeChallenge: pkce.codeChallenge,
      codeChallengeMethod: pkce.method,
    });
    expect(url).toContain("client_id=Iv1.app-client");
    expect(url).toContain("code_challenge=");
    expect(url).toContain("code_challenge_method=S256");
    expect(url).not.toContain(process.env.GITHUB_CLIENT_ID ?? "Ov23");
  });

  it("exchanges code and fetches identity via mocked GitHub", async () => {
    process.env.GITHUB_APP_CLIENT_ID = "Iv1.app-client";
    process.env.GITHUB_APP_CLIENT_SECRET = "secret";
    process.env.GITHUB_APP_CALLBACK_URL = "http://127.0.0.1:3100/api/integrations/github/callback";
    const config = readGitHubAppUserOauthConfig();
    const fetchImpl = vi.fn(async (input: RequestInfo | URL) => {
      const url = String(input);
      if (url.includes("login/oauth/access_token")) {
        return new Response(
          JSON.stringify({
            access_token: "ghs_test",
            refresh_token: "ghr_test",
            expires_in: 3600,
            scope: "",
          }),
          { status: 200, headers: { "Content-Type": "application/json" } },
        );
      }
      if (url.endsWith("/user")) {
        return new Response(JSON.stringify({ id: 42, login: "mcleland147" }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      }
      return new Response("{}", { status: 500 });
    });
    const tokens = await exchangeAuthorizationCode({
      config,
      code: "abc",
      codeVerifier: "ver",
      fetchImpl: fetchImpl as unknown as typeof fetch,
    });
    expect(tokens.accessToken).toBe("ghs_test");
    const identity = await fetchGitHubUserIdentity(
      tokens.accessToken,
      fetchImpl as unknown as typeof fetch,
    );
    expect(identity).toEqual({ id: "42", login: "mcleland147" });
  });

  it("rejects missing installation / sandbox repo", () => {
    const config = {
      clientId: "x",
      clientSecret: "y",
      callbackUrl: "http://localhost/cb",
      appId: GITHUB_APP_EXPECTED_APP_ID,
      expectedInstallationId: GITHUB_APP_EXPECTED_INSTALLATION_ID,
      expectedOwner: "mcleland147",
      allowedFullName: "mcleland147/chantiers360",
    };
    expect(() =>
      assertInstallationAuthorized(
        [
          {
            id: "1",
            appId: GITHUB_APP_EXPECTED_APP_ID,
            accountLogin: "mcleland147",
            accountType: "User",
            repositorySelection: "selected",
            suspendedAt: null,
          },
        ],
        config,
      ),
    ).toThrow(/inaccessible/);

    expect(() =>
      assertSandboxRepoInList([{ fullName: "acme/other" }], config.allowedFullName),
    ).toThrow(/hors ressources/);
  });
});
