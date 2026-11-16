# Ensemble 04 — Espace projet (shell UX/UI)

Date: 2026-11-16  
Branche: `feat/next-ml4d-project-space-20261116`  
Figma: `itgvCulInEnFY6DvgIegvP` frames `652:8` / `652:58` / `652:108` / `652:158`

## Responsabilités

| Concern | Owner |
| --- | --- |
| Identité / accès projet | `GET /api/projects/[projectId]` + `getOwnedProjectContext` |
| Nom affiché (rail + breadcrumb) | `ProjectSpaceContext` ← page load |
| Navigation surfaces | `studio-rail` + `StudioShell` (rail unique) |
| Chrome / breadcrumb | `ProjectChrome` (plus de barre d’onglets centrale) |
| Vue d’ensemble | `ProjectOverview` (`?surface=projet`) |
| Indisponible | `ProjectUnavailable` (401 / 404 / 5xx / loading) |
| Travail / Nora | `NoraConversation` inchangé fonctionnellement |

## Surfaces

| Label rail | Query | Notes |
| --- | --- | --- |
| Travail | `?surface=travail` | conversation réelle |
| Projet | `?surface=projet` | consultation, données existantes uniquement |
| Journal | `?surface=journal` | existant |
| Trajectoire | `?surface=pilotage` | compat URL conservée |
| Documents / Git / Résultats | Accès directs | `document` / `git` / `publication` |

## Preuves F2

`web/docs/evidence/ensemble-04-project-space/` — captures 1680×970 runtime + références Figma.

## Hors périmètre (renvoi)

- Ensemble 05: fil Nora détaillé, scroll, réponses structurantes  
- Ensemble 06: Documents / Journal métier  
- Ensemble 07: Trajectoire / cycles / CKI  
