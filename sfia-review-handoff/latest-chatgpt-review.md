# SFIA Review Pack — FULL · CRITICAL
## Ensemble 08 — POST-UAT 01 CUTOVER RECETTE

- date_utc: 2026-11-22T03:56:01Z
- timezone_local: Europe/Paris (2026-11-22T04:56:01+0100)
- cycle: CYCLE 8 — DELIVERY PROJET
- typologie: EVOL / MISE À DISPOSITION RECETTE
- profil: CRITICAL
- product_versioning: NO RELEASE
- review_handoff: REQUIRED / PUBLISH-IN-CYCLE
- env_01: REQUIRED

---

## 1. GO Morris (indivisible)

| Identité | Valeur |
| --- | --- |
| SOURCE_SHA | `9f34639110ce2315a2bf8dc0786197bb8f5ea3b1` |
| SOURCE_TREE | `364c907342772f5430cf855d269cecc458f0546c` |
| BUILD_ID | `F85QQBTLa8nq5zKYxMKKZ` |
| HEAD docs (NON déployé) | `35906960e39eb617d39c76bf991f802ece4865ff` |

Autorisé : cutover LaunchAgent, backup/restore proof, smokes, docs non normatifs, L3.
NON : rebuild, migration, push projet, REAL WRITE, STABLE/RELEASE.

---

## 2. Git Truth

| Champ | Valeur |
| --- | --- |
| Repo | mcleland147/sfia-workspace |
| Branche projet | feat/next-ensemble08-git-publications-nora |
| HEAD tip local | 35906960e39eb617d39c76bf991f802ece4865ff (+ dirty docs cutover) |
| origin/main | a12f89a15c454319c06f49fcc5e8effa9f3f1a75 |
| Candidat local accessible | OUI — object + worktree détaché |
| TREE candidat | 364c907342772f5430cf855d269cecc458f0546c |
| Push projet | NONE |
| Handoff précédent | 8ea66892cf2c1827f6957bed910d7c51a7c622f0 |

---

## 3. ENV-01 pré-check (AVANT)

| Champ | Observé |
| --- | --- |
| URL | http://127.0.0.1:3200 |
| Service | com.sfia.studio.next.recette.ml4d-ux004 running |
| Program | start-recette-ensemble08-98185598.sh |
| BUILD HTTP | <!--1xEbvCdTAX6ht262w4oKF--> |
| SOURCE | 98185598de0d3f3b84af862aecea04b9099217ca |
| DB | 127.0.0.1:5434 / sfia_next_recette_ml4 |
| Secrets file | ~/.config/sfia-studio-next/recette/.env.local mode 600 |
| STUDIO_GITHUB_PROVIDER | real |
| STUDIO_GITHUB_ALLOW_MUTATIONS | EMPTY |
| OPENAI | SET (valeur non publiée) |
| STABLE | NOT AVAILABLE |

---

## 4. Validation artefact figé

| Champ | Résultat |
| --- | --- |
| Worktree | …/sfia-workspace-next-ml4d-ensemble08-postuat-build-9f346391 |
| HEAD détaché | 9f34639110ce2315a2bf8dc0786197bb8f5ea3b1 |
| TREE | 364c907342772f5430cf855d269cecc458f0546c |
| .next/BUILD_ID | F85QQBTLa8nq5zKYxMKKZ |
| Sidecars | SOURCE_SHA/TREE OK |
| node_modules | présent (npm ci freeze) |
| DSN DEV dans artefact | chaînes E2E gate only (sfia_next_dev/:5433) — identique ancien artefact ; DATABASE_URL runtime via env |
| Rebuild ce cycle | NON |

---

## 5. Inventaire DB AVANT

```
accounts|2
conversations|205
document_revisions|188
documents|117
effect_attempts|4
human_decisions|3
messages|639
observed_git_facts|0
project_git_links|15
projects|26
sessions|124
users|4
```
EquipCampus: `proj_a9ce5f43-a159-4a4b-acf6-826cb769088b|Equip'Campus`

---

## 6. Backup + restore proof

```
backup_basename=ml4d-e08-pre-postuat-cutover-20261122T035016Z-from-98185598.sql.gz
backup_dir=/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-recette-build-98185598/.sfia-recette/backups
bytes=716129
sha256=80c5e8aef39197261aa086fb762e105656b5c6cbfa61bb9face811fc139b49b5
db=sfia_next_recette_ml4
port=5434
ts_utc=20261122T035016Z
from_sha=98185598de0d3f3b84af862aecea04b9099217ca
from_build=1xEbvCdTAX6ht262w4oKF
proof_db=sfia_next_recette_restore_proof_e08_postuat
proof_status=PASS_THEN_DROPPED
```
gzip -t OK · restore isolée PASS · DROP proof DB only · RECETTE live projects=26 conservé.

---

## 7. Rollback préparé

- Plist bak: `com.sfia.studio.next.recette.ml4d-ux004.plist.98185598.pre-postuat-cutover-20261122T035032Z.bak`
- Artefact/script `@98185598` / BUILD `1xEbvCdTAX6ht262w4oKF`
- Helper `ROLLBACK-TO-E08-98185598.sh`
- E07 `BtZP6qDx5oAw8jwPQSEhc` réserve
- Rollback **non exercé** (cutover OK)

---

## 8. Script de lancement nouveau (intégral)

