# SFIA Review Pack — FULL
# P6-HQA-02 — REC-01 — OPTION B CORRECTIVE PASS 02
# Local Bounded Prospective Correction (template v2.6 §7.5)

## Meta
- Date / heure : **2026-10-10 19:51:07 CEST** (Europe/Paris)
- Macro : STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
- Campagne : P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
- Lot : **P6-HQA-02 — REC-01 Option B Corrective Pass 02**
- Findings : REC-B-01 · REC-B-02 · REC-B-03
- Milestone : P6 — Global Integrated Product QA / Phase 5 Human QA
- Cycle projet : **8 — Delivery / implémentation**
- Profil : **Critical**
- Typologie : EVOL — corrective prospective
- Capacités : V3-F05, V3-F04, V3-F02, V3-F14
- GO Morris : **GO — CORRECTION LOCALE OPTION B**
- Commit / push / PR / merge projet : **NON**
- P6 GLOBAL PASS : **NO**
- Runtime v3 ADOPTED : **NO**
- Synthesis only : **no**
- Base main / HEAD : `8ed61737df30db270bf871eedad1535020fd1c11`
- Branche : `fix/studio-p6-hqa-02-work-recommendation-materialization`
- Review Handoff source : `844c105dc5a19fdd96cd6366b39d5bcc2293682e`

---

## 1. Local Git Truth Check

| Check | Result |
|-------|--------|
| Worktree | `/Users/morris/Projects/sfia-workspace-p6-hqa-02` |
| Branche | `fix/studio-p6-hqa-02-work-recommendation-materialization` |
| HEAD | `8ed61737df30db270bf871eedad1535020fd1c11` |
| origin/main | `8ed61737df30db270bf871eedad1535020fd1c11` |
| Staged | vide |
| Commit projet | aucun |
| Candidate Option B + CP01 + UX-REC-02 | **préservée** |

### status / diffstat

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

```
 .tmp-sfia-review/chatgpt-review.md                 | 1907 ++++++++++++++++++--
 .../corrProof06.artifactObligation.d0.test.ts      |    4 +
 .../chatFirstGovernedDecisionLoop.ui.test.tsx      |   10 +-
 .../activeCycleCognitiveWork.d0.test.ts            |  137 ++
 .../noraConversationalInitiative.d0.test.ts        |    3 +
 ...anticContinuity.corr02.c2ProductTurn.d0.test.ts |    9 +
 .../pilotNoraStudioSemanticContinuity.d0.test.ts   |    6 +
 .../studioCognitiveContext.test.ts                 |    8 +
 .../pre-m6-product-ui/surfaces/JournalSurface.tsx  |   10 +-
 .../project-assistant/buildProjectSystemPrompt.ts  |   19 +
 .../project-assistant/f2/studioCognitiveContext.ts |  130 +-
 .../materializeActiveCycleWork.ts                  |   41 +-
 .../features/project-assistant/orchestrateTurn.ts  |   46 +-
 .../noraProductTurnOutputType.ts                   |   94 +-
 projects/sfia-studio/app/lib/oa/cycle/index.ts     |   13 +
 15 files changed, 2284 insertions(+), 153 deletions(-)
```

Cached: `(empty)`

Handoff précédent Git : `844c105d` accessible — contenu local non publié préservé avant reset pack.

---

## 2. GO Morris / Qualification SFIA

GO CORRECTION LOCALE OPTION B uniquement.
Pas de nouveau classificateur / regex d'intention / moteur parallèle / persistence / migration / REAL.
Profil Critical — aucun arbitrage architectural implicite.

---

## 3. Sources / Convergence

Doctrine ACTIVE · Roadmap P6 · C1/P2 validés · P6 Human QA IN PROGRESS · P6 PASS=NO · v3 NON ADOPTED.
CKC Cycle 8 : fallback synthétique.
Handoff lu : Option B initiale @ `844c105d`.

---

## 4. État candidat initial (Option B avant CP02)

- Schéma Recommendation : trackingRationale / relationKind / relatedRecommendationRef
- workRecommendationsContext COMPLETE/PARTIAL/UNAVAILABLE exposé à Nora
- Qualification : NEW + rationale non-echo → mint possible **sans** ancrage Product ni couverture consommée
- DISTINCT_RELATED / CONTRADICTORY → abstention systématique
- sourceIndexes préservés (CP01)

---

## 5. Matrice frontière Nora / Product / Studio

| Couche | Rôle |
|--------|------|
| A. Jugement sémantique Nora | relationKind, trackingRationale, statement — **candidats** |
| B. Donnée Product autoritative | open WR ids/statements, cycleInstanceId, coverage projection, disposition |
| C. Contrôle déterministe Studio | schema, ref membership, exact duplicate, exact guidance match, Product-anchor citation, coverage gate |
| D. Incertitude résiduelle | Nora peut mal labelliser NEW / DISTINCT — **non éliminée déterministiquement** |
| E. Effet durable | mint EpistemicItem Recommendation **ou** abstention ; jamais mutation historique ; jamais HD inventée |

---

## 6. REC-B-01 — Matérialité

### Reproduction
statement « Je te propose d'examiner un exemple concret de retard. »
trackingRationale « Cette proposition nécessite un suivi. »
relationKind=NEW, coverage=COMPLETE → **avant** : materialize possible.

### Cause
trackingRationale non vide ≠ preuve de nécessité de suivi durable.

