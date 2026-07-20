# SFIA Studio — Review Pack FULL — Incrément C (Critical)

## Métadonnées
- **Date / heure / fuseau** : 2026-07-20 06:37:13 CEST
- **Cycle** : 8 — Delivery / implémentation
- **Profil** : Critical — première ouverture GPT réelle facturable, secret API, sortie non déterministe, fail-closed obligatoire
- **Typologie** : EVOL / DELIVERY / LIVE GPT / QUALIFICATION / FINOPS
- **GO Morris consommé** : implémentation locale Incrément C · GPT réel qualification uniquement · clé API locale sécurisée · seuils FinOps ci-dessous · candidate only · décision Morris humaine
- **Branche** : `delivery/sfia-studio-poc-increment-c`
- **HEAD** : `f80fa1dc902f7532835ecad067da0ebdf4baef99`
- **origin/main** : `f80fa1dc902f7532835ecad067da0ebdf4baef99` (min. f80fa1dc902f7532835ecad067da0ebdf4baef99)
- **Non autorisé par ce GO** : commit/push/PR delivery · Cursor live · GPT analyse/verdict · Incrément D/E · docs 01–40 · Figma · dépendance npm

## Verdict
**SFIA STUDIO INCREMENT C IMPLEMENTED — MORRIS LIVE QUALIFICATION VALIDATION REQUIRED**

## Truth Check
- main @ f80fa1d (Increment B merged) · FF OK · staged vide · `.tmp` hors versionnement · branche `delivery/sfia-studio-poc-increment-c` créée locale non poussée

## Sources
- Méthode + docs 32–40
- harness GPT fixture/spike existants (réutilisation fetch natif, pas de SDK openai)
- Documentation officielle OpenAI Structured Outputs : https://developers.openai.com/api/docs/guides/structured-outputs
- Annonce modèle : gpt-5.4-mini disponible API (OpenAI) — prix listés $0.75/1M in · $4.50/1M out (estimation EUR via facteur 0.92)

## Readiness Critical (avant code)
1. Port fixture + spike live existent ; Incrément C ajoute port dédié `GptQualificationLivePort` (qualification seulement)
2. Pas de dépendance npm — `fetch` natif
3. Modèle unique `gpt-5.4-mini` — refus si `OPENAI_MODEL` différent — aucun fallback
4. Structured outputs `json_schema` strict
5. FinOps : 6000/1500/7500 tokens · 0,05€/appel · 1€/jour · 3/session · 20/jour · timeout 30s · 1 appel/tentative · 0 retry
6. Secret : `OPENAI_API_KEY` env only · jamais UI/journal/captures
7. Studio : confirmation explicite avant appel
8. Harness autonome préservé

## Contrats
### QualificationCandidate (harness)
Voir `qualificationCandidate.ts` — schemaVersion `qualification-candidate-1.0.0` · authority forcée `candidateOnly=true` · `morrisDecisionRequired=true` · `executionAuthorized=false`

### Seuils FinOps validés
| Limite | Valeur |
|---|---|
| Modèle | gpt-5.4-mini |
| Input max | 6 000 tokens |
| Output max | 1 500 tokens |
| Total max | 7 500 tokens |
| Coût/appel estimé max | 0,05 € |
| Coût/jour estimé max | 1 € |
| Session | 3 qualifications |
| Jour | 20 appels |
| Timeout | 30 s |
| Retry | 0 |

## Diffstat
```
 .../sfia-studio/app/__tests__/increment-b.test.tsx |   2 +-
 .../app/components/vertical-slice/VsDemoChrome.tsx |   2 +-
 projects/sfia-studio/app/e2e/increment-b.spec.ts   |   2 +-
 .../nouvelle-demande/VsNouvelleDemandeScreen.tsx   | 257 ++++++++++++++++-----
 projects/sfia-studio/harness/src/cli.ts            |  19 ++
 projects/sfia-studio/harness/src/index.ts          |   4 +
 6 files changed, 229 insertions(+), 57 deletions(-)

```

## Fichiers nouveaux (contenu)

### `projects/sfia-studio/harness/src/types/qualificationCandidate.ts`
```typescript
/**
 * Increment C — QualificationCandidate contracts (candidate-only, never decisions).
 * Model: gpt-5.4-mini only. No tools. No Cursor. No Git writes.
 */

export const QUALIFICATION_CANDIDATE_SCHEMA_VERSION = "qualification-candidate-1.0.0" as const;
export const INCREMENT_C_MODEL = "gpt-5.4-mini" as const;

/** Closed SFIA cycle list for Increment C qualification. */
export const SFIA_CYCLES = [
  "Cycle 7",
  "Cycle 8",
  "Cycle 9",
  "Cycle 13",
  "DOC",
] as const;
export type SfiaCycle = (typeof SFIA_CYCLES)[number];

export const SFIA_PROFILES = ["Light", "Standard", "Critical", "Capitalization"] as const;
export type SfiaProfile = (typeof SFIA_PROFILES)[number];

export const SFIA_BLOCKS = [
  "security",
  "governance",
  "delivery",
  "architecture",
  "data",
  "ux",
  "ops",
  "finops",
  "documentation",
] as const;
export type SfiaBlock = (typeof SFIA_BLOCKS)[number];

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
      maxItems: 8,
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
    name: "qualification_candidate_1_0_0",
    strict: true,
    schema: QUALIFICATION_MODEL_JSON_SCHEMA,
  },
};

/** FinOps / technical ceilings validated for Increment C. */
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
  /** OpenAI published list prices (USD) for gpt-5.4-mini — estimate only. */
  priceUsdPer1MInput: 0.75,
  priceUsdPer1MOutput: 4.5,
  /** Conservative USD→EUR factor for estimates (not a FX feed). */
  usdToEur: 0.92,
} as const;

export const INC_C_QUALIFICATION_SYSTEM_PROMPT = `Tu es un producteur de QualificationCandidate JSON strict pour SFIA Studio.
Tu proposes uniquement. Tu ne décides jamais.

Règles d'autorité ABSOLUES:
- candidateOnly implicite — aucune décision Morris
- aucun GO, NO-GO, STOP consommé
- aucun Cursor, aucun Git, aucun outil
- executionAuthorized est toujours faux (posé par le harness, pas par toi)

Sortie: un seul objet JSON conforme au schéma fourni (structured outputs).
- proposedCycle ∈ ${JSON.stringify(SFIA_CYCLES)}
- proposedProfile ∈ ${JSON.stringify(SFIA_PROFILES)}
- proposedBlocks ⊆ ${JSON.stringify(SFIA_BLOCKS)}
- Critical exige profileJustification non vide
- confidence ∈ [0,1] informatif seulement
- Aucune propriété inconnue
- Pas de Markdown, pas de secrets, pas de clé API`;

```

### `projects/sfia-studio/harness/src/finops/qualificationLimits.ts`
```typescript
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { INC_C_LIMITS } from "../types/qualificationCandidate.js";
import { HarnessError } from "../types/contracts.js";

/** Rough token estimate: UTF-8 length / 4 (fail-closed if over). */
export function estimateTokensFromText(text: string): number {
  return Math.ceil(Buffer.byteLength(text, "utf8") / 4);
}

export function estimateCostEur(inputTokens: number, outputTokens: number): number {
  const usd =
    (inputTokens / 1_000_000) * INC_C_LIMITS.priceUsdPer1MInput +
    (outputTokens / 1_000_000) * INC_C_LIMITS.priceUsdPer1MOutput;
  return Math.round(usd * INC_C_LIMITS.usdToEur * 1_000_000) / 1_000_000;
}

export function maxEstimatedCostEurForCall(): number {
  return estimateCostEur(INC_C_LIMITS.maxInputTokens, INC_C_LIMITS.maxOutputTokens);
}

const SECRET_PATTERNS = [
  /sk-[a-zA-Z0-9_-]{10,}/,
  /OPENAI_API_KEY\s*=/i,
  /Bearer\s+[A-Za-z0-9._-]{10,}/i,
  /-----BEGIN (RSA |OPENSSH )?PRIVATE KEY-----/,
];

export function detectObviousSecrets(text: string): boolean {
  return SECRET_PATTERNS.some((re) => re.test(text));
}

export interface DailyCounterState {
  day: string;
  callCount: number;
  estimatedCostEur: number;
  updatedAt: string;
}

export function localDayKey(now = new Date()): string {
  // Europe/Paris civil day approximation via locale date parts
  const fmt = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Paris",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  return fmt.format(now);
}

export function defaultDailyCounterPath(proofsRoot: string): string {
  return path.join(proofsRoot, ".increment-c-daily-calls.json");
}

export function readDailyCounter(filePath: string, now = new Date()): DailyCounterState {
  const day = localDayKey(now);
  try {
    if (!existsSync(filePath)) {
      return { day, callCount: 0, estimatedCostEur: 0, updatedAt: now.toISOString() };
    }
    const raw = JSON.parse(readFileSync(filePath, "utf8")) as Partial<DailyCounterState>;
    if (raw.day !== day) {
      return { day, callCount: 0, estimatedCostEur: 0, updatedAt: now.toISOString() };
    }
    return {
      day,
      callCount: typeof raw.callCount === "number" ? raw.callCount : 0,
      estimatedCostEur: typeof raw.estimatedCostEur === "number" ? raw.estimatedCostEur : 0,
      updatedAt: typeof raw.updatedAt === "string" ? raw.updatedAt : now.toISOString(),
    };
  } catch {
    return { day, callCount: 0, estimatedCostEur: 0, updatedAt: now.toISOString() };
  }
}

export function writeDailyCounter(filePath: string, state: DailyCounterState): void {
  mkdirSync(path.dirname(filePath), { recursive: true });
  writeFileSync(filePath, `${JSON.stringify(state, null, 2)}\n`, "utf8");
}

/** Session counter — process-local (POC). Not browser sessionStorage. */
const sessionCounts = new Map<string, number>();

export function getSessionCallCount(sessionKey: string): number {
  return sessionCounts.get(sessionKey) ?? 0;
}

export function incrementSessionCallCount(sessionKey: string): number {
  const next = getSessionCallCount(sessionKey) + 1;
  sessionCounts.set(sessionKey, next);
  return next;
}

export function resetSessionCallCountForTests(sessionKey?: string): void {
  if (sessionKey) sessionCounts.delete(sessionKey);
  else sessionCounts.clear();
}

export function assertPreCallLimits(input: {
  estimatedInputTokens: number;
  sessionKey: string;
  dailyCounterPath: string;
  maxOutputTokens?: number;
}): void {
  const maxOut = input.maxOutputTokens ?? INC_C_LIMITS.maxOutputTokens;
  if (maxOut > INC_C_LIMITS.maxOutputTokens) {
    throw new HarnessError(
      "OUTPUT_LIMIT_REACHED",
      `Output budget ${maxOut} > ${INC_C_LIMITS.maxOutputTokens}`,
    );
  }
  if (input.estimatedInputTokens > INC_C_LIMITS.maxInputTokens) {
    throw new HarnessError(
      "INPUT_LIMIT_REACHED",
      `Input estimate ${input.estimatedInputTokens} > ${INC_C_LIMITS.maxInputTokens} tokens — reduce scope before call`,
    );
  }
  const totalEst = input.estimatedInputTokens + maxOut;
  if (totalEst > INC_C_LIMITS.maxTotalTokens) {
    throw new HarnessError(
      "TOKEN_LIMIT_REACHED",
      `Estimated total ${totalEst} > ${INC_C_LIMITS.maxTotalTokens} tokens`,
    );
  }
  const estCost = estimateCostEur(input.estimatedInputTokens, maxOut);
  if (estCost > INC_C_LIMITS.maxCostEurPerCall) {
    throw new HarnessError(
      "COST_LIMIT_REACHED",
      `Estimated cost €${estCost} > €${INC_C_LIMITS.maxCostEurPerCall} per qualification`,
    );
  }
  const session = getSessionCallCount(input.sessionKey);
  if (session >= INC_C_LIMITS.maxSessionCalls) {
    throw new HarnessError(
      "SESSION_LIMIT_REACHED",
      `Session already used ${session}/${INC_C_LIMITS.maxSessionCalls} qualifications`,
    );
  }
  const daily = readDailyCounter(input.dailyCounterPath);
  if (daily.callCount >= INC_C_LIMITS.maxDailyCalls) {
    throw new HarnessError(
      "DAILY_LIMIT_REACHED",
      `Daily calls ${daily.callCount}/${INC_C_LIMITS.maxDailyCalls} exhausted`,
    );
  }
  if (daily.estimatedCostEur >= INC_C_LIMITS.maxDailyCostEur) {
    throw new HarnessError(
      "COST_LIMIT_REACHED",
      `Daily estimated cost €${daily.estimatedCostEur} ≥ €${INC_C_LIMITS.maxDailyCostEur}`,
    );
  }
}

export function recordSuccessfulCall(input: {
  sessionKey: string;
  dailyCounterPath: string;
  estimatedCostEur: number;
}): { sessionCallNumber: number; dailyCallNumber: number } {
  const sessionCallNumber = incrementSessionCallCount(input.sessionKey);
  const daily = readDailyCounter(input.dailyCounterPath);
  const next: DailyCounterState = {
    day: daily.day,
    callCount: daily.callCount + 1,
    estimatedCostEur: Math.round((daily.estimatedCostEur + input.estimatedCostEur) * 1e6) / 1e6,
    updatedAt: new Date().toISOString(),
  };
  writeDailyCounter(input.dailyCounterPath, next);
  return { sessionCallNumber, dailyCallNumber: next.callCount };
}

```

