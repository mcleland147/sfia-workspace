# Interv360 — Préparation du diagramme anomalies d'intégration

**Projet** : PRJ-INTERV360  
**Phase** : 03-process  
**Type** : Préparation BPMN — anomalies d'intégration  
**Statut** : Draft  
**Fichier BPMN cible** : `bpmn/interv360-integration-errors.bpmn`  
**Outil cible** : Camunda Modeler / BPMN 2.0 XML compatible  
**Processus principal associé** : `bpmn/interv360-sav-mvp.bpmn`  
**Exceptions métier associées** : `bpmn/interv360-sav-exceptions.bpmn`

---

## 1. Objectif

Ce document prépare la modélisation du **diagramme BPMN des anomalies d'intégration Interv360**.

Le diagramme doit détailler le traitement des **erreurs de synchronisation** entre Interv360 et le **CRM simulé**, en lien avec la règle **RG-I06**.

Il doit clarifier :

- le déclenchement de la synchronisation CRM après clôture locale ;
- les cas de synchronisation réussie ou échouée ;
- la création d'une anomalie d'intégration ;
- la qualification de la gravité ;
- la visibilité dashboard ;
- la reprise manuelle ;
- la conservation de la clôture locale même en cas d'échec de synchronisation.

Ce document **ne crée pas** encore le fichier `.bpmn`.

---

## 2. Niveau BPMN retenu

| Élément | Choix |
|---------|-------|
| Niveau | Niveau 3 — Intégration / anomalies |
| Objectif | Représenter sync CRM, anomalies et reprise manuelle |
| Processus principal associé | `interv360-sav-mvp.bpmn` |
| Exceptions métier associées | `interv360-sav-exceptions.bpmn` |
| Exécution Camunda | Hors périmètre |
| CRM réel | Hors périmètre MVP — CRM simulé uniquement |

---

## 3. Lanes à créer

Créer les lanes suivantes dans Camunda Modeler :

| Lane | Rôle |
|------|------|
| Interv360 | Déclenchement sync, journalisation, maintien clôture locale |
| CRM simulé / intégration | Traitement de la synchronisation et retour d'état |
| Manager SAV | Qualification métier, décision de reprise, suivi |
| Dashboard / pilotage | Visibilité anomalie, gravité, reprise, indicateurs |

**Option :** ne pas ajouter de lane **Technicien**, sauf si une anomalie nécessite une action terrain. Par défaut, le traitement reste **manager / intégration**.

---

## 4. Anomalies à représenter

| Anomalie | Déclencheur | Gravité recommandée | Traitement |
|----------|-------------|---------------------|------------|
| Sync CRM KO | Échec retour CRM simulé | Bloquant sync | Créer anomalie, reprise manuelle |
| Donnée rejetée | Donnée obligatoire absente ou invalide côté CRM | Bloquant métier ou Bloquant sync | Corriger donnée, relancer sync |
| Timeout / absence de réponse | CRM simulé indisponible | Bloquant sync | Retenter ou reprise manuelle |
| Erreur non bloquante | Alerte informative | Information | Journaliser et surveiller |
| Reprise manuelle requise | Échec persistant | Bloquant sync | Action Manager SAV / support |

**Gravités à utiliser** (RG-I06) :

- **Information** ;
- **Bloquant métier** ;
- **Bloquant sync** (bloquant synchronisation).

---

## 5. Flux principal recommandé

### 5.1 Branche succès

| Ordre | Élément BPMN | Libellé recommandé | Lane | Statut associé | Règle |
|-------|--------------|-------------------|------|----------------|-------|
| 1 | Start Event | Clôture locale validée | Interv360 | Clôturée (STAT-06) | RG-R05 |
| 2 | Task | Préparer les données de synchronisation | Interv360 | Clôturée (STAT-06) | RG-I06 |
| 3 | Task | Envoyer la clôture au CRM simulé | Interv360 | Clôturée (STAT-06) | RG-I06 |
| 4 | Task | Traiter la synchronisation | CRM simulé / intégration | Clôturée (STAT-06) | RG-I06 |
| 5 | Gateway | Synchronisation réussie ? | CRM simulé / intégration | Clôturée / Anomalie d'intégration (STAT-08) | RG-I06 |
| 6 | Task | Confirmer la synchronisation | CRM simulé / intégration | Clôturée (STAT-06) | RG-I06 |
| 7 | Task | Journaliser le succès | Interv360 | Clôturée (STAT-06) | RG-I06 |
| 8 | Task | Mettre à jour le dashboard | Dashboard / pilotage | Clôturée (STAT-06) | RG-I05 |
| 9 | End Event | Synchronisation terminée | Dashboard / pilotage | Clôturée (STAT-06) | RG-I06 |

### 5.2 Branche KO

| Ordre | Élément BPMN | Libellé recommandé | Lane | Statut associé | Règle |
|-------|--------------|-------------------|------|----------------|-------|
| 10 | Task | Créer une anomalie d'intégration | Interv360 | Anomalie d'intégration (STAT-08) | RG-I06 |
| 11 | Task | Qualifier la gravité | Manager SAV | Anomalie d'intégration (STAT-08) | RG-I06 |
| 12 | Gateway | Reprise manuelle requise ? | Manager SAV | Anomalie d'intégration (STAT-08) | RG-I06 |
| 13 | Task | Corriger les données ou relancer la sync | Manager SAV | Anomalie d'intégration (STAT-08) | RG-I06 |
| 14 | Task | Journaliser la reprise | Interv360 | Anomalie d'intégration (STAT-08) | RG-I06 |
| 15 | Task | Afficher l'anomalie au dashboard | Dashboard / pilotage | Anomalie d'intégration (STAT-08) | RG-I06 |
| 16 | End Event | Anomalie suivie | Dashboard / pilotage | Anomalie d'intégration (STAT-08) | RG-I06 |

