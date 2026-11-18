# Git Truth Check — Ensemble 05 UX-05/UX-01 final

**Date :** 2026-11-18  
**Lane produit locale :** `sfia/next-ml4d-ensemble05-composition-recette-candidate`  
**Workspace :** `sfia-workspace-next-ml4d-ux003-entry-20261116`

| Objet | Valeur observée |
| --- | --- |
| `origin/main` | `997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| Candidat RECETTE servi (avant cutover) | `bd3854ac50520f3ce5e46ec773b67ec3ae5cc70b` |
| Tree candidat servi | `c39e45e6fe1eca45c5dbc3dbcb96aa8ca9818b2a` |
| Build servi | `qw3FaPD1B4KBrRab3LyKL` (HTML comment) |
| LaunchAgent | `com.sfia.studio.next.recette.ml4d-ux004` |
| Runtime WT | `…/sfia-workspace-next-ml4d-ensemble05-recette-build-bd3854ac` |
| HEAD local au démarrage du cycle | `7f0a403de16877821ac6e0d1dfb01e769cca09c3` (docs cutover UX-01…07) |
| `bd3854ac` ancestor of HEAD | oui |

**Réconciliation :** le candidat rapporté dans le contrat (`bd3854ac` / `qw3FaPD1B4KBrRab3LyKL`) correspond exactement au runtime RECETTE observé. Aucun STOP.

**Gouvernance Git ce cycle :** commit local candidat autorisé ; push produit / PR / merge / tag / STABLE / Gate C / ADOPTED **interdits**. Seul push L3 handoff autorisé.
