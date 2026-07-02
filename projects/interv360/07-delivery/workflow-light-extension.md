# Interv360 — Workflow Light Extension

**Projet** : Interv360  
**Cycle** : Workflow Light Extension  
**Mode** : SFIA Fast Track — Batch Delivery produit contrôlé  
**Statut** : Batch produit — INC-WF-02 réalisé  
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
| INC-WF-03 | Exposer actions frontend | À faire |
| INC-WF-04 | Adapter rôles simulés, tests et runbook | À faire |
| INC-WF-05 | Préparer PR unique du batch | À venir |

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
| Frontend testé | À faire |
| Runbook mis à jour | À faire |
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

## 10. Validations

À compléter pendant le batch.

| Contrôle | Résultat |
|----------|----------|
| Backend build | OK |
| Backend tests | OK |
| Frontend build | OK |
| Frontend tests | OK |
| Validation navigateur local | non exécutée |
| Validation navigateur API | non exécutée |

---

## 11. Prochaine étape

**INC-WF-03** : exposer les nouvelles actions côté frontend, sans changer le contrat API.
