#!/usr/bin/env python3
"""Save MCP JSON file to scripts/embed (payload or {family,chunks} wrapper)."""
from __future__ import annotations

import json
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent


def main() -> int:
    if len(sys.argv) != 2:
        print("usage: save_mcp_from_file.py <json-file>", file=sys.stderr)
        return 2
    path = Path(sys.argv[1])
    data = json.loads(path.read_text(encoding="utf-8"))
    if "chunks" in data:
        subprocess.run(
            [sys.executable, str(ROOT / "scripts" / "persist_mcp_chunk.py")],
            input=json.dumps(data),
            text=True,
            check=True,
        )
        return 0
    stem = path.stem.replace("direct.", "")
    subprocess.run(
        [sys.executable, str(ROOT / "scripts" / "save_mcp_embed.py"), stem],
        input=json.dumps(data),
        text=True,
        check=True,
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
