# Cycle 8 Critical — T7 SHADOW Minimal Activation Operator — Review Pack (full)

**Date/heure (CEST):** 2026-08-09 10:32 CEST
**Date/heure (UTC):** 2026-08-09 08:32 UTC
**Baseline:** SFIA v2.6
**Repo:** mcleland147/sfia-workspace
**Delivery branch (local only):** `delivery/sfia-studio-finops-t7-shadow-activation-operator`
**Delivery worktree:** `.tmp-sfia-review/worktrees/finops-t7-shadow-activation-operator`

## 1. Décision Morris

```text
GO MINIMAL SHADOW ACTIVATION MECHANISM —
BOUNDED SERVER OPERATOR COMMAND —
PILOT sfia-studio-ops1 ONLY —
MODES OFF|SHADOW ONLY —
NO PRODUCT UI/API —
NO POLICY VALUES —
SHADOW REMAINS NOT ACTIVATED UNTIL DISTINCT GO.
```

## 2. Git Truth

```text
main / origin/main = bb52624e4de6aa19a7d68205af053596bf599a1a
delivery HEAD     = bb52624e4de6aa19a7d68205af053596bf599a1a
project commit    = NONE
project push      = NONE
project PR        = NONE
```

```text
branch=delivery/sfia-studio-finops-t7-shadow-activation-operator
HEAD=bb52624e4de6aa19a7d68205af053596bf599a1a
main=bb52624e4de6aa19a7d68205af053596bf599a1a
origin_main=bb52624e4de6aa19a7d68205af053596bf599a1a
 M projects/sfia-studio/app/package-lock.json
 M projects/sfia-studio/app/package.json
?? projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-activation-operator.integration.test.ts
?? projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-activation-operator.unit.test.ts
?? projects/sfia-studio/app/lib/oa/finops/server/operateFinOpsT7ShadowRollout.ts
?? projects/sfia-studio/app/scripts/
---
 projects/sfia-studio/app/package-lock.json | 35 ++++++++++++++++++++++++++++++
 projects/sfia-studio/app/package.json      |  4 +++-
 2 files changed, 38 insertions(+), 1 deletion(-)
```

## 3. Handoff entrant

```text
branch : sfia/review-handoff
path   : sfia-review-handoff/latest-chatgpt-review.md
tip    : 4b49930f4bcd55441e0f32079e735e50dd1095b2
blob   : a7fdc56f2433cd979e25b3871595a63e7d026ee4
status : UNCHANGED at Delivery start (INPUT BASELINE OK)
```

## 4. Fichiers créés / modifiés

**CREATE**

1. `projects/sfia-studio/app/lib/oa/finops/server/operateFinOpsT7ShadowRollout.ts`
2. `projects/sfia-studio/app/scripts/finops-t7-shadow-rollout.ts`
3. `projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-activation-operator.unit.test.ts`
4. `projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-activation-operator.integration.test.ts`
5. `projects/sfia-studio/160-assistant-sfia-native-openai-finops-t7-shadow-activation-operator-execution.md`

**MODIFY**

6. `projects/sfia-studio/app/package.json`
7. `projects/sfia-studio/app/package-lock.json`


## 5. Contenu COMPLET — fichiers créés

### `projects/sfia-studio/app/lib/oa/finops/server/operateFinOpsT7ShadowRollout.ts`

