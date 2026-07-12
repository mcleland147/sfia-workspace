# SFIA — Interv360 realization capitalization plan

**Type** : Plan de capitalisation méthode
**Référence projet** : Interv360 (PRJ-INTERV360)
**Objet** : Capitalisation des cycles de préparation réalisation
**Statut** : Draft
**Branche** : `method/interv360-realization-capitalization`

---

## 1. Objectif

Ce cycle vise à capitaliser les travaux réalisés sur Interv360 afin de produire une méthode réutilisable pour les futurs projets SFIA.

La capitalisation couvre les cycles suivants :

- delivery preparation ;
- delivery detailing ;
- realization preparation ;
- technical design ;
- implementation planning ;
- realization start ;
- préparation Go / No-go réalisation.

Cette capitalisation est réalisée avant tout développement applicatif.

Elle ne constitue pas une autorisation de coder.

---

## 2. Décision de principe

La décision métier / produit est :

**GO d'intention pour poursuivre vers la réalisation.**

Mais avant tout développement, il faut produire une capitalisation méthode.

La décision de démarrage code reste distincte et devra faire l'objet d'un futur cycle explicite.

---

## 3. Sources projet à capitaliser

Les principales sources projet sont situées dans :

```text
projects/interv360/07-delivery/
```

Sources principales à relire :

- delivery-preparation-plan.md
- mvp-scope.md
- functional-lots.md
- macro-backlog.md
- prioritization.md
- delivery-slicing-strategy.md
- realization-criteria.md
- delivery-readiness-summary.md
- delivery-detailing-plan.md
- inc-01-detailed-backlog.md
- inc-01-user-stories.md
- inc-01-acceptance-criteria.md
- inc-01-readiness-checklist.md
- delivery-detailing-summary.md
- realization-preparation-plan.md
- inc-01-realization-slicing.md
- inc-01-technical-framing.md
- inc-01-qa-strategy.md
- inc-01-effort-estimation.md
- realization-preparation-summary.md
- technical-design-plan.md
- inc-01-application-architecture.md
- inc-01-front-back-data-decisions.md
- inc-01-data-model.md
- inc-01-api-strategy.md
- inc-01-status-rules.md
- inc-01-technical-qa-planning.md
- technical-design-summary.md
- implementation-planning-plan.md
- inc-01-demo-data.md
- inc-01-qa-scenarios.md
- inc-01-refusal-scenarios.md
- inc-01-implementation-estimate.md
- inc-01-implementation-plan.md
- inc-01-realization-backlog.md
- implementation-planning-summary.md
- realization-start-plan.md
- inc-01-stack-options.md
- inc-01-project-structure-decision.md
- inc-01-front-back-start-decision.md
- inc-01-realization-start-checklist.md
- realization-start-summary.md

---

## 4. Ce qui doit être capitalisé

La capitalisation doit extraire une méthode générique à partir du cas Interv360.

Elle doit couvrir :

- la logique de passage du cadrage fonctionnel vers la réalisation ;
- la structuration d'un MVP ;
- le découpage en lots fonctionnels ;
- la priorisation ;
- le slicing de livraison ;
- la préparation d'un incrément démontrable ;
- la formalisation des user stories ;
- les critères d'acceptation ;
- la stratégie QA ;
- les scénarios nominaux ;
- les scénarios de refus ;
- la préparation technique sans code ;
- la stratégie API sans implémentation prématurée ;
- les règles de statut ;
- l'estimation indicative ;
- le backlog préparatoire ;
- la décision stack ;
- la décision de structure projet ;
- la décision front/back ;
- la checklist avant code ;
- la préparation Go / No-go.

---

## 5. Livrables attendus du cycle

| Livrable | Objectif |
|----------|----------|
| realization-method.md | Formaliser la méthode complète de préparation réalisation |
| realization-deliverables-standard.md | Standardiser les livrables attendus par phase |
| realization-checklists.md | Produire les checklists réutilisables |
| realization-templates.md | Produire les modèles génériques de documents |
| realization-prompt-family.md | Capitaliser la famille de prompts Cursor / ChatGPT |
| capitalization-summary.md | Synthétiser la capitalisation et préparer la PR |

---

## 6. Principes de capitalisation

La méthode doit être :

- générique ;
- réutilisable sur d'autres projets ;
- compatible avec une approche SFIA ;
- indépendante du métier SAV ;
- indépendante de la stack technique ;
- exploitable avant développement ;
- orientée livraison ;
- suffisamment concrète pour guider Cursor / ChatGPT ;
- non prescriptive sur le code ;
- compatible avec des cycles courts ;
- compatible avec des cycles de décision Go / No-go.

---

## 7. Ce qui ne doit pas être capitalisé comme règle générale

Ne pas transformer les spécificités Interv360 en règles universelles.

Exemples :

- les statuts STAT-01 à STAT-08 sont propres à Interv360 ;
- le flux SAV est propre à Interv360 ;
- les noms SAV-DEMO-001 / INT-DEMO-001 sont propres à Interv360 ;
- les écrans Interv360 sont propres au produit ;
- le choix mono-app est une recommandation contextuelle, pas une règle universelle.

La méthode doit expliquer comment décider, pas imposer les décisions Interv360 à tous les projets.

---

## 8. Garde-fous

Ce cycle ne doit pas :

- créer de code ;
- créer de projet applicatif ;
- initialiser de framework ;
- installer de dépendances ;
- créer d'API ;
- créer d'OpenAPI ;
- créer de payload JSON ;
- créer de SQL ;
- créer de tests automatisés ;
- créer de scripts ;
- créer de tickets Jira réels ;
- créer de sprint plan ferme ;
- modifier Figma ;
- modifier Penpot ;
- commiter les exports PNG ;
- donner une autorisation de code.

---

## 9. Ordre recommandé

1. Formaliser la méthode complète.
2. Standardiser les livrables.
3. Produire les checklists.
4. Produire les templates.
5. Capitaliser la famille de prompts.
6. Produire la synthèse et préparer la PR.

---

## 10. Prochaine action

Créer le livrable :

**realization-method.md**

Objectif :
Formaliser la méthode complète de préparation réalisation, en généralisant ce qui a été fait sur Interv360.
