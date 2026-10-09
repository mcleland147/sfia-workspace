/**
 * P6-HQA-COG-01 / CORRECTION PASS 02 — pilot-facing F2 narrative composition.
 *
 * Deterministic seam for F2 proposal turns:
 * - interpret Pilot stance (structured pilotDecisionCandidate first, lexical fail-closed);
 * - R1: accept on recommendation/presented subject ≠ accept_start without explicit start intent;
 * - R2: conversation history is CONTEXT ONLY — Product CURRENT continuity requires verified subject;
 * - compose proportionate narrative from Product truth.
 *
 * Non-authoritative: never invents HumanDecision / Confirmation / activation / execution.
 * Not a second LLM call. Not a new cognitive architecture.
 */

import type {
  PilotDecisionCandidate,
  PilotDecisionDisposition,
  PilotDecisionTargetKind,
} from "./types";

export type F2PilotNarrativeKind =
  | "new_cycle_proposal"
  | "active_cycle_deliverable_proposal";

export type F2PilotNarrativeHistoryMessage = {
  readonly role: string;
  readonly content: string;
};

/** Situational stance — understanding before wording. */
export type PilotNarrativeStanceKind =
  | "accept_start"
  /** Accept of recommendation / presented subject — NOT cycle start. */
  | "accept_recommendation"
  | "refuse_start"
  | "defer_start"
  | "question_status"
  | "confirm_other_subject"
  | "refuse_proposal"
  | "amend_request"
  | "neutral_propose"
  | "ambiguous";

export type PilotNarrativeStance = {
  readonly kind: PilotNarrativeStanceKind;
  /** structured = pilotDecisionCandidate; lexical = fail-closed text cues; none = default. */
  readonly source: "structured" | "lexical" | "none";
};

/**
 * Continuity classes (CP02):
 * - same_subject_product_current: Product-verified current subject only
 * - same_subject_history_hint: textual history hint — NOT Product CURRENT
 * - other_subject / refused_or_stale_hint / none
 */
export type HistoryContinuityKind =
  | "same_subject_product_current"
  | "same_subject_history_hint"
  | "other_subject"
  | "refused_or_stale_hint"
  | "none";

export type HistoryContinuity = {
  readonly kind: HistoryContinuityKind;
};

export type ComposeF2PilotFacingNarrativeInput = {
  readonly kind: F2PilotNarrativeKind;
  readonly presentation: "test_provider" | "openai_live";
  readonly userContent: string;
  readonly history?: readonly F2PilotNarrativeHistoryMessage[];
  readonly intentClass: string;
  readonly objective: string | null | undefined;
  readonly rephrasedRequest: string | null | undefined;
  readonly cycleLabel: string | null | undefined;
  readonly recommendedProfile: string | null | undefined;
  readonly recommendationLabel: string | null | undefined;
  readonly ckcCognitiveRecommendation: string | null | undefined;
  readonly projectName: string | null | undefined;
  readonly projectObjective: string | null | undefined;
  readonly activeCycleInstanceId: string | null | undefined;
  readonly lpsUnchanged: boolean;
  readonly morrisGateRequired: boolean;
  readonly executionBlocked: boolean;
  readonly mw5Disposition: string | null | undefined;
  readonly mw5EscalatePiloteText: string | null | undefined;
  /**
   * NON-AUTHORITATIVE structured disposition from intent analysis.
   * Never a HumanDecision; preferred over lexical cues when present.
   */
  readonly pilotDecisionCandidate?: PilotDecisionCandidate | null;
  /**
   * @deprecated CP02 — current-turn proposalStatus is NOT historical currentness.
   * Kept for call-site compat; ignored by assessHistoryContinuity.
   */
  readonly proposalStatus?: string | null;
  /**
   * R2 — ONLY when an existing Product contract has verified the decision
   * subject as CURRENT for this turn. History alone never sets this.
   * Default / absent = false (fail-closed).
   */
  readonly productCurrentSubjectVerified?: boolean;
  /**
   * Optional Product status of a verified PRIOR/current subject (not the
   * newly minted proposal of this turn). Used only with Product evidence.
   */
  readonly priorSubjectStatus?: string | null;
};

