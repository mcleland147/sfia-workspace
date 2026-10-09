# ChatGPT Review Pack — P6-HQA-COG-01 CORRECTION PASS 02 (COMPLETE)

- timestamp: 2026-10-09T01:04:46Z
- campaignId: P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
- finding: P6-HQA-COG-01
- pass: CORRECTION PASS 02
- cycle: 8 — Delivery / implémentation
- typology: EVOL / correction Product ciblée
- profile: CRITICAL
- branch: qa/sfia-studio-p6-global-integrated-product-qa
- origin/main: aba6c4a617b6d0cb27f23b59de5bf0ac9360fab1
- local HEAD (INITIAL=FINAL): 8a196be1a35ffa2d43e52beddc66b51eab56c99c
- reference handoff CP01: 46c61d147ce3dd069fe12c39c963db9d6dcf0e17
- project commit/push/PR/merge: NONE
- P6 PASS: NOT CLAIMED
- runtime v3: NON ADOPTED
- Morris GO consumed: COG01 CP02 micro-correction R1/R2
- F01: BLOCKED · UI05: OPEN · HQ-01: BLOCKED
- UI-01…UI-04: local CLOSED preserved
- COG01 CLOSED: NO
- HUMAN QA NATURALNESS: NOT YET PROVEN

## Local Git Truth

```
BRANCH=qa/sfia-studio-p6-global-integrated-product-qa
HEAD=8a196be1a35ffa2d43e52beddc66b51eab56c99c
ORIGIN_MAIN=aba6c4a617b6d0cb27f23b59de5bf0ac9360fab1
```

Preserved: UI-01…UI-04, COG01 CP00/CP01/CP02 locals, P6 campaign untracked proofs.
No reset/clean/destructive stash.

## Reserves closed (CP01 Critical)

### R1 — accept ≠ accept_start
AVANT: `disposition=accept` + `current_recommendation|presented_subject` → `accept_start`.
APRÈS: same structured accept → `accept_recommendation` unless `hasExplicitStartIntentForSubject` for THIS cycleLabel.
Alternative/ambiguous target → still not start. Negation/question/other-confirm override.

### R2 — history ≠ Product CURRENT
AVANT: history Delivery mention → `same_subject_current` → "Je reconnais votre accord…".
APRÈS:
- history alone → `same_subject_history_hint` (CONTEXT ONLY);
- `same_subject_product_current` only if `productCurrentSubjectVerified === true`;
- current-turn `proposalStatus` ignored for continuity;
- `priorSubjectStatus` (Product) for REFUSED/STALE/SUPERSEDED;
- orchestrateF2 passes `productCurrentSubjectVerified: false` (no F01 resolver invented).

## Files

| Path | Action |
|------|--------|
| `composeF2PilotFacingNarrative.ts` | MODIFIED (complete below) |
| `orchestrateF2.ts` | MODIFIED — R2 flags (diff below) |
| `p6.hqa.cog01.f2PilotFacingNarrative.d0.test.ts` | REWRITTEN CP02 (complete below) |
| `corrProof01…` | unchanged this pass (prior COG01 T10) |

## Deterministic samples (TEST)

ok pour la recommandation + structured accept:
`Je note votre accord sur la recommandation concernant « Delivery ». Ce n'est pas encore un démarrage.`

Je confirme le démarrage de Delivery + history Delivery + no Product verify:
`Je comprends votre intention de démarrer « Delivery ». …` (NO "Je reconnais votre accord")

## Validations

| Control | Result |
|---------|--------|
| COG01 CP02 D0 (18) | PASS |
| corrProof01 / UI-03 / UI-04 / qualToGovernedCycle (53) | PASS |
| eslint composer+tests | PASS |
| next build | NOT RUN (:3020 risk) |
| REAL provider | NONE |

## Fake / Real

DETERMINISTIC PROVEN for R1/R2 at composer seam.
Human QA / COG01 CLOSED / P6 PASS / runtime v3: NOT CLAIMED.

## Reserves remaining

