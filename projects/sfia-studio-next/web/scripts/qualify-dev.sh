#!/usr/bin/env bash
# C24 — DEV qualification mode (reuse existing DEV lane; not a new QUALIF env).
# Usage:
#   npm run qualify:check
#   npm run qualify:start          # build if needed + next start :3100
#   npm run qualify:browser        # Playwright LIVE against :3100
#   npm run qualify                # check → start → browser smoke
#   npm run qualify:stop
# Does NOT mutate E2E FAKE suite (port 3101 / STUDIO_E2E).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "${ROOT}"

PID_FILE="${ROOT}/.sfia-evidence/qualify-server.pid"
IDENTITY_FILE="${ROOT}/.sfia-evidence/qualify-server.identity.json"
BUILD_META="${ROOT}/.sfia-evidence/qualify-build.json"
HOST="127.0.0.1"
PORT="${SFIA_QUALIFY_PORT:-${STUDIO_PORT:-3100}}"
ACTION="${1:-help}"

mkdir -p "${ROOT}/.sfia-evidence"

load_env() {
  if [[ -f "${ROOT}/.env.local" ]]; then
    # shellcheck disable=SC1091
    eval "$(node "${ROOT}/scripts/export-dev-env-for-live.mjs")"
  fi
  export NODE_ENV=production
  export STUDIO_LANE=DEV
  export STUDIO_DEV_TEST_LOGIN=1
  # Empty-but-set wins over dotenv FORCE=1
  export STUDIO_FORCE_NORA_FIXTURE=
  export STUDIO_NORA_SIMULATED_PROVIDER=
  export STUDIO_E2E=
  export NEXT_PUBLIC_STUDIO_E2E=
  export SFIA_QUALIFY_MODE=1
  export SFIA_QUALIFY_PORT="${PORT}"
  # Session overrides (workspace root, effect mode) after .env.local — never silent SCRIPTED.
  if [[ -f "${ROOT}/.sfia-evidence/qualify-session.env" ]]; then
    # shellcheck disable=SC1091
    set -a
    # shellcheck disable=SC1090
    source "${ROOT}/.sfia-evidence/qualify-session.env"
    set +a
  fi
  # Caller-exported LIVE overrides win last.
  if [[ -n "${SFIA_QUALIFY_WORKSPACE_ROOT:-}" ]]; then
    export SFIA_CURSOR_WORKSPACE_ROOT="${SFIA_QUALIFY_WORKSPACE_ROOT}"
  fi
}

port_http_ok() {
  curl -s -o /dev/null -w "%{http_code}" --max-time 2 "http://${HOST}:${PORT}/login" 2>/dev/null | grep -qE '200|307|302'
}

content_digest() {
  # Content identity beyond mtime: sha256 of sorted path+file hashes.
  (
    cd "${ROOT}"
    printf 'pkg:%s\n' "$(openssl dgst -sha256 package.json 2>/dev/null | awk '{print $NF}')"
    printf 'cfg:%s\n' "$(openssl dgst -sha256 next.config.ts 2>/dev/null | awk '{print $NF}')"
    find src -type f \( -name '*.ts' -o -name '*.tsx' -o -name '*.css' -o -name '*.sql' \) \
      2>/dev/null | sort | while IFS= read -r f; do
      printf '%s:%s\n' "$f" "$(openssl dgst -sha256 "$f" 2>/dev/null | awk '{print $NF}')"
    done
  ) | openssl dgst -sha256 2>/dev/null | awk '{print $NF}'
}

session_fingerprint() {
  # Capture LIVE session knobs that must match the running process.
  local ws mode
  ws="${SFIA_CURSOR_WORKSPACE_ROOT:-}"
  mode="${SFIA_CURSOR_EFFECT_MODE:-}"
  printf 'ws:%s|mode:%s\n' "${ws}" "${mode}" | openssl dgst -sha256 2>/dev/null | awk '{print $NF}'
}