```ts
/**
 * FinOps T7 SHADOW — bounded server operator for pilot rollout OFF|SHADOW.
 *
 * Reuses FinOpsRolloutPort upsert/read. Does NOT embed SQL.
 * Does NOT expose product UI/API. Does NOT select policy values.
 * Does NOT activate SHADOW by its mere existence — mutation only when apply=true
 * and all fail-closed guards pass.
 *
 * Anti-claims:
 * - SHADOW NOT ACTIVATED until a distinct Morris GO + apply on an authorized target.
 * - MONITOR / E1_ENFORCED rejected.
 * - Non-pilot projectIds rejected.
 * - Dry-run (apply=false) never mutates.
 */

import type { FinOpsRolloutConfig } from "../application/types.rollout";
import type { FinOpsRolloutPort } from "../ports/finopsRolloutPort";

export type FinOpsT7OperatorShadowMode = "OFF" | "SHADOW";

export type OperateFinOpsT7ShadowRolloutInput = {
  readonly allowedProjectId: string;
  readonly projectId: string;
  readonly requestedMode: string;
  readonly expectedMode: string;
  readonly targetLabel: string;
  /** When false (default for CLI without --apply): plan only, zero upsert. */
  readonly apply: boolean;
  readonly nowIso: () => string;
};

export type OperateFinOpsT7ShadowRolloutSuccess = {
  readonly ok: true;
  readonly targetLabel: string;
  readonly projectId: string;
  readonly requestedMode: FinOpsT7OperatorShadowMode;
  readonly expectedMode: FinOpsT7OperatorShadowMode;
  readonly beforeEffectiveMode: FinOpsT7OperatorShadowMode;
  readonly beforeRevision: number | null;
  readonly afterMode: FinOpsT7OperatorShadowMode;
  readonly afterRevision: number | null;
  readonly updatedAt: string | null;
  readonly applied: boolean;
  readonly result: "dry_run" | "applied";
};

export type OperateFinOpsT7ShadowRolloutFailureCode =
  | "INVALID_PROJECT"
  | "INVALID_MODE"
  | "INVALID_EXPECTED_MODE"
  | "INVALID_TARGET"
  | "EXPECTED_MODE_MISMATCH"
  | "NOOP_REJECTED"
  | "POST_APPLY_MISMATCH"
  | "STORE_FAILED";

export class OperateFinOpsT7ShadowRolloutError extends Error {
  readonly code: OperateFinOpsT7ShadowRolloutFailureCode;
  readonly technicalDetailsRedacted = true as const;

  constructor(code: OperateFinOpsT7ShadowRolloutFailureCode, message: string) {
    super(message);
    this.name = "OperateFinOpsT7ShadowRolloutError";
    this.code = code;
  }
}

const OPERATOR_MODES: ReadonlyArray<FinOpsT7OperatorShadowMode> = [
  "OFF",
  "SHADOW",
];

function isOperatorMode(value: string): value is FinOpsT7OperatorShadowMode {
  return (OPERATOR_MODES as ReadonlyArray<string>).includes(value);
}

function effectiveMode(
  row: FinOpsRolloutConfig | null,
): FinOpsT7OperatorShadowMode {
  if (!row) return "OFF";
  if (row.mode === "OFF" || row.mode === "SHADOW") return row.mode;
  // Persisted MONITOR/E1 is outside this operator's write set; treat as mismatch surface.
  // Callers comparing expected OFF/SHADOW against MONITOR/E1 will fail closed.
  throw new OperateFinOpsT7ShadowRolloutError(
    "EXPECTED_MODE_MISMATCH",
    `FinOps T7 operator refused: current persisted mode ${row.mode} is outside OFF|SHADOW operator scope`,
  );
}

function sanitizeStoreError(error: unknown): OperateFinOpsT7ShadowRolloutError {
  if (error instanceof OperateFinOpsT7ShadowRolloutError) {
    return error;
  }
  const message =
    error &&
    typeof error === "object" &&
    "message" in error &&
    typeof (error as { message: unknown }).message === "string"
      ? (error as { message: string }).message
      : "FinOps T7 operator store failure";
  // Never echo connection strings / credentials if a caller leaked them into Error.message.
  const redacted = message
    .replace(/postgres(ql)?:\/\/[^\s]+/gi, "postgres://[redacted]")
    .replace(/DATABASE_URL(_DIRECT)?/gi, "[redacted_env]");
  return new OperateFinOpsT7ShadowRolloutError("STORE_FAILED", redacted);
}

/**
 * Bounded operator core. Injectable FinOpsRolloutPort for unit tests.
 */
export async function operateFinOpsT7ShadowRollout(
  rollout: FinOpsRolloutPort,
  input: OperateFinOpsT7ShadowRolloutInput,
): Promise<OperateFinOpsT7ShadowRolloutSuccess> {
  const allowed = input.allowedProjectId.trim();
  const projectId = input.projectId.trim();
  const targetLabel = input.targetLabel.trim();
  const requestedRaw = input.requestedMode.trim();
  const expectedRaw = input.expectedMode.trim();

  if (!allowed || !projectId || projectId !== allowed) {
    throw new OperateFinOpsT7ShadowRolloutError(
      "INVALID_PROJECT",
      "FinOps T7 operator refused: projectId must equal the Morris-selected pilot identity",
    );
  }
  if (!targetLabel) {
    throw new OperateFinOpsT7ShadowRolloutError(
      "INVALID_TARGET",
      "FinOps T7 operator refused: --target label is required",
    );
  }
  if (!expectedRaw) {
    throw new OperateFinOpsT7ShadowRolloutError(
      "INVALID_EXPECTED_MODE",
      "FinOps T7 operator refused: --expected-mode is required",
    );
  }
  if (!isOperatorMode(requestedRaw)) {
    throw new OperateFinOpsT7ShadowRolloutError(
      "INVALID_MODE",
      "FinOps T7 operator refused: --mode must be OFF or SHADOW",
    );
  }
  if (!isOperatorMode(expectedRaw)) {
    throw new OperateFinOpsT7ShadowRolloutError(
      "INVALID_EXPECTED_MODE",
      "FinOps T7 operator refused: --expected-mode must be OFF or SHADOW",
    );
  }

  const requestedMode = requestedRaw;
  const expectedMode = expectedRaw;

  let beforeRow: FinOpsRolloutConfig | null;
  try {
    beforeRow = await rollout.readProjectRollout(projectId);
  } catch (error) {
    throw sanitizeStoreError(error);
  }

  let beforeEffectiveMode: FinOpsT7OperatorShadowMode;
  try {
    beforeEffectiveMode = effectiveMode(beforeRow);
  } catch (error) {
    throw sanitizeStoreError(error);
  }
  const beforeRevision = beforeRow ? beforeRow.revision : null;

  if (beforeEffectiveMode !== expectedMode) {
    throw new OperateFinOpsT7ShadowRolloutError(
      "EXPECTED_MODE_MISMATCH",
      `FinOps T7 operator refused: expected-mode ${expectedMode} does not match current effective mode ${beforeEffectiveMode}`,
    );
  }

  if (requestedMode === beforeEffectiveMode) {
    throw new OperateFinOpsT7ShadowRolloutError(
      "NOOP_REJECTED",
      "FinOps T7 operator refused: requested mode equals current effective mode (no-op)",
    );
  }

  if (!input.apply) {
    return {
      ok: true,
      targetLabel,
      projectId,
      requestedMode,
      expectedMode,
      beforeEffectiveMode,
      beforeRevision,
      afterMode: beforeEffectiveMode,
      afterRevision: beforeRevision,
      updatedAt: beforeRow?.updatedAt ?? null,
      applied: false,
      result: "dry_run",
    };
  }

  const updatedAt = input.nowIso();
  const expectedAfterRevision = beforeRevision === null ? 1 : beforeRevision + 1;

  let afterRow: FinOpsRolloutConfig;
  try {
    afterRow = await rollout.upsertProjectRollout({
      projectId,
      mode: requestedMode,
      updatedAt,
    });
  } catch (error) {
    throw sanitizeStoreError(error);
  }

  let verified: FinOpsRolloutConfig | null;
  try {
    verified = await rollout.readProjectRollout(projectId);
  } catch (error) {
    throw sanitizeStoreError(error);
  }

  if (
    !verified ||
    verified.mode !== requestedMode ||
    verified.revision !== expectedAfterRevision
  ) {
    throw new OperateFinOpsT7ShadowRolloutError(
      "POST_APPLY_MISMATCH",
      "FinOps T7 operator refused: post-apply read did not match requested mode/revision",
    );
  }

  if (
    afterRow.mode !== requestedMode ||
    afterRow.revision !== expectedAfterRevision
  ) {
    throw new OperateFinOpsT7ShadowRolloutError(
      "POST_APPLY_MISMATCH",
      "FinOps T7 operator refused: upsert return did not match requested mode/revision",
    );
  }

  return {
    ok: true,
    targetLabel,
    projectId,
    requestedMode,
    expectedMode,
    beforeEffectiveMode,
    beforeRevision,
    afterMode: verified.mode as FinOpsT7OperatorShadowMode,
    afterRevision: verified.revision,
    updatedAt: verified.updatedAt,
    applied: true,
    result: "applied",
  };
}
```

