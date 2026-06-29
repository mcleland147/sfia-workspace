# Interv360 — INC-01 demo data

**Type** : Données de démonstration fonctionnelles  
**Projet** : Interv360 (PRJ-INTERV360)  
**Phase** : 07-delivery  
**Cycle** : Implementation planning  
**Incrément** : INC-01 — Flux SAV minimal démontrable  
**Statut** : Draft  
**Branche** : `delivery/interv360-implementation-planning`  
**Documents associés** : [`implementation-planning-plan.md`](implementation-planning-plan.md), [`technical-design-summary.md`](technical-design-summary.md), [`inc-01-technical-qa-planning.md`](inc-01-technical-qa-planning.md), [`inc-01-status-rules.md`](inc-01-status-rules.md), [`inc-01-data-model.md`](inc-01-data-model.md)

---

## 1. Objectif

Ce document formalise les données de démonstration nécessaires pour présenter le flux :

**INC-01 — Flux SAV minimal démontrable**

L'objectif est de disposer d'un jeu de données fonctionnel, fictif et cohérent pour dérouler le chemin nominal :

**STAT-01 → STAT-02 → STAT-03 → STAT-04 → STAT-06**

Ce document **ne crée pas** :

- de données réelles ;
- de données personnelles réelles ;
- de jeu de test automatisé ;
- de script ;
- de fichier CSV / JSON exécutable ;
- de SQL ;
- de code ;
- d'API.

---

## 2. Principes des données de démonstration

Les données de démonstration doivent être :

- fictives ;
- simples ;
- cohérentes avec INC-01 ;
- suffisantes pour dérouler RS-01 à RS-05 ;
- compréhensibles par un responsable SAV ;
- alignées avec le modèle de données conceptuel ;
- alignées avec les règles de statuts ;
- non dépendantes d'un CRM réel ;
- non dépendantes d'un dashboard ;
- non automatisées.

---

## 3. Jeu de démonstration principal

| Élément | Valeur de démonstration |
|---------|-------------------------|
| **Référence demande** | `SAV-DEMO-001` |
| **Libellé / motif** | `Machine client en panne intermittente` |
| **Demandeur / client** | `Client Démo Industrie` |
| **Site client** | `Lyon Démo` |
| **Canal minimal** | `Saisie manuelle Interv360` |
| **Priorité** | `Normale` |
| **Statut initial** | `STAT-01 — À qualifier` |
| **Technicien** | `Technicien Démo 01` |
| **Créneau** | `Créneau démonstration J+1 matin` |
| **Résultat attendu** | `Demande clôturée localement en STAT-06` |

Ces valeurs sont **fictives** et ne doivent **pas** être assimilées à des données réelles.

---

## 4. Données RS-01 — Socle demande SAV

| Donnée | Valeur | Usage |
|--------|--------|-------|
| **Référence demande** | `SAV-DEMO-001` | Identification liste / fiche |
| **Motif** | `Machine client en panne intermittente` | Contexte métier |
| **Demandeur / client** | `Client Démo Industrie` | Contexte demande |
| **Site** | `Lyon Démo` | Localisation fictive |
| **Canal** | `Saisie manuelle Interv360` | Origine |
| **Priorité** | `Normale` | Priorisation simple |
| **Date création** | `Date de démonstration` | Contexte temporel |
| **Statut** | `STAT-01 — À qualifier` | État initial |

**Critère de démonstration RS-01 :** la demande doit être visible dans la liste et accessible en fiche avec le statut STAT-01.

---

## 5. Données RS-02 — Qualification minimale

| Donnée | Valeur | Usage |
|--------|--------|-------|
| **Demande associée** | `SAV-DEMO-001` | Lien qualification |
| **Checklist qualification** | `Contexte confirmé / impact identifié / intervention nécessaire` | Passage STAT-02 |
| **Informations obligatoires** | `Client, motif, priorité, site, besoin intervention` | Complétude minimale |
| **Responsable qualification** | `Responsable SAV Démo` | Acteur fictif |
| **Date qualification** | `Date de démonstration` | Traçabilité |
| **Statut cible** | `STAT-02 — Qualifiée` | Résultat RS-02 |

**Critère de démonstration RS-02 :** la demande passe en STAT-02 uniquement après qualification minimale.

---

## 6. Données RS-03 — Planification intervention

| Donnée | Valeur | Usage |
|--------|--------|-------|
| **Référence intervention** | `INT-DEMO-001` | Identification intervention |
| **Demande associée** | `SAV-DEMO-001` | Lien demande / intervention |
| **Créneau** | `J+1 matin` | Planification simple |
| **Technicien affecté** | `Technicien Démo 01` | Affectation |
| **Type intervention** | `Diagnostic et remise en service` | Contexte terrain |
| **Statut cible** | `STAT-03 — Planifiée` | Résultat RS-03 |

**Critère de démonstration RS-03 :** STAT-03 est appliqué uniquement après intervention créée, créneau sélectionné et technicien affecté.

---

## 7. Données RS-04 — Réalisation terrain et compte rendu

| Donnée | Valeur | Usage |
|--------|--------|-------|
| **Intervention associée** | `INT-DEMO-001` | Lien intervention |
| **Technicien** | `Technicien Démo 01` | Acteur terrain |
| **Commentaire CR** | `Contrôle effectué, défaut intermittent reproduit puis corrigé.` | Synthèse terrain |
| **Action réalisée** | `Réglage et contrôle de fonctionnement` | Contexte intervention |
| **Résultat intervention** | `Remise en service effectuée` | Issue métier |
| **Statut cible** | `STAT-04 — En cours` | Réalisation / CR saisi |

