import { createOfficialEvidence, canSucceed } from "../domain/evidence";
import { decideTransition, type TransitionReason } from "../domain/transitions";
import { canAcceptLateResult } from "../domain/invariants";
import { normalizedFailure } from "../domain/errors";
import type {
  Completeness,
  ExecutionRun,
  ExternalResult,
  NormalizedFailure,
} from "../domain/types";
import type { ClockPort } from "../ports/clockPort";
import type { IdentityPort } from "../ports/identityPort";
import type { ExecutionRunRepositoryPort } from "../ports/executionRunRepository";
import type { ExecutionRunSchemaValidationPort } from "../ports/executionRunSchemaValidation";
import { persistExecutionRunInternal } from "./internal/persistExecutionRunInternal";

export type TransitionExecutionRunInput = {
  runId: string;
  reason: TransitionReason;
  completeness?: Completeness;
  externalResult?: ExternalResult;
  failure?: NormalizedFailure;
  blockingReason?: string;
  lateEvidenceSummary?: string;
};

export type TransitionExecutionRunResult =
  | { ok: true; run: ExecutionRun }
  | { ok: false; failure: NormalizedFailure; run?: ExecutionRun };

function targetForReason(
  reason: TransitionReason,
): ExecutionRun["state"] | null {
  switch (reason) {
    case "intent_valid":
      return "running";
    case "pre_engagement_block":
      return "blocked";
    case "human_gate_required":
      return "awaiting_human";
    case "outputs_validated":
      return "succeeded";
    case "engaged_operation_failed":
      return "failed";
    case "time_limit":
    case "human_gate_expired":
      return "timed_out";
    case "cancel_accepted":
    case "human_cancel":
      return "cancelled";
    case "human_approve":
      return "running";
    case "human_reject_or_unsatisfied":
      return "blocked";
    default:
      return null;
  }
}

/**
 * Untrusted boundary: validates TransitionExecutionRunInput before metadata access
 * or repository lookup.
 */
