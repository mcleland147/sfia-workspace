# SFIA STUDIO NEXT — ML3 RECETTE DEPLOYMENT AND SMOKE — REVIEW PACK FULL

## A. Date / GO / profil
- Date UTC: 2026-11-06T17:12:23Z
- GO Morris: 2026-11-06 RUN CRITICAL
- Cycle: R5 / ML3 RECETTE mise à disposition + smoke
- Autorisé: ops RECETTE locales + handoff L3
- Interdit: commit/push projet, PR/merge, LIVE Nora, STABLE, ADOPTED

## B. Git Truth
- Delivery HEAD local/remote: `ba831b25bc182f755be749243f256dbf7d5a1ca1` / `ba831b25bc182f755be749243f256dbf7d5a1ca1` (expected ba831b25…)
- main: `7f1f41c30df08a34c3c82b60f1da9b4f8fe0a480`
- Projet Git **non muté** ce cycle
- Porcelain (DEV dirty preserved):

```
M .tmp-sfia-review/chatgpt-review.md
?? projects/sfia-studio-next/web/public/file.svg
?? projects/sfia-studio-next/web/public/globe.svg
?? projects/sfia-studio-next/web/public/next.svg
?? projects/sfia-studio-next/web/public/vercel.svg
?? projects/sfia-studio-next/web/public/window.svg
```

## C. Sources
ENV-01 blob 14b61f0d ; versioning 8bc93e0f ; handoff précédent 4be93f2a ; construction pilotage ; cadrage R4 ; template SFIA v2.6.

## D–E. État RECETTE avant déploiement
- Port 3200: ML1 LaunchAgent `com.sfia.studio.next.recette` servant `0db58be8` depuis `sfia-studio-next-recette-ml1-c3`
- DB `sfia_next_recette` (ML1 schema) + `sfia_next_recette_ml2` (ML2, sans 007)
- Conteneur `sfia-next-recette-pg` :5434

## F. Isolation
- DEV `sfia-next-dev-pg`:5433 / `sfia_next_dev` **non muté**
- E2E `sfia_next_e2e` non ciblé
- Nouvelle DB additive `sfia_next_recette_ml3`
- Backups: `artifacts/db-backups/*_20261106T170744Z.dump`

## G–H. Build / config
- Worktree détaché ba831b25 tree 0f87848a ; `.next` préexistant réutilisé
- `.env.local` RECETTE hors Git (gitignored) : STUDIO_LANE=RECETTE, port 3200, DEV_TEST_LOGIN=1, BETTER_AUTH_URL=http://127.0.0.1:3200, BETTER_AUTH_SECRET non-défaut, DATABASE_URL→sfia_next_recette_ml3, OPENAI unset
- Auth mode smoke: DEV_TEST_ADAPTER (NOT OAuth LIVE)

## I–J. Better Auth / cookies
- Login adapter OK ; cookie `sfia_studio_session__RECETTE`
- Cookie name DEV rejeté (401)
- Pilot B → 404 sur projet A
- Better Auth OAuth cookies: NOT EXERCISED
- ENV-01 Reserve A CARRIED

