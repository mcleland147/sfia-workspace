/**
 * PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01 — Shared Product Resolution (READ-ONLY).
 *
 * Composes existing OA Product Truth into a typed ProductExecutionContext.
 * NOT a store. NOT a parallel knowledge domain. Fail-closed on lineage mismatch.
 */
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";
import type { ClaimEvaluation, Evidence, ReviewBundle } from "@/lib/oa/evidence-review";
import {
  contractResultBindingsMatchCurrentFacts,
  projectContractResultVerdict,
  resolveCurrentContractResultClaimEvaluation,
} from "@/lib/oa/evidence-review";
import type { ContractResultVerdict } from "@/lib/oa/evidence-review/domain/contractResultTypes";
import {
  loadDocsWriteArtifactReviewMaterial,
  resolveProductEvidenceRefsRoot,
} from "@/features/project-assistant/f3/persistDocsWriteArtifactReviewMaterial";
import { loadGenericExecutionReviewMaterial } from "@/features/project-assistant/f3/persistGenericExecutionReviewMaterial";
import { isExecutionReviewVerificationEvidenceId } from "@/features/project-assistant/f3/ingestExecutionReviewVerificationEvidence";
import { isMissionResultEvidenceId } from "@/features/project-assistant/f3/ingestMissionResultEvidence";
import {
  findExistingW3cPostEvidence,
  projectW3cExecutionReportSurfaceFromDurable,
} from "./w3cPostEvidenceLoop";
import type { W3BProductTerminalProjection } from "./w3bProductTerminalProjection";

export type ProductExecutionContextQuery =
  | { readonly kind: "latest" }
  | { readonly kind: "byExecutionContractId"; readonly executionContractId: string }
  | { readonly kind: "byAttemptId"; readonly attemptId: string };

export type ProductExecutionContext = {
  readonly projectId: string;
  readonly activeCycleInstanceId: string | null;
  readonly executionContract: {
    readonly kind: "PRODUCT_CONTRACT";
    readonly executionContractId: string;
    readonly version: number;
    readonly status: string;
    readonly action: string;
    readonly objective: string | null;
    readonly decisionId: string | null;
    readonly cycleInstanceId: string | null;
  } | null;
  readonly attempt: {
    readonly kind: "PRODUCT_EXECUTION_FACT";
    readonly attemptId: string;
    readonly status: string;
    readonly selectedAgentRef: string | null;
    readonly executionContractId: string;
  } | null;
  readonly cursorReport: {
    readonly kind: "EXECUTOR_CLAIM";
    readonly present: boolean;
    readonly status: string | null;
    readonly summary: string | null;
    readonly disclosure: "CLAIM_NOT_EVIDENCE";
  };
  readonly artifact: {
    readonly kind: "ARTIFACT";
    readonly present: boolean;
    readonly completeness: "FULL" | "PARTIAL" | null;
    readonly preview: string | null;
  };
  /** Generic Execution Review Material — payload only; ≠ Product Truth / Evidence. */
  readonly executionReview: {
    readonly kind: "EXECUTION_REVIEW_MATERIAL";
    readonly present: boolean;
    readonly completeness: "FULL" | "PARTIAL" | null;
    readonly reviewMaterialId: string | null;
    readonly reviewItemCount: number;
    readonly claimFactMismatch: boolean;
    readonly verificationStatus:
      | "OBSERVED"
      | "UNAVAILABLE"
      | "NOT_PERFORMED"
      | "NOT_APPLICABLE"
      | null;
    readonly retentionState: string | null;
    readonly reviewEndOfPresent: boolean;
    readonly verifiedChangeSetPresent: boolean;
    readonly blockers: readonly string[];
    readonly reviewItemSummaries: readonly {
      readonly itemId: string;
      readonly kind: string;
      readonly label: string;
      readonly logicalPath?: string;
    }[];
  };
  readonly evidence: {
    readonly kind: "EVIDENCE";
    readonly evidenceId: string | null;
    readonly status: string | null;
    /** Canonical ordered Evidence refs when Contract Result lineage is present. */
    readonly evidenceIds: readonly string[];
  };
  readonly reviewBundle: {
    readonly kind: "REVIEW";
    readonly reviewBundleId: string | null;
    readonly status: string | null;
    readonly frozen: boolean;
  };
  readonly claimEvaluation: {
    readonly kind: "PRODUCT_QUALIFICATION";
    readonly claimEvaluationId: string | null;
    readonly status: string | null;
    /** Canonical ContractResultVerdict (PASS|FAIL|NOT_PROVEN) — never raw status. */
    readonly contractResultVerdict: ContractResultVerdict | null;
  };
  readonly postEvidence: {
    readonly kind: "RECOMMENDATION";
    readonly present: boolean;
    readonly recommendationKind: string | null;
    readonly headline: string | null;
    readonly requiresHumanDecision: boolean | null;
  };
  readonly provenance: {
    readonly bindingsOk: true;
    readonly readOnly: true;
    readonly query: ProductExecutionContextQuery;
  };
  readonly disclosures: readonly string[];
};

