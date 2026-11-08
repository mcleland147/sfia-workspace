#!/usr/bin/env bash
# usage: mcp_stdin_to_embed.sh <stem>  # stdin = use_figma JSON payload
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
stem="${1:?stem}"
tmp="$(mktemp)"
trap 'rm -f "$tmp"' EXIT
cat >"$tmp"
python3 "$ROOT/scripts/ingest_figma_response.py" "$tmp" "$stem"