### `projects/sfia-studio/app/scripts/finops-t7-shadow-rollout.ts`

```ts
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
```

### `projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-activation-operator.unit.test.ts`

```ts
/**
 * @vitest-environment node
 *
 * FinOps T7 — minimal SHADOW activation operator unit tests (U01..U08).
 */
import { describe, expect, it } from "vitest";
import type { FinOpsRolloutConfig } from "@/lib/oa/finops/application/types.rollout";
import type { FinOpsRolloutPort } from "@/lib/oa/finops/ports/finopsRolloutPort";
import {
  OperateFinOpsT7ShadowRolloutError,
  operateFinOpsT7ShadowRollout,
} from "@/lib/oa/finops/server/operateFinOpsT7ShadowRollout";

const PILOT = "sfia-studio-ops1";

function memoryRollout(
  initial: FinOpsRolloutConfig | null = null,
): FinOpsRolloutPort & { upserts: number; reads: number } {
  let row = initial;
  const port = {
    upserts: 0,
    reads: 0,
    async readProjectRollout(projectId: string) {
      port.reads += 1;
      if (!projectId.trim()) return null;
      return row && row.projectId === projectId ? row : null;
    },
    async upsertProjectRollout(input: {
      projectId: string;
      mode: FinOpsRolloutConfig["mode"];
      updatedAt: string;
    }) {
      port.upserts += 1;
      const revision = row ? row.revision + 1 : 1;
      row = {
        projectId: input.projectId,
        mode: input.mode,
        revision,
        updatedAt: input.updatedAt,
      };
      return row;
    },
  };
  return port;
}

describe("T7 SHADOW activation operator — unit", () => {
  it("U01 wrong project → reject", async () => {
    const port = memoryRollout();
    await expect(
      operateFinOpsT7ShadowRollout(port, {
        allowedProjectId: PILOT,
        projectId: "other-project",
        requestedMode: "SHADOW",
        expectedMode: "OFF",
        targetLabel: "ephemeral-local",
        apply: true,
        nowIso: () => "2026-08-09T08:00:00.000Z",
      }),
    ).rejects.toMatchObject({ code: "INVALID_PROJECT" });
    expect(port.upserts).toBe(0);
  });

  it("U02 MONITOR → reject", async () => {
    const port = memoryRollout();
    await expect(
      operateFinOpsT7ShadowRollout(port, {
        allowedProjectId: PILOT,
        projectId: PILOT,
        requestedMode: "MONITOR",
        expectedMode: "OFF",
        targetLabel: "ephemeral-local",
        apply: true,
        nowIso: () => "2026-08-09T08:00:00.000Z",
      }),
    ).rejects.toMatchObject({ code: "INVALID_MODE" });
    expect(port.upserts).toBe(0);
  });

  it("U03 E1 → reject", async () => {
    const port = memoryRollout();
    await expect(
      operateFinOpsT7ShadowRollout(port, {
        allowedProjectId: PILOT,
        projectId: PILOT,
        requestedMode: "E1_ENFORCED",
        expectedMode: "OFF",
        targetLabel: "ephemeral-local",
        apply: true,
        nowIso: () => "2026-08-09T08:00:00.000Z",
      }),
    ).rejects.toMatchObject({ code: "INVALID_MODE" });
    expect(port.upserts).toBe(0);
  });

  it("U04 missing expected-mode → reject", async () => {
    const port = memoryRollout();
    await expect(
      operateFinOpsT7ShadowRollout(port, {
        allowedProjectId: PILOT,
        projectId: PILOT,
        requestedMode: "SHADOW",
        expectedMode: "   ",
        targetLabel: "ephemeral-local",
        apply: false,
        nowIso: () => "2026-08-09T08:00:00.000Z",
      }),
    ).rejects.toMatchObject({ code: "INVALID_EXPECTED_MODE" });
    expect(port.upserts).toBe(0);
  });

  it("U05 dry-run → zero mutation", async () => {
    const port = memoryRollout();
    const result = await operateFinOpsT7ShadowRollout(port, {
      allowedProjectId: PILOT,
      projectId: PILOT,
      requestedMode: "SHADOW",
      expectedMode: "OFF",
      targetLabel: "ephemeral-local",
      apply: false,
      nowIso: () => "2026-08-09T08:00:00.000Z",
    });
    expect(result.result).toBe("dry_run");
    expect(result.applied).toBe(false);
    expect(result.afterMode).toBe("OFF");
    expect(port.upserts).toBe(0);
  });

  it("U06 current != expected → reject", async () => {
    const port = memoryRollout({
      projectId: PILOT,
      mode: "SHADOW",
      revision: 1,
      updatedAt: "2026-08-09T07:00:00.000Z",
    });
    await expect(
      operateFinOpsT7ShadowRollout(port, {
        allowedProjectId: PILOT,
        projectId: PILOT,
        requestedMode: "OFF",
        expectedMode: "OFF",
        targetLabel: "ephemeral-local",
        apply: true,
        nowIso: () => "2026-08-09T08:00:00.000Z",
      }),
    ).rejects.toMatchObject({ code: "EXPECTED_MODE_MISMATCH" });
    expect(port.upserts).toBe(0);
  });

  it("U07 current == requested target → reject/no revision bump", async () => {
    const port = memoryRollout({
      projectId: PILOT,
      mode: "SHADOW",
      revision: 2,
      updatedAt: "2026-08-09T07:00:00.000Z",
    });
    await expect(
      operateFinOpsT7ShadowRollout(port, {
        allowedProjectId: PILOT,
        projectId: PILOT,
        requestedMode: "SHADOW",
        expectedMode: "SHADOW",
        targetLabel: "ephemeral-local",
        apply: true,
        nowIso: () => "2026-08-09T08:00:00.000Z",
      }),
    ).rejects.toMatchObject({ code: "NOOP_REJECTED" });
    expect(port.upserts).toBe(0);
  });

  it("U08 DB error → sanitized failure", async () => {
    const port: FinOpsRolloutPort = {
      async readProjectRollout() {
        throw new Error(
          "connect ECONNREFUSED postgres://sfia_ci:secret@127.0.0.1:5432/db DATABASE_URL_DIRECT",
        );
      },
      async upsertProjectRollout() {
        throw new Error("should not upsert");
      },
    };
    try {
      await operateFinOpsT7ShadowRollout(port, {
        allowedProjectId: PILOT,
        projectId: PILOT,
        requestedMode: "SHADOW",
        expectedMode: "OFF",
        targetLabel: "ephemeral-local",
        apply: false,
        nowIso: () => "2026-08-09T08:00:00.000Z",
      });
      expect.unreachable("expected throw");
    } catch (error) {
      expect(error).toBeInstanceOf(OperateFinOpsT7ShadowRolloutError);
      const err = error as OperateFinOpsT7ShadowRolloutError;
      expect(err.code).toBe("STORE_FAILED");
      expect(err.message).not.toMatch(/secret/);
      expect(err.message).not.toMatch(/postgres:\/\/sfia_ci/);
      expect(err.message).toMatch(/\[redacted\]/);
    }
  });

  it("apply OFF→SHADOW succeeds with revision 1", async () => {
    const port = memoryRollout();
    const result = await operateFinOpsT7ShadowRollout(port, {
      allowedProjectId: PILOT,
      projectId: PILOT,
      requestedMode: "SHADOW",
      expectedMode: "OFF",
      targetLabel: "ephemeral-local",
      apply: true,
      nowIso: () => "2026-08-09T08:00:00.000Z",
    });
    expect(result).toMatchObject({
      applied: true,
      result: "applied",
      beforeEffectiveMode: "OFF",
      beforeRevision: null,
      afterMode: "SHADOW",
      afterRevision: 1,
    });
    expect(port.upserts).toBe(1);
  });
});
```

