#!/usr/bin/env python3
"""Materialize manifests/raw specials from scripts/tmp staging blobs."""
from __future__ import annotations

import json
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
RAW = ROOT / "manifests" / "raw"
TMP = ROOT / "scripts" / "tmp"
GIT_SHA = "f0d59bc8f72ed8544ac4c82dfa9ac0f23889c03e"
FIGMA_FILE = "itgvCulInEnFY6DvgIegvP"
PAGE = "94:49"


def wrap_special(name: str, body: dict) -> dict:
    body.setdefault("schema", "sfia-next-g2-raw-extract/v1")
    body.setdefault("family", name.replace(".json", ""))
    body.setdefault("figmaFileKey", FIGMA_FILE)
    body.setdefault("pageId", PAGE)
    body.setdefault("gitSourceSha", GIT_SHA)
    body.setdefault(
        "extractedAtUtc", datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
    )
    return body


def main() -> int:
    for fname in ("deltas-nora-206-208.json", "negatives-28-32-33-41.json"):
        src = TMP / fname
        if not src.is_file():
            print(f"SKIP {src}")
            continue
        data = json.loads(src.read_text(encoding="utf-8"))
        doc = wrap_special(fname, data)
        (RAW / fname).write_text(json.dumps(doc, ensure_ascii=False, indent=2) + "\n")
        print(f"OK raw/{fname}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
