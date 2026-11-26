/**
 * ML5 E02 — server-side admission of model×effort couples (fail-closed).
 * Does not judge semantic adequacy; enforces catalog, provisional policy and Sol `none` rule.
 */

import {
  type CognitiveEffort,
  type CognitiveModelId,
  getResourceCatalogEntry,
  isDocumentedEffortForModel,
} from "./resource-catalog";
import {
  activeProvisionalPolicyId,
  isProvisionalV01AdmittedCouple,
  isProvisionalV01CandidateCouple,
} from "./provisional-cognitive-policy";

export type ResourceAdmissionMode = "operational" | "calibration";

const OPERATIONAL_SOL_EFFORTS: ReadonlySet<CognitiveEffort> = new Set([
  "low",
  "medium",
  "high",
]);

export type ResourceAdmissionResult =
  | {
      admitted: true;
      modelId: CognitiveModelId;
      effort: CognitiveEffort;
      mode: ResourceAdmissionMode;
    }
  | {
      admitted: false;
      mode: ResourceAdmissionMode;
      reasonCode:
        | "UNKNOWN_MODEL"
        | "UNDOCUMENTED_EFFORT"
        | "SOL_NONE_REJECTED"
        | "UNCALIBRATED_MODEL_OPERATIONAL"
        | "EFFORT_NOT_OPERATIONALLY_ADMITTED"
        | "SOL_EFFORT_NOT_OPERATIONAL_BAND"
        | "PROVISIONAL_CANDIDATE_NOT_ADMITTED";
      reason: string;
    };

export function admitModelEffort(
  modelId: CognitiveModelId,
  effort: CognitiveEffort,
  mode: ResourceAdmissionMode,
): ResourceAdmissionResult {
  const entry = getResourceCatalogEntry(modelId);
  if (!entry) {
    return {
      admitted: false,
      mode,
      reasonCode: "UNKNOWN_MODEL",
      reason: `Modèle inconnu du catalogue: ${modelId}`,
    };
  }

  if (!isDocumentedEffortForModel(modelId, effort)) {
    return {
      admitted: false,
      mode,
      reasonCode: "UNDOCUMENTED_EFFORT",
      reason: `Effort non documenté pour ${modelId}: ${effort}`,
    };
  }

  if (entry.noneRejected && effort === "none") {
    return {
      admitted: false,
      mode,
      reasonCode: "SOL_NONE_REJECTED",
      reason: "gpt-6.2-sol refuse l'effort none (fournisseur)",
    };
  }

  if (mode === "calibration") {
    if (entry.admissionStatus === "documented_candidate") {
      return { admitted: true, modelId, effort, mode };
    }
    if (modelId === "gpt-6.2-sol") {
      return { admitted: true, modelId, effort, mode };
    }
  }

  if (mode === "operational") {
    const policyId = activeProvisionalPolicyId();

    // Provisional v0.1 — admit Morris-validated couples without promoting catalog status.
    if (
      policyId === "v0.1" &&
      isProvisionalV01AdmittedCouple(modelId, effort)
    ) {
      return { admitted: true, modelId, effort, mode };
    }

    if (
      policyId === "v0.1" &&
      isProvisionalV01CandidateCouple(modelId, effort)
    ) {
      return {
        admitted: false,
        mode,
        reasonCode: "PROVISIONAL_CANDIDATE_NOT_ADMITTED",
        reason: `${modelId}@${effort} est candidat provisoire — qualification Morris requise avant admission`,
      };
    }

    // Legacy Sol-only operational band (rollback) or Sol historical path.
    if (modelId === "gpt-6.2-sol" && OPERATIONAL_SOL_EFFORTS.has(effort)) {
      return { admitted: true, modelId, effort, mode };
    }
    if (modelId === "gpt-6.2-sol" && !OPERATIONAL_SOL_EFFORTS.has(effort)) {
      return {
        admitted: false,
        mode,
        reasonCode: "SOL_EFFORT_NOT_OPERATIONAL_BAND",
        reason:
          "Seuls low|medium|high sont admis en opérationnel pour Sol",
      };
    }

    if (entry.admissionStatus === "documented_candidate") {
      return {
        admitted: false,
        mode,
        reasonCode: "UNCALIBRATED_MODEL_OPERATIONAL",
        reason: `${modelId}@${effort} non admis sous politique ${policyId}`,
      };
    }
  }

  return {
    admitted: false,
    mode,
    reasonCode: "EFFORT_NOT_OPERATIONALLY_ADMITTED",
    reason: "Couple modèle/effort non admis",
  };
}
