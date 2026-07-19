/**
 * EXPERIMENTAL — POC SPIKE — NOT DEFAULT — NOT PRODUCTION.
 *
 * OpenAIRealSpikeAdapter — official OpenAI HTTPS Chat Completions (fetch).
 * Never uses ChatGPT app cookies/session. Never hardcodes API keys.
 * Live requires: enabled=true + SFIA_GPT_REAL_SPIKE=1 + SFIA_GPT_REAL_LIVE=1
 *   + OPENAI_API_KEY defined + OPENAI_MODEL explicit.
 * Max 2 live calls per process (qualification + verdict). No automatic retry.
 */

import { HarnessError } from "../types/contracts.js";
import type {
  ExecutionContractCandidate,
  GPTCallResult,
  GPTHttpErrorEvidence,
  GPTQualificationRequest,
  GPTResponseObservation,
  GPTUsageSummary,
  GPTVerdictRequest,
  VerdictCandidate,
} from "../types/gptContracts.js";
import { GPT_CONTRACT_SCHEMA_VERSION, QUALIFICATION_RESPONSE_FORMAT, VERDICT_RESPONSE_FORMAT } from "../types/gptContracts.js";
import type { GPTQualificationPort } from "./gptQualification.js";
import type { GPTVerdictPort } from "./gptVerdict.js";
import {
  parseStrictJson,
  validateExecutionContractCandidate,
  validateVerdictCandidate,
} from "../validation/gptOutputValidator.js";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

export const GPT_REAL_SPIKE_FLAG = "SFIA_GPT_REAL_SPIKE";
export const GPT_REAL_LIVE_FLAG = "SFIA_GPT_REAL_LIVE";

const OPENAI_CHAT_URL = "https://api.openai.com/v1/chat/completions";
const DEFAULT_TIMEOUT_MS = 30_000;
const MAX_LIVE_CALLS_PER_PROCESS = 2;
const CYCLE_CALL_BUDGET = 10;
const PHASE_VERDICT_CALL_BUDGET = 6;
const MAX_SANITIZED_MESSAGE = 400;
const MAX_CONTENT_PREVIEW = 500;
const DEFAULT_MAX_COMPLETION_TOKENS = 2048;
const ABSOLUTE_MAX_COMPLETION_TOKENS = 8192;

export const QUALIFICATION_SYSTEM_PROMPT = `Tu es un producteur de JSON strict. Tu ne décides pas.

Sortie OBLIGATOIRE:
- Un seul objet JSON valide
- Aucun texte avant ou après
- Aucune balise Markdown (\`\`\`)
- Aucun commentaire

Types STRICTS:
- proposedCycle ∈ ["Cycle 7","Cycle 8","Cycle 9","Cycle 13","DOC"]
- proposedProfile ∈ ["Light","Standard","Critical"]
- assumptions, observations, options, recommendations, stopConditions, allowedReadPaths, allowedWritePaths, deniedPaths, requestedActions, requiredMorrisGates, validatedDecisions : tableaux de STRINGS uniquement (pas d'objets)

Règles d'autorité:
- Morris est l'unique autorité de décision
- Git est la source de vérité
- validatedDecisions: vide ou uniquement les décisions déjà validées en entrée
- ne produis aucun GO ; ne consomme aucun gate
- requestedActions ⊆ allowlist d'entrée
- requiredMorrisGates doit inclure tous les gates fournis
- schemaVersion doit être exactement "${GPT_CONTRACT_SCHEMA_VERSION}"
- modelMetadata: { "provider":"openai-api", "mechanism":"openai-chat-completions-https", "model":"<model>", "experimental":true, "productionReadyClaimed":false }
- requestId et correlationId doivent matcher la requête
- contractHashCandidate: chaîne hex SHA-256 quelconque (64 hex) ou hash stable
- Aucune propriété inconnue

Champs obligatoires ExecutionContractCandidate:
schemaVersion, requestId, correlationId, proposedCycle, proposedProfile, profileJustification, objective, allowedReadPaths, allowedWritePaths, deniedPaths, requestedActions, stopConditions, requiredMorrisGates, assumptions, observations, options, recommendations, validatedDecisions, contractHashCandidate, modelMetadata.`;

