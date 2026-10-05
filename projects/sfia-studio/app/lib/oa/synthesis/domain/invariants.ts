import type {
  ProductSynthesisProjection,
  SynthesisDetailCode,
  SynthesisSections,
  SynthesisSourceBindings,
  SynthesisStatus,
  SynthesisVerdictLabel,
} from "./types";

export type SynthesisInvariantViolation = {
  detailCode: SynthesisDetailCode;
  reason: string;
};

const STATUSES: ReadonlySet<SynthesisStatus> = new Set([
  "current",
  "superseded",
  "stale_source",
]);

const VERDICT_LABELS: ReadonlySet<SynthesisVerdictLabel> = new Set([
  "atteint",
  "non_prouve",
  "echec",
  "indetermine",
]);

const CANONICAL_VERDICTS = new Set(["PASS", "NOT_PROVEN", "FAIL"]);

const SECTION_KEYS: readonly (keyof SynthesisSections)[] = [
  "summary",
  "planned",
  "done",
  "evaluation",
  "gaps",
  "impact",
  "verdict",
  "recommendation",
  "verified",
];

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function validateBindings(
  bindings: SynthesisSourceBindings | undefined,
): SynthesisInvariantViolation | null {
  if (!bindings || typeof bindings !== "object") {
    return { detailCode: "SYNTHESIS_INVALID", reason: "source_bindings" };
  }
  if (!isNonEmptyString(bindings.projectId)) {
    return { detailCode: "SYNTHESIS_INVALID", reason: "bindings_project_id" };
  }
  if (!isNonEmptyString(bindings.claimEvaluationId)) {
    return {
      detailCode: "SYNTHESIS_INVALID",
      reason: "bindings_claim_evaluation_id",
    };
  }
  if (!Array.isArray(bindings.evidenceIds)) {
    return { detailCode: "SYNTHESIS_INVALID", reason: "bindings_evidence_ids" };
  }
  for (const evidenceId of bindings.evidenceIds) {
    if (!isNonEmptyString(evidenceId)) {
      return {
        detailCode: "SYNTHESIS_INVALID",
        reason: "bindings_evidence_id_empty",
      };
    }
  }
  return null;
}

function validateSections(
  sections: SynthesisSections | undefined,
): SynthesisInvariantViolation | null {
  if (!sections || typeof sections !== "object") {
    return { detailCode: "SYNTHESIS_INVALID", reason: "sections" };
  }
  for (const key of SECTION_KEYS) {
    if (!isNonEmptyString(sections[key])) {
      return { detailCode: "SYNTHESIS_INVALID", reason: `section_${key}_empty` };
    }
  }
  return null;
}

/**
 * Shape + epistemic invariants for Product-derived Synthesis.
 * Authority must remain "none" — co-location in Product SQLite ≠ Truth C.
 */
export function validateProductSynthesisShape(
  synthesis: ProductSynthesisProjection,
): SynthesisInvariantViolation | null {
  if (!synthesis || typeof synthesis !== "object") {
    return { detailCode: "SYNTHESIS_INVALID", reason: "missing_synthesis" };
  }
  if (!isNonEmptyString(synthesis.synthesisId)) {
    return { detailCode: "SYNTHESIS_INVALID", reason: "synthesis_id" };
  }
  if (!isNonEmptyString(synthesis.projectId)) {
    return { detailCode: "SYNTHESIS_INVALID", reason: "project_id" };
  }
  if (!isNonEmptyString(synthesis.title)) {
    return { detailCode: "SYNTHESIS_INVALID", reason: "title" };
  }
  if (!isNonEmptyString(synthesis.subject)) {
    return { detailCode: "SYNTHESIS_INVALID", reason: "subject" };
  }
  if (!STATUSES.has(synthesis.status)) {
    return { detailCode: "SYNTHESIS_INVALID", reason: "status" };
  }
  if (!VERDICT_LABELS.has(synthesis.verdictLabel)) {
    return { detailCode: "SYNTHESIS_INVALID", reason: "verdict_label" };
  }
  if (!CANONICAL_VERDICTS.has(synthesis.canonicalVerdict)) {
    return { detailCode: "SYNTHESIS_INVALID", reason: "canonical_verdict" };
  }
  if (!isNonEmptyString(synthesis.sourceFingerprint)) {
    return { detailCode: "SYNTHESIS_INVALID", reason: "source_fingerprint" };
  }
  if (!isNonEmptyString(synthesis.generatedAt)) {
    return { detailCode: "SYNTHESIS_INVALID", reason: "generated_at" };
  }
  if (synthesis.generatedBy !== "deterministic_product_synthesis_builder_s04") {
    return { detailCode: "SYNTHESIS_INVALID", reason: "generated_by" };
  }
  if (synthesis.authority !== "none") {
    return {
      detailCode: "SYNTHESIS_AUTHORITY_FORBIDDEN",
      reason: "authority_must_be_none",
    };
  }
  if (
    typeof synthesis.version !== "number" ||
    !Number.isInteger(synthesis.version) ||
    synthesis.version < 1
  ) {
    return { detailCode: "SYNTHESIS_INVALID", reason: "version" };
  }
  if (
    synthesis.supersedes !== null &&
    !isNonEmptyString(synthesis.supersedes)
  ) {
    return { detailCode: "SYNTHESIS_INVALID", reason: "supersedes" };
  }
  if (
    synthesis.cycleInstanceId !== null &&
    !isNonEmptyString(synthesis.cycleInstanceId)
  ) {
    return { detailCode: "SYNTHESIS_INVALID", reason: "cycle_instance_id" };
  }

  const bindingsViolation = validateBindings(synthesis.sourceBindings);
  if (bindingsViolation) return bindingsViolation;

  if (synthesis.sourceBindings.projectId !== synthesis.projectId) {
    return {
      detailCode: "SYNTHESIS_INVALID",
      reason: "bindings_project_mismatch",
    };
  }
  if (
    synthesis.cycleInstanceId !== synthesis.sourceBindings.cycleInstanceId
  ) {
    return {
      detailCode: "SYNTHESIS_INVALID",
      reason: "cycle_instance_mismatch",
    };
  }

  return validateSections(synthesis.sections);
}
