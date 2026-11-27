/**
 * Common provider emission frontier — technical controls only.
 *
 * Distinguishes:
 * - SDK invocation (run()) — admission / lane precheck, not an HTTP attempt.
 * - HTTP attempt — each network contact (incl. SDK retries) via custom fetch.
 *
 * Campaign envelopes are explicit ALS contexts. Missing required campaign ⇒ fail-closed.
 * Not an orchestrator / not cognitive strategy / not D6 / not B1 admission owner.
 */

import { AsyncLocalStorage } from "node:async_hooks";
import { createHash, randomBytes } from "node:crypto";
import {
  existsSync,
  mkdirSync,
  readFileSync,
  unlinkSync,
  writeFileSync,
} from "node:fs";
import { join } from "node:path";
import { assertOpenAiKeyForLane } from "@/lib/openai-lane-guard";
import {
  extractResponseNativeUsage,
  reconcileHostedSearchUsage,
} from "./provider-response-usage";
import {
  applyContinuityToResponsesBody,
  planProviderContinuity,
  resolveProviderContinuityMode,
  type ProviderChainRef,
  type StudioContinuitySnapshot,
} from "./provider-response-continuity";
import {
  admitModelEffort,
  type CognitiveEffort,
  type CognitiveModelId,
  type ResourceAdmissionMode,
} from "./cognitive-resources";

function admissionModeFromEnv(
  env: NodeJS.ProcessEnv = process.env,
): ResourceAdmissionMode {
  const raw = (env.SFIA_COGNITIVE_ADMISSION_MODE || "").trim().toLowerCase();
  if (raw === "calibration") return "calibration";
  return "operational";
}

export type EmissionAttemptKind =
  | "nora.generate_reply"
  | "public_web.isolated_search"
  | "internal.qualification"
  | "campaign.probe"
  | "http.responses"
  | "http.input_tokens_count"
  | "http.decisions"
  | "http.embeddings"
  | "http.vector_stores"
  | "http.files"
  | "http.other"
  | "other";

/** Non-transferable HTTP sub-envelopes within one cumulative campaign. */
export type EmissionHttpFamily =
  | "responses"
  | "decisions"
  | "embeddings"
  | "vector_stores"
  | "files"
  | "other";

export type FamilyHttpBudget = {
  maxHttpAttempts: number;
  reserved: number;
  committed: number;
  released: number;
};

export type HttpAttemptState =
  | "RESERVED"
  | "COMMITTED"
  | "RELEASED"
  | "UNCERTAIN";

export type CampaignEnvelope = {
  campaignId: string;
  /** Require this ALS campaign for every HTTP emission (fail-closed if absent). */
  required: boolean;
  maxHttpAttempts: number;
  /** Distinct envelope for POST /v1/responses/input_tokens (not Responses generation). */
  maxInputTokenCountAttempts: number | null;
  maxInputTokens: number | null;
  maxOutputTokens: number | null;
  maxInputTokensPerRequest: number | null;
  maxOutputTokensPerRequest: number | null;
  maxHostedSearches: number | null;
  maxDirectOpens: number | null;
  /**
   * When true, campaign input limits require a provider-native input_tokens count
   * before Responses emission. Body-length estimates are never a strict guarantee.
   * Non-Responses families use payload/contact limits instead (see familyHttp).
   */
  requireNativeInputBound: boolean;
  /**
   * Optional per-family HTTP budgets. Null = global maxHttpAttempts only.
   * Families are not transferable without explicit arbitration.
   */
  familyHttp: Partial<Record<EmissionHttpFamily, FamilyHttpBudget>> | null;
  httpAttemptsReserved: number;
  httpAttemptsCommitted: number;
  httpAttemptsReleased: number;
  inputTokenCountAttemptsReserved: number;
  inputTokenCountAttemptsCommitted: number;
  inputTokenCountAttemptsReleased: number;
  inputTokensReserved: number;
  inputTokensCommitted: number;
  outputTokensReserved: number;
  outputTokensCommitted: number;
  hostedSearchesCommitted: number;
  /**
   * A-posteriori billable hosted searches from tool_usage.web_search.num_requests.
   * null when never measured (UNKNOWN — never ASSUMED_1).
   */
  hostedSearchesMeasured: number | null;
  hostedSearchMeasureStatus: "NONE" | "MEASURED" | "UNKNOWN" | "PARTIAL";
  hostedSearchMeasureLimits: string[];
  directOpensCommitted: number;
  suspended: boolean;
  suspendReason: string | null;
};

export type InputBoundKind = "native" | "demonstrable" | "estimate" | null;

export type HttpAttemptRecord = {
  attemptId: string;
  campaignId: string | null;
  state: HttpAttemptState;
  kind: EmissionAttemptKind;
  reservedSlots: number;
  reservedInputTokens: number;
  reservedOutputTokens: number;
  inputBoundKind: InputBoundKind;
  urlHost: string;
  modelHint: string | null;
  createdAtMs: number;
};

export type EmissionReservation =
  | {
      ok: true;
      attemptId: string;
      campaignId: string | null;
      reservedSlots: number;
      reservedInputTokens: number;
      reservedOutputTokens: number;
      keyFingerprint: string;
      lane: string;
      layer: "http" | "sdk_invocation";
    }
  | {
      ok: false;
      reasonCode:
        | "LANE_GUARD_FAILED"
        | "MODEL_EFFORT_NOT_ADMITTED"
        | "CAMPAIGN_REQUIRED_MISSING"
        | "CAMPAIGN_ENVELOPE_EXHAUSTED"
        | "CAMPAIGN_SUSPENDED"
        | "ATTEMPT_STATE_INVALID"
        | "INVALID_REQUEST"
        | "INPUT_UNBOUNDED"
        | "ALS_CONTEXT_REQUIRED";
      reason: string;
    };

type FrontierStore = {
  campaign: CampaignEnvelope | null;
  attempts: Map<string, HttpAttemptRecord>;
  /** Independent oracle: HTTP attempts that reached commit/uncertain. */
  httpEmissionsObserved: number;
  /** SDK run() prechecks that passed (not HTTP). */
  sdkInvocationsObserved: number;
  /**
   * Test-only oracle metadata (no prompt bodies in production).
   * captureBodies must be explicitly enabled for substituted-transport tests.
   */
  httpBodiesObserved: Array<{
    attemptId: string;
    url: string;
    method: string;
    model: string | null;
    effort: string | null;
    maxOutputTokens: number | null;
    maxToolCalls: number | null;
    kind: EmissionAttemptKind | null;
  }>;
  /** Effort admitted at SDK layer — reused for HTTP body admission (no silent medium). */
  effortHint: string | null;
  /** Model admitted at SDK layer — compared to final HTTP payload. */
  modelHint: string | null;
  /** When true, record non-body metadata for substituted-transport oracles. */
  captureHttpMeta: boolean;
  /**
   * Last native input_tokens count for the current ALS turn, keyed by payload fingerprint.
   * Used so Responses emission can reserve against a provider count without re-counting.
   */
  nativeInputCount: {
    fingerprint: string;
    inputTokens: number;
    countedAtMs: number;
  } | null;
  /** Test oracle: response-side tool_usage observations (no prompt bodies). */
  responseUsageObserved: Array<{
    attemptId: string;
    responseId: string | null;
    hostedNumRequests: number | null;
    hostedStatus: "MEASURED" | "UNKNOWN" | "RESERVED_ONLY";
    limits: string[];
  }>;
  /**
   * Optional native continuity binding for this ALS turn (D3-owned snapshot).
   * Mode remains off unless SFIA_PROVIDER_CONTINUITY_MODE=native.
   */
  continuity: {
    studio: StudioContinuitySnapshot | null;
    chain: ProviderChainRef | null;
  };
};

const als = new AsyncLocalStorage<FrontierStore>();

let clientInstallPromise: Promise<void> | null = null;
let installedClientKeyFp: string | null = null;

/**
 * Process-level latch: once a required campaign starts, OpenAI HTTP outside an
 * ALS store that still holds that campaign fails closed (ALS loss ≠ unlimited).
 * Cleared only by explicit suspend/end or test reset — not by ALS exit alone.
 */
let requiredCampaignLatch: {
  campaignId: string;
  active: boolean;
} | null = null;

/**
 * Process-level campaign registry — counters survive ALS request boundaries.
 * LIVE qualification (G-LIVE-API / G-WEB-PUBLIC) re-attaches the same envelope
 * on each request; lost ALS must never invent a fresh unlimited campaign.
 */
const processCampaignRegistry = new Map<string, CampaignEnvelope>();

type LiveCampaignStateEntry = {
  campaignId: string;
  pid: number;
  createdAtMs: number;
  /** Full cumulative envelope — never zeroed on process restart. */
  envelope?: CampaignEnvelope;
};

function liveCampaignStatePath(): string {
  return join(process.cwd(), ".sfia-evidence", "live-campaign-state.json");
}

function readLiveCampaignStateFile(): LiveCampaignStateEntry | null {
  const p = liveCampaignStatePath();
  if (!existsSync(p)) return null;
  try {
    const raw = readFileSync(p, "utf8");
    const parsed = JSON.parse(raw) as LiveCampaignStateEntry;
    if (
      typeof parsed?.campaignId === "string" &&
      typeof parsed?.pid === "number" &&
      typeof parsed?.createdAtMs === "number"
    ) {
      return parsed;
    }
    return null;
  } catch {
    return null;
  }
}

function writeLiveCampaignStateEntry(entry: LiveCampaignStateEntry): void {
  const p = liveCampaignStatePath();
  mkdirSync(join(process.cwd(), ".sfia-evidence"), { recursive: true });
  writeFileSync(p, JSON.stringify(entry, null, 2), "utf8");
}

function deleteLiveCampaignStateFile(): void {
  const p = liveCampaignStatePath();
  if (existsSync(p)) {
    try {
      unlinkSync(p);
    } catch {
      /* best-effort */
    }
  }
}

function persistCampaignEnvelope(campaign: CampaignEnvelope): void {
  writeLiveCampaignStateEntry({
    campaignId: campaign.campaignId,
    pid: process.pid,
    createdAtMs: Date.now(),
    envelope: { ...campaign },
  });
}

/**
 * Reload cumulative counters after process restart for the same campaignId.
 * Never invents a fresh zeroed envelope for a prior campaign identity.
 * Legacy pid-only files (no envelope) refuse — explicit new campaignId required.
 */
