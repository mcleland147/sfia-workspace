/**
 * CR-02 — client-side recovery helpers (no DB, no secrets).
 * sessionStorage pending is a local aid; durable truth stays in D5/D6.
 *
 * SEM-02 / ML4C: client no longer runs lexical métier routers
 * (qualifyPilotageIntent / qualifyDocumentAct / synonym tables).
 * Prefer an explicit server-derived `nextTurnKind` when available.
 */

export type ThreadPendingTurn = {
  content: string;
  clientTurnKey: string;
  clientCommandKey: string;
};

/**
 * Qualification categories for a conversational turn over an optional pending.
 * Not a métier state machine — linguistic triage only.
 */
export type ThreadTurnKind =
  | "DIALOGUE_INDEPENDANT"
  | "INTENTION_EFFET"
  | "INCERTAIN";

export type ThreadTurnQualification = {
  kind: ThreadTurnKind;
  reason: string;
  /** Owner pilotage clarity when consulted (never an execution grant). */
  pilotageClarity?: "CLEAR" | "AMBIGUOUS" | "NONE";
  pilotageOperation?: string;
};

/**
 * Qualify a thread turn for UX continuity (pending gate / rememberPending).
 * SEM-02: fail closed — no client lexical métier router.
 */
export function qualifyThreadTurn(text: string): ThreadTurnQualification {
  const t = text.trim().replace(/\s+/g, " ");
  if (!t) {
    return { kind: "INCERTAIN", reason: "Énoncé vide", pilotageClarity: "NONE" };
  }
  return {
    kind: "INCERTAIN",
    reason: "CLIENT_NO_LEXICAL_ROUTER — server semantic qualification owns coexistence",
    pilotageClarity: "NONE",
  };
}

/**
 * ML4C S05 / Decision 1 — independence only when positively established by the server.
 * Client lexical path removed (SEM-02).
 */
export function looksLikeIndependentDialogue(_text: string): boolean {
  return false;
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
 * Independent dialogue COMPLETE must NOT clear a distinct unresolved métier pending.
 */
export function shouldClearThreadPending(input: {
  noraStatus?: string | null;
  effectAttempted?: boolean | null;
  effectStatus?: string | null;
  /** True when this COMPLETE belongs to an independent turn over pending A. */
  preserveUnresolvedMetierPending?: boolean;
}): boolean {
  if (input.preserveUnresolvedMetierPending) return false;
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
 * Only positively established independent dialogue may proceed without
 * replacing pending. INCERTAIN and INTENTION_EFFET stay blocked.
 *
 * `nextIsIndependentDialogue` alone never establishes independence — when
 * `nextTurnKind` is omitted, content is re-qualified.
 */
export function mayStartNewThreadAct(input: {
  unresolved: ThreadPendingTurn | null | undefined;
  nextContent: string;
  /**
   * Legacy hint — ignored as authority. Independence is always derived from
   * `nextTurnKind` or `qualifyThreadTurn(nextContent)`.
   */
  nextIsIndependentDialogue?: boolean;
  /** Preferred: full turn kind (INCERTAIN never bypasses pending). */
  nextTurnKind?: ThreadTurnKind;
}): { ok: true } | { ok: false; reason: string; pending: ThreadPendingTurn } {
  const pending = input.unresolved;
  if (!pending) return { ok: true };
  if (pending.content.trim() === input.nextContent.trim()) return { ok: true };

  const kind = input.nextTurnKind ?? qualifyThreadTurn(input.nextContent).kind;

  if (kind === "DIALOGUE_INDEPENDANT") return { ok: true };

  if (kind === "INCERTAIN") {
    return {
      ok: false,
      reason:
        "Intention incertaine pendant une tentative non résolue — clarifier ou réconcilier avant un nouvel acte",
      pending,
    };
  }

  return {
    ok: false,
    reason:
      "Tentative non résolue en cours — réconcilier avant un nouvel acte distinct",
    pending,
  };
}
