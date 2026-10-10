# SFIA Review Pack — FULL
# P6-HQA-02 — REC-01 — OPTION B DELIVERY
# Structured Work Recommendation Materialization Contract (template v2.6 §7.5)

## Meta
- Date / heure : **2026-10-10 19:30:08 CEST** (Europe/Paris)
- Macro : STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
- Campagne : P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
- Lot : **P6-HQA-02 — REC-01 Option B Structured Materialization Contract**
- Milestone : P6 — Global Integrated Product QA / Phase 5 Human QA
- Cycle projet : **8 — Delivery / implémentation**
- Profil : **Critical**
- Typologie : EVOL — évolution corrective prospective
- Capacités : V3-F05, V3-F04, V3-F02, V3-F14
- GO Morris : **Option B VALIDÉE + GO DELIVERY LOCALE BORNÉE**
- Commit / push / PR / merge projet : **NON**
- P6 GLOBAL PASS : **NO**
- Runtime v3 ADOPTED : **NO**
- Synthesis only : **no**
- Base main / HEAD worktree : `8ed61737df30db270bf871eedad1535020fd1c11`
- Branche : `fix/studio-p6-hqa-02-work-recommendation-materialization`
- Review Handoff précédent : `091f712af870c0eeb5ccf55286d03932d269deba` (Corrective Pass 01)

---

## 1. Local Git Truth Check

| Check | Result |
|-------|--------|
| Worktree | `/Users/morris/Projects/sfia-workspace-p6-hqa-02` |
| Branche | `fix/studio-p6-hqa-02-work-recommendation-materialization` |
| HEAD | `8ed61737df30db270bf871eedad1535020fd1c11` |
| origin/main | `8ed61737df30db270bf871eedad1535020fd1c11` |
| HEAD == origin/main | **YES** |
| Staged | **vide** |
| Commit projet | **aucun** |
| Candidate HQA-02 + Corrective Pass 01 | **préservée et étendue Option B** |

### `git status --short`

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/oa/cycle/corrProof06.artifactObligation.d0.test.ts
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/chatFirstGovernedDecisionLoop.ui.test.tsx
 M projects/sfia-studio/app/__tests__/project-assistant/activeCycleCognitiveWork.d0.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/noraConversationalInitiative.d0.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/pilotNoraStudioSemanticContinuity.corr02.c2ProductTurn.d0.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/pilotNoraStudioSemanticContinuity.d0.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/studioCognitiveContext.test.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.tsx
 M projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
 M projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts
 M projects/sfia-studio/app/features/project-assistant/materializeActiveCycleWork.ts
 M projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
 M projects/sfia-studio/app/lib/oa/cycle/index.ts
?? projects/sfia-studio/app/__tests__/oa/cycle/qualifyProspectiveWorkRecommendationMaterialization.d0.test.ts
?? projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.hqa.uxrec02.journalDisclaimer.ui.test.tsx
?? projects/sfia-studio/app/__tests__/project-assistant/p6.hqa.rec01.optionB.workRecommendationsContext.d0.test.ts
?? projects/sfia-studio/app/lib/oa/cycle/application/qualifyProspectiveWorkRecommendationMaterialization.ts
```

### `git diff --stat`

```
 .tmp-sfia-review/chatgpt-review.md                 | 1512 ++++++++++++++++++--
 .../corrProof06.artifactObligation.d0.test.ts      |    4 +
 .../chatFirstGovernedDecisionLoop.ui.test.tsx      |   10 +-
 .../activeCycleCognitiveWork.d0.test.ts            |    9 +
 .../noraConversationalInitiative.d0.test.ts        |    3 +
 ...anticContinuity.corr02.c2ProductTurn.d0.test.ts |    9 +
 .../pilotNoraStudioSemanticContinuity.d0.test.ts   |    6 +
 .../studioCognitiveContext.test.ts                 |    8 +
 .../pre-m6-product-ui/surfaces/JournalSurface.tsx  |   10 +-
 .../project-assistant/buildProjectSystemPrompt.ts  |   15 +
 .../project-assistant/f2/studioCognitiveContext.ts |  130 +-
 .../materializeActiveCycleWork.ts                  |   41 +-
 .../features/project-assistant/orchestrateTurn.ts  |   38 +-
 .../noraProductTurnOutputType.ts                   |   94 +-
 projects/sfia-studio/app/lib/oa/cycle/index.ts     |   11 +
 15 files changed, 1746 insertions(+), 154 deletions(-)
```

### `git diff --cached --stat`

```
(empty)
```

---

## 2. GO Morris / Qualification SFIA

- Option B VALIDÉE (trackingRationale, relationKind, relatedRecommendationRef, couverture COMPLETE/PARTIAL/UNAVAILABLE, résolution Studio, abstention incertitude).
- GO DELIVERY LOCALE BORNÉE uniquement.
- Aucun GO commit/push/PR/merge/migration/doctrine/architecture/v3.
- Profil **Critical** : aucun arbitrage architectural implicite.
- Handoff L3 v2.6 autorisé.

---

## 3. Sources / Convergence Pre-check

Sources lues : Build Doctrine · Roadmap · C1 · P2/P3/P4/P6 · doctrine 30/33 · template v2.6 · routing · handoff `091f712a`.

| Item | Status |
|------|--------|
| Build Doctrine | VALIDATED / ACTIVE ON MAIN |
| Roadmap P6 | applicable |
| C1 | VALIDATED |
| P2 | VALIDATED |
| P6 Human QA | IN PROGRESS |
| P6 GLOBAL PASS | NO |
| runtime v3 | NON ADOPTED |

Actifs : conversationGuidance KEEP · activeCycleWork ADAPT · studioCognitiveContext ADAPT · Epistemic/LPS KEEP · materialize KEEP/ADAPT min · filtre lexical REPLACE · UX-REC-02 KEEP · REC-02 RESERVED.

CKC Cycle 8 : fallback synthétique.

---

## 4. État initial de la candidate

Candidate P6-HQA-02 locale avec :
- Corrective Pass 01 (fail-closed polarité/ordre, invites, sourceIndexes) ;
- UX-REC-02 PASS ;
- filtre lexical REC-01 encore responsable de la qualification métier.

ChatGPT / Morris : Option B requise — remplacer la responsabilité de qualification lexicale par un contrat structuré.

---

## 5. Contrat Nora — avant / après

### Avant
Recommendation ACW : `type`, `statement`, `confidence`, `blocking`, `recommendedOptionRef` seulement.
Qualification Studio : heuristiques lexicales (Jaccard / tokens / invites).

### Après (Option B — Recommendation-only, strict schema)
Champs requis sur la branche Recommendation de `NORA_ACTIVE_CYCLE_WORK_ITEM_SCHEMA` :
- `trackingRationale` : string
- `relationKind` : NEW | ALREADY_COVERED | DISTINCT_RELATED | CONTRADICTORY | UNCERTAIN
- `relatedRecommendationRef` : string | null (forme `epi:…`)

Autres types ACW : inchangés ; champs Option B rejetés.

`isNoraActiveCycleWorkItem` / AJV / normalize alignés.

---

## 6. Contexte Nora — Work Recommendations ouvertes

Nouveau `workRecommendationsContext` dans `StudioCognitiveContext` :
- `coverage` : COMPLETE | PARTIAL | UNAVAILABLE
- items : epistemicItemId, statement, status, cycleInstanceId, dispositionDecisionId, family=Work

Règles :
- COMPLETE uniquement si l'ensemble ouvert tient dans le budget (`maxOpenWorkRecommendations=12`) ;
- PARTIAL si tronqué — jamais présenté comme COMPLETE ;
- UNAVAILABLE si lecture Product impossible ;
- liste vide après lecture réussie = COMPLETE vide (≠ preuve d'absence globale si PARTIAL/UNAVAILABLE).

Projection via `projectCycleWorkRecommendations` (séparation Work / Lifecycle / Trajectory TDS).
Prompt : ids exacts pour `relatedRecommendationRef` ; warnings PARTIAL/UNAVAILABLE.

La projection Nora n'est pas Truth C — Studio re-résout au moment de la matérialisation.

---

## 7. Qualification Studio (autorité Product)

Pipeline :
Nora structured → normalize/validate → open WR facts Product → resolve refs → qualify → materializeActiveCycleWork (itemSourceIndexes) | abstain.

Séparation :
- A Nora : signaux candidats
- B Product : faits vérifiables (ids, status, disposition, cycle)
- C Studio : décision de matérialisation

Règles :
| relationKind | Effet |
|---|---|
| UNCERTAIN | abstention |
| ALREADY_COVERED | ref valide requise → pas de mint |
| DISTINCT_RELATED | ref valide + abstention (distinction non prouvée déterministe) |
| CONTRADICTORY | ref valide + abstention (pas de remplacement / pas d'équivalence) |
| NEW | rationale exploitable + contexte Studio disponible + pas de doublon exact → mint possible |

Éliminé comme preuve métier : Jaccard, bag-of-words, scores de longueur, corpus regex d'équivalence.
Conservé : doublon exact mécanique ; sourceIndexes ; fail-closed open context ; TDS / Work separation.

`trackingRationale` présent ≠ matérialité. `NEW` ≠ nouveauté prouvée.

---

## 8. Persistence / provenance

- Aucune migration / table / second store.
- `trackingRationale` / `relationKind` / `relatedRecommendationRef` = **signaux transitoires Nora** — non persistés sur EpistemicItem.
- Reconstructibilité historique de trackingRationale : **non** avec le modèle actuel (dette explicite ; pas de STOP car auditabilité minimale non exigée comme nouveau schéma dans ce GO — documentée).
- `relatedObjects` non abusé pour stocker Option B.
- Journal UI ≠ vérité durable.

---

## 9. Idempotence / historique

- `sourceIndexes` → `itemSourceIndexes` conservés (Corrective Pass 01).
- Filter prospective ne mute jamais existingItems.
- Aucun backfill / reclassification / supersession.

---

## 10. Tests exécutés

| Suite | Result |
|-------|--------|
| qualifyProspective… Option B (17) | **PASS** |
| p6.hqa.rec01.optionB.workRecommendationsContext (3) | **PASS** |
| UX-REC-02 journal disclaimer | **PASS** |
| studioCognitiveContext (11) | **PASS** |
| deriveWorkRecommendations (2) | **PASS** |
| chatFirstGovernedDecisionLoop (11) | **PASS** |
| activeCycleCognitiveWork (filtre schema/materialize/compose — 16) | **PASS** |
| pilotNoraStudioSemanticContinuity.d0 (15) | **PASS** |
| pilotNoraStudioSemanticContinuity.corr01 (5) | **PASS** |
| pilotNoraStudioSemanticContinuity.corr02 (6) | **PASS** |
| noraConversationalInitiative (28) | **PASS** |
| tsc --noEmit | **PASS** |
| ESLint ciblé | **PASS** |
| git diff --check | **PASS** |
| COG-01 / UX-REC-01 / REC-03 / JRN-01 Human QA full | **NOT RUN** |
| Campagne REAL provider | **NOT RUN** |

---

## 11. Fake / Real Qualification

- Entrée : DETERMINISTIC PROVEN AT CORRECTED SCOPE (+ réserve sémantique ChatGPT)
- Atteint (si revue OK) : **DETERMINISTIC PROVEN AT OPTION B CONTRACTED SCOPE**
- Hors scope : REAL BOUNDARY / E2E REAL / P6 PASS / v3 ADOPTED
- Gaps REAL : qualité trackingRationale, relations, paraphrases, contradictions linguistiques

---

## 12. Fichiers

Créés / réécrits :
- `qualifyProspectiveWorkRecommendationMaterialization.ts` (Option B)
- tests Option B qualify + workRecommendationsContext
- (préservés) UX-REC-02 test / JournalSurface

Modifiés :
- `noraProductTurnOutputType.ts`
- `studioCognitiveContext.ts`
- `buildProjectSystemPrompt.ts`
- `orchestrateTurn.ts` (filtre + sourceIndexes — déjà)
- `materializeActiveCycleWork.ts` (itemSourceIndexes + Option B fields Recommendation-only)
- `lib/oa/cycle/index.ts`
- fixtures ACW / continuity pour schéma Recommendation

---

## 13. Contenu complet — qualifyProspectiveWorkRecommendationMaterialization.ts

```typescript
/**
 * P6-HQA-02 / REC-01 Option B — prospective Work Recommendation materialization.
 *
 * Pipeline (Studio authority):
 *   Nora structured Recommendation candidate
 *   → Product open Work Recommendation facts
 *   → reference resolution
 *   → materialize | abstain
 *
 * A Work Recommendation is exclusively a durable Product object.
 * Ordinary conversational suggestions stay in conversationGuidance.
 *
 * PROSPECTIVE ONLY: never mutates historical Recommendations.
 * Lexical/Jaccard/bag-of-words/keyword scoring is NOT used as business proof.
 * Exact statement re-emission may still be suppressed as a mechanical guard.
 *
 * Corrective Pass 01 identity: preserve original ACW sourceIndexes.
 */

