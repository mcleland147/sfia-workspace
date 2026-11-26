# SFIA Studio Next — ML5 Integrated Cognitive / WEB / FinOps — Review Pack FULL

- **Date (UTC):** 2026-11-26T10:24:19Z
- **Cycle:** 8 — Delivery / implémentation — CRITICAL
- **Jalon:** R5 Construction — ML5 Convergence cognitive transverse
- **Branche:** sfia/next-ml5-integrated-delivery-20261123
- **Worktree:** /Users/morris/Projects/sfia-wt-next-ml5-20261123
- **HEAD candidat DEV:** 6092785e548f96ec7fbdcbcafc0817531feedac3
- **Base main:** 997897fd7cf914771e7d08e8030dc7123fab7d25
- **Contrats doc:** 8b334487 (CF 9bb195ba, AT b8a38409, construction 242eb1fe)
- **Statut programme:** R5 IN PROGRESS / ML5 OPEN / R6 NOT STARTED / NO RELEASE / NOT ADOPTED

---

## 1. Mandat et gates

Mandat d'exécution reçu 26/11/2026 (allocation cognitive adaptative, WEB sécurisé, FinOps).

| Gate | Statut |
|---|---|
| Construction DEV | CONSUMED |
| Migration additive DEV + backup | CONSUMED (022 on :5433) |
| Commits locaux | CONSUMED (9678b8b3) |
| Inventaire modèles RO GET /v1/models | CONSUMED — luna/terra/sol PRESENT |
| G-LIVE-API | NOT CONSUMED — calibration pending |
| G-WEB-PUBLIC | NOT CONSUMED |
| G-WEB-MIXED | NOT CONSUMED |
| G-RECETTE | NOT CONSUMED |
| G-DOC normatif | NOT CONSUMED (delivery-history append only) |
| G-GIT push/PR/merge projet | NOT CONSUMED |
| G-PROMOTION | NOT CONSUMED |
| Handoff L3 | IN PROGRESS (this pack) |

---

## 2. Git Truth

| Champ | Initial (E00) | Final |
|---|---|---|
| HEAD | a150926c | 9678b8b31ae8296469e51f4b10b1ec4189defb45 |
| Branche | sfia/next-ml5-integrated-delivery-20261123 | same |
| RECETTE :3200 | LISTEN préservé | non muté |
| DEV :3100 | LISTEN | actif |

Depuis préflight code 1633c86b : typo/table/composer UX puis candidat intégré 9678b8b31ae8296469e51f4b10b1ec4189defb45.

---

## 3. Sources lues

- Processus SFIA v2.6 main 997897fd (routing 3315bbae, template f4fdb488)
- Contrats 8b334487 CF/AT/construction (blobs vérifiés)
- Préflight 67ce2a6e, handoff typo 77ee051d
- Inventaire code as-is (conducteur Sol, WEB fail-closed, pas de FinOps Next)
- Figma page 13 metadata + PNG SHA-256 sous .tmp-sfia-review/figma-page13/
- Models API inventory .tmp-sfia-review/e01-models-inventory.json

---

## 4. Architecture as-implemented

Un seul conducteur D3. Extensions :
1. Catalogue / admission — cognitive-resources ; resolveAdmittedResource dans cognitive-policy.ts ; adaptateur utilise policy.modelRequested.
2. FinOps — table provider_usage_observations ; usage-accounting.ts ; projections domains/finops ; UI /settings/consumption ; rail gear menu.
3. WEB Option B — admitNoraProposedPublicQuery exige registeredPublicQueries (sanitize != authorize).

Sol medium reste défaut opérationnel. Luna/Terra = documented_candidate jusqu'à calibration.

---

## 5. Configuration avant/après

| Élément | Avant | Après |
|---|---|---|
| Modèle Nora | Constante Sol exclusive dans Agent | policy.modelRequested via catalogue+admission |
| Efforts opérationnels | low|medium|high | same band admitted for Sol; calibration mode via SFIA_COGNITIVE_ADMISSION_MODE |
| Policy version | ml5-cog-policy-v3 | ml5-cog-policy-v4-adaptive-resources-20261126 |
| WEB LIVE | 0 | 0 (inchangé) |
| Schema revision | 021 | 022 |

---

## 6-11. Capacités livrées

### Catalogue (E02)
Trois ressources ; 51 typologies guidance ; tarifs Standard court 2026-11-26 ; admission fail-closed.

### Persistance FinOps (E03)
Migration additive DEV appliquée. UNKNOWN=null. Estimation via tariff-catalog. Hook recordNoraProviderUsageFromRunResult branché dans nora-adapter post-run().

### Allocation (E04)
Admission serveur ; fallback explicite vers défaut Sol medium avec reason codes ; pas de second moteur ; Luna/Terra non opérationnels.

### WEB (E05)
Option B déterministe : proposition Nora refusée sans set public enregistré. LIVE toujours bloqué. Risque search hébergé documenté (pas de pin DNS Studio).

### UX FinOps (E06)
Rail personnel : engrenage + menu 2 icônes ; /settings/consumption + détail travail ; API read-only scoped. Gaps Figma : axes charts, timeline technique, mobile Compte.

---

## 12. Calibration (E08)

LIVE CALIBRATION PENDING MORRIS GO (G-LIVE-API). Aucun appel Responses de calibration.

Models.list RO : gpt-6-luna, gpt-6.1-terra, gpt-6.2-sol PRESENT (103 modèles listés).

---

## 13. Matrice E00-E10

