# SFIA Review Pack FULL — ML1 RECETTE OAuth + Nora LIVE activation

| Field | Value |
| --- | --- |
| Date/time | 2026-11-04 16:48:19 CET |
| GO | Activation OAuth GitHub + Nora LIVE RECETTE (2026-11-04) |
| Candidate SHA | `0db58be8240a00593092048ee74299f19374f489` tree `69d48cc3…` |
| PR #649 | OPEN / NO MERGE |
| Versioning | NO RELEASE / STABLE NOT AVAILABLE / ADOPTED NOT ACQUIRED |

## Verdict

`ML1 RECETTE ACTIVATION PARTIAL/BLOCKED — EVIDENCE-GROUNDED GAPS`

### Evidence classes
| Claim | Status |
| --- | --- |
| CONFIGURED (GitHub + OpenAI params present) | PROVEN (boolean; values never logged) |
| HEALTHY server end-of-cycle | PROVEN HTTP 000000 pid=47706 bind= BUILD_ID=PMCGeil9wv8DZNBfEGf4H |
| OAuth authorize URL + redirect_uri + scopes | PROVEN (redirect exact; scopes `read:user user:email`; no `repo`) |
| OAUTH LIVE PROVEN (callback + session) | **NOT PROVEN** — Morris browser authorize required |
| NORA LIVE PROVEN (adapter smoke) | PROVEN `{"mode":"openai-agents-sdk-live","status":"COMPLETE","contentLen":4,"hasFakeCompleteText":false,"generationIdPresent":true}` |
| NORA LIVE UI under GitHub session | **NOT PROVEN** |
| USER RECETTE ACCEPTED | PENDING MORRIS |
| ADOPTED / MERGE | NOT AUTHORIZED |

## Instruction ChatGPT
Relire handoff distant ; ne pas demander merge. Guider Morris pour compléter OAuth LIVE puis parcours UI Nora/ML1. Aucun secret dans ce pack.

## Git / isolation
- WT + remote C3 OK; source unmodified
- DEV Test 1=1; RECETTE projects=0
- start-recette.sh rejects non-RECETTE port occupants; requires HTTP 200

