/**
 * ConfirmMaturity — human confirmation of proposed maturity.
 * System/agent forbidden. ADOPTED / IMPLEMENTED require Morris.
 * HARD blockingReservationRefs forbid confirm. autoPromoted remains false.
 * Re-assesses ClaimEvaluation bindings at exact versions before confirm (fail-closed).
 * Never launches D5 / Decision / executionAuthority.
 */
import type { ClockPort } from "@/lib/oa/doctrine";
import {
  createMaturityAssessmentError,
  isMaturityAssessmentDomainError,
} from "../domain/maturityAssessmentErrors";
import {
  isMaturityAssessmentId,
  levelRank,
  validateMaturityAssessmentShape,
} from "../domain/maturityAssessmentInvariants";
import type {
  ConfirmMaturityRequest,
  MaturityAssessment,
  MaturityAssessmentResult,
} from "../domain/maturityAssessmentTypes";
import { containsForbiddenSecret } from "../domain/invariants";
import type { ClaimAuthorityPort } from "../ports/claimAuthorityPort";
import type { ClaimEvaluationReaderPort } from "../ports/claimEvaluationReader";
import type { EvidenceAuditPort } from "../ports/evidenceAudit";
import type { IdGeneratorPort } from "../ports/idGenerator";
import type { MaturityAssessmentRepositoryPort } from "../ports/maturityAssessmentRepository";
import {
  assertIdempotencyKey,
  fingerprintCommand,
  registerFingerprintBody,
} from "./evidenceSupport";
import {
  calculateMaturityLevel,
  reassessStoredBindings,
} from "./maturityCalculation";

const MATURITY_AUTHORITY_SCOPE = "oa.maturity_assessment";

export class ConfirmMaturity {
  constructor(
    private readonly repo: MaturityAssessmentRepositoryPort,
    private readonly claims: ClaimEvaluationReaderPort,
    private readonly authority: ClaimAuthorityPort,
    private readonly clock: ClockPort,
    private readonly audit: EvidenceAuditPort,
    private readonly ids: IdGeneratorPort,
  ) {}

