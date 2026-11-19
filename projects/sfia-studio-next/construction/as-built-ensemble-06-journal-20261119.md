# As-built — Ensemble 06 / Journal V4

| Métadonnée | Valeur |
|---|---|
| Date | 19/11/2026 — correctif UX Figma-to-runtime |
| Branche | `sfia/next-journal-delivery-20261119` |
| Parent candidat RECETTE | `d5bf7eb762a21cc309744bb703926e2c0bc844ed` |
| Base `main` | `d3d199adb782462b93467934f5f1e8a0c98fb492` |
| Docs matrice | v0.6 §17 (`864e09bf` documentaire) |
| Versioning | `NO RELEASE` / STABLE NOT AVAILABLE |
| RECETTE | **non cutover** ce cycle — candidat DEV pour GO Morris |

## Correctif UX (présent cycle)

### Non-conformités Morris corrigées

| Constat | Correction |
|---|---|
| Titre « Sujets et acquis » | `ProjectChrome` journal → hero déplacé ; titre **Journal** dans `ProjectJournal` |
| Textes D4/D6 techniques | Supprimés de l’UI Pilote |
| Viewer vide permanent | Mode exploration pleine largeur sans panneau idle |
| Arborescence non Figma | Hiérarchie éditoriale groupes/enfants, guides, blurbs |
| Copy hors cible | Sous-titre Figma exact Sujets / Décisions |

### Fichiers touchés

- `web/src/components/figma/ProjectJournal.tsx` — shell V4
- `web/src/components/figma/tokens.css` — styles 835:71 / 842 / 860
- `web/src/components/figma/ProjectChrome.tsx` — breadcrumb-only Journal
- `web/src/app/projects/[projectId]/page.tsx` — deep-link nav + fetch Journal sans cancel race
- `web/tests/e2e/journal-v4-*.spec.ts` — parcours + captures

### Anomalie CampusFlow (provenance)

| Champ | Valeur |
|---|---|
| projectId | `proj_1b52eb8f-3c63-4c72-a4dd-a47f34e1bb4d` |
| project name | CampusFlow |
| owner_pilot_id | `pilot_98a7a89e-ba00-42c6-84d5-680eff67b73c` |
| subjectId | `subj_8eb4e9ce-3922-4c27-a16b-cfc0c817b912` |
| title | fragment conversationnel (« la première source Git… SHA… ») |
| summary | vide |
| Classification | **A — contenu légitime mal présenté** (titre D4 = extrait de fil) |
| Fuite interprojets | **NON** — même projet / même Pilote |

## Preuves

| Contrôle | Résultat |
|---|---|
| tsc | PASS |
| unit journal + fixture-gate | 14/14 PASS |
| Captures DEV 1680×970 (11 frames) | produites sous `.tmp-sfia-review/figma-ux-after/` |
| Playwright parcours | voir Review Pack (retries / réserves J-C14) |
| RECETTE cutover | **NON** — GO Morris requis |
| VISUAL REVIEW Morris | **PENDING** |

## Autorité

- D6 non muté depuis Journal
- Aucun faux contenu en DB RECETTE
- Aucun push produit / PR / merge
