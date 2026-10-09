# ChatGPT Review Pack — P6 F01+UI05 INTEGRATED CLOSURE CORRECTION (COMPLETE)

- timestamp: 2026-10-09T05:42:34Z
- campaignId: P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
- findings: P6-HQA-F01 + P6-HQA-UI05
- pass: INTEGRATED CLOSURE CORRECTION
- cycle: 8 — Delivery / implémentation
- typology: EVOL
- profile: CRITICAL
- Morris GO consumed: P6 F01+UI05 INTEGRATED CLOSURE CORRECTION — LOCAL BOUNDED GO
- branch: qa/sfia-studio-p6-global-integrated-product-qa
- origin/main: aba6c4a617b6d0cb27f23b59de5bf0ac9360fab1
- local HEAD (INITIAL=FINAL): 8a196be1a35ffa2d43e52beddc66b51eab56c99c
- prior handoff: f020c9261c781fbece70e35707615974d55d1e88
- project commit/push/PR/merge: NONE
- HQ-01 data: NOT MUTATED
- UI-01…UI-04 / COG01 locals: PRESERVED
- P6 PASS: NOT CLAIMED
- runtime v3: NON ADOPTED

## Local Git Truth

```
BRANCH=qa/sfia-studio-p6-global-integrated-product-qa
HEAD=8a196be1a35ffa2d43e52beddc66b51eab56c99c
ORIGIN_MAIN=aba6c4a617b6d0cb27f23b59de5bf0ac9360fab1
```

## F01 — Diagnostic AVANT (from Critical f020c926)

F01-R1: structured accept + `hasExplicitStartIntentForSubject` could return accept_start
without the late-negation guards present on the lexical-only CLEAR_ACCEPT path.
Case: PilotDecisionCandidate accept + "Je confirme… mais finalement non."

F01-R2: "Peut-être démarrer Delivery" → ambiguous stance but not suppress_mint
(confirmish-only) → createCycle parasite risk.

F01-R3: after START, if `loadProjectRuntimeForAssistant` fails, pre-START project DTO
could remain in the response while Product activation already succeeded.

## F01 — Correction

1. `evaluateExplicitStartForSubject` — single contract for structured + lexical.
   Late defer/refuse/question after positive cue always wins; structured accept informative only.
2. `resolveChatFirstStartRouting` — ambiguous/hypothetical start discussion → suppress_mint;
   legitimate "Prépare un nouveau cycle…" remains not_start_path.
3. orchestrateF2 START success: patch `activeCycleInstanceId` / lpsVersion when projection
   reload fails; honest note that Product activation was verified / conversation projection unavailable.
4. Trivial eslint in orchestrateF2 (unused randomUUID + prefer-const) fixed in-scope
   (proven present at HEAD for randomUUID; prefer-const was in worktree path).

## UI05 — Diagnostic AVANT

`latestSynthesis` rendered as `data-ui05-object="execution-contract"` with
"Action préparée" / "Prête à examiner" / "confirmation potentiellement requise".
ProductSynthesis ≠ ExecutionContract.

## UI05 — Correction

- Synthesis → compact card `data-ui05-object="synthesis"` (Synthèse / consultation seule).
- Action préparée ONLY from `governedExecutionContinuity.kind === "active"` real contract
  (excluding confirmation_required which keeps GovernedConfirmationCard).
- No phantom Action préparée without a contract.
- Compact progressive disclosure preserved.

Figma 46:98 / 46:107 remain visual references. Runtime captures: NOT RUN — VISUAL PROOF MISSING (:3020 down).

## Files

| Path | Action |
|------|--------|
| f2/composeF2PilotFacingNarrative.ts | MODIFIED — evaluateExplicitStartForSubject |
| f2/resolveChatFirstCycleStartGate.ts | MODIFIED — ambiguous start suppress |
| f2/orchestrateF2.ts | MODIFIED — START DTO coherence + eslint |
| ConversationSurface.tsx | MODIFIED — synthesis vs EC semantic |
| p6.hqa.f01…d0.test.ts | MODIFIED — adversarial cases |
| p6.hqa.ui05…ui.test.tsx | MODIFIED — semantic truth cases |

## Validations

| Control | Result |
|---------|--------|
| F01 D0 + adversarial + START E2E | PASS |
| UI05 semantic/DOM | PASS |
| UI03/UI04 | PASS |
| COG01 CP02 | PASS |
| corrProof01 | PASS |
| candidateTrajectoryCycleStart | PASS |
| eslint all touched (incl. orchestrateF2) | PASS |
| next build | NOT RUN |
| UI05 runtime screenshots | NOT RUN — VISUAL PROOF MISSING |
| REAL provider | NONE |
| HQ-01 mutation | NONE |

## Fake / Real

F01 DETERMINISTIC E2E PROVEN including structured-accept adversarial + anti-mint.
UI05 SEMANTIC/DOM PROVEN. VISUAL RUNTIME NOT PROVEN.
Human QA / HQ-01 / P6 PASS / runtime v3: NOT CLAIMED.

## Reserves

1. UI05 visual runtime captures still missing.
2. HQ-01 five LEGACY_UNBOUND disposition = distinct Morris gate.
3. COG01 remains prior CP02 candidate (not CLOSED this pass).

## Verdicts

- **F01:** F01 CORRECTION ACCEPTANCE CANDIDATE — READY FOR CHATGPT CRITICAL RE-REVIEW
- **UI05:** UI05 SEMANTIC CORRECTION CANDIDATE — READY FOR CHATGPT CRITICAL RE-REVIEW
- **Global:** P6 F01+UI05 INTEGRATED CLOSURE CANDIDATE — READY FOR CHATGPT CRITICAL RE-REVIEW

**READY FOR CHATGPT CRITICAL REVIEW**

Instruction ChatGPT: read entire handoff including all code sections.

---

# COMPLETE MODIFIED CONTENT


## FILE 1 — resolveChatFirstCycleStartGate.ts (COMPLETE)
```typescript
/**
 * P6-HQA-F01 — chat-first cycle START gate (bounded).
 *
 * When the Pilot explicitly intends to start a cycle already in play:
 * - do NOT mint another F2 LEGACY_UNBOUND createCycle;
 * - reuse startPreparedTrajectoryCycle when a unique COMPLETE prepared cycle exists;
 * - otherwise fail closed with an honest blocker (no silent selection, no invented HD).
 *
 * Conversation agreement ≠ HumanDecision ≠ Confirmation ≠ activation.
 */

import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import {
  classifyTrajectoryBinding,
  startPreparedTrajectoryCycle,
  type CycleInstance,
} from "@/lib/oa/cycle";
import { getCycleTypeById } from "@/lib/oa/cycle/domain/cycleTypeCatalog";
import type { PilotDecisionCandidate } from "./types";
import {
  interpretPilotNarrativeStance,
  type PilotNarrativeStance,
} from "./composeF2PilotFacingNarrative";

export type ChatFirstStartSituation =
  | { readonly kind: "already_active"; readonly activeCycleInstanceId: string }
  | { readonly kind: "unique_prepared"; readonly cycleInstanceId: string }
  | { readonly kind: "ambiguous_prepared"; readonly count: number }
  | { readonly kind: "legacy_unbound_only"; readonly count: number }
  | { readonly kind: "no_prepared" };

export type ChatFirstCycleStartGateResult =
  | {
      readonly kind: "started";
      readonly cycleInstanceId: string;
      readonly activeCycleInstanceId: string;
      readonly catalogLabel: string | null;
      readonly lpsVersionAfter: number | undefined;
      readonly message: string;
    }
  | {
      readonly kind: "already_active";
      readonly activeCycleInstanceId: string;
      readonly message: string;
    }
  | {
      readonly kind: "blocked";
      readonly code: string;
      readonly message: string;
    };

function isPreparedStatus(status: CycleInstance["status"]): boolean {
  return status === "proposed" || status === "acknowledged";
}

/**
 * Detect explicit chat start intent for the subject cycle.
 *
 * P6-HQA-F01 integrated: stance is authoritative and fail-closed.
 * REFUSE / DEFER / QUESTION / AMBIGUOUS / accept_recommendation never
 * fall through to a permissive lexical START probe — that path previously
 * could promote "Je confirme… mais je refuse" to START.
 */
export function isChatFirstCycleStartIntent(input: {
  readonly userContent: string;
  readonly cycleLabel: string | null | undefined;
  readonly pilotDecisionCandidate?: PilotDecisionCandidate | null;
}): boolean {
  return resolveChatFirstStartRouting(input).kind === "attempt_start";
}

/**
 * Start-adjacent utterance that must not mint a new F2 createCycle when
 * stance is not accept_start (refuse / defer / question / ambiguous confirm).
 * Neutral propose paths remain eligible for createCycle.
 */
export function resolveChatFirstStartRouting(input: {
  readonly userContent: string;
  readonly cycleLabel: string | null | undefined;
  readonly pilotDecisionCandidate?: PilotDecisionCandidate | null;
}):
  | { readonly kind: "attempt_start"; readonly stance: PilotNarrativeStance }
  | {
      readonly kind: "suppress_mint";
      readonly stance: PilotNarrativeStance;
      readonly code: string;
      readonly message: string;
    }
  | { readonly kind: "not_start_path"; readonly stance: PilotNarrativeStance } {
  const stance = interpretPilotNarrativeStance({
    userContent: input.userContent,
    cycleLabel: input.cycleLabel,
    pilotDecisionCandidate: input.pilotDecisionCandidate,
  });
  if (stance.kind === "accept_start") {
    return { kind: "attempt_start", stance };
  }
  const text = (input.userContent ?? "").trim();
  const confirmish =
    /\b(confirm\w*|j['’]?accepte\s+de\s+(d[eé]marr|lancer|activer)|d[eé]marrage\s+effectif)\b/i.test(
      text,
    );
  const startTopic =
    /\b(d[eé]marr\w*|lanc\w*|activ(?:er|ation))\b/i.test(text);
  const legitimateNewQualification =
    /\b(pr[eé]pare|qualifie|propose|nouveau\s+cycle|nouvelle?\s+qualification)\b/i.test(
      text,
    ) && !confirmish;
  const hypotheticStart =
    startTopic &&
    /\b(peut[- ]?être|éventuellement|hypoth[eè]se|si\s+on|on\s+pourrait|pas\s+s[uû]r)\b/i.test(
      text,
    );
  // Ambiguous / hypothetical start discussion must not mint a new CycleInstance.
  // Legitimate new qualification ("Prépare un nouveau cycle…") stays open.
  const ambiguousStartDiscussion =
    stance.kind === "ambiguous" &&
    startTopic &&
    !legitimateNewQualification &&
    (confirmish || hypotheticStart || !/\b(pr[eé]pare|qualifie|propose)\b/i.test(text));
  const suppress =
    stance.kind === "refuse_start" ||
    stance.kind === "refuse_proposal" ||
    stance.kind === "defer_start" ||
    stance.kind === "question_status" ||
    stance.kind === "confirm_other_subject" ||
    (stance.kind === "ambiguous" && confirmish) ||
    ambiguousStartDiscussion;
  if (!suppress) {
    return { kind: "not_start_path", stance };
  }
  const code =
    stance.kind === "refuse_start" || stance.kind === "refuse_proposal"
      ? "START_REFUSED_BY_PILOT"
      : stance.kind === "defer_start"
        ? "START_DEFERRED_BY_PILOT"
        : stance.kind === "question_status"
          ? "START_QUESTION_NOT_ACTIVATION"
          : "START_INTENT_AMBIGUOUS";
  const cycle = (input.cycleLabel ?? "").trim()
    ? `« ${(input.cycleLabel ?? "").trim()} »`
    : "ce cycle";
  const message =
    code === "START_REFUSED_BY_PILOT"
      ? `Votre refus est pris en compte : aucun démarrage de ${cycle} n'a été engagé et aucun nouveau cycle n'a été créé.`
      : code === "START_DEFERRED_BY_PILOT"
        ? `Le démarrage de ${cycle} est reporté : aucun démarrage n'a été engagé et aucun nouveau cycle n'a été créé.`
        : code === "START_QUESTION_NOT_ACTIVATION"
          ? `Votre question ne démarre pas ${cycle}. Aucun nouveau cycle n'a été créé.`
          : `L'intention de démarrage pour ${cycle} n'est pas suffisamment claire. Aucun démarrage n'a été engagé et aucun nouveau cycle n'a été créé.`;
  return { kind: "suppress_mint", stance, code, message };
}

/**
 * Pure Product-shape classification — no mutation.
 * History/conversation is not used; only LPS + CycleInstance inventory.
 */
export function classifyChatFirstStartSituation(input: {
  readonly activeCycleInstanceId: string | null | undefined;
  readonly cycles: readonly CycleInstance[];
  readonly targetCycleTypeId: string;
}): ChatFirstStartSituation {
  const active = (input.activeCycleInstanceId ?? "").trim();
  if (active) {
    return { kind: "already_active", activeCycleInstanceId: active };
  }

  const target = input.targetCycleTypeId;
  const preparedComplete = input.cycles.filter(
    (c) =>
      c.cycleTypeId === target &&
      isPreparedStatus(c.status) &&
      classifyTrajectoryBinding(c) === "COMPLETE_TRAJECTORY_BOUND",
  );
  if (preparedComplete.length > 1) {
    return { kind: "ambiguous_prepared", count: preparedComplete.length };
  }
  if (preparedComplete.length === 1) {
    return {
      kind: "unique_prepared",
      cycleInstanceId: preparedComplete[0]!.cycleInstanceId,
    };
  }

  const legacy = input.cycles.filter(
    (c) =>
      c.cycleTypeId === target &&
      isPreparedStatus(c.status) &&
      classifyTrajectoryBinding(c) === "LEGACY_UNBOUND",
  );
  if (legacy.length > 0) {
    return { kind: "legacy_unbound_only", count: legacy.length };
  }
  return { kind: "no_prepared" };
}

export function chatFirstStartBlockMessage(input: {
  readonly code: string;
  readonly cycleLabel: string;
  readonly legacyCount?: number;
  readonly preparedCount?: number;
}): string {
  const cycle = input.cycleLabel.trim()
    ? `« ${input.cycleLabel.trim()} »`
    : "ce cycle";
  switch (input.code) {
    case "ACTIVE_CYCLE_PRESENT":
      return `Un cycle est déjà actif sur le projet. Aucun nouveau cycle n'a été créé et aucun second démarrage n'a été engagé.`;
    case "PREPARED_CYCLE_AMBIGUOUS":
      return `Plusieurs cycles ${cycle} préparés (liés à la trajectoire) sont disponibles (${input.preparedCount ?? "plusieurs"}). Studio ne sélectionne pas automatiquement lequel démarrer. Aucun nouveau cycle n'a été créé. Précisez le cycle dans Trajectoire, puis démarrez.`;
    case "LEGACY_UNBOUND_NOT_STARTABLE_VIA_CHAT":
      return `Des cycles ${cycle} existent déjà (${input.legacyCount ?? "plusieurs"}) mais ne sont pas liés à une trajectoire préparée — le démarrage Chat-first gouverné ne s'applique pas. Aucun cycle supplémentaire n'a été créé. Utilisez Trajectoire pour préparer puis démarrer un cycle lié, sans nouvelle qualification automatique.`;
    case "PREPARED_CYCLE_MISSING":
    case "NO_PREPARED_CYCLE":
      return `Aucun cycle ${cycle} préparé et lié à la trajectoire n'est disponible au démarrage. Votre confirmation en conversation n'active rien à elle seule. Aucun nouveau cycle n'a été créé. Préparez d'abord le cycle depuis Trajectoire (après décision de trajectoire si requise), puis démarrez.`;
    case "AUTHORITY_DENIED":
    case "LOCAL_AUTHORITY_DISABLED":
      return `Le démarrage de ${cycle} est refusé : autorité Pilote indisponible pour START. Aucun nouveau cycle n'a été créé. L'état vivant du projet reste inchangé.`;
    case "CYCLE_DECISION_REQUIRED":
      return `Le démarrage de ${cycle} nécessite encore une décision Pilote structurée sur la trajectoire. Aucun nouveau cycle n'a été créé et aucune décision n'a été inventée depuis la conversation.`;
    default:
      return `Le démarrage de ${cycle} n'a pas pu aboutir (${input.code}). Aucun nouveau cycle n'a été créé. Vérifiez Trajectoire / préconditions START — l'état vivant du projet n'est pas déclaré actif sans relecture Product.`;
  }
}

export function chatFirstStartSuccessMessage(input: {
  readonly cycleLabel: string | null;
  readonly cycleInstanceId: string;
}): string {
  const label = (input.cycleLabel ?? "").trim();
  const cycle = label ? `« ${label} »` : "le cycle";
  return `Le cycle ${cycle} est maintenant actif sur le projet (${input.cycleInstanceId}). L'état vivant a été relu après démarrage. Aucune exécution n'a été lancée par ce tour.`;
}

/**
 * Resolve chat-first start intent against Product inventory.
 * May invoke startPreparedTrajectoryCycle (existing governed START) once.
 * Never creates CycleInstances. Never invents HumanDecision.
 */
