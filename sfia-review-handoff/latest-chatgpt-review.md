# SFIA Review Pack — FULL
# P6-HQA-02 — Work Recommendation Materialization & UX
# Local Bounded Prospective Delivery (template v2.6 §7.5)

## Meta
- Date / heure : **2026-10-10 17:48:07 CEST** (Europe/Paris)
- Macro : STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
- Campagne : P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
- Lot : **P6-HQA-02** — Work Recommendation Materialization & UX
- Milestone : P6 — Global Integrated Product QA / Phase 5 Human QA
- Cycle projet : **8 — Delivery / implémentation**
- Profil : **Standard**
- Typologie : EVOL — corrective prospective
- Capacités : V3-F05, V3-F04, V3-F02, V3-F14
- GO Morris : **AUTHORIZED — PROSPECTIVE PRODUCT RULE + BOUNDED LOCAL DELIVERY**
- Commit / push / PR / merge projet : **NON**
- P6 GLOBAL PASS : **NO**
- Runtime v3 ADOPTED : **NO**
- Synthesis only : **no**
- Base main : `8ed61737df30db270bf871eedad1535020fd1c11` (PR #575 POST-MERGE VERIFIED)
- Handoff précédent : `340577b39b7fe87310c4cfb924ed5596802ebf25`

---

## 1. Local Git Truth Check

| Check | Result |
|-------|--------|
| Workspace historique | `/Users/morris/Projects/sfia-workspace` @ `980064c0` — **préservé** (C14/tmp/p6-campaign/HQA-01 locaux) |
| Worktree isolé | `/Users/morris/Projects/sfia-workspace-p6-hqa-02` |
| Branche | `fix/studio-p6-hqa-02-work-recommendation-materialization` |
| HEAD worktree | `8ed61737df30db270bf871eedad1535020fd1c11` (= origin/main) |
| `origin/main` | `8ed61737df30db270bf871eedad1535020fd1c11` |
| Staged | vide |
| Collision | **NON** — travail sur worktree neuf depuis main |

### `git status --short` (worktree correctif)

```
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/chatFirstGovernedDecisionLoop.ui.test.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.tsx
 M projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
 M projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
 M projects/sfia-studio/app/lib/oa/cycle/index.ts
?? projects/sfia-studio/app/__tests__/oa/cycle/qualifyProspectiveWorkRecommendationMaterialization.d0.test.ts
?? projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.hqa.uxrec02.journalDisclaimer.ui.test.tsx
?? projects/sfia-studio/app/lib/oa/cycle/application/qualifyProspectiveWorkRecommendationMaterialization.ts
```

### Diff stat (tracked)

```
 .../chatFirstGovernedDecisionLoop.ui.test.tsx      | 10 ++++---
 .../pre-m6-product-ui/surfaces/JournalSurface.tsx  | 10 +++----
 .../project-assistant/buildProjectSystemPrompt.ts  |  9 +++++++
 .../features/project-assistant/orchestrateTurn.ts  | 31 ++++++++++++++++++++--
 projects/sfia-studio/app/lib/oa/cycle/index.ts     |  8 ++++++
 5 files changed, 56 insertions(+), 12 deletions(-)
```

Fichiers créés (untracked) :
- `qualifyProspectiveWorkRecommendationMaterialization.ts`
- `qualifyProspectiveWorkRecommendationMaterialization.d0.test.ts`
- `p6.hqa.uxrec02.journalDisclaimer.ui.test.tsx`

---

## 2. Sources / Convergence

Build Doctrine ACTIVE ON MAIN · Roadmap P6 · C1 VALIDATED · P6 Human QA IN PROGRESS · P6 PASS = NO · v3 NON ADOPTED.

Mécanismes réutilisés : `activeCycleWork` → `materializeActiveCycleWork` · `projectCycleWorkRecommendations` · `conversationGuidance` · JournalSurface cards.

KEEP architecture / ADAPT matérialisation + UI Journal · COMPLETE tests déterministes · NONE nouveau moteur/store/migration.

CKC Cycle 8 : fallback synthétique autorisé.

---

## 3. Analyse du chemin actuel (avant correction)

```
Nora structured activeCycleWork
→ orchestrateTurn eligibility / TDS validation
→ materializeActiveCycleWork (id inclut turnCorrelationId)
→ EpistemicItem source=active-cycle-work:nora
→ LPS link → projectCycleWorkRecommendations → Journal / Conversation
```

Cause d'accumulation :
1. Prompt encourageait l'émission ACW Recommendation chaque tour éligible.
2. Identité `epi:acw:` inclut le turn id → chaque tour = nouvel item.
3. Aucun gate prospectif « suggestion conversationnelle vs objet durable ».
4. Dedup projection-only (optset), pas anti-reformulation cross-turn.

---

## 4. REC-01 — Règle prospective implémentée

### Frontière serveur (pas prompt seul)

`filterActiveCycleWorkItemsForProspectiveMaterialization` appelée dans `orchestrateTurn.ts`
**après** lecture `existingItems`, **avant** `materializeActiveCycleWork`.

### Critères déterministes (pas de score LOW/MEDIUM/HIGH)

| Signal | Effet |
|--------|-------|
| `recommendedOptionRef` trajectoire + distinct | **materialize** |
| statement ≈ `conversationGuidance.statement` | **suppress** `conversational_continuation` |
| statement ≈ Work Recommendation ouverte du cycle | **suppress** `equivalent_open_exists` |
| substance identifiable (cues structuraux / non-interrogatif dense) | **materialize** |
| sinon | **suppress** `insufficient_substance` |

Prompt `buildActiveCycleWorkOutputSection` : instruction REC-01 (suggestion → guidance only).

### Strictement prospectif — preuves

- Filtre uniquement `items` candidats à l'écriture.
- `existingItems` jamais mutés (test I–N freeze JSON + ids/status).
- Aucun backfill, migration, supersession, disposition, delete historique.
- Journal continue de projeter le stock historique tel quel.

---

## 5. UX-REC-02

Suppression du paragraphe répété sur chaque carte Journal :
« RECOMMANDATION — PAS UNE DÉCISION HUMAINE. Disposez-en… »

Conservé : statement, statut « À examiner », meta, CTA « En discuter avec Nora ».
Authority Recommendation ≠ HD inchangée côté Product.

Figma : changement de contenu uniquement (pas de nouveau layout). Conformité visuelle forte **non revendiquée**.

---

## 6. REC-02 — RESERVED

ConversationSurface sélectionne toujours la première Work Recommendation active
(`slice(0,1)`, newest-first) **sans** binding tour gouverné.

Aucun `sourceTurnRef` fiable inventé. Stamp HQA-01 d'honnêteté conservé.

**REC-02 = RESERVED — MORRIS DECISION / STRUCTURAL BINDING.**

Ne bloque pas REC-01 / UX-REC-02.

---

## 7. Fichiers créés — contenu complet

### 7.1 `qualifyProspectiveWorkRecommendationMaterialization.ts`

```typescript
/**
 * P6-HQA-02 / REC-01 — prospective Work Recommendation materialization gate.
 *
 * A Work Recommendation is a durable Product object. Ordinary conversational
 * suggestions stay in conversationGuidance and MUST NOT mint EpistemicItems.
 *
 * PROSPECTIVE ONLY: filters items about to be written. Never mutates, deletes,
 * or reclassifies historical Recommendations.
 *
 * Deterministic structural gates (no numeric score, no semantic engine):
 * - trajectory option-bound Recommendations remain durable;
 * - statement ≈ conversationGuidance → conversational (no write);
 * - statement ≈ an already-open Work Recommendation on the cycle → no new write;
 * - otherwise durable when the statement carries identifiable work substance.
 */

import type { NoraActiveCycleWorkItem } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import {
  projectCycleWorkRecommendations,
  type TrajectoryDecisionSupportState,
  type WorkRecommendationItemLike,
} from "./deriveWorkRecommendations";

export type ProspectiveWorkRecommendationSuppressReason =
  | "conversational_continuation"
  | "equivalent_open_exists"
  | "insufficient_substance";

export type ProspectiveWorkRecommendationMaterializationDecision =
  | { readonly materialize: true; readonly reason: "justified_durable_work" }
  | {
      readonly materialize: false;
      readonly reason: ProspectiveWorkRecommendationSuppressReason;
    };

const COMPARE_STOP = new Set([
  "le",
  "la",
  "les",
  "de",
  "des",
  "du",
  "un",
  "une",
  "et",
  "ou",
  "que",
  "qui",
  "l",
  "on",
  "par",
  "pour",
  "au",
  "aux",
  "a",
  "en",
  "je",
  "tu",
  "vous",
  "te",
  "me",
  "d",
  "y",
  "ce",
  "ces",
  "se",
  "ne",
  "pas",
  "plus",
  "avec",
  "dans",
  "sur",
  "maintenant",
  "ensuite",
  "alors",
  "seulement",
  "celles",
  "ceux",
  "cette",
  "cet",
  "ete",
  "etait",
  "etaient",
  "sont",
  "est",
  "il",
  "elle",
  "ils",
  "elles",
  "peux",
  "peut",
  "pouvez",
  "voudrais",
  "souhaite",
  "souhaites",
  "souhaitez",
  "propose",
  "recommande",
  "recommander",
]);

/** Work-orientation cues — structural, not a score. */
const WORK_SUBSTANCE_RE =
  /\b(structur|prioris|cadrer|cadrage|adopter|disposer|crit[eè]re|responsabilit|visibilit|avancement|p[eé]rim[eè]tre|objectif|livrable|trajec|option|examiner\s+(les|la|le|ce|cette)|clarifier\s+(les|la|le)|traiter\s+(le|la|les)|suivre|suivi|d[eé]marche|approche)\b/i;

function normalizeCompare(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function contentTokens(text: string): Set<string> {
  return new Set(
    normalizeCompare(text)
      .split(" ")
      .filter((w) => w.length > 2 && !COMPARE_STOP.has(w)),
  );
}

/** Content overlap for paraphrase-equivalent statements (no semantic model). */
export function workRecommendationStatementsEquivalent(
  aRaw: string,
  bRaw: string,
): boolean {
  const aNorm = normalizeCompare(aRaw);
  const bNorm = normalizeCompare(bRaw);
  if (!aNorm || !bNorm) return false;
  if (aNorm === bNorm) return true;
  if (aNorm.includes(bNorm) || bNorm.includes(aNorm)) {
    const shorter = aNorm.length <= bNorm.length ? aNorm : bNorm;
    if (shorter.length >= 24) return true;
  }
  const a = contentTokens(aRaw);
  const b = contentTokens(bRaw);
  if (a.size === 0 || b.size === 0) return false;
  let inter = 0;
  for (const w of a) if (b.has(w)) inter += 1;
  const smaller = Math.min(a.size, b.size);
  const union = a.size + b.size - inter;
  const jaccard = union === 0 ? 0 : inter / union;
  const containment = smaller === 0 ? 0 : inter / smaller;
  return inter >= 3 && (jaccard >= 0.45 || containment >= 0.55);
}

function hasTrajectoryRecommendedOptionRef(
  ref: string | null | undefined,
): boolean {
  if (typeof ref !== "string") return false;
  const trimmed = ref.trim();
  return /^opt:trajectory:/i.test(trimmed);
}

function hasIdentifiableWorkSubstance(statement: string): boolean {
  const trimmed = statement.trim();
  if (trimmed.length < 28) return false;
  if (WORK_SUBSTANCE_RE.test(trimmed)) return true;
  // Non-interrogative orientation statement of sufficient length.
  if (!/\?\s*$/.test(trimmed) && contentTokens(trimmed).size >= 5) return true;
  return false;
}

/**
 * Qualify whether a single ACW Recommendation candidate should mint a durable
 * Work Recommendation. Never inspects or mutates historical item rows.
 */
export function qualifyProspectiveWorkRecommendationMaterialization(input: {
  readonly statement: string;
  readonly recommendedOptionRef?: string | null;
  readonly conversationGuidanceStatement: string | null | undefined;
  readonly openWorkRecommendationStatements: readonly string[];
}): ProspectiveWorkRecommendationMaterializationDecision {
  const statement = input.statement.trim();
  if (!statement) {
    return { materialize: false, reason: "insufficient_substance" };
  }

  // Trajectory-bound structured Recommendation remains durable Product work.
  if (hasTrajectoryRecommendedOptionRef(input.recommendedOptionRef)) {
    const open = input.openWorkRecommendationStatements;
    for (const existing of open) {
      if (workRecommendationStatementsEquivalent(statement, existing)) {
        return { materialize: false, reason: "equivalent_open_exists" };
      }
    }
    return { materialize: true, reason: "justified_durable_work" };
  }

  const guidance = (input.conversationGuidanceStatement ?? "").trim();
  if (
    guidance &&
    workRecommendationStatementsEquivalent(statement, guidance)
  ) {
    return { materialize: false, reason: "conversational_continuation" };
  }

  for (const existing of input.openWorkRecommendationStatements) {
    if (workRecommendationStatementsEquivalent(statement, existing)) {
      return { materialize: false, reason: "equivalent_open_exists" };
    }
  }

  if (!hasIdentifiableWorkSubstance(statement)) {
    return { materialize: false, reason: "insufficient_substance" };
  }

  return { materialize: true, reason: "justified_durable_work" };
}

export function openWorkRecommendationStatementsForCycle(input: {
  readonly existingItems: ReadonlyArray<WorkRecommendationItemLike>;
  readonly cycleInstanceId: string;
  readonly trajectoryDecisionSupportState: TrajectoryDecisionSupportState;
}): string[] {
  const cards = projectCycleWorkRecommendations({
    items: input.existingItems,
    cycleInstanceId: input.cycleInstanceId,
    fallbackCycleInstanceId: input.cycleInstanceId,
    trajectoryDecisionSupportState: input.trajectoryDecisionSupportState,
  });
  return cards
    .filter((c) => c.status === "active" && !c.dispositionDecisionId)
    .map((c) => c.statement)
    .filter((s) => s.trim().length > 0);
}

/**
 * Prospective filter on ACW items before materializeActiveCycleWork.
 * Non-Recommendation items pass through unchanged. Historical rows untouched.
 */
export function filterActiveCycleWorkItemsForProspectiveMaterialization(input: {
  readonly items: ReadonlyArray<NoraActiveCycleWorkItem>;
  readonly conversationGuidanceStatement: string | null | undefined;
  readonly existingItems: ReadonlyArray<WorkRecommendationItemLike>;
  readonly cycleInstanceId: string;
  readonly trajectoryDecisionSupportState: TrajectoryDecisionSupportState;
}): {
  readonly items: NoraActiveCycleWorkItem[];
  readonly suppressed: ReadonlyArray<{
    readonly statement: string;
    readonly reason: ProspectiveWorkRecommendationSuppressReason;
  }>;
} {
  const openStatements = openWorkRecommendationStatementsForCycle({
    existingItems: input.existingItems,
    cycleInstanceId: input.cycleInstanceId,
    trajectoryDecisionSupportState: input.trajectoryDecisionSupportState,
  });

  const kept: NoraActiveCycleWorkItem[] = [];
  const suppressed: Array<{
    statement: string;
    reason: ProspectiveWorkRecommendationSuppressReason;
  }> = [];

  for (const item of input.items) {
    if (item.type !== "Recommendation") {
      kept.push(item);
      continue;
    }
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement: item.statement,
      recommendedOptionRef: item.recommendedOptionRef,
      conversationGuidanceStatement: input.conversationGuidanceStatement,
      openWorkRecommendationStatements: openStatements,
    });
    if (decision.materialize) {
      kept.push(item);
      // Newly kept statement counts as open for later items in the same turn
      // so two paraphrase Recommendations in one payload do not both mint.
      openStatements.push(item.statement.trim());
    } else {
      suppressed.push({
        statement: item.statement.trim(),
        reason: decision.reason,
      });
    }
  }

  return { items: kept, suppressed };
}
```

### 7.2 Test REC-01

```typescript
/**
 * P6-HQA-02 / REC-01 — prospective Work Recommendation materialization gate.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  filterActiveCycleWorkItemsForProspectiveMaterialization,
  qualifyProspectiveWorkRecommendationMaterialization,
  workRecommendationStatementsEquivalent,
} from "@/lib/oa/cycle/application/qualifyProspectiveWorkRecommendationMaterialization";
import type { NoraActiveCycleWorkItem } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";

function rec(
  statement: string,
  recommendedOptionRef: string | null = null,
): NoraActiveCycleWorkItem {
  return {
    type: "Recommendation",
    statement,
    confidence: "medium",
    blocking: null,
    recommendedOptionRef,
  };
}

describe("P6-HQA-02 REC-01 prospective Work Recommendation materialization", () => {
  it("A — conversational continuation question does not materialize", () => {
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement:
        "Peux-tu décrire un retard précis observé récemment dans l'équipe ?",
      recommendedOptionRef: null,
      conversationGuidanceStatement:
        "Peux-tu décrire un retard précis observé récemment dans l'équipe ?",
      openWorkRecommendationStatements: [],
    });
    expect(decision.materialize).toBe(false);
    if (!decision.materialize) {
      expect(decision.reason).toBe("conversational_continuation");
    }
  });

  it("B — examine a concrete example stays conversational when tied to guidance", () => {
    const guidance =
      "Prenons un exemple concret : raconte un retard récent et qui devait s'en charger.";
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement:
        "Prenons un exemple concret : raconte un retard récent et qui devait s'en charger.",
      recommendedOptionRef: null,
      conversationGuidanceStatement: guidance,
      openWorkRecommendationStatements: [],
    });
    expect(decision.materialize).toBe(false);
  });

  it("C — significant durable work orientation materializes", () => {
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement:
        "Structurer le cadrage autour des responsabilités de suivi et des retards récurrents.",
      recommendedOptionRef: null,
      conversationGuidanceStatement:
        "Souhaites-tu préciser un retard précis pour commencer ?",
      openWorkRecommendationStatements: [],
    });
    expect(decision).toEqual({
      materialize: true,
      reason: "justified_durable_work",
    });
  });

  it("D — trajectory option-bound Recommendation materializes when distinct", () => {
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement: "Adopter l'option trajectoire gouvernée pour ce cycle.",
      recommendedOptionRef: "opt:trajectory:governed-gated",
      conversationGuidanceStatement: "Je te propose la trajectoire gouvernée.",
      openWorkRecommendationStatements: [],
    });
    expect(decision.materialize).toBe(true);
  });

  it("E — reformulation of an already-open Recommendation does not mint again", () => {
    const open =
      "Clarifier les responsabilités de suivi des projets en cours.";
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement:
        "Il faut clarifier les responsabilités de suivi des projets en cours.",
      recommendedOptionRef: null,
      conversationGuidanceStatement: "On peut en discuter maintenant.",
      openWorkRecommendationStatements: [open],
    });
    expect(decision.materialize).toBe(false);
    if (!decision.materialize) {
      expect(decision.reason).toBe("equivalent_open_exists");
    }
  });

  it("F — two distinct Recommendations are not collapsed by the gate", () => {
    const open =
      "Structurer le cadrage autour des responsabilités et des retards.";
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement:
        "Améliorer la visibilité sur l'avancement des projets pour les parties prenantes.",
      recommendedOptionRef: null,
      conversationGuidanceStatement: null,
      openWorkRecommendationStatements: [open],
    });
    expect(decision.materialize).toBe(true);
  });

  it("G — lexical cousin with different substance is not over-filtered", () => {
    // Shares « retard » but asks consequences ≠ responsibilities.
    expect(
      workRecommendationStatementsEquivalent(
        "Quelles étaient les responsabilités sur ce retard ?",
        "Quelles ont été les conséquences de ce retard pour l'équipe ?",
      ),
    ).toBe(false);
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement:
        "Documenter les conséquences opérationnelles des retards pour prioriser le cadrage.",
      recommendedOptionRef: null,
      conversationGuidanceStatement: null,
      openWorkRecommendationStatements: [
        "Clarifier les responsabilités de suivi sur les retards.",
      ],
    });
    expect(decision.materialize).toBe(true);
  });

  it("H — short confirmation / clarification without substance does not materialize", () => {
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement: "D'accord, on continue ?",
      recommendedOptionRef: null,
      conversationGuidanceStatement: "Peux-tu confirmer le prochain point ?",
      openWorkRecommendationStatements: [],
    });
    expect(decision.materialize).toBe(false);
    if (!decision.materialize) {
      expect(
        decision.reason === "insufficient_substance" ||
          decision.reason === "conversational_continuation",
      ).toBe(true);
    }
  });

  it("I–N — filter is prospective: existingItems are never mutated", () => {
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
        rec(
          "Clarifier les responsabilités de suivi des projets.",
        ),
        {
          type: "Observation",
          statement: "Les retards reviennent souvent.",
          confidence: "medium",
          blocking: null,
          recommendedOptionRef: null,
        },
      ],
      conversationGuidanceStatement: "On peut préciser un retard.",
      existingItems: existing,
      cycleInstanceId: "cycinst:qa",
      trajectoryDecisionSupportState: "NONE",
    });
    expect(JSON.stringify(existing)).toBe(before);
    expect(existing[0]!.epistemicItemId).toBe("epi:acw:hist-1");
    expect(existing[0]!.status).toBe("active");
    // Reformulation suppressed; Observation kept.
    expect(filtered.items.map((i) => i.type)).toEqual(["Observation"]);
    expect(filtered.suppressed.length).toBe(1);
    expect(filtered.suppressed[0]!.reason).toBe("equivalent_open_exists");
  });

  it("same-turn paraphrase Recommendations: only first durable mint kept", () => {
    const filtered = filterActiveCycleWorkItemsForProspectiveMaterialization({
      items: [
        rec(
          "Structurer le cadrage autour des responsabilités de suivi et des retards.",
        ),
        rec(
          "Il faut structurer le cadrage autour des responsabilités de suivi et des retards récurrents.",
        ),
      ],
      conversationGuidanceStatement: "Par où veux-tu commencer ?",
      existingItems: [],
      cycleInstanceId: "cycinst:qa",
      trajectoryDecisionSupportState: "NONE",
    });
    expect(filtered.items.filter((i) => i.type === "Recommendation")).toHaveLength(
      1,
    );
    expect(filtered.suppressed.length).toBe(1);
  });
});
```

### 7.3 Test UX-REC-02

```tsx
/**
 * P6-HQA-02 UX-REC-02 — Journal Work Recommendation cards drop repeated disclaimer.
 * @vitest-environment jsdom
 */
import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { JournalSurface } from "@/features/pre-m6-product-ui/surfaces/JournalSurface";

describe("P6-HQA-02 UX-REC-02 Journal recommendation disclaimer", () => {
  it("omits per-card authority disclaimer while keeping status and discuss CTA", () => {
    const onResume = vi.fn();
    render(
      <JournalSurface
        entries={[]}
        cycleInstanceId="cycinst:test"
        selectedEntryId={null}
        onSelectEntry={() => {}}
        onViewExchanges={() => {}}
        onFocusTurn={() => {}}
        recommendations={[
          {
            epistemicItemId: "epi:acw:uxrec02",
            statement: "Structurer le suivi des responsabilités",
            status: "active",
            source: "active-cycle-work:nora",
            optionSetRef: null,
            proposalId: null,
            cycleInstanceId: "cycinst:test",
            createdAt: "2026-10-10T10:00:00.000Z",
            dispositionDecisionId: null,
            workRecommendationEpistemicItemId: "epi:acw:uxrec02",
          },
        ]}
        decisions={[]}
        reservations={[]}
        memoryTab="recommandations"
        onResumeRecommendationInChat={onResume}
      />,
    );
    expect(screen.queryByText(/Disposez-en dans/i)).toBeNull();
    expect(
      screen.queryByText(/RECOMMANDATION — PAS UNE DÉCISION HUMAINE/i),
    ).toBeNull();
    expect(screen.getAllByText(/À examiner/i).length).toBeGreaterThanOrEqual(1);
    expect(
      screen.getByTestId("cycle-recommendation-resume-epi:acw:uxrec02"),
    ).toBeTruthy();
    expect(screen.getByText("Structurer le suivi des responsabilités")).toBeTruthy();
  });
});
```

---

## 8. Diffs tracked (complets)

```diff
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/chatFirstGovernedDecisionLoop.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/chatFirstGovernedDecisionLoop.ui.test.tsx
index 9cb88f25..12354798 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/chatFirstGovernedDecisionLoop.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/chatFirstGovernedDecisionLoop.ui.test.tsx
@@ -423,11 +423,15 @@ describe("JournalSurface — Sujets | Réserves | Recommandations | Décisions",
       `cycle-recommendation-card-${RECOMMENDATION.epistemicItemId}`,
     );
     expect(card.textContent).toContain("poursuivre le sujet proposé");
+    // UX-REC-02 — per-card methodological disclaimer removed (authority stays Product-side).
     expect(
-      screen.getByTestId(
+      screen.queryByTestId(
         `cycle-recommendation-authority-${RECOMMENDATION.epistemicItemId}`,
-      ).textContent,
-    ).toContain("PAS UNE DÉCISION HUMAINE");
+      ),
+    ).toBeNull();
+    expect(card.textContent ?? "").not.toMatch(
+      /RECOMMANDATION — PAS UNE DÉCISION HUMAINE\. Disposez-en/i,
+    );
     for (const button of screen.queryAllByRole("button")) {
       expect(button.textContent ?? "").not.toMatch(
         /Accepter|Refuser|Décider|Valider/i,
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.tsx
index cc318236..19d59900 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.tsx
@@ -608,13 +608,9 @@ export function JournalSurface({
                     <span>Recommandation de travail</span>
                     <span>Nora · recommandation</span>
                   </p>
-                  <p
-                    className={styles.finalizationHint}
-                    data-testid={`cycle-recommendation-authority-${card.epistemicItemId}`}
-                  >
-                    RECOMMANDATION — PAS UNE DÉCISION HUMAINE. Disposez-en dans
-                    le chat (poursuivre, amender, refuser ou reporter).
-                  </p>
+                  {/* UX-REC-02 — drop per-card methodological disclaimer; Product
+                      Recommendation ≠ HumanDecision remains enforced server-side.
+                      Status + « En discuter avec Nora » stay on the card. */}
                   {open && onResumeRecommendationInChat ? (
                     <div className={styles.cardActions}>
                       <button
diff --git a/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts b/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
index ea46da10..d5afb445 100644
--- a/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
+++ b/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
@@ -349,6 +349,15 @@ function buildActiveCycleWorkOutputSection(
       "recommendedOptionRef est un champ structuré — JAMAIS déduit du texte statement.",
       "Pour Recommendation hors Option trajectoire : recommendedOptionRef = null.",
       "Recommendation ≠ HumanDecision ; n'exécute rien ; ne promeut pas de trajectoire.",
+      "=== P6-HQA-02 / REC-01 — Work Recommendation vs suggestion conversationnelle ===",
+      "Une Work Recommendation (type=Recommendation dans activeCycleWork) est un objet Product",
+      "DURABLE justifiant un suivi propre (orientation de travail identifiable, continuité",
+      "hors du tour, et caractère distinct d'une recommandation déjà ouverte).",
+      "Une simple proposition / question / invitation de suite → conversationGuidance SEULEMENT ;",
+      "NE PAS émettre type=Recommendation pour reformuler une suite conversationnelle.",
+      "Le vocabulaire « je propose / je recommande » ne suffit PAS à justifier une matérialisation.",
+      "Si une Work Recommendation équivalente est déjà ouverte sur ce cycle : ne la réémets pas",
+      "dans activeCycleWork ; réponds et oriente via conversationGuidance.",
     );
     lines.push(
       "=== INTÉGRITÉ ÉPISTÉMIQUE — Reservation ===",
diff --git a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
index f5823ff7..24eb42c0 100644
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
@@ -909,6 +910,31 @@ export async function orchestrateProjectAssistantTurn(input: {
             existingItems = [];
           }

+          // P6-HQA-02 / REC-01 — prospective Work Recommendation gate (server).
+          // Ordinary conversational suggestions stay in conversationGuidance;
+          // only justified durable Recommendations mint EpistemicItems.
+          // Historical Recommendations are never mutated here.
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
@@ -918,7 +944,7 @@ export async function orchestrateProjectAssistantTurn(input: {
             input.beforeDurableEffect,
           );
           const mat = await materializeActiveCycleWork({
-            items: acwItems,
+            items: itemsToMaterialize,
             facts: {
               projectId: project.projectId,
               activeCycleInstanceId: activeCycleId,
@@ -961,6 +987,7 @@ export async function orchestrateProjectAssistantTurn(input: {
               logicalTurnId,
             };
           }
+          } // end itemsToMaterialize.length > 0
         }
       }

@@ -1081,7 +1108,7 @@ export async function orchestrateProjectAssistantTurn(input: {
           }

           let trajectory = null;
-          let trajectoryBootstrapPresence = await resolveTrajectoryBootstrapPresence(
+          const trajectoryBootstrapPresence = await resolveTrajectoryBootstrapPresence(
             oa.cycleServices.trajectories,
             project.projectId,
           );
diff --git a/projects/sfia-studio/app/lib/oa/cycle/index.ts b/projects/sfia-studio/app/lib/oa/cycle/index.ts
index 4a3d74e1..6aaeb40f 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/index.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/index.ts
@@ -94,6 +94,14 @@ export {
   type TrajectoryDecisionSupportState,
   type WorkRecommendationProjectionCard,
 } from "./application/deriveWorkRecommendations";
+export {
+  filterActiveCycleWorkItemsForProspectiveMaterialization,
+  openWorkRecommendationStatementsForCycle,
+  qualifyProspectiveWorkRecommendationMaterialization,
+  workRecommendationStatementsEquivalent,
+  type ProspectiveWorkRecommendationMaterializationDecision,
+  type ProspectiveWorkRecommendationSuppressReason,
+} from "./application/qualifyProspectiveWorkRecommendationMaterialization";
 export {
   deriveFinalizationApplicability,
   obligationPolicySubjectFor,
```

---

## 9. Validations

| Check | Result |
|-------|--------|
| REC-01 unit suite | **10 PASS** |
| UX-REC-02 UI | **1 PASS** |
| REC-03 Journal label | **1 PASS** |
| chatFirstGovernedDecisionLoop UI | **11 PASS** |
| NCI / COG-01 | **28 PASS** |
| UX recommendation continuity | **6 PASS** |
| Total ciblé | **57 PASS** |
| ACW + deriveWorkRecommendations adjacent | **61 PASS** |
| `npm run typecheck` | **PASS** |
| ESLint ciblé | **0 errors** (`prefer-const` préexistant corrigé dans fichier touché) |
| `git diff --check` | **PASS** |
| Build | **NOT RUN** (CI future ; typecheck suffit localement) |
| Human QA REAL | **REQUIRED** (ultérieur) |

---

## 10. Fake / Real Qualification

| Item | Value |
|------|--------|
| Applicable | OUI |
| Frontière | Nora / fournisseur IA |
| Fake | Fixtures déterministes + gate pur |
| Niveau | **DETERMINISTIC PROVEN AT TESTED SCOPE** |
| Hors scope | REAL / E2E REAL / P6 PASS / v3 ADOPTED |

---

## 11. Réserves / décisions Morris

1. **REC-02** structural binding tour↔carte — décision Morris.
2. Rejeu Human QA REAL après intégration Git (GO distinct).
3. Limite REC-01 : équivalence lexicale/contenu + cues structuraux — pas moteur sémantique.
4. Intégration Git / Draft PR — **non autorisée** dans ce cycle.
5. Cleanup worktrees/branches — non autorisé ici.

---

## 12. Préservation

| Asset | État |
|-------|------|
| Historique QA + locaux HQA-01/C14/tmp/p6-campaign | **intact** |
| Worktree HQA-01 | **intact** |
| Branche PR #575 | **préservée** |
| Worktree HQA-02 | local uncommitted (pas de commit projet) |

---

## 13. Verdict

**LOCAL PROSPECTIVE CORRECTION — READY FOR CHATGPT REVIEW**

Instruction ChatGPT : lire `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`.
