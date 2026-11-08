#!/usr/bin/env bash
# usage: persist_mcp_stdin_embed.sh <embed-stem>  (JSON on stdin)
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
exec python3 "$ROOT/scripts/save_mcp_embed.py" "$1"
