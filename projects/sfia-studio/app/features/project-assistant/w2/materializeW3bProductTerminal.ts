/**
 * W3-B FC-12 — Materialize + rehydrate Product Terminal from durable facts.
 * Ingest all terminals → ReviewBundle → EvaluateContractResult → FC-11 projection.
 * W3-C: after successful projection, consume Evidence via post-Evidence loop (no re-ingest).
 * Docs-write: freeze rb:docs-write + evaluate docs-write CE (may supersede w3b CE).
 */
import { createHash } from "node:crypto";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import {
  type ExecutionAttempt,
  M4_BOUNDED_DOCS_WRITE_ACTION,
} from "@/lib/oa/execution-attempt";
import type { ClaimEvaluation, Evidence, ReviewBundle } from "@/lib/oa/evidence-review";
import { resolveCurrentContractResultClaimEvaluation } from "@/lib/oa/evidence-review";
import { PRODUCT_MISSION_FROM_DURABLE_CONTEXT } from "@/lib/oa/evidence-review/application/missionResultPayload";
import {
  isMissionResultEvidenceId,
  missionResultEvidenceIdForAttempt,
} from "@/features/project-assistant/f3/ingestMissionResultEvidence";
import { requalifyDocsWriteContractResult } from "./requalifyDocsWriteContractResult";
import { completeDocsWriteClaimEvidenceCompletion } from "./completeDocsWriteClaimEvidenceCompletion";
import { resolveDocsWriteArtifactAbsolutePath } from "./resolveDocsWriteArtifactAbsolutePath";
import {
  projectW3bProductTerminal,
  productReservationsForAttempt,
  withNoraUnavailableReserve,
  type W3BProductTerminalProjection,
} from "./w3bProductTerminalProjection";
import {
  findExistingW3cPostEvidence,
  rehydrateW3cPostEvidenceFromLps,
  runW3cPostEvidenceLoop,
  type W3cPostEvidenceLoopResult,
} from "./w3cPostEvidenceLoop";
import { resolveManagedRepoRootBaseFromEnv } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";

function w3cUnavailableFailure(
  cause: unknown,
): Extract<W3cPostEvidenceLoopResult, { ok: false }> {
  const message =
    cause instanceof Error && cause.message.trim()
      ? cause.message
      : "Analyse Nora indisponible";
  return {
    ok: false,
    code: "W3C_POST_EVIDENCE_UNAVAILABLE",
    message,
    failClosed: true,
  };
}

function finishWithOptionalPostEvidence(input: {
  readonly product: W3BProductTerminalProjection;
  readonly reusedFromIdempotency: boolean;
  readonly postEvidence: W3cPostEvidenceLoopResult | undefined;
}): Extract<MaterializeW3bProductTerminalResult, { ok: true }> {
  const postOk = input.postEvidence?.ok === true;
  return {
    ok: true,
    reusedFromIdempotency: input.reusedFromIdempotency,
    product: withNoraUnavailableReserve(input.product, postOk),
    postEvidence: input.postEvidence,
  };
}

export type { W3BProductTerminalProjection as W3BProductOutcomeProjection };

export type MaterializeW3bProductTerminalResult =
  | {
      readonly ok: true;
      readonly product: W3BProductTerminalProjection;
      readonly reusedFromIdempotency: boolean;
      readonly postEvidence?: W3cPostEvidenceLoopResult;
    }
  | {
      readonly ok: false;
      readonly code: string;
      readonly message: string;
      readonly product?: W3BProductTerminalProjection;
      readonly postEvidence?: W3cPostEvidenceLoopResult;
    };

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

function boundActionOf(
  attempt: ExecutionAttempt,
  contract: ExecutionContract,
): string {
  return (
    attempt.boundExecutionContract?.semanticMaterial?.action ?? contract.action
  );
}

