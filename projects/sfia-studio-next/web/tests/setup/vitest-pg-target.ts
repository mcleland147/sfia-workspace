/**
 * Vitest setup — fail-closed Postgres target for mutative suites.
 * Runs before test files load so `@/db/client` never connects to operator DB.
 *
 * Policy:
 * - If DATABASE_URL is unset: no-op (pure unit tests stay unblocked).
 * - If set to approved operator URL: rewrite in-process to sfia_next_e2e (does not edit .env.local).
 * - If set to sfia_next_e2e: keep after assert.
 * - Otherwise: throw before any mutative import.
 */
import { config } from "dotenv";
import path from "path";
import { prepareVitestMutativeDatabaseUrl } from "@/lib/e2e-pg-gate";

config({ path: path.resolve(__dirname, "../../.env.local") });

const raw = process.env.DATABASE_URL;
if (raw != null && String(raw).trim() !== "") {
  process.env.DATABASE_URL = prepareVitestMutativeDatabaseUrl(raw);
}
