# SFIA Review Pack Full — mono-cycle
## SFIA Studio Next — R5 / ML4D / Ensemble 05 — Convergence visuelle Figma 01–06

**Date :** 2026-11-18
**Cycle :** 8 — Delivery (cycles intégrés 4 UX/UI, 6 archi si nécessaire, 9 QA)
**Profil :** Critical
**Typologie :** EVOL / corrective delivery
**Environnement :** DEV isolé (`:3101` e2e) · **NO RELEASE** · **NO PRODUCT PUSH / PR / merge**
**Review Handoff :** required / publish-in-cycle
**Mandat Morris :** GO confirmé — convergence visuelle Figma 01–06

---

## 1. Git Truth Check

| Item | Value |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4d-ux003-entry-20261116` |
| Branch | `sfia/next-ml4d-composition-adaptative` |
| HEAD (parent tip) | `a783f014935de0dec5ff8e79a2b18eea0e629756` |
| origin/main | `997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| Worktree | **Dirty** — changements préexistants + convergence 01–06 ; non assimilé à main |
| Product push | **NON AUTORISÉ** |

Préexistence honorée : ELK produit, DirectedRelationBoard, Strategy A, C2, SubstanceComplement.

---

## 2. Sources Git / limites

- SFIA v2.6 routing Next / Review Pack Full / Figma §6.6 / a11y / Fake-Real (lus depuis main).
- Conception Ensemble 05 + grammaire visuelle conversationnelle (branche doc).
- Dernier handoff ELK `6b36aac5` / blob `6bc0dc6f` = preuves rapportées, pas validation autonome du WT.
- Figma MCP : file `itgvCulInEnFY6DvgIegvP`, nodes 742:36, 743:2, 745:2, 745:27, 746:2, 746:22 ; session `ae55ec9d-3a45-4b99-93b6-140bce0a9895`.

**Limite L3 :** le handoff Markdown ne transporte pas les PNG. Binaires locaux :
`projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/figma-01-06-convergence-20261118/` (+ `sha256sums.txt`).

---

## 3. Mandat Morris consommé

Reconstruction structurelle Figma 01–06 (pas polish) ; fixtures R01–R06 ; captures + comparaison ; protection ELK 07–09 / Strategy A / C2 ; Review Pack Full + L3. Aucun micro-cycle séparé.

---

## 4. Contrat visuel des six Figma

# Figma 01–06 — contrat visuel exécutable (éléments visibles)

**Date :** 2026-11-18
**Fichier Figma :** `itgvCulInEnFY6DvgIegvP`
**Session MCP :** `ae55ec9d-3a45-4b99-93b6-140bce0a9895`

| Élément Figma | Parent / composition | Propriétés pertinentes | Composant React | Données | État attendu | Preuve |
|---|---|---|---|---|---|---|
| Badge fixture / qualification | Hero message Nora | Caps gold, non projet | `EditorialSynthesis` / comparison hero | `fixtureDemo` | Visible en R01–R06 | runtime-r01… |
| Titre 2 lignes + accent | Hero | White + gold accent, ~26–36px | `fig-nc-editorial-headline*` | `title` + `headlineAccent` | R01/R02/R06 | runtime-r01/r02/r06 |
| Lead intro | Hero | Muted 15px | `fig-nc-editorial-lead` | `lead` | Présent | runtime-* |
| 3 indicateurs | Synthèse 01 | Valeur 27px + label + séparateurs | `nora-composition-indicators` | `indicators[]` fixture | Exactement 3 | runtime-r01 |
| Section 01 numérotée | Synthèse 01 | `01` gold + titre | `fig-nc-section-head` | `strategiesSectionTitle` | Présent | runtime-r01 |
| 2 cartes stratégiques | Synthèse 01 | Grid 2 cols, accents blue/gold | `nora-composition-strategy-card` | `strategyCards[2]` | Côte à côte | runtime-r01 |
| Checklist 3 points | Synthèse 01 | Dot + label + détail | `nora-composition-checklist` | `checklist[]` | Présent | runtime-r01 |
| Orientation conditionnelle | Synthèse 01 | Bordure gold gauche | `nora-composition-orientation` | `orientation` | Présent | runtime-r01 |
| 4 cartes parcours | Parcours 02 | Horizontal, médaillons 1–4 | `nora-composition-steps-horizontal` | `steps[4]` | Horizontal ≥580px | runtime-r02 |
| Timeline 8 semaines | Parcours 02 | S1–S8, 3 tracks | `nora-composition-timeline` | `timeline` fixture | Fixture only | runtime-r02 |
| 3 cartes comparatives | Comparaison 03 | Grid 3, hauteurs variables | `nora-composition-comparison-cards` | `alternatives[3]` | `data-variant=cards` | runtime-r03 |
| Matrice 5 options | Comparaison 04 | Options en lignes, critères colonnes | `nora-composition-matrix-five` | 5 alts + 3 criteria | `data-variant=matrix` | runtime-r04 |
| 2 cartes empilées | Comparaison 05 | Stack vertical largeur contrainte | `nora-composition-comparison-stacked` | 2 alts | `data-variant=stacked` <560px | runtime-r05 |
| 6 étapes éditoriales | Parcours 06 | Numéros 01–06 gold, séparateurs | `nora-composition-steps-vertical` | `steps[6]` | Vertical n≥5 | runtime-r06 |
| Note / garde-fou | 02/03/05/06 | Orientation / editorialNote | `fig-nc-orientation` | closing/editorial | Présent | runtime-* |

## Verdicts structurels

| Réf | Verdict |
|---|---|
| Figma 01 | `FIGMA TO RUNTIME ALIGNED — VISUAL REVIEWED` |
| Figma 02 | `FIGMA TO RUNTIME ALIGNED — VISUAL REVIEWED` |
| Figma 03 | `FIGMA TO RUNTIME ALIGNED — VISUAL REVIEWED` |
| Figma 04 | `FIGMA TO RUNTIME ALIGNED — VISUAL REVIEWED` |
| Figma 05 | `FIGMA TO RUNTIME ALIGNED — VISUAL REVIEWED` |
| Figma 06 | `FIGMA TO RUNTIME ALIGNED — VISUAL REVIEWED` |

Réserves mineures (non structurelles) : densités/paddings non pixel-perfect ; timeline ne montre qu’une ligne complète dans certains crops ; tokens Studio (pas copie exacte Figma).

---

## 5. Audit ancien rendu 01–06 (avant correction)

| Réf | Défaut constaté Morris | Correction livrée |
|---|---|---|
| 01 | Sections génériques / paragraphes | EditorialSynthesis v3 (indicateurs, strategy cards, checklist, orientation) |
| 02 | Liste verticale seule | EditorialSequence horizontal + timeline fixture |
| 03 | Matrice 2 options présentée | Comparison cards ×3 (R03) |
| 04 | Table 2 options | Matrice éditoriale 5 lignes (R04) |
| 05 | Shell mobile seul | Stacked ×2 cards à 430px (R05) |
| 06 | Badges liste | Vertical éditorial 01–06 (R06) |

---

## 6. Architecture avant / après

**Avant :** compositions 01–06 via widgets génériques (liste, table 2 cols, Heading + items).
**Après :** primitives éditoriales `EditorialSynthesis`, `EditorialSequence`, option cards, matrice rows, tokens `fig-nc-*` ; admission variants affinées ; fixtures R* ; ELK path inchangé pour 07–09.

Invariants préservés : Strategy A, projection/admission, SubstanceComplement, C2 exact-identity, BlockErrorBoundary C2-08, M1–M5, D3–D9, HumanDecision, brouillon, visionneuse.

---

## 7. Variantes adaptatives

- Comparison : text / cards / stacked / matrix (critères ≥2 → matrix sauf 3 cards courtes ; n=2 narrow → stacked ; n=3 → cards ; n≥5 → matrix).
- Sequence : horizontal n≤4 & width≥580 ; vertical n≥5 ou long copy ou narrow.
- Timeline : uniquement si `timeline` fourni (fixture) — jamais inventé en réel.

---

## 8. Manifeste preuves

```json
{
  "deliveryId": "DELIV-2026-11-18-FIGMA-01-06-VISUAL-CONVERGENCE",
  "date": "2026-11-18",
  "macroLot": "R5/ML4D/Ensemble05",
  "figmaFileKey": "itgvCulInEnFY6DvgIegvP",
  "figmaSessionId": "ae55ec9d-3a45-4b99-93b6-140bce0a9895",
  "gitBranch": "sfia/next-ml4d-composition-adaptative",
  "gitHeadParent": "a783f014935de0dec5ff8e79a2b18eea0e629756",
  "originMain": "997d4c4e8204993de7107552898c8cc08cd3b0ed",
  "lane": "DEV",
  "fakeReal": "BROWSER_FAKE_VISUAL_REVIEW",
  "fixtures": [
    "E05_R01_SYNTHESIS",
    "E05_R02_JOURNEY",
    "E05_R03_THREE_CARDS",
    "E05_R04_FIVE_MATRIX",
    "E05_R05_STACKED",
    "E05_R06_SIX_STEPS"
  ],
  "viewports": {
    "r01_r02_r03_r04_r06": "1440x1100+",
    "r05": "430x1600"
  },
  "sha256File": "sha256sums.txt",
  "binaryRemise": "LOCAL_WORKTREE — handoff L3 Markdown only; PNGs under this folder for Morris/ChatGPT inspection"
}
```

### SHA-256

```
395bc5322b206c0194946cde141d57545444b118626bb4bd3e7d96cc63baa250  ./figma/figma-01-synthesis-742-36.png
13a77a1d8ff8bd0baa75967399893b99f66feed588bd4bbaafb49d47d372f1ab  ./figma/figma-02-parcours-743-2.png
01fb842db2f8317cbdde3e467a75bf92afc71866a96dc5ef3a250b71147e7a64  ./figma/figma-03-options-745-2.png
cb9cbf4196e0eac62d3ae5c7c4b05baab36f76b60d7dee0e53a9c17b6da7ed21  ./figma/figma-04-matrix-745-27.png
32930d0927e6535e016e1cf0fc8591c51af13332bb8ece251ecdf183dee74580  ./figma/figma-05-stacked-746-2.png
ff76ed1c670e933ec882bf8aaf5373896aec3cfe109d7e07c279e95d01ffe69c  ./figma/figma-06-steps-746-22.png
d74c0c39e4e851cb7ae94f452985a904cf203ed38f80ec4a12e30ecf526309f4  ./runtime/runtime-r01-synthesis-1440.png
d4be6271b4e1f2fce89b147dcdecda044263dbaa401c559f7cb2afc29edb43b2  ./runtime/runtime-r01-synthesis-travail-1440.png
632a0364181f047c3e054713564f858b4ffebb333200cfb7acde470ab777bc82  ./runtime/runtime-r02-journey-timeline-1440.png
d715df45194fe1410c9535e73d8550a5c13f54e68151451d793643bd4567719e  ./runtime/runtime-r02-journey-travail-1440.png
03b9f364ef2f5849e879174d9348336ac38913cd8852eec89c4b45b63f15cecb  ./runtime/runtime-r03-three-cards-1440.png
75ec0d1b41d8b92d20647e50783fd631fba467d6d61329a7437823791d931d05  ./runtime/runtime-r04-five-matrix-1440.png
fc15dcc289f75404e4dc51417fed4b8f04c7fa827c56e593648931fd41fd5ff5  ./runtime/runtime-r05-stacked-430.png
d08bd0b54b7b9d676923ee9fbb5ca66e32d4fc252c22b8e46f7821b1a6b20242  ./runtime/runtime-r05-stacked-travail-430.png
3756f67141b3743c5ee6c7c0d963c235cce5873d9c872d477b089e1476aeb03e  ./runtime/runtime-r06-six-steps-1440.png
0dfecab335def18b429551eac26b0bff1173ef23a589d18ffb91f6211e973d0f  ./runtime/runtime-r06-six-steps-travail-1440.png

```

