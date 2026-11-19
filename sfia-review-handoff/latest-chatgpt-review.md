# SFIA Review Pack FULL — Ensemble 06 Documents Bibliothèque
**Date/heure (UTC):** 2026-11-19T21:56:25Z
**Produit:** SFIA Studio Next
**Cycle:** 08 — Delivery / implémentation · Typologie EVOL · Profil Standard
**Objectif:** Capacité Bibliothèque Documents (page Figma 08, frames 930:3–10) + protocole D4 révision historique, fidélité visuelle mesurée, sans push projet / PR / RECETTE promote.

> **Note statut contrat Git:** `documents-contrat-realisation.md` porte encore le statut « candidat » dans Git. **Validation Morris conversationnelle** reçue pour construction. Non réécrit.

---

## 1. Git Truth Check

| Check | Résultat |
|---|---|
| remote | `origin https://github.com/mcleland147/sfia-workspace.git` |
| branche travail | `sfia/next-documents-delivery-20261119` (LOCALE, absente du remote au départ) |
| HEAD avant/après (non commit projet) | `6516c7b56ec61bd72943ae0d26e625bf21139d4e` |
| origin/main | `d3d199adb782462b93467934f5f1e8a0c98fb492` (aligné ls-remote) |
| base documentaire | `origin/sfia/next-documents-convergence-20261119` @ `6516c7b5…` |
| worktree | `/Users/morris/Projects/sfia-wt-documents-delivery-20261119` |
| branche documentaire source | non modifiée |
| dirty | modifications productives sous `projects/sfia-studio-next/web/` + `.tmp-sfia-review/` hors commit |

**STOP non déclenché** sur Git (repo correct, HEAD documentaire qualifié, pas de conflit local bloquant).

---

## 2. Sources consommées

