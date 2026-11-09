import { createCipheriv, createDecipheriv, randomBytes } from "node:crypto";
import { StudioError } from "@/lib/http-errors";

const ALGO = "aes-256-gcm";
const KEY_VERSION_DEFAULT = "v1";

export type SealedSecret = {
  ciphertext: string; // base64
  nonce: string; // base64
  keyVersion: string;
};

function loadKeyMaterial(): { key: Buffer; version: string } {
  const raw = process.env.INTEGRATION_TOKEN_ENCRYPTION_KEY?.trim();
  if (!raw) {
    throw new StudioError(
      "NOT_CONFIGURED",
      "INTEGRATION_TOKEN_ENCRYPTION_KEY absent — chiffrement tokens requis",
      { httpStatus: 503 },
    );
  }
  // Accept 32-byte raw base64 or 64-char hex.
  let key: Buffer;
  if (/^[0-9a-fA-F]{64}$/.test(raw)) {
    key = Buffer.from(raw, "hex");
  } else {
    key = Buffer.from(raw, "base64");
  }
  if (key.length !== 32) {
    throw new StudioError(
      "NOT_CONFIGURED",
      "INTEGRATION_TOKEN_ENCRYPTION_KEY doit faire 32 octets (base64 ou hex)",
      { httpStatus: 503 },
    );
  }
  const version = process.env.INTEGRATION_TOKEN_ENCRYPTION_KEY_VERSION?.trim() || KEY_VERSION_DEFAULT;
  return { key, version };
}

export function isTokenEncryptionConfigured(): boolean {
  try {
    loadKeyMaterial();
    return true;
  } catch {
    return false;
  }
}

/** Seal a secret with AES-256-GCM. Never log plaintext or ciphertext in callers' messages. */
export function sealSecret(plaintext: string): SealedSecret {
  const { key, version } = loadKeyMaterial();
  const nonce = randomBytes(12);
  const cipher = createCipheriv(ALGO, key, nonce);
  const enc = Buffer.concat([cipher.update(plaintext, "utf8"), cipher.final()]);
  const tag = cipher.getAuthTag();
  return {
    ciphertext: Buffer.concat([enc, tag]).toString("base64"),
    nonce: nonce.toString("base64"),
    keyVersion: version,
  };
}

export function openSecret(sealed: SealedSecret): string {
  const { key } = loadKeyMaterial();
  const raw = Buffer.from(sealed.ciphertext, "base64");
  if (raw.length < 17) {
    throw new StudioError("INTERNAL", "Ciphertext token invalide", { httpStatus: 500 });
  }
  const data = raw.subarray(0, raw.length - 16);
  const tag = raw.subarray(raw.length - 16);
  const nonce = Buffer.from(sealed.nonce, "base64");
  const decipher = createDecipheriv(ALGO, key, nonce);
  decipher.setAuthTag(tag);
  try {
    return Buffer.concat([decipher.update(data), decipher.final()]).toString("utf8");
  } catch (e) {
    throw new StudioError("ACCESS_DENIED", "Décryptage token impossible", {
      httpStatus: 403,
      cause: e,
    });
  }
}