export async function resolveChatFirstCycleStartGate(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly targetCycleTypeId: string;
  readonly cycleLabel: string;
  readonly forceLocalAuthority?: boolean;
}): Promise<ChatFirstCycleStartGateResult> {
  const lps = await input.oa.projectServices.getCurrentLivingProjectState.execute(
    { projectId: input.projectId },
  );
  if (!lps.ok) {
    return {
      kind: "blocked",
      code: "LPS_UNAVAILABLE",
      message: chatFirstStartBlockMessage({
        code: "LPS_UNAVAILABLE",
        cycleLabel: input.cycleLabel,
      }),
    };
  }

  let cycles: CycleInstance[] = [];
  try {
    cycles = await input.oa.cycleServices.cycles.listByProject(input.projectId);
  } catch {
    return {
      kind: "blocked",
      code: "CYCLES_UNAVAILABLE",
      message: chatFirstStartBlockMessage({
        code: "CYCLES_UNAVAILABLE",
        cycleLabel: input.cycleLabel,
      }),
    };
  }

  const situation = classifyChatFirstStartSituation({
    activeCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
    cycles,
    targetCycleTypeId: input.targetCycleTypeId,
  });

  if (situation.kind === "already_active") {
    return {
      kind: "already_active",
      activeCycleInstanceId: situation.activeCycleInstanceId,
      message: chatFirstStartBlockMessage({
        code: "ACTIVE_CYCLE_PRESENT",
        cycleLabel: input.cycleLabel,
      }),
    };
  }

  if (situation.kind === "ambiguous_prepared") {
    return {
      kind: "blocked",
      code: "PREPARED_CYCLE_AMBIGUOUS",
      message: chatFirstStartBlockMessage({
        code: "PREPARED_CYCLE_AMBIGUOUS",
        cycleLabel: input.cycleLabel,
        preparedCount: situation.count,
      }),
    };
  }

  if (situation.kind === "legacy_unbound_only") {
    return {
      kind: "blocked",
      code: "LEGACY_UNBOUND_NOT_STARTABLE_VIA_CHAT",
      message: chatFirstStartBlockMessage({
        code: "LEGACY_UNBOUND_NOT_STARTABLE_VIA_CHAT",
        cycleLabel: input.cycleLabel,
        legacyCount: situation.count,
      }),
    };
  }

  if (situation.kind === "no_prepared") {
    return {
      kind: "blocked",
      code: "NO_PREPARED_CYCLE",
      message: chatFirstStartBlockMessage({
        code: "NO_PREPARED_CYCLE",
        cycleLabel: input.cycleLabel,
      }),
    };
  }

  // unique_prepared — reuse existing START facade (no F2 createCycle).
  const started = await startPreparedTrajectoryCycle({
    oa: input.oa,
    projectId: input.projectId,
    cycleInstanceId: situation.cycleInstanceId,
    forceLocalAuthority: input.forceLocalAuthority,
  });

  if (!started.ok) {
    return {
      kind: "blocked",
      code: started.code,
      message: chatFirstStartBlockMessage({
        code: started.code,
        cycleLabel: input.cycleLabel,
      }),
    };
  }

  // Re-read LPS before claiming activation.
  const lpsAfter =
    await input.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: input.projectId,
    });
  const activeId = lpsAfter.ok
    ? lpsAfter.livingProjectState.activeCycleInstanceId
    : null;
  if (!activeId || activeId !== started.activeCycleInstanceId) {
    return {
      kind: "blocked",
      code: "LPS_ACTIVE_MISMATCH_AFTER_START",
      message: chatFirstStartBlockMessage({
        code: "LPS_ACTIVE_MISMATCH_AFTER_START",
        cycleLabel: input.cycleLabel,
      }),
    };
  }

  const entry = getCycleTypeById(started.cycle.cycleTypeId);
  return {
    kind: "started",
    cycleInstanceId: started.cycle.cycleInstanceId,
    activeCycleInstanceId: activeId,
    catalogLabel: started.catalogLabel ?? entry?.label ?? null,
    lpsVersionAfter: started.lpsVersionAfter,
    message: chatFirstStartSuccessMessage({
      cycleLabel: input.cycleLabel || started.catalogLabel,
      cycleInstanceId: started.cycle.cycleInstanceId,
    }),
  };
}
```

## FILE 2 — composeF2PilotFacingNarrative.ts (COMPLETE)
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
```

## FILE 3 — F01 tests (COMPLETE)
```typescript
/** @vitest-environment node */
/**
 * P6-HQA-F01 — chat-first START gate (deterministic).
 * Proves: start intent does not classify as free createCycle; legacy ≠ prepared;
 * ambiguous prepared fail-closed; already-active recognized; anti-duplication via F2 send.
 */

import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  setConversationProviderForTests,
  type ConversationProvider,
  type ProviderChatMessage,
  type ProviderCompletionResult,
  type ProviderInputItem,
  type ProviderRoundResult,
} from "@/lib/platform/ai";
import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
import { resetMw5ChallengeStoreForTests } from "@/features/project-assistant/f2/mw5ChallengeSessionStore";
import {
  chatFirstStartBlockMessage,
  classifyChatFirstStartSituation,
  isChatFirstCycleStartIntent,
  resolveChatFirstStartRouting,
} from "@/features/project-assistant/f2/resolveChatFirstCycleStartGate";
import { interpretPilotNarrativeStance } from "@/features/project-assistant/f2/composeF2PilotFacingNarrative";
import type { CycleInstance } from "@/lib/oa/cycle";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";

function cycle(partial: Partial<CycleInstance> & { cycleInstanceId: string }): CycleInstance {
  return {
    schemaVersion: "0.1.0-oa",
    cycleInstanceId: partial.cycleInstanceId,
    cycleTypeId: partial.cycleTypeId ?? "cyc:delivery",
    projectId: partial.projectId ?? "prj:test",
    status: partial.status ?? "acknowledged",
    profile: partial.profile ?? "Standard",
    createdAt: partial.createdAt ?? "2026-01-01T00:00:00.000Z",
    trajectoryId: partial.trajectoryId,
    trajectoryVersion: partial.trajectoryVersion,
    trajectoryStepId: partial.trajectoryStepId,
    ckcResolutionRef: partial.ckcResolutionRef,
    qualificationSignals: partial.qualificationSignals,
  };
}

function lastUserContent(messages: ProviderChatMessage[]): string {
  for (let i = messages.length - 1; i >= 0; i -= 1) {
    if (messages[i]?.role === "user") return messages[i]!.content;
  }
  return "";
}

function demandeCourante(blob: string): string {
  const marker = "Demande courante (à évaluer):";
  const idx = blob.indexOf(marker);
  if (idx < 0) return blob;
  return blob.slice(idx + marker.length).trim();
}

class F01FakeProvider implements ConversationProvider {
  readonly providerId = "fake-test";
  private n = 0;

  async completeStructured(input: {
    messages: ProviderChatMessage[];
    schemaName: string;
    jsonSchema: Record<string, unknown>;
  }): Promise<ProviderCompletionResult> {
    void input.schemaName;
    void input.jsonSchema;
    return this.complete(input.messages);
  }

  async complete(messages: ProviderChatMessage[]): Promise<ProviderCompletionResult> {
    this.n += 1;
    const current = demandeCourante(lastUserContent(messages));
    const usage = {
      inputTokens: 10,
      outputTokens: 5,
      totalTokens: 15,
      model: "fake-test-model",
      providerResponseId: `f01-${this.n}`,
    };
    const actionable = {
      intentClass: "actionable",
      candidateCycleTypeId: "cyc:delivery",
      signals: {
        structuralChange: false,
        securityImpact: false,
        architectureImpact: false,
        dataImpact: false,
        irreversible: false,
        lowRiskBounded: true,
      },
      cognitiveWorkload: null,
      contradictionCandidate: null,
      challengeResponseAssessment: null,
      objective: "Livrer la note",
      scope: "Sans exécution",
      rephrasedRequest: current.slice(0, 120),
      outOfScope: ["Cursor"],
      risks: [],
      reservations: [],
      stopConditions: ["AUCUNE EXÉCUTION"],
      activatedBlocks: ["qualification", "proposition"],
      expectedOutcome: "Proposition",
      criticalJustification: null,
      requestedOperation: null,
      executionIntent: null,
      continuationKind: null,
      artifactMaterializationOperation: null,
      pilotDecisionCandidate: null,
    };
    return {
      text: `[TEST/FAKE · NON LIVE] ${JSON.stringify(actionable)}`,
      usage,
    };
  }

  async completeRound(input: {
    items: ProviderInputItem[];
    tools: unknown[];
  }): Promise<ProviderRoundResult> {
    void input.tools;
    return {
      kind: "message",
      text: "[TEST/FAKE · NON LIVE] f01",
      usage: {
        inputTokens: 1,
        outputTokens: 1,
        totalTokens: 2,
        model: "fake-test-model",
        providerResponseId: "f01-round",
      },
    };
  }
}

describe("P6-HQA-F01 isChatFirstCycleStartIntent", () => {
  it("explicit démarrage → true; propose / ok recommandation → false", () => {
    expect(
      isChatFirstCycleStartIntent({
        userContent: "Je confirme le démarrage du cycle Delivery déjà proposé.",
        cycleLabel: "Delivery",
      }),
    ).toBe(true);
    // Catalog label form must still match user "Delivery".
    expect(
      isChatFirstCycleStartIntent({
        userContent:
          "Je confirme explicitement le démarrage du cycle Delivery déjà proposé.",
        cycleLabel: "Delivery / implémentation",
      }),
    ).toBe(true);
    expect(
      isChatFirstCycleStartIntent({
        userContent: "J'accepte de démarrer Delivery.",
        cycleLabel: "Delivery",
      }),
    ).toBe(true);
    expect(
      isChatFirstCycleStartIntent({
        userContent: "Prépare un cycle Delivery pour la note.",
        cycleLabel: "Delivery",
      }),
    ).toBe(false);
    expect(
      isChatFirstCycleStartIntent({
        userContent: "ok pour la recommandation",
        cycleLabel: "Delivery",
        pilotDecisionCandidate: {
          disposition: "accept",
          targetKind: "current_recommendation",
          rationale: "ok",
        },
      }),
    ).toBe(false);
    expect(
      isChatFirstCycleStartIntent({
        userContent: "Non, ne démarre surtout pas Delivery.",
        cycleLabel: "Delivery",
      }),
    ).toBe(false);
  });

  it("refuse / defer / question / late negation never promote START", () => {
    const cases: Array<{ content: string; label?: string }> = [
      {
        content:
          "Je confirme le démarrage de Delivery, mais finalement je refuse.",
      },
      {
        content:
          "Je confirme le démarrage du cycle Delivery, mais finalement non.",
      },
      { content: "Je préfère attendre avant de démarrer Delivery." },
      { content: "Est-ce que Delivery est actif ?" },
      {
        content: "Je confirme le démarrage de Cadrage.",
        label: "Delivery",
      },
      {
        content: "ok pour la recommandation Delivery",
        label: "Delivery / implémentation",
      },
    ];
    for (const c of cases) {
      expect(
        isChatFirstCycleStartIntent({
          userContent: c.content,
          cycleLabel: c.label ?? "Delivery",
          pilotDecisionCandidate:
            c.content.startsWith("ok ")
              ? {
                  disposition: "accept",
                  targetKind: "current_recommendation",
                  rationale: "ok",
                }
              : null,
        }),
        c.content,
      ).toBe(false);
    }
  });

  it("structured accept + late negation / defer / question → never START", () => {
    const structuredAccept = {
      disposition: "accept" as const,
      targetKind: "current_recommendation" as const,
      rationale: "ok",
    };
    const adversarial = [
      {
        content:
          "Je confirme le démarrage de Delivery, mais finalement non.",
        stance: "refuse_start",
      },
      {
        content:
          "Je confirme le démarrage de Delivery, mais finalement je refuse.",
        stance: "refuse_start",
      },
      {
        content:
          "Je confirme le démarrage de Delivery, mais pas maintenant.",
        stance: "defer_start",
      },
      {
        content: "Je confirme le démarrage de Delivery ?",
        stance: "question_status",
      },
      {
        content: "Je confirme le démarrage de Cadrage.",
        stance: "ambiguous",
      },
    ];
    for (const c of adversarial) {
      const stance = interpretPilotNarrativeStance({
        userContent: c.content,
        cycleLabel: "Delivery",
        pilotDecisionCandidate: structuredAccept,
      });
      expect(stance.kind, c.content).toBe(c.stance);
      expect(
        isChatFirstCycleStartIntent({
          userContent: c.content,
          cycleLabel: "Delivery",
          pilotDecisionCandidate: structuredAccept,
        }),
        c.content,
      ).toBe(false);
      expect(
        resolveChatFirstStartRouting({
          userContent: c.content,
          cycleLabel: "Delivery",
          pilotDecisionCandidate: structuredAccept,
        }).kind,
        c.content,
      ).toBe("suppress_mint");
    }
  });

  it("hypothetical / ambiguous start discussion suppresses mint; prepare stays open", () => {
    expect(
      resolveChatFirstStartRouting({
        userContent: "Peut-être démarrer Delivery.",
        cycleLabel: "Delivery",
      }).kind,
    ).toBe("suppress_mint");
    expect(
      resolveChatFirstStartRouting({
        userContent: "Faut-il démarrer Delivery ?",
        cycleLabel: "Delivery",
      }).kind,
    ).toBe("suppress_mint");
    expect(
      resolveChatFirstStartRouting({
        userContent: "Prépare un nouveau cycle Delivery pour un autre livrable.",
        cycleLabel: "Delivery",
      }).kind,
    ).toBe("not_start_path");
  });
});

describe("P6-HQA-F01 classifyChatFirstStartSituation", () => {
  it("already active", () => {
    expect(
      classifyChatFirstStartSituation({
        activeCycleInstanceId: "cyc:trj-active",
        targetCycleTypeId: "cyc:delivery",
        cycles: [],
      }),
    ).toEqual({
      kind: "already_active",
      activeCycleInstanceId: "cyc:trj-active",
    });
  });

  it("unique COMPLETE prepared Delivery", () => {
    const s = classifyChatFirstStartSituation({
      activeCycleInstanceId: null,
      targetCycleTypeId: "cyc:delivery",
      cycles: [
        cycle({
          cycleInstanceId: "cyc:trj-prep-1",
          trajectoryId: "trj:1",
          trajectoryVersion: 2,
          trajectoryStepId: "step:delivery",
          status: "acknowledged",
        }),
        cycle({
          cycleInstanceId: "cyc:f2-legacy-1",
          status: "acknowledged",
        }),
      ],
    });
    expect(s).toEqual({
      kind: "unique_prepared",
      cycleInstanceId: "cyc:trj-prep-1",
    });
  });

  it("ambiguous prepared → no auto-select", () => {
    const s = classifyChatFirstStartSituation({
      activeCycleInstanceId: null,
      targetCycleTypeId: "cyc:delivery",
      cycles: [
        cycle({
          cycleInstanceId: "cyc:trj-a",
          trajectoryId: "trj:1",
          trajectoryVersion: 1,
          trajectoryStepId: "step:a",
        }),
        cycle({
          cycleInstanceId: "cyc:trj-b",
          trajectoryId: "trj:1",
          trajectoryVersion: 1,
          trajectoryStepId: "step:b",
        }),
      ],
    });
    expect(s.kind).toBe("ambiguous_prepared");
  });

  it("legacy unbound only (HQ-01-like) → not startable via chat gate", () => {
    const s = classifyChatFirstStartSituation({
      activeCycleInstanceId: null,
      targetCycleTypeId: "cyc:delivery",
      cycles: [
        cycle({ cycleInstanceId: "cyc:f2-1" }),
        cycle({ cycleInstanceId: "cyc:f2-2" }),
        cycle({ cycleInstanceId: "cyc:f2-3" }),
        cycle({ cycleInstanceId: "cyc:f2-4" }),
        cycle({ cycleInstanceId: "cyc:f2-5" }),
      ],
    });
    expect(s).toEqual({ kind: "legacy_unbound_only", count: 5 });
  });

  it("no prepared", () => {
    expect(
      classifyChatFirstStartSituation({
        activeCycleInstanceId: null,
        targetCycleTypeId: "cyc:delivery",
        cycles: [],
      }).kind,
    ).toBe("no_prepared");
  });

  it("block messages never claim activation / invent HD", () => {
    for (const code of [
      "LEGACY_UNBOUND_NOT_STARTABLE_VIA_CHAT",
      "NO_PREPARED_CYCLE",
      "PREPARED_CYCLE_AMBIGUOUS",
      "ACTIVE_CYCLE_PRESENT",
    ]) {
      const msg = chatFirstStartBlockMessage({
        code,
        cycleLabel: "Delivery",
        legacyCount: 5,
        preparedCount: 2,
      });
      expect(msg).toMatch(/Aucun (nouveau )?cycle|déjà actif/i);
      expect(msg).not.toMatch(/HumanDecision enregistr/i);
      expect(msg).not.toMatch(/cycle est maintenant actif/i);
    }
  });
});

describe("P6-HQA-F01 F2 send anti-duplication (legacy unbound)", () => {
  const tempDirs: string[] = [];
  let projectId = "";
  let sessionDbPath = "";
  let provider: F01FakeProvider;
  const previousFake = process.env.OPS1_CONVERSATION_PROVIDER;

  beforeEach(async () => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    delete process.env.OPENAI_API_KEY;
    delete process.env.OPENAI_MODEL;
    provider = new F01FakeProvider();
    setConversationProviderForTests(provider);
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetRuntimeApplicationServiceForTests();
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-f01-"));
    tempDirs.push(dir);
    sessionDbPath = path.join(dir, "nora-session.sqlite");
    const runtime = getRuntimeApplicationService({
      productDbPath: path.join(dir, "oa-product.sqlite"),
      auditMode: "noop",
      nowIso: "2026-09-06T15:00:00.000Z",
    });
    const created = await runtime.createProject({
      name: "F01 Delivery start",
      objective: "Exit proof Delivery",
      context: "P6-HQA-F01",
      criticality: "STANDARD",
      constraints: [],
      shortReference: "F01",
      idempotencyKey: `idem:f01-${Date.now()}-${Math.random()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("F01 setup failed");
    projectId = created.projectId;
  });

  afterEach(() => {
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetRuntimeApplicationServiceForTests();
    while (tempDirs.length) {
      const d = tempDirs.pop();
      if (d) fs.rmSync(d, { recursive: true, force: true });
    }
    if (previousFake === undefined) delete process.env.OPS1_CONVERSATION_PROVIDER;
    else process.env.OPS1_CONVERSATION_PROVIDER = previousFake;
  });

  it("propose then start-confirm: no N+1 unbound cycle; honest block; LPS inactive", async () => {
    const runtime = getRuntimeApplicationService();
    const propose = await orchestrateAssistantSend({
      projectId,
      content: "Prépare un cycle Delivery pour livrer la note.",
      sessionDbPath,
      provider,
    });
    expect(propose.ok).toBe(true);
    if (!propose.ok) return;

    const cyclesAfterPropose = await runtime.oa!.cycleServices.cycles.listByProject(
      projectId,
    );
    expect(cyclesAfterPropose.length).toBe(1);
    expect(cyclesAfterPropose[0]!.cycleInstanceId.startsWith("cyc:f2-")).toBe(
      true,
    );

    const confirm = await orchestrateAssistantSend({
      projectId,
      content:
        "Je confirme explicitement le démarrage du cycle Delivery déjà proposé.",
      sessionDbPath,
      provider,
    });
    expect(confirm.ok).toBe(true);
    if (!confirm.ok) return;

    const cyclesAfterConfirm = await runtime.oa!.cycleServices.cycles.listByProject(
      projectId,
    );
    expect(cyclesAfterConfirm.length).toBe(1);
    expect(confirm.text).toMatch(/Aucun cycle supplémentaire n'a été créé|ne sont pas liés/i);
    expect(confirm.text).not.toMatch(/est maintenant actif/i);

    const lps = await runtime.oa!.projectServices.getCurrentLivingProjectState.execute(
      { projectId },
    );
    expect(lps.ok).toBe(true);
    if (lps.ok) {
      expect(lps.livingProjectState.activeCycleInstanceId ?? null).toBeNull();
    }

    // Repeated confirm still does not mint.
    const again = await orchestrateAssistantSend({
      projectId,
      content: "Je confirme le démarrage de Delivery.",
      sessionDbPath,
      provider,
    });
    expect(again.ok).toBe(true);
    const cyclesFinal = await runtime.oa!.cycleServices.cycles.listByProject(
      projectId,
    );
    expect(cyclesFinal.length).toBe(1);
  });

  it("contradictory start+refuse: no START, no mint, LPS inactive", async () => {
    const runtime = getRuntimeApplicationService();
    await orchestrateAssistantSend({
      projectId,
      content: "Prépare un cycle Delivery pour livrer la note.",
      sessionDbPath,
      provider,
    });
    const before = await runtime.oa!.cycleServices.cycles.listByProject(projectId);
    const refuse = await orchestrateAssistantSend({
      projectId,
      content:
        "Je confirme le démarrage de Delivery, mais finalement je refuse.",
      sessionDbPath,
      provider,
    });
    expect(refuse.ok).toBe(true);
    if (!refuse.ok) return;
    const after = await runtime.oa!.cycleServices.cycles.listByProject(projectId);
    expect(after.length).toBe(before.length);
    expect(refuse.text).not.toMatch(/est maintenant actif/i);
    const lps = await runtime.oa!.projectServices.getCurrentLivingProjectState.execute(
      { projectId },
    );
    expect(lps.ok && (lps.livingProjectState.activeCycleInstanceId ?? null)).toBe(
      null,
    );
  });
});

