# SFIA Review Pack — FULL
# P6-HQA-02 — Corrective Pass 01 — REC-01 uniquement
# Local Bounded Prospective Correction (template v2.6 §7.5)

## Meta
- Date / heure : **2026-10-10 18:26:22 CEST** (Europe/Paris)
- Macro : STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
- Campagne : P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
- Lot : **P6-HQA-02 — Corrective Pass 01**
- Finding : **REC-01**
- Milestone : P6 — Global Integrated Product QA / Phase 5 Human QA
- Cycle projet : **8 — Delivery / implémentation**
- Profil : **Standard**
- Typologie : EVOL — corrective prospective
- Capacités : V3-F05, V3-F04, V3-F02, V3-F14
- GO Morris : **GO CORRECTION LOCALE** (exclusivement REC-01 ; aucun commit/push/PR/merge projet)
- Origine : ChatGPT Code Review — **CORRECTION REQUIRED** (handoff `65ad52b8ceede91541dfa6ae7905a85db51b7c61`)
- Commit / push / PR / merge projet : **NON**
- P6 GLOBAL PASS : **NO**
- Runtime v3 ADOPTED : **NO**
- Synthesis only : **no**
- Base main / HEAD worktree : `8ed61737df30db270bf871eedad1535020fd1c11`
- Branche : `fix/studio-p6-hqa-02-work-recommendation-materialization`
- Review Handoff source précédent : `65ad52b8ceede91541dfa6ae7905a85db51b7c61`

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
| Commit projet P6-HQA-02 | **aucun** |
| Candidate P6-HQA-02 préservée | **YES** — travaux HQA-02 + Corrective Pass 01 locaux |

### Divergence vs handoff initial (`65ad52b8`)

Handoff initial (pré-correction) : 5 tracked modifiés + 3 untracked.
État après Corrective Pass 01 :
- **+1 tracked modifié** : `materializeActiveCycleWork.ts` (itemSourceIndexes — Defect C)
- qualify + tests REC-01 **étendus** (toujours untracked / local)
- UX-REC-02 / Journal / prompt / chatFirstGovernedDecisionLoop **préservés**
- Divergence **maîtrisée** : correction bornée REC-01 uniquement ; aucun reset/clean/stash.

### `git status --short`

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/chatFirstGovernedDecisionLoop.ui.test.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.tsx
 M projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
 M projects/sfia-studio/app/features/project-assistant/materializeActiveCycleWork.ts
 M projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
 M projects/sfia-studio/app/lib/oa/cycle/index.ts
?? projects/sfia-studio/app/__tests__/oa/cycle/qualifyProspectiveWorkRecommendationMaterialization.d0.test.ts
?? projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.hqa.uxrec02.journalDisclaimer.ui.test.tsx
?? projects/sfia-studio/app/lib/oa/cycle/application/qualifyProspectiveWorkRecommendationMaterialization.ts
```

### `git diff --stat`

```
 .tmp-sfia-review/chatgpt-review.md                 | 1030 +++++++++++++++++---
 .../chatFirstGovernedDecisionLoop.ui.test.tsx      |   10 +-
 .../pre-m6-product-ui/surfaces/JournalSurface.tsx  |   10 +-
 .../project-assistant/buildProjectSystemPrompt.ts  |    9 +
 .../materializeActiveCycleWork.ts                  |   28 +-
 .../features/project-assistant/orchestrateTurn.ts  |   38 +-
 projects/sfia-studio/app/lib/oa/cycle/index.ts     |   10 +
 7 files changed, 985 insertions(+), 150 deletions(-)
