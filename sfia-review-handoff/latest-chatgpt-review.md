# SFIA Review Pack Full — Nora complete graphical composition delivery

**Date/heure:** 2026-11-18 13:07 CET
**Cycle:** 8 — Delivery / implémentation (Critical)
**Macro-lot:** R5 / ML4D / Ensemble 05 « Travail avec Nora »
**Profil:** Critical — remplacement sous-système graphique
**Typologie:** EVOL
**Environnement:** DEV isolé · **NO RELEASE** · **NO PRODUCT PUSH**
**Verdict Cursor:** `READY FOR CHATGPT REVIEW — COMPLETE IMPLEMENTATION CANDIDATE`

---

## 1. Git Truth Check

| Item | Value |
|---|---|
| Repository worktree | `/Users/morris/Projects/sfia-workspace-next-ml4d-ux003-entry-20261116` |
| Branche | `sfia/next-ml4d-composition-adaptative` |
| HEAD (parent tip) | `a783f014935de0dec5ff8e79a2b18eea0e629756` |
| origin/main | `997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| Worktree | **Dirty** — candidat non commité (NO PRODUCT PUSH) |
| Handoff branch tip (pre-publish) | `sfia/review-handoff` @ `48ff8737` |

### git status --short (extrait)

```
M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio-next/construction/delivery-history.md
 M projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/runtime-mobile-430x932.png
 M projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/runtime-nominal-1680x970.png
 M projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/runtime-s1-simple-1440.png
 M projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/runtime-s2-diagnostic-1440.png
 M projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/runtime-s3-provenance-1440.png
 M projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/runtime-s4-trajectory-1440.png
 M projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/runtime-s5-composite-1440.png
 M projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/runtime-s5-composite-mobile-430.png
 M projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/runtime-viewer-enlarged-1440.png
 M projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/runtime-visual-comparison-1440.png
 M projects/sfia-studio-next/web/package-lock.json
 M projects/sfia-studio-next/web/package.json
 M projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
 M projects/sfia-studio-next/web/src/components/figma/NoraSemanticIcon.tsx
 M projects/sfia-studio-next/web/src/components/figma/NoraVisualComposition.tsx
 M projects/sfia-studio-next/web/src/components/figma/tokens.css
 M projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
 M projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
 M projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
 M projects/sfia-studio-next/web/src/domains/conversation/visual-composition.ts
 M projects/sfia-studio-next/web/tests/e2e/ensemble05-travail-nora.spec.ts
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/architecture-canonical-sections-strategy-a.md
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/c-matrix-convergence-status.md
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/c-matrix-strategy-a-corrective.md
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/c-matrix-strategy-a-status.md
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/c-matrix-strategy-a-v05.md
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/c-matrix-strategy-a-v06.md
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/c-matrix-strategy-a-v07-proposal.md
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/c2-08-browser-error-recovery-1440.png
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/c2-runtime-substance-complement-1440.png
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/complete-graphical-composition-evidence-manifest.json
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/corrective-runtime-comparison-1440.png
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/corrective-runtime-relations-list-1440.png
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/cv-t-matrix-composition-adaptative.md
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/f-matrix-fidelity-topology.md
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/f5-runtime-decision-tree-1440.png
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/f5-runtime-dependencies-directed-1440.png
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/f5-runtime-parallel-1440.png
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/figma-page06-morris-validation-package.md
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/figma-page06-visual-contract-executable.md
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/figma-page06-visual-contract.md
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/figma-page06/
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/figma-realization-inventory.md
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/graphical-engine-replacement-audit.md
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/layout-benchmark/
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/runtime-figma07-dependencies-elk-1440.png
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/runtime-figma08-tree-elk-1440.png
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/runtime-figma09-parallel-elk-1440.png
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/w3-runtime-figma08-tree-1440.png
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/w3-runtime-figma09-parallel-1440.png
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/w3-w4-figma-runtime-manifest.md
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/w5-reception-corpus.md
?? projects/sfia-studio-next/web/fixtures/
?? projects/sfia-studio-next/web/scripts/layout-engine-benchmark/
?? projects/sfia-studio-next/web/src/components/figma/E2eCompositionThrowProbe.tsx
?? projects/sfia-studio-next/web/src/components/figma/NoraComposition.tsx
?? projects/sfia-studio-next/web/src/components/figma/NoraCompositionGraphs.tsx
?? projects/sfia-studio-next/web/src/components/figma/nora-composition/
?? projects/sfia-studio-next/web/src/domains/conversation/conversational-composition/
?? projects/sfia-studio-next/web/src/domains/conversation/directed-layout/
?? projects/sfia-studio-next/web/tests/unit/c2-adversarial-integrity.test.ts
?? projects/sfia-studio-next/web/tests/unit/c2-substance-exhaustiveness.test.ts
?? projects/sfia-studio-next/web/tes
```

### git diff --stat (sfia-studio-next)

```
.../construction/delivery-history.md               | 244 +++++++
 .../runtime-mobile-430x932.png                     | Bin 69557 -> 69409 bytes
 .../runtime-nominal-1680x970.png                   | Bin 193944 -> 193635 bytes
 .../runtime-s1-simple-1440.png                     | Bin 164318 -> 157262 bytes
 .../runtime-s2-diagnostic-1440.png                 | Bin 145364 -> 143913 bytes
 .../runtime-s3-provenance-1440.png                 | Bin 175160 -> 62960 bytes
 .../runtime-s4-trajectory-1440.png                 | Bin 155212 -> 116083 bytes
 .../runtime-s5-composite-1440.png                  | Bin 159033 -> 108530 bytes
 .../runtime-s5-composite-mobile-430.png            | Bin 71624 -> 71645 bytes
 .../runtime-viewer-enlarged-1440.png               | Bin 63784 -> 63522 bytes
 .../runtime-visual-comparison-1440.png             | Bin 175160 -> 62960 bytes
 projects/sfia-studio-next/web/package-lock.json    |   7 +
 projects/sfia-studio-next/web/package.json         |   1 +
 .../web/src/components/figma/NoraConversation.tsx  |  60 +-
 .../web/src/components/figma/NoraSemanticIcon.tsx  |   4 +
 .../src/components/figma/NoraVisualComposition.tsx | 642 +----------------
 .../web/src/components/figma/tokens.css            | 796 +++++++++++++++++++++
 .../conversation/fixture-semantic-qualify.ts       | 371 +++++++++-
 .../web/src/domains/conversation/nora-adapter.ts   |  63 +-
 .../domains/conversation/semantic-qualification.ts |  60 +-
 .../src/domains/conversation/visual-composition.ts | 139 +++-
 .../web/tests/e2e/ensemble05-travail-nora.spec.ts  | 213 +++++-
 22 files changed, 1906 insertions(+), 694 deletions(-)
