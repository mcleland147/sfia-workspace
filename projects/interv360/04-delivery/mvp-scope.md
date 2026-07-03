# Interv360 — MVP scope

**Type** : Périmètre MVP  
**Projet** : Interv360 (PRJ-INTERV360)  
**Phase** : 04-delivery  
**Cycle** : Delivery preparation  
**Statut** : Draft  
**Branche** : `delivery/interv360-preparation`  
**Documents associés** : [`delivery-preparation-plan.md`](delivery-preparation-plan.md), [`figma-first-screen-review.md`](../03-design/figma-first-screen-review.md)

---

## 1. Objectif

Ce document définit le **périmètre minimum livrable** du MVP Interv360.

Le MVP doit permettre de **démontrer une chaîne SAV exploitable de bout en bout**, sans chercher à couvrir toutes les variantes fonctionnelles ni les évolutions post-MVP.

Il reste aligné avec les décisions déjà prises :

- **Interv360** = source de vérité locale ;
- **CRM simulé** ≠ source de vérité ;
- **clôture locale** non bloquée par la synchronisation CRM ;
- **STAT-01 à STAT-06** = cycle de vie métier SAV ;
- **STAT-07** et **STAT-08** = indicateurs (pas statuts métier) ;
- **fiche demande** = référence opérationnelle détaillée.

**Sources principales :** `05-functional-architecture/`, `04-adr/` (ADR-001 à ADR-004), `06-ux-ui/`, `02-architecture/status-mapping.md`, revue Figma écran pilote.

---

## 2. Définition du MVP

Le MVP Interv360 est une **première version livrable** permettant de :

- créer ou recevoir une demande SAV ;
- qualifier la demande ;
- planifier une intervention ;
- affecter un technicien ;
- suivre l'intervention ;
- produire un compte rendu ;
- clôturer localement la demande / intervention ;
- visualiser les retards et anomalies d'intégration ;
- piloter un minimum l'activité SAV.

Le MVP **n'est pas** une version complète du produit. C'est une version **suffisamment cohérente** pour valider la chaîne de valeur SAV et préparer un découpage delivery structuré.

**Hors scope de ce document :** backlog détaillé, user stories, tests, code, API, SQL, BPMN, choix techniques d'implémentation.

---

## 3. Chaîne de valeur MVP

| Étape | Description | Statut / indicateur associé | Inclus MVP |
|-------|-------------|----------------------------|:----------:|
| 1. Réception / création de la demande | Création manuelle ou réception simulée CRM / email | **STAT-01** À qualifier | ✅ |
| 2. Qualification | Vérification contexte, checklist minimale, arbitrage doublon | **STAT-01 → STAT-02** Qualifiée | ✅ |
| 3. Planification | Positionnement créneau, rattachement demande / intervention | **STAT-03** Planifiée | ✅ |
| 4. Affectation | Affectation technicien (incluse dans la planification MVP) | **STAT-03** Planifiée | ✅ |
| 5. Réalisation intervention | Exécution terrain, suspension temporaire possible | **STAT-04** En cours ; **STAT-05** En attente client (optionnel MVP) | ✅ |
| 6. Compte rendu | Saisie CR, résultat intervention, signature optionnelle | Pré-clôture → **STAT-06** | ✅ |
| 7. Clôture locale | Clôture opérationnelle dans Interv360 | **STAT-06** Clôturée | ✅ |
| 8. Synchronisation CRM simulée | Tentative de retour vers cible externe représentative | Post-clôture — non bloquante | ✅ |
| 9. Gestion anomalie d'intégration | Visualisation, qualification, reprise manuelle simple | **STAT-08** Anomalie d'intégration | ✅ |
| 10. Pilotage retards | Visibilité retards opérationnels | **STAT-07** En retard | ✅ |

### Catalogue des statuts MVP

| Code | Libellé | Famille | Rôle MVP |
|------|---------|---------|----------|
| STAT-01 | À qualifier | Statut métier | Demande créée, non encore exploitable |
| STAT-02 | Qualifiée | Statut métier | Demande prête à planifier |
| STAT-03 | Planifiée | Statut métier | Intervention planifiée et affectée |
| STAT-04 | En cours | Statut métier | Intervention en réalisation |
| STAT-05 | En attente client | Statut métier | Suspension temporaire (retour vers En cours) |
| STAT-06 | Clôturée | Statut métier | Intervention clôturée localement |
| STAT-07 | En retard | **Indicateur** | Retard opérationnel — non bloquant |
| STAT-08 | Anomalie d'intégration | **Indicateur** | Échec sync — reprise manuelle, ne rouvre pas l'intervention |

