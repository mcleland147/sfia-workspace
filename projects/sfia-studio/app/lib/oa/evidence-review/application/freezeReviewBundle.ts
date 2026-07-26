/**
 * FreezeReviewBundle — draft → ready_for_review with Evidence snapshots.
 * Never mutates Evidence. Never creates ClaimEvaluation.
 * ready_for_review ≡ frozen (frozenAt set).
 */
import type { ClockPort } from "@/lib/oa/doctrine";
import {
  createReviewBundleError,
  isReviewBundleDomainError,
} from "../domain/reviewBundleErrors";
import {
  computeCompleteness,
  isReviewBundleId,
  validateReviewBundleShape,
} from "../domain/reviewBundleInvariants";
import type {
  FreezeReviewBundleRequest,
  ReviewBundle,
  ReviewBundleEvidenceSnapshot,
  ReviewBundleResult,
} from "../domain/reviewBundleTypes";
import type { EvidenceAuditPort } from "../ports/evidenceAudit";
import type { EvidenceReaderPort } from "../ports/evidenceReader";
import type { IdGeneratorPort } from "../ports/idGenerator";
import type { ReviewBundleRepositoryPort } from "../ports/reviewBundleRepository";
import {
  assertIdempotencyKey,
  fingerprintCommand,
  registerFingerprintBody,
} from "./evidenceSupport";

export class FreezeReviewBundle {
  constructor(
    private readonly repo: ReviewBundleRepositoryPort,
    private readonly evidence: EvidenceReaderPort,
    private readonly clock: ClockPort,
    private readonly audit: EvidenceAuditPort,
    private readonly ids: IdGeneratorPort,
  ) {}

  async execute(
    request: FreezeReviewBundleRequest,
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

      const fingerprint = fingerprintCommand(
        registerFingerprintBody({
          reviewBundleId: request.reviewBundleId,
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
          existingIdem.record.operation === "freeze"
        ) {
          const durationMs = Date.now() - started;
          this.audit.append({
            event: "oa.review_bundle.frozen",
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

      if (current.frozenAt || current.status === "ready_for_review") {
        return fail("REVIEW_BUNDLE_ALREADY_FROZEN", "already_frozen", {
          reviewBundle: current,
        });
      }

      if (current.status !== "draft") {
        return fail("REVIEW_BUNDLE_NOT_DRAFT", "freeze_requires_draft", {
          reviewBundle: current,
        });
      }

      if (current.evidenceRefs.length < 1) {
        return fail(
          "REVIEW_BUNDLE_EVIDENCE_REQUIRED",
          "freeze_requires_evidence",
          { reviewBundle: current },
        );
      }

      const snapshots: ReviewBundleEvidenceSnapshot[] = [];
      for (const evidenceId of current.evidenceRefs) {
        const ev = await this.evidence.findById(evidenceId);
        if (!ev) {
          return fail("EVIDENCE_NOT_FOUND", "missing_evidence_at_freeze", {
            evidenceId,
            reviewBundle: current,
          });
        }
        snapshots.push({
          evidenceId: ev.evidenceId,
          evidenceVersion: ev.version,
          status: ev.status,
          availability: ev.availability,
        });
      }

      const completeness = computeCompleteness({
        evidenceRefs: current.evidenceRefs,
        synthesisOnly: current.synthesisOnly,
        snapshots,
      });

      if (current.synthesisOnly && completeness === "complete") {
        return fail(
          "REVIEW_BUNDLE_SYNTHESIS_ONLY_CONFLICT",
          "synthesis_only_complete",
          { reviewBundle: current },
        );
      }

      const nextVersion = current.version + 1;
      const updated: ReviewBundle = {
        ...current,
        claimEvaluationRefs: [],
        completeness,
        status: "ready_for_review",
        frozenAt: timestamp,
        frozenEvidenceSnapshots: snapshots,
        frozenVersion: nextVersion,
        updatedAt: timestamp,
        version: nextVersion,
        idempotencyKey: request.idempotencyKey,
      };

      const shape = validateReviewBundleShape(updated);
      if (shape) {
        return fail(shape.detailCode, shape.reason, { reviewBundle: current });
      }

      await this.repo.update(updated, request.expectedVersion, {
        reviewBundleId: updated.reviewBundleId,
        fingerprint,
        operation: "freeze",
      });

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.review_bundle.frozen",
        ts: timestamp,
        correlationId,
        reviewBundleId: updated.reviewBundleId,
        evidenceIds: updated.evidenceRefs,
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
        "unexpected_freeze_failure",
      );
    }
  }
}
