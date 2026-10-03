/**
 * CHAT-FIRST-GOVERNED-DECISION-LOOP-01 — server-side resolution of a
 * NON-AUTHORITATIVE Pilot disposition candidate into (at most) ONE durable
 * HumanDecision on an already-presented governed decision subject.
 *
 * HABITFLOW-CHAT-FIRST-PROJECTTRAJECTORY-HD-EC-CONTINUITY-01 —
 * ProjectTrajectory accept → CURRENT recommendedOptionRef via decideTrajectory;
 * GOVERNED/BOUNDED → canonical auto-PREPARE (PREPARE ≠ Execute).
 *
 * Doctrine boundaries enforced here:
 * - the candidate is NEVER a HumanDecision; it only selects WHICH sealed
 *   option of an existing PresentedOptionSet the server submits to the
 *   existing `decideTrajectory` writer;
 * - option refs are read from the sealed durable binding, never from the model;
 * - ambiguity / absence of a unique eligible subject records NOTHING and never
 *   locks the rest of the conversation (governed action fails closed, the
 *   conversation stays open);
 * - no new store, no new HumanDecision writer, no DEFERRED enum invention.
 */

import { readLiveProjectContext } from "@/lib/vertical-slice-runtime";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import { isRepositorySourceRef } from "@/lib/oa/execution-contract";
import type {
  PilotDecisionDisposition,
  PilotDecisionTargetKind,
} from "../f2/types";
import {
  listEffectivePendingDecisionSubjectMarkers,
  readActiveProposalDecisionSubject,
} from "./activeProposalDecisionSubject";
import {
  ensureSealedProjectTrajectoryPresentedOptionSet,
  findActiveAwaitingProjectTrajectoryPresentedOptionSet,
} from "./activeProjectTrajectoryDecisionSubject";
import {
  ensureSealedWorkRecommendationPresentedOptionSet,
  findActiveWorkRecommendationSubject,
  isProjectTrajectoryChatFirstSealEligible,
} from "./activeWorkRecommendationDecisionSubject";
import { decideTrajectory, trajectoryDecisionScope } from "./decideTrajectory";
import { classifyProtectedRepositoryPath } from "./deriveActualExecutionWorkFromProductContext";
import {
  isProposalSubjectPresentedSet,
  type PresentedOptionSetBinding,
} from "./presentedOptionSet";
import { prepareExecutionContractFromW2Decision } from "./prepareExecutionContractFromW2Decision";
import {
  PROPOSAL_SUBJECT_AMEND_REF,
  PROPOSAL_SUBJECT_PURSUE_REF,
  PROPOSAL_SUBJECT_REFUSE_REF,
} from "./proposalSubjectOptions";
import { proposeTrajectoryOptions } from "./proposeTrajectoryOptions";
import { resolveW2QualificationInputs } from "./qualificationInputs";
import { pilotAmbiguousPendingMessage } from "../presentationLabels";
import { deferWorkRecommendation } from "./deferWorkRecommendation";
import {
  BOUNDED_OPTION_REF,
  GOVERNED_OPTION_REF,
} from "./trajectoryOptions";

/** Dispositions that can carry a governed effect (incl. durable defer). */
export type ChatFirstEffectiveDisposition =
  | "accept"
  | "refuse"
  | "amend"
  | "defer";

/** CP3 — honest auto-PREPARE continuation outcome (not a Product Result engine). */
export type ChatFirstPrepareOutcome =
  | {
      readonly kind: "prepared";
      readonly executionContractId: string;
    }
  | {
      readonly kind: "blocked";
      readonly code: string;
      readonly message: string;
    }
  | {
      readonly kind: "not_applicable";
      readonly reason: string;
    };

export type ChatFirstPilotDecisionResult =
  /** Nothing to dispose — normal orchestration continues untouched. */
  | { readonly kind: "no_decision" }
  /** More than one effective pending subject — Studio never selects for the Pilot. */
  | {
      readonly kind: "ambiguous_subjects";
      readonly message: string;
      readonly proposalIds: readonly string[];
      readonly optionSetRefs?: readonly string[];
    }
  /** No unique bound subject with a sealed PresentedOptionSet — governed action fails closed. */
  | {
      readonly kind: "no_eligible_subject";
      readonly message: string;
      readonly code?: string;
    }
  /** Durable epistemic/subject read failed — never downgraded to "no subject". */
  | {
      readonly kind: "subject_read_failed";
      readonly code: string;
      readonly message: string;
    }
  /** Defer target could not be resolved honestly — conversation stays open. */
  | {
      readonly kind: "defer_target_unresolved";
      readonly message: string;
      readonly code?: string;
    }
  /** Subject was eligible but the existing writer refused — nothing recorded. */
  | {
      readonly kind: "decision_refused";
      readonly code: string;
      readonly message: string;
    }
  | {
      readonly kind: "decision_recorded";
      readonly disposition: ChatFirstEffectiveDisposition;
      readonly decisionId: string;
      readonly proposalId: string | null;
      readonly optionSetRef: string;
      readonly selectedOptionRef: string;
      readonly scope: string;
      readonly capturedAt: string;
      readonly decisionBasisLinked: boolean;
      readonly readyForNextGatedStep: boolean;
      readonly subjectFamily:
        | "proposal"
        | "project_trajectory"
        | "work_recommendation";
      readonly prepareOutcome: ChatFirstPrepareOutcome;
      readonly executionContractId: string | null;
      readonly executionContractPrepared: boolean;
      readonly attemptCreated: false;
      readonly executionPerformed: false;
    };

