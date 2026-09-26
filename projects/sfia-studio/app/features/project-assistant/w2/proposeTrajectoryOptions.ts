/**
 * W2 Track A + Track D Phase B — product application path: publish trajectory
 * Options and the accompanying Recommendation, and materialise the PROPOSED
 * trajectory.
 *
 * Phase B order (binding):
 *   resolve inputs → load product CKC → derive Options + base Recommendation →
 *   integrity assert (recommendedOptionRef ∈ OptionSet) → constrained provider
 *   cognition (explain WHY only) → enrich Recommendation → digests → ONLY THEN
 *   durable trajectory/epistemic writes.
 *
 * Durability follows D-W2-01. D-W2-A3-01 idempotence uses stable CKC semantic
 * fingerprint (not raw provider prose). STOP BEFORE EXECUTE.
 *
 * CORR-PROOF-10 — when an opaque proposalId is supplied (or an active
 * DECISION_REQUIRED Proposal exists), Options/Recommendation are scoped to
 * that Proposal subject. Silent fallback to the generic trajectory trio is
 * forbidden. Reuses ProposalStore + PresentedOptionSet — no parallel engine.
 * Proposal subject path: ZERO ProjectTrajectory mutation.
 */

import { randomBytes } from "node:crypto";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import {
  readLiveProjectContext,
  resolveProductDoctrineRegistryRoot,
} from "@/lib/vertical-slice-runtime";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
import type { ProjectTrajectory, TrajectoryStep } from "@/lib/oa/cycle";
import type { DoctrinePackagePin } from "@/lib/oa/doctrine";
import {
  buildCkcCognitivePromptSection,
  computeCkcSemanticFingerprint,
  projectCkcAttributedRecommendation,
  loadProductCkcCognitiveContent,
  reasonWithResolvedCkcContext,
  type CkcCognitiveProvenance,
  type ProductCkcCognitiveContent,
} from "@/features/project-assistant/f2/ckcCognitiveContext";
import {
  computeOptionSetDigest,
  computeQualificationDigest,
  findLatestOptionSetBindingForTrajectory,
  optionSetObservationId,
  optionSetOptionId,
  optionSetRecommendationId,
  serializePresentedOptionSet,
  type PresentedOptionSetBinding,
} from "./presentedOptionSet";
import {
  deriveProposalSubjectOptions,
  deriveProposalSubjectRecommendation,
} from "./proposalSubjectOptions";
import { resolvePendingDecisionSubjectMarker } from "./pendingDecisionSubjectMarker";
import { readActiveProposalDecisionSubject } from "./activeProposalDecisionSubject";
import {
  assertProposalSubjectGateOrFail,
  resolveProposalDecisionSubject,
  type ResolvedProposalDecisionSubject,
} from "./resolveProposalDecisionSubject";
import {
  deriveTrajectoryOptions,
  type TrajectoryOptionInputs,
} from "./trajectoryOptions";
import { resolveCurrentNoraTrajectoryRecommendation } from "./resolveCurrentNoraTrajectoryRecommendation";
import {
  assertRecommendedOptionInPresentedSet,
  buildConstrainedRecommendationCognitionAsk,
} from "./recommendationDecisionIntegrity";
import {
  buildRecoveryCognitionSection,
  resolvePostEvidenceRecoveryContext,
  type PostEvidenceRecoveryContext,
} from "./resolvePostEvidenceRecoveryContext";
import type {
  CkcRecommendationProvenanceDto,
  ProposeTrajectoryOptionsResult,
  TrajectoryOptionDto,
  TrajectoryRecommendationDto,
} from "./types";

/**
 * Phase B cognition AFTER deterministic Options/Recommendation identity.
 * Provider may explain WHY the canonical recommended option fits — never WHAT
 * the OptionSet is.
 */
async function reasonCanonicalRecommendationCognition(input: {
  readonly ckcPromptSection: string;
  readonly recoveryCognitionSection: string | null;
  readonly recommendedOptionLabel: string;
  readonly recommendedOptionRef: string;
  readonly subjectLine: string;
  readonly projectSummary: string;
  readonly intentSummary: string;
}): Promise<{ ok: true; recommendation: string } | { ok: false; detail: string }> {
  try {
    const reasoning = await reasonWithResolvedCkcContext({
      userContent: buildConstrainedRecommendationCognitionAsk({
        recommendedOptionLabel: input.recommendedOptionLabel,
        recommendedOptionRef: input.recommendedOptionRef,
        subjectLine: input.subjectLine,
      }),
      projectSummary: input.projectSummary,
      intentSummary: input.intentSummary,
      ckcPromptSection: input.recoveryCognitionSection
        ? `${input.ckcPromptSection}\n\n${input.recoveryCognitionSection}`
        : input.ckcPromptSection,
    });
    return { ok: true, recommendation: reasoning.recommendation };
  } catch (error) {
    const detail = error instanceof Error ? error.message : "provider_error";
    return { ok: false, detail };
  }
}