# Comparaison Figma ↔ Runtime — Ensemble 05 / Figma 01–06

**Environnement :** DEV isolé Playwright `:3101` · `STUDIO_FORCE_NORA_FIXTURE=1` · BROWSER FAKE
**Dossier preuves :** `docs/evidence/ensemble-05-travail-nora/figma-01-06-convergence-20261118/`
**SHA-256 :** `sha256sums.txt`

## Paire de référence

| Réf | Fixture | Figma PNG | Runtime PNG | Structure contrôlée |
|---|---|---|---|---|
| 01 | `E05_R01_SYNTHESIS` | `figma/figma-01-synthesis-742-36.png` | `runtime/runtime-r01-synthesis-1440.png` (+ travail) | 3 indicateurs + 2 strategy cards + checklist + orientation |
| 02 | `E05_R02_JOURNEY` | `figma/figma-02-parcours-743-2.png` | `runtime/runtime-r02-journey-timeline-1440.png` | 4 cartes horizontales + timeline 8 sem. / 3 tracks |
| 03 | `E05_R03_THREE_CARDS` | `figma/figma-03-options-745-2.png` | `runtime/runtime-r03-three-cards-1440.png` | 3 cartes `data-variant=cards` |
| 04 | `E05_R04_FIVE_MATRIX` | `figma/figma-04-matrix-745-27.png` | `runtime/runtime-r04-five-matrix-1440.png` | table 5 lignes options × critères |
| 05 | `E05_R05_STACKED` | `figma/figma-05-stacked-746-2.png` | `runtime/runtime-r05-stacked-430.png` | 2 cartes empilées `stacked` |
| 06 | `E05_R06_SIX_STEPS` | `figma/figma-06-steps-746-22.png` | `runtime/runtime-r06-six-steps-1440.png` | 6 étapes `01`–`06` éditoriales |

## Grille d’évaluation (synthèse)

| Critère | 01 | 02 | 03 | 04 | 05 | 06 |
|---|---|---|---|---|---|---|
| Structure | OK | OK | OK | OK | OK | OK |
| Géométrie | OK | OK | OK | OK | OK | OK |
| Typographie | OK* | OK* | OK* | OK* | OK* | OK* |
| Densité | OK* | OK* | OK* | OK* | OK* | OK* |
| Surfaces | OK | OK | OK | OK | OK | OK |
| Variantes | — | horiz/vert | cards | matrix | stacked | vertical |
| Sémantique | fixture qualifiée | fixture | fixture | fixture | fixture | fixture |
| Intégration Travail | oui | oui | oui | oui | oui | oui |

\*Hiérarchie et rythme proches Figma ; pas de pixel-perfect revendiqué.

## Écarts résiduels (mineurs)

1. Shell Figma 01/02 = frame Travail 1680 ; runtime composition crops le panneau conversation.
2. Typographie exacte Figma (font family / tracking) → tokens Studio.
3. Connexions horizontales Figma 02 plus ornées ; runtime = lien + médaillons.
4. Matrice Figma 04 colonnes Effort/Risque/Délai vs fixture Charge/Vigilance/Lecture Nora (même géométrie 5×N).

## Non-régression

- T02 visual composition (incl. G07–G09 elkjs) : **PASS**
- R01–R06 e2e : **PASS** (assert structurelles + captures)
- C2-08 : **PASS**
- Vitest composition ciblés : **63 PASS** (admission/fidelity/ensemble05/directed/C2/strategy-a)


---

## 9. Tests et assertions

| Suite | Résultat |
|---|---|
| Vitest admission/fidelity/ensemble05/directed/C2/strategy-a | **63 PASS** |
| Playwright `R01–R06 Figma 01–06` | **PASS** |
| Playwright `T02 visual composition` (G07–G09 elkjs) | **PASS** |
| Playwright `C2-08` | **PASS** |
| TypeScript/ESLint/build exhaustifs | Non rejoués en totalité ce cycle (WT dirty large) — erreurs préexistantes vs nouvelles à qualifier si CI locale |

Assertions R01–R06 : counts indicateurs/cartes/steps/matrix rows/variants ; captures PNG.

---

## 10. Fake / Real / PG

- **BROWSER FAKE + VISUAL REVIEW** : PROVEN
- LIVE fournisseur : NOT RUN
- PG historique : NOT RUN (non requis)

---

## 11. Matrice C-01–C-22 (proposition, IDs V0.7)

Pas de réouverture des défauts C2 historiques déjà PASS. Proposition : conserver C-visual 01–06 comme critères de fidélité structurelle couverts par R01–R06 ; C-graph 07–09 ELK inchangés.

---

## 12. W1–W5

| W | Statut |
|---|---|
| W1 contrat sombre | Tokens fig-nc-* alignés Studio dark |
| W2 compositions | 01–06 reconstruits |
| W3 graphes | ELK conservé |
| W4 preuves | Captures + SHA locaux |
| W5 réception | En attente ChatGPT/Morris visual review |

---

## 13. Risques / dettes / exit

- Handoff L3 sans binaires → Morris doit lire PNG locaux.
- Pixel-perfect non revendiqué.
- Colonnes matrice fixture ≠ libellés exacts Figma (géométrie OK).
- Exit : visual review ChatGPT ; aucun Gate C / ADOPTED / LIVE auto.

---

## 14. Gates Morris

Aucun Gate C. Aucune promotion. Verdict Cursor uniquement.

---

## 15. Fichiers créés (contenu exploitable)

### `EditorialSynthesis.tsx` (nouveau module production)

```tsx
"use client";

/**
 * Figma 01 — editorial synthesis composition (dark Studio).
 * Structure: headline + accent, lead, indicators, numbered sections,
 * strategy cards, checklist, conditional orientation.
 */

import React from "react";
import { SafeMarkdown } from "@/components/SafeMarkdown";
import { NoraSemanticIcon } from "@/components/figma/NoraSemanticIcon";
import type { SynthesisBlock } from "@/domains/conversation/visual-composition";

void React;

export function EditorialSynthesis({ block }: { block: SynthesisBlock }) {
  const residual = block.items.filter((it) => {
    // When strategy/checklist presentation fields exist, keep residual tones only.
    if (block.strategyCards?.length && it.tone === "priority") return false;
    if (block.checklist?.length && (it.tone === "watch" || it.tone === "finding")) return false;
    return true;
  });

  return (
    <div
      className="fig-nc-editorial fig-comp-synth-flow"
      data-testid="nora-composition-editorial-synthesis"
      data-renderer="editorial-v3"
      data-fixture-demo={block.fixtureDemo ? "1" : "0"}
    >
      {block.fixtureDemo ? (
        <p className="fig-nc-fixture-badge" data-testid="nora-composition-fixture-badge">
          EXEMPLE · DONNÉES FICTIVES
        </p>
      ) : null}

      <header className="fig-nc-editorial-hero">
        <h3 className="fig-nc-editorial-headline" data-testid="nora-composition-editorial-headline">
          <span className="fig-nc-editorial-headline-primary">{block.title}</span>
          {block.headlineAccent ? (
            <span className="fig-nc-editorial-headline-accent">{block.headlineAccent}</span>
          ) : null}
        </h3>
        {block.lead ? (
          <p className="fig-nc-editorial-lead" data-testid="nora-composition-editorial-lead">
            {block.lead}
          </p>
        ) : null}
      </header>

      {block.indicators?.length ? (
        <div
          className="fig-nc-indicators"
          data-testid="nora-composition-indicators"
          data-count={block.indicators.length}
        >
          {block.indicators.map((ind, i) => (
            <React.Fragment key={ind.id}>
              {i > 0 ? <div className="fig-nc-indicators-divider" aria-hidden /> : null}
              <div className="fig-nc-indicator" data-indicator-id={ind.id}>
                <p className="fig-nc-indicator-value">{ind.value}</p>
                <p className="fig-nc-indicator-label">{ind.label}</p>
              </div>
            </React.Fragment>
          ))}
        </div>
      ) : null}

      {block.strategyCards?.length ? (
        <section
          className="fig-nc-editorial-section"
          data-testid="nora-composition-strategies"
          aria-label={block.strategiesSectionTitle ?? "Stratégies"}
        >
          <div className="fig-nc-section-head">
            <span className="fig-nc-section-num" aria-hidden>
              01
            </span>
            <div>
              <h4 className="fig-nc-section-title">
                {block.strategiesSectionTitle ?? "Deux stratégies, deux répartitions du risque"}
              </h4>
            </div>
          </div>
          <div
            className="fig-nc-strategy-grid"
            data-count={block.strategyCards.length}
          >
            {block.strategyCards.map((card) => (
              <article
                key={card.id}
                className={`fig-nc-strategy-card fig-nc-strategy-${card.accent ?? "blue"}`}
                data-testid="nora-composition-strategy-card"
                data-accent={card.accent ?? "blue"}
              >
                <div className="fig-nc-strategy-accent" aria-hidden />
                <div className="fig-nc-strategy-top">
                  <p className="fig-nc-strategy-eyebrow">{card.eyebrow}</p>
                  <span className="fig-nc-strategy-mono" aria-hidden>
                    {(card.eyebrow.match(/[A-Z]$/)?.[0] ?? card.eyebrow.slice(-1)).toUpperCase()}
                  </span>
                </div>
                <h5 className="fig-nc-strategy-title">{card.title}</h5>
                <p className="fig-nc-strategy-summary">{card.summary}</p>
                {card.positive || card.counterpart ? (
                  <div className="fig-nc-strategy-footer">
                    {card.positive ? (
                      <p className="fig-nc-strategy-positive">{card.positive}</p>
                    ) : null}
                    {card.counterpart ? (
                      <p className="fig-nc-strategy-counterpart">{card.counterpart}</p>
                    ) : null}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {block.checklist?.length ? (
        <section
          className="fig-nc-editorial-section"
          data-testid="nora-composition-checklist"
          aria-label={block.checklistSectionTitle ?? "Points à vérifier"}
        >
          <div className="fig-nc-section-head">
            <span className="fig-nc-section-num" aria-hidden>
              02
            </span>
            <h4 className="fig-nc-section-title">
              {block.checklistSectionTitle ?? "Ce qui doit être vérifié avant tout choix"}
            </h4>
          </div>
          <ul className="fig-nc-checklist">
            {block.checklist.map((row) => (
              <li key={row.id} className="fig-nc-checklist-row" data-checklist-id={row.id}>
                <span className="fig-nc-checklist-dot" aria-hidden />
                <strong className="fig-nc-checklist-label">{row.label}</strong>
                <span className="fig-nc-checklist-detail">{row.detail}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {residual.length ? (
        <ul className="fig-visual-synthesis-list fig-nc-residual-items">
          {residual.map((it) => {
            const role =
              it.role ??
              (it.tone === "risk"
                ? "risk"
                : it.tone === "hypothesis"
                  ? "hypothesis"
                  : it.tone === "observation"
                    ? "observation"
                    : it.tone === "priority"
                      ? "recommendation"
                      : "information");
            return (
              <li
                key={it.id}
                data-tone={it.tone}
                className={`fig-visual-synth-item fig-visual-tone-${it.tone ?? "information"} fig-comp-synth-row`}
              >
                <NoraSemanticIcon role={role} icon={it.icon} />
                <div className="fig-comp-synth-copy">
                  <strong className="fig-comp-synth-label">{it.label}</strong>
                  {it.detail ? (
                    <SafeMarkdown
                      content={it.detail}
                      className="fig-visual-inline-md fig-comp-synth-detail"
                    />
                  ) : null}
                </div>
              </li>
            );
          })}
        </ul>
      ) : null}

      {block.orientation ? (
        <aside
          className="fig-nc-orientation"
          data-testid="nora-composition-orientation"
        >
          <p className="fig-nc-orientation-label">Orientation conditionnelle</p>
          <p className="fig-nc-orientation-body">{block.orientation}</p>
        </aside>
      ) : null}
    </div>
  );
}

```

