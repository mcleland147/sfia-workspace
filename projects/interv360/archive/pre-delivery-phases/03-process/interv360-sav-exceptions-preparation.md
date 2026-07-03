# Interv360 — Préparation du diagramme exceptions métier SAV

**Projet** : PRJ-INTERV360  
**Phase** : 03-process  
**Type** : Préparation BPMN — exceptions métier  
**Statut** : Draft  
**Fichier BPMN cible** : `bpmn/interv360-sav-exceptions.bpmn`  
**Outil cible** : Camunda Modeler  
**Processus principal associé** : `bpmn/interv360-sav-mvp.bpmn`

---

## 1. Objectif

Ce document prépare la modélisation du **diagramme BPMN des exceptions métier Interv360**.

Le diagramme doit détailler les branches **volontairement simplifiées** dans le processus principal :

- doublon potentiel ;
- données insuffisantes / maintien à qualifier ;
- attente client ;
- retard ;
- clôture sans signature.

Ce document **ne crée pas** encore le fichier `.bpmn`.

---

## 2. Niveau BPMN retenu

| Élément | Choix |
|---------|-------|
| Niveau | Niveau 2 — Exceptions métier |
| Objectif | Détailler les branches métier hors happy path |
| Processus principal associé | `interv360-sav-mvp.bpmn` |
| Anomalies d'intégration | Hors périmètre — traitées dans `interv360-integration-errors.bpmn` |
| Exécution Camunda | Hors périmètre |

---

## 3. Lanes à créer

Créer les lanes suivantes dans Camunda Modeler :

| Lane | Rôle |
|------|------|
| Manager SAV | Arbitrage, qualification, planification, reprise |
| Technicien | Signalement terrain, attente client, clôture sans signature |
| Interv360 | Support applicatif, statut, traçabilité |
| Dashboard / pilotage | Visibilité retard, attente, exceptions |

Le **client** peut être représenté indirectement via les tâches d'attente client, sans lane dédiée obligatoire dans ce diagramme.

---

## 4. Exceptions à représenter

| Exception | Source dans processus principal | Statut concerné | Règle liée |
|-----------|--------------------------------|-----------------|------------|
| Données insuffisantes | Gateway Données suffisantes ? | À qualifier (STAT-01) | RG-C05 |
| Doublon potentiel | Gateway Doublon potentiel détecté ? | À qualifier (STAT-01) | RG-C04 |
| Attente client | Gateway Intervention réalisable ? | En attente client (STAT-05) | RG-I05 |
| Retard | Indicateur dashboard | En retard (STAT-07) | RG-I05 |
| Absence de signature | Gateway Signature client disponible ? | En cours / Clôturée (STAT-04 / STAT-06) | RG-R02 / RG-R05 |

---

## 5. Sous-processus 1 — Données insuffisantes

**Objectif :** maintenir la demande en **À qualifier** tant que les données minimales ne sont pas suffisantes.

| Ordre | Élément BPMN | Libellé recommandé | Lane | Statut | Règle |
|-------|--------------|-------------------|------|--------|-------|
| 1 | Start Event | Données insuffisantes détectées | Manager SAV | À qualifier | RG-C05 |
| 2 | Task | Identifier les données manquantes | Manager SAV | À qualifier | RG-C05 |
| 3 | Task | Compléter la demande | Manager SAV | À qualifier | RG-C05 |
| 4 | Task | Mettre à jour la demande | Interv360 | À qualifier | RG-C05 |
| 5 | Gateway | Données minimales complètes ? | Manager SAV | À qualifier | RG-C05 |
| 6 | End Event | Demande prête à qualifier | Manager SAV | Qualifiée possible | RG-C05 |

**Si non :** retour vers **Identifier les données manquantes**.

---

## 6. Sous-processus 2 — Doublon potentiel

**Objectif :** représenter l'**arbitrage manuel** d'un doublon potentiel **sans fusion automatique**.

| Ordre | Élément BPMN | Libellé recommandé | Lane | Statut | Règle |
|-------|--------------|-------------------|------|--------|-------|
| 1 | Start Event | Doublon potentiel détecté | Interv360 | À qualifier | RG-C04 |
| 2 | Task | Afficher les demandes proches | Interv360 | À qualifier | RG-C04 |
| 3 | Task | Comparer les demandes | Manager SAV | À qualifier | RG-C04 |
| 4 | Gateway | Doublon confirmé ? | Manager SAV | À qualifier | RG-C04 |
| 5 | Task | Lier ou marquer comme doublon | Manager SAV | À qualifier | RG-C04 |
| 6 | Task | Continuer la qualification | Manager SAV | À qualifier | RG-C04 / RG-I05 |
| 7 | End Event | Arbitrage doublon terminé | Manager SAV | Qualifiée possible | RG-C04 |

**Si non :** continuer la qualification **sans fusion**.

**Rappel :** ne pas représenter de **fusion automatique**.

---

## 7. Sous-processus 3 — Attente client

**Objectif :** représenter la **suspension temporaire** d'une intervention lorsque le technicien ou le manager attend une action ou information client.

| Ordre | Élément BPMN | Libellé recommandé | Lane | Statut | Règle |
|-------|--------------|-------------------|------|--------|-------|
| 1 | Start Event | Blocage client identifié | Technicien | En cours | RG-I05 |
| 2 | Task | Passer l'intervention en attente client | Technicien | En attente client | RG-I05 |
| 3 | Task | Renseigner le motif d'attente | Technicien | En attente client | RG-I05 |
| 4 | Task | Rendre l'attente visible au dashboard | Interv360 | En attente client | RG-I05 |
| 5 | Gateway | Blocage levé ? | Manager SAV / Technicien | En attente client | RG-I05 |
| 6 | Task | Reprendre l'intervention | Technicien | En cours | RG-I05 |
| 7 | End Event | Intervention reprise | Technicien | En cours | RG-I05 |

