/**
 * Read-only eligibility for chat-first Work (Proposal subject) disposition.
 * Mirrors resolveChatFirstPilotDecision subject binding without recording.
 */

import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import {
  listEffectivePendingDecisionSubjectMarkers,
  readActiveProposalDecisionSubject,
} from "./activeProposalDecisionSubject";
import {
  isProposalSubjectPresentedSet,
  type PresentedOptionSetBinding,
} from "./presentedOptionSet";
import { proposeTrajectoryOptions } from "./proposeTrajectoryOptions";
import { resolveW2QualificationInputs } from "./qualificationInputs";
import { pilotAmbiguousPendingMessage } from "../presentationLabels";

export type ChatFirstWorkEligibility =
  | { readonly eligible: true; readonly presented: PresentedOptionSetBinding }
  | {
      readonly eligible: false;
      readonly kind:
        | "no_eligible_subject"
        | "ambiguous_subjects"
        | "subject_read_failed";
      readonly message?: string;
      readonly code?: string;
      readonly proposalIds?: readonly string[];
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

export async function assessChatFirstWorkEligibility(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
}): Promise<ChatFirstWorkEligibility> {
  const subject = await readActiveProposalDecisionSubject(
    input.oa,
    input.projectId,
  );
  if (!subject.ok) {
    return {
      eligible: false,
      kind: "subject_read_failed",
      code: subject.code,
      message: subject.message,
    };
  }

  let presented: PresentedOptionSetBinding;
  if (subject.kind === "bound_awaiting_decision") {
    const pending = await listEffectivePendingDecisionSubjectMarkers(
      input.oa,
      input.projectId,
    );
    if (!pending.ok) {
      return {
        eligible: false,
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
        eligible: false,
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
        eligible: false,
        kind: "ambiguous_subjects",
        message: subject.message,
        proposalIds: subject.markers.map((m) => m.proposalId),
      };
    }
    const sole = subject.markers[0];
    if (!sole || !subject.recoverableProposalIds.includes(sole.proposalId)) {
      return {
        eligible: false,
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
        eligible: false,
        kind: "no_eligible_subject",
        code: bound.code,
        message: bound.message,
      };
    }
    presented = bound.presented;
  } else {
    return { eligible: false, kind: "no_eligible_subject" };
  }

  if (!isProposalSubjectPresentedSet(presented)) {
    return { eligible: false, kind: "no_eligible_subject" };
  }
  return { eligible: true, presented };
}