## K–L. DB / migration
```
Applying 001_initial_studio_core.sql → sfia-next-recette-pg/sfia_next_recette_ml3
CREATE TABLE
CREATE INDEX
CREATE TABLE
CREATE TABLE
CREATE INDEX
CREATE TABLE
CREATE TABLE
CREATE TABLE
CREATE INDEX
CREATE TABLE
CREATE INDEX
CREATE TABLE
CREATE TABLE
CREATE INDEX
CREATE TABLE
CREATE INDEX
CREATE TABLE
CREATE INDEX
CREATE TABLE
CREATE INDEX
CREATE TABLE
CREATE INDEX
Applying 002_session_auth_mode.sql → sfia-next-recette-pg/sfia_next_recette_ml3
ALTER TABLE
Applying 003_ml2_knowledge_documents.sql → sfia-next-recette-pg/sfia_next_recette_ml3
ALTER TABLE
CREATE INDEX
CREATE TABLE
CREATE INDEX
CREATE INDEX
CREATE TABLE
CREATE INDEX
CREATE INDEX
CREATE TABLE
CREATE INDEX
CREATE INDEX
CREATE TABLE
CREATE INDEX
Applying 004_ml2_integrity_corrective.sql → sfia-next-recette-pg/sfia_next_recette_ml3
ALTER TABLE
CREATE INDEX
CREATE INDEX
Applying 005_ml2_conversation_turn_command.sql → sfia-next-recette-pg/sfia_next_recette_ml3
CREATE TABLE
CREATE INDEX
CREATE INDEX
CREATE INDEX
DO
CREATE INDEX
Applying 006_ml2_turn_owner_token.sql → sfia-next-recette-pg/sfia_next_recette_ml3
ALTER TABLE
UPDATE 0
CREATE INDEX
Applying 007_ml3_pilotage_decisions.sql → sfia-next-recette-pg/sfia_next_recette_ml3
CREATE TABLE
CREATE INDEX
CREATE TABLE
CREATE INDEX
CREATE TABLE
CREATE TABLE
CREATE INDEX
CREATE INDEX
CREATE TABLE
CREATE INDEX
CREATE INDEX
CREATE TABLE
CREATE INDEX
CREATE TABLE
CREATE INDEX
CREATE INDEX
CREATE INDEX
CREATE TABLE
CREATE INDEX
CREATE INDEX
DO
db:migrate OK (001→007)

```
- 001→007 OK sur `sfia_next_recette_ml3` uniquement
- human_decisions / business_commands / project_cycles présents

## M–N. Serveur servi
- Unloaded ML1 agent ; loaded `com.sfia.studio.next.recette.ml3`
- PID observé servi depuis worktree ba831b25
- URL: http://127.0.0.1:3200
- Identity: SHA/tree match OBSERVED

### Ops runner (non secret)

```bash
#!/usr/bin/env bash
set -euo pipefail
WEB="/Users/morris/Projects/sfia-workspace-ml3-recette-build-ba831b25/projects/sfia-studio-next/web"
OPS="/Users/morris/Projects/sfia-workspace-ml3-recette-build-ba831b25/artifacts/ops"
LOG="$OPS/recette-ml3-next.log"
cd "$WEB"
# Load RECETTE env from local file (never printed)
set -a
# shellcheck disable=SC1091
source "$WEB/.env.local"
set +a
unset OPENAI_API_KEY || true
export NODE_ENV=production
echo "$(date '+%Y-%m-%dT%H:%M:%S%z') START next-server SHA=ba831b25 lane=$STUDIO_LANE" >>"$OPS/recette-wrapper.log"
exec ./node_modules/.bin/next start -H 127.0.0.1 -p 3200 >>"$LOG" 2>&1

```

### Rollback notes

```
Unloaded 2026-11-06 for ML3 RECETTE switchover:
  launchctl bootout gui/$(id -u)/com.sfia.studio.next.recette
Rollback ML1:
  launchctl bootstrap gui/$(id -u) /Users/morris/Library/LaunchAgents/com.sfia.studio.next.recette.plist
  (restores ML1 @ 0db58be8 on :3200 with sfia_next_recette DB)

Rollback to previous RECETTE (ML1 @ 0db58be8):
1. Stop ML3 next-server on :3200
2. cd /Users/morris/Projects/sfia-studio-next-recette-ml1-c3/projects/sfia-studio-next/web
3. Use its existing .env.local (sfia_next_recette DB on :5434)
4. npx next start -p 3200 -H 127.0.0.1
DB backups: artifacts/db-backups/*_20261106T170744Z.dump
ML3 DB sfia_next_recette_ml3 is additive — does not replace ML1/ML2 DBs.

```

## O. Smoke technique S01–S15

