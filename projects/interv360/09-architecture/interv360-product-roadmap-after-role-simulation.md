# Interv360 — Product Roadmap After Role Simulation

**Projet** : Interv360  
**Cycle** : Product Roadmap After Role Simulation  
**Mode** : Fast Delivery stratégique  
**Statut** : Décision produit  
**Branche** : `architecture/interv360-product-roadmap-after-role-simulation`

---

## 1. Objectif

Ce document définit le prochain axe produit Interv360 après le merge du batch **Role Simulation**.

L’objectif est d’éviter d’ouvrir directement un chantier structurant sans arbitrage produit préalable.

---

## 2. Point de départ

Interv360 dispose désormais d’un socle démontrable avancé :

- backend SQLite persistant ;
- API `/api/v1` stabilisée ;
- modèle RequestDetail productisé ;
- erreurs API clarifiées ;
- frontend connecté ;
- runbook produit consolidé ;
- simulation de rôle frontend ;
- rôle par défaut `technician` ;
- rôles simulés `requester`, `technician`, `manager`, `admin`, `viewer` ;
- blocage frontend des actions non autorisées ;
- reset démo réservé à `admin`.

La simulation de rôle ne constitue pas une authentification réelle.

Le backend, SQLite, l’API `/api/v1` et le workflow nominal restent inchangés.

Références :

- [`../07-delivery/role-simulation.md`](../07-delivery/role-simulation.md) — §17
- [`interv360-auth-and-user-framing.md`](./interv360-auth-and-user-framing.md)

---

## 3. Problème à résoudre

Après la simulation de rôle, plusieurs directions deviennent possibles :

- approfondir la logique métier du workflow ;
- cadrer une authentification réelle ;
- revoir la simulation avec un retour utilisateur ;
- améliorer l’expérience produit ;
- commencer une industrialisation technique.

Sans arbitrage, le risque est d’enchaîner trop vite sur un gros chantier qui pourrait être prématuré.

---

## 4. Options étudiées

### Option A — Revue fonctionnelle de la simulation de rôle

Objectif :

- rejouer la démonstration ;
- vérifier si les rôles sont compréhensibles ;
- vérifier si le blocage des actions apporte de la valeur ;
- identifier les irritants UX.

Avantages :

- sécurise la pertinence produit ;
- limite le risque de sur-développement ;
- permet de recueillir du feedback avant d’étendre le workflow.

Limites :

- ne livre pas immédiatement une nouvelle capacité métier ;
- dépend d’une revue humaine ou d’un scénario de démo.

---

### Option B — Extension du workflow métier

Objectif :

- enrichir les statuts ou transitions ;
- introduire de nouveaux cas métier ;
- rendre le parcours plus proche d’un vrai cycle d’intervention.

Avantages :

- forte valeur produit potentielle ;
- les rôles simulés permettent maintenant de mieux cadrer les responsabilités ;
- prochaine étape naturelle si la priorité est métier.

Limites :

- risque d’augmenter la complexité ;
- nécessite un cadrage avant implémentation ;
- peut impacter frontend, API, seed, tests et documentation.

---

### Option C — Cadrage auth réelle

Objectif :

- étudier une vraie authentification ;
- choisir une trajectoire technique ;
- préparer OAuth / JWT / SSO ou autre mécanisme.

Avantages :

- rapproche du produit réel ;
- utile si la priorité devient sécurité / multi-utilisateurs réels.

Limites :

- prématuré à ce stade ;
- risque de sur-architecture ;
- implique sécurité, backend, stockage, sessions/tokens, UX login, tests ;
- faible valeur de démonstration immédiate par rapport à la simulation déjà livrée.

---

### Option D — Amélioration UX produit

Objectif :

- rendre l’interface plus lisible ;
- améliorer les panneaux de contrôle ;
- clarifier le parcours demo ;
- réduire les frictions visuelles.

Avantages :

- améliore la démonstration ;
- peut être limité et rapide ;
- valorise les capacités déjà livrées.

Limites :

- risque de polish prématuré ;
- moins structurant que le workflow ;
- doit être guidé par un feedback concret.

---

### Option E — Industrialisation technique

Objectif :

- préparer une architecture plus robuste ;
- envisager packaging, config, CI, déploiement, observabilité.

Avantages :

- prépare une trajectoire produit plus sérieuse.

Limites :

- trop tôt si la cible fonctionnelle continue d’évoluer ;
- peu visible côté démonstration ;
- risque de détourner l’effort du produit.

---

### Option F — Consolidation démo / feedback utilisateur

Objectif :

- organiser une revue produit ;
- produire une grille de feedback ;
- décider ensuite avec retour humain.

Avantages :