```bash
#!/bin/bash
set -euo pipefail
export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin"
cd "/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-postuat-build-9f346391/projects/sfia-studio-next/web"
set -a
source "$HOME/.config/sfia-studio-next/recette/.env.local"
set +a
export SFIA_SOURCE_SHA=9f34639110ce2315a2bf8dc0786197bb8f5ea3b1
export STUDIO_LANE=RECETTE
export STUDIO_PORT=3200
export NODE_ENV=production
unset STUDIO_FORCE_NORA_FIXTURE || true
export STUDIO_FORCE_NORA_FIXTURE=
unset STUDIO_E2E || true
unset STUDIO_NORA_SIMULATED_PROVIDER || true
unset STUDIO_GITHUB_ALLOW_MUTATIONS || true
export STUDIO_GITHUB_ALLOW_MUTATIONS=
unset STUDIO_DEV_HOLD_INITIAL_QUALIFICATION || true
unset NODE_PATH || true
exec npx next start -H 127.0.0.1 -p 3200
```

---

## 9. Diff plist expurgé

```diff
--- /dev/fd/11	2026-11-22 04:50:32
+++ /dev/fd/12	2026-11-22 04:50:32
@@ -5,10 +5,10 @@
   "KeepAlive" => true
   "Label" => "com.sfia.studio.next.recette.ml4d-ux004"
   "ProgramArguments" => [
-    0 => "/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-recette-build-98185598/start-recette-ensemble08-98185598.sh"
+    0 => "/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-postuat-build-9f346391/start-recette-ensemble08-postuat-9f346391.sh"
   ]
   "RunAtLoad" => true
-  "StandardErrorPath" => "/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-recette-build-98185598/launchd.err.log"
-  "StandardOutPath" => "/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-recette-build-98185598/launchd.out.log"
-  "WorkingDirectory" => "/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-recette-build-98185598/projects/sfia-studio-next/web"
+  "StandardErrorPath" => "/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-postuat-build-9f346391/launchd.err.log"
+  "StandardOutPath" => "/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-postuat-build-9f346391/launchd.out.log"
+  "WorkingDirectory" => "/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-postuat-build-9f346391/projects/sfia-studio-next/web"
 }
```

Opérations: `launchctl bootout` → install plist → bootstrap/kickstart → HTTP BUILD `F85QQBTLa8nq5zKYxMKKZ`.

---

## 10. Identité APRÈS cutover

| Champ | Valeur |
| --- | --- |
| Service | com.sfia.studio.next.recette.ml4d-ux004 running |
| Program | start-recette-ensemble08-postuat-9f346391.sh |
| PID launchd/npm | 47551 |
| next-server | 47577 · INIT_CWD …/postuat-build-9f346391/…/web |
| SFIA_SOURCE_SHA process | 9f34639110ce2315a2bf8dc0786197bb8f5ea3b1 |
| HTTP /login | 200 · <!--F85QQBTLa8nq5zKYxMKKZ--> |
| TCP DB | 127.0.0.1:5434 ESTABLISHED (pas :5433) |
| Port | 127.0.0.1:3200 unique |

---

## 11. Inventaire DB APRÈS

```
accounts|2
conversations|205
document_revisions|188
documents|117
effect_attempts|4
human_decisions|3
messages|639
observed_git_facts|0
project_git_links|15
projects|26
sessions|124
users|4
```
Diff inventaire: **vide** (identique). Equip'Campus présent.

---

## 12. Smokes fonctionnels

| Surface | Résultat |
| --- | --- |
| /login /portfolio /settings/integrations | 200 + BUILD |
| POST /api/dev/login Pilot A | 200 session (FAKE test login — NOT OAuth) |
| Surfaces projet Pilot A (travail/projet/trajectoire/documents/git/publications) | HTTP 200 · 0 error markers |
| GET git/sources + publications | 200 · counts 0 (Pilot A DISCONNECTED) |
| GET /api/integrations/status | providerMode=REAL · status=DISCONNECTED · repos=0 |
| Compte Morris GitHub | **non déconnecté** / non muté |
| WRITE REAL | OFF (ALLOW_MUTATIONS vide) |
| Nora LIVE E2E | NOT PROVEN |
| G5 | NOT PROVEN |

---

## 13. Observabilité

- launchd.err.log: vide / sans crash
- launchd.out.log: Next.js Ready · 127.0.0.1:3200
- Pas de boucle de redémarrage bloquante
- Aucun effet GitHub WRITE observé

---

## 14. Fake / Real Qualification

| Frontière | Niveau |
| --- | --- |
| Preuves freeze (unit/PG/SCRIPTED) | DETERMINISTIC PROVEN (cycle freeze) |
| Runtime servi | REAL BOUNDARY (artefact figé) |
| PostgreSQL RECETTE | REAL BOUNDARY |
| Smokes HTTP/API | BROWSER/HTTP OBSERVED |
| GitHub REAL READ (Morris) | NOT EXERCISED ce cycle (Pilot A disconnected) |
| GitHub REAL WRITE/MERGE | NOT PROVEN / OFF |
| Nora LIVE publication | NOT PROVEN |
| G5 / UAT Morris | NOT PROVEN |

---

## 15. Modifications documentaires (diffs complets)

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index f3705b3a..8f94a13e 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -3,6 +3,21 @@
 Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.

