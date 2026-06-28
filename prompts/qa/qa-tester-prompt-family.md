# Famille de prompts — QA / Testeur

**Famille** : QA / Testeur  
**Statut** : Candidate prompt family  
**Méthode liée** : [`docs/methods/roles/qa-tester-method.md`](../../docs/methods/roles/qa-tester-method.md)  
**Objet** : proposer les premiers prompts réutilisables associés au rôle QA / Testeur  
**Garde-fou principal** : contribuer à la testabilité et à la qualité sans ouvrir delivery, backlog, user stories ou code

**Source pilote** : PRJ-INTERV360 — cycle UX/UI V1, recherche QA, cadrage candidat, revue mature, méthode officielle  
**Dossier** : `prompts/qa/`  
**Catalogue** : `prompts/prompt-catalog.md` §14

---

## 1. Objectif

Cette famille de prompts vise à **outiller le rôle QA / Testeur** dans SFIA, en appliquant la méthode officielle sans la remplacer.

- les prompts **ne produisent pas automatiquement** de scénarios de tests projet ;
- les prompts **ne déclenchent pas** delivery ;
- les prompts **ne créent pas** de backlog ;
- les prompts **ne créent pas** de user stories ;
- les prompts **ne produisent pas** de code.

Ils orientent l'analyse de **testabilité**, les **revues qualité**, les **risques**, la **traçabilité** et la **préparation future** des tests — lorsque le jalon projet l'autorise.

---

## 2. Prompts candidats

### PROMPT-QA-001 — Analyse de testabilité d'un besoin

| Élément | Contenu |
|---------|---------|
| **Objectif** | Analyser si un besoin est clair, vérifiable, traçable et suffisamment testable |
| **Entrées** | Besoin métier ; contexte projet ; hypothèses ; exclusions ; niveau de maturité du projet |
| **Sortie attendue** | Points testables ; ambiguïtés ; risques ; questions ouvertes ; recommandations de clarification ; **aucun scénario détaillé** sauf demande explicite |
| **Garde-fous** | Ne pas produire user stories ; ne pas produire backlog ; ne pas ouvrir delivery |

---

### PROMPT-QA-002 — Revue QA d'une maquette UX/UI

| Élément | Contenu |
|---------|---------|
| **Objectif** | Relire une maquette sous l'angle testabilité, parcours, états visibles et erreurs métier |
| **Entrées** | Description ou capture de la maquette ; rôles utilisateurs ; parcours attendus ; exclusions connues |
| **Sortie attendue** | Happy path ; non happy path pressentis ; états vides / chargement / erreur ; questions QA ; points de vigilance ; **aucun cas de test détaillé** |
| **Garde-fous** | Ne pas transformer la maquette en recette ; ne pas produire backlog ; ne pas ouvrir delivery |

---

### PROMPT-QA-003 — Questions réflexes QA en revue transverse

| Élément | Contenu |
|---------|---------|
| **Objectif** | Préparer une liste de questions QA pour une revue transverse |
| **Entrées** | Livrable à revoir ; phase projet ; rôles mobilisés ; objectifs de la revue |
| **Sortie attendue** | Questions par thème ; testabilité ; risques ; anomalies ; traçabilité ; limites du rôle QA |

---

### PROMPT-QA-004 — Lecture happy path / non happy path

| Élément | Contenu |
|---------|---------|
| **Objectif** | Identifier les chemins nominaux et dégradés pressentis, sans produire de scénarios détaillés |
| **Entrées** | Parcours utilisateur ; rôles concernés ; actions principales ; exclusions |
| **Sortie attendue** | Happy path résumé ; non happy path pressentis ; états limites ; questions ouvertes ; risques à clarifier |

---

### PROMPT-QA-005 — Grille de risques qualité

| Élément | Contenu |
|---------|---------|
| **Objectif** | Identifier les zones à risque qualité sur un livrable projet |
| **Entrées** | Livrable ; contexte projet ; criticité métier ; contraintes connues |
| **Sortie attendue** | Risques qualité ; impact ; probabilité ; criticité ; recommandations ; **aucun plan de test complet** sauf jalon dédié |

---

### PROMPT-QA-006 — Préparation légère d'une stratégie de test

