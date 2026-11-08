#!/usr/bin/env python3
"""Save multi-family MCP extract: batch dict or stdin JSON object."""
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


def ingest(data: dict) -> int:
    if isinstance(data.get("chunks"), list) and "len" in data:
        payload = json.loads("".join(data["chunks"]))
        data = payload

    if "batch" in data:
        data = data["batch"]

    if any(k.startswith("shell.") or k in data for k in ("nora.workzone.03", "mobile.216")):
        # map of family -> extract
        for fam, payload in data.items():
            if isinstance(payload, dict) and "nodes" in payload:
                write_embed(fam, payload)
        return 0

    # single-family payload
    fam = data.get("family") or (sys.argv[2] if len(sys.argv) > 2 else None)
    if fam and "nodes" in data:
        write_embed(fam.replace("batch.", ""), data)
        return 0

    print("FAIL unrecognized batch payload", list(data.keys())[:8], file=sys.stderr)
    return 1


def main() -> int:
    src = Path(sys.argv[1]) if len(sys.argv) > 1 else None
    if src and src.is_file():
        data = json.loads(src.read_text(encoding="utf-8"))
    else:
        data = json.load(sys.stdin)
    return ingest(data)


if __name__ == "__main__":
    raise SystemExit(main())
