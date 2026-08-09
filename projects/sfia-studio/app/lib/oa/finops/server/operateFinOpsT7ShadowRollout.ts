/**
 * FinOps T7 SHADOW — bounded server operator for pilot rollout OFF|SHADOW.
 *
 * Reuses FinOpsRolloutCasPort read + atomic compare-and-swap. Does NOT embed SQL.
 * Does NOT expose product UI/API. Does NOT select policy values.
 * Does NOT activate SHADOW by its mere existence — mutation only when apply=true
 * and all fail-closed guards pass, including durable CAS at write time.
 *
 * Anti-claims:
 * - SHADOW NOT ACTIVATED until a distinct Morris GO + apply on an authorized target.
 * - MONITOR / E1_ENFORCED rejected.
 * - Non-pilot projectIds rejected.
 * - Dry-run (apply=false) never mutates (zero CAS / zero upsert).
 * - Pre-read expected-mode check is diagnostic only; apply authority is CAS.
 */

import type { FinOpsRolloutConfig } from "../application/types.rollout";
import type { FinOpsRolloutCasPort } from "../ports/finopsRolloutPort";

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
 * Bounded operator core. Injectable FinOpsRolloutCasPort for unit tests.
 */
export async function operateFinOpsT7ShadowRollout(
  rollout: FinOpsRolloutCasPort,
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

  let afterRow: FinOpsRolloutConfig | null;
  try {
    // Pre-read is diagnostic only. Durable authority is atomic CAS at write time.
    afterRow = await rollout.compareAndSwapProjectRollout({
      projectId,
      expectedMode,
      expectedRevision: beforeRevision,
      mode: requestedMode,
      updatedAt,
    });
  } catch (error) {
    throw sanitizeStoreError(error);
  }

  if (!afterRow) {
    throw new OperateFinOpsT7ShadowRolloutError(
      "EXPECTED_MODE_MISMATCH",
      "FinOps T7 operator refused: durable rollout state changed before atomic mutation (CAS not matched)",
    );
  }

  // RETURNING row is the primary success proof. Do not re-read: a concurrent
  // legitimate later actor could advance revision and create a false mismatch.
  if (
    afterRow.mode !== requestedMode ||
    afterRow.revision !== expectedAfterRevision
  ) {
    throw new OperateFinOpsT7ShadowRolloutError(
      "POST_APPLY_MISMATCH",
      "FinOps T7 operator refused: CAS return did not match requested mode/revision",
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
    afterMode: afterRow.mode as FinOpsT7OperatorShadowMode,
    afterRevision: afterRow.revision,
    updatedAt: afterRow.updatedAt,
    applied: true,
    result: "applied",
  };
}
