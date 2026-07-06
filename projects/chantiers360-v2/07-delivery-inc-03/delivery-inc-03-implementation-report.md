# Chantiers360 v2 — Delivery INC-03 — Rapport d'implémentation

**Branche :** `delivery/chantiers360-v2-inc-03`  
**Base :** `d6bb1b5` (main)

## Modèle de données

Approche retenue : **attributs intégrés sur `chantiers`** (`data-model-light.md` §5).

| Champ DB | Existant INC-01 | Ajout INC-03 |
|----------|-----------------|--------------|
| `planned_start_date` | ✅ | — |
| `planned_end_date` | ✅ | — |
| `next_intervention_date` | ✅ | — |
| `simple_planning_comment` | ✅ | — |
| `upcoming_milestone` | — | ✅ migration `0002` |

**Migration :** `app/drizzle/0002_simple_milestones.sql`

## Code livré

| Zone | Fichiers |
|------|----------|
| Schéma | `lib/db/schema.ts` — `upcomingMilestone` |
| Planning | `lib/planning/types.ts`, `queries.ts`, `actions.ts`, `format.ts` |
| UI | `MilestonesSection.tsx`, `ChantierOperationalTabs` (onglet Jalons actif), `ChantierFiche` (résumé + jalon) |
| Tests | `e2e/inc-03.spec.ts` ; `inc-01.spec.ts` US-03 adapté (Jalons actif) |

## Comportement

- Onglet **Jalons** actif sur fiche chantier — formulaire édition planning simple
- Tous les champs optionnels — valeurs vides enregistrées comme `null`
- Résumé **Planning simple** au-dessus des onglets — mis à jour après enregistrement
- Comptes rendus restent désactivés (INC-04)
- Pas de calendrier avancé, Gantt, dépendances, ressources

## Hors scope respecté

Aucun code CR, prochaines actions, auth, refonte dashboard, V0, Notion/CMP.

---

**Documents liés :** `delivery-inc-03-validation-report.md`
