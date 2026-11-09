import { afterEach, describe, expect, it } from "vitest";
import {
  isRealUserOauthDemanded,
  isScriptedGithubAuthContextAllowed,
  resolveGithubUserAuthFlow,
} from "@/domains/integrations/scripted-github-guard";
import { isStudioError } from "@/lib/http-errors";

const ORIGINAL = { ...process.env };

afterEach(() => {
  for (const k of Object.keys(process.env)) {
    if (!(k in ORIGINAL)) delete process.env[k];
  }
  Object.assign(process.env, ORIGINAL);
});

describe("scripted-github-guard", () => {
  it("allows SCRIPTED only in DEV with explicit activation + loopback", () => {
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_ALLOW_SCRIPTED_GITHUB = "1";
    delete process.env.STUDIO_GITHUB_USER_OAUTH;
    expect(isScriptedGithubAuthContextAllowed({ requestHost: "127.0.0.1:3100" })).toBe(true);
    expect(isScriptedGithubAuthContextAllowed({ requestHost: "evil.example" })).toBe(false);
  });

  it("refuses SCRIPTED outside DEV", () => {
    process.env.STUDIO_LANE = "RECETTE";
    process.env.STUDIO_ALLOW_SCRIPTED_GITHUB = "1";
    expect(isScriptedGithubAuthContextAllowed()).toBe(false);
  });

  it("refuses SCRIPTED without explicit activation", () => {
    process.env.STUDIO_LANE = "DEV";
    delete process.env.STUDIO_ALLOW_SCRIPTED_GITHUB;
    delete process.env.STUDIO_E2E;
    delete process.env.VITEST;
    expect(isScriptedGithubAuthContextAllowed()).toBe(false);
  });

  it("REAL demanded never falls back to SCRIPTED", () => {
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_ALLOW_SCRIPTED_GITHUB = "1";
    process.env.STUDIO_GITHUB_USER_OAUTH = "real";
    expect(isRealUserOauthDemanded()).toBe(true);
    expect(isScriptedGithubAuthContextAllowed()).toBe(false);
    delete process.env.GITHUB_APP_CLIENT_ID;
    delete process.env.GITHUB_APP_CLIENT_SECRET;
    delete process.env.GITHUB_APP_CALLBACK_URL;
    try {
      resolveGithubUserAuthFlow();
      expect.fail("expected NOT_CONFIGURED");
    } catch (e) {
      expect(isStudioError(e)).toBe(true);
      expect((e as { code: string }).code).toBe("NOT_CONFIGURED");
    }
  });
});
