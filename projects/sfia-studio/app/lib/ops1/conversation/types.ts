/**
 * TEMP_OPS1_PLATFORM_WRAPPER — re-export from shared platform.
 * Remove when no OPS1 consumer imports this path (Phase 6 cleanup gate).
 * Do not add generic logic here. Do not import from D1.
 */

export type {
  ConversationProvider,
  ProviderChatMessage,
  ProviderChatRole,
  ProviderCompletionResult,
  ProviderInputItem,
  ProviderRoundResult,
  ProviderToolCall,
  ProviderUsage,
} from "@/lib/platform/ai/types";
export { messagesToInputItems } from "@/lib/platform/ai/types";

import type { ConversationMode, JournalTurn } from "../types";
import { Ops1Error } from "../errors";
import type { ProviderChatMessage } from "@/lib/platform/ai/types";

/**
 * Map local journal turns into ordered provider context.
 * OPS1-domain helper — stays in OPS1 (session journal roles).
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
