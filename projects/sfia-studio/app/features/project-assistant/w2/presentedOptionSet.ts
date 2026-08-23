/**
 * W2 Track A — durable presented OptionSet binding.
 *
 * Propose materialises an Epistemic Observation that pins the exact OptionSet
 * shown to the Pilote. Decide loads that Observation and never re-derives
 * options from live qualification (A2).
 */

import { computeDecisionBasisSourceDigest } from "@/lib/oa/decision";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import type { TrajectoryOptionDto, TrajectoryRecommendationDto } from "./types";

export const W2_PRESENTED_OPTION_SET_KIND = "w2_presented_option_set" as const;

export type OptionSetDigestInputs = {
  readonly cycleTypeId: string;
  readonly recommendedProfile: string;
  readonly criticalSignalsPresent: boolean;
  readonly irreversible: boolean;
  readonly reservations: readonly string[];
  readonly options: readonly TrajectoryOptionDto[];
  readonly recommendedOptionRef: string;
};

export type QualificationDigestInputs = {
  readonly cycleTypeId: string;
  readonly recommendedProfile: string;
  readonly criticalSignalsPresent: boolean;
  readonly irreversible: boolean;
  readonly reservations: readonly string[];
  readonly ckcAttribution: string | null;
  /**
   * Stable CKC semantic fingerprint (PB-DLV-01). Material cycle/CKC/content
   * change invalidates binding; raw provider prose is never included.
   */
  readonly ckcSemanticFingerprint: string | null;
};

export type PresentedOptionSetBinding = {
  readonly kind: typeof W2_PRESENTED_OPTION_SET_KIND;
  readonly optionSetRef: string;
  readonly optionSetDigest: string;
  readonly qualificationDigest: string;
  readonly trajectoryId: string;
  readonly candidateVersion: number;
  readonly optionRefs: readonly string[];
  readonly recommendedOptionRef: string;
  readonly options: readonly TrajectoryOptionDto[];
  readonly recommendation: TrajectoryRecommendationDto;
  readonly epistemicRefs: readonly string[];
  readonly cycleTypeId: string;
  readonly recommendedProfile: string;
  readonly criticalSignalsPresent: boolean;
  readonly irreversible: boolean;
  readonly reservations: readonly string[];
  readonly ckcAttribution: string | null;
  readonly ckcSemanticFingerprint: string | null;
};

export function computeQualificationDigest(
  inputs: QualificationDigestInputs,
): string {
  return computeDecisionBasisSourceDigest({
    cycleTypeId: inputs.cycleTypeId,
    recommendedProfile: inputs.recommendedProfile,
    criticalSignalsPresent: inputs.criticalSignalsPresent,
    irreversible: inputs.irreversible,
    reservations: [...inputs.reservations],
    ckcAttribution: inputs.ckcAttribution,
    ckcSemanticFingerprint: inputs.ckcSemanticFingerprint,
  });
}

export function computeOptionSetDigest(inputs: OptionSetDigestInputs): string {
  return computeDecisionBasisSourceDigest({
    cycleTypeId: inputs.cycleTypeId,
    recommendedProfile: inputs.recommendedProfile,
    criticalSignalsPresent: inputs.criticalSignalsPresent,
    irreversible: inputs.irreversible,
    reservations: [...inputs.reservations],
    options: inputs.options.map((o) => ({
      optionRef: o.optionRef,
      label: o.label,
      stepIds: o.steps.map((s) => s.stepId),
    })),
    recommendedOptionRef: inputs.recommendedOptionRef,
  });
}

export function optionSetObservationId(optionSetRef: string): string {
  return `epi:${optionSetRef.replace("optset:", "set-")}`;
}

/** Deterministic Recommendation EpistemicItem id for a presented OptionSet. */
export function optionSetRecommendationId(optionSetRef: string): string {
  return `epi:${optionSetRef.replace("optset:", "rec-")}`;
}

/** Deterministic Option EpistemicItem id for a presented Option within a set. */
export function optionSetOptionId(
  optionSetRef: string,
  optionRef: string,
): string {
  const slug = optionRef.replace(/[^a-zA-Z0-9]/g, "-");
  return `epi:${optionSetRef.replace("optset:", "opt-")}-${slug}`;
}

export function serializePresentedOptionSet(
  binding: PresentedOptionSetBinding,
): string {
  return JSON.stringify(binding);
}

function isPresentedBinding(value: unknown): value is PresentedOptionSetBinding {
  if (!value || typeof value !== "object") return false;
  const v = value as Record<string, unknown>;
  return (
    v.kind === W2_PRESENTED_OPTION_SET_KIND &&
    typeof v.optionSetRef === "string" &&
    typeof v.optionSetDigest === "string" &&
    typeof v.qualificationDigest === "string" &&
    typeof v.trajectoryId === "string" &&
    typeof v.candidateVersion === "number" &&
    Array.isArray(v.options) &&
    typeof v.recommendedOptionRef === "string"
  );
}

export function parsePresentedOptionSetStatement(
  statement: string,
): PresentedOptionSetBinding | null {
  try {
    const parsed: unknown = JSON.parse(statement);
    return isPresentedBinding(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

export type LoadPresentedOptionSetResult =
  | { readonly ok: true; readonly presented: PresentedOptionSetBinding }
  | { readonly ok: false; readonly code: string; readonly message: string };

/**
 * Fail-closed load of the exact OptionSet presented at propose time.
 */
export async function loadPresentedOptionSet(
  oa: RuntimeOaStack,
  projectId: string,
  optionSetRef: string,
): Promise<LoadPresentedOptionSetResult> {
  const epistemic = await oa.cycleServices.getEpistemicState.execute({
    projectId,
  });
  if (!epistemic.ok) {
    return {
      ok: false,
      code: "OPTION_SET_STALE",
      message:
        "État épistémique illisible — le jeu d'options présenté est indisponible.",
    };
  }

  const observationId = optionSetObservationId(optionSetRef);
  const item = epistemic.state.items.find(
    (i) =>
      i.epistemicItemId === observationId &&
      i.type === "Observation" &&
      i.status === "active",
  );
  if (!item) {
    return {
      ok: false,
      code: "OPTION_SET_STALE",
      message:
        "Jeu d'options présenté introuvable — aucune décision possible sur cette référence.",
    };
  }

  const presented = parsePresentedOptionSetStatement(item.statement);
  if (!presented || presented.optionSetRef !== optionSetRef) {
    return {
      ok: false,
      code: "OPTION_SET_STALE",
      message:
        "Liaison du jeu d'options présenté illisible ou incohérente — fail-closed.",
    };
  }

  return { ok: true, presented };
}

/**
 * Find the latest active OptionSet Observation bound to a trajectory version.
 */
export async function findLatestOptionSetBindingForTrajectory(
  oa: RuntimeOaStack,
  projectId: string,
  trajectoryId: string,
  candidateVersion: number,
): Promise<PresentedOptionSetBinding | null> {
  const epistemic = await oa.cycleServices.getEpistemicState.execute({
    projectId,
  });
  if (!epistemic.ok) return null;

  const matches: PresentedOptionSetBinding[] = [];
  for (const item of epistemic.state.items) {
    if (item.type !== "Observation" || item.status !== "active") continue;
    if (!item.relatedObjects?.includes(trajectoryId)) continue;
    const parsed = parsePresentedOptionSetStatement(item.statement);
    if (!parsed) continue;
    if (
      parsed.trajectoryId === trajectoryId &&
      parsed.candidateVersion === candidateVersion
    ) {
      matches.push(parsed);
    }
  }
  return matches.length > 0 ? matches[matches.length - 1]! : null;
}