/** Nora proposes; it never decides. Kept N1 so it can never satisfy a gate. */
const NORA_OPTION_AUTHOR = Object.freeze({
  actorId: "actor:nora-w2",
  role: "agent" as const,
  displayName: "Nora W2",
  authorityLevel: "N1" as const,
});

function shortId(): string {
  return randomBytes(6).toString("hex");
}

/**
 * Server-side lineage head for the project: current if any, then probe forward
 * so an undecided candidate ahead of current is preferred (D-W2-A3-01 CAS B).
 */
async function resolveLatestTrajectory(
  oa: RuntimeOaStack,
  projectId: string,
): Promise<ProjectTrajectory | null> {
  const current = await oa.cycleServices.getCurrentTrajectory.execute({
    projectId,
  });
  let latest: ProjectTrajectory | null = current.ok ? current.trajectory : null;
  let probe = latest ? latest.version + 1 : 1;
  while (probe <= (latest?.version ?? 0) + 64) {
    const next = await oa.cycleServices.getTrajectoryVersion.execute({
      projectId,
      version: probe,
    });
    if (!next.ok) break;
    latest = next.trajectory;
    probe += 1;
  }
  return latest;
}

function optionStatement(option: TrajectoryOptionDto): string {
  const steps = option.steps.map((s) => `${s.order}. ${s.label}`).join(" | ");
  return `OPTION ${option.label} — ${option.intent} Étapes: ${steps}`;
}

function recommendationStatement(
  recommendation: TrajectoryRecommendationDto,
  options: readonly TrajectoryOptionDto[],
): string {
  const target = options.find(
    (o) => o.optionRef === recommendation.recommendedOptionRef,
  );
  return `${recommendation.label} — option recommandée: ${target?.label ?? recommendation.recommendedOptionRef}. ${recommendation.rationale}`;
}

function withPriorSetSupersedes<T extends object>(
  item: T,
  priorEpistemicItemId: string | undefined,
): T & { supersedes?: string } {
  if (!priorEpistemicItemId) return item;
  return { ...item, supersedes: priorEpistemicItemId };
}

function toProvenanceDto(
  provenance: CkcCognitiveProvenance,
  fingerprint: string,
): CkcRecommendationProvenanceDto {
  return Object.freeze({
    ckcId: provenance.ckcId,
    cycleTypeId: provenance.cycleTypeId,
    doctrinePackageId: provenance.doctrinePackageId,
    packageVersion: provenance.packageVersion,
    contentDigest: provenance.contentDigest,
    semanticFingerprint: fingerprint,
    doctrineStatus: "product-studio-native",
  });
}

function enrichRecommendationWithCognition(input: {
  base: TrajectoryRecommendationDto;
  content: ProductCkcCognitiveContent;
  cognitiveRecommendation: string;
  fingerprint: string;
}): TrajectoryRecommendationDto {
  const projected = projectCkcAttributedRecommendation({
    baseRationale: input.base.rationale,
    content: input.content,
    cognitiveRecommendation: input.cognitiveRecommendation,
  });
  return {
    ...input.base,
    rationale: projected.rationale,
    cognitiveAnalysis: projected.cognitiveAnalysis,
    ckcProvenance: toProvenanceDto(input.content.provenance, input.fingerprint),
  };
}

export type ProposeTrajectoryOptionsInput = {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  /** Durable qualification truth already produced by W1. */
  readonly cycleTypeId: string;
  readonly recommendedProfile: string;
  readonly criticalSignalsPresent: boolean;
  readonly irreversible: boolean;
  readonly reservations: readonly string[];
  /** Opaque LPS CKC resolution ref (secondary pointer). */
  readonly ckcAttribution: string | null;
  readonly packagePin: DoctrinePackagePin;
  readonly objective: string;
  readonly projectTitle: string;
  readonly correlationId?: string;
  /**
   * CORR-PROOF-10 — opaque Proposal subject ref. Server-resolved only.
   * Hostile objective/path/operation fields are never accepted here.
   */
  readonly proposalId?: string | null;
};

