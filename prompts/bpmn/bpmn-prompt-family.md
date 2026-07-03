# SFIA — Famille de prompts BPMN

**Type** : Prompt Family  
**Statut** : Draft  
**Domaine** : Process Modeling / BPMN  
**Méthode associée** : [`docs/practices/process/bpmn-process-modeling-method.md`](../../docs/practices/process/bpmn-process-modeling-method.md)  
**Standard associé** : [`docs/practices/process/bpmn-deliverables-standard.md`](../../docs/practices/process/bpmn-deliverables-standard.md)  
**Checklist associée** : [`docs/practices/process/bpmn-integration-checklist.md`](../../docs/practices/process/bpmn-integration-checklist.md)  
**Templates associés** : `docs/templates/process/`  
**Dossier** : `prompts/bpmn/`  
**Catalogue** : `prompts/prompt-catalog.md` §15

---

## 1. Objectif

Cette famille de prompts permet de **cadrer**, **produire**, **analyser** et **clôturer** un cycle BPMN dans SFIA — en appliquant la méthode officielle sans la remplacer.

Les prompts orientent la phase **03-process** : readiness, périmètre, préparation des diagrammes, revue de cohérence et clôture de cycle — **sans ouvrir** delivery, backlog, tests ou code.

---

## 2. Garde-fous communs

Tous les prompts de cette famille respectent les garde-fous suivants :

- ne pas produire de **backlog** ;
- ne pas produire de **user stories** ;
- ne pas produire de **cas de tests** ;
- ne pas produire de **scénarios de tests** ;
- ne pas produire de **code applicatif** ;
- ne pas **publier dans Notion** ;
- ne pas **appeler l'API Notion** ;
- ne pas **modifier `.env`** ;
- ne pas **créer de PR** avant fin de cycle BPMN ;
- ne pas **merger automatiquement** vers `main`.

**Variables communes :**

| Variable | Description |
|----------|-------------|
| `{project_id}` | Identifiant projet (ex. PRJ-INTERV360) |
| `{project_name}` | Nom projet |
| `{branch}` | Branche Git de travail |
| `{phase}` | Phase courante (ex. 03-process) |
| `{source_documents}` | Documents Git source de vérité |
| `{bpmn_folder}` | Dossier BPMN projet (ex. `projects/<project>/03-process/bpmn/`) |

---

## 3. PROMPT-BPMN-001 — Auditer la readiness BPMN d'un projet

| Élément | Contenu |
|---------|---------|
| **Objectif** | Vérifier si le projet est prêt pour la phase BPMN (Go / No-Go) |
| **Entrées** | `{project_id}` ; documents cadrage et architecture ; `bpmn-integration-checklist.md` |
| **Sortie attendue** | Rapport readiness ; points bloquants ; recommandations ; verdict Go / No-Go |
| **Garde-fous** | Ne pas créer de diagramme ; ne pas créer de fichier `.bpmn` |

### Instructions Cursor

```
Objectif : auditer la readiness BPMN du projet {project_name} ({project_id}).

Contexte :
- Branche : {branch}
- Phase cible : 03-process
- Méthode : docs/practices/process/bpmn-process-modeling-method.md
- Checklist : docs/practices/process/bpmn-integration-checklist.md

Tâches :
1. Vérifier les prérequis documentaires (cadrage, clarification, règles, statuts).
2. Parcourir bpmn-integration-checklist.md et cocher mentalement chaque critère.
3. Identifier les éléments manquants ou ambigus.
4. Produire un verdict Go / No-Go avec justification.
5. Lister les actions préalables si No-Go.

Garde-fous :
- Ne pas créer de diagramme BPMN.
- Ne pas créer de fichier .bpmn.
- Ne pas produire backlog, user stories, tests ou code.
- Ne pas publier dans Notion.
- Ne pas créer de PR.
```

---

## 4. PROMPT-BPMN-002 — Définir le périmètre BPMN

| Élément | Contenu |
|---------|---------|
| **Objectif** | Produire le document de cadrage `process-scope.md` |
| **Entrées** | `{project_id}` ; sources documentaires ; template `bpmn-process-scope-template.md` |
| **Sortie attendue** | `process-scope.md` complété : acteurs, lanes, objets, statuts, diagrammes prévus |
| **Garde-fous** | Périmètre uniquement — pas de modélisation BPMN |