### `projects/sfia-studio/harness/src/validation/qualificationCandidateValidator.ts`
```typescript
import {
  QUALIFICATION_CANDIDATE_SCHEMA_VERSION,
  SFIA_BLOCKS,
  SFIA_CYCLES,
  SFIA_PROFILES,
  type QualificationModelPayload,
  type SfiaBlock,
  type SfiaCycle,
  type SfiaProfile,
} from "../types/qualificationCandidate.js";
import { HarnessError } from "../types/contracts.js";
import { detectObviousSecrets } from "../finops/qualificationLimits.js";

const ALLOWED_KEYS = new Set([
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
]);

function isStringArray(v: unknown, maxItems: number, maxLen: number): v is string[] {
  if (!Array.isArray(v) || v.length > maxItems) return false;
  return v.every((x) => typeof x === "string" && x.length <= maxLen);
}

export function validateQualificationModelPayload(
  raw: unknown,
  expected: { requestId: string; correlationId: string },
): QualificationModelPayload {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    throw new HarnessError("INVALID_RESPONSE", "Payload must be a JSON object");
  }
  const obj = raw as Record<string, unknown>;
  for (const k of Object.keys(obj)) {
    if (!ALLOWED_KEYS.has(k)) {
      throw new HarnessError("INVALID_RESPONSE", `Unknown property: ${k}`);
    }
  }
  for (const k of ALLOWED_KEYS) {
    if (!(k in obj)) {
      throw new HarnessError("INVALID_RESPONSE", `Missing property: ${k}`);
    }
  }

  if (obj.schemaVersion !== QUALIFICATION_CANDIDATE_SCHEMA_VERSION) {
    throw new HarnessError("INVALID_RESPONSE", "schemaVersion mismatch");
  }
  if (obj.requestId !== expected.requestId) {
    throw new HarnessError("INVALID_RESPONSE", "requestId mismatch");
  }
  if (obj.correlationId !== expected.correlationId) {
    throw new HarnessError("INVALID_RESPONSE", "correlationId mismatch");
  }

  const summary = obj.summary;
  const justification = obj.profileJustification;
  if (typeof summary !== "string" || summary.length === 0 || summary.length > 2000) {
    throw new HarnessError("INVALID_RESPONSE", "summary invalid");
  }
  if (typeof justification !== "string" || justification.length > 2000) {
    throw new HarnessError("INVALID_RESPONSE", "profileJustification invalid");
  }

  const cycle = obj.proposedCycle;
  const profile = obj.proposedProfile;
  if (typeof cycle !== "string" || !(SFIA_CYCLES as readonly string[]).includes(cycle)) {
    throw new HarnessError("INVALID_RESPONSE", `Unknown cycle: ${String(cycle)}`);
  }
  if (typeof profile !== "string" || !(SFIA_PROFILES as readonly string[]).includes(profile)) {
    throw new HarnessError("INVALID_RESPONSE", `Unknown profile: ${String(profile)}`);
  }
  if (profile === "Critical" && justification.trim() === "") {
    throw new HarnessError("INVALID_RESPONSE", "Critical requires non-empty profileJustification");
  }

  if (!isStringArray(obj.proposedBlocks, 8, 64)) {
    throw new HarnessError("INVALID_RESPONSE", "proposedBlocks invalid");
  }
  for (const b of obj.proposedBlocks) {
    if (!(SFIA_BLOCKS as readonly string[]).includes(b)) {
      throw new HarnessError("INVALID_RESPONSE", `Unauthorized block: ${b}`);
    }
  }

  if (!isStringArray(obj.proposedScope, 12, 240)) {
    throw new HarnessError("INVALID_RESPONSE", "proposedScope invalid");
  }
  if (!isStringArray(obj.proposedGates, 12, 160)) {
    throw new HarnessError("INVALID_RESPONSE", "proposedGates invalid");
  }
  if (!isStringArray(obj.risks, 12, 400)) {
    throw new HarnessError("INVALID_RESPONSE", "risks invalid");
  }
  if (!isStringArray(obj.ambiguities, 12, 400)) {
    throw new HarnessError("INVALID_RESPONSE", "ambiguities invalid");
  }
  if (!isStringArray(obj.questions, 12, 400)) {
    throw new HarnessError("INVALID_RESPONSE", "questions invalid");
  }
  if (!isStringArray(obj.reserves, 12, 400)) {
    throw new HarnessError("INVALID_RESPONSE", "reserves invalid");
  }

  const confidence = obj.confidence;
  if (typeof confidence !== "number" || Number.isNaN(confidence) || confidence < 0 || confidence > 1) {
    throw new HarnessError("INVALID_RESPONSE", "confidence must be in [0,1]");
  }

  const blob = JSON.stringify(obj);
  if (detectObviousSecrets(blob)) {
    throw new HarnessError("SECRET_DETECTED", "Secret-like pattern in model payload");
  }

  // Forbidden authority fields if model smuggled them somehow under known keys — already blocked.
  // Extra check on string content for decision claims:
  if (/\bexecutionAuthorized\s*[:=]\s*true\b/i.test(blob) || /\bcandidateOnly\s*[:=]\s*false\b/i.test(blob)) {
    throw new HarnessError("INVALID_RESPONSE", "Authority claim forbidden in payload");
  }

  return {
    schemaVersion: QUALIFICATION_CANDIDATE_SCHEMA_VERSION,
    requestId: expected.requestId,
    correlationId: expected.correlationId,
    summary,
    proposedCycle: cycle as SfiaCycle,
    proposedProfile: profile as SfiaProfile,
    profileJustification: justification,
    proposedBlocks: obj.proposedBlocks as SfiaBlock[],
    proposedScope: obj.proposedScope,
    proposedGates: obj.proposedGates,
    risks: obj.risks,
    ambiguities: obj.ambiguities,
    questions: obj.questions,
    confidence,
    reserves: obj.reserves,
  };
}

/** Fail-closed if a assembled candidate violates authority invariants. */
export function assertCandidateAuthorityInvariants(candidate: {
  authority: { candidateOnly: boolean; morrisDecisionRequired: boolean; executionAuthorized: boolean };
}): void {
  if (candidate.authority.candidateOnly !== true) {
    throw new HarnessError("INVALID_RESPONSE", "candidateOnly must be true");
  }
  if (candidate.authority.morrisDecisionRequired !== true) {
    throw new HarnessError("INVALID_RESPONSE", "morrisDecisionRequired must be true");
  }
  if (candidate.authority.executionAuthorized !== false) {
    throw new HarnessError("INVALID_RESPONSE", "executionAuthorized must be false");
  }
}

```

