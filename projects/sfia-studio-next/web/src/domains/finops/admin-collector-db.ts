/**
 * Dedicated PostgreSQL client for the isolated Admin collector process.
 *
 * Product/Next continues to use `@/db/client` (read path).
 * Collector writes MUST use SFIA_ADMIN_COLLECTOR_DATABASE_URL as
 * `sfia_admin_collector_ops` — never the lane owner / superuser DSN.
 */

import postgres from "postgres";

export type AdminCollectorDbIdentity = {
  currentUser: string;
  sessionUser: string;
};

let collectorSql: ReturnType<typeof postgres> | null = null;

export function isIsolatedAdminCollectorProcess(
  env: NodeJS.ProcessEnv = process.env,
): boolean {
  return (env.SFIA_ADMIN_COLLECTOR_PROCESS ?? "").trim() === "1";
}

/**
 * Resolve collector DSN. Refuses product DATABASE_URL as operational identity.
 */
export function resolveAdminCollectorDatabaseUrl(
  env: NodeJS.ProcessEnv = process.env,
): { url: string | null; limits: string[] } {
  if (!isIsolatedAdminCollectorProcess(env)) {
    return { url: null, limits: ["NOT_ISOLATED_COLLECTOR_PROCESS"] };
  }
  const dedicated = (env.SFIA_ADMIN_COLLECTOR_DATABASE_URL ?? "").trim();
  if (!dedicated) {
    return {
      url: null,
      limits: ["SFIA_ADMIN_COLLECTOR_DATABASE_URL_REQUIRED"],
    };
  }
  // Refuse obvious owner/superuser names in the URL userinfo.
  try {
    const u = new URL(dedicated);
    const user = decodeURIComponent(u.username || "");
    if (
      !user ||
      user === "sfia_next_dev" ||
      user === "postgres" ||
      user === "sfia_next_recette"
    ) {
      return {
        url: null,
        limits: ["COLLECTOR_DSN_MUST_USE_OPS_ROLE", `USER=${user || "empty"}`],
      };
    }
    if (user !== "sfia_admin_collector_ops") {
      return {
        url: null,
        limits: ["COLLECTOR_DSN_UNEXPECTED_ROLE", `USER=${user}`],
      };
    }
  } catch {
    return { url: null, limits: ["COLLECTOR_DSN_INVALID"] };
  }
  return { url: dedicated, limits: [] };
}

export function getAdminCollectorSql(
  env: NodeJS.ProcessEnv = process.env,
): ReturnType<typeof postgres> {
  if (collectorSql) return collectorSql;
  const { url, limits } = resolveAdminCollectorDatabaseUrl(env);
  if (!url) {
    throw new Error(`BLOCKED_COLLECTOR_DB:${limits.join(",")}`);
  }
  collectorSql = postgres(url, {
    max: 2,
    idle_timeout: 10,
    connect_timeout: 10,
  });
  return collectorSql;
}

export async function proveAdminCollectorDbIdentity(
  env: NodeJS.ProcessEnv = process.env,
): Promise<AdminCollectorDbIdentity> {
  const sql = getAdminCollectorSql(env);
  const rows = await sql<{
    current_user: string;
    session_user: string;
  }>`SELECT current_user, session_user`;
  const row = rows[0];
  if (!row || row.current_user !== "sfia_admin_collector_ops") {
    throw new Error(
      `COLLECTOR_IDENTITY_MISMATCH:current=${row?.current_user ?? "none"}`,
    );
  }
  return { currentUser: row.current_user, sessionUser: row.session_user };
}

/** Test-only reset of cached client. */
export async function resetAdminCollectorSqlForTests(): Promise<void> {
  if (collectorSql) {
    await collectorSql.end({ timeout: 1 }).catch(() => undefined);
  }
  collectorSql = null;
}
