/**
 * W3-B FC-12 — Materialize + rehydrate Product Terminal from durable facts.
 * Ingest all terminals → ReviewBundle → EvaluateContractResult → FC-11 projection.
 */
import { createHash } from "node:crypto";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";
import type { ClaimEvaluation, Evidence, ReviewBundle } from "@/lib/oa/evidence-review";
import {
  projectW3bProductTerminal,
  type W3BProductTerminalProjection,
} from "./w3bProductTerminalProjection";

export type { W3BProductTerminalProjection as W3BProductOutcomeProjection };

export type MaterializeW3bProductTerminalResult =
  | {
      readonly ok: true;
      readonly product: W3BProductTerminalProjection;
      readonly reusedFromIdempotency: boolean;
    }
  | {
      readonly ok: false;
      readonly code: string;
      readonly message: string;
      readonly product?: W3BProductTerminalProjection;
    };

const PRODUCT_RESERVATIONS = [
  "Evidence requise avant claim produit",
  "Apprentissage / replan non démarrés",
  "Exécuteur de substitution — pas d'effet externe réel",
  "Aucun READY",
] as const;

export function w3bEvidenceIdentity(attemptId: string): {
  evidenceId: string;
  reviewBundleId: string;
  claimEvaluationId: string;
  evidenceIdempotencyKey: string;
  reviewBundleIdempotencyKey: string;
  claimEvaluationIdempotencyKey: string;
} {
  const digest = createHash("sha256").update(attemptId).digest("hex").slice(0, 16);
  return {
    evidenceId: `ev:w3b:${digest}`,
    reviewBundleId: `rb:w3b:${digest}`,
    claimEvaluationId: `clm:w3b:${digest}`,
    evidenceIdempotencyKey: `idem:w3b-ev:${attemptId}`,
    reviewBundleIdempotencyKey: `idem:w3b-rb:${attemptId}`,
    claimEvaluationIdempotencyKey: `idem:w3b-ce:${attemptId}`,
  };
}

async function loadAttemptAndContract(input: {
  oa: RuntimeOaStack;
  projectId: string;
  attemptId: string;
}): Promise<
  | { ok: true; attempt: ExecutionAttempt; contract: ExecutionContract }
  | { ok: false; code: string; message: string }
> {
  if (!input.oa.evidenceReviewServices || !input.oa.executionAttemptServices) {
    return {
      ok: false,
      code: "EVIDENCE_STACK_UNAVAILABLE",
      message: "Services Evidence / Attempt indisponibles.",
    };
  }
  const loaded =
    await input.oa.executionAttemptServices.getExecutionAttempt.execute({
      attemptId: input.attemptId,
    });
  if (!loaded.ok) {
    return {
      ok: false,
      code: loaded.error.detailCode,
      message: loaded.error.message,
    };
  }
  const contractResult =
    await input.oa.executionContractServices.getExecutionContract.execute({
      executionContractId: loaded.attempt.executionContractId,
    });
  if (!contractResult.ok) {
    return {
      ok: false,
      code: "EXECUTION_CONTRACT_NOT_FOUND",
      message: "Contrat lié à l'Attempt introuvable.",
    };
  }
  if (contractResult.contract.projectId !== input.projectId) {
    return {
      ok: false,
      code: "PROJECT_MISMATCH",
      message: "Attempt / projet incohérents.",
    };
  }
  return {
    ok: true,
    attempt: loaded.attempt,
    contract: contractResult.contract,
  };
}

function projectFromFacts(input: {
  attempt: ExecutionAttempt;
  contract: ExecutionContract;
  evidence: Evidence | null;
  reviewBundle: ReviewBundle | null;
  claimEvaluation: ClaimEvaluation | null;
}): W3BProductTerminalProjection {
  return projectW3bProductTerminal(input);
}

