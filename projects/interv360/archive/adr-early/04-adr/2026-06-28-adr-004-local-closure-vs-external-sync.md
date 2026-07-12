# ADR-004 — Clôture locale vs synchronisation externe Interv360

**Projet** : PRJ-INTERV360
**Phase** : 04-adr
**Statut** : Accepted
**Date** : 2026-06-28
**Décision** : Dissocier la clôture locale de la synchronisation externe
**Branche** : `adr/interv360-structurantes`

---

## 1. Contexte

Le MVP Interv360 prévoit un cycle SAV dans lequel une intervention peut être **clôturée localement** après réalisation terrain, compte rendu obligatoire et signature ou motif d'absence de signature.

Le cycle BPMN a établi le flux suivant :

```
Réaliser l'intervention
→ Rédiger le compte rendu web
→ Signature client disponible ?
→ Clôturer l'intervention
→ Synchroniser la clôture vers CRM simulé
```

**ADR-001** a formalisé le mapping durable des statuts, notamment :

- **STAT-06 — Clôturée** ;
- **STAT-08 — Anomalie d'intégration**.

**ADR-002** a établi qu'Interv360 reste **source de vérité locale** et que le CRM simulé est une **cible externe représentative**.

**ADR-003** a établi qu'une erreur de synchronisation devient une **anomalie d'intégration STAT-08**, sans invalider la clôture locale.

Cette ADR formalise la relation entre **clôture locale** et **synchronisation externe**.

---

## 2. Décision

Nous décidons que la **clôture locale Interv360** est une **décision métier autonome**.

Une intervention peut être considérée comme **localement clôturée** lorsque les conditions métier de clôture sont remplies, **indépendamment** du résultat de la synchronisation CRM simulée.

La synchronisation externe est un **traitement post-clôture**.

Un échec de synchronisation :

- **ne rouvre pas** l'intervention ;
- **n'annule pas** la clôture ;
- **ne remet pas en cause** le compte rendu ;
- **ne remet pas en cause** la signature ou le motif d'absence ;
- **crée ou maintient** une anomalie d'intégration STAT-08.

Le statut local principal reste :

**STAT-06 — Clôturée**

L'état d'intégration peut porter en parallèle :

**STAT-08 — Anomalie d'intégration**

---

## 3. Conditions de clôture locale

Une intervention peut être clôturée localement si les éléments suivants sont présents :

| Condition | Obligatoire | Commentaire |
|-----------|-------------|-------------|
| Intervention réalisée ou résultat renseigné | Oui | Résultat métier de l'intervention |
| Compte rendu web | Oui | CR obligatoire (RG-R05) |
| Date / heure de clôture | Oui | Trace de clôture |
| Responsable / acteur de clôture | Oui | Traçabilité |
| Signature client | Non | Signature optionnelle (RG-R02) |
| Motif d'absence de signature | Oui si signature absente | Motif obligatoire si pas de signature |
| Historique de clôture | Oui | Traçabilité locale |

La **synchronisation CRM simulée n'est pas** une condition de clôture locale.

---

## 4. Règles de séparation

### 4.1 Clôture locale

La clôture locale représente :

- la fin métier du traitement de l'intervention ;
- la validation du compte rendu ;
- la conservation de la preuve ou du motif d'absence ;
- la stabilisation du statut local **STAT-06**.

### 4.2 Synchronisation externe

La synchronisation externe représente :

- une transmission vers le CRM simulé ;
- une copie ou notification de l'état de clôture ;
- un retour succès / échec ;
- un point de contrôle d'intégration.

Elle **ne devient pas** source de vérité du cycle SAV.

### 4.3 Échec de synchronisation

En cas d'échec :

- l'intervention reste **clôturée localement** ;
- une **anomalie d'intégration** est créée ou maintenue ;
- la gravité est qualifiée selon **ADR-003** ;
- le dashboard affiche l'anomalie ;
- une **reprise manuelle** peut être engagée.

---

## 5. États possibles après clôture

