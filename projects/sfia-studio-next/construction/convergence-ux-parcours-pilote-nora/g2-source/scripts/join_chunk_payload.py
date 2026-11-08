#!/usr/bin/env python3
import json
import sys
from pathlib import Path

src = Path(sys.argv[1])
out = Path(sys.argv[2])
data = json.loads(src.read_text(encoding="utf-8"))
if isinstance(data, dict) and "chunks" in data:
    payload = json.loads("".join(data["chunks"]))
elif isinstance(data, dict) and "nodes" in data:
    payload = data
else:
    raise SystemExit("unrecognized payload shape")
out.parent.mkdir(parents=True, exist_ok=True)
out.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print(f"wrote {out} nodes={payload.get('nodeCount', len(payload.get('nodes', [])))}")
