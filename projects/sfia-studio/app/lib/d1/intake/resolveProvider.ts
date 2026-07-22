import type { ConversationProvider } from "@/lib/ops1/conversation/types";
import { D1Error } from "../errors";
import { FakeIntakeConversationProvider } from "./fakeIntakeProvider";
import { logIntakeEvent } from "../intakeObservability";

let override: ConversationProvider | null = null;

/** Test-only injection. */
export function setIntakeProviderForTests(
  provider: ConversationProvider | null,
): void {
  override = provider;
}

/**
 * Resolve intake provider.
 * Default = fake (deterministic).
 * Live only if D1_INTAKE_LIVE=1 AND secrets present — otherwise explicit CONFIG error
 * (no silent fake fallback when live was requested).
 * Does not alter OPS1 provider resolution.
 */
export function resolveIntakeProvider(): {
  provider: ConversationProvider;
  mode: "fake" | "live";
} {
  if (override) {
    return {
      provider: override,
      mode: override.providerId.includes("fake") ? "fake" : "live",
    };
  }
  if (process.env.D1_INTAKE_PROVIDER === "fake") {
    return { provider: new FakeIntakeConversationProvider(), mode: "fake" };
  }
  if (process.env.D1_INTAKE_LIVE === "1") {
    try {
      // Lazy require to avoid pulling OpenAI into client bundles via actions tree
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const { requireLiveConversationSecrets } = require("@/lib/ops1/conversation/config") as typeof import("@/lib/ops1/conversation/config");
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const { OpenAIConversationProvider } = require("@/lib/ops1/conversation/openaiProvider") as typeof import("@/lib/ops1/conversation/openaiProvider");
      const { apiKey, model } = requireLiveConversationSecrets();
      return {
        provider: new OpenAIConversationProvider(apiKey, model),
        mode: "live",
      };
    } catch (error) {
      logIntakeEvent("intake_provider_failed", {
        status: "CONFIG",
        providerMode: "live",
        errorCode: "CONFIG",
      });
      console.warn(
        JSON.stringify({
          event: "d1_intake_live_config_unavailable",
          ts: new Date().toISOString(),
          message:
            "D1_INTAKE_LIVE=1 but live secrets unavailable — refusing silent fake fallback",
        }),
      );
      throw new D1Error(
        "CONFIG",
        "Mode live demandé (D1_INTAKE_LIVE=1) mais configuration indisponible. Aucun fallback fake silencieux.",
        error,
      );
    }
  }
  return { provider: new FakeIntakeConversationProvider(), mode: "fake" };
}
