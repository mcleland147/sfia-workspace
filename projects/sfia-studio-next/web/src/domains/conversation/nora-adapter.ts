import { newId } from "@/lib/ids";

export type NoraGenerateInput = {
  userText: string;
  contextSnippets: string[];
};

export type NoraGenerateResult = {
  content: string;
  status: "COMPLETE" | "FAILED" | "INTERRUPTED" | "UNKNOWN";
  generationId: string;
  mode: "deterministic-fixture" | "openai-agents-sdk-live";
  streamingProvisional?: boolean;
};

const SYSTEM_INSTRUCTIONS =
  "Tu es Nora, copilote SFIA Studio. Tu analyses et proposes. " +
  "Tu ne crées jamais de projet, cycle, dépôt Git ni mandat. " +
  "Aucun outil à effet externe n'est disponible. Réponds en français, concis.";

/**
 * Explicit fixture force — allowed only for DEV / automated E2E.
 * Outside DEV (and without STUDIO_E2E), requesting a force is ignored for LIVE path
 * and the caller must not treat that as a silent production kill-switch.
 */
export function mustUseNoraFixture(): boolean {
  if (process.env.STUDIO_E2E === "1") return true;
  if (process.env.STUDIO_FORCE_NORA_FIXTURE === "1") {
    // Fail-closed outside DEV: force flag alone is not enough in non-DEV lanes.
    return process.env.STUDIO_LANE === "DEV";
  }
  return false;
}

function fixtureReply(input: NoraGenerateInput, generationId: string): NoraGenerateResult {
  const ctx = input.contextSnippets.slice(0, 3).join(" | ");
  return {
    generationId,
    mode: "deterministic-fixture",
    status: "COMPLETE",
    streamingProvisional: false,
    content:
      `Nora (fixture FAKE, not LIVE): j'ai bien noté « ${input.userText.slice(0, 240)} ». ` +
      `Je peux clarifier l'intention et proposer un aperçu de projet sans créer quoi que ce soit. ` +
      (ctx ? `Contexte autorisé: ${ctx.slice(0, 200)}` : "Aucun acquis supplémentaire chargé."),
  };
}

/**
 * D3 adapter — OpenAI Agents SDK behind this boundary when LIVE key present.
 * NEVER activates MemorySession / ConversationsSession as authority.
 * Without OPENAI_API_KEY: deterministic fixture only (NOT LIVE proof).
 * STUDIO_E2E=1 / STUDIO_FORCE_NORA_FIXTURE=1 (DEV only): fixture even if a key is present —
 * prevents Playwright reuse of a LIVE-keyed DEV server from emitting paid calls.
 */
export async function generateNoraReply(input: NoraGenerateInput): Promise<NoraGenerateResult> {
  const generationId = newId("gen");

  if (mustUseNoraFixture()) {
    return fixtureReply(input, generationId);
  }

  const key = process.env.OPENAI_API_KEY?.trim();
  if (!key) {
    return fixtureReply(input, generationId);
  }

  try {
    // Dynamic import keeps fixture path free of SDK side-effects when no key / E2E.
    const { Agent, run } = await import("@openai/agents");
    const agent = new Agent({
      name: "Nora",
      instructions: SYSTEM_INSTRUCTIONS,
      // No tools → no D5–D9 side effects via Nora.
    });

    const prompt =
      `${input.userText}\n\nContexte autorisé (borné):\n` +
      (input.contextSnippets.length ? input.contextSnippets.join("\n") : "(vide)");

    // Non-streamed finalization: only COMPLETE after SDK result is obtained.
    // Streaming UI may show provisional fragments separately; PG commit happens in service.
    const result = await run(agent, prompt, {
      maxTurns: 1,
    });

    const content =
      typeof result.finalOutput === "string"
        ? result.finalOutput.trim()
        : String(result.finalOutput ?? "").trim();

    if (!content) {
      return {
        generationId,
        mode: "openai-agents-sdk-live",
        status: "UNKNOWN",
        streamingProvisional: false,
        content: "Réponse Agents SDK vide — état UNKNOWN, aucun effet métier.",
      };
    }
    return {
      generationId,
      mode: "openai-agents-sdk-live",
      status: "COMPLETE",
      streamingProvisional: false,
      content,
    };
  } catch (e) {
    const msg = e instanceof Error ? e.message : "interrupted";
    const status = /timeout|abort/i.test(msg) ? ("INTERRUPTED" as const) : ("FAILED" as const);
    return {
      generationId,
      mode: "openai-agents-sdk-live",
      status,
      streamingProvisional: false,
      content: `Nora LIVE ${status}: ${msg}. Message utilisateur déjà persisté.`,
    };
  }
}
