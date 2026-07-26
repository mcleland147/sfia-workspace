/**
 * CompleteReview — under_review → accepted | rejected | incomplete.
 * accepted requires complete ∧ ¬synthesisOnly.
 * incomplete outcome forces completeness incomplete (distinct from rejected).
 * Never mutates Evidence. Never creates ClaimEvaluation.
 */
import type { ClockPort } from "@/lib/oa/doctrine";
import {
  createReviewBundleError,
  isReviewBundleDomainError,
} from "../domain/reviewBundleErrors";
import {
  isReviewBundleId,
  validateReviewBundleShape,
} from "../domain/reviewBundleInvariants";
import type {
  CompleteReviewRequest,
  ReviewBundle,
  ReviewBundleResult,
  ReviewBundleStatus,
} from "../domain/reviewBundleTypes";
import { containsForbiddenSecret } from "../domain/invariants";
import type {
  EvidenceAuditEventName,
  EvidenceAuditPort,
} from "../ports/evidenceAudit";
import type { IdGeneratorPort } from "../ports/idGenerator";
import type { ReviewBundleRepositoryPort } from "../ports/reviewBundleRepository";
import {
  assertIdempotencyKey,
  fingerprintCommand,
  registerFingerprintBody,
} from "./evidenceSupport";

function auditEventForOutcome(
  outcome: CompleteReviewRequest["outcome"],
): EvidenceAuditEventName {
  if (outcome === "accepted") return "oa.review_bundle.accepted";
  if (outcome === "rejected") return "oa.review_bundle.rejected";
  return "oa.review_bundle.marked_incomplete";
}

export class CompleteReview {
  constructor(
    private readonly repo: ReviewBundleRepositoryPort,
    private readonly clock: ClockPort,
    private readonly audit: EvidenceAuditPort,
    private readonly ids: IdGeneratorPort,
  ) {}