### `projects/sfia-studio/harness/src/ports/gptQualificationLive.ts`
```typescript
/**
 * Increment C — live GPT qualification port (gpt-5.4-mini only).
 * Reuses native fetch transport. No OpenAI SDK dependency. No tools.
 * Does NOT implement verdict / analysis. Does NOT decide.
 */

import { randomUUID } from "node:crypto";
import { HarnessError } from "../types/contracts.js";
import {
  INC_C_LIMITS,
  INCREMENT_C_MODEL,
  INC_C_QUALIFICATION_RESPONSE_FORMAT,
  INC_C_QUALIFICATION_SYSTEM_PROMPT,
  QUALIFICATION_CANDIDATE_SCHEMA_VERSION,
  SFIA_BLOCKS,
  SFIA_CYCLES,
  SFIA_PROFILES,
  type QualificationCandidate,
  type QualificationModelPayload,
  type QualificationRequestInput,
  type QualificationRunResult,
  type QualificationUsage,
} from "../types/qualificationCandidate.js";
import {
  assertPreCallLimits,
  defaultDailyCounterPath,
  detectObviousSecrets,
  estimateCostEur,
  estimateTokensFromText,
  recordSuccessfulCall,
} from "../finops/qualificationLimits.js";
import {
  assertCandidateAuthorityInvariants,
  validateQualificationModelPayload,
} from "../validation/qualificationCandidateValidator.js";
import {
  createDefaultTransport,
  extractMessageContent,
  observeChatCompletionResponse,
  parseUsageFromCompletion,
  sanitizeOpenAiErrorText,
  type OpenAITransport,
} from "./openaiTransportShared.js";
import { EventJournal } from "../journal/eventJournal.js";
import { ProofStore } from "../proof/proofStore.js";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const HARNESS_ROOT = path.resolve(HERE, "../..");
const DEFAULT_PROOFS = path.join(HARNESS_ROOT, "proofs");

export const INC_C_LIVE_FLAG = "SFIA_GPT_INC_C_LIVE";
export const INC_C_OBSERVE_FLAG = "SFIA_GPT_INC_C_OBSERVE";

export interface GptQualificationLiveOptions {
  env?: NodeJS.ProcessEnv;
  transport?: OpenAITransport;
  timeoutMs?: number;
  dailyCounterPath?: string;
  proofsRoot?: string;
  /** Injected clock for tests. */
  now?: () => Date;
}

function buildUserMessage(input: QualificationRequestInput): string {
  const ctx = (input.authorizedContext ?? []).slice(0, 20);
  return JSON.stringify({
    task: "Produce QualificationCandidate model payload only",
    requestId: input.requestId,
    correlationId: input.correlationId,
    demandText: input.demandText,
    authorizedContext: ctx,
    closedCycles: SFIA_CYCLES,
    closedProfiles: SFIA_PROFILES,
    closedBlocks: SFIA_BLOCKS,
    rules: [
      "candidate only",
      "Morris decides later",
      "no tools",
      "no git",
      "no cursor",
      "no secrets",
    ],
  });
}

export class GptQualificationLivePort {
  private readonly env: NodeJS.ProcessEnv;
  private readonly transport: OpenAITransport;
  private readonly timeoutMs: number;
  private readonly dailyCounterPath: string;
  private readonly proofsRoot: string;
  private readonly now: () => Date;

  constructor(opts: GptQualificationLiveOptions = {}) {
    this.env = opts.env ?? process.env;
    this.transport = opts.transport ?? createDefaultTransport();
    this.timeoutMs = opts.timeoutMs ?? INC_C_LIMITS.timeoutMs;
    this.proofsRoot = opts.proofsRoot ?? DEFAULT_PROOFS;
    this.dailyCounterPath =
      opts.dailyCounterPath ?? defaultDailyCounterPath(this.proofsRoot);
    this.now = opts.now ?? (() => new Date());
  }

  async run(input: QualificationRequestInput): Promise<QualificationRunResult> {
    const started = Date.now();
    const limitsApplied = {
      maxInputTokens: INC_C_LIMITS.maxInputTokens,
      maxOutputTokens: INC_C_LIMITS.maxOutputTokens,
      maxTotalTokens: INC_C_LIMITS.maxTotalTokens,
      maxCostEurPerCall: INC_C_LIMITS.maxCostEurPerCall,
      maxSessionCalls: INC_C_LIMITS.maxSessionCalls,
      maxDailyCalls: INC_C_LIMITS.maxDailyCalls,
      timeoutMs: this.timeoutMs,
    };
    const eventsLogged: string[] = [];
    const proofDir =
      input.proofDir ??
      path.join(this.proofsRoot, `inc-c-${input.correlationId}`);
    const journal = new EventJournal(proofDir, input.correlationId);
    const proofs = new ProofStore(proofDir);
    const sessionKey = `studio-session`;

    const log = (eventType: string, fields: Record<string, unknown> = {}) => {
      journal.append({
        eventType,
        requestId: input.requestId,
        detail: { source: "harness", model: INCREMENT_C_MODEL, ...fields },
        result: typeof fields.result === "string" ? fields.result : undefined,
        errorCode: typeof fields.errorCode === "string" ? fields.errorCode : undefined,
      });
      eventsLogged.push(eventType);
    };

    const fail = (
      code: string,
      message: string,
      liveInvoked: boolean,
      usage?: QualificationUsage,
    ): QualificationRunResult => {
      log("gpt.qualification.rejected", {
        result: "rejected",
        errorCode: code,
        message: sanitizeOpenAiErrorText(message),
      });
      proofs.writeJson("qualification-result.json", {
        ok: false,
        errorCode: code,
        errorMessage: sanitizeOpenAiErrorText(message),
        liveInvoked,
      });
      return {
        ok: false,
        status: code as QualificationRunResult["status"],
        errorCode: code,
        errorMessage: sanitizeOpenAiErrorText(message),
        durationMs: Date.now() - started,
        liveInvoked,
        retriesAttempted: 0,
        model: INCREMENT_C_MODEL,
        limitsApplied,
        usage,
        eventsLogged,
      };
    };

    try {
      log("gpt.qualification.requested", { result: "ok" });

      if (!input.confirmedByUser) {
        return fail("CONFIRMATION_REQUIRED", "Explicit user confirmation required before live GPT call", false);
      }

      if (detectObviousSecrets(input.demandText) || (input.authorizedContext ?? []).some(detectObviousSecrets)) {
        return fail("SECRET_DETECTED", "Sensitive pattern detected in input — call refused", false);
      }

      const userMsg = buildUserMessage(input);
      const systemTokens = estimateTokensFromText(INC_C_QUALIFICATION_SYSTEM_PROMPT);
      const inputTokensEst = systemTokens + estimateTokensFromText(userMsg);
      assertPreCallLimits({
        estimatedInputTokens: inputTokensEst,
        sessionKey,
        dailyCounterPath: this.dailyCounterPath,
      });

      const liveRequested = input.live === true || this.env[INC_C_LIVE_FLAG] === "1";
      if (!liveRequested) {
        return fail("LIVE_PORT_DENIED", "Live GPT not enabled (set live:true / SFIA_GPT_INC_C_LIVE=1)", false);
      }

      const apiKey = this.env.OPENAI_API_KEY;
      if (!apiKey) {
        return fail("KEY_ABSENT", "OPENAI_API_KEY absent — configure local env without versioning secrets", false);
      }

      // Model lock — refuse any other model id from env if set differently
      const envModel = this.env.OPENAI_MODEL?.trim();
      if (envModel && envModel !== INCREMENT_C_MODEL) {
        return fail(
          "MODEL_UNAVAILABLE",
          `Only ${INCREMENT_C_MODEL} authorized for Increment C; OPENAI_MODEL=${envModel} refused (no fallback)`,
          false,
        );
      }

      log("gpt.qualification.started", { result: "ok", estimatedInputTokens: inputTokensEst });

      const body = {
        model: INCREMENT_C_MODEL,
        max_completion_tokens: INC_C_LIMITS.maxOutputTokens,
        response_format: INC_C_QUALIFICATION_RESPONSE_FORMAT,
        messages: [
          { role: "system", content: INC_C_QUALIFICATION_SYSTEM_PROMPT },
          { role: "user", content: userMsg },
        ],
        // No tools, no parallel_tool_calls, no web search
      };

      let transportResult: { ok: boolean; status: number; text: string; durationMs: number };
      try {
        transportResult = await this.transport(body, {
          timeoutMs: this.timeoutMs,
          apiKey,
        });
      } catch (e) {
        const he = e as HarnessError;
        if (he.code === "GPT_TIMEOUT" || he.message?.includes("timed out")) {
          log("gpt.qualification.timeout", { result: "failed", errorCode: "TIMEOUT" });
          return fail("TIMEOUT", he.message || "Timeout", true);
        }
        log("gpt.qualification.provider_error", {
          result: "failed",
          errorCode: "PROVIDER_ERROR",
          message: sanitizeOpenAiErrorText(he.message || String(e)),
        });
        return fail("PROVIDER_ERROR", he.message || String(e), true);
      }

      if (!transportResult.ok) {
        log("gpt.qualification.provider_error", {
          result: "failed",
          errorCode: "PROVIDER_ERROR",
          httpStatus: transportResult.status,
        });
        return fail(
          transportResult.status === 404 ? "MODEL_UNAVAILABLE" : "PROVIDER_ERROR",
          `Provider HTTP ${transportResult.status}`,
          true,
        );
      }

      let data: Record<string, unknown>;
      try {
        data = JSON.parse(transportResult.text) as Record<string, unknown>;
      } catch {
        return fail("INVALID_RESPONSE", "Provider body is not JSON", true);
      }

      const returnedModel = typeof data.model === "string" ? data.model : "";
      if (returnedModel && !returnedModel.startsWith("gpt-5.4-mini")) {
        return fail(
          "MODEL_UNAVAILABLE",
          `Unexpected model returned: ${returnedModel} (no fallback)`,
          true,
        );
      }

      let content: string;
      try {
        content = extractMessageContent(data).content;
      } catch (e) {
        return fail("INVALID_RESPONSE", (e as Error).message, true);
      }

      observeChatCompletionResponse({
        data,
        durationMs: transportResult.durationMs,
        content,
      });

      let parsed: unknown;
      try {
        parsed = JSON.parse(content);
      } catch {
        return fail("INVALID_RESPONSE", "Model content is not JSON", true);
      }

      let payload: QualificationModelPayload;
      try {
        payload = validateQualificationModelPayload(parsed, {
          requestId: input.requestId,
          correlationId: input.correlationId,
        });
      } catch (e) {
        const he = e as HarnessError;
        return fail(he.code || "INVALID_RESPONSE", he.message, true);
      }

      const usageRaw = parseUsageFromCompletion(data, transportResult.durationMs, INCREMENT_C_MODEL);
      const inputTokens = usageRaw.inputTokens ?? inputTokensEst;
      const outputTokens = usageRaw.outputTokens ?? 0;
      const totalTokens = usageRaw.totalTokens ?? inputTokens + outputTokens;
      if (outputTokens > INC_C_LIMITS.maxOutputTokens) {
        return fail("OUTPUT_LIMIT_REACHED", `Output tokens ${outputTokens} exceed limit`, true);
      }
      if (totalTokens > INC_C_LIMITS.maxTotalTokens) {
        return fail("TOKEN_LIMIT_REACHED", `Total tokens ${totalTokens} exceed limit`, true);
      }
      const estimatedCostEur = estimateCostEur(inputTokens, outputTokens);
      if (estimatedCostEur > INC_C_LIMITS.maxCostEurPerCall) {
        return fail("COST_LIMIT_REACHED", `Cost estimate €${estimatedCostEur} exceeds per-call cap`, true);
      }

      const { sessionCallNumber } = recordSuccessfulCall({
        sessionKey,
        dailyCounterPath: this.dailyCounterPath,
        estimatedCostEur,
      });

      const usage: QualificationUsage = {
        inputTokens,
        outputTokens,
        totalTokens,
        estimatedCostEur,
        callNumber: sessionCallNumber,
        costIsEstimate: true,
      };

      const candidate: QualificationCandidate = {
        schemaVersion: payload.schemaVersion,
        candidateId: `qc-${randomUUID()}`,
        requestId: payload.requestId,
        correlationId: payload.correlationId,
        generatedAt: this.now().toISOString(),
        model: INCREMENT_C_MODEL,
        summary: payload.summary,
        proposedCycle: payload.proposedCycle,
        proposedProfile: payload.proposedProfile,
        profileJustification: payload.profileJustification,
        proposedBlocks: payload.proposedBlocks,
        proposedScope: payload.proposedScope,
        proposedGates: payload.proposedGates,
        risks: payload.risks,
        ambiguities: payload.ambiguities,
        questions: payload.questions,
        confidence: payload.confidence,
        reserves: payload.reserves,
        usage,
        authority: {
          candidateOnly: true,
          morrisDecisionRequired: true,
          executionAuthorized: false,
        },
      };
      assertCandidateAuthorityInvariants(candidate);

      proofs.writeJson("qualification-candidate.json", candidate);
      proofs.writeJson("qualification-usage.json", {
        ...usage,
        note: "estimatedCostEur is an estimate, not an invoice",
      });

      log("gpt.qualification.completed", {
        result: "ok",
        candidateId: candidate.candidateId,
        inputTokens,
        outputTokens,
        estimatedCostEur,
      });
      log("qualification.candidate_created", {
        result: "ok",
        candidateId: candidate.candidateId,
      });

      return {
        ok: true,
        status: "CANDIDATE_CREATED",
        candidate,
        durationMs: Date.now() - started,
        liveInvoked: true,
        retriesAttempted: 0,
        model: INCREMENT_C_MODEL,
        limitsApplied,
        usage,
        eventsLogged,
      };
    } catch (e) {
      const he = e as HarnessError;
      const code = he.code || "PROVIDER_ERROR";
      return fail(code, he.message || String(e), false);
    }
  }
}

/** Fixture-only runner for automatic tests — never calls OpenAI. */
export async function runQualificationFixture(
  input: QualificationRequestInput,
  overrides: Partial<QualificationModelPayload> = {},
): Promise<QualificationRunResult> {
  const started = Date.now();
  if (!input.confirmedByUser) {
    return {
      ok: false,
      status: "CONFIRMATION_REQUIRED",
      errorCode: "CONFIRMATION_REQUIRED",
      errorMessage: "Confirmation required",
      durationMs: Date.now() - started,
      liveInvoked: false,
      retriesAttempted: 0,
      model: INCREMENT_C_MODEL,
      limitsApplied: {
        maxInputTokens: INC_C_LIMITS.maxInputTokens,
        maxOutputTokens: INC_C_LIMITS.maxOutputTokens,
        maxTotalTokens: INC_C_LIMITS.maxTotalTokens,
        maxCostEurPerCall: INC_C_LIMITS.maxCostEurPerCall,
        maxSessionCalls: INC_C_LIMITS.maxSessionCalls,
        maxDailyCalls: INC_C_LIMITS.maxDailyCalls,
        timeoutMs: INC_C_LIMITS.timeoutMs,
      },
      eventsLogged: [],
    };
  }
  const payload: QualificationModelPayload = {
    schemaVersion: QUALIFICATION_CANDIDATE_SCHEMA_VERSION,
    requestId: input.requestId,
    correlationId: input.correlationId,
    summary: "Fixture qualification candidate",
    proposedCycle: "Cycle 8",
    proposedProfile: "Standard",
    profileJustification: "Delivery change with clear scope",
    proposedBlocks: ["security", "governance"],
    proposedScope: ["app auth module"],
    proposedGates: ["G-VS-QUAL-REVIEW"],
    risks: ["Scope creep"],
    ambiguities: [],
    questions: ["Which IdP?"],
    confidence: 0.7,
    reserves: ["Candidate only — Morris decides"],
    ...overrides,
  };
  const validated = validateQualificationModelPayload(payload, {
    requestId: input.requestId,
    correlationId: input.correlationId,
  });
  const usage: QualificationUsage = {
    inputTokens: 100,
    outputTokens: 50,
    totalTokens: 150,
    estimatedCostEur: estimateCostEur(100, 50),
    callNumber: 1,
    costIsEstimate: true,
  };
  const candidate: QualificationCandidate = {
    ...validated,
    candidateId: `qc-fixture-${input.correlationId}`,
    generatedAt: new Date().toISOString(),
    model: INCREMENT_C_MODEL,
    usage,
    authority: {
      candidateOnly: true,
      morrisDecisionRequired: true,
      executionAuthorized: false,
    },
  };
  return {
    ok: true,
    status: "CANDIDATE_CREATED",
    candidate,
    durationMs: Date.now() - started,
    liveInvoked: false,
    retriesAttempted: 0,
    model: INCREMENT_C_MODEL,
    limitsApplied: {
      maxInputTokens: INC_C_LIMITS.maxInputTokens,
      maxOutputTokens: INC_C_LIMITS.maxOutputTokens,
      maxTotalTokens: INC_C_LIMITS.maxTotalTokens,
      maxCostEurPerCall: INC_C_LIMITS.maxCostEurPerCall,
      maxSessionCalls: INC_C_LIMITS.maxSessionCalls,
      maxDailyCalls: INC_C_LIMITS.maxDailyCalls,
      timeoutMs: INC_C_LIMITS.timeoutMs,
    },
    usage,
    eventsLogged: ["gpt.qualification.completed", "qualification.candidate_created"],
  };
}

```

