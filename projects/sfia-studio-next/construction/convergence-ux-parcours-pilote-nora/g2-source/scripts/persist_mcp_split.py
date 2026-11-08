#!/usr/bin/env python3
"""Persist MCP split part payload: python3 persist_mcp_split.py <mcp.json> <embed-stem>"""
from __future__ import annotations

import json
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ingest = ROOT / "scripts" / "ingest_figma_response.py"


def main() -> int:
    src = Path(sys.argv[1])
    stem = sys.argv[2]
    data = json.loads(src.read_text(encoding="utf-8"))
    if not data.get("split"):
        subprocess.run([sys.executable, str(ingest), str(src), stem], check=True)
        return 0
    tmp = ROOT / "scripts" / "tmp" / f"{stem}.p{data['part']}.json"
    tmp.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    subprocess.run([sys.executable, str(ingest), str(tmp), stem], check=True)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
