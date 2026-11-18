# SFIA Review Pack Full — ML4D / Ensemble 05 — Consolidation finale + réception Morris

**Date :** 2026-11-18 (Europe/Paris)  
**Cycle principal :** 8 — Delivery / consolidation  
**Cycles intégrés :** 9 QA · 4 UX si besoin  
**Profil :** Critical  
**Environnement :** DEV isolé · **NO RELEASE** · **NO LIVE** · **aucun push produit**  
**Handoff LIVE rattachement :** `sfia/review-handoff@72bb56d9` / blob `c5dac6172969096e0ad414082ddfc96d0cdac96b`

---

## 1. Verdict unique

# `READY FOR MORRIS ENSEMBLE 05 RECEPTION REVIEW`

Consolidation terminée dans le périmètre autorisé : causes L03/L04/L07 identifiées, correctifs déterministes appliqués, tests discriminants PASS, Level-B reconfirmé, dossier de réception inspectable. Réserves qualifiées. **Aucun nouvel appel LIVE.**

Ne vaut pas Gate C / ADOPTED / push / RECETTE / clôture ML4D.

---

## 2. Git Truth Check

| Objet | Valeur |
|---|---|
| Branche | `sfia/next-ml4d-composition-adaptative` |
| HEAD parent | `a783f014935de0dec5ff8e79a2b18eea0e629756` |
| origin/main | `997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| Worktree | Dirty (Ensemble 05 complet + consolidation) |
| Staging | vide |
| Push produit | aucun |

### Empreintes deltas ce contrat

| Fichier | SHA-256 |
|---|---|
| `admission.ts` | `3151c9fca269110531db85523cd7469079fff8fefd8876f46928be2a78001681` |
| `nora-adapter.ts` | `d8541a542e0a106cabe02f613313b0b776a886006258ea0f7395b8d4b14f4ed2` |
| `composition-selection-discriminants.test.ts` | `a24420526c1b6c1300531cc94f5a4071b6455d5a30d6eec8cf6576240029088b` |
| `nora-sas-maturation-instructions.test.ts` | `f90ba4b766a350c73a1486fe6178d6db6b2eaacc01ac0ecbfc80bb20fe987ff8` |

---

## 3–4. Sources / GO Morris

Contrat consolidation Ensemble 05 ; handoff LIVE `72bb56d9` ; preuves `live-bounded-campaign-20261118/` ; reconstruction DB DEV ; gouvernance ENV-01 / versioning NO RELEASE. GO : consolidation DEV, **aucun LIVE**.

---

## 5. Périmètre IN/OUT

**IN :** admission/sélection, prompt D3 existant, tests, preuves, delivery-history, dossier réception.  
**OUT :** nouveau moteur cognitif, LIVE, migrations, push, Gate C, doctrine normative.

---

## 6. Architecture avant/après

Inchangée structurellement : D3 → `visualComposition` canonique → admission CV → rendu NoraComposition/ELK.  
**Après :** préconditions substance comparison ; normalisation hint relations ; instructions D3 plus discriminantes.

---

## 7. Analyse L03 / L04 / L07

# Audit L03 / L04 / L07 — sélection graphique (preuves LIVE enregistrées)

**Source :** projet `proj_b088c7ca-1847-4693-bccc-cdb8bd194f5a` · conv `conv_8c1dae33-b68b-4a56-9458-556125f68b16`  
**Niveau de preuve :** LIVE antérieur (génération) + reconstruction DEV DB · **aucun nouvel appel LIVE**

| Tour | Ordinal | `visualComposition` | Cas | Cause | Correctif |
|---|---|---|---|---|---|
| **L03** | 6 | **absent** | **B** | D3 a produit un tableau Markdown dans `replyDraft` (3 approches, av./limites) **sans** bloc `comparison` | Instructions D3 renforcées (émettre `comparison` si alternatives individualisables) ; Studio cards **prouvé** en REPLAY FAKE |
| **L04** | 8 | **absent** | **B** | Idem — matrice Markdown Effort/Risque/Délai dans prose, pas de `criteria[]` | Instructions D3 + REPLAY FAKE → matrix |
| **L07** | 14 | présent · `layoutHint=parallelProcess` · 3 `laneId` | **D** | Contenu = voies parallèles + convergence ; parallel **fidèle** | Hint coercion seulement si parallel **sans** ≥2 lanes ; pas de modification artificielle du LIVE |

## Chaîne reconstituée

```text
Demande naturelle
  → qualification LIVE (Agents SDK)
  → L03/L04: replyDraft riche, visualComposition=null  → admission CV_NO_COMPOSITION / prose UI
  → L07: relations+lanes+parallelProcess → family parallelProcess → rendu parallel
