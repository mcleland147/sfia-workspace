/**
 * P5-S07 — minimum-sufficient Deliverable / Artifact work representation.
 *
 * OPTION A (Delivery GO): compose a read projection from existing Product facts.
 * No DeliverableStore / Deliverable aggregate is introduced.
 *
 * Distinguishes when facts allow:
 * - requirement state (expected / not required / unknown)
 * - production state (produced / not produced / unknown)
 * - validation/qualification state (distinct from production)
 * - Exit Proof / Cycle complete (never inferred from Artifact alone)
 *
 * CP02: production fact ≠ Artifact identity; Evidence/ReviewBundle ≠ validation.
 */

export type WorkRequirementState =
  | "expected"
  | "not_required"
  | "unknown";

export type WorkProductionState =
  | "produced"
  | "not_produced"
  | "unknown";

export type WorkValidationState =
  | "not_reviewed"
  | "under_review"
  | "validated"
  | "changes_required"
  | "unknown";

export type WorkRepresentationProjection = {
  readonly projectId: string;
  readonly cycleInstanceId: string | null;
  readonly requirementState: WorkRequirementState;
  readonly productionState: WorkProductionState;
  readonly validationState: WorkValidationState;
  /** Explicit honesty — never inferred from Artifact existence. */
  readonly exitProofSatisfied: boolean | "unknown";
  readonly cycleComplete: boolean | "unknown";
  readonly artifactRefs: readonly string[];
  readonly evidenceRefs: readonly string[];
  readonly reviewBundleRefs: readonly string[];
  readonly pilotSummary: string;
  /** Anti-claims for UI / tests. */
  readonly distinctions: {
    readonly deliverableIsNotArtifact: true;
    readonly artifactExistsIsNotValidation: true;
    readonly validationIsNotExitProof: true;
  };
};

export type DeriveWorkRepresentationInput = {
  readonly projectId: string;
  readonly cycleInstanceId?: string | null;
  /** From lifecycle / obligation policy when known. */
  readonly artifactRequired?: boolean | null;
  /**
   * Explicit production fact from Product lifecycle (distinct from Artifact ids).
   * When set, drives productionState even if artifactIds is empty.
   */
  readonly artifactProduced?: boolean | null;
  /** Durable Artifact ids when known — never synthetic placeholders. */
  readonly artifactIds?: readonly string[] | null;
  /** Evidence ids linked when known. */
  readonly evidenceIds?: readonly string[] | null;
  /** ReviewBundle ids linked when known. */
  readonly reviewBundleIds?: readonly string[] | null;
  /**
   * Qualification hint ONLY from a proved Product fact.
   * Evidence / ReviewBundle presence alone must not invent under_review.
   */
  readonly qualificationHint?:
    | "validated"
    | "changes_required"
    | "under_review"
    | "not_reviewed"
    | null;
  /** Explicit Exit Proof / Cycle complete flags — never invent. */
  readonly exitProofSatisfied?: boolean | null;
  readonly cycleComplete?: boolean | null;
};

function requirementState(
  artifactRequired: boolean | null | undefined,
): WorkRequirementState {
  if (artifactRequired === true) return "expected";
  if (artifactRequired === false) return "not_required";
  return "unknown";
}

function productionState(
  artifactProduced: boolean | null | undefined,
  artifactIds: readonly string[] | null | undefined,
): WorkProductionState {
  if (artifactProduced === true) return "produced";
  if (artifactProduced === false) return "not_produced";
  if (artifactIds == null) return "unknown";
  return artifactIds.length > 0 ? "produced" : "not_produced";
}

function validationState(
  hint: DeriveWorkRepresentationInput["qualificationHint"],
): WorkValidationState {
  if (hint) return hint;
  return "unknown";
}

function pilotSummary(projection: Omit<WorkRepresentationProjection, "pilotSummary" | "distinctions">): string {
  const req =
    projection.requirementState === "expected"
      ? "Livrable attendu"
      : projection.requirementState === "not_required"
        ? "Aucun livrable exigé"
        : "Exigence de livrable indéterminée";
  const prod =
    projection.productionState === "produced"
      ? "Artifact produit"
      : projection.productionState === "not_produced"
        ? "Artifact non produit"
        : "Production indéterminée";
  const val =
    projection.validationState === "validated"
      ? "qualifié"
      : projection.validationState === "changes_required"
        ? "modifications requises"
        : projection.validationState === "under_review"
          ? "en revue"
          : projection.validationState === "not_reviewed"
            ? "non revu"
            : "qualification indéterminée";
  return `${req} · ${prod} · ${val}. Artifact ≠ validation · validation ≠ preuve de sortie.`;
}

/** Presentation-only Pilot labels — enums stay internal (data attributes / tests). */
export function workRequirementPilotLabel(state: WorkRequirementState): string {
  switch (state) {
    case "expected":
      return "Attendu";
    case "not_required":
      return "Non requis";
    default:
      return "Non déterminé";
  }
}

export function workProductionPilotLabel(state: WorkProductionState): string {
  switch (state) {
    case "produced":
      return "Produit";
    case "not_produced":
      return "Non produit";
    default:
      return "Non déterminé";
  }
}

export function workValidationPilotLabel(state: WorkValidationState): string {
  switch (state) {
    case "validated":
      return "Validé";
    case "changes_required":
      return "Modifications requises";
    case "under_review":
      return "En revue";
    case "not_reviewed":
      return "Non revu";
    default:
      return "Non déterminé";
  }
}

export function workTriStatePilotLabel(
  value: boolean | "unknown",
  labels: { readonly true: string; readonly false: string; readonly unknown: string },
): string {
  if (value === true) return labels.true;
  if (value === false) return labels.false;
  return labels.unknown;
}

/**
 * Pure derivation — Option A. Unknown fields stay unknown.
 */
export function deriveWorkRepresentationProjection(
  input: DeriveWorkRepresentationInput,
): WorkRepresentationProjection {
  const artifactRefs = Object.freeze([...(input.artifactIds ?? [])]);
  const evidenceRefs = Object.freeze([...(input.evidenceIds ?? [])]);
  const reviewBundleRefs = Object.freeze([...(input.reviewBundleIds ?? [])]);
  const base = {
    projectId: input.projectId,
    cycleInstanceId: input.cycleInstanceId ?? null,
    requirementState: requirementState(input.artifactRequired),
    productionState: productionState(input.artifactProduced, input.artifactIds),
    validationState: validationState(input.qualificationHint),
    exitProofSatisfied:
      input.exitProofSatisfied == null ? ("unknown" as const) : input.exitProofSatisfied,
    cycleComplete:
      input.cycleComplete == null ? ("unknown" as const) : input.cycleComplete,
    artifactRefs,
    evidenceRefs,
    reviewBundleRefs,
  };
  return {
    ...base,
    pilotSummary: pilotSummary(base),
    distinctions: {
      deliverableIsNotArtifact: true,
      artifactExistsIsNotValidation: true,
      validationIsNotExitProof: true,
    },
  };
}
