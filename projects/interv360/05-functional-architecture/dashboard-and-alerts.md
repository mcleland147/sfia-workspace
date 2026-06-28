# Interv360 — Dashboard, indicateurs et alertes

**Projet** : PRJ-INTERV360  
**Phase** : 05-functional-architecture  
**Type** : Architecture fonctionnelle — Dashboard et alertes  
**Statut** : Draft  
**Branche** : `arch/interv360-functional-detail`

---

## 1. Objectif

Ce document formalise la **vue fonctionnelle** du dashboard Interv360, des **indicateurs** et des **alertes**.

Il décrit :

- les objectifs du pilotage ;
- les indicateurs fonctionnels principaux ;
- les alertes à rendre visibles ;
- les liens avec STAT-07 et STAT-08 ;
- les vues attendues par profil ;
- les principes de priorisation ;
- les points de vigilance.

Ce document **ne produit pas** de maquette UI finale, de composant front, de code, de requête SQL, d'API, de modèle technique, de BPMN, de backlog, de user stories, de tests ou de delivery.

---

## 2. Principes structurants

| Principe | Description |
|----------|-------------|
| Dashboard visible | Le dashboard rend visibles les situations nécessitant attention |
| Non source de vérité | Le dashboard ne remplace pas les objets métier ni les décisions locales |
| Indicateurs internes | STAT-07 et STAT-08 sont des indicateurs internes |
| Séparation retard / anomalie | STAT-07 et STAT-08 doivent rester distingués |
| Priorisation métier | Les alertes doivent aider à décider sans automatiser les décisions |
| Traçabilité | Les situations affichées doivent être rattachables à l'historique |
| Sobriété MVP | Le dashboard doit rester exploitable et éviter la surabondance d'indicateurs |

---

## 3. Rôle fonctionnel du dashboard

Le dashboard Interv360 a pour rôle de donner une **vision opérationnelle** du cycle SAV.

Il permet de suivre :

- les demandes à qualifier ;
- les interventions planifiées ;
- les interventions en cours ;
- les interventions en attente client ;
- les interventions clôturées ;
- les retards ;
- les anomalies d'intégration ;
- les reprises manuelles à traiter.

Il **ne doit pas** :

- devenir source de vérité ;
- modifier directement les règles métier ;
- remplacer l'historique ;
- masquer les statuts métier principaux ;
- mélanger retard opérationnel et anomalie d'intégration.

---

## 4. Indicateurs fonctionnels principaux

| Indicateur | Description | Source fonctionnelle | Usage |
|------------|-------------|----------------------|-------|
| Demandes à qualifier | Demandes en STAT-01 | Demande SAV | Prioriser la qualification |
| Demandes qualifiées | Demandes en STAT-02 | Demande SAV | Préparer la planification |
| Interventions planifiées | Interventions en STAT-03 | Intervention / Planning | Suivre la charge à venir |
| Interventions en cours | Interventions en STAT-04 | Intervention terrain | Suivre l'activité terrain |
| Interventions en attente client | Interventions en STAT-05 | Intervention terrain | Identifier les blocages clients |
| Interventions clôturées | Interventions en STAT-06 | Clôture | Suivre la production clôturée |
| Interventions en retard | Indicateur STAT-07 | Planning / Intervention | Identifier les écarts planning |
| Anomalies d'intégration | Indicateur STAT-08 | Sync CRM simulée | Identifier les sync KO |
| Sync en attente | Sync non finalisée | Sync CRM simulée | Suivre les transmissions non terminées |
| Reprises à traiter | Anomalies nécessitant action | Anomalie / Reprise manuelle | Prioriser les corrections |

---

## 5. Alertes fonctionnelles

| Alerte | Déclencheur | Gravité possible | Effet attendu |
|--------|-------------|------------------|---------------|
| Demande non qualifiée | STAT-01 persistant | Information / métier | Attirer l'attention sur qualification |
| Intervention en retard | STAT-07 détecté | Métier | Prioriser l'intervention |
| Intervention en attente client | STAT-05 persistant | Information / métier | Suivre le blocage |
| Clôture sans signature | STAT-06 avec motif absence | Information | Rendre visible si besoin |
| Sync KO | STAT-08 | Bloquant sync | Traiter l'anomalie |
| Rejet fonctionnel sync | Rejet cible simulée | Bloquant métier / sync | Corriger ou compléter |
| Timeout sync | Absence de réponse cible simulée | Bloquant sync | Relancer ou qualifier |
| Reprise échouée | Relance KO | Bloquant sync | Escalader fonctionnellement |

