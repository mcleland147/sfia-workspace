/**
 * W2 Track A — durable presented OptionSet binding.
 *
 * Propose materialises an Epistemic Observation that pins the exact OptionSet
 * shown to the Pilote. Decide loads that Observation and never re-derives
 * options from live qualification (A2).
 *
 * CORR-PROOF-10 remediation:
 * - proposal subject mode seals Proposal fields without ProjectTrajectory
 * - trajectoryId / candidateVersion are only required for project_trajectory mode
 */

import { computeDecisionBasisSourceDigest } from "@/lib/oa/decision";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import type { SealedProposalExecutionBasis } from "./proposalSubjectIntegrity";
import type { TrajectoryOptionDto, TrajectoryRecommendationDto } from "./types";

export const W2_PRESENTED_OPTION_SET_KIND = "w2_presented_option_set" as const;

export type DecisionSubjectMode = "proposal" | "project_trajectory";

export type OptionSetDigestInputs = {
  readonly cycleTypeId: string;
  readonly recommendedProfile: string;
  readonly criticalSignalsPresent: boolean;
  readonly irreversible: boolean;
  readonly reservations: readonly string[];
  readonly options: readonly TrajectoryOptionDto[];
  readonly recommendedOptionRef: string;
  readonly proposalId?: string | null;
  readonly proposalSubjectDigest?: string | null;
  readonly decisionSubjectMode?: DecisionSubjectMode;
};

export type QualificationDigestInputs = {
  readonly cycleTypeId: string;
  readonly recommendedProfile: string;
  readonly criticalSignalsPresent: boolean;
  readonly irreversible: boolean;
  readonly reservations: readonly string[];
  readonly ckcAttribution: string | null;
  readonly ckcSemanticFingerprint: string | null;
};

export type PresentedOptionSetBinding = {
  readonly kind: typeof W2_PRESENTED_OPTION_SET_KIND;
  readonly optionSetRef: string;
  readonly optionSetDigest: string;
  readonly qualificationDigest: string;
  /**
   * PILOT-NORA-STUDIO-SEMANTIC-CONTINUITY-01 — seals the Recommendation semantic
   * basis (Nora ACW identity or deterministic fallback digest). At decide time,
   * a material change of this basis → OPTION_SET_STALE.
   * Optional for legacy bindings loaded before this macro.
   */
  readonly recommendationBasisDigest?: string | null;
  readonly recommendationSource?:
    | "nora_active_cycle"
    | "deterministic_fallback"
    | null;
  readonly noraRecommendationEpistemicItemId?: string | null;
  /** Required for project_trajectory mode; null for proposal subject mode. */
  readonly trajectoryId: string | null;
  /** Required for project_trajectory mode; null for proposal subject mode. */
  readonly candidateVersion: number | null;
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
  readonly decisionSubjectMode: DecisionSubjectMode;
  readonly proposalId?: string | null;
  readonly proposalSubjectDigest?: string | null;
  readonly promotesProjectTrajectory: boolean;
  readonly sealedExecutionBasis?: SealedProposalExecutionBasis | null;
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
    proposalId: inputs.proposalId ?? null,
    proposalSubjectDigest: inputs.proposalSubjectDigest ?? null,
    decisionSubjectMode: inputs.decisionSubjectMode ?? "project_trajectory",
  });
}

export function optionSetObservationId(optionSetRef: string): string {
  return `epi:${optionSetRef.replace("optset:", "set-")}`;
}

export function optionSetRecommendationId(optionSetRef: string): string {
  return `epi:${optionSetRef.replace("optset:", "rec-")}`;
}

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
  if (
    v.kind !== W2_PRESENTED_OPTION_SET_KIND ||
    typeof v.optionSetRef !== "string" ||
    typeof v.optionSetDigest !== "string" ||
    typeof v.qualificationDigest !== "string" ||
    !Array.isArray(v.options) ||
    typeof v.recommendedOptionRef !== "string"
  ) {
    return false;
  }
  const mode =
    v.decisionSubjectMode === "proposal" ||
    v.decisionSubjectMode === "project_trajectory"
      ? v.decisionSubjectMode
      : // Legacy bindings without mode are trajectory OptionSets.
        "project_trajectory";
  if (mode === "project_trajectory") {
    return (
      typeof v.trajectoryId === "string" &&
      typeof v.candidateVersion === "number"
    );
  }
  // proposal mode: trajectory fields must be null/absent
  return v.trajectoryId == null && v.candidateVersion == null;
}

export function parsePresentedOptionSetStatement(
  statement: string,
): PresentedOptionSetBinding | null {
  try {
    const parsed: unknown = JSON.parse(statement);
    if (!isPresentedBinding(parsed)) return null;
    // Normalise legacy bindings missing decisionSubjectMode
    if (!("decisionSubjectMode" in parsed) || !parsed.decisionSubjectMode) {
      return {
        ...parsed,
        decisionSubjectMode: "project_trajectory",
        promotesProjectTrajectory:
          parsed.promotesProjectTrajectory !== false,
      };
    }
    return parsed;
  } catch {
    return null;
  }
}

export function isProposalSubjectPresentedSet(
  presented: PresentedOptionSetBinding,
): boolean {
  return (
    presented.decisionSubjectMode === "proposal" &&
    typeof presented.proposalId === "string" &&
    presented.proposalId.trim().length > 0 &&
    presented.promotesProjectTrajectory === false
  );
}

export type LoadPresentedOptionSetResult =
  | { readonly ok: true; readonly presented: PresentedOptionSetBinding }
  | { readonly ok: false; readonly code: string; readonly message: string };

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
    if (parsed.decisionSubjectMode === "proposal") continue;
    if (
      parsed.trajectoryId === trajectoryId &&
      parsed.candidateVersion === candidateVersion
    ) {
      matches.push(parsed);
    }
  }
  return matches.length > 0 ? matches[matches.length - 1]! : null;
}
