# Interv360 — Realization start plan

**Type** : Plan de décision de démarrage réalisation  
**Projet** : Interv360 (PRJ-INTERV360)  
**Phase** : 04-delivery  
**Cycle** : Realization start  
**Cible** : INC-01 — Flux SAV minimal démontrable  
**Statut** : Draft  
**Branche** : `delivery/interv360-realization-start`

---

## 1. Objectif

Ouvrir le cycle de **décision de démarrage réalisation** pour :

**INC-01 — Flux SAV minimal démontrable**

Ce cycle vise à préparer les décisions nécessaires avant de démarrer concrètement le code.

Il **ne constitue pas encore** une autorisation de coder.

L'objectif est de clarifier :

- le choix de stack ;
- la structure projet cible ;
- la séparation front / back ;
- les conditions minimales avant démarrage code ;
- les éléments à valider avant création de tickets réels ;
- les garde-fous pour éviter d'élargir INC-01.

---

## 2. Source de départ

Les sources principales sont :

- [`implementation-planning-summary.md`](implementation-planning-summary.md)
- [`inc-01-realization-backlog.md`](inc-01-realization-backlog.md)
- [`inc-01-implementation-plan.md`](inc-01-implementation-plan.md)
- [`inc-01-implementation-estimate.md`](inc-01-implementation-estimate.md)
- [`inc-01-qa-scenarios.md`](inc-01-qa-scenarios.md)
- [`inc-01-refusal-scenarios.md`](inc-01-refusal-scenarios.md)
- [`inc-01-demo-data.md`](inc-01-demo-data.md)
- [`technical-design-summary.md`](technical-design-summary.md)

### Décision héritée

**INC-01 est prêt pour une décision de démarrage réalisation.**

### Statut hérité

**`Ready for realization preparation / implementation start decision`**

### Précision

Ce statut signifie que le périmètre est prêt documentairement, mais que le démarrage code nécessite encore une **décision explicite**.

---

## 3. Périmètre INC-01 rappelé

INC-01 couvre uniquement le flux SAV minimal :

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

Chemin nominal :

**STAT-01 → STAT-02 → STAT-03 → STAT-04 → STAT-06**

---

## 4. Questions de décision du cycle

| Décision | Objectif |
|----------|----------|
| **Choix stack** | Choisir ou recommander une stack de réalisation |
| **Structure projet** | Définir l'organisation minimale du projet applicatif |
| **Séparation front / back** | Décider mono-app, front/back séparés ou autre approche |
| **Gestion data** | Préparer le choix de persistance sans produire SQL |
| **Démarrage code** | Définir les conditions d'autorisation |
| **Tickets réels** | Décider si un découpage opérationnel sera créé plus tard |
| **QA réalisation** | Décider comment les scénarios QA seront exploités |
| **Garde-fous** | Confirmer que CRM, dashboard, STAT-07/08 restent hors périmètre |

---

## 5. Livrables attendus du cycle

| Livrable | Objectif |
|----------|----------|
| `inc-01-stack-options.md` | Comparer les options de stack possibles |
| `2026-06-29-inc-01-project-structure-decision.md` | Définir la structure projet cible sans créer le projet |
| `2026-06-29-inc-01-front-back-start-decision.md` | Décider du niveau de séparation front / back |
| `inc-01-realization-start-checklist.md` | Lister les conditions avant autorisation de code |
| `realization-start-summary.md` | Synthétiser le cycle et décider de la suite |

---

## 6. Garde-fous

Le cycle doit respecter les décisions existantes :

- ne pas démarrer le code ;
- ne pas initialiser de framework ;
- ne pas créer de projet applicatif ;
- ne pas créer d'implémentation API ;
- ne pas créer de SQL exécutable ;
- ne pas créer de tests automatisés ;
- ne pas créer de scripts ;
- ne pas créer de tickets Jira réels ;
- ne pas créer de sprint plan ferme ;
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
- initialisation d'un projet front ou back ;
- installation de dépendances applicatives ;
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

1. Comparer les options de stack.
2. Définir la structure projet cible.
3. Décider du niveau de séparation front / back.
4. Produire la checklist d'autorisation de démarrage code.
5. Produire la synthèse du cycle.

---

## 9. Prochaine action

Créer le premier livrable :

`inc-01-stack-options.md`

**Objectif :** comparer les options de stack possibles pour INC-01, sans installer ni initialiser quoi que ce soit.
