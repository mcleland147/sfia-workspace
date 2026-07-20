/**
 * Increment C — live GPT qualification port (gpt-5.4-mini only).
 * Reuses native fetch transport. No OpenAI SDK dependency. No tools.
 * Does NOT implement verdict / analysis. Does NOT decide.
 */

import { createHash, randomUUID } from "node:crypto";
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
  type DemandProvenance,
  type QualificationCandidate,
  type QualificationModelPayload,
  type QualificationRequestInput,
  type QualificationRunResult,
  type QualificationUsage,
  type SfiaCycle,
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

export function buildDemandProvenance(demandText: string): DemandProvenance {
  return {
    length: demandText.length,
    sha256Prefix: createHash("sha256").update(demandText, "utf8").digest("hex").slice(0, 16),
    preview: demandText.length <= 80 ? demandText : `${demandText.slice(0, 80)}…`,
  };
}

/** Lightweight fixture cycle hint from user wording — still a demo candidate, not a decision. */
export function fixtureCycleFromDemand(demandText: string): SfiaCycle {
  const t = demandText.toLowerCase();
  if (/\bcadrage\b/.test(t)) return "cadrage";
  if (/\bux\/?ui\b|\bfigma\b|\baccessibilit/.test(t)) return "ux-ui";
  if (/\bqa\b|\bvalidation\b|\btest/.test(t)) return "qa-validation";
  return "delivery-implementation";
}

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
        demandProvenance: buildDemandProvenance(input.demandText),
        mode: "live",
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
  const cycle = fixtureCycleFromDemand(input.demandText);
  const payload: QualificationModelPayload = {
    schemaVersion: QUALIFICATION_CANDIDATE_SCHEMA_VERSION,
    requestId: input.requestId,
    correlationId: input.correlationId,
    summary: `Fixture qualification grounded on user demand (${input.demandText.length} chars).`,
    proposedCycle: cycle,
    proposedProfile: "Standard",
    profileJustification:
      cycle === "cadrage"
        ? "Fixture: wording suggests a framing / cadrage cycle (demo only)."
        : "Fixture: bounded qualification demo from user-provided demandText.",
    proposedBlocks:
      cycle === "cadrage"
        ? ["finops", "capitalisation-rex"]
        : cycle === "ux-ui"
          ? ["ux-ui-figma", "accessibilite"]
          : ["securite", "devops"],
    proposedScope: [`User demand preview: ${input.demandText.slice(0, 120)}`],
    proposedGates: ["G-VS-QUAL-REVIEW"],
    risks: ["Scope creep"],
    ambiguities: [],
    questions: ["Confirm Morris gate before execution?"],
    confidence: 0.7,
    reserves: ["Candidate only — Morris decides", "Mode fixture / simulation"],
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
  const provenance = buildDemandProvenance(input.demandText);
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
    demandProvenance: provenance,
    mode: "fixture",
  };
}
