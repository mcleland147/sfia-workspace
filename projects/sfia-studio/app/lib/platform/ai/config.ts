import { TechnicalError } from "./errors";

/** Values supported by openai@6.48 Responses `reasoning.effort`. */
export const OPENAI_REASONING_EFFORT_VALUES = [
  "none",
  "minimal",
  "low",
  "medium",
  "high",
  "xhigh",
  "max",
] as const;

export type OpenAiReasoningEffort =
  (typeof OPENAI_REASONING_EFFORT_VALUES)[number];

export type LiveConfigStatus =
  | { available: true; modelConfigured: true }
  | {
      available: false;
      missing: Array<"OPENAI_API_KEY" | "OPENAI_MODEL">;
    };

/**
 * Parse optional server-only OPENAI_REASONING_EFFORT.
 * Unset → undefined (omit from API). Invalid → explicit CONFIG failure.
 * Never accepts client-supplied values.
 */
export function parseOpenAiReasoningEffort(
  raw: string | undefined | null,
): OpenAiReasoningEffort | undefined {
  if (raw == null) return undefined;
  const trimmed = raw.trim();
  if (!trimmed) return undefined;
  const normalized = trimmed.toLowerCase();
  if (
    !(OPENAI_REASONING_EFFORT_VALUES as readonly string[]).includes(normalized)
  ) {
    throw new TechnicalError(
      "CONFIG",
      `OPENAI_REASONING_EFFORT invalide (« ${trimmed} »). Valeurs supportées : ${OPENAI_REASONING_EFFORT_VALUES.join(", ")}.`,
    );
  }
  return normalized as OpenAiReasoningEffort;
}

/**
 * Credential-only availability for Product routed cognition (P5-S05).
 * OPENAI_MODEL is NOT required — nominal model×effort comes from cognitiveRoutingPolicy.
 * Never returns secret values.
 */
export function getLiveConversationCredentialAvailability():
  | { available: true }
  | { available: false; missing: Array<"OPENAI_API_KEY"> } {
  if (!process.env.OPENAI_API_KEY?.trim()) {
    return { available: false, missing: ["OPENAI_API_KEY"] };
  }
  return { available: true };
}

/**
 * Legacy + Ops1 availability probe — key AND model present.
 * Product routed F2/F1 must NOT use this as nominal selection authority.
 * Never returns secret values.
 */
export function getLiveConversationAvailability(): LiveConfigStatus {
  const missing: Array<"OPENAI_API_KEY" | "OPENAI_MODEL"> = [];
  if (!process.env.OPENAI_API_KEY?.trim()) missing.push("OPENAI_API_KEY");
  if (!process.env.OPENAI_MODEL?.trim()) missing.push("OPENAI_MODEL");
  if (missing.length > 0) {
    return { available: false, missing };
  }
  return { available: true, modelConfigured: true };
}

/**
 * Server-only API key for Product routed OpenAI construction.
 * Fail-closed. Never returns/logs the key to clients.
 */
export function requireLiveConversationApiKey(): string {
  const availability = getLiveConversationCredentialAvailability();
  if (!availability.available) {
    throw new TechnicalError(
      "CONFIG",
      `Configuration live indisponible (variables manquantes : ${availability.missing.join(", ")}).`,
    );
  }
  return process.env.OPENAI_API_KEY!.trim();
}

/**
 * Legacy env-bound secrets — TEMP WITH EXIT for non-routed / Ops1 paths.
 * Product nominal F2/F1 selection must use cognitiveRoutingPolicy instead.
 */
export function requireLiveConversationSecrets(): {
  apiKey: string;
  model: string;
  reasoningEffort?: OpenAiReasoningEffort;
} {
  const availability = getLiveConversationAvailability();
  if (!availability.available) {
    throw new TechnicalError(
      "CONFIG",
      `Configuration live indisponible (variables manquantes : ${availability.missing.join(", ")}).`,
    );
  }
  const reasoningEffort = parseOpenAiReasoningEffort(
    process.env.OPENAI_REASONING_EFFORT,
  );
  return {
    apiKey: process.env.OPENAI_API_KEY!.trim(),
    model: process.env.OPENAI_MODEL!.trim(),
    ...(reasoningEffort ? { reasoningEffort } : {}),
  };
}

/** True when E2E / unit harness forces the fake provider (never live). */
export function isFakeConversationProviderForced(): boolean {
  return process.env.OPS1_CONVERSATION_PROVIDER === "fake";
}
