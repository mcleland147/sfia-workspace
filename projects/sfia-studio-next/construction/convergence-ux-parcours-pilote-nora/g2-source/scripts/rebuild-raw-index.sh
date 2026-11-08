#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
IDX="$ROOT/indexes/raw-files.sha256"
RAW="$ROOT/manifests/raw"
: >"$IDX"
while IFS= read -r -d '' f; do
  rel="${f#"$ROOT"/}"
  shasum -a 256 "$f" | awk -v p="$rel" '{print $1"  "p}' >>"$IDX"
done < <(find "$RAW" -maxdepth 1 -name '*.json' ! -name '_*' -print0 | sort -z)
echo "OK $IDX ($(wc -l <"$IDX" | tr -d ' ') files)"
