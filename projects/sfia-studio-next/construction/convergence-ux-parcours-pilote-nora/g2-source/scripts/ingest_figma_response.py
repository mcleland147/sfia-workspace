#!/usr/bin/env python3
"""Persist use_figma flat-extract return value into scripts/embed/."""
from __future__ import annotations

import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
EMBED = ROOT / "scripts" / "embed"
TMP = ROOT / "scripts" / "tmp"


def write_embed(stem: str, payload: dict) -> None:
    EMBED.mkdir(parents=True, exist_ok=True)
    if "nodeCount" not in payload and "nodes" in payload:
        payload["nodeCount"] = len(payload["nodes"])
    out = EMBED / f"{stem}.json"
    out.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"wrote embed/{stem}.json nodes={len(payload.get('nodes', []))}")


def main() -> int:
    data = json.loads(Path(sys.argv[1]).read_text(encoding="utf-8"))
    stem = sys.argv[2] if len(sys.argv) > 2 else data.get("family", "unknown")

    if isinstance(data.get("chunks"), list) and "len" in data:
        payload = json.loads("".join(data["chunks"]))
        write_embed(stem, payload)
        return 0

    if data.get("split") and data.get("part") == 1:
        TMP.mkdir(parents=True, exist_ok=True)
        p1 = TMP / f"{stem}.p1.json"
        p1.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        print(f"wrote tmp/{stem}.p1.json nodes={len(data.get('nodes', []))} (await p2)")
        return 0

    if data.get("split") and data.get("part") == 2:
        p1 = TMP / f"{stem}.p1.json"
        if not p1.is_file():
            print(f"FAIL missing {p1}", file=sys.stderr)
            return 1
        meta = json.loads(p1.read_text(encoding="utf-8"))
        merged = {**meta.get("meta", meta), "nodes": meta.get("nodes", []) + data.get("nodes", [])}
        merged["nodeCount"] = len(merged["nodes"])
        write_embed(stem, merged)
        return 0

    if "nodes" in data:
        write_embed(stem, data)
        return 0

    print("FAIL unrecognized payload keys", list(data.keys()), file=sys.stderr)
    return 1


if __name__ == "__main__":
    raise SystemExit(main())
