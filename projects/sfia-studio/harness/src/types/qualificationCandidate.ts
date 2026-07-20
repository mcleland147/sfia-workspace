/**
 * Increment C — QualificationCandidate contracts (candidate-only, never decisions).
 * Model: gpt-5.4-mini only. No tools. No Cursor. No Git writes.
 *
 * Canonical SFIA v2.6 closed lists (single source for schema, prompt, validator, UI).
 */

export const QUALIFICATION_CANDIDATE_SCHEMA_VERSION = "qualification-candidate-1.1.0" as const;
export const INCREMENT_C_MODEL = "gpt-5.4-mini" as const;

/**
 * 15 canonical SFIA cycles — machine ids (stable).
 * DOC is NOT a canonical cycle and must never appear here.
 */
export const SFIA_CYCLES = [
  "cadrage",
  "conception-fonctionnelle",
  "architecture-fonctionnelle",
  "ux-ui",
  "backlog-user-stories",
  "architecture-technique",
  "integration-devops",
  "delivery-implementation",
  "qa-validation",
  "securite-rssi",
  "deploiement-release",
  "observabilite-run-readiness",
  "pr-readiness",
  "post-merge",
  "capitalisation-rex",
] as const;
export type SfiaCycle = (typeof SFIA_CYCLES)[number];

/** Human labels for Studio / reports — derived from the same closed list. */
export const SFIA_CYCLE_LABELS: Record<SfiaCycle, string> = {
  cadrage: "Cadrage",
  "conception-fonctionnelle": "Conception fonctionnelle",
  "architecture-fonctionnelle": "Architecture fonctionnelle",
  "ux-ui": "UX/UI",
  "backlog-user-stories": "Backlog / user stories",
  "architecture-technique": "Architecture technique",
  "integration-devops": "Intégration / DevOps",
  "delivery-implementation": "Delivery / implémentation",
  "qa-validation": "QA / validation",
  "securite-rssi": "Sécurité / RSSI",
  "deploiement-release": "Déploiement / release",
  "observabilite-run-readiness": "Observabilité / RUN readiness",
  "pr-readiness": "PR readiness",
  "post-merge": "Post-merge",
  "capitalisation-rex": "Capitalisation / REX",
};

export const SFIA_PROFILES = ["Light", "Standard", "Critical", "Capitalization"] as const;
export type SfiaProfile = (typeof SFIA_PROFILES)[number];

/**
 * 11 canonical SFIA method blocks — machine ids.
 * Generic categories (governance, data, ops, documentation, …) are NOT blocks.
 */
export const SFIA_BLOCKS = [
  "finops",
  "greenops",
  "rgpd",
  "accessibilite",
  "performance",
  "ux-ui-figma",
  "securite",
  "devops",
  "deploiement-release",
  "observabilite-run-readiness",
  "capitalisation-rex",
] as const;
export type SfiaBlock = (typeof SFIA_BLOCKS)[number];

export const SFIA_BLOCK_LABELS: Record<SfiaBlock, string> = {
  finops: "FinOps",
  greenops: "GreenOps",
  rgpd: "RGPD",
  accessibilite: "Accessibilité",
  performance: "Performance",
  "ux-ui-figma": "UX/UI + Figma",
  securite: "Sécurité",
  devops: "DevOps",
  "deploiement-release": "Déploiement / release",
  "observabilite-run-readiness": "Observabilité / RUN readiness",
  "capitalisation-rex": "Capitalisation / REX",
};

export function labelSfiaCycle(id: string): string {
  return (SFIA_CYCLE_LABELS as Record<string, string>)[id] ?? id;
}

export function labelSfiaBlock(id: string): string {
  return (SFIA_BLOCK_LABELS as Record<string, string>)[id] ?? id;
}

