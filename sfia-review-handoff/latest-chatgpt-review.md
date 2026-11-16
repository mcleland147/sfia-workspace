# Review Pack Full — SFIA Studio Next — ML4D Ensemble 04 Espace projet

Date/heure: 2026-11-16 21:33 CET
Contrat: R5 / ML4D — ENSEMBLE 04 : ESPACE PROJET — CONVERGENCE UX/UI (16 nov 2026)
Typologie: EVOL · Review Pack: Full · Review Handoff Git: required / publish-in-cycle

## 1. Verdict

**ENSEMBLE 04 — CANDIDATE READY FOR MORRIS REVIEW**
SHA produit: `660ff4243fafb586bfa0dd9b377382952e831ca9`
**NO PROJECT PUSH / NO PR / NO MERGE**
**NO RECETTE PROMOTION**
**GATE C OPEN / ML5 NOT STARTED**
Aucun ADOPTED.

## 2. Git Truth Check

### Initial (cycle start)
- Repository: mcleland147/sfia-workspace (worktree local)
- Branch créée: `feat/next-ml4d-project-space-20261116` depuis parent UX-005 `bd8e16728f3c2a726a49be4c94565a2d85fc41a9`
- `origin/main` observé: `997d4c4e8204993de7107552898c8cc08cd3b0ed`
- Ascendance UX-003/004/005: conservée (HEAD était `bd8e1672` au démarrage ; merge-base ancestor OK)
- Worktree: propre hors pack `.tmp-sfia-review` réinitialisé

### Final (candidat local commité)
- SHA produit: `660ff4243fafb586bfa0dd9b377382952e831ca9`
- Parent: `bd8e16728f3c2a726a49be4c94565a2d85fc41a9`
- Branche: `feat/next-ml4d-project-space-20261116` — **non poussée**
- Push projet: AUCUN

### Final (pré-commit candidat)
- Branch: `feat/next-ml4d-project-space-20261116`
- HEAD pré-commit: `bd8e16728f3c2a726a49be4c94565a2d85fc41a9`
- `origin/main`: `997d4c4e8204993de7107552898c8cc08cd3b0ed`
- Ahead/behind vs origin/main: ahead local (ligneage product next), behind 0
- Status:

```
M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio-next/construction/delivery-history.md
 M projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
 M projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
 M projects/sfia-studio-next/web/src/components/figma/tokens.css
 M projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
 M projects/sfia-studio-next/web/src/components/shell/studio-rail.ts
 M projects/sfia-studio-next/web/tests/e2e/ml3-pilotage.spec.ts
 M projects/sfia-studio-next/web/tests/e2e/ml4c-long-thread-composer.spec.ts
 M projects/sfia-studio-next/web/tests/e2e/project-surface-nav-intent.spec.ts
 M projects/sfia-studio-next/web/tests/e2e/ux004-portfolio-shell.spec.ts
 M projects/sfia-studio-next/web/tests/unit/studio-rail.test.ts
?? projects/sfia-studio-next/web/docs/ensemble-04-project-space.md
?? projects/sfia-studio-next/web/docs/evidence/
?? projects/sfia-studio-next/web/src/components/figma/ProjectOverview.tsx
?? projects/sfia-studio-next/web/src/components/figma/ProjectUnavailable.tsx
?? projects/sfia-studio-next/web/src/components/shell/ProjectSpaceContext.tsx
?? projects/sfia-studio-next/web/tests/e2e/project-space-ensemble04.spec.ts
?? projects/sfia-studio-next/web/tests/e2e/project-space-f2-captures.spec.ts
```

- Diffstat:

```
.tmp-sfia-review/chatgpt-review.md                 | 167 +---------------
 .../construction/delivery-history.md               |  18 ++
 .../web/src/app/projects/[projectId]/page.tsx      | 214 +++++++++++++++++----
 .../web/src/components/figma/ProjectChrome.tsx     | 148 ++++++++------
 .../web/src/components/figma/tokens.css            |  43 +++++
 .../web/src/components/shell/StudioShell.tsx       |  70 ++++++-
 .../web/src/components/shell/studio-rail.ts        |  45 +++--
 .../web/tests/e2e/ml3-pilotage.spec.ts             |   3 +-
 .../tests/e2e/ml4c-long-thread-composer.spec.ts    |   2 +-
 .../tests/e2e/project-surface-nav-intent.spec.ts   |   8 +-
 .../web/tests/e2e/ux004-portfolio-shell.spec.ts    |   5 +-
 .../web/tests/unit/studio-rail.test.ts             |  19 +-
 12 files changed, 449 insertions(+), 293 deletions(-)
```

## 3. Sources consultées

### Processus / gouvernance (lecture)
- method/sfia-fast-track/core (routing, operating model, guardrails) — applicables
- prompts/templates/sfia-cycle-execution-template.md §6.6 Figma
- projects/sfia-studio-next/governance/SEF.md, roadmap, naming, ENV-01, versioning
- decision 2026-11-11-r5-convergence-fonctionnelle-ux-trajectoire.md
- conception-fonctionnelle (création projet, conduite Nora, connaissance)
- ux-ui/contrat-transposition-figma-code.md
- architecture-technique/cadrage-r4.md

