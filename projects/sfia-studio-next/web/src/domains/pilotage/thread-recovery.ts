/**
 * CR-02 — client-side recovery helpers (no DB, no secrets).
 * sessionStorage pending is a local aid; durable truth stays in D5/D6.
 */

import { qualifyDocumentAct } from "@/domains/conversation/document-act";

export type ThreadPendingTurn = {
  content: string;
  clientTurnKey: string;
  clientCommandKey: string;
};

const PROJECT_CREATE_RE = /\b(?:crée|créer|créez)\s+(?:un\s+)?projet\b/i;
/** Effectual publish/merge intent — not explanatory mentions of « commit » / Git vocabulary. */
const PUBLISH_RE =
  /\b(?:publie|publier|publication\s+(?:le|la|ce|sur)|(?:crée|créer)\s+(?:un\s+)?(?:commit|pr|pull\s*request)|(?:ouvre|ouvrir)\s+(?:une\s+)?(?:pr|pull\s*request)|merge\s+(?:la\s+|le\s+)?(?:pr|branche|request))\b/i;
const PILOTAGE_SIGNAL_RE =
  /\b(?:je\s+décide|j['']autorise|ouvre\s+(?:un\s+)?cycle|enregistre\s+(?:cette\s+)?décision)\b/i;

/**
 * ML4C S05 / Decision 1 — independent cognitive turn (no D2/D4/D6/D9 effect intent).
 * Does not authorize or replace an unresolved métier pending.
 */
export function looksLikeIndependentDialogue(text: string): boolean {
  const t = text.trim();
  if (!t) return false;
  if (qualifyDocumentAct(t).kind !== "NONE") return false;
  if (PROJECT_CREATE_RE.test(t)) return false;
  if (PUBLISH_RE.test(t)) return false;
  if (PILOTAGE_SIGNAL_RE.test(t)) return false;
  return true;
}

/** Deterministic business key for a conversational turn. */
export function conversationalClientCommandKey(clientTurnKey: string): string {
  return `conv-auth:${clientTurnKey.trim()}`;
}

export function pendingStorageKey(projectId: string): string {
  return `sfia.thread.pending:${projectId}`;
}

/**
 * Clear pending only when the business effect is terminal, or when no
 * business attempt occurred and Nora reached a conversational terminal.
 * Nora COMPLETE must NOT close an UNKNOWN / unresolved métier effect.
 */
export function shouldClearThreadPending(input: {
  noraStatus?: string | null;
  effectAttempted?: boolean | null;
  effectStatus?: string | null;
}): boolean {
  const biz = (input.effectStatus ?? "").trim().toUpperCase();
  if (input.effectAttempted === true) {
    if (!biz || biz === "UNKNOWN" || biz.startsWith("UNKNOWN")) return false;
    return true;
  }
  const nora = (input.noraStatus ?? "").trim().toUpperCase();
  return nora === "COMPLETE" || nora === "FAILED";
}

/**
 * Exclusive in-flight guard: a distinct new act must not silently overwrite
 * an unresolved pending. Same content ⇒ retry of the same logical act.
 * Independent dialogue (Decision 1) may proceed without replacing pending.
 */
export function mayStartNewThreadAct(input: {
  unresolved: ThreadPendingTurn | null | undefined;
  nextContent: string;
  /** When true, allow a cognitive question without overwriting métier pending. */
  nextIsIndependentDialogue?: boolean;
}): { ok: true } | { ok: false; reason: string; pending: ThreadPendingTurn } {
  const pending = input.unresolved;
  if (!pending) return { ok: true };
  if (pending.content.trim() === input.nextContent.trim()) return { ok: true };
  if (input.nextIsIndependentDialogue) return { ok: true };
  return {
    ok: false,
    reason:
      "Tentative non résolue en cours — réconcilier avant un nouvel acte distinct",
    pending,
  };
}
