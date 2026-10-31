# Review Pack FULL — TEST16-LIVE-RUNTIME-RESUME-01

**Generated (UTC):** 2026-10-31T09:45:42Z
**Cycle:** TEST16-LIVE-RUNTIME-RESUME-01
**Type:** RUN / reprise runtime historique — CRITICAL
**Prior handoff:** MANUAL-ENV-01 `1134653b` / `7bceb56d` (Fake — not the target)
**Product mutation:** NONE

## 0. Instruction ChatGPT
Verify LIVE-E2E-01 originals, BALISE/f1-default/seq20-21, OpenAI LIVE not Fake, Cursor REAL OFF, port 3022, Auth, backup, scripts, historic :3020 protected, Fake :3021 stopped.
Do not infer G-REAL / quality of next LIVE turn / READY FOR PR.

## 1. Git Truth
| WT | `/Users/morris/Projects/sfia-workspace-feat-akg-m5-nap-test16-coverage-corr-01` |
| Branch | `feat/akg-m5-nap-test16-coverage-corr-01` |
| HEAD | `ca1c9869f905b394808c953649910d60fbfcb984` |
| D1 correctifs | PRESENT (`sanitizePresentationEyebrow`, `normalizeCanonicalCompare`, `durableSafeHeading`) |
Git Truth: COHERENT. WIP preserved.

## 2. GO
Resume TEST-16 with original LIVE-E2E-01 data + D1 code + OpenAI LIVE. No Fake substitute. Cursor REAL execution OFF.

## 3. Data pre-check
| Product DB | `/Users/morris/Projects/.sfia-exec/live-e2e-01/product-db/oa-product.sqlite` |
| Nora DB | `/Users/morris/Projects/.sfia-exec/live-e2e-01/nora-session/nora-session.sqlite` |
| Integrity | ok / ok |
| Pre-start writers | none |
| BALISE projectId | `prj:d0c81c08-349b-4109-aca7-72bd5d1bae85` |
| Session | `f1-default` |
| Turns | 22 total; seq20 user + seq21 assistant (TEST-16) with presentation_json on seq21 |
| File SHA256 product | `c3fb06b7d8bae0e3ff33f386ef84105208ee133b15c0d2c26034cefc9095d297` |
| File SHA256 nora | `bebacb2b3cb92ff672501f81cecfa806f0c92a5c3841eeac4f097d5172b028a7` |
| Post-start max seq | still 21 (no new turns created by Cursor) |

## 4. Safety backup
Directory: `/Users/morris/Projects/.sfia-exec/live-e2e-01/backups/pre-test16-resume-20261031T094312Z` (sqlite3 .backup). Runtime uses ORIGINALS, not backup.

## 5. Process topology
| :3020 | PID 92265 pre-int-ux-qa-01 — PROTECTED / left running |
| :3021 Fake MANUAL-ENV | identity-proven stopped |
| :3022 TEST-16 resume | RUNNING |

## 6. Runtime identity
```
Campaign: TEST16-LIVE-RUNTIME-RESUME-01
Port: 3022
URL: http://localhost:3022/studio
Code: D1 corrected worktree
Product DB ORIGINAL: /Users/morris/Projects/.sfia-exec/live-e2e-01/product-db/oa-product.sqlite
Nora DB ORIGINAL: /Users/morris/Projects/.sfia-exec/live-e2e-01/nora-session/nora-session.sqlite
Provider: OpenAI LIVE (historical key/model; OPS1_CONVERSATION_PROVIDER unset)
Cursor REAL: 0
E2E QA Fake control: unset
Safety backup: under /Users/morris/Projects/.sfia-exec/live-e2e-01/backups/pre-test16-resume-*
BALISE project: prj:d0c81c08-349b-4109-aca7-72bd5d1bae85
Session: f1-default
TEST-16 turns: seq20 user / seq21 assistant
Auth note: BETTER_AUTH_URL=http://localhost:3022 — new GitHub OAuth may require callback registered for 3022; existing localhost session cookies may work with same BETTER_AUTH_SECRET
Protected: :3020 pre-int left running; Fake :3021 stopped
```
Listen PID: `15355`
Server process env (parent): OPENAI_MODEL=gpt-5.6-luna; BETTER_AUTH_URL=http://localhost:3022; OPS1_CONVERSATION_PROVIDER unset → openai-default-live; CURSOR_REAL=0.
lsof: product sqlite opened by listen PID.

