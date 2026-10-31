# Review Pack FULL — NAP-SINGLE-RESPONSE-MANUAL-ENV-01

**Generated (UTC):** 2026-10-31T09:31:36Z
**Cycle:** NAP-SINGLE-RESPONSE-MANUAL-ENV-01
**Type:** RUN / préparation de recette locale — CRITICAL
**Prior:** Browser QA `9c0a0ab9` / `a0990839` ACCEPTED WITH RESERVES / FAKE SCOPE
**Product mutation:** NONE

---

## 0. Instruction ChatGPT

Verify SHA/blob, port isolation (:3021 vs historic :3020), Fake provider, Auth, DB paths, scripts, server left RUNNING, no Product commit.
Do not infer OpenAI LIVE / G-REAL / READY FOR PR.

## 1. Git Truth

| Item | Value |
|------|-------|
| WT | `/Users/morris/Projects/sfia-workspace-feat-akg-m5-nap-test16-coverage-corr-01` |
| Branch | `feat/akg-m5-nap-test16-coverage-corr-01` |
| HEAD / origin/main | `ca1c9869f905b394808c953649910d60fbfcb984` |
| Prior handoff | `9c0a0ab953bc307c4d46c7730da9e6d393407c52` |
| D1 + Fidelity-01/02 + Eyebrow + harness QA delta | PRESENT in WIP |

Git Truth: COHERENT.

## 2. GO Morris

Prepare isolated Fake manual UX environment. OpenAI LIVE NOT authorized. G-REAL CLOSED. Do not mutate historic :3020.

## 3. Sources / Convergence / R23-R24

SFIA v2.6 + CKC QA pilot candidate + Convergence + Doctrine 30/32/34/35 + PRR 03/05/06/07/08/09 read-only.
R23: Next/worktree/Auth/Fake/SQLite/process isolation — DOCUMENTED + BEHAVIOR PROVEN (HTTP/Auth/Fake gates).
R24: NO NEW SEMANTIC IMPACT. Prior D1 R24 debt remains open.

## 4. Historic :3020 (PROTECTED)

| Item | Value |
|------|-------|
| PID | `92265` |
| Port | 3020 |
| DB | `pre-int-ux-qa-01/product-db/oa-product.sqlite` |
| Action | **NONE** — not killed, not reconfigured |

## 5. Manual campaign identity

```
Campaign: NAP-SINGLE-RESPONSE-MANUAL-ENV-01
Created UTC: 2026-10-31T09:29:25Z
Port: 3021
URL: http://localhost:3021/studio
Code worktree: /Users/morris/Projects/sfia-workspace-feat-akg-m5-nap-test16-coverage-corr-01
Provider: fake
OpenAI LIVE: OFF
Cursor REAL: OFF
Product DB: /Users/morris/Projects/sfia-workspace-feat-akg-m5-nap-test16-coverage-corr-01/.tmp-sfia-review/manual-ux/nap-single-response-manual-env-01/db/oa-product.sqlite
Nora DB: /Users/morris/Projects/sfia-workspace-feat-akg-m5-nap-test16-coverage-corr-01/.tmp-sfia-review/manual-ux/nap-single-response-manual-env-01/db/nora-session.sqlite
DB provenance: sqlite3 .backup of pre-int-ux-qa-01 QA clone (source not shared/not overwritten)
Historic :3020: PROTECTED — not modified
```

| Item | Value |
|------|-------|
| URL | http://localhost:3021/studio |
| Port | 3021 |
| Listen PID | `10334` |
| Launcher shell | Cursor background job (durable) |
| cwd | `.../projects/sfia-studio/app` (corrected WT) |
| Provider | FAKE |
| OpenAI LIVE | OFF |
| Cursor REAL | OFF |
| E2E QA control | 1 (NAP Fake markers enabled) |
| Auth | PASS — `/studio` reachable with local Better Auth storageState; studio-shell present |
| DB isolation | PASS — dedicated campaign sqlite paths (sqlite3 .backup of pre-int QA clone; source untouched) |

### status snapshot

```
campaign=NAP-SINGLE-RESPONSE-MANUAL-ENV-01
port=3021
url=http://localhost:3021/studio
listen_pid=10334
http_login=200
http_studio=307
cwd=/Users/morris/Projects/sfia-workspace-feat-akg-m5-nap-test16-coverage-corr-01/projects/sfia-studio/app
provider=fake
cursor_real=0
live_smoke=0
product_db=/Users/morris/Projects/sfia-workspace-feat-akg-m5-nap-test16-coverage-corr-01/.tmp-sfia-review/manual-ux/nap-single-response-manual-env-01/db/oa-product.sqlite
nora_db=/Users/morris/Projects/sfia-workspace-feat-akg-m5-nap-test16-coverage-corr-01/.tmp-sfia-review/manual-ux/nap-single-response-manual-env-01/db/nora-session.sqlite
open_sqlite=none
historic_3020=92265
```

