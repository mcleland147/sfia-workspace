# As-built — Ensemble 06 / Journal V4

| Métadonnée | Valeur |
|---|---|
| Date | 19/11/2026 — pixel-perfect corrective UX |
| Branche | `sfia/next-journal-delivery-20261119` |
| Parent candidat RECETTE | `d5bf7eb762a21cc309744bb703926e2c0bc844ed` |
| Base `main` | `d3d199adb782462b93467934f5f1e8a0c98fb492` |
| Docs matrice | v0.7 §18 (`f0d2d033` documentaire) |
| Versioning | `NO RELEASE` / STABLE NOT AVAILABLE |
| RECETTE | **non cutover** — DEV uniquement |

## Correctif pixel-perfect (présent cycle)

### Priorités Morris traitées

| Constat | Correction |
|---|---|
| Visionneuse 40/60 trop basse (`min-height: 640`) | Shell journal remplit la hauteur ; viewer `784px` stretch (`align-self: stretch`, `height: 100%`) |
| Liseré `box-shadow inset` générique | Pseudo-éléments Figma : bandeau 3×112 ; synthèse 3×69 ; CTA 3×29 |
| Captures parent ≈ autonome | Compositions distinctes : parent = cartes numérotées sous-sujets ; autonome = acquis/points |
| Agrandi = colonne unique | Grille article 936 + aside 374 ; aside REPÈRES |
| Recherche = arbre filtré | Liste de correspondances (titre / chemin / raison) |
| Points ouverts = bouton seul | Liste transversale des points + origine |
| `decisionStatusLabel` confond remplacée / non applicable | REMPLACÉE seulement si `supersededByDecisionId` |
| Shell main scroll | `data-journal-layout=1` sur StudioShell (comme Travail) |

### Fichiers touchés

- `web/src/components/figma/ProjectJournal.tsx`
- `web/src/components/figma/tokens.css`
- `web/src/components/shell/StudioShell.tsx`
- `web/src/components/shell/studio-shell.css`
- `web/tests/e2e/journal-v4-figma-captures.spec.ts` — oracles discriminants parent/autonome/géométrie
- `web/tests/e2e/journal-v4-parcours.spec.ts`

### Géométrie Figma (842:26)

| Élément | Figma | Runtime cible |
|---|---|---|
| Viewer | 830,95 · 784×832 | `784px` largeur · hauteur stretch zone dispo |
| Compact Journal | 526px | `--journal-compact-w: 526px` |
| Gap | 20px | `--journal-split-gap: 20px` |
| Liseré bandeau | 3×112 @ +29px | `::before` |

### Preuves

| Contrôle | Résultat |
|---|---|
| tsc | PASS |
| unit journal + fixture-gate | 14/14 PASS |
| Playwright captures + parcours | 3/3 PASS |
| Captures 00–11 | `.tmp-sfia-review/figma-ux-after/` |
| Parent ≠ autonome | titres distincts dans `capture-report.json` |
| RECETTE cutover | **NON** |

## Autorité

- D6 non muté depuis Journal
- Aucun faux contenu en DB RECETTE
- Aucun push produit / PR / merge