const SELECTED_OPTION_BY_DISPOSITION: Record<
  Exclude<ChatFirstEffectiveDisposition, "defer">,
  string
> = {
  accept: PROPOSAL_SUBJECT_PURSUE_REF,
  refuse: PROPOSAL_SUBJECT_REFUSE_REF,
  amend: PROPOSAL_SUBJECT_AMEND_REF,
};

const NO_ELIGIBLE_SUBJECT_MESSAGE =
  "Aucun sujet de décision gouverné unique n'est ouvert pour ce projet — aucune décision n'a été enregistrée. La conversation reste ouverte.";

const PT_NON_ACCEPT_MESSAGE =
  "Pour une Recommendation ProjectTrajectory, seule l'acceptation explicite de la Recommendation courante est enregistrable ici — précisez ou utilisez le panneau d'état. Aucune décision n'a été enregistrée.";

const PT_TARGET_NOT_CURRENT_MESSAGE =
  "Pour ProjectTrajectory, seule l'acceptation explicite de la Recommendation courante (targetKind=current_recommendation) est enregistrable — une cible alternative ou ambiguë ne produit aucune HumanDecision.";

const PROPOSAL_TARGET_REQUIRED_MESSAGE =
  "Pour un sujet Proposal, la cible sémantique doit être le sujet présenté (presented_subject) — aucune HumanDecision enregistrée.";

const WORK_TARGET_REQUIRED_MESSAGE =
  "Pour une recommandation de travail, la cible sémantique doit être la recommandation courante ou le sujet présenté — une cible alternative ou ambiguë ne produit aucune HumanDecision.";

function proposalPrepareNotApplicable(): ChatFirstPrepareOutcome {
  return {
    kind: "not_applicable",
    reason: "Proposal chat-first n'auto-prépare pas d'ExecutionContract.",
  };
}

export function toEffectiveDisposition(
  disposition: PilotDecisionDisposition | null | undefined,
): ChatFirstEffectiveDisposition | "defer" | null {
  if (disposition === "accept") return "accept";
  if (disposition === "refuse") return "refuse";
  if (disposition === "amend") return "amend";
  if (disposition === "defer") return "defer";
  return null;
}

/**
 * Normalize NON-AUTHORITATIVE targetKind. Absent/invalid → ambiguous.
 * NEVER invents current_recommendation.
 */
export function toPilotDecisionTargetKind(
  targetKind: PilotDecisionTargetKind | null | undefined,
): PilotDecisionTargetKind {
  if (
    targetKind === "current_recommendation" ||
    targetKind === "presented_subject" ||
    targetKind === "specific_alternative" ||
    targetKind === "ambiguous"
  ) {
    return targetKind;
  }
  return "ambiguous";
}

/**
 * Bind a sealed PresentedOptionSet for a unique pre-binding pending subject.
 *
 * FR-01 pattern without the « Instruire les options » CTA: the option set is
 * server-materialised from the durable pending marker, so a chat-first
 * disposition always decides on a sealed set instead of a model payload.
 */
async function materializeSealedOptionSetForPendingSubject(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly proposalId: string;
}): Promise<
  | { readonly ok: true; readonly presented: PresentedOptionSetBinding }
  | { readonly ok: false; readonly code: string; readonly message: string }
