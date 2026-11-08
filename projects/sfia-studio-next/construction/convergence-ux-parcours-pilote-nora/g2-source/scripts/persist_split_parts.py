#!/usr/bin/env python3
"""Merge scripts/tmp/<stem>.p1.json + .p2.json (split node arrays) into embed/."""
from __future__ import annotations

import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TMP = ROOT / "scripts" / "tmp"
EMBED = ROOT / "scripts" / "embed"


def main() -> int:
    stem = sys.argv[1]
    p1 = json.loads((TMP / f"{stem}.p1.json").read_text(encoding="utf-8"))
    p2 = json.loads((TMP / f"{stem}.p2.json").read_text(encoding="utf-8"))
    meta = p1.get("meta", {})
    nodes = p1.get("nodes", []) + p2.get("nodes", [])
    payload = {**meta, "nodes": nodes, "nodeCount": len(nodes)}
    EMBED.mkdir(parents=True, exist_ok=True)
    out = EMBED / f"{stem}.json"
    out.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"wrote {out.name} nodes={len(nodes)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
