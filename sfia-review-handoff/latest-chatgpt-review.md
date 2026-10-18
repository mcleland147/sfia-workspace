# SFIA STUDIO — P6 INTEGRATED PRODUCT ARCHITECTURE RECOVERY
# DELIVERY INTÉGRÉ — Critical Review Pack (FULL)

## 0. Horodatage / qualification

| Champ | Valeur |
|---|---|
| Horodatage ISO | 2026-10-18T15:53:47+0200 |
| Local | 2026-10-18 15:53 CEST |
| Chantier | P6-INTEGRATED-PRODUCT-ARCHITECTURE-RECOVERY |
| Cycle | 8 — Delivery / implémentation |
| Profil | CRITICAL |
| Typologie | INC / EVOL |
| Capacité | V3-F05 (+ F06/F07/F11/F12/F14) |
| Milestone | P6 |
| Mode preuve | DETERMINISTIC PRODUCT INTEGRATION |
| Architecture Review entrée | `sfia/review-handoff` @ `9149179b` / blob `d9784d2e` |

## 1. GO Morris consommés

| Décision | Statut |
|---|---|
| D-ARCH-REC-01 Option B | **CONSUMED** (conversation pilotage — ≠ doctrine Git) |
| D-ARCH-REC-02 Cycle Lifecycle ≠ détournement Generic PREPARE | **CONSUMED** |
| D-ARCH-REC-03 GO Delivery intégré | **CONSUMED** |
| D-ARCH-REC-04 Documentary sync | **NOT AUTHORIZED** — non exécuté |

## 2. Git Truth

| Item | Valeur |
|---|---|
| Remote | `https://github.com/mcleland147/sfia-workspace.git` |
| origin/main base | `304e30e8f9d19fad753a76c7a7b89b5b7e34c3f8` |
| Delivery worktree | `/Users/morris/Projects/sfia-workspace-p6-arch-recovery-delivery-304e30e8` |
| Branche Delivery | `delivery/sfia-studio-p6-integrated-architecture-recovery` |
| HEAD base (uncommitted candidate) | `304e30e8` + local Product changes |
| Product push/PR | **NONE** |
| QA AtelierNova worktree | préservé (`…-p6-fresh-qa-304e30e8`) |
| Runtime `:3020` | préservé (`/login` 200) — non stoppé/redémarré |
| DB QA | non mutées |

## 3. Sources

Processus v2.6 ; Convergence Build Doctrine/Roadmap (lecture) ; C1/P6 (lecture) ; D-ER architecture ; PRR 02–09 ; doctrine v3 30/34/35/37 ; Review Handoff architectural `9149179b` ; tests der16/F01/framing/toolFirst.

D-ARCH-REC-* : décisions conversationnelles Morris — **non** présentées comme baseline Git doctrine.

## 4. Convergence Pre-check

P5 intégré ; P6 HQA en cours ; #587/#588 sur main ; P6 GLOBAL PASS NON ACQUIS ; runtime v3 NON ADOPTED.
Gap traité : fusion F2 Cycle Lifecycle ↔ Generic PREPARE.
KEEP OA/EC/Attempt/Gateway/Evidence. ADAPT F2 orchestration + coordinators. COMPLETE tests AtelierNova-like. TRANSITIONAL D-ER-19 / offers session-local (exit documentés).

## 5. Diagnostic causal final (revalidé)