export function restoreCampaignEnvelopeAfterRestart(
  campaignId: string,
): CampaignEnvelope | null {
  const persisted = readLiveCampaignStateFile();
  if (!persisted || persisted.campaignId !== campaignId) return null;
  if (persisted.pid === process.pid) return null;
  if (!persisted.envelope || persisted.envelope.campaignId !== campaignId) {
    throw new ProviderEmissionRefusedError(
      "CAMPAIGN_INVALIDATED_RESTART",
      `campaign ${campaignId} was bound to pid ${persisted.pid} without restorable counters; current pid ${process.pid}`,
    );
  }
  const restored: CampaignEnvelope = {
    ...persisted.envelope,
    familyHttp: persisted.envelope.familyHttp ?? null,
  };
  processCampaignRegistry.set(campaignId, restored);
  persistCampaignEnvelope(restored);
  return restored;
}

/** @deprecated use restoreCampaignEnvelopeAfterRestart — kept name for call sites. */
export function invalidateCampaignOnProcessRestartCheck(
  campaignId: string,
): void {
  restoreCampaignEnvelopeAfterRestart(campaignId);
}

/** Scrubbed metrics for qualify scripts — not a second ledger. */
export function getCampaignEnvelopeMetrics(
  campaignId?: string,
): Record<string, unknown> | null {
  const c = campaignId
    ? processCampaignRegistry.get(campaignId) ?? null
    : getActiveCampaignEnvelope();
  if (!c) return null;
  return {
    campaignId: c.campaignId,
    suspended: c.suspended,
    suspendReason: c.suspendReason,
    httpAttemptsReserved: c.httpAttemptsReserved,
    httpAttemptsCommitted: c.httpAttemptsCommitted,
    httpAttemptsReleased: c.httpAttemptsReleased,
    inputTokenCountAttemptsReserved: c.inputTokenCountAttemptsReserved,
    inputTokenCountAttemptsCommitted: c.inputTokenCountAttemptsCommitted,
    inputTokensReserved: c.inputTokensReserved,
    inputTokensCommitted: c.inputTokensCommitted,
    outputTokensReserved: c.outputTokensReserved,
    outputTokensCommitted: c.outputTokensCommitted,
    hostedSearchesCommitted: c.hostedSearchesCommitted,
    hostedSearchesMeasured: c.hostedSearchesMeasured,
    hostedSearchMeasureStatus: c.hostedSearchMeasureStatus,
    requireNativeInputBound: c.requireNativeInputBound,
    maxHttpAttempts: c.maxHttpAttempts,
    maxInputTokens: c.maxInputTokens,
    maxOutputTokens: c.maxOutputTokens,
    familyHttp: c.familyHttp,
  };
}

function emptyStore(): FrontierStore {
  return {
    campaign: null,
    attempts: new Map(),
    httpEmissionsObserved: 0,
    sdkInvocationsObserved: 0,
    httpBodiesObserved: [],
    effortHint: null,
    modelHint: null,
    captureHttpMeta: false,
    nativeInputCount: null,
    responseUsageObserved: [],
    continuity: { studio: null, chain: null },
  };
}

/**
 * Merge per-attempt hosted-search measure into campaign aggregate.
 * UNKNOWN then MEASURED (or MEASURED then UNKNOWN) ⇒ PARTIAL — never erase unknowns.
 */
export function mergeHostedSearchMeasureStatus(
  prev: "NONE" | "MEASURED" | "UNKNOWN" | "PARTIAL",
  next: "MEASURED" | "UNKNOWN",
): "NONE" | "MEASURED" | "UNKNOWN" | "PARTIAL" {
  if (prev === "NONE") return next;
  if (prev === "PARTIAL") return "PARTIAL";
  if (prev === next) return prev;
  return "PARTIAL";
}

/** Bind D3 continuity snapshot + optional provider chain for this ALS turn. */
export function bindProviderContinuityContext(input: {
  studio: StudioContinuitySnapshot | null;
  chain: ProviderChainRef | null;
}): void {
  const s = als.getStore();
  if (!s) return;
  s.continuity = {
    studio: input.studio,
    chain: input.chain,
  };
}

/** Active ALS store or null — never invent an ephemeral store for mutations. */
export function getFrontierAlsStore(): FrontierStore | null {
  return als.getStore() ?? null;
}

function store(): FrontierStore {
  const s = als.getStore();
  if (!s) {
    throw new ProviderEmissionRefusedError(
      "ALS_CONTEXT_REQUIRED",
      "Provider frontier mutations require runWithProviderEmissionStore* (ephemeral emptyStore is forbidden)",
    );
  }
  return s;
}

/** Clear the required-campaign latch (end of script / campaign close). */
export function endRequiredCampaignLatch(): void {
  requiredCampaignLatch = null;
}

export function enableHttpMetaCaptureForTests(): void {
  store().captureHttpMeta = true;
}

export function newAttemptId(): string {
  return `att_${randomBytes(8).toString("hex")}`;
}

export function beginCampaignEnvelope(input: {
  campaignId?: string;
  /** @deprecated use maxHttpAttempts */
  maxAttempts?: number;
  maxHttpAttempts?: number;
  maxInputTokenCountAttempts?: number | null;
  maxInputTokens?: number | null;
  maxOutputTokens?: number | null;
  maxInputTokensPerRequest?: number | null;
  maxOutputTokensPerRequest?: number | null;
  maxHostedSearches?: number | null;
  maxDirectOpens?: number | null;
  /** Default true when any input token campaign limit is set. */
  requireNativeInputBound?: boolean;
  /** Optional non-transferable per-family HTTP caps (ML2 document intelligence). */
  familyHttpLimits?: Partial<Record<EmissionHttpFamily, number>> | null;
  required?: boolean;
}): CampaignEnvelope {
  const cur = store();
  const campaignId =
    input.campaignId?.trim() || `camp_${randomBytes(6).toString("hex")}`;
  // Cumulative invariant: same campaignId reuses prior counters — including
  // suspended state. SFIA_QUALIFY_MODE / STUDIO_LANE must never zero envelope.
  const existing = processCampaignRegistry.get(campaignId);
  if (existing) {
    cur.campaign = existing;
    if (existing.required && !existing.suspended) {
      requiredCampaignLatch = { campaignId: existing.campaignId, active: true };
    } else if (existing.suspended && requiredCampaignLatch?.campaignId === campaignId) {
      requiredCampaignLatch.active = false;
    }
    persistCampaignEnvelope(existing);
    return existing;
  }
  // Process restart: restore full cumulative counters for this campaignId.
  const restored = restoreCampaignEnvelopeAfterRestart(campaignId);
  if (restored) {
    cur.campaign = restored;
    if (restored.required && !restored.suspended) {
      requiredCampaignLatch = { campaignId: restored.campaignId, active: true };
    } else if (restored.suspended) {
      requiredCampaignLatch = { campaignId: restored.campaignId, active: false };
    }
    return restored;
  }
  const maxHttp = Math.max(
    0,
    Math.floor(input.maxHttpAttempts ?? input.maxAttempts ?? 0),
  );
  const hasInputLimit =
    input.maxInputTokens != null || input.maxInputTokensPerRequest != null;
  const requireNative =
    input.requireNativeInputBound ?? hasInputLimit;
  const campaign: CampaignEnvelope = {
    campaignId,
    required: input.required !== false,
    maxHttpAttempts: maxHttp,
    maxInputTokenCountAttempts:
      input.maxInputTokenCountAttempts == null
        ? requireNative
          ? Math.max(1, maxHttp * 2)
          : null
        : Math.max(0, Math.floor(input.maxInputTokenCountAttempts)),
    maxInputTokens:
      input.maxInputTokens == null ? null : Math.max(0, Math.floor(input.maxInputTokens)),
    maxOutputTokens:
      input.maxOutputTokens == null
        ? null
        : Math.max(0, Math.floor(input.maxOutputTokens)),
    maxInputTokensPerRequest:
      input.maxInputTokensPerRequest == null
        ? null
        : Math.max(0, Math.floor(input.maxInputTokensPerRequest)),
    maxOutputTokensPerRequest:
      input.maxOutputTokensPerRequest == null
        ? null
        : Math.max(0, Math.floor(input.maxOutputTokensPerRequest)),
    maxHostedSearches:
      input.maxHostedSearches == null
        ? null
        : Math.max(0, Math.floor(input.maxHostedSearches)),
    maxDirectOpens:
      input.maxDirectOpens == null
        ? null
        : Math.max(0, Math.floor(input.maxDirectOpens)),
    requireNativeInputBound: requireNative,
    familyHttp: (() => {
      const raw = input.familyHttpLimits;
      if (!raw) return null;
      const out: Partial<Record<EmissionHttpFamily, FamilyHttpBudget>> = {};
      for (const [k, v] of Object.entries(raw)) {
        if (v == null) continue;
        out[k as EmissionHttpFamily] = {
          maxHttpAttempts: Math.max(0, Math.floor(v)),
          reserved: 0,
          committed: 0,
          released: 0,
        };
      }
      return Object.keys(out).length > 0 ? out : null;
    })(),
    httpAttemptsReserved: 0,
    httpAttemptsCommitted: 0,
    httpAttemptsReleased: 0,
    inputTokenCountAttemptsReserved: 0,
    inputTokenCountAttemptsCommitted: 0,
    inputTokenCountAttemptsReleased: 0,
    inputTokensReserved: 0,
    inputTokensCommitted: 0,
    outputTokensReserved: 0,
    outputTokensCommitted: 0,
    hostedSearchesCommitted: 0,
    hostedSearchesMeasured: null,
    hostedSearchMeasureStatus: "NONE",
    hostedSearchMeasureLimits: [],
    directOpensCommitted: 0,
    suspended: false,
    suspendReason: null,
  };
  processCampaignRegistry.set(campaignId, campaign);
  persistCampaignEnvelope(campaign);
  cur.campaign = campaign;
  if (campaign.required) {
    requiredCampaignLatch = { campaignId: campaign.campaignId, active: true };
  }
  return campaign;
}

/**
 * Attach G-LIVE-API / G-WEB-PUBLIC envelope from process env (qualify DEV only).
 * Operational Studio without these flags keeps unlimited-by-campaign behavior.
 * Returns null when no LIVE campaign is configured.
 */