  async execute(
    request: ConfirmMaturityRequest,
  ): Promise<MaturityAssessmentResult> {
    const started = Date.now();
    const timestamp = request.nowIso ?? this.clock.nowIso();
    const correlationId =
      request.correlationId ?? this.ids.newCorrelationId();

    const fail = (
      detailCode: Parameters<typeof createMaturityAssessmentError>[0]["detailCode"],
      internalCauseRef: string,
      extra?: Partial<Parameters<typeof createMaturityAssessmentError>[0]> & {
        maturityAssessment?: MaturityAssessment;
      },
    ): MaturityAssessmentResult => {
      const { maturityAssessment, ...errorExtra } = extra ?? {};
      const durationMs = Date.now() - started;
      const event =
        detailCode === "IDEMPOTENCY_CONFLICT"
          ? ("oa.maturity_assessment.idempotency_conflict" as const)
          : detailCode === "VERSION_CONFLICT" ||
              detailCode === "CONCURRENT_MODIFICATION"
            ? ("oa.maturity_assessment.concurrent_modification_rejected" as const)
            : detailCode === "MATURITY_AUTHORITY_FORBIDDEN" ||
                detailCode === "MATURITY_SELF_REVIEW_FORBIDDEN"
              ? ("oa.maturity_assessment.authority_rejected" as const)
              : ("oa.maturity_assessment.operation_rejected" as const);
      this.audit.append({
        event,
        ts: timestamp,
        correlationId,
        maturityAssessmentId: request.maturityAssessmentId,
        actorId: request.actor.actorId,
        expectedVersion: request.expectedVersion,
        result: "error",
        detailCode,
        durationMs,
      });
      return {
        ok: false,
        error: createMaturityAssessmentError({
          detailCode,
          timestamp,
          correlationId,
          maturityAssessmentId: request.maturityAssessmentId,
          internalCauseRef,
          ...errorExtra,
        }),
        maturityAssessment,
        durationMs,
      };
    };

    try {
      if (!isMaturityAssessmentId(request.maturityAssessmentId)) {
        return fail("MATURITY_ASSESSMENT_INVALID", "maturity_id_invalid");
      }
      if (!assertIdempotencyKey(request.idempotencyKey)) {
        return fail("MATURITY_ASSESSMENT_INVALID", "idempotency_key_too_short");
      }
      if (containsForbiddenSecret(request.actor.displayName)) {
        return fail("MATURITY_SECRET_FORBIDDEN", "secret_in_actor");
      }
      if (
        request.actor.role === "system" ||
        request.actor.role === "agent"
      ) {
        return fail(
          "MATURITY_AUTHORITY_FORBIDDEN",
          "system_or_agent_cannot_confirm",
        );
      }

      const fingerprint = fingerprintCommand(
        registerFingerprintBody({
          maturityAssessmentId: request.maturityAssessmentId,
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
          existingIdem.record.operation === "confirm_maturity"
        ) {
          const durationMs = Date.now() - started;
          this.audit.append({
            event: "oa.maturity_assessment.confirmed",
            ts: timestamp,
            correlationId,
            maturityAssessmentId:
              existingIdem.maturityAssessment.maturityAssessmentId,
            actorId: request.actor.actorId,
            newStatus: existingIdem.maturityAssessment.status,
            version: existingIdem.maturityAssessment.version,
            result: "ok",
            durationMs,
          });
          return {
            ok: true,
            maturityAssessment: existingIdem.maturityAssessment,
            reusedFromIdempotencyKey: true,
            durationMs,
          };
        }
        return fail("IDEMPOTENCY_CONFLICT", "idempotency_fingerprint_mismatch");
      }

      const current = await this.repo.findById(request.maturityAssessmentId);
      if (!current) {
        return fail("MATURITY_ASSESSMENT_NOT_FOUND", "missing_maturity");
      }
      if (current.version !== request.expectedVersion) {
        return fail("VERSION_CONFLICT", "occ_mismatch", {
          expectedVersion: request.expectedVersion,
          currentVersion: current.version,
          maturityAssessment: current,
        });
      }
      if (current.status === "superseded") {
        return fail("MATURITY_SUPERSEDED", "cannot_confirm_superseded", {
          maturityAssessment: current,
        });
      }
      if (current.status === "confirmed") {
        return fail("MATURITY_ALREADY_CONFIRMED", "already_confirmed", {
          maturityAssessment: current,
        });
      }
      if (current.status === "blocked") {
        return fail(
          "MATURITY_BLOCKED_BY_RESERVATION",
          "blocked_cannot_confirm",
          { maturityAssessment: current },
        );
      }
      if (current.status !== "proposed") {
        return fail("MATURITY_INVALID_STATE", "confirm_requires_proposed", {
          maturityAssessment: current,
        });
      }
      if ((current.blockingReservationRefs?.length ?? 0) > 0) {
        return fail(
          "MATURITY_BLOCKED_BY_RESERVATION",
          "hard_reserve_present",
          { maturityAssessment: current },
        );
      }
      if (current.autoPromoted !== false) {
        return fail(
          "MATURITY_AUTO_PROMOTION_FORBIDDEN",
          "auto_promoted_forbidden",
          { maturityAssessment: current },
        );
      }
      if (request.actor.actorId === current.proposedBy.actorId) {
        if (
          levelRank(current.proposedLevel) >= levelRank("IMPLEMENTED")
        ) {
          return fail(
            "MATURITY_SELF_REVIEW_FORBIDDEN",
            "self_review_structural_level",
            { maturityAssessment: current },
          );
        }
      }

      // Re-assess exact ClaimEvaluation bindings before PASS confirm (fail-closed).
      const freshBindings = await reassessStoredBindings({
        bindings: current.claimBindings,
        claims: this.claims,
      });
      const missing = freshBindings.find(
        (b) => b.ineligibilityCode === "missing",
      );
      if (missing) {
        return fail("MATURITY_CLAIM_NOT_FOUND", "claim_missing_at_confirm", {
          claimEvaluationId: missing.claimEvaluationId,
          maturityAssessment: current,
        });
      }
      const versionMismatch = freshBindings.find(
        (b) => b.ineligibilityCode === "version_mismatch",
      );
      if (versionMismatch) {
        return fail(
          "MATURITY_CLAIM_VERSION_MISMATCH",
          "claim_version_mismatch_at_confirm",
          {
            claimEvaluationId: versionMismatch.claimEvaluationId,
            maturityAssessment: current,
          },
        );
      }
      const disputed = freshBindings.find(
        (b) => b.ineligibilityCode === "disputed",
      );
      if (disputed) {
        return fail("MATURITY_CLAIM_DISPUTED", "claim_disputed_at_confirm", {
          claimEvaluationId: disputed.claimEvaluationId,
          maturityAssessment: current,
        });
      }
      const waived = freshBindings.find(
        (b) => b.ineligibilityCode === "waived",
      );
      if (waived) {
        return fail("MATURITY_CLAIM_WAIVED", "claim_waived_at_confirm", {
          claimEvaluationId: waived.claimEvaluationId,
          maturityAssessment: current,
        });
      }
      const superseded = freshBindings.find(
        (b) => b.ineligibilityCode === "superseded",
      );
      if (superseded) {
        return fail(
          "MATURITY_CLAIM_SUPERSEDED",
          "claim_superseded_at_confirm",
          {
            claimEvaluationId: superseded.claimEvaluationId,
            maturityAssessment: current,
          },
        );
      }

      const calc = calculateMaturityLevel({
        requestedLevel: current.proposedLevel,
        bindings: freshBindings,
        blockingReservationRefs: current.blockingReservationRefs,
        dimensions: current.dimensions?.map((d) => ({
          dimensionId: d.dimensionId,
          proposedLevel: d.proposedLevel,
        })),
      });
      if (calc.supportedLevel === null || calc.status === "blocked") {
        return fail(
          calc.status === "blocked"
            ? "MATURITY_BLOCKED_BY_RESERVATION"
            : "MATURITY_CLAIM_NOT_ELIGIBLE",
          "confirm_reassess_unsupported",
          { maturityAssessment: current },
        );
      }
      if (levelRank(calc.proposedLevel) < levelRank(current.proposedLevel)) {
        return fail(
          "MATURITY_CLAIM_NOT_ELIGIBLE",
          "confirm_level_regressed_after_reassess",
          { maturityAssessment: current },
        );
      }

      const requireMorris =
        current.proposedLevel === "ADOPTED" ||
        current.proposedLevel === "IMPLEMENTED";
      const requiredLevel = requireMorris
        ? ("N3" as const)
        : ("N2" as const);
      const auth = this.authority.verify({
        actorId: request.actor.actorId,
        requiredLevel,
        scope: MATURITY_AUTHORITY_SCOPE,
        evidenceId: request.authorityEvidenceId,
        requireMorrisGate: requireMorris,
      });
      if (!auth.ok) {
        return fail("MATURITY_AUTHORITY_FORBIDDEN", auth.reason, {
          maturityAssessment: current,
        });
      }
      if (requireMorris && request.actor.role !== "decision_maker") {
        return fail(
          "MATURITY_AUTHORITY_FORBIDDEN",
          "structural_maturity_requires_decision_maker",
          { maturityAssessment: current },
        );
      }

      const updated: MaturityAssessment = {
        ...current,
        status: "confirmed",
        confirmedLevel: current.proposedLevel,
        confirmedBy: { ...request.actor },
        confirmedAt: timestamp,
        claimBindings: structuredClone(freshBindings),
        criteriaResults: structuredClone(calc.criteriaResults),
        gaps: structuredClone(calc.gaps),
        calculatedAt: timestamp,
        dimensions: current.dimensions?.map((d) => ({
          ...d,
          confirmedLevel: d.proposedLevel,
        })),
        autoPromoted: false,
        blockingReservationRefs: [],
        updatedAt: timestamp,
        version: current.version + 1,
        idempotencyKey: request.idempotencyKey,
      };
      const shape = validateMaturityAssessmentShape(updated);
      if (shape) {
        return fail(shape.detailCode, shape.reason, {
          maturityAssessment: current,
        });
      }

      await this.repo.update(updated, request.expectedVersion, {
        maturityAssessmentId: updated.maturityAssessmentId,
        fingerprint,
        operation: "confirm_maturity",
      });

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.maturity_assessment.confirmed",
        ts: timestamp,
        correlationId,
        maturityAssessmentId: updated.maturityAssessmentId,
        evidenceIds: updated.claimEvaluationRefs,
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
        maturityAssessment: structuredClone(updated),
        durationMs,
      };
    } catch (err) {
      if (isMaturityAssessmentDomainError(err)) {
        return fail(err.detailCode, err.message, {
          expectedVersion: err.expectedVersion,
          currentVersion: err.currentVersion,
        });
      }
      return fail("MATURITY_PERSISTENCE_FAILED", "unexpected_confirm_failure");
    }
  }
}
