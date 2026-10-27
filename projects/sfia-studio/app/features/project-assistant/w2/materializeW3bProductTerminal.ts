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
import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";
import type { ClaimEvaluation, Evidence, ReviewBundle } from "@/lib/oa/evidence-review";
import { resolveCurrentContractResultClaimEvaluation } from "@/lib/oa/evidence-review";
import { PRODUCT_MISSION_FROM_DURABLE_CONTEXT } from "@/lib/oa/evidence-review/application/missionResultPayload";
import {
  isMissionResultEvidenceId,
  missionResultEvidenceIdForAttempt,
} from "@/features/project-assistant/f3/ingestMissionResultEvidence";
import { executionReviewVerificationEvidenceIdForAttempt } from "@/features/project-assistant/f3/ingestExecutionReviewVerificationEvidence";
import {
  GENERIC_FILESYSTEM_MATERIALIZATION_EVIDENCE_SOURCE_EXPORT,
  genericMaterializationEvidenceIdForAttempt,
} from "@/features/project-assistant/f3/ingestGenericFilesystemMaterializationArtifactEvidence";
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
import { maybeMaterializeProductSynthesisAfterW3c } from "./maybeMaterializeProductSynthesisAfterW3c";
import { resolveManagedRepoRootBaseFromEnv } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";

/**
 * R-S8-01 — Admit Evidence into W3-B RB only when ownership bindings match the
 * execution context. Deterministic Attempt-derived IDs alone are insufficient.
 */
export type W3bEvidenceAdmissionRole =
  | "mission_result"
  | "verification"
  | "generic_materialization";

/** Product-local refusal when present Evidence fails W3-B ownership / role checks. */
export const W3B_EVIDENCE_ADMISSION_REJECTED =
  "W3B_EVIDENCE_ADMISSION_REJECTED" as const;

/**
 * R-S8-03 — Discriminated lookup: ABSENT ≠ REJECTED.
 * Present-but-incoherent Evidence must never be interpreted as mere absence.
 */
export type W3bEvidenceAdmissionResolution =
  | { readonly kind: "absent" }
  | { readonly kind: "admissible"; readonly evidence: Evidence }
  | {
      readonly kind: "rejected";
      readonly evidence: Evidence;
      readonly role: W3bEvidenceAdmissionRole;
      readonly reason: string;
    };

export function evidenceAdmissibleForW3bExecutionContext(input: {
  readonly evidence: Evidence;
  readonly projectId: string;
  readonly executionContractId: string;
  readonly executionAttemptId: string;
  readonly cycleInstanceId: string | null;
  readonly role: W3bEvidenceAdmissionRole;
}): { ok: true } | { ok: false; reason: string } {
  const e = input.evidence;
  if (e.status !== "verified") {
    return { ok: false, reason: "evidence_not_verified" };
  }
  const b = e.bindings ?? {};
  if ((b.projectId ?? null) !== input.projectId) {
    return { ok: false, reason: "evidence_project_mismatch" };
  }
  if ((b.executionContractId ?? null) !== input.executionContractId) {
    return { ok: false, reason: "evidence_execution_contract_mismatch" };
  }
  if ((b.executionAttemptId ?? null) !== input.executionAttemptId) {
    return { ok: false, reason: "evidence_execution_attempt_mismatch" };
  }
  const evidenceCycle = b.cycleInstanceId?.trim() || null;
  const contractCycle = input.cycleInstanceId?.trim() || null;
  if (contractCycle) {
    if (evidenceCycle !== contractCycle) {
      return { ok: false, reason: "evidence_cycle_mismatch" };
    }
  } else if (evidenceCycle) {
    // Project-only EC: refuse foreign / leftover cycle binding.
    return { ok: false, reason: "evidence_foreign_cycle_on_project_only" };
  }

  if (input.role === "verification") {
    if (e.sourceKind !== "execution_attempt") {
      return { ok: false, reason: "verification_source_kind_mismatch" };
    }
    if (e.provenance?.source !== "execution_adapter") {
      return { ok: false, reason: "verification_provenance_mismatch" };
    }
  } else if (input.role === "generic_materialization") {
    if (e.sourceKind !== "external") {
      return { ok: false, reason: "generic_mat_source_kind_mismatch" };
    }
    if (e.source !== GENERIC_FILESYSTEM_MATERIALIZATION_EVIDENCE_SOURCE_EXPORT) {
      return { ok: false, reason: "generic_mat_source_mismatch" };
    }
  } else if (input.role === "mission_result") {
    if (e.sourceKind !== "execution_attempt") {
      return { ok: false, reason: "mission_source_kind_mismatch" };
    }
  }

  return { ok: true };
}