### Correction
Exiger un **ancrage Product vérifiable** dans trackingRationale :
cite `cycleInstanceId` **ou** un `epi:…` ouvert **ou** `recommendedOptionRef`.
Ce n'est **pas** une détection d'intention par regex/mots-clés.
+ garde mécanique : exact match conversationGuidance → `conversational_channel_exact`.

### Limite explicite
Politique de confiance bornée : même avec ancrage + COMPLETE, le jugement Nora reste candidat.
**≠ preuve déterministe de pertinence sémantique.**

### Après
Boilerplate sans ancrage → `missing_product_anchor`.
NEW légitime citant `cycinst:…` sous COMPLETE → mint possible.

---

## 7. REC-B-02 — Couverture / continuité

### Reproduction
15 opens, budget 12 → coverage=PARTIAL, NEW textuellement distinct → mint possible avant.

### Cause
Couverture Nora non consommée par la qualification serveur.

### Correction
`orchestrateTurn` passe `studio.workRecommendationsContext.coverage` au filtre.
- UNAVAILABLE / Product unread → abstention WR
- PARTIAL → `insufficient_context_coverage` pour NEW / DISTINCT / CONTRADICTORY
- COMPLETE requis pour mint de nouveauté/distinctivité
- ALREADY_COVERED résolvable sur faits Product même sous PARTIAL
- Observations / autres ACW **non bloqués**

Product reader available ≠ COMPLETE ≠ équivalence sémantique.

---

## 8. REC-B-03 — Distinctivité / contradiction

### Avant
DISTINCT_RELATED / CONTRADICTORY → abstention systématique.

### Correction (contrats existants, pas de nouvelle taxonomie)
Sous COMPLETE + ref ouverte valide + rationale ancrée Product + statement non exact-duplicate :
- **DISTINCT_RELATED** → mint WR **coexistante** (liée par signal Nora ; Studio vérifie ref)
- **CONTRADICTORY** → mint coexistante ; **≠ équivalence** ; **aucune disposition/remplacement** de l'existante
Sous PARTIAL → abstention.
Ref invalide → abstention (pas de similarité texte).
UNCERTAIN → abstention.
ALREADY_COVERED → pas de mint ; historique inchangé.

Aucune HumanDecision inventée pour Recommendation ordinaire.

---

## 9. Currentness / références

Réutilisation : open WR via `projectCycleWorkRecommendations` (status active, sans disposition).
Pas de second Currentness Engine.
Refs stale/invalides → pas de mint.
Pas de mutation de l'objet référencé.
Trajectory currentness modules lus pour qualification de réutilisation — non étendus (KEEP).

---

## 10. Idempotence intégrée

Preuve exécutée : filter → materializeActiveCycleWork(+itemSourceIndexes) → EpistemicItem → LPS → rejeu même logicalTurnId.
- Rec+Obs premier passage : 2 creates
- Rejeu : Rec filtrée (exact open), Obs sourceIndex=1 stable, idempotent, createdIds=[]
- Pas de doublon LPS

---

## 11. Préservation historique

Prospective only. existingItems frozen dans tests contradiction.
UX-REC-02 KEEP. REC-02 RESERVED.

---

## 12. Tests exécutés (ce cycle)

| Suite | Result |
|-------|--------|
| qualify Option B CP02 (16) | **PASS** |
| integrated idempotence filter→UoW→LPS | **PASS** |
| workRecommendationsContext coverage (3) | **PASS** |
| UX-REC-02 | **PASS** |
| studioCognitiveContext (11) | **PASS** |
| deriveWorkRecommendations (2) | **PASS** |
| chatFirstGovernedDecisionLoop (11) | **PASS** |
| pilotNoraStudioSemanticContinuity.d0 (15) | **PASS** |
| CORR-ACW-OPTREF (schema) | **PASS** |
| tsc --noEmit | **PASS** |
| ESLint ciblé | **PASS** |
| git diff --check | **PASS** (EOF fix) |
| COG-01 / UX-REC-01 / REC-03 / JRN-01 Human QA | **NOT RUN** |
| REAL provider | **NOT RUN** |

---

## 13. Fake / Real

Atteint : **DETERMINISTIC PROVEN AT CORRECTED SCOPE** (invariants testés).
Hors scope : REAL BOUNDARY / E2E REAL / P6 PASS / v3 ADOPTED.
Risque résiduel : Nora peut coller un cycleId et mal labelliser NEW — qualifié honnêtement, non « prouvé impossible ».

---

## 14. Fichiers

Modifiés / créés (cœur CP02) :
- `qualifyProspectiveWorkRecommendationMaterialization.ts` (réécrit CP02)
- tests qualify CP02
- `orchestrateTurn.ts` (coverage wiring)
- `buildProjectSystemPrompt.ts` (ancrage Product)
- `lib/oa/cycle/index.ts`
- `activeCycleCognitiveWork.d0.test.ts` (idempotence intégrée)

Préservés : schéma Option B, studioCognitiveContext coverage, UX-REC-02, materialize sourceIndexes.

---

## 15. Contenu complet — qualifyProspectiveWorkRecommendationMaterialization.ts

