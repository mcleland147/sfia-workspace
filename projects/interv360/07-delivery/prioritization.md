# Interv360 — Prioritization

**Type** : Priorisation delivery  
**Projet** : Interv360 (PRJ-INTERV360)  
**Phase** : 07-delivery  
**Cycle** : Delivery preparation  
**Statut** : Draft  
**Branche** : `delivery/interv360-preparation`  
**Documents associés** : [`delivery-preparation-plan.md`](delivery-preparation-plan.md), [`mvp-scope.md`](mvp-scope.md), [`functional-lots.md`](functional-lots.md), [`macro-backlog.md`](macro-backlog.md)

---

## 1. Objectif

Ce document priorise les **lots fonctionnels** et les **éléments macro** Interv360.

Il vise à préparer le découpage delivery sans créer encore de user stories détaillées.

La priorisation doit permettre de :

- démontrer rapidement une **chaîne SAV bout en bout** ;
- sécuriser les **dépendances fonctionnelles** ;
- éviter de **surcharger le MVP** ;
- traiter les **risques fonctionnels** au bon moment ;
- préparer une **stratégie de découpage progressive**.

---

## 2. Méthode de priorisation

### Niveaux de priorité

| Priorité | Signification | Usage |
|----------|---------------|-------|
| **P0** | Indispensable à la démonstration MVP | À traiter en premier |
| **P1** | Important pour sécuriser le MVP complet | À traiter après la chaîne principale |
| **P2** | Utile pour le pilotage et la consolidation | À traiter après le flux cœur |

### Critères utilisés

| Critère | Description |
|---------|-------------|
| Valeur métier | Contribution directe à la chaîne SAV |
| Dépendance | Élément nécessaire pour débloquer les suivants |
| Démonstrabilité | Capacité à montrer rapidement un flux exploitable |
| Risque fonctionnel | Point structurant à valider tôt |
| Simplicité MVP | Capacité à rester dans un périmètre livrable |

### Sous-priorités

| Sous-priorité | Usage |
|---------------|-------|
| **P0-A** | Strict minimum pour démonstration du flux |
| **P0-B** | Complément utile pour rendre le flux exploitable |
| **P0-C** | Raffinement MVP non bloquant mais utile |
| **P1-A** | Visibilité flux simulé et anomalie |
| **P1-B** | Robustesse fonctionnelle complémentaire |
| **P2-A** | Pilotage SAV opérationnel |
| **P2-B** | Consolidation dirigeant et garde-fous de séparation |

---

## 3. Priorisation des lots

| Lot | Nom | Priorité | Justification |
|-----|-----|----------|---------------|
| **LOT-01** | Socle demandes SAV | **P0** | Point d'entrée — sans demande, pas de chaîne |
| **LOT-02** | Qualification et fiche demande | **P0** | Cœur métier — demande exploitable |
| **LOT-03** | Planification et affectation | **P0** | Transformation demande → intervention planifiée |
| **LOT-04** | Intervention terrain et compte rendu | **P0** | Exécution terrain et production CR |
| **LOT-05** | Clôture locale | **P0** | Finalisation cycle opérationnel local |
| **LOT-06** | Intégration CRM simulée | **P1** | Promesse d'intégration sans CRM réel |
| **LOT-07** | Anomalies d'intégration et reprise manuelle | **P1** | Anomalies visibles et non bloquantes |
| **LOT-08** | Pilotage SAV et retards | **P2** | Visibilité opérationnelle — dépend des lots P0 |
| **LOT-09** | Vue dirigeant MVP | **P2** | Consolidation dirigeant — dépend de LOT-08 |

### P0 — Chaîne SAV démontrable

LOT-01 à LOT-05 constituent le **flux cœur** : création → qualification → planification → intervention → clôture.

### P1 — Intégration simulée et anomalies

LOT-06 et LOT-07 sécurisent la **promesse d'intégration** sans dépendre d'un CRM réel.

### P2 — Pilotage et consolidation

LOT-08 et LOT-09 apportent **visibilité et pilotage**, mais dépendent d'un minimum de données opérationnelles issues des lots P0.

---

## 4. Priorisation des éléments macro P0

Tous les éléments **MB-001 à MB-029** sont **P0** — ils couvrent la chaîne SAV opérationnelle minimale.

