# Rapport de capitalisation — Métriques pilote Chantiers360 v2

**Projet :** Chantiers360 v2 — premier pilote SFIA v2.0  
**Chemin :** `projects/chantiers360-v2/09-capitalization/chantiers360-v2-pilot-metrics-capitalization-report.md`  
**Date :** 2026-07-07  
**Branche de référence :** `main` @ `2209d7d`  
**Type :** Capitalisation documentaire — métriques delivery / gouvernance / vélocité  
**Sources :** historique Git `sfia-workspace`, PR mergées GitHub (#94–#137), rapports capitalisation existants

> Complète `mvp-capitalization-report.md` et `v0-vs-sfia-v2-methodological-comparison.md` par une **lecture chiffrée** de la durée réelle et du volume de PR.

---

## 1. Résumé exécutif

Le pilote Chantiers360 v2 (bootstrap → comparaison V0) s'est déroulé sur **~3 journées calendaires** et **~44 heures** entre la première et la dernière PR mergée — **pas sur 2 semaines**.

| Indicateur | Valeur |
|------------|--------|
| **Première PR** | #94 — 2026-07-05 14:26 (CEST) — sélection pilote |
| **Bootstrap projet** | #95 — 2026-07-05 15:17 (CEST) |
| **Dernière PR** | #137 — 2026-07-07 10:16 (CEST) — alignement post-merge comparaison V0 |
| **Durée calendaire** | **3 jours** (5 → 7 juillet 2026) |
| **Durée horaire** | **~44 h** (premier merge → dernier merge) |
| **PR mergées (pilote)** | **44** (#94 → #137) |
| **PR depuis bootstrap** | **43** (#95 → #137) |
| **PR avec code (`feat`)** | **6** (spike + 5 INC delivery) |
| **PR documentaires (`docs`)** | **38** |
| **Incréments livrés** | 5 (INC-01 → INC-05) |
| **E2E cumulatif final** | 16 passed |
| **Standards méthode extraits** | 7 |
| **Verdict comparaison V0** | **V2 NEEDS LIGHT CONSOLIDATION** |

**Enseignement principal :** la vélocité V2 est **comparable à V0** (~2 jours documentés côté V0 pour MVP + Release 1.1). L'écart majeur n'est **pas la vitesse**, mais le **ratio traçabilité / overhead** : 44 PR vs 15 commits Git V0.

---

## 2. Correction d'une approximation antérieure

Le rapport `v0-vs-sfia-v2-methodological-comparison.md` mentionnait « ~2 semaines bootstrap → MVP ». **Cette estimation est incorrecte.**

| Source | Durée indiquée | Durée réelle vérifiée |
|--------|----------------|----------------------|
| Comparaison V0 (§4, vitesse d'exécution) | ~2 semaines | **~2–3 jours** |
| REX V0 (`35-Retour-Experience-Projet.md`) | ~48 h calendaires (MVP → v1.1.0) | Cohérent avec V2 |

**Action recommandée :** corriger la comparaison V0 dans un micro-cycle documentaire ultérieur si ce rapport est mergé.

---

## 3. Chronologie réelle (PR mergées)

### 3.1 Bornes

```
2026-07-05 14:26  PR #94  — Sélection pilote SFIA v2
2026-07-05 15:17  PR #95  — Bootstrap Chantiers360 v2
        ...
2026-07-07 10:16  PR #137 — Alignement post-merge comparaison V0
```

### 3.2 Répartition par jour

| Date | PR mergées | % du total | Activité dominante |
|------|------------|------------|-------------------|
| **2026-07-05** | 7 | 16 % | Sélection pilote, bootstrap, cadrage, archi fonctionnelle, UX, backlog, standard Design Figma |
| **2026-07-06** | 24 | 55 % | Design Figma, archi tech, spike, standards QA, **INC-01 à INC-04** complets |
| **2026-07-07** | 13 | 30 % | INC-05, capitalisation MVP, standards post-MVP, comparaison V0 |
| **Total** | **44** | 100 % | |

### 3.3 Jalons clés

| Jalon | PR | Date merge |
|-------|-----|------------|
| Pilote retenu | #94 | 05/07 |
| Bootstrap | #95 | 05/07 |
| Backlog MVP | #99 | 05/07 |
| Design Figma P1 validé | #101 | 06/07 |
| Arbitrages Morris archi | #103 | 06/07 |
| Spike fidélité Figma | #104 | 06/07 |
| INC-01 clôturé | #110 | 06/07 |
| INC-05 clôturé | #127 | 07/07 |
| MVP capitalisé | #128 | 07/07 |
| Comparaison V0 | #136 | 07/07 |
| Cycle comparaison aligné | #137 | 07/07 |

---

## 4. Inventaire des 44 PR (#94 → #137)

| # | PR | Date | Type | Titre |
|---|-----|------|------|-------|
| 1 | #94 | 05/07 | docs | Sélection pilote SFIA v2 |
| 2 | #95 | 05/07 | docs | Bootstrap Chantiers360 v2 |
| 3 | #96 | 05/07 | docs | Cadrage détaillé |
| 4 | #97 | 05/07 | docs | Architecture fonctionnelle |
| 5 | #98 | 05/07 | docs | UX/UI Markdown |
| 6 | #99 | 05/07 | docs | Backlog MVP |
| 7 | #100 | 05/07 | docs | Standard Design Figma SFIA v2 |
| 8 | #101 | 06/07 | docs | Design Figma P1 validé |
| 9 | #102 | 06/07 | docs | Architecture technique légère |
| 10 | #103 | 06/07 | docs | Arbitrages Morris architecture |
| 11 | #104 | 06/07 | **feat** | Spike fidélité Figma Dashboard |
| 12 | #105 | 06/07 | docs | Alignement post-spike |
| 13 | #106 | 06/07 | docs | Standard Figma fidelity gate |
| 14 | #107 | 06/07 | docs | Standard QA delivery SFIA v2 |
| 15 | #108 | 06/07 | **feat** | Delivery INC-01 |
| 16 | #109 | 06/07 | docs | QA-G4 INC-01 |
| 17 | #110 | 06/07 | docs | Clôture INC-01 |
| 18 | #111 | 06/07 | docs | Capitalisation INC-01 + standard closure |
| 19 | #112 | 06/07 | docs | Alignement post-capitalisation INC-01 |
| 20 | #113 | 06/07 | docs | Alignement prompts QA SFIA v2 |
| 21 | #114 | 06/07 | docs | Alignement R-QA-02 statut chantier |
| 22 | #115 | 06/07 | **feat** | Delivery INC-02 |
| 23 | #116 | 06/07 | docs | QA-G4 INC-02 |
| 24 | #117 | 06/07 | docs | Clôture INC-02 |
| 25 | #118 | 06/07 | docs | Alignement README post INC-02 |
| 26 | #119 | 06/07 | **feat** | Delivery INC-03 |
| 27 | #120 | 06/07 | docs | QA-G4 INC-03 |
| 28 | #121 | 06/07 | docs | Clôture INC-03 |
| 29 | #122 | 06/07 | **feat** | Delivery INC-04 |
| 30 | #123 | 06/07 | docs | QA-G4 INC-04 |
| 31 | #124 | 06/07 | docs | Clôture INC-04 |
| 32 | #125 | 07/07 | **feat** | Delivery INC-05 |
| 33 | #126 | 07/07 | docs | QA-G4 INC-05 |
| 34 | #127 | 07/07 | docs | Clôture INC-05 |
| 35 | #128 | 07/07 | docs | Capitalisation MVP |
| 36 | #129 | 07/07 | docs | Standard design coverage |
| 37 | #130 | 07/07 | docs | Alignement post-merge design coverage |
| 38 | #131 | 07/07 | docs | Standard technical architecture decisions |
| 39 | #132 | 07/07 | docs | Alignement post-merge tech arch |
| 40 | #133 | 07/07 | docs | Standard method versioning v2.x |
| 41 | #134 | 07/07 | docs | Alignement post-merge versioning |
| 42 | #135 | 07/07 | docs | Finalisation statut v2.3.1 |
| 43 | #136 | 07/07 | docs | Comparaison méthodologique V0 vs SFIA v2 |
| 44 | #137 | 07/07 | docs | Alignement post-merge comparaison V0 |

---

## 5. Répartition par catégorie

| Catégorie | PR | Nombre | % |
|-----------|-----|--------|---|
| **Sélection pilote** | #94 | 1 | 2 % |
| **Intention → design projet** | #95–#104 | 10 | 23 % |
| **Alignements + standards amont delivery** | #105–#107 | 3 | 7 % |
| **Chaîne INC-01** (delivery + QA + closure + capi + align) | #108–#112 | 5 | 11 % |
| **Transverse QA / réserves** | #113–#114 | 2 | 5 % |
| **Chaîne INC-02** (+ align README) | #115–#118 | 4 | 9 % |
| **Chaîne INC-03** | #119–#121 | 3 | 7 % |
| **Chaîne INC-04** | #122–#124 | 3 | 7 % |
| **Chaîne INC-05** | #125–#127 | 3 | 7 % |
| **Capitalisation MVP** | #128 | 1 | 2 % |
| **Post-MVP méthode** (standards + alignements + v2.3.1) | #129–#135 | 7 | 16 % |
| **Comparaison V0** (+ alignement) | #136–#137 | 2 | 5 % |
| **Total** | #94–#137 | **44** | 100 % |

### 5.1 Chaîne standard par incrément (INC-n)

Chaque INC suit le même schéma (sauf capitalisation INC-01 seule) :

```
Delivery (feat) → QA-G4 (docs) → Closure (docs)
```

| Incrément | Delivery | QA-G4 | Closure | Total |
|-----------|----------|-------|---------|-------|
| INC-01 | #108 | #109 | #110 | 3 (+ #111 capi, #112 align) |
| INC-02 | #115 | #116 | #117 | 3 (+ #118 align) |
| INC-03 | #119 | #120 | #121 | 3 |
| INC-04 | #122 | #123 | #124 | 3 |
| INC-05 | #125 | #126 | #127 | 3 |
| **Sous-total delivery** | | | | **15 PR** |

**Ratio :** 3 PR documentaires pour 1 PR code par incrément — hors alignements et capitalisations.

### 5.2 Micro-alignements post-merge

| PR | Objet |
|----|-------|
| #105 | Post-spike |
| #112 | Post-capitalisation INC-01 |
| #118 | Post-closure INC-02 |
| #130 | Post-merge design coverage |
| #132 | Post-merge tech arch |
| #134 | Post-merge versioning |
| #135 | Finalisation v2.3.1 |
| #137 | Post-merge comparaison V0 |
| **Total** | **8 PR** (18 % du pilote) |

---

## 6. Comparaison vélocité V0 vs V2

| Dimension | V0 (BatiNova) | V2 (SFIA pilote) | Lecture |
|-----------|---------------|------------------|---------|
| **Durée documentée** | ~48 h (MVP → v1.1.0) | ~44 h (#94 → #137) | **Comparable** |
| **Jours calendaires** | ~2 jours (20–21/06) | ~3 jours (5–7/07) | **Comparable** |
| **Traçabilité Git** | 15 commits (compressé) | 44 PR (granulaire) | V2 >> traçabilité |
| **Tests auto finaux** | ~292 exécutions | 16 E2E cumulatifs | V0 >> profondeur QA |
| **Docs produit** | 55 fichiers | ~40+ docs projet + 7 standards méthode | Comparable volume |
| **Overhead gouvernance** | Gates A/B/C, 1 ADR | Morris L0, PR readiness, post-merge, réserves | V2 >> processus |

**Conclusion capitalisation :** les deux projets démontrent une **vélocité IA assistée similaire**. SFIA v2 n'a pas ralenti le delivery — il a **multiplié les points de contrôle documentés**.

---

## 7. Ratios utiles pour SFIA v2.4

| Ratio | Valeur pilote | Implication v2.4 |
|-------|---------------|------------------|
| PR / jour | ~15 (pic 6 juillet) | Charge review Morris non soutenable à long terme |
| PR docs / PR code | 38 / 6 ≈ **6,3:1** | Simplifier chaîne documentaire |
| PR alignement / total | 8 / 44 ≈ **18 %** | Fusionner micro-alignements |
| PR / INC | 3 (+ alignements) | Option 2 PR max pour INC mineurs |
| Standards / pilote | 7 en 1 jour (7 juillet) | Étaler ou indexer — éviter prolifération |
| Heures / PR | ~1 h / PR | Overhead fixe par PR indépendant du contenu |

---

## 8. Enseignements pour la capitalisation méthode

| # | Enseignement |
|---|--------------|
| E1 | **La durée réelle du pilote est de l'ordre de 2–3 jours**, pas de semaines — toute projection planning doit utiliser cette base |
| E2 | **La vélocité V2 ≈ V0** — SFIA v2 n'est pas un frein à l'exécution, c'est un **multiplicateur de traçabilité** |
| E3 | **44 PR pour un MVP** est soutenable sur un pilote unique, pas comme mode opératoire par défaut |
| E4 | **Le 6 juillet concentre 55 % des PR** — mode batch IA + validation Morris ponctuelle, similaire au REX V0 |
| E5 | **8 micro-alignements** représentent un coût évitable — cible prioritaire v2.4 |
| E6 | **6 PR code** (dont spike) pour 5 INC + socle = ratio sain côté delivery |
| E7 | **16 E2E** vs 292 tests V0 — la profondeur QA reste un gap à combler en v2.4 |
| E8 | **7 standards méthode** extraits en fin de pilote — valeur réutilisable, mais risque surcharge |

---

## 9. Recommandations capitalisation

| # | Recommandation | Priorité |
|---|----------------|----------|
| R1 | Corriger « ~2 semaines » dans `v0-vs-sfia-v2-methodological-comparison.md` | Haute |
| R2 | Utiliser **~3 jours / 44 PR** comme baseline métrique pilote dans toute projection SFIA v2.4 | Haute |
| R3 | Cibler réduction micro-alignements (8 → 2–3 PR groupées) | Haute |
| R4 | Porter profondeur QA V0 (DoD 4 tests/phase, recette MOA) dans standard v2.4 | Moyenne |
| R5 | Définir profils projet **light** (< 15 PR) vs **full** (~40+ PR) selon criticité | Moyenne |
| R6 | Conserver les 7 standards extraits — indexer, ne pas recréer | Basse |

---

## 10. Statut et références

| Élément | Valeur |
|---------|--------|
| **Pilote** | Chantiers360 v2 — cycle complet bouclé |
| **MVP** | CAPITALIZED WITH RESERVES (PR #128) |
| **Comparaison V0** | Mergée PR #136 — alignée PR #137 |
| **Verdict méthode** | V2 NEEDS LIGHT CONSOLIDATION |
| **Baseline opérationnelle** | SFIA v2.3.1 |
| **v2.4 / v3.0** | Non lancés |

**Documents liés :**

- `mvp-capitalization-report.md` — capitalisation cycle de vie MVP
- `v0-vs-sfia-v2-methodological-comparison.md` — comparaison méthodologique
- `inc-01-capitalization-report.md` — chaîne INC-n standardisée
- V0 : `/Users/morris/Downloads/BatiNova /Cadrage/docs/35-Retour-Experience-Projet.md`

---

*Rapport produit pour capitalisation méthode — 2026-07-07 — métriques vérifiées sur historique GitHub `mcleland147/sfia-workspace`.*
