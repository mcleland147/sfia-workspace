---
status: candidate
version: v2.0
cycle_type: SFIA v2.0 capitalization / pilot selection scoring
scope: Comparative scoring of three SFIA v2.0 pilot candidates — decision aid only
baseline: SFIA foundation v1.1 (closed)
references:
  - method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-pilot-selection-decision.md
  - method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-project-bootstrap-standard.md
  - method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-automation-levels.md
  - method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-automation-and-delivery-vision.md
---

# SFIA v2.0 — Pilot Selection Scoring

**Version :** v2.0 (candidate)  
**Statut :** Candidate — décision Morris requise  
**Branche :** `method/sfia-v2-pilot-selection-scoring`  
**Base :** `main` @ `22ddc78` (post PR #93)  
**Zone :** `method/sfia-fast-track/documentation/capitalization/sfia-v2/`

> **Ce document est un cycle de scoring et d'aide à la décision.** Il ne sélectionne aucun pilote définitivement, ne crée aucun projet sous `projects/` et ne lance aucun bootstrap réel.

## 1. Purpose

Ce document **compare les trois candidats pilotes présélectionnés par Morris** afin d'aider à choisir le premier projet pilote SFIA v2.0.

**Objectifs :**

- scorer les candidats selon le framework PR #93 ;
- comparer un candidat **SFIA / centre de service IA** avec deux candidats **métiers externes** ;
- vérifier la capacité de chaque candidat à tester **SFIA v1.1 + SFIA v2.0** ;
- vérifier la capacité à tester la **chaîne de production projet complète** ;
- vérifier la capacité à **mobiliser les rôles identifiés** ;
- recommander un candidat ou un **classement**, sans décision définitive automatique ;
- préparer une **décision Morris** avant tout bootstrap réel.

## 2. Reference baseline

| Élément | Statut |
|---------|--------|
| **SFIA v1.1** | Baseline stable — méthode opérable, clôturée |
| **Vision v2.0** | PR #90 — automation + delivery |
| **Automation levels** | PR #91 — L0–L5 + trajectoire cycle de vie |
| **Bootstrap standard** | PR #92 — structure minimale, guardrails |
| **Pilot selection framework** | PR #93 — critères, scoring, blocking |
| **Git** | **Source de vérité** |
| **Notion** | **Dormant** — hors scope pilote |
| **Interv360** | Référence — **pas pilote par défaut** |
| **Cycle courant** | **Scoring** — pas d'exécution projet |

**Décisions Morris intégrées (post-revue) :**

1. **Centre de service IA** → cible stratégique **SFIA v3.0**, pas pilote prioritaire v2.0.
2. **Chantiers360 v2** → projet **neuf from scratch** ; V0 = comparaison **fin de pilote uniquement**.

## 3. Candidates overview

| Candidate | Nom | Nature | Intérêt principal | Risque principal | Position stratégique |
|-----------|-----|--------|-------------------|------------------|----------------------|
| **A** | Centre de service IA | Projet SFIA / vision cible long terme | Alignement maximal avec trajectoire centre de service IA | Scope large, projet méta-SFIA | **Cible SFIA v3.0** — pas 1er pilote v2.0 |
| **B** | Chantiers360 v2 / assistant suivi de chantier | Métier bâtiment / projet neuf SFIA v2 | Métier externe réel + test delivery v1.1 + v2.0 | Dérive de scope si MVP non figé | **Pilote v2.0 recommandé** — from scratch |
| **C** | Suivi parcours formation apprenant / formateur | Métier formation / domaine connu Morris | BA / UX / workflow / validation sur domaine maîtrisé | Collage au contexte AFPA, scope institutionnel | **Alternative v2.0** crédible |

## 4. Scoring method

**Référence :** `sfia-v2-pilot-selection-decision.md` §11–§12.

| Paramètre | Valeur |
|-----------|--------|
| **Score max total** | 110 points |
| **Nombre de critères** | 22 |
| **Score max par critère** | 5 |
| **Seuil recommandé** | ≥ 80/110 |
| **Critère bloquant** | FAIL → rejet immédiat |
| **Décision finale** | **Morris** — le scoring aide, ne remplace pas |

**Échelle :**

| Score | Signification |
|-------|---------------|
| 0 | Non couvert |
| 1 | Très faible |
| 2 | Partiel |
| 3 | Acceptable |
| 4 | Bon |
| 5 | Très fort |

## 5. Blocking criteria review

| Blocking criterion | Candidate A | Candidate B | Candidate C | Notes |
|--------------------|---------------|-------------|-------------|-------|
| 1. Projet uniquement documentaire | PASS | PASS | PASS | Les trois permettent un delivery testable (MVP défini) |
| 2. Incapable de tester chaîne production | PASS | PASS | PASS | Chaîne §5 traversable pour chaque candidat |
| 3. Incapable de mobiliser plusieurs rôles | PASS | PASS | PASS | ≥6 rôles mobilisables (§6 framework) |
| 4. Ne teste pas SFIA v1.1 + v2.0 | PASS | PASS | PASS | Couverture conjointe possible |
| 5. Trop risqué pour premier pilote | WARN | PASS | PASS | A : scope méta — repositionné v3.0, pas 1er pilote v2.0 ; B : from scratch, V0 hors cadrage |
| 6. Impose L5 global | PASS | PASS | PASS | Aucun candidat |
| 7. Dépend de Notion/CMP | PASS | PASS | PASS | Repo-first uniquement |
| 8. Impose app/backend dès bootstrap | PASS | PASS | PASS | Bootstrap minimal compatible |
| 9. Impose modification chemin protégé | PASS | PASS | PASS | Aucun candidat |
| 10. Nécessite rouvrir Interv360 | PASS | PASS | PASS | Pilotes neufs — Interv360 hors scope |

**Verdict blocking :** aucun **FAIL** — les trois candidats restent **éligibles** au sens strict. Candidate A en **WARN** — **repositionné v3.0**, non recommandé comme 1er pilote v2.0.

## 6. Detailed scoring matrix

| # | Critère | Max | Candidate A | Candidate B | Candidate C | Notes |
|---|---------|-----|-------------|-------------|-------------|-------|
| 1 | Projet neuf | 5 | 5 | 5 | 5 | B : v2 = projet neuf — V0 exclue du cadrage et du delivery (Morris) |
| 2 | Périmètre clair et borné | 5 | 2 | 4 | 3 | A : risque scope large ; B : MVP chantier défini ; C : entités multiples |
| 3 | Valeur réelle Morris / SFIA | 5 | 5 | 4 | 4 | A : valeur SFIA directe ; B/C : valeur métier + méthode |
| 4 | Cycle de vie projet testable | 5 | 5 | 5 | 5 | Les trois traversent intention → capitalisation |
| 5 | Rôles centre de service IA | 5 | 5 | 3 | 3 | A : test direct routing/scoring/prompts ; B/C : rôles métier prioritaires |
| 6 | Couverture SFIA v1.1 | 5 | 4 | 5 | 5 | B/C : cycles classiques très naturels ; A : partiellement méta |
| 7 | Couverture SFIA v2.0 | 5 | 5 | 4 | 4 | A : automation + orchestration natifs ; B/C : delivery v2.0 |
| 8 | Compatible bootstrap minimal | 5 | 3 | 5 | 5 | A : peut dériver vers structure complexe ; B/C : README + framing suffisants |
| 9 | Compatible repo-first | 5 | 5 | 5 | 5 | Les trois |
| 10 | Faible risque initial | 5 | 2 | 5 | 3 | A : scope — v3.0 ; B : from scratch sans reprise V0 ; C : risque AFPA |
| 11 | Architecture fonctionnelle | 5 | 4 | 5 | 5 | B/C : domaines métier clairs |
| 12 | UX/UI ou parcours | 5 | 3 | 5 | 5 | B : chantier/tâches/photos ; C : progression/modules |
| 13 | Architecture technique légère | 5 | 4 | 4 | 4 | Documentation-first au bootstrap — pas d'app immédiate |
| 14 | Backlog / découpage delivery | 5 | 3 | 5 | 4 | B : cycles MVP très découpables ; A : découpage plus abstrait |
| 15 | Delivery incrémental | 5 | 3 | 5 | 4 | B : incréments métier concrets ; A : incréments méta |
| 16 | Validation / tests | 5 | 5 | 5 | 5 | Les trois — checklist, GO/NO-GO |
| 17 | PR readiness / post-merge | 5 | 5 | 5 | 5 | Les trois — boucle Git complète |
| 18 | Capitalisation méthode | 5 | 5 | 4 | 4 | A : capitalisation SFIA v3.0 ; B : comparaison V0/v2 en **fin de pilote** uniquement |
| 19 | N'exige pas app/backend immédiat | 5 | 4 | 5 | 5 | A : peut pousser vers UI portail tôt |
| 20 | N'exige pas L5 global | 5 | 5 | 5 | 5 | Les trois |
| 21 | N'ouvre pas Notion/CMP | 5 | 5 | 5 | 5 | Les trois |
| 22 | Ne réactive pas Interv360 | 5 | 5 | 5 | 5 | Les trois |
| | **TOTAL** | **110** | **92** | **98** | **93** | Scores A/C inchangés ; B +2 (projet neuf, faible risque) après décision Morris from scratch |

**Critères forts obligatoires (≥4/5) — vérification :**

| Critère fort | A | B | C |
|--------------|---|---|---|
| Valeur réelle | 5 ✅ | 4 ✅ | 4 ✅ |
| Périmètre borné | 2 ❌ | 4 ✅ | 3 ⚠️ |
| Chaîne production | 5 ✅ | 5 ✅ | 5 ✅ |
| Couverture rôles | 5 ✅ | 3 ⚠️ | 3 ⚠️ |
| SFIA v1.1 | 4 ✅ | 5 ✅ | 5 ✅ |
| SFIA v2.0 | 5 ✅ | 4 ✅ | 4 ✅ |
| Faible risque | 2 ❌ | 5 ✅ | 3 ⚠️ |
| Repo-first | 5 ✅ | 5 ✅ | 5 ✅ |

**Note :** Candidate A **échoue** aux critères forts « périmètre borné » et « faible risque » — **non recommandé comme 1er pilote v2.0** ; repositionné **cible SFIA v3.0** (décision Morris).

## 7. Candidate A analysis — Centre de service IA

### Position stratégique (décision Morris)

> **Le Centre de service IA est mieux positionné comme cible stratégique SFIA v3.0**, une fois la v2.0 validée sur des projets réels, des cycles delivery, des gates Morris, la capitalisation et une automatisation contrôlée L4 / L5 ciblé.

| Lecture | Détail |
|---------|--------|
| **Candidate A = strategic v3.0 target** | Portail demandes, qualification, scoring, routing, prompt generation, suivi, validation Morris, capitalisation |
| **Candidate A ≠ first v2.0 pilot recommended** | Pas pilote prioritaire v2.0 ; pas premier projet pilote |
| **Timing** | Après validation v2.0 sur projet métier réel (ex. Chantiers360 v2) |
| **Maturité requise** | L4 avancée / L5 ciblé plus industrialisé — orchestration, routing, prompts, gates, suivi |

### Forces

- **Alignement maximal** avec la vision SFIA long terme et le mini-centre de service IA (§4.1 framework PR #93).
- Test direct futur de **routing, scoring, génération prompts Cursor, validation Morris, capitalisation**.
- Chaîne **ChatGPT ↔ Cursor ↔ Git ↔ Markdown ↔ PR** — cible d'orchestration complète.
- **Capitalisation méthode** naturelle — chaque cycle enrichirait SFIA au-delà de v2.0.

### Risques (pour un 1er pilote v2.0)

- Projet **très méta-SFIA** — pas de produit métier externe au départ.
- **Scope large** — portail, qualification, scoring, routing, suivi, validation = nombreux modules.
- **Périmètre difficile à borner** — suppose maturité v2.0 déjà prouvée sur pilote métier.
- Risque d'**exercice documentaire** si lancé trop tôt dans la trajectoire v2.0.

### Couverture

| Dimension | Évaluation |
|-----------|------------|
| Chaîne projet | **Très forte** — intention → capitalisation sur flux SFIA (phase v3.0) |
| Rôles | **Très forte** — Product, PMO, BA, Delivery, Cursor, QA, Release, Knowledge |
| SFIA v1.1 + v2.0 | **Forte v2.0/v3.0** — surtout automation et orchestration avancée |
| Delivery | **Moyenne** — delivery méta, pas métier externe |

### Conditions de viabilité (phase ultérieure)

- Envisager **après** pilote métier v2.0 réussi (ex. Chantiers360 v2).
- **MVP strict** si lancé : demande projet → qualification → scoring → routing SFIA → décision Morris.
- Maturité **L4 avancée / L5 ciblé** requise — pas au niveau actuel du 1er pilote v2.0.

## 8. Candidate B analysis — Chantiers360 v2 / suivi de chantier

### Règle from scratch (décision Morris)

> **Chantiers360 v2 doit être conduit comme un projet neuf.** Les travaux réalisés dans la V0 ne doivent **pas** être utilisés comme base de cadrage, de documentation, de conception, de backlog, de code ou de structure projet. La V0 pourra **uniquement** être consultée **en fin de pilote**, dans un cycle de comparaison et de capitalisation, afin d'évaluer les écarts de méthode, de qualité, de structuration, de delivery et de traçabilité entre l'approche initiale et l'approche SFIA v1.1 + v2.0.

| V0 | Statut |
|----|--------|
| **V0 = référence comparative finale uniquement** | Cycle dédié post-pilote — comparaison méthodologique |
| **V0 ≠ input de cadrage ou de delivery** | Interdit pendant bootstrap, framing, cycles initiaux |

**Interdictions explicites pendant le pilote :**

- pas de reprise du **cadrage** V0 ;
- pas de reprise de la **documentation** V0 ;
- pas de reprise du **backlog** V0 ;
- pas de reprise du **code** V0 ;
- pas de reprise de la **structure projet** V0 ;
- pas de reprise comme **modèle fonctionnel** pendant les cycles initiaux.

**Point de départ :** bootstrap standard SFIA v2.0 — `README.md` + `00-framing/project-framing.md` neufs, intention et scope reformulés from scratch.

### Forces

- **Métier externe réel** — artisans, PME bâtiment, problème concret.
- **Très bon test produit / UX / workflow / delivery** — chantiers, tâches, réserves, photos, compte rendu.
- **Projet neuf** — test pur de SFIA v1.1 + v2.0 sans dette V0 pendant le delivery.
- **Périmètre MVP clair** — chantier → tâches → réserves → statut → compte rendu rapide.
- **Bootstrap minimal** naturel — cadrage métier puis cycles incrémentaux.
- **Comparaison V0/v2 en fin de pilote** — capitalisation méthodologique différée et contrôlée.

### Risques

- **Dérive de scope** si le MVP n'est pas figé dès le cadrage.
- Tentation de consulter la V0 **trop tôt** — à résister jusqu'au cycle de capitalisation.
- Moins aligné avec la **vision centre de service IA** directe (rôles méta-SFIA) — cohérent pour un pilote métier v2.0.

### Couverture

| Dimension | Évaluation |
|-----------|------------|
| Chaîne projet | **Très forte** — parcours complet sur produit métier |
| Rôles | **Forte** — Product, BA, UX, Archi fonctionnelle, Delivery, Cursor, QA, Release |
| SFIA v1.1 + v2.0 | **Très forte v1.1**, **bonne v2.0** — cycles delivery classiques |
| Delivery | **Très forte** — incréments métier concrets |

### Conditions de viabilité

- **From scratch obligatoire** — aucun élément V0 repris au bootstrap ni aux cycles initiaux.
- Bootstrap selon `sfia-v2-project-bootstrap-standard.md`.
- Nom repo suggéré (indicatif) : `projects/chantiers360-v2/` — validation Morris requise.
- Cycle ultérieur : **comparaison V0 vs SFIA v2** — capitalisation, pas input delivery.

## 9. Candidate C analysis — Suivi parcours formation

### Forces

- **Domaine métier connu** de Morris (expérience AFPA).
- **Bon test BA / UX / workflow / validation** — apprenants, modules, progression, évaluations.
- **Utilisateurs multiples** — apprenant, formateur, responsable pédagogique.
- **Workflow pédagogique** riche — progression, difficultés, actions formateur, bilan.

### Risques

- **Collage au contexte AFPA** — risque de scope institutionnel, données sensibles, processus lourds.
- **Périmètre étendu** — modules, absences, évaluations, bilans = nombreuses entités.
- Moins différenciant pour tester la **vision centre de service IA** que Candidate A.

### Couverture

| Dimension | Évaluation |
|-----------|------------|
| Chaîne projet | **Forte** — workflow complet testable |
| Rôles | **Forte** — Product, BA, UX, Archi fonctionnelle, Delivery, QA |
| SFIA v1.1 + v2.0 | **Très forte v1.1**, **bonne v2.0** |
| Delivery | **Bonne** — incréments possibles mais scope à surveiller |

### Conditions de viabilité

- **Règle :** projet **générique formation**, pas projet AFPA — aucune référence institutionnelle dans le cadrage.
- **MVP strict :** apprenant → modules → progression → difficultés → actions formateur.
- Exclure dès le cadrage : RH institutionnel, conformité réglementaire lourde, intégrations SI.

## 10. Comparative synthesis

| Dimension | Best candidate | Rationale |
|-----------|----------------|-----------|
| Vision SFIA long terme / v3.0 | **A** | Centre de service IA = cible **SFIA v3.0**, pas 1er pilote v2.0 |
| Métier externe réel | **B** | Bâtiment / chantier — problème concret hors SFIA |
| Comparaison ancienne approche vs SFIA v2 | **B** | V0 consultée **fin de pilote** — comparaison capitalisation |
| Domaine connu Morris | **C** | Formation / pédagogie — expérience AFPA |
| Chaîne de production complète | **B** | Équilibre métier + méthode sur toute la chaîne |
| Rôles centre de service IA | **A** | Routing, scoring, prompts — phase v3.0 |
| Simplicité de bootstrap | **B** | MVP chantier simple, framing from scratch |
| Faible risque (1er pilote v2.0) | **B** | From scratch — V0 exclue du cadrage et delivery |
| Potentiel UX/UI | **B / C** | B : terrain/photos ; C : parcours progression |
| Potentiel delivery incrémental | **B** | Incréments métier très découpables |
| Potentiel capitalisation méthode | **B puis A** | B : comparaison V0/v2 fin pilote ; A : cible v3.0 |

## 11. Ranking

| Rank | Candidate | Score | Decision rationale |
|------|-----------|-------|-------------------|
| **1** | **B — Chantiers360 v2** | **98/110** | 1er pilote v2.0 recommandé : métier externe, from scratch, MVP borné, bootstrap simple, chaîne complète |
| **2** | **C — Suivi parcours formation** | **93/110** | Alternative v2.0 crédible — BA/UX/validation, domaine connu |
| **3** | **A — Centre de service IA** | **92/110** | **Cible SFIA v3.0** — alignement vision maximal, pas 1er pilote v2.0 |

**Arbitrage qualitatif (post-décision Morris) :** B (98) reste **1er pilote v2.0 recommandé**. A conserve un score élevé mais est **repositionné v3.0** — score ≠ priorité pilote. C (93) reste alternative métier v2.0.

## 12. Recommendation

**Recommendation for Morris validation** — recommandation **non définitive**.

### Recommandation principale

**Retenir Candidate B — Chantiers360 v2** comme **premier pilote SFIA v2.0**, sous conditions :

1. Bootstrap **from scratch** selon `sfia-v2-project-bootstrap-standard.md` ;
2. **Aucun élément V0** repris — cadrage, docs, backlog, code, structure ;
3. V0 consultée **uniquement en fin de pilote** — cycle dédié comparaison / capitalisation ;
4. MVP figé : chantier → tâches → réserves → statut → compte rendu rapide ;
5. Gate Morris sur chaque extension de scope.

**Pourquoi B en premier :** teste SFIA v1.1 + v2.0 sur un **produit métier réel**, **projet neuf**, périmètre borné et delivery incrémental — sans risque de reprise V0 ni scope méta de A.

### Alternative v2.0

**Candidate C — Suivi parcours formation** — alternative métier v2.0 crédible si Morris préfère formation générique (règle « pas AFPA », MVP strict).

### Cible stratégique long terme (non pilote v2.0)

**Candidate A — Centre de service IA** — **cible SFIA v3.0**, pas 2e pilote v2.0. À envisager **après** validation v2.0 sur pilote métier (B ou C), avec maturité L4 avancée / L5 ciblé. Futur portail : demandes → qualification → scoring → routing → prompts → suivi → validation Morris → capitalisation.

## 13. Decision options for Morris

| Option | Decision | Consequence |
|--------|----------|-------------|
| **1** | Retenir **Candidate A** | **Non recommandé** comme 1er pilote v2.0 — réservé cible **SFIA v3.0** phase ultérieure |
| **2** | Retenir **Candidate B** | Bootstrap `chantiers360-v2` **from scratch** ; V0 = comparaison fin pilote uniquement |
| **3** | Retenir **Candidate C** | Bootstrap formation générique ; règle anti-AFPA ; alternative v2.0 |
| **4** | Cycle complémentaire **B vs C** | `sfia-v2-pilot-candidate-framing.md` — si arbitrage final requis |
| **5** | Reporter / nouveaux candidats | Retour framework PR #93 |

## 14. Proposed next cycle

| Situation Morris | Prochain cycle |
|------------------|----------------|
| **Candidate B validé** (recommandé) | `sfia-v2-real-project-bootstrap.md` — bootstrap minimal **Chantiers360 v2 from scratch** |
| Candidate C validé | `sfia-v2-real-project-bootstrap.md` — bootstrap formation générique |
| B vs C encore ouvert | `sfia-v2-pilot-final-decision.md` ou `sfia-v2-pilot-candidate-framing.md` |
| Candidate A | **Reporter** — cible v3.0, après pilote métier v2.0 |
| **Fin pilote B réussi** | Cycle dédié **comparaison V0 vs SFIA v2** — capitalisation (V0 consultée alors uniquement) |

**Règles bootstrap B :**

- partir de **zéro** — bootstrap standard SFIA v2.0 ;
- **aucun élément V0** repris (cadrage, docs, backlog, code, structure) ;
- comparaison V0 **reportée** au cycle de capitalisation post-pilote ;
- **aucun bootstrap réel** sans GO Morris explicite ;
- **aucun dossier** `projects/` créé dans ce cycle.

## 15. Decision provisional

**Décision proposée : SFIA V2.0 PILOT SELECTION SCORING REFINED — PENDING MORRIS DECISION**

| Élément | Statut |
|---------|--------|
| Scoring réalisé | Oui — 3 candidats, 22 critères |
| Décisions Morris intégrées | Oui — A → v3.0 ; B → from scratch |
| Pilote sélectionné définitivement | **Non** — recommandation B, validation Morris requise |
| Projet créé sous `projects/` | **Non** |
| Bootstrap réel lancé | **Non** |
| Classement | B (98) > C (93) > A (92) |
| A repositionné | **SFIA v3.0** — pas 1er pilote v2.0 |
| B from scratch | **Oui** — V0 fin pilote uniquement |
| Blocking | Aucun FAIL — A en WARN risque (v3.0) |

**Action Morris :** choisir une option §13 et valider ou corriger la recommandation.

---

**Références :**

- `sfia-v2-pilot-selection-decision.md`
- `sfia-v2-project-bootstrap-standard.md`
- `sfia-v2-automation-levels.md`
- `sfia-v2-automation-and-delivery-vision.md`