> {
  const qualification = await resolveW2QualificationInputs({
    oa: input.oa,
    projectId: input.projectId,
  });
  if (!qualification.ok) {
    return {
      ok: false,
      code: qualification.code,
      message: qualification.message,
    };
  }

  const proposed = await proposeTrajectoryOptions({
    oa: input.oa,
    projectId: input.projectId,
    ...qualification.qualification.inputs,
    packagePin: qualification.qualification.packagePin,
    objective: qualification.qualification.objective,
    projectTitle: qualification.qualification.projectTitle,
    proposalId: input.proposalId,
  });
  if (!proposed.ok) {
    return { ok: false, code: proposed.code, message: proposed.message };
  }

  // Re-read durable truth: the freshly written Observation is the SoT, not the
  // in-memory result of the writer.
  const rebound = await readActiveProposalDecisionSubject(
    input.oa,
    input.projectId,
  );
  if (!rebound.ok) {
    return { ok: false, code: rebound.code, message: rebound.message };
  }
  if (rebound.kind !== "bound_awaiting_decision") {
    return {
      ok: false,
      code: "SEALED_OPTION_SET_NOT_BOUND",
      message:
        "Le jeu d'options scellé n'a pas pu être relié au sujet en attente — aucune décision enregistrée.",
    };
  }
  return { ok: true, presented: rebound.presented };
}

async function resolveProposalPresented(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
}): Promise<
  | { readonly ok: true; readonly presented: PresentedOptionSetBinding | null }
  | Extract<
      ChatFirstPilotDecisionResult,
      | { kind: "ambiguous_subjects" }
      | { kind: "no_eligible_subject" }
      | { kind: "subject_read_failed" }
    >
> {
  const subject = await readActiveProposalDecisionSubject(
    input.oa,
    input.projectId,
  );
  if (!subject.ok) {
    return {
      kind: "subject_read_failed",
      code: subject.code,
      message: subject.message,
    };
  }

  if (subject.kind === "bound_awaiting_decision") {
    const pending = await listEffectivePendingDecisionSubjectMarkers(
      input.oa,
      input.projectId,
    );
    if (!pending.ok) {
      return {
        kind: "subject_read_failed",
        code: pending.code,
        message: pending.message,
      };
    }
    const competing = pending.markers.filter(
      (m) => m.proposalId !== subject.presented.proposalId,
    );
    if (competing.length > 0) {
      return {
        kind: "ambiguous_subjects",
        message: pilotAmbiguousPendingMessage(),
        proposalIds: [
          ...(subject.presented.proposalId
            ? [subject.presented.proposalId]
            : []),
          ...competing.map((m) => m.proposalId),
        ],
      };
    }
    if (!isProposalSubjectPresentedSet(subject.presented)) {
      return { ok: true, presented: null };
    }
    return { ok: true, presented: subject.presented };
  }

  if (subject.kind === "pending_reinstruction_required") {
    if (subject.markers.length > 1) {
      return {
        kind: "ambiguous_subjects",
        message: subject.message,
        proposalIds: subject.markers.map((m) => m.proposalId),
      };
    }
    const sole = subject.markers[0];
    if (!sole || !subject.recoverableProposalIds.includes(sole.proposalId)) {
      return {
        kind: "no_eligible_subject",
        message: subject.message,
        code: "PENDING_SUBJECT_NOT_RECONSTRUCTIBLE",
      };
    }
    const bound = await materializeSealedOptionSetForPendingSubject({
      oa: input.oa,
      projectId: input.projectId,
      proposalId: sole.proposalId,
    });
    if (!bound.ok) {
      return {
        kind: "no_eligible_subject",
        message: bound.message,
        code: bound.code,
      };
    }
    if (!isProposalSubjectPresentedSet(bound.presented)) {
      return { ok: true, presented: null };
    }
    return { ok: true, presented: bound.presented };
  }

  return { ok: true, presented: null };
}

async function resolveProjectTrajectoryDurableLocalWriteSeal(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly selectedOptionRef: string;
}): Promise<
  | {
      readonly ok: true;
      readonly seal: {
        readonly scopeIn: readonly string[];
        readonly reversibilityExpectation: "reversible";
        readonly objective?: string;
      };
    }
  | { readonly ok: false; readonly code: string; readonly message: string }