| Situation | Statut local | État intégration | Interprétation |
|-----------|--------------|------------------|----------------|
| Clôture locale OK, sync OK | STAT-06 Clôturée | Synchronisée | Cycle nominal terminé |
| Clôture locale OK, sync KO | STAT-06 Clôturée | STAT-08 Anomalie d'intégration | Clôture valide, sync à reprendre |
| Clôture locale OK, sync en attente | STAT-06 Clôturée | Sync en attente / à suivre | Clôture valide, retour externe non confirmé |
| Clôture locale non conforme | Non clôturée | Non applicable | Conditions métier non remplies |

---

## 6. Conséquences positives

Cette décision permet :

- de protéger la validité métier de la clôture ;
- d'éviter qu'un système externe bloque le cycle SAV local ;
- de clarifier le rôle d'Interv360 comme source de vérité locale ;
- de rendre les anomalies d'intégration visibles sans perturber le cycle métier ;
- de préparer un futur CRM réel avec une séparation claire des responsabilités.

---

## 7. Conséquences négatives / points d'attention

Cette décision implique :

- d'accepter une situation temporaire où Interv360 et le CRM simulé ne sont pas alignés ;
- de suivre explicitement les anomalies d'intégration ;
- de prévoir une vue dashboard claire ;
- de documenter les reprises manuelles ;
- de ne pas masquer les erreurs de synchronisation sous prétexte que la clôture locale est valide.

---

## 8. Alternatives considérées

### Alternative 1 — Bloquer la clôture tant que la synchronisation n'est pas réussie

**Rejetée.**

Cette option rendrait le cycle métier dépendant d'un système externe et pourrait empêcher une clôture métier pourtant valide.

### Alternative 2 — Annuler la clôture locale en cas d'échec sync

**Rejetée.**

L'échec de synchronisation ne remet pas en cause la réalisation terrain, le compte rendu ou la preuve de clôture.

### Alternative 3 — Faire du CRM simulé la source de vérité de clôture

**Rejetée.**

ADR-002 établit qu'Interv360 reste source de vérité locale.

### Alternative 4 — Ignorer la synchronisation après clôture

**Rejetée.**

Cela masquerait un point structurant d'intégration et empêcherait le suivi des anomalies.

---

## 9. Impacts sur les autres décisions

Cette ADR dépend de :

- **ADR-001** — Mapping durable des statuts ;
- **ADR-002** — Synchronisation CRM simulée ;
- **ADR-003** — Gestion des erreurs d'intégration.

Elle alimente directement :

- architecture fonctionnelle détaillée ;
- design dashboard / vue anomalies ;
- ADR future — Clôture sans signature ;
- ADR future — Stratégie de reprise manuelle.

---

## 10. Sources

| Source | Rôle |
|--------|------|
| `projects/interv360/04-adr/ADR-001-status-mapping.md` | STAT-06 / STAT-08 et séparation statuts / indicateurs |
| `projects/interv360/04-adr/ADR-002-simulated-crm-sync.md` | Interv360 source de vérité locale, CRM simulé cible |
| `projects/interv360/04-adr/ADR-003-integration-error-management.md` | STAT-08 et gestion des erreurs d'intégration |
| `projects/interv360/02-architecture/2026-06-28-closure-without-signature.md` | Conditions de clôture, signature optionnelle |
| `projects/interv360/03-process/process-analysis.md` | Analyse BPMN clôture / intégration |
| `projects/interv360/03-process/process-cycle-closure.md` | Synthèse BPMN |
| `projects/interv360/04-adr/adr-structuring-scope.md` | Cadrage ADR |

---

## 11. Statut de la décision

**Décision acceptée** pour le MVP Interv360.

Elle pourra être réévaluée si :

- le CRM réel impose une clôture transactionnelle ;
- un workflow d'approbation externe devient obligatoire ;
- les règles métier imposent une validation externe avant clôture ;
- le périmètre MVP est étendu à une intégration technique réelle.

---

## 12. Conclusion

La **clôture locale Interv360** est **dissociée** de la synchronisation externe.

Une intervention peut être clôturée localement en **STAT-06** même si une anomalie d'intégration **STAT-08** existe en parallèle.

Cette décision **clôture le premier lot** d'ADR structurantes Interv360.

---

*ADR-004 — Clôture locale vs synchronisation externe — Interv360 — SFIA — Accepted.*