```

**Pas Cas A** (Studio n’a pas « mal choisi » cards/matrix : il n’y avait rien à admettre).  
**Pas Cas C** (pas de perte en projection : VC jamais émise).

## Données L07 (extrait)

- Nodes avec `laneId` : `acces`, `donnees`, `accompagnement`
- Convergence vers « Répétition de bout en bout » puis « Mise en service envisagée »
- Edges majoritairement `flow` (pas `sync` formel) — hybrid acceptable en parallelProcess

Fichier machine : `../live-bounded-campaign-20261118/live-turn-reconstructions/l03-l04-l07-audit.json`


## 8–9. Données / règles corrigées

# Matrice de sélection — avant / après consolidation

| Scénario | Avant | Après | Preuve |
|---|---|---|---|
| 3 options structurées | cards si VC présente | **inchangé** + REPLAY L03 → cards | discriminants UNIT |
| 3 options incomplètes | pouvait tenter cards | **text** (`CV_COMPARISON_INCOMPLETE_ALTERNATIVES`) | UNIT |
| 5 options + critères homogènes | matrix | matrix | UNIT |
| Critères ragged | matrix via criteria path | matrix via n≥5 ; **pas** `MATRIX_CRITERIA` | UNIT |
| parallel sans lanes | family parallel | **→ dependencies** | UNIT |
| deps + lanes + sync | dependencies | **→ parallelProcess** | UNIT |
| L07 hybrid lanes | parallel | **parallel conservé (Cas D)** | UNIT + LIVE DB |
| Dépendances convergentes | directed | directed | UNIT + Level-B S7 |
| Texte simple | prose | prose | UNIT |
| Comparaison LIVE L03/L04 | prose (Cas B) | prose historique ; **prompt D3** pour futurs tours | audit + prompt |

**Aucun nouvel appel LIVE** pour revalider L03/L04/L07.


### Prompt D3 (extrait `nora-adapter.ts`)

```text
COMPARAISON : si ≥2 alternatives individualisables → bloc comparison (pas seulement tableau Markdown)…
RELATIONS : dependencies vs parallelProcess vs decisionTree — lanes/sync/depends_on non interchangeables…
```

### Fonctions admission (contenu complet des ajouts)

```ts
export function comparisonAlternativesExploitable(
  block: Extract<VisualBlock, { kind: "comparison" }>,
): { ok: boolean; completeCount: number; reasonCodes: string[] } {
  const reasons: string[] = [];
  let completeCount = 0;
  for (const a of block.alternatives) {
    const titled = labelLen(a.title) > 0;
    const bodied =
      labelLen(a.summary) > 0 ||
      (a.pros?.length ?? 0) > 0 ||
      (a.cons?.length ?? 0) > 0;
    if (titled && bodied) completeCount += 1;
  }
  if (completeCount < 2) {
    reasons.push("CV_COMPARISON_INCOMPLETE_ALTERNATIVES");
    return { ok: false, completeCount, reasonCodes: reasons };
  }
  if (completeCount < block.alternatives.length) {
    reasons.push("CV_COMPARISON_PARTIAL_ALTERNATIVES");
  }
  // Homogeneous criteria only when every listed criterion has a value for each alt.
  const criteria = block.criteria ?? [];
  if (criteria.length > 0) {
    const altIds = block.alternatives.map((a) => a.id);
    const ragged = criteria.some((c) =>
      altIds.some((id) => labelLen(c.values?.[id] ?? "") === 0),
    );
    if (ragged) {
      reasons.push("CV_COMPARISON_CRITERIA_INCOMPLETE");
    }
  }
  return { ok: true, completeCount, reasonCodes: reasons };
}

/**
 * CV-04/05 — comparison variant from cardinality, label density, and width.
 * No dogmatic "N cards" / "N matrix" threshold alone.
 */
```

```ts
export function normalizeRelationsLayoutHint(
  block: Extract<VisualBlock, { kind: "relations" }>,
): {
  block: Extract<VisualBlock, { kind: "relations" }>;
  reasonCodes: string[];
} {
  const reasons: string[] = [];
  const lanes = new Set(
    block.nodes.map((n) => n.laneId).filter((id): id is string => typeof id === "string" && id.length > 0),
  );
  const hasSync = block.edges.some((e) => e.relation === "sync");
  const hasDepLike = block.edges.some(
    (e) => e.relation === "depends_on" || e.relation === "flow" || e.relation == null,
  );
  const hint = block.layoutHint;

  if (hint === "parallelProcess" && lanes.size < 2) {
    reasons.push("CV_HINT_PARALLEL_WITHOUT_LANES_TO_DEPS");
    return { block: { ...block, layoutHint: "dependencies" }, reasonCodes: reasons };
  }
  if (hint === "dependencies" && lanes.size >= 2 && hasSync) {
    reasons.push("CV_HINT_DEPS_WITH_LANES_SYNC_TO_PARALLEL");
    return { block: { ...block, layoutHint: "parallelProcess" }, reasonCodes: reasons };
  }
  if (!hint) {
    if (lanes.size >= 2) {
      reasons.push("CV_HINT_INFER_PARALLEL_FROM_LANES");
      return { block: { ...block, layoutHint: "parallelProcess" }, reasonCodes: reasons };
    }
    if (hasDepLike && block.edges.length > 0) {
      reasons.push("CV_HINT_INFER_DEPENDENCIES");
      return { block: { ...block, layoutHint: "dependencies" }, reasonCodes: reasons };
    }
  }
  return { block, reasonCodes: reasons };
}