export function attachConfiguredLiveCampaignFromEnv(
  env: NodeJS.ProcessEnv = process.env,
): CampaignEnvelope | null {
  const gate =
    (env.SFIA_G_LIVE_API || "").trim() === "1" ||
    (env.SFIA_G_WEB_PUBLIC || "").trim() === "1";
  if (!gate) return null;
  if ((env.STUDIO_LANE || "").trim().toUpperCase() !== "DEV") {
    throw new ProviderEmissionRefusedError(
      "CAMPAIGN_REQUIRED_MISSING",
      "LIVE campaign gates are DEV-only",
    );
  }
  const web = (env.SFIA_G_WEB_PUBLIC || "").trim() === "1";
  const campaignId =
    (env.SFIA_LIVE_CAMPAIGN_ID || "").trim() ||
    (web ? "g-web-public-20261126" : "g-live-api-20261126");
  const num = (k: string, fallback: number): number => {
    const raw = Number((env[k] || "").trim());
    return Number.isFinite(raw) && raw >= 0 ? Math.floor(raw) : fallback;
  };
  // LIVE attach always requires native input bound — env=0 is an inoperative escape.
  const nativeEnv = (env.SFIA_LIVE_REQUIRE_NATIVE_INPUT_BOUND || "1").trim();
  if (nativeEnv === "0") {
    throw new ProviderEmissionRefusedError(
      "NATIVE_INPUT_BOUND_REQUIRED",
      "SFIA_LIVE_REQUIRE_NATIVE_INPUT_BOUND=0 is refused for LIVE campaign attach",
    );
  }
  const maxHttp = num("SFIA_LIVE_MAX_HTTP_ATTEMPTS", web ? 12 : 12);
  return beginCampaignEnvelope({
    campaignId,
    required: true,
    requireNativeInputBound: true,
    maxHttpAttempts: maxHttp,
    maxInputTokenCountAttempts: num(
      "SFIA_LIVE_MAX_INPUT_TOKEN_COUNT_ATTEMPTS",
      // Tool-heavy Nora turns can count once per SDK attempt; keep headroom.
      Math.max(48, maxHttp * 4),
    ),
    maxInputTokens: num("SFIA_LIVE_MAX_INPUT_TOKENS", web ? 500_000 : 600_000),
    maxOutputTokens: num("SFIA_LIVE_MAX_OUTPUT_TOKENS", web ? 100_000 : 60_000),
    maxInputTokensPerRequest: num("SFIA_LIVE_MAX_INPUT_TOKENS_PER_REQ", 100_000),
    maxOutputTokensPerRequest: num("SFIA_LIVE_MAX_OUTPUT_TOKENS_PER_REQ", 10_000),
    maxHostedSearches: web
      ? num("SFIA_LIVE_MAX_HOSTED_SEARCHES", 5)
      : null,
    maxDirectOpens: web ? num("SFIA_LIVE_MAX_DIRECT_OPENS", 10) : null,
  });
}

/** End process-level LIVE campaign (qualify close / test reset). */
export function endProcessCampaign(campaignId?: string): void {
  if (campaignId) {
    processCampaignRegistry.delete(campaignId);
    const persisted = readLiveCampaignStateFile();
    if (persisted?.campaignId === campaignId) {
      deleteLiveCampaignStateFile();
    }
    if (requiredCampaignLatch?.campaignId === campaignId) {
      requiredCampaignLatch = null;
    }
    const s = getFrontierAlsStore();
    if (s?.campaign?.campaignId === campaignId) s.campaign = null;
    return;
  }
  processCampaignRegistry.clear();
  deleteLiveCampaignStateFile();
  requiredCampaignLatch = null;
  const s = getFrontierAlsStore();
  if (s) s.campaign = null;
}

export function getActiveCampaignEnvelope(): CampaignEnvelope | null {
  return getFrontierAlsStore()?.campaign ?? null;
}

export function suspendCampaignEnvelope(reason: string): void {
  const c = store().campaign;
  if (!c) return;
  c.suspended = true;
  c.suspendReason = reason.slice(0, 200);
  if (requiredCampaignLatch?.campaignId === c.campaignId) {
    requiredCampaignLatch.active = false;
  }
  persistCampaignEnvelope(c);
}

export function campaignHttpSlotsRemaining(
  c: CampaignEnvelope | null = getFrontierAlsStore()?.campaign ?? null,
): number {
  if (!c) return Number.POSITIVE_INFINITY;
  if (c.suspended) return 0;
  return Math.max(0, c.maxHttpAttempts - c.httpAttemptsReserved);
}

/** @deprecated alias — HTTP slots remaining */
export function campaignSlotsRemaining(
  c: CampaignEnvelope | null = store().campaign,
): number {
  return campaignHttpSlotsRemaining(c);
}

function parseJsonBody(body: BodyInit | null | undefined): Record<string, unknown> | null {
  if (body == null) return null;
  if (typeof body === "string") {
    try {
      return JSON.parse(body) as Record<string, unknown>;
    } catch {
      return null;
    }
  }
  return null;
}

/**
 * Optional local hint only — never a provider-native guarantee.
 * Prefer {@link resolveNativeOrDemonstrableInputBound} for campaign envelopes.
 */
function demonstrableInputTokenBound(
  body: Record<string, unknown> | null,
): number | null {
  if (!body) return null;
  const nativeHint = Number(
    (body as { sfia_native_input_tokens?: unknown }).sfia_native_input_tokens ?? 0,
  );
  if (Number.isFinite(nativeHint) && nativeHint > 0) return Math.floor(nativeHint);
  const inputHint = Number(
    (body as { sfia_estimated_input_tokens?: unknown }).sfia_estimated_input_tokens ??
      0,
  );
  if (Number.isFinite(inputHint) && inputHint > 0) return Math.floor(inputHint);
  return null;
}

/**
 * Conservative body-size indication — NOT a strict envelope guarantee.
 * Retained for diagnostics / operational hints only.
 */
export function conservativeBodyTokenEstimate(
  body: Record<string, unknown> | null,
): number | null {
  if (!body) return null;
  let serialized: string;
  try {
    serialized = JSON.stringify(body);
  } catch {
    return null;
  }
  if (!serialized || serialized === "{}" || serialized === "null") return null;
  const len = serialized.length;
  if (len <= 0) return null;
  return Math.ceil(len / 3);
}

/** Fields accepted by openai@7.50 `responses.inputTokens.count` / InputTokenCountParams. */
const INPUT_TOKEN_COUNT_KEYS = [
  "conversation",
  "input",
  "instructions",
  "model",
  "parallel_tool_calls",
  "personality",
  "previous_response_id",
  "reasoning",
  "text",
  "tool_choice",
  "tools",
  "truncation",
] as const;

/**
 * Transform a Responses create body into the supported input_tokens count payload.
 * Drops unsupported fields (e.g. max_output_tokens, max_tool_calls, stream).
 */
export function buildInputTokenCountPayload(
  body: Record<string, unknown> | null,
): Record<string, unknown> | null {
  if (!body) return null;
  const out: Record<string, unknown> = {};
  for (const key of INPUT_TOKEN_COUNT_KEYS) {
    if (Object.prototype.hasOwnProperty.call(body, key) && body[key] !== undefined) {
      out[key] = body[key];
    }
  }
  if (Object.keys(out).length === 0) return null;
  return out;
}

/** Stable fingerprint of the count-relevant payload (must match emission context). */
export function inputCountPayloadFingerprint(
  body: Record<string, unknown> | null,
): string | null {
  const payload = buildInputTokenCountPayload(body);
  if (!payload) return null;
  let serialized: string;
  try {
    serialized = JSON.stringify(payload);
  } catch {
    return null;
  }
  return createHash("sha256").update(serialized, "utf8").digest("hex").slice(0, 32);
}

export function isResponsesInputTokensCountUrl(url: string): boolean {
  try {
    const u = new URL(url);
    if (!isOpenAiApiUrl(url)) return false;
    const path = u.pathname.replace(/\/+$/, "");
    return (
      path === "/v1/responses/input_tokens" ||
      path.endsWith("/responses/input_tokens")
    );
  } catch {
    return false;
  }
}

export function isResponsesCreateUrl(url: string): boolean {
  try {
    const u = new URL(url);
    if (!isOpenAiApiUrl(url)) return false;
    const path = u.pathname.replace(/\/+$/, "");
    return path === "/v1/responses" || path.endsWith("/responses");
  } catch {
    return false;
  }
}

/** Exact OpenAI path → emission family (no approximate matching). */
export function classifyOpenAiHttpFamily(url: string): EmissionHttpFamily {
  try {
    const u = new URL(url);
    if (!isOpenAiApiUrl(url)) return "other";
    const path = u.pathname.replace(/\/+$/, "");
    if (
      path === "/v1/responses" ||
      path.endsWith("/responses") ||
      path === "/v1/responses/input_tokens" ||
      path.endsWith("/responses/input_tokens")
    ) {
      return "responses";
    }
    if (path === "/v1/decisions" || path.endsWith("/decisions")) {
      return "decisions";
    }
    if (path === "/v1/embeddings" || path.endsWith("/embeddings")) {
      return "embeddings";
    }
    if (
      path === "/v1/vector_stores" ||
      path.startsWith("/v1/vector_stores/") ||
      path.includes("/vector_stores/")
    ) {
      return "vector_stores";
    }
    if (
      path === "/v1/files" ||
      path.startsWith("/v1/files/") ||
      path.includes("/files/")
    ) {
      return "files";
    }
    return "other";
  } catch {
    return "other";
  }
}

export function emissionKindForHttpFamily(
  family: EmissionHttpFamily,
): EmissionAttemptKind {
  switch (family) {
    case "responses":
      return "http.responses";
    case "decisions":
      return "http.decisions";
    case "embeddings":
      return "http.embeddings";
    case "vector_stores":
      return "http.vector_stores";
    case "files":
      return "http.files";
    default:
      return "http.other";
  }
}

export function familyFromEmissionKind(
  kind: EmissionAttemptKind,
): EmissionHttpFamily {
  switch (kind) {
    case "http.responses":
    case "http.input_tokens_count":
      return "responses";
    case "http.decisions":
      return "decisions";
    case "http.embeddings":
      return "embeddings";
    case "http.vector_stores":
      return "vector_stores";
    case "http.files":
      return "files";
    default:
      return "other";
  }
}

function deriveInputTokensCountUrl(responsesUrl: string): string {
  try {
    const u = new URL(responsesUrl);
    const path = u.pathname.replace(/\/+$/, "");
    if (path.endsWith("/responses")) {
      u.pathname = `${path}/input_tokens`;
    } else {
      u.pathname = "/v1/responses/input_tokens";
    }
    u.search = "";
    u.hash = "";
    return u.toString();
  } catch {
    return "https://api.openai.com/v1/responses/input_tokens";
  }
}

