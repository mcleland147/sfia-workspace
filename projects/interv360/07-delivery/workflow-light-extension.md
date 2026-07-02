# Interv360 — Workflow Light Extension

**Projet** : Interv360  
**Cycle** : Workflow Light Extension  
**Mode** : SFIA Fast Track — Batch Delivery produit contrôlé  
**Statut** : Batch produit — INC-WF-05 réalisé  
**Branche** : `delivery/interv360-workflow-light-extension`

---

## 1. Objectif

Ce batch vise à implémenter une extension légère du workflow Interv360.

L’objectif est d’enrichir le cycle métier sans refondre le produit.

Le batch doit rester rapide, démontrable et contrôlé.

---

## 2. Point de départ

Le cadrage workflow extension a été réalisé dans :

[`../09-architecture/interv360-workflow-extension-framing.md`](../09-architecture/interv360-workflow-extension-framing.md)

Décision retenue :

- extension légère du workflow ;
- pas de refonte complète ;
- pas de moteur workflow ;
- pas d’auth réelle ;
- pas de nouveau contrat API ;
- pas de nouvelle table SQLite ;
- conservation des rôles simulés.

Référence revue rôle : [`../09-architecture/interv360-role-simulation-review.md`](../09-architecture/interv360-role-simulation-review.md) — §13

---

## 3. Périmètre retenu

### Statuts ajoutés

| Statut | Libellé | Décision |
|--------|---------|----------|
| `STAT-05` | En attente | Retenu |
| `STAT-07` | Annulée | Retenu |

### Statuts différés

| Statut | Libellé | Décision |
|--------|---------|----------|
| `STAT-08` | Requalifiée / à requalifier | Différé |
| `STAT-09` | Reprise / reprise en cours | Non retenu |

---

## 4. Transitions retenues

| Action | Depuis | Vers | Rôles autorisés |
|--------|--------|------|-----------------|
| `put_on_hold` | `STAT-03` | `STAT-05` | `technician`, `manager`, `admin` |
| `resume` | `STAT-05` | `STAT-03` | `technician`, `manager`, `admin` |
| `cancel` | `STAT-01`, `STAT-02`, `STAT-03`, `STAT-05` | `STAT-07` | `manager`, `admin` |

Règles :

- `STAT-06` reste terminal ;
- `STAT-07` devient terminal ;
- pas de mise en attente après `STAT-04` ;
- pas d’annulation après `STAT-04` ;
- pas de mémoire d’état précédente ;
- `resume` revient toujours vers `STAT-03`.

---

## 5. Hors scope

Le batch n’introduit pas :

- authentification réelle ;
- OAuth ;
- JWT ;
- SSO ;
- base users ;
- CRM ;
- données réelles ;
- moteur BPMN ;
- moteur workflow externe ;
- nouvelle table SQLite ;
- nouveau contrat API ;
- workflow complet multi-branches ;
- requalification ;
- affectation technicien réelle ;
- création de demande par demandeur ;
- SLA avancés ;
- escalade complète.

---

## 6. Impacts attendus

### Backend

- ajouter `STAT-05` et `STAT-07` ;
- ajouter les actions `put_on_hold`, `resume`, `cancel` ;
- adapter la validation des transitions ;
- adapter les tests API ;
- adapter éventuellement la seed démo.

### Frontend

- afficher les nouveaux statuts ;
- afficher les nouvelles actions selon statut ;
- appliquer les permissions simulées ;
- adapter les tests ;
- adapter le runbook.

### API

Le contrat reste :

`POST /api/v1/requests/:id/transitions`

Seules les valeurs d’action évoluent.

### SQLite

Aucune nouvelle table prévue.

---

## 7. Incréments prévus

