/**
 * Structured intent analysis via existing ConversationProvider.
 * Provider output is untrusted until server-side validation (fail-closed).
 * CORR-MW2-REAL-01: optional INTERNAL semantic CWP assessment on same call.
 */

import {
  resolveConversationProvider,
  TechnicalError,
  type ConversationProvider,
  type ProviderChatMessage,
} from "@/lib/platform/ai";
import { ADOPTED_CYCLE_TYPE_IDS, isKnownCycleTypeId } from "@/lib/oa/cycle";
import type {
  F2QualificationSignals,
  IntentAnalysisDto,
  IntentClass,
  SemanticCognitiveWorkloadAssessment,
  SemanticCognitiveWorkloadLevel,
} from "./types";

const INTENT_CLASSES: readonly IntentClass[] = [
  "informative",
  "actionable",
  "ambiguous",
  "execution_request",
] as const;

const SIGNAL_KEYS = [
  "structuralChange",
  "securityImpact",
  "architectureImpact",
  "dataImpact",
  "irreversible",
  "lowRiskBounded",
] as const;

const CWP_LEVELS: readonly SemanticCognitiveWorkloadLevel[] = [
  "low",
  "medium",
  "high",
  "unknown",
] as const;

const CWP_DIMENSION_KEYS = [
  "ambiguity",
  "reasoningDepth",
  "sourceBreadth",
  "toolDependency",
  "contradictionRisk",
  "verificationNeed",
] as const;

const MAX_STRING = 2000;
const MAX_ARRAY = 12;

const NULLABLE_STRING = { type: ["string", "null"] } as const;
const STRING_ARRAY = {
  type: "array",
  items: { type: "string" },
} as const;

const SIGNALS_OBJECT_SCHEMA = {
  type: "object",
  additionalProperties: false,
  properties: {
    structuralChange: { type: "boolean" },
    securityImpact: { type: "boolean" },
    architectureImpact: { type: "boolean" },
    dataImpact: { type: "boolean" },
    irreversible: { type: "boolean" },
    lowRiskBounded: { type: "boolean" },
  },
  required: [...SIGNAL_KEYS],
} as const;

const CWP_LEVEL_SCHEMA = {
  type: "string",
  enum: [...CWP_LEVELS],
} as const;

const COGNITIVE_WORKLOAD_OBJECT_SCHEMA = {
  type: "object",
  additionalProperties: false,
  properties: {
    ambiguity: CWP_LEVEL_SCHEMA,
    reasoningDepth: CWP_LEVEL_SCHEMA,
    sourceBreadth: CWP_LEVEL_SCHEMA,
    toolDependency: CWP_LEVEL_SCHEMA,
    contradictionRisk: CWP_LEVEL_SCHEMA,
    verificationNeed: CWP_LEVEL_SCHEMA,
  },
  required: [...CWP_DIMENSION_KEYS],
} as const;

/**
 * OpenAI strict json_schema for F2 intent analysis.
 * Null cycle/signals/CWP: anyOf [enum|object, { type: "null" }] (not omitted, not invented).
 */
export const F2_INTENT_JSON_SCHEMA: Record<string, unknown> = {
  type: "object",
  additionalProperties: false,
  properties: {
    intentClass: {
      type: "string",
      enum: [...INTENT_CLASSES],
    },
    candidateCycleTypeId: {
      anyOf: [
        {
          type: "string",
          enum: [...ADOPTED_CYCLE_TYPE_IDS],
        },
        { type: "null" },
      ],
    },
    signals: {
      anyOf: [SIGNALS_OBJECT_SCHEMA, { type: "null" }],
    },
    cognitiveWorkload: {
      anyOf: [COGNITIVE_WORKLOAD_OBJECT_SCHEMA, { type: "null" }],
    },
    objective: NULLABLE_STRING,
    scope: NULLABLE_STRING,
    rephrasedRequest: NULLABLE_STRING,
    outOfScope: STRING_ARRAY,
    risks: STRING_ARRAY,
    reservations: STRING_ARRAY,
    stopConditions: STRING_ARRAY,
    activatedBlocks: STRING_ARRAY,
    expectedOutcome: NULLABLE_STRING,
    criticalJustification: NULLABLE_STRING,
    requestedOperation: NULLABLE_STRING,
  },
  required: [
    "intentClass",
    "candidateCycleTypeId",
    "signals",
    "cognitiveWorkload",
    "objective",
    "scope",
    "rephrasedRequest",
    "outOfScope",
    "risks",
    "reservations",
    "stopConditions",
    "activatedBlocks",
    "expectedOutcome",
    "criticalJustification",
    "requestedOperation",
  ],
};