| Étape | État | Résultat | Réserve |
|---|---|---|---|
| E00 | VERIFIED | BASELINE QUALIFIED | Clé OpenAI partagée DEV/RECETTE |
| E01 | VERIFIED | Inventaire + Figma L0/captures | L2 F2 browser incomplet |
| E02 | VERIFIED | Catalogue+51+tarifs+tests | Luna 12h cache write null |
| E03 | VERIFIED | Ledger+migration DEV | Collecte non-Nora paths partielle |
| E04 | IMPLEMENTED | Admission+adapter model | Réallocation multi-modèles LIVE non prouvée ; guidance compacte non injectée systématiquement |
| E05 | IMPLEMENTED | Option B déterministe | LIVE/P0 ouverts |
| E06 | IMPLEMENTED | 6 frames couvertes fonctionnellement | Delta F2 non mesuré navigateur |
| E07 | PARTIAL | Suites unitaires ciblées PASS | Pas de campagne browser complète ce cycle |
| E08 | BLOCKED | — | G-LIVE-API |
| E09 | PARTIAL / NOT RUN LIVE | Déterministe WEB/admission/Finops unit | Parcours LIVE 1-10 incomplets |
| E10 | IN PROGRESS | Pack + handoff | — |

---

## 14. Tests et preuves

Deterministic PASS (échantillon) : ml5-cognitive-resources 10 ; ml5-e03-usage-accounting 8 ; ml5-finops-usage-projection 6 ; cognitive-policy 7 ; ml5-t1-web-admission 11 ; ml5-c15 6 ; ml5-c16 5 ; ml5-c24-web 10 ; ml5-web-search-authorize 7 ; ml5-public-web-frontier 11 ; studio-rail 13 ; personal-rail-settings-menu 2.

Figma PNG SHA-256 :
- 13.02 aa2b07ed1b9d3e8732935cb05809c39b4924248ce72ef4a12ded98860eb0b68d
- 13.03 c81bdd0c3a1e3bb3b4bcf4e3eb5a39995edfdef21534d801cc8d2d7c0b737fe5
- 13.05 fe93956a4e9499819ae276b047eab85d48a6278b082beeb92ae7390a047f14bb
- 13.06 ec209bf5682b4a880aa359833ff1548219813405fed95ab1f5d4712b41c09cb1

---

## 15. Non-régression

- Conducteur unique conservé
- WEB LIVE=0
- Intégrations route préservée
- Enveloppes 2M/1M/120 inchangées
- RECETTE non mutée
- Pas de second moteur lexical

---

## 16. Documentation

- construction/delivery-history.md entrée DELIV-2026-11-26-ML5-INTEGRATED-COGNITIVE-WEB-FINOPS-DEV
- Synchronisation normative CF/AT/Roadmap : non (G-DOC) — KNOWN GAP documentaire vs code

---

## 17. Réserves et exit

1. Calibration LIVE non faite → Luna/Terra non admis opérationnellement
2. G-WEB-* non obtenus → P0 WEB ouvert
3. Figma F2 navigateur non complété
4. Clé OpenAI même empreinte DEV/RECETTE
5. Injection compacte du référentiel 51 non systématique dans chaque prompt
6. Collecte usages chemins non-conversationnels (trajectoire/D7) incomplète
7. Quelques tests unitaires préexistants hors blast (residual-abcd copy) FAIL non traités ici

Exit attendu Morris : revue ChatGPT → GO G-LIVE-API (campagne bornée) et/ou arbitrage politique initiale ; G-WEB-PUBLIC ultérieur ; G-RECETTE distinct.

---

## 18. Verdict

**ML5 INTEGRATED COGNITIVE CONVERGENCE — DETERMINISTIC DELIVERY QUALIFIED — LIVE CALIBRATION AND/OR WEB GATES PENDING.**

---

## 19. Contenu fichiers créés

### resource-catalog.ts (complet)

```typescript
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

/** Pre-calibration default — Sol medium (historical study reference, contract §5.2). */
export const OPERATIONAL_DEFAULT_RESOURCE = {
  modelId: "gpt-6.2-sol",
  effort: "medium",
} as const satisfies {
  modelId: CognitiveModelId;
  effort: CognitiveEffort;
};

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
```

### resource-admission.ts (complet)

```typescript
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
```

### tariff-catalog.ts (complet)

