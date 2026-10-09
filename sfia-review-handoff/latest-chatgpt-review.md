# ChatGPT Review Pack — P6-HQA-COG-01 CORRECTION PASS 01 (COMPLETE)

- timestamp: 2026-10-09T00:51:23Z
- campaignId: P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
- finding: P6-HQA-COG-01
- pass: CORRECTION PASS 01
- cycle: 8 — Delivery / implémentation
- typology: EVOL / correction Product bornée
- profile: CRITICAL
- branch: qa/sfia-studio-p6-global-integrated-product-qa
- origin/main: aba6c4a617b6d0cb27f23b59de5bf0ac9360fab1
- local HEAD (INITIAL=FINAL): 8a196be1a35ffa2d43e52beddc66b51eab56c99c
- reference handoff (prior): a0195c1c3ce9292806efcb825b843e5bcac5b906
- project commit: NONE
- project push: NONE
- PR: NONE
- merge: NONE
- P6 PASS: NOT CLAIMED
- runtime v3: NON ADOPTED
- Morris GO consumed: COG01 CORRECTION PASS 01 (targeted, local)
- F01: BLOCKED
- UI05: OPEN
- HQ-01: BLOCKED
- UI-01…UI-04: local CLOSED preserved
- COG01 status: CP01 CORRECTION CANDIDATE — READY FOR CHATGPT CRITICAL RE-REVIEW
- HUMAN QA NATURALNESS: NOT YET PROVEN

## Local Git Truth

```
BRANCH=qa/sfia-studio-p6-global-integrated-product-qa
HEAD=8a196be1a35ffa2d43e52beddc66b51eab56c99c
ORIGIN_MAIN=aba6c4a617b6d0cb27f23b59de5bf0ac9360fab1
```

Preserved local worktree: UI-01…UI-04, COG01 composer + tests, P6 campaign untracked proofs.
No reset/clean/destructive stash. Project HEAD unchanged.

## ChatGPT Critical reserves addressed (from a0195c1c)

1. False-positive agreement/activation/confirmation → stance interpreter (structured `pilotDecisionCandidate` first; lexical fail-closed for negation/question/other-subject).
2. Wrong historical attribution → `assessHistoryContinuity` binds to current `cycleLabel` / proposal status (not bare "proposition" keyword).
3. Rigid/repetitive admin formulation → proportionate clauses by stance (refuse/question/defer stay lean).
4. Weak discrimination tests → adversarial suite A–K (19 tests).

## Analysis AVANT → APRÈS

### AVANT (CP00)
- `pilotSignalsActivationOrConfirmIntent` = keyword OR on confirme/démarre/activation.
- `historySuggestsPriorCycleProposal` = any assistant "proposition/cycle proposé".
- Fixed stack of profile + LPS + governance + no-execution on most turns.

### APRÈS (CP01)
- `interpretPilotNarrativeStance` prefers non-authoritative `pilotDecisionCandidate` (accept/refuse/defer/amend/ambiguous); lexical path never promotes question/negation/other-confirm to `accept_start`.
- `assessHistoryContinuity`: `same_subject_current` | `other_subject` | `refused_or_stale_hint` | `none`.
- Repeated-agreement wording only when `accept_start` + `same_subject_current`.
- Formulation switches by stance; admin clauses gated.
- `orchestrateF2` passes `pilotDecisionCandidate` + `proposalStatus` into composer (both proposal sites).

No F2 decision-engine change. No second LLM. No new runner/store/routing.

## Files

| Path | Action |
|------|--------|
| `f2/composeF2PilotFacingNarrative.ts` | REWRITTEN (complete below) |
| `f2/orchestrateF2.ts` | MODIFIED — pass structured candidate + proposalStatus (diff below) |
| `p6.hqa.cog01.f2PilotFacingNarrative.d0.test.ts` | REWRITTEN (complete below) |
| `corrProof01.d1.conversation.d0.test.ts` | MODIFIED earlier COG01 T10 (diff below; unchanged this CP01 pass beyond prior) |

## Deterministic samples (TEST)

ACCEPT: Je comprends votre intention de démarrer « Delivery ». Pour l'instant il n'est pas actif — une confirmation en conversation ne constitue pas à elle seule l'activation. …

REFUSE: Je prends note de votre refus de démarrer « Delivery ». Aucun démarrage n'est engagé.

QUESTION: Non — d'après l'état projet, aucun cycle n'est actuellement actif (y compris « Delivery »).

