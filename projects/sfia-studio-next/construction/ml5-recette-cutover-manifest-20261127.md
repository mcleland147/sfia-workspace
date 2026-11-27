# Manifeste RECETTE — Cutover convergence intégrée — 2026-11-27

| Champ | Valeur |
|---|---|
| Lane | RECETTE |
| URL | http://127.0.0.1:3200 |
| Classe | NO RELEASE |
| Candidat SHA | `e8e6e06961fa0a7224db3badb3b591b8be8046ac` |
| Tree repo | `30c12ad9eb48959c0326df9f7629471e8ec847a3` |
| Tree web | `03c30e4cdb2dbb443a05a052757b3846199c8d34` |
| BUILD_ID | `rpEczSp61evIZ7d6fnIWR` |
| Digest | `18e014c1ead6e050cf1aca4e4910dd8904722bd3e0e7753d25b189c03fd50535` |
| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml5-recette-build-e8e6e06961fa` |
| LaunchAgent | `com.sfia.studio.next.recette.ml4d-ux004` |
| Base main | `997897fd7cf914771e7d08e8030dc7123fab7d25` |
| Ancien runtime servi | SHA `a150926cc78fdc04522565eb198ed9f91a612142` · BUILD `6kswoj2a2VHXCLsFYcoim` |
| SHA documenté historique | `2a024b1c` (antérieur ; non le processus réellement servi au cutover) |
| PostgreSQL | `sfia_next_recette_ml4` · :5434 |
| Schéma | **027** (migrations 022–027 appliquées après preuve isolée) |
| Config | `~/.config/sfia-studio-next/recette/.env.local` (BASE Morris) + delta non secret |
| OpenAI | Empreinte RECETTE `f27d814e…` · forbidden DEV `ab6bbec8…` · **distinct** |
| Admin collector | Non injecté dans runtime Nora · pas de nouvelle clé Admin |
| Dictée | Code présent · `SFIA_COMPOSER_DICTATION=0` · LIVE micro **en attente GO** |
| WEB LIVE | OFF |
| Auto-session DEV | refusé (403) |
| Dataset | projects=31 · messages=824 · documents=123 · pilots=170 · conversations=210 · cognitive_works=24 |
| Sauvegarde | dump Fc + `.env.local` bak mode 600 · documents tgz · plist/start-script bak |
| Rollback | restaurer dump + retarget LaunchAgent/plist vers worktree `a150926c` · schéma 022+ non retiré automatiquement (compat app ancien ≠ rollback données) |

## Capacités

| Capacité | État cutover | Gate LIVE restant |
|---|---|---|
| Nora / Responses | runtime prêt · clé RECETTE | qualification utilisateur |
| Allocation cognitive | code embarqué | parcours R03 |
| Decisions | code embarqué | si campagne LIVE |
| Embeddings / hybrid | schéma 027 · pas d'index DEV copié | reconstruction embeddings si GO |
| Vision | code embarqué | GO distinct |
| Dictée Realtime | code + admissions · flag OFF | GO micro LIVE |
| FinOps local | tables 022–026 | pas de collecte Admin nouvelle |
| Collecte Admin | architecture conservée hors runtime | GO Morris distinct |
| Tracing | présent | — |
| WEB | OFF | — |
| Cursor / D8 | gates existants | — |

## Réserves

- Dictée / Vision / embeddings LIVE / Admin collect : en attente GO distinct.
- FinOps historique éventuellement attribué projet DEV : non réécrit.
- Documents root RECETTE vide (0 fichiers) — inchangé.
- Figma mobile/visionneuse : reportés RECETTE utilisateur.
