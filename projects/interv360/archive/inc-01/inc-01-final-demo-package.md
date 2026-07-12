# Interv360 — INC-01 Final Demo Package

**Projet** : Interv360  
**Incrément** : INC-01 — Flux SAV minimal démontrable  
**Cycle** : Final Demo Package  
**Statut** : Package de démonstration final  
**Branche** : `delivery/interv360-inc-01-final-demo-package`

---

## 1. Objectif du package

Ce document regroupe les éléments nécessaires pour **présenter le démonstrateur Interv360 INC-01**.

Il sert à préparer une démonstration claire, rejouable et honnête du workflow local contrôlé.

Il ne s'agit **pas** d'un package de mise en production.

---

## 2. Synthèse exécutive

INC-01 démontre un flux SAV minimal sur une demande fictive unique :

`SAV-DEMO-001`

Le démonstrateur permet de parcourir le flux nominal suivant :

`STAT-01 → STAT-02 → STAT-03 → STAT-04 → STAT-06`

Le parcours est **local**, **fictif**, **resettable** et **sans backend**.

---

## 3. Ce qui a été réalisé

| Élément | Statut |
|--------|--------|
| Socle applicatif React / TypeScript / Vite | Réalisé |
| Liste des demandes | Réalisé |
| Fiche détail demande | Réalisé |
| Reset démo | Réalisé |
| Qualification readonly | Réalisé |
| Planification readonly | Réalisé |
| Intervention readonly | Réalisé |
| Compte rendu readonly | Réalisé |
| Workflow local contrôlé | Réalisé |
| Journal local fictif | Réalisé |
| Validation fonctionnelle | Réalisée |
| Script de démonstration | Réalisé |
| REX phase 2 | Réalisé |
| Capitalisation SFIA Controlled Delivery | Réalisée |

---

## 4. Parcours démontré

| Étape | Action | Transition | Événement |
|------|--------|------------|-----------|
| 0 | Reset démo | Retour `STAT-01` | Journal vidé |
| 1 | Présenter la demande | Consultation | — |
| 2 | Présenter les vues readonly | Consultation | — |
| 3 | Qualifier la demande | `STAT-01 → STAT-02` | `qualification.confirmed` |
| 4 | Planifier l'intervention | `STAT-02 → STAT-03` | `planning.confirmed` |
| 5 | Marquer l'intervention réalisée | `STAT-03 → STAT-04` | `intervention.completed` |
| 6 | Clôturer avec compte rendu fictif | `STAT-04 → STAT-06` | `report.closed` |
| 7 | Présenter le journal | Consultation | 4 événements |
| 8 | Reset final | Retour `STAT-01` | Journal vidé |

**Script détaillé :** [`inc-01-demo-script.md`](inc-01-demo-script.md)

---

## 5. Comment lancer la démo

Depuis le repo :

```bash
cd projects/interv360/app
npm install
npm run dev
```

**Avant de présenter :**

- ouvrir l'application dans le navigateur ;
- cliquer sur **Réinitialiser la démo** ;
- vérifier que la demande est en `STAT-01` ;
- vérifier que le journal est vide ;
- vérifier que le bouton **Qualifier la demande** est visible.

**Documentation applicative :** [`../../app/README.md`](../../app/README.md)

---

## 6. Script de démonstration

**Document de référence :**

[`inc-01-demo-script.md`](inc-01-demo-script.md)

Le script couvre :

- message d'introduction ;
- points clés à rappeler ;
- parcours étape par étape ;
- résultats attendus ;
- limites ;
- questions / réponses ;
- checklist avant présentation.

---

## 7. Validation fonctionnelle

**Document de référence :**

[`inc-01-controlled-workflow-validation.md`](inc-01-controlled-workflow-validation.md)

**Validation obtenue :**

| Contrôle | Résultat |
|----------|----------|
| Build | OK |
| Tests | OK |
| Nombre de tests | 38 tests passés |
| Fichiers de tests | 12 fichiers |
| Workflow nominal | Validé |
| Reset | Validé |
| Journal | Validé |
| Garde-fous | Validés |

---

## 8. Limites à expliciter

Le démonstrateur **ne prouve pas** :

- une exploitation réelle ;
- une intégration CRM ;
- une intégration backend ;
- une persistance serveur ;
- une gestion multi-utilisateur ;
- une authentification ;
- une gestion de droits ;
- une conformité production ;
- une gestion avancée des erreurs métier.

