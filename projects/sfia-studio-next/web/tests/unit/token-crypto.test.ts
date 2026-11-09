import { afterEach, describe, expect, it } from "vitest";
import { isTokenEncryptionConfigured, openSecret, sealSecret } from "@/lib/token-crypto";
import { isStudioError } from "@/lib/http-errors";

const ORIGINAL = { ...process.env };

afterEach(() => {
  for (const k of Object.keys(process.env)) {
    if (!(k in ORIGINAL)) delete process.env[k];
  }
  Object.assign(process.env, ORIGINAL);
});

describe("token-crypto AES-GCM", () => {
  it("refuses when key absent", () => {
    delete process.env.INTEGRATION_TOKEN_ENCRYPTION_KEY;
    expect(isTokenEncryptionConfigured()).toBe(false);
    expect(() => sealSecret("x")).toThrow(/INTEGRATION_TOKEN_ENCRYPTION_KEY/);
  });

  it("round-trips and rejects wrong key", () => {
    process.env.INTEGRATION_TOKEN_ENCRYPTION_KEY = Buffer.alloc(32, 9).toString("base64");
    expect(isTokenEncryptionConfigured()).toBe(true);
    const sealed = sealSecret("ghs_never_log_me");
    expect(sealed.ciphertext).not.toContain("ghs_");
    expect(openSecret(sealed)).toBe("ghs_never_log_me");

    process.env.INTEGRATION_TOKEN_ENCRYPTION_KEY = Buffer.alloc(32, 1).toString("base64");
    try {
      openSecret(sealed);
      expect.fail("expected decrypt fail");
    } catch (e) {
      expect(isStudioError(e)).toBe(true);
      expect((e as { code: string }).code).toBe("ACCESS_DENIED");
    }
  });

  it("accepts 64-char hex key", () => {
    process.env.INTEGRATION_TOKEN_ENCRYPTION_KEY = "ab".repeat(32);
    const sealed = sealSecret("hello");
    expect(openSecret(sealed)).toBe("hello");
  });
});