OTHER: Je note votre confirmation sur ce point. Cela ne vaut pas un accord de démarrage pour « Delivery ». …

DEFER: Je note que vous préférez attendre avant de lancer « Delivery ». Aucun démarrage n'est engagé.

PROPOSE: Je propose le cycle « Delivery » pour avancer sur : Formaliser Delivery. Profil recommandé : Standard. Ceci reste une recommandation, pas encore un démarrage ni une décision Pilote structurée.

## Validations

| Control | Result |
|---------|--------|
| COG01 CP01 D0 (19) | PASS |
| corrProof01 D1 (17) | PASS |
| UI-03 + UI-04 (15) | PASS |
| qualToGovernedCycle.presentation (21) | PASS |
| eslint composer + COG01 tests | PASS |
| git diff --check (tracked COG01 diffs) | PASS |
| next build | NOT RUN (:3020 clash risk) |
| REAL provider | NONE |

## Fake / Real

| Claim | Class |
|-------|--------|
| Stance / continuity / lean formulation invariants | DETERMINISTIC PROVEN |
| Human naturalness / COG01 CLOSED | NOT YET PROVEN |
| F01 / HQ-01 / P6 PASS / runtime v3 | NOT CLAIMED |

## Reserves

- Lexical FR heuristics remain a fail-closed backstop when structured candidate is null/none; not a full NLU engine.
- F01 still BLOCKED — Product may still mint cycles on reconfirm; narrative no longer falsely claims agreement/activation.
- Durable subject identity beyond cycleLabel/status still limited without F01 wiring.
- Human QA still required for naturalness closure.

## Status map

| Item | Status |
|------|--------|
| COG01 | CP01 CORRECTION CANDIDATE — READY FOR CHATGPT CRITICAL RE-REVIEW |
| HUMAN QA NATURALNESS | NOT YET PROVEN |
| F01 | BLOCKED |
| UI05 | OPEN |
| HQ-01 | BLOCKED |
| P6 PASS | NOT CLAIMED |

## Verdict

**COG01 CP01 CORRECTION CANDIDATE — READY FOR CHATGPT CRITICAL RE-REVIEW**

**HUMAN QA NATURALNESS — NOT YET PROVEN**

Instruction ChatGPT: read this entire handoff including all code sections before answering Morris.

Next: ChatGPT Critical re-review → Human QA conversational COG01 on existing P6 runtime.

---

# COMPLETE MODIFIED CONTENT


## FILE 1/4 — COMPLETE (composer)

### path: `projects/sfia-studio/app/features/project-assistant/f2/composeF2PilotFacingNarrative.ts`