describe("P6-HQA-F01 START success via orchestrateAssistantSend (prepared)", () => {
  const tempDirs: string[] = [];
  const previousFake = process.env.OPS1_CONVERSATION_PROVIDER;
  const previousAuth = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
  const previousPilot = process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
  let provider: F01FakeProvider;

  const APP_ROOT = path.resolve(__dirname, "../..");
  const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
  const SCHEMAS = path.resolve(
    APP_ROOT,
    "../sfia-v3-modeled/v3-native-option-a/schemas",
  );

  beforeEach(() => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    delete process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
    delete process.env.OPENAI_API_KEY;
    delete process.env.OPENAI_MODEL;
    provider = new F01FakeProvider();
    setConversationProviderForTests(provider);
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetRuntimeApplicationServiceForTests();
  });

  afterEach(() => {
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetRuntimeApplicationServiceForTests();
    while (tempDirs.length) {
      const d = tempDirs.pop();
      if (d) fs.rmSync(d, { recursive: true, force: true });
    }
    if (previousFake === undefined) delete process.env.OPS1_CONVERSATION_PROVIDER;
    else process.env.OPS1_CONVERSATION_PROVIDER = previousFake;
    if (previousAuth === undefined) {
      delete process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    } else {
      process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = previousAuth;
    }
    if (previousPilot === undefined) {
      delete process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
    } else {
      process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = previousPilot;
    }
  });

  it("unique COMPLETE prepared Delivery → START once; LPS/CycleInstance coherent; no mint; turn not proposal", async () => {
    const {
      prepareCandidateTrajectoryFromCurrentRecommendation,
      prepareCycleFromValidatedTrajectory,
      materializeLifecycleRecommendationFromStructuredOutput,
      resolveTrajectoryBootstrapPresence,
      NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
      classifyTrajectoryBinding,
    } = await import("@/lib/oa/cycle");
    const {
      approveCandidateTrajectory,
      buildPreCycleCandidateApprovalPresentation,
    } = await import(
      "@/features/project-assistant/approveCandidateTrajectory"
    );
    const { PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT } = await import(
      "@/lib/nora-cognitive-runtime/noraProductTurnOutputType"
    );

    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-f01-start-"));
    tempDirs.push(dir);
    const productDbPath = path.join(dir, "oa-product.sqlite");
    const sessionDbPath = path.join(dir, "nora-session.sqlite");
    const runtime = getRuntimeApplicationService({
      registryRoot: FIXTURES,
      schemasRoot: SCHEMAS,
      productDbPath,
      auditMode: "noop",
      nowIso: "2026-09-10T08:00:00.000Z",
    });
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: "F01 START success",
      objective: "Livrer Delivery gouverné",
      context: "P6-HQA-F01 START",
      criticality: "STANDARD",
      constraints: [],
      shortReference: "F01S",
      idempotencyKey: `idem:f01-start-${Date.now()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("create failed");
    const projectId = created.projectId;

    const signals = {
      structuralChange: false,
      securityImpact: false,
      architectureImpact: false,
      dataImpact: false,
      irreversible: false,
      lowRiskBounded: true,
    };
    const lr = {
      intent: "NEXT_CYCLE" as const,
      statement: "Envisager un Delivery.",
      subjectCycleInstanceId: null,
      targetCycleInstanceId: null,
      targetCycleTypeId: "cyc:delivery",
      rationale: "Prochain travail gouverné supportable.",
      authority: "none" as const,
      isHumanDecision: false as const,
      qualificationSignals: { ...signals },
    };
    const cycles0 = await oa.cycleServices.cycles.listByProject(projectId);
    const decisions0 = await oa.decisionServices.decisions.listByProject(
      projectId,
    );
    const lps0 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps0.ok).toBe(true);
    if (!lps0.ok) throw new Error("lps0");
    const presence = await resolveTrajectoryBootstrapPresence(
      oa.cycleServices.trajectories,
      projectId,
    );
    const project = await oa.projectServices.getProject.execute({ projectId });
    const doctrine = project.ok ? project.project.doctrinePackageRef : null;
    const mat = await materializeLifecycleRecommendationFromStructuredOutput({
      projectId,
      structuredOutput: {
        narrative: "Narrative Delivery recommandée.",
        preCycleRoutingAssessment: {
          ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
        },
        lifecycleRecommendation: lr,
      },
      updateEpistemicState: oa.cycleServices.updateEpistemicState,
      facts: {
        cycles: cycles0,
        lpsActiveCycleInstanceId: lps0.livingProjectState.activeCycleInstanceId,
        lpsVersion: lps0.livingProjectState.version,
        doctrinePackageId: doctrine?.doctrinePackageId ?? "pkg:studio-v3-oa",
        doctrinePackageVersion: doctrine?.version ?? "1.0.0",
        doctrinePackageDigest: doctrine?.digest ??
          ("sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as never),
        trajectory: null,
        trajectoryBootstrapPresence: presence,
        decisions: decisions0,
        evidence: [],
        epistemicItems: await oa.cycleServices.epistemic.listByProject(projectId),
      },
      producedAt: "2026-09-10T08:01:00.000Z",
      createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
    });
    expect(mat.materialization?.ok).toBe(true);

    const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
      projectId,
      deps: {
        trajectories: oa.cycleServices.trajectories,
        createInitialTrajectory: oa.cycleServices.createInitialTrajectory,
        updateEpistemicState: oa.cycleServices.updateEpistemicState,
        runInTransaction: ((fn: () => Promise<unknown>) =>
          oa.projectServices.store.runInTransaction(fn)) as <T>(
          fn: () => Promise<T>,
        ) => Promise<T>,
        listEpistemicByProject: (pid: string) =>
          oa.cycleServices.epistemic.listByProject(pid),
        listCyclesByProject: (pid: string) =>
          oa.cycleServices.cycles.listByProject(pid),
        listDecisionsByProject: (pid: string) =>
          oa.decisionServices.decisions.listByProject(pid),
        listEvidenceByProject: (pid: string) =>
          oa.evidenceReviewServices.repository.listByProject(pid),
        getCurrentLps: (pid: string) =>
          oa.projectServices.getCurrentLivingProjectState.execute({
            projectId: pid,
          }),
        getProjectDoctrinePin: async (pid: string) => {
          const p = await oa.projectServices.getProject.execute({
            projectId: pid,
          });
          if (!p.ok) return null;
          const pin = p.project.doctrinePackageRef;
          return pin
            ? {
                doctrinePackageId: pin.doctrinePackageId,
                version: pin.version,
                digest: pin.digest,
              }
            : null;
        },
        newTrajectoryId: () => "trj:f01-start",
        newStepId: () => "stp:f01-start",
        newProvenanceObservationId: () => "epi:trj-prov-f01-start",
        correlationId: "cor:f01-start-bridge",
      },
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) throw new Error("bridge failed");

    const presentation = await buildPreCycleCandidateApprovalPresentation({
      oa,
      projectId,
    });
    expect(presentation.ok).toBe(true);
    if (!presentation.ok || !presentation.presentation) {
      throw new Error("presentation missing");
    }
    const approved = await approveCandidateTrajectory({
      oa,
      projectId,
      presentationDigest: presentation.presentation.presentationDigest,
      forceLocalAuthority: true,
    });
    expect(approved.ok).toBe(true);
    if (!approved.ok) throw new Error("approve failed");

    const prep = await prepareCycleFromValidatedTrajectory({
      oa,
      projectId,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(`prepare failed: ${prep.code}`);
    expect(classifyTrajectoryBinding(prep.cycle)).toBe(
      "COMPLETE_TRAJECTORY_BOUND",
    );
    const preparedId = prep.cycle.cycleInstanceId;

    const cyclesBefore = await oa.cycleServices.cycles.listByProject(projectId);
    expect(cyclesBefore.length).toBe(1);

    const start = await orchestrateAssistantSend({
      projectId,
      content:
        "Je confirme explicitement le démarrage du cycle Delivery déjà proposé.",
      sessionDbPath,
      provider,
    });
    expect(start.ok).toBe(true);
    if (!start.ok) return;

    expect(start.text).toMatch(/est maintenant actif/i);
    expect(start.text).toMatch(new RegExp(preparedId.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    expect(start.ok && start.f2?.turnKind).toBe("f1_informative");
    expect(start.ok && start.f2?.turnKind).not.toBe("f2_proposal");

    const cyclesAfter = await oa.cycleServices.cycles.listByProject(projectId);
    expect(cyclesAfter.length).toBe(1);
    expect(cyclesAfter[0]!.cycleInstanceId).toBe(preparedId);
    expect(cyclesAfter[0]!.status).toBe("active");

    const lpsAfter = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lpsAfter.ok).toBe(true);
    if (lpsAfter.ok) {
      expect(lpsAfter.livingProjectState.activeCycleInstanceId).toBe(preparedId);
    }

    // Repeat: no second START / no mint.
    const again = await orchestrateAssistantSend({
      projectId,
      content: "Je confirme le démarrage de Delivery.",
      sessionDbPath,
      provider,
    });
    expect(again.ok).toBe(true);
    if (!again.ok) return;
    expect(again.text).toMatch(/déjà actif/i);
    const cyclesFinal = await oa.cycleServices.cycles.listByProject(projectId);
    expect(cyclesFinal.length).toBe(1);
  });
});
```

## FILE 4 — UI05 tests (COMPLETE)
```typescript
/** @vitest-environment jsdom */
/**
 * P6-HQA-UI05 — compact Recommendation / Proposal / ExecutionContract objects
 * (Figma 46:98 / 46:107 progressive disclosure).
 */
import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ConversationSurface } from "@/features/pre-m6-product-ui/surfaces/ConversationSurface";
import type { ProductConversationController } from "@/features/pre-m6-product-ui/hooks/useProductConversation";
import type { ProposalDto } from "@/features/project-assistant/f2/types";
import { F2_PROCESS_LOCAL_NOTICE } from "@/features/project-assistant/f2/proposalStore";
import type { ProductSynthesisProjection } from "@/lib/oa/synthesis";

afterEach(() => {
  cleanup();
});

const QUALIFICATION = {
  cycleTypeId: "cycle:delivery",
  cycleLabel: "Delivery / implémentation",
  recommendedProfile: "Standard",
  rationale: "default_standard",
  criticalSignalsPresent: false,
  requiresJustificationForCritical: false,
  capitalizationViaCycleTypeId: false,
  isMorrisDecision: false as const,
  catalogVersion: "1",
  catalogHash: "h",
  detailedStatus: "ok",
  disclosures: [],
  signals: {
    structuralChange: false,
    securityImpact: false,
    architectureImpact: false,
    dataImpact: false,
    irreversible: false,
    lowRiskBounded: true,
  },
  recommendationLabel: "RECOMMANDATION — PAS UNE DÉCISION HUMAINE" as const,
  cycleInstanceId: "cyc:ui05-proposed",
  cycleStatus: "proposed",
};

const PROPOSAL: ProposalDto = {
  proposalId: "prop:f2:ui05",
  status: "READY_NO_GATE",
  rephrasedRequest:
    "Démarrer le cycle Delivery pour produire, revoir et valider le livrable.",
  objective: "Démarrer le cycle Delivery.",
  cycleTypeId: "cycle:delivery",
  recommendedProfile: "Standard",
  rationale: "default_standard",
  scope: "Qualification et préparation du démarrage Delivery",
  outOfScope: ["Cursor REAL", "écriture Git"],
  activatedBlocks: [],
  expectedOutcome: "Cycle Delivery prêt à être démarré.",
  sources: [],
  risks: [],
  reservations: [],
  stopConditions: ["AUCUNE EXÉCUTION"],
  morrisGateRequired: false,
  nextPossibleStep: "AUCUNE EXÉCUTION — F2 S'ARRÊTE ICI",
  contextSnapshot: {
    projectId: "prj:ui05",
    lpsId: "lps:ui05",
    lpsVersion: 3,
    doctrineDigest: "doctrine:test",
    activeCycleInstanceId: null,
  },
  processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
  executionForbidden: true,
  noExecutingStatus: true,
  agentBinding: "NOT_AVAILABLE",
};

const SYNTHESIS = {
  synthesisId: "syn:ui05",
  title: "Synthèse — Mise à jour de l'espace projet",
  verdictLabel: "indetermine",
  sections: {
    summary: "Portée limitée à deux fichiers. Confirmation potentiellement requise.",
    verdict: "Indéterminé",
    evidence: "",
    next: "",
    risks: "",
  },
} as unknown as ProductSynthesisProjection;

function stubController(
  overrides: Partial<ProductConversationController>,
): ProductConversationController {
  return {
    listRef: { current: null },
    messages: [],
    draft: "",
    setDraft: vi.fn(),
    toolEvents: [],
    uiState: "ANSWERED",
    error: null,
    modeLabel: "fixture",
    ephemeralNotice: "notice",
    lrMaterializeNotice: null,
    lrMaterializeCode: null,
    f2: {
      turnKind: "f2_proposal",
      intentClass: "actionable",
      qualification: QUALIFICATION,
      proposal: PROPOSAL,
      decision: null,
      labels: {
        recommendation: "RECOMMANDATION",
        proposition: "PROPOSITION",
        decisionRequired: null,
        decisionTaken: null,
        noExecution: "AUCUNE EXÉCUTION",
      },
      executionBlocked: false,
      processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
    },
    activeProposal: PROPOSAL,
    reservesText: "",
    setReservesText: vi.fn(),
    f3Prepare: null,
    f3M3Resolved: null,
    f3Execute: null,
    durableEvidenceOutcome: null,
    durableRehydrateError: null,
    focusTurnId: null,
    clearFocusTurn: vi.fn(),
    busy: false,
    blocked: false,
    canSend: true,
    stopAvailable: false,
    stopCurrentResponse: vi.fn(),
    gateOpen: false,
    recommendationFreshness: "none",
    qualificationFreshness: {
      status: "current",
      label: "Recommandation à jour",
    },
    durableOutcomeFreshness: "none",
    canPrepareResolvedM3: false,
    canPrepareLegacyFixture: false,
    canConfirmResolvedM3: false,
    canConfirmLegacyFixture: false,
    canRefreshResolvedM3Running: false,
    sendMessage: vi.fn(),
    decide: vi.fn(),
    prepareResolvedM3: vi.fn(),
    prepareLegacyFixture: vi.fn(),
    confirmAndExecuteResolvedM3: vi.fn(),
    confirmAndExecuteLegacyFixture: vi.fn(),
    refreshResolvedM3RunningAttempt: vi.fn(),
    retryLastUserMessage: vi.fn(),
    reservationResolutionProposal: null,
    transcriptAvailability: "available",
    openContinuityPresentation: null,
    journalEntries: [],
    journalCycleInstanceId: null,
    selectedJournalEntryId: null,
    setSelectedJournalEntryId: vi.fn(),
    focusJournalExchanges: vi.fn(),
    focusTranscriptTurn: vi.fn(),
    refreshConversationContinuity: vi.fn(),
    armReinstructionOfProposalId: vi.fn(),
    armedReinstructionOfProposalId: null,
    armReservationInteractionContext: vi.fn(),
    armedReservationInteractionContext: null,
    clearReservationResolutionProposal: vi.fn(),
    ...overrides,
  } as ProductConversationController;
}

function pilotVisibleText(el: HTMLElement): string {
  const clone = el.cloneNode(true) as HTMLElement;
  clone
    .querySelectorAll(
      '[class*="srOnly"], [class*="sr-only"], [aria-hidden="true"]',
    )
    .forEach((node) => node.remove());
  return (clone.textContent || "").replace(/\s+/g, " ").trim();
}

describe("P6-HQA-UI05 compact object cards", () => {
  it("Recommendation closed by default — type/title/meta/status/Ouvrir", () => {
    render(<ConversationSurface controller={stubController({})} />);
    const card = screen.getByTestId("project-assistant-qualification");
    expect(card).toHaveAttribute("data-ui05-object", "recommendation");
    expect(card).toHaveAttribute("data-expanded", "false");
    expect(within(card).getByText(/^Recommandation$/i)).toBeInTheDocument();
    expect(screen.getByTestId("f2-cycle")).toHaveTextContent(/Delivery/i);
    expect(screen.getByTestId("f2-recommendation-state")).toHaveTextContent(
      /Candidat prêt|À examiner|pas encore démarré/i,
    );
    const open = screen.getByTestId("f2-recommendation-open");
    expect(open).toHaveTextContent(/Ouvrir/i);
    expect(open).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByTestId("f2-recommendation-details")).toBeNull();
    const visible = pilotVisibleText(card);
    expect(visible).not.toMatch(/READY_NO_GATE/);
    expect(visible).not.toMatch(/f2-rationale-technical/i);
  });

  it("Recommendation opens and closes; details restored", () => {
    render(<ConversationSurface controller={stubController({})} />);
    fireEvent.click(screen.getByTestId("f2-recommendation-open"));
    expect(screen.getByTestId("project-assistant-qualification")).toHaveAttribute(
      "data-expanded",
      "true",
    );
    expect(screen.getByTestId("f2-recommendation-details")).toBeInTheDocument();
    expect(screen.getByTestId("f2-rationale")).toBeVisible();
    fireEvent.click(screen.getByTestId("f2-recommendation-open"));
    expect(screen.queryByTestId("f2-recommendation-details")).toBeNull();
  });

  it("Proposal ≠ Recommendation; READY_NO_GATE ≠ DECISION_REQUIRED", () => {
    render(<ConversationSurface controller={stubController({})} />);
    const rec = screen.getByTestId("project-assistant-qualification");
    const prop = screen.getByTestId("project-assistant-proposal");
    expect(rec).toHaveAttribute("data-ui05-object", "recommendation");
    expect(prop).toHaveAttribute("data-ui05-object", "proposal");
    expect(screen.getByTestId("f2-proposal-status-label")).toHaveTextContent(
      /Candidat prêt/i,
    );
    expect(pilotVisibleText(prop)).not.toMatch(/En attente de décision/);

    cleanup();
    render(
      <ConversationSurface
        controller={stubController({
          activeProposal: {
            ...PROPOSAL,
            status: "DECISION_REQUIRED",
            morrisGateRequired: true,
          },
          f2: {
            turnKind: "f2_proposal",
            intentClass: "actionable",
            qualification: QUALIFICATION,
            proposal: {
              ...PROPOSAL,
              status: "DECISION_REQUIRED",
              morrisGateRequired: true,
            },
            decision: null,
            labels: {
              recommendation: "RECOMMANDATION",
              proposition: "PROPOSITION",
              decisionRequired: "DÉCISION REQUISE",
              decisionTaken: null,
              noExecution: "AUCUNE EXÉCUTION",
            },
            executionBlocked: false,
            processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
          },
        })}
      />,
    );
    expect(screen.getByTestId("f2-proposal-status-label")).toHaveTextContent(
      /En attente de décision/i,
    );
  });

  it("Proposal progressive disclosure preserves next-action contract", () => {
    render(<ConversationSurface controller={stubController({})} />);
    expect(screen.queryByTestId("f2-proposal-details")).toBeNull();
    fireEvent.click(screen.getByTestId("f2-proposal-open"));
    const next = screen.getByTestId("f2-proposal-next-action");
    expect(next).toHaveAttribute("data-next-kind", "conversation");
    expect(next).toHaveTextContent(/Nora/i);
    expect(screen.getByTestId("f2-gate-required")).toHaveTextContent(
      /Aucune décision structurée/i,
    );
  });

  it("ProductSynthesis alone is never an ExecutionContract / Action préparée", () => {
    const onOpen = vi.fn();
    render(
      <ConversationSurface
        controller={stubController({})}
        latestSynthesis={SYNTHESIS}
        onOpenSynthesis={onOpen}
      />,
    );
    const synth = screen.getByTestId("conversation-synthesis-card");
    expect(synth).toHaveAttribute("data-ui05-object", "synthesis");
    expect(within(synth).getByText(/^Synthèse$/i)).toBeInTheDocument();
    expect(screen.queryByTestId("conversation-prepared-action-card")).toBeNull();
    expect(document.querySelector('[data-ui05-object="execution-contract"]')).toBeNull();
    const visible = pilotVisibleText(synth);
    expect(visible).not.toMatch(/Action préparée/i);
    expect(visible).not.toMatch(/confirmation potentiellement requise/i);
    fireEvent.click(screen.getByTestId("conversation-open-synthesis"));
    expect(onOpen).toHaveBeenCalledWith("syn:ui05");
    expect(screen.getByTestId("conversation-synthesis-details")).toBeInTheDocument();
  });

  it("true ExecutionContract projects Action préparée with Product status", () => {
    render(
      <ConversationSurface
        controller={stubController({
          governedExecutionContinuity: {
            ok: true,
            kind: "active",
            decisionRef: "hd:ui05",
            contract: {
              executionContractId: "xct:ui05",
              version: 1,
              status: "validated",
              action: "Mise à jour de l'espace projet",
              target: "workspace",
              scope: "Portée · 2 fichiers",
              requiredAuthority: "N3",
              constraints: [],
              stopConditions: [],
              requiredCapabilities: [],
              reversibility: "réversible",
              semanticFingerprint: "fp",
              effectConfirmationRequired: false,
              inspectionDisclosure: {},
            },
            inspection: { inspectionSufficient: true },
          } as never,
        })}
      />,
    );
    const card = screen.getByTestId("conversation-prepared-action-card");
    expect(card).toHaveAttribute("data-ui05-object", "execution-contract");
    expect(card).toHaveAttribute("data-contract-status", "validated");
    expect(within(card).getByText(/Action préparée/i)).toBeInTheDocument();
    expect(within(card).getByText(/Prête à examiner/i)).toBeInTheDocument();
    expect(within(card).getByText(/Mise à jour de l'espace projet/i)).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("conversation-open-prepared-action"));
    expect(screen.getByTestId("conversation-prepared-action-details")).toBeInTheDocument();
  });

  it("absence of contract yields no phantom Action préparée card", () => {
    render(<ConversationSurface controller={stubController({})} />);
    expect(screen.queryByTestId("conversation-prepared-action-card")).toBeNull();
    expect(document.querySelector('[data-ui05-object="execution-contract"]')).toBeNull();
  });

  it("Ouvrir does not expose mutation START affordance", () => {
    render(<ConversationSurface controller={stubController({})} />);
    fireEvent.click(screen.getByTestId("f2-recommendation-open"));
    fireEvent.click(screen.getByTestId("f2-proposal-open"));
    const visible = pilotVisibleText(document.body);
    expect(visible).not.toMatch(/Démarrer maintenant/i);
    expect(screen.queryByRole("button", { name: /^Démarrer$/i })).toBeNull();
  });
});
```

## FILE 5 — orchestrateF2.ts DIFF (vs HEAD)
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index 8788abe6..b8823e65 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -3,7 +3,7 @@
  * Stops before any execution. M2: Cycle/LPS/CKC linkage durable; conversation/proposal process-local.
  */

-import { randomBytes, randomUUID } from "node:crypto";
+import { randomBytes } from "node:crypto";
 import {
   isFakeConversationProviderForced,
   type ConversationProvider,
@@ -79,6 +79,11 @@ import {
   reasonWithResolvedCkcContext,
 } from "./ckcCognitiveContext";
 import { composeStudioCognitiveContext } from "./studioCognitiveContext";
+import { composeF2PilotFacingNarrative } from "./composeF2PilotFacingNarrative";
+import {
+  resolveChatFirstCycleStartGate,
+  resolveChatFirstStartRouting,
+} from "./resolveChatFirstCycleStartGate";
 import { resolveTrajectoryDecisionSupportProjection } from "../w2/resolveTrajectoryDecisionSupportProjection";
 import {
   parseReservationInteractionContextInput,
@@ -1298,7 +1303,8 @@ export async function orchestrateAssistantSend(input: {
     };
   }

-  let { analysis, model } = analysisResult;
+  const model = analysisResult.model;
+  let analysis = analysisResult.analysis;
   if (analysis.signals) {
     analysis = {
       ...analysis,
@@ -1887,23 +1893,39 @@ export async function orchestrateAssistantSend(input: {
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
@@ -2059,6 +2081,114 @@ export async function orchestrateAssistantSend(input: {
     });
   }

+  // P6-HQA-F01 — start-adjacent chat must not mint LEGACY_UNBOUND createCycle.
+  // accept_start → reuse startPreparedTrajectoryCycle (or honest block).
+  // refuse/defer/question/ambiguous confirm → suppress mint, no START.
+  const startRouting = resolveChatFirstStartRouting({
+    userContent: content,
+    cycleLabel: qualification.cycleLabel,
+    pilotDecisionCandidate: analysis.pilotDecisionCandidate,
+  });
+  if (startRouting.kind === "suppress_mint") {
+    await cutF2Effect(input.signal, "createCycle", input.beforeF2Effect);
+    return await completeF2Turn({
+      userText: content,
+      sessionDbPath: input.sessionDbPath,
+      text: startRouting.message,
+      mode: modeResolution.mode as "fixture" | "live",
+      presentation,
+      model,
+      project,
+      intentClass: analysis.intentClass,
+      reinstructionOfProposalId,
+      qualification,
+      executionBlocked: true,
+      mw5: mw5.surface,
+      turnKind: "f2_clarification",
+    });
+  }
+  if (startRouting.kind === "attempt_start") {
+    await cutF2Effect(input.signal, "createCycle", input.beforeF2Effect);
+    const startGate = await resolveChatFirstCycleStartGate({
+      oa,
+      projectId: project.projectId,
+      targetCycleTypeId: qualification.cycleTypeId,
+      cycleLabel: qualification.cycleLabel,
+    });
+
+    const reloadedAfterGate = await loadProjectRuntimeForAssistant(
+      project.projectId,
+    );
+    let conversationProjectionReloaded = false;
+    if (reloadedAfterGate.ok) {
+      project = toContextDto(reloadedAfterGate);
+      conversationProjectionReloaded = true;
+    }
+
+    if (startGate.kind === "started") {
+      // LPS verified inside startGate. If conversation projection reload fails,
+      // patch known activation fields — never claim the pre-START project DTO
+      // is current, and never claim START failed when Product activation succeeded.
+      if (!conversationProjectionReloaded) {
+        project = {
+          ...project,
+          activeCycleInstanceId: startGate.activeCycleInstanceId,
+          ...(typeof startGate.lpsVersionAfter === "number"
+            ? { lpsVersion: startGate.lpsVersionAfter }
+            : {}),
+        };
+      }
+      const text = conversationProjectionReloaded
+        ? startGate.message
+        : `${startGate.message} La projection conversationnelle n'a pas pu être rechargée ; l'activation a été vérifiée sur l'état vivant Product.`;
+      return await completeF2Turn({
+        userText: content,
+        sessionDbPath: input.sessionDbPath,
+        text,
+        mode: modeResolution.mode as "fixture" | "live",
+        presentation,
+        model,
+        project,
+        intentClass: analysis.intentClass,
+        reinstructionOfProposalId,
+        qualification: {
+          ...qualification,
+          cycleInstanceId: startGate.cycleInstanceId,
+          cycleStatus: "active",
+        },
+        executionBlocked: true,
+        mw5: mw5.surface,
+        turnKind: "f1_informative",
+      });
+    }
+
+    if (reloadedAfterGate.ok) {
+      // already applied
+    } else if (startGate.kind === "already_active") {
+      project = {
+        ...project,
+        activeCycleInstanceId: startGate.activeCycleInstanceId,
+      };
+    }
+
+    return await completeF2Turn({
+      userText: content,
+      sessionDbPath: input.sessionDbPath,
+      text: startGate.message,
+      mode: modeResolution.mode as "fixture" | "live",
+      presentation,
+      model,
+      project,
+      intentClass: analysis.intentClass,
+      reinstructionOfProposalId,
+      qualification,
+      executionBlocked: true,
+      mw5: mw5.surface,
+      turnKind:
+        startGate.kind === "already_active" ? "f2_blocked" : "f2_clarification",
+    });
+  }
+
   const cycleInstanceId = `cyc:f2-${randomBytes(8).toString("hex")}`;
   await cutF2Effect(input.signal, "createCycle", input.beforeF2Effect);
   const created = await oa.cycleServices.createCycle.execute({
@@ -2220,36 +2350,40 @@ export async function orchestrateAssistantSend(input: {
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

## FILE 6 — ConversationSurface.tsx COMPLETE
```tsx
"use client";

import {
  BOUNDED_RUNNING_REFRESH_ACTION,
  BOUNDED_RUNNING_REFRESH_HELP,
  BOUNDED_RUNNING_REFRESH_TITLE,
  G_UX_08_AMEND_DEFERRED_MESSAGE,
  SFIA_ASSISTANT_ANSWERED_EVENT,
  attemptStatusUserLabel,
  confirmationPathChip,
  contractUserFacingFacts,
  evidenceVerifiedUserLabel,
  executionSemanticKind,
  executionSemanticUserLabel,
  formatNoraAssistantDisplayText,
  isBoundedRunningAttemptRefreshable,
  pilotFacingF2ChipLabel,
  postExecutionUserSummary,
  projectPilotProposalCard,
  projectPilotRecommendationCard,
  scrubPiloteFacingEngineJargon,
} from "@/features/project-assistant/presentationLabels";
import type { AssistantToolEventDto } from "@/features/project-assistant/types";
import type { F2DecisionKind } from "@/features/project-assistant/f2/types";
import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import type { ProductConversationController } from "../hooks/useProductConversation";
import type { ProductSynthesisProjection } from "@/lib/oa/synthesis";
import type { WorkRecommendationProjectionCard } from "@/lib/oa/cycle/application/deriveWorkRecommendations";
import {
  presentSynthesisVerdictLabel,
  synthesisSummaryExcerpt,
} from "./synthesisPresentation";
import { projectNoraActivity } from "./noraActivityProjection";
import {
  GovernedDecisionCard,
  presentGovernedDecisionNoraPreface,
} from "./GovernedDecisionCard";
import { GovernedConfirmationCard } from "./GovernedConfirmationCard";
import styles from "./ConversationSurface.module.css";

/**
 * RC-02 — human-facing active-cycle label (pure presentation; no OA import).
 * Mirrors formatReservationActiveCycleFacingLabel without pulling server modules.
 */
function formatReservationActiveCycleFacingLabel(
  cycleLabel: string | null | undefined,
): string {
  const t = typeof cycleLabel === "string" ? cycleLabel.trim() : "";
  if (!t) return "Cycle actif";
  if (/\bacti[fv]\b/i.test(t)) return t;
  return `${t} actif`;
}

const DECISION_ACTIONS: readonly {
  kind: F2DecisionKind;
  label: string;
  tone: "primary" | "secondary" | "quiet" | "danger";
}[] = [
  { kind: "GO", label: "Approuver", tone: "primary" },
  { kind: "GO_WITH_RESERVES", label: "Approuver avec réserves", tone: "secondary" },
  { kind: "AMEND", label: "Demander une modification", tone: "quiet" },
  { kind: "NO_GO", label: "Rejeter", tone: "danger" },
];

function sourceStatusLabel(status: AssistantToolEventDto["status"]): string {
  switch (status) {
    case "succeeded":
      return "Consulté";
    case "denied":
      return "Refusé";
    case "failed":
      return "Échec";
    case "started":
      return "En cours";
    default:
      return "Demandé";
  }
}

/** P6-HQA-UI05 — honest compact status (Figma 46:98 / 46:107). */
function f2RecommendationStatusLabel(input: {
  readonly proposalStatus?: string | null;
  readonly cycleStatus?: string | null;
  readonly state?: string | null;
}): string {
  const cycle = (input.cycleStatus ?? "").toLowerCase();
  if (cycle === "active" || cycle === "executing") return "Cycle actif";
  const status = (input.proposalStatus ?? "").toUpperCase();
  if (status === "DECISION_REQUIRED") return "En attente de décision";
  if (status === "READY_NO_GATE") return "Candidat prêt";
  if (status === "AMENDMENT_REQUIRED") return "Modification demandée";
  if (status === "REFUSED") return "Refusé";
  const state = (input.state ?? "").trim();
  if (state) return state.length > 42 ? `${state.slice(0, 39)}…` : state;
  return "À examiner";
}

function f2ProposalStatusLabel(input: {
  readonly proposalStatus?: string | null;
  readonly nextActionKind?: string | null;
}): string {
  const status = (input.proposalStatus ?? "").toUpperCase();
  if (status === "DECISION_REQUIRED") return "En attente de décision";
  if (status === "READY_NO_GATE") return "Candidat prêt";
  if (status === "AMENDMENT_REQUIRED") return "Modification demandée";
  if (status === "REFUSED") return "Refusé";
  if (input.nextActionKind === "decision") return "En attente de décision";
  return "À examiner";
}

function f2ObjectMetaLine(parts: Array<string | null | undefined>): string {
  const clean = parts
    .map((p) => (p ?? "").replace(/\s+/g, " ").trim())
    .filter((p) => p.length > 0);
  if (clean.length === 0) return "Projet · selon la direction produit actuelle";
  return clean.slice(0, 3).join(" · ");
}

export type ConversationSurfaceProps = {
  controller: ProductConversationController;
  /**
   * TEST / HARVEST harness only. When true, restores historical F2 gate + F3
   * prepare/confirm-execute affordances. Product `/studio` path must leave this
   * unset/false so TrajectorySurface remains the sole authority/execute chain.
   */
  exposeLegacyAuthorityPath?: boolean;
  /**
   * RESERVATION-CONTEXT-PILOT-CONFIRMATION-01 — same governed Pilot confirm
   * as Journal « Confirmer la levée » (no duplicate mutation path).
   */
  onConfirmReservationResolve?: (epistemicItemId: string) => void;
  reservationConfirmBusyId?: string | null;
  latestSynthesis?: ProductSynthesisProjection | null;
  onOpenSynthesis?: (synthesisId: string) => void;
  /**
   * P3 46:2 — active Work Recommendations projected into the conversation
   * (same durable cards as Journal › Recommandations). Presentation only.
   */
  workRecommendations?: readonly WorkRecommendationProjectionCard[];
  onResumeRecommendation?: (recommendationId: string) => void;
};

/**
 * Nora conversation + qualification surface.
 * P3 chat-first: governed Decision / Confirmation project INLINE here via
 * existing W2 reads/mutations. TrajectorySurface stays state/audit (and
 * execute continuity). Legacy F2/F3 stays behind `exposeLegacyAuthorityPath`
 * for harvest / RETIRE LATER proofs only — never enabled on nominal /studio.
 */
/** Sync textarea height to content up to CSS max-height; then scroll internally. */
function syncComposerTextareaHeight(el: HTMLTextAreaElement | null): void {
  if (!el) return;
  el.style.height = "auto";
  const maxRaw = getComputedStyle(el).maxHeight;
  const maxPx = maxRaw === "none" ? Number.POSITIVE_INFINITY : parseFloat(maxRaw);
  const next = Number.isFinite(maxPx)
    ? Math.min(el.scrollHeight, maxPx)
    : el.scrollHeight;
  el.style.height = `${Math.max(next, 0)}px`;
}

export function ConversationSurface({
  controller,
  exposeLegacyAuthorityPath = false,
  onConfirmReservationResolve,
  reservationConfirmBusyId = null,
  latestSynthesis = null,
  onOpenSynthesis,
  workRecommendations = [],
  onResumeRecommendation,
}: ConversationSurfaceProps) {
  const fieldId = useId();
  const liveRegionId = useId();
  const composerInputRef = useRef<HTMLTextAreaElement | null>(null);
  const [recommendationOpen, setRecommendationOpen] = useState(
    exposeLegacyAuthorityPath,
  );
  const [proposalOpen, setProposalOpen] = useState(exposeLegacyAuthorityPath);
  const [synthesisOpen, setSynthesisOpen] = useState(false);
  const [executionContractOpen, setExecutionContractOpen] = useState(false);
  const {
    listRef,
    messages,
    draft,
    setDraft,
    toolEvents,
    uiState,
    error,
    modeLabel,
    ephemeralNotice,
    lrMaterializeNotice,
    lrMaterializeCode,
    f2,
    activeProposal,
    decisionSubjectContinuity,
    governedExecutionContinuity,
    decisionAlternateIndex,
    governedMomentBusy,
    governedMomentError,
    decideGovernedDirection,
    revealGovernedDecisionAlternate,
    inspectGovernedContract,
    confirmGovernedContract,
    reservesText,
    setReservesText,
    f3Prepare,
    f3M3Resolved,
    f3Execute,
    durableEvidenceOutcome,
    durableRehydrateError,
    focusTurnId,
    clearFocusTurn,
    busy,
    blocked,
    canSend,
    gateOpen,
    recommendationFreshness,
    qualificationFreshness,
    durableOutcomeFreshness,
    canPrepareResolvedM3,
    canPrepareLegacyFixture,
    canConfirmResolvedM3,
    canConfirmLegacyFixture,
    canRefreshResolvedM3Running,
    sendMessage,
    stopAvailable,
    stopCurrentResponse,
    decide,
    prepareResolvedM3,
    prepareLegacyFixture,
    confirmAndExecuteResolvedM3,
    confirmAndExecuteLegacyFixture,
    refreshResolvedM3RunningAttempt,
    retryLastUserMessage,
    reservationResolutionProposal,
  } = controller;

  // Notify LifecycleSurface after Nora answers so CURRENT LR can reproject.
  useEffect(() => {
    if (uiState !== "ANSWERED") return;
    if (typeof window === "undefined") return;
    window.dispatchEvent(new CustomEvent(SFIA_ASSISTANT_ANSWERED_EVENT));
  }, [uiState, messages.length]);

  useEffect(() => {
    if (!focusTurnId) return;
    const el = document.getElementById(`pilot-turn-${focusTurnId}`);
    if (el instanceof HTMLElement) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.focus({ preventScroll: true });
    }
    clearFocusTurn();
  }, [focusTurnId, clearFocusTurn, messages.length]);

  const attemptLabel = f3Execute
    ? attemptStatusUserLabel(f3Execute.attempt.status)
    : null;
  const runningRefreshVisible = isBoundedRunningAttemptRefreshable({
    attemptStatus: f3Execute?.attempt.status,
    realProcessInvoked: f3Execute?.attempt.realProcessInvoked,
    executionMode: f3Execute?.attempt.executionMode,
    payloadMode: f3Execute?.mode,
    contractStatus: f3Execute?.contract.status,
  });
  const contractFacts = f3M3Resolved
    ? contractUserFacingFacts(f3M3Resolved.successor)
    : null;
  const executeSemantic = f3Execute
    ? executionSemanticUserLabel({
        mode: f3Execute.mode,
        payloadMode: f3Execute.mode,
        executionMode: f3Execute.attempt.executionMode,
        adapterId: f3Execute.attempt.adapterId,
        adapterRef: f3Execute.attempt.adapterRef,
        realProcessInvoked: f3Execute.attempt.realProcessInvoked,
        realExecution: f3Execute.realExecution,
        processRef: f3Execute.attempt.processRef,
        evidenceId: f3Execute.evidence.evidenceId,
        reviewBundleId: f3Execute.reviewBundle.reviewBundleId,
      })
    : null;
  const executeKind = f3Execute
    ? executionSemanticKind({
        mode: f3Execute.mode,
        payloadMode: f3Execute.mode,
        executionMode: f3Execute.attempt.executionMode,
        adapterId: f3Execute.attempt.adapterId,
        adapterRef: f3Execute.attempt.adapterRef,
        realProcessInvoked: f3Execute.attempt.realProcessInvoked,
        realExecution: f3Execute.realExecution,
        processRef: f3Execute.attempt.processRef,
        evidenceId: f3Execute.evidence.evidenceId,
      })
    : "none";
  const executeSummary = f3Execute
    ? postExecutionUserSummary({
        attemptStatus: f3Execute.attempt.status,
        evidenceStatus: f3Execute.evidence.status,
        reviewBundleStatus: f3Execute.reviewBundle.status,
        nextGateCode: f3Execute.recommendation.nextGateCode,
        nextActionCode: f3Execute.recommendation.nextActionCode,
        analysisText: f3Execute.recommendation.analysisText,
        analysisStatus: f3Execute.recommendation.analysisStatus,
      })
    : null;
  const durableSemanticFacts = durableEvidenceOutcome
    ? {
        mode: durableEvidenceOutcome.recommendation.mode,
        evidenceId: durableEvidenceOutcome.evidence[0]?.evidenceId,
        reviewBundleId: durableEvidenceOutcome.reviewBundles[0]?.reviewBundleId,
        durableRead: true as const,
      }
    : null;
  const durableSemantic = durableSemanticFacts
    ? executionSemanticUserLabel(durableSemanticFacts)
    : null;
  const durableSummary = durableEvidenceOutcome
    ? postExecutionUserSummary({
        evidenceStatus: durableEvidenceOutcome.evidence[0]?.status,
        reviewBundleStatus: durableEvidenceOutcome.reviewBundles[0]?.status,
        nextGateCode: durableEvidenceOutcome.recommendation.nextGateCode,
        nextActionCode: durableEvidenceOutcome.recommendation.nextActionCode,
        analysisText: durableEvidenceOutcome.recommendation.analysisText,
        analysisStatus: durableEvidenceOutcome.recommendation.analysisStatus,
        durableRecorded: true,
      })
    : null;
  const showFixtureNoRealStamp =
    executeKind !== "cursor_real" &&
    executeKind !== "deterministic_test" &&
    executionSemanticKind(durableSemanticFacts) !== "cursor_real" &&
    executionSemanticKind(durableSemanticFacts) !== "durable_read";
  const noraActivity = projectNoraActivity({
    blocked,
    busy,
    uiState,
    stopAvailable,
  });
  /**
   * DP06 / P3 §28 — transient Nora activity belongs in the transcript, not the
   * composer. STREAMING is NOT OBSERVABLE on this Product path (no fake stream).
   * start/activity only; STOPPED/ERROR keep their dedicated banners below.
   */
  const showNoraActivityInThread =
    noraActivity.phase === "start" || noraActivity.phase === "activity";
  const pilotRecommendationCard = f2?.qualification
    ? projectPilotRecommendationCard({
        cycleLabel: f2.qualification.cycleLabel,
        recommendedProfile: f2.qualification.recommendedProfile,
        rationale: f2.qualification.rationale,
        criticalSignalsPresent: f2.qualification.criticalSignalsPresent,
        cycleStatus: f2.qualification.cycleStatus,
        cycleInstanceId: f2.qualification.cycleInstanceId,
        freshnessLabel: qualificationFreshness.label,
      })
    : null;
  const pilotProposalCard = activeProposal
    ? projectPilotProposalCard({
        rephrasedRequest: activeProposal.rephrasedRequest,
        objective: activeProposal.objective,
        rationale: activeProposal.rationale,
        expectedOutcome: activeProposal.expectedOutcome,
        scope: activeProposal.scope,
        outOfScope: activeProposal.outOfScope,
        morrisGateRequired: activeProposal.morrisGateRequired,
        status: activeProposal.status,
        nextPossibleStep: activeProposal.nextPossibleStep,
        cycleLabel: f2?.qualification?.cycleLabel,
        cycleStatus: f2?.qualification?.cycleStatus,
        cycleInstanceId: f2?.qualification?.cycleInstanceId,
      })
    : null;
  const pilotEphemeralNotice = (() => {
    const raw = (ephemeralNotice ?? "").trim();
    if (!raw) return "";
    // Process-local F2 disclosure — keep full text on legacy/diagnostic only.
    if (
      !exposeLegacyAuthorityPath &&
      /Product SQLite|TEMPORARY WITH EXIT|mémoire de processus/i.test(raw)
    ) {
      return "La recommandation et la proposition restent distinctes d'une décision. Rien n'est exécuté automatiquement.";
    }
    return scrubPiloteFacingEngineJargon(raw);
  })();

  const boundAwaitingDecision =
    !!decisionSubjectContinuity &&
    typeof decisionSubjectContinuity === "object" &&
    "ok" in decisionSubjectContinuity &&
    decisionSubjectContinuity.ok &&
    decisionSubjectContinuity.kind === "bound_awaiting_decision";
  const confirmationRequiredMoment =
    !!governedExecutionContinuity &&
    typeof governedExecutionContinuity === "object" &&
    "ok" in governedExecutionContinuity &&
    governedExecutionContinuity.ok &&
    governedExecutionContinuity.kind === "active" &&
    governedExecutionContinuity.contract.status === "confirmation_required" &&
    !boundAwaitingDecision;
  /** True ExecutionContract prepared (not a ProductSynthesis). */
  const preparedExecutionContract =
    !!governedExecutionContinuity &&
    typeof governedExecutionContinuity === "object" &&
    "ok" in governedExecutionContinuity &&
    governedExecutionContinuity.ok &&
    governedExecutionContinuity.kind === "active" &&
    !confirmationRequiredMoment
      ? governedExecutionContinuity.contract
      : null;
  const focusedGovernedMoment =
    boundAwaitingDecision || confirmationRequiredMoment;

  function executionContractStatusLabel(contract: {
    readonly status: string;
    readonly effectConfirmationRequired?: boolean;
  }): string {
    if (
      contract.status === "confirmation_required" ||
      contract.effectConfirmationRequired === true
    ) {
      return "Confirmation requise";
    }
    if (contract.status === "confirmed") return "Confirmé";
    if (
      contract.status === "validated" ||
      contract.status === "proposed" ||
      contract.status === "draft"
    ) {
      return "Prête à examiner";
    }
    return contract.status;
  }

  useLayoutEffect(() => {
    if (focusedGovernedMoment) return;
    syncComposerTextareaHeight(composerInputRef.current);
  }, [draft, focusedGovernedMoment]);

  return (
    <section
      className={styles.root}
      data-testid="project-assistant-panel"
      data-ui-state={uiState}
      data-governed-moment={focusedGovernedMoment ? "true" : undefined}
    >
      {!focusedGovernedMoment ? (
        <div className={styles.topBar}>
          <div
            className={styles.identity}
            data-testid="project-assistant-mode-pill"
          >
            <span className={styles.noraDot} aria-hidden>
              N
            </span>
            <span className={styles.identityText}>
              <span className={styles.identityName}>Nora</span>
              <span
                className={styles.identityRole}
                data-testid="project-assistant-ephemeral"
              >
                Recommande — la décision vous appartient
              </span>
            </span>
          </div>
          {modeLabel.toLowerCase().includes("indisponible") ? (
            <span className={styles.chipWarn}>{modeLabel}</span>
          ) : null}
        </div>
      ) : null}

      <div
        ref={listRef}
        className={styles.thread}
        data-testid="project-assistant-messages"
        aria-live="polite"
        id={liveRegionId}
      >
        {messages.length === 0 && !focusedGovernedMoment && !showNoraActivityInThread ? (
          <div className={styles.threadEmpty} data-testid="project-assistant-empty">
            <p className={styles.threadEmptyTitle}>
              Dites à Nora ce que vous voulez accomplir
            </p>
            <p className={styles.threadEmptyBody}>
              Elle qualifie votre intention à partir du projet enregistré, puis
              vous propose une décision. Rien n&apos;est lancé sans votre accord.
            </p>
          </div>
        ) : messages.length === 0 && !showNoraActivityInThread ? null : (
              messages.map((message) => (
            <article
              key={message.id}
              id={`pilot-turn-${message.id}`}
              className={
                message.role === "user" ? styles.turnMine : styles.turnNora
              }
              data-testid={`project-assistant-turn-${message.role}`}
              data-turn-id={message.id}
              data-role={message.role}
              tabIndex={-1}
            >
              <span className={styles.turnAvatar} aria-hidden>
                {message.role === "user" ? "P" : "N"}
              </span>
              <div className={styles.bubble}>
                <p
                  className={styles.bubbleAuthor}
                  data-role={message.role === "user" ? "user" : "assistant"}
                >
                  {message.role === "user" ? "Vous" : "Nora"}
                </p>
                <p className={styles.bubbleText}>
                  {message.role === "assistant"
                    ? formatNoraAssistantDisplayText(message.content)
                    : message.content}
                </p>
              </div>
            </article>
          ))
        )}
        {showNoraActivityInThread ? (
          <article
            className={`${styles.turnNora} ${styles.noraActivityTurn}`}
            data-testid="project-assistant-nora-activity"
            data-nora-phase={noraActivity.phase}
            data-nora-stop={
              noraActivity.stopAvailable ? "available" : "unavailable"
            }
            aria-busy="true"
          >
            <div className={styles.bubble}>
              <p
                className={styles.bubbleAuthor}
                data-role="assistant"
                data-testid="project-assistant-nora-activity-heading"
              >
                Nora
                <span className={styles.noraActivityBadge}>En cours</span>
              </p>
              <p
                className={styles.noraActivityText}
                data-testid="project-assistant-nora-activity-label"
              >
                {noraActivity.label}
              </p>
            </div>
          </article>
        ) : null}
      </div>

      {f2 ? (
        <div
          className={styles.chipRow}
          data-testid="project-assistant-f2-labels"
          aria-live="polite"
        >
          {f2.labels.recommendation ? (
            <span className={styles.chip}>
              {pilotFacingF2ChipLabel(f2.labels.recommendation)}
            </span>
          ) : null}
          {f2.labels.proposition ? (
            <span className={styles.chip}>
              {pilotFacingF2ChipLabel(f2.labels.proposition)}
            </span>
          ) : null}
          {f2.labels.decisionRequired && !reservationResolutionProposal ? (
            <span className={styles.chipGold}>
              {pilotFacingF2ChipLabel(f2.labels.decisionRequired)}
            </span>
          ) : null}
          {f2.labels.decisionTaken ? (
            <span className={styles.chipOk}>
              {pilotFacingF2ChipLabel(f2.labels.decisionTaken)}
            </span>
          ) : null}
          {exposeLegacyAuthorityPath ? (
            <span className={styles.chipQuiet}>
              {pilotFacingF2ChipLabel(f2.labels.noExecution)}
            </span>
          ) : null}
        </div>
      ) : null}

      {reservationResolutionProposal ? (
        <section
          className={styles.card}
          data-testid="reservation-resolution-proposal"
          aria-labelledby={`${fieldId}-rsv-proposal`}
        >
          <header className={styles.cardHead}>
            <p className={styles.cardEyebrow}>Lecture de Nora</p>
            <h3 id={`${fieldId}-rsv-proposal`} className={styles.cardTitle}>
              {reservationResolutionProposal.proposed
                ? "Proposition de levée"
                : "Traitement de réserve"}
            </h3>
            <p
              className={styles.cardNote}
              data-testid="reservation-resolution-context"
            >
              Contexte :{" "}
              {reservationResolutionProposal.ordinal != null &&
              reservationResolutionProposal.ordinal > 0
                ? `Réserve ${reservationResolutionProposal.ordinal}`
                : "Réserve"}{" "}
              ·{" "}
              {formatReservationActiveCycleFacingLabel(
                reservationResolutionProposal.cycleLabel,
              )}
            </p>
            <p
              className={styles.cardNote}
              data-testid="reservation-resolution-cycle-id"
              hidden
            >
              {reservationResolutionProposal.cycleInstanceId}
            </p>
            {reservationResolutionProposal.proposed ? (
              <p
                className={styles.cardNote}
                data-testid="reservation-pilot-confirmation-required"
              >
                Confirmation Pilote requise
              </p>
            ) : null}
            <p className={styles.cardNote}>
              {reservationResolutionProposal.proposed
                ? "La condition paraît satisfaite. La levée attend votre confirmation Pilote — la réserve reste active."
                : "Nora traite cette réserve. Une recommandation n’est pas une levée."}
            </p>
          </header>
          {reservationResolutionProposal.proposed &&
          onConfirmReservationResolve ? (
            <div className={styles.decisionActions}>
              <button
                type="button"
                className={styles.decisionButton}
                data-tone="primary"
                data-testid={`reservation-confirm-from-proposal-${reservationResolutionProposal.epistemicItemId}`}
                disabled={
                  busy ||
                  reservationConfirmBusyId ===
                    reservationResolutionProposal.epistemicItemId
                }
                onClick={() =>
                  onConfirmReservationResolve(
                    reservationResolutionProposal.epistemicItemId,
                  )
                }
              >
                {reservationConfirmBusyId ===
                reservationResolutionProposal.epistemicItemId
                  ? "Confirmation…"
                  : "Confirmer la levée"}
              </button>
            </div>
          ) : null}
          <p className={styles.stamp} data-testid="reservation-no-auto-resolve">
            AUCUNE LEVÉE AUTOMATIQUE
          </p>
        </section>
      ) : null}

      {f2?.qualification &&
      pilotRecommendationCard &&
      !reservationResolutionProposal ? (
        <section
          className={styles.subCardGold}
          data-testid="project-assistant-qualification"
          data-ui05-object="recommendation"
          data-expanded={recommendationOpen ? "true" : "false"}
          aria-labelledby={`${fieldId}-qualification`}
        >
          <div className={styles.p3CardHead}>
            <div className={styles.p3CardBody}>
              <p className={styles.p3CardEyebrow}>Recommandation</p>
              <h3
                id={`${fieldId}-qualification`}
                className={styles.p3CardTitle}
                data-testid="f2-cycle"
              >
                {pilotRecommendationCard.recommendation}
              </h3>
              <p className={styles.p3CardStamp} data-testid="f2-recommendation-meta">
                {f2ObjectMetaLine([
                  pilotRecommendationCard.freshnessLabel,
                  pilotRecommendationCard.showProfile
                    ? pilotRecommendationCard.profileLabel
                    : null,
                  "Une recommandation n'est pas une décision",
                ])}
              </p>
              {pilotRecommendationCard.freshnessLabel ? (
                <p
                  className={styles.srOnly}
                  data-testid="f2-recommendation-freshness"
                >
                  {pilotRecommendationCard.freshnessLabel}
                </p>
              ) : (
                <p
                  className={styles.srOnly}
                  data-testid="f2-recommendation-freshness"
                >
                  {qualificationFreshness.label}
                </p>
              )}
            </div>
            <div className={styles.p3CardRight}>
              <span
                className={styles.p3CardStatusWarn}
                data-testid="f2-recommendation-state"
              >
                {f2RecommendationStatusLabel({
                  proposalStatus: activeProposal?.status,
                  cycleStatus: f2.qualification.cycleStatus,
                  state: pilotRecommendationCard.state,
                })}
              </span>
              <button
                type="button"
                className={styles.p3CardLink}
                data-testid="f2-recommendation-open"
                aria-expanded={recommendationOpen}
                onClick={() => setRecommendationOpen((v) => !v)}
              >
                {recommendationOpen ? "Fermer" : "Ouvrir →"}
              </button>
            </div>
          </div>
          {recommendationOpen ? (
            <div
              className={styles.ui05ObjectDetails}
              data-testid="f2-recommendation-details"
            >
              <p className={styles.srOnly}>{pilotRecommendationCard.title}</p>
              <dl className={styles.facts}>
                <div className={styles.factWide}>
                  <dt>Pourquoi</dt>
                  <dd data-testid="f2-rationale">{pilotRecommendationCard.why}</dd>
                </div>
                {pilotRecommendationCard.showProfile &&
                pilotRecommendationCard.profileLabel ? (
                  <div className={styles.fact}>
                    <dt>Approche</dt>
                    <dd data-testid="f2-profile">
                      {pilotRecommendationCard.profileLabel}
                    </dd>
                  </div>
                ) : (
                  <dd className={styles.srOnly} data-testid="f2-profile">
                    {f2.qualification.recommendedProfile}
                  </dd>
                )}
              </dl>
              {exposeLegacyAuthorityPath ? (
                <details className={styles.details}>
                  <summary>Détails techniques</summary>
                  <dl className={styles.facts}>
                    <div className={styles.factWide}>
                      <dt>Rationale technique</dt>
                      <dd data-testid="f2-rationale-technical">
                        {f2.qualification.rationale}
                      </dd>
                    </div>
                    <div className={styles.factWide}>
                      <dt>Identifiant de cycle</dt>
                      <dd>{f2.qualification.cycleTypeId}</dd>
                    </div>
                    {f2.qualification.cycleInstanceId ? (
                      <div className={styles.factWide}>
                        <dt>Cycle rattaché</dt>
                        <dd data-testid="f2-cycle-instance">
                          {f2.qualification.cycleInstanceId}
                          {f2.qualification.cycleStatus
                            ? ` · ${f2.qualification.cycleStatus}`
                            : ""}
                        </dd>
                      </div>
                    ) : null}
                    {f2.qualification.ckcResolutionRef ? (
                      <div className={styles.factWide}>
                        <dt>Réf. résolution</dt>
                        <dd data-testid="f2-ckc-ref">
                          {f2.qualification.ckcResolutionRef}
                        </dd>
                      </div>
                    ) : null}
                    <div className={styles.factWide}>
                      <dt>Provenance</dt>
                      <dd data-testid="f2-qualification-provenance">
                        catalogue {f2.qualification.catalogVersion} ·{" "}
                        {f2.qualification.detailedStatus}
                        {f2.qualification.capitalizationViaCycleTypeId
                          ? " · capitalisation via cycleType"
                          : ""}
                      </dd>
                    </div>
                  </dl>
                </details>
              ) : null}
            </div>
          ) : (
            <>
              <p className={styles.srOnly} data-testid="f2-rationale">
                {pilotRecommendationCard.why}
              </p>
              <p className={styles.srOnly} data-testid="f2-profile">
                {pilotRecommendationCard.profileLabel ??
                  f2.qualification.recommendedProfile}
              </p>
            </>
          )}
        </section>
      ) : null}

      {decisionSubjectContinuity &&
      typeof decisionSubjectContinuity === "object" &&
      "ok" in decisionSubjectContinuity &&
      decisionSubjectContinuity.ok &&
      decisionSubjectContinuity.kind === "pending_reinstruction_required" ? (
        <aside
          className={styles.proposalCard}
          data-testid="decision-subject-reinstruction"
          aria-label="Sujet de décision à reformuler"
        >
          <p className={styles.proposalTitle}>Reprise du sujet</p>
          <p className={styles.proposalMeta}>
            {decisionSubjectContinuity.message}
          </p>
          <p className={styles.proposalMeta}>
            La proposition process-locale n&apos;est plus disponible. Reformulez
            avec Nora — aucune proposition n&apos;est inventée.
          </p>
        </aside>
      ) : null}
      {boundAwaitingDecision ? (
        <div
          className={styles.governedMomentSlot}
          data-testid="decision-subject-bound"
        >
          <p className={styles.noraMomentLabel}>Nora</p>
          <p className={styles.noraMomentBody}>
            {presentGovernedDecisionNoraPreface({
              proposalRationale: activeProposal?.rationale,
              optionRationale:
                decisionSubjectContinuity.optionSet.recommendation.rationale,
            })}
          </p>
          <GovernedDecisionCard
            optionSet={decisionSubjectContinuity.optionSet}
            alternateIndex={decisionAlternateIndex}
            busy={governedMomentBusy}
            error={governedMomentError}
            decisionTitle={
              activeProposal?.rephrasedRequest?.trim() || undefined
            }
            onChooseRecommended={() => {
              const ref =
                decisionSubjectContinuity.optionSet.recommendation
                  .recommendedOptionRef;
              void decideGovernedDirection(ref);
            }}
            onRevealAlternate={revealGovernedDecisionAlternate}
            onChooseAlternate={(optionRef) => {
              void decideGovernedDirection(optionRef);
            }}
          />
        </div>
      ) : null}
      {confirmationRequiredMoment ? (
        <div
          className={styles.governedMomentSlot}
          data-testid="governed-confirmation-slot"
        >
          <GovernedConfirmationCard
            contract={governedExecutionContinuity.contract}
            inspection={governedExecutionContinuity.inspection}
            busy={governedMomentBusy}
            error={governedMomentError}
            onConfirm={() => {
              void confirmGovernedContract();
            }}
            onInspect={() => {
              void inspectGovernedContract();
            }}
            onCancel={() => {
              const input = document.querySelector(
                "[data-testid='project-assistant-input']",
              );
              if (input instanceof HTMLTextAreaElement) input.focus();
            }}
          />
        </div>
      ) : null}
      {activeProposal &&
      pilotProposalCard &&
      !reservationResolutionProposal &&
      !focusedGovernedMoment ? (
        <section
          className={styles.subCardGold}
          data-testid="project-assistant-proposal"
          data-ui05-object="proposal"
          data-expanded={proposalOpen ? "true" : "false"}
          data-proposal-status={activeProposal.status}
          aria-labelledby={`${fieldId}-proposal`}
        >
          <div className={styles.p3CardHead}>
            <div className={styles.p3CardBody}>
              <p className={styles.p3CardEyebrow}>Proposition</p>
              <h3
                id={`${fieldId}-proposal`}
                className={styles.p3CardTitle}
                data-testid="f2-proposal-main"
              >
                {pilotProposalCard.proposition}
              </h3>
              <p className={styles.p3CardStamp} data-testid="f2-proposal-meta">
                {f2ObjectMetaLine([
                  activeProposal.scope
                    ? scrubPiloteFacingEngineJargon(activeProposal.scope).slice(
                        0,
                        80,
                      )
                    : null,
                  pilotProposalCard.nextActionKind === "decision"
                    ? "Décision potentiellement requise"
                    : "Aucune décision structurée requise pour l'instant",
                ])}
              </p>
              <p
                className={styles.srOnly}
                data-testid="f2-proposal-id"
                data-proposal-status={activeProposal.status}
              >
                Proposition structurée
              </p>
            </div>
            <div className={styles.p3CardRight}>
              <span
                className={
                  activeProposal.status === "DECISION_REQUIRED"
                    ? styles.p3CardStatusWarn
                    : styles.p3CardStatusReady
                }
                data-testid="f2-proposal-status-label"
              >
                {f2ProposalStatusLabel({
                  proposalStatus: activeProposal.status,
                  nextActionKind: pilotProposalCard.nextActionKind,
                })}
              </span>
              <button
                type="button"
                className={styles.p3CardLink}
                data-testid="f2-proposal-open"
                aria-expanded={proposalOpen}
                onClick={() => setProposalOpen((v) => !v)}
              >
                {proposalOpen ? "Fermer" : "Ouvrir →"}
              </button>
            </div>
          </div>
          {activeProposal.status === "AMENDMENT_REQUIRED" ? (
            <p className={styles.noticeWarn} data-testid="f2-amend-deferred-notice">
              {G_UX_08_AMEND_DEFERRED_MESSAGE}
            </p>
          ) : null}
          {proposalOpen ? (
            <div
              className={styles.ui05ObjectDetails}
              data-testid="f2-proposal-details"
            >
              <p className={styles.srOnly}>{pilotProposalCard.title}</p>
              <dl className={styles.facts}>
                {pilotProposalCard.why ? (
                  <div className={styles.factWide}>
                    <dt>Pourquoi</dt>
                    <dd data-testid="f2-proposal-why">{pilotProposalCard.why}</dd>
                  </div>
                ) : null}
                {pilotProposalCard.consequence ? (
                  <div className={styles.factWide}>
                    <dt>Suite attendue</dt>
                    <dd data-testid="f2-proposal-consequence">
                      {pilotProposalCard.consequence}
                    </dd>
                  </div>
                ) : null}
                {pilotProposalCard.outOfScope ? (
                  <div className={styles.factWide}>
                    <dt>Hors périmètre</dt>
                    <dd data-testid="f2-proposal-out-of-scope">
                      {pilotProposalCard.outOfScope}
                    </dd>
                  </div>
                ) : (
                  <dd
                    className={styles.srOnly}
                    data-testid="f2-proposal-out-of-scope"
                  />
                )}
                <div className={styles.factWide}>
                  <dt>Votre accord</dt>
                  <dd data-testid="f2-gate-required">
                    {pilotProposalCard.agreement}
                  </dd>
                </div>
                <div className={styles.factWide}>
                  <dt>Prochaine étape</dt>
                  <dd
                    data-testid="f2-proposal-next-action"
                    data-next-kind={pilotProposalCard.nextActionKind}
                  >
                    {pilotProposalCard.nextAction}
                  </dd>
                </div>
                <dd className={styles.srOnly} data-testid="f2-proposal-scope">
                  {activeProposal.scope}
                </dd>
              </dl>
              {exposeLegacyAuthorityPath ? (
                <>
                  <details className={styles.details}>
                    <summary>Détails techniques</summary>
                    <dl className={styles.facts}>
                      <div className={styles.factWide}>
                        <dt>Contexte</dt>
                        <dd data-testid="f2-context-snapshot">
                          {activeProposal.contextSnapshot.projectId} /{" "}
                          {activeProposal.contextSnapshot.lpsId}@
                          {activeProposal.contextSnapshot.lpsVersion}
                          {activeProposal.contextSnapshot.activeCycleInstanceId
                            ? ` · cycle ${activeProposal.contextSnapshot.activeCycleInstanceId}`
                            : ""}
                        </dd>
                      </div>
                      <div className={styles.factWide}>
                        <dt>Étape moteur</dt>
                        <dd>{activeProposal.nextPossibleStep}</dd>
                      </div>
                    </dl>
                  </details>
                  <p
                    className={styles.noticeQuiet}
                    data-testid="f2-process-local-notice"
                  >
                    {activeProposal.processLocalNotice}
                  </p>
                  <p className={styles.stamp} data-testid="f2-no-execution">
                    AUCUNE EXÉCUTION
                  </p>
                </>
              ) : (
                <>
                  <p
                    className={styles.srOnly}
                    data-testid="f2-process-local-notice"
                  >
                    {activeProposal.processLocalNotice}
                  </p>
                  <p className={styles.srOnly} data-testid="f2-no-execution">
                    Rien n&apos;a encore été exécuté
                  </p>
                </>
              )}
            </div>
          ) : (
            <>
              <p className={styles.srOnly} data-testid="f2-gate-required">
                {pilotProposalCard.agreement}
              </p>
              <p
                className={styles.srOnly}
                data-testid="f2-proposal-next-action"
                data-next-kind={pilotProposalCard.nextActionKind}
              >
                {pilotProposalCard.nextAction}
              </p>
              <p className={styles.srOnly} data-testid="f2-proposal-scope">
                {activeProposal.scope}
              </p>
              <p className={styles.srOnly} data-testid="f2-proposal-out-of-scope">
                {pilotProposalCard.outOfScope ?? ""}
              </p>
              <p className={styles.srOnly} data-testid="f2-process-local-notice">
                {activeProposal.processLocalNotice}
              </p>
              <p className={styles.srOnly} data-testid="f2-no-execution">
                Rien n&apos;a encore été exécuté
              </p>
            </>
          )}
        </section>
      ) : null}

      {gateOpen && !exposeLegacyAuthorityPath && !reservationResolutionProposal ? (
        <section
          className={styles.card}
          data-testid="product-authority-path-guidance"
          aria-labelledby={`${fieldId}-authority-guidance`}
        >
          <header className={styles.cardHead}>
            <p className={styles.cardEyebrow}>Suite du parcours</p>
            <h3
              id={`${fieldId}-authority-guidance`}
              className={styles.cardTitle}
            >
              Votre décision se prend ici, dans la conversation
            </h3>
            <p className={styles.cardNote}>
              La qualification est enregistrée. Répondez pour poursuivre,
              amender ou refuser cette proposition. Le panneau « Trajectoire »
              reste disponible en lecture pour l&apos;état et l&apos;audit.
            </p>
          </header>
        </section>
      ) : null}

      {gateOpen && exposeLegacyAuthorityPath ? (
        <section
          className={styles.decisionCard}
          data-testid="project-assistant-gate"
          aria-labelledby={`${fieldId}-gate`}
        >
          <p className={styles.decisionEyebrow}>DÉCISION REQUISE</p>
          <h3 id={`${fieldId}-gate`} className={styles.decisionTitle}>
            Nora recommande. Vous décidez.
          </h3>
          <p className={styles.decisionNote}>
            Votre décision est enregistrée. Elle n&apos;est pas une confirmation
            d&apos;exécution.
          </p>
          <label className={styles.reservesLabel} htmlFor={`${fieldId}-reserves`}>
            Réserves (obligatoires pour « Approuver avec réserves »)
          </label>
          <textarea
            id={`${fieldId}-reserves`}
            className={styles.reservesInput}
            data-testid="f2-reserves-input"
            rows={2}
            value={reservesText}
            disabled={busy}
            placeholder="Précisez vos réserves…"
            onChange={(event) => setReservesText(event.target.value)}
          />
          <div
            className={styles.decisionActions}
            role="group"
            aria-label="Votre décision"
          >
            {DECISION_ACTIONS.map((action) => (
              <button
                key={action.kind}
                type="button"
                className={styles.decisionButton}
                data-tone={action.tone}
                data-testid={`f2-decide-${action.kind}`}
                disabled={busy}
                onClick={() => decide(action.kind)}
              >
                {action.label}
              </button>
            ))}
          </div>
        </section>
      ) : null}

      {exposeLegacyAuthorityPath && f2?.decision ? (
        <section
          className={styles.cardOk}
          data-testid="project-assistant-decision"
          aria-live="polite"
        >
          <header className={styles.cardHead}>
            <p className={styles.cardEyebrow}>Décision sur la proposition</p>
            <h3 className={styles.cardTitle}>
              Votre décision est prise en compte
            </h3>
          </header>
          <dl className={styles.facts}>
            <div className={styles.fact}>
              <dt>Décision</dt>
              <dd data-testid="f2-decision-kind">{f2.decision.kind}</dd>
            </div>
            <div className={styles.fact}>
              <dt>Portée</dt>
              <dd data-testid="f2-decision-scope">Scope: {f2.decision.scope}</dd>
            </div>
          </dl>
          {f2.decision.readyForNextGatedStep ? (
            <p className={styles.noticeOk} data-testid="f2-ready-next">
              READY FOR NEXT GATED STEP
            </p>
          ) : null}
          <p className={styles.stamp} data-testid="f2-decision-no-execution">
            AUCUNE EXÉCUTION
          </p>
          <details className={styles.details}>
            <summary>Détails techniques</summary>
            <dl className={styles.facts}>
              <div className={styles.factWide}>
                <dt>Identifiant décision</dt>
                <dd className={styles.code} data-testid="f2-decision-id">
                  {f2.decision.decisionId}
                </dd>
              </div>
              <div className={styles.factWide}>
                <dt>executionPerformed</dt>
                <dd data-testid="f2-execution-performed">
                  executionPerformed: {String(f2.decision.executionPerformed)}
                </dd>
              </div>
            </dl>
          </details>
        </section>
      ) : null}

      {exposeLegacyAuthorityPath &&
      (canPrepareResolvedM3 || canPrepareLegacyFixture) ? (
        <section className={styles.card} data-testid="project-assistant-f3-prepare">
          <header className={styles.cardHead}>
            <p className={styles.cardEyebrow}>Étape suivante</p>
            <h3 className={styles.cardTitle}>Préparer le contrat</h3>
            <p className={styles.cardNote}>
              Votre accord autorise seulement la préparation d&apos;un contrat.
              La confirmation reste une étape distincte, process-local.
            </p>
          </header>
          <div className={styles.chipRow} data-testid="f3-prepare-labels">
            <span className={styles.chipQuiet}>Aucune exécution lancée à cette étape</span>
            <span className={styles.chipQuiet}>Confirmation non durable</span>
          </div>
          <button
            type="button"
            className={styles.primaryButton}
            data-testid="f3-prepare-button"
            disabled={!canPrepareResolvedM3}
            onClick={() => prepareResolvedM3()}
          >
            Préparer le contrat d&apos;exécution
          </button>
          <details className={styles.details}>
            <summary>Détails techniques / chemin legacy</summary>
            <p className={styles.cardNote}>
              Chemin produit canonique après GO : HumanDecision durable → M3
              PREPARE → résolution fixture-safe. Le chemin Proposal/fixture reste
              fail-closed (STALE) après avancement LPS — preuve négative
              uniquement.
            </p>
            <button
              type="button"
              className={styles.quietButton}
              data-testid="f3-legacy-fixture-prepare-button"
              disabled={!canPrepareLegacyFixture}
              onClick={() => prepareLegacyFixture()}
            >
              Chemin legacy fixture (Proposal)
            </button>
          </details>
        </section>
      ) : null}

      {exposeLegacyAuthorityPath && f3M3Resolved && !f3Execute ? (
        <section
          className={styles.contractCard}
          data-testid="project-assistant-f3-contract"
        >
          <header className={styles.cardHead}>
            <p className={styles.cardEyebrow}>Contrat prêt</p>
            <h3 className={styles.cardTitle}>
              Relisez, puis confirmez l&apos;exécution
            </h3>
          </header>
          <div className={styles.chipRow} data-testid="f3-contract-labels">
            <span className={styles.chip}>Contrat résolu</span>
            <span className={styles.chipQuiet}>Confirmation process-local</span>
            <span
              className={styles.chip}
              data-testid="f3-contract-semantic-chip"
            >
              {confirmationPathChip({
                mode: f3M3Resolved.mode,
                realExecution: f3M3Resolved.realExecution,
                disclosures: f3M3Resolved.disclosures,
              })}
            </span>
          </div>
          <dl className={styles.facts} data-testid="f3-contract-user-summary">
            {contractFacts?.action ? (
              <div className={styles.factWide}>
                <dt>Ce que l&apos;agent va faire</dt>
                <dd data-testid="f3-contract-action">{contractFacts.action}</dd>
              </div>
            ) : null}
            {contractFacts?.target ? (
              <div className={styles.factWide}>
                <dt>Cible</dt>
                <dd data-testid="f3-contract-target">{contractFacts.target}</dd>
              </div>
            ) : null}
            {contractFacts?.scope ? (
              <div className={styles.factWide}>
                <dt>Périmètre</dt>
                <dd data-testid="f3-contract-scope">{contractFacts.scope}</dd>
              </div>
            ) : null}
            {contractFacts && contractFacts.capabilities.length > 0 ? (
              <div className={styles.factWide}>
                <dt>Capacité requise</dt>
                <dd data-testid="f3-contract-capabilities">
                  {contractFacts.capabilities.join(", ")}
                </dd>
              </div>
            ) : null}
            {contractFacts?.reversibility ? (
              <div className={styles.fact}>
                <dt>Réversibilité</dt>
                <dd data-testid="f3-contract-reversibility">
                  {contractFacts.reversibility}
                </dd>
              </div>
            ) : null}
            {contractFacts && contractFacts.constraints.length > 0 ? (
              <div className={styles.factWide}>
                <dt>Contraintes et non-effets</dt>
                <dd data-testid="f3-contract-constraints">
                  {contractFacts.constraints.join(" · ")}
                </dd>
              </div>
            ) : null}
            {contractFacts?.authority ? (
              <div className={styles.factWide}>
                <dt>Autorité demandée maintenant</dt>
                <dd data-testid="f3-contract-authority-user">
                  {contractFacts.authority}
                </dd>
              </div>
            ) : null}
          </dl>
          <details className={styles.details}>
            <summary>Détails techniques</summary>
            <dl className={styles.facts}>
              <div className={styles.fact}>
                <dt>Statut</dt>
                <dd data-testid="f3-contract-status">
                  {f3M3Resolved.successor.status}
                </dd>
              </div>
              <div className={styles.fact}>
                <dt>Version</dt>
                <dd data-testid="f3-contract-version">
                  {f3M3Resolved.successor.version}
                </dd>
              </div>
              <div className={styles.factWide}>
                <dt>Identifiant contrat</dt>
                <dd className={styles.code} data-testid="f3-contract-id">
                  {f3M3Resolved.successor.executionContractId}
                </dd>
              </div>
              <div className={styles.factWide}>
                <dt>PREPARE d&apos;origine</dt>
                <dd className={styles.code} data-testid="f3-m3-original-contract-id">
                  {f3M3Resolved.original.executionContractId}
                </dd>
              </div>
              <div className={styles.factWide}>
                <dt>Autorité requise</dt>
                <dd data-testid="f3-contract-authority">
                  {f3M3Resolved.successor.requiredAuthority}
                </dd>
              </div>
              {(f3M3Resolved.successor.stopConditions ?? []).length > 0 ? (
                <div className={styles.factWide}>
                  <dt>Conditions d&apos;arrêt</dt>
                  <dd data-testid="f3-contract-stop-conditions">
                    {(f3M3Resolved.successor.stopConditions ?? []).join(" · ")}
                  </dd>
                </div>
              ) : null}
              {(f3M3Resolved.successor.constraints ?? []).length > 0 ? (
                <div className={styles.factWide}>
                  <dt>Contraintes brutes</dt>
                  <dd
                    className={styles.code}
                    data-testid="f3-contract-raw-constraints"
                  >
                    {(f3M3Resolved.successor.constraints ?? []).join(" · ")}
                  </dd>
                </div>
              ) : null}
            </dl>
          </details>
          <p className={styles.stamp} data-testid="f3-prepare-no-attempt">
            Tentatives : 0 — aucune tentative créée. La confirmation reste
            process-local (non durable).
          </p>
          {recommendationFreshness.status === "stale" ? (
            <p
              className={styles.noticeWarn}
              data-testid="f3-stale-recommendation-notice"
            >
              Recommandation périmée — ce n&apos;est pas une décision humaine et
              ce n&apos;est pas un nouveau GO d&apos;exécution. La confirmation
              reste gouvernée par le contrat et la décision déjà enregistrés.
            </p>
          ) : null}
          <button
            type="button"
            className={styles.primaryButton}
            data-testid="f3-confirm-execute-button"
            disabled={!canConfirmResolvedM3}
            onClick={() => confirmAndExecuteResolvedM3()}
          >
            Confirmer l&apos;exécution
          </button>
        </section>
      ) : null}

      {exposeLegacyAuthorityPath && f3Prepare && !f3Execute ? (
        <section
          className={styles.card}
          data-testid="project-assistant-f3-legacy-contract"
        >
          <header className={styles.cardHead}>
            <p className={styles.cardEyebrow}>Chemin legacy</p>
            <h3 className={styles.cardTitle}>Contrat fixture (Proposal)</h3>
          </header>
          <div className={styles.chipRow} data-testid="f3-legacy-contract-labels">
            <span className={styles.chip}>Contrat</span>
            <span className={styles.chipQuiet}>Confirmation process-local</span>
            <span className={styles.chipWarn}>Fixture de test — pas une exécution Cursor réelle</span>
          </div>
          <details className={styles.details} open>
            <summary>Détails techniques</summary>
            <dl className={styles.facts}>
              <div className={styles.factWide}>
                <dt>Identifiant contrat</dt>
                <dd className={styles.code} data-testid="f3-legacy-contract-id">
                  {f3Prepare.contract.executionContractId}
                </dd>
              </div>
              <div className={styles.fact}>
                <dt>Version</dt>
                <dd data-testid="f3-legacy-contract-version">
                  {f3Prepare.contract.version}
                </dd>
              </div>
              <div className={styles.fact}>
                <dt>Statut</dt>
                <dd data-testid="f3-legacy-contract-status">
                  {f3Prepare.contract.status}
                </dd>
              </div>
              <div className={styles.fact}>
                <dt>Mode</dt>
                <dd data-testid="f3-legacy-contract-mode">
                  {f3Prepare.contract.mode}
                </dd>
              </div>
            </dl>
          </details>
          <p className={styles.stamp} data-testid="f3-legacy-prepare-no-attempt">
            Tentative non créée — confirmation process-local (non durable).
          </p>
          <button
            type="button"
            className={styles.quietButton}
            data-testid="f3-legacy-confirm-execute-button"
            disabled={!canConfirmLegacyFixture}
            onClick={() => confirmAndExecuteLegacyFixture()}
          >
            Confirmer et exécuter (legacy fixture)
          </button>
        </section>
      ) : null}

      {exposeLegacyAuthorityPath && f3Execute && attemptLabel ? (
        <section
          className={styles.card}
          data-testid="project-assistant-f3-execute"
          aria-live="polite"
        >
          <header className={styles.cardHead}>
            <p className={styles.cardEyebrow}>
              {runningRefreshVisible ? "Exécution" : "Résultat"}
            </p>
            <h3
              className={styles.cardTitle}
              data-testid={
                runningRefreshVisible ? "f3-running-refresh-title" : undefined
              }
            >
              {runningRefreshVisible
                ? BOUNDED_RUNNING_REFRESH_TITLE
                : "Tentative et recommandation"}
            </h3>
          </header>
          <div className={styles.chipRow} data-testid="f3-execute-labels">
            {runningRefreshVisible ? (
              <span className={styles.chip}>Exécution déjà autorisée</span>
            ) : (
              <span className={styles.chip} data-testid="f3-execute-semantic">
                {executeSemantic}
              </span>
            )}
            {runningRefreshVisible ? null : (
              <span className={styles.chip}>Recommandation — pas une décision</span>
            )}
            {runningRefreshVisible ? null : (
              <span
                className={
                  recommendationFreshness.status === "stale"
                    ? styles.chipWarn
                    : styles.chipQuiet
                }
              >
                {recommendationFreshness.label}
              </span>
            )}
          </div>

          <div className={styles.subCard} data-testid="f3-attempt-card">
            <h4 className={styles.subTitle}>Tentative</h4>
            <p className={styles.subLead} data-testid="f3-attempt-status-label">
              {attemptLabel.label}
            </p>
            {runningRefreshVisible ? (
              <>
                {!attemptLabel.blockedBeforeExecution ? (
                  <p className={styles.code} data-testid="f3-attempt-id">
                    {f3Execute.attempt.attemptId}
                  </p>
                ) : (
                  <p className={styles.subNote} data-testid="f3-attempt-id-omitted">
                    Identifiant de tentative non affiché (bloqué avant exécution).
                  </p>
                )}
                <p className={styles.subNote} data-testid="f3-attempt-status">
                  {f3Execute.attempt.status}
                </p>
              </>
            ) : null}
          </div>

          {runningRefreshVisible ? (
            <>
              <p
                className={styles.cardNote}
                data-testid="f3-running-refresh-help"
              >
                {BOUNDED_RUNNING_REFRESH_HELP}
              </p>
              <button
                type="button"
                className={styles.primaryButton}
                data-testid="f3-refresh-running-button"
                disabled={!canRefreshResolvedM3Running}
                onClick={() => refreshResolvedM3RunningAttempt()}
              >
                {BOUNDED_RUNNING_REFRESH_ACTION}
              </button>
            </>
          ) : (
            <>
          <div className={styles.subCard} data-testid="f3-result-summary">
            <h4 className={styles.subTitle}>Résultat de l&apos;exécution</h4>
            <p className={styles.subLead} data-testid="f3-result-user-summary">
              {executeSummary?.result}
            </p>
          </div>

          <div className={styles.subCard} data-testid="f3-evidence-card">
            <h4 className={styles.subTitle}>Preuve</h4>
            <p className={styles.subLead} data-testid="f3-evidence-user-summary">
              {executeSummary?.evidence}
            </p>
            <p className={styles.subNote} data-testid="f3-evidence-verified-user">
              {evidenceVerifiedUserLabel(f3Execute.evidence.verified)}
            </p>
          </div>

          <div className={styles.subCard} data-testid="f3-review-bundle-card">
            <h4 className={styles.subTitle}>Dossier de revue</h4>
            <p className={styles.subLead} data-testid="f3-review-bundle-user-summary">
              {executeSummary?.reviewBundle}
            </p>
          </div>

          <div className={styles.subCardGold} data-testid="f3-recommendation-card">
            <h4 className={styles.subTitle}>Prochaine action / Recommendation</h4>
            <p className={styles.subLead} data-testid="f3-recommendation-freshness">
              {recommendationFreshness.label}
            </p>
            <p className={styles.subNote} data-testid="f3-next-action-user">
              {executeSummary?.next}
            </p>
            {executeSummary?.analysis ? (
              <p className={styles.subNote} data-testid="f3-recommendation-analysis">
                {executeSummary.analysis}
              </p>
            ) : null}
            <p className={styles.subNote} data-testid="f3-recommendation-label">
              {f3Execute.recommendation.recommendationLabel}
            </p>
            <p className={styles.stamp} data-testid="f3-no-ready-claim">
              PAS DE CLAIM READY
            </p>
          </div>

          <details className={styles.details}>
            <summary>Détails techniques</summary>
            <dl className={styles.facts}>
              {!attemptLabel.blockedBeforeExecution ? (
                <div className={styles.factWide}>
                  <dt>Identifiant tentative</dt>
                  <dd className={styles.code} data-testid="f3-attempt-id">
                    {f3Execute.attempt.attemptId}
                  </dd>
                </div>
              ) : (
                <div className={styles.factWide}>
                  <dt>Tentative</dt>
                  <dd data-testid="f3-attempt-id-omitted">
                    Identifiant de tentative non affiché (bloqué avant exécution).
                  </dd>
                </div>
              )}
              <div className={styles.fact}>
                <dt>Statut technique</dt>
                <dd data-testid="f3-attempt-status">{f3Execute.attempt.status}</dd>
              </div>
              <div className={styles.factWide}>
                <dt>Preuve</dt>
                <dd className={styles.code} data-testid="f3-evidence-id">
                  {f3Execute.evidence.evidenceId}
                </dd>
              </div>
              <div className={styles.fact}>
                <dt>Statut preuve</dt>
                <dd data-testid="f3-evidence-status">{f3Execute.evidence.status}</dd>
              </div>
              <div className={styles.fact}>
                <dt>verified</dt>
                <dd data-testid="f3-evidence-verified">
                  verified: {String(f3Execute.evidence.verified)}
                </dd>
              </div>
              <div className={styles.factWide}>
                <dt>Dossier de revue</dt>
                <dd className={styles.code} data-testid="f3-review-bundle-id">
                  {f3Execute.reviewBundle.reviewBundleId}
                </dd>
              </div>
              <div className={styles.fact}>
                <dt>Statut dossier</dt>
                <dd data-testid="f3-review-bundle-status">
                  {f3Execute.reviewBundle.status}
                </dd>
              </div>
              <div className={styles.fact}>
                <dt>adapterId</dt>
                <dd data-testid="f3-attempt-adapter">{f3Execute.attempt.adapterId}</dd>
              </div>
              <div className={styles.fact}>
                <dt>executionMode</dt>
                <dd data-testid="f3-attempt-execution-mode">
                  {f3Execute.attempt.executionMode}
                </dd>
              </div>
              <div className={styles.factWide}>
                <dt>executionAuthority</dt>
                <dd data-testid="f3-recommendation-execution-authority">
                  Autorité d&apos;exécution:{" "}
                  {String(f3Execute.recommendation.executionAuthority)}
                </dd>
              </div>
              <div className={styles.factWide}>
                <dt>gateConsumed</dt>
                <dd data-testid="f3-recommendation-gate-consumed">
                  Gate consommé: {String(f3Execute.recommendation.gateConsumed)}
                </dd>
              </div>
              <div className={styles.factWide}>
                <dt>decisionCreated</dt>
                <dd data-testid="f3-recommendation-decision-created">
                  Décision créée: {String(f3Execute.recommendation.decisionCreated)}
                </dd>
              </div>
              <div className={styles.factWide}>
                <dt>attemptAutoLaunchNextCycle</dt>
                <dd data-testid="f3-recommendation-auto-launch">
                  {String(f3Execute.recommendation.attemptAutoLaunchNextCycle)}
                </dd>
              </div>
            </dl>
          </details>
            </>
          )}
        </section>
      ) : null}

      {!f3Execute && durableRehydrateError ? (
        <section
          className={styles.cardWarn}
          data-testid="durable-rehydrate-error"
          aria-live="polite"
        >
          <header className={styles.cardHead}>
            <p className={styles.cardEyebrow}>Relecture durable</p>
            <h3 className={styles.cardTitle}>Dernier résultat illisible</h3>
          </header>
          <p className={styles.cardNote}>{durableRehydrateError}</p>
        </section>
      ) : null}

      {!focusedGovernedMoment &&
      !f3Execute &&
      (workRecommendations.length > 0 || durableEvidenceOutcome) ? (
        <section
          className={styles.durableStack}
          data-testid="durable-evidence-outcome"
          aria-live="polite"
        >
          {/* P3 46:2 — pending Work Recommendations only (Figma RECOMMANDATION). */}
          {workRecommendations.filter(
            (card) => card.status === "active" && !card.dispositionDecisionId,
          ).length > 0
            ? workRecommendations
                .filter(
                  (card) =>
                    card.status === "active" && !card.dispositionDecisionId,
                )
                .slice(0, 1)
                .map((card) => (
                  <div
                    key={card.epistemicItemId}
                    className={styles.subCardGold}
                    data-testid="durable-recommendation-card"
                  >
                    <div className={styles.p3CardHead}>
                      <div className={styles.p3CardBody}>
                        <p className={styles.p3CardEyebrow}>Recommandation</p>
                        <p
                          className={styles.p3CardTitle}
                          data-testid="durable-recommendation-label"
                        >
                          {card.statement}
                        </p>
                        <p className={styles.p3CardStamp}>
                          RECOMMANDATION — PAS UNE DÉCISION
                        </p>
                      </div>
                      <div className={styles.p3CardRight}>
                        <span className={styles.p3CardStatusWarn}>
                          {card.dispositionDecisionId
                            ? "Décidée"
                            : "En attente de décision"}
                        </span>
                        {onResumeRecommendation ? (
                          <button
                            type="button"
                            className={styles.p3CardLink}
                            data-testid="conversation-resume-recommendation"
                            onClick={() =>
                              onResumeRecommendation(card.epistemicItemId)
                            }
                          >
                            Ouvrir →
                          </button>
                        ) : null}
                      </div>
                    </div>
                  </div>
                ))
            : durableEvidenceOutcome ? (
                <div
                  className={styles.subCardGold}
                  data-testid="durable-recommendation-card"
                >
                  <div className={styles.p3CardHead}>
                    <div className={styles.p3CardBody}>
                      <p className={styles.p3CardEyebrow}>Recommandation</p>
                      <p
                        className={styles.p3CardTitle}
                        data-testid="durable-recommendation-label"
                      >
                        {
                          durableEvidenceOutcome.recommendation
                            .recommendationLabel
                        }
                      </p>
                      <p className={styles.p3CardStamp}>
                        RECOMMANDATION — PAS UNE DÉCISION
                      </p>
                    </div>
                    <div className={styles.p3CardRight}>
                      <span className={styles.p3CardStatusWarn}>
                        En attente de décision
                      </span>
                    </div>
                  </div>
                </div>
              ) : null}

          {/* P3 46:2 — when Work Recommendation cards lead, keep technical
              relecture out of the conversation chrome (available in Historique). */}
          {durableEvidenceOutcome &&
          workRecommendations.filter(
            (card) => card.status === "active" && !card.dispositionDecisionId,
          ).length === 0 ? (
            <details
              className={styles.durableDetails}
              data-testid="durable-relecture-details"
            >
              <summary>
                Relecture durable · dernier résultat enregistré
              </summary>
              <div className={styles.chipRow} data-testid="durable-outcome-labels">
                <span className={styles.chipQuiet}>
                  {durableOutcomeFreshness.label}
                </span>
                <span
                  className={styles.chip}
                  data-testid="durable-outcome-semantic"
                >
                  {durableSemantic}
                </span>
              </div>
              <p className={styles.cardNote} data-testid="durable-lps-version">
                LPS v{durableEvidenceOutcome.lpsVersion}
              </p>
              <p
                className={styles.noticeQuiet}
                data-testid="durable-ephemeral-notice"
              >
                {durableEvidenceOutcome.ephemeralNotice}
              </p>
              <p
                className={styles.subLead}
                data-testid="durable-result-user-summary"
              >
                {durableSummary?.result}
              </p>
              <p
                className={styles.subNote}
                data-testid="durable-next-action-user"
              >
                {durableSummary?.next}
              </p>
              {durableSummary?.analysis ? (
                <p
                  className={styles.subNote}
                  data-testid="durable-recommendation-analysis"
                >
                  {durableSummary.analysis}
                </p>
              ) : null}

              <div className={styles.subCard} data-testid="durable-evidence-card">
                <h4 className={styles.subTitle}>Preuves</h4>
                <p
                  className={styles.subLead}
                  data-testid="durable-evidence-user-summary"
                >
                  {durableSummary?.evidence}
                </p>
                <dl className={styles.facts}>
                  <div className={styles.factWide}>
                    <dt>Identifiants</dt>
                    <dd
                      className={styles.code}
                      data-testid="durable-evidence-ids"
                    >
                      {durableEvidenceOutcome.evidenceIds.join(", ") || "—"}
                    </dd>
                  </div>
                  {durableEvidenceOutcome.evidence.map((ev) => (
                    <div className={styles.factWide} key={ev.evidenceId}>
                      <dt>{ev.evidenceId}</dt>
                      <dd
                        data-testid={`durable-evidence-status-${ev.evidenceId}`}
                      >
                        {ev.status}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {durableEvidenceOutcome.reviewBundles.map((rb) => (
                <div
                  key={rb.reviewBundleId}
                  className={styles.subCard}
                  data-testid="durable-review-bundle-card"
                >
                  <h4 className={styles.subTitle}>Dossier de revue</h4>
                  <p
                    className={styles.code}
                    data-testid="durable-review-bundle-id"
                  >
                    {rb.reviewBundleId}
                  </p>
                  <p
                    className={styles.subNote}
                    data-testid="durable-review-bundle-status"
                  >
                    {rb.status}
                  </p>
                </div>
              ))}

              <details className={styles.details}>
                <summary>Détails techniques</summary>
                <p
                  className={styles.subNote}
                  data-testid="durable-recommendation-execution-authority"
                >
                  executionAuthority:{" "}
                  {String(
                    durableEvidenceOutcome.recommendation.executionAuthority,
                  )}
                </p>
                <p
                  className={styles.subNote}
                  data-testid="durable-recommendation-gate-consumed"
                >
                  gateConsumed:{" "}
                  {String(durableEvidenceOutcome.recommendation.gateConsumed)}
                </p>
                <p
                  className={styles.subNote}
                  data-testid="durable-recommendation-decision-created"
                >
                  decisionCreated:{" "}
                  {String(
                    durableEvidenceOutcome.recommendation.decisionCreated,
                  )}
                </p>
                <p
                  className={styles.subNote}
                  data-testid="durable-recommendation-auto-launch"
                >
                  attemptAutoLaunchNextCycle:{" "}
                  {String(
                    durableEvidenceOutcome.recommendation
                      .attemptAutoLaunchNextCycle,
                  )}
                </p>
              </details>
            </details>
          ) : null}
        </section>
      ) : null}

      {/* P6-HQA-UI05 — ProductSynthesis compact object (never ExecutionContract). */}
      {latestSynthesis ? (
        <div
          className={styles.subCardGold}
          data-testid="conversation-synthesis-card"
          data-ui05-object="synthesis"
          data-expanded={synthesisOpen ? "true" : "false"}
          aria-live="polite"
        >
          <div className={styles.p3CardHead}>
            <div className={styles.p3CardBody}>
              <p className={styles.p3CardEyebrow}>Synthèse</p>
              <p
                className={styles.p3CardTitle}
                data-testid="conversation-synthesis-summary"
              >
                {latestSynthesis.title.replace(/^Synthèse\s*[—–-]\s*/i, "") ||
                  latestSynthesis.title}
              </p>
              <p className={styles.p3CardStamp}>
                {f2ObjectMetaLine([
                  "Résultat de cycle",
                  latestSynthesis.verdictLabel
                    ? presentSynthesisVerdictLabel(latestSynthesis.verdictLabel)
                    : null,
                  "consultation seule — pas un contrat d'exécution",
                ])}
              </p>
            </div>
            <div className={styles.p3CardRight}>
              <span className={styles.p3CardStatusReady}>
                {latestSynthesis.verdictLabel
                  ? presentSynthesisVerdictLabel(latestSynthesis.verdictLabel)
                  : "Disponible"}
              </span>
              <button
                type="button"
                className={styles.p3CardLink}
                data-testid="conversation-open-synthesis"
                aria-expanded={synthesisOpen}
                onClick={() => {
                  setSynthesisOpen((v) => !v);
                  if (!synthesisOpen && onOpenSynthesis) {
                    onOpenSynthesis(latestSynthesis.synthesisId);
                  }
                }}
              >
                {synthesisOpen ? "Fermer" : "Ouvrir →"}
              </button>
            </div>
          </div>
          {synthesisOpen ? (
            <div
              className={styles.ui05ObjectDetails}
              data-testid="conversation-synthesis-details"
            >
              <p className={styles.cardNote}>
                {synthesisSummaryExcerpt(latestSynthesis) ||
                  "Synthèse disponible pour consultation. Ce n'est pas un contrat d'exécution."}
              </p>
            </div>
          ) : null}
        </div>
      ) : null}

      {/* P3 46:107 — Action préparée ONLY from a real ExecutionContract projection. */}
      {preparedExecutionContract ? (
        <div
          className={styles.subCardPrepared}
          data-testid="conversation-prepared-action-card"
          data-ui05-object="execution-contract"
          data-contract-status={preparedExecutionContract.status}
          data-expanded={executionContractOpen ? "true" : "false"}
        >
          <div className={styles.p3CardHead}>
            <div className={styles.p3CardBody}>
              <p className={styles.p3CardEyebrow}>Action préparée</p>
              <p className={styles.p3CardTitle}>
                {preparedExecutionContract.action ||
                  "Contrat d'exécution préparé"}
              </p>
              <p className={styles.p3CardStamp}>
                {f2ObjectMetaLine([
                  preparedExecutionContract.scope
                    ? preparedExecutionContract.scope.slice(0, 80)
                    : "Portée du contrat",
                  preparedExecutionContract.effectConfirmationRequired
                    ? "confirmation requise"
                    : "examen du contrat",
                ])}
              </p>
            </div>
            <div className={styles.p3CardRight}>
              <span className={styles.p3CardStatusReady}>
                {executionContractStatusLabel(preparedExecutionContract)}
              </span>
              <button
                type="button"
                className={styles.p3CardLink}
                data-testid="conversation-open-prepared-action"
                aria-expanded={executionContractOpen}
                onClick={() => setExecutionContractOpen((v) => !v)}
              >
                {executionContractOpen ? "Fermer" : "Ouvrir →"}
              </button>
            </div>
          </div>
          {executionContractOpen ? (
            <div
              className={styles.ui05ObjectDetails}
              data-testid="conversation-prepared-action-details"
            >
              <dl className={styles.facts}>
                <div className={styles.factWide}>
                  <dt>Cible</dt>
                  <dd>{preparedExecutionContract.target || "—"}</dd>
                </div>
                <div className={styles.factWide}>
                  <dt>Autorité</dt>
                  <dd>{preparedExecutionContract.requiredAuthority}</dd>
                </div>
                <div className={styles.factWide}>
                  <dt>Réversibilité</dt>
                  <dd>{preparedExecutionContract.reversibility}</dd>
                </div>
              </dl>
              <p className={styles.cardNote}>
                Ouvrir consulte le contrat préparé. Aucun démarrage ni
                confirmation n&apos;est déclenché depuis cette carte.
              </p>
            </div>
          ) : null}
        </div>
      ) : null}

      {uiState === "STOPPED" && !error ? (
        <div
          className={styles.stoppedBanner}
          role="status"
          data-testid="project-assistant-stopped"
        >
          <p className={styles.stoppedText}>Réponse interrompue</p>
          <button
            type="button"
            className={styles.quietButton}
            data-testid="project-assistant-retry-stopped"
            onClick={() => retryLastUserMessage()}
          >
            Réessayer
          </button>
        </div>
      ) : null}

      {error ? (
        <div
          className={styles.errorBox}
          role="alert"
          data-testid="project-assistant-error"
        >
          <p className={styles.errorText}>{error}</p>
          {uiState === "ERROR_RECOVERABLE" || uiState === "STOPPED" ? (
            <button
              type="button"
              className={styles.quietButton}
              data-testid="project-assistant-retry"
              onClick={() => retryLastUserMessage()}
            >
              Réessayer
            </button>
          ) : null}
        </div>
      ) : null}

      {lrMaterializeNotice ? (
        <p
          className={styles.cardNote}
          data-testid="project-assistant-lr-materialize-notice"
          role="status"
        >
          {lrMaterializeNotice}
        </p>
      ) : null}

      {/* P3 46:2 — sources disclosure only when Nora consulted tools this session. */}
      {toolEvents.length > 0 || lrMaterializeCode ? (
        <details className={styles.detailsFlat}>
          <summary>Sources et limites</summary>
          <p className={styles.cardNote} data-testid="project-assistant-scope">
            Qualification · proposition · décision · confirmation ·
            recommandation. Aucune exécution automatique.
            {pilotEphemeralNotice ? ` ${pilotEphemeralNotice}` : ""}
          </p>
          {lrMaterializeCode ? (
            <p
              className={styles.cardNote}
              data-testid="project-assistant-lr-materialize-code"
            >
              Code technique (diagnostic) : {lrMaterializeCode}
            </p>
          ) : null}
          <section
            className={styles.sources}
            aria-label="Sources consultées"
            data-testid="project-assistant-sources"
          >
            <ul className={styles.sourceList}>
              {toolEvents.map((event, index) => (
                <li
                  key={`${event.toolName}-${index}-${event.pathOrRef ?? "na"}`}
                  className={styles.sourceItem}
                  data-testid="project-assistant-source-item"
                  data-status={event.status}
                >
                  <span className={styles.sourceName}>{event.toolName}</span>
                  <span className={styles.sourceStatus}>
                    {sourceStatusLabel(event.status)}
                  </span>
                  {event.pathOrRef ? (
                    <span className={styles.code}>{event.pathOrRef}</span>
                  ) : null}
                  <span className={styles.sourceDetail}>
                    {event.summary ?? "Aucun résumé supplémentaire."}
                    {event.errorCode ? ` (${event.errorCode})` : ""} · lecture
                    seule confirmée
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </details>
      ) : (
        <div
          className={styles.srOnly}
          data-testid="project-assistant-sources"
          aria-hidden="true"
        />
      )}

      {!focusedGovernedMoment ? (
      <form
        className={styles.composer}
        data-testid="project-assistant-composer"
        onSubmit={(event) => {
          event.preventDefault();
          if (stopAvailable) return;
          sendMessage();
        }}
      >
        <label className={styles.srOnly} htmlFor={`${fieldId}-message`}>
          Décrivez ce que vous voulez accomplir
        </label>
        <div className={styles.composerBox}>
          <textarea
            ref={composerInputRef}
            id={`${fieldId}-message`}
            className={styles.composerInput}
            data-testid="project-assistant-input"
            rows={2}
            value={draft}
            disabled={busy || blocked}
            placeholder="Demander à Nora à propos de ce projet…"
            aria-describedby={liveRegionId}
            onChange={(event) => {
              setDraft(event.target.value);
              syncComposerTextareaHeight(event.currentTarget);
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                sendMessage();
              }
            }}
          />
          {/* P3 46:2 — tools row inside composer chrome (presentation anchors). */}
          <div
            className={styles.composerTools}
            data-testid="project-assistant-composer-tools"
          >
            <span className={styles.composerTool}>+ Contexte</span>
            <span className={styles.composerTool}>@ Élément</span>
            <span className={styles.composerToolActive}>
              Contexte projet actif
            </span>
            {stopAvailable ? (
              <button
                type="button"
                className={styles.stopButton}
                data-testid="project-assistant-stop"
                onClick={() => stopCurrentResponse()}
                title="Arrêter la réponse de Nora"
                aria-label="Arrêter la réponse de Nora"
              >
                <span className={styles.sendLabelFull}>Arrêter</span>
                <span className={styles.sendLabelCompact} aria-hidden="true">
                  ■
                </span>
              </button>
            ) : (
              <button
                type="submit"
                className={styles.sendButton}
                data-testid="project-assistant-send"
                disabled={!canSend}
                aria-disabled={!canSend}
                title={
                  blocked
                    ? "Assistant indisponible"
                    : busy
                      ? "Nora prépare une réponse"
                      : draft.trim().length === 0
                        ? "Saisissez un message"
                        : "Envoyer le message"
                }
                aria-label={
                  canSend
                    ? "Envoyer le message à Nora"
                    : busy
                      ? "Nora prépare une réponse"
                      : "Envoi indisponible"
                }
              >
                <span className={styles.sendLabelFull}>Envoyer</span>
                <span className={styles.sendLabelCompact} aria-hidden="true">
                  ↑
                </span>
              </button>
            )}
          </div>
          {/*
            DP06 / P3 §28 — Nora activity is in the transcript.
            Keep a single sr-only status node for phase/stop machine tests.
            Outside composerTools so tools chrome stays free of activity copy.
          */}
          <span
            className={styles.srOnly}
            data-testid="project-assistant-status"
            data-nora-phase={noraActivity.phase}
            data-nora-stop={
              noraActivity.stopAvailable ? "available" : "unavailable"
            }
          >
            {noraActivity.label}
          </span>
        </div>
      </form>
      ) : null}

      <div className={styles.srOnly} data-testid="project-assistant-no-cursor" aria-hidden="true">
        Aucune action Cursor
      </div>
      <div className={styles.srOnly} data-testid="project-assistant-no-write" aria-hidden="true">
        Aucune écriture Git ou GitHub
      </div>
      <div
        className={styles.srOnly}
        data-testid="project-assistant-no-ops1-destination"
        aria-hidden="true"
      >
        OPS1 n&apos;est pas la destination F2
      </div>
      {showFixtureNoRealStamp ? (
        <div
          className={styles.srOnly}
          data-testid="project-assistant-f3-no-real"
          aria-hidden="true"
        >
          FIXTURE — AUCUNE EXÉCUTION RÉELLE
        </div>
      ) : executeKind === "deterministic_test" ? (
        <div
          className={styles.srOnly}
          data-testid="project-assistant-f3-deterministic"
          aria-hidden="true"
        >
          Exécution déterministe de test
        </div>
      ) : executeKind === "cursor_real" ? (
        <div
          className={styles.srOnly}
          data-testid="project-assistant-f3-cursor-real-recorded"
          aria-hidden="true"
        >
          Exécution Cursor réelle enregistrée
        </div>
      ) : null}
      {showFixtureNoRealStamp ? (
        <div
          className={styles.srOnly}
          data-testid="project-assistant-f3-cursor-real-blocked"
          aria-hidden="true"
        >
          CURSOR REAL BLOQUÉ
        </div>
      ) : null}
    </section>
  );
}
```

---
END OF COMPLETE REVIEW PACK — P6 F01+UI05 INTEGRATED CLOSURE
