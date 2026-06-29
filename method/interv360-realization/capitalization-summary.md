# SFIA — Interv360 realization capitalization summary

**Type** : Synthèse de capitalisation méthode  
**Origine de capitalisation** : Interv360  
**Référence** : SFIA delivery / realization method  
**Statut** : Ready for closure  
**Branche** : `method/interv360-realization-capitalization`  
**Documents associés** : [`capitalization-plan.md`](capitalization-plan.md), [`realization-method.md`](realization-method.md), [`realization-deliverables-standard.md`](realization-deliverables-standard.md), [`realization-checklists.md`](realization-checklists.md), [`realization-templates.md`](realization-templates.md), [`realization-prompt-family.md`](realization-prompt-family.md)

---

## 1. Objectif

Ce document synthétise le cycle de capitalisation de la méthode de préparation réalisation issue du cas Interv360.

Le cycle transforme les travaux réalisés sur Interv360 en méthode générique SFIA réutilisable sur d'autres projets.

Cette capitalisation est réalisée **avant tout développement applicatif**.

Elle **ne constitue pas** une autorisation de coder.

---

## 2. Décision de clôture

**Le cycle de capitalisation Interv360 realization peut être clôturé.**

### Justification

| Élément | Statut |
|---------|--------|
| Méthode complète formalisée | ✅ `realization-method.md` |
| Standard des livrables produit | ✅ `realization-deliverables-standard.md` |
| Checklists réutilisables produites | ✅ `realization-checklists.md` |
| Templates génériques produits | ✅ `realization-templates.md` |
| Famille de prompts capitalisée | ✅ `realization-prompt-family.md` |
| Garde-fous anti-démarrage prématuré consolidés | ✅ |
| Aucune autorisation de code donnée | ✅ |

### Statut recommandé

**`Ready for method PR`**

Cela signifie que la capitalisation documentaire est suffisante pour proposer une PR de clôture vers `main`, sans déclencher de développement ni de futur cycle Interv360 automatiquement.

---

## 3. Livrables produits

| Livrable | Statut | Rôle |
|----------|:------:|------|
| [`capitalization-plan.md`](capitalization-plan.md) | ✅ | Ouverture du cycle |
| [`realization-method.md`](realization-method.md) | ✅ | Méthode complète de préparation réalisation |
| [`realization-deliverables-standard.md`](realization-deliverables-standard.md) | ✅ | Standard des livrables par phase |
| [`realization-checklists.md`](realization-checklists.md) | ✅ | Checklists réutilisables |
| [`realization-templates.md`](realization-templates.md) | ✅ | Modèles génériques de documents |
| [`realization-prompt-family.md`](realization-prompt-family.md) | ✅ | Famille de prompts Cursor / ChatGPT |
| [`capitalization-summary.md`](capitalization-summary.md) | ✅ | Synthèse et clôture |

**Commits du cycle (7) :**

| Commit | Message |
|--------|---------|
| `4c7f512` | docs: open Interv360 realization capitalization |
| `1761271` | docs: define realization preparation method |
| `db1ee6d` | docs: standardize realization deliverables |
| `c8264d6` | docs: add realization method checklists |
| `d2186e5` | docs: add realization document templates |
| `72e10e0` | docs: add realization prompt family |
| *(ce commit)* | docs: summarize Interv360 realization capitalization |

---

## 4. Apports de la capitalisation

| Apport | Description |
|--------|-------------|
| Passage cas projet → méthode générique | Extraction des patterns de décision Interv360 sans universaliser les spécificités métier |
| Séparation préparation / réalisation | Cycles documentaires distincts avant toute autorisation de code |
| Distinction Go documentaire / Go réalisation | Évite les démarrages implicites |
| Standardisation des livrables | 7 phases, 44 livrables types, critères qualité et nommage |
| Checklists de readiness | Par phase + transverses (garde-fous, PR, anti-démarrage) |
| Templates réutilisables | 10 modèles markdown génériques |
| Prompts réutilisables | 12 prompts Cursor / ChatGPT avec variables et garde-fous |
| Contrôle anti-démarrage prématuré | Checklist et anti-patterns documentés |
| Contrôle PR documentaire | Processus de revue avant merge |
| Garde-fous code / projet / API / tickets | Consolidés dans tous les livrables |

---

## 5. Méthode obtenue

La méthode couvre **7 étapes** du cadrage fonctionnel vers une décision explicite de réalisation, **sans démarrer prématurément le code**.

