# SFIA — Realization document templates

**Type** : Modèles génériques de documents de préparation réalisation  
**Origine de capitalisation** : Interv360  
**Référence** : SFIA delivery / realization method  
**Statut** : Draft  
**Branche** : `method/interv360-realization-capitalization`  
**Documents associés** : [`capitalization-plan.md`](../../../archive/interv360-realization/capitalization-plan.md), [`realization-method.md`](realization-method.md), [`realization-deliverables-standard.md`](realization-deliverables-standard.md), [`realization-checklists.md`](realization-checklists.md)

---

## 1. Objectif

Ce document fournit des modèles génériques de documents pour appliquer la méthode SFIA de préparation réalisation.

Ces modèles servent à produire rapidement des livrables homogènes, traçables et réutilisables.

Ils couvrent :

- les plans de cycle ;
- les livrables de fond ;
- les décisions ;
- les checklists ;
- les synthèses ;
- les estimations indicatives ;
- les backlogs préparatoires ;
- les scénarios QA ;
- les scénarios de refus ;
- les synthèses Go / No-go.

Ces modèles sont génériques et doivent être adaptés au contexte du projet.

Ils **ne constituent pas** une autorisation de coder.

Les prompts assistés pour produire ces livrables sont définis dans `realization-prompt-family.md`.

---

## 2. Principes d'utilisation des templates

Les templates doivent être utilisés comme cadre de départ.

Chaque template doit être adapté avec :

- le nom du projet ;
- l'incrément ou le périmètre concerné ;
- la phase ;
- les sources ;
- les décisions réellement prises ;
- les hypothèses ;
- les exclusions ;
- les garde-fous ;
- la prochaine action.

Un template **ne doit pas** être utilisé pour créer artificiellement une décision non prise.

Un template **ne doit pas** transformer une hypothèse en arbitrage.

Un template **ne doit pas** donner une autorisation implicite de code.

**Emplacement recommandé projet :** `projects/<projet>/07-delivery/` (ou équivalent selon la convention du repo).

---

## 3. Variables génériques

| Variable | Description |
|----------|-------------|
| `{project_name}` | Nom du projet |
| `{project_reference}` | Référence projet (ex. PRJ-XXX) |
| `{cycle_name}` | Nom du cycle (ex. Delivery preparation, Technical design) |
| `{increment_id}` | Identifiant de l'incrément (ex. inc-01, mvp-a) |
| `{increment_label}` | Libellé de l'incrément |
| `{phase}` | Phase documentaire du projet (ex. 07-delivery) |
| `{branch_name}` | Branche Git du cycle |
| `{status}` | Statut du document (Draft, Ready for closure, etc.) |
| `{sources}` | Liste des documents sources |
| `{scope}` | Périmètre couvert |
| `{out_of_scope}` | Hors périmètre |
| `{topic}` | Sujet du livrable (ex. user-stories, data-model) |
| `{decision_topic}` | Sujet de la décision (ex. stack-final, front-back-start) |
| `{checklist_topic}` | Sujet de la checklist (ex. readiness, go-no-go) |
| `{decision}` | Décision prise |
| `{next_action}` | Prochaine action recommandée |

---

## 4. Template — Plan de cycle

````markdown
# {project_name} — {cycle_name} plan

**Type** : Plan de cycle  
**Projet** : {project_name} ({project_reference})  
**Phase** : {phase}  
**Cycle** : {cycle_name}  
**Cible** : {increment_id} — {increment_label}  
**Statut** : Draft  
**Branche** : `{branch_name}`

---

## 1. Objectif

Décrire l'objectif du cycle.

Ce cycle vise à produire les livrables nécessaires pour préparer la décision ou l'étape suivante.

Ce document **ne constitue pas** une autorisation de coder.

---

## 2. Sources

Lister les documents sources.

---

## 3. Périmètre du cycle

Lister ce qui est couvert.

---

## 4. Hors périmètre

Lister ce qui n'est pas couvert.

