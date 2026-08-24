/**
 * EvaluateContractResult — TD-W3B-01 contract-result ClaimEvaluation owner (FC-12).
 * Server writes canonical status only; claimStatement is audit projection.
 */
import type { ClockPort } from "@/lib/oa/doctrine";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import type { ActorReference } from "@/lib/oa/doctrine";
import {
  createClaimEvaluationError,
  isClaimEvaluationDomainError,
} from "../domain/claimEvaluationErrors";
import {
  isClaimEvaluationId,
  isReviewBundleId,
  validateClaimEvaluationShape,
} from "../domain/claimEvaluationInvariants";
import type {
  ClaimEvaluation,
  ClaimEvaluationResult,
} from "../domain/claimEvaluationTypes";
import { CLAIM_EVALUATION_SCHEMA_VERSION } from "../domain/claimEvaluationTypes";
import {
  CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT,
  W3B_CONTRACT_RESULT_REVIEW_POLICY_REF,
  isAttemptContractVersionBound,
} from "../domain/contractResultTypes";
import type { ExecutionAttemptSnapshot } from "../domain/types";
import type { Evidence } from "../domain/types";
import type { ReviewBundle } from "../domain/reviewBundleTypes";
import type { EvidenceAuditPort } from "../ports/evidenceAudit";
import type { ClaimEvaluationRepositoryPort } from "../ports/claimEvaluationRepository";
import type { IdGeneratorPort } from "../ports/idGenerator";
import {
  assessExpectedOutputs,
  assessEvidenceRequirements,
  buildContractResultClaimStatement,
  deriveCanonicalContractResultStatus,
} from "./contractResultAssessment";
import {
  assertIdempotencyKey,
  buildProvenance,
  fingerprintCommand,
  registerFingerprintBody,
} from "./evidenceSupport";

export type EvaluateContractResultRequest = {
  claimEvaluationId: string;
  idempotencyKey: string;
  actor: ActorReference;
  contract: ExecutionContract;
  attempt: ExecutionAttemptSnapshot;
  evidence: Evidence;
  reviewBundle: ReviewBundle;
  correlationId?: string;
  nowIso?: string;
};

export class EvaluateContractResult {
  constructor(
    private readonly repo: ClaimEvaluationRepositoryPort,
    private readonly clock: ClockPort,
    private readonly audit: EvidenceAuditPort,
    private readonly ids: IdGeneratorPort,
  ) {}

