# Interv360 — Role Simulation Review

**Projet** : Interv360  
**Cycle** : Role Simulation Review  
**Mode** : Fast Delivery stratégique / revue produit  
**Statut** : Cadrage revue produit  
**Branche** : `architecture/interv360-role-simulation-review`

---

## 1. Objectif

Ce document prépare la revue produit de la simulation de rôle Interv360.

L’objectif est de recueillir un feedback structuré avant d’ouvrir un chantier plus engageant, notamment :

- extension du workflow métier ;
- authentification réelle ;
- amélioration UX produit ;
- industrialisation technique ;
- consolidation de la démonstration.

---

## 2. Point de départ

La roadmap après Role Simulation recommande une courte phase de **revue produit / feedback simulation rôle** avant tout chantier structurant.

Référence :

[`interv360-product-roadmap-after-role-simulation.md`](./interv360-product-roadmap-after-role-simulation.md)

Documents associés :

- [`../07-delivery/role-simulation.md`](../07-delivery/role-simulation.md)
- [`interv360-auth-and-user-framing.md`](./interv360-auth-and-user-framing.md)
- [`../08-presentation/interv360-e2e-demo-runbook.md`](../08-presentation/interv360-e2e-demo-runbook.md)

Le produit dispose désormais :

- d’un backend SQLite persistant ;
- d’une API `/api/v1` stabilisée ;
- d’un modèle RequestDetail productisé ;
- d’erreurs API clarifiées ;
- d’un frontend connecté ;
- d’un runbook produit consolidé ;
- d’une simulation de rôle frontend ;
- d’un rôle par défaut `technician` ;
- des rôles `requester`, `technician`, `manager`, `admin`, `viewer` ;
- du blocage frontend des actions non autorisées ;
- d’un reset démo réservé à `admin`.

La simulation ne constitue pas une authentification réelle.

---

## 3. Questions de revue

La revue doit répondre aux questions suivantes :

1. Les rôles sont-ils compréhensibles ?
2. Les libellés sont-ils adaptés ?
3. La matrice de permissions est-elle crédible ?
4. Le blocage des actions non autorisées est-il clair ?
5. Le reset réservé à `admin` est-il logique ?
6. La simulation apporte-t-elle une valeur de démonstration ?
7. La simulation suffit-elle pour continuer sans auth réelle ?
8. Le prochain chantier doit-il porter sur le workflow métier ?
9. Une auth réelle devient-elle nécessaire maintenant ?
10. Y a-t-il un irritant UX prioritaire à corriger avant la suite ?

---

## 4. Scénario de revue recommandé

### Étape 1 — Présenter le contexte

Présenter le produit comme un prototype avancé, non sécurisé en production.

Message clé :

> Interv360 simule désormais des rôles pour montrer les responsabilités métier, mais ne fournit pas encore d’authentification réelle.

---

### Étape 2 — Montrer le rôle par défaut

Vérifier au lancement :

- rôle actif visible ;
- rôle par défaut `technician` ;
- mention `Simulation — aucune authentification réelle`.

Question à poser :

> Le rôle simulé est-il compréhensible dès l’ouverture de l’application ?

---

### Étape 3 — Montrer le workflow avec `technician`

Avec le rôle `technician` :

- ouvrir une demande ;
- qualifier ;
- planifier ;
- clôturer intervention ;
- clôturer rapport.

Questions à poser :

- Le rôle technicien est-il crédible ?
- Les actions autorisées sont-elles logiques ?
- Le parcours est-il lisible ?

---

### Étape 4 — Montrer le blocage avec `viewer`

Passer au rôle `viewer`.

Vérifier :

- les actions sont bloquées ;
- le message est clair ;
- aucun changement d’état n’est effectué.

Question à poser :

> Le blocage est-il compréhensible ou frustrant ?

---

### Étape 5 — Montrer le cas `requester`

Passer au rôle `requester`.

Vérifier :

- lecture possible ;
- transition impossible ;
- message non autorisé.

Question à poser :

> Le demandeur doit-il uniquement suivre la demande ou aussi créer / compléter des informations ?

---

### Étape 6 — Montrer le reset avec `admin`

Passer au rôle `admin`.

Vérifier :

- reset autorisé ;
- rôle conservé après reset ;
- workflow réinitialisé.

Questions à poser :

- Le reset réservé à admin est-il cohérent ?
- Le rôle admin est-il utile dans la démonstration ?

---

## 5. Grille de feedback

