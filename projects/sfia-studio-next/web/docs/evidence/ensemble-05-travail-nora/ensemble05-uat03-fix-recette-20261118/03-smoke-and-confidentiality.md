# Smoke + confidentialité — post-cutover UAT-03

## Smoke

| # | Contrôle | Résultat |
| --- | --- | --- |
| 1 | `GET /login` 200 · build comment `5C3be3_ils1iOmH3qXo4d` | PASS |
| 2 | Runtime env `SFIA_SOURCE_SHA=90c3e59f…` · `SFIA_BUILD_ID=5C3be3-ils1iOmH3qXo4d` · `STUDIO_LANE=RECETTE` | PASS |
| 3 | `FORCE` / `SIM` / `DIAG_EPHEMERAL` vides | PASS |
| 4 | Dev test login Pilot A → portfolio 200 | PASS |
| 5 | Projet `proj_4f0e3d47-…` Travail — fil + « Contexte conservé » | PASS (screenshot) |
| 6 | Projection comparison COMPLETE relue | PASS |
| 7 | 2 projections UNKNOWN historiques intactes | PASS |
| 8 | Pilot B → projet A = 404 | PASS |
| 9 | DB counts avant = après `23\|117\|544\|4` | PASS |
| 10 | Sequence detail bornes Vitest (dont 5000 PASS / 5001 reject) | PASS |

Sequence 6 étapes : qualification **déterministe Vitest** (pas de FORCE/SIM activé sur le runtime RECETTE ; pas de campagne LIVE auto).

## Confidentialité

| Contrôle | Résultat |
| --- | --- |
| Sensitive logging / dump fournisseur | **désactivé** (DIAG ephemeral vide) |
| Observabilité RECETTE | allowlist métadonnées seules |
| Secrets dans preuves | absents (env redacted keys only) |
| `.env.local` DEV → RECETTE | **non recopié** |
