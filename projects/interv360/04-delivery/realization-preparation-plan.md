# Interv360 — Realization preparation plan

**Type** : Plan de préparation réalisation  
**Projet** : Interv360 (PRJ-INTERV360)  
**Phase** : 07-delivery  
**Cycle** : Realization preparation  
**Cible** : INC-01 — Flux SAV minimal démontrable  
**Statut** : Draft  
**Branche** : `delivery/interv360-realization-preparation`

---

## 1. Objectif

Ouvrir le cycle de **préparation réalisation** Interv360 pour :

**INC-01 — Flux SAV minimal démontrable**

Ce cycle vise à préparer la **future réalisation** de l'incrément **sans démarrer le code directement**.

L'objectif est de transformer le cadrage métier détaillé en éléments préparatoires à la réalisation :

- découpage de réalisation ;
- clarification technique ;
- stratégie QA ;
- estimation macro ;
- risques ;
- décisions à prendre avant développement.

---

## 2. Source de départ

Les sources principales sont :

- [`delivery-detailing-summary.md`](delivery-detailing-summary.md)
- [`inc-01-readiness-checklist.md`](inc-01-readiness-checklist.md)
- [`inc-01-acceptance-criteria.md`](inc-01-acceptance-criteria.md)
- [`inc-01-user-stories.md`](inc-01-user-stories.md)
- [`inc-01-detailed-backlog.md`](inc-01-detailed-backlog.md)
- [`delivery-detailing-plan.md`](delivery-detailing-plan.md)

### Décision héritée

**INC-01 est prêt pour une future préparation réalisation.**

### Statut hérité

**`Ready for realization preparation`**

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

### Résultat cible

**Une demande SAV atteint STAT-06 — Clôturée localement.**

---

## 4. Livrables attendus du cycle

| Livrable | Objectif |
|----------|----------|
| [`inc-01-realization-slicing.md`](inc-01-realization-slicing.md) | Découper INC-01 en séquences de réalisation |
| [`inc-01-technical-framing.md`](inc-01-technical-framing.md) | Identifier les cadrages techniques nécessaires sans choisir trop tôt |
| [`inc-01-qa-strategy.md`](inc-01-qa-strategy.md) | Préparer l'approche QA métier et fonctionnelle |
| [`inc-01-effort-estimation.md`](inc-01-effort-estimation.md) | Produire une estimation macro de charge / complexité |
| [`realization-preparation-summary.md`](realization-preparation-summary.md) | Synthétiser le cycle et décider de la suite |

---

## 5. Garde-fous

Le cycle doit respecter les décisions existantes :

- ne **pas** démarrer le code ;
- ne **pas** créer d'API réelle ;
- ne **pas** créer de SQL ;
- ne **pas** créer de tests automatisés ;
- ne **pas** ajouter de nouveau statut ;
- utiliser uniquement **STAT-01 à STAT-06** pour INC-01 ;
- maintenir **STAT-07** et **STAT-08** hors INC-01 ;
- ne **pas** introduire de CRM réel ;
- ne **pas** rendre la synchronisation bloquante ;
- ne **pas** ajouter dashboard ou BI ;
- ne **pas** rendre Figma bloquant ;
- ne **pas** surdimensionner INC-01.

---

## 6. Hors périmètre du cycle

Ce cycle ne couvre pas :

- développement applicatif ;
- implémentation API ;
- modèle SQL final ;
- tests automatisés ;
- CRM réel ;
- dashboard SAV ;
- anomalies d'intégration ;
- vue dirigeant ;
- INC-02 à INC-06 ;
- refonte Figma complète.

---

## 7. Ordre de travail recommandé

1. Découper INC-01 en séquences de réalisation.
2. Identifier les cadrages techniques nécessaires.
3. Préparer la stratégie QA.
4. Estimer l'effort macro.
5. Produire la synthèse du cycle.

---

## 8. Prochaine action

Créer le premier livrable :

**[`inc-01-realization-slicing.md`](inc-01-realization-slicing.md)**

**Objectif :** découper INC-01 en séquences de réalisation progressives, sans créer de code.

---

*Plan de préparation réalisation INC-01 — Draft.*