```

### `git diff --cached --stat`

```
(empty)
```

---

## 2. GO Morris

**GO CORRECTION LOCALE** — P6-HQA-02 Corrective Pass 01 — REC-01 uniquement.

Autorise :
- correction locale des 3 défauts ChatGPT ;
- tests red→green déterministes ;
- Review Pack FULL + handoff L3.

N’autorise **pas** :
- commit/push/PR/merge projet ;
- nouvel arbitrage architectural ;
- REC-02 ;
- rouvrir UX-REC-02 ;
- migration / backfill / cleanup historique ;
- P6 GLOBAL PASS / runtime v3 ADOPTED.

---

## 3. Sources lues

Gouvernance : Build Doctrine · Roadmap · C1 Product Completion.
Contrats Product : P2 FOM · P3 Workspace · P4 Semantic · P6 QA contract.
Doctrine v3 : 30 Knowledge/HumanDecision · 33 Epistemology/Contradiction.
Processus v2.6 : cycle execution template · routing guide · publisher L3.
Review Handoff source : `sfia/review-handoff` @ `65ad52b8` — verdict **CORRECTION REQUIRED** sur REC-01.

CKC Cycle 8 : fallback synthétique (guidance cognitive, non autorité d’exécution).

---

## 4. Convergence Pre-check Studio

| Item | Status |
|------|--------|
| Build Doctrine | **VALIDATED / ACTIVE ON MAIN** |
| Roadmap P6 | **applicable** (P6 Human QA / campaign continuation) |
| C1 Product Completion | **VALIDATED BY MORRIS — INTEGRATED ON MAIN** |
| P2 Functional Operating Model | **VALIDATED BY MORRIS** |
| P6 Human QA | **IN PROGRESS** |
| P6 GLOBAL PASS | **NO** |
| runtime v3 | **NON ADOPTED** |

Capacités touchées : V3-F05 (Nora) · V3-F04 (épistémique) · V3-F02 (continuité) · V3-F14 (preuves).

Classification actifs :
- activeCycleWork : **KEEP / ADAPT** (sourceIndexes)
- conversationGuidance : **KEEP**
- EpistemicItem / Product SQLite : **KEEP**
- matérialiseur ACW : **KEEP** (+ option `itemSourceIndexes` compatible)
- filtre prospectif REC-01 : **ADAPT**
- UX-REC-02 : **KEEP** (non rouvert)
- REC-02 : **RESERVED**

---

## 5. Périmètre initial / état candidate avant correction

Candidate P6-HQA-02 locale intacte sur branche `fix/studio-p6-hqa-02-work-recommendation-materialization` @ `8ed61737…`.

Présent avant Corrective Pass :
- filtre prospectif REC-01 branché dans `orchestrateTurn` ;
- prompt REC-01 ;
- UX-REC-02 (disclaimer Journal retiré) — satisfaisant ;
- tests REC-01 initiaux A–N.

Défauts ChatGPT (CORRECTION REQUIRED) non encore corrigés :
1. fausse équivalence (ordre / négation) ;
2. suggestion conversationnelle matérialisable via longueur/tokens ;
3. index post-filtre instable au rejeu.

---

## 6. Reproduction RED des trois défauts

### Défaut A — fausse équivalence (pré-correction)

Sur la candidate initiale, `workRecommendationStatementsEquivalent` s’appuyait sur bag-of-words / Jaccard / containment **sans** garde polarité/ordre.

Cas ChatGPT (pré-correction, probe) :
- « Privilégier le suivi avant la planification. » vs « Privilégier la planification avant le suivi. » → **EQ true** (BAD)
- « Prioriser la visibilité… » vs « Ne pas prioriser… » → **EQ true** (BAD)
- « Commencer par les retards, puis… » vs ordre inverse → risque d’équivalence automatique (BAD)

### Défaut B — suggestion conversationnelle (pré-correction)

« Je te propose d'examiner un exemple concret de retard pour comprendre les blocages. »
→ `hasIdentifiableWorkSubstance` true via longueur + tokens métier (examiner/suivi/cadrage) → **materialize true** (BAD)

### Défaut C — identité / rejeu (analyse + contrat)

`activeCycleWorkEpistemicItemId` inclut `index` de boucle dans `materializeActiveCycleWork`.
Le filtre prospectif renvoyait une liste compactée **sans** indexes originaux → Observation passant de index 1 → 0 au rejeu après suppression de la Recommendation déjà ouverte → **nouvel ID**.

Tests Corrective Pass (A1–A4, B1–B3, C1–C4) encodent désormais le contrat attendu et passent **green** après correction.

---

## 7. Cause racine

| Défaut | Cause |
|--------|-------|
| A | Équivalence lexicale permissive ; absence de fail-closed sur polarité et ordre de priorités |
| B | Substance durable déduite de longueur + présence de tokens métier ; invites soft non exclues structurellement |
| C | Identité ACW basée sur la position dans la liste **post-filtre**, pas sur l’index payload Nora original |

---

## 8. Choix technique (minimal, contrats existants)

1. **Équivalence fail-closed** : polarité conflictuelle ⇒ non-équivalent ; même multiset tokens avec ordre différent ⇒ non-équivalent ; bag-of-words seul insuffisant (exige aussi `sequenceAgreement`).
2. **Substance** : invites conversationnelles soft (`je te propose`, `on peut`, `exemple concret`, …) ⇒ non durable ; forme d’orientation durable (ouvreurs / modaux structurés) requise — pas un score de longueur.
3. **Identité** : `filter…` expose `sourceIndexes` / `plan` ; `materializeActiveCycleWork` accepte `itemSourceIndexes` optionnel (legacy = index de boucle) ; `orchestrateTurn` passe les indexes et **fail-closed** si `listByProject` échoue (`open_context_unavailable`).

### Raisons du choix
- Compatible avec le contrat d’identité existant (projectId|cycle|turn|index|type|digest|optionRef).
- Aucun renumérotage historique : seuls les nouveaux writes utilisent les indexes originaux du payload.
- Aucun nouveau schema / moteur / store.

### Alternatives écartées
- Nouveau classificateur LLM / Recommendation Engine → hors périmètre.
- Mutation / supersession historique → interdit.
- Regex ad hoc accumulées sans structure → dette heuristique non bornée.
- Changer la formule d’ID historique → risque de rupture des IDs déjà persistés.

---

## 9. Résultats après correction

| Scénario | Résultat |
|----------|----------|
| Orientations opposées (ordre) | NON équivalentes ; les deux matérialisables si distinctes |
| Négation | NON équivalentes |
| Ordre sujets/priorités | NON auto-équivalent |
| Invite « Je te propose d'examiner… » | `conversational_continuation` — pas de WR durable |
| Orientation durable légitime | `justified_durable_work` |
| Reformulation open existante | `equivalent_open_exists` |
| Rejeu logicalTurnId après suppression Rec | Observation garde `sourceIndex=1` → même Epistemic ID |
| Open context unavailable | Recommendations suppressées ; Observations conservées |
| Historique | lecture seule ; aucune mutation |

---

## 10. Preuve d’idempotence / non-mutation historique

- Filter `I–N` : `existingItems` frozen inchangés (id/status/statement).
- C1 : id Observation stable first vs replay ; shifted index-0 prouvé différent.
- C3 : suppressions intermédiaires conservent indexes originaux `[1,2,3]`.
- ACW idempotence suite (filtre `-t idempoten|replay|…`) : **7 PASS**.
- Aucune migration, backfill, purge, supersession.

---

## 11. Tests exécutés

| Suite | Result |
|-------|--------|
| `qualifyProspectiveWorkRecommendationMaterialization.d0.test.ts` (21) | **PASS** |
| `p6.hqa.uxrec02.journalDisclaimer.ui.test.tsx` | **PASS** |
| `deriveWorkRecommendations.d0.test.ts` | **PASS** |
| `chatFirstGovernedDecisionLoop.ui.test.tsx` (11) | **PASS** |
| `activeCycleCognitiveWork.d0.test.ts` (filtre idempotence/replay — 7) | **PASS** |
| `tsc --noEmit` | **PASS** |
| ESLint fichiers touchés REC-01 | **PASS** |
| `git diff --check` | **PASS** |
| COG-01 / UX-REC-01 / REC-03 / JRN-01 full Human QA | **NOT RUN** (hors lot ; non rouverts) |
| Campagne REAL / provider | **NOT RUN** (hors GO) |

---

## 12. Fake / Real Qualification

- Applicable : **OUI**
- Niveau entrée : DETERMINISTIC PROVEN PARTIAL + CHATGPT CORRECTION REQUIRED
- Niveau atteint (si revue OK) : **DETERMINISTIC PROVEN AT CORRECTED SCOPE**
- Hors scope : REAL BOUNDARY PROVEN · E2E REAL PROVEN · P6 GLOBAL PASS · v3 ADOPTED
- Claims interdits : READY FOR REAL global · qualité cognitive générale

---

## 13. Fichiers modifiés / créés

Modifiés :
- `qualifyProspectiveWorkRecommendationMaterialization.ts` (réécrit — Corrective Pass)
- `__tests__/oa/cycle/qualifyProspectiveWorkRecommendationMaterialization.d0.test.ts` (étendus)
- `materializeActiveCycleWork.ts` (`itemSourceIndexes`)
- `orchestrateTurn.ts` (sourceIndexes + fail-closed open context)
- `lib/oa/cycle/index.ts` (exports)

Préservés sans modification Corrective Pass (travaux HQA-02 satisfaisants) :
- `JournalSurface.tsx` (UX-REC-02)
- `p6.hqa.uxrec02.journalDisclaimer.ui.test.tsx`
- `buildProjectSystemPrompt.ts`
- `chatFirstGovernedDecisionLoop.ui.test.tsx`

---

## 14. Contenu complet — qualifyProspectiveWorkRecommendationMaterialization.ts

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
 * Corrective Pass 01:
 * - equivalence is fail-closed (polarity / order conflicts ⇒ not equivalent);
 * - conversational invites are not durable by keyword/length alone;
 * - filtered plans preserve original ACW source indexes for identity stability.
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
  | "insufficient_substance"
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

/** Soft conversational invites — not durable Work Recommendations by themselves. */
const CONVERSATIONAL_INVITE_RE =
  /\b(je (te|vous) propose|on (peut|pourrait|va)|peux[- ]tu|pouvez[- ]vous|raconte[- ]moi|prenons (un |l )?exemple|exemple concret|pour comprendre|souhaitez[- ]vous|voulez[- ]vous|dis[- ]moi|raconte|decrivons|decris)\b/i;

/** Durable orientation openers / framing — structural, not a keyword score. */
const DURABLE_ORIENTATION_OPENER_RE =
  /^(structurer|clarifier|prioriser|privilegier|ameliorer|documenter|adopter|cadrer|definir|stabiliser|organiser|renforcer)\b/i;

const DURABLE_ORIENTATION_MODAL_RE =
  /\b(il faut|doit|doivent|devrait|devraient|priorite (du|de)|orientation (du|de))\b/i;

function normalizeCompare(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function contentTokenSequence(text: string): string[] {
  return normalizeCompare(text)
    .split(" ")
    .filter((w) => w.length > 2 && !COMPARE_STOP.has(w));
}

function contentTokenSet(seq: string[]): Set<string> {
  return new Set(seq);
}

/** Negation / polarity cue — used only to reject false equivalence. */
function isNegatedOrientation(norm: string): boolean {
  return (
    /\bne pas\b/.test(norm) ||
    /\bne\b.+\bpas\b/.test(norm) ||
    /\bsans\b/.test(norm) ||
    /\baucune?\b/.test(norm) ||
    /\bjamais\b/.test(norm) ||
    /\binterdit\b/.test(norm)
  );
}

function sortedBagKey(seq: string[]): string {
  return [...seq].sort().join("|");
}

/**
 * Same content multiset but different order (e.g. A avant B vs B avant A).
 * Lexical bag overlap alone must never claim equivalence in this case.
 */
function hasOrderConflict(aSeq: string[], bSeq: string[]): boolean {
  if (aSeq.length < 2 || bSeq.length < 2) return false;
  if (sortedBagKey(aSeq) !== sortedBagKey(bSeq)) return false;
  return aSeq.join("|") !== bSeq.join("|");
}

function sequenceAgreement(aSeq: string[], bSeq: string[]): number {
  if (aSeq.length === 0 || bSeq.length === 0) return 0;
  // Longest common subsequence ratio vs shorter sequence.
  const n = aSeq.length;
  const m = bSeq.length;
  const dp: number[][] = Array.from({ length: n + 1 }, () =>
    Array.from({ length: m + 1 }, () => 0),
  );
  for (let i = 1; i <= n; i += 1) {
    for (let j = 1; j <= m; j += 1) {
      dp[i]![j] =
        aSeq[i - 1] === bSeq[j - 1]
          ? (dp[i - 1]![j - 1] ?? 0) + 1
          : Math.max(dp[i - 1]![j] ?? 0, dp[i]![j - 1] ?? 0);
    }
  }
  const lcs = dp[n]![m] ?? 0;
  return lcs / Math.min(n, m);
}

/**
 * Content equivalence for reformulation detection — fail-closed.
 * Shared tokens alone never prove equivalence when polarity or order conflict.
 */
export function workRecommendationStatementsEquivalent(
  aRaw: string,
  bRaw: string,
): boolean {
  const aNorm = normalizeCompare(aRaw);
  const bNorm = normalizeCompare(bRaw);
  if (!aNorm || !bNorm) return false;
  if (aNorm === bNorm) return true;

  const aNeg = isNegatedOrientation(aNorm);
  const bNeg = isNegatedOrientation(bNorm);
  if (aNeg !== bNeg) return false;

  const aSeq = contentTokenSequence(aRaw);
  const bSeq = contentTokenSequence(bRaw);
  if (aSeq.length === 0 || bSeq.length === 0) return false;
  if (hasOrderConflict(aSeq, bSeq)) return false;

  // Containment of a substantial normalized span, same polarity, no order conflict.
  if (aNorm.includes(bNorm) || bNorm.includes(aNorm)) {
    const shorter = aNorm.length <= bNorm.length ? aNorm : bNorm;
    if (shorter.length >= 24 && sequenceAgreement(aSeq, bSeq) >= 0.75) {
      return true;
    }
  }

  const a = contentTokenSet(aSeq);
  const b = contentTokenSet(bSeq);
  let inter = 0;
  for (const w of a) if (b.has(w)) inter += 1;
  const smaller = Math.min(a.size, b.size);
  const union = a.size + b.size - inter;
  const jaccard = union === 0 ? 0 : inter / union;
  const containment = smaller === 0 ? 0 : inter / smaller;
  const agree = sequenceAgreement(aSeq, bSeq);

  // Require overlap AND sequence agreement — bag-of-words alone is insufficient.
  return (
    inter >= 3 &&
    agree >= 0.8 &&
    (jaccard >= 0.55 || containment >= 0.7)
  );
}

function hasTrajectoryRecommendedOptionRef(
  ref: string | null | undefined,
): boolean {
  if (typeof ref !== "string") return false;
  const trimmed = ref.trim();
  return /^opt:trajectory:/i.test(trimmed);
}

function hasDurableOrientationForm(statement: string): boolean {
  const trimmed = statement.trim();
  const norm = normalizeCompare(trimmed);
  if (DURABLE_ORIENTATION_OPENER_RE.test(norm)) return true;
  if (
    DURABLE_ORIENTATION_MODAL_RE.test(norm) &&
    contentTokenSequence(trimmed).length >= 4
  ) {
    return true;
  }
  return false;
}

/**
 * Durable substance — not length, not soft invite keywords alone.
 */
export function hasIdentifiableWorkSubstance(statement: string): boolean {
  const trimmed = statement.trim();
  if (trimmed.length < 20) return false;

  // Soft conversational invites are never durable by themselves.
  if (CONVERSATIONAL_INVITE_RE.test(trimmed)) {
    return false;
  }

  return hasDurableOrientationForm(trimmed);
}

/**
 * Qualify whether a single ACW Recommendation candidate should mint a durable
 * Work Recommendation. Never mutates historical item rows.
 */
export function qualifyProspectiveWorkRecommendationMaterialization(input: {
  readonly statement: string;
  readonly recommendedOptionRef?: string | null;
  readonly conversationGuidanceStatement: string | null | undefined;
  readonly openWorkRecommendationStatements: readonly string[];
  /**
   * When false, open Recommendations could not be loaded — fail-closed:
   * do not mint new Work Recommendations (absence of evidence ≠ no opens).
   */
  readonly openRecommendationsContextAvailable?: boolean;
}): ProspectiveWorkRecommendationMaterializationDecision {
  const statement = input.statement.trim();
  if (!statement) {
    return { materialize: false, reason: "insufficient_substance" };
  }

  if (input.openRecommendationsContextAvailable === false) {
    return { materialize: false, reason: "open_context_unavailable" };
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

  // Soft invite phrasing is conversational even when guidance differs.
  if (CONVERSATIONAL_INVITE_RE.test(statement)) {
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
 * Preserves original payload indexes for Epistemic identity stability.
 */
export function filterActiveCycleWorkItemsForProspectiveMaterialization(input: {
  readonly items: ReadonlyArray<NoraActiveCycleWorkItem>;
  readonly conversationGuidanceStatement: string | null | undefined;
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
  const openStatements = contextAvailable
    ? openWorkRecommendationStatementsForCycle({
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

  for (let sourceIndex = 0; sourceIndex < input.items.length; sourceIndex += 1) {
    const item = input.items[sourceIndex]!;
    if (item.type !== "Recommendation") {
      plan.push({ item, sourceIndex });
      continue;
    }
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement: item.statement,
      recommendedOptionRef: item.recommendedOptionRef,
      conversationGuidanceStatement: input.conversationGuidanceStatement,
      openWorkRecommendationStatements: openStatements,
      openRecommendationsContextAvailable: contextAvailable,
    });
    if (decision.materialize) {
      plan.push({ item, sourceIndex });
      openStatements.push(item.statement.trim());
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
```

