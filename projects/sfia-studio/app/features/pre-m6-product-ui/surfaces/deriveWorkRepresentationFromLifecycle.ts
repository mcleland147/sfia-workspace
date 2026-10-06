import {
  deriveWorkRepresentationProjection,
  type WorkRepresentationProjection,
} from "@/features/project-assistant/w2/deriveWorkRepresentationProjection";
import type { FinalizationAssessment } from "@/lib/oa/cycle";
import type { PilotLifecycleProjection } from "@/lib/oa/cycle/application/lifecycleProjection";

/**
 * P5-S07 CP02 — Option A work representation from existing Lifecycle assessment.
 * No DeliverableStore. Unknown stays unknown.
 * Production satisfaction ≠ synthetic Artifact identity.
 */
export function deriveWorkRepresentationFromLifecycleProjection(
  projection: PilotLifecycleProjection | null,
  durable?: {
    readonly evidenceIds?: readonly string[] | null;
    readonly reviewBundleIds?: readonly string[] | null;
    readonly qualificationHint?:
      | "validated"
      | "changes_required"
      | "under_review"
      | "not_reviewed"
      | null;
  } | null,
): WorkRepresentationProjection | null {
  if (!projection?.projectId) return null;
  const assessment = projection.assessment ?? null;
  const art = assessment?.obligations.find((o) => o.family === "artifact");
  let artifactRequired: boolean | null = null;
  if (art) {
    if (art.applicability === "APPLICABLE") artifactRequired = true;
    else if (art.applicability === "NOT_APPLICABLE") artifactRequired = false;
    else artifactRequired = null;
  }
  const produced =
    art?.applicability === "APPLICABLE" && art.status === "SATISFIED";
  const artifactProduced: boolean | null =
    art?.applicability === "APPLICABLE"
      ? produced
      : art
        ? false
        : null;
  const cycleComplete =
    projection.selectedStatus === "completed"
      ? true
      : projection.selectedStatus == null
        ? null
        : false;

  return deriveWorkRepresentationProjection({
    projectId: projection.projectId,
    cycleInstanceId:
      projection.selectedCycleInstanceId ?? projection.activeCycleInstanceId,
    artifactRequired,
    artifactProduced,
    // Honest: lifecycle can prove production without a real Artifact id.
    artifactIds: art ? [] : null,
    evidenceIds: durable?.evidenceIds ?? null,
    reviewBundleIds: durable?.reviewBundleIds ?? null,
    qualificationHint: durable?.qualificationHint ?? null,
    exitProofSatisfied: null,
    cycleComplete,
  });
}

/** Pure helper for tests — same Option A rules without Lifecycle coupling. */
export function artifactRequiredFromAssessment(
  assessment: FinalizationAssessment | null | undefined,
): boolean | null {
  if (!assessment) return null;
  const art = assessment.obligations.find((o) => o.family === "artifact");
  if (!art) return null;
  if (art.applicability === "APPLICABLE") return true;
  if (art.applicability === "NOT_APPLICABLE") return false;
  return null;
}