---

## 5. Livrables attendus

| Livrable | Objectif |
|----------|----------|
| | |

---

## 6. Garde-fous

Lister les garde-fous du cycle.

---

## 7. Ordre de travail recommandé

1. …
2. …
3. …

---

## 8. Prochaine action

Indiquer le premier livrable à produire.
````

---

## 5. Template — Livrable de fond

````markdown
# {project_name} — {increment_id} {topic}

**Type** : Livrable de fond  
**Projet** : {project_name} ({project_reference})  
**Phase** : {phase}  
**Cycle** : {cycle_name}  
**Incrément** : {increment_id} — {increment_label}  
**Statut** : Draft  
**Branche** : `{branch_name}`  
**Documents associés** : {sources}

---

## 1. Objectif

Décrire le rôle du livrable.

---

## 2. Sources

Lister les sources utilisées.

---

## 3. Périmètre

Lister ce qui est couvert.

---

## 4. Hors périmètre

Lister ce qui est exclu.

---

## 5. Analyse / contenu structurant

Produire le contenu principal.

---

## 6. Décisions prises

| Décision | Statut |
|----------|--------|
| | |

---

## 7. Décisions non prises

| Décision non prise | Raison |
|--------------------|--------|
| | |

---

## 8. Risques / points d'attention

| Risque | Impact | Réduction |
|--------|--------|-----------|
| | | |

---

## 9. Garde-fous

Lister les garde-fous.

---

## 10. Critères de sortie

- [ ] critère 1 ;
- [ ] critère 2 ;
- [ ] critère 3.

---

## 11. Prochaine action

Indiquer le prochain livrable ou la prochaine décision.
````

---

## 6. Template — Décision

````markdown
# {project_name} — {increment_id} {decision_topic} decision

**Type** : Décision  
**Projet** : {project_name} ({project_reference})  
**Phase** : {phase}  
**Cycle** : {cycle_name}  
**Incrément** : {increment_id} — {increment_label}  
**Statut** : Draft  
**Branche** : `{branch_name}`  
**Documents associés** : {sources}

---

## 1. Objectif

Décrire la décision à prendre.

---

## 2. Contexte

Résumer les éléments qui conduisent à la décision.

---

## 3. Options étudiées

| Option | Description | Avantages | Limites |
|--------|-------------|-----------|---------|
| | | | |

---

## 4. Critères de décision

| Critère | Description |
|---------|-------------|
| | |

---

## 5. Décision recommandée

Formuler la décision recommandée.

---

## 6. Justification

Expliquer pourquoi cette décision est recommandée.

---

## 7. Conditions d'application

Lister les conditions nécessaires pour appliquer la décision.

---

## 8. Risques

| Risque | Impact | Réduction |
|--------|--------|-----------|
| | | |

---

## 9. Décisions non prises

| Décision non prise | Raison |
|--------------------|--------|
| | |

---

## 10. Garde-fous

Lister les garde-fous.

---

## 11. Critères de sortie

- [ ] options étudiées ;
- [ ] critères de décision définis ;
- [ ] décision recommandée formulée ;
- [ ] risques listés ;
- [ ] garde-fous repris.

---

## 12. Prochaine action

Indiquer l'étape suivante.
````

---

## 7. Template — Checklist

````markdown
# {project_name} — {increment_id} {checklist_topic} checklist

**Type** : Checklist  
**Projet** : {project_name} ({project_reference})  
**Phase** : {phase}  
**Cycle** : {cycle_name}  
**Incrément** : {increment_id} — {increment_label}  
**Statut** : Draft  
**Branche** : `{branch_name}`  
**Documents associés** : {sources}

---

## 1. Objectif

Décrire ce que la checklist vérifie.

---

## 2. Checklist

- [ ] élément à vérifier ;
- [ ] élément à vérifier ;
- [ ] élément à vérifier.

---

## 3. Conditions bloquantes

| Condition bloquante | Effet |
|---------------------|-------|
| | |