**Critère de démonstration RS-04 :** le CR et le résultat sont liés à l'intervention et exploitables pour la clôture.

---

## 8. Données RS-05 — Clôture locale STAT-06

| Donnée | Valeur | Usage |
|--------|--------|-------|
| **Demande associée** | `SAV-DEMO-001` | Demande à clôturer |
| **Intervention associée** | `INT-DEMO-001` | Intervention réalisée |
| **CR disponible** | `Oui` | Précondition clôture |
| **Résultat exploitable** | `Oui` | Précondition clôture |
| **Décision clôture** | `Clôture locale validée` | Action métier |
| **Statut cible** | `STAT-06 — Clôturée localement` | Résultat cible |
| **Dépendance CRM** | `Aucune` | Garde-fou |
| **Sync externe** | `Non bloquante` | Garde-fou |

**Critère de démonstration RS-05 :** STAT-06 est atteint localement et visible dans la liste et la fiche sans dépendre d'un CRM ou d'une synchronisation externe.

---

## 9. Journal fonctionnel minimal

| Étape | Action | Ancien statut | Nouveau statut | Acteur fonctionnel |
|-------|--------|---------------|----------------|--------------------|
| 1 | Création demande | — | STAT-01 | Responsable SAV Démo |
| 2 | Qualification validée | STAT-01 | STAT-02 | Responsable SAV Démo |
| 3 | Intervention planifiée | STAT-02 | STAT-03 | Responsable SAV Démo |
| 4 | CR saisi | STAT-03 | STAT-04 | Technicien Démo 01 |
| 5 | Clôture locale | STAT-04 | STAT-06 | Responsable SAV Démo |

Le journal est **fonctionnel** et **minimal**. Il ne constitue **pas** un audit complet.

---

## 10. Données hors démonstration INC-01

| Donnée exclue | Raison |
|---------------|--------|
| **Données client réelles** | Interdit / inutile pour démo |
| **Identifiant CRM réel** | CRM hors INC-01 |
| **Retour synchronisation CRM** | Non bloquant / hors INC-01 |
| **Anomalie intégration** | STAT-08 hors INC-01 |
| **Retard** | STAT-07 hors INC-01 |
| **Dashboard** | Hors INC-01 |
| **BI** | Hors INC-01 |
| **Pièces jointes avancées** | Hors INC-01 |
| **Signature avancée** | Hors INC-01 |
| **Multi-interventions** | Post-MVP |

---

## 11. Utilisation prévue des données

| Usage | Description |
|-------|-------------|
| **Démonstration métier** | Dérouler le flux complet |
| **Scénarios QA** | Base des scénarios nominaux |
| **Scénarios de refus** | Comparaison avec cas invalides |
| **Estimation** | Vérifier la couverture fonctionnelle |
| **Planification** | Structurer les séquences RS |
| **Backlog réalisation** | Illustrer les éléments à préparer |

---

## 12. Risques liés aux données de démonstration

| Risque | Impact | Réduction |
|--------|--------|-----------|
| **Données trop réalistes** | Confusion avec données réelles | Garder libellés Démo |
| **Données trop pauvres** | Démo faible | Couvrir RS-01 à RS-05 |
| **Données trop complexes** | Élargissement INC-01 | Rester minimal |
| **CRM implicite** | Blocage | Aucune donnée CRM |
| **STAT-07/08 introduits** | Confusion | Hors démo |
| **Journal trop riche** | Surcharge | Journal minimal |
| **Données non alignées statuts** | Incohérence | Vérifier chemin nominal |

---

## 13. Décisions retenues

| Décision | Statut |
|----------|--------|
| Jeu de démonstration unique principal | Retenu |
| Données fictives uniquement | Retenu |
| Aucune donnée personnelle réelle | Retenu |
| Chemin STAT-01 à STAT-06 couvert | Retenu |
| RS-01 à RS-05 couverts | Retenu |
| Journal fonctionnel minimal | Retenu |
| Aucun CRM réel | Retenu |
| Aucun dashboard | Retenu |
| Aucun fichier exécutable | Retenu |
| Aucun test automatisé | Retenu |

---

## 14. Garde-fous

- ne pas utiliser de données réelles ;
- ne pas utiliser de données personnelles réelles ;
- ne pas créer de CSV / JSON exécutable ;
- ne pas créer de SQL ;
- ne pas créer de script ;
- ne pas créer de test automatisé ;
- ne pas introduire CRM réel ;
- ne pas rendre la synchronisation bloquante ;
- ne pas ajouter dashboard / BI ;
- ne pas activer STAT-07 / STAT-08 ;
- ne pas élargir INC-01.

---

## 15. Critères de sortie

- [x] jeu de démonstration principal défini ;
- [x] données RS-01 définies ;
- [x] données RS-02 définies ;
- [x] données RS-03 définies ;
- [x] données RS-04 définies ;
- [x] données RS-05 définies ;
- [x] journal fonctionnel minimal défini ;
- [x] données hors démonstration listées ;
- [x] usages prévus listés ;
- [x] risques identifiés ;
- [x] décisions retenues listées ;
- [x] garde-fous repris.

---

## 16. Prochaine action

Le prochain livrable est :

`inc-01-qa-scenarios.md`

**Objectif :** décrire les scénarios QA métier détaillés à partir des données de démonstration, sans automatisation.
