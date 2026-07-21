import {
  isFakeConversationProviderForced,
  requireLiveConversationSecrets,
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

export function resolveConversationProvider(): ConversationProvider {
  if (providerOverride) return providerOverride;
  if (isFakeConversationProviderForced()) {
    return new FakeConversationProvider();
  }
  const { apiKey, model } = requireLiveConversationSecrets();
  return new OpenAIConversationProvider(apiKey, model);
}