```

### name-status web/

```
M	projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/runtime-mobile-430x932.png
M	projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/runtime-nominal-1680x970.png
M	projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/runtime-s1-simple-1440.png
M	projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/runtime-s2-diagnostic-1440.png
M	projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/runtime-s3-provenance-1440.png
M	projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/runtime-s4-trajectory-1440.png
M	projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/runtime-s5-composite-1440.png
M	projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/runtime-s5-composite-mobile-430.png
M	projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/runtime-viewer-enlarged-1440.png
M	projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/runtime-visual-comparison-1440.png
M	projects/sfia-studio-next/web/package-lock.json
M	projects/sfia-studio-next/web/package.json
M	projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
M	projects/sfia-studio-next/web/src/components/figma/NoraSemanticIcon.tsx
M	projects/sfia-studio-next/web/src/components/figma/NoraVisualComposition.tsx
M	projects/sfia-studio-next/web/src/components/figma/tokens.css
M	projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
M	projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
M	projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
M	projects/sfia-studio-next/web/src/domains/conversation/visual-composition.ts
M	projects/sfia-studio-next/web/tests/e2e/ensemble05-travail-nora.spec.ts
```

### untracked web/ (extrait)

```
projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/architecture-canonical-sections-strategy-a.md
projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/c-matrix-convergence-status.md
projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/c-matrix-strategy-a-corrective.md
projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/c-matrix-strategy-a-status.md
projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/c-matrix-strategy-a-v05.md
projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/c-matrix-strategy-a-v06.md
projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/c-matrix-strategy-a-v07-proposal.md
projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/c2-08-browser-error-recovery-1440.png
projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/c2-runtime-substance-complement-1440.png
projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/complete-graphical-composition-evidence-manifest.json
projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/corrective-runtime-comparison-1440.png
projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/corrective-runtime-relations-list-1440.png
projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/cv-t-matrix-composition-adaptative.md
projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/f-matrix-fidelity-topology.md
projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/f5-runtime-decision-tree-1440.png
projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/f5-runtime-dependencies-directed-1440.png
projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/f5-runtime-parallel-1440.png
projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/figma-page06-morris-validation-package.md
projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/figma-page06-visual-contract-executable.md
projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/figma-page06-visual-contract.md
projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/figma-page06/figma-01-synthesis-742-36.png
projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/figma-page06/figma-02-parcours-743-2.png
projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/figma-page06/figma-03-options-745-2.png
projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/figma-page06/figma-04-matrix-745-27.png
projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/figma-page06/figma-06-steps-746-22.png
projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/figma-page06/figma-07-dependencies-751-11.png
projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/figma-page06/figma-08-tree-752-2.png
projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/figma-page06/figma-09-parallel-753-2.png
projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/figma-page06/figma-742-36-synthesis.png
projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/figma-page06/figma-743-2-planning.png
projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/figma-page06/figma-745-2-three-options.png
projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/figma-page06/figma-745-27-matrix.png
projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/figma-page06/figma-746-2-constrained.png
projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/figma-page06/figma-746-22-vertical-steps.png
projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/figma-page06/figma-751-11-dependencies.png
projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/figma-page06/figma-752-2-decision-tree.png
projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/figma-page06/figma-753-2-parallel.png
projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/figma-realization-inventory.md
projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/graphical-engine-replacement-audit.md
projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/layout-benchmark/G07-artisan.svg
projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/layout-benchmark/G07-elk.svg
projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/layout-benchmark/G08-artisan.svg
projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/layout-benchmark/G08-elk.svg
projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/layout-benchmark/G09-artisan.svg
projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/layout-benchmark/G09-elk.svg
projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/layout-benchmark/benchmark-report.json
projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/layout-benchmark/benchmark-repor
```

---

## 2. Sources & autorisation Morris

- GO EXPLICITE Morris 2026-11-18 — construction intégrale + **ajout ELKjs produit autorisé**
- Lève le STOP `MORRIS ARCHITECTURE DECISION REQUIRED` du handoff `48ff8737`
- Sources lues: SEF, grammaire visuelle 01–06, doc 04 remplacement E05, contrat 05, matrice 06 V0.7, handoff précédent
- Figma: `itgvCulInEnFY6DvgIegvP` page 06 nodes 742:36 … 753:2 (session MCP)

---

## 3. Architecture avant / après

### Avant
- Projection canonique Strategy A → admission → renderers mixtes
- Graphes dirigés: layout artisanal SVG mesuré (`NoraCompositionGraphs`) insuffisant Figma 07–09
- Benchmark isolé ELK vs RF → recommandation Solution A, ELK **non** en produit

### Après
```
Demande → Nora/D3 (fixture FAKE) → canonical_sections → admission Studio
  → famille/variante → DirectedRelationBoard (mesure DOM → elkjs → SVG+React)
  → EditorialSynthesis / Comparison / Sequence
  → SubstanceComplement / fallback texte
