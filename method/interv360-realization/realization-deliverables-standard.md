# SFIA — Realization deliverables standard

**Type** : Standard des livrables de préparation réalisation  
**Origine de capitalisation** : Interv360  
**Référence** : SFIA delivery / realization method  
**Statut** : Draft  
**Branche** : `method/interv360-realization-capitalization`  
**Documents associés** : [`capitalization-plan.md`](capitalization-plan.md), [`realization-method.md`](realization-method.md)

---

## 1. Objectif

Ce document standardise les livrables attendus dans une démarche de préparation réalisation SFIA.

Il complète la méthode définie dans :

`realization-method.md`

Il précise pour chaque étape :

- les livrables attendus ;
- leur rôle ;
- leur contenu minimal ;
- leurs critères de qualité ;
- leurs critères de sortie ;
- les garde-fous associés.

Ce document est générique et réutilisable sur d'autres projets.

Il **ne constitue pas** une autorisation de coder.

Les templates détaillés sont définis dans `realization-templates.md`.

Les prompts assistés sont définis dans `realization-prompt-family.md`.

---

## 2. Principes du standard documentaire

Le standard documentaire repose sur les principes suivants :

- chaque phase doit avoir un plan d'ouverture ;
- chaque phase doit produire des livrables de fond ;
- chaque phase doit produire une synthèse de clôture ;
- chaque livrable doit avoir un objectif clair ;
- chaque livrable doit expliciter son périmètre ;
- chaque livrable doit expliciter son hors périmètre ;
- chaque livrable doit distinguer décision, hypothèse et garde-fou ;
- chaque livrable doit éviter les engagements prématurés ;
- chaque livrable doit préparer l'étape suivante sans la déclencher automatiquement ;
- chaque synthèse doit formuler un statut recommandé.

**Emplacement recommandé projet :** `projects/<projet>/07-delivery/` (ou équivalent selon la convention du repo).

---

## 3. Niveaux de livrables

| Niveau | Rôle | Exemple générique |
|--------|------|-------------------|
| **Plan de cycle** | Ouvrir et cadrer la phase | `delivery-preparation-plan.md`, `technical-design-plan.md` |
| **Livrable de fond** | Produire une décision ou un contenu structurant | `mvp-scope.md`, `[increment]-data-model.md` |
| **Checklist** | Vérifier readiness ou conditions bloquantes | `[increment]-readiness-checklist.md`, `[increment]-go-no-go-checklist.md` |
| **Synthèse de cycle** | Clôturer et recommander la suite | `delivery-readiness-summary.md`, `realization-start-summary.md` |
| **Template** | Réutiliser un format standard | Voir `realization-templates.md` |
| **Prompt** | Guider la production assistée par IA | Voir `realization-prompt-family.md` |

---

## 4. Standard — Delivery preparation

### Objectif

Cadrer le MVP et préparer la stratégie de livraison.

### Livrables

| Livrable standard | Rôle | Contenu minimal |
|-------------------|------|-----------------|
| `delivery-preparation-plan.md` | Ouverture du cycle | Objectifs, sources amont, périmètre du cycle, livrables attendus, ordre de travail, garde-fous |
| `mvp-scope.md` | Cadrage MVP | Périmètre fonctionnel minimum, chaîne de valeur cible, exclusions, éléments reportés, résultat attendu |
| `functional-lots.md` | Lots fonctionnels | Lots identifiés, objectifs par lot, dépendances, ordonnancement indicatif |
| `macro-backlog.md` | Backlog macro | Capacités ou items macro, regroupement par lot, références croisées, sans user stories détaillées |
| `prioritization.md` | Priorisation | Critères de priorisation, niveaux (ex. P0 / P1 / P2), justification, séquences indicatives |
| `delivery-slicing-strategy.md` | Stratégie de slicing | Incréments proposés, ordre de livraison, dépendances, valeur démontrable par incrément |
| `realization-criteria.md` | Critères de réalisation | Conditions de passage vers réalisation, DoR / DoD macro, critères par incrément ou famille |
| `delivery-readiness-summary.md` | Synthèse | Livrables produits, décision de clôture, statut recommandé, prochaine étape |

### Critères de sortie

- MVP compréhensible ;
- lots structurés ;
- backlog macro priorisé ;
- incréments proposés ;
- readiness delivery formulée.

### Garde-fous

- pas de user stories détaillées ;
- pas de code, API, SQL ou tests ;
- pas de choix technique définitif ;
- pas de sprint plan ferme.

---

## 5. Standard — Delivery detailing

### Objectif

Détailler l'incrément prioritaire avant préparation réalisation.

### Livrables

