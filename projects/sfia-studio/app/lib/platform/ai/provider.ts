import {
  isFakeConversationProviderForced,
  requireLiveConversationApiKey,
  requireLiveConversationSecrets,
  type OpenAiReasoningEffort,
} from "./config";
import { FakeConversationProvider } from "./fakeProvider";
import { OpenAIConversationProvider } from "./openaiProvider";
import type { ConversationProvider } from "./types";

let providerOverride: ConversationProvider | null = null;

/** Test-only injection — never used by client code. */
export function setConversationProviderForTests(
  provider: ConversationProvider | null,
): void {
  providerOverride = provider;
}

/** Test-only read of the current override (boundary substitution detection). */
export function getConversationProviderOverrideForTests(): ConversationProvider | null {
  return providerOverride;
}

/**
 * Product routed OpenAI construction — API key + router-selected model×effort.
 * Does NOT read OPENAI_MODEL / OPENAI_REASONING_EFFORT as selection authority.
 */
export function createRoutedOpenAiConversationProvider(input: {
  model: string;
  reasoningEffort: OpenAiReasoningEffort;
}): OpenAIConversationProvider {
  const apiKey = requireLiveConversationApiKey();
  return new OpenAIConversationProvider(
    apiKey,
    input.model,
    input.reasoningEffort,
  );
}

/**
 * Legacy resolver — TEMP WITH EXIT env model/effort for non-routed callers.
 * Product nominal F2/F1 must pass an explicit routed provider instead.
 */
export function resolveConversationProvider(): ConversationProvider {
  if (providerOverride) return providerOverride;
  if (isFakeConversationProviderForced()) {
    return new FakeConversationProvider();
  }
  const { apiKey, model, reasoningEffort } = requireLiveConversationSecrets();
  return new OpenAIConversationProvider(apiKey, model, reasoningEffort);
}
