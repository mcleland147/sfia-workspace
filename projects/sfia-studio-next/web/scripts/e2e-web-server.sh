#!/usr/bin/env bash
# Owned Playwright webServer: isolated port + DB + Nora fixture force.
# Never reuses the operator DEV server on :3100. Never calls OpenAI LIVE.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "${ROOT}"

CONTAINER="${SFIA_PG_CONTAINER:-sfia-next-dev-pg}"
DB_USER="${SFIA_PG_USER:-sfia_next_dev}"
E2E_DB="${SFIA_E2E_DATABASE:-sfia_next_e2e}"
E2E_PORT="${SFIA_E2E_PORT:-3101}"

# Create dedicated E2E database on the same Postgres instance (does NOT touch sfia_next_dev).
exists="$(docker exec "${CONTAINER}" psql -U "${DB_USER}" -d postgres -tAc \
  "SELECT 1 FROM pg_database WHERE datname='${E2E_DB}'" | tr -d '[:space:]')"
if [[ "${exists}" != "1" ]]; then
  docker exec "${CONTAINER}" psql -U "${DB_USER}" -d postgres -v ON_ERROR_STOP=1 \
    -c "CREATE DATABASE ${E2E_DB} OWNER ${DB_USER};"
fi

SFIA_PG_DATABASE="${E2E_DB}" bash "${ROOT}/scripts/db-migrate.sh"

# Derive DATABASE_URL for e2e DB from .env.local without printing secrets.
E2E_DATABASE_URL="$(
  SFIA_E2E_DATABASE="${E2E_DB}" node --input-type=module <<'NODE'
import { config } from "dotenv";
import { resolve } from "path";
config({ path: resolve(process.cwd(), ".env.local") });
const base = process.env.DATABASE_URL;
if (!base) {
  console.error("DATABASE_URL missing from .env.local — cannot start E2E server");
  process.exit(1);
}
const u = new URL(base);
u.pathname = `/${process.env.SFIA_E2E_DATABASE || "sfia_next_e2e"}`;
process.stdout.write(u.toString());
NODE
)"

export DATABASE_URL="${E2E_DATABASE_URL}"
export STUDIO_LANE=DEV
export STUDIO_DEV_TEST_LOGIN=1
export STUDIO_E2E=1
export STUDIO_FORCE_NORA_FIXTURE=1
# Neutralize LIVE key for this process (Next does not override existing env with .env.local).
export OPENAI_API_KEY=
unset OPENAI_API_KEY
export OPENAI_API_KEY=

exec npx next dev --turbopack -p "${E2E_PORT}" -H 127.0.0.1