### `projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-activation-operator.integration.test.ts`

```ts
/**
 * @vitest-environment node
 *
 * FinOps T7 — minimal SHADOW activation operator PostgreSQL integration (PG01..PG07).
 * Ephemeral local Postgres only — never Neon / shared / production.
 */
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import type { Pool } from "pg";
import {
  closeFinOpsPool,
  createFinOpsPool,
} from "@/lib/oa/finops/infrastructure/postgres/createFinOpsPool";
import { createPostgresFinOpsRolloutStore } from "@/lib/oa/finops/infrastructure/postgres/postgresFinOpsRolloutStore";
import {
  OperateFinOpsT7ShadowRolloutError,
  operateFinOpsT7ShadowRollout,
} from "@/lib/oa/finops/server/operateFinOpsT7ShadowRollout";

const DATABASE_URL = process.env.DATABASE_URL?.trim() ?? "";
const describeDb = DATABASE_URL ? describe : describe.skip;

const PILOT = "sfia-studio-ops1";

describeDb("T7 SHADOW activation operator — PostgreSQL", () => {
  let pool: Pool;
  const store = () => createPostgresFinOpsRolloutStore(pool);

  beforeAll(async () => {
    pool = createFinOpsPool({ connectionString: DATABASE_URL, max: 4 });
    await pool.query(`DELETE FROM finops_rollout_config WHERE project_id = $1`, [
      PILOT,
    ]);
  });

  afterAll(async () => {
    try {
      await pool.query(
        `DELETE FROM finops_rollout_config WHERE project_id = $1`,
        [PILOT],
      );
    } catch {
      // ignore
    }
    await closeFinOpsPool(pool);
  });

  it("PG01 absent/effective OFF → SHADOW → revision 1", async () => {
    await pool.query(`DELETE FROM finops_rollout_config WHERE project_id = $1`, [
      PILOT,
    ]);
    const result = await operateFinOpsT7ShadowRollout(store(), {
      allowedProjectId: PILOT,
      projectId: PILOT,
      requestedMode: "SHADOW",
      expectedMode: "OFF",
      targetLabel: "ephemeral-local",
      apply: true,
      nowIso: () => "2026-08-09T08:10:00.000Z",
    });
    expect(result.afterMode).toBe("SHADOW");
    expect(result.afterRevision).toBe(1);
    expect(result.beforeRevision).toBeNull();
  });

  it("PG02 SHADOW → OFF → revision 2", async () => {
    const result = await operateFinOpsT7ShadowRollout(store(), {
      allowedProjectId: PILOT,
      projectId: PILOT,
      requestedMode: "OFF",
      expectedMode: "SHADOW",
      targetLabel: "ephemeral-local",
      apply: true,
      nowIso: () => "2026-08-09T08:11:00.000Z",
    });
    expect(result.afterMode).toBe("OFF");
    expect(result.afterRevision).toBe(2);
    expect(result.beforeRevision).toBe(1);
  });

  it("PG03 before/after read exact", async () => {
    // Ensure known SHADOW revision 3 from OFF@2
    await operateFinOpsT7ShadowRollout(store(), {
      allowedProjectId: PILOT,
      projectId: PILOT,
      requestedMode: "SHADOW",
      expectedMode: "OFF",
      targetLabel: "ephemeral-local",
      apply: true,
      nowIso: () => "2026-08-09T08:12:00.000Z",
    });
    const row = await store().readProjectRollout(PILOT);
    expect(row).toEqual({
      projectId: PILOT,
      mode: "SHADOW",
      revision: 3,
      updatedAt: expect.any(String),
    });
  });

  it("PG04 wrong expected mode → zero mutation", async () => {
    const before = await store().readProjectRollout(PILOT);
    await expect(
      operateFinOpsT7ShadowRollout(store(), {
        allowedProjectId: PILOT,
        projectId: PILOT,
        requestedMode: "OFF",
        expectedMode: "OFF",
        targetLabel: "ephemeral-local",
        apply: true,
        nowIso: () => "2026-08-09T08:13:00.000Z",
      }),
    ).rejects.toMatchObject({ code: "EXPECTED_MODE_MISMATCH" });
    const after = await store().readProjectRollout(PILOT);
    expect(after).toEqual(before);
  });

  it("PG05 non-pilot → zero mutation", async () => {
    const before = await store().readProjectRollout(PILOT);
    await expect(
      operateFinOpsT7ShadowRollout(store(), {
        allowedProjectId: PILOT,
        projectId: "not-the-pilot",
        requestedMode: "OFF",
        expectedMode: "SHADOW",
        targetLabel: "ephemeral-local",
        apply: true,
        nowIso: () => "2026-08-09T08:14:00.000Z",
      }),
    ).rejects.toMatchObject({ code: "INVALID_PROJECT" });
    const after = await store().readProjectRollout(PILOT);
    expect(after).toEqual(before);
    const stray = await store().readProjectRollout("not-the-pilot");
    expect(stray).toBeNull();
  });

  it("PG06 dry-run → zero mutation", async () => {
    const before = await store().readProjectRollout(PILOT);
    const result = await operateFinOpsT7ShadowRollout(store(), {
      allowedProjectId: PILOT,
      projectId: PILOT,
      requestedMode: "OFF",
      expectedMode: "SHADOW",
      targetLabel: "ephemeral-local",
      apply: false,
      nowIso: () => "2026-08-09T08:15:00.000Z",
    });
    expect(result.applied).toBe(false);
    expect(result.result).toBe("dry_run");
    const after = await store().readProjectRollout(PILOT);
    expect(after).toEqual(before);
  });

  it("PG07 repeated store semantics remain compatible", async () => {
    // Rollback OFF then SHADOW again — revisions continue monotonically.
    const off = await operateFinOpsT7ShadowRollout(store(), {
      allowedProjectId: PILOT,
      projectId: PILOT,
      requestedMode: "OFF",
      expectedMode: "SHADOW",
      targetLabel: "ephemeral-local",
      apply: true,
      nowIso: () => "2026-08-09T08:16:00.000Z",
    });
    expect(off.afterMode).toBe("OFF");
    expect(off.afterRevision).toBe(4);

    const shadow = await operateFinOpsT7ShadowRollout(store(), {
      allowedProjectId: PILOT,
      projectId: PILOT,
      requestedMode: "SHADOW",
      expectedMode: "OFF",
      targetLabel: "ephemeral-local",
      apply: true,
      nowIso: () => "2026-08-09T08:17:00.000Z",
    });
    expect(shadow.afterMode).toBe("SHADOW");
    expect(shadow.afterRevision).toBe(5);

    // Final rollback OFF for cleanup hygiene
    const finalOff = await operateFinOpsT7ShadowRollout(store(), {
      allowedProjectId: PILOT,
      projectId: PILOT,
      requestedMode: "OFF",
      expectedMode: "SHADOW",
      targetLabel: "ephemeral-local",
      apply: true,
      nowIso: () => "2026-08-09T08:18:00.000Z",
    });
    expect(finalOff.afterMode).toBe("OFF");
    expect(finalOff.afterRevision).toBe(6);
  });

  it("operator error type is exportable for CLI", () => {
    expect(OperateFinOpsT7ShadowRolloutError.name).toBe(
      "OperateFinOpsT7ShadowRolloutError",
    );
  });
});
```