import type {
  NoraActiveCycleWorkItem,
  NoraWorkRecommendationRelationKind,
} from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import { normalizeRelatedRecommendationRef } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import {
  projectCycleWorkRecommendations,
  type TrajectoryDecisionSupportState,
  type WorkRecommendationItemLike,
  type WorkRecommendationProjectionCard,
} from "./deriveWorkRecommendations";

export type ProspectiveWorkRecommendationSuppressReason =
  | "missing_structured_contract"
  | "insufficient_tracking_rationale"
  | "uncertain_relation"
  | "already_covered"
  | "relation_unresolved"
  | "invalid_related_ref"
  | "exact_open_duplicate"
  | "open_context_unavailable";

export type ProspectiveWorkRecommendationMaterializationDecision =
  | { readonly materialize: true; readonly reason: "justified_durable_work" }
  | {
      readonly materialize: false;
      readonly reason: ProspectiveWorkRecommendationSuppressReason;
    };

export type ProspectiveMaterializationPlanItem = {
  readonly item: NoraActiveCycleWorkItem;
  /** Original index in the Nora ACW payload (identity contract). */
  readonly sourceIndex: number;
};

export type OpenWorkRecommendationFact = {
  readonly epistemicItemId: string;
  readonly statement: string;
};

function normalizeExact(text: string): string {
  return text.replace(/\s+/g, " ").trim().toLowerCase();
}

function hasTrajectoryRecommendedOptionRef(
  ref: string | null | undefined,
): boolean {
  if (typeof ref !== "string") return false;
  return /^opt:trajectory:/i.test(ref.trim());
}

/**
 * trackingRationale is required for durable mint — but presence alone never
 * proves materiality. Reject empty / whitespace / mere statement echo.
 */
export function isExploitableTrackingRationale(
  trackingRationale: string | null | undefined,
  statement: string,
): boolean {
  if (typeof trackingRationale !== "string") return false;
  const rationale = trackingRationale.trim();
  if (rationale.length < 8) return false;
  if (normalizeExact(rationale) === normalizeExact(statement)) return false;
  return true;
}

export function openWorkRecommendationFactsForCycle(input: {
  readonly existingItems: ReadonlyArray<WorkRecommendationItemLike>;
  readonly cycleInstanceId: string;
  readonly trajectoryDecisionSupportState: TrajectoryDecisionSupportState;
}): OpenWorkRecommendationFact[] {
  const cards = projectCycleWorkRecommendations({
    items: input.existingItems,
    cycleInstanceId: input.cycleInstanceId,
    fallbackCycleInstanceId: input.cycleInstanceId,
    trajectoryDecisionSupportState: input.trajectoryDecisionSupportState,
  });
  return cards
    .filter((c) => c.status === "active" && !c.dispositionDecisionId)
    .map((c) => ({
      epistemicItemId: c.epistemicItemId,
      statement: c.statement,
    }))
    .filter((f) => f.epistemicItemId.trim().length > 0);
}

function resolveRelatedOpenFact(
  relatedRecommendationRef: string | null | undefined,
  open: readonly OpenWorkRecommendationFact[],
): OpenWorkRecommendationFact | null {
  const normalized = normalizeRelatedRecommendationRef(relatedRecommendationRef);
  if (!normalized) return null;
  return open.find((f) => f.epistemicItemId === normalized) ?? null;
}

function relationKindOf(
  item: NoraActiveCycleWorkItem,
): NoraWorkRecommendationRelationKind | null {
  const kind = item.relationKind;
  if (
    kind === "NEW" ||
    kind === "ALREADY_COVERED" ||
    kind === "DISTINCT_RELATED" ||
    kind === "CONTRADICTORY" ||
    kind === "UNCERTAIN"
  ) {
    return kind;
  }
  return null;
}

/**
 * Qualify whether a single ACW Recommendation candidate should mint a durable
 * Work Recommendation. Structured Option B contract — Studio authority only.
 */
