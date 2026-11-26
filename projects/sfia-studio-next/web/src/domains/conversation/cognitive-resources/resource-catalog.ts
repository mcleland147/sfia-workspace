/**
 * ML5 E02 — versioned cognitive resource catalog (Luna / Terra / Sol).
 * Guidance and admission policy live in resource-admission.ts; not a second engine.
 */

export type CognitiveEffort =
  | "none"
  | "low"
  | "medium"
  | "high"
  | "xhigh"
  | "max";

export type CognitiveModelId =
  | "gpt-6-luna"
  | "gpt-6.1-terra"
  | "gpt-6.2-sol";

export type CognitiveModelFamily = "luna" | "terra" | "sol";

export type ResourceCatalogAdmissionStatus =
  | "operational"
  | "documented_candidate";

/**
 * Provisional DEV default — Terra medium (Morris 2026-11-26).
 * Historical Sol medium remains available via SFIA_COG_PROVISIONAL_POLICY=legacy_sol
 * and HISTORICAL_SOL_DEFAULT_RESOURCE — not silently deleted.
 */
export const OPERATIONAL_DEFAULT_RESOURCE = {
  modelId: "gpt-6.1-terra",
  effort: "medium",
} as const satisfies {
  modelId: CognitiveModelId;
  effort: CognitiveEffort;
};

/** Historical study / rollback identity (Sol). */
export const NORA_STUDY_MODEL_HISTORICAL = "gpt-6.2-sol" as const;

export const COGNITIVE_RESOURCE_CATALOG_VERSION =
  "ml5-cognitive-resource-catalog-v1-2026-11-26" as const;

export const COGNITIVE_RESOURCE_PROVENANCE = {
  source: "CF-allocation.md §3.1",
  asOf: "2026-11-26",
} as const;

const LUNA_TERRA_EFFORTS: readonly CognitiveEffort[] = [
  "none",
  "low",
  "medium",
  "high",
  "xhigh",
  "max",
];

const SOL_EFFORTS: readonly CognitiveEffort[] = [
  "low",
  "medium",
  "high",
  "xhigh",
  "max",
];

export type CognitiveResourceCapabilities = {
  textInput: boolean;
  imageInput: boolean;
  textOutput: boolean;
  streaming: boolean;
  functionCalling: boolean;
  structuredOutputs: boolean;
  responsesApi: boolean;
};

export type CognitiveResourceCatalogEntry = {
  modelId: CognitiveModelId;
  family: CognitiveModelFamily;
  documentedEfforts: readonly CognitiveEffort[];
  /** Provider documents `none` as invalid for Sol. */
  noneRejected: boolean;
  admissionStatus: ResourceCatalogAdmissionStatus;
  contextMaxTokens: number;
  outputMaxTokens: number;
  maxInputTokensDeclared: number | null;
  capabilities: CognitiveResourceCapabilities;
  positioning: string;
};

export const COGNITIVE_RESOURCE_CATALOG: readonly CognitiveResourceCatalogEntry[] =
  [
    {
      modelId: "gpt-6-luna",
      family: "luna",
      documentedEfforts: LUNA_TERRA_EFFORTS,
      noneRejected: false,
      admissionStatus: "documented_candidate",
      contextMaxTokens: 1_050_000,
      outputMaxTokens: 128_000,
      maxInputTokensDeclared: null,
      capabilities: {
        textInput: true,
        imageInput: true,
        textOutput: true,
        streaming: true,
        functionCalling: true,
        structuredOutputs: true,
        responsesApi: true,
      },
      positioning:
        "Traitements focalisés, extraction, structuration, demandes maîtrisées",
    },
    {
      modelId: "gpt-6.1-terra",
      family: "terra",
      documentedEfforts: LUNA_TERRA_EFFORTS,
      noneRejected: false,
      admissionStatus: "documented_candidate",
      contextMaxTokens: 1_050_000,
      outputMaxTokens: 128_000,
      maxInputTokensDeclared: null,
      capabilities: {
        textInput: true,
        imageInput: true,
        textOutput: true,
        streaming: true,
        functionCalling: true,
        structuredOutputs: true,
        responsesApi: true,
      },
      positioning:
        "Analyse contextualisée, synthèse et conception courante",
    },
    {
      modelId: "gpt-6.2-sol",
      family: "sol",
      documentedEfforts: SOL_EFFORTS,
      noneRejected: true,
      admissionStatus: "operational",
      contextMaxTokens: 1_050_000,
      outputMaxTokens: 128_000,
      maxInputTokensDeclared: 922_000,
      capabilities: {
        textInput: true,
        imageInput: true,
        textOutput: true,
        streaming: true,
        functionCalling: true,
        structuredOutputs: true,
        responsesApi: true,
      },
      positioning:
        "Raisonnement exigeant, arbitrages, diagnostics et invariants complexes",
    },
  ];

export function isCognitiveModelId(v: string): v is CognitiveModelId {
  return (
    v === "gpt-6-luna" || v === "gpt-6.1-terra" || v === "gpt-6.2-sol"
  );
}

export function isCognitiveEffort(v: string): v is CognitiveEffort {
  return (
    v === "none" ||
    v === "low" ||
    v === "medium" ||
    v === "high" ||
    v === "xhigh" ||
    v === "max"
  );
}

export function getResourceCatalogEntry(
  modelId: CognitiveModelId,
): CognitiveResourceCatalogEntry | undefined {
  return COGNITIVE_RESOURCE_CATALOG.find((e) => e.modelId === modelId);
}

export function isDocumentedEffortForModel(
  modelId: CognitiveModelId,
  effort: CognitiveEffort,
): boolean {
  const entry = getResourceCatalogEntry(modelId);
  if (!entry) return false;
  return entry.documentedEfforts.includes(effort);
}