```
S01 login HTTP=200
S02 login shows DEV TEST ADAPTER controls
S03 portfolio anon HTTP=401
S04 login HTTP=200 body={"ok":true,"pilotId":"pilot_eb056a4a-88b3-4f02-842a-a68215afdd89","authMode":"dev-test-login","notice":"FAKE/REAL: DEV test login — NOT GitHub OAuth proof — loopback/DEV only"}
5:#HttpOnly_127.0.0.1	FALSE	/	FALSE	0	sfia_studio_session__RECETTE	sess_89e6990b-4e1a-4118-aeae-bf5c20562ce1
S05 portfolio auth HTTP=200
S13 cookie lane=RECETTE
S08 prep HTTP=200
PREP=
PREP=prep_5b89adae-7add-4f05-86cf-05ac6bc92ad7
S08 preview HTTP=200
S08 create HTTP=201
PROJECT=proj_2e0de8ba-39b7-44e2-96f4-3d0bb6912bfe
S06/S07/F10 IN_ML3=1 IN_DEV=0 IN_ML1=0
S09 project HTTP=200
S10 foreign pilot HTTP=200
S10 login B HTTP=200 {"ok":true,"pilotId":"pilot_5a831af0-91fb-42e9-a98e-0ad833a7dfaa","authMode":"dev-test-login","notice":"FAKE/REAL: DEV test login — NOT GitHub OAuth proof — loopback/DEV only"}
PILOT_A=pilot_eb056a4a-88b3-4f02-842a-a68215afdd89 PILOT_B=pilot_5a831af0-91fb-42e9-a98e-0ad833a7dfaa
S10 foreign project HTTP=404
S-cross DEV cookie name on RECETTE HTTP=401
S12 no secrets in HTML
S15 PID=92537 CWD=/Users/morris/Projects/sfia-workspace-ml3-recette-build-ba831b25/projects/sfia-studio-next/web
S15 identity OK
S14 project absent from DEV=0
S11 stable OK
F01 cycle absent / method ABSENT OK
F02 messages HTTP=200
F02 keys ['assistantMessageId', 'attempts', 'capitalisation', 'capitalisationAttempted', 'capitalisationLimit', 'd4CharsReturned', 'documentSave', 'generationId', 'humanDecisionCreated', 'idempotentReplay', 'knowledgeSelection', 'messages', 'noraMode', 'operationId', 'pilotageEffect', 'policy', 'requestId', 'status', 'streaming', 'toolCallsObserved', 'userMessageId']
F02 status FAILED noraMode deterministic-fixture humanDecision True
F02 pilotageEffect {'attempted': True, 'intentClarity': 'CLEAR', 'operation': 'OPEN_CYCLE', 'status': 'APPLIED', 'reasonCode': None, 'reason': None, 'commandId': 'bcmd_39cad16b-0952-4634-8983-0e0083b4b597', 'decisionId': 'dec_19392258-e814-421e-a059-c3abd829af98', 'source': 'user_message_command', 'clientCommandKey': 'conv-auth:recette-f02-open', 'effects': [{'effectKind': 'OPEN', 'targetRef': 'cyc_03b3bbec-6a7a-40e0-b854-8d561ff0dfcb'}]}
F02 GO authority APPLIED despite Nora boundary (LIVE not authorized)
ACTIVE|CADRAGE
OPEN_CYCLE|APPLICABLE|USER_MESSAGE
F03 OK no command attempted {'attempted': False, 'intentClarity': 'AMBIGUOUS', 'intentReason': 'Énoncé insuffisant', 'status': None, 'reasonCode': None, 'reason': 'Énoncé insuffisant', 'commandId': None, 'decisionId': None, 'clarification': 'Énoncé insuffisant', 'source': 'clarification_only', 'clientCommandKey': 'conv-auth:recette-f03-ok'}
F03 still 1 ACTIVE
F04 RECORD APPLIED dec_8e6e49a2-f652-47e2-a0ba-5f07617f677a
F05 Journal RECORD APPLICABLE source USER_MESSAGE count 2
F06 HTTP=200
F06 REVISE APPLIED dec_9761816f-ac07-4044-8c1d-49c7437e852f
F06 history REVISED→APPLICABLE OK
F07 restrict HTTP=200 APPLIED None
F07 CLOSE rejected RESTRICTION — no false success
F08 by-key reconstitutes OPEN ALREADY_APPLIED dec_19392258-e814-421e-a059-c3abd829af98
F09 cycle CADRAGE cki {'ckiId': '01-cadrage', 'pinnedVersion': '0.2.0', 'contentDigest': 'e8d7a0cbdf3c55b3a991945b336901b1d92172113d1384e62bf6a86f4ec7bff9', 'manifestRef': 'cki/manifest.v0.2.0.json#01-cadrage@0.2.0', 'pinOrigin': 'OPEN_PIN', 'availability': 'RESOLVED'}
F09 CADRAGE ACTIVE — CKI pin fields: {'cki': {'ckiId': '01-cadrage', 'pinnedVersion': '0.2.0', 'contentDigest': 'e8d7a0cbdf3c55b3a991945b336901b1d92172113d1384e62bf6a86f4ec7bff9', 'manifestRef': 'cki/manifest.v0.2.0.json#01-cadrage@0.2.0', 'pinOrigin': 'OPEN_PIN', 'availability': 'RESOLVED'}}
F10 non-contamination previously verified
R-UX-01: client exclusive pending NON CONFORME carried; server reconcilable by-key OBSERVED (F08)
S02 STUDIO_LANE=RECETTE served_address=http://127.0.0.1:3200

```