```typescript
/**
 * P6-HQA-COG-01 / CORRECTION PASS 01 — pilot-facing F2 narrative composition.
 *
 * Deterministic seam for F2 proposal turns:
 * - interpret Pilot stance (structured pilotDecisionCandidate first, lexical fail-closed);
 * - bind history continuity to the current cycle subject (not keyword coincidence);
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

export type HistoryContinuityKind =
  | "same_subject_current"
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
  /** Optional Product proposal status (stale/refused) for continuity honesty. */
  readonly proposalStatus?: string | null;
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
 * Structured-first stance. Lexical path is fail-closed: negation / question /
 * other-subject confirmation never become accept_start.
 */
export function interpretPilotNarrativeStance(input: {
  readonly userContent: string;
  readonly cycleLabel?: string | null;
  readonly pilotDecisionCandidate?: PilotDecisionCandidate | null;
}): PilotNarrativeStance {
  const text = (input.userContent ?? "").trim();
  const candidate = input.pilotDecisionCandidate ?? null;

  if (candidate) {
    const fromStructured = stanceFromStructuredCandidate(candidate, text);
    if (fromStructured) return fromStructured;
  }

  return stanceFromLexicalCues(text, input.cycleLabel);
}

function stanceFromStructuredCandidate(
  candidate: PilotDecisionCandidate,
  userText: string,
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
    // If text clearly negates start despite a noisy accept label, fail closed.
    if (NEGATION_START_RE.test(userText) || REFUSE_PROPOSAL_RE.test(userText)) {
      return { kind: "refuse_start", source: "lexical" };
    }
    if (QUESTION_CUE_RE.test(userText)) {
      return { kind: "question_status", source: "lexical" };
    }
    if (OTHER_CONFIRM_RE.test(userText)) {
      return { kind: "confirm_other_subject", source: "lexical" };
    }
    return { kind: "accept_start", source: "structured" };
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
    // If a cycle label is known and message names a different cycle, stay ambiguous.
    const label = normalizeLabel(cycleLabel);
    if (label) {
      const quoted = extractQuotedLabels(text).map((q) => q.toLowerCase());
      const namesOther =
        quoted.length > 0 && quoted.every((q) => q !== label);
      if (namesOther) {
        return { kind: "ambiguous", source: "lexical" };
      }
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
 * Continuity vs current cycle subject — not keyword coincidence on "proposition".
 */
export function assessHistoryContinuity(input: {
  readonly history?: readonly F2PilotNarrativeHistoryMessage[];
  readonly cycleLabel: string | null | undefined;
  readonly proposalStatus?: string | null;
}): HistoryContinuity {
  const status = (input.proposalStatus ?? "").trim().toUpperCase();
  if (status === "STALE" || status === "REFUSED") {
    return { kind: "refused_or_stale_hint" };
  }

  const label = normalizeLabel(input.cycleLabel);
  const history = input.history ?? [];
  if (!history.length || !label) {
    return { kind: "none" };
  }

  const window = history.slice(-8);
  let sameSubject = false;
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
      if (mentionsSame) sameSubject = true;
      for (const q of quoted) {
        if (q && q !== label) otherSubject = true;
      }
      // Unquoted alternate cycle names commonly used in Studio.
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
  if (sameSubject) return { kind: "same_subject_current" };
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
 * @deprecated CP01 — use assessHistoryContinuity with cycleLabel.
 */
export function historySuggestsPriorCycleProposal(
  history: readonly F2PilotNarrativeHistoryMessage[] | undefined,
  cycleLabel?: string | null,
): boolean {
  return (
    assessHistoryContinuity({ history, cycleLabel }).kind ===
    "same_subject_current"
  );
}

function shouldAcknowledgeRepeatedAccept(
  stance: PilotNarrativeStance,
  continuity: HistoryContinuity,
): boolean {
  return (
    stance.kind === "accept_start" &&
    continuity.kind === "same_subject_current"
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
    proposalStatus: input.proposalStatus,
  });

  if (input.kind === "active_cycle_deliverable_proposal") {
    parts.push(
      focus
        ? `Une proposition pour matérialiser le livrable (${focus}) est prête à être examinée — le cycle en cours est conservé.`
        : "Une proposition pour matérialiser le livrable est prête à être examinée — le cycle en cours est conservé.",
    );
  } else {
    switch (stance.kind) {
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

## FILE 2/4 — COMPLETE (tests)

### path: `projects/sfia-studio/app/__tests__/project-assistant/p6.hqa.cog01.f2PilotFacingNarrative.d0.test.ts`

```typescript
/**
 * P6-HQA-COG-01 CORRECTION PASS 01 — adversarial discrimination tests.
 * DETERMINISTIC PROVEN at composer seam. Human naturalness NOT CLOSED.
 */

import { describe, expect, it } from "vitest";
import {
  assessHistoryContinuity,
  composeF2PilotFacingNarrative,
  f2PilotNarrativeInvariants,
  interpretPilotNarrativeStance,
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
    proposalStatus: "PROPOSED",
    ...overrides,
  };
}

const acceptCandidate: PilotDecisionCandidate = {
  disposition: "accept",
  targetKind: "current_recommendation",
  rationale: "Pilot accepts current Delivery recommendation",
};

const refuseCandidate: PilotDecisionCandidate = {
  disposition: "refuse",
  targetKind: "current_recommendation",
  rationale: "Pilot refuses start",
};

