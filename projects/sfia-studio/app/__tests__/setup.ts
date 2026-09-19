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

/**
 * CR-PWR-04 — Product Create requires server-owned repository config.
 * Provide deterministic test defaults so Product-path suites remain green.
 * Tests that intentionally clear these vars must restore them in afterEach.
 */
if (!process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY?.trim()) {
  process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY = "acme/vitest-default";
}
if (!process.env.SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL?.trim()) {
  process.env.SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL =
    "https://github.com/acme/vitest-default.git";
}
if (!process.env.SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH?.trim()) {
  process.env.SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH = "main";
}
