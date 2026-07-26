/**
 * RejectClaimEvaluation — evaluating → fail | not_proven.
 * Never mutates Evidence or ReviewBundle. Never creates MaturityAssessment.
 */
import type { ClockPort } from "@/lib/oa/doctrine";
import {
  createClaimEvaluationError,
  isClaimEvaluationDomainError,
} from "../domain/claimEvaluationErrors";
import {
  isClaimEvaluationId,
  validateClaimEvaluationShape,
} from "../domain/claimEvaluationInvariants";
import type {
  ClaimEvaluation,
  ClaimEvaluationResult,
  RejectClaimEvaluationRequest,
} from "../domain/claimEvaluationTypes";
import { containsForbiddenSecret } from "../domain/invariants";
import type { EvidenceAuditPort } from "../ports/evidenceAudit";
import type { ClaimEvaluationRepositoryPort } from "../ports/claimEvaluationRepository";
import type { IdGeneratorPort } from "../ports/idGenerator";
import {
  assertIdempotencyKey,
  fingerprintCommand,
  registerFingerprintBody,
} from "./evidenceSupport";

export class RejectClaimEvaluation {
  constructor(
    private readonly repo: ClaimEvaluationRepositoryPort,
    private readonly clock: ClockPort,
    private readonly audit: EvidenceAuditPort,
    private readonly ids: IdGeneratorPort,
  ) {}

  async execute(
    request: RejectClaimEvaluationRequest,
  ): Promise<ClaimEvaluationResult> {
    const started = Date.now();
    const timestamp = request.nowIso ?? this.clock.nowIso();
    const correlationId =
      request.correlationId ?? this.ids.newCorrelationId();

    const fail = (
      detailCode: Parameters<typeof createClaimEvaluationError>[0]["detailCode"],
      internalCauseRef: string,
      extra?: Partial<Parameters<typeof createClaimEvaluationError>[0]> & {
        claimEvaluation?: ClaimEvaluation;
      },
    ): ClaimEvaluationResult => {
      const { claimEvaluation, ...errorExtra } = extra ?? {};
      const durationMs = Date.now() - started;
      const event =
        detailCode === "IDEMPOTENCY_CONFLICT"
          ? ("oa.claim_evaluation.idempotency_conflict" as const)
          : detailCode === "VERSION_CONFLICT" ||
              detailCode === "CONCURRENT_MODIFICATION"
            ? ("oa.claim_evaluation.concurrent_modification_rejected" as const)
            : ("oa.claim_evaluation.operation_rejected" as const);
      this.audit.append({
        event,
        ts: timestamp,
        correlationId,
        claimEvaluationId: request.claimEvaluationId,
        actorId: request.actor.actorId,
        expectedVersion: request.expectedVersion,
        result: "error",
        detailCode,
        durationMs,
      });
      return {
        ok: false,
        error: createClaimEvaluationError({
          detailCode,
          timestamp,
          correlationId,
          claimEvaluationId: request.claimEvaluationId,
          internalCauseRef,
          ...errorExtra,
        }),
        claimEvaluation,
        durationMs,
      };
    };

    try {
      if (!isClaimEvaluationId(request.claimEvaluationId)) {
        return fail("CLAIM_EVALUATION_INVALID", "claim_evaluation_id_invalid");
      }
      if (!assertIdempotencyKey(request.idempotencyKey)) {
        return fail("CLAIM_EVALUATION_INVALID", "idempotency_key_too_short");
      }
      if (request.outcome !== "fail" && request.outcome !== "not_proven") {
        return fail("CLAIM_EVALUATION_INVALID", "outcome_invalid");
      }
      if (containsForbiddenSecret(request.reason)) {
        return fail("CLAIM_SECRET_FORBIDDEN", "secret_in_rejection_reason");
      }
      if (containsForbiddenSecret(request.actor.displayName)) {
        return fail("CLAIM_SECRET_FORBIDDEN", "secret_in_actor");
      }

      const fingerprint = fingerprintCommand(
        registerFingerprintBody({
          claimEvaluationId: request.claimEvaluationId,
          idempotencyKey: request.idempotencyKey,
          expectedVersion: request.expectedVersion,
          outcome: request.outcome,
          reason: request.reason,
          actor: request.actor,
        }),
      );

      const existingIdem = await this.repo.findByIdempotencyKey(
        request.idempotencyKey,
      );
      if (existingIdem) {
        if (
          existingIdem.record.fingerprint === fingerprint &&
          existingIdem.record.operation === "reject_claim"
        ) {
          const durationMs = Date.now() - started;
          this.audit.append({
            event:
              request.outcome === "fail"
                ? "oa.claim_evaluation.failed"
                : "oa.claim_evaluation.inconclusive",
            ts: timestamp,
            correlationId,
            claimEvaluationId: existingIdem.claimEvaluation.claimEvaluationId,
            actorId: request.actor.actorId,
            newStatus: existingIdem.claimEvaluation.status,
            version: existingIdem.claimEvaluation.version,
            result: "ok",
            durationMs,
          });
          return {
            ok: true,
            claimEvaluation: existingIdem.claimEvaluation,
            reusedFromIdempotencyKey: true,
            durationMs,
          };
        }
        return fail("IDEMPOTENCY_CONFLICT", "idempotency_fingerprint_mismatch");
      }

      const current = await this.repo.findById(request.claimEvaluationId);
      if (!current) {
        return fail("CLAIM_EVALUATION_NOT_FOUND", "missing_claim_evaluation");
      }
      if (current.version !== request.expectedVersion) {
        return fail("VERSION_CONFLICT", "occ_mismatch", {
          expectedVersion: request.expectedVersion,
          currentVersion: current.version,
          claimEvaluation: current,
        });
      }
      if (current.status !== "evaluating") {
        return fail(
          "CLAIM_EVALUATION_INVALID_STATE",
          "reject_requires_evaluating",
          { claimEvaluation: current },
        );
      }

      const updated: ClaimEvaluation = {
        ...current,
        status: request.outcome,
        evaluatedAt: current.evaluatedAt ?? timestamp,
        rejectionReason: request.reason,
        reviewedBy: { ...request.actor },
        updatedAt: timestamp,
        version: current.version + 1,
        idempotencyKey: request.idempotencyKey,
      };
      const shape = validateClaimEvaluationShape(updated);
      if (shape) {
        return fail(shape.detailCode, shape.reason, {
          claimEvaluation: current,
        });
      }

      await this.repo.update(updated, request.expectedVersion, {
        claimEvaluationId: updated.claimEvaluationId,
        fingerprint,
        operation: "reject_claim",
      });

      const durationMs = Date.now() - started;
      this.audit.append({
        event:
          request.outcome === "fail"
            ? "oa.claim_evaluation.failed"
            : "oa.claim_evaluation.inconclusive",
        ts: timestamp,
        correlationId,
        claimEvaluationId: updated.claimEvaluationId,
        reviewBundleId: updated.reviewBundleId,
        actorId: request.actor.actorId,
        previousStatus: current.status,
        newStatus: updated.status,
        version: updated.version,
        expectedVersion: request.expectedVersion,
        result: "ok",
        durationMs,
      });
      return {
        ok: true,
        claimEvaluation: structuredClone(updated),
        durationMs,
      };
    } catch (err) {
      if (isClaimEvaluationDomainError(err)) {
        return fail(err.detailCode, err.message, {
          expectedVersion: err.expectedVersion,
          currentVersion: err.currentVersion,
        });
      }
      return fail(
        "CLAIM_EVALUATION_PERSISTENCE_FAILED",
        "unexpected_reject_failure",
      );
    }
  }
}
