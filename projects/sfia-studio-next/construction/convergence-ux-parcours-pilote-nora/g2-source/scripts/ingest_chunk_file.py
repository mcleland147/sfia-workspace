#!/usr/bin/env python3
"""Ingest MCP {family, chunks} or plain extract JSON file into scripts/embed/."""
from __future__ import annotations

import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
EMBED = ROOT / "scripts" / "embed"


def write_embed(stem: str, payload: dict) -> None:
    EMBED.mkdir(parents=True, exist_ok=True)
    payload.setdefault("nodeCount", len(payload.get("nodes", [])))
    out = EMBED / f"{stem}.json"
    out.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"wrote embed/{stem}.json nodes={len(payload.get('nodes', []))}")


def ingest(data: dict, default_stem: str | None) -> int:
    if isinstance(data.get("chunks"), list):
        try:
            payload = json.loads("".join(data["chunks"]))
        except json.JSONDecodeError as e:
            print(f"FAIL JSON join: {e}", file=sys.stderr)
            return 1
    else:
        payload = data

    if isinstance(payload, dict) and payload.get("rootId") and "nodes" in payload:
        stem = default_stem or data.get("family", "unknown")
        if stem.startswith("pair."):
            stem = default_stem or "unknown"
        write_embed(stem, payload)
        return 0

    if isinstance(payload, dict):
        wrote = 0
        for fam, p in payload.items():
            if isinstance(p, dict) and "nodes" in p:
                write_embed(fam, p)
                wrote += 1
        if wrote:
            return 0

    print("FAIL no embed payloads", file=sys.stderr)
    return 1


def main() -> int:
    path = Path(sys.argv[1])
    default_stem = sys.argv[2] if len(sys.argv) > 2 else None
    data = json.loads(path.read_text(encoding="utf-8"))
    return ingest(data, default_stem)


if __name__ == "__main__":
    raise SystemExit(main())
