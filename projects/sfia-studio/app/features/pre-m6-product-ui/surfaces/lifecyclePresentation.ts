import type { PilotLifecycleProjection } from "@/lib/oa/cycle";
import type { LifecycleRecommendationEnvelope } from "@/lib/oa/cycle";

export type LifecycleUiStatus =
  | "active"
  | "candidate"
  | "blocked_drift"
  | "finalization_open"
  | "completed_next"
  | "paused"
  | "empty";

export function lifecycleStatusBadge(
  projection: PilotLifecycleProjection,
): { status: LifecycleUiStatus; label: string } {
  const resume = projection.resumeReconciliation;
  if (
    projection.selectedStatus === "paused" &&
    resume &&
    resume.clean === false
  ) {
    return { status: "blocked_drift", label: "Bloqué / dérive" };
  }
  if (projection.selectedStatus === "active") {
    const finalizeRec = (projection.currentRecommendations ?? []).find(
      (r) =>
        r.intent === "FINALIZE_CURRENT_CYCLE" &&
        r.derivedCurrentness === "CURRENT",
    );
    if (projection.assessment && !projection.assessment.canComplete) {
      return { status: "finalization_open", label: "Finalisation en cours" };
    }
    return {
      status: "active",
      label: finalizeRec ? "En cours" : "En cours",
    };
  }
  if (
    projection.selectedStatus === "proposed" ||
    projection.selectedStatus === "acknowledged"
  ) {
    return { status: "candidate", label: "Cycle proposé" };
  }
  if (projection.selectedStatus === "completed") {
    return { status: "completed_next", label: "Terminé" };
  }
  if (projection.selectedStatus === "paused") {
    return { status: "paused", label: "En pause" };
  }
  if (projection.selectedStatus === "blocked") {
    return { status: "blocked_drift", label: "Bloqué" };
  }
  return { status: "empty", label: "Aucun cycle sélectionné" };
}

export function primaryFinalizeRecommendation(
  projection: PilotLifecycleProjection,
): LifecycleRecommendationEnvelope | null {
  return (
    (projection.currentRecommendations ?? []).find(
      (r) =>
        r.intent === "FINALIZE_CURRENT_CYCLE" &&
        r.derivedCurrentness === "CURRENT",
    ) ?? null
  );
}

export function primaryNextCycleRecommendation(
  projection: PilotLifecycleProjection,
): LifecycleRecommendationEnvelope | null {
  return (
    (projection.currentRecommendations ?? []).find(
      (r) =>
        r.intent === "NEXT_CYCLE" && r.derivedCurrentness === "CURRENT",
    ) ?? null
  );
}

/**
 * CTA honesty: Recommendation never grants authority.
 * Dirty resume never exposes clean RESUME.
 */
export function lifecycleCtaPresentation(projection: PilotLifecycleProjection): {
  showFinalizePrimary: boolean;
  showFinalizeSecondary: boolean;
  showStart: boolean;
  showResume: boolean;
  showReplan: boolean;
  showTrajectoryEscalation: boolean;
  finalizeEnabled: boolean;
  resumeEnabled: boolean;
} {
  const finalizeRec = primaryFinalizeRecommendation(projection);
  const nextRec = primaryNextCycleRecommendation(projection);
  const resumeClean = projection.resumeReconciliation?.clean !== false;
  const dirtyResume =
    projection.selectedStatus === "paused" &&
    projection.resumeReconciliation?.clean === false;

  return {
    showFinalizePrimary: Boolean(
      finalizeRec && projection.cta.canFinalize,
    ),
    showFinalizeSecondary: Boolean(
      !finalizeRec && projection.cta.canFinalize,
    ),
    showStart: projection.cta.canStart,
    showResume: projection.cta.canResume && !dirtyResume,
    showReplan: dirtyResume,
    showTrajectoryEscalation: Boolean(
      nextRec ||
        (projection.candidateCycles.length > 1) ||
        projection.selectionAmbiguous,
    ),
    finalizeEnabled: projection.cta.canFinalize,
    resumeEnabled: projection.cta.canResume && resumeClean && !dirtyResume,
  };
}
