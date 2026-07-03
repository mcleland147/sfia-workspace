# ADR-003 — Gestion des erreurs d'intégration Interv360

**Projet** : PRJ-INTERV360  
**Phase** : 04-adr  
**Statut** : Accepted  
**Date** : 2026-06-28  
**Décision** : Formaliser la gestion des erreurs d'intégration RG-I06  
**Branche** : `adr/interv360-structurantes`

---

## 1. Contexte

Le MVP Interv360 prévoit une **synchronisation CRM simulée** après la clôture locale d'une intervention.

**ADR-001** a formalisé le mapping durable des statuts, en distinguant les statuts métier internes des indicateurs internes.

**ADR-002** a formalisé le rôle du CRM simulé comme cible externe représentative, sans en faire une source de vérité.

Le cycle BPMN a identifié un flux dédié aux anomalies d'intégration :

```
Clôture locale validée
→ Synchronisation CRM simulée
→ Synchronisation réussie ?
→ Si KO : créer anomalie d'intégration
→ qualifier gravité
→ reprise manuelle ou suivi
→ visibilité dashboard
```

Cette ADR formalise la gestion des erreurs d'intégration en lien avec **RG-I06**.

---

## 2. Décision

Nous décidons que toute **erreur significative** de synchronisation CRM simulée doit être traitée comme une **anomalie d'intégration interne**.

Cette anomalie :

- est visible dans Interv360 ;
- est visible dans le dashboard ;
- possède une **gravité** ;
- peut nécessiter une **reprise manuelle** ;
- **ne remet pas en cause** la clôture locale de l'intervention.

Le statut / indicateur associé est :

**STAT-08 — Anomalie d'intégration**

STAT-08 **n'est pas synchronisé** comme statut CRM métier.

---

## 3. Typologie des erreurs d'intégration

Le MVP retient les catégories suivantes :

| Type d'erreur | Description | Gravité par défaut | Traitement |
|---------------|-------------|-------------------|------------|
| Sync CRM KO | Échec de synchronisation avec le CRM simulé | Bloquant sync | Créer anomalie, reprise manuelle |
| Donnée rejetée | Donnée obligatoire absente ou invalide côté CRM simulé | Bloquant métier / Bloquant sync | Corriger la donnée, relancer |
| Timeout / absence de réponse | CRM simulé indisponible ou sans retour | Bloquant sync | Relance ou suivi manuel |
| Erreur informative | Alerte non bloquante | Information | Journaliser et surveiller |
| Échec persistant | Échec après correction ou relance | Bloquant sync | Suivi manager / reprise manuelle |

---

## 4. Niveaux de gravité

**RG-I06** retient trois niveaux de gravité :

| Gravité | Signification | Effet |
|---------|---------------|-------|
| **Information** | Écart ou alerte non bloquante | Journalisation, visibilité faible |
| **Bloquant métier** | Donnée ou situation nécessitant décision métier | Action Manager SAV requise |
| **Bloquant sync** | Synchronisation impossible ou non confirmée | Reprise manuelle requise |

Les gravités doivent rester **fonctionnelles**.

Elles **ne doivent pas** dépendre de codes techniques tels que codes HTTP, exceptions applicatives ou logs bas niveau dans le MVP.

---

## 5. Règles de traitement

### 5.1 Création d'anomalie

Une anomalie d'intégration est créée lorsque :

- la synchronisation CRM simulée échoue ;
- une donnée est rejetée ;
- le CRM simulé ne répond pas ;
- une reprise manuelle est nécessaire ;
- une erreur informative doit être tracée.

### 5.2 Qualification de gravité

Chaque anomalie doit être qualifiée selon :

- **Information** ;
- **Bloquant métier** ;
- **Bloquant sync**.

### 5.3 Visibilité dashboard

Toute anomalie d'intégration doit être **visible au dashboard**.

Le dashboard doit permettre de distinguer :

- les anomalies informatives ;
- les anomalies nécessitant action manager ;
- les anomalies bloquant la synchronisation.

