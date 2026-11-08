#!/usr/bin/env python3
"""Emit manifests/raw/*.json from embedded Figma MCP payloads (2026-11-07 extract)."""
from __future__ import annotations

import json
import sys
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
RAW = ROOT / "manifests" / "raw"
EMBED = Path(__file__).resolve().parent / "embed"
GIT_SHA = "f0d59bc8f72ed8544ac4c82dfa9ac0f23889c03e"
FIGMA_FILE = "itgvCulInEnFY6DvgIegvP"
PAGE = "94:49"


def load_payload(stem: str) -> dict:
    path = EMBED / f"{stem}.json"
    if not path.is_file():
        raise FileNotFoundError(path)
    return json.loads(path.read_text(encoding="utf-8"))


def envelope(family: str, payload: dict, *, frame_id: str | None = None, board: bool = False) -> dict:
    return {
        "schema": "sfia-next-g2-raw-extract/v1",
        "family": family,
        "figmaFileKey": FIGMA_FILE,
        "pageId": PAGE,
        "gitSourceSha": GIT_SHA,
        "extractedAtUtc": payload.get("extractedAtUtc")
        or datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "rootId": payload.get("rootId"),
        "rootName": payload.get("rootName"),
        "geometry": {"w": payload.get("w"), "h": payload.get("h")},
        "nodeCount": payload.get("nodeCount", len(payload.get("nodes", []))),
        "truncated": payload.get("truncated", False),
        "nodes": payload.get("nodes", []),
        **({"frameId": frame_id} if frame_id else {}),
        **(
            {"boardGeometry": {"w": 390, "h": 1350, "note": "BOARD planche; no native Figma 320"}}
            if board
            else {}
        ),
    }


def main() -> int:
    EMBED.mkdir(parents=True, exist_ok=True)
    mapping = [
        ("shell.rail.personnel", "shell.rail.personnel", "94:50", False),
        ("shell.rail.conversation", "shell.rail.conversation", "94:214", False),
        ("shell.rail.projet", "shell.rail.projet", "160:175", False),
        ("shell.rail.inspection", "shell.rail.inspection", "94:370", False),
        ("portfolio.content", "portfolio.content", None, False),
        ("nora.workzone.03", "nora.workzone.03", None, False),
        ("document.workspace.04", "document.workspace.04", None, False),
        ("journal.surface.05", "journal.surface.05", None, False),
        ("mobile.216", "mobile.216", None, True),
        ("mobile.217", "mobile.217", None, True),
        ("portfolio.empty.64", "portfolio.empty.64", None, False),
        ("portfolio.list.65", "portfolio.list.65", None, False),
    ]
    for out_name, embed_name, frame_id, board in mapping:
        out_path = RAW / f"{out_name}.json"
        if out_path.is_file():
            try:
                existing = json.loads(out_path.read_text(encoding="utf-8"))
                if str(existing.get("schema", "")).endswith("/v2"):
                    print(f"KEEP v2 {out_name}.json nodes={existing.get('nodeCount')}")
                    continue
            except json.JSONDecodeError:
                pass
        try:
            payload = load_payload(embed_name)
        except FileNotFoundError:
            print(f"SKIP missing embed {embed_name}", file=sys.stderr)
            continue
        doc = envelope(embed_name, payload, frame_id=frame_id, board=board)
        (RAW / f"{out_name}.json").write_text(
            json.dumps(doc, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
        )
        print(f"OK {out_name}.json nodes={doc['nodeCount']}")

    for special in ("deltas-nora-206-208.json", "negatives-28-32-33-41.json"):
        src = RAW / "_staging" / special
        if src.is_file():
            data = json.loads(src.read_text(encoding="utf-8"))
            data.setdefault("schema", "sfia-next-g2-raw-extract/v1")
            data.setdefault("figmaFileKey", FIGMA_FILE)
            data.setdefault("pageId", PAGE)
            data.setdefault("gitSourceSha", GIT_SHA)
            (RAW / special).write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
            print(f"OK {special}")

    meta = {
        "schema": "sfia-next-g2-raw-extract/v1",
        "figmaFileKey": FIGMA_FILE,
        "pageId": PAGE,
        "gitSourceSha": GIT_SHA,
        "extractedAtUtc": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "families": [m[0] for m in mapping] + ["deltas-nora-206-208", "negatives-28-32-33-41"],
        "note": "Native use_figma flat L2 extracts; PNG digests unchanged",
    }
    (RAW / "_meta.json").write_text(json.dumps(meta, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    (RAW / "_init.json").write_text(json.dumps({"pending": False, "materialized": True}, indent=2) + "\n")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
