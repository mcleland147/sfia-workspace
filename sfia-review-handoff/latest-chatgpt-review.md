# SFIA Studio Next — ML5 Continuation — Review Pack FULL

- **Date (UTC):** 2026-11-26T11:20:44Z
- **Cycle:** 8 — Delivery / continuation CRITICAL
- **Branche:** sfia/next-ml5-integrated-delivery-20261123
- **HEAD initial continuation:** 6092785e548f96ec7fbdcbcafc0817531feedac3
- **HEAD final:** 722368d5564ba0d2818f09f5dabbe78c9dfb1409
- **Candidat code antérieur:** 9678b8b31ae8296469e51f4b10b1ec4189defb45
- **Handoff précédent régularisé:** 2ef30281 (était INCOMPLETE — ce pack fournit les contenus manquants + diffs continuation)
- **Base main:** 997897fd7cf914771e7d08e8030dc7123fab7d25
- **Programme:** R5 IN PROGRESS / ML5 OPEN / NO RELEASE / NOT ADOPTED

---

## 1. Mandat et gates

GO continuation DEV + diagnostic isolation OpenAI. Mutation RECETTE **non appliquée** (intervention préparée).

| Gate | Statut |
|---|---|
| Continuation DEV | CONSUMED |
| Mutation secret/config RECETTE | NOT CONSUMED — draft intervention |
| G-LIVE-API | NOT CONSUMED — proposition campagne préparée |
| G-WEB-PUBLIC / MIXED | NOT CONSUMED |
| G-RECETTE | NOT CONSUMED |
| G-GIT push projet | NOT CONSUMED |
| Handoff L3 | IN PROGRESS |

---

## 2. Git Truth

| Champ | Valeur |
|---|---|
| Worktree | /Users/morris/Projects/sfia-wt-next-ml5-20261123 |
| Branche | sfia/next-ml5-integrated-delivery-20261123 |
| HEAD final | 722368d5564ba0d2818f09f5dabbe78c9dfb1409 |
| RECETTE :3200 | non mutée |

### Diff stat 6092785e..HEAD

```
 .../construction/delivery-history.md               |   9 +
 .../components/finops/FinOpsConsumptionPanel.tsx   |  82 +++++---
 .../components/finops/FinOpsWorkDetailPanel.tsx    |  42 ++++
 .../src/components/finops/finops-consumption.css   |  92 ++++++++
 .../src/domains/conversation/cognitive-policy.ts   |  62 +++++-
 .../cognitive-resources/cognitive-referential.ts   |  34 ++-
 .../conversation/cognitive-resources/index.ts      |   2 +
 .../web/src/domains/conversation/nora-adapter.ts   |  36 ++++
 .../web/src/domains/conversation/provider-usage.ts |  96 ++++++++-
 .../src/domains/conversation/usage-accounting.ts   | 231 ++++++++++++++++++---
 .../web/src/domains/finops/usage-projection.ts     | 112 +++++++++-
 .../web/src/domains/finops/usage-read-service.ts   |   9 +-
 .../web/src/lib/openai-lane-guard.ts               | 101 +++++++++
 .../unit/ml5-c16-cognitive-integration.test.ts     |  38 ++++
 .../web/tests/unit/ml5-cognitive-resources.test.ts |  77 ++++++-
 .../tests/unit/ml5-e03-usage-accounting.test.ts    |  94 +++++++++
 .../tests/unit/ml5-finops-usage-projection.test.ts |  46 ++++
 .../web/tests/unit/ml5-residual-abcd.test.ts       |  11 +-
 .../web/tests/unit/openai-lane-guard.test.ts       |  68 ++++++
 .../tests/unit/personal-rail-settings-menu.test.ts |  10 +
 20 files changed, 1156 insertions(+), 96 deletions(-)

```

---

## 3. Séquence 1 — Isolation OpenAI

### Cause racine
Une seule empreinte OPENAI_API_KEY inventoriée: sha256:ab6bbec84ba272ed (12 fichiers). RECETTE source ~/.config/sfia-studio-next/recette/.env.local — même valeur que DEV. Aucune seconde clé sur disque.

### Correction DEV
Module openai-lane-guard.ts fail-closed; branché nora-adapter; DEV env (hors Git) SFIA_OPENAI_EXPECTED_KEY_FP.

### Intervention RECETTE
Préparée, non exécutée — nécessite GO Morris.

### Tests
openai-lane-guard.test.ts — 6 PASS.

---

## 4–9. Synthèse S2–S7

FinOps per-request/aggregate + tests 150k×2; allocation blurb+fallback; WEB Option B LIVE=0; UX axes/timeline; residual-abcd aligned; calibration PENDING GO.

---

## 10. Matrice E00–E10

| Étape | État |
|---|---|
| E00–E02 | VERIFIED |
| E03 | VERIFIED / PARTIAL collector exhaustiveness |
| E04 | BEHAVIOR PROVEN deterministic |
| E05 | DETERMINISTIC Option B; LIVE BLOCKED |
| E06 | IMPLEMENTED + UX fixes; F2 deferred |
| E07 | unit suites PASS |
| E08 | BLOCKED G-LIVE-API |
| E09 | NOT RUN LIVE |
| E10 | IN PROGRESS |

---

## 11. Verdict

**ML5 INTEGRATED COGNITIVE CONVERGENCE — PRE-CALIBRATION CONSOLIDATION QUALIFIED — LIVE GATE PENDING.**

---

## 12. Prochaine action Morris

1. GO intervention RECETTE OpenAI OU calibration DEV-only explicite.
2. GO G-LIVE-API sur enveloppe proposée.
3. Pas de cutover RECETTE candidat prématuré.

---

## 13. Contenu fichiers (régularisation + continuation)


#### `projects/sfia-studio-next/web/src/lib/openai-lane-guard.ts`

```ts
/**
 * ENV-01 — OpenAI key / lane isolation (fail-closed).
 *
 * Never log or return the raw key. Fingerprints are SHA-256 hex truncated to 16 chars.
 * A missing critical config refuses the LIVE path — no cross-lane fallback.
 */

import { createHash } from "node:crypto";

export type OpenAiLaneGuardResult =
  | { ok: true; lane: string; keyFingerprint: string }
  | {
      ok: false;
      lane: string;
      reasonCode:
        | "STUDIO_LANE_MISSING"
        | "OPENAI_KEY_MISSING"
        | "OPENAI_KEY_FINGERPRINT_MISMATCH"
        | "OPENAI_KEY_FORBIDDEN_PEER"
        | "OPENAI_KEY_EMPTY";
      reason: string;
    };

/** Non-secret fingerprint for comparison / observability. */
export function openAiKeyFingerprint(key: string): string {
  return createHash("sha256").update(key, "utf8").digest("hex").slice(0, 16);
}

function studioLane(env: NodeJS.ProcessEnv = process.env): string {
  return (env.STUDIO_LANE ?? "").trim().toUpperCase();
}

/**
 * Assert the process OpenAI key belongs to this lane.
 *
 * Env (non-secret):
 * - `SFIA_OPENAI_EXPECTED_KEY_FP` — must match current key fingerprint when set
 * - `SFIA_OPENAI_FORBIDDEN_KEY_FP` — comma-separated peer fingerprints that must NOT match
 *   (e.g. RECETTE forbids the DEV key fingerprint once a distinct RECETTE key is in place)
 */
export function assertOpenAiKeyForLane(
  env: NodeJS.ProcessEnv = process.env,
): OpenAiLaneGuardResult {
  const lane = studioLane(env);
  if (!lane || lane === "UNKNOWN") {
    return {
      ok: false,
      lane: lane || "UNKNOWN",
      reasonCode: "STUDIO_LANE_MISSING",
      reason: "STUDIO_LANE requis pour l'admission OpenAI (fail-closed)",
    };
  }

  const key = (env.OPENAI_API_KEY ?? "").trim();
  if (!key) {
    return {
      ok: false,
      lane,
      reasonCode: "OPENAI_KEY_MISSING",
      reason: `OPENAI_API_KEY absent pour lane ${lane} — aucun fallback inter-lanes`,
    };
  }

  const keyFingerprint = openAiKeyFingerprint(key);
  if (!keyFingerprint) {
    return {
      ok: false,
      lane,
      reasonCode: "OPENAI_KEY_EMPTY",
      reason: "OPENAI_API_KEY vide après trim",
    };
  }

  const expected = (env.SFIA_OPENAI_EXPECTED_KEY_FP ?? "").trim().toLowerCase();
  if (expected && expected !== keyFingerprint) {
    return {
      ok: false,
      lane,
      reasonCode: "OPENAI_KEY_FINGERPRINT_MISMATCH",
      reason: `Empreinte OpenAI hors politique pour lane ${lane}`,
    };
  }

  const forbiddenRaw = (env.SFIA_OPENAI_FORBIDDEN_KEY_FP ?? "").trim().toLowerCase();
  if (forbiddenRaw) {
    const forbidden = forbiddenRaw
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    if (forbidden.includes(keyFingerprint)) {
      return {
        ok: false,
        lane,
        reasonCode: "OPENAI_KEY_FORBIDDEN_PEER",
        reason: `Clé OpenAI interdite pour lane ${lane} (empreinte pair / contamination)`,
      };
    }
  }

  return { ok: true, lane, keyFingerprint };
}

```

#### `projects/sfia-studio-next/web/tests/unit/openai-lane-guard.test.ts`

```ts
import { describe, expect, it } from "vitest";
import {
  assertOpenAiKeyForLane,
  openAiKeyFingerprint,
} from "@/lib/openai-lane-guard";

describe("openai-lane-guard", () => {
  it("fingerprints stably without exposing the key", () => {
    const fp = openAiKeyFingerprint("sk-test-key-aaaaaaaaaaaaaaaa");
    expect(fp).toHaveLength(16);
    expect(fp).toMatch(/^[0-9a-f]{16}$/);
  });

  it("refuses missing STUDIO_LANE", () => {
    const r = assertOpenAiKeyForLane({
      OPENAI_API_KEY: "sk-test-key-aaaaaaaaaaaaaaaa",
    } as NodeJS.ProcessEnv);
    expect(r.ok).toBe(false);
    if (r.ok) throw new Error("expected fail");
    expect(r.reasonCode).toBe("STUDIO_LANE_MISSING");
  });

  it("refuses missing key", () => {
    const r = assertOpenAiKeyForLane({
      STUDIO_LANE: "DEV",
    } as NodeJS.ProcessEnv);
    expect(r.ok).toBe(false);
    if (r.ok) throw new Error("expected fail");
    expect(r.reasonCode).toBe("OPENAI_KEY_MISSING");
  });

  it("accepts matching expected fingerprint", () => {
    const key = "sk-test-key-bbbbbbbbbbbbbbbb";
    const fp = openAiKeyFingerprint(key);
    const r = assertOpenAiKeyForLane({
      STUDIO_LANE: "DEV",
      OPENAI_API_KEY: key,
      SFIA_OPENAI_EXPECTED_KEY_FP: fp,
    } as NodeJS.ProcessEnv);
    expect(r.ok).toBe(true);
    if (!r.ok) throw new Error(r.reason);
    expect(r.keyFingerprint).toBe(fp);
  });

  it("refuses forbidden peer fingerprint (cross-lane contamination)", () => {
    const key = "sk-shared-contaminated-key-xxxx";
    const fp = openAiKeyFingerprint(key);
    const r = assertOpenAiKeyForLane({
      STUDIO_LANE: "RECETTE",
      OPENAI_API_KEY: key,
      SFIA_OPENAI_FORBIDDEN_KEY_FP: fp,
    } as NodeJS.ProcessEnv);
    expect(r.ok).toBe(false);
    if (r.ok) throw new Error("expected fail");
    expect(r.reasonCode).toBe("OPENAI_KEY_FORBIDDEN_PEER");
  });

  it("refuses expected fingerprint mismatch", () => {
    const r = assertOpenAiKeyForLane({
      STUDIO_LANE: "DEV",
      OPENAI_API_KEY: "sk-test-key-cccccccccccccccc",
      SFIA_OPENAI_EXPECTED_KEY_FP: "deadbeefdeadbeef",
    } as NodeJS.ProcessEnv);
    expect(r.ok).toBe(false);
    if (r.ok) throw new Error("expected fail");
    expect(r.reasonCode).toBe("OPENAI_KEY_FINGERPRINT_MISMATCH");
  });
});

```

#### `projects/sfia-studio-next/web/src/domains/conversation/cognitive-resources/resource-catalog.ts`

```ts
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

#### `projects/sfia-studio-next/web/src/domains/conversation/cognitive-resources/resource-admission.ts`

```ts
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

#### `projects/sfia-studio-next/web/src/domains/conversation/cognitive-resources/tariff-catalog.ts`

```ts
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

#### `projects/sfia-studio-next/web/src/domains/conversation/cognitive-resources/cognitive-referential.ts`

```ts
/**
 * ML5 E02 — indicative cognitive guidance matrix (NOT runtime routing).
 * CF-allocation.md §4.1–4.5 — 51 elementary work rows; Nora may depart when context warrants.
 */

