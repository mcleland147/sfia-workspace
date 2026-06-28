# ADR-002 — Synchronisation CRM simulée Interv360

**Projet** : PRJ-INTERV360  
**Phase** : 04-adr  
**Statut** : Accepted  
**Date** : 2026-06-28  
**Décision** : Utiliser une synchronisation CRM simulée pour le MVP Interv360  
**Branche** : `adr/interv360-structurantes`

---

## 1. Contexte

Le MVP Interv360 doit représenter le cycle SAV de bout en bout, depuis la création d'une demande jusqu'à la clôture locale et la transmission de l'état de clôture vers un système externe de type CRM.

Le cycle BPMN a identifié une étape structurante :

```
Clôturer l'intervention
→ Synchroniser la clôture vers CRM simulé
→ Mettre à jour le dashboard
```

À ce stade, le périmètre MVP **ne vise pas** une intégration CRM réelle.

Le besoin est de :

- représenter le comportement attendu d'une synchronisation externe ;
- clarifier les statuts transmis ;
- préparer la future intégration ;
- isoler les erreurs d'intégration ;
- éviter de dépendre d'un CRM réel dès le MVP.

Cette ADR formalise le choix d'une **synchronisation CRM simulée**.

---

## 2. Décision

Nous décidons que le MVP Interv360 utilisera une **synchronisation CRM simulée**.

Le CRM simulé représente un **système externe cible**, sans implémenter une intégration réelle avec un CRM de production.

La synchronisation simulée doit couvrir :

- l'envoi d'une clôture locale ;
- la transmission des informations métier nécessaires ;
- le retour d'un succès ou d'un échec de synchronisation ;
- la création d'une anomalie d'intégration en cas d'échec ;
- la visibilité dashboard du résultat.

Le CRM simulé **ne doit pas** être considéré comme source de vérité du cycle SAV MVP.

La **source de vérité** du MVP reste **Interv360**.

---

## 3. Données synchronisées dans le MVP

La synchronisation CRM simulée doit représenter au minimum :

| Donnée | Rôle |
|--------|------|
| Identifiant intervention | Corrélation entre Interv360 et CRM simulé |
| Statut métier synchronisable | Statut STAT-01 à STAT-06 selon mapping ADR-001 |
| Date / heure de clôture | Trace de clôture locale |
| Résultat intervention | Synthèse du résultat terrain |
| Compte rendu synthétique | Information métier transmise |
| Signature présente oui/non | Indication de signature |
| Motif absence signature | Obligatoire si signature absente |
| Indicateur anomalie sync | Visible côté Interv360, non statut CRM métier |

Les indicateurs suivants **ne sont pas synchronisés** comme statuts CRM métier :

- **STAT-07 En retard** ;
- **STAT-08 Anomalie d'intégration**.

---

## 4. Règles de synchronisation

### 4.1 Interv360 source de vérité

Interv360 reste source de vérité pour :

- la demande SAV ;
- le statut local ;
- le compte rendu ;
- la signature ou le motif d'absence ;
- la clôture locale ;
- l'anomalie d'intégration éventuelle.

### 4.2 CRM simulé comme cible

Le CRM simulé sert uniquement à représenter :

- une cible externe ;
- un retour de synchronisation ;
- un point de contrôle d'intégration ;
- une préparation à une future intégration réelle.

### 4.3 Synchronisation post-clôture

La synchronisation CRM simulée intervient **après** la clôture locale.

L'échec de synchronisation **ne doit pas** annuler la clôture locale.

### 4.4 Résultat de synchronisation

Le résultat de synchronisation peut être :

- succès ;
- échec bloquant sync ;
- donnée rejetée ;
- timeout / absence de réponse ;
- erreur informative.

Les erreurs sont traitées par **ADR-003 — Gestion des erreurs d'intégration**.

---

## 5. Conséquences positives

Cette décision permet :

- de valider le comportement métier sans dépendre d'un CRM réel ;
- de préparer une future intégration ;
- de séparer clairement clôture locale et synchronisation externe ;
- de sécuriser le MVP ;
- de représenter les anomalies d'intégration ;
- de conserver une architecture fonctionnelle simple.

---

## 6. Conséquences négatives / points d'attention

Cette décision implique :

- que le MVP ne valide pas encore une intégration technique réelle ;
- que les contraintes du futur CRM cible peuvent imposer des ajustements ;
- que le mapping CRM réel devra être revu ultérieurement ;
- que les erreurs simulées doivent rester fonctionnelles, non techniques ;
- que le CRM simulé ne doit pas devenir implicitement source de vérité.

---

## 7. Alternatives considérées

### Alternative 1 — Intégrer directement un CRM réel

**Rejetée pour le MVP.**

Cette option aurait introduit trop tôt des dépendances techniques, contractuelles et d'intégration.

### Alternative 2 — Ne pas représenter de CRM

**Rejetée.**

Cette option aurait masqué une dépendance structurante du cycle SAV : la transmission de la clôture vers un système externe.

### Alternative 3 — Synchroniser tous les statuts et indicateurs

**Rejetée.**

ADR-001 distingue les statuts métier synchronisables des indicateurs internes.

Les indicateurs STAT-07 et STAT-08 ne doivent pas être synchronisés comme statuts CRM métier.

### Alternative 4 — Faire du CRM la source de vérité

**Rejetée.**

Le MVP Interv360 doit rester source de vérité locale, notamment pour la clôture et les anomalies d'intégration.

---

## 8. Impacts sur les autres décisions

Cette ADR alimente directement :

- **ADR-003** — Gestion des erreurs d'intégration ;
- **ADR-004** — Clôture locale vs synchronisation externe ;
- ADR future — Stratégie de reprise manuelle.

Elle dépend de :

- **ADR-001** — Mapping durable des statuts.

---

## 9. Sources

| Source | Rôle |
|--------|------|
| `projects/interv360/04-adr/ADR-001-status-mapping.md` | Mapping statuts et indicateurs non synchronisables |
| `projects/interv360/03-process/process-analysis.md` | Analyse BPMN du flux de synchronisation |
| `projects/interv360/03-process/interv360-integration-errors-preparation.md` | Préparation du diagramme anomalies d'intégration |
| `projects/interv360/03-process/process-cycle-closure.md` | Clôture du cycle BPMN |
| `projects/interv360/04-adr/adr-structuring-scope.md` | Cadrage ADR |

---

## 10. Statut de la décision

**Décision acceptée** pour le MVP Interv360.

Elle pourra être réévaluée si :

- un CRM cible réel est sélectionné ;
- une API CRM réelle est imposée ;
- les contraintes d'intégration deviennent prioritaires ;
- le périmètre MVP évolue vers une intégration technique.

---

## 11. Conclusion

Le MVP Interv360 utilisera une **synchronisation CRM simulée**.

Cette décision permet de représenter le comportement d'intégration attendu sans introduire trop tôt une dépendance à un CRM réel.

**Interv360 reste source de vérité locale** du cycle SAV MVP.

---

*ADR-002 — Synchronisation CRM simulée — Interv360 — SFIA — Accepted.*
