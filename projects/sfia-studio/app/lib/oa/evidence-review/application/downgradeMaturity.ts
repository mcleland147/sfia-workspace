/**
 * DowngradeMaturity — explicit supersession + lower level. Never automatic.
 * Human authority; Morris if target/source structural (IMPLEMENTED/ADOPTED).
 * Atomic createSuccessorAndMarkSuperseded. Never mutates ClaimEvaluation.
 * Never launches D5 / closes reserves / sets executionAuthority.
 */
import type { ClockPort } from "@/lib/oa/doctrine";
import {
  createMaturityAssessmentError,
  isMaturityAssessmentDomainError,
} from "../domain/maturityAssessmentErrors";
import {
  isMaturityAssessmentId,
  levelRank,
  MATURITY_LEVELS,
  validateMaturityAssessmentShape,
} from "../domain/maturityAssessmentInvariants";
import type {
  DowngradeMaturityRequest,
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
  buildProvenance,
  fingerprintCommand,
  registerFingerprintBody,
} from "./evidenceSupport";
import {
  assessClaimEligibility,
  calculateMaturityLevel,
  missingClaimBinding,
} from "./maturityCalculation";

const MATURITY_AUTHORITY_SCOPE = "oa.maturity_assessment";

export class DowngradeMaturity {
  constructor(
    private readonly repo: MaturityAssessmentRepositoryPort,
    private readonly claims: ClaimEvaluationReaderPort,
    private readonly authority: ClaimAuthorityPort,
    private readonly clock: ClockPort,
    private readonly audit: EvidenceAuditPort,
    private readonly ids: IdGeneratorPort,
  ) {}