## P–Q. Smoke fonctionnel F01–F10 + navigateur
- F01–F10 API PASS (voir results + smoke JSON artifacts)
- F02: OPEN_CYCLE APPLIED + HumanDecision USER_MESSAGE ; Nora status FAILED / NORA_LIVE_KEY_REQUIRED boundary (LIVE not authorized; fixture forbidden on RECETTE)
- F09: CKI 01-cadrage@0.2.0 RESOLVED
- Browser: login → project → Pilotage cycle-active + decision-state ; screenshot `artifacts/smoke/browser-pilotage.png`

```
login→portfolio OK
project open OK http://127.0.0.1:3200/projects/proj_2e0de8ba-39b7-44e2-96f4-3d0bb6912bfe
cycle-active visible
decision-state visible
screenshot OK

```

## R. FAKE/LIVE/REAL
- Nora LIVE: NOT AUTHORIZED / NOT EXECUTED
- Nora FAKE fixture on RECETTE: NOT AVAILABLE (fail-closed by design)
- Auth: DEV_TEST_ADAPTER FAKE (explicit)
- GitHub OAuth LIVE: NOT EXECUTED
- Cursor/GitHub REAL tools: NOT USED

## S. R-UX-01
NON CONFORME — CARRIED RESERVE Morris.
Client exclusive pending not corrected.
Server by-key reconciliation OBSERVED (F08).
No D5/D6 unjustified effect / double effect / key loss observed in smoke.

## T. Autres réserves
ENV-01 cookie host ; Level B free-text NOT PROVEN ; Figma NOT VERIFIED ; Nora LIVE NOT EXECUTED.

## U. Manifeste servi