| Livrable standard | Rôle | Contenu minimal |
|-------------------|------|-----------------|
| `delivery-detailing-plan.md` | Ouverture du cycle | Incrément cible, sources, livrables attendus, garde-fous, ordre de travail |
| `[increment]-detailed-backlog.md` | Backlog détaillé | Items détaillés de l'incrément, mapping lots / macro-backlog, dépendances, exclusions |
| `[increment]-user-stories.md` | User stories | Stories numérotées, acteurs, valeur métier, conditions préalables, lien backlog |
| `[increment]-acceptance-criteria.md` | Critères d'acceptation | Critères testables par story ou groupe, cas limites, refus attendus au niveau métier |
| `[increment]-readiness-checklist.md` | Checklist readiness | Conditions de passage, éléments manquants, décision readiness incrément |
| `delivery-detailing-summary.md` | Synthèse | Livrables produits, synthèse incrément, décision de clôture, statut recommandé |

> `[increment]` : identifiant générique de l'incrément (ex. `inc-01`, `mvp-a`). Adapter au contexte projet.

### Critères de sortie

- incrément prioritaire détaillé ;
- stories prêtes ;
- critères testables ;
- exclusions explicites ;
- passage vers préparation réalisation possible.

### Garde-fous

- pas de code, API, SQL ou tests automatisés ;
- pas de choix technique définitif ;
- pas d'élargissement de périmètre non arbitré ;
- hors périmètre explicite conservé.

---

## 6. Standard — Realization preparation

### Objectif

Préparer l'incrément pour une future réalisation sans code.

### Livrables

| Livrable standard | Rôle | Contenu minimal |
|-------------------|------|-----------------|
| `realization-preparation-plan.md` | Ouverture | Objectifs, incrément cible, sources, livrables attendus, garde-fous |
| `[increment]-realization-slicing.md` | Slicing réalisation | Séquences de réalisation, ordre, dépendances, jalons indicatifs |
| `[increment]-technical-framing.md` | Cadrage technique | Hypothèses techniques, risques, décisions à prendre, prérequis, non-décisions |
| `[increment]-qa-strategy.md` | Stratégie QA | Axes de test, types de scénarios à produire, couverture visée, exclusions QA |
| `[increment]-effort-estimation.md` | Estimation indicative | Complexité relative, charges indicatives par séquence ou domaine, risques, hypothèses |
| `realization-preparation-summary.md` | Synthèse | Livrables produits, readiness vers technical design, statut recommandé |

### Critères de sortie

- séquences de réalisation identifiées ;
- risques techniques visibles ;
- QA préparée ;
- estimation indicative disponible ;
- passage vers technical design possible.

### Garde-fous

- pas de code ni de projet applicatif ;
- pas d'API détaillée, OpenAPI, SQL ;
- estimation non contractuelle ;
- stack non imposée.

---

## 7. Standard — Technical design

### Objectif

Documenter les décisions techniques structurantes sans implémentation.

### Livrables

| Livrable standard | Rôle | Contenu minimal |
|-------------------|------|-----------------|
| `technical-design-plan.md` | Ouverture | Objectifs, sources, livrables attendus, garde-fous |
| `[increment]-application-architecture.md` | Architecture logique | Couches, responsabilités, flux principaux, composants logiques |
| `[increment]-front-back-data-decisions.md` | Décisions front/back/data | Répartition des responsabilités, limites, interfaces logiques, conditions futures |
| `[increment]-data-model.md` | Modèle data logique | Objets, attributs essentiels, relations, source de vérité, exclusions physiques |
| `[increment]-api-strategy.md` | Stratégie API | Besoin ou non-besoin d'API, exposition envisagée, garde-fous, report éventuel |
| `[increment]-business-rules.md` ou `[increment]-status-rules.md` | Règles métier structurantes | Transitions, préconditions, refus, règles de cohérence — au niveau conception |
| `[increment]-technical-qa-planning.md` | QA technique | Contrôles techniques prévus, risques, readiness QA avant réalisation |
| `technical-design-summary.md` | Synthèse | Décisions prises et non prises, statut recommandé, prochaine étape |

> Le nom `status-rules` est acceptable lorsque les règles portent sur des statuts métier. Préférer `business-rules` pour une formulation plus générique.

### Critères de sortie

- architecture logique claire ;
- responsabilités séparées ;
- data logique disponible ;
- stratégie API décidée ;
- règles métier structurantes documentées ;
- passage vers implementation planning possible.

### Garde-fous

- pas de code, SQL, migrations ;
- pas d'OpenAPI ni de payload JSON détaillé ;
- pas de tests automatisés ;
- modèle logique, pas schéma physique imposé.

---

## 8. Standard — Implementation planning

### Objectif

Préparer le déroulé opérationnel de réalisation, sans code.

### Livrables

