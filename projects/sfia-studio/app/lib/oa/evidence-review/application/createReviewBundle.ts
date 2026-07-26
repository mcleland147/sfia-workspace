/**
 * CreateReviewBundle — draft ReviewBundle (version 1).
 * claimEvaluationRefs always empty in D2. Never creates ClaimEvaluation.
 */
import type { ClockPort } from "@/lib/oa/doctrine";
import {
  createReviewBundleError,
  isReviewBundleDomainError,
} from "../domain/reviewBundleErrors";
import {
  computeCompleteness,
  isProjectId,
  isReviewBundleId,
  sortEvidenceRefs,
  validateReviewBundleShape,
} from "../domain/reviewBundleInvariants";
import type {
  CreateReviewBundleRequest,
  ReviewBundle,
  ReviewBundleResult,
} from "../domain/reviewBundleTypes";
import {
  REVIEW_BUNDLE_SCHEMA_VERSION,
} from "../domain/reviewBundleTypes";
import {
  containsForbiddenSecret,
  isEvidenceId,
} from "../domain/invariants";
import type { EvidenceAuditPort } from "../ports/evidenceAudit";
import type { EvidenceReaderPort } from "../ports/evidenceReader";
import type { IdGeneratorPort } from "../ports/idGenerator";
import type { ReviewBundleRepositoryPort } from "../ports/reviewBundleRepository";
import {
  assertIdempotencyKey,
  buildProvenance,
  fingerprintCommand,
  registerFingerprintBody,
} from "./evidenceSupport";

export class CreateReviewBundle {
  constructor(
    private readonly repo: ReviewBundleRepositoryPort,
    private readonly evidence: EvidenceReaderPort,
    private readonly clock: ClockPort,
    private readonly audit: EvidenceAuditPort,
    private readonly ids: IdGeneratorPort,
  ) {}

  async execute(
    request: CreateReviewBundleRequest,
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
          : ("oa.review_bundle.operation_rejected" as const);
      this.audit.append({
        event,
        ts: timestamp,
        correlationId,
        reviewBundleId: request.reviewBundleId,
        actorId: request.actor.actorId,
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
      if (!isProjectId(request.projectId)) {
        return fail("REVIEW_BUNDLE_INVALID", "project_id_invalid");
      }
      if (!assertIdempotencyKey(request.idempotencyKey)) {
        return fail("REVIEW_BUNDLE_INVALID", "idempotency_key_too_short");
      }

      const synthesisOnly = request.synthesisOnly ?? false;
      const evidenceIds = request.evidenceIds ?? [];

      if (request.reservations) {
        for (const r of request.reservations) {
          if (containsForbiddenSecret(r)) {
            return fail(
              "REVIEW_BUNDLE_SECRET_FORBIDDEN",
              "secret_in_reservation",
            );
          }
        }
      }
      if (containsForbiddenSecret(request.actor.displayName)) {
        return fail("REVIEW_BUNDLE_SECRET_FORBIDDEN", "secret_in_actor");
      }

      for (const evidenceId of evidenceIds) {
        if (!isEvidenceId(evidenceId)) {
          return fail("REVIEW_BUNDLE_INVALID", "evidence_id_invalid", {
            evidenceId,
          });
        }
      }
      const unique = new Set(evidenceIds);
      if (unique.size !== evidenceIds.length) {
        return fail(
          "REVIEW_BUNDLE_EVIDENCE_DUPLICATE",
          "duplicate_evidence_ids",
        );
      }

      for (const evidenceId of evidenceIds) {
        const ev = await this.evidence.findById(evidenceId);
        if (!ev) {
          return fail("EVIDENCE_NOT_FOUND", "missing_evidence", { evidenceId });
        }
      }

      const evidenceRefs = sortEvidenceRefs(evidenceIds);
      const fingerprint = fingerprintCommand(
        registerFingerprintBody({
          reviewBundleId: request.reviewBundleId,
          idempotencyKey: request.idempotencyKey,
          projectId: request.projectId,
          cycleInstanceId: request.cycleInstanceId,
          executionContractId: request.executionContractId,
          synthesisOnly,
          evidenceIds: evidenceRefs,
          reservations: request.reservations,
          actor: request.actor,
        }),
      );

      const existingIdem = await this.repo.findByIdempotencyKey(
        request.idempotencyKey,
      );
      if (existingIdem) {
        if (
          existingIdem.record.fingerprint === fingerprint &&
          existingIdem.record.operation === "create"
        ) {
          const durationMs = Date.now() - started;
          this.audit.append({
            event: "oa.review_bundle.created",
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

      const completeness = computeCompleteness({
        evidenceRefs,
        synthesisOnly,
      });

      const bundle: ReviewBundle = {
        schemaVersion: REVIEW_BUNDLE_SCHEMA_VERSION,
        reviewBundleId: request.reviewBundleId,
        projectId: request.projectId,
        cycleInstanceId: request.cycleInstanceId,
        executionContractId: request.executionContractId,
        version: 1,
        evidenceRefs,
        claimEvaluationRefs: [],
        completeness,
        reservations: request.reservations
          ? [...request.reservations]
          : undefined,
        status: "draft",
        createdAt: timestamp,
        synthesisOnly,
        provenance: buildProvenance({
          ids: this.ids,
          actor: request.actor,
          source: "review",
          timestamp,
          correlationId,
          projectId: request.projectId,
          cycleInstanceId: request.cycleInstanceId,
        }),
        idempotencyKey: request.idempotencyKey,
      };

      const shape = validateReviewBundleShape(bundle);
      if (shape) {
        return fail(shape.detailCode, shape.reason);
      }

      await this.repo.create(bundle, {
        reviewBundleId: bundle.reviewBundleId,
        fingerprint,
        operation: "create",
      });

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.review_bundle.created",
        ts: timestamp,
        correlationId,
        reviewBundleId: bundle.reviewBundleId,
        evidenceIds: evidenceRefs.length > 0 ? evidenceRefs : undefined,
        actorId: request.actor.actorId,
        newStatus: bundle.status,
        version: bundle.version,
        result: "ok",
        durationMs,
      });

      return {
        ok: true,
        reviewBundle: structuredClone(bundle),
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
        "unexpected_create_failure",
      );
    }
  }
}
