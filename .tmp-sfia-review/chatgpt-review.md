# Review Pack FULL — Next ML5 Nora Livraison 1 — RECETTE cutover

**Generated (UTC):** 2026-11-25T06:55:45Z  
**Mode:** publish-in-cycle · Review Pack FULL · Critical RUN (Cycle 11)  
**Product branch:** `sfia/next-ml5-integrated-delivery-20261123`  
**Scope:** `projects/sfia-studio-next/`  
**Class:** NO RELEASE · STABLE NOT AVAILABLE · ML5 OPEN · R5 IN PROGRESS  

## 1. Verdict

**NORA COGNITIVE EXPERIENCE — RECETTE AVAILABLE — MORRIS UAT REQUIRED — WEB LIVE BLOCKED.**

**Status:** READY FOR MORRIS UAT WITH RESERVES.

Served: `http://127.0.0.1:3200` · SHA `2a024b1c8d713ded6260d2a6427448a29f98a646` · BUILD `3RyhswMcKrNv8woukVXsT` · COG `OPERATIONAL_PROVISIONAL` · WEB LIVE=0.

## 2. Git Truth Check

| Check | Result |
|---|---|
| Repo / remote | `mcleland147/sfia-workspace` · origin GitHub |
| DEV worktree | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` |
| Branch | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD tip (docs) | `2d3d47a46c07ca5535bc8329d611490918447f0d` (+ local delivery-history append this cycle) |
| **Candidate SHA served** | `2a024b1c8d713ded6260d2a6427448a29f98a646` |
| Tree | `031f13043423c0e93d0b94af9fb27e852e262e74` |
| Web tree | `f57bb8eed98af19f4ea6d0a33d6de431084f635d` |
| Tip web == delivery web | YES |
| Main | `997897fd7cf914771e7d08e8030dc7123fab7d25` |
| Merge-base | `997897fd…` |
| Staged at start | none |
| Product push | NONE |
| RECETTE worktree | detached HEAD on candidate exact |

## 3. Sources consulted

- main method/templates/CKC Cycle 11 synthetic map (routing)
- ENV-01 blob `14b61f0d…` / Product Versioning blob `8bc93e0f…`
- Decision Git A `b411e327…` · ML5 sources `e7f1582f…`
- Handoff first cutover `d165c530` / blob `164438a9` — worktree/backup/LaunchAgent pattern only
- Handoff **operational** cutover `e497030b` / blob `115ed7e3` — PRIORITY cognitive/LIVE/auth/isolation
- Handoff DEV realign `46f91c87` / blob `3a4b8b48` — identity controls
- Handoff readiness `1f6248e9` / blob `6a46a308` — T1/T2/T3 candidate + WEB LIVE blocked reserve
- Local start script / LaunchAgent / `.env.local` (non-secret) / manifesto previous `7f48daa2`

## 4. Inventaire initial → cible

| Dimension | DEV | RECETTE avant | RECETTE après |
|---|---|---|---|
| Port / DB | :3100 / :5433 | :3200 / :5434 | :3200 / :5434 (preserved) |
| SHA | tip docs / web=f57bb8ee | `7f48daa2` | **`2a024b1c`** |
| BUILD | `prUUuYxFrKalrxiMsKoc4` | `_ZDI1cWa1hscluvBhaiA4` | **`3RyhswMcKrNv8woukVXsT`** |
| COG | OPERATIONAL_PROVISIONAL | OPERATIONAL_PROVISIONAL | OPERATIONAL_PROVISIONAL (anti-TEST_BOUNDARY verified) |
| Cursor | LIVE | LIVE | LIVE (no dispatch) |
| WEB LIVE | gated | gated | **explicitly BLOCKED** ENABLED=0 LIVE=0 |
| Auto-session | DEV only | OFF | OFF (403) |
| Auth | auto-session | GitHub OAuth | GitHub OAuth |

## 5. Anti-TEST_BOUNDARY (critique)

| Contrôle | Résultat |
|---|---|
| `.env.local` `SFIA_COG_PROFILE_TYPE` | `OPERATIONAL_PROVISIONAL` |
| Start script default | `OPERATIONAL_PROVISIONAL` |
| Boot log | `COG=OPERATIONAL_PROVISIONAL` |
| `resolveProfileType()` under RECETTE env | `OPERATIONAL_PROVISIONAL` |
| `d3.nora.policy_selected` | policy_version v3 · profile_type_detail OPERATIONAL_PROVISIONAL · model gpt-6.2-sol |
| TEST_BOUNDARY as nominal RECETTE | **ABSENT** |

TEST_BOUNDARY remains in code/tests/fixtures (legitimate). Not nominal runtime.

## 6. WEB LIVE BLOCKED

| Flag / mécanisme | Valeur effective |
|---|---|
| `SFIA_WEB_SEARCH_ENABLED` | `0` |
| `SFIA_WEB_SEARCH_LIVE` | `0` |
| `SFIA_WEB_SEARCH_ISOLATION_PROVEN` | `0` |
| `canUsePublicWebFrontier` | `false` |
| Boot | `WEB_LIVE=0` |
| P0 | **OPEN** — bounded RECETTE GO; no activation |

Nora OpenAI LIVE remains available (not confused with WEB LIVE).

## 7. Contrôles post-déploiement

### A. Santé / auth
- `GET /login` → **200**
- `GET /api/portfolio` → **401**
- `POST /api/dev/auto-session` → **403**
- Test login = 0 · cwd = new worktree web · DEV :3100 still `prUUuYxFrKalrxiMsKoc4`

### B. Nora LIVE smoke (borné, non sensible)
```json
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-25T06:54:10.130Z","lane":"RECETTE","source_sha":"2a024b1c8d713ded6260d2a6427448a29f98a646","build_id":"3RyhswMcKrNv8woukVXsT","event_name":"d3.nora.policy_selected","component":"d3.nora_adapter","generation_id":"gen_9e758ec4-42ef-4cf8-9b32-74fb1ad0db70","policy_version":"ml5-cog-policy-v3-recette-operational-provisional","profile_type":"OPERATIONAL","meta":{"profile":"analyse","effort":"medium","model":"gpt-6.2-sol","tools":"search_project_resources,read_project_document_revision,search_conversation_hist…[len=463]","profile_type_detail":"OPERATIONAL_PROVISIONAL"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-25T06:54:10.617Z","lane":"RECETTE","source_sha":"2a024b1c8d713ded6260d2a6427448a29f98a646","build_id":"3RyhswMcKrNv8woukVXsT","event_name":"d3.nora.provider_attempt","component":"d3.nora_adapter","generation_id":"gen_9e758ec4-42ef-4cf8-9b32-74fb1ad0db70","attempt_id":"att_58fdd599-1574-43b2-ab5d-34b1d4cdd299","outcome":"PARTIAL","policy_version":"ml5-cog-policy-v3-recette-operational-provisional","profile_type":"OPERATIONAL","meta":{"kind":"non_stream","maxTurns":20,"model_requested":"gpt-6.2-sol","max_turns_note":"maxTurns≠maxProviderCalls"}}
{"policyVersion":"ml5-cog-policy-v3-recette-operational-provisional","profileType":"OPERATIONAL_PROVISIONAL","mode":"openai-agents-sdk-live","status":"COMPLETE","contentLen":4,"hasFakeCompleteText":false,"generationIdPresent":true,"modelHint":null}
```
policy probe:
```json
{
  "policyVersion": "ml5-cog-policy-v3-recette-operational-provisional",
  "profileType": "OPERATIONAL_PROVISIONAL",
  "builtProfile": "OPERATIONAL_PROVISIONAL",
  "frontierUsable": false,
  "webEnabled": "0",
  "webLive": "0",
  "isolation": "0",
  "hostedToolFn": "n/a",
  "lane": "RECETTE",
  "antiTestBoundary": true
}
```

### C. Cursor confinement (no dispatch)
```json
{
  "ok": true,
  "effectModeConfigured": "LIVE",
  "liveNominal": true,
  "keySource": "FILE_CREDENTIAL_STORE",
  "workspaceRoot": "/private/tmp/sfia-ml5-recette-cursor-live-ws",
  "probeWorkspace": "/private/tmp/sfia-ml5-recette-cursor-live-ws/9b9b5e6e201d0586/2b3f8f003fa6fa4a/default",
  "confinement": "ROOT_HASHED_SEGMENTS_OUTSIDE_PRODUCT_TREES",
  "dispatch": "NOT_PERFORMED — requires D6 HumanDecision",
  "mutation": "NONE"
}
```

### D. Données
Before/after: projects=27 documents=118 revisions=189 — **preserved**. Migrations 001→021 MIG_EQ — **no migration**.

### E. DEV
Unchanged port/build/DB.

## 8. Sauvegarde / rollback

- Backup dir: `/Users/morris/Projects/sfia-recette-backups/ml5-20261125T064937Z-pre-2a024b1c8d71`
- Dump sha256: `16084da2d5fe28f39d998f88da37fff15fdb98307cfefcfc60d6a230c21ff3a0` (pg_restore -l OK)
- Previous worktree/build retained: `7f48daa28f00` / `_ZDI1cWa1hscluvBhaiA4`
- Plist bak + env bak dated `20261125T064937Z`

Rollback: bootout → restore plist bak → previous start script → kickstart → verify BUILD `_ZDI1cWa1hscluvBhaiA4`. DB restore only if schema reverse needed (none).

## 9. Manifeste RECETTE (intégral)

```json
{
  "lane": "RECETTE",
  "source_repository": "mcleland147/sfia-workspace",
  "source_branch": "sfia/next-ml5-integrated-delivery-20261123",
  "base_main_sha": "997897fd7cf914771e7d08e8030dc7123fab7d25",
  "candidate_sha": "2a024b1c8d713ded6260d2a6427448a29f98a646",
  "candidate_tree": "031f13043423c0e93d0b94af9fb27e852e262e74",
  "web_tree": "f57bb8eed98af19f4ea6d0a33d6de431084f635d",
  "build_identifier": "3RyhswMcKrNv8woukVXsT",
  "contentDigest": "cc7f5e5dbcff5af418393630de1d7d80d24e9cc44aa847eebda59eaa4e557a25",
  "contentDigest_method": "qualify-dev.sh content_digest (pkg+next.config+src ts/tsx/css/sql)",
  "product_version": "NOT AVAILABLE",
  "candidate_version": "NOT AVAILABLE",
  "release_status": "NO RELEASE",
  "served_address": "http://127.0.0.1:3200",
  "listen_bind": "127.0.0.1:3200",
  "cognitive_policy_version": "ml5-cog-policy-v3-recette-operational-provisional",
  "cognitive_profile_type": "OPERATIONAL_PROVISIONAL",
  "cognitive_budgets": {
    "max_segments": 24,
    "max_tokens": 200000
  },
  "nora_model_requested": "gpt-6.2-sol",
  "schema_revision": "001→021 preserved (MIG_EQ vs previous RECETTE; no migration this cutover)",
  "test_data_revision": "preserved-recette-ml4-db",
  "worktree": "/Users/morris/Projects/sfia-workspace-next-ml5-recette-build-2a024b1c8d71",
  "start_script": "/Users/morris/Projects/sfia-workspace-next-ml5-recette-build-2a024b1c8d71/start-recette-ml5-3RyhswMcKrNv8woukVXsT.sh",
  "postgresql": {
    "container": "sfia-next-recette-pg",
    "port": 5434,
    "database": "sfia_next_recette_ml4",
    "projects_count": 27,
    "documents_count": 118,
    "document_revisions_count": 189
  },
  "previous_recette": {
    "SOURCE": "7f48daa28f00f390c34c58951ee5ceeb311f4d40",
    "TREE": "7b8683951dbbe8a2bb6a72b5a0e39fd29b2d7e7e",
    "BUILD_ID": "_ZDI1cWa1hscluvBhaiA4",
    "DIGEST": "ed59106d8706fb8267620682c0fd0abd2636cab06b4e649a18d23ff64bf8514f",
    "worktree": "/Users/morris/Projects/sfia-workspace-next-ml5-recette-build-7f48daa28f00",
    "cog_profile": "OPERATIONAL_PROVISIONAL",
    "cursor_mode": "LIVE"
  },
  "backup": {
    "path": "/Users/morris/Projects/sfia-recette-backups/ml5-20261125T064937Z-pre-2a024b1c8d71",
    "dump_sha256": "16084da2d5fe28f39d998f88da37fff15fdb98307cfefcfc60d6a230c21ff3a0",
    "plist_bak": "/Users/morris/Library/LaunchAgents/com.sfia.studio.next.recette.ml4d-ux004.plist.20261125T064937Z.pre-nora-cutover-2a024b1c.bak",
    "env_bak": "/Users/morris/.config/sfia-studio-next/recette/.env.local.bak.pre-nora-cutover-20261125T064937Z"
  },
  "capabilities": {
    "github_oauth": "CONFIGURED — LIVE callback requires Morris browser authorize",
    "studio_dev_test_login": "DISABLED",
    "studio_dev_auto_session": "DISABLED (403 proven)",
    "openai_nora": "LIVE smoke PASS openai-agents-sdk-live COMPLETE — OPERATIONAL_PROVISIONAL gpt-6.2-sol",
    "git": "documentary mutations allowlist preserved — no push this cycle",
    "web": "WEB LIVE BLOCKED — SFIA_WEB_SEARCH_ENABLED=0 LIVE=0 ISOLATION_PROVEN=0; frontierUsable=false; P0 OPEN",
    "cursor_sdk": "LIVE configured + confinement probe PASS — dispatch still requires D6",
    "d8_os_isolation": "NOT DEMONSTRATED — independent verify remains limited"
  },
  "quality_evidence": [
    "Git Truth PASS delivery 2a024b1c tree 031f1304 web f57bb8ee",
    "npm ci + next build BUILD_ID 3RyhswMcKrNv8woukVXsT",
    "HTTP /login 200; /api/portfolio 401; auto-session 403",
    "boot log COG=OPERATIONAL_PROVISIONAL WEB_LIVE=0 anti-TEST_BOUNDARY",
    "Nora LIVE smoke COMPLETE policy v3 OPERATIONAL_PROVISIONAL",
    "Cursor confinement probe LIVE key FILE_CREDENTIAL_STORE",
    "projects/documents/revisions preserved 27/118/189",
    "DEV untouched :3100 build prUUuYxFrKalrxiMsKoc4"
  ],
  "reserves": [
    "WEB LIVE BLOCKED — P0 OPEN (bounded RECETTE GO)",
    "search DNS pin KNOWN GAP for hosted provider search",
    "F2 page 12 PARTIAL / NOT PROVEN",
    "R2 LIVE complete not proven",
    "D8 OS isolation pending",
    "OPERATIONAL_PROVISIONAL not OPERATIONAL_VALIDATED / not production policy",
    "Cursor LIVE dispatch not exercised without D6 HumanDecision this cycle",
    "ENV-01 cookie isolation across :3100/:3200 not sold — distinct browser profiles recommended",
    "prior readiness pack noted digest 44d00186 under alternate recording; canonical content_digest now cc7f5e5d (DEV+RECETTE equal)"
  ],
  "rollback": {
    "plist_bak": "/Users/morris/Library/LaunchAgents/com.sfia.studio.next.recette.ml4d-ux004.plist.20261125T064937Z.pre-nora-cutover-2a024b1c.bak",
    "previous_start": "/Users/morris/Projects/sfia-workspace-next-ml5-recette-build-7f48daa28f00/start-recette-ml5-_ZDI1cWa1hscluvBhaiA4.sh",
    "previous_worktree": "/Users/morris/Projects/sfia-workspace-next-ml5-recette-build-7f48daa28f00",
    "env_bak": "/Users/morris/.config/sfia-studio-next/recette/.env.local.bak.pre-nora-cutover-20261125T064937Z",
    "note": "rollback code ≠ automatic data rollback; dump available if schema reverse required (none expected)"
  },
  "decision": "NORA COGNITIVE EXPERIENCE — RECETTE AVAILABLE — MORRIS UAT REQUIRED — WEB LIVE BLOCKED",
  "stable": "NOT AVAILABLE",
  "built_at_utc": "2026-11-25T06:54:59Z"
}
```

## 10. Configuration non secrète (env redacted)

```
# SFIA Studio Next — RECETTE ML4 lane secrets (hors Git)
# Permissions: dir 0700, file 0600. Hors Git.
# D1 GITHUB_CLIENT_ID/SECRET: reprise RECETTE ML3 (61fe295b) — distincts de GITHUB_APP_*.
# OPENAI_API_KEY: reprise RECETTE historique.
# STUDIO_GITHUB_ALLOW_MUTATIONS / STUDIO_DEV_TEST_LOGIN / STUDIO_E2E: unset.