### `EditorialSequence.tsx`

```tsx
"use client";

/**
 * Figma 02 / 06 — editorial sequence: horizontal numbered cards + optional
 * fixture timeline, or vertical editorial steps 01–06.
 */

import React from "react";
import { SafeMarkdown } from "@/components/SafeMarkdown";
import type { SequenceBlock } from "@/domains/conversation/visual-composition";
import type { SequenceVariant } from "@/domains/conversation/conversational-composition";

void React;

export function EditorialSequence({
  block,
  variant,
}: {
  block: SequenceBlock;
  variant: SequenceVariant;
}) {
  const horizontal = variant === "horizontal";
  const showTimeline = Boolean(block.timeline && block.fixtureDemo);

  return (
    <div
      className={`fig-nc-sequence fig-nc-sequence-${variant}`}
      data-testid="nora-composition-editorial-sequence"
      data-variant={variant}
      data-fixture-demo={block.fixtureDemo ? "1" : "0"}
      data-timeline={showTimeline ? "1" : "0"}
      data-step-count={block.steps.length}
    >
      {block.fixtureDemo ? (
        <p className="fig-nc-fixture-badge">EXEMPLE · SÉQUENCE FICTIVE</p>
      ) : null}

      <header className="fig-nc-editorial-hero">
        <h3 className="fig-nc-editorial-headline">
          <span className="fig-nc-editorial-headline-primary">{block.title}</span>
          {block.headlineAccent ? (
            <span className="fig-nc-editorial-headline-accent">{block.headlineAccent}</span>
          ) : null}
        </h3>
        {block.lead ? <p className="fig-nc-editorial-lead">{block.lead}</p> : null}
      </header>

      {horizontal ? (
        <section className="fig-nc-editorial-section" data-testid="nora-composition-steps-horizontal">
          <div className="fig-nc-section-head">
            <span className="fig-nc-section-num" aria-hidden>
              01
            </span>
            <h4 className="fig-nc-section-title">
              {block.steps.length === 4
                ? "Quatre étapes à maîtriser"
                : `${block.steps.length} étapes à maîtriser`}
            </h4>
          </div>
          <ol className="fig-nc-h-steps">
            {block.steps.map((step, idx) => (
              <li key={step.id} className="fig-nc-h-step" data-step-id={step.id}>
                {idx > 0 ? <div className="fig-nc-h-step-link" aria-hidden /> : null}
                <article className="fig-nc-h-step-card">
                  <div className="fig-nc-h-step-medallion" aria-hidden>
                    {idx + 1}
                  </div>
                  <h5>{step.title}</h5>
                  {step.detail ? (
                    <SafeMarkdown content={step.detail} className="fig-visual-inline-md" />
                  ) : null}
                </article>
              </li>
            ))}
          </ol>
        </section>
      ) : (
        <section
          className="fig-nc-editorial-section fig-nc-v-steps-section"
          data-testid="nora-composition-steps-vertical"
        >
          <div className="fig-nc-section-head">
            <span className="fig-nc-section-num" aria-hidden>
              01
            </span>
            <h4 className="fig-nc-section-title">
              {block.steps.length === 6
                ? "Parcours en six temps"
                : `Parcours en ${block.steps.length} temps`}
            </h4>
          </div>
          <ol className="fig-nc-v-steps">
            {block.steps.map((step, idx) => (
              <li key={step.id} className="fig-nc-v-step" data-step-id={step.id}>
                <span className="fig-nc-v-step-num" aria-hidden>
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div className="fig-nc-v-step-body">
                  <h5>{step.title}</h5>
                  {step.detail ? (
                    <SafeMarkdown content={step.detail} className="fig-visual-inline-md" />
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </section>
      )}

      {showTimeline && block.timeline ? (
        <section
          className="fig-nc-editorial-section"
          data-testid="nora-composition-timeline"
          aria-label="Chronologie fictive"
        >
          <div className="fig-nc-section-head">
            <span className="fig-nc-section-num" aria-hidden>
              02
            </span>
            <h4 className="fig-nc-section-title">
              Une lecture possible des {block.timeline.weeks} semaines
            </h4>
          </div>
          {block.timeline.caption ? (
            <p className="fig-nc-timeline-caption">{block.timeline.caption}</p>
          ) : null}
          <div className="fig-nc-timeline" style={{ ["--tl-weeks" as string]: block.timeline.weeks }}>
            <div className="fig-nc-timeline-head" aria-hidden>
              <span className="fig-nc-timeline-label-col" />
              {Array.from({ length: block.timeline.weeks }, (_, i) => (
                <span key={i} className="fig-nc-timeline-week">
                  S{i + 1}
                </span>
              ))}
            </div>
            {block.timeline.tracks.map((track) => {
              const span = track.endWeek - track.startWeek + 1;
              return (
                <div key={track.id} className="fig-nc-timeline-row" data-track-id={track.id}>
                  <span className="fig-nc-timeline-label-col">{track.label}</span>
                  <div className="fig-nc-timeline-track">
                    <div
                      className={`fig-nc-timeline-bar fig-nc-timeline-${track.tone ?? "blue"}`}
                      style={{
                        gridColumn: `${track.startWeek} / span ${span}`,
                      }}
                    >
                      {track.barLabel ?? track.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="fig-nc-timeline-footnote">
            Lecture indicative (FIXTURE / DEMONSTRATION) — aucune date projet n&apos;est affirmée.
          </p>
        </section>
      ) : null}

      {block.closingNote ? (
        <aside className="fig-nc-orientation" data-testid="nora-composition-sequence-closing">
          <p className="fig-nc-orientation-label">Garde-fou</p>
          <p className="fig-nc-orientation-body">{block.closingNote}</p>
        </aside>
      ) : null}
    </div>
  );
}

```

### Admission variants (extrait)

```ts
export function selectComparisonVariant(
  block: Extract<VisualBlock, { kind: "comparison" }>,
  widthPx: number | null,
): { variant: ComparisonVariant; reasonCodes: string[] } {
  const n = block.alternatives.length;
  const density = maxOptionTextLen(block);
  const criteria = block.criteria?.length ?? 0;
  const reasons: string[] = [];

  if (n < 2) {
    reasons.push("CV_COMPARISON_UNDER_CARDINALITY");
    return { variant: "text", reasonCodes: reasons };
  }
  if (n > 18) {
    reasons.push("CV_COMPARISON_OVER_CAPACITY");
    return { variant: "text", reasonCodes: reasons };
  }

  const narrow = widthPx != null && widthPx < 560;
  const medium = widthPx != null && widthPx < 900;

  // Figma 05 — two options in a constrained Travail column → stacked cards.
  if (n === 2 && narrow) {
    reasons.push("CV_COMPARISON_TWO_STACKED");
    return { variant: "stacked", reasonCodes: reasons };
  }
  // Criteria present → editorial matrix so criterion cells remain visible (C2).
  // Exception: three short options without needing a dense grid stay cards (Figma 03).
  if (criteria >= 2 && !(n === 3 && density <= 220)) {
    reasons.push("CV_COMPARISON_MATRIX_CRITERIA");
    return { variant: narrow ? "stacked" : "matrix", reasonCodes: reasons };
  }
  // Figma 04 — five+ options (or dense criteria) → editorial matrix (options as rows).
  if (n >= 5 || (criteria >= 3 && n >= 4) || (n >= 4 && density > 220 && criteria >= 2)) {
    reasons.push("CV_COMPARISON_MATRIX_DENSITY");
    return { variant: narrow ? "stacked" : "matrix", reasonCodes: reasons };
  }
  // Figma 03 — three comparable options → cards (even with long copy).
  if (n === 3 && !narrow) {
    reasons.push("CV_COMPARISON_THREE_CARDS");
    return { variant: "cards", reasonCodes: reasons };
  }
  if (narrow || (n >= 3 && density > 280)) {
    reasons.push(narrow ? "CV_COMPARISON_NARROW_STACK" : "CV_COMPARISON_LONG_COPY_STACK");
    return { variant: "stacked", reasonCodes: reasons };
  }
  if (medium && n >= 3) {
    reasons.push("CV_COMPARISON_MEDIUM_CARDS");
    return { variant: "cards", reasonCodes: reasons };
  }
  reasons.push("CV_COMPARISON_CARDS");
  return { variant: "cards", reasonCodes: reasons };
}

export function selectSequenceVariant(
  block: Extract<VisualBlock, { kind: "sequence" }>,
  widthPx: number | null,
): { variant: SequenceVariant; reasonCodes: string[] } {
  const n = block.steps.length;
  const long = block.steps.some((s) => labelLen(s.title) + labelLen(s.detail) > 160);
  const reasons: string[] = [];
  if (n === 0) {
    reasons.push("CV_SEQUENCE_EMPTY");
    return { variant: "text", reasonCodes: reasons };
  }
  if (n > 12) {
    reasons.push("CV_SEQUENCE_OVER_CAPACITY");
    return { variant: "text", reasonCodes: reasons };
  }
  // Figma 02 — four editorial steps stay horizontal in a typical Travail column (~600–900px).
  // Vertical only when the column is truly constrained, density is high, or copy is long.
  const narrow = widthPx != null && widthPx < 580;
  if (n >= 5 || long) {
    reasons.push("CV_SEQUENCE_VERTICAL_DENSITY");
    return { variant: "vertical", reasonCodes: reasons };
  }
  if (narrow) {
    reasons.push("CV_SEQUENCE_NARROW_VERTICAL");
    return { variant: "vertical", reasonCodes: reasons };
  }
  reasons.push("CV_SEQUENCE_HORIZONTAL");
  return { variant: "horizontal", reasonCodes: reasons };
}

/**

```

### Comparison / Sequence views (extrait NoraComposition)