write_identity() {
  local pid="$1"
  local bid="$2"
  local digest="$3"
  local started sess
  started="$(date -u +%Y-%m-%dT%H:%M:%SZ)"
  sess="$(session_fingerprint)"
  printf '%s\n' "{\"pid\":${pid},\"port\":${PORT},\"host\":$(node -e "console.log(JSON.stringify(process.argv[1]))" "${HOST}"),\"buildId\":$(node -e "console.log(JSON.stringify(process.argv[1]))" "${bid}"),\"contentDigest\":$(node -e "console.log(JSON.stringify(process.argv[1]))" "${digest}"),\"sessionFingerprint\":$(node -e "console.log(JSON.stringify(process.argv[1]))" "${sess}"),\"workspaceRoot\":$(node -e "console.log(JSON.stringify(process.argv[1]))" "${SFIA_CURSOR_WORKSPACE_ROOT:-}"),\"effectMode\":$(node -e "console.log(JSON.stringify(process.argv[1]))" "${SFIA_CURSOR_EFFECT_MODE:-}"),\"startedAt\":\"${started}\",\"mode\":\"qualify-next-start\"}" > "${IDENTITY_FILE}"
}

owned_qualify_pid() {
  if [[ ! -f "${PID_FILE}" ]]; then
    echo ""
    return 0
  fi
  local pid
  pid="$(cat "${PID_FILE}" 2>/dev/null || true)"
  if [[ -z "${pid}" ]] || ! kill -0 "${pid}" 2>/dev/null; then
    echo ""
    return 0
  fi
  # Confirm process is ours: cmdline contains next start and our port, or identity matches.
  local cmd
  cmd="$(ps -p "${pid}" -o command= 2>/dev/null || true)"
  if [[ "${cmd}" == *"next"* ]] && [[ "${cmd}" == *"${PORT}"* || "${cmd}" == *"start"* ]]; then
    echo "${pid}"
    return 0
  fi
  if [[ -f "${IDENTITY_FILE}" ]]; then
    local id_pid
    id_pid="$(node -e "try{const j=require(process.argv[1]);process.stdout.write(String(j.pid||''))}catch{}" "${IDENTITY_FILE}")"
    if [[ "${id_pid}" == "${pid}" ]]; then
      echo "${pid}"
      return 0
    fi
  fi
  echo ""
}

probe_running_server() {
  # Identify build via local BUILD_ID + identity file; HTTP alone is insufficient.
  local bid=""
  local digest=""
  local pid=""
  [[ -f "${ROOT}/.next/BUILD_ID" ]] && bid="$(cat "${ROOT}/.next/BUILD_ID")"
  [[ -f "${BUILD_META}" ]] && digest="$(node -e "try{const j=require(process.argv[1]);process.stdout.write(j.contentDigest||'')}catch{}" "${BUILD_META}")"
  pid="$(owned_qualify_pid)"
  if port_http_ok; then
    if [[ -n "${pid}" ]]; then
      echo "qualify: owned server pid=${pid} build=${bid:-unknown} digest=${digest:-unknown} http=ok" >&2
      return 0
    fi
    echo "qualify: http://127.0.0.1:${PORT}/login responds but no owned qualify pid — refuse silent reuse" >&2
    echo "qualify: stop foreign listener manually or free the port, then qualify:start" >&2
    return 1
  fi
  return 2
}

cmd_check() {
  load_env
  npx --yes tsx "${ROOT}/scripts/qualify-check.mts"
}

