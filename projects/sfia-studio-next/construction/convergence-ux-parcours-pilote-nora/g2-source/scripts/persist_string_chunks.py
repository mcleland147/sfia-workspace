#!/usr/bin/env python3
"""Join chunk files scripts/tmp/<stem>.chunk.*.json into embed/<stem>.json."""
from __future__ import annotations

import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TMP = ROOT / "scripts" / "tmp"
EMBED = ROOT / "scripts" / "embed"


def main() -> int:
    if len(sys.argv) < 2:
        print("usage: persist_string_chunks.py <stem>", file=sys.stderr)
        return 2
    stem = sys.argv[1]
    parts = sorted(TMP.glob(f"{stem}.chunk.*.txt"))
    if not parts:
        print("no chunks for", stem, file=sys.stderr)
        return 1
    blob = "".join(p.read_text(encoding="utf-8") for p in parts)
    payload = json.loads(blob)
    payload.setdefault("nodeCount", len(payload.get("nodes", [])))
    EMBED.mkdir(parents=True, exist_ok=True)
    out = EMBED / f"{stem}.json"
    out.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"wrote {out.name} nodes={payload['nodeCount']} bytes={out.stat().st_size}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
