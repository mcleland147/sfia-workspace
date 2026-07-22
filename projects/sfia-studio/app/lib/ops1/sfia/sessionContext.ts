/**
 * Per-session SFIA context store (immutable per turn; revalidated by HEAD).
 */
import { createEventId } from "../ids";
import { openOps1Db, nowIsoWithOffset } from "../db";
import type { SessionEventType } from "../types";
import { resolveWorkspaceRootFromAppCwd } from "../allowlistEvaluation";
import {
  isContextStale,
  resolveSfiaCanonicalContext,
  serializeContextForModel,
} from "./contextResolver";
import type { SfiaCanonicalContext } from "./types";

const sessionContexts = new Map<string, SfiaCanonicalContext>();

function emit(
  sessionId: string,
  type: SessionEventType,
  detail: Record<string, unknown>,
): void {
  const db = openOps1Db();
  db.prepare(
    `INSERT INTO session_events (event_id, session_id, type, created_at, detail)
     VALUES (?, ?, ?, ?, ?)`,
  ).run(
    createEventId(),
    sessionId,
    type,
    nowIsoWithOffset(),
    JSON.stringify(detail),
  );
}

export function getStoredSfiaContext(
  sessionId: string,
): SfiaCanonicalContext | null {
  return sessionContexts.get(sessionId) ?? null;
}

export function ensureSfiaContext(input: {
  sessionId: string;
  workspaceRoot?: string;
  forceRefresh?: boolean;
}): SfiaCanonicalContext {
  const workspaceRoot =
    input.workspaceRoot ?? resolveWorkspaceRootFromAppCwd();
  const existing = sessionContexts.get(input.sessionId);
  if (
    existing &&
    !input.forceRefresh &&
    !isContextStale({ context: existing, workspaceRoot })
  ) {
    return existing;
  }

  emit(input.sessionId, "SFIA_CONTEXT_LOADING", {
    forceRefresh: Boolean(input.forceRefresh),
    previousContextId: existing?.contextId ?? null,
  });

  try {
    const context = resolveSfiaCanonicalContext({
      workspaceRoot,
      sessionId: input.sessionId,
    });
    for (const src of context.sourceDocuments) {
      emit(input.sessionId, "SFIA_SOURCE_READ", {
        path: src.path,
        digest: src.digest,
        blobSha: src.blobSha,
        role: src.role,
        sizeBytes: src.sizeBytes,
      });
    }
    sessionContexts.set(input.sessionId, context);
    emit(input.sessionId, "SFIA_CONTEXT_READY", {
      contextId: context.contextId,
      headSha: context.headSha,
      sourceCount: context.sourceDocuments.length,
    });
    return context;
  } catch (error) {
    emit(input.sessionId, "SFIA_CONTEXT_FAILED", {
      error: error instanceof Error ? error.message : "unknown",
    });
    throw error;
  }
}

export function buildSfiaSystemPreamble(context: SfiaCanonicalContext): string {
  return [
    "Tu opères dans SFIA Studio Control Tower avec un contexte SFIA canonique.",
    "Tu proposes uniquement. Morris décide. Aucune exécution sans GO UI.",
    "Interdit: commit, push, PR, merge, shell, branches arbitraires, prompt Cursor libre.",
    "Après ta réponse utilisateur courte, inclus UN objet JSON SfiaActionProposal dans ```json.",
    "Contexte structuré:",
    serializeContextForModel(context),
  ].join("\n");
}

export function clearSfiaContextForTests(sessionId?: string): void {
  if (sessionId) sessionContexts.delete(sessionId);
  else sessionContexts.clear();
}
