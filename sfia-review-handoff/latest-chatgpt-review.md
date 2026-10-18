# SFIA STUDIO — P6 INTEGRATED PRODUCT ARCHITECTURE RECOVERY
# DELIVERY OPTION B CONTINUATION — Critical Review Pack (FULL)

## 0. Horodatage / qualification

| Champ | Valeur |
|---|---|
| Horodatage ISO | 2026-10-18T17:21:35+0200 |
| Local | 2026-10-18 17:21 CEST |
| Chantier | P6-INTEGRATED-PRODUCT-ARCHITECTURE-RECOVERY |
| Cycle | 8 — Delivery / implémentation (CONTINUATION) |
| Profil | CRITICAL |
| Typologie | INC / EVOL — CONTINUATION |
| Capacité | V3-F05 (+ F06/F07/F11/F12/F14) |
| Milestone | P6 |
| Mode preuve | DETERMINISTIC FULL FIRST-CYCLE JOURNEY |
| Previous Delivery handoff | `679c2a2f` / blob `f88788fa` |
| Architecture Review entrée | `9149179b` / blob `d9784d2e` |

## 1. GO Morris consommés

| Décision | Statut |
|---|---|
| D-ARCH-REC-01 Option B | **CONSUMED** (ADOPTED) |
| D-ARCH-REC-02 Cycle Lifecycle ≠ détournement Generic PREPARE | **CONSUMED** |
| D-ARCH-REC-03 GO Delivery intégré | **CONSUMED** (continuation — aucun nouveau GO) |
| D-ARCH-REC-04 Documentary sync | **NOT AUTHORIZED** — non exécuté |

## 2. Git Truth

| Item | Valeur |
|---|---|
| Remote | `https://github.com/mcleland147/sfia-workspace.git` |
| origin/main base | `304e30e8f9d19fad753a76c7a7b89b5b7e34c3f8` |
| Delivery worktree | `/Users/morris/Projects/sfia-workspace-p6-arch-recovery-delivery-304e30e8` |
| Branche Delivery | `delivery/sfia-studio-p6-integrated-architecture-recovery` |
| HEAD | `304e30e8f9d19fad753a76c7a7b89b5b7e34c3f8` + local Option B (uncommitted) |
| Product push/PR | **NONE** |
| Working tree | Intentionally dirty — Option B candidate |
| Runtime `:3020` | préservé (PID 53076 écoute) — non stoppé |
| DB / AtelierNova historiques | non mutés |
| Worktrees tiers | préservés |

