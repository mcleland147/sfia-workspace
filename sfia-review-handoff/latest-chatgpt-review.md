# SFIA Studio Next — ML5 R5 Review Pack LIGHT
## RECETTE cutover — residual UX refinements `1633c86b`

| Field | Value |
|---|---|
| Date/heure | 2026-11-26T08:21:29+01:00 |
| Cycle | 11 / INC Critical / Déploiement · R5 IN PROGRESS / ML5 OPEN / R6 NOT STARTED |
| GO Morris | **RECETTE ACCORDÉ** · PR/MERGE/STABLE **ABSENT** |
| Mode | publish-in-cycle · Review Pack LIGHT · Handoff L3 REQUIRED |
| Candidate SHA **servi** | `1633c86b0330265436a1d73a7762de6562867bac` |
| Tree / web tree | `85c53fd4110da42e69df49625d3e3b5a773de624` / `e972dc0437033c4e463ac8f51519285927b1f45c` |
| BUILD_ID | `g91mwyAgMId3zEUm7CcLq` |
| Digest | `1a4da02684294f08a528bb32281362a6fa925099a9a890213fd5201572a5e43a` |
| URL | http://127.0.0.1:3200 |
| Previous | `70cf3e4a` / `m5QcOrvjUz8vVAidDKxOZ` |
| Docs commit (delivery-history only) | `e3f5bde266c4e2549024f68458971278aad123eb` |
| Verdict | **ML5 RESIDUAL UX REFINEMENTS — RECETTE CUTOVER VERIFIED — READY FOR MORRIS UAT** |

---

## 1. Git Truth Check

- Repo `mcleland147/sfia-workspace` · origin GitHub
- Branche produit `sfia/next-ml5-integrated-delivery-20261123`
- HEAD produit au cutover (candidat) : `1633c86b0330265436a1d73a7762de6562867bac`
- Merge-base `origin/main` : `997897fd7cf914771e7d08e8030dc7123fab7d25` (inchangé)
- Ascendance `70cf3e4a` ⊂ `1633c86b` : **YES**
- Diff cumulatif `70cf3e4a..1633c86b` (web) : 7 fichiers UX/docs tests — **aucune migration / schéma**
- Dirty pré-cutover : `.tmp-sfia-review/chatgpt-review.md` seul (attendu)
- Aucun reset/rebase/merge/push produit
- Worktree rollback `…-70cf3e4aa09a` **préservé**
- Nouveau worktree `…-1633c86b0330` détaché @ `1633c86b`

## 2. Sources consultées

ENV-01 + Product Versioning (origin/main blobs VALIDATED) ; delivery-history local ; handoffs `480a32cc` (UX delivery), `eb81bffd` (précédent cutover), `5f196792` (boundary) ; PV InterventionTrack §9 (périmètre UAT) ; procédure launchd `com.sfia.studio.next.recette.ml4d-ux004`.

## 3. Identités avant / après

| | Avant | Après |
|---|---|---|
| SHA servi | `70cf3e4a` | `1633c86b` |
| BUILD_ID | `m5QcOrvjUz8vVAidDKxOZ` | `g91mwyAgMId3zEUm7CcLq` |
| Worktree | `…-70cf3e4aa09a` | `…-1633c86b0330` |
| PID :3200 | 45959 | 11284 |
| DEV :3100 | `qWUDds50AUSup8n2GqNTC` | **inchangé** `qWUDds50AUSup8n2GqNTC` |

Boot log : `SHA=1633c86b… BUILD=g91mwyAgMId3zEUm7CcLq LANE=RECETTE COG=OPERATIONAL_PROVISIONAL MAX_TOK=2000000 REEVAL=1000000 SEGS=120 WEB_LIVE=0`

## 4. Manifeste RECETTE (non secret)