export const VERDICT_SYSTEM_PROMPT = `Tu es un producteur de JSON strict. Tu ne décides pas.

Sortie OBLIGATOIRE:
- Un seul objet JSON valide
- Aucun texte avant ou après
- Aucune balise Markdown (\`\`\`)
- Aucun commentaire

Enums STRICTS (valeurs exactes uniquement):
- status ∈ ["OBSERVED","PARTIAL","INCONCLUSIVE","FAILED","READY_FOR_MORRIS_REVIEW"]
- proposedVerdict ∈ ["PASS_WITH_RESERVES","FAIL","INCONCLUSIVE","NEEDS_MORRIS_DECISION"]

Tableaux OBLIGATOIRES (toujours présents, type array de strings, [] si vide):
observations, provenElements, unprovenElements, risks, reserves, recommendations, decisionsRequiredFromMorris, forbiddenClaimsDetected

Règles:
- distingue prouvé / non prouvé / réserve
- ne déclare jamais merge, production, baseline ou GO
- decisionValidated, mergeAuthorized, goConsumed, baselinePromoted, productionReady absents ou false
- schemaVersion="${GPT_CONTRACT_SCHEMA_VERSION}"
- modelMetadata: { "provider":"openai-api", "mechanism":"openai-chat-completions-https", "model":"<model>", "experimental":true, "productionReadyClaimed":false }
- requestId et correlationId doivent matcher la requête
- Aucune propriété inconnue

Champs obligatoires VerdictCandidate:
schemaVersion, requestId, correlationId, status, observations, provenElements, unprovenElements, risks, reserves, recommendations, decisionsRequiredFromMorris, forbiddenClaimsDetected, proposedVerdict, modelMetadata.`;

export interface OpenAIRealSpikeOptions {
  enabled?: boolean;
  timeoutMs?: number;
  /** Injected for tests — defaults to global fetch. */
  fetchImpl?: typeof fetch;
  /** Override env lookup (tests). */
  env?: NodeJS.ProcessEnv;
  /** Completion budget; capped at 8192. */
  maxCompletionTokens?: number;
  /** Persistent phase/cycle call counter file (survives process relaunches). */
  cycleCounterPath?: string;
  /** Budget for cycleCounterPath (default historical 10; phase verdict uses 6). */
  cycleCallBudget?: number;
  /** Optional historical counter — incremented for audit, does not enforce phase budget. */
  historicalCounterPath?: string;
}

let liveCallCount = 0;

export function resetLiveCallCounterForTests(): void {
  liveCallCount = 0;
}

export function getLiveCallCountForTests(): number {
  return liveCallCount;
}

export function getCycleCallBudget(): number {
  return CYCLE_CALL_BUDGET;
}

export function readCycleCallCount(counterPath: string): number {
  try {
    if (!existsSync(counterPath)) return 0;
    const raw = JSON.parse(readFileSync(counterPath, "utf8")) as { count?: unknown };
    return typeof raw.count === "number" && raw.count >= 0 ? raw.count : 0;
  } catch {
    return 0;
  }
}

export function resetCycleCallCounter(counterPath: string): void {
  mkdirSync(path.dirname(counterPath), { recursive: true });
  writeFileSync(counterPath, JSON.stringify({ count: 0, updatedAt: new Date().toISOString() }, null, 2));
}

/** Atomically-ish increment; returns new count. Throws if budget exceeded before increment. */
export function reserveCycleCall(counterPath: string, budget: number = CYCLE_CALL_BUDGET): number {
  mkdirSync(path.dirname(counterPath), { recursive: true });
  const current = readCycleCallCount(counterPath);
  if (current >= budget) {
    throw new HarnessError(
      "GPT_CYCLE_CALL_CAP",
      `OpenAI call budget exhausted (${budget}) at ${counterPath}; no further live calls`,
    );
  }
  const next = current + 1;
  writeFileSync(
    counterPath,
    JSON.stringify({ count: next, updatedAt: new Date().toISOString(), budget }, null, 2),
  );
  return next;
}

export function getPhaseVerdictCallBudget(): number {
  return PHASE_VERDICT_CALL_BUDGET;
}


export function isGptRealSpikeEnabled(opts?: OpenAIRealSpikeOptions): boolean {
  const env = opts?.env ?? process.env;
  return opts?.enabled === true && env[GPT_REAL_SPIKE_FLAG] === "1";
}

