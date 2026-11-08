#!/usr/bin/env python3
"""Write a dict of family->extract payloads to embed/ (argv[1] path or stdin JSON)."""
from __future__ import annotations

import json
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SAVE = ROOT / "scripts" / "save_mcp_embed.py"


def main() -> int:
    if len(sys.argv) > 1:
        data = json.loads(Path(sys.argv[1]).read_text(encoding="utf-8"))
    else:
        data = json.load(sys.stdin)
    for stem, doc in data.items():
        if not isinstance(doc, dict) or "nodes" not in doc:
            continue
        subprocess.run(
            [sys.executable, str(SAVE), stem],
            input=json.dumps(doc, ensure_ascii=False),
            text=True,
            check=True,
        )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
