# Chantiers360 v2 — Delivery INC-05 — Rapport d'implémentation

**Branche :** `delivery/chantiers360-v2-inc-05`  
**Base :** `3f7acfe` (main)

## Modèle de données

**Aucune nouvelle table** — conforme backlog INC-05 (`delivery-increments.md` : prochaines actions 100 % dérivées).

| Source | Règle d'inclusion |
|--------|-------------------|
| `taches` | Statut `À faire` ou `En cours` |
| `reserves` | Statut `Ouverte` ou `En cours de traitement` |
| `chantiers` | `next_intervention_date` renseignée → item intervention |
| `chantiers` | `upcoming_milestone` renseigné → item jalon |
| `chantiers` | Statut `En retard` → item retard |

**Migration :** aucune — lecture agrégée uniquement.

## Code livré

| Zone | Fichiers |
|------|----------|
| Domaine | `lib/prochaines-actions/types.ts`, `queries.ts`, `format.ts` |
| UI | `components/prochaines-actions/ProchainesActionsList.tsx`, `app/prochaines-actions/page.tsx` |
| Navigation | `ChantierFiche`, `ChantierOperationalTabs` (`initialTab`), `app/chantiers/[id]/page.tsx` (`?tab=`) |
| Accès | `DashboardHero` — lien Prochaines actions |
| Tests | `e2e/inc-05.spec.ts` |

## Comportement

- Vue `/prochaines-actions` — liste dérivée triée par chantier
- Aucun formulaire de création d'action
- Items disparaissent quand source résolue (ex. tâche `Terminée`)
- CTA « Voir sur le chantier » → fiche + onglet source
- Retard chantier inclus comme item dérivé

## Hors scope respecté

Pas de saisie manuelle, IA, notifications, agenda avancé, workflow validation, espace client, devis/facturation, refonte dashboard, capitalisation post-INC-05, V0, Notion/CMP.

---

**Documents liés :** `delivery-inc-05-validation-report.md`