export function qualifyProspectiveWorkRecommendationMaterialization(input: {
  readonly statement: string;
  readonly recommendedOptionRef?: string | null;
  readonly trackingRationale?: string | null;
  readonly relationKind?: NoraWorkRecommendationRelationKind | null;
  readonly relatedRecommendationRef?: string | null;
  /** @deprecated Option B — ignored; kept for call-site compatibility. */
  readonly conversationGuidanceStatement?: string | null | undefined;
  readonly openWorkRecommendationStatements?: readonly string[];
  readonly openWorkRecommendationFacts?: readonly OpenWorkRecommendationFact[];
  /**
   * When false, open Recommendations could not be loaded — fail-closed:
   * do not mint new Work Recommendations (absence of evidence ≠ no opens).
   */
  readonly openRecommendationsContextAvailable?: boolean;
}): ProspectiveWorkRecommendationMaterializationDecision {
  const statement = input.statement.trim();
  if (!statement) {
    return { materialize: false, reason: "missing_structured_contract" };
  }

  if (input.openRecommendationsContextAvailable === false) {
    return { materialize: false, reason: "open_context_unavailable" };
  }

  const relationKind = input.relationKind ?? null;
  if (!relationKind) {
    return { materialize: false, reason: "missing_structured_contract" };
  }

  const openFacts: OpenWorkRecommendationFact[] =
    input.openWorkRecommendationFacts?.length
      ? [...input.openWorkRecommendationFacts]
      : (input.openWorkRecommendationStatements ?? []).map((s, i) => ({
          epistemicItemId: `epi:synthetic-open:${i}`,
          statement: s,
        }));

  // Exact re-emission guard (mechanical — not semantic equivalence).
  const statementKey = normalizeExact(statement);
  for (const existing of openFacts) {
    if (normalizeExact(existing.statement) === statementKey) {
      return { materialize: false, reason: "exact_open_duplicate" };
    }
  }

  if (relationKind === "UNCERTAIN") {
    return { materialize: false, reason: "uncertain_relation" };
  }

  const relatedFact = resolveRelatedOpenFact(
    input.relatedRecommendationRef,
    openFacts,
  );
  const relatedRaw = input.relatedRecommendationRef;
  const relatedProvided =
    relatedRaw !== null &&
    relatedRaw !== undefined &&
    String(relatedRaw).trim().length > 0;

  if (relationKind === "ALREADY_COVERED") {
    if (!relatedProvided) {
      return { materialize: false, reason: "invalid_related_ref" };
    }
    if (!relatedFact) {
      return { materialize: false, reason: "invalid_related_ref" };
    }
    return { materialize: false, reason: "already_covered" };
  }

  if (
    relationKind === "DISTINCT_RELATED" ||
    relationKind === "CONTRADICTORY"
  ) {
    // Distinction / contradiction are Nora candidates — not deterministic Product
    // proofs. Require a valid open ref, then abstain from automatic mint.
    if (!relatedProvided || !relatedFact) {
      return { materialize: false, reason: "invalid_related_ref" };
    }
    return { materialize: false, reason: "relation_unresolved" };
  }

  // relationKind === "NEW"
  if (relatedProvided && !relatedFact) {
    // Invented / stale ref must never authorize mint via similarity.
    return { materialize: false, reason: "invalid_related_ref" };
  }

  if (
    !isExploitableTrackingRationale(input.trackingRationale, statement)
  ) {
    return { materialize: false, reason: "insufficient_tracking_rationale" };
  }

  // Trajectory-bound structured Recommendation remains durable Product work
  // when Option B NEW + exploitable rationale (TDS membership checked elsewhere).
  if (hasTrajectoryRecommendedOptionRef(input.recommendedOptionRef)) {
    return { materialize: true, reason: "justified_durable_work" };
  }

  return { materialize: true, reason: "justified_durable_work" };
}

/** @deprecated Prefer openWorkRecommendationFactsForCycle — statements only. */
export function openWorkRecommendationStatementsForCycle(input: {
  readonly existingItems: ReadonlyArray<WorkRecommendationItemLike>;
  readonly cycleInstanceId: string;
  readonly trajectoryDecisionSupportState: TrajectoryDecisionSupportState;
}): string[] {
  return openWorkRecommendationFactsForCycle(input).map((f) => f.statement);
}

/**
 * Prospective filter on ACW items before materializeActiveCycleWork.
 * Preserves original payload indexes for Epistemic identity stability.
 */
export function filterActiveCycleWorkItemsForProspectiveMaterialization(input: {
  readonly items: ReadonlyArray<NoraActiveCycleWorkItem>;
  readonly conversationGuidanceStatement?: string | null | undefined;
  readonly existingItems: ReadonlyArray<WorkRecommendationItemLike>;
  readonly cycleInstanceId: string;
  readonly trajectoryDecisionSupportState: TrajectoryDecisionSupportState;
  readonly openRecommendationsContextAvailable?: boolean;
}): {
  readonly items: NoraActiveCycleWorkItem[];
  /** Parallel to `items` — original ACW payload indexes. */
  readonly sourceIndexes: number[];
  readonly plan: ProspectiveMaterializationPlanItem[];
  readonly suppressed: ReadonlyArray<{
    readonly statement: string;
    readonly reason: ProspectiveWorkRecommendationSuppressReason;
    readonly sourceIndex: number;
  }>;
} {
  const contextAvailable = input.openRecommendationsContextAvailable !== false;
  const openFacts = contextAvailable
    ? openWorkRecommendationFactsForCycle({
        existingItems: input.existingItems,
        cycleInstanceId: input.cycleInstanceId,
        trajectoryDecisionSupportState: input.trajectoryDecisionSupportState,
      })
    : [];

  const plan: ProspectiveMaterializationPlanItem[] = [];
  const suppressed: Array<{
    statement: string;
    reason: ProspectiveWorkRecommendationSuppressReason;
    sourceIndex: number;
  }> = [];
  // Same-turn exact duplicates among newly accepted Recommendations.
  const acceptedStatements: string[] = [];

  for (let sourceIndex = 0; sourceIndex < input.items.length; sourceIndex += 1) {
    const item = input.items[sourceIndex]!;
    if (item.type !== "Recommendation") {
      plan.push({ item, sourceIndex });
      continue;
    }
    const openWithAccepted: OpenWorkRecommendationFact[] = [
      ...openFacts,
      ...acceptedStatements.map((statement, i) => ({
        epistemicItemId: `epi:same-turn:${i}`,
        statement,
      })),
    ];
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement: item.statement,
      recommendedOptionRef: item.recommendedOptionRef,
      trackingRationale: item.trackingRationale,
      relationKind: relationKindOf(item),
      relatedRecommendationRef: item.relatedRecommendationRef,
      conversationGuidanceStatement: input.conversationGuidanceStatement,
      openWorkRecommendationFacts: openWithAccepted,
      openRecommendationsContextAvailable: contextAvailable,
    });
    if (decision.materialize) {
      plan.push({ item, sourceIndex });
      acceptedStatements.push(item.statement.trim());
    } else {
      suppressed.push({
        statement: item.statement.trim(),
        reason: decision.reason,
        sourceIndex,
      });
    }
  }

  return {
    items: plan.map((p) => p.item),
    sourceIndexes: plan.map((p) => p.sourceIndex),
    plan,
    suppressed,
  };
}