export const F2_INTENT_SCHEMA_NAME = "f2_intent_analysis";

function clip(value: unknown, max = MAX_STRING): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!trimmed) return null;
  return trimmed.length <= max ? trimmed : trimmed.slice(0, max);
}

function clipArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value
    .filter((item): item is string => typeof item === "string")
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, MAX_ARRAY)
    .map((item) => (item.length <= 500 ? item : item.slice(0, 500)));
}

function ambiguousFallback(partial?: Partial<IntentAnalysisDto>): IntentAnalysisDto {
  return {
    intentClass: "ambiguous",
    candidateCycleTypeId: null,
    signals: null,
    cognitiveWorkload: null,
    objective: partial?.objective ?? null,
    scope: partial?.scope ?? null,
    rephrasedRequest: partial?.rephrasedRequest ?? null,
    outOfScope: partial?.outOfScope ?? [],
    risks: partial?.risks ?? [],
    reservations: partial?.reservations ?? [],
    stopConditions: partial?.stopConditions ?? [],
    activatedBlocks: partial?.activatedBlocks ?? [],
    expectedOutcome: partial?.expectedOutcome ?? null,
    criticalJustification: partial?.criticalJustification ?? null,
    requestedOperation: partial?.requestedOperation ?? null,
    parseOk: false,
  };
}

function parseSignals(raw: unknown): F2QualificationSignals | null {
  if (!raw || typeof raw !== "object") return null;
  const obj = raw as Record<string, unknown>;
  const out: Partial<F2QualificationSignals> = {};
  for (const key of SIGNAL_KEYS) {
    if (typeof obj[key] !== "boolean") return null;
    out[key] = obj[key] as boolean;
  }
  return out as F2QualificationSignals;
}

/**
 * Validate INTERNAL semantic CWP assessment.
 * null / missing / non-object → null (no fabricated Routine).
 * Invalid field values → unknown (never unknown→low).
 */
export function parseCognitiveWorkload(
  raw: unknown,
): SemanticCognitiveWorkloadAssessment | null {
  if (raw == null) return null;
  if (typeof raw !== "object" || Array.isArray(raw)) return null;
  const obj = raw as Record<string, unknown>;
  const out = {} as SemanticCognitiveWorkloadAssessment;
  for (const key of CWP_DIMENSION_KEYS) {
    const value = obj[key];
    out[key] = CWP_LEVELS.includes(value as SemanticCognitiveWorkloadLevel)
      ? (value as SemanticCognitiveWorkloadLevel)
      : "unknown";
  }
  return out;
}

function extractJsonObject(text: string): unknown | null {
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/i);
  const candidate = fenced?.[1]?.trim() ?? text.trim();
  const start = candidate.indexOf("{");
  const end = candidate.lastIndexOf("}");
  if (start < 0 || end <= start) return null;
  try {
    return JSON.parse(candidate.slice(start, end + 1));
  } catch {
    return null;
  }
}

export function validateIntentAnalysisPayload(raw: unknown): IntentAnalysisDto {
  if (!raw || typeof raw !== "object") return ambiguousFallback();
  const obj = raw as Record<string, unknown>;
  const intentClass = obj.intentClass;
  if (
    typeof intentClass !== "string" ||
    !INTENT_CLASSES.includes(intentClass as IntentClass)
  ) {
    return ambiguousFallback();
  }

  let candidateCycleTypeId: string | null = null;
  if (obj.candidateCycleTypeId != null) {
    const id = clip(obj.candidateCycleTypeId, 120);
    if (!id || !isKnownCycleTypeId(id)) {
      return ambiguousFallback({
        intentClass: intentClass as IntentClass,
        parseOk: false,
      } as Partial<IntentAnalysisDto>);
    }
    candidateCycleTypeId = id;
  }

  const signals = parseSignals(obj.signals);
  const needsSignals =
    intentClass === "actionable" || intentClass === "execution_request";
  if (needsSignals && !signals) {
    return ambiguousFallback();
  }

  // Malformed CWP must not crash an otherwise-valid informative analysis.
  const cognitiveWorkload = parseCognitiveWorkload(obj.cognitiveWorkload);

  return {
    intentClass: intentClass as IntentClass,
    candidateCycleTypeId,
    signals,
    cognitiveWorkload,
    objective: clip(obj.objective),
    scope: clip(obj.scope),
    rephrasedRequest: clip(obj.rephrasedRequest),
    outOfScope: clipArray(obj.outOfScope),
    risks: clipArray(obj.risks),
    reservations: clipArray(obj.reservations),
    stopConditions: clipArray(obj.stopConditions),
    activatedBlocks: clipArray(obj.activatedBlocks),
    expectedOutcome: clip(obj.expectedOutcome),
    criticalJustification: clip(obj.criticalJustification),
    requestedOperation: clip(obj.requestedOperation, 240),
    parseOk: true,
  };
}

