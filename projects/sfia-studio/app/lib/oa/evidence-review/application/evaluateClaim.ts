/**
 * EvaluateClaim — create + evaluate ClaimEvaluation (CreateClaim absorbed v1).
 * Never mutates Evidence or ReviewBundle. Never creates MaturityAssessment.
 * PASS never auto-confirms Critical/structural.
 */
import type { ClockPort } from "@/lib/oa/doctrine";
import {
  createClaimEvaluationError,
  isClaimEvaluationDomainError,
} from "../domain/claimEvaluationErrors";
import {
  isClaimEvaluationId,
  isReviewBundleId,
  sortEvidenceIds,
  validateClaimEvaluationShape,
} from "../domain/claimEvaluationInvariants";
import type {
  ClaimEvaluation,
  ClaimEvaluationResult,
  ClaimEvaluationStatus,
  EvaluateClaimRequest,
} from "../domain/claimEvaluationTypes";
import {
  CLAIM_EVALUATION_SCHEMA_VERSION,
} from "../domain/claimEvaluationTypes";
import {
  containsForbiddenSecret,
  isEvidenceId,
} from "../domain/invariants";
import type { EvidenceAuditPort } from "../ports/evidenceAudit";
import type { ClaimAuthorityPort } from "../ports/claimAuthorityPort";
import type { ClaimEvaluationRepositoryPort } from "../ports/claimEvaluationRepository";
import type { EvidenceReaderPort } from "../ports/evidenceReader";
import type { IdGeneratorPort } from "../ports/idGenerator";
import type { ReviewBundleReaderPort } from "../ports/reviewBundleReader";
import {
  assessRequiredEvidence,
} from "./claimEvidenceAssessment";
import {
  assertIdempotencyKey,
  buildProvenance,
  fingerprintCommand,
  registerFingerprintBody,
} from "./evidenceSupport";

const CLAIM_AUTHORITY_SCOPE = "oa.claim_evaluation";

export class EvaluateClaim {
  constructor(
    private readonly repo: ClaimEvaluationRepositoryPort,
    private readonly bundles: ReviewBundleReaderPort,
    private readonly evidence: EvidenceReaderPort,
    private readonly authority: ClaimAuthorityPort,
    private readonly clock: ClockPort,
    private readonly audit: EvidenceAuditPort,
    private readonly ids: IdGeneratorPort,
  ) {}

