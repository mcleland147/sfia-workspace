#!/usr/bin/env python3
"""Merge {meta,nodes}+nodes part files into scripts/embed/<stem>.json."""
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
EMBED = ROOT / "scripts" / "embed"


def main() -> int:
    if len(sys.argv) != 3:
        print("usage: merge_split_extract.py <stem> <part1-json-path>", file=sys.stderr)
        return 2
    stem, p1_path = sys.argv[1], Path(sys.argv[2])
    p2_path = p1_path.with_name(p1_path.stem.replace(".p1", ".p2") + p1_path.suffix)
    if not p2_path.is_file():
        p2_path = p1_path.parent / p1_path.name.replace(".p1.", ".p2.")
    p1 = json.loads(p1_path.read_text(encoding="utf-8"))
    p2 = json.loads(p2_path.read_text(encoding="utf-8"))
    if "meta" in p1:
        payload = {**p1["meta"], "nodes": p1.get("nodes", []) + p2.get("nodes", [])}
    else:
        payload = {**p1, "nodes": p1.get("nodes", []) + p2.get("nodes", [])}
    payload["nodeCount"] = len(payload["nodes"])
    out = EMBED / f"{stem}.json"
    out.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"wrote {out.name} nodes={payload['nodeCount']}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