export type ResolveProductExecutionContextResult =
  | { readonly ok: true; readonly context: ProductExecutionContext }
  | { readonly ok: false; readonly code: string; readonly message: string };

async function listProjectContracts(
  oa: RuntimeOaStack,
  projectId: string,
): Promise<ExecutionContract[]> {
  const repo = oa.executionContractServices?.contracts;
  if (!repo?.listByProject) return [];
  return repo.listByProject(projectId);
}

async function listAttemptsForContract(
  oa: RuntimeOaStack,
  executionContractId: string,
): Promise<ExecutionAttempt[]> {
  if (!oa.executionAttemptServices) return [];
  const listed =
    await oa.executionAttemptServices.listExecutionAttempts.execute({
      executionContractId,
    });
  if (!listed.ok) return [];
  return listed.attempts;
}

function pickLatestAttempt(
  attempts: readonly ExecutionAttempt[],
): ExecutionAttempt | null {
  if (attempts.length === 0) return null;
  return [...attempts].sort((a, b) => {
    const at = a.updatedAt ?? a.createdAt ?? "";
    const bt = b.updatedAt ?? b.createdAt ?? "";
    return bt.localeCompare(at);
  })[0]!;
}

function contractSummary(
  c: ExecutionContract,
): NonNullable<ProductExecutionContext["executionContract"]> {
  const objective =
    typeof c.inputs?.objective === "string"
      ? (c.inputs.objective as string)
      : typeof c.inputs?.what === "string"
        ? (c.inputs.what as string)
        : null;
  const decisionId =
    Array.isArray(c.decisionRefs) && c.decisionRefs.length > 0
      ? String(c.decisionRefs[0])
      : null;
  return {
    kind: "PRODUCT_CONTRACT",
    executionContractId: c.executionContractId,
    version: c.version,
    status: c.status,
    action: c.action,
    objective,
    decisionId,
    cycleInstanceId: c.cycleInstanceId ?? null,
  };
}

async function resolveEvidenceLineage(input: {
  oa: RuntimeOaStack;
  projectId: string;
  attempt: ExecutionAttempt;
}): Promise<
  | {
      ok: true;
      evidence: Evidence | null;
      evidenceIds: readonly string[];
      reviewBundle: ReviewBundle | null;
      claimEvaluation: ClaimEvaluation | null;
    }
  | { ok: false; code: string; message: string }
