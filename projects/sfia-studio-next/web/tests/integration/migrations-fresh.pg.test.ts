/**
 * Fresh-install migration proof on an isolated temporary Postgres container.
 * Does NOT touch sfia-next-dev-pg / sfia_next_dev / project "Test 1".
 */
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { execFileSync, execSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import postgres from "postgres";

const CONTAINER = `sfia-next-migtest-${process.pid}-${Date.now()}`;
const HOST_PORT = 55432 + (process.pid % 200);
const PASSWORD = "migtest-local-only";
const USER = "sfia_mig";
const DB = "sfia_mig";
const migrationsDir = resolve(__dirname, "../../src/db/migrations");

function dockerOk(): boolean {
  try {
    execSync("docker info", { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
}

function applySql(file: string, database = DB) {
  const sql = readFileSync(resolve(migrationsDir, file), "utf8");
  execFileSync(
    "docker",
    ["exec", "-i", CONTAINER, "psql", "-v", "ON_ERROR_STOP=1", "-U", USER, "-d", database],
    { input: sql, stdio: ["pipe", "pipe", "pipe"] },
  );
}

describe.skipIf(!dockerOk())("migrations 001→003 on fresh isolated Postgres", () => {
  let sql: ReturnType<typeof postgres> | null = null;

  beforeAll(async () => {
    execFileSync(
      "docker",
      [
        "run",
        "-d",
        "--rm",
        "--name",
        CONTAINER,
        "-e",
        `POSTGRES_USER=${USER}`,
        "-e",
        `POSTGRES_PASSWORD=${PASSWORD}`,
        "-e",
        `POSTGRES_DB=${DB}`,
        "-p",
        `127.0.0.1:${HOST_PORT}:5432`,
        "postgres:16-alpine",
      ],
      { stdio: "pipe" },
    );

    // Wait until the named DB accepts SQL (pg_isready alone can race ahead of initdb).
    const deadline = Date.now() + 90_000;
    for (;;) {
      try {
        execFileSync(
          "docker",
          [
            "exec",
            CONTAINER,
            "psql",
            "-U",
            USER,
            "-d",
            DB,
            "-v",
            "ON_ERROR_STOP=1",
            "-c",
            "SELECT 1;",
          ],
          { stdio: "pipe" },
        );
        break;
      } catch {
        if (Date.now() > deadline) {
          throw new Error(`TIMEOUT waiting for ${CONTAINER}/${DB} on :${HOST_PORT}`);
        }
        await new Promise((r) => setTimeout(r, 500));
      }
    }

    sql = postgres(`postgres://${USER}:${PASSWORD}@127.0.0.1:${HOST_PORT}/${DB}`, {
      max: 1,
    });
  }, 90_000);

  afterAll(async () => {
    await sql?.end({ timeout: 5 }).catch(() => undefined);
    try {
      execFileSync("docker", ["rm", "-f", CONTAINER], { stdio: "pipe" });
    } catch {
      /* already removed */
    }
  }, 30_000);

  it("applies 001 then 002 then 003; auth_mode + knowledge tables exist", async () => {
    applySql("001_initial_studio_core.sql");
    applySql("002_session_auth_mode.sql");
    applySql("003_ml2_knowledge_documents.sql");

    const cols = await sql!`
      SELECT column_name, column_default, is_nullable
      FROM information_schema.columns
      WHERE table_name = 'sessions' AND column_name = 'auth_mode'
    `;
    expect(cols).toHaveLength(1);
    expect(String(cols[0].column_default)).toMatch(/unknown/);
    expect(cols[0].is_nullable).toBe("NO");

    await sql!`INSERT INTO pilots (id, display_name) VALUES ('pilot_mig', 'Mig Pilot')`;
    await sql!`
      INSERT INTO users (id, name, email, email_verified, pilot_id)
      VALUES ('user_mig', 'Mig', 'mig@local', true, 'pilot_mig')
    `;
    await sql!`
      INSERT INTO sessions (id, token, user_id, expires_at, auth_mode)
      VALUES (
        'sid_mig',
        'tok_mig',
        'user_mig',
        now() + interval '1 day',
        'dev-test-login'
      )
    `;
    const rows = await sql!`SELECT auth_mode FROM sessions WHERE id = 'sid_mig'`;
    expect(rows[0].auth_mode).toBe("dev-test-login");

    const tables = await sql!`
      SELECT table_name FROM information_schema.tables
      WHERE table_schema = 'public'
        AND table_name IN ('knowledge_subjects', 'knowledge_acquis', 'knowledge_open_points')
      ORDER BY table_name
    `;
    expect(tables.map((t) => t.table_name)).toEqual([
      "knowledge_acquis",
      "knowledge_open_points",
      "knowledge_subjects",
    ]);
    const revCols = await sql!`
      SELECT column_name FROM information_schema.columns
      WHERE table_name = 'document_revisions'
        AND column_name IN ('base_revision_id', 'correlation_key', 'provenance_json')
    `;
    expect(revCols.length).toBe(3);
  });

  it("re-applying 001+002+003 is idempotent", () => {
    expect(() => applySql("001_initial_studio_core.sql")).not.toThrow();
    expect(() => applySql("002_session_auth_mode.sql")).not.toThrow();
    expect(() => applySql("003_ml2_knowledge_documents.sql")).not.toThrow();
  });

  it("controlled failure when a migration SQL is broken (ON_ERROR_STOP)", () => {
    expect(() => {
      execFileSync(
        "docker",
        ["exec", "-i", CONTAINER, "psql", "-v", "ON_ERROR_STOP=1", "-U", USER, "-d", DB],
        { input: "SELECT 1; SELECT * FROM definitely_missing_relation_xyz;", stdio: "pipe" },
      );
    }).toThrow();
  });
});
