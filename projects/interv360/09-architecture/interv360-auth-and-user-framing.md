# Interv360 — Auth and User Framing

**Projet** : Interv360  
**Cycle** : Role Simulation  
**Mode** : SFIA Batch Delivery produit contrôlé  
**Statut** : Batch produit — INC-PROD-01 réalisé  
**Branche** : `delivery/interv360-role-simulation`

---

## 1. Objectif

Ce document cadre l’identité produit Interv360, les utilisateurs, les rôles et les responsabilités avant toute implémentation.

L’objectif n’est pas de coder l’authentification, mais de décider :

- quels acteurs existent dans le produit ;
- quels rôles sont nécessaires ;
- quelles responsabilités sont portées par chaque rôle ;
- quelles actions sont autorisées ou non ;
- quel niveau d’authentification est pertinent pour le prochain incrément.

> Note SFIA : ce cadrage n’est pas mergé via une PR dédiée. Il devient l’INC-PROD-01 du batch `delivery/interv360-role-simulation`, afin de réduire le nombre de PR documentaires et de livrer un résultat produit utile dans une PR unique.

---

## 2. Point de départ

La roadmap produit recommande d’ouvrir un cadrage dédié **Auth / users / rôles** avant toute implémentation.

Référence : [`interv360-product-roadmap-next.md`](./interv360-product-roadmap-next.md)

Le socle actuel dispose déjà :

- d’un backend SQLite persistant ;
- d’une API `/api/v1` stabilisée ;
- d’un modèle RequestDetail productisé ;
- d’erreurs API clarifiées ;
- d’un frontend connecté affichant les champs métier productisés ;
- d’un runbook produit consolidé.

Le produit reste cependant mono-profil et sans modèle d’acteurs.

### 2.1. Intégration dans le batch Role Simulation

Ce document constitue l’INC-PROD-01 du batch `delivery/interv360-role-simulation`.

Objectif du batch :

- conserver le cadrage rôles et responsabilités ;
- implémenter ensuite une simulation de rôle contrôlée ;
- ne pas introduire d’authentification réelle ;
- ne pas introduire OAuth, JWT, SSO ou base users complète ;
- produire une PR unique à la fin du batch.

Incréments prévus :

| Incrément | Objectif | Statut |
|----------|----------|--------|
| INC-PROD-01 | Cadrer rôles, responsabilités et option auth simulée | Réalisé |
| INC-PROD-02 | Définir le comportement de simulation de rôle | À faire |
| INC-PROD-03 | Implémenter la simulation de rôle | À faire |
| INC-PROD-04 | Tests et documentation | À faire |
| INC-PROD-05 | Préparer PR du batch | À venir |

Document delivery : [`../07-delivery/role-simulation.md`](../07-delivery/role-simulation.md)

---

## 3. Problème à résoudre

Interv360 doit sortir progressivement du mode démonstrateur mono-profil.

Sans cadrage utilisateurs/rôles :

- les responsabilités métier restent floues ;
- les droits d’action ne sont pas explicites ;
- l’extension du workflow risque d’être mal orientée ;
- l’implémentation auth pourrait être prématurée ou surdimensionnée.

---

## 4. Acteurs candidats

| Acteur | Description | Décision |
|--------|-------------|----------|
| Demandeur | Personne qui signale ou suit une demande | À décider |
| Technicien | Personne qui qualifie, planifie ou réalise l’intervention | À décider |
| Responsable / coordinateur | Personne qui supervise les demandes et priorités | À décider |
| Administrateur | Personne qui administre le produit | À décider |
| Observateur | Personne en lecture seule | À décider |

---

## 5. Rôles candidats

| Rôle | Intention | Décision |
|------|-----------|----------|
| `requester` | Consulter ou créer une demande | À décider |
| `technician` | Qualifier, planifier, traiter | À décider |
| `manager` | Superviser, prioriser, arbitrer | À décider |
| `admin` | Administrer les référentiels et droits | À décider |
| `viewer` | Consulter sans agir | À décider |

---

## 6. Actions produit à contrôler

| Action | Description | Besoin de contrôle |
|--------|-------------|--------------------|
| Voir liste demandes | Accès à la liste | À décider |
| Voir détail demande | Accès à la fiche | À décider |
| Qualifier | Transition `qualify` | À décider |
| Planifier | Transition `plan` | À décider |
| Clôturer intervention | Transition `complete_intervention` | À décider |
| Clôturer rapport | Transition `close_report` | À décider |
| Réinitialiser démo | Reset API | À décider |
| Administrer utilisateurs | Gestion des users/rôles | Hors implémentation immédiate |

---

## 7. Options d’authentification

### Option A — Pas d’auth, rôles documentés uniquement

Principe :

- conserver l’application sans auth ;
- documenter seulement les futurs rôles.

Avantages :

- très simple ;
- aucun impact technique ;
- utile pour cadrage.