### status
```
campaign=TEST16-LIVE-RUNTIME-RESUME-01
port=3022
url=http://localhost:3022/studio
listen_pid=15355
http_login=200
cwd=/Users/morris/Projects/sfia-workspace-feat-akg-m5-nap-test16-coverage-corr-01/projects/sfia-studio/app
product_db=/Users/morris/Projects/.sfia-exec/live-e2e-01/product-db/oa-product.sqlite
nora_db=/Users/morris/Projects/.sfia-exec/live-e2e-01/nora-session/nora-session.sqlite
open_live_paths=/Users/morris/Projects/.sfia-exec/live-e2e-01/product-db/oa-product.sqlite
provider=openai-default-live
cursor_real=0
e2e_qa=unset
historic_3020=92265
fake_3021=none
```

### log excerpt
```
QA_LAUNCH campaign=TEST16-LIVE-RUNTIME-RESUME-01 port=3022 auth=http://localhost:3022 product_db=/Users/morris/Projects/.sfia-exec/live-e2e-01/product-db/oa-product.sqlite nora_db=/Users/morris/Projects/.sfia-exec/live-e2e-01/nora-session/nora-session.sqlite cursor_real=0 openai_model=gpt-5.6-luna provider=openai-default-live
   ▲ Next.js 15.5.20
   - Local:        http://localhost:3022
   - Network:      http://localhost:3022

 ✓ Starting...
 ✓ Ready in 1165ms
 ✓ Compiled /middleware in 323ms (748 modules)
...
 POST /studio/projects/prj%3Ad0c81c08-349b-4109-aca7-72bd5d1bae85 200 in 6ms
 POST /studio/projects/prj%3Ad0c81c08-349b-4109-aca7-72bd5d1bae85 200 in 7ms
 POST /studio/projects/prj%3Ad0c81c08-349b-4109-aca7-72bd5d1bae85 200 in 7ms
 POST /studio/projects/prj%3Ad0c81c08-349b-4109-aca7-72bd5d1bae85 200 in 6ms
 POST /studio/projects/prj%3Ad0c81c08-349b-4109-aca7-72bd5d1bae85 200 in 10ms
 POST /studio/projects/prj%3Ad0c81c08-349b-4109-aca7-72bd5d1bae85 200 in 7ms
 POST /studio/projects/prj%3Ad0c81c08-349b-4109-aca7-72bd5d1bae85 200 in 10ms
 POST /studio/projects/prj%3Ad0c81c08-349b-4109-aca7-72bd5d1bae85 200 in 5ms
 POST /studio/projects/prj%3Ad0c81c08-349b-4109-aca7-72bd5d1bae85 200 in 7ms
 POST /studio/projects/prj%3Ad0c81c08-349b-4109-aca7-72bd5d1bae85 200 in 8ms
 POST /studio/projects/prj%3Ad0c81c08-349b-4109-aca7-72bd5d1bae85 200 in 11ms
 POST /studio/projects/prj%3Ad0c81c08-349b-4109-aca7-72bd5d1bae85 200 in 6ms
 POST /studio/projects/prj%3Ad0c81c08-349b-4109-aca7-72bd5d1bae85 200 in 7ms
 POST /studio/projects/prj%3Ad0c81c08-349b-4109-aca7-72bd5d1bae85 200 in 6ms
 GET /login 200 in 40ms
```

