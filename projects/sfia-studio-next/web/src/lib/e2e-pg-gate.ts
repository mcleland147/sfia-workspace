/**
 * Fail-closed gate for Playwright E2E and Vitest mutative Postgres targeting.
 * Pure validation — no CREATE DATABASE, no migrations, no network to OpenAI.
 * Never logs credentials or full DSNs.
 */

export const E2E_PG_EXPECTED = {
  hosts: ["127.0.0.1", "localhost"] as const,
  port: 5433,
  operatorDatabase: "sfia_next_dev",
  e2eDatabase: "sfia_next_e2e",
  container: "sfia-next-dev-pg",
} as const;

export type E2ePgGateErrorCode =
  | "E2E_PG_URL_MISSING"
  | "E2E_PG_URL_INVALID"
  | "E2E_PG_PROTOCOL_FORBIDDEN"
  | "E2E_PG_HOST_FORBIDDEN"
  | "E2E_PG_PORT_FORBIDDEN"
  | "E2E_PG_SOURCE_DB_FORBIDDEN"
  | "E2E_PG_TARGET_FORBIDDEN"
  | "E2E_PG_TARGET_EQ_SOURCE"
  | "E2E_PG_USERINFO_AMBIGUOUS"
  | "E2E_PG_CONTAINER_MAPPING_FORBIDDEN"
  | "VITEST_PG_URL_MISSING"
  | "VITEST_PG_TARGET_FORBIDDEN";

export class E2ePgGateError extends Error {
  readonly code: E2ePgGateErrorCode;
  constructor(code: E2ePgGateErrorCode, message: string) {
    super(message);
    this.code = code;
    this.name = "E2ePgGateError";
  }
}

function databaseNameFromPathname(pathname: string): string {
  const raw = pathname.replace(/^\//, "");
  const db = raw.split("/")[0] ?? "";
  return decodeURIComponent(db);
}

/**
 * Validate operator DATABASE_URL is the approved local DEV Postgres identity.
 * Does not rewrite; does not print credentials.
 */
export function assertApprovedOperatorDatabaseUrl(raw: string | undefined | null): URL {
  if (raw == null || String(raw).trim() === "") {
    throw new E2ePgGateError("E2E_PG_URL_MISSING", "DATABASE_URL missing");
  }
  let u: URL;
  try {
    u = new URL(String(raw).trim());
  } catch {
    throw new E2ePgGateError("E2E_PG_URL_INVALID", "DATABASE_URL is not a valid URL");
  }

  if (u.protocol !== "postgres:" && u.protocol !== "postgresql:") {
    throw new E2ePgGateError(
      "E2E_PG_PROTOCOL_FORBIDDEN",
      `protocol must be postgres/postgresql (got ${u.protocol})`,
    );
  }

  const host = u.hostname.toLowerCase();
  if (!(E2E_PG_EXPECTED.hosts as readonly string[]).includes(host)) {
    throw new E2ePgGateError(
      "E2E_PG_HOST_FORBIDDEN",
      "host must be exact loopback 127.0.0.1 or localhost",
    );
  }

  // Empty port would default to 5432 — not our DEV mapping.
  const port = u.port === "" ? 5432 : Number(u.port);
  if (port !== E2E_PG_EXPECTED.port) {
    throw new E2ePgGateError(
      "E2E_PG_PORT_FORBIDDEN",
      `port must be ${E2E_PG_EXPECTED.port} (got ${port})`,
    );
  }

  const sourceDb = databaseNameFromPathname(u.pathname);
  if (!sourceDb) {
    throw new E2ePgGateError("E2E_PG_SOURCE_DB_FORBIDDEN", "source database name missing");
  }
  if (sourceDb === E2E_PG_EXPECTED.e2eDatabase) {
    throw new E2ePgGateError(
      "E2E_PG_SOURCE_DB_FORBIDDEN",
      "operator URL must point at sfia_next_dev, not sfia_next_e2e",
    );
  }
  if (sourceDb !== E2E_PG_EXPECTED.operatorDatabase) {
    throw new E2ePgGateError(
      "E2E_PG_SOURCE_DB_FORBIDDEN",
      `operator database must be ${E2E_PG_EXPECTED.operatorDatabase}`,
    );
  }

  return u;
}

/**
 * Build E2E URL from a validated operator URL. Target must be sfia_next_e2e only.
 */
export function buildE2eDatabaseUrl(
  operatorUrl: string,
  e2eDatabase: string = E2E_PG_EXPECTED.e2eDatabase,
): { operatorDatabase: string; e2eDatabase: string; e2eDatabaseUrl: string } {
  const u = assertApprovedOperatorDatabaseUrl(operatorUrl);
  const operatorDatabase = databaseNameFromPathname(u.pathname);

  if (e2eDatabase !== E2E_PG_EXPECTED.e2eDatabase) {
    throw new E2ePgGateError(
      "E2E_PG_TARGET_FORBIDDEN",
      `E2E database must be ${E2E_PG_EXPECTED.e2eDatabase}`,
    );
  }
  if (e2eDatabase === operatorDatabase) {
    throw new E2ePgGateError("E2E_PG_TARGET_EQ_SOURCE", "E2E target must differ from operator DB");
  }

  const e2e = new URL(u.toString());
  e2e.pathname = `/${e2eDatabase}`;
  return {
    operatorDatabase,
    e2eDatabase,
    e2eDatabaseUrl: e2e.toString(),
  };
}

/**
 * Parse `docker port <container> 5432` output; require loopback → 5433.
 * Example approved: `127.0.0.1:5433`
 */
export function assertContainerLoopbackPortMapping(
  dockerPortOutput: string,
  expectedHostPort: number = E2E_PG_EXPECTED.port,
): void {
  const lines = dockerPortOutput
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);
  if (lines.length === 0) {
    throw new E2ePgGateError(
      "E2E_PG_CONTAINER_MAPPING_FORBIDDEN",
      "docker port mapping empty",
    );
  }
  // Approved formats only: 127.0.0.1:5433 | localhost:5433 | [::1]:5433 (not 0.0.0.0).
  const approved = lines.some((line) => {
    const loopback = /^(?:127\.0\.0\.1|localhost|\[::1\]):(\d+)$/i.exec(line);
    if (!loopback) return false;
    return Number(loopback[1]) === expectedHostPort;
  });
  if (!approved) {
    throw new E2ePgGateError(
      "E2E_PG_CONTAINER_MAPPING_FORBIDDEN",
      `container must map 5432/tcp to loopback:${expectedHostPort}`,
    );
  }
}