| Cause | Statut |
|---|---|
| Generic PREPARE project-context (`dac669d7` ⊂ #587) capturait tours START | **PROVEN** |
| Narrative AtelierNova = `genericMissionClarificationText(structural, no cycle)` | **PROVEN** |
| 0 cycle / 0 traj / 0 HD / 0 EC sur AtelierNova QA | **PROVEN** (review) |
| Exclusion formalization analysis-only insuffisante | **PROVEN** mécanisme |
| Correction : discrimination raw+stance + coordinator admission + framing orient | **IMPLEMENTED** |

## 6. Architecture CURRENT vs candidate

**CURRENT (pré-fix) :** `orchestrateF2` décidait inline `projectContextAdmission` → PREPARE pouvait short-circuit avant late START.

**CANDIDATE (Option B) :**
1. `conversationWorkflowDiscrimination` — `cycle_lifecycle` / `execution_mission` / `ambiguous_mixed`
2. `genericExecutionConversationCoordinator.assessGenericPrepareConversationAdmission` — admission PREPARE sans dupliquer readiness/materiality
3. `cycleLifecycleConversationCoordinator` — messages Cycle Lifecycle / mixed
4. `orchestrateF2` délègue ; conserve un seul backend `prepareGenericExecutionContractDraft` / `solicitGenericExecutionPrepare`

Invariant : Cycle Lifecycle intent **preempts** project-context Generic PREPARE ; D-ER-17 execution missions sans cycle **conservées** ; PREPARE≠AUTHORIZE≠EXECUTE inchangé ; pas de second moteur/SoT.

## 7. Responsabilités séparées

| Domaine | Owner |
|---|---|
| Discrimination d'intention | `conversationWorkflowDiscrimination` (pure) |
| Orientation Cycle Lifecycle | `cycleLifecycleConversationCoordinator` |
| Admission Generic PREPARE conversationnelle | `genericExecutionConversationCoordinator` |
| Préparation EC / readiness / materiality | W2 existant (KEEP) |
| START gate | `resolveChatFirstCycleStartGate` (KEEP) |
| Dispatcher | `orchestrateF2` (allévié, non remplacé) |

## 8. Fichiers créés / modifiés

### Créés
- `f2/conversationWorkflowDiscrimination.ts`
- `f2/cycleLifecycleConversationCoordinator.ts`
- `f2/genericExecutionConversationCoordinator.ts`
- `__tests__/project-assistant/p6.arch.cycleLifecycleVsGenericPrepare.d0.test.ts`

### Modifiés
- `f2/orchestrateF2.ts`

### Interdits non touchés
Doctrine, Roadmap, C1, D-ER doc, template, secrets, DB QA.

## 9. Contenu exploitable — fichiers nouveaux

### NEW FILE: `conversationWorkflowDiscrimination.ts`

```typescript
/**
 * P6 Architecture Recovery (Option B) — conversation workflow discrimination.
 *
 * Pure classification of Pilote turns into Cycle Lifecycle vs Execution Mission
 * vs ambiguous/mixed. Does NOT mutate Product. Does NOT invent HumanDecision.
 * Does NOT authorize START or PREPARE.
 *
 * D-ARCH-REC-02: Cycle Lifecycle intent must not be diverted to Generic PREPARE.
 */

import type { IntentAnalysisDto, PilotDecisionCandidate } from "./types";
import {
  interpretPilotNarrativeStance,
  type PilotNarrativeStance,
} from "./composeF2PilotFacingNarrative";
import { hasExplicitNewCycleFormalizationSignal } from "./activeCycleGovernedContinuation";
import { resolveChatFirstStartRouting } from "./resolveChatFirstCycleStartGate";

export type ConversationWorkflowKind =
  | "cycle_lifecycle"
  | "execution_mission"
  | "ambiguous_mixed";

export type ConversationWorkflowDiscrimination = {
  readonly kind: ConversationWorkflowKind;
  readonly stance: PilotNarrativeStance;
  readonly startRoutingKind: ReturnType<
    typeof resolveChatFirstStartRouting
  >["kind"];
  readonly hasCycleLifecycleLanguage: boolean;
  readonly hasExecutionMissionLanguage: boolean;
  readonly analysisSignalsCycleFormalization: boolean;
  /**
   * When true, Generic PREPARE on project-context (no active cycle) must not
   * capture this turn — Cycle Lifecycle / mixed cycle-first paths.
   */
  readonly preemptsGenericPrepareProjectContext: boolean;
  readonly reason: string;
};

const CYCLE_LIFECYCLE_RE =
  /\b(?:d[eé]marr\w*|lanc\w*|activ(?:er|ation)|pr[eé]par\w*|qualif\w*|propos\w*).{0,48}\bcycle\b|\bcycle\b.{0,48}\b(?:d[eé]marr\w*|lanc\w*|activ(?:er|ation)|cadrage)\b|\b(?:nouveau|premier)\s+cycle\b|\bcycle\s+(?:de\s+)?cadrage\b|\bd[eé]marrage\s+effectif\b/i;

const EXECUTION_MISSION_RE =
  /\b(?:execution\s*contract|contrat\s+d['’]?\s*ex[eé]cution|pr[eé]pare(?:r)?\s+(?:le\s+|un\s+|ce\s+)?contrat|pr[eé]paration\s+(?:du\s+|d['’]un\s+)?contrat|mission\s+(?:technique\s+)?(?:pour\s+)?cursor|confier\w*\s+[^\n.!?]{0,40}\bcursor\b)\b/i;

const EXPLICIT_PREPARE_CONTRACT_ONLY_RE =
  /\b(?:pr[eé]pare(?:r)?|pr[eé]paration)\s+(?:le\s+|un\s+|ce\s+)?(?:contrat\s+d['’]?\s*ex[eé]cution|execution\s*contract)\b/i;

export function hasCycleLifecycleLanguage(userContent: string): boolean {
  return CYCLE_LIFECYCLE_RE.test((userContent ?? "").trim());
}

export function hasExecutionMissionLanguage(userContent: string): boolean {
  return EXECUTION_MISSION_RE.test((userContent ?? "").trim());
}

export function discriminateConversationWorkflow(input: {
  readonly userContent: string;
  readonly analysis: IntentAnalysisDto;
  readonly cycleLabel?: string | null;
  readonly pilotDecisionCandidate?: PilotDecisionCandidate | null;
  /** True when a CURRENT Generic PREPARE offer exists for this project/cycle binding. */
  readonly hasCurrentGenericPrepareOffer?: boolean;
  /** True when resolveChatFirstGenericPrepareGo already accepted prepare/lexical. */
  readonly chatFirstPrepareAccept?: boolean;
}): ConversationWorkflowDiscrimination {
  const text = (input.userContent ?? "").trim();
  const stance = interpretPilotNarrativeStance({
    userContent: text,
    cycleLabel: input.cycleLabel,
    pilotDecisionCandidate:
      input.pilotDecisionCandidate ?? input.analysis.pilotDecisionCandidate,
  });
  const startRouting = resolveChatFirstStartRouting({
    userContent: text,
    cycleLabel: input.cycleLabel,
    pilotDecisionCandidate:
      input.pilotDecisionCandidate ?? input.analysis.pilotDecisionCandidate,
  });
  const cycleLang = hasCycleLifecycleLanguage(text);
  const execLang = hasExecutionMissionLanguage(text);
  const analysisCycle = hasExplicitNewCycleFormalizationSignal(input.analysis);
  const explicitContractOnly = EXPLICIT_PREPARE_CONTRACT_ONLY_RE.test(text);
  const prepareAccept = Boolean(input.chatFirstPrepareAccept);
  const hasOffer = Boolean(input.hasCurrentGenericPrepareOffer);

  // Explicit START / suppress-mint start-adjacent → Cycle Lifecycle owns the turn.
  if (
    startRouting.kind === "attempt_start" ||
    startRouting.kind === "suppress_mint" ||
    stance.kind === "accept_start"
  ) {
    const mixed = execLang && !explicitContractOnly;
    return {
      kind: mixed ? "ambiguous_mixed" : "cycle_lifecycle",
      stance,
      startRoutingKind: startRouting.kind,
      hasCycleLifecycleLanguage: cycleLang || analysisCycle,
      hasExecutionMissionLanguage: execLang,
      analysisSignalsCycleFormalization: analysisCycle,
      preemptsGenericPrepareProjectContext: true,
      reason: mixed
        ? "start_stance_with_execution_mention"
        : "start_or_start_adjacent_stance",
    };
  }

  // Raw / analysis cycle formalization without START stance.
  if (cycleLang || analysisCycle) {
    if (execLang && !explicitContractOnly) {
      return {
        kind: "ambiguous_mixed",
        stance,
        startRoutingKind: startRouting.kind,
        hasCycleLifecycleLanguage: true,
        hasExecutionMissionLanguage: true,
        analysisSignalsCycleFormalization: analysisCycle,
        preemptsGenericPrepareProjectContext: true,
        reason: "mixed_cycle_and_execution_language",
      };
    }
    return {
      kind: "cycle_lifecycle",
      stance,
      startRoutingKind: startRouting.kind,
      hasCycleLifecycleLanguage: true,
      hasExecutionMissionLanguage: execLang,
      analysisSignalsCycleFormalization: analysisCycle,
      preemptsGenericPrepareProjectContext: true,
      reason: cycleLang
        ? "raw_cycle_lifecycle_language"
        : "analysis_cycle_formalization",
    };
  }

  // Execution mission: prepare accept on CURRENT offer, lexical prepare contract,
  // or execution-mission language without cycle lifecycle language.
  if (prepareAccept || explicitContractOnly || (execLang && hasOffer)) {
    return {
      kind: "execution_mission",
      stance,
      startRoutingKind: startRouting.kind,
      hasCycleLifecycleLanguage: false,
      hasExecutionMissionLanguage: true,
      analysisSignalsCycleFormalization: false,
      preemptsGenericPrepareProjectContext: false,
      reason: prepareAccept
        ? "chat_first_prepare_accept"
        : explicitContractOnly
          ? "explicit_prepare_contract"
          : "execution_language_with_current_offer",
    };
  }

  if (execLang) {
    return {
      kind: "execution_mission",
      stance,
      startRoutingKind: startRouting.kind,
      hasCycleLifecycleLanguage: false,
      hasExecutionMissionLanguage: true,
      analysisSignalsCycleFormalization: false,
      preemptsGenericPrepareProjectContext: false,
      reason: "execution_mission_language",
    };
  }

  // D-ER-17 — natural documentary / non-cycle actionable turns remain eligible
  // for Generic PREPARE project-context when ACGC eligibility admits them.
  // Absence of cycle-lifecycle language must NOT preempt that path (E10).
  return {
    kind: "execution_mission",
    stance,
    startRoutingKind: startRouting.kind,
    hasCycleLifecycleLanguage: false,
    hasExecutionMissionLanguage: false,
    analysisSignalsCycleFormalization: false,
    preemptsGenericPrepareProjectContext: false,
    reason: "non_cycle_default_allows_execution_admission",
  };
}
```
### NEW FILE: `cycleLifecycleConversationCoordinator.ts`

```typescript
/**
 * P6 Architecture Recovery (Option B) — Cycle Lifecycle conversation coordinator.
 *
 * Owns Cycle Lifecycle conversational orientation (framing / trajectory / START
 * preconditions). Does NOT invent HumanDecision, CycleInstance, or START.
 * Does NOT call Generic PREPARE.
 *
 * Product mutations remain in OA facades / preCycleCandidateTrajectoryActions /
 * resolveChatFirstCycleStartGate — this module coordinates messaging + admission
 * boundaries only.
 */

import type { FramingContinuityPhase } from "./chatFirstFramingContinuity";
import type { ConversationWorkflowDiscrimination } from "./conversationWorkflowDiscrimination";

export function shouldExcludeGenericPrepareProjectContext(
  discrimination: ConversationWorkflowDiscrimination,
): boolean {
  return discrimination.preemptsGenericPrepareProjectContext;
}

/**
 * Pilot-facing orientation when Cycle Lifecycle is requested but START
 * preconditions are not met. Never claims PREPARE/EC/HD mission semantics.
 */
export function cycleLifecyclePreconditionsMessage(input: {
  readonly presentation: "test_provider" | "openai_live";
  readonly phase: FramingContinuityPhase | null | undefined;
  readonly cycleLabel?: string | null;
  readonly discrimination: ConversationWorkflowDiscrimination;
}): string {
  const head =
    input.presentation === "test_provider" ? "[Mode test]" : "[Mode réel]";
  const cycle = (input.cycleLabel ?? "").trim()
    ? `« ${(input.cycleLabel ?? "").trim()} »`
    : "ce cycle";
  const mixedNote =
    input.discrimination.kind === "ambiguous_mixed" &&
    input.discrimination.hasExecutionMissionLanguage
      ? " La préparation d'un contrat d'exécution Cursor reste une étape distincte — après démarrage du cycle, pas à sa place."
      : "";

  switch (input.phase) {
    case "ready_to_start":
      return [
        head,
        `Le cycle ${cycle} est préparé. Indiquez explicitement que vous souhaitez le démarrer — aucun ExecutionContract n'est requis pour START.`,
        mixedNote.trim(),
      ]
        .filter(Boolean)
        .join(" ");
    case "trajectory_decided_prepare_cycle":
      return [
        head,
        `La trajectoire est décidée — il reste à préparer le cycle ${cycle} avant tout démarrage. Aucun contrat d'exécution n'a été préparé.`,
        mixedNote.trim(),
      ]
        .filter(Boolean)
        .join(" ");
    case "awaiting_trajectory_decision":
      return [
        head,
        `Une direction de trajectoire est proposée pour ${cycle}. Validez-la dans la carte de décision — un accord conversationnel ne démarre pas le cycle et ne prépare pas de contrat d'exécution.`,
        mixedNote.trim(),
      ]
        .filter(Boolean)
        .join(" ");
    case "recommendation_ready":
      return [
        head,
        `Une recommandation de cycle est disponible. Je peux préparer la trajectoire candidate pour ${cycle} — validez ensuite la décision structurante si applicable. Aucun démarrage ni contrat d'exécution n'a été engagé.`,
        mixedNote.trim(),
      ]
        .filter(Boolean)
        .join(" ");
    case "active":
      return [
        head,
        `Un cycle est déjà actif. Aucun second démarrage n'a été engagé.${mixedNote}`,
      ].join(" ");
    case "blocked_stale_or_incomplete":
      return [
        head,
        `La trajectoire candidate n'est pas encore exploitable pour ${cycle}. Aucune HumanDecision inventée, aucun démarrage, aucun contrat d'exécution.`,
      ].join(" ");
    case "blocked_no_recommendation":
    default:
      return [
        head,
        `Pour démarrer ${cycle}, Studio a besoin d'une recommandation de cycle puis d'une trajectoire préparée et liée — votre confirmation conversationnelle n'active rien à elle seule.`,
        "Aucun cycle artificiel n'a été créé. Aucun contrat d'exécution n'a été préparé.",
        mixedNote.trim(),
        "Utilisez la carte de trajectoire / préparation dans la conversation lorsqu'elle est disponible, ou demandez une recommandation de premier cycle.",
      ]
        .filter(Boolean)
        .join(" ");
  }
}