describe("P6-HQA-COG-01 CP01 — stance interpretation", () => {
  it("A — positive vs negative: same Product refs, opposite intentions", () => {
    const accept = interpretPilotNarrativeStance({
      userContent: "Je confirme le démarrage de Delivery.",
      cycleLabel: "Delivery",
    });
    const refuse = interpretPilotNarrativeStance({
      userContent: "Non, ne démarre surtout pas Delivery.",
      cycleLabel: "Delivery",
    });
    const refuseConfirm = interpretPilotNarrativeStance({
      userContent: "Je confirme que je ne veux pas démarrer Delivery.",
      cycleLabel: "Delivery",
    });

    expect(accept.kind).toBe("accept_start");
    expect(refuse.kind).toBe("refuse_start");
    expect(refuseConfirm.kind).toBe("refuse_start");

    const acceptText = composeF2PilotFacingNarrative(
      base({ userContent: "Je confirme le démarrage de Delivery." }),
    );
    const refuseText = composeF2PilotFacingNarrative(
      base({ userContent: "Non, ne démarre surtout pas Delivery." }),
    );
    const invA = f2PilotNarrativeInvariants(acceptText);
    const invR = f2PilotNarrativeInvariants(refuseText);
    expect(invA.acknowledgesAgreement || /intention de démarrer/i.test(acceptText)).toBe(
      true,
    );
    expect(invR.acknowledgesRefusal).toBe(true);
    expect(invR.acknowledgesAgreement).toBe(false);
    expect(invA.claimsActivationAccomplished).toBe(false);
  });

  it("B — question vs affirmation: status question is not start request", () => {
    const stance = interpretPilotNarrativeStance({
      userContent: "Peux-tu confirmer que le cycle n'est pas actif ?",
      cycleLabel: "Delivery",
    });
    expect(stance.kind).toBe("question_status");

    const text = composeF2PilotFacingNarrative(
      base({
        userContent: "Peux-tu confirmer que le cycle n'est pas actif ?",
        activeCycleInstanceId: null,
      }),
    );
    const inv = f2PilotNarrativeInvariants(text);
    expect(inv.acknowledgesAgreement).toBe(false);
    expect(text).toMatch(/aucun cycle n'est actuellement actif/i);
    expect(text).not.toMatch(/Je propose le cycle/i);
  });

  it("C — confirmation of another object is not Delivery start agreement", () => {
    const stance = interpretPilotNarrativeStance({
      userContent: "Je confirme uniquement la date du livrable.",
      cycleLabel: "Delivery",
    });
    expect(stance.kind).toBe("confirm_other_subject");

    const text = composeF2PilotFacingNarrative(
      base({
        userContent: "Je confirme uniquement la date du livrable.",
      }),
    );
    expect(f2PilotNarrativeInvariants(text).acknowledgesAgreement).toBe(false);
    expect(text).toMatch(/ne vaut pas un accord de démarrage/i);
  });

  it("structured refuse beats lexical accept-looking words", () => {
    const stance = interpretPilotNarrativeStance({
      userContent: "Je confirme le démarrage de Delivery.",
      cycleLabel: "Delivery",
      pilotDecisionCandidate: refuseCandidate,
    });
    expect(stance.kind).toBe("refuse_start");
    expect(stance.source).toBe("structured");
  });

  it("structured accept on current_recommendation yields accept_start", () => {
    const stance = interpretPilotNarrativeStance({
      userContent: "ok pour la recommandation",
      cycleLabel: "Delivery",
      pilotDecisionCandidate: acceptCandidate,
    });
    expect(stance.kind).toBe("accept_start");
    expect(stance.source).toBe("structured");
  });

  it("J'accepte de démarrer Delivery → accept_start", () => {
    expect(
      interpretPilotNarrativeStance({
        userContent: "J'accepte de démarrer Delivery.",
        cycleLabel: "Delivery",
      }).kind,
    ).toBe("accept_start");
  });

  it("prefer wait before launch → defer_start", () => {
    expect(
      interpretPilotNarrativeStance({
        userContent: "Je préfère attendre avant de lancer Delivery.",
        cycleLabel: "Delivery",
      }).kind,
    ).toBe("defer_start");
  });

  it("unacceptable proposal → refuse_proposal", () => {
    expect(
      interpretPilotNarrativeStance({
        userContent: "Je confirme que la proposition n'est pas acceptable.",
        cycleLabel: "Delivery",
      }).kind,
    ).toBe("refuse_proposal");
  });
});

describe("P6-HQA-COG-01 CP01 — history continuity", () => {
  it("F — history about Cadrage is not Delivery continuity", () => {
    const continuity = assessHistoryContinuity({
      cycleLabel: "Delivery",
      history: [
        {
          role: "assistant",
          content:
            "Je propose le cycle « Cadrage ». Un cycle candidat est prêt.",
        },
        { role: "user", content: "ok pour le cadrage" },
      ],
    });
    expect(continuity.kind).toBe("other_subject");

    const text = composeF2PilotFacingNarrative(
      base({
        userContent: "Je confirme le démarrage de Delivery.",
        history: [
          {
            role: "assistant",
            content:
              "Je propose le cycle « Cadrage ». Un cycle candidat est prêt.",
          },
        ],
      }),
    );
    // Must not claim repeated-agreement continuity with Cadrage history.
    expect(f2PilotNarrativeInvariants(text).acknowledgesAgreement).toBe(false);
    expect(text).toMatch(/ne la rattache pas|intention de démarrer/i);
  });

  it("G — refused/stale history or status is not presented as available accept", () => {
    expect(
      assessHistoryContinuity({
        cycleLabel: "Delivery",
        proposalStatus: "STALE",
        history: [
          {
            role: "assistant",
            content: "Je propose le cycle « Delivery ».",
          },
        ],
      }).kind,
    ).toBe("refused_or_stale_hint");

    const text = composeF2PilotFacingNarrative(
      base({
        userContent: "Je confirme le démarrage de Delivery.",
        proposalStatus: "REFUSED",
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

  it("H — repeated accept on same current subject recognizes continuity without claiming start", () => {
    const history = [
      {
        role: "assistant" as const,
        content:
          "Je propose le cycle « Delivery ». Un cycle candidat est prêt ; il attend votre validation.",
      },
      { role: "user" as const, content: "ok pour Delivery" },
    ];
    expect(
      assessHistoryContinuity({ cycleLabel: "Delivery", history }).kind,
    ).toBe("same_subject_current");

    const text = composeF2PilotFacingNarrative(
      base({
        userContent:
          "Je confirme explicitement le démarrage du cycle Delivery déjà identifié.",
        history,
        pilotDecisionCandidate: acceptCandidate,
      }),
    );
    const inv = f2PilotNarrativeInvariants(text);
    expect(inv.acknowledgesAgreement).toBe(true);
    expect(inv.claimsActivationAccomplished).toBe(false);
    expect(text).toMatch(/ne l'active pas|aucune activation/i);
  });

  it("bare keyword 'proposition' without cycle match ≠ same_subject_current", () => {
    expect(
      assessHistoryContinuity({
        cycleLabel: "Delivery",
        history: [
          {
            role: "assistant",
            content: "Voici une proposition pour le livrable documentaire.",
          },
        ],
      }).kind,
    ).toBe("none");
  });
});

describe("P6-HQA-COG-01 CP01 — Product context & formulation", () => {
  it("D — same Product context, different intentions → relevant distinct responses", () => {
    const propose = composeF2PilotFacingNarrative(
      base({ userContent: "Peux-tu proposer le prochain cycle utile ?" }),
    );
    const refuse = composeF2PilotFacingNarrative(
      base({ userContent: "Non, ne démarre surtout pas Delivery." }),
    );
    const defer = composeF2PilotFacingNarrative(
      base({
        userContent: "Je préfère attendre avant de lancer Delivery.",
      }),
    );
    expect(propose).toMatch(/Je propose le cycle/i);
    expect(refuse).toMatch(/refus/i);
    expect(defer).toMatch(/attendre|Aucun démarrage/i);
    expect(new Set([propose, refuse, defer]).size).toBe(3);
  });

  it("E — same message, different Product active-cycle truth", () => {
    const msg = "Je confirme le démarrage de Delivery.";
    const inactive = composeF2PilotFacingNarrative(
      base({ userContent: msg, activeCycleInstanceId: null }),
    );
    const active = composeF2PilotFacingNarrative(
      base({
        userContent: msg,
        activeCycleInstanceId: "cycinst:active-1",
      }),
    );
    expect(inactive).toMatch(/pas actif|ne constitue pas|ne l'active pas/i);
    expect(active).toMatch(/déjà actif/i);
    expect(active).not.toEqual(inactive);
  });

  it("I — governance: no invented activation / HD language", () => {
    const text = composeF2PilotFacingNarrative(
      base({
        userContent: "J'accepte de démarrer Delivery.",
        executionBlocked: true,
        intentClass: "execution_request",
      }),
    );
    const inv = f2PilotNarrativeInvariants(text);
    expect(inv.claimsActivationAccomplished).toBe(false);
    expect(text).not.toMatch(/HumanDecision enregistr/i);
    expect(text).toMatch(/Rien n'a encore été exécuté/i);
  });

  it("J — refuse/defer/question stay lean (admin clause budget)", () => {
    const refuse = composeF2PilotFacingNarrative(
      base({ userContent: "Non, ne démarre surtout pas Delivery." }),
    );
    const question = composeF2PilotFacingNarrative(
      base({
        userContent: "Peux-tu confirmer que le cycle n'est pas actif ?",
      }),
    );
    expect(f2PilotNarrativeInvariants(refuse).adminClauseCount).toBeLessThanOrEqual(
      2,
    );
    expect(
      f2PilotNarrativeInvariants(question).adminClauseCount,
    ).toBeLessThanOrEqual(1);
    expect(refuse).not.toMatch(/Profil recommandé/i);
    expect(question).not.toMatch(/Profil recommandé/i);
    expect(question).not.toMatch(/Ceci reste une recommandation/i);
  });

  it("J — neutral propose keeps useful substance without engine stack", () => {
    const text = composeF2PilotFacingNarrative(base());
    const inv = f2PilotNarrativeInvariants(text);
    expect(inv.hasEngineContinue).toBe(false);
    expect(inv.hasReadyNoGate).toBe(false);
    expect(inv.hasQualificationAdminLead).toBe(false);
    expect(inv.hasStackedAuthorityFooter).toBe(false);
    expect(text).toMatch(/Je propose le cycle « Delivery »/i);
    expect(text).toMatch(/recommandation/i);
  });

  it("K — live/test presentation parity (Mode test marker only)", () => {
    const live = composeF2PilotFacingNarrative(base());
    const test = composeF2PilotFacingNarrative(
      base({ presentation: "test_provider" }),
    );
    expect(live).not.toMatch(/\[Mode /i);
    expect(test).toMatch(/^\[Mode test\]/);
    expect(test.replace(/^\[Mode test\]\s*/, "")).toBe(live);
  });

  it("active-cycle deliverable path remains distinct", () => {
    const text = composeF2PilotFacingNarrative(
      base({
        kind: "active_cycle_deliverable_proposal",
        userContent: "Prépare le livrable dans le cycle en cours.",
        activeCycleInstanceId: "cycinst:active-1",
        morrisGateRequired: true,
        executionBlocked: true,
      }),
    );
    expect(text).toMatch(/livrable/i);
    expect(text).toMatch(/cycle en cours est conservé/i);
    expect(text).not.toMatch(/Je propose le cycle/i);
  });
});
```

## FILE 3/4 — UNIFIED DIFF vs HEAD 8a196be1

### path: `projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index 8788abe6..66cb1ad8 100644
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
@@ -1887,23 +1888,37 @@ export async function orchestrateAssistantSend(input: {
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
+      proposalStatus: proposal.status,
+    });

     return await completeF2Turn({
       userText: content,
       sessionDbPath: input.sessionDbPath,
-      text: textParts.join(" "),
+      text: narrative,
       mode: modeResolution.mode as "fixture" | "live",
       presentation,
       model,
@@ -2220,36 +2235,38 @@ export async function orchestrateAssistantSend(input: {
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
+    proposalStatus: proposal.status,
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

## FILE 4/4 — UNIFIED DIFF vs HEAD 8a196be1

### path: `projects/sfia-studio/app/__tests__/project-assistant/corrProof01.d1.conversation.d0.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/corrProof01.d1.conversation.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/corrProof01.d1.conversation.d0.test.ts
index 2884de1f..8265a574 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/corrProof01.d1.conversation.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/corrProof01.d1.conversation.d0.test.ts
@@ -654,7 +654,10 @@ describe("CORR-PROOF-01 D1 shared-session hybrid", () => {
     expect(r.ok).toBe(true);
     if (!r.ok) return;
     expect(r.f2?.proposal).toBeTruthy();
-    expect(r.text).toMatch(/Qualification SFIA|proposition/i);
+    // P6-HQA-COG-01 — persisted body is pilot-facing (propose/proposition), not admin F2 lead.
+    expect(r.text).toMatch(/propos(e|ition)|cycle/i);
+    expect(r.text).not.toMatch(/Qualification SFIA et proposition structurée générées/i);
+    expect(r.text).not.toMatch(/CONTINUE\s*[—–-]\s*cognition propose-only/i);

     const after = await readSessionPairs(projectId, sessionDbPath);
     expect(after.users - before.users).toBe(1);
@@ -667,7 +670,8 @@ describe("CORR-PROOF-01 D1 shared-session hybrid", () => {
     expect(cont.ok).toBe(true);
     if (!cont.ok) return;
     expect(provider.lastAnalysisBlob).toMatch(/Contexte conversationnel canonique/);
-    expect(provider.lastAnalysisBlob).toContain("Qualification SFIA");
+    // Canonical context carries the persisted pilot-facing narrative (same as r.text).
+    expect(provider.lastAnalysisBlob).toMatch(/propos(e|ition)|Profil recommand/i);
   });

   it("T11 — F2 authority/execution-blocked surface: exactly one canonical pair", async () => {
```

---
END OF COMPLETE REVIEW PACK — P6-HQA-COG-01 CORRECTION PASS 01