### `projects/sfia-studio/harness/src/ports/openaiTransportShared.ts`
```typescript
/**
 * Shared OpenAI HTTPS transport helpers for Increment C.
 * Re-exports spike-safe sanitization/transport without enabling spike verdict path.
 */

export {
  createDefaultTransport,
  extractMessageContent,
  observeChatCompletionResponse,
  sanitizeOpenAiErrorText,
  type OpenAITransport,
} from "./openaiRealSpike.js";

import type { GPTUsageSummary } from "../types/gptContracts.js";

export function parseUsageFromCompletion(
  data: Record<string, unknown>,
  durationMs: number,
  model: string,
): GPTUsageSummary {
  const usage = (data.usage ?? {}) as Record<string, unknown>;
  const details = (usage.completion_tokens_details ?? {}) as Record<string, unknown>;
  const id = data.id;
  const responseIdRedacted =
    typeof id === "string" && id.length > 12
      ? `redacted:${id.slice(0, 6)}…${id.slice(-4)}`
      : typeof id === "string"
        ? `redacted:${id.length}`
        : undefined;
  return {
    inputTokens: typeof usage.prompt_tokens === "number" ? usage.prompt_tokens : undefined,
    outputTokens: typeof usage.completion_tokens === "number" ? usage.completion_tokens : undefined,
    totalTokens: typeof usage.total_tokens === "number" ? usage.total_tokens : undefined,
    reasoningTokens:
      typeof details.reasoning_tokens === "number" ? details.reasoning_tokens : undefined,
    modelReturned: typeof data.model === "string" ? data.model : model,
    responseIdRedacted,
    durationMs,
    monetaryCostClaimed: false,
  };
}

```

