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

export type HttpAttemptRecord = {
  attemptId: string;
  campaignId: string | null;
  state: HttpAttemptState;
  kind: EmissionAttemptKind;
  reservedSlots: number;
  reservedInputTokens: number;
  reservedOutputTokens: number;
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
        | "INVALID_REQUEST";
      reason: string;
    };

type FrontierStore = {
  campaign: CampaignEnvelope | null;
  attempts: Map<string, HttpAttemptRecord>;
  /** Independent oracle: HTTP attempts that reached commit/uncertain. */
  httpEmissionsObserved: number;
  /** SDK run() prechecks that passed (not HTTP). */
  sdkInvocationsObserved: number;
  /** Captured request bodies for substituted-transport tests. */
  httpBodiesObserved: Array<{
    attemptId: string;
    url: string;
    method: string;
    bodyPreview: string;
  }>;
  /** Effort admitted at SDK layer — reused for HTTP body admission (no silent medium). */
  effortHint: string | null;
};

const als = new AsyncLocalStorage<FrontierStore>();

let clientInstallPromise: Promise<void> | null = null;

/**
 * Process-level latch: once a required campaign starts, OpenAI HTTP outside an
 * ALS store that still holds that campaign fails closed (ALS loss ≠ unlimited).
 * Cleared only by explicit suspend/end or test reset — not by ALS exit alone.
 */
let requiredCampaignLatch: {
  campaignId: string;
  active: boolean;
} | null = null;

function emptyStore(): FrontierStore {
  return {
    campaign: null,
    attempts: new Map(),
    httpEmissionsObserved: 0,
    sdkInvocationsObserved: 0,
    httpBodiesObserved: [],
    effortHint: null,
  };
}

function store(): FrontierStore {
  return als.getStore() ?? emptyStore();
}