export function isGptRealLiveEnabled(opts?: OpenAIRealSpikeOptions): boolean {
  const env = opts?.env ?? process.env;
  return isGptRealSpikeEnabled(opts) && env[GPT_REAL_LIVE_FLAG] === "1";
}

export function discoverOpenAiLiveGate(env: NodeJS.ProcessEnv = process.env): {
  apiKeyDefined: boolean;
  modelDefined: boolean;
  modelValue?: string;
  orgDefined: boolean;
  projectDefined: boolean;
  liveGateSatisfied: boolean;
  stopReason?: string;
} {
  const apiKeyDefined = Boolean(env.OPENAI_API_KEY);
  const modelValue = env.OPENAI_MODEL?.trim() || undefined;
  const modelDefined = Boolean(modelValue);
  const orgDefined = Boolean(env.OPENAI_ORG || env.OPENAI_ORGANIZATION);
  const projectDefined = Boolean(env.OPENAI_PROJECT);
  if (!apiKeyDefined) {
    return {
      apiKeyDefined,
      modelDefined,
      modelValue,
      orgDefined,
      projectDefined,
      liveGateSatisfied: false,
      stopReason: "OPENAI LIVE AUTHENTICATION REQUIRED — MORRIS API KEY DECISION NEEDED",
    };
  }
  if (!modelDefined) {
    return {
      apiKeyDefined,
      modelDefined,
      modelValue,
      orgDefined,
      projectDefined,
      liveGateSatisfied: false,
      stopReason: "STOP — OPENAI MODEL DECISION REQUIRED",
    };
  }
  return {
    apiKeyDefined,
    modelDefined,
    modelValue,
    orgDefined,
    projectDefined,
    liveGateSatisfied: true,
  };
}

function redactResponseId(id: unknown): string | undefined {
  if (typeof id !== "string" || !id) return undefined;
  if (id.length <= 12) return `redacted:${id.length}`;
  return `redacted:${id.slice(0, 6)}…${id.slice(-4)}`;
}

/** Sanitize error text for proofs — never keep keys, Bearer tokens, or Authorization. */
export function sanitizeOpenAiErrorText(raw: string, maxLen = MAX_SANITIZED_MESSAGE): string {
  let s = raw
    .replace(/Authorization:\s*Bearer\s+\S+/gi, "Authorization: Bearer [REDACTED]")
    .replace(/Bearer\s+[A-Za-z0-9._-]{10,}/g, "Bearer [REDACTED]")
    .replace(/OPENAI_API_KEY\s*=\s*\S+/gi, "OPENAI_API_KEY=[REDACTED]")
    .replace(/sk-[a-zA-Z0-9_-]{10,}/g, "sk-[REDACTED]");
  if (s.length > maxLen) s = `${s.slice(0, maxLen)}…[truncated]`;
  return s;
}

/** Parse OpenAI error JSON body into safe evidence fields (no full body retained). */
export function extractOpenAiHttpErrorEvidence(input: {
  status: number;
  bodyText: string;
  durationMs: number;
}): GPTHttpErrorEvidence {
  let apiCode: string | undefined;
  let apiType: string | undefined;
  let message = `HTTP ${input.status}`;
  try {
    const parsed = JSON.parse(input.bodyText) as {
      error?: { message?: unknown; code?: unknown; type?: unknown };
    };
    const err = parsed?.error;
    if (err && typeof err === "object") {
      if (typeof err.message === "string" && err.message.trim()) message = err.message;
      if (typeof err.code === "string" && err.code.trim()) apiCode = err.code.slice(0, 80);
      if (typeof err.type === "string" && err.type.trim()) apiType = err.type.slice(0, 80);
    }
  } catch {
    /* non-JSON body — keep generic HTTP status message */
  }
  return {
    httpStatus: input.status,
    apiCode,
    apiType,
    messageSanitized: sanitizeOpenAiErrorText(message),
    durationMs: input.durationMs,
    bodyLen: Buffer.byteLength(input.bodyText, "utf8"),
  };
}