function parsePostgresUrl(raw: string | undefined | null): URL {
  if (raw == null || String(raw).trim() === "") {
    throw new E2ePgGateError("VITEST_PG_URL_MISSING", "DATABASE_URL missing");
  }
  let u: URL;
  try {
    u = new URL(String(raw).trim());
  } catch {
    throw new E2ePgGateError("E2E_PG_URL_INVALID", "DATABASE_URL is not a valid URL");
  }
  if (u.protocol !== "postgres:" && u.protocol !== "postgresql:") {
    throw new E2ePgGateError(
      "E2E_PG_PROTOCOL_FORBIDDEN",
      `protocol must be postgres/postgresql (got ${u.protocol})`,
    );
  }
  return u;
}

function assertLoopbackDevPort(u: URL): void {
  const host = u.hostname.toLowerCase();
  if (!(E2E_PG_EXPECTED.hosts as readonly string[]).includes(host)) {
    throw new E2ePgGateError(
      "E2E_PG_HOST_FORBIDDEN",
      "host must be exact loopback 127.0.0.1 or localhost",
    );
  }
  const port = u.port === "" ? 5432 : Number(u.port);
  if (port !== E2E_PG_EXPECTED.port) {
    throw new E2ePgGateError(
      "E2E_PG_PORT_FORBIDDEN",
      `port must be ${E2E_PG_EXPECTED.port} (got ${port})`,
    );
  }
}

/**
 * Fail-closed: Vitest mutative suites may only target sfia_next_e2e on DEV loopback :5433.
 * Operator (`sfia_next_dev`), RECETTE, and other DB names are refused — no network I/O.
 */
export function assertApprovedVitestMutativeDatabaseUrl(
  raw: string | undefined | null,
): URL {
  const u = parsePostgresUrl(raw);
  assertLoopbackDevPort(u);
  const db = databaseNameFromPathname(u.pathname);
  if (!db) {
    throw new E2ePgGateError("VITEST_PG_TARGET_FORBIDDEN", "database name missing");
  }
  if (db === E2E_PG_EXPECTED.operatorDatabase) {
    throw new E2ePgGateError(
      "VITEST_PG_TARGET_FORBIDDEN",
      "Vitest mutative tests must not target operator database sfia_next_dev",
    );
  }
  if (db !== E2E_PG_EXPECTED.e2eDatabase) {
    throw new E2ePgGateError(
      "VITEST_PG_TARGET_FORBIDDEN",
      `Vitest mutative database must be ${E2E_PG_EXPECTED.e2eDatabase} (got ${db})`,
    );
  }
  return u;
}

/**
 * Prepare process DATABASE_URL for Vitest mutative PG without editing `.env.local`.
 * - Already e2e → keep (after assert).
 * - Approved operator URL → derive sibling e2e URL in-memory (Playwright preflight pattern).
 * - Anything else → throw before any DB client is constructed.
 */
export function prepareVitestMutativeDatabaseUrl(raw: string | undefined | null): string {
  if (raw == null || String(raw).trim() === "") {
    throw new E2ePgGateError("VITEST_PG_URL_MISSING", "DATABASE_URL missing");
  }
  const trimmed = String(raw).trim();
  let u: URL;
  try {
    u = new URL(trimmed);
  } catch {
    throw new E2ePgGateError("E2E_PG_URL_INVALID", "DATABASE_URL is not a valid URL");
  }
  const db = databaseNameFromPathname(u.pathname);
  if (db === E2E_PG_EXPECTED.e2eDatabase) {
    assertApprovedVitestMutativeDatabaseUrl(trimmed);
    return trimmed;
  }
  // Operator source → in-process rewrite to e2e (does not modify .env.local).
  const built = buildE2eDatabaseUrl(trimmed);
  assertApprovedVitestMutativeDatabaseUrl(built.e2eDatabaseUrl);
  return built.e2eDatabaseUrl;
}