function buildAnalysisSystem(ckcContext?: string | null): string {
  const ckcSection = ckcContext?.trim()
    ? `\nContexte CKC résolu (guidance seulement — pas d'autorité):\n${ckcContext.trim()}\n`
    : "";
  return `${ANALYSIS_SYSTEM_BASE}${ckcSection}`;
}

const ANALYSIS_SYSTEM_BASE = `Tu analyses l'intention utilisateur pour SFIA Studio F2.
Réponds UNIQUEMENT avec un objet JSON conforme au schéma (pas de markdown, pas de prose).
Champs obligatoires:
intentClass (informative|actionable|ambiguous|execution_request),
candidateCycleTypeId (id catalogue cyc:… OU null),
signals ({structuralChange,securityImpact,architectureImpact,dataImpact,irreversible,lowRiskBounded} tous booléens OU null),
cognitiveWorkload ({ambiguity,reasoningDepth,sourceBreadth,toolDependency,contradictionRisk,verificationNeed} chacun low|medium|high|unknown OU null),
objective, scope, rephrasedRequest, outOfScope[], risks[], reservations[], stopConditions[], activatedBlocks[],
expectedOutcome, criticalJustification, requestedOperation (strings ou null pour les scalaires).

=== DISTINCTION FONDAMENTALE ===
intentClass = EFFET demandé à Studio (quoi faire sur le produit).
cognitiveWorkload = CHARGE COGNITIVE pour raisonner (combien travailler).
Ces concepts NE DOIVENT PAS être fusionnés.
L'incertitude analytique (cognitiveWorkload.ambiguity medium/high) N'IMPLIQUE PAS intentClass=ambiguous.
Les verbes « proposer / recommander / comparer / réconcilier / analyser » N'IMPLIQUENT PAS à eux seuls actionable/F2.

=== intentClass ===
informative — travail cognitif où l'utilisateur demande de lire, expliquer, analyser, synthétiser, comparer, réconcilier des faits/tensions, challenger des hypothèses, identifier des risques, produire des options ou une Recommendation, évaluer une situation — SANS demander à Studio de muter l'état durable Project, de créer/qualifier un cycle/proposition gouvernée comme effet demandé, d'enregistrer une HumanDecision, de préparer/lancer une exécution gouvernée, ni d'effectuer des side-effects externes.
Exemples informative:
- « Analyse les tensions entre délai, coût et auditabilité. »
- « Compare les options et recommande la plus cohérente, sans décider ni exécuter. »
- « À partir des faits A–D, réconcilie les contraintes et propose les compromis possibles. »
- « Challenge cette hypothèse et indique les réserves. »
- « Donne-moi les risques avant que je décide. »
- Repository READ / résumé / recherche / vérité Git SANS mutation ni qualification de cycle.

actionable — l'effet demandé est une opération SFIA gouvernée (qualifier/créer/changer un CycleInstance ; créer une proposition F2 parce que l'utilisateur demande une transition de processus ; préparer un changement structurel Project nécessitant une transition d'état ; capturer/préparer un workflow de décision où une qualification de cycle est réellement requise) ET candidateCycleTypeId + signals sont supportables.
Exemples actionable:
- « Qualifie ce chantier en cycle Delivery et prépare la proposition. »
- « Crée le cycle correspondant et prépare le passage au prochain gate. »
- « Prépare l'ExecutionContract pour cette décision déjà enregistrée. »

execution_request — uniquement si l'utilisateur demande explicitement une exécution / mutation / action externe franchissant la frontière d'exécution.
Exemple: « Exécute ce contrat. »

ambiguous — uniquement si l'EFFET demandé est structurellement flou ou insuffisamment spécifié.
Ne PAS utiliser ambiguous seulement parce que le raisonnement est complexe, que plusieurs prémisses se confrontent, que sourceBreadth est élevé, que verificationNeed est élevé, ou que cognitiveWorkload.ambiguity est medium/high (incertitude analytique ≠ ambiguïté d'intention structurelle).

=== cognitiveWorkload (interne) ===
Évaluation COGNITIVE INTERNE du workload (pas Truth C, pas Evidence, pas Profile, pas décision, pas autorité).
low seulement avec évidence affirmative ; si insuffisant → unknown (jamais unknown→low). UNKNOWN ≠ LOW.
Ne décide PAS rigorCriticality, contextSize, costBudget, latencySensitivity, multimodality (faits produit hors schéma).

ambiguity — incertitude du problème cognitif APRÈS compréhension de l'intention.
low: tâche et faits à raisonner sont clairs.
medium/high: incertitude analytique matérielle, interprétations multiples, prémisses incomplètes.
IMPORTANT: high cognitive ambiguity ≠ intentClass ambiguous.

reasoningDepth —
low: lookup / transformation simple.
medium: plusieurs étapes inférentielles / synthèse modérée.
high: réconciliation multi-prémisses, trade-offs, synthèse profonde.

sourceBreadth —
low: un seul ensemble borné de faits/sources.
medium: plusieurs faits / sections pertinents.
high: plusieurs ensembles de faits/sources matériellement distincts à intégrer.
Ne pas équivaloir longueur de caractères et sourceBreadth.

toolDependency —
low: réponse raisonnable depuis le contexte de confiance déjà disponible.
medium/high: outils / retrieval supplémentaires matériellement requis.
enableTools=true n'est PAS une preuve de dépendance.

contradictionRisk —
low: pas de tensions matérielles indiquées.
medium/high: prémisses/contraintes en tension ou claims conflictuels à réconcilier.

verificationNeed —
low: réponse bornée déjà supportée par le contexte de confiance.
medium/high: claims matériels nécessitent vérification / réconciliation / evidence avant assertion forte.

=== AUTORITÉ ===
- Ne décide jamais un GO Morris ; ne propose jamais d'exécution ; n'invente jamais un cycle (ex. delivery) par défaut.
- actionable et execution_request: candidateCycleTypeId DOIT être un id catalogue connu ET signals DOIT contenir exactement les 6 booléens (aucun défaut inventé).
- informative et ambiguous: candidateCycleTypeId et signals PEUVENT être null.`;

