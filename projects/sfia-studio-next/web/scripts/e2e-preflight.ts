#!/usr/bin/env npx tsx
/**
 * Read-only E2E Postgres preflight. Fail-closed BEFORE any CREATE DATABASE / migrate.
 * On success: prints E2E DATABASE_URL alone on stdout (caller captures; never log it).
 * Diagnostics go to stderr without credentials.
 */
import { config } from "dotenv";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { execFileSync } from "child_process";
import {
  assertApprovedOperatorDatabaseUrl,
  assertContainerLoopbackPortMapping,
  buildE2eDatabaseUrl,
  E2E_PG_EXPECTED,
} from "../src/lib/e2e-pg-gate";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
config({ path: resolve(root, ".env.local") });

const container = process.env.SFIA_PG_CONTAINER || E2E_PG_EXPECTED.container;
const e2eDb = process.env.SFIA_E2E_DATABASE || E2E_PG_EXPECTED.e2eDatabase;

try {
  assertApprovedOperatorDatabaseUrl(process.env.DATABASE_URL);

  let portOut: string;
  try {
    portOut = execFileSync("docker", ["port", container, "5432"], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    });
  } catch {
    console.error(
      `STOP — NEXT ENVIRONMENT GATE FAILED: docker port ${container} 5432 unavailable`,
    );
    process.exit(2);
  }
  assertContainerLoopbackPortMapping(portOut, E2E_PG_EXPECTED.port);

  const built = buildE2eDatabaseUrl(process.env.DATABASE_URL!, e2eDb);
  if (built.operatorDatabase === built.e2eDatabase) {
    console.error("STOP — NEXT ENVIRONMENT GATE FAILED: target equals source");
    process.exit(2);
  }
  if (built.operatorDatabase !== E2E_PG_EXPECTED.operatorDatabase) {
    console.error("STOP — NEXT ENVIRONMENT GATE FAILED: operator DB identity mismatch");
    process.exit(2);
  }
  if (built.e2eDatabase !== E2E_PG_EXPECTED.e2eDatabase) {
    console.error("STOP — NEXT ENVIRONMENT GATE FAILED: E2E DB identity mismatch");
    process.exit(2);
  }

  console.error(
    `e2e-preflight OK: operator=${built.operatorDatabase} → e2e=${built.e2eDatabase} container=${container} port=${E2E_PG_EXPECTED.port}`,
  );
  process.stdout.write(built.e2eDatabaseUrl);
} catch (e) {
  const code = e && typeof e === "object" && "code" in e ? String((e as { code: string }).code) : "E2E_PG_GATE";
  const msg = e instanceof Error ? e.message : String(e);
  console.error(`STOP — NEXT ENVIRONMENT GATE FAILED: ${code}: ${msg}`);
  process.exit(2);
}
