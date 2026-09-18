/**
 * EvaluateContractResult — TD-W3B-01 contract-result ClaimEvaluation owner (FC-12).
 * Server writes canonical status only; claimStatement is audit projection.
 * Evidence selection is server-owned via Result Semantics Registry.
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
} from "../domain/contractResultTypes";
import { validateBoundExecutionContractSnapshot } from "@/lib/oa/execution-attempt/domain/boundExecutionContract";
import type { ExecutionAttemptSnapshot } from "../domain/types";
import type { Evidence } from "../domain/types";
import type { ReviewBundle } from "../domain/reviewBundleTypes";
import type { EvidenceAuditPort } from "../ports/evidenceAudit";
import type { ClaimEvaluationRepositoryPort } from "../ports/claimEvaluationRepository";
import type { EvidenceReaderPort } from "../ports/evidenceReader";
import type { IdGeneratorPort } from "../ports/idGenerator";
import {
  assessExpectedOutputs,
  assessEvidenceRequirements,
  buildContractResultClaimStatement,
  deriveCanonicalContractResultStatus,
} from "./contractResultAssessment";
import { resolveApplicableContractResultSemantics } from "./contractResultSemantics";
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
  /**
   * @deprecated optional — server selects from frozen RB; if provided must be among selected.
   */
  evidence?: Evidence;
  reviewBundle: ReviewBundle;
  supersedesClaimEvaluationId?: string;
  correlationId?: string;
  nowIso?: string;
};

const SUPERSESSION_CHAIN_MAX = 32;

