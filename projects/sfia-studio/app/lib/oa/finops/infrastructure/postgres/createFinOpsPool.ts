/**
 * FinOps T1 — pg.Pool factory for runtime (pooled) connections.
 * Never logs or throws the connection string.
 *
 * SSL: explicit option only. Default false for local/CI-A.
 * Neon must supply an explicit secure SSL config in a future gate — never inferred from URL.
 */

import { Pool, type PoolConfig } from "pg";

const MAX_STATEMENT_TIMEOUT_MS = 60_000;

export type FinOpsPoolOptions = {
  readonly connectionString: string;
  readonly max?: number;
  readonly connectionTimeoutMillis?: number;
  readonly idleTimeoutMillis?: number;
  readonly statementTimeoutMillis?: number;
  /**
   * Explicit SSL setting compatible with pg PoolConfig.ssl.
   * Default: false (local / CI-A ephemeral Postgres).
   * Neon integration must pass a secure config explicitly — never auto-detected.
   */
  readonly ssl?: PoolConfig["ssl"];
};

function validateStatementTimeoutMillis(value: number): number {
  if (
    typeof value !== "number" ||
    !Number.isSafeInteger(value) ||
    value <= 0 ||
    value > MAX_STATEMENT_TIMEOUT_MS
  ) {
    throw new Error("statementTimeoutMillis out of allowed range");
  }
  return value;
}

export function createFinOpsPool(options: FinOpsPoolOptions): Pool {
  if (!options.connectionString || !options.connectionString.trim()) {
    throw new Error("DATABASE_URL required for FinOps pool");
  }
  const ssl = options.ssl === undefined ? false : options.ssl;
  const config: PoolConfig = {
    connectionString: options.connectionString,
    max: options.max ?? 5,
    connectionTimeoutMillis: options.connectionTimeoutMillis ?? 5_000,
    idleTimeoutMillis: options.idleTimeoutMillis ?? 10_000,
    ssl,
  };
  const pool = new Pool(config);
  if (options.statementTimeoutMillis !== undefined) {
    const timeoutMs = validateStatementTimeoutMillis(
      options.statementTimeoutMillis,
    );
    pool.on("connect", (client) => {
      // Parameterized set_config — no free string interpolation of the timeout.
      void client.query("SELECT set_config('statement_timeout', $1, false)", [
        String(timeoutMs),
      ]);
    });
  }
  return pool;
}

export async function closeFinOpsPool(pool: Pool): Promise<void> {
  await pool.end();
}
