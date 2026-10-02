/**
 * HABITFLOW-CHAT-FIRST-PROJECTTRAJECTORY-HD-EC-CONTINUITY-01 —
 * Read-only resolution of a unique awaiting ProjectTrajectory PresentedOptionSet.
 *
 * Reuses the sealed Observation binding (same SoT as Proposal chat-first).
 * Does NOT invent a second Current subject store. Currentness for decide is
 * enforced by decideTrajectory (trajectoryId / candidateVersion / digests).
 */

import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import {
  decidedOptionSetRefsFromEpistemicItems,
  type EpistemicReadFailure,
} from "./activeProposalDecisionSubject";
import {
  isProposalSubjectPresentedSet,
  parsePresentedOptionSetStatement,
  type PresentedOptionSetBinding,
  W2_PRESENTED_OPTION_SET_KIND,
} from "./presentedOptionSet";
import { proposeTrajectoryOptions } from "./proposeTrajectoryOptions";
import { resolveW2QualificationInputs } from "./qualificationInputs";

export type ActiveProjectTrajectoryPresentedLookup =
  | {
      readonly ok: true;
      readonly kind: "none";
      readonly presented: null;
    }
  | {
      readonly ok: true;
      readonly kind: "unique";
      readonly presented: PresentedOptionSetBinding;
    }
  | {
      readonly ok: true;
      readonly kind: "ambiguous";
      readonly presented: null;
      readonly optionSetRefs: readonly string[];
    }
  | EpistemicReadFailure;

/**
 * Find active ProjectTrajectory PresentedOptionSet(s) still awaiting HD.
 * Ambiguous when more than one distinct optionSetRef awaits.
 */
export async function findActiveAwaitingProjectTrajectoryPresentedOptionSet(
  oa: RuntimeOaStack,
  projectId: string,
): Promise<ActiveProjectTrajectoryPresentedLookup> {
  const epistemic = await oa.cycleServices.getEpistemicState.execute({
    projectId,
  });
  if (!epistemic.ok) {
    return {
      ok: false,
      code: "EPISTEMIC_READ_FAILED",
      message:
        "État épistémique illisible — impossible de déterminer un sujet ProjectTrajectory actif.",
    };
  }

  const decidedRefs = decidedOptionSetRefsFromEpistemicItems(
    epistemic.state.items,
  );
  const byRef = new Map<string, PresentedOptionSetBinding>();
  for (const item of epistemic.state.items) {
    if (item.type !== "Observation" || item.status !== "active") continue;
    const parsed = parsePresentedOptionSetStatement(item.statement);
    if (!parsed) continue;
    if (parsed.kind !== W2_PRESENTED_OPTION_SET_KIND) continue;
    if (isProposalSubjectPresentedSet(parsed)) continue;
    if (parsed.decisionSubjectMode !== "project_trajectory") continue;
    if (decidedRefs.has(parsed.optionSetRef)) continue;
    if (
      typeof parsed.trajectoryId !== "string" ||
      parsed.trajectoryId.trim().length === 0 ||
      typeof parsed.candidateVersion !== "number"
    ) {
      continue;
    }
    byRef.set(parsed.optionSetRef, parsed);
  }

  const refs = [...byRef.keys()];
  if (refs.length === 0) {
    return { ok: true, kind: "none", presented: null };
  }
  if (refs.length > 1) {
    return {
      ok: true,
      kind: "ambiguous",
      presented: null,
      optionSetRefs: refs,
    };
  }
  return {
    ok: true,
    kind: "unique",
    presented: byRef.get(refs[0]!)!,
  };
}

/**
 * Ensure a sealed ProjectTrajectory PresentedOptionSet exists for chat-first
 * accept by reusing proposeTrajectoryOptions (canonical instructor path).
 * Idempotent when an awaiting unique binding already exists.
 */
export async function ensureSealedProjectTrajectoryPresentedOptionSet(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
}): Promise<
  | { readonly ok: true; readonly presented: PresentedOptionSetBinding }
  | {
      readonly ok: false;
      readonly code: string;
      readonly message: string;
      readonly kind?: "ambiguous";
      readonly optionSetRefs?: readonly string[];
    }
> {
  const existing = await findActiveAwaitingProjectTrajectoryPresentedOptionSet(
    input.oa,
    input.projectId,
  );
  if (!existing.ok) {
    return {
      ok: false,
      code: existing.code,
      message: existing.message,
    };
  }
  if (existing.kind === "ambiguous") {
    return {
      ok: false,
      code: "AMBIGUOUS_PROJECT_TRAJECTORY_SUBJECTS",
      message:
        "Plusieurs jeux d'options ProjectTrajectory sont ouverts — aucune décision automatique.",
      kind: "ambiguous",
      optionSetRefs: existing.optionSetRefs,
    };
  }
  if (existing.kind === "unique") {
    return { ok: true, presented: existing.presented };
  }

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
  });
  if (!proposed.ok) {
    return {
      ok: false,
      code: proposed.code,
      message: proposed.message,
    };
  }

  const rebound = await findActiveAwaitingProjectTrajectoryPresentedOptionSet(
    input.oa,
    input.projectId,
  );
  if (!rebound.ok) {
    return {
      ok: false,
      code: rebound.code,
      message: rebound.message,
    };
  }
  if (rebound.kind === "ambiguous") {
    return {
      ok: false,
      code: "AMBIGUOUS_PROJECT_TRAJECTORY_SUBJECTS",
      message:
        "Plusieurs jeux d'options ProjectTrajectory sont ouverts après scellage — aucune décision.",
      kind: "ambiguous",
      optionSetRefs: rebound.optionSetRefs,
    };
  }
  if (rebound.kind !== "unique") {
    return {
      ok: false,
      code: "SEALED_OPTION_SET_NOT_BOUND",
      message:
        "Le jeu d'options ProjectTrajectory n'a pas pu être scellé pour décision chat-first.",
    };
  }
  return { ok: true, presented: rebound.presented };
}
