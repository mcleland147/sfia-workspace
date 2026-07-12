# Chantiers360 v2 — Delivery INC-02 — Rapport d'implémentation

**Branche :** `delivery/chantiers360-v2-inc-02`  
**Base :** `e28b82a` (main)

## Modèle de données

| Table | Champs principaux | Défaut statut |
|-------|-------------------|---------------|
| `taches` | `chantier_id`, `label`, `status` | À faire |
| `reserves` | `chantier_id`, `description`, `status` | Ouverte |

**Migration :** `app/drizzle/0001_tasks_reserves.sql`

## Code livré

| Zone | Fichiers |
|------|----------|
| Schéma | `lib/db/schema.ts` |
| Tâches | `lib/taches/types.ts`, `queries.ts`, `actions.ts` |
| Réserves | `lib/reserves/types.ts`, `queries.ts`, `actions.ts` |
| UI | `TasksSection`, `ReservesSection`, `ChantierOperationalTabs`, formulaires ajout |
| Page | `app/chantiers/[id]/page.tsx` — charge tâches + réserves |
| Tests | `e2e/inc-02.spec.ts` ; `inc-01.spec.ts` US-03 adapté |

## Comportement

- Ajout tâche / réserve depuis fiche chantier — champs obligatoires validés serveur
- Modification statut par select + bouton dédié (évite collision avec statut chantier)
- Tâche Terminée et réserve Levée restent visibles dans la liste
- Jalons et comptes rendus restent désactivés (INC-03 / INC-04)

## Hors scope respecté

Aucun code jalons, CR, prochaines actions, auth, refonte dashboard, V0, Notion/CMP.

---

**Documents liés :** `2026-07-06-delivery-inc-02-validation-report.md`