> {
  if (
    input.selectedOptionRef !== GOVERNED_OPTION_REF &&
    input.selectedOptionRef !== BOUNDED_OPTION_REF
  ) {
    return {
      ok: false,
      code: "OPTION_NOT_EXECUTABLE_FOR_SEAL",
      message: "Option non GOVERNED/BOUNDED — pas de seal local-write.",
    };
  }
  const project = await input.oa.projectServices.getProject.execute({
    projectId: input.projectId,
  });
  if (!project.ok) {
    return {
      ok: false,
      code: "PROJECT_READ_FAILED",
      message: "Projet illisible — impossible de dériver un périmètre local-write.",
    };
  }
  const binding = project.project.repositoryBinding;
  const pathRoot =
    typeof binding?.pathRoot === "string" ? binding.pathRoot.trim() : "";
  if (!pathRoot) {
    return {
      ok: false,
      code: "REPOSITORY_PATH_ROOT_ABSENT",
      message:
        "repositoryBinding.pathRoot absent — aucun périmètre local-write server-owned.",
    };
  }
  if (!isRepositorySourceRef(pathRoot) || pathRoot.includes("..")) {
    return {
      ok: false,
      code: "REPOSITORY_PATH_ROOT_UNSAFE",
      message:
        "pathRoot non sûr (traversée / ref invalide) — seal local-write refusé.",
    };
  }
  const protectedHit = classifyProtectedRepositoryPath(pathRoot);
  if (protectedHit) {
    return {
      ok: false,
      code: "REPOSITORY_PATH_ROOT_PROTECTED",
      message: `pathRoot protégé (${protectedHit}) — aucune qualification local-write.`,
    };
  }
  // Objective from durable LPS (Project entity has no objective field).
  let objective: string | undefined;
  const lps = await input.oa.projectServices.getCurrentLivingProjectState.execute({
    projectId: input.projectId,
  });
  if (lps.ok) {
    const raw = lps.livingProjectState.objective;
    if (typeof raw === "string" && raw.trim()) objective = raw.trim();
  }
  return {
    ok: true,
    seal: {
      scopeIn: [pathRoot],
      reversibilityExpectation: "reversible",
      ...(objective ? { objective } : {}),
    },
  };
}

async function autoPrepareProjectTrajectoryContract(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly decisionId: string;
  readonly selectedOptionRef: string;
  readonly forceLocalAuthority?: boolean;
  /** Test inject — never from browser/model; production resolves managed clone HEAD. */
  readonly pinnedBaseHeadSha?: string | null;
  readonly managedRepoRootBase?: string | null;
}): Promise<ChatFirstPrepareOutcome> {
  if (
    input.selectedOptionRef !== GOVERNED_OPTION_REF &&
    input.selectedOptionRef !== BOUNDED_OPTION_REF
  ) {
    return {
      kind: "not_applicable",
      reason: "Option non GOVERNED/BOUNDED — PREPARE non applicable.",
    };
  }
  const live = await readLiveProjectContext(input.oa, input.projectId);
  if (!live.ok) {
    return {
      kind: "blocked",
      code: live.code,
      message: live.message,
    };
  }
  const prepared = await prepareExecutionContractFromW2Decision({
    oa: input.oa,
    projectId: input.projectId,
    decisionId: input.decisionId,
    currentContext: {
      projectId: input.projectId,
      lpsId: live.context.lpsId,
      lpsVersion: live.context.lpsVersion,
      doctrineDigest: live.context.doctrineDigest,
      activeCycleInstanceId: live.context.activeCycleInstanceId,
      ckcResolutionRef: live.context.ckcResolutionRef ?? undefined,
    },
    forceLocalAuthority: input.forceLocalAuthority,
    pinnedBaseHeadSha: input.pinnedBaseHeadSha,
    managedRepoRootBase: input.managedRepoRootBase,
  });
  if (!prepared.ok) {
    return {
      kind: "blocked",
      code: prepared.code,
      message: prepared.message,
    };
  }
  return {
    kind: "prepared",
    executionContractId: prepared.contract.executionContractId,
  };
}