```
- Un seul système graphique principal pour nouveaux tours
- Artisan Graphs retiré du chemin production (stub compat + probe C2-08 isolé)

---

## 4. Intégration ELKjs

| Champ | Valeur |
|---|---|
| Package | `elkjs@0.10.2` |
| Licence | **EPL-2.0** (vérifiée sur package installé) |
| Import | statique `elkjs/lib/elk.bundled.js` dans `elk-layout.ts` |
| Bundler | Next.js / Turbopack e2e `:3101` — layout exécuté navigateur (`data-layout-engine=elkjs`) |
| Mesures | couche mesure `GraphNodeCard` (fixed off-viewport) → ELK → paint |
| G09 | composer swimlane: ELK DOWN par voie + placement 3 colonnes + gate/suite |
| Échecs | status `unavailable` → lecture structurée + textAlternative ; pas de diagnostic Pilote |
| Non retenu | React Flow / `@xyflow/react` |

---

## 5. Inventaire composants

| Composant | Rôle |
|---|---|
| `NoraComposition.tsx` | Admission + rendu familles + BlockErrorBoundary |
| `DirectedRelationBoard.tsx` | Graphes ELK (deps/tree/parallel) |
| `GraphNodeCard.tsx` | Nœud sémantique |
| `EditorialSynthesis.tsx` | Synthèse éditoriale Figma 01 |
| `directed-layout/elk-layout.ts` | Moteur layout produit |
| `NoraCompositionGraphs.tsx` | Stub legacy (re-export probe) |
| `NoraVisualComposition.tsx` | Alias compat → NoraComposition |
| `E2eCompositionThrowProbe.tsx` | C2-08 hors Graphs |

Voir aussi `docs/evidence/.../figma-realization-inventory.md`.

---

## 6. Matrice neuf Figma (runtime)

| Ref | Composant | Variante | Browser | Conformité observée | Capture | Écarts | Verdict |
|---|---|---|---|---|---|---|---|
| 01 | EditorialSynthesis | callout | T02 S5 | Structure éditoriale présente ; densité ≠ pixel Figma | s5 + figma-01 | accents/typographie | IMPLEMENTED / PARTIAL visual |
| 02 | SequenceView | h/v | T02 S4 | Parcours lisible ; dates non inventées | s4 + figma-02 | jalons graphiques | IMPLEMENTED |
| 03 | ComparisonView | cards | T02 S3 | Cartes + reco + C2 complément | runtime-visual-comparison | surfaces Figma | IMPLEMENTED |
| 04 | ComparisonView | matrix | admission | Matrice/stacked selon largeur | figma-04 | preuve runtime matrix dédiée limitée | IMPLEMENTED |
| 05 | admission width | stacked | mobile 430 | Reflow conteneur | s5-mobile | | IMPLEMENTED |
| 06 | SequenceView | vertical 6 | fixture S4 | 6 steps enregistrés | figma-06 | | IMPLEMENTED |
| 07 | DirectedRelationBoard | elkjs | T02 G07 | Nœuds+connecteurs orthogonaux | runtime-figma07-*-elk | hauteur/viewport | BEHAVIOR PROVEN |
| 08 | DirectedRelationBoard | elkjs tree | T02 G08 | Multiniveau + branches | runtime-figma08-*-elk | iconographie | BEHAVIOR PROVEN |
| 09 | swimlane ELK | elkjs parallel | T02 G09 | **3 voies visibles** + sync + suite | runtime-figma09-*-elk | densité vs Figma | BEHAVIOR PROVEN |

---

## 7. Remplacement E05 — imports

### Avant (conceptuel)
`NoraConversation` → `NoraVisualComposition` / Graphs artisan SVG

### Après
`NoraConversation` → `NoraComposition` → `DirectedRelationBoard` | editorial | comparison | sequence
`NoraCompositionGraphs` = stub
`grep` production: `data-legacy-artisan="0"` ; aucun moteur artisanal actif

Compat lecture: schemas `conversational-composition-canonical-v1`, `projection-v1`, `e05-visual-composition-v1` conservés (pas de migration données).

---

## 8. Défauts trouvés et corrigés pendant l'exécution

1. **G09 → structured-list** : parse `preferListFallback ||= nodes>10` forçait list malgré admission ELK — **corrigé** (prefer = intent auteur seul).
2. **G09 strip ~2924px** : partition RIGHT inadaptée — **swimlane composer**.
3. **Captures poisonnées** : mesure `left:-10000` gonflait bbox Playwright — **measure fixed** + screenshots element-scoped.
4. **Chevauchement cartes** : mesure à largeur 280 vs paint 168 — **mesure alignée 168** pour parallel.
5. Admission density ELK : seuils 18/28 pour familles dirigées.

---

## 9. Tests exécutés

| Suite | Résultat |
|---|---|
| Vitest directed-layout + composition + C2 + Strategy A (cibles) | **83 PASS** |
| Playwright T02 visual composition | **PASS** (~22s) |
| Playwright C2-08 ErrorBoundary | **PASS** |
| typecheck/eslint/build globaux | non rejoués exhaustivement dans ce segment (corrections induites ciblées) |
| `nora-sas-maturation-instructions.test.ts` | baseline antérieure FAIL — **requalifier hors claim PASS** |

Fake/Real: BROWSER FAKE PROVEN · HISTORICAL PG NOT RUN · LIVE NOT RUN

---

## 10. Accessibilité / responsive / perf

- Alternatives: liste relations a11y + textAlternative / SubstanceComplement
- Ordre DOM conservé ; focus non régressé sur fil
- Largeurs exercées: 430 / 1440 (+ admission width)
- Zoom 200/400%: **non exhaustif** ce passage — réserve
- ELK layout G09 ~35ms UNIT ; canvas <720px après clamp

---

## 11. Manifeste preuves (SHA-256)

| Fichier | SHA-256 | bytes |
|---|---|---|
| `runtime-figma07-dependencies-elk-1440.png` | `a10d902b7773ab381e7c118f68d739a27babe721bd948be597737cfb787148fa` | 45723 |
| `runtime-figma08-tree-elk-1440.png` | `bcb5ec6624afb68945872832db8f8f6765c08102dcb02bcaf8911f39c5b1951a` | 51119 |
| `runtime-figma09-parallel-elk-1440.png` | `fb6988cb1a5bf39256e88fc0d920f72a279ea20abad9f6fbba19fa7018824375` | 50138 |
| `runtime-visual-comparison-1440.png` | `3fc3ec88959311a73e8b5b67e48a75ee50bf6a64797cac3881a2690993f23bc9` | 62960 |
| `complete-graphical-composition-evidence-manifest.json` | `b64f9163d9192083da6dbd7b48aba2946ccd7698dab8a0000b13c30a44380437` | 3578 |
| `figma-realization-inventory.md` | `05d40b286fa26de1ffc917e6e9da20a18adc28d0fc75c64bf6ca499ee264a00e` | 2878 |
| `figma-page06/figma-01-synthesis-742-36.png` | `84e07d78f5c97ac366ed6c9bcb7d5ac4a03a923ae7215033226984f70e4e1164` | 195936 |
| `figma-page06/figma-02-parcours-743-2.png` | `bc6b8f8b24a64e4beb7f5efe4215e774d35ba168bcabc4f81f0c6723119dbde5` | 135000 |
| `figma-page06/figma-03-options-745-2.png` | `01fb842db2f8317cbdde3e467a75bf92afc71866a96dc5ef3a250b71147e7a64` | 82836 |
| `figma-page06/figma-04-matrix-745-27.png` | `cb9cbf4196e0eac62d3ae5c7c4b05baab36f76b60d7dee0e53a9c17b6da7ed21` | 71466 |
| `figma-page06/figma-06-steps-746-22.png` | `ff76ed1c670e933ec882bf8aaf5373896aec3cfe109d7e07c279e95d01ffe69c` | 80172 |
| `figma-page06/figma-07-dependencies-751-11.png` | `04d2657d2184e403516020b9584c943276484fe845667d4bb9e9133f72894887` | 84854 |
| `figma-page06/figma-08-tree-752-2.png` | `07122928966aac070b1ac3dcf67f730df11e9c541481ff2e5647c02e6383be18` | 86149 |
| `figma-page06/figma-09-parallel-753-2.png` | `524883a812e2b6cb6d0cd4b8db69daa1fea523f885ae64023f57e6b84234fc9e` | 90084 |

Binaires locaux sous `projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/` (inspectables worktree ; handoff L3 = markdown seul).

---

## 12. Préservation Strategy A / C2 / A1–A7

- canonical_sections inchangé comme autorité WRITE
- C2 exact-identity ; SubstanceComplement visible
- HumanDecision non simulée par graphes
- Pas d'invention dates/statuts/sync
- Idempotence / brouillon / visionneuse préservés (non régressés T02)

---

## 13. Matrice C-01–C-22 (proposition depuis V0.7)

Statuts candidats (non Gate C): C2 integrity **PROVEN** ; C-10 directed **PROVEN (ELK)** ; graphiques 07–09 **PROVEN browser** ; fidélité artistique Figma **PARTIAL→ALIGNED candidate** sous revue Morris. Détail: `c-matrix-strategy-a-v07-proposal.md` + inventaire.

---

## 14. W1–W5

| W | Statut |
|---|---|
| W1 thème sombre | CONSUMED |
| W2 sémantique | PRESERVED |
| W3 graphes | ELK product PROVEN G07–09 |
| W4 QA | T02+C2-08 PASS |
| W5 réception | corpus + captures ; réception Morris ouverte |

---

## 15. Réserves

1. Fidélité artistique pixel/Figma — ajustements possibles post-revue (pas Gate Cursor).
2. Zoom 200/400% et batterie responsive 390–1280 non rejouée exhaustivement ce passage.
3. HISTORICAL PG / LIVE non autorisés / non run.
4. Suite Vitest globale sas-maturation: FAIL préexistant à requalifier.
5. Preuves binaires non poussées sur handoff L3 (markdown only) — inspection worktree / canal livraison.

Gates Morris ouverts: Gate C / ADOPTED / RECETTE / STABLE / product push.

---

## 16. Diffs clés (modifiés suivis)


### `projects/sfia-studio-next/web/package.json`

```diff
diff --git a/projects/sfia-studio-next/web/package.json b/projects/sfia-studio-next/web/package.json
index e27bf16f..a8969778 100644
--- a/projects/sfia-studio-next/web/package.json
+++ b/projects/sfia-studio-next/web/package.json
@@ -18,6 +18,7 @@
     "@openai/agents": "^0.21.0",
     "better-auth": "^1.7.16",
     "drizzle-orm": "^0.45.4",
+    "elkjs": "^0.10.2",
     "next": "^15.5.29",
     "postgres": "^3.4.5",
     "react": "^19.0.0",
