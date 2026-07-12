# Chantiers360 v2 — Delivery INC-02 — Décisions

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/07-delivery-inc-02/2026-07-06-delivery-inc-02-decisions.md`

## Décision Morris — GO INC-02

| # | Décision | Statut |
|---|----------|--------|
| **M8** | GO delivery INC-02 | ✅ **Accordé** (2026-07-06) |
| Périmètre | US-06 à US-09 uniquement | ✅ Respecté |
| Dépendance | INC-01 CLOSED WITH RESERVES | ✅ |

## Décisions techniques INC-02

| # | Décision | Détail |
|---|----------|--------|
| D-INC02-1 | Tables | `taches`, `reserves` — FK `chantier_id` CASCADE |
| D-INC02-2 | Champs | Tâche : `label` ; Réserve : `description` |
| D-INC02-3 | UI fiche | Onglets Tâches / Réserves actifs ; Jalons / CR placeholders INC-03/04 |
| D-INC02-4 | Statuts | Alignés `state-model.md` et AC backlog |
| D-INC02-5 | Dashboard | Non refondu — compteurs tâches/réserves reportés |
| D-INC02-6 | Select statut | Contrôle local React — évite conflit refresh client/server |

## Décisions Morris attendues

| # | Question | Statut |
|---|----------|--------|
| V1 | INC-02 validé pour QA-G3 ? | ✅ Validé |
| V2 | GO QA INC-02 (QA-G3) ? | ✅ **GO QA WITH RESERVES** — Morris (2026-07-06) |
| V3 | GO PR readiness INC-02 ? | ✅ PR #115 mergée — `c1c00b7` |
| V4 | QA-G4 post-merge ? | ✅ **QA-G4 OK WITH RESERVES** — `2026-07-07-qa-g4-post-merge-report.md` |
| V5 | Clôture INC-02 ? | ✅ **Accordée** — INC-02 CLOSED WITH RESERVES (2026-07-06) — `2026-07-06-inc-02-closure-report.md` |
| V6 | GO INC-03 ? | ❌ **Non accordé** — décision L0 séparée |

---

**Documents liés :** `delivery-inc-02-overview.md`, `../08-qa-test/inc-02/2026-07-06-qa-readiness.md`