  async execute(request: EvaluateClaimRequest): Promise<ClaimEvaluationResult> {
    const started = Date.now();
    const timestamp = request.nowIso ?? this.clock.nowIso();
    const correlationId =
      request.correlationId ?? this.ids.newCorrelationId();
    const intent = request.intent ?? "evaluate";

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
          : detailCode === "CLAIM_AUTHORITY_FORBIDDEN" ||
              detailCode === "CLAIM_SELF_REVIEW_FORBIDDEN" ||
              detailCode === "CLAIM_WAIVER_FORBIDDEN"
            ? ("oa.claim_evaluation.authority_rejected" as const)
            : ("oa.claim_evaluation.operation_rejected" as const);
      this.audit.append({
        event,
        ts: timestamp,
        correlationId,
        claimEvaluationId: request.claimEvaluationId,
        reviewBundleId: request.reviewBundleId,
        actorId: request.actor.actorId,
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
          reviewBundleId: request.reviewBundleId,
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
      if (!isReviewBundleId(request.reviewBundleId)) {
        return fail("CLAIM_EVALUATION_INVALID", "review_bundle_id_invalid");
      }
      if (!assertIdempotencyKey(request.idempotencyKey)) {
        return fail("CLAIM_EVALUATION_INVALID", "idempotency_key_too_short");
      }
      if (
        typeof request.claimStatement !== "string" ||
        request.claimStatement.trim().length === 0 ||
        request.claimStatement.length > 2000
      ) {
        return fail("CLAIM_EVALUATION_INVALID", "claim_statement_invalid");
      }
      if (containsForbiddenSecret(request.claimStatement)) {
        return fail("CLAIM_SECRET_FORBIDDEN", "secret_in_claim_statement");
      }
      if (containsForbiddenSecret(request.actor.displayName)) {
        return fail("CLAIM_SECRET_FORBIDDEN", "secret_in_actor");
      }
      if (containsForbiddenSecret(request.waiverReason)) {
        return fail("CLAIM_SECRET_FORBIDDEN", "secret_in_waiver_reason");
      }
      if (containsForbiddenSecret(request.disputeReason)) {
        return fail("CLAIM_SECRET_FORBIDDEN", "secret_in_dispute_reason");
      }
      if (
        request.supersedesClaimEvaluationId &&
        !isClaimEvaluationId(request.supersedesClaimEvaluationId)
      ) {
        return fail(
          "CLAIM_EVALUATION_INVALID",
          "supersedes_claim_evaluation_id_invalid",
        );
      }

      const required = sortEvidenceIds(request.requiredEvidenceRefs ?? []);
      for (const id of required) {
        if (!isEvidenceId(id)) {
          return fail("CLAIM_EVALUATION_INVALID", "evidence_id_invalid", {
            evidenceId: id,
          });
        }
      }
      if (new Set(required).size !== required.length) {
        return fail("CLAIM_EVALUATION_INVALID", "duplicate_required_evidence");
      }

      const fingerprint = fingerprintCommand(
        registerFingerprintBody({
          claimEvaluationId: request.claimEvaluationId,
          idempotencyKey: request.idempotencyKey,
          claimType: request.claimType,
          claimStatement: request.claimStatement,
          criticality: request.criticality,
          evaluationMethod: request.evaluationMethod,
          ruleRef: request.ruleRef,
          requiredEvidenceRefs: required,
          reviewBundleId: request.reviewBundleId,
          reviewBundleVersion: request.reviewBundleVersion,
          intent,
          waiverReason: request.waiverReason,
          disputeReason: request.disputeReason,
          supersedesClaimEvaluationId: request.supersedesClaimEvaluationId,
          actor: request.actor,
        }),
      );

      const existingIdem = await this.repo.findByIdempotencyKey(
        request.idempotencyKey,
      );
      if (existingIdem) {
        if (
          existingIdem.record.fingerprint === fingerprint &&
          existingIdem.record.operation === "evaluate_claim"
        ) {
          const durationMs = Date.now() - started;
          this.audit.append({
            event: "oa.claim_evaluation.evaluated",
            ts: timestamp,
            correlationId,
            claimEvaluationId: existingIdem.claimEvaluation.claimEvaluationId,
            reviewBundleId: existingIdem.claimEvaluation.reviewBundleId,
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

      if (await this.repo.exists(request.claimEvaluationId)) {
        return fail(
          "CLAIM_EVALUATION_ALREADY_EXISTS",
          "claim_evaluation_id_taken",
        );
      }

      if (request.supersedesClaimEvaluationId) {
        const prior = await this.repo.findById(
          request.supersedesClaimEvaluationId,
        );
        if (!prior) {
          return fail(
            "CLAIM_EVALUATION_NOT_FOUND",
            "superseded_claim_missing",
          );
        }
      }

      const bundle = await this.bundles.findById(request.reviewBundleId);
      if (!bundle) {
        return fail("REVIEW_BUNDLE_NOT_FOUND", "missing_review_bundle");
      }
      if (!bundle.frozenAt || !bundle.frozenVersion) {
        return fail(
          "CLAIM_REVIEW_BUNDLE_INVALID",
          "review_bundle_not_frozen",
          { reviewBundleId: request.reviewBundleId },
        );
      }
      if (bundle.frozenVersion !== request.reviewBundleVersion) {
        return fail(
          "CLAIM_REVIEW_BUNDLE_VERSION_MISMATCH",
          "review_bundle_version_mismatch",
          { reviewBundleId: request.reviewBundleId },
        );
      }

      if (intent === "waive") {
        return await this.waive({
          request,
          required,
          fingerprint,
          timestamp,
          correlationId,
          started,
          fail,
        });
      }
      if (intent === "dispute") {
        return await this.dispute({
          request,
          required,
          fingerprint,
          timestamp,
          correlationId,
          started,
          fail,
        });
      }

      // intent === evaluate
      if (required.length < 1) {
        // Empty required refs: never PASS — create not_proven evaluation.
        const claim = this.baseClaim({
          request,
          required,
          timestamp,
          correlationId,
          status: "not_proven",
          provided: [],
          evaluatedAt: timestamp,
        });
        const shape = validateClaimEvaluationShape(claim);
        if (shape) {
          return fail(shape.detailCode, shape.reason);
        }
        await this.repo.create(claim, {
          claimEvaluationId: claim.claimEvaluationId,
          fingerprint,
          operation: "evaluate_claim",
        });
        return this.okResult(claim, timestamp, correlationId, started, "not_proven");
      }

      const assessed = await assessRequiredEvidence({
        requiredEvidenceRefs: required,
        bundle,
        evidenceReader: this.evidence,
      });

      if (assessed.blockingCode) {
        const status: ClaimEvaluationStatus =
          assessed.blockingCode === "missing" ||
          assessed.blockingCode === "not_in_bundle" ||
          assessed.blockingCode === "unavailable"
            ? "not_proven"
            : assessed.blockingCode === "not_verified" ||
                assessed.blockingCode === "stale" ||
                assessed.blockingCode === "incomplete"
              ? "not_proven"
              : "fail";
        const claim = this.baseClaim({
          request,
          required,
          timestamp,
          correlationId,
          status,
          provided: assessed.provided,
          evaluatedAt: timestamp,
          assessments: assessed.assessments,
        });
        const shape = validateClaimEvaluationShape(claim);
        if (shape) {
          return fail(shape.detailCode, shape.reason, {
            evidenceId: assessed.blockingEvidenceId,
          });
        }
        await this.repo.create(claim, {
          claimEvaluationId: claim.claimEvaluationId,
          fingerprint,
          operation: "evaluate_claim",
        });
        // Still a successful evaluation producing not_proven/fail — not an error.
        return this.okResult(
          claim,
          timestamp,
          correlationId,
          started,
          status,
        );
      }

      // All required evidence support PASS.
      // Bundle synthesis-only / incomplete cannot yield consumable PASS path:
      // for non_critical deterministic we still require !synthesisOnly && complete
      // when producing status=pass; otherwise not_proven.
      if (bundle.synthesisOnly || bundle.completeness !== "complete") {
        const claim = this.baseClaim({
          request,
          required,
          timestamp,
          correlationId,
          status: "not_proven",
          provided: assessed.provided,
          evaluatedAt: timestamp,
          assessments: assessed.assessments,
        });
        await this.repo.create(claim, {
          claimEvaluationId: claim.claimEvaluationId,
          fingerprint,
          operation: "evaluate_claim",
        });
        return this.okResult(
          claim,
          timestamp,
          correlationId,
          started,
          "not_proven",
        );
      }

      if (
        request.criticality === "non_critical" &&
        request.evaluationMethod === "deterministic"
      ) {
        const claim = this.baseClaim({
          request,
          required,
          timestamp,
          correlationId,
          status: "pass",
          provided: assessed.provided,
          evaluatedAt: timestamp,
          assessments: assessed.assessments,
          confirmationAuthority: "system_deterministic",
        });
        const shape = validateClaimEvaluationShape(claim);
        if (shape) {
          return fail(shape.detailCode, shape.reason);
        }
        await this.repo.create(claim, {
          claimEvaluationId: claim.claimEvaluationId,
          fingerprint,
          operation: "evaluate_claim",
        });
        return this.okResult(claim, timestamp, correlationId, started, "pass");
      }

      // Critical / structural / assisted: evaluating — await ConfirmClaimEvaluation.
      const claim = this.baseClaim({
        request,
        required,
        timestamp,
        correlationId,
        status: "evaluating",
        provided: assessed.provided,
        evaluatedAt: timestamp,
        assessments: assessed.assessments,
        reviewedBy: request.actor.role === "system" ? undefined : request.actor,
      });
      const shape = validateClaimEvaluationShape(claim);
      if (shape) {
        return fail(shape.detailCode, shape.reason);
      }
      await this.repo.create(claim, {
        claimEvaluationId: claim.claimEvaluationId,
        fingerprint,
        operation: "evaluate_claim",
      });
      return this.okResult(
        claim,
        timestamp,
        correlationId,
        started,
        "evaluating",
      );
    } catch (err) {
      if (isClaimEvaluationDomainError(err)) {
        return fail(err.detailCode, err.message, {
          expectedVersion: err.expectedVersion,
          currentVersion: err.currentVersion,
        });
      }
      return fail(
        "CLAIM_EVALUATION_PERSISTENCE_FAILED",
        "unexpected_evaluate_failure",
      );
    }
  }

  private async waive(input: {
    request: EvaluateClaimRequest;
    required: string[];
    fingerprint: string;
    timestamp: string;
    correlationId: string;
    started: number;
    fail: (
      detailCode: Parameters<typeof createClaimEvaluationError>[0]["detailCode"],
      internalCauseRef: string,
      extra?: Partial<Parameters<typeof createClaimEvaluationError>[0]> & {
        claimEvaluation?: ClaimEvaluation;
      },
    ) => ClaimEvaluationResult;
  }): Promise<ClaimEvaluationResult> {
    const { request, required, fingerprint, timestamp, correlationId, started, fail } =
      input;
    if (!request.waiverReason?.trim()) {
      return fail("CLAIM_EVALUATION_INVALID", "waiver_reason_required");
    }
    if (request.actor.role === "system" || request.actor.role === "agent") {
      return fail("CLAIM_WAIVER_FORBIDDEN", "waiver_system_or_agent");
    }
    const requiredLevel =
      request.criticality === "structural" ? ("N3" as const) : ("N2" as const);
    const auth = this.authority.verify({
      actorId: request.actor.actorId,
      requiredLevel,
      scope: CLAIM_AUTHORITY_SCOPE,
      requireMorrisGate: request.criticality === "structural",
    });
    if (!auth.ok) {
      return fail("CLAIM_AUTHORITY_FORBIDDEN", auth.reason);
    }
    if (
      request.criticality === "structural" &&
      request.actor.role !== "decision_maker"
    ) {
      return fail("CLAIM_AUTHORITY_FORBIDDEN", "structural_waiver_requires_morris_role");
    }

    const claim = this.baseClaim({
      request,
      required,
      timestamp,
      correlationId,
      status: "waived",
      provided: [],
      waiver: {
        reason: request.waiverReason,
        authorizedBy: { ...request.actor },
        authorizedAt: timestamp,
        reversible: true,
      },
    });
    const shape = validateClaimEvaluationShape(claim);
    if (shape) {
      return fail(shape.detailCode, shape.reason);
    }
    await this.repo.create(claim, {
      claimEvaluationId: claim.claimEvaluationId,
      fingerprint,
      operation: "evaluate_claim",
    });
    return this.okResult(claim, timestamp, correlationId, started, "waived");
  }

  private async dispute(input: {
    request: EvaluateClaimRequest;
    required: string[];
    fingerprint: string;
    timestamp: string;
    correlationId: string;
    started: number;
    fail: (
      detailCode: Parameters<typeof createClaimEvaluationError>[0]["detailCode"],
      internalCauseRef: string,
      extra?: Partial<Parameters<typeof createClaimEvaluationError>[0]> & {
        claimEvaluation?: ClaimEvaluation;
      },
    ) => ClaimEvaluationResult;
  }): Promise<ClaimEvaluationResult> {
    const { request, required, fingerprint, timestamp, correlationId, started, fail } =
      input;
    if (!request.disputeReason?.trim()) {
      return fail("CLAIM_EVALUATION_INVALID", "dispute_reason_required");
    }
    if (request.actor.role === "system" || request.actor.role === "agent") {
      return fail("CLAIM_AUTHORITY_FORBIDDEN", "dispute_system_or_agent");
    }
    const claim = this.baseClaim({
      request,
      required,
      timestamp,
      correlationId,
      status: "disputed",
      provided: [],
      dispute: {
        reason: request.disputeReason,
        raisedBy: { ...request.actor },
        raisedAt: timestamp,
      },
    });
    const shape = validateClaimEvaluationShape(claim);
    if (shape) {
      return fail(shape.detailCode, shape.reason);
    }
    await this.repo.create(claim, {
      claimEvaluationId: claim.claimEvaluationId,
      fingerprint,
      operation: "evaluate_claim",
    });
    return this.okResult(claim, timestamp, correlationId, started, "disputed");
  }

  private baseClaim(input: {
    request: EvaluateClaimRequest;
    required: string[];
    timestamp: string;
    correlationId: string;
    status: ClaimEvaluationStatus;
    provided: string[];
    evaluatedAt?: string;
    assessments?: ClaimEvaluation["evidenceAssessments"];
    confirmationAuthority?: ClaimEvaluation["confirmationAuthority"];
    reviewedBy?: ClaimEvaluation["reviewedBy"];
    waiver?: ClaimEvaluation["waiver"];
    dispute?: ClaimEvaluation["dispute"];
  }): ClaimEvaluation {
    const { request } = input;
    return {
      schemaVersion: CLAIM_EVALUATION_SCHEMA_VERSION,
      claimEvaluationId: request.claimEvaluationId,
      claimType: request.claimType,
      claimStatement: request.claimStatement,
      criticality: request.criticality,
      evaluationMethod: request.evaluationMethod,
      ruleRef: request.ruleRef,
      requiredEvidenceRefs: input.required,
      providedEvidenceRefs: input.provided,
      reviewBundleId: request.reviewBundleId,
      reviewBundleVersion: request.reviewBundleVersion,
      status: input.status,
      proposedBy: { ...request.actor },
      reviewedBy: input.reviewedBy,
      confirmationAuthority: input.confirmationAuthority,
      proposedAt: input.timestamp,
      evaluatedAt: input.evaluatedAt,
      waiver: input.waiver,
      dispute: input.dispute,
      provenance: buildProvenance({
        ids: this.ids,
        actor: request.actor,
        source: "review",
        timestamp: input.timestamp,
        correlationId: input.correlationId,
      }),
      version: 1,
      evidenceAssessments: input.assessments
        ? structuredClone(input.assessments)
        : undefined,
      supersedesClaimEvaluationId: request.supersedesClaimEvaluationId,
      idempotencyKey: request.idempotencyKey,
    };
  }

  private okResult(
    claim: ClaimEvaluation,
    timestamp: string,
    correlationId: string,
    started: number,
    newStatus: string,
  ): ClaimEvaluationResult {
    const durationMs = Date.now() - started;
    const event =
      newStatus === "pass"
        ? ("oa.claim_evaluation.passed" as const)
        : newStatus === "fail"
          ? ("oa.claim_evaluation.failed" as const)
          : newStatus === "not_proven"
            ? ("oa.claim_evaluation.inconclusive" as const)
            : newStatus === "waived"
              ? ("oa.claim_evaluation.waived" as const)
              : newStatus === "disputed"
                ? ("oa.claim_evaluation.disputed" as const)
                : newStatus === "evaluating"
                  ? ("oa.claim_evaluation.confirmation_requested" as const)
                  : ("oa.claim_evaluation.evaluated" as const);
    this.audit.append({
      event,
      ts: timestamp,
      correlationId,
      claimEvaluationId: claim.claimEvaluationId,
      reviewBundleId: claim.reviewBundleId,
      evidenceIds: claim.requiredEvidenceRefs,
      actorId: claim.proposedBy.actorId,
      newStatus: claim.status,
      version: claim.version,
      result: "ok",
      durationMs,
    });
    return {
      ok: true,
      claimEvaluation: structuredClone(claim),
      durationMs,
    };
  }
}
