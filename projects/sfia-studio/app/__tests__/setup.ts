import "@testing-library/jest-dom/vitest";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

/**
 * Test-harness only: Vitest fileParallelism uses separate worker processes that
 * would otherwise share the product default Nora Session SQLite file and contend
 * under concurrent writers. Assign one temp session DB per worker/process.
 * Explicit sessionDbPath arguments and intentional env overrides remain authoritative.
 */
const workerKey =
  process.env.VITEST_POOL_ID?.trim() ||
  process.env.VITEST_WORKER_ID?.trim() ||
  String(process.pid);
const sessionDir = fs.mkdtempSync(
  path.join(os.tmpdir(), `sfia-vitest-nora-session-${workerKey}-`),
);
process.env.SFIA_STUDIO_NORA_SESSION_DB_PATH = path.join(
  sessionDir,
  "nora-session.sqlite",
);