export function mixedCycleExecutionClarificationMessage(input: {
  readonly presentation: "test_provider" | "openai_live";
  readonly cycleLabel?: string | null;
}): string {
  const head =
    input.presentation === "test_provider" ? "[Mode test]" : "[Mode réel]";
  const cycle = (input.cycleLabel ?? "").trim()
    ? `« ${(input.cycleLabel ?? "").trim()} »`
    : "le cycle de travail";
  return [
    head,
    `Votre demande mélange démarrage de ${cycle} et préparation d'exécution.`,
    "Ce sont deux opérations distinctes : d'abord Cycle Lifecycle (trajectoire → préparation → START), ensuite Generic PREPARE du contrat — préparer ≠ autoriser ≠ exécuter.",
    "Aucune des deux n'a été engagée silencieusement. Précisez laquelle vous voulez en premier, ou validez la trajectoire du cycle puis redemandez le contrat.",
  ].join(" ");
}
```
### NEW FILE: `genericExecutionConversationCoordinator.ts`

```typescript
/**
 * P6 Architecture Recovery (Option B) — Generic Execution conversation coordinator.
 *
 * Thin admission boundary for Generic PREPARE conversational routing.
 * Reuses existing W2 prepare helpers — does NOT duplicate readiness/materiality
 * rules and does NOT authorize EXECUTE.
 *
 * D-ER-17: project-context PREPARE remains available for true execution missions.
 * D-ARCH-REC-02: Cycle Lifecycle discrimination preempts project-context capture.
 */

