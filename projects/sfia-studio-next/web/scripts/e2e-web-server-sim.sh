#!/usr/bin/env bash
# Level-B Playwright webServer wrapper — arms provider simulation.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
export STUDIO_NORA_SIMULATED_PROVIDER=1
exec bash "${ROOT}/scripts/e2e-web-server.sh"