```typescript
/**
 * P6-HQA-02 / REC-01 Option B — Corrective Pass 02.
 *
 * Prospective Work Recommendation materialization (Studio authority):
 *   Nora structured Recommendation candidate
 *   → Product open Work Recommendation facts + coverage
 *   → reference resolution / product-anchor check
 *   → materialize | abstain
 *
 * Corrective Pass 02 findings:
 * - REC-B-01: NEW + non-empty rationale ≠ materiality proof; require Product anchor citation.
 * - REC-B-02: consume COMPLETE/PARTIAL/UNAVAILABLE; PARTIAL/UNAVAILABLE ⇒ no new mint.
 * - REC-B-03: DISTINCT_RELATED / CONTRADICTORY may mint as distinct coexisting items when
 *   ref valid + coverage COMPLETE + product-anchored rationale; never mutate/dispose prior.
 *
 * No lexical/Jaccard/keyword business classifier.
 * Exact statement re-emission and exact conversationGuidance match are mechanical guards only.
 * Corrective Pass 01: preserve original ACW sourceIndexes.
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

/** Coverage of the open-WR context presented to Nora / used for novelty claims. */
export type OpenWorkRecommendationsCoverage =
  | "COMPLETE"
  | "PARTIAL"
  | "UNAVAILABLE";

export type ProspectiveWorkRecommendationSuppressReason =
  | "missing_structured_contract"
  | "insufficient_tracking_rationale"
  | "missing_product_anchor"
  | "insufficient_context_coverage"
  | "uncertain_relation"
  | "already_covered"
  | "invalid_related_ref"
  | "exact_open_duplicate"
  | "conversational_channel_exact"
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
 * trackingRationale presence alone never proves materiality.
 * Reject empty / whitespace / mere statement echo.
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

/**
 * Product-verifiable anchor citation — not semantic intent detection.
 * trackingRationale must cite at least one authoritative Product id from context:
 * cycleInstanceId, an open Work Recommendation epistemicItemId, or recommendedOptionRef.
 */
export function trackingRationaleCitesProductAnchor(
  trackingRationale: string | null | undefined,
  anchors: {
    readonly cycleInstanceId: string;
    readonly openRecommendationIds: readonly string[];
    readonly recommendedOptionRef?: string | null;
  },
): boolean {
  if (typeof trackingRationale !== "string") return false;
  const rationale = trackingRationale;
  const optionRef = anchors.recommendedOptionRef?.trim();
  if (optionRef && rationale.includes(optionRef)) return true;
  const cycleId = anchors.cycleInstanceId.trim();
  if (cycleId && rationale.includes(cycleId)) return true;
  for (const id of anchors.openRecommendationIds) {
    const trimmed = id.trim();
    if (trimmed && rationale.includes(trimmed)) return true;
  }
  return false;
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

function resolveCoverage(input: {
  readonly openRecommendationsContextAvailable?: boolean;
  readonly openWorkRecommendationsCoverage?: OpenWorkRecommendationsCoverage;
}): OpenWorkRecommendationsCoverage {
  if (input.openRecommendationsContextAvailable === false) {
    return "UNAVAILABLE";
  }
  return input.openWorkRecommendationsCoverage ?? "UNAVAILABLE";
}

/**
 * Qualify whether a single ACW Recommendation candidate should mint a durable
 * Work Recommendation. Structured Option B + Corrective Pass 02.
 *
 * Bounded trust: Nora's relationKind/trackingRationale are candidate signals.
 * Studio verifies Product facts, coverage, anchors, and exact mechanical guards.
 * Residual semantic risk (Nora mis-labeling) is not deterministically eliminated.
 */
export function qualifyProspectiveWorkRecommendationMaterialization(input: {
  readonly statement: string;
  readonly recommendedOptionRef?: string | null;
  readonly trackingRationale?: string | null;
  readonly relationKind?: NoraWorkRecommendationRelationKind | null;
  readonly relatedRecommendationRef?: string | null;
  readonly conversationGuidanceStatement?: string | null | undefined;
  readonly openWorkRecommendationStatements?: readonly string[];
  readonly openWorkRecommendationFacts?: readonly OpenWorkRecommendationFact[];
  readonly cycleInstanceId?: string;
  /**
   * Coverage of the open-WR context used for novelty / distinctness claims.
   * PARTIAL / UNAVAILABLE never authorize NEW / DISTINCT / CONTRADICTORY mint.
   */
  readonly openWorkRecommendationsCoverage?: OpenWorkRecommendationsCoverage;
  /**
   * When false, open Recommendations could not be loaded — fail-closed.
   */
  readonly openRecommendationsContextAvailable?: boolean;
}): ProspectiveWorkRecommendationMaterializationDecision {
  const statement = input.statement.trim();
  if (!statement) {
    return { materialize: false, reason: "missing_structured_contract" };
  }

  const coverage = resolveCoverage(input);
  if (coverage === "UNAVAILABLE") {
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

  const statementKey = normalizeExact(statement);

  // Exact conversationGuidance match → conversational channel, not durable WR.
  const guidance = (input.conversationGuidanceStatement ?? "").trim();
  if (guidance && normalizeExact(guidance) === statementKey) {
    return { materialize: false, reason: "conversational_channel_exact" };
  }

  // Exact re-emission guard (mechanical — not semantic equivalence).
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
    // Disposition of "already covered" needs a resolvable open ref (server facts).
    if (!relatedProvided || !relatedFact) {
      return { materialize: false, reason: "invalid_related_ref" };
    }
    return { materialize: false, reason: "already_covered" };
  }

  // Mint paths require COMPLETE coverage — PARTIAL ≠ novelty/distinctness proof.
  if (coverage === "PARTIAL") {
    return { materialize: false, reason: "insufficient_context_coverage" };
  }

  if (
    relationKind === "DISTINCT_RELATED" ||
    relationKind === "CONTRADICTORY"
  ) {
    // Valid open ref required. Never treat as equivalence / never mutate prior.
    // When COMPLETE + product-anchored rationale: mint as coexisting distinct item.
    if (!relatedProvided || !relatedFact) {
      return { materialize: false, reason: "invalid_related_ref" };
    }
    if (
      !isExploitableTrackingRationale(input.trackingRationale, statement)
    ) {
      return { materialize: false, reason: "insufficient_tracking_rationale" };
    }
    if (
      !trackingRationaleCitesProductAnchor(input.trackingRationale, {
        cycleInstanceId: input.cycleInstanceId ?? "",
        openRecommendationIds: openFacts.map((f) => f.epistemicItemId),
        recommendedOptionRef: input.recommendedOptionRef,
      })
    ) {
      return { materialize: false, reason: "missing_product_anchor" };
    }
    // CONTRADICTORY ≠ equivalence; DISTINCT_RELATED ≠ auto-collapse.
    // Coexisting durable candidate allowed; historical item unchanged.
    return { materialize: true, reason: "justified_durable_work" };
  }

  // relationKind === "NEW"
  if (relatedProvided && !relatedFact) {
    return { materialize: false, reason: "invalid_related_ref" };
  }

  if (
    !isExploitableTrackingRationale(input.trackingRationale, statement)
  ) {
    return { materialize: false, reason: "insufficient_tracking_rationale" };
  }

  if (
    !trackingRationaleCitesProductAnchor(input.trackingRationale, {
      cycleInstanceId: input.cycleInstanceId ?? "",
      openRecommendationIds: openFacts.map((f) => f.epistemicItemId),
      recommendedOptionRef: input.recommendedOptionRef,
    })
  ) {
    return { materialize: false, reason: "missing_product_anchor" };
  }

  // Trajectory-bound + NEW + COMPLETE + product-anchored rationale.
  if (hasTrajectoryRecommendedOptionRef(input.recommendedOptionRef)) {
    return { materialize: true, reason: "justified_durable_work" };
  }

  // Bounded trust residual: Nora's NEW remains a candidate signal.
  // Studio verified COMPLETE coverage + Product anchor + non-echo rationale.
  // This is NOT deterministic proof of semantic materiality.
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
 * Non-Recommendation items are never blocked by WR coverage.
 */
export function filterActiveCycleWorkItemsForProspectiveMaterialization(input: {
  readonly items: ReadonlyArray<NoraActiveCycleWorkItem>;
  readonly conversationGuidanceStatement?: string | null | undefined;
  readonly existingItems: ReadonlyArray<WorkRecommendationItemLike>;
  readonly cycleInstanceId: string;
  readonly trajectoryDecisionSupportState: TrajectoryDecisionSupportState;
  readonly openRecommendationsContextAvailable?: boolean;
  readonly openWorkRecommendationsCoverage?: OpenWorkRecommendationsCoverage;
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
  const coverage: OpenWorkRecommendationsCoverage = !contextAvailable
    ? "UNAVAILABLE"
    : (input.openWorkRecommendationsCoverage ?? "UNAVAILABLE");

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
      cycleInstanceId: input.cycleInstanceId,
      openWorkRecommendationsCoverage: coverage,
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

## 16. Contenu complet — qualifyProspective…d0.test.ts

```typescript
/**
 * P6-HQA-02 / REC-01 Option B — Corrective Pass 02.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import Ajv from "ajv";
import {
  filterActiveCycleWorkItemsForProspectiveMaterialization,
  isExploitableTrackingRationale,
  qualifyProspectiveWorkRecommendationMaterialization,
  trackingRationaleCitesProductAnchor,
} from "@/lib/oa/cycle/application/qualifyProspectiveWorkRecommendationMaterialization";
import { activeCycleWorkEpistemicItemId } from "@/features/project-assistant/materializeActiveCycleWork";
import {
  NORA_ACTIVE_CYCLE_WORK_ITEM_SCHEMA,
  isNoraActiveCycleWorkItem,
  type NoraActiveCycleWorkItem,
  type NoraWorkRecommendationRelationKind,
} from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";

const CYCLE = "cycinst:qa-rec01-b";

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
      `Orientation durable pour ${CYCLE} — suivi propre hors tour.`,
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
});

describe("P6-HQA-02 REC-B-01 materiality", () => {
  it("NEW + boilerplate rationale without Product anchor does not mint", () => {
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement:
        "Je te propose d'examiner un exemple concret de retard.",
      trackingRationale: "Cette proposition nécessite un suivi.",
      relationKind: "NEW",
      relatedRecommendationRef: null,
      cycleInstanceId: CYCLE,
      openWorkRecommendationsCoverage: "COMPLETE",
      openWorkRecommendationFacts: [],
    });
    expect(decision).toEqual({
      materialize: false,
      reason: "missing_product_anchor",
    });
    expect(
      trackingRationaleCitesProductAnchor("Cette proposition nécessite un suivi.", {
        cycleInstanceId: CYCLE,
        openRecommendationIds: [],
      }),
    ).toBe(false);
  });

  it("NEW + exploitable rationale citing cycleInstanceId may mint under COMPLETE", () => {
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement:
        "Je recommande de prioriser l'analyse du suivi d'avancement avant celle de la planification.",
      trackingRationale: `Orientation de travail distincte pour ${CYCLE} nécessitant un suivi propre hors tour.`,
      relationKind: "NEW",
      relatedRecommendationRef: null,
      cycleInstanceId: CYCLE,
      openWorkRecommendationsCoverage: "COMPLETE",
      openWorkRecommendationFacts: [],
    });
    expect(decision).toEqual({
      materialize: true,
      reason: "justified_durable_work",
    });
  });

  it("exact conversationGuidance match stays non-durable", () => {
    const statement =
      "Je te propose d'examiner un exemple concret de retard.";
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement,
      trackingRationale: `Suite pour ${CYCLE}`,
      relationKind: "NEW",
      relatedRecommendationRef: null,
      conversationGuidanceStatement: statement,
      cycleInstanceId: CYCLE,
      openWorkRecommendationsCoverage: "COMPLETE",
      openWorkRecommendationFacts: [],
    });
    expect(decision).toEqual({
      materialize: false,
      reason: "conversational_channel_exact",
    });
  });

  it("trackingRationale echo of statement is not exploitable", () => {
    expect(
      isExploitableTrackingRationale(
        "Prioriser le suivi avant la planification.",
        "Prioriser le suivi avant la planification.",
      ),
    ).toBe(false);
  });
});

describe("P6-HQA-02 REC-B-02 coverage continuity", () => {
  it("PARTIAL blocks NEW even when statement differs from all opens", () => {
    const opens = Array.from({ length: 15 }, (_, i) => ({
      epistemicItemId: `epi:acw:open-${i}`,
      statement: `Recommandation ouverte numéro ${i} sur le suivi.`,
    }));
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement:
        "Documenter les responsabilités de livraison pour le prochain jalon.",
      trackingRationale: `Nouvelle orientation pour ${CYCLE} — suivi distinct.`,
      relationKind: "NEW",
      relatedRecommendationRef: null,
      cycleInstanceId: CYCLE,
      openWorkRecommendationsCoverage: "PARTIAL",
      openWorkRecommendationFacts: opens.slice(0, 12),
    });
    expect(decision).toEqual({
      materialize: false,
      reason: "insufficient_context_coverage",
    });
  });

  it("UNAVAILABLE blocks mint", () => {
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement: "Structurer le cadrage autour des responsabilités.",
      trackingRationale: `Suivi pour ${CYCLE}`,
      relationKind: "NEW",
      relatedRecommendationRef: null,
      cycleInstanceId: CYCLE,
      openWorkRecommendationsCoverage: "UNAVAILABLE",
      openWorkRecommendationFacts: [],
    });
    expect(decision).toEqual({
      materialize: false,
      reason: "open_context_unavailable",
    });
  });

  it("PARTIAL does not block non-Recommendation ACW items", () => {
    const plan = filterActiveCycleWorkItemsForProspectiveMaterialization({
      items: [
        rec("Documenter les responsabilités de livraison.", {
          trackingRationale: `Nouvelle orientation pour ${CYCLE}.`,
        }),
        observation("Observation indépendante du cycle."),
      ],
      existingItems: [],
      cycleInstanceId: CYCLE,
      trajectoryDecisionSupportState: "NONE",
      openWorkRecommendationsCoverage: "PARTIAL",
    });
    expect(plan.items.map((i) => i.type)).toEqual(["Observation"]);
    expect(plan.sourceIndexes).toEqual([1]);
    expect(plan.suppressed[0]!.reason).toBe("insufficient_context_coverage");
  });

  it("ALREADY_COVERED still resolves against Product facts under PARTIAL", () => {
    const openId = "epi:acw:open-followup-1";
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement: "Commencer par analyser le suivi d'avancement.",
      trackingRationale: `Déjà couvert par ${openId}`,
      relationKind: "ALREADY_COVERED",
      relatedRecommendationRef: openId,
      cycleInstanceId: CYCLE,
      openWorkRecommendationsCoverage: "PARTIAL",
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
});

describe("P6-HQA-02 REC-B-03 distinctiveness / contradiction", () => {
  const openId = "epi:acw:open-priority-1";
  const openFacts = [
    {
      epistemicItemId: openId,
      statement: "Prioriser le suivi avant la planification.",
    },
  ];

  it("DISTINCT_RELATED with valid ref + COMPLETE + anchor may mint coexisting WR", () => {
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement: "Documenter les responsabilités de suivi en parallèle.",
      trackingRationale: `Distinct de ${openId} pour ${CYCLE} — suivi propre requis.`,
      relationKind: "DISTINCT_RELATED",
      relatedRecommendationRef: openId,
      cycleInstanceId: CYCLE,
      openWorkRecommendationsCoverage: "COMPLETE",
      openWorkRecommendationFacts: openFacts,
    });
    expect(decision).toEqual({
      materialize: true,
      reason: "justified_durable_work",
    });
  });

  it("CONTRADICTORY is never equivalence; may mint coexisting without disposing prior", () => {
    const existing = Object.freeze([
      Object.freeze({
        type: "Recommendation",
        status: "active",
        epistemicItemId: openId,
        source: "active-cycle-work:nora",
        statement: "Prioriser le suivi avant la planification.",
        createdAt: "2026-10-01T00:00:00.000Z",
        relatedObjects: Object.freeze([CYCLE]),
      }),
    ]);
    const before = JSON.stringify(existing);
    const filtered = filterActiveCycleWorkItemsForProspectiveMaterialization({
      items: [
        rec("Prioriser la planification avant le suivi.", {
          relationKind: "CONTRADICTORY",
          relatedRecommendationRef: openId,
          trackingRationale: `Contradiction candidate vs ${openId} sur ${CYCLE}.`,
        }),
      ],
      existingItems: existing,
      cycleInstanceId: CYCLE,
      trajectoryDecisionSupportState: "NONE",
      openWorkRecommendationsCoverage: "COMPLETE",
    });
    expect(JSON.stringify(existing)).toBe(before);
    expect(existing[0]!.status).toBe("active");
    expect(existing[0]!.epistemicItemId).toBe(openId);
    expect(filtered.items).toHaveLength(1);
    expect(filtered.items[0]!.type).toBe("Recommendation");
  });

  it("CONTRADICTORY under PARTIAL abstains", () => {
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement: "Prioriser la planification avant le suivi.",
      trackingRationale: `Contradiction vs ${openId} sur ${CYCLE}.`,
      relationKind: "CONTRADICTORY",
      relatedRecommendationRef: openId,
      cycleInstanceId: CYCLE,
      openWorkRecommendationsCoverage: "PARTIAL",
      openWorkRecommendationFacts: openFacts,
    });
    expect(decision).toEqual({
      materialize: false,
      reason: "insufficient_context_coverage",
    });
  });

  it("invalid related ref abstains without text similarity fallback", () => {
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement: "Prioriser la planification avant le suivi.",
      trackingRationale: `Réf inventée pour ${CYCLE}`,
      relationKind: "DISTINCT_RELATED",
      relatedRecommendationRef: "epi:acw:does-not-exist",
      cycleInstanceId: CYCLE,
      openWorkRecommendationsCoverage: "COMPLETE",
      openWorkRecommendationFacts: openFacts,
    });
    expect(decision).toEqual({
      materialize: false,
      reason: "invalid_related_ref",
    });
  });

  it("UNCERTAIN abstains", () => {
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement: "Peut-être prioriser le suivi.",
      trackingRationale: `Incertain pour ${CYCLE}`,
      relationKind: "UNCERTAIN",
      relatedRecommendationRef: null,
      cycleInstanceId: CYCLE,
      openWorkRecommendationsCoverage: "COMPLETE",
      openWorkRecommendationFacts: [],
    });
    expect(decision).toEqual({
      materialize: false,
      reason: "uncertain_relation",
    });
  });
});

describe("P6-HQA-02 Option B identity / sourceIndexes", () => {
  const projectId = "proj:qa-rec01-b";
  const turnCorrelationId = "turn:logical:rec01-option-b";

  it("suppressing Recommendation preserves Observation source index", () => {
    const items: NoraActiveCycleWorkItem[] = [
      rec(
        "Structurer le cadrage autour des responsabilités de suivi et des retards.",
      ),
      observation("Les retards reviennent souvent sur ce cycle."),
    ];

    const first = filterActiveCycleWorkItemsForProspectiveMaterialization({
      items,
      existingItems: [],
      cycleInstanceId: CYCLE,
      trajectoryDecisionSupportState: "NONE",
      openWorkRecommendationsCoverage: "COMPLETE",
    });
    expect(first.sourceIndexes).toEqual([0, 1]);

    const idObsFirst = activeCycleWorkEpistemicItemId({
      projectId,
      cycleInstanceId: CYCLE,
      turnCorrelationId,
      index: first.sourceIndexes[1]!,
      type: "Observation",
      statement: first.items[1]!.statement,
    });
    const idRec = activeCycleWorkEpistemicItemId({
      projectId,
      cycleInstanceId: CYCLE,
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
          relatedObjects: [CYCLE],
        },
      ],
      cycleInstanceId: CYCLE,
      trajectoryDecisionSupportState: "NONE",
      openWorkRecommendationsCoverage: "COMPLETE",
    });
    expect(replay.sourceIndexes).toEqual([1]);
    const idObsReplay = activeCycleWorkEpistemicItemId({
      projectId,
      cycleInstanceId: CYCLE,
      turnCorrelationId,
      index: replay.sourceIndexes[0]!,
      type: "Observation",
      statement: replay.items[0]!.statement,
    });
    expect(idObsReplay).toBe(idObsFirst);
  });
});
```

---

## 17. Section idempotence intégrée (extrait)

```typescript
filter → materializeActiveCycleWork → Product UoW → LPS → replay.
 */