import {
  COGNITIVE_RESOURCE_CATALOG,
  type CognitiveEffort,
  type CognitiveModelFamily,
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
    elementaire: "Qualification simple à partir du contexte",
    preferenceFamily: "luna",
    preferenceEffort: "medium",
    qualityAndEscalade:
      "Objectif, contraintes et résultat corrects ; incertitude conséquente → Terra M",
  },
  {
    id: "cog-4.1-05",
    section: "4.1",
    elementaire: "Qualification multi-intentions, dépendances courantes",
    preferenceFamily: "terra",
    preferenceEffort: "medium",
    qualityAndEscalade:
      "Intentions distinctes, ordre et droits ; contradiction structurante → Sol M",
  },
  {
    id: "cog-4.1-06",
    section: "4.1",
    elementaire: "Qualification d'une demande critique/ambiguë à fort impact",
    preferenceFamily: "sol",
    preferenceEffort: "medium",
    qualityAndEscalade:
      "Ambiguïtés et risques essentiels identifiés ; difficulté persistante → Sol H",
  },
  {
    id: "cog-4.1-07",
    section: "4.1",
    elementaire: "Construire plan d'investigation ciblé",
    preferenceFamily: "terra",
    preferenceEffort: "medium",
    qualityAndEscalade:
      "Questions déterminantes et sources pertinentes ; dépendances complexes → Sol M",
  },
  {
    id: "cog-4.1-08",
    section: "4.1",
    elementaire: "Identifier manque d'information et demander clarification",
    preferenceFamily: "terra",
    preferenceEffort: "medium",
    qualityAndEscalade:
      "Question utile, ne pas redemander l'acquis ; ambiguïté à fort risque → Sol M",
  },
  {
    id: "cog-4.1-09",
    section: "4.1",
    elementaire: "Restituer un résultat déjà qualifié",
    preferenceFamily: "luna",
    preferenceEffort: "medium",
    qualityAndEscalade:
      "Pas de perte de réserve ni changement de sens ; synthèse nouvelle → Terra M",
  },
  // §4.2 Documentation, connaissance et Git
  {
    id: "cog-4.2-01",
    section: "4.2",
    elementaire: "Inventorier un périmètre de fichiers connu",
    preferenceFamily: "luna",
    preferenceEffort: "low",
    qualityAndEscalade:
      "Couverture et références ; périmètre sémantique incertain → Terra M",
  },
  {
    id: "cog-4.2-02",
    section: "4.2",
    elementaire: "Rechercher une référence ou passage connu",
    preferenceFamily: "luna",
    preferenceEffort: "low",
    qualityAndEscalade: "Référence exacte ; ambiguïté d'identité → Luna M",
  },
  {
    id: "cog-4.2-03",
    section: "4.2",
    elementaire: "Lire une source et extraire faits explicites",
    preferenceFamily: "luna",
    preferenceEffort: "medium",
    qualityAndEscalade:
      "Citations, versions, distinction fait/hypothèse ; interprétation → Terra M",
  },
  {
    id: "cog-4.2-04",
    section: "4.2",
    elementaire: "Identifier une version/branche applicable à partir de règles connues",
    preferenceFamily: "luna",
    preferenceEffort: "medium",
    qualityAndEscalade: "Référence exacte ; hiérarchie conflictuelle → Terra H",
  },
  {
    id: "cog-4.2-05",
    section: "4.2",
    elementaire: "Extraire contraintes d'un corpus cohérent",
    preferenceFamily: "luna",
    preferenceEffort: "medium",
    qualityAndEscalade:
      "Couverture, pas de faux CONSULTED ; contraintes interdépendantes → Terra M",
  },
  {
    id: "cog-4.2-06",
    section: "4.2",
    elementaire: "Synthétiser plusieurs documents cohérents",
    preferenceFamily: "terra",
    preferenceEffort: "medium",
    qualityAndEscalade:
      "Fidélité, références, pas d'omission ; complexité transverse → Terra H",
  },
  {
    id: "cog-4.2-07",
    section: "4.2",
    elementaire: "Confronter versions ou exigences contradictoires",
    preferenceFamily: "terra",
    preferenceEffort: "high",
    qualityAndEscalade:
      "Contradictions substantielles et provenance ; contradiction structurante → Sol H",
  },
  {
    id: "cog-4.2-08",
    section: "4.2",
    elementaire: "Reconstruire une trajectoire multi-sources",
    preferenceFamily: "terra",
    preferenceEffort: "high",
    qualityAndEscalade: "Historique et états distincts ; arbitrage complexe → Sol M",
  },
  {
    id: "cog-4.2-09",
    section: "4.2",
    elementaire: "Réconcilier vision, décisions, spécifications et réalité",
    preferenceFamily: "sol",
    preferenceEffort: "high",
    qualityAndEscalade:
      "Impacts, autorité, limites probatoires ; effort supérieur seulement si utile",
  },
  {
    id: "cog-4.2-10",
    section: "4.2",
    elementaire: "Capitaliser une connaissance explicitement établie",
    preferenceFamily: "luna",
    preferenceEffort: "medium",
    qualityAndEscalade:
      "Provenance, portée et statut conservés ; qualification nouvelle → Terra M",
  },
  // §4.3 Recherche WEB
  {
    id: "cog-4.3-01",
    section: "4.3",
    elementaire: "Retrouver une information publique précise",
    preferenceFamily: "luna",
    preferenceEffort: "low",
    qualityAndEscalade: "Résultat source-backed ; recherche ambiguë → Luna M",
  },
  {
    id: "cog-4.3-02",
    section: "4.3",
    elementaire: "Sélectionner une documentation officielle applicable",
    preferenceFamily: "luna",
    preferenceEffort: "medium",
    qualityAndEscalade: "Date/version/éditeur corrects ; variantes conflictuelles → Terra M",
  },
  {
    id: "cog-4.3-03",
    section: "4.3",
    elementaire: "Extraire des faits d'une page réellement lue",
    preferenceFamily: "luna",
    preferenceEffort: "medium",
    qualityAndEscalade:
      "Citation et couverture honnêtes ; interprétation spécialisée → Terra M",
  },
  {
    id: "cog-4.3-04",
    section: "4.3",
    elementaire: "Inventorier caractéristiques de plusieurs solutions",
    preferenceFamily: "luna",
    preferenceEffort: "medium",
    qualityAndEscalade:
      "Données comparables, inconnues visibles ; comparaison contextualisée → Terra M",
  },
  {
    id: "cog-4.3-05",
    section: "4.3",
    elementaire: "Comparer solutions selon critères explicites",
    preferenceFamily: "terra",
    preferenceEffort: "medium",
    qualityAndEscalade:
      "Critères, compromis, limites ; forte interdépendance → Terra H",
  },
  {
    id: "cog-4.3-06",
    section: "4.3",
    elementaire: "Vérifier fraîcheur/applicabilité face à divergences",
    preferenceFamily: "terra",
    preferenceEffort: "high",
    qualityAndEscalade:
      "Confrontation dates, versions et sources ; contradiction critique → Sol H",
  },
  {
    id: "cog-4.3-07",
    section: "4.3",
    elementaire:
      "Évaluer compatibilité d'une solution externe avec architecture privée",
    preferenceFamily: "sol",
    preferenceEffort: "medium",
    qualityAndEscalade:
      "Raisonnement intégré dans D3 sans fuite ; interdépendances non résolues → Sol H",
  },
  {
    id: "cog-4.3-08",
    section: "4.3",
    elementaire: "Résoudre contradiction WEB déterminante pour un contrat critique",
    preferenceFamily: "sol",
    preferenceEffort: "high",
    qualityAndEscalade:
      "Justification sourcée, incertitude explicite ; aucun effort ne remplace source manquante",
  },
  {
    id: "cog-4.3-09",
    section: "4.3",
    elementaire: "Reformuler une recherche en termes publics",
    preferenceFamily: "luna",
    preferenceEffort: "medium",
    qualityAndEscalade:
      "Utiliser uniquement données admises ; si provenance incertaine → refus/reformulation/autorisation, pas escalade de modèle comme barrière",
  },
  // §4.4 Code, architecture et contrat de réalisation
  {
    id: "cog-4.4-01",
    section: "4.4",
    elementaire: "Repérer chemins/symboles pertinents",
    preferenceFamily: "luna",
    preferenceEffort: "medium",
    qualityAndEscalade: "Identités réelles ; responsabilité non évidente → Terra M",
  },
  {
    id: "cog-4.4-02",
    section: "4.4",
    elementaire: "Comprendre une fonction isolée",
    preferenceFamily: "terra",
    preferenceEffort: "low",
    qualityAndEscalade: "Entrées/sorties/erreurs ; dépendances → Terra M",
  },
  {
    id: "cog-4.4-03",
    section: "4.4",
    elementaire: "Reconstituer un flux applicatif",
    preferenceFamily: "terra",
    preferenceEffort: "medium",
    qualityAndEscalade:
      "Étapes, propriétaires et contrats ; concurrence → Terra H",
  },
  {
    id: "cog-4.4-04",
    section: "4.4",
    elementaire: "Identifier blast radius local",
    preferenceFamily: "terra",
    preferenceEffort: "medium",
    qualityAndEscalade: "Impacts et tests ; dépendances transverses → Terra H",
  },
  {
    id: "cog-4.4-05",
    section: "4.4",
    elementaire: "Analyser tests et assertions existants",
    preferenceFamily: "terra",
    preferenceEffort: "medium",
    qualityAndEscalade: "Preuve vs déclaration ; oracle ambigu → Terra H",
  },
  {
    id: "cog-4.4-06",
    section: "4.4",
    elementaire: "Comparer code et conception",
    preferenceFamily: "terra",
    preferenceEffort: "high",
    qualityAndEscalade: "Écart exact, preuve et portée ; contradiction critique → Sol H",
  },
  {
    id: "cog-4.4-07",
    section: "4.4",
    elementaire: "Diagnostiquer anomalie systémique/concurrence",
    preferenceFamily: "sol",
    preferenceEffort: "high",
    qualityAndEscalade:
      "Causes étayées, alternatives, invariants ; ne pas inventer de preuve",
  },
  {
    id: "cog-4.4-08",
    section: "4.4",
    elementaire: "Concevoir une évolution locale stabilisée",
    preferenceFamily: "terra",
    preferenceEffort: "high",
    qualityAndEscalade: "Contrat, erreurs, reprise, tests ; pivot structurant → Sol H",
  },
  {
    id: "cog-4.4-09",
    section: "4.4",
    elementaire: "Préparer contrat Cursor sur conception stabilisée",
    preferenceFamily: "terra",
    preferenceEffort: "high",
    qualityAndEscalade:
      "Instruction complète, sources, IN/OUT, gates ; arbitrage critique → Sol H",
  },
  {
    id: "cog-4.4-10",
    section: "4.4",
    elementaire: "Examiner sécurité/autorité/persistance d'un contrat critique",
    preferenceFamily: "sol",
    preferenceEffort: "medium",
    qualityAndEscalade:
      "Invariants, permissions, concurrence ; contradiction résiduelle → Sol H",
  },
  {
    id: "cog-4.4-11",
    section: "4.4",
    elementaire: "Mettre en forme un contrat déjà qualifié",
    preferenceFamily: "luna",
    preferenceEffort: "medium",
    qualityAndEscalade:
      "Préserver intégralité et sémantique ; changement de fond → Terra H",
  },
  // §4.5 Production, pilotage et opérations internes
  {
    id: "cog-4.5-01",
    section: "4.5",
    elementaire: "Correction rédactionnelle ou formatage",
    preferenceFamily: "luna",
    preferenceEffort: "low",
    qualityAndEscalade: "Aucune modification non demandée ; ambiguïté → Luna M",
  },
  {
    id: "cog-4.5-02",
    section: "4.5",
    elementaire: "Révision ciblée de faits déjà qualifiés",
    preferenceFamily: "luna",
    preferenceEffort: "medium",
    qualityAndEscalade: "Diff exact, reste préservé ; conséquences croisées → Terra M",
  },
  {
    id: "cog-4.5-03",
    section: "4.5",
    elementaire: "Rédiger à partir d'acquis consolidés",
    preferenceFamily: "luna",
    preferenceEffort: "medium",
    qualityAndEscalade:
      "Exhaustivité et citations ; synthèse analytique nouvelle → Terra M",
  },
  {
    id: "cog-4.5-04",
    section: "4.5",
    elementaire: "Produire une conception fonctionnelle",
    preferenceFamily: "terra",
    preferenceEffort: "high",
    qualityAndEscalade:
      "Cohérence, cas négatifs, qualité ; arbitrage structurant → Sol H",
  },
  {
    id: "cog-4.5-05",
    section: "4.5",
    elementaire: "Résumer un avancement technique factuel",
    preferenceFamily: "luna",
    preferenceEffort: "medium",
    qualityAndEscalade: "Statuts et provenance exacts ; divergences → Terra M",
  },
  {
    id: "cog-4.5-06",
    section: "4.5",
    elementaire: "Proposer mise à jour de trajectoire",
    preferenceFamily: "terra",
    preferenceEffort: "medium",
    qualityAndEscalade:
      "Dépendances, état, suite ; risque de promotion ou contradiction critique → Sol M",
  },
  {
    id: "cog-4.5-07",
    section: "4.5",
    elementaire: "Préparer un arbitrage et ses options",
    preferenceFamily: "terra",
    preferenceEffort: "high",
    qualityAndEscalade:
      "Options, impacts, réserves ; choix architecture/sécurité complexe → Sol H",
  },
  {
    id: "cog-4.5-08",
    section: "4.5",
    elementaire: "Analyser dossier de réalisation Cursor",
    preferenceFamily: "terra",
    preferenceEffort: "high",
    qualityAndEscalade: "Critères, preuves, lacunes ; contradiction critique → Sol H",
  },
  {
    id: "cog-4.5-09",
    section: "4.5",
    elementaire: "Consolider une restitution déjà analysée",
    preferenceFamily: "luna",
    preferenceEffort: "medium",
    qualityAndEscalade:
      "Avis consultatif intact et réserves visibles ; analyse nouvelle → Terra M",
  },
  {
    id: "cog-4.5-10",
    section: "4.5",
    elementaire: "Contrôler continuité d'une production/reprise",
    preferenceFamily: "terra",
    preferenceEffort: "medium",
    qualityAndEscalade: "Version, acquis, autorité ; incohérence structurelle → Sol M",
  },
  {
    id: "cog-4.5-11",
    section: "4.5",
    elementaire: "Extraire métadonnées d'observabilité et expliquer un coût",
    preferenceFamily: "luna",
    preferenceEffort: "medium",
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

/** Max injected catalog blurb (chars) — full matrix is never inlined in prompts. */
export const COGNITIVE_GUIDANCE_CATALOG_BLURB_MAX_CHARS = 2_400 as const;

/**
 * Short Nora-facing catalog + constraints (not the 51-row matrix).
 * Detailed per-row guidance: server referential by id; compact lines on demand only.
 */
export function buildCognitiveGuidanceCatalogBlurb(): string {
  const models = COGNITIVE_RESOURCE_CATALOG.map((e) => {
    const band =
      e.modelId === "gpt-6.2-sol"
        ? "efforts opérationnels admis: low|medium|high (pré-calibration)"
        : "candidat documenté — admission opérationnelle après calibration Morris";
    return `- ${e.modelId} (${e.family}): ${e.positioning}; ${band}.`;
  }).join("\n");
  return [
    "RESSOURCES COGNITIVES (indicatif — Studio tranche réellement l'admission) :",
    models,
    `- Référentiel élémentaire : ${COGNITIVE_REFERENTIAL_ROW_COUNT} lignes CF §4.1–4.5 (guidance seulement, pas un moteur de routage).`,
    "- Tu peux t'en inspirer pour cognitiveProfileHint / effort; Nora peut s'écarter si le contexte l'exige.",
    "- Ne demande pas la matrice complète dans replyDraft : le détail d'une ligne est disponible côté serveur (getCognitiveGuidanceById / résumé compact à la demande du conducteur).",
    "- Défaut opérationnel pré-calibration : Sol medium si le couple proposé n'est pas admis.",
  ].join("\n");
}
```

#### `projects/sfia-studio-next/web/src/domains/conversation/usage-accounting.ts`

```ts
import { createHash, randomUUID } from "node:crypto";
import { db } from "@/db/client";
import { providerUsageObservations } from "@/db/schema";
import type { CognitiveModelId } from "./cognitive-resources/resource-catalog";
import {
  LONG_CONTEXT_INPUT_THRESHOLD_TOKENS,
  TARIFF_CATALOG_VERSION,
  effectiveTariffRates,
  getTariffEntry,
} from "./cognitive-resources/tariff-catalog";
import {
  extractProviderUsageFromRunResult,
  type ProviderRequestUsageEntry,
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
  lane?: string | null;
  scopeId?: string | null;
  projectId?: string | null;
  preparationId?: string | null;
  cognitiveWorkId?: string | null;
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
    "finops-obs-v2",
    input.granularity,
    input.lane?.trim() ?? "",
    input.scopeId?.trim() ?? "",
    input.projectId?.trim() ?? "",
    input.preparationId?.trim() ?? "",
    input.cognitiveWorkId?.trim() ?? "",
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

export type EstimateCostUsdOptions = {
  tariffVersion?: string;
  /**
   * When false, long-context multipliers are never applied (multi-request run aggregate).
   * Default true — tier follows this row's input token count as a single provider request.
   */
  applyLongContextTier?: boolean;
  /** Model used for tariff was requested but applied model is unverified. */
  modelAppliedUnverified?: boolean;
};

function normalizeEstimateOptions(
  options?: EstimateCostUsdOptions | string,
): EstimateCostUsdOptions {
  if (typeof options === "string") return { tariffVersion: options };
  return options ?? {};
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
  options?: EstimateCostUsdOptions | string,
): CostEstimate {
  const {
    tariffVersion = TARIFF_CATALOG_VERSION,
    applyLongContextTier = true,
    modelAppliedUnverified = false,
  } = normalizeEstimateOptions(options);
  const limits: string[] = [];
  if (modelAppliedUnverified) {
    limits.push("MODEL_APPLIED_UNVERIFIED");
  }
  if (!model || !isCognitiveModelId(model)) {
    return {
      estimatedCostUsd: null,
      costCoverage: "UNKNOWN",
      tariffVersion,
      limits: [...limits, "MODEL_TARIFF_UNKNOWN"],
    };
  }
  const { inputTokens, outputTokens, cachedInputTokens } = usage;
  if (inputTokens == null || outputTokens == null) {
    return {
      estimatedCostUsd: null,
      costCoverage: "UNKNOWN",
      tariffVersion,
      limits: [...limits, "TOKEN_AGGREGATES_INCOMPLETE"],
    };
  }

  const entry = getTariffEntry(model);
  const rates =
    applyLongContextTier
      ? effectiveTariffRates(model, inputTokens)
      : entry?.shortContextStandard;
  if (!rates) {
    return {
      estimatedCostUsd: null,
      costCoverage: "UNKNOWN",
      tariffVersion,
      limits: [...limits, "TARIFF_RATES_UNAVAILABLE"],
    };
  }
  if (
    !applyLongContextTier &&
    inputTokens > LONG_CONTEXT_INPUT_THRESHOLD_TOKENS
  ) {
    limits.push("LONG_CONTEXT_TIER_SUPPRESSED_AGGREGATE");
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

  if (modelAppliedUnverified && costCoverage === "KNOWN") {
    costCoverage = "PARTIAL";
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

function resolveTariffModel(input: Pick<
  ProviderUsageObservationInput,
  "modelApplied" | "modelRequested"
>): { model: string | null; modelAppliedUnverified: boolean } {
  if (input.modelApplied?.trim()) {
    return { model: input.modelApplied.trim(), modelAppliedUnverified: false };
  }
  if (input.modelRequested?.trim()) {
    return { model: input.modelRequested.trim(), modelAppliedUnverified: true };
  }
  return { model: null, modelAppliedUnverified: false };
}

function mergeCostCoverage(
  a: CostCoverage,
  b: CostCoverage,
): CostCoverage {
  if (a === "UNKNOWN" || b === "UNKNOWN") return "UNKNOWN";
  if (a === "PARTIAL" || b === "PARTIAL") return "PARTIAL";
  return "KNOWN";
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
  const { model: modelForTariff, modelAppliedUnverified } = resolveTariffModel(input);
  const usageSlice = {
    inputTokens: input.inputTokens ?? null,
    outputTokens: input.outputTokens ?? null,
    cachedInputTokens: input.cachedInputTokens ?? null,
  };
  const estimateOpts: EstimateCostUsdOptions = {
    tariffVersion: input.tariffVersion ?? TARIFF_CATALOG_VERSION,
    modelAppliedUnverified,
    applyLongContextTier: input.granularity !== "GENERATION_AGGREGATE",
  };
  const cost =
    input.costCoverage != null && input.estimatedCostUsd !== undefined
      ? {
          estimatedCostUsd: input.estimatedCostUsd,
          costCoverage: mergeCostCoverage(
            input.costCoverage,
            modelAppliedUnverified ? "PARTIAL" : input.costCoverage,
          ),
          tariffVersion: estimateOpts.tariffVersion ?? TARIFF_CATALOG_VERSION,
          limits: [
            ...(input.limits ?? []),
            ...(modelAppliedUnverified ? ["MODEL_APPLIED_UNVERIFIED"] : []),
          ],
        }
      : estimateCostUsd(usageSlice, modelForTariff, estimateOpts);

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
function idempotencyScope(input: NoraProviderUsageHookInput) {
  const lane =
    process.env.STUDIO_LANE?.trim().toUpperCase() || "UNKNOWN";
  return {
    lane,
    scopeId: input.scopeId,
    projectId: input.projectId,
    preparationId: input.preparationId,
    cognitiveWorkId: input.cognitiveWorkId,
  };
}

function observationCommon(input: NoraProviderUsageHookInput) {
  return {
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
    durationMs: input.durationMs,
    status: input.status,
    providerResponseId: input.providerResponseId,
    errorCategory: input.errorCategory,
  };
}

async function recordPerRequestUsages(
  input: NoraProviderUsageHookInput,
  entries: ProviderRequestUsageEntry[],
  baseLimits: string[],
): Promise<RecordProviderUsageObservationResult> {
  const scope = idempotencyScope(input);
  let last: RecordProviderUsageObservationResult = {
    inserted: false,
    id: "",
  };
  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i]!;
    const callOrdinal = input.callOrdinal ?? i;
    const idempotencyKey = buildIdempotencyKey({
      ...scope,
      granularity: "REQUEST",
      operation: input.operation,
      attemptId: input.attemptId,
      generationId: input.generationId,
      segmentIndex: input.segmentIndex,
      providerResponseId: input.providerResponseId,
      callOrdinal,
    });
    last = await recordProviderUsageObservation({
      ...observationCommon(input),
      inputTokens: entry.inputTokens,
      outputTokens: entry.outputTokens,
      totalTokens: entry.totalTokens,
      cachedInputTokens: entry.cachedInputTokens,
      reasoningTokens: entry.reasoningTokens,
      providerRequests: 1,
      granularity: "REQUEST",
      idempotencyKey,
      limits: baseLimits,
    });
  }
  return last;
}

export async function recordNoraProviderUsageFromRunResult(
  input: NoraProviderUsageHookInput,
): Promise<RecordProviderUsageObservationResult> {
  const snapshot = extractProviderUsageFromRunResult(input.runResult);
  const baseLimits = [
    ...snapshot.limits,
    ...(snapshot.provenance === "UNAVAILABLE" ? ["PROVIDER_USAGE_UNAVAILABLE"] : []),
  ];
  const forcedGranularity = input.granularity;

  const perRequest = snapshot.requestUsageEntries;
  if (perRequest && perRequest.length > 0 && forcedGranularity !== "GENERATION_AGGREGATE") {
    return recordPerRequestUsages(input, perRequest, baseLimits);
  }

  const multiRequestWithoutBreakdown =
    (snapshot.providerRequests ?? 0) > 1 && (!perRequest || perRequest.length === 0);
  const granularity: ProviderUsageGranularity =
    forcedGranularity ??
    (multiRequestWithoutBreakdown ? "GENERATION_AGGREGATE" : "REQUEST");

  const aggregateLimits = [...baseLimits];
  if (granularity === "GENERATION_AGGREGATE") {
    aggregateLimits.push("MULTI_REQUEST_AGGREGATE_ONLY");
    if ((snapshot.providerRequests ?? 0) > 1) {
      aggregateLimits.push("PER_REQUEST_USAGE_UNAVAILABLE");
    }
  }

  const scope = idempotencyScope(input);
  const idempotencyKey = buildIdempotencyKey({
    ...scope,
    granularity,
    operation: input.operation,
    attemptId: input.attemptId,
    generationId: input.generationId,
    segmentIndex: input.segmentIndex,
    providerResponseId: input.providerResponseId,
    callOrdinal: input.callOrdinal,
  });

  return recordProviderUsageObservation({
    ...observationCommon(input),
    inputTokens: snapshot.inputTokens,
    outputTokens: snapshot.outputTokens,
    totalTokens: snapshot.totalTokens,
    cachedInputTokens: snapshot.cachedInputTokens,
    reasoningTokens: snapshot.reasoningTokens,
    providerRequests: snapshot.providerRequests,
    granularity,
    idempotencyKey,
    limits: aggregateLimits,
  });
}
```

#### `projects/sfia-studio-next/web/src/db/migrations/022_provider_usage_observations.sql`

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

#### `projects/sfia-studio-next/web/src/domains/finops/usage-projection.ts`

```ts
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
  let hasPartial = false;
  for (const r of rows) {
    if (r.costCoverage === "UNKNOWN" || r.estimatedCostUsd == null) {
      hasUnknown = true;
      continue;
    }
    if (r.costCoverage === "PARTIAL") {
      hasPartial = true;
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
  if (hasUnknown || hasPartial) {
    return {
      kind: "partial",
      value: sum,
      note: hasUnknown
        ? "Certains coûts restent inconnus"
        : "Certains coûts sont partiels",
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
  let totalReq = 0;
  let measuredReq = 0;
  let missingRequestCounts = false;
  for (const r of rows) {
    if (r.providerRequests == null || !Number.isFinite(r.providerRequests)) {
      missingRequestCounts = true;
      continue;
    }
    totalReq += r.providerRequests;
    if (r.costCoverage === "KNOWN") {
      measuredReq += r.providerRequests;
    } else if (r.costCoverage === "PARTIAL") {
      measuredReq += r.providerRequests;
    }
  }
  if (missingRequestCounts && totalReq <= 0) {
    return { kind: "unknown", reason: "Requêtes non observées" };
  }
  if (totalReq <= 0) return { kind: "unknown", reason: "Requêtes non observées" };
  const pct = Math.round((measuredReq / totalReq) * 100);
  const value = Math.min(100, Math.max(0, pct));
  if (missingRequestCounts) {
    return {
      kind: "partial",
      value,
      note: "Certaines lignes sans nombre de requêtes",
    };
  }
  return { kind: "known", value };
}

export function formatUsdFr(value: number): string {
  const s = value.toLocaleString("fr-FR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return `${s} $`;
}

/** Compact USD for chart Y-axis (Figma 13.03). */
export function formatUsdAxisFr(value: number): string {
  const s = value.toLocaleString("fr-FR", {
    minimumFractionDigits: value > 0 && value < 1 ? 1 : 0,
    maximumFractionDigits: value > 0 && value < 1 ? 2 : 0,
  });
  return `${s} $`;
}

export function finOpsDailyChartScaleMax(costs: Array<number | null>): number {
  let max = 0;
  for (const c of costs) {
    if (c != null && Number.isFinite(c) && c > max) max = c;
  }
  return max > 0 ? max : 1;
}

function finOpsNiceChartTop(max: number): number {
  if (max <= 1) return 1;
  if (max <= 3) return 3;
  if (max <= 6) return 6;
  if (max <= 10) return 10;
  const mag = 10 ** Math.floor(Math.log10(max));
  return Math.ceil(max / mag) * mag;
}

/** Descending USD ticks for a daily spend chart (top → 0). */
export function finOpsDailyChartYTicks(scaleMax: number): number[] {
  const top = finOpsNiceChartTop(scaleMax);
  const steps = top <= 1 ? 2 : 3;
  const step = top / steps;
  const ticks: number[] = [];
  for (let i = steps; i >= 0; i--) {
    ticks.push(Math.round(step * i * 1000) / 1000);
  }
  return ticks;
}

export function finOpsDailyXAxisLabels(periodDays: number): { start: string; end: string } {
  const span = Math.max(1, periodDays);
  return { start: `J-${span - 1}`, end: "Aujourd'hui" };
}

export function formatModelBreakdownCost(row: {
  costUsd: number | null;
  coverage: string;
}): string {
  if (row.costUsd == null || row.coverage === "UNKNOWN") {
    return "Inconnu";
  }
  if (row.coverage === "PARTIAL") {
    return formatMeasuredUsd({ kind: "partial", value: row.costUsd });
  }
  return formatMeasuredUsd({ kind: "known", value: row.costUsd });
}

export function mapCostCoverageLabel(coverage: string): string {
  switch ((coverage ?? "").toUpperCase()) {
    case "KNOWN":
      return "Mesuré";
    case "PARTIAL":
      return "Partiel";
    case "UNKNOWN":
      return "Inconnu";
    default:
      return coverage || "—";
  }
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

#### `projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts`

```ts
import { and, desc, eq, gte, ilike, inArray, or, sql } from "drizzle-orm";
import { db } from "@/db/client";
import {
  cognitiveWorks,
  projects,
  providerUsageObservations,
} from "@/db/schema";
import { StudioError } from "@/lib/http-errors";
import {
  aggregateEstimatedCost,
  aggregateTokenTotal,
  computeMeasureCoveragePercent,
  mapCognitiveWorkStatusLabel,
  parseFinOpsPeriodDays,
  periodStartDate,
  uniqueModelsLabel,
  type FinOpsPeriodDays,
  type MeasuredValue,
} from "./usage-projection";

function studioLane(): string {
  return process.env.STUDIO_LANE?.trim().toUpperCase() || "UNKNOWN";
}

export type FinOpsFilterInput = {
  periodDays?: FinOpsPeriodDays;
  projectId?: string | null;
  model?: string | null;
};

function baseObservationWhere(pilotId: string, input: FinOpsFilterInput, since: Date) {
  const lane = studioLane();
  const conditions = [
    eq(providerUsageObservations.ownerPilotId, pilotId),
    gte(providerUsageObservations.createdAt, since),
    sql`(${providerUsageObservations.lane} IS NULL OR ${providerUsageObservations.lane} = ${lane})`,
  ];
  if (input.projectId) {
    conditions.push(eq(providerUsageObservations.projectId, input.projectId));
  }
  if (input.model) {
    const pattern = `%${input.model}%`;
    conditions.push(
      or(
        ilike(providerUsageObservations.modelApplied, pattern),
        ilike(providerUsageObservations.modelRequested, pattern),
      )!,
    );
  }
  return and(...conditions);
}

async function assertProjectOwned(pilotId: string, projectId: string) {
  const row = (
    await db
      .select({ id: projects.id })
      .from(projects)
      .where(and(eq(projects.id, projectId), eq(projects.ownerPilotId, pilotId)))
      .limit(1)
  )[0];
  if (!row) throw new StudioError("NOT_FOUND", "Projet introuvable");
}

type ObservationRow = typeof providerUsageObservations.$inferSelect;

async function loadObservations(
  pilotId: string,
  input: FinOpsFilterInput,
): Promise<ObservationRow[]> {
  const periodDays = input.periodDays ?? 30;
  const since = periodStartDate(periodDays);
  if (input.projectId) {
    await assertProjectOwned(pilotId, input.projectId);
  }
  return db
    .select()
    .from(providerUsageObservations)
    .where(baseObservationWhere(pilotId, { ...input, periodDays }, since))
    .orderBy(desc(providerUsageObservations.createdAt));
}

export async function loadFinOpsFilterOptions(pilotId: string) {
  const lane = studioLane();
  const projectRows = await db
    .select({ id: projects.id, name: projects.name })
    .from(projects)
    .where(eq(projects.ownerPilotId, pilotId))
    .orderBy(projects.name);

  const modelRows = await db
    .select({
      model: sql<string>`COALESCE(${providerUsageObservations.modelApplied}, ${providerUsageObservations.modelRequested})`,
    })
    .from(providerUsageObservations)
    .where(
      and(
        eq(providerUsageObservations.ownerPilotId, pilotId),
        sql`(${providerUsageObservations.lane} IS NULL OR ${providerUsageObservations.lane} = ${lane})`,
        sql`COALESCE(${providerUsageObservations.modelApplied}, ${providerUsageObservations.modelRequested}) IS NOT NULL`,
      ),
    )
    .groupBy(
      sql`COALESCE(${providerUsageObservations.modelApplied}, ${providerUsageObservations.modelRequested})`,
    );

  return {
    projects: projectRows,
    models: modelRows.map((r) => r.model).filter(Boolean),
  };
}

export type FinOpsSummaryDto = {
  periodDays: FinOpsPeriodDays;
  projectId: string | null;
  model: string | null;
  hasObservations: boolean;
  kpis: {
    estimatedCostUsd: MeasuredValue<number>;
    totalTokens: MeasuredValue<number>;
    completedWorks: MeasuredValue<number>;
    measureCoveragePercent: MeasuredValue<number>;
    costPerCompletedWorkUsd: MeasuredValue<number>;
    measuredRequests: number;
    totalRequests: number;
  };
  dailyCosts: Array<{ day: string; costUsd: number | null; hasData: boolean }>;
  modelBreakdown: Array<{ model: string; costUsd: number | null; coverage: string }>;
};

function bucketDailyCosts(rows: ObservationRow[], periodDays: FinOpsPeriodDays): FinOpsSummaryDto["dailyCosts"] {
  const buckets = new Map<string, ObservationRow[]>();
  for (const r of rows) {
    const d = r.createdAt.toISOString().slice(0, 10);
    const list = buckets.get(d) ?? [];
    list.push(r);
    buckets.set(d, list);
  }
  const out: FinOpsSummaryDto["dailyCosts"] = [];
  const now = new Date();
  for (let i = periodDays - 1; i >= 0; i--) {
    const d = new Date(now);
    d.setUTCDate(d.getUTCDate() - i);
    const key = d.toISOString().slice(0, 10);
    const slice = buckets.get(key) ?? [];
    const agg = aggregateEstimatedCost(slice);
    out.push({
      day: key,
      costUsd: agg.kind === "known" || agg.kind === "partial" ? agg.value : null,
      hasData: slice.length > 0,
    });
  }
  return out;
}

function bucketModelBreakdown(rows: ObservationRow[]): FinOpsSummaryDto["modelBreakdown"] {
  const byModel = new Map<string, ObservationRow[]>();
  for (const r of rows) {
    const m =
      r.modelApplied ?? r.modelRequested ?? "inconnu";
    const list = byModel.get(m) ?? [];
    list.push(r);
    byModel.set(m, list);
  }
  return [...byModel.entries()]
    .map(([model, slice]) => {
      const agg = aggregateEstimatedCost(slice);
      return {
        model,
        costUsd: agg.kind === "known" || agg.kind === "partial" ? agg.value : null,
        coverage:
          agg.kind === "unknown"
            ? "UNKNOWN"
            : agg.kind === "empty"
              ? "EMPTY"
              : agg.kind === "partial"
                ? "PARTIAL"
                : "KNOWN",
      };
    })
    .sort((a, b) => (b.costUsd ?? -1) - (a.costUsd ?? -1));
}

export async function loadFinOpsSummary(
  pilotId: string,
  raw: { period?: string | null; projectId?: string | null; model?: string | null },
): Promise<FinOpsSummaryDto> {
  const periodDays = parseFinOpsPeriodDays(raw.period);
  const input: FinOpsFilterInput = {
    periodDays,
    projectId: raw.projectId?.trim() || null,
    model: raw.model?.trim() || null,
  };
  const rows = await loadObservations(pilotId, input);

  const estimatedCostUsd = aggregateEstimatedCost(rows);
  const totalTokens = aggregateTokenTotal(rows);
  const measureCoveragePercent = computeMeasureCoveragePercent(rows);

  const workIds = [
    ...new Set(rows.map((r) => r.cognitiveWorkId).filter((id): id is string => Boolean(id))),
  ];
  let completedWorks: MeasuredValue<number> = { kind: "empty" };
  if (workIds.length > 0) {
    const works = await db
      .select({ id: cognitiveWorks.id, status: cognitiveWorks.status })
      .from(cognitiveWorks)
      .where(
        and(
          inArray(cognitiveWorks.id, workIds),
          eq(cognitiveWorks.ownerPilotId, pilotId),
        ),
      );
    const completeCount = works.filter((w) => w.status === "COMPLETE").length;
    completedWorks =
      completeCount > 0
        ? { kind: "known", value: completeCount }
        : { kind: "known", value: 0 };
  } else if (rows.length > 0) {
    completedWorks = { kind: "unknown", reason: "Travaux non liés" };
  }

  let costPerCompletedWorkUsd: MeasuredValue<number> = { kind: "empty" };
  if (
    completedWorks.kind === "known" &&
    completedWorks.value > 0 &&
    (estimatedCostUsd.kind === "known" || estimatedCostUsd.kind === "partial")
  ) {
    costPerCompletedWorkUsd = {
      kind: estimatedCostUsd.kind === "partial" ? "partial" : "known",
      value: estimatedCostUsd.value / completedWorks.value,
      note: estimatedCostUsd.kind === "partial" ? estimatedCostUsd.note : undefined,
    };
  } else if (rows.length > 0 && completedWorks.kind === "known" && completedWorks.value === 0) {
    costPerCompletedWorkUsd = { kind: "unknown", reason: "Aucun travail abouti" };
  }

  const totalRequests = rows.reduce((acc, r) => acc + (r.providerRequests ?? 1), 0);
  const measuredRequests = rows.reduce((acc, r) => {
    if (r.costCoverage === "KNOWN" || r.costCoverage === "PARTIAL") {
      return acc + (r.providerRequests ?? 1);
    }
    return acc;
  }, 0);

  return {
    periodDays,
    projectId: input.projectId ?? null,
    model: input.model ?? null,
    hasObservations: rows.length > 0,
    kpis: {
      estimatedCostUsd,
      totalTokens,
      completedWorks,
      measureCoveragePercent,
      costPerCompletedWorkUsd,
      measuredRequests,
      totalRequests,
    },
    dailyCosts: bucketDailyCosts(rows, periodDays),
    modelBreakdown: bucketModelBreakdown(rows),
  };
}

export type FinOpsWorkListItem = {
  cognitiveWorkId: string;
  title: string;
  projectId: string | null;
  projectName: string | null;
  modelsLabel: string;
  tokens: MeasuredValue<number>;
  estimatedCostUsd: MeasuredValue<number>;
  statusLabel: string;
  lastObservedAt: string;
};

export async function loadFinOpsWorks(
  pilotId: string,
  raw: { period?: string | null; projectId?: string | null; model?: string | null; limit?: number },
): Promise<{ items: FinOpsWorkListItem[] }> {
  const periodDays = parseFinOpsPeriodDays(raw.period);
  const limit = Math.min(50, Math.max(1, Number(raw.limit) || 20));
  const input: FinOpsFilterInput = {
    periodDays,
    projectId: raw.projectId?.trim() || null,
    model: raw.model?.trim() || null,
  };
  const rows = await loadObservations(pilotId, input);
  const byWork = new Map<string, ObservationRow[]>();
  for (const r of rows) {
    if (!r.cognitiveWorkId) continue;
    const list = byWork.get(r.cognitiveWorkId) ?? [];
    list.push(r);
    byWork.set(r.cognitiveWorkId, list);
  }

  const workIds = [...byWork.keys()];
  if (workIds.length === 0) {
    return { items: [] };
  }

  const works = await db
    .select({
      id: cognitiveWorks.id,
      objective: cognitiveWorks.objective,
      status: cognitiveWorks.status,
      projectId: cognitiveWorks.projectId,
    })
    .from(cognitiveWorks)
    .where(
      and(inArray(cognitiveWorks.id, workIds), eq(cognitiveWorks.ownerPilotId, pilotId)),
    );

  const projectIds = [
    ...new Set(works.map((w) => w.projectId).filter((id): id is string => Boolean(id))),
  ];
  const projectNames = new Map<string, string>();
  if (projectIds.length > 0) {
    const projs = await db
      .select({ id: projects.id, name: projects.name })
      .from(projects)
      .where(and(inArray(projects.id, projectIds), eq(projects.ownerPilotId, pilotId)));
    for (const p of projs) projectNames.set(p.id, p.name);
  }

  const items: FinOpsWorkListItem[] = works.map((w) => {
    const slice = byWork.get(w.id) ?? [];
    const last = slice[0]?.createdAt ?? new Date();
    const title =
      (w.objective?.trim() || "Travail cognitif").slice(0, 120) +
      ((w.objective?.length ?? 0) > 120 ? "…" : "");
    return {
      cognitiveWorkId: w.id,
      title,
      projectId: w.projectId,
      projectName: w.projectId ? projectNames.get(w.projectId) ?? null : null,
      modelsLabel: uniqueModelsLabel(slice.map((r) => r.modelApplied ?? r.modelRequested)),
      tokens: aggregateTokenTotal(slice),
      estimatedCostUsd: aggregateEstimatedCost(slice),
      statusLabel: mapCognitiveWorkStatusLabel(w.status),
      lastObservedAt: last.toISOString(),
    };
  });

  items.sort(
    (a, b) =>
      new Date(b.lastObservedAt).getTime() - new Date(a.lastObservedAt).getTime(),
  );

  return { items: items.slice(0, limit) };
}

export type FinOpsWorkSegment = {
  segmentIndex: number;
  label: string;
  model: string | null;
  effort: string | null;
  tokens: MeasuredValue<number>;
  estimatedCostUsd: MeasuredValue<number>;
};

export type FinOpsWorkDetailDto = {
  cognitiveWorkId: string;
  title: string;
  projectId: string | null;
  projectName: string | null;
  statusLabel: string;
  kpis: {
    estimatedCostUsd: MeasuredValue<number>;
    totalTokens: MeasuredValue<number>;
    providerRequests: MeasuredValue<number>;
    segmentCount: MeasuredValue<number>;
  };
  segments: FinOpsWorkSegment[];
  timeline: Array<{
    id: string;
    at: string;
    operation: string | null;
    model: string | null;
    status: string;
    costCoverage: string;
  }>;
  tariffVersion: string | null;
};

export async function loadFinOpsWorkDetail(
  pilotId: string,
  cognitiveWorkId: string,
): Promise<FinOpsWorkDetailDto> {
  const work = (
    await db
      .select({
        id: cognitiveWorks.id,
        objective: cognitiveWorks.objective,
        status: cognitiveWorks.status,
        projectId: cognitiveWorks.projectId,
      })
      .from(cognitiveWorks)
      .where(
        and(eq(cognitiveWorks.id, cognitiveWorkId), eq(cognitiveWorks.ownerPilotId, pilotId)),
      )
      .limit(1)
  )[0];
  if (!work) throw new StudioError("NOT_FOUND", "Travail introuvable");

  const lane = studioLane();
  const rows = await db
    .select()
    .from(providerUsageObservations)
    .where(
      and(
        eq(providerUsageObservations.cognitiveWorkId, cognitiveWorkId),
        eq(providerUsageObservations.ownerPilotId, pilotId),
        sql`(${providerUsageObservations.lane} IS NULL OR ${providerUsageObservations.lane} = ${lane})`,
      ),
    )
    .orderBy(
      providerUsageObservations.segmentIndex,
      desc(providerUsageObservations.createdAt),
    );

  let projectName: string | null = null;
  if (work.projectId) {
    const p = (
      await db
        .select({ name: projects.name })
        .from(projects)
        .where(and(eq(projects.id, work.projectId), eq(projects.ownerPilotId, pilotId)))
        .limit(1)
    )[0];
    projectName = p?.name ?? null;
  }

  const title = work.objective?.trim() || "Travail cognitif";
  const bySegment = new Map<number, ObservationRow[]>();
  for (const r of rows) {
    const idx = r.segmentIndex ?? 0;
    const list = bySegment.get(idx) ?? [];
    list.push(r);
    bySegment.set(idx, list);
  }

  const segments: FinOpsWorkSegment[] = [...bySegment.entries()]
    .sort(([a], [b]) => a - b)
    .map(([segmentIndex, slice]) => {
      const head = slice[0];
      const tokens = aggregateTokenTotal(slice);
      return {
        segmentIndex,
        label: head?.operation?.trim() || `Segment ${String(segmentIndex + 1).padStart(2, "0")}`,
        model: head?.modelApplied ?? head?.modelRequested ?? null,
        effort: head?.effortApplied ?? head?.effortRequested ?? null,
        tokens,
        estimatedCostUsd: aggregateEstimatedCost(slice),
      };
    });

  const providerRequestsTotal = rows.reduce((acc, r) => acc + (r.providerRequests ?? 0), 0);
  const providerRequests: MeasuredValue<number> =
    rows.length === 0
      ? { kind: "empty" }
      : providerRequestsTotal > 0
        ? { kind: "known", value: providerRequestsTotal }
        : { kind: "unknown", reason: "Requêtes non observées" };

  const segmentCount: MeasuredValue<number> =
    segments.length > 0
      ? { kind: "known", value: segments.length }
      : rows.length > 0
        ? { kind: "unknown", reason: "Segments non délimités" }
        : { kind: "empty" };

  return {
    cognitiveWorkId: work.id,
    title,
    projectId: work.projectId,
    projectName,
    statusLabel: mapCognitiveWorkStatusLabel(work.status),
    kpis: {
      estimatedCostUsd: aggregateEstimatedCost(rows),
      totalTokens: aggregateTokenTotal(rows),
      providerRequests,
      segmentCount,
    },
    segments,
    timeline: rows.map((r) => ({
      id: r.id,
      at: r.createdAt.toISOString(),
      operation: r.operation,
      model: r.modelApplied ?? r.modelRequested,
      status: r.status,
      costCoverage: r.costCoverage,
    })),
    tariffVersion: rows.find((r) => r.tariffVersion)?.tariffVersion ?? null,
  };
}

```

#### `projects/sfia-studio-next/web/src/components/shell/PersonalRailSettingsMenu.tsx`

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

#### `projects/sfia-studio-next/web/src/app/api/finops/summary/route.ts`

```ts
import { NextResponse } from "next/server";
import {
  loadFinOpsFilterOptions,
  loadFinOpsSummary,
} from "@/domains/finops/usage-read-service";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";

export async function GET(req: Request) {
  try {
    const session = await requireStudioSession();
    const url = new URL(req.url);
    const summary = await loadFinOpsSummary(session.pilotId, {
      period: url.searchParams.get("period"),
      projectId: url.searchParams.get("projectId"),
      model: url.searchParams.get("model"),
    });
    const filterOptions = await loadFinOpsFilterOptions(session.pilotId);
    return NextResponse.json({ summary, filterOptions });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
```

#### `projects/sfia-studio-next/web/src/app/api/finops/works/route.ts`

```ts
import { NextResponse } from "next/server";
import { loadFinOpsWorks } from "@/domains/finops/usage-read-service";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";

export async function GET(req: Request) {
  try {
    const session = await requireStudioSession();
    const url = new URL(req.url);
    const works = await loadFinOpsWorks(session.pilotId, {
      period: url.searchParams.get("period"),
      projectId: url.searchParams.get("projectId"),
      model: url.searchParams.get("model"),
      limit: url.searchParams.has("limit")
        ? Number(url.searchParams.get("limit"))
        : undefined,
    });
    return NextResponse.json(works);
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
```

#### `projects/sfia-studio-next/web/src/app/api/finops/works/[workId]/route.ts`

```ts
import { NextResponse } from "next/server";
import { loadFinOpsWorkDetail } from "@/domains/finops/usage-read-service";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";

export async function GET(
  _req: Request,
  ctx: { params: Promise<{ workId: string }> },
) {
  try {
    const session = await requireStudioSession();
    const { workId } = await ctx.params;
    const detail = await loadFinOpsWorkDetail(session.pilotId, workId);
    return NextResponse.json(detail);
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
```

### cognitive-policy.ts (complet)

```ts
/**
 * D3 cognitive policy — proportional qualification without a second LLM classifier.
 * TEST_BOUNDARY = stress-only (explicit tests).
 * OPERATIONAL_PROVISIONAL = explicit DEV or RECETTE (Morris GO 2026-11-24) — not production-validated.
 * OPERATIONAL_VALIDATED = Morris-approved only (not yet available).
 */

import { StudioError } from "@/lib/http-errors";
import {
  admitModelEffort,
  getResourceCatalogEntry,
  type CognitiveEffort,
  type CognitiveModelId,
  OPERATIONAL_DEFAULT_RESOURCE,
} from "./cognitive-resources";

const EFFORT_RANK: Record<CognitiveEffort, number> = {
  none: 0,
  low: 1,
  medium: 2,
  high: 3,
  xhigh: 4,
  max: 5,
};

function effortDowngradeCandidates(
  modelId: CognitiveModelId,
  fromEffort: CognitiveEffort,
): CognitiveEffort[] {
  const entry = getResourceCatalogEntry(modelId);
  if (!entry || entry.admissionStatus !== "operational") return [];
  const fromRank = EFFORT_RANK[fromEffort] ?? -1;
  const candidates: CognitiveEffort[] = [];
  for (const effort of entry.documentedEfforts) {
    const rank = EFFORT_RANK[effort];
    if (rank < fromRank) candidates.push(effort);
  }
  candidates.sort((a, b) => EFFORT_RANK[b]! - EFFORT_RANK[a]!);
  return candidates;
}

export type CognitiveProfile = "simple" | "analyse" | "investigation";
export type PolicyProfileType =
  | "TEST_BOUNDARY"
  | "OPERATIONAL_PROVISIONAL"
  | "OPERATIONAL_VALIDATED";
/** Operational band retained for profiles; extended efforts go through admission. */
export type ReasoningEffort = "low" | "medium" | "high";

/** Traces RECETTE operational-provisional allowance without rewriting historical meta. */
export const COGNITIVE_POLICY_VERSION =
  "ml5-cog-policy-v4-adaptive-resources-20261126" as const;
/**
 * Historical study reference (Sol). Runtime model is resolved via catalog + admission;
 * this constant remains the operational default identity alias.
 */
export const NORA_STUDY_MODEL = OPERATIONAL_DEFAULT_RESOURCE.modelId;

function admissionModeFromEnv(): "operational" | "calibration" {
  const raw = (process.env.SFIA_COGNITIVE_ADMISSION_MODE ?? "operational")
    .trim()
    .toLowerCase();
  return raw === "calibration" ? "calibration" : "operational";
}

/**
 * Admit a model×effort couple for the next segment. Fail-closed: unknown or
 * uncalibrated couples fall back with explicit reason codes. On the operational
 * model, refused efforts step down (e.g. xhigh → high) before Sol medium default.
 */
export function resolveAdmittedResource(input?: {
  modelId?: string | null;
  effort?: string | null;
}): {
  modelId: CognitiveModelId;
  effort: CognitiveEffort;
  reasonCodes: string[];
} {
  const mode = admissionModeFromEnv();
  const requestedModelId = ((input?.modelId ?? "").trim() ||
    OPERATIONAL_DEFAULT_RESOURCE.modelId) as CognitiveModelId;
  const requestedEffort = ((input?.effort ?? "").trim() ||
    OPERATIONAL_DEFAULT_RESOURCE.effort) as CognitiveEffort;
  const admission = admitModelEffort(requestedModelId, requestedEffort, mode);
  if (admission.admitted) {
    return {
      modelId: admission.modelId,
      effort: admission.effort,
      reasonCodes: [
        `RESOURCE_ADMITTED_${mode.toUpperCase()}`,
        `MODEL_${admission.modelId}`,
        `EFFORT_${admission.effort}`,
      ],
    };
  }

  if (getResourceCatalogEntry(requestedModelId)?.admissionStatus === "operational") {
    for (const lowered of effortDowngradeCandidates(requestedModelId, requestedEffort)) {
      const retry = admitModelEffort(requestedModelId, lowered, mode);
      if (retry.admitted) {
        return {
          modelId: retry.modelId,
          effort: retry.effort,
          reasonCodes: [
            `RESOURCE_REFUSED_${admission.reasonCode}`,
            "RESOURCE_FALLBACK_EFFORT_DOWNGRADE",
            `REQUESTED_EFFORT_${requestedEffort}`,
            `MODEL_${retry.modelId}`,
            `EFFORT_${retry.effort}`,
          ],
        };
      }
    }
  }

  const fallback = admitModelEffort(
    OPERATIONAL_DEFAULT_RESOURCE.modelId,
    OPERATIONAL_DEFAULT_RESOURCE.effort,
    "operational",
  );
  if (!fallback.admitted) {
    throw new StudioError(
      "INVALID_REQUEST",
      "Catalogue cognitif: défaut Sol medium non admis",
      { httpStatus: 500 },
    );
  }
  return {
    modelId: fallback.modelId,
    effort: fallback.effort,
    reasonCodes: [
      `RESOURCE_REFUSED_${admission.reasonCode}`,
      "RESOURCE_FALLBACK_OPERATIONAL_DEFAULT",
      `MODEL_${fallback.modelId}`,
      `EFFORT_${fallback.effort}`,
    ],
  };
}

/** Default effort for a profile when no semantic effortHint is provided. */
export function defaultEffortForProfile(
  profile: CognitiveProfile,
): ReasoningEffort {
  if (profile === "simple") return "low";
  if (profile === "investigation") return "high";
  return "medium";
}

export type BudgetLimits = {
  maxProviderCalls: number;
  maxD4ToolCalls: number;
  /**
   * Separate Git READ call budget (D9 tools).
   * Must not share the D4/history call counter — otherwise a nominal PR consult
   * (sources + PR + files + commit + compare) exhausts TEST_BOUNDARY analyse (4)
   * before reconciliation completes. Chars remain shared via maxD4CharsReturned.
   */
  maxGitToolCalls: number;
  wallClockMs: number;
  maxD4CharsReturned: number;
};

/**
 * Artificial stress ceilings for qualification only.
 * MUST NOT become implicit operational defaults.
 *
 * TEST_BOUNDARY remains available for explicit stress tests.
 * Nominal RECETTE uses OPERATIONAL_PROVISIONAL (explicit env), not these ceilings.
 * Git call ceilings below are sized for a nominal multi-tool Git READ (UAT-01..07).
 */
export const TEST_BOUNDARY_BUDGETS: Record<CognitiveProfile, BudgetLimits> = {
  // Lot E/D5: short messages must still be able to call authorized read tools.
  simple: {
    maxProviderCalls: 4,
    maxD4ToolCalls: 2,
    maxGitToolCalls: 6,
    wallClockMs: 60_000,
    maxD4CharsReturned: 16_000,
  },
  analyse: {
    maxProviderCalls: 8,
    maxD4ToolCalls: 4,
    maxGitToolCalls: 12,
    wallClockMs: 120_000,
    maxD4CharsReturned: 32_000,
  },
  investigation: {
    maxProviderCalls: 12,
    maxD4ToolCalls: 8,
    maxGitToolCalls: 16,
    wallClockMs: 180_000,
    maxD4CharsReturned: 64_000,
  },
};

/**
 * Provisional OPERATIONAL ceilings — finite and reconfigurable.
 * NOT VALIDATED as production policy.
 * Explicit activation via SFIA_COG_PROFILE_TYPE on DEV or RECETTE only.
 * Never silent; never STABLE/PROD/UNKNOWN.
 */
export const OPERATIONAL_BUDGETS_PROVISIONAL: Record<CognitiveProfile, BudgetLimits> = {
  simple: {
    maxProviderCalls: 2,
    maxD4ToolCalls: 2,
    maxGitToolCalls: 6,
    wallClockMs: 600_000,
    maxD4CharsReturned: 100_000,
  },
  // Adaptive continuation — shorter per-segment provider loops so the conductor
  // can checkpoint, compact acquis, and open a new segment before a single SDK
  // run saturates the context. Global envelope is 1M reeval / 2M admin max.
  analyse: {
    maxProviderCalls: 8,
    maxD4ToolCalls: 10,
    maxGitToolCalls: 12,
    wallClockMs: 600_000,
    maxD4CharsReturned: 64_000,
  },
  investigation: {
    maxProviderCalls: 8,
    maxD4ToolCalls: 12,
    maxGitToolCalls: 14,
    wallClockMs: 1_800_000,
    maxD4CharsReturned: 48_000,
  },
};

export type CognitivePolicy = {
  policyVersion: typeof COGNITIVE_POLICY_VERSION;
  profileType: PolicyProfileType;
  profile: CognitiveProfile;
  modelRequested: CognitiveModelId;
  effortRequested: ReasoningEffort;
  toolAllowlist: Array<
    | "search_project_resources"
    | "read_project_document_revision"
    | "compare_document_proposal"
    | "search_conversation_history"
    | "read_conversation_messages"
    | "list_project_git_sources"
    | "read_git_file"
    | "list_git_refs"
    | "list_git_directory"
    | "read_git_pull_request"
    | "list_git_pull_requests"
    | "list_git_pull_request_files"
    | "read_git_commit"
    | "compare_git_refs"
    | "read_git_commit_status"
    | "list_realization_evidence"
    | "read_realization_handoff_report"
    | "read_attempt_workspace_file"
    | "read_evidence_capture_meta"
    | "public_web_search"
    | "public_web_open_page"
  >;
  budgets: BudgetLimits;
  reasonCodes: string[];
};

function studioLane(): string {
  return (process.env.STUDIO_LANE ?? "UNKNOWN").trim().toUpperCase() || "UNKNOWN";
}

/** STABLE/PROD/unknown never receive operational budgets. */
export function isOperationalForbiddenLane(lane: string): boolean {
  return (
    lane === "STABLE" ||
    lane === "PROD" ||
    lane === "PRODUCTION" ||
    lane === "UNKNOWN" ||
    !lane
  );
}

/** Morris GO 2026-11-24 — OPERATIONAL_PROVISIONAL explicit on DEV and RECETTE only. */
export function isOperationalProvisionalAllowedLane(lane: string): boolean {
  return lane === "DEV" || lane === "RECETTE";
}

/**
 * Fail-closed profile resolution.
 * - absent → DEV defaults to TEST_BOUNDARY; other lanes → refuse
 * - OPERATIONAL_PROVISIONAL → explicit DEV or RECETTE only
 * - OPERATIONAL_VALIDATED → not yet approved → refuse
 * - legacy "OPERATIONAL" → alias of PROVISIONAL (same lane rules)
 * - STABLE / PROD / UNKNOWN → refuse operational regimes
 */
export function resolveProfileType(override?: PolicyProfileType): PolicyProfileType {
  if (override) {
    if (override === "OPERATIONAL_VALIDATED") {
      throw new StudioError(
        "INVALID_REQUEST",
        "OPERATIONAL_VALIDATED non disponible — calibration Morris requise",
        { httpStatus: 400 },
      );
    }
    if (
      override === "OPERATIONAL_PROVISIONAL" &&
      !isOperationalProvisionalAllowedLane(studioLane())
    ) {
      throw new StudioError(
        "INVALID_REQUEST",
        "OPERATIONAL_PROVISIONAL interdit hors DEV/RECETTE",
        { httpStatus: 400 },
      );
    }
    return override;
  }

  const raw = (process.env.SFIA_COG_PROFILE_TYPE ?? "").trim().toUpperCase();
  const lane = studioLane();

  if (!raw) {
    if (lane === "DEV") return "TEST_BOUNDARY";
    throw new StudioError(
      "INVALID_REQUEST",
      "SFIA_COG_PROFILE_TYPE requis hors DEV (fail-closed)",
      { httpStatus: 400 },
    );
  }

  if (raw === "TEST_BOUNDARY") return "TEST_BOUNDARY";

  if (raw === "OPERATIONAL_VALIDATED") {
    throw new StudioError(
      "INVALID_REQUEST",
      "OPERATIONAL_VALIDATED non adopté — STOP calibration",
      { httpStatus: 400 },
    );
  }

  if (raw === "OPERATIONAL_PROVISIONAL" || raw === "OPERATIONAL") {
    if (!isOperationalProvisionalAllowedLane(lane)) {
      throw new StudioError(
        "INVALID_REQUEST",
        "OPERATIONAL_PROVISIONAL / OPERATIONAL interdit hors STUDIO_LANE=DEV|RECETTE",
        { httpStatus: 400 },
      );
    }
    if (isOperationalForbiddenLane(lane)) {
      throw new StudioError(
        "INVALID_REQUEST",
        "OPERATIONAL_PROVISIONAL interdit sur lane STABLE/PROD/UNKNOWN",
        { httpStatus: 400 },
      );
    }
    return "OPERATIONAL_PROVISIONAL";
  }

  throw new StudioError(
    "INVALID_REQUEST",
    `SFIA_COG_PROFILE_TYPE invalide: ${raw}`,
    { httpStatus: 400 },
  );
}

/**
 * C14 / Morris D2: message length must NOT decide cognitive profile, investigation
 * need, or tool selection. Budgets default to `analyse` / medium; Nora escalates
 * depth semantically via tools and structured qualification — never via length.
 * `userText` is retained for API stability / future semantic override wiring only.
 */
export function qualifyCognitiveProfile(_userText: string): {
  profile: CognitiveProfile;
  effort: ReasoningEffort;
  reasonCodes: string[];
} {
  return {
    profile: "analyse",
    effort: "medium",
    reasonCodes: ["BUDGET_DEFAULT_ANALYSE_NO_LENGTH_ROUTING"],
  };
}

/**
 * Single mutable budget bag for one Nora generation.
 * D4+history share remainingCalls; Git uses remainingGitCalls; all share remainingChars.
 * Pass the SAME object reference to every tool family — never clone numeric snapshots.
 */
export function createSharedToolBudget(budgets: BudgetLimits): {
  remainingCalls: number;
  remainingChars: number;
  remainingGitCalls: number;
} {
  return {
    remainingCalls: budgets.maxD4ToolCalls,
    remainingChars: budgets.maxD4CharsReturned,
    remainingGitCalls: budgets.maxGitToolCalls,
  };
}

export function buildCognitivePolicy(
  userText: string,
  overrideType?: PolicyProfileType,
  opts?: {
    /** C18 — semantic profile from consolidated investigation / qualification. */
    profileHint?: CognitiveProfile;
    effortHint?: ReasoningEffort | CognitiveEffort;
    /** Optional next-segment resource proposal (admitted server-side). */
    modelHint?: CognitiveModelId | string | null;
  },
): CognitivePolicy {
  const profileType = resolveProfileType(overrideType);
  const q = qualifyCognitiveProfile(userText);
  const profile = opts?.profileHint ?? q.profile;
  // Profile (nature of work) ≠ effort (mobilized depth). When only a profile
  // hint is set, derive a proportional effort default — never leave
  // investigation stuck on medium by accident.
  const effortHint =
    opts?.effortHint ??
    (opts?.profileHint ? defaultEffortForProfile(profile) : q.effort);
  const admitted = resolveAdmittedResource({
    modelId: opts?.modelHint ?? OPERATIONAL_DEFAULT_RESOURCE.modelId,
    effort: effortHint,
  });
  // Profile budgets still keyed on low|medium|high; map extended efforts up.
  const effortForBudgets: ReasoningEffort =
    admitted.effort === "low" || admitted.effort === "none"
      ? "low"
      : admitted.effort === "medium"
        ? "medium"
        : "high";
  const budgets =
    profileType === "TEST_BOUNDARY"
      ? TEST_BOUNDARY_BUDGETS[profile]
      : OPERATIONAL_BUDGETS_PROVISIONAL[profile];

  // SEM corrective: short utterances still get authorized read tools.
  // Length budgets control cost (maxTurns/chars), not métier intent detection.
  const toolAllowlist: CognitivePolicy["toolAllowlist"] = [
    "search_project_resources",
    "read_project_document_revision",
    "compare_document_proposal",
    "search_conversation_history",
    "read_conversation_messages",
    "list_project_git_sources",
    "read_git_file",
    "list_git_refs",
    "list_git_directory",
    "read_git_pull_request",
    "list_git_pull_requests",
    "list_git_pull_request_files",
    "read_git_commit",
    "compare_git_refs",
    "read_git_commit_status",
    "list_realization_evidence",
    "read_realization_handoff_report",
    "read_attempt_workspace_file",
    "read_evidence_capture_meta",
    "public_web_search",
    "public_web_open_page",
  ];

  const reasonCodes = [
    ...q.reasonCodes,
    `PROFILE_TYPE_${profileType}`,
    `LANE_${studioLane()}`,
    ...admitted.reasonCodes,
  ];
  if (opts?.profileHint) reasonCodes.push(`PROFILE_HINT_${opts.profileHint}`);
  if (opts?.effortHint) reasonCodes.push(`EFFORT_HINT_${opts.effortHint}`);
  if (opts?.modelHint) reasonCodes.push(`MODEL_HINT_${opts.modelHint}`);

  return {
    policyVersion: COGNITIVE_POLICY_VERSION,
    profileType,
    profile,
    modelRequested: admitted.modelId,
    // Store admitted effort narrowed to ReasoningEffort for SDK path when in band;
    // high covers xhigh/max until calibration expands RuntimeEffort type on adapter.
    effortRequested: effortForBudgets,
    toolAllowlist,
    budgets,
    reasonCodes,
  };
}

/**
 * maxTurns for Runner — model↔tool loop budget from policy.
 * NOT identical to provider HTTP call count; no silent hard cap of 12.
 * Gap: SDK maxTurns ≠ maxProviderCalls — documented honestly in reason/meta.
 */
export function maxTurnsForPolicy(policy: CognitivePolicy): number {
  // Always allow at least one tool loop for authorized read capabilities.
  return Math.max(2, policy.budgets.maxProviderCalls);
}

```

### public-web-registry.ts (complet)

```ts
/**
 * C24 / T1 — public WEB registry feeding (server-owned provenance).
 *
 * Nora may identify a public research need and propose a public-only query.
 * She cannot self-authorize egress. Admission remains EXPLICIT_AUTHORIZED_EXACT
 * or REGISTERED_PUBLIC_COMPOSITION after server sanitize + private-marker checks.
 *
 * Lexical helpers (catalog token match, URL parse) are not semantic authorization.
 */

import { assertPublicHttpsUrl } from "./public-web-search-frontier";
import { sanitizePublicWebQuery } from "./web-search-sanitize";

export type PublicWebRegistry = {
  topics: Record<string, string>;
  exactQueries: string[];
  facts: string[];
  limits: string[];
  /**
   * Public https URLs literally present in this-turn Pilote text.
   * Candidates only — open_page still requires admission (not auto-authorized).
   */
  pilotProvidedUrls: string[];
};

export type PublicTopicCatalogEntry = {
  ref: string;
  /** Exact public query string (no private context). */
  query: string;
  /** Tokens that must appear in user text / objective to auto-register. */
  matchTokens: string[];
};

const DEFAULT_DEV_CATALOG: PublicTopicCatalogEntry[] = [
  {
    ref: "node-lts",
    query: "Node.js current LTS version site:nodejs.org",
    matchTokens: ["node.js", "nodejs", "node lts", "lts node", "version node"],
  },
  {
    ref: "openai-models",
    query: "OpenAI API models documentation site:platform.openai.com",
    matchTokens: ["openai model", "gpt model", "openai api model", "gpt-4", "gpt-5"],
  },
  {
    ref: "postgres-docs",
    query: "PostgreSQL official documentation site:www.postgresql.org",
    matchTokens: ["postgresql", "postgres docs", "postgres documentation", "psql"],
  },
  {
    ref: "rfc8259-json",
    query: "RFC 8259 JSON site:datatracker.ietf.org",
    matchTokens: ["rfc 8259", "json rfc", "rfc8259"],
  },
  {
    ref: "mdn-fetch",
    query: "Fetch API MDN Web Docs site:developer.mozilla.org",
    matchTokens: ["fetch api", "mdn fetch", "request fetch"],
  },
  {
    ref: "nextjs-docs",
    query: "Next.js App Router documentation site:nextjs.org",
    matchTokens: ["next.js", "nextjs", "app router"],
  },
  {
    ref: "typescript-handbook",
    query: "TypeScript Handbook official documentation site:www.typescriptlang.org",
    matchTokens: ["typescript", "tsconfig", "handbook typescript"],
  },
  {
    ref: "owasp-top10",
    query: "OWASP Top 10 site:owasp.org",
    matchTokens: ["owasp", "top 10", "owasp top"],
  },
  {
    ref: "ms-power-query",
    query: "What is Power Query Microsoft Learn site:learn.microsoft.com",
    matchTokens: [
      "power query",
      "powerquery",
      "microsoft learn power",
      "learn.microsoft.com/fr-fr/power-query",
    ],
  },
  {
    ref: "ms-sharepoint-folder-pq",
    query:
      "SharePoint Folder connector Power Query Microsoft Learn site:learn.microsoft.com",
    matchTokens: [
      "sharepoint folder",
      "connecteur sharepoint",
      "sharepoint power query",
      "power-query/connectors/sharepoint",
    ],
  },
];

export const PILOT_PUBLIC_QUERY_REF = "pilot-public-query";

/**
 * Extract public https URL candidates from an explicit Pilote-only string.
 * Parsing only — does not create open authorization.
 */
export function extractPilotProvidedPublicUrls(pilotText: string): string[] {
  const found: string[] = [];
  const re = /https:\/\/[^\s<>"'\)\]]+/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(pilotText)) !== null) {
    const raw = m[0]!.replace(/[.,;:!?)]+$/g, "");
    const checked = assertPublicHttpsUrl(raw);
    if (!checked.ok) continue;
    found.push(checked.url);
  }
  return [...new Set(found)].slice(0, 8);
}

function normalize(s: string): string {
  return s.replace(/\s+/g, " ").trim().toLowerCase();
}

/**
 * Server admission of a Nora-proposed public-only query (Option B).
 * Semantic need is Nora's; permission is the server's.
 * Sanitize + private-marker checks are necessary but NOT sufficient:
 * the exact query must already appear in a server-owned registered public set
 * (catalog topic queries and/or explicit exact allowlist for the turn).
 * Does not invent a third provenance mode — caller registers then uses
 * EXPLICIT_AUTHORIZED_EXACT / REGISTERED_PUBLIC_COMPOSITION via authorizePublicWebQuery.
 */
export function admitNoraProposedPublicQuery(input: {
  proposedQuery: string;
  privateMarkers?: string[];
  /**
   * Server-owned public queries already registered for this turn
   * (catalog compositions + explicit exacts). Required for admission.
   */
  registeredPublicQueries?: string[] | null;
}):
  | { ok: true; query: string; ref: typeof PILOT_PUBLIC_QUERY_REF }
  | { ok: false; reason: string } {
  const raw = (input.proposedQuery || "").replace(/\s+/g, " ").trim();
  if (!raw || raw.length < 3) {
    return { ok: false, reason: "PROPOSED_QUERY_EMPTY" };
  }
  const markers = (input.privateMarkers ?? []).filter((m) => m.trim().length >= 4);
  for (const m of markers) {
    if (raw.toLowerCase().includes(m.toLowerCase())) {
      return { ok: false, reason: "PRIVATE_MARKER_IN_PROPOSED_QUERY" };
    }
  }
  const sanitized = sanitizePublicWebQuery(raw);
  if (!sanitized.ok) {
    return { ok: false, reason: sanitized.blockedReason ?? "SANITIZE_BLOCKED" };
  }
  const registered = (input.registeredPublicQueries ?? [])
    .map((q) => q.replace(/\s+/g, " ").trim())
    .filter(Boolean);
  if (registered.length === 0) {
    return { ok: false, reason: "PUBLIC_PROVENANCE_REQUIRED" };
  }
  const hit = registered.find(
    (q) => q.toLowerCase() === sanitized.query.toLowerCase(),
  );
  if (!hit) {
    return { ok: false, reason: "PROPOSED_QUERY_NOT_IN_REGISTERED_PUBLIC_SET" };
  }
  return {
    ok: true,
    query: hit,
    ref: PILOT_PUBLIC_QUERY_REF,
  };
}

/**
 * @deprecated Lexical intent detection must not authorize egress.
 * Kept as a no-op diagnostic helper for tests migrating off the prior path.
 */
export function detectPublicResearchIntent(_text: string): boolean {
  return false;
}

/**
 * @deprecated Free-form pilot-text composition is not an authorization path.
 * Use admitNoraProposedPublicQuery after Nora proposes a public-only query.
 */
export function composePilotPublicSearchQuery(
  _pilotText: string,
  _privateMarkers: string[] = [],
): { ok: true; query: string } | { ok: false; reason: string } {
  return { ok: false, reason: "LEXICAL_COMPOSITION_DISABLED" };
}

/**
 * Parse SFIA_DEV_PUBLIC_WEB_TOPIC_CATALOG JSON when set; else DEFAULT catalog
 * on DEV and RECETTE (known-public templates only — never free search).
 * STABLE/PROD/UNKNOWN get empty catalog unless explicitly configured.
 */
export function loadPublicTopicCatalog(
  env: Record<string, string | undefined> = process.env,
): PublicTopicCatalogEntry[] {
  const raw = (env.SFIA_DEV_PUBLIC_WEB_TOPIC_CATALOG || "").trim();
  if (raw) {
    try {
      const parsed = JSON.parse(raw) as PublicTopicCatalogEntry[];
      if (!Array.isArray(parsed)) return [];
      return parsed.filter(
        (e) =>
          e &&
          typeof e.ref === "string" &&
          typeof e.query === "string" &&
          Array.isArray(e.matchTokens),
      );
    } catch {
      return [];
    }
  }
  const lane = (env.STUDIO_LANE || "DEV").trim().toUpperCase();
  if (lane !== "DEV" && lane !== "RECETTE") return [];
  if ((env.SFIA_PUBLIC_WEB_CATALOG_DEFAULT || "1").trim() === "0") return [];
  return DEFAULT_DEV_CATALOG;
}

/**
 * Merge prior registry with catalog matches.
 *
 * `pilotText` is REQUIRED for pilot-originated URL candidate extraction.
 * Haystack is NEVER a fallback provenance for URLs or free-form queries.
 * Stale `pilot-public-query` from prior turns is stripped (must be re-admitted).
 */
export function resolvePublicWebRegistry(input: {
  priorTopics?: Record<string, string> | null;
  priorExactQueries?: string[] | null;
  priorFacts?: string[] | null;
  /** Explicit exact queries authorized by Pilote/server for this preparation. */
  explicitExactQueries?: string[] | null;
  /**
   * Aggregated context for catalog token matching only (objective / intent).
   * Never used as URL or free-form query provenance.
   */
  haystack: string;
  /**
   * This-turn Pilote utterance — required for pilot URL candidates.
   * Absence ⇒ fail closed for pilot-originated URL extraction.
   */
  pilotText?: string | null;
  privateMarkers?: string[];
  env?: Record<string, string | undefined>;
}): PublicWebRegistry {
  const limits: string[] = [];
  const markers = (input.privateMarkers ?? []).filter((m) => m.trim().length >= 4);
  const hay = normalize(input.haystack);

  // Strip stale ephemeral generic registration — must be re-admitted this turn.
  const priorTopicsRaw = { ...(input.priorTopics ?? {}) };
  if (priorTopicsRaw[PILOT_PUBLIC_QUERY_REF]) {
    delete priorTopicsRaw[PILOT_PUBLIC_QUERY_REF];
    limits.push("STALE_PILOT_PUBLIC_QUERY_STRIPPED");
  }

  const topics: Record<string, string> = { ...priorTopicsRaw };
  const exact = new Set(
    [...(input.priorExactQueries ?? []), ...(input.explicitExactQueries ?? [])]
      .map((q) => q.replace(/\s+/g, " ").trim())
      .filter(Boolean)
      // Drop exacts that only existed for a prior pilot-public-query value.
      .filter((q) => {
        const priorPilot = (input.priorTopics ?? {})[PILOT_PUBLIC_QUERY_REF];
        return !priorPilot || normalize(q) !== normalize(priorPilot);
      }),
  );
  const facts = [...new Set((input.priorFacts ?? []).map((f) => f.trim()).filter(Boolean))];

  const catalog = loadPublicTopicCatalog(input.env ?? process.env);
  if (catalog.length === 0) {
    limits.push("PUBLIC_WEB_CATALOG_EMPTY");
  }

  // Catalog = server-owned known-public templates (REGISTERED_PUBLIC_COMPOSITION).
  // Token match is navigation onto a pre-approved public query — not free-form auth.
  for (const entry of catalog) {
    const hit = entry.matchTokens.some((t) => hay.includes(normalize(t)));
    if (!hit) continue;
    const q = entry.query.replace(/\s+/g, " ").trim();
    if (!q) continue;
    if (markers.some((m) => q.toLowerCase().includes(m.toLowerCase()))) {
      limits.push(`CATALOG_SKIP_PRIVATE_MARKER:${entry.ref}`);
      continue;
    }
    if (!topics[entry.ref]) {
      topics[entry.ref] = q;
      limits.push(`CATALOG_REGISTERED:${entry.ref}`);
    }
  }

  // T1.2 — no haystack fallback for pilot provenance.
  let pilotProvidedUrls: string[] = [];
  if (typeof input.pilotText === "string" && input.pilotText.trim()) {
    pilotProvidedUrls = extractPilotProvidedPublicUrls(input.pilotText);
    if (pilotProvidedUrls.length > 0) {
      limits.push(`PILOT_URL_CANDIDATES:${pilotProvidedUrls.length}`);
      limits.push("PILOT_URL_NOT_AUTO_AUTHORIZED");
    }
  } else {
    limits.push("PILOT_TEXT_ABSENT_URL_EXTRACTION_CLOSED");
  }

  // Lexical free-form registration removed (T1.1). Nora must propose via tool;
  // server admits with admitNoraProposedPublicQuery.
  limits.push("LEXICAL_PILOT_QUERY_REGISTRATION_DISABLED");

  if (
    Object.keys(topics).length === 0 &&
    exact.size === 0 &&
    facts.length === 0 &&
    pilotProvidedUrls.length === 0
  ) {
    limits.push("PUBLIC_WEB_REGISTRY_EMPTY");
  }

  return {
    topics,
    exactQueries: [...exact],
    facts,
    limits,
    pilotProvidedUrls,
  };
}

```

### Diff continuation web

```diff
diff --git a/projects/sfia-studio-next/web/src/components/finops/FinOpsConsumptionPanel.tsx b/projects/sfia-studio-next/web/src/components/finops/FinOpsConsumptionPanel.tsx
index a241c873..e2ee84c7 100644
--- a/projects/sfia-studio-next/web/src/components/finops/FinOpsConsumptionPanel.tsx
+++ b/projects/sfia-studio-next/web/src/components/finops/FinOpsConsumptionPanel.tsx
@@ -5,10 +5,15 @@ import { useCallback, useEffect, useMemo, useState } from "react";
 import type { FinOpsSummaryDto, FinOpsWorkListItem } from "@/domains/finops/usage-read-service";
 import {
   FINOPS_PERIOD_OPTIONS,
+  finOpsDailyChartScaleMax,
+  finOpsDailyChartYTicks,
+  finOpsDailyXAxisLabels,
+  formatModelBreakdownCost,
   formatMeasuredPercent,
   formatMeasuredTokens,
   formatMeasuredUsd,
   formatIntegerFr,
+  formatUsdAxisFr,
   displayModelShort,
 } from "@/domains/finops/usage-projection";
 import "./finops-consumption.css";
@@ -108,8 +113,12 @@ export function FinOpsConsumptionPanel() {
     void refresh();
   }, [refresh]);

-  const maxDaily =
-    summary?.dailyCosts.reduce((m, d) => Math.max(m, d.costUsd ?? 0), 0) ?? 1;
+  const dailyScaleMax = summary
+    ? finOpsDailyChartScaleMax(summary.dailyCosts.map((d) => d.costUsd))
+    : 1;
+  const dailyYTicks = finOpsDailyChartYTicks(dailyScaleMax);
+  const dailyChartTop = dailyYTicks[0] ?? dailyScaleMax;
+  const dailyXLabels = finOpsDailyXAxisLabels(summary?.periodDays ?? Number(period));
   const maxModel =
     summary?.modelBreakdown.reduce((m, d) => Math.max(m, d.costUsd ?? 0), 0) ?? 1;

@@ -236,24 +245,47 @@ export function FinOpsConsumptionPanel() {
             </div>

             <div className="finops-1306-charts">
-              <section className="finops-1306-panel">
-                <h2>Évolution des dépenses</h2>
-                <div className="finops-1306-bars" data-testid="finops-daily-chart">
-                  {summary.dailyCosts.map((d) => {
-                    const h =
-                      d.costUsd != null && maxDaily > 0
-                        ? Math.max(4, Math.round((d.costUsd / maxDaily) * 130))
-                        : d.hasData
-                          ? 4
-                          : 2;
-                    return (
-                      <div
-                        key={d.day}
-                        className={`finops-1306-bar ${d.costUsd == null && !d.hasData ? "is-empty" : ""}`}
-                        style={{ height: `${h}px` }}
-                      />
-                    );
-                  })}
+              <section className="finops-1306-panel finops-1306-daily-panel">
+                <div className="finops-1306-panel-head">
+                  <h2>Évolution des dépenses</h2>
+                  <span className="finops-1306-chart-meta">
+                    USD · {summary.periodDays} jours
+                  </span>
+                </div>
+                <div className="finops-1306-daily-chart" data-testid="finops-daily-chart">
+                  <ul className="finops-1306-chart-y" aria-hidden>
+                    {dailyYTicks.map((tick) => (
+                      <li key={tick}>{formatUsdAxisFr(tick)}</li>
+                    ))}
+                  </ul>
+                  <div className="finops-1306-bars">
+                    {summary.dailyCosts.map((d) => {
+                      const h =
+                        d.costUsd != null && dailyChartTop > 0
+                          ? Math.max(4, Math.round((d.costUsd / dailyChartTop) * 130))
+                          : d.hasData
+                            ? 4
+                            : 2;
+                      const title =
+                        d.costUsd != null
+                          ? `${d.day} · ${formatMeasuredUsd({ kind: "known", value: d.costUsd })}`
+                          : d.hasData
+                            ? `${d.day} · coût inconnu`
+                            : d.day;
+                      return (
+                        <div
+                          key={d.day}
+                          className={`finops-1306-bar ${d.costUsd == null ? "is-unknown" : ""} ${!d.hasData ? "is-empty" : ""}`}
+                          style={{ height: `${h}px` }}
+                          title={title}
+                        />
+                      );
+                    })}
+                  </div>
+                </div>
+                <div className="finops-1306-daily-x" aria-hidden>
+                  <span>{dailyXLabels.start}</span>
+                  <span>{dailyXLabels.end}</span>
                 </div>
               </section>
               <section className="finops-1306-panel">
@@ -266,18 +298,14 @@ export function FinOpsConsumptionPanel() {
                     const width =
                       row.costUsd != null && maxModel > 0
                         ? `${Math.round((row.costUsd / maxModel) * 100)}%`
-                        : "0%";
+                        : undefined;
                     return (
                       <div key={row.model} className="finops-1306-model-row">
                         <span>{label}</span>
                         <div className="finops-1306-model-bar">
-                          <span style={{ width }} />
+                          {width ? <span style={{ width }} /> : null}
                         </div>
-                        <span>
-                          {row.costUsd != null
-                            ? formatMeasuredUsd({ kind: "known", value: row.costUsd })
-                            : "Inconnu"}
-                        </span>
+                        <span>{formatModelBreakdownCost(row)}</span>
                       </div>
                     );
                   })
diff --git a/projects/sfia-studio-next/web/src/components/finops/FinOpsWorkDetailPanel.tsx b/projects/sfia-studio-next/web/src/components/finops/FinOpsWorkDetailPanel.tsx
index ee5dd0be..071d3ef8 100644
--- a/projects/sfia-studio-next/web/src/components/finops/FinOpsWorkDetailPanel.tsx
+++ b/projects/sfia-studio-next/web/src/components/finops/FinOpsWorkDetailPanel.tsx
@@ -8,6 +8,7 @@ import {
   formatIntegerFr,
   formatMeasuredTokens,
   formatMeasuredUsd,
+  mapCostCoverageLabel,
 } from "@/domains/finops/usage-projection";
 import "./finops-consumption.css";

@@ -47,6 +48,21 @@ export function FinOpsWorkDetailPanel({ workId }: { workId: string }) {
       ? formatIntegerFr(detail.kpis.segmentCount.value)
       : "—";

+  const timelineChrono = detail
+    ? [...detail.timeline].sort(
+        (a, b) => new Date(a.at).getTime() - new Date(b.at).getTime(),
+      )
+    : [];
+
+  function formatTimelineAt(iso: string): string {
+    return new Date(iso).toLocaleString("fr-FR", {
+      day: "2-digit",
+      month: "short",
+      hour: "2-digit",
+      minute: "2-digit",
+    });
+  }
+
   return (
     <div className="finops-1306-page" data-testid="finops-work-detail-page">
       <div className="finops-1306">
@@ -141,6 +157,32 @@ export function FinOpsWorkDetailPanel({ workId }: { workId: string }) {
                 </p>
               ) : null}
             </section>
+
+            <section className="finops-1306-panel" data-testid="finops-timeline">
+              <h2>Chronologie des observations</h2>
+              {timelineChrono.length === 0 ? (
+                <p className="finops-1306-state">Aucune observation datée pour ce travail.</p>
+              ) : (
+                <div className="finops-1306-timeline">
+                  {timelineChrono.map((ev) => (
+                    <div
+                      key={ev.id}
+                      className="finops-1306-timeline-row"
+                      data-testid={`finops-timeline-${ev.id}`}
+                    >
+                      <span className="finops-1306-timeline-at">{formatTimelineAt(ev.at)}</span>
+                      <span className="finops-1306-timeline-op">
+                        {ev.operation?.trim() || "Observation fournisseur"}
+                      </span>
+                      <span>{displayModelShort(ev.model) ?? "—"}</span>
+                      <span className="finops-1306-timeline-coverage">
+                        {mapCostCoverageLabel(ev.costCoverage)}
+                      </span>
+                    </div>
+                  ))}
+                </div>
+              )}
+            </section>
           </>
         ) : null}
       </div>
diff --git a/projects/sfia-studio-next/web/src/components/finops/finops-consumption.css b/projects/sfia-studio-next/web/src/components/finops/finops-consumption.css
index a824479f..f26d8a87 100644
--- a/projects/sfia-studio-next/web/src/components/finops/finops-consumption.css
+++ b/projects/sfia-studio-next/web/src/components/finops/finops-consumption.css
@@ -131,12 +131,61 @@
   font-weight: 600;
 }

+.finops-1306-panel-head {
+  display: flex;
+  align-items: baseline;
+  justify-content: space-between;
+  gap: 12px;
+  margin-bottom: 12px;
+}
+
+.finops-1306-panel-head h2 {
+  margin: 0;
+}
+
+.finops-1306-chart-meta {
+  font-size: 11px;
+  color: #7d8aa3;
+  white-space: nowrap;
+}
+
+.finops-1306-daily-chart {
+  display: grid;
+  grid-template-columns: auto 1fr;
+  gap: 10px;
+  align-items: stretch;
+}
+
+.finops-1306-chart-y {
+  list-style: none;
+  margin: 0;
+  padding: 0 0 18px;
+  display: flex;
+  flex-direction: column;
+  justify-content: space-between;
+  min-width: 2.75rem;
+  height: 150px;
+  font-size: 10px;
+  color: #7d8aa3;
+  text-align: right;
+}
+
+.finops-1306-daily-x {
+  display: flex;
+  justify-content: space-between;
+  margin-top: 6px;
+  padding-left: calc(2.75rem + 10px);
+  font-size: 10px;
+  color: #7d8aa3;
+}
+
 .finops-1306-bars {
   display: flex;
   align-items: flex-end;
   gap: 3px;
   height: 150px;
   padding-top: 8px;
+  border-bottom: 1px solid #252d3f;
 }

 .finops-1306-bar {
@@ -152,6 +201,11 @@
   background: #3a4258;
 }

+.finops-1306-bar.is-unknown:not(.is-empty) {
+  opacity: 0.45;
+  background: #4a5270;
+}
+
 .finops-1306-model-row {
   display: grid;
   grid-template-columns: 52px 1fr auto;
@@ -270,6 +324,38 @@
   font-size: 13px;
 }

+.finops-1306-timeline {
+  display: flex;
+  flex-direction: column;
+  gap: 8px;
+}
+
+.finops-1306-timeline-row {
+  display: grid;
+  grid-template-columns: 7rem 1fr 5rem 5rem;
+  gap: 10px;
+  align-items: center;
+  padding: 8px 12px;
+  border: 1px solid #1f2738;
+  border-radius: 8px;
+  font-size: 12px;
+  color: #b8c2d6;
+}
+
+.finops-1306-timeline-at {
+  color: #7d8aa3;
+  font-variant-numeric: tabular-nums;
+}
+
+.finops-1306-timeline-op {
+  color: #e8ecfa;
+}
+
+.finops-1306-timeline-coverage {
+  text-align: right;
+  color: #94a2bb;
+}
+
 .finops-1306-state {
   padding: 32px 0;
   text-align: center;
@@ -287,4 +373,10 @@
   .finops-1306-segment-row {
     grid-template-columns: 1fr;
   }
+  .finops-1306-timeline-row {
+    grid-template-columns: 1fr;
+  }
+  .finops-1306-daily-x {
+    padding-left: 0;
+  }
 }
\ No newline at end of file
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
index 5f4b4375..2da94efe 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
@@ -8,11 +8,37 @@
 import { StudioError } from "@/lib/http-errors";
 import {
   admitModelEffort,
+  getResourceCatalogEntry,
   type CognitiveEffort,
   type CognitiveModelId,
   OPERATIONAL_DEFAULT_RESOURCE,
 } from "./cognitive-resources";

+const EFFORT_RANK: Record<CognitiveEffort, number> = {
+  none: 0,
+  low: 1,
+  medium: 2,
+  high: 3,
+  xhigh: 4,
+  max: 5,
+};
+
+function effortDowngradeCandidates(
+  modelId: CognitiveModelId,
+  fromEffort: CognitiveEffort,
+): CognitiveEffort[] {
+  const entry = getResourceCatalogEntry(modelId);
+  if (!entry || entry.admissionStatus !== "operational") return [];
+  const fromRank = EFFORT_RANK[fromEffort] ?? -1;
+  const candidates: CognitiveEffort[] = [];
+  for (const effort of entry.documentedEfforts) {
+    const rank = EFFORT_RANK[effort];
+    if (rank < fromRank) candidates.push(effort);
+  }
+  candidates.sort((a, b) => EFFORT_RANK[b]! - EFFORT_RANK[a]!);
+  return candidates;
+}
+
 export type CognitiveProfile = "simple" | "analyse" | "investigation";
 export type PolicyProfileType =
   | "TEST_BOUNDARY"
@@ -39,8 +65,8 @@ function admissionModeFromEnv(): "operational" | "calibration" {

 /**
  * Admit a model×effort couple for the next segment. Fail-closed: unknown or
- * uncalibrated couples fall back to the operational default (Sol medium) with
- * an explicit reason — never silent Sol fallback without a code.
+ * uncalibrated couples fall back with explicit reason codes. On the operational
+ * model, refused efforts step down (e.g. xhigh → high) before Sol medium default.
  */
 export function resolveAdmittedResource(input?: {
   modelId?: string | null;
@@ -51,13 +77,11 @@ export function resolveAdmittedResource(input?: {
   reasonCodes: string[];
 } {
   const mode = admissionModeFromEnv();
-  const requestedModel = (input?.modelId ?? "").trim() || OPERATIONAL_DEFAULT_RESOURCE.modelId;
-  const requestedEffort = (input?.effort ?? "").trim() || OPERATIONAL_DEFAULT_RESOURCE.effort;
-  const admission = admitModelEffort(
-    requestedModel as CognitiveModelId,
-    requestedEffort as CognitiveEffort,
-    mode,
-  );
+  const requestedModelId = ((input?.modelId ?? "").trim() ||
+    OPERATIONAL_DEFAULT_RESOURCE.modelId) as CognitiveModelId;
+  const requestedEffort = ((input?.effort ?? "").trim() ||
+    OPERATIONAL_DEFAULT_RESOURCE.effort) as CognitiveEffort;
+  const admission = admitModelEffort(requestedModelId, requestedEffort, mode);
   if (admission.admitted) {
     return {
       modelId: admission.modelId,
@@ -69,6 +93,26 @@ export function resolveAdmittedResource(input?: {
       ],
     };
   }
+
+  if (getResourceCatalogEntry(requestedModelId)?.admissionStatus === "operational") {
+    for (const lowered of effortDowngradeCandidates(requestedModelId, requestedEffort)) {
+      const retry = admitModelEffort(requestedModelId, lowered, mode);
+      if (retry.admitted) {
+        return {
+          modelId: retry.modelId,
+          effort: retry.effort,
+          reasonCodes: [
+            `RESOURCE_REFUSED_${admission.reasonCode}`,
+            "RESOURCE_FALLBACK_EFFORT_DOWNGRADE",
+            `REQUESTED_EFFORT_${requestedEffort}`,
+            `MODEL_${retry.modelId}`,
+            `EFFORT_${retry.effort}`,
+          ],
+        };
+      }
+    }
+  }
+
   const fallback = admitModelEffort(
     OPERATIONAL_DEFAULT_RESOURCE.modelId,
     OPERATIONAL_DEFAULT_RESOURCE.effort,
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-resources/cognitive-referential.ts b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-resources/cognitive-referential.ts
index 28d8edf2..35e87793 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-resources/cognitive-referential.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-resources/cognitive-referential.ts
@@ -3,9 +3,10 @@
  * CF-allocation.md §4.1–4.5 — 51 elementary work rows; Nora may depart when context warrants.
  */

-import type {
-  CognitiveEffort,
-  CognitiveModelFamily,
+import {
+  COGNITIVE_RESOURCE_CATALOG,
+  type CognitiveEffort,
+  type CognitiveModelFamily,
 } from "./resource-catalog";

 export const COGNITIVE_REFERENTIAL_VERSION =
@@ -498,4 +499,29 @@ export function buildCognitiveReferentialCompactSummary(): readonly string[] {
 }

 export const COGNITIVE_REFERENTIAL_COMPACT_SUMMARY =
-  buildCognitiveReferentialCompactSummary();
\ No newline at end of file
+  buildCognitiveReferentialCompactSummary();
+
+/** Max injected catalog blurb (chars) — full matrix is never inlined in prompts. */
+export const COGNITIVE_GUIDANCE_CATALOG_BLURB_MAX_CHARS = 2_400 as const;
+
+/**
+ * Short Nora-facing catalog + constraints (not the 51-row matrix).
+ * Detailed per-row guidance: server referential by id; compact lines on demand only.
+ */
+export function buildCognitiveGuidanceCatalogBlurb(): string {
+  const models = COGNITIVE_RESOURCE_CATALOG.map((e) => {
+    const band =
+      e.modelId === "gpt-6.2-sol"
+        ? "efforts opérationnels admis: low|medium|high (pré-calibration)"
+        : "candidat documenté — admission opérationnelle après calibration Morris";
+    return `- ${e.modelId} (${e.family}): ${e.positioning}; ${band}.`;
+  }).join("\n");
+  return [
+    "RESSOURCES COGNITIVES (indicatif — Studio tranche réellement l'admission) :",
+    models,
+    `- Référentiel élémentaire : ${COGNITIVE_REFERENTIAL_ROW_COUNT} lignes CF §4.1–4.5 (guidance seulement, pas un moteur de routage).`,
+    "- Tu peux t'en inspirer pour cognitiveProfileHint / effort; Nora peut s'écarter si le contexte l'exige.",
+    "- Ne demande pas la matrice complète dans replyDraft : le détail d'une ligne est disponible côté serveur (getCognitiveGuidanceById / résumé compact à la demande du conducteur).",
+    "- Défaut opérationnel pré-calibration : Sol medium si le couple proposé n'est pas admis.",
+  ].join("\n");
+}
\ No newline at end of file
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-resources/index.ts b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-resources/index.ts
index 6a23d25e..1eb9d191 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-resources/index.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-resources/index.ts
@@ -21,6 +21,8 @@ export {
   COGNITIVE_REFERENTIAL_ROW_COUNT,
   COGNITIVE_REFERENTIAL_VERSION,
   buildCognitiveReferentialCompactSummary,
+  buildCognitiveGuidanceCatalogBlurb,
+  COGNITIVE_GUIDANCE_CATALOG_BLURB_MAX_CHARS,
   getCognitiveGuidanceById,
 } from "./cognitive-referential";

diff --git a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
index f0896fec..ba2056a9 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
@@ -14,6 +14,7 @@ import {
   type CognitivePolicy,
   NORA_STUDY_MODEL,
 } from "./cognitive-policy";
+import { buildCognitiveGuidanceCatalogBlurb } from "./cognitive-resources";
 import {
   buildNoraD4Tools,
   searchProjectResources,
@@ -203,6 +204,8 @@ const SYSTEM_INSTRUCTIONS = [
  */
 export const E05_VISUAL_COMPOSITION_FROZEN = true as const;

+const COGNITIVE_GUIDANCE_CATALOG_BLURB = buildCognitiveGuidanceCatalogBlurb();
+
 export function stripVisualCompositionForFrozenReplies(raw: unknown): unknown {
   if (!E05_VISUAL_COMPOSITION_FROZEN) return raw;
   if (!raw || typeof raw !== "object" || Array.isArray(raw)) return raw;
@@ -1038,6 +1041,8 @@ async function runLiveWithTools(
   const QUALIFICATION_INSTRUCTIONS = [
     SYSTEM_INSTRUCTIONS,
     "",
+    COGNITIVE_GUIDANCE_CATALOG_BLURB,
+    "",
     "SORTIE STRUCTURÉE OBLIGATOIRE (qualification sémantique) :",
     "- Remplis l'enveloppe typée (schemaVersion ml4c-sem-qual-v1).",
     "- replyDraft = texte destiné au Pilote (français, Markdown utile). Vise la concision utile (souvent ≤8k) ; plafond technique 20000. GEL E05 (19/11/2026) : n'émets PAS visualComposition — toute la substance dans replyDraft (titres, listes, tableaux Markdown si utiles). Structure textuelle libre et proportionnée à la question — pas un transcript.",
@@ -1836,6 +1841,37 @@ export async function generateNoraReply(input: NoraGenerateInput): Promise<NoraG
     return stampCkiDelivery(await fixtureReply(input, generationId, policy), input.ckiDelivery, true);
   }

+  // ENV-01 — refuse LIVE when key fingerprint violates lane policy (no cross-lane fallback).
+  const { assertOpenAiKeyForLane } = await import("@/lib/openai-lane-guard");
+  const laneGuard = assertOpenAiKeyForLane();
+  if (!laneGuard.ok) {
+    emitObs({
+      event_name: "d3.nora.provider_attempt",
+      component: "d3.nora_adapter",
+      operation_id: input.toolScope?.operationId,
+      generation_id: generationId,
+      outcome: "FAILED",
+      error_category: laneGuard.reasonCode,
+      policy_version: policy.policyVersion,
+      profile_type:
+        policy.profileType === "TEST_BOUNDARY" ? "TEST_BOUNDARY" : "OPERATIONAL",
+      meta: {
+        kind: "lane_guard",
+        lane: laneGuard.lane,
+        reason_code: laneGuard.reasonCode,
+      },
+    });
+    return stampCkiDelivery(
+      boundaryFail(
+        generationId,
+        `NORA_OPENAI_LANE_GUARD (${laneGuard.reasonCode}) — aucun fallback inter-lanes`,
+        policy,
+      ),
+      input.ckiDelivery,
+      false,
+    );
+  }
+
   try {
     return stampCkiDelivery(await runLiveWithTools(input, generationId, policy), input.ckiDelivery, true);
   } catch (e) {
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/provider-usage.ts b/projects/sfia-studio-next/web/src/domains/conversation/provider-usage.ts
index a47f6b2f..226331ab 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/provider-usage.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/provider-usage.ts
@@ -3,6 +3,14 @@
  * UNVERIFIED / null when the SDK shape does not expose a field.
  */

+export type ProviderRequestUsageEntry = {
+  inputTokens: number | null;
+  outputTokens: number | null;
+  totalTokens: number | null;
+  reasoningTokens: number | null;
+  cachedInputTokens: number | null;
+};
+
 export type ProviderUsageSnapshot = {
   inputTokens: number | null;
   outputTokens: number | null;
@@ -10,11 +18,64 @@ export type ProviderUsageSnapshot = {
   reasoningTokens: number | null;
   cachedInputTokens: number | null;
   providerRequests: number | null;
+  /** Per-request usage when the SDK exposes `requestUsageEntries`. */
+  requestUsageEntries: ProviderRequestUsageEntry[] | null;
   /** Provenance label — never claim values absent from the SDK. */
   provenance: "AGENTS_SDK_RUN_STATE" | "UNAVAILABLE";
   limits: string[];
 };

+function num(v: unknown): number | null {
+  return typeof v === "number" && Number.isFinite(v) ? v : null;
+}
+
+function usageRecord(usage: unknown): Record<string, unknown> | null {
+  if (!usage || typeof usage !== "object") return null;
+  return usage as Record<string, unknown>;
+}
+
+function normalizeRequestUsageEntry(raw: unknown): ProviderRequestUsageEntry | null {
+  if (!raw || typeof raw !== "object") return null;
+  const rec = raw as Record<string, unknown>;
+  const inputTokens = num(rec.inputTokens ?? rec.input_tokens);
+  const outputTokens = num(rec.outputTokens ?? rec.output_tokens);
+  const totalTokens =
+    num(rec.totalTokens ?? rec.total_tokens) ??
+    (inputTokens != null && outputTokens != null
+      ? inputTokens + outputTokens
+      : null);
+  const cachedInputTokens = sumDetailField(
+    rec.inputTokensDetails ?? rec.input_tokens_details,
+    ["cached_tokens", "cachedTokens", "input_cached_tokens"],
+  );
+  const reasoningTokens = sumDetailField(
+    rec.outputTokensDetails ?? rec.output_tokens_details,
+    ["reasoning_tokens", "reasoningTokens"],
+  );
+  if (inputTokens == null && outputTokens == null) return null;
+  return {
+    inputTokens,
+    outputTokens,
+    totalTokens,
+    reasoningTokens,
+    cachedInputTokens,
+  };
+}
+
+function readRequestUsageEntries(usage: unknown): ProviderRequestUsageEntry[] | null {
+  const rec = usageRecord(usage);
+  if (!rec) return null;
+  const raw =
+    rec.requestUsageEntries ??
+    rec.request_usage_entries ??
+    (usage as { requestUsageEntries?: unknown })?.requestUsageEntries;
+  if (!Array.isArray(raw) || raw.length === 0) return null;
+  const parsed = raw
+    .map((e) => normalizeRequestUsageEntry(e))
+    .filter((e): e is ProviderRequestUsageEntry => e != null);
+  return parsed.length > 0 ? parsed : null;
+}
+
 function sumDetailField(
   details: unknown,
   keys: string[],
@@ -59,25 +120,26 @@ export function extractProviderUsageFromRunResult(
         reasoningTokens: null,
         cachedInputTokens: null,
         providerRequests: null,
+        requestUsageEntries: null,
         provenance: "UNAVAILABLE",
         limits: ["PROVIDER_USAGE_ABSENT"],
       };
     }

-    const num = (v: unknown): number | null =>
-      typeof v === "number" && Number.isFinite(v) ? v : null;
+    const usageObj = usage as Record<string, unknown>;
+    const requestUsageEntries = readRequestUsageEntries(usage);

-    const inputTokens = num(usage.inputTokens ?? usage.input_tokens);
-    const outputTokens = num(usage.outputTokens ?? usage.output_tokens);
-    const totalTokens = num(usage.totalTokens ?? usage.total_tokens);
-    const providerRequests = num(usage.requests);
+    const inputTokens = num(usageObj.inputTokens ?? usageObj.input_tokens);
+    const outputTokens = num(usageObj.outputTokens ?? usageObj.output_tokens);
+    const totalTokens = num(usageObj.totalTokens ?? usageObj.total_tokens);
+    const providerRequests = num(usageObj.requests);

     const cachedInputTokens = sumDetailField(
-      usage.inputTokensDetails ?? usage.input_tokens_details,
+      usageObj.inputTokensDetails ?? usageObj.input_tokens_details,
       ["cached_tokens", "cachedTokens", "input_cached_tokens"],
     );
     const reasoningTokens = sumDetailField(
-      usage.outputTokensDetails ?? usage.output_tokens_details,
+      usageObj.outputTokensDetails ?? usageObj.output_tokens_details,
       ["reasoning_tokens", "reasoningTokens"],
     );

@@ -98,6 +160,7 @@ export function extractProviderUsageFromRunResult(
       reasoningTokens,
       cachedInputTokens,
       providerRequests,
+      requestUsageEntries,
       provenance: "AGENTS_SDK_RUN_STATE",
       limits,
     };
@@ -109,8 +172,25 @@ export function extractProviderUsageFromRunResult(
       reasoningTokens: null,
       cachedInputTokens: null,
       providerRequests: null,
+      requestUsageEntries: null,
       provenance: "UNAVAILABLE",
       limits: ["PROVIDER_USAGE_EXTRACT_ERROR"],
     };
   }
 }
+
+/** Prefer SDK per-request usage for tariff (long-context is per request, not summed). */
+export function extractRequestUsageEntriesFromRunResult(
+  result: unknown,
+): ProviderRequestUsageEntry[] | null {
+  try {
+    const r = result as {
+      state?: { usage?: unknown };
+      usage?: unknown;
+    };
+    const usage = r?.state?.usage ?? r?.usage ?? null;
+    return readRequestUsageEntries(usage);
+  } catch {
+    return null;
+  }
+}
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/usage-accounting.ts b/projects/sfia-studio-next/web/src/domains/conversation/usage-accounting.ts
index 66f6e5d4..42fd056f 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/usage-accounting.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/usage-accounting.ts
@@ -3,12 +3,14 @@ import { db } from "@/db/client";
 import { providerUsageObservations } from "@/db/schema";
 import type { CognitiveModelId } from "./cognitive-resources/resource-catalog";
 import {
+  LONG_CONTEXT_INPUT_THRESHOLD_TOKENS,
   TARIFF_CATALOG_VERSION,
   effectiveTariffRates,
   getTariffEntry,
 } from "./cognitive-resources/tariff-catalog";
 import {
   extractProviderUsageFromRunResult,
+  type ProviderRequestUsageEntry,
   type ProviderUsageSnapshot,
 } from "./provider-usage";

@@ -67,6 +69,11 @@ export type CostEstimate = {

 export type IdempotencyKeyInput = {
   granularity: ProviderUsageGranularity;
+  lane?: string | null;
+  scopeId?: string | null;
+  projectId?: string | null;
+  preparationId?: string | null;
+  cognitiveWorkId?: string | null;
   operation?: string | null;
   attemptId?: string | null;
   generationId?: string | null;
@@ -79,8 +86,13 @@ export type IdempotencyKeyInput = {
 /** Stable dedupe key for durable FinOps rows — distinct from business command idempotency. */
 export function buildIdempotencyKey(input: IdempotencyKeyInput): string {
   const canonical = [
-    "finops-obs-v1",
+    "finops-obs-v2",
     input.granularity,
+    input.lane?.trim() ?? "",
+    input.scopeId?.trim() ?? "",
+    input.projectId?.trim() ?? "",
+    input.preparationId?.trim() ?? "",
+    input.cognitiveWorkId?.trim() ?? "",
     input.operation?.trim() ?? "",
     input.attemptId?.trim() ?? "",
     input.generationId?.trim() ?? "",
@@ -99,6 +111,24 @@ function usdPerMillion(tokens: number, rateUsdPerMillion: number): number {
   return (tokens / 1_000_000) * rateUsdPerMillion;
 }

+export type EstimateCostUsdOptions = {
+  tariffVersion?: string;
+  /**
+   * When false, long-context multipliers are never applied (multi-request run aggregate).
+   * Default true — tier follows this row's input token count as a single provider request.
+   */
+  applyLongContextTier?: boolean;
+  /** Model used for tariff was requested but applied model is unverified. */
+  modelAppliedUnverified?: boolean;
+};
+
+function normalizeEstimateOptions(
+  options?: EstimateCostUsdOptions | string,
+): EstimateCostUsdOptions {
+  if (typeof options === "string") return { tariffVersion: options };
+  return options ?? {};
+}
+
 /**
  * Tariff estimate from observed token fields only — never coerces null → 0 for usage inputs.
  * Missing required token aggregates ⇒ UNKNOWN cost.
@@ -109,15 +139,23 @@ export function estimateCostUsd(
     "inputTokens" | "outputTokens" | "cachedInputTokens"
   >,
   model: string | null | undefined,
-  tariffVersion: string = TARIFF_CATALOG_VERSION,
+  options?: EstimateCostUsdOptions | string,
 ): CostEstimate {
+  const {
+    tariffVersion = TARIFF_CATALOG_VERSION,
+    applyLongContextTier = true,
+    modelAppliedUnverified = false,
+  } = normalizeEstimateOptions(options);
   const limits: string[] = [];
+  if (modelAppliedUnverified) {
+    limits.push("MODEL_APPLIED_UNVERIFIED");
+  }
   if (!model || !isCognitiveModelId(model)) {
     return {
       estimatedCostUsd: null,
       costCoverage: "UNKNOWN",
       tariffVersion,
-      limits: ["MODEL_TARIFF_UNKNOWN"],
+      limits: [...limits, "MODEL_TARIFF_UNKNOWN"],
     };
   }
   const { inputTokens, outputTokens, cachedInputTokens } = usage;
@@ -126,19 +164,29 @@ export function estimateCostUsd(
       estimatedCostUsd: null,
       costCoverage: "UNKNOWN",
       tariffVersion,
-      limits: ["TOKEN_AGGREGATES_INCOMPLETE"],
+      limits: [...limits, "TOKEN_AGGREGATES_INCOMPLETE"],
     };
   }

-  const rates = effectiveTariffRates(model, inputTokens);
+  const entry = getTariffEntry(model);
+  const rates =
+    applyLongContextTier
+      ? effectiveTariffRates(model, inputTokens)
+      : entry?.shortContextStandard;
   if (!rates) {
     return {
       estimatedCostUsd: null,
       costCoverage: "UNKNOWN",
       tariffVersion,
-      limits: ["TARIFF_RATES_UNAVAILABLE"],
+      limits: [...limits, "TARIFF_RATES_UNAVAILABLE"],
     };
   }
+  if (
+    !applyLongContextTier &&
+    inputTokens > LONG_CONTEXT_INPUT_THRESHOLD_TOKENS
+  ) {
+    limits.push("LONG_CONTEXT_TIER_SUPPRESSED_AGGREGATE");
+  }

   let costCoverage: CostCoverage = "KNOWN";
   let cached = 0;
@@ -155,6 +203,10 @@ export function estimateCostUsd(
     }
   }

+  if (modelAppliedUnverified && costCoverage === "KNOWN") {
+    costCoverage = "PARTIAL";
+  }
+
   const estimatedCostUsd =
     usdPerMillion(uncached, rates.inputUncachedUsdPerMillion) +
     usdPerMillion(cached, rates.inputCachedReadUsdPerMillion) +
@@ -168,6 +220,28 @@ export function estimateCostUsd(
   };
 }

+function resolveTariffModel(input: Pick<
+  ProviderUsageObservationInput,
+  "modelApplied" | "modelRequested"
+>): { model: string | null; modelAppliedUnverified: boolean } {
+  if (input.modelApplied?.trim()) {
+    return { model: input.modelApplied.trim(), modelAppliedUnverified: false };
+  }
+  if (input.modelRequested?.trim()) {
+    return { model: input.modelRequested.trim(), modelAppliedUnverified: true };
+  }
+  return { model: null, modelAppliedUnverified: false };
+}
+
+function mergeCostCoverage(
+  a: CostCoverage,
+  b: CostCoverage,
+): CostCoverage {
+  if (a === "UNKNOWN" || b === "UNKNOWN") return "UNKNOWN";
+  if (a === "PARTIAL" || b === "PARTIAL") return "PARTIAL";
+  return "KNOWN";
+}
+
 function nullableTokenField(value: number | null | undefined): number | null | undefined {
   if (value === undefined) return undefined;
   if (value == null) return null;
@@ -183,22 +257,32 @@ export type RecordProviderUsageObservationResult = {
 export async function recordProviderUsageObservation(
   input: ProviderUsageObservationInput,
 ): Promise<RecordProviderUsageObservationResult> {
-  const modelForTariff = input.modelApplied ?? input.modelRequested ?? null;
+  const { model: modelForTariff, modelAppliedUnverified } = resolveTariffModel(input);
   const usageSlice = {
     inputTokens: input.inputTokens ?? null,
     outputTokens: input.outputTokens ?? null,
     cachedInputTokens: input.cachedInputTokens ?? null,
   };
-  const tariffVersion = input.tariffVersion ?? TARIFF_CATALOG_VERSION;
+  const estimateOpts: EstimateCostUsdOptions = {
+    tariffVersion: input.tariffVersion ?? TARIFF_CATALOG_VERSION,
+    modelAppliedUnverified,
+    applyLongContextTier: input.granularity !== "GENERATION_AGGREGATE",
+  };
   const cost =
     input.costCoverage != null && input.estimatedCostUsd !== undefined
       ? {
           estimatedCostUsd: input.estimatedCostUsd,
-          costCoverage: input.costCoverage,
-          tariffVersion,
-          limits: input.limits ?? [],
+          costCoverage: mergeCostCoverage(
+            input.costCoverage,
+            modelAppliedUnverified ? "PARTIAL" : input.costCoverage,
+          ),
+          tariffVersion: estimateOpts.tariffVersion ?? TARIFF_CATALOG_VERSION,
+          limits: [
+            ...(input.limits ?? []),
+            ...(modelAppliedUnverified ? ["MODEL_APPLIED_UNVERIFIED"] : []),
+          ],
         }
-      : estimateCostUsd(usageSlice, modelForTariff, tariffVersion);
+      : estimateCostUsd(usageSlice, modelForTariff, estimateOpts);

   const mergedLimits = [...new Set([...(input.limits ?? []), ...cost.limits])];
   const id = randomUUID();
@@ -282,22 +366,20 @@ export type NoraProviderUsageHookInput = {
  * E04 wiring entrypoint — map Agents SDK run result → durable FinOps row (idempotent).
  * Safe to call from nora-adapter / run-nora-cognitive-turn once per provider invocation.
  */
-export async function recordNoraProviderUsageFromRunResult(
-  input: NoraProviderUsageHookInput,
-): Promise<RecordProviderUsageObservationResult> {
-  const snapshot = extractProviderUsageFromRunResult(input.runResult);
-  const granularity = input.granularity ?? "REQUEST";
-  const idempotencyKey = buildIdempotencyKey({
-    granularity,
-    operation: input.operation,
-    attemptId: input.attemptId,
-    generationId: input.generationId,
-    segmentIndex: input.segmentIndex,
-    providerResponseId: input.providerResponseId,
-    callOrdinal: input.callOrdinal,
-  });
+function idempotencyScope(input: NoraProviderUsageHookInput) {
+  const lane =
+    process.env.STUDIO_LANE?.trim().toUpperCase() || "UNKNOWN";
+  return {
+    lane,
+    scopeId: input.scopeId,
+    projectId: input.projectId,
+    preparationId: input.preparationId,
+    cognitiveWorkId: input.cognitiveWorkId,
+  };
+}

-  return recordProviderUsageObservation({
+function observationCommon(input: NoraProviderUsageHookInput) {
+  return {
     scopeId: input.scopeId,
     ownerPilotId: input.ownerPilotId,
     projectId: input.projectId,
@@ -313,18 +395,103 @@ export async function recordNoraProviderUsageFromRunResult(
     modelApplied: input.modelApplied,
     effortRequested: input.effortRequested,
     effortApplied: input.effortApplied,
+    durationMs: input.durationMs,
+    status: input.status,
+    providerResponseId: input.providerResponseId,
+    errorCategory: input.errorCategory,
+  };
+}
+
+async function recordPerRequestUsages(
+  input: NoraProviderUsageHookInput,
+  entries: ProviderRequestUsageEntry[],
+  baseLimits: string[],
+): Promise<RecordProviderUsageObservationResult> {
+  const scope = idempotencyScope(input);
+  let last: RecordProviderUsageObservationResult = {
+    inserted: false,
+    id: "",
+  };
+  for (let i = 0; i < entries.length; i++) {
+    const entry = entries[i]!;
+    const callOrdinal = input.callOrdinal ?? i;
+    const idempotencyKey = buildIdempotencyKey({
+      ...scope,
+      granularity: "REQUEST",
+      operation: input.operation,
+      attemptId: input.attemptId,
+      generationId: input.generationId,
+      segmentIndex: input.segmentIndex,
+      providerResponseId: input.providerResponseId,
+      callOrdinal,
+    });
+    last = await recordProviderUsageObservation({
+      ...observationCommon(input),
+      inputTokens: entry.inputTokens,
+      outputTokens: entry.outputTokens,
+      totalTokens: entry.totalTokens,
+      cachedInputTokens: entry.cachedInputTokens,
+      reasoningTokens: entry.reasoningTokens,
+      providerRequests: 1,
+      granularity: "REQUEST",
+      idempotencyKey,
+      limits: baseLimits,
+    });
+  }
+  return last;
+}
+
+export async function recordNoraProviderUsageFromRunResult(
+  input: NoraProviderUsageHookInput,
+): Promise<RecordProviderUsageObservationResult> {
+  const snapshot = extractProviderUsageFromRunResult(input.runResult);
+  const baseLimits = [
+    ...snapshot.limits,
+    ...(snapshot.provenance === "UNAVAILABLE" ? ["PROVIDER_USAGE_UNAVAILABLE"] : []),
+  ];
+  const forcedGranularity = input.granularity;
+
+  const perRequest = snapshot.requestUsageEntries;
+  if (perRequest && perRequest.length > 0 && forcedGranularity !== "GENERATION_AGGREGATE") {
+    return recordPerRequestUsages(input, perRequest, baseLimits);
+  }
+
+  const multiRequestWithoutBreakdown =
+    (snapshot.providerRequests ?? 0) > 1 && (!perRequest || perRequest.length === 0);
+  const granularity: ProviderUsageGranularity =
+    forcedGranularity ??
+    (multiRequestWithoutBreakdown ? "GENERATION_AGGREGATE" : "REQUEST");
+
+  const aggregateLimits = [...baseLimits];
+  if (granularity === "GENERATION_AGGREGATE") {
+    aggregateLimits.push("MULTI_REQUEST_AGGREGATE_ONLY");
+    if ((snapshot.providerRequests ?? 0) > 1) {
+      aggregateLimits.push("PER_REQUEST_USAGE_UNAVAILABLE");
+    }
+  }
+
+  const scope = idempotencyScope(input);
+  const idempotencyKey = buildIdempotencyKey({
+    ...scope,
+    granularity,
+    operation: input.operation,
+    attemptId: input.attemptId,
+    generationId: input.generationId,
+    segmentIndex: input.segmentIndex,
+    providerResponseId: input.providerResponseId,
+    callOrdinal: input.callOrdinal,
+  });
+
+  return recordProviderUsageObservation({
+    ...observationCommon(input),
     inputTokens: snapshot.inputTokens,
     outputTokens: snapshot.outputTokens,
     totalTokens: snapshot.totalTokens,
     cachedInputTokens: snapshot.cachedInputTokens,
     reasoningTokens: snapshot.reasoningTokens,
     providerRequests: snapshot.providerRequests,
-    durationMs: input.durationMs,
-    status: input.status,
     granularity,
-    providerResponseId: input.providerResponseId,
-    errorCategory: input.errorCategory,
     idempotencyKey,
-    limits: [...snapshot.limits, ...(snapshot.provenance === "UNAVAILABLE" ? ["PROVIDER_USAGE_UNAVAILABLE"] : [])],
+    limits: aggregateLimits,
   });
 }
\ No newline at end of file
diff --git a/projects/sfia-studio-next/web/src/domains/finops/usage-projection.ts b/projects/sfia-studio-next/web/src/domains/finops/usage-projection.ts
index e4faf32d..4b134354 100644
--- a/projects/sfia-studio-next/web/src/domains/finops/usage-projection.ts
+++ b/projects/sfia-studio-next/web/src/domains/finops/usage-projection.ts
@@ -52,11 +52,15 @@ export function aggregateEstimatedCost(rows: CostRow[]): MeasuredValue<number> {
   let sum = 0;
   let hasKnown = false;
   let hasUnknown = false;
+  let hasPartial = false;
   for (const r of rows) {
     if (r.costCoverage === "UNKNOWN" || r.estimatedCostUsd == null) {
       hasUnknown = true;
       continue;
     }
+    if (r.costCoverage === "PARTIAL") {
+      hasPartial = true;
+    }
     const n = Number(r.estimatedCostUsd);
     if (!Number.isFinite(n)) {
       hasUnknown = true;
@@ -66,11 +70,13 @@ export function aggregateEstimatedCost(rows: CostRow[]): MeasuredValue<number> {
     hasKnown = true;
   }
   if (!hasKnown) return { kind: "unknown", reason: "Aucun coût mesuré" };
-  if (hasUnknown) {
+  if (hasUnknown || hasPartial) {
     return {
       kind: "partial",
       value: sum,
-      note: "Certains coûts restent inconnus",
+      note: hasUnknown
+        ? "Certains coûts restent inconnus"
+        : "Certains coûts sont partiels",
     };
   }
   return { kind: "known", value: sum };
@@ -101,16 +107,35 @@ export function computeMeasureCoveragePercent(
   rows: Array<{ costCoverage: string; providerRequests: number | null }>,
 ): MeasuredValue<number> {
   if (rows.length === 0) return { kind: "empty" };
-  const totalReq = rows.reduce((acc, r) => acc + (r.providerRequests ?? 1), 0);
-  const measuredReq = rows.reduce((acc, r) => {
-    if (r.costCoverage === "KNOWN" || r.costCoverage === "PARTIAL") {
-      return acc + (r.providerRequests ?? 1);
+  let totalReq = 0;
+  let measuredReq = 0;
+  let missingRequestCounts = false;
+  for (const r of rows) {
+    if (r.providerRequests == null || !Number.isFinite(r.providerRequests)) {
+      missingRequestCounts = true;
+      continue;
+    }
+    totalReq += r.providerRequests;
+    if (r.costCoverage === "KNOWN") {
+      measuredReq += r.providerRequests;
+    } else if (r.costCoverage === "PARTIAL") {
+      measuredReq += r.providerRequests;
     }
-    return acc;
-  }, 0);
+  }
+  if (missingRequestCounts && totalReq <= 0) {
+    return { kind: "unknown", reason: "Requêtes non observées" };
+  }
   if (totalReq <= 0) return { kind: "unknown", reason: "Requêtes non observées" };
   const pct = Math.round((measuredReq / totalReq) * 100);
-  return { kind: "known", value: Math.min(100, Math.max(0, pct)) };
+  const value = Math.min(100, Math.max(0, pct));
+  if (missingRequestCounts) {
+    return {
+      kind: "partial",
+      value,
+      note: "Certaines lignes sans nombre de requêtes",
+    };
+  }
+  return { kind: "known", value };
 }

 export function formatUsdFr(value: number): string {
@@ -121,6 +146,75 @@ export function formatUsdFr(value: number): string {
   return `${s} $`;
 }

+/** Compact USD for chart Y-axis (Figma 13.03). */
+export function formatUsdAxisFr(value: number): string {
+  const s = value.toLocaleString("fr-FR", {
+    minimumFractionDigits: value > 0 && value < 1 ? 1 : 0,
+    maximumFractionDigits: value > 0 && value < 1 ? 2 : 0,
+  });
+  return `${s} $`;
+}
+
+export function finOpsDailyChartScaleMax(costs: Array<number | null>): number {
+  let max = 0;
+  for (const c of costs) {
+    if (c != null && Number.isFinite(c) && c > max) max = c;
+  }
+  return max > 0 ? max : 1;
+}
+
+function finOpsNiceChartTop(max: number): number {
+  if (max <= 1) return 1;
+  if (max <= 3) return 3;
+  if (max <= 6) return 6;
+  if (max <= 10) return 10;
+  const mag = 10 ** Math.floor(Math.log10(max));
+  return Math.ceil(max / mag) * mag;
+}
+
+/** Descending USD ticks for a daily spend chart (top → 0). */
+export function finOpsDailyChartYTicks(scaleMax: number): number[] {
+  const top = finOpsNiceChartTop(scaleMax);
+  const steps = top <= 1 ? 2 : 3;
+  const step = top / steps;
+  const ticks: number[] = [];
+  for (let i = steps; i >= 0; i--) {
+    ticks.push(Math.round(step * i * 1000) / 1000);
+  }
+  return ticks;
+}
+
+export function finOpsDailyXAxisLabels(periodDays: number): { start: string; end: string } {
+  const span = Math.max(1, periodDays);
+  return { start: `J-${span - 1}`, end: "Aujourd'hui" };
+}
+
+export function formatModelBreakdownCost(row: {
+  costUsd: number | null;
+  coverage: string;
+}): string {
+  if (row.costUsd == null || row.coverage === "UNKNOWN") {
+    return "Inconnu";
+  }
+  if (row.coverage === "PARTIAL") {
+    return formatMeasuredUsd({ kind: "partial", value: row.costUsd });
+  }
+  return formatMeasuredUsd({ kind: "known", value: row.costUsd });
+}
+
+export function mapCostCoverageLabel(coverage: string): string {
+  switch ((coverage ?? "").toUpperCase()) {
+    case "KNOWN":
+      return "Mesuré";
+    case "PARTIAL":
+      return "Partiel";
+    case "UNKNOWN":
+      return "Inconnu";
+    default:
+      return coverage || "—";
+  }
+}
+
 export function formatTokenCountFr(value: number): string {
   if (value >= 1_000_000) {
     const m = value / 1_000_000;
diff --git a/projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts b/projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts
index 926b6e11..fcadef88 100644
--- a/projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts
+++ b/projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts
@@ -167,7 +167,14 @@ function bucketModelBreakdown(rows: ObservationRow[]): FinOpsSummaryDto["modelBr
       return {
         model,
         costUsd: agg.kind === "known" || agg.kind === "partial" ? agg.value : null,
-        coverage: agg.kind === "unknown" ? "UNKNOWN" : agg.kind === "empty" ? "EMPTY" : "KNOWN",
+        coverage:
+          agg.kind === "unknown"
+            ? "UNKNOWN"
+            : agg.kind === "empty"
+              ? "EMPTY"
+              : agg.kind === "partial"
+                ? "PARTIAL"
+                : "KNOWN",
       };
     })
     .sort((a, b) => (b.costUsd ?? -1) - (a.costUsd ?? -1));
diff --git a/projects/sfia-studio-next/web/src/lib/openai-lane-guard.ts b/projects/sfia-studio-next/web/src/lib/openai-lane-guard.ts
new file mode 100644
index 00000000..4df20245
--- /dev/null
+++ b/projects/sfia-studio-next/web/src/lib/openai-lane-guard.ts
@@ -0,0 +1,101 @@
+/**
+ * ENV-01 — OpenAI key / lane isolation (fail-closed).
+ *
+ * Never log or return the raw key. Fingerprints are SHA-256 hex truncated to 16 chars.
+ * A missing critical config refuses the LIVE path — no cross-lane fallback.
+ */
+
+import { createHash } from "node:crypto";
+
+export type OpenAiLaneGuardResult =
+  | { ok: true; lane: string; keyFingerprint: string }
+  | {
+      ok: false;
+      lane: string;
+      reasonCode:
+        | "STUDIO_LANE_MISSING"
+        | "OPENAI_KEY_MISSING"
+        | "OPENAI_KEY_FINGERPRINT_MISMATCH"
+        | "OPENAI_KEY_FORBIDDEN_PEER"
+        | "OPENAI_KEY_EMPTY";
+      reason: string;
+    };
+
+/** Non-secret fingerprint for comparison / observability. */
+export function openAiKeyFingerprint(key: string): string {
+  return createHash("sha256").update(key, "utf8").digest("hex").slice(0, 16);
+}
+
+function studioLane(env: NodeJS.ProcessEnv = process.env): string {
+  return (env.STUDIO_LANE ?? "").trim().toUpperCase();
+}
+
+/**
+ * Assert the process OpenAI key belongs to this lane.
+ *
+ * Env (non-secret):
+ * - `SFIA_OPENAI_EXPECTED_KEY_FP` — must match current key fingerprint when set
+ * - `SFIA_OPENAI_FORBIDDEN_KEY_FP` — comma-separated peer fingerprints that must NOT match
+ *   (e.g. RECETTE forbids the DEV key fingerprint once a distinct RECETTE key is in place)
+ */
+export function assertOpenAiKeyForLane(
+  env: NodeJS.ProcessEnv = process.env,
+): OpenAiLaneGuardResult {
+  const lane = studioLane(env);
+  if (!lane || lane === "UNKNOWN") {
+    return {
+      ok: false,
+      lane: lane || "UNKNOWN",
+      reasonCode: "STUDIO_LANE_MISSING",
+      reason: "STUDIO_LANE requis pour l'admission OpenAI (fail-closed)",
+    };
+  }
+
+  const key = (env.OPENAI_API_KEY ?? "").trim();
+  if (!key) {
+    return {
+      ok: false,
+      lane,
+      reasonCode: "OPENAI_KEY_MISSING",
+      reason: `OPENAI_API_KEY absent pour lane ${lane} — aucun fallback inter-lanes`,
+    };
+  }
+
+  const keyFingerprint = openAiKeyFingerprint(key);
+  if (!keyFingerprint) {
+    return {
+      ok: false,
+      lane,
+      reasonCode: "OPENAI_KEY_EMPTY",
+      reason: "OPENAI_API_KEY vide après trim",
+    };
+  }
+
+  const expected = (env.SFIA_OPENAI_EXPECTED_KEY_FP ?? "").trim().toLowerCase();
+  if (expected && expected !== keyFingerprint) {
+    return {
+      ok: false,
+      lane,
+      reasonCode: "OPENAI_KEY_FINGERPRINT_MISMATCH",
+      reason: `Empreinte OpenAI hors politique pour lane ${lane}`,
+    };
+  }
+
+  const forbiddenRaw = (env.SFIA_OPENAI_FORBIDDEN_KEY_FP ?? "").trim().toLowerCase();
+  if (forbiddenRaw) {
+    const forbidden = forbiddenRaw
+      .split(",")
+      .map((s) => s.trim())
+      .filter(Boolean);
+    if (forbidden.includes(keyFingerprint)) {
+      return {
+        ok: false,
+        lane,
+        reasonCode: "OPENAI_KEY_FORBIDDEN_PEER",
+        reason: `Clé OpenAI interdite pour lane ${lane} (empreinte pair / contamination)`,
+      };
+    }
+  }
+
+  return { ok: true, lane, keyFingerprint };
+}
diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-c16-cognitive-integration.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-c16-cognitive-integration.test.ts
index fe0604b2..d934b64d 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml5-c16-cognitive-integration.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-c16-cognitive-integration.test.ts
@@ -99,6 +99,44 @@ describe("ML5 C16 — integrated cognitive conductor", () => {
     expect(result.work.status).toBe("SUSPENDED");
   });

+  it("resolvePolicy can vary effort across segments without changing workId", async () => {
+    const { runCognitiveConductor } = await import(
+      "@/domains/conversation/cognitive-conductor"
+    );
+    const { buildCognitivePolicy } = await import(
+      "@/domains/conversation/cognitive-policy"
+    );
+    const policies: Array<{ effort: string; segmentIndex: number }> = [];
+    const result = await runCognitiveConductor({
+      pilotId: "pilot",
+      preparationId: "prep",
+      objective: "adaptive effort",
+      maxSegmentsThisInvocation: 2,
+      resolvePolicy: (_work, segmentIndex) => {
+        const policy = buildCognitivePolicy("adaptive effort", "TEST_BOUNDARY", {
+          effortHint: segmentIndex === 0 ? "low" : "high",
+        });
+        policies.push({ effort: policy.effortRequested, segmentIndex });
+        return policy;
+      },
+      runSegment: async ({ segmentIndex }) => ({
+        replyText: `seg-${segmentIndex}`,
+        qualification: null,
+        investigation: {
+          ...createEmptyInvestigation("adaptive effort"),
+          remainingWork: segmentIndex === 0 ? ["more"] : [],
+        },
+        continueWork: segmentIndex === 0,
+        resourcesDelta: {},
+      }),
+    });
+    expect(result.work.id).toBe("cgw_test");
+    expect(policies).toHaveLength(2);
+    expect(policies[0]!.effort).toBe("low");
+    expect(policies[1]!.effort).toBe("high");
+    expect(policies[0]!.effort).not.toBe(policies[1]!.effort);
+  });
+
   it("completes when segment signals no continuation", async () => {
     const { runCognitiveConductor } = await import(
       "@/domains/conversation/cognitive-conductor"
diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-cognitive-resources.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-cognitive-resources.test.ts
index 6492cf34..6bc00e35 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml5-cognitive-resources.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-cognitive-resources.test.ts
@@ -1,7 +1,12 @@
-import { describe, expect, it } from "vitest";
-import { NORA_STUDY_MODEL } from "@/domains/conversation/cognitive-policy";
+import { afterEach, describe, expect, it } from "vitest";
+import {
+  NORA_STUDY_MODEL,
+  buildCognitivePolicy,
+  resolveAdmittedResource,
+} from "@/domains/conversation/cognitive-policy";
 import {
   COGNITIVE_GUIDANCE_ROWS,
+  COGNITIVE_GUIDANCE_CATALOG_BLURB_MAX_CHARS,
   COGNITIVE_REFERENTIAL_COMPACT_SUMMARY,
   COGNITIVE_REFERENTIAL_ROW_COUNT,
   COGNITIVE_RESOURCE_CATALOG,
@@ -12,6 +17,7 @@ import {
   TARIFF_PROVENANCE,
   admitModelEffort,
   applyLongContextMultipliers,
+  buildCognitiveGuidanceCatalogBlurb,
   effectiveTariffRates,
   getCognitiveGuidanceById,
   getTariffEntry,
@@ -55,6 +61,24 @@ describe("ML5 E02 — cognitive referential (51 guidance rows)", () => {
     expect(COGNITIVE_REFERENTIAL_COMPACT_SUMMARY.length).toBe(51);
     expect(COGNITIVE_REFERENTIAL_COMPACT_SUMMARY[0]).toMatch(/^cog-4\.1-01\|/);
   });
+
+  it("CF §4.1–4.5 section counts sum to 51", () => {
+    const counts = { "4.1": 0, "4.2": 0, "4.3": 0, "4.4": 0, "4.5": 0 };
+    for (const row of COGNITIVE_GUIDANCE_ROWS) {
+      counts[row.section] += 1;
+    }
+    expect(counts).toEqual({ "4.1": 9, "4.2": 10, "4.3": 9, "4.4": 11, "4.5": 12 });
+  });
+
+  it("catalog blurb stays bounded and does not embed 51 matrix lines", () => {
+    const blurb = buildCognitiveGuidanceCatalogBlurb();
+    expect(blurb.length).toBeLessThanOrEqual(COGNITIVE_GUIDANCE_CATALOG_BLURB_MAX_CHARS);
+    expect(blurb).toMatch(/getCognitiveGuidanceById/);
+    expect(blurb.split("\n").length).toBeLessThan(20);
+    for (const line of COGNITIVE_REFERENTIAL_COMPACT_SUMMARY) {
+      expect(blurb).not.toContain(line);
+    }
+  });
 });

 describe("ML5 E02 — tariff catalog §3.2", () => {
@@ -119,4 +143,53 @@ describe("ML5 E02 — resource admission", () => {
       false,
     );
   });
+});
+
+describe("ML5 E02 — resolveAdmittedResource", () => {
+  const prevMode = process.env.SFIA_COGNITIVE_ADMISSION_MODE;
+
+  afterEach(() => {
+    if (prevMode === undefined) delete process.env.SFIA_COGNITIVE_ADMISSION_MODE;
+    else process.env.SFIA_COGNITIVE_ADMISSION_MODE = prevMode;
+  });
+
+  it("operational refuses Luna with explicit fallback codes", () => {
+    process.env.SFIA_COGNITIVE_ADMISSION_MODE = "operational";
+    const r = resolveAdmittedResource({ modelId: "gpt-6-luna", effort: "medium" });
+    expect(r.modelId).toBe("gpt-6.2-sol");
+    expect(r.effort).toBe("medium");
+    expect(r.reasonCodes).toContain("RESOURCE_REFUSED_UNCALIBRATED_MODEL_OPERATIONAL");
+    expect(r.reasonCodes).toContain("RESOURCE_FALLBACK_OPERATIONAL_DEFAULT");
+  });
+
+  it("calibration admits Luna operational couple", () => {
+    process.env.SFIA_COGNITIVE_ADMISSION_MODE = "calibration";
+    const r = resolveAdmittedResource({ modelId: "gpt-6-luna", effort: "low" });
+    expect(r.modelId).toBe("gpt-6-luna");
+    expect(r.effort).toBe("low");
+    expect(r.reasonCodes).toContain("RESOURCE_ADMITTED_CALIBRATION");
+  });
+
+  it("downgrades Sol xhigh to high before Sol medium default", () => {
+    process.env.SFIA_COGNITIVE_ADMISSION_MODE = "operational";
+    const r = resolveAdmittedResource({ modelId: "gpt-6.2-sol", effort: "xhigh" });
+    expect(r.modelId).toBe("gpt-6.2-sol");
+    expect(r.effort).toBe("high");
+    expect(r.reasonCodes).toContain("RESOURCE_REFUSED_SOL_EFFORT_NOT_OPERATIONAL_BAND");
+    expect(r.reasonCodes).toContain("RESOURCE_FALLBACK_EFFORT_DOWNGRADE");
+    expect(r.reasonCodes).toContain("REQUESTED_EFFORT_xhigh");
+    expect(r.reasonCodes).not.toContain("RESOURCE_FALLBACK_OPERATIONAL_DEFAULT");
+  });
+
+  it("buildCognitivePolicy propagates admission reason codes", () => {
+    process.env.SFIA_COGNITIVE_ADMISSION_MODE = "operational";
+    const p = buildCognitivePolicy("test", "TEST_BOUNDARY", {
+      modelHint: "gpt-6.2-sol",
+      effortHint: "max",
+    });
+    expect(p.modelRequested).toBe("gpt-6.2-sol");
+    expect(p.effortRequested).toBe("high");
+    expect(p.reasonCodes.some((c) => c.startsWith("RESOURCE_REFUSED_"))).toBe(true);
+    expect(p.reasonCodes).toContain("RESOURCE_FALLBACK_EFFORT_DOWNGRADE");
+  });
 });
\ No newline at end of file
diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-e03-usage-accounting.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-e03-usage-accounting.test.ts
index 05691808..b9baad35 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml5-e03-usage-accounting.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-e03-usage-accounting.test.ts
@@ -3,6 +3,7 @@ import {
   buildIdempotencyKey,
   estimateCostUsd,
 } from "@/domains/conversation/usage-accounting";
+import { extractProviderUsageFromRunResult } from "@/domains/conversation/provider-usage";

 describe("ML5 E03 — buildIdempotencyKey", () => {
   it("is stable for the same logical provider call", () => {
@@ -44,6 +45,20 @@ describe("ML5 E03 — buildIdempotencyKey", () => {
     const agg = buildIdempotencyKey({ ...parts, granularity: "GENERATION_AGGREGATE" });
     expect(req).not.toBe(agg);
   });
+
+  it("differs across project scope (finops-obs-v2)", () => {
+    const base = {
+      granularity: "REQUEST" as const,
+      operation: "nora.generate_reply",
+      attemptId: "att-1",
+      generationId: "gen-1",
+      lane: "DEV",
+      projectId: "proj-a",
+    };
+    expect(buildIdempotencyKey(base)).not.toBe(
+      buildIdempotencyKey({ ...base, projectId: "proj-b" }),
+    );
+  });
 });

 describe("ML5 E03 — estimateCostUsd", () => {
@@ -87,6 +102,85 @@ describe("ML5 E03 — estimateCostUsd", () => {
     expect(r.estimatedCostUsd).toBeCloseTo(0.01 + 0.005, 5);
   });

+  it("marks PARTIAL when tariff uses modelRequested only", () => {
+    const r = estimateCostUsd(
+      { inputTokens: 1_000, outputTokens: 100, cachedInputTokens: 0 },
+      "gpt-6-luna",
+      { modelAppliedUnverified: true },
+    );
+    expect(r.costCoverage).toBe("PARTIAL");
+    expect(r.limits).toContain("MODEL_APPLIED_UNVERIFIED");
+  });
+
+  it("two 150k-input requests must not imply long-context on a 300k aggregate", () => {
+    const oneRequest = (inputTokens: number, outputTokens: number) =>
+      estimateCostUsd(
+        { inputTokens, outputTokens, cachedInputTokens: 0 },
+        "gpt-6.1-terra",
+      );
+    const perRequestTotal =
+      oneRequest(150_000, 500).estimatedCostUsd! +
+      oneRequest(150_000, 500).estimatedCostUsd!;
+    const mistakenAggregateTier = estimateCostUsd(
+      { inputTokens: 300_000, outputTokens: 1_000, cachedInputTokens: 0 },
+      "gpt-6.1-terra",
+    );
+    const safeAggregate = estimateCostUsd(
+      { inputTokens: 300_000, outputTokens: 1_000, cachedInputTokens: 0 },
+      "gpt-6.1-terra",
+      { applyLongContextTier: false },
+    );
+    expect(mistakenAggregateTier.estimatedCostUsd!).toBeGreaterThan(perRequestTotal);
+    expect(safeAggregate.estimatedCostUsd!).toBeCloseTo(perRequestTotal, 4);
+    expect(safeAggregate.limits).toContain("LONG_CONTEXT_TIER_SUPPRESSED_AGGREGATE");
+  });
+
+  it("extracts per-request usage entries from Agents SDK shape", () => {
+    const snap = extractProviderUsageFromRunResult({
+      state: {
+        usage: {
+          requests: 2,
+          inputTokens: 300_000,
+          outputTokens: 2_000,
+          requestUsageEntries: [
+            {
+              inputTokens: 150_000,
+              outputTokens: 1_000,
+              cachedInputTokens: 0,
+              inputTokensDetails: [{ cached_tokens: 0 }],
+            },
+            {
+              inputTokens: 150_000,
+              outputTokens: 1_000,
+              inputTokensDetails: [{ cached_tokens: 0 }],
+            },
+          ],
+        },
+      },
+    });
+    expect(snap.requestUsageEntries).toHaveLength(2);
+    expect(snap.requestUsageEntries![0]!.inputTokens).toBe(150_000);
+    const tiered = snap.requestUsageEntries!.map((e) =>
+      estimateCostUsd(
+        {
+          inputTokens: e.inputTokens,
+          outputTokens: e.outputTokens,
+          cachedInputTokens: e.cachedInputTokens,
+        },
+        "gpt-6.1-terra",
+      ),
+    );
+    expect(tiered.every((t) => t.costCoverage === "KNOWN")).toBe(true);
+    expect(
+      tiered[0]!.estimatedCostUsd! + tiered[1]!.estimatedCostUsd!,
+    ).toBeLessThan(
+      estimateCostUsd(
+        { inputTokens: 300_000, outputTokens: 2_000, cachedInputTokens: 0 },
+        "gpt-6.1-terra",
+      ).estimatedCostUsd!,
+    );
+  });
+
   it("applies long-context tier from input token threshold on a single request", () => {
     const below = estimateCostUsd(
       {
diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-finops-usage-projection.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-finops-usage-projection.test.ts
index 4fe05e1e..508fa077 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml5-finops-usage-projection.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-finops-usage-projection.test.ts
@@ -4,6 +4,10 @@ import {
   aggregateTokenTotal,
   computeMeasureCoveragePercent,
   formatMeasuredUsd,
+  finOpsDailyChartYTicks,
+  finOpsDailyXAxisLabels,
+  formatModelBreakdownCost,
+  formatUsdAxisFr,
   parseFinOpsPeriodDays,
   resolvePersonalSettingsActive,
   tokenTotalForRow,
@@ -16,6 +20,15 @@ describe("ML5 E06 — FinOps usage projection", () => {
     expect(parseFinOpsPeriodDays("999")).toBe(30);
   });

+  it("aggregateEstimatedCost returns partial when any row is PARTIAL", () => {
+    const r = aggregateEstimatedCost([
+      { estimatedCostUsd: "1.5", costCoverage: "KNOWN" },
+      { estimatedCostUsd: "0.5", costCoverage: "PARTIAL" },
+    ]);
+    expect(r.kind).toBe("partial");
+    if (r.kind === "partial") expect(r.value).toBeCloseTo(2);
+  });
+
   it("aggregateEstimatedCost never invents zero when all costs unknown", () => {
     const r = aggregateEstimatedCost([
       { estimatedCostUsd: null, costCoverage: "UNKNOWN" },
@@ -43,9 +56,42 @@ describe("ML5 E06 — FinOps usage projection", () => {
     expect(computeMeasureCoveragePercent([]).kind).toBe("empty");
   });

+  it("computeMeasureCoveragePercent does not assume request count 1", () => {
+    const unknown = computeMeasureCoveragePercent([
+      { costCoverage: "KNOWN", providerRequests: null },
+    ]);
+    expect(unknown.kind).toBe("unknown");
+    const mixed = computeMeasureCoveragePercent([
+      { costCoverage: "KNOWN", providerRequests: 2 },
+      { costCoverage: "UNKNOWN", providerRequests: null },
+    ]);
+    expect(mixed.kind).toBe("partial");
+    if (mixed.kind === "partial") expect(mixed.value).toBe(100);
+  });
+
   it("resolvePersonalSettingsActive maps settings routes", () => {
     expect(resolvePersonalSettingsActive("/settings/integrations")).toBe("integrations");
     expect(resolvePersonalSettingsActive("/settings/consumption/travaux/x")).toBe("consumption");
     expect(resolvePersonalSettingsActive("/portfolio")).toBeNull();
   });
+
+  it("formatUsdAxisFr uses compact dollars for chart ticks", () => {
+    expect(formatUsdAxisFr(3)).toBe("3 $");
+    expect(formatUsdAxisFr(0)).toBe("0 $");
+  });
+
+  it("finOpsDailyXAxisLabels matches Figma J-29 / Aujourd'hui", () => {
+    expect(finOpsDailyXAxisLabels(30)).toEqual({ start: "J-29", end: "Aujourd'hui" });
+  });
+
+  it("finOpsDailyChartYTicks descends from scale max", () => {
+    const ticks = finOpsDailyChartYTicks(2.4);
+    expect(ticks[0]).toBe(3);
+    expect(ticks[ticks.length - 1]).toBe(0);
+  });
+
+  it("formatModelBreakdownCost never shows zero for unknown coverage", () => {
+    expect(formatModelBreakdownCost({ costUsd: null, coverage: "UNKNOWN" })).toBe("Inconnu");
+    expect(formatModelBreakdownCost({ costUsd: 1.2, coverage: "PARTIAL" })).toContain("1,20");
+  });
 });
\ No newline at end of file
diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-residual-abcd.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-residual-abcd.test.ts
index 43d80496..e5801b06 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml5-residual-abcd.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-residual-abcd.test.ts
@@ -60,8 +60,10 @@ describe("A — investigation continuation / restitution", () => {
       state: empty,
       suspendReason: "GLOBAL_TOKEN_BUDGET_EXHAUSTED",
     });
-    expect(t1).toMatch(/Aucune conclusion métier fiable/);
-    expect(t1).toMatch(/GLOBAL_TOKEN_BUDGET_EXHAUSTED/);
+    // Product copy (as-built): honest empty acquis — no invented conclusions.
+    expect(t1).toMatch(/Aucun acquis métier consolidé/);
+    // Suspend reason may be humanized; raw code or "limite de ressources".
+    expect(t1).toMatch(/GLOBAL_TOKEN_BUDGET_EXHAUSTED|limite de ressources/i);

     const rich = createEmptyInvestigation("y");
     rich.questions = [
@@ -81,11 +83,12 @@ describe("A — investigation continuation / restitution", () => {
     expect(scaleSegmentCharBudget({ baseChars: 40_000, usedTokens: 10_000 }).reasonCode).toBe(
       "SEGMENT_BUDGET_FULL",
     );
+    // Envelope default 2M — reduction starts below 50% remaining headroom.
     expect(
-      scaleSegmentCharBudget({ baseChars: 40_000, usedTokens: 120_000 }).chars,
+      scaleSegmentCharBudget({ baseChars: 40_000, usedTokens: 1_100_000 }).chars,
     ).toBeLessThan(40_000);
     expect(
-      scaleSegmentCharBudget({ baseChars: 40_000, usedTokens: 180_000 }).reasonCode,
+      scaleSegmentCharBudget({ baseChars: 40_000, usedTokens: 1_700_000 }).reasonCode,
     ).toBe("SEGMENT_BUDGET_MINIMAL_RESTITUTION");
   });
 });
diff --git a/projects/sfia-studio-next/web/tests/unit/openai-lane-guard.test.ts b/projects/sfia-studio-next/web/tests/unit/openai-lane-guard.test.ts
new file mode 100644
index 00000000..c2c55766
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/unit/openai-lane-guard.test.ts
@@ -0,0 +1,68 @@
+import { describe, expect, it } from "vitest";
+import {
+  assertOpenAiKeyForLane,
+  openAiKeyFingerprint,
+} from "@/lib/openai-lane-guard";
+
+describe("openai-lane-guard", () => {
+  it("fingerprints stably without exposing the key", () => {
+    const fp = openAiKeyFingerprint("sk-test-key-aaaaaaaaaaaaaaaa");
+    expect(fp).toHaveLength(16);
+    expect(fp).toMatch(/^[0-9a-f]{16}$/);
+  });
+
+  it("refuses missing STUDIO_LANE", () => {
+    const r = assertOpenAiKeyForLane({
+      OPENAI_API_KEY: "sk-test-key-aaaaaaaaaaaaaaaa",
+    } as NodeJS.ProcessEnv);
+    expect(r.ok).toBe(false);
+    if (r.ok) throw new Error("expected fail");
+    expect(r.reasonCode).toBe("STUDIO_LANE_MISSING");
+  });
+
+  it("refuses missing key", () => {
+    const r = assertOpenAiKeyForLane({
+      STUDIO_LANE: "DEV",
+    } as NodeJS.ProcessEnv);
+    expect(r.ok).toBe(false);
+    if (r.ok) throw new Error("expected fail");
+    expect(r.reasonCode).toBe("OPENAI_KEY_MISSING");
+  });
+
+  it("accepts matching expected fingerprint", () => {
+    const key = "sk-test-key-bbbbbbbbbbbbbbbb";
+    const fp = openAiKeyFingerprint(key);
+    const r = assertOpenAiKeyForLane({
+      STUDIO_LANE: "DEV",
+      OPENAI_API_KEY: key,
+      SFIA_OPENAI_EXPECTED_KEY_FP: fp,
+    } as NodeJS.ProcessEnv);
+    expect(r.ok).toBe(true);
+    if (!r.ok) throw new Error(r.reason);
+    expect(r.keyFingerprint).toBe(fp);
+  });
+
+  it("refuses forbidden peer fingerprint (cross-lane contamination)", () => {
+    const key = "sk-shared-contaminated-key-xxxx";
+    const fp = openAiKeyFingerprint(key);
+    const r = assertOpenAiKeyForLane({
+      STUDIO_LANE: "RECETTE",
+      OPENAI_API_KEY: key,
+      SFIA_OPENAI_FORBIDDEN_KEY_FP: fp,
+    } as NodeJS.ProcessEnv);
+    expect(r.ok).toBe(false);
+    if (r.ok) throw new Error("expected fail");
+    expect(r.reasonCode).toBe("OPENAI_KEY_FORBIDDEN_PEER");
+  });
+
+  it("refuses expected fingerprint mismatch", () => {
+    const r = assertOpenAiKeyForLane({
+      STUDIO_LANE: "DEV",
+      OPENAI_API_KEY: "sk-test-key-cccccccccccccccc",
+      SFIA_OPENAI_EXPECTED_KEY_FP: "deadbeefdeadbeef",
+    } as NodeJS.ProcessEnv);
+    expect(r.ok).toBe(false);
+    if (r.ok) throw new Error("expected fail");
+    expect(r.reasonCode).toBe("OPENAI_KEY_FINGERPRINT_MISMATCH");
+  });
+});
diff --git a/projects/sfia-studio-next/web/tests/unit/personal-rail-settings-menu.test.ts b/projects/sfia-studio-next/web/tests/unit/personal-rail-settings-menu.test.ts
index a0c36e85..76240e71 100644
--- a/projects/sfia-studio-next/web/tests/unit/personal-rail-settings-menu.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/personal-rail-settings-menu.test.ts
@@ -3,6 +3,16 @@ import { readFileSync } from "node:fs";
 import { resolve } from "node:path";

 describe("Personal rail settings menu (Figma 13.02)", () => {
+  it("consumption menu closes on escape and links to /settings/consumption", () => {
+    const menu = readFileSync(
+      resolve(process.cwd(), "src/components/shell/PersonalRailSettingsMenu.tsx"),
+      "utf8",
+    );
+    expect(menu).toContain('if (e.key === "Escape") close()');
+    expect(menu).toContain('document.addEventListener("mousedown", onPointer)');
+    expect(menu).toContain('const SETTINGS_CONSUMPTION_HREF = "/settings/consumption"');
+  });
+
   it("exposes gear popover with integrations and consumption destinations", () => {
     const css = readFileSync(
       resolve(process.cwd(), "src/components/shell/studio-shell.css"),

```

### Intervention RECETTE

```md
# Intervention préparée — Isolation OpenAI RECETTE (gate §4.2)

**Statut:** PRÊTE — en attente GO Morris spécifique (mutation lane protégée).
**Ne pas exécuter sans GO.**

## Cause racine
Tous les fichiers `.env*` inventoriés sous `~/.config/sfia-studio-next` et le `.env.local` DEV projet portent la **même empreinte** `sha256:ab6bbec84ba272ed` pour `OPENAI_API_KEY`.
Aucune seconde clé distincte n'a été trouvée sur disque. RECETTE source `~/.config/sfia-studio-next/recette/.env.local` via `start-recette-ml5.sh`.

## Cible
- Fichier: `~/.config/sfia-studio-next/recette/.env.local`
- Process: launchd `com.sfia.studio.next.recette.ml4d-ux004` (:3200)
- **Ne pas** changer code produit, DB, ni candidat SHA.

## Procédure proposée (après GO)
1. Backup: `cp ~/.config/sfia-studio-next/recette/.env.local ~/.config/sfia-studio-next/recette/.env.local.bak-pre-openai-isolation-$(date -u +%Y%m%dT%H%M%SZ)`
2. Remplacer `OPENAI_API_KEY` par la clé projet OpenAI **RECETTE** distincte (déjà préparée par Morris).
3. Ajouter non-secret:
   - `SFIA_OPENAI_EXPECTED_KEY_FP=<fp16 de la nouvelle clé RECETTE>`
   - `SFIA_OPENAI_FORBIDDEN_KEY_FP=ab6bbec84ba272ed` (empreinte DEV actuelle — refuse contamination)
4. Redémarrer uniquement le service RECETTE (kickstart launchd).
5. Vérifier: login :3200 OK; empreinte process ≠ DEV; appel models.list RO optionnel.
6. Rollback: restaurer le `.bak` + kickstart.

## Ce que ce n'est pas
Pas un cutover produit. Pas une migration DB. Pas G-RECETTE.

```

### Proposition calibration

```md
# Proposition de campagne de calibration LIVE (G-LIVE-API — non consommé)

## Conditions d'entrée (toutes requises)
1. Isolation OpenAI DEV effective (empreinte attendue DEV OK).
2. Intervention RECETTE distincte appliquée OU calibration limitée à DEV uniquement avec preuve que RECETTE n'est pas utilisée.
3. FinOps: per-request / aggregate correct (tests 150k×2 vs 300k).
4. Allocation+continuité déterministes PASS.
5. GO Morris G-LIVE-API avec enveloppe ci-dessous.

## Enveloppe proposée
| Item | Valeur |
|---|---|
| Lane | DEV only |
| Modèles | gpt-6-luna, gpt-6.1-terra, gpt-6.2-sol |
| Efforts init | medium (comparaison); high/xhigh ciblés seulement si discriminant |
| Scénarios | (A) salutation/simple (B) qualification multi-intentions (C) StockTrack révision ciblée (D) RoomBooking lecture bornée (E) réallocation multi-segments si besoin réel |
| Répétitions | 1–2 par couple discriminant |
| Max appels Responses estimés | ≤ 40 |
| WEB LIVE | EXCLU |
| Arrêt | échec critique qualité Sol référence; dépassement enveloppe; erreur permanente modèle |

## Critères
Qualité (compréhension, ambiguïtés, contraintes, reconnaissance de limites) > coût. Sol = référence comparative. Pas d'admission opérationnelle Luna/Terra sans validation Morris post-campagne.

## Estimation coût
Ordre de grandeur indicative seulement (Standard court) — dépend tokens réels; FinOps mesurera. Aucun plafond produit Studio.

```

## 14. Fake/Real

| Frontière | Niveau |
|---|---|
| Lane guard | DETERMINISTIC PROVEN |
| FinOps accuracy | DETERMINISTIC PROVEN |
| Allocation | DETERMINISTIC PROVEN |
| WEB Option B | DETERMINISTIC PROVEN |
| WEB LIVE / Calibration | NOT RUN |
| Isolation RECETTE effective | PREPARED not applied |

## 15. Absence de secrets
Empreintes uniquement; aucune clé en clair.