---

## 4. Décisions possibles

| Décision possible | Signification |
|-------------------|---------------|
| Go documentaire | Préparation suffisante pour décision ; pas d'autorisation de code |
| Prolongation documentaire | Compléter des livrables avant passage |
| No-go | Ne pas avancer vers l'étape suivante |

---

## 5. Garde-fous

Lister les garde-fous.

---

## 6. Critères de sortie

- [ ] checklist définie ;
- [ ] conditions bloquantes listées ;
- [ ] décisions possibles listées ;
- [ ] garde-fous repris.

---

## 7. Prochaine action

Indiquer l'étape suivante.
````

---

## 8. Template — Synthèse de cycle

````markdown
# {project_name} — {cycle_name} summary

**Type** : Synthèse de cycle  
**Projet** : {project_name} ({project_reference})  
**Phase** : {phase}  
**Cycle** : {cycle_name}  
**Cible** : {increment_id} — {increment_label}  
**Statut** : Ready for closure  
**Branche** : `{branch_name}`  
**Documents associés** : {sources}

---

## 1. Objectif

Synthétiser le cycle.

---

## 2. Décision de clôture

Indiquer si le cycle peut être clôturé.

---

## 3. Statut recommandé

Indiquer le statut recommandé pour l'étape suivante.

Exemples génériques : `Ready for delivery detailing`, `Ready for technical design`, `Ready for explicit implementation go/no-go decision`.

---

## 4. Livrables produits

| Livrable | Statut | Rôle |
|----------|:------:|------|
| | ✅ | |

---

## 5. Décisions prises

| Décision | Résultat |
|----------|----------|
| | |

---

## 6. Décisions non prises

| Décision non prise | Raison |
|--------------------|--------|
| | |

---

## 7. Readiness actuelle

| Élément | Statut |
|---------|--------|
| | |

---

## 8. Conditions bloquantes restantes

| Condition bloquante | Effet |
|---------------------|-------|
| | |

---

## 9. Garde-fous

| Garde-fou | Statut |
|-----------|:------:|
| Pas de code | ✅ |
| Pas de projet applicatif | ✅ |

---

## 10. Recommandation de suite

Décrire la prochaine étape recommandée.

---

## 11. Décision PR

Indiquer si la branche peut être proposée en PR.

---

## 12. Critères de sortie

- [ ] décision de clôture formulée ;
- [ ] statut recommandé formulé ;
- [ ] livrables produits listés ;
- [ ] décisions prises et non prises synthétisées ;
- [ ] readiness définie ;
- [ ] conditions bloquantes listées ;
- [ ] garde-fous repris ;
- [ ] prochaine action indiquée.
````

---

## 9. Template — Estimation indicative

````markdown
# {project_name} — {increment_id} effort estimation

**Type** : Estimation indicative  
**Projet** : {project_name} ({project_reference})  
**Phase** : {phase}  
**Cycle** : {cycle_name}  
**Incrément** : {increment_id} — {increment_label}  
**Statut** : Draft  
**Branche** : `{branch_name}`  
**Documents associés** : {sources}

---

## 1. Objectif

Fournir une estimation indicative, **non contractuelle**.

---

## 2. Hypothèses

Lister les hypothèses de l'estimation.

---

## 3. Domaines estimés

| Domaine | Complexité | Commentaire |
|---------|------------|-------------|
| | Faible / Moyenne / Élevée | |

---

## 4. Séquences / lots estimés

| Séquence | Complexité | Risques |
|----------|------------|---------|
| | | |

---

## 5. Risques d'estimation

| Risque | Effet | Réduction |
|--------|-------|-----------|
| | | |

---

## 6. Ce que l'estimation ne couvre pas

Lister les éléments non couverts.

---

## 7. Décisions retenues

| Décision | Statut |
|----------|--------|
| Estimation indicative uniquement | ✅ |

---

## 8. Garde-fous