function httpErrorFromHarness(err: HarnessError): GPTHttpErrorEvidence | undefined {
  const d = err.detail;
  if (!d || typeof d.httpStatus !== "number") return undefined;
  return {
    httpStatus: d.httpStatus,
    apiCode: typeof d.apiCode === "string" ? d.apiCode : undefined,
    apiType: typeof d.apiType === "string" ? d.apiType : undefined,
    messageSanitized:
      typeof d.messageSanitized === "string"
        ? d.messageSanitized
        : sanitizeOpenAiErrorText(err.message),
    durationMs: typeof d.durationMs === "number" ? d.durationMs : 0,
    bodyLen: typeof d.bodyLen === "number" ? d.bodyLen : 0,
  };
}

function failResult(
  err: HarnessError,
  liveInvoked: boolean,
  extras?: { responseObservation?: GPTResponseObservation; cycleCallNumber?: number; usage?: GPTUsageSummary },
): GPTCallResult<never> {
  return {
    ok: false,
    status: "FAILED",
    errorCode: err.code,
    errorMessage: sanitizeOpenAiErrorText(err.message),
    httpError: httpErrorFromHarness(err),
    responseObservation: extras?.responseObservation ?? observationFromHarness(err),
    usage: extras?.usage,
    liveInvoked,
    retriesAttempted: 0,
    experimental: true,
    productionReadyClaimed: false,
    cycleCallNumber: extras?.cycleCallNumber ?? cycleNumberFromHarness(err),
  };
}

function observationFromHarness(err: HarnessError): GPTResponseObservation | undefined {
  const d = err.detail?.responseObservation;
  if (!d || typeof d !== "object") return undefined;
  return d as GPTResponseObservation;
}

function cycleNumberFromHarness(err: HarnessError): number | undefined {
  return typeof err.detail?.cycleCallNumber === "number" ? err.detail.cycleCallNumber : undefined;
}

function parseUsage(data: Record<string, unknown>, durationMs: number, model: string): GPTUsageSummary {
  const usage = (data.usage ?? {}) as Record<string, unknown>;
  const details = (usage.completion_tokens_details ?? {}) as Record<string, unknown>;
  return {
    inputTokens: typeof usage.prompt_tokens === "number" ? usage.prompt_tokens : undefined,
    outputTokens: typeof usage.completion_tokens === "number" ? usage.completion_tokens : undefined,
    totalTokens: typeof usage.total_tokens === "number" ? usage.total_tokens : undefined,
    reasoningTokens:
      typeof details.reasoning_tokens === "number" ? details.reasoning_tokens : undefined,
    modelReturned: typeof data.model === "string" ? data.model : model,
    responseIdRedacted: redactResponseId(data.id),
    durationMs,
    monetaryCostClaimed: false,
  };
}

export function classifyContentType(content: unknown): GPTResponseObservation["contentType"] {
  if (content === undefined) return "missing";
  if (content === null) return "null";
  if (typeof content === "string") return "string";
  if (Array.isArray(content)) return "array";
  if (typeof content === "object") return "object";
  return "other";
}

/** Build safe observation from Chat Completions JSON body. */
export function observeChatCompletionResponse(input: {
  data: Record<string, unknown>;
  durationMs: number;
  content: unknown;
}): GPTResponseObservation {
  const choices = input.data.choices;
  const choice0 =
    Array.isArray(choices) && choices[0] && typeof choices[0] === "object"
      ? (choices[0] as Record<string, unknown>)
      : undefined;
  const message =
    choice0 && typeof choice0.message === "object" && choice0.message
      ? (choice0.message as Record<string, unknown>)
      : undefined;
  const content = input.content;
  const contentType = classifyContentType(content);
  const text = typeof content === "string" ? content : content == null ? "" : JSON.stringify(content);
  const trimmed = text.trim();
  const usage = parseUsage(input.data, input.durationMs, String(input.data.model ?? ""));
  return {
    httpStatus: 200,
    modelReturned: usage.modelReturned,
    responseIdRedacted: usage.responseIdRedacted,
    finishReason: typeof choice0?.finish_reason === "string" ? choice0.finish_reason : undefined,
    contentType,
    contentLength: Buffer.byteLength(text, "utf8"),
    contentPreviewSanitized: sanitizeOpenAiErrorText(text, MAX_CONTENT_PREVIEW),
    hasMarkdownFence: /```/.test(text),
    looksLikeJsonObject: trimmed.startsWith("{") && trimmed.endsWith("}"),
    refusalPresent: typeof message?.refusal === "string" && message.refusal.length > 0,
    reasoningTokens: usage.reasoningTokens,
    durationMs: input.durationMs,
  };
}

export type OpenAITransport = (
  body: Record<string, unknown>,
  meta: { timeoutMs: number; apiKey: string },
) => Promise<{ ok: boolean; status: number; text: string; durationMs: number }>;

export function createDefaultTransport(fetchImpl: typeof fetch = fetch): OpenAITransport {
  return async (body, meta) => {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), meta.timeoutMs);
    const started = Date.now();
    try {
      const res = await fetchImpl(OPENAI_CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${meta.apiKey}`,
        },
        body: JSON.stringify(body),
        signal: controller.signal,
      });
      const text = await res.text();
      return { ok: res.ok, status: res.status, text, durationMs: Date.now() - started };
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      if (msg.includes("abort") || (e as { name?: string })?.name === "AbortError") {
        throw new HarnessError("GPT_TIMEOUT", `OpenAI request timed out after ${meta.timeoutMs}ms`);
      }
      throw new HarnessError("GPT_HTTP_ERROR", `OpenAI transport failed: ${msg}`);
    } finally {
      clearTimeout(timer);
    }
  };
}