**Rappel :** STAT-07 et STAT-08 sont des **indicateurs parallèles** — ils ne remplacent pas le statut métier principal et ne sont pas synchronisés comme statuts CRM métier (ADR-001, `status-and-transitions.md`).

---

## 4. Capacités incluses dans le MVP

| Domaine | Capacité MVP | Justification |
|---------|--------------|---------------|
| **Demandes SAV** | Création manuelle d'une demande | P9 Multi-canal, entrée flux SAV |
| | Consultation liste demandes | Point d'accès principal — écran pilote validé |
| | Consultation fiche demande | Référence opérationnelle détaillée |
| | Qualification demande (STAT-01 → STAT-02) | P1 Qualification — cœur métier |
| | Modification des informations principales | RG-C05 données minimales, complétude |
| | Suivi du statut métier | Cycle STAT-01 à STAT-06 visible |
| **Planification** | Planification d'une intervention | P2 Planification |
| | Visualisation planning simple (vue jour par défaut) | Décision atelier UX — `screen-inventory.md` |
| | Rattachement demande / intervention | Objet central intervention |
| | Affectation à un technicien | Inclus dans STAT-03 |
| **Intervention** | Consultation intervention technicien (mobile) | P3 Exécution terrain |
| | Saisie compte rendu simple | P4 Clôture — CR obligatoire |
| | Indication intervention réalisée | Transition vers clôture |
| | Clôture opérationnelle locale | ADR-004 — autonome vis-à-vis CRM |
| **Intégration CRM simulée** | Réception simulée d'une demande CRM | ADR-002 — cible représentative |
| | Synchronisation simulée de retour post-clôture | Non bloquante sur STAT-06 |
| | Visualisation anomalie d'intégration | ADR-003 — messages métier |
| | Reprise manuelle simple | Traitement fonctionnel anomalie |
| **Pilotage SAV** | Liste des demandes | Accès dossiers, filtres, recherche |
| | Suivi retards (STAT-07) | P7 Pilotage retards |
| | Dashboard SAV simple | Visibilité opérationnelle — top 5–7 KPI |
| | Vue dirigeant limitée aux indicateurs essentiels | Pilotage consolidé — séparé du dashboard SAV |
| **Gestion des statuts** | Cycle STAT-01 à STAT-06 | ADR-001 — mapping durable |
| | Indicateur STAT-07 | Retard — distinct du statut principal |
| | Indicateur STAT-08 | Anomalie intégration — distinct, ne rouvre pas |

---

## 5. Écrans inclus dans le MVP

| Écran | Inclus MVP | Rôle |
|-------|:----------:|------|
| **Liste demandes** | ✅ | Point d'accès demandes — **base design pilote validée** (`figma-first-screen-review.md`) |
| **Fiche demande SAV** | ✅ | Qualification, checklist minimale, détail opérationnel |
| **Planning** | ✅ | Planification, affectation, conflits / retards visibles |
| **Fiche intervention mobile** | ✅ | Exécution terrain technicien |
| **Compte rendu mobile** | ✅ | Clôture, CR, signature optionnelle |
| **Suivi erreurs intégration** | ✅ | Anomalies STAT-08, reprise manuelle |
| **Dashboard SAV** | ✅ | Pilotage opérationnel quotidien |
| **Vue dirigeant** | ✅ | Indicateurs essentiels consolidés |

**Précisions :**

- **Liste demandes** est la seule maquette Figma Design V2 explicitement validée à ce stade.
- Les autres écrans peuvent rester à un niveau **fonctionnel / spec** ou **Figma V1** dans un premier temps.
- Le MVP **ne bloque pas** sur une maquette Figma parfaite de tous les écrans (`figma-first-screen-review.md`).
- L'écran **Détail reprise manuelle** (`screen-inventory.md` #9) peut être traité comme **panneau ou complément** du suivi erreurs — pas bloquant pour le périmètre MVP initial.

---

## 6. Hors MVP

| Élément hors MVP | Raison |
|------------------|--------|
| Intégration CRM réelle | ADR-002 — CRM simulé uniquement en MVP |
| Authentification / habilitations avancées | Hors périmètre cadrage initial |
| Workflow complexe de validation | Simplification MVP — qualification directe |
| Optimisation avancée planning | Vue jour simple suffit |
| Notifications multicanales avancées | ADR architecture — notifications légères post-MVP |
| Reporting BI complet | Dashboard et vue dirigeant limités |
| Application mobile complète native | Écrans mobile terrain ciblés suffisent |
| Design system complet | Figma suffisant, non bloquant |
| Automatisation complète reprise anomalies | Reprise manuelle simple en MVP |
| Gestion multi-entités avancée | Hors cadrage MVP |
| Paramétrage administrateur complet | Hors MVP |
| Historique / audit avancé | Traçabilité légère MVP |
| SLA complexes | Indicateur retard STAT-07 suffit |
| Connecteurs externes multiples | Un flux CRM simulé représentatif |
| IA / portail client | Exclusions confirmées Figma V1 |
| Backlog détaillé / user stories | Livrable delivery suivant |