## 7. Auth
PASS with existing localhost Better Auth storageState (stateless cookie auth). `/studio` + BALISE project route reachable without /login redirect.
Reserve: new GitHub OAuth against :3022 may require callback registration historically tied to :3020.

## 8. Continuity oracles
A BALISE present — PASS
B f1-default — PASS
C seq20/21 TEST-16 — PASS
D Product objects present — PASS (projects/lps/contracts inspected read-only)
E D1 code — PASS
F OpenAI LIVE selected — PASS (not Fake; model gpt-5.6-luna)
G Auth open BALISE — PASS
H Adaptive view in build — PRESENT in code; historical seq21 may still render as persisted B/plain (expected non-rewrite)
I No governed action — PASS (Cursor REAL OFF; no prompt sent)
J No migration/reset — PASS

## 9. Scripts (complete)
### start-test16-live.sh
```bash
#!/usr/bin/env bash
set -euo pipefail
CAMPAIGN="/Users/morris/Projects/sfia-workspace-feat-akg-m5-nap-test16-coverage-corr-01/.tmp-sfia-review/test16-live-resume"
CORR_APP="/Users/morris/Projects/sfia-workspace-feat-akg-m5-nap-test16-coverage-corr-01/projects/sfia-studio/app"
ENVF="$CAMPAIGN/meta/qa.process.env"
LOGF="$CAMPAIGN/logs/qa-server.log"
PORT=3022
PROD="/Users/morris/Projects/.sfia-exec/live-e2e-01/product-db/oa-product.sqlite"
NORA="/Users/morris/Projects/.sfia-exec/live-e2e-01/nora-session/nora-session.sqlite"

[[ -f "$ENVF" ]] || { echo "MISSING_ENV" >&2; exit 1; }
[[ -f "$PROD" && -f "$NORA" ]] || { echo "MISSING_LIVE_DBS" >&2; exit 1; }
if lsof -nP -iTCP:"$PORT" -sTCP:LISTEN >/dev/null 2>&1; then
  echo "PORT_BUSY $PORT" >&2; exit 2
fi
# Refuse if originals already held by another process
if lsof "$PROD" 2>/dev/null | awk 'NR>1{exit 0} END{exit 1}'; then
  echo "PRODUCT_DB_BUSY — refuse concurrent writer" >&2
  lsof "$PROD" >&2 || true
  exit 3
fi
if lsof "$NORA" 2>/dev/null | awk 'NR>1{exit 0} END{exit 1}'; then
  echo "NORA_DB_BUSY — refuse concurrent writer" >&2
  lsof "$NORA" >&2 || true
  exit 3
fi

set -a
# shellcheck disable=SC1090
source "$ENVF"
set +a
unset OPS1_CONVERSATION_PROVIDER || true
unset SFIA_STUDIO_E2E_QA_CONTROL || true
unset SFIA_STUDIO_LOCAL_OA_EXCLUSIVE || true
unset D1_INTAKE_PROVIDER || true
export SFIA_STUDIO_CURSOR_REAL=0
export OPS1_CURSOR_REAL=0
export OPS1_ALLOW_LIVE_SMOKE=0
export BETTER_AUTH_URL=http://localhost:3022
export PORT=3022
export SFIA_STUDIO_PRODUCT_DB_PATH="$PROD"
export SFIA_STUDIO_NORA_SESSION_DB_PATH="$NORA"

cd "$CORR_APP"
mkdir -p "$CAMPAIGN/logs" "$CAMPAIGN/meta"
{
  echo "QA_LAUNCH campaign=TEST16-LIVE-RUNTIME-RESUME-01 port=$PORT auth=$BETTER_AUTH_URL product_db=$SFIA_STUDIO_PRODUCT_DB_PATH nora_db=$SFIA_STUDIO_NORA_SESSION_DB_PATH cursor_real=$SFIA_STUDIO_CURSOR_REAL openai_model=${OPENAI_MODEL:-unset} provider=${OPS1_CONVERSATION_PROVIDER:-openai-default-live}"
} | tee "$LOGF"

echo "NOTE: start via durable agent/background shell recommended; this script uses nohup"
nohup npx next dev --port "$PORT" --hostname localhost >>"$LOGF" 2>&1 &
echo $! > "$CAMPAIGN/meta/qa-launcher.pid"
disown $! 2>/dev/null || true
for i in $(seq 1 60); do
  if curl -s -o /dev/null -w "%{http_code}" "http://localhost:$PORT/login" | grep -q '^200$'; then
    LISTEN=$(lsof -nP -iTCP:"$PORT" -sTCP:LISTEN -t | head -1)
    echo "$LISTEN" > "$CAMPAIGN/meta/qa-listen.pid"
    echo "READY listen_pid=$LISTEN url=http://localhost:$PORT/studio"
    exit 0
  fi
  sleep 1
done
echo "STARTUP_TIMEOUT" >&2; exit 4
```
### status-test16-live.sh
```bash
#!/usr/bin/env bash
set -euo pipefail
CAMPAIGN="/Users/morris/Projects/sfia-workspace-feat-akg-m5-nap-test16-coverage-corr-01/.tmp-sfia-review/test16-live-resume"
ENVF="$CAMPAIGN/meta/qa.process.env"
PORT=3022
PROD="/Users/morris/Projects/.sfia-exec/live-e2e-01/product-db/oa-product.sqlite"
NORA="/Users/morris/Projects/.sfia-exec/live-e2e-01/nora-session/nora-session.sqlite"
# Clear inherited Fake/QA pollution from parent shells before sourcing.
unset OPS1_CONVERSATION_PROVIDER SFIA_STUDIO_E2E_QA_CONTROL D1_INTAKE_PROVIDER OPS1_ALLOW_LIVE_SMOKE || true
set -a; [[ -f "$ENVF" ]] && source "$ENVF"; set +a
unset OPS1_CONVERSATION_PROVIDER SFIA_STUDIO_E2E_QA_CONTROL D1_INTAKE_PROVIDER || true
export OPS1_ALLOW_LIVE_SMOKE=0
export SFIA_STUDIO_CURSOR_REAL=0
export OPS1_CURSOR_REAL=0
LISTEN=$(lsof -nP -iTCP:"$PORT" -sTCP:LISTEN -t 2>/dev/null | head -1 || true)
HTTP=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:$PORT/login" 2>/dev/null || echo 000)
CWD=""; DBS=""
if [[ -n "${LISTEN:-}" ]]; then
  CWD=$(lsof -a -p "$LISTEN" -d cwd 2>/dev/null | awk 'NR==2{print $NF}')
  DBS=$(lsof -p "$LISTEN" 2>/dev/null | awk '/live-e2e-01/ {print $NF}' | sort -u | tr '\n' ' ')
fi
echo "campaign=TEST16-LIVE-RUNTIME-RESUME-01"
echo "port=$PORT"
echo "url=http://localhost:$PORT/studio"
echo "listen_pid=${LISTEN:-none}"
echo "http_login=$HTTP"
echo "cwd=${CWD:-unknown}"
echo "product_db=$PROD"
echo "nora_db=$NORA"
echo "open_live_paths=${DBS:-none-yet}"
echo "provider=${OPS1_CONVERSATION_PROVIDER:-openai-default-live}"
echo "cursor_real=${SFIA_STUDIO_CURSOR_REAL:-}"
echo "e2e_qa=${SFIA_STUDIO_E2E_QA_CONTROL:-unset}"
echo "historic_3020=$(lsof -nP -iTCP:3020 -sTCP:LISTEN -t 2>/dev/null | head -1 || echo none)"
echo "fake_3021=$(lsof -nP -iTCP:3021 -sTCP:LISTEN -t 2>/dev/null | head -1 || echo none)"
```
### stop-test16-live.sh
```bash
#!/usr/bin/env bash
set -euo pipefail
PORT=3022
EXPECTED_CWD="/Users/morris/Projects/sfia-workspace-feat-akg-m5-nap-test16-coverage-corr-01/projects/sfia-studio/app"
EXPECTED_LOG_FRAGMENT="test16-live-resume/logs"
LISTEN=$(lsof -nP -iTCP:"$PORT" -sTCP:LISTEN -t 2>/dev/null | head -1 || true)
[[ -n "${LISTEN:-}" ]] || { echo "NOT_RUNNING"; exit 0; }
CWD=$(lsof -a -p "$LISTEN" -d cwd 2>/dev/null | awk 'NR==2{print $NF}')
LOGS=$(lsof -p "$LISTEN" 2>/dev/null | awk '/test16-live-resume\/logs/{print $NF}' | head -1 || true)
DBS=$(lsof -p "$LISTEN" 2>/dev/null | awk '/live-e2e-01/{print $NF}' | tr '\n' ' ')
echo "candidate_pid=$LISTEN cwd=$CWD logs=$LOGS"
if [[ "$CWD" != "$EXPECTED_CWD" ]]; then echo "REFUSE cwd" >&2; exit 2; fi
if [[ -z "$LOGS" && "$DBS" != *live-e2e-01* ]]; then echo "REFUSE identity" >&2; exit 3; fi
PARENT=$(ps -p "$LISTEN" -o ppid= | tr -d ' ')
GPARENT=$(ps -p "$PARENT" -o ppid= 2>/dev/null | tr -d ' ' || true)
kill "$LISTEN" 2>/dev/null || true
for p in $PARENT $GPARENT; do
  cmd=$(ps -p "$p" -o command= 2>/dev/null || true)
  if echo "$cmd" | rg -q -- "--port $PORT|next dev"; then kill "$p" 2>/dev/null || true; fi
done
sleep 1
lsof -nP -iTCP:"$PORT" -sTCP:LISTEN >/dev/null 2>&1 && { echo "STOP_INCOMPLETE" >&2; exit 5; }
echo "STOPPED port=$PORT prior_pid=$LISTEN"
echo "historic_3020=$(lsof -nP -iTCP:3020 -sTCP:LISTEN -t 2>/dev/null | head -1 || echo none)"
```