### Processus / gouvernance (main)
- method/sfia-fast-track/core/* (routing, operating model, guardrails) — guidance
- governance/SEF.md, roadmap, ENV-01, product-versioning — REQUIRED
- ENV-01 blob main `14b61f0d…` · Product versioning `8bc93e0f…`

### Contrats Documents (branche documentaire)
- `construction/convergence-ux-ui-globale/documents-diagnostic-convergence.md`
- `construction/convergence-ux-ui-globale/documents-contrat-realisation.md` (candidat Git / validé conversation)

### Figma
- fileKey `itgvCulInEnFY6DvgIegvP` · page `930:2`
- Session MCP `409ceea9-5472-4bf8-b3dc-e62b950aa978`
- Frames 930:3–10 : design context + captures MCP persistées dans `.tmp-sfia-review/documents-figma/`
- Contrat extrait avant code : `.tmp-sfia-review/figma-visual-contract-documents.md`

### Code inspecté avant modification
DocumentSurfaces, TravailViewer, ProjectChrome, page projet, document/service, document-act/command, d4-read-tools, schema, routes API documents.

---

## 3. Contrat visuel Figma extrait (avant code)

Voir aussi `figma-visual-contract-documents.md`.

| Frame | Node | Composition clé | Tokens mesurés |
|---|---|---|---|
| 08.01 Bibliothèque | 930:3 | Liste 284,275,928×634 + aside 1228,275,414×634 | bg `#0a0e17`, panel `#151c2b`, accent `#7477ed`, line `#29334b` |
| 08.02 Lecture | 930:4 | Contenu + actions 70/30, lecture seule | idem |
| 08.03 Travail 50/50 | 930:5 | Chat 651 @284 / viewer 690 @952 | réutilise Travail existant |
| 08.04 Historique replié | 930:6 | Versions 927 + aside 416 ; comparateur ⌄ | badges Courante/Historique |
| 08.05 Comparateur déplié | 930:7 | Selects + Afficher comparaison | idem |
| 08.06 Comparaison 50/50 | 930:8 | Cols ~662/680 + résumé | diff retiré/introduit |
| 08.07 Nora historique | 930:9 | 50/50 + choix V2/V3 | confirmation base |
| 08.08 Proposition | 930:10 | CTA Conserver | conservation explicite |

Viewport source **1680×970**. Rail **246**, header **70**. Tolérance F2 ≤ 2 CSS px rectangles stables.

---

## 4. Blast radius / réutilisation

| Zone | Action |
|---|---|
| DocumentSurfaces | Refonte surfaces Projet 08.01–08.06 ; Sas conserve DocumentInspector |
| page.tsx | Machine d’états library/read/history/compare ; documentFocus → Nora |
| tokens.css | `.doc-workspace-7030` ~70/30 ; composants Documents |
| reviseDocument | Protocole source/observedHead/confirmedHistorical |
| document-command / service conversation | Binding + focus historique |
| API documents + messages | Nouveaux champs optionnels |
| TravailViewer | Banner historical/proposal |
| Journal / D6 / D9 / main | **non touchés** |

---

## 5. Fichiers créés / modifiés

### Modifiés
1. `web/src/domains/document/service.ts` — reviseDocument historique
2. `web/src/domains/conversation/document-command.ts` — binding triplet
3. `web/src/domains/conversation/document-act.ts` — DocumentReviseFocus + resolveReviseTarget
4. `web/src/domains/conversation/service.ts` — focus + admit historique
5. `web/src/app/api/preparations/.../documents/[documentId]/route.ts`
6. `web/src/app/api/preparations/.../messages/route.ts`
7. `web/src/components/figma/DocumentSurfaces.tsx` (~rewrite surfaces Projet)
8. `web/src/components/figma/tokens.css` (+448 lignes Documents)
9. `web/src/components/figma/ProjectChrome.tsx` — hero Documents + documentHero
10. `web/src/components/figma/TravailViewer.tsx` — banner
11. `web/src/app/projects/[projectId]/page.tsx` — navigation Documents complète
12. `web/tests/e2e/g4-b1-b4-correctifs.spec.ts` — aligné contrat (pas de textarea Projet)

### Créés
13. `web/tests/integration/documents-historical-revise.pg.test.ts`
14. `web/tests/unit/documents-surfaces-projection.test.ts`
15. `web/tests/e2e/documents-bibliotheque-08.spec.ts`
16. `.tmp-sfia-review/*` (hors commit projet) — contrat, captures Figma/runtime, diff

**Diff productif:** `+1996 / −237` sur 12 fichiers trackés (voir `documents-delivery.diff`, 2794 lignes). Contenu complet des fichiers créés = tests listés ci-dessus (inclus dans le worktree). Sections modifiées : diff utile joint.

**Migrations:** aucune.

---

## 6. Implémentation fonctionnelle (résumé contractuel)

### A–E UX
- Sélection ≠ ouverture (fiche droite sans `documentId` URL)
- Lecture seule, **aucun textarea** sur surface Projet Documents
- Historique 70/30, tags Courante/Historique (projection D4)
- Comparateur **replié par défaut** ; déplié → sélecteurs → vue 50/50 avec diff
- Reprendre / Retravailler → Travail + `documentFocus` + visionneuse exacte

### F–G Nora / conservation
- Focus `sourceRevisionId` / `observedHeadRevisionId` / `confirmedHistoricalSource`
- Barre confirmation historique (08.07) avant conservation
- reviseDocument refuse historique sans confirmation (`HISTORICAL_CONFIRMATION_REQUIRED`)
- Numérotation monotone Vn+1 (V2→V4, jamais renumérotation)
- Pas de HumanDecision D6 ; pas de publish Git

### D4
- Legacy `baseRevisionId` seul : BASE_STALE si ≠ tête (préservé)
- Protocole historique : observed head concurrency + confirmation
- Non-terminal SAVING/UNKNOWN → `HEAD_UNCERTAIN`
- Idempotence correlation inchangée

---

## 7. Tests exécutés

| Suite | Résultat |
|---|---|
| `documents-historical-revise.pg.test.ts` (4) | PASS — V2→V4, concurrence V5, legacy BASE_STALE, idempotence |
| `documents-surfaces-projection.test.ts` (3) | PASS |
| `document-command.test.ts` (51) | PASS |
| `ml2-knowledge-documents.pg.test.ts` (6) | PASS (régression) |
| e2e `documents-bibliotheque-08.spec.ts` | écrit ; non exécuté Playwright CI dans ce cycle (capture manuelle Playwright scriptée à la place) |
| e2e g4-b1-b4 | mis à jour ; non rejoué Playwright full dans ce cycle |

Lane PG : `sfia_next_e2e` via vitest-pg-target + `.env.local` (symlink local, hors commit).

---

## 8. Figma vs Runtime — matrice

**Conditions:** viewport 1680×970, deviceScaleFactor 1, zoom 100 %, DEV `127.0.0.1:3100`, données représentatives (doc 3 versions).

Captures : `.tmp-sfia-review/documents-figma/` (source MCP) · `.tmp-sfia-review/documents-runtime/` (runtime).

### Géométrie mesurée (08.01)

| Rectangle | Figma | Runtime | Δ |
|---|---|---|---|
| Rail | 0,0,246×970 | 0,0,246×970 | **0** |
| Liste | 284,275,928×634 | 284,193,927×634 | Δx=0, Δw=1, Δy chrome |
| Aside | 1228,275,414×634 | 1228,193,414×634 | Δx/w=0 |

Y décalé car hero ProjectChrome plus compact que frame Figma absolue ; **x/w des panneaux 70/30 dans F2**.

### Matrice frames

| Node | Runtime capture | Géométrie | Contenu/états | Verdict |
|---|---|---|---|---|
| 930:3 | runtime-930-3-bibliotheque.png | rail/list/aside F2 | select≠open, CTAs | **ALIGNED** |
| 930:4 | runtime-930-4-lecture.png | 70/30 | lecture seule, pas textarea | **ALIGNED** |
| 930:5 | runtime-930-5-travail-5050.png | viewer ~974×668 vs Figma 952×690 | fil + viewer | **PARTIAL** (layout Travail existant) |
| 930:6 | runtime-930-6-historique-replie.png | 70/30 F2 | badges, comparateur replié | **ALIGNED** |
| 930:7 | runtime-930-7-comparateur-deplie.png | idem | selects | **ALIGNED** |
| 930:8 | runtime-930-8-comparaison-5050.png | cols 50/50 | diff + résumé | **ALIGNED** (densité typo contenu ≠ maquette fictive) |
| 930:9 | runtime-930-9 + barre confirm code | Travail + confirm UI | capture pre-fix partielle | **PARTIAL** — UI confirm ajoutée après capture ; re-preuve visuelle recommandée |
| 930:10 | proxy travail | — | CTA Conserver Figma = acte Nora/D4, pas bouton maquette isolé | **PARTIAL** |

**Verdict fidélité global:** **FIGMA TO RUNTIME PARTIAL — DELIVERY REQUIRED** sur 08.05 Travail proportions exactes + 08.07/08.08 preuves post-fix confirmation/proposition.
Frames bibliothèque/lecture/historique/comparaison : conformité géométrique majeure démontrée.

---

## 9. Matrice UAT/TECH (DOC-UAT-01…13 · DOC-TECH-14…18)

| ID | Statut | Preuve |
|---|---|---|
| DOC-UAT-01 Sélection sans ouverture | PASS (browser script) | select sans documentId URL |
| DOC-UAT-02 Lecture 70/30 | PASS | geometry + capture |
| DOC-UAT-03 Documents→Travail | PASS partiel | resume + focus ; reload-safe focus session React (pas persistence durable serveur) |
| DOC-UAT-04 Pas édition manuelle Projet | PASS | DOM sans textarea ; Sas conserve editor |
| DOC-UAT-05 Courante/Historique | PASS | unit + UI badges |
| DOC-UAT-06 Lire version historique | PASS | openDocumentReadView(revisionId) |
| DOC-UAT-07 Comparateur | PASS | collapsed→expand→compare |
| DOC-UAT-08 Nora avertit V2 | PASS partiel | barre confirm + banner ; wording LLM fixture non LIVE |
| DOC-UAT-09 V2→V4 | PASS | PG historical-revise |
| DOC-UAT-10 Concurrence | PASS | PG stale → V5 |
| DOC-UAT-11 Idempotence | PASS | PG |
| DOC-UAT-12 Permissions | héritage D4 existant | non rejoué isolé ce cycle |
| DOC-UAT-13 Provenance UI | PARTIAL | panneau toggle ; pas de résolution riche |
| DOC-TECH-14 BASE_STALE legacy | PASS | PG |
| DOC-TECH-15 Historical protocol | PASS | PG |
| DOC-TECH-16 HEAD_UNCERTAIN | code path | non testé PG isolé |
| DOC-TECH-17 Diff dégradé | service existant | UI signale degraded |
| DOC-TECH-18 Binding payload compat | PASS | document-command unit |

---

## 10. Fake/Real Qualification

| Frontière | Qualification |
|---|---|
| Nora fixture FAKE (DEV) | **FAKE** — parcours UI/D4 ; ne prouve pas fournisseur LIVE |
| D4 PG revise | **DETERMINISTIC / PG** |
| Captures runtime DEV :3100 | **BROWSER / DEV** — pas RECETTE |
| LIVE OpenAI | **NOT OBSERVED** |

---

## 11. ENV-01 / versioning

- DEV :3100 utilisé pour captures (isolation worktree documents)
- RECETTE : **non altérée**, pas de promote
- STABLE : NOT AVAILABLE
- Version produit numérique : NOT AVAILABLE
- Classification proposée : MINOR candidate (évolution compatible) — non attribuée

---

## 12. Réserves / dette / exit

1. **08.03 / 08.05 Travail** — proportions viewer vs Figma 952/690 non pixel-alignées (layout Ensemble 05 réutilisé). Exit: ajustement grille Travail sous GO séparé ou acceptation Morris.
2. **08.07/08.08** — confirmation historique UI ajoutée après capture ; CTA « Conserver » Figma reste l’acte Nora/D4 (pas un bouton Documents isolé). Exit: re-capture après reload DEV + parcours fixture proposition.
3. **documentFocus** non persisté durablement hors session React (reload Travail peut perdre le focus). Exit: sessionStorage scoped projet si GO.
4. **e2e Playwright CI** non rejoués full (g4 + documents-08). Exit: run lane E2E avant RECETTE.
5. Contrat Git toujours « candidat » — sync doc post-recette.

---

## 13. Review Pack coverage

- Objectif/type/profil : oui
- Git Truth : oui
- Contrat Figma avant code : oui
- Blast + fichiers + diff : oui (`documents-delivery.diff`)
- Tests exécutés : oui
- Figma/runtime + géométrie : oui (réserves 08.05/09/10)
- UAT/TECH : oui
- Fake/Real : oui
- ENV/versioning : oui
- Verdict : ci-dessous

**Pas de secrets** dans ce pack (pas de DSN/clés).

---

## 14. Verdict technique UNIQUE

### READY WITH RESERVES — MORRIS DECISION REQUIRED

**Motifs de réserve (non bloquants fonctionnels D4/Bibliothèque principaux, bloquants pour claim pixel-perfect 8/8):**
- Fidélité Travail 50/50 et frames Nora 08.07/08.08 partiellement prouvées visuellement
- e2e browser CI non rejoués
- Pas de promote RECETTE (conforme GO)

**Ce qui est livré et démontré:**
- Parcours Bibliothèque / Lecture / Historique / Comparaison fonctionnels et géométriquement alignés (70/30 F2)
- D4 V2→V4 + concurrence + idempotence + legacy BASE_STALE
- Suppression du parcours textarea Pilote sur Projet Documents
- Preuves captures Figma + runtime pour frames 3,4,6,7,8

### Gate Morris restant
1. Accepter réserves visuelles 08.03/08.07/08.08 ou demander correctif ciblé
2. GO distinct pour commit branche projet / PR / RECETTE Documents
3. Ne pas clôturer Ensemble 06 tant que Journal+Documents non gated ensemble

### Instruction ChatGPT
Relire depuis Git `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`, confronter à ce pack et aux fichiers réellement modifiés, produire verdict indépendant.

---

## 15. Handoff L3

À publier après finalisation via `scripts/sfia/publish-review-handoff.sh` (branche `sfia/review-handoff`, mono-fichier, push FF). Voir section résultat post-publish.