/**
 * Relations: directed CSS layout when layoutHint + envelope allow; else exhaustive list.
 * Fixed-coordinate SVG remains forbidden.
 */
```

## 10. C2 / absence de pertes

C2 exact-identity conservé ; tests adversarial + editorial **PASS**. Aucune règle nouvelle ne remplit pros/cons/criteria inventés.

---

## 11–13. Fichiers créés / contenus / diffs

### Créés ce contrat (contenu complet ci-dessous ou embarqué)


#### `00-selection-audit-l03-l04-l07.md`

# Audit L03 / L04 / L07 — sélection graphique (preuves LIVE enregistrées)

**Source :** projet `proj_b088c7ca-1847-4693-bccc-cdb8bd194f5a` · conv `conv_8c1dae33-b68b-4a56-9458-556125f68b16`  
**Niveau de preuve :** LIVE antérieur (génération) + reconstruction DEV DB · **aucun nouvel appel LIVE**

| Tour | Ordinal | `visualComposition` | Cas | Cause | Correctif |
|---|---|---|---|---|---|
| **L03** | 6 | **absent** | **B** | D3 a produit un tableau Markdown dans `replyDraft` (3 approches, av./limites) **sans** bloc `comparison` | Instructions D3 renforcées (émettre `comparison` si alternatives individualisables) ; Studio cards **prouvé** en REPLAY FAKE |
| **L04** | 8 | **absent** | **B** | Idem — matrice Markdown Effort/Risque/Délai dans prose, pas de `criteria[]` | Instructions D3 + REPLAY FAKE → matrix |
| **L07** | 14 | présent · `layoutHint=parallelProcess` · 3 `laneId` | **D** | Contenu = voies parallèles + convergence ; parallel **fidèle** | Hint coercion seulement si parallel **sans** ≥2 lanes ; pas de modification artificielle du LIVE |

## Chaîne reconstituée

```text
Demande naturelle
  → qualification LIVE (Agents SDK)
  → L03/L04: replyDraft riche, visualComposition=null  → admission CV_NO_COMPOSITION / prose UI
  → L07: relations+lanes+parallelProcess → family parallelProcess → rendu parallel
