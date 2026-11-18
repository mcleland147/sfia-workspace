# Manifeste ENV-01 — RECETTE UAT-03 fix

**Non sensible.** Aucun secret.

| Champ | Contenu |
| --- | --- |
| `lane` | `RECETTE` |
| `source_repository` | `mcleland147/sfia-workspace` |
| `source_branch` | `sfia/next-ml4d-ensemble05-composition-recette-candidate` (local only) |
| `base_main_sha` | `997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| `previous_recette_sha` | `ba1e55ece782eb9f2bbfad9336ed346de1acf037` |
| `previous_recette_build` | `_eeb9Jy2hV242myk86VTu` |
| `candidate_sha` | `90c3e59f4a355b463ea047cc45486906bde15680` |
| `candidate_tree` | `1c7fa402d6029ee6c0b5582ba8d0a2b94f5bcceb` |
| `build_identifier` | `5C3be3-ils1iOmH3qXo4d` |
| `product_version` | `NOT AVAILABLE` |
| `candidate_version` | `NOT AVAILABLE` |
| `release_tag` | `N/A` |
| `served_address` | `http://127.0.0.1:3200` |
| `runtime_worktree` | `…/sfia-workspace-next-ml4d-ensemble05-recette-build-90c3e59f` |
| `launch_agent` | `com.sfia.studio.next.recette.ml4d-ux004` |
| `start_script` | `start-recette-ensemble05-90c3e59f.sh` |
| `schema_revision` | inchangé — **aucune migration** |
| `test_data_revision` | counts `projects\|documents\|messages\|users` = `23\|117\|544\|4` avant=après |
| `configuration_fingerprint` | env keys fingerprint `f50f900416e7c57f` (24 keys) — source `~/.config/sfia-studio-next/recette/.env.local` |
| `FORCE_FIXTURE` | forcé vide au démarrage |
| `SIMULATED_PROVIDER` | forcé vide au démarrage |
| `DIAG_EPHEMERAL` | forcé vide au démarrage |
| `quality_evidence` | Vitest 20 PASS (bornes+obs) ; `next build` OK ; smoke login/portfolio/projet/fil PASS ; isolation B→A 404 |
| `known_gaps` | UX-01/UX-02 + réserves V0.9 ; UAT-03 retest Morris pending ; LIVE auto non rejoué |
| `rollback_reference` | `ROLLBACK-TO-ba1e55ec.sh` + backup `~/.config/sfia-studio-next/sfia-recette-backups/ml4d-e05-uat03-fix-20261118-173348` |
| `review_decision` | GO cutover inclus — retest utilisateur Morris |
| `cutover_utc` | `2026-11-18T16:33:48Z` (±) |
| `runtime_pid` | `30371` (next-server) / LaunchAgent parent `30343` |

## Verdict technique

`UAT-03 FIX DEPLOYED — RECETTE READY FOR MORRIS RETEST`
