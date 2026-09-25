/**
 * Checkpoint F / R7 — resolve durable post-Evidence RecoveryContext for W2
 * trajectory instruction. No new persistence. No parallel recovery engine.
 *
 * Coherence: Attempt terminal ↔ Evidence ↔ ReviewBundle ↔ W3C recover payload
 * for the same Project. Falls back to null (generic trajectory) when absent.
 *
 * Supports FAIL/STOP recovery and narrow EVIDENCE_BACKED_NOT_PROVEN (UNCLAIMED
 * + succeeded Attempt) via durable Evidence bindings — not w3b id reconstruction.
 */
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";
import { resolveCurrentContractResultClaimEvaluation } from "@/lib/oa/evidence-review";
import {
  findExistingW3cPostEvidence,
  parseW3cRecommendationPayload,
  type W3cRecommendationKind,
  type W3cRecommendationPayload,
} from "./w3cPostEvidenceLoop";
import { resolveDurableBoundaryProofMode } from "@/features/project-assistant/f3/resolveDurableBoundaryProofMode";

export type PostEvidenceRecoveryContext = {
  readonly kind: "post_evidence_recovery";
  readonly attemptId: string;
  readonly attemptStatus: "failed" | "timeout" | "cancelled" | "succeeded";
  readonly stopReason: string | null;
  readonly executionContractId: string;
  readonly evidenceId: string;
  readonly reviewBundleId: string;
  readonly productOutcome: "FAIL" | "STOP" | "UNCLAIMED";
  readonly recommendationKind: Extract<
    W3cRecommendationKind,
    "recover" | "replan"
  >;
  /** RC-04 — structural recovery requires Pilot options / HumanDecision. */
  readonly requiresHumanDecision: boolean;
  readonly headline: string;
  readonly rationale: string;
  readonly nextStep: string;
  readonly realProcessInvoked: boolean;
  readonly businessEffectProven: false;
  readonly w3cEpistemicItemId: string;
};

function statementToJsonString(statement: unknown): string | null {
  if (typeof statement === "string" && statement.trim().length > 0) {
    return statement;
  }
  if (statement && typeof statement === "object") {
    try {
      return JSON.stringify(statement);
    } catch {
      return null;
    }
  }
  return null;
}

function resolveRealProcessInvoked(attempt: ExecutionAttempt): boolean {
  if (attempt.processDiagnostic?.realProcessInvoked === true) return true;
  if (attempt.irreversibleEffectsPossible === true) return true;
  if (
    typeof attempt.stopReason === "string" &&
    attempt.stopReason.startsWith("REAL_")
  ) {
    return true;
  }
  return false;
}

/** Pure R6 truth — exported for T5; never invents REAL from agent id alone. */
export function inferDurableRealProcessInvoked(input: {
  readonly attempt: ExecutionAttempt;
  readonly boundaryProofMode: string | null;
}): boolean {
  if (resolveRealProcessInvoked(input.attempt)) return true;
  return (
    input.boundaryProofMode === "cursor_real" &&
    Boolean(input.attempt.launchedAt)
  );
}

async function loadAttempt(
  oa: RuntimeOaStack,
  attemptId: string,
): Promise<ExecutionAttempt | null> {
  if (!oa.executionAttemptServices) return null;
  const loaded = await oa.executionAttemptServices.getExecutionAttempt.execute({
    attemptId,
  });
  return loaded.ok ? loaded.attempt : null;
}

function isRecoverableProductOutcome(
  outcome: W3cRecommendationPayload["productOutcome"],
): outcome is "FAIL" | "STOP" | "UNCLAIMED" {
  return outcome === "FAIL" || outcome === "STOP" || outcome === "UNCLAIMED";
}

/**
 * Resolve a coherent post-Evidence recovery subject for W2 options.
 * Returns null when no coherent recover/replan episode exists (generic path).
 */
export async function resolvePostEvidenceRecoveryContext(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
}): Promise<
  | { readonly ok: true; readonly context: PostEvidenceRecoveryContext | null }
  | { readonly ok: false; readonly code: string; readonly message: string }