- Product CURRENT verification wiring remains F01-adjacent; CP02 fail-closed (`verified=false`).
- Known cycle label list for mismatch is bounded (not open NLU).
- Human naturalness still requires Human QA.

## Verdict

**COG01 CP02 CORRECTION CANDIDATE — READY FOR CHATGPT CRITICAL RE-REVIEW**

**HUMAN QA NATURALNESS — NOT YET PROVEN**

Instruction ChatGPT: read this entire handoff including all code sections before answering Morris.

Next: ChatGPT Critical re-review → Human QA COG01.

---

# COMPLETE MODIFIED CONTENT


## FILE 1/3 — COMPLETE composer

### path: `projects/sfia-studio/app/features/project-assistant/f2/composeF2PilotFacingNarrative.ts`

```typescript
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
  const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(escaped, "i").test(content);
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
    if (label && quoted.some((q) => q === label)) return "match";
    if (quoted.some((q) => q && q !== label)) return "mismatch";
  }
  const afterStart = text.match(
    /(?:d[eé]marrage|lancement|activation|d[eé]marrer|lancer|activer)\s+(?:de\s+|du\s+|d['’])?([A-Za-zÀ-ÿ-]+)/i,
  );
  if (afterStart?.[1]) {
    const named = normalizeLabel(afterStart[1]);
    if (label && named === label) return "match";
    if (
      (KNOWN_CYCLE_LABELS as readonly string[]).includes(named) &&
      named !== label
    ) {
      return "mismatch";
    }
  }
  if (label && CLEAR_ACCEPT_START_RE.test(text)) {
    for (const k of KNOWN_CYCLE_LABELS) {
      if (k === label) continue;
      if (new RegExp(`\\b${k}\\b`, "i").test(text)) return "mismatch";
    }
  }
  return "unspecified";
}

/** Explicit start intent for THIS subject cycle (lexical cue + cycle match). */
export function hasExplicitStartIntentForSubject(
  text: string,
  cycleLabel: string | null | undefined,
): boolean {
  if (!CLEAR_ACCEPT_START_RE.test(text ?? "")) return false;
  const rel = resolveNamedCycleRelativeToSubject(text, cycleLabel);
  if (rel === "mismatch") return false;
  // Unspecified is allowed only when no other known cycle is named.
  return rel === "match" || rel === "unspecified";
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
    // Fail-closed overrides even when structured says accept.
    if (NEGATION_START_RE.test(userText) || REFUSE_PROPOSAL_RE.test(userText)) {
      return { kind: "refuse_start", source: "lexical" };
    }
    if (QUESTION_CUE_RE.test(userText)) {
      return { kind: "question_status", source: "lexical" };
    }
    if (OTHER_CONFIRM_RE.test(userText)) {
      return { kind: "confirm_other_subject", source: "lexical" };
    }
    // R1 — accept recommendation/presented subject ≠ start unless explicit start for THIS cycle.
    if (
      t === "current_recommendation" ||
      t === "presented_subject"
    ) {
      if (hasExplicitStartIntentForSubject(userText, cycleLabel)) {
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

  if (CLEAR_ACCEPT_START_RE.test(text)) {
    const rel = resolveNamedCycleRelativeToSubject(text, cycleLabel);
    if (rel === "mismatch") {
      return { kind: "ambiguous", source: "lexical" };
    }
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
```

## FILE 2/3 — COMPLETE tests

### path: `projects/sfia-studio/app/__tests__/project-assistant/p6.hqa.cog01.f2PilotFacingNarrative.d0.test.ts`