---

## 6. STAT-07 — Retard

### 6.1 Définition fonctionnelle

**STAT-07** représente un indicateur interne de retard.

Il signale un écart entre la situation attendue dans le planning et l'état réel de l'intervention.

### 6.2 Principes

- **STAT-07** ne remplace pas le statut métier principal.
- **STAT-07** n'est pas synchronisé comme statut CRM métier.
- **STAT-07** doit être visible au dashboard.
- **STAT-07** peut concerner une intervention planifiée, en cours ou en attente.
- **STAT-07** doit rester distinct de **STAT-08**.

### 6.3 Exemples de lecture

| Situation | Lecture dashboard |
|-----------|-------------------|
| STAT-03 + STAT-07 | Intervention planifiée mais en retard |
| STAT-04 + STAT-07 | Intervention en cours avec dépassement |
| STAT-05 + STAT-07 | Intervention en attente client au-delà du délai attendu |

---

## 7. STAT-08 — Anomalie d'intégration

### 7.1 Définition fonctionnelle

**STAT-08** représente un indicateur interne d'anomalie d'intégration.

Il signale un problème lié à la synchronisation CRM simulée.

### 7.2 Principes

- **STAT-08** ne remplace pas le statut métier principal.
- **STAT-08** n'est pas synchronisé comme statut CRM métier.
- **STAT-08** peut coexister avec **STAT-06**.
- **STAT-08** ne rouvre pas automatiquement l'intervention.
- **STAT-08** doit être visible au dashboard.
- **STAT-08** doit être qualifié par gravité.

### 7.3 Exemples de lecture

| Situation | Lecture dashboard |
|-----------|-------------------|
| STAT-06 + STAT-08 Information | Clôturée localement, anomalie informative |
| STAT-06 + STAT-08 Bloquant métier | Clôturée localement, donnée à corriger |
| STAT-06 + STAT-08 Bloquant sync | Clôturée localement, sync à relancer ou qualifier |

---

## 8. Priorisation des alertes

| Priorité | Situation | Justification |
|----------|-----------|---------------|
| Haute | STAT-08 Bloquant sync | Transmission externe non finalisée |
| Haute | STAT-08 Bloquant métier | Donnée métier incohérente ou rejetée |
| Moyenne | STAT-07 sur intervention en cours | Retard opérationnel actif |
| Moyenne | STAT-05 persistant | Blocage client à suivre |
| Moyenne | Sync en attente prolongée | Transmission non finalisée |
| Basse | STAT-08 Information | Suivi non bloquant |
| Basse | Clôture sans signature avec motif | Situation conforme mais visible |

**Principes :**

- La priorité aide à trier.
- Elle ne déclenche pas de décision automatique.
- Une alerte prioritaire doit être explicable.
- La priorité doit rester fonctionnelle, pas technique.

---

## 9. Vues fonctionnelles attendues

### 9.1 Vue Manager SAV

| Besoin | Indicateurs utiles |
|--------|-------------------|
| Suivre l'activité globale | STAT-01 à STAT-06 |
| Identifier les retards | STAT-07 |
| Identifier les anomalies | STAT-08 par gravité |
| Prioriser les reprises | Reprises manuelles à traiter |
| Suivre les clôtures | STAT-06, sync OK / KO / en attente |

### 9.2 Vue Technicien

| Besoin | Indicateurs utiles |
|--------|-------------------|
| Voir ses interventions planifiées | STAT-03 |
| Voir ses interventions en cours | STAT-04 |
| Identifier attente client | STAT-05 |
| Comprendre les clôtures à finaliser | Conditions de clôture locales |
| Voir une anomalie liée à son intervention | STAT-08 si nécessaire fonctionnellement |

### 9.3 Vue Pilotage / supervision

| Besoin | Indicateurs utiles |
|--------|-------------------|
| Identifier les anomalies globales | STAT-08 par gravité |
| Suivre les sync en attente | Sync non finalisées |
| Suivre les retards | STAT-07 |
| Suivre les volumes | Demandes, interventions, clôtures |
| Suivre les reprises | Actions manuelles ouvertes |

---

## 10. Informations affichables par type d'alerte

