/**
 * CR-02 — client-side recovery helpers (no DB, no secrets).
 * sessionStorage pending is a local aid; durable truth stays in D5/D6.
 *
 * ML4C S05 — thread turn qualification reuses owner linguistic qualifiers
 * (qualifyPilotageIntent / qualifyDocumentAct). Never invents authority.
 * Independent dialogue must be positively established — never by exclusion
 * or by a lone "?".
 */

import { qualifyDocumentAct } from "@/domains/conversation/document-act";
import { qualifyPilotageIntent } from "@/domains/pilotage/intent";

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

const PROJECT_CREATE_RE =
  /\b(?:crée|créer|créez|creez|cree|creer)\s+(?:(?:un|une|le|la|ce|cet|the|l)\s+)?(?:autre\s+)?projet\b/i;

/** Effectual publish/merge intent — not explanatory mentions of « commit » / Git vocabulary. */
const PUBLISH_RE =
  /\b(?:publie|publier|publication\s+(?:le|la|ce|sur)|(?:crée|créer)\s+(?:un\s+)?(?:commit|pr|pull\s*request)|(?:ouvre|ouvrir)\s+(?:une\s+)?(?:pr|pull\s*request)|merge\s+(?:la\s+|le\s+)?(?:pr|branche|request))\b/i;

/**
 * Residual operational surface — present when an effect may be intended even if
 * owner CLEAR qualification missed a noisy variant. Never authorizes alone.
 * Not an exhaustive verb allowlist for all future effects.
 */
const RESIDUAL_EFFECT_SURFACE_RE =
  /\b(?:ouvr(?:e|ir|ez|ait|irait)|lance|lancer|démarre|demarre|démarrer|demarrer|publie|publier|crée|créer|créez|creez|autorise|autoriser|accorde|accorder|clôture|cloture|clôturer|cloturer|révoque|revoque|enregistre\s+(?:cette\s+)?décision|je\s+décide|j['']autorise|fais[- ]le|fais(?:\s+ça|\s+le)?|tu\s+peux|peux[- ]tu|peut[- ]on|pourrais[- ]tu|pourrait[- ]on|et\s+si\s+on)\b/i;

/**
 * Positive cognitive / explanatory markers — required to establish
 * DIALOGUE_INDEPENDANT. A lone "?" is never sufficient.
 * Unicode-aware left edge: JS `\b` fails before accented starters (À/à).
 */
const COGNITIVE_INDEPENDENT_RE =
  /(?:^|[^\p{L}\p{N}_])(?:pourquoi|quelle\s+(?:est\s+la\s+)?différence|quelles?\s+sont|à\s+quoi\s+sert|que\s+signifie|que\s+veut\s+dire|explique(?:[- ]moi)?|comment\s+(?:fonctionne|marche)|en\s+quoi|pour\s+quelle\s+raison)\b/iu;