/** Re-export card type for context projection consumers. */
export type { WorkRecommendationProjectionCard };
```

---

## 14. Contenu complet — qualifyProspectiveWorkRecommendationMaterialization.d0.test.ts

```typescript
/**
 * P6-HQA-02 / REC-01 Option B — structured prospective Work Recommendation gate.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import Ajv from "ajv";
import {
  filterActiveCycleWorkItemsForProspectiveMaterialization,
  isExploitableTrackingRationale,
  qualifyProspectiveWorkRecommendationMaterialization,
} from "@/lib/oa/cycle/application/qualifyProspectiveWorkRecommendationMaterialization";
import { activeCycleWorkEpistemicItemId } from "@/features/project-assistant/materializeActiveCycleWork";
import {
  NORA_ACTIVE_CYCLE_WORK_ITEM_SCHEMA,
  isNoraActiveCycleWorkItem,
  type NoraActiveCycleWorkItem,
  type NoraWorkRecommendationRelationKind,
} from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";

function rec(
  statement: string,
  opts: {
    recommendedOptionRef?: string | null;
    trackingRationale?: string;
    relationKind?: NoraWorkRecommendationRelationKind;
    relatedRecommendationRef?: string | null;
  } = {},
): NoraActiveCycleWorkItem {
  return {
    type: "Recommendation",
    statement,
    confidence: "medium",
    blocking: null,
    recommendedOptionRef: opts.recommendedOptionRef ?? null,
    trackingRationale:
      opts.trackingRationale ??
      "Nécessite un suivi durable distinct sur ce cycle.",
    relationKind: opts.relationKind ?? "NEW",
    relatedRecommendationRef: opts.relatedRecommendationRef ?? null,
  };
}

function observation(statement: string): NoraActiveCycleWorkItem {
  return {
    type: "Observation",
    statement,
    confidence: "medium",
    blocking: null,
    recommendedOptionRef: null,
  };
}

describe("P6-HQA-02 REC-01 Option B structured schema", () => {
  const ajv = new Ajv({ allErrors: true });
  const validateItem = ajv.compile(NORA_ACTIVE_CYCLE_WORK_ITEM_SCHEMA);

  it("Recommendation with Option B fields is schema-valid", () => {
    const item = rec(
      "Prioriser l'analyse du suivi d'avancement avant la planification.",
      {
        trackingRationale:
          "Orientation de travail distincte nécessitant un suivi hors tour.",
        relationKind: "NEW",
        relatedRecommendationRef: null,
      },
    );
    expect(validateItem(item)).toBe(true);
    expect(isNoraActiveCycleWorkItem(item)).toBe(true);
  });

  it("Recommendation missing Option B fields is rejected", () => {
    const item = {
      type: "Recommendation",
      statement: "Prioriser le suivi.",
      confidence: "medium",
      blocking: null,
      recommendedOptionRef: null,
    };
    expect(validateItem(item)).toBe(false);
    expect(isNoraActiveCycleWorkItem(item)).toBe(false);
  });

  it("non-Recommendation types reject Option B fields", () => {
    const item = {
      type: "Observation",
      statement: "Les retards reviennent.",
      confidence: "medium",
      blocking: null,
      recommendedOptionRef: null,
      trackingRationale: "x",
      relationKind: "NEW",
      relatedRecommendationRef: null,
    };
    expect(validateItem(item)).toBe(false);
    expect(isNoraActiveCycleWorkItem(item)).toBe(false);
  });

  it("invalid relatedRecommendationRef shape is rejected", () => {
    const item = rec("Prioriser le suivi avant la planification.", {
      relationKind: "ALREADY_COVERED",
      relatedRecommendationRef: "not-an-epi-id",
    });
    expect(isNoraActiveCycleWorkItem(item)).toBe(false);
  });
});

describe("P6-HQA-02 REC-01 Option B materialization qualification", () => {
  it("A — conversational continuation stays non-durable when UNCERTAIN", () => {
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement:
        "Je te propose d'examiner un exemple concret de retard pour comprendre les blocages.",
      trackingRationale: "Simple suite conversationnelle.",
      relationKind: "UNCERTAIN",
      relatedRecommendationRef: null,
      openWorkRecommendationFacts: [],
    });
    expect(decision).toEqual({
      materialize: false,
      reason: "uncertain_relation",
    });
  });

  it("B — NEW durable orientation materializes with exploitable rationale", () => {
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement:
        "Je recommande de prioriser l'analyse du suivi d'avancement avant celle de la planification.",
      trackingRationale:
        "Orientation de travail distincte nécessitant un suivi propre hors tour.",
      relationKind: "NEW",
      relatedRecommendationRef: null,
      openWorkRecommendationFacts: [],
    });
    expect(decision).toEqual({
      materialize: true,
      reason: "justified_durable_work",
    });
  });

  it("C — ALREADY_COVERED with valid ref does not mint", () => {
    const openId = "epi:acw:open-followup-1";
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement: "Commencer par analyser le suivi d'avancement.",
      trackingRationale: "Reformulation candidate de l'existante.",
      relationKind: "ALREADY_COVERED",
      relatedRecommendationRef: openId,
      openWorkRecommendationFacts: [
        {
          epistemicItemId: openId,
          statement: "Prioriser le suivi avant la planification.",
        },
      ],
    });
    expect(decision).toEqual({
      materialize: false,
      reason: "already_covered",
    });
  });

  it("D — CONTRADICTORY never treated as equivalence; abstains without replace", () => {
    const openId = "epi:acw:open-priority-1";
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement: "Prioriser la planification avant le suivi.",
      trackingRationale: "Contradiction candidate avec l'orientation ouverte.",
      relationKind: "CONTRADICTORY",
      relatedRecommendationRef: openId,
      openWorkRecommendationFacts: [
        {
          epistemicItemId: openId,
          statement: "Prioriser le suivi avant la planification.",
        },
      ],
    });
    expect(decision).toEqual({
      materialize: false,
      reason: "relation_unresolved",
    });
  });

  it("E — DISTINCT_RELATED abstains (distinction not Product-proven)", () => {
    const openId = "epi:acw:open-related-1";
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement: "Documenter les responsabilités de suivi en parallèle.",
      trackingRationale: "Proche mais potentiellement distinct — non prouvé.",
      relationKind: "DISTINCT_RELATED",
      relatedRecommendationRef: openId,
      openWorkRecommendationFacts: [
        {
          epistemicItemId: openId,
          statement: "Prioriser le suivi avant la planification.",
        },
      ],
    });
    expect(decision).toEqual({
      materialize: false,
      reason: "relation_unresolved",
    });
  });

  it("F — invalid related ref abstains (no text similarity fallback)", () => {
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement: "Prioriser la planification avant le suivi.",
      trackingRationale: "Référence inventée — doit échouer.",
      relationKind: "ALREADY_COVERED",
      relatedRecommendationRef: "epi:acw:does-not-exist",
      openWorkRecommendationFacts: [
        {
          epistemicItemId: "epi:acw:real-open",
          statement: "Prioriser le suivi avant la planification.",
        },
      ],
    });
    expect(decision).toEqual({
      materialize: false,
      reason: "invalid_related_ref",
    });
  });

  it("G — trackingRationale alone / NEW alone insufficient without exploitable rationale", () => {
    expect(
      isExploitableTrackingRationale(
        "Prioriser le suivi avant la planification.",
        "Prioriser le suivi avant la planification.",
      ),
    ).toBe(false);
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement: "Prioriser le suivi avant la planification.",
      trackingRationale: "Prioriser le suivi avant la planification.",
      relationKind: "NEW",
      relatedRecommendationRef: null,
      openWorkRecommendationFacts: [],
    });
    expect(decision).toEqual({
      materialize: false,
      reason: "insufficient_tracking_rationale",
    });
  });

  it("H — open context unavailable fails closed", () => {
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement:
        "Structurer le cadrage autour des responsabilités de suivi.",
      trackingRationale: "Suivi durable nécessaire.",
      relationKind: "NEW",
      relatedRecommendationRef: null,
      openRecommendationsContextAvailable: false,
      openWorkRecommendationFacts: [],
    });
    expect(decision).toEqual({
      materialize: false,
      reason: "open_context_unavailable",
    });
  });

  it("I — exact open duplicate suppressed without lexical equivalence engine", () => {
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement: "Prioriser le suivi avant la planification.",
      trackingRationale: "Réémission exacte.",
      relationKind: "NEW",
      relatedRecommendationRef: null,
      openWorkRecommendationFacts: [
        {
          epistemicItemId: "epi:acw:exact",
          statement: "Prioriser le suivi avant la planification.",
        },
      ],
    });
    expect(decision).toEqual({
      materialize: false,
      reason: "exact_open_duplicate",
    });
  });

  it("J — trajectory-bound NEW still materializes when Option B justified", () => {
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement: "Adopter l'option trajectoire gouvernée pour ce cycle.",
      recommendedOptionRef: "opt:trajectory:governed-gated",
      trackingRationale: "Choix trajectoire à suivre durablement.",
      relationKind: "NEW",
      relatedRecommendationRef: null,
      openWorkRecommendationFacts: [],
    });
    expect(decision.materialize).toBe(true);
  });

  it("K — prospective filter never mutates historical items", () => {
    const existing = Object.freeze([
      Object.freeze({
        type: "Recommendation",
        status: "active",
        epistemicItemId: "epi:acw:hist-1",
        source: "active-cycle-work:nora",
        statement: "Clarifier les responsabilités de suivi.",
        createdAt: "2026-10-01T00:00:00.000Z",
        relatedObjects: Object.freeze(["cycinst:qa"]),
      }),
    ]);
    const before = JSON.stringify(existing);
    const filtered = filterActiveCycleWorkItemsForProspectiveMaterialization({
      items: [
        rec("Commencer par clarifier qui suit les responsabilités.", {
          relationKind: "ALREADY_COVERED",
          relatedRecommendationRef: "epi:acw:hist-1",
          trackingRationale: "Déjà couvert par l'ouverte.",
        }),
        observation("Les retards reviennent souvent."),
      ],
      existingItems: existing,
      cycleInstanceId: "cycinst:qa",
      trajectoryDecisionSupportState: "NONE",
    });
    expect(JSON.stringify(existing)).toBe(before);
    expect(existing[0]!.epistemicItemId).toBe("epi:acw:hist-1");
    expect(existing[0]!.status).toBe("active");
    expect(filtered.items.map((i) => i.type)).toEqual(["Observation"]);
    expect(filtered.sourceIndexes).toEqual([1]);
    expect(filtered.suppressed[0]!.reason).toBe("already_covered");
  });
});

describe("P6-HQA-02 REC-01 Option B identity / replay (sourceIndexes)", () => {
  const projectId = "proj:qa-rec01-b";
  const cycleInstanceId = "cycinst:qa-rec01-b";
  const turnCorrelationId = "turn:logical:rec01-option-b";

  it("suppressing Recommendation preserves Observation source index", () => {
    const items: NoraActiveCycleWorkItem[] = [
      rec(
        "Structurer le cadrage autour des responsabilités de suivi et des retards.",
        {
          trackingRationale: "Orientation durable de cadrage.",
          relationKind: "NEW",
        },
      ),
      observation("Les retards reviennent souvent sur ce cycle."),
    ];

    const first = filterActiveCycleWorkItemsForProspectiveMaterialization({
      items,
      existingItems: [],
      cycleInstanceId,
      trajectoryDecisionSupportState: "NONE",
    });
    expect(first.sourceIndexes).toEqual([0, 1]);

    const idObsFirst = activeCycleWorkEpistemicItemId({
      projectId,
      cycleInstanceId,
      turnCorrelationId,
      index: first.sourceIndexes[1]!,
      type: "Observation",
      statement: first.items[1]!.statement,
    });

    const idRec = activeCycleWorkEpistemicItemId({
      projectId,
      cycleInstanceId,
      turnCorrelationId,
      index: first.sourceIndexes[0]!,
      type: "Recommendation",
      statement: first.items[0]!.statement,
    });

    const replay = filterActiveCycleWorkItemsForProspectiveMaterialization({
      items,
      existingItems: [
        {
          type: "Recommendation",
          status: "active",
          epistemicItemId: idRec,
          source: "active-cycle-work:nora",
          statement: items[0]!.statement,
          createdAt: "2026-10-10T00:00:00.000Z",
          relatedObjects: [cycleInstanceId],
        },
      ],
      cycleInstanceId,
      trajectoryDecisionSupportState: "NONE",
    });
    expect(replay.items.map((i) => i.type)).toEqual(["Observation"]);
    expect(replay.sourceIndexes).toEqual([1]);
    expect(replay.suppressed[0]!.reason).toBe("exact_open_duplicate");

    const idObsReplay = activeCycleWorkEpistemicItemId({
      projectId,
      cycleInstanceId,
      turnCorrelationId,
      index: replay.sourceIndexes[0]!,
      type: "Observation",
      statement: replay.items[0]!.statement,
    });
    expect(idObsReplay).toBe(idObsFirst);
  });

  it("intermediate suppressions preserve original indexes", () => {
    const openId = "epi:acw:open-x";
    const items: NoraActiveCycleWorkItem[] = [
      rec("Je te propose d'examiner un exemple.", {
        relationKind: "UNCERTAIN",
        trackingRationale: "Suite conversationnelle incertaine.",
      }),
      observation("Observation A."),
      rec("Structurer le cadrage autour des responsabilités de suivi.", {
        relationKind: "NEW",
        trackingRationale: "Orientation durable de cadrage.",
      }),
      observation("Observation B."),
      rec("Structurer le cadrage autour des responsabilités de suivi.", {
        relationKind: "ALREADY_COVERED",
        relatedRecommendationRef: openId,
        trackingRationale: "Couvert.",
      }),
    ];
    const plan = filterActiveCycleWorkItemsForProspectiveMaterialization({
      items,
      existingItems: [
        {
          type: "Recommendation",
          status: "active",
          epistemicItemId: openId,
          source: "active-cycle-work:nora",
          statement: "Autre recommandation ouverte.",
          createdAt: "2026-10-01T00:00:00.000Z",
          relatedObjects: [cycleInstanceId],
        },
      ],
      cycleInstanceId,
      trajectoryDecisionSupportState: "NONE",
    });
    // 0 UNCERTAIN suppressed; 1 obs; 2 NEW kept; 3 obs; 4 ALREADY_COVERED suppressed
    // but item 4 statement equals item 2 → exact_open_duplicate via same-turn accepted
    expect(plan.sourceIndexes).toEqual([1, 2, 3]);
  });
});
```

---

## 15. Contenu complet — p6.hqa.rec01.optionB.workRecommendationsContext.d0.test.ts

```typescript
/**
 * P6-HQA-02 REC-01 Option B — open Work Recommendations context coverage.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  buildStudioCognitivePromptSections,
  type StudioCognitiveContext,
  type StudioOpenWorkRecommendationProjection,
} from "@/features/project-assistant/f2/studioCognitiveContext";

function baseContext(
  wr: StudioCognitiveContext["workRecommendationsContext"],
): StudioCognitiveContext {
  return {
    projectTruth: {
      projectId: "proj:wr-ctx",
      name: "WR Ctx",
      objective: "obj",
      context: "ctx",
      constraints: [],
      criticality: "STANDARD",
      shortReference: null,
      lpsId: "lps:1",
      lpsVersion: 1,
      activeCycleInstanceId: "cycinst:wr",
      doctrineId: "pkg:x",
      doctrineVersion: "1",
      doctrineStatus: "resolved",
    },
    method: {
      orientation: {
        state: "UNRESOLVED" as const,
        candidateCycleTypeId: null,
      },
      cycleLabel: null,
      ckcLensSection: null,
      ckcLoaded: false,
      doctrinePinPresent: true,
      sourceLimit: "none" as const,
      trajectory: null,
    } as StudioCognitiveContext["method"],
    activeCycle: {
      cycleInstanceId: "cycinst:wr",
      cycleTypeId: "cyc:framing",
      cycleLabel: "Cadrage",
      profile: "Light",
      status: "active",
      workEligible: true,
      trajectoryId: null,
      trajectoryVersion: null,
      trajectoryStepId: null,
      ckcResolutionRef: null,
    },
    activeCycleWorkItems: { state: "NONE", items: [] },
    workRecommendationsContext: wr,
    trajectoryDecisionSupport: {
      state: "NONE",
      optionRefs: [],
      optionLabels: [],
      currentNoraRecommendedOptionRef: null,
      currentRecommendationSource: null,
    },
    decisions: { state: "NONE", items: [] },
    evidence: { state: "NONE", items: [] },
    review: { state: "NONE", items: [] },
    trajectory: { state: "ABSENT", current: null },
    lifecycleRecommendation: {
      state: "NONE",
      current: null,
      satisfiesPreCycleNextCycleTransition: false,
    },
    reservationCompactSection: null,
    reservationFocusSection: null,
    limits: {
      oaAvailable: true,
      truthOutranksConversation: true,
      composerDoesNotScoreMaturity: true,
      composerDoesNotSelectTrajectory: true,
    },
  };
}

describe("P6-HQA-02 REC-01 Option B workRecommendationsContext coverage", () => {
  it("COMPLETE renders ids and does not invent coverage", () => {
    const item: StudioOpenWorkRecommendationProjection = {
      epistemicItemId: "epi:acw:open-1",
      statement: "Prioriser le suivi avant la planification.",
      status: "active",
      cycleInstanceId: "cycinst:wr",
      dispositionDecisionId: null,
      family: "Work",
    };
    const text = buildStudioCognitivePromptSections(
      baseContext({ coverage: "COMPLETE", items: [item] }),
    ).join("\n");
    expect(text).toContain("coverage=COMPLETE");
    expect(text).toContain("id=epi:acw:open-1");
    expect(text).toContain("family=Work");
    expect(text).not.toContain("coverage=PARTIAL");
  });

  it("PARTIAL warns against NEW-by-absence", () => {
    const text = buildStudioCognitivePromptSections(
      baseContext({
        coverage: "PARTIAL",
        items: [
          {
            epistemicItemId: "epi:acw:open-2",
            statement: "Améliorer la visibilité.",
            status: "active",
            cycleInstanceId: "cycinst:wr",
            dispositionDecisionId: null,
            family: "Work",
          },
        ],
      }),
    ).join("\n");
    expect(text).toContain("coverage=PARTIAL");
    expect(text).toMatch(/ne pas conclure NEW/i);
  });

  it("UNAVAILABLE forbids invented ids", () => {
    const text = buildStudioCognitivePromptSections(
      baseContext({ coverage: "UNAVAILABLE", items: [] }),
    ).join("\n");
    expect(text).toContain("coverage=UNAVAILABLE");
    expect(text).toMatch(/ne pas inventer d'ids/i);
  });
});
```

---

## 16. Diff utile — schéma / contexte / prompt / materialize / orchestrate / index

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts b/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
index ea46da10..9205f595 100644
--- a/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
+++ b/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
@@ -349,6 +349,21 @@ function buildActiveCycleWorkOutputSection(
       "recommendedOptionRef est un champ structuré — JAMAIS déduit du texte statement.",
       "Pour Recommendation hors Option trajectoire : recommendedOptionRef = null.",
       "Recommendation ≠ HumanDecision ; n'exécute rien ; ne promeut pas de trajectoire.",
+      "=== P6-HQA-02 / REC-01 Option B — contrat structuré Work Recommendation ===",
+      "Une Work Recommendation (type=Recommendation) est exclusivement un objet Product DURABLE.",
+      "Suggestion conversationnelle ordinaire → conversationGuidance SEULEMENT (zéro Recommendation).",
+      "Pour toute Recommendation, renseigne OBLIGATOIREMENT :",
+      "- trackingRationale : pourquoi un suivi durable distinct est nécessaire (≠ simple copie de statement) ;",
+      "- relationKind : NEW | ALREADY_COVERED | DISTINCT_RELATED | CONTRADICTORY | UNCERTAIN ;",
+      "- relatedRecommendationRef : id=epi:… EXACT d'une Work Recommendation ouverte du contexte, ou null.",
+      "Règles relationKind :",
+      "- ALREADY_COVERED / DISTINCT_RELATED / CONTRADICTORY → relatedRecommendationRef requis (id réel du contexte) ;",
+      "- NEW → relatedRecommendationRef = null en général ; ne PAS déclarer NEW si coverage=PARTIAL/UNAVAILABLE",
+      "  sans certitude — préfère UNCERTAIN ou conversationGuidance ;",
+      "- UNCERTAIN → aucune matérialisation automatique attendue ; poursuis en conversation.",
+      "- CONTRADICTORY ≠ équivalence ; aucun remplacement automatique d'une recommandation existante.",
+      "trackingRationale et relationKind=NEW ne sont PAS une autorisation Product — Studio décide.",
+      "Ne jamais inventer d'identifiant. Ne jamais créer de HumanDecision pour une recommandation ordinaire.",
     );
     lines.push(
       "=== INTÉGRITÉ ÉPISTÉMIQUE — Reservation ===",
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts b/projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts
index f3b01c17..87532474 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts
@@ -22,6 +22,8 @@ import {
   obligationPolicySubjectFor,
   OBLIGATION_POLICY_REQUIRE_ARTIFACT,
   getCycleTypeById,
+  projectCycleWorkRecommendations,
+  type TrajectoryDecisionSupportState,
 } from "@/lib/oa/cycle";
 import { deriveLifecycleBlockersFromEpistemicItems } from "@/lib/oa/cycle/application/deriveLifecycleBlockers";
 import {
@@ -64,6 +66,9 @@ export const STUDIO_COGNITIVE_CONTEXT_BUDGET = Object.freeze({
   maxEvidence: 8,
   maxReviewBundles: 4,
   maxActiveCycleWorkItems: 12,
+  /** Open Work Recommendations projected for Nora Option B referencing. */
+  maxOpenWorkRecommendations: 12,
+  workRecommendationStatementChars: 240,
   decisionSubjectChars: 160,
   decisionOptionChars: 120,
   evidenceLabelChars: 120,
