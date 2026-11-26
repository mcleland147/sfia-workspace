# SFIA Studio Next — ML5 R5 Review Pack FULL
## RECETTE cutover — documentary boundary candidate `70cf3e4a`

| Field | Value |
|---|---|
| Date | 2026-11-26 |
| Cycle | 11 / INC Critical / Déploiement · R5 IN PROGRESS / ML5 OPEN / R6 NOT STARTED |
| GO Morris | **RECETTE ACCORDÉ** · PR/MERGE/STABLE **ABSENT** |
| Mode | publish-in-cycle · Review Pack FULL · Handoff L3 REQUIRED |
| Candidate SHA servi | `70cf3e4aa09a8bc35be5bd967b6b016ecb2b779a` |
| Tree / web tree | `87598f3b9d9615d7976d21e2393fa6adfd666722` / `9169c0c0a17ee6555e43dc4b14810b2d2e7ec2c1` |
| BUILD_ID | `m5QcOrvjUz8vVAidDKxOZ` |
| Digest | `4cbf3c8da39a34e15d59da93d76b5d6bd10987f54ef36c0c36a485f43afe3de7` |
| URL | http://127.0.0.1:3200 |
| Previous | `e012401f` / `KotrF7y02wbZN79HDsjAb` |
| Docs commit (delivery-history only) | `9f18a8f2627e9b0a57b0c3305fcb26559a1e6f9a` |
| Verdict | **ML5 DOCUMENTARY CORRECTIVE CANDIDATE — RECETTE AVAILABLE WITH EXPLICIT RESERVES — READY FOR MORRIS UAT** |

---

## 1. GO Morris et réserves reportées en UAT

GO RECETTE explicitement accordé pour candidat `70cf3e4a`.
Pas de nouveau correctif, pas de campagne LIVE, pas de prolongation qualif DEV.

**Réserves reportées à la recette utilisateur Morris :**
- Respect strict du hors-périmètre documentaire
- Ouverture de V2 après conservation
- Consultation de V1 dans l'historique
- Restitution du candidat sans focus préalable
- Lisibilité / pertinence activité LIVE + conservation historique
- Animation SAS dans l'environnement utilisateur
- IT-01 ouverte ; IT-06 à accepter en UAT
- Limites / échecs préexistants DEV restant tracés

Ces réserves **ne valent pas** acceptation fonctionnelle ; gates sécurité/intégrité/identité/rollback **obligatoires** (satisfaits ci-dessous).

## 2. Git Truth Check

- Repo `mcleland147/sfia-workspace` · remote origin GitHub
- Branche produit `sfia/next-ml5-integrated-delivery-20261123`
- Candidat autorisé / worktree RECETTE HEAD : `70cf3e4aa09a8bc35be5bd967b6b016ecb2b779a`
- Merge-base `origin/main` : `997897fd7cf914771e7d08e8030dc7123fab7d25`
- Avant cutover : seul dirty attendu `.tmp-sfia-review/chatgpt-review.md` (reset pack)
- Aucun reset/rebase/merge
- Worktree rollback : `sfia-workspace-next-ml5-recette-build-e012401f6af4` @ `e012401f` BUILD `KotrF7y02wbZN79HDsjAb` — **présent**
- Handoff worktree distinct `sfia-review-handoff`

## 3. Concordance candidat / sources testées

- Build DEV qualifié : `bRStInNJBp4q4p6qIzcK3` (réalisé **avant** le commit final `70cf3e4a`)
- Le commit `70cf3e4a` **contient** les sources produit effectivement corrigées et testées en DEV (page.tsx, run-nora-cognitive-turn.ts, service.ts, nora-adapter.ts, activity-labels, NoraLiveActivity, d4-read-tools + tests)
- Web tree figé du candidat : `9169c0c0a17ee6555e43dc4b14810b2d2e7ec2c1`
- RECETTE reconstruite **exclusivement** depuis worktree détaché `70cf3e4a` (pas de fichiers DEV sales)
- **Pas d'invention** d'égalité BUILD_ID DEV ↔ build RECETTE : builds distincts ; sources = même SHA candidat

## 4. Manifeste RECETTE ENV-01

