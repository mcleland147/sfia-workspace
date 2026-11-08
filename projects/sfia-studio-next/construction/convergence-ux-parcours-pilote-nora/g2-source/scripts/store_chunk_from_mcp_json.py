#!/usr/bin/env python3
"""Write scripts/tmp/<family>.c<idx>.txt from MCP {family,idx,chunk} JSON file."""
from __future__ import annotations

import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TMP = ROOT / "scripts" / "tmp"


def main() -> int:
    src = Path(sys.argv[1])
    data = json.loads(src.read_text(encoding="utf-8"))
    family = data["family"]
    idx = int(data.get("idx", 0))
    chunk = data["chunk"]
    TMP.mkdir(parents=True, exist_ok=True)
    out = TMP / f"{family}.c{idx}.txt"
    out.write_text(chunk, encoding="utf-8")
    print(f"wrote {out.name} bytes={out.stat().st_size}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