| Type d'alerte | Informations fonctionnelles minimales |
|---------------|---------------------------------------|
| Retard STAT-07 | Intervention, planning prévu, statut métier courant, ancienneté du retard |
| Anomalie STAT-08 | Intervention, type d'erreur, gravité, dernière tentative, action attendue |
| Sync en attente | Intervention, date de clôture, durée d'attente, dernière situation |
| Attente client | Intervention, motif ou contexte, date de passage en attente |
| Clôture sans signature | Intervention, motif absence, date de clôture, technicien |
| Reprise manuelle | Anomalie, action attendue, responsable ou rôle cible |

---

## 11. Matrice dashboard / objets métier

| Objet métier | Rôle dashboard |
|--------------|----------------|
| Demande SAV | Alimente les demandes à qualifier / qualifiées |
| Intervention | Porte la majorité des statuts et indicateurs |
| Client | Donne le contexte de lecture |
| Équipement / site | Permet le filtre ou la lecture par contexte |
| Technicien | Permet la lecture par affectation |
| Planning | Source des retards STAT-07 |
| Compte rendu | Contexte des clôtures |
| Signature | Contexte des clôtures avec signature |
| Motif absence signature | Contexte des clôtures sans signature |
| Résultat intervention | Lecture de l'issue métier |
| Synchronisation CRM simulée | Source sync OK / KO / en attente |
| Anomalie intégration | Source STAT-08 |
| Gravité anomalie | Priorisation des alertes |
| Reprise manuelle | Suivi des actions à traiter |
| Indicateur pilotage | Synthèse dashboard |
| Historique | Justification et traçabilité |

---

## 12. Matrice dashboard / statuts

| Statut / indicateur | Rôle dashboard |
|---------------------|----------------|
| STAT-01 | Demandes à qualifier |
| STAT-02 | Demandes prêtes à planifier |
| STAT-03 | Interventions planifiées |
| STAT-04 | Interventions en cours |
| STAT-05 | Interventions en attente client |
| STAT-06 | Interventions clôturées |
| STAT-07 | Retards opérationnels |
| STAT-08 | Anomalies d'intégration |

---

## 13. Matrice dashboard / ADR

| Élément dashboard | ADR-001 | ADR-002 | ADR-003 | ADR-004 |
|-------------------|:-------:|:-------:|:-------:|:-------:|
| Distinction STAT-01 à STAT-06 | Oui | Non | Non | Non |
| STAT-07 comme indicateur interne | Oui | Non | Non | Non |
| STAT-08 comme indicateur interne | Oui | Oui | Oui | Oui |
| CRM simulé non source de vérité | Non | Oui | Non | Oui |
| Anomalies par gravité | Non | Non | Oui | Non |
| STAT-06 conservé si sync KO | Non | Oui | Oui | Oui |
| Dashboard non source de vérité | Oui | Oui | Oui | Oui |

---

## 14. Situations non retenues

| Situation | Raison |
|-----------|--------|
| Dashboard source de vérité | Contraire aux ADR et à l'architecture fonctionnelle |
| Fusion STAT-07 / STAT-08 | Retard et anomalie d'intégration sont deux natures différentes |
| Réouverture automatique sur STAT-08 | La clôture locale reste valide |
| Synchronisation CRM de STAT-07/08 | Indicateurs internes uniquement |
| Priorisation automatique décisionnelle | La priorité aide à décider mais ne décide pas |
| Maquette UI finale | Hors périmètre du document |
| Composants front | Hors périmètre du cycle |

---

## 15. Points de vigilance

- Ne pas surcharger le dashboard.
- Ne pas mélanger STAT-07 et STAT-08.
- Ne pas faire du dashboard une source de vérité.
- Ne pas masquer le statut métier principal.
- Ne pas déclencher de décision automatique depuis une alerte.
- Ne pas transformer cette vue en maquette UI.
- Ne pas introduire de composant technique.
- Ne pas contredire les ADR-001 à ADR-004.

---

## 16. Conclusion

Le dashboard Interv360 doit rester un **outil de visibilité et de priorisation**.

Il doit rendre lisibles :

- le cycle SAV ;
- les retards ;
- les anomalies d'intégration ;
- les synchronisations en attente ;
- les reprises manuelles ;
- les clôtures locales.

Il ne doit **pas** remplacer la source de vérité locale Interv360, ni transformer les indicateurs internes en statuts métier CRM.

---

*Dashboard et alertes — Interv360 — SFIA — Draft.*