@@ -74,6 +79,30 @@ export const STUDIO_COGNITIVE_CONTEXT_BUDGET = Object.freeze({
 });

 export type PresenceState = "PRESENT" | "NONE" | "UNAVAILABLE";
+
+/**
+ * P6-HQA-02 REC-01 Option B — coverage of open Work Recommendations projected
+ * to Nora. Never invent COMPLETE; empty successful read ≠ UNAVAILABLE.
+ */
+export type WorkRecommendationsContextCoverage =
+  | "COMPLETE"
+  | "PARTIAL"
+  | "UNAVAILABLE";
+
+export type StudioOpenWorkRecommendationProjection = {
+  readonly epistemicItemId: string;
+  readonly statement: string;
+  readonly status: string;
+  readonly cycleInstanceId: string | null;
+  readonly dispositionDecisionId: string | null;
+  /** Explicit family — never Lifecycle / Trajectory. */
+  readonly family: "Work";
+};
+
+export type StudioWorkRecommendationsContextProjection = {
+  readonly coverage: WorkRecommendationsContextCoverage;
+  readonly items: readonly StudioOpenWorkRecommendationProjection[];
+};
 export type TrajectoryPresenceState =
   | "PRESENT"
   | "ABSENT"
@@ -272,6 +301,12 @@ export type StudioCognitiveContext = {
     readonly state: PresenceState;
     readonly items: readonly StudioActiveCycleWorkProjection[];
   };