/**
 * Resolve input reservation for a campaign:
 * - native ALS count matching fingerprint → kind "native"
 * - body sfia_native_input_tokens → kind "native"
 * - body sfia_estimated_input_tokens only when native not required → "demonstrable"
 * - never body-length estimate as a strict campaign guarantee
 */
function resolveCampaignInputReservation(
  body: Record<string, unknown> | null,
  campaign: CampaignEnvelope,
  alsNative: FrontierStore["nativeInputCount"],
): { tokens: number; kind: InputBoundKind } | { tokens: null; kind: null; reason: string } {
  const fingerprint = inputCountPayloadFingerprint(body);
  if (
    alsNative &&
    fingerprint &&
    alsNative.fingerprint === fingerprint &&
    Number.isFinite(alsNative.inputTokens) &&
    alsNative.inputTokens > 0
  ) {
    return { tokens: Math.floor(alsNative.inputTokens), kind: "native" };
  }
  if (body) {
    const nativeHint = Number(
      (body as { sfia_native_input_tokens?: unknown }).sfia_native_input_tokens ?? 0,
    );
    const bodyFp = String(
      (body as { sfia_input_count_fingerprint?: unknown }).sfia_input_count_fingerprint ??
        "",
    ).trim();
    if (
      Number.isFinite(nativeHint) &&
      nativeHint > 0 &&
      (!fingerprint || !bodyFp || bodyFp === fingerprint)
    ) {
      return { tokens: Math.floor(nativeHint), kind: "native" };
    }
  }
  if (campaign.requireNativeInputBound) {
    return {
      tokens: null,
      kind: null,
      reason:
        "INPUT_UNBOUNDED — campaign requires provider-native input_tokens count before Responses emission",
    };
  }
  const demo = demonstrableInputTokenBound(body);
  if (demo != null) {
    return { tokens: demo, kind: "demonstrable" };
  }
  return {
    tokens: null,
    kind: null,
    reason:
      "INPUT_UNBOUNDED — campaign input limit set but no native or demonstrable input bound",
  };
}

/** Output bound from the actual emission parameter (max_output_tokens). */
function demonstrableOutputTokenBound(
  body: Record<string, unknown> | null,
): number | null {
  if (!body) return null;
  const maxOut = Number(body.max_output_tokens ?? body.max_tokens ?? 0);
  if (Number.isFinite(maxOut) && maxOut > 0) return Math.floor(maxOut);
  return null;
}

function modelFromBody(body: Record<string, unknown> | null): string | null {
  const m = body?.model;
  return typeof m === "string" && m.trim() ? m.trim() : null;
}

function effortFromBody(body: Record<string, unknown> | null): string | null {
  if (!body) return null;
  const reasoning = body.reasoning;
  if (reasoning && typeof reasoning === "object") {
    const effort = (reasoning as { effort?: unknown }).effort;
    if (typeof effort === "string" && effort.trim()) return effort.trim();
  }
  const top = body.reasoning_effort;
  if (typeof top === "string" && top.trim()) return top.trim();
  return null;
}

function bodyContainsHostedWebSearchTool(
  body: Record<string, unknown> | null,
): boolean {
  if (!body) return false;
  const tools = body.tools;
  if (Array.isArray(tools)) {
    for (const t of tools) {
      if (!t || typeof t !== "object") continue;
      const type = String((t as { type?: unknown }).type ?? "").trim();
      if (type === "web_search" || type === "web_search_preview") return true;
    }
  }
  const input = body.input;
  if (Array.isArray(input)) {
    for (const item of input) {
      if (!item || typeof item !== "object") continue;
      const type = String((item as { type?: unknown }).type ?? "").trim();
      if (type === "web_search" || type === "web_search_preview") return true;
    }
  }
  return false;
}

/**
 * Legacy marker — assumed 1 hosted search per Responses is NOT an opposable bound.
 * Prefer injected {@link max_tool_calls} as a built-in tool-call ceiling (still ≠ billed search units).
 */
export const HOSTED_SEARCH_PER_RESPONSE_ASSUMED_1 =
  "HOSTED_SEARCH_PER_RESPONSE_ASSUMED_1" as const;

export const HOSTED_BOUND_REQUIRES_MAX_TOOL_CALLS =
  "HOSTED_BOUND_REQUIRES_MAX_TOOL_CALLS" as const;

/**
 * Hosted / built-in tool-call reservation for campaign envelopes.
 * Uses body.max_tool_calls when present (provider-supported Responses field).
 * Without max_tool_calls, returns 0 and callers must fail-closed for web campaigns
 * rather than assuming 1 search ≡ 1 billed unit.
 */
function inferHostedSearchDeltaFromBody(
  body: Record<string, unknown> | null,
  campaign: CampaignEnvelope | null,
): number {
  if (!campaign || campaign.maxHostedSearches == null) return 0;
  if (!bodyContainsHostedWebSearchTool(body)) return 0;
  const maxToolCalls = Number(body?.max_tool_calls ?? 0);
  if (Number.isFinite(maxToolCalls) && maxToolCalls > 0) {
    return Math.floor(maxToolCalls);
  }
  // No ASSUMED_1 reservation — require explicit max_tool_calls injection.
  return 0;
}

/**
 * Inject max_tool_calls when a hosted web_search tool is present and the campaign
 * budgets hosted tool calls. Does not claim equality with billed search queries.
 */
export function injectMaxToolCallsForHostedCampaign(
  body: Record<string, unknown>,
  campaign: CampaignEnvelope | null,
  hostedBudgetForThisResponse = 1,
): Record<string, unknown> {
  if (!campaign || campaign.maxHostedSearches == null) return body;
  if (!bodyContainsHostedWebSearchTool(body)) return body;
  const existing = Number(body.max_tool_calls ?? 0);
  if (Number.isFinite(existing) && existing > 0) return body;
  const remaining = Math.max(
    0,
    campaign.maxHostedSearches - campaign.hostedSearchesCommitted,
  );
  const inject = Math.max(
    1,
    Math.min(hostedBudgetForThisResponse, remaining || hostedBudgetForThisResponse),
  );
  return { ...body, max_tool_calls: inject };
}

export type HttpAttemptSnapshot = {
  attemptId: string;
  state: HttpAttemptState;
  campaignId: string | null;
  modelHint: string | null;
  urlHost: string;
};

/** Read-only ALS view of HTTP attempts that reached commit or uncertain (no bodies). */
export function getHttpAttemptsSnapshot(): HttpAttemptSnapshot[] {
  const s = getFrontierAlsStore();
  if (!s) return [];
  const out: HttpAttemptSnapshot[] = [];
  for (const rec of s.attempts.values()) {
    if (rec.state !== "COMMITTED" && rec.state !== "UNCERTAIN") continue;
    out.push({
      attemptId: rec.attemptId,
      state: rec.state,
      campaignId: rec.campaignId,
      modelHint: rec.modelHint,
      urlHost: rec.urlHost,
    });
  }
  return out;
}

export type DirectOpenGuard =
  | { ok: true }
  | {
      ok: false;
      reasonCode:
        | "CAMPAIGN_ENVELOPE_EXHAUSTED"
        | "CAMPAIGN_SUSPENDED"
        | "ALS_CONTEXT_REQUIRED";
      reason: string;
    };

/**
 * Reserve one direct-open attempt before any network effect (success or failure).
 * Failed opens still consume the campaign slot — do not count only successes.
 */
export function assertDirectOpenAllowed(): DirectOpenGuard {
  const s = getFrontierAlsStore();
  if (!s?.campaign) return { ok: true };
  const campaign = s.campaign;
  if (campaign.suspended) {
    return {
      ok: false,
      reasonCode: "CAMPAIGN_SUSPENDED",
      reason: campaign.suspendReason ?? "CAMPAIGN_SUSPENDED",
    };
  }
  if (campaign.maxDirectOpens == null) return { ok: true };
  if (campaign.directOpensCommitted >= campaign.maxDirectOpens) {
    campaign.suspended = true;
    campaign.suspendReason = "CAMPAIGN_DIRECT_OPENS_EXHAUSTED";
    return {
      ok: false,
      reasonCode: "CAMPAIGN_ENVELOPE_EXHAUSTED",
      reason: `directOpensCommitted=${campaign.directOpensCommitted} max=${campaign.maxDirectOpens}`,
    };
  }
  // Count the attempt at reservation time (before egress), including later failures.
  campaign.directOpensCommitted += 1;
  return { ok: true };
}

/**
 * @deprecated Prefer assertDirectOpenAllowed() which already consumes the slot.
 * Kept as a no-op for call sites that still invoke it after a successful open.
 */
export function commitDirectOpen(): void {
  // Slot already reserved in assertDirectOpenAllowed — do not double-count.
}

/**
 * SDK invocation precheck — NOT an HTTP attempt.
 * Validates lane + model/effort admission before run().
 */
export function assertSdkInvocationAdmission(input: {
  kind: EmissionAttemptKind;
  modelId?: string | null;
  effort?: string | null;
  env?: NodeJS.ProcessEnv;
}): EmissionReservation {
  if (!als.getStore()) {
    return {
      ok: false,
      reasonCode: "ALS_CONTEXT_REQUIRED",
      reason: "SDK admission requires frontier ALS context",
    };
  }
  const env = input.env ?? process.env;
  const laneGuard = assertOpenAiKeyForLane(env);
  if (!laneGuard.ok) {
    return {
      ok: false,
      reasonCode: "LANE_GUARD_FAILED",
      reason: `${laneGuard.reasonCode}:${laneGuard.reason}`,
    };
  }
  const modelRaw = (input.modelId ?? "").trim();
  const effortRaw = (input.effort ?? "").trim();
  if (!modelRaw || !effortRaw) {
    return {
      ok: false,
      reasonCode: "INVALID_REQUEST",
      reason: "modelId and effort required for SDK admission (no silent default)",
    };
  }
  const admission = admitModelEffort(
    modelRaw as CognitiveModelId,
    effortRaw as CognitiveEffort,
    admissionModeFromEnv(env),
  );
  if (!admission.admitted) {
    return {
      ok: false,
      reasonCode: "MODEL_EFFORT_NOT_ADMITTED",
      reason: admission.reasonCode,
    };
  }
  const s = store();
  s.sdkInvocationsObserved += 1;
  s.effortHint = effortRaw;
  s.modelHint = modelRaw;
  return {
    ok: true,
    attemptId: newAttemptId(),
    campaignId: s.campaign?.campaignId ?? null,
    reservedSlots: 0,
    reservedInputTokens: 0,
    reservedOutputTokens: 0,
    keyFingerprint: laneGuard.keyFingerprint,
    lane: laneGuard.lane,
    layer: "sdk_invocation",
  };
}