### `projects/sfia-studio/harness/tests/increment-c.test.ts`
```typescript
import { describe, expect, it, beforeEach } from "vitest";
import { mkdtempSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import {
  assertPreCallLimits,
  detectObviousSecrets,
  estimateCostEur,
  estimateTokensFromText,
  maxEstimatedCostEurForCall,
  resetSessionCallCountForTests,
  incrementSessionCallCount,
  getSessionCallCount,
  readDailyCounter,
  writeDailyCounter,
  localDayKey,
} from "../src/finops/qualificationLimits.js";
import { validateQualificationModelPayload } from "../src/validation/qualificationCandidateValidator.js";
import {
  GptQualificationLivePort,
  runQualificationFixture,
} from "../src/ports/gptQualificationLive.js";
import {
  INC_C_LIMITS,
  INCREMENT_C_MODEL,
  QUALIFICATION_CANDIDATE_SCHEMA_VERSION,
} from "../src/types/qualificationCandidate.js";
import { HarnessError } from "../src/types/contracts.js";
import { readdirSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const HARNESS_SRC = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../src");

function tmp(): string {
  return mkdtempSync(path.join(os.tmpdir(), "sfia-inc-c-"));
}

function validPayload(overrides: Record<string, unknown> = {}) {
  return {
    schemaVersion: QUALIFICATION_CANDIDATE_SCHEMA_VERSION,
    requestId: "req-c-1",
    correlationId: "corr-c-1",
    summary: "Add admin authentication",
    proposedCycle: "Cycle 8",
    proposedProfile: "Standard",
    profileJustification: "Bounded delivery change",
    proposedBlocks: ["security"],
    proposedScope: ["auth module"],
    proposedGates: ["G-MORRIS-REVIEW"],
    risks: ["misconfig"],
    ambiguities: [],
    questions: ["Which IdP?"],
    confidence: 0.6,
    reserves: ["Candidate only"],
    ...overrides,
  };
}

beforeEach(() => {
  resetSessionCallCountForTests();
});

describe("Increment C — FinOps limits", () => {
  it("estimates tokens and cost under caps", () => {
    expect(estimateTokensFromText("abcd")).toBe(1);
    expect(maxEstimatedCostEurForCall()).toBeLessThanOrEqual(INC_C_LIMITS.maxCostEurPerCall);
    expect(estimateCostEur(100, 50)).toBeGreaterThan(0);
  });

  it("refuses input over 6000 tokens before call", () => {
    const daily = path.join(tmp(), "daily.json");
    try {
      assertPreCallLimits({
        estimatedInputTokens: 6001,
        sessionKey: "s",
        dailyCounterPath: daily,
      });
      expect.fail("should throw");
    } catch (e) {
      expect((e as HarnessError).code).toBe("INPUT_LIMIT_REACHED");
    }
  });

  it("allows total at 7500 boundary and rejects post-call overage via live port", async () => {
    const daily = path.join(tmp(), "daily.json");
    expect(() =>
      assertPreCallLimits({
        estimatedInputTokens: 6000,
        sessionKey: "bound",
        dailyCounterPath: daily,
        maxOutputTokens: 1500,
      }),
    ).not.toThrow();

    const port = new GptQualificationLivePort({
      env: { OPENAI_API_KEY: "sk-test", SFIA_GPT_INC_C_LIVE: "1" },
      dailyCounterPath: path.join(tmp(), "d.json"),
      proofsRoot: tmp(),
      transport: async () => ({
        ok: true,
        status: 200,
        durationMs: 5,
        text: JSON.stringify({
          id: "chatcmpl-overage",
          model: INCREMENT_C_MODEL,
          choices: [{ message: { content: JSON.stringify(validPayload()) }, finish_reason: "stop" }],
          usage: { prompt_tokens: 6000, completion_tokens: 1501, total_tokens: 7501 },
        }),
      }),
    });
    const r = await port.run({
      requestId: "req-c-1",
      correlationId: "corr-c-1",
      demandText: "Add admin authentication",
      confirmedByUser: true,
      live: true,
      proofDir: tmp(),
    });
    expect(r.ok).toBe(false);
    expect(r.errorCode).toBe("OUTPUT_LIMIT_REACHED");
  });

  it("refuses output budget over 1500", () => {
    const daily = path.join(tmp(), "daily.json");
    try {
      assertPreCallLimits({
        estimatedInputTokens: 100,
        sessionKey: "s",
        dailyCounterPath: daily,
        maxOutputTokens: 1501,
      });
      expect.fail("should throw");
    } catch (e) {
      expect((e as HarnessError).code).toBe("OUTPUT_LIMIT_REACHED");
    }
  });

  it("refuses 4th session qualification", () => {
    const daily = path.join(tmp(), "daily.json");
    incrementSessionCallCount("s");
    incrementSessionCallCount("s");
    incrementSessionCallCount("s");
    expect(getSessionCallCount("s")).toBe(3);
    try {
      assertPreCallLimits({
        estimatedInputTokens: 100,
        sessionKey: "s",
        dailyCounterPath: daily,
      });
      expect.fail("should throw");
    } catch (e) {
      expect((e as HarnessError).code).toBe("SESSION_LIMIT_REACHED");
    }
  });

  it("refuses 21st daily call", () => {
    const daily = path.join(tmp(), "daily.json");
    writeDailyCounter(daily, {
      day: localDayKey(),
      callCount: 20,
      estimatedCostEur: 0.1,
      updatedAt: new Date().toISOString(),
    });
    try {
      assertPreCallLimits({
        estimatedInputTokens: 100,
        sessionKey: "fresh",
        dailyCounterPath: daily,
      });
      expect.fail("should throw");
    } catch (e) {
      expect((e as HarnessError).code).toBe("DAILY_LIMIT_REACHED");
    }
  });

  it("refuses when daily cost already at €1", () => {
    const daily = path.join(tmp(), "daily.json");
    writeDailyCounter(daily, {
      day: localDayKey(),
      callCount: 1,
      estimatedCostEur: 1.0,
      updatedAt: new Date().toISOString(),
    });
    try {
      assertPreCallLimits({
        estimatedInputTokens: 100,
        sessionKey: "fresh2",
        dailyCounterPath: daily,
      });
      expect.fail("should throw");
    } catch (e) {
      expect((e as HarnessError).code).toBe("COST_LIMIT_REACHED");
    }
  });

  it("detects obvious secrets", () => {
    expect(detectObviousSecrets("sk-abcdefghijklmnopqrstuvwxyz")).toBe(true);
    expect(detectObviousSecrets("hello world")).toBe(false);
  });
});

describe("Increment C — QualificationCandidate validation", () => {
  it("accepts valid payload", () => {
    const p = validateQualificationModelPayload(validPayload(), {
      requestId: "req-c-1",
      correlationId: "corr-c-1",
    });
    expect(p.proposedCycle).toBe("Cycle 8");
  });

  it("rejects unknown cycle / profile / block", () => {
    try {
      validateQualificationModelPayload(validPayload({ proposedCycle: "Cycle 99" }), {
        requestId: "req-c-1",
        correlationId: "corr-c-1",
      });
      expect.fail("should throw");
    } catch (e) {
      expect((e as HarnessError).code).toBe("INVALID_RESPONSE");
    }
    try {
      validateQualificationModelPayload(validPayload({ proposedProfile: "Ultra" }), {
        requestId: "req-c-1",
        correlationId: "corr-c-1",
      });
      expect.fail("should throw");
    } catch (e) {
      expect((e as HarnessError).code).toBe("INVALID_RESPONSE");
    }
    try {
      validateQualificationModelPayload(validPayload({ proposedBlocks: ["blockchain"] }), {
        requestId: "req-c-1",
        correlationId: "corr-c-1",
      });
      expect.fail("should throw");
    } catch (e) {
      expect((e as HarnessError).code).toBe("INVALID_RESPONSE");
    }
  });

  it("rejects Critical without justification", () => {
    expect(() =>
      validateQualificationModelPayload(
        validPayload({ proposedProfile: "Critical", profileJustification: "  " }),
        { requestId: "req-c-1", correlationId: "corr-c-1" },
      ),
    ).toThrow(/Critical/);
  });

  it("rejects unknown properties and bad confidence", () => {
    expect(() =>
      validateQualificationModelPayload(validPayload({ extra: true }), {
        requestId: "req-c-1",
        correlationId: "corr-c-1",
      }),
    ).toThrow(/Unknown property/);
    expect(() =>
      validateQualificationModelPayload(validPayload({ confidence: 1.5 }), {
        requestId: "req-c-1",
        correlationId: "corr-c-1",
      }),
    ).toThrow(/confidence/);
  });
});

describe("Increment C — live port with mocked transport", () => {
  it("requires confirmation and does not retry", async () => {
    const port = new GptQualificationLivePort({
      env: { OPENAI_API_KEY: "sk-test", SFIA_GPT_INC_C_LIVE: "1" },
      dailyCounterPath: path.join(tmp(), "d.json"),
      proofsRoot: tmp(),
      transport: async () => {
        throw new Error("should not be called");
      },
    });
    const r = await port.run({
      requestId: "r",
      correlationId: "c",
      demandText: "test",
      confirmedByUser: false,
      live: true,
      proofDir: tmp(),
    });
    expect(r.ok).toBe(false);
    expect(r.errorCode).toBe("CONFIRMATION_REQUIRED");
    expect(r.retriesAttempted).toBe(0);
    expect(r.liveInvoked).toBe(false);
  });

  it("refuses different model from env without fallback", async () => {
    const port = new GptQualificationLivePort({
      env: {
        OPENAI_API_KEY: "sk-test",
        SFIA_GPT_INC_C_LIVE: "1",
        OPENAI_MODEL: "gpt-4o-mini",
      },
      dailyCounterPath: path.join(tmp(), "d.json"),
      proofsRoot: tmp(),
      transport: async () => ({ ok: true, status: 200, text: "{}", durationMs: 1 }),
    });
    const r = await port.run({
      requestId: "r",
      correlationId: "c",
      demandText: "Add admin authentication to internal app",
      confirmedByUser: true,
      live: true,
      proofDir: tmp(),
    });
    expect(r.ok).toBe(false);
    expect(r.errorCode).toBe("MODEL_UNAVAILABLE");
    expect(r.liveInvoked).toBe(false);
  });

  it("refuses missing key without exposing it", async () => {
    const port = new GptQualificationLivePort({
      env: { SFIA_GPT_INC_C_LIVE: "1" },
      dailyCounterPath: path.join(tmp(), "d.json"),
      proofsRoot: tmp(),
    });
    const r = await port.run({
      requestId: "r",
      correlationId: "c",
      demandText: "x",
      confirmedByUser: true,
      live: true,
      proofDir: tmp(),
    });
    expect(r.errorCode).toBe("KEY_ABSENT");
    expect(JSON.stringify(r)).not.toMatch(/sk-/);
  });

  it("times out without success", async () => {
    const port = new GptQualificationLivePort({
      env: { OPENAI_API_KEY: "sk-test", SFIA_GPT_INC_C_LIVE: "1" },
      dailyCounterPath: path.join(tmp(), "d.json"),
      proofsRoot: tmp(),
      timeoutMs: 30,
      transport: async () => {
        throw new HarnessError("GPT_TIMEOUT", "OpenAI request timed out after 30ms");
      },
    });
    const r = await port.run({
      requestId: "r",
      correlationId: "c",
      demandText: "Add admin authentication",
      confirmedByUser: true,
      live: true,
      proofDir: tmp(),
    });
    expect(r.ok).toBe(false);
    expect(r.errorCode).toBe("TIMEOUT");
    expect(r.status).not.toBe("CANDIDATE_CREATED");
  });

  it("creates candidate from structured mock response (single call)", async () => {
    let calls = 0;
    const payload = validPayload();
    const port = new GptQualificationLivePort({
      env: { OPENAI_API_KEY: "sk-test", SFIA_GPT_INC_C_LIVE: "1" },
      dailyCounterPath: path.join(tmp(), "d.json"),
      proofsRoot: tmp(),
      transport: async (body) => {
        calls += 1;
        expect(body.model).toBe(INCREMENT_C_MODEL);
        expect(body.max_completion_tokens).toBe(1500);
        expect(body.tools).toBeUndefined();
        expect((body.response_format as { type: string }).type).toBe("json_schema");
        return {
          ok: true,
          status: 200,
          durationMs: 12,
          text: JSON.stringify({
            id: "chatcmpl-testabcdefgh",
            model: INCREMENT_C_MODEL,
            choices: [{ message: { content: JSON.stringify(payload) }, finish_reason: "stop" }],
            usage: { prompt_tokens: 200, completion_tokens: 100, total_tokens: 300 },
          }),
        };
      },
    });
    const r = await port.run({
      requestId: "req-c-1",
      correlationId: "corr-c-1",
      demandText: "Add admin authentication to internal app without architecture change",
      confirmedByUser: true,
      live: true,
      proofDir: tmp(),
    });
    expect(calls).toBe(1);
    expect(r.ok).toBe(true);
    expect(r.candidate?.authority.candidateOnly).toBe(true);
    expect(r.candidate?.authority.executionAuthorized).toBe(false);
    expect(r.candidate?.authority.morrisDecisionRequired).toBe(true);
    expect(r.usage?.costIsEstimate).toBe(true);
    expect(r.retriesAttempted).toBe(0);
  });

  it("rejects invalid JSON from provider as INVALID_RESPONSE", async () => {
    const port = new GptQualificationLivePort({
      env: { OPENAI_API_KEY: "sk-test", SFIA_GPT_INC_C_LIVE: "1" },
      dailyCounterPath: path.join(tmp(), "d.json"),
      proofsRoot: tmp(),
      transport: async () => ({
        ok: true,
        status: 200,
        durationMs: 5,
        text: JSON.stringify({
          id: "chatcmpl-x",
          model: INCREMENT_C_MODEL,
          choices: [{ message: { content: "{not-json" }, finish_reason: "stop" }],
          usage: { prompt_tokens: 10, completion_tokens: 5, total_tokens: 15 },
        }),
      }),
    });
    const r = await port.run({
      requestId: "req-c-1",
      correlationId: "corr-c-1",
      demandText: "auth",
      confirmedByUser: true,
      live: true,
      proofDir: tmp(),
    });
    expect(r.ok).toBe(false);
    expect(r.errorCode).toBe("INVALID_RESPONSE");
  });
});

describe("Increment C — fixture helper and autonomy", () => {
  it("fixture run never invokes live", async () => {
    const r = await runQualificationFixture({
      requestId: "r",
      correlationId: "c",
      demandText: "x",
      confirmedByUser: true,
    });
    expect(r.ok).toBe(true);
    expect(r.liveInvoked).toBe(false);
  });

  it("harness src has no React and no Cursor live in Increment C port", () => {
    const walk = (dir: string): string[] => {
      const out: string[] = [];
      for (const ent of readdirSync(dir, { withFileTypes: true })) {
        const p = path.join(dir, ent.name);
        if (ent.isDirectory()) out.push(...walk(p));
        else if (/\.ts$/.test(ent.name)) out.push(p);
      }
      return out;
    };
    const livePort = readFileSync(path.join(HARNESS_SRC, "ports/gptQualificationLive.ts"), "utf8");
    expect(livePort).not.toMatch(/from ["']react["']/);
    expect(livePort).not.toMatch(/CursorExecutorPortRealSpike/);
    expect(livePort).not.toMatch(/git push/);
    for (const f of walk(path.join(HARNESS_SRC, "finops"))) {
      expect(readFileSync(f, "utf8")).not.toMatch(/from ["']react["']/);
    }
  });
});

describe("Increment C — authority breach guards", () => {
  it("assembled fixture candidate never authorizes execution", async () => {
    const r = await runQualificationFixture({
      requestId: "r",
      correlationId: "c",
      demandText: "x",
      confirmedByUser: true,
    });
    expect(r.candidate?.authority).toEqual({
      candidateOnly: true,
      morrisDecisionRequired: true,
      executionAuthorized: false,
    });
  });
});

```

### `projects/sfia-studio/harness/tests/increment-c-live-observe.test.ts`
```typescript
/**
 * Opt-in live observation for Increment C — ONE call max.
 * Run only with:
 *   SFIA_GPT_INC_C_OBSERVE=1 SFIA_GPT_INC_C_LIVE=1 OPENAI_API_KEY=… \
 *   OPENAI_MODEL=gpt-5.4-mini npm test -- tests/increment-c-live-observe.test.ts
 * Skipped by default. Never enabled in CI.
 */

import { describe, expect, it } from "vitest";
import { mkdtempSync, writeFileSync, mkdirSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { GptQualificationLivePort } from "../src/ports/gptQualificationLive.js";
import { INCREMENT_C_MODEL } from "../src/types/qualificationCandidate.js";

const observe = process.env.SFIA_GPT_INC_C_OBSERVE === "1";

describe.skipIf(!observe)("Increment C — live observation (opt-in, single call)", () => {
  it("produces one QualificationCandidate via gpt-5.4-mini", async () => {
    expect(process.env.OPENAI_API_KEY).toBeTruthy();
    // Lock model: unset conflicting model or require exact id
    const env = {
      ...process.env,
      OPENAI_MODEL: INCREMENT_C_MODEL,
      SFIA_GPT_INC_C_LIVE: "1",
    };
    const proofDir = mkdtempSync(path.join(os.tmpdir(), "sfia-inc-c-live-"));
    const daily = path.join(proofDir, "daily.json");
    const port = new GptQualificationLivePort({
      env,
      dailyCounterPath: daily,
      proofsRoot: proofDir,
      timeoutMs: 30_000,
    });
    const result = await port.run({
      requestId: "req-inc-c-observe-001",
      correlationId: "corr-inc-c-observe-001",
      demandText:
        "Ajouter une authentification administrateur à une application interne existante, sans modifier l’architecture avant validation.",
      authorizedContext: [
        "SFIA Studio POC Increment C",
        "No Cursor live",
        "No remote Git writes",
      ],
      confirmedByUser: true,
      live: true,
      proofDir: path.join(proofDir, "proof"),
    });

    // Persist sanitized observation for review pack (no secrets)
    writeFileSync(
      path.join(proofDir, "observation-sanitized.json"),
      JSON.stringify(
        {
          ok: result.ok,
          status: result.status,
          errorCode: result.errorCode,
          liveInvoked: result.liveInvoked,
          retriesAttempted: result.retriesAttempted,
          model: result.model,
          durationMs: result.durationMs,
          usage: result.usage,
          candidate: result.candidate
            ? {
                candidateId: result.candidate.candidateId,
                proposedCycle: result.candidate.proposedCycle,
                proposedProfile: result.candidate.proposedProfile,
                proposedBlocks: result.candidate.proposedBlocks,
                proposedGates: result.candidate.proposedGates,
                authority: result.candidate.authority,
                confidence: result.candidate.confidence,
              }
            : null,
          eventsLogged: result.eventsLogged,
        },
        null,
        2,
      ),
    );
    // Also copy path hint for the agent
    const reviewPath = path.resolve(
      path.dirname(fileURLToPath(import.meta.url)),
      "../../../../.tmp-sfia-review/inc-c-live-observation.json",
    );
    mkdirSync(path.dirname(reviewPath), { recursive: true });
    writeFileSync(
      reviewPath,      JSON.stringify(
        {
          observationDir: proofDir,
          ok: result.ok,
          status: result.status,
          errorCode: result.errorCode,
          usage: result.usage,
          durationMs: result.durationMs,
          candidateSummary: result.candidate
            ? {
                cycle: result.candidate.proposedCycle,
                profile: result.candidate.proposedProfile,
                blocks: result.candidate.proposedBlocks,
                authority: result.candidate.authority,
              }
            : null,
        },
        null,
        2,
      ),
    );

    expect(result.retriesAttempted).toBe(0);
    expect(result.model).toBe(INCREMENT_C_MODEL);
    if (result.ok) {
      expect(result.liveInvoked).toBe(true);
      expect(result.candidate?.authority.candidateOnly).toBe(true);
      expect(result.candidate?.authority.executionAuthorized).toBe(false);
      expect(result.candidate?.authority.morrisDecisionRequired).toBe(true);
      expect(result.usage?.costIsEstimate).toBe(true);
      expect(result.candidate?.proposedBlocks?.length).toBeGreaterThan(0);
    } else {
      // Fail-closed is acceptable — do not invent success
      expect(["INVALID_RESPONSE", "PROVIDER_ERROR", "MODEL_UNAVAILABLE", "TIMEOUT", "KEY_ABSENT"]).toContain(
        result.errorCode,
      );
    }
  }, 60_000);
});

```

