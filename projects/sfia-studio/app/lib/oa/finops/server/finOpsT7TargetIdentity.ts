/**
 * FinOps T7 — thin fail-closed target identity (Option B).
 *
 * Derives a safe PostgreSQL identity from DATABASE_URL_DIRECT without I/O:
 * host + effective port + database → canonical LF lines → SHA-256 fingerprint.
 *
 * Never includes username, password, query params, or the raw connection string
 * in errors or returned identity fields.
 */

import { createHash } from "node:crypto";

export type FinOpsT7SafeTargetIdentity = {
  readonly hostname: string;
  readonly port: number;
  readonly database: string;
  /** Exact canonical representation used for fingerprinting. */
  readonly canonical: string;
  /** SHA-256 hex lowercase (64 chars) of canonical UTF-8. */
  readonly fingerprint: string;
};

export type FinOpsT7TargetIdentityErrorCode =
  | "INVALID_TARGET_CONNECTION_IDENTITY"
  | "INVALID_EXPECTED_TARGET_FINGERPRINT"
  | "TARGET_FINGERPRINT_MISMATCH";

export class FinOpsT7TargetIdentityError extends Error {
  readonly code: FinOpsT7TargetIdentityErrorCode;
  readonly technicalDetailsRedacted = true as const;

  constructor(code: FinOpsT7TargetIdentityErrorCode, message: string) {
    super(message);
    this.name = "FinOpsT7TargetIdentityError";
    this.code = code;
  }
}

const FINGERPRINT_HEX_RE = /^[0-9a-f]{64}$/;
const FINGERPRINT_HEX_LOOSE_RE = /^[0-9a-fA-F]{64}$/;

function buildCanonical(
  hostname: string,
  port: number,
  database: string,
): string {
  return `host=${hostname}\nport=${port}\ndatabase=${database}`;
}

function fingerprintCanonical(canonical: string): string {
  return createHash("sha256").update(canonical, "utf8").digest("hex");
}

/**
 * Derive safe identity + fingerprint from a PostgreSQL connection string.
 * Pure: no network I/O.
 */
export function deriveFinOpsT7TargetIdentity(
  connectionString: string,
): FinOpsT7SafeTargetIdentity {
  const raw =
    typeof connectionString === "string" ? connectionString.trim() : "";
  if (!raw) {
    throw new FinOpsT7TargetIdentityError(
      "INVALID_TARGET_CONNECTION_IDENTITY",
      "FinOps T7 target identity refused: connection string is empty",
    );
  }

  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    throw new FinOpsT7TargetIdentityError(
      "INVALID_TARGET_CONNECTION_IDENTITY",
      "FinOps T7 target identity refused: connection string is not a valid URL",
    );
  }

  const protocol = url.protocol.toLowerCase();
  if (protocol !== "postgres:" && protocol !== "postgresql:") {
    throw new FinOpsT7TargetIdentityError(
      "INVALID_TARGET_CONNECTION_IDENTITY",
      "FinOps T7 target identity refused: protocol must be postgres or postgresql",
    );
  }

  const hostname = url.hostname.trim().toLowerCase();
  if (!hostname) {
    throw new FinOpsT7TargetIdentityError(
      "INVALID_TARGET_CONNECTION_IDENTITY",
      "FinOps T7 target identity refused: hostname is required",
    );
  }

  let port: number;
  if (url.port) {
    port = Number(url.port);
    if (!Number.isInteger(port) || port < 1 || port > 65535) {
      throw new FinOpsT7TargetIdentityError(
        "INVALID_TARGET_CONNECTION_IDENTITY",
        "FinOps T7 target identity refused: port is invalid",
      );
    }
  } else {
    port = 5432;
  }

  // pathname is "/dbname" or possibly encoded; strip leading slash only.
  const path = url.pathname ?? "";
  const withoutSlash = path.startsWith("/") ? path.slice(1) : path;
  if (!withoutSlash || withoutSlash.includes("/")) {
    throw new FinOpsT7TargetIdentityError(
      "INVALID_TARGET_CONNECTION_IDENTITY",
      "FinOps T7 target identity refused: database name is required",
    );
  }

  let database: string;
  try {
    database = decodeURIComponent(withoutSlash);
  } catch {
    throw new FinOpsT7TargetIdentityError(
      "INVALID_TARGET_CONNECTION_IDENTITY",
      "FinOps T7 target identity refused: database name is not decodable",
    );
  }
  if (!database.trim()) {
    throw new FinOpsT7TargetIdentityError(
      "INVALID_TARGET_CONNECTION_IDENTITY",
      "FinOps T7 target identity refused: database name is required",
    );
  }

  const canonical = buildCanonical(hostname, port, database);
  const fingerprint = fingerprintCanonical(canonical);

  return {
    hostname,
    port,
    database,
    canonical,
    fingerprint,
  };
}

/**
 * Normalize/validate an expected fingerprint.
 * Valid 64-char hex is lowercased; anything else is rejected.
 */
export function normalizeExpectedTargetFingerprint(expected: string): string {
  const raw = typeof expected === "string" ? expected.trim() : "";
  if (!FINGERPRINT_HEX_LOOSE_RE.test(raw)) {
    throw new FinOpsT7TargetIdentityError(
      "INVALID_EXPECTED_TARGET_FINGERPRINT",
      "FinOps T7 target identity refused: expected fingerprint must be 64 hex characters",
    );
  }
  const normalized = raw.toLowerCase();
  if (!FINGERPRINT_HEX_RE.test(normalized)) {
    throw new FinOpsT7TargetIdentityError(
      "INVALID_EXPECTED_TARGET_FINGERPRINT",
      "FinOps T7 target identity refused: expected fingerprint must be 64 hex characters",
    );
  }
  return normalized;
}

/**
 * Fail-closed exact match between actual and expected fingerprints.
 * Expected may be mixed-case hex; it is normalized first.
 */
export function assertExpectedTargetFingerprintMatch(
  actualFingerprint: string,
  expectedFingerprint: string,
): void {
  const actual =
    typeof actualFingerprint === "string"
      ? actualFingerprint.trim().toLowerCase()
      : "";
  if (!FINGERPRINT_HEX_RE.test(actual)) {
    throw new FinOpsT7TargetIdentityError(
      "INVALID_TARGET_CONNECTION_IDENTITY",
      "FinOps T7 target identity refused: actual fingerprint is not a valid SHA-256 hex digest",
    );
  }
  const expected = normalizeExpectedTargetFingerprint(expectedFingerprint);
  if (actual !== expected) {
    throw new FinOpsT7TargetIdentityError(
      "TARGET_FINGERPRINT_MISMATCH",
      `FinOps T7 target identity refused: fingerprint mismatch (actual=${actual} expected=${expected})`,
    );
  }
}