/** Quotation / meta mention of a command (not performing it). */
const META_COMMAND_CITATION_RE =
  /\b(?:que\s+signifie|que\s+veut\s+dire|signifie)\s+(?:la\s+)?(?:commande|formulation|phrase)?\s*['«"]/i;

function hasCompoundEffectAfterExplain(text: string): boolean {
  // « Explique … puis ouvre le cycle » — mixed: not independent.
  return (
    /\b(?:explique|pourquoi|quelle)\b/i.test(text) &&
    /\b(?:puis|ensuite|et)\b[\s\S]{0,80}\b(?:ouvre|ouvrir|publie|crée|créer|lance|démarre)\b/i.test(
      text,
    )
  );
}

/** Explanatory question that evokes an operation without requesting it. */
function isExplanatoryEvocationOfOperation(text: string): boolean {
  return (
    /\bpourquoi\b/i.test(text) &&
    /\b(?:ouvrir|ouvre|publier|créer)\b/i.test(text) &&
    !/\b(?:peux[- ]tu|peut[- ]on|pourrais[- ]tu|fais|lance|démarre)\b/i.test(text) &&
    !/\bje\s+d[eé]cide\b/i.test(text) &&
    !hasCompoundEffectAfterExplain(text)
  );
}

function isMetaCommandCitation(text: string): boolean {
  return (
    META_COMMAND_CITATION_RE.test(text) ||
    (/^que\s+signifie\b/i.test(text) && !/\b(?:puis|ensuite)\b/i.test(text))
  );
}

/**
 * Positive evidence of independent cognitive dialogue.
 * Absence of residual effect signals is NOT evidence of independence.
 */
function isPositivelyIndependentDialogue(text: string): boolean {
  if (hasCompoundEffectAfterExplain(text)) return false;
  if (isMetaCommandCitation(text)) return true;
  if (isExplanatoryEvocationOfOperation(text)) return true;
  if (COGNITIVE_INDEPENDENT_RE.test(text)) return true;
  return false;
}

/**
 * Qualify a thread turn for UX continuity (pending gate / rememberPending).
 * Reuses D5/D6/D4 linguistic owners — does not authorize or execute.
 */
export function qualifyThreadTurn(text: string): ThreadTurnQualification {
  const t = text.trim().replace(/\s+/g, " ");
  if (!t) {
    return { kind: "INCERTAIN", reason: "Énoncé vide", pilotageClarity: "NONE" };
  }

  const documentAct = qualifyDocumentAct(t);
  if (documentAct.kind === "CREATE" || documentAct.kind === "REVISE") {
    return {
      kind: "INTENTION_EFFET",
      reason: `Acte documentaire ${documentAct.kind}`,
      pilotageClarity: "NONE",
    };
  }

  const pilotage = qualifyPilotageIntent(t);
  if (pilotage.clarity === "CLEAR") {
    return {
      kind: "INTENTION_EFFET",
      reason: `Pilotage CLEAR ${pilotage.operation}`,
      pilotageClarity: "CLEAR",
      pilotageOperation: pilotage.operation,
    };
  }
  if (pilotage.clarity === "AMBIGUOUS") {
    return {
      kind: "INCERTAIN",
      reason: pilotage.reason || "Pilotage ambigu",
      pilotageClarity: "AMBIGUOUS",
    };
  }

  if (PROJECT_CREATE_RE.test(t)) {
    return {
      kind: "INTENTION_EFFET",
      reason: "Création de projet",
      pilotageClarity: "NONE",
    };
  }

  // Local publish surface only — do not import mission-continuity (DB) into the browser.
  if (PUBLISH_RE.test(t)) {
    return {
      kind: "INTENTION_EFFET",
      reason: "Publication / merge",
      pilotageClarity: "NONE",
    };
  }

  if (hasCompoundEffectAfterExplain(t)) {
    return {
      kind: "INCERTAIN",
      reason: "Formulation mixte explication + effet",
      pilotageClarity: "NONE",
    };
  }

  // Residual operational vocabulary without CLEAR owner match → uncertain,
  // unless positively established as explanatory / meta.
  if (RESIDUAL_EFFECT_SURFACE_RE.test(t)) {
    if (isPositivelyIndependentDialogue(t)) {
      return {
        kind: "DIALOGUE_INDEPENDANT",
        reason: "Dialogue explicatif/méta positivement établi",
        pilotageClarity: "NONE",
      };
    }
    return {
      kind: "INCERTAIN",
      reason: "Surface opérationnelle sans qualification CLEAR",
      pilotageClarity: pilotage.clarity,
    };
  }

  // Independence only when positively demonstrated — never by lone "?" or exclusion.
  if (isPositivelyIndependentDialogue(t)) {
    return {
      kind: "DIALOGUE_INDEPENDANT",
      reason: "Dialogue cognitif/explicatif positivement établi",
      pilotageClarity: "NONE",
    };
  }

  return {
    kind: "INCERTAIN",
    reason: "Indépendance non établie positivement",
    pilotageClarity: "NONE",
  };
}

/**
 * ML4C S05 / Decision 1 — true only when independence is positively established.
 * Client UX aid only — never an execution authority.
 */
export function looksLikeIndependentDialogue(text: string): boolean {
  return qualifyThreadTurn(text).kind === "DIALOGUE_INDEPENDANT";
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
