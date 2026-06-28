# Interv360 — Synthèse mapping statuts MVP

**Projet** : PRJ-INTERV360  
**Document source** : `status-mapping.md`  
**Type** : Synthèse gouvernance  
**Branche** : `analysis/interv360-clarification-cycle`  
**Règle liée** : RG-I05

---

## Statut

**Draft** — mapping fonctionnel issu du cycle de clarification.

---

## Statuts MVP

| Code | Libellé |
|------|---------|
| STAT-01 | À qualifier |
| STAT-02 | Qualifiée |
| STAT-03 | Planifiée |
| STAT-04 | En cours |
| STAT-05 | En attente client |
| STAT-06 | Clôturée |
| STAT-07 | En retard |
| STAT-08 | Anomalie d'intégration |

---

## Décisions clés

- **Statuts métier unifiés** — libellés FR communs sur tous les écrans
- **Distinction retard métier / anomalie d'intégration** — STAT-07 vs STAT-08, dashboard explicite
- **Visibilité par rôle** — manager (tous), technicien (planifié → clôturé), dirigeant (agrégats), admin (anomalies)
- **Alertes limitées** — À qualifier, En attente client, En retard, Anomalie d'intégration ; top 5–7 above the fold
- **CRM simulé** — correspondance fonctionnelle ; En retard et Anomalie non synchronisés comme statuts CRM métier

---

## Points à préciser

- Codes CRM exacts
- Seuils d'alerte chiffrés
- Transitions détaillées et droits par rôle
- Réouverture post-clôture
- ADR mapping durable

---

## Garde-fous

- Pas de **backlog**
- Pas de **user stories**
- Pas de **tests** (cas, scénarios, stratégie recette)
- Pas de **delivery** ouvert
- Pas de **publication Notion**
- Pas de **PR** à ce stade

---

*Synthèse mapping statuts MVP — Interv360 — SFIA.*
