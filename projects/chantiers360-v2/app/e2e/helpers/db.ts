import { Pool } from "pg";

export function getTestDatabaseUrl(): string | undefined {
  return process.env.TEST_DATABASE_URL ?? process.env.DATABASE_URL;
}

export function hasDatabaseUrl(): boolean {
  return Boolean(getTestDatabaseUrl());
}

export async function resetChantiers(): Promise<void> {
  const connectionString = getTestDatabaseUrl();
  if (!connectionString) {
    throw new Error("TEST_DATABASE_URL or DATABASE_URL is required for E2E tests");
  }

  const pool = new Pool({ connectionString });
  try {
    await pool.query("TRUNCATE TABLE chantiers RESTART IDENTITY CASCADE");
  } finally {
    await pool.end();
  }
}