```yaml
lane: RECETTE
source_repository: mcleland147/sfia-workspace
source_branch: sfia/next-ml5-integrated-delivery-20261123
base_main_sha: 997897fd7cf914771e7d08e8030dc7123fab7d25
candidate_sha: 70cf3e4aa09a8bc35be5bd967b6b016ecb2b779a
build_identifier: m5QcOrvjUz8vVAidDKxOZ
build_digest: 4cbf3c8da39a34e15d59da93d76b5d6bd10987f54ef36c0c36a485f43afe3de7
product_version: NOT AVAILABLE
candidate_version: NOT AVAILABLE
url: http://127.0.0.1:3200
database: sfia_next_recette_ml4 @ 127.0.0.1:5434
config_root: ~/.config/sfia-studio-next/recette/
document_root: ~/.config/sfia-studio-next/recette/documents
cognition: OPERATIONAL_PROVISIONAL / 2M / 1M / 120
web_live: blocked (0)
studio_dev_test_login: 0
migration_required: false
```

## 5. Schéma DB

- Aucune migration dans le diff `e012401f..70cf3e4a` sur `src/db` / drizzle
- Tables publiques inchangées (43 CREATE TABLE dans dump)
- Candidats documentaires : pas de table dédiée (état conversationnel) — N/A comptage table

## 6. Sauvegarde

- Path: `/Users/morris/Projects/sfia-recette-backups/ml5-20261126T055559Z-pre-70cf3e4a-from-e012401f.sql.gz`
- sha256: `c76d8187691189f6ffca1215f82e1c9d016e04be33a9f233393c99622b5acced`
- gzip -t : OK · ~1.1 MB · 43 CREATE TABLE

## 7. Comptages avant / après (Δ=0)

| Table | Avant | Après |
|---|---:|---:|
| projects | 31 | 31 |
| documents | 123 | 123 |
| document_revisions | 194 | 194 |
| conversations | 210 | 210 |
| messages | 818 | 818 |
| pilots | 170 | 170 |
| cognitive_works | 22 | 22 |
| cognitive_work_checkpoints | 163 | 163 |
| nora_activity_events | 240 | 240 |
| preparations | 210 | 210 |

InterventionTrack / StockTrack / RoomBooking / AssetTrack : données préservées (aucune purge).

## 8. Smoke technique

| Contrôle | Résultat |
|---|---|
| Build | PASS · `m5QcOrvjUz8vVAidDKxOZ` |
| Démarrage | PASS · Ready 229ms · launchd |
| SHA servi | `70cf3e4a…` (boot log + worktree cwd) |
| BUILD HTML | `<!--m5QcOrvjUz8vVAidDKxOZ-->` |
| login | 200 |
| /api/portfolio | 401 |
| /api/dev/auto-session | 403 `DEV_AUTO_SESSION_UNAVAILABLE` |
| OAuth GitHub | bouton « Continuer avec GitHub » présent (browser) ; pas de Pilote A/B DEV |
| WEB LIVE | boot `WEB_LIVE=0` |
| Cognition | OPERATIONAL_PROVISIONAL 2M/1M/120 |
| Schéma | inchangé |
| Counts | Δ=0 |
| DEV isolé | `:3100` 200 · BUILD `bRStInNJBp4q4p6qIzcK3` · PID distinct |
| Rollback | worktree+script+plist bak disponibles |

## 9. Rollback précis (code)

1. `launchctl bootout gui/$(id -u)/com.sfia.studio.next.recette.ml4d-ux004`
2. Restaurer plist depuis `…plist.20261126T055700Z.pre-boundary-cutover-e012401f6af4.bak`
3. Ou pointer ProgramArguments vers `…/sfia-workspace-next-ml5-recette-build-e012401f6af4/start-recette-ml5-KotrF7y02wbZN79HDsjAb.sh`
4. `launchctl bootstrap` + `kickstart`
5. Vérifier HTML `<!--KotrF7y02wbZN79HDsjAb-->`

**DB :** ne pas restaurer automatiquement de manière destructive. Dump disponible si Morris l'ordonne.

## 10. Diff documentaire delivery-history

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 4ee2b9de..9fee1f19 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -3,6 +3,32 @@
 Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.
 