| Sujet | Question | Réponse / notes | Décision potentielle |
|------|----------|-----------------|----------------------|
| Rôles | Les rôles sont-ils compréhensibles ? |  | Renommer / simplifier |
| Libellés | Les noms des rôles sont-ils adaptés ? |  | Adapter UI |
| Permissions | Les actions autorisées sont-elles crédibles ? |  | Modifier matrice |
| Blocage | Le message d’action non autorisée est-il clair ? |  | Améliorer UX |
| Reset | Le reset réservé à admin est-il logique ? |  | Confirmer / ajuster |
| Démo | La simulation apporte-t-elle une valeur de démonstration ? |  | Conserver / réduire |
| Workflow | Le workflow actuel suffit-il ? |  | Cadrer extension |
| Auth réelle | Une auth réelle est-elle nécessaire maintenant ? |  | Cadrer auth réelle |
| UX | Un irritant UX bloque-t-il la compréhension ? |  | Ouvrir polish ciblé |
| Suite | Quelle priorité après revue ? |  | Roadmap suivante |

---

## 6. Critères de décision après revue

### Cas A — Les rôles sont compris et le workflow paraît trop simple

Décision probable :

`architecture/interv360-workflow-extension-framing`

Raison :

- les responsabilités sont validées ;
- le prochain gain produit vient du cycle métier.

---

### Cas B — Les rôles sont compris mais la simulation semble artificielle

Décision probable :

`architecture/interv360-auth-real-framing`

Raison :

- l’enjeu devient la crédibilité multi-utilisateurs réelle ;
- auth réelle à cadrer avant code.

---

### Cas C — Les rôles ou permissions ne sont pas compris

Décision probable :

`delivery/interv360-role-simulation-polish`

Raison :

- il faut corriger la compréhension avant d’étendre le produit.

---

### Cas D — Aucun retour humain disponible

Décision probable :

`architecture/interv360-workflow-extension-framing`

Raison :

- faute de feedback, le workflow extension reste l’axe produit le plus concret ;
- mais le cadrage devra rester strictement limité.

---

## 7. Livrable attendu de la revue

Après revue, produire une synthèse courte :

- contexte de revue ;
- personnes ou profils consultés ;
- points compris ;
- irritants identifiés ;
- décisions à conserver ;
- décisions à ajuster ;
- prochain axe recommandé.

---

## 8. Hors scope confirmé

Ce cycle n’introduit pas :

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

## 9. Décision finale du cadrage de revue

| Élément | Décision |
|--------|----------|
| Type de cycle | Revue produit / feedback |
| Code | Non |
| Support principal | Simulation de rôle existante |
| Grille de feedback | Oui |
| Scénario de revue | Oui |
| Prochaine décision | À prendre après feedback |
| Workflow extension | Possible après revue |
| Auth réelle | Possible mais non prioritaire sans signal fort |
| UX polish | Possible si irritant concret |
| Industrialisation | Différée |

---

## 10. Préparation PR

### Titre proposé

`Prepare Interv360 role simulation review`

### Description proposée

```markdown
## Summary
This PR prepares the Interv360 role simulation product review.
It adds a review document with:
- review objectives;
- product starting point after the Role Simulation batch;
- review questions;
- a 6-step review scenario;
- a feedback grid;
- decision criteria after review;
- expected review output;
- explicit guardrails.
## Review scope
The review focuses on validating whether:
- simulated roles are understandable;
- role labels are appropriate;
- the permissions matrix is credible;
- unauthorized action blocking is clear;
- the `admin`-only demo reset is logical;
- the simulation brings demonstration value;
- the next axis should be workflow extension, real auth, UX polish, or another trajectory.
## Decision after review
The review should help decide between:
- `architecture/interv360-workflow-extension-framing`;
- `architecture/interv360-auth-real-framing`;
- `delivery/interv360-role-simulation-polish`;
- another roadmap decision if feedback is inconclusive.
## Guardrails
No code, frontend, backend, SQLite, API, workflow extension, real authentication, OAuth, JWT, SSO, user database, CRM integration, real data, new workflow status, PostgreSQL, heavy ORM, Notion publication, Controlled Delivery change, sfia-notion-sync update, or Figma export was introduced.
```

---

## 11. Statut push / PR

| Élément | Valeur |
|---------|--------|
| Push | OK |
| PR créée automatiquement | Non (`gh` indisponible) |
| URL PR ou comparaison | https://github.com/mcleland147/sfia-workspace/compare/main...architecture/interv360-role-simulation-review?expand=1 |
| Cible | `main` |
| Source | `architecture/interv360-role-simulation-review` |
| Merge automatique | Non |

---

## 12. Statut merge