### git status --short (Delivery WT)

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.arch.cycleLifecycleVsGenericPrepare.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.arch.virginFirstCycleJourney.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/f2/conversationWorkflowDiscrimination.ts
?? projects/sfia-studio/app/features/project-assistant/f2/cycleLifecycleConversationCoordinator.ts
?? projects/sfia-studio/app/features/project-assistant/f2/genericExecutionConversationCoordinator.ts
```

## 3. Sources

Processus v2.6 ; Convergence Build Doctrine/Roadmap (lecture) ; C1/P6 (lecture) ;
PRR 02–09 ; doctrine v3 30/34/35/37 ; Review Handoff Delivery précédent `679c2a2f` ;
tests der16 / F01 / framing / toolFirst / productCycleE2e.

D-ARCH-REC-* : décisions conversationnelles Morris — **non** baseline Git doctrine.

## 4. Convergence Pre-check

| Item | État |
|---|---|
| Option B candidat local | Préservé + complété |
| Tests Delivery précédent | 76 PASS annoncés |
| Gap ChatGPT | ORACLE 02 ne prouvait pas START réel ; seed traj ≠ Project vierge |
| Inventory catch→0 | **CORRIGÉ** fail-closed |
| Exit proof virgin → ACTIVE | **PROUVÉ** (déterministe) |
| P6 GLOBAL PASS | **NON ACQUIS** |
| runtime v3 | **NON ADOPTED** |
| Human QA navigateur | **HORS SCOPE** — prochain gate Morris |

KEEP : OA, LPS, ProjectTrajectory, Cycle Lifecycle, HumanDecision, EC, Gateway, Evidence, Reconciler.
ADAPT : discrimination + coordinators Option B ; framing/START ; inventaire fail-closed.
COMPLETE : oracle Project vierge → ACTIVE ; inventaire indisponible ; reload service remount.
TRANSITIONAL : D-ER-19 admissions legacy ; offers Generic PREPARE session-local.

## 5. Cause / insuffisances de preuve (revue ChatGPT)

1. ORACLE 02 AtelierNova-like vérifiait l'absence de narrative Generic PREPARE et l'absence de CycleInstance — **pas** le START effectif.
2. `seedProject()` créait une trajectoire initiale — ≠ état AtelierNova réel (0 traj).
3. `catch { cycleInventoryCount = 0 }` assimilait inventaire indisponible à inventaire vide.

## 6. Corrections supplémentaires (continuation)

| Correction | Fichier | Effet |
|---|---|---|
| Inventory fail-closed (kind available/unavailable) | `cycleLifecycleConversationCoordinator.ts` + `orchestrateF2.ts` | Erreur listByProject ≠ count 0 |
| Fail-closed lorsque snap continuity échoue (`TRJ_BRIDGE_CYCLES_UNAVAILABLE`) + attempt_start | `orchestrateF2.ts` | Empêche fall-through Nora/PREPARE si inventory down avant phase branch |
| Oracle virgin first-cycle journey | `p6.arch.virginFirstCycleJourney.d0.test.ts` | Rec→traj→HD→prepare→START→LPS ACTIVE→reload |
| ORACLE J inventaire | même fichier | spy listByProject reject → f2_blocked |

## 7. Architecture finale Option B

1. `conversationWorkflowDiscrimination` — cycle_lifecycle / execution_mission / ambiguous_mixed
2. `cycleLifecycleConversationCoordinator` — orientation Cycle + inventory unavailable messaging
3. `genericExecutionConversationCoordinator` — admission PREPARE sans second moteur
4. `orchestrateF2` — délègue ; conserve un seul backend PREPARE ; framing early START ; inventaire fail-closed

Invariant : Cycle Lifecycle **preempts** project-context Generic PREPARE ; D-ER-17 missions sans cycle **conservées** ; PREPARE≠AUTHORIZE≠EXECUTE ; START gate inchangé ; pas de second SoT ; HD non inventée par « ok go ».

## 8. Fichiers créés / modifiés

### Créés
- `projects/sfia-studio/app/features/project-assistant/f2/conversationWorkflowDiscrimination.ts`
- `projects/sfia-studio/app/features/project-assistant/f2/cycleLifecycleConversationCoordinator.ts`
- `projects/sfia-studio/app/features/project-assistant/f2/genericExecutionConversationCoordinator.ts`
- `projects/sfia-studio/app/__tests__/project-assistant/p6.arch.cycleLifecycleVsGenericPrepare.d0.test.ts`
- `projects/sfia-studio/app/__tests__/project-assistant/p6.arch.virginFirstCycleJourney.d0.test.ts`

### Modifiés
- `projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts`

### Interdits / non touchés
Build Doctrine, Roadmap, C1, D-ER protégée, doctrine v3, secrets, DB historiques — **OK**.

## 9. Matrice d'oracles

| Oracle | Preuve | Test / observation | Verdict |
|---|---|---|---|
| A Virgin → Rec CURRENT | createProject + materializeLifecycleRecommendation ; 0 cycle/traj CURRENT/HD/EC | virginFirstCycleJourney A–F | **PASS** |
| B Framing → candidate traj | send « poursuivons » → phase awaiting ; trajId Product ; hasAny ; CURRENT null jusqu'à HD | idem | **PASS** |
| C HD applicable | advance approve_candidate + digest serveur ; HD ≥1 ; CURRENT après HD | idem | **PASS** |
| D Cycle prepared lié | phase ready_to_start ; COMPLETE_TRAJECTORY_BOUND ; 0 EC | idem | **PASS** |
| E START ACTIVE | send « Je souhaite démarrer » → « est maintenant actif » ; status active | idem | **PASS** |
| F START sans EC | contracts.listByProject length 0 avant/après START | idem | **PASS** |
| G Generic PREPARE sans cycle | discrimination + der16 E10 | arch + der16 | **PASS** |
| H PREPARE avec cycle actif | non-régression toolFirst / der16 | suites | **PASS** (régression) |
| I ok go | pas d'EC inventé | virgin ORACLE I + arch ORACLE 10 | **PASS** |
| J Inventaire indisponible | spy reject → message inventaire + f2_blocked ; pas faux « 0 cycle » | virgin ORACLE J | **PASS** |
| K Reload | resetRuntime + getRuntime même productDbPath ; LPS ACTIVE + phase active | virgin A–F+K | **PASS** (service remount — pas restart OS) |
| L Tool-First R2 | safetyClosureR1R2 | suite | **PASS** |
| M Régression | framing / F01 / der16 / gD4 / toolFirst / productCycleE2e | 84 tests ciblés | **PASS** |

**Qualifié K :** re-instanciation service Product sur même SQLite. **Non prouvé :** restart processus Node / serveur HTTP réel.

## 10. États Product (scénario virgin)

| Étape | Avant | Action | Après |
|---|---|---|---|
| Boot | — | createProject | 0 cycle, 0 traj, 0 HD, 0 EC, LPS sans active |
| Rec | virgin | materializeLifecycleRecommendationFromStructuredOutput | Rec CURRENT ; toujours 0 traj/cycle/HD/EC |
| Prepare candidate | Rec ready | projectAssistantSendAction progress | candidate traj (hasAny) ; CURRENT null ; phase awaiting |
| HD | awaiting | advanceFramingContinuity approve_candidate | HD≥1 ; CURRENT traj |
| Prepare cycle | decided | prepare_cycle si besoin | Cycle proposed/ack ; COMPLETE bound ; 0 EC |
| START | ready_to_start | send START explicite | Cycle ACTIVE ; LPS activeCycleInstanceId ; 0 EC |
| Reload | ACTIVE | new RuntimeApplicationService same DB | LPS + cycle ACTIVE cohérents |

## 11. Validations exécutées

| Check | Résultat |
|---|---|
| virginFirstCycleJourney (4) | PASS |
| Suites ciblées (9 files) | **84 PASS** |
| typecheck | PASS |
| lint | PASS |
| build | PASS |
| Cursor REAL Execute | **NON** (interdit) |
| Nora OpenAI LIVE | **NON** |
| Human QA navigateur Morris | **NON** — prochain gate |

## 12. Fake / Real

| Frontière | Mode |
|---|---|
| Nora | Fake provider (`OPS1_CONVERSATION_PROVIDER=fake`) |
| Product OA / LPS / traj / HD / cycle / START | **REAL Product paths** |
| Cursor REAL | OFF |
| Auth / Git / UI navigateur | HORS SCOPE |

Claims autorisés : DETERMINISTIC FULL FIRST-CYCLE JOURNEY PROVEN au périmètre traversé.
Claims interdits : P6 GLOBAL PASS ; runtime v3 ADOPTED ; END-TO-END REAL PROVEN ; READY FOR REAL automatique.

## 13. Dettes / réserves

| Dette | Owner | Exit |
|---|---|---|
| Human QA Morris navigateur sur candidat isolé | Morris | Session HQA après acceptation |
| Discrimination regex/stance bornée | Product | Ne pas multiplier heuristics sans preuve |
| Reload = service remount ≠ process restart | Delivery | Documenté ; pas d'archi persistence nouvelle |
| D-ER-19 / offers session-local | Existants | Exits déjà documentés ailleurs |
| D-ARCH-REC-04 docs sync | Morris | GO séparé si besoin |

## 14. Verdict

**INTEGRATED DELIVERY OPTION B — DETERMINISTIC FIRST-CYCLE JOURNEY PROVEN — READY FOR MORRIS HUMAN QA.**

Statut : **READY WITH RESERVES** (HQA navigateur + P6 GLOBAL non acquis).

## 15. Instructions Human QA Morris

1. Isoler un Project **vraiment** vierge (ne pas réutiliser AtelierNova historique si état pollué).
2. Parcourir Rec → examen trajectoire → validation carte HD → prepare → START explicite.
3. Vérifier LPS activeCycleInstanceId + absence EC au START.
4. Tester « ok go » ambigu et demande mixte START+PREPARE.
5. Ne pas lancer Cursor REAL Product Execute sans gate dédié.

## 16. Gates restants

- Human QA Morris (bounded REAL navigateur)
- Aucun Product push/PR/merge autorisé ici
- P6 GLOBAL PASS non déclaré

---

# ANNEXE A — Contenu exploitable des modules créés


## A.conversationWorkflowDiscrimination.ts

Path: `projects/sfia-studio/app/features/project-assistant/f2/conversationWorkflowDiscrimination.ts`

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

## A.cycleLifecycleConversationCoordinator.ts

Path: `projects/sfia-studio/app/features/project-assistant/f2/cycleLifecycleConversationCoordinator.ts`

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

/** Result of reading CycleInstance inventory for Cycle Lifecycle early orientation. */
export type CycleInventoryReadResult =
  | { readonly kind: "available"; readonly count: number }
  | { readonly kind: "unavailable"; readonly reason: string };

/**
 * Fail-closed messaging when CycleInstance inventory cannot be proven empty.
 * Must not claim "0 cycle" or progress as if inventory were empty.
 */
export function cycleInventoryUnavailableMessage(input: {
  readonly presentation: "test_provider" | "openai_live";
  readonly cycleLabel?: string | null;
}): string {
  const head =
    input.presentation === "test_provider" ? "[Mode test]" : "[Mode réel]";
  const cycle = (input.cycleLabel ?? "").trim()
    ? `« ${(input.cycleLabel ?? "").trim()} »`
    : "ce cycle";
  return [
    head,
    `L'inventaire des cycles du projet est temporairement indisponible — Studio ne peut pas traiter le démarrage de ${cycle} sur une absence non prouvée.`,
    "Aucun cycle n'a été créé, démarré ni préparé. Aucun contrat d'exécution n'a été préparé. Réessayez lorsque l'état Product est de nouveau lisible.",
  ].join(" ");
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