| Incrément | Objectif | Statut |
|----------|----------|--------|
| INC-WF-01 | Confirmer le périmètre statuts/transitions | Réalisé |
| INC-WF-02 | Implémenter statuts/actions backend | Réalisé |
| INC-WF-03 | Exposer actions frontend | Réalisé |
| INC-WF-04 | Adapter rôles simulés, tests et runbook | Réalisé |
| INC-WF-05 | Préparer PR unique du batch | Réalisé |

---

## 8. Critères d’acceptation

| Critère | Résultat |
|---------|----------|
| `STAT-05 En attente` défini | OK |
| `STAT-07 Annulée` défini | OK |
| `put_on_hold` défini | OK |
| `resume` défini | OK |
| `cancel` défini | OK |
| Requalification différée | OK |
| API contract conservé | OK |
| SQLite sans nouvelle table | OK |
| Backend testé | OK |
| Frontend testé | OK |
| Runbook mis à jour | OK |
| Auth réelle exclue | OK |
| CRM / données réelles exclus | OK |

---

## 9. Décisions INC-WF-01

- le cadrage workflow extension est intégré au batch ;
- le batch retient uniquement `STAT-05` et `STAT-07` ;
- `put_on_hold` part de `STAT-03` vers `STAT-05` ;
- `resume` part de `STAT-05` vers `STAT-03` ;
- `cancel` part de `STAT-01`, `STAT-02`, `STAT-03`, `STAT-05` vers `STAT-07` ;
- `STAT-06` et `STAT-07` sont terminaux ;
- pas de requalification dans ce batch ;
- pas de nouvelle table SQLite ;
- pas de nouveau endpoint API ;
- pas de moteur workflow.

---

## 9.1. Changements INC-WF-02

INC-WF-02 implémente côté backend l’extension légère du workflow.

Changements réalisés :

- ajout du statut `STAT-05 — En attente` ;
- ajout du statut `STAT-07 — Annulée` ;
- ajout de l’action `put_on_hold` ;
- ajout de l’action `resume` ;
- ajout de l’action `cancel` ;
- validation des transitions retenues ;
- conservation du contrat `POST /api/v1/requests/:id/transitions` ;
- conservation de SQLite sans nouvelle table ;
- tests backend ajoutés.

Règles confirmées :

- `STAT-06` reste terminal ;
- `STAT-07` est terminal ;
- `put_on_hold` est autorisé uniquement depuis `STAT-03` ;
- `resume` est autorisé uniquement depuis `STAT-05` ;
- `cancel` est autorisé depuis `STAT-01`, `STAT-02`, `STAT-03`, `STAT-05` ;
- `cancel` est interdit depuis `STAT-04` ;
- aucune requalification n’est introduite.

---

## 9.2. Changements INC-WF-03

INC-WF-03 expose côté frontend les nouveaux statuts et les nouvelles actions workflow.

Changements réalisés :

- ajout des libellés frontend `STAT-05 — En attente` et `STAT-07 — Annulée` ;
- exposition de l’action `put_on_hold` avec le libellé `Mettre en attente` ;
- exposition de l’action `resume` avec le libellé `Reprendre` ;
- exposition de l’action `cancel` avec le libellé `Annuler la demande` ;
- affichage de plusieurs actions quand le statut le permet ;
- alignement du mode local sur les transitions backend ;
- conservation du mode API via le contrat existant ;
- tests frontend adaptés.

Règles frontend confirmées :

| Statut courant | Actions proposées |
|----------------|------------------|
| `STAT-01` | `qualify`, `cancel` |
| `STAT-02` | `plan`, `cancel` |
| `STAT-03` | `complete_intervention`, `put_on_hold`, `cancel` |
| `STAT-04` | `close_report` |
| `STAT-05` | `resume`, `cancel` |
| `STAT-06` | aucune |
| `STAT-07` | aucune |

Les actions nominales existantes (`complete_intervention`, `close_report`) sont conservées.

---

## 9.3. Changements INC-WF-04

INC-WF-04 finalise l’extension légère du workflow côté démonstration.

Changements réalisés :