export async function proposeTrajectoryOptions(
  input: ProposeTrajectoryOptionsInput,
): Promise<ProposeTrajectoryOptionsResult> {
  const { oa } = input;
  const live = await readLiveProjectContext(oa, input.projectId);
  if (!live.ok) {
    return { ok: false, code: live.code, message: live.message };
  }

  const opaqueProposalIdEarly =
    typeof input.proposalId === "string" ? input.proposalId.trim() : "";

  // Post-binding continuity: durable PresentedOptionSet is SoT — rehydrate,
  // never invent a second OptionSet or fall back to generic trajectory.
  const activeSubject = await readActiveProposalDecisionSubject(
    oa,
    input.projectId,
  );
  if (!activeSubject.ok) {
    return {
      ok: false,
      code: activeSubject.code,
      message: activeSubject.message,
    };
  }
  if (activeSubject.kind === "bound_awaiting_decision") {
    if (
      opaqueProposalIdEarly &&
      opaqueProposalIdEarly !== activeSubject.presented.proposalId
    ) {
      return {
        ok: false,
        code: "BOUND_PROPOSAL_SUBJECT_MISMATCH",
        message:
          "Un PresentedOptionSet Proposal distinct est déjà en attente de HumanDecision — aucune nouvelle instruction.",
      };
    }
    return { ok: true, ...activeSubject.optionSet };
  }

  // RC-04 — after terminal Attempt + structural post-Evidence recovery,
  // RecoveryContext owns the next instruct. Pre-terminal Proposal subjects
  // (bound / pending / pursue_prepare_ready) still win above/below.
  const recoveredEarly = await resolvePostEvidenceRecoveryContext({
    oa,
    projectId: input.projectId,
  });
  if (!recoveredEarly.ok) {
    return {
      ok: false,
      code: recoveredEarly.code,
      message: recoveredEarly.message,
    };
  }
  const structuralRecoveryOwnsNext =
    recoveredEarly.context != null &&
    (recoveredEarly.context.recommendationKind === "replan" ||
      recoveredEarly.context.requiresHumanDecision === true);

  if (activeSubject.kind === "pursue_prepare_ready") {
    // Same-scope Relancer / PREPARE continuation owns next UNLESS a structural
    // post-Evidence recovery already exists for a terminal chain (RC-04).
    if (!structuralRecoveryOwnsNext) {
      return {
        ok: false,
        code: "PREPARE_CONTINUATION_OWNS_NEXT_ACTION",
        message:
          "Une décision pursue durable attend la préparation du contrat d'exécution — aucune nouvelle instruction d'options.",
      };
    }
  }
  if (
    activeSubject.kind === "pending_reinstruction_required" &&
    !opaqueProposalIdEarly
  ) {
    return {
      ok: false,
      code: "PENDING_DECISION_SUBJECT_REINSTRUCTION_REQUIRED",
      message: activeSubject.message,
    };
  }

  // When structural recovery owns next, ignore opaque/stale Proposal ids so
  // PROPOSAL_STALE cannot hijack post-terminal replan options.
  const effectiveOpaqueProposalId = structuralRecoveryOwnsNext
    ? ""
    : opaqueProposalIdEarly;

  const activeGate = await assertProposalSubjectGateOrFail({
    oa,
    projectId: input.projectId,
    proposalId: effectiveOpaqueProposalId || null,
  });
  if (!activeGate.ok) {
    // Structural recovery still proceeds even if a closed Proposal residual
    // would otherwise gate generic trajectory — but only when recovery owns.
    if (!structuralRecoveryOwnsNext) {
      return {
        ok: false,
        code: activeGate.code,
        message: activeGate.message,
      };
    }
  }

  let proposalSubject: ResolvedProposalDecisionSubject | null = null;
  const opaqueProposalId = effectiveOpaqueProposalId;
  if (opaqueProposalId) {
    // Pre-binding only: process-local Proposal required to create OptionSet.
    // After binding, we already returned via rehydration above.
    const resolved = resolveProposalDecisionSubject({
      proposalId: opaqueProposalId,
      projectId: input.projectId,
      currentContext: {
        projectId: input.projectId,
        lpsId: live.context.lpsId,
        lpsVersion: live.context.lpsVersion,
        doctrineDigest: live.context.doctrineDigest,
        activeCycleInstanceId: live.context.activeCycleInstanceId,
        ckcResolutionRef: live.context.ckcResolutionRef,
      },
    });
    if (!resolved.ok) {
      // pending marker + lost store → reinstruction (assert may also catch)
      if (activeSubject.kind === "pending_reinstruction_required") {
        return {
          ok: false,
          code: "PENDING_DECISION_SUBJECT_REINSTRUCTION_REQUIRED",
          message: activeSubject.message,
        };
      }
      return {
        ok: false,
        code: resolved.code,
        message: resolved.message,
      };
    }
    proposalSubject = resolved.subject;
  }

  // ── Phase B: product-native CKC cognition BEFORE any durable mutation ──
  const registryRoot = resolveProductDoctrineRegistryRoot();
  const ckcContent = loadProductCkcCognitiveContent({
    registryRoot,
    cycleTypeId: input.cycleTypeId,
    packagePin: input.packagePin,
  });
  if (!ckcContent) {
    return {
      ok: false,
      code: "CKC_UNAVAILABLE",
      message:
        "CKC product-native introuvable ou incohérent pour le cycle actif — aucune mutation de trajectoire/OptionSet.",
    };
  }

  // R7 — durable RecoveryContext for ProjectTrajectory / post-terminal structural.
  // Proposal subject path keeps sealed Proposal as subject (no recovery inject)
  // EXCEPT RC-04 structural terminal recovery ownership above.
  let recoveryContext: PostEvidenceRecoveryContext | null = null;
  if (!proposalSubject) {
    recoveryContext = recoveredEarly.context;
  }

  const ckcPromptSection = buildCkcCognitivePromptSection(ckcContent);
  const recoveryCognitionSection = recoveryContext
    ? buildRecoveryCognitionSection(recoveryContext)
    : null;

  const semanticFingerprint = computeCkcSemanticFingerprint(
    ckcContent.provenance,
  );

  const qualificationDigest = computeQualificationDigest({
    cycleTypeId: input.cycleTypeId,
    recommendedProfile: input.recommendedProfile,
    criticalSignalsPresent: input.criticalSignalsPresent,
    irreversible: input.irreversible,
    reservations: input.reservations,
    ckcAttribution: input.ckcAttribution,
    ckcSemanticFingerprint: semanticFingerprint,
  });

  const optionSetRef = `optset:w2-${shortId()}`;
  const correlationId = input.correlationId ?? `cor:w2-opt-${shortId()}`;

  const projectSummary = [
    `name=${input.projectTitle}`,
    `objective=${input.objective}`,
    `projectId=${input.projectId}`,
    ...(proposalSubject
      ? [
          `proposalId=${proposalSubject.proposalId}`,
          `subjectObjective=${proposalSubject.sealedExecutionBasis.objective}`,
          `targetPath=${proposalSubject.sealedExecutionBasis.targetPath ?? ""}`,
          `requestedOperation=${proposalSubject.sealedExecutionBasis.requestedOperation}`,
        ]
      : recoveryContext
        ? [
            `recoverySubject=post_evidence`,
            `attemptId=${recoveryContext.attemptId}`,
            `evidenceId=${recoveryContext.evidenceId}`,
            `recommendationKind=${recoveryContext.recommendationKind}`,
            `realProcessInvoked=${recoveryContext.realProcessInvoked}`,
          ]
        : []),
  ].join(" | ");
  const intentSummary = proposalSubject
    ? `Proposal subject ${proposalSubject.proposalId} · profil ${input.recommendedProfile}`
    : recoveryContext
      ? `Recovery/replan post-preuve · cycle ${input.cycleTypeId} · profil ${input.recommendedProfile} · recommandation ≠ décision Pilote`
      : `Cycle ${input.cycleTypeId} · profil ${input.recommendedProfile}`;

  // ── CORR-PROOF-10 proposal subject — ZERO ProjectTrajectory ───────────
  if (proposalSubject) {
    const options = deriveProposalSubjectOptions({
      sealed: proposalSubject.sealedExecutionBasis,
      proposalId: proposalSubject.proposalId,
    });
    const baseRecommendation = deriveProposalSubjectRecommendation({
      sealed: proposalSubject.sealedExecutionBasis,
      proposalId: proposalSubject.proposalId,
    });
    const integrity = assertRecommendedOptionInPresentedSet({
      options,
      recommendedOptionRef: baseRecommendation.recommendedOptionRef,
    });
    if (!integrity.ok) {
      return {
        ok: false,
        code: integrity.code,
        message: integrity.message,
      };
    }
    const cognition = await reasonCanonicalRecommendationCognition({
      ckcPromptSection,
      recoveryCognitionSection,
      recommendedOptionLabel: integrity.option.label,
      recommendedOptionRef: baseRecommendation.recommendedOptionRef,
      subjectLine: `Expliquer la recommandation canonique pour la Proposal ${proposalSubject.proposalId} (sujet: ${proposalSubject.sealedExecutionBasis.objective}).`,
      projectSummary,
      intentSummary,
    });
    if (!cognition.ok) {
      return {
        ok: false,
        code: "PROVIDER_COGNITION_FAILED",
        message: `Cognition Nora/provider échouée (${cognition.detail}) — aucune mutation de trajectoire/OptionSet.`,
      };
    }
    const recommendation = enrichRecommendationWithCognition({
      base: baseRecommendation,
      content: ckcContent,
      cognitiveRecommendation: cognition.recommendation,
      fingerprint: semanticFingerprint,
    });
    const postEnrichIntegrity = assertRecommendedOptionInPresentedSet({
      options,
      recommendedOptionRef: recommendation.recommendedOptionRef,
    });
    if (!postEnrichIntegrity.ok) {
      return {
        ok: false,
        code: postEnrichIntegrity.code,
        message: postEnrichIntegrity.message,
      };
    }
    const optionSetDigest = computeOptionSetDigest({
      cycleTypeId: input.cycleTypeId,
      recommendedProfile: input.recommendedProfile,
      criticalSignalsPresent: input.criticalSignalsPresent,
      irreversible: input.irreversible,
      reservations: input.reservations,
      options,
      recommendedOptionRef: recommendation.recommendedOptionRef,
      proposalId: proposalSubject.proposalId,
      proposalSubjectDigest: proposalSubject.subjectDigest,
      decisionSubjectMode: "proposal",
    });

    const optionEpistemicItems = options.map((option) => ({
      epistemicItemId: optionSetOptionId(optionSetRef, option.optionRef),
      type: "Option" as const,
      statement: optionStatement(option),
      status: "active" as const,
      source: optionSetRef,
      relatedObjects: [
        input.projectId,
        option.optionRef,
        optionSetRef,
        proposalSubject.proposalId,
      ],
    }));

    const recommendationItem = {
      epistemicItemId: optionSetRecommendationId(optionSetRef),
      type: "Recommendation" as const,
      statement: recommendationStatement(recommendation, options),
      status: "active" as const,
      source: optionSetRef,
      relatedObjects: [
        input.projectId,
        recommendation.recommendedOptionRef,
        optionSetRef,
        recommendation.ckcProvenance?.ckcId ?? "ckc:none",
        ...(input.ckcAttribution ? [input.ckcAttribution] : []),
        proposalSubject.proposalId,
      ],
    };

    const epistemicRefs = [
      ...optionEpistemicItems.map((i) => i.epistemicItemId),
      recommendationItem.epistemicItemId,
      optionSetObservationId(optionSetRef),
    ];

    const presentedBinding: PresentedOptionSetBinding = {
      kind: "w2_presented_option_set",
      optionSetRef,
      optionSetDigest,
      qualificationDigest,
      trajectoryId: null,
      candidateVersion: null,
      optionRefs: options.map((o) => o.optionRef),
      recommendedOptionRef: recommendation.recommendedOptionRef,
      options,
      recommendation,
      epistemicRefs,
      cycleTypeId: input.cycleTypeId,
      recommendedProfile: input.recommendedProfile,
      criticalSignalsPresent: input.criticalSignalsPresent,
      irreversible: input.irreversible,
      reservations: [...input.reservations],
      ckcAttribution: input.ckcAttribution,
      ckcSemanticFingerprint: semanticFingerprint,
      decisionSubjectMode: "proposal",
      proposalId: proposalSubject.proposalId,
      proposalSubjectDigest: proposalSubject.subjectDigest,
      promotesProjectTrajectory: false,
      sealedExecutionBasis: proposalSubject.sealedExecutionBasis,
    };

    const observationItem = {
      epistemicItemId: optionSetObservationId(optionSetRef),
      type: "Observation" as const,
      statement: serializePresentedOptionSet(presentedBinding),
      status: "active" as const,
      source: optionSetRef,
      relatedObjects: [
        input.projectId,
        optionSetRef,
        proposalSubject.proposalId,
      ],
    };

    const materialized = await oa.cycleServices.updateEpistemicState.execute({
      projectId: input.projectId,
      items: [...optionEpistemicItems, recommendationItem, observationItem],
      createdBy: NORA_OPTION_AUTHOR,
      correlationId,
    });
    if (!materialized.ok) {
      return {
        ok: false,
        code: materialized.error.detailCode,
        message: `Matérialisation des options échouée (${materialized.error.detailCode}).`,
      };
    }

    // Marker resolve is best-effort after durable OptionSet write.
    // If it fails, OptionSet remains the post-binding SoT (conservative).
    await resolvePendingDecisionSubjectMarker({
      oa,
      projectId: input.projectId,
      proposalId: proposalSubject.proposalId,
      reason: "option_set_bound",
      correlationId: `cor:pending-bound:${proposalSubject.proposalId}`,
    });

    return {
      ok: true,
      optionSetRef,
      cycleTypeId: input.cycleTypeId,
      recommendedProfile: input.recommendedProfile,
      options,
      recommendation,
      epistemicRefs,
      proposedTrajectory: null,
      phase: "OPTIONS_PROPOSED",
      autoDecisionPerformed: false,
      executionPerformed: false,
      ckcCognitionCompletedBeforeMutation: true,
      decisionSubjectMode: "proposal",
      proposalId: proposalSubject.proposalId,
      promotesProjectTrajectory: false,
    };
  }

  // ── ProjectTrajectory path (no active Proposal subject) ───────────────
  const inputs: TrajectoryOptionInputs = {
    cycleTypeId: input.cycleTypeId,
    recommendedProfile: input.recommendedProfile,
    criticalSignalsPresent: input.criticalSignalsPresent,
    irreversible: input.irreversible,
    reservations: input.reservations,
    ckcAttribution: input.ckcAttribution,
    recoveryContext,
  };

  const options = deriveTrajectoryOptions(inputs);
  const noraResolution = await resolveCurrentNoraTrajectoryRecommendation({
    oa,
    projectId: input.projectId,
    cycleInstanceId: live.context.activeCycleInstanceId ?? null,
    optionRefs: options.map((o) => o.optionRef),
    optionInputs: inputs,
  });
  if (!noraResolution.ok) {
    return {
      ok: false,
      code: noraResolution.code,
      message: noraResolution.message,
    };
  }
  const baseRecommendation = noraResolution.resolved.recommendation;
  const recommendationBasisDigest =
    noraResolution.resolved.recommendationBasisDigest;
  const recommendationSource = noraResolution.resolved.recommendationSource;
  const noraRecommendationEpistemicItemId =
    noraResolution.resolved.noraRecommendationEpistemicItemId;
  const integrity = assertRecommendedOptionInPresentedSet({
    options,
    recommendedOptionRef: baseRecommendation.recommendedOptionRef,
  });
  if (!integrity.ok) {
    return {
      ok: false,
      code: integrity.code,
      message: integrity.message,
    };
  }
  const cognitionSubjectLine = recoveryContext
    ? `Expliquer la recommandation canonique de recovery/replan après ${
        recoveryContext.productOutcome === "UNCLAIMED" &&
        recoveryContext.attemptStatus === "succeeded"
          ? "succès technique / résultat produit non prouvé"
          : `${recoveryContext.productOutcome} durable`
      } (${recoveryContext.attemptId}, attempt=${recoveryContext.attemptStatus}) — sujet courant = recovery du même cycle, PAS un nouveau cadrage fonctionnel. Source Recommendation: ${recommendationSource}.`
    : `Expliquer la recommandation canonique pour le cycle ${input.cycleTypeId}. Source Recommendation: ${recommendationSource}.`;
  const cognition = await reasonCanonicalRecommendationCognition({
    ckcPromptSection,
    recoveryCognitionSection,
    recommendedOptionLabel: integrity.option.label,
    recommendedOptionRef: baseRecommendation.recommendedOptionRef,
    subjectLine: cognitionSubjectLine,
    projectSummary,
    intentSummary,
  });
  if (!cognition.ok) {
    return {
      ok: false,
      code: "PROVIDER_COGNITION_FAILED",
      message: `Cognition Nora/provider échouée (${cognition.detail}) — aucune mutation de trajectoire/OptionSet.`,
    };
  }
  const recommendation = enrichRecommendationWithCognition({
    base: baseRecommendation,
    content: ckcContent,
    cognitiveRecommendation: cognition.recommendation,
    fingerprint: semanticFingerprint,
  });
  const postEnrichIntegrity = assertRecommendedOptionInPresentedSet({
    options,
    recommendedOptionRef: recommendation.recommendedOptionRef,
  });
  if (!postEnrichIntegrity.ok) {
    return {
      ok: false,
      code: postEnrichIntegrity.code,
      message: postEnrichIntegrity.message,
    };
  }

  const optionSetDigest = computeOptionSetDigest({
    cycleTypeId: input.cycleTypeId,
    recommendedProfile: input.recommendedProfile,
    criticalSignalsPresent: input.criticalSignalsPresent,
    irreversible: input.irreversible,
    reservations: input.reservations,
    options,
    recommendedOptionRef: recommendation.recommendedOptionRef,
    proposalId: null,
    proposalSubjectDigest: null,
    decisionSubjectMode: "project_trajectory",
  });

  const recommendedOption = postEnrichIntegrity.option;
  const proposedSteps: TrajectoryStep[] = structuredClone(
    recommendedOption.steps,
  ) as TrajectoryStep[];

  const latest = await resolveLatestTrajectory(oa, input.projectId);

  let proposedTrajectoryId: string;
  let proposedVersion: number;
  let observationSupersedeVersion: number | null = null;

  const existingCandidate =
    latest !== null && latest.status === "candidate" ? latest : null;

  let reuseExistingCandidate = false;
  if (existingCandidate) {
    const prior = await findLatestOptionSetBindingForTrajectory(
      oa,
      input.projectId,
      existingCandidate.trajectoryId,
      existingCandidate.version,
    );
    reuseExistingCandidate =
      prior !== null &&
      prior.optionSetDigest === optionSetDigest &&
      prior.qualificationDigest === qualificationDigest;
  }

  if (reuseExistingCandidate && existingCandidate) {
    proposedTrajectoryId = existingCandidate.trajectoryId;
    proposedVersion = existingCandidate.version;
    observationSupersedeVersion = existingCandidate.version;
  } else if (latest) {
    const liveAfterHead = await readLiveProjectContext(oa, input.projectId);
    if (!liveAfterHead.ok) {
      return {
        ok: false,
        code: liveAfterHead.code,
        message: liveAfterHead.message,
      };
    }
    const proposed = await oa.cycleServices.proposeTrajectoryVersion.execute({
      trajectoryId: latest.trajectoryId,
      projectId: input.projectId,
      expectedVersion: latest.version,
      steps: proposedSteps,
      status: "candidate",
      createdBy: NORA_OPTION_AUTHOR,
      correlationId,
      expectedLpsVersion: liveAfterHead.context.lpsVersion,
    });
    if (!proposed.ok) {
      return {
        ok: false,
        code: proposed.error.detailCode,
        message: `Proposition d'une nouvelle version de trajectoire échouée (${proposed.error.detailCode}).`,
      };
    }
    proposedTrajectoryId = proposed.trajectory.trajectoryId;
    proposedVersion = proposed.trajectory.version;
    observationSupersedeVersion =
      existingCandidate !== null ? existingCandidate.version : null;
  } else {
    const trajectoryId = `trj:w2-${shortId()}`;
    const created = await oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId,
      projectId: input.projectId,
      steps: proposedSteps,
      status: "candidate",
      createdBy: NORA_OPTION_AUTHOR,
      correlationId,
      expectedLpsVersion: live.context.lpsVersion,
    });
    if (!created.ok) {
      return {
        ok: false,
        code: created.error.detailCode,
        message: `Création de la trajectoire proposée échouée (${created.error.detailCode}).`,
      };
    }
    proposedTrajectoryId = created.trajectory.trajectoryId;
    proposedVersion = created.trajectory.version;
  }

  const priorBinding =
    observationSupersedeVersion !== null
      ? await findLatestOptionSetBindingForTrajectory(
          oa,
          input.projectId,
          proposedTrajectoryId,
          observationSupersedeVersion,
        )
      : null;

  const priorOptionRefs = new Set(
    priorBinding?.options.map((o) => o.optionRef) ?? [],
  );
  if (priorBinding) {
    for (const priorOption of priorBinding.options) {
      if (!options.some((o) => o.optionRef === priorOption.optionRef)) {
        return {
          ok: false,
          code: "EPISTEMIC_OPTION_RETIREMENT_UNSUPPORTED",
          message:
            "Une Option antérieure n'a pas d'équivalent optionRef dans le nouvel OptionSet — retraite épistémique non supportée sans décision Morris.",
        };
      }
    }
  }

  const optionEpistemicItems = options.map((option) => {
    const priorOptionId =
      priorBinding && priorOptionRefs.has(option.optionRef)
        ? optionSetOptionId(priorBinding.optionSetRef, option.optionRef)
        : undefined;
    return withPriorSetSupersedes(
      {
        epistemicItemId: optionSetOptionId(optionSetRef, option.optionRef),
        type: "Option" as const,
        statement: optionStatement(option),
        status: "active" as const,
        source: optionSetRef,
        relatedObjects: [input.projectId, option.optionRef, optionSetRef],
      },
      priorOptionId,
    );
  });

  const recommendationItem = withPriorSetSupersedes(
    {
      epistemicItemId: optionSetRecommendationId(optionSetRef),
      type: "Recommendation" as const,
      statement: recommendationStatement(recommendation, options),
      status: "active" as const,
      source: optionSetRef,
      relatedObjects: [
        input.projectId,
        recommendation.recommendedOptionRef,
        optionSetRef,
        recommendation.ckcProvenance?.ckcId ?? "ckc:none",
        ...(input.ckcAttribution ? [input.ckcAttribution] : []),
      ],
    },
    priorBinding
      ? optionSetRecommendationId(priorBinding.optionSetRef)
      : undefined,
  );

  const epistemicRefs = [
    ...optionEpistemicItems.map((i) => i.epistemicItemId),
    recommendationItem.epistemicItemId,
    optionSetObservationId(optionSetRef),
  ];

  const presentedBinding: PresentedOptionSetBinding = {
    kind: "w2_presented_option_set",
    optionSetRef,
    optionSetDigest,
    qualificationDigest,
    recommendationBasisDigest,
    recommendationSource,
    noraRecommendationEpistemicItemId,
    trajectoryId: proposedTrajectoryId,
    candidateVersion: proposedVersion,
    optionRefs: options.map((o) => o.optionRef),
    recommendedOptionRef: recommendation.recommendedOptionRef,
    options,
    recommendation,
    epistemicRefs,
    cycleTypeId: input.cycleTypeId,
    recommendedProfile: input.recommendedProfile,
    criticalSignalsPresent: input.criticalSignalsPresent,
    irreversible: input.irreversible,
    reservations: [...input.reservations],
    ckcAttribution: input.ckcAttribution,
    ckcSemanticFingerprint: semanticFingerprint,
    decisionSubjectMode: "project_trajectory",
    proposalId: null,
    proposalSubjectDigest: null,
    promotesProjectTrajectory: true,
    sealedExecutionBasis: null,
  };

  const observationItem = withPriorSetSupersedes(
    {
      epistemicItemId: optionSetObservationId(optionSetRef),
      type: "Observation" as const,
      statement: serializePresentedOptionSet(presentedBinding),
      status: "active" as const,
      source: optionSetRef,
      relatedObjects: [input.projectId, optionSetRef, proposedTrajectoryId],
    },
    priorBinding
      ? optionSetObservationId(priorBinding.optionSetRef)
      : undefined,
  );

  const materialized = await oa.cycleServices.updateEpistemicState.execute({
    projectId: input.projectId,
    items: [...optionEpistemicItems, recommendationItem, observationItem],
    createdBy: NORA_OPTION_AUTHOR,
    correlationId,
  });
  if (!materialized.ok) {
    return {
      ok: false,
      code: materialized.error.detailCode,
      message: `Matérialisation des options échouée (${materialized.error.detailCode}).`,
    };
  }

  return {
    ok: true,
    optionSetRef,
    cycleTypeId: input.cycleTypeId,
    recommendedProfile: input.recommendedProfile,
    options,
    recommendation,
    epistemicRefs,
    proposedTrajectory: {
      trajectoryId: proposedTrajectoryId,
      version: proposedVersion,
      status: "candidate",
      statusLabel: "TRAJECTOIRE PROPOSÉE",
      isCurrent: false,
    },
    phase: "OPTIONS_PROPOSED",
    autoDecisionPerformed: false,
    executionPerformed: false,
    ckcCognitionCompletedBeforeMutation: true,
    decisionSubjectMode: "project_trajectory",
    proposalId: null,
    promotesProjectTrajectory: true,
  };
}

/** Exposed for the read model / tests: the Pilote is the decision-maker. */
export const W2_DECISION_ACTOR = LOCAL_PILOTE_ACTOR;
