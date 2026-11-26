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
  | "http.other"
  | "other";

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
  maxInputTokens: number | null;
  maxOutputTokens: number | null;
  maxInputTokensPerRequest: number | null;
  maxOutputTokensPerRequest: number | null;
  maxHostedSearches: number | null;
  maxDirectOpens: number | null;
  httpAttemptsReserved: number;
  httpAttemptsCommitted: number;
  httpAttemptsReleased: number;
  inputTokensReserved: number;
  inputTokensCommitted: number;
  outputTokensReserved: number;
  outputTokensCommitted: number;
  hostedSearchesCommitted: number;
  directOpensCommitted: number;
  suspended: boolean;
  suspendReason: string | null;
};

export type InputBoundKind = "demonstrable" | "estimate" | null;

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
  }>;
  /** Effort admitted at SDK layer — reused for HTTP body admission (no silent medium). */
  effortHint: string | null;
  /** Model admitted at SDK layer — compared to final HTTP payload. */
  modelHint: string | null;
  /** When true, record non-body metadata for substituted-transport oracles. */
  captureHttpMeta: boolean;
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

/**
 * Refuse when a prior process left campaign state for the same campaignId
 * (process restart must not auto-renew counters).
 */
export function invalidateCampaignOnProcessRestartCheck(
  campaignId: string,
): void {
  const persisted = readLiveCampaignStateFile();
  if (!persisted) return;
  if (persisted.campaignId !== campaignId) return;
  if (persisted.pid !== process.pid) {
    throw new ProviderEmissionRefusedError(
      "CAMPAIGN_INVALIDATED_RESTART",
      `campaign ${campaignId} was bound to pid ${persisted.pid}; current pid ${process.pid}`,
    );
  }
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
  maxInputTokens?: number | null;
  maxOutputTokens?: number | null;
  maxInputTokensPerRequest?: number | null;
  maxOutputTokensPerRequest?: number | null;
  maxHostedSearches?: number | null;
  maxDirectOpens?: number | null;
  required?: boolean;
}): CampaignEnvelope {
  const cur = store();
  const campaignId =
    input.campaignId?.trim() || `camp_${randomBytes(6).toString("hex")}`;
  const existing = processCampaignRegistry.get(campaignId);
  if (existing) {
    // Re-attach the same process counters across ALS request boundaries.
    cur.campaign = existing;
    if (existing.required && !existing.suspended) {
      requiredCampaignLatch = { campaignId: existing.campaignId, active: true };
    }
    return existing;
  }
  invalidateCampaignOnProcessRestartCheck(campaignId);
  const maxHttp = Math.max(
    0,
    Math.floor(input.maxHttpAttempts ?? input.maxAttempts ?? 0),
  );
  const campaign: CampaignEnvelope = {
    campaignId,
    required: input.required !== false,
    maxHttpAttempts: maxHttp,
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
    httpAttemptsReserved: 0,
    httpAttemptsCommitted: 0,
    httpAttemptsReleased: 0,
    inputTokensReserved: 0,
    inputTokensCommitted: 0,
    outputTokensReserved: 0,
    outputTokensCommitted: 0,
    hostedSearchesCommitted: 0,
    directOpensCommitted: 0,
    suspended: false,
    suspendReason: null,
  };
  processCampaignRegistry.set(campaignId, campaign);
  writeLiveCampaignStateEntry({
    campaignId,
    pid: process.pid,
    createdAtMs: Date.now(),
  });
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
  // §12.2 G-LIVE-API defaults; §12.3 G-WEB-PUBLIC when that gate is set.
  return beginCampaignEnvelope({
    campaignId,
    required: true,
    maxHttpAttempts: num("SFIA_LIVE_MAX_HTTP_ATTEMPTS", web ? 20 : 40),
    maxInputTokens: num("SFIA_LIVE_MAX_INPUT_TOKENS", web ? 500_000 : 2_000_000),
    maxOutputTokens: num("SFIA_LIVE_MAX_OUTPUT_TOKENS", web ? 100_000 : 200_000),
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
 * Demonstrable input bound — never a fake guarantee.
 * Returns null when only an estimate would be invented.
 */
function demonstrableInputTokenBound(
  body: Record<string, unknown> | null,
): number | null {
  if (!body) return null;
  const inputHint = Number(
    (body as { sfia_estimated_input_tokens?: unknown }).sfia_estimated_input_tokens ??
      0,
  );
  if (Number.isFinite(inputHint) && inputHint > 0) return Math.floor(inputHint);
  return null;
}

/**
 * Conservative reservation estimate from serialized body size — NOT a usage guarantee.
 * For campaign accounting only when no demonstrable sfia_estimated_input_tokens exists.
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

/** One assumed hosted search per Responses body carrying web_search tools. */
export const HOSTED_SEARCH_PER_RESPONSE_ASSUMED_1 =
  "HOSTED_SEARCH_PER_RESPONSE_ASSUMED_1" as const;

/**
 * Fail-closed hosted search accounting: reserve one hosted search per Responses
 * emission when OpenAI web_search tools appear (engine may run more — {@link HOSTED_SEARCH_PER_RESPONSE_ASSUMED_1}).
 */
function inferHostedSearchDeltaFromBody(
  body: Record<string, unknown> | null,
  campaign: CampaignEnvelope | null,
): number {
  if (!campaign || campaign.maxHostedSearches == null) return 0;
  if (!bodyContainsHostedWebSearchTool(body)) return 0;
  return 1;
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

  // Campaign token limits require an opposable reservation before contact.
  // Input: demonstrable sfia_estimated_input_tokens, else conservative body
  // estimate — never the per-request ceiling as a faux measured bound. Output
  // still may use per-request ceiling for reservation and wire injection.
  let reservedInput = demonstrableInputTokenBound(bodyJson);
  let inputBoundKind: InputBoundKind =
    reservedInput != null ? "demonstrable" : null;
  let reservedOutput = demonstrableOutputTokenBound(bodyJson);

  if (
    reservedInput == null &&
    (campaign.maxInputTokens != null || campaign.maxInputTokensPerRequest != null)
  ) {
    const estimate = conservativeBodyTokenEstimate(bodyJson);
    if (estimate != null) {
      reservedInput = estimate;
      inputBoundKind = "estimate";
    } else {
      return {
        ok: false,
        reasonCode: "INPUT_UNBOUNDED",
        reason:
          "INPUT_UNBOUNDED — campaign input limit set but no demonstrable bound or body estimate",
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
    return {
      ok: false,
      reasonCode: "CAMPAIGN_ENVELOPE_EXHAUSTED",
      reason: `outputPerReq=${outTok} max=${campaign.maxOutputTokensPerRequest}`,
    };
  }
  if (campaign.httpAttemptsReserved + 1 > campaign.maxHttpAttempts) {
    campaign.suspended = true;
    campaign.suspendReason = "CAMPAIGN_HTTP_ATTEMPTS_EXHAUSTED";
    return {
      ok: false,
      reasonCode: "CAMPAIGN_ENVELOPE_EXHAUSTED",
      reason: `httpReserved=${campaign.httpAttemptsReserved}+1 max=${campaign.maxHttpAttempts}`,
    };
  }
  if (
    campaign.maxInputTokens != null &&
    campaign.inputTokensReserved + inTok > campaign.maxInputTokens
  ) {
    campaign.suspended = true;
    campaign.suspendReason = "CAMPAIGN_INPUT_TOKENS_EXHAUSTED";
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
    return {
      ok: false,
      reasonCode: "CAMPAIGN_ENVELOPE_EXHAUSTED",
      reason: `hosted=${campaign.hostedSearchesCommitted}+${hostedDelta} max=${campaign.maxHostedSearches}`,
    };
  }

  campaign.httpAttemptsReserved += 1;
  campaign.inputTokensReserved += inTok;
  campaign.outputTokensReserved += outTok;

  const attemptId = newAttemptId();
  store().attempts.set(attemptId, {
    attemptId,
    campaignId: campaign.campaignId,
    state: "RESERVED",
    kind: input.kind ?? "http.responses",
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
    campaign.httpAttemptsCommitted += 1;
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
    campaign.httpAttemptsReserved = Math.max(0, campaign.httpAttemptsReserved - 1);
    campaign.httpAttemptsReleased += 1;
    campaign.inputTokensReserved = Math.max(
      0,
      campaign.inputTokensReserved - rec.reservedInputTokens,
    );
    campaign.outputTokensReserved = Math.max(
      0,
      campaign.outputTokensReserved - rec.reservedOutputTokens,
    );
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
    campaign.httpAttemptsCommitted += 1;
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
 */
export function createFrontierAwareFetch(
  baseFetch: typeof fetch = globalThis.fetch.bind(globalThis),
  opts?: {
    /** When true, refuse OpenAI HTTP if no ALS campaign is active. */
    requireCampaign?: boolean;
  },
): typeof fetch {
  const requireCampaignOpt = opts?.requireCampaign === true;
  return (async (input: RequestInfo | URL, init?: RequestInit) => {
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
    // Inject opposable max_output_tokens onto the real provider payload when the
    // campaign sets a per-request ceiling and the SDK omitted the field.
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
    const hostedSearchDelta = inferHostedSearchDeltaFromBody(
      bodyJson,
      campaign,
    );
    const reservation = reserveHttpEmission({
      kind: "http.responses",
      url,
      method,
      body,
      effort: alsStore.effortHint,
      skipModelAdmission: false,
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
      });
    }

    const nextInit =
      body === init?.body || init == null
        ? init
        : { ...init, body };
    try {
      const res = await baseFetch(input, nextInit);
      commitProviderEmission({
        attemptId: reservation.attemptId,
        reservedSlots: reservation.reservedSlots,
        reservedInputTokens: reservation.reservedInputTokens,
        reservedOutputTokens: reservation.reservedOutputTokens,
        hostedSearchDelta,
      });
      return res;
    } catch (e) {
      markProviderEmissionUncertain({ attemptId: reservation.attemptId });
      throw e;
    }
  }) as typeof fetch;
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
