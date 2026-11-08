#!/usr/bin/env python3
"""Materialize scripts/embed from scripts/tmp/mcp-*.json wrapper files."""
from __future__ import annotations

import json
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TMP = ROOT / "scripts" / "tmp"
PERSIST = ROOT / "scripts" / "persist_mcp_chunk.py"
SAVE = ROOT / "scripts" / "save_mcp_embed.py"


def main() -> int:
    ok = 0
    for path in sorted(TMP.glob("mcp-*.json")):
        data = json.loads(path.read_text(encoding="utf-8"))
        if "chunks" in data:
            subprocess.run([sys.executable, str(PERSIST)], input=json.dumps(data), text=True, check=True)
            ok += 1
        elif "nodes" in data:
            stem = path.stem.replace("mcp-", "")
            subprocess.run([sys.executable, str(SAVE), stem], input=json.dumps(data), text=True, check=True)
            ok += 1
    print(f"materialized {ok} captures")
    return 0 if ok else 1


if __name__ == "__main__":
    raise SystemExit(main())