/** Clear the required-campaign latch (end of script / campaign close). */
export function endRequiredCampaignLatch(): void {
  requiredCampaignLatch = null;
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
  const maxHttp = Math.max(
    0,
    Math.floor(input.maxHttpAttempts ?? input.maxAttempts ?? 0),
  );
  const campaign: CampaignEnvelope = {
    campaignId: input.campaignId ?? `camp_${randomBytes(6).toString("hex")}`,
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
  const cur = store();
  if (!als.getStore()) {
    throw new ProviderEmissionRefusedError(
      "CAMPAIGN_REQUIRED_MISSING",
      "beginCampaignEnvelope requires an active ALS store (runWithProviderEmissionStore*)",
    );
  }
  cur.campaign = campaign;
  if (campaign.required) {
    requiredCampaignLatch = { campaignId: campaign.campaignId, active: true };
  }
  return campaign;
}

export function getActiveCampaignEnvelope(): CampaignEnvelope | null {
  return store().campaign;
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
  c: CampaignEnvelope | null = store().campaign,
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

function estimateInputTokensFromBody(body: Record<string, unknown> | null): number {
  if (!body) return 8_000; // conservative unknown
  const maxOut = Number(body.max_output_tokens ?? body.max_tokens ?? 0);
  // Prefer explicit conservative bound if present; else fixed conservative reserve.
  const inputHint = Number(
    (body as { sfia_estimated_input_tokens?: unknown }).sfia_estimated_input_tokens ??
      0,
  );
  if (Number.isFinite(inputHint) && inputHint > 0) return Math.floor(inputHint);
  // Without reliable estimate, reserve a conservative chunk so envelopes still bind.
  void maxOut;
  return 50_000;
}

function estimateOutputTokensFromBody(body: Record<string, unknown> | null): number {
  if (!body) return 4_000;
  const maxOut = Number(body.max_output_tokens ?? body.max_tokens ?? 0);
  if (Number.isFinite(maxOut) && maxOut > 0) return Math.floor(maxOut);
  return 4_000;
}

function modelFromBody(body: Record<string, unknown> | null): string | null {
  const m = body?.model;
  return typeof m === "string" && m.trim() ? m.trim() : null;
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
  const model =
    (input.modelId ?? "").trim() || modelFromBody(bodyJson) || "";
  const effortFromInput = (input.effort ?? "").trim();
  const effortFromStore = (store().effortHint ?? "").trim();
  // Never invent medium/Terra — only reuse explicit input or SDK-admitted hint.
  const effort = effortFromInput || effortFromStore;

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
    // Operational path without campaign: allow HTTP but still track attempt locally.
    const attemptId = newAttemptId();
    const reservedInput = estimateInputTokensFromBody(bodyJson);
    const reservedOutput = estimateOutputTokensFromBody(bodyJson);
    store().attempts.set(attemptId, {
      attemptId,
      campaignId: null,
      state: "RESERVED",
      kind: input.kind ?? "http.responses",
      reservedSlots: 1,
      reservedInputTokens: reservedInput,
      reservedOutputTokens: reservedOutput,
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

  const reservedInput = estimateInputTokensFromBody(bodyJson);
  const reservedOutput = estimateOutputTokensFromBody(bodyJson);

  if (
    campaign.maxInputTokensPerRequest != null &&
    reservedInput > campaign.maxInputTokensPerRequest
  ) {
    campaign.suspended = true;
    campaign.suspendReason = "INPUT_TOKENS_PER_REQUEST_EXCEEDED";
    return {
      ok: false,
      reasonCode: "CAMPAIGN_ENVELOPE_EXHAUSTED",
      reason: `inputPerReq=${reservedInput} max=${campaign.maxInputTokensPerRequest}`,
    };
  }
  if (
    campaign.maxOutputTokensPerRequest != null &&
    reservedOutput > campaign.maxOutputTokensPerRequest
  ) {
    campaign.suspended = true;
    campaign.suspendReason = "OUTPUT_TOKENS_PER_REQUEST_EXCEEDED";
    return {
      ok: false,
      reasonCode: "CAMPAIGN_ENVELOPE_EXHAUSTED",
      reason: `outputPerReq=${reservedOutput} max=${campaign.maxOutputTokensPerRequest}`,
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
    campaign.inputTokensReserved + reservedInput > campaign.maxInputTokens
  ) {
    campaign.suspended = true;
    campaign.suspendReason = "CAMPAIGN_INPUT_TOKENS_EXHAUSTED";
    return {
      ok: false,
      reasonCode: "CAMPAIGN_ENVELOPE_EXHAUSTED",
      reason: `inputReserved=${campaign.inputTokensReserved}+${reservedInput} max=${campaign.maxInputTokens}`,
    };
  }
  if (
    campaign.maxOutputTokens != null &&
    campaign.outputTokensReserved + reservedOutput > campaign.maxOutputTokens
  ) {
    campaign.suspended = true;
    campaign.suspendReason = "CAMPAIGN_OUTPUT_TOKENS_EXHAUSTED";
    return {
      ok: false,
      reasonCode: "CAMPAIGN_ENVELOPE_EXHAUSTED",
      reason: `outputReserved=${campaign.outputTokensReserved}+${reservedOutput} max=${campaign.maxOutputTokens}`,
    };
  }
  const hostedDelta = Math.max(0, Math.floor(input.hostedSearchDelta ?? 0));
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
  campaign.inputTokensReserved += reservedInput;
  campaign.outputTokensReserved += reservedOutput;

  const attemptId = newAttemptId();
  store().attempts.set(attemptId, {
    attemptId,
    campaignId: campaign.campaignId,
    state: "RESERVED",
    kind: input.kind ?? "http.responses",
    reservedSlots: 1,
    reservedInputTokens: reservedInput,
    reservedOutputTokens: reservedOutput,
    urlHost: safeHost(input.url),
    modelHint: model || null,
    createdAtMs: Date.now(),
  });

  return {
    ok: true,
    attemptId,
    campaignId: campaign.campaignId,
    reservedSlots: 1,
    reservedInputTokens: reservedInput,
    reservedOutputTokens: reservedOutput,
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
  return store().attempts.get(attemptId) ?? null;
}

export function getEmissionsObservedForTests(): number {
  return store().httpEmissionsObserved;
}

export function getSdkInvocationsObservedForTests(): number {
  return store().sdkInvocationsObserved;
}

export function getHttpBodiesObservedForTests(): FrontierStore["httpBodiesObserved"] {
  return store().httpBodiesObserved.slice();
}

export function __resetProviderEmissionFrontierForTests(): void {
  const s = store();
  s.campaign = null;
  s.attempts.clear();
  s.httpEmissionsObserved = 0;
  s.sdkInvocationsObserved = 0;
  s.httpBodiesObserved = [];
  s.effortHint = null;
  requiredCampaignLatch = null;
}

export function runWithProviderEmissionStore<T>(fn: () => T): T {
  return als.run(emptyStore(), fn);
}

export async function runWithProviderEmissionStoreAsync<T>(
  fn: () => Promise<T>,
): Promise<T> {
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
    return (
      host === "api.openai.com" ||
      host.endsWith(".openai.com") ||
      host === "api.openai.azure.com" ||
      host.includes("openai.azure.com")
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
    effortHint?: string | null;
  },
): typeof fetch {
  const requireCampaign = opts?.requireCampaign === true;
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

    if (requireCampaign && !store().campaign) {
      throw new ProviderEmissionRefusedError(
        "CAMPAIGN_REQUIRED_MISSING",
        "OpenAI HTTP refused — campaign envelope required",
      );
    }

    const method = (init?.method ?? "POST").toUpperCase();
    const body = init?.body ?? null;
    // Propagate explicit effort hint into ALS for this emission when provided.
    if (opts?.effortHint && als.getStore()) {
      store().effortHint = opts.effortHint;
    }
    const reservation = reserveHttpEmission({
      kind: "http.responses",
      url,
      method,
      body,
      effort: opts?.effortHint ?? store().effortHint,
      skipModelAdmission: false,
    });
    if (!reservation.ok) {
      throw new ProviderEmissionRefusedError(
        reservation.reasonCode,
        reservation.reason,
      );
    }

    const bodyPreview =
      typeof body === "string" ? body.slice(0, 400) : body ? "[non-string-body]" : "";
    store().httpBodiesObserved.push({
      attemptId: reservation.attemptId,
      url,
      method,
      bodyPreview,
    });

    try {
      const res = await baseFetch(input, init);
      // Contact established (response received). Usage may be unknown.
      commitProviderEmission({
        attemptId: reservation.attemptId,
        reservedSlots: reservation.reservedSlots,
        reservedInputTokens: reservation.reservedInputTokens,
        reservedOutputTokens: reservation.reservedOutputTokens,
      });
      return res;
    } catch (e) {
      markProviderEmissionUncertain({ attemptId: reservation.attemptId });
      throw e;
    }
  }) as typeof fetch;
}

/**
 * Install a process-wide Agents SDK OpenAI client whose fetch is frontier-aware.
 * Idempotent. Call before any LIVE run().
 */
export async function ensureFrontierOpenAIClientInstalled(input?: {
  requireCampaign?: boolean;
  effortHint?: string | null;
  maxRetries?: number;
}): Promise<void> {
  if (clientInstallPromise) return clientInstallPromise;
  clientInstallPromise = (async () => {
    const [{ setDefaultOpenAIClient }, OpenAIMod] = await Promise.all([
      import("@openai/agents"),
      import("openai"),
    ]);
    const OpenAI = OpenAIMod.default;
    const key = process.env.OPENAI_API_KEY?.trim();
    if (!key) {
      // No key — leave default unset; LIVE paths already fail closed.
      return;
    }
    const client = new OpenAI({
      apiKey: key,
      fetch: createFrontierAwareFetch(globalThis.fetch.bind(globalThis), {
        requireCampaign: input?.requireCampaign === true,
        effortHint: input?.effortHint,
      }),
      // Retries still go through fetch and are counted as distinct HTTP attempts.
      maxRetries: input?.maxRetries ?? 2,
    });
    setDefaultOpenAIClient(client as never);
  })();
  try {
    await clientInstallPromise;
  } catch (e) {
    clientInstallPromise = null;
    throw e;
  }
}

/** Test helper — reset install latch. */
export function __resetFrontierOpenAIClientInstallForTests(): void {
  clientInstallPromise = null;
}

export function canonicalPayloadFingerprint(fields: Record<string, string>): string {
  const keys = Object.keys(fields).sort();
  const blob = keys.map((k) => `${k}=${fields[k]}`).join("\n");
  return createHash("sha256").update(blob, "utf8").digest("hex").slice(0, 32);
}
