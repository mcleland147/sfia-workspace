# Interv360 — Workflow Extension Framing

**Projet** : Interv360  
**Cycle** : Workflow Extension Framing  
**Mode** : SFIA Fast Track — cadrage utile direct  
**Statut** : Cadrage architecture produit  
**Branche** : `architecture/interv360-workflow-extension-framing`

---

## 1. Objectif

Ce document cadre l’extension du workflow métier Interv360 après validation de la simulation de rôle.

L’objectif est de définir quels enrichissements métier sont pertinents avant toute implémentation.

Ce cadrage ne modifie pas encore le code.

---

## 2. Point de départ

Interv360 dispose déjà :

- d’un backend SQLite persistant ;
- d’une API `/api/v1` stabilisée ;
- d’un modèle RequestDetail productisé ;
- d’erreurs API clarifiées ;
- d’un frontend connecté ;
- d’un runbook produit consolidé ;
- d’une simulation de rôle frontend ;
- d’une matrice de permissions lisible ;
- d’un reset réservé à `admin`.

La revue produit du 2 juillet 2026 a confirmé :

- les rôles sont compréhensibles ;
- la simulation apporte de la valeur ;
- l’auth réelle n’est pas prioritaire ;
- le workflow actuel est trop simple pour l’ambition produit.

Références :

- [`interv360-role-simulation-review.md`](./interv360-role-simulation-review.md) — §13
- [`../07-delivery/role-simulation.md`](../07-delivery/role-simulation.md)
- [`interv360-product-roadmap-after-role-simulation.md`](./interv360-product-roadmap-after-role-simulation.md)

---

## 3. Problème à résoudre

Le workflow actuel reste linéaire :

`STAT-01 → STAT-02 → STAT-03 → STAT-04 → STAT-06`

Cette chaîne est suffisante pour une démonstration simple, mais limitée pour représenter un vrai cycle d’intervention SAV.

Limites constatées :

- pas d’attente ;
- pas d’annulation ;
- pas de requalification ;
- pas de retour arrière métier ;
- pas de distinction entre traitement technicien et validation responsable ;
- pas de cas d’escalade ;
- pas de création ou enrichissement de demande côté demandeur.

---

## 4. Options d’extension

### Option A — Extension légère du workflow existant

Principe :

- conserver les statuts actuels ;
- ajouter quelques transitions métier ciblées ;
- limiter l’impact API / frontend / tests.

Exemples :

- requalifier une demande ;
- mettre en attente ;
- reprendre une demande ;
- annuler une demande.

Avantages :

- rapide ;
- cohérent avec le prototype ;
- faible risque ;
- bon prochain incrément.

Limites :

- ne couvre pas encore un cycle métier complet ;
- reste une extension contrôlée.

---

### Option B — Nouveau workflow métier complet

Principe :

- redéfinir largement le cycle d’intervention ;
- ajouter plusieurs statuts ;
- revoir transitions, UI, seed, documentation.

Avantages :

- plus proche d’un vrai produit.

Limites :

- trop lourd maintenant ;
- risque de casser la lisibilité ;
- nécessite plus de cadrage métier.

---

### Option C — Workflow orienté rôles

Principe :

- différencier fortement les actions selon les rôles ;
- rendre `technician`, `manager`, `requester` plus distincts.

Exemples :

- demandeur complète ou annule ;
- technicien traite ;
- responsable valide ou réaffecte.

Avantages :

- valorise la simulation de rôle ;
- renforce le produit.

Limites :

- nécessite de bien choisir les cas métier ;
- peut élargir fortement le périmètre.

---

### Option D — Pas d’extension workflow, polish UX seulement

Principe :

- corriger les irritants mineurs ;
- harmoniser messages ;
- améliorer readiness panel.

Avantages :

- rapide.

Limites :

- ne répond pas au principal signal de revue ;
- faible valeur produit.

---

## 5. Analyse comparative

| Option | Valeur produit | Risque | Effort | Recommandation |
|--------|----------------|--------|--------|----------------|
| A — Extension légère | Élevée | Faible à moyen | Modéré | Recommandée |
| B — Workflow complet | Élevée | Élevé | Élevé | Différer |
| C — Workflow orienté rôles | Élevée | Moyen | Moyen | Pertinent en partie |
| D — Polish UX seul | Faible à moyen | Faible | Faible | Non prioritaire |

---

## 6. Décision recommandée

Décision :

> retenir une extension légère et contrôlée du workflow, enrichie par les rôles, sans refonte complète.

Le prochain incrément doit rester démontrable rapidement.

Recommandation :

- ne pas refondre tout le workflow ;
- ne pas introduire un moteur de workflow ;
- ne pas ajouter un grand nombre de statuts ;
- ne pas ouvrir l’auth réelle ;
- ne pas modifier l’architecture backend en profondeur ;
- ajouter un petit nombre de cas métier visibles.

---

## 7. Périmètre métier recommandé

### À retenir en priorité

