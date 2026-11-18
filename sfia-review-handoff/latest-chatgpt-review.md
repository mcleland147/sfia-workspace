# SFIA Review Pack Full — Intégration Git ML4D UX-003→Ensemble 05

**Date:** 2026-11-18 20:26 CET  
**Cycles:** 13 PR readiness → 7 Intégration → 14 Post-merge (partiel)  
**Profil:** Critical  
**GO Morris:** EXPLICITE — push/PR/merge conditionnel + docs + post-merge  
**STABLE / Gate C / ADOPTED / RELEASE:** interdits  

## Verdict final unique

`ML4D INTEGRATION PR READY — MERGE BLOCKED`

**Cause:** required check **Build and validate SFIA Studio Next** / `tsc --noEmit` **FAIL** sur PR produit #681.  
Correction de code **non exécutée** (créerait un nouveau candidat non recetté).  
Merge produit **non réalisé**. Phase B docs #680 **non finalisée** (dépend du produit).

---

## 1. Git Truth Check

```
REPO=mcleland147/sfia-workspace
ORIGIN_MAIN=997d4c4e8204993de7107552898c8cc08cd3b0ed
CANDIDATE=5c94c86737f0965c71a7e058e3f1e45ff4415024
CANDIDATE_TREE=74fbf2b90f95951d5049efc5a854ad213fb0f47f
COMMITS_main..candidate=40
MAIN_AHEAD=0
DOCS_BRANCH=docs/next-ml4d-registre-revues-20261116@6b556c17
PRIOR_RECON_HANDOFF=5ac70fae
RECETTE_BUILD=IEINNuPl0bHWJOWkh0ZhG (inchangé)
RECETTE_SHA=5c94c867 (inchangé)
LOCAL_HEAD=1f40fe4f (exclu du push produit)
```

Secret scan diff produit : **CLEAN** (pas de chemins `.env`/clés ; pas de patterns secrets dans le diff textuel).

---

## 2. Phase A — Opérations réalisées

| Étape | Statut |
|---|---|
| Vérification ascendance 40 commits | PASS |
| Tree / absence commits main manquants | PASS |
| Correspondance RECETTE | PASS |
| Couverture UX-003→E05 | PASS (messages commits) |
| Branche distante `integrate/next-ml4d-ux003-to-ensemble05-20261118` @ `5c94c867` | PASS (FF push) |
| PR produit **#681** | PASS créée |
| CI required Next validate | **FAIL** |
| Merge produit | **NOT EXECUTED** |

### PR produit

- URL: https://github.com/mcleland147/sfia-workspace/pull/681  
- Head: `integrate/next-ml4d-ux003-to-ensemble05-20261118` = `5c94c867`  
- Base: `main`  
- Titre: `feat(next): intégrer convergence UX ML4D — UX-003 à Ensemble 05`  
- Commentaire CI: https://github.com/mcleland147/sfia-workspace/pull/681#issuecomment-6989164945  

### CI (observé)

| Check | Résultat |
|---|---|
| Detect SFIA Studio / Next changes | pass |
| SFIA Studio Required Gate | pass |
| Build and validate SFIA Studio | skipping |
| **Build and validate SFIA Studio Next** | **fail** (~1m8s) — run `44380122314` |
| **SFIA Studio Next Required Gate** | **fail** (aggregate) |

### Erreurs TypeScript (classes)

- **37** erreurs `tsc` rapportées dans le log failed.
- TS2739 (majorité) : fixtures sémantiques incompletes — champs manquants `projectIntention`, `desiredOutcome`, `initialScope`, `proposedProjectName`  
  Fichiers typiques : `ml4c-prior-proposal.pg.test.ts`, `semantic-qualification.test.ts`, `s05-pending-policy.test.ts`, `c2-adversarial-integrity.test.ts`, `provider-simulated-level-b.test.ts`, …
- TS2551 : `create-project.pg.test.ts` — `projectId` vs `project` (fichier **CHANGED** dans le candidat)
- Autres : TS2345 / TS2769 / TS2554 / TS2322 (minorité)

**Qualification :** dette / désalignement tests↔schéma **présent dans le candidat `5c94c867` tel que poussé**. Ce n’est pas un flaky CI. Un correctif = **nouveau SHA** → hors mandat « intégrer fidèlement sans mutation ».

