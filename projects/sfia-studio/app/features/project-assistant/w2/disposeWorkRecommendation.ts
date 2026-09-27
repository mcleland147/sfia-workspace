/**
 * CHAT-FIRST-GOVERNED-DECISION-LOOP-01 — sync OptionSet Work Recommendation
 * epistemic status after a durable Proposal-subject HumanDecision.
 */

import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
import {
  isWorkRecommendationItem,
  workRecommendationOptionSetRef,
  type WorkRecommendationItemLike,
} from "@/lib/oa/cycle/application/deriveWorkRecommendations";
import type { ChatFirstEffectiveDisposition } from "./resolveChatFirstPilotDecision";

function statusAfterDisposition(
  disposition: ChatFirstEffectiveDisposition | "defer",
): "resolved" | "rejected" | "superseded" {
  if (disposition === "refuse") return "rejected";
  if (disposition === "amend") return "superseded";
  return "resolved";
}

export async function disposeWorkRecommendationAfterDecision(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly optionSetRef: string;
  readonly decisionId: string;
  readonly disposition: ChatFirstEffectiveDisposition | "defer";
  readonly deferTargetCycleTypeId?: string | null;
}): Promise<
  | { readonly ok: true; readonly epistemicItemId: string | null }
  | { readonly ok: false; readonly code: string; readonly message: string }
> {
  let items: WorkRecommendationItemLike[] = [];
  try {
    items = await input.oa.cycleServices.epistemic.listByProject(input.projectId);
  } catch {
    return {
      ok: false,
      code: "EPISTEMIC_READ_FAILED",
      message: "Lecture des recommandations de travail impossible.",
    };
  }

  const match = items.find(
    (item) =>
      isWorkRecommendationItem(item) &&
      workRecommendationOptionSetRef(item) === input.optionSetRef &&
      item.status === "active",
  );
  if (!match?.epistemicItemId) {
    return { ok: true, epistemicItemId: null };
  }

  const nextStatus = statusAfterDisposition(input.disposition);
  const related = new Set(match.relatedObjects ?? []);
  related.add(input.decisionId);
  if (input.deferTargetCycleTypeId?.trim()) {
    related.add(`defer-target:${input.deferTargetCycleTypeId.trim()}`);
  }

  const updated = await input.oa.cycleServices.updateEpistemicState.execute({
    projectId: input.projectId,
    createdBy: LOCAL_PILOTE_ACTOR,
    items: [
      {
        epistemicItemId: match.epistemicItemId,
        type: "Recommendation",
        statement: match.statement ?? "",
        source: match.source ?? input.optionSetRef,
        status: nextStatus,
        relatedObjects: [...related],
        supersedes: match.supersedes ?? undefined,
      },
    ],
    correlationId: `w2-work-rec-dispose:${input.optionSetRef}`,
  });
  if (!updated.ok) {
    return {
      ok: false,
      code: updated.error.detailCode,
      message: updated.error.message,
    };
  }
  return { ok: true, epistemicItemId: match.epistemicItemId };
}