| Étape | Finalité |
|-------|----------|
| **1. Delivery preparation** | Cadrer MVP, lots, backlog macro, priorisation, slicing |
| **2. Delivery detailing** | Détailler l'incrément prioritaire (stories, critères, readiness) |
| **3. Realization preparation** | Préparer slicing, cadrage technique, QA, estimation indicative |
| **4. Technical design** | Cadrer architecture, data, API, règles métier sans implémentation |
| **5. Implementation planning** | Préparer démo, QA, refus, backlog préparatoire |
| **6. Realization start** | Comparer stack, structure, front/back, checklist avant code |
| **7. Implementation Go / No-go** | Décider explicitement Go / No-go et autorisation de code |

Référence complète : [`realization-method.md`](realization-method.md)

---

## 6. Standard documentaire obtenu

Le standard précise pour chaque phase : livrables attendus, rôle, contenu minimal, critères de sortie et garde-fous.

| Élément standardisé | Résultat |
|---------------------|----------|
| Niveaux de livrables | Plan, fond, checklist, synthèse, template, prompt |
| Phases couvertes | 7 |
| Livrables types | 44 |
| Critères qualité | 10 critères par livrable |
| Règles de nommage | Conventions `[cycle]-plan.md`, `[increment]-[topic].md`, etc. |
| Cycle type documentaire | 9 étapes (ouvrir → produire → synthèse → PR → merge → nettoyage) |
| Livrables prématurés | Code, API, SQL, tests, tickets, sprint plan, production |

Référence complète : [`realization-deliverables-standard.md`](realization-deliverables-standard.md)

---

## 7. Checklists obtenues

| Checklist | Usage |
|-----------|-------|
| Delivery preparation | Readiness MVP et stratégie de livraison |
| Delivery detailing | Incrément prioritaire suffisamment détaillé |
| Realization preparation | Passage vers cadrage technique sans code |
| Technical design | Décisions techniques sans implémentation |
| Implementation planning | Préparation opérationnelle sans code |
| Realization start | Décisions préalables, Go documentaire |
| Implementation Go / No-go | Décision explicite avant réalisation |
| Garde-fous permanents | Anti-dérive pendant tous les cycles préparatoires |
| Qualité documentaire | Exploitabilité de chaque livrable |
| PR documentaire | Contrôle avant proposition de PR |
| Anti-démarrage prématuré | Détection d'autorisations implicites |

Référence complète : [`realization-checklists.md`](realization-checklists.md)

---

## 8. Templates obtenus

| Template | Usage |
|----------|-------|
| Plan de cycle | Ouverture d'une phase documentaire |
| Livrable de fond | Contenu structurant (analyse, décisions, risques) |
| Décision | Comparaison d'options et recommandation |
| Checklist | Readiness et conditions bloquantes |
| Synthèse de cycle | Clôture avec statut recommandé |
| Estimation indicative | Charge relative, non contractuelle |
| Backlog préparatoire | Items documentaires avant tickets réels |
| Scénarios QA | Parcours nominaux testables |
| Scénarios de refus | Refus métier et cas limites |
| Go / No-go summary | Décision explicite et autorisation de code |

Référence complète : [`realization-templates.md`](realization-templates.md) — 15 variables génériques documentées.

---

## 9. Famille de prompts obtenue

| Prompt | Usage |
|--------|-------|
| Ouverture de cycle | Branche + plan + commit local |
| Livrable de fond | Production document structurant |
| Décision | Document de comparaison et arbitrage |
| Checklist | Readiness projet ou incrément |
| Synthèse de cycle | Clôture et statut recommandé |
| Estimation indicative | Estimation non contractuelle |
| Backlog préparatoire | Backlog documentaire |
| Scénarios QA | QA nominale documentaire |
| Scénarios de refus | Refus métier documentaires |
| Go / No-go | Décision explicite, autorisation ou refus code |
| PR documentaire | Push + PR, pas de merge auto |
| Nettoyage branche | Sync main après merge |

Référence complète : [`realization-prompt-family.md`](realization-prompt-family.md) — 14 variables communes, 10 anti-patterns, bloc garde-fous réutilisable.

---

## 10. Ce que la capitalisation ne fait pas

| Non réalisé | Raison |
|-------------|--------|
| Elle ne démarre pas le développement | Capitalisation méthode uniquement |
| Elle ne crée pas de projet applicatif | Hors périmètre du cycle |
| Elle ne choisit pas une stack concrète pour Interv360 | Décision réservée au futur Go / No-go |
| Elle ne crée pas de tickets Jira réels | Backlog reste documentaire |
| Elle ne crée pas de sprint plan ferme | Planification indicative uniquement en amont |
| Elle ne crée pas d'API | Stratégie documentaire seulement |
| Elle ne crée pas de SQL | Stratégie data à confirmer avant implémentation |
| Elle ne crée pas de tests automatisés | QA documentaire préparée |
| Elle ne remplace pas le futur Go / No-go réalisation | Cycle distinct à ouvrir explicitement |
| Elle ne donne pas d'autorisation de code | Décision explicite requise |
| Elle ne déplace pas encore les fichiers vers `docs/methods/` | Généralisation SFIA = futur cycle dédié |