## A.genericExecutionConversationCoordinator.ts

Path: `projects/sfia-studio/app/features/project-assistant/f2/genericExecutionConversationCoordinator.ts`

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

## A.p6.arch.cycleLifecycleVsGenericPrepare.d0.test.ts

Path: `projects/sfia-studio/app/__tests__/project-assistant/p6.arch.cycleLifecycleVsGenericPrepare.d0.test.ts`

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

## A.p6.arch.virginFirstCycleJourney.d0.test.ts

Path: `projects/sfia-studio/app/__tests__/project-assistant/p6.arch.virginFirstCycleJourney.d0.test.ts`

```typescript
/** @vitest-environment node */
/**
 * P6 Architecture Recovery continuation — DETERMINISTIC FULL FIRST-CYCLE JOURNEY
 * from a truly virgin Product Project (0 cycle / 0 traj / 0 HD / 0 EC).
 *
 * Recommendation is materialized via Product lifecycleRecommendation path
 * (Nora structured-output seam) — NOT by seeding Trajectory/Cycle/HD/EC.
 * Decision + prepare + START use Product front-doors.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  setConversationProviderForTests,
  type ConversationProvider,
  type ProviderChatMessage,
  type ProviderCompletionResult,
  type ProviderInputItem,
  type ProviderRoundResult,
} from "@/lib/platform/ai";
import { projectAssistantSendAction } from "@/features/project-assistant/actions";
import {
  projectAssistantAdvanceFramingContinuityAction,
  projectAssistantReadFramingContinuityAction,
} from "@/features/project-assistant/preCycleCandidateTrajectoryActions";
import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
import { resetMw5ChallengeStoreForTests } from "@/features/project-assistant/f2/mw5ChallengeSessionStore";
import { resetPendingGenericPrepareOfferStoreForTests } from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
import {
  materializeLifecycleRecommendationFromStructuredOutput,
  NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  resolveTrajectoryBootstrapPresence,
  classifyTrajectoryBinding,
} from "@/lib/oa/cycle";
import { PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import type { Digest, DoctrinePackagePin } from "@/lib/oa/doctrine";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import { W2_REGISTRY_ROOT, W2_SCHEMAS_ROOT } from "./w2Harness";

const VALID_DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;
const VALID_PIN: DoctrinePackagePin = {
  doctrinePackageId: "pkg:studio-v3-oa",
  version: "1.0.0",
  digest: VALID_DIGEST,
};

const tempDirs: string[] = [];
let previousPilot: string | undefined;
let previousMorris: string | undefined;
let previousCursorReal: string | undefined;
let previousAllowReset: string | undefined;
let previousProvider: string | undefined;

function restoreEnv(name: string, previous: string | undefined): void {
  if (previous === undefined) delete process.env[name];
  else process.env[name] = previous;
}

class FixedIdSource implements LocalProjectIdSource {
  private n = 0;
  constructor(private readonly prefix: string) {}
  nextProjectId(): string {
    this.n += 1;
    return `prj:${this.prefix}-${this.n}`;
  }
  nextLpsVersionId(): string {
    return `lps:${this.prefix}-${this.n}`;
  }
  nextCorrelationId(): string {
    return `cor:${this.prefix}-${this.n}`;
  }
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

class VirginJourneyFakeProvider implements ConversationProvider {
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
      providerResponseId: `virgin-${this.n}`,
    };
    const isStart =
      /\b(je\s+(veux|souhaite)\s+(d[eé]marrer|lancer)|d[eé]marrage\s+effectif|d[eé]marre[- ]?le)\b/i.test(
        current,
      );
    if (isStart) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "actionable",
          candidateCycleTypeId: null,
          signals: null,
          cognitiveWorkload: null,
          contradictionCandidate: null,
          challengeResponseAssessment: null,
          objective: null,
          scope: null,
          rephrasedRequest: current.slice(0, 160),
          outOfScope: [],
          risks: [],
          reservations: [],
          stopConditions: [],
          activatedBlocks: [],
          expectedOutcome: null,
          criticalJustification: null,
          requestedOperation: null,
          executionIntent: null,
          continuationKind: null,
          artifactMaterializationOperation: null,
          pilotDecisionCandidate: null,
        })}`,
        usage,
      };
    }
    return {
      text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
        intentClass: "actionable",
        candidateCycleTypeId: "cyc:framing",
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
        objective: "Qualifier le premier cycle Cadrage",
        scope: "Sans exécution Cursor",
        rephrasedRequest: current.slice(0, 160),
        outOfScope: ["Cursor execute"],
        risks: [],
        reservations: [],
        stopConditions: ["AUCUNE EXÉCUTION"],
        activatedBlocks: ["qualification"],
        expectedOutcome: "Cycle Cadrage actif",
        criticalJustification: null,
        requestedOperation: null,
        executionIntent: null,
        continuationKind: null,
        artifactMaterializationOperation: null,
        pilotDecisionCandidate: {
          disposition: "accept",
          targetKind: "current_recommendation",
          rationale: "ok",
        },
      })}`,
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
      text: "[TEST/FAKE · NON LIVE] virgin-journey",
      usage: {
        inputTokens: 1,
        outputTokens: 1,
        totalTokens: 2,
        model: "fake-test-model",
        providerResponseId: "virgin-round",
      },
    };
  }
}

async function assertVirginProduct(
  oa: NonNullable<ReturnType<typeof getRuntimeApplicationService>["oa"]>,
  projectId: string,
) {
  const cycles = await oa.cycleServices.cycles.listByProject(projectId);
  expect(cycles).toHaveLength(0);
  expect(
    await oa.cycleServices.trajectories.hasAnyByProjectId(projectId),
  ).toBe(false);
  const traj = await oa.cycleServices.trajectories.findCurrentByProjectId(
    projectId,
  );
  expect(traj).toBeNull();
  const decisions = await oa.decisionServices.decisions.listByProject(projectId);
  expect(decisions).toHaveLength(0);
  const contracts =
    await oa.executionContractServices.contracts.listByProject(projectId);
  expect(contracts).toHaveLength(0);
  const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
    projectId,
  });
  expect(lps.ok).toBe(true);
  if (lps.ok) {
    expect(lps.livingProjectState.activeCycleInstanceId ?? null).toBeNull();
  }
}

async function bootVirginProject(suffix: string) {
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
  process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = "1";
  resetRuntimeApplicationServiceForTests();
  resetF2ProposalStoreForTests();
  resetMw5ChallengeStoreForTests();
  resetPendingGenericPrepareOfferStoreForTests();
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "virgin-fc-"));
  tempDirs.push(dir);
  const productDbPath = path.join(dir, `${suffix}.sqlite`);
  const runtime = getRuntimeApplicationService({
    registryRoot: W2_REGISTRY_ROOT,
    schemasRoot: W2_SCHEMAS_ROOT,
    nowIso: "2026-09-09T20:00:00.000Z",
    idSource: new FixedIdSource(`vg-${suffix}`),
    auditMode: "noop",
    productDbPath,
  });
  if (!runtime.oa) throw new Error("oa missing");
  const created = await runtime.createProject({
    name: `Virgin FC ${suffix}`,
    objective: "Premier cycle Cadrage depuis Project vierge",
    context: "AtelierNova-like greenfield",
    criticality: "STANDARD",
    constraints: [],
    shortReference: `VG${suffix}`,
    idempotencyKey: `idem:vg-${suffix}`,
  });
  if (!created.ok) throw new Error("create failed");
  const projectId = created.projectId;
  await assertVirginProduct(runtime.oa, projectId);
  return {
    runtime,
    projectId,
    productDbPath,
    sessionDbPath: path.join(dir, `${suffix}-session.sqlite`),
  };
}

async function materializeCurrentFramingRecommendation(
  projectId: string,
): Promise<void> {
  const oa = getRuntimeApplicationService().oa!;
  const cycles = await oa.cycleServices.cycles.listByProject(projectId);
  const decisions = await oa.decisionServices.decisions.listByProject(projectId);
  const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
    projectId,
  });
  if (!lps.ok) throw new Error("lps");
  const presence = await resolveTrajectoryBootstrapPresence(
    oa.cycleServices.trajectories,
    projectId,
  );
  const project = await oa.projectServices.getProject.execute({ projectId });
  const doctrine =
    (project.ok ? project.project.doctrinePackageRef : null) ?? VALID_PIN;
  const mat = await materializeLifecycleRecommendationFromStructuredOutput({
    projectId,
    structuredOutput: {
      narrative: "Recommandation Cadrage — premier cycle.",
      preCycleRoutingAssessment: {
        ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
      },
      lifecycleRecommendation: {
        intent: "NEXT_CYCLE" as const,
        statement: "Envisager un Cadrage pour qualifier la mission.",
        subjectCycleInstanceId: null,
        targetCycleInstanceId: null,
        targetCycleTypeId: "cyc:framing",
        rationale: "Premier travail gouverné supportable.",
        authority: "none" as const,
        isHumanDecision: false as const,
        qualificationSignals: {
          structuralChange: false,
          securityImpact: false,
          architectureImpact: false,
          dataImpact: false,
          irreversible: false,
          lowRiskBounded: true,
        },
      },
    },
    updateEpistemicState: oa.cycleServices.updateEpistemicState,
    facts: {
      cycles,
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      lpsVersion: lps.livingProjectState.version,
      doctrinePackageId: doctrine.doctrinePackageId,
      doctrinePackageVersion: doctrine.version,
      doctrinePackageDigest: doctrine.digest,
      trajectory: null,
      trajectoryBootstrapPresence: presence,
      decisions,
      evidence: [],
      epistemicItems: await oa.cycleServices.epistemic.listByProject(projectId),
    },
    producedAt: "2026-09-09T20:01:00.000Z",
    createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  });
  expect(mat.materialization?.ok).toBe(true);
}

describe("P6 arch recovery — virgin Project first-cycle journey", () => {
  const provider = new VirginJourneyFakeProvider();

  beforeEach(() => {
    previousPilot = process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
    previousMorris = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    previousCursorReal = process.env.SFIA_STUDIO_CURSOR_REAL;
    previousAllowReset = process.env.SFIA_V2_RUNTIME_ALLOW_RESET;
    previousProvider = process.env.OPS1_CONVERSATION_PROVIDER;
    process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = "1";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    process.env.SFIA_STUDIO_CURSOR_REAL = "0";
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    setConversationProviderForTests(provider);
  });

  afterEach(() => {
    setConversationProviderForTests(null);
    resetRuntimeApplicationServiceForTests();
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetPendingGenericPrepareOfferStoreForTests();
    vi.restoreAllMocks();
    while (tempDirs.length) {
      const d = tempDirs.pop();
      if (d) fs.rmSync(d, { recursive: true, force: true });
    }
    restoreEnv("SFIA_STUDIO_LOCAL_PILOT_AUTHORITY", previousPilot);
    restoreEnv("SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY", previousMorris);
    restoreEnv("SFIA_STUDIO_CURSOR_REAL", previousCursorReal);
    restoreEnv("SFIA_V2_RUNTIME_ALLOW_RESET", previousAllowReset);
    restoreEnv("OPS1_CONVERSATION_PROVIDER", previousProvider);
  });

  it("ORACLE A–F + K — virgin Project → Rec → traj → HD → prepare → START ACTIVE → reload; START sans EC", async () => {
    const { runtime, projectId, productDbPath, sessionDbPath } =
      await bootVirginProject("e2e");
    const oa = runtime.oa!;

    // ORACLE A — still virgin before recommendation
    await assertVirginProduct(oa, projectId);

    // ORACLE A — Recommendation CURRENT via Product materialization seam (not DB seed)
    await materializeCurrentFramingRecommendation(projectId);
    // Rec must not invent trajectory / cycle / HD / EC
    expect(
      (await oa.cycleServices.trajectories.findCurrentByProjectId(projectId)) ??
        null,
    ).toBeNull();
    expect((await oa.cycleServices.cycles.listByProject(projectId)).length).toBe(
      0,
    );
    expect(
      (await oa.decisionServices.decisions.listByProject(projectId)).length,
    ).toBe(0);
    expect(
      (await oa.executionContractServices.contracts.listByProject(projectId))
        .length,
    ).toBe(0);

    const before = await projectAssistantReadFramingContinuityAction({
      projectId,
    });
    expect(before.continuity?.phase).toBe("recommendation_ready");
    expect(before.continuity?.hasCurrentNextCycleRecommendation).toBe(true);

    // ORACLE B — framing prepare candidate (Product conversation progress, not START)
    const progress = await projectAssistantSendAction({
      projectId,
      content:
        "OK, poursuivons la recommandation de Cadrage. Une mission Cursor pourra venir ensuite — pas maintenant.",
      sessionDbPath,
      provider,
    });
    expect(progress.ok).toBe(true);
    if (!progress.ok) throw new Error(progress.message ?? "progress");
    expect(progress.text).not.toMatch(
      /décision Pilote explicite reste nécessaire avant de préparer un contrat d'exécution/i,
    );
    expect(progress.text).not.toMatch(
      /Contexte projet conservé — aucun cycle artificiel créé/,
    );

    const afterPrep = await projectAssistantReadFramingContinuityAction({
      projectId,
    });
    expect(afterPrep.continuity?.phase).toBe("awaiting_trajectory_decision");
    expect(afterPrep.continuity?.presentationDigest).toBeTruthy();
    // Candidate trajectories are Product-real but not effective CURRENT until HD.
    expect(afterPrep.continuity?.trajectoryId).toBeTruthy();
    expect(
      await oa.cycleServices.trajectories.hasAnyByProjectId(projectId),
    ).toBe(true);
    expect(
      (await oa.cycleServices.trajectories.findCurrentByProjectId(projectId)) ??
        null,
    ).toBeNull();

    // ORACLE C — HumanDecision via Product card seam (digest server-side)
    const approved = await projectAssistantAdvanceFramingContinuityAction({
      projectId,
      step: "approve_candidate",
      presentationDigest: afterPrep.continuity!.presentationDigest!,
    });
    expect(approved.ok).toBe(true);
    expect(
      (await oa.decisionServices.decisions.listByProject(projectId)).length,
    ).toBeGreaterThanOrEqual(1);
    // After HD, trajectory becomes Product CURRENT.
    expect(
      await oa.cycleServices.trajectories.findCurrentByProjectId(projectId),
    ).toBeTruthy();
    // Conversation "ok" alone must not invent another HD path here — HD is Product action.
    if (
      approved.continuity?.phase === "trajectory_decided_prepare_cycle"
    ) {
      const prep = await projectAssistantAdvanceFramingContinuityAction({
        projectId,
        step: "prepare_cycle",
      });
      expect(prep.ok).toBe(true);
    }

    // ORACLE D — Cycle prepared, linked, not yet ACTIVE
    const ready = await projectAssistantReadFramingContinuityAction({
      projectId,
    });
    expect(ready.continuity?.phase).toBe("ready_to_start");
    expect(ready.continuity?.preparedCycleInstanceId).toBeTruthy();
    const preparedCycles = await oa.cycleServices.cycles.listByProject(projectId);
    expect(preparedCycles.length).toBe(1);
    expect(["proposed", "acknowledged"]).toContain(preparedCycles[0]!.status);
    expect(classifyTrajectoryBinding(preparedCycles[0]!)).toBe(
      "COMPLETE_TRAJECTORY_BOUND",
    );
    expect(
      (await oa.executionContractServices.contracts.listByProject(projectId))
        .length,
    ).toBe(0);

    // ORACLE E + F — explicit START, LPS ACTIVE, no EC required
    const start = await projectAssistantSendAction({
      projectId,
      content: "Je souhaite démarrer le Cadrage.",
      sessionDbPath,
      provider,
    });
    expect(start.ok).toBe(true);
    if (!start.ok) throw new Error(start.message ?? "start");
    expect(start.text).toMatch(/est maintenant actif/i);
    expect(start.project.activeCycleInstanceId).toBeTruthy();

    const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) throw new Error("lps");
    expect(lps.livingProjectState.activeCycleInstanceId).toBe(
      start.project.activeCycleInstanceId,
    );
    const activeCycles = await oa.cycleServices.cycles.listByProject(projectId);
    expect(activeCycles).toHaveLength(1);
    expect(activeCycles[0]!.status).toBe("active");
    expect(
      (await oa.executionContractServices.contracts.listByProject(projectId))
        .length,
    ).toBe(0);

    // ORACLE K — re-instantiate Product runtime on same SQLite (service remount)
    const activeId = lps.livingProjectState.activeCycleInstanceId!;
    resetRuntimeApplicationServiceForTests();
    const runtime2 = getRuntimeApplicationService({
      registryRoot: W2_REGISTRY_ROOT,
      schemasRoot: W2_SCHEMAS_ROOT,
      nowIso: "2026-09-09T21:00:00.000Z",
      idSource: new FixedIdSource(`vg-reload`),
      auditMode: "noop",
      productDbPath,
    });
    expect(runtime2.oa).toBeTruthy();
    const oa2 = runtime2.oa!;
    const lps2 = await oa2.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps2.ok).toBe(true);
    if (!lps2.ok) throw new Error("lps2");
    expect(lps2.livingProjectState.activeCycleInstanceId).toBe(activeId);
    const cycles2 = await oa2.cycleServices.cycles.listByProject(projectId);
    expect(cycles2).toHaveLength(1);
    expect(cycles2[0]!.status).toBe("active");
    const continuity2 = await projectAssistantReadFramingContinuityAction({
      projectId,
    });
    expect(continuity2.ok).toBe(true);
    expect(continuity2.continuity?.phase).toBe("active");
    expect(
      (await oa2.executionContractServices.contracts.listByProject(projectId))
        .length,
    ).toBe(0);
  });

  it("ORACLE J — cycle inventory unavailable is fail-closed (not treated as empty)", async () => {
    // Virgin + no recommendation → phase blocked_no_recommendation → early START
    // inventory read. Service error must NOT be assimilated to count===0.
    const { projectId, sessionDbPath } = await bootVirginProject("inv");
    const oa = getRuntimeApplicationService().oa!;
    const before = await projectAssistantReadFramingContinuityAction({
      projectId,
    });
    expect(before.continuity?.phase).toBe("blocked_no_recommendation");

    const spy = vi
      .spyOn(oa.cycleServices.cycles, "listByProject")
      .mockRejectedValueOnce(new Error("simulated_inventory_unavailable"));

    const turn = await orchestrateAssistantSend({
      projectId,
      content: "Je souhaite démarrer le Cadrage.",
      sessionDbPath,
    });
    expect(spy).toHaveBeenCalled();
    expect(turn.ok).toBe(true);
    if (!turn.ok) throw new Error(turn.message ?? "turn");
    expect(turn.text).toMatch(/inventaire des cycles.*indisponible/i);
    expect(turn.text).not.toMatch(
      /besoin d'une recommandation de cycle puis d'une trajectoire/i,
    );
    expect(turn.f2?.turnKind).toBe("f2_blocked");
    spy.mockRestore();
    expect((await oa.cycleServices.cycles.listByProject(projectId)).length).toBe(
      0,
    );
    expect(
      (await oa.executionContractServices.contracts.listByProject(projectId))
        .length,
    ).toBe(0);
  });

  it("ORACLE I — ok go without CURRENT prepare offer does not invent EC after cycle START wording", async () => {
    const { projectId, sessionDbPath } = await bootVirginProject("okgo");
    await materializeCurrentFramingRecommendation(projectId);
    await projectAssistantSendAction({
      projectId,
      content: "OK pour le Cadrage.",
      sessionDbPath,
      provider,
    });
    const turn = await projectAssistantSendAction({
      projectId,
      content: "ok go",
      sessionDbPath,
      provider,
    });
    expect(turn.ok).toBe(true);
    if (!turn.ok) throw new Error(turn.message ?? "okgo");
    expect(turn.text).not.toMatch(/xct:gen-prep:/);
    expect(turn.text).not.toMatch(
      /décision Pilote explicite reste nécessaire avant de préparer un contrat d'exécution/i,
    );
  });

  it("ORACLE F/H intent — mixed START+PREPARE does not invent EC; cycle path remains distinct", async () => {
    const { projectId, sessionDbPath } = await bootVirginProject("mixed");
    await materializeCurrentFramingRecommendation(projectId);
    const turn = await projectAssistantSendAction({
      projectId,
      content:
        "Je souhaite démarrer le Cadrage et préparer en même temps le contrat d'exécution Cursor pour l'outil d'inscriptions.",
      sessionDbPath,
      provider,
    });
    expect(turn.ok).toBe(true);
    if (!turn.ok) throw new Error(turn.message ?? "mixed");
    expect(turn.text).not.toMatch(
      /décision Pilote explicite reste nécessaire avant de préparer un contrat d'exécution/i,
    );
    expect(turn.text).not.toMatch(
      /Contexte projet conservé — aucun cycle artificiel créé/,
    );
    expect(
      (await getRuntimeApplicationService().oa!.executionContractServices.contracts.listByProject(
        projectId,
      )).length,
    ).toBe(0);
  });
});

```

