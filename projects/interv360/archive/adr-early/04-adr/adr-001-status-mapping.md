# ADR-001 — Mapping durable des statuts Interv360

**Projet** : PRJ-INTERV360  
**Phase** : 04-adr  
**Statut** : Accepted  
**Date** : 2026-06-28  
**Décision** : Formaliser le mapping durable des statuts Interv360  
**Branche** : `adr/interv360-structurantes`

---

## 1. Contexte

Le cycle de clarification et le cycle BPMN Interv360 ont fait émerger la nécessité de **stabiliser un mapping durable des statuts**.

Le processus SAV MVP manipule plusieurs familles de statuts :

- statuts métier du cycle SAV ;
- statuts opérationnels internes ;
- indicateurs dashboard ;
- états d'intégration ;
- états potentiellement synchronisables vers le CRM simulé.

Sans décision formelle, le risque est de mélanger :

- les statuts réellement porteurs du cycle métier ;
- les indicateurs de pilotage ;
- les anomalies internes ;
- les statuts à synchroniser vers un système externe.

Cette ADR vise à fixer le **modèle de statut du MVP Interv360**.

---

## 2. Décision

Nous décidons de structurer les statuts Interv360 selon **trois catégories** :

1. **Statuts métier internes**
2. **Statuts synchronisables CRM**
3. **Indicateurs internes / dashboard**

Le modèle MVP retient les **huit statuts** suivants :

| Code | Statut | Catégorie | Synchronisable CRM | Rôle |
|------|--------|-----------|-------------------|------|
| STAT-01 | À qualifier | Statut métier interne | Oui, si nécessaire | Demande créée mais non encore qualifiée |
| STAT-02 | Qualifiée | Statut métier interne | Oui | Demande exploitable |
| STAT-03 | Planifiée | Statut métier interne | Oui | Intervention planifiée et affectable |
| STAT-04 | En cours | Statut métier interne | Oui | Intervention démarrée / en réalisation |
| STAT-05 | En attente client | Statut métier interne | Oui, selon mapping CRM cible | Intervention suspendue temporairement |
| STAT-06 | Clôturée | Statut métier interne | Oui | Intervention clôturée localement |
| STAT-07 | En retard | Indicateur interne / dashboard | Non | Retard détecté, non bloquant |
| STAT-08 | Anomalie d'intégration | Indicateur interne / intégration | Non | Échec sync, anomalie interne, reprise manuelle |

---

## 3. Règles de mapping

### 3.1 Statuts métier internes

Les statuts **STAT-01 à STAT-06** représentent le cycle principal SAV :

```
À qualifier
→ Qualifiée
→ Planifiée
→ En cours
→ En attente client
→ En cours
→ Clôturée
```

**En attente client** est un état temporaire. Le retour normal se fait vers **En cours**.

### 3.2 Indicateur de retard

**STAT-07 En retard** n'est pas un statut bloquant du processus principal.

Il doit être traité comme :

- un indicateur dashboard ;
- un signal de pilotage ;
- une information de réajustement planning.

Il **ne doit pas** bloquer la progression du cycle SAV.

### 3.3 Anomalie d'intégration

**STAT-08 Anomalie d'intégration** n'invalide pas la clôture locale.

Une intervention peut être :

- **STAT-06 Clôturée** localement ;
- et porter en parallèle un indicateur **STAT-08 Anomalie d'intégration** si la synchronisation CRM échoue.

L'anomalie porte sur la **synchronisation**, pas sur la validité métier de la clôture.

### 3.4 Synchronisation CRM

Seuls les **statuts métier du cycle SAV** sont candidats à la synchronisation CRM.

Les indicateurs internes suivants **ne sont pas synchronisés** comme statuts CRM métier :

- **STAT-07 En retard** ;
- **STAT-08 Anomalie d'intégration**.

Ils peuvent en revanche être **visibles** dans Interv360 ou dans un dashboard interne.

---

## 4. Conséquences positives

Cette décision permet :

- de stabiliser le cycle métier MVP ;
- d'éviter de transformer les indicateurs dashboard en statuts métier ;
- de clarifier la synchronisation CRM ;
- de préserver la clôture locale en cas d'échec de sync ;
- de préparer les futurs écrans ;
- de faciliter les prochaines ADR sur CRM simulé et erreurs d'intégration.

---

## 5. Conséquences négatives / points d'attention

Cette décision implique :

- de maintenir une distinction claire entre statut métier et indicateur ;
- de documenter explicitement les statuts synchronisables ;
- de gérer le cas où un CRM cible ne supporterait pas certains statuts ;
- de prévoir une représentation lisible des indicateurs dans le dashboard ;
- de ne pas considérer STAT-08 comme un retour arrière métier.

---

## 6. Alternatives considérées

### Alternative 1 — Synchroniser tous les statuts vers le CRM

**Rejetée.**

Cette option aurait rendu le CRM dépendant des indicateurs internes Interv360, notamment En retard et Anomalie d'intégration.

### Alternative 2 — Réduire le modèle à quatre statuts simples

**Rejetée.**

Cette option aurait simplifié le modèle mais n'aurait pas couvert les besoins métier MVP :

- attente client ;
- clôture sans signature ;
- retard ;
- anomalie d'intégration.

### Alternative 3 — Faire de En retard un statut bloquant

**Rejetée.**

Le retard est un signal de pilotage, pas une étape métier bloquante.

### Alternative 4 — Faire de Anomalie d'intégration un statut de clôture KO

**Rejetée.**

L'échec de synchronisation ne remet pas en cause la clôture locale.

---

## 7. Impacts sur les autres décisions

Cette ADR alimente directement :

- **ADR-002** — Synchronisation CRM simulée ;
- **ADR-003** — Gestion des erreurs d'intégration ;
- **ADR-004** — Clôture locale vs synchronisation externe ;
- ADR future — Clôture sans signature ;
- ADR future — Stratégie de reprise manuelle.

---

## 8. Sources

| Source | Rôle |
|--------|------|
| `projects/interv360/02-architecture/status-mapping.md` | Source principale du mapping statuts |
| `projects/interv360/02-architecture/rules-rg-prioritization.md` | Règles RG liées aux statuts |
| `projects/interv360/03-process/process-analysis.md` | Correspondance BPMN / statuts |
| `projects/interv360/03-process/2026-06-28-process-cycle-closure.md` | Synthèse des décisions BPMN |
| `projects/interv360/04-adr/adr-structuring-scope.md` | Cadrage de la phase ADR |

---

## 9. Statut de la décision

**Décision acceptée** pour le MVP Interv360.

Elle pourra être réévaluée si :

- le CRM cible impose un modèle de statuts incompatible ;
- les règles d'intégration deviennent plus détaillées ;
- la synchronisation CRM passe d'un mode simulé à un mode réel ;
- le périmètre MVP est étendu.

---

## 10. Conclusion

Le **mapping durable des statuts Interv360** est formalisé.

Le cycle SAV repose sur **six statuts métier principaux** et **deux indicateurs internes** :

- STAT-07 En retard ;
- STAT-08 Anomalie d'intégration.

Cette décision constitue le socle des ADR suivantes sur la synchronisation CRM, les erreurs d'intégration et la clôture locale.

---

*ADR-001 — Mapping durable des statuts — Interv360 — SFIA — Accepted.*