export function extractMessageContent(data: Record<string, unknown>): {
  content: string;
  rawContent: unknown;
} {
  const choices = data.choices;
  if (!Array.isArray(choices) || !choices[0] || typeof choices[0] !== "object") {
    throw new HarnessError("GPT_INVALID_JSON", "Missing choices[0]");
  }
  const msg = (choices[0] as { message?: Record<string, unknown> }).message;
  if (!msg || typeof msg !== "object") {
    throw new HarnessError("GPT_INVALID_JSON", "Missing message");
  }
  const content = msg.content;
  if (typeof content !== "string") {
    throw new HarnessError("GPT_INVALID_JSON", `message.content type=${classifyContentType(content)}`);
  }
  return { content, rawContent: content };
}

export class OpenAIRealSpikeAdapter implements GPTQualificationPort, GPTVerdictPort {
  private readonly timeoutMs: number;
  private readonly transport: OpenAITransport;
  private readonly env: NodeJS.ProcessEnv;
  private readonly enabled: boolean;
  private readonly maxCompletionTokens: number;
  private readonly cycleCounterPath?: string;
  private readonly cycleCallBudget: number;
  private readonly historicalCounterPath?: string;

  constructor(opts: OpenAIRealSpikeOptions & { transport?: OpenAITransport } = {}) {
    this.enabled = opts.enabled === true;
    this.timeoutMs = opts.timeoutMs ?? DEFAULT_TIMEOUT_MS;
    this.env = opts.env ?? process.env;
    this.transport = opts.transport ?? createDefaultTransport(opts.fetchImpl);
    const tok = opts.maxCompletionTokens ?? DEFAULT_MAX_COMPLETION_TOKENS;
    this.maxCompletionTokens = Math.min(Math.max(1, tok), ABSOLUTE_MAX_COMPLETION_TOKENS);
    this.cycleCounterPath = opts.cycleCounterPath;
    this.cycleCallBudget = opts.cycleCallBudget ?? CYCLE_CALL_BUDGET;
    this.historicalCounterPath = opts.historicalCounterPath;
  }

  private assertLiveReady(): { apiKey: string; model: string } {
    if (!isGptRealLiveEnabled({ enabled: this.enabled, env: this.env })) {
      throw new HarnessError(
        "GPT_LIVE_GATE",
        "Live requires enabled=true + SFIA_GPT_REAL_SPIKE=1 + SFIA_GPT_REAL_LIVE=1",
      );
    }
    const gate = discoverOpenAiLiveGate(this.env);
    if (!gate.apiKeyDefined) {
      throw new HarnessError(
        "GPT_AUTH_REQUIRED",
        "OPENAI LIVE AUTHENTICATION REQUIRED — MORRIS API KEY DECISION NEEDED",
      );
    }
    if (!gate.modelDefined || !gate.modelValue) {
      throw new HarnessError("GPT_MODEL_REQUIRED", "STOP — OPENAI MODEL DECISION REQUIRED");
    }
    if (liveCallCount >= MAX_LIVE_CALLS_PER_PROCESS) {
      throw new HarnessError(
        "GPT_LIVE_CAP",
        `Max ${MAX_LIVE_CALLS_PER_PROCESS} live calls per process exceeded; no retry`,
      );
    }
    return { apiKey: this.env.OPENAI_API_KEY!, model: gate.modelValue };
  }

