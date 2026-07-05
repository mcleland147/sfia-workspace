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

## 3. Candidates overview

| Candidate | Nom | Nature | Intérêt principal | Risque principal |
|-----------|-----|--------|-------------------|------------------|
| **A** | Centre de service IA | Projet SFIA / vision cible | Alignement maximal avec la trajectoire v2.0 long terme | Scope large, projet méta-SFIA |
| **B** | Chantiers360 v2 / assistant suivi de chantier | Métier bâtiment / comparaison V0 vs SFIA v2 | Métier externe réel + mesure d'amélioration méthodologique | Reprise de l'ancienne V0 au lieu d'un cadrage propre |
| **C** | Suivi parcours formation apprenant / formateur | Métier formation / domaine connu Morris | BA / UX / workflow / validation sur domaine maîtrisé | Collage au contexte AFPA, scope institutionnel |

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
| 5. Trop risqué pour premier pilote | WARN | PASS | PASS | A : scope méta — risque élevé sans MVP strict |
| 6. Impose L5 global | PASS | PASS | PASS | Aucun candidat |
| 7. Dépend de Notion/CMP | PASS | PASS | PASS | Repo-first uniquement |
| 8. Impose app/backend dès bootstrap | PASS | PASS | PASS | Bootstrap minimal compatible |
| 9. Impose modification chemin protégé | PASS | PASS | PASS | Aucun candidat |
| 10. Nécessite rouvrir Interv360 | PASS | PASS | PASS | Pilotes neufs — Interv360 hors scope |

**Verdict blocking :** aucun **FAIL** — les trois candidats restent **éligibles**. Candidate A en **WARN** sur le risque pilote (critère 5) — cadrage MVP strict requis si retenu.

## 6. Detailed scoring matrix

| # | Critère | Max | Candidate A | Candidate B | Candidate C | Notes |
|---|---------|-----|-------------|-------------|-------------|-------|
| 1 | Projet neuf | 5 | 5 | 4 | 5 | B : V0 Chantiers360 existe — v2 = cadrage neuf mais référence historique |
| 2 | Périmètre clair et borné | 5 | 2 | 4 | 3 | A : risque scope large ; B : MVP chantier défini ; C : entités multiples |
| 3 | Valeur réelle Morris / SFIA | 5 | 5 | 4 | 4 | A : valeur SFIA directe ; B/C : valeur métier + méthode |
| 4 | Cycle de vie projet testable | 5 | 5 | 5 | 5 | Les trois traversent intention → capitalisation |
| 5 | Rôles centre de service IA | 5 | 5 | 3 | 3 | A : test direct routing/scoring/prompts ; B/C : rôles métier prioritaires |
| 6 | Couverture SFIA v1.1 | 5 | 4 | 5 | 5 | B/C : cycles classiques très naturels ; A : partiellement méta |
| 7 | Couverture SFIA v2.0 | 5 | 5 | 4 | 4 | A : automation + orchestration natifs ; B/C : delivery v2.0 |
| 8 | Compatible bootstrap minimal | 5 | 3 | 5 | 5 | A : peut dériver vers structure complexe ; B/C : README + framing suffisants |
| 9 | Compatible repo-first | 5 | 5 | 5 | 5 | Les trois |
| 10 | Faible risque initial | 5 | 2 | 4 | 3 | A : scope ; B : baggage V0 ; C : risque AFPA |
| 11 | Architecture fonctionnelle | 5 | 4 | 5 | 5 | B/C : domaines métier clairs |
| 12 | UX/UI ou parcours | 5 | 3 | 5 | 5 | B : chantier/tâches/photos ; C : progression/modules |
| 13 | Architecture technique légère | 5 | 4 | 4 | 4 | Documentation-first au bootstrap — pas d'app immédiate |
| 14 | Backlog / découpage delivery | 5 | 3 | 5 | 4 | B : cycles MVP très découpables ; A : découpage plus abstrait |
| 15 | Delivery incrémental | 5 | 3 | 5 | 4 | B : incréments métier concrets ; A : incréments méta |
| 16 | Validation / tests | 5 | 5 | 5 | 5 | Les trois — checklist, GO/NO-GO |
| 17 | PR readiness / post-merge | 5 | 5 | 5 | 5 | Les trois — boucle Git complète |
| 18 | Capitalisation méthode | 5 | 5 | 4 | 4 | A : capitalisation SFIA directe ; B : comparaison V0/v2 |
| 19 | N'exige pas app/backend immédiat | 5 | 4 | 5 | 5 | A : peut pousser vers UI portail tôt |
| 20 | N'exige pas L5 global | 5 | 5 | 5 | 5 | Les trois |
| 21 | N'ouvre pas Notion/CMP | 5 | 5 | 5 | 5 | Les trois |
| 22 | Ne réactive pas Interv360 | 5 | 5 | 5 | 5 | Les trois |
| | **TOTAL** | **110** | **92** | **96** | **93** | |