import type { IntentAnalysisDto, PilotDecisionCandidate } from "./types";
import {
  getCurrentGenericPrepareOffer,
  resolveChatFirstGenericPrepareGo,
} from "../w2/prepareGenericExecutionContractDraft";
import {
  discriminateConversationWorkflow,
  type ConversationWorkflowDiscrimination,
} from "./conversationWorkflowDiscrimination";
import { shouldExcludeGenericPrepareProjectContext } from "./cycleLifecycleConversationCoordinator";

export type GenericPrepareConversationAdmission = {
  readonly discrimination: ConversationWorkflowDiscrimination;
  readonly prepareGo: ReturnType<typeof resolveChatFirstGenericPrepareGo>;
  readonly chatFirstPrepareAccept: boolean;
  /** Active-cycle or project-context path may enter Generic PREPARE block. */
  readonly allowGenericPrepareRouting: boolean;
  /** Project-context (no active cycle) admission specifically. */
  readonly allowProjectContextPrepare: boolean;
  readonly blockReason: string | null;
};

export function assessGenericPrepareConversationAdmission(input: {
  readonly projectId: string;
  readonly userContent: string;
  readonly analysis: IntentAnalysisDto;
  readonly activeCycleInstanceId: string | null;
  readonly cycleLabel?: string | null;
  readonly pilotDecisionCandidate?: PilotDecisionCandidate | null;
  readonly sessionDbPath?: string | null;
  /** From ACGC / optional documentary eligibility (caller). */
  readonly eligibleForGenericPrepareRouting: boolean;
  readonly actionableForIntent: boolean;
  /**
   * Historical S8 project-context gate: prepare-accept OR
   * NEW_CYCLE_FORMALIZATION + no_compatible_artifact_effect.
   * Cycle-lifecycle discrimination may still preempt.
   */
  readonly projectContextLegacyEligible: boolean;
}): GenericPrepareConversationAdmission {
  const activeId = input.activeCycleInstanceId?.trim() || null;
  const prepareGo = resolveChatFirstGenericPrepareGo({
    projectId: input.projectId,
    cycleInstanceId: activeId,
    text: input.userContent,
    pilotDecisionCandidate:
      input.pilotDecisionCandidate ?? input.analysis.pilotDecisionCandidate,
    sessionDbPath: input.sessionDbPath,
  });
  const chatFirstPrepareAccept =
    prepareGo.kind === "prepare" ||
    prepareGo.kind === "explicit_lexical_prepare";
  const currentOffer = getCurrentGenericPrepareOffer(input.projectId, {
    sessionDbPath: input.sessionDbPath,
  });
  const discrimination = discriminateConversationWorkflow({
    userContent: input.userContent,
    analysis: input.analysis,
    cycleLabel: input.cycleLabel,
    pilotDecisionCandidate:
      input.pilotDecisionCandidate ?? input.analysis.pilotDecisionCandidate,
    hasCurrentGenericPrepareOffer: currentOffer != null,
    chatFirstPrepareAccept,
  });

  const excludeProjectContext =
    shouldExcludeGenericPrepareProjectContext(discrimination);

  const actionable =
    input.actionableForIntent || chatFirstPrepareAccept;

  if (!input.eligibleForGenericPrepareRouting || !actionable) {
    return {
      discrimination,
      prepareGo,
      chatFirstPrepareAccept,
      allowGenericPrepareRouting: false,
      allowProjectContextPrepare: false,
      blockReason: !input.eligibleForGenericPrepareRouting
        ? "not_eligible_for_generic_prepare_routing"
        : "not_actionable_for_prepare",
    };
  }

  if (activeId) {
    return {
      discrimination,
      prepareGo,
      chatFirstPrepareAccept,
      allowGenericPrepareRouting: true,
      allowProjectContextPrepare: false,
      blockReason: null,
    };
  }

  // D-ER-17 project-context — only for true execution missions.
  if (excludeProjectContext) {
    return {
      discrimination,
      prepareGo,
      chatFirstPrepareAccept,
      allowGenericPrepareRouting: false,
      allowProjectContextPrepare: false,
      blockReason: `cycle_lifecycle_preempts_project_context_prepare:${discrimination.reason}`,
    };
  }

  if (discrimination.kind !== "execution_mission" && !chatFirstPrepareAccept) {
    return {
      discrimination,
      prepareGo,
      chatFirstPrepareAccept,
      allowGenericPrepareRouting: false,
      allowProjectContextPrepare: false,
      blockReason: `workflow_not_execution_mission:${discrimination.kind}`,
    };
  }

  if (!input.projectContextLegacyEligible && !chatFirstPrepareAccept) {
    return {
      discrimination,
      prepareGo,
      chatFirstPrepareAccept,
      allowGenericPrepareRouting: false,
      allowProjectContextPrepare: false,
      blockReason: "project_context_legacy_gate_not_met",
    };
  }

  return {
    discrimination,
    prepareGo,
    chatFirstPrepareAccept,
    allowGenericPrepareRouting: true,
    allowProjectContextPrepare: true,
    blockReason: null,
  };
}
```
### NEW FILE: `p6.arch.cycleLifecycleVsGenericPrepare.d0.test.ts`

```typescript
/** @vitest-environment node */
/**
 * P6 Architecture Recovery — Option B oracles (deterministic).
 * AtelierNova-like: Cycle Lifecycle must not be diverted to Generic PREPARE.
 * D-ER-17: true execution missions without cycle remain admissible.
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  FakeConversationProvider,
  setConversationProviderForTests,
  type ConversationProvider,
  type ProviderChatMessage,
  type ProviderCompletionResult,
} from "@/lib/platform/ai";
import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
import { resetMw5ChallengeStoreForTests } from "@/features/project-assistant/f2/mw5ChallengeSessionStore";
import { resetPendingGenericPrepareOfferStoreForTests } from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
import {
  discriminateConversationWorkflow,
  hasCycleLifecycleLanguage,
} from "@/features/project-assistant/f2/conversationWorkflowDiscrimination";
import { shouldExcludeGenericPrepareProjectContext } from "@/features/project-assistant/f2/cycleLifecycleConversationCoordinator";
import { validateIntentAnalysisPayload } from "@/features/project-assistant/f2/intentAnalysis";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  tempProductDbPath,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";

const MARKER_NATURAL_DOC = "__DER16_NATURAL_DOC__";
const MARKER_CYCLE_START = "__ARCH_CYCLE_START__";
const MARKER_MIXED = "__ARCH_MIXED__";

const SIGNALS_OK = {
  structuralChange: false,
  securityImpact: false,
  architectureImpact: false,
  dataImpact: false,
  irreversible: false,
  lowRiskBounded: true,
};

function baseAnalysisJson(over: Record<string, unknown>): Record<string, unknown> {
  return {
    intentClass: "actionable",
    candidateCycleTypeId: "cyc:framing",
    signals: SIGNALS_OK,
    cognitiveWorkload: null,
    contradictionCandidate: null,
    challengeResponseAssessment: "sufficient",
    continuationKind: null,
    artifactMaterializationOperation: null,
    objective: null,
    scope: null,
    rephrasedRequest: null,
    outOfScope: [],
    risks: [],
    reservations: [],
    stopConditions: ["AUCUNE EXÉCUTION SANS AUTORISATION"],
    activatedBlocks: ["qualification"],
    expectedOutcome: null,
    criticalJustification: null,
    requestedOperation: null,
    executionIntent: null,
    pilotDecisionCandidate: null,
    ...over,
  };
}

function intercept(messages: ProviderChatMessage[]): string | null {
  const isF2 = messages.some(
    (m) => m.role === "system" && m.content.includes("SFIA Studio F2"),
  );
  const lastUser = [...messages].reverse().find((m) => m.role === "user");
  const full = lastUser?.content ?? "";
  const cur = full.split("Demande courante (à évaluer):").pop() ?? full;
  let payload: Record<string, unknown> | null = null;
  // Natural-doc uses the same F2-banner gate as der16 E10.
  if (isF2 && cur.includes(MARKER_NATURAL_DOC)) {
    payload = baseAnalysisJson({
      candidateCycleTypeId: null,
      objective: "Écrire une spécification Markdown dans le dépôt du projet",
      scope: "projects/demo/docs",
      rephrasedRequest:
        "Rédiger un document Markdown de spécification dans le dépôt du projet",
      expectedOutcome: "Spécification consultable dans le dépôt du projet",
    });
  } else if (cur.includes(MARKER_CYCLE_START)) {
    payload = baseAnalysisJson({
      signals: { ...SIGNALS_OK, structuralChange: true, architectureImpact: true, lowRiskBounded: false },
      objective: "Démarrer le cycle Cadrage",
      rephrasedRequest: "Démarrer effectivement le cycle Cadrage",
      expectedOutcome: "Cycle Cadrage actif",
      scope: "qualification bornée",
    });
  } else if (cur.includes(MARKER_MIXED)) {
    payload = baseAnalysisJson({
      signals: { ...SIGNALS_OK, architectureImpact: true, lowRiskBounded: false },
      objective: "Préparer un cycle Cadrage et un contrat d'exécution Cursor",
      rephrasedRequest:
        "Propose un cycle Cadrage et prépare le contrat d'exécution",
      expectedOutcome: "Cycle puis contrat",
    });
  }
  if (!payload) return null;
  return `[TEST/FAKE · NON LIVE] ${JSON.stringify(payload)}`;
}

class ArchProvider implements ConversationProvider {
  readonly providerId = "fake-test";
  private readonly inner = new FakeConversationProvider();

  private result(text: string): ProviderCompletionResult {
    return {
      text,
      usage: {
        inputTokens: 1,
        outputTokens: 1,
        totalTokens: 2,
        model: "fake-test-model",
        providerResponseId: "fake-arch",
      },
    };
  }

  async complete(messages: ProviderChatMessage[]): Promise<ProviderCompletionResult> {
    const hit = intercept(messages);
    if (hit) return this.result(hit);
    return this.inner.complete(messages);
  }

  async completeStructured(input: {
    messages: ProviderChatMessage[];
    schemaName: string;
    jsonSchema: Record<string, unknown>;
  }): Promise<ProviderCompletionResult> {
    const hit = intercept(input.messages);
    if (hit) return this.result(hit);
    return this.inner.completeStructured(input);
  }

  async completeRound(
    ...args: Parameters<FakeConversationProvider["completeRound"]>
  ): ReturnType<FakeConversationProvider["completeRound"]> {
    return this.inner.completeRound(...args);
  }
}

function restoreEnvVar(name: string, previous: string | undefined): void {
  if (previous === undefined) delete process.env[name];
  else process.env[name] = previous;
}

describe("P6 arch recovery — Cycle Lifecycle vs Generic PREPARE", () => {
  let runtime: RuntimeApplicationService;
  let previousProvider: string | undefined;
  let previousMorris: string | undefined;
  let previousPilot: string | undefined;
  let previousDetPin: string | undefined;
  let sessionDbPath: string;

  beforeEach(() => {
    previousProvider = process.env.OPS1_CONVERSATION_PROVIDER;
    previousMorris = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    previousPilot = process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
    previousDetPin = process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA;
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = "1";
    process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA = W2_TEST_PINNED_BASE_HEAD_SHA;
    setConversationProviderForTests(new ArchProvider());
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetPendingGenericPrepareOfferStoreForTests();
    sessionDbPath = tempProductDbPath("p6-arch-session.sqlite");
    runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("p6-arch-product.sqlite"),
      idPrefix: "arch",
    });
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetPendingGenericPrepareOfferStoreForTests();
    setConversationProviderForTests(null);
    cleanupW2TempDirs();
    restoreEnvVar("OPS1_CONVERSATION_PROVIDER", previousProvider);
    restoreEnvVar("SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY", previousMorris);
    restoreEnvVar("SFIA_STUDIO_LOCAL_PILOT_AUTHORITY", previousPilot);
    restoreEnvVar("SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA", previousDetPin);
  });

  async function seedProject(suffix: string): Promise<string> {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: `Arch ${suffix}`,
      objective: "Architecture recovery oracles",
      context: "det arch",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `AR${suffix.toUpperCase().slice(0, 6)}`,
      idempotencyKey: `idem:arch-${suffix}`,
    });
    if (!created.ok) throw new Error("createProject");
    const projectId = created.project.projectId;
    // Parity with der16 E10 seed — trajectory present, no active cycle.
    const lps0 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lps0.ok) throw new Error("lps0");
    await oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:${projectId}`,
      projectId,
      steps: [{ stepId: "stp:a", order: 1, label: "A", state: "done" }],
      status: "active",
      expectedLpsVersion: lps0.livingProjectState.version,
      createdBy: {
        actorId: "actor:morris",
        role: "project_owner",
        displayName: "Morris",
        authorityLevel: "N3",
      },
    });
    return projectId;
  }

  describe("discrimination unit", () => {
    it("classifies AtelierNova-like START as cycle preempting project-context PREPARE", () => {
      const text =
        "Je valide ta recommandation et je souhaite maintenant démarrer effectivement notre premier cycle de travail. Je propose un cycle Cadrage. Si le cycle Cadrage est adapté, démarre-le dans Studio.";
      expect(hasCycleLifecycleLanguage(text)).toBe(true);
      const analysis = validateIntentAnalysisPayload(
        baseAnalysisJson({
          signals: {
            ...SIGNALS_OK,
            structuralChange: true,
            architectureImpact: true,
            lowRiskBounded: false,
          },
          objective: "Mission Cursor après cadrage",
          rephrasedRequest: "Mission technique Cursor",
        }),
      );
      const d = discriminateConversationWorkflow({
        userContent: text,
        analysis,
        cycleLabel: "Cadrage",
      });
      expect(d.kind === "cycle_lifecycle" || d.kind === "ambiguous_mixed").toBe(
        true,
      );
      expect(shouldExcludeGenericPrepareProjectContext(d)).toBe(true);
    });

    it("does not preempt natural documentary execution without cycle language", () => {
      const text = `Produis-moi une spécification Markdown. ${MARKER_NATURAL_DOC}`;
      const analysis = validateIntentAnalysisPayload(
        baseAnalysisJson({
          candidateCycleTypeId: null,
          objective: "Produire une spécification Markdown",
          rephrasedRequest: text,
          expectedOutcome: "Fichier Markdown",
        }),
      );
      const d = discriminateConversationWorkflow({
        userContent: text,
        analysis,
      });
      expect(d.kind).toBe("execution_mission");
      expect(d.preemptsGenericPrepareProjectContext).toBe(false);
    });
  });

  it("ORACLE 02/AtelierNova-like — START request must not emit Generic PREPARE structural narrative", async () => {
    const projectId = await seedProject("atelier");
    const turn = await orchestrateAssistantSend({
      projectId,
      content: `Je souhaite démarrer effectivement notre premier cycle de travail. Je propose un cycle Cadrage. Si adapté, démarre-le dans Studio. Pas d'autorisation Cursor. ${MARKER_CYCLE_START}`,
      sessionDbPath,
    });
    expect(turn.ok).toBe(true);
    if (!turn.ok) throw new Error(turn.message);

    expect(turn.text).not.toMatch(
      /Contexte projet conservé — aucun cycle artificiel créé/,
    );
    expect(turn.text).not.toMatch(
      /décision Pilote explicite reste nécessaire avant de préparer un contrat d'exécution/i,
    );
    expect(turn.text).toMatch(/cycle|trajectoire|démarr/i);

    const oa = runtime.oa!;
    expect((await oa.cycleServices.cycles.listByProject(projectId)).length).toBe(
      0,
    );
    expect(
      (await oa.executionContractServices.contracts.listByProject(projectId))
        .length,
    ).toBe(0);
  });

  it("ORACLE 10 — ok go after cycle START wording does not invent EC", async () => {
    const projectId = await seedProject("okgo");
    await orchestrateAssistantSend({
      projectId,
      content: `Je souhaite démarrer effectivement le cycle Cadrage. Démarre-le dans Studio. ${MARKER_CYCLE_START}`,
      sessionDbPath,
    });
    const turn2 = await orchestrateAssistantSend({
      projectId,
      content: "ok go",
      sessionDbPath,
    });
    expect(turn2.ok).toBe(true);
    if (!turn2.ok) throw new Error(turn2.message);
    expect(turn2.text).not.toMatch(/xct:gen-prep:/);
    expect(turn2.text).not.toMatch(
      /décision Pilote explicite reste nécessaire avant de préparer un contrat d'exécution/i,
    );
  });

  it("ORACLE 05 — non-cycle documentary language does not preempt D-ER-17 project-context admission", () => {
    // End-to-end project-context PREPARE remains proven by
    // p6.der16.genericNoraToolInvocation E10 (same Product entry).
    // This guard locks the Option B discrimination contract.
    const text = `Produis-moi une spécification Markdown pour le projet. ${MARKER_NATURAL_DOC}`;
    const analysis = validateIntentAnalysisPayload(
      baseAnalysisJson({
        candidateCycleTypeId: null,
        objective: "Écrire une spécification Markdown dans le dépôt du projet",
        rephrasedRequest: text,
        expectedOutcome: "Spécification consultable",
      }),
    );
    const d = discriminateConversationWorkflow({ userContent: text, analysis });
    expect(d.kind).toBe("execution_mission");
    expect(d.preemptsGenericPrepareProjectContext).toBe(false);
    expect(shouldExcludeGenericPrepareProjectContext(d)).toBe(false);
  });

  it("ORACLE 15 — mixed cycle + execution without silent PREPARE fusion", async () => {
    const projectId = await seedProject("mixed");
    const turn = await orchestrateAssistantSend({
      projectId,
      content: `Propose un cycle Cadrage et prépare en même temps le contrat d'exécution Cursor pour l'outil d'inscriptions. ${MARKER_MIXED}`,
      sessionDbPath,
    });
    expect(turn.ok).toBe(true);
    if (!turn.ok) throw new Error(turn.message);
    expect(turn.text).not.toMatch(
      /décision Pilote explicite reste nécessaire avant de préparer un contrat d'exécution/i,
    );
    expect(turn.text).toMatch(/distinct|cycle|trajectoire|contrat|démarr/i);
  });
});
```


## 10. Diff utile — orchestrateF2.ts

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index 7a75a37f..891f938a 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -74,6 +74,12 @@ import {
   isOptionalDocumentaryWithoutClosureArtifactBlock,
   hasExplicitNewCycleFormalizationSignal,
 } from "./activeCycleGovernedContinuation";
+import {
+  cycleLifecyclePreconditionsMessage,
+  mixedCycleExecutionClarificationMessage,
+} from "./cycleLifecycleConversationCoordinator";
+import { assessGenericPrepareConversationAdmission } from "./genericExecutionConversationCoordinator";
+import { discriminateConversationWorkflow } from "./conversationWorkflowDiscrimination";
 import {
   enrichQualificationWithCkcSemantics,
   isProductStudioNativeCkcProof,
@@ -1751,6 +1757,56 @@ export async function orchestrateAssistantSend(input: {
         const wantsFramingProgress =
           framingStance.kind === "accept_start" ||
           framingStance.kind === "accept_recommendation";
+        // Option B — when START is explicit but framing preconditions are absent
+        // AND no CycleInstance inventory exists yet, orient Cycle Lifecycle here
+        // so the turn cannot be captured later by Generic PREPARE project-context.
+        // Do NOT intercept when cycles already exist (F01 legacy / START gate owns it)
+        // or when the turn is a non-cycle prepare-accept ("OK" without offer).
+        if (
+          startRoutingEarly.kind === "attempt_start" &&
+          (phase === "blocked_no_recommendation" ||
+            phase === "blocked_stale_or_incomplete")
+        ) {
+          const framingDiscrimination = discriminateConversationWorkflow({
+            userContent: content,
+            analysis,
+            cycleLabel: productCycleLabel,
+            pilotDecisionCandidate: analysis.pilotDecisionCandidate,
+          });
+          let cycleInventoryCount = 0;
+          try {
+            cycleInventoryCount = (
+              await oaForFraming.cycleServices.cycles.listByProject(
+                project.projectId,
+              )
+            ).length;
+          } catch {
+            cycleInventoryCount = 0;
+          }
+          if (
+            cycleInventoryCount === 0 &&
+            framingDiscrimination.preemptsGenericPrepareProjectContext
+          ) {
+            return await completeF2Turn({
+              userText: content,
+              sessionDbPath: input.sessionDbPath,
+              text: cycleLifecyclePreconditionsMessage({
+                presentation,
+                phase,
+                cycleLabel: productCycleLabel,
+                discrimination: framingDiscrimination,
+              }),
+              mode: modeResolution.mode as "fixture" | "live",
+              presentation,
+              model,
+              project,
+              intentClass: analysis.intentClass,
+              reinstructionOfProposalId,
+              executionBlocked: true,
+              turnKind: "f2_clarification",
+            });
+          }
+        }
         if (wantsFramingProgress) {
           if (phase === "recommendation_ready") {
             const advanced = await projectAssistantAdvanceFramingContinuityAction(
@@ -2047,22 +2103,12 @@ export async function orchestrateAssistantSend(input: {
   // is already active must not fall through to NEW_CYCLE START. PREPARE only
   // on explicit prepare intent OR chat-first accept of a CURRENT prepare offer
   // (Q16/Q17/Q18); otherwise clarify gaps or recommend prepare. Never canned.
+  //
+  // Option B / D-ARCH-REC-02 — Cycle Lifecycle intent must not be captured by
+  // Generic PREPARE project-context. Admission is coordinated (not duplicated)
+  // via assessGenericPrepareConversationAdmission.
   {
     const activeIdForPrepare = project.activeCycleInstanceId?.trim() || null;
-    const prepareGoPreview = resolveChatFirstGenericPrepareGo({
-      projectId: project.projectId,
-      cycleInstanceId: activeIdForPrepare,
-      text: content,
-      pilotDecisionCandidate: analysis.pilotDecisionCandidate,
-      sessionDbPath: input.sessionDbPath,
-    });
-    const chatFirstPrepareAccept =
-      prepareGoPreview.kind === "prepare" ||
-      prepareGoPreview.kind === "explicit_lexical_prepare";
-    const actionableForGenericPrepare =
-      analysis.intentClass === "actionable" ||
-      analysis.intentClass === "execution_request" ||
-      chatFirstPrepareAccept;

     // P6-HQA-F05-GD4-01 — ordinary documentary materialization without a
     // closure Artifact obligation must not dead-end on no_require_artifact.
@@ -2072,27 +2118,68 @@ export async function orchestrateAssistantSend(input: {
       continuation.mode === "NEW_CYCLE_FORMALIZATION" ||
       isOptionalDocumentaryWithoutClosureArtifactBlock(continuation);

-    // D-ER-17 / S8 — NO active cycle is not a blocker for Generic PREPARE.
-    // Admitted on PROJECT CONTEXT (cycleInstanceId = null) when Project is bound
-    // and the turn is (a) a Pilote prepare GO / explicit prepare intent, or
-    // (b) a natural documentary signal that ACGC no longer dead-ends
-    // (no_compatible_artifact_effect). Explicit NEW_CYCLE formalization
-    // (« prépare un cycle … ») stays on the historical createCycle path.
-    // Other actionable no-cycle missions keep the legacy NEW_CYCLE START path
-    // until the D-ER-19 legacy-admission exit (OPEN — see delivery report).
-    // No CycleInstance is ever invented here.
-    const projectContextAdmission =
+    const prepareAdmission = assessGenericPrepareConversationAdmission({
+      projectId: project.projectId,
+      userContent: content,
+      analysis,
+      activeCycleInstanceId: activeIdForPrepare,
+      cycleLabel:
+        (analysis.candidateCycleTypeId
+          ? getCycleTypeById(analysis.candidateCycleTypeId)?.label
+          : null) ?? analysis.candidateCycleTypeId ?? null,
+      pilotDecisionCandidate: analysis.pilotDecisionCandidate,
+      sessionDbPath: input.sessionDbPath,
+      eligibleForGenericPrepareRouting,
+      actionableForIntent:
+        analysis.intentClass === "actionable" ||
+        analysis.intentClass === "execution_request",
+      projectContextLegacyEligible:
+        continuation.mode === "NEW_CYCLE_FORMALIZATION" &&
+        continuation.reason === "no_compatible_artifact_effect",
+    });
+
+    // Mixed cycle+execution without START path → distinguish operations; no silent PREPARE.
+    if (
       !activeIdForPrepare &&
+      !prepareAdmission.allowGenericPrepareRouting &&
+      prepareAdmission.discrimination.kind === "ambiguous_mixed" &&
+      prepareAdmission.discrimination.hasCycleLifecycleLanguage &&
+      prepareAdmission.discrimination.hasExecutionMissionLanguage &&
+      prepareAdmission.discrimination.startRoutingKind === "not_start_path"
+    ) {
+      return await completeF2Turn({
+        userText: content,
+        sessionDbPath: input.sessionDbPath,
+        text: mixedCycleExecutionClarificationMessage({
+          presentation,
+          cycleLabel:
+            (analysis.candidateCycleTypeId
+              ? getCycleTypeById(analysis.candidateCycleTypeId)?.label
+              : null) ?? analysis.candidateCycleTypeId ?? null,
+        }),
+        mode: modeResolution.mode as "fixture" | "live",
+        presentation,
+        model,
+        project,
+        intentClass: analysis.intentClass,
+        reinstructionOfProposalId,
+        executionBlocked: true,
+        turnKind: "f2_clarification",
+      });
+    }
+
+    // D-ER-17 / S8 — NO active cycle is not a blocker for Generic PREPARE when
+    // the turn is a true execution mission. Cycle Lifecycle / mixed cycle-first
+    // turns are excluded by the coordinator (no artificial CycleInstance).
+    // Legacy analysis formalization signal retained as defense-in-depth.
+    const projectContextAdmission =
+      prepareAdmission.allowProjectContextPrepare &&
       Boolean(project.projectId?.trim()) &&
-      !hasExplicitNewCycleFormalizationSignal(analysis) &&
-      (chatFirstPrepareAccept ||
-        (continuation.mode === "NEW_CYCLE_FORMALIZATION" &&
-          continuation.reason === "no_compatible_artifact_effect"));
+      !hasExplicitNewCycleFormalizationSignal(analysis);

     if (
-      eligibleForGenericPrepareRouting &&
-      (Boolean(activeIdForPrepare) || projectContextAdmission) &&
-      actionableForGenericPrepare
+      prepareAdmission.allowGenericPrepareRouting &&
+      (Boolean(activeIdForPrepare) || projectContextAdmission)
     ) {
     const activeId: string | null = activeIdForPrepare;
     const cycleLoad = activeId
@@ -2107,7 +2194,7 @@ export async function orchestrateAssistantSend(input: {
       const contextKept = activeId
         ? "Le cycle actif est conservé."
         : "Contexte projet conservé — aucun cycle artificiel créé.";
-      const prepareGo = prepareGoPreview;
+      const prepareGo = prepareAdmission.prepareGo;
       const mayPrepare =
         prepareGo.kind === "prepare" ||
         prepareGo.kind === "explicit_lexical_prepare";

```

## 11. Validations exécutées

| Commande | Résultat |
|---|---|
| `vitest` arch + der16 + F01 + framing frontDoor + gD4 + toolFirst R1R2 + toolFirst CAS | **76 passed** |
| `npm run typecheck` | **PASS** |
| `npm run lint` | **PASS** (0 warnings) |
| `npm run build` | **PASS** |

Suites non exécutées dans ce Delivery : e2e Playwright navigateur, suite vitest complète hors périmètre oracle, Human QA REAL.

## 12. Matrice oracles

| Oracle | Couverture |
|---|---|
| 01 Rec→traj→HD→prepare→START | COVERED framing frontDoor (existant) |
| 02 START ≠ détournement PREPARE | COVERED p6.arch AtelierNova-like |
| 03 START sans EC | COVERED (0 EC assert) |
| 04 START préconditions manquantes | COVERED framing orient + F01 |
| 05 PREPARE sans cycle | COVERED der16 E10 + discrimination unit |
| 06 PREPARE cycle actif | COVERED der16 |
| 07 non-structural sans HD systématique | COVERED gD4 / toolFirst |
| 08 structural + HD | COVERED mHd/der16 (réutilisés) |
| 09 refus/report/ambigu | COVERED F01 routing |
| 10 ok go sujet | COVERED p6.arch |
| 11 reload | PARTIAL (non rejoué ici) — réserve |
| 12 R2 REAL pathless | COVERED toolFirst R1R2 |
| 13 legacy admissions | COVERED F01 / der16 NEW_CYCLE |
| 14 rec insuffisante | PARTIAL framing |
| 15 mixed | COVERED p6.arch |

## 13. Fake / Real Qualification

| Item | Valeur |
|---|---|
| Mode | DETERMINISTIC PRODUCT INTEGRATION |
| Nora LIVE | non appelé |
| Cursor REAL Attempt métier | non lancé |
| Parité | mêmes chemins Product `orchestrateAssistantSend` |
| Gaps | raisonnement LIVE ; HQA navigateur ; AtelierNova REAL replay |
| Claims interdits | non émis |

## 14. Dettes / exit

| Dette | Owner | Exit |
|---|---|---|
| D-ER-19 legacy admissions | P6 convergence | E11 nominal sans taxonomie |
| Offers PREPARE session-local | W2 | durabilité ou acceptation documentée |
| TOOL-FIRST-REAL-NOWRITE-ENFORCEMENT | Tool-First | hors scope |
| Docs PRR/D-ER stale PENDING flags | Docs | D-ARCH-REC-04 ultérieur |
| ORACLE 11 reload non rejoué | Delivery follow-up HQA | replay Morris |

## 15. Candidat local pour Morris Human QA

| Item | Valeur |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-workspace-p6-arch-recovery-delivery-304e30e8` |
| Branche | `delivery/sfia-studio-p6-integrated-architecture-recovery` |
| Base | `304e30e8` + changes locaux non poussés |
| QA historique AtelierNova | **ne pas écraser** — rejouer sur **nouveau** Project ou env QA dédié après intégration |
| Runtime Delivery | non démarré sur :3020 (port réservé QA historique) |

### Replay Human QA suggéré
1. Intégrer/committer le candidat (GO distinct) ou `npm run build &&` start sur **autre port** depuis ce worktree.
2. Créer Project neuf (pas AtelierNova historique).
3. Demander démarrage cycle Cadrage (texte type AtelierNova User2).
4. Vérifier : **pas** de « Contexte projet conservé — … contrat d'exécution » ; orientation trajectoire/START.
5. Parcourir Rec→traj→HD→prepare→START→LPS active.
6. Ensuite mission execution → Generic PREPARE (avec ou sans cycle selon D-ER-17).

## 16. Gates encore nécessaires

1. Morris Review de ce Delivery (ChatGPT + Morris).
2. GO commit/push/PR Product (distinct).
3. Human QA Morris sur candidat.
4. D-ARCH-REC-04 si sync documentaire souhaitée.
5. Pas de P6 GLOBAL PASS automatique.

## 17. Réserves

- Candidat **local non poussé**.
- Reload/restart oracle 11 non rejoué.
- Discrimination basée sur regex/stance — cas limites linguistiques possibles (UNKNOWN jusqu'à HQA LIVE).
- Worktree Delivery avait été brièvement basculé par erreur de branche puis **restauré** sur `304e30e8` avant edits Product.

## 18. Verdict

**INTEGRATED DELIVERY CANDIDATE — READY FOR MORRIS HUMAN QA.**

**Statut :** **READY FOR REVIEW** (avec réserves §17 — **READY WITH RESERVES** sur reload HQA / LIVE linguistic edge).

≠ P6 GLOBAL PASS · ≠ runtime v3 ADOPTED · ≠ REAL E2E PASS.

### Instruction ChatGPT
Lire handoff distant. Vérifier fichiers créés/modifiés, preuves découplage, tests croisés, réserves. Préparer replay Human QA Morris sur candidat isolé — ne pas conclure READY sans relecture.