  private async callOnce(
    system: string,
    userPayload: unknown,
    model: string,
    apiKey: string,
    responseFormat: typeof QUALIFICATION_RESPONSE_FORMAT | typeof VERDICT_RESPONSE_FORMAT,
  ): Promise<{
    content: string;
    usage: GPTUsageSummary;
    responseObservation: GPTResponseObservation;
    cycleCallNumber: number;
  }> {
    let cycleCallNumber = liveCallCount + 1;
    if (this.cycleCounterPath) {
      cycleCallNumber = reserveCycleCall(this.cycleCounterPath, this.cycleCallBudget);
    }
    if (this.historicalCounterPath) {
      reserveCycleCall(this.historicalCounterPath, Number.MAX_SAFE_INTEGER);
    }
    liveCallCount += 1;
    const body = {
      model,
      max_completion_tokens: this.maxCompletionTokens,
      response_format: responseFormat,
      messages: [
        { role: "system", content: system },
        { role: "user", content: JSON.stringify(userPayload) },
      ],
    };
    let res: { ok: boolean; status: number; text: string; durationMs: number };
    try {
      res = await this.transport(body, { timeoutMs: this.timeoutMs, apiKey });
    } catch (e) {
      if (e instanceof HarnessError) throw e;
      throw new HarnessError("GPT_HTTP_ERROR", String(e), { cycleCallNumber });
    }
    if (!res.ok) {
      const evidence = extractOpenAiHttpErrorEvidence({
        status: res.status,
        bodyText: res.text,
        durationMs: res.durationMs,
      });
      throw new HarnessError("GPT_HTTP_ERROR", `OpenAI HTTP ${evidence.httpStatus}: ${evidence.messageSanitized}`, {
        httpStatus: evidence.httpStatus,
        apiCode: evidence.apiCode,
        apiType: evidence.apiType,
        messageSanitized: evidence.messageSanitized,
        durationMs: evidence.durationMs,
        bodyLen: evidence.bodyLen,
        cycleCallNumber,
      });
    }
    const data = parseStrictJson(res.text) as Record<string, unknown>;
    let content = "";
    let rawContent: unknown = undefined;
    try {
      const extracted = extractMessageContent(data);
      content = extracted.content;
      rawContent = extracted.rawContent;
    } catch (e) {
      const msg = (data.choices as unknown[])?.[0] as { message?: { content?: unknown } } | undefined;
      rawContent = msg?.message?.content;
      const observation = observeChatCompletionResponse({
        data,
        durationMs: res.durationMs,
        content: rawContent,
      });
      const err = e instanceof HarnessError ? e : new HarnessError("GPT_INVALID_JSON", String(e));
      throw new HarnessError(err.code, err.message, {
        ...err.detail,
        responseObservation: observation,
        cycleCallNumber,
      });
    }
    const usage = parseUsage(data, res.durationMs, model);
    const responseObservation = observeChatCompletionResponse({
      data,
      durationMs: res.durationMs,
      content: rawContent,
    });
    if (!content.trim()) {
      throw new HarnessError("GPT_INVALID_JSON", "Empty message.content", {
        responseObservation,
        cycleCallNumber,
      });
    }
    return { content, usage, responseObservation, cycleCallNumber };
  }

