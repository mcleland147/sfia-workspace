# SFIA REVIEW PACK — FULL / CRITICAL
# PR #589 — PRR SEMANTIC CONFORMANCE CORRECTION + HANDOFF REGULARIZATION

**Timestamp UTC:** 2026-10-18T21:01:55Z
**GO Morris:** 2026-10-18 — PRR conformance correction + Review Handoff regularization (commit/push Delivery; NO new PR; NO merge)
**Repository:** mcleland147/sfia-workspace
**Worktree:** `/Users/morris/Projects/sfia-workspace-p6-arch-recovery-delivery-304e30e8`
**Branch:** `delivery/sfia-studio-p6-integrated-architecture-recovery`
**PR:** https://github.com/mcleland147/sfia-workspace/pull/589 — OPEN / DRAFT
**Cycle:** 13 — PR Readiness / Git Integration
**Profil:** CRITICAL
**Macro:** STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
**Chantier:** P6-INTEGRATED-PRODUCT-ARCHITECTURE-RECOVERY
**Milestone:** P6 — GLOBAL INTEGRATED PRODUCT QA

---

## A. GO Morris consommé

- Commit correctif PRR digests: **AUTORISÉ**
- Push branche Delivery: **AUTORISÉ**
- Mise à jour PR #589 (même head): **AUTORISÉ**
- Review Handoff publish L3: **AUTORISÉ**
- Nouvelle PR / Merge / Force push / SHE runtime / Product code / HQA / Cursor REAL / OpenAI LIVE / v3 promotion: **INTERDIT**

## B. Git Truth

### Initiale (pré-correction)
| Check | Valeur |
|---|---|
| pwd -P | `/Users/morris/Projects/sfia-workspace-p6-arch-recovery-delivery-304e30e8` |
| remote origin | `https://github.com/mcleland147/sfia-workspace.git` |
| branch | `delivery/sfia-studio-p6-integrated-architecture-recovery` |
| HEAD | `9ed27ca22454f04bf459d0a2bb3e8ee019434947` |
| origin/main | `304e30e8f9d19fad753a76c7a7b89b5b7e34c3f8` |
| commits ahead main | `9ed27ca2` (gov SHE), `4d74144e` (Product Option B) |
| dirty | `.tmp-sfia-review/chatgpt-review.md` only |
| PR #589 | OPEN / DRAFT / headOid=`9ed27ca2` |

### Finale (post-correction)
| Check | Valeur |
|---|---|
| HEAD local | `a21c484511d46469dc28222dc28f7e26859b3df2` |
| HEAD remote Delivery | `a21c484511d46469dc28222dc28f7e26859b3df2` |
| PR headOid | `a21c484511d46469dc28222dc28f7e26859b3df2` |
| PR state | OPEN / DRAFT / NOT MERGED |
| Preserved commits | `4d74144e`, `9ed27ca2` (not amended) |
| New commit | `a21c4845` docs(studio): align P6 Option B PRR conformance digests |

## C. Sources & Convergence Pre-check

**Capacité:** V3-F05 (+ F11/F12/F14). **KEEP:** OA, Nora, F2, coordinators Option B, same-turn currentness, EC/HD/Attempt, PRR, CI.
**ADAPT:** PRR digests only (CAS A). **REPLACE:** none.
**Gap closed this cycle:** digest drift vs Git tree bytes.
**Dette conservée:** TOOL-FIRST-REAL-NOWRITE-ENFORCEMENT OPEN.
**SHE runtime:** NOT IMPLEMENTED. **HQA AtelierNova CURRENT:** still blocked. **P6 GLOBAL PASS / v3:** NOT CLAIMED.

## D. CI initiale (échec)

- Run: https://github.com/mcleland147/sfia-workspace/actions/runs/39161046465
- HEAD: `9ed27ca2`
- Detect/Typecheck/Lint/Build: SUCCESS
- Vitest: FAILED (6182 PASS / 1 FAIL / 143 SKIP)
- Required Gate: FAILED
- Fail: `productionRuntimeReference.conformance.d0.test.ts` — tracked digests mismatch
- First mismatch: vol 07 manifest `dcf49d984f2668da` vs current `8ea3d088c5095108`

## E. Root cause PRR

Checker local (all mismatches, not stop-at-first assumption alone — confirmed complete set):

1. **VOLUME** `07-authority-invariants-and-failure-modes.md` — `dcf49d984f2668da` → `8ea3d088c5095108` — content changed in commit `9ed27ca2` (D-P6-SHE-01) without digest refresh
2. **SOURCE** `orchestrateTurn.ts` — `4024ae1078c6f4da` → `f20d8d4a2663d756` — Product Option B `4d74144e`
3. **SOURCE** `f2/orchestrateF2.ts` — `bf17440e75fd1d6a` → `73d754838d9d13a0` — Product Option B `4d74144e`

Not tracked (no digest required; not added): `prepareGenericExecutionContractDraft.ts`, three new coordinators, four `p6.arch.*` tests.

`schemaVersion`/`kind`/`lastReviewedCommit`/`lastReviewedAt`/`trackedSources` membership: **unchanged**.

## F. Matrice d'impact sémantique (CAS A)

| CHANGEMENT | COMPOSANT | FLOW | INVARIANT | VOL PRR | ÉTAT DOC | IMPACT SÉMANTIQUE | KEEP/ADAPT | JUSTIFICATION |
|---|---|---|---|---|---|---|---|---|
| Workflow discrimination | `conversationWorkflowDiscrimination` | F01/F07/F08 | INV-REC-NE-HD; lifecycle≠prepare | 03,07 | F01 START vs F08 PREPARE already distinct | Admission routing only | **KEEP** | Does not invent HD/EC/Attempt; enforces existing flow separation |
| Cycle Lifecycle coordinator | messaging + inventory fail-closed | F01 | INV-NO-SILENT-HD; INV-PROJ-NE-CYCLE | 03,07 | F01 greenfield path documented | Orientation / preempt project-context prepare | **KEEP** | No authority model change |
| Generic Execution coordinator | prepare admission | F08 | INV-OFFER-NE-AUTH; PREPARE≠AUTH≠EXEC | 03,07,08 | F08 S8 + dual paths CURRENT | Thin admission boundary | **KEEP** | Reuses W2 helpers; no parallel engine |
| Greenfield first-cycle Nora path | orchestrateF2 force advisory readiness | F01 | INV-REC-NE-HD | 03 | F01 Rec→traj→START | Continuity fix to reach Rec | **KEEP** | Aligns with F01; does not auto-START |
| Same-turn Generic PREPARE finalize | orchestrateTurn queue→finalize after ACW/LR | F04/F08 | CURRENT revalidation / MATERIALITY_CURRENTNESS | 03,07 | F04 solicit→Product PREPARE; vol07 currentness | Timing of stamp vs LPS | **KEEP** | Authority gates unchanged; implements existing currentness obligation; F04 still ends in `solicitGenericExecutionPrepare` (deferred) — not a new authority path |
| Tests p6.arch.* | DET Option B | F01/F04/F08 | — | 08 | vol08 lists other DET; new files untracked | Proof ceiling DET only | **KEEP** | Not added to trackedTests (GO forbids arbitrary adds) |
| D-P6-SHE-01 TARGET catalog | vol07 + doctrine | F08/F09 TARGET | INV-SHE-* | 07 | Already amended in `9ed27ca2`; ChatGPT accepted SHE sync | TARGET≠CURRENT preserved | **KEEP content** / **ADAPT digests** | Digest refresh only; no new SHE prose this cycle |

**Décision CAS A:** aucun nouveau contenu PRR inédit requis. Digests only.

**Réserve documentaire (non bloquante):** F04 wording still says tool “wired to” `solicitGenericExecutionPrepare` without spelling queue/finalize timing. Authority-true; precision debt OPEN for a future PRR overlay under distinct GO if Morris wants naming of Option B modules.

## G. Digests avant / après

| PATH | TYPE | AVANT | APRÈS | MOTIF | REVIEW |
|---|---|---|---|---|---|
| `…/07-authority-invariants-and-failure-modes.md` | VOLUME | dcf49d984f2668da | 8ea3d088c5095108 | SHE TARGET amend `9ed27ca2` | Content accepted prior ChatGPT SHE review; CURRENT≠TARGET kept |
| `…/orchestrateTurn.ts` | SOURCE | 4024ae1078c6f4da | f20d8d4a2663d756 | Option B same-turn finalize | Behavior KEEP vs PRR authority |
| `…/f2/orchestrateF2.ts` | SOURCE | bf17440e75fd1d6a | 73d754838d9d13a0 | Option B coordinators wiring | Behavior KEEP vs PRR flows |

## H. Validations locales

| Check | Command / scope | Result |
|---|---|---|
| PRR checker | `node scripts/check-production-runtime-reference.mjs` | CONFORMANCE OK |
| PRR Vitest | `productionRuntimeReference.conformance.d0.test.ts` | PASS (in targeted + full) |
| Option B | 4× `p6.arch.*.d0.test.ts` | 22/22 PASS (with conformance file: 5 files) |
| typecheck | `npm run typecheck` | PASS |
| lint | `npm run lint` | PASS (0 warnings) |
| build | `npm run build` | PASS |
| Full Vitest (clean env) | `CI=true` + unset HQA/REAL DB env | **6183 PASS / 0 FAIL / 143 SKIP** (586 files: 564 pass / 22 skip) |
| Full Vitest polluted env | HQA `PRODUCT_DB_PATH` / REAL set | FAIL environmental — **not** defect introduced; qualified |
| `git diff --check` (manifest) | PASS | |
| Secrets in staging | none | |

## I. Commit / Push / PR

- Commit: `a21c484511d46469dc28222dc28f7e26859b3df2` — `docs(studio): align P6 Option B PRR conformance digests`
- Files: **only** `production-runtime-reference.manifest.json` (3 digest lines)
- Push: normal FF `9ed27ca2..a21c4845` → origin Delivery
- PR #589: same URL, remains DRAFT, head=`a21c4845`
- CI new run: `39165909873` (see section R — may be PENDING at pack write)

## J. Fake / Real

- Fake: DET Vitest + PRR digests
- REAL this cycle: NON
- Claims interdits: REAL BOUNDARY PROVEN; SHE IMPLEMENTED; GENERIC PREPARE LIVE PASS; P6 GLOBAL PASS; v3 ADOPTED

## K. Exclusions / non-pollution HQA

Excluded: `.tmp-sfia-review/*`, SQLite HQA, WAL/SHM, secrets, `.env.local`, node_modules, Next cache, AtelierNova DBs.
Campaign preserve: `p6-optionb-fresh-hqa-20261018T175902Z` (not mutated).
Staging: explicit path only — never `git add -A`.

---

## L. GIT REVIEW INDEX — PR #589 files (17 after this cycle)