STUDIO_LANE=RECETTE
SFIA_COG_PROFILE_TYPE=OPERATIONAL_PROVISIONAL
STUDIO_PORT=3200
BETTER_AUTH_URL=http://127.0.0.1:3200
BETTER_AUTH_SECRET=<redacted>
GITHUB_CLIENT_ID=Ov23li87nAN4wE6KKMlb
GITHUB_CLIENT_SECRET=<redacted>
DATABASE_URL=<redacted>
SFIA_SOURCE_SHA=2a024b1c8d713ded6260d2a6427448a29f98a646
SFIA_DOCUMENT_ROOT=/Users/morris/.config/sfia-studio-next/recette/documents
GITHUB_APP_ID=5677465
GITHUB_APP_INSTALLATION_ID=180092114
GITHUB_APP_EXPECTED_OWNER=mcleland147
GITHUB_APP_ALLOWED_REPO=mcleland147/chantiers360
GITHUB_APP_CALLBACK_URL=http://127.0.0.1:3200/api/integrations/github/callback
GITHUB_APP_CLIENT_ID=Iv23liw3xCng4QFrdItV
GITHUB_APP_CLIENT_SECRET=<redacted>
GITHUB_APP_PRIVATE_KEY_PATH=<redacted>
INTEGRATION_TOKEN_ENCRYPTION_KEY=<redacted>
STUDIO_GITHUB_USER_OAUTH=real
STUDIO_GITHUB_PROVIDER=real
OPENAI_API_KEY=<redacted>