> {
  const services = input.oa.evidenceReviewServices;
  const attemptId = input.attempt.attemptId;
  if (!services) {
    return {
      ok: true,
      evidence: null,
      evidenceIds: [],
      reviewBundle: null,
      claimEvaluation: null,
    };
  }

  // 1) Canonical current Contract Result CE for this Attempt (fail-closed).
  const resolvedCe = await resolveCurrentContractResultClaimEvaluation({
    repo: services.claimEvaluationRepository,
    projectId: input.projectId,
    executionAttemptId: attemptId,
  });
  if (resolvedCe.status === "ambiguous") {
    return {
      ok: false,
      code: "CLAIM_EVALUATION_AMBIGUOUS",
      message:
        "Plusieurs ClaimEvaluation Contract Result actives pour cet Attempt — fail-closed.",
    };
  }

  if (resolvedCe.status === "one") {
    const claimEvaluation = resolvedCe.claimEvaluation;
    const bindings = claimEvaluation.contractResultBindings;
    // Absent OR incomplete bindings → fail-closed (no partial local validation).
    if (
      !bindings ||
      typeof bindings.projectId !== "string" ||
      typeof bindings.executionContractId !== "string" ||
      typeof bindings.executionContractVersion !== "number" ||
      typeof bindings.executionContractSemanticFingerprint !== "string" ||
      typeof bindings.executionAttemptId !== "string" ||
      typeof bindings.reviewBundleId !== "string" ||
      typeof bindings.reviewBundleVersion !== "number" ||
      !Array.isArray(bindings.evidenceRefs)
    ) {
      return {
        ok: false,
        code: "CONTRACT_RESULT_BINDINGS_MISSING",
        message:
          "ClaimEvaluation Contract Result sans bindings canoniques complets — fail-closed.",
      };
    }

    // 2) ReviewBundle via claimEvaluation.reviewBundleId
    const rbId = claimEvaluation.reviewBundleId?.trim();
    if (!rbId) {
      return {
        ok: false,
        code: "REVIEW_BUNDLE_MISSING",
        message: "ClaimEvaluation sans reviewBundleId — fail-closed.",
      };
    }
    const reviewBundle = await services.reviewBundleReader.findById(rbId);
    if (!reviewBundle) {
      return {
        ok: false,
        code: "REVIEW_BUNDLE_NOT_FOUND",
        message: `ReviewBundle ${rbId} introuvable — fail-closed.`,
      };
    }
    if (reviewBundle.projectId !== input.projectId) {
      return {
        ok: false,
        code: "REVIEW_BUNDLE_PROJECT_MISMATCH",
        message: "ReviewBundle hors Project — fail-closed.",
      };
    }

    // 3) Evidence via contractResultBindings.evidenceRefs (canonical order)
    const evidenceRefs = [...bindings.evidenceRefs];
    if (evidenceRefs.length === 0) {
      return {
        ok: false,
        code: "CONTRACT_RESULT_EVIDENCE_REFS_EMPTY",
        message: "CE bindings.evidenceRefs vide — fail-closed.",
      };
    }
    const loaded: Evidence[] = [];
    for (const evidenceId of evidenceRefs) {
      const evidence = await services.evidenceReader.findById(evidenceId);
      if (!evidence) {
        return {
          ok: false,
          code: "EVIDENCE_NOT_FOUND",
          message: `Evidence ${evidenceId} référencée par CE introuvable — fail-closed.`,
        };
      }
      if (
        evidence.bindings?.projectId &&
        evidence.bindings.projectId !== input.projectId
      ) {
        return {
          ok: false,
          code: "EVIDENCE_PROJECT_MISMATCH",
          message: "Evidence hors Project — fail-closed.",
        };
      }
      if (
        evidence.bindings?.executionAttemptId &&
        evidence.bindings.executionAttemptId !== attemptId
      ) {
        return {
          ok: false,
          code: "ATTEMPT_CONTRACT_MISMATCH",
          message: "Evidence Attempt binding mismatch — fail-closed.",
        };
      }
      loaded.push(evidence);
    }

    // 4) Canonical domain validation — Project/Cycle/EC/version/fingerprint/
    // Attempt/bound snapshot/RB id+version/Evidence refs (ordered).
    // NEVER prefer latest EC over Attempt-bound snapshot.
    if (!input.attempt.boundExecutionContract) {
      return {
        ok: false,
        code: "CONTRACT_RESULT_BINDINGS_MISMATCH",
        message:
          "Attempt sans boundExecutionContract snapshot — Contract Result lineage fail-closed.",
      };
    }
    // facts: Project courant + Attempt-bound snapshot cycle (not bindings self-echo).
    const boundCycle =
      input.attempt.boundExecutionContract.semanticMaterial.cycleInstanceId ??
      null;
    const bindingsOk = contractResultBindingsMatchCurrentFacts({
      bindings,
      attempt: {
        attemptId: input.attempt.attemptId,
        executionContractId: input.attempt.executionContractId,
        executionContractVersion: input.attempt.executionContractVersion,
        executionContractSemanticFingerprint:
          input.attempt.executionContractSemanticFingerprint,
        boundExecutionContract: input.attempt.boundExecutionContract,
      },
      reviewBundle: {
        reviewBundleId: reviewBundle.reviewBundleId,
        frozenVersion: reviewBundle.frozenVersion,
      },
      // Loaded Evidence ids in binding order (canonical collection, not repo order).
      evidenceIds: loaded.map((e) => e.evidenceId),
      projectId: input.projectId,
      cycleInstanceId: boundCycle,
    });
    if (!bindingsOk) {
      return {
        ok: false,
        code: "CONTRACT_RESULT_BINDINGS_MISMATCH",
        message:
          "contractResultBindings ne matchent pas Attempt-bound snapshot / RB version / Evidence refs — fail-closed.",
      };
    }

    // Primary Evidence for compact projection = first canonical evidenceRef.
    // Full ordered set preserved in evidenceIds (never prefix-preferred).
    return {
      ok: true,
      evidence: loaded[0] ?? null,
      evidenceIds: evidenceRefs,
      reviewBundle,
      claimEvaluation,
    };
  }

  // No CE yet — pre-qualification window.
  const allEvidence = await services.repository.listByProject(input.projectId);
  const bound = allEvidence.filter(
    (e) => e.bindings?.executionAttemptId === attemptId,
  );
  for (const evidence of bound) {
    if (
      evidence.bindings?.projectId &&
      evidence.bindings.projectId !== input.projectId
    ) {
      return {
        ok: false,
        code: "EVIDENCE_PROJECT_MISMATCH",
        message: "Evidence hors Project — fail-closed.",
      };
    }
  }

  if (bound.length === 0) {
    return {
      ok: true,
      evidence: null,
      evidenceIds: [],
      reviewBundle: null,
      claimEvaluation: null,
    };
  }
  if (bound.length === 1) {
    return {
      ok: true,
      evidence: bound[0]!,
      evidenceIds: [bound[0]!.evidenceId],
      reviewBundle: null,
      claimEvaluation: null,
    };
  }

  // Canonical pre-CE pair for generic execution review (CP2-04):
  // exactly one Mission Evidence + one Studio Verification Evidence.
  // Not ambiguous — materializeW3b freezes both into the same ReviewBundle.
  // Any other multi-Evidence set without CE remains fail-closed.
  const missionBound = bound.filter((e) =>
    isMissionResultEvidenceId(e.evidenceId),
  );
  const verificationBound = bound.filter((e) =>
    isExecutionReviewVerificationEvidenceId(e.evidenceId),
  );
  if (
    bound.length === 2 &&
    missionBound.length === 1 &&
    verificationBound.length === 1
  ) {
    return {
      ok: true,
      evidence: missionBound[0]!,
      evidenceIds: [missionBound[0]!.evidenceId, verificationBound[0]!.evidenceId],
      reviewBundle: null,
      claimEvaluation: null,
    };
  }

  // Multiple Evidence linked to Attempt without CE lineage — NEVER prefix-prefer.
  return {
    ok: false,
    code: "EVIDENCE_LINEAGE_AMBIGUOUS",
    message:
      "Plusieurs Evidence liées à l'Attempt sans ClaimEvaluation/bindings canoniques — fail-closed (pas de préférence de préfixe).",
  };
}

