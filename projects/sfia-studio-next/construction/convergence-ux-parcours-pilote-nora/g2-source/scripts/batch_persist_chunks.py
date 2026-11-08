#!/usr/bin/env python3
"""Join scripts/tmp/<family>.c0.txt + .c1.txt -> embed via persist_mcp_chunk."""
from __future__ import annotations

import json
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TMP = ROOT / "scripts" / "tmp"


def persist(family: str) -> None:
    parts = sorted(TMP.glob(f"{family}.c*.txt"), key=lambda p: int(p.stem.rsplit(".c", 1)[-1]))
    if len(parts) < 1:
        print(f"SKIP {family} missing chunks")
        return
    if len(parts) == 1:
        print(f"WARN {family} only one chunk file (may be incomplete)")
    payload = {"family": family, "chunks": [p.read_text(encoding="utf-8") for p in parts]}
    subprocess.run(
        [sys.executable, str(ROOT / "scripts" / "persist_mcp_chunk.py")],
        input=json.dumps(payload),
        text=True,
        check=True,
    )


def main() -> int:
    for fam in sys.argv[1:] or [
        "nora.workzone.03",
        "document.workspace.04",
        "journal.surface.05",
    ]:
        persist(fam)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
