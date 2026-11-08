#!/usr/bin/env python3
"""Save one MCP JSON payload: python3 save_mcp_cli.py <stem> '<json>'"""
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
EMBED = ROOT / "scripts" / "embed"


def main() -> int:
    if len(sys.argv) != 3:
        print("usage: save_mcp_cli.py <stem> <json-string>", file=sys.stderr)
        return 2
    stem, raw = sys.argv[1], sys.argv[2]
    payload = json.loads(raw)
    EMBED.mkdir(parents=True, exist_ok=True)
    out = EMBED / f"{stem}.json"
    out.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"wrote {out.name} nodes={len(payload.get('nodes', []))}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