async function recordProjectTrajectoryAccept(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly presented: PresentedOptionSetBinding;
  readonly rationale?: string | null;
  readonly forceLocalAuthority?: boolean;
  readonly pinnedBaseHeadSha?: string | null;
  readonly managedRepoRootBase?: string | null;
}): Promise<ChatFirstPilotDecisionResult> {
  const recommendedOptionRef = (
    input.presented.recommendedOptionRef ?? ""
  ).trim();
  if (!recommendedOptionRef) {
    return {
      kind: "no_eligible_subject",
      message:
        "Recommendation courante absente du jeu d'options scellé — aucune décision enregistrée.",
      code: "RECOMMENDED_OPTION_MISSING",
    };
  }
  if (!input.presented.optionRefs.includes(recommendedOptionRef)) {
    return {
      kind: "no_eligible_subject",
      message:
        "La Recommendation courante n'appartient pas au jeu d'options scellé — aucune décision enregistrée.",
      code: "RECOMMENDED_OPTION_NOT_PRESENTED",
    };
  }
  if (
    input.presented.trajectoryId == null ||
    input.presented.candidateVersion == null
  ) {
    return {
      kind: "no_eligible_subject",
      message:
        "Liaison trajectoire/version absente du PresentedOptionSet — aucune décision enregistrée.",
      code: "TRAJECTORY_BINDING_INCOMPLETE",
    };
  }

  // CP2 — seal durable Product scope BEFORE decide so DecisionBasis carries it.
  const sealResolved = await resolveProjectTrajectoryDurableLocalWriteSeal({
    oa: input.oa,
    projectId: input.projectId,
    selectedOptionRef: recommendedOptionRef,
  });
  const durableLocalWriteSeal = sealResolved.ok ? sealResolved.seal : null;

  const decided = await decideTrajectory({
    oa: input.oa,
    projectId: input.projectId,
    optionSetRef: input.presented.optionSetRef,
    options: input.presented.options,
    recommendedOptionRef,
    // D3 — server selects CURRENT recommendedOptionRef only.
    selectedOptionRef: recommendedOptionRef,
    trajectoryId: input.presented.trajectoryId,
    candidateVersion: input.presented.candidateVersion,
    epistemicRefs: input.presented.epistemicRefs,
    reservesText: input.rationale?.trim() ? input.rationale.trim() : null,
    durableLocalWriteSeal,
    forceLocalAuthority: input.forceLocalAuthority,
  });
  if (!decided.ok) {
    return {
      kind: "decision_refused",
      code: decided.code,
      message: decided.message,
    };
  }

  const prepareOutcome = await autoPrepareProjectTrajectoryContract({
    oa: input.oa,
    projectId: input.projectId,
    decisionId: decided.decision.decisionId,
    selectedOptionRef: recommendedOptionRef,
    forceLocalAuthority: input.forceLocalAuthority,
    pinnedBaseHeadSha: input.pinnedBaseHeadSha,
    managedRepoRootBase: input.managedRepoRootBase,
  });
  const preparedId =
    prepareOutcome.kind === "prepared"
      ? prepareOutcome.executionContractId
      : null;

  return {
    kind: "decision_recorded",
    disposition: "accept",
    decisionId: decided.decision.decisionId,
    proposalId: null,
    optionSetRef: input.presented.optionSetRef,
    selectedOptionRef: recommendedOptionRef,
    scope: trajectoryDecisionScope(input.presented.optionSetRef),
    capturedAt: decided.decision.capturedAt,
    decisionBasisLinked: decided.decision.decisionBasisLinked,
    readyForNextGatedStep: prepareOutcome.kind === "prepared",
    subjectFamily: "project_trajectory",
    prepareOutcome,
    executionContractId: preparedId,
    executionContractPrepared: prepareOutcome.kind === "prepared",
    attemptCreated: false,
    executionPerformed: false,
  };
}

/**
 * MD-WR-03 — accept / refuse / amend / defer of ONE Work Recommendation (ACW).
 * Seals the PresentedOptionSet lazily, then reuses decideTrajectory (HD +
 * DecisionRef + dispose WR+ACW) or deferWorkRecommendation. No auto-PREPARE,
 * no Proposal, no ProjectTrajectory.
 */