```json
{
  "lane": "RECETTE",
  "state": "SERVED_SMOKE_VERIFIED",
  "source_repository": "mcleland147/sfia-workspace",
  "source_branch": "sfia/next-pilotage-decisions-delivery",
  "base_main_sha": "7f1f41c30df08a34c3c82b60f1da9b4f8fe0a480",
  "candidate_sha": "ba831b25bc182f755be749243f256dbf7d5a1ca1",
  "tree_sha": "0f87848a31d2fa74febdde3c2d9dc2453c535bea",
  "build_identifier": "ml3-recette-served-ba831b25-20261106T171155Z",
  "build_timestamp_utc": "2026-11-06T16:42:56Z",
  "deployment_timestamp_utc": "2026-11-06T17:11:55Z",
  "package_version": "0.0.0-dev",
  "product_version": "NOT AVAILABLE",
  "release_tag": "N/A",
  "served_address": "http://127.0.0.1:3200",
  "runtime_process": {
    "pid": 92537,
    "command": "next-server (v15.5.29)",
    "launch_agent": "com.sfia.studio.next.recette.ml3"
  },
  "runtime_source_path": "/Users/morris/Projects/sfia-workspace-ml3-recette-build-ba831b25/projects/sfia-studio-next/web",
  "schema_revision": "007_ml3_pilotage_decisions",
  "test_data_revision": "smoke dataset on sfia_next_recette_ml3 (additive DB)",
  "authentication_mode": "DEV_TEST_ADAPTER on RECETTE (STUDIO_DEV_TEST_LOGIN=1) \u2014 NOT GitHub OAuth LIVE proof",
  "database_identity_non_secret": {
    "container": "sfia-next-recette-pg",
    "host_port": "127.0.0.1:5434",
    "database": "sfia_next_recette_ml3",
    "role": "sfia_next_recette",
    "previous_dbs_preserved": [
      "sfia_next_recette",
      "sfia_next_recette_ml2"
    ]
  },
  "cookie_isolation_evidence": {
    "studio_cookie": "sfia_studio_session__RECETTE OBSERVED",
    "dev_cookie_name_rejected": "sfia_studio_session__DEV \u2192 401 OBSERVED",
    "pilot_isolation": "Pilot B \u2192 404 on Pilot A project OBSERVED",
    "better_auth_cookies": "NOT EXERCISED (OAuth NOT USED this smoke)",
    "host_cookie_reserve": "ENV-01 Reserve A CARRIED \u2014 separate LaunchAgents/profiles; technical BA isolation NOT PROVEN"
  },
  "migration_evidence": "001\u2192007 applied on sfia_next_recette_ml3 only; backups *_20261106T170744Z.dump; DEV untouched",
  "smoke_evidence": {
    "S01_S15": "PASS (see artifacts/smoke/results.txt)",
    "F01_F10": "PASS API; browser F01/F05 surfaces PASS",
    "nora": "LIVE NOT AUTHORIZED; fixture flags forbidden on RECETTE; boundary FAILED with authority still APPLIED"
  },
  "quality_evidence": "BROWSER FAKE adapter login + Playwright against served :3200; PG assertions on RECETTE ml3 DB",
  "available_capabilities": [
    "login DEV_TEST_ADAPTER",
    "portfolio/projects",
    "OPEN_CYCLE via fil GO",
    "RECORD/REVISE D6",
    "restrictions",
    "CKI pin 01-cadrage@0.2.0",
    "command by-key reconstitution"
  ],
  "unavailable_capabilities": [
    "Nora LIVE",
    "Nora FAKE fixture on RECETTE lane (by design fail-closed)",
    "GitHub OAuth LIVE proof",
    "STABLE",
    "product release"
  ],
  "known_gaps": [
    "R-UX-01 NON CONFORME \u2014 CARRIED RESERVE",
    "ENV-01 cookie host Reserve A",
    "Level B free-text NOT PROVEN",
    "Figma pixel NOT VERIFIED",
    "Nora cognitive LIVE NOT EXECUTED"
  ],
  "rollback_constraints": "bootout com.sfia.studio.next.recette.ml3; bootstrap com.sfia.studio.next.recette (ML1); ML3 DB additive \u2014 schema rollback not automatic",
  "review_decision": "PENDING",
  "morris_recette_acceptance": "PENDING",
  "previous_runtime_replaced": {
    "sha": "0db58be8240a00593092048ee74299f19374f489",
    "path": "/Users/morris/Projects/sfia-studio-next-recette-ml1-c3/projects/sfia-studio-next/web",
    "launch_agent_unloaded": "com.sfia.studio.next.recette"
  }
}
```

## V. Commandes (extraits)
- db-migrate with SFIA_PG_CONTAINER=sfia-next-recette-pg SFIA_PG_DATABASE=sfia_next_recette_ml3
- launchctl bootout com.sfia.studio.next.recette ; bootstrap com.sfia.studio.next.recette.ml3
- curl smoke S01–S15 / F01–F10
- Playwright chromium against http://127.0.0.1:3200

## W. Arrêt / reprise / rollback
- Stop ML3: `launchctl bootout gui/$(id -u)/com.sfia.studio.next.recette.ml3`
- Restore ML1: bootstrap previous plist (see unload note)
- DB: ML3 additive ; restore dumps available ; code rollback ≠ automatic DB rollback

## X. Git final
- Delivery HEAD unchanged `ba831b25bc182f755be749243f256dbf7d5a1ca1`
- No project commit/push
- SVG / dirty DEV preserved

## Y. Handoff distant
(filled after publisher)

## Z. Verdict
**ML3 RECETTE DEPLOYED — SHA ba831b25 VERIFIED — TECHNICAL AND FUNCTIONAL SMOKE PASSED — READY FOR MORRIS FUNCTIONAL RECETTE WITH CARRIED RESERVES.**

Next: ChatGPT Critical Review → Morris RCT-01..07. No PR/merge/STABLE automatic.
