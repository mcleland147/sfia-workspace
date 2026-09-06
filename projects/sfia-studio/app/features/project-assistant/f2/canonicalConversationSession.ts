/**
 * CORR-PROOF-01 D1 — canonical ProductSqliteSession conversational SoT helpers.
 *
 * D1 one-turn persistence lifecycle:
 * 1. Load Session with Memory B replay semantics (read-only for analysis).
 * 2. Non-durable: analyzeIntent + MW5 derive — never written as drafts.
 * 3. Exactly ONE user-visible assistant response.
 * 4. That response is persisted once — F1 Runner OR F2 persist-and-return.
 *
 * CR-01: prior CLARIFY ≠ uncertainty resolved.
 * CR-03: analysis context uses loadSessionRows + resolveReplayItems (F1 parity).
 * CR-04: AVAILABLE / EMPTY / UNAVAILABLE — never conflate empty with unavailable.
 */

import type { AgentInputItem } from "@openai/agents";
import {
  ProductSqliteSession,
  assistantTextItem,
  userTextItem,
} from "@/lib/nora-cognitive-runtime/productSqliteSession";
import { resolveNoraSessionSqlitePath } from "@/lib/nora-cognitive-runtime/sessionPaths";
import {
  loadSessionRows,
  resolveReplayItems,
  type TruthCRevision,
} from "@/lib/nora-cognitive-runtime/memoryBCompaction";

/** Must match F1 / runNoraCognitiveTurn default sessionKey — single SoT. */
export const CANONICAL_CONVERSATION_SESSION_KEY = "f1-default";

const MAX_CONTEXT_MESSAGES = 12;
const MAX_CONTEXT_CHARS = 8000;

/** Test-only — next loadCanonicalConversationForAnalysis returns UNAVAILABLE. */
let forceNextUnavailableForTests = false;

export function simulateNextCanonicalConversationUnavailableForTests(): void {
  forceNextUnavailableForTests = true;
}

export type CanonicalConversationTurn = {
  role: "user" | "assistant";
  content: string;
};

export type CanonicalConversationAvailability =
  | "available"
  | "empty"
  | "unavailable";

export type CanonicalConversationLoadResult = {
  availability: CanonicalConversationAvailability;
  /** Bounded text for analyzeIntent; empty when EMPTY or UNAVAILABLE. */
  contextText: string;
  replayItems: AgentInputItem[];
  /** Present when availability === "unavailable". */
  message?: string;
};

export function extractCanonicalTextFromItem(
  item: AgentInputItem,
): CanonicalConversationTurn | null {
  if (!item || typeof item !== "object") return null;
  const rec = item as {
    type?: string;
    role?: string;
    content?: unknown;
  };
  if (rec.type !== "message") return null;
  if (rec.role !== "user" && rec.role !== "assistant") return null;

  let content = "";
  if (typeof rec.content === "string") {
    content = rec.content.trim();
  } else if (Array.isArray(rec.content)) {
    const texts: string[] = [];
    for (const part of rec.content) {
      if (!part || typeof part !== "object") continue;
      const p = part as { type?: string; text?: string };
      if (
        (p.type === "input_text" ||
          p.type === "output_text" ||
          p.type === "text") &&
        typeof p.text === "string" &&
        p.text.trim()
      ) {
        texts.push(p.text.trim());
      }
    }
    content = texts.join("\n").trim();
  }
  if (!content) return null;
  return { role: rec.role, content };
}

export function formatCanonicalConversationForAnalysis(
  items: readonly AgentInputItem[],
): string {
  const turns = items
    .map(extractCanonicalTextFromItem)
    .filter((t): t is CanonicalConversationTurn => t != null)
    .slice(-MAX_CONTEXT_MESSAGES);
  if (turns.length === 0) return "";
  let block = turns
    .map((t) => `${t.role === "user" ? "Pilote" : "Nora"}: ${t.content}`)
    .join("\n\n");
  if (block.length > MAX_CONTEXT_CHARS) {
    block = `…\n${block.slice(-MAX_CONTEXT_CHARS)}`;
  }
  return block;
}