export type QualificationLimitCode =
  | "INPUT_LIMIT_REACHED"
  | "OUTPUT_LIMIT_REACHED"
  | "TOKEN_LIMIT_REACHED"
  | "COST_LIMIT_REACHED"
  | "SESSION_LIMIT_REACHED"
  | "DAILY_LIMIT_REACHED"
  | "TIMEOUT"
  | "MODEL_UNAVAILABLE"
  | "INVALID_RESPONSE"
  | "LIVE_PORT_DENIED"
  | "PROVIDER_ERROR"
  | "KEY_ABSENT"
  | "SECRET_DETECTED"
  | "CONFIRMATION_REQUIRED";

/** Payload produced by the model (structured output) — without authority/usage. */
export interface QualificationModelPayload {
  schemaVersion: typeof QUALIFICATION_CANDIDATE_SCHEMA_VERSION;
  requestId: string;
  correlationId: string;
  summary: string;
  proposedCycle: SfiaCycle;
  proposedProfile: SfiaProfile;
  profileJustification: string;
  proposedBlocks: SfiaBlock[];
  proposedScope: string[];
  proposedGates: string[];
  risks: string[];
  ambiguities: string[];
  questions: string[];
  confidence: number;
  reserves: string[];
}

export interface QualificationAuthority {
  candidateOnly: true;
  morrisDecisionRequired: true;
  executionAuthorized: false;
}

export interface QualificationUsage {
  inputTokens: number;
  outputTokens: number;
  totalTokens: number;
  estimatedCostEur: number;
  callNumber: number;
  /** Explicit: estimate only, never a billing invoice. */
  costIsEstimate: true;
}

export interface QualificationCandidate {
  schemaVersion: typeof QUALIFICATION_CANDIDATE_SCHEMA_VERSION;
  candidateId: string;
  requestId: string;
  correlationId: string;
  generatedAt: string;
  model: typeof INCREMENT_C_MODEL;
  summary: string;
  proposedCycle: SfiaCycle;
  proposedProfile: SfiaProfile;
  profileJustification: string;
  proposedBlocks: SfiaBlock[];
  proposedScope: string[];
  proposedGates: string[];
  risks: string[];
  ambiguities: string[];
  questions: string[];
  confidence: number;
  reserves: string[];
  usage: QualificationUsage;
  authority: QualificationAuthority;
}

export interface QualificationRequestInput {
  requestId: string;
  correlationId: string;
  /** User demand text — sanitized, size-limited. */
  demandText: string;
  /** Explicitly authorized project context lines (non-secret). */
  authorizedContext?: string[];
  confirmedByUser: boolean;
  /** When false, never call provider (tests / dry-run). */
  live?: boolean;
  proofDir?: string;
}

/** Sanitized demand provenance — never logs the full user text. */
export interface DemandProvenance {
  length: number;
  sha256Prefix: string;
  preview: string;
}

export interface QualificationRunResult {
  ok: boolean;
  status: "CANDIDATE_CREATED" | QualificationLimitCode | "REJECTED";
  candidate?: QualificationCandidate;
  errorCode?: QualificationLimitCode | string;
  errorMessage?: string;
  durationMs: number;
  liveInvoked: boolean;
  retriesAttempted: 0;
  model: typeof INCREMENT_C_MODEL;
  limitsApplied: {
    maxInputTokens: number;
    maxOutputTokens: number;
    maxTotalTokens: number;
    maxCostEurPerCall: number;
    maxSessionCalls: number;
    maxDailyCalls: number;
    timeoutMs: number;
  };
  usage?: QualificationUsage;
  eventsLogged: string[];
  /** Proves the demandText received by harness without replaying full text. */
  demandProvenance?: DemandProvenance;
  /** Explicit mode label for Studio. */
  mode?: "fixture" | "live";
}