```typescript
/**
 * ML5 E02 — versioned OpenAI tariff referential (observation, not commercial promise).
 * CF-allocation.md §3.2 — Standard, short context, as of 2026-11-26.
 */

import type { CognitiveModelId } from "./resource-catalog";

export const TARIFF_CATALOG_VERSION = "ml5-tariff-catalog-v1-2026-11-26" as const;

export const TARIFF_PROVENANCE = {
  asOf: "2026-11-26",
  serviceTier: "Standard" as const,
  contextBand: "short_context" as const,
  source: "CF-allocation.md §3.2",
  unit: "USD_per_million_tokens" as const,
} as const;

/** Input tokens on a single provider request above this threshold trigger long-context multipliers. */
export const LONG_CONTEXT_INPUT_THRESHOLD_TOKENS = 272_000;

export const LONG_CONTEXT_TARIFF_MULTIPLIERS = {
  inputAndCache: 2,
  output: 1.5,
} as const;

export type ModelTariffRates = {
  inputUncachedUsdPerMillion: number;
  inputCachedReadUsdPerMillion: number;
  outputUsdPerMillion: number;
  cacheWrite30MinUsdPerMillion: number;
  /** Luna Standard 12h write not confirmed in contract excerpt — do not presume. */
  cacheWrite12hUsdPerMillion: number | null;
};

export type ModelTariffEntry = {
  modelId: CognitiveModelId;
  shortContextStandard: ModelTariffRates;
};

export const TARIFF_CATALOG: readonly ModelTariffEntry[] = [
  {
    modelId: "gpt-6-luna",
    shortContextStandard: {
      inputUncachedUsdPerMillion: 0.1,
      inputCachedReadUsdPerMillion: 0.01,
      outputUsdPerMillion: 0.5,
      cacheWrite30MinUsdPerMillion: 0.125,
      cacheWrite12hUsdPerMillion: null,
    },
  },
  {
    modelId: "gpt-6.1-terra",
    shortContextStandard: {
      inputUncachedUsdPerMillion: 1.0,
      inputCachedReadUsdPerMillion: 0.05,
      outputUsdPerMillion: 5.0,
      cacheWrite30MinUsdPerMillion: 1.25,
      cacheWrite12hUsdPerMillion: 2.5,
    },
  },
  {
    modelId: "gpt-6.2-sol",
    shortContextStandard: {
      inputUncachedUsdPerMillion: 2.0,
      inputCachedReadUsdPerMillion: 0.1,
      outputUsdPerMillion: 10.0,
      cacheWrite30MinUsdPerMillion: 2.5,
      cacheWrite12hUsdPerMillion: 5.0,
    },
  },
];

export type TariffComputationInput = {
  modelId: CognitiveModelId;
  inputTokens: number;
  /** Applies long-context multipliers to the entire request when input exceeds threshold. */
  useLongContextTier?: boolean;
};

export function getTariffEntry(
  modelId: CognitiveModelId,
): ModelTariffEntry | undefined {
  return TARIFF_CATALOG.find((e) => e.modelId === modelId);
}

export function resolvesLongContextTier(inputTokens: number): boolean {
  return inputTokens > LONG_CONTEXT_INPUT_THRESHOLD_TOKENS;
}

/** Scale short-context Standard rates when the long-context tier applies (per request, not multi-request totals). */
export function applyLongContextMultipliers(
  rates: ModelTariffRates,
): ModelTariffRates {
  const mIn = LONG_CONTEXT_TARIFF_MULTIPLIERS.inputAndCache;
  const mOut = LONG_CONTEXT_TARIFF_MULTIPLIERS.output;
  return {
    inputUncachedUsdPerMillion: rates.inputUncachedUsdPerMillion * mIn,
    inputCachedReadUsdPerMillion: rates.inputCachedReadUsdPerMillion * mIn,
    outputUsdPerMillion: rates.outputUsdPerMillion * mOut,
    cacheWrite30MinUsdPerMillion: rates.cacheWrite30MinUsdPerMillion * mIn,
    cacheWrite12hUsdPerMillion:
      rates.cacheWrite12hUsdPerMillion === null
        ? null
        : rates.cacheWrite12hUsdPerMillion * mIn,
  };
}

export function effectiveTariffRates(
  modelId: CognitiveModelId,
  inputTokens: number,
): ModelTariffRates | undefined {
  const entry = getTariffEntry(modelId);
  if (!entry) return undefined;
  if (resolvesLongContextTier(inputTokens)) {
    return applyLongContextMultipliers(entry.shortContextStandard);
  }
  return entry.shortContextStandard;
}
```

### usage-accounting.ts (complet)