---

## 3. Phase B — Documentation #680 (non exécutée)

| Étape | Statut |
|---|---|
| PR #680 existante draft | Observée OPEN / MERGEABLE (avant blocage produit) |
| Recalcul diff post-merge produit | **SKIPPED** (produit non mergé) |
| ready for review / merge docs | **NOT EXECUTED** |

Raison : contrat impose Phase B **après** intégration produit.

---

## 4. Post-merge

**NOT EXECUTED** — aucun merge.

RECETTE : inchangée (`5c94c867` / `IEINNuPl0bHWJOWkh0ZhG`).

---

## 5. Réserves R-01…R-10 (héritées + nouvelle)

| ID | État après ce cycle |
|---|---|
| R-01 ACL historique | inchangée — NOT FULLY PROVEN |
| R-02 40 commits | arbitrage Morris appliqué (PR cumulative) — PR ouverte |
| R-03/R-04 docs | #680 en attente produit |
| R-05/R-06 | inchangées |
| R-07 88 oracles | inchangée |
| R-08/R-09 dirty/HEAD | respectés (exclu du push) |
| R-10 dette TS | **MATÉRIALISÉE EN CI** — required gate FAIL |
| **R-11 CI tsc** | **NOUVEAU / BLOQUANT MERGE** — tests/schema désalignés sur candidat |

---

## 6. Étapes non exécutées

1. Merge commit produit  
2. Vérification `5c94c867` dans `main`  
3. Réconciliation `delivery-history` / finalisation #680  
4. Merge docs  
5. Contrôles post-merge doubles  
6. Nettoyage branches (§6.12.1) — N/A  
7. GO Ensemble 06 — non démarré (conforme)

---

## 7. Correctif proposé (documenté, non exécuté)

Sans l’exécuter dans ce cycle :

1. Aligner les fixtures/tests sur le schéma sémantique courant (`projectIntention`, `desiredOutcome`, `initialScope`, `proposedProjectName`).  
2. Corriger `create-project.pg.test.ts` (`project` vs `projectId`).  
3. Rejouer `tsc --noEmit` + suite CI Next.  
4. Produire un **nouveau SHA candidat**, qualification proportionnée, puis reprise d’intégration.

Alternative : si une partie des erreurs TS est préexistante hors diff, la démontrer par baseline `main` CI — **non démontré ici** ; plusieurs fichiers en échec sont inchangés dans le diff mais cassés par l’évolution de schéma du candidat.

---

## 8. Décisions Morris

1. Autoriser un **cycle correctif CI/tsc** (nouveau candidat) **ou** autre arbitrage.  
2. Conserver PR #681 ouverte comme référence d’intégration bloquée.  
3. #680 reste draft jusqu’à produit vert.  
4. Ensemble 06 : **pas de GO** tant que l’intégration ML4D n’est pas sur `main`.

---

## 9. Fiche de reprise Ensemble 06 (préparation uniquement)

| Champ | Contenu |
|---|---|
| État Git | `main` toujours `997d4c4e` ; candidat non mergé ; PR #681 ouverte bloquée CI |
| Capacités construites (hors main) | UX-003…E05 sur branche d’intégration |
| Réserves héritées | R-01, R-05…R-07, **R-11 CI** |
| Figma applicable | à confirmer avec Morris pour Documents/journal (registre §2 ordre 06) |
| Périmètre revue 06 | Bibliothèque, inspection, versions, sujets/décisions, points ouverts |
| Dépendances | D4/D9, droits, versions, décisions humaines |
| Questions produit | Périmètre exact Documents/journal vs déjà construit ; critères Figma ; données historiques |

**Aucun GO technique Ensemble 06.**

---

## 10. Absence de mutation interdite

- Pas de fix code  
- Pas de merge  
- Pas de force push  
- RECETTE non touchée  
- Push réalisé : branche d’intégration + commentaire PR + (handoff L3)

---

## Ledger

| Contrôle | Résultat |
|---|---|
| Git Truth | PASS |
| Push branche @5c94c867 | PASS |
| PR #681 | PASS créée |
| CI Next required | **FAIL** |
| Merge produit | BLOCKED |
| Docs #680 | PENDING produit |
| Post-merge | NOT RUN |
| L3 | NEXT |