**Si reprise non requise** (gravité Information ou anomalie sans action immédiate) :

- journaliser l'anomalie ;
- afficher au dashboard ;
- clôturer le traitement d'anomalie.

**Si reprise effectuée** :

- revenir vers **Envoyer la clôture au CRM simulé** ou vers **Traiter la synchronisation**.

---

## 6. Points métiers à représenter clairement

### 6.1 Clôture locale conservée

Même si la synchronisation CRM échoue :

- l'intervention reste **clôturée localement** (STAT-06) ;
- le compte rendu reste **conservé** ;
- la signature ou le motif d'absence reste **conservé** ;
- l'anomalie porte sur la **synchronisation**, pas sur la validité métier de la clôture.

*Référence :* `closure-without-signature.md` — la clôture locale reste valide même si la sync CRM échoue.

### 6.2 Statut Anomalie d'intégration

**Anomalie d'intégration** (STAT-08) doit être représenté comme :

- un statut / indicateur **interne** ;
- **visible** au dashboard ;
- support de **reprise manuelle** ;
- **non bloquant** pour la clôture locale.

Les statuts **Clôturée** (STAT-06) et **Anomalie d'intégration** (STAT-08) peuvent **coexister** sur une même intervention (ex. clôture locale OK, sync CRM en échec).

### 6.3 Gravité

Représenter la qualification de gravité (RG-I06) :

| Niveau | Comportement attendu |
|--------|---------------------|
| **Information** | Sync différée ; journaliser ; pas d'alerte critique |
| **Bloquant métier** | Action manager requise ; alerte dashboard |
| **Bloquant sync** | Reprise manuelle obligatoire ; statut Anomalie d'intégration |

La gravité peut être ajoutée sous forme de **tâche** ou **annotation BPMN**.

### 6.4 Reprise manuelle

La reprise manuelle peut porter sur :

- correction de données ;
- relance de synchronisation ;
- suivi par Manager SAV ;
- journalisation de la reprise.

Le **retry automatique avancé est hors MVP** — la reprise reste **manuelle et simulée** (ARB-MVP-05).

---

## 7. Gateways à représenter

| Gateway | Sorties |
|---------|---------|
| Synchronisation réussie ? | Oui → succès ; Non → anomalie |
| Reprise manuelle requise ? | Oui → correction / relance ; Non → journalisation / dashboard |
| Relance réussie ? | Optionnelle — uniquement si le diagramme reste lisible |

**Recommandation :** ne pas ajouter trop de gateways. Si la relance complexifie le diagramme, représenter la relance comme une **tâche** puis retour vers la synchronisation.

---

## 8. Statuts représentés

| Statut | Code | Usage dans ce diagramme |
|--------|------|--------------------------|
| Clôturée | STAT-06 | Clôture locale déjà validée |
| Anomalie d'intégration | STAT-08 | Échec sync, reprise, visibilité dashboard |

**Statuts non représentés** dans ce diagramme :

- À qualifier (STAT-01) ;
- Qualifiée (STAT-02) ;
- Planifiée (STAT-03) ;
- En cours (STAT-04) ;
- En attente client (STAT-05) ;
- En retard (STAT-07).

---

## 9. Règles RG représentées

| Règle | Usage |
|-------|-------|
| **RG-I06** | Gestion des erreurs d'intégration, gravité, reprise |
| **RG-I05** | Dashboard / visibilité statut |
| **RG-R05** | Clôture locale préalable et compte rendu conservé |

---

## 10. ADR candidates alimentées

| Sujet | Pourquoi |
|-------|----------|
| Gestion des erreurs d'intégration | RG-I06 structure gravité, reprise, dashboard |
| Synchronisation CRM simulée | La sync post-clôture reste un point structurant |
| Clôture locale vs sync externe | La clôture reste valide même si la sync échoue |
| Stratégie de reprise manuelle | Choix de traitement des anomalies persistantes |

---

## 11. Recommandations de modélisation Camunda / BPMN XML

Dans Camunda Modeler :

- créer un process nommé **Interv360 Integration Errors** ;
- utiliser `isExecutable="false"` ;
- utiliser les **4 lanes** prévues ;
- représenter un **flux principal succès** et une **branche KO** ;
- garder les **libellés courts** ;
- rester au **niveau fonctionnel** ;
- ne pas modéliser API réelle, codes erreurs techniques ou retry technique détaillé ;
- utiliser des **gateways XOR** simples ;
- sauvegarder sous `projects/interv360/03-process/bpmn/interv360-integration-errors.bpmn`.

**Lien avec le processus principal :** le Start Event **Clôture locale validée** correspond au point de sortie de `interv360-sav-mvp.bpmn` après la tâche **Clôturer l'intervention** — la branche simplifiée **Signaler anomalie d'intégration** du diagramme principal est détaillée ici.

---

## 12. Éléments à ne pas modéliser

Ne pas modéliser ici :

- détails API réelle ;
- codes HTTP ;
- architecture technique ;
- logs techniques détaillés ;
- supervision applicative réelle ;
- géolocalisation ;
- IA assistive ;
- backlog ;
- user stories ;
- tests ;
- code applicatif ;
- delivery.

---

## 13. Conclusion

Le diagramme **anomalies d'intégration** peut être produit.

Il doit rester centré sur **RG-I06** :

- échec de synchronisation ;
- gravité ;
- anomalie visible ;
- reprise manuelle ;
- clôture locale conservée.

---

*Préparation BPMN — anomalies d'intégration — Interv360 — SFIA — Draft.*