describe("P6-HQA-02 REC-01 Option B integrated idempotence (filter→UoW→LPS→replay)", () => {
  function optionBRec(
    statement: string,
    cycleInstanceId: string,
  ): NoraActiveCycleWorkItem {
    return {
      type: "Recommendation",
      statement,
      confidence: "medium",
      blocking: null,
      recommendedOptionRef: null,
      trackingRationale: `Orientation durable pour ${cycleInstanceId} — suivi propre hors tour.`,
      relationKind: "NEW",
      relatedRecommendationRef: null,
    };
  }

  it("Recommendation+Observation: filter→write→LPS→replay keeps Observation id and no double mint", async () => {
    const s = await seedStarted("rec01-idem");
    const cycleId = s.cycle.cycleInstanceId;
    const turnCorrelationId = "turn:logical:rec01-option-b-idem";
    const payload: NoraActiveCycleWorkItem[] = [
      optionBRec(
        "Structurer le cadrage autour des responsabilités de suivi et des retards.",
        cycleId,
      ),
      {
        type: "Observation",
        statement: "Les retards reviennent souvent sur ce cycle.",
        confidence: "medium",
        blocking: null,
        recommendedOptionRef: null,
      },
    ];

    const firstFilter = filterActiveCycleWorkItemsForProspectiveMaterialization({
      items: payload,
      existingItems: [],
      cycleInstanceId: cycleId,
      trajectoryDecisionSupportState: "NONE",
      openWorkRecommendationsCoverage: "COMPLETE",
    });
    expect(firstFilter.sourceIndexes).toEqual([0, 1]);

    const facts1 = await materializeFacts(
      s.oa,
      s.projectId,
      cycleId,
      turnCorrelationId,
    );
    const mat1 = await materializeActiveCycleWork({
      ...acwMaterializeInput(s.oa, facts1, firstFilter.items),
      itemSourceIndexes: firstFilter.sourceIndexes,
    });
    expect(mat1.ok).toBe(true);
    if (!mat1.ok) throw new Error(mat1.reason);
    expect(mat1.createdIds.length).toBe(2);

    const afterFirst = await s.oa.cycleServices.epistemic.listByProject(
      s.projectId,
    );
    const acwAfterFirst = afterFirst.filter(
      (e) => e.source === ACTIVE_CYCLE_WORK_SOURCE,
    );
    expect(acwAfterFirst.length).toBeGreaterThanOrEqual(2);
    const lps1 = await s.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: s.projectId,
    });
    expect(lps1.ok).toBe(true);
    if (!lps1.ok) throw new Error("lps");
    const lpsIds1 = new Set(lps1.livingProjectState.epistemicItemIds ?? []);
    for (const item of acwAfterFirst) {
      expect(lpsIds1.has(item.epistemicItemId)).toBe(true);
    }
    const obsFirst = acwAfterFirst.find((e) => e.type === "Observation");
    expect(obsFirst).toBeTruthy();

    // Replay same logical turn: Recommendation already open → Observation @ sourceIndex 1.
    const replayFilter = filterActiveCycleWorkItemsForProspectiveMaterialization({
      items: payload,
      existingItems: afterFirst,
      cycleInstanceId: cycleId,
      trajectoryDecisionSupportState: "NONE",
      openWorkRecommendationsCoverage: "COMPLETE",
    });
    expect(replayFilter.items.map((i) => i.type)).toEqual(["Observation"]);
    expect(replayFilter.sourceIndexes).toEqual([1]);

    const facts2 = await materializeFacts(
      s.oa,
      s.projectId,
      cycleId,
      turnCorrelationId,
    );
    const mat2 = await materializeActiveCycleWork({
      ...acwMaterializeInput(s.oa, facts2, replayFilter.items),
      itemSourceIndexes: replayFilter.sourceIndexes,
    });
    expect(mat2.ok).toBe(true);
    if (!mat2.ok) throw new Error(mat2.reason);
    expect(mat2.idempotent).toBe(true);
    expect(mat2.createdIds).toEqual([]);

    const afterReplay = await s.oa.cycleServices.epistemic.listByProject(
      s.projectId,
    );
    const acwAfterReplay = afterReplay.filter(
      (e) => e.source === ACTIVE_CYCLE_WORK_SOURCE,
    );
    expect(acwAfterReplay).toHaveLength(acwAfterFirst.length);
    const obsReplay = acwAfterReplay.find((e) => e.type === "Observation");
    expect(obsReplay?.epistemicItemId).toBe(obsFirst!.epistemicItemId);

    const lps2 = await s.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: s.projectId,
    });
    expect(lps2.ok).toBe(true);
    if (!lps2.ok) throw new Error("lps2");
    const lpsIds2 = lps2.livingProjectState.epistemicItemIds ?? [];
    expect(new Set(lpsIds2).size).toBe(lpsIds2.length);
  });
});