### server log (tail)

```
QA_LAUNCH campaign=NAP-SINGLE-RESPONSE-MANUAL-ENV-01 port=3021 auth=http://localhost:3021 provider=fake product_db=/Users/morris/Projects/sfia-workspace-feat-akg-m5-nap-test16-coverage-corr-01/.tmp-sfia-review/manual-ux/nap-single-response-manual-env-01/db/oa-product.sqlite nora_db=/Users/morris/Projects/sfia-workspace-feat-akg-m5-nap-test16-coverage-corr-01/.tmp-sfia-review/manual-ux/nap-single-response-manual-env-01/db/nora-session.sqlite cursor_real=0
   ▲ Next.js 15.5.20
   - Local:        http://localhost:3021
   - Network:      http://localhost:3021

 ✓ Starting...
 ✓ Ready in 1121ms
 ✓ Compiled /middleware in 336ms (748 modules)
 ✓ Compiled /login in 322ms (603 modules)
 GET /login 200 in 474ms
 GET /login 200 in 15ms
 ○ Compiling /studio ...
 ✓ Compiled /studio in 1862ms (2953 modules)
 GET /studio 200 in 2176ms
 GET /login 200 in 32ms
```

## 6. Scripts (complete)

### scripts/start-manual-qa.sh

```bash
#!/usr/bin/env bash
set -euo pipefail
CAMPAIGN="/Users/morris/Projects/sfia-workspace-feat-akg-m5-nap-test16-coverage-corr-01/.tmp-sfia-review/manual-ux/nap-single-response-manual-env-01"
CORR_APP="/Users/morris/Projects/sfia-workspace-feat-akg-m5-nap-test16-coverage-corr-01/projects/sfia-studio/app"
ENVF="$CAMPAIGN/meta/qa.process.env"
PIDF="$CAMPAIGN/meta/qa-launcher.pid"
LISTENF="$CAMPAIGN/meta/qa-listen.pid"
LOGF="$CAMPAIGN/logs/qa-server.log"
PORT=3021

[[ -f "$ENVF" ]] || { echo "MISSING_ENV $ENVF" >&2; exit 1; }
if lsof -nP -iTCP:"$PORT" -sTCP:LISTEN >/dev/null 2>&1; then
  echo "PORT_BUSY $PORT — refuse start (will not kill owner)" >&2
  lsof -nP -iTCP:"$PORT" -sTCP:LISTEN >&2 || true
  exit 2
fi
if lsof -nP -iTCP:3020 -sTCP:LISTEN >/dev/null 2>&1; then
  echo "NOTE historic :3020 still listening — left untouched"
fi

set -a
# shellcheck disable=SC1090
source "$ENVF"
set +a
unset SFIA_STUDIO_LOCAL_OA_EXCLUSIVE || true
export OPS1_CONVERSATION_PROVIDER=fake
export SFIA_STUDIO_CURSOR_REAL=0
export OPS1_CURSOR_REAL=0
export OPS1_ALLOW_LIVE_SMOKE=0
export SFIA_STUDIO_E2E_QA_CONTROL=1
export BETTER_AUTH_URL=http://localhost:3021
export PORT=3021

cd "$CORR_APP"
mkdir -p "$CAMPAIGN/logs" "$CAMPAIGN/meta"
{
  echo "QA_LAUNCH campaign=NAP-SINGLE-RESPONSE-MANUAL-ENV-01 port=$PORT auth=$BETTER_AUTH_URL provider=$OPS1_CONVERSATION_PROVIDER product_db=$SFIA_STUDIO_PRODUCT_DB_PATH nora_db=$SFIA_STUDIO_NORA_SESSION_DB_PATH cursor_real=$SFIA_STUDIO_CURSOR_REAL"
} | tee "$LOGF"

# Explicit next binary port — never npm run dev (hardcodes 3020)
nohup npx next dev --port "$PORT" --hostname localhost >>"$LOGF" 2>&1 &
echo $! > "$PIDF"
disown $! 2>/dev/null || true
echo "LAUNCH_PID=$(cat "$PIDF")"

for i in $(seq 1 60); do
  if curl -s -o /dev/null -w "%{http_code}" "http://localhost:$PORT/login" | grep -q '^200$'; then
    LISTEN_PID=$(lsof -nP -iTCP:"$PORT" -sTCP:LISTEN -t | head -1)
    echo "$LISTEN_PID" > "$LISTENF"
    echo "READY listen_pid=$LISTEN_PID url=http://localhost:$PORT/studio"
    exit 0
  fi
  sleep 1
done
echo "STARTUP_TIMEOUT" >&2
exit 3
```