Il s'agit d'un **démonstrateur local contrôlé**.

---

## 9. Garde-fous respectés

Le démonstrateur **n'utilise pas** :

- backend ;
- API ;
- base de données serveur ;
- SQL ;
- CRM réel ;
- données réelles ;
- dashboard ;
- multi-utilisateur ;
- statuts hors nominal ;
- publication Notion.

Le parcours reste limité à :

- `SAV-DEMO-001` ;
- données fictives ;
- stockage local ;
- journal local fictif ;
- reset explicite.

---

## 10. Documents de référence

| Document | Rôle |
|----------|------|
| [`inc-01-demo-script.md`](inc-01-demo-script.md) | Script de présentation |
| [`inc-01-controlled-workflow-validation.md`](inc-01-controlled-workflow-validation.md) | Validation fonctionnelle |
| [`inc-01-controlled-workflow-skeleton-summary.md`](inc-01-controlled-workflow-skeleton-summary.md) | Summary de livraison workflow |
| [`2026-07-01-inc-01-phase-2-rex.md`](2026-07-01-inc-01-phase-2-rex.md) | Retour d'expérience phase 2 |
| [`inc-01-readonly-demo-summary.md`](inc-01-readonly-demo-summary.md) | Consolidation parcours readonly |
| [`../../app/README.md`](../../app/README.md) | Documentation applicative |

---

## 11. Lien avec SFIA Controlled Delivery

INC-01 a servi de **cas terrain** pour formaliser la méthode SFIA Controlled Delivery.

**Références méthode :**

| Document | Rôle |
|----------|------|
| [`../../../methods/controlled-delivery/README.md`](../../../methods/controlled-delivery/README.md) | Index Controlled Delivery |
| [`../../../methods/controlled-delivery/controlled-delivery-standard.md`](../../../methods/controlled-delivery/controlled-delivery-standard.md) | Standard |
| [`../../../methods/controlled-delivery/controlled-delivery-checklist.md`](../../../methods/controlled-delivery/controlled-delivery-checklist.md) | Checklist |
| [`../../../methods/controlled-delivery/controlled-delivery-template.md`](../../../methods/controlled-delivery/controlled-delivery-template.md) | Template |
| [`../../../methods/controlled-delivery/controlled-delivery-prompt-family.md`](../../../methods/controlled-delivery/controlled-delivery-prompt-family.md) | Prompt family |

**Apport méthode :**

- phase 1 : cadrage fin par micro-cycles ;
- phase 2 : réalisation groupée contrôlée ;
- validation fonctionnelle ;
- script de démonstration ;
- REX ;
- capitalisation SFIA.

**Index méthodes :** [`../../../methods/README.md`](../../../methods/README.md)

---

## 12. Message de conclusion recommandé

> INC-01 montre qu'un parcours SAV minimal peut être matérialisé de manière progressive et contrôlée.
>
> La valeur principale n'est pas seulement le démonstrateur local, mais la méthode obtenue : partir d'un cadrage fin, sécuriser les règles, accélérer ensuite en lot groupé, valider, démontrer puis capitaliser.
>
> C'est cette trajectoire qui a permis de formaliser le standard SFIA Controlled Delivery.

---

## 13. Décision de package

**Décision proposée :**

- [x] Package final de démonstration INC-01 préparé
- [ ] Package à compléter
- [ ] Package à reprendre

### Décision

Le package final de démonstration Interv360 INC-01 est **prêt**.

Il peut être utilisé pour présenter le démonstrateur local et expliquer son lien avec la capitalisation SFIA Controlled Delivery.

---

## 14. Prochaine étape recommandée

Trois options restent possibles.

### Option A — Démonstration / présentation

Utiliser ce package pour présenter INC-01 en direct ou en revue.

### Option B — Publication méthode

Ouvrir **uniquement sur demande explicite** :

`method/controlled-delivery-publish-notion`

**Objectif :**

- publier le standard Controlled Delivery dans la destination SFIA validée ;
- ne publier que les actifs validés ;
- contrôler le rendu et les liens.

### Option C — Clôture globale INC-01

Ouvrir :

`delivery/interv360-inc-01-global-summary`

**Objectif :**

- produire une synthèse globale d'INC-01 ;
- consolider toutes les phases ;
- préparer une éventuelle PR ou archive documentaire.

**Recommandation :**

Ouvrir ensuite **Option C** (`delivery/interv360-inc-01-global-summary`) pour clôturer documentairement l'incrément avant toute publication externe.
