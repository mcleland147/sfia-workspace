#!/usr/bin/env python3
"""Persist a use_figma payload dict to scripts/embed/<name>.json (stdin JSON)."""
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
EMBED = ROOT / "scripts" / "embed"
if len(sys.argv) != 2:
    print("usage: save_mcp_embed.py <embed-stem>", file=sys.stderr)
    raise SystemExit(2)
name = sys.argv[1]
payload = json.load(sys.stdin)
EMBED.mkdir(parents=True, exist_ok=True)
out = EMBED / f"{name}.json"
out.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print(f"wrote {out.name} nodes={len(payload.get('nodes', []))} bytes={out.stat().st_size}")