# ML4 R12 — bounded REAL documentary mutations (operator gate; D6 still required)
# Q2 2026-11-14: documentary mutations DISABLED (was documentary) — GO Q4 required

STUDIO_DEV_TEST_LOGIN=0

# GO Morris 2026-11-22 — GitHub REAL WRITE activation (persistent)
STUDIO_GITHUB_ALLOW_MUTATIONS=documentary
GITHUB_APP_WRITE_ALLOWED_REPOS=mcleland147/chantiers360
SFIA_COGNITIVE_MAX_SEGMENTS=24
SFIA_COGNITIVE_MAX_TOKENS=<redacted>
SFIA_CURSOR_EFFECT_MODE=LIVE
SFIA_CURSOR_WORKSPACE_ROOT=/tmp/sfia-ml5-recette-cursor-live-ws
SFIA_CURSOR_MODEL_ID=composer-2.5
SFIA_CURSOR_LIVE_WAIT=0
SFIA_WEB_SEARCH_LIVE=0
SFIA_WEB_SEARCH_ENABLED=0
SFIA_WEB_SEARCH_ISOLATION_PROVEN=0
```

## 11. Start script (served)

```bash
#!/bin/bash
set -euo pipefail
export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin"
cd "/Users/morris/Projects/sfia-workspace-next-ml5-recette-build-2a024b1c8d71/projects/sfia-studio-next/web"
set -a
source "$HOME/.config/sfia-studio-next/recette/.env.local"
set +a
export SFIA_SOURCE_SHA=2a024b1c8d713ded6260d2a6427448a29f98a646
export SFIA_BUILD_ID=3RyhswMcKrNv8woukVXsT
export STUDIO_LANE=RECETTE
export STUDIO_PORT=3200
export NODE_ENV=production
unset STUDIO_FORCE_NORA_FIXTURE || true
export STUDIO_FORCE_NORA_FIXTURE=
unset STUDIO_E2E || true
unset STUDIO_NORA_SIMULATED_PROVIDER || true
unset STUDIO_DEV_AUTO_SESSION || true
export STUDIO_DEV_TEST_LOGIN=0
export STUDIO_GITHUB_ALLOW_MUTATIONS="${STUDIO_GITHUB_ALLOW_MUTATIONS:-documentary}"
export GITHUB_APP_WRITE_ALLOWED_REPOS="${GITHUB_APP_WRITE_ALLOWED_REPOS:-mcleland147/chantiers360}"
export SFIA_CURSOR_EFFECT_MODE="${SFIA_CURSOR_EFFECT_MODE:-LIVE}"
export SFIA_CURSOR_WORKSPACE_ROOT="${SFIA_CURSOR_WORKSPACE_ROOT:-/tmp/sfia-ml5-recette-cursor-live-ws}"
export SFIA_CURSOR_MODEL_ID="${SFIA_CURSOR_MODEL_ID:-composer-2.5}"
export SFIA_CURSOR_LIVE_WAIT="${SFIA_CURSOR_LIVE_WAIT:-0}"
export SFIA_COG_PROFILE_TYPE="${SFIA_COG_PROFILE_TYPE:-OPERATIONAL_PROVISIONAL}"
export SFIA_COGNITIVE_MAX_SEGMENTS="${SFIA_COGNITIVE_MAX_SEGMENTS:-24}"
export SFIA_COGNITIVE_MAX_TOKENS="${SFIA_COGNITIVE_MAX_TOKENS:-200000}"
# WEB LIVE BLOCKED — Morris GO bounded RECETTE (P0 OPEN)
unset SFIA_WEB_SEARCH_LIVE || true
unset SFIA_WEB_SEARCH_ENABLED || true
unset SFIA_WEB_SEARCH_ISOLATION_PROVEN || true
unset SFIA_WEB_SEARCH_TEST || true
export SFIA_WEB_SEARCH_LIVE=0
export SFIA_WEB_SEARCH_ENABLED=0
export SFIA_WEB_SEARCH_ISOLATION_PROVEN=0
mkdir -p "$SFIA_CURSOR_WORKSPACE_ROOT"
chmod 700 "$SFIA_CURSOR_WORKSPACE_ROOT" || true
unset STUDIO_DEV_HOLD_INITIAL_QUALIFICATION || true
unset NODE_PATH || true
{
  echo "[sfia-recette-boot] $(date -u +%Y-%m-%dT%H:%M:%SZ) SHA=$SFIA_SOURCE_SHA BUILD=$SFIA_BUILD_ID LANE=$STUDIO_LANE COG=$SFIA_COG_PROFILE_TYPE CURSOR_MODE=$SFIA_CURSOR_EFFECT_MODE WEB_LIVE=$SFIA_WEB_SEARCH_LIVE WS=$SFIA_CURSOR_WORKSPACE_ROOT"
} >&2
exec npx next start -H 127.0.0.1 -p 3200
```

## 12. Fake / Real Qualification

| Capacité | Qualification |
|---|---|
| Nora cognition provider | **REAL** smoke LIVE COMPLETE — quality F2 NOT PROVEN |
| WEB search/open LIVE | **BLOCKED** (not SCRIPTED presented as real) |
| Cursor SDK | **REAL config** + confinement — dispatch **NOT PERFORMED** |
| Auto-session | **DISABLED** proven 403 |
| Test login | **DISABLED** |
| Conserve-only / T1–T3 | inherited from candidate `2a024b1c` (prior cycle) — not re-coded here |

## 13. Git Review Index

| Path | Action |
|---|---|
| `projects/sfia-studio-next/construction/delivery-history.md` | append-only cutover entry (product branch tip docs; **not** served SHA) |
| `.tmp-sfia-review/chatgpt-review.md` | FULL pack reset this cycle |
| RECETTE worktree artifacts | start script, manifesto, `.next` — outside product branch commit |

**No product code change. No candidate SHA mutation.**

## 14. Diff documentaire (delivery-history)

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 2dc519c2..78db9c49 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -4641,3 +4641,26 @@ Cette synchronisation ne modifie ni code ni RECETTE/STABLE, ne clôt pas les ré
 | RECETTE / STABLE | intouchées |
 | Classe | NO RELEASE · Gate C OPEN |
 | Verdict cible | `LOCAL GIT CANDIDATE FROZEN` (± GOVERNED RESERVES) |
+
+## 2026-11-25 — ML5 Nora Livraison 1 — RECETTE cutover (Cycle 11 RUN)
+
+| Champ | Valeur |
+|---|---|
+| Cycle | 11 — Déploiement / release · Critical RUN |
+| Candidate SHA | `2a024b1c8d713ded6260d2a6427448a29f98a646` |
+| Tree | `031f13043423c0e93d0b94af9fb27e852e262e74` |
+| Web tree | `f57bb8eed98af19f4ea6d0a33d6de431084f635d` |
+| Build RECETTE | `3RyhswMcKrNv8woukVXsT` |
+| contentDigest | `cc7f5e5dbcff5af418393630de1d7d80d24e9cc44aa847eebda59eaa4e557a25` |
+| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml5-recette-build-2a024b1c8d71` |
+| URL | `http://127.0.0.1:3200` |
+| Cognitive | `ml5-cog-policy-v3-recette-operational-provisional` · `OPERATIONAL_PROVISIONAL` · 24/200k · model `gpt-6.2-sol` |
+| WEB | LIVE BLOCKED (ENABLED=0 LIVE=0) — P0 OPEN |
+| Nora smoke | `openai-agents-sdk-live` COMPLETE — not F2 proven |
+| Cursor | LIVE configured + confinement PASS — no D6 dispatch |
+| DB | `sfia_next_recette_ml4` :5434 preserved projects=27 documents=118 revisions=189 · migrations 001→021 unchanged |
+| Previous | `7f48daa28f00` / `_ZDI1cWa1hscluvBhaiA4` retained for rollback |
+| Backup | `/Users/morris/Projects/sfia-recette-backups/ml5-20261125T064937Z-pre-2a024b1c8d71` |
+| Class | NO RELEASE · STABLE NOT AVAILABLE · ML5 OPEN |
+| Verdict | RECETTE AVAILABLE — MORRIS UAT REQUIRED — WEB LIVE BLOCKED |
+
```

## 15. Réserves

1. WEB LIVE BLOCKED — P0 OPEN  
2. Hosted search DNS pin = KNOWN GAP  
3. F2 / R2 LIVE complete NOT PROVEN  
4. D8 OS isolation NOT DEMONSTRATED  
5. OPERATIONAL_PROVISIONAL ≠ VALIDATED ≠ production  
6. ENV-01 cookie ports not sold — distinct browser profiles  
7. No D6 → no Cursor dispatch this cycle  
8. Digest note: readiness recorded `44d00186`; canonical `content_digest` method yields `cc7f5e5d` equal on DEV+RECETTE source trees  

## 16. Capacités disponibles / bloquées

**Disponibles:** conversation Nora LIVE · auth GitHub OAuth · documents/DB préservés · Cursor LIVE *configuré* · conserve-only path (code candidat) · activité LIVE IHM (acquis antérieurs).

**Bloquées / bornées:** WEB LIVE · D8 indépendant · Cursor dispatch sans D6 · STABLE · RELEASE · auto-session.

## 17. Instruction ChatGPT

Relire le handoff distant `sfia/review-handoff` après publication. Vérifier SHA/build réellement servis, politique cognitive effective (anti-TEST_BOUNDARY), WEB LIVE BLOCKED, préservation données, rollback, et verdict RECETTE AVAILABLE. Ne pas déclarer USER ACCEPTED / F2 PROVEN / ML5 CLOSED / STABLE / ADOPTED.