```tsx
function AlternativeDetails({
  alt,
  index,
}: {
  alt: ComparisonBlock["alternatives"][number];
  index?: number;
}) {
  const eyebrow =
    index != null ? `OPTION ${String.fromCharCode(65 + index)}` : "OPTION";
  const vigilance = alt.cons?.[0];
  return (
    <article
      className="fig-visual-alt fig-comp-alt fig-nc-option-card"
      data-alt-id={alt.id}
      data-testid="nora-composition-alt-detail"
    >
      <p className="fig-nc-option-eyebrow">{eyebrow}</p>
      <h4 className="fig-nc-option-title">{alt.title}</h4>
      <p className="fig-nc-option-summary">{alt.summary}</p>
      {alt.pros?.length ? (
        <ul className="fig-visual-pros">
          {alt.pros.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      ) : null}
      {vigilance ? (
        <p className="fig-nc-option-vigilance">{vigilance}</p>
      ) : alt.cons?.length ? (
        <ul className="fig-visual-cons">
          {alt.cons.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

function ComparisonView({
  block,
  variant,
  canonicalReferences,
  onReference,
}: {
  block: ComparisonBlock;
  variant: ComparisonVariant;
  canonicalReferences?: TurnReference[];
  onReference?: (ref: TurnReference) => void;
}) {
  const hasCriteria = Boolean(block.criteria?.length);
  // CV-T04 / Defect A: matrix never hides summary/pros/cons — show complementary details.
  const showMatrix = variant === "matrix" && hasCriteria;
  const showCards =
    variant === "cards" ||
    variant === "stacked" ||
    (variant === "matrix" && !hasCriteria);
  // Figma 04 — matrix cells already carry Nature + criteria; avoid a second card dump
  // unless alternatives expose pros/cons beyond the matrix row.
  const showMatrixDetails =
    showMatrix &&
    !block.fixtureDemo &&
    block.alternatives.some(
      (a) => (a.pros?.length ?? 0) > 0 || (a.cons?.length ?? 0) > 0,
    );
  const forceText = variant === "text";

  return (
    <section
      className={`fig-visual-block fig-visual-comparison fig-comp-block fig-comp-comparison fig-comp-variant-${variant}`}
      data-testid="nora-visual-comparison"
      data-comp-testid="nora-composition-comparison"
      data-block-kind="comparison"
      data-block-id={block.id}
      data-variant={variant}
      data-substance-complete="1"
      aria-label={block.title}
    >
      {block.lead || block.fixtureDemo ? (
        <header className="fig-nc-editorial-hero">
          {block.fixtureDemo ? (
            <p className="fig-nc-fixture-badge">EXEMPLE · DONNÉES FICTIVES</p>
          ) : null}
          <h3 className="fig-nc-editorial-headline">
            <span className="fig-nc-editorial-headline-primary">{block.title}</span>
          </h3>
          {block.lead ? <p className="fig-nc-editorial-lead">{block.lead}</p> : null}
        </header>
      ) : (
        <Heading title={block.title} role={block.role} icon={block.icon} />
      )}
      {forceText ? (
        <div className="fig-comp-fallback-text" data-testid="nora-composition-comparison-text">
          {buildExhaustiveBlockFallback(block)}
        </div>
      ) : null}
      {!forceText && showCards ? (
        <div
          className={
            variant === "stacked"
              ? "fig-visual-comparison-grid fig-comp-comparison-stack"
              : "fig-visual-comparison-grid fig-comp-comparison-cards"
          }
          data-testid={
            variant === "stacked"
              ? "nora-composition-comparison-stacked"
              : "nora-composition-comparison-cards"
          }
          data-option-count={block.alternatives.length}
        >
          {block.alternatives.map((alt, i) => (
            <AlternativeDetails key={alt.id} alt={alt} index={i} />
          ))}
        </div>
      ) : null}
      {!forceText && showMatrix ? (
        <>
          <div className="fig-visual-matrix-wrap fig-comp-matrix-wrap fig-nc-matrix-editorial">
            {/* Figma 04 — options as rows, criteria as columns */}
            <table
              className="fig-visual-matrix fig-comp-matrix fig-nc-matrix-rows"
              data-testid="nora-composition-matrix-five"
              data-option-count={block.alternatives.length}
            >
              <caption>Matrice de comparaison</caption>
              <thead>
                <tr>
                  <th scope="col">Option</th>
                  <th scope="col">Nature</th>
                  {block.criteria!.map((c) => (
                    <th key={c.id} scope="col">
                      {c.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.alternatives.map((a, i) => (
                  <tr key={a.id}>
                    <th scope="row">
                      <span className="fig-nc-matrix-opt-label">
                        {String.fromCharCode(65 + i)}. {a.title}
                      </span>
                    </th>
                    <td>{a.summary}</td>
                    {block.criteria!.map((c) => (
                      <td key={c.id}>{c.values[a.id] ?? "—"}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {showMatrixDetails ? (
            <div
              className="fig-comp-comparison-stack fig-comp-matrix-details"
              data-testid="nora-composition-matrix-details"
            >
              <h4 className="fig-comp-matrix-details-title">Détail des options</h4>
              {block.alternatives.map((alt, i) => (
                <AlternativeDetails key={`detail-${alt.id}`} alt={alt} index={i} />
              ))}
            </div>
          ) : null}
        </>
      ) : null}
      {block.recommendation ? (
        <div className="fig-visual-recommendation" data-testid="nora-visual-recommendation">
          <NoraSemanticIcon role="recommendation" />
          <div className="fig-visual-recommendation-body">
            <span className="fig-visual-recommendation-label">Recommandation (avis Nora)</span>
            <SafeMarkdown content={block.recommendation} className="fig-visual-inline-md" />
          </div>
        </div>
      ) : null}
      {block.editorialNote ? (
        <aside className="fig-nc-orientation" data-testid="nora-composition-editorial-note">
          <p className="fig-nc-orientation-label">Choix éditorial</p>
          <p className="fig-nc-orientation-body">{block.editorialNote}</p>
        </aside>
      ) : null}
      {!forceText ? <SubstanceComplement block={block} /> : null}
      <Provenance
        items={block.provenance}
        canonicalReferences={canonicalReferences}
        onReference={onReference}
      />

```

### Tokens CSS Figma 01–06 (extrait)

```css
/* ─── Figma 01–06 editorial convergence (2026-11-18) ─── */
.fig-nc-fixture-badge {
  margin: 0 0 12px;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #e8bc86;
}
.fig-nc-editorial-hero { margin-bottom: 18px; }
.fig-nc-editorial-headline {
  margin: 0 0 12px;
  font-size: clamp(26px, 3.2vw, 36px);
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: -0.02em;
}
.fig-nc-editorial-headline-primary {
  display: block;
  color: var(--fig-text, #f4f6fb);
}
.fig-nc-editorial-headline-accent {
  display: block;
  color: #e8bc86;
}
.fig-nc-editorial-lead {
  margin: 0;
  max-width: 52rem;
  font-size: 15px;
  line-height: 1.45;
  color: var(--fig-muted, #a8b2c5);
}
.fig-nc-indicators {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  gap: 0;
  margin: 18px 0 28px;
  padding: 16px 0;
  border-top: 1px solid #29344a;
  border-bottom: 1px solid #29344a;
}
.fig-nc-indicators-divider {
  width: 1px;
  margin: 4px 28px;
  background: #1d293b;
  align-self: stretch;
}
.fig-nc-indicator-value {
  margin: 0 0 6px;
  font-size: 27px;
  font-weight: 600;
  color: #f4f6fb;
  line-height: 1.1;
}
.fig-nc-indicator-label {
  margin: 0;
  font-size: 12px;
  color: #a8b2c5;
}
.fig-nc-editorial-section { margin: 28px 0; }
.fig-nc-section-head {
  display: flex;
  gap: 14px;
  align-items: baseline;
  margin-bottom: 14px;
}
.fig-nc-section-num {
  font-size: 14px;
  font-weight: 600;
  color: #e8bc86;
  min-width: 1.6rem;
}
.fig-nc-section-title {
  margin: 0;
  font-size: 22px;
  font-weight: 600;
  color: #f4f6fb;
  line-height: 1.25;
}
.fig-nc-strategy-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}
@media (max-width: 720px) {
  .fig-nc-strategy-grid { grid-template-columns: 1fr; }
  .fig-nc-indicators-divider { display: none; }
  .fig-nc-indicators { gap: 16px; }
  .fig-nc-indicator { flex: 1 1 40%; }
}
.fig-nc-strategy-card {
  position: relative;
  border-radius: 15px;
  border: 1px solid #36445d;
  background: #172237;
  padding: 20px 22px 18px;
  overflow: hidden;
  min-height: 200px;
}
.fig-nc-strategy-gold { border-color: #4b456b; background: #201e32; }
.fig-nc-strategy-accent {
  position: absolute;
  left: 0; top: 0; right: 0;
  height: 4px;
  background: #71a9e6;
}
.fig-nc-strategy-gold .fig-nc-strategy-accent { background: #e8bc86; }
.fig-nc-strategy-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.fig-nc-strategy-eyebrow {
  margin: 0;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: #71a9e6;
}
.fig-nc-strategy-gold .fig-nc-strategy-eyebrow { color: #e8bc86; }
.fig-nc-strategy-mono {
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 999px;
  background: color-mix(in srgb, #71a9e6 18%, transparent);
  color: #71a9e6;
  font-weight: 600;
  font-size: 18px;
}
.fig-nc-strategy-gold .fig-nc-strategy-mono {
  background: color-mix(in srgb, #e8bc86 18%, transparent);
  color: #e8bc86;
}
.fig-nc-strategy-title {
  margin: 0 0 8px;
  font-size: 20px;
  font-weight: 600;
  color: #f4f6fb;
}
.fig-nc-strategy-summary {
  margin: 0 0 14px;
  font-size: 13px;
  line-height: 1.4;
  color: #a8b2c5;
}
.fig-nc-strategy-footer {
  padding-top: 12px;
  border-top: 1px solid #29344a;
}
.fig-nc-strategy-positive {
  margin: 0 0 4px;
  font-size: 13px;
  font-weight: 500;
  color: #f4f6fb;
}
.fig-nc-strategy-counterpart {
  margin: 0;
  font-size: 12px;
  color: #708299;
}
.fig-nc-checklist { list-style: none; margin: 0; padding: 0; }
.fig-nc-checklist-row {
  display: grid;
  grid-template-columns: 12px minmax(120px, 180px) 1fr;
  gap: 12px;
  align-items: start;
  padding: 12px 0;
}
.fig-nc-checklist-dot {
  width: 8px;
  height: 8px;
  margin-top: 6px;
  border-radius: 999px;
  background: #e8bc86;
}
.fig-nc-checklist-row:nth-child(2) .fig-nc-checklist-dot { background: #71a9e6; }
.fig-nc-checklist-row:nth-child(3) .fig-nc-checklist-dot { background: #8585ff; }
.fig-nc-checklist-label {
  font-size: 14px;
  font-weight: 600;
  color: #f4f6fb;
}
.fig-nc-checklist-detail {
  font-size: 13px;
  color: #a8b2c5;
  line-height: 1.4;
}
.fig-nc-orientation {
  margin-top: 22px;
  padding: 12px 0 4px 14px;
  border-left: 3px solid #e8bc86;
}
.fig-nc-orientation-label {
  margin: 0 0 6px;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #e8bc86;
}
.fig-nc-orientation-body {
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  color: #f4f6fb;
  line-height: 1.4;
}

/* Comparison option cards (Figma 03/05) */
.fig-nc-option-card {
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-height: 220px;
  padding: 22px 20px !important;
  border-radius: 14px !important;
  border: 1px solid #2a3650 !important;
  background: #172237 !important;
}
.fig-nc-option-eyebrow {
  margin: 0;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: #e8bc86;
}
.fig-nc-option-title {
  margin: 0 !important;
  font-size: 18px !important;
  font-weight: 600;
  color: #f4f6fb;
}
.fig-nc-option-summary {
  margin: 0;
  font-size: 13px;
  line-height: 1.35;
  color: #adb9cf;
  flex: 1;
}
.fig-nc-option-vigilance {
  margin: 0;
  font-size: 12px;
  font-weight: 500;
  color: #7e8ea5;
}
.fig-comp-comparison-cards {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}
.fig-comp-comparison-stack {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.fig-comp-comparison-stack .fig-nc-option-card {
  width: 100%;
  min-height: 0;
}
@media (max-width: 900px) {
  .fig-comp-comparison-cards { grid-template-columns: 1fr; }
}

/* Editorial matrix (Figma 04) — options as rows */
.fig-nc-matrix-editorial {
  border: none;
  border-radius: 0;
  background: transparent;
}
.fig-nc-matrix-rows {
  border-collapse: collapse;
  width: 100%;
}
.fig-nc-matrix-rows thead th {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #7e8ea5;
  background: transparent;
  border-bottom: 1px solid #2b364a;
}
.fig-nc-matrix-rows tbody th,
.fig-nc-matrix-rows tbody td {
  padding: 16px 12px;
  border-bottom: 1px solid #2b364a;
  font-size: 13px;
  color: #adb9cf;
  vertical-align: top;
}
.fig-nc-matrix-rows tbody th {
  color: #f4f6fb;
  font-weight: 600;
  white-space: nowrap;
}
.fig-nc-matrix-opt-label { display: inline-block; }

/* Sequence horizontal (Figma 02) — four cards share the Travail column */
.fig-nc-h-steps {
  list-style: none;
  margin: 0;
  padding: 8px 0 0;
  display: flex;
  gap: 0;
  align-items: stretch;
  width: 100%;
}
.fig-nc-h-step {
  position: relative;
  display: flex;
  align-items: stretch;
  flex: 1 1 0;
  min-width: 0;
}
.fig-nc-h-step-link {
  width: 12px;
  height: 2px;
  margin: auto 0;
  background: #29344a;
  flex: 0 0 12px;
}
.fig-nc-h-step-card {
  position: relative;
  flex: 1 1 auto;
  width: auto;
  min-width: 0;
  min-height: 185px;
  padding: 28px 12px 14px;
  border-radius: 15px;
  border: 1px solid #29344a;
  background: #161f31;
}
.fig-nc-h-step-card::before {
  content: "";
  position: absolute;
  left: -1px; top: -1px; right: -1px;
  height: 3px;
  border-radius: 15px 15px 0 0;
  background: #e8bc86;
}
.fig-nc-h-step-medallion {
  position: absolute;
  top: -16px;
  right: 14px;
  width: 48px;
  height: 48px;
  border-radius: 999px;
  display: grid;
  place-items: center;
  background: #e8bc86;
  color: #16151b;
  font-size: 24px;
  font-weight: 700;
}
.fig-nc-h-step-card h5 {
  margin: 18px 0 8px;
  font-size: 17px;
  font-weight: 600;
  color: #f4f6fb;
}
.fig-nc-h-step-card p,
.fig-nc-h-step-card .fig-visual-inline-md {
  font-size: 12px;
  line-height: 1.35;
  color: #a8b2c5;
}

/* Timeline fixture (Figma 02) */
.fig-nc-timeline-caption {
  margin: 0 0 12px;
  font-size: 13px;
  color: #a8b2c5;
}
.fig-nc-timeline {
  border: 1px solid #29344a;
  border-radius: 14px;
  background: #111b2b;
  padding: 14px 16px 10px;
  overflow-x: auto;
}
.fig-nc-timeline-head,
.fig-nc-timeline-row {
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 10px;
  align-items: center;
  margin-bottom: 10px;
}
.fig-nc-timeline-head {
  margin-bottom: 8px;
}
.fig-nc-timeline-label-col {
  font-size: 13px;
  color: #a8b2c5;
}
.fig-nc-timeline-head .fig-nc-timeline-week,
.fig-nc-timeline-track {
  display: grid;
  grid-template-columns: repeat(var(--tl-weeks, 8), minmax(48px, 1fr));
  gap: 0;
}
.fig-nc-timeline-week {
  font-size: 11px;
  font-weight: 600;
  color: #708299;
  text-align: center;
}
.fig-nc-timeline-track {
  position: relative;
  min-height: 30px;
  background: #1a2737;
  border-radius: 7px;
}
.fig-nc-timeline-bar {
  grid-row: 1;
  margin: 0;
  height: 30px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  font-size: 11px;
  font-weight: 600;
  border-left: 3px solid currentColor;
  background: color-mix(in srgb, currentColor 15%, transparent);
  white-space: nowrap;
  overflow: hidden;
}
.fig-nc-timeline-blue { color: #71a9e6; }
.fig-nc-timeline-violet { color: #8585ff; }
.fig-nc-timeline-gold { color: #e8bc86; }
.fig-nc-timeline-teal { color: #63cdb4; }
.fig-nc-timeline-footnote {
  margin: 10px 0 0;
  font-size: 11px;
  color: #708299;
}

/* Vertical editorial steps (Figma 06) */
.fig-nc-v-steps {
  list-style: none;
  margin: 8px 0 0;
  padding: 0;
}
.fig-nc-v-step {
  display: grid;
  grid-template-columns: 64px 1fr;
  gap: 18px;
  padding: 22px 0;
  border-bottom: 1px solid #2b364a;
}
.fig-nc-v-step:last-child { border-bottom: none; }
.fig-nc-v-step-num {
  font-size: 28px;
  font-weight: 600;
  color: #e8bc86;
  line-height: 1.1;
}
.fig-nc-v-step-body h5 {
  margin: 0 0 8px;
  font-size: 20px;
  font-weight: 600;
  color: #f4f6fb;
}
.fig-nc-v-step-body .fig-visual-inline-md,
.fig-nc-v-step-body p {
  margin: 0;
  font-size: 14px;

```