/**
 * Server-owned session open. Caller MUST close().
 * Does not import client history.
 */
export function openCanonicalConversationSession(input: {
  projectId: string;
  sessionDbPath?: string;
}): ProductSqliteSession {
  const dbPath = resolveNoraSessionSqlitePath(input.sessionDbPath);
  return new ProductSqliteSession({
    projectId: input.projectId,
    dbPath,
    sessionKey: CANONICAL_CONVERSATION_SESSION_KEY,
  });
}

/**
 * Read-only canonical conversation for analyzeIntent.
 * Uses existing Memory B replay (compaction summary + recent) for Truth C revision.
 * Does not mutate Session / does not apply compaction.
 */
export async function loadCanonicalConversationForAnalysis(input: {
  projectId: string;
  sessionDbPath?: string;
  truthCRevision: TruthCRevision;
}): Promise<CanonicalConversationLoadResult> {
  if (forceNextUnavailableForTests) {
    forceNextUnavailableForTests = false;
    return {
      availability: "unavailable",
      contextText: "",
      replayItems: [],
      message:
        "Continuité conversationnelle indisponible (Session: SESSION_RETRIEVAL_ERROR). Aucune invention de contexte. AUCUNE EXÉCUTION.",
    };
  }
  let session: ProductSqliteSession | null = null;
  try {
    session = openCanonicalConversationSession({
      projectId: input.projectId,
      sessionDbPath: input.sessionDbPath,
    });
    // Probe retrieval path (honors simulateNextRetrievalFailure) before row load.
    await session.getItems();
    const loaded = await loadSessionRows(session);
    const replay = resolveReplayItems({
      loaded,
      currentTruthCRevision: input.truthCRevision,
    });
    const contextText = formatCanonicalConversationForAnalysis(replay.items);
    if (replay.items.length === 0 && !contextText) {
      return {
        availability: "empty",
        contextText: "",
        replayItems: [],
      };
    }
    return {
      availability: "available",
      contextText,
      replayItems: replay.items,
    };
  } catch (error) {
    const detail =
      error instanceof Error ? error.message : "session_retrieval_failed";
    return {
      availability: "unavailable",
      contextText: "",
      replayItems: [],
      message: `Continuité conversationnelle indisponible (Session: ${detail}). Aucune invention de contexte. AUCUNE EXÉCUTION.`,
    };
  } finally {
    if (session) {
      try {
        session.close();
      } catch {
        /* ignore */
      }
    }
  }
}

/**
 * Persist exactly one user + one assistant as the canonical turn.
 * Used when F2 surfaces the user-visible response without F1 Runner.
 */
export async function appendCanonicalConversationTurn(input: {
  session: ProductSqliteSession;
  userText: string;
  assistantText: string;
}): Promise<void> {
  const user = input.userText.trim();
  const assistant = input.assistantText.trim();
  if (!user || !assistant) {
    throw new Error("D1_CANONICAL_TURN_REQUIRES_USER_AND_ASSISTANT");
  }
  await input.session.addItems([
    userTextItem(user),
    assistantTextItem(assistant),
  ]);
}

export async function persistCanonicalF2AssistantTurn(input: {
  projectId: string;
  sessionDbPath?: string;
  userText: string;
  assistantText: string;
}): Promise<void> {
  const session = openCanonicalConversationSession({
    projectId: input.projectId,
    sessionDbPath: input.sessionDbPath,
  });
  try {
    await appendCanonicalConversationTurn({
      session,
      userText: input.userText,
      assistantText: input.assistantText,
    });
  } finally {
    session.close();
  }
}

export function countCanonicalUserAssistantPairs(
  items: readonly AgentInputItem[],
): { users: number; assistants: number } {
  let users = 0;
  let assistants = 0;
  for (const item of items) {
    const turn = extractCanonicalTextFromItem(item);
    if (!turn) continue;
    if (turn.role === "user") users += 1;
    else assistants += 1;
  }
  return { users, assistants };
}