```typescript
import { createHash, randomUUID } from "node:crypto";
import { db } from "@/db/client";
import { providerUsageObservations } from "@/db/schema";
import type { CognitiveModelId } from "./cognitive-resources/resource-catalog";
import {
  TARIFF_CATALOG_VERSION,
  effectiveTariffRates,
  getTariffEntry,
} from "./cognitive-resources/tariff-catalog";
import {
  extractProviderUsageFromRunResult,
  type ProviderUsageSnapshot,
} from "./provider-usage";

export type CostCoverage = "KNOWN" | "PARTIAL" | "UNKNOWN";

export type ProviderUsageObservationStatus =
  | "initiated"
  | "succeeded"
  | "failed"
  | "interrupted"
  | "uncertain";

export type ProviderUsageGranularity = "REQUEST" | "GENERATION_AGGREGATE";

export type ProviderUsageObservationInput = {
  lane?: string | null;
  scopeId?: string | null;
  ownerPilotId?: string | null;
  projectId?: string | null;
  preparationId?: string | null;
  conversationId?: string | null;
  turnId?: string | null;
  cognitiveWorkId?: string | null;
  segmentIndex?: number | null;
  generationId?: string | null;
  operation?: string | null;
  attemptId?: string | null;
  modelRequested?: string | null;
  modelApplied?: string | null;
  effortRequested?: string | null;
  effortApplied?: string | null;
  inputTokens?: number | null;
  cachedInputTokens?: number | null;
  outputTokens?: number | null;
  reasoningTokens?: number | null;
  totalTokens?: number | null;
  providerRequests?: number | null;
  durationMs?: number | null;
  tariffVersion?: string;
  estimatedCostUsd?: number | null;
  costCoverage?: CostCoverage;
  status: ProviderUsageObservationStatus;
  granularity: ProviderUsageGranularity;
  providerResponseId?: string | null;
  idempotencyKey: string;
  errorCategory?: string | null;
  limits?: string[];
};

export type CostEstimate = {
  estimatedCostUsd: number | null;
  costCoverage: CostCoverage;
  tariffVersion: string;
  limits: string[];
};

export type IdempotencyKeyInput = {
  granularity: ProviderUsageGranularity;
  operation?: string | null;
  attemptId?: string | null;
  generationId?: string | null;
  segmentIndex?: number | null;
  providerResponseId?: string | null;
  /** Disambiguates multiple provider HTTP calls within one logical attempt. */
  callOrdinal?: number | null;
};

/** Stable dedupe key for durable FinOps rows — distinct from business command idempotency. */
export function buildIdempotencyKey(input: IdempotencyKeyInput): string {
  const canonical = [
    "finops-obs-v1",
    input.granularity,
    input.operation?.trim() ?? "",
    input.attemptId?.trim() ?? "",
    input.generationId?.trim() ?? "",
    input.segmentIndex != null ? String(input.segmentIndex) : "",
    input.providerResponseId?.trim() ?? "",
    input.callOrdinal != null ? String(input.callOrdinal) : "",
  ].join("\0");
  return createHash("sha256").update(canonical, "utf8").digest("hex");
}

function isCognitiveModelId(value: string): value is CognitiveModelId {
  return getTariffEntry(value as CognitiveModelId) != null;
}

function usdPerMillion(tokens: number, rateUsdPerMillion: number): number {
  return (tokens / 1_000_000) * rateUsdPerMillion;
}

/**
 * Tariff estimate from observed token fields only — never coerces null → 0 for usage inputs.
 * Missing required token aggregates ⇒ UNKNOWN cost.
 */
export function estimateCostUsd(
  usage: Pick<
    ProviderUsageSnapshot,
    "inputTokens" | "outputTokens" | "cachedInputTokens"
  >,
  model: string | null | undefined,
  tariffVersion: string = TARIFF_CATALOG_VERSION,
): CostEstimate {
  const limits: string[] = [];
  if (!model || !isCognitiveModelId(model)) {
    return {
      estimatedCostUsd: null,
      costCoverage: "UNKNOWN",
      tariffVersion,
      limits: ["MODEL_TARIFF_UNKNOWN"],
    };
  }
  const { inputTokens, outputTokens, cachedInputTokens } = usage;
  if (inputTokens == null || outputTokens == null) {
    return {
      estimatedCostUsd: null,
      costCoverage: "UNKNOWN",
      tariffVersion,
      limits: ["TOKEN_AGGREGATES_INCOMPLETE"],
    };
  }

  const rates = effectiveTariffRates(model, inputTokens);
  if (!rates) {
    return {
      estimatedCostUsd: null,
      costCoverage: "UNKNOWN",
      tariffVersion,
      limits: ["TARIFF_RATES_UNAVAILABLE"],
    };
  }

  let costCoverage: CostCoverage = "KNOWN";
  let cached = 0;
  let uncached = inputTokens;

  if (cachedInputTokens == null) {
    costCoverage = "PARTIAL";
    limits.push("CACHED_INPUT_TOKENS_UNVERIFIED");
  } else {
    cached = Math.min(cachedInputTokens, inputTokens);
    uncached = Math.max(0, inputTokens - cached);
    if (cachedInputTokens > inputTokens) {
      limits.push("CACHED_INPUT_EXCEEDS_INPUT_CLAMPED");
    }
  }

  const estimatedCostUsd =
    usdPerMillion(uncached, rates.inputUncachedUsdPerMillion) +
    usdPerMillion(cached, rates.inputCachedReadUsdPerMillion) +
    usdPerMillion(outputTokens, rates.outputUsdPerMillion);

  return {
    estimatedCostUsd,
    costCoverage,
    tariffVersion,
    limits,
  };
}

function nullableTokenField(value: number | null | undefined): number | null | undefined {
  if (value === undefined) return undefined;
  if (value == null) return null;
  return Number.isFinite(value) ? value : null;
}

export type RecordProviderUsageObservationResult = {
  inserted: boolean;
  id: string;
};

/** Insert one durable observation; duplicate idempotency_key is a no-op. */
export async function recordProviderUsageObservation(
  input: ProviderUsageObservationInput,
): Promise<RecordProviderUsageObservationResult> {
  const modelForTariff = input.modelApplied ?? input.modelRequested ?? null;
  const usageSlice = {
    inputTokens: input.inputTokens ?? null,
    outputTokens: input.outputTokens ?? null,
    cachedInputTokens: input.cachedInputTokens ?? null,
  };
  const tariffVersion = input.tariffVersion ?? TARIFF_CATALOG_VERSION;
  const cost =
    input.costCoverage != null && input.estimatedCostUsd !== undefined
      ? {
          estimatedCostUsd: input.estimatedCostUsd,
          costCoverage: input.costCoverage,
          tariffVersion,
          limits: input.limits ?? [],
        }
      : estimateCostUsd(usageSlice, modelForTariff, tariffVersion);

  const mergedLimits = [...new Set([...(input.limits ?? []), ...cost.limits])];
  const id = randomUUID();

  const inserted = await db
    .insert(providerUsageObservations)
    .values({
      id,
      lane:
        input.lane ??
        (process.env.STUDIO_LANE?.trim().toUpperCase() || "UNKNOWN"),
      scopeId: input.scopeId ?? null,
      ownerPilotId: input.ownerPilotId ?? null,
      projectId: input.projectId ?? null,
      preparationId: input.preparationId ?? null,
      conversationId: input.conversationId ?? null,
      turnId: input.turnId ?? null,
      cognitiveWorkId: input.cognitiveWorkId ?? null,
      segmentIndex: input.segmentIndex ?? null,
      generationId: input.generationId ?? null,
      operation: input.operation ?? null,
      attemptId: input.attemptId ?? null,
      modelRequested: input.modelRequested ?? null,
      modelApplied: input.modelApplied ?? null,
      effortRequested: input.effortRequested ?? null,
      effortApplied: input.effortApplied ?? null,
      inputTokens: nullableTokenField(input.inputTokens),
      cachedInputTokens: nullableTokenField(input.cachedInputTokens),
      outputTokens: nullableTokenField(input.outputTokens),
      reasoningTokens: nullableTokenField(input.reasoningTokens),
      totalTokens: nullableTokenField(input.totalTokens),
      providerRequests: input.providerRequests ?? null,
      durationMs: input.durationMs ?? null,
      tariffVersion: cost.tariffVersion,
      estimatedCostUsd:
        cost.estimatedCostUsd == null ? null : String(cost.estimatedCostUsd),
      costCoverage: cost.costCoverage,
      status: input.status,
      granularity: input.granularity,
      providerResponseId: input.providerResponseId ?? null,
      idempotencyKey: input.idempotencyKey,
      errorCategory: input.errorCategory ?? null,
      limitsJson: mergedLimits,
      createdAt: new Date(),
    })
    .onConflictDoNothing({ target: providerUsageObservations.idempotencyKey })
    .returning({ id: providerUsageObservations.id });

  if (inserted.length > 0) {
    return { inserted: true, id: inserted[0]!.id };
  }
  return { inserted: false, id };
}

export type NoraProviderUsageHookInput = {
  runResult: unknown;
  status: ProviderUsageObservationStatus;
  granularity?: ProviderUsageGranularity;
  scopeId?: string | null;
  ownerPilotId?: string | null;
  projectId?: string | null;
  preparationId?: string | null;
  conversationId?: string | null;
  turnId?: string | null;
  cognitiveWorkId?: string | null;
  segmentIndex?: number | null;
  generationId?: string | null;
  operation?: string | null;
  attemptId?: string | null;
  modelRequested?: string | null;
  modelApplied?: string | null;
  effortRequested?: string | null;
  effortApplied?: string | null;
  durationMs?: number | null;
  providerResponseId?: string | null;
  callOrdinal?: number | null;
  errorCategory?: string | null;
};

/**
 * E04 wiring entrypoint — map Agents SDK run result → durable FinOps row (idempotent).
 * Safe to call from nora-adapter / run-nora-cognitive-turn once per provider invocation.
 */
export async function recordNoraProviderUsageFromRunResult(
  input: NoraProviderUsageHookInput,
): Promise<RecordProviderUsageObservationResult> {
  const snapshot = extractProviderUsageFromRunResult(input.runResult);
  const granularity = input.granularity ?? "REQUEST";
  const idempotencyKey = buildIdempotencyKey({
    granularity,
    operation: input.operation,
    attemptId: input.attemptId,
    generationId: input.generationId,
    segmentIndex: input.segmentIndex,
    providerResponseId: input.providerResponseId,
    callOrdinal: input.callOrdinal,
  });

  return recordProviderUsageObservation({
    scopeId: input.scopeId,
    ownerPilotId: input.ownerPilotId,
    projectId: input.projectId,
    preparationId: input.preparationId,
    conversationId: input.conversationId,
    turnId: input.turnId,
    cognitiveWorkId: input.cognitiveWorkId,
    segmentIndex: input.segmentIndex,
    generationId: input.generationId,
    operation: input.operation,
    attemptId: input.attemptId,
    modelRequested: input.modelRequested,
    modelApplied: input.modelApplied,
    effortRequested: input.effortRequested,
    effortApplied: input.effortApplied,
    inputTokens: snapshot.inputTokens,
    outputTokens: snapshot.outputTokens,
    totalTokens: snapshot.totalTokens,
    cachedInputTokens: snapshot.cachedInputTokens,
    reasoningTokens: snapshot.reasoningTokens,
    providerRequests: snapshot.providerRequests,
    durationMs: input.durationMs,
    status: input.status,
    granularity,
    providerResponseId: input.providerResponseId,
    errorCategory: input.errorCategory,
    idempotencyKey,
    limits: [...snapshot.limits, ...(snapshot.provenance === "UNAVAILABLE" ? ["PROVIDER_USAGE_UNAVAILABLE"] : [])],
  });
}
```