### scripts/status-manual-qa.sh

```bash
#!/usr/bin/env bash
set -euo pipefail
CAMPAIGN="/Users/morris/Projects/sfia-workspace-feat-akg-m5-nap-test16-coverage-corr-01/.tmp-sfia-review/manual-ux/nap-single-response-manual-env-01"
ENVF="$CAMPAIGN/meta/qa.process.env"
PORT=3021
URL="http://localhost:$PORT"

set -a
# shellcheck disable=SC1090
[[ -f "$ENVF" ]] && source "$ENVF"
set +a

LISTEN_PID=$(lsof -nP -iTCP:"$PORT" -sTCP:LISTEN -t 2>/dev/null | head -1 || true)
HTTP_LOGIN=$(curl -s -o /dev/null -w "%{http_code}" "$URL/login" 2>/dev/null || echo 000)
HTTP_STUDIO=$(curl -s -o /dev/null -w "%{http_code}" "$URL/studio" 2>/dev/null || echo 000)
CWD=""
DBS=""
if [[ -n "${LISTEN_PID:-}" ]]; then
  CWD=$(lsof -a -p "$LISTEN_PID" -d cwd 2>/dev/null | awk 'NR==2{print $NF}')
  DBS=$(lsof -p "$LISTEN_PID" 2>/dev/null | awk '/sqlite/{print $NF}' | sort -u | tr '\n' ' ')
fi
echo "campaign=NAP-SINGLE-RESPONSE-MANUAL-ENV-01"
echo "port=$PORT"
echo "url=$URL/studio"
echo "listen_pid=${LISTEN_PID:-none}"
echo "http_login=$HTTP_LOGIN"
echo "http_studio=$HTTP_STUDIO"
echo "cwd=${CWD:-unknown}"
echo "provider=${OPS1_CONVERSATION_PROVIDER:-unset}"
echo "cursor_real=${SFIA_STUDIO_CURSOR_REAL:-unset}"
echo "live_smoke=${OPS1_ALLOW_LIVE_SMOKE:-unset}"
echo "product_db=${SFIA_STUDIO_PRODUCT_DB_PATH:-unset}"
echo "nora_db=${SFIA_STUDIO_NORA_SESSION_DB_PATH:-unset}"
echo "open_sqlite=${DBS:-none}"
echo "historic_3020=$(lsof -nP -iTCP:3020 -sTCP:LISTEN -t 2>/dev/null | head -1 || echo none)"
```

### scripts/stop-manual-qa.sh

