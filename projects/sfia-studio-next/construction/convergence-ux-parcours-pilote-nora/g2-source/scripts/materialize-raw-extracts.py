#!/usr/bin/env python3
"""Wrap Figma MCP payload JSON into manifests/raw/*.json with schema envelope."""
from __future__ import annotations

import json
import sys
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
RAW = ROOT / "manifests" / "raw"
STAGING = RAW / "_staging"
GIT_SHA = "f0d59bc8f72ed8544ac4c82dfa9ac0f23889c03e"
FIGMA_FILE = "itgvCulInEnFY6DvgIegvP"
PAGE = "94:49"


def envelope(family: str, payload: dict, *, frame_id: str | None = None, board: bool = False) -> dict:
    base = {
        "schema": "sfia-next-g2-raw-extract/v1",
        "family": family,
        "figmaFileKey": FIGMA_FILE,
        "pageId": PAGE,
        "gitSourceSha": GIT_SHA,
        "extractedAtUtc": payload.get("extractedAtUtc") or datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "rootId": payload.get("rootId"),
        "rootName": payload.get("rootName"),
        "geometry": {"w": payload.get("w"), "h": payload.get("h")},
        "nodeCount": payload.get("nodeCount", len(payload.get("nodes", []))),
        "truncated": payload.get("truncated", False),
        "nodes": payload.get("nodes", []),
    }
    if frame_id:
        base["frameId"] = frame_id
    if board:
        base["boardGeometry"] = {"w": 390, "h": 1350, "note": "BOARD planche; no native Figma 320"}
    return base


def write_json(path: Path, data: dict) -> None:
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def main() -> int:
    if not STAGING.is_dir():
        print(f"FAIL missing staging dir {STAGING}", file=sys.stderr)
        return 1

    mapping = [
        ("shell.rail.personnel.json", "shell.rail.personnel", "shell.rail.personnel.json"),
        ("shell.rail.conversation.json", "shell.rail.conversation", "shell.rail.conversation.json"),
        ("shell.rail.projet.json", "shell.rail.projet", "shell.rail.projet.json"),
        ("shell.rail.inspection.json", "shell.rail.inspection", "shell.rail.inspection.json"),
        ("portfolio.content.json", "portfolio.content", "portfolio.content.json"),
        ("nora.workzone.03.json", "nora.workzone.03", "nora.workzone.03.json"),
        ("document.workspace.04.json", "document.workspace.04", "document.workspace.04.json"),
        ("journal.surface.05.json", "journal.surface.05", "journal.surface.05.json"),
        ("mobile.216.json", "mobile.216", "mobile.216.json"),
        ("mobile.217.json", "mobile.217", "mobile.217.json"),
        ("portfolio.empty.64.json", "portfolio.empty.64", "portfolio.empty.64.json"),
        ("portfolio.list.65.json", "portfolio.list.65", "portfolio.list.65.json"),
    ]

    frame_ids = {
        "shell.rail.personnel": "94:50",
        "shell.rail.conversation": "94:214",
        "shell.rail.projet": "160:175",
        "shell.rail.inspection": "94:370",
    }

    for out_name, family, staging_name in mapping:
        src = STAGING / staging_name
        if not src.is_file():
            print(f"FAIL missing staging {staging_name}", file=sys.stderr)
            return 1
        payload = json.loads(src.read_text(encoding="utf-8"))
        doc = envelope(
            family,
            payload,
            frame_id=frame_ids.get(family),
            board=family.startswith("mobile."),
        )
        write_json(RAW / out_name, doc)
        print(f"OK {out_name} nodes={doc['nodeCount']}")

    for special in ("deltas-nora-206-208.json", "negatives-28-32-33-41.json"):
        src = STAGING / special
        if not src.is_file():
            print(f"FAIL missing staging {special}", file=sys.stderr)
            return 1
        data = json.loads(src.read_text(encoding="utf-8"))
        data.setdefault("schema", "sfia-next-g2-raw-extract/v1")
        data.setdefault("figmaFileKey", FIGMA_FILE)
        data.setdefault("pageId", PAGE)
        data.setdefault("gitSourceSha", GIT_SHA)
        write_json(RAW / special, data)
        print(f"OK {special}")

    meta = {
        "schema": "sfia-next-g2-raw-extract/v1",
        "figmaFileKey": FIGMA_FILE,
        "pageId": PAGE,
        "gitSourceSha": GIT_SHA,
        "extractedAtUtc": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "families": [m[1] for m in mapping] + ["deltas-nora-206-208", "negatives-28-32-33-41"],
        "note": "Native use_figma flat L2 extracts; PNG digests unchanged",
    }
    write_json(RAW / "_meta.json", meta)
    write_json(RAW / "_init.json", {"pending": False, "materialized": True})
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