| Élément | Valeur |
|--------|--------|
| PR | [#60](https://github.com/mcleland147/sfia-workspace/pull/60) |
| Source | `architecture/interv360-role-simulation-review` |
| Cible | `main` |
| Méthode | `Merge commit (GitHub PR merge)` |
| Commit merge | `6ca5142` |
| Main synchronisée | OK |
| Outil de revue | OK |
| Scénario de revue | OK — 6 étapes |
| Grille de feedback | OK — 10 sujets |
| Critères de décision | OK — Cas A à D |
| Feedback humain exécuté | Non — à réaliser après merge |
| Synthèse feedback produite | Non — à produire après revue |
| Implémentation immédiate | Non |
| Code modifié | Non |
| Frontend modifié | Non |
| Backend modifié | Non |
| SQLite modifiée | Non |
| API modifiée | Non |
| Workflow modifié | Non |
| Auth réelle introduite | Non |
| OAuth introduit | Non |
| JWT introduit | Non |
| SSO introduit | Non |
| Base users introduite | Non |
| CRM introduit | Non |
| Données réelles introduites | Non |
| Nouveaux statuts introduits | Non |
| PostgreSQL introduit | Non |
| ORM lourd introduit | Non |
| Publication Notion | Non |
| Controlled Delivery modifié | Non |
| sfia-notion-sync modifié | Non |
| Exports Figma ajoutés | Non |

### Décision post-merge

Le document **Role Simulation Review** est mergé dans `main`.

Il constitue l’outil de revue produit à utiliser pour exécuter le feedback humain sur la simulation de rôle.

La prochaine étape recommandée n’est pas un chantier technique immédiat, mais l’exécution de la revue à partir de :

- scénario de revue §4 ;
- grille de feedback §5 ;
- critères de décision §6 ;
- livrable attendu §7.

Le feedback humain n’a pas encore été exécuté dans ce cycle.

Après revue, une synthèse courte devra permettre de décider entre :

- `architecture/interv360-workflow-extension-framing` ;
- `architecture/interv360-auth-real-framing` ;
- `delivery/interv360-role-simulation-polish` ;
- autre décision roadmap si les retours sont insuffisants ou contradictoires.

Aucun code, frontend, backend, API, workflow, auth réelle, CRM ou donnée réelle n’a été introduit.

Aucun document de merge séparé n’a été créé afin de respecter le mode Fast Delivery stratégique.

---

## 13. Synthèse de revue exécutée

### Contexte

La revue produit de la simulation de rôle a été exécutée le **2 juillet 2026** sur :

`http://localhost:5173/`

Mode utilisé :

- mode local ;
- scénario de revue basé sur les sections §4 à §7 du présent document ;
- profil relecteur : facilitateur produit / démo technique ;
- pas encore de panel métier terrain externe.

Objectif :

> vérifier si la simulation de rôle aide à comprendre les responsabilités métier sans introduire d’authentification réelle.

### Observations principales

| Sujet | Observation |
|------|-------------|
| Principe de simulation | Clair dès l’ouverture grâce au bandeau `Rôle simulé : …` et à la mention `Simulation — aucune authentification réelle`. |
| Rôle `technician` | Crédible et lisible pour exécuter le workflow nominal. |
| Rôle `viewer` | Lecture OK ; actions bloquées ; message explicite ; aucun changement d’état. |
| Rôle `requester` | Compréhensible en lecture seule, mais la création de demande n’existe pas encore. |
| Rôle `admin` | Reset autorisé ; rôle conservé après reset. |
| Point d’attention démo | Le rôle persisté en `localStorage` peut surprendre au premier chargement. |
| Irritant mineur | Double message de blocage légèrement redondant. |
| Écart mineur | Le readiness panel mentionne encore l’authentification multi-utilisateur en hors périmètre alors qu’une simulation existe. |

### Grille de feedback synthétique

| Sujet | Feedback |
|------|----------|
| Rôles compréhensibles | Oui |
| Libellés adaptés | Oui |
| Permissions crédibles | Oui globalement |
| Blocage clair | Oui, avec légère redondance |
| Reset admin logique | Oui |
| Valeur de démonstration | Oui |
| Workflow suffisant | Non, trop simple pour l’ambition produit |
| Auth réelle nécessaire maintenant | Non |
| Irritant UX prioritaire | Non, irritants mineurs |
| Prochain axe recommandé | `architecture/interv360-workflow-extension-framing` |

### Décision après revue

Cas retenu :

| Cas | Signal observé | Suite |
|----|----------------|-------|
| A | Rôles compris ; workflow perçu comme trop simple | `architecture/interv360-workflow-extension-framing` |

Cas non retenus :

- auth réelle : différée ;
- polish rôles : différé ;
- roadmap supplémentaire : inutile à ce stade.

### Décision finale

La simulation de rôle remplit son objectif.

Le frein produit principal n’est plus la compréhension des rôles, mais la **richesse du cycle métier**.

Décision :

> ouvrir directement le cadrage `architecture/interv360-workflow-extension-framing`.

Cette synthèse est volontairement intégrée au cycle workflow extension afin d’éviter une PR documentaire intermédiaire.

Document de cadrage : [`interv360-workflow-extension-framing.md`](./interv360-workflow-extension-framing.md)