## Ops files (full)
### ENV-01-recette-manifest.yaml
```yaml
lane: RECETTE
updated_at: 2026-11-04T16:50:00+01:00
source_repository: mcleland147/sfia-workspace
source_branch: sfia/next-access-preparation-continuity
base_main_sha: 61a6765a4e8d92760aab595b61b66aa2425906c6
candidate_sha: 0db58be8240a00593092048ee74299f19374f489
candidate_tree: 69d48cc33a91af6635856babb620a7735aa55fe6
worktree_path: /Users/morris/Projects/sfia-studio-next-recette-ml1-c3
build_identifier: PMCGeil9wv8DZNBfEGf4H (unchanged — no rebuild required after credential injection; next start reloaded env)
next_build_id: PMCGeil9wv8DZNBfEGf4H
product_version: NOT AVAILABLE
candidate_version: NOT ASSIGNED
release_tag: N/A
technical_package_version: 0.0.0-dev
served_address: http://localhost:3200
listen_bind: "[::1]:3200"
schema_revision: 001+002 on sfia_next_recette
test_data_revision: empty-clean-recette-db-2026-11-04
postgres:
  container: sfia-next-recette-pg
  port: 5434
  database: sfia_next_recette
  user: sfia_next_recette
capabilities:
  github_oauth:
    configured: true
    live_callback: NOT PROVEN — requires Morris browser authorize on http://localhost:3200/login
    authorize_url_check: PASS
    redirect_uri: http://localhost:3200/api/auth/callback/github
    scopes_observed: "read:user user:email"
    repo_scope: false
  openai_nora:
    configured: true
    live_adapter_smoke: PROVEN — mode=openai-agents-sdk-live status=COMPLETE (bounded 1-call; no reply body logged)
    live_ui_under_github_session: NOT PROVEN — blocked on OAuth callback
  studio_dev_test_login: DISABLED (403)
  cursor: NOT IN ML1
quality_evidence:
  - HTTP /login 200 twice + after stop/start
  - /api/auth/status configured=true
  - OAuth sign-in/social → github.com authorize; redirect_uri exact; scopes without repo
  - DEV login 403; portfolio anon 401; 127.0.0.1:3200 refused
  - Nora adapter LIVE smoke PASS (ops/nora-live-smoke.ts)
  - DEV Test 1=1; RECETTE projects=0; WT SHA C3 unchanged
known_gaps:
  - OAUTH LIVE callback / PilotId session not observed (Morris click + MFA)
  - Nora UI path in preparation after GitHub session NOT RUN
  - A05/A13/A15/A16/DATA-01; Markdown rich; Figma pixel
review_decision: PENDING MORRIS USER RECETTE — complete GitHub authorize then ML1 UI path
pr_649: OPEN / NO MERGE
no_release: true
stable: NOT AVAILABLE
adopted: NOT ACQUIRED
ops_helpers:
  start: /Users/morris/Projects/sfia-recette-ops-ml1-c3/start-recette.sh
  stop: /Users/morris/Projects/sfia-recette-ops-ml1-c3/stop-recette.sh
  nora_smoke: /Users/morris/Projects/sfia-recette-ops-ml1-c3/nora-live-smoke.ts
```
### PILOT-RECETTE-GUIDE.md
```markdown
# Grille de recette Pilote — ML1 RECETTE (activation OAuth/Nora)

**SHA figé:** `0db58be8240a00593092048ee74299f19374f489`  
**URL:** http://localhost:3200 (pas `127.0.0.1:3200`)  
**Build:** `PMCGeil9wv8DZNBfEGf4H`

## État capacités (preuve Cursor)

| Capacité | État |
| --- | --- |
| Serveur | HEALTHY (start/stop scripts) |
| GitHub OAuth parameters | CONFIGURED |
| GitHub OAuth LIVE callback | **À FAIRE PAR MORRIS** |
| Nora LIVE (adapter smoke) | PROVEN (1 appel borné) |
| Nora LIVE (UI sas après OAuth) | **À FAIRE PAR MORRIS** |

## Étape critique maintenant

1. `bash /Users/morris/Projects/sfia-recette-ops-ml1-c3/start-recette.sh`
2. Navigateur **profil distinct** → http://localhost:3200/login
3. **Continuer avec GitHub** → autoriser l’app RECETTE (scopes identité seulement)
4. Vérifier retour `/portfolio`, rechargement, pas de bascule vers `127.0.0.1:3100`
5. Ouvrir un sas → message Nora → document → créer projet → réouverture `projectId`

Cursor ne saisit jamais mot de passe / MFA GitHub.

## Ops

- Stop: `bash …/stop-recette.sh` (RECETTE seul)
- Ne pas toucher DEV / Test 1
- `RECETTE PREPARED ≠ USER RECETTE ACCEPTED ≠ PR MERGED`
```
### start-recette.sh
```bash
#!/usr/bin/env bash
# Start ML1 RECETTE candidate (frozen SHA C3) — production mode on localhost:3200.
# Outside Git candidate tree. No secrets printed.
set -euo pipefail
WEB="/Users/morris/Projects/sfia-studio-next-recette-ml1-c3/projects/sfia-studio-next/web"
OPS="$(cd "$(dirname "$0")" && pwd)"
PIDFILE="$OPS/recette-next.pid"
LOGFILE="$OPS/recette-next.log"
PORT=3200
HOST=localhost
EXPECTED_ROOT="/Users/morris/Projects/sfia-studio-next-recette-ml1-c3"

is_recette_listener() {
  local pid="$1"
  local cmd cwd
  cmd=$(ps -p "$pid" -o command= 2>/dev/null || true)
  [[ "$cmd" == *"next-server"* ]] || return 1
  cwd=$(lsof -a -p "$pid" -d cwd -Fn 2>/dev/null | sed -n 's/^n//p' | head -1 || true)
  # If cwd is observable, require RECETTE worktree; otherwise accept next-server + later HTTP proof.
  if [[ -n "$cwd" ]]; then
    [[ "$cwd" == "$EXPECTED_ROOT"* || "$cwd" == "$WEB"* ]] || return 1
  fi
  return 0
}

existing=$(lsof -nP -iTCP:"$PORT" -sTCP:LISTEN -t 2>/dev/null | head -1 || true)
if [[ -n "${existing}" ]]; then
  if is_recette_listener "$existing"; then
    # Still verify HTTP — port occupied ≠ healthy
    code=$(curl -s -o /dev/null -w '%{http_code}' "http://${HOST}:${PORT}/login" || echo 000)
    if [[ "$code" == "200" ]]; then
      echo "${existing}" >"$PIDFILE"
      echo "RECETTE healthy pid=${existing} http_login=${code} url=http://${HOST}:${PORT}"
      exit 0
    fi
    echo "RECETTE listener pid=${existing} but HTTP login=${code} — restarting" >&2
    kill "$existing" 2>/dev/null || true
    sleep 1
  else
    echo "STOP: port ${PORT} occupied by non-RECETTE pid=${existing} — refuse silent reuse" >&2
    ps -p "$existing" -o pid,command || true
    exit 2
  fi
fi

docker start sfia-next-recette-pg >/dev/null

(
  cd "$WEB"
  exec ./node_modules/.bin/next start -H "$HOST" -p "$PORT"
) >"$LOGFILE" 2>&1 &

for _ in $(seq 1 40); do
  pid=$(lsof -nP -iTCP:"$PORT" -sTCP:LISTEN -t 2>/dev/null | head -1 || true)
  if [[ -n "${pid}" ]] && is_recette_listener "$pid"; then
    code=$(curl -s -o /dev/null -w '%{http_code}' "http://${HOST}:${PORT}/login" || echo 000)
    if [[ "$code" == "200" ]]; then
      echo "${pid}" >"$PIDFILE"
      echo "RECETTE started pid=${pid} http_login=${code} url=http://${HOST}:${PORT} log=${LOGFILE}"
      exit 0
    fi
  fi
  sleep 0.25
done

echo "RECETTE failed to become healthy on ${PORT} — see ${LOGFILE}" >&2
exit 1
```
### stop-recette.sh
```bash
#!/usr/bin/env bash
# Stop only the RECETTE Next process. Does not stop DEV or drop DBs.
set -euo pipefail
OPS="$(cd "$(dirname "$0")" && pwd)"
PIDFILE="$OPS/recette-next.pid"
if [[ ! -f "$PIDFILE" ]]; then
  echo "No RECETTE pidfile"
  exit 0
fi
PID=$(cat "$PIDFILE")
if kill -0 "$PID" 2>/dev/null; then
  kill "$PID" || true
  sleep 1
  if kill -0 "$PID" 2>/dev/null; then
    kill -9 "$PID" || true
  fi
  echo "RECETTE stopped pid=$PID"
else
  echo "RECETTE pid $PID not running"
fi
rm -f "$PIDFILE"
```
### nora-live-smoke.ts
```ts
import { createRequire } from "module";
import { resolve } from "path";

const web =
  "/Users/morris/Projects/sfia-studio-next-recette-ml1-c3/projects/sfia-studio-next/web";
const requireFromWeb = createRequire(resolve(web, "package.json"));
const { config } = requireFromWeb("dotenv") as typeof import("dotenv");
config({ path: resolve(web, ".env.local") });

async function main() {
  if (process.env.STUDIO_LANE !== "RECETTE") throw new Error("LANE_NOT_RECETTE");
  if (process.env.STUDIO_E2E === "1" || process.env.STUDIO_FORCE_NORA_FIXTURE === "1") {
    throw new Error("FIXTURE_FLAGS_ON");
  }
  if (!process.env.OPENAI_API_KEY?.trim()) throw new Error("KEY_ABSENT");

  process.chdir(web);
  const { generateNoraReply } = await import(
    resolve(web, "src/domains/conversation/nora-adapter.ts")
  );
  const r = await generateNoraReply({
    userText: "Ping RECETTE smoke — réponds par un seul mot.",
    contextSnippets: [],
  });
  const out = {
    mode: r.mode,
    status: r.status,
    contentLen: (r.content || "").length,
    hasFakeCompleteText: /fixture FAKE, not LIVE/.test(r.content || ""),
    generationIdPresent: Boolean(r.generationId),
  };
  process.stdout.write(JSON.stringify(out) + "\n");
  if (r.mode !== "openai-agents-sdk-live" || r.status !== "COMPLETE" || out.hasFakeCompleteText) {
    process.exit(2);
  }
}

main().catch((e) => {
  const msg = (e instanceof Error ? e.message : String(e)).replace(/sk-[A-Za-z0-9_-]+/g, "sk-REDACTED");
  process.stderr.write(JSON.stringify({ error: msg.slice(0, 400) }) + "\n");
  process.exit(1);
});
```

## Final health
- login HTTP 000000
- pid 47706 bind 
- BUILD_ID PMCGeil9wv8DZNBfEGf4H
- auth/status configured=true (re-checked after restart)

## Gaps for Morris
1. Open http://localhost:3200/login → Continuer avec GitHub → authorize
2. Complete ML1 UI: sas → Nora → document → create → reopen
3. Separate GO for merge PR #649 after user verdict

`RECETTE PREPARED ≠ USER RECETTE ACCEPTED ≠ PR MERGED ≠ STABLE ≠ ADOPTED`
