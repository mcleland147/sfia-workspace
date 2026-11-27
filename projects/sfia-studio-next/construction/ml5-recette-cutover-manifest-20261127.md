# Manifeste RECETTE — Cutover + activation opérationnelle — 2026-11-27

> **Provenance :** reproduction documentaire de l'état d'activation rapporté par Cursor, [Handoff immuable 9ec930e2](https://github.com/mcleland147/sfia-workspace/blob/9ec930e2cbee09f1fcc3384753eafbf64d97251c/sfia-review-handoff/latest-chatgpt-review.md), blob d3cb079e56f44c783acf96de95dc7a9b3d747d74 ; publication candidate autorisée par Morris le 27/11. L'état local exact n'est pas directement observé par ChatGPT. Les tableaux initiaux sont historiques ; lire le checkpoint ci-dessous. Pas de nouvelle acceptation.


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
| Ancien runtime servi (pré-cutover) | SHA `a150926cc78fdc04522565eb198ed9f91a612142` · BUILD `6kswoj2a2VHXCLsFYcoim` |
| PostgreSQL | `sfia_next_recette_ml4` · :5434 · rôle `sfia_next_recette_ml4` |
| Schéma | **027** (`derived_embedding_chunks` présent) |
| Config | `~/.config/sfia-studio-next/recette/.env.local` + surcharges `start-recette-ml5.sh` |
| OpenAI clé | Empreinte RECETTE `f27d814e…` · forbidden DEV `ab6bbec8…` · match local **OK** |
| OpenAI org/projet fournisseur | **NON VÉRIFIÉ** (pas de clé Admin / pas de GO vérification projet) |
| Admin collector | OFF · non injecté · pas de nouvelle clé Admin |
| WEB LIVE | OFF (`SFIA_WEB_SEARCH_LIVE=0` · `SFIA_WEB_SEARCH_ENABLED=0`) |
| Auto-session DEV | refusé |
| Fixtures | absentes (`STUDIO_FORCE_NORA_FIXTURE` / `SFIA_DICTATION_SUBSTITUTED` unset) |
| Dataset | projects=31 · documents=123 (inchangé hors index) |
| Index borné | RoomBooking `proj_7514cdde…` (4 chunks) + Pilotage 360 `proj_04441200…` (6 chunks) · backend **pg** |
| Consommation index | 341 tokens embeddings (`text-embedding-3-small`) · 2 HTTP Frontier · campaign `recette-op-activation-index-20261127` |
| Microphone hôte | Micro MacBook Air présent (Input Channels: 1) |
| DEV | :3100 down · PG :5433 / `sfia_next_dev` inchangé |

## Activation opérationnelle (A1–A6) — 2026-11-27

| Arbitrage | Statut |
|---|---|
| A1 Cutover accepté avec réserves | Conservé |
| A2 Rotation mot de passe PostgreSQL RECETTE | **EFFECTIVE** — hash SCRAM changé · ancien rejeté via bridge SCRAM · nouveau OK · localhost `pg_hba` reste `trust` · backups `.env` antérieurs = secret obsolète |
| A3 Capacités OpenAI | Flags LIVE activés (voir tableau) |
| A4 Indexation bornée | **FAITE** (2 projets · 10 chunks · pas de sweep 31) |
| A5 Collecte Admin | **DIFFÉRÉE / OFF** |
| A6 WEB LIVE | **OFF** |

### Configuration non secrète effective (runtime via start script)

- `STUDIO_LANE=RECETTE` · `PORT=3200` · `SFIA_SOURCE_SHA=e8e6e069…`
- `SFIA_COMPOSER_DICTATION=1` · `SFIA_DICTATION_TRANSPORT=live`
- `SFIA_BOUNDED_JUDGMENT=1`
- `SFIA_DERIVED_EMBEDDING_BACKEND=pg` · `SFIA_DERIVED_EMBEDDING_SEARCH=1`
- `SFIA_DOCUMENT_VISION_PUNCTUAL=1`
- Cognitive : `MAX_SEGMENTS=120` · `REEVAL=1000000` · `MAX_TOKENS=2000000` (pas 24/200k RoomBooking provisoire)
- Start script **ne force plus** `SFIA_COMPOSER_DICTATION=0`

### Capacités — statuts disciplinés

| Capacité | CONFIGURED | ADMITTED | AVAILABLE | LIVE EXERCISED | USER QUALIFIED |
|---|---|---|---|---|---|
| Nora / Responses API | oui | lane guard OK | oui (runtime) | **non** (parcours Morris) | **non** |
| Allocation cognitive adaptative | oui (120 / 1M / 2M) | oui | oui | **non** | **non** |
| Decisions ciblées | oui (`BOUNDED_JUDGMENT=1`) | flag ON | oui | **non** | **non** |
| Embeddings + hybrid PG | oui | oui | oui (10 chunks) | **oui** (rebuild borné) | **non** |
| Vision documentaire ponctuelle | oui | flag ON | oui | **non** | **non** |
| Dictée Realtime | oui | admission LIVE OK | oui (micro hôte) | **non** | **non** |
| FinOps local | oui | — | page `/settings/consumption` 200 | observations rebuild persistées | **non** |
| Collecte Admin | OFF | — | — | — | — |
| WEB LIVE | OFF | — | — | — | — |

## Corpus indexé (réserve d’identité)

- Cahier cite `proj_896d204b…` (DEV) — **absent** de la base RECETTE.
- RECETTE : `proj_7514cdde…` **RoomBooking** attaché à `mcleland147/chantiers360` (pas le faux `proj_f57bca43…`).
- `proj_04441200…` **Pilotage 360** — projet historique R05.
- Projet synthétique dédié : **non constitué** — hors scope automatique.

## Rollback activation

1. Restaurer paramètres non secrets depuis `.env.local.bak-pre-op-activation-*` / start-script antérieur.
2. **Conserver le nouveau mot de passe PostgreSQL** (ne pas réimporter un `.env` avec l’ancien secret).
3. Ne pas réimporter une ancienne base uniquement pour annuler l’activation.
4. Cutover code : retarget worktree `a150926c` si besoin (voir cutover) — schéma 027 non retiré automatiquement.

## Réserves

- Org/projet OpenAI fournisseur non prouvé (deux clés ≠ deux projets).
- Dictée / Nora / Vision / Decisions : **AVAILABLE** mais **pas LIVE EXERCISED** ni **USER QUALIFIED**.
- Index : seuls 2 projets ; le reste reste à l’indexation au fil de l’usage.
- FinOps historique éventuellement imputé DEV : non réécrit.
- Documents root RECETTE vide (0 fichiers) — inchangé.
- `pg_hba` localhost `trust` : la rotation protège surtout les chemins SCRAM non-localhost.

## Checkpoint post-recette MaintiPlan T08 — 27/11

Le candidat figé n'a pas été modifié dans cette contribution. [PV MaintiPlan](recette-utilisateur-ml5-maintiplan-20261127.md) : Nora LIVE utilisée par le Pilote, création projet/cycle simple/document et investigation observées ; dictée LIVE essayée sans succès (MP-06), allocation adaptative non démontrée, journal et projections déficients, 17 écarts ouverts. Vision et Decisions non qualifiées par cet essai, hybrid user non prouvé. Admin/WEB OFF, mapping org/projet non vérifié, localhost trust. La recette est suspendue par Morris ; la matrice ci-dessus est l'état historique pré-recette et non une disponibilité fonctionnelle garantie. Pas de changement de configuration.
