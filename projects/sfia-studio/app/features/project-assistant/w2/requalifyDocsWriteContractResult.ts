/**
 * Requalify docs_write Contract Result from durable Evidence + RB — ZERO new Attempt.
 * Freeze rb:docs-write if draft, evaluate with docs-write CE id, supersede prior CE.
 *
 * Rematerialize vs explicit re-evaluation (CR-PJR-02):
 * - no correctionRef + current CE → reuse (CASE A)
 * - correctionRef targeting new id → evaluate successor superseding current (CASE B)
 * - correctionRef already current → reuse (CASE C)
 * - ambiguous current → fail-closed (CASE D)
 * - correction target is ancestor / already-exists-non-current → fail-closed (CASE E)
 */
import { createHash } from "node:crypto";
import type { ActorReference } from "@/lib/oa/doctrine";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";
import type {
  ClaimEvaluation,
  EvidenceReviewServices,
  ReviewBundle,
} from "@/lib/oa/evidence-review";
import {
  docsWriteContractResultIdentity,
  resolveCurrentContractResultClaimEvaluation,
} from "@/lib/oa/evidence-review";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";

function w3bClaimEvaluationIdForAttempt(attemptId: string): string {
  const digest = createHash("sha256").update(attemptId).digest("hex").slice(0, 16);
  return `clm:w3b:${digest}`;
}

async function isSupersessionAncestor(input: {
  repo: EvidenceReviewServices["claimEvaluationRepository"];
  candidateId: string;
  current: ClaimEvaluation;
}): Promise<boolean> {
  let cursor: string | undefined = input.current.supersedesClaimEvaluationId;
  const seen = new Set<string>();
  while (cursor) {
    if (cursor === input.candidateId) return true;
    if (seen.has(cursor)) return true;
    seen.add(cursor);
    const next = await input.repo.findById(cursor);
    cursor = next?.supersedesClaimEvaluationId;
  }
  return false;
}

export type RequalifyDocsWriteContractResultInput = {
  evidenceReviewServices: EvidenceReviewServices;
  attempt: ExecutionAttempt;
  contract: ExecutionContract;
  actor?: ActorReference;
  correlationId?: string;
  nowIso?: string;
  /**
   * When set, allocates a new immutable CE identity for re-evaluation
   * (never overwrites prior docs_write / W3-B CE ids).
   */
  correctionRef?: string;
};

export type RequalifyDocsWriteContractResultResult =
  | {
      ok: true;
      claimEvaluation: ClaimEvaluation;
      reviewBundle: ReviewBundle;
      supersededClaimEvaluationId?: string;
      reusedFromIdempotencyKey?: boolean;
    }
  | { ok: false; code: string; message: string };

