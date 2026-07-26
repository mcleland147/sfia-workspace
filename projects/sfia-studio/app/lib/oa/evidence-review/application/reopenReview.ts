/**
 * ReopenReview — terminal → superseded + new draft successor (version 1).
 * Never mutates Evidence. Never creates ClaimEvaluation.
 * Idempotency stores successorId; returns old superseded + successor draft.
 */
import type { ClockPort } from "@/lib/oa/doctrine";
import {
  createReviewBundleError,
  isReviewBundleDomainError,
} from "../domain/reviewBundleErrors";
import {
  computeCompleteness,
  isReviewBundleId,
  isTerminalReviewStatus,
  sortEvidenceRefs,
  validateReviewBundleShape,
} from "../domain/reviewBundleInvariants";
import type {
  ReopenReviewRequest,
  ReviewBundle,
  ReviewBundleResult,
} from "../domain/reviewBundleTypes";
import {
  REVIEW_BUNDLE_SCHEMA_VERSION,
} from "../domain/reviewBundleTypes";
import { containsForbiddenSecret } from "../domain/invariants";
import type { EvidenceAuditPort } from "../ports/evidenceAudit";
import type { IdGeneratorPort } from "../ports/idGenerator";
import type { ReviewBundleRepositoryPort } from "../ports/reviewBundleRepository";
import {
  assertIdempotencyKey,
  buildProvenance,
  fingerprintCommand,
  registerFingerprintBody,
} from "./evidenceSupport";

export class ReopenReview {
  constructor(
    private readonly repo: ReviewBundleRepositoryPort,
    private readonly clock: ClockPort,
    private readonly audit: EvidenceAuditPort,
    private readonly ids: IdGeneratorPort,
  ) {}

  async execute(request: ReopenReviewRequest): Promise<ReviewBundleResult> {
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
        successorReviewBundleId: request.successorReviewBundleId,
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
      if (!isReviewBundleId(request.successorReviewBundleId)) {
        return fail("REVIEW_BUNDLE_INVALID", "successor_review_bundle_id_invalid");
      }
      if (request.successorReviewBundleId === request.reviewBundleId) {
        return fail(
          "REVIEW_BUNDLE_INVALID",
          "successor_must_differ_from_source",
        );
      }
      if (!assertIdempotencyKey(request.idempotencyKey)) {
        return fail("REVIEW_BUNDLE_INVALID", "idempotency_key_too_short");
      }
      if (!request.reason || request.reason.trim().length === 0) {
        return fail("REVIEW_BUNDLE_INVALID", "reason_required");
      }
      if (request.reason.length > 500) {
        return fail("REVIEW_BUNDLE_INVALID", "reason_too_long");
      }
      if (containsForbiddenSecret(request.reason)) {
        return fail("REVIEW_BUNDLE_SECRET_FORBIDDEN", "secret_in_reopen_reason");
      }

      const fingerprint = fingerprintCommand(
        registerFingerprintBody({
          reviewBundleId: request.reviewBundleId,
          successorReviewBundleId: request.successorReviewBundleId,
          idempotencyKey: request.idempotencyKey,
          expectedVersion: request.expectedVersion,
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
          existingIdem.record.operation === "reopen_review"
        ) {
          if (!existingIdem.successor) {
            return fail(
              "REVIEW_BUNDLE_PERSISTENCE_FAILED",
              "successor_missing_on_idempotent_reuse",
            );
          }
          const durationMs = Date.now() - started;
          this.audit.append({
            event: "oa.review_bundle.reopened",
            ts: timestamp,
            correlationId,
            reviewBundleId: existingIdem.reviewBundle.reviewBundleId,
            successorReviewBundleId: existingIdem.successor.reviewBundleId,
            actorId: request.actor.actorId,
            newStatus: existingIdem.reviewBundle.status,
            version: existingIdem.reviewBundle.version,
            result: "ok",
            durationMs,
          });
          return {
            ok: true,
            reviewBundle: existingIdem.reviewBundle,
            successor: existingIdem.successor,
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

      if (!isTerminalReviewStatus(current.status)) {
        return fail("REVIEW_BUNDLE_NOT_TERMINAL", "reopen_requires_terminal", {
          reviewBundle: current,
        });
      }

      if (current.status === "superseded") {
        return fail("REVIEW_BUNDLE_TERMINAL", "already_superseded", {
          reviewBundle: current,
        });
      }

      if (await this.repo.exists(request.successorReviewBundleId)) {
        return fail(
          "REVIEW_BUNDLE_ALREADY_EXISTS",
          "successor_review_bundle_id_taken",
        );
      }

      const evidenceRefs = sortEvidenceRefs(current.evidenceRefs);
      const successor: ReviewBundle = {
        schemaVersion: REVIEW_BUNDLE_SCHEMA_VERSION,
        reviewBundleId: request.successorReviewBundleId,
        projectId: current.projectId,
        cycleInstanceId: current.cycleInstanceId,
        executionContractId: current.executionContractId,
        version: 1,
        evidenceRefs,
        claimEvaluationRefs: [],
        completeness: computeCompleteness({
          evidenceRefs,
          synthesisOnly: current.synthesisOnly,
        }),
        reservations: current.reservations
          ? [...current.reservations]
          : undefined,
        status: "draft",
        createdAt: timestamp,
        supersedesReviewBundleId: current.reviewBundleId,
        synthesisOnly: current.synthesisOnly,
        provenance: buildProvenance({
          ids: this.ids,
          actor: request.actor,
          source: "review",
          timestamp,
          correlationId,
          projectId: current.projectId,
          cycleInstanceId: current.cycleInstanceId,
        }),
      };

      const successorShape = validateReviewBundleShape(successor);
      if (successorShape) {
        return fail(successorShape.detailCode, successorShape.reason, {
          reviewBundle: current,
        });
      }

      const superseded: ReviewBundle = {
        ...current,
        claimEvaluationRefs: [],
        status: "superseded",
        reopenReason: request.reason,
        updatedAt: timestamp,
        version: current.version + 1,
        idempotencyKey: request.idempotencyKey,
      };

      const supersededShape = validateReviewBundleShape(superseded);
      if (supersededShape) {
        return fail(supersededShape.detailCode, supersededShape.reason, {
          reviewBundle: current,
        });
      }

      // Create successor first so idempotent reuse can resolve successorId.
      await this.repo.create(successor);

      const reopenRecord = {
        reviewBundleId: superseded.reviewBundleId,
        fingerprint,
        operation: "reopen_review" as const,
        successorId: successor.reviewBundleId,
      };
      await this.repo.update(
        superseded,
        request.expectedVersion,
        reopenRecord,
      );

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.review_bundle.reopened",
        ts: timestamp,
        correlationId,
        reviewBundleId: superseded.reviewBundleId,
        successorReviewBundleId: successor.reviewBundleId,
        actorId: request.actor.actorId,
        previousStatus: current.status,
        newStatus: superseded.status,
        version: superseded.version,
        expectedVersion: request.expectedVersion,
        result: "ok",
        durationMs,
      });

      return {
        ok: true,
        reviewBundle: structuredClone(superseded),
        successor: structuredClone(successor),
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
        "unexpected_reopen_failure",
      );
    }
  }
}