### `projects/sfia-studio/160-assistant-sfia-native-openai-finops-t7-shadow-activation-operator-execution.md`

```md
# 160 — FinOps T7 SHADOW Minimal Activation Operator — Execution Record

**Project:** SFIA Studio — Assistant SFIA natif OpenAI
**Document:** `projects/sfia-studio/160-assistant-sfia-native-openai-finops-t7-shadow-activation-operator-execution.md`
**Cycle:** 8 — Delivery / implémentation
**Profil:** Critical
**Typologie:** EVOL / CODE / TEST / DOC
**Baseline:** SFIA v2.6
**Date (CEST):** 2026-08-09 10:32 CEST
**Date (UTC):** 2026-08-09 08:32 UTC

---

## A. Status / anti-claims

| Claim | Status |
|-------|--------|
| Bounded server operator command delivered locally | **TRUE** |
| Dry-run default (no `--apply`) | **TRUE** |
| Pilot `sfia-studio-ops1` only | **TRUE** |
| Modes OFF \| SHADOW only | **TRUE** |
| `--expected-mode` fail-closed | **TRUE** |
| Existing `postgresFinOpsRolloutStore` reused (no SQL copy) | **TRUE** |
| Local ephemeral apply + rollback OFF proven | **TRUE** |
| Product UI / API / routes / server actions | **FALSE** |
| Policy values selected | **FALSE** |
| Real / shared / Neon / production target selected | **FALSE** |
| SHADOW activated (authorized target) | **FALSE** |
| MONITOR / E1_ENFORCED accepted | **FALSE** |
| Project commit / push / PR | **FALSE** |

```text
T7 SHADOW MINIMAL ACTIVATION OPERATOR DELIVERED —
BOUNDED COMMAND READY —
PILOT sfia-studio-ops1 ONLY —
MODES OFF|SHADOW ONLY —
EXPECTED-MODE FAIL-CLOSED —
DRY-RUN DEFAULT —
EXISTING ATOMIC STORE REUSED —
LOCAL EPHEMERAL APPLY/ROLLBACK PASS —
NO PRODUCT UI/API —
POLICY VALUES NOT SELECTED —
NO REAL TARGET SELECTED —
SHADOW NOT ACTIVATED —
NO PROJECT COMMIT/PUSH/PR
```

---

## B. Morris decision

> GO MINIMAL SHADOW ACTIVATION MECHANISM —
> BOUNDED SERVER OPERATOR COMMAND —
> PILOT sfia-studio-ops1 ONLY —
> MODES OFF|SHADOW ONLY —
> NO PRODUCT UI/API —
> NO POLICY VALUES —
> SHADOW REMAINS NOT ACTIVATED UNTIL DISTINCT GO.

---

## C. Files create / modify

**CREATE**

1. `projects/sfia-studio/app/lib/oa/finops/server/operateFinOpsT7ShadowRollout.ts`
2. `projects/sfia-studio/app/scripts/finops-t7-shadow-rollout.ts`
3. `projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-activation-operator.unit.test.ts`
4. `projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-activation-operator.integration.test.ts`
5. `projects/sfia-studio/160-assistant-sfia-native-openai-finops-t7-shadow-activation-operator-execution.md`

**MODIFY**

6. `projects/sfia-studio/app/package.json` — script `finops:t7:rollout` + `tsx` **devDependency**
7. `projects/sfia-studio/app/package-lock.json` — lock `tsx@4.23.11` (dev)

---

## D. Architecture

```text
CLI scripts/finops-t7-shadow-rollout.ts
  → parseArgs (--project/--mode/--expected-mode/--target/[--apply])
  → Pool(DATABASE_URL_DIRECT)  // never logged
  → createPostgresFinOpsRolloutStore(pool)
  → operateFinOpsT7ShadowRollout(store, {
       allowedProjectId: T7_SHADOW_PILOT_PROJECT_ID,
       ...
     })
  → finally pool.end()

