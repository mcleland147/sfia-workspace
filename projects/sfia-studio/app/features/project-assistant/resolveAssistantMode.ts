/**
 * Shared assistant mode resolution for F1/F2.
 * Explicit server-side provider injection must not require env matrix.
 */

import {
  getLiveConversationAvailability,
  isFakeConversationProviderForced,
  type ConversationProvider,
} from "@/lib/platform/ai";

export type AssistantModeResolution = {
  mode: "fixture" | "live" | "unavailable";
  canProceed: boolean;
  message?: string;
  presentation: "test_provider" | "openai_live";
};

/**
 * Resolve UI/runtime mode.
 * - No explicit provider → existing env/fake availability behavior.
 * - Explicit provider → derive mode/presentation from that instance.
 */
export function resolveAssistantMode(
  explicitProvider?: ConversationProvider,
): AssistantModeResolution {
  if (explicitProvider) {
    // Mode/presentation follow the injected instance — not live env matrix.
    if (explicitProvider.providerId === "fake-test") {
      return {
        mode: "fixture",
        canProceed: true,
        presentation: "test_provider",
      };
    }
    return {
      mode: "live",
      canProceed: true,
      presentation: "openai_live",
    };
  }

  if (isFakeConversationProviderForced()) {
    return {
      mode: "fixture",
      canProceed: true,
      presentation: "test_provider",
    };
  }
  const availability = getLiveConversationAvailability();
  if (!availability.available) {
    return {
      mode: "unavailable",
      canProceed: false,
      presentation: "openai_live",
      message: `Assistant indisponible — configuration manquante (${availability.missing.join(", ")}). Aucun basculement silencieux vers le mode démonstration.`,
    };
  }
  return {
    mode: "live",
    canProceed: true,
    presentation: "openai_live",
  };
}
