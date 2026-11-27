#!/usr/bin/env bash
# Operator-only — provision LOGIN for sfia_admin_collector_ops on DEV PG.
# NEVER commit passwords. NEVER pass the OpenAI Admin key here.
#
# macOS Keychain (recommended):
#   security add-generic-password -a sfia_admin_collector_ops \
#     -s sfia-next-dev-pg-collector -w
#   STUDIO_LANE=DEV ./scripts/finops-admin-collector-db-provision.sh
#
# Or export SFIA_ADMIN_COLLECTOR_DB_PASSWORD from an untracked local file.
set -euo pipefail

CONTAINER="${SFIA_PG_CONTAINER:-sfia-next-dev-pg}"
DB_OWNER="${SFIA_PG_USER:-sfia_next_dev}"
DB_NAME="${SFIA_PG_DATABASE:-sfia_next_dev}"
OPS_ROLE="sfia_admin_collector_ops"
HOST_PORT="${SFIA_PG_HOST_PORT:-5433}"

if [[ "${STUDIO_LANE:-}" != "DEV" && "${SFIA_ALLOW_COLLECTOR_PROVISION:-}" != "1" ]]; then
  echo '{"status":"BLOCKED","reason":"STUDIO_LANE_DEV_OR_EXPLICIT_ALLOW_REQUIRED"}'
  exit 2
fi

PASS=""
if [[ -n "${SFIA_ADMIN_COLLECTOR_DB_PASSWORD:-}" ]]; then
  PASS="${SFIA_ADMIN_COLLECTOR_DB_PASSWORD}"
elif command -v security >/dev/null 2>&1; then
  PASS="$(security find-generic-password -a "${OPS_ROLE}" -s sfia-next-dev-pg-collector -w 2>/dev/null || true)"
fi

if [[ -z "${PASS}" ]]; then
  echo '{"status":"BLOCKED","reason":"NO_PASSWORD_SOURCE","hint":"Keychain service sfia-next-dev-pg-collector or SFIA_ADMIN_COLLECTOR_DB_PASSWORD"}'
  exit 2
fi

# Escape single quotes for SQL literal (password never echoed to stdout).
PASS_SQL="${PASS//\'/\'\'}"
docker exec -i "${CONTAINER}" \
  psql -v ON_ERROR_STOP=1 -U "${DB_OWNER}" -d "${DB_NAME}" >/dev/null <<SQL
ALTER ROLE ${OPS_ROLE} WITH LOGIN PASSWORD '${PASS_SQL}';
SQL

# Prove LOGIN without printing the password value.
WHO="$(
  docker exec -e PGPASSWORD="${PASS}" "${CONTAINER}" \
    psql -h 127.0.0.1 -U "${OPS_ROLE}" -d "${DB_NAME}" -tAc "SELECT current_user" 2>/dev/null | tr -d '[:space:]'
)"
if [[ "${WHO}" != "${OPS_ROLE}" ]]; then
  echo '{"status":"ERROR","reason":"LOGIN_PROOF_FAILED"}'
  exit 3
fi

printf '%s\n' "{\"status\":\"READY\",\"role\":\"${OPS_ROLE}\",\"database\":\"${DB_NAME}\",\"host\":\"127.0.0.1\",\"port\":${HOST_PORT},\"dsn_template\":\"postgresql://${OPS_ROLE}:***@127.0.0.1:${HOST_PORT}/${DB_NAME}\",\"note\":\"Set SFIA_ADMIN_COLLECTOR_DATABASE_URL in operator-only env; never Git/chat/agent\"}"