  async execute(
    request: DowngradeMaturityRequest,
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
        successor?: MaturityAssessment;
      },
    ): MaturityAssessmentResult => {
      const { maturityAssessment, successor, ...errorExtra } = extra ?? {};
      const durationMs = Date.now() - started;
      const event =
        detailCode === "IDEMPOTENCY_CONFLICT"
          ? ("oa.maturity_assessment.idempotency_conflict" as const)
          : detailCode === "VERSION_CONFLICT" ||
              detailCode === "CONCURRENT_MODIFICATION"
            ? ("oa.maturity_assessment.concurrent_modification_rejected" as const)
            : detailCode === "MATURITY_AUTHORITY_FORBIDDEN"
              ? ("oa.maturity_assessment.authority_rejected" as const)
              : ("oa.maturity_assessment.operation_rejected" as const);
      this.audit.append({
        event,
        ts: timestamp,
        correlationId,
        maturityAssessmentId: request.sourceMaturityAssessmentId,
        successorMaturityAssessmentId: request.successorMaturityAssessmentId,
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
          maturityAssessmentId: request.sourceMaturityAssessmentId,
          internalCauseRef,
          ...errorExtra,
        }),
        maturityAssessment,
        successor,
        durationMs,
      };
    };

    try {
      if (!isMaturityAssessmentId(request.sourceMaturityAssessmentId)) {
        return fail("MATURITY_ASSESSMENT_INVALID", "source_id_invalid");
      }
      if (!isMaturityAssessmentId(request.successorMaturityAssessmentId)) {
        return fail("MATURITY_ASSESSMENT_INVALID", "successor_id_invalid");
      }
      if (
        request.sourceMaturityAssessmentId ===
        request.successorMaturityAssessmentId
      ) {
        return fail("MATURITY_ASSESSMENT_INVALID", "successor_must_differ");
      }
      if (!MATURITY_LEVELS.has(request.targetLevel)) {
        return fail("MATURITY_ASSESSMENT_INVALID", "target_level_invalid");
      }
      if (!assertIdempotencyKey(request.idempotencyKey)) {
        return fail("MATURITY_ASSESSMENT_INVALID", "idempotency_key_too_short");
      }
      if (
        !request.downgradeReason?.trim() ||
        containsForbiddenSecret(request.downgradeReason)
      ) {
        return fail(
          request.downgradeReason &&
            containsForbiddenSecret(request.downgradeReason)
            ? "MATURITY_SECRET_FORBIDDEN"
            : "MATURITY_ASSESSMENT_INVALID",
          "downgrade_reason_invalid",
        );
      }
      if (containsForbiddenSecret(request.actor.displayName)) {
        return fail("MATURITY_SECRET_FORBIDDEN", "secret_in_actor");
      }
      if (
        request.actor.role === "system" ||
        request.actor.role === "agent"
      ) {
        return fail(
          "MATURITY_DOWNGRADE_FORBIDDEN",
          "system_or_agent_cannot_downgrade",
        );
      }
      if (!request.claimBindings?.length) {
        return fail("MATURITY_ASSESSMENT_INVALID", "claim_bindings_required");
      }

      const fingerprint = fingerprintCommand(
        registerFingerprintBody({
          sourceMaturityAssessmentId: request.sourceMaturityAssessmentId,
          successorMaturityAssessmentId: request.successorMaturityAssessmentId,
          idempotencyKey: request.idempotencyKey,
          expectedVersion: request.expectedVersion,
          targetLevel: request.targetLevel,
          downgradeReason: request.downgradeReason,
          claimBindings: request.claimBindings,
          actor: request.actor,
        }),
      );

      const existingIdem = await this.repo.findByIdempotencyKey(
        request.idempotencyKey,
      );
      if (existingIdem) {
        if (
          existingIdem.record.fingerprint === fingerprint &&
          existingIdem.record.operation === "downgrade_maturity" &&
          existingIdem.successor
        ) {
          const durationMs = Date.now() - started;
          this.audit.append({
            event: "oa.maturity_assessment.downgraded",
            ts: timestamp,
            correlationId,
            maturityAssessmentId: existingIdem.maturityAssessment.maturityAssessmentId,
            successorMaturityAssessmentId:
              existingIdem.successor.maturityAssessmentId,
            actorId: request.actor.actorId,
            newStatus: existingIdem.successor.status,
            version: existingIdem.successor.version,
            result: "ok",
            durationMs,
          });
          return {
            ok: true,
            maturityAssessment: existingIdem.maturityAssessment,
            successor: existingIdem.successor,
            reusedFromIdempotencyKey: true,
            durationMs,
          };
        }
        return fail("IDEMPOTENCY_CONFLICT", "idempotency_fingerprint_mismatch");
      }

      const source = await this.repo.findById(
        request.sourceMaturityAssessmentId,
      );
      if (!source) {
        return fail("MATURITY_ASSESSMENT_NOT_FOUND", "source_missing");
      }
      if (source.version !== request.expectedVersion) {
        return fail("VERSION_CONFLICT", "occ_mismatch", {
          expectedVersion: request.expectedVersion,
          currentVersion: source.version,
          maturityAssessment: source,
        });
      }
      if (source.status === "superseded") {
        return fail("MATURITY_SUPERSEDED", "already_superseded", {
          maturityAssessment: source,
        });
      }
      if (
        source.status !== "confirmed" &&
        source.status !== "proposed" &&
        source.status !== "blocked"
      ) {
        return fail("MATURITY_INVALID_STATE", "downgrade_invalid_source_state", {
          maturityAssessment: source,
        });
      }
      if (levelRank(request.targetLevel) >= levelRank(source.proposedLevel)) {
        return fail(
          "MATURITY_DOWNGRADE_FORBIDDEN",
          "target_not_lower_than_source",
          { maturityAssessment: source },
        );
      }

      const requireMorris =
        levelRank(source.proposedLevel) >= levelRank("IMPLEMENTED") ||
        levelRank(request.targetLevel) >= levelRank("IMPLEMENTED") ||
        source.confirmedLevel === "ADOPTED" ||
        source.proposedLevel === "ADOPTED";
      const auth = this.authority.verify({
        actorId: request.actor.actorId,
        requiredLevel: requireMorris ? "N3" : "N2",
        scope: MATURITY_AUTHORITY_SCOPE,
        evidenceId: request.authorityEvidenceId,
        requireMorrisGate: requireMorris,
      });
      if (!auth.ok) {
        return fail("MATURITY_AUTHORITY_FORBIDDEN", auth.reason, {
          maturityAssessment: source,
        });
      }
      if (requireMorris && request.actor.role !== "decision_maker") {
        return fail(
          "MATURITY_AUTHORITY_FORBIDDEN",
          "structural_downgrade_requires_decision_maker",
          { maturityAssessment: source },
        );
      }

      const bindings = [];
      for (const ref of request.claimBindings) {
        const claim = await this.claims.findById(ref.claimEvaluationId);
        if (!claim) {
          bindings.push(
            missingClaimBinding(
              ref.claimEvaluationId,
              ref.claimEvaluationVersion,
            ),
          );
          continue;
        }
        const isSuperseded = await this.claims.isSuperseded(
          ref.claimEvaluationId,
        );
        bindings.push(
          assessClaimEligibility({
            claim,
            expectedVersion: ref.claimEvaluationVersion,
            isSuperseded,
          }),
        );
      }
      const missing = bindings.find((b) => b.ineligibilityCode === "missing");
      if (missing) {
        return fail("MATURITY_CLAIM_NOT_FOUND", "claim_missing", {
          claimEvaluationId: missing.claimEvaluationId,
          maturityAssessment: source,
        });
      }
      const versionMismatch = bindings.find(
        (b) => b.ineligibilityCode === "version_mismatch",
      );
      if (versionMismatch) {
        return fail(
          "MATURITY_CLAIM_VERSION_MISMATCH",
          "claim_version_mismatch",
          {
            claimEvaluationId: versionMismatch.claimEvaluationId,
            maturityAssessment: source,
          },
        );
      }

      const blockingReservationRefs = [
        ...(request.blockingReservationRefs ?? source.blockingReservationRefs),
      ];
      const calc = calculateMaturityLevel({
        requestedLevel: request.targetLevel,
        bindings,
        blockingReservationRefs,
      });
      // Explicit downgrade: force targetLevel (still fail-closed capped by support).
      const proposedLevel =
        levelRank(calc.proposedLevel) <= levelRank(request.targetLevel)
          ? calc.proposedLevel
          : request.targetLevel;

      const successor: MaturityAssessment = {
        schemaVersion: "0.2.0-oa",
        maturityAssessmentId: request.successorMaturityAssessmentId,
        projectId: source.projectId,
        subjectRef: source.subjectRef,
        dimensions: calc.dimensions,
        proposedLevel,
        claimEvaluationRefs: request.claimBindings.map(
          (c) => c.claimEvaluationId,
        ),
        claimBindings: structuredClone(bindings),
        reviewBundleRefs: source.reviewBundleRefs
          ? structuredClone(source.reviewBundleRefs)
          : undefined,
        evidenceRefs: source.evidenceRefs
          ? [...source.evidenceRefs]
          : undefined,
        blockingReservationRefs,
        waiverRefs: source.waiverRefs ? [...source.waiverRefs] : undefined,
        proposedBy: { ...request.actor },
        proposedAt: timestamp,
        status: calc.status === "blocked" ? "blocked" : "proposed",
        supersedesMaturityAssessmentId: source.maturityAssessmentId,
        downgradeReason: request.downgradeReason,
        autoPromoted: false,
        provenance: buildProvenance({
          ids: this.ids,
          actor: request.actor,
          source: "review",
          timestamp,
          correlationId,
          projectId: source.projectId,
        }),
        criteriaResults: structuredClone(calc.criteriaResults),
        gaps: structuredClone(calc.gaps),
        calculatedAt: timestamp,
        version: 1,
        idempotencyKey: request.idempotencyKey,
        updatedAt: timestamp,
      };

      const superseded: MaturityAssessment = {
        ...source,
        status: "superseded",
        // Schema: superseded requires supersedesMaturityAssessmentId — link to successor (supersededBy).
        supersedesMaturityAssessmentId: successor.maturityAssessmentId,
        downgradeReason: request.downgradeReason,
        autoPromoted: false,
        updatedAt: timestamp,
        version: source.version + 1,
        idempotencyKey: request.idempotencyKey,
      };

      const successorShape = validateMaturityAssessmentShape(successor);
      if (successorShape) {
        return fail(successorShape.detailCode, successorShape.reason, {
          maturityAssessment: source,
        });
      }
      const supersededShape = validateMaturityAssessmentShape(superseded);
      if (supersededShape) {
        return fail(supersededShape.detailCode, supersededShape.reason, {
          maturityAssessment: source,
        });
      }

      await this.repo.createSuccessorAndMarkSuperseded(
        successor,
        superseded,
        request.expectedVersion,
        {
          maturityAssessmentId: superseded.maturityAssessmentId,
          fingerprint,
          operation: "downgrade_maturity",
          successorId: successor.maturityAssessmentId,
        },
      );

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.maturity_assessment.downgraded",
        ts: timestamp,
        correlationId,
        maturityAssessmentId: superseded.maturityAssessmentId,
        successorMaturityAssessmentId: successor.maturityAssessmentId,
        evidenceIds: successor.claimEvaluationRefs,
        actorId: request.actor.actorId,
        previousStatus: source.status,
        newStatus: successor.status,
        version: successor.version,
        expectedVersion: request.expectedVersion,
        result: "ok",
        durationMs,
      });
      this.audit.append({
        event: "oa.maturity_assessment.superseded",
        ts: timestamp,
        correlationId,
        maturityAssessmentId: superseded.maturityAssessmentId,
        successorMaturityAssessmentId: successor.maturityAssessmentId,
        actorId: request.actor.actorId,
        previousStatus: source.status,
        newStatus: "superseded",
        version: superseded.version,
        result: "ok",
        durationMs,
      });

      return {
        ok: true,
        maturityAssessment: structuredClone(superseded),
        successor: structuredClone(successor),
        durationMs,
      };
    } catch (err) {
      if (isMaturityAssessmentDomainError(err)) {
        return fail(err.detailCode, err.message, {
          expectedVersion: err.expectedVersion,
          currentVersion: err.currentVersion,
        });
      }
      return fail(
        "MATURITY_PERSISTENCE_FAILED",
        "unexpected_downgrade_failure",
      );
    }
  }
}