| # | PATH | A/M | COMMIT | OBJECTIF | SECTIONS / PREUVES |
|---|---|---|---|---|---|
| 1 | `f2/conversationWorkflowDiscrimination.ts` | A | `4d74144e` | Discriminate cycle_lifecycle vs execution_mission | full file below |
| 2 | `f2/cycleLifecycleConversationCoordinator.ts` | A | `4d74144e` | Lifecycle orientation; inventory fail-closed | full file below |
| 3 | `f2/genericExecutionConversationCoordinator.ts` | A | `4d74144e` | Generic PREPARE admission | full file below |
| 4 | `f2/orchestrateF2.ts` | M | `4d74144e` | Wire discrimination + greenfield | full diff vs main |
| 5 | `orchestrateTurn.ts` | M | `4d74144e` | Same-turn prepare queue/finalize | full diff vs main |
| 6 | `w2/prepareGenericExecutionContractDraft.ts` | M | `4d74144e` | queue helper + codes | full diff vs main |
| 7 | `p6.arch.cycleLifecycleVsGenericPrepare.d0.test.ts` | A | `4d74144e` | Lifecycle preempts prepare | blob + excerpt (voluminous) |
| 8 | `p6.arch.firstCycleLiveProgression.d0.test.ts` | A | `4d74144e` | Nora→Rec progression | blob + excerpt |
| 9 | `p6.arch.genericPrepareSameTurnCurrentness.d0.test.ts` | A | `4d74144e` | Same-turn LPS stamp | blob + excerpt |
| 10 | `p6.arch.virginFirstCycleJourney.d0.test.ts` | A | `4d74144e` | Virgin→ACTIVE sans EC | blob + excerpt |
| 11 | `convergence/...-build-doctrine.md` | M | `9ed27ca2` | A3 SHE TARGET | diff vs main |
| 12 | `convergence/...-roadmap.md` | M | `9ed27ca2` | tip SHE | diff vs main |
| 13 | `convergence/...-generic-execution-review-result-architecture.md` | M | `9ed27ca2` | D-ER-18 SHE | diff vs main |
| 14 | `production-runtime-reference/07-….md` | M | `9ed27ca2` | CURRENT + TARGET INV-SHE | full diff vs main |
| 15 | `sfia-v3-framing/30-….md` | M | `9ed27ca2` | HD doctrine SHE note | diff vs main |
| 16 | `sfia-v3-framing/34-….md` | M | `9ed27ca2` | reversibility/governance SHE | diff vs main |
| 17 | `production-runtime-reference.manifest.json` | M | `a21c4845` | digest align | full diff |



### FILE FULL — `projects/sfia-studio/app/features/project-assistant/f2/conversationWorkflowDiscrimination.ts`

- blob HEAD: `bb3feeeeb418219fc3928c3b4ba8f665c89fc63c`
- status: **A** @ `4d74144e`

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


### FILE FULL — `projects/sfia-studio/app/features/project-assistant/f2/cycleLifecycleConversationCoordinator.ts`

- blob HEAD: `5d1dd72e24f7242fb120ceeef06dcaf1c3fdc4e8`
- status: **A** @ `4d74144e`

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


### FILE FULL — `projects/sfia-studio/app/features/project-assistant/f2/genericExecutionConversationCoordinator.ts`

- blob HEAD: `d17babcfa27a32806eec4d273a7eb64274fa9cd6`
- status: **A** @ `4d74144e`

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


### DIFF FULL vs origin/main — `projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts`