| Livrable standard | Rôle | Contenu minimal |
|-------------------|------|-----------------|
| `implementation-planning-plan.md` | Ouverture | Objectifs, incrément, sources, livrables attendus, garde-fous |
| `[increment]-demo-data.md` | Données de démonstration | Jeux de données fictives, usages (QA, démo), cohérence métier, exclusions |
| `[increment]-qa-scenarios.md` | Scénarios QA | Parcours nominaux, préconditions, étapes, résultats attendus |
| `[increment]-refusal-scenarios.md` | Scénarios de refus | Refus métier, préconditions, comportement attendu, statut ou état inchangé |
| `[increment]-implementation-estimate.md` | Estimation détaillée indicative | Domaines, lots ou séquences, complexité, risques, hypothèses |
| `[increment]-implementation-plan.md` | Planification indicative | Ordre de réalisation, jalons, dépendances — sans dates fermes |
| `[increment]-realization-backlog.md` | Backlog préparatoire | Items préparatoires, priorités, mapping stories / QA / refus |
| `implementation-planning-summary.md` | Synthèse | Readiness vers realization start, garde-fous, statut recommandé |

### Critères de sortie

- données démo disponibles ;
- QA nominale et refus disponibles ;
- estimation indicative produite ;
- planification indicative disponible ;
- backlog préparatoire disponible ;
- passage vers realization start possible.

### Garde-fous

- pas de code, tickets Jira réels, sprint plan ferme ;
- pas d'engagement de dates ;
- données fictives clairement identifiées ;
- planification indicative, non opérationnelle.

---

## 9. Standard — Realization start

### Objectif

Préparer les décisions avant démarrage concret de réalisation.

### Livrables

| Livrable standard | Rôle | Contenu minimal |
|-------------------|------|-----------------|
| `realization-start-plan.md` | Ouverture | Objectif, sources, décisions à préparer, garde-fous |
| `[increment]-stack-options.md` | Options de stack | Options comparées, critères, risques, recommandation indicative |
| `[increment]-project-structure-decision.md` | Structure projet cible | Structure logique documentaire, mapping couches, conditions de création réelle |
| `[increment]-front-back-start-decision.md` | Décision front/back | Responsabilités, niveau de séparation (logique / physique), conditions futures |
| `[increment]-realization-start-checklist.md` | Checklist avant code | Conditions, blocages, distinction Go documentaire / Go réalisation |
| `realization-start-summary.md` | Synthèse | Décisions prises et non prises, readiness Go / No-go, statut recommandé |

### Critères de sortie

- stack indicative documentée ;
- structure cible documentaire ;
- séparation front/back décidée ;
- checklist avant code disponible ;
- Go documentaire ou statut équivalent formulé ;
- passage vers Go / No-go possible.

### Garde-fous

- pas de projet applicatif réel créé ;
- pas de framework initialisé ;
- pas d'autorisation de code implicite ;
- stack indicative ≠ stack concrète validée.

---

## 10. Standard — Implementation Go / No-go

### Objectif

Formuler la décision explicite avant démarrage réalisation.

### Livrables

| Livrable standard | Rôle | Contenu minimal |
|-------------------|------|-----------------|
| `implementation-go-no-go-plan.md` | Ouverture | Décisions à prendre, sources, garde-fous, options de sortie |
| `[increment]-scope-freeze-decision.md` | Gel périmètre | Périmètre gelé ou refusé, exclusions confirmées, conditions de modification |
| `[increment]-stack-final-decision.md` | Décision stack | Stack concrète validée ou report explicite, justification |
| `[increment]-data-strategy-decision.md` | Décision data | Persistance, source de vérité, restrictions, report éventuel |
| `[increment]-go-no-go-checklist.md` | Checklist Go / No-go | Conditions bloquantes, éléments validés, décision possible |
| `implementation-go-no-go-summary.md` | Synthèse | Go, No-go, Go partiel ou prolongation documentaire ; autorisation ou refus de code |

### Critères de sortie

- décision explicite formulée ;
- périmètre gelé ou refusé ;
- stack concrète validée ou reportée ;
- stratégie data validée ou reportée ;
- autorisation de code donnée ou refusée explicitement.

### Garde-fous

- aucune autorisation de code sans formulation explicite ;
- No-go et prolongation documentaire sont des sorties valides ;
- reprise d'un cycle antérieur possible si conditions non remplies.

---

## 11. Critères de qualité d'un livrable

| Critère qualité | Description |
|-----------------|-------------|
| **Objectif clair** | Le lecteur comprend pourquoi le document existe |
| **Périmètre explicite** | Ce qui est couvert est listé sans ambiguïté |
| **Hors périmètre explicite** | Ce qui n'est pas couvert est listé |
| **Sources listées** | Documents amont et références croisées identifiés |
| **Décisions distinguées des hypothèses** | Les arbitrages ne sont pas présentés comme des suppositions |
| **Garde-fous visibles** | Limites et interdictions explicites |
| **Critères de sortie** | Conditions de suffisance documentaire |
| **Prochaine action** | Étape suivante recommandée sans la déclencher |
| **Non-ambiguïté** | Pas de formulation laissant croire à une autorisation implicite |
| **Traçabilité avec l'étape précédente** | Lien avec les livrables amont explicite |