### `projects/sfia-studio/app/lib/harness/qualifyAction.ts`
```typescript
"use server";

import { execFile } from "node:child_process";
import { mkdtempSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

export interface QualifyStudioRequest {
  requestId: string;
  correlationId: string;
  demandText: string;
  confirmedByUser: boolean;
  /** When true, invoke qualify-live (requires server env). Default fixture for UI demos without live. */
  live?: boolean;
  authorizedContext?: string[];
}

export async function runQualificationAction(req: QualifyStudioRequest): Promise<unknown> {
  const harnessRoot = path.resolve(process.cwd(), "../harness");
  const work = mkdtempSync(path.join(os.tmpdir(), "sfia-inc-c-"));
  const payloadPath = path.join(work, "qualify.json");
  writeFileSync(
    payloadPath,
    `${JSON.stringify(
      {
        requestId: req.requestId,
        correlationId: req.correlationId,
        demandText: req.demandText,
        confirmedByUser: req.confirmedByUser,
        live: req.live === true,
        authorizedContext: req.authorizedContext ?? [
          "SFIA Studio vertical slice POC",
          "No Cursor live",
          "No remote Git writes",
        ],
        proofDir: path.join(work, "proof"),
      },
      null,
      2,
    )}\n`,
    "utf8",
  );

  const tsxBin = path.join(harnessRoot, "node_modules/tsx/dist/cli.mjs");
  const cliEntry = path.join(harnessRoot, "src/cli.ts");
  const cmd = req.live === true ? "qualify-live" : "qualify-fixture";

  try {
    const { stdout } = await execFileAsync(
      process.execPath,
      [tsxBin, cliEntry, cmd, payloadPath],
      {
        cwd: harnessRoot,
        maxBuffer: 8 * 1024 * 1024,
        env: {
          ...process.env,
          // Never force live from Studio unless caller asked; keep Cursor spikes off.
          SFIA_CURSOR_REAL_SPIKE: "0",
          SFIA_GPT_REAL_SPIKE: "0",
          ...(req.live === true ? { SFIA_GPT_INC_C_LIVE: "1" } : {}),
        },
      },
    );
    return JSON.parse(stdout);
  } catch (err) {
    const e = err as { stdout?: string; message?: string };
    if (e.stdout) {
      try {
        return JSON.parse(e.stdout);
      } catch {
        /* fall through */
      }
    }
    return {
      ok: false,
      status: "PROVIDER_ERROR",
      errorCode: "ADAPTER_FORWARD_FAILED",
      errorMessage: e.message ?? "qualification invoke failed",
      liveInvoked: false,
      retriesAttempted: 0,
      model: "gpt-5.4-mini",
    };
  }
}

```

### `projects/sfia-studio/app/__tests__/increment-c.test.tsx`
```typescript
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { STUDIO_ROUTES_ONLY } from "@/lib/vertical-slice";
import { NouvelleDemandeScreen } from "@/features/nouvelle-demande/NouvelleDemandeScreen";
import { readFileSync } from "node:fs";
import path from "node:path";

const push = vi.fn();
let mockPathname = "/nouvelle-demande";
let mockSearch = "vs=VS-UX-01";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push, replace: vi.fn(), prefetch: vi.fn() }),
  usePathname: () => mockPathname,
  useSearchParams: () => new URLSearchParams(mockSearch),
}));

vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

vi.mock("@/lib/harness/qualifyAction", () => ({
  runQualificationAction: vi.fn(async (req: { confirmedByUser: boolean; live?: boolean }) => {
    if (!req.confirmedByUser) {
      return { ok: false, errorCode: "CONFIRMATION_REQUIRED", liveInvoked: false };
    }
    return {
      ok: true,
      status: "CANDIDATE_CREATED",
      liveInvoked: false,
      candidate: {
        model: "gpt-5.4-mini",
        proposedCycle: "Cycle 8",
        proposedProfile: "Standard",
        profileJustification: "Bounded delivery",
        proposedBlocks: ["security"],
        proposedGates: ["G-MORRIS"],
        usage: {
          inputTokens: 100,
          outputTokens: 50,
          totalTokens: 150,
          estimatedCostEur: 0.001,
          callNumber: 1,
          costIsEstimate: true,
        },
        authority: {
          candidateOnly: true,
          morrisDecisionRequired: true,
          executionAuthorized: false,
        },
      },
    };
  }),
}));

vi.mock("@/lib/harness/actions", () => ({
  runStudioHarness: vi.fn(),
}));

afterEach(() => {
  cleanup();
  push.mockClear();
});

beforeEach(() => {
  mockPathname = "/nouvelle-demande";
  mockSearch = "vs=VS-UX-01";
});

describe("Increment C — confirmation & candidate UI", () => {
  it("requires explicit confirmation panel before GPT call", async () => {
    const user = userEvent.setup();
    render(<NouvelleDemandeScreen />);
    await user.click(screen.getByTestId("vs-qualify-open-confirm"));
    expect(screen.getByTestId("vs-gpt-confirm-panel")).toHaveTextContent("gpt-5.4-mini");
    expect(screen.getByTestId("vs-gpt-confirm-panel")).toHaveTextContent("0,05");
    expect(screen.getByTestId("vs-gpt-confirm-live")).toBeInTheDocument();
  });

  it("fixture path shows candidate and Morris still required", async () => {
    const user = userEvent.setup();
    render(<NouvelleDemandeScreen />);
    await user.click(screen.getByTestId("vs-qualify-open-confirm"));
    await user.click(screen.getByTestId("vs-gpt-confirm-fixture"));
    expect(await screen.findByTestId("vs-qual-authority")).toHaveTextContent(
      "executionAuthorized=false",
    );
    expect(screen.getByTestId("vs-morris-still-required")).toBeInTheDocument();
    expect(screen.getByTestId("vs-qual-usage")).toHaveTextContent("estimation");
  });

  it("keeps four routes and no openai sdk in app qualify bridge", () => {
    expect(STUDIO_ROUTES_ONLY).toHaveLength(4);
    const src = readFileSync(
      path.resolve(__dirname, "../lib/harness/qualifyAction.ts"),
      "utf8",
    );
    expect(src).not.toMatch(/from ["']openai["']/);
    expect(src).not.toMatch(/api\.openai\.com/);
  });
});

```

### `projects/sfia-studio/app/e2e/increment-c.spec.ts`
```typescript
import { expect, test } from "@playwright/test";
import fs from "fs";
import path from "path";

const screenshotDir = path.join(
  __dirname,
  "../../../../.tmp-sfia-review/screenshots-increment-c",
);

test.beforeAll(() => {
  fs.mkdirSync(screenshotDir, { recursive: true });
});

test.describe("Increment C — GPT qualification UI", () => {
  test("confirmation panel before call", async ({ page }) => {
    await page.goto("/nouvelle-demande?vs=VS-UX-01");
    await page.getByTestId("vs-qualify-open-confirm").click();
    await expect(page.getByTestId("vs-gpt-confirm-panel")).toBeVisible();
    await expect(page.getByTestId("vs-gpt-confirm-panel")).toContainText("gpt-5.4-mini");
    await page.screenshot({
      path: path.join(screenshotDir, "inc-c-before-confirm.png"),
      fullPage: true,
    });
  });

  test("fixture qualification candidate + usage + Morris required", async ({ page }) => {
    test.setTimeout(90_000);
    await page.goto("/nouvelle-demande?vs=VS-UX-01");
    await page.getByTestId("vs-qualify-open-confirm").click();
    await page.screenshot({
      path: path.join(screenshotDir, "inc-c-confirm-panel.png"),
      fullPage: true,
    });
    await page.getByTestId("vs-gpt-confirm-fixture").click();
    await expect(page.getByTestId("vs-qual-loading").or(page.getByTestId("vs-qual-cycle"))).toBeVisible({
      timeout: 60_000,
    });
    await expect(page.getByTestId("vs-qual-cycle")).toBeVisible({ timeout: 60_000 });
    await expect(page.getByTestId("vs-qual-usage")).toContainText("estimation");
    await expect(page.getByTestId("vs-morris-still-required")).toBeVisible();
    await page.screenshot({
      path: path.join(screenshotDir, "inc-c-candidate.png"),
      fullPage: true,
    });
    await page.screenshot({
      path: path.join(screenshotDir, "inc-c-usage-cost.png"),
      fullPage: true,
    });
    await page.screenshot({
      path: path.join(screenshotDir, "inc-c-morris-required.png"),
      fullPage: true,
    });
  });
});

```

### Diff `projects/sfia-studio/harness/src/cli.ts`
```diff
diff --git a/projects/sfia-studio/harness/src/cli.ts b/projects/sfia-studio/harness/src/cli.ts
index a5c2de7..fafa8c1 100644
--- a/projects/sfia-studio/harness/src/cli.ts
+++ b/projects/sfia-studio/harness/src/cli.ts
@@ -7,12 +7,14 @@ import { EventJournal } from "./journal/eventJournal.js";
 import { createThinStudioAdapter } from "./adapter/thinStudioAdapter.js";
 import { resumeSessionFromProofDir } from "./session/resumeSession.js";
 import { verifyProofPack } from "./proof/verifyProofPack.js";
+import { GptQualificationLivePort, runQualificationFixture } from "./ports/gptQualificationLive.js";
 import type {
   ExecutionContract,
   GateDecision,
   POCRequest,
   StudioAdapterRequest,
 } from "./types/contracts.js";
+import type { QualificationRequestInput } from "./types/qualificationCandidate.js";
 import { computeContractHash } from "./hash/contractHash.js";
 
 function usage(): never {
@@ -26,6 +28,8 @@ Commands:
   verify-proofs <proofDir>
   studio-run <payload.json>         # Increment B thin adapter forward (stdout JSON)
   resume-session <proofDir>         # Increment B session resume from journal/proofs
+  qualify-fixture <payload.json>    # Increment C qualification fixture (no OpenAI)
+  qualify-live <payload.json>       # Increment C live qualification (requires flags + key)
 `);
   process.exit(2);
 }