export const ANALYSIS_SYSTEM = ANALYSIS_SYSTEM_BASE;

export async function analyzeIntent(input: {
  userContent: string;
  projectSummary: string;
  /** Optional resolved CKC excerpt for future intent analysis enrichment. */
  ckcContext?: string | null;
  /**
   * Optional server-side provider injection (eval / tests).
   * Never client-authoritative for model/reasoning selection.
   */
  provider?: ConversationProvider;
}): Promise<{
  analysis: IntentAnalysisDto;
  presentation: "test_provider" | "openai_live";
  model: string | null;
  rawText: string;
}> {
  const provider = input.provider ?? resolveConversationProvider();
  // Presentation follows the provider instance actually used (explicit injection wins).
  const presentation =
    provider.providerId === "fake-test" ? "test_provider" : "openai_live";

  const messages: ProviderChatMessage[] = [
    { role: "system", content: buildAnalysisSystem(input.ckcContext) },
    {
      role: "user",
      content: `Contexte projet:\\n${input.projectSummary}\\n\\nDemande:\\n${input.userContent}`,
    },
  ];

  if (typeof provider.completeStructured !== "function") {
    throw new TechnicalError(
      "PROVIDER",
      "Structured Outputs requis pour l’analyse d’intention F2 (completeStructured manquant).",
    );
  }

  const completion = await provider.completeStructured({
    messages,
    schemaName: F2_INTENT_SCHEMA_NAME,
    jsonSchema: F2_INTENT_JSON_SCHEMA,
  });
  const parsed = extractJsonObject(completion.text);
  const analysis = validateIntentAnalysisPayload(parsed);
  return {
    analysis,
    presentation,
    model: completion.usage?.model ?? null,
    rawText: completion.text,
  };
}
