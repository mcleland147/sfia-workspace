#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
shopt -s nullglob
for f in "$ROOT"/scripts/tmp/*-payload.json; do
  base="$(basename "$f" -payload.json)"
  python3 "$ROOT/scripts/save_mcp_embed.py" "$base" < "$f"
done
for f in "$ROOT"/scripts/tmp/mcp-*.json; do
  python3 "$ROOT/scripts/persist_mcp_chunk.py" < "$f"
done
echo "embed count $(ls -1 "$ROOT/scripts/embed"/*.json 2>/dev/null | wc -l | tr -d ' ')"
