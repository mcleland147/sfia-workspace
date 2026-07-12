# Interv360 — Implementation planning plan

**Type** : Plan de préparation réalisation  
**Projet** : Interv360 (PRJ-INTERV360)  
**Phase** : 04-delivery  
**Cycle** : Implementation planning  
**Cible** : INC-01 — Flux SAV minimal démontrable  
**Statut** : Draft  
**Branche** : `delivery/interv360-implementation-planning`

---

## 1. Objectif

Ouvrir le cycle de **préparation réalisation** Interv360 pour :

**INC-01 — Flux SAV minimal démontrable**

Ce cycle vise à préparer le démarrage réalisation **sans démarrer le code directement**.

L'objectif est de transformer le technical design en éléments exploitables pour une future réalisation :

- données de démonstration formelles ;
- scénarios QA détaillés ;
- scénarios de refus métier ;
- estimation détaillée indicative ;
- planification de réalisation ;
- backlog de réalisation préparatoire ;
- synthèse de readiness avant réalisation.

---

## 2. Source de départ

Les sources principales sont :

- [`technical-design-summary.md`](technical-design-summary.md)
- [`inc-01-technical-qa-planning.md`](inc-01-technical-qa-planning.md)
- [`inc-01-status-rules.md`](inc-01-status-rules.md)
- [`inc-01-api-strategy.md`](inc-01-api-strategy.md)
- [`inc-01-data-model.md`](inc-01-data-model.md)
- [`2026-06-29-inc-01-front-back-data-decisions.md`](2026-06-29-inc-01-front-back-data-decisions.md)
- [`inc-01-application-architecture.md`](inc-01-application-architecture.md)
- [`realization-preparation-summary.md`](realization-preparation-summary.md)

### Décision héritée

**INC-01 est prêt pour un futur cycle de planification de réalisation.**

### Statut hérité

**`Ready for implementation planning`**

---

## 3. Périmètre INC-01

INC-01 couvre le flux SAV minimal :

1. création demande ;
2. liste demandes ;
3. accès fiche ;
4. détail demande ;
5. qualification minimale ;
6. passage qualifiée ;
7. création intervention ;
8. sélection créneau ;
9. affectation technicien ;
10. intervention planifiée ;
11. consultation technicien ;
12. saisie compte rendu ;
13. résultat intervention ;
14. préparation clôture ;
15. clôture locale ;
16. visualisation STAT-06.

Résultat cible :

**Une demande SAV atteint STAT-06 — Clôturée localement.**

---

## 4. Référentiel de réalisation

Le cycle s'appuie sur les séquences suivantes :

| Séquence | Objet | Résultat attendu |
|----------|-------|------------------|
| RS-01 | Socle demande SAV | Demande STAT-01 visible liste + fiche |
| RS-02 | Qualification minimale | Demande STAT-02 |
| RS-03 | Planification intervention | Intervention STAT-03 |
| RS-04 | Réalisation terrain et CR | CR + résultat saisis |
| RS-05 | Clôture locale et STAT-06 | STAT-06 visible liste + fiche |

Chemin nominal :

**STAT-01 → STAT-02 → STAT-03 → STAT-04 → STAT-06**

---

## 5. Livrables attendus du cycle

| Livrable | Objectif |
|----------|----------|
| `inc-01-demo-data.md` | Formaliser les données de démonstration |
| `inc-01-qa-scenarios.md` | Décrire les scénarios QA métier détaillés sans automatisation |
| `inc-01-refusal-scenarios.md` | Décrire les scénarios de refus métier |
| `inc-01-implementation-estimate.md` | Produire une estimation détaillée indicative |
| `inc-01-implementation-plan.md` | Préparer la planification de réalisation |
| `inc-01-realization-backlog.md` | Préparer le backlog de réalisation |
| `implementation-planning-summary.md` | Synthétiser le cycle et décider de la suite |

---

## 6. Garde-fous

Le cycle doit respecter les décisions existantes :

- ne pas démarrer le code ;
- ne pas créer d'implémentation API ;
- ne pas créer de SQL exécutable ;
- ne pas créer de tests automatisés ;
- ne pas créer de scripts ;
- ne pas ajouter de nouveau statut ;
- utiliser uniquement STAT-01 à STAT-06 pour INC-01 ;
- maintenir STAT-05 hors chemin nominal ;
- maintenir STAT-07 et STAT-08 hors INC-01 ;
- ne pas introduire de CRM réel ;
- ne pas rendre la synchronisation bloquante ;
- ne pas ajouter dashboard ou BI ;
- ne pas rendre Figma bloquant ;
- ne pas élargir INC-01.

---

## 7. Hors périmètre du cycle

Ce cycle ne couvre pas :

- développement applicatif ;
- génération de code ;
- implémentation API ;
- migration ou script SQL ;
- tests automatisés ;
- CRM réel ;
- dashboard SAV ;
- anomalies d'intégration ;
- vue dirigeant ;
- INC-02 à INC-06 ;
- refonte Figma complète ;
- mise en production.

---

## 8. Ordre de travail recommandé

1. Formaliser les données de démonstration.
2. Décrire les scénarios QA métier.
3. Décrire les scénarios de refus métier.
4. Produire l'estimation détaillée indicative.
5. Préparer la planification de réalisation.
6. Préparer le backlog de réalisation.
7. Produire la synthèse du cycle.

---

## 9. Prochaine action

Créer le premier livrable :

`inc-01-demo-data.md`

Objectif :

Formaliser les données de démonstration nécessaires au flux INC-01, sans créer de jeu de test automatisé.