/** Write path — ingest Evidence + RB + Contract Result CE + project. */
export async function materializeW3bProductTerminal(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly attemptId: string;
  readonly claimedProductOutcome?: unknown;
  readonly cycleProfile?: unknown;
  readonly ckcId?: unknown;
}): Promise<MaterializeW3bProductTerminalResult> {
  void input.claimedProductOutcome;
  void input.cycleProfile;
  void input.ckcId;

  const loaded = await loadAttemptAndContract(input);
  if (!loaded.ok) return loaded;
  const { attempt, contract } = loaded;
  const ids = w3bEvidenceIdentity(attempt.attemptId);
  const services = input.oa.evidenceReviewServices!;

  const ingested = await services.ingestExecutionAttemptEvidence.execute({
    evidenceId: ids.evidenceId,
    executionAttemptId: attempt.attemptId,
    idempotencyKey: ids.evidenceIdempotencyKey,
    actor: LOCAL_PILOTE_ACTOR,
    classification: "internal",
    storageMode: "metadata_only",
    bindings: {
      projectId: input.projectId,
      executionContractId: contract.executionContractId,
      ...(contract.cycleInstanceId
        ? { cycleInstanceId: contract.cycleInstanceId }
        : {}),
    },
  });

  if (!ingested.ok) {
    return {
      ok: false,
      code: ingested.error.detailCode,
      message: ingested.error.message,
      product: projectFromFacts({
        attempt,
        contract,
        evidence: null,
        reviewBundle: null,
        claimEvaluation: null,
      }),
    };
  }

  const bundle = await services.createReviewBundle.execute({
    reviewBundleId: ids.reviewBundleId,
    idempotencyKey: ids.reviewBundleIdempotencyKey,
    actor: LOCAL_PILOTE_ACTOR,
    projectId: input.projectId,
    executionContractId: contract.executionContractId,
    ...(contract.cycleInstanceId ? { cycleInstanceId: contract.cycleInstanceId } : {}),
    evidenceIds: [ingested.evidence.evidenceId],
    reservations: [...PRODUCT_RESERVATIONS],
  });

  if (!bundle.ok) {
    return {
      ok: false,
      code: bundle.error.detailCode,
      message: bundle.error.message,
    };
  }

  if (!services.evaluateContractResult) {
    return {
      ok: false,
      code: "CONTRACT_RESULT_EVALUATOR_UNAVAILABLE",
      message: "EvaluateContractResult indisponible — fail-closed.",
    };
  }

  const evaluated = await services.evaluateContractResult.execute({
    claimEvaluationId: ids.claimEvaluationId,
    idempotencyKey: ids.claimEvaluationIdempotencyKey,
    actor: LOCAL_PILOTE_ACTOR,
    contract,
    attempt: {
      attemptId: attempt.attemptId,
      executionContractId: attempt.executionContractId,
      executionContractVersion: attempt.executionContractVersion,
      status: attempt.status,
      resultRef: attempt.resultRef,
      errorRef: attempt.errorRef,
      stopReason: attempt.stopReason,
      cancelledAt: attempt.cancelledAt,
      failedAt: attempt.failedAt,
      timedOutAt: attempt.timedOutAt,
      stopOrigin: attempt.stopOrigin,
      stopCode: attempt.stopCode,
      stopSourceRef: attempt.stopSourceRef,
      stopObservedAt: attempt.stopObservedAt,
      completedAt: attempt.completedAt,
      selectedAgentRef: attempt.selectedAgentRef,
    },
    evidence: ingested.evidence,
    reviewBundle: bundle.reviewBundle,
  });

    if (!evaluated.ok) {
      // Surface shape reason in test/dev failures.
      const detail = evaluated.error.internalCauseRef ?? evaluated.error.message;
      return {
        ok: false,
        code: evaluated.error.detailCode,
        message: detail,
      product: projectFromFacts({
        attempt,
        contract,
        evidence: ingested.evidence,
        reviewBundle: bundle.reviewBundle,
        claimEvaluation: evaluated.claimEvaluation ?? null,
      }),
    };
  }

  return {
    ok: true,
    reusedFromIdempotency: Boolean(
      ingested.reusedFromIdempotencyKey ||
        bundle.reusedFromIdempotencyKey ||
        evaluated.reusedFromIdempotencyKey,
    ),
    product: projectFromFacts({
      attempt,
      contract,
      evidence: ingested.evidence,
      reviewBundle: bundle.reviewBundle,
      claimEvaluation: evaluated.claimEvaluation,
    }),
  };
}

