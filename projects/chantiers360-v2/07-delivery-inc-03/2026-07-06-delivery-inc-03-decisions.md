# Chantiers360 v2 — Delivery INC-03 — Décisions

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/07-delivery-inc-03/2026-07-06-delivery-inc-03-decisions.md`

## Décision Morris — GO INC-03

| # | Décision | Statut |
|---|----------|--------|
| **M9** | GO delivery INC-03 | ✅ **Accordé** (2026-07-06) |
| Périmètre | US-10 uniquement | ✅ Respecté |
| Dépendance | INC-02 CLOSED WITH RESERVES | ✅ |

## Décisions techniques INC-03

| # | Décision | Détail |
|---|----------|--------|
| D-INC03-1 | Modèle | Champs planning sur table `chantiers` — pas d'entité séparée |
| D-INC03-2 | Migration | `upcoming_milestone` varchar(500) — seul champ manquant |
| D-INC03-3 | UI | Onglet Jalons actif ; résumé planning conservé sur fiche |
| D-INC03-4 | Champs | Tous optionnels — `null` si vide |
| D-INC03-5 | CR / prochaines actions | Placeholders INC-04 / INC-05 inchangés |

## Décisions Morris attendues

| # | Question | Statut |
|---|----------|--------|
| V1 | INC-03 validé pour QA-G3 ? | ✅ Validé |
| V2 | GO QA INC-03 (QA-G3) ? | ✅ **GO QA WITH RESERVES** — Morris (2026-07-06) |
| V3 | GO PR readiness INC-03 ? | ✅ PR #119 mergée — `ebece11` |
| V4 | QA-G4 post-merge ? | ✅ **QA-G4 OK WITH RESERVES** — `2026-07-07-qa-g4-post-merge-report.md` |
| V5 | Clôture INC-03 ? | ✅ **INC-03 CLOSED WITH RESERVES** — Morris (2026-07-06) — `2026-07-06-inc-03-closure-report.md` |
| V6 | GO INC-04 ? | ❌ **Non accordé** — décision L0 séparée |

---

**Documents liés :** `delivery-inc-03-overview.md`, `../08-qa-test/inc-03/2026-07-06-qa-readiness.md`