```yaml
lane: RECETTE
delivery_id: DELIV-2026-11-26-ML5-RESIDUAL-UX-RECETTE-CUTOVER
source_repository: mcleland147/sfia-workspace
source_branch: sfia/next-ml5-integrated-delivery-20261123
base_main_sha: 997897fd7cf914771e7d08e8030dc7123fab7d25
candidate_sha: 1633c86b0330265436a1d73a7762de6562867bac
web_tree: e972dc0437033c4e463ac8f51519285927b1f45c
previous_sha: 70cf3e4aa09a8bc35be5bd967b6b016ecb2b779a
previous_build_id: m5QcOrvjUz8vVAidDKxOZ
build_identifier: g91mwyAgMId3zEUm7CcLq
build_digest: 1a4da02684294f08a528bb32281362a6fa925099a9a890213fd5201572a5e43a
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
worktree: /Users/morris/Projects/sfia-workspace-next-ml5-recette-build-1633c86b0330
start_script: /Users/morris/Projects/sfia-workspace-next-ml5-recette-build-1633c86b0330/start-recette-ml5-g91mwyAgMId3zEUm7CcLq.sh
backup: /Users/morris/Projects/sfia-recette-backups/ml5-20261126T071803Z-pre-1633c86b-from-70cf3e4a.sql.gz
backup_sha256: 855fd76f48b46fee8464600169e0b56734f31ae86e0502d0244e0d52e5f78de2
rollback_worktree: /Users/morris/Projects/sfia-workspace-next-ml5-recette-build-70cf3e4aa09a
rollback_start: /Users/morris/Projects/sfia-workspace-next-ml5-recette-build-70cf3e4aa09a/start-recette-ml5-m5QcOrvjUz8vVAidDKxOZ.sh

```

## 5. Sauvegarde et rollback

- Dump : `/Users/morris/Projects/sfia-recette-backups/ml5-20261126T071803Z-pre-1633c86b-from-70cf3e4a.sql.gz`
- sha256 : `855fd76f48b46fee8464600169e0b56734f31ae86e0502d0244e0d52e5f78de2` · gzip -t **OK**
- Rollback code : worktree + start `m5QcOrvjUz8vVAidDKxOZ` + plist bak `…20261126T072011Z.pre-ux-cutover-70cf3e4aa09a.bak`
- Migration requise : **false**

## 6. Comptages métier

### Avant
```
projects=31
conversations=210
messages=822
documents=123
revisions=195
pilots=170
cog_works=23
ckpts=165
activity=248
preparations=210
```

### Après
```
projects=31
conversations=210
messages=822
documents=123
revisions=195
pilots=170
cog_works=23
ckpts=165
activity=248
preparations=210
```

**Δ = 0** sur tous les compteurs. StockTrack « Conception fonctionnelle V1 » · **2 révisions** conservées.

## 7. Contrôles exécutés

| Contrôle | Résultat |
|---|---|
| `/login` | 200 · HTML `<!--g91mwyAgMId3zEUm7CcLq-->` |
| `/api/portfolio` sans auth | 401 SESSION_INVALID |
| `/api/dev/auto-session` | 403 DEV_AUTO_SESSION_UNAVAILABLE |
| PG host/port/db | 127.0.0.1:5434 / `sfia_next_recette_ml4` |
| Lane / WEB LIVE / DEV login | RECETTE / 0 / 0 |
| Cognition | OPERATIONAL_PROVISIONAL 2M/1M/120 |
| DEV `:3100` | HTML `qWUDds50AUSup8n2GqNTC` préservé |
| Nouveau code | **AUCUN** |
| LIVE Nora rejoué | **NON** |

## 8. Modification documentaire (contenu)

