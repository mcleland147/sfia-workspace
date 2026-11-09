import { mkdtempSync, writeFileSync, chmodSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  GITHUB_APP_EXPECTED_APP_ID,
  GITHUB_APP_EXPECTED_INSTALLATION_ID,
  GITHUB_APP_LANE_PROFILES,
  assertGitHubAppEnvMatchesLane,
  inspectGitHubAppCredentialPath,
  loadGitHubAppCredentialsFromEnv,
  readGitHubAppCredentialMetaFromEnv,
  resolveStudioGithubAppLane,
} from "@/domains/integrations/github-app-config";
import { isStudioError } from "@/lib/http-errors";

const ORIGINAL = { ...process.env };

afterEach(() => {
  for (const k of Object.keys(process.env)) {
    if (!(k in ORIGINAL)) delete process.env[k];
  }
  Object.assign(process.env, ORIGINAL);
});

function writeTempPem(): { dir: string; pemPath: string } {
  const dir = mkdtempSync(join(tmpdir(), "sfia-gh-app-"));
  const pemPath = join(dir, "key.pem");
  writeFileSync(
    pemPath,
    "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC0\n-----END PRIVATE KEY-----\n",
  );
  return { dir, pemPath };
}

describe("github-app-config", () => {
  it("STOP when PRIVATE_KEY_PATH absent", () => {
    process.env.STUDIO_LANE = "DEV";
    process.env.GITHUB_APP_ID = GITHUB_APP_EXPECTED_APP_ID;
    process.env.GITHUB_APP_INSTALLATION_ID = GITHUB_APP_EXPECTED_INSTALLATION_ID;
    delete process.env.GITHUB_APP_PRIVATE_KEY_PATH;
    expect(() => readGitHubAppCredentialMetaFromEnv()).toThrow(/LOCAL CREDENTIAL INPUT REQUIRED/);
  });

  it("rejects wrong App ID on DEV", () => {
    const { dir, pemPath } = writeTempPem();
    try {
      process.env.STUDIO_LANE = "DEV";
      process.env.GITHUB_APP_ID = "9999999";
      process.env.GITHUB_APP_INSTALLATION_ID = GITHUB_APP_EXPECTED_INSTALLATION_ID;
      process.env.GITHUB_APP_PRIVATE_KEY_PATH = pemPath;
      expect(() => loadGitHubAppCredentialsFromEnv()).toThrow(/GITHUB_APP_ID inattendu/);
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it("rejects wrong installation ID on DEV", () => {
    const { dir, pemPath } = writeTempPem();
    try {
      process.env.STUDIO_LANE = "DEV";
      process.env.GITHUB_APP_ID = GITHUB_APP_EXPECTED_APP_ID;
      process.env.GITHUB_APP_INSTALLATION_ID = "1";
      process.env.GITHUB_APP_PRIVATE_KEY_PATH = pemPath;
      expect(() => loadGitHubAppCredentialsFromEnv()).toThrow(/INSTALLATION_ID inattendu/);
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it("rejects missing key file", () => {
    process.env.STUDIO_LANE = "DEV";
    process.env.GITHUB_APP_ID = GITHUB_APP_EXPECTED_APP_ID;
    process.env.GITHUB_APP_INSTALLATION_ID = GITHUB_APP_EXPECTED_INSTALLATION_ID;
    process.env.GITHUB_APP_PRIVATE_KEY_PATH = "/tmp/sfia-does-not-exist-github-app.pem";
    try {
      loadGitHubAppCredentialsFromEnv();
      expect.fail("expected throw");
    } catch (e) {
      expect(isStudioError(e)).toBe(true);
      expect(String((e as Error).message)).toMatch(/fichier absent/);
    }
  });

  it("inspects path metadata without needing valid crypto key material shape beyond PEM header", () => {
    const { dir, pemPath } = writeTempPem();
    chmodSync(pemPath, 0o600);
    try {
      const meta = inspectGitHubAppCredentialPath(pemPath);
      expect(meta.exists).toBe(true);
      expect(meta.isFile).toBe(true);
      expect(meta.readable).toBe(true);
      expect(meta.mode).toBe("0600");
      expect(meta.sizeBytes).toBeGreaterThan(20);

      process.env.STUDIO_LANE = "DEV";
      process.env.GITHUB_APP_ID = GITHUB_APP_EXPECTED_APP_ID;
      process.env.GITHUB_APP_INSTALLATION_ID = GITHUB_APP_EXPECTED_INSTALLATION_ID;
      process.env.GITHUB_APP_PRIVATE_KEY_PATH = pemPath;
      const loaded = loadGitHubAppCredentialsFromEnv();
      expect(loaded.appId).toBe(GITHUB_APP_EXPECTED_APP_ID);
      expect(loaded.lane).toBe("DEV");
      expect(loaded.privateKeyPem.includes("BEGIN")).toBe(true);
      expect(loaded.meta.pathMode).toBe("0600");
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it("rejects non-PEM content", () => {
    const { dir, pemPath } = writeTempPem();
    writeFileSync(pemPath, "not-a-key");
    try {
      process.env.STUDIO_LANE = "DEV";
      process.env.GITHUB_APP_ID = GITHUB_APP_EXPECTED_APP_ID;
      process.env.GITHUB_APP_INSTALLATION_ID = GITHUB_APP_EXPECTED_INSTALLATION_ID;
      process.env.GITHUB_APP_PRIVATE_KEY_PATH = pemPath;
      expect(() => loadGitHubAppCredentialsFromEnv()).toThrow(/PEM attendu/);
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it("accepts RECETTE App identity only when STUDIO_LANE=RECETTE", () => {
    const { dir, pemPath } = writeTempPem();
    chmodSync(pemPath, 0o600);
    const recette = GITHUB_APP_LANE_PROFILES.RECETTE;
    try {
      process.env.STUDIO_LANE = "RECETTE";
      process.env.GITHUB_APP_ID = recette.appId;
      process.env.GITHUB_APP_INSTALLATION_ID = recette.installationId;
      process.env.GITHUB_APP_PRIVATE_KEY_PATH = pemPath;
      const loaded = loadGitHubAppCredentialsFromEnv();
      expect(loaded.lane).toBe("RECETTE");
      expect(loaded.appId).toBe(recette.appId);
      expect(loaded.installationId).toBe(recette.installationId);
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it("rejects DEV App ID under STUDIO_LANE=RECETTE (no silent cross-lane)", () => {
    const { dir, pemPath } = writeTempPem();
    try {
      process.env.STUDIO_LANE = "RECETTE";
      process.env.GITHUB_APP_ID = GITHUB_APP_LANE_PROFILES.DEV.appId;
      process.env.GITHUB_APP_INSTALLATION_ID = GITHUB_APP_LANE_PROFILES.RECETTE.installationId;
      process.env.GITHUB_APP_PRIVATE_KEY_PATH = pemPath;
      expect(() => loadGitHubAppCredentialsFromEnv()).toThrow(/GITHUB_APP_ID inattendu pour lane RECETTE/);
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it("rejects RECETTE App ID under STUDIO_LANE=DEV", () => {
    const { dir, pemPath } = writeTempPem();
    try {
      process.env.STUDIO_LANE = "DEV";
      process.env.GITHUB_APP_ID = GITHUB_APP_LANE_PROFILES.RECETTE.appId;
      process.env.GITHUB_APP_INSTALLATION_ID = GITHUB_APP_LANE_PROFILES.DEV.installationId;
      process.env.GITHUB_APP_PRIVATE_KEY_PATH = pemPath;
      expect(() => loadGitHubAppCredentialsFromEnv()).toThrow(/GITHUB_APP_ID inattendu pour lane DEV/);
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it("rejects unknown STUDIO_LANE for GitHub App", () => {
    process.env.STUDIO_LANE = "STABLE";
    expect(() => resolveStudioGithubAppLane()).toThrow(/STUDIO_LANE invalide/);
  });

  it("assertGitHubAppEnvMatchesLane rejects arbitrary allowlist override", () => {
    expect(() =>
      assertGitHubAppEnvMatchesLane({
        lane: "DEV",
        appId: GITHUB_APP_LANE_PROFILES.DEV.appId,
        installationId: GITHUB_APP_LANE_PROFILES.DEV.installationId,
        allowedFullName: "other/repo",
      }),
    ).toThrow(/GITHUB_APP_ALLOWED_REPO inattendu/);
  });
});