---

## 11. Garde-fous consolidés

| Garde-fou | Statut |
|-----------|:------:|
| Pas de code | ✅ |
| Pas de projet applicatif | ✅ |
| Pas de framework | ✅ |
| Pas d'API | ✅ |
| Pas d'OpenAPI | ✅ |
| Pas de payload JSON | ✅ |
| Pas de SQL | ✅ |
| Pas de tests automatisés | ✅ |
| Pas de scripts | ✅ |
| Pas de tickets Jira réels | ✅ |
| Pas de sprint plan ferme | ✅ |
| Pas de modification Figma / Penpot | ✅ |
| Exports non committés | ✅ |
| Pas de push / PR / merge automatique | ✅ |
| Autorisation de code non donnée | ✅ |

---

## 12. Recommandation de suite

La recommandation actuelle est de **clôturer la capitalisation par PR documentaire vers `main`**.

Après merge, **deux suites possibles** — aucune n'est déclenchée automatiquement :

### 1. Généralisation méthode SFIA

- Déplacer ou répliquer les livrables stabilisés vers l'espace méthode officiel du repo ;
- Par exemple `docs/methods/process/` ou `docs/methods/delivery/` si la convention est retenue ;
- À faire dans un **cycle dédié** après revue et validation de la capitalisation.

### 2. Retour Interv360

- Ouvrir un futur cycle `delivery/interv360-implementation-go-no-go` ;
- Décider explicitement Go / No-go réalisation ;
- Confirmer stack concrète ;
- Confirmer stratégie data ;
- Geler le périmètre INC-01 ;
- Donner ou refuser l'autorisation de créer le projet applicatif et de coder.

**Décision de principe héritée (Interv360) :** GO d'intention pour poursuivre vers la réalisation — mais la capitalisation méthode devait précéder tout développement. Cette intention **ne constitue pas** une autorisation de code.

---

## 13. Décision PR

**La branche `method/interv360-realization-capitalization` peut être poussée et proposée en PR vers `main`.**

### PR recommandée

| Critère | Attendu |
|---------|---------|
| Type | PR documentaire |
| Fichiers | Uniquement sous `method/interv360-realization/` (7 fichiers) |
| Exclusions | Aucun fichier `exports/`, code, API, SQL, tickets |
| Autorisation de code | Non donnée par la PR |

### Titre PR recommandé

**`Capitalize Interv360 realization method`**

### Corps PR — éléments à inclure

- Synthèse : capitalisation des cycles delivery/realization Interv360 en méthode générique SFIA ;
- Livrables : méthode, standard, checklists, templates, prompts ;
- Garde-fous : pas de code, pas de projet applicatif, pas d'autorisation de code ;
- Suites possibles après merge : généralisation vers `docs/methods/` ou cycle `delivery/interv360-implementation-go-no-go` — non déclenchées automatiquement.

---

## 14. Décisions retenues

| Décision | Statut |
|----------|--------|
| Cycle de capitalisation clôturable | ✅ Retenu |
| Méthode par cycles capitalisée | ✅ Retenu |
| Standard des livrables capitalisé | ✅ Retenu |
| Checklists réutilisables capitalisées | ✅ Retenu |
| Templates génériques capitalisés | ✅ Retenu |
| Famille de prompts capitalisée | ✅ Retenu |
| Garde-fous anti-code consolidés | ✅ Retenu |
| Généralisation SFIA possible dans un futur cycle | ✅ Retenu |
| Retour Interv360 Go / No-go possible dans un futur cycle | ✅ Retenu |
| Autorisation de code non donnée | ✅ Retenu |

---

## 15. Critères de sortie

- [x] décision de clôture formulée ;
- [x] livrables produits listés ;
- [x] apports de la capitalisation synthétisés ;
- [x] méthode obtenue synthétisée ;
- [x] standard documentaire synthétisé ;
- [x] checklists synthétisées ;
- [x] templates synthétisés ;
- [x] famille de prompts synthétisée ;
- [x] non-réalisés listés ;
- [x] garde-fous consolidés ;
- [x] recommandation de suite formulée ;
- [x] décision PR formulée ;
- [x] décisions retenues listées.

---

*Capitalisation Interv360 realization — Ready for method PR.*