export function resolveW3bEvidenceAdmission(
  evidence: Evidence | null | undefined,
  ctx: {
    readonly projectId: string;
    readonly executionContractId: string;
    readonly executionAttemptId: string;
    readonly cycleInstanceId: string | null;
    readonly role: W3bEvidenceAdmissionRole;
  },
): W3bEvidenceAdmissionResolution {
  if (!evidence) return { kind: "absent" };
  const check = evidenceAdmissibleForW3bExecutionContext({
    evidence,
    ...ctx,
  });
  if (check.ok) {
    return { kind: "admissible", evidence };
  }
  return {
    kind: "rejected",
    evidence,
    role: ctx.role,
    reason: check.reason,
  };
}

function productCodeForW3bEvidenceRejection(reason: string): string {
  switch (reason) {
    case "evidence_project_mismatch":
      return "EVIDENCE_PROJECT_MISMATCH";
    case "evidence_execution_contract_mismatch":
      return "EVIDENCE_CONTRACT_MISMATCH";
    case "evidence_execution_attempt_mismatch":
      return "EVIDENCE_ATTEMPT_MISMATCH";
    case "evidence_cycle_mismatch":
    case "evidence_foreign_cycle_on_project_only":
      return "EVIDENCE_CYCLE_MISMATCH";
    default:
      return W3B_EVIDENCE_ADMISSION_REJECTED;
  }
}

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

/**
 * Soft-fail Synthesis observability on ok:true Product terminal.
 * Synthesis failure never flips ok — Truth C / CE / W3-C stay intact.
 */
export type SynthesisMaterializationObservability =
  | { readonly status: "materialized"; readonly synthesisId: string }
  | {
      readonly status: "failed";
      readonly code: string;
      readonly message: string;
      readonly retryable: true;
    };

/**
 * After W3-C success/rehydrate, soft-materialize Product Synthesis.
 * Synthesis failure never mutates Truth C / Product terminal outcome.
 * Captures maybeMaterialize result for observability (never discarded).
 */
async function finishWithOptionalPostEvidence(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly product: W3BProductTerminalProjection;
  readonly reusedFromIdempotency: boolean;
  readonly postEvidence: W3cPostEvidenceLoopResult | undefined;
}): Promise<Extract<MaterializeW3bProductTerminalResult, { ok: true }>> {
  const postOk = input.postEvidence?.ok === true;
  let synthesisMaterialization: SynthesisMaterializationObservability | undefined;
  if (postOk && input.postEvidence?.ok === true) {
    const maybe = await maybeMaterializeProductSynthesisAfterW3c({
      oa: input.oa,
      projectId: input.projectId,
      product: input.product,
      postEvidence: input.postEvidence,
    });
    if (maybe.ok) {
      synthesisMaterialization = {
        status: "materialized",
        synthesisId: maybe.synthesis.synthesisId,
      };
    } else {
      synthesisMaterialization = {
        status: "failed",
        code: maybe.code,
        message: maybe.message,
        retryable: true,
      };
    }
  }
  return {
    ok: true,
    reusedFromIdempotency: input.reusedFromIdempotency,
    product: withNoraUnavailableReserve(input.product, postOk),
    postEvidence: input.postEvidence,
    ...(synthesisMaterialization
      ? { synthesisMaterialization }
      : {}),
  };
}

export type { W3BProductTerminalProjection as W3BProductOutcomeProjection };

