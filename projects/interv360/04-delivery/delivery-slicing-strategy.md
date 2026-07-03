# Interv360 — Delivery slicing strategy

**Type** : Stratégie de découpage delivery  
**Projet** : Interv360 (PRJ-INTERV360)  
**Phase** : 04-delivery  
**Cycle** : Delivery preparation  
**Statut** : Draft  
**Branche** : `delivery/interv360-preparation`  
**Documents associés** : [`delivery-preparation-plan.md`](delivery-preparation-plan.md), [`mvp-scope.md`](mvp-scope.md), [`functional-lots.md`](functional-lots.md), [`macro-backlog.md`](macro-backlog.md), [`prioritization.md`](prioritization.md)

---

## 1. Objectif

Ce document définit la **stratégie de découpage progressif** du delivery Interv360.

Il transforme la priorisation **P0 / P1 / P2** en **incréments de réalisation cohérents**.

L'objectif est de permettre une progression :

- **démontrable** rapidement ;
- alignée avec la **chaîne SAV** ;
- **sécurisée** fonctionnellement ;
- non dépendante d'une **maquette Figma parfaite** ;
- non surdimensionnée par des fonctions **post-MVP**.

Ce document **ne constitue pas** un sprint planning détaillé et **ne crée pas** de user stories.

**6 incréments** (INC-01 à INC-06) couvrent les **51 éléments macro** (MB-001 à MB-051).

---

## 2. Principes de découpage

La stratégie de découpage suit les principes suivants :

- livrer d'abord un **flux SAV minimal bout en bout** ;
- découper par **valeur métier démontrable** plutôt que par écran isolé ;
- faire passer le **flux opérationnel** avant les dashboards ;
- traiter l'**intégration simulée** après la clôture locale ;
- conserver **Interv360** comme source de vérité locale ;
- maintenir **STAT-07** et **STAT-08** comme indicateurs ;
- ne **pas** dépendre du CRM réel ;
- ne **pas** dépendre d'un design system complet ;
- garder les éléments **post-MVP** hors découpage initial.

---

## 3. Vue d'ensemble des incréments

| Incrément | Nom | Priorité couverte | Objectif |
|-----------|-----|-------------------|----------|
| **INC-01** | Flux SAV minimal démontrable | P0-A | Chaîne SAV bout en bout — première démo |
| **INC-02** | Flux SAV exploitable | P0-B / P0-C | Enrichissement quotidien du flux |
| **INC-03** | Intégration CRM simulée | P1-A / P1-B (partiel) | Flux CRM représentatif sans CRM réel |
| **INC-04** | Anomalies et reprise manuelle | P1-A / P1-B | Anomalies visibles et non bloquantes |
| **INC-05** | Pilotage SAV opérationnel | P2-A | Dashboard SAV et retards |
| **INC-06** | Vue dirigeant MVP | P2-B | Consolidation dirigeant limitée |

---

## 4. INC-01 — Flux SAV minimal démontrable

| Élément | Détail |
|---------|--------|
| **Objectif** | Démontrer une demande SAV créée, qualifiée, planifiée, réalisée et clôturée localement |
| **Priorité** | **P0-A** |
| **Lots concernés** | LOT-01, LOT-02, LOT-03, LOT-04, LOT-05 |

### Éléments macro inclus (16)

MB-001, MB-003, MB-005, MB-007, MB-009, MB-010, MB-013, MB-014, MB-015, MB-017, MB-019, MB-021, MB-022, MB-024, MB-026, MB-027

### Résultat attendu

Démonstration bout en bout du flux SAV minimal :

**création demande → consultation fiche → qualification → intervention planifiée → compte rendu → clôture locale STAT-06**

### Garde-fous

- aucun dashboard requis ;
- aucun CRM réel requis ;
- aucune intégration réelle requise ;
- aucune maquette parfaite requise ;
- **STAT-06** doit être atteint localement.

---

## 5. INC-02 — Flux SAV exploitable

| Élément | Détail |
|---------|--------|
| **Objectif** | Rendre le flux SAV minimal plus exploitable au quotidien |
| **Priorité** | **P0-B / P0-C** |
| **Lots concernés** | Compléments LOT-01 à LOT-05 |

### Éléments macro inclus (13)

MB-002, MB-004, MB-006, MB-008, MB-011, MB-012, MB-016, MB-018, MB-020, MB-023, MB-025, MB-028, MB-029

### Résultat attendu

Le flux reste identique à INC-01, mais devient plus utilisable :