/** OpenAI Chat Completions json_schema (strict) for model payload only. */
export const QUALIFICATION_MODEL_JSON_SCHEMA = {
  type: "object",
  additionalProperties: false,
  required: [
    "schemaVersion",
    "requestId",
    "correlationId",
    "summary",
    "proposedCycle",
    "proposedProfile",
    "profileJustification",
    "proposedBlocks",
    "proposedScope",
    "proposedGates",
    "risks",
    "ambiguities",
    "questions",
    "confidence",
    "reserves",
  ],
  properties: {
    schemaVersion: { type: "string", enum: [QUALIFICATION_CANDIDATE_SCHEMA_VERSION] },
    requestId: { type: "string", maxLength: 128 },
    correlationId: { type: "string", maxLength: 128 },
    summary: { type: "string", maxLength: 2000 },
    proposedCycle: { type: "string", enum: [...SFIA_CYCLES] },
    proposedProfile: { type: "string", enum: [...SFIA_PROFILES] },
    profileJustification: { type: "string", maxLength: 2000 },
    proposedBlocks: {
      type: "array",
      maxItems: 11,
      items: { type: "string", enum: [...SFIA_BLOCKS] },
    },
    proposedScope: {
      type: "array",
      maxItems: 12,
      items: { type: "string", maxLength: 240 },
    },
    proposedGates: {
      type: "array",
      maxItems: 12,
      items: { type: "string", maxLength: 160 },
    },
    risks: {
      type: "array",
      maxItems: 12,
      items: { type: "string", maxLength: 400 },
    },
    ambiguities: {
      type: "array",
      maxItems: 12,
      items: { type: "string", maxLength: 400 },
    },
    questions: {
      type: "array",
      maxItems: 12,
      items: { type: "string", maxLength: 400 },
    },
    confidence: { type: "number", minimum: 0, maximum: 1 },
    reserves: {
      type: "array",
      maxItems: 12,
      items: { type: "string", maxLength: 400 },
    },
  },
} as const;

export const INC_C_QUALIFICATION_RESPONSE_FORMAT = {
  type: "json_schema" as const,
  json_schema: {
    name: "qualification_candidate_1_1_0",
    strict: true,
    schema: QUALIFICATION_MODEL_JSON_SCHEMA,
  },
};

/** FinOps / technical ceilings validated for Increment C — unchanged by this corrective. */
export const INC_C_LIMITS = {
  model: INCREMENT_C_MODEL,
  maxInputTokens: 6_000,
  maxOutputTokens: 1_500,
  maxTotalTokens: 7_500,
  maxCostEurPerCall: 0.05,
  maxDailyCostEur: 1.0,
  maxSessionCalls: 3,
  maxDailyCalls: 20,
  timeoutMs: 30_000,
  priceUsdPer1MInput: 0.75,
  priceUsdPer1MOutput: 4.5,
  usdToEur: 0.92,
} as const;

export const INC_C_QUALIFICATION_SYSTEM_PROMPT = `Tu es un producteur de QualificationCandidate JSON strict pour SFIA Studio.
Tu proposes uniquement. Tu ne décides jamais.

Règles d'autorité ABSOLUES:
- candidateOnly implicite — aucune décision Morris
- aucun GO, NO-GO, STOP consommé
- aucun Cursor, aucun Git, aucun outil
- executionAuthorized est toujours faux (posé par le harness, pas par toi)

Cycles canoniques SFIA (identifiants machine UNIQUEMENT — 15 valeurs) :
${JSON.stringify(SFIA_CYCLES)}
Libellés (aide) : ${JSON.stringify(SFIA_CYCLE_LABELS)}
DOC n'est PAS un cycle. N'utilise jamais Cycle 7/8/9/13 comme valeurs.

Blocs canoniques SFIA (identifiants machine UNIQUEMENT — 11 valeurs) :
${JSON.stringify(SFIA_BLOCKS)}
Libellés (aide) : ${JSON.stringify(SFIA_BLOCK_LABELS)}
Interdits comme blocs : governance, delivery, architecture, data, ux, ops, documentation, security (utiliser securite).

Profils : ${JSON.stringify(SFIA_PROFILES)}
- Critical exige profileJustification non vide
- confidence ∈ [0,1] informatif seulement
- schemaVersion exact : "${QUALIFICATION_CANDIDATE_SCHEMA_VERSION}"
- Aucune propriété inconnue
- Pas de Markdown, pas de secrets, pas de clé API`;