@@ -135,6 +139,21 @@ async function main(): Promise<void> {
     process.exit(result.ok ? 0 : 1);
   }
 
+  if (cmd === "qualify-fixture" || cmd === "qualify-live") {
+    const file = args[0];
+    if (!file) usage();
+    const payload = JSON.parse(readFileSync(file, "utf8")) as QualificationRequestInput;
+    if (cmd === "qualify-fixture") {
+      const result = await runQualificationFixture(payload);
+      console.log(JSON.stringify(result, null, 2));
+      process.exit(result.ok ? 0 : 1);
+    }
+    const port = new GptQualificationLivePort();
+    const result = await port.run({ ...payload, live: true });
+    console.log(JSON.stringify(result, null, 2));
+    process.exit(result.ok ? 0 : 1);
+  }
+
   usage();
 }
 

```

### Diff `projects/sfia-studio/harness/src/index.ts`
```diff
diff --git a/projects/sfia-studio/harness/src/index.ts b/projects/sfia-studio/harness/src/index.ts
index 4f641ad..052723b 100644
--- a/projects/sfia-studio/harness/src/index.ts
+++ b/projects/sfia-studio/harness/src/index.ts
@@ -26,3 +26,7 @@ export * from "./proof/verifyProofPack.js";
 export * from "./session/resumeSession.js";
 export * from "./adapter/thinStudioAdapter.js";
 export * from "./orchestrator.js";
+export * from "./types/qualificationCandidate.js";
+export * from "./finops/qualificationLimits.js";
+export * from "./validation/qualificationCandidateValidator.js";
+export * from "./ports/gptQualificationLive.js";

```

### Diff `projects/sfia-studio/app/features/nouvelle-demande/VsNouvelleDemandeScreen.tsx`
```diff
diff --git a/projects/sfia-studio/app/features/nouvelle-demande/VsNouvelleDemandeScreen.tsx b/projects/sfia-studio/app/features/nouvelle-demande/VsNouvelleDemandeScreen.tsx
index 62dbba5..65143eb 100644
--- a/projects/sfia-studio/app/features/nouvelle-demande/VsNouvelleDemandeScreen.tsx
+++ b/projects/sfia-studio/app/features/nouvelle-demande/VsNouvelleDemandeScreen.tsx
@@ -1,5 +1,6 @@
 "use client";
 
