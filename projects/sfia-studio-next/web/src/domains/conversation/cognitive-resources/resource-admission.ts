/**
 * ML5 E02 — server-side admission of model×effort couples (fail-closed).
 * Does not judge semantic adequacy; enforces catalog, calibration and Sol `none` rule.
 */

import {
  type CognitiveEffort,
  type CognitiveModelId,
  getResourceCatalogEntry,
  isDocumentedEffortForModel,
} from "./resource-catalog";

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
        | "SOL_EFFORT_NOT_OPERATIONAL_BAND";
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

  if (mode === "operational") {
    if (entry.admissionStatus === "documented_candidate") {
      return {
        admitted: false,
        mode,
        reasonCode: "UNCALIBRATED_MODEL_OPERATIONAL",
        reason: `${modelId} est candidat documenté — admission opérationnelle après calibration`,
      };
    }
    if (modelId === "gpt-6.2-sol" && !OPERATIONAL_SOL_EFFORTS.has(effort)) {
      return {
        admitted: false,
        mode,
        reasonCode: "SOL_EFFORT_NOT_OPERATIONAL_BAND",
        reason:
          "Pré-calibration : seuls low|medium|high sont admis en opérationnel pour Sol",
      };
    }
  }

  if (mode === "calibration" && entry.admissionStatus === "documented_candidate") {
    return { admitted: true, modelId, effort, mode };
  }

  if (mode === "calibration" && modelId === "gpt-6.2-sol") {
    return { admitted: true, modelId, effort, mode };
  }

  if (mode === "operational" && modelId === "gpt-6.2-sol") {
    return { admitted: true, modelId, effort, mode };
  }

  return {
    admitted: false,
    mode,
    reasonCode: "EFFORT_NOT_OPERATIONALLY_ADMITTED",
    reason: "Couple modèle/effort non admis",
  };
}