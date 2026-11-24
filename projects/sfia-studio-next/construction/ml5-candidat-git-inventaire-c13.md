# ML5 — Inventaire candidat Git C3–C13

| Champ | Valeur |
|---|---|
| Date | 2026-11-23 |
| Branche locale | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` |
| origin/main | `997897fd7cf914771e7d08e8030dc7123fab7d25` (merge-base = main) |
| Branche distante projet | **ABSENTE** — aucun push |
| Entrées dirty | ~89 (porcelain) |
| Publication | **INTERDITE** sans GO Morris |

## Légende

| Tag | Sens |
|---|---|
| EXPECTED | Attendu pour le candidat ML5 |
| FOUND | Présent dans le worktree dirty |
| INCLUDED | À versionner lors d'une future publication |
| EXCLUDED | Ne jamais committer |
| RESERVATION | Inclus avec réserve documentée |

## Exclusions obligatoires

| Chemin / classe | Motif |
|---|---|
| `.env.local` (+ symlink cible) | Secrets OpenAI/GitHub/DB |
| `web/.sfia-evidence/**` | Artefacts campagne locaux |
| `.tmp-sfia-review/**` | Pack temporaire (handoff L3 séparé) |
| `/tmp/sfia-*` workspaces | Preuves non versionnables |
| Bases/dumps DEV | Hors dépôt |
| `scripts/ml5-c13-probe-mode.mts` | Probe DEV ponctuel — EXCLUDED ou supprimer avant push |

## Synthèse par rôle

| Rôle | Statut | Notes |
|---|---|---|
| Code produit D3/D6/D7/D8/D9 | FOUND / INCLUDED | C3–C13 accumulé |
| Migration `019_ml5_qualification_history.sql` | FOUND / INCLUDED | DEV only appliquée |
| Tests unit + PG | FOUND / INCLUDED | C9–C13 |
| Scripts qualification DEV C9–C13 | FOUND / INCLUDED (sauf probe) | Nécessitent secrets documentés en ENV |
| Documents Next (registre, as-built, contrat, delivery-history) | FOUND / INCLUDED | Pas SEF/roadmap normatifs |
| Captures `.sfia-evidence` | FOUND / EXCLUDED | |
| Review pack `.tmp-sfia-review` | FOUND / EXCLUDED du projet | Publié via L3 handoff |

## Stratégie de commits prospective (NON EXÉCUTÉE)

1. `feat(ml5): D7 cursor attempts + claim/ACK + SDK adapter LIVE`
2. `feat(ml5): D8 qualification + handoff integrity + evidence reads`
3. `feat(ml5): D6 authorize confirmed + Nora contract bridge`
4. `feat(ml5): UX realization surfaces + bilan + D6 overlay`
5. `test(ml5): unit + PG + DEV journey scripts C9–C13`
6. `docs(ml5): registre v0.8 + delivery-history + as-built + inventaire`
7. `feat(ml5): C13 path confine + live supervisor + STOP LIVE honesty`

**Aucun de ces commits n'est créé dans C13.**

## Risques pré-push

| Risque | Sévérité | Mitigation |
|---|---|---|
| Secrets dans historique local non commités | HIGH | Vérifier diff ; never add `.env*` |
| Conflit prospectif avec `main` | MED | merge-base = main tip ; rebase/merge sous GO |
| Evidence captures accidentelles | MED | gitignore `.sfia-evidence` |
| Probe script bruit | LOW | EXCLUDE |
| LIVE env requis non documenté | MED | Documenter `SFIA_CURSOR_*` dans README candidat |

## Points de contrôle pré-push (Morris)

- [ ] GO Morris explicite publication branche projet
- [ ] Scan secrets
- [ ] Suites unit+PG vertes
- [ ] Migration 019 revue
- [ ] Pas de mutation RECETTE/STABLE
- [ ] Handoff L3 déjà publié séparément

## Verdict inventaire

**PROJECT CANDIDATE READY FOR MORRIS GIT REVIEW** — réserves : B09 NOT_IMPL ; Figma F2 hors gate ; GitHub REAL mutatif non prouvé ; présence 1/97/1 ≠ achèvement produit.
