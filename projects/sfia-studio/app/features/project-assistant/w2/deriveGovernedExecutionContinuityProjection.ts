/**
 * PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01 — canonical Execution Continuity Projection.
 *
 * READ-ONLY, derived from Product Truth via Shared Product Resolution.
 * Not a persisted state machine. Distinguishes technical vs product vs post-Evidence.
 */
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import {
  resolveProductExecutionContext,
  type ProductExecutionContext,
  type ProductExecutionContextQuery,
} from "./resolveProductExecutionContext";

export type GovernedExecutionContinuityStage =
  | "PRE_EXECUTION"
  | "ATTEMPT_ACCEPTED"
  | "RUNNING"
  | "PRODUCT_MATERIALIZATION_PENDING"
  | "POST_EVIDENCE_PENDING"
  | "POST_EVIDENCE_COMPLETE"
  | "RECOVERY_REQUIRED";

export type GovernedExecutionNextDeterministicAction =
  | "NONE"
  | "AWAIT_EXTERNAL"
  | "RECORD_RESULT"
  | "MATERIALIZE_PRODUCT"
  | "RUN_POST_EVIDENCE"
  | "HUMAN_DECISION_REQUIRED";

export type GovernedExecutionContinuityProjection = {
  readonly projectId: string;
  readonly activeCycleInstanceId: string | null;
  readonly executionContractId: string | null;
  readonly executionContractVersion: number | null;
  readonly executionContractStatus: string | null;
  readonly attemptId: string | null;
  readonly attemptStatus: string | null;
  readonly stage: GovernedExecutionContinuityStage;
  readonly productOutcome: string | null;
  readonly evidenceId: string | null;
  readonly reviewBundleId: string | null;
  readonly claimEvaluationId: string | null;
  readonly claimEvaluationStatus: string | null;
  readonly postEvidencePresent: boolean;
  readonly nextDeterministicAction: GovernedExecutionNextDeterministicAction;
  readonly humanDecisionRequired: boolean;
  readonly recoveryRequired: boolean;
  readonly reason: string | null;
  readonly blockingCode: string | null;
  readonly context: ProductExecutionContext | null;
};

export type DeriveGovernedExecutionContinuityResult =
  | { readonly ok: true; readonly projection: GovernedExecutionContinuityProjection }
  | { readonly ok: false; readonly code: string; readonly message: string };

const TERMINAL = new Set(["succeeded", "failed", "timeout", "cancelled"]);
const ACCEPTED = new Set(["accepted", "selected"]);
const RUNNING = new Set(["running", "awaiting_result", "pending"]);

/**
 * Pure stage derivation from an already-resolved ProductExecutionContext.
 * Exported for deterministic stage-matrix tests (CR-05).
 */
export function deriveGovernedExecutionContinuityFromContext(
  ctx: ProductExecutionContext,
): GovernedExecutionContinuityProjection {
  const base = {
    projectId: ctx.projectId,
    activeCycleInstanceId: ctx.activeCycleInstanceId,
    executionContractId: ctx.executionContract?.executionContractId ?? null,
    executionContractVersion: ctx.executionContract?.version ?? null,
    executionContractStatus: ctx.executionContract?.status ?? null,
    attemptId: ctx.attempt?.attemptId ?? null,
    attemptStatus: ctx.attempt?.status ?? null,
    productOutcome: null as string | null,
    evidenceId: ctx.evidence.evidenceId,
    reviewBundleId: ctx.reviewBundle.reviewBundleId,
    claimEvaluationId: ctx.claimEvaluation.claimEvaluationId,
    claimEvaluationStatus: ctx.claimEvaluation.status,
    postEvidencePresent: ctx.postEvidence.present,
    context: ctx,
  };

  if (!ctx.executionContract) {
    return {
      ...base,
      stage: "PRE_EXECUTION",
      nextDeterministicAction: "NONE",
      humanDecisionRequired: false,
      recoveryRequired: false,
      reason: "Aucun ExecutionContract résolu.",
      blockingCode: null,
    };
  }

  if (!ctx.attempt) {
    return {
      ...base,
      stage: "PRE_EXECUTION",
      nextDeterministicAction: "NONE",
      humanDecisionRequired: false,
      recoveryRequired: false,
      reason: "EC présent — aucun Attempt (Execute explicite requis pour initier).",
      blockingCode: null,
    };
  }

  const status = ctx.attempt.status;

  if (ACCEPTED.has(status)) {
    return {
      ...base,
      stage: "ATTEMPT_ACCEPTED",
      nextDeterministicAction: "AWAIT_EXTERNAL",
      humanDecisionRequired: false,
      recoveryRequired: false,
      reason: "Attempt accepted — progression technique selon contrat Execute/continue.",
      blockingCode: null,
    };
  }

  if (RUNNING.has(status)) {
    return {
      ...base,
      stage: "RUNNING",
      nextDeterministicAction: "AWAIT_EXTERNAL",
      humanDecisionRequired: false,
      recoveryRequired: false,
      reason: "Attempt running — pas de terminal inventé.",
      blockingCode: null,
    };
  }

  if (!TERMINAL.has(status)) {
    return {
      ...base,
      stage: "RECOVERY_REQUIRED",
      nextDeterministicAction: "NONE",
      humanDecisionRequired: true,
      recoveryRequired: true,
      reason: `Statut Attempt non qualifiable: ${status}`,
      blockingCode: "ATTEMPT_STATUS_UNKNOWN",
    };
  }

  // Technical terminal
  const hasEvidence = Boolean(ctx.evidence.evidenceId);
  const hasRb = Boolean(ctx.reviewBundle.reviewBundleId);
  const hasCe = Boolean(ctx.claimEvaluation.claimEvaluationId);
  const productQualified = hasEvidence && hasRb && hasCe;

  if (!productQualified) {
    return {
      ...base,
      stage: "PRODUCT_MATERIALIZATION_PENDING",
      nextDeterministicAction: "MATERIALIZE_PRODUCT",
      humanDecisionRequired: false,
      recoveryRequired: false,
      reason:
        "Attempt terminal — Evidence/RB/CE incomplets → materialize product déterministe.",
      blockingCode: null,
    };
  }

  if (!ctx.postEvidence.present) {
    return {
      ...base,
      stage: "POST_EVIDENCE_PENDING",
      productOutcome: ctx.claimEvaluation.contractResultVerdict,
      nextDeterministicAction: "RUN_POST_EVIDENCE",
      humanDecisionRequired: false,
      recoveryRequired: false,
      reason: "Product qualified — post-Evidence Recommendation absente.",
      blockingCode: null,
    };
  }

  const hd = ctx.postEvidence.requiresHumanDecision === true;
  return {
    ...base,
    stage: "POST_EVIDENCE_COMPLETE",
    productOutcome: ctx.claimEvaluation.contractResultVerdict,
    nextDeterministicAction: hd ? "HUMAN_DECISION_REQUIRED" : "NONE",
    humanDecisionRequired: hd,
    recoveryRequired: false,
    reason: hd
      ? "Post-Evidence complete — HumanDecision requise."
      : "Post-Evidence complete — état stable.",
    blockingCode: null,
  };
}

