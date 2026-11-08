#!/usr/bin/env python3
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
EMBED = ROOT / "scripts" / "embed"
name = sys.argv[1]
payload = json.load(sys.stdin)
EMBED.mkdir(parents=True, exist_ok=True)
out = EMBED / f"{name}.json"
out.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print(f"wrote {out.name} nodes={len(payload.get('nodes', []))}")
