/**
 * CHAT-FIRST-GOVERNED-DECISION-LOOP-01 — sync OptionSet Work Recommendation
 * epistemic status after a durable Proposal-subject HumanDecision.
 */

import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
import type { EpistemicItem } from "@/lib/oa/cycle";
import {
  isActiveCycleWorkRecommendationItem,
  isWorkRecommendationItem,
  workRecommendationAcwId,
  workRecommendationOptionSetRef,
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
  /**
   * MD-WR-03 — ACW identity of a sealed work_recommendation set. When absent
   * it is derived from the optset Recommendation's relatedObjects (epi:acw:*).
   */
  readonly workRecommendationEpistemicItemId?: string | null;
}): Promise<
  | { readonly ok: true; readonly epistemicItemId: string | null }
  | { readonly ok: false; readonly code: string; readonly message: string }
> {
  let items: EpistemicItem[] = [];
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

  const acwId =
    input.workRecommendationEpistemicItemId?.trim() ||
    (match ? workRecommendationAcwId(match) : null);
  const acwItem = acwId
    ? items.find(
        (item) =>
          item.epistemicItemId === acwId &&
          item.status === "active" &&
          isActiveCycleWorkRecommendationItem(item),
      )
    : undefined;

  if (!match?.epistemicItemId && !acwItem?.epistemicItemId) {
    return { ok: true, epistemicItemId: null };
  }

  const nextStatus = statusAfterDisposition(input.disposition);
  const disposeItems: Array<{
    readonly item: EpistemicItem;
    readonly fallbackSource: string;
  }> = [];
  if (match?.epistemicItemId) {
    disposeItems.push({ item: match, fallbackSource: input.optionSetRef });
  }
  if (acwItem?.epistemicItemId) {
    // ACW stays the identity — dispose it to the SAME status as the carrier.
    disposeItems.push({ item: acwItem, fallbackSource: "active-cycle-work:nora" });
  }

  const updates = disposeItems.map(({ item, fallbackSource }) => {
    const related = new Set(item.relatedObjects ?? []);
    related.add(input.decisionId);
    if (input.deferTargetCycleTypeId?.trim()) {
      related.add(`defer-target:${input.deferTargetCycleTypeId.trim()}`);
    }
    return {
      epistemicItemId: item.epistemicItemId!,
      type: "Recommendation" as const,
      statement: item.statement ?? "",
      source: item.source ?? fallbackSource,
      status: nextStatus,
      confidence: item.confidence,
      blocking: item.blocking,
      relatedObjects: [...related],
      provenance: item.provenance,
      supersedes: item.supersedes ?? undefined,
    };
  });

  const updated = await input.oa.cycleServices.updateEpistemicState.execute({
    projectId: input.projectId,
    createdBy: LOCAL_PILOTE_ACTOR,
    items: updates,
    correlationId: `w2-work-rec-dispose:${input.optionSetRef}`,
  });
  if (!updated.ok) {
    return {
      ok: false,
      code: updated.error.detailCode,
      message: updated.error.message,
    };
  }
  return {
    ok: true,
    epistemicItemId:
      match?.epistemicItemId ?? acwItem?.epistemicItemId ?? null,
  };
}