```

---

## 18. Diff utile orchestrateTurn / prompt / index

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts b/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
index ea46da10..aa5b21e4 100644
--- a/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
+++ b/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
@@ -349,6 +349,25 @@ function buildActiveCycleWorkOutputSection(
       "recommendedOptionRef est un champ structuré — JAMAIS déduit du texte statement.",
       "Pour Recommendation hors Option trajectoire : recommendedOptionRef = null.",
       "Recommendation ≠ HumanDecision ; n'exécute rien ; ne promeut pas de trajectoire.",
+      "=== P6-HQA-02 / REC-01 Option B — contrat structuré Work Recommendation ===",
+      "Une Work Recommendation (type=Recommendation) est exclusivement un objet Product DURABLE.",
+      "Suggestion conversationnelle ordinaire → conversationGuidance SEULEMENT (zéro Recommendation).",
+      "Pour toute Recommendation, renseigne OBLIGATOIREMENT :",
+      "- trackingRationale : pourquoi un suivi durable distinct est nécessaire (≠ simple copie de statement) ;",
+      "  DOIT citer au moins un ancrage Product du contexte : cycleInstanceId, id=epi:… ouvert, ou recommendedOptionRef ;",
+      "- relationKind : NEW | ALREADY_COVERED | DISTINCT_RELATED | CONTRADICTORY | UNCERTAIN ;",
+      "- relatedRecommendationRef : id=epi:… EXACT d'une Work Recommendation ouverte du contexte, ou null.",
+      "Règles relationKind :",
+      "- ALREADY_COVERED / DISTINCT_RELATED / CONTRADICTORY → relatedRecommendationRef requis (id réel du contexte) ;",
+      "- NEW → relatedRecommendationRef = null en général ; INTERDIT si coverage=PARTIAL ou UNAVAILABLE",
+      "  — préfère UNCERTAIN ou conversationGuidance ;",
+      "- UNCERTAIN → aucune matérialisation automatique ; poursuis en conversation.",
+      "- DISTINCT_RELATED : proposition liée mais potentiellement distincte — Studio peut matérialiser",
+      "  une nouvelle WR coexistant si couverture COMPLETE et ancrage Product ; jamais fusionner.",
+      "- CONTRADICTORY ≠ équivalence ; aucun remplacement / disposition automatique de l'existante ;",
+      "  coexistence durable possible sous contrôle Studio (coverage COMPLETE + ancrage).",
+      "trackingRationale et relationKind=NEW ne sont PAS une autorisation Product — Studio décide.",
+      "Ne jamais inventer d'identifiant. Ne jamais créer de HumanDecision pour une recommandation ordinaire.",
     );
     lines.push(
       "=== INTÉGRITÉ ÉPISTÉMIQUE — Reservation ===",
diff --git a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
index f5823ff7..5c94a2da 100644
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
@@ -901,14 +902,53 @@ export async function orchestrateProjectAssistantTurn(input: {
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
+          // REC-B-02: Nora projection coverage is authoritative for novelty claims.
+          // Product reader available ≠ COMPLETE. PARTIAL/UNAVAILABLE ⇒ no new WR mint.
+          const openWorkRecommendationsCoverage =
+            !openRecommendationsContextAvailable
+              ? ("UNAVAILABLE" as const)
+              : (studio.workRecommendationsContext?.coverage ??
+                ("UNAVAILABLE" as const));
+          const prospective = filterActiveCycleWorkItemsForProspectiveMaterialization(
+            {
+              items: acwItems,
+              conversationGuidanceStatement:
+                coherent?.conversationGuidance?.statement ?? null,
+              existingItems,
+              cycleInstanceId: activeCycleId,
+              trajectoryDecisionSupportState: tdsStateForWork,
+              openRecommendationsContextAvailable,
+              openWorkRecommendationsCoverage,
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
@@ -918,7 +958,8 @@ export async function orchestrateProjectAssistantTurn(input: {
             input.beforeDurableEffect,
           );
           const mat = await materializeActiveCycleWork({
-            items: acwItems,
+            items: itemsToMaterialize,
+            itemSourceIndexes: prospective.sourceIndexes,
             facts: {
               projectId: project.projectId,
               activeCycleInstanceId: activeCycleId,
@@ -961,6 +1002,7 @@ export async function orchestrateProjectAssistantTurn(input: {
               logicalTurnId,
             };
           }
+          } // end itemsToMaterialize.length > 0
         }
       }

@@ -1081,7 +1123,7 @@ export async function orchestrateProjectAssistantTurn(input: {
           }

           let trajectory = null;
-          let trajectoryBootstrapPresence = await resolveTrajectoryBootstrapPresence(
+          const trajectoryBootstrapPresence = await resolveTrajectoryBootstrapPresence(
             oa.cycleServices.trajectories,
             project.projectId,
           );
diff --git a/projects/sfia-studio/app/lib/oa/cycle/index.ts b/projects/sfia-studio/app/lib/oa/cycle/index.ts
index 4a3d74e1..99ad4a0f 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/index.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/index.ts
@@ -94,6 +94,19 @@ export {
   type TrajectoryDecisionSupportState,
   type WorkRecommendationProjectionCard,
 } from "./application/deriveWorkRecommendations";
+export {
+  filterActiveCycleWorkItemsForProspectiveMaterialization,
+  isExploitableTrackingRationale,
+  openWorkRecommendationFactsForCycle,
+  openWorkRecommendationStatementsForCycle,
+  qualifyProspectiveWorkRecommendationMaterialization,
+  trackingRationaleCitesProductAnchor,
+  type OpenWorkRecommendationFact,
+  type OpenWorkRecommendationsCoverage,
+  type ProspectiveMaterializationPlanItem,
+  type ProspectiveWorkRecommendationMaterializationDecision,
+  type ProspectiveWorkRecommendationSuppressReason,
+} from "./application/qualifyProspectiveWorkRecommendationMaterialization";
 export {
   deriveFinalizationApplicability,
   obligationPolicySubjectFor,
```

---

## 19. Réserves / dette / exit

Réserves :
- Ancrage Product ≠ preuve sémantique de matérialité.
- Nora peut citer cycleId mécaniquement.
- Currentness Work reste basée sur projection open (active, non disposée) — pas un moteur universel P4.

Dette / sortie :
- Qualité sémantique Nora → Human QA / REAL sous GO distinct.
- Auditabilité trackingRationale transitoire inchangée (pas de persistence ajoutée).

Décisions Morris :
1. Re-revue ChatGPT CP02
2. GO intégration projet distinct
3. Rejeu Human QA
4. GO REAL distinct si besoin

---

## 20. Verdict

**LOCAL CORRECTIVE CANDIDATE — READY FOR CHATGPT RE-REVIEW**

Anti-claims : ≠ PR readiness · ≠ commit projet · ≠ P6 PASS · ≠ v3 ADOPTED · ≠ READY FOR REAL global.
