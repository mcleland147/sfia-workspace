import type { ConversationMode, JournalTurn } from "../types";
import { Ops1Error } from "../errors";

/** Provider-facing roles — domain roles mapped without SDK types. */
export type ProviderChatRole = "user" | "assistant";

export interface ProviderChatMessage {
  role: ProviderChatRole;
  content: string;
}

export interface ProviderUsage {
  inputTokens: number | null;
  outputTokens: number | null;
  totalTokens: number | null;
  model: string | null;
  providerResponseId: string | null;
}

export interface ProviderCompletionResult {
  text: string;
  usage: ProviderUsage;
}

export interface ConversationProvider {
  readonly providerId: string;
  complete(messages: ProviderChatMessage[]): Promise<ProviderCompletionResult>;
}

/**
 * Map local journal turns into ordered provider context.
 * Defense in depth: journal must match the expected session mode.
 * Never silently filters incompatible roles.
 */
export function buildProviderMessagesFromJournal(
  turns: JournalTurn[],
  expectedMode: ConversationMode,
): ProviderChatMessage[] {
  const out: ProviderChatMessage[] = [];
  for (const turn of turns) {
    if (turn.role === "user") {
      out.push({ role: "user", content: turn.content });
      continue;
    }
    if (turn.role === "assistant_fixture") {
      if (expectedMode === "live") {
        throw new Ops1Error(
          "CONFLICT",
          "Journal incompatible avec une session live (tour fixture détecté). Aucun appel fournisseur n’a été effectué.",
        );
      }
      out.push({ role: "assistant", content: turn.content });
      continue;
    }
    if (turn.role === "assistant_live") {
      if (expectedMode === "fixture") {
        throw new Ops1Error(
          "CONFLICT",
          "Journal incompatible avec une session fixture (tour live détecté).",
        );
      }
      out.push({ role: "assistant", content: turn.content });
      continue;
    }
    throw new Ops1Error("VALIDATION", "Rôle de tour inconnu dans le journal.");
  }
  return out;
}

/** Validate journal integrity against session mode without building messages. */
export function assertJournalMatchesMode(
  turns: JournalTurn[],
  mode: ConversationMode,
): void {
  for (const turn of turns) {
    if (mode === "live" && turn.role === "assistant_fixture") {
      throw new Ops1Error(
        "CONFLICT",
        "Journal incompatible avec une session live (tour fixture détecté).",
      );
    }
    if (mode === "fixture" && turn.role === "assistant_live") {
      throw new Ops1Error(
        "CONFLICT",
        "Journal incompatible avec une session fixture (tour live détecté).",
      );
    }
  }
}