**Si non :** rester en **attente client**.

---

## 8. Sous-processus 4 — Retard

**Objectif :** représenter le **retard** comme indicateur de pilotage, **non** comme statut bloquant synchronisé CRM.

| Ordre | Élément BPMN | Libellé recommandé | Lane | Statut | Règle |
|-------|--------------|-------------------|------|--------|-------|
| 1 | Start Event | Échéance dépassée | Dashboard / pilotage | En retard | RG-I05 |
| 2 | Task | Signaler le retard | Dashboard / pilotage | En retard | RG-I05 |
| 3 | Task | Analyser la cause du retard | Manager SAV | En retard | RG-I05 |
| 4 | Task | Réajuster la planification | Manager SAV | Planifiée / En cours | RG-I05 |
| 5 | End Event | Retard pris en compte | Dashboard / pilotage | Indicateur suivi | RG-I05 |

**Précision :** **En retard** (STAT-07) est un **indicateur métier / dashboard**, pas un statut bloquant du flux principal.

---

## 9. Sous-processus 5 — Clôture sans signature

**Objectif :** représenter la clôture lorsque la **signature client n'est pas disponible**.

| Ordre | Élément BPMN | Libellé recommandé | Lane | Statut | Règle |
|-------|--------------|-------------------|------|--------|-------|
| 1 | Start Event | Signature client indisponible | Technicien | En cours | RG-R02 |
| 2 | Task | Sélectionner un motif d'absence | Technicien | En cours | RG-R02 / RG-R05 |
| 3 | Gateway | Motif suffisant ? | Interv360 | En cours | RG-R05 |
| 4 | Task | Compléter le motif | Technicien | En cours | RG-R05 |
| 5 | Task | Valider le compte rendu | Technicien | En cours | RG-R05 |
| 6 | Task | Clôturer sans signature | Interv360 | Clôturée | RG-R02 / RG-R05 |
| 7 | End Event | Intervention clôturée sans signature | Interv360 | Clôturée | RG-R05 |

**Motifs possibles** (rappel `closure-without-signature.md`) :

- Client absent ;
- Signature refusée ;
- Signature non applicable ;
- Contrainte terrain ;
- Autre motif à préciser.

---

## 10. Statuts représentés

| Statut | Code | Usage dans ce diagramme |
|--------|------|--------------------------|
| À qualifier | STAT-01 | Données insuffisantes, doublon |
| Qualifiée | STAT-02 | Retour possible après qualification |
| Planifiée | STAT-03 | Réajustement retard |
| En cours | STAT-04 | Intervention, attente, clôture |
| En attente client | STAT-05 | Suspension temporaire |
| Clôturée | STAT-06 | Clôture sans signature |
| En retard | STAT-07 | Indicateur dashboard |
| Anomalie d'intégration | STAT-08 | Hors périmètre — diagramme dédié |

---

## 11. Règles RG représentées

| Règle | Usage |
|-------|-------|
| **RG-C04** | Doublon potentiel, arbitrage manuel |
| **RG-C05** | Données minimales, maintien à qualifier |
| **RG-I05** | Statuts, attente client, retard |
| **RG-R02** | Signature optionnelle |
| **RG-R05** | Compte rendu obligatoire, motif absence signature, clôture traçable |

**RG-I06** est **hors périmètre** de ce diagramme — traité dans `interv360-integration-errors.bpmn`.

---

## 12. ADR candidates alimentées

| Sujet | Pourquoi |
|-------|----------|
| Clôture sans signature | Motif obligatoire et clôture locale |
| Mapping durable des statuts | Usage de En attente client et En retard |
| Gestion des doublons | Arbitrage manuel, pas de fusion automatique |

---

## 13. Recommandations de modélisation Camunda

Dans Camunda Modeler :

- créer un process nommé **Interv360 SAV Exceptions** ;
- utiliser des **groupes ou sections visuelles** pour distinguer les 5 sous-processus ;
- éviter de surcharger avec trop de détails ;
- garder les **libellés courts** ;
- rester au **niveau fonctionnel** ;
- ne pas créer de process **exécutable** (`isExecutable="false"`) ;
- sauvegarder sous `projects/interv360/03-process/bpmn/interv360-sav-exceptions.bpmn`.

**Lien avec le processus principal :** chaque sous-processus correspond à une branche simplifiée de `interv360-sav-mvp.bpmn` — les Start Events peuvent être annotés comme points d'entrée depuis le diagramme principal.

---

## 14. Éléments à ne pas modéliser dans ce diagramme

Ne pas modéliser ici :

- sync CRM KO ;
- erreurs API ;
- reprise technique ;
- géolocalisation ;
- IA assistive ;
- backlog ;
- user stories ;
- tests ;
- code applicatif ;
- delivery.

---

## 15. Conclusion

Le diagramme **exceptions métier** peut être modélisé dans Camunda Modeler.

Il doit rester centré sur les **exceptions métier** du cycle SAV MVP, sans traiter les **anomalies d'intégration** qui feront l'objet du diagramme `interv360-integration-errors.bpmn`.

---

*Préparation BPMN — exceptions métier SAV — Interv360 — SFIA — Draft.*
