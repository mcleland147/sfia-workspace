#!/usr/bin/env python3
"""Ingest scripts/tmp/*.chunk.json into scripts/embed/<family>.json."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TMP = ROOT / "scripts" / "tmp"
EMBED = ROOT / "scripts" / "embed"


def main() -> int:
    EMBED.mkdir(parents=True, exist_ok=True)
    for path in sorted(TMP.glob("*.chunk.json")):
        data = json.loads(path.read_text(encoding="utf-8"))
        family = data.get("family") or path.stem.replace(".chunk", "")
        if "chunks" in data:
            payload = json.loads("".join(data["chunks"]))
        elif "part" in data and "meta" in data:
            continue
        else:
            payload = data
        stem = family
        out = EMBED / f"{stem}.json"
        out.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        print(f"OK {stem} nodes={len(payload.get('nodes', []))}")
    for p1 in sorted(TMP.glob("*.p1.json")):
        p2 = p1.with_name(p1.name.replace(".p1.", ".p2."))
        if not p2.is_file():
            continue
        a = json.loads(p1.read_text(encoding="utf-8"))
        b = json.loads(p2.read_text(encoding="utf-8"))
        meta = a.get("meta", a)
        nodes = a.get("nodes", []) + b.get("nodes", [])
        payload = {**meta, "nodes": nodes, "nodeCount": len(nodes)}
        stem = p1.stem.replace(".p1", "")
        out = EMBED / f"{stem}.json"
        out.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        print(f"OK {stem} nodes={len(nodes)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