/**
 * READ-ONLY Product Resolution — project-bound, fail-closed.
 */
export async function resolveProductExecutionContext(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly query?: ProductExecutionContextQuery;
}): Promise<ResolveProductExecutionContextResult> {
  const projectId = input.projectId.trim();
  if (!projectId) {
    return {
      ok: false,
      code: "PROJECT_ID_REQUIRED",
      message: "projectId requis pour Product Resolution.",
    };
  }
  const query: ProductExecutionContextQuery = input.query ?? { kind: "latest" };

  const project = await input.oa.projectServices.getProject.execute({ projectId });
  if (!project.ok) {
    return {
      ok: false,
      code: "PROJECT_NOT_FOUND",
      message: "Projet introuvable — Product Resolution refusée.",
    };
  }

  let contract: ExecutionContract | null = null;
  let attempt: ExecutionAttempt | null = null;

  if (query.kind === "byAttemptId") {
    if (!input.oa.executionAttemptServices) {
      return {
        ok: false,
        code: "ATTEMPT_STACK_UNAVAILABLE",
        message: "Services Attempt indisponibles.",
      };
    }
    const loaded =
      await input.oa.executionAttemptServices.getExecutionAttempt.execute({
        attemptId: query.attemptId,
      });
    if (!loaded.ok) {
      return {
        ok: false,
        code: "ATTEMPT_NOT_FOUND",
        message: "Attempt introuvable.",
      };
    }
    attempt = loaded.attempt;
    const ec =
      await input.oa.executionContractServices.getExecutionContract.execute({
        executionContractId: attempt.executionContractId,
      });
    if (!ec.ok) {
      return {
        ok: false,
        code: "EXECUTION_CONTRACT_NOT_FOUND",
        message: "ExecutionContract lié introuvable.",
      };
    }
    contract = ec.contract;
    if (contract.projectId !== projectId) {
      return {
        ok: false,
        code: "CROSS_PROJECT_REF_REJECTED",
        message: "Attempt / EC hors Project courant — fail-closed.",
      };
    }
  } else if (query.kind === "byExecutionContractId") {
    const ec =
      await input.oa.executionContractServices.getExecutionContract.execute({
        executionContractId: query.executionContractId,
      });
    if (!ec.ok) {
      return {
        ok: false,
        code: "EXECUTION_CONTRACT_NOT_FOUND",
        message: "ExecutionContract introuvable.",
      };
    }
    contract = ec.contract;
    if (contract.projectId !== projectId) {
      return {
        ok: false,
        code: "CROSS_PROJECT_REF_REJECTED",
        message: "ExecutionContract hors Project courant — fail-closed.",
      };
    }
    attempt = pickLatestAttempt(
      await listAttemptsForContract(input.oa, contract.executionContractId),
    );
  } else {
    const contracts = (await listProjectContracts(input.oa, projectId)).filter(
      (c) => c.projectId === projectId,
    );
    let best: {
      contract: ExecutionContract;
      attempt: ExecutionAttempt | null;
    } | null = null;
    for (const c of contracts) {
      const latestAttempt = pickLatestAttempt(
        await listAttemptsForContract(input.oa, c.executionContractId),
      );
      if (!best) {
        best = { contract: c, attempt: latestAttempt };
        continue;
      }
      const bestHas = Boolean(best.attempt);
      const curHas = Boolean(latestAttempt);
      if (curHas && !bestHas) {
        best = { contract: c, attempt: latestAttempt };
        continue;
      }
      if (curHas && bestHas) {
        const bt = best.attempt!.updatedAt ?? best.attempt!.createdAt ?? "";
        const ct = latestAttempt!.updatedAt ?? latestAttempt!.createdAt ?? "";
        if (ct.localeCompare(bt) > 0) {
          best = { contract: c, attempt: latestAttempt };
        }
      } else if (!curHas && !bestHas && c.version >= best.contract.version) {
        best = { contract: c, attempt: null };
      }
    }
    contract = best?.contract ?? null;
    attempt = best?.attempt ?? null;
  }

  if (
    attempt &&
    contract &&
    attempt.executionContractId !== contract.executionContractId
  ) {
    return {
      ok: false,
      code: "ATTEMPT_CONTRACT_MISMATCH",
      message: "Attempt non lié à l'ExecutionContract résolu.",
    };
  }

  let cursorReport: ProductExecutionContext["cursorReport"] = {
    kind: "EXECUTOR_CLAIM",
    present: false,
    status: null,
    summary: null,
    disclosure: "CLAIM_NOT_EVIDENCE",
  };
  let artifact: ProductExecutionContext["artifact"] = {
    kind: "ARTIFACT",
    present: false,
    completeness: null,
    preview: null,
  };
  let executionReview: ProductExecutionContext["executionReview"] = {
    kind: "EXECUTION_REVIEW_MATERIAL",
    present: false,
    completeness: null,
    reviewMaterialId: null,
    reviewItemCount: 0,
    claimFactMismatch: false,
    verificationStatus: null,
    retentionState: null,
    reviewEndOfPresent: false,
    verifiedChangeSetPresent: false,
    blockers: [],
    reviewItemSummaries: [],
  };
  let evidenceBlock: ProductExecutionContext["evidence"] = {
    kind: "EVIDENCE",
    evidenceId: null,
    status: null,
    evidenceIds: [],
  };
  let reviewBlock: ProductExecutionContext["reviewBundle"] = {
    kind: "REVIEW",
    reviewBundleId: null,
    status: null,
    frozen: false,
  };
  let claimBlock: ProductExecutionContext["claimEvaluation"] = {
    kind: "PRODUCT_QUALIFICATION",
    claimEvaluationId: null,
    status: null,
    contractResultVerdict: null,
  };
  let postEvidenceBlock: ProductExecutionContext["postEvidence"] = {
    kind: "RECOMMENDATION",
    present: false,
    recommendationKind: null,
    headline: null,
    requiresHumanDecision: null,
  };

  if (attempt) {
    const targetPath =
      typeof contract?.inputs?.targetPath === "string"
        ? (contract.inputs.targetPath as string)
        : undefined;
    const durableSurface = projectW3cExecutionReportSurfaceFromDurable({
      attemptId: attempt.attemptId,
      targetPath,
      refsRoot: resolveProductEvidenceRefsRoot(),
    });
    if (durableSurface.executionReport || durableSurface.cursorReportSummary) {
      cursorReport = {
        kind: "EXECUTOR_CLAIM",
        present: true,
        status: durableSurface.executionReport?.cursorStatus ?? null,
        summary: durableSurface.cursorReportSummary ?? null,
        disclosure: "CLAIM_NOT_EVIDENCE",
      };
    }
    if (durableSurface.artifactReviewMaterial) {
      artifact = {
        kind: "ARTIFACT",
        present: true,
        completeness: durableSurface.artifactReviewCompleteness ?? null,
        preview: durableSurface.artifactReviewMaterial.slice(0, 2000),
      };
    } else {
      const loaded = loadDocsWriteArtifactReviewMaterial({
        refsRoot: resolveProductEvidenceRefsRoot(),
        attemptId: attempt.attemptId,
        ...(targetPath ? { targetPath } : {}),
      });
      if (loaded.ok) {
        artifact = {
          kind: "ARTIFACT",
          present: true,
          completeness: loaded.completeness,
          preview: loaded.artifactText.slice(0, 2000),
        };
        if (loaded.cursorReport && !cursorReport.present) {
          cursorReport = {
            kind: "EXECUTOR_CLAIM",
            present: true,
            status: loaded.cursorReport.status,
            summary: `status=${loaded.cursorReport.status}`,
            disclosure: "CLAIM_NOT_EVIDENCE",
          };
        }
      }
    }

    const genericReview = loadGenericExecutionReviewMaterial({
      refsRoot: resolveProductEvidenceRefsRoot(),
      attemptId: attempt.attemptId,
    });
    if (genericReview.ok) {
      const mismatch =
        genericReview.manifest.verifiedEffects.claimFactMismatch === true ||
        genericReview.verifiedChangeSet?.claimFactMismatch === true ||
        genericReview.manifest.blockers.some((b) =>
          b.includes("CLAIM_FACT_MISMATCH"),
        );
      const verificationStatus =
        genericReview.manifest.verifiedEffects.verificationStatus ??
        (genericReview.verifiedChangeSet ? "OBSERVED" : "UNAVAILABLE");
      executionReview = {
        kind: "EXECUTION_REVIEW_MATERIAL",
        present: true,
        completeness: genericReview.manifest.completeness,
        reviewMaterialId: genericReview.manifest.reviewMaterialId,
        reviewItemCount: genericReview.manifest.reviewItems.length,
        claimFactMismatch: mismatch,
        verificationStatus,
        retentionState: genericReview.manifest.retentionState,
        reviewEndOfPresent: Boolean(genericReview.reviewEndOf),
        verifiedChangeSetPresent:
          verificationStatus === "OBSERVED" &&
          Boolean(genericReview.verifiedChangeSet),
        blockers: [...genericReview.manifest.blockers],
        reviewItemSummaries: genericReview.manifest.reviewItems.map((it) => ({
          itemId: it.itemId,
          kind: it.kind,
          label: it.label,
          ...(it.logicalPath ? { logicalPath: it.logicalPath } : {}),
        })),
      };
      if (genericReview.cursorReport && !cursorReport.present) {
        cursorReport = {
          kind: "EXECUTOR_CLAIM",
          present: true,
          status: genericReview.cursorReport.status,
          summary: `status=${genericReview.cursorReport.status}`,
          disclosure: "CLAIM_NOT_EVIDENCE",
        };
      }
    }

    const lineage = await resolveEvidenceLineage({
      oa: input.oa,
      projectId,
      attempt,
    });
    if (!lineage.ok) return lineage;

    if (lineage.evidence || lineage.evidenceIds.length > 0) {
      evidenceBlock = {
        kind: "EVIDENCE",
        evidenceId: lineage.evidence?.evidenceId ?? lineage.evidenceIds[0] ?? null,
        status: lineage.evidence?.status ?? null,
        evidenceIds: lineage.evidenceIds,
      };
    }
    if (lineage.reviewBundle) {
      if (lineage.reviewBundle.projectId !== projectId) {
        return {
          ok: false,
          code: "REVIEW_BUNDLE_PROJECT_MISMATCH",
          message: "ReviewBundle hors Project — fail-closed.",
        };
      }
      reviewBlock = {
        kind: "REVIEW",
        reviewBundleId: lineage.reviewBundle.reviewBundleId,
        status: lineage.reviewBundle.status,
        frozen:
          Boolean(lineage.reviewBundle.frozenAt) ||
          lineage.reviewBundle.status === "ready_for_review",
      };
    }
    if (lineage.claimEvaluation) {
      const status = lineage.claimEvaluation.status;
      claimBlock = {
        kind: "PRODUCT_QUALIFICATION",
        claimEvaluationId: lineage.claimEvaluation.claimEvaluationId,
        status,
        contractResultVerdict: projectContractResultVerdict(status),
      };
    }

    if (lineage.evidence) {
      const productStub = {
        evidenceId: lineage.evidence.evidenceId,
        reviewBundleId: lineage.reviewBundle?.reviewBundleId ?? null,
        claimEvaluationId: lineage.claimEvaluation?.claimEvaluationId ?? null,
        outcome: "UNCLAIMED",
        technicalDetail: { attemptId: attempt.attemptId },
      } as unknown as W3BProductTerminalProjection & {
        technicalDetail: { attemptId: string };
      };
      try {
        const existing = await findExistingW3cPostEvidence({
          oa: input.oa,
          projectId,
          evidenceId: lineage.evidence.evidenceId,
          attemptId: attempt.attemptId,
          product: productStub,
        });
        if (existing?.ok) {
          postEvidenceBlock = {
            kind: "RECOMMENDATION",
            present: true,
            recommendationKind: existing.recommendation?.kind ?? null,
            headline: existing.recommendation?.headline ?? null,
            requiresHumanDecision:
              existing.recommendation?.requiresHumanDecision ?? null,
          };
        }
      } catch {
        // honest absence
      }
    }
  }

  let activeCycleInstanceId: string | null = contract?.cycleInstanceId ?? null;
  try {
    const cycles = await input.oa.cycleServices.cycles.listByProject(projectId);
    const active = cycles.find((c) => {
      const s = String(c.status);
      return (
        s === "active" ||
        s === "in_progress" ||
        s === "open" ||
        s === "running"
      );
    });
    if (active) activeCycleInstanceId = active.cycleInstanceId;
  } catch {
    // optional
  }

  return {
    ok: true,
    context: {
      projectId,
      activeCycleInstanceId,
      executionContract: contract ? contractSummary(contract) : null,
      attempt: attempt
        ? {
            kind: "PRODUCT_EXECUTION_FACT",
            attemptId: attempt.attemptId,
            status: attempt.status,
            selectedAgentRef: attempt.selectedAgentRef ?? null,
            executionContractId: attempt.executionContractId,
          }
        : null,
      cursorReport,
      artifact,
      executionReview,
      evidence: evidenceBlock,
      reviewBundle: reviewBlock,
      claimEvaluation: claimBlock,
      postEvidence: postEvidenceBlock,
      provenance: {
        bindingsOk: true,
        readOnly: true,
        query,
      },
      disclosures: [
        "Product Resolution is READ-ONLY — not Truth C / HumanDecision / Evidence authority.",
        "CursorExecutionReport is an EXECUTOR CLAIM, never Evidence by itself.",
        "Cursor Review End Of is an EXECUTOR CLAIM when present — never Fact/Evidence.",
        "Execution Review Material is a review payload — not Product Truth.",
        "Artifact preview may be PARTIAL — never invent FULL.",
        "Attempt technical succeeded ≠ Product Result PROVEN.",
      ],
    },
  };
}
