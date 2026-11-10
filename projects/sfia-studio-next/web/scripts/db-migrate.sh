#!/usr/bin/env bash
# Apply studio core migrations in order on a target Postgres database.
# Defaults target the local DEV container/database — never RECETTE/STABLE.
# Fail-closed: any SQL error aborts the script (ON_ERROR_STOP + set -e).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
CONTAINER="${SFIA_PG_CONTAINER:-sfia-next-dev-pg}"
DB_USER="${SFIA_PG_USER:-sfia_next_dev}"
DB_NAME="${SFIA_PG_DATABASE:-sfia_next_dev}"
MIGRATIONS_DIR="${ROOT}/src/db/migrations"

apply() {
  local file="$1"
  echo "Applying ${file} → ${CONTAINER}/${DB_NAME}"
  docker exec -i "${CONTAINER}" \
    psql -v ON_ERROR_STOP=1 -U "${DB_USER}" -d "${DB_NAME}" \
    < "${MIGRATIONS_DIR}/${file}"
}

apply "001_initial_studio_core.sql"
apply "002_session_auth_mode.sql"
apply "003_ml2_knowledge_documents.sql"
apply "004_ml2_integrity_corrective.sql"
apply "005_ml2_conversation_turn_command.sql"
apply "006_ml2_turn_owner_token.sql"
apply "007_ml3_pilotage_decisions.sql"
apply "008_git_collaboration.sql"
apply "009_publication_ref_attempt_unique.sql"
apply "010_github_app_user_oauth.sql"
apply "011_oauth_session_binding.sql"
apply "012_auth_concurrency_safety.sql"
echo "db:migrate OK (001→012)"