### Instructions Cursor

```
Objectif : définir le périmètre BPMN du projet {project_name} ({project_id}).

Contexte :
- Branche : {branch}
- Template : docs/templates/process/bpmn-process-scope-template.md
- Standard : docs/practices/process/bpmn-deliverables-standard.md
- Sources : {source_documents}

Tâches :
1. Créer ou compléter projects/{project}/03-process/process-scope.md à partir du template.
2. Identifier le processus métier concerné et son utilité BPMN.
3. Lister les acteurs / lanes, objets métier et statuts à représenter.
4. Confirmer les diagrammes attendus (principal, exceptions, intégration).
5. Documenter hypothèses, points ouverts et garde-fous.

Garde-fous :
- Ne pas produire de diagramme .bpmn.
- Ne pas produire backlog, user stories, tests ou code.
- Ne pas publier dans Notion.
```

---

## 5. PROMPT-BPMN-003 — Préparer le processus principal

| Élément | Contenu |
|---------|---------|
| **Objectif** | Préparer la structure du diagramme principal (happy path) |
| **Entrées** | `process-scope.md` ; règles métier ; statuts ; `bpmn-process-modeling-method.md` |
| **Sortie attendue** | Description textuelle : étapes, acteurs, gateways, événements — exploitable dans Camunda Modeler |
| **Garde-fous** | Ne pas créer automatiquement de fichier `.bpmn` si l'outil n'est pas piloté |

### Instructions Cursor

```
Objectif : préparer le processus principal BPMN (happy path) pour {project_name}.

Contexte :
- process-scope.md du projet
- Méthode : docs/practices/process/bpmn-process-modeling-method.md
- Fichier cible prévu : {bpmn_folder}/{project}-main-process.bpmn

Tâches :
1. Lister les étapes du happy path dans l'ordre métier.
2. Associer chaque étape à un acteur / lane.
3. Identifier les gateways (décisions métier) et événements (début, fin, intermédiaires).
4. Relier chaque étape aux règles métier et statuts connus.
5. Produire une description textuelle structurée, prête pour saisie dans Camunda Modeler.

Garde-fous :
- Ne pas créer de fichier .bpmn automatiquement sauf si Camunda Modeler est piloté explicitement.
- Ne pas produire backlog, user stories, tests ou code.
```

---

## 6. PROMPT-BPMN-004 — Préparer les exceptions métier

| Élément | Contenu |
|---------|---------|
| **Objectif** | Identifier et structurer les exceptions métier pour un diagramme dédié |
| **Entrées** | `process-scope.md` ; règles métier ; processus principal préparé |
| **Sortie attendue** | Liste des exceptions ; déclencheurs ; acteurs ; traitements ; structure diagramme exceptions |
| **Garde-fous** | Préparation uniquement — pas de fichier `.bpmn` automatique |

### Instructions Cursor

```
Objectif : préparer le diagramme des exceptions métier pour {project_name}.

Contexte :
- process-scope.md et description du processus principal
- Fichier cible prévu : {bpmn_folder}/{project}-exceptions.bpmn

Tâches :
1. Identifier les exceptions métier (branches hors happy path).
2. Pour chaque exception : déclencheur, acteur responsable, règle liée, traitement.
3. Relier les exceptions aux points de sortie du processus principal.
4. Structurer le diagramme exceptions (lanes, gateways, événements d'erreur).
5. Produire une description textuelle exploitable dans Camunda Modeler.

Garde-fous :
- Ne pas créer de fichier .bpmn automatiquement sauf pilotage explicite.
- Ne pas produire backlog, user stories, tests ou code.
```

---

## 7. PROMPT-BPMN-005 — Préparer les anomalies d'intégration

| Élément | Contenu |
|---------|---------|
| **Objectif** | Modéliser les flux d'erreur et reprises liés aux intégrations |
| **Entrées** | ADR existantes ; revues intégration ; `process-scope.md` |
| **Sortie attendue** | Flux d'intégration ; anomalies ; reprises manuelles ; liens ADR candidates |
| **Garde-fous** | Préparation uniquement — pas de décision ADR formelle |

### Instructions Cursor