| Élément | Contenu |
|---------|---------|
| **Objectif** | Préparer une orientation de stratégie de test, sans produire une stratégie de recette complète |
| **Entrées** | Périmètre projet ; maturité ; risques ; livrables disponibles ; jalon visé |
| **Sortie attendue** | Niveaux de test pressentis ; priorités ; limites ; dépendances ; critères de passage à une vraie stratégie de test |
| **Garde-fous** | Préciser que cette sortie **ne vaut pas** stratégie de recette complète ; ne pas ouvrir delivery |

---

### PROMPT-QA-007 — Revue d'anomalie métier

| Élément | Contenu |
|---------|---------|
| **Objectif** | Vérifier si une anomalie métier est suffisamment exploitable |
| **Entrées** | Description anomalie ; contexte ; résultat attendu ; résultat obtenu ; impact |
| **Sortie attendue** | Clarté ; reproductibilité ; informations manquantes ; impact métier ; sévérité / priorité proposées ; recommandations de reformulation |

---

### PROMPT-QA-008 — Traçabilité besoin / critère / test futur / anomalie

| Élément | Contenu |
|---------|---------|
| **Objectif** | Préparer une lecture de traçabilité sans produire les tests détaillés |
| **Entrées** | Besoin ; critère pressenti ; anomalie éventuelle ; décision projet |
| **Sortie attendue** | Chaîne de traçabilité ; trous de traçabilité ; questions ouvertes ; recommandations |

---

### PROMPT-QA-009 — Revue des critères d'acceptation futurs

| Élément | Contenu |
|---------|---------|
| **Objectif** | Aider à rendre des critères futurs testables, sans produire de user stories |
| **Entrées** | Besoin ou fonctionnalité ; objectif métier ; contraintes ; exclusions |
| **Sortie attendue** | Critères pressentis ; ambiguïtés ; risques ; reformulations possibles ; points à valider avec PO / BA |
| **Garde-fous** | Ne pas créer de user stories ; ne pas créer de backlog |

---

### PROMPT-QA-010 — Vérification des garde-fous QA

| Élément | Contenu |
|---------|---------|
| **Objectif** | Contrôler qu'une production QA respecte les garde-fous SFIA |
| **Entrées** | Document QA ; phase projet ; jalon autorisé |
| **Sortie attendue** | Conformité aux garde-fous ; risques de surproduction ; éléments à retirer ou différer ; décision recommandée : **conforme / à ajuster / à bloquer** |

---

## 3. Garde-fous communs

- ne pas ouvrir delivery ;
- ne pas produire backlog ;
- ne pas produire user stories ;
- ne pas produire code ;
- ne pas transformer une maquette en recette ;
- ne pas produire de cas de tests détaillés sans jalon dédié ;
- ne pas remplacer PO, BA, RSSI, Architecte ou Chef de projet ;
- ne pas automatiser sans stratégie validée.

---

## 4. Variables communes

| Variable | Description |
|----------|-------------|
| `{project_name}` | Nom du projet |
| `{project_phase}` | Phase courante (ex. 02-architecture) |
| `{deliverable_type}` | Type de livrable revu (besoin, maquette, document, etc.) |
| `{maturity_level}` | Niveau de maturité (candidat, V1 présentable, delivery, etc.) |
| `{user_roles}` | Rôles utilisateurs ou SFIA mobilisés |
| `{known_exclusions}` | Exclusions connues (MVP, ADR, périmètre) |
| `{review_objective}` | Objectif de la revue ou du prompt |
| `{delivery_allowed}` | `blocked` ou `authorized` — explicite |
| `{expected_output_level}` | Niveau de sortie (analyse, grille, orientation — pas recette complète) |

---

## 5. Lien avec la méthode officielle

Cette famille de prompts **applique** la méthode officielle :

[`docs/methods/roles/qa-tester-method.md`](../../docs/methods/roles/qa-tester-method.md)

Elle **ne remplace pas** la méthode officielle.

Les prompts opérationnalisent notamment :

- analyse de testabilité (§5.1) ;
- risk-based testing (§5.3) ;
- shift-left (§5.4) ;
- questions réflexes (§7) ;
- garde-fous (§10) ;
- usage revue UX/UI V1 (§11).

---

## 6. Prochaines étapes

1. **Valider manuellement** la famille de prompts QA ;
2. **Enrichir** `prompts/prompt-catalog.md` (§14 — réalisé avec cette famille) ;
3. **Préparer** une éventuelle sync Notion de gouvernance ;
4. **Créer plus tard** des prompts détaillés individuels sous `prompts/qa/` si nécessaire (statut Draft).

---

*Famille de prompts QA / Testeur — SFIA — Candidate prompt family — sans delivery.*
