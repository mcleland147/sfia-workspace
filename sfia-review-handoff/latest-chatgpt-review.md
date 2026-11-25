# SFIA Studio Next — ML5 Nora Cognitive Completion — RECETTE CUTOVER — Review Pack FULL

Generated: 2026-11-25T15:01:54Z

Verdict target: **NORA COGNITIVE COMPLETION — RECETTE CUTOVER VERIFIED — READY FOR MORRIS UAT**

Does **NOT** mean: USER ACCEPTED · ML5 CLOSED · STABLE · RELEASE · ADOPTED · 50 SOURCES COMPLETE.

## 1. Git Truth Check

| Field | Value |
| --- | --- |
| Repository | https://github.com/mcleland147/sfia-workspace.git |
| Product branch | `sfia/next-ml5-integrated-delivery-20261123` |
| Product tip (docs post-cutover) | `0d37b12a8dae07c88907b7e5a7cfa130e1940a41` |
| **SHA servi RECETTE** | `ca0b114c6f7336ba0073d03f8d391fe05182bf86` |
| Delivery app | `86be16899b93f962be3a50efa70d968637ea09d6` |
| Base prior delivery | `d58d42802e50d64c97cdfc9e66bc769c74e0c0fa` |
| Main | `997897fd7cf914771e7d08e8030dc7123fab7d25` |
| Merge-base | `997897fd…` |
| Staged | 0 |
| Product push | **NONE** |
| Handoff L3 | `sfia/review-handoff` only |

## 2. Identity gate (ChatGPT prior divergence)

| Commit | Tree | Web tree |
| --- | --- | --- |
| `86be1689` (code) | `6a6a2564…` | `7b93ddc4…` |
| `ca0b114c` (GO tip) | `b555377d…` | `99dd2c6b…` |

Diff `86be..ca0b` (3 files only):
- `construction/delivery-history.md`
- `construction/ml5-registre-couverture-et-revue-developpement.md`
- `web/scripts/ml5-cognitive-completion-short-live.mjs` (SQL helper newline)

**Conclusion:** divergence = **erreur de métadonnées documentaire** dans delivery-history @86be (web tree figé trop tôt) + script de preuve hors bundle Next. **Aucun delta applicatif runtime** entre le candidat revu et `ca0b114c`. Cutover autorisé sur `ca0b114c`.

Migration delta `2a024b1c..ca0b114c` on `web/src/db/migrations`: **empty** (001–021 identical). No migration applied.

## 3. Sources consulted

- ENV-01 / product-versioning (mandate blobs)
- Prior L3 `@7622e403` cognitive completion pack
- Prior cutover mechanism `@eef8d289` (LaunchAgent / backup pattern)
- Active LaunchAgent `com.sfia.studio.next.recette.ml4d-ux004`
- RECETTE `.env.local` keys (values cognitive updated; secrets not copied here)

## 4. Backup

- Path: `/Users/morris/Projects/sfia-recette-backups/ml5-20261125T145816Z-pre-ca0b114c`
- Dump sha256: `3c49b53c9c5c0680e60952cab393959e260e541faf921c4f72bc100699d32727`
- Dump TOC readable: yes (346 entries)
- Previous identity / plist / start-script / env-redacted included
- Counts before:
```
projects=28
conversations=207
messages=773
documents=119
document_revisions=190
cognitive_works=10
cognitive_work_checkpoints=104
```

## 5. RECETTE Manifest

