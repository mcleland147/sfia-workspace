import { mkdtempSync, writeFileSync, chmodSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  GITHUB_APP_EXPECTED_APP_ID,
  GITHUB_APP_EXPECTED_INSTALLATION_ID,
  inspectGitHubAppCredentialPath,
  loadGitHubAppCredentialsFromEnv,
  readGitHubAppCredentialMetaFromEnv,
} from "@/domains/integrations/github-app-config";
import { isStudioError } from "@/lib/http-errors";

const ORIGINAL = { ...process.env };

afterEach(() => {
  for (const k of Object.keys(process.env)) {
    if (!(k in ORIGINAL)) delete process.env[k];
  }
  Object.assign(process.env, ORIGINAL);
});

describe("github-app-config", () => {
  it("STOP when PRIVATE_KEY_PATH absent", () => {
    process.env.GITHUB_APP_ID = GITHUB_APP_EXPECTED_APP_ID;
    process.env.GITHUB_APP_INSTALLATION_ID = GITHUB_APP_EXPECTED_INSTALLATION_ID;
    delete process.env.GITHUB_APP_PRIVATE_KEY_PATH;
    expect(() => readGitHubAppCredentialMetaFromEnv()).toThrow(/LOCAL CREDENTIAL INPUT REQUIRED/);
  });

  it("rejects wrong App ID", () => {
    const dir = mkdtempSync(join(tmpdir(), "sfia-gh-app-"));
    const pemPath = join(dir, "key.pem");
    writeFileSync(
      pemPath,
      "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC0\n-----END PRIVATE KEY-----\n",
    );
    try {
      process.env.GITHUB_APP_ID = "9999999";
      process.env.GITHUB_APP_INSTALLATION_ID = GITHUB_APP_EXPECTED_INSTALLATION_ID;
      process.env.GITHUB_APP_PRIVATE_KEY_PATH = pemPath;
      expect(() => loadGitHubAppCredentialsFromEnv()).toThrow(/GITHUB_APP_ID inattendu/);
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it("rejects wrong installation ID", () => {
    const dir = mkdtempSync(join(tmpdir(), "sfia-gh-app-"));
    const pemPath = join(dir, "key.pem");
    writeFileSync(
      pemPath,
      "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC0\n-----END PRIVATE KEY-----\n",
    );
    try {
      process.env.GITHUB_APP_ID = GITHUB_APP_EXPECTED_APP_ID;
      process.env.GITHUB_APP_INSTALLATION_ID = "1";
      process.env.GITHUB_APP_PRIVATE_KEY_PATH = pemPath;
      expect(() => loadGitHubAppCredentialsFromEnv()).toThrow(/INSTALLATION_ID inattendu/);
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it("rejects missing key file", () => {
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
    const dir = mkdtempSync(join(tmpdir(), "sfia-gh-app-"));
    const pemPath = join(dir, "key.pem");
    writeFileSync(
      pemPath,
      "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC0\n-----END PRIVATE KEY-----\n",
    );
    chmodSync(pemPath, 0o600);
    try {
      const meta = inspectGitHubAppCredentialPath(pemPath);
      expect(meta.exists).toBe(true);
      expect(meta.isFile).toBe(true);
      expect(meta.readable).toBe(true);
      expect(meta.mode).toBe("0600");
      expect(meta.sizeBytes).toBeGreaterThan(20);

      process.env.GITHUB_APP_ID = GITHUB_APP_EXPECTED_APP_ID;
      process.env.GITHUB_APP_INSTALLATION_ID = GITHUB_APP_EXPECTED_INSTALLATION_ID;
      process.env.GITHUB_APP_PRIVATE_KEY_PATH = pemPath;
      const loaded = loadGitHubAppCredentialsFromEnv();
      expect(loaded.appId).toBe(GITHUB_APP_EXPECTED_APP_ID);
      expect(loaded.privateKeyPem.includes("BEGIN")).toBe(true);
      expect(loaded.meta.pathMode).toBe("0600");
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it("rejects non-PEM content", () => {
    const dir = mkdtempSync(join(tmpdir(), "sfia-gh-app-"));
    const pemPath = join(dir, "key.pem");
    writeFileSync(pemPath, "not-a-key");
    try {
      process.env.GITHUB_APP_ID = GITHUB_APP_EXPECTED_APP_ID;
      process.env.GITHUB_APP_INSTALLATION_ID = GITHUB_APP_EXPECTED_INSTALLATION_ID;
      process.env.GITHUB_APP_PRIVATE_KEY_PATH = pemPath;
      expect(() => loadGitHubAppCredentialsFromEnv()).toThrow(/PEM attendu/);
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });
});