- entrée multi-canal simulée ;
- recherche et filtres ;
- statut et canal visibles ;
- informations principales modifiables ;
- planning simple ;
- historique léger ;
- signature optionnelle ;
- non-blocage par synchronisation externe.

### Garde-fous

- ne pas transformer cet incrément en **CRM réel** ;
- ne pas ajouter de **workflow complexe** ;
- ne pas créer d'**audit avancé** ;
- ne pas étendre le planning au-delà du besoin MVP.

---

## 6. INC-03 — Intégration CRM simulée

| Élément | Détail |
|---------|--------|
| **Objectif** | Représenter le flux CRM sans dépendre d'un CRM réel |
| **Priorité** | **P1-A / P1-B** (partiel) |
| **Lots concernés** | LOT-06 — Intégration CRM simulée |

### Éléments macro inclus (5)

MB-030, MB-031, MB-032, MB-033, MB-034

### Résultat attendu

- demandes issues du CRM simulé identifiables ;
- retour post-clôture simulé ;
- état de synchronisation visible ;
- échec de synchronisation représentatif ;
- Interv360 reste source de vérité locale.

### Garde-fous

- CRM simulé ≠ source de vérité ;
- pas d'API réelle ;
- pas de connecteur réel ;
- **STAT-06** reste valide même si synchronisation KO.

---

## 7. INC-04 — Anomalies et reprise manuelle

| Élément | Détail |
|---------|--------|
| **Objectif** | Rendre les anomalies d'intégration visibles, compréhensibles et non bloquantes |
| **Priorité** | **P1-A / P1-B** |
| **Lots concernés** | LOT-07 — Anomalies d'intégration et reprise manuelle |

### Éléments macro inclus (6)

MB-035, MB-036, MB-037, MB-038, MB-039, MB-040

### Résultat attendu

- anomalie **STAT-08** visible ;
- message métier compréhensible ;
- vue suivi erreurs intégration accessible ;
- reprise manuelle simple ;
- distinction anomalie / statut métier ;
- anomalie **ne rouvre pas** l'intervention.

### Garde-fous

- STAT-08 reste un **indicateur** ;
- STAT-08 ne rouvre pas le cycle SAV ;
- pas d'automatisation complète de reprise ;
- pas de monitoring technique avancé.

---

## 8. INC-05 — Pilotage SAV opérationnel

| Élément | Détail |
|---------|--------|
| **Objectif** | Apporter une visibilité opérationnelle simple à partir du flux SAV |
| **Priorité** | **P2-A** |
| **Lots concernés** | LOT-08 — Pilotage SAV et retards |

### Éléments macro inclus (5)

MB-041, MB-042, MB-043, MB-044, MB-045

### Résultat attendu

- dashboard SAV simple ;
- demandes en retard visibles ;
- **STAT-07** utilisé comme indicateur ;
- volumes essentiels visibles ;
- accès depuis le dashboard vers liste ou fiche.

### Garde-fous

- dashboard ≠ source de vérité ;
- dashboard **après** flux SAV, pas avant ;
- pas de BI complet ;
- pas de reporting avancé ;
- pas de KPI décisionnels hors MVP.

---

## 9. INC-06 — Vue dirigeant MVP

| Élément | Détail |
|---------|--------|
| **Objectif** | Fournir une vue consolidée limitée aux indicateurs essentiels |
| **Priorité** | **P2-B** |
| **Lots concernés** | LOT-09 — Vue dirigeant MVP |

### Éléments macro inclus (6)

MB-046, MB-047, MB-048, MB-049, MB-050, MB-051

### Résultat attendu

- vue dirigeant consolidée ;
- indicateurs essentiels ;
- retards et anomalies agrégés ;
- séparation avec le dashboard SAV ;
- limitation explicite au MVP.

### Garde-fous

- vue dirigeant ≠ BI complet ;
- vue dirigeant ≠ dashboard SAV opérationnel ;
- pas d'analyse prédictive ;
- pas de reporting multi-entités ;
- pas d'exports complexes.

---

## 10. Dépendances entre incréments

| Incrément | Dépend de | Raison |
|-----------|-----------|--------|
| **INC-01** | — | Socle de démonstration — aucune dépendance |
| **INC-02** | INC-01 | Enrichissement du flux minimal |
| **INC-03** | INC-01, INC-02 | Nécessite clôture locale et préparation retour CRM simulé (MB-028) |
| **INC-04** | INC-03 | Anomalies issues de la synchronisation simulée |
| **INC-05** | INC-01, INC-02 | Nécessite données opérationnelles du flux SAV |
| **INC-06** | INC-05 | Consolidation après pilotage SAV opérationnel |

### Couverture des 51 MB

