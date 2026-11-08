#!/usr/bin/env python3
"""Run Figma flat-extract families via use_figma MCP and persist to scripts/embed/.

Requires Cursor agent context: invoked by agent after MCP payloads are written to
scripts/tmp/incoming/<stem>.json (payload or {family,chunks} or split p1/p2).
"""
from __future__ import annotations

import json
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TMP = ROOT / "scripts" / "tmp"
INCOMING = TMP / "incoming"
EMBED = ROOT / "scripts" / "embed"


def run(cmd: list[str], *, stdin: str | None = None) -> None:
    subprocess.run(cmd, input=stdin, text=True, check=True)


def ingest_file(path: Path, stem: str) -> None:
    data = json.loads(path.read_text(encoding="utf-8"))
    if "chunks" in data:
        run([sys.executable, str(ROOT / "scripts" / "persist_mcp_chunk.py")], stdin=json.dumps(data))
        return
    if data.get("split") and data.get("part") == 1:
        (TMP / f"{stem}.p1.json").write_text(json.dumps(data, ensure_ascii=False) + "\n", encoding="utf-8")
        print(f"staged {stem}.p1.json")
        return
    if data.get("split") and data.get("part") == 2:
        (TMP / f"{stem}.p2.json").write_text(json.dumps(data, ensure_ascii=False) + "\n", encoding="utf-8")
        print(f"staged {stem}.p2.json")
        return
    if isinstance(data, dict) and all(isinstance(v, dict) and "nodes" in v for v in data.values()):
        run([sys.executable, str(ROOT / "scripts" / "persist_figma_dict.py"), str(path)])
        return
    run(
        [sys.executable, str(ROOT / "scripts" / "save_mcp_embed.py"), stem],
        stdin=json.dumps(data),
    )


def merge_splits() -> None:
    for p1 in TMP.glob("*.p1.json"):
        stem = p1.stem.replace(".p1", "")
        p2 = TMP / f"{stem}.p2.json"
        if not p2.is_file():
            print("SKIP merge missing p2", stem)
            continue
        run(
            [sys.executable, str(ROOT / "scripts" / "merge_split_extract.py"), stem, str(p1)],
        )


def main() -> int:
    INCOMING.mkdir(parents=True, exist_ok=True)
    for path in sorted(INCOMING.glob("*.json")):
        stem = path.stem
        ingest_file(path, stem)
        print(f"OK ingest {path.name}")
    run([sys.executable, str(ROOT / "scripts" / "ingest_tmp_chunks.py")])
    merge_splits()
    print("embed:", sorted(p.name for p in EMBED.glob("*.json")))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
