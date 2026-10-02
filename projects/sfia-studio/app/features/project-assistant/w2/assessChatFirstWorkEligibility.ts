/**
 * Read-only eligibility for chat-first Work disposition.
 * Mirrors resolveChatFirstPilotDecision subject binding without recording.
 *
 * HABITFLOW-CHAT-FIRST-PROJECTTRAJECTORY-HD-EC-CONTINUITY-01 —
 * Proposal subjects KEEP; unique ProjectTrajectory PresentedOptionSet ADDED;
 * Proposal+PT / multi-PT → ambiguous (D4).
 */

import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import {
  listEffectivePendingDecisionSubjectMarkers,
  readActiveProposalDecisionSubject,
} from "./activeProposalDecisionSubject";
import { findActiveAwaitingProjectTrajectoryPresentedOptionSet } from "./activeProjectTrajectoryDecisionSubject";
import {
  isProposalSubjectPresentedSet,
  type PresentedOptionSetBinding,
} from "./presentedOptionSet";
import { proposeTrajectoryOptions } from "./proposeTrajectoryOptions";
import { resolveW2QualificationInputs } from "./qualificationInputs";
import { pilotAmbiguousPendingMessage } from "../presentationLabels";

export type ChatFirstWorkEligibility =
  | {
      readonly eligible: true;
      readonly presented: PresentedOptionSetBinding;
      readonly subjectFamily: "proposal" | "project_trajectory";
    }
  | {
      readonly eligible: true;
      readonly presented: null;
      readonly subjectFamily: "project_trajectory";
      /** Sealed OptionSet will be materialised on accept inside the resolver. */
      readonly sealRequired: true;
    }
  | {
      readonly eligible: false;
      readonly kind:
        | "no_eligible_subject"
        | "ambiguous_subjects"
        | "subject_read_failed";
      readonly message?: string;
      readonly code?: string;
      readonly proposalIds?: readonly string[];
      readonly optionSetRefs?: readonly string[];
    };

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
      message: "Jeu d'options scellé non relié.",
    };
  }
  return { ok: true, presented: rebound.presented };
}

async function resolveProposalPresentedForEligibility(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
}): Promise<
  | { readonly ok: true; readonly presented: PresentedOptionSetBinding | null }
  | {
      readonly ok: false;
      readonly kind: "ambiguous_subjects" | "subject_read_failed" | "no_eligible_subject";
      readonly message?: string;
      readonly code?: string;
      readonly proposalIds?: readonly string[];
    }
> {
  const subject = await readActiveProposalDecisionSubject(
    input.oa,
    input.projectId,
  );
  if (!subject.ok) {
    return {
      ok: false,
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
        ok: false,
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
        ok: false,
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
        ok: false,
        kind: "ambiguous_subjects",
        message: subject.message,
        proposalIds: subject.markers.map((m) => m.proposalId),
      };
    }
    const sole = subject.markers[0];
    if (!sole || !subject.recoverableProposalIds.includes(sole.proposalId)) {
      return {
        ok: false,
        kind: "no_eligible_subject",
        code: "PENDING_SUBJECT_NOT_RECONSTRUCTIBLE",
        message: subject.message,
      };
    }
    const bound = await materializeSealedOptionSetForPendingSubject({
      oa: input.oa,
      projectId: input.projectId,
      proposalId: sole.proposalId,
    });
    if (!bound.ok) {
      return {
        ok: false,
        kind: "no_eligible_subject",
        code: bound.code,
        message: bound.message,
      };
    }
    if (!isProposalSubjectPresentedSet(bound.presented)) {
      return { ok: true, presented: null };
    }
    return { ok: true, presented: bound.presented };
  }

  return { ok: true, presented: null };
}

export async function assessChatFirstWorkEligibility(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
}): Promise<ChatFirstWorkEligibility> {
  const proposal = await resolveProposalPresentedForEligibility(input);
  if (!proposal.ok) {
    return {
      eligible: false,
      kind: proposal.kind,
      message: proposal.message,
      code: proposal.code,
      proposalIds: proposal.proposalIds,
    };
  }

  const pt = await findActiveAwaitingProjectTrajectoryPresentedOptionSet(
    input.oa,
    input.projectId,
  );
  if (!pt.ok) {
    return {
      eligible: false,
      kind: "subject_read_failed",
      code: pt.code,
      message: pt.message,
    };
  }

  const hasProposal = proposal.presented != null;
  const hasPtUnique = pt.kind === "unique";
  const hasPtAmbiguous = pt.kind === "ambiguous";

  // D4 — never silent-pick between Proposal and ProjectTrajectory.
  if (hasProposal && (hasPtUnique || hasPtAmbiguous)) {
    return {
      eligible: false,
      kind: "ambiguous_subjects",
      message: pilotAmbiguousPendingMessage(),
      code: "PROPOSAL_AND_PROJECT_TRAJECTORY_SUBJECTS",
      proposalIds: proposal.presented?.proposalId
        ? [proposal.presented.proposalId]
        : [],
      optionSetRefs:
        pt.kind === "unique"
          ? [pt.presented.optionSetRef]
          : pt.kind === "ambiguous"
            ? pt.optionSetRefs
            : [],
    };
  }

  if (hasPtAmbiguous) {
    return {
      eligible: false,
      kind: "ambiguous_subjects",
      message: pilotAmbiguousPendingMessage(),
      code: "AMBIGUOUS_PROJECT_TRAJECTORY_SUBJECTS",
      optionSetRefs: pt.optionSetRefs,
    };
  }

  if (hasProposal && proposal.presented) {
    return {
      eligible: true,
      presented: proposal.presented,
      subjectFamily: "proposal",
    };
  }

  if (hasPtUnique) {
    return {
      eligible: true,
      presented: pt.presented,
      subjectFamily: "project_trajectory",
    };
  }

  // No sealed PT yet — accept may seal only when a CURRENT Nora trajectory
  // recommendation is already PRESENT (TDS) AND no current trajectory HD exists.
  const current = await input.oa.cycleServices.getCurrentTrajectory.execute({
    projectId: input.projectId,
  });
  if (
    current.ok &&
    typeof current.trajectory.decidedByDecisionRef === "string" &&
    current.trajectory.decidedByDecisionRef.trim().length > 0
  ) {
    return { eligible: false, kind: "no_eligible_subject" };
  }

  const { resolveTrajectoryDecisionSupportProjection } = await import(
    "./resolveTrajectoryDecisionSupportProjection"
  );
  const live = await input.oa.projectServices.getCurrentLivingProjectState.execute({
    projectId: input.projectId,
  });
  const cycleInstanceId =
    live.ok ? live.livingProjectState.activeCycleInstanceId ?? null : null;
  const tds = await resolveTrajectoryDecisionSupportProjection({
    oa: input.oa,
    projectId: input.projectId,
    cycleInstanceId,
  });
  if (
    tds.state === "PRESENT" &&
    typeof tds.currentNoraRecommendedOptionRef === "string" &&
    tds.currentNoraRecommendedOptionRef.trim().length > 0
  ) {
    return {
      eligible: true,
      presented: null,
      subjectFamily: "project_trajectory",
      sealRequired: true,
    };
  }

  return { eligible: false, kind: "no_eligible_subject" };
}
