# REX final — Pilote Chantiers360 v2 / SFIA v2.0

**Projet :** Chantiers360 v2 — premier pilote SFIA v2.0  
**Chemin :** `projects/chantiers360-v2/09-capitalization/2026-07-07-chantiers360-v2-final-pilot-rex-report.md`  
**Date :** 2026-07-07  
**Branche de référence :** `main` @ `2209d7d`  
**Type :** REX stratégique final — documentation-only — avant décision SFIA v2.4  
**Baseline opérationnelle :** SFIA v2.3.1

**Documents sources :**

- `2026-07-07-mvp-capitalization-report.md` (PR #128)
- `v0-vs-sfia-v2-methodological-comparison.md` (PR #136)
- `2026-07-07-chantiers360-v2-pilot-metrics-capitalization-report.md` (local)
- `2026-07-06-inc-01-capitalization-report.md` (PR #111)
- Standards méthode `method/sfia-fast-track/documentation/capitalization/sfia-v2/`

> Ce document **grave dans le marbre** le travail du pilote fondateur. Il ne lance pas SFIA v2.4 ni v3.0.

---

## 1. Résumé exécutif

Le pilote Chantiers360 v2 a démontré que **SFIA v2.0 est prouvée** : un cycle complet intention → capitalisation a été mené en **~3 jours** (~44 h, 44 PR mergées) sur un produit métier réel, from scratch, avec MVP fonctionnel livré (INC-01 à INC-05, 16 E2E cumulatifs, CLOSED WITH RESERVES).

**SFIA v2.3.1** est la **baseline opérationnelle** actée (PR #133–#135). La méthode a industrialisé Git-first, cycles bornés, Morris L0, PR readiness, post-merge, réserves formalisées, capitalisation incrémentale et versioning méthode — **7 standards** extraits du pilote.

Le pilote a aussi révélé que le **volume PR/gates n'est pas un modèle cible** : 44 PR (dont 38 docs, 8 micro-alignements) pour un MVP de 5 incréments représente un coût Morris disproportionné par rapport à la vélocité réelle (~comparable à V0 en ~48 h). La profondeur QA (16 E2E vs 292 tests V0) et l'absence de production readiness restent des gaps.

**Verdict :** **V2 NEEDS LIGHT CONSOLIDATION**. **v2.4 consolidation est recommandée** — decision-driven, pas PR-driven. **v3.0 immédiate n'est pas recommandée**.

---

## 2. Objectif initial du pilote

### Pourquoi Chantiers360 v2

Chantiers360 v2 a été retenu comme **premier pilote SFIA v2.0** (PR #94) car il permet de :

- tester SFIA sur un **métier externe réel** (bâtiment / suivi chantier) ;
- cadrer un **MVP clair et borné** ;
- exercer UX, workflow et delivery de manière concrète ;
- traverser le **cycle de vie projet complet** (intention → capitalisation) ;
- valider la chaîne **Git / Markdown / Cursor / PR / post-merge / capitalisation**.

### Principes fondateurs

| Principe | Application |
|----------|-------------|
| **From scratch** | Aucune reprise V0 en cadrage, docs, backlog, code ou structure |
| **V0 en fin de pilote uniquement** | Comparaison V0 réservée à PR #136 — non consultée durant le MVP |
| **Git = source de vérité** | Chaque cycle, décision et livraison versionnés |
| **Morris L0** | Arbitrages structurants, GO scope/PR/merge/clôture |
| **Pas de L5 global** | Automatisation contrôlée, jamais bout-en-bout sans gates |

### Rôle du pilote

Tester SFIA **de l'intention à la capitalisation** — pas seulement le delivery code — et produire les **standards réutilisables** pour les projets suivants.

---

## 3. Chronologie réelle du pilote

### Bornes

| Jalon | Date (CEST) | PR |
|-------|-------------|-----|
| Sélection pilote | 05/07 14:26 | #94 |
| Bootstrap projet | 05/07 15:17 | #95 |
| Backlog MVP | 05/07 | #99 |
| Design Figma P1 | 06/07 | #101 |
| Spike fidélité | 06/07 | #104 |
| INC-01 clôturé | 06/07 | #110 |
| INC-05 clôturé | 07/07 | #127 |
| MVP capitalisé | 07/07 | #128 |
| Comparaison V0 | 07/07 | #136 |
| Alignement final | 07/07 10:16 | #137 |

### Métriques consolidées

| Indicateur | Valeur |
|------------|--------|
| **Durée calendaire** | **~3 jours** (5 → 7 juillet 2026) |
| **Durée horaire** | **~44 h** (premier → dernier merge) |
| **PR mergées** | **44** (#94 → #137) |
| **PR code (`feat`)** | **6** (spike + 5 INC) |
| **PR documentaires** | **38** |
| **Micro-alignements post-merge** | **8** (18 % du total) |
| **Répartition par jour** | 7 / **24** / 13 PR (pic 6 juillet) |

> **Correction capitalisée :** le rapport de comparaison V0 mentionnait « ~2 semaines » — **incorrect**. Voir `2026-07-07-chantiers360-v2-pilot-metrics-capitalization-report.md` §2.

---

## 4. Ce qui a été produit

### 4.1 Produit Chantiers360 v2

| Catégorie | Livrable | PR / référence |
|-----------|----------|----------------|
| **Cadrage / framing** | `00-framing/` — objectif, scope, risques, critères succès | #96 |
| **Architecture fonctionnelle** | `02-functional-architecture/` — domaines, navigation, états | #97 |
| **UX/UI** | `03-ux-ui/` — screen map, wireframes, flux | #98 |
| **Design Figma** | `04-design/` — 4 frames P1 validées Morris | #100, #101 |
| **Architecture technique** | `05-technical-architecture/` — stack, data model, décisions M1–M10 | #102, #103 |
| **Backlog** | `06-backlog/` — US-01 à US-13, INC-01 à INC-05 | #99 |
| **Delivery INC-01** | Socle chantier — liste, création, fiche, statut | #108 |
| **Delivery INC-02** | Tâches et réserves | #115 |
| **Delivery INC-03** | Jalons simples et retard | #119 |
| **Delivery INC-04** | Comptes rendus rapides | #122 |
| **Delivery INC-05** | Prochaines actions dérivées | #125 |
| **QA / closure** | `08-qa-test/inc-0n/` — QA-G3/G4, clôtures CLOSED WITH RESERVES | #109–#127 |
| **Application** | Next.js + Drizzle + PostgreSQL + Tailwind — 16 E2E passed | #108–#125 |

### 4.2 Capitalisation et REX

| Document | Périmètre | Statut |
|----------|-----------|--------|
| `2026-07-06-inc-01-capitalization-report.md` | Chaîne INC-n standardisée | Mergé PR #111 |
| `2026-07-07-mvp-capitalization-report.md` | Cycle de vie MVP complet | Mergé PR #128 |
| `v0-vs-sfia-v2-methodological-comparison.md` | Comparaison méthodologique V0 | Mergé PR #136 |
| `2026-07-07-chantiers360-v2-pilot-metrics-capitalization-report.md` | Métriques durée / PR / ratios | Local |
| `2026-07-07-chantiers360-v2-final-pilot-rex-report.md` | REX stratégique final | Ce document |

### 4.3 Standards méthode SFIA v2 extraits

| Standard | PR | Version actée |
|----------|-----|---------------|
| Design Figma MVP cycle | #100 | v2.0 |
| Figma fidelity gate | #106 | v2.1 |
| Delivery QA / Test | #107 | v2.0 |
| Incremental delivery closure | #111 | v2.0 |
| Design coverage | #129 | v2.2 |
| Technical architecture & decision documentation | #131 | v2.2 |
| Method versioning v2.x | #133 | **v2.3 / v2.3.1** |

### 4.4 Réserves ouvertes (non bloquantes)

| Réserve | Statut |
|---------|--------|
| R-UX-01 | Ouverte — acceptée — `/prochaines-actions` sans frame Figma |
| R-QA-03 | Ouverte — acceptée — validation HTML5 formulaire |
| R-QA-04 | Ouverte — acceptée — panneaux dashboard mockés |
| R-QA-05 | Ouverte — environnementale — port E2E |

---

## 5. Ce que SFIA v2.0 a démontré

| Capacité | Preuve pilote |
|----------|---------------|
| **Git source de vérité** | 44 PR, chaque cycle traçable — vs commit monolithique V0 |
| **Cycles bornés** | Bootstrap → cadrage → archi → design → delivery INC-n — périmètre explicite |
| **Morris L0** | M1–M10+ indexés — GO explicite scope, PR, merge, clôture |
| **Cursor exécuteur contrôlé L3** | Delivery code, E2E, docs — garde-fous stricts par cycle |
| **ChatGPT routeur / analyste** | Prompts, challenge, lecture rapports — pas décideur |
| **PR readiness** | Contrôle périmètre, réserves, test plan avant chaque PR |
| **Post-merge check** | Vérification read-only `main` vs attente documentée |
| **Réserves formalisées** | R-UX / R-QA — statut ouvert/accepté/levé — CLOSED WITH RESERVES valide |
| **Capitalisation incrémentale** | Rapport INC-01 + rapport MVP + standards extraits |
| **Versioning méthode** | v2.0 → v2.3.1 — registre, minor/patch/major future |
| **Intention → capitalisation** | Cycle complet en ~3 jours — produit + méthode |

**Conclusion :** SFIA v2.0 est **méthodologiquement prouvée** sur un pilote réel.

---

## 6. Ce que le pilote a révélé comme limites

| Limite | Observation | Impact |
|--------|-------------|--------|
| **Volume PR excessif** | 44 PR pour un MVP — ~6,3 docs pour 1 code | Charge Morris non soutenable en routine |
| **Charge Morris trop forte** | Review/GO sur chaque PR + micro-alignements | Goulot décisionnel |
| **Micro-alignements trop nombreux** | 8 PR (18 %) pour corriger statuts post-merge | Overhead évitable |
| **Profondeur QA inférieure à V0** | 16 E2E vs 292 exécutions V0 | Gap qualité non compensé par processus |
| **Production readiness absente** | Pas d'équivalent K0–K4 V0 | Frein go-live manquant |
| **Prolifération standards** | 7 standards en 1 jour (7 juillet) | Risque surcharge méthode |
| **Documentation très dense** | Multiples rapports par INC (delivery + QA + closure) | Lisibilité/maintenance |
| **Méthode trop PR-driven** | 3 PR/INC + alignements — décisions noyées dans le flux PR | Confusion traçabilité vs gouvernance |

**Conclusion :** le **modèle opératoire pilote n'est pas le modèle cible**.

---

## 7. Analyse des rôles Morris / ChatGPT / Cursor / Git

| Acteur | Rôle observé | Ce qui a fonctionné | Limite | Cible v2.4 |
|--------|--------------|---------------------|--------|------------|
| **Morris** | L0 — arbitrages structurants, GO scope/PR/merge/clôture | Décisions M1–M10 claires ; validation réserves ; pas de dérive scope | Sollicité sur **chaque PR** (44 fois) — review opérationnelle excessive | **Valider arbitrages, pas tâches** — GO sur décisions, pas sur chaque alignement doc |
| **ChatGPT** | Routeur, cadre, analyste — prompts, challenge, lecture rapports | Structuration cycles ; challenge backlog ; analyse REX | Pas décideur — confirmé | Conserver — renforcer handoff vers checks L1/L2 |
| **Cursor** | Exécuteur L3 — delivery borné, docs, E2E, rapports QA | 5 INC livrés ; 16 E2E ; docs cycles conformes | Dépendance forte — prompt vs repo (INC-05) | Cycles plus larges, moins de micro-PR |
| **Git** | Source de vérité — commits, PR, historique | Traçabilité complète ; reproductibilité | 44 PR = bruit si modèle cible | Git reste vérité — **moins de PR, plus de commits groupés** |
| **Agents / checks L1/L2 (futur)** | Non systématisés au pilote | Post-merge check manuel utile | Tout passe par Morris ou Cursor ad hoc | **Automatiser** readiness, post-merge, inventaire — L1/L2 |

**Doctrine capitalisée :** Morris valide les **arbitrages structurants** (stack, scope, GO delivery, réserves bloquantes, clôture, capitalisation). Morris ne doit **pas** valider chaque micro-alignement documentaire.

---

## 8. Analyse PR / gates / charge opérationnelle

### 8.1 44 PR — coût du pilote fondateur

| Type | Nombre | % | Lecture |
|------|--------|---|---------|
| Delivery code | 6 | 14 % | Valeur directe |
| QA-G4 + closure | 10 | 23 % | Processus — utile mais lourd |
| Capitalisation + standards | 10 | 23 % | Valeur méthode long terme |
| Micro-alignements | 8 | 18 % | **Coût évitable** |
| Intention → design | 10 | 23 % | Nécessaire pilote fondateur |
| **Total** | **44** | 100 % | Acceptable **une fois** — pas en routine |

### 8.2 Rejet de 44 PR comme modèle cible

Le pilote a **besoin** de traçabilité maximale pour extraire les standards. Un projet suivant ne doit **pas** reproduire 44 PR.

**Cible indicative v2.4 :**

| Profil | PR budget | Usage |
|--------|-----------|-------|
| **Light** | < 15 PR | Projet simple, cycles groupés |
| **Standard** | 15–25 PR | MVP classique |
| **Full (pilote fondateur)** | ~40+ PR | Uniquement pour extraction standards |

### 8.3 PR-driven vs decision-driven

| Mode | Pilote V2 | Cible v2.4 |
|------|-----------|------------|
| **PR-driven** | Chaque alignement = PR | Regrouper alignements — 1 PR patch groupée |
| **Decision-driven** | Décisions Morris noyées dans flux PR | **Registre décisions** + PR seulement pour livrables structurants |

### 8.4 Gate budget Morris

| Gate | Fréquence pilote | Cible v2.4 |
|------|------------------|------------|
| GO scope / cycle | ~15+ | Maintenir — L0 |
| GO PR | 44 | Réduire à ~15–20 |
| GO merge | 44 | Idem |
| GO clôture INC | 5 | Maintenir |
| GO capitalisation | 3 | Maintenir |
| Post-merge check | ~10+ manuels | **Automatiser L1** — pas systématiquement PR |

**Règle capitalisée :** post-merge check **≠** PR automatique. Un check read-only L1 peut suffire sans nouvelle PR d'alignement.

---

## 9. Enseignements V0 + V2

| Dimension | V0 (BatiNova) | V2 (SFIA pilote) | Synthèse v2.4 |
|-----------|---------------|------------------|---------------|
| **Vélocité** | ~48 h (MVP + 1.1) | ~44 h (bootstrap → comparaison) | **Comparable** — l'IA accélère les deux |
| **Traçabilité Git** | 15 commits compressés | 44 PR granulaires | V2 >> — mais simplifier |
| **QA** | 292 tests, recette MOA 36/36 | 16 E2E, QA-G3/G4 | **Absorber V0** |
| **Production readiness** | K0–K4 structuré | Absent | **Absorber V0** |
| **EVOL / release** | Fiches, comité, semver | INC-n, closure | **Fusionner templates** |
| **REX** | 500+ lignes auto-critique | Capitalisation incrémentale | **Combiner formats** |
| **Gouvernance** | Gates produit, 1 ADR | Morris L0, réserves, versioning | **Conserver V2** |
| **Overhead** | Faible (batch IA) | Élevé (44 PR) | **Réduire sans perdre garde-fous** |

**Principe v2.4 :** absorber les **forces V0** (QA, production readiness, EVOL, vélocité) **sans perdre** les garde-fous V2 (Git, Morris L0, réserves, capitalisation, versioning).

---

## 10. Décisions méthodologiques capitalisées

Les décisions suivantes sont **gravées** et constituent la base avant tout cycle v2.4 :

| # | Décision | Statut |
|---|----------|--------|
| D1 | **SFIA v2.0 est prouvée** sur pilote Chantiers360 v2 complet | ✅ Acté |
| D2 | **SFIA v2.3.1 est la baseline opérationnelle** | ✅ Acté (PR #133–#135) |
| D3 | **V2 NEEDS LIGHT CONSOLIDATION** — pas de v3.0 immédiat | ✅ Acté (PR #136) |
| D4 | **44 PR n'est pas le modèle cible** — acceptable pilote fondateur uniquement | ✅ Acté |
| D5 | **NO-GO v3.0 immédiat** — un seul pilote, frictions non corrigées | ✅ Acté |
| D6 | **GO recommandé SFIA v2.4 consolidation** — decision-driven | ⏳ Décision Morris |
| D7 | **v2.4 doit être decision-driven, pas PR-driven** | ✅ Recommandation capitalisée |
| D8 | **Morris reste L0 sur arbitrages structurants** — pas sur micro-alignements | ✅ Doctrine |
| D9 | **Automatisation L1/L2 à renforcer** — readiness, post-merge, inventaire | ✅ Recommandation |
| D10 | **Vélocité V2 ≈ V0** — l'écart est traçabilité, pas vitesse | ✅ Acté (métriques) |

---

## 11. Inputs pour SFIA v2.4

> Ces blocs sont des **inputs de cadrage** — pas des standards lancés.

### Bloc 1 — Profils projet & méthode adaptative

| Élément | Détail |
|---------|--------|
| **Objectif** | Définir profils light / standard / full selon criticité projet |
| **Pourquoi** | 44 PR inadapté à tout projet — pilote ≠ routine |
| **Sources** | Métriques pilote (§5.1) ; comparaison V0 (§7 lourdeurs) ; REX MVP (F7 multiples PR) |

### Bloc 2 — QA adaptative & recette MOA

| Élément | Détail |
|---------|--------|
| **Objectif** | Porter profondeur QA V0 (DoD 4 tests/phase, `test:recette`) dans standard v2 |
| **Pourquoi** | 16 E2E insuffisant vs 292 tests V0 — processus ≠ couverture |
| **Sources** | Comparaison V0 (§5, §6) ; V0 `06-Cahier-de-tests.md`, framework recette MOA |

### Bloc 3 — Production readiness & cycle INC / EVOL / RUN

| Élément | Détail |
|---------|--------|
| **Objectif** | Intégrer équivalent K0–K4 V0 + fusion templates EVOL ↔ INC |
| **Pourquoi** | Frein salutaire V0 absent en v2 — post-MVP non structuré |
| **Sources** | V0 `15-Production-Readiness-Audit.md` ; V0 processus EVOL (docs 23–28) |

### Bloc 4 — PR, gates & operating efficiency

| Élément | Détail |
|---------|--------|
| **Objectif** | Réduire PR/INC (3 → 2 max mineur) ; fusionner micro-alignements ; PR budget par profil |
| **Pourquoi** | 8 micro-alignements = 18 % overhead ; charge Morris |
| **Sources** | Métriques pilote (§5.2, §7) ; REX final §8 |

### Bloc 5 — Automation L1/L2 & agent handoff

| Élément | Détail |
|---------|--------|
| **Objectif** | Automatiser readiness, post-merge, inventaire — Morris sur arbitrages seulement |
| **Pourquoi** | Post-merge check utile mais ne doit pas systématiquement générer une PR |
| **Sources** | REX MVP (M6, L1) ; comparaison V0 (§9 simplifications) |

### Bloc 6 — Capitalisation, metrics & standards policy

| Élément | Détail |
|---------|--------|
| **Objectif** | Politique standards (quand créer, indexer, pas recréer) ; métriques pilote comme baseline |
| **Pourquoi** | 7 standards en 1 jour — risque prolifération |
| **Sources** | Métriques pilote (§8) ; method versioning standard (v2.3.1) |

### Bloc 7 — Index méthode unique & routage

| Élément | Détail |
|---------|--------|
| **Objectif** | Index unique `sfia-v2/README.md` — matrice déclenchement, routage cycles |
| **Pourquoi** | Standards dispersés — duplication documentaire |
| **Sources** | `sfia-cycle-routing-guide.md` ; comparaison V0 (§9) |

---

## 12. Verdict final

| Verdict | Statut |
|---------|--------|
| **PILOT COMPLETE** | ✅ Chantiers360 v2 — bootstrap → comparaison V0 bouclée |
| **METHOD PROVEN** | ✅ SFIA v2.0 — cycle intention → capitalisation démontré |
| **OPERATING MODEL TOO HEAVY** | ✅ 44 PR, 8 alignements, charge Morris excessive en routine |
| **V2.4 CONSOLIDATION RECOMMENDED** | ✅ Decision-driven — absorber V0, simplifier PR/gates |
| **V3.0 IMMEDIATE NO-GO** | ✅ Un pilote, gaps non corrigés, pas de rupture doctrine justifiée |

---

## 13. Décision Morris attendue

| # | Option | Recommandation agent |
|---|--------|----------------------|
| 1 | **GO PR REX final** — merger ce rapport + métriques pilote | ✅ Prioritaire |
| 2 | **GO SFIA v2.4 consolidation** — après merge REX | ✅ Recommandé — decision-driven |
| 3 | **Maintien v2.3.1 baseline** — sans nouveau cycle méthode | Acceptable court terme |
| 4 | **NO-GO v3.0 immédiat** | ✅ Confirmé |

**Question Morris :**

> Le pilote Chantiers360 v2 est bouclé. Acceptez-vous de graver ce REX final et d'ouvrir ensuite un cycle **SFIA v2.4 — Consolidation decision-driven** ?

---

## Documents liés

| Document | Rôle |
|----------|------|
| `2026-07-07-mvp-capitalization-report.md` | Capitalisation cycle de vie MVP |
| `v0-vs-sfia-v2-methodological-comparison.md` | Comparaison méthodologique V0 |
| `2026-07-07-chantiers360-v2-pilot-metrics-capitalization-report.md` | Métriques durée / PR |
| `2026-07-06-inc-01-capitalization-report.md` | Standard chaîne INC-n |
| `sfia-v2-method-versioning-standard.md` | Versioning v2.3.1 |

---

*REX final pilote Chantiers360 v2 — 2026-07-07 — documentation-only — SFIA v2.4 / v3.0 non lancés.*