/**
 * Reserve one HTTP emission attempt before network contact.
 * Prefer calling via createFrontierAwareFetch — do not count run() as HTTP.
 */
export function reserveHttpEmission(input: {
  kind?: EmissionAttemptKind;
  url: string;
  method?: string;
  body?: BodyInit | null;
  modelId?: string | null;
  effort?: string | null;
  /** Fixture-only: skip model admission (never for real provider contact). */
  skipModelAdmission?: boolean;
  env?: NodeJS.ProcessEnv;
  /** Hosted web_search tool call accounting (optional explicit). */
  hostedSearchDelta?: number;
}): EmissionReservation {
  if (!als.getStore()) {
    if (requiredCampaignLatch?.active) {
      return {
        ok: false,
        reasonCode: "CAMPAIGN_REQUIRED_MISSING",
        reason: `required campaign ${requiredCampaignLatch.campaignId} latch active but ALS absent`,
      };
    }
    return {
      ok: false,
      reasonCode: "ALS_CONTEXT_REQUIRED",
      reason: "HTTP reserve requires frontier ALS context",
    };
  }
  const env = input.env ?? process.env;
  const laneGuard = assertOpenAiKeyForLane(env);
  if (!laneGuard.ok) {
    return {
      ok: false,
      reasonCode: "LANE_GUARD_FAILED",
      reason: `${laneGuard.reasonCode}:${laneGuard.reason}`,
    };
  }

  const bodyJson = parseJsonBody(input.body ?? null);
  const modelFromPayload = modelFromBody(bodyJson);
  const model =
    (input.modelId ?? "").trim() || modelFromPayload || "";
  const effortFromPayload = effortFromBody(bodyJson);
  const effortFromInput = (input.effort ?? "").trim();
  const effortFromStore = (store().effortHint ?? "").trim();
  // Final payload effort wins; never invent medium/Terra.
  const effort = (effortFromPayload || effortFromInput || effortFromStore).trim();
  const modelHint = (store().modelHint ?? "").trim();
  if (modelFromPayload && modelHint && modelFromPayload !== modelHint) {
    return {
      ok: false,
      reasonCode: "MODEL_EFFORT_NOT_ADMITTED",
      reason: `HTTP payload model ${modelFromPayload} ≠ SDK-admitted ${modelHint}`,
    };
  }
  if (effortFromPayload && effortFromStore && effortFromPayload !== effortFromStore) {
    // Payload override must itself be admitted — do not silently keep the hint.
    const overrideAdmit = admitModelEffort(
      (model || modelHint) as CognitiveModelId,
      effortFromPayload as CognitiveEffort,
      admissionModeFromEnv(env),
    );
    if (!overrideAdmit.admitted) {
      return {
        ok: false,
        reasonCode: "MODEL_EFFORT_NOT_ADMITTED",
        reason: `payload effort ${effortFromPayload} not admitted (${overrideAdmit.reasonCode})`,
      };
    }
  }

  if (!input.skipModelAdmission) {
    if (!model) {
      return {
        ok: false,
        reasonCode: "INVALID_REQUEST",
        reason: "HTTP emission model unknown — refuse (no silent Terra default)",
      };
    }
    if (!effort) {
      return {
        ok: false,
        reasonCode: "INVALID_REQUEST",
        reason:
          "HTTP emission effort unknown — refuse (no silent medium default; admit via SDK first or pass effortHint)",
      };
    }
    const admission = admitModelEffort(
      model as CognitiveModelId,
      effort as CognitiveEffort,
      admissionModeFromEnv(env),
    );
    if (!admission.admitted) {
      return {
        ok: false,
        reasonCode: "MODEL_EFFORT_NOT_ADMITTED",
        reason: admission.reasonCode,
      };
    }
  }

  const campaign = store().campaign;
  if (!campaign) {
    // Required campaign latch active but ALS lost / wrong store → fail-closed.
    if (requiredCampaignLatch?.active) {
      return {
        ok: false,
        reasonCode: "CAMPAIGN_REQUIRED_MISSING",
        reason: `required campaign ${requiredCampaignLatch.campaignId} latch active but ALS campaign absent`,
      };
    }
    // Operational path without campaign: track attempt; token fields are estimates only.
    const attemptId = newAttemptId();
    const reservedInput = demonstrableInputTokenBound(bodyJson) ?? 0;
    const reservedOutput = demonstrableOutputTokenBound(bodyJson) ?? 0;
    store().attempts.set(attemptId, {
      attemptId,
      campaignId: null,
      state: "RESERVED",
      kind: input.kind ?? "http.responses",
      reservedSlots: 1,
      reservedInputTokens: reservedInput,
      reservedOutputTokens: reservedOutput,
      inputBoundKind: reservedInput > 0 ? "demonstrable" : null,
      urlHost: safeHost(input.url),
      modelHint: model || null,
      createdAtMs: Date.now(),
    });
    return {
      ok: true,
      attemptId,
      campaignId: null,
      reservedSlots: 1,
      reservedInputTokens: reservedInput,
      reservedOutputTokens: reservedOutput,
      keyFingerprint: laneGuard.keyFingerprint,
      lane: laneGuard.lane,
      layer: "http",
    };
  }

  if (campaign.required === false && campaign.maxHttpAttempts === 0) {
    // Explicit unlimited test campaign — still track.
  }

  if (campaign.suspended) {
    return {
      ok: false,
      reasonCode: "CAMPAIGN_SUSPENDED",
      reason: campaign.suspendReason ?? "CAMPAIGN_SUSPENDED",
    };
  }

  const emissionKind = input.kind ?? "http.responses";

  // Native input_tokens count — separate envelope; not a Responses generation.
  if (emissionKind === "http.input_tokens_count") {
    if (
      campaign.maxInputTokenCountAttempts != null &&
      campaign.inputTokenCountAttemptsReserved + 1 >
        campaign.maxInputTokenCountAttempts
    ) {
      campaign.suspended = true;
      campaign.suspendReason = "CAMPAIGN_INPUT_TOKEN_COUNT_ATTEMPTS_EXHAUSTED";
      persistCampaignEnvelope(campaign);
      return {
        ok: false,
        reasonCode: "CAMPAIGN_ENVELOPE_EXHAUSTED",
        reason: `inputTokenCountReserved=${campaign.inputTokenCountAttemptsReserved}+1 max=${campaign.maxInputTokenCountAttempts}`,
      };
    }
    campaign.inputTokenCountAttemptsReserved += 1;
    persistCampaignEnvelope(campaign);
    const attemptId = newAttemptId();
    store().attempts.set(attemptId, {
      attemptId,
      campaignId: campaign.campaignId,
      state: "RESERVED",
      kind: "http.input_tokens_count",
      reservedSlots: 1,
      reservedInputTokens: 0,
      reservedOutputTokens: 0,
      inputBoundKind: null,
      urlHost: safeHost(input.url),
      modelHint: model || null,
      createdAtMs: Date.now(),
    });
    return {
      ok: true,
      attemptId,
      campaignId: campaign.campaignId,
      reservedSlots: 1,
      reservedInputTokens: 0,
      reservedOutputTokens: 0,
      keyFingerprint: laneGuard.keyFingerprint,
      lane: laneGuard.lane,
      layer: "http",
    };
  }

  // Campaign token limits require an opposable reservation before contact.
  // Responses: provider-native input_tokens count (or explicit native hint) —
  // never campaign ceiling and never body-length estimate as a strict guarantee.
  // Decisions/embeddings/files/VS: no Responses native count — demonstrable
  // payload bounds (sfia_estimated_input_tokens) + family HTTP caps.
  // Output still may use per-request ceiling for reservation and wire injection.
  const family = familyFromEmissionKind(emissionKind);
  const isResponsesGeneration = emissionKind === "http.responses";
  let reservedInput: number | null = null;
  let inputBoundKind: InputBoundKind = null;
  let reservedOutput = demonstrableOutputTokenBound(bodyJson);

  if (
    isResponsesGeneration &&
    (campaign.maxInputTokens != null ||
      campaign.maxInputTokensPerRequest != null)
  ) {
    const resolved = resolveCampaignInputReservation(
      bodyJson,
      campaign,
      als.getStore()?.nativeInputCount ?? null,
    );
    if (resolved.tokens == null) {
      return {
        ok: false,
        reasonCode: "INPUT_UNBOUNDED",
        reason: resolved.reason,
      };
    }
    reservedInput = resolved.tokens;
    inputBoundKind = resolved.kind;
  } else {
    reservedInput = demonstrableInputTokenBound(bodyJson);
    if (reservedInput != null) {
      inputBoundKind =
        bodyJson &&
        Number(
          (bodyJson as { sfia_native_input_tokens?: unknown })
            .sfia_native_input_tokens ?? 0,
        ) > 0
          ? "native"
          : "demonstrable";
    }
    if (
      !isResponsesGeneration &&
      (campaign.maxInputTokens != null ||
        campaign.maxInputTokensPerRequest != null) &&
      reservedInput == null
    ) {
      return {
        ok: false,
        reasonCode: "INPUT_UNBOUNDED",
        reason: `family=${family} requires demonstrable sfia_estimated_input_tokens (no Responses native count)`,
      };
    }
  }

  // Hosted web campaign: require max_tool_calls on the wire — no ASSUMED_1.
  if (
    campaign.maxHostedSearches != null &&
    bodyContainsHostedWebSearchTool(bodyJson)
  ) {
    const maxToolCalls = Number(bodyJson?.max_tool_calls ?? 0);
    if (!Number.isFinite(maxToolCalls) || maxToolCalls <= 0) {
      return {
        ok: false,
        reasonCode: "CAMPAIGN_ENVELOPE_EXHAUSTED",
        reason: HOSTED_BOUND_REQUIRES_MAX_TOOL_CALLS,
      };
    }
  }
  if (
    reservedOutput == null &&
    (campaign.maxOutputTokens != null ||
      campaign.maxOutputTokensPerRequest != null)
  ) {
    if (campaign.maxOutputTokensPerRequest != null) {
      reservedOutput = campaign.maxOutputTokensPerRequest;
    } else {
      return {
        ok: false,
        reasonCode: "CAMPAIGN_ENVELOPE_EXHAUSTED",
        reason:
          "OUTPUT_UNBOUNDED — campaign output limit set but no per-request ceiling or max_output_tokens",
      };
    }
  }

  const inTok = reservedInput ?? 0;
  const outTok = reservedOutput ?? 0;

  if (
    campaign.maxInputTokensPerRequest != null &&
    inTok > campaign.maxInputTokensPerRequest
  ) {
    campaign.suspended = true;
    campaign.suspendReason = "INPUT_TOKENS_PER_REQUEST_EXCEEDED";
    persistCampaignEnvelope(campaign);
    return {
      ok: false,
      reasonCode: "CAMPAIGN_ENVELOPE_EXHAUSTED",
      reason: `inputPerReq=${inTok} max=${campaign.maxInputTokensPerRequest}`,
    };
  }
  if (
    campaign.maxOutputTokensPerRequest != null &&
    outTok > campaign.maxOutputTokensPerRequest
  ) {
    campaign.suspended = true;
    campaign.suspendReason = "OUTPUT_TOKENS_PER_REQUEST_EXCEEDED";
    persistCampaignEnvelope(campaign);
    return {
      ok: false,
      reasonCode: "CAMPAIGN_ENVELOPE_EXHAUSTED",
      reason: `outputPerReq=${outTok} max=${campaign.maxOutputTokensPerRequest}`,
    };
  }
  if (campaign.httpAttemptsReserved + 1 > campaign.maxHttpAttempts) {
    campaign.suspended = true;
    campaign.suspendReason = "CAMPAIGN_HTTP_ATTEMPTS_EXHAUSTED";
    persistCampaignEnvelope(campaign);
    return {
      ok: false,
      reasonCode: "CAMPAIGN_ENVELOPE_EXHAUSTED",
      reason: `httpReserved=${campaign.httpAttemptsReserved}+1 max=${campaign.maxHttpAttempts}`,
    };
  }
  const familyBudget = campaign.familyHttp?.[family];
  if (familyBudget && familyBudget.reserved + 1 > familyBudget.maxHttpAttempts) {
    // Family exhausted — do not silently borrow another family's budget.
    campaign.suspended = true;
    campaign.suspendReason = `CAMPAIGN_FAMILY_HTTP_EXHAUSTED:${family}`;
    persistCampaignEnvelope(campaign);
    return {
      ok: false,
      reasonCode: "CAMPAIGN_ENVELOPE_EXHAUSTED",
      reason: `family=${family} reserved=${familyBudget.reserved}+1 max=${familyBudget.maxHttpAttempts}`,
    };
  }
  if (
    campaign.maxInputTokens != null &&
    campaign.inputTokensReserved + inTok > campaign.maxInputTokens
  ) {
    campaign.suspended = true;
    campaign.suspendReason = "CAMPAIGN_INPUT_TOKENS_EXHAUSTED";
    persistCampaignEnvelope(campaign);
    return {
      ok: false,
      reasonCode: "CAMPAIGN_ENVELOPE_EXHAUSTED",
      reason: `inputReserved=${campaign.inputTokensReserved}+${inTok} max=${campaign.maxInputTokens}`,
    };
  }
  if (
    campaign.maxOutputTokens != null &&
    campaign.outputTokensReserved + outTok > campaign.maxOutputTokens
  ) {
    campaign.suspended = true;
    campaign.suspendReason = "CAMPAIGN_OUTPUT_TOKENS_EXHAUSTED";
    persistCampaignEnvelope(campaign);
    return {
      ok: false,
      reasonCode: "CAMPAIGN_ENVELOPE_EXHAUSTED",
      reason: `outputReserved=${campaign.outputTokensReserved}+${outTok} max=${campaign.maxOutputTokens}`,
    };
  }
  const hostedDelta = Math.max(
    Math.max(0, Math.floor(input.hostedSearchDelta ?? 0)),
    inferHostedSearchDeltaFromBody(bodyJson, campaign),
  );
  if (
    hostedDelta > 0 &&
    campaign.maxHostedSearches != null &&
    campaign.hostedSearchesCommitted + hostedDelta > campaign.maxHostedSearches
  ) {
    campaign.suspended = true;
    campaign.suspendReason = "CAMPAIGN_HOSTED_SEARCHES_EXHAUSTED";
    persistCampaignEnvelope(campaign);
    return {
      ok: false,
      reasonCode: "CAMPAIGN_ENVELOPE_EXHAUSTED",
      reason: `hosted=${campaign.hostedSearchesCommitted}+${hostedDelta} max=${campaign.maxHostedSearches}`,
    };
  }

  campaign.httpAttemptsReserved += 1;
  if (familyBudget) {
    familyBudget.reserved += 1;
  }
  campaign.inputTokensReserved += inTok;
  campaign.outputTokensReserved += outTok;
  persistCampaignEnvelope(campaign);

  const attemptId = newAttemptId();
  store().attempts.set(attemptId, {
    attemptId,
    campaignId: campaign.campaignId,
    state: "RESERVED",
    kind: emissionKind,
    reservedSlots: 1,
    reservedInputTokens: inTok,
    reservedOutputTokens: outTok,
    inputBoundKind,
    urlHost: safeHost(input.url),
    modelHint: model || null,
    createdAtMs: Date.now(),
  });

  return {
    ok: true,
    attemptId,
    campaignId: campaign.campaignId,
    reservedSlots: 1,
    reservedInputTokens: inTok,
    reservedOutputTokens: outTok,
    keyFingerprint: laneGuard.keyFingerprint,
    lane: laneGuard.lane,
    layer: "http",
  };
}

