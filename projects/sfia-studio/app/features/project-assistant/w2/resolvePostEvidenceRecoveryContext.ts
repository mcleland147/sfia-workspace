/**
 * Checkpoint F / R7 — resolve durable post-Evidence RecoveryContext for W2
 * trajectory instruction. No new persistence. No parallel recovery engine.
 *
 * Coherence: Attempt terminal ↔ Evidence ↔ ReviewBundle ↔ W3C recover payload
 * for the same Project. Falls back to null (generic trajectory) when absent.
 */
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";
import {
  findExistingW3cPostEvidence,
  parseW3cRecommendationPayload,
  type W3cRecommendationKind,
  type W3cRecommendationPayload,
} from "./w3cPostEvidenceLoop";
import { w3bEvidenceIdentity } from "./materializeW3bProductTerminal";
import { resolveDurableBoundaryProofMode } from "@/features/project-assistant/f3/resolveDurableBoundaryProofMode";

export type PostEvidenceRecoveryContext = {
  readonly kind: "post_evidence_recovery";
  readonly attemptId: string;
  readonly attemptStatus: "failed" | "timeout" | "cancelled";
  readonly stopReason: string | null;
  readonly executionContractId: string;
  readonly evidenceId: string;
  readonly reviewBundleId: string;
  readonly productOutcome: "FAIL" | "STOP";
  readonly recommendationKind: Extract<
    W3cRecommendationKind,
    "recover" | "replan"
  >;
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
      productOutcome: "FAIL" | "STOP";
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
    if (payload.productOutcome !== "FAIL" && payload.productOutcome !== "STOP") {
      continue;
    }
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

  // Prefer newest by Attempt failedAt / updatedAt among coherent candidates.
  let best: {
    context: PostEvidenceRecoveryContext;
    sortKey: string;
  } | null = null;

  for (const candidate of candidates) {
    const { payload } = candidate;
    const expectedIds = w3bEvidenceIdentity(payload.attemptId);
    if (
      payload.evidenceId !== expectedIds.evidenceId ||
      payload.reviewBundleId !== expectedIds.reviewBundleId
    ) {
      // Identity mismatch — refuse this candidate (do not mix episodes).
      continue;
    }

    const existing = await findExistingW3cPostEvidence({
      oa,
      projectId,
      evidenceId: payload.evidenceId,
      attemptId: payload.attemptId,
    });
    if (!existing) continue;
    if (existing.recommendation.kind !== payload.kind) continue;
    if (
      existing.productOutcome !== "FAIL" &&
      existing.productOutcome !== "STOP"
    ) {
      continue;
    }

    const attempt = await loadAttempt(oa, payload.attemptId);
    if (!attempt) continue;
    const terminalOk =
      attempt.status === "failed" ||
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

    // Evidence reader coherence when available
    if (oa.evidenceReviewServices?.evidenceReader) {
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
    }

    const realProcessInvoked = inferDurableRealProcessInvoked({
      attempt,
      boundaryProofMode: await resolveDurableBoundaryProofMode({ oa, attempt }),
    });

    const context: PostEvidenceRecoveryContext = {
      kind: "post_evidence_recovery",
      attemptId: payload.attemptId,
      attemptStatus: attempt.status as "failed" | "timeout" | "cancelled",
      stopReason: attempt.stopReason ?? null,
      executionContractId: attempt.executionContractId,
      evidenceId: payload.evidenceId,
      reviewBundleId: payload.reviewBundleId,
      productOutcome: payload.productOutcome,
      recommendationKind: payload.kind,
      headline: payload.headline.slice(0, 280),
      rationale: payload.rationale.slice(0, 1200),
      nextStep: payload.nextStep,
      realProcessInvoked,
      businessEffectProven: false,
      w3cEpistemicItemId: candidate.epistemicItemId,
    };

    const sortKey =
      attempt.failedAt ??
      attempt.timedOutAt ??
      attempt.cancelledAt ??
      attempt.updatedAt ??
      attempt.createdAt;
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