```

**Pas Cas A** (Studio n’a pas « mal choisi » cards/matrix : il n’y avait rien à admettre).  
**Pas Cas C** (pas de perte en projection : VC jamais émise).

## Données L07 (extrait)

- Nodes avec `laneId` : `acces`, `donnees`, `accompagnement`
- Convergence vers « Répétition de bout en bout » puis « Mise en service envisagée »
- Edges majoritairement `flow` (pas `sync` formel) — hybrid acceptable en parallelProcess

Fichier machine : `../live-bounded-campaign-20261118/live-turn-reconstructions/l03-l04-l07-audit.json`


#### `01-selection-before-after.md`

# Matrice de sélection — avant / après consolidation

| Scénario | Avant | Après | Preuve |
|---|---|---|---|
| 3 options structurées | cards si VC présente | **inchangé** + REPLAY L03 → cards | discriminants UNIT |
| 3 options incomplètes | pouvait tenter cards | **text** (`CV_COMPARISON_INCOMPLETE_ALTERNATIVES`) | UNIT |
| 5 options + critères homogènes | matrix | matrix | UNIT |
| Critères ragged | matrix via criteria path | matrix via n≥5 ; **pas** `MATRIX_CRITERIA` | UNIT |
| parallel sans lanes | family parallel | **→ dependencies** | UNIT |
| deps + lanes + sync | dependencies | **→ parallelProcess** | UNIT |
| L07 hybrid lanes | parallel | **parallel conservé (Cas D)** | UNIT + LIVE DB |
| Dépendances convergentes | directed | directed | UNIT + Level-B S7 |
| Texte simple | prose | prose | UNIT |
| Comparaison LIVE L03/L04 | prose (Cas B) | prose historique ; **prompt D3** pour futurs tours | audit + prompt |

**Aucun nouvel appel LIVE** pour revalider L03/L04/L07.


#### `02-morris-reception-dossier.md`

# Dossier de réception Morris — Ensemble 05 (composition Nora)

**Candidat :** `sfia/next-ml4d-composition-adaptative` @ `a783f014` (+ WT dirty)  
**Verdict proposé :** `READY FOR MORRIS ENSEMBLE 05 RECEPTION REVIEW`  
**Ne vaut pas :** Gate C · ADOPTED · push · RECETTE · clôture ML4D

## A. Produit

Oui, dans le périmètre LIVE borné (12 tours) : réponses naturelles, réserves explicites, refus d’invention (L10), compositions spontanées (L05–L09).

## B. Sélection graphique

- **Quand D3 émet** une structure comparison/relations : Studio sélectionne cards / matrix / directed / parallel selon préconditions sémantiques (tests discriminants PASS).
- **L03/L04 LIVE** : Cas B — structure absente côté D3 ; prose pertinente ; prompt consolidé pour les tours futurs.
- **L07 LIVE** : Cas D — parallel fidèle aux voies.

## C. Intégrité

C2 exact-identity · SubstanceComplement · tests adversarial PASS · pas de HumanDecision auto.

## D. Visuel

Familles Figma 01–09 disponibles (Level-A/B + ELK). Captures LIVE antérieures + Level-B reconfirmé. SHOT-CROP : dette mineure de harness.

## E. Continuité

Persist/reload LIVE : 12 assistants. Level-B reload PASS. Brouillon / surfaces non régressés dans ce mandat (suites E05 antérieures).

## F. Architecture

Chemin producteur : D3 qualification → `visualComposition` canonique → admission CV → NoraComposition / ELK. Pas de second moteur prose→graphique.

## G. Preuves

| Niveau | État |
|---|---|
| UNIT discriminants / admission / C2 | **PASS** (ce cycle) |
| ADAPTER FAKE SIM | **PASS** |
| BROWSER FAKE Level-B | **PASS** (reconfirmé) |
| LIVE borné | **PROVEN antérieur** (12/12) — non rejoué |
| PG DEV | lectures de reconstruction |
| Inspection Figma | antérieure 01–09 |

## H. Réserves

| Réserve | Gravité | Owner | Exit |
|---|---|---|---|
| L03/L04 Cas B historique | Acceptable + prompt | D3 | futur LIVE borné distinct si Morris l’exige |
| COST-USAGE tokens | Ops | instrumentation | gate distinct |
| SHOT-CROP | Mineur | harness | correctif screenshot |
| WT dirty non poussé | Process | Morris/Git | push produit hors mandat |

## I. Suite roadmap

Réception Ensemble 05 ≠ Gate C ≠ clôture ML4D. Après arbitrage Morris : éventuel correctif sélection LIVE borné, puis convergence UX globale selon roadmap.


#### `03-c-matrix-proposal-c01-c22.md`

# Proposition factuelle — matrice C-01…C-22 (V0.7)

**Ne modifie pas** le document normatif candidat. Statuts proposés pour arbitrage Morris.

Légende : DOCUMENTED · VALIDATED SPEC · IMPLEMENTED · COVERAGE VERIFIED · BEHAVIOR PROVEN · ADOPTED

| ID | Proposition | Preuve / note |
|---|---|---|
| C-01…C-06 | IMPLEMENTED → COVERAGE VERIFIED (FAKE) | Figma 01–06 Level-A |
| C-07 | BEHAVIOR PROVEN (LIVE borné) partiel | L07 parallel Cas D ; deps SIM Level-B |
| C-08 | BEHAVIOR PROVEN (LIVE) | L08 decisionTree |
| C-09 | BEHAVIOR PROVEN (LIVE) | L09 parallel |
| C-10…C-14 | COVERAGE VERIFIED / IMPLEMENTED | admission, C2, persist |
| C-15 | BEHAVIOR PROVEN (LIVE borné) | campagne 12 tours |
| C-16 | DOCUMENTED | coût fallback |
| C-17…C-20 | COVERAGE VERIFIED | responsive / a11y partiels |
| C-21 | DOCUMENTED | Gate C hors mandat |
| C-22 | DOCUMENTED | réception Morris (ce dossier) |

**ADOPTED :** aucun — hors autorité Cursor.


#### `tests/unit/composition-selection-discriminants.test.ts` (complet)

```ts
/**
 * Discriminant selection scenarios — Ensemble 05 consolidation.
 * Oracles check form relevance, not mere component presence.
 * Proof level: UNIT / ADAPTER FAKE (no LIVE).
 */
import { describe, expect, it } from "vitest";
import {
  admitConversationalComposition,
  comparisonAlternativesExploitable,
  normalizeRelationsLayoutHint,
  selectComparisonVariant,
  selectRelationsVariant,
  selectSequenceVariant,
} from "@/domains/conversation/conversational-composition";
import {
  parseVisualComposition,
  VISUAL_COMPOSITION_SCHEMA,
  type VisualComposition,
} from "@/domains/conversation/visual-composition";

function cmp(opts: {
  n: number;
  criteria?: number;
  incomplete?: boolean;
  raggedCriteria?: boolean;
}): VisualComposition {
  const alternatives = Array.from({ length: opts.n }, (_, i) => ({
    id: `a${i}`,
    title: opts.incomplete && i === opts.n - 1 ? `Option ${i}` : `Option ${i}`,
    summary:
      opts.incomplete && i === opts.n - 1
        ? ""
        : `Résumé distinct de l'option ${i}`,
    pros: opts.incomplete && i === opts.n - 1 ? [] : [`Avantage ${i}`],
    cons: opts.incomplete && i === opts.n - 1 ? [] : [`Limite ${i}`],
  }));
  const criteria =
    (opts.criteria ?? 0) > 0
      ? Array.from({ length: opts.criteria! }, (_, i) => ({
          id: `c${i}`,
          label: `Critère ${i}`,
          values: Object.fromEntries(
            alternatives.map((a, ai) => [
              a.id,
              opts.raggedCriteria && ai === alternatives.length - 1 ? "" : `v${i}-${ai}`,
            ]),
          ),
        }))
      : undefined;
  return parseVisualComposition({
    schemaVersion: VISUAL_COMPOSITION_SCHEMA,
    blocks: [
      {
        kind: "comparison",
        id: "cmp",
        title: "Comparaison",
        alternatives,
        criteria,
        recommendation: "Recommandation conditionnelle — pas une décision.",
        textAlternative: alternatives.map((a) => a.title).join(" / "),
      },
    ],
  })!;
}