```

### `projects/sfia-studio-next/web/src/domains/conversation/visual-composition.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/visual-composition.ts b/projects/sfia-studio-next/web/src/domains/conversation/visual-composition.ts
index 7a6c2abf..468977c9 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/visual-composition.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/visual-composition.ts
@@ -13,7 +13,30 @@

 import { z } from "zod";

-export const VISUAL_COMPOSITION_SCHEMA = "e05-visual-composition-v1" as const;
+/** Historical E05 wire — read/compat only. */
+export const VISUAL_COMPOSITION_SCHEMA_LEGACY = "e05-visual-composition-v1" as const;
+/**
+ * Strategy B historical wire (replyDraft authority + optional projection).
+ * READ only for stored turns — never re-interpreted as canonical_sections (A3).
+ */
+export const VISUAL_COMPOSITION_SCHEMA_PROJECTION =
+  "conversational-composition-projection-v1" as const;
+/** Strategy A active WRITE — canonical semantic sections (single authority). */
+export const VISUAL_COMPOSITION_SCHEMA = "conversational-composition-canonical-v1" as const;
+export type VisualCompositionSchemaVersion =
+  | typeof VISUAL_COMPOSITION_SCHEMA
+  | typeof VISUAL_COMPOSITION_SCHEMA_PROJECTION
+  | typeof VISUAL_COMPOSITION_SCHEMA_LEGACY;
+
+export function isKnownVisualCompositionSchema(
+  v: unknown,
+): v is VisualCompositionSchemaVersion {
+  return (
+    v === VISUAL_COMPOSITION_SCHEMA ||
+    v === VISUAL_COMPOSITION_SCHEMA_PROJECTION ||
+    v === VISUAL_COMPOSITION_SCHEMA_LEGACY
+  );
+}

 export type VisualBlockKind =
   | "comparison"
@@ -166,14 +189,27 @@ export type RelationNode = {
   id: string;
   label: string;
   kind: RelationNodeKind;
+  /** Parallel lane / swimlane id when layoutHint=parallelProcess. */
+  laneId?: string;
+  detail?: string;
 };

+export type RelationEdgeKind =
+  | "depends_on"
+  | "condition_true"
+  | "condition_false"
+  | "sync"
+  | "flow";
+
 export type RelationEdge = {
   from: string;
   to: string;
   label?: string;
+  relation?: RelationEdgeKind;
 };