- très cohérent avec l’état actuel ;
- permet de ne pas inventer des besoins ;
- limite le risque de construire trop tôt.

Limites :

- dépend d’une disponibilité de revue ;
- ne livre pas une fonctionnalité technique immédiate.

---

## 5. Analyse comparative

| Option | Valeur produit | Risque | Maturité actuelle | Recommandation |
|--------|----------------|--------|-------------------|----------------|
| A — Revue simulation rôle | Élevée | Faible | Bonne | Pertinent |
| B — Workflow extension | Élevée | Moyen | Moyenne | Pertinent après cadrage |
| C — Auth réelle | Moyenne | Élevé | Faible | Différer |
| D — UX produit | Moyenne | Faible | Moyenne | Pertinent si feedback |
| E — Industrialisation | Moyenne | Moyen | Faible | Différer |
| F — Feedback utilisateur | Élevée | Faible | Bonne | Très pertinent |

---

## 6. Décision recommandée

Décision :

> ouvrir une courte phase de **revue produit / feedback simulation rôle** avant d’étendre le workflow ou de cadrer l’auth réelle.

Recommandation :

- ne pas ouvrir immédiatement l’auth réelle ;
- ne pas ouvrir immédiatement l’industrialisation ;
- ne pas étendre le workflow sans retour ou cadrage dédié ;
- utiliser la simulation de rôle comme support de revue ;
- collecter les retours sur :
  - compréhension des rôles ;
  - pertinence des permissions ;
  - lisibilité du blocage des actions ;
  - valeur métier perçue ;
  - priorité entre workflow extension et auth réelle.

---

## 7. Prochaine branche recommandée

Branche recommandée :

`architecture/interv360-role-simulation-review`

Objectif :

- préparer une grille de revue ;
- définir le scénario de feedback ;
- cadrer les questions de décision ;
- décider ensuite si la priorité est :
  - workflow extension ;
  - auth réelle ;
  - amélioration UX ;
  - autre trajectoire.

---

## 8. Hors scope confirmé

Cette décision n’introduit pas :

- code ;
- frontend ;
- backend ;
- SQLite ;
- API ;
- workflow étendu ;
- authentification réelle ;
- OAuth ;
- JWT ;
- SSO ;
- base users ;
- CRM ;
- données réelles ;
- nouveaux statuts ;
- PostgreSQL ;
- ORM lourd ;
- Notion ;
- Controlled Delivery ;
- `sfia-notion-sync` ;
- exports Figma.

---

## 9. Décision finale

| Élément | Décision |
|--------|----------|
| Prochain axe recommandé | Revue produit / feedback simulation rôle |
| Branche suivante recommandée | `architecture/interv360-role-simulation-review` |
| Workflow extension | Différé après revue ou cadrage dédié |
| Auth réelle | Différée |
| Industrialisation | Différée |
| UX produit | À traiter si feedback concret |
| Implémentation immédiate | Non |
| PR dédiée | À décider après réflexion SFIA |

---

## 10. Préparation PR

### Titre proposé

`Define Interv360 roadmap after role simulation`

### Description proposée

```markdown
## Summary
This PR defines the next Interv360 product roadmap decision after the Role Simulation batch.
The current product baseline now includes:
- persistent SQLite backend;
- stabilized `/api/v1`;
- productized request detail model;
- clarified API validation errors;
- connected frontend;
- consolidated demo runbook;
- frontend-only simulated roles;
- unauthorized action blocking on the frontend;
- demo reset reserved to `admin`.
## Decision
The recommended next axis is:
> open a short **product review / role simulation feedback** cycle before extending the workflow or framing real authentication.
Recommended next branch:
`architecture/interv360-role-simulation-review`
## Rationale
- The role simulation is now delivered and documented.
- The next large options — workflow extension, real auth, UX refinement, industrialization — should not be opened without product feedback.
- A review cycle can validate whether roles, permissions, unauthorized action feedback and demo value are understandable.
- Real authentication and industrialization remain premature.
- Workflow extension remains relevant, but only after review or dedicated framing.
## Guardrails
No code, frontend, backend, SQLite, API, workflow extension, real authentication, OAuth, JWT, SSO, user database, CRM integration, real data, new workflow status, PostgreSQL, heavy ORM, Notion publication, Controlled Delivery change, sfia-notion-sync update, or Figma export was introduced.
```

---

## 11. Statut push / PR

À compléter après push.

| Élément | Valeur |
|---------|--------|
| Push | `<OK / KO>` |
| PR créée automatiquement | `<Oui / Non>` |
| URL PR ou comparaison | `<url>` |
| Cible | `main` |
| Source | `architecture/interv360-product-roadmap-after-role-simulation` |
| Merge automatique | Non |
