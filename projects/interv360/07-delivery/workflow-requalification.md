# Interv360 — Workflow Requalification

**Projet** : Interv360  
**Cycle** : Workflow Requalification  
**Mode** : SFIA Fast Track — Batch Delivery produit contrôlé  
**Statut** : Batch produit — INC-RQ-02 réalisé  
**Branche** : `delivery/interv360-workflow-requalification`

---

## 1. Objectif

Ce batch vise à enrichir le workflow Interv360 avec un mécanisme de **requalification légère**.

L’objectif est d’ajouter un cas métier utile après la mise en attente, la reprise et l’annulation, sans refondre tout le workflow.

---

## 2. Point de départ

Le batch précédent **Workflow Light Extension** a ajouté :

- `STAT-05 — En attente` ;
- `STAT-07 — Annulée` ;
- `put_on_hold` ;
- `resume` ;
- `cancel` ;
- permissions simulées alignées ;
- contrat API conservé ;
- SQLite sans nouvelle table.

Référence : [`workflow-light-extension.md`](./workflow-light-extension.md) — §16

La démo post-merge a été réalisée et validée.

---

## 3. Problème métier

Le workflow permet désormais :

- de qualifier ;
- de planifier ;
- de traiter ;
- de mettre en attente ;
- de reprendre ;
- d’annuler ;
- de clôturer.

Il manque encore un cas métier fréquent :

> revenir sur la qualification ou corriger l’orientation d’une demande avant poursuite du traitement.

---

## 4. Options de requalification

### Option A — Requalification simple sans nouveau statut

Principe :

- ajouter une action `requalify` ;
- ramener la demande vers un statut existant ;
- ne pas ajouter `STAT-08`.

Mapping possible :

| Action | Depuis | Vers |
|--------|--------|------|
| `requalify` | `STAT-02`, `STAT-03`, `STAT-05` | `STAT-02` |

Avantages :

- simple ;
- rapide ;
- pas de nouveau statut ;
- pas de nouvelle table ;
- API conservée.

Limites :

- moins explicite visuellement ;
- l’historique porte l’information de requalification, mais le statut final reste `STAT-02`.

### Option B — Requalification avec `STAT-08`

Principe :

- ajouter `STAT-08 — À requalifier` ;
- ajouter une action `requalify` vers `STAT-08` ;
- ajouter ensuite une action de sortie vers `STAT-02` ou `STAT-03`.

Avantages :

- plus lisible métier ;
- statut dédié ;
- meilleure démonstration du cas.

Limites :

- plus de complexité ;
- nécessite au moins deux transitions ;
- plus d’impacts frontend/tests/runbook ;
- peut être trop large pour un batch rapide.

### Option C — Différer la requalification

Principe :

- ne rien ajouter maintenant ;
- passer à un autre sujet produit.

Avantages :

- évite complexité.

Limites :

- ne répond pas à l’enrichissement métier attendu ;
- laisse un manque évident dans le workflow.

---

## 5. Décision recommandée INC-RQ-01

Décision recommandée :

> retenir une requalification simple, sans nouveau statut dans un premier temps.

Périmètre recommandé :

| Élément | Décision |
|--------|----------|
| Action `requalify` | Retenue |
| Nouveau statut `STAT-08` | Différé |
| Retour vers `STAT-02` | Retenu |
| Nouvelle table SQLite | Non |
| Nouveau endpoint API | Non |
| Moteur workflow | Non |
| Refonte workflow | Non |

Mapping recommandé :

| Action | Depuis | Vers | Rôles autorisés |
|--------|--------|------|-----------------|
| `requalify` | `STAT-02`, `STAT-03`, `STAT-05` | `STAT-02` | `technician`, `manager`, `admin` |

Règles :

- pas de requalification depuis `STAT-01` ;
- pas de requalification depuis `STAT-04` ;
- pas de requalification depuis `STAT-06` ;
- pas de requalification depuis `STAT-07` ;
- `STAT-06` et `STAT-07` restent terminaux ;
- l’information de requalification doit apparaître dans le journal des événements.

Justification :

- livraison rapide ;
- logique métier démontrable ;
- complexité limitée ;
- pas de nouveau statut à exposer ;
- cohérent avec le mode Fast Track.

---

## 6. Hors scope

Le batch n’introduit pas :

- `STAT-08` ;
- nouveau statut dédié ;
- nouvelle table SQLite ;
- nouveau contrat API ;
- moteur workflow ;
- BPMN ;
- auth réelle ;
- OAuth ;
- JWT ;
- SSO ;
- base users ;
- CRM ;
- données réelles ;
- affectation technicien réelle ;
- création de demande par demandeur ;
- SLA avancés ;
- escalade complète.

---

## 7. Impacts attendus

### Backend

- ajouter l’action `requalify` ;
- valider les transitions autorisées ;
- créer un événement workflow dédié, par exemple `request.requalified` ;
- adapter les tests API / transition / persistence.

### Frontend

- exposer l’action `Requalifier` ;
- afficher l’action depuis les statuts autorisés ;
- appliquer les permissions simulées ;
- adapter les tests.

### API

Contrat conservé :

`POST /api/v1/requests/:id/transitions`

### SQLite

Aucune nouvelle table.

---

## 8. Incréments prévus

| Incrément | Objectif | Statut |
|----------|----------|--------|
| INC-RQ-01 | Cadrer le périmètre requalification | Réalisé |
| INC-RQ-02 | Implémenter l’action backend `requalify` | Réalisé |
| INC-RQ-03 | Exposer `Requalifier` côté frontend | À faire |
| INC-RQ-04 | Tests, permissions et runbook | À faire |
| INC-RQ-05 | Préparer PR unique | À venir |

---

## 9. Critères d’acceptation

| Critère | Résultat |
|---------|----------|
| Action `requalify` définie | OK |
| `STAT-08` différé | OK |
| Retour vers `STAT-02` défini | OK |
| API contract conservé | OK |
| SQLite sans nouvelle table | OK |
| Backend testé | OK |
| Frontend testé | À faire |
| Runbook mis à jour | À faire |
| Auth réelle exclue | OK |
| CRM / données réelles exclus | OK |

---

## 9.1. Changements INC-RQ-02

INC-RQ-02 implémente côté backend l’action `requalify`.

Changements réalisés :

- ajout de l’action `requalify` ;
- ajout de l’événement journal `request.requalified` ;
- validation des transitions retenues ;
- conservation du contrat `POST /api/v1/requests/:id/transitions` ;
- conservation de SQLite sans nouvelle table ;
- tests backend ajoutés.

Règles confirmées :

| Action | Depuis | Vers |
|--------|--------|------|
| `requalify` | `STAT-02` | `STAT-02` |
| `requalify` | `STAT-03` | `STAT-02` |
| `requalify` | `STAT-05` | `STAT-02` |

Règles d’exclusion :

- pas de requalification depuis `STAT-01` ;
- pas de requalification depuis `STAT-04` ;
- pas de requalification depuis `STAT-06` ;
- pas de requalification depuis `STAT-07` ;
- pas de `STAT-08` ;
- pas de nouveau statut ;
- pas de nouvelle table SQLite.

---

## 10. Validations

| Contrôle | Résultat |
|----------|----------|
| Backend build | OK |
| Backend tests | OK — 67 tests |
| Frontend build | OK |
| Frontend tests | OK — 113 tests |
| Validation navigateur local | Non exécutée — validation automatisée OK |
| Validation navigateur API | Non exécutée — validation automatisée OK |

---

## 11. Prochaine étape

**INC-RQ-03** : exposer l’action `Requalifier` côté frontend, sans nouveau statut et sans changer le contrat API.
