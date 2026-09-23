/**
 * Complete docs_write claim via durable evidence completion (ZERO REAL).
 * Option B: fresh successor ReviewBundle — historical rb:docs-write untouched.
 *
 * Flow (CR-CEC-01/02/03):
 * 1) derive oracle ONLY from attempt.boundExecutionContract.semanticMaterial.inputs
 * 2) verify artifact against closed bound criteria + oracle fingerprint
 * 3) register conformity attestation Evidence (v2 technicalResultRef)
 * 4) create successor RB with artifact + conformity
 * 5) freeze
 * 6) requalify with correctionRef evidence-completion-v2
 */
import type { ActorReference, Digest } from "@/lib/oa/doctrine";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";
import type {
  ClaimEvaluation,
  Evidence,
  EvidenceReviewServices,
  ReviewBundle,
} from "@/lib/oa/evidence-review";
import {
  DOCS_WRITE_EVIDENCE_COMPLETION_CORRECTION_REF,
  docsWriteContractResultIdentity,
  extractDocsWriteMinConformityCriteriaFromBoundAttempt,
  parseDocsWriteConformityOracleFingerprint,
  verifyDocsWriteMinConformityFromBytes,
  verifyDocsWriteMinConformityFromFile,
} from "@/lib/oa/evidence-review";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
import { requalifyDocsWriteContractResult } from "./requalifyDocsWriteContractResult";

export type CompleteDocsWriteClaimEvidenceCompletionInput = {
  evidenceReviewServices: EvidenceReviewServices;
  attempt: ExecutionAttempt;
  contract: ExecutionContract;
  /** Absolute filesystem path to historical artifact (read-only). */
  artifactAbsolutePath?: string;
  /** In-memory artifact bytes (tests) — mutually exclusive with path. */
  artifactBytes?: Buffer;
  actor?: ActorReference;
  correlationId?: string;
  nowIso?: string;
  correctionRef?: string;
};

export type CompleteDocsWriteClaimEvidenceCompletionResult =
  | {
      ok: true;
      claimEvaluation: ClaimEvaluation;
      reviewBundle: ReviewBundle;
      conformityEvidence: Evidence;
      artifactEvidence: Evidence;
      supersededClaimEvaluationId?: string;
      verifierMatchedHeadings: readonly string[];
      oracleFingerprint: string;
      reusedFromIdempotencyKey?: boolean;
    }
  | { ok: false; code: string; message: string };