/**
 * Backward-compatible name used by prior wiring.
 * Defaults to HTTP reservation semantics when slots>0; SDK admission when slots===0.
 */
export function reserveProviderEmission(input: {
  kind: EmissionAttemptKind;
  modelId?: string | null;
  effort?: string | null;
  slots?: number;
  skipModelAdmission?: boolean;
  env?: NodeJS.ProcessEnv;
  url?: string;
  body?: BodyInit | null;
}): EmissionReservation {
  const slots = Math.max(0, Math.floor(input.slots ?? 1));
  if (slots === 0) {
    return assertSdkInvocationAdmission({
      kind: input.kind,
      modelId: input.modelId,
      effort: input.effort,
      env: input.env,
    });
  }
  return reserveHttpEmission({
    kind: input.kind,
    url: input.url ?? "https://api.openai.com/v1/responses",
    body: input.body ?? null,
    modelId: input.modelId,
    effort: input.effort,
    skipModelAdmission: input.skipModelAdmission,
    env: input.env,
  });
}

export function commitProviderEmission(reservation: {
  attemptId: string;
  reservedSlots: number;
  reservedInputTokens?: number;
  reservedOutputTokens?: number;
  measuredInputTokens?: number | null;
  measuredOutputTokens?: number | null;
  hostedSearchDelta?: number;
}): void {
  const s = store();
  const rec = s.attempts.get(reservation.attemptId);
  if (!rec) {
    // Legacy path without attempt registry entry (sdk_invocation).
    s.httpEmissionsObserved += Math.max(0, reservation.reservedSlots);
    return;
  }
  if (rec.state === "COMMITTED" || rec.state === "UNCERTAIN") {
    return; // idempotent
  }
  if (rec.state === "RELEASED") {
    return;
  }
  rec.state = "COMMITTED";
  const campaign = s.campaign;
  if (campaign && rec.campaignId === campaign.campaignId) {
    if (rec.kind === "http.input_tokens_count") {
      campaign.inputTokenCountAttemptsCommitted += 1;
      // Counting is not Responses generation — do not attribute generation tokens/cost.
    } else {
      campaign.httpAttemptsCommitted += 1;
      const fam = familyFromEmissionKind(rec.kind);
      const famBudget = campaign.familyHttp?.[fam];
      if (famBudget) famBudget.committed += 1;
      const inTok =
        reservation.measuredInputTokens != null &&
        Number.isFinite(reservation.measuredInputTokens)
          ? Math.max(0, Math.floor(reservation.measuredInputTokens))
          : rec.reservedInputTokens;
      const outTok =
        reservation.measuredOutputTokens != null &&
        Number.isFinite(reservation.measuredOutputTokens)
          ? Math.max(0, Math.floor(reservation.measuredOutputTokens))
          : rec.reservedOutputTokens;
      campaign.inputTokensCommitted += inTok;
      campaign.outputTokensCommitted += outTok;
      // Reconcile reservation overshoot: keep reserved >= committed.
      campaign.inputTokensReserved = Math.max(
        campaign.inputTokensReserved,
        campaign.inputTokensCommitted,
      );
      campaign.outputTokensReserved = Math.max(
        campaign.outputTokensReserved,
        campaign.outputTokensCommitted,
      );
      const hosted = Math.max(0, Math.floor(reservation.hostedSearchDelta ?? 0));
      if (hosted > 0) campaign.hostedSearchesCommitted += hosted;
    }
    persistCampaignEnvelope(campaign);
  }
  s.httpEmissionsObserved += 1;
}

export function releaseProviderEmission(reservation: {
  attemptId: string;
  reservedSlots: number;
  contacted: boolean;
}): void {
  const s = store();
  const rec = s.attempts.get(reservation.attemptId);
  if (reservation.contacted) {
    commitProviderEmission(reservation);
    return;
  }
  if (!rec) return;
  if (rec.state !== "RESERVED") return; // cannot release consumed
  rec.state = "RELEASED";
  const campaign = s.campaign;
  if (campaign && rec.campaignId === campaign.campaignId) {
    if (rec.kind === "http.input_tokens_count") {
      campaign.inputTokenCountAttemptsReserved = Math.max(
        0,
        campaign.inputTokenCountAttemptsReserved - 1,
      );
      campaign.inputTokenCountAttemptsReleased += 1;
    } else {
      campaign.httpAttemptsReserved = Math.max(
        0,
        campaign.httpAttemptsReserved - 1,
      );
      campaign.httpAttemptsReleased += 1;
      const fam = familyFromEmissionKind(rec.kind);
      const famBudget = campaign.familyHttp?.[fam];
      if (famBudget) {
        famBudget.reserved = Math.max(0, famBudget.reserved - 1);
        famBudget.released += 1;
      }
      campaign.inputTokensReserved = Math.max(
        0,
        campaign.inputTokensReserved - rec.reservedInputTokens,
      );
      campaign.outputTokensReserved = Math.max(
        0,
        campaign.outputTokensReserved - rec.reservedOutputTokens,
      );
    }
    persistCampaignEnvelope(campaign);
  }
}

