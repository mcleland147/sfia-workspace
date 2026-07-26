/**
 * RemoveEvidenceFromReviewBundle — draft-only Evidence ref remove.
 * Never mutates Evidence. Never creates ClaimEvaluation.
 */
import type { ClockPort } from "@/lib/oa/doctrine";
import {
  createReviewBundleError,
  isReviewBundleDomainError,
} from "../domain/reviewBundleErrors";
import {
  computeCompleteness,
  isReviewBundleId,
  sortEvidenceRefs,
  validateReviewBundleShape,
} from "../domain/reviewBundleInvariants";
import type {
  RemoveEvidenceFromReviewBundleRequest,
  ReviewBundle,
  ReviewBundleResult,
} from "../domain/reviewBundleTypes";
import { isEvidenceId } from "../domain/invariants";
import type { EvidenceAuditPort } from "../ports/evidenceAudit";
import type { EvidenceReaderPort } from "../ports/evidenceReader";
import type { IdGeneratorPort } from "../ports/idGenerator";
import type { ReviewBundleRepositoryPort } from "../ports/reviewBundleRepository";
import {
  assertIdempotencyKey,
  fingerprintCommand,
  readEvidenceSnapshotsForCompleteness,
  registerFingerprintBody,
} from "./evidenceSupport";

export class RemoveEvidenceFromReviewBundle {
  constructor(
    private readonly repo: ReviewBundleRepositoryPort,
    private readonly evidence: EvidenceReaderPort,
    private readonly clock: ClockPort,
    private readonly audit: EvidenceAuditPort,
    private readonly ids: IdGeneratorPort,
  ) {}

  async execute(
    request: RemoveEvidenceFromReviewBundleRequest,
  ): Promise<ReviewBundleResult> {
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
        evidenceId: request.evidenceId,
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
          evidenceId: request.evidenceId,
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
      if (!isEvidenceId(request.evidenceId)) {
        return fail("REVIEW_BUNDLE_INVALID", "evidence_id_invalid");
      }
      if (!assertIdempotencyKey(request.idempotencyKey)) {
        return fail("REVIEW_BUNDLE_INVALID", "idempotency_key_too_short");
      }

      const fingerprint = fingerprintCommand(
        registerFingerprintBody({
          reviewBundleId: request.reviewBundleId,
          evidenceId: request.evidenceId,
          idempotencyKey: request.idempotencyKey,
          expectedVersion: request.expectedVersion,
          actor: request.actor,
        }),
      );

      const existingIdem = await this.repo.findByIdempotencyKey(
        request.idempotencyKey,
      );
      if (existingIdem) {
        if (
          existingIdem.record.fingerprint === fingerprint &&
          existingIdem.record.operation === "remove"
        ) {
          const durationMs = Date.now() - started;
          this.audit.append({
            event: "oa.review_bundle.evidence_removed",
            ts: timestamp,
            correlationId,
            reviewBundleId: existingIdem.reviewBundle.reviewBundleId,
            evidenceId: request.evidenceId,
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

      if (current.status !== "draft") {
        return fail("REVIEW_BUNDLE_NOT_DRAFT", "remove_requires_draft", {
          reviewBundle: current,
        });
      }

      if (!current.evidenceRefs.includes(request.evidenceId)) {
        return fail(
          "REVIEW_BUNDLE_EVIDENCE_MISSING",
          "evidence_not_attached",
          { reviewBundle: current },
        );
      }

      const evidenceRefs = sortEvidenceRefs(
        current.evidenceRefs.filter((id) => id !== request.evidenceId),
      );
      const snapshotRead = await readEvidenceSnapshotsForCompleteness(
        this.evidence,
        evidenceRefs,
      );
      if (!snapshotRead.ok) {
        return fail("EVIDENCE_NOT_FOUND", "missing_evidence", {
          evidenceId: snapshotRead.missingId,
          reviewBundle: current,
        });
      }
      const completeness = computeCompleteness({
        evidenceRefs,
        synthesisOnly: current.synthesisOnly,
        snapshots: snapshotRead.snapshots,
      });

      const updated: ReviewBundle = {
        ...current,
        evidenceRefs,
        claimEvaluationRefs: [],
        completeness,
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
        operation: "remove",
      });

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.review_bundle.evidence_removed",
        ts: timestamp,
        correlationId,
        reviewBundleId: updated.reviewBundleId,
        evidenceId: request.evidenceId,
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
        "unexpected_remove_failure",
      );
    }
  }
}