+## delivery_id: DELIV-2026-11-26-ML5-DOCUMENTARY-BOUNDARY-RECETTE-CUTOVER
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-26 (Europe/Paris) |
+| Macro-lot | ML5 R5 — mise à disposition RECETTE du correctif frontière documentaire |
+| Type | INC Critical · cutover RECETTE · **NO RELEASE** · **NO PR/MERGE/STABLE** |
+| Branche source | `sfia/next-ml5-integrated-delivery-20261123` |
+| Candidate SHA **servi** | `70cf3e4aa09a8bc35be5bd967b6b016ecb2b779a` |
+| Tree / web tree | `87598f3b9d9615d7976d21e2393fa6adfd666722` / `9169c0c0a17ee6555e43dc4b14810b2d2e7ec2c1` |
+| Worktree RECETTE | `/Users/morris/Projects/sfia-workspace-next-ml5-recette-build-70cf3e4aa09a` |
+| BUILD_ID RECETTE | `m5QcOrvjUz8vVAidDKxOZ` · digest `4cbf3c8da39a34e15d59da93d76b5d6bd10987f54ef36c0c36a485f43afe3de7` |
+| URL | `http://127.0.0.1:3200` · PG `:5434` · base `sfia_next_recette_ml4` |
+| Cognition effective | OPERATIONAL_PROVISIONAL · **2M / 1M / 120** |
+| WEB LIVE | **BLOQUÉ** (0/0/0) |
+| Contenu | Bascule technique du candidat DEV frontière production documentaire + visionneuse + activité LIVE ; **aucun correctif nouveau** ; smoke technique uniquement |
+| Preuves | login 200 · portfolio 401 · auto-session 403 · BUILD HTML `m5QcOrvjUz8vVAidDKxOZ` · counts Δ=0 · DEV préservé `:3100`/`bRStInNJBp4q4p6qIzcK3` |
+| Données AVANT/APRÈS | projects=31 documents=123 revisions=194 conversations=210 messages=818 pilots=170 cog_works=22 ckpts=163 activity=240 preparations=210 (**Δ=0**) |
+| Sauvegarde | `/Users/morris/Projects/sfia-recette-backups/ml5-20261126T055559Z-pre-70cf3e4a-from-e012401f.sql.gz` · sha256 `c76d8187691189f6ffca1215f82e1c9d016e04be33a9f233393c99622b5acced` |
+| Rollback code | worktree `…-e012401f6af4` · build `KotrF7y02wbZN79HDsjAb` · plist bak `…20261126T055700Z.pre-boundary-cutover-e012401f6af4.bak` · start `start-recette-ml5-KotrF7y02wbZN79HDsjAb.sh` |
+| DEV | **préservé** `:3100` / `:5433` · build `bRStInNJBp4q4p6qIzcK3` · tip local `70cf3e4a` |
+| Push produit | **NONE** |
+| Réserves UAT Morris | hors-périmètre documentaire ; V2 après conservation ; V1 historique ; candidat sans focus ; activité LIVE lisibilité/historique ; animation SAS ; IT-01 ouverte ; IT-06 à accepter en UAT ; limites DEV qualif / échecs préexistants |
+| Concordance | Build DEV qualifié `bRStInNJBp4q4p6qIzcK3` réalisé **avant** commit final ; sources produit testées = fichiers du commit `70cf3e4a` (web tree `9169c0c0…`) ; RECETTE reconstruite **exclusivement** depuis ce SHA figé |
+| Verdict | **ML5 DOCUMENTARY CORRECTIVE CANDIDATE — RECETTE AVAILABLE WITH EXPLICIT RESERVES — READY FOR MORRIS UAT** |
+
 ## delivery_id: DELIV-2026-11-26-ML5-DOCUMENTARY-PRODUCTION-BOUNDARY-DEV
 
 | Field | Value |

```

## 11. Identité DEV préservée

- URL http://127.0.0.1:3100 · BUILD `bRStInNJBp4q4p6qIzcK3` · PG `:5433`/`sfia_next_dev`
- Non touché par la bascule

## 12. Handoff

Message : `docs(review-handoff): publish documentary boundary candidate recette cutover`
Branche : `sfia/review-handoff`
Fichier : `sfia-review-handoff/latest-chatgpt-review.md`

## Instruction ChatGPT

Vérifier identité du candidat servi, smoke, counts Δ=0, sauvegarde, rollback, réserves UAT. Présenter verdict à Morris. Aucune PR/merge/STABLE.

ML5 OPEN · R5 IN PROGRESS · R6 NOT STARTED · NO RELEASE · NOT ADOPTED
