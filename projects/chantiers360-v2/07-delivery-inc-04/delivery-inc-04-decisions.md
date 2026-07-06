# Chantiers360 v2 — Delivery INC-04 — Décisions

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/07-delivery-inc-04/delivery-inc-04-decisions.md`

## Décision Morris — GO INC-04

| # | Décision | Statut |
|---|----------|--------|
| **M10** | GO delivery INC-04 | ✅ **Accordé** (2026-07-06) |
| Périmètre | US-11 uniquement | ✅ Respecté |
| Dépendance | INC-03 CLOSED WITH RESERVES | ✅ |

## Décisions techniques INC-04

| # | Décision | Détail |
|---|----------|--------|
| D-INC04-1 | Table | `comptes_rendus` — entité dédiée (data-model §6) |
| D-INC04-2 | Champ contenu | `contenu` text — aligné backlog / data-model-light |
| D-INC04-3 | Date | `created_at` auto serveur — pas de saisie utilisateur |
| D-INC04-4 | Tri affichage | Décroissant par `created_at` |
| D-INC04-5 | Édition | Création seule — pas d'édition/suppression MVP |
| D-INC04-6 | INC-05 | Prochaines actions — hors périmètre |

## Décisions Morris attendues

| # | Question | Statut |
|---|----------|--------|
| V1 | INC-04 validé pour QA-G3 ? | ✅ Validé |
| V2 | GO QA INC-04 (QA-G3) ? | ✅ **GO QA WITH RESERVES** — Morris (2026-07-06) |
| V3 | GO PR readiness INC-04 ? | ✅ PR #122 mergée — `9e9c124` |
| V4 | QA-G4 post-merge ? | ✅ **QA-G4 OK WITH RESERVES** — `qa-g4-post-merge-report.md` |
| V5 | Clôture INC-04 ? | ✅ **INC-04 CLOSED WITH RESERVES** — Morris (2026-07-06) — `inc-04-closure-report.md` |
| V6 | GO INC-05 ? | ❌ **Non accordé** — décision L0 séparée |

---

**Documents liés :** `delivery-inc-04-overview.md`, `../08-qa-test/inc-04/qa-readiness.md`
