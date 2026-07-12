# Interv360 — Cadrage architecture fonctionnelle détaillée

**Projet** : PRJ-INTERV360
**Phase** : 05-functional-architecture
**Type** : Cadrage architecture fonctionnelle
**Statut** : Draft
**Branche** : `arch/interv360-functional-detail`

---

## 1. Objectif

Ce document ouvre le cycle d'**architecture fonctionnelle détaillée Interv360**.

Il s'appuie sur les cycles précédents :

- cadrage métier ;
- clarification fonctionnelle ;
- règles RG priorisées ;
- cycle BPMN ;
- ADR structurantes.

L'objectif est de transformer les décisions et processus validés en une **architecture fonctionnelle lisible, structurée et exploitable** pour la suite.

Ce document **ne produit pas** de backlog, de user stories, de tests, de code ou de delivery.

---

## 2. Sources principales

| Source | Rôle |
|--------|------|
| `projects/interv360/01-cadrage/business-framing.md` | Contexte métier |
| `projects/interv360/02-architecture/clarification-cycle-closure.md` | Synthèse clarification |
| `projects/interv360/02-architecture/rules-rg-prioritization.md` | Règles RG priorisées |
| `projects/interv360/02-architecture/status-mapping.md` | Statuts MVP |
| `projects/interv360/02-architecture/2026-06-28-closure-without-signature.md` | Règles de clôture |
| `projects/interv360/03-process/process-analysis.md` | Analyse BPMN |
| `projects/interv360/03-process/process-cycle-closure.md` | Synthèse BPMN |
| `projects/interv360/04-adr/ADR-001-status-mapping.md` | Mapping durable des statuts |
| `projects/interv360/04-adr/ADR-002-simulated-crm-sync.md` | Synchronisation CRM simulée |
| `projects/interv360/04-adr/ADR-003-integration-error-management.md` | Gestion erreurs intégration |
| `projects/interv360/04-adr/ADR-004-local-closure-vs-external-sync.md` | Clôture locale vs sync externe |
| `projects/interv360/04-adr/adr-cycle-closure.md` | Synthèse ADR |

---

## 3. Objectifs du cycle

Le cycle architecture fonctionnelle détaillée doit produire une vision structurée de :

- domaines fonctionnels ;
- responsabilités fonctionnelles ;
- objets métier ;
- statuts et transitions ;
- règles métier structurantes ;
- intégrations simulées ;
- anomalies et pilotage ;
- écrans / parcours à préparer pour la phase design.

---

## 4. Livrables recommandés

| Livrable | Rôle |
|----------|------|
| `functional-architecture-scope.md` | Cadrage du cycle |
| `functional-domains.md` | Domaines et responsabilités fonctionnelles |
| `business-objects.md` | Objets métier et relations |
| `status-and-transitions.md` | Statuts, transitions et règles associées |
| `integration-functional-view.md` | Vue fonctionnelle de la synchronisation CRM simulée |
| `dashboard-and-alerts.md` | Pilotage, retards, anomalies, alertes |
| `functional-architecture-summary.md` | Synthèse consolidée |
| `functional-architecture-cycle-closure.md` | Clôture du cycle |

---

## 5. Domaines fonctionnels pressentis

| Domaine | Description |
|---------|-------------|
| Demande SAV | Création, qualification, données minimales, doublon |
| Planification | Planification intervention, affectation technicien |
| Intervention terrain | Consultation, démarrage, réalisation, attente client |
| Clôture | Compte rendu, signature optionnelle, motif absence, clôture locale |
| Synchronisation CRM simulée | Transmission post-clôture, retour succès / échec |
| Anomalies d'intégration | STAT-08, gravité, reprise manuelle, visibilité dashboard |
| Pilotage | Retards, anomalies, clôtures, indicateurs dashboard |

---

## 6. Décisions ADR à intégrer

| ADR | Impact architecture fonctionnelle |
|-----|-----------------------------------|
| ADR-001 | Structurer statuts, transitions et indicateurs |
| ADR-002 | Définir Interv360 comme source de vérité locale et CRM comme cible simulée |
| ADR-003 | Décrire anomalies, gravités et reprise manuelle |
| ADR-004 | Séparer clôture locale et synchronisation externe |

---

## 7. Hors périmètre

Ce cycle ne doit pas produire :

- backlog ;
- user stories ;
- cas de tests ;
- scénarios de tests ;
- code applicatif ;
- architecture technique détaillée ;
- API réelle CRM ;
- intégration CRM réelle ;
- publication Notion automatique ;
- delivery.

---

## 8. Garde-fous

- Git reste la source de vérité.
- Les documents restent dans `projects/interv360/05-functional-architecture/`.
- Les ADR acceptées ne doivent pas être contredites.
- Les BPMN ne doivent pas être modifiés dans ce cycle sauf décision explicite.
- Les écrans peuvent être préparés conceptuellement, mais pas détaillés comme maquettes finales.

---

## 9. Résultat attendu du cycle

À l'issue du cycle, Interv360 doit disposer d'une architecture fonctionnelle permettant d'alimenter :

- design UX/UI ;
- écrans et parcours ;
- modèle fonctionnel des objets ;
- vision dashboard ;
- éventuel second lot ADR ;
- futures spécifications détaillées.

---

## 10. Conclusion

Le cycle **architecture fonctionnelle détaillée** peut être **ouvert**.

Il doit traduire les décisions ADR et les processus BPMN en structure fonctionnelle exploitable, sans basculer vers backlog, user stories, tests ou code.

---

*Cadrage architecture fonctionnelle — Interv360 — SFIA — Draft.*