export type MaterializeW3bProductTerminalResult =
  | {
      readonly ok: true;
      readonly product: W3BProductTerminalProjection;
      readonly reusedFromIdempotency: boolean;
      readonly postEvidence?: W3cPostEvidenceLoopResult;
      readonly synthesisMaterialization?: SynthesisMaterializationObservability;
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

function w3bEvidenceRejectionFailure(input: {
  readonly attempt: ExecutionAttempt;
  readonly contract: ExecutionContract;
  readonly primaryEvidence: Evidence | null;
  readonly rejection: Extract<W3bEvidenceAdmissionResolution, { kind: "rejected" }>;
}): Extract<MaterializeW3bProductTerminalResult, { ok: false }> {
  const { rejection } = input;
  return {
    ok: false,
    code: productCodeForW3bEvidenceRejection(rejection.reason),
    message: `W3-B Evidence admission rejected (${rejection.role}): ${rejection.reason} for ${rejection.evidence.evidenceId}`,
    product: projectFromFacts({
      attempt: input.attempt,
      contract: input.contract,
      evidence: input.primaryEvidence,
      reviewBundle: null,
      claimEvaluation: null,
    }),
  };
}

function boundActionOf(
  attempt: ExecutionAttempt,
  contract: ExecutionContract,
): string {
  return (
    attempt.boundExecutionContract?.semanticMaterial?.action ?? contract.action
  );
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
  // (+ Studio Verification Evidence when required) as the Evidence set consumed
  // by EvaluateContractResult. Technical Attempt Evidence alone remains the
  // fallback when Mission Evidence is absent/unverified → NOT_PROVEN honest.
  const isMissionProduct = contract.constraints.includes(
    PRODUCT_MISSION_FROM_DURABLE_CONTEXT,
  );
  const ownershipCtx = {
    projectId: input.projectId,
    executionContractId: contract.executionContractId,
    executionAttemptId: attempt.attemptId,
    cycleInstanceId: contract.cycleInstanceId?.trim() || null,
  };
  let evidenceIdsForBundle: string[] = [ingested.evidence.evidenceId];
  let primaryEvidence = ingested.evidence;
  if (isMissionProduct) {
    const missionEvidenceId = missionResultEvidenceIdForAttempt(attempt.attemptId);
    const missionRaw = await services.evidenceReader.findById(missionEvidenceId);
    const missionAdmission = resolveW3bEvidenceAdmission(missionRaw, {
      ...ownershipCtx,
      role: "mission_result",
    });
    if (missionAdmission.kind === "rejected") {
      return w3bEvidenceRejectionFailure({
        attempt,
        contract,
        primaryEvidence,
        rejection: missionAdmission,
      });
    }
    if (missionAdmission.kind === "admissible") {
      evidenceIdsForBundle = [missionAdmission.evidence.evidenceId];
      primaryEvidence = missionAdmission.evidence;
      // CP2-04 — include Verification Evidence in same ReviewBundle only when
      // the EC requires studio-verified-changeset (generic local-write path).
      // Historical clarify/read missions must keep a mission-only RB so CE
      // bindings.evidenceRefs match reviewBundle.evidenceRefs.
      const { missionRequiresStudioVerification } = await import(
        "@/lib/oa/evidence-review/application/missionResultContractResultSemantic"
      );
      const requiresVerification = missionRequiresStudioVerification({
        evidenceRequirements: [
          ...((
            contract as { evidenceRequirements?: readonly string[] }
          ).evidenceRequirements ?? []),
          ...((
            (contract as {
              inspectionDisclosure?: {
                evidenceRequirements?: readonly string[];
              };
            }).inspectionDisclosure
          )?.evidenceRequirements ?? []),
        ],
      } as never);
      if (requiresVerification) {
        const verificationEvidenceId =
          executionReviewVerificationEvidenceIdForAttempt(attempt.attemptId);
        const verificationRaw =
          await services.evidenceReader.findById(verificationEvidenceId);
        const verificationAdmission = resolveW3bEvidenceAdmission(
          verificationRaw,
          {
            ...ownershipCtx,
            role: "verification",
          },
        );
        if (verificationAdmission.kind === "rejected") {
          return w3bEvidenceRejectionFailure({
            attempt,
            contract,
            primaryEvidence,
            rejection: verificationAdmission,
          });
        }
        if (verificationAdmission.kind === "admissible") {
          evidenceIdsForBundle = [
            missionAdmission.evidence.evidenceId,
            verificationAdmission.evidence.evidenceId,
          ];
        }
        // ABSENT verification → mission-only RB (honest incomplete / NOT_PROVEN).
      }
    }
    // ABSENT Mission Evidence → tech-only RB; mission semantic NOT_PROVEN / UNCLAIMED.
    // REJECTED Mission Evidence never falls through as absence (R-S8-03).
  } else {
    // S8 Project-first Generic (no PRODUCT_MISSION stamp): include owned verified
    // Studio Verification + generic_materialization Evidence when ADMISSIBLE.
    // ABSENT → continue without that Evidence (honest).
    // REJECTED → fail-closed Product (never silent-as-absent).
    const verificationEvidenceId =
      executionReviewVerificationEvidenceIdForAttempt(attempt.attemptId);
    const verificationRaw =
      await services.evidenceReader.findById(verificationEvidenceId);
    const verificationAdmission = resolveW3bEvidenceAdmission(verificationRaw, {
      ...ownershipCtx,
      role: "verification",
    });
    if (verificationAdmission.kind === "rejected") {
      return w3bEvidenceRejectionFailure({
        attempt,
        contract,
        primaryEvidence,
        rejection: verificationAdmission,
      });
    }
    if (verificationAdmission.kind === "admissible") {
      evidenceIdsForBundle.push(verificationAdmission.evidence.evidenceId);
    }
    const genericMatId = genericMaterializationEvidenceIdForAttempt(
      attempt.attemptId,
    );
    const genericMatRaw = await services.evidenceReader.findById(genericMatId);
    const genericMatAdmission = resolveW3bEvidenceAdmission(genericMatRaw, {
      ...ownershipCtx,
      role: "generic_materialization",
    });
    if (genericMatAdmission.kind === "rejected") {
      return w3bEvidenceRejectionFailure({
        attempt,
        contract,
        primaryEvidence,
        rejection: genericMatAdmission,
      });
    }
    if (genericMatAdmission.kind === "admissible") {
      evidenceIdsForBundle.push(genericMatAdmission.evidence.evidenceId);
    }
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
    // R-S8-02 — fingerprint mismatch (e.g. late Evidence after prior create) must
    // not be projected as Product success; OA fail-closed IDEMPOTENCY_CONFLICT.
    const lateHint =
      bundle.error.detailCode === "IDEMPOTENCY_CONFLICT"
        ? ` — late or divergent Evidence set cannot rewrite frozen/idempotent ReviewBundle for Attempt ${attempt.attemptId}`
        : "";
    return {
      ok: false,
      code: bundle.error.detailCode,
      message: `${bundle.error.message}${lateHint}`,
      product: projectFromFacts({
        attempt,
        contract,
        evidence: primaryEvidence,
        reviewBundle: bundle.reviewBundle ?? null,
        claimEvaluation: null,
      }),
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

  const productRaw = projectFromFacts({
    attempt,
    contract,
    evidence: primaryEvidence,
    reviewBundle: frozenReviewBundle,
    claimEvaluation: evaluated.claimEvaluation,
  });
  const { applyVerifiedChangeSetProductHonesty } = await import(
    "./applyVerifiedChangeSetProductHonesty"
  );
  const product = applyVerifiedChangeSetProductHonesty({
    attemptId: attempt.attemptId,
    product: productRaw,
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
      return finishWithOptionalPostEvidence({
        oa: input.oa,
        projectId: input.projectId,
        reusedFromIdempotency,
        product,
        postEvidence: existing,
      });
    }
    // Prefer LPS exact / Epistemic rehydrate before Nora+LPS (covers partial-write).
    const rehydrated = await rehydrateW3cPostEvidenceFromLps({
      oa: input.oa,
      projectId: input.projectId,
      product,
    });
    if (rehydrated.ok) {
      return finishWithOptionalPostEvidence({
        oa: input.oa,
        projectId: input.projectId,
        reusedFromIdempotency,
        product,
        postEvidence: rehydrated,
      });
    }
  }

  const postEvidence = await runW3cPostEvidenceLoop({
    oa: input.oa,
    projectId: input.projectId,
    attemptId: attempt.attemptId,
    product,
  });

  return finishWithOptionalPostEvidence({
    oa: input.oa,
    projectId: input.projectId,
    reusedFromIdempotency,
    product,
    postEvidence,
  });
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
  let evidence: Evidence | null = null;
  let reviewBundle: ReviewBundle | null = null;
  let claimEvaluation: ClaimEvaluation | null = null;
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
    oa: input.oa,
    projectId: input.projectId,
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
      readonly synthesisMaterialization?: SynthesisMaterializationObservability;
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
    ...(rehydrated.synthesisMaterialization
      ? { synthesisMaterialization: rehydrated.synthesisMaterialization }
      : {}),
  };
}

/** @deprecated alias for actions/tests migrating from heuristic materialize name */
export const materializeProductOutcomeFromAttempt = materializeW3bProductTerminal;
export const rehydrateProductOutcomeFromAttempt = rehydrateW3bProductTerminal;
export const rehydrateLatestProductOutcomeForContract =
  rehydrateLatestW3bProductTerminalForContract;