| ID | Lot | Élément macro | Priorité | Sous-priorité | Justification |
|----|-----|---------------|----------|:-------------:|---------------|
| MB-001 | LOT-01 | Créer une demande SAV manuelle | P0 | **P0-A** | Entrée flux — création STAT-01 |
| MB-002 | LOT-01 | Recevoir une demande simulée | P0 | P0-B | Multi-canal — complète l'entrée |
| MB-003 | LOT-01 | Afficher la liste des demandes | P0 | **P0-A** | Point d'accès principal |
| MB-004 | LOT-01 | Rechercher et filtrer les demandes | P0 | P0-B | Exploitabilité liste |
| MB-005 | LOT-01 | Accéder à une fiche demande | P0 | **P0-A** | Navigation essentielle |
| MB-006 | LOT-01 | Afficher le statut et le canal d'origine | P0 | P0-B | Visibilité STAT et canal |
| MB-007 | LOT-02 | Consulter le détail d'une demande | P0 | **P0-A** | Fiche = source détaillée |
| MB-008 | LOT-02 | Modifier les informations principales | P0 | P0-B | Complétude RG-C05 |
| MB-009 | LOT-02 | Réaliser la qualification minimale | P0 | **P0-A** | Checklist qualification |
| MB-010 | LOT-02 | Passer une demande en qualifiée | P0 | **P0-A** | STAT-01 → STAT-02 |
| MB-011 | LOT-02 | Afficher l'historique léger | P0 | P0-C | Traçabilité légère |
| MB-012 | LOT-02 | Maintenir la fiche comme source détaillée | P0 | P0-C | Garde-fou documenté |
| MB-013 | LOT-03 | Créer une intervention depuis une demande qualifiée | P0 | **P0-A** | Lien demande → intervention |
| MB-014 | LOT-03 | Sélectionner un créneau d'intervention | P0 | **P0-A** | Planification créneau |
| MB-015 | LOT-03 | Affecter un technicien | P0 | **P0-A** | Affectation terrain |
| MB-016 | LOT-03 | Visualiser un planning simple | P0 | P0-B | Vue jour opérationnelle |
| MB-017 | LOT-03 | Passer une intervention en planifiée | P0 | **P0-A** | STAT-03 |
| MB-018 | LOT-03 | Identifier les retards potentiels | P0 | P0-C | Visibilité STAT-07 précoce |
| MB-019 | LOT-04 | Consulter une intervention côté technicien | P0 | **P0-A** | Parcours technicien |
| MB-020 | LOT-04 | Afficher les informations essentielles terrain | P0 | P0-B | Contexte intervention |
| MB-021 | LOT-04 | Saisir un compte rendu simple | P0 | **P0-A** | CR obligatoire |
| MB-022 | LOT-04 | Indiquer le résultat d'intervention | P0 | **P0-A** | Résultat métier |
| MB-023 | LOT-04 | Gérer la signature optionnelle | P0 | P0-C | Signature ou motif absence |
| MB-024 | LOT-04 | Préparer la clôture locale | P0 | **P0-A** | Pré-clôture |
| MB-025 | LOT-05 | Valider le compte rendu | P0 | P0-B | Validation avant clôture |
| MB-026 | LOT-05 | Clôturer localement une intervention | P0 | **P0-A** | STAT-06 — cœur clôture |
| MB-027 | LOT-05 | Afficher le statut clôturé | P0 | **P0-A** | Visibilité clôture |
| MB-028 | LOT-05 | Préparer le retour CRM simulé | P0 | P0-B | Pont vers LOT-06 |
| MB-029 | LOT-05 | Garantir le non-blocage par synchronisation externe | P0 | P0-B | Garde-fou ADR-004 |

### Synthèse sous-priorités P0

| Sous-priorité | Éléments |
|:-------------:|----------|
| **P0-A** | MB-001, MB-003, MB-005, MB-007, MB-009, MB-010, MB-013, MB-014, MB-015, MB-017, MB-019, MB-021, MB-022, MB-024, MB-026, MB-027 |
| **P0-B** | MB-002, MB-004, MB-006, MB-008, MB-016, MB-020, MB-025, MB-028, MB-029 |
| **P0-C** | MB-011, MB-012, MB-018, MB-023 |

---

## 5. Priorisation des éléments macro P1

Tous les éléments **MB-030 à MB-040** sont **P1**.

