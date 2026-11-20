/**
 * CR-02 — client-side recovery helpers (no DB, no secrets).
 * sessionStorage pending is a local aid; durable truth stays in D5/D6.
 *
 * SEM-02 / ML4C: client no longer runs lexical métier routers
 * (qualifyPilotageIntent / qualifyDocumentAct / synonym tables).
 * Prefer an explicit server-derived `nextTurnKind` when available.
 */

/**
 * Local recovery aid only — not a server authority.
 * Additive optional fields are fail-safe when absent (legacy pending).
 */
export type ThreadPendingOrigin = "choice" | "composer";

export type ThreadPendingTurn = {
  content: string;
  clientTurnKey: string;
  clientCommandKey: string;
  /**
   * How the pending attempt was created.
   * Absent ⇒ legacy pending — never clear a free draft on reconcile.
   */
  origin?: ThreadPendingOrigin;
  /**
   * Composer draft version actually submitted (composer path only).
   * Choice attempts leave this null/undefined.
   */
  sentDraftVersion?: number | null;
  projectId?: string;
  pilotId?: string | null;
};

/**
 * Whether reconcile/send ACK may clear the free composer draft.
 * Choice origin and legacy (unknown) origin: never.
 * Composer origin: only when sentDraftVersion is known and still matches.
 */
export function mayClearComposerDraftOnReconcile(input: {
  pending: ThreadPendingTurn;
  currentDraftVersion: number;
}): { clear: false; reason: string } | { clear: true; sentVersion: number } {
  const origin = input.pending.origin;
  if (origin === "choice") {
    return { clear: false, reason: "CHOICE_ORIGIN_PRESERVES_DRAFT" };
  }
  if (origin !== "composer") {
    // Legacy / incomplete metadata — fail-safe: keep draft.
    return { clear: false, reason: "LEGACY_PENDING_FAIL_SAFE" };
  }
  const sent = input.pending.sentDraftVersion;
  if (typeof sent !== "number" || !Number.isFinite(sent) || sent <= 0) {
    return { clear: false, reason: "MISSING_SENT_DRAFT_VERSION" };
  }
  if (input.currentDraftVersion !== sent) {
    return { clear: false, reason: "NEWER_DRAFT_VERSION" };
  }
  return { clear: true, sentVersion: sent };
}

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
 * Durable Nora conversational terminals that close a *cognitive* pending when
 * no métier effect was attempted. UNKNOWN/INTERRUPTED are included so a verified
 * D3 terminal without D7 does not trap the Pilot in a reconcile loop (R05).
 * Métier UNKNOWN remains protected via `effectAttempted === true` below.
 */
export function isDurableCognitiveNoraTerminal(noraStatus?: string | null): boolean {
  const nora = (noraStatus ?? "").trim().toUpperCase();
  return (
    nora === "COMPLETE" ||
    nora === "FAILED" ||
    nora === "UNKNOWN" ||
    nora === "INTERRUPTED"
  );
}

/**
 * Clear pending only when the business effect is terminal, or when no
 * business attempt occurred and Nora reached a conversational terminal.
 * Nora COMPLETE must NOT close an UNKNOWN / unresolved métier effect.
 * Independent dialogue COMPLETE must NOT clear a distinct unresolved métier pending.
 * Cognitive UNKNOWN/INTERRUPTED without D7 effectAttempted MAY clear (R05 recovery).
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
  return isDurableCognitiveNoraTerminal(input.noraStatus);
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
/**
 * CampusNova / ACK-loss corrective (2026-11-19):
 * A 409 TURN_IN_PROGRESS means this clientTurnKey was NOT reserved.
 * Remembering it as pending creates an orphan key → reconcile lookup found:false
 * and a silent 409 loop on « Vérifier et reprendre ».
 */
export function shouldRememberPendingOnSendHttpError(input: {
  httpStatus: number;
  errorCategory?: string | null;
}): boolean {
  const cat = (input.errorCategory ?? "").trim().toUpperCase();
  if (input.httpStatus === 409 && cat === "TURN_IN_PROGRESS") return false;
  return true;
}

export type ThreadMessageForRecovery = {
  role: string;
  content: string;
  status: string;
};

/**
 * When pending.clientTurnKey is orphaned, recover from the durable thread:
 * last matching user message followed by a cognitive terminal assistant.
 */
export function recoverOrphanPendingFromMessages(input: {
  pendingContent: string;
  messages: ThreadMessageForRecovery[];
}): { clear: true; noraStatus: string } | { clear: false } {
  const target = input.pendingContent.trim();
  if (!target || input.messages.length === 0) return { clear: false };

  let lastUserIdx = -1;
  for (let i = input.messages.length - 1; i >= 0; i--) {
    const m = input.messages[i]!;
    if (m.role === "user" && m.content.trim() === target) {
      lastUserIdx = i;
      break;
    }
  }
  if (lastUserIdx < 0) return { clear: false };

  for (let j = lastUserIdx + 1; j < input.messages.length; j++) {
    const m = input.messages[j]!;
    if (m.role !== "assistant") continue;
    if (isDurableCognitiveNoraTerminal(m.status)) {
      return { clear: true, noraStatus: m.status.trim().toUpperCase() };
    }
    break;
  }
  return { clear: false };
}

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