async function materializeDocsWriteProductTerminal(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly attempt: ExecutionAttempt;
  readonly contract: ExecutionContract;
  /** Hot worktree from the just-completed docs_write launch (optional). */
  readonly docsWriteWorktreeRef?: string | null;
}): Promise<MaterializeW3bProductTerminalResult> {
  const services = input.oa.evidenceReviewServices!;
  const managedRepoRootBase =
    input.oa.executionAttemptServices?.realBoundary?.managedRepoRootBase ??
    resolveManagedRepoRootBaseFromEnv() ??
    null;

  const segment = input.attempt.attemptId.replace(/[^a-zA-Z0-9:_-]/g, "");
  const evidenceId = `ev:docs-write:${segment}`.slice(0, 128);
  const artifactEvidence = await services.evidenceReader.findById(evidenceId);

  const artifactAbsolutePath = resolveDocsWriteArtifactAbsolutePath({
    attempt: input.attempt,
    contract: input.contract,
    evidence: artifactEvidence ?? null,
    worktreeRef: input.docsWriteWorktreeRef,
    managedRepoRootBase,
  });

  // Automatic Product qualification — reuse completeDocsWriteClaimEvidenceCompletion.
  // Prefer hot worktree / managed path; restart-safe when conformity already persisted.
  const completed = await completeDocsWriteClaimEvidenceCompletion({
    evidenceReviewServices: services,
    attempt: input.attempt,
    contract: input.contract,
    actor: LOCAL_PILOTE_ACTOR,
    ...(artifactAbsolutePath
      ? { artifactAbsolutePath }
      : {}),
  });

  let claimEvaluation: ClaimEvaluation;
  let reviewBundle: ReviewBundle;
  let evidence: Evidence | null = artifactEvidence ?? null;
  let reusedFromIdempotency = false;

  if (completed.ok) {
    claimEvaluation = completed.claimEvaluation;
    reviewBundle = completed.reviewBundle;
    evidence = completed.artifactEvidence;
    reusedFromIdempotency = Boolean(completed.reusedFromIdempotencyKey);
  } else {
    // Fail-closed Product claim: keep technical Attempt as-is; project from
    // historical artifact RB (typically NOT_PROVEN without conformity).
    const requalified = await requalifyDocsWriteContractResult({
      evidenceReviewServices: services,
      attempt: input.attempt,
      contract: input.contract,
      actor: LOCAL_PILOTE_ACTOR,
    });
    if (!requalified.ok) {
      return {
        ok: false,
        code: completed.code,
        message: `${completed.message} — fallback requalify: ${requalified.message}`,
      };
    }
    claimEvaluation = requalified.claimEvaluation;
    reviewBundle = requalified.reviewBundle;
    reusedFromIdempotency = Boolean(requalified.reusedFromIdempotencyKey);
  }

  const product = projectFromFacts({
    attempt: input.attempt,
    contract: input.contract,
    evidence,
    reviewBundle,
    claimEvaluation,
  });

  // W3-C is best-effort after Product CE is durable — never erase a qualified
  // Product outcome if Nora/LPS rehydrate fails; surface Pilot-facing reserve.
  let postEvidence: W3cPostEvidenceLoopResult | undefined;
  try {
    if (product.evidenceId) {
      const existing = await findExistingW3cPostEvidence({
        oa: input.oa,
        projectId: input.projectId,
        evidenceId: product.evidenceId,
        attemptId: input.attempt.attemptId,
        product,
      });
      if (existing) {
        return finishWithOptionalPostEvidence({
          reusedFromIdempotency,
          product,
          postEvidence: existing,
        });
      }
      const rehydrated = await rehydrateW3cPostEvidenceFromLps({
        oa: input.oa,
        projectId: input.projectId,
        product,
      });
      if (rehydrated.ok) {
        return finishWithOptionalPostEvidence({
          reusedFromIdempotency,
          product,
          postEvidence: rehydrated,
        });
      }
    }

    postEvidence = await runW3cPostEvidenceLoop({
      oa: input.oa,
      projectId: input.projectId,
      attemptId: input.attempt.attemptId,
      product,
    });
  } catch (cause) {
    postEvidence = w3cUnavailableFailure(cause);
  }

  return finishWithOptionalPostEvidence({
    reusedFromIdempotency,
    product,
    postEvidence,
  });
}

