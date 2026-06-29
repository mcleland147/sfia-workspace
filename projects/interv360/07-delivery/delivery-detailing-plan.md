# Interv360 — Delivery detailing plan

**Type** : Plan de delivery détaillé  
**Projet** : Interv360 (PRJ-INTERV360)  
**Phase** : 07-delivery  
**Cycle** : Delivery detailing  
**Cible** : INC-01 — Flux SAV minimal démontrable  
**Statut** : Draft  
**Branche** : `delivery/interv360-detailing`  
**Documents associés** : [`delivery-readiness-summary.md`](delivery-readiness-summary.md), [`delivery-slicing-strategy.md`](delivery-slicing-strategy.md), [`prioritization.md`](prioritization.md), [`macro-backlog.md`](macro-backlog.md)

---

## 1. Objectif

Ouvrir le cycle de **delivery détaillé** Interv360 en ciblant le premier incrément prioritaire :

**INC-01 — Flux SAV minimal démontrable**

Ce cycle vise à transformer l'incrément INC-01 en éléments suffisamment **détaillés** pour préparer une **future réalisation**.

Il **ne lance pas encore le code**.

---

## 2. Source de départ

Les sources principales sont :

| Document | Usage |
|----------|-------|
| [`delivery-readiness-summary.md`](delivery-readiness-summary.md) | Décision de clôture preparation — statut `Ready for delivery detailing` |
| [`delivery-slicing-strategy.md`](delivery-slicing-strategy.md) | Définition INC-01 — MB, garde-fous, démos |
| [`prioritization.md`](prioritization.md) | P0-A — sous-priorité stricte minimum |
| [`macro-backlog.md`](macro-backlog.md) | Détail des 16 MB INC-01 |
| [`functional-lots.md`](functional-lots.md) | LOT-01 à LOT-05 — lots couverts par INC-01 |
| [`mvp-scope.md`](mvp-scope.md) | Périmètre MVP et garde-fous |
| [`realization-criteria.md`](realization-criteria.md) | DoR / DoD macro — critères INC-01 |

### Éléments macro P0-A couverts par INC-01

MB-001, MB-003, MB-005, MB-007, MB-009, MB-010, MB-013, MB-014, MB-015, MB-017, MB-019, MB-021, MB-022, MB-024, MB-026, MB-027

**16 éléments macro** — référence [`prioritization.md`](prioritization.md) §4.

---

## 3. Résultat attendu de INC-01

INC-01 doit permettre de démontrer un **flux SAV minimal** :

| # | Étape |
|---|-------|
| 1 | Création d'une demande SAV |
| 2 | Consultation de la liste |
| 3 | Accès à la fiche demande |
| 4 | Qualification minimale |
| 5 | Passage en demande qualifiée (STAT-01 → STAT-02) |
| 6 | Création d'une intervention |
| 7 | Choix d'un créneau |
| 8 | Affectation d'un technicien |
| 9 | Passage en intervention planifiée (STAT-03) |
| 10 | Consultation intervention côté technicien |
| 11 | Saisie d'un compte rendu |
| 12 | Résultat d'intervention |
| 13 | Préparation de la clôture |
| 14 | Clôture locale |
| 15 | Affichage du statut clôturé (STAT-06) |

**Résultat cible :** une demande SAV peut atteindre **STAT-06 — Clôturée localement**.

**Écrans minimaux concernés :** Liste demandes, Fiche demande SAV, Planning, Fiche intervention mobile, Compte rendu mobile.

---

## 4. Livrables attendus du cycle

| Livrable | Objectif |
|----------|----------|
| [`inc-01-detailed-backlog.md`](inc-01-detailed-backlog.md) | Détailler les MB de INC-01 en backlog détaillé |
| [`inc-01-user-stories.md`](inc-01-user-stories.md) | Créer les user stories nécessaires au flux minimal |
| [`inc-01-acceptance-criteria.md`](inc-01-acceptance-criteria.md) | Définir les critères d'acceptation métier |
| [`inc-01-readiness-checklist.md`](inc-01-readiness-checklist.md) | Vérifier que INC-01 est prêt pour préparation réalisation |
| [`delivery-detailing-summary.md`](delivery-detailing-summary.md) | Synthétiser le cycle et décider de la suite |

---

## 5. Garde-fous

Le cycle doit respecter les décisions existantes :

- ne **pas** créer de nouveau statut ;
- utiliser uniquement **STAT-01 à STAT-06** pour le cycle métier INC-01 ;
- ne **pas** traiter STAT-07 / STAT-08 dans INC-01 sauf mention documentaire ;
- ne **pas** introduire de CRM réel ;
- ne **pas** introduire d'API réelle ;
- ne **pas** créer de code ;
- ne **pas** créer de SQL ;
- ne **pas** créer de tests automatisés ;
- ne **pas** bloquer le flux sur Figma ;
- ne **pas** transformer le dashboard en prérequis ;
- ne **pas** surdimensionner INC-01.

**Référence design :** Liste demandes — Figma Design V2 validé (`figma-first-screen-review.md`) ; autres écrans en spec / Figma V1.

---

## 6. Hors périmètre du cycle

Ce cycle **ne couvre pas** :

- INC-02 à INC-06 ;
- CRM simulé complet ;
- anomalies d'intégration ;
- dashboard SAV ;
- vue dirigeant ;
- BI ;
- planning avancé ;
- notifications ;
- habilitations avancées ;
- design system complet ;
- code applicatif ;
- conception technique détaillée.

---

## 7. Ordre de travail recommandé

1. Détailler le backlog INC-01.
2. Produire les user stories INC-01.
3. Définir les critères d'acceptation métier.
4. Vérifier la readiness INC-01.
5. Produire la synthèse du cycle.

---

## 8. Prochaine action

Créer le premier livrable du cycle :

**[`inc-01-detailed-backlog.md`](inc-01-detailed-backlog.md)**

**Objectif :** détailler les éléments MB-001, MB-003, MB-005, MB-007, MB-009, MB-010, MB-013, MB-014, MB-015, MB-017, MB-019, MB-021, MB-022, MB-024, MB-026 et MB-027 en **backlog détaillé**, sans encore produire de code.

---

*Plan de delivery détaillé Interv360 — INC-01 — Draft.*