```markdown
# SFIA Studio Next — Delivery history

Append-only logical journal of Cursor product deliveries.
**Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.

## delivery_id: DELIV-2026-11-26-ML5-RESIDUAL-UX-RECETTE-CUTOVER

| Field | Value |
| --- | --- |
| Date | 2026-11-26 (Europe/Paris) |
| Macro-lot | ML5 R5 — mise à disposition RECETTE des finitions UX résiduelles |
| Type | INC Critical · cutover RECETTE · **NO RELEASE** · **NO PR/MERGE/STABLE** |
| Branche source | `sfia/next-ml5-integrated-delivery-20261123` |
| Candidate SHA **servi** | `1633c86b0330265436a1d73a7762de6562867bac` |
| Tree / web tree | *(commit tree)* / `e972dc0437033c4e463ac8f51519285927b1f45c` |
| Worktree RECETTE | `/Users/morris/Projects/sfia-workspace-next-ml5-recette-build-1633c86b0330` |
| BUILD_ID RECETTE | `g91mwyAgMId3zEUm7CcLq` · digest `1a4da02684294f08a528bb32281362a6fa925099a9a890213fd5201572a5e43a` |
| URL | `http://127.0.0.1:3200` · PG `:5434` · base `sfia_next_recette_ml4` |
| Cognition effective | OPERATIONAL_PROVISIONAL · **2M / 1M / 120** |
| WEB LIVE | **BLOQUÉ** (0/0/0) |
| Contenu | Bascule technique du candidat DEV finitions UX (IT-01/02/04/05 + comparateur) ; **aucun correctif nouveau** ; smoke technique uniquement |
| Preuves | login 200 · portfolio 401 · auto-session 403 · BUILD HTML `g91mwyAgMId3zEUm7CcLq` · counts Δ=0 · DEV préservé `:3100`/`qWUDds50AUSup8n2GqNTC` · StockTrack V1 titre + 2 révisions |
| Données AVANT/APRÈS | projects=31 documents=123 revisions=195 conversations=210 messages=822 pilots=170 cog_works=23 ckpts=165 activity=248 preparations=210 (**Δ=0**) |
| Sauvegarde | `/Users/morris/Projects/sfia-recette-backups/ml5-20261126T071803Z-pre-1633c86b-from-70cf3e4a.sql.gz` · sha256 `855fd76f48b46fee8464600169e0b56734f31ae86e0502d0244e0d52e5f78de2` |
| Rollback code | worktree `…-70cf3e4aa09a` · build `m5QcOrvjUz8vVAidDKxOZ` · plist bak `…20261126T072011Z.pre-ux-cutover-70cf3e4aa09a.bak` · start `start-recette-ml5-m5QcOrvjUz8vVAidDKxOZ.sh` |
| DEV | **préservé** `:3100` / `:5433` · build `qWUDds50AUSup8n2GqNTC` · tip local `1633c86b` |
| Push produit | **NONE** |
| Réserves UAT Morris | typo densité ; activité LIVE/historique ; tableaux naturels Nora ; comparateur lisibilité ; animation SAS utilisateur ; normalisation URL sources → lot WEB |
| Concordance | Build RECETTE depuis SHA figé `1633c86b` (web tree `e972dc04…`) ; BUILD_ID distinct du DEV `qWUDds50AUSup8n2GqNTC` |
| Verdict | **ML5 RESIDUAL UX REFINEMENTS — RECETTE CUTOVER VERIFIED — READY FOR MORRIS UAT** |

## delivery_id: DELIV-2026-11-26-ML5-RESIDUAL-UX-REFINEMENTS-DEV

| Field | Value |
| --- | --- |
| Date | 2026-11-26 (Europe/Paris) |
| Macro-lot | ML5 R5 — finitions UX résiduelles (IT-01/02/04/05 + comparateur) · clôture présentation livraison 1 |
| Type | INC Standard · **NO RELEASE** · **RECETTE UNCHANGED** |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| Contenu | Typo fil 12px ; activité sans headline redondant ; sources uniques vs consultations ; compare +N/−M lignes ; tableaux min-width ; comparateur Markdown + sens de lecture ; SAS non-régression |
| Preuves | activity-labels 9 PASS ; Playwright UX-TYPO+UX-SAS PASS · body 12px · headline 15px · group 12px · td nowrap |
| DEV build | `qWUDds50AUSup8n2GqNTC` · `:3100` |
| RECETTE | **inchangée** · `70cf3e4a` / `m5QcOrvjUz8vVAidDKxOZ` · `:3200` |
| Push produit | **NONE** |
| Verdict | **ML5 RESIDUAL UX REFINEMENTS — DEV DELIVERY VERIFIED — DOCUMENTARY BEHAVIOR PRESERVED — RECETTE UNCHANGED — READY FOR TARGETED USER REVIEW** |
```

## 9. Réserves UAT (non bloquantes)

- Typographie densité / hiérarchie
- Activité LIVE et historique
- Tableaux conversationnels naturels Nora
- Comparateur lisibilité
- Animation SAS chez Morris
- Normalisation identités URL sources → prochain lot WEB

## 10. Verdict

**ML5 RESIDUAL UX REFINEMENTS — RECETTE CUTOVER VERIFIED — READY FOR MORRIS UAT.**

R5 IN PROGRESS · ML5 OPEN · R6 NOT STARTED · NO RELEASE · NOT ADOPTED