| Field | Value |
| --- | --- |
| URL | http://127.0.0.1:3200 |
| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml5-recette-build-ca0b114c6f73` |
| Cwd | `…/projects/sfia-studio-next/web` |
| PID | 48039 |
| SHA | `ca0b114c6f7336ba0073d03f8d391fe05182bf86` |
| Web tree | `99dd2c6b3db728434a452d4f93775e0e2a6e1e0a` |
| BUILD_ID | `RkthxGW_bZUygxYbwP9Hq` |
| Digest | `890007559f60f0b1ed73142dcf93758db5d24ec9ac5dd5bf7210d44ba10ae1ed` |
| Lane | RECETTE |
| PostgreSQL | `sfia_next_recette_ml4` @ `127.0.0.1:5434` |
| Cognition | OPERATIONAL_PROVISIONAL · gpt-6.2-sol · maxTokens=2000000 · reeval=1000000 · segments=120 |
| WEB LIVE | BLOCKED 0/0/0 |
| Auto-session | 403 DEV_AUTO_SESSION_UNAVAILABLE |
| Cursor dispatch in this cycle | none |
| D8 independent | unchanged blocked |
| Dataset after | identical to before (28/207/773/119/190/10/104) |

## 6. Start script (expurgated)

File: `start-recette-ml5-RkthxGW_bZUygxYbwP9Hq.sh` — sources protected RECETTE env; forces SHA/BUILD/LANE; overrides cognitive 2M/1M/120; WEB LIVE=0; no DEV auto-session.

Boot log:
```
[sfia-recette-boot] 2026-11-25T15:00:08Z SHA=ca0b114c6f7336ba0073d03f8d391fe05182bf86 BUILD=RkthxGW_bZUygxYbwP9Hq LANE=RECETTE COG=OPERATIONAL_PROVISIONAL MAX_TOK=2000000 REEVAL=1000000 SEGS=120 WEB_LIVE=0
```

## 7. Smoke tests

### A Identity
```
recette_build=RkthxGW_bZUygxYbwP9Hq
recette_len=7842
dev_build=AWs47BqI_EoJvkDkE4Lzi
dev_len=7842
=== A identity ===
url=http://127.0.0.1:3200
login_html_build=/$
pid=48039
cwd=/Users/morris/Projects/sfia-workspace-next-ml5-recette-build-ca0b114c6f73/projects/sfia-studio-next/web
sha_expected=ca0b114c6f7336ba0073d03f8d391fe05182bf86
build_expected=RkthxGW_bZUygxYbwP9Hq
```
### B Auth
```
=== B auth ===
login=200
portfolio_nosession=200
auto_session=403
auto_session_body={"ok":false,"error":"DEV_AUTO_SESSION_UNAVAILABLE","autoSessionAvailable":false}
api_projects=404
api_preparations=405
api_projects_body=<!DOCTYPE html><!--RkthxGW_bZUygxYbwP9Hq--><html lang="fr"><head><meta charSet="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><link rel="stylesheet" 
status 200
final_url http://127.0.0.1:3200/portfolio
has_login False
has_oauth False
snippet <title>SFIA Studio</title><meta name="description" content="SFIA Studio Next — a
```
Note: `/portfolio` returns SPA shell HTTP 200 without session; `/api/auth/get-session` → `null`; auto-session 403. OAuth login page accessible (`/login` 200) — full callback interaction = Morris UAT.

### C Data
```
=== C counts after ===
projects=28
conversations=207
messages=773
documents=119
document_revisions=190
cognitive_works=10
cognitive_work_checkpoints=104
--- before ---
projects=28
conversations=207
messages=773
documents=119
document_revisions=190
cognitive_works=10
cognitive_work_checkpoints=104
```
### D Nora LIVE short
```
{"policyVersion":"ml5-cog-policy-v3-recette-operational-provisional","profileType":"OPERATIONAL_PROVISIONAL","model":"gpt-6.2-sol","maxTokens":2000000,"reevalTokens":1000000,"maxSegments":120,"mode":"openai-agents-sdk-live","status":"COMPLETE","contentLen":8,"contentPreview":"Présente","hasFakeCompleteText":false,"generationIdPresent":true,"modelApplied":"UNVERIFIED"}
```
Provenance: `openai-agents-sdk-live`, not fixture; no document/cognitive count change after smoke.

### E Protections + DEV
```
[sfia-recette-boot] 2026-11-25T15:00:08Z SHA=ca0b114c6f7336ba0073d03f8d391fe05182bf86 BUILD=RkthxGW_bZUygxYbwP9Hq LANE=RECETTE COG=OPERATIONAL_PROVISIONAL MAX_TOK=2000000 REEVAL=1000000 SEGS=120 WEB_LIVE=0
{
  "lane": "RECETTE",
  "profileType": "OPERATIONAL_PROVISIONAL",
  "policyVersion": "ml5-cog-policy-v3-recette-operational-provisional",
  "model": "gpt-6.2-sol",
  "maxTokens": 2000000,
  "reevalTokens": 1000000,
  "maxSegments": 120,
  "webLive": "0",
  "webEnabled": "0",
  "sourceSha": "ca0b114c6f7336ba0073d03f8d391fe05182bf86"
}
dev_build=/$
dev_pid=31104
dev_cwd=/Users/morris/Projects/sfia-wt-next-ml5-20261123/projects/sfia-studio-next/web
```
## 8. Rollback

- Target SHA `2a024b1c…` / BUILD `3RyhswMcKrNv8woukVXsT`
- Worktree preserved: `…/sfia-workspace-next-ml5-recette-build-2a024b1c8d71`
- Start script + `.next` preserved
- LaunchAgent bak + dump at `/Users/morris/Projects/sfia-recette-backups/ml5-20261125T145816Z-pre-ca0b114c`
- Restore = point plist ProgramArguments back to previous start script + bootstrap; DB restore only if qualified

## 9. Reserves (unchanged — not closed by cutover)

- 50-source exhaustive: PARTIAL
- Multi-repo/multi-rev source identity: deepen later
- Semantic dedupe approximate
- Exhaustive termination to prove in UAT
- UX historical reserves / F2 global
- WEB P0 OPEN
- D8 independent not qualified
- 31 écarts not auto-accepted

## 10. Completeness Gate

- [x] Identité candidat vérifiée (divergence métadonnées documentée)
- [x] Build RECETTE servi (SHA+BUILD_ID HTML)
- [x] Données préservées (counts before=after)
- [x] Cognition 2M/1M/120 OPERATIONAL_PROVISIONAL effective
- [x] WEB LIVE bloqué
- [x] Auto-session DEV refusée
- [x] Smoke Nora LIVE borné OK
- [x] DEV préservé
- [x] Sauvegarde + rollback disponibles
- [x] Aucune migration inattendue
- [x] Aucun push produit

## 11. Instruction ChatGPT / Morris

Cutover RECETTE effectué. Reprendre UAT utilisateur sur http://127.0.0.1:3200 (connexion OAuth normale). SHA servi `ca0b114c`. BUILD `RkthxGW_bZUygxYbwP9Hq`. ML5 OPEN. R5 IN PROGRESS. R6 NOT STARTED. NO RELEASE. NOT ADOPTED.