| ID | Lot | Élément macro | Priorité | Sous-priorité | Justification |
|----|-----|---------------|----------|:-------------:|---------------|
| MB-030 | LOT-06 | Identifier les demandes issues du CRM simulé | P1 | **P1-A** | Canal CRM visible |
| MB-031 | LOT-06 | Simuler un retour post-clôture | P1 | **P1-A** | Retour sync représentatif |
| MB-032 | LOT-06 | Afficher l'état de synchronisation | P1 | **P1-A** | Visibilité sync |
| MB-033 | LOT-06 | Simuler un échec de synchronisation | P1 | **P1-A** | Scénario échec testable |
| MB-034 | LOT-06 | Conserver Interv360 comme source locale | P1 | P1-B | Garde-fou source vérité |
| MB-035 | LOT-07 | Afficher les anomalies d'intégration | P1 | **P1-A** | STAT-08 visible |
| MB-036 | LOT-07 | Expliquer l'anomalie avec un message métier | P1 | **P1-A** | Compréhension métier |
| MB-037 | LOT-07 | Accéder à la vue suivi erreurs intégration | P1 | **P1-A** | Écran anomalies |
| MB-038 | LOT-07 | Réaliser une reprise manuelle simple | P1 | P1-B | Traitement anomalie |
| MB-039 | LOT-07 | Distinguer anomalie et statut métier | P1 | **P1-A** | Garde-fou STAT-08 |
| MB-040 | LOT-07 | Empêcher la réouverture d'intervention par anomalie | P1 | **P1-A** | Garde-fou cycle SAV |

### Synthèse sous-priorités P1

| Sous-priorité | Éléments |
|:-------------:|----------|
| **P1-A** | MB-030, MB-031, MB-032, MB-033, MB-035, MB-036, MB-037, MB-039, MB-040 |
| **P1-B** | MB-034, MB-038 |

**P1-A** couvre la visibilité du flux simulé et de l'anomalie. **P1-B** renforce la robustesse fonctionnelle, sans bloquer la première démonstration du flux cœur.

---

## 6. Priorisation des éléments macro P2

Tous les éléments **MB-041 à MB-051** sont **P2**.

| ID | Lot | Élément macro | Priorité | Sous-priorité | Justification |
|----|-----|---------------|----------|:-------------:|---------------|
| MB-041 | LOT-08 | Afficher un dashboard SAV simple | P2 | **P2-A** | Pilotage opérationnel |
| MB-042 | LOT-08 | Afficher les demandes en retard | P2 | **P2-A** | Visibilité retards |
| MB-043 | LOT-08 | Utiliser STAT-07 comme indicateur | P2 | **P2-A** | Garde-fou indicateur |
| MB-044 | LOT-08 | Afficher les volumes opérationnels essentiels | P2 | **P2-A** | KPI essentiels |
| MB-045 | LOT-08 | Accéder depuis le pilotage à la liste ou fiche | P2 | **P2-A** | Drill-down actionnable |
| MB-046 | LOT-08 | Maintenir le dashboard comme vue de pilotage | P2 | P2-B | Garde-fou source vérité |
| MB-047 | LOT-09 | Afficher une vue dirigeant consolidée | P2 | P2-B | Vue dirigeant |
| MB-048 | LOT-09 | Afficher les indicateurs essentiels | P2 | P2-B | Consolidation indicateurs |
| MB-049 | LOT-09 | Afficher les retards et anomalies en agrégé | P2 | P2-B | Lecture agrégée STAT-07/08 |
| MB-050 | LOT-09 | Séparer vue dirigeant et dashboard SAV | P2 | P2-B | Deux vues distinctes |
| MB-051 | LOT-09 | Limiter la vue dirigeant au MVP | P2 | P2-B | Pas de BI avancé |

### Synthèse sous-priorités P2

| Sous-priorité | Éléments |
|:-------------:|----------|
| **P2-A** | MB-041, MB-042, MB-043, MB-044, MB-045 |
| **P2-B** | MB-046, MB-047, MB-048, MB-049, MB-050, MB-051 |

**P2-A** permet le pilotage SAV opérationnel. **P2-B** apporte la consolidation dirigeant et les garde-fous de séparation.

---

## 7. Séquence recommandée de réalisation

| Séquence | Contenu | Objectif |
|----------|---------|----------|
| **1 — Flux SAV minimal démontrable** | LOT-01 à LOT-05 ; éléments **P0-A** | Montrer une demande créée, qualifiée, planifiée, réalisée et clôturée localement |
| **2 — Flux SAV exploitable** | Éléments **P0-B** et **P0-C** | Ajouter recherche, filtres, informations complémentaires, historique léger, signature optionnelle et non-blocage sync |
| **3 — Intégration simulée** | LOT-06 ; éléments **P1-A** CRM | Montrer la réception CRM simulée et le retour post-clôture |
| **4 — Anomalies et reprise** | LOT-07 ; éléments **P1-A** / **P1-B** | Montrer que les anomalies sont visibles, compréhensibles et non bloquantes |
| **5 — Pilotage opérationnel** | LOT-08 ; éléments **P2-A** | Montrer le dashboard SAV simple et les retards |
| **6 — Vue dirigeant MVP** | LOT-09 ; éléments **P2-B** | Montrer une consolidation dirigeant limitée aux indicateurs essentiels |