- estimation indicative ;
- pas d'engagement de charge ;
- pas d'engagement de date ;
- pas de sprint plan ferme.

---

## 9. Prochaine action

Indiquer l'étape suivante.
````

---

## 10. Template — Backlog préparatoire

````markdown
# {project_name} — {increment_id} realization backlog

**Type** : Backlog préparatoire  
**Projet** : {project_name} ({project_reference})  
**Phase** : {phase}  
**Cycle** : {cycle_name}  
**Incrément** : {increment_id} — {increment_label}  
**Statut** : Draft  
**Branche** : `{branch_name}`  
**Documents associés** : {sources}

---

## 1. Objectif

Structurer les items préparatoires avant création éventuelle de tickets réels.

---

## 2. Principes

- backlog documentaire ;
- non équivalent à un sprint plan ;
- tickets réels non créés ;
- priorités indicatives.

---

## 3. Backlog préparatoire

| ID | Priorité | Thème | Description | Dépendances |
|----|----------|-------|-------------|-------------|
| RB-001 | | | | |

---

## 4. Mapping avec QA / refus

| Item | Scénarios liés | Commentaire |
|------|----------------|-------------|
| | | |

---

## 5. Éléments non transformés en tickets

Lister les éléments qui restent documentaires.

---

## 6. Garde-fous

Lister les garde-fous.

---

## 7. Prochaine action

Indiquer l'étape suivante.
````

---

## 11. Template — Scénarios QA

````markdown
# {project_name} — {increment_id} QA scenarios

**Type** : Scénarios QA  
**Projet** : {project_name} ({project_reference})  
**Phase** : {phase}  
**Cycle** : {cycle_name}  
**Incrément** : {increment_id} — {increment_label}  
**Statut** : Draft  
**Branche** : `{branch_name}`  
**Documents associés** : {sources}

---

## 1. Objectif

Définir les scénarios QA nominaux de l'incrément.

---

## 2. Principes

- scénarios documentaires ;
- résultats attendus testables ;
- données fictives si nécessaire ;
- pas de tests automatisés par défaut.

---

## 3. Scénarios nominaux

| ID | Objectif | Préconditions | Étapes | Résultat attendu |
|----|----------|---------------|--------|------------------|
| QA-NOM-001 | | | | |

---

## 4. Couverture

| Élément couvert | Scénarios |
|-----------------|-----------|
| | |

---

## 5. Garde-fous

Lister les garde-fous.

---

## 6. Prochaine action

Indiquer l'étape suivante.
````

---

## 12. Template — Scénarios de refus

````markdown
# {project_name} — {increment_id} refusal scenarios

**Type** : Scénarios de refus  
**Projet** : {project_name} ({project_reference})  
**Phase** : {phase}  
**Cycle** : {cycle_name}  
**Incrément** : {increment_id} — {increment_label}  
**Statut** : Draft  
**Branche** : `{branch_name}`  
**Documents associés** : {sources}

---

## 1. Objectif

Définir les scénarios de refus, erreurs métier ou cas limites.

---

## 2. Principes

- refus métier explicites ;
- préconditions visibles ;
- comportement attendu documenté ;
- état inchangé ou changement attendu précisé ;
- pas de logique technique implémentée.

---

## 3. Scénarios de refus

| ID | Refus / cas limite | Préconditions | Comportement attendu |
|----|--------------------|---------------|----------------------|
| REF-001 | | | |

---

## 4. Couverture

| Élément couvert | Scénarios de refus |
|-----------------|--------------------|
| | |

---

## 5. Garde-fous

Lister les garde-fous.

---

## 6. Prochaine action

Indiquer l'étape suivante.
````

---

## 13. Template — Go / No-go summary

````markdown
# {project_name} — Implementation Go / No-go summary

**Type** : Synthèse Go / No-go réalisation  
**Projet** : {project_name} ({project_reference})  
**Phase** : {phase}  
**Cycle** : Implementation Go / No-go  
**Cible** : {increment_id} — {increment_label}  
**Statut** : Draft  
**Branche** : `{branch_name}`  
**Documents associés** : {sources}

