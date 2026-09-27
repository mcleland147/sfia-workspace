/**
 * CHAT-FIRST-GOVERNED-DECISION-LOOP-01 — server-side resolution of a
 * NON-AUTHORITATIVE Pilot disposition candidate into (at most) ONE durable
 * HumanDecision on an already-presented governed decision subject.
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

import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import type { PilotDecisionDisposition } from "../f2/types";
import {
  listEffectivePendingDecisionSubjectMarkers,
  readActiveProposalDecisionSubject,
} from "./activeProposalDecisionSubject";
import { decideTrajectory, trajectoryDecisionScope } from "./decideTrajectory";
import {
  isProposalSubjectPresentedSet,
  type PresentedOptionSetBinding,
} from "./presentedOptionSet";
import {
  PROPOSAL_SUBJECT_AMEND_REF,
  PROPOSAL_SUBJECT_PURSUE_REF,
  PROPOSAL_SUBJECT_REFUSE_REF,
} from "./proposalSubjectOptions";
import { proposeTrajectoryOptions } from "./proposeTrajectoryOptions";
import { resolveW2QualificationInputs } from "./qualificationInputs";
import { pilotAmbiguousPendingMessage } from "../presentationLabels";
import { deferWorkRecommendation } from "./deferWorkRecommendation";

/** Dispositions that can carry a governed effect (incl. durable defer). */
export type ChatFirstEffectiveDisposition =
  | "accept"
  | "refuse"
  | "amend"
  | "defer";

export type ChatFirstPilotDecisionResult =
  /** Nothing to dispose — normal orchestration continues untouched. */
  | { readonly kind: "no_decision" }
  /** More than one effective pending subject — Studio never selects for the Pilot. */
  | {
      readonly kind: "ambiguous_subjects";
      readonly message: string;
      readonly proposalIds: readonly string[];
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

export async function resolveChatFirstPilotDecision(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly disposition: PilotDecisionDisposition | null | undefined;
  /** Non-authoritative hint carried into the decision reserves; never authority. */
  readonly rationale?: string | null;
  /** Test inject for the local single-user authority gate. */
  readonly forceLocalAuthority?: boolean;
}): Promise<ChatFirstPilotDecisionResult> {
  const effective = toEffectiveDisposition(input.disposition);
  if (effective == null) return { kind: "no_decision" };

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

  let presented: PresentedOptionSetBinding;
  if (subject.kind === "bound_awaiting_decision") {
    // A second effective pending subject alongside a bound one is a competing
    // sealed-subject situation: Studio never picks one for the Pilot.
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
    presented = subject.presented;
  } else if (subject.kind === "pending_reinstruction_required") {
    if (subject.markers.length > 1) {
      return {
        kind: "ambiguous_subjects",
        message: subject.message,
        proposalIds: subject.markers.map((m) => m.proposalId),
      };
    }
    const sole = subject.markers[0];
    if (!sole || !subject.recoverableProposalIds.includes(sole.proposalId)) {
      // Pending marker without a reconstructible subject: fail-closed action.
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
    presented = bound.presented;
  } else {
    // "none" and "pursue_prepare_ready": nothing awaiting a disposition.
    return {
      kind: "no_eligible_subject",
      message: NO_ELIGIBLE_SUBJECT_MESSAGE,
      code: "NO_ACTIVE_DECISION_SUBJECT",
    };
  }

  if (!isProposalSubjectPresentedSet(presented)) {
    // Project trajectory promotion stays on its own explicit path.
    return {
      kind: "no_eligible_subject",
      message: NO_ELIGIBLE_SUBJECT_MESSAGE,
      code: "SUBJECT_NOT_PROPOSAL_MODE",
    };
  }

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
    // Sealed binding only — no client/model-supplied refs ever reach here.
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
  };
}