# ANNEXE B — Diff orchestrateF2.ts (Option B + continuation fail-closed)

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index 7a75a37f..327f86d2 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -74,6 +74,14 @@ import {
   isOptionalDocumentaryWithoutClosureArtifactBlock,
   hasExplicitNewCycleFormalizationSignal,
 } from "./activeCycleGovernedContinuation";
+import {
+  cycleInventoryUnavailableMessage,
+  cycleLifecyclePreconditionsMessage,
+  mixedCycleExecutionClarificationMessage,
+  type CycleInventoryReadResult,
+} from "./cycleLifecycleConversationCoordinator";
+import { assessGenericPrepareConversationAdmission } from "./genericExecutionConversationCoordinator";
+import { discriminateConversationWorkflow } from "./conversationWorkflowDiscrimination";
 import {
   enrichQualificationWithCkcSemantics,
   isProductStudioNativeCkcProof,
@@ -1623,6 +1631,44 @@ export async function orchestrateAssistantSend(input: {
       const snap = await projectAssistantReadFramingContinuityAction({
         projectId: project.projectId,
       });
+      // Fail-closed before phase branching: continuity readers call
+      // cycles.listByProject — if that inventory is unavailable, snap.ok is
+      // false and the in-block inventory check would never run. An explicit
+      // START must not fall through to Nora / Generic PREPARE on that failure.
+      if (
+        !snap.ok &&
+        snap.code === "TRJ_BRIDGE_CYCLES_UNAVAILABLE"
+      ) {
+        const labelForProbe =
+          (analysis.candidateCycleTypeId
+            ? getCycleTypeById(analysis.candidateCycleTypeId)?.label
+            : null) ??
+          analysis.candidateCycleTypeId ??
+          null;
+        const startWhenInventoryUnread = resolveChatFirstStartRouting({
+          userContent: content,
+          cycleLabel: labelForProbe,
+          pilotDecisionCandidate: analysis.pilotDecisionCandidate,
+        });
+        if (startWhenInventoryUnread.kind === "attempt_start") {
+          return await completeF2Turn({
+            userText: content,
+            sessionDbPath: input.sessionDbPath,
+            text: cycleInventoryUnavailableMessage({
+              presentation,
+              cycleLabel: labelForProbe,
+            }),
+            mode: modeResolution.mode as "fixture" | "live",
+            presentation,
+            model,
+            project,
+            intentClass: analysis.intentClass,
+            reinstructionOfProposalId,
+            executionBlocked: true,
+            turnKind: "f2_blocked",
+          });
+        }
+      }
       if (snap.ok && snap.continuity) {
         const phase = snap.continuity.phase;
         const productCycleLabel =
@@ -1751,6 +1797,80 @@ export async function orchestrateAssistantSend(input: {
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
+          // Fail-closed: inventory service error ≠ proven empty inventory.
+          let cycleInventory: CycleInventoryReadResult;
+          try {
+            const listed = await oaForFraming.cycleServices.cycles.listByProject(
+              project.projectId,
+            );
+            cycleInventory = { kind: "available", count: listed.length };
+          } catch (err) {
+            cycleInventory = {
+              kind: "unavailable",
+              reason:
+                err instanceof Error
+                  ? err.message.slice(0, 160)
+                  : "cycle_inventory_read_failed",
+            };
+          }
+          if (cycleInventory.kind === "unavailable") {
+            return await completeF2Turn({
+              userText: content,
+              sessionDbPath: input.sessionDbPath,
+              text: cycleInventoryUnavailableMessage({
+                presentation,
+                cycleLabel: productCycleLabel,
+              }),
+              mode: modeResolution.mode as "fixture" | "live",
+              presentation,
+              model,
+              project,
+              intentClass: analysis.intentClass,
+              reinstructionOfProposalId,
+              executionBlocked: true,
+              turnKind: "f2_blocked",
+            });
+          }
+          if (
+            cycleInventory.count === 0 &&
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
@@ -2047,22 +2167,12 @@ export async function orchestrateAssistantSend(input: {
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
@@ -2072,27 +2182,68 @@ export async function orchestrateAssistantSend(input: {
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
@@ -2107,7 +2258,7 @@ export async function orchestrateAssistantSend(input: {
       const contextKept = activeId
         ? "Le cycle actif est conservé."
         : "Contexte projet conservé — aucun cycle artificiel créé.";
-      const prepareGo = prepareGoPreview;
+      const prepareGo = prepareAdmission.prepareGo;
       const mayPrepare =
         prepareGo.kind === "prepare" ||
         prepareGo.kind === "explicit_lexical_prepare";

```

# ANNEXE C — Instruction ChatGPT

Lire ce handoff canonique en entier.
Vérifier : code modifié (annexes), contenu exploitable, oracles A–M, résultats 84 PASS + typecheck/lint/build, fail-closed inventaire (y compris TRJ_BRIDGE_CYCLES_UNAVAILABLE), Exit Proof virgin→ACTIVE, réserves HQA.
Ne pas exiger working tree clean.
Ne pas déclarer P6 GLOBAL PASS.