---

## 7. Reporté phase ultérieure

| Élément reporté | Phase cible indicative | Condition de reprise |
|-----------------|------------------------|----------------------|
| CRM réel | Post-MVP / intégration | Validation MVP sur CRM simulé |
| API d'intégration | Post-MVP technique | Périmètre fonctionnel stabilisé |
| Monitoring intégration avancé | Post-MVP | Volume anomalies réel |
| Notifications client avancées | Post-MVP | Parcours clôture validé |
| Planning avancé (semaine, optimisation) | Post-MVP | Vue jour MVP opérationnelle |
| BI / reporting enrichi | Post-MVP | Besoins dirigeant validés |
| Rôles et habilitations avancés | Post-MVP | Acteurs MVP couverts |
| Design system complet | Continu design | Écrans MVP livrés |
| Mobile enrichi (hors CR / fiche) | Post-MVP | Parcours technicien validé |
| Automatisation anomalies | Post-MVP | Reprise manuelle éprouvée |
| Audit complet | Post-MVP | Traçabilité légère en place |
| Signature structurée avancée | Post-MVP | Optionnel déjà acté |
| Portail client | Post-MVP | Exclusion confirmée |

---

## 8. Garde-fous MVP

- Ne **pas** transformer le dashboard en source de vérité.
- Ne **pas** transformer la liste en source de vérité détaillée — la **fiche demande** fait foi.
- Ne **pas** créer de nouveaux statuts au-delà de STAT-01 à STAT-08.
- Ne **pas** mélanger statuts métier (STAT-01 à STAT-06) et indicateurs (STAT-07, STAT-08).
- Ne **pas** bloquer la clôture locale (STAT-06) sur le succès de la synchronisation CRM simulée.
- Ne **pas** rouvrir une intervention à cause de STAT-08 — anomalie ≠ retour cycle SAV.
- Ne **pas** surdimensionner le MVP avec des fonctions hors phase (BI, CRM réel, multi-entités, etc.).
- Ne **pas** conditionner le delivery à une maquette Figma parfaite de tous les écrans.

---

## 9. Décisions structurantes

| Décision | Impact MVP |
|----------|------------|
| Interv360 source de vérité locale | Toutes les données opérationnelles portées dans l'application |
| CRM simulé | Un flux représentatif — réception et retour post-clôture |
| Clôture locale autonome | STAT-06 valide indépendamment du sync externe |
| Anomalies visibles mais non bloquantes | STAT-08 + reprise manuelle — pas de blocage cycle |
| Figma suffisant mais non bloquant | Liste demandes Design V2 validée ; autres écrans en spec / V1 |
| Priorité au flux SAV bout en bout | Chaîne création → clôture avant enrichissements |
| Backlog détaillé repoussé | Prochain livrable : lots fonctionnels puis macro backlog |
| Dashboard SAV / dirigeant séparés | Deux vues distinctes — pas de fusion |
| Signature optionnelle | Absence non bloquante — motif si absent |
| Checklist qualification minimale | RG-C05 — pas de fiche surchargée |

---

## 10. Critères de sortie du MVP scope

| # | Critère | Validé |
|---|---------|:------:|
| 1 | Chaîne SAV MVP définie (10 étapes) | ✅ |
| 2 | Capacités incluses listées par domaine | ✅ |
| 3 | Écrans MVP identifiés (8 écrans) | ✅ |
| 4 | Hors MVP explicite | ✅ |
| 5 | Éléments reportés identifiés | ✅ |
| 6 | Garde-fous repris | ✅ |
| 7 | Base prête pour découpage en lots fonctionnels | ✅ |
| 8 | Base prête pour backlog macro | ✅ |

---

## 11. Prochaine action

Le prochain livrable du cycle delivery est :

**[`functional-lots.md`](functional-lots.md)**

**Objectif :** découper le MVP en **lots fonctionnels cohérents et ordonnés**, en respectant les dépendances de la chaîne de valeur et les garde-fous documentés.

---

*Périmètre MVP Interv360 — Draft.*
