/**
 * FinOps T7 SHADOW — thin CLI adapter for bounded pilot rollout operator.
 *
 * Usage:
 *   npm run finops:t7:rollout -- \
 *     --project sfia-studio-ops1 \
 *     --mode SHADOW|OFF \
 *     --expected-mode OFF|SHADOW \
 *     --target <explicit-label> \
 *     [--apply]
 *
 * Without --apply: dry-run (default), zero mutation.
 * With --apply: mutates via createPostgresFinOpsRolloutStore only.
 *
 * Never prints DATABASE_URL_DIRECT or credentials.
 * Pool is always closed in finally.
 */

import { Pool } from "pg";
import { T7_SHADOW_PILOT_PROJECT_ID } from "../lib/oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot";
import { createPostgresFinOpsRolloutStore } from "../lib/oa/finops/infrastructure/postgres/postgresFinOpsRolloutStore";
import {
  OperateFinOpsT7ShadowRolloutError,
  operateFinOpsT7ShadowRollout,
} from "../lib/oa/finops/server/operateFinOpsT7ShadowRollout";

type ParsedArgs = {
  projectId: string | null;
  mode: string | null;
  expectedMode: string | null;
  targetLabel: string | null;
  apply: boolean;
};

function parseArgs(argv: ReadonlyArray<string>): ParsedArgs {
  const out: ParsedArgs = {
    projectId: null,
    mode: null,
    expectedMode: null,
    targetLabel: null,
    apply: false,
  };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--apply") {
      out.apply = true;
      continue;
    }
    const next = argv[i + 1];
    if (arg === "--project" && next) {
      out.projectId = next;
      i += 1;
      continue;
    }
    if (arg === "--mode" && next) {
      out.mode = next;
      i += 1;
      continue;
    }
    if (arg === "--expected-mode" && next) {
      out.expectedMode = next;
      i += 1;
      continue;
    }
    if (arg === "--target" && next) {
      out.targetLabel = next;
      i += 1;
      continue;
    }
  }
  return out;
}

function usage(): string {
  return [
    "Usage: npm run finops:t7:rollout -- --project <id> --mode OFF|SHADOW --expected-mode OFF|SHADOW --target <label> [--apply]",
    "Dry-run is the default (omit --apply).",
  ].join("\n");
}

async function main(): Promise<void> {
  const parsed = parseArgs(process.argv.slice(2));
  if (
    !parsed.projectId ||
    !parsed.mode ||
    !parsed.expectedMode ||
    !parsed.targetLabel
  ) {
    process.stderr.write(`${usage()}\n`);
    process.exitCode = 2;
    return;
  }

  const connectionString = process.env.DATABASE_URL_DIRECT?.trim() ?? "";
  if (!connectionString) {
    process.stderr.write(
      "FinOps T7 operator refused: DATABASE_URL_DIRECT is required (value never logged)\n",
    );
    process.exitCode = 2;
    return;
  }

  const pool = new Pool({ connectionString, max: 2 });
  try {
    const store = createPostgresFinOpsRolloutStore(pool);
    const result = await operateFinOpsT7ShadowRollout(store, {
      allowedProjectId: T7_SHADOW_PILOT_PROJECT_ID,
      projectId: parsed.projectId,
      requestedMode: parsed.mode,
      expectedMode: parsed.expectedMode,
      targetLabel: parsed.targetLabel,
      apply: parsed.apply,
      nowIso: () => new Date().toISOString(),
    });
    process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
  } catch (error) {
    if (error instanceof OperateFinOpsT7ShadowRolloutError) {
      process.stderr.write(
        `${JSON.stringify({ ok: false, code: error.code, message: error.message }, null, 2)}\n`,
      );
      process.exitCode = 1;
      return;
    }
    const message =
      error && typeof error === "object" && "message" in error
        ? String((error as { message: unknown }).message)
        : "FinOps T7 operator failed";
    const redacted = message
      .replace(/postgres(ql)?:\/\/[^\s]+/gi, "postgres://[redacted]")
      .replace(/DATABASE_URL(_DIRECT)?/gi, "[redacted_env]");
    process.stderr.write(
      `${JSON.stringify({ ok: false, code: "STORE_FAILED", message: redacted }, null, 2)}\n`,
    );
    process.exitCode = 1;
  } finally {
    await pool.end().catch(() => undefined);
  }
}

void main();
