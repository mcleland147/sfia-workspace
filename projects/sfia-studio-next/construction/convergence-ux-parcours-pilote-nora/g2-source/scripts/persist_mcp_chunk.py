#!/usr/bin/env python3
"""Join MCP {family, chunks} stdin payload into scripts/embed/<family>.json."""
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
data = json.load(sys.stdin)
family = data.get("family", "unknown")
if "chunks" in data:
    payload = json.loads("".join(data["chunks"]))
elif isinstance(data.get("payload"), dict):
    payload = data["payload"]
else:
    payload = {k: v for k, v in data.items() if k != "family" and isinstance(v, dict)}
    if payload.get("rootId") and "nodes" in payload:
        payload = payload
    elif len(payload) == 1 and "nodes" in next(iter(payload.values()), {}):
        pass
    elif "nodes" in data:
        payload = data
embed_dir = ROOT / "scripts" / "embed"
embed_dir.mkdir(parents=True, exist_ok=True)

def write_one(stem: str, doc: dict) -> None:
    out = embed_dir / f"{stem}.json"
    doc.setdefault("nodeCount", len(doc.get("nodes", [])))
    out.write_text(json.dumps(doc, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"wrote {out.name} nodes={len(doc.get('nodes', []))} nodeCount={doc.get('nodeCount')}")

if (
    isinstance(payload, dict)
    and payload.get("rootId")
    and "nodes" in payload
    and not any(k for k in payload if "." in k and isinstance(payload[k], dict))
):
    stem = family if not family.startswith("pair.") else family
    if family.startswith("pair."):
        stem = family
    write_one(stem.replace("pair.", ""), payload)
else:
    wrote = 0
    for fam, doc in payload.items():
        if isinstance(doc, dict) and "nodes" in doc:
            write_one(fam, doc)
            wrote += 1
    if not wrote:
        write_one(family, payload)
