#!/usr/bin/env python3
"""Write a JSON payload file (used to persist MCP extract blobs)."""
import json
import sys
from pathlib import Path

if len(sys.argv) != 2:
    print("usage: save_json_payload.py <out.json>", file=sys.stderr)
    raise SystemExit(2)
out = Path(sys.argv[1])
raw = sys.stdin.read()
data = json.loads(raw)
out.parent.mkdir(parents=True, exist_ok=True)
out.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print(f"wrote {out} ({out.stat().st_size} bytes)")