- blob HEAD: `9b783ae6660cc0e4903756f9b7e852175949e77e`
- status: **M** @ `4d74144e`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index 7a75a37f..9b783ae6 100644
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
@@ -1613,6 +1621,12 @@ export async function orchestrateAssistantSend(input: {
   // CP-01: when a unique COMPLETE prepared cycle is ready, accept_start must
   // reach resolveChatFirstCycleStartGate HERE — transitionReadiness may still
   // be false (missing candidateCycleTypeId / signals) and must not strand START.
+  //
+  // Greenfield (no CURRENT Recommendation): an attempt_start utterance must NOT
+  // short-circuit with preconditions-only copy — Nora Product turn must run so
+  // Lifecycle Recommendation can materialize via the normal Product path.
+  // Force F1 advisory readiness (not F2 createCycle/START) for that case only.
+  let forceGreenfieldLifecycleRecommendationCognitive = false;
   {
     const oaForFraming = getRuntimeApplicationService().oa;
     if (oaForFraming) {
@@ -1623,6 +1637,44 @@ export async function orchestrateAssistantSend(input: {
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
@@ -1751,6 +1803,92 @@ export async function orchestrateAssistantSend(input: {
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
+          // Empty inventory + Cycle Lifecycle intent + no CURRENT Recommendation:
+          // do NOT return cycleLifecyclePreconditionsMessage (that stranded HQA
+          // AtelierNova — "need a recommendation" without allowing Nora to emit one).
+          // Keep Generic PREPARE preempt via discrimination later; route to F1 Nora.
+          if (
+            cycleInventory.count === 0 &&
+            framingDiscrimination.preemptsGenericPrepareProjectContext &&
+            phase === "blocked_no_recommendation"
+          ) {
+            forceGreenfieldLifecycleRecommendationCognitive = true;
+          } else if (
+            cycleInventory.count === 0 &&
+            framingDiscrimination.preemptsGenericPrepareProjectContext &&
+            phase === "blocked_stale_or_incomplete"
+          ) {
+            // Stale/incomplete candidate — orient without inventing Rec/HD/START.
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
@@ -1846,7 +1984,9 @@ export async function orchestrateAssistantSend(input: {
   const transition = resolveTransitionReadiness({
     analysis,
     forceRepoInformative:
-      forceRepoInformative || forceReservationResolutionAdvisory,
+      forceRepoInformative ||
+      forceReservationResolutionAdvisory ||
+      forceGreenfieldLifecycleRecommendationCognitive,
   });

   // CR-P6-04 — "OK, vas-y" (often informative) bound to a CURRENT prepare offer
@@ -2047,22 +2187,12 @@ export async function orchestrateAssistantSend(input: {
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
@@ -2072,27 +2202,68 @@ export async function orchestrateAssistantSend(input: {
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
@@ -2107,7 +2278,7 @@ export async function orchestrateAssistantSend(input: {
       const contextKept = activeId
         ? "Le cycle actif est conservé."
         : "Contexte projet conservé — aucun cycle artificiel créé.";
-      const prepareGo = prepareGoPreview;
+      const prepareGo = prepareAdmission.prepareGo;
       const mayPrepare =
         prepareGo.kind === "prepare" ||
         prepareGo.kind === "explicit_lexical_prepare";

```


### DIFF FULL vs origin/main — `projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts`

- blob HEAD: `9b6daee2fd0a420588361eec4598f921cf45b688`
- status: **M** @ `4d74144e`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
index 68703ff4..9b6daee2 100644
--- a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
+++ b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
@@ -219,6 +219,7 @@ export type ProductDurableEffectBlock =
   | "activeCycleWork"
   | "reservation"
   | "lifecycleRecommendation"
+  | "genericPrepareFinalize"
   | "readCoverage"
   | "transcriptJournal"
   | "terminalSuccess";
@@ -462,6 +463,33 @@ export async function orchestrateProjectAssistantTurn(input: {
   const provider = input.provider ?? resolveConversationProvider();
   const presentation = modeResolution.presentation;

+  /**
+   * Nora tool solicitation captured during the Agents round — finalized only
+   * after same-turn durable Product writes (see post-LR finalize below).
+   */
+  let pendingGenericPrepareMission: {
+    readonly objective?: string;
+    readonly expectedOutcome?: string;
+    readonly scope?: string;
+    readonly contextNotes?: string;
+    readonly repositoryMutation?: "none" | "read" | "write" | "unknown";
+    readonly impactSignals?: {
+      readonly structuralChange?: boolean;
+      readonly securityImpact?: boolean;
+      readonly architectureImpact?: boolean;
+      readonly dataImpact?: boolean;
+      readonly irreversible?: boolean;
+    };
+  } | null = null;
+  let genericPrepareTurnFinalize:
+    | {
+        readonly ok: boolean;
+        readonly code: string;
+        readonly executionContractId?: string;
+        readonly message: string;
+      }
+    | null = null;
+
   try {
     const turn = await runNoraCognitiveTurn({
       // P5-S01 — prefer durable logicalTurnId as stable cognitive task identity
@@ -525,43 +553,36 @@ export async function orchestrateProjectAssistantTurn(input: {
         // unique Product backend. Project bound server-side; active cycle is
         // optional context (null = S8 project-context, never invented).
         // PREPARE ≠ AUTHORIZE ≠ EXECUTE — no ExecutionAttempt is ever created.
+        //
+        // P6 Option B same-turn currentness: do NOT prepare mid-Agents-round.
+        // ACW / reservation / LR may bump LPS after the tool returns; stamping
+        // then makes the EC immediately MATERIALITY_CURRENTNESS_STALE.
+        // Queue here; finalize after durable Product writes of this turn.
         solicitPrepare: async (args) => {
-          const [
-            { getRuntimeApplicationService },
-            { solicitGenericExecutionPrepare },
-          ] = await Promise.all([
-            import("@/lib/vertical-slice-runtime"),
-            import("./w2/prepareGenericExecutionContractDraft"),
-          ]);
+          const [{ getRuntimeApplicationService }, prepareMod] =
+            await Promise.all([
+              import("@/lib/vertical-slice-runtime"),
+              import("./w2/prepareGenericExecutionContractDraft"),
+            ]);
           const oa = getRuntimeApplicationService().oa;
           if (!oa) {
             return {
               ok: false as const,
               code: "OA_UNAVAILABLE",
               message: "OA runtime indisponible pour la préparation.",
+              humanDecisionCreated: false as const,
               executionAttemptCreated: false as const,
             };
           }
-          return solicitGenericExecutionPrepare({
-            oa,
-            projectId: project.projectId,
-            cycleInstanceId: project.activeCycleInstanceId?.trim() || null,
-            mission: {
-              objective: args.objective,
-              expectedOutcome: args.expectedOutcome,
-              scope: args.scope,
-              contextNotes: args.contextNotes,
-              repositoryMutation: args.repositoryMutation,
-              impactSignals: args.impactSignals,
-            },
-            sessionDbPath: input.sessionDbPath,
-            forceLocalAuthority:
-              process.env.VITEST === "true" ||
-              process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY === "1",
-            // Explicit DET pin only (never inferred from VITEST alone).
-            pinnedBaseHeadSha:
-              process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA?.trim() || null,
-          });
+          pendingGenericPrepareMission = {
+            objective: args.objective,
+            expectedOutcome: args.expectedOutcome,
+            scope: args.scope,
+            contextNotes: args.contextNotes,
+            repositoryMutation: args.repositoryMutation,
+            impactSignals: args.impactSignals,
+          };
+          return prepareMod.queueGenericPrepareForTurnFinalization();
         },
       },
       signal: input.signal,
@@ -1310,6 +1331,72 @@ export async function orchestrateProjectAssistantTurn(input: {
       }
     }

+    // P6 Option B — finalize deferred Generic PREPARE AFTER ACW / reservation / LR
+    // so productCurrentness stamps the final LPS of this logical turn.
+    // Post-turn LPS mutations still fail MATERIALITY_CURRENTNESS_STALE (gate kept).
+    if (pendingGenericPrepareMission) {
+      const prepareMod = await import("./w2/prepareGenericExecutionContractDraft");
+      if (suppressCompleteCognitiveEffects) {
+        genericPrepareTurnFinalize = {
+          ok: false,
+          code: prepareMod.GENERIC_PREPARE_TURN_FINALIZATION_SUPPRESSED,
+          message:
+            "Sollicitation Generic PREPARE non finalisée — tour cognitif stoppé ou budget d'exécution atteint. Aucun contrat créé.",
+        };
+      } else {
+        await cutDurableEffect(
+          input.signal,
+          "genericPrepareFinalize",
+          input.beforeDurableEffect,
+        );
+        const { getRuntimeApplicationService } = await import(
+          "@/lib/vertical-slice-runtime"
+        );
+        const oaPrep = getRuntimeApplicationService().oa;
+        if (!oaPrep) {
+          genericPrepareTurnFinalize = {
+            ok: false,
+            code: "OA_UNAVAILABLE",
+            message: "OA runtime indisponible pour finaliser Generic PREPARE.",
+          };
+        } else {
+          const finalized = await prepareMod.solicitGenericExecutionPrepare({
+            oa: oaPrep,
+            projectId: project.projectId,
+            cycleInstanceId: project.activeCycleInstanceId?.trim() || null,
+            mission: pendingGenericPrepareMission,
+            sessionDbPath: input.sessionDbPath,
+            forceLocalAuthority:
+              process.env.VITEST === "true" ||
+              process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY === "1",
+            pinnedBaseHeadSha:
+              process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA?.trim() || null,
+          });
+          genericPrepareTurnFinalize = finalized.ok
+            ? {
+                ok: true,
+                code: finalized.code,
+                executionContractId: finalized.executionContractId,
+                message: finalized.message,
+              }
+            : {
+                ok: false,
+                code: finalized.code,
+                message: finalized.message,
+              };
+        }
+      }
+      pendingGenericPrepareMission = null;
+      if (
+        genericPrepareTurnFinalize &&
+        !genericPrepareTurnFinalize.ok &&
+        typeof assistantText === "string" &&
+        assistantText.trim().length > 0
+      ) {
+        assistantText = `${assistantText.trim()}\n\n[Studio] ${genericPrepareTurnFinalize.message}`;
+      }
+    }
+
     const { toolEvents, sources, readCoverage } = collectToolTelemetry(
       sink.events,
     );

```


### DIFF FULL vs origin/main — `projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts`

- blob HEAD: `40c4cb77fa4d1c43f5beb993e099a8a6cec1bfca`
- status: **M** @ `4d74144e`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts b/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
index 7c157e92..40c4cb77 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
@@ -1251,6 +1251,19 @@ export function genericMissionPreparedText(input: {
 // No parallel prepare engine · no task taxonomy · never an ExecutionAttempt.
 // ---------------------------------------------------------------------------

+/**
+ * Same-turn currentness (P6 Option B) — Nora tool solicitation is recorded during
+ * the Agents round; Product FINALIZES PREPARE only after durable turn writes
+ * (ACW / reservation / LR) so the EC stamp binds the final LPS, not a mid-turn
+ * snapshot invalidated by later epistemic materialization.
+ * Does NOT weaken MATERIALITY_CURRENTNESS_STALE for post-turn mutations.
+ */
+export const GENERIC_PREPARE_QUEUED_FOR_TURN_FINALIZATION =
+  "GENERIC_PREPARE_QUEUED_FOR_TURN_FINALIZATION" as const;
+
+export const GENERIC_PREPARE_TURN_FINALIZATION_SUPPRESSED =
+  "GENERIC_PREPARE_TURN_FINALIZATION_SUPPRESSED" as const;
+
 /** Mission fields Nora may supply to the solicitation tool (NON-AUTHORITATIVE). */
 export type SolicitGenericPrepareMissionFields = {
   readonly objective?: string | null;
@@ -1361,6 +1374,10 @@ export type SolicitGenericExecutionPrepareInput = {
   readonly sourceGroundingReader?: ContractSourceGroundingReader | null;
 };

+/**
+ * Immediate PREPARE result (drafted EC or fail-closed). Never deferred —
+ * tool-time queueing uses {@link QueuedGenericPrepareForTurnFinalizationResult}.
+ */
 export type SolicitGenericExecutionPrepareResult =
   | {
       readonly ok: true;
@@ -1383,6 +1400,29 @@ export type SolicitGenericExecutionPrepareResult =
       readonly executionAttemptCreated: false;
     };

+/** Tool-time acknowledgement — no EC written yet (same-turn currentness). */
+export type QueuedGenericPrepareForTurnFinalizationResult = {
+  readonly ok: true;
+  readonly code: typeof GENERIC_PREPARE_QUEUED_FOR_TURN_FINALIZATION;
+  readonly deferredFinalize: true;
+  readonly humanDecisionCreated: false;
+  readonly executionAttemptCreated: false;
+  readonly message: string;
+};
+
+/** Tool-time acknowledgement — no EC written yet (same-turn currentness). */
+export function queueGenericPrepareForTurnFinalization(): QueuedGenericPrepareForTurnFinalizationResult {
+  return {
+    ok: true,
+    code: GENERIC_PREPARE_QUEUED_FOR_TURN_FINALIZATION,
+    deferredFinalize: true,
+    humanDecisionCreated: false,
+    executionAttemptCreated: false,
+    message:
+      "Sollicitation Generic PREPARE enregistrée — Product finalisera le contrat après les écritures durables du tour (empreinte CURRENT). PREPARE ≠ AUTHORIZE ≠ EXECUTE ; aucun ExecutionAttempt créé.",
+  };
+}
+
 /**
  * Thin Product service for Nora tool injection (D-ER-16). PREPARE only —
  * AUTHORIZE and EXECUTE remain separate Pilote/Studio acts. Always reports

```


### TEST EXCERPT — `projects/sfia-studio/app/__tests__/project-assistant/p6.arch.cycleLifecycleVsGenericPrepare.d0.test.ts`

- blob HEAD: `66b433ec7151813d7b930f7a87492e441bb75097`
- lines: 359
- status: **A** @ `4d74144e`

- Justification excerpt: file >300 lines; full content recoverable via `git show 4d74144e:projects/sfia-studio/app/__tests__/project-assistant/p6.arch.cycleLifecycleVsGenericPrepare.d0.test.ts`. Excerpt = header + first oracle blocks.

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
// … truncated; see git blob for remainder …
```


### TEST EXCERPT — `projects/sfia-studio/app/__tests__/project-assistant/p6.arch.firstCycleLiveProgression.d0.test.ts`

- blob HEAD: `0e11bfb854f37219dc844ffaa49d365b35b9ce56`
- lines: 560
- status: **A** @ `4d74144e`

- Justification excerpt: file >300 lines; full content recoverable via `git show 4d74144e:projects/sfia-studio/app/__tests__/project-assistant/p6.arch.firstCycleLiveProgression.d0.test.ts`. Excerpt = header + first oracle blocks.

```typescript
/** @vitest-environment node */
/**
 * P6 Option B — FIRST-CYCLE LIVE PROGRESSION
 *
 * Exit proof: Pilot utterance on virgin Project (0 CURRENT Rec) reaches Nora
 * Product turn and materializes Lifecycle Recommendation via Product path —
 * WITHOUT seeding Rec / traj / HD / cycle, and WITHOUT calling
 * materializeLifecycleRecommendationFromStructuredOutput in the test.
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
import { classifyTrajectoryBinding } from "@/lib/oa/cycle";
import { PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import { W2_REGISTRY_ROOT, W2_SCHEMAS_ROOT } from "./w2Harness";

const ATELIER_NOVA_FIRST_CYCLE = `Nora, maintenant qu'AtelierNova est créé, je souhaite démarrer notre premier cycle de travail.

Je propose un cycle Cadrage, avec un objectif simple : qualifier le périmètre fonctionnel de notre première version, puis préparer une première mission Cursor pour construire l'application.

Je veux privilégier rapidement un résultat fonctionnel, sans documentation excessive.

Si le cycle Cadrage est adapté, accompagne-moi dans sa préparation et son démarrage effectif dans Studio, en me présentant les décisions que je dois prendre.

Pour le moment, ne lance aucune exécution Cursor.`;

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

const SIGNALS_OK = {
  structuralChange: false,
  securityImpact: false,
  architectureImpact: false,
  dataImpact: false,
  irreversible: false,
  lowRiskBounded: true,
};

/**
 * Fake Nora — substitutes OpenAI only.
 * - F2 intent analysis → actionable Cadrage
 * - nora_product_turn_with_optional_lr → NEXT_CYCLE Recommendation (structured)
 * Never writes OA; never calls materialize* directly.
 */
class FirstCycleProgressionFakeProvider implements ConversationProvider {
  readonly providerId = "fake-test";
  private n = 0;
  productTurnCalls = 0;
  intentAnalysisCalls = 0;
  seenSchemas: string[] = [];

  private productTurnPayload(): string {
    return JSON.stringify({
      narrative:
        "Je recommande un cycle Cadrage pour qualifier le périmètre d'AtelierNova avant toute mission Cursor.",
      preCycleRoutingAssessment: {
        ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
      },
      lifecycleRecommendation: {
// … truncated; see git blob for remainder …
```


### TEST EXCERPT — `projects/sfia-studio/app/__tests__/project-assistant/p6.arch.genericPrepareSameTurnCurrentness.d0.test.ts`

- blob HEAD: `26caeb08cda3a75519336765a365fa4f719b0141`
- lines: 608
- status: **A** @ `4d74144e`

- Justification excerpt: file >300 lines; full content recoverable via `git show 4d74144e:projects/sfia-studio/app/__tests__/project-assistant/p6.arch.genericPrepareSameTurnCurrentness.d0.test.ts`. Excerpt = header + first oracle blocks.

```typescript
/** @vitest-environment node */
/**
 * P6 Option B — Generic PREPARE same-turn currentness sequencing.
 *
 * Exit proof: Nora tool solicitPrepare + ACW epistemic write in ONE Product turn
 * must NOT leave the EC immediately MATERIALITY_CURRENTNESS_STALE.
 * Fake OpenAI only; real Product OA path; no HQA DB; no Cursor Execute.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import * as prepareSvc from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import { GENERIC_PREPARE_QUEUED_FOR_TURN_FINALIZATION } from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import {
  analysisStubFromMaterialityFacts,
  parseStampedProductCurrentness,
  revalidateMaterialityAgainstCurrentProduct,
} from "@/features/project-assistant/w2/resolveAuthoritativeProductMateriality";
import { materialityFromContractConstraints } from "@/lib/oa/execution-contract";
import { readCurrentGovernedExecutionContinuity } from "@/features/project-assistant/w2/readCurrentGovernedExecutionContinuity";
import { orchestrateProjectAssistantTurn } from "@/features/project-assistant/orchestrateTurn";
import { composeStudioCognitiveContext } from "@/features/project-assistant/f2/studioCognitiveContext";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
import { resetMw5ChallengeStoreForTests } from "@/features/project-assistant/f2/mw5ChallengeSessionStore";
import { resetPendingGenericPrepareOfferStoreForTests } from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
import {
  FakeConversationProvider,
  setConversationProviderForTests,
} from "@/lib/platform/ai";
import type {
  ConversationProvider,
  ProviderChatMessage,
  ProviderCompletionResult,
  ProviderInputItem,
  ProviderRoundResult,
} from "@/lib/platform/ai/types";
import type { ToolDefinition } from "@/lib/platform/tools/types";
import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
import type { ProjectAssistantContextDto } from "@/features/project-assistant/types";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  tempProductDbPath,
  W2_REGISTRY_ROOT,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";
import type { RuntimeApplicationService, RuntimeOaStack } from "@/lib/vertical-slice-runtime";

async function projectDtoFromOa(
  oa: RuntimeOaStack,
  projectId: string,
): Promise<ProjectAssistantContextDto> {
  const project = await oa.projectServices.getProject.execute({ projectId });
  const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
    projectId,
  });
  if (!project.ok || !lps.ok) throw new Error("project/lps missing");
  const pin =
    project.project.doctrinePackageRef ??
    lps.livingProjectState.doctrinePackageRef;
  const state = lps.livingProjectState;
  return {
    projectId,
    name: project.project.title,
    shortReference: null,
    objective: state.objective,
    contextSummary: state.context ?? "",
    criticality: "STANDARD",
    constraints: [...(state.constraints ?? [])],
    lpsId: state.lpsVersionId,
    lpsVersion: state.version,
    lpsCreatedAt: state.createdAt,
    doctrineId: pin.doctrinePackageId,
    doctrineVersion: pin.version,
    doctrineDigest: pin.digest,
    doctrineStatus: "product-studio-native",
    runtimeMode: "local",
    persistence: "product-sqlite",
    readiness: "ready",
    activeCycleInstanceId: state.activeCycleInstanceId ?? null,
    ckcResolutionRef: state.ckcResolutionRef ?? null,
  };
}

const SIGNALS_OK = {
  structuralChange: false,
  securityImpact: false,
  architectureImpact: false,
  dataImpact: false,
  irreversible: false,
  lowRiskBounded: true,
};

const ACW_DEFER_ASSESSMENT = {
  routingBlockingUnknownPresent: false,
  candidateCycleSupportable: false,
  remainingUnknownsAreCycleOwned: true,
  multiplePlausibleCycles: false,
  activeCycleAlreadyCoversWork: true,
} as const;

function interceptF2(messages: ProviderChatMessage[]): string | null {
  const isF2 = messages.some(
    (m) => m.role === "system" && m.content.includes("SFIA Studio F2"),
  );
  if (!isF2) return null;
  return `[TEST/FAKE · NON LIVE] ${JSON.stringify({
    intentClass: "actionable",
    candidateCycleTypeId: "cyc:framing",
    signals: SIGNALS_OK,
    cognitiveWorkload: null,
    contradictionCandidate: null,
    challengeResponseAssessment: "sufficient",
    objective: "Qualifier MVP et préparer mission Cursor lecture seule",
    scope: "projects/ateliernova",
    rephrasedRequest: "préparer mission inspection",
// … truncated; see git blob for remainder …
```


### TEST EXCERPT — `projects/sfia-studio/app/__tests__/project-assistant/p6.arch.virginFirstCycleJourney.d0.test.ts`

- blob HEAD: `5c2a1f2161be8b2b367b7a3c72889783d5384dec`
- lines: 624
- status: **A** @ `4d74144e`

- Justification excerpt: file >300 lines; full content recoverable via `git show 4d74144e:projects/sfia-studio/app/__tests__/project-assistant/p6.arch.virginFirstCycleJourney.d0.test.ts`. Excerpt = header + first oracle blocks.

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
// … truncated; see git blob for remainder …
```


### DIFF vs origin/main — `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md`

- blob HEAD: `b7be2435fa953e89c182ce639db7295b7ef40dbd`
- status: **M** @ `9ed27ca2`

```diff
diff --git a/projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md b/projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md
index 99232e45..b7be2435 100644
--- a/projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md
+++ b/projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md
@@ -39,7 +39,9 @@ Ce document **n’est pas** :

 Décision Morris explicite — cible produit Studio (≠ runtime ADOPTED). **Pilote** est le rôle runtime fonctionnel générique ; Morris reste l’autorité de construction / gouvernance de SFIA Studio et peut utiliser le produit en tant que Pilote sans devenir un persona runtime spécifique.

-Ordre d’autorité d’exécution aligné sur Product Completion C2 + Functional Architecture (≠ spécification technique) :
+**Amendement d’autorité d’exécution — D-P6-SHE-01** (2026-10-18) — **SINGLE HUMAN EXECUTE / OPTION A** — **TARGET ARCHITECTURE — ADOPTED BY MORRIS**. Cible documentaire ≠ runtime implémenté ; ≠ P6 PASS ; ≠ runtime v3 ADOPTED. Ne confond pas une **HumanDecision de trajectoire** (gates propres) avec l’autorisation d’un **ExecutionContract** générique.
+
+Ordre d’autorité d’exécution aligné sur Product Completion C2 + Functional Architecture, **amendé** par D-P6-SHE-01 (≠ spécification technique) :

 ```text
 Pilote
@@ -49,12 +51,13 @@ Pilote
   → analyse / clarification
   → Living Project State
   → ProjectTrajectory / options / recommandation
-  → HumanDecision du Pilote
-  → ExecutionContract natif préparé
-  → ExecutionContract inspecté par le Pilote
-  → Confirmation si requise par les effets / frontières protégées
-  → vérification / calcul de l’autorité effective + executor sufficiency
-  → Cursor / agent sous contrat
+  → HumanDecision du Pilote (trajectoire / vérité Project structurelle — gates propres)
+  → [Generic Execution — D-P6-SHE-01]
+       Nora/Studio PREPARE ExecutionContract (inspectable ; sans HD préalable obligatoire)
+       → Pilote INSPECT (contrat / effets / réserves)
+       → Pilote EXECUTE (seul clic explicite sur la version inspectée)
+       → Studio : HD / Confirmation applicables (transitions OA internes) + autorité effective
+       → Cursor / agent sous contrat SI admissible ; sinon STOP sans Attempt
   → Evidence / ReviewBundle / Git
   → analyse Nora
   → mise à jour LPS / ProjectTrajectory / replanification
@@ -64,12 +67,18 @@ Pilote

 Clarifications minimales (gouvernance d’exécution — ≠ implémentation) :

+- **PREPARE ≠ AUTHORIZE ≠ EXECUTE** (D-ER-18 conservé ; timing amendé par D-P6-SHE-01) ;
+- PREPARE d’un ExecutionContract générique **n’exige pas** de HumanDecision préalable (structurant ou non) — le contrat peut être **inspectable** sans être **autorisé** ;
+- Inspection ≠ consentement à exécuter ;
+- le clic **Exécuter** est l’acte Pilote explicite sur le **contrat inspecté** (identité / version / empreinte) ;
+- HD / Confirmation applicables restent des **transitions OA distinctes**, consommées **dans** le geste Exécuter lorsque requis — **pas** de CTA humain supplémentaire après ce clic pour le même contrat inspecté ;
 - Confirmation porte sur le **contrat / les effets inspectés** ;
 - Confirmation est **conditionnelle** — jamais une étape obligatoire gratuite ;
 - aucune Confirmation ne précède l’**inspection** du contrat qu’elle autorise ;
-- l’**autorité effective** est résolue **après** les Confirmations requises et **avant** Execute ;
+- l’**autorité effective** est résolue **avant** tout lancement Cursor ; absence d’autorité → STOP sans Attempt ;
 - l’absence de Confirmation requise **n’empêche pas** le calcul d’autorité ;
-- aucune couche ne peut élargir seule l’autorité.
+- aucune couche ne peut élargir seule l’autorité ;
+- gates Morris de **construction** (doctrine, promotion, chemins protégés Studio, push/PR/merge repo Studio) **≠** autorisation runtime Pilote.

 Référence fonctionnelle d’autorité :


```


### DIFF vs origin/main — `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`

- blob HEAD: `7885d752d562a5c4905e49ef0f7675e2cda4a9e6`
- status: **M** @ `9ed27ca2`

```diff
diff --git a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
index cbc558e8..7885d752 100644
--- a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
+++ b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
@@ -4,7 +4,8 @@
 | --- | --- |
 | **Rôle** | Roadmap **vivante** de convergence vers l’utilisation complète de la doctrine produit SFIA Studio v3 |
 | **Statut** | **VALIDATED — ACTIVE LIVING ROADMAP** |
-| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P6 MACRO CAMPAIGN CONTINUATION** | 2026-10-08 Europe/Paris — **P6 GLOBAL INTEGRATED PRODUCT QA — MACRO CAMPAIGN CONTINUATION / PHASE-1 REQUALIFICATION** · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **9 — QA / validation** · Profile **Critical** · campaignId **P6-GLOBAL-INTEGRATED-PRODUCT-QA-01** · origin/main **`aba6c4a617b6d0cb27f23b59de5bf0ac9360fab1`** · PR **#571** MERGED · CI **#713** SUCCESS · Phase 0 = **COMPLETE / INTEGRATED / POST-MERGE VERIFIED** · GO P6 EXECUTION / GO P6 REAL = **AUTHORIZED / CONSUMED** · Phase 1 = **PASS / REQUALIFIED WITH CURRENT P6 REAL SMOKES** (fresh SMOKE-01/02/03 · browser QUALIFIED · provider CAPTURED · authority profiles CONTROLLED) · prior Phase 2/3/4 evidence = **VALID / REUSED** · Phase 2 scenario disposition + Phase 3 Router-in-situ/discrimination continuation · Phase 5 Human QA batch = **REGENERATING / NOT YET PRIMARY HANDOFF** · P6 PASS = **NOT CLAIMED** · runtime v3 = **NON ADOPTED** · production routing changed = **NO** · branche `qa/sfia-studio-p6-global-integrated-product-qa` · Project push / PR / merge = **NONE** · Next = exhaust AUTO → **MORRIS HUMAN QA BATCH** · **≠** P6 PASS · **≠** runtime v3 ADOPTED |
+| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P6 D-P6-SHE-01 SINGLE HUMAN EXECUTE GOVERNANCE SYNC** | 2026-10-18 Europe/Paris — **P6 — SINGLE HUMAN EXECUTE / OPTION A — GOVERNANCE DOCUMENTARY SYNCHRONIZATION CANDIDATE** · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Chantier **P6-INTEGRATED-PRODUCT-ARCHITECTURE-RECOVERY** · Cycle **3 — Architecture fonctionnelle** · Profile **Critical** · Typologie **DOC / GOVERNANCE / ARCHITECTURE DECISION SYNC** · Decision **D-P6-SHE-01** = **ADOPTED BY MORRIS — TARGET ARCHITECTURE** (2026-10-18) · Option A = **ADOPTED** · SINGLE HUMAN EXECUTE = **ADOPTED** · Sources sync (local candidate) = Build Doctrine A3 · D-ER-18 amendement · Authority Invariants CURRENT/TARGET · V3-F05/F11-F12 clarifications · this Roadmap tip · C1 = **NOT MODIFIED** (historique VALIDATED) · Architecture impact handoff = `c3095635` / blob `5e2fd1f5` · Structural refusal diagnostic = `eebc6e93` · origin/main / Delivery HEAD known **`304e30e8…`** · Option B Product dirty **PRESERVED / NOT THIS CYCLE** · HQA AtelierNova Generic PREPARE **BLOCKED (CURRENT)** · HQA replay = **NOT AUTHORIZED** · Delivery Product = **NOT AUTHORIZED** · Git Integration of this sync = **NOT AUTHORIZED** (gate ChatGPT Critical Review → GO distinct) · P6 GLOBAL PASS = **NOT CLAIMED** · runtime v3 = **NON ADOPTED** · CURRENT ≠ TARGET · ADOPTED TARGET ≠ IMPLEMENTED · Trajectoire = V3-F05 → **D-P6-SHE-01** → Generic PREPARE inspectable → Execute orchestration → DET proof → HQA LIVE → P6 Exit · Gates restants = (1) ChatGPT documentary review (2) Git Integration GO (3) Delivery Product GO (4) HQA replay GO (5) P6 Exit / promotion · Dette **TOOL-FIRST-REAL-NOWRITE** = **OPEN** · **≠** Delivery · **≠** runtime implemented · **≠** P6 PASS · **≠** v3 ADOPTED |
+| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P6 MACRO CAMPAIGN CONTINUATION** | 2026-10-08 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — prior tip P6 GLOBAL INTEGRATED PRODUCT QA — MACRO CAMPAIGN CONTINUATION / PHASE-1 REQUALIFICATION *(true then; superseded as tip by D-P6-SHE-01 governance sync 2026-10-18 — campaign facts remain VALID / REUSED)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **9 — QA / validation** · Profile **Critical** · campaignId **P6-GLOBAL-INTEGRATED-PRODUCT-QA-01** · origin/main **`aba6c4a617b6d0cb27f23b59de5bf0ac9360fab1`** · PR **#571** MERGED · CI **#713** SUCCESS · Phase 0 = **COMPLETE / INTEGRATED / POST-MERGE VERIFIED** · GO P6 EXECUTION / GO P6 REAL = **AUTHORIZED / CONSUMED** · Phase 1 = **PASS / REQUALIFIED WITH CURRENT P6 REAL SMOKES** (fresh SMOKE-01/02/03 · browser QUALIFIED · provider CAPTURED · authority profiles CONTROLLED) · prior Phase 2/3/4 evidence = **VALID / REUSED** · Phase 2 scenario disposition + Phase 3 Router-in-situ/discrimination continuation · Phase 5 Human QA batch = **REGENERATING / NOT YET PRIMARY HANDOFF** · P6 PASS = **NOT CLAIMED** · runtime v3 = **NON ADOPTED** · production routing changed = **NO** · branche `qa/sfia-studio-p6-global-integrated-product-qa` · Project push / PR / merge = **NONE** · Next was exhaust AUTO → **MORRIS HUMAN QA BATCH** · **≠** P6 PASS · **≠** runtime v3 ADOPTED |
 | **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P6 MACRO CAMPAIGN EXECUTION** | 2026-10-08 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — prior tip P6 MACRO CAMPAIGN EXECUTION *(true then; Phase-1 smokes later requalified as CURRENT P6 REAL)* · Phase 1 then claimed PASS with P5.S05 historical SMOKE-01 + DET-only SMOKE-03 · superseded by CONTINUATION / REQUALIFICATION tip · campaignId **P6-GLOBAL-INTEGRATED-PRODUCT-QA-01** · origin/main baseline **`aba6c4a617b6d0cb27f23b59de5bf0ac9360fab1`** · PR **#571** MERGED · CI **#713** SUCCESS · GO P6 EXECUTION / GO P6 REAL = **AUTHORIZED / CONSUMED** · P6 STARTED = **YES** · P6 PASS = **NOT CLAIMED** · runtime v3 = **NON ADOPTED** · branche `qa/sfia-studio-p6-global-integrated-product-qa` · Project push / PR / merge = **NONE** |
 | **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P6 QA CONTRACT GIT INTEGRATION** | 2026-10-08 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — prior tip P6 GLOBAL INTEGRATED PRODUCT QA — QA CONTRACT ACCEPTANCE & GIT INTEGRATION *(true then; superseded by PR #571 MERGED + CI #713 + GO P6 EXECUTION/REAL consumed)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **13 — PR readiness / Git Integration** · Profile **Critical** · Typologie **DOC / GOVERNANCE / PR READINESS / GIT INTEGRATION** · Milestone **P6** · Entry main **`1e9d261a252ffb44c73614db5d501cb93ce55d8b`** · PR **#570** MERGED · CI **#711** SUCCESS · P5 COMPLETE = **YES / INTEGRATED / POST-MERGE VERIFIED** · ChatGPT Closure Review = **PASS / CONSUMED** · P6-QA-CONTRACT-01…12 = **CLOSED** · Morris P6 QA Contract Acceptance = **AUTHORIZED / CONSUMED** · Morris P6 QA Contract Git Integration GO = **AUTHORIZED / CONSUMED** · Canonical = `product-simplification/07-chat-first-product-simplification-p6-global-integrated-product-qa.md` · P6 QA CONTRACT = **MORRIS ACCEPTED / GIT INTEGRATION IN PROGRESS** · Phase 0 = **CONTRACT ACCEPTED / READY FOR GIT INTEGRATION** · Campaign strategy = **REAL-FIRST HYBRID** · GO P6 EXECUTION = **NOT AUTHORIZED** · GO P6 REAL — BOUNDED CAMPAIGN = **NOT AUTHORIZED** · P6 READY = **NO** · P6 STARTED = **NO** · runtime v3 = **NON ADOPTED** · entry candidate HEAD = **`29e91b348c1476156365c5d10fc3050823987916`** · branche `audit/sfia-studio-product-completion-p6-global-integrated-qa-qualification` · Project push / Draft PR = **AUTHORIZED THIS CYCLE** · Merge = **NOT AUTHORIZED** · Next then = Draft PR + CI → **MORRIS MERGE REVIEW / MERGE GO** *(superseded by PR #571 MERGED)* · **≠** P6 READY · **≠** P6 STARTED · **≠** GO P6 EXECUTION · **≠** GO P6 REAL · **≠** runtime v3 ADOPTED · **≠** merge |
 | **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P6 QA CONTRACT CORRECTION PASS 02** | 2026-10-08 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — prior tip P6 GLOBAL INTEGRATED PRODUCT QA — CORRECTION PASS 02 / AUTONOMOUS REVIEW FINDINGS CLOSURE *(true then; superseded by ChatGPT Closure Review PASS + Morris Acceptance + Git Integration GO)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Audit projet** · Profile **Critical** · Typologie **DOC / AUDIT / QA CONTRACT / CAMPAIGN DESIGN** · Milestone **P6** · Entry main **`1e9d261a252ffb44c73614db5d501cb93ce55d8b`** · PR **#570** MERGED · CI **#711** SUCCESS · P5 COMPLETE = **YES / INTEGRATED / POST-MERGE VERIFIED** · Morris CP02 GO = **AUTHORIZED / CONSUMED** · ChatGPT Autonomous Review = **STRUCTURALLY SOUND / TARGETED CORRECTIONS REQUIRED** · Canonical = `product-simplification/07-chat-first-product-simplification-p6-global-integrated-product-qa.md` · P6-QA-CONTRACT-01 = **CLOSED** · P6-QA-CONTRACT-02…12 = CLOSED CANDIDATE (then) · later CLOSED by Closure Review · Strategy = **REAL-FIRST HYBRID** · proof axes = AUTO/HUMAN × DETERMINISTIC/REAL-BOUNDARY/END-TO-END-REAL (R21) · GO P6 EXECUTION = **NOT AUTHORIZED** · GO P6 REAL — BOUNDED CAMPAIGN = **NOT AUTHORIZED** · Phase 0 = **CONTRACT CORRECTION COMPLETE CANDIDATE** · Phase 1 = **NOT STARTED** · SMOKE-01/02/03 = mandatory Phase 1 PASS criteria · Human QA Queue · Evidence Ledger contract · Manifest contracts · Router-in-situ vs Controlled Candidate · Cognitive Adjudication · Semantic/CKC coverage · P6 READY = **NO** · P6 STARTED = **NO** · runtime v3 = **NON ADOPTED** · Product/runtime/tests = **NONE** · Provider REAL = **NONE** · Project push/PR/merge = **NONE** · branche `audit/sfia-studio-product-completion-p6-global-integrated-qa-qualification` · Next then = ChatGPT Closure Review *(superseded)* · **≠** P6 READY · **≠** P6 STARTED · **≠** GO P6 EXECUTION · **≠** GO P6 REAL · **≠** runtime v3 ADOPTED |

```


### DIFF vs origin/main — `projects/sfia-studio/convergence/sfia-studio-generic-execution-review-result-architecture.md`

- blob HEAD: `e59426ea15b08f4f9b7c3206449d6cf3d8de25ea`
- status: **M** @ `9ed27ca2`

```diff
diff --git a/projects/sfia-studio/convergence/sfia-studio-generic-execution-review-result-architecture.md b/projects/sfia-studio/convergence/sfia-studio-generic-execution-review-result-architecture.md
index d59f88d2..e59426ea 100644
--- a/projects/sfia-studio/convergence/sfia-studio-generic-execution-review-result-architecture.md
+++ b/projects/sfia-studio/convergence/sfia-studio-generic-execution-review-result-architecture.md
@@ -7,7 +7,7 @@
 | **Rôle documentaire** | **CURRENT ARCHITECTURE REFERENCE** (cible adoptée + cartographie factuelle du code) |
 | **Chaîne couverte** | `GENERIC EXECUTION → EXECUTION REVIEW → EVIDENCE → NORA → RESULT → PILOT` |
 | **Statut** | **ADOPTED TARGET ARCHITECTURE BY MORRIS** — **DOCUMENTARY CANDIDATE PENDING GIT INTEGRATION** |
-| **Décisions datées** | **2026-09-29** (D-ER-01…15) · **Amendement 2026-10-16** (D-ER-16…19 — Nora Tool Invocation) |
+| **Décisions datées** | **2026-09-29** (D-ER-01…15) · **Amendement 2026-10-16** (D-ER-16…19 — Nora Tool Invocation) · **Amendement 2026-10-18** (**D-P6-SHE-01** — SINGLE HUMAN EXECUTE / Option A — amende le séquencement d’autorité de D-ER-18) |
 | **Base main auditée** | `6f47f74dc9b515c4c79624b21772223ba02c76cd` (D-ER-01…15) · amendement ancré sur `896ff59c704bfa76df1da1a51705aaf948c1cf0c` (2026-10-16) |
 | **Qualification épistémique** | Assertions étiquetées : `CURRENT IMPLEMENTED FACT` · `REAL OBSERVATION` · `AUDIT INFERENCE` · `TARGET ARCHITECTURE — ADOPTED BY MORRIS` · `TRANSITIONAL DEBT` · `OPEN DESIGN DETAIL` · `FUTURE PROOF` |
 | **runtime v3** | **NON ADOPTED** |
@@ -57,8 +57,9 @@ Ce document fixe la **référence d’architecture Product** pour le circuit gé
 | --- | --- |
 | Cible architecturale D-ER-01…15 | **TARGET ARCHITECTURE — ADOPTED BY MORRIS** (2026-09-29) — **inchangée** |
 | Amendement Nora Tool Invocation D-ER-16…19 | **TARGET ARCHITECTURE — ADOPTED BY MORRIS** (2026-10-16) — **complète** D-ER-01…15 ; **≠** réécriture historique |
+| Amendement **D-P6-SHE-01** (SINGLE HUMAN EXECUTE / Option A) | **TARGET ARCHITECTURE — ADOPTED BY MORRIS** (2026-10-18) — amende le **séquencement d’autorité** de D-ER-18 ; **≠** réécriture de D-ER-18 historique 2026-10-16 ; **≠** runtime implémenté |
 | Intégration Git de ce document | **DOCUMENTARY CANDIDATE PENDING GIT INTEGRATION** |
-| Implémentation de l’amendement | **EN COURS (Delivery local, non fusionné)** — D-ER-16…19 partiellement implémentés sous Delivery GO ; **NON** pour la cible complète (E8–E11 non prouvés bout-en-bout ; S8 persistence/recovery OPEN ; sortie legacy D-ER-19 partielle) — CURRENT ≠ TARGET |
+| Implémentation de l’amendement | **EN COURS (Delivery local, non fusionné)** — D-ER-16…19 partiellement implémentés sous Delivery GO ; **NON** pour la cible complète (E8–E11 non prouvés bout-en-bout ; S8 persistence/recovery OPEN ; sortie legacy D-ER-19 partielle) ; **D-P6-SHE-01 Delivery NON AUTORISÉ** — CURRENT ≠ TARGET |
 | runtime v3 | **NON ADOPTED** |
 | READY FOR REAL (boucle générique cible) | **NO** |
 | Delivery slicing (lots) | **TBD** — **D-ER-15** |
@@ -636,9 +637,9 @@ Toute proposition de lots = décision Morris ultérieure distincte.

 ### D-ER-18 — Autorité : PREPARE ≠ AUTHORIZE ≠ EXECUTE · Morris D3

-**Tag :** **TARGET ARCHITECTURE — ADOPTED BY MORRIS** (2026-10-16)
+**Tag (historique) :** **TARGET ARCHITECTURE — ADOPTED BY MORRIS** (2026-10-16)

-**Décision :**
+**Décision historique (2026-10-16) — conservée comme trace ; séquencement d’autorité amendé ci-dessous :**

 - **PREPARE ≠ AUTHORIZE ≠ EXECUTE.**
 - **Même** capacité générique pour missions **non structurantes** et **structurantes**.
@@ -651,6 +652,48 @@ Toute proposition de lots = décision Morris ultérieure distincte.

 **Alignement :** D-ER-11 (Claim / Fact / Analysis / Authority) · P2-D-01…04 (Rec≠HD ; SUCCESS≠COMPLETE ; Conf≠HD ; close≠next) — sans promotion doctrine.

+#### Amendement D-P6-SHE-01 (2026-10-18) — SINGLE HUMAN EXECUTE / Option A
+
+**Tag :** **TARGET ARCHITECTURE — ADOPTED BY MORRIS** (2026-10-18) — **≠ CURRENT IMPLEMENTED FACT**
+
+**Décision Morris D-P6-SHE-01 (D1–D10) — amende le séquencement d’autorité de D-ER-18 ; ne réécrit pas rétroactivement l’historique 2026-10-16 :**
+
+| ID | Contenu adopté |
+| --- | --- |
+| D1 | **OPTION A** — adapter le pipeline Generic Execution existant (pas de second moteur / taxonomie). |
+| D2 | **PREPARE** — tout contrat suffisamment décrit peut être préparé et inspecté, structurant ou non, **sans HumanDecision préalable**. |
+| D3 | **INSPECT** — le Pilote consulte le contrat, périmètre, effets et réserves. |
+| D4 | **SINGLE EXECUTE** — une seule action explicite **Exécuter** après inspection constitue l’autorisation Pilote pour la **version précise** du contrat présenté. |
+| D5 | **AUTHORITY** — Studio enchaîne automatiquement les vérifications et transitions OA internes nécessaires avant lancement. |
+| D6 | **NO EXTRA HUMAN CTA** — pas de confirmation humaine supplémentaire après Exécuter pour le **même** contrat inspecté. |
+| D7 | **FAIL CLOSED** — contrat obsolète, autorité insuffisante, ou frontière protégée non autorisée → **STOP** sans lancement Cursor. |
+| D8 | **ARCHITECTURE** — réutiliser OA + Generic Execution ; **aucun** système parallèle. |
+| D9 | **CONSTRUCTION GATES** — décisions Morris de construction / permissions / chemins protégés **≠** autorisation Pilote runtime. |
+| D10 | **MATURITÉ** — cible adoptée ≠ runtime implémenté ; P6 PASS non acquis ; runtime v3 **NON ADOPTED**. |
+
+**Modèle TARGET (D-P6-SHE-01) — ≠ CURRENT IMPLEMENTED :**
+
+```text
+NORA / STUDIO PREPARE  →  PILOT INSPECT  →  PILOT EXECUTE
+  →  PRODUCT ENFORCEMENT (HD / Confirmation / Authorization / currentness / scope / capability — transitions OA distinctes)
+  →  CURSOR (si admissible)  →  EVIDENCE / RESULT
+sinon STOP sans ExecutionAttempt
+```
+
+**Précisions d’autorité (TARGET) :**
+
+- **PREPARE ≠ AUTHORIZE ≠ EXECUTE** demeure ;
+- PREPARE **ne consomme aucune autorité** et **n’exige pas** de HD préalable ;
+- le contrat PREPARE est **inspectable** mais **non autorisé** jusqu’au clic Exécuter admissible ;
+- l’autorité structurelle applicable est vérifiée **avant tout lancement** (pas avant PREPARE) ;
+- HumanDecision enregistrée **uniquement** sur action explicite du Pilote (sujet / version / digest du contrat inspecté) — **aucune HD silencieuse** ;
+- Confirmations restent liées aux **effets exacts** inspectés (ActionPolicy / materiality) — pliage server-side dans le geste Exécuter ≠ suppression sémantique ;
+- currentness, scope, AgentCapability et frontiers protégées revalidés avant Attempt ;
+- Cursor lancé **uniquement** si admissible ; sinon **0 Attempt** ;
+- même expérience UX pour STRUCTURAL / NON_STRUCTURAL / Critical / Standard (matérialité ≠ boutons distincts).
+
+**CURRENT IMPLEMENTED FACT (rappel — ne pas falsifier) :** le runtime et les tests mHd01 / DER16 E12 / G-D4 appliquent encore HD-avant-PREPARE pour STRUCTURAL — voir `production-runtime-reference/07-authority-invariants-and-failure-modes.md` (AS_IMPLEMENTED vs TARGET ADOPTED).
+
 ### D-ER-19 — Sortie progressive des admissions spécialisées · Morris D4

 **Tag :** **TARGET ARCHITECTURE — ADOPTED BY MORRIS** (2026-10-16)

```


### DIFF vs origin/main — `projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md`

- blob HEAD: `df1423465ebbb7808fb100e56c4830357f48c079`
- status: **M** @ `9ed27ca2`

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md b/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
index 7f684d28..df142346 100644
--- a/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
+++ b/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
@@ -1,65 +1,107 @@
 # 07 — Authority Invariants & Failure Modes

-**As-implemented @ `b4aa09bdef29a635e624bb5c396711e75057df4d`**
-
-## Invariant catalog
-
-| ID | Statement | Enforcing code (examples) | Tests |
-|---|---|---|---|
-| INV-REC-NE-HD | Recommendation ≠ HumanDecision | presentation labels; decision services | recommendation-vs-decision tests |
-| INV-HD-NE-CONF | HumanDecision ≠ Confirmation | OA decision vs confirmation aggregates | domain tests |
-| INV-CAP-NE-AUTH | Capability ≠ Authority | EC/authority receipts | execution-contract tests |
-| INV-PROJ-NE-CYCLE | Project ≠ CycleInstance | cycle create/link | cycle tests |
-| INV-MEMB-NE-TRUTHC | Memory B ≠ Truth C | sessionPaths vs product DB | continuity actions |
-| INV-COG-NE-AUTH | Cognition ≠ Authority | intentAnalysis non-authoritative hints | corrProof07/09 |
-| INV-PROP-NE-HD | Proposal ≠ HumanDecision | proposalStore vs recordDecision | F2 tests |
-| INV-EC-NO-EXPAND-WHAT | EC cannot expand DecisionBasis WHAT | execution-contract domain | EC tests |
-| INV-NO-EXEC-BEFORE-AUTH | No execution before effective authority | REAL gates + EC/attempt | launch safety |
-| INV-ARTIFACT-COND | Artifact conditional (applicability) | obligation snapshot + assess | corrProof06 |
-| INV-ATTEMPT-NE-PROVEN | Attempt terminal ≠ Product Result PROVEN | claim/result semantics | evidence-review |
-| INV-SUCCESS-NE-READY | Technical SUCCESS ≠ READY | result disclosures | journey integrity |
-| INV-FAKE-REAL-SM | Fake/Real share product state machine at boundary | provider boundary + server gates | Fake/Real tests |
-| INV-PROP-NOT-SOLE-RESTART | Proposal process-local ≠ sole restart authority | proposalStore notice | journey integrity |
-| INV-OLD-CYCLE-HD | Old-cycle HD ≠ current-cycle authority | `hasCurrentRequireArtifactObligation` subject scoping | corrProof07 T13/CR05-B |
-| INV-UNKNOWN-NE-APPLICABLE | UNKNOWN ≠ APPLICABLE | assessFinalization / bridge gate | bridge CORR-01 T4 |
-| INV-NO-SILENT-REPLAN | No silent replan | replan guards | replan tests |
-| INV-NO-SILENT-HD | No silent/auto HumanDecision | recordDecision only on Pilot action | bridge T2 |
-| INV-NO-V3-ADOPT | No automatic runtime v3 adoption | docs + absence of adoption flags | this corpus |
-| INV-APPLICABILITY-NE-AUTHORITY | Artifact APPLICABLE ≠ execution authorized | activeCycleGovernedContinuation bridge | bridge CORR-01 |
-| INV-OFFER-NE-AUTH | Pending Generic PREPARE offer ≠ Authorization | pendingGenericPrepareOfferStore + prepare gates | DER16 / M-HD / G-D4 |
-| INV-INSPECT-NE-CONFIRM | Inspection ≠ Confirmation | unified exam + confirm services | Pass03/04 UIC |
-| INV-CONFIRM-NE-AUTH | Confirmation ≠ Authorization | authorize* services | authorizeGeneric / confirmForAuthorization |
-| INV-AUTH-NE-EXEC | Authorization ≠ Execution | governedExecute Select/Start | projectScopedCursorSelection |
-| INV-EMPTY-REFS-NE-STRUCTURAL | `decisionRefs=[]` admissible only when NON_STRUCTURAL CURRENT gates allow | Option 1 / G-D4 + materiality | p6.o1 / gD4 / materialityBlock01 |
-| INV-STRUCTURAL-NEEDS-VERIFIED-HD | Structural mission PREPARE requires verified mission-bound HD | verifyGenericMissionHumanDecisionForPrepare | mHd01 / DER16 E12 |
-| INV-STRUCTURAL-PREPARE-REQUIRES-ACCEPTED-HD | STRUCTURAL PREPARE requires **accepted**, applicable, verified, mission-bound, non-superseded HD — Refuse (`HD_REFUSED`) and Amend (`HD_AMEND_REQUIRES_NEW_PRESENTATION`) are not prepare paths; Accept alone ≠ Execute | verifyGenericMissionHumanDecisionForPrepare | mHd01 (incl. refuse/amend cases) / DER16 |
-| INV-PATHLESS-NEEDS-POSITIVE-NONMUTATING | Pathless NON_STRUCTURAL requires **one** positive structured non-mutating claim: `intentKind=read_only` **OR** `repositoryMutationDeclared ∈ {none,read}` (plus other Product gates). `unknown`/`write` always refuse. `repositoryMutation` **absent** refuses **only when** `read_only` is also absent — absence alone does not invalidate an admissible `read_only` claim | qualifyBoundedNonMutatingAnalysisMission | toolFirst A–J / safetyClosureR1R2 |
-| INV-STAMP-NE-REAL-NOWRITE | Contract `NO_REPOSITORY_MUTATION_*` / bounded analysis stamp ≠ Cursor REAL technical no-write | boundedNonMutatingRealLaunchGate + generalist REAL launch | safetyClosureR1R2 |
-| INV-R2-REAL-PATHLESS-BLOCK | Pathless non-mutating + `SFIA_STUDIO_CURSOR_REAL=1` → Product gate `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` on **both** Select and Start (distinct effects — see R2 note) | assertBoundedNonMutatingCursorRealAdmissible | safetyClosureR1R2 |
-| INV-INSPECT-NE-EXECUTE-CTA | Inspection attestation ≠ Execute; Tool-First Exécuter may fold Confirm server-side after attest only | pilotExecutionPresentation / ExecutionSurface | durable continuity / R02 |
-
-## Dual admission paths — authority summary (AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION)
-
-**Chemin A — STRUCTURAL:** mission signals / HD-required materiality → process-local presentation carrier → Pilot disposition:
+**As-implemented @ `b4aa09bdef29a635e624bb5c396711e75057df4d`** (baseline documentaire historique)
+
+**Amendement documentaire D-P6-SHE-01 (2026-10-18) :** ce volume distingue désormais **CURRENT IMPLEMENTED** (comportement code / tests) et **TARGET ADOPTED** (SINGLE HUMAN EXECUTE / Option A). TARGET ≠ IMPLEMENTED. Aucun test actuel ne prouve les invariants TARGET.
+
+## Invariant catalog — CURRENT IMPLEMENTED
+
+| ID | Statement | Enforcing code (examples) | Tests | Epistemic |
+|---|---|---|---|---|
+| INV-REC-NE-HD | Recommendation ≠ HumanDecision | presentation labels; decision services | recommendation-vs-decision tests | CURRENT IMPLEMENTED |
+| INV-HD-NE-CONF | HumanDecision ≠ Confirmation | OA decision vs confirmation aggregates | domain tests | CURRENT IMPLEMENTED |
+| INV-CAP-NE-AUTH | Capability ≠ Authority | EC/authority receipts | execution-contract tests | CURRENT IMPLEMENTED |
+| INV-PROJ-NE-CYCLE | Project ≠ CycleInstance | cycle create/link | cycle tests | CURRENT IMPLEMENTED |
+| INV-MEMB-NE-TRUTHC | Memory B ≠ Truth C | sessionPaths vs product DB | continuity actions | CURRENT IMPLEMENTED |
+| INV-COG-NE-AUTH | Cognition ≠ Authority | intentAnalysis non-authoritative hints | corrProof07/09 | CURRENT IMPLEMENTED |
+| INV-PROP-NE-HD | Proposal ≠ HumanDecision | proposalStore vs recordDecision | F2 tests | CURRENT IMPLEMENTED |
+| INV-EC-NO-EXPAND-WHAT | EC cannot expand DecisionBasis WHAT | execution-contract domain | EC tests | CURRENT IMPLEMENTED |
+| INV-NO-EXEC-BEFORE-AUTH | No execution before effective authority | REAL gates + EC/attempt | launch safety | CURRENT IMPLEMENTED |
+| INV-ARTIFACT-COND | Artifact conditional (applicability) | obligation snapshot + assess | corrProof06 | CURRENT IMPLEMENTED |
+| INV-ATTEMPT-NE-PROVEN | Attempt terminal ≠ Product Result PROVEN | claim/result semantics | evidence-review | CURRENT IMPLEMENTED |
+| INV-SUCCESS-NE-READY | Technical SUCCESS ≠ READY | result disclosures | journey integrity | CURRENT IMPLEMENTED |
+| INV-FAKE-REAL-SM | Fake/Real share product state machine at boundary | provider boundary + server gates | Fake/Real tests | CURRENT IMPLEMENTED |
+| INV-PROP-NOT-SOLE-RESTART | Proposal process-local ≠ sole restart authority | proposalStore notice | journey integrity | CURRENT IMPLEMENTED |
+| INV-OLD-CYCLE-HD | Old-cycle HD ≠ current-cycle authority | `hasCurrentRequireArtifactObligation` subject scoping | corrProof07 T13/CR05-B | CURRENT IMPLEMENTED |
+| INV-UNKNOWN-NE-APPLICABLE | UNKNOWN ≠ APPLICABLE | assessFinalization / bridge gate | bridge CORR-01 T4 | CURRENT IMPLEMENTED |
+| INV-NO-SILENT-REPLAN | No silent replan | replan guards | replan tests | CURRENT IMPLEMENTED |
+| INV-NO-SILENT-HD | No silent/auto HumanDecision | recordDecision only on Pilot action | bridge T2 | CURRENT IMPLEMENTED |
+| INV-NO-V3-ADOPT | No automatic runtime v3 adoption | docs + absence of adoption flags | this corpus | CURRENT IMPLEMENTED |
+| INV-APPLICABILITY-NE-AUTHORITY | Artifact APPLICABLE ≠ execution authorized | activeCycleGovernedContinuation bridge | bridge CORR-01 | CURRENT IMPLEMENTED |
+| INV-OFFER-NE-AUTH | Pending Generic PREPARE offer ≠ Authorization | pendingGenericPrepareOfferStore + prepare gates | DER16 / M-HD / G-D4 | CURRENT IMPLEMENTED |
+| INV-INSPECT-NE-CONFIRM | Inspection ≠ Confirmation | unified exam + confirm services | Pass03/04 UIC | CURRENT IMPLEMENTED |
+| INV-CONFIRM-NE-AUTH | Confirmation ≠ Authorization | authorize* services | authorizeGeneric / confirmForAuthorization | CURRENT IMPLEMENTED |
+| INV-AUTH-NE-EXEC | Authorization ≠ Execution | governedExecute Select/Start | projectScopedCursorSelection | CURRENT IMPLEMENTED |
+| INV-EMPTY-REFS-NE-STRUCTURAL | `decisionRefs=[]` admissible only when NON_STRUCTURAL CURRENT gates allow | Option 1 / G-D4 + materiality | p6.o1 / gD4 / materialityBlock01 | CURRENT IMPLEMENTED — **superseded for TARGET** by D-P6-SHE-01 (see TARGET catalog) |
+| INV-STRUCTURAL-NEEDS-VERIFIED-HD | Structural mission PREPARE requires verified mission-bound HD | verifyGenericMissionHumanDecisionForPrepare | mHd01 / DER16 E12 | CURRENT IMPLEMENTED — **superseded for TARGET** by D-P6-SHE-01 |
+| INV-STRUCTURAL-PREPARE-REQUIRES-ACCEPTED-HD | STRUCTURAL PREPARE requires **accepted**, applicable, verified, mission-bound, non-superseded HD — Refuse (`HD_REFUSED`) and Amend (`HD_AMEND_REQUIRES_NEW_PRESENTATION`) are not prepare paths; Accept alone ≠ Execute | verifyGenericMissionHumanDecisionForPrepare | mHd01 (incl. refuse/amend cases) / DER16 | CURRENT IMPLEMENTED — **superseded for TARGET** by D-P6-SHE-01 |
+| INV-PATHLESS-NEEDS-POSITIVE-NONMUTATING | Pathless NON_STRUCTURAL requires **one** positive structured non-mutating claim: `intentKind=read_only` **OR** `repositoryMutationDeclared ∈ {none,read}` (plus other Product gates). `unknown`/`write` always refuse. `repositoryMutation` **absent** refuses **only when** `read_only` is also absent — absence alone does not invalidate an admissible `read_only` claim | qualifyBoundedNonMutatingAnalysisMission | toolFirst A–J / safetyClosureR1R2 | CURRENT IMPLEMENTED |
+| INV-STAMP-NE-REAL-NOWRITE | Contract `NO_REPOSITORY_MUTATION_*` / bounded analysis stamp ≠ Cursor REAL technical no-write | boundedNonMutatingRealLaunchGate + generalist REAL launch | safetyClosureR1R2 | CURRENT IMPLEMENTED |
+| INV-R2-REAL-PATHLESS-BLOCK | Pathless non-mutating + `SFIA_STUDIO_CURSOR_REAL=1` → Product gate `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` on **both** Select and Start (distinct effects — see R2 note) | assertBoundedNonMutatingCursorRealAdmissible | safetyClosureR1R2 | CURRENT IMPLEMENTED |
+| INV-INSPECT-NE-EXECUTE-CTA | Inspection attestation ≠ Execute; Tool-First Exécuter may fold Confirm server-side after attest only | pilotExecutionPresentation / ExecutionSurface | durable continuity / R02 | CURRENT IMPLEMENTED (partial fold Confirm ; TARGET étend le fold) |
+
+## Dual admission paths — CURRENT IMPLEMENTED (AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION)
+
+**Chemin A — STRUCTURAL (CURRENT):** mission signals / HD-required materiality → process-local presentation carrier → Pilot disposition:
 - **Accept** → durable HD `accepted` → verify basis/identity/mission/digest/CURRENT/non-superseded → PREPARE (refs verified) → inspect → Confirm (if required) → Authorize → Execute.
 - **Refuse** → HD refused → PREPARE forbidden (`HD_REFUSED`); no Authorization; no Attempt.
 - **Amend** → new presentation required → PREPARE forbidden (`HD_AMEND_REQUIRES_NEW_PRESENTATION`) until a new accepted applicable HD.
 No artificial HD. Structural offer alone does not PREPARE. Unbound historical HD does not unlock a different mission. Accept alone ≠ Execute.

-**Chemin B — NON_STRUCTURAL:** Materiality CURRENT NON_STRUCTURAL → PREPARE with `decisionRefs=[]` iff Product gates admit → inspect → Confirm (if required) → Authorize → Execute. OA Confirm/Authorize gates remain. UNKNOWN → fail-closed. **Tool-First R1:** pathless admission requires a positive non-mutating claim (INV-PATHLESS-NEEDS-POSITIVE-NONMUTATING) **and** complementary Product gates (live context, envelope, no write/docs_write/structural/elevated contradiction). Declaration alone ≠ Product authority. No invented file path; no systematic HD.
+**Chemin B — NON_STRUCTURAL (CURRENT):** Materiality CURRENT NON_STRUCTURAL → PREPARE with `decisionRefs=[]` iff Product gates admit → inspect → Confirm (if required) → Authorize → Execute. OA Confirm/Authorize gates remain. UNKNOWN → fail-closed. **Tool-First R1:** pathless admission requires a positive non-mutating claim (INV-PATHLESS-NEEDS-POSITIVE-NONMUTATING) **and** complementary Product gates (live context, envelope, no write/docs_write/structural/elevated contradiction). Declaration alone ≠ Product authority. No invented file path; no systematic HD.

-**Tool-First ordinary CTA:** after Inspect attest, Pilot **Exécuter** may carry Confirm (server) then Authorize+launch — Inspect ≠ Execute; Confirm ≠ Authorize ≠ Execute remain.
+**Tool-First ordinary CTA (CURRENT):** after Inspect attest, Pilot **Exécuter** may carry Confirm (server) then Authorize+launch — Inspect ≠ Execute; Confirm ≠ Authorize ≠ Execute remain.

 **R2 REAL pathless (Select ≠ Start effects):** when REAL is armed for a pathless non-mutating EC:
 - **Select:** gate fires **before** creating a new ExecutionAttempt — no Select-accepted Attempt; no Cursor REAL call.
 - **Start:** if an Attempt already exists in `accepted` (e.g. created under Fake/DET), gate re-evaluates and **refuses Start** — Attempt remains `accepted` (not `running`); launch-port call count unchanged; no Cursor REAL effect.
 Fake/DET (`CURSOR_REAL≠1`) remains admissible for both phases. Ordinary write / concrete-path contracts are not blocked by this gate.

-**Separations (KEEP):** Recommendation ≠ HD; Offer ≠ Authorization; HD ≠ Confirmation; Inspection ≠ Confirmation; Confirmation ≠ Authorization; Authorization ≠ Execution; Attempt terminal ≠ Product SUCCESS PROVEN; Stamp ≠ REAL no-write.
+**Separations (KEEP — CURRENT et TARGET):** Recommendation ≠ HD; Offer ≠ Authorization; HD ≠ Confirmation; Inspection ≠ Confirmation; Confirmation ≠ Authorization; Authorization ≠ Execution; Attempt terminal ≠ Product SUCCESS PROVEN; Stamp ≠ REAL no-write.

 **CURRENT revalidation:** when Product material facts change, Materiality / applicability / presentation digest must be re-checked before PREPARE resume — do not invent currentness rules beyond candidate `resolveAuthoritativeProductMateriality` + HD verify. Restart: process-local offer loss ≠ universal PREPARE ban when durable accepted HD remains verifiable (see vol 06 / HD11).

-## Failure modes (selected)
+---
+
+## TARGET ADOPTED — D-P6-SHE-01 (2026-10-18) — SINGLE HUMAN EXECUTE / Option A
+
+**Tag :** **TARGET ARCHITECTURE — ADOPTED BY MORRIS** · **≠ CURRENT IMPLEMENTED** · **≠ proven by existing tests**
+
+Les invariants CURRENT `INV-STRUCTURAL-NEEDS-VERIFIED-HD`, `INV-STRUCTURAL-PREPARE-REQUIRES-ACCEPTED-HD`, et la contrainte PREPARE de `INV-EMPTY-REFS-NE-STRUCTURAL` restent la **vérité as-implemented** et la base des tests mHd01 / DER16 / G-D4 jusqu’à Delivery. Pour la **cible adoptée**, leur **timing PREPARE** est superseded comme suit (l’exigence d’autorité structurelle avant **lancement** demeure).
+
+### Target invariant catalog (Exit Proof future — Delivery GO distinct)
+
+| ID | Statement (TARGET) | Future proof owner |
+|---|---|---|
+| INV-SHE-PREPARE-NO-AUTHORITY | PREPARE ne consomme aucune autorité ; ne crée ni Attempt ni Authorization | Delivery SHE + DET A/C |
+| INV-SHE-STRUCTURAL-INSPECTABLE | STRUCTURAL / UNKNOWN n’interdit pas PREPARE ni inspection d’un contrat honnêtement stampé | Delivery SHE + DET C/E |
+| INV-SHE-AUTHORITY-BEFORE-LAUNCH | Autorité structurelle / effective vérifiée **avant** tout lancement Cursor (pas avant PREPARE) | Delivery SHE + DET C/O |
+| INV-SHE-EXECUTE-BINDS-INSPECTED | Le clic Exécuter est lié au contrat inspecté (id + version + semantic fingerprint) | Delivery SHE + DET F |
+| INV-SHE-NO-SILENT-HD | Aucune HumanDecision silencieuse ; HD uniquement sur action Pilote explicite (sujet/version/digest) | Delivery SHE + DET C |
+| INV-SHE-NO-EXEC-WITHOUT-EFFECTIVE-AUTH | Aucune exécution sans autorité effective ; 0 Attempt si gate pré-lancement échoue | Delivery SHE + DET O/Q |
+| INV-SHE-NO-AUTO-ELEVATION | Aucune élévation automatique de capacité / permission / chemin protégé | Delivery SHE + DET I/J |
+| INV-SHE-UNKNOWN-BLOCKS-NONADMISSIBLE | UNKNOWN / matérialité non admissible interdit l’exécution (fail-closed) | Delivery SHE + DET E/O |
+| INV-SHE-STALE-CONTRACT-BLOCKS | Exécution refusée sur contrat obsolète (version/fp/currentness) | Delivery SHE + DET F/G/H |
+| INV-SHE-IDEMPOTENT-EXECUTE | Double-clic / retry / restart : idempotence Attempt ; pas de second Cursor silencieux | Delivery SHE + DET L/M/N |
+| INV-SHE-SINGLE-UX-PATH | Même parcours UX STRUCTURAL / NON_STRUCTURAL (matérialité ≠ boutons distincts) | Delivery SHE + UI |
+| INV-SHE-NO-EXTRA-HUMAN-CTA | Pas de confirmation humaine supplémentaire après Exécuter pour le même contrat inspecté (Confirm/HD restent transitions OA internes) | Delivery SHE + DET K |
+
+**Chemin TARGET unique (remplace la dualité UX A/B) :**
+
+```text
+PREPARE (inspectable, decisionRefs peuvent être vides en proposition)
+→ INSPECT (attestation)
+→ EXECUTE (seul clic)
+→ HD applicable? + Confirm applicable? + Authorize + launch gates (interne)
+→ Cursor SI admissible
+sinon STOP · 0 Attempt
+```
+
+**Dette OPEN (inchangée) :** TOOL-FIRST-REAL-NOWRITE-ENFORCEMENT — non résolue par D-P6-SHE-01.
+
+---
+
+## Failure modes (selected) — CURRENT IMPLEMENTED

 | Code/State | Layer | Trigger | User effect | Mutations | Fail-closed |
 |---|---|---|---|---|---|
@@ -78,3 +120,5 @@ Fake/DET (`CURSOR_REAL≠1`) remains admissible for both phases. Ordinary write
 | Session path orphan | Memory B | worktree cwd default | empty transcript UI | Truth C intact | operational |

 Governance STOP ≠ product defect: blocked continuation for UNKNOWN Artifact is **expected**.
+
+**Note TARGET :** sous D-P6-SHE-01, certains refus aujourd’hui placés au PREPARE (ex. STRUCTURAL sans HD) doivent devenir refus au **Execute** après proposition inspectable — Exit Proof Delivery, pas claim actuel.

```


### DIFF vs origin/main — `projects/sfia-studio/sfia-v3-framing/30-knowledge-context-human-decision-doctrine.md`

- blob HEAD: `a670420983de0cb4425ffb135e6505b053fe578d`
- status: **M** @ `9ed27ca2`

```diff
diff --git a/projects/sfia-studio/sfia-v3-framing/30-knowledge-context-human-decision-doctrine.md b/projects/sfia-studio/sfia-v3-framing/30-knowledge-context-human-decision-doctrine.md
index b2d122e2..a6704209 100644
--- a/projects/sfia-studio/sfia-v3-framing/30-knowledge-context-human-decision-doctrine.md
+++ b/projects/sfia-studio/sfia-v3-framing/30-knowledge-context-human-decision-doctrine.md
@@ -34,15 +34,21 @@ intention utilisateur
 → continuité sémantique inter-session (sans transcript exhaustif requis)
 → ProjectTrajectory (MUST produit ; recommandation jusqu'à validation)
 → options et recommandation
-→ HumanDecision du Pilote
-→ confirmation proportionnée (N1–N3)
-→ Execution Contract
-→ agent / Cursor / Runtime
+→ HumanDecision du Pilote (trajectoire / vérité Project structurelle — gates propres)
+→ [Generic Execution — amendement D-P6-SHE-01 / 2026-10-18 — TARGET]
+     PREPARE ExecutionContract (sans HD préalable obligatoire)
+     → INSPECT
+     → action Exécuter (autorisation Pilote du contrat inspecté)
+     → HD / Confirmation / Authorization internes (transitions OA distinctes, proportionnées N1–N3)
+     → enforcement (autorité effective / currentness / scope / capability)
+     → agent / Cursor / Runtime SI admissible
 → preuves et ReviewBundle
 → mise à jour de l'état
 → replanification ou capitalisation
 ```

+**Amendement D-P6-SHE-01 (2026-10-18) — TARGET ARCHITECTURE — ADOPTED BY MORRIS :** pour **Generic Execution** uniquement, la séquence PREPARE → INSPECT → Exécuter précède l’enregistrement des HD/Confirmations **applicables au contrat**. Cela **n’applique pas** indistinctement aux décisions de trajectoire. Cible ≠ runtime implémenté.
+
 ## 3. V3-F01 — CKC comme couche cognitive canonique (VALIDATED)

 ### Définition
@@ -89,9 +95,11 @@ Alignement **décisions UX validées** (2026-07-23) :
 **Règles :**

 - aucune mutation implicite ;
-- Execution Contract **uniquement** après décisions nécessaires ;
+- **Trajectoire / vérité Project :** HumanDecision explicite lorsque structurante (KEEP) — Recommendation ≠ Decision ;
+- **Generic Execution (D-P6-SHE-01 TARGET) :** PREPARE d’un ExecutionContract inspectable **sans** HD préalable obligatoire ; le clic **Exécuter** sur le contrat inspecté est l’acte explicite du Pilote ; HD/Confirmation/Authorization restent des transitions OA distinctes **avant** lancement ; confirmations N1–N3 proportionnées aux effets (pliables server-side, non supprimées) ; autonomie bornée ; aucune élévation implicite ;
 - phrase conversationnelle ≠ gate ;
-- Composer libre toujours disponible hors modal stricte.
+- Composer libre toujours disponible hors modal stricte ;
+- TARGET ≠ IMPLEMENTED — runtime v3 **NON ADOPTED**.

 ## 5. Architecture doctrinale — 7 couches


```


### DIFF vs origin/main — `projects/sfia-studio/sfia-v3-framing/34-agent-capabilities-reversibility-and-execution-governance.md`

- blob HEAD: `1a0cda9833126d6a677f4d85691c623856725a78`
- status: **M** @ `9ed27ca2`

```diff
diff --git a/projects/sfia-studio/sfia-v3-framing/34-agent-capabilities-reversibility-and-execution-governance.md b/projects/sfia-studio/sfia-v3-framing/34-agent-capabilities-reversibility-and-execution-governance.md
index 0d81a361..1a0cda98 100644
--- a/projects/sfia-studio/sfia-v3-framing/34-agent-capabilities-reversibility-and-execution-governance.md
+++ b/projects/sfia-studio/sfia-v3-framing/34-agent-capabilities-reversibility-and-execution-governance.md
@@ -42,6 +42,8 @@ valid human authorization

 Aucune couche n’élargit seule l’autorité. Un exécuteur insuffisant déclenche `SC-CAP` → STOP / escalation honnête.

+**Amendement D-P6-SHE-01 (2026-10-18) — TARGET (Generic Execution) :** l’autorité effective est évaluée au **clic Exécuter** (après inspection du contrat), pas à PREPARE. ActionPolicy / Confirmations N1–N3 restent liées aux **effets** ; elles peuvent être consommées en transitions OA internes dans le geste Exécuter — **sans** CTA humain redondant et **sans** suppression sémantique. Aucune élévation de capacité. Gates Morris de construction (push/PR/merge/doctrine/baseline) demeurent distincts. TARGET ≠ IMPLEMENTED.
+
 **Interdit :** L5 décisionnel global · décision Morris automatisée · élargissement via CKC · chargement doctrine v2.6 comme capacité de lecture produit.

 ## 2. V3-F12 — Taxonomie des actions et réversibilité (VALIDATED)

```


### DIFF — `projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json` @ `a21c4845`

```diff
commit a21c484511d46469dc28222dc28f7e26859b3df2
Author: Morris Cleland <morris@macbook-air.home>
Date:   Sun Oct 18 23:00:44 2026 +0200

    docs(studio): align P6 Option B PRR conformance digests

    Refresh sha256_16 for volume 07 and tracked orchestrateF2/orchestrateTurn
    after CAS A semantic KEEP — no new PRR prose; schema/kind/lastReviewed unchanged.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
index 25fc31fb..2d1e2baf 100644
--- a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
+++ b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
@@ -35,7 +35,7 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md",
-      "sha256_16": "dcf49d984f2668da"
+      "sha256_16": "8ea3d088c5095108"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md",
@@ -582,11 +582,11 @@
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts",
-      "sha256_16": "4024ae1078c6f4da"
+      "sha256_16": "f20d8d4a2663d756"
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts",
-      "sha256_16": "bf17440e75fd1d6a"
+      "sha256_16": "73d754838d9d13a0"
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts",

```


---

## M. Réserves

1. F04 PRR prose does not yet name Option B queue/finalize timing (precision debt; not authority falsehood).
2. New coordinators / `p6.arch.*` tests not in `trackedSources`/`trackedTests` (intentional; GO forbids arbitrary adds).
3. Local full Vitest fails if HQA `SFIA_STUDIO_PRODUCT_DB_PATH` or `SFIA_STUDIO_CURSOR_REAL=1` pollute env — environmental, not Product defect.
4. Prior handoff `c1816e40` was synthesis-thin — this pack regularizes Full content.
5. SHE TARGET documented ≠ SHE IMPLEMENTED.
6. HQA Generic PREPARE LIVE still blocked CURRENT.
7. `lastReviewedCommit` left at `9b9cd5e5` (prior Product baseline) — digests refreshed without fabricating a future review stamp.

## N. Dette

- TOOL-FIRST-REAL-NOWRITE-ENFORCEMENT: **OPEN**
- Optional future PRR overlay naming Option B modules / same-turn finalize: OPEN (non-blocking)

## O. Gates Morris restants

1. ChatGPT Critical PR Review of this handoff + PR HEAD `a21c4845`
2. CI Required Gate SUCCESS on new run (must be verified)
3. Morris Merge Gate distinct — **not** this GO
4. Delivery Single Human Execute — distinct GO after integration
5. HQA / DET LIVE proofs — distinct GO
6. No automatic merge / SHE / P6 PASS / v3

## P. Verdict (local at pack finalization)

See closing verdict after CI section.

## Q. Instruction ChatGPT

Lire `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`.

Vérifier: PR HEAD `a21c4845`; cycle 13 CRITICAL; GO Morris; matrice CAS A; digests 3; no Product code in corrective commit; CURRENT vs TARGET; tests 6183 PASS clean; CI; SHA/blob handoff; réserves/dette.

Après revue: verdict Critical. Ne jamais autoriser automatiquement MERGE / Delivery SHE / HQA / P6 PASS / RUNTIME V3 ADOPTED.

---

## R. CI nouvelle (filled at finalize)

### CI run `39165909873` @ HEAD `a21c484511d46469dc28222dc28f7e26859b3df2`

URL: https://github.com/mcleland147/sfia-workspace/actions/runs/39165909873

| Job / Step | Conclusion |
|---|---|
| Detect SFIA Studio changes | SUCCESS |
| Typecheck | SUCCESS |
| Lint | SUCCESS |
| Build | SUCCESS |
| Unit tests (Vitest) | SUCCESS |
| Modeled governance tests | SUCCESS |
| Secret pattern scan (targeted) | SUCCESS |
| Trailing whitespace check | SUCCESS |
| SFIA Studio Required Gate | SUCCESS |

Workflow conclusion: **success**


---

## S. Closing verdict

**PR #589 — PRR SEMANTIC CONFORMANCE PASS — REVIEW HANDOFF REGULARIZED — CI SUCCESS — READY FOR CHATGPT CRITICAL PR REVIEW.**

NOT MERGED. NOT SHE IMPLEMENTED. NOT GENERIC PREPARE LIVE PASS. NOT P6 GLOBAL PASS. NOT runtime v3 ADOPTED.