+## delivery_id: DELIV-2026-11-22-ENSEMBLE08-POST-UAT-01-RECETTE-CUTOVER
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-22 ≈ 04:50 CET (Europe/Paris) |
+| Macro-lot | Ensemble 08 — POST-UAT 01 cutover RECETTE |
+| Type | EVOL / MISE À DISPOSITION · CRITICAL · **NO RELEASE** |
+| GO Morris | SHA `9f346391…` · TREE `364c9073…` · BUILD `F85QQBTLa8nq5zKYxMKKZ` |
+| Avant | `@98185598` / `1xEbvCdTAX6ht262w4oKF` |
+| Après | servi HTTP `<!--F85QQBTLa8nq5zKYxMKKZ-->` · service `ml4d-ux004` |
+| DB | `sfia_next_recette_ml4` préservée · inventaire identique · Equip'Campus présent |
+| Backup | `ml4d-e08-pre-postuat-cutover-20261122T035016Z-from-98185598.sql.gz` + restore proof PASS |
+| Push projet | **NONE** |
+| Verdict | **RECETTE AVAILABLE — MORRIS UAT REQUIRED** |
+
 ## delivery_id: DELIV-2026-11-22-ENSEMBLE08-POST-UAT-01-FREEZE-LOCAL

 | Field | Value |
@@ -17,11 +32,11 @@ Append-only logical journal of Cursor product deliveries.
 | TREE | `364c907342772f5430cf855d269cecc458f0546c` |
 | BUILD_ID | `F85QQBTLa8nq5zKYxMKKZ` |
 | Artefact | `…/sfia-workspace-next-ml4d-ensemble08-postuat-build-9f346391/…/web/.next` |
-| GO Morris | Commit local + build détaché autorisés ; push/PR/cutover **NON** |
+| GO Morris | Commit local + build détaché autorisés ; push/PR/cutover **NON** (à ce stade) |
 | Réserves fermées | A contenu D4↔SCRIPTED · B D7 COMPLETED + D8 · C build détaché |
 | Push projet | **NONE** |
-| Cutover | **NOT EXECUTED** — RECETTE `@98185598` / `1xEbvCdTAX6ht262w4oKF` intacte |
-| Verdict | **CANDIDATE FROZEN — RECETTE GO REQUIRED** |
+| Cutover | traité ensuite — voir `…-RECETTE-CUTOVER` |
+| Verdict | **CANDIDATE FROZEN — RECETTE GO REQUIRED** (historique freeze) |

 ## delivery_id: DELIV-2026-11-22-ENSEMBLE08-POST-UAT-01-CLOTURE

diff --git a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
index 72570bbe..98ccb6ec 100644
--- a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
+++ b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
@@ -2,14 +2,14 @@

 | Champ | Valeur |
 |---|---|
-| Date | 2026-11-22 (POST-UAT 01 clôture publication Nora — as-built mis à jour) |
+| Date | 2026-11-22 (POST-UAT 01 cutover RECETTE — as-built mis à jour) |
 | Branche | `feat/next-ensemble08-git-publications-nora` |
 | Base | `origin/main` @ `a12f89a15c454319c06f49fcc5e8effa9f3f1a75` |
