# Interv360 — Cadrage des ADR structurantes

**Projet** : PRJ-INTERV360  
**Phase** : 04-adr  
**Type** : Cadrage ADR  
**Statut** : Draft  
**Branche** : `adr/interv360-structurantes`

---

## 1. Objectif

Ce document ouvre la phase d'**instruction des ADR structurantes Interv360**.

Il s'appuie sur :

- le cadrage métier ;
- le cycle de clarification ;
- les règles RG priorisées ;
- le mapping des statuts ;
- les décisions de clôture sans signature ;
- le cycle BPMN `03-process`.

Cette phase vise à transformer les **ADR candidates** identifiées pendant l'analyse BPMN en **décisions d'architecture formalisées**.

Ce document **ne crée pas** encore les ADR formelles.

---

## 2. Sources principales

| Source | Rôle |
|--------|------|
| `projects/interv360/01-cadrage/business-framing.md` | Contexte métier |
| `projects/interv360/02-architecture/rules-rg-prioritization.md` | Règles RG priorisées |
| `projects/interv360/02-architecture/status-mapping.md` | Statuts MVP |
| `projects/interv360/02-architecture/closure-without-signature.md` | Règles de clôture |
| `projects/interv360/02-architecture/clarification-cycle-closure.md` | Synthèse du cycle clarification |
| `projects/interv360/03-process/process-analysis.md` | Analyse BPMN |
| `projects/interv360/03-process/process-cycle-closure.md` | Clôture BPMN |

---

## 3. ADR candidates à instruire

| Priorité | ADR candidate | Décision attendue |
|----------|---------------|-------------------|
| Haute | Mapping durable des statuts | Définir les statuts internes, statuts synchronisables et indicateurs dashboard |
| Haute | Synchronisation CRM simulée | Définir le rôle du CRM simulé dans le MVP |
| Haute | Gestion des erreurs d'intégration | Formaliser RG-I06 : gravité, anomalie, reprise manuelle |
| Haute | Clôture locale vs synchronisation externe | Confirmer que la clôture locale reste valide même si sync KO |
| Moyenne / Haute | Clôture sans signature | Formaliser signature optionnelle, motif obligatoire et CR obligatoire |
| Moyenne | Gestion des doublons | Formaliser détection, arbitrage manuel et absence de fusion automatique |
| Moyenne | Stratégie de reprise manuelle | Définir correction, relance, journalisation et visibilité dashboard |

---

## 4. ADR recommandées pour le premier lot

**Premier lot recommandé :**

1. ADR — Mapping durable des statuts
2. ADR — Synchronisation CRM simulée
3. ADR — Gestion des erreurs d'intégration
4. ADR — Clôture locale vs synchronisation externe

Ces quatre ADR structurent le **cœur fonctionnel du MVP** et conditionnent les futurs choix d'architecture fonctionnelle et de design.

---

## 5. ADR différables

Les ADR suivantes peuvent être instruites dans un **second lot** :

- Clôture sans signature ;
- Gestion des doublons ;
- Stratégie de reprise manuelle.

Elles restent importantes mais peuvent être traitées après les décisions structurantes sur statuts, CRM simulé et erreurs d'intégration.

---

## 6. Garde-fous

Cette phase ADR ne doit pas produire :

- backlog ;
- user stories ;
- cas de tests ;
- scénarios de tests ;
- code applicatif ;
- delivery ;
- publication Notion automatique.

Les ADR doivent rester des **décisions d'architecture documentées**, reliées aux sources existantes.

---

## 7. Résultat attendu de la phase ADR

À l'issue de la phase ADR, Interv360 doit disposer d'un socle de décisions formalisées permettant d'alimenter :

- l'architecture fonctionnelle détaillée ;
- le modèle de statuts ;
- les écrans et parcours ;
- la logique de synchronisation simulée ;
- la gestion des anomalies et reprises.

---

## 8. Conclusion

La phase ADR Interv360 peut être **ouverte**.

Le premier lot recommandé porte sur les décisions les plus structurantes :

- statuts ;
- CRM simulé ;
- erreurs d'intégration ;
- clôture locale vs synchronisation externe.

---

*Cadrage ADR structurantes — Interv360 — SFIA — Draft.*