---

## 1. Objectif

Synthétiser la décision Go / No-go réalisation.

---

## 2. Décision finale

Formuler explicitement **une seule** décision :

- Go réalisation ;
- No-go réalisation ;
- Go partiel ;
- Go documentaire prolongé.

---

## 3. Autorisation de code

Indiquer explicitement :

- autorisation donnée ;
- autorisation refusée ;
- autorisation partielle ;
- autorisation non donnée.

---

## 4. Conditions validées

| Condition | Statut |
|-----------|--------|
| Périmètre gelé | |
| Stack concrète | |
| Stratégie data | |

---

## 5. Conditions restantes / blocages

| Blocage | Effet |
|---------|-------|
| | |

---

## 6. Limites de la décision

Décrire ce que la décision autorise et ce qu'elle n'autorise pas.

---

## 7. Garde-fous

Lister les garde-fous.

---

## 8. Prochaine action

Indiquer l'étape suivante.
````

---

## 14. Règles d'adaptation projet

Lors de l'application des templates sur un projet concret :

| Règle | Application |
|-------|-------------|
| **Conventions de cycles** | Adapter les noms de cycles et de fichiers aux conventions du repo (ex. `delivery/<projet>-preparation`) |
| **Identifiants d'incrément** | Utiliser la numérotation ou le libellé du projet (ex. `inc-01`, `mvp-a`, `lot-p0`) |
| **Rôles** | Adapter les rôles mentionnés à l'organisation réelle sans imposer une structure Interv360 |
| **Statuts métier** | Documenter les statuts propres au projet ; ne pas importer un catalogue externe comme règle universelle |
| **Maturité du projet** | Alléger ou enrichir les sections selon la maturité documentaire existante |
| **Décisions** | Ne jamais inventer une décision pour remplir un template |
| **Hors périmètre** | Ne jamais masquer un hors périmètre pour accélérer un passage d'étape |
| **Garde-fous code** | Ne jamais supprimer les garde-fous liés au code, au projet applicatif ou aux tickets réels |
| **Estimation** | Ne jamais faire passer une estimation indicative pour un engagement de charge ou de date |
| **Design** | Positionner maquettes et exports comme références non bloquantes sauf décision explicite contraire |
| **Données** | Utiliser des données fictives clairement identifiées dans les scénarios QA et démo |
| **Méthode SFIA** | Référencer `realization-method.md`, `realization-deliverables-standard.md` et `realization-checklists.md` dans les plans de cycle |

---

## 15. Décisions retenues

| Décision | Statut |
|----------|--------|
| Templates génériques retenus | ✅ |
| Variables génériques retenues | ✅ |
| Plan de cycle standard retenu | ✅ |
| Livrable de fond standard retenu | ✅ |
| Décision standard retenue | ✅ |
| Checklist standard retenue | ✅ |
| Synthèse de cycle standard retenue | ✅ |
| Templates QA / refus retenus | ✅ |
| Template Go / No-go retenu | ✅ |
| Adaptation projet obligatoire retenue | ✅ |
| Autorisation de code non implicite retenue | ✅ |

---

## 16. Critères de sortie

- [x] variables génériques définies ;
- [x] template plan de cycle défini ;
- [x] template livrable de fond défini ;
- [x] template décision défini ;
- [x] template checklist défini ;
- [x] template synthèse de cycle défini ;
- [x] template estimation indicative défini ;
- [x] template backlog préparatoire défini ;
- [x] template scénarios QA défini ;
- [x] template scénarios de refus défini ;
- [x] template Go / No-go défini ;
- [x] règles d'adaptation projet définies ;
- [x] décisions retenues listées.

---

## 17. Prochaine action

Le prochain livrable est :

**`realization-prompt-family.md`**

Objectif :
Capitaliser la famille de prompts Cursor / ChatGPT pour produire les livrables de la méthode.