- alignement des permissions simulées avec les nouvelles actions ;
- confirmation que `technician` peut `put_on_hold` et `resume` ;
- confirmation que `technician` ne peut pas `cancel` ;
- confirmation que `manager` et `admin` peuvent `cancel` ;
- confirmation que `requester` et `viewer` restent lecture seule pour les actions workflow ;
- tests frontend renforcés ;
- runbook mis à jour avec les scénarios hold / resume / cancel ;
- README frontend mis à jour ;
- backend conservé sans modification supplémentaire.

Matrice finale des permissions workflow simulées :

| Action | requester | technician | manager | admin | viewer |
|--------|-----------|------------|---------|-------|--------|
| `qualify` | Non | Oui | Oui | Oui | Non |
| `plan` | Non | Oui | Oui | Oui | Non |
| `complete_intervention` | Non | Oui | Oui | Oui | Non |
| `close_report` | Non | Oui | Oui | Oui | Non |
| `put_on_hold` | Non | Oui | Oui | Oui | Non |
| `resume` | Non | Oui | Oui | Oui | Non |
| `cancel` | Non | Non | Oui | Oui | Non |
| `demo_reset` | Non | Non | Non | Oui | Non |

---

## 10. Validations

| Contrôle | Résultat |
|----------|----------|
| Backend build | OK |
| Backend tests | OK — 54 tests |
| Frontend build | OK |
| Frontend tests | OK — 113 tests |
| Validation navigateur local | Non exécutée — validation automatisée OK |
| Validation navigateur API | Non exécutée — validation automatisée OK |

---

## 11. Prochaine étape

Merger la PR unique du batch après revue.

---

## 12. Synthèse avant PR

Le batch **Workflow Light Extension** est fonctionnellement prêt.

Capacités ajoutées :

- mise en attente d’une demande ;
- reprise d’une demande en attente ;
- annulation d’une demande ;
- deux nouveaux statuts métier : `STAT-05 En attente`, `STAT-07 Annulée` ;
- permissions simulées alignées ;
- contrat API conservé ;
- SQLite conservée sans nouvelle table ;
- runbook mis à jour.

La PR unique du batch est préparée sur `delivery/interv360-workflow-light-extension`.

---

## 13. Préparation PR intégrée

### Titre proposé

`Add Interv360 workflow light extension`

### Description proposée

```markdown
## Summary
This PR adds a controlled workflow light extension to Interv360.
It keeps the existing API contract and SQLite persistence model while adding two new workflow statuses and three new transition actions.

## What changed
### Product framing
- integrated the role simulation review feedback;
- confirmed that the next product bottleneck is workflow richness, not authentication;
- framed a light workflow extension instead of a full workflow redesign.

### Backend
- added `STAT-05 — En attente`;
- added `STAT-07 — Annulée`;
- added transition actions:
  - `put_on_hold`;
  - `resume`;
  - `cancel`;
- preserved the existing API endpoint:
  `POST /api/v1/requests/:id/transitions`
- kept SQLite without a new table;
- added backend tests for valid and invalid transitions, API behavior, and persistence.

### Frontend
- exposed `STAT-05` and `STAT-07`;
- exposed workflow actions:
  - `Mettre en attente`;
  - `Reprendre`;
  - `Annuler la demande`;
- supports multiple actions per status;
- aligns local mode with backend transition rules;
- keeps API opt-in mode on the existing contract.

### Role simulation
- aligned simulated permissions:
  - `technician` can put on hold and resume;
  - `technician` cannot cancel;
  - `manager` and `admin` can cancel;
  - `requester` and `viewer` remain read-only for workflow actions;
- preserved the existing unauthorized action message.

### Documentation
- updated the workflow light extension delivery document;
- updated the E2E runbook with hold/resume/cancel scenarios;
- updated the frontend README.

## Validation
- Backend build: OK
- Backend tests: 54 passed
- Frontend build: OK
- Frontend tests: 113 passed

## Guardrails
No real authentication, OAuth, JWT, SSO, backend user database, CRM integration, real data, workflow engine, BPMN engine, new API endpoint, new SQLite table, PostgreSQL, heavy ORM, Notion publication, Controlled Delivery change, sfia-notion-sync update, or Figma export was introduced.
Requalification remains deferred.
Only `STAT-05` and `STAT-07` are introduced in this batch.
```