export function markProviderEmissionUncertain(reservation: {
  attemptId: string;
}): void {
  const s = store();
  const rec = s.attempts.get(reservation.attemptId);
  if (!rec) return;
  if (rec.state === "COMMITTED" || rec.state === "UNCERTAIN") return;
  if (rec.state === "RELEASED") return;
  rec.state = "UNCERTAIN";
  const campaign = s.campaign;
  if (campaign && rec.campaignId === campaign.campaignId) {
    // Unknown consumption ≠ free — keep reservation, count as observed emission.
    // A3 UNKNOWN/PARTIAL must not zero counters.
    if (rec.kind === "http.input_tokens_count") {
      campaign.inputTokenCountAttemptsCommitted += 1;
    } else {
      campaign.httpAttemptsCommitted += 1;
      const fam = familyFromEmissionKind(rec.kind);
      const famBudget = campaign.familyHttp?.[fam];
      if (famBudget) famBudget.committed += 1;
    }
    persistCampaignEnvelope(campaign);
  }
  s.httpEmissionsObserved += 1;
}

export function getHttpAttempt(attemptId: string): HttpAttemptRecord | null {
  return getFrontierAlsStore()?.attempts.get(attemptId) ?? null;
}

export function getEmissionsObservedForTests(): number {
  return getFrontierAlsStore()?.httpEmissionsObserved ?? 0;
}

export function getSdkInvocationsObservedForTests(): number {
  return getFrontierAlsStore()?.sdkInvocationsObserved ?? 0;
}

export function getHttpBodiesObservedForTests(): FrontierStore["httpBodiesObserved"] {
  return getFrontierAlsStore()?.httpBodiesObserved.slice() ?? [];
}

export function __resetProviderEmissionFrontierForTests(): void {
  const s = getFrontierAlsStore();
  if (s) {
    s.campaign = null;
    s.attempts.clear();
    s.httpEmissionsObserved = 0;
    s.sdkInvocationsObserved = 0;
    s.httpBodiesObserved = [];
    s.effortHint = null;
    s.modelHint = null;
    s.captureHttpMeta = false;
    s.nativeInputCount = null;
  }
  processCampaignRegistry.clear();
  deleteLiveCampaignStateFile();
  requiredCampaignLatch = null;
  installedClientKeyFp = null;
}

/** Nest-safe: reuse existing ALS store when already inside one. */
export function runWithProviderEmissionStore<T>(fn: () => T): T {
  if (als.getStore()) return fn();
  return als.run(emptyStore(), fn);
}

export async function runWithProviderEmissionStoreAsync<T>(
  fn: () => Promise<T>,
): Promise<T> {
  if (als.getStore()) return fn();
  return als.run(emptyStore(), fn);
}

export function requireCampaignContextOrThrow(): void {
  const c = store().campaign;
  if (!c || c.required) {
    if (!c) {
      throw new ProviderEmissionRefusedError(
        "CAMPAIGN_REQUIRED_MISSING",
        "HTTP emission requires an active campaign envelope",
      );
    }
  }
}

export class ProviderEmissionRefusedError extends Error {
  readonly reasonCode: string;
  constructor(reasonCode: string, message: string) {
    super(`${reasonCode}: ${message}`);
    this.name = "ProviderEmissionRefusedError";
    this.reasonCode = reasonCode;
  }
}

function safeHost(url: string): string {
  try {
    return new URL(url).host;
  } catch {
    return "invalid-url";
  }
}

function isOpenAiApiUrl(url: string): boolean {
  try {
    const u = new URL(url);
    const host = u.hostname.toLowerCase();
    // Exact destinations only — no approximate hostname matching.
    return (
      host === "api.openai.com" ||
      host === "api.openai.azure.com" ||
      /^[a-z0-9-]+\.openai\.azure\.com$/.test(host)
    );
  } catch {
    return false;
  }
}

/**
 * Custom fetch that intercepts OpenAI HTTP emissions for campaign control.
 * Substitutable in tests by wrapping a fake transport.
 *
 * Distinguishes:
 * - POST …/responses/input_tokens → count attempt (not generation)
 * - POST …/responses → generation (may native-count first when campaign requires it)
 */