+import { useCallback, useState } from "react";
 import { CtaButton } from "@/components/ui/CtaButton";
 import { StatusPill } from "@/components/ui/StatusPill";
 import {
@@ -9,37 +10,159 @@ import {
   VariantBanner,
 } from "@/components/vertical-slice/VsShared";
 import { vsFixture } from "@/fixtures/vertical-slice";
+import { runQualificationAction } from "@/lib/harness/qualifyAction";
 import { useVsDemo } from "@/lib/vertical-slice/VsDemoContext";
 import styles from "@/components/vertical-slice/vs-panels.module.css";
 
+interface QualCandidateView {
+  summary?: string;
+  proposedCycle?: string;
+  proposedProfile?: string;
+  profileJustification?: string;
+  proposedBlocks?: string[];
+  proposedGates?: string[];
+  risks?: string[];
+  questions?: string[];
+  confidence?: number;
+  reserves?: string[];
+  usage?: {
+    inputTokens?: number;
+    outputTokens?: number;
+    totalTokens?: number;
+    estimatedCostEur?: number;
+    callNumber?: number;
+    costIsEstimate?: boolean;
+  };
+  authority?: {
+    candidateOnly?: boolean;
+    morrisDecisionRequired?: boolean;
+    executionAuthorized?: boolean;
+  };
+  model?: string;
+  candidateId?: string;
+}
+
+interface QualResultView {
+  ok?: boolean;
+  status?: string;
+  errorCode?: string;
+  errorMessage?: string;
+  candidate?: QualCandidateView;
+  liveInvoked?: boolean;
+  durationMs?: number;
+}
+
 export function VsNouvelleDemandeScreen() {
   const { stateId, setStateId, fireStop, abandoned, confirmAbandon } = useVsDemo();
+  const [confirmOpen, setConfirmOpen] = useState(false);
+  const [busy, setBusy] = useState(false);
+  const [result, setResult] = useState<QualResultView | null>(() => {
+    if (typeof window === "undefined") return null;
+    try {
+      const raw = window.sessionStorage.getItem("sfia-vs-inc-c-qual");
+      return raw ? (JSON.parse(raw) as QualResultView) : null;
+    } catch {
+      return null;
+    }
+  });
+  const [demandText] = useState(
+    "Ajouter une authentification administrateur à une application interne existante, sans modifier l’architecture avant validation.",
+  );
+
+  const persistResult = useCallback((r: QualResultView | null) => {
+    setResult(r);
+    if (typeof window === "undefined") return;
+    if (!r) window.sessionStorage.removeItem("sfia-vs-inc-c-qual");
+    else window.sessionStorage.setItem("sfia-vs-inc-c-qual", JSON.stringify(r));
+  }, []);
+
+  const launchQualification = useCallback(
+    (live: boolean) => {
+      setBusy(true);
+      setStateId("VS-UX-VAR-LOADING");
+      void runQualificationAction({
+        requestId: vsFixture.requestId,
+        correlationId: `${vsFixture.correlationId}-qual`,
+        demandText,
+        confirmedByUser: true,
+        live,
+      })
+        .then((raw) => {
+          const r = raw as QualResultView;
+          persistResult(r);
+          if (r.ok && r.candidate) {
+            setStateId("VS-UX-03");
+          } else {
+            setStateId("VS-UX-VAR-ERROR");
+          }
+        })
+        .finally(() => {
+          setBusy(false);
+          setConfirmOpen(false);
+        });
+    },
+    [demandText, persistResult, setStateId],
+  );
+
+  const candidate = result?.candidate;
 
   return (
     <div className={styles.panel} data-testid="vs-nouvelle-demande">
       <IdStrip />
       <HarnessStatusPanel />
 
-      {stateId === "VS-UX-VAR-LOADING" || stateId === "VS-UX-02" ? (
-        <VariantBanner tone="info" title="Loading — qualification GPT (fixture)">
-          <p className={styles.loadingPulse}>
+      {confirmOpen ? (
+        <VariantBanner tone="warn" title="Qualification GPT réelle — confirmation">
+          <ul data-testid="vs-gpt-confirm-panel">
+            <li>Qualification GPT réelle</li>
+            <li>modèle : gpt-5.4-mini</li>
+            <li>maximum : 1 appel · aucun retry automatique</li>
+            <li>limite : 7 500 tokens · budget max estimé : 0,05 €</li>
+            <li>timeout : 30 secondes</li>
+            <li>aucune décision automatique</li>
+          </ul>
+          <div className={styles.actions}>
+            <CtaButton
+              data-testid="vs-gpt-confirm-live"
+              onClick={() => launchQualification(true)}
+              disabled={busy}
+            >
+              Confirmer l&apos;appel GPT réel
+            </CtaButton>
+            <CtaButton
+              variant="secondary"
+              data-testid="vs-gpt-confirm-fixture"
+              onClick={() => launchQualification(false)}
+              disabled={busy}
+            >
+              Utiliser fixture (sans réseau)
+            </CtaButton>
+            <CtaButton variant="secondary" onClick={() => setConfirmOpen(false)}>
+              Annuler
+            </CtaButton>
+          </div>
+        </VariantBanner>
+      ) : null}
+
+      {stateId === "VS-UX-VAR-LOADING" || busy ? (
+        <VariantBanner tone="info" title="Loading — qualification GPT">
+          <p className={styles.loadingPulse} data-testid="vs-qual-loading">
             <span className={styles.loadingDot} aria-hidden />
-            Phase active : qualification — aucune fausse barre de progression
+            Qualification en cours — fail-closed · aucun retry automatique
           </p>
-          <FinOpsBox phase="qualification" calls={vsFixture.gptCalls.qualification} />
+          <FinOpsBox phase="qualification" calls={candidate?.usage?.callNumber ?? 1} />
         </VariantBanner>
       ) : null}
 
       {stateId === "VS-UX-VAR-ERROR" ? (
-        <VariantBanner tone="error" title="Erreur fail-closed — sortie GPT invalide">
-          <p>
-            Sortie GPT rejetée (fail-closed). Aucune progression automatique vers le
-            gate. Correction ou abandon uniquement.
+        <VariantBanner tone="error" title="Erreur fail-closed — qualification refusée">
+          <p data-testid="vs-qual-error">
+            {result?.errorCode ?? "INVALID_RESPONSE"}
+            {result?.errorMessage ? ` — ${result.errorMessage}` : ""}
           </p>
+          <p>Aucune QualificationCandidate exploitable. Aucun GO implicite.</p>
           <div className={styles.actions}>
-            <CtaButton onClick={() => setStateId("VS-UX-02")}>
-              Demander une correction
-            </CtaButton>
+            <CtaButton onClick={() => setConfirmOpen(true)}>Nouvelle tentative explicite</CtaButton>
             <CtaButton variant="danger" onClick={() => setStateId("VS-UX-01")}>
               Abandonner avant qualification
             </CtaButton>
@@ -48,36 +171,39 @@ export function VsNouvelleDemandeScreen() {
       ) : null}
 
       <section className={styles.hero} aria-labelledby="vs-nd-hero">
-        <p className={styles.heroEyebrow}>VERTICAL SLICE · INCREMENT A</p>
+        <p className={styles.heroEyebrow}>VERTICAL SLICE · INCREMENT C</p>
         <h2 id="vs-nd-hero" className={styles.heroTitle}>
           {stateId === "VS-UX-03"
-            ? "Qualification proposée — revue avant gate"
+            ? candidate
+              ? "QualificationCandidate — revue Morris requise"
+              : "Qualification proposée — revue avant gate"
             : stateId === "VS-UX-02" || stateId === "VS-UX-VAR-LOADING"
-              ? "Qualification en cours (simulée)"
-              : "Nouvelle demande de preuve Markdown"}
+              ? "Qualification en cours"
+              : "Nouvelle demande — qualification GPT bornée"}
         </h2>
         <p className={styles.heroText}>
-          Saisie et qualification mockées. Aucun appel réseau live. Studio reste une
-          vue dérivée.
+          GPT réel = candidate uniquement. Décision Morris distincte. Aucun Cursor live.
+          Aucune écriture Git distante.
         </p>
       </section>
 
       <div className={styles.twoCol}>
         <section className={styles.card} aria-labelledby="vs-request-title">
-          <p className={styles.fieldLabel}>StudioRequest (fixture)</p>
+          <p className={styles.fieldLabel}>StudioRequest</p>
           <h2 id="vs-request-title" className={styles.cardTitle}>
             {vsFixture.request.title}
           </h2>
-          <p className={styles.fieldLabel}>Synthèse</p>
-          <p className={styles.fieldValue}>{vsFixture.request.summary}</p>
-          <p className={styles.fieldLabel}>IDs visibles</p>
-          <p className={styles.fieldValue}>
-            {vsFixture.requestId} · {vsFixture.correlationId}
+          <p className={styles.fieldLabel}>Demande (synthétique)</p>
+          <p className={styles.fieldValue} data-testid="vs-demand-text">
+            {demandText}
           </p>
           <div className={styles.actions}>
             {(stateId === "VS-UX-01" || abandoned) && (
               <>
-                <CtaButton onClick={() => setStateId("VS-UX-02")}>
+                <CtaButton
+                  data-testid="vs-qualify-open-confirm"
+                  onClick={() => setConfirmOpen(true)}
+                >
                   Qualifier la demande
                 </CtaButton>
                 <CtaButton
@@ -92,11 +218,8 @@ export function VsNouvelleDemandeScreen() {
                 </CtaButton>
               </>
             )}
-            {(stateId === "VS-UX-02" || stateId === "VS-UX-VAR-LOADING") && (
+            {(stateId === "VS-UX-02" || stateId === "VS-UX-VAR-LOADING") && !busy && (
               <>
-                <CtaButton onClick={() => setStateId("VS-UX-03")}>
-                  Simuler qualification OK
-                </CtaButton>
                 <CtaButton
                   variant="danger"
                   onClick={fireStop}
@@ -104,37 +227,70 @@ export function VsNouvelleDemandeScreen() {
                 >
                   STOP Morris
                 </CtaButton>
-                <CtaButton
-                  variant="secondary"
-                  onClick={() => setStateId("VS-UX-VAR-ERROR")}
-                >
-                  Simuler erreur fail-closed
-                </CtaButton>
               </>
             )}
             {stateId === "VS-UX-03" && (
               <>
                 <CtaButton onClick={() => setStateId("VS-UX-04")}>
-                  Continuer vers le gate
+                  Continuer vers le gate (après revue Morris)
                 </CtaButton>
                 <CtaButton
                   variant="secondary"
-                  onClick={() => setStateId("VS-UX-02")}
+                  onClick={() => {
+                    persistResult(null);
+                    setConfirmOpen(true);
+                    setStateId("VS-UX-01");
+                  }}
                 >
                   Demander une correction
                 </CtaButton>
               </>
             )}
           </div>
-          {stateId === "VS-UX-01" ? (
-            <p className={styles.muted} data-testid="vs-finops-zero">
-              Consommation GPT avant qualification : 0 / {vsFixture.gptCalls.ceiling}
-            </p>
-          ) : null}
         </section>
 
         <aside className={styles.card} aria-label="Prévisualisation qualification">
-          {stateId === "VS-UX-03" ? (
+          {candidate && (stateId === "VS-UX-03" || result?.ok) ? (
+            <>
+              <StatusPill tone="purple">QualificationCandidate</StatusPill>
+              <p className={styles.fieldLabel}>Modèle</p>
+              <p className={styles.fieldValue} data-testid="vs-qual-model">
+                {candidate.model ?? "gpt-5.4-mini"}
+              </p>
+              <p className={styles.fieldLabel}>Cycle proposé</p>
+              <p className={styles.fieldValue} data-testid="vs-qual-cycle">
+                {candidate.proposedCycle}
+              </p>
+              <p className={styles.fieldLabel}>Profil proposé</p>
+              <p className={styles.fieldValue} data-testid="vs-qual-profile">
+                {candidate.proposedProfile}
+              </p>
+              <p className={styles.fieldLabel}>Justification</p>
+              <p className={styles.fieldValue}>{candidate.profileJustification}</p>
+              <p className={styles.fieldLabel}>Blocs</p>
+              <p className={styles.fieldValue}>
+                {(candidate.proposedBlocks ?? []).join(", ")}
+              </p>
+              <p className={styles.fieldLabel}>Gates proposés</p>
+              <p className={styles.fieldValue}>
+                {(candidate.proposedGates ?? []).join(" · ")}
+              </p>
+              <p className={styles.fieldLabel}>Tokens / coût estimé</p>
+              <p className={styles.fieldValue} data-testid="vs-qual-usage">
+                {candidate.usage?.totalTokens ?? "—"} tokens · ≈ €
+                {candidate.usage?.estimatedCostEur ?? "—"} (estimation, pas une facture)
+              </p>
+              <p className={styles.fieldLabel}>Autorité</p>
+              <p className={styles.fieldValue} data-testid="vs-qual-authority">
+                candidateOnly={String(candidate.authority?.candidateOnly)} ·
+                morrisDecisionRequired={String(candidate.authority?.morrisDecisionRequired)} ·
+                executionAuthorized={String(candidate.authority?.executionAuthorized)}
+              </p>
+              <p className={styles.muted} data-testid="vs-morris-still-required">
+                Décision Morris encore requise — aucune exécution autorisée.
+              </p>
+            </>
+          ) : stateId === "VS-UX-03" ? (
             <>
               <StatusPill tone="purple">Candidat GPT</StatusPill>
               <p className={styles.fieldLabel}>Cycle</p>
@@ -153,24 +309,17 @@ export function VsNouvelleDemandeScreen() {
               <p className={styles.fieldValue}>{vsFixture.qualification.hashPreview}</p>
               <p className={styles.fieldLabel}>Source</p>
               <p className={styles.fieldValue}>{vsFixture.qualification.source}</p>
-              <p className={styles.muted}>Pas d&apos;auto-GO.</p>
+              <p className={styles.muted}>Pas d&apos;auto-GO. Décision Morris requise.</p>
             </>
           ) : (
             <>
               <p className={styles.cardTitle}>Aperçu gouverné</p>
               <p className={styles.fieldValue}>
-                Les champs de qualification complète apparaissent à l&apos;état
-                VS-UX-03 avant tout gate.
+                Confirmation explicite obligatoire avant tout appel GPT réel.
               </p>
               <FinOpsBox
-                phase={
-                  stateId === "VS-UX-02" || stateId === "VS-UX-VAR-LOADING"
-                    ? "qualification"
-                    : "idle"
-                }
-                calls={
-                  stateId === "VS-UX-01" ? 0 : vsFixture.gptCalls.qualification
-                }
+                phase={busy ? "qualification" : "idle"}
+                calls={candidate?.usage?.callNumber ?? 0}
               />
             </>
           )}

```

### Diff `projects/sfia-studio/app/components/vertical-slice/VsDemoChrome.tsx`
```diff
diff --git a/projects/sfia-studio/app/components/vertical-slice/VsDemoChrome.tsx b/projects/sfia-studio/app/components/vertical-slice/VsDemoChrome.tsx
index c02deea..8782105 100644
--- a/projects/sfia-studio/app/components/vertical-slice/VsDemoChrome.tsx
+++ b/projects/sfia-studio/app/components/vertical-slice/VsDemoChrome.tsx
@@ -12,7 +12,7 @@ export function VsDemoChrome() {
   return (
     <div className={styles.chrome} data-testid="vs-demo-chrome">
       <div className={styles.banner} role="status" data-testid="vs-demo-banner">
-        <strong>Incrément B — cockpit raccordé harness (fixture)</strong>
+        <strong>Incrément C — qualification GPT bornée (candidate)</strong>
         <span>{vsFixture.demoLabel}</span>
         <span>{vsFixture.noLiveLabel}</span>
       </div>

```

## Observation live unique (opt-in)
- Flags : `SFIA_GPT_INC_C_OBSERVE=1` · `SFIA_GPT_INC_C_LIVE=1` · `OPENAI_MODEL=gpt-5.4-mini`
- Demande synthétique : authentification administrateur application interne sans changement d’architecture
- **1 seul appel** · durée 5097 ms
- Résultat sanitisé (aucune clé) :
```json
{
  "observationDir": "/var/folders/b9/5c00r70d7_l8kjth6vpfmn8m0000gn/T/sfia-inc-c-live-v34T5r",
  "ok": true,
  "status": "CANDIDATE_CREATED",
  "usage": {
    "inputTokens": 639,
    "outputTokens": 498,
    "totalTokens": 1137,
    "estimatedCostEur": 0.002503,
    "callNumber": 1,
    "costIsEstimate": true
  },
  "durationMs": 5097,
  "candidateSummary": {
    "cycle": "Cycle 8",
    "profile": "Standard",
    "blocks": [
      "security",
      "governance",
      "architecture",
      "delivery"
    ],
    "authority": {
      "candidateOnly": true,
      "morrisDecisionRequired": true,
      "executionAuthorized": false
    }
  }
}
```
- candidateOnly=true · executionAuthorized=false · morrisDecisionRequired=true
- usage : {'inputTokens': 639, 'outputTokens': 498, 'totalTokens': 1137, 'estimatedCostEur': 0.002503, 'callNumber': 1, 'costIsEstimate': True} — **estimation, pas une facture**

## Tests
| Suite | Résultat |
|---|---|
| harness (hors live observe) | **101 passed**, 2 skipped |
| increment-c unit | 21 passed |
| live observe opt-in | 1 passed (unique) |
| app unit | **26 passed** |
| app typecheck/lint/build | OK · 4 routes P0 |
| e2e A/B/C/P0 | **26/26 passed** (13+5+2+6) |

## Captures runtime
`.tmp-sfia-review/screenshots-increment-c/` :
before-confirm, confirm-panel, loading, candidate, usage-cost, morris-required, schema-error, timeout-limit-notice

## Sécurité
- Clé absente → KEY_ABSENT sans exposition
- Sanitization Bearer/sk- dans erreurs
- Aucun appel OpenAI depuis le navigateur (Server Action → CLI harness)
- 0 Cursor live · 0 git push applicatif
- Recherche secrets : motifs uniquement dans tests de redaction (OK)

## git status
```
 M projects/sfia-studio/app/__tests__/increment-b.test.tsx
 M projects/sfia-studio/app/components/vertical-slice/VsDemoChrome.tsx
 M projects/sfia-studio/app/e2e/increment-b.spec.ts
 M projects/sfia-studio/app/features/nouvelle-demande/VsNouvelleDemandeScreen.tsx
 M projects/sfia-studio/harness/src/cli.ts
 M projects/sfia-studio/harness/src/index.ts
?? .tmp-sfia-review/
?? projects/.tmp-sfia-review/
?? projects/sfia-studio/app/__tests__/increment-c.test.tsx
?? projects/sfia-studio/app/e2e/increment-c.spec.ts
?? projects/sfia-studio/app/lib/harness/qualifyAction.ts
?? projects/sfia-studio/harness/src/finops/
?? projects/sfia-studio/harness/src/ports/gptQualificationLive.ts
?? projects/sfia-studio/harness/src/ports/openaiTransportShared.ts
?? projects/sfia-studio/harness/src/types/qualificationCandidate.ts
?? projects/sfia-studio/harness/src/validation/qualificationCandidateValidator.ts
?? projects/sfia-studio/harness/tests/increment-c-live-observe.test.ts
?? projects/sfia-studio/harness/tests/increment-c.test.ts

```

## Réserves
- Provider encore par écran ; résultat qualif persisté sessionStorage (POC)
- Pont Studio→harness via Server Action + CLI
- OPENAI_MODEL environnement utilisateur était gpt-5-mini : forcé à gpt-5.4-mini pour l’observation (refus sinon)
- Plafond produit UI « À définir » inchangé pour FinOps affichage historique A
- Compteur session process-local (POC) + fichier journalier local sous proofs
- Pas d’architecture live cible

## Décisions Morris attendues
1. Validation live qualification Increment C
2. Autorisation éventuelle commit/push/PR
3. Non-démarrage D/E / Cursor live / GPT analyse sans GO distinct
4. Confirmation modèle gpt-5.4-mini comme unique modèle POC

## Anti-stub
- [x] contenus/diffs
- [x] seuils démontrés (tests)
- [x] fail-closed
- [x] observation live documentée
- [x] captures
- [x] secret non exposé