### Fixtures R01–R06 (extrait fixture-semantic-qualify.ts)

```ts
const E05_R01_SYNTHESIS = "E05_R01_SYNTHESIS";
register(
  E05_R01_SYNTHESIS,
  dialogue(
    "Synthèse stratégique Figma 01 (fixture)",
    "FIXTURE / DEMONSTRATION — synthèse éditoriale pour qualification visuelle Figma 01.",
    ["NO_EFFECT", "FIGMA_R01", "FIXTURE_DEMO"],
    {
      visualComposition: {
        schemaVersion: "conversational-composition-canonical-v1",
        blocks: [
          {
            kind: "synthesis",
            id: "r01-synth",
            title: "6 sites. Un même service.",
            headlineAccent: "Deux rythmes de déploiement.",
            lead:
              "Avant de décider, il faut distinguer le rythme de mise en œuvre des risques que chaque stratégie reporte sur les équipes. Voici les deux chemins que l'on peut comparer.",
            fixtureDemo: true,
            indicators: [
              { id: "i1", value: "600", label: "collaborateurs concernés" },
              { id: "i2", value: "6", label: "sites à équiper" },
              { id: "i3", value: "8 sem.", label: "fenêtre visée, à confirmer" },
            ],
            strategiesSectionTitle: "Deux stratégies, deux répartitions du risque",
            strategyCards: [
              {
                id: "b",
                eyebrow: "STRATÉGIE B",
                title: "Déployer site par site",
                summary: "Une vague courte, un retour terrain, puis la suivante.",
                positive: "Maîtrise progressive de la charge support",
                counterpart: "Contrepartie : coexistence des situations",
                accent: "blue",
              },
              {
                id: "c",
                eyebrow: "STRATÉGIE C",
                title: "Tester puis généraliser",
                summary: "Un site pilote avant une bascule plus concentrée.",
                positive: "Apprentissage initial avant déploiement",
                counterpart: "Contrepartie : pic support sur cinq sites",
                accent: "gold",
              },
            ],
            checklistSectionTitle: "Ce qui doit être vérifié avant tout choix",
            checklist: [
              {
                id: "k1",
                label: "Capacité support",
                detail: "Absorber les sollicitations pendant chaque vague.",
              },
              {
                id: "k2",
                label: "Retour arrière",
                detail: "Disposer d'une marche de reprise éprouvée.",
              },
              {
                id: "k3",
                label: "Dépendances",
                detail: "Qualifier les points communs entre les sites.",
              },
            ],
            orientation:
              "Privilégier le rythme progressif si la fenêtre de huit semaines le permet.",
            items: [
              {
                id: "obs1",
                label: "Contexte de démonstration",
                detail: "Données fictives pour reproduction Figma 01 — non projet.",
                tone: "observation",
              },
            ],
            textAlternative:
              "Synthèse fictive : deux stratégies B/C, trois indicateurs, checklist support/retour/dépendances, orientation conditionnelle.",
          },
        ],
      },
    },
  ),
);

/** R02 — Figma 02 horizontal journey + fixture timeline. */
const E05_R02_JOURNEY = "E05_R02_JOURNEY";
register(
  E05_R02_JOURNEY,
  dialogue(
    "Parcours et planning Figma 02 (fixture)",
    "FIXTURE / DEMONSTRATION — parcours horizontal et chronologie fictive Figma 02.",
    ["NO_EFFECT", "FIGMA_R02", "FIXTURE_DEMO"],
    {
      visualComposition: {
        schemaVersion: "conversational-composition-canonical-v1",
        blocks: [
          {
            kind: "sequence",
            id: "r02-seq",
            title: "Un déploiement en quatre temps.",
            headlineAccent: "Une progression sous conditions.",
            lead:
              "Ce chemin est une hypothèse de travail. Il précise les enchaînements à examiner, sans préjuger des dates réelles, des ressources disponibles ni des autorisations.",
            fixtureDemo: true,
            steps: [
              {
                id: "s1",
                title: "Qualifier",
                detail: "Accès, dépendances et services critiques.",
              },
              {
                id: "s2",
                title: "Préparer",
                detail: "Support, communication et retour arrière.",
              },
              {
                id: "s3",
                title: "Tester",
                detail: "Un site pilote, mesures et enseignements.",
              },
              {
                id: "s4",
                title: "Étendre",
                detail: "Vagues autorisées après vérification.",
              },
            ],
            timeline: {
              weeks: 8,
              caption:
                "Exemple de répartition hypothétique : aucune date ni charge n'est issue d'une source projet.",
              tracks: [
                {
                  id: "t1",
                  label: "Préparation",
                  startWeek: 1,
                  endWeek: 3,
                  barLabel: "Préparation",
                  tone: "blue",
                },
                {
                  id: "t2",
                  label: "Pilote sur un site",
                  startWeek: 3,
                  endWeek: 4,
                  barLabel: "Site pilote",
                  tone: "violet",
                },
                {
                  id: "t3",
                  label: "Sites restants",
                  startWeek: 5,
                  endWeek: 7,
                  barLabel: "Généralisation",
                  tone: "gold",
                },
              ],
            },
            closingNote:
              "Ne lancer aucune vague suivante sans contrôle réel des prérequis et du support.",
            textAlternative:
              "Parcours fictif en quatre étapes Cadrer/Qualifier/Préparer/Tester et chronologie 8 semaines de démonstration.",
          },
        ],
      },
    },
  ),
);

/** R03 — Figma 03 three adaptive comparison cards. */
const E05_R03_THREE_CARDS = "E05_R03_THREE_CARDS";
register(
  E05_R03_THREE_CARDS,
  dialogue(
    "Trois cartes comparatives Figma 03 (fixture)",
    "FIXTURE / DEMONSTRATION — trois options en cartes adaptatives.",
    ["NO_EFFECT", "FIGMA_R03", "FIXTURE_DEMO"],
    {
      visualComposition: {
        schemaVersion: "conversational-composition-canonical-v1",
        blocks: [
          {
            kind: "comparison",
            id: "r03-cmp",
            title: "Trois options. Une comparaison lisible.",
            lead:
              "Même famille graphique, mais des textes volontairement différents. Les cartes conservent leur hiérarchie sans figer les paragraphes à une longueur arbitraire.",
            fixtureDemo: true,
            alternatives: [
              {
                id: "a",
                title: "Livrer en séquences",
                summary:
                  "Approche progressive avec des retours rapides après chaque vague.",
                cons: ["Coexistence plus longue"],
              },
              {
                id: "b",
                title: "Déploiement accompagné",
                summary:
                  "Chaque site bénéficie d'une préparation renforcée, d'un relais métier et d'une période de stabilisation avant la poursuite. La charge reste répartie, mais le calendrier doit prévoir cette respiration.",
                cons: ["Dépendance à la capacité du support"],
              },
              {
                id: "c",
                title: "Généraliser après pilote",
                summary:
                  "Une phase d'essai identifie les difficultés communes, suivie d'une généralisation plus concentrée avec un niveau de préparation homogène.",
                cons: ["Concentration des sollicitations"],
              },
            ],
            editorialNote:
              "Trois options comparables : une vue en cartes fonctionne. La hauteur et les retours à la ligne sont dictés par le contenu, pas par Nora.",
            textAlternative:
              "Trois options fictives A/B/C en cartes — longueurs variables, vigilances distinctes.",
          },
        ],
      },
    },
  ),
);

/** R04 — Figma 04 five-option editorial matrix. */
const E05_R04_FIVE_MATRIX = "E05_R04_FIVE_MATRIX";
register(
  E05_R04_FIVE_MATRIX,
  dialogue(
    "Matrice cinq options Figma 04 (fixture)",
    "FIXTURE / DEMONSTRATION — matrice éditoriale à cinq options.",
    ["NO_EFFECT", "FIGMA_R04", "FIXTURE_DEMO"],
    {
      visualComposition: {
        schemaVersion: "conversational-composition-canonical-v1",
        blocks: [
          {
            kind: "comparison",
            id: "r04-mtx",
            title: "Cinq options. Une matrice éditoriale.",
            lead:
              "Quand les options se multiplient, la lecture en lignes reste plus claire qu'une grappe de cartes. Critères partagés, vigilance explicite.",
            fixtureDemo: true,
            alternatives: [
              {
                id: "a",
                title: "Séquences courtes",
                summary: "Vagues successives avec contrôle entre chaque site.",
              },
              {
                id: "b",
                title: "Pilote unique",
                summary: "Un site d'apprentissage avant extension.",
              },
              {
                id: "c",
                title: "Deux vagues",
                summary: "Regroupement partiel pour réduire la coexistence.",
              },
              {
                id: "d",
                title: "Accompagnement renforcé",
                summary: "Présence support locale pendant chaque bascule.",
              },
              {
                id: "e",
                title: "Bascule concentrée",
                summary: "Fenêtre unique après préparation homogène.",
              },
            ],
            criteria: [
              {
                id: "charge",
                label: "Charge",
                values: {
                  a: "Étalée",
                  b: "Modérée puis pic",
                  c: "Deux pics",
                  d: "Élevée locale",
                  e: "Pic unique",
                },
              },
              {
                id: "vigilance",
                label: "Vigilance",
                values: {
                  a: "Coexistence",
                  b: "Transfert d'apprentissage",
                  c: "Coordination des vagues",
                  d: "Disponibilité support",
                  e: "Préparation complète",
                },
              },
              {
                id: "lecture",
                label: "Lecture Nora",
                values: {
                  a: "Maîtrise progressive",
                  b: "Apprentissage d'abord",
                  c: "Compromise calendaire",
                  d: "Sécurisation humaine",
                  e: "Rapidité conditionnelle",
                },
              },
            ],
            editorialNote:
              "Matrice de démonstration — cinq options en lignes, critères en colonnes. Aucune option n'est retenue.",
            textAlternative:
              "Matrice fictive A–E : charge, vigilance et lecture Nora pour chaque option.",
          },
        ],
      },
    },
  ),
);

/** R05 — Figma 05 two stacked cards in constrained width. */
const E05_R05_STACKED = "E05_R05_STACKED";
register(
  E05_R05_STACKED,
  dialogue(
    "Deux cartes empilées Figma 05 (fixture)",
    "FIXTURE / DEMONSTRATION — comparaison empilée en largeur contrainte.",
    ["NO_EFFECT", "FIGMA_R05", "FIXTURE_DEMO"],
    {
      visualComposition: {
        schemaVersion: "conversational-composition-canonical-v1",
        blocks: [
          {
            kind: "comparison",
            id: "r05-stack",
            title: "Deux options. Une largeur contrainte.",
            lead:
              "En panneau étroit, les cartes s'empilent sans masquer les descriptions ni les vigilances.",
            fixtureDemo: true,
            alternatives: [
              {
                id: "a",
                title: "Progression maîtrisée",
                summary:
                  "Déploiement en séquences courtes avec vérification régulière après chaque vague et maintien d'un canal de retour arrière.",
                cons: ["Vigilance : durée de coexistence"],
              },
              {
                id: "b",
                title: "Généralisation après essai",
                summary:
                  "Un site pilote concentre l'apprentissage, puis une bascule plus large sur les sites restants lorsque les prérequis sont confirmés.",
                cons: ["Vigilance : concentration des sollicitations"],
              },
            ],
            editorialNote:
              "Variante empilée — contenu intégral conservé sous largeur Travail réduite.",
            textAlternative:
              "Deux options fictives empilées : progression maîtrisée vs généralisation après essai.",
          },
        ],
      },
    },
  ),
);

/** R06 — Figma 06 six editorial vertical steps. */
const E05_R06_SIX_STEPS = "E05_R06_SIX_STEPS";
register(
  E05_R06_SIX_STEPS,
  dialogue(
    "Six étapes éditoriales Figma 06 (fixture)",
    "FIXTURE / DEMONSTRATION — parcours vertical éditorial à six étapes.",
    ["NO_EFFECT", "FIGMA_R06", "FIXTURE_DEMO"],
    {
      visualComposition: {
        schemaVersion: "conversational-composition-canonical-v1",
        blocks: [
          {
            kind: "sequence",
            id: "r06-vert",
            title: "Un parcours en six temps.",
            headlineAccent: "Une lecture ordonnée, sans dates inventées.",
            lead:
              "Chaque étape précise un ordre de travail. Les dépendances restent sémantiques ; elles ne forcent pas un affichage de liens sous chaque titre.",
            fixtureDemo: true,
            steps: [
              {
                id: "t1",
                title: "Cadrer l'intention",
                detail: "Formuler le besoin et les contraintes connues.",
              },
              {
                id: "t2",
                title: "Cartographier les sites",
                detail: "Repérer les différences de maturité et de relais.",
              },
              {
                id: "t3",
                title: "Qualifier le support",
                detail: "Mesurer la capacité d'accompagnement réelle.",
              },
              {
                id: "t4",
                title: "Préparer le retour arrière",
                detail: "Documenter la marche de reprise avant toute vague.",
              },
              {
                id: "t5",
                title: "Conduire un pilote",
                detail: "Observer les frictions sur un périmètre limité.",
              },
              {
                id: "t6",
                title: "Étendre sous contrôle",
                detail: "N'ouvrir la suite qu'après vérification des prérequis.",
              },
            ],
            closingNote:
              "Fidélité de démonstration — six étapes éditoriales, sans chronologie chiffrée.",
            textAlternative:
              "Parcours vertical fictif en six étapes : cadrer, cartographier, qualifier, préparer, piloter, étendre.",
          },
        ],
      },
    },
  ),
);


/** Short TEST_BOUNDARY keys for e2e (exact match, same envelopes as the natural utterances). */
for (const [short, long] of [
  ["E05_S2_DIAGNOSTIC", E05_S2_DIAGNOSTIC],
  ["E05_S3_COMPARISON", E05_S3_COMPARISON],
  ["E05_S4_TRAJECTORY", E05_S4_TRAJECTORY],
  ["E05_S5_COMPOSITE", E05_S5_COMPOSITE],
  ["E05_S7_INSUFFICIENT", E05_S7_INSUFFICIENT],
  ["E05_F5_DECISION_TREE", E05_F5_DECISION_TREE],
  ["E05_F5_PARALLEL", E05_F5_PARALLEL],

```