operateFinOpsT7ShadowRollout (testable core)
  → FinOpsRolloutPort.readProjectRollout
  → guards (project / mode / expected / noop)
  → apply=false → dry_run (zero upsert)
  → apply=true  → FinOpsRolloutPort.upsertProjectRollout ONLY
  → post-read mode + revision verify
```

- Does **not** expose upsert via `composeFinOpsT7Runtime`.
- Does **not** copy UPSERT SQL into the command.
- Does **not** modify `composeExecutionRunD2D3T7ShadowPilot` (imports constant only).

---

## E. Runner

| Option | Outcome |
|--------|---------|
| Existing dedicated TS runner in package.json | **None discovered** |
| Retained | **`tsx` as devDependency** + script `finops:t7:rollout` |
| Runtime dependency | **No** (`tsx_prod=false`) |
| `npx` unlocked download | **Forbidden / not used** |

---

## F. CLI contract

```bash
npm run finops:t7:rollout -- \
  --project sfia-studio-ops1 \
  --mode SHADOW|OFF \
  --expected-mode OFF|SHADOW \
  --target <explicit-label> \
  [--apply]
```

- Without `--apply`: dry-run, success, zero mutation.
- With `--apply`: mutation allowed **only** on local/ephemeral DB for this Delivery proof.
- Cycle constraint: never against Neon / shared staging / shared dev / production.

---

## G. Tests / proofs

| Suite | Result |
|-------|--------|
| Unit U01–U08 (+ apply happy path) | **9/9 PASS** |
| PG PG01–PG07 (+ exportable error type) | **8/8 PASS** |
| `npm run typecheck` | **PASS** |
| `npm run lint` | **PASS** |
| `npm run build` | **PASS** |
| `git diff --check` | **PASS** |
| CLI dry-run | **PASS** (`applied:false`, `result:dry_run`) |
| CLI apply SHADOW (ephemeral) | **PASS** (revision 1) |
| CLI rollback OFF (ephemeral) | **PASS** (revision 2) |
| Guards project/MONITOR/E1 | **PASS** (exit 1) |
| Secret redaction | **PASS** (`SECRET_LEAK=NO`) |

Full regression: **not launched** (tooling impact limited to locked `tsx` devDep; no product surface change).

---

## H. Residual / next

- SHADOW remains **NOT ACTIVATED** on any authorized real target.
- Policy values remain **NOT SELECTED**.
- Activation target remains **NOT SELECTED**.
- Ready for **targeted Cycle 9 QA** of this operator (still no real activation without distinct Morris GO).
```


## 6. Diffs utiles — fichiers modifiés

### `projects/sfia-studio/app/package.json`

```diff
diff --git a/projects/sfia-studio/app/package.json b/projects/sfia-studio/app/package.json
index 57afc28..681c6a6 100644
--- a/projects/sfia-studio/app/package.json
+++ b/projects/sfia-studio/app/package.json
@@ -14,7 +14,8 @@
     "test:e2e": "playwright test",
     "test:db": "vitest run __tests__/oa/finops/postgres",
     "migrate:up": "node-pg-migrate up --migrations-dir db/migrations --database-url-var DATABASE_URL_DIRECT",
-    "migrate:down": "node-pg-migrate down --migrations-dir db/migrations --database-url-var DATABASE_URL_DIRECT"
+    "migrate:down": "node-pg-migrate down --migrations-dir db/migrations --database-url-var DATABASE_URL_DIRECT",
+    "finops:t7:rollout": "tsx scripts/finops-t7-shadow-rollout.ts"
   },
   "dependencies": {
     "ajv": "^6.15.0",
@@ -38,6 +39,7 @@
     "eslint-config-next": "^15.3.3",
     "jsdom": "^26.1.0",
     "node-pg-migrate": "^8.0.4",
+    "tsx": "^4.20.5",
     "typescript": "^5.8.3",
     "vitest": "^3.1.2"
   }
```