### 022_provider_usage_observations.sql (complet)

```sql
-- ML5 E03 — durable FinOps provider usage observations (DEV additive).
-- Operational rollups remain in cognitive_works.resources_json; this table is the ledger.
-- RECETTE/STABLE untouched. No DROP/purge.

CREATE TABLE IF NOT EXISTS provider_usage_observations (
  id uuid PRIMARY KEY,
  created_at timestamptz NOT NULL DEFAULT now(),
  lane text,
  scope_id text,
  owner_pilot_id text REFERENCES pilots(id),
  project_id text REFERENCES projects(id),
  preparation_id text REFERENCES preparations(id),
  conversation_id text REFERENCES conversations(id),
  turn_id text REFERENCES conversation_turn_commands(id),
  cognitive_work_id text REFERENCES cognitive_works(id),
  segment_index integer,
  generation_id text,
  operation text,
  attempt_id text,
  model_requested text,
  model_applied text,
  effort_requested text,
  effort_applied text,
  input_tokens bigint,
  cached_input_tokens bigint,
  output_tokens bigint,
  reasoning_tokens bigint,
  total_tokens bigint,
  provider_requests integer,
  duration_ms integer,
  tariff_version text NOT NULL,
  estimated_cost_usd numeric(20, 10),
  cost_coverage text NOT NULL,
  status text NOT NULL,
  granularity text NOT NULL,
  provider_response_id text,
  idempotency_key text NOT NULL UNIQUE,
  error_category text,
  limits_json jsonb NOT NULL DEFAULT '[]'::jsonb
);

CREATE INDEX IF NOT EXISTS provider_usage_observations_scope_created_idx
  ON provider_usage_observations (lane, scope_id, created_at DESC);

CREATE INDEX IF NOT EXISTS provider_usage_observations_cognitive_work_idx
  ON provider_usage_observations (cognitive_work_id)
  WHERE cognitive_work_id IS NOT NULL;

CREATE INDEX IF NOT EXISTS provider_usage_observations_project_created_idx
  ON provider_usage_observations (project_id, created_at DESC)
  WHERE project_id IS NOT NULL;
```