---

## 14. Statut push / PR

| Élément | Valeur |
|---------|--------|
| Push | OK |
| PR créée automatiquement | Non (`gh` indisponible) |
| URL PR ou comparaison | https://github.com/mcleland147/sfia-workspace/compare/main...delivery/interv360-workflow-light-extension?expand=1 |
| Cible | `main` |
| Source | `delivery/interv360-workflow-light-extension` |
| Merge automatique | Non |

**Titre proposé :** `Add Interv360 workflow light extension`

**Corps PR :** voir §13 ou `/tmp/workflow-light-extension-pr-body.md`

---

## 15. Statut merge

| Élément | Valeur |
|--------|--------|
| PR | [#61](https://github.com/mcleland147/sfia-workspace/pull/61) — Add Interv360 workflow light extension |
| Source | `delivery/interv360-workflow-light-extension` |
| Cible | `main` |
| Méthode | Merge commit (GitHub PR merge) |
| Commit merge | `2a21541` |
| Main synchronisée | OK |
| Backend build post-merge | OK |
| Backend tests post-merge | OK — 54 tests |
| Frontend build post-merge | OK |
| Frontend tests post-merge | OK — 113 tests |
| INC-WF-01 | OK — cadrage intégré |
| INC-WF-02 | OK — backend statuts/actions |
| INC-WF-03 | OK — frontend actions exposées |
| INC-WF-04 | OK — permissions/runbook/tests |
| INC-WF-05 | OK — PR unique préparée |
| `STAT-05 En attente` | OK |
| `STAT-07 Annulée` | OK |
| `put_on_hold` | OK |
| `resume` | OK |
| `cancel` | OK |
| API contract conservé | OK |
| SQLite sans nouvelle table | OK |
| Auth réelle introduite | Non |
| OAuth / JWT / SSO introduits | Non |
| Base users introduite | Non |
| CRM introduit | Non |
| Données réelles introduites | Non |
| Requalification introduite | Non |
| Nouveaux statuts au-delà de `STAT-05` / `STAT-07` | Non |
| Controlled Delivery modifié | Non |
| sfia-notion-sync modifié | Non |
| Exports Figma ajoutés | Non |

### Décision post-merge

Le batch **Workflow Light Extension** est mergé dans `main`.

Interv360 dispose désormais d’une extension légère du workflow :

- `STAT-05 — En attente` ;
- `STAT-07 — Annulée` ;
- action `put_on_hold` ;
- action `resume` ;
- action `cancel` ;
- permissions simulées alignées ;
- contrat API conservé ;
- SQLite conservée sans nouvelle table ;
- runbook mis à jour.

Aucun document de merge séparé n’a été créé afin de respecter le mode SFIA Fast Track.

---

## 16. Validation démo post-merge

La démonstration navigateur du batch **Workflow Light Extension** a été réalisée après merge.

Scénarios vérifiés :

| Scénario | Résultat |
|----------|----------|
| `hold` — mettre une demande en attente | OK |
| `resume` — reprendre une demande en attente | OK |
| `cancel` — annuler une demande avec rôle autorisé | OK |
| Blocage `cancel` pour `technician` | OK |
| Permissions simulées `manager` / `admin` | OK |
| Rôles `requester` / `viewer` en lecture seule | OK |

Conclusion :

> le batch Workflow Light Extension est validé côté démonstration et peut servir de socle au prochain enrichissement métier.

Prochain axe retenu :

`delivery/interv360-workflow-requalification`