export class EvaluateContractResult {
  constructor(
    private readonly repo: ClaimEvaluationRepositoryPort,
    private readonly clock: ClockPort,
    private readonly audit: EvidenceAuditPort,
    private readonly ids: IdGeneratorPort,
    private readonly evidenceReader: EvidenceReaderPort,
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

      const { contract, attempt, reviewBundle } = request;

      if (contract.executionContractId !== attempt.executionContractId) {
        return fail("CLAIM_EVALUATION_INVALID", "contract_attempt_mismatch");
      }

      const snap = attempt.boundExecutionContract;
      // Historical Attempt without snapshot → durable NOT_PROVEN (not error).
      // Corrupt/tampered/incoherent snapshot → application error via canonical validator.
      if (snap) {
        const snapshotValidation = validateBoundExecutionContractSnapshot({
          attempt,
          requirePresent: true,
          expectedProjectId: contract.projectId,
          expectedCycleInstanceId: contract.cycleInstanceId ?? null,
        });
        if (!snapshotValidation.ok) {
          return fail(
            "CLAIM_EVALUATION_INVALID",
            snapshotValidation.reason,
          );
        }
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

      const frozenSnapshots = reviewBundle.frozenEvidenceSnapshots ?? [];
      const missingSnapshot = !snap;
      const semanticMaterial = (snap?.semanticMaterial ?? {
        executionContractId: attempt.executionContractId,
        projectId: contract.projectId,
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

      const semanticsResolution = missingSnapshot
        ? ({ status: "none" } as const)
        : resolveApplicableContractResultSemantics(semanticMaterial);

      if (semanticsResolution.status === "ambiguous") {
        return fail(
          "CLAIM_EVALUATION_INVALID",
          "ambiguous_contract_result_semantics",
        );
      }

      const applicableSemantic =
        semanticsResolution.status === "one"
          ? semanticsResolution.semantic
          : null;

      let selectedEvidenceIds: string[] = [];
      let evidences: Evidence[] = [];
      let evidenceIncomplete = false;

      if (applicableSemantic) {
        const selection = applicableSemantic.selectEvidenceIds({
          material: semanticMaterial,
          attempt,
          frozenSnapshots,
        });
        selectedEvidenceIds = [...selection.requiredEvidenceIds];

        if (selection.incompleteReason || selectedEvidenceIds.length === 0) {
          evidenceIncomplete = true;
        } else {
          for (const evidenceId of selectedEvidenceIds) {
            const frozenSnapshot = frozenSnapshots.find(
              (s) => s.evidenceId === evidenceId,
            );
            if (!frozenSnapshot) {
              return fail(
                "CLAIM_EVIDENCE_NOT_IN_REVIEW_BUNDLE",
                "evidence_not_in_frozen_snapshot",
              );
            }
            const loaded = await this.evidenceReader.findById(evidenceId);
            if (!loaded) {
              // Id present in frozen RB but unloadable → hard fail (corrupt).
              return fail(
                "CLAIM_EVIDENCE_NOT_IN_REVIEW_BUNDLE",
                "evidence_load_failed_for_frozen_id",
              );
            }
            if (frozenSnapshot.evidenceVersion !== loaded.version) {
              return fail(
                "CLAIM_EVIDENCE_VERSION_MISMATCH",
                "evidence_version_frozen_mismatch",
              );
            }
            evidences.push(loaded);
          }
        }

        if (
          request.evidence &&
          !selectedEvidenceIds.includes(request.evidence.evidenceId)
        ) {
          return fail(
            "CLAIM_EVALUATION_INVALID",
            "evidence_not_selected_by_semantic",
          );
        }

        // Optional request.evidence: if provided and selected, prefer its instance
        // when already in the loaded set (identity match); otherwise keep loaded.
        if (
          request.evidence &&
          selectedEvidenceIds.includes(request.evidence.evidenceId) &&
          !evidences.some((e) => e.evidenceId === request.evidence!.evidenceId)
        ) {
          evidences.push(request.evidence);
        }
      } else if (request.evidence) {
        // Zero-match semantic with deprecated evidence still present: keep soft path.
        const frozenSnapshot = frozenSnapshots.find(
          (s) => s.evidenceId === request.evidence!.evidenceId,
        );
        if (!frozenSnapshot) {
          return fail(
            "CLAIM_EVIDENCE_NOT_IN_REVIEW_BUNDLE",
            "evidence_not_in_frozen_snapshot",
          );
        }
        if (frozenSnapshot.evidenceVersion !== request.evidence.version) {
          return fail(
            "CLAIM_EVIDENCE_VERSION_MISMATCH",
            "evidence_version_frozen_mismatch",
          );
        }
        if (
          request.evidence.bindings.executionAttemptId !== attempt.attemptId
        ) {
          return fail("CLAIM_EVALUATION_INVALID", "evidence_attempt_mismatch");
        }
        selectedEvidenceIds = [request.evidence.evidenceId];
        evidences = [request.evidence];
      }

      // Supersession validation (before create).
      if (request.supersedesClaimEvaluationId) {
        if (!isClaimEvaluationId(request.supersedesClaimEvaluationId)) {
          return fail(
            "CLAIM_EVALUATION_INVALID",
            "supersedes_claim_evaluation_id_invalid",
          );
        }
        if (
          request.supersedesClaimEvaluationId === request.claimEvaluationId
        ) {
          return fail(
            "CLAIM_EVALUATION_INVALID",
            "supersedes_self_forbidden",
          );
        }
        const prior = await this.repo.findById(
          request.supersedesClaimEvaluationId,
        );
        if (!prior) {
          return fail(
            "CLAIM_EVALUATION_NOT_FOUND",
            "superseded_claim_missing",
          );
        }
        if (
          prior.subjectKind !==
          CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT
        ) {
          return fail(
            "CLAIM_EVALUATION_INVALID",
            "supersedes_not_contract_result",
          );
        }
        if (
          prior.contractResultBindings?.executionAttemptId !==
          attempt.attemptId
        ) {
          return fail(
            "CLAIM_EVALUATION_INVALID",
            "supersedes_attempt_mismatch",
          );
        }
        if (
          prior.contractResultBindings?.executionContractId !==
          attempt.executionContractId
        ) {
          return fail(
            "CLAIM_EVALUATION_INVALID",
            "supersedes_contract_mismatch",
          );
        }
        const priorProjectId = prior.contractResultBindings?.projectId;
        const attemptProjectId =
          attempt.boundExecutionContract?.semanticMaterial?.projectId ??
          request.contract.projectId;
        if (
          priorProjectId &&
          attemptProjectId &&
          priorProjectId !== attemptProjectId
        ) {
          return fail(
            "CLAIM_EVALUATION_INVALID",
            "supersedes_project_mismatch",
          );
        }
        if (
          prior.contractResultBindings?.executionContractVersion !== undefined &&
          prior.contractResultBindings.executionContractVersion !==
            attempt.executionContractVersion
        ) {
          return fail(
            "CLAIM_EVALUATION_INVALID",
            "supersedes_contract_version_mismatch",
          );
        }
        const priorFp =
          prior.contractResultBindings?.executionContractSemanticFingerprint;
        if (
          priorFp &&
          boundFingerprint &&
          priorFp !== boundFingerprint
        ) {
          return fail(
            "CLAIM_EVALUATION_INVALID",
            "supersedes_semantic_fingerprint_mismatch",
          );
        }
        // Cycle / depth — walk prior chain; refuse cycle OR silent truncation.
        let cursor: string | undefined = prior.supersedesClaimEvaluationId;
        let depth = 0;
        const seen = new Set<string>([prior.claimEvaluationId]);
        while (cursor && depth < SUPERSESSION_CHAIN_MAX) {
          if (cursor === request.claimEvaluationId) {
            return fail(
              "CLAIM_EVALUATION_INVALID",
              "supersedes_cycle_detected",
            );
          }
          if (seen.has(cursor)) {
            return fail(
              "CLAIM_EVALUATION_INVALID",
              "supersedes_cycle_detected",
            );
          }
          seen.add(cursor);
          const next = await this.repo.findById(cursor);
          cursor = next?.supersedesClaimEvaluationId;
          depth += 1;
        }
        if (cursor) {
          return fail(
            "CLAIM_EVALUATION_INVALID",
            "supersedes_chain_too_deep",
          );
        }
      }

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
          ...(request.supersedesClaimEvaluationId
            ? {
                supersedesClaimEvaluationId:
                  request.supersedesClaimEvaluationId,
              }
            : {}),
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
        evidences,
        evaluatedAt: timestamp,
        frozenEvidenceSnapshots: frozenSnapshots,
      };
      const forceNotProven =
        missingSnapshot ||
        !applicableSemantic ||
        evidenceIncomplete;

      const expectedOutputAssessments = forceNotProven
        ? (semanticMaterial.expectedOutputs ?? []).map((expectation, ordinal) => ({
            itemId: {
              semanticFingerprint: missingSnapshot
                ? "missing-bound-snapshot"
                : boundFingerprint || "missing-bound-snapshot",
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
      const evidenceRequirementAssessments = forceNotProven
        ? (semanticMaterial.evidenceRequirements ?? []).map(
            (requirement, ordinal) => ({
              itemId: {
                semanticFingerprint: missingSnapshot
                  ? "missing-bound-snapshot"
                  : boundFingerprint || "missing-bound-snapshot",
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

      const status = forceNotProven
        ? "not_proven"
        : deriveCanonicalContractResultStatus({
            attemptStatus: attempt.status,
            expectedOutputAssessments,
            evidenceRequirementAssessments,
          });

      const evidenceRefs =
        selectedEvidenceIds.length > 0
          ? selectedEvidenceIds
          : evidences.map((e) => e.evidenceId);

      const notApplicableReason = missingSnapshot
        ? "historical_attempt_missing_bound_snapshot"
        : !applicableSemantic
          ? "no_applicable_contract_result_rule"
          : evidenceIncomplete
            ? "contract_result_evidence_incomplete"
            : undefined;

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
          notApplicableReason,
        }),
        criticality: "non_critical",
        evaluationMethod: "deterministic",
        ...(applicableSemantic ? { ruleRef: applicableSemantic.ruleRef } : {}),
        requiredEvidenceRefs: [...evidenceRefs],
        providedEvidenceRefs: [...evidenceRefs],
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
        ...(request.supersedesClaimEvaluationId
          ? {
              supersedesClaimEvaluationId:
                request.supersedesClaimEvaluationId,
            }
          : {}),
        contractResultBindings: {
          projectId: semanticMaterial.projectId || contract.projectId,
          cycleInstanceId:
            (semanticMaterial.cycleInstanceId ??
              evidences[0]?.bindings.cycleInstanceId ??
              contract.cycleInstanceId) ?? null,
          executionContractId: attempt.executionContractId,
          executionContractVersion: attempt.executionContractVersion,
          executionContractSemanticFingerprint:
            boundFingerprint || "historical-missing-bound-snapshot",
          executionAttemptId: attempt.attemptId,
          reviewBundleId: reviewBundle.reviewBundleId,
          reviewBundleVersion: reviewBundle.frozenVersion,
          evidenceRefs: [...evidenceRefs],
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