export async function rehydrateW3bProductTerminal(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly attemptId: string;
}): Promise<MaterializeW3bProductTerminalResult> {
  const loaded = await loadAttemptAndContract(input);
  if (!loaded.ok) return loaded;
  const { attempt, contract } = loaded;
  const ids = w3bEvidenceIdentity(attempt.attemptId);
  const services = input.oa.evidenceReviewServices!;

  const evidence = await services.evidenceReader.findById(ids.evidenceId);
  const reviewBundle = await services.reviewBundleReader.findById(
    ids.reviewBundleId,
  );
  const claimEvaluation = await services.claimEvaluationReader.findById(
    ids.claimEvaluationId,
  );

  if (!evidence || !reviewBundle || !claimEvaluation) {
    return {
      ok: false,
      code: "PRODUCT_TERMINAL_NOT_DURABLE",
      message:
        "Evidence / ReviewBundle / Contract Result CE absents — aucun claim reconstruit.",
    };
  }

  if (evidence.bindings.projectId && evidence.bindings.projectId !== input.projectId) {
    return {
      ok: false,
      code: "PROJECT_MISMATCH",
      message: "Evidence liée à un autre projet.",
    };
  }
  if (evidence.bindings.executionAttemptId !== input.attemptId) {
    return {
      ok: false,
      code: "ATTEMPT_BINDING_MISMATCH",
      message: "Evidence liée à un autre Attempt.",
    };
  }

  return {
    ok: true,
    reusedFromIdempotency: true,
    product: projectFromFacts({
      attempt,
      contract,
      evidence,
      reviewBundle,
      claimEvaluation,
    }),
  };
}

const TERMINAL_STATUSES = new Set([
  "succeeded",
  "failed",
  "timeout",
  "cancelled",
]);

export async function rehydrateLatestW3bProductTerminalForContract(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly executionContractId: string;
}): Promise<
  | {
      readonly ok: true;
      readonly product: W3BProductTerminalProjection;
      readonly attemptId: string;
      readonly attemptStatus: string;
      readonly reusedFromIdempotency: true;
    }
  | { readonly ok: false; readonly code: string; readonly message: string }
> {
  if (!input.oa.executionAttemptServices || !input.oa.evidenceReviewServices) {
    return {
      ok: false,
      code: "EVIDENCE_STACK_UNAVAILABLE",
      message: "Services Attempt / Evidence indisponibles.",
    };
  }
  const listed =
    await input.oa.executionAttemptServices.listExecutionAttempts.execute({
      executionContractId: input.executionContractId,
    });
  if (!listed.ok) {
    return {
      ok: false,
      code: listed.error.detailCode,
      message: listed.error.message,
    };
  }
  const terminal = [...listed.attempts]
    .filter((a) => TERMINAL_STATUSES.has(a.status))
    .sort((a, b) => {
      const aAt = a.updatedAt ?? a.createdAt ?? "";
      const bAt = b.updatedAt ?? b.createdAt ?? "";
      return aAt < bAt ? 1 : -1;
    })[0];
  if (!terminal) {
    return {
      ok: false,
      code: "NO_TERMINAL_ATTEMPT",
      message: "Aucune tentative terminale durable pour ce contrat.",
    };
  }
  const rehydrated = await rehydrateW3bProductTerminal({
    oa: input.oa,
    projectId: input.projectId,
    attemptId: terminal.attemptId,
  });
  if (!rehydrated.ok) return rehydrated;
  return {
    ok: true,
    product: rehydrated.product,
    attemptId: terminal.attemptId,
    attemptStatus: terminal.status,
    reusedFromIdempotency: true,
  };
}

/** @deprecated alias for actions/tests migrating from heuristic materialize name */
export const materializeProductOutcomeFromAttempt = materializeW3bProductTerminal;
export const rehydrateProductOutcomeFromAttempt = rehydrateW3bProductTerminal;
export const rehydrateLatestProductOutcomeForContract =
  rehydrateLatestW3bProductTerminalForContract;