```
Objectif : préparer le diagramme des anomalies d'intégration pour {project_name}.

Contexte :
- ADR et revues intégration du projet
- Fichier cible prévu : {bpmn_folder}/{project}-integration-errors.bpmn

Tâches :
1. Lister les flux d'intégration concernés (CRM, email, API, etc.).
2. Identifier les anomalies possibles par flux (timeout, rejet, données invalides).
3. Décrire les reprises manuelles et escalades.
4. Marquer les ADR candidates liées à chaque anomalie.
5. Structurer le diagramme d'anomalies pour Camunda Modeler.

Garde-fous :
- Ne pas créer d'ADR formelle — uniquement des candidates.
- Ne pas créer de fichier .bpmn automatiquement sauf pilotage explicite.
- Ne pas produire backlog, user stories, tests ou code.
```

---

## 8. PROMPT-BPMN-006 — Relire un BPMN contre règles et statuts

| Élément | Contenu |
|---------|---------|
| **Objectif** | Vérifier la cohérence BPMN vs règles métier, statuts et garde-fous |
| **Entrées** | Fichiers `.bpmn` ; `process-analysis-template.md` ; règles ; statuts |
| **Sortie attendue** | `process-analysis.md` ; écarts ; ADR candidates ; correspondances statuts/écrans |
| **Garde-fous** | Analyse uniquement — pas de backlog, tests ou code |

### Instructions Cursor

```
Objectif : relire les diagrammes BPMN de {project_name} contre les règles métier et statuts.

Contexte :
- Diagrammes : {bpmn_folder}/*.bpmn
- Template : docs/templates/process/bpmn-process-analysis-template.md
- Règles et statuts : {source_documents}

Tâches :
1. Créer ou compléter projects/{project}/03-process/process-analysis.md.
2. Analyser le processus principal : étapes, acteurs, règles, statuts.
3. Analyser les exceptions et anomalies d'intégration.
4. Établir les correspondances BPMN / statuts et BPMN / écrans futurs.
5. Identifier les ADR candidates et les limites du modèle.
6. Vérifier le respect des garde-fous SFIA.

Garde-fous :
- Ne pas produire backlog, user stories, tests ou code.
- Ne pas publier dans Notion.
```

---

## 9. PROMPT-BPMN-007 — Clôturer un cycle BPMN

| Élément | Contenu |
|---------|---------|
| **Objectif** | Produire la synthèse de clôture et préparer la PR unique |
| **Entrées** | Tous les livrables 03-process ; template `bpmn-cycle-closure-template.md` |
| **Sortie attendue** | `process-cycle-closure.md` ; tableau PR ; recommandations post-merge |
| **Garde-fous** | Ne pas merger automatiquement ; ne pas créer la PR sans demande explicite |

### Instructions Cursor

```
Objectif : clôturer le cycle BPMN du projet {project_name} ({project_id}).

Contexte :
- Branche : {branch}
- Template : docs/templates/process/bpmn-cycle-closure-template.md
- Livrables : bpmn/, exports/, process-scope.md, process-analysis.md

Tâches :
1. Créer projects/{project}/03-process/process-cycle-closure.md à partir du template.
2. Inventorier les livrables produits (.bpmn, .svg, analyses) et leur statut.
3. Consolider les décisions et ADR candidates.
4. Lister les points restant à préciser et suites recommandées.
5. Préparer le tableau PR unique (branche source → main).
6. Confirmer que tous les garde-fous ont été respectés.

Garde-fous :
- Ne pas merger automatiquement vers main.
- Ne pas créer de PR sauf demande explicite de l'utilisateur.
- Ne pas publier dans Notion.
- Ne pas produire backlog, user stories, tests ou code.
```

---

## 10. Conclusion

Cette famille de **7 prompts BPMN** (PROMPT-BPMN-001 à PROMPT-BPMN-007) rend la capacité BPMN **réutilisable** sur plusieurs projets SFIA.

Les prompts seront **publiés dans Notion uniquement sur décision explicite ultérieure** — Git reste la source de vérité.

**Prochaine étape typique après clôture cycle projet :** instruction ADR ou architecture fonctionnelle détaillée, selon les ADR candidates identifiées.

---

*Famille de prompts BPMN — SFIA — Draft — `prompts/bpmn/bpmn-prompt-family.md`.*
