#!/usr/bin/env python3
"""Split multi-family MCP dict or persist wrapper JSON files in scripts/tmp/."""
from __future__ import annotations

import json
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TMP = ROOT / "scripts" / "tmp"
SAVE = ROOT / "scripts" / "save_mcp_embed.py"
PERSIST = ROOT / "scripts" / "persist_mcp_chunk.py"


def save_embed(stem: str, doc: dict) -> None:
    subprocess.run(
        [sys.executable, str(SAVE), stem],
        input=json.dumps(doc, ensure_ascii=False),
        text=True,
        check=True,
    )


def persist_wrapper(path: Path) -> None:
    subprocess.run(
        [sys.executable, str(PERSIST)],
        input=path.read_text(encoding="utf-8"),
        text=True,
        check=True,
    )


def main() -> int:
    for batch in TMP.glob("batch-*.json"):
        data = json.loads(batch.read_text(encoding="utf-8"))
        if not isinstance(data, dict):
            continue
        for stem, doc in data.items():
            if isinstance(doc, dict) and "nodes" in doc:
                save_embed(stem, doc)
                print(f"OK embed {stem} from {batch.name}")
    for w in sorted(TMP.glob("mcp-*.json")):
        persist_wrapper(w)
        print(f"OK wrapper {w.name}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