function rel(opts: {
  hint?: "dependencies" | "decisionTree" | "parallelProcess";
  lanes?: boolean;
  sync?: boolean;
  tree?: boolean;
}): VisualComposition {
  if (opts.tree) {
    return parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "relations",
          id: "tree",
          title: "Arbre",
          layoutHint: "decisionTree",
          nodes: [
            { id: "r", label: "Support saturé ?", kind: "unknown" },
            { id: "y", label: "Oui", kind: "hypothesis" },
            { id: "n", label: "Non", kind: "hypothesis" },
            { id: "y2", label: "Rythme progressif", kind: "finding" },
            { id: "n2", label: "Pilote", kind: "finding" },
          ],
          edges: [
            { from: "r", to: "y", relation: "condition_true" },
            { from: "r", to: "n", relation: "condition_false" },
            { from: "y", to: "y2", relation: "flow" },
            { from: "n", to: "n2", relation: "flow" },
          ],
          textAlternative: "Arbre conditionnel.",
        },
      ],
    })!;
  }
  const nodes = opts.lanes
    ? [
        { id: "a1", label: "Accès 1", kind: "observation" as const, laneId: "acces" },
        { id: "a2", label: "Accès 2", kind: "finding" as const, laneId: "acces" },
        { id: "d1", label: "Données 1", kind: "observation" as const, laneId: "donnees" },
        { id: "d2", label: "Données 2", kind: "finding" as const, laneId: "donnees" },
        { id: "c1", label: "Accomp. 1", kind: "observation" as const, laneId: "accomp" },
        { id: "c2", label: "Accomp. 2", kind: "finding" as const, laneId: "accomp" },
        { id: "sync", label: "Contrôle commun", kind: "finding" as const },
      ]
    : [
        { id: "a1", label: "Accès réseau", kind: "observation" as const },
        { id: "a2", label: "Comptes", kind: "finding" as const },
        { id: "b1", label: "Données", kind: "observation" as const },
        { id: "b2", label: "Qualité", kind: "finding" as const },
        { id: "c1", label: "Support", kind: "observation" as const },
        { id: "c2", label: "Comms", kind: "finding" as const },
        { id: "gate", label: "Prérequis", kind: "finding" as const },
        { id: "go", label: "Mise en service", kind: "hypothesis" as const },
      ];
  const edges = opts.lanes
    ? [
        { from: "a1", to: "a2", relation: "flow" as const },
        { from: "d1", to: "d2", relation: "flow" as const },
        { from: "c1", to: "c2", relation: "flow" as const },
        ...(opts.sync
          ? [
              { from: "a2", to: "sync", relation: "sync" as const },
              { from: "d2", to: "sync", relation: "sync" as const },
              { from: "c2", to: "sync", relation: "sync" as const },
            ]
          : [
              { from: "a2", to: "sync", relation: "flow" as const },
              { from: "d2", to: "sync", relation: "flow" as const },
              { from: "c2", to: "sync", relation: "flow" as const },
            ]),
      ]
    : [
        { from: "a1", to: "a2", relation: "depends_on" as const },
        { from: "a2", to: "gate", relation: "depends_on" as const },
        { from: "b1", to: "b2", relation: "depends_on" as const },
        { from: "b2", to: "gate", relation: "depends_on" as const },
        { from: "c1", to: "c2", relation: "depends_on" as const },
        { from: "c2", to: "gate", relation: "depends_on" as const },
        { from: "gate", to: "go", relation: "depends_on" as const },
      ];
  return parseVisualComposition({
    schemaVersion: VISUAL_COMPOSITION_SCHEMA,
    blocks: [
      {
        kind: "relations",
        id: "rel",
        title: "Relations",
        layoutHint: opts.hint,
        nodes,
        edges,
        textAlternative: "Relations structurées.",
      },
    ],
  })!;
}