-| Profil | CRITICAL · Delivery correctif post-UAT · NO RELEASE |
+| Profil | CRITICAL · Delivery cutover post-UAT · NO RELEASE |
 | CKC | FALLBACK (Delivery #8) |
-| Freeze RECETTE (inchangé) | `98185598de0d3f3b84af862aecea04b9099217ca` · TREE `1c70839f` · BUILD `1xEbvCdTAX6ht262w4oKF` |
-| Candidat DEV post-UAT | **worktree dirty** — nouveau SHA après commit Morris (pas encore figé) |
-| RECETTE | **FROZEN / AVAILABLE** — aucune mutation ce mandat |
+| Runtime RECETTE servi | `9f34639110ce2315a2bf8dc0786197bb8f5ea3b1` · TREE `364c9073…` · BUILD `F85QQBTLa8nq5zKYxMKKZ` |
+| Runtime précédent (rollback) | `98185598de0d3f3b84af862aecea04b9099217ca` · BUILD `1xEbvCdTAX6ht262w4oKF` |
+| RECETTE | **AVAILABLE** — cutover POST-UAT 01 exécuté · DB préservée · UAT Morris requis |

 ## Livré (y compris finalisation technique)

@@ -64,8 +64,10 @@
 - END-TO-END REAL mutation GitHub : **NOT PROVEN** (WRITE/MERGE hors mandat)
 - GitHub REAL READ : **NOT PROVEN** ce cycle
 - Nora LIVE E2E : **NOT PROVEN**
-- Candidate Git figée / build RECETTE : **SERVI** `@98185598` / `1xEbvCdTAX6ht262w4oKF` sur lane E07
+- Candidate POST-UAT : **SERVI** `@9f346391` / `F85QQBTLa8nq5zKYxMKKZ` sur lane RECETTE `:3200`
+- Rollback immédiat : artefact `@98185598` / `1xEbvCdTAX6ht262w4oKF` conservé
 - G5 visuelle : **NOT PROVEN** — UAT Morris
+- Nora LIVE / GitHub REAL WRITE : **NOT PROVEN**

 ## Preuves exécutées (finalisation)
 - `tsc --noEmit` PASS
diff --git a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/manifeste-cutover-recette-e07-plus-e08.md b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/manifeste-cutover-recette-e07-plus-e08.md
index 5dd5f349..735991cc 100644
--- a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/manifeste-cutover-recette-e07-plus-e08.md
+++ b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/manifeste-cutover-recette-e07-plus-e08.md
@@ -106,8 +106,8 @@

 ## Verdict manifeste (cutover historique)

-**RECETTE AVAILABLE — MORRIS UAT REQUIRED**
-(runtime actuellement servi : SHA `98185598` / BUILD `1xEbvCdTAX6ht262w4oKF` — **inchangé** par le freeze POST-UAT 01)
+**RECETTE AVAILABLE — MORRIS UAT REQUIRED** (cutover E07→E08 historique)
+(runtime post-cutover E08 initial : SHA `98185598` / BUILD `1xEbvCdTAX6ht262w4oKF` — remplacé ensuite par section C POST-UAT 01)

 ---

@@ -127,8 +127,8 @@
 | BUILD_ID | `F85QQBTLa8nq5zKYxMKKZ` |
 | Artefact | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-postuat-build-9f346391/projects/sfia-studio-next/web/.next` |
 | Worktree build | détaché @ `9f346391` — hors DEV mutable / hors :3200 |
-| Cutover | **NOT EXECUTED** |
-| RECETTE actuelle | **préservée** `@98185598` / `1xEbvCdTAX6ht262w4oKF` — **non** branchée sur ce candidat |
+| Cutover (freeze) | préparé puis **exécuté** — voir section C |
+| Artefact runtime | inchangé `@9f346391` / `F85QQBTLa8nq5zKYxMKKZ` |

 ## Contenu candidat

@@ -152,18 +152,6 @@

 Aucune migration DB additionnelle requise pour ce candidat (vérifiée — schéma RECETTE `sfia_next_recette_ml4` compatible).

-## Mise à disposition future (NON EXÉCUTÉE)
-
-1. GO Morris SHA-specific + BUILD_ID
-2. Worktree/build détaché déjà produit
-3. Remplacer le ProgramArguments LaunchAgent **sans** toucher la DB
-4. Smoke HTTP BUILD_ID sur :3200
-5. Conserver artefacts E07 + E08 `@98185598` pour rollback
-
-## C. Cutover futur
-
-**NOT EXECUTED** — gate Morris distinct rattaché au nouveau SHA/BUILD.
-
 ## Identités figées (cohérence)

 | Identité | Valeur |
@@ -173,8 +161,77 @@ Aucune migration DB additionnelle requise pour ce candidat (vérifiée — sché
 | BUILD_ID | `F85QQBTLa8nq5zKYxMKKZ` |
 | Association | BUILD produit depuis worktree détaché au SOURCE_SHA (pas depuis worktree DEV dirty) |

-Un commit documentaire ultérieur peut enregistrer ces valeurs sans changer le SOURCE_SHA de cutover : le GO RECETTE futur doit cibler **exactement** ce SHA + BUILD_ID.
+HEAD documentaire `35906960…` **n’est pas** la source runtime.
+
+## Verdict section B (freeze)
+
+**CANDIDATE FROZEN** — cutover traité en section C.
+
+---
+
+# C. Mise à disposition RECETTE — POST-UAT 01 (exécutée)
+
+| Champ | Valeur |
+| --- | --- |
+| Date/heure cutover | 2026-11-22 ≈ 04:50 CET (UTC 03:50) |
+| GO Morris | SHA/TREE/BUILD indivisibles honorés |
+| Classe | **NO RELEASE** |
+| Lane | RECETTE existante `:3200` · `STUDIO_LANE=RECETTE` |
+| Service | `com.sfia.studio.next.recette.ml4d-ux004` (même label) |
+| SOURCE_SHA servi | `9f34639110ce2315a2bf8dc0786197bb8f5ea3b1` |
+| TREE | `364c907342772f5430cf855d269cecc458f0546c` |
+| BUILD_ID HTTP | `<!--F85QQBTLa8nq5zKYxMKKZ-->` |
+| Script | `…/ensemble08-postuat-build-9f346391/start-recette-ensemble08-postuat-9f346391.sh` |
+| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-postuat-build-9f346391` |
+| Mode | `npx next start -H 127.0.0.1 -p 3200` · production |
+| DB | `sfia_next_recette_ml4` @ `127.0.0.1:5434` — **aucune migration** |
+| GitHub | `providerMode=REAL` · `STUDIO_GITHUB_ALLOW_MUTATIONS` vide (WRITE OFF) |
+| Nora | LIVE credentials conservés · fixtures OFF · conduit NOT PROVEN |
+| Push projet | **NONE** |
+| STABLE | NOT AVAILABLE |
+
+## Runtime AVANT → APRÈS
+
+| | AVANT | APRÈS |
+| --- | --- | --- |
+| SOURCE_SHA | `98185598de0d3f3b84af862aecea04b9099217ca` | `9f34639110ce2315a2bf8dc0786197bb8f5ea3b1` |
+| BUILD_ID | `1xEbvCdTAX6ht262w4oKF` | `F85QQBTLa8nq5zKYxMKKZ` |
+| Script | `start-recette-ensemble08-98185598.sh` | `start-recette-ensemble08-postuat-9f346391.sh` |
+
+## Backup / restore proof
+
+| Élément | Valeur |
+| --- | --- |
+| Backup | `ml4d-e08-pre-postuat-cutover-20261122T035016Z-from-98185598.sql.gz` |
+| Emplacement | `…/ensemble08-recette-build-98185598/.sfia-recette/backups/` |
+| Bytes / SHA256 | 716129 / `80c5e8aef39197261aa086fb762e105656b5c6cbfa61bb9face811fc139b49b5` |
+| Restore proof | DB temp `sfia_next_recette_restore_proof_e08_postuat` → projects=26 messages=639 → DROP |
+| RECETTE active | intacte pendant/après proof |
+
+## Inventaire données (identique avant/après cutover)

-## Verdict section B
+projects=26 · documents=117 · document_revisions=188 · conversations=205 · messages=639 · sessions=124 · users=4 · accounts=2 · project_git_links=15 · effect_attempts=4 · human_decisions=3 · observed_git_facts=0 · Equip'Campus `proj_a9ce5f43…` présent

-**CANDIDATE FROZEN — RECETTE GO REQUIRED**
+## Rollback préparé (non exercé)
+
+- Plist bak : `com.sfia.studio.next.recette.ml4d-ux004.plist.98185598.pre-postuat-cutover-20261122T035032Z.bak`
+- Artefact E08 `@98185598` / BUILD `1xEbvCdTAX6ht262w4oKF` conservé
+- Script `ROLLBACK-TO-E08-98185598.sh` dans worktree postuat
+- Artefact E07 `BtZP6qDx5oAw8jwPQSEhc` en réserve
+
+## Smokes
+
+| Contrôle | Résultat |
+| --- | --- |
+| HTTP login/portfolio/integrations | 200 + BUILD `F85QQBTLa8nq5zKYxMKKZ` |
+| Process/CWD | next-server · worktree `…postuat-build-9f346391…/web` · TCP → `:5434` |
+| Surfaces projet Pilot A | travail/projet/trajectoire/documents/git/publications HTTP 200 |
+| Integrations API | `REAL` / `DISCONNECTED` (Pilot A) · repos=0 |
+| Git sources/pubs Pilot A | 200 listes vides (pas d’OAuth Pilot A ; compte Morris non perturbé) |
+| WRITE REAL | OFF — aucune mutation distante |
+| Nora LIVE E2E | NOT PROVEN |
+| G5 | NOT PROVEN |
+
+## Verdict section C
+
+**RECETTE AVAILABLE — MORRIS UAT REQUIRED**
```

### Manifeste (fichier complet post-cutover)

```markdown
# Manifeste ENV-01 — Cutover RECETTE E07 → E08 (exécuté)

| Champ | Valeur |
| --- | --- |
| Date/heure cutover | 2026-11-21 ≈ 21:02 CET (UTC 20:02) |
| Classe | **NO RELEASE** |
| Lane | **RECETTE existante** (`STUDIO_LANE=RECETTE`, port **3200**) |
| Cutover | **EXECUTED** — GO Morris SHA-specific honoré |
| STABLE | NOT AVAILABLE / non modifié |
| Verdict | **RECETTE AVAILABLE — MORRIS UAT REQUIRED** |

## GO Morris (borné)

| Champ | Valeur |
| --- | --- |
| SHA autorisé | `98185598de0d3f3b84af862aecea04b9099217ca` |
| TREE | `1c70839facb7fbc799980c585ce8bfba51cdb5d6` |
| BUILD_ID | `1xEbvCdTAX6ht262w4oKF` |
| Push/PR/merge projet | **NONE** |
| GitHub REAL WRITE/MERGE | **OFF** |

## Runtime AVANT (E07)

| Champ | Valeur |
| --- | --- |
| SOURCE_SHA | `5ad8fa57e4d529726244ddfae394074f5ea65432` |
| TREE | `f62a77a1b89dbcbfc1d4009d24c9859017d69cc6` |
| BUILD_ID | `BtZP6qDx5oAw8jwPQSEhc` |
| Script | `start-recette-ensemble07-5ad8fa57.sh` |
| Worktree | `…/sfia-workspace-next-ml4d-ensemble07-recette-build-5ad8fa57` |
| PID node | 75565 |

## Runtime APRÈS (E08) — observé

| Champ | Valeur |
| --- | --- |
| URL | http://127.0.0.1:3200 |
| Service | `com.sfia.studio.next.recette.ml4d-ux004` (même label) |
| Script | `…/ensemble08-recette-build-98185598/start-recette-ensemble08-98185598.sh` |
| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-recette-build-98185598` |
| WorkingDirectory | `…/web` |
| PID launchd / node | 52210 / 52237 (`next-server` v15.5.29) |
| SOURCE_SHA (script) | `98185598de0d3f3b84af862aecea04b9099217ca` |
| BUILD_ID fichier + HTTP | `1xEbvCdTAX6ht262w4oKF` (`<!--1xEbvCdTAX6ht262w4oKF-->`) |
| Mode | `npx next start -H 127.0.0.1 -p 3200` · production · pas de hot reload |
| Login HTTP | 200 |

## Actions cutover (exactes)

1. Plist backup : `com.sfia.studio.next.recette.ml4d-ux004.plist.5ad8fa57.pre-e08-cutover-20261121T200200Z.bak`
2. `launchctl bootout` du service
3. ProgramArguments → `start-recette-ensemble08-98185598.sh` ; WorkingDirectory → E08 `web/`
4. `launchctl bootstrap` même label
5. Vérification HTTP BUILD_ID + CWD processus

## PostgreSQL / données

| Champ | Valeur |
| --- | --- |
| DB | `sfia_next_recette_ml4` @ `127.0.0.1:5434` (`sfia-next-recette-pg`) |
| Isolation DEV | `sfia-next-dev-pg` :5433 distincte |
| Migrations E08 | **aucune** appliquée (invariant confirmé) |
| Inventaire AVANT | projects=26 · documents=117 · document_revisions=188 · conversations=203 · messages=629 · human_decisions=3 · effect_attempts=4 · business_command_effects=4 · project_git_links=15 · observed_git_facts=0 · users=4 · sessions=118 · accounts=2 |
| Inventaire APRÈS smoke | projects=**26** · messages=**633** (+4 essais Playwright Nora) · sessions=**123** (logins test) · Equip'Campus `proj_a9ce5f43…` présent · conversations=1 · messages=14 |
| Perte anormale | **NON** |

## Backup / restauration / rollback

| Élément | Statut |
| --- | --- |
| Backup historique | `ml4d-e07-pre-e08-cutover-20261121T193852Z-from-5ad8fa57.sql.gz` — gzip OK |
| Backup immédiat pré-cutover | `ml4d-e07-pre-e08-cutover-immediate-20261121T200119Z-from-5ad8fa57.sql.gz` — gzip OK |
| Preuve restore isolée | CREATE `sfia_next_recette_restore_proof_e08` → restore → projects=26/messages=629 → DROP — RECETTE intacte |
| Rollback E07 code | Worktree + BUILD `BtZP6qDx5oAw8jwPQSEhc` + plist `.bak` conservés — **non exercé** (cutover OK) |

## Capacités observées

| Capacité | Observation | Niveau |
| --- | --- | --- |
| E07 surfaces (Pilot A test login) | `/projects/…` travail/projet/trajectoire/documents/git → HTTP 200 | Browser/API smoke |
| Equip'Campus (Morris) | Présent en DB (identité OAuth Morris non exercée ce cycle) | DB continuity |
| Intégrations | `providerMode=REAL`, `status=DISCONNECTED` pour Pilot A | REAL config, non connecté |
| Git sources/pubs API | 200, listes vides sans dépôt rattaché | DETERMINISTIC path |
| GitHub REAL WRITE | Mutations OFF (`STUDIO_GITHUB_ALLOW_MUTATIONS` vide) | NOT PROVEN / OFF |
| Nora | Clé OPENAI présente en RECETTE → LIVE possible | LIVE config ; E2E conduit NOT PROVEN |
| Playwright E08 SCRIPTED | **3/3 FAIL** sur RECETTE — attendu (fixture≠LIVE ; connect SCRIPTED≠OAuth REAL) | N/A as REAL proof |
| G5 | **NOT PROVEN** — Morris UAT | Différé |

## Fake / Real

| Frontière | Niveau |
| --- | --- |
| Runtime build servi | REAL BOUNDARY (artefact figé servi) |
| PostgreSQL RECETTE | REAL BOUNDARY (même DB) |
| GitHub provider mode | REAL configuré ; WRITE OFF ; connexion Pilot A absente |
| Nora | LIVE credentials présents ; parcours conduit NOT PROVEN |
| Playwright SCRIPTED | NOT applicable as RECETTE proof |

## Réserves / gates Morris

1. UAT visuelle page 11 (G5)
2. Parcours Git avec compte Morris + App autorisée
3. Nora conduite documentaire LIVE bornée (sans WRITE si non autorisé)
4. GO éventuel sandbox WRITE/MERGE
5. Push/PR projet hors cycle

## Verdict manifeste (cutover historique)

**RECETTE AVAILABLE — MORRIS UAT REQUIRED** (cutover E07→E08 historique)
(runtime post-cutover E08 initial : SHA `98185598` / BUILD `1xEbvCdTAX6ht262w4oKF` — remplacé ensuite par section C POST-UAT 01)

---

# B. Candidat E08 POST-UAT 01 — freeze local (préparé)

| Champ | Valeur |
| --- | --- |
| Date/heure freeze local | 2026-11-22 ≈ 04:33 CET (Europe/Paris) |
| GO Morris | Freeze local + build détaché **autorisés** ; cutover RECETTE **non** autorisé |
| Classe | **NO RELEASE** · CANDIDAT |
| Repo | `mcleland147/sfia-workspace` |
| Branche | `feat/next-ensemble08-git-publications-nora` |
| Base `origin/main` | `a12f89a15c454319c06f49fcc5e8effa9f3f1a75` |
| Parent commit | `29066442a7fa51b106d9fe45b5c1b05da7f13004` |
| SOURCE_SHA (candidat runtime) | `9f34639110ce2315a2bf8dc0786197bb8f5ea3b1` |
| TREE | `364c907342772f5430cf855d269cecc458f0546c` |
| BUILD_ID | `F85QQBTLa8nq5zKYxMKKZ` |
| Artefact | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-postuat-build-9f346391/projects/sfia-studio-next/web/.next` |
| Worktree build | détaché @ `9f346391` — hors DEV mutable / hors :3200 |
| Cutover (freeze) | préparé puis **exécuté** — voir section C |
| Artefact runtime | inchangé `@9f346391` / `F85QQBTLa8nq5zKYxMKKZ` |

## Contenu candidat

- Ensemble 08 initial + correctifs UX POST-UAT 01
- Publication document existant + réconciliation `objectRef`/`documentHint`
- Contrôle D4 document/révision ; D6/D7/D8/D9 ; restitution Nora
- Reprise/idempotence ; filtre branche S03 (fix useEffect)
- Preuves : unit + PG WRITE OFF / SCRIPTED contenu D4↔Git + terminalité COMPLETED + Playwright Nora/Git

## Fake / Real (candidat)

| Frontière | Niveau |
| --- | --- |
| Unit / PG / SCRIPTED | DETERMINISTIC PROVEN |
| Playwright DEV SCRIPTED | BROWSER + Git simulé |
| Nora LIVE | NOT PROVEN |
| GitHub REAL WRITE/MERGE | NOT PROVEN |
| G5 pixel / UAT Morris | NOT PROVEN |

## Migrations

Aucune migration DB additionnelle requise pour ce candidat (vérifiée — schéma RECETTE `sfia_next_recette_ml4` compatible).

## Identités figées (cohérence)

| Identité | Valeur |
| --- | --- |
| SOURCE_SHA | `9f34639110ce2315a2bf8dc0786197bb8f5ea3b1` |
| TREE | `364c907342772f5430cf855d269cecc458f0546c` |
| BUILD_ID | `F85QQBTLa8nq5zKYxMKKZ` |
| Association | BUILD produit depuis worktree détaché au SOURCE_SHA (pas depuis worktree DEV dirty) |

HEAD documentaire `35906960…` **n’est pas** la source runtime.

## Verdict section B (freeze)

**CANDIDATE FROZEN** — cutover traité en section C.

---

# C. Mise à disposition RECETTE — POST-UAT 01 (exécutée)

| Champ | Valeur |
| --- | --- |
| Date/heure cutover | 2026-11-22 ≈ 04:50 CET (UTC 03:50) |
| GO Morris | SHA/TREE/BUILD indivisibles honorés |
| Classe | **NO RELEASE** |
| Lane | RECETTE existante `:3200` · `STUDIO_LANE=RECETTE` |
| Service | `com.sfia.studio.next.recette.ml4d-ux004` (même label) |
| SOURCE_SHA servi | `9f34639110ce2315a2bf8dc0786197bb8f5ea3b1` |
| TREE | `364c907342772f5430cf855d269cecc458f0546c` |
| BUILD_ID HTTP | `<!--F85QQBTLa8nq5zKYxMKKZ-->` |
| Script | `…/ensemble08-postuat-build-9f346391/start-recette-ensemble08-postuat-9f346391.sh` |
| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-postuat-build-9f346391` |
| Mode | `npx next start -H 127.0.0.1 -p 3200` · production |
| DB | `sfia_next_recette_ml4` @ `127.0.0.1:5434` — **aucune migration** |
| GitHub | `providerMode=REAL` · `STUDIO_GITHUB_ALLOW_MUTATIONS` vide (WRITE OFF) |
| Nora | LIVE credentials conservés · fixtures OFF · conduit NOT PROVEN |
| Push projet | **NONE** |
| STABLE | NOT AVAILABLE |

## Runtime AVANT → APRÈS

| | AVANT | APRÈS |
| --- | --- | --- |
| SOURCE_SHA | `98185598de0d3f3b84af862aecea04b9099217ca` | `9f34639110ce2315a2bf8dc0786197bb8f5ea3b1` |
| BUILD_ID | `1xEbvCdTAX6ht262w4oKF` | `F85QQBTLa8nq5zKYxMKKZ` |
| Script | `start-recette-ensemble08-98185598.sh` | `start-recette-ensemble08-postuat-9f346391.sh` |

## Backup / restore proof

| Élément | Valeur |
| --- | --- |
| Backup | `ml4d-e08-pre-postuat-cutover-20261122T035016Z-from-98185598.sql.gz` |
| Emplacement | `…/ensemble08-recette-build-98185598/.sfia-recette/backups/` |
| Bytes / SHA256 | 716129 / `80c5e8aef39197261aa086fb762e105656b5c6cbfa61bb9face811fc139b49b5` |
| Restore proof | DB temp `sfia_next_recette_restore_proof_e08_postuat` → projects=26 messages=639 → DROP |
| RECETTE active | intacte pendant/après proof |

## Inventaire données (identique avant/après cutover)

projects=26 · documents=117 · document_revisions=188 · conversations=205 · messages=639 · sessions=124 · users=4 · accounts=2 · project_git_links=15 · effect_attempts=4 · human_decisions=3 · observed_git_facts=0 · Equip'Campus `proj_a9ce5f43…` présent

## Rollback préparé (non exercé)

- Plist bak : `com.sfia.studio.next.recette.ml4d-ux004.plist.98185598.pre-postuat-cutover-20261122T035032Z.bak`
- Artefact E08 `@98185598` / BUILD `1xEbvCdTAX6ht262w4oKF` conservé
- Script `ROLLBACK-TO-E08-98185598.sh` dans worktree postuat
- Artefact E07 `BtZP6qDx5oAw8jwPQSEhc` en réserve

## Smokes

| Contrôle | Résultat |
| --- | --- |
| HTTP login/portfolio/integrations | 200 + BUILD `F85QQBTLa8nq5zKYxMKKZ` |
| Process/CWD | next-server · worktree `…postuat-build-9f346391…/web` · TCP → `:5434` |
| Surfaces projet Pilot A | travail/projet/trajectoire/documents/git/publications HTTP 200 |
| Integrations API | `REAL` / `DISCONNECTED` (Pilot A) · repos=0 |
| Git sources/pubs Pilot A | 200 listes vides (pas d’OAuth Pilot A ; compte Morris non perturbé) |
| WRITE REAL | OFF — aucune mutation distante |
| Nora LIVE E2E | NOT PROVEN |
| G5 | NOT PROVEN |

## Verdict section C

**RECETTE AVAILABLE — MORRIS UAT REQUIRED**
```

### as-built (tête mise à jour)

```markdown
# Ensemble 08 — As-built (consultation Git + conduite Nora)

| Champ | Valeur |
|---|---|
| Date | 2026-11-22 (POST-UAT 01 cutover RECETTE — as-built mis à jour) |
| Branche | `feat/next-ensemble08-git-publications-nora` |
| Base | `origin/main` @ `a12f89a15c454319c06f49fcc5e8effa9f3f1a75` |
| Profil | CRITICAL · Delivery cutover post-UAT · NO RELEASE |
| CKC | FALLBACK (Delivery #8) |
| Runtime RECETTE servi | `9f34639110ce2315a2bf8dc0786197bb8f5ea3b1` · TREE `364c9073…` · BUILD `F85QQBTLa8nq5zKYxMKKZ` |
| Runtime précédent (rollback) | `98185598de0d3f3b84af862aecea04b9099217ca` · BUILD `1xEbvCdTAX6ht262w4oKF` |
| RECETTE | **AVAILABLE** — cutover POST-UAT 01 exécuté · DB préservée · UAT Morris requis |

## Livré (y compris finalisation technique)

### Capacité A — Consultation Git
- Listing répertoire D9 : `listDirectory` / `listGitDirectory` / `GET .../git/tree`
- `normalizeGitReadPath` : rejet `..`, absolu, encodé, backslash ; racine vide autorisée
- Dépassement >200 entrées → `AMBIGUOUS` — pas de truncation silencieuse
- **E08-S03 (fermé ce cycle)** : `ListRefsResult` / `FetchMatchingRefsResult` avec `incompleteCoverage` + `matchedCount` **avant** troncature UI (bound 40) — REAL et SCRIPTED alignés ; `listGitRefs` ne déduit plus `complete` d’une liste déjà tronquée ; résolution exacte `getRefSha` conservée
- Fichiers binaires / trop volumineux : non rendus comme Markdown
- Projection publications : faits MERGE corrélés via `publicationAttemptId` de la tentative GIT_MERGE
- Surface UI : publications 30/70 (11.04), détails agrandis (11.05), confirmation déconnexion (11.07) ; indicateur couverture refs incomplète

### Capacité B — Nora
- Qualification durable `d7.merge_publication` (schema + projection `merge.wantsMerge`)
- `wantsMergeFromQual` **jamais** forcé à `true` depuis le seul mot « merge »
- Cible exacte dépôt + PR ; contradiction same-PR → zéro effet
- `admitConversationalMergeMandate` + provenance USER D6
- Merge SHA : `merge_commit_sha` observé uniquement
```

### delivery-history (tête)

```markdown
# SFIA Studio Next — Delivery history

Append-only logical journal of Cursor product deliveries.
**Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-POST-UAT-01-RECETTE-CUTOVER

| Field | Value |
| --- | --- |
| Date | 2026-11-22 ≈ 04:50 CET (Europe/Paris) |
| Macro-lot | Ensemble 08 — POST-UAT 01 cutover RECETTE |
| Type | EVOL / MISE À DISPOSITION · CRITICAL · **NO RELEASE** |
| GO Morris | SHA `9f346391…` · TREE `364c9073…` · BUILD `F85QQBTLa8nq5zKYxMKKZ` |
| Avant | `@98185598` / `1xEbvCdTAX6ht262w4oKF` |
| Après | servi HTTP `<!--F85QQBTLa8nq5zKYxMKKZ-->` · service `ml4d-ux004` |
| DB | `sfia_next_recette_ml4` préservée · inventaire identique · Equip'Campus présent |
| Backup | `ml4d-e08-pre-postuat-cutover-20261122T035016Z-from-98185598.sql.gz` + restore proof PASS |
| Push projet | **NONE** |
| Verdict | **RECETTE AVAILABLE — MORRIS UAT REQUIRED** |

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-POST-UAT-01-FREEZE-LOCAL

| Field | Value |
| --- | --- |
| Date | 2026-11-22 ≈ 04:33 CET (Europe/Paris) |
| Macro-lot | Ensemble 08 — POST-UAT 01 freeze local candidat |
| Type | EVOL / QA / FREEZE CANDIDAT · CRITICAL · **NO RELEASE** |
| Branche | `feat/next-ensemble08-git-publications-nora` |
| Base | `origin/main` `a12f89a15c454319c06f49fcc5e8effa9f3f1a75` |
| Parent | `29066442a7fa51b106d9fe45b5c1b05da7f13004` |
| SOURCE_SHA | `9f34639110ce2315a2bf8dc0786197bb8f5ea3b1` |
| TREE | `364c907342772f5430cf855d269cecc458f0546c` |
| BUILD_ID | `F85QQBTLa8nq5zKYxMKKZ` |
| Artefact | `…/sfia-workspace-next-ml4d-ensemble08-postuat-build-9f346391/…/web/.next` |
| GO Morris | Commit local + build détaché autorisés ; push/PR/cutover **NON** (à ce stade) |
| Réserves fermées | A contenu D4↔SCRIPTED · B D7 COMPLETED + D8 · C build détaché |
| Push projet | **NONE** |
| Cutover | traité ensuite — voir `…-RECETTE-CUTOVER` |
| Verdict | **CANDIDATE FROZEN — RECETTE GO REQUIRED** (historique freeze) |

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-POST-UAT-01-CLOTURE

| Field | Value |
| --- | --- |
| Date | 2026-11-22 (Europe/Paris) |
| Macro-lot | Ensemble 08 — POST-UAT 01 clôture écarts publication Nora |
| Type | INC / EVOL · CRITICAL · **NO RELEASE** |
| Branche | `feat/next-ensemble08-git-publications-nora` |
| Base | `origin/main` `a12f89a1` · HEAD `29066442` + worktree dirty |
| RECETTE | **FROZEN** `@98185598` / BUILD `1xEbvCdTAX6ht262w4oKF` — **aucune mutation** |
```

Note: docs cutover **locaux non commités projet** (mandat: pas de commit/push projet). Publication via L3 uniquement.

---

## 16. Réserves / gates Morris

1. UAT visuelle G5
2. Parcours Git avec compte Morris + App autorisée (REAL READ)
3. Nora conduite documentaire LIVE bornée (sans WRITE si non autorisé)
4. GO éventuel sandbox WRITE/MERGE
5. Push/PR projet hors cycle

---

## 17. Verdict

**RECETTE AVAILABLE — MORRIS UAT REQUIRED**

Cutover exécuté · BUILD `F85QQBTLa8nq5zKYxMKKZ` servi · données préservées · WRITE OFF · pas d'UAT acceptée · pas STABLE/ADOPTED.

FIN PACK — Ensemble 08 POST-UAT 01 CUTOVER RECETTE