---

## 15. Contenu complet — qualifyProspectiveWorkRecommendationMaterialization.d0.test.ts

```typescript
/**
 * P6-HQA-02 / REC-01 — prospective Work Recommendation materialization gate.
 * Corrective Pass 01 — defects A (false equivalence), B (conversational), C (identity).
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  filterActiveCycleWorkItemsForProspectiveMaterialization,
  hasIdentifiableWorkSubstance,
  qualifyProspectiveWorkRecommendationMaterialization,
  workRecommendationStatementsEquivalent,
} from "@/lib/oa/cycle/application/qualifyProspectiveWorkRecommendationMaterialization";
import { activeCycleWorkEpistemicItemId } from "@/features/project-assistant/materializeActiveCycleWork";
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

function observation(statement: string): NoraActiveCycleWorkItem {
  return {
    type: "Observation",
    statement,
    confidence: "medium",
    blocking: null,
    recommendedOptionRef: null,
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
        rec("Clarifier les responsabilités de suivi des projets."),
        observation("Les retards reviennent souvent."),
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
    // Source index of Observation remains 1 (not renumbered to 0).
    expect(filtered.sourceIndexes).toEqual([1]);
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
    expect(filtered.sourceIndexes).toEqual([0]);
  });
});

describe("P6-HQA-02 REC-01 Corrective Pass 01 — Defect A false equivalence", () => {
  it("A1 — opposing priority order is not equivalent", () => {
    expect(
      workRecommendationStatementsEquivalent(
        "Privilégier le suivi avant la planification.",
        "Privilégier la planification avant le suivi.",
      ),
    ).toBe(false);
  });

  it("A2 — negation / polarity conflict is not equivalent", () => {
    expect(
      workRecommendationStatementsEquivalent(
        "Prioriser la visibilité sur le suivi.",
        "Ne pas prioriser la visibilité sur le suivi.",
      ),
    ).toBe(false);
  });

  it("A3 — reversed subject order is not auto-equivalent", () => {
    expect(
      workRecommendationStatementsEquivalent(
        "Commencer par les retards, puis les responsabilités.",
        "Commencer par les responsabilités, puis les retards.",
      ),
    ).toBe(false);
  });

  it("A4 — opposing orientations both remain materializable when open empty", () => {
    const first = qualifyProspectiveWorkRecommendationMaterialization({
      statement: "Privilégier le suivi avant la planification.",
      recommendedOptionRef: null,
      conversationGuidanceStatement: null,
      openWorkRecommendationStatements: [],
    });
    const second = qualifyProspectiveWorkRecommendationMaterialization({
      statement: "Privilégier la planification avant le suivi.",
      recommendedOptionRef: null,
      conversationGuidanceStatement: null,
      openWorkRecommendationStatements: [
        "Privilégier le suivi avant la planification.",
      ],
    });
    expect(first.materialize).toBe(true);
    expect(second.materialize).toBe(true);
  });
});

describe("P6-HQA-02 REC-01 Corrective Pass 01 — Defect B conversational invite", () => {
  it("B1 — soft invite does not mint durable Work Recommendation", () => {
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement:
        "Je te propose d'examiner un exemple concret de retard pour comprendre les blocages.",
      recommendedOptionRef: null,
      conversationGuidanceStatement:
        "Souhaites-tu qu'on regarde un cas précis ensemble ?",
      openWorkRecommendationStatements: [],
    });
    expect(decision.materialize).toBe(false);
    if (!decision.materialize) {
      expect(decision.reason).toBe("conversational_continuation");
    }
    expect(
      hasIdentifiableWorkSubstance(
        "Je te propose d'examiner un exemple concret de retard pour comprendre les blocages.",
      ),
    ).toBe(false);
  });

  it("B2 — length and soft keywords alone are not durable substance", () => {
    expect(
      hasIdentifiableWorkSubstance(
        "On peut examiner le suivi et le cadrage de l'approche pour comprendre les blocages rencontrés récemment.",
      ),
    ).toBe(false);
  });

  it("B3 — legitimate durable orientation still materializes despite guidance-like vocab", () => {
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement:
        "Structurer le suivi avant de planifier de nouvelles initiatives sur les retards.",
      recommendedOptionRef: null,
      conversationGuidanceStatement:
        "Je te propose d'examiner un exemple concret de retard.",
      openWorkRecommendationStatements: [],
    });
    expect(decision).toEqual({
      materialize: true,
      reason: "justified_durable_work",
    });
  });
});

describe("P6-HQA-02 REC-01 Corrective Pass 01 — Defect C identity / replay", () => {
  const projectId = "proj:qa-rec01";
  const cycleInstanceId = "cycinst:qa-rec01";
  const turnCorrelationId = "turn:logical:rec01-replay";

  it("C1 — suppressing Recommendation preserves Observation source index", () => {
    const items: NoraActiveCycleWorkItem[] = [
      rec(
        "Structurer le cadrage autour des responsabilités de suivi et des retards.",
      ),
      observation("Les retards reviennent souvent sur ce cycle."),
    ];

    const first = filterActiveCycleWorkItemsForProspectiveMaterialization({
      items,
      conversationGuidanceStatement: null,
      existingItems: [],
      cycleInstanceId,
      trajectoryDecisionSupportState: "NONE",
    });
    expect(first.items.map((i) => i.type)).toEqual([
      "Recommendation",
      "Observation",
    ]);
    expect(first.sourceIndexes).toEqual([0, 1]);

    const idRec = activeCycleWorkEpistemicItemId({
      projectId,
      cycleInstanceId,
      turnCorrelationId,
      index: first.sourceIndexes[0]!,
      type: "Recommendation",
      statement: first.items[0]!.statement,
    });
    const idObsFirst = activeCycleWorkEpistemicItemId({
      projectId,
      cycleInstanceId,
      turnCorrelationId,
      index: first.sourceIndexes[1]!,
      type: "Observation",
      statement: first.items[1]!.statement,
    });

    // Replay: Recommendation already open → suppressed; Observation kept.
    const replay = filterActiveCycleWorkItemsForProspectiveMaterialization({
      items,
      conversationGuidanceStatement: null,
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
    expect(replay.suppressed[0]!.reason).toBe("equivalent_open_exists");

    const idObsReplay = activeCycleWorkEpistemicItemId({
      projectId,
      cycleInstanceId,
      turnCorrelationId,
      index: replay.sourceIndexes[0]!,
      type: "Observation",
      statement: replay.items[0]!.statement,
    });
    expect(idObsReplay).toBe(idObsFirst);

    // Without sourceIndexes, post-filter position 0 would mint a different id.
    const shiftedId = activeCycleWorkEpistemicItemId({
      projectId,
      cycleInstanceId,
      turnCorrelationId,
      index: 0,
      type: "Observation",
      statement: replay.items[0]!.statement,
    });
    expect(shiftedId).not.toBe(idObsFirst);
  });

  it("C2 — Recommendation alone / Observation alone keep stable indexes", () => {
    const onlyRec = filterActiveCycleWorkItemsForProspectiveMaterialization({
      items: [
        rec(
          "Prioriser la visibilité sur l'avancement pour les parties prenantes.",
        ),
      ],
      conversationGuidanceStatement: null,
      existingItems: [],
      cycleInstanceId,
      trajectoryDecisionSupportState: "NONE",
    });
    expect(onlyRec.sourceIndexes).toEqual([0]);

    const onlyObs = filterActiveCycleWorkItemsForProspectiveMaterialization({
      items: [observation("Une observation isolée du cycle.")],
      conversationGuidanceStatement: null,
      existingItems: [],
      cycleInstanceId,
      trajectoryDecisionSupportState: "NONE",
    });
    expect(onlyObs.sourceIndexes).toEqual([0]);
  });

  it("C3 — intermediate suppressions preserve original order and indexes", () => {
    const items: NoraActiveCycleWorkItem[] = [
      rec(
        "Je te propose d'examiner un exemple concret de retard pour comprendre.",
      ),
      observation("Observation A sur les retards."),
      rec(
        "Structurer le cadrage autour des responsabilités de suivi.",
      ),
      observation("Observation B sur les responsabilités."),
      rec(
        "Structurer le cadrage autour des responsabilités de suivi.",
      ),
    ];
    const plan = filterActiveCycleWorkItemsForProspectiveMaterialization({
      items,
      conversationGuidanceStatement: null,
      existingItems: [],
      cycleInstanceId,
      trajectoryDecisionSupportState: "NONE",
    });
    // Index 0 invite suppressed; 1 obs; 2 durable rec; 3 obs; 4 paraphrase of 2 suppressed.
    expect(plan.sourceIndexes).toEqual([1, 2, 3]);
    expect(plan.items.map((i) => i.type)).toEqual([
      "Observation",
      "Recommendation",
      "Observation",
    ]);
  });

  it("C4 — open context unavailable fails closed for Recommendations", () => {
    const plan = filterActiveCycleWorkItemsForProspectiveMaterialization({
      items: [
        rec(
          "Structurer le cadrage autour des responsabilités de suivi et des retards.",
        ),
        observation("Observation conservée malgré contexte indisponible."),
      ],
      conversationGuidanceStatement: null,
      existingItems: [],
      cycleInstanceId,
      trajectoryDecisionSupportState: "NONE",
      openRecommendationsContextAvailable: false,
    });
    expect(plan.items.map((i) => i.type)).toEqual(["Observation"]);
    expect(plan.sourceIndexes).toEqual([1]);
    expect(plan.suppressed[0]!.reason).toBe("open_context_unavailable");
  });
});
```