describe("composition selection discriminants (Ensemble 05 consolidation)", () => {
  it("three structured independent options → cards (wide)", () => {
    const c = selectComparisonVariant(cmp({ n: 3 }).blocks[0] as never, 960);
    expect(c.variant).toBe("cards");
  });

  it("three incomplete options → text (no invented limits)", () => {
    const base = cmp({ n: 3 })!.blocks[0] as Extract<
      VisualComposition["blocks"][number],
      { kind: "comparison" }
    >;
    const block = {
      ...base,
      alternatives: base.alternatives.map((a) => ({
        ...a,
        summary: "",
        pros: [] as string[],
        cons: [] as string[],
      })),
    };
    const substance = comparisonAlternativesExploitable(block);
    expect(substance.ok).toBe(false);
    const c = selectComparisonVariant(block, 960);
    expect(c.variant).toBe("text");
  });

  it("five options with homogeneous criteria → matrix", () => {
    const c = selectComparisonVariant(cmp({ n: 5, criteria: 3 })!.blocks[0] as never, 1040);
    expect(c.variant).toBe("matrix");
  });

  it("five options with ragged criteria → matrix by cardinality; criteria path skipped", () => {
    const base = cmp({ n: 5, criteria: 3 })!.blocks[0] as Extract<
      VisualComposition["blocks"][number],
      { kind: "comparison" }
    >;
    const lastId = base.alternatives[base.alternatives.length - 1]!.id;
    const block = {
      ...base,
      criteria: (base.criteria ?? []).map((c) => ({
        ...c,
        values: { ...c.values, [lastId]: "" },
      })),
    };
    const ragged = selectComparisonVariant(block, 1040);
    expect(ragged.variant).toBe("matrix");
    expect(ragged.reasonCodes).toContain("CV_COMPARISON_CRITERIA_INCOMPLETE");
    expect(ragged.reasonCodes).not.toContain("CV_COMPARISON_MATRIX_CRITERIA");
  });

  it("dense comparison in narrow Travail → stacked not cards", () => {
    const c = selectComparisonVariant(cmp({ n: 3 }).blocks[0] as never, 390);
    expect(["stacked", "text"]).toContain(c.variant);
  });

  it("convergent dependencies → directed + dependencies family", () => {
    const composition = rel({ hint: "dependencies" });
    const adm = admitConversationalComposition(composition, { containerWidthPx: 960 });
    const r = adm.admitted.find((a) => a.block.kind === "relations")!;
    expect(r.family).toBe("dependencies");
    expect(r.variant).toBe("directed");
  });

  it("parallel lanes + sync → parallelProcess family", () => {
    const composition = rel({ hint: "parallelProcess", lanes: true, sync: true });
    const adm = admitConversationalComposition(composition, { containerWidthPx: 960 });
    const r = adm.admitted.find((a) => a.block.kind === "relations")!;
    expect(r.family).toBe("parallelProcess");
    expect(r.variant).toBe("directed");
  });

  it("parallel hint without lanes → coerced to dependencies", () => {
    const n = normalizeRelationsLayoutHint(rel({ hint: "parallelProcess" }).blocks[0] as never);
    expect(n.block.layoutHint).toBe("dependencies");
    expect(n.reasonCodes).toContain("CV_HINT_PARALLEL_WITHOUT_LANES_TO_DEPS");
    const sel = selectRelationsVariant(n.block, 960);
    expect(sel.variant).toBe("directed");
  });

  it("LIVE L07-shaped hybrid (lanes + convergence, no sync) keeps parallel", () => {
    const composition = rel({ hint: "parallelProcess", lanes: true, sync: false });
    const adm = admitConversationalComposition(composition, { containerWidthPx: 1440 });
    const r = adm.admitted.find((a) => a.block.kind === "relations")!;
    expect(r.family).toBe("parallelProcess");
  });

  it("ambiguous relations without hint/lanes/edges → conservative list/text path", () => {
    const composition = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "relations",
          id: "amb",
          title: "Ambigu",
          nodes: [
            { id: "a", label: "A", kind: "observation" },
            { id: "b", label: "B", kind: "observation" },
          ],
          edges: [],
          textAlternative: "A et B mentionnés sans relation.",
        },
      ],
    })!;
    expect(composition).toBeTruthy();
    const sel = selectRelationsVariant(composition!.blocks[0] as never, 960);
    expect(sel.variant).toBe("list");
  });

  it("conditional multinivel tree → decisionPaths directed", () => {
    const adm = admitConversationalComposition(rel({ tree: true }), { containerWidthPx: 960 });
    const r = adm.admitted.find((a) => a.block.kind === "relations")!;
    expect(r.family).toBe("decisionPaths");
    expect(r.variant).toBe("directed");
  });

  it("simple text → no graphic ownership forced", () => {
    const composition = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [{ kind: "text", id: "t", markdown: "Explication simple." }],
    })!;
    const adm = admitConversationalComposition(composition, {
      canonicalText: "Explication simple.",
    });
    expect(adm.fallbackReasons).toContain("CV_NARRATIVE_ONLY");
    expect(adm.admitted.every((a) => a.family === "narrative")).toBe(true);
  });

  it("sequence without reliable dates stays sequence (not fake Gantt obligation)", () => {
    const composition = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "sequence",
          id: "s",
          title: "Parcours",
          steps: [
            { id: "1", title: "Cadrer", detail: "Sans date" },
            { id: "2", title: "Préparer", detail: "Sans date" },
            { id: "3", title: "Déployer", detail: "Sans date" },
          ],
          textAlternative: "Trois étapes sans chronologie chiffrée.",
        },
      ],
    })!;
    const sel = selectSequenceVariant(composition.blocks[0] as never, 960);
    expect(["horizontal", "vertical"]).toContain(sel.variant);
  });

  it("cardinality sweep 2/3/5/8/12 — schema max 12; >18 → text at selector", () => {
    for (const n of [2, 3, 5, 8, 12]) {
      const parsed = cmp({ n });
      expect(parsed).toBeTruthy();
      const v = selectComparisonVariant(parsed!.blocks[0] as never, 1280);
      expect(["cards", "stacked", "matrix"]).toContain(v.variant);
    }
    const tooMany = {
      ...(cmp({ n: 3 }).blocks[0] as Extract<
        VisualComposition["blocks"][number],
        { kind: "comparison" }
      >),
      alternatives: Array.from({ length: 19 }, (_, i) => ({
        id: `x${i}`,
        title: `O${i}`,
        summary: `S${i}`,
      })),
    };
    expect(selectComparisonVariant(tooMany, 1280).variant).toBe("text");
  });

  it("LIVE replay L03-shaped comparison (REPLAY FAKE) → cards when structured", () => {
    const composition = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "comparison",
          id: "l03-replay",
          title: "Trois approches de déploiement multisite",
          lead: "Comparaison sur le rythme — pas l'architecture. Hypothèses de travail.",
          alternatives: [
            {
              id: "sim",
              title: "Déploiement simultané",
              summary: "Tous les sites basculent au même moment.",
              pros: ["Généralisation rapide", "Fonctionnement homogène"],
              cons: ["Défaut commun", "Pic support", "Retour arrière complexe"],
            },
            {
              id: "waves",
              title: "Déploiement par vagues",
              summary: "Groupes successifs avec bilan entre vagues.",
              pros: ["Risque limité par vague", "Corrections réutilisables"],
              cons: ["Coexistence", "Coordination répétée"],
            },
            {
              id: "pilot",
              title: "Pilote puis extension",
              summary: "Un site d'apprentissage avant généralisation.",
              pros: ["Apprentissage ciblé"],
              cons: ["Transfert d'apprentissage à sécuriser"],
            },
          ],
          recommendation:
            "Recommandation conditionnelle : si le support est saturé, éviter la bascule simultanée.",
          textAlternative:
            "Simultané / vagues / pilote — avantages et limites distincts ; aucune décision.",
        },
      ],
    })!;
    const adm = admitConversationalComposition(composition, { containerWidthPx: 1440 });
    const c = adm.admitted.find((a) => a.block.kind === "comparison")!;
    expect(c.variant).toBe("cards");
  });

  it("LIVE replay L04-shaped matrix (REPLAY FAKE) → matrix with Effort/Risque/Délai", () => {
    const ids = ["a", "b", "c", "d", "e"] as const;
    const composition = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "comparison",
          id: "l04-replay",
          title: "Cinq possibilités de déploiement",
          alternatives: ids.map((id, i) => ({
            id,
            title: `Possibilité ${i + 1}`,
            summary: `Principe ${i + 1}`,
          })),
          criteria: [
            {
              id: "effort",
              label: "Effort",
              values: Object.fromEntries(ids.map((id) => [id, "Relatif"])),
            },
            {
              id: "risque",
              label: "Risque",
              values: Object.fromEntries(ids.map((id) => [id, "Relatif"])),
            },
            {
              id: "delai",
              label: "Délai",
              values: Object.fromEntries(ids.map((id) => [id, "Relatif"])),
            },
          ],
          editorialNote: "Niveaux relatifs — pas des estimations de projet.",
          textAlternative: "Cinq possibilités · Effort / Risque / Délai.",
        },
      ],
    })!;
    const adm = admitConversationalComposition(composition, { containerWidthPx: 1440 });
    const c = adm.admitted.find((a) => a.block.kind === "comparison")!;
    expect(c.variant).toBe("matrix");
  });
});

