/**
 * ProposeMaturity — create MaturityAssessment with deterministic fail-closed calculation.
 * autoPromoted=false. Never mutates ClaimEvaluation. Never launches D5 / Decision / execution.
 */
import type { ClockPort } from "@/lib/oa/doctrine";
import {
  createMaturityAssessmentError,
  isMaturityAssessmentDomainError,
} from "../domain/maturityAssessmentErrors";
import {
  isMaturityAssessmentId,
  isProjectId,
  MATURITY_LEVELS,
  validateMaturityAssessmentShape,
} from "../domain/maturityAssessmentInvariants";
import type {
  MaturityAssessment,
  MaturityAssessmentResult,
  ProposeMaturityRequest,
} from "../domain/maturityAssessmentTypes";
import { containsForbiddenSecret, isOaIdentifier } from "../domain/invariants";
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

export class ProposeMaturity {
  constructor(
    private readonly repo: MaturityAssessmentRepositoryPort,
    private readonly claims: ClaimEvaluationReaderPort,
    private readonly clock: ClockPort,
    private readonly audit: EvidenceAuditPort,
    private readonly ids: IdGeneratorPort,
  ) {}

  async execute(
    request: ProposeMaturityRequest,
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
      if (!isProjectId(request.projectId)) {
        return fail("MATURITY_ASSESSMENT_INVALID", "project_id_invalid");
      }
      if (!request.subjectRef || !isOaIdentifier(request.subjectRef)) {
        return fail("MATURITY_ASSESSMENT_INVALID", "subject_ref_invalid");
      }
      if (!MATURITY_LEVELS.has(request.requestedLevel)) {
        return fail("MATURITY_ASSESSMENT_INVALID", "requested_level_invalid");
      }
      if (!assertIdempotencyKey(request.idempotencyKey)) {
        return fail("MATURITY_ASSESSMENT_INVALID", "idempotency_key_too_short");
      }
      if (!request.claimBindings?.length) {
        return fail("MATURITY_ASSESSMENT_INVALID", "claim_bindings_required");
      }
      if (containsForbiddenSecret(request.actor.displayName)) {
        return fail("MATURITY_SECRET_FORBIDDEN", "secret_in_actor");
      }

      const fingerprint = fingerprintCommand(
        registerFingerprintBody({
          maturityAssessmentId: request.maturityAssessmentId,
          idempotencyKey: request.idempotencyKey,
          projectId: request.projectId,
          subjectRef: request.subjectRef,
          requestedLevel: request.requestedLevel,
          claimBindings: request.claimBindings,
          blockingReservationRefs: request.blockingReservationRefs ?? [],
          dimensions: request.dimensions ?? [],
          actor: request.actor,
        }),
      );

      const existingIdem = await this.repo.findByIdempotencyKey(
        request.idempotencyKey,
      );
      if (existingIdem) {
        if (
          existingIdem.record.fingerprint === fingerprint &&
          existingIdem.record.operation === "propose_maturity"
        ) {
          const durationMs = Date.now() - started;
          this.audit.append({
            event: "oa.maturity_assessment.proposed",
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

      if (await this.repo.exists(request.maturityAssessmentId)) {
        return fail(
          "MATURITY_ASSESSMENT_ALREADY_EXISTS",
          "maturity_id_taken",
        );
      }

      const bindings = [];
      const reviewBundleRefs = new Map<
        string,
        { reviewBundleId: string; version: number }
      >();
      const evidenceRefs = new Set<string>();
      const waiverRefs: string[] = [];

      for (const ref of request.claimBindings) {
        if (!ref.claimEvaluationId?.startsWith("clm:")) {
          return fail("MATURITY_ASSESSMENT_INVALID", "claim_id_invalid", {
            claimEvaluationId: ref.claimEvaluationId,
          });
        }
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
        const binding = assessClaimEligibility({
          claim,
          expectedVersion: ref.claimEvaluationVersion,
          isSuperseded,
        });
        bindings.push(binding);
        reviewBundleRefs.set(
          `${claim.reviewBundleId}@${claim.reviewBundleVersion}`,
          {
            reviewBundleId: claim.reviewBundleId,
            version: claim.reviewBundleVersion,
          },
        );
        for (const ev of claim.requiredEvidenceRefs) evidenceRefs.add(ev);
        if (claim.status === "waived" && claim.waiver) {
          waiverRefs.push(ref.claimEvaluationId);
        }
      }

      // Hard fail if any required binding is missing entirely (fail-closed propose).
      const missing = bindings.find((b) => b.ineligibilityCode === "missing");
      if (missing) {
        return fail("MATURITY_CLAIM_NOT_FOUND", "claim_missing", {
          claimEvaluationId: missing.claimEvaluationId,
        });
      }
      const versionMismatch = bindings.find(
        (b) => b.ineligibilityCode === "version_mismatch",
      );
      if (versionMismatch) {
        return fail(
          "MATURITY_CLAIM_VERSION_MISMATCH",
          "claim_version_mismatch",
          { claimEvaluationId: versionMismatch.claimEvaluationId },
        );
      }

      const blockingReservationRefs = [
        ...(request.blockingReservationRefs ?? []),
      ];
      const calc = calculateMaturityLevel({
        requestedLevel: request.requestedLevel,
        bindings,
        blockingReservationRefs,
        dimensions: request.dimensions,
      });

      // DOCUMENTED requires ≥1 eligible PASS — never propose a positive level without support
      // unless HARD reserves force an explicit blocked assessment.
      if (calc.supportedLevel === null && calc.status !== "blocked") {
        return fail("MATURITY_CLAIM_NOT_ELIGIBLE", "no_eligible_claims_for_propose");
      }

      const assessment: MaturityAssessment = {
        schemaVersion: "0.2.0-oa",
        maturityAssessmentId: request.maturityAssessmentId,
        projectId: request.projectId,
        subjectRef: request.subjectRef,
        dimensions: calc.dimensions,
        proposedLevel: calc.proposedLevel,
        claimEvaluationRefs: request.claimBindings.map(
          (c) => c.claimEvaluationId,
        ),
        claimBindings: structuredClone(bindings),
        reviewBundleRefs:
          request.reviewBundleRefs ??
          [...reviewBundleRefs.values()],
        evidenceRefs: request.evidenceRefs ?? [...evidenceRefs],
        blockingReservationRefs,
        waiverRefs: waiverRefs.length ? waiverRefs : undefined,
        proposedBy: { ...request.actor },
        proposedAt: timestamp,
        status: calc.status,
        autoPromoted: false,
        provenance: buildProvenance({
          ids: this.ids,
          actor: request.actor,
          source: "review",
          timestamp,
          correlationId,
          projectId: request.projectId,
        }),
        criteriaResults: structuredClone(calc.criteriaResults),
        gaps: structuredClone(calc.gaps),
        calculatedAt: timestamp,
        version: 1,
        idempotencyKey: request.idempotencyKey,
        updatedAt: timestamp,
      };

      const shape = validateMaturityAssessmentShape(assessment);
      if (shape) {
        return fail(shape.detailCode, shape.reason);
      }

      await this.repo.create(assessment, {
        maturityAssessmentId: assessment.maturityAssessmentId,
        fingerprint,
        operation: "propose_maturity",
      });

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.maturity_assessment.proposed",
        ts: timestamp,
        correlationId,
        maturityAssessmentId: assessment.maturityAssessmentId,
        claimEvaluationId: assessment.claimEvaluationRefs[0],
        evidenceIds: assessment.claimEvaluationRefs,
        actorId: request.actor.actorId,
        newStatus: assessment.status,
        version: assessment.version,
        result: "ok",
        durationMs,
      });
      this.audit.append({
        event: "oa.maturity_assessment.calculated",
        ts: timestamp,
        correlationId,
        maturityAssessmentId: assessment.maturityAssessmentId,
        actorId: request.actor.actorId,
        newStatus: assessment.proposedLevel,
        version: assessment.version,
        result: "ok",
        durationMs,
      });

      return {
        ok: true,
        maturityAssessment: structuredClone(assessment),
        durationMs,
      };
    } catch (err) {
      if (isMaturityAssessmentDomainError(err)) {
        return fail(err.detailCode, err.message, {
          expectedVersion: err.expectedVersion,
          currentVersion: err.currentVersion,
        });
      }
      return fail("MATURITY_PERSISTENCE_FAILED", "unexpected_propose_failure");
    }
  }
}