### admitNoraProposedPublicQuery (extrait)

```typescript
export function admitNoraProposedPublicQuery(input: {
  proposedQuery: string;
  privateMarkers?: string[];
  /**
   * Server-owned public queries already registered for this turn
   * (catalog compositions + explicit exacts). Required for admission.
   */
  registeredPublicQueries?: string[] | null;
}
```

### PersonalRailSettingsMenu.tsx (complet)

```tsx
"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { resolvePersonalSettingsActive } from "@/domains/finops/usage-projection";

const SETTINGS_INTEGRATIONS_HREF = "/settings/integrations";
const SETTINGS_CONSUMPTION_HREF = "/settings/consumption";

function MenuGlyph({ kind }: { kind: "plug" | "chart" }) {
  if (kind === "plug") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 22v-5M9 8V2M15 8V2M7 8h10a2 2 0 0 1 2 2v3a4 4 0 0 1-4 4h-6a4 4 0 0 1-4-4v-3a2 2 0 0 1 2-2Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 19V5M4 19h16M8 17V11M12 17V7M16 17v-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PersonalRailSettingsMenu({ pathname }: { pathname: string }) {
  const menuId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [tooltip, setTooltip] = useState<"integrations" | "consumption" | null>(null);
  const tooltipTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const active = resolvePersonalSettingsActive(pathname);

  const close = useCallback(() => {
    setOpen(false);
    setTooltip(null);
    triggerRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    function onPointer(e: MouseEvent) {
      const t = e.target as Node;
      if (triggerRef.current?.contains(t)) return;
      const panel = document.getElementById(menuId);
      if (panel?.contains(t)) return;
      close();
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointer);
    };
  }, [open, close, menuId]);

  function showTooltip(kind: "integrations" | "consumption") {
    if (tooltipTimer.current) clearTimeout(tooltipTimer.current);
    tooltipTimer.current = setTimeout(() => setTooltip(kind), 1000);
  }

  function hideTooltip() {
    if (tooltipTimer.current) clearTimeout(tooltipTimer.current);
    setTooltip(null);
  }

  return (
    <div className="studio-rail-settings-wrap" data-testid="rail-settings-menu">
      {open ? (
        <div
          id={menuId}
          className="studio-rail-settings-popover"
          role="menu"
          aria-label="Paramètres personnels"
          data-testid="rail-settings-popover"
        >
          {tooltip ? (
            <span className="studio-rail-settings-tooltip" role="tooltip" data-testid="rail-settings-tooltip">
              {tooltip === "integrations" ? "Intégrations" : "Consommation et coûts"}
            </span>
          ) : null}
          <Link
            href={SETTINGS_INTEGRATIONS_HREF}
            className={`studio-rail-settings-icon ${active === "integrations" ? "is-active" : ""}`}
            role="menuitem"
            data-testid="rail-settings-integrations"
            onClick={() => setOpen(false)}
            onMouseEnter={() => showTooltip("integrations")}
            onMouseLeave={hideTooltip}
            onFocus={() => showTooltip("integrations")}
            onBlur={hideTooltip}
            aria-current={active === "integrations" ? "page" : undefined}
          >
            <MenuGlyph kind="plug" />
            <span className="sr-only">Intégrations</span>
          </Link>
          <Link
            href={SETTINGS_CONSUMPTION_HREF}
            className={`studio-rail-settings-icon ${active === "consumption" ? "is-active" : ""}`}
            role="menuitem"
            data-testid="rail-settings-consumption"
            onClick={() => setOpen(false)}
            onMouseEnter={() => showTooltip("consumption")}
            onMouseLeave={hideTooltip}
            onFocus={() => showTooltip("consumption")}
            onBlur={hideTooltip}
            aria-current={active === "consumption" ? "page" : undefined}
          >
            <MenuGlyph kind="chart" />
            <span className="sr-only">Consommation et coûts</span>
          </Link>
        </div>
      ) : null}
      <button
        ref={triggerRef}
        type="button"
        className={`studio-rail-settings-trigger ${open ? "is-open" : ""}`}
        aria-label="Paramètres"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={open ? menuId : undefined}
        data-testid="rail-settings-trigger"
        onClick={() => setOpen((v) => !v)}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7ZM19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.26.6.77 1.03 1.38 1.15.13.03.26.04.39.04H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

export { SETTINGS_CONSUMPTION_HREF, SETTINGS_INTEGRATIONS_HREF };
```

### usage-projection.ts (complet)