export async function requalifyDocsWriteContractResult(
  input: RequalifyDocsWriteContractResultInput,
): Promise<RequalifyDocsWriteContractResultResult> {
  const actor = input.actor ?? LOCAL_PILOTE_ACTOR;
  const services = input.evidenceReviewServices;
  if (!services.evaluateContractResult) {
    return {
      ok: false,
      code: "CONTRACT_RESULT_EVALUATOR_UNAVAILABLE",
      message: "EvaluateContractResult indisponible — fail-closed.",
    };
  }

  const ids = docsWriteContractResultIdentity(input.attempt.attemptId, {
    ...(input.correctionRef ? { correctionRef: input.correctionRef } : {}),
  });
  const evidence = await services.evidenceReader.findById(ids.evidenceId);
  if (!evidence) {
    return {
      ok: false,
      code: "DOCS_WRITE_EVIDENCE_MISSING",
      message: `Evidence ${ids.evidenceId} introuvable — ingest docs_write requis.`,
    };
  }

  let reviewBundle = await services.reviewBundleReader.findById(
    ids.reviewBundleId,
  );
  if (!reviewBundle) {
    return {
      ok: false,
      code: "DOCS_WRITE_REVIEW_BUNDLE_MISSING",
      message: `ReviewBundle ${ids.reviewBundleId} introuvable.`,
    };
  }

  if (!reviewBundle.frozenAt && reviewBundle.status === "draft") {
    const frozen = await services.freezeReviewBundle.execute({
      reviewBundleId: ids.reviewBundleId,
      expectedVersion: reviewBundle.version,
      idempotencyKey: `idem:docs-write-rb-freeze:${input.attempt.attemptId}`,
      actor,
      correlationId: input.correlationId,
      nowIso: input.nowIso,
    });
    if (!frozen.ok) {
      return {
        ok: false,
        code: frozen.error.detailCode,
        message: frozen.error.message,
      };
    }
    reviewBundle = frozen.reviewBundle;
  } else if (!reviewBundle.frozenAt || !reviewBundle.frozenVersion) {
    return {
      ok: false,
      code: "DOCS_WRITE_REVIEW_BUNDLE_NOT_FROZEN",
      message: "ReviewBundle docs_write non frozen — fail-closed.",
    };
  }

  const projectId =
    input.contract.projectId ||
    evidence.bindings.projectId ||
    reviewBundle.projectId;

  let supersededClaimEvaluationId: string | undefined;
  const current = await resolveCurrentContractResultClaimEvaluation({
    repo: services.claimEvaluationRepository,
    projectId,
    executionAttemptId: input.attempt.attemptId,
  });
  if (current.status === "ambiguous") {
    // CASE D
    return {
      ok: false,
      code: "CONTRACT_RESULT_CLAIM_LINEAGE_AMBIGUOUS",
      message: `Multiple active ContractResult CEs — fail-closed: ${current.claimEvaluationIds.join(",")}`,
    };
  }

  if (current.status === "one") {
    const currentCe = current.claimEvaluation;
    const currentIsDocsWriteLineage = currentCe.claimEvaluationId.startsWith(
      "clm:docs-write:",
    );

    // CASE A — ordinary rematerialize: reuse current docs-write CE.
    // W3-B (or non-docs-write) current still allows first docs-write qualification
    // below (supersede into docs-write lineage). Never re-evaluate under a
    // conflicting docs-write identity when a docs-write CE is already current.
    if (!input.correctionRef) {
      if (currentIsDocsWriteLineage) {
        return {
          ok: true,
          claimEvaluation: currentCe,
          reviewBundle,
          reusedFromIdempotencyKey: true,
        };
      }
      supersededClaimEvaluationId = currentCe.claimEvaluationId;
    } else if (ids.claimEvaluationId === currentCe.claimEvaluationId) {
      // CASE C — same correctionRef already current.
      return {
        ok: true,
        claimEvaluation: currentCe,
        reviewBundle,
        reusedFromIdempotencyKey: true,
      };
    } else {
      // CASE E — target identity already exists (historical / superseded) or is ancestor.
      const existingTarget = await services.claimEvaluationReader.findById(
        ids.claimEvaluationId,
      );
      if (existingTarget) {
        return {
          ok: false,
          code: "CONTRACT_RESULT_CORRECTION_LINEAGE_INVALID",
          message:
            `Correction identity ${ids.claimEvaluationId} already exists and is not current — ` +
            "refuse recreate / lineage cycle.",
        };
      }
      if (
        await isSupersessionAncestor({
          repo: services.claimEvaluationRepository,
          candidateId: ids.claimEvaluationId,
          current: currentCe,
        })
      ) {
        return {
          ok: false,
          code: "CONTRACT_RESULT_CORRECTION_LINEAGE_INVALID",
          message:
            `Correction identity ${ids.claimEvaluationId} is an ancestor of current CE — ` +
            "refuse supersession cycle.",
        };
      }

      // CASE B — explicit re-evaluation under new correction identity.
      supersededClaimEvaluationId = currentCe.claimEvaluationId;
    }
  } else if (current.status === "none") {
    const w3bCe = await services.claimEvaluationReader.findById(
      w3bClaimEvaluationIdForAttempt(input.attempt.attemptId),
    );
    if (w3bCe && w3bCe.claimEvaluationId !== ids.claimEvaluationId) {
      supersededClaimEvaluationId = w3bCe.claimEvaluationId;
    }
  }

  const evaluated = await services.evaluateContractResult.execute({
    claimEvaluationId: ids.claimEvaluationId,
    idempotencyKey: ids.claimEvaluationIdempotencyKey,
    actor,
    contract: input.contract,
    attempt: {
      attemptId: input.attempt.attemptId,
      executionContractId: input.attempt.executionContractId,
      executionContractVersion: input.attempt.executionContractVersion,
      executionContractSemanticFingerprint:
        input.attempt.executionContractSemanticFingerprint,
      boundExecutionContract: input.attempt.boundExecutionContract,
      status: input.attempt.status,
      resultRef: input.attempt.resultRef,
      errorRef: input.attempt.errorRef,
      stopReason: input.attempt.stopReason,
      cancelledAt: input.attempt.cancelledAt,
      failedAt: input.attempt.failedAt,
      timedOutAt: input.attempt.timedOutAt,
      stopOrigin: input.attempt.stopOrigin,
      stopCode: input.attempt.stopCode,
      stopSourceRef: input.attempt.stopSourceRef,
      stopObservedAt: input.attempt.stopObservedAt,
      completedAt: input.attempt.completedAt,
      selectedAgentRef: input.attempt.selectedAgentRef,
    },
    reviewBundle,
    ...(supersededClaimEvaluationId
      ? { supersedesClaimEvaluationId: supersededClaimEvaluationId }
      : {}),
    correlationId: input.correlationId,
    nowIso: input.nowIso,
  });

  if (!evaluated.ok) {
    return {
      ok: false,
      code: evaluated.error.detailCode,
      message:
        evaluated.error.internalCauseRef ?? evaluated.error.message,
    };
  }

  return {
    ok: true,
    claimEvaluation: evaluated.claimEvaluation,
    reviewBundle,
    ...(supersededClaimEvaluationId
      ? { supersededClaimEvaluationId }
      : {}),
    reusedFromIdempotencyKey: evaluated.reusedFromIdempotencyKey,
  };
}