### `NoraComposition.tsx` (fichier créé — chemin principal composition)

Taille : 842 lignes. Contenu intégral ci-dessous.

```tsx
"use client";

/**
 * Nora conversational composition renderer.
 * Product responsibility: adaptive restitution of validated D3 compositions.
 * Presentation contract: conversational-composition-v1 (admission).
 * Wire compatibility: e05-visual-composition-v1 (bounded).
 */

import React, {
  Component,
  type ErrorInfo,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

// Keep React binding for classic JSX transforms (Vitest SSR / esbuild).
void React;
import { SafeMarkdown } from "@/components/SafeMarkdown";
import { NoraSemanticIcon } from "@/components/figma/NoraSemanticIcon";
import { E2eCompositionThrowProbe } from "@/components/figma/E2eCompositionThrowProbe";
import {
  DirectedRelationBoard,
  EditorialSequence,
  EditorialSynthesis,
} from "@/components/figma/nora-composition";
import {
  admitConversationalComposition,
  buildExhaustiveBlockFallback,
  visibleTextAlternativeComplement,
  type AdmittedBlock,
  type ComparisonVariant,
  type RelationsVariant,
  type SequenceVariant,
} from "@/domains/conversation/conversational-composition";
import type {
  ComparisonBlock,
  RelationsBlock,
  SequenceBlock,
  SynthesisBlock,
  TextBlock,
  VisualBlock,
  VisualComposition,
  VisualProvenance,
} from "@/domains/conversation/visual-composition";
import {
  canonicalReferenceKey,
  compositionAnchorsChoices,
  compositionAnchorsReferences,
  partitionChoicesForAnchors,
  partitionReferencesForAnchors,
  provenanceConsultableKeys,
  resolveProvenanceReference,
} from "@/domains/conversation/visual-composition";
import type { TurnChoice, TurnReference } from "@/domains/conversation/turn-projection";

function Provenance(props: {
  items?: VisualProvenance[];
  canonicalReferences?: TurnReference[];
  onReference?: (ref: TurnReference) => void;
}) {
  if (!props.items?.length) return null;
  const canonical = props.canonicalReferences ?? [];
  return (
    <ul
      className="fig-visual-provenance fig-comp-provenance"
      data-testid="nora-visual-provenance"
    >
      {props.items.map((p, i) => {
        const resolved = resolveProvenanceReference(p, canonical);
        return (
          <li key={`${p.label}-${i}`} data-consultable={resolved ? "1" : "0"}>
            {resolved && props.onReference ? (
              <button
                type="button"
                className="fig-nora-ref-link"
                data-testid="nora-visual-prov-link"
                data-ref-kind={resolved.kind}
                onClick={() => props.onReference?.(resolved)}
              >
                Consulter · {resolved.label}
                {resolved.available === false ? " (à vérifier)" : ""}
              </button>
            ) : (
              <span>
                {p.label}
                <span className="fig-visual-provenance-note"> — mention descriptive</span>
              </span>
            )}
            {p.note ? <span className="fig-visual-provenance-note"> — {p.note}</span> : null}
          </li>
        );
      })}
    </ul>
  );
}

function Heading(props: {
  title: string;
  role?: TextBlock["role"];
  icon?: TextBlock["icon"];
}) {
  return (
    <h3 className="fig-visual-title fig-comp-title">
      <NoraSemanticIcon role={props.role} icon={props.icon} />
      <span>{props.title}</span>
    </h3>
  );
}

/**
 * C2 — visible complementary substance from textAlternative.
 * Must remain consultable under bodyPolicy=substitute (not sr-only alone).
 * Does not duplicate the full replyDraft; only non-redundant complement.
 */
function SubstanceComplement({ block }: { block: VisualBlock }) {
  if (block.kind === "text" || block.kind === "choices" || block.kind === "references") {
    return null;
  }
  const complement = visibleTextAlternativeComplement(block);
  if (!complement) return null;
  return (
    <aside
      className="fig-comp-substance-complement"
      data-testid="nora-composition-substance-complement"
      data-block-id={block.id}
    >
      <p className="fig-comp-substance-complement-label">Complément</p>
      <p className="fig-comp-substance-complement-text">{complement}</p>
    </aside>
  );
}

type BlockShellProps = {
  children: ReactNode;
  textAlternative: string;
  blockId: string;
};

/** CV-10 — isolate render failure to one block; keep readable textAlternative. */
export class BlockErrorBoundary extends Component<
  BlockShellProps,
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError(): { failed: boolean } {
    return { failed: true };
  }

  componentDidCatch(_error: Error, _info: ErrorInfo): void {
    // Presentation-only; never escalate to D3 FAILED.
  }

  render() {
    if (this.state.failed) {
      return (
        <section
          className="fig-visual-block fig-comp-block fig-comp-block-fallback"
          data-testid="nora-composition-block-fallback"
          data-block-id={this.props.blockId}
          data-fallback="1"
        >
          <p className="fig-comp-fallback-text">{this.props.textAlternative}</p>
        </section>
      );
    }
    return this.props.children;
  }
}

function AlternativeDetails({
  alt,
  index,
}: {
  alt: ComparisonBlock["alternatives"][number];
  index?: number;
}) {
  const eyebrow =
    index != null ? `OPTION ${String.fromCharCode(65 + index)}` : "OPTION";
  const vigilance = alt.cons?.[0];
  return (
    <article
      className="fig-visual-alt fig-comp-alt fig-nc-option-card"
      data-alt-id={alt.id}
      data-testid="nora-composition-alt-detail"
    >
      <p className="fig-nc-option-eyebrow">{eyebrow}</p>
      <h4 className="fig-nc-option-title">{alt.title}</h4>
      <p className="fig-nc-option-summary">{alt.summary}</p>
      {alt.pros?.length ? (
        <ul className="fig-visual-pros">
          {alt.pros.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      ) : null}
      {vigilance ? (
        <p className="fig-nc-option-vigilance">{vigilance}</p>
      ) : alt.cons?.length ? (
        <ul className="fig-visual-cons">
          {alt.cons.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

function ComparisonView({
  block,
  variant,
  canonicalReferences,
  onReference,
}: {
  block: ComparisonBlock;
  variant: ComparisonVariant;
  canonicalReferences?: TurnReference[];
  onReference?: (ref: TurnReference) => void;
}) {
  const hasCriteria = Boolean(block.criteria?.length);
  // CV-T04 / Defect A: matrix never hides summary/pros/cons — show complementary details.
  const showMatrix = variant === "matrix" && hasCriteria;
  const showCards =
    variant === "cards" ||
    variant === "stacked" ||
    (variant === "matrix" && !hasCriteria);
  // Figma 04 — matrix cells already carry Nature + criteria; avoid a second card dump
  // unless alternatives expose pros/cons beyond the matrix row.
  const showMatrixDetails =
    showMatrix &&
    !block.fixtureDemo &&
    block.alternatives.some(
      (a) => (a.pros?.length ?? 0) > 0 || (a.cons?.length ?? 0) > 0,
    );
  const forceText = variant === "text";

  return (
    <section
      className={`fig-visual-block fig-visual-comparison fig-comp-block fig-comp-comparison fig-comp-variant-${variant}`}
      data-testid="nora-visual-comparison"
      data-comp-testid="nora-composition-comparison"
      data-block-kind="comparison"
      data-block-id={block.id}
      data-variant={variant}
      data-substance-complete="1"
      aria-label={block.title}
    >
      {block.lead || block.fixtureDemo ? (
        <header className="fig-nc-editorial-hero">
          {block.fixtureDemo ? (
            <p className="fig-nc-fixture-badge">EXEMPLE · DONNÉES FICTIVES</p>
          ) : null}
          <h3 className="fig-nc-editorial-headline">
            <span className="fig-nc-editorial-headline-primary">{block.title}</span>
          </h3>
          {block.lead ? <p className="fig-nc-editorial-lead">{block.lead}</p> : null}
        </header>
      ) : (
        <Heading title={block.title} role={block.role} icon={block.icon} />
      )}
      {forceText ? (
        <div className="fig-comp-fallback-text" data-testid="nora-composition-comparison-text">
          {buildExhaustiveBlockFallback(block)}
        </div>
      ) : null}
      {!forceText && showCards ? (
        <div
          className={
            variant === "stacked"
              ? "fig-visual-comparison-grid fig-comp-comparison-stack"
              : "fig-visual-comparison-grid fig-comp-comparison-cards"
          }
          data-testid={
            variant === "stacked"
              ? "nora-composition-comparison-stacked"
              : "nora-composition-comparison-cards"
          }
          data-option-count={block.alternatives.length}
        >
          {block.alternatives.map((alt, i) => (
            <AlternativeDetails key={alt.id} alt={alt} index={i} />
          ))}
        </div>
      ) : null}
      {!forceText && showMatrix ? (
        <>
          <div className="fig-visual-matrix-wrap fig-comp-matrix-wrap fig-nc-matrix-editorial">
            {/* Figma 04 — options as rows, criteria as columns */}
            <table
              className="fig-visual-matrix fig-comp-matrix fig-nc-matrix-rows"
              data-testid="nora-composition-matrix-five"
              data-option-count={block.alternatives.length}
            >
              <caption>Matrice de comparaison</caption>
              <thead>
                <tr>
                  <th scope="col">Option</th>
                  <th scope="col">Nature</th>
                  {block.criteria!.map((c) => (
                    <th key={c.id} scope="col">
                      {c.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.alternatives.map((a, i) => (
                  <tr key={a.id}>
                    <th scope="row">
                      <span className="fig-nc-matrix-opt-label">
                        {String.fromCharCode(65 + i)}. {a.title}
                      </span>
                    </th>
                    <td>{a.summary}</td>
                    {block.criteria!.map((c) => (
                      <td key={c.id}>{c.values[a.id] ?? "—"}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {showMatrixDetails ? (
            <div
              className="fig-comp-comparison-stack fig-comp-matrix-details"
              data-testid="nora-composition-matrix-details"
            >
              <h4 className="fig-comp-matrix-details-title">Détail des options</h4>
              {block.alternatives.map((alt, i) => (
                <AlternativeDetails key={`detail-${alt.id}`} alt={alt} index={i} />
              ))}
            </div>
          ) : null}
        </>
      ) : null}
      {block.recommendation ? (
        <div className="fig-visual-recommendation" data-testid="nora-visual-recommendation">
          <NoraSemanticIcon role="recommendation" />
          <div className="fig-visual-recommendation-body">
            <span className="fig-visual-recommendation-label">Recommandation (avis Nora)</span>
            <SafeMarkdown content={block.recommendation} className="fig-visual-inline-md" />
          </div>
        </div>
      ) : null}
      {block.editorialNote ? (
        <aside className="fig-nc-orientation" data-testid="nora-composition-editorial-note">
          <p className="fig-nc-orientation-label">Choix éditorial</p>
          <p className="fig-nc-orientation-body">{block.editorialNote}</p>
        </aside>
      ) : null}
      {!forceText ? <SubstanceComplement block={block} /> : null}
      <Provenance
        items={block.provenance}
        canonicalReferences={canonicalReferences}
        onReference={onReference}
      />
    </section>
  );
}

function SequenceView({
  block,
  variant,
  canonicalReferences,
  onReference,
}: {
  block: SequenceBlock;
  variant: SequenceVariant;
  canonicalReferences?: TurnReference[];
  onReference?: (ref: TurnReference) => void;
}) {
  const titleById = new Map(block.steps.map((s) => [s.id, s.title] as const));
  const forceText = variant === "text";
  return (
    <section
      className={`fig-visual-block fig-visual-sequence fig-comp-block fig-comp-sequence fig-comp-variant-${variant}`}
      data-testid="nora-visual-sequence"
      data-comp-testid="nora-composition-sequence"
      data-block-kind="sequence"
      data-block-id={block.id}
      data-variant={variant}
      aria-label={block.title}
    >
      {forceText ? (
        <>
          <Heading title={block.title} role={block.role ?? "step"} icon={block.icon} />
          <div className="fig-comp-fallback-text" data-testid="nora-composition-sequence-text">
            {buildExhaustiveBlockFallback(block)}
          </div>
        </>
      ) : (
        <EditorialSequence block={block} variant={variant} />
      )}
      {/* Keep human dependency labels available for a11y / T02 without forcing UI noise */}
      {!forceText && block.steps.some((s) => s.dependsOn?.length) ? (
        <ul className="fig-nc-edges-a11y" data-testid="nora-visual-step-deps-list">
          {block.steps.map((step) =>
            step.dependsOn?.length ? (
              <li key={step.id} data-testid="nora-visual-step-deps">
                {step.title} dépend de :{" "}
                {step.dependsOn.map((id) => titleById.get(id) ?? id).join(", ")}
              </li>
            ) : null,
          )}
        </ul>
      ) : null}
      {!forceText ? <SubstanceComplement block={block} /> : null}
      <Provenance
        items={block.provenance}
        canonicalReferences={canonicalReferences}
        onReference={onReference}
      />
    </section>
  );
}

function relationRole(
  kind: RelationsBlock["nodes"][number]["kind"],
): TextBlock["role"] {
  if (kind === "hypothesis") return "hypothesis";
  if (kind === "observation") return "observation";
  if (kind === "fact" || kind === "finding") return "fact";
  return "information";
}

function RelationsListFallback({
  block,
  titleById,
}: {
  block: RelationsBlock;
  titleById: Map<string, string>;
}) {
  return (
    <>
      <ul className="fig-visual-relations-list fig-comp-relations-list">
        {block.nodes.map((n) => (
          <li key={n.id} data-node-id={n.id}>
            <NoraSemanticIcon role={relationRole(n.kind)} />
            <span className="fig-comp-relations-label">{n.label}</span>
            {n.detail ? <span className="fig-comp-relations-detail"> — {n.detail}</span> : null}
          </li>
        ))}
      </ul>
      {block.edges.length ? (
        <ul
          className="fig-visual-relations-edges fig-comp-relations-edges"
          data-testid="nora-composition-relations-edges"
        >
          {block.edges.map((e, i) => (
            <li key={`${e.from}-${e.to}-${i}`}>
              {titleById.get(e.from) ?? e.from} → {titleById.get(e.to) ?? e.to}
              {e.relation ? ` [${e.relation}]` : ""}
              {e.label ? ` (${e.label})` : ""}
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}

/**
 * Directed relations — new subsystem (`DirectedRelationBoard`).
 * Artisan measured-SVG / NoraCompositionGraphs are retired from the production path.
 * ELK paints when installed; otherwise structured reading (gate pending).
 */
function RelationsDirectedView({
  block,
  titleById,
}: {
  block: RelationsBlock;
  titleById: Map<string, string>;
}) {
  return <DirectedRelationBoard block={block} titleById={titleById} />;
}

function RelationsView({
  block,
  variant,
  canonicalReferences,
  onReference,
}: {
  block: RelationsBlock;
  variant: RelationsVariant;
  canonicalReferences?: TurnReference[];
  onReference?: (ref: TurnReference) => void;
}) {
  const forceText = variant === "text";
  const useDirected = variant === "directed";
  const titleById = new Map(block.nodes.map((n) => [n.id, n.label] as const));

  return (
    <section
      className={`fig-visual-block fig-visual-relations fig-comp-block fig-comp-relations fig-comp-variant-${variant}`}
      data-testid="nora-visual-relations"
      data-comp-testid="nora-composition-relations"
      data-block-kind="relations"
      data-block-id={block.id}
      data-variant={variant}
      data-fallback={useDirected ? "0" : "1"}
      data-layout={useDirected ? "directed" : "structured-list"}
      data-layout-hint={block.layoutHint ?? ""}
      aria-label={block.title}
    >
      <Heading title={block.title} role={block.role} icon={block.icon} />
      {forceText ? (
        <div className="fig-comp-fallback-text" data-testid="nora-composition-relations-text">
          {buildExhaustiveBlockFallback(block)}
        </div>
      ) : useDirected ? (
        <RelationsDirectedView block={block} titleById={titleById} />
      ) : (
        <RelationsListFallback block={block} titleById={titleById} />
      )}
      {!forceText ? <SubstanceComplement block={block} /> : null}
      <Provenance
        items={block.provenance}
        canonicalReferences={canonicalReferences}
        onReference={onReference}
      />
    </section>
  );
}

function SynthesisView({
  block,
  canonicalReferences,
  onReference,
}: {
  block: SynthesisBlock;
  canonicalReferences?: TurnReference[];
  onReference?: (ref: TurnReference) => void;
}) {
  return (
    <section
      className="fig-visual-block fig-visual-synthesis fig-comp-block fig-comp-synthesis fig-comp-synthesis-editorial"
      data-testid="nora-visual-synthesis"
      data-comp-testid="nora-composition-synthesis"
      data-block-kind="synthesis"
      data-block-id={block.id}
      aria-label={block.title}
      data-renderer="editorial-v3"
    >
      {/* EditorialSynthesis owns the Figma 01 headline — no legacy Heading duplicate. */}
      <EditorialSynthesis block={block} />
      <SubstanceComplement block={block} />
      <Provenance
        items={block.provenance}
        canonicalReferences={canonicalReferences}
        onReference={onReference}
      />
    </section>
  );
}

function TextView({ block }: { block: TextBlock }) {
  return (
    <div
      className={`fig-visual-block fig-visual-text fig-comp-block fig-comp-text${
        block.role ? ` fig-visual-text-${block.role}` : ""
      }`}
      data-testid="nora-visual-text"
      data-comp-testid="nora-composition-text"
      data-block-kind="text"
      data-role={block.role ?? ""}
    >
      {block.role || block.icon ? (
        <div className="fig-visual-text-head">
          <NoraSemanticIcon role={block.role} icon={block.icon} />
        </div>
      ) : null}
      <SafeMarkdown content={block.markdown} />
    </div>
  );
}

function ChoicesCluster(props: {
  choices: TurnChoice[];
  actionable?: boolean;
  busy?: boolean;
  choiceFrozen?: boolean;
  messageId?: string;
  residual?: boolean;
  onChoice?: (choice: TurnChoice, messageId: string) => void;
  anchorId?: string;
}) {
  if (!props.choices.length) return null;
  return (
    <div
      className="fig-nora-choices fig-visual-choices-anchor fig-comp-choices"
      data-testid="nora-choices"
      data-block-kind="choices"
      data-residual={props.residual ? "1" : "0"}
      data-actionable={props.actionable ? "1" : "0"}
      data-message-id={props.messageId}
      data-anchor-id={props.anchorId ?? ""}
    >
      {props.choices.map((c) => (
        <button
          key={c.id}
          type="button"
          className="fig-nora-choice"
          data-testid="nora-choice"
          data-choice-id={c.id}
          disabled={!props.actionable || props.busy || props.choiceFrozen}
          onClick={() => props.messageId && props.onChoice?.(c, props.messageId)}
        >
          {c.label}
        </button>
      ))}
      {!props.actionable ? (
        <p className="fig-nora-choices-expired" data-testid="nora-choices-expired">
          Propositions expirées — consultation seule.
        </p>
      ) : null}
    </div>
  );
}

function RefsCluster(props: {
  references: TurnReference[];
  residual?: boolean;
  anchorId?: string;
  onReference?: (ref: TurnReference) => void;
}) {
  if (!props.references.length) return null;
  return (
    <ul
      className="fig-nora-refs fig-visual-refs-anchor fig-comp-refs"
      data-testid="nora-refs"
      data-block-kind="references"
      data-residual={props.residual ? "1" : "0"}
      data-anchor-id={props.anchorId ?? ""}
    >
      {props.references.map((r, i) => (
        <li key={`${r.kind}-${r.resourceId ?? r.path ?? r.href ?? i}`}>
          <button
            type="button"
            className="fig-nora-ref-link"
            data-testid="nora-ref-link"
            data-ref-kind={r.kind}
            onClick={() => props.onReference?.(r)}
          >
            Consulter · {r.label}
            {r.available === false ? " (à vérifier)" : ""}
          </button>
        </li>
      ))}
    </ul>
  );
}

/** Defect C — never truncate; exhaustive structured fallback. */
function textAltFor(block: VisualBlock): string {
  return buildExhaustiveBlockFallback(block);
}

function AdmittedBlockView({
  admitted,
  canonicalReferences,
  onReference,
}: {
  admitted: AdmittedBlock;
  canonicalReferences?: TurnReference[];
  onReference?: (ref: TurnReference) => void;
}) {
  const { block, variant } = admitted;
  if (block.kind === "comparison") {
    return (
      <ComparisonView
        block={block}
        variant={variant as ComparisonVariant}
        canonicalReferences={canonicalReferences}
        onReference={onReference}
      />
    );
  }
  if (block.kind === "sequence") {
    return (
      <SequenceView
        block={block}
        variant={variant as SequenceVariant}
        canonicalReferences={canonicalReferences}
        onReference={onReference}
      />
    );
  }
  if (block.kind === "relations") {
    return (
      <RelationsView
        block={block}
        variant={variant as RelationsVariant}
        canonicalReferences={canonicalReferences}
        onReference={onReference}
      />
    );
  }
  if (block.kind === "synthesis") {
    return (
      <SynthesisView
        block={block}
        canonicalReferences={canonicalReferences}
        onReference={onReference}
      />
    );
  }
  if (block.kind === "text") {
    return <TextView block={block} />;
  }
  return null;
}

export type NoraCompositionProps = {
  composition: VisualComposition;
  /** Canonical replyDraft / message body for width-local re-admission consistency. */
  canonicalText?: string | null;
  choices?: TurnChoice[];
  references?: TurnReference[];
  actionable?: boolean;
  busy?: boolean;
  choiceFrozen?: boolean;
  messageId?: string;
  onChoice?: (choice: TurnChoice, messageId: string) => void;
  onReference?: (ref: TurnReference) => void;
};

export function NoraComposition(props: NoraCompositionProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [widthPx, setWidthPx] = useState<number | null>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el || typeof ResizeObserver === "undefined") {
      setWidthPx(el?.clientWidth ?? null);
      return;
    }
    const ro = new ResizeObserver((entries) => {
      const w = entries[0]?.contentRect.width;
      if (typeof w === "number" && Number.isFinite(w)) {
        setWidthPx(Math.round(w));
      }
    });
    ro.observe(el);
    setWidthPx(Math.round(el.clientWidth));
    return () => ro.disconnect();
  }, []);

  const admission = admitConversationalComposition(props.composition, {
    containerWidthPx: widthPx,
    canonicalText: props.canonicalText,
  });
  const choices = props.choices ?? [];
  const references = props.references ?? [];
  const choiceParts = partitionChoicesForAnchors(props.composition.blocks, choices);
  const refParts = partitionReferencesForAnchors(props.composition.blocks, references);
  const alreadyConsultable = provenanceConsultableKeys(
    props.composition.blocks,
    references,
  );
  const dedupeRefs = (list: TurnReference[]) =>
    list.filter((r) => !alreadyConsultable.has(canonicalReferenceKey(r)));

  return (
    <div
      ref={rootRef}
      className="fig-visual-composition fig-comp-composition"
      data-testid="nora-visual-composition"
      data-comp-testid="nora-composition"
      data-schema={props.composition.schemaVersion}
      data-contract={admission.contract}
      data-owns-body={admission.ownsBody ? "1" : "0"}
      data-body-policy={admission.bodyPolicy}
      data-container-width={widthPx ?? ""}
    >
      {admission.admitted.map((admitted) => {
        if (admitted.block.kind === "choices") {
          return (
            <ChoicesCluster
              key={admitted.block.id}
              choices={choiceParts.byAnchorId.get(admitted.block.id) ?? []}
              actionable={props.actionable}
              busy={props.busy}
              choiceFrozen={props.choiceFrozen}
              messageId={props.messageId}
              onChoice={props.onChoice}
              anchorId={admitted.block.id}
            />
          );
        }
        if (admitted.block.kind === "references") {
          return (
            <RefsCluster
              key={admitted.block.id}
              references={dedupeRefs(refParts.byAnchorId.get(admitted.block.id) ?? [])}
              onReference={props.onReference}
              anchorId={admitted.block.id}
            />
          );
        }
        return (
          <BlockErrorBoundary
            key={admitted.block.id}
            blockId={admitted.block.id}
            textAlternative={textAltFor(admitted.block)}
          >
            {/* C2-08 — DEV/E2E probe only; armed via window.__SFIA_E2E_COMPOSITION_THROW_BLOCK_ID__ */}
            <E2eCompositionThrowProbe blockId={admitted.block.id} />
            <AdmittedBlockView
              admitted={admitted}
              canonicalReferences={references}
              onReference={props.onReference}
            />
          </BlockErrorBoundary>
        );
      })}
      {compositionAnchorsChoices(props.composition) ? (
        <ChoicesCluster
          choices={choiceParts.residual}
          actionable={props.actionable}
          busy={props.busy}
          choiceFrozen={props.choiceFrozen}
          messageId={props.messageId}
          onChoice={props.onChoice}
          residual
          anchorId="residual-choices"
        />
      ) : null}
      {compositionAnchorsReferences(props.composition) ? (
        <RefsCluster
          references={dedupeRefs(refParts.residual)}
          onReference={props.onReference}
          residual
          anchorId="residual-references"
        />
      ) : null}
    </div>
  );
}

```

---

## 16. Fichiers modifiés (périmètre)

- `visual-composition.ts` — champs présentation synthesis/comparison/sequence + parsers Zod
- `conversational-composition/admission.ts` — règles cards/matrix/stacked/horizontal
- `tokens.css` — bloc fig-nc editorial 01–06
- `fixture-semantic-qualify.ts` — E05_R01…R06
- `ensemble05-travail-nora.spec.ts` — test R01–R06 + captures
- `delivery-history.md` — entrée DELIV-2026-11-18-FIGMA-01-06-VISUAL-CONVERGENCE
- preuves sous `figma-01-06-convergence-20261118/`

Diffs préexistants WT (ELK, C2, etc.) non re-listés ici ; inchangés dans leur intention.

---

## 17. Verdict final unique

**`READY FOR CHATGPT VISUAL REVIEW — FIGMA 01-06 CONVERGENCE CANDIDATE`**

Instruction ChatGPT : relire ce handoff sur `sfia/review-handoff`, vérifier SHA/blob, comparer les six maquettes Figma aux six captures runtime (dossier preuves local), contrôler structure/éléments/hiérarchie/responsive et non-régression ELK 07–09. Aucun Gate C / ADOPTED / LIVE automatique.
