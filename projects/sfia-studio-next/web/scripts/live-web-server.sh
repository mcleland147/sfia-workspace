#!/usr/bin/env bash
# LIVE Nora campaign webServer — DEV isolated, real provider, NO fixtures/SIM.
# Critical: empty STUDIO_FORCE_NORA_FIXTURE= must be SET in the process so Next
# dotenv does not refill FORCE=1 from .env.local.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "${ROOT}"

LIVE_PORT="${SFIA_LIVE_PORT:-3103}"

# Load .env.local via Node (handles quotes); then force-clear fixture flags.
eval "$(
  node --input-type=module -e "
import fs from 'node:fs';
const p = '${ROOT}/.env.local';
if (!fs.existsSync(p)) process.exit(0);
for (const raw of fs.readFileSync(p, 'utf8').split(/\\n/)) {
  const line = raw.trim();
  if (!line || line.startsWith('#')) continue;
  const i = line.indexOf('=');
  if (i < 0) continue;
  const k = line.slice(0, i).trim();
  let v = line.slice(i + 1);
  if ((v.startsWith('\"') && v.endsWith('\"')) || (v.startsWith(\"'\") && v.endsWith(\"'\"))) {
    v = v.slice(1, -1);
  }
  if (['STUDIO_FORCE_NORA_FIXTURE','STUDIO_NORA_SIMULATED_PROVIDER','STUDIO_E2E'].includes(k)) continue;
  process.stdout.write('export ' + k + '=' + JSON.stringify(v) + '\\n');
}
"
)"

export NODE_ENV=development
export STUDIO_LANE=DEV
export STUDIO_DEV_TEST_LOGIN=1
# Empty-but-set wins over .env.local FORCE=1
export STUDIO_FORCE_NORA_FIXTURE=
export STUDIO_NORA_SIMULATED_PROVIDER=
export STUDIO_E2E=
export SFIA_LIVE_CAMPAIGN=1

if [[ -z "${OPENAI_API_KEY:-}" ]]; then
  echo "STOP — NEXT ENVIRONMENT GATE FAILED: OPENAI_API_KEY missing for LIVE" >&2
  exit 2
fi
if [[ -z "${DATABASE_URL:-}" ]]; then
  echo "STOP — NEXT ENVIRONMENT GATE FAILED: DATABASE_URL missing for LIVE" >&2
  exit 2
fi
case "${DATABASE_URL}" in
  *5434*|*recette*|*stable*|*prod*)
    echo "STOP — NEXT ENVIRONMENT GATE FAILED: DATABASE_URL not DEV" >&2
    exit 2
    ;;
esac

echo "LIVE webServer :${LIVE_PORT} lane=${STUDIO_LANE} FORCE='${STUDIO_FORCE_NORA_FIXTURE}' SIM='${STUDIO_NORA_SIMULATED_PROVIDER}' E2E='${STUDIO_E2E}' KEY=set" >&2
exec npx next dev -p "${LIVE_PORT}" -H 127.0.0.1
