# Interv360 — Delivery preparation plan

**Type** : Plan de préparation delivery  
**Projet** : Interv360 (PRJ-INTERV360)  
**Phase** : 07-delivery  
**Cycle** : Delivery preparation  
**Statut** : Draft  
**Branche** : `delivery/interv360-preparation`

---

## 1. Objectif

Préparer le passage d'Interv360 vers une **trajectoire delivery structurée**.

Ce cycle **ne vise pas** à produire du code, des tests, des API, du SQL ou un backlog détaillé.

Il vise à transformer les travaux déjà réalisés en une **base exploitable** pour organiser la réalisation.

Les sources déjà disponibles sont :

- le cadrage projet ;
- l'architecture fonctionnelle détaillée ;
- les ADR fonctionnels ;
- les specs UX/UI ;
- la trajectoire Figma Design V2 ;
- la revue de l'écran pilote `Liste demandes — Design V2`.

---

## 2. Décision d'entrée en delivery preparation

La phase design est considérée comme **suffisante pour avancer**.

La maquette `Liste demandes — Design V2` n'est **pas** considérée comme parfaite, mais elle est **suffisamment claire et présentable** pour soutenir la compréhension du produit.

La valeur du projet se déplace maintenant vers :

- la structuration du MVP ;
- le découpage fonctionnel ;
- la priorisation ;
- la préparation du backlog macro ;
- la définition des critères de réalisation ;
- la trajectoire de delivery.

---

## 3. Livrables attendus du cycle

| Livrable | Objectif |
|----------|----------|
| MVP scope | Définir le périmètre fonctionnel minimum livrable |
| Functional lots | Découper le produit en lots de réalisation cohérents |
| Macro backlog | Identifier les grands éléments de backlog sans descendre aux user stories détaillées |
| Prioritization | Prioriser les lots et capacités selon la valeur métier et les dépendances |
| Delivery slicing strategy | Proposer une stratégie de découpage progressif |
| Realization criteria | Définir les critères permettant de considérer un lot réalisable / prêt |
| Delivery readiness summary | Synthétiser le niveau de préparation au passage delivery |

---

## 4. Sources de travail

| Source | Usage |
|--------|-------|
| `05-functional-architecture/` | Source fonctionnelle principale |
| `06-ux-ui/` | Parcours, écrans, usages et décisions UX |
| [`03-design/figma-first-screen-review.md`](../03-design/figma-first-screen-review.md) | Décision de passage vers delivery |
| [`03-design/figma-reprise-path.md`](../03-design/figma-reprise-path.md) | Décision outillage design |
| [`03-design/figma-fresh-start-instructions.md`](../03-design/figma-fresh-start-instructions.md) | Contexte nouveau fichier Figma |
| [`03-design/figma-first-screen-reprise-instructions.md`](../03-design/figma-first-screen-reprise-instructions.md) | Référence écran pilote |
| [`02-architecture/figma-v1-closure-summary.md`](../02-architecture/figma-v1-closure-summary.md) | Référence historique Figma V1 |

---

## 5. Garde-fous delivery

Le cycle delivery doit respecter les décisions déjà prises :

- Interv360 est la **source de vérité locale** ;
- le CRM simulé **n'est pas** source de vérité ;
- la clôture locale **n'est pas bloquée** par la synchronisation CRM ;
- STAT-01 à STAT-06 représentent le **cycle de vie métier SAV** ;
- STAT-07 est un **indicateur de retard** ;
- STAT-08 est un **indicateur d'anomalie d'intégration** ;
- STAT-08 **ne rouvre pas** une intervention ;
- les dashboards et listes **ne sont pas** source de vérité détaillée ;
- la **fiche demande** reste la référence opérationnelle détaillée.

---

## 6. Hors périmètre du cycle

Ce cycle **ne couvre pas** :

- code ;
- API ;
- SQL ;
- BPMN ;
- tests détaillés ;
- user stories détaillées ;
- design system complet ;
- retouches fines Figma ;
- delivery effectif ;
- choix technique d'implémentation.

---

## 7. Ordre de travail recommandé

1. Définir le périmètre MVP.
2. Découper les lots fonctionnels.
3. Construire le backlog macro.
4. Prioriser les lots.
5. Définir les critères de réalisation.
6. Définir la stratégie de découpage delivery.
7. Produire une synthèse de readiness.

---

## 8. Prochaine action

Créer le premier livrable du cycle :

**`mvp-scope.md`**

Ce document devra définir ce qui appartient au MVP, ce qui est hors MVP, et ce qui doit être conservé pour une phase ultérieure.

---

*Plan de préparation delivery Interv360 — Draft.*
