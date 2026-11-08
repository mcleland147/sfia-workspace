#!/usr/bin/env python3
"""Write scripts/embed/<name>.json from a raw flat-walk payload file or stdin."""
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
EMBED = ROOT / "scripts" / "embed"


def main() -> int:
    if len(sys.argv) != 2:
        print("usage: ingest_mcp_payload.py <embed-stem>", file=sys.stderr)
        return 2
    stem = sys.argv[1]
    payload = json.load(sys.stdin)
    EMBED.mkdir(parents=True, exist_ok=True)
    out = EMBED / f"{stem}.json"
    out.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    n = len(payload.get("nodes", []))
    print(f"wrote {out.name} nodes={n} nodeCount={payload.get('nodeCount')}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