```typescript
/**
 * P6-HQA-COG-01 CORRECTION PASS 02 — R1/R2 adversarial discrimination.
 * DETERMINISTIC PROVEN at composer seam. Human naturalness NOT CLOSED.
 */

import { describe, expect, it } from "vitest";
import {
  assessHistoryContinuity,
  composeF2PilotFacingNarrative,
  f2PilotNarrativeInvariants,
  hasExplicitStartIntentForSubject,
  interpretPilotNarrativeStance,
  resolveNamedCycleRelativeToSubject,
  type ComposeF2PilotFacingNarrativeInput,
} from "@/features/project-assistant/f2/composeF2PilotFacingNarrative";
import type { PilotDecisionCandidate } from "@/features/project-assistant/f2/types";

function base(
  overrides: Partial<ComposeF2PilotFacingNarrativeInput> = {},
): ComposeF2PilotFacingNarrativeInput {
  return {
    kind: "new_cycle_proposal",
    presentation: "openai_live",
    userContent: "Prépare un cycle Delivery pour livrer la note.",
    history: [],
    intentClass: "actionable",
    objective: "Livrer la note de cadrage",
    rephrasedRequest: "Formaliser un cycle Delivery pour la note",
    cycleLabel: "Delivery",
    recommendedProfile: "Standard",
    recommendationLabel: "RECOMMANDATION — PAS UNE DÉCISION HUMAINE",
    ckcCognitiveRecommendation: undefined,
    projectName: "P6-HQ-01",
    projectObjective: "Exit proof Delivery",
    activeCycleInstanceId: null,
    lpsUnchanged: true,
    morrisGateRequired: false,
    executionBlocked: false,
    mw5Disposition: "CONTINUE",
    mw5EscalatePiloteText: null,
    pilotDecisionCandidate: null,
    productCurrentSubjectVerified: false,
    priorSubjectStatus: null,
    ...overrides,
  };
}

const acceptRec: PilotDecisionCandidate = {
  disposition: "accept",
  targetKind: "current_recommendation",
  rationale: "ok for recommendation",
};

const acceptPresented: PilotDecisionCandidate = {
  disposition: "accept",
  targetKind: "presented_subject",
  rationale: "ok for presented subject",
};

const acceptAlt: PilotDecisionCandidate = {
  disposition: "accept",
  targetKind: "specific_alternative",
  rationale: "choose alternative",
};

describe("P6-HQA-COG-01 CP02 — R1 subject identity of accept", () => {
  it("T1 — accept recommendation ≠ accept_start", () => {
    const stance = interpretPilotNarrativeStance({
      userContent: "ok pour la recommandation",
      cycleLabel: "Delivery",
      pilotDecisionCandidate: acceptRec,
    });
    expect(stance.kind).toBe("accept_recommendation");

    const text = composeF2PilotFacingNarrative(
      base({
        userContent: "ok pour la recommandation",
        pilotDecisionCandidate: acceptRec,
      }),
    );
    expect(f2PilotNarrativeInvariants(text).acknowledgesAgreement).toBe(false);
    expect(text).toMatch(/accord sur la recommandation/i);
    expect(text).toMatch(/pas encore un démarrage/i);
    expect(text).not.toMatch(/intention de démarrer/i);
  });

  it("T2 — accept presented_subject ≠ accept_start", () => {
    expect(
      interpretPilotNarrativeStance({
        userContent: "d'accord pour ce sujet",
        cycleLabel: "Delivery",
        pilotDecisionCandidate: acceptPresented,
      }).kind,
    ).toBe("accept_recommendation");
  });

  it("T3 — explicit start intent is recognized as accept_start", () => {
    expect(
      hasExplicitStartIntentForSubject(
        "Je confirme le démarrage de Delivery",
        "Delivery",
      ),
    ).toBe(true);
    expect(
      interpretPilotNarrativeStance({
        userContent: "Je confirme le démarrage de Delivery.",
        cycleLabel: "Delivery",
        pilotDecisionCandidate: acceptRec,
      }).kind,
    ).toBe("accept_start");
    expect(
      interpretPilotNarrativeStance({
        userContent: "J'accepte de démarrer Delivery.",
        cycleLabel: "Delivery",
      }).kind,
    ).toBe("accept_start");
  });

  it("T4 — different cycle name (quoted or bare) → no false Delivery start", () => {
    expect(
      resolveNamedCycleRelativeToSubject(
        "Je confirme le démarrage de Cadrage",
        "Delivery",
      ),
    ).toBe("mismatch");
    expect(
      interpretPilotNarrativeStance({
        userContent: "Je confirme le démarrage de Cadrage.",
        cycleLabel: "Delivery",
      }).kind,
    ).toBe("ambiguous");
    expect(
      interpretPilotNarrativeStance({
        userContent: "Je confirme le démarrage de « Cadrage ».",
        cycleLabel: "Delivery",
        pilotDecisionCandidate: acceptRec,
      }).kind,
    ).not.toBe("accept_start");
  });

  it("T5 — accepted alternative ≠ démarrage", () => {
    expect(
      interpretPilotNarrativeStance({
        userContent: "je prends l'autre option",
        cycleLabel: "Delivery",
        pilotDecisionCandidate: acceptAlt,
      }).kind,
    ).toBe("ambiguous");
  });

  it("T6 — refuse / question / defer never promoted to accept_start", () => {
    expect(
      interpretPilotNarrativeStance({
        userContent: "Non, ne démarre surtout pas Delivery.",
        cycleLabel: "Delivery",
        pilotDecisionCandidate: acceptRec,
      }).kind,
    ).toBe("refuse_start");
    expect(
      interpretPilotNarrativeStance({
        userContent: "Peux-tu confirmer que le cycle n'est pas actif ?",
        cycleLabel: "Delivery",
        pilotDecisionCandidate: acceptRec,
      }).kind,
    ).toBe("question_status");
    expect(
      interpretPilotNarrativeStance({
        userContent: "Je préfère attendre avant de lancer Delivery.",
        cycleLabel: "Delivery",
      }).kind,
    ).toBe("defer_start");
  });

  it("accept recommendation without cycle label stays non-start", () => {
    const text = composeF2PilotFacingNarrative(
      base({
        cycleLabel: null,
        userContent: "ok pour la recommandation",
        pilotDecisionCandidate: acceptRec,
      }),
    );
    expect(text).toMatch(/pas encore un démarrage/i);
    expect(f2PilotNarrativeInvariants(text).acknowledgesAgreement).toBe(false);
  });
});

describe("P6-HQA-COG-01 CP02 — R2 currentness of continuity", () => {
  it("T7 — new-turn proposalStatus does not create Product CURRENT continuity", () => {
    const c = assessHistoryContinuity({
      cycleLabel: "Delivery",
      proposalStatus: "STALE",
      productCurrentSubjectVerified: false,
      history: [
        {
          role: "assistant",
          content: "Je propose le cycle « Delivery ».",
        },
      ],
    });
    // proposalStatus ignored — history alone → hint, not product current / not stale via status
    expect(c.kind).toBe("same_subject_history_hint");
    expect(c.kind).not.toBe("same_subject_product_current");
  });

  it("T8 — old Delivery history ≠ same object CURRENT", () => {
    const c = assessHistoryContinuity({
      cycleLabel: "Delivery",
      productCurrentSubjectVerified: false,
      history: [
        {
          role: "assistant",
          content:
            "Je propose le cycle « Delivery ». Un cycle candidat est prêt.",
        },
      ],
    });
    expect(c.kind).toBe("same_subject_history_hint");

    const text = composeF2PilotFacingNarrative(
      base({
        userContent: "Je confirme le démarrage de Delivery.",
        history: [
          {
            role: "assistant",
            content: "Je propose le cycle « Delivery ».",
          },
        ],
        productCurrentSubjectVerified: false,
      }),
    );
    // Must NOT claim repeated CURRENT agreement from history alone.
    expect(f2PilotNarrativeInvariants(text).acknowledgesAgreement).toBe(false);
    expect(text).toMatch(/intention de démarrer/i);
  });

  it("T9 — refused / stale / superseded prior subject", () => {
    expect(
      assessHistoryContinuity({
        cycleLabel: "Delivery",
        priorSubjectStatus: "REFUSED",
        productCurrentSubjectVerified: false,
        history: [],
      }).kind,
    ).toBe("refused_or_stale_hint");
    expect(
      assessHistoryContinuity({
        cycleLabel: "Delivery",
        priorSubjectStatus: "SUPERSEDED",
        productCurrentSubjectVerified: false,
      }).kind,
    ).toBe("refused_or_stale_hint");

    const text = composeF2PilotFacingNarrative(
      base({
        userContent: "Je confirme le démarrage de Delivery.",
        priorSubjectStatus: "STALE",
        history: [
          {
            role: "assistant",
            content: "Je propose le cycle « Delivery ».",
          },
          {
            role: "user",
            content: "Non, ne démarre surtout pas Delivery.",
          },
        ],
      }),
    );
    expect(f2PilotNarrativeInvariants(text).acknowledgesAgreement).toBe(false);
    expect(text).toMatch(/refus|obsolète/i);
  });

  it("T10 — multiple Delivery mentions remain history hint without Product verify", () => {
    const c = assessHistoryContinuity({
      cycleLabel: "Delivery",
      productCurrentSubjectVerified: false,
      history: [
        {
          role: "assistant",
          content: "Je propose le cycle « Delivery » (première).",
        },
        { role: "user", content: "pas maintenant" },
        {
          role: "assistant",
          content: "Je propose le cycle « Delivery » (seconde).",
        },
      ],
    });
    expect(c.kind).toBe("same_subject_history_hint");
  });

  it("T11 — absent context → neutral formulation", () => {
    expect(
      assessHistoryContinuity({
        cycleLabel: "Delivery",
        history: [],
        productCurrentSubjectVerified: false,
      }).kind,
    ).toBe("none");
    const text = composeF2PilotFacingNarrative(
      base({ userContent: "ok", history: [], pilotDecisionCandidate: null }),
    );
    // "ok" alone → ambiguous or neutral, never agreement-of-start
    expect(f2PilotNarrativeInvariants(text).acknowledgesAgreement).toBe(false);
  });

  it("T12 — Product-verified subject allows CURRENT continuity wording", () => {
    expect(
      assessHistoryContinuity({
        cycleLabel: "Delivery",
        productCurrentSubjectVerified: true,
        history: [],
      }).kind,
    ).toBe("same_subject_product_current");

    const text = composeF2PilotFacingNarrative(
      base({
        userContent: "Je confirme le démarrage de Delivery.",
        productCurrentSubjectVerified: true,
        history: [
          {
            role: "assistant",
            content: "Je propose le cycle « Delivery ».",
          },
        ],
      }),
    );
    expect(f2PilotNarrativeInvariants(text).acknowledgesAgreement).toBe(true);
    expect(text).toMatch(/ne l'active pas|aucune activation/i);
  });

  it("Cadrage history + Delivery start → other_subject, no false CURRENT", () => {
    expect(
      assessHistoryContinuity({
        cycleLabel: "Delivery",
        history: [
          {
            role: "assistant",
            content: "Je propose le cycle « Cadrage ».",
          },
        ],
      }).kind,
    ).toBe("other_subject");
  });
});

describe("P6-HQA-COG-01 CP02 — governance / persistence / CP01 non-regression", () => {
  it("T13 — no invented HD / activation / execution", () => {
    const text = composeF2PilotFacingNarrative(
      base({
        userContent: "Je confirme le démarrage de Delivery.",
        executionBlocked: true,
        intentClass: "execution_request",
      }),
    );
    const inv = f2PilotNarrativeInvariants(text);
    expect(inv.claimsActivationAccomplished).toBe(false);
    expect(text).not.toMatch(/HumanDecision enregistr/i);
    expect(text).toMatch(/Rien n'a encore été exécuté/i);
  });

  it("T14 — live/test presentation parity", () => {
    const live = composeF2PilotFacingNarrative(
      base({ userContent: "ok pour la recommandation", pilotDecisionCandidate: acceptRec }),
    );
    const test = composeF2PilotFacingNarrative(
      base({
        presentation: "test_provider",
        userContent: "ok pour la recommandation",
        pilotDecisionCandidate: acceptRec,
      }),
    );
    expect(test.replace(/^\[Mode test\]\s*/, "")).toBe(live);
  });

  it("T15 — CP01 refuse/question/defer/propose still correct", () => {
    const refuse = composeF2PilotFacingNarrative(
      base({ userContent: "Non, ne démarre surtout pas Delivery." }),
    );
    const question = composeF2PilotFacingNarrative(
      base({
        userContent: "Peux-tu confirmer que le cycle n'est pas actif ?",
      }),
    );
    const defer = composeF2PilotFacingNarrative(
      base({
        userContent: "Je préfère attendre avant de lancer Delivery.",
      }),
    );
    const propose = composeF2PilotFacingNarrative(base());
    expect(f2PilotNarrativeInvariants(refuse).acknowledgesRefusal).toBe(true);
    expect(question).toMatch(/aucun cycle n'est actuellement actif/i);
    expect(defer).toMatch(/attendre|Aucun démarrage/i);
    expect(propose).toMatch(/Je propose le cycle/i);
    expect(f2PilotNarrativeInvariants(propose).hasEngineContinue).toBe(false);
  });

  it("same message, different Product active state", () => {
    const msg = "Je confirme le démarrage de Delivery.";
    const inactive = composeF2PilotFacingNarrative(
      base({ userContent: msg, activeCycleInstanceId: null }),
    );
    const active = composeF2PilotFacingNarrative(
      base({ userContent: msg, activeCycleInstanceId: "cycinst:1" }),
    );
    expect(inactive).toMatch(/pas actif|ne constitue pas/i);
    expect(active).toMatch(/déjà actif/i);
  });
});
```