| Incrément | MB couverts | Nombre |
|-----------|-------------|:------:|
| INC-01 | MB-001 à MB-027 (sélection P0-A) | 16 |
| INC-02 | MB-002, 004, 006, 008, 011, 012, 016, 018, 020, 023, 025, 028, 029 | 13 |
| INC-03 | MB-030 à MB-034 | 5 |
| INC-04 | MB-035 à MB-040 | 6 |
| INC-05 | MB-041 à MB-045 | 5 |
| INC-06 | MB-046 à MB-051 | 6 |
| **Total** | MB-001 à MB-051 | **51** |

---

## 11. Stratégie de démonstration progressive

| Démo | Incréments inclus | Ce que l'on peut montrer |
|------|-------------------|--------------------------|
| **Démo 1** | INC-01 | Chaîne SAV minimale clôturée localement (STAT-06) |
| **Démo 2** | INC-01 + INC-02 | Chaîne SAV exploitable — filtres, multi-canal, planning |
| **Démo 3** | INC-01 à INC-03 | Chaîne SAV avec CRM simulé — réception et retour post-clôture |
| **Démo 4** | INC-01 à INC-04 | Anomalies visibles et non bloquantes — reprise manuelle |
| **Démo 5** | INC-01 à INC-05 | Pilotage opérationnel — dashboard SAV et retards |
| **Démo 6** | INC-01 à INC-06 | **MVP complet démontrable** — flux + intégration + pilotage + dirigeant |

**Recommandation :** viser **Démo 1** comme premier jalon delivery — preuve de valeur maximale avec périmètre minimal.

---

## 12. Ce qui ne doit pas être découpé maintenant

| Élément | Pourquoi hors découpage MVP |
|---------|----------------------------|
| CRM réel | MVP limité au CRM simulé |
| API réelle | Hors périmètre fonctionnel MVP |
| Notifications avancées | Post-validation parcours clôture |
| Planning avancé | Vue jour MVP suffisante |
| BI complet | Dashboard et vue dirigeant limités |
| Habilitations avancées | Acteurs MVP couverts |
| Design system complet | Figma suffisant, non bloquant |
| Mobile natif complet | Fiche intervention + CR couvrent le parcours |
| Automatisation anomalies | Reprise manuelle simple en MVP |
| Audit avancé | Traçabilité légère suffisante |
| Portail client | Exclusion confirmée |

---

## 13. Garde-fous de slicing

- Ne **pas** découper par écran uniquement — découper par **valeur démontrable**.
- Ne **pas** placer les dashboards avant le flux opérationnel.
- Ne **pas** créer d'incrément dépendant du **CRM réel**.
- Ne **pas** bloquer la clôture locale sur une synchronisation.
- Ne **pas** transformer STAT-07 / STAT-08 en statuts métier.
- Ne **pas** considérer Figma comme bloquant pour tous les écrans.
- Ne **pas** créer de user stories détaillées dans ce document.

---

## 14. Synthèse de slicing

| Incrément | Priorité | MB | Résultat principal | Statut cible |
|-----------|----------|:--:|-------------------|--------------|
| INC-01 | P0-A | 16 | Flux SAV minimal | **Premier démontrable** |
| INC-02 | P0-B/C | 13 | Flux exploitable | Amélioration MVP |
| INC-03 | P1 | 5 | CRM simulé | Intégration représentative |
| INC-04 | P1 | 6 | Anomalies | Robustesse fonctionnelle |
| INC-05 | P2-A | 5 | Pilotage SAV | Visibilité opérationnelle |
| INC-06 | P2-B | 6 | Vue dirigeant | Consolidation MVP |

---

## 15. Critères de sortie

| # | Critère | Validé |
|---|---------|:------:|
| 1 | Incréments delivery identifiés (6) | ✅ |
| 2 | Chaque incrément rattaché à des priorités | ✅ |
| 3 | Chaque incrément rattaché à des MB (51 au total) | ✅ |
| 4 | Dépendances explicites | ✅ |
| 5 | Stratégie de démo progressive définie (6 démos) | ✅ |
| 6 | Post-MVP maintenu hors découpage | ✅ |
| 7 | Garde-fous respectés | ✅ |
| 8 | Base prête pour critères de réalisation | ✅ |

---

## 16. Prochaine action

Le prochain livrable est :

**[`realization-criteria.md`](realization-criteria.md)**

**Objectif :** définir les critères permettant de considérer les incréments / lots **prêts à être réalisés**, sans créer encore de tests détaillés.

---

*Stratégie de découpage delivery Interv360 — Draft.*