/** Write path — ingest Evidence + RB + Contract Result CE + project. */
export async function materializeW3bProductTerminal(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly attemptId: string;
  readonly claimedProductOutcome?: unknown;
  readonly cycleProfile?: unknown;
  readonly ckcId?: unknown;
  /** Optional hot worktree from docs_write completion (same request). */
  readonly docsWriteWorktreeRef?: string | null;
}): Promise<MaterializeW3bProductTerminalResult> {
  void input.claimedProductOutcome;
  void input.cycleProfile;
  void input.ckcId;

  const loaded = await loadAttemptAndContract(input);
  if (!loaded.ok) return loaded;
  const { attempt, contract } = loaded;

  // Docs-write Product claim path only when Artifact Evidence exists (typically
  // succeeded REAL/fixture ingest). Failed docs_write Attempts without Artifact
  // Evidence keep the technical W3-B materialize path for recovery/UNCLAIMED.
  if (boundActionOf(attempt, contract) === M4_BOUNDED_DOCS_WRITE_ACTION) {
    const servicesProbe = input.oa.evidenceReviewServices!;
    const segment = attempt.attemptId.replace(/[^a-zA-Z0-9:_-]/g, "");
    const docsWriteEvidenceId = `ev:docs-write:${segment}`.slice(0, 128);
    const docsWriteEvidence =
      await servicesProbe.evidenceReader.findById(docsWriteEvidenceId);
    if (docsWriteEvidence) {
      return materializeDocsWriteProductTerminal({
        oa: input.oa,
        projectId: input.projectId,
        attempt,
        contract,
        docsWriteWorktreeRef: input.docsWriteWorktreeRef,
      });
    }
  }

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

  // Mission Product path: W3-B frozen RB must contain verified Mission Evidence
  // as the sole evidenceRefs set consumed by EvaluateContractResult (CE bindings
  // = selectEvidenceIds mission-only). Technical Attempt Evidence alone remains
  // the fallback when Mission Evidence is absent/unverified → NOT_PROVEN honest.
  const isMissionProduct = contract.constraints.includes(
    PRODUCT_MISSION_FROM_DURABLE_CONTEXT,
  );
  let evidenceIdsForBundle: string[] = [ingested.evidence.evidenceId];
  let primaryEvidence = ingested.evidence;
  if (isMissionProduct) {
    const missionEvidenceId = missionResultEvidenceIdForAttempt(attempt.attemptId);
    const missionEvidence =
      await services.evidenceReader.findById(missionEvidenceId);
    if (missionEvidence && missionEvidence.status === "verified") {
      evidenceIdsForBundle = [missionEvidence.evidenceId];
      primaryEvidence = missionEvidence;
    }
    // Missing / unverified Mission Evidence → tech-only RB; mission semantic
    // yields NOT_PROVEN / Product UNCLAIMED (honest).
  }

  const bundle = await services.createReviewBundle.execute({
    reviewBundleId: ids.reviewBundleId,
    idempotencyKey: ids.reviewBundleIdempotencyKey,
    actor: LOCAL_PILOTE_ACTOR,
    projectId: input.projectId,
    executionContractId: contract.executionContractId,
    ...(contract.cycleInstanceId ? { cycleInstanceId: contract.cycleInstanceId } : {}),
    evidenceIds: evidenceIdsForBundle,
    reservations: [...productReservationsForAttempt(attempt)],
  });

  if (!bundle.ok) {
    return {
      ok: false,
      code: bundle.error.detailCode,
      message: bundle.error.message,
    };
  }

  // Idempotent rematerialize: create may return the already-frozen RB.
  // Calling freeze again with a bumped expectedVersion fingerprints differently
  // and hits IDEMPOTENCY_CONFLICT — skip freeze when already frozen.
  let frozenReviewBundle = bundle.reviewBundle;
  let freezeReusedFromIdempotencyKey = Boolean(bundle.reusedFromIdempotencyKey);
  if (
    !bundle.reviewBundle.frozenAt &&
    bundle.reviewBundle.status === "draft"
  ) {
    const frozen = await services.freezeReviewBundle.execute({
      reviewBundleId: ids.reviewBundleId,
      expectedVersion: bundle.reviewBundle.version,
      idempotencyKey: `idem:w3b-rb-freeze:${attempt.attemptId}`,
      actor: LOCAL_PILOTE_ACTOR,
    });

    if (!frozen.ok) {
      return {
        ok: false,
        code: frozen.error.detailCode,
        message: frozen.error.message,
      };
    }
    frozenReviewBundle = frozen.reviewBundle;
    freezeReusedFromIdempotencyKey = Boolean(frozen.reusedFromIdempotencyKey);
  } else {
    // Already frozen from a prior materialize — treat as idempotent reuse.
    freezeReusedFromIdempotencyKey = true;
  }

  if (!services.evaluateContractResult) {
    return {
      ok: false,
      code: "CONTRACT_RESULT_EVALUATOR_UNAVAILABLE",
      message: "EvaluateContractResult indisponible — fail-closed.",
    };
  }

  // Mission semantic selectEvidenceIds is mission-only. Passing tech Evidence
  // as request.evidence when Mission Evidence is absent would hard-fail
  // (evidence_not_selected_by_semantic). Omit it so incomplete → not_proven.
  const evidenceForEvaluate =
    isMissionProduct && !isMissionResultEvidenceId(primaryEvidence.evidenceId)
      ? undefined
      : primaryEvidence;

  const evaluated = await services.evaluateContractResult.execute({
    claimEvaluationId: ids.claimEvaluationId,
    idempotencyKey: ids.claimEvaluationIdempotencyKey,
    actor: LOCAL_PILOTE_ACTOR,
    contract,
    attempt: {
      attemptId: attempt.attemptId,
      executionContractId: attempt.executionContractId,
      executionContractVersion: attempt.executionContractVersion,
      executionContractSemanticFingerprint:
        attempt.executionContractSemanticFingerprint,
      boundExecutionContract: attempt.boundExecutionContract,
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
    ...(evidenceForEvaluate ? { evidence: evidenceForEvaluate } : {}),
    reviewBundle: frozenReviewBundle,
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
        evidence: primaryEvidence,
        reviewBundle: frozenReviewBundle,
        claimEvaluation: evaluated.claimEvaluation ?? null,
      }),
    };
  }

  const product = projectFromFacts({
    attempt,
    contract,
    evidence: primaryEvidence,
    reviewBundle: frozenReviewBundle,
    claimEvaluation: evaluated.claimEvaluation,
  });

  const reusedFromIdempotency = Boolean(
    ingested.reusedFromIdempotencyKey ||
      bundle.reusedFromIdempotencyKey ||
      freezeReusedFromIdempotencyKey ||
      evaluated.reusedFromIdempotencyKey,
  );

  // B2 — prefer existing Epistemic / rehydrate before Nora + LPS append.
  // CR-PJR-03: reuse only when Recommendation matches newly projected Product.
  if (product.evidenceId) {
    const existing = await findExistingW3cPostEvidence({
      oa: input.oa,
      projectId: input.projectId,
      evidenceId: product.evidenceId,
      attemptId: attempt.attemptId,
      product,
    });
    if (existing) {
      return {
        ok: true,
        reusedFromIdempotency,
        product,
        postEvidence: existing,
      };
    }
    // Prefer LPS exact / Epistemic rehydrate before Nora+LPS (covers partial-write).
    const rehydrated = await rehydrateW3cPostEvidenceFromLps({
      oa: input.oa,
      projectId: input.projectId,
      product,
    });
    if (rehydrated.ok) {
      return {
        ok: true,
        reusedFromIdempotency,
        product,
        postEvidence: rehydrated,
      };
    }
  }

  const postEvidence = await runW3cPostEvidenceLoop({
    oa: input.oa,
    projectId: input.projectId,
    attemptId: attempt.attemptId,
    product,
  });

  return {
    ok: true,
    reusedFromIdempotency,
    product,
    postEvidence,
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
  const services = input.oa.evidenceReviewServices!;
  const isDocsWrite =
    boundActionOf(attempt, contract) === M4_BOUNDED_DOCS_WRITE_ACTION;

  let evidence: Evidence | null = null;
  let reviewBundle: ReviewBundle | null = null;
  let claimEvaluation: ClaimEvaluation | null = null;

  if (isDocsWrite) {
    const segment = attempt.attemptId.replace(/[^a-zA-Z0-9:_-]/g, "");
    const evidenceId = `ev:docs-write:${segment}`.slice(0, 128);
    evidence = (await services.evidenceReader.findById(evidenceId)) ?? null;
    const resolved = await resolveCurrentContractResultClaimEvaluation({
      repo: services.claimEvaluationRepository,
      projectId: input.projectId,
      executionAttemptId: attempt.attemptId,
    });
    if (resolved.status === "ambiguous") {
      return {
        ok: false,
        code: "CONTRACT_RESULT_CLAIM_LINEAGE_AMBIGUOUS",
        message: `Multiple active ContractResult CEs — fail-closed: ${resolved.claimEvaluationIds.join(",")}`,
      };
    }
    claimEvaluation =
      resolved.status === "one" ? resolved.claimEvaluation : null;
    // Prefer RB bound by current CE (successor after evidence-completion-v2).
    const boundRbId =
      claimEvaluation?.contractResultBindings?.reviewBundleId ??
      `rb:docs-write:${segment}`.slice(0, 128);
    reviewBundle =
      (await services.reviewBundleReader.findById(boundRbId)) ?? null;
  } else {
    const ids = w3bEvidenceIdentity(attempt.attemptId);
    evidence = (await services.evidenceReader.findById(ids.evidenceId)) ?? null;
    reviewBundle =
      (await services.reviewBundleReader.findById(ids.reviewBundleId)) ?? null;
    const resolved = await resolveCurrentContractResultClaimEvaluation({
      repo: services.claimEvaluationRepository,
      projectId: input.projectId,
      executionAttemptId: attempt.attemptId,
    });
    if (resolved.status === "ambiguous") {
      return {
        ok: false,
        code: "CONTRACT_RESULT_CLAIM_LINEAGE_AMBIGUOUS",
        message: `Multiple active ContractResult CEs — fail-closed: ${resolved.claimEvaluationIds.join(",")}`,
      };
    }
    claimEvaluation =
      resolved.status === "one"
        ? resolved.claimEvaluation
        : ((await services.claimEvaluationReader.findById(
            ids.claimEvaluationId,
          )) ?? null);
  }

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

  const product = projectFromFacts({
    attempt,
    contract,
    evidence,
    reviewBundle,
    claimEvaluation,
  });

  const postEvidence = await rehydrateW3cPostEvidenceFromLps({
    oa: input.oa,
    projectId: input.projectId,
    product,
  });

  return finishWithOptionalPostEvidence({
    reusedFromIdempotency: true,
    product,
    postEvidence,
  });
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
      readonly postEvidence?: W3cPostEvidenceLoopResult;
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
    ...(rehydrated.postEvidence
      ? { postEvidence: rehydrated.postEvidence }
      : {}),
  };
}

/** @deprecated alias for actions/tests migrating from heuristic materialize name */
export const materializeProductOutcomeFromAttempt = materializeW3bProductTerminal;
export const rehydrateProductOutcomeFromAttempt = rehydrateW3bProductTerminal;
export const rehydrateLatestProductOutcomeForContract =
  rehydrateLatestW3bProductTerminalForContract;