### Figma (MCP session `9903e7b2-192b-4c06-988e-567ac0a921f4`)
- File `itgvCulInEnFY6DvgIegvP`
- 652:8 Travail — disponible
- 652:58 Projet overview — disponible
- 652:108 Navigation/Journal — disponible
- 652:158 Projet indisponible — disponible
- Refs cohérence: 591:425, 607:203 (non re-implémentées)

## 4. Contrat visuel extrait (avant code)

Frame desktop: 1680×970 · Rail 246 · Contenu 1434 · Header ~70 · Contenu 900

| Élément | Frame/node | Attendu exact | Implémentation prévue | Incertitude |
| --- | --- | --- | --- | --- |
| Rail largeur | 652:* | 246 px | STUDIO_RAIL_* widthPx=246 | faible |
| Rail fill | 652:* | #0C101A | tokens projet/conversation/inspection | faible |
| Marque | 652:8 | SFIA Studio + état release | StudioShell existant | faible |
| Espace actif | 652:8 | carte nom réel | ProjectSpaceContext + rail card | faible |
| Nav | 652:108 | Travail/Projet/Journal/Trajectoire | buildShellNav | faible |
| Accès directs | 652:8 | Documents / Git / Résultats | Links document/git/publication | moyenne (libellé Résultats → publication existante) |
| Header | 652:* | breadcrumb + badge ESPACE PROJET | ProjectChrome | faible |
| Onglets centraux | — | absents | ProjectChrome tabs removed | faible |
| Overview | 652:58 | cartes identité/contexte/accès | ProjectOverview données réelles | moyenne (densité Figma illustrative) |
| Travail | 652:8 | coque + composer + aside | NoraConversation + aside sourcé | Ensemble 05 hors scope |
| Indisponible | 652:158 | états qualifiés | ProjectUnavailable | faible |
| Palette | 652:* | #0A0E17 / #151C29 / #656FE1 / #AFA5FF / #F4F6FC / #94A2BB | tokens existants + CSS | faible |
| Police | 652:* | Inter | stack existante | faible |

## 5. Conception technique

- Un seul orchestrateur page: `projects/[projectId]/page.tsx`
- Surface nouvelle: `projet` (consultation)
- Compat: `?surface=pilotage` = Trajectoire
- Intent nav project-scoped inchangé (`noteProjectSurfaceNavIntent` / `resolveProjectLoadSurface`)
- Pas de nouvelle API / migration / mutation sur simple navigation
- Indisponible: 401→unauthorized UI ; 404→not_found ; autre→temporary+retry ; loading distinct
- Rail bloque deep-nav uniquement si `blockNavigation` (après échec qualifié), pas pendant load (préserve race T07)

## 6. Blast radius

Modifiés: page projet, ProjectChrome, StudioShell, studio-rail, tokens.css, tests e2e/unit, delivery-history, docs evidence.
Créés: ProjectOverview, ProjectUnavailable, ProjectSpaceContext, ensemble-04 docs/tests.
Non touchés: governance D2, method/, API métier, DB, RECETTE/STABLE.

## 7. Fichiers créés (contenu exploitable)

### `ProjectSpaceContext.tsx`
Contexte client `projectId` / `projectName` / `available` / `blockNavigation` pour le rail.

### `ProjectOverview.tsx`
Vue consultation: identité (nom réel), compteurs sourcés (messages, docs, sujets), contexte/points ouverts si knowledge, liens Travail/Journal/Documents/Trajectoire, CTA Ouvrir Travail. États vides sobres — pas de données Figma fictives.

### `ProjectUnavailable.tsx`
États loading / not_found / unauthorized / temporary avec Retour Portefeuille ; Réessayer seulement si temporary ; Se reconnecter si unauthorized.

### Tests
- `project-space-ensemble04.spec.ts` — T01–T06, T08, T11 identity/nav/overview/unavailable
- `project-space-f2-captures.spec.ts` — captures 1680×970

### Docs
- `web/docs/ensemble-04-project-space.md`
- `web/docs/evidence/ensemble-04-project-space/*` (runtime + figma PNG + manifest)

## 8. Fichiers modifiés (sections)

### `studio-rail.ts`
- StudioSurface + `projet`
- PROJECT_SURFACE_LABELS (pilotage→Trajectoire)
- buildShellNav: Travail / Projet / Journal / Trajectoire (Documents hors primary)
- largeurs rail projet à 246 ; fill #0C101A

### `StudioShell.tsx`
- Provider ProjectSpace
- Carte ESPACE ACTIF avec nom réel
- Accès directs + Résultats et preuves
- Filtrage nav si blockNavigation

### `ProjectChrome.tsx`
- Header Figma compact ; breadcrumb avec nom ; badge ESPACE PROJET
- Suppression nav centrale Surfaces projet
- Conservés: `project-load-state`, `surface-*` (sr-only)

