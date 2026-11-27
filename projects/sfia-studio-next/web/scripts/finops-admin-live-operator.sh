#!/usr/bin/env bash
# Operator-only LIVE Admin collection launcher.
# Cursor/agent must NOT run this with a real OPENAI_ADMIN_KEY in its environment.
#
# Expected: Morris opens a separate Terminal.app window, sources an untracked
# operator env file, then runs this script.
#
# Example operator env file (~/.sfia/operator/admin-live-dev.env) — NEVER Git:
#   export STUDIO_LANE=DEV
#   export SFIA_ADMIN_COLLECTOR_PROCESS=1
#   export SFIA_ADMIN_USAGE_LIVE=1
#   export OPENAI_ADMIN_KEY='…'
#   export SFIA_ADMIN_COLLECTOR_DATABASE_URL='postgresql://sfia_admin_collector_ops:…@127.0.0.1:5433/sfia_next_dev'
#
# Usage:
#   source ~/.sfia/operator/admin-live-dev.env
#   ./scripts/finops-admin-live-operator.sh \
#     --path /organization/costs \
#     --start-time 1732320000 --end-time 1732406400 \
#     --project-id proj_XXXX --max-pages 3
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "${ROOT}"

if [[ "${SFIA_ADMIN_COLLECTOR_PROCESS:-}" != "1" || "${SFIA_ADMIN_USAGE_LIVE:-}" != "1" || "${STUDIO_LANE:-}" != "DEV" ]]; then
  echo '{"status":"BLOCKED","reason":"OPERATOR_ENV_INCOMPLETE"}'
  exit 2
fi
if [[ -z "${OPENAI_ADMIN_KEY:-}" ]]; then
  echo '{"status":"BLOCKED","reason":"OPENAI_ADMIN_KEY_ABSENT"}'
  exit 2
fi
if [[ -z "${SFIA_ADMIN_COLLECTOR_DATABASE_URL:-}" ]]; then
  echo '{"status":"BLOCKED","reason":"COLLECTOR_DSN_ABSENT"}'
  exit 2
fi

# Refuse if argv appears to contain a key-shaped token.
for a in "$@"; do
  if [[ "${a}" == sk-* ]]; then
    echo '{"status":"BLOCKED","reason":"SECRET_MUST_NOT_APPEAR_IN_ARGV"}'
    exit 2
  fi
done

exec npx tsx scripts/finops-admin-collect.mts "$@"
