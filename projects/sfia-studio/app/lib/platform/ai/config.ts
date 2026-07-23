import { TechnicalError } from "./errors";

export type LiveConfigStatus =
  | { available: true; modelConfigured: true }
  | {
      available: false;
      missing: Array<"OPENAI_API_KEY" | "OPENAI_MODEL">;
    };

/** Public availability probe — never returns secret values. */
export function getLiveConversationAvailability(): LiveConfigStatus {
  const missing: Array<"OPENAI_API_KEY" | "OPENAI_MODEL"> = [];
  if (!process.env.OPENAI_API_KEY?.trim()) missing.push("OPENAI_API_KEY");
  if (!process.env.OPENAI_MODEL?.trim()) missing.push("OPENAI_MODEL");
  if (missing.length > 0) {
    return { available: false, missing };
  }
  return { available: true, modelConfigured: true };
}

/** Server-only resolved config — fail-closed, no silent defaults. */
export function requireLiveConversationSecrets(): {
  apiKey: string;
  model: string;
} {
  const availability = getLiveConversationAvailability();
  if (!availability.available) {
    throw new TechnicalError(
      "CONFIG",
      `Configuration live indisponible (variables manquantes : ${availability.missing.join(", ")}).`,
    );
  }
  return {
    apiKey: process.env.OPENAI_API_KEY!.trim(),
    model: process.env.OPENAI_MODEL!.trim(),
  };
}

/** True when E2E / unit harness forces the fake provider (never live). */
export function isFakeConversationProviderForced(): boolean {
  return process.env.OPS1_CONVERSATION_PROVIDER === "fake";
}