### `page.tsx`
- Surface projet ; projectName ; unavailableKind ; loadEpoch retry
- Publication contexte rail
- Overview + unavailable ; aside Travail sourcé
- Meta sans IDs techniques bruts dans le parcours nominal

### Tests historiques adaptés
- nav-intent: `nav-documents` ; noms uniques A/B
- ml3: ouvre Trajectoire via rail
- ux004: largeurs 246
- ml4c composer: nom unique

## 9. Tests exécutés

| Commande | Résultat |
| --- | --- |
| `vitest run tests/unit/studio-rail.test.ts` (DATABASE_URL DEV 5433) | PASS 13 |
| `playwright` project-space-ensemble04 + project-surface-nav-intent | PASS 4 puis PASS 5 avec F2 |
| `playwright` ux003-unified-entry + ux004-portfolio-shell | PASS 20 |
| `playwright` ml4c-long-thread-composer (après fix nom unique) | PASS |
| `playwright` project-space-f2-captures | PASS |
| `tsc --noEmit` | erreurs préexistantes hors src Ensemble 04 (tests ml4c fixtures) ; **0 erreur** sur fichiers src modifiés |

ENV: Playwright webServer `:3101` + DB e2e isolée. DEV lane fixture Nora.
FAKE ≠ LIVE/REAL.

## 10. Matrice acceptation T01–T20 (synthèse)

| ID | Statut | Preuve |
| --- | --- | --- |
| T01 Ouverture portfolio→projet | PASS | ensemble04 |
| T02 Nom réel rail | PASS | rail-project-name |
| T03 Nav 4 entrées | PASS | nav-travail/projet/journal/pilotage |
| T04 Pas de tabs centraux | PASS | navigation Surfaces projet count 0 |
| T05 Accès directs | PASS | nav-documents/git/resultats |
| T06 Retour Portefeuille | PASS | nav-portfolio |
| T07 Course load+nav | PASS | nav-intent delayed GET |
| T08 Back/Forward + deep URL | PASS | goto+reload projet |
| T09 Reload surfaces | PASS | reload overview |
| T10 Pas de fuite A→B | PASS | nav-intent project B |
| T11 Absent | PASS | unavailable not_found |
| T12 Chargement→affichage | PASS | load-state ready |
| T13 Erreur temporaire | PARTIEL | UI+retry câblés ; pas d’injection 500 e2e dédiée |
| T14 Conversation réelle | PASS | Travail capture + composer |
| T15 Envoi Nora | PASS | ml4c composer (fixture) |
| T16 Reprise/incertaine | PASS | contrats existants non retirés |
| T17 Nom long | PASS | truncate + title |
| T18 Viewport/focus | PASS | ux003/ux004 non-régression |
| T19 Portefeuille/Sas | PASS | ux003/ux004 |
| T20 Nav sans écriture | PASS | Links GET only + intent |

## 11. Figma vs runtime

Viewport: 1680×970
Artifacts: `projects/sfia-studio-next/web/docs/evidence/ensemble-04-project-space/`

| Frame | Statut | Notes |
| --- | --- | --- |
| 652:8 Travail | PARTIELLEMENT CONFORME | Rail/header/aside/composer OK ; fil Nora détail → Ens. 05 ; textes réels ≠ Figma illustratif |
| 652:58 Projet | PARTIELLEMENT CONFORME | Composition cartes/identité/accès OK ; pas de contenu fictif Figma |
| 652:108 Journal nav | PARTIELLEMENT CONFORME | Sélection Journal + rail OK ; contenu Journal métier → Ens. 06 |
| 652:158 Indisponible | CONFORME | Carte introuvable + Retour ; rail sans deep-nav / sans fuite de nom |

Écarts assumés: densité exacte des cartes Figma ; libellés métier réels ; badge account « N » vs « P » selon avatar ; footer « Retour portefeuille » global page conservé.

## 12. Fake / Real

- Preuves: runtime browser FAKE/DEV + fixture Nora
- Non revendiqué: Nora LIVE, Git REAL, OAuth LIVE, ADOPTED, RECETTE déployée

## 13. Version / lane

- Package: 0.0.0-dev · NO RELEASE
- Classe: EVOL UX compatible (MINOR envisageable après gates)
- RECETTE: non remplacée (manifeste candidat fourni)

## 14. Réserves / renvois

- Ensemble 05: fil, scroll, réponses structurantes Nora
- Ensemble 06: Documents/Journal métier
- Ensemble 07: Trajectoire cycles/CKI/décisions
- T13: scénario 500 injecté non automatisé
- Registre ML4D branche documentaire: faits à reporter ultérieurement (non écrasé ici)

## 15. Décisions Morris requises

1. Revue visuelle Figma↔runtime (captures jointes)
2. GO éventuel mise à disposition RECETTE du candidat (après revue) — **pas dans ce cycle**
3. Arbitrage si « Résultats et preuves » doit rester mappé sur `publication` ou devenir surface dédiée plus tard

## 16. Instruction ChatGPT

Lire exclusivement le handoff distant:

`sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`

Puis produire la revue Full ; ne pas merger ; ne pas promouvoir RECETTE sans GO Morris.