export function createFrontierAwareFetch(
  baseFetch: typeof fetch = globalThis.fetch.bind(globalThis),
  opts?: {
    /** When true, refuse OpenAI HTTP if no ALS campaign is active. */
    requireCampaign?: boolean;
  },
): typeof fetch {
  const requireCampaignOpt = opts?.requireCampaign === true;

  const frontierFetch = (async (
    input: RequestInfo | URL,
    init?: RequestInit,
  ): Promise<Response> => {
    const url =
      typeof input === "string"
        ? input
        : input instanceof URL
          ? input.toString()
          : input.url;
    if (!isOpenAiApiUrl(url)) {
      return baseFetch(input, init);
    }

    const alsStore = als.getStore();
    if (!alsStore) {
      throw new ProviderEmissionRefusedError(
        "ALS_CONTEXT_REQUIRED",
        "OpenAI HTTP refused — no frontier ALS context (wrap LIVE paths)",
      );
    }
    // Lost required campaign must never degrade to unlimited operational.
    if (requiredCampaignLatch?.active && !alsStore.campaign) {
      throw new ProviderEmissionRefusedError(
        "CAMPAIGN_REQUIRED_MISSING",
        `required campaign ${requiredCampaignLatch.campaignId} latch active but ALS campaign absent`,
      );
    }
    if (
      (requireCampaignOpt || requiredCampaignLatch?.active) &&
      !alsStore.campaign
    ) {
      throw new ProviderEmissionRefusedError(
        "CAMPAIGN_REQUIRED_MISSING",
        "OpenAI HTTP refused — campaign envelope required",
      );
    }

    const method = (init?.method ?? "POST").toUpperCase();
    let body = init?.body ?? null;
    let bodyJson = parseJsonBody(body);
    const campaign = alsStore.campaign;

    // —— Native input_tokens count path (no recursion into Responses generation) ——
    if (isResponsesInputTokensCountUrl(url)) {
      const countPayload = buildInputTokenCountPayload(bodyJson) ?? bodyJson;
      const fingerprint = inputCountPayloadFingerprint(countPayload);
      body = countPayload ? JSON.stringify(countPayload) : body;
      bodyJson = countPayload;
      const reservation = reserveHttpEmission({
        kind: "http.input_tokens_count",
        url,
        method,
        body,
        effort: alsStore.effortHint,
        skipModelAdmission: true,
      });
      if (!reservation.ok) {
        throw new ProviderEmissionRefusedError(
          reservation.reasonCode,
          reservation.reason,
        );
      }
      if (alsStore.captureHttpMeta) {
        alsStore.httpBodiesObserved.push({
          attemptId: reservation.attemptId,
          url,
          method,
          model: modelFromBody(bodyJson),
          effort: effortFromBody(bodyJson),
          maxOutputTokens: null,
          maxToolCalls: null,
          kind: "http.input_tokens_count",
        });
      }
      const nextInit =
        body === init?.body || init == null ? init : { ...init, body };
      try {
        const res = await baseFetch(input, nextInit);
        let parsed: { input_tokens?: unknown; object?: unknown } | null = null;
        try {
          parsed = (await res.clone().json()) as {
            input_tokens?: unknown;
            object?: unknown;
          };
        } catch {
          parsed = null;
        }
        const tokens = Number(parsed?.input_tokens ?? NaN);
        if (
          res.ok &&
          fingerprint &&
          Number.isFinite(tokens) &&
          tokens > 0 &&
          parsed?.object === "response.input_tokens"
        ) {
          alsStore.nativeInputCount = {
            fingerprint,
            inputTokens: Math.floor(tokens),
            countedAtMs: Date.now(),
          };
        } else if (!res.ok || !Number.isFinite(tokens) || tokens <= 0) {
          // Malformed / failed count — clear stale native binding for this fingerprint.
          if (alsStore.nativeInputCount?.fingerprint === fingerprint) {
            alsStore.nativeInputCount = null;
          }
        }
        commitProviderEmission({
          attemptId: reservation.attemptId,
          reservedSlots: reservation.reservedSlots,
        });
        return res;
      } catch (e) {
        markProviderEmissionUncertain({ attemptId: reservation.attemptId });
        throw e;
      }
    }

    // —— Responses generation path ——
    // Inject max_tool_calls for hosted web campaigns before counting / reserve.
    if (bodyJson && campaign) {
      bodyJson = injectMaxToolCallsForHostedCampaign(bodyJson, campaign, 1);
      body = JSON.stringify(bodyJson);
    }

    // When a strict campaign requires a native input bound, count first via the
    // same frontier (count URL path above) — never via an unbounded side channel.
    if (
      campaign?.requireNativeInputBound &&
      (campaign.maxInputTokens != null ||
        campaign.maxInputTokensPerRequest != null) &&
      isResponsesCreateUrl(url) &&
      method === "POST" &&
      classifyOpenAiHttpFamily(url) === "responses"
    ) {
      const fingerprint = inputCountPayloadFingerprint(bodyJson);
      const haveNative =
        fingerprint &&
        alsStore.nativeInputCount?.fingerprint === fingerprint &&
        alsStore.nativeInputCount.inputTokens > 0;
      const bodyNative = Number(
        (bodyJson as { sfia_native_input_tokens?: unknown } | null)
          ?.sfia_native_input_tokens ?? 0,
      );
      if (!haveNative && !(Number.isFinite(bodyNative) && bodyNative > 0)) {
        const countPayload = buildInputTokenCountPayload(bodyJson);
        if (!countPayload) {
          throw new ProviderEmissionRefusedError(
            "INPUT_UNBOUNDED",
            "INPUT_UNBOUNDED — cannot build input_tokens count payload from Responses body",
          );
        }
        const countUrl = deriveInputTokensCountUrl(url);
        const countRes = await frontierFetch(countUrl, {
          method: "POST",
          headers: init?.headers,
          body: JSON.stringify(countPayload),
        });
        if (!countRes.ok) {
          throw new ProviderEmissionRefusedError(
            "INPUT_UNBOUNDED",
            `INPUT_UNBOUNDED — native input_tokens count HTTP ${countRes.status}`,
          );
        }
        if (
          !alsStore.nativeInputCount ||
          alsStore.nativeInputCount.fingerprint !== fingerprint
        ) {
          throw new ProviderEmissionRefusedError(
            "INPUT_UNBOUNDED",
            "INPUT_UNBOUNDED — native input_tokens count missing or fingerprint mismatch after count",
          );
        }
      }
    }

    // Inject opposable max_output_tokens onto the real provider payload when the
    // campaign sets a per-request ceiling and the SDK omitted the field.
    // Safe after count: max_output_tokens is not part of InputTokenCountParams.
    if (
      campaign?.maxOutputTokensPerRequest != null &&
      bodyJson &&
      demonstrableOutputTokenBound(bodyJson) == null
    ) {
      bodyJson = {
        ...bodyJson,
        max_output_tokens: campaign.maxOutputTokensPerRequest,
      };
      body = JSON.stringify(bodyJson);
    }

    const httpFamily = classifyOpenAiHttpFamily(url);
    const emissionKind = emissionKindForHttpFamily(httpFamily);

    // Strip Studio-only hints before wire emission.
    if (bodyJson) {
      const {
        sfia_estimated_input_tokens: _est,
        sfia_native_input_tokens: _nat,
        sfia_input_count_fingerprint: _fp,
        ...wireBody
      } = bodyJson as Record<string, unknown> & {
        sfia_estimated_input_tokens?: unknown;
        sfia_native_input_tokens?: unknown;
        sfia_input_count_fingerprint?: unknown;
      };
      if (httpFamily === "responses") {
        // Continuity: attach previous_response_id only when mode=native and plan allows.
        // Default OFF — D3 remains SoT; prior tokens remain billable when attached.
        const continuityMode = resolveProviderContinuityMode();
        const plan = planProviderContinuity({
          mode: continuityMode,
          studio: alsStore.continuity.studio ?? {
            workId: "",
            acquisFingerprint: null,
            sourceVersions: [],
            checkpointId: null,
            budgets: {
              tokensConsumed: 0,
              tokensBudget: null,
              restitutionsRemaining: null,
            },
            rightsOk: false,
          },
          chain: alsStore.continuity.chain,
          lane: (process.env.STUDIO_LANE ?? "UNKNOWN").trim().toUpperCase(),
        });
        bodyJson = applyContinuityToResponsesBody(wireBody, plan);
      } else {
        bodyJson = wireBody;
      }
      body = JSON.stringify(bodyJson);
    }

    const hostedSearchDelta =
      httpFamily === "responses"
        ? inferHostedSearchDeltaFromBody(bodyJson, campaign)
        : 0;
    const reservation = reserveHttpEmission({
      kind: emissionKind,
      url,
      method,
      body,
      effort: alsStore.effortHint,
      // Decisions/embeddings/VS/files are not Nora model×effort admissions.
      skipModelAdmission: httpFamily !== "responses",
      hostedSearchDelta,
    });
    if (!reservation.ok) {
      throw new ProviderEmissionRefusedError(
        reservation.reasonCode,
        reservation.reason,
      );
    }

    if (alsStore.captureHttpMeta) {
      alsStore.httpBodiesObserved.push({
        attemptId: reservation.attemptId,
        url,
        method,
        model: modelFromBody(bodyJson),
        effort: effortFromBody(bodyJson),
        maxOutputTokens: demonstrableOutputTokenBound(bodyJson),
        maxToolCalls: Number(bodyJson?.max_tool_calls ?? 0) || null,
        kind: emissionKind,
      });
    }

    const nextInit =
      body === init?.body || init == null ? init : { ...init, body };
    try {
      const res = await baseFetch(input, nextInit);
      // A-posteriori tool_usage.web_search.num_requests when present.
      // max_tool_calls remains the a-priori built-in call bound — never a billable guarantee.
      let measuredHostedDelta = 0;
      let hostedStatus: "MEASURED" | "UNKNOWN" | "RESERVED_ONLY" =
        hostedSearchDelta > 0 ? "RESERVED_ONLY" : "UNKNOWN";
      let hostedLimits: string[] = [];
      let responseId: string | null = null;
      if (res.ok && isResponsesCreateUrl(url)) {
        const ct = (res.headers.get("content-type") ?? "").toLowerCase();
        const isEventStream =
          ct.includes("text/event-stream") || ct.includes("application/x-ndjson");
        if (isEventStream) {
          // Do not consume an unbounded SSE body for observability.
          hostedLimits = ["STREAM_USAGE_UNKNOWN"];
          hostedStatus = "UNKNOWN";
          if (campaign) {
            campaign.hostedSearchMeasureStatus = mergeHostedSearchMeasureStatus(
              campaign.hostedSearchMeasureStatus,
              "UNKNOWN",
            );
            campaign.hostedSearchMeasureLimits = [
              ...new Set([
                ...campaign.hostedSearchMeasureLimits,
                "STREAM_USAGE_UNKNOWN",
              ]),
            ];
          }
        } else {
          try {
            const parsed = (await res.clone().json()) as unknown;
            const native = extractResponseNativeUsage(parsed);
            responseId = native.responseId;
            const reconciled = reconcileHostedSearchUsage({
              reservedMaxToolCalls: hostedSearchDelta,
              observed: native.hostedWebSearch,
              alreadyCommitted: campaign?.hostedSearchesCommitted ?? 0,
              maxHostedSearches: campaign?.maxHostedSearches ?? null,
            });
            measuredHostedDelta = reconciled.commitDelta;
            hostedStatus = reconciled.status;
            hostedLimits = reconciled.limits;
            if (campaign) {
              // Aggregate status must not promote UNKNOWN→MEASURED when prior
              // attempts remain unknown. Mixed history ⇒ PARTIAL.
              campaign.hostedSearchMeasureStatus = mergeHostedSearchMeasureStatus(
                campaign.hostedSearchMeasureStatus,
                reconciled.status === "MEASURED" ? "MEASURED" : "UNKNOWN",
              );
              campaign.hostedSearchMeasureLimits = [
                ...new Set([
                  ...campaign.hostedSearchMeasureLimits,
                  ...reconciled.limits,
                ]),
              ];
              if (
                reconciled.status === "MEASURED" &&
                reconciled.measured != null
              ) {
                campaign.hostedSearchesMeasured =
                  (campaign.hostedSearchesMeasured ?? 0) + reconciled.measured;
              }
              if (reconciled.suspend) {
                campaign.suspended = true;
                campaign.suspendReason =
                  reconciled.suspendReason ??
                  "CAMPAIGN_HOSTED_SEARCHES_EXHAUSTED";
              }
            }
          } catch {
            hostedLimits = ["RESPONSE_BODY_PARSE_FAILED"];
            hostedStatus = "UNKNOWN";
            if (campaign) {
              campaign.hostedSearchMeasureStatus = mergeHostedSearchMeasureStatus(
                campaign.hostedSearchMeasureStatus,
                "UNKNOWN",
              );
              campaign.hostedSearchMeasureLimits = [
                ...new Set([
                  ...campaign.hostedSearchMeasureLimits,
                  "RESPONSE_BODY_PARSE_FAILED",
                ]),
              ];
            }
          }
        }
      }
      // Envelope pressure: max_tool_calls bound is consumed even when billable
      // num_requests is UNKNOWN — never claim ASSUMED_1 as a billable guarantee.
      // FinOps billable figure lives in hostedSearchesMeasured when MEASURED.
      const envelopeHostedDelta =
        hostedStatus === "MEASURED"
          ? measuredHostedDelta
          : hostedSearchDelta > 0
            ? hostedSearchDelta
            : 0;
      commitProviderEmission({
        attemptId: reservation.attemptId,
        reservedSlots: reservation.reservedSlots,
        reservedInputTokens: reservation.reservedInputTokens,
        reservedOutputTokens: reservation.reservedOutputTokens,
        hostedSearchDelta: envelopeHostedDelta,
      });
      if (alsStore.captureHttpMeta || alsStore.responseUsageObserved) {
        alsStore.responseUsageObserved.push({
          attemptId: reservation.attemptId,
          responseId,
          hostedNumRequests:
            hostedStatus === "MEASURED" ? measuredHostedDelta : null,
          hostedStatus,
          limits: hostedLimits,
        });
      }
      return res;
    } catch (e) {
      markProviderEmissionUncertain({ attemptId: reservation.attemptId });
      throw e;
    }
  }) as typeof fetch;

  return frontierFetch;
}

/**
 * Install Agents SDK OpenAI client whose fetch is frontier-aware.
 * Reinstall when key fingerprint changes or forceReinstall is set (tests).
 */
export async function ensureFrontierOpenAIClientInstalled(input?: {
  requireCampaign?: boolean;
  maxRetries?: number;
  forceReinstall?: boolean;
  /** Substituted transport for deterministic SDK tests — never for production LIVE. */
  fetch?: typeof fetch;
}): Promise<{ keyFingerprint: string | null }> {
  const key = process.env.OPENAI_API_KEY?.trim() ?? "";
  const fp = key
    ? createHash("sha256").update(key, "utf8").digest("hex").slice(0, 16)
    : null;
  if (
    clientInstallPromise &&
    !input?.forceReinstall &&
    fp &&
    installedClientKeyFp === fp &&
    !input?.fetch
  ) {
    await clientInstallPromise;
    return { keyFingerprint: installedClientKeyFp };
  }
  clientInstallPromise = (async () => {
    const [{ setDefaultOpenAIClient }, OpenAIMod] = await Promise.all([
      import("@openai/agents"),
      import("openai"),
    ]);
    const OpenAI = OpenAIMod.default;
    if (!key) {
      installedClientKeyFp = null;
      return;
    }
    const baseFetch =
      input?.fetch ?? globalThis.fetch.bind(globalThis);
    const client = new OpenAI({
      apiKey: key,
      fetch: createFrontierAwareFetch(baseFetch, {
        requireCampaign: input?.requireCampaign === true,
      }),
      maxRetries: input?.maxRetries ?? 2,
    });
    setDefaultOpenAIClient(client as never);
    installedClientKeyFp = fp;
  })();
  try {
    await clientInstallPromise;
    return { keyFingerprint: installedClientKeyFp };
  } catch (e) {
    clientInstallPromise = null;
    installedClientKeyFp = null;
    throw e;
  }
}

export function getInstalledFrontierClientKeyFp(): string | null {
  return installedClientKeyFp;
}

/** Test helper — reset install latch. */
export function __resetFrontierOpenAIClientInstallForTests(): void {
  clientInstallPromise = null;
  installedClientKeyFp = null;
}

export function canonicalPayloadFingerprint(fields: Record<string, string>): string {
  const keys = Object.keys(fields).sort();
  const blob = keys.map((k) => `${k}=${fields[k]}`).join("\n");
  return createHash("sha256").update(blob, "utf8").digest("hex").slice(0, 32);
}