---

## 16. Diff utile — materializeActiveCycleWork / orchestrateTurn / index

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/materializeActiveCycleWork.ts b/projects/sfia-studio/app/features/project-assistant/materializeActiveCycleWork.ts
index 4ae0f934..528c4490 100644
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
@@ -525,6 +544,9 @@ export async function materializeActiveCycleWork(input: {

       for (let index = 0; index < input.items.length; index += 1) {
         const raw = input.items[index]!;
+        // Prefer original ACW payload index when prospective filtering compacted
+        // the write list — identity must not depend on post-filter position.
+        const identityIndex = input.itemSourceIndexes?.[index] ?? index;
         const type = raw.type as EpistemicItemType;
         const statement = raw.statement.trim();
         if (!statement) {
@@ -543,7 +565,7 @@ export async function materializeActiveCycleWork(input: {
           projectId: facts.projectId,
           cycleInstanceId: facts.activeCycleInstanceId,
           turnCorrelationId: facts.turnCorrelationId,
-          index,
+          index: identityIndex,
           type,
           statement,
           recommendedOptionRef,
@@ -586,7 +608,7 @@ export async function materializeActiveCycleWork(input: {
                   cycleInstanceId: facts.activeCycleInstanceId,
                   turnCorrelationId: facts.turnCorrelationId,
                   producedAt: input.producedAt,
-                  index,
+                  index: identityIndex,
                 }),
             reuse: true,
           });
@@ -613,7 +635,7 @@ export async function materializeActiveCycleWork(input: {
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
diff --git a/projects/sfia-studio/app/lib/oa/cycle/index.ts b/projects/sfia-studio/app/lib/oa/cycle/index.ts
index 4a3d74e1..278a8eb8 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/index.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/index.ts
@@ -94,6 +94,16 @@ export {
   type TrajectoryDecisionSupportState,
   type WorkRecommendationProjectionCard,
 } from "./application/deriveWorkRecommendations";
+export {
+  filterActiveCycleWorkItemsForProspectiveMaterialization,
+  hasIdentifiableWorkSubstance,
+  openWorkRecommendationStatementsForCycle,
+  qualifyProspectiveWorkRecommendationMaterialization,
+  workRecommendationStatementsEquivalent,
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
- La qualification reste **bornée** (signaux structurés + formes d’orientation / invites). Ce n’est **pas** une sémantique générale.
- Ambiguïtés non prouvables restent fail-closed côté équivalence (ne pas conclure EQ) ; invites soft restent conversationnelles.
- Parité REAL Nora / distribution linguistique non prouvée ici.

Dette :
- Aucune nouvelle dette heuristique non bornée volontairement introduite.
- Condition de sortie : preuve REAL Human QA post-intégration autorisée, ou arbitrage Morris si faux négatifs graves en conversation réelle.

REC-02 : **RESERVED** (aucun binding tour↔recommandation inventé).

---

## 18. Décisions Morris restantes

1. Revue ChatGPT Corrective Pass 01.
2. Autorisation d’intégration projet distincte (commit/PR) — **non consommée**.
3. Rejeu Human QA P6 après intégration.
4. GO distinct si campagne REAL fournisseur nécessaire.

---

## 19. Verdict

**LOCAL CORRECTIVE CANDIDATE — READY FOR CHATGPT RE-REVIEW**

Conditions :
- 3 défauts corrigés et testés ;
- non-régressions ciblées PASS ;
- historique non muté ;
- contrats ACW préservés ;
- aucune architecture parallèle ;
- Review Pack FULL mono-cycle ;
- handoff L3 à publier / vérifier.

Anti-claims : ≠ PR readiness · ≠ commit projet · ≠ P6 GLOBAL PASS · ≠ v3 ADOPTED · ≠ READY FOR REAL global.