export async function transitionExecutionRun(
  input: unknown,
  deps: {
    clock: ClockPort;
    identity: IdentityPort;
    repository: ExecutionRunRepositoryPort;
    schemas: ExecutionRunSchemaValidationPort;
  },
): Promise<TransitionExecutionRunResult> {
  const boundary = await deps.schemas.validate(
    "transition-execution-run-input",
    input,
  );
  if (!boundary.ok) {
    return {
      ok: false,
      failure: normalizedFailure({
        family: "validation",
        code: "VALIDATION_ERROR",
        userMessage: "Transition execution run input failed schema validation",
        retryable: true,
        correlationId: "unknown",
      }),
    };
  }

  const validated = input as TransitionExecutionRunInput;

  const existing = await deps.repository.getById(validated.runId);
  if (!existing) {
    return {
      ok: false,
      failure: normalizedFailure({
        family: "validation",
        code: "VALIDATION_ERROR",
        userMessage: "Execution run not found",
        retryable: false,
        correlationId: "unknown",
      }),
    };
  }

  if (validated.reason === "late_result_evidence_only") {
    if (!canAcceptLateResult(existing.state)) {
      return {
        ok: false,
        failure: normalizedFailure({
          family: "validation",
          code: "VALIDATION_ERROR",
          userMessage:
            "Late result evidence accepted only for cancelled, timed_out, or failed runs",
          retryable: false,
          correlationId: existing.correlationId,
        }),
        run: existing,
      };
    }

    const summary = validated.lateEvidenceSummary ?? "late_result_redacted";
    const evidence = createOfficialEvidence({
      evidenceId: deps.identity.nextEvidenceId(),
      runId: existing.runId,
      correlationId: existing.correlationId,
      source: existing.disclosure.source,
      completeness: "partial",
      producedAt: deps.clock.nowIso(),
      summary,
      late: true,
    });

    const evidenceSchema = await deps.schemas.validate(
      "execution-evidence",
      evidence,
    );
    if (!evidenceSchema.ok) {
      return {
        ok: false,
        failure: normalizedFailure({
          family: "validation",
          code: "VALIDATION_ERROR",
          userMessage: "Late evidence failed schema validation",
          retryable: false,
          correlationId: existing.correlationId,
        }),
        run: existing,
      };
    }

    const updated: ExecutionRun = {
      ...existing,
      updatedAt: deps.clock.nowIso(),
      version: existing.version + 1,
      evidence: [...(existing.evidence ?? []), evidence],
    };
    const persisted = await persistExecutionRunInternal(updated, deps);
    if (!persisted.ok) {
      return { ok: false, failure: persisted.failure, run: existing };
    }
    return { ok: true, run: updated };
  }

  const to = targetForReason(validated.reason);
  if (!to) {
    return {
      ok: false,
      failure: normalizedFailure({
        family: "validation",
        code: "VALIDATION_ERROR",
        userMessage: "Unknown transition reason",
        retryable: false,
        correlationId: existing.correlationId,
      }),
      run: existing,
    };
  }

  const decision = decideTransition({
    from: existing.state,
    to,
    reason: validated.reason,
    completeness: validated.completeness,
  });
  if (!decision.allowed) {
    return {
      ok: false,
      failure: normalizedFailure({
        family: "validation",
        code: "VALIDATION_ERROR",
        userMessage: decision.message,
        retryable: false,
        correlationId: existing.correlationId,
      }),
      run: existing,
    };
  }

  const now = deps.clock.nowIso();

  if (to === "succeeded") {
    const external = validated.externalResult;
    const externalSchema = await deps.schemas.validate(
      "external-result",
      external,
    );
    if (!externalSchema.ok || !external) {
      return {
        ok: false,
        failure: normalizedFailure({
          family: "invalid_provider_result",
          code: "INVALID_PROVIDER_RESULT",
          userMessage: "succeeded requires a valid ExternalResult",
          retryable: false,
          correlationId: existing.correlationId,
        }),
        run: existing,
      };
    }
    if (external.kind !== "success" || !canSucceed(external.completeness)) {
      return {
        ok: false,
        failure: normalizedFailure({
          family: "invalid_provider_result",
          code: "INVALID_PROVIDER_RESULT",
          userMessage: "Cannot succeed without complete success ExternalResult",
          retryable: false,
          correlationId: existing.correlationId,
        }),
        run: existing,
      };
    }
    if (validated.completeness !== "complete") {
      return {
        ok: false,
        failure: normalizedFailure({
          family: "invalid_provider_result",
          code: "INVALID_PROVIDER_RESULT",
          userMessage: "Cannot succeed with partial or missing completeness",
          retryable: false,
          correlationId: existing.correlationId,
        }),
        run: existing,
      };
    }

    const evidence = createOfficialEvidence({
      evidenceId: deps.identity.nextEvidenceId(),
      runId: existing.runId,
      correlationId: existing.correlationId,
      source: existing.disclosure.source,
      completeness: "complete",
      producedAt: now,
      summary: external.redactedSummary,
      late: false,
    });
    const evidenceSchema = await deps.schemas.validate(
      "execution-evidence",
      evidence,
    );
    if (!evidenceSchema.ok) {
      return {
        ok: false,
        failure: normalizedFailure({
          family: "validation",
          code: "VALIDATION_ERROR",
          userMessage: "Official evidence failed schema validation",
          retryable: false,
          correlationId: existing.correlationId,
        }),
        run: existing,
      };
    }

    const updated: ExecutionRun = {
      ...existing,
      state: "succeeded",
      updatedAt: now,
      version: existing.version + 1,
      externalResult: external,
      evidence: [...(existing.evidence ?? []), evidence],
    };
    const persisted = await persistExecutionRunInternal(updated, deps);
    if (!persisted.ok) {
      return { ok: false, failure: persisted.failure, run: existing };
    }
    return { ok: true, run: updated };
  }

  if (to === "failed") {
    if (!validated.failure) {
      return {
        ok: false,
        failure: normalizedFailure({
          family: "validation",
          code: "VALIDATION_ERROR",
          userMessage: "failed requires NormalizedFailure",
          retryable: false,
          correlationId: existing.correlationId,
        }),
        run: existing,
      };
    }
    const failureSchema = await deps.schemas.validate(
      "normalized-failure",
      validated.failure,
    );
    if (!failureSchema.ok) {
      return {
        ok: false,
        failure: normalizedFailure({
          family: "validation",
          code: "VALIDATION_ERROR",
          userMessage: "NormalizedFailure failed schema validation",
          retryable: false,
          correlationId: existing.correlationId,
        }),
        run: existing,
      };
    }
  }

  if (to === "blocked") {
    const hasFailure = Boolean(validated.failure);
    const hasReason =
      typeof validated.blockingReason === "string" &&
      validated.blockingReason.trim().length > 0;
    if (!hasFailure && !hasReason && !existing.failure && !existing.blockedReason) {
      return {
        ok: false,
        failure: normalizedFailure({
          family: "validation",
          code: "VALIDATION_ERROR",
          userMessage: "blocked requires NormalizedFailure or blockingReason",
          retryable: false,
          correlationId: existing.correlationId,
        }),
        run: existing,
      };
    }
  }

  const updated: ExecutionRun = {
    ...existing,
    state: to,
    updatedAt: now,
    version: existing.version + 1,
    externalResult: validated.externalResult ?? existing.externalResult,
    failure:
      validated.failure ??
      (to === "failed" || to === "blocked" ? existing.failure : existing.failure),
    blockedReason:
      to === "blocked"
        ? validated.blockingReason ??
          validated.failure?.code ??
          existing.blockedReason ??
          "blocked"
        : existing.blockedReason,
  };

  const persisted = await persistExecutionRunInternal(updated, deps);
  if (!persisted.ok) {
    return { ok: false, failure: persisted.failure, run: existing };
  }
  return { ok: true, run: updated };
}