/**
 * Closed integrity/lineage failure codes for durable Product Truth incoherence.
 * NEVER startsWith / includes / regex catch-all.
 * Query/request errors (PROJECT_ID_REQUIRED, *_NOT_FOUND for arbitrary ids) stay
 * as resolve errors and are NOT mapped here.
 */
export const CONTINUITY_LINEAGE_INTEGRITY_CODES = [
  "CLAIM_EVALUATION_AMBIGUOUS",
  "CONTRACT_RESULT_BINDINGS_MISSING",
  "CONTRACT_RESULT_BINDINGS_MISMATCH",
  "CONTRACT_RESULT_EVIDENCE_REFS_EMPTY",
  "EVIDENCE_LINEAGE_AMBIGUOUS",
  "EVIDENCE_NOT_FOUND",
  "EVIDENCE_PROJECT_MISMATCH",
  "REVIEW_BUNDLE_MISSING",
  "REVIEW_BUNDLE_NOT_FOUND",
  "REVIEW_BUNDLE_PROJECT_MISMATCH",
  "ATTEMPT_CONTRACT_MISMATCH",
  "CROSS_PROJECT_REF_REJECTED",
] as const;

export type ContinuityLineageIntegrityCode =
  (typeof CONTINUITY_LINEAGE_INTEGRITY_CODES)[number];

export function isContinuityLineageIntegrityCode(
  code: string,
): code is ContinuityLineageIntegrityCode {
  return (CONTINUITY_LINEAGE_INTEGRITY_CODES as readonly string[]).includes(code);
}

/**
 * Canonical continuity projection. Prefer this over UI-local phase inference.
 */
export async function deriveGovernedExecutionContinuityProjection(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly query?: ProductExecutionContextQuery;
}): Promise<DeriveGovernedExecutionContinuityResult> {
  const resolved = await resolveProductExecutionContext({
    oa: input.oa,
    projectId: input.projectId,
    query: input.query,
  });
  if (!resolved.ok) {
    if (isContinuityLineageIntegrityCode(resolved.code)) {
      return {
        ok: true,
        projection: {
          projectId: input.projectId,
          activeCycleInstanceId: null,
          executionContractId: null,
          executionContractVersion: null,
          executionContractStatus: null,
          attemptId: null,
          attemptStatus: null,
          stage: "RECOVERY_REQUIRED",
          productOutcome: null,
          evidenceId: null,
          reviewBundleId: null,
          claimEvaluationId: null,
          claimEvaluationStatus: null,
          postEvidencePresent: false,
          nextDeterministicAction: "NONE",
          humanDecisionRequired: true,
          recoveryRequired: true,
          reason: resolved.message,
          blockingCode: resolved.code,
          context: null,
        },
      };
    }
    return resolved;
  }
  return { ok: true, projection: deriveGovernedExecutionContinuityFromContext(resolved.context) };
}