cmd_build() {
  load_env
  local force="${SFIA_QUALIFY_FORCE_BUILD:-0}"
  local need=0
  local digest
  digest="$(content_digest)"
  local prev_digest=""
  if [[ -f "${BUILD_META}" ]]; then
    prev_digest="$(node -e "try{const j=require(process.argv[1]);process.stdout.write(j.contentDigest||'')}catch{}" "${BUILD_META}")"
  fi
  if [[ "${force}" == "1" ]]; then need=1; fi
  if [[ ! -f "${ROOT}/.next/BUILD_ID" ]]; then need=1; fi
  if [[ "${need}" == "0" && -n "${prev_digest}" && "${prev_digest}" != "${digest}" ]]; then
    need=1
    echo "qualify: contentDigest changed — rebuild required" >&2
  fi
  if [[ "${need}" == "0" && -z "${prev_digest}" ]]; then
    # No prior digest: fall back to mtime then record digest after reuse/build.
    if [[ -n "$(find "${ROOT}/src" "${ROOT}/package.json" "${ROOT}/next.config.ts" -newer "${ROOT}/.next/BUILD_ID" 2>/dev/null | head -1)" ]]; then
      need=1
    fi
  fi
  if [[ "${need}" == "0" ]]; then
    local bid
    bid="$(cat "${ROOT}/.next/BUILD_ID")"
    echo "qualify: reuse existing build ${bid} digest=${digest}" >&2
    printf '%s\n' "{\"buildId\":$(node -e "console.log(JSON.stringify(process.argv[1]))" "${bid}"),\"reused\":true,\"contentDigest\":$(node -e "console.log(JSON.stringify(process.argv[1]))" "${digest}"),\"at\":\"$(date -u +%Y-%m-%dT%H:%M:%SZ)\"}" > "${BUILD_META}"
    return 0
  fi
  echo "qualify: building Next…" >&2
  npm run build
  local bid
  bid="$(cat "${ROOT}/.next/BUILD_ID")"
  export SFIA_BUILD_ID="${bid}"
  digest="$(content_digest)"
  printf '%s\n' "{\"buildId\":$(node -e "console.log(JSON.stringify(process.argv[1]))" "${bid}"),\"reused\":false,\"contentDigest\":$(node -e "console.log(JSON.stringify(process.argv[1]))" "${digest}"),\"at\":\"$(date -u +%Y-%m-%dT%H:%M:%SZ)\"}" > "${BUILD_META}"
  echo "qualify: BUILD_ID=${bid} digest=${digest}" >&2
}

cmd_start() {
  load_env
  local want_sess want_digest
  want_sess="$(session_fingerprint)"
  want_digest="$(content_digest)"
  if probe_running_server; then
    local have_sess="" have_digest=""
    if [[ -f "${IDENTITY_FILE}" ]]; then
      have_sess="$(node -e "try{const j=require(process.argv[1]);process.stdout.write(j.sessionFingerprint||'')}catch{}" "${IDENTITY_FILE}")"
      have_digest="$(node -e "try{const j=require(process.argv[1]);process.stdout.write(j.contentDigest||'')}catch{}" "${IDENTITY_FILE}")"
    fi
    local force="${SFIA_QUALIFY_FORCE_BUILD:-0}"
    if [[ "${force}" == "1" ]]; then
      echo "qualify: SFIA_QUALIFY_FORCE_BUILD=1 — restart owned server" >&2
      cmd_stop
    elif [[ -n "${want_sess}" && "${have_sess}" == "${want_sess}" && "${have_digest}" == "${want_digest}" ]]; then
      echo "qualify: reuse owned server — session+contentDigest match (${want_sess:0:12}…)" >&2
      return 0
    else
      echo "qualify: identity drift (sess have=${have_sess:-none} want=${want_sess:0:12}… digest have=${have_digest:0:12}… want=${want_digest:0:12}…) — restart" >&2
      cmd_stop
    fi
  else
    local probe_rc=$?
    if [[ "${probe_rc}" -eq 1 ]]; then
      exit 4
    fi
  fi
  if [[ -f "${PID_FILE}" ]]; then
    local old
    old="$(cat "${PID_FILE}" || true)"
    if [[ -n "${old}" ]] && kill -0 "${old}" 2>/dev/null; then
      echo "qualify: pid ${old} alive but /login not ready — waiting" >&2
    else
      rm -f "${PID_FILE}" "${IDENTITY_FILE}"
    fi
  fi
  cmd_build
  local bid digest
  bid="$(cat "${ROOT}/.next/BUILD_ID")"
  digest="$(node -e "try{const j=require(process.argv[1]);process.stdout.write(j.contentDigest||'')}catch{}" "${BUILD_META}")"
  export SFIA_BUILD_ID="${bid}"
  if [[ -z "${SFIA_D8_VERIFY_HMAC_SECRET:-}" ]]; then
    local sec_file="${ROOT}/.sfia-evidence/d8-verify-hmac.secret"
    if [[ ! -f "${sec_file}" ]]; then
      openssl rand -hex 32 > "${sec_file}"
      chmod 600 "${sec_file}"
    fi
    export SFIA_D8_VERIFY_HMAC_SECRET
    SFIA_D8_VERIFY_HMAC_SECRET="$(cat "${sec_file}")"
  fi
  # Ensure workspace root exists before start (LIVE confinement).
  if [[ -n "${SFIA_CURSOR_WORKSPACE_ROOT:-}" ]]; then
    mkdir -p "${SFIA_CURSOR_WORKSPACE_ROOT}"
  fi
  echo "qualify: starting next start ${HOST}:${PORT} build=${bid} digest=${digest} ws=${SFIA_CURSOR_WORKSPACE_ROOT:-unset} mode=${SFIA_CURSOR_EFFECT_MODE:-unset}" >&2
  nohup npx next start -p "${PORT}" -H "${HOST}" \
    > "${ROOT}/.sfia-evidence/qualify-server.log" 2>&1 &
  local pid=$!
  echo "${pid}" > "${PID_FILE}"
  write_identity "${pid}" "${bid}" "${digest}"
  local i=0
  while (( i < 60 )); do
    if port_http_ok; then
      echo "qualify: ready http://${HOST}:${PORT}/login pid=${pid} build=${bid}" >&2
      return 0
    fi
    sleep 1
    i=$((i + 1))
  done
  echo "STOP — qualify server did not become ready on :${PORT}" >&2
  tail -n 40 "${ROOT}/.sfia-evidence/qualify-server.log" >&2 || true
  exit 3
}

