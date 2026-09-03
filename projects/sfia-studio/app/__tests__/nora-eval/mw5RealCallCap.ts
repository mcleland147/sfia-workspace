/**
 * MW5-R2-REAL-03 harness-only call-cap + intent capture wrappers.
 * NOT product providers. Blocks the 51st API call before inner delegation.
 */
import * as fs from "node:fs";
import * as path from "node:path";
import type {
  ConversationProvider,
  ProviderChatMessage,
  ProviderCompletionResult,
  ProviderInputItem,
  ProviderRoundResult,
} from "../../lib/platform/ai";
import type { ToolDefinition } from "../../lib/platform/tools/types";

export const MW5_REAL_03_MAX_PROVIDER_CALLS = 50;

/** @deprecated REAL-02 constant — prefer MW5_REAL_03_MAX_PROVIDER_CALLS */
export const MW5_REAL_02_MAX_PROVIDER_CALLS = MW5_REAL_03_MAX_PROVIDER_CALLS;

export const CAPACITY_STOP_BEFORE_PROVIDER_CALL =
  "CAPACITY_STOP_BEFORE_PROVIDER_CALL";

export class CapacityStopError extends Error {
  readonly code = CAPACITY_STOP_BEFORE_PROVIDER_CALL;
  constructor(
    readonly launchedCalls: number,
    readonly maxCalls: number,
  ) {
    super(
      `${CAPACITY_STOP_BEFORE_PROVIDER_CALL}: launched=${launchedCalls} max=${maxCalls}`,
    );
    this.name = "CapacityStopError";
  }
}

/**
 * Outer wrapper: CallCap → IntentCapture → Metered → OpenAI.
 * Increments only when the inner call is actually launched.
 */
export class CallCapConversationProvider implements ConversationProvider {
  readonly providerId: string;
  launchedCalls = 0;

  constructor(
    private readonly inner: ConversationProvider,
    readonly maxCalls: number = MW5_REAL_03_MAX_PROVIDER_CALLS,
  ) {
    this.providerId = inner.providerId;
  }

  private assertCapacity(): void {
    if (this.launchedCalls >= this.maxCalls) {
      throw new CapacityStopError(this.launchedCalls, this.maxCalls);
    }
  }

  async complete(
    messages: ProviderChatMessage[],
  ): Promise<ProviderCompletionResult> {
    this.assertCapacity();
    this.launchedCalls += 1;
    return this.inner.complete(messages);
  }

  async completeStructured(input: {
    messages: ProviderChatMessage[];
    schemaName: string;
    jsonSchema: Record<string, unknown>;
  }): Promise<ProviderCompletionResult> {
    if (typeof this.inner.completeStructured !== "function") {
      throw new Error("completeStructured not available on wrapped provider");
    }
    this.assertCapacity();
    this.launchedCalls += 1;
    return this.inner.completeStructured(input);
  }

  async completeRound(input: {
    items: ProviderInputItem[];
    tools: ToolDefinition[];
  }): Promise<ProviderRoundResult> {
    if (typeof this.inner.completeRound !== "function") {
      throw new Error("completeRound not available on wrapped provider");
    }
    this.assertCapacity();
    this.launchedCalls += 1;
    return this.inner.completeRound(input);
  }
}

export type CapturedIntentSignals = {
  structuralChange: boolean;
  securityImpact: boolean;
  architectureImpact: boolean;
  dataImpact: boolean;
  irreversible: boolean;
  lowRiskBounded: boolean;
};

export type CapturedIntentAnalysis = {
  capturedAt: string;
  schemaName: string | null;
  intentClass: string | null;
  candidateCycleTypeId: string | null;
  signals: CapturedIntentSignals | null;
  criticalJustificationRedacted: string | null;
  cognitiveWorkload: Record<string, unknown> | null;
};

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

function clip(value: unknown, max = 240): string | null {
  if (typeof value !== "string") return null;
  const t = value.trim();
  if (!t) return null;
  return t.slice(0, max);
}

