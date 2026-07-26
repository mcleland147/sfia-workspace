/**
 * ConfirmClaimEvaluation — Critical/structural/human confirmation of evaluating claim.
 * Never mutates Evidence or ReviewBundle. Never creates MaturityAssessment.
 * System/agent cannot confirm Critical. Structural requires Morris gate.
 * Critical self-review (proposedBy === confirmedBy) is forbidden.
 * Re-assesses Evidence against the exact frozen ReviewBundle before PASS.
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
  ConfirmClaimEvaluationRequest,
} from "../domain/claimEvaluationTypes";
import { containsForbiddenSecret } from "../domain/invariants";
import type { EvidenceAuditPort } from "../ports/evidenceAudit";
import type { ClaimAuthorityPort } from "../ports/claimAuthorityPort";
import type { ClaimEvaluationRepositoryPort } from "../ports/claimEvaluationRepository";
import type { EvidenceReaderPort } from "../ports/evidenceReader";
import type { IdGeneratorPort } from "../ports/idGenerator";
import type { ReviewBundleReaderPort } from "../ports/reviewBundleReader";
import {
  assessRequiredEvidence,
  detailCodeForAssessment,
} from "./claimEvidenceAssessment";
import {
  assertIdempotencyKey,
  fingerprintCommand,
  registerFingerprintBody,
} from "./evidenceSupport";

const CLAIM_AUTHORITY_SCOPE = "oa.claim_evaluation";

export class ConfirmClaimEvaluation {
  constructor(
    private readonly repo: ClaimEvaluationRepositoryPort,
    private readonly bundles: ReviewBundleReaderPort,
    private readonly evidence: EvidenceReaderPort,
    private readonly authority: ClaimAuthorityPort,
    private readonly clock: ClockPort,
    private readonly audit: EvidenceAuditPort,
    private readonly ids: IdGeneratorPort,
  ) {}

  async execute(
    request: ConfirmClaimEvaluationRequest,
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
            : detailCode === "CLAIM_AUTHORITY_FORBIDDEN" ||
                detailCode === "CLAIM_SELF_REVIEW_FORBIDDEN"
              ? ("oa.claim_evaluation.authority_rejected" as const)
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
      if (containsForbiddenSecret(request.actor.displayName)) {
        return fail("CLAIM_SECRET_FORBIDDEN", "secret_in_actor");
      }
      if (
        request.actor.role === "system" ||
        request.actor.role === "agent"
      ) {
        return fail("CLAIM_AUTHORITY_FORBIDDEN", "system_or_agent_cannot_confirm");
      }

      const fingerprint = fingerprintCommand(
        registerFingerprintBody({
          claimEvaluationId: request.claimEvaluationId,
          idempotencyKey: request.idempotencyKey,
          expectedVersion: request.expectedVersion,
          actor: request.actor,
          authorityEvidenceId: request.authorityEvidenceId,
        }),
      );

      const existingIdem = await this.repo.findByIdempotencyKey(
        request.idempotencyKey,
      );
      if (existingIdem) {
        if (
          existingIdem.record.fingerprint === fingerprint &&
          existingIdem.record.operation === "confirm_claim"
        ) {
          const durationMs = Date.now() - started;
          this.audit.append({
            event: "oa.claim_evaluation.confirmed",
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
      if (current.status === "disputed") {
        return fail("CLAIM_DISPUTED", "cannot_confirm_disputed", {
          claimEvaluation: current,
        });
      }
      if (current.status === "pass") {
        return fail(
          "CLAIM_EVALUATION_ALREADY_CONFIRMED",
          "already_pass",
          { claimEvaluation: current },
        );
      }
      if (current.status !== "evaluating") {
        return fail(
          "CLAIM_EVALUATION_INVALID_STATE",
          "confirm_requires_evaluating",
          { claimEvaluation: current },
        );
      }
      if (
        !current.providedEvidenceRefs?.length ||
        !current.requiredEvidenceRefs.length
      ) {
        return fail(
          "CLAIM_REQUIRED_EVIDENCE_MISSING",
          "confirm_requires_provided_evidence",
          { claimEvaluation: current },
        );
      }
      if (request.actor.actorId === current.proposedBy.actorId) {
        if (
          current.criticality === "critical" ||
          current.criticality === "structural"
        ) {
          return fail("CLAIM_SELF_REVIEW_FORBIDDEN", "critical_self_review", {
            claimEvaluation: current,
          });
        }
      }

      // Re-bind exact ReviewBundle + re-assess Evidence before PASS (fail-closed).
      const bundle = await this.bundles.findById(current.reviewBundleId);
      if (!bundle) {
        return fail(
          "REVIEW_BUNDLE_NOT_FOUND",
          "missing_review_bundle_at_confirm",
          {
            claimEvaluation: current,
            reviewBundleId: current.reviewBundleId,
          },
        );
      }
      if (!bundle.frozenAt || !bundle.frozenVersion) {
        return fail("CLAIM_REVIEW_BUNDLE_INVALID", "review_bundle_not_frozen", {
          claimEvaluation: current,
          reviewBundleId: current.reviewBundleId,
        });
      }
      if (bundle.frozenVersion !== current.reviewBundleVersion) {
        return fail(
          "CLAIM_REVIEW_BUNDLE_VERSION_MISMATCH",
          "review_bundle_version_mismatch_at_confirm",
          {
            claimEvaluation: current,
            reviewBundleId: current.reviewBundleId,
          },
        );
      }
      if (bundle.synthesisOnly || bundle.completeness !== "complete") {
        return fail(
          "CLAIM_REVIEW_BUNDLE_INVALID",
          "review_bundle_incomplete_or_synthesis_at_confirm",
          {
            claimEvaluation: current,
            reviewBundleId: current.reviewBundleId,
          },
        );
      }

      const assessed = await assessRequiredEvidence({
        requiredEvidenceRefs: current.requiredEvidenceRefs,
        bundle,
        evidenceReader: this.evidence,
      });
      if (assessed.blockingCode) {
        return fail(
          detailCodeForAssessment(assessed.blockingCode),
          `confirm_evidence_${assessed.blockingCode}`,
          {
            claimEvaluation: current,
            evidenceId: assessed.blockingEvidenceId,
            reviewBundleId: current.reviewBundleId,
          },
        );
      }

      const requireMorris = current.criticality === "structural";
      const requiredLevel =
        current.criticality === "structural"
          ? ("N3" as const)
          : current.criticality === "critical"
            ? ("N2" as const)
            : ("N1" as const);
      const auth = this.authority.verify({
        actorId: request.actor.actorId,
        requiredLevel,
        scope: CLAIM_AUTHORITY_SCOPE,
        evidenceId: request.authorityEvidenceId,
        requireMorrisGate: requireMorris,
      });
      if (!auth.ok) {
        return fail("CLAIM_AUTHORITY_FORBIDDEN", auth.reason, {
          claimEvaluation: current,
        });
      }
      if (requireMorris && request.actor.role !== "decision_maker") {
        return fail(
          "CLAIM_AUTHORITY_FORBIDDEN",
          "structural_requires_decision_maker_role",
          { claimEvaluation: current },
        );
      }

      const confirmationAuthority =
        current.criticality === "structural"
          ? ("morris" as const)
          : ("authorized_human" as const);

      const updated: ClaimEvaluation = {
        ...current,
        status: "pass",
        providedEvidenceRefs: assessed.provided,
        evidenceAssessments: structuredClone(assessed.assessments),
        confirmedBy: { ...request.actor },
        confirmedAt: timestamp,
        confirmationAuthority,
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
        operation: "confirm_claim",
      });

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.claim_evaluation.confirmed",
        ts: timestamp,
        correlationId,
        claimEvaluationId: updated.claimEvaluationId,
        reviewBundleId: updated.reviewBundleId,
        evidenceIds: updated.requiredEvidenceRefs,
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
        "unexpected_confirm_failure",
      );
    }
  }
}
