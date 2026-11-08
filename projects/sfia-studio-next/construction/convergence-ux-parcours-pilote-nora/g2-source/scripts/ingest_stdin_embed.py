#!/usr/bin/env python3
"""stdin JSON -> scripts/embed/<stem>.json (payload or {family,chunks} wrapper)."""
from __future__ import annotations

import json
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent


def main() -> int:
    if len(sys.argv) < 2:
        print("usage: ingest_stdin_embed.py <stem>", file=sys.stderr)
        return 2
    stem = sys.argv[1]
    data = json.load(sys.stdin)
    if "chunks" in data and "len" in data:
        subprocess.run(
            [sys.executable, str(ROOT / "scripts" / "persist_mcp_chunk.py")],
            input=json.dumps({**data, "family": data.get("family", stem)}),
            text=True,
            check=True,
        )
        return 0
    subprocess.run(
        [sys.executable, str(ROOT / "scripts" / "save_mcp_embed.py"), stem],
        input=json.dumps(data),
        text=True,
        check=True,
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