+export type RelationsLayoutHint = "dependencies" | "decisionTree" | "parallelProcess";
+
 export type RelationsBlock = {
   kind: "relations";
   id: string;
@@ -183,6 +219,8 @@ export type RelationsBlock = {
   textAlternative: string;
   provenance?: VisualProvenance[];
   preferListFallback?: boolean;
+  /** Directed family hint — C-10/11/12. */
+  layoutHint?: RelationsLayoutHint;
   role?: VisualSemanticRole;
   icon?: VisualIconId;
 };
@@ -248,9 +286,18 @@ export type VisualBlock =
   | ChoicesAnchorBlock
   | ReferencesAnchorBlock;

+/**
+ * Strategy A (canonical sections): composition is the single semantic authority;
+ * replyDraft is derived. Legacy Strategy B projections keep independent replyDraft
+ * and require claim-subset fidelity before graphic presentation.
+ */
+export type CompositionContentAuthority = "canonical_sections" | "legacy_projection";
+
 export type VisualComposition = {
-  schemaVersion: typeof VISUAL_COMPOSITION_SCHEMA;
+  schemaVersion: VisualCompositionSchemaVersion;
   blocks: VisualBlock[];
+  /** Set by parse/validate — not agent-authored independently of schemaVersion. */
+  contentAuthority?: CompositionContentAuthority;
 };

 /**
@@ -298,6 +345,7 @@ const VisualIconAgentSchema = z.enum([
   "source",
 ]);

+/** Agent WRITE path — active projection schema only (F4). Legacy accepted on READ/parse. */
 export const VisualCompositionAgentOutputSchema = z.object({
   schemaVersion: z.literal(VISUAL_COMPOSITION_SCHEMA),
   blocks: z
@@ -325,7 +373,7 @@ export const VisualCompositionAgentOutputSchema = z.object({
                 cons: z.array(z.string().max(200)).max(4).optional(),
               }),
             )
-            .max(5),
+            .max(12),
           criteria: z
             .array(
               z.object({
@@ -367,6 +415,9 @@ export const VisualCompositionAgentOutputSchema = z.object({
           id: z.string().max(64),
           title: z.string().max(160),
           textAlternative: z.string().max(2000),
+          layoutHint: z
+            .enum(["dependencies", "decisionTree", "parallelProcess"])
+            .optional(),
           nodes: z
             .array(
               z.object({
@@ -380,18 +431,29 @@ export const VisualCompositionAgentOutputSchema = z.object({
                   "finding",
                   "observation",
                 ]),
+                laneId: z.string().max(64).optional(),
+                detail: z.string().max(400).optional(),
               }),
             )
-            .max(10),
+            .max(12),
           edges: z
             .array(
               z.object({
                 from: z.string().max(64),
                 to: z.string().max(64),
                 label: z.string().max(200).optional(),
+                relation: z
+                  .enum([
+                    "depends_on",
+                    "condition_true",
+                    "condition_false",
+                    "sync",
+                    "flow",
+                  ])
+                  .optional(),
               }),
             )
-            .max(16),
+            .max(20),
           preferListFallback: z.boolean().optional(),
           provenance: z.array(VisualProvenanceAgentSchema).max(4).optional(),
           role: VisualRoleAgentSchema.optional(),
@@ -445,10 +507,10 @@ export type ParseVisualCompositionResult =
   | { ok: false; reason: string };

 const MAX_BLOCKS = 10;
-const MAX_ALTS = 5;
+const MAX_ALTS = 12;
 const MAX_STEPS = 8;
-const MAX_NODES = 10;
-const MAX_EDGES = 16;
+const MAX_NODES = 12;
+const MAX_EDGES = 20;
 const MAX_ITEMS = 8;
 const MAX_PROS_CONS = 4;
 const MAX_CRITERIA = 6;
@@ -868,10 +930,30 @@ function parseRelations(
     const label = fit(labelRaw, MAX_TITLE, ctx);
     if (!nidF || !label) return null;
     ids.add(nidF);
-    nodes.push({ id: nidF, label, kind });
+    let laneId: string | undefined;
+    const laneRaw = asString(n.laneId);
+    if (laneRaw) {
+      laneId = fit(laneRaw, MAX_ID, ctx) ?? undefined;
+      if (!laneId) return null;
+    }
+    let detail: string | undefined;
+    const detailRaw = asString(n.detail);
+    if (detailRaw) {
+      detail = fit(detailRaw, MAX_STR, ctx) ?? undefined;
+      if (!detail) return null;
+    }
+    nodes.push({ id: nidF, label, kind, laneId, detail });
   }
   if (nodes.length < 2) return null;

+  const EDGE_RELATIONS = new Set<RelationEdgeKind>([
+    "depends_on",
+    "condition_true",
+    "condition_false",
+    "sync",
+    "flow",
+  ]);
+
   const edges: RelationEdge[] = [];
   if (o.edges !== undefined && o.edges !== null) {
     if (!Array.isArray(o.edges)) return null;
@@ -895,15 +977,36 @@ function parseRelations(
         label = fit(labelRaw, 80, ctx) ?? undefined;
         if (!label) return null;
       }
-      edges.push({ from: fromF, to: toF, label });
+      let relation: RelationEdgeKind | undefined;
+      const relRaw = asString(e.relation) as RelationEdgeKind | null;
+      if (relRaw) {
+        if (!EDGE_RELATIONS.has(relRaw)) return null;
+        relation = relRaw;
+      }
+      edges.push({ from: fromF, to: toF, label, relation });
     }
   }

   const provenance = parseProvenance(o.provenance, ctx);
   if (provenance === "FAIL") return null;

-  const preferListFallback =
-    Boolean(o.preferListFallback) || nodes.length > 7 || edges.length > 10;
+  let layoutHint: RelationsLayoutHint | undefined;
+  const hintRaw = asString(o.layoutHint);
+  if (hintRaw) {
+    if (
+      hintRaw !== "dependencies" &&
+      hintRaw !== "decisionTree" &&
+      hintRaw !== "parallelProcess"
+    ) {
+      return null;
+    }
+    layoutHint = hintRaw;
+  }
+
+  // Prefer-list is author intent only. Density / narrow / ELK family thresholds
+  // are decided at admission (selectRelationsVariant) — do not bake legacy
+  // nodes>10 into the parsed block or ELK graphs (G09=11) silently become lists.
+  const preferListFallback = Boolean(o.preferListFallback) || undefined;

   return {
     kind: "relations",
@@ -914,6 +1017,7 @@ function parseRelations(
     textAlternative,
     provenance: provenance ?? undefined,
     preferListFallback,
+    layoutHint,
     role: parseRole(o.role) ?? "information",
     icon: parseIcon(o.icon),
   };
@@ -1072,9 +1176,10 @@ export function parseVisualCompositionDetailed(raw: unknown): ParseVisualComposi
     return { ok: false, reason: "VISUAL_COMPOSITION_INVALID_OR_EMPTY" };
   }
   const o = raw as Record<string, unknown>;
-  if (o.schemaVersion !== VISUAL_COMPOSITION_SCHEMA) {
+  if (!isKnownVisualCompositionSchema(o.schemaVersion)) {
     return { ok: false, reason: "VISUAL_COMPOSITION_SCHEMA_MISMATCH" };
   }
+  const schemaVersion = o.schemaVersion;
   if (!Array.isArray(o.blocks)) {
     return { ok: false, reason: "VISUAL_COMPOSITION_INVALID_OR_EMPTY" };
   }
@@ -1113,9 +1218,15 @@ export function parseVisualCompositionDetailed(raw: unknown): ParseVisualComposi
   if (!blocks.length) {
     return { ok: false, reason: "VISUAL_COMPOSITION_INVALID_OR_EMPTY" };
   }
+  // A3 — authority from durable schemaVersion only (never retrofit projection-v1 as A).
+  const contentAuthority: CompositionContentAuthority =
+    schemaVersion === VISUAL_COMPOSITION_SCHEMA
+      ? "canonical_sections"
+      : "legacy_projection";
   return {
     ok: true,
-    value: { schemaVersion: VISUAL_COMPOSITION_SCHEMA, blocks },
+    // Preserve historical schemaVersion; WRITE path = conversational-composition-canonical-v1.
+    value: { schemaVersion, blocks, contentAuthority },
   };
 }
```

### `projects/sfia-studio-next/web/src/domains/conversation/conversational-composition/admission.ts`

```diff

```

## 17. Nouveaux fichiers (extraits)

### `projects/sfia-studio-next/web/src/domains/conversation/directed-layout/elk-layout.ts`

```ts
/**
 * Product ELKjs directed layout — Morris GO 2026-11-18.
 * Studio owns coordinates; Nora supplies no SVG/CSS/positions.
 *
 * Parallel (G09): hierarchical ELK — swimlanes as compound children (DOWN
 * inside each lane), lanes row LEFT→RIGHT, then convergence / suite below.
 * Flat RIGHT+partition produced a ~3k-wide strip unfit for the Travail panel.
 */

import ELK from "elkjs/lib/elk.bundled.js";
import type { RelationsBlock } from "@/domains/conversation/visual-composition";
import type { DirectedLayoutResult, LayoutEdgePath, LayoutNodeBox } from "./types";

export type NodeSizeMap = Record<string, { width: number; height: number }>;

const DEFAULT_SIZE = { width: 220, height: 72 };
const LANE_GAP = 36;
const LANE_PAD = 12;
const ROW_GAP = 48;

function sizeOf(id: string, sizes?: NodeSizeMap): { width: number; height: number } {
  const s = sizes?.[id];
  if (!s) return DEFAULT_SIZE;
  return {
    width: Math.max(120, Math.min(360, Math.round(s.width))),
    height: Math.max(48, Math.min(280, Math.round(s.height))),
  };
}

function portCenter(box: LayoutNodeBox, side: "top" | "bottom" | "left" | "right"): [number, number] {
  if (side === "top") return [box.x + box.width / 2, box.y];
  if (side === "bottom") return [box.x + box.width / 2, box.y + box.height];
  if (side === "left") return [box.x, box.y + box.height / 2];
  return [box.x + box.width, box.y + box.height / 2];
}

function orthogonalPath(
  from: [number, number],
  to: [number, number],
): Array<[number, number]> {
  if (Math.abs(from[0] - to[0]) < 1 || Math.abs(from[1] - to[1]) < 1) {
    return [from, to];
  }
  const midY = from[1] + (to[1] - from[1]) / 2;
  return [from, [from[0], midY], [to[0], midY], to];
}

type LaneBucket = {
  id: string;
  label: string;
  nodes: RelationsBlock["nodes"];
  kind: "flow" | "gate" | "suite";
};

function classifyLanes(block: RelationsBlock): {
  flow: LaneBucket[];
  gateNodes: RelationsBlock["nodes"];
  suiteNodes: RelationsBlock["nodes"];
} {
  const syncTargets = new Set(
    block.edges.filter((e) => e.relation === "sync").map((e) => e.to),
  );
  const order: string[] = [];
  const map = new Map<string, RelationsBlock["nodes"]>();
  for (const n of block.nodes) {
    const lane = n.laneId?.trim() || "voie";
    if (!map.has(lane)) {
      order.push(lane);
      map.set(lane, []);
    }
    map.get(lane)!.push(n);
  }

  const flow: LaneBucket[] = [];
  const gateNodes: RelationsBlock["nodes"] = [];
  const suiteNodes: RelationsBlock["nodes"] = [];

  for (const label of order) {
    const nodes = map.get(label)!;
    const allGate = nodes.every((n) => syncTargets.has(n.id));
    const allAfterGate =
      !allGate &&
      nodes.every((n) =>
        block.edges.some((e) => e.from === [...syncTargets][0] && e.to === n.id),
      );
    if (allGate) {
      gateNodes.push(...nodes);
      continue;
    }
    if (allAfterGate || /^suite/i.test(label)) {
      suiteNodes.push(...nodes);
      continue;
    }
    if (/^converg/i.test(label) && nodes.some((n) => syncTargets.has(n.id))) {
      gateNodes.push(...nodes);
      continue;
    }
    flow.push({ id: `lane-${label}`, label, nodes, kind: "flow" });
  }

  // Fallback: any sync target not already classified.
  for (const n of block.nodes) {
    if (syncTargets.has(n.id) && !gateNodes.some((g) => g.id === n.id)) {
      gateNodes.push(n);
    }
  }
  for (const n of block.nodes) {
    const inFlow = flow.some((l) => l.nodes.some((x) => x.id === n.id));
    const inGate = gateNodes.some((g) => g.id === n.id);
    const inSuite = suiteNodes.some((s) => s.id === n.id);
    if (!inFlow && !inGate && !inSuite) {
      suiteNodes.push(n);
    }
  }

  return { flow, gateNodes, suiteNodes };
}

/**
 * G09 / parallelProcess — swimlane composition:
 * each flow lane laid out DOWN via ELK, lanes placed side-by-side, gate+suite below.
 */
async function computeParallelSwimlaneLayout(
  block: RelationsBlock,
  sizes: NodeSizeMap | undefined,
  elk: InstanceType<typeof ELK>,
): Promise<DirectedLayoutResult> {
  const t0 = typeof performance !== "undefined" ? performance.now() : Date.now();
  const { flow, gateNodes, suiteNodes } = classifyLanes(block);
  if (flow.length < 2) {
    // Not enough distinct lanes — fall through to flat layered.
    return computeFlatLayeredLayout(block, sizes, elk, t0, {
      direction: "DOWN",
      partitioning: true,
    });
  }

  const nodeBoxes: LayoutNodeBox[] = [];
  const edgePaths: LayoutEdgePath[] = [];
  let cursorX = LANE_PAD;
  let lanesBottom = 0;
  const laneBounds: Array<{ label: string; x: number; y: number; w: number; h: number }> = [];

  // Fit three swimlanes in a typical Travail column (~600–720px) without
  // forcing the Pilote to scroll horizontally to discover a lane.
  const maxLaneNodeW = flow.length >= 3 ? 168 : 220;

  for (const lane of flow) {
    const intra = block.edges.filter(
      (e) =>
        lane.nodes.some((n) => n.id === e.from) && lane.nodes.some((n) => n.id === e.to),
    );
    const children = lane.nodes.map((n) => {
      const dim = sizeOf(n.id, sizes);
      return {
        id: n.id,
        width: Math.min(dim.width, maxLaneNodeW),
        height: dim.height,
      };
    });
    const res = await elk.layout({
      id: lane.id,
      layoutOptions: {
        "elk.algorithm": "layered",
        "elk.direction": "DOWN",
        "elk.spacing.nodeNode": "20",
        "elk.layered.spacing.nodeNodeBetweenLayers": "36",
        "elk.edgeRouting": "ORTHOGONAL",
        "elk.padding": `[top=${LANE_PAD},left=${LANE_PAD},bottom=${LANE_PAD},right=${LANE_PAD}]`,
      },
      children,
      edges: intra.map((e, i) => ({
        id: `${lane.id}-e${i}`,
        sources: [e.from],
        targets: [e.to],
      })),
    });

    const laneW = Math.max(
      ...(res.children ?? []).map((c) => (c.x ?? 0) + (c.width ?? 0)),
      children.reduce((m, c) => Math.max(m, c.width), 0),
    ) + LANE_PAD;
    const laneH = Math.max(
      ...(res.children ?? []).map((c) => (c.y ?? 0) + (c.height ?? 0)),
      0,
    ) + LANE_PAD;

    for (const c of res.children ?? []) {
      nodeBoxes.push({
        id: c.id,
        x: cursorX + (c.x ?? 0),
        y: LANE_PAD + (c.y ?? 0),
        width: c.width ?? sizeOf(c.id, sizes).width,
        height: c.height ?? sizeOf(c.id, sizes).height,
      });
    }
    for (const e of res.edges ?? []) {
      const points: Array<[number, number]> = [];
      for (const s of e.sections ?? []) {
        points.push([cursorX + s.startPoint.x, LANE_PAD + s.startPoint.y]);
        for (const b of s.bendPoints ?? []) {
          points.push([cursorX + b.x, LANE_PAD + b.y]);
        }
        points.push([cursorX + s.endPoint.x, LANE_PAD + s.endPoint.y]);
      }
      if (points.length >= 2) {
        edgePaths.push({
          id: e.id,
          from: e.sources?.[0] ?? "",
          to: e.targets?.[0] ?? "",
          points,
          routing: "orthogonal",
        });
      }
    }
    laneBounds.push({ label: lane.label, x: cursorX, y: 0, w: laneW, h: laneH });
    lanesBottom = Math.max(lanesBottom, LANE_PAD + laneH);
    cursorX += laneW + LANE_GAP;
  }

  const canvasW = Math.max(cursorX - LANE_GAP + LANE_PAD, 320);
  let y = lanesBottom + ROW_GAP;

  const placeRow = (nodes: RelationsBlock["nodes"], y0: number): number => {
    if (!nodes.length) return y0;
    const dims = nodes.map((n) => ({ n, ...sizeOf(n.id, sizes) }));
    const totalW = dims.reduce((s, d) => s + d.width, 0) + LANE_GAP * Math.max(0, dims.length - 1);
    let x = Math.max(LANE_PAD, (canvasW - totalW) / 2);
    let rowH = 0;
    for (const d of dims) {
      nodeBoxes.push({ id: d.n.id, x, y: y0, width: d.width, height: d.height });
      x += d.width + LANE_GAP;
      rowH = Math.max(rowH, d.height);
    }
    return y0 + rowH;
  };

  y = placeRow(gateNodes, y);
  if (suiteNodes.length) {
    y = placeRow(suiteNodes, y + ROW_GAP);
  }

  const byId = new Map(nodeBoxes.map((n) => [n.id, n]));
  let edgeIdx = 0;
  for (const e of block.edges) {
    const already = edgePaths.some((p) => p.from === e.from && p.to === e.to);
    if (already) continue;
    const a = byId.get(e.from);
    const b = byId.get(e.to);
    if (!a || !b) continue;
    const from = portCenter(a, "bottom");
    const to = portCenter(b, e.relation === "sync" ? "top" : "top");
    edgePaths.push({
      id: `compose-e${edgeIdx++}`,
      from: e.from,
      to: e.to,
      points: orthogonalPath(from, to),
      routing: "orthogonal",
    });
  }

  const t1 = typeof performance !== "undefined" ? performance.now() : Date.now();
  return {
    status: "ready",
    engine: "elkjs-candidate",
    layoutMs: Math.round((t1 - t0) * 100) / 100,
    nodes: nodeBoxes,
    edges: edgePaths,
  };
}

async function computeFlatLayeredLayout(
  block: RelationsBlock,
  sizes: NodeSizeMap | undefined,
  elk: InstanceType<typeof ELK>,
  t0: number,
  opts: { direction: "DOWN" | "RIGHT"; partitioning: boolean },
): Promise<DirectedLayoutResult> {
  const partitions = opts.partitioning
    ? (() => {
        const lanes: string[] = [];
        const map = new Map<string, number>();
        for (const n of block.nodes) {
          const lane = n.laneId?.trim() || "_default";
          let idx = lanes.indexOf(lane);
          if (idx < 0) {
            idx = lanes.length;
            lanes.push(lane);
          }
          map.set(n.id, idx);
        }
        return map;
      })()
    : null;

  const children = block.nodes.map((n) => {
    const dim = sizeOf(n.id, sizes);
    const layoutOptions: Record<string, string> | undefined = partitions
      ? { "elk.partitioning.partition": String(partitions.get(n.id) ?? 0) }
      : undefined;
    return {
      id: n.id,
      width: dim.width,
      height: dim.height,
      layoutOptions,
    };
  });

  const layoutOptions: Record<string, string> = {
    "elk.algorithm": "layered",
    "elk.direction": opts.direction,
    "elk.spacing.nodeNode": "28",
    "elk.layered.spacing.nodeNodeBetweenLayers": "56",
    "elk.edgeRouting": "ORTHOGONAL",
    "elk.layered.crossingMinimization.strategy": "LAYER_SWEEP",
    "elk.layered.nodePlacement.bk.fixedAlignment": "BALANCED",
    "elk.padding": "[top=8,left=8,bottom=8,right=8]",
  };
  if (partitions) {
    layoutOptions["elk.partitioning.activate"] = "true";
  }

  const res = await elk.layout({
    id: "root",
    layoutOptions,
    children,
    edges: block.edges.map((e, i) => ({
      id: `e${i}`,
      sources: [e.from],
      targets: [e.to],
    })),
  });
  const t1 = typeof performance !== "undefined" ? performance.now() : Date.now();

  return {
    status: "ready",
    engine: "elkjs-candidate",
    layoutMs: Math.round((t1 - t0) * 100) / 100,
    nodes: (res.children ?? []).map((c) => ({
      id: c.id,
      x: c.x ?? 0,
      y: c.y ?? 0,
      width: c.width ?? sizeOf(c.id, sizes).width,
      height: c.height ?? sizeOf(c.id, sizes).height,
    })),
    edges: (res.edges ?? []).map((e) => {
      const points: Array<[number, number]> = [];
      for (const s of e.sections ?? []) {
        points.push([s.startPoint.x, s.startPoint.y]);
        for (const b of s.bendPoints ?? []) points.push([b.x, b.y]);
        points.push([s.endPoint.x, s.endPoint.y]);
      }
      return {
        id: e.id,
        from: e.sources?.[0] ?? "",
        to: e.targets?.[0] ?? "",
        points,
        routing: "orthogonal" as const,
      };
    }),
  };
}

/**
 * Run ELK layered orthogonal layout.
 * Pass measured DOM sizes when available; falls back to defaults.
 */
export async function computeElkDirectedLayout(
  block: RelationsBlock,
  sizes?: NodeSizeMap,
): Promise<DirectedLayoutResult> {
  if (!block.nodes.length) {
    return {
      status: "unavailable",
      engine: "elkjs-candidate",
      reason: "TOPOLOGY_REFUSED",
      detail: "empty nodes",
    };
  }

  try {
    const elk = new ELK();
    const hint = block.layoutHint ?? "dependencies";
    const t0 = typeof performance !== "undefined" ? performance.now() : Date.now();

    if (hint === "parallelProcess") {
      return await computeParallelSwimlaneLayout(block, sizes, elk);
    }

    if (hint === "decisionTree") {
      return await computeFlatLayeredLayout(block, sizes, elk, t0, {
        direction: "DOWN",
        partitioning: false,
      });
    }

    return await computeFlatLayeredLayout(block, sizes, elk, t0, {
      direction: "DOWN",
      partitioning: false,
    });
  } catch (err) {
    return {
      status: "unavailable",
      engine: "elkjs-candidate",
      reason: "LAYOUT_FAILED",
      detail: err instanceof Error ? err.message : "layout failed",
    };
  }
}

/** @deprecated use computeElkDirectedLayout */
export async function tryElkDirectedLayout(
  block: RelationsBlock,
  sizes?: NodeSizeMap,
): Promise<DirectedLayoutResult> {
  return computeElkDirectedLayout(block, sizes);
}

```

### `projects/sfia-studio-next/web/src/components/figma/nora-composition/DirectedRelationBoard.tsx`

```ts
"use client";

/**
 * Directed relations — ELKjs production layout (Morris GO).
 * Measure real node boxes → ELK orthogonal → paint. Fallback: structured reading.
 */

import React, { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { GraphNodeCard } from "@/components/figma/nora-composition/GraphNodeCard";
import {
  computeElkDirectedLayout,
  type DirectedLayoutResult,
  type NodeSizeMap,
} from "@/domains/conversation/directed-layout";
import type { RelationsBlock } from "@/domains/conversation/visual-composition";

void React;

function edgeLabel(e: RelationsBlock["edges"][number]): string {
  if (e.relation === "condition_true") return e.label ? `Si oui — ${e.label}` : "Si oui";
  if (e.relation === "condition_false") return e.label ? `Si non — ${e.label}` : "Si non";
  if (e.relation === "sync") return e.label ? `Synchronisation — ${e.label}` : "Synchronisation";
  if (e.relation === "depends_on") return e.label ? `Dépendance — ${e.label}` : "Dépendance";
  return e.label || "puis";
}

function branchFor(
  nodeId: string,
  edges: RelationsBlock["edges"],
): "root" | "yes" | "no" | "then" | "gate" | undefined {
  const incoming = edges.filter((e) => e.to === nodeId);
  if (!incoming.length) return "root";
  if (incoming.some((e) => e.relation === "sync")) return "gate";
  if (incoming.some((e) => e.relation === "condition_true")) return "yes";
  if (incoming.some((e) => e.relation === "condition_false")) return "no";
  return "then";
}

export function DirectedRelationBoard({
  block,
  titleById,
}: {
  block: RelationsBlock;
  titleById: Map<string, string>;
}) {
  const hint = block.layoutHint ?? "dependencies";
  const reactId = useId();
  const markerId = `fig-nc-elk-arrow-${reactId.replace(/:/g, "")}`;
  const measureRootRef = useRef<HTMLDivElement>(null);
  const [layout, setLayout] = useState<DirectedLayoutResult | null>(null);
  const [measureKey, setMeasureKey] = useState(0);
  const lastWidthRef = useRef<number | null>(null);

  const testId =
    hint === "decisionTree"
      ? "nora-composition-decision-tree"
      : hint === "parallelProcess"
        ? "nora-composition-parallel"
        : "nora-composition-dependencies";

  const syncTargets = new Set(
    block.edges.filter((e) => e.relation === "sync").map((e) => e.to),
  );
  const gateId = [...syncTargets][0];

  const lanes =
    hint === "parallelProcess"
      ? (() => {
          const m = new Map<string, typeof block.nodes>();
          for (const n of block.nodes) {
            const lane = n.laneId?.trim() || "voie";
            const list = m.get(lane) ?? [];
            list.push(n);
            m.set(lane, list);
          }
          return m;
        })()
      : null;

  // Remeasure on container width changes (debounced via rAF, no RO loop).
  useEffect(() => {
    const el = measureRootRef.current?.parentElement;
    if (!el || typeof ResizeObserver === "undefined") return;
    let raf = 0;
    const ro = new ResizeObserver((entries) => {
      const w = entries[0]?.contentRect.width ?? 0;
      if (lastWidthRef.current != null && Math.abs(lastWidthRef.current - w) < 8) return;
      lastWidthRef.current = w;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setMeasureKey((k) => k + 1));
    });
    ro.observe(el);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  useLayoutEffect(() => {
    const root = measureRootRef.current;
    if (!root) return;
    const sizes: NodeSizeMap = {};
    for (const n of block.nodes) {
      const el = root.querySelector(`[data-measure-id="${CSS.escape(n.id)}"]`);
      if (el instanceof HTMLElement) {
        const r = el.getBoundingClientRect();
        sizes[n.id] = { width: r.width || 220, height: r.height || 72 };
      }
    }
    let cancelled = false;
    void (async () => {
      const result = await computeElkDirectedLayout(block, sizes);
      if (!cancelled) setLayout(result);
    })();
    return () => {
      cancelled = true;
    };
  }, [block, measureKey]);

  const engineAttr =
    layout?.status === "ready"
      ? "elkjs"
      : layout?.status === "unavailable"
        ? layout.reason === "LAYOUT_FAILED"
          ? "elk-failed"
          : "elk-unavailable"
        : "loading";

  const canvasW =
    layout?.status === "ready"
      ? Math.max(...layout.nodes.map((n) => n.x + n.width), 0) + 16
      : 0;
  const canvasH =
    layout?.status === "ready"
      ? Math.max(...layout.nodes.map((n) => n.y + n.height), 0) + 16
      : 0;

  return (
    <div
      className={`fig-nc-relations fig-nc-relations-${hint}`}
      data-testid={testId}
      data-layout-hint={hint}
      data-layout-engine={engineAttr}
      data-legacy-artisan="0"
      data-connectors={layout?.status === "ready" && layout.edges.length ? "1" : "0"}
      data-gate={gateId ?? ""}
      data-node-count={block.nodes.length}
      data-edge-count={block.edges.length}
    >
      {/* Hidden measure pass — real typography/box sizes for ELK */}
      <div
        ref={measureRootRef}
        className="fig-nc-measure-layer"
        aria-hidden
        data-testid="nora-composition-measure-layer"
        data-measure-width={hint === "parallelProcess" ? "168" : "280"}
        style={{ width: hint === "parallelProcess" ? 168 : 280 }}
      >
        {block.nodes.map((n) => (
          <div key={n.id} data-measure-id={n.id} className="fig-nc-measure-node">
            <GraphNodeCard
              node={n}
              branch={branchFor(n.id, block.edges)}
              emphasize={n.id === gateId}
            />
          </div>
        ))}
      </div>

      {layout?.status === "ready" ? (
        <div
          className="fig-nc-elk-canvas-wrap"
          data-testid="nora-composition-elk-wrap"
        >
        <div
          className="fig-nc-elk-canvas"
          data-testid="nora-composition-elk-canvas"
          style={{ width: canvasW, height: canvasH, position: "relative" }}
        >
          <svg
            className="fig-nc-elk-svg"
            width={canvasW}
            height={canvasH}
            viewBox={`0 0 ${canvasW} ${canvasH}`}
            data-testid={
              hint === "decisionTree"
                ? "nora-composition-tree-connectors"
                : hint === "parallelProcess"
                  ? "nora-composition-parallel-connectors"
                  : "nora-composition-deps-connectors"
            }
            aria-hidden
          >
            <defs>
              <marker
                id={markerId}
                markerWidth="8"
                markerHeight="8"
                refX="6"
                refY="3"
                orient="auto"
              >
                <path d="M0,0 L6,3 L0,6 Z" className="fig-comp-deps-arrowhead" />
              </marker>
            </defs>
            {layout.edges.map((e) => {
              if (e.points.length < 2) return null;
              const d = e.points
                .map((p, i) => `${i === 0 ? "M" : "L"} ${p[0]} ${p[1]}`)
                .join(" ");
              return (
                <path
                  key={e.id}
                  d={d}
                  className="fig-comp-deps-connector"
                  markerEnd={`url(#${markerId})`}
                  data-edge-key={e.id}
                  data-routing="orthogonal"
                />
              );
            })}
          </svg>
          {layout.nodes.map((box) => {
            const node = block.nodes.find((n) => n.id === box.id);
            if (!node) return null;
            return (
              <div
                key={box.id}
                className="fig-nc-elk-node"
                style={{
                  position: "absolute",
                  left: box.x,
                  top: box.y,
                  width: box.width,
                }}
                data-laid-x={Math.round(box.x)}
                data-laid-y={Math.round(box.y)}
                data-lane={node.laneId ?? ""}
              >
                <GraphNodeCard
                  node={node}
                  branch={branchFor(node.id, block.edges)}
                  emphasize={node.id === gateId}
                />
              </div>
            );
          })}
        </div>
        </div>
      ) : (
        <div className="fig-nc-relations-reading" data-testid="nora-composition-relations-reading">
          {lanes ? (
            <div className="fig-nc-parallel-lanes" data-testid="nora-composition-parallel-lanes">
              {[...lanes.entries()].map(([lane, nodes]) => {
                const isGate = gateId != null && nodes.some((n) => n.id === gateId);
                return (
                  <section
                    key={lane}
                    className={`fig-nc-parallel-lane${isGate ? " fig-nc-parallel-lane-gate" : ""}`}
                    data-lane={lane}
                    data-lane-role={isGate ? "gate" : "flow"}
                    data-testid={isGate ? "nora-composition-parallel-gate" : undefined}
                  >
                    <h4 className="fig-comp-parallel-lane-title">
                      {lane}
                      {isGate ? " · convergence" : ""}
                    </h4>
                    <div className="fig-nc-parallel-tasks">
                      {nodes.map((n) => (
                        <GraphNodeCard
                          key={n.id}
                          node={n}
                          branch={isGate ? "gate" : branchFor(n.id, block.edges)}
                        />
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          ) : (
            <div className="fig-nc-node-flow">
              {block.nodes.map((n) => (
                <GraphNodeCard key={n.id} node={n} branch={branchFor(n.id, block.edges)} />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Accessible relation list — always present; visually subdued when ELK paints */}
      <ul
        className={`fig-comp-deps-edges${layout?.status === "ready" ? " fig-nc-edges-a11y" : ""}`}
        data-testid={
          hint === "decisionTree"
            ? "nora-composition-tree-edges"
            : hint === "parallelProcess"
              ? "nora-composition-parallel-edges"
              : "nora-composition-relations-edges"
        }
        data-directed="1"
        aria-label="Relations dirigées"
      >
        {block.edges.map((e, i) => (
          <li key={`${e.from}-${e.to}-${i}`} data-relation={e.relation ?? "flow"}>
            <span className="fig-comp-deps-from">{titleById.get(e.from) ?? e.from}</span>
            <span className="fig-comp-tree-condition">{edgeLabel(e)}</span>
            <span className="fig-comp-deps-to">{titleById.get(e.to) ?? e.to}</span>
          </li>
        ))}
      </ul>

      {hint === "decisionTree" ? (
        <p className="fig-comp-authority-note">
          Les branches conditionnelles sont des propositions de lecture — aucune HumanDecision
          n&apos;est créée.
        </p>
      ) : (
        <p className="fig-comp-authority-note">
          La convergence graphique n&apos;enregistre aucune décision humaine ni validation.
        </p>
      )}
    </div>
  );
}

```

### `projects/sfia-studio-next/web/src/components/figma/NoraCompositionGraphs.tsx`

```ts
"use client";

/**
 * LEGACY MODULE — artisan measured-SVG layouts retired from production.
 * Re-exports the C2-08 probe from its dedicated module for any residual imports.
 * Do not reintroduce artisan layout engines here.
 */

export { E2eCompositionThrowProbe } from "@/components/figma/E2eCompositionThrowProbe";

```


---

## 18. Instruction ChatGPT

Lire depuis Git `sfia-review-handoff/latest-chatgpt-review.md` sur `sfia/review-handoff`, vérifier le commit et le blob distants, examiner les nouveaux composants, l'intégration ELKjs effective, le remplacement E05, les neuf réalisations Figma, les diffs, les tests et les captures navigateur. Rejeter tout verdict de conformité reposant uniquement sur des composants présents ou des tests DOM. Identifier les écarts réels de qualité graphique et distinguer construction, couverture, comportement prouvé, réception Morris et Gate C.

---

## 19. Verdict final unique

**`READY FOR CHATGPT REVIEW — COMPLETE IMPLEMENTATION CANDIDATE`**

Construction demandée substantiellement complète en DEV : ELK produit actif, neuf familles couvertes, G07–G09 browser-proven, E05 artisan hors chemin principal, T02+C2-08 PASS, preuves inspectables en worktree.
**N'est pas** réception Morris, Gate C, ADOPTED, release ou STABLE.
