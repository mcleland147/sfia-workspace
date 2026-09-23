/**
 * Server-owned static Result Semantics Registry for EvaluateContractResult.
 * One engine; many semantics. Unknown / zero-match → soft not_proven.
 * Ambiguous (multiple applicable) → hard fail at EvaluateContractResult.
 */
import type { ExecutionContractSemanticMaterial } from "@/lib/oa/execution-contract";
import type { Evidence, ExecutionAttemptSnapshot } from "../domain/types";
import type { ReviewBundleEvidenceSnapshot } from "../domain/reviewBundleTypes";
import { docsWriteContractResultSemantic } from "./docsWriteContractResultSemantic";
import { missionResultContractResultSemantic } from "./missionResultContractResultSemantic";
import {
  tempArtifactContractResultSemantic,
  W3B_TEMP_ARTIFACT_RULE_REF,
} from "./tempArtifactContractResultSemantic";

export type ContractResultSemanticApplicability =
  | { applicable: true; ruleRef: string }
  | { applicable: false; ruleRef: null };

export type ContractResultEvidenceSelection = {
  readonly requiredEvidenceIds: readonly string[];
  /** fail-closed reason if selection incomplete */
  readonly incompleteReason?: string;
};

/**
 * Fields available to Result Semantic applicability / dispatch.
 * Reuses ExecutionContractSemanticMaterial — no parallel DTO.
 * HOW (quartet) + WHAT (EO/ER) + constraints may participate in dispatch.
 * `constraints` optional for callers that only supply HOW/WHAT (fail-closed
 * mission semantic treats missing constraints as empty).
 */
export type ContractResultSemanticApplicabilityMaterial = Pick<
  ExecutionContractSemanticMaterial,
  | "action"
  | "target"
  | "scope"
  | "requiredCapabilities"
  | "expectedOutputs"
  | "evidenceRequirements"
> & {
  readonly constraints?: ExecutionContractSemanticMaterial["constraints"];
};

export type ContractResultSemantic = {
  readonly id: string;
  readonly ruleRef: string;
  isApplicable(material: ContractResultSemanticApplicabilityMaterial): boolean;
  /** Select Evidence ids from frozen snapshots only — AND semantics */
  selectEvidenceIds(input: {
    material: ExecutionContractSemanticMaterial;
    attempt: ExecutionAttemptSnapshot;
    frozenSnapshots: readonly ReviewBundleEvidenceSnapshot[];
  }): ContractResultEvidenceSelection;
  assessExpectedOutput(input: {
    expectation: string;
    ordinal: number;
    attempt: ExecutionAttemptSnapshot;
    evidences: readonly Evidence[];
    material: ExecutionContractSemanticMaterial;
  }): "PASS" | "NOT_PROVEN" | "FAIL";
  assessEvidenceRequirement(input: {
    requirement: string;
    ordinal: number;
    attempt: ExecutionAttemptSnapshot;
    evidences: readonly Evidence[];
    frozenSnapshots: readonly ReviewBundleEvidenceSnapshot[];
    material: ExecutionContractSemanticMaterial;
  }): "SATISFIED" | "NOT_SATISFIED" | "NOT_PROVEN";
};

/** Static server-owned registry — compile-time entries only. */
export const CONTRACT_RESULT_SEMANTICS: readonly ContractResultSemantic[] = [
  tempArtifactContractResultSemantic,
  docsWriteContractResultSemantic,
  missionResultContractResultSemantic,
];

export type ResolveApplicableContractResultSemanticsResult =
  | { status: "none" }
  | { status: "one"; semantic: ContractResultSemantic }
  | { status: "ambiguous"; ruleRefs: string[] };

export function resolveApplicableContractResultSemantics(
  material: ContractResultSemanticApplicabilityMaterial,
): ResolveApplicableContractResultSemanticsResult {
  const matches = CONTRACT_RESULT_SEMANTICS.filter((s) =>
    s.isApplicable(material),
  );
  if (matches.length === 0) return { status: "none" };
  if (matches.length === 1) {
    return { status: "one", semantic: matches[0]! };
  }
  return {
    status: "ambiguous",
    ruleRefs: matches.map((s) => s.ruleRef),
  };
}

/** Back-compat wrapper used by old call sites. */
export type ApplicableContractResultRule =
  | { readonly applicable: true; readonly ruleRef: string }
  | { readonly applicable: false; readonly ruleRef: null };

export function resolveApplicableContractResultRule(
  material: ContractResultSemanticApplicabilityMaterial,
): ApplicableContractResultRule {
  const resolved = resolveApplicableContractResultSemantics(material);
  if (resolved.status === "one") {
    return { applicable: true, ruleRef: resolved.semantic.ruleRef };
  }
  // Ambiguous and none both surface as non-applicable at the soft-rule layer;
  // EvaluateContractResult fails hard on ambiguous before assessment.
  return { applicable: false, ruleRef: null };
}

export { W3B_TEMP_ARTIFACT_RULE_REF };