+  /**
+   * P6-HQA-02 REC-01 Option B — open Work Recommendations Nora may reference.
+   * Projection for cognition only — not Truth C. Studio re-resolves authoritatively
+   * at materialization time.
+   */
+  readonly workRecommendationsContext: StudioWorkRecommendationsContextProjection;
   readonly trajectoryDecisionSupport: StudioTrajectoryDecisionSupportProjection;
   readonly decisions: {
     readonly state: PresenceState;
@@ -541,6 +576,10 @@ export async function composeStudioCognitiveContext(input: {
           state: "UNAVAILABLE" as const,
           items: Object.freeze([]),
         }),
+        workRecommendationsContext: Object.freeze({
+          coverage: "UNAVAILABLE" as const,
+          items: Object.freeze([]),
+        }),
         trajectoryDecisionSupport: Object.freeze({
           state: "UNAVAILABLE" as const,
           optionRefs: Object.freeze([]),
@@ -656,6 +695,11 @@ export async function composeStudioCognitiveContext(input: {

   let acwState: PresenceState = "NONE";
   let acwItems: StudioActiveCycleWorkProjection[] = [];
+  let workRecommendationsContext: StudioWorkRecommendationsContextProjection =
+    Object.freeze({
+      coverage: activeCycle ? ("COMPLETE" as const) : ("UNAVAILABLE" as const),
+      items: Object.freeze([] as StudioOpenWorkRecommendationProjection[]),
+    });
   if (activeCycle) {
     try {
       const epistemic = await oa.cycleServices.epistemic.listByProject(projectId);
@@ -690,8 +734,51 @@ export async function composeStudioCognitiveContext(input: {
           .reverse()
           .map((item) => projectActiveCycleWorkItem(item, hdCutoff));
       }
+
+      // P6-HQA-02 REC-01 Option B — open Work Recommendations for referencing.
+      // Reuses the same Product read; COMPLETE only when the full open set fits.
+      const tdsStateForWork: TrajectoryDecisionSupportState =
+        input.trajectoryDecisionSupport?.state === "PRESENT"
+          ? "PRESENT"
+          : input.trajectoryDecisionSupport?.state === "UNAVAILABLE"
+            ? "UNAVAILABLE"
+            : "NONE";
+      const wrCards = projectCycleWorkRecommendations({
+        items: epistemic,
+        cycleInstanceId: activeCycle.cycleInstanceId,
+        fallbackCycleInstanceId: activeCycle.cycleInstanceId,
+        trajectoryDecisionSupportState: tdsStateForWork,
+      });
+      const openWr = wrCards.filter(
+        (c) => c.status === "active" && !c.dispositionDecisionId,
+      );
+      const truncated =
+        openWr.length > budget.maxOpenWorkRecommendations;
+      const selected = openWr.slice(0, budget.maxOpenWorkRecommendations);
+      workRecommendationsContext = Object.freeze({
+        coverage: truncated ? ("PARTIAL" as const) : ("COMPLETE" as const),
+        items: Object.freeze(
+          selected.map((c) =>
+            Object.freeze({
+              epistemicItemId: c.epistemicItemId,
+              statement: clip(
+                c.statement,
+                budget.workRecommendationStatementChars,
+              ),
+              status: c.status,
+              cycleInstanceId: c.cycleInstanceId,
+              dispositionDecisionId: c.dispositionDecisionId,
+              family: "Work" as const,
+            }),
+          ),
+        ),
+      });
     } catch {
       acwState = "UNAVAILABLE";
+      workRecommendationsContext = Object.freeze({
+        coverage: "UNAVAILABLE" as const,
+        items: Object.freeze([]),
+      });
     }
   }

@@ -843,7 +930,7 @@ export async function composeStudioCognitiveContext(input: {
     }
   }

-  let trajectoryDecisionSupport: StudioTrajectoryDecisionSupportProjection =
+  const trajectoryDecisionSupport: StudioTrajectoryDecisionSupportProjection =
     input.trajectoryDecisionSupport ??
     Object.freeze({
       state: "NONE" as const,
@@ -863,6 +950,7 @@ export async function composeStudioCognitiveContext(input: {
         state: acwState,
         items: Object.freeze(acwItems),
       }),
+      workRecommendationsContext,
       trajectoryDecisionSupport,
       decisions: Object.freeze({
         state: decisionsState,
@@ -1045,6 +1133,46 @@ export function buildStudioCognitivePromptSections(
         "Options trajectoire (ProjectTrajectory) : non ouvertes pour ce travail — les Work Recommendations se disposent en chat (accepter / amender / refuser / reporter) ; ne pas proposer d'optionRefs trajectoire.",
       );
     }
+    lines.push("");
+    lines.push(
+      "=== Work Recommendations durables ouvertes (famille Work — ≠ Lifecycle ≠ Trajectory) ===",
+    );
+    const wrCtx = ctx.workRecommendationsContext;
+    lines.push(`coverage=${wrCtx.coverage}`);
+    if (wrCtx.coverage === "UNAVAILABLE") {
+      lines.push(
+        "Contexte Work Recommendations : UNAVAILABLE — ne pas inventer d'ids ; relationKind=UNCERTAIN ou conversationGuidance ; jamais NEW par défaut.",
+      );
+    } else if (wrCtx.items.length === 0) {
+      lines.push(
+        "Aucune Work Recommendation ouverte dans le périmètre couvert (liste vide ≠ licence d'invention).",
+      );
+      if (wrCtx.coverage === "PARTIAL") {
+        lines.push(
+          "coverage=PARTIAL — ne pas conclure NEW uniquement parce qu'aucune correspondance n'apparaît ici.",
+        );
+      }
+    } else {
+      if (wrCtx.coverage === "PARTIAL") {
+        lines.push(
+          "coverage=PARTIAL — vue tronquée ; ne pas conclure NEW uniquement par absence de correspondance ici.",
+        );
+      }
+      lines.push(
+        "Ids autorisés pour relatedRecommendationRef (copier EXACTEMENT ; ne jamais inventer) :",
+      );
+      for (const w of wrCtx.items) {
+        const disposition =
+          w.dispositionDecisionId != null
+            ? ` disposition=${w.dispositionDecisionId}`
+            : " disposition=none";
+        const cycle =
+          w.cycleInstanceId != null ? ` cycle=${w.cycleInstanceId}` : "";
+        lines.push(
+          `• id=${w.epistemicItemId} family=Work status=${w.status}${cycle}${disposition} — ${w.statement}`,
+        );
+      }
+    }
     if (ctx.reservationFocusSection) {
       lines.push("");
       lines.push(ctx.reservationFocusSection);
diff --git a/projects/sfia-studio/app/features/project-assistant/materializeActiveCycleWork.ts b/projects/sfia-studio/app/features/project-assistant/materializeActiveCycleWork.ts
index 4ae0f934..f39a2a00 100644
--- a/projects/sfia-studio/app/features/project-assistant/materializeActiveCycleWork.ts
+++ b/projects/sfia-studio/app/features/project-assistant/materializeActiveCycleWork.ts
@@ -353,6 +353,14 @@ function assertContextSealAgainstLiveState(input: {
  */
 export async function materializeActiveCycleWork(input: {
   items: readonly NoraActiveCycleWorkItem[];
+  /**
+   * Optional original Nora ACW payload indexes parallel to `items`.
+   * When set, Epistemic identity uses these indexes instead of the filtered
+   * array position — required so prospective REC-01 suppression cannot shift
+   * identities of surviving items on logical-turn replay.
+   * Omit for legacy callers that pass the full unfiltered payload.
+   */
+  itemSourceIndexes?: readonly number[];
   facts: ActiveCycleWorkMaterializationFacts;
   updateEpistemicState: UpdateEpistemicState;
   appendLivingProjectStateVersion: AppendLivingProjectStateVersion;
@@ -378,6 +386,17 @@ export async function materializeActiveCycleWork(input: {
     };
   }

+  if (
+    input.itemSourceIndexes != null &&
+    input.itemSourceIndexes.length !== input.items.length
+  ) {
+    return {
+      ok: false,
+      code: "ACTIVE_CYCLE_WORK_INVALID",
+      reason: "source_indexes_length_mismatch",
+    };
+  }
+
   for (const item of input.items) {
     if (!ACTIVE_CYCLE_WORK_ALLOWED_TYPES.has(item.type as EpistemicItemType)) {
       return {
@@ -398,6 +417,19 @@ export async function materializeActiveCycleWork(input: {
         reason: "recommended_option_ref_only_on_recommendation",
       };
     }
+    // P6-HQA-02 REC-01 Option B — structured WR fields are Recommendation-only.
+    if (
+      item.type !== "Recommendation" &&
+      (item.trackingRationale !== undefined ||
+        item.relationKind !== undefined ||
+        item.relatedRecommendationRef !== undefined)
+    ) {
+      return {
+        ok: false,
+        code: "ACTIVE_CYCLE_WORK_INVALID",
+        reason: "option_b_fields_only_on_recommendation",
+      };
+    }
     if (
       item.type === "Recommendation" &&
       item.recommendedOptionRef != null &&
@@ -525,6 +557,9 @@ export async function materializeActiveCycleWork(input: {

       for (let index = 0; index < input.items.length; index += 1) {
         const raw = input.items[index]!;
+        // Prefer original ACW payload index when prospective filtering compacted
+        // the write list — identity must not depend on post-filter position.
+        const identityIndex = input.itemSourceIndexes?.[index] ?? index;
         const type = raw.type as EpistemicItemType;
         const statement = raw.statement.trim();
         if (!statement) {
@@ -543,7 +578,7 @@ export async function materializeActiveCycleWork(input: {
           projectId: facts.projectId,
           cycleInstanceId: facts.activeCycleInstanceId,
           turnCorrelationId: facts.turnCorrelationId,
-          index,
+          index: identityIndex,
           type,
           statement,
           recommendedOptionRef,
@@ -586,7 +621,7 @@ export async function materializeActiveCycleWork(input: {
                   cycleInstanceId: facts.activeCycleInstanceId,
                   turnCorrelationId: facts.turnCorrelationId,
                   producedAt: input.producedAt,
-                  index,
+                  index: identityIndex,
                 }),
             reuse: true,
           });
@@ -613,7 +648,7 @@ export async function materializeActiveCycleWork(input: {
             cycleInstanceId: facts.activeCycleInstanceId,
             turnCorrelationId: facts.turnCorrelationId,
             producedAt: input.producedAt,
-            index,
+            index: identityIndex,
           }),
           reuse: false,
         });
diff --git a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
index f5823ff7..f943aac4 100644
--- a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
+++ b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
@@ -63,6 +63,7 @@ import {
   materializeActiveCycleWork,
   validateActiveCycleRecommendationAgainstDecisionSupport,
 } from "./materializeActiveCycleWork";
+import { filterActiveCycleWorkItemsForProspectiveMaterialization } from "@/lib/oa/cycle/application/qualifyProspectiveWorkRecommendationMaterialization";
 import {
   materializeReservationDelta,
   stripActiveCycleWorkReservationsWhenDeltaPresent,
@@ -901,14 +902,45 @@ export async function orchestrateProjectAssistantTurn(input: {
           let existingItems: Awaited<
             ReturnType<typeof oa.cycleServices.epistemic.listByProject>
           > = [];
+          // Fail-closed: inability to load open Recommendations is not proof
+          // that none exist — suppress new Work Recommendations in that case.
+          let openRecommendationsContextAvailable = true;
           try {
             existingItems = await oa.cycleServices.epistemic.listByProject(
               project.projectId,
             );
           } catch {
             existingItems = [];
+            openRecommendationsContextAvailable = false;
           }

+          // P6-HQA-02 / REC-01 — prospective Work Recommendation gate (server).
+          // Ordinary conversational suggestions stay in conversationGuidance;
+          // only justified durable Recommendations mint EpistemicItems.
+          // Historical Recommendations are never mutated here.
+          // Source indexes are preserved so filtered replays keep ACW identities.
+          const tdsStateForWork =
+            studio.trajectoryDecisionSupport?.state === "PRESENT"
+              ? "PRESENT"
+              : studio.trajectoryDecisionSupport?.state === "UNAVAILABLE"
+                ? "UNAVAILABLE"
+                : "NONE";
+          const prospective = filterActiveCycleWorkItemsForProspectiveMaterialization(
+            {
+              items: acwItems,
+              conversationGuidanceStatement:
+                coherent?.conversationGuidance?.statement ?? null,
+              existingItems,
+              cycleInstanceId: activeCycleId,
+              trajectoryDecisionSupportState: tdsStateForWork,
+              openRecommendationsContextAvailable,
+            },
+          );
+          const itemsToMaterialize = prospective.items;
+          if (itemsToMaterialize.length === 0) {
+            // All ACW items suppressed or Recommendations-only stripped —
+            // continue the Product turn without durable ACW writes.
+          } else {
           // Production key = durable logical turn id (no random f1-acw keys).
           const turnCorrelationId = logicalTurnId!;
           const producedAt = new Date().toISOString();
@@ -918,7 +950,8 @@ export async function orchestrateProjectAssistantTurn(input: {
             input.beforeDurableEffect,
           );
           const mat = await materializeActiveCycleWork({
-            items: acwItems,
+            items: itemsToMaterialize,
+            itemSourceIndexes: prospective.sourceIndexes,
             facts: {
               projectId: project.projectId,
               activeCycleInstanceId: activeCycleId,
@@ -961,6 +994,7 @@ export async function orchestrateProjectAssistantTurn(input: {
               logicalTurnId,
             };
           }
+          } // end itemsToMaterialize.length > 0
         }
       }

@@ -1081,7 +1115,7 @@ export async function orchestrateProjectAssistantTurn(input: {
           }

           let trajectory = null;
-          let trajectoryBootstrapPresence = await resolveTrajectoryBootstrapPresence(
+          const trajectoryBootstrapPresence = await resolveTrajectoryBootstrapPresence(
             oa.cycleServices.trajectories,
             project.projectId,
           );
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
index 2b7d6fb2..03581f3a 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
@@ -113,6 +113,28 @@ const NORA_ACTIVE_CYCLE_WORK_ITEM_REQUIRED = [
   "recommendedOptionRef",
 ] as const;

+/**
+ * P6-HQA-02 REC-01 Option B — Nora candidate relation to open Work Recommendations.
+ * Candidate signal only — never Product truth / never materialization authority.
+ */
+export const NORA_WORK_RECOMMENDATION_RELATION_KINDS = [
+  "NEW",
+  "ALREADY_COVERED",
+  "DISTINCT_RELATED",
+  "CONTRADICTORY",
+  "UNCERTAIN",
+] as const;
+
+export type NoraWorkRecommendationRelationKind =
+  (typeof NORA_WORK_RECOMMENDATION_RELATION_KINDS)[number];
+
+const NORA_RECOMMENDATION_ITEM_REQUIRED = [
+  ...NORA_ACTIVE_CYCLE_WORK_ITEM_REQUIRED,
+  "trackingRationale",
+  "relationKind",
+  "relatedRecommendationRef",
+] as const;
+
 /**
  * D-GF-ACW-01 — non-authoritative active-cycle cognitive work items (no ids).
  *
@@ -121,6 +143,10 @@ const NORA_ACTIVE_CYCLE_WORK_ITEM_REQUIRED = [
  * - Recommendation: recommendedOptionRef = string | null
  * - all other types: recommendedOptionRef = null only
  *
+ * P6-HQA-02 REC-01 Option B — Recommendation-only structured materialization
+ * candidates: trackingRationale, relationKind, relatedRecommendationRef.
+ * Studio verifies references and decides materialization; Nora never authorizes.
+ *
  * Discriminated via nested anyOf (OpenAI Responses json_schema strict:true).
  * Recommendation ≠ HumanDecision; never promotes trajectory.
  */
@@ -129,7 +155,7 @@ export const NORA_ACTIVE_CYCLE_WORK_ITEM_SCHEMA = {
     {
       type: "object" as const,
       additionalProperties: false as const,
-      required: [...NORA_ACTIVE_CYCLE_WORK_ITEM_REQUIRED],
+      required: [...NORA_RECOMMENDATION_ITEM_REQUIRED],
       properties: {
         type: {
           type: "string" as const,
@@ -143,6 +169,23 @@ export const NORA_ACTIVE_CYCLE_WORK_ITEM_SCHEMA = {
         recommendedOptionRef: {
           anyOf: [{ type: "string" as const }, { type: "null" as const }],
         },
+        /**
+         * Why durable follow-up is needed — candidate signal, not authorization.
+         * Must not merely repeat statement.
+         */
+        trackingRationale: { type: "string" as const },
+        /** Candidate relation to open Work Recommendations — Studio verifies. */
+        relationKind: {
+          type: "string" as const,
+          enum: [...NORA_WORK_RECOMMENDATION_RELATION_KINDS],
+        },
+        /**
+         * Durable epistemicItemId of an open Work Recommendation from Studio
+         * context when relationKind requires a reference; otherwise null.
+         */
+        relatedRecommendationRef: {
+          anyOf: [{ type: "string" as const }, { type: "null" as const }],
+        },
       },
     },
     {
@@ -196,6 +239,13 @@ export type NoraActiveCycleWorkItem = {
    * Null / omitted for non-trajectory Recommendations. Never authority Alone.
    */
   recommendedOptionRef?: string | null;
+  /**
+   * P6-HQA-02 REC-01 Option B — Recommendation-only. Transient Nora signal;
+   * not persisted on EpistemicItem (no migration / no second store).
+   */
+  trackingRationale?: string;
+  relationKind?: NoraWorkRecommendationRelationKind;
+  relatedRecommendationRef?: string | null;
 };

 export type NoraActiveCycleWorkOutput = {
@@ -500,6 +550,26 @@ export function normalizeActiveCycleRecommendedOptionRef(
   return trimmed;
 }

+const NORA_WORK_RECOMMENDATION_RELATION_KIND_SET = new Set<string>(
+  NORA_WORK_RECOMMENDATION_RELATION_KINDS,
+);
+
+/**
+ * Normalize relatedRecommendationRef (durable EpistemicItem id from Studio context).
+ * Empty → null. Does not invent ids; Studio still verifies membership.
+ */
+export function normalizeRelatedRecommendationRef(
+  value: unknown,
+): string | null {
+  if (value === null || value === undefined) return null;
+  if (typeof value !== "string") return null;
+  const trimmed = value.trim();
+  if (!trimmed) return null;
+  // Fail-closed: must look like a durable epistemic id communicated by Studio.
+  if (!/^epi:[a-z0-9][a-z0-9:_-]*$/i.test(trimmed)) return null;
+  return trimmed;
+}
+
 export function isNoraActiveCycleWorkItem(
   value: unknown,
 ): value is NoraActiveCycleWorkItem {
@@ -528,6 +598,14 @@ export function isNoraActiveCycleWorkItem(
     if (rawRef !== undefined && rawRef !== null) {
       return false;
     }
+    // Option B fields are Recommendation-only.
+    if (
+      "trackingRationale" in o ||
+      "relationKind" in o ||
+      "relatedRecommendationRef" in o
+    ) {
+      return false;
+    }
     return true;
   }
   if (
@@ -539,6 +617,20 @@ export function isNoraActiveCycleWorkItem(
       return false;
     }
   }
+  // P6-HQA-02 REC-01 Option B — required structured materialization contract.
+  if (typeof o.trackingRationale !== "string") return false;
+  if (
+    !NORA_WORK_RECOMMENDATION_RELATION_KIND_SET.has(String(o.relationKind))
+  ) {
+    return false;
+  }
+  if (!("relatedRecommendationRef" in o)) return false;
+  const related = o.relatedRecommendationRef;
+  if (related !== null && related !== undefined) {
+    if (normalizeRelatedRecommendationRef(related) === null) {
+      return false;
+    }
+  }
   return true;
 }

diff --git a/projects/sfia-studio/app/lib/oa/cycle/index.ts b/projects/sfia-studio/app/lib/oa/cycle/index.ts
index 4a3d74e1..7cdd604f 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/index.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/index.ts
@@ -94,6 +94,17 @@ export {
   type TrajectoryDecisionSupportState,
   type WorkRecommendationProjectionCard,
 } from "./application/deriveWorkRecommendations";
+export {
+  filterActiveCycleWorkItemsForProspectiveMaterialization,
+  isExploitableTrackingRationale,
+  openWorkRecommendationFactsForCycle,
+  openWorkRecommendationStatementsForCycle,
+  qualifyProspectiveWorkRecommendationMaterialization,
+  type OpenWorkRecommendationFact,
+  type ProspectiveMaterializationPlanItem,
+  type ProspectiveWorkRecommendationMaterializationDecision,
+  type ProspectiveWorkRecommendationSuppressReason,
+} from "./application/qualifyProspectiveWorkRecommendationMaterialization";
 export {
   deriveFinalizationApplicability,
   obligationPolicySubjectFor,
```

---

## 17. Réserves / dette / sortie

Réserves :
- Signaux Nora restent candidats ; Studio n'établit pas d'équivalence sémantique générale.
- DISTINCT_RELATED / CONTRADICTORY → abstention automatique (pas de HD inventée).
- trackingRationale non durable historiquement.
- Qualité REAL Nora non prouvée.

Dette / sortie :
- Si auditabilité de trackingRationale devient obligatoire → arbitrage Morris schema (STOP structural).
- Rejeu Human QA après intégration autorisée.
- REC-02 reste RESERVED.

---

## 18. Décisions Morris restantes

1. Revue ChatGPT Option B.
2. GO intégration projet distinct (commit/PR).
3. Rejeu Human QA P6.
4. GO REAL distinct si campagne fournisseur.

---

## 19. Verdict

**LOCAL OPTION B CANDIDATE — READY FOR CHATGPT REVIEW**

Anti-claims : ≠ PR readiness · ≠ commit projet · ≠ P6 GLOBAL PASS · ≠ v3 ADOPTED · ≠ READY FOR REAL global.