  async execute(
    request: EvaluateContractResultRequest,
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
      this.audit.append({
        event: "oa.claim_evaluation.operation_rejected",
        ts: timestamp,
        correlationId,
        claimEvaluationId: request.claimEvaluationId,
        reviewBundleId: request.reviewBundle.reviewBundleId,
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
          reviewBundleId: request.reviewBundle.reviewBundleId,
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
      if (!isReviewBundleId(request.reviewBundle.reviewBundleId)) {
        return fail("CLAIM_EVALUATION_INVALID", "review_bundle_id_invalid");
      }
      if (!assertIdempotencyKey(request.idempotencyKey)) {
        return fail("CLAIM_EVALUATION_INVALID", "idempotency_key_too_short");
      }

      const { contract, attempt, evidence, reviewBundle } = request;

      if (contract.executionContractId !== attempt.executionContractId) {
        return fail("CLAIM_EVALUATION_INVALID", "contract_attempt_mismatch");
      }
      const versionAligned = isAttemptContractVersionBound({
        contract,
        attempt,
      });
      if (evidence.bindings.executionAttemptId !== attempt.attemptId) {
        return fail("CLAIM_EVALUATION_INVALID", "evidence_attempt_mismatch");
      }
      if (reviewBundle.completeness !== "complete") {
        return fail("CLAIM_REVIEW_BUNDLE_INVALID", "review_bundle_incomplete");
      }

      const fingerprint = fingerprintCommand(
        registerFingerprintBody({
          claimEvaluationId: request.claimEvaluationId,
          idempotencyKey: request.idempotencyKey,
          reviewBundleId: reviewBundle.reviewBundleId,
          executionAttemptId: attempt.attemptId,
          executionContractId: contract.executionContractId,
          contractVersion: contract.version,
          semanticFingerprint: contract.semanticFingerprint,
          actor: request.actor,
        }),
      );

      const existingIdem = await this.repo.findByIdempotencyKey(
        request.idempotencyKey,
      );
      if (existingIdem) {
        if (
          existingIdem.record.fingerprint === fingerprint &&
          existingIdem.record.operation === "evaluate_contract_result"
        ) {
          const durationMs = Date.now() - started;
          return {
            ok: true,
            claimEvaluation: existingIdem.claimEvaluation,
            reusedFromIdempotencyKey: true,
            durationMs,
          };
        }
        return fail("IDEMPOTENCY_CONFLICT", "idempotency_fingerprint_mismatch");
      }

      const assessmentInput = {
        contract: {
          ...contract,
          semanticFingerprint: contract.semanticFingerprint ?? "",
        },
        attempt,
        evidence,
        evaluatedAt: timestamp,
      };
      const expectedOutputAssessments = versionAligned
        ? assessExpectedOutputs(assessmentInput)
        : assessExpectedOutputs(assessmentInput).map((a) => ({
            ...a,
            result: "NOT_PROVEN" as const,
          }));
      const evidenceRequirementAssessments = versionAligned
        ? assessEvidenceRequirements(assessmentInput)
        : assessEvidenceRequirements(assessmentInput).map((a) => ({
            ...a,
            result: "NOT_PROVEN" as const,
          }));
      const status = versionAligned
        ? deriveCanonicalContractResultStatus({
            attemptStatus: attempt.status,
            expectedOutputAssessments,
            evidenceRequirementAssessments,
          })
        : ("not_proven" as const);

      const claimEvaluation: ClaimEvaluation = {
        schemaVersion: CLAIM_EVALUATION_SCHEMA_VERSION,
        claimEvaluationId: request.claimEvaluationId,
        claimType: "conformite",
        claimStatement: buildContractResultClaimStatement({
          contract,
          attemptStatus: attempt.status,
          status,
        }),
        criticality: "non_critical",
        evaluationMethod: "deterministic",
        ruleRef: "w3b-product-completion-contract-result-v1",
        requiredEvidenceRefs: [evidence.evidenceId],
        providedEvidenceRefs: [evidence.evidenceId],
        reviewBundleId: reviewBundle.reviewBundleId,
        reviewBundleVersion: reviewBundle.version,
        status,
        proposedBy: request.actor,
        confirmationAuthority: "system_deterministic",
        proposedAt: timestamp,
        evaluatedAt: timestamp,
        provenance: buildProvenance({
          ids: this.ids,
          actor: request.actor,
          source: "review",
          timestamp,
          correlationId,
          projectId: contract.projectId,
          cycleInstanceId: contract.cycleInstanceId,
        }),
        version: 1,
        idempotencyKey: request.idempotencyKey,
        subjectKind: CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT,
        contractResultBindings: {
          projectId: contract.projectId,
          cycleInstanceId: contract.cycleInstanceId ?? null,
          executionContractId: contract.executionContractId,
          executionContractVersion: attempt.executionContractVersion,
          executionContractSemanticFingerprint: contract.semanticFingerprint ?? "",
          executionAttemptId: attempt.attemptId,
          reviewBundleId: reviewBundle.reviewBundleId,
          reviewBundleVersion: reviewBundle.version,
          evidenceRefs: [evidence.evidenceId],
        },
        expectedOutputAssessments,
        evidenceRequirementAssessments,
        contractResultReviewPolicyRef: W3B_CONTRACT_RESULT_REVIEW_POLICY_REF,
      };

      const shape = validateClaimEvaluationShape(claimEvaluation);
      if (shape) {
        return fail(shape.detailCode, shape.reason, {
          internalCauseRef: shape.reason,
        });
      }

      await this.repo.create(claimEvaluation, {
        claimEvaluationId: claimEvaluation.claimEvaluationId,
        fingerprint,
        operation: "evaluate_contract_result",
      });

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.claim_evaluation.evaluated",
        ts: timestamp,
        correlationId,
        claimEvaluationId: claimEvaluation.claimEvaluationId,
        reviewBundleId: reviewBundle.reviewBundleId,
        actorId: request.actor.actorId,
        result: "ok",
        durationMs,
      });

      return {
        ok: true,
        claimEvaluation: structuredClone(claimEvaluation),
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
        "unexpected_evaluate_contract_result_failure",
      );
    }
  }
}