## FILE 3/3 — UNIFIED DIFF orchestrateF2.ts vs HEAD

### path: `projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index 8788abe6..575058bd 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -79,6 +79,7 @@ import {
   reasonWithResolvedCkcContext,
 } from "./ckcCognitiveContext";
 import { composeStudioCognitiveContext } from "./studioCognitiveContext";
+import { composeF2PilotFacingNarrative } from "./composeF2PilotFacingNarrative";
 import { resolveTrajectoryDecisionSupportProjection } from "../w2/resolveTrajectoryDecisionSupportProjection";
 import {
   parseReservationInteractionContextInput,
@@ -1887,23 +1888,39 @@ export async function orchestrateAssistantSend(input: {
       }
     }

-    const textParts = [
-      presentation === "test_provider" ? "[Mode test]" : "[Mode réel]",
-      "Le cycle en cours est conservé.",
-      "Une proposition pour matérialiser le livrable est prête à être examinée.",
-      "Nora recommande ; le Pilote décide.",
-      "Rien n'a encore été exécuté.",
-      "Votre décision est requise avant de préparer l'action.",
-      mw5.surface.disposition === "ESCALATE"
-        ? mw5.text
-        : mw5.surface.disclosure,
-      "Nora n'émet pas de décision Pilote, GO, confirmation ou acte d'autorité.",
-    ];
+    // P6-HQA-COG-01 — pilot-facing narrative at F2 source (persist == present).
+    // MW5 CONTINUE disclosure stays on mw5 DTO / audit, not in chat body.
+    const narrative = composeF2PilotFacingNarrative({
+      kind: "active_cycle_deliverable_proposal",
+      presentation,
+      userContent: content,
+      history: input.history,
+      intentClass: analysis.intentClass,
+      objective: analysis.objective,
+      rephrasedRequest: analysis.rephrasedRequest,
+      cycleLabel: qualification.cycleLabel,
+      recommendedProfile: qualification.recommendedProfile,
+      recommendationLabel: qualification.recommendationLabel,
+      ckcCognitiveRecommendation: qualification.ckcCognitiveRecommendation,
+      projectName: project.name,
+      projectObjective: project.objective,
+      activeCycleInstanceId: project.activeCycleInstanceId,
+      lpsUnchanged: true,
+      morrisGateRequired: true,
+      executionBlocked: true,
+      mw5Disposition: mw5.surface.disposition,
+      mw5EscalatePiloteText:
+        mw5.surface.disposition === "ESCALATE" ? mw5.text : null,
+      pilotDecisionCandidate: analysis.pilotDecisionCandidate ?? null,
+      // R2 — process-local proposal mint is not Product CURRENT subject verification.
+      productCurrentSubjectVerified: false,
+      priorSubjectStatus: null,
+    });

     return await completeF2Turn({
       userText: content,
       sessionDbPath: input.sessionDbPath,
-      text: textParts.join(" "),
+      text: narrative,
       mode: modeResolution.mode as "fixture" | "live",
       presentation,
       model,
@@ -2220,36 +2237,40 @@ export async function orchestrateAssistantSend(input: {
   }

   const executionBlocked = analysis.intentClass === "execution_request";
-  const textParts = [
-    presentation === "test_provider" ? "[Mode test]" : "[Mode réel]",
-    "Qualification SFIA et proposition structurée générées.",
-    `Cycle proposé: ${qualification.cycleLabel}.`,
-    "Un nouveau cycle est proposé et attend votre validation.",
-    `Profil recommandé: ${qualification.recommendedProfile}.`,
-    project.lpsVersion === preLpsVersion
-      ? "L'état vivant du projet est inchangé (pas d'activation avant démarrage)."
-      : "L'état vivant du projet a été mis à jour.",
-    qualification.recommendationLabel,
-    ...(qualification.ckcCognitiveRecommendation
-      ? [qualification.ckcCognitiveRecommendation]
-      : []),
-    "Recommandation ≠ décision Pilote — aucune activation d'autorité avant démarrage Pilote.",
-    morrisGateRequired
-      ? "Décision Pilote requise avant de poursuivre."
-      : "Pas de gate de construction supplémentaire — aucune exécution — F2 s'arrête ici.",
-    executionBlocked
-      ? "Demande d'exécution détectée — aucune exécution ne sera lancée."
-      : "Aucune exécution.",
-    mw5.surface.disposition === "ESCALATE"
-      ? mw5.text
-      : mw5.surface.disclosure,
-    "Nora n'émet pas de décision Pilote, GO, confirmation ou acte d'autorité.",
-  ];
+  // P6-HQA-COG-01 — one contextual pilot-facing narrative at F2 source.
+  // Engine CONTINUE / READY_NO_GATE / stacked authority footers stay off the body;
+  // mw5.surface.disclosure remains on the turn DTO for audit.
+  const narrative = composeF2PilotFacingNarrative({
+    kind: "new_cycle_proposal",
+    presentation,
+    userContent: content,
+    history: input.history,
+    intentClass: analysis.intentClass,
+    objective: analysis.objective,
+    rephrasedRequest: analysis.rephrasedRequest,
+    cycleLabel: qualification.cycleLabel,
+    recommendedProfile: qualification.recommendedProfile,
+    recommendationLabel: qualification.recommendationLabel,
+    ckcCognitiveRecommendation: qualification.ckcCognitiveRecommendation,
+    projectName: project.name,
+    projectObjective: project.objective,
+    activeCycleInstanceId: project.activeCycleInstanceId,
+    lpsUnchanged: project.lpsVersion === preLpsVersion,
+    morrisGateRequired,
+    executionBlocked,
+    mw5Disposition: mw5.surface.disposition,
+    mw5EscalatePiloteText:
+      mw5.surface.disposition === "ESCALATE" ? mw5.text : null,
+    pilotDecisionCandidate: analysis.pilotDecisionCandidate ?? null,
+    // R2 — newly created proposal status ≠ verified CURRENT continuity of a prior subject.
+    productCurrentSubjectVerified: false,
+    priorSubjectStatus: null,
+  });

   return await completeF2Turn({
     userText: content,
     sessionDbPath: input.sessionDbPath,
-    text: textParts.join(" "),
+    text: narrative,
     mode: modeResolution.mode as "fixture" | "live",
     presentation,
     model,
```

---
END OF COMPLETE REVIEW PACK — P6-HQA-COG-01 CORRECTION PASS 02
