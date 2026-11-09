#!/usr/bin/env bash
# Owned Playwright webServer: isolated port + DB + Nora fixture force + separate distDir.
# Never reuses the operator DEV server on :3100. Never calls OpenAI LIVE.
# CREATE DATABASE / migrate happen ONLY after read-only preflight passes.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "${ROOT}"

CONTAINER="${SFIA_PG_CONTAINER:-sfia-next-dev-pg}"
DB_USER="${SFIA_PG_USER:-sfia_next_dev}"
E2E_DB="${SFIA_E2E_DATABASE:-sfia_next_e2e}"
E2E_PORT="${SFIA_E2E_PORT:-3101}"

# --- P2: read-only preflight BEFORE any mutation ---
E2E_DATABASE_URL="$(
  SFIA_PG_CONTAINER="${CONTAINER}" SFIA_E2E_DATABASE="${E2E_DB}" \
    npx --yes tsx "${ROOT}/scripts/e2e-preflight.ts"
)"
if [[ -z "${E2E_DATABASE_URL}" ]]; then
  echo "STOP — NEXT ENVIRONMENT GATE FAILED: empty E2E DATABASE_URL" >&2
  exit 2
fi

# Mutations only against approved E2E DB name on the verified DEV container.
exists="$(docker exec "${CONTAINER}" psql -U "${DB_USER}" -d postgres -tAc \
  "SELECT 1 FROM pg_database WHERE datname='${E2E_DB}'" | tr -d '[:space:]')"
if [[ "${exists}" != "1" ]]; then
  docker exec "${CONTAINER}" psql -U "${DB_USER}" -d postgres -v ON_ERROR_STOP=1 \
    -c "CREATE DATABASE ${E2E_DB} OWNER ${DB_USER};"
fi

SFIA_PG_DATABASE="${E2E_DB}" bash "${ROOT}/scripts/db-migrate.sh"

export DATABASE_URL="${E2E_DATABASE_URL}"
export STUDIO_LANE=DEV
export STUDIO_DEV_TEST_LOGIN=1
export STUDIO_E2E=1
export STUDIO_FORCE_NORA_FIXTURE=1
export STUDIO_GITHUB_PROVIDER=scripted
# Explicit SCRIPTED GitHub auth gate (D9) — required for authorize/complete in E2E.
export STUDIO_ALLOW_SCRIPTED_GITHUB=1
# Neutralize operator REAL user-OAuth / mutation flags from .env.local — E2E must stay SCRIPTED/DET.
# Empty value wins over dotenv (Next does not override existing env).
export STUDIO_GITHUB_USER_OAUTH=
export STUDIO_GITHUB_ALLOW_MUTATIONS=
# Neutralize LIVE key for this process (Next does not override existing env with .env.local).
export OPENAI_API_KEY=
unset OPENAI_API_KEY
export OPENAI_API_KEY=

# P3: STUDIO_E2E=1 → next.config distDir=.next-e2e (operator keeps .next).
# Webpack (no --turbopack): avoids intermittent CI failures where next/font/google
# under turbopack never becomes ready ("queries have exactly one entry" / font module).
rm -rf "${ROOT}/.next-e2e"
exec npx next dev -p "${E2E_PORT}" -H 127.0.0.1