```typescript
/**
 * E06 — pure FinOps read projections (no I/O). UNKNOWN ≠ 0.
 */

export const FINOPS_PERIOD_OPTIONS = [7, 30, 90] as const;
export type FinOpsPeriodDays = (typeof FINOPS_PERIOD_OPTIONS)[number];

export type MeasuredValue<T> =
  | { kind: "empty" }
  | { kind: "unknown"; reason?: string }
  | { kind: "known"; value: T }
  | { kind: "partial"; value: T; note?: string };

export function parseFinOpsPeriodDays(raw: string | null | undefined): FinOpsPeriodDays {
  const n = Number(raw);
  if (n === 7 || n === 90) return n;
  return 30;
}

export function periodStartDate(periodDays: FinOpsPeriodDays, now = new Date()): Date {
  const d = new Date(now);
  d.setUTCDate(d.getUTCDate() - periodDays);
  d.setUTCHours(0, 0, 0, 0);
  return d;
}

export type CostRow = {
  estimatedCostUsd: string | null;
  costCoverage: string;
};

export type TokenRow = {
  totalTokens: number | null;
  inputTokens: number | null;
  outputTokens: number | null;
};

export function tokenTotalForRow(row: TokenRow): number | null {
  if (row.totalTokens != null && Number.isFinite(row.totalTokens)) {
    return row.totalTokens;
  }
  const input = row.inputTokens;
  const output = row.outputTokens;
  if (input == null && output == null) return null;
  if (input == null || output == null) return null;
  if (!Number.isFinite(input) || !Number.isFinite(output)) return null;
  return input + output;
}

export function aggregateEstimatedCost(rows: CostRow[]): MeasuredValue<number> {
  if (rows.length === 0) return { kind: "empty" };
  let sum = 0;
  let hasKnown = false;
  let hasUnknown = false;
  for (const r of rows) {
    if (r.costCoverage === "UNKNOWN" || r.estimatedCostUsd == null) {
      hasUnknown = true;
      continue;
    }
    const n = Number(r.estimatedCostUsd);
    if (!Number.isFinite(n)) {
      hasUnknown = true;
      continue;
    }
    sum += n;
    hasKnown = true;
  }
  if (!hasKnown) return { kind: "unknown", reason: "Aucun coût mesuré" };
  if (hasUnknown) {
    return {
      kind: "partial",
      value: sum,
      note: "Certains coûts restent inconnus",
    };
  }
  return { kind: "known", value: sum };
}

export function aggregateTokenTotal(rows: TokenRow[]): MeasuredValue<number> {
  if (rows.length === 0) return { kind: "empty" };
  let sum = 0;
  let hasUnknown = false;
  for (const r of rows) {
    const t = tokenTotalForRow(r);
    if (t == null) {
      hasUnknown = true;
      continue;
    }
    sum += t;
  }
  if (sum === 0 && hasUnknown && rows.length > 0) {
    return { kind: "unknown", reason: "Tokens non recensés" };
  }
  if (hasUnknown) {
    return { kind: "partial", value: sum, note: "Tokens partiellement recensés" };
  }
  return { kind: "known", value: sum };
}

export function computeMeasureCoveragePercent(
  rows: Array<{ costCoverage: string; providerRequests: number | null }>,
): MeasuredValue<number> {
  if (rows.length === 0) return { kind: "empty" };
  const totalReq = rows.reduce((acc, r) => acc + (r.providerRequests ?? 1), 0);
  const measuredReq = rows.reduce((acc, r) => {
    if (r.costCoverage === "KNOWN" || r.costCoverage === "PARTIAL") {
      return acc + (r.providerRequests ?? 1);
    }
    return acc;
  }, 0);
  if (totalReq <= 0) return { kind: "unknown", reason: "Requêtes non observées" };
  const pct = Math.round((measuredReq / totalReq) * 100);
  return { kind: "known", value: Math.min(100, Math.max(0, pct)) };
}

export function formatUsdFr(value: number): string {
  const s = value.toLocaleString("fr-FR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return `${s} $`;
}

export function formatTokenCountFr(value: number): string {
  if (value >= 1_000_000) {
    const m = value / 1_000_000;
    return `${m.toLocaleString("fr-FR", { maximumFractionDigits: 1 })} M`;
  }
  return value.toLocaleString("fr-FR");
}

export function formatIntegerFr(value: number): string {
  return value.toLocaleString("fr-FR");
}

export function formatMeasuredUsd(metric: MeasuredValue<number>): string {
  switch (metric.kind) {
    case "known":
    case "partial":
      return formatUsdFr(metric.value);
    case "unknown":
      return "Inconnu";
    case "empty":
      return "—";
  }
}

export function formatMeasuredTokens(metric: MeasuredValue<number>): string {
  switch (metric.kind) {
    case "known":
    case "partial":
      return formatTokenCountFr(metric.value);
    case "unknown":
      return "—";
    case "empty":
      return "—";
  }
}

export function formatMeasuredPercent(metric: MeasuredValue<number>): string {
  switch (metric.kind) {
    case "known":
      return `${metric.value} %`;
    case "partial":
      return `${metric.value} %`;
    case "unknown":
      return "—";
    case "empty":
      return "—";
  }
}

export function mapCognitiveWorkStatusLabel(status: string | null | undefined): string {
  switch ((status ?? "").toUpperCase()) {
    case "COMPLETE":
      return "Abouti";
    case "OPEN":
    case "RUNNING":
    case "SUSPENDED":
      return "En cours";
    default:
      return "Interrompu";
  }
}

export function resolvePersonalSettingsActive(
  pathname: string,
): "integrations" | "consumption" | null {
  const path = pathname || "/";
  if (path.startsWith("/settings/consumption")) return "consumption";
  if (path.startsWith("/settings/integrations")) return "integrations";
  return null;
}

export function displayModelShort(model: string | null | undefined): string | null {
  if (!model) return null;
  const m = model.toLowerCase();
  if (m.includes("luna")) return "Luna";
  if (m.includes("terra")) return "Terra";
  if (m.includes("sol")) return "Sol";
  const tail = model.split(/[-_/]/).pop();
  return tail ? tail.charAt(0).toUpperCase() + tail.slice(1) : model;
}

export function uniqueModelsLabel(models: Iterable<string | null | undefined>): string {
  const set = new Set<string>();
  for (const raw of models) {
    const d = displayModelShort(raw);
    if (d) set.add(d);
  }
  return [...set].sort().join(" · ") || "—";
}
```