cmd_stop() {
  local pid
  pid="$(owned_qualify_pid)"
  if [[ -z "${pid}" ]]; then
    echo "qualify: no owned qualify process to stop (refusing port-wide kill)" >&2
    rm -f "${PID_FILE}"
    # Keep identity for diagnosis unless explicitly cleared.
    return 0
  fi
  echo "qualify: stopping owned pid ${pid}" >&2
  kill "${pid}" 2>/dev/null || true
  sleep 1
  if kill -0 "${pid}" 2>/dev/null; then
    kill -9 "${pid}" 2>/dev/null || true
  fi
  rm -f "${PID_FILE}" "${IDENTITY_FILE}"
  echo "qualify: stopped owned pid ${pid}" >&2
}

cmd_browser() {
  load_env
  if ! port_http_ok; then
    echo "STOP — server not ready; run npm run qualify:start first" >&2
    exit 2
  fi
  local pid
  pid="$(owned_qualify_pid)"
  if [[ -z "${pid}" ]]; then
    echo "qualify: WARN — browser against :${PORT} without owned qualify identity" >&2
  else
    echo "qualify: browser against owned pid=${pid}" >&2
  fi
  export SFIA_QUALIFY_BASE_URL="http://${HOST}:${PORT}"
  if [[ -f "${ROOT}/.next/BUILD_ID" ]]; then
    export SFIA_BUILD_ID
    SFIA_BUILD_ID="$(cat "${ROOT}/.next/BUILD_ID")"
  fi
  npx playwright test -c playwright.qualify.config.ts "$@"
}

cmd_all() {
  cmd_check
  cmd_start
  cmd_browser
}

case "${ACTION}" in
  check) cmd_check ;;
  build) cmd_build ;;
  start) cmd_start ;;
  stop) cmd_stop ;;
  browser) shift; cmd_browser "$@" ;;
  all|qualify) cmd_all ;;
  help|*)
    cat <<EOF
DEV qualification mode (C24) — same DEV lane, explicit LIVE qualify.
  bash scripts/qualify-dev.sh check
  bash scripts/qualify-dev.sh start
  bash scripts/qualify-dev.sh browser [playwright args]
  bash scripts/qualify-dev.sh stop
  bash scripts/qualify-dev.sh all
EOF
    ;;
esac