> {
  const { oa, projectId } = input;
  if (!oa.cycleServices || !oa.executionAttemptServices) {
    return { ok: true, context: null };
  }

  const epistemic = await oa.cycleServices.getEpistemicState.execute({
    projectId,
  });
  if (!epistemic.ok) {
    return {
      ok: false,
      code: epistemic.error.detailCode,
      message: "État épistémique indisponible — instruction options refusée.",
    };
  }

  type Candidate = {
    payload: W3cRecommendationPayload & {
      kind: "recover" | "replan";
      productOutcome: "FAIL" | "STOP" | "UNCLAIMED";
    };
    epistemicItemId: string;
  };
  const candidates: Candidate[] = [];
  for (const item of epistemic.state.items) {
    if (item.status !== "active" || item.type !== "Recommendation") continue;
    const source = item.source ?? "";
    const isW3c =
      source.startsWith("w3c-post-evidence:") ||
      item.epistemicItemId.startsWith("epi:w3c-rec:");
    if (!isW3c) continue;
    const raw = statementToJsonString(item.statement);
    if (!raw) continue;
    const payload = parseW3cRecommendationPayload(raw);
    if (!payload) continue;
    if (payload.kind !== "recover" && payload.kind !== "replan") continue;
    if (!isRecoverableProductOutcome(payload.productOutcome)) continue;
    candidates.push({
      payload: {
        ...payload,
        kind: payload.kind,
        productOutcome: payload.productOutcome,
      },
      epistemicItemId: item.epistemicItemId,
    });
  }

  if (candidates.length === 0) {
    return { ok: true, context: null };
  }

  let best: {
    context: PostEvidenceRecoveryContext;
    sortKey: string;
  } | null = null;

  for (const candidate of candidates) {
    const { payload } = candidate;

    const existing = await findExistingW3cPostEvidence({
      oa,
      projectId,
      evidenceId: payload.evidenceId,
      attemptId: payload.attemptId,
    });
    if (!existing) continue;
    if (existing.recommendation.kind !== payload.kind) continue;
    if (!isRecoverableProductOutcome(existing.productOutcome)) continue;
    if (existing.productOutcome !== payload.productOutcome) continue;

    const attempt = await loadAttempt(oa, payload.attemptId);
    if (!attempt) continue;
    const terminalOk =
      payload.productOutcome === "UNCLAIMED"
        ? attempt.status === "succeeded"
        : attempt.status === "failed" ||
          attempt.status === "timeout" ||
          (payload.productOutcome === "STOP" && attempt.status === "cancelled");
    if (!terminalOk) continue;

    if (!oa.executionContractServices) continue;
    const contract =
      await oa.executionContractServices.getExecutionContract.execute({
        executionContractId: attempt.executionContractId,
      });
    if (!contract.ok) continue;
    if (contract.contract.projectId !== projectId) continue;

    // Durable Evidence/RB bindings (docs_write OR w3b — no id reconstruction).
    if (!oa.evidenceReviewServices?.evidenceReader) continue;
    const evidence = await oa.evidenceReviewServices.evidenceReader.findById(
      payload.evidenceId,
    );
    if (!evidence) continue;
    if (evidence.bindings.executionAttemptId !== payload.attemptId) continue;
    if (
      evidence.bindings.projectId &&
      evidence.bindings.projectId !== projectId
    ) {
      continue;
    }
    if (
      evidence.bindings.executionContractId &&
      evidence.bindings.executionContractId !== attempt.executionContractId
    ) {
      continue;
    }
    const reviewBundle =
      await oa.evidenceReviewServices.reviewBundleReader.findById(
        payload.reviewBundleId,
      );
    if (!reviewBundle) continue;
    if (reviewBundle.projectId !== projectId) continue;
    const rbEvidenceIds = [
      ...(reviewBundle.evidenceRefs ?? []),
      ...(reviewBundle.frozenEvidenceSnapshots ?? []).map((s) => s.evidenceId),
    ];
    if (!rbEvidenceIds.includes(payload.evidenceId)) continue;

    // CR-PJR-03 — UNCLAIMED recovery must bind current CE not_proven.
    if (payload.productOutcome === "UNCLAIMED") {
      if (!oa.evidenceReviewServices?.claimEvaluationRepository) continue;
      const currentCe = await resolveCurrentContractResultClaimEvaluation({
        repo: oa.evidenceReviewServices.claimEvaluationRepository,
        projectId,
        executionAttemptId: payload.attemptId,
      });
      if (currentCe.status !== "one") continue;
      if (currentCe.claimEvaluation.status !== "not_proven") continue;
      if (
        payload.claimEvaluationId !==
        currentCe.claimEvaluation.claimEvaluationId
      ) {
        continue;
      }
      // Prefer Epistemic item that still matches current Product CE binding.
      const currentMatched = await findExistingW3cPostEvidence({
        oa,
        projectId,
        evidenceId: payload.evidenceId,
        attemptId: payload.attemptId,
        product: {
          evidenceId: payload.evidenceId,
          reviewBundleId: payload.reviewBundleId,
          claimEvaluationId: currentCe.claimEvaluation.claimEvaluationId,
          outcome: "UNCLAIMED",
          technicalDetail: { attemptId: payload.attemptId },
        },
      });
      if (!currentMatched) continue;
    }

    const boundaryProofMode = await resolveDurableBoundaryProofMode({
      oa,
      attempt,
    });
    const realProcessInvoked = inferDurableRealProcessInvoked({
      attempt,
      boundaryProofMode,
    });

    const attemptStatus:
      | "failed"
      | "timeout"
      | "cancelled"
      | "succeeded" =
      attempt.status === "failed" ||
      attempt.status === "timeout" ||
      attempt.status === "cancelled" ||
      attempt.status === "succeeded"
        ? attempt.status
        : "failed";

    const context: PostEvidenceRecoveryContext = {
      kind: "post_evidence_recovery",
      attemptId: payload.attemptId,
      attemptStatus,
      stopReason: attempt.stopReason ?? null,
      executionContractId: attempt.executionContractId,
      evidenceId: payload.evidenceId,
      reviewBundleId: payload.reviewBundleId,
      productOutcome: payload.productOutcome,
      recommendationKind: payload.kind,
      requiresHumanDecision:
        payload.kind === "replan" || payload.requiresHumanDecision === true,
      headline: payload.headline,
      rationale: payload.rationale,
      nextStep: payload.nextStep,
      realProcessInvoked,
      businessEffectProven: false,
      w3cEpistemicItemId: candidate.epistemicItemId,
    };

    const sortKey =
      attempt.failedAt ??
      attempt.cancelledAt ??
      attempt.completedAt ??
      attempt.updatedAt ??
      attempt.createdAt ??
      "";
    if (!best || sortKey > best.sortKey) {
      best = { context, sortKey };
    }
  }

  return { ok: true, context: best?.context ?? null };
}

/** Compact cognitive section — recovery subject, not framing dump. */
export function buildRecoveryCognitionSection(
  context: PostEvidenceRecoveryContext,
): string {
  return [
    "## Sujet courant — recovery / replan post-Evidence (PAS un nouveau cadrage)",
    `- Attempt terminal: ${context.attemptId} (${context.attemptStatus})`,
    `- ExecutionContract: ${context.executionContractId}`,
    `- stopReason: ${context.stopReason ?? "n/a"}`,
    `- Evidence: ${context.evidenceId}`,
    `- ReviewBundle: ${context.reviewBundleId}`,
    `- productOutcome: ${context.productOutcome}`,
    `- W3C recommendationKind: ${context.recommendationKind}`,
    `- headline: ${context.headline}`,
    `- realProcessInvoked (durable): ${context.realProcessInvoked}`,
    `- businessEffectProven: false`,
    "- Aucun succès métier prouvé. Aucune READY.",
    "- La décision suivante appartient au Pilote (Recommendation ≠ HumanDecision).",
    "- Ne pas repartir sur le cadrage fonctionnel initial comme sujet principal.",
    `- Rationale W3C (bornée): ${context.rationale}`,
  ].join("\n");
}