function parseSignals(raw: unknown): CapturedIntentSignals | null {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return null;
  const o = raw as Record<string, unknown>;
  const keys = [
    "structuralChange",
    "securityImpact",
    "architectureImpact",
    "dataImpact",
    "irreversible",
    "lowRiskBounded",
  ] as const;
  for (const k of keys) {
    if (typeof o[k] !== "boolean") return null;
  }
  return {
    structuralChange: o.structuralChange as boolean,
    securityImpact: o.securityImpact as boolean,
    architectureImpact: o.architectureImpact as boolean,
    dataImpact: o.dataImpact as boolean,
    irreversible: o.irreversible as boolean,
    lowRiskBounded: o.lowRiskBounded as boolean,
  };
}

/**
 * Transparent QA capture of IntentAnalysisDto-shaped structured outputs.
 * Does not mutate request/response text. Never synthesizes provider output.
 */
export class IntentCaptureConversationProvider implements ConversationProvider {
  readonly providerId: string;
  readonly captures: CapturedIntentAnalysis[] = [];
  lastIntent: CapturedIntentAnalysis | null = null;

  constructor(private readonly inner: ConversationProvider) {
    this.providerId = inner.providerId;
  }

  clearCaptures(): void {
    this.captures.length = 0;
    this.lastIntent = null;
  }

  private maybeCapture(
    result: ProviderCompletionResult,
    schemaName: string | null,
  ): void {
    const parsed = extractJsonObject(result.text);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return;
    const obj = parsed as Record<string, unknown>;
    if (typeof obj.intentClass !== "string") return;
    // Ignore non-intent structured probes (e.g. R1 tiny schema).
    if (!("signals" in obj) && !("candidateCycleTypeId" in obj)) return;

    const capture: CapturedIntentAnalysis = {
      capturedAt: new Date().toISOString(),
      schemaName,
      intentClass: obj.intentClass,
      candidateCycleTypeId:
        obj.candidateCycleTypeId == null
          ? null
          : typeof obj.candidateCycleTypeId === "string"
            ? obj.candidateCycleTypeId
            : null,
      signals: parseSignals(obj.signals),
      criticalJustificationRedacted: clip(obj.criticalJustification),
      cognitiveWorkload:
        obj.cognitiveWorkload &&
        typeof obj.cognitiveWorkload === "object" &&
        !Array.isArray(obj.cognitiveWorkload)
          ? (obj.cognitiveWorkload as Record<string, unknown>)
          : null,
    };
    this.captures.push(capture);
    this.lastIntent = capture;
  }

  async complete(
    messages: ProviderChatMessage[],
  ): Promise<ProviderCompletionResult> {
    return this.inner.complete(messages);
  }

  async completeStructured(input: {
    messages: ProviderChatMessage[];
    schemaName: string;
    jsonSchema: Record<string, unknown>;
  }): Promise<ProviderCompletionResult> {
    if (typeof this.inner.completeStructured !== "function") {
      throw new Error("completeStructured not available on wrapped provider");
    }
    const result = await this.inner.completeStructured(input);
    this.maybeCapture(result, input.schemaName ?? null);
    return result;
  }

  async completeRound(input: {
    items: ProviderInputItem[];
    tools: ToolDefinition[];
  }): Promise<ProviderRoundResult> {
    if (typeof this.inner.completeRound !== "function") {
      throw new Error("completeRound not available on wrapped provider");
    }
    return this.inner.completeRound(input);
  }
}

export function persistMw5RealEvidenceJson(input: {
  outPath: string;
  evidence: Record<string, unknown>;
}): void {
  fs.mkdirSync(path.dirname(input.outPath), { recursive: true });
  const json = `${JSON.stringify(input.evidence, null, 2)}\n`;
  fs.writeFileSync(input.outPath, json);
}

export function serializeCallRecord(record: {
  callIndex: number;
  method: string;
  model: string | null;
  providerResponseId: string | null;
  inputTokens: number | null;
  outputTokens: number | null;
  totalTokens: number | null;
  estimatedUsd: number;
  cumulativeUsd: number;
  at?: string;
}): Record<string, unknown> {
  return {
    callIndex: record.callIndex,
    method: record.method,
    model: record.model,
    providerResponseId: record.providerResponseId,
    inputTokens: record.inputTokens,
    outputTokens: record.outputTokens,
    totalTokens: record.totalTokens,
    estimatedUsd: record.estimatedUsd,
    cumulativeUsd: record.cumulativeUsd,
    ...(record.at ? { at: record.at } : {}),
  };
}