**Critères forts obligatoires (≥4/5) — vérification :**

| Critère fort | A | B | C |
|--------------|---|---|---|
| Valeur réelle | 5 ✅ | 4 ✅ | 4 ✅ |
| Périmètre borné | 2 ❌ | 4 ✅ | 3 ⚠️ |
| Chaîne production | 5 ✅ | 5 ✅ | 5 ✅ |
| Couverture rôles | 5 ✅ | 3 ⚠️ | 3 ⚠️ |
| SFIA v1.1 | 4 ✅ | 5 ✅ | 5 ✅ |
| SFIA v2.0 | 5 ✅ | 4 ✅ | 4 ✅ |
| Faible risque | 2 ❌ | 4 ✅ | 3 ⚠️ |
| Repo-first | 5 ✅ | 5 ✅ | 5 ✅ |

**Note :** Candidate A **échoue** aux critères forts « périmètre borné » et « faible risque » — retenu seulement avec **MVP strict** et validation Morris explicite.

## 7. Candidate A analysis — Centre de service IA

### Forces

- **Alignement maximal** avec la vision SFIA v2.0 long terme et le mini-centre de service IA (§4.1 framework PR #93).
- Test direct de **routing, scoring, génération prompts Cursor, validation Morris, capitalisation**.
- Chaîne **ChatGPT ↔ Cursor ↔ Git ↔ Markdown ↔ PR** testée de bout en bout sur un flux méta-SFIA.
- **Capitalisation méthode** naturelle — chaque cycle enrichit SFIA v2.0.

### Risques

- Projet **très méta-SFIA** — risque de produire de la méthode sans produit métier externe.
- **Scope large** — portail, qualification, scoring, routing, suivi, validation = nombreux modules.
- **Périmètre difficile à borner** sans MVP explicite.
- Risque de devenir un **exercice documentaire** si le delivery concret est repoussé.

### Couverture

| Dimension | Évaluation |
|-----------|------------|
| Chaîne projet | **Très forte** — intention → capitalisation sur flux SFIA |
| Rôles | **Très forte** — Product, PMO, BA, Delivery, Cursor, QA, Release, Knowledge |
| SFIA v1.1 + v2.0 | **Forte v2.0**, bonne v1.1 — surtout automation et orchestration |
| Delivery | **Moyenne** — delivery méta, pas métier externe |

### Conditions de viabilité

- **MVP strict obligatoire :** demande projet → qualification → scoring → routing SFIA → décision Morris.
- Pas de portail complet au bootstrap — documentation + workflow repo-first d'abord.
- Bootstrap réel **uniquement** avec scope figé et gate Morris sur chaque extension.

## 8. Candidate B analysis — Chantiers360 v2 / suivi de chantier

### Forces

- **Métier externe réel** — artisans, PME bâtiment, problème concret.
- **Très bon test produit / UX / workflow / delivery** — chantiers, tâches, réserves, photos, compte rendu.
- **Comparaison V0 vs SFIA v2** — mesure tangible de l'amélioration méthodologique.
- **Périmètre MVP clair** — chantier → tâches → réserves → statut → compte rendu rapide.
- **Bootstrap minimal** naturel — cadrage métier puis cycles incrémentaux.

### Risques

- **Reprise de l'ancienne V0** — tentation de copier au lieu de repartir du cadrage SFIA.
- Dette conceptuelle si la V0 est importée sans requalification.
- Moins aligné avec la **vision centre de service IA** directe (rôles méta-SFIA).

### Couverture

| Dimension | Évaluation |
|-----------|------------|
| Chaîne projet | **Très forte** — parcours complet sur produit métier |
| Rôles | **Forte** — Product, BA, UX, Archi fonctionnelle, Delivery, Cursor, QA, Release |
| SFIA v1.1 + v2.0 | **Très forte v1.1**, **bonne v2.0** — cycles delivery classiques |
| Delivery | **Très forte** — incréments métier concrets |

### Conditions de viabilité

- **Règle :** Chantiers360 V0 = **référence comparative uniquement**, pas base de code ou de docs.
- Repartir de **bootstrap standard** — `README.md` + `project-framing.md` neufs.
- Nom repo suggéré (indicatif) : `projects/chantiers360-v2/` — validation Morris requise.

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
| Vision SFIA long terme | **A** | Centre de service IA = cible v2.0 directe |
| Métier externe réel | **B** | Bâtiment / chantier — problème concret hors SFIA |
| Comparaison ancienne approche vs SFIA v2 | **B** | V0 Chantiers360 vs cadrage SFIA neuf |
| Domaine connu Morris | **C** | Formation / pédagogie — expérience AFPA |
| Chaîne de production complète | **B** | Équilibre métier + méthode sur toute la chaîne |
| Rôles centre de service IA | **A** | Routing, scoring, prompts natifs |
| Simplicité de bootstrap | **B** | MVP chantier simple, framing clair |
| Faible risque | **B** | Risque maîtrisé avec règle V0 = référence only |
| Potentiel UX/UI | **B / C** | B : terrain/photos ; C : parcours progression |
| Potentiel delivery incrémental | **B** | Incréments métier très découpables |
| Potentiel capitalisation méthode | **A / B** | A : SFIA direct ; B : comparaison V0/v2 documentée |

## 11. Ranking

| Rank | Candidate | Score | Decision rationale |
|------|-----------|-------|-------------------|
| **1** | **B — Chantiers360 v2** | **96/110** | Meilleur compromis : métier externe, MVP borné, bootstrap simple, comparaison V0/v2, faible risque relatif, chaîne complète |
| **2** | **C — Suivi parcours formation** | **93/110** | Fort sur BA/UX/validation, domaine connu — légèrement moins borné et risque AFPA |
| **3** | **A — Centre de service IA** | **92/110** | Alignement vision maximal — pénalisé sur périmètre et risque ; candidat cible long terme ou 2e pilote |

**Arbitrage qualitatif :** les scores A (92) et C (93) sont proches — B (96) s'impose sur **périmètre borné**, **faible risque**, **delivery incrémental** et **bootstrap minimal**, critères critiques pour un **premier pilote v2.0**.

## 12. Recommendation

**Recommendation for Morris validation** — recommandation **non définitive**.

### Recommandation principale

**Retenir Candidate B — Chantiers360 v2** comme **premier pilote SFIA v2.0**, sous conditions :

1. Bootstrap neuf selon `sfia-v2-project-bootstrap-standard.md` ;
2. Chantiers360 V0 = **référence comparative only** — pas de reprise de code ou docs ;
3. MVP figé : chantier → tâches → réserves → statut → compte rendu rapide ;
4. Gate Morris sur chaque extension de scope.

**Pourquoi B en premier :** teste SFIA v1.1 + v2.0 sur un **produit métier réel**, avec **périmètre borné**, **delivery incrémental** mesurable et **comparaison méthodologique** V0 vs SFIA v2 — sans les risques de scope de A ni le risque institutionnel de C.

### Alternative recommandée

**Candidate C — Suivi parcours formation** si Morris préfère un domaine **formation générique** plutôt que bâtiment — sous règle « pas AFPA » et MVP strict.

### Projet cible long terme (non pilote immédiat)

**Candidate A — Centre de service IA** — recommandé comme **2e pilote** ou **pilote parallèle ultérieur** après validation de la chaîne delivery sur B (ou C), avec MVP strict : demande → qualification → scoring → routing → décision Morris.

## 13. Decision options for Morris

| Option | Decision | Consequence |
|--------|----------|-------------|
| **1** | Retenir **Candidate A** | Bootstrap avec MVP centre de service strict ; risque scope — cadrage dédié recommandé avant bootstrap |
| **2** | Retenir **Candidate B** | Bootstrap `chantiers360-v2` (nom à valider) ; comparaison V0 documentée ; delivery métier incrémental |
| **3** | Retenir **Candidate C** | Bootstrap formation générique ; règle anti-AFPA explicite dans project-framing |
| **4** | Cycle complémentaire sur **deux finalistes** (ex. B + C) | Cycle `sfia-v2-pilot-candidate-framing.md` — cadrage MVP comparatif avant décision |
| **5** | Reporter et proposer **nouveaux candidats** | Retour au framework PR #93 — nouvelle shortlist |

## 14. Proposed next cycle

| Situation Morris | Prochain cycle |
|------------------|----------------|
| Pilote retenu (A, B ou C) | `sfia-v2-real-project-bootstrap.md` — bootstrap minimal réel |
| Deux finalistes proches (ex. B vs C) | `sfia-v2-pilot-final-decision.md` ou `sfia-v2-pilot-candidate-framing.md` |
| Besoin cadrage MVP avant choix | `sfia-v2-pilot-candidate-framing.md` |

**Règles :**

- **aucun bootstrap réel** sans GO Morris explicite ;
- **aucun dossier** `projects/` créé dans ce cycle ;
- compléter le **decision template** (PR #93 §15) après choix Morris.

## 15. Decision provisional

**Décision proposée : SFIA V2.0 PILOT SELECTION SCORING DOCUMENTED — PENDING MORRIS DECISION**

| Élément | Statut |
|---------|--------|
| Scoring réalisé | Oui — 3 candidats, 22 critères |
| Pilote sélectionné définitivement | **Non** — recommandation B, validation Morris requise |
| Projet créé sous `projects/` | **Non** |
| Bootstrap réel lancé | **Non** |
| Classement | B (96) > C (93) > A (92) |
| Blocking | Aucun FAIL — A en WARN risque |

**Action Morris :** choisir une option §13 et valider ou corriger la recommandation.

---

**Références :**

- `sfia-v2-pilot-selection-decision.md`
- `sfia-v2-project-bootstrap-standard.md`
- `sfia-v2-automation-levels.md`
- `sfia-v2-automation-and-delivery-vision.md`