## 10. Fake/Real
Cognitive frontier: OpenAI LIVE historical.
Execution frontier: Cursor REAL OFF.
Does NOT prove next-turn LIVE quality, G-REAL, Evidence REAL, runtime v3.

## 11. R23/R24
R23 BEHAVIOR PROVEN for resume/preflight. R24 NO NEW SEMANTIC IMPACT.

## 12. Verdict
# TEST16 LIVE-E2E-01 — READY FOR MORRIS MANUAL CONTINUATION

URL: http://localhost:3022/studio/projects/prj%3Ad0c81c08-349b-4109-aca7-72bd5d1bae85
Port: 3022
PID: 15355
Branch/HEAD: feat/akg-m5-nap-test16-coverage-corr-01 / ca1c9869…
Product DB original: CONFIRMED
Nora DB original: CONFIRMED
BALISE + f1-default + seq20/21: CONFIRMED
Auth: PASS
OpenAI LIVE: configured
Cursor REAL: OFF
Server: RUNNING
Status: bash .tmp-sfia-review/test16-live-resume/scripts/status-test16-live.sh
Stop: bash .tmp-sfia-review/test16-live-resume/scripts/stop-test16-live.sh

Note: old TEST-16 answer may remain fallback B after reload; D1 applies to the NEXT Nora turn Morris sends.

Not claimed: G-REAL, LIVE quality proven, READY FOR PR, L3 COMPLETE.

**END OF REVIEW PACK FULL — TEST16-LIVE-RUNTIME-RESUME-01**