### 5.4 Reprise manuelle

La reprise manuelle peut consister à :

- corriger une donnée ;
- relancer la synchronisation simulée ;
- journaliser une reprise ;
- suivre une anomalie persistante.

Le **retry automatique avancé est hors MVP**.

### 5.5 Clôture locale conservée

Une anomalie d'intégration **ne doit pas** annuler la clôture locale.

Une intervention peut donc être :

- **STAT-06 Clôturée** localement ;
- et porter en parallèle **STAT-08 Anomalie d'intégration**.

---

## 6. Conséquences positives

Cette décision permet :

- de sécuriser le traitement des erreurs de synchronisation ;
- de séparer erreur d'intégration et statut métier ;
- d'éviter qu'un échec externe invalide une clôture locale ;
- de préparer la future intégration CRM réelle ;
- de donner de la visibilité aux managers ;
- de cadrer la reprise manuelle sans sur-techniciser le MVP.

---

## 7. Conséquences négatives / points d'attention

Cette décision implique :

- de maintenir un suivi explicite des anomalies ;
- de prévoir une représentation lisible des gravités ;
- de ne pas confondre STAT-08 avec un statut métier de clôture KO ;
- de documenter les reprises manuelles ;
- de réévaluer le modèle si une intégration CRM réelle est mise en œuvre.

---

## 8. Alternatives considérées

### Alternative 1 — Ignorer les erreurs de synchronisation

**Rejetée.**

Cela masquerait un point structurant du cycle SAV et rendrait le dashboard incomplet.

### Alternative 2 — Annuler la clôture locale en cas d'erreur sync

**Rejetée.**

L'échec porte sur la synchronisation externe, pas sur la validité métier de la clôture locale.

### Alternative 3 — Synchroniser STAT-08 vers le CRM comme statut métier

**Rejetée.**

ADR-001 établit que STAT-08 est un indicateur interne d'intégration, non un statut CRM métier.

### Alternative 4 — Implémenter un retry automatique avancé dans le MVP

**Rejetée pour le MVP.**

La reprise reste manuelle et simulée à ce stade.

---

## 9. Impacts sur les autres décisions

Cette ADR dépend de :

- **ADR-001** — Mapping durable des statuts ;
- **ADR-002** — Synchronisation CRM simulée.

Elle alimente directement :

- **ADR-004** — Clôture locale vs synchronisation externe ;
- ADR future — Stratégie de reprise manuelle ;
- architecture fonctionnelle détaillée ;
- design dashboard / vue anomalies.

---

## 10. Sources

| Source | Rôle |
|--------|------|
| `projects/interv360/04-adr/ADR-001-status-mapping.md` | STAT-08 comme indicateur interne |
| `projects/interv360/04-adr/ADR-002-simulated-crm-sync.md` | CRM simulé et résultats de synchronisation |
| `projects/interv360/03-process/interv360-integration-errors-preparation.md` | Flux anomalies d'intégration |
| `projects/interv360/03-process/process-analysis.md` | Correspondance BPMN / statuts / RG-I06 |
| `projects/interv360/02-architecture/rules-rg-prioritization.md` | Règle RG-I06 |
| `projects/interv360/04-adr/adr-structuring-scope.md` | Cadrage ADR |

---

## 11. Statut de la décision

**Décision acceptée** pour le MVP Interv360.

Elle pourra être réévaluée si :

- une intégration CRM réelle est retenue ;
- un mécanisme de retry automatique devient nécessaire ;
- les exigences de supervision deviennent plus détaillées ;
- les erreurs doivent être exploitées par un outil externe.

---

## 12. Conclusion

Les erreurs d'intégration Interv360 sont traitées comme des **anomalies internes qualifiées par gravité**.

**STAT-08** permet de suivre ces anomalies sans remettre en cause la clôture locale.

Cette décision prépare **ADR-004** sur la clôture locale vs synchronisation externe.

---

*ADR-003 — Gestion des erreurs d'intégration — Interv360 — SFIA — Accepted.*
