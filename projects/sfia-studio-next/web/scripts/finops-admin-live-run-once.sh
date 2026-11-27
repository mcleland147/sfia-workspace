#!/usr/bin/env bash
# One-shot LIVE Admin collection for operator Terminal / isolated subshell.
# Never echoes OPENAI_ADMIN_KEY or DSN password.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "${ROOT}"
# Workspace .tmp (repo root relative to web/)
OUT_DIR="$(cd "${ROOT}/../../../.tmp-sfia-review" && pwd)"
mkdir -p "${OUT_DIR}"
OUT_COSTS="${OUT_DIR}/admin-live-costs.json"
OUT_USAGE="${OUT_DIR}/admin-live-usage.json"
LOG="${OUT_DIR}/admin-live-operator.log"

OP_ENV="${SFIA_OPERATOR_ENV_FILE:-$HOME/.sfia/operator/admin-live-dev.env}"
if [[ ! -f "${OP_ENV}" ]]; then
  echo '{"status":"BLOCKED","reason":"OPERATOR_ENV_FILE_MISSING"}' > "${OUT_COSTS}"
  exit 2
fi

# shellcheck disable=SC1090
set -a
# Source operator secrets into THIS process only — do not export to parent.
source "${OP_ENV}"
set +a

{
  echo "ts=$(date -u +%Y-%m-%dT%H:%M:%SZ)"
  echo "lane=${STUDIO_LANE:-}"
  echo "collector_process=${SFIA_ADMIN_COLLECTOR_PROCESS:-}"
  echo "live=${SFIA_ADMIN_USAGE_LIVE:-}"
  echo "admin_key_present=$([ -n "${OPENAI_ADMIN_KEY:-}" ] && echo yes || echo no)"
  echo "dsn_present=$([ -n "${SFIA_ADMIN_COLLECTOR_DATABASE_URL:-}" ] && echo yes || echo no)"
} > "${LOG}"

START="${1:-1795651200}"
END="${2:-1795737600}"
PROJECT="${3:-proj_HVZL4x3J77GXEVtq9EqRokpR}"

set +e
./scripts/finops-admin-live-operator.sh \
  --path /organization/costs \
  --start-time "${START}" \
  --end-time "${END}" \
  --project-id "${PROJECT}" \
  --max-pages 3 \
  > "${OUT_COSTS}" 2>>"${LOG}"
EC1=$?

./scripts/finops-admin-live-operator.sh \
  --path /organization/usage/completions \
  --start-time "${START}" \
  --end-time "${END}" \
  --project-id "${PROJECT}" \
  --max-pages 3 \
  > "${OUT_USAGE}" 2>>"${LOG}"
EC2=$?
set -e

# Redact accidental secrets from artifacts (never leave sk-/DSN password in files)
export OUT_DIR
python3 - <<'PY'
from pathlib import Path
import re, os
out = Path(os.environ["OUT_DIR"])
for name in ("admin-live-costs.json", "admin-live-usage.json", "admin-live-operator.log"):
    p = out / name
    if not p.exists():
        continue
    t = p.read_text(errors="ignore")
    t = re.sub(r"sk-[A-Za-z0-9_-]+", "sk-[REDACTED]", t)
    t = re.sub(r"(postgresql://[^:\s/]+:)[^@\s]+@", r"\1***@", t)
    p.write_text(t)
PY

echo "exit_costs=${EC1} exit_usage=${EC2}" >> "${LOG}"
echo "OPERATOR_RUN_COMPLETE"
exit 0