---

## 12. Règles de nommage

| Élément | Convention |
|---------|------------|
| Plan de cycle | `[cycle]-plan.md` — ex. `delivery-preparation-plan.md`, `technical-design-plan.md` |
| Synthèse de cycle | `[cycle]-summary.md` — ex. `delivery-readiness-summary.md`, `realization-start-summary.md` |
| Livrable incrément | `[increment]-[topic].md` — ex. `inc-01-user-stories.md`, `mvp-a-data-model.md` |
| Checklist incrément | `[increment]-[topic]-checklist.md` — ex. `inc-01-readiness-checklist.md` |
| Décision incrément | `[increment]-[topic]-decision.md` — ex. `inc-01-stack-final-decision.md` |
| Estimation | `[increment]-[topic]-estimate.md` ou `[increment]-effort-estimation.md` |
| Backlog | `[increment]-[topic]-backlog.md` — ex. `inc-01-realization-backlog.md` |

**Adaptation :** les conventions doivent être alignées sur la convention locale du repo si une règle existe déjà (ex. préfixe projet, numérotation, dossier phase).

**Branche de travail :** nommer la branche selon le cycle — ex. `delivery/<projet>-preparation`, `method/<projet>-realization-capitalization`.

---

## 13. Livrables à ne pas produire trop tôt

| Livrable prématuré | Pourquoi attendre |
|--------------------|-------------------|
| Code applicatif | Autorisation explicite Go réalisation requise |
| Projet applicatif réel | Structure cible documentaire d'abord ; création physique après décision |
| API détaillée | Stratégie API cadrée ; contrat détaillé après confirmation du besoin |
| OpenAPI | Après décision d'exposition API et gel périmètre |
| Payload JSON | Après contrat API ou modèle data validé |
| SQL / migration | Après décision stratégie data et stack concrète |
| Tests automatisés | Après stratégie QA confirmée et autorisation de code |
| Tickets Jira réels | Après décision opérationnelle de démarrage |
| Sprint plan ferme | Après Go réalisation et équipe engagée |
| Plan de production | Hors périmètre des cycles de préparation réalisation |

---

## 14. Cycle type recommandé

Le cycle documentaire type suit cette séquence :

1. **Ouvrir** le plan de cycle sur une branche dédiée.
2. **Produire** les livrables de fond dans l'ordre recommandé.
3. **Produire** les checklists si nécessaire pour valider la readiness.
4. **Produire** la synthèse avec statut recommandé et décision de clôture.
5. **Décider** le passage ou non à l'étape suivante (sans merge automatique implicite).
6. **Pousser** en PR documentaire après contrôle secrets et cohérence.
7. **Merger** après revue explicite.
8. **Nettoyer** la branche locale et distante une fois mergée.
9. **Ouvrir** le cycle suivant uniquement si décision explicite de continuer.

Chaque cycle produit typiquement **un commit par livrable** ou un regroupement documentaire cohérent, jamais de livrables hors périmètre (code, exports design non versionnés, secrets).

---

## 15. Décisions retenues

| Décision | Statut |
|----------|--------|
| Standard par étapes retenu | ✅ |
| Plan + livrables + synthèse par cycle retenus | ✅ |
| Checklists comme mécanisme de décision retenues | ✅ |
| Livrables incrémentaux nommés par incrément retenus | ✅ |
| Synthèse obligatoire avant PR retenue | ✅ |
| Go / No-go comme cycle distinct retenu | ✅ |
| Code exclu des cycles préparatoires retenu | ✅ |
| Tickets réels exclus par défaut retenu | ✅ |
| Sprint plan ferme exclu avant décision retenu | ✅ |
| Adaptation aux conventions repo retenue | ✅ |

---

## 16. Critères de sortie

- [x] niveaux de livrables définis ;
- [x] standard delivery preparation défini ;
- [x] standard delivery detailing défini ;
- [x] standard realization preparation défini ;
- [x] standard technical design défini ;
- [x] standard implementation planning défini ;
- [x] standard realization start défini ;
- [x] standard implementation Go / No-go défini ;
- [x] critères de qualité définis ;
- [x] règles de nommage définies ;
- [x] livrables prématurés listés ;
- [x] cycle type recommandé défini ;
- [x] décisions retenues listées.

---

## 17. Prochaine action

Le prochain livrable est :

**`realization-checklists.md`**

Objectif :
Produire les checklists réutilisables de la méthode.
