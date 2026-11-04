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

function isDevLane(): boolean {
  return process.env.STUDIO_LANE === "DEV";
}

function fixtureFlagsRequested(): boolean {
  return process.env.STUDIO_E2E === "1" || process.env.STUDIO_FORCE_NORA_FIXTURE === "1";
}

/**
 * True only when intentional fixture is allowed: DEV lane + E2E/force flag.
 * Outside DEV, flags never silently activate fixture (see generateNoraReply fail-closed).
 */
export function mustUseNoraFixture(): boolean {
  return isDevLane() && fixtureFlagsRequested();
}

/** Flags set while lane is not DEV — caller must fail closed (no FAKE COMPLETE, no LIVE). */
export function noraFixtureFlagsOutsideDev(): boolean {
  return fixtureFlagsRequested() && !isDevLane();
}

function boundaryFail(generationId: string, reason: string): NoraGenerateResult {
  return {
    generationId,
    // mode marks that no OpenAI network path was taken
    mode: "deterministic-fixture",
    status: "FAILED",
    streamingProvisional: false,
    content: `Nora boundary FAILED: ${reason}. Aucun appel OpenAI; aucune réponse FAKE utilisable.`,
  };
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
 *
 * Boundaries:
 * - STUDIO_E2E / STUDIO_FORCE_NORA_FIXTURE → fixture COMPLETE only when STUDIO_LANE=DEV
 * - Same flags outside DEV → FAILED (no LIVE, no FAKE COMPLETE)
 * - Missing OPENAI_API_KEY in DEV → fixture COMPLETE (local DEV convenience)
 * - Missing OPENAI_API_KEY outside DEV → FAILED (never silent FAKE in RECETTE/STABLE)
 */
export async function generateNoraReply(input: NoraGenerateInput): Promise<NoraGenerateResult> {
  const generationId = newId("gen");

  if (noraFixtureFlagsOutsideDev()) {
    return boundaryFail(
      generationId,
      "NORA_FIXTURE_LANE_FORBIDDEN (STUDIO_E2E/FORCE requires STUDIO_LANE=DEV)",
    );
  }

  if (mustUseNoraFixture()) {
    return fixtureReply(input, generationId);
  }

  const key = process.env.OPENAI_API_KEY?.trim();
  if (!key) {
    if (!isDevLane()) {
      return boundaryFail(
        generationId,
        "NORA_LIVE_KEY_REQUIRED outside DEV (no silent FAKE fallback)",
      );
    }
    return fixtureReply(input, generationId);
  }

  try {
    // Dynamic import keeps fixture/boundary paths free of SDK side-effects.
    const { Agent, run } = await import("@openai/agents");
    const agent = new Agent({
      name: "Nora",
      instructions: SYSTEM_INSTRUCTIONS,
      // No tools → no D5–D9 side effects via Nora.
    });

    const prompt =
      `${input.userText}\n\nContexte autorisé (borné):\n` +
      (input.contextSnippets.length ? input.contextSnippets.join("\n") : "(vide)");

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