async function recordWorkRecommendationDisposition(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly effective: ChatFirstEffectiveDisposition;
  readonly workRecommendationEpistemicItemId: string;
  readonly presented: PresentedOptionSetBinding | null;
  readonly rationale?: string | null;
  readonly forceLocalAuthority?: boolean;
}): Promise<ChatFirstPilotDecisionResult> {
  const sealed = await ensureSealedWorkRecommendationPresentedOptionSet({
    oa: input.oa,
    projectId: input.projectId,
    workRecommendationEpistemicItemId: input.workRecommendationEpistemicItemId,
    presented: input.presented,
  });
  if (!sealed.ok) {
    return {
      kind: "no_eligible_subject",
      message: sealed.message,
      code: sealed.code,
    };
  }
  const presented = sealed.presented;
  const notApplicable: ChatFirstPrepareOutcome = {
    kind: "not_applicable",
    reason: "Recommandation de travail chat-first n'auto-prépare pas d'ExecutionContract.",
  };

  if (input.effective === "defer") {
    const deferred = await deferWorkRecommendation({
      oa: input.oa,
      projectId: input.projectId,
      presented,
      rationale: input.rationale,
      forceLocalAuthority: input.forceLocalAuthority,
    });
    if (!deferred.ok) {
      if (deferred.code === "DEFER_TARGET_UNRESOLVED") {
        return {
          kind: "defer_target_unresolved",
          code: deferred.code,
          message: deferred.message,
        };
      }
      return {
        kind: "decision_refused",
        code: deferred.code,
        message: deferred.message,
      };
    }
    return {
      kind: "decision_recorded",
      disposition: "defer",
      decisionId: deferred.decisionId,
      proposalId: null,
      optionSetRef: presented.optionSetRef,
      selectedOptionRef: "opt:defer-work-recommendation",
      scope: trajectoryDecisionScope(presented.optionSetRef),
      capturedAt: deferred.capturedAt,
      decisionBasisLinked: false,
      readyForNextGatedStep: false,
      subjectFamily: "work_recommendation",
      prepareOutcome: notApplicable,
      executionContractId: null,
      executionContractPrepared: false,
      attemptCreated: false,
      executionPerformed: false,
    };
  }

  const selectedOptionRef =
    SELECTED_OPTION_BY_DISPOSITION[input.effective];
  if (!presented.optionRefs.includes(selectedOptionRef)) {
    return {
      kind: "no_eligible_subject",
      message:
        "L'option correspondante n'appartient pas au jeu d'options scellé — aucune décision enregistrée.",
      code: "OPTION_NOT_PRESENTED",
    };
  }
  const decided = await decideTrajectory({
    oa: input.oa,
    projectId: input.projectId,
    optionSetRef: presented.optionSetRef,
    options: presented.options,
    recommendedOptionRef: presented.recommendedOptionRef,
    selectedOptionRef,
    trajectoryId: null,
    candidateVersion: null,
    epistemicRefs: presented.epistemicRefs,
    reservesText: null,
    forceLocalAuthority: input.forceLocalAuthority,
  });
  if (!decided.ok) {
    return {
      kind: "decision_refused",
      code: decided.code,
      message: decided.message,
    };
  }
  return {
    kind: "decision_recorded",
    disposition: input.effective,
    decisionId: decided.decision.decisionId,
    proposalId: null,
    optionSetRef: presented.optionSetRef,
    selectedOptionRef,
    scope: trajectoryDecisionScope(presented.optionSetRef),
    capturedAt: decided.decision.capturedAt,
    decisionBasisLinked: decided.decision.decisionBasisLinked,
    // Accept closes the Work Recommendation; nothing is prepared or executed.
    readyForNextGatedStep: false,
    subjectFamily: "work_recommendation",
    prepareOutcome: notApplicable,
    executionContractId: null,
    executionContractPrepared: false,
    attemptCreated: false,
    executionPerformed: false,
  };
}