### `projects/sfia-studio/app/package-lock.json`

```diff
 projects/sfia-studio/app/package-lock.json | 35 ++++++++++++++++++++++++++++++
1 file changed, 35 insertions(+)

Relevant hunk (tsx locked as dev):
+        "tsx": "^4.23.11",
...
+    "node_modules/tsx": {
+      "version": "4.23.11",
+      "resolved": "https://registry.npmjs.org/tsx/-/tsx-4.23.11.tgz",
+      "integrity": "sha512-Ry2oTEUnhBdeEdWIztY8kf3/nBGnPnjMLVGL0YfdRXMORuPER5NlKmayqxtxRxwB1xBN+RivRaJfe7PM1rtiyw==",
+      "dev": true,
...
```

## 7. Runner retenu + justification

- Discovery: `package.json` had **no** dedicated TypeScript runner script for ad-hoc scripts.
- Retained: add **`tsx` as `devDependency` only** (`^4.20.5`, lock resolved `4.23.11`) + script:
  - `"finops:t7:rollout": "tsx scripts/finops-t7-shadow-rollout.ts"`
- Justification: stable, lockfile-pinned local binary; avoids unlocked `npx` download; does not become a runtime dependency (`tsx_prod=false`).
- Alternatives rejected: duplicating UPSERT SQL; new CLI framework; promoting `tsx` to `dependencies`.


## 8. Contrat CLI exact

```bash
npm run finops:t7:rollout -- \
  --project sfia-studio-ops1 \
  --mode SHADOW|OFF \
  --expected-mode OFF|SHADOW \
  --target <explicit-label> \
  [--apply]

# Without --apply: DRY-RUN (default) — plan JSON, zero upsert, exit 0
# With --apply: mutate via createPostgresFinOpsRolloutStore(...).upsertProjectRollout only
# Requires DATABASE_URL_DIRECT (never logged)
# Pool closed in finally
```

## 9. Tests / résultats

### Unit

```text

 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t7-shadow-activation-operator/projects/sfia-studio/app

 ✓ __tests__/oa/finops/t7.shadow-activation-operator.unit.test.ts (9 tests) 14ms

 Test Files  1 passed (1)
      Tests  9 passed (9)
   Start at  10:27:44
   Duration  1.68s (transform 189ms, setup 230ms, collect 89ms, tests 14ms, environment 0ms, prepare 196ms)

UNIT_EXIT=
```

### PostgreSQL ephemeral

```text

 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t7-shadow-activation-operator/projects/sfia-studio/app

 ✓ __tests__/oa/finops/postgres/t7.shadow-activation-operator.integration.test.ts (8 tests) 221ms

 Test Files  1 passed (1)
      Tests  8 passed (8)
   Start at  10:27:48
   Duration  2.28s (transform 468ms, setup 463ms, collect 266ms, tests 221ms, environment 0ms, prepare 198ms)

PG_EXIT=
```

### typecheck / lint / build / diff-check

```text
typecheck: PASS (TC_EXIT=0)
lint: PASS (LINT_EXIT=0) — after prefer-as-const fix
build: PASS (BUILD_EXIT=0)
git diff --check: PASS (DIFF_EXIT=0)

--- typecheck-recheck ---

> sfia-studio@0.1.0 typecheck
> tsc --noEmit

TC_EXIT=0


--- lint-recheck ---

> sfia-studio@0.1.0 lint
> next lint

`next lint` is deprecated and will be removed in Next.js 16.
For new projects, use create-next-app to choose your preferred linter.
For existing projects, migrate to the ESLint CLI:
npx @next/codemod@canary next-lint-to-eslint-cli .

✔ No ESLint warnings or errors
LINT_EXIT=0


--- build-recheck (tail) ---
> sfia-studio@0.1.0 build
> next build

   ▲ Next.js 15.5.20

   Creating an optimized production build ...
 ✓ Compiled successfully in 7.7s
   Linting and checking validity of types ...
   Collecting page data ...
   Generating static pages (0/10) ...
   Generating static pages (2/10)
   Generating static pages (4/10)
   Generating static pages (7/10)
 ✓ Generating static pages (10/10)
   Finalizing page optimization ...
   Collecting build traces ...

Route (app)                                 Size  First Load JS
┌ ○ /                                      127 B         103 kB
├ ○ /_not-found                            127 B         103 kB
├ ○ /cycle-actif                         3.82 kB         119 kB
├ ○ /decision                            5.53 kB         121 kB
├ ƒ /nouvelle-demande                    10.1 kB         116 kB
├ ○ /ops1/nouvelle-demande               18.5 kB         133 kB
├ ƒ /projects/[id]                       2.65 kB         108 kB
├ ○ /projects/new                        2.63 kB         108 kB
├ ƒ /studio/projects/[id]                2.15 kB         112 kB
├ ○ /studio/projects/new                 4.07 kB         114 kB
├ ○ /synthese                            4.84 kB         120 kB
└ ƒ /workspace                             572 B         106 kB
+ First Load JS shared by all             102 kB
  ├ chunks/255-3981a3d1f3561bd8.js       46.2 kB
  ├ chunks/4bd1b696-c023c6e3521b1417.js  54.2 kB
  └ other shared chunks (total)          1.96 kB


○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand

BUILD_EXIT=0

--- diff-check-recheck ---
DIFF_EXIT=0
```

## 10. Dry-run proof

```text

> sfia-studio@0.1.0 finops:t7:rollout
> tsx scripts/finops-t7-shadow-rollout.ts --project sfia-studio-ops1 --mode SHADOW --expected-mode OFF --target local-ephemeral-cycle8-proof

{
  "ok": true,
  "targetLabel": "local-ephemeral-cycle8-proof",
  "projectId": "sfia-studio-ops1",
  "requestedMode": "SHADOW",
  "expectedMode": "OFF",
  "beforeEffectiveMode": "OFF",
  "beforeRevision": null,
  "afterMode": "OFF",
  "afterRevision": null,
  "updatedAt": null,
  "applied": false,
  "result": "dry_run"
}
DRY_EXIT=0
```