  async execute(request: CompleteReviewRequest): Promise<ReviewBundleResult> {
    const started = Date.now();
    const timestamp = request.nowIso ?? this.clock.nowIso();
    const correlationId =
      request.correlationId ?? this.ids.newCorrelationId();

    const fail = (
      detailCode: Parameters<typeof createReviewBundleError>[0]["detailCode"],
      internalCauseRef: string,
      extra?: Partial<Parameters<typeof createReviewBundleError>[0]> & {
        reviewBundle?: ReviewBundle;
      },
    ): ReviewBundleResult => {
      const { reviewBundle, ...errorExtra } = extra ?? {};
      const durationMs = Date.now() - started;
      const event =
        detailCode === "IDEMPOTENCY_CONFLICT"
          ? ("oa.review_bundle.idempotency_conflict" as const)
          : detailCode === "VERSION_CONFLICT" ||
              detailCode === "CONCURRENT_MODIFICATION"
            ? ("oa.review_bundle.concurrent_modification_rejected" as const)
            : ("oa.review_bundle.operation_rejected" as const);
      this.audit.append({
        event,
        ts: timestamp,
        correlationId,
        reviewBundleId: request.reviewBundleId,
        actorId: request.actor.actorId,
        expectedVersion: request.expectedVersion,
        result: "error",
        detailCode,
        durationMs,
      });
      return {
        ok: false,
        error: createReviewBundleError({
          detailCode,
          timestamp,
          correlationId,
          reviewBundleId: request.reviewBundleId,
          internalCauseRef,
          ...errorExtra,
        }),
        reviewBundle,
        durationMs,
      };
    };

    try {
      if (!isReviewBundleId(request.reviewBundleId)) {
        return fail("REVIEW_BUNDLE_INVALID", "review_bundle_id_invalid");
      }
      if (!assertIdempotencyKey(request.idempotencyKey)) {
        return fail("REVIEW_BUNDLE_INVALID", "idempotency_key_too_short");
      }
      if (
        request.outcome !== "accepted" &&
        request.outcome !== "rejected" &&
        request.outcome !== "incomplete"
      ) {
        return fail("REVIEW_BUNDLE_INVALID", "outcome_invalid");
      }
      if (request.reason !== undefined && request.reason.length > 500) {
        return fail("REVIEW_BUNDLE_INVALID", "reason_too_long");
      }
      if (containsForbiddenSecret(request.reason)) {
        return fail(
          "REVIEW_BUNDLE_SECRET_FORBIDDEN",
          "secret_in_completion_reason",
        );
      }
      if (containsForbiddenSecret(request.actor.displayName)) {
        return fail("REVIEW_BUNDLE_SECRET_FORBIDDEN", "secret_in_reviewer");
      }

      const fingerprint = fingerprintCommand(
        registerFingerprintBody({
          reviewBundleId: request.reviewBundleId,
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
          existingIdem.record.operation === "complete_review"
        ) {
          const durationMs = Date.now() - started;
          this.audit.append({
            event: auditEventForOutcome(request.outcome),
            ts: timestamp,
            correlationId,
            reviewBundleId: existingIdem.reviewBundle.reviewBundleId,
            actorId: request.actor.actorId,
            newStatus: existingIdem.reviewBundle.status,
            version: existingIdem.reviewBundle.version,
            result: "ok",
            durationMs,
          });
          return {
            ok: true,
            reviewBundle: existingIdem.reviewBundle,
            reusedFromIdempotencyKey: true,
            durationMs,
          };
        }
        return fail("IDEMPOTENCY_CONFLICT", "idempotency_fingerprint_mismatch");
      }

      const current = await this.repo.findById(request.reviewBundleId);
      if (!current) {
        return fail("REVIEW_BUNDLE_NOT_FOUND", "missing_review_bundle");
      }

      if (current.version !== request.expectedVersion) {
        return fail("VERSION_CONFLICT", "occ_mismatch", {
          expectedVersion: request.expectedVersion,
          currentVersion: current.version,
          reviewBundle: current,
        });
      }

      if (current.status !== "under_review") {
        return fail(
          "REVIEW_BUNDLE_NOT_UNDER_REVIEW",
          "complete_requires_under_review",
          { reviewBundle: current },
        );
      }

      if (request.outcome === "accepted") {
        if (current.completeness !== "complete" || current.synthesisOnly) {
          if (current.synthesisOnly) {
            return fail(
              "REVIEW_BUNDLE_SYNTHESIS_ONLY_CONFLICT",
              "accepted_forbidden_for_synthesis_only",
              { reviewBundle: current },
            );
          }
          return fail(
            "REVIEW_BUNDLE_INCOMPLETE",
            "accepted_requires_complete",
            { reviewBundle: current },
          );
        }
      }

      if (
        (request.outcome === "accepted" || request.outcome === "rejected") &&
        current.synthesisOnly
      ) {
        return fail(
          "REVIEW_BUNDLE_SYNTHESIS_ONLY_CONFLICT",
          "verdict_forbidden_for_synthesis_only",
          { reviewBundle: current },
        );
      }

      const status: ReviewBundleStatus = request.outcome;
      const completeness =
        request.outcome === "incomplete"
          ? ("incomplete" as const)
          : current.completeness;

      const updated: ReviewBundle = {
        ...current,
        claimEvaluationRefs: [],
        status,
        completeness,
        reviewer: { ...request.actor },
        validatedAt: timestamp,
        completionReason: request.reason,
        updatedAt: timestamp,
        version: current.version + 1,
        idempotencyKey: request.idempotencyKey,
      };

      const shape = validateReviewBundleShape(updated);
      if (shape) {
        return fail(shape.detailCode, shape.reason, { reviewBundle: current });
      }

      await this.repo.update(updated, request.expectedVersion, {
        reviewBundleId: updated.reviewBundleId,
        fingerprint,
        operation: "complete_review",
      });

      const durationMs = Date.now() - started;
      this.audit.append({
        event: auditEventForOutcome(request.outcome),
        ts: timestamp,
        correlationId,
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
        reviewBundle: structuredClone(updated),
        durationMs,
      };
    } catch (err) {
      if (isReviewBundleDomainError(err)) {
        return fail(err.detailCode, err.message, {
          expectedVersion: err.expectedVersion,
          currentVersion: err.currentVersion,
        });
      }
      return fail(
        "REVIEW_BUNDLE_PERSISTENCE_FAILED",
        "unexpected_complete_review_failure",
      );
    }
  }
}