Limites :

- ne prépare pas vraiment le produit multi-acteurs ;
- pas de test de responsabilité.

---

### Option B — Auth simulée / rôle local de démonstration

Principe :

- ajouter plus tard un rôle simulé côté frontend ou seed démo ;
- pas d’auth réelle ;
- utile pour démontrer les comportements par rôle.

Avantages :

- bon compromis produit ;
- permet de tester les droits sans complexité sécurité ;
- compatible démonstrateur.

Limites :

- ne sécurise rien réellement ;
- doit être présenté comme simulation.

---

### Option C — Auth technique réelle légère

Principe :

- introduire un vrai mécanisme d’auth minimal.

Avantages :

- rapproche du produit réel.

Limites :

- trop tôt ;
- risque de sur-architecture ;
- implique sécurité, stockage users, tokens, sessions, tests, UX login.

---

## 8. Décision recommandée

Décision :

> retenir un modèle **rôles et responsabilités d’abord**, avec une éventuelle simulation de rôle dans un incrément ultérieur, mais sans auth réelle immédiate.

Recommandation :

- cadrer les rôles produit ;
- cadrer les permissions par action ;
- ne pas implémenter OAuth / JWT maintenant ;
- ne pas créer de base users complète maintenant ;
- ne pas ouvrir l’administration utilisateurs maintenant ;
- préparer un futur incrément de simulation de rôle si cela apporte de la valeur démontrable.

---

## 9. Matrice responsabilités recommandée

| Action | requester | technician | manager | admin | viewer |
|--------|-----------|------------|---------|-------|--------|
| Voir liste demandes | Oui | Oui | Oui | Oui | Oui |
| Voir détail demande | Oui | Oui | Oui | Oui | Oui |
| Qualifier | Non | Oui | Oui | Oui | Non |
| Planifier | Non | Oui | Oui | Oui | Non |
| Clôturer intervention | Non | Oui | Oui | Oui | Non |
| Clôturer rapport | Non | Oui | Oui | Oui | Non |
| Reset démo | Non | Non | Non | Oui | Non |
| Administrer utilisateurs | Non | Non | Non | Oui | Non |

---

## 10. Périmètre du prochain incrément recommandé

Prochain incrément possible :

`delivery/interv360-role-simulation-framing` ou `delivery/interv360-role-simulation`

Objectif possible :

- afficher un rôle actif simulé ;
- conditionner certaines actions selon le rôle ;
- conserver le caractère démo ;
- ne pas introduire auth réelle.

À confirmer après validation de ce cadrage.

---

## 11. Hors scope confirmé

Ce cadrage n’implémente pas :

- authentification réelle ;
- OAuth ;
- JWT ;
- SSO ;
- annuaire ;
- base users complète ;
- administration utilisateurs ;
- CRM ;
- données réelles ;
- workflow étendu ;
- production.

---

## 12. Décision finale

| Élément | Décision |
|--------|----------|
| Modèle utilisateurs | À cadrer autour des rôles produit |
| Auth réelle immédiate | Non |
| Simulation de rôle | Recommandée comme prochain pas possible |
| OAuth / JWT | Différé |
| Base users complète | Différée |
| Admin users | Différé |
| Workflow extension | Toujours différé |
| CRM / données réelles | Différé |
| Prochaine étape recommandée | Cadrer ou implémenter une simulation de rôle contrôlée |

---

## 13. Décision INC-PROD-02 — Simulation de rôle

Dans le cadre du batch `delivery/interv360-role-simulation`, le comportement suivant est retenu :

| Sujet | Décision |
|------|----------|
| Rôle par défaut | `technician` |
| Rôles simulés | `requester`, `technician`, `manager`, `admin`, `viewer` |
| Auth réelle | Non |
| Stockage | `localStorage` côté frontend |
| Sélection rôle | Sélecteur frontend simple |
| Reset démo | Réservé à `admin` côté frontend |
| Backend | Non modifié |
| API | Conservée |
| Workflow | Conservé |

Cette décision ne constitue pas une sécurité réelle. Elle sert uniquement à démontrer les responsabilités produit avant une éventuelle authentification réelle future.

Document delivery : [`../07-delivery/role-simulation.md`](../07-delivery/role-simulation.md) — §7.1

---

## 14. Statut INC-PROD-03

La simulation de rôle a été implémentée dans le batch `delivery/interv360-role-simulation`.

L’implémentation reste conforme au cadrage :

- simulation frontend uniquement ;
- rôle par défaut `technician` ;
- rôles simulés `requester`, `technician`, `manager`, `admin`, `viewer` ;
- permissions appliquées aux actions existantes ;
- reset démo réservé à `admin` ;
- aucune authentification réelle ;
- aucun OAuth / JWT / SSO ;
- aucun backend modifié ;
- aucune base users complète ;
- aucun workflow étendu.