  async qualify(request: GPTQualificationRequest): Promise<GPTCallResult<ExecutionContractCandidate>> {
    try {
      const { apiKey, model } = this.assertLiveReady();
      const { content, usage, responseObservation, cycleCallNumber } = await this.callOnce(
        QUALIFICATION_SYSTEM_PROMPT,
        {
          request,
          outputSchemaHint: "ExecutionContractCandidate",
          modelMetadataHint: {
            provider: "openai-api",
            mechanism: "openai-chat-completions-https",
            model,
            experimental: true,
            productionReadyClaimed: false,
          },
        },
        model,
        apiKey,
        QUALIFICATION_RESPONSE_FORMAT,
      );
      let parsed: unknown;
      try {
        parsed = parseStrictJson(content);
      } catch (e) {
        const err = e instanceof HarnessError ? e : new HarnessError("GPT_INVALID_JSON", String(e));
        throw new HarnessError(err.code, err.message, {
          ...err.detail,
          responseObservation,
          cycleCallNumber,
        });
      }
      if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
        (parsed as Record<string, unknown>).modelMetadata = {
          provider: "openai-api",
          mechanism: "openai-chat-completions-https",
          model,
          experimental: true,
          productionReadyClaimed: false,
          responseIdRedacted: usage.responseIdRedacted,
          durationMs: usage.durationMs,
        };
      }
      let candidate: ExecutionContractCandidate;
      try {
        candidate = validateExecutionContractCandidate(parsed, request);
      } catch (e) {
        const err = e instanceof HarnessError ? e : new HarnessError("GPT_SCHEMA", String(e));
        throw new HarnessError(err.code, err.message, {
          ...err.detail,
          responseObservation,
          cycleCallNumber,
        });
      }
      return {
        ok: true,
        status: "SUCCEEDED",
        candidate,
        usage,
        responseObservation,
        liveInvoked: true,
        retriesAttempted: 0,
        experimental: true,
        productionReadyClaimed: false,
        cycleCallNumber,
      };
    } catch (e) {
      const err = e instanceof HarnessError ? e : new HarnessError("GPT_FAILED", String(e));
      const liveInvoked =
        err.code !== "GPT_LIVE_GATE" && err.code !== "GPT_AUTH_REQUIRED" && err.code !== "GPT_MODEL_REQUIRED";
      return failResult(err, liveInvoked);
    }
  }

  async verdict(request: GPTVerdictRequest): Promise<GPTCallResult<VerdictCandidate>> {
    try {
      const { apiKey, model } = this.assertLiveReady();
      const { content, usage, responseObservation, cycleCallNumber } = await this.callOnce(
        VERDICT_SYSTEM_PROMPT,
        {
          request,
          outputSchemaHint: "VerdictCandidate",
          allowedStatus: ["OBSERVED", "PARTIAL", "INCONCLUSIVE", "FAILED", "READY_FOR_MORRIS_REVIEW"],
          allowedProposedVerdict: ["PASS_WITH_RESERVES", "FAIL", "INCONCLUSIVE", "NEEDS_MORRIS_DECISION"],
          schemaVersionExact: GPT_CONTRACT_SCHEMA_VERSION,
          responseFormat: "json_schema_strict",
        },
        model,
        apiKey,
        VERDICT_RESPONSE_FORMAT,
      );
      let parsed: unknown;
      try {
        parsed = parseStrictJson(content);
      } catch (e) {
        const err = e instanceof HarnessError ? e : new HarnessError("GPT_INVALID_JSON", String(e));
        throw new HarnessError(err.code, err.message, {
          ...err.detail,
          responseObservation,
          cycleCallNumber,
        });
      }
      if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
        (parsed as Record<string, unknown>).modelMetadata = {
          provider: "openai-api",
          mechanism: "openai-chat-completions-https",
          model,
          experimental: true,
          productionReadyClaimed: false,
          responseIdRedacted: usage.responseIdRedacted,
          durationMs: usage.durationMs,
        };
      }
      let candidate: VerdictCandidate;
      try {
        candidate = validateVerdictCandidate(parsed, request);
      } catch (e) {
        const err = e instanceof HarnessError ? e : new HarnessError("GPT_SCHEMA", String(e));
        throw new HarnessError(err.code, err.message, {
          ...err.detail,
          responseObservation,
          cycleCallNumber,
        });
      }
      return {
        ok: true,
        status: "SUCCEEDED",
        candidate,
        usage,
        responseObservation,
        liveInvoked: true,
        retriesAttempted: 0,
        experimental: true,
        productionReadyClaimed: false,
        cycleCallNumber,
      };
    } catch (e) {
      const err = e instanceof HarnessError ? e : new HarnessError("GPT_FAILED", String(e));
      const liveInvoked =
        err.code !== "GPT_LIVE_GATE" && err.code !== "GPT_AUTH_REQUIRED" && err.code !== "GPT_MODEL_REQUIRED";
      return failResult(err, liveInvoked);
    }
  }
}
