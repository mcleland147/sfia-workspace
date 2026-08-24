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
  isAttemptBoundSnapshotValid,
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
import { resolveApplicableContractResultRule } from "./contractResultSemanticEvaluator";
import type { ExecutionContractSemanticMaterial } from "@/lib/oa/execution-contract";
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

      const snap = attempt.boundExecutionContract;
      // Historical Attempt without snapshot → durable NOT_PROVEN (not error).
      // Corrupt/tampered snapshot → application error.
      if (snap && !isAttemptBoundSnapshotValid(attempt)) {
        return fail(
          "CLAIM_EVALUATION_INVALID",
          "bound_snapshot_corrupt_or_inconsistent",
        );
      }

      if (evidence.bindings.executionAttemptId !== attempt.attemptId) {
        return fail("CLAIM_EVALUATION_INVALID", "evidence_attempt_mismatch");
      }
      if (reviewBundle.completeness !== "complete") {
        return fail("CLAIM_REVIEW_BUNDLE_INVALID", "review_bundle_incomplete");
      }
      if (!reviewBundle.frozenAt || !reviewBundle.frozenVersion) {
        return fail(
          "CLAIM_REVIEW_BUNDLE_INVALID",
          "review_bundle_not_frozen",
        );
      }
      if (reviewBundle.status !== "ready_for_review") {
        return fail(
          "CLAIM_REVIEW_BUNDLE_INVALID",
          "review_bundle_not_ready_for_review",
        );
      }
      if (reviewBundle.synthesisOnly) {
        return fail(
          "CLAIM_REVIEW_BUNDLE_INVALID",
          "review_bundle_synthesis_only",
        );
      }

      const frozenSnapshot = (reviewBundle.frozenEvidenceSnapshots ?? []).find(
        (s) => s.evidenceId === evidence.evidenceId,
      );
      if (!frozenSnapshot) {
        return fail(
          "CLAIM_EVIDENCE_NOT_IN_REVIEW_BUNDLE",
          "evidence_not_in_frozen_snapshot",
        );
      }
      if (frozenSnapshot.evidenceVersion !== evidence.version) {
        return fail(
          "CLAIM_EVIDENCE_VERSION_MISMATCH",
          "evidence_version_frozen_mismatch",
        );
      }

      const missingSnapshot = !snap;
      // Historical missing snapshot: do NOT reconstruct EO/ER from latest EC.
      // Use empty assessment lists + durable not_proven.
      const semanticMaterial = (snap?.semanticMaterial ?? {
        executionContractId: attempt.executionContractId,
        projectId:
          evidence.bindings.projectId ??
          contract.projectId,
        action: "",
        target: "",
        scope: "",
        requiredCapabilities: [],
        requiredAuthority: "N1",
        constraints: [],
        stopConditions: [],
        evidenceRequirements: [],
        expectedOutputs: [],
        reversibility: "reversible",
        idempotencyKey: "",
      }) as ExecutionContractSemanticMaterial;
      const boundFingerprint = snap?.semanticFingerprint ?? "";
      const applicableRule = missingSnapshot
        ? ({ applicable: false, ruleRef: null } as const)
        : resolveApplicableContractResultRule(semanticMaterial);

      const fingerprint = fingerprintCommand(
        registerFingerprintBody({
          claimEvaluationId: request.claimEvaluationId,
          idempotencyKey: request.idempotencyKey,
          reviewBundleId: reviewBundle.reviewBundleId,
          executionAttemptId: attempt.attemptId,
          executionContractId: attempt.executionContractId,
          contractVersion: attempt.executionContractVersion,
          semanticFingerprint: boundFingerprint,
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
        semanticMaterial,
        semanticFingerprint: boundFingerprint || "missing-bound-snapshot",
        attempt,
        evidence,
        evaluatedAt: timestamp,
        frozenEvidenceSnapshot: frozenSnapshot,
      };
      const expectedOutputAssessments = missingSnapshot
        ? (semanticMaterial.expectedOutputs ?? []).map((expectation, ordinal) => ({
            itemId: {
              semanticFingerprint: "missing-bound-snapshot",
              itemKind: "EO" as const,
              ordinal,
            },
            expectation,
            result: "NOT_PROVEN" as const,
            method: "deterministic" as const,
            provenance: {
              evaluatorRef: "w3b-contract-result-assessor",
              evaluatedAt: timestamp,
            },
          }))
        : assessExpectedOutputs(assessmentInput);
      const evidenceRequirementAssessments = missingSnapshot
        ? (semanticMaterial.evidenceRequirements ?? []).map(
            (requirement, ordinal) => ({
              itemId: {
                semanticFingerprint: "missing-bound-snapshot",
                itemKind: "ER" as const,
                ordinal,
              },
              requirement,
              result: "NOT_PROVEN" as const,
              method: "deterministic" as const,
              provenance: {
                evaluatorRef: "w3b-contract-result-assessor",
                evaluatedAt: timestamp,
              },
            }),
          )
        : assessEvidenceRequirements(assessmentInput);

      // Missing snapshot with empty EO/ER lists: still emit durable not_proven CE.
      const status = missingSnapshot
        ? "not_proven"
        : deriveCanonicalContractResultStatus({
            attemptStatus: attempt.status,
            expectedOutputAssessments,
            evidenceRequirementAssessments,
          });

      const claimEvaluation: ClaimEvaluation = {
        schemaVersion: CLAIM_EVALUATION_SCHEMA_VERSION,
        claimEvaluationId: request.claimEvaluationId,
        claimType: "conformite",
        claimStatement: buildContractResultClaimStatement({
          executionContractId: attempt.executionContractId,
          attemptStatus: attempt.status,
          status,
          boundContractVersion: attempt.executionContractVersion,
          expectedOutputCount: expectedOutputAssessments.length,
          evidenceRequirementCount: evidenceRequirementAssessments.length,
          notApplicableReason: missingSnapshot
            ? "historical_attempt_missing_bound_snapshot"
            : applicableRule.applicable
              ? undefined
              : "no_applicable_contract_result_rule",
        }),
        criticality: "non_critical",
        evaluationMethod: "deterministic",
        ...(applicableRule.applicable ? { ruleRef: applicableRule.ruleRef } : {}),
        requiredEvidenceRefs: [evidence.evidenceId],
        providedEvidenceRefs: [evidence.evidenceId],
        reviewBundleId: reviewBundle.reviewBundleId,
        reviewBundleVersion: reviewBundle.frozenVersion,
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
          projectId: semanticMaterial.projectId || contract.projectId,
          cycleInstanceId:
            semanticMaterial.cycleInstanceId ?? contract.cycleInstanceId,
        }),
        version: 1,
        idempotencyKey: request.idempotencyKey,
        subjectKind: CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT,
        contractResultBindings: {
          projectId: semanticMaterial.projectId || contract.projectId,
          cycleInstanceId:
            (semanticMaterial.cycleInstanceId ??
              evidence.bindings.cycleInstanceId ??
              contract.cycleInstanceId) ?? null,
          executionContractId: attempt.executionContractId,
          executionContractVersion: attempt.executionContractVersion,
          executionContractSemanticFingerprint:
            boundFingerprint || "historical-missing-bound-snapshot",
          executionAttemptId: attempt.attemptId,
          reviewBundleId: reviewBundle.reviewBundleId,
          reviewBundleVersion: reviewBundle.frozenVersion,
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