## 11. Apply + rollback local ephemeral proof

### Apply SHADOW

```text

> sfia-studio@0.1.0 finops:t7:rollout
> tsx scripts/finops-t7-shadow-rollout.ts --project sfia-studio-ops1 --mode SHADOW --expected-mode OFF --target local-ephemeral-cycle8-proof --apply

{
  "ok": true,
  "targetLabel": "local-ephemeral-cycle8-proof",
  "projectId": "sfia-studio-ops1",
  "requestedMode": "SHADOW",
  "expectedMode": "OFF",
  "beforeEffectiveMode": "OFF",
  "beforeRevision": null,
  "afterMode": "SHADOW",
  "afterRevision": 1,
  "updatedAt": "2026-08-09T08:29:43.056Z",
  "applied": true,
  "result": "applied"
}
APPLY_EXIT=0
```

### Rollback OFF

```text

> sfia-studio@0.1.0 finops:t7:rollout
> tsx scripts/finops-t7-shadow-rollout.ts --project sfia-studio-ops1 --mode OFF --expected-mode SHADOW --target local-ephemeral-cycle8-rollback --apply

{
  "ok": true,
  "targetLabel": "local-ephemeral-cycle8-rollback",
  "projectId": "sfia-studio-ops1",
  "requestedMode": "OFF",
  "expectedMode": "SHADOW",
  "beforeEffectiveMode": "SHADOW",
  "beforeRevision": 1,
  "afterMode": "OFF",
  "afterRevision": 2,
  "updatedAt": "2026-08-09T08:29:44.338Z",
  "applied": true,
  "result": "applied"
}
ROLLBACK_EXIT=0
```

### Final ephemeral row

```text
    project_id    | mode | revision
------------------+------+----------
 sfia-studio-ops1 | OFF  |        2
(1 row)
```

Note: final row `OFF` revision `2` is **local ephemeral Docker only** (`127.0.0.1:55446`). Not Neon/shared/prod. SHADOW on authorized real target remains **NOT ACTIVATED**.

## 12. Secret-redaction proof

```text

> sfia-studio@0.1.0 finops:t7:rollout
> tsx scripts/finops-t7-shadow-rollout.ts --project sfia-studio-ops1 --mode SHADOW --expected-mode OFF --target secret-redaction-proof

{
  "ok": false,
  "code": "STORE_FAILED",
  "message": "FinOps capture failed"
}
SEC_EXIT=0
SECRET_LEAK=NO
```

Unit U08 also asserts connection-string / password redaction in operator errors.

## 13. Project / mode guard proofs

```text
--- wrong project ---

> sfia-studio@0.1.0 finops:t7:rollout
> tsx scripts/finops-t7-shadow-rollout.ts --project other --mode SHADOW --expected-mode OFF --target x

{
  "ok": false,
  "code": "INVALID_PROJECT",
  "message": "FinOps T7 operator refused: projectId must equal the Morris-selected pilot identity"
}
GP=0

GUARD_PROJECT_EXIT=1

--- MONITOR ---

> sfia-studio@0.1.0 finops:t7:rollout
> tsx scripts/finops-t7-shadow-rollout.ts --project sfia-studio-ops1 --mode MONITOR --expected-mode OFF --target x

{
  "ok": false,
  "code": "INVALID_MODE",
  "message": "FinOps T7 operator refused: --mode must be OFF or SHADOW"
}
GM=0

GUARD_MONITOR_EXIT=1

--- E1_ENFORCED ---

> sfia-studio@0.1.0 finops:t7:rollout
> tsx scripts/finops-t7-shadow-rollout.ts --project sfia-studio-ops1 --mode E1_ENFORCED --expected-mode OFF --target x

{
  "ok": false,
  "code": "INVALID_MODE",
  "message": "FinOps T7 operator refused: --mode must be OFF or SHADOW"
}
GE=0
```

## 14. No real target access / no activation / policy values

```text
NO Neon
NO production
NO shared staging
NO shared dev DB
NO real provider
Apply/rollback used localhost ephemeral Postgres container only (sfia-t7-op-pg / 127.0.0.1:55446)

POLICY VALUES = NOT SELECTED
ACTIVATION TARGET = NOT SELECTED
SHADOW = NOT ACTIVATED (no authorized real-target apply; ephemeral proof rolled back to OFF)
```

## 15. Réserves

- Operator is delivery-local (uncommitted on project branch) until a future merge GO.
- `tsx` is a new locked **devDependency**; full suite regression not required by cycle rules for this bounded tooling add, but Cycle 9 QA should re-run targeted operator suites.
- Prior open reserves remain: `R-QA-T7-C08-SCENARIO-01` (OPEN MINOR), `R-T4-T3-SYNC-01` (OPEN BEFORE MONITOR) — out of scope for this operator Delivery.
- Ephemeral Docker container used for proofs should be removed after cycle evidence capture (local only).


## 16. Verdict

```text
T7 SHADOW MINIMAL ACTIVATION OPERATOR DELIVERED —
CYCLE 8 CRITICAL —
BOUNDED COMMAND READY —
PILOT sfia-studio-ops1 ONLY —
MODES OFF|SHADOW ONLY —
EXPECTED-MODE FAIL-CLOSED —
DRY-RUN DEFAULT —
EXISTING ATOMIC STORE REUSED —
LOCAL EPHEMERAL APPLY/ROLLBACK PASS —
NO PRODUCT UI/API —
NO POLICY VALUES —
NO REAL TARGET SELECTED —
SHADOW NOT ACTIVATED —
NO PROJECT COMMIT/PUSH/PR —
READY FOR TARGETED CYCLE 9 QA —
HANDOFF REMOTE VERIFIED
```