### Détail séquence 1 — P0-A (16 éléments)

MB-001 → MB-003 → MB-005 → MB-007 → MB-009 → MB-010 → MB-013 → MB-014 → MB-015 → MB-017 → MB-019 → MB-021 → MB-022 → MB-024 → MB-026 → MB-027

**Résultat :** démonstration bout en bout en une trajectoire minimale.

---

## 8. Éléments volontairement non prioritaires

| Élément | Raison |
|---------|--------|
| CRM réel | Post-MVP — CRM simulé suffit |
| API réelle | Post-MVP — hors périmètre fonctionnel |
| BI complet | Post-MVP — dashboard et vue dirigeant limités |
| Planning avancé | Post-MVP — vue jour MVP suffisante |
| Notifications avancées | Post-MVP — parcours clôture d'abord |
| Habilitations avancées | Post-MVP — acteurs MVP couverts |
| Design system complet | Post-MVP — Figma suffisant |
| Application mobile native complète | Post-MVP — fiche + CR couvrent le parcours |
| Automatisation complète anomalies | Post-MVP — reprise manuelle en MVP |
| Audit avancé | Post-MVP — traçabilité légère suffisante |
| Portail client | Post-MVP — exclusion confirmée |

Ces éléments restent **post-MVP** et ne doivent **pas** être réintroduits dans la priorisation MVP.

---

## 9. Garde-fous de priorisation

- Ne **pas** prioriser un écran au détriment du **flux SAV**.
- Ne **pas** faire passer le **dashboard** avant la chaîne opérationnelle.
- Ne **pas** traiter le **CRM réel** dans le MVP.
- Ne **pas** bloquer la **clôture locale** sur le CRM simulé.
- Ne **pas** transformer **STAT-07 / STAT-08** en statuts métier.
- Ne **pas** transformer la **liste** ou le **dashboard** en source de vérité.
- Ne **pas** dépendre d'une **maquette Figma parfaite**.
- Ne **pas** créer de **user stories détaillées** dans ce document.

---

## 10. Synthèse de priorisation

| Niveau | Lots | Éléments macro | Objectif | Résultat attendu |
|--------|------|----------------|----------|------------------|
| **P0** | LOT-01 à LOT-05 | MB-001 à MB-029 | Flux SAV bout en bout | Demande clôturée localement (STAT-06) |
| **P1** | LOT-06 à LOT-07 | MB-030 à MB-040 | Intégration simulée | Sync et anomalies visibles, non bloquantes |
| **P2** | LOT-08 à LOT-09 | MB-041 à MB-051 | Pilotage | Dashboard SAV et vue dirigeant simples |

| Métrique | Valeur |
|----------|--------|
| Lots priorisés | 9 |
| Éléments macro priorisés | 51 |
| Éléments P0-A (démo minimale) | 16 |
| Séquences de réalisation | 6 |

---

## 11. Critères de sortie

| # | Critère | Validé |
|---|---------|:------:|
| 1 | Lots priorisés (P0 / P1 / P2) | ✅ |
| 2 | Éléments macro priorisés (MB-001 à MB-051) | ✅ |
| 3 | Sous-priorités P0-A / P0-B / P0-C définies | ✅ |
| 4 | Sous-priorités P1-A / P1-B définies | ✅ |
| 5 | Sous-priorités P2-A / P2-B définies | ✅ |
| 6 | Séquence de réalisation proposée (6 séquences) | ✅ |
| 7 | Post-MVP maintenu hors priorisation | ✅ |
| 8 | Garde-fous respectés | ✅ |
| 9 | Base prête pour stratégie de découpage delivery | ✅ |

---

## 12. Prochaine action

Le prochain livrable est :

**[`delivery-slicing-strategy.md`](delivery-slicing-strategy.md)**

**Objectif :** transformer la priorisation en **stratégie de découpage progressif** pour organiser la réalisation du MVP.

---

*Priorisation delivery Interv360 — Draft.*