```

### Modifiés

- `nora-adapter.ts` — 2 lignes d’instructions COMPARAISON/RELATIONS (+ maturation test baseline).
- `conversational-composition/admission.ts` (fichier WT non suivi depuis Ensemble 05) — fonctions + branche relations admit.
- `conversational-composition/index.ts` — exports.
- `nora-sas-maturation-instructions.test.ts` — `NoraTurnQualificationAgentSchema` (baseline historique).

---

## 14–16. Tests

| Suite | Résultat |
|---|---|
| composition-selection-discriminants | **PASS** |
| conversational-composition-admission | **PASS** |
| C2 editorial + adversarial | **PASS** |
| provider-simulated-level-b | **PASS** |
| fidelity + canonical sections | **PASS** |
| nora-sas-maturation-instructions | **PASS** (baseline corrigée) |
| Level-B Playwright SIM e2e | **PASS** (21.7s) |
| `tsc --noEmit` | **erreurs préexistantes** hors scope (tests typage) — **non déclaré PASS global** |

**Aucun LIVE.**

---

## 17–19. Captures / responsive / persist

- Captures LIVE antérieures + Level-B runtime conservées.
- Persist LIVE antérieur + Level-B reload PASS.
- SHOT-CROP : dette mineure harness (réserve).
- Largeurs discriminants UNIT : 390 / 960 / 1040 / 1280 / 1440.

---

## 20–21. LIVE antérieur / coûts

12/12 LIVE COMPLETE historiques · €10,20 est. / €25 · **budget non réutilisé** · tokens facturés non établis (COST-USAGE).

---

## 22. Limites de preuve

REPLAY FAKE ≠ nouvelle génération spontanée. Corrections L03/L04 portent sur le **chemin futur** (prompt+admission), pas une re-qualification LIVE.

---

## 23. Matrice C-01…C-22 proposée

# Proposition factuelle — matrice C-01…C-22 (V0.7)

**Ne modifie pas** le document normatif candidat. Statuts proposés pour arbitrage Morris.

Légende : DOCUMENTED · VALIDATED SPEC · IMPLEMENTED · COVERAGE VERIFIED · BEHAVIOR PROVEN · ADOPTED

| ID | Proposition | Preuve / note |
|---|---|---|
| C-01…C-06 | IMPLEMENTED → COVERAGE VERIFIED (FAKE) | Figma 01–06 Level-A |
| C-07 | BEHAVIOR PROVEN (LIVE borné) partiel | L07 parallel Cas D ; deps SIM Level-B |
| C-08 | BEHAVIOR PROVEN (LIVE) | L08 decisionTree |
| C-09 | BEHAVIOR PROVEN (LIVE) | L09 parallel |
| C-10…C-14 | COVERAGE VERIFIED / IMPLEMENTED | admission, C2, persist |
| C-15 | BEHAVIOR PROVEN (LIVE borné) | campagne 12 tours |
| C-16 | DOCUMENTED | coût fallback |
| C-17…C-20 | COVERAGE VERIFIED | responsive / a11y partiels |
| C-21 | DOCUMENTED | Gate C hors mandat |
| C-22 | DOCUMENTED | réception Morris (ce dossier) |

**ADOPTED :** aucun — hors autorité Cursor.


## 24. W1–W5

| W | État |
|---|---|
| W1 contrat | conservé |
| W2–W4 graphiques | conservés + sélection renforcée |
| W5 réception | dossier préparé (ce pack) |

---

## 25. Risques / dettes

Voir dossier réception §H.

---

## 26. Préparation réception Morris

# Dossier de réception Morris — Ensemble 05 (composition Nora)

**Candidat :** `sfia/next-ml4d-composition-adaptative` @ `a783f014` (+ WT dirty)  
**Verdict proposé :** `READY FOR MORRIS ENSEMBLE 05 RECEPTION REVIEW`  
**Ne vaut pas :** Gate C · ADOPTED · push · RECETTE · clôture ML4D

## A. Produit

Oui, dans le périmètre LIVE borné (12 tours) : réponses naturelles, réserves explicites, refus d’invention (L10), compositions spontanées (L05–L09).

## B. Sélection graphique

- **Quand D3 émet** une structure comparison/relations : Studio sélectionne cards / matrix / directed / parallel selon préconditions sémantiques (tests discriminants PASS).
- **L03/L04 LIVE** : Cas B — structure absente côté D3 ; prose pertinente ; prompt consolidé pour les tours futurs.
- **L07 LIVE** : Cas D — parallel fidèle aux voies.

## C. Intégrité

C2 exact-identity · SubstanceComplement · tests adversarial PASS · pas de HumanDecision auto.

## D. Visuel

Familles Figma 01–09 disponibles (Level-A/B + ELK). Captures LIVE antérieures + Level-B reconfirmé. SHOT-CROP : dette mineure de harness.

## E. Continuité

Persist/reload LIVE : 12 assistants. Level-B reload PASS. Brouillon / surfaces non régressés dans ce mandat (suites E05 antérieures).

## F. Architecture

Chemin producteur : D3 qualification → `visualComposition` canonique → admission CV → NoraComposition / ELK. Pas de second moteur prose→graphique.

## G. Preuves

| Niveau | État |
|---|---|
| UNIT discriminants / admission / C2 | **PASS** (ce cycle) |
| ADAPTER FAKE SIM | **PASS** |
| BROWSER FAKE Level-B | **PASS** (reconfirmé) |
| LIVE borné | **PROVEN antérieur** (12/12) — non rejoué |
| PG DEV | lectures de reconstruction |
| Inspection Figma | antérieure 01–09 |

## H. Réserves

| Réserve | Gravité | Owner | Exit |
|---|---|---|---|
| L03/L04 Cas B historique | Acceptable + prompt | D3 | futur LIVE borné distinct si Morris l’exige |
| COST-USAGE tokens | Ops | instrumentation | gate distinct |
| SHOT-CROP | Mineur | harness | correctif screenshot |
| WT dirty non poussé | Process | Morris/Git | push produit hors mandat |

## I. Suite roadmap

Réception Ensemble 05 ≠ Gate C ≠ clôture ML4D. Après arbitrage Morris : éventuel correctif sélection LIVE borné, puis convergence UX globale selon roadmap.


## 27. Gates

| Gate | État |
|---|---|
| Git produit push/PR/merge | **NON** |
| RECETTE | inchangée |
| Gate C / ADOPTED | **NON** — décision Morris |

---

## 28. Verdict (réaffirmé)

# `READY FOR MORRIS ENSEMBLE 05 RECEPTION REVIEW`