const ENGINE_LEAK_RE =
  /CONTINUE\s*[—–-]\s*cognition propose-only|READY_NO_GATE|TEMPORARY WITH EXIT|\[MW5|AUCUNE EXÉCUTION\s*[—–-]\s*ZERO|F2 s'arrête|Qualification SFIA et proposition structurée|RECOMMANDATION\s*[—–-]\s*PAS UNE DÉCISION HUMAINE/i;

const QUESTION_CUE_RE =
  /(\?|^\s*(est-ce que|peux-tu|pouvez-vous|peux tu|pourrais-tu|comment|pourquoi)\b)/i;

const NEGATION_START_RE =
  /\b(ne\s+(?:me\s+)?(?:démarre|lance|active)[^\n.!?]{0,40}\s+pas|\bne\s+[^\n.!?]{0,40}\bpas\b[^\n.!?]{0,40}\b(d[eé]marr|lanc|activ)|\bsurtout\s+pas\b|\bje\s+ne\s+veux\s+pas\b|\bne\s+veux\s+pas\b|\brefuse\b|\binacceptable\b|\bn['']est\s+pas\s+acceptable\b)/i;

const DEFER_RE =
  /\b(pr[eé]f[eè]re\s+attendre|attendre\s+avant|plus\s+tard|pas\s+maintenant|ajourn)/i;

const OTHER_CONFIRM_RE =
  /\bconfirm\w*\b[^\n.!?]{0,80}\b(date|livrable|deadline|échéance|horaire)\b|\b(date|livrable|deadline|échéance)\b[^\n.!?]{0,80}\bconfirm/i;

const CLEAR_ACCEPT_START_RE =
  /\b(j['’]?accepte\s+de\s+(d[eé]marrer|lancer|activer)|je\s+confirm\w*\s+(explicitement\s+)?(le\s+)?(d[eé]marrage|lancement|activation)|d[eé]marrage\s+effectif|je\s+(veux|souhaite)\s+(d[eé]marrer|lancer|activer))\b/i;

const REFUSE_PROPOSAL_RE =
  /\b(proposition\s+n['’]?est\s+pas\s+acceptable|je\s+refuse\s+(cette\s+)?(proposition|recommandation)|pas\s+acceptable)\b/i;

function normalizeLabel(label: string | null | undefined): string {
  return (label ?? "").trim().toLowerCase();
}

/** Catalog labels like "Delivery / implémentation" must match user "Delivery". */
function labelsReferToSameCycle(
  a: string | null | undefined,
  b: string | null | undefined,
): boolean {
  const na = normalizeLabel(a);
  const nb = normalizeLabel(b);
  if (!na || !nb) return false;
  if (na === nb) return true;
  if (na.includes(nb) || nb.includes(na)) return true;
  const ta = na.split(/[\s/=_|-]+/).find(Boolean) ?? "";
  const tb = nb.split(/[\s/=_|-]+/).find(Boolean) ?? "";
  return Boolean(ta && tb && ta === tb);
}

function cyclePhrase(label: string | null | undefined): string {
  const c = (label ?? "").trim();
  return c ? `« ${c} »` : "ce cycle";
}

function intentFocus(input: ComposeF2PilotFacingNarrativeInput): string | null {
  const fromIntent =
    (input.rephrasedRequest ?? "").trim() ||
    (input.objective ?? "").trim() ||
    (input.projectObjective ?? "").trim();
  if (!fromIntent) return null;
  const oneLine = fromIntent.replace(/\s+/g, " ").trim();
  return oneLine.length > 160 ? `${oneLine.slice(0, 157)}…` : oneLine;
}

function scrubCognitiveSnippet(text: string | null | undefined): string | null {
  const raw = (text ?? "").trim();
  if (!raw) return null;
  if (!ENGINE_LEAK_RE.test(raw)) return raw;
  const cleaned = raw
    .replace(/CONTINUE\s*[—–-]\s*cognition propose-only[^.]*\.?/gi, "")
    .replace(/\bREADY_NO_GATE\b/gi, "")
    .replace(/\[MW5[^\]]*\]/gi, "")
    .replace(/\s{2,}/g, " ")
    .trim();
  return cleaned.length > 0 ? cleaned : null;
}

function messageMentionsCycle(
  content: string,
  cycleLabel: string | null | undefined,
): boolean {
  const label = normalizeLabel(cycleLabel);
  if (!label) return false;
  if (new RegExp(label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i").test(content)) {
    return true;
  }
  const token = label.split(/[\s/=_|-]+/).find(Boolean);
  if (!token || token.length < 3) return false;
  return new RegExp(`\\b${token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i").test(
    content,
  );
}

/** Known Studio cycle labels for mismatch checks (quoted or bare). Not a NLU engine. */
const KNOWN_CYCLE_LABELS = [
  "delivery",
  "cadrage",
  "clarification",
  "décision",
  "decision",
  "exploration",
  "qualification",
  "capitalisation",
  "capitalization",
] as const;

function extractQuotedLabels(content: string): string[] {
  const out: string[] = [];
  const re = /«\s*([^»]+?)\s*»/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(content))) {
    const v = (m[1] ?? "").trim();
    if (v) out.push(v);
  }
  return out;
}

/**
 * Relates a named cycle in start-intent prose to the subject cycleLabel.
 * Uses quoted labels + known bare cycle names after démarrage/lancer — not open regex NLU.
 */
export function resolveNamedCycleRelativeToSubject(
  text: string,
  cycleLabel: string | null | undefined,
): "match" | "mismatch" | "unspecified" {
  const label = normalizeLabel(cycleLabel);
  const quoted = extractQuotedLabels(text).map((q) => normalizeLabel(q));
  if (quoted.length > 0) {
    if (label && quoted.some((q) => labelsReferToSameCycle(q, label))) {
      return "match";
    }
    if (
      quoted.some(
        (q) =>
          q &&
          !labelsReferToSameCycle(q, label) &&
          (KNOWN_CYCLE_LABELS as readonly string[]).includes(q),
      )
    ) {
      return "mismatch";
    }
  }
  // Prefer "… démarrage de Delivery" / "… du cycle Delivery" over capturing "cycle".
  const namedCycle = text.match(
    /(?:d[eé]marrage|lancement|activation|d[eé]marrer|lancer|activer)(?:\s+(?:de|du|d['’])?\s*(?:cycle\s+)?)([A-Za-zÀ-ÿ][A-Za-zÀ-ÿ-]*)/i,
  );
  if (namedCycle?.[1]) {
    const named = normalizeLabel(namedCycle[1]);
    if (named === "cycle") {
      // keep scanning — bare "cycle" is not a type name
    } else if (label && labelsReferToSameCycle(named, label)) {
      return "match";
    } else if (
      (KNOWN_CYCLE_LABELS as readonly string[]).includes(named) &&
      !labelsReferToSameCycle(named, label)
    ) {
      return "mismatch";
    }
  }
  if (label && CLEAR_ACCEPT_START_RE.test(text)) {
    for (const k of KNOWN_CYCLE_LABELS) {
      if (labelsReferToSameCycle(k, label)) continue;
      if (new RegExp(`\\b${k}\\b`, "i").test(text)) return "mismatch";
    }
    // User said "Delivery" and catalog label contains Delivery → match.
    if (messageMentionsCycle(text, cycleLabel)) return "match";
  }
  return "unspecified";
}

/**
 * Centralized evaluation of an explicit START cue for THIS subject cycle.
 * Shared by structured accept and lexical paths — late negation/defer/question
 * after a positive cue always wins (fail-closed). Structured accept is NOT
 * authoritative when the Pilot's text contradicts it.
 */
export function evaluateExplicitStartForSubject(
  text: string,
  cycleLabel: string | null | undefined,
):
  | "accept_start"
  | "refuse_start"
  | "defer_start"
  | "question_status"
  | "ambiguous"
  | "none" {
  const raw = text ?? "";
  if (!CLEAR_ACCEPT_START_RE.test(raw)) return "none";

  const acceptMatch = CLEAR_ACCEPT_START_RE.exec(raw);
  const after = raw.slice(
    (acceptMatch?.index ?? 0) + (acceptMatch?.[0].length ?? 0),
  );
  // Defer before refuse-late so "mais pas maintenant" stays defer, not refuse.
  if (DEFER_RE.test(after)) return "defer_start";
  if (
    NEGATION_START_RE.test(after) ||
    REFUSE_PROPOSAL_RE.test(after) ||
    /\b(mais|puis|ensuite|finalement)\b[\s\S]{0,48}\b(non|refuse|pas\s+(ça|cela|demarrer|démarrer))\b/i.test(
      after,
    )
  ) {
    return "refuse_start";
  }
  if (QUESTION_CUE_RE.test(after)) return "question_status";

  // Whole-text fail-closed (covers "finalement non" overlapping accept span).
  if (DEFER_RE.test(raw) && /\b(d[eé]marr|lanc|activ|delivery)\b/i.test(raw)) {
    return "defer_start";
  }
  if (NEGATION_START_RE.test(raw) || REFUSE_PROPOSAL_RE.test(raw)) {
    return "refuse_start";
  }
  if (
    QUESTION_CUE_RE.test(raw) &&
    /\b(d[eé]marr|activ|lanc|cycle\s+n['’]?est|pas\s+actif)\b/i.test(raw)
  ) {
    return "question_status";
  }

  const rel = resolveNamedCycleRelativeToSubject(raw, cycleLabel);
  if (rel === "mismatch") return "ambiguous";
  if (rel === "match" || rel === "unspecified") return "accept_start";
  return "none";
}

/** Explicit start intent for THIS subject cycle (lexical cue + cycle match). */
export function hasExplicitStartIntentForSubject(
  text: string,
  cycleLabel: string | null | undefined,
): boolean {
  return evaluateExplicitStartForSubject(text, cycleLabel) === "accept_start";
}

/**
 * Structured-first stance. Lexical path is fail-closed: negation / question /
 * other-subject confirmation never become accept_start.
 * R1: structured accept on recommendation ≠ accept_start without explicit start.
 */
export function interpretPilotNarrativeStance(input: {
  readonly userContent: string;
  readonly cycleLabel?: string | null;
  readonly pilotDecisionCandidate?: PilotDecisionCandidate | null;
}): PilotNarrativeStance {
  const text = (input.userContent ?? "").trim();
  const candidate = input.pilotDecisionCandidate ?? null;

  if (candidate) {
    const fromStructured = stanceFromStructuredCandidate(
      candidate,
      text,
      input.cycleLabel,
    );
    if (fromStructured) return fromStructured;
  }

  return stanceFromLexicalCues(text, input.cycleLabel);
}

function stanceFromStructuredCandidate(
  candidate: PilotDecisionCandidate,
  userText: string,
  cycleLabel: string | null | undefined,
): PilotNarrativeStance | null {
  const d: PilotDecisionDisposition = candidate.disposition;
  const t: PilotDecisionTargetKind = candidate.targetKind;

  if (d === "refuse") {
    return { kind: "refuse_start", source: "structured" };
  }
  if (d === "defer") {
    return { kind: "defer_start", source: "structured" };
  }
  if (d === "amend") {
    return { kind: "amend_request", source: "structured" };
  }
  if (d === "ambiguous") {
    return { kind: "ambiguous", source: "structured" };
  }
  if (d === "none") {
    // Explicit "no disposition on a governed subject" — do not invent accept.
    return null;
  }
  if (d === "accept") {
    // Accept of an alternative / ambiguous target is not cycle-start agreement.
    if (t === "specific_alternative" || t === "ambiguous") {
      return { kind: "ambiguous", source: "structured" };
    }
    // Text contradictions override structured accept (informative, not authoritative).
    if (OTHER_CONFIRM_RE.test(userText)) {
      return { kind: "confirm_other_subject", source: "lexical" };
    }
    const explicit = evaluateExplicitStartForSubject(userText, cycleLabel);
    if (explicit === "refuse_start") {
      return { kind: "refuse_start", source: "lexical" };
    }
    if (explicit === "defer_start") {
      return { kind: "defer_start", source: "lexical" };
    }
    if (explicit === "question_status") {
      return { kind: "question_status", source: "lexical" };
    }
    if (explicit === "ambiguous") {
      return { kind: "ambiguous", source: "lexical" };
    }
    // Whole-text question / refuse without CLEAR_ACCEPT still block START.
    if (QUESTION_CUE_RE.test(userText)) {
      return { kind: "question_status", source: "lexical" };
    }
    if (NEGATION_START_RE.test(userText) || REFUSE_PROPOSAL_RE.test(userText)) {
      return { kind: "refuse_start", source: "lexical" };
    }
    if (DEFER_RE.test(userText) && /\b(d[eé]marr|lanc|activ|delivery)\b/i.test(userText)) {
      return { kind: "defer_start", source: "lexical" };
    }
    // R1 — accept recommendation/presented subject ≠ start unless explicit start for THIS cycle.
    if (
      t === "current_recommendation" ||
      t === "presented_subject"
    ) {
      if (explicit === "accept_start") {
        return { kind: "accept_start", source: "structured" };
      }
      return { kind: "accept_recommendation", source: "structured" };
    }
    return { kind: "ambiguous", source: "structured" };
  }
  return null;
}

function stanceFromLexicalCues(
  text: string,
  cycleLabel: string | null | undefined,
): PilotNarrativeStance {
  if (!text) return { kind: "neutral_propose", source: "none" };

  // Questions about activation/status never become agreement.
  if (QUESTION_CUE_RE.test(text)) {
    if (
      /\b(d[eé]marr|activ|lanc|cycle\s+n['’]?est|pas\s+actif)\b/i.test(text)
    ) {
      return { kind: "question_status", source: "lexical" };
    }
  }

  if (REFUSE_PROPOSAL_RE.test(text)) {
    return { kind: "refuse_proposal", source: "lexical" };
  }

  if (NEGATION_START_RE.test(text)) {
    return { kind: "refuse_start", source: "lexical" };
  }

  // "Je confirme que je ne veux pas démarrer…"
  if (
    /\bconfirm\w*\b/i.test(text) &&
    /\bne\s+veux\s+pas\b|\bne\s+[^\n.!?]{0,30}\bd[eé]marr/i.test(text)
  ) {
    return { kind: "refuse_start", source: "lexical" };
  }

  if (OTHER_CONFIRM_RE.test(text)) {
    return { kind: "confirm_other_subject", source: "lexical" };
  }

  if (DEFER_RE.test(text) && /\b(d[eé]marr|lanc|activ|delivery)\b/i.test(text)) {
    return { kind: "defer_start", source: "lexical" };
  }

  const explicit = evaluateExplicitStartForSubject(text, cycleLabel);
  if (explicit === "refuse_start") {
    return { kind: "refuse_start", source: "lexical" };
  }
  if (explicit === "defer_start") {
    return { kind: "defer_start", source: "lexical" };
  }
  if (explicit === "question_status") {
    return { kind: "question_status", source: "lexical" };
  }
  if (explicit === "ambiguous") {
    return { kind: "ambiguous", source: "lexical" };
  }
  if (explicit === "accept_start") {
    return { kind: "accept_start", source: "lexical" };
  }

  // Bare presence of "confirme/démarre/activation" without clear accept → ambiguous.
  if (
    /\b(confirm|d[eé]marr|activ|lancer\b.*cycle|cycle\b.*lancer)\w*\b/i.test(
      text,
    )
  ) {
    return { kind: "ambiguous", source: "lexical" };
  }

  return { kind: "neutral_propose", source: "none" };
}

/**
 * Continuity assessment (CP02 / R2).
 * Conversation history = CONTEXT ONLY.
 * same_subject_product_current requires productCurrentSubjectVerified === true.
 * Current-turn proposalStatus is ignored (not historical currentness).
 */
export function assessHistoryContinuity(input: {
  readonly history?: readonly F2PilotNarrativeHistoryMessage[];
  readonly cycleLabel: string | null | undefined;
  /** @deprecated ignored — do not treat current-turn status as history currentness */
  readonly proposalStatus?: string | null;
  readonly productCurrentSubjectVerified?: boolean;
  readonly priorSubjectStatus?: string | null;
}): HistoryContinuity {
  const priorStatus = (input.priorSubjectStatus ?? "").trim().toUpperCase();
  if (
    priorStatus === "STALE" ||
    priorStatus === "REFUSED" ||
    priorStatus === "SUPERSEDED"
  ) {
    return { kind: "refused_or_stale_hint" };
  }

  // Product-verified CURRENT subject — only authoritative CURRENT continuity.
  if (input.productCurrentSubjectVerified === true) {
    return { kind: "same_subject_product_current" };
  }

  const label = normalizeLabel(input.cycleLabel);
  const history = input.history ?? [];
  if (!history.length || !label) {
    return { kind: "none" };
  }

  const window = history.slice(-8);
  let sameCycleHint = false;
  let otherSubject = false;
  let refusedHint = false;

  for (const m of window) {
    const role = (m.role ?? "").toLowerCase();
    const content = m.content ?? "";
    if (role === "assistant" || role === "nora") {
      const quoted = extractQuotedLabels(content).map((q) => q.toLowerCase());
      const mentionsSame =
        messageMentionsCycle(content, input.cycleLabel) &&
        /\b(propos|candidat|recommand|validation|d[eé]marr)/i.test(content);
      if (mentionsSame) sameCycleHint = true;
      for (const q of quoted) {
        if (q && q !== label) otherSubject = true;
      }
      if (
        /\b(cadrage|clarification|d[eé]cision|exploration)\b/i.test(content) &&
        label === "delivery" &&
        !messageMentionsCycle(content, "Delivery")
      ) {
        otherSubject = true;
      }
    }
    if (role === "user") {
      if (
        messageMentionsCycle(content, input.cycleLabel) &&
        (NEGATION_START_RE.test(content) || REFUSE_PROPOSAL_RE.test(content))
      ) {
        refusedHint = true;
      }
    }
  }

  if (refusedHint) return { kind: "refused_or_stale_hint" };
  // History may hint at same cycle label — never Product CURRENT without verification.
  if (sameCycleHint) return { kind: "same_subject_history_hint" };
  if (otherSubject) return { kind: "other_subject" };
  return { kind: "none" };
}

/**
 * @deprecated CP01 — use interpretPilotNarrativeStance. Kept as accept_start probe only.
 */
export function pilotSignalsActivationOrConfirmIntent(
  text: string,
  cycleLabel?: string | null,
  pilotDecisionCandidate?: PilotDecisionCandidate | null,
): boolean {
  return (
    interpretPilotNarrativeStance({
      userContent: text,
      cycleLabel,
      pilotDecisionCandidate,
    }).kind === "accept_start"
  );
}

/**
 * @deprecated CP02 — history hint ≠ Product CURRENT. Prefer assessHistoryContinuity.
 */
export function historySuggestsPriorCycleProposal(
  history: readonly F2PilotNarrativeHistoryMessage[] | undefined,
  cycleLabel?: string | null,
): boolean {
  const kind = assessHistoryContinuity({ history, cycleLabel }).kind;
  return (
    kind === "same_subject_history_hint" ||
    kind === "same_subject_product_current"
  );
}

/** Repeated-accept CURRENT wording only with Product-verified subject. */
function shouldAcknowledgeRepeatedAccept(
  stance: PilotNarrativeStance,
  continuity: HistoryContinuity,
): boolean {
  return (
    stance.kind === "accept_start" &&
    continuity.kind === "same_subject_product_current"
  );
}

/**
 * Compose the single pilot-facing narrative persisted and returned by F2 proposal turns.
 */
export function composeF2PilotFacingNarrative(
  input: ComposeF2PilotFacingNarrativeInput,
): string {
  const parts: string[] = [];

  if (input.presentation === "test_provider") {
    parts.push("[Mode test]");
  }

  const cycle = cyclePhrase(input.cycleLabel);
  const focus = intentFocus(input);
  const cycleActive = Boolean(input.activeCycleInstanceId?.trim());
  const stance = interpretPilotNarrativeStance({
    userContent: input.userContent,
    cycleLabel: input.cycleLabel,
    pilotDecisionCandidate: input.pilotDecisionCandidate,
  });
  const continuity = assessHistoryContinuity({
    history: input.history,
    cycleLabel: input.cycleLabel,
    productCurrentSubjectVerified: input.productCurrentSubjectVerified === true,
    priorSubjectStatus: input.priorSubjectStatus,
  });

  if (input.kind === "active_cycle_deliverable_proposal") {
    parts.push(
      focus
        ? `Une proposition pour matérialiser le livrable (${focus}) est prête à être examinée — le cycle en cours est conservé.`
        : "Une proposition pour matérialiser le livrable est prête à être examinée — le cycle en cours est conservé.",
    );
  } else {
    switch (stance.kind) {
      case "accept_recommendation": {
        parts.push(
          normalizeLabel(input.cycleLabel)
            ? `Je note votre accord sur la recommandation concernant ${cycle}. Ce n'est pas encore un démarrage.`
            : "Je note votre accord sur la recommandation. Ce n'est pas encore un démarrage de cycle.",
        );
        break;
      }
      case "accept_start": {
        if (cycleActive) {
          parts.push(
            `Je note votre intention concernant ${cycle}. Un cycle est déjà actif sur le projet.`,
          );
        } else if (shouldAcknowledgeRepeatedAccept(stance, continuity)) {
          parts.push(
            `Je reconnais votre accord pour démarrer ${cycle}. Ce tour ne l'active pas : aucune activation n'est enregistrée.`,
          );
        } else if (continuity.kind === "other_subject") {
          parts.push(
            `Je comprends une intention de démarrage pour ${cycle}. Je ne la rattache pas à une proposition d'un autre cycle dans l'historique.`,
          );
        } else if (continuity.kind === "refused_or_stale_hint") {
          parts.push(
            `Je note votre demande relative à ${cycle}, mais le contexte antérieur indique un refus ou un sujet obsolète — je ne le traite pas comme un démarrage accompli.`,
          );
        } else {
          // Includes same_subject_history_hint — hint ≠ CURRENT continuity claim.
          parts.push(
            `Je comprends votre intention de démarrer ${cycle}. Pour l'instant il n'est pas actif — une confirmation en conversation ne constitue pas à elle seule l'activation.`,
          );
        }
        break;
      }
      case "refuse_start":
      case "refuse_proposal": {
        parts.push(
          stance.kind === "refuse_proposal"
            ? `Je prends note que la proposition n'est pas acceptable${focus ? ` (${focus})` : ""}. Ce n'est pas un accord de démarrage.`
            : `Je prends note de votre refus de démarrer ${cycle}. Aucun démarrage n'est engagé.`,
        );
        break;
      }
      case "defer_start": {
        parts.push(
          `Je note que vous préférez attendre avant de lancer ${cycle}. Aucun démarrage n'est engagé.`,
        );
        break;
      }
      case "question_status": {
        parts.push(
          cycleActive
            ? `Oui — un cycle est actuellement actif sur le projet.`
            : `Non — d'après l'état projet, aucun cycle n'est actuellement actif${normalizeLabel(input.cycleLabel) ? ` (y compris ${cycle})` : ""}.`,
        );
        break;
      }
      case "confirm_other_subject": {
        parts.push(
          `Je note votre confirmation sur ce point. Cela ne vaut pas un accord de démarrage pour ${cycle}.`,
        );
        if (focus) {
          parts.push(`La proposition de cycle en cours porte sur : ${focus}.`);
        }
        break;
      }
      case "amend_request": {
        parts.push(
          `Je note votre demande d'amendement concernant ${cycle}. Aucune activation n'est engagée.`,
        );
        break;
      }
      case "ambiguous": {
        parts.push(
          `Je ne traite pas encore cela comme un accord de démarrage pour ${cycle}. Souhaitez-vous le lancer, l'ajourner, ou préciser autre chose ?`,
        );
        break;
      }
      case "neutral_propose":
      default: {
        parts.push(
          focus
            ? `Je propose le cycle ${cycle} pour avancer sur : ${focus}.`
            : `Je propose le cycle ${cycle}.`,
        );
        break;
      }
    }
  }

  // Proportionate details — not a fixed admin report on every turn.
  const cognitive = scrubCognitiveSnippet(input.ckcCognitiveRecommendation);
  const showProfile =
    input.kind === "new_cycle_proposal" &&
    Boolean((input.recommendedProfile ?? "").trim()) &&
    (stance.kind === "neutral_propose" ||
      stance.kind === "amend_request" ||
      input.morrisGateRequired);
  const showLpsHonesty =
    input.kind === "new_cycle_proposal" &&
    (stance.kind === "accept_start" ||
      !input.lpsUnchanged ||
      (stance.kind === "neutral_propose" && !input.lpsUnchanged));
  const showGovernance =
    stance.kind === "accept_start" ||
    stance.kind === "accept_recommendation" ||
    stance.kind === "neutral_propose" ||
    input.executionBlocked ||
    input.intentClass === "execution_request" ||
    input.morrisGateRequired ||
    input.mw5Disposition === "ESCALATE";
  const showNoExecution =
    input.executionBlocked ||
    input.intentClass === "execution_request" ||
    (stance.kind === "accept_start" && !cycleActive);

  if (showProfile) {
    parts.push(`Profil recommandé : ${(input.recommendedProfile ?? "").trim()}.`);
  }

  const recLabel = (input.recommendationLabel ?? "").trim();
  if (
    recLabel &&
    !ENGINE_LEAK_RE.test(recLabel) &&
    stance.kind === "neutral_propose"
  ) {
    parts.push(recLabel);
  }

  if (
    cognitive &&
    (stance.kind === "neutral_propose" || stance.kind === "amend_request")
  ) {
    parts.push(cognitive);
  }

  if (showLpsHonesty) {
    if (input.lpsUnchanged) {
      if (stance.kind === "accept_start") {
        parts.push("L'état vivant du projet reste inchangé.");
      }
    } else {
      parts.push("L'état vivant du projet a été mis à jour.");
    }
  }

  if (showGovernance) {
    if (stance.kind === "accept_start") {
      parts.push(
        "Ceci reste une intention / recommandation — pas une activation enregistrée.",
      );
    } else if (stance.kind === "accept_recommendation") {
      // Keep lean — opening already states "pas encore un démarrage".
    } else if (stance.kind === "neutral_propose") {
      parts.push(
        "Ceci reste une recommandation, pas encore un démarrage ni une décision Pilote structurée.",
      );
    } else if (input.morrisGateRequired) {
      parts.push("Votre décision est requise avant de préparer l'action.");
    }
  } else if (input.morrisGateRequired) {
    parts.push("Votre décision est requise avant de préparer l'action.");
  }

  if (showNoExecution) {
    parts.push("Rien n'a encore été exécuté.");
  } else if (input.executionBlocked || input.intentClass === "execution_request") {
    parts.push(
      "Une demande d'exécution a été détectée — aucune exécution ne sera lancée par ce tour.",
    );
  }

  if (
    input.mw5Disposition === "ESCALATE" &&
    (input.mw5EscalatePiloteText ?? "").trim()
  ) {
    parts.push(input.mw5EscalatePiloteText!.trim());
  }

  return parts
    .map((p) => p.trim())
    .filter(Boolean)
    .join(" ")
    .replace(/\s{2,}/g, " ")
    .trim();
}

/** Invariants used by COG01 tests — semantic, not full-string snapshots. */
export function f2PilotNarrativeInvariants(text: string): {
  readonly hasEngineContinue: boolean;
  readonly hasReadyNoGate: boolean;
  readonly hasQualificationAdminLead: boolean;
  readonly hasStackedAuthorityFooter: boolean;
  readonly claimsActivationAccomplished: boolean;
  readonly acknowledgesAgreement: boolean;
  readonly acknowledgesRefusal: boolean;
  readonly adminClauseCount: number;
} {
  const t = text ?? "";
  const adminClauseCount = [
    /Profil recommand/i.test(t),
    /[eé]tat vivant du projet/i.test(t),
    /Rien n'a encore [eé]t[eé] ex[eé]cut/i.test(t),
    /Ceci reste une recommandation/i.test(t) ||
      /Ceci reste une intention/i.test(t),
    /pas une d[eé]cision Pilote/i.test(t),
  ].filter(Boolean).length;

  return {
    hasEngineContinue: /CONTINUE\s*[—–-]\s*cognition propose-only/i.test(t),
    hasReadyNoGate: /\bREADY_NO_GATE\b/.test(t),
    hasQualificationAdminLead:
      /Qualification SFIA et proposition structurée générées/i.test(t),
    hasStackedAuthorityFooter:
      /Nora n'émet pas de décision Pilote[\s\S]*Pas de gate de construction/i.test(
        t,
      ) ||
      (/Recommandation\s*≠\s*d[eé]cision Pilote/i.test(t) &&
        /F2 s'arrête ici/i.test(t)),
    claimsActivationAccomplished:
      /confirmation\s+constitue\s+la\s+d[eé]cision\s+de\s+lancement/i.test(t) ||
      /cycle\s+(est|a\s+[eé]t[eé])\s+(d[eé]marr[eé]|activ[eé])(?!\s)/i.test(t),
    acknowledgesAgreement: /reconnais votre accord/i.test(t),
    acknowledgesRefusal:
      /refus|n'est pas acceptable|ne veux pas|aucun d[eé]marrage n'est engag/i.test(
        t,
      ),
    adminClauseCount,
  };
}