| Besoin | Intention | Rôle principal |
|--------|-----------|----------------|
| Mise en attente | Représenter un blocage temporaire | Technicien / Responsable |
| Reprise après attente | Relancer le traitement | Technicien / Responsable |
| Annulation | Fermer une demande non poursuivie | Responsable / Admin |
| Requalification | Corriger ou compléter la qualification | Technicien / Responsable |

### À différer

| Besoin | Raison |
|--------|--------|
| Affectation technicien réelle | Nécessite modèle utilisateur plus riche |
| Création de demande par demandeur | Sujet produit distinct |
| Workflow complet multi-branches | Trop large |
| SLA / échéances avancées | Nécessite règles métier |
| Escalade complète | À cadrer plus tard |
| Validation manager obligatoire | À tester après première extension |

---

## 8. Statuts candidats

Statuts candidats à étudier :

| Statut | Libellé | Décision |
|--------|---------|----------|
| `STAT-05` | En attente | Candidat prioritaire |
| `STAT-07` | Annulée | Candidat prioritaire |
| `STAT-08` | Requalifiée / à requalifier | À discuter |
| `STAT-09` | Reprise / reprise en cours | À éviter si transition suffisante |

Décision recommandée :

- ajouter au maximum deux nouveaux statuts dans un premier incrément ;
- privilégier `STAT-05 — En attente` et `STAT-07 — Annulée` ;
- traiter la requalification comme transition ou retour métier avant d’ajouter un statut dédié.

---

## 9. Transitions candidates

| Transition | De | Vers | Rôles autorisés | Priorité |
|------------|----|------|-----------------|----------|
| `put_on_hold` | En cours de traitement | En attente | technician, manager, admin | Haute |
| `resume` | En attente | En cours de traitement | technician, manager, admin | Haute |
| `cancel` | Avant clôture | Annulée | manager, admin | Haute |
| `requalify` | Planifiée / en cours | Qualifiée ou à requalifier | technician, manager, admin | Moyenne |

Mapping indicatif avec le workflow nominal actuel :

- « En cours de traitement » couvre `STAT-02`, `STAT-03`, `STAT-04` selon le point d’entrée retenu à l’implémentation ;
- « Avant clôture » exclut `STAT-06` ;
- la requalification peut rester une transition sans nouveau statut si le retour vers `STAT-01` ou `STAT-02` est suffisant.

---

## 10. Impacts techniques pressentis

### Frontend

Impacts probables :

- afficher nouveaux statuts ;
- afficher nouvelles actions selon statut ;
- appliquer permissions existantes ;
- adapter tests workflow ;
- adapter scénario démo.

### Backend

Impacts probables :

- étendre la liste des statuts ;
- étendre la validation des transitions ;
- adapter seed ;
- adapter tests API ;
- adapter persistence si statut simple uniquement.

### API

Le contrat peut rester identique :

`POST /api/v1/requests/:id/transitions`

Seules les valeurs d’action et les transitions autorisées évoluent.

### SQLite

Aucune nouvelle table nécessaire si l’extension reste limitée aux statuts/actions.

---

## 11. Hors scope

Ce cadrage n’introduit pas :

- code ;
- frontend ;
- backend ;
- SQLite ;
- API ;
- modification effective du workflow ;
- auth réelle ;
- OAuth ;
- JWT ;
- SSO ;
- base users ;
- CRM ;
- données réelles ;
- moteur BPMN ;
- moteur workflow externe ;
- PostgreSQL ;
- ORM lourd ;
- Notion ;
- Controlled Delivery ;
- `sfia-notion-sync` ;
- exports Figma.

---

## 12. Prochain batch recommandé

Branche recommandée :

`delivery/interv360-workflow-light-extension`

Objectif :

- implémenter une extension légère du workflow ;
- ajouter `En attente` et `Annulée` si confirmé ;
- conserver l’API existante ;
- conserver SQLite ;
- conserver les rôles simulés ;
- mettre à jour tests et runbook ;
- produire une seule PR en fin de batch.

Incréments possibles :

| Incrément | Objectif |
|----------|----------|
| INC-WF-01 | Confirmer le périmètre statuts/transitions |
| INC-WF-02 | Implémenter statuts/actions backend |
| INC-WF-03 | Exposer actions frontend |
| INC-WF-04 | Adapter simulation de rôle et tests |
| INC-WF-05 | Documentation / runbook / PR |

---

## 13. Décision finale

| Élément | Décision |
|--------|----------|
| Axe retenu | Extension légère du workflow |
| Type | Cadrage avant implémentation |
| Workflow complet | Différé |
| Auth réelle | Différée |
| Polish rôle | Différé |
| Statuts candidats | `STAT-05 En attente`, `STAT-07 Annulée` |
| Requalification | À cadrer prudemment |
| API contract | À conserver si possible |
| SQLite | À conserver |
| Prochaine branche recommandée | `delivery/interv360-workflow-light-extension` |