export async function resolveChatFirstPilotDecision(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly disposition: PilotDecisionDisposition | null | undefined;
  /**
   * D3-EXT — NON-AUTHORITATIVE target discriminator.
   * Absent/invalid → ambiguous (never invents current_recommendation).
   */
  readonly targetKind?: PilotDecisionTargetKind | null;
  /** Non-authoritative hint carried into the decision reserves; never authority. */
  readonly rationale?: string | null;
  /** Test inject for the local single-user authority gate. */
  readonly forceLocalAuthority?: boolean;
  /** Test inject — PREPARE pin; production resolves managed clone HEAD. */
  readonly pinnedBaseHeadSha?: string | null;
  readonly managedRepoRootBase?: string | null;
}): Promise<ChatFirstPilotDecisionResult> {
  const effective = toEffectiveDisposition(input.disposition);
  if (effective == null) return { kind: "no_decision" };
  const targetKind = toPilotDecisionTargetKind(input.targetKind);

  const proposal = await resolveProposalPresented({
    oa: input.oa,
    projectId: input.projectId,
  });
  if ("kind" in proposal) {
    return proposal;
  }

  const ptLookup = await findActiveAwaitingProjectTrajectoryPresentedOptionSet(
    input.oa,
    input.projectId,
  );
  if (!ptLookup.ok) {
    return {
      kind: "subject_read_failed",
      code: ptLookup.code,
      message: ptLookup.message,
    };
  }

  const hasProposal = proposal.presented != null;
  const hasPt =
    ptLookup.kind === "unique" || ptLookup.kind === "ambiguous";

  // D4 — Proposal + ProjectTrajectory (or multi-PT) → clarification, zero HD.
  if (hasProposal && hasPt) {
    return {
      kind: "ambiguous_subjects",
      message: pilotAmbiguousPendingMessage(),
      proposalIds: proposal.presented?.proposalId
        ? [proposal.presented.proposalId]
        : [],
      optionSetRefs:
        ptLookup.kind === "unique"
          ? [ptLookup.presented.optionSetRef]
          : ptLookup.kind === "ambiguous"
            ? ptLookup.optionSetRefs
            : [],
    };
  }
  if (ptLookup.kind === "ambiguous") {
    return {
      kind: "ambiguous_subjects",
      message: pilotAmbiguousPendingMessage(),
      proposalIds: [],
      optionSetRefs: ptLookup.optionSetRefs,
    };
  }

  // ——— MD-WR-03 Work Recommendation path (Proposal keeps priority) ———
  // After the Proposal/PT ambiguity checks, before the PT path. Never a silent
  // pick between Work and ProjectTrajectory.
  if (!hasProposal) {
    const work = await findActiveWorkRecommendationSubject({
      oa: input.oa,
      projectId: input.projectId,
    });
    if (!work.ok) {
      return {
        kind: "subject_read_failed",
        code: work.code,
        message: work.message,
      };
    }
    if (work.kind === "ambiguous") {
      return {
        kind: "ambiguous_subjects",
        message: pilotAmbiguousPendingMessage(),
        proposalIds: [],
        optionSetRefs: work.workRecommendationIds,
      };
    }
    if (work.kind === "unique") {
      if (
        ptLookup.kind === "unique" ||
        (await isProjectTrajectoryChatFirstSealEligible({
          oa: input.oa,
          projectId: input.projectId,
        }))
      ) {
        return {
          kind: "ambiguous_subjects",
          message: pilotAmbiguousPendingMessage(),
          proposalIds: [],
          optionSetRefs: [
            work.workRecommendationEpistemicItemId,
            ...(ptLookup.kind === "unique"
              ? [ptLookup.presented.optionSetRef]
              : []),
          ],
        };
      }
      if (
        targetKind !== "current_recommendation" &&
        targetKind !== "presented_subject"
      ) {
        return {
          kind: "no_eligible_subject",
          message: WORK_TARGET_REQUIRED_MESSAGE,
          code: "WORK_RECOMMENDATION_TARGET_KIND_REQUIRED",
        };
      }
      return recordWorkRecommendationDisposition({
        oa: input.oa,
        projectId: input.projectId,
        effective,
        workRecommendationEpistemicItemId:
          work.workRecommendationEpistemicItemId,
        presented: work.presented,
        rationale: input.rationale,
        forceLocalAuthority: input.forceLocalAuthority,
      });
    }
  }

  // ——— Proposal path (KEEP semantics; D3-EXT targetKind gate) ———
  if (hasProposal && proposal.presented) {
    if (targetKind !== "presented_subject") {
      return {
        kind: "no_eligible_subject",
        message: PROPOSAL_TARGET_REQUIRED_MESSAGE,
        code: "PROPOSAL_TARGET_KIND_REQUIRED",
      };
    }
    const presented = proposal.presented;

    if (effective === "defer") {
      const deferred = await deferWorkRecommendation({
        oa: input.oa,
        projectId: input.projectId,
        presented,
        rationale: input.rationale,
        forceLocalAuthority: input.forceLocalAuthority,
      });
      if (!deferred.ok) {
        if (deferred.code === "DEFER_TARGET_UNRESOLVED") {
          return {
            kind: "defer_target_unresolved",
            code: deferred.code,
            message: deferred.message,
          };
        }
        return {
          kind: "decision_refused",
          code: deferred.code,
          message: deferred.message,
        };
      }
      return {
        kind: "decision_recorded",
        disposition: "defer",
        decisionId: deferred.decisionId,
        proposalId: presented.proposalId ?? null,
        optionSetRef: presented.optionSetRef,
        selectedOptionRef: "opt:defer-work-recommendation",
        scope: trajectoryDecisionScope(presented.optionSetRef),
        capturedAt: deferred.capturedAt,
        decisionBasisLinked: false,
        readyForNextGatedStep: false,
        subjectFamily: "proposal",
        prepareOutcome: proposalPrepareNotApplicable(),
        executionContractId: null,
        executionContractPrepared: false,
        attemptCreated: false,
        executionPerformed: false,
      };
    }

    const selectedOptionRef =
      SELECTED_OPTION_BY_DISPOSITION[effective as Exclude<
        ChatFirstEffectiveDisposition,
        "defer"
      >];
    if (!presented.optionRefs.includes(selectedOptionRef)) {
      return {
        kind: "no_eligible_subject",
        message:
          "L'option correspondante n'appartient pas au jeu d'options scellé — aucune décision enregistrée.",
        code: "OPTION_NOT_PRESENTED",
      };
    }

    const decided = await decideTrajectory({
      oa: input.oa,
      projectId: input.projectId,
      optionSetRef: presented.optionSetRef,
      options: presented.options,
      recommendedOptionRef: presented.recommendedOptionRef,
      selectedOptionRef,
      trajectoryId: null,
      candidateVersion: null,
      epistemicRefs: presented.epistemicRefs,
      reservesText: null,
      forceLocalAuthority: input.forceLocalAuthority,
    });
    if (!decided.ok) {
      return {
        kind: "decision_refused",
        code: decided.code,
        message: decided.message,
      };
    }

    return {
      kind: "decision_recorded",
      disposition: effective as Exclude<ChatFirstEffectiveDisposition, "defer">,
      decisionId: decided.decision.decisionId,
      proposalId: decided.decision.proposalId ?? presented.proposalId ?? null,
      optionSetRef: presented.optionSetRef,
      selectedOptionRef,
      scope: trajectoryDecisionScope(presented.optionSetRef),
      capturedAt: decided.decision.capturedAt,
      decisionBasisLinked: decided.decision.decisionBasisLinked,
      readyForNextGatedStep: effective === "accept",
      subjectFamily: "proposal",
      prepareOutcome: proposalPrepareNotApplicable(),
      executionContractId: null,
      executionContractPrepared: false,
      attemptCreated: false,
      executionPerformed: false,
    };
  }

  // ——— ProjectTrajectory path (D1-A / D3-EXT / D2-A / CP2 / CP3) ———
  if (effective !== "accept") {
    if (ptLookup.kind === "unique") {
      return {
        kind: "no_eligible_subject",
        message: PT_NON_ACCEPT_MESSAGE,
        code: "PROJECT_TRAJECTORY_ACCEPT_ONLY",
      };
    }
    return {
      kind: "no_eligible_subject",
      message: NO_ELIGIBLE_SUBJECT_MESSAGE,
      code: "NO_ACTIVE_DECISION_SUBJECT",
    };
  }

  // D3-EXT — PT HD only for explicit CURRENT Recommendation acceptance.
  if (targetKind !== "current_recommendation") {
    return {
      kind: "no_eligible_subject",
      message: PT_TARGET_NOT_CURRENT_MESSAGE,
      code:
        targetKind === "specific_alternative"
          ? "PROJECT_TRAJECTORY_SPECIFIC_ALTERNATIVE"
          : "PROJECT_TRAJECTORY_TARGET_NOT_CURRENT_RECOMMENDATION",
    };
  }

  let presented: PresentedOptionSetBinding;
  if (ptLookup.kind === "unique") {
    presented = ptLookup.presented;
  } else {
    // Idempotency — never seal+decide a second PT after a current trajectory HD.
    const current = await input.oa.cycleServices.getCurrentTrajectory.execute({
      projectId: input.projectId,
    });
    if (
      current.ok &&
      typeof current.trajectory.decidedByDecisionRef === "string" &&
      current.trajectory.decidedByDecisionRef.trim().length > 0
    ) {
      return {
        kind: "no_eligible_subject",
        message:
          "Une trajectoire courante est déjà décidée — aucune nouvelle HumanDecision chat-first.",
        code: "TRAJECTORY_ALREADY_DECIDED",
      };
    }

    // Align with eligibility: only seal when TDS PRESENT carries a CURRENT Nora ref.
    const { resolveTrajectoryDecisionSupportProjection } = await import(
      "./resolveTrajectoryDecisionSupportProjection"
    );
    const live = await input.oa.projectServices.getCurrentLivingProjectState.execute(
      {
        projectId: input.projectId,
      },
    );
    const cycleInstanceId =
      live.ok ? live.livingProjectState.activeCycleInstanceId ?? null : null;
    const tds = await resolveTrajectoryDecisionSupportProjection({
      oa: input.oa,
      projectId: input.projectId,
      cycleInstanceId,
    });
    if (
      tds.state !== "PRESENT" ||
      typeof tds.currentNoraRecommendedOptionRef !== "string" ||
      tds.currentNoraRecommendedOptionRef.trim().length === 0
    ) {
      return {
        kind: "no_eligible_subject",
        message: NO_ELIGIBLE_SUBJECT_MESSAGE,
        code: "NO_ACTIVE_DECISION_SUBJECT",
      };
    }

    const sealed = await ensureSealedProjectTrajectoryPresentedOptionSet({
      oa: input.oa,
      projectId: input.projectId,
    });
    if (!sealed.ok) {
      if (sealed.kind === "ambiguous") {
        return {
          kind: "ambiguous_subjects",
          message: sealed.message,
          proposalIds: [],
          optionSetRefs: sealed.optionSetRefs ?? [],
        };
      }
      return {
        kind: "no_eligible_subject",
        message: sealed.message,
        code: sealed.code,
      };
    }
    presented = sealed.presented;
  }

  return recordProjectTrajectoryAccept({
    oa: input.oa,
    projectId: input.projectId,
    presented,
    rationale: input.rationale,
    forceLocalAuthority: input.forceLocalAuthority,
    pinnedBaseHeadSha: input.pinnedBaseHeadSha,
    managedRepoRootBase: input.managedRepoRootBase,
  });
}