```bash
#!/usr/bin/env bash
set -euo pipefail
CAMPAIGN="/Users/morris/Projects/sfia-workspace-feat-akg-m5-nap-test16-coverage-corr-01/.tmp-sfia-review/manual-ux/nap-single-response-manual-env-01"
PORT=3021
EXPECTED_CWD="/Users/morris/Projects/sfia-workspace-feat-akg-m5-nap-test16-coverage-corr-01/projects/sfia-studio/app"
EXPECTED_DB_FRAGMENT="nap-single-response-manual-env-01/db"

LISTEN_PID=$(lsof -nP -iTCP:"$PORT" -sTCP:LISTEN -t 2>/dev/null | head -1 || true)
if [[ -z "${LISTEN_PID:-}" ]]; then
  echo "NOT_RUNNING port=$PORT"
  exit 0
fi
CWD=$(lsof -a -p "$LISTEN_PID" -d cwd 2>/dev/null | awk 'NR==2{print $NF}')
DBS=$(lsof -p "$LISTEN_PID" 2>/dev/null | awk '/sqlite/{print $NF}' | tr '\n' ' ')
CMD=$(ps -p "$LISTEN_PID" -o command= 2>/dev/null || true)

echo "candidate_pid=$LISTEN_PID cwd=$CWD"
if [[ "$CWD" != "$EXPECTED_CWD" ]]; then
  echo "REFUSE_STOP cwd_mismatch expected=$EXPECTED_CWD got=$CWD" >&2
  exit 2
fi
if ! echo "$CMD" | grep -q -- "--port $PORT"; then
  # next-server may not show --port; require campaign DB open
  if ! echo "$DBS" | grep -q "$EXPECTED_DB_FRAGMENT"; then
    echo "REFUSE_STOP identity_not_proven cmd=$CMD dbs=$DBS" >&2
    exit 3
  fi
fi
# Never touch 3020
if [[ "$PORT" == "3020" ]]; then echo "REFUSE_STOP protected_port" >&2; exit 4; fi

# Kill listen pid and its immediate parent next/npm chain only if they reference 3021
kill "$LISTEN_PID" 2>/dev/null || true
# parent next-dev
PPID_VAL=$(ps -p "$LISTEN_PID" -o ppid= 2>/dev/null | tr -d ' ' || true)
if [[ -n "${PPID_VAL:-}" ]]; then
  PCMD=$(ps -p "$PPID_VAL" -o command= 2>/dev/null || true)
  if echo "$PCMD" | grep -q -- "--port $PORT"; then
    kill "$PPID_VAL" 2>/dev/null || true
    GPPID=$(ps -p "$PPID_VAL" -o ppid= 2>/dev/null | tr -d ' ' || true)
    if [[ -n "${GPPID:-}" ]]; then
      GCMD=$(ps -p "$GPPID" -o command= 2>/dev/null || true)
      if echo "$GCMD" | grep -q -- "--port $PORT"; then
        kill "$GPPID" 2>/dev/null || true
      fi
    fi
  fi
fi
sleep 1
if lsof -nP -iTCP:"$PORT" -sTCP:LISTEN >/dev/null 2>&1; then
  echo "STOP_INCOMPLETE still_listening" >&2
  exit 5
fi
rm -f "$CAMPAIGN/meta/qa-listen.pid" "$CAMPAIGN/meta/qa-server.pid"
echo "STOPPED port=$PORT prior_pid=$LISTEN_PID"
echo "historic_3020=$(lsof -nP -iTCP:3020 -sTCP:LISTEN -t 2>/dev/null | head -1 || echo none)"
```

## 7. Fake / Real

MANUAL TEST ENVIRONMENT QUALIFIED — FAKE MODE.
Natural-language prompts ≠ cognitive LIVE quality proof.
OPENAI LIVE MANUAL UX — SEPARATE MORRIS GO REQUIRED.
G-REAL CLOSED.

## 8. Product files

Unchanged this cycle. Server left RUNNING for Morris.

## 9. Verdict

# NAP-SINGLE-RESPONSE-MANUAL-ENV-01 — READY FOR MORRIS MANUAL UX TEST / FAKE

Not claimed: G-REAL, OpenAI LIVE, READY FOR PR, PRODUCT MERGED, L3 COMPLETE, RUNTIME V3 ADOPTED.

## 10. Remise Morris

**MANUAL UX ENVIRONMENT — READY / FAKE**

- URL: http://localhost:3021/studio
- Port: 3021
- PID: 10334
- Branch: feat/akg-m5-nap-test16-coverage-corr-01
- HEAD: ca1c9869…
- Code D1: PRESENT / VERIFIED
- Database isolation: PASS
- Auth: PASS
- Conversation provider: FAKE
- OpenAI LIVE: OFF
- Cursor REAL: OFF
- État serveur: RUNNING
- Logs: `.tmp-sfia-review/manual-ux/nap-single-response-manual-env-01/logs/qa-server.log`
- Contrôle: `bash .tmp-sfia-review/manual-ux/nap-single-response-manual-env-01/scripts/status-manual-qa.sh`
- Arrêt: `bash .tmp-sfia-review/manual-ux/nap-single-response-manual-env-01/scripts/stop-manual-qa.sh`

Tu peux maintenant ouvrir l'URL dans ton navigateur pour tester manuellement le runtime Studio.

Les réponses de Nora utilisent actuellement le fournisseur Fake. L'évaluation de la qualité cognitive réelle nécessite un GO OpenAI LIVE séparé.

Marqueurs Fake utiles: `__NAP_QA_SHORT__` `__NAP_QA_BALISE__` `__NAP_QA_COMPARE__` `__NAP_QA_RECO__` `__NAP_QA_PROVENANCE__` `__NAP_QA_INVALID__` `__NAP_QA_FORGED_STUDIO__`

**Prefer a dedicated browser profile** for :3021 (cookies share hostname across ports).

Historic live :3020 remains available separately and was not modified by this cycle.

**END OF REVIEW PACK FULL — NAP-SINGLE-RESPONSE-MANUAL-ENV-01**