export async function completeDocsWriteClaimEvidenceCompletion(
  input: CompleteDocsWriteClaimEvidenceCompletionInput,
): Promise<CompleteDocsWriteClaimEvidenceCompletionResult> {
  const actor = input.actor ?? LOCAL_PILOTE_ACTOR;
  const services = input.evidenceReviewServices;
  const correctionRef =
    input.correctionRef ?? DOCS_WRITE_EVIDENCE_COMPLETION_CORRECTION_REF;

  const ids = docsWriteContractResultIdentity(input.attempt.attemptId, {
    correctionRef,
    scopeReviewBundle: true,
  });

  const artifactEvidence = await services.evidenceReader.findById(
    ids.evidenceId,
  );
  if (!artifactEvidence) {
    return {
      ok: false,
      code: "DOCS_WRITE_EVIDENCE_MISSING",
      message: `Artifact Evidence ${ids.evidenceId} introuvable.`,
    };
  }

  const historicalRb = await services.reviewBundleReader.findById(
    docsWriteContractResultIdentity(input.attempt.attemptId).reviewBundleId,
  );
  if (!historicalRb) {
    return {
      ok: false,
      code: "DOCS_WRITE_REVIEW_BUNDLE_MISSING",
      message: "Historical docs_write RB introuvable.",
    };
  }
  let historicalFrozen = historicalRb;
  if (!historicalFrozen.frozenAt || !historicalFrozen.frozenVersion) {
    if (historicalFrozen.status !== "draft") {
      return {
        ok: false,
        code: "DOCS_WRITE_REVIEW_BUNDLE_NOT_FROZEN",
        message: "Historical docs_write RB must remain frozen/auditable.",
      };
    }
    const frozenHistorical = await services.freezeReviewBundle.execute({
      reviewBundleId: historicalFrozen.reviewBundleId,
      expectedVersion: historicalFrozen.version,
      idempotencyKey: `idem:docs-write-rb-freeze:${input.attempt.attemptId}`,
      actor,
      correlationId: input.correlationId,
      nowIso: input.nowIso,
    });
    if (!frozenHistorical.ok) {
      return {
        ok: false,
        code: frozenHistorical.error.detailCode,
        message:
          frozenHistorical.error.internalCauseRef ??
          frozenHistorical.error.message,
      };
    }
    historicalFrozen = frozenHistorical.reviewBundle;
  }
  if (!historicalFrozen.frozenAt || !historicalFrozen.frozenVersion) {
    return {
      ok: false,
      code: "DOCS_WRITE_REVIEW_BUNDLE_NOT_FROZEN",
      message: "Historical docs_write RB must remain frozen/auditable.",
    };
  }

  // Restart-safe idempotence: when conformity Evidence + frozen successor RB
  // already exist, requalify without re-reading the ephemeral worktree payload.
  const existingConformity = await services.evidenceReader.findById(
    ids.conformityEvidenceId,
  );
  const existingSuccessorRb = await services.reviewBundleReader.findById(
    ids.reviewBundleId,
  );
  if (
    existingConformity &&
    existingSuccessorRb?.frozenAt &&
    existingSuccessorRb.frozenVersion &&
    !input.artifactBytes &&
    !input.artifactAbsolutePath
  ) {
    const requalified = await requalifyDocsWriteContractResult({
      evidenceReviewServices: services,
      attempt: input.attempt,
      contract: input.contract,
      actor,
      correlationId: input.correlationId,
      nowIso: input.nowIso,
      correctionRef,
      scopeReviewBundle: true,
    });
    if (!requalified.ok) {
      return {
        ok: false,
        code: requalified.code,
        message: requalified.message,
      };
    }
    // CR-ARQ-01 — parse canonical technicalResultRef only (never ad-hoc strip).
    const oracleFromRef = parseDocsWriteConformityOracleFingerprint(
      typeof existingConformity.technicalResultRef === "string"
        ? existingConformity.technicalResultRef
        : undefined,
    );
    if (!oracleFromRef) {
      return {
        ok: false,
        code: "DOCS_WRITE_CONFORMITY_ORACLE_FINGERPRINT_UNPARSEABLE",
        message:
          "Conformity Evidence technicalResultRef is not a canonical v2 oracle fingerprint.",
      };
    }
    return {
      ok: true,
      claimEvaluation: requalified.claimEvaluation,
      reviewBundle: requalified.reviewBundle,
      conformityEvidence: existingConformity,
      artifactEvidence,
      supersededClaimEvaluationId: requalified.supersededClaimEvaluationId,
      verifierMatchedHeadings: [],
      oracleFingerprint: oracleFromRef,
      reusedFromIdempotencyKey: true,
    };
  }

  // CR-CEC-01 — NEVER fallback to live contract.inputs for oracle derivation.
  const criteria = extractDocsWriteMinConformityCriteriaFromBoundAttempt(
    input.attempt,
  );
  if (!criteria.ok) {
    return { ok: false, code: criteria.code, message: criteria.message };
  }

  const expectedDigest = artifactEvidence.digest as Digest | undefined;
  const artifactPath =
    artifactEvidence.location?.trim() || criteria.criteria.targetPath;

  let verification;
  if (input.artifactBytes) {
    verification = verifyDocsWriteMinConformityFromBytes({
      bytes: input.artifactBytes,
      artifactPath,
      expectedDigest,
      criteria: criteria.criteria,
    });
  } else if (input.artifactAbsolutePath) {
    verification = verifyDocsWriteMinConformityFromFile({
      absolutePath: input.artifactAbsolutePath,
      artifactPath,
      expectedDigest,
      criteria: criteria.criteria,
    });
  } else {
    return {
      ok: false,
      code: "HISTORICAL_ARTIFACT_PAYLOAD_UNAVAILABLE",
      message: "artifactAbsolutePath or artifactBytes required.",
    };
  }

  if (!verification.ok) {
    return {
      ok: false,
      code: verification.code,
      message: verification.message,
    };
  }

  // Idempotent: if conformity Evidence + successor RB + CE already exist, requalify.
  let conformityEvidence =
    (await services.evidenceReader.findById(ids.conformityEvidenceId)) ??
    undefined;
  if (!conformityEvidence) {
    const registered = await services.registerEvidence.execute({
      evidenceId: ids.conformityEvidenceId,
      idempotencyKey: `idem:docs-write-conformity:${correctionRef}:${input.attempt.attemptId}`,
      actor,
      type: "attestation",
      source: verification.verifierSource,
      sourceKind: "system",
      bindings: {
        projectId:
          artifactEvidence.bindings.projectId ?? input.contract.projectId,
        cycleInstanceId:
          artifactEvidence.bindings.cycleInstanceId ??
          input.contract.cycleInstanceId,
        executionContractId: input.attempt.executionContractId,
        executionAttemptId: input.attempt.attemptId,
      },
      classification: "internal",
      storageMode: "metadata_only",
      status: "available",
      availability: "available",
      freshness: "fresh",
      location: artifactPath,
      digest: verification.digest,
      technicalResultRef: verification.technicalResultRef,
      verifiablePayload: false,
      producedBy: actor,
      correlationId: input.correlationId,
      nowIso: input.nowIso,
    });
    if (!registered.ok) {
      return {
        ok: false,
        code: registered.error.detailCode,
        message:
          registered.error.internalCauseRef ?? registered.error.message,
      };
    }
    conformityEvidence = registered.evidence;
  }

  let reviewBundle = await services.reviewBundleReader.findById(
    ids.reviewBundleId,
  );
  if (!reviewBundle) {
    const created = await services.createReviewBundle.execute({
      reviewBundleId: ids.reviewBundleId,
      idempotencyKey: `idem:docs-write-rb-create:${correctionRef}:${input.attempt.attemptId}`,
      actor,
      projectId:
        artifactEvidence.bindings.projectId ?? input.contract.projectId,
      cycleInstanceId:
        artifactEvidence.bindings.cycleInstanceId ??
        input.contract.cycleInstanceId,
      executionContractId: input.attempt.executionContractId,
      evidenceIds: [ids.evidenceId, ids.conformityEvidenceId],
      correlationId: input.correlationId,
      nowIso: input.nowIso,
    });
    if (!created.ok) {
      return {
        ok: false,
        code: created.error.detailCode,
        message: created.error.internalCauseRef ?? created.error.message,
      };
    }
    reviewBundle = created.reviewBundle;
  } else if (reviewBundle.status === "draft") {
    const needArtifact = !reviewBundle.evidenceRefs.includes(ids.evidenceId);
    const needConformity = !reviewBundle.evidenceRefs.includes(
      ids.conformityEvidenceId,
    );
    let version = reviewBundle.version;
    if (needArtifact) {
      const attached = await services.attachEvidenceToReviewBundle.execute({
        reviewBundleId: ids.reviewBundleId,
        evidenceId: ids.evidenceId,
        idempotencyKey: `idem:docs-write-rb-attach-art:${correctionRef}:${input.attempt.attemptId}`,
        actor,
        expectedVersion: version,
        correlationId: input.correlationId,
        nowIso: input.nowIso,
      });
      if (!attached.ok) {
        return {
          ok: false,
          code: attached.error.detailCode,
          message:
            attached.error.internalCauseRef ?? attached.error.message,
        };
      }
      reviewBundle = attached.reviewBundle;
      version = reviewBundle.version;
    }
    if (needConformity) {
      const attached = await services.attachEvidenceToReviewBundle.execute({
        reviewBundleId: ids.reviewBundleId,
        evidenceId: ids.conformityEvidenceId,
        idempotencyKey: `idem:docs-write-rb-attach-conf:${correctionRef}:${input.attempt.attemptId}`,
        actor,
        expectedVersion: version,
        correlationId: input.correlationId,
        nowIso: input.nowIso,
      });
      if (!attached.ok) {
        return {
          ok: false,
          code: attached.error.detailCode,
          message:
            attached.error.internalCauseRef ?? attached.error.message,
        };
      }
      reviewBundle = attached.reviewBundle;
    }
  }

  if (!reviewBundle.frozenAt || !reviewBundle.frozenVersion) {
    if (reviewBundle.status !== "draft") {
      return {
        ok: false,
        code: "DOCS_WRITE_REVIEW_BUNDLE_NOT_FROZEN",
        message: `Successor RB status ${reviewBundle.status} cannot freeze.`,
      };
    }
    const frozen = await services.freezeReviewBundle.execute({
      reviewBundleId: ids.reviewBundleId,
      expectedVersion: reviewBundle.version,
      idempotencyKey: `idem:docs-write-rb-freeze:${correctionRef}:${input.attempt.attemptId}`,
      actor,
      correlationId: input.correlationId,
      nowIso: input.nowIso,
    });
    if (!frozen.ok) {
      return {
        ok: false,
        code: frozen.error.detailCode,
        message: frozen.error.internalCauseRef ?? frozen.error.message,
      };
    }
    reviewBundle = frozen.reviewBundle;
  }

  const requalified = await requalifyDocsWriteContractResult({
    evidenceReviewServices: services,
    attempt: input.attempt,
    contract: input.contract,
    actor,
    correlationId: input.correlationId,
    nowIso: input.nowIso,
    correctionRef,
    scopeReviewBundle: true,
  });

  if (!requalified.ok) {
    return {
      ok: false,
      code: requalified.code,
      message: requalified.message,
    };
  }

  return {
    ok: true,
    claimEvaluation: requalified.claimEvaluation,
    reviewBundle: requalified.reviewBundle,
    conformityEvidence,
    artifactEvidence,
    supersededClaimEvaluationId: requalified.supersededClaimEvaluationId,
    verifierMatchedHeadings: verification.matchedHeadings,
    oracleFingerprint: verification.oracleFingerprint,
    reusedFromIdempotencyKey: requalified.reusedFromIdempotencyKey,
  };
}