### cognitive-referential.ts (extrait — 51 rows en dépôt)

```typescript
/**
 * ML5 E02 — indicative cognitive guidance matrix (NOT runtime routing).
 * CF-allocation.md §4.1–4.5 — 51 elementary work rows; Nora may depart when context warrants.
 */

import type {
  CognitiveEffort,
  CognitiveModelFamily,
} from "./resource-catalog";

export const COGNITIVE_REFERENTIAL_VERSION =
  "ml5-cognitive-referential-v1-cf-allocation-2026-11-26" as const;

export const COGNITIVE_REFERENTIAL_ROW_COUNT = 51 as const;

export type CognitiveReferentialSection = "4.1" | "4.2" | "4.3" | "4.4" | "4.5";

export type CognitiveGuidanceRow = {
  id: string;
  section: CognitiveReferentialSection;
  /** Travail élémentaire — stable functional label from contract. */
  elementaire: string;
  preferenceFamily: CognitiveModelFamily;
  preferenceEffort: CognitiveEffort;
  /** Qualité attendue / signal d'escalade (guidance only). */
  qualityAndEscalade: string;
};

const ROWS: readonly CognitiveGuidanceRow[] = [
  // §4.1 Compréhension, conversation et organisation
  {
    id: "cog-4.1-01",
    section: "4.1",
    elementaire: "Salutation ou réponse factuelle déjà acquise",
    preferenceFamily: "luna",
    preferenceEffort: "low",
    qualityAndEscalade:
      "Réponse exacte sans orchestration ; ambiguïté utile → Luna M",
  },
  {
    id: "cog-4.1-02",
    section: "4.1",
    elementaire: "Reformuler une demande claire",
    preferenceFamily: "luna",
    preferenceEffort: "low",
    qualityAndEscalade:
      "Fidélité et conservation des contraintes ; plusieurs intentions → Terra M",
  },
  {
    id: "cog-4.1-03",
    section: "4.1",
    elementaire: "Extraire paramètres explicitement fournis",
    preferenceFamily: "luna",
    preferenceEffort: "medium",
    qualityAndEscalade:
      "Exhaustivité, pas d'invention ; ambiguïté déterminante → Terra M",
  },
  {
    id: "cog-4.1-04",
    section: "4.1",
// ... 51 guidance rows in repository ...
    qualityAndEscalade: "Mesures exactes et UNKNOWN ; diagnostic multi-causes → Terra M",
  },
  {
    id: "cog-4.5-12",
    section: "4.5",
    elementaire: "Comparer politiques cognitives sur corpus qualifié",
    preferenceFamily: "terra",
    preferenceEffort: "high",
    qualityAndEscalade:
      "Qualité/coût/latence comparables ; biais ou résultats ambigus → Sol M",
  },
];

const BY_ID = new Map<string, CognitiveGuidanceRow>(
  ROWS.map((row) => [row.id, row]),
);

export const COGNITIVE_GUIDANCE_ROWS: readonly CognitiveGuidanceRow[] = ROWS;

export function getCognitiveGuidanceById(
  id: string,
): CognitiveGuidanceRow | undefined {
  return BY_ID.get(id);
}

/** Compact lines for optional Nora / conductor context (guidance only). */
export function buildCognitiveReferentialCompactSummary(): readonly string[] {
  return ROWS.map(
    (r) =>
      `${r.id}|${r.section}|${r.elementaire}|${r.preferenceFamily} ${r.preferenceEffort}|${r.qualityAndEscalade}`,
  );
}

export const COGNITIVE_REFERENTIAL_COMPACT_SUMMARY =
  buildCognitiveReferentialCompactSummary();
```

### Autres chemins créés au candidat

- src/app/api/finops/summary/route.ts
- src/app/api/finops/works/route.ts
- src/app/api/finops/works/[workId]/route.ts
- src/app/settings/consumption/page.tsx
- src/app/settings/consumption/travaux/[workId]/page.tsx
- src/components/finops/*
- src/domains/finops/usage-read-service.ts
- tests/unit/ml5-cognitive-resources.test.ts
- tests/unit/ml5-e03-usage-accounting.test.ts
- tests/unit/ml5-finops-usage-projection.test.ts
- tests/unit/personal-rail-settings-menu.test.ts

Fichiers modifiés clés : cognitive-policy.ts, nora-adapter.ts, run-nora-cognitive-turn.ts, public-web-registry.ts, public-web-search-frontier.ts, StudioShell.tsx, studio-rail.ts, schema.ts, db-migrate.sh.

---

## 20. Prochaine action Morris

1. Revue ChatGPT du handoff distant
2. Décider G-LIVE-API (enveloppe calibration)
3. Ne pas cutover RECETTE avant calibration/qualification suffisante
4. Arbitrer politique initiale Luna vs Terra vs Sol après preuves

---

## 21. Fake/Real

| Frontière | Niveau |
|---|---|
| Catalogue/tarifs/admission | DETERMINISTIC PROVEN |
| Ledger + estimate | DETERMINISTIC PROVEN |
| FinOps API/UI structure | DETERMINISTIC + code ; browser OBSERVED partiel non formalisé |
| WEB Option B admit | DETERMINISTIC PROVEN |
| WEB LIVE / search provider | NOT RUN (gated) |
| Multi-model LIVE reallocation | NOT RUN (gated / uncalibrated) |
| OpenAI Responses calibration | NOT RUN |
