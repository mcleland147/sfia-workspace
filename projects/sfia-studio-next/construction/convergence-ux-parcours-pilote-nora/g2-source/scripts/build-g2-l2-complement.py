#!/usr/bin/env python3
"""Build G2 L2 complement manifests from raw extracts + indexes (no PNG mutation)."""
from __future__ import annotations

import hashlib
import json
import subprocess
import sys
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
RAW = ROOT / "manifests" / "raw"
MAN = ROOT / "manifests"
GIT_SHA = "f0d59bc8f72ed8544ac4c82dfa9ac0f23889c03e"


def sha256_file(p: Path) -> str:
    h = hashlib.sha256()
    with p.open("rb") as f:
        for chunk in iter(lambda: f.read(1 << 20), b""):
            h.update(chunk)
    return h.hexdigest()


def write_sha256_sidecar(json_path: Path) -> None:
    digest = sha256_file(json_path)
    json_path.with_suffix(json_path.suffix + ".sha256").write_text(f"{digest}  {json_path.name}\n")


def load_raw(family_file: str) -> dict | None:
    p = RAW / family_file
    if not p.is_file():
        return None
    return json.loads(p.read_text(encoding="utf-8"))


def descendant_ids(raw: dict) -> list[str]:
    return [n["id"] for n in raw.get("nodes", []) if n.get("id")]


def build_component_nodes(raw_map: dict[str, dict]) -> dict:
    reg: dict[str, dict] = {}

    rail_specs = [
        ("shell.rail.personnel", "94:51", "94:50", ["CU-09", "CU-15"], ["UXC-13"], "personnel"),
        ("shell.rail.conversation", "94:215", "94:214", ["CU-09", "CU-15"], ["UXC-13"], "conversation"),
        ("shell.rail.projet", "160:176", "160:175", ["CU-09", "CU-15"], ["UXC-13"], "projet"),
        ("shell.rail.inspection", "94:372", "94:370", ["CU-09", "CU-15"], ["UXC-13"], "inspection"),
    ]
    for cid, node, frame, cu, uxc, variant in rail_specs:
        raw = raw_map.get(f"{cid}.json")
        desc = descendant_ids(raw) if raw else []
        reg[cid] = {
            "componentId": cid,
            "owner": "shell.F1",
            "variant": variant,
            "states": ["default"],
            "route": f"fixture://rail/{variant}",
            "canonicalNodeId": node,
            "frameId": frame,
            "descendantIds": desc,
            "descendantCount": len(desc),
            "cu": cu,
            "uxc": uxc,
            "pngRef": frame,
            "rawRef": f"manifests/raw/{cid}.json",
            "status": "COMPLETE_FOR_COMPONENT" if len(desc) > 1 else "PARTIAL",
        }

    families = [
        ("portfolio.content", "94:84", "94:50", ["CU-02"], ["UXC-02"], "PNG_SOURCE_VERIFIED", "94:50"),
        ("nora.workzone.03", "94:249", "94:214", ["CU-04", "CU-05", "CU-06"], ["UXC-03", "UXC-04", "UXC-05"], "COMPLETE_FOR_COMPONENT", "94:214"),
        ("document.workspace.04", "94:419", "94:370", ["CU-07", "CU-14"], ["UXC-06"], "COMPLETE_FOR_COMPONENT", "94:370"),
        ("journal.surface.05", "94:558", "94:515", ["CU-08"], ["UXC-07"], "COMPLETE_FOR_COMPONENT", "94:515"),
        ("mobile.216", "282:468", "282:468", ["CU-15", "CU-16"], ["UXC-13", "UXC-14"], "COMPLETE_FOR_COMPONENT", "282:468"),
        ("mobile.217", "282:492", "282:492", ["CU-14", "CU-15", "CU-16"], ["UXC-11", "UXC-13", "UXC-14"], "COMPLETE_FOR_COMPONENT", "282:492"),
        ("portfolio.empty.64", "158:300", "158:264", ["CU-02", "CU-03"], ["UXC-02", "UXC-11"], "COMPLETE_FOR_COMPONENT", "158:264"),
        ("portfolio.list.65", "158:372", "158:336", ["CU-02", "CU-03"], ["UXC-02", "UXC-12"], "COMPLETE_FOR_COMPONENT", "158:336"),
    ]
    for cid, node, frame, cu, uxc, status, png in families:
        raw = raw_map.get(f"{cid}.json")
        desc = descendant_ids(raw) if raw else []
        reg[cid] = {
            "componentId": cid,
            "owner": cid.split(".")[0],
            "states": ["default"],
            "route": f"fixture://{cid}",
            "canonicalNodeId": node,
            "frameId": frame,
            "descendantIds": desc,
            "descendantCount": len(desc),
            "cu": cu,
            "uxc": uxc,
            "pngRef": png,
            "rawRef": f"manifests/raw/{cid}.json",
            "status": status if len(desc) > 1 else "PARTIAL",
        }

    reg["micro.206-208"] = {
        "componentId": "micro.206-208",
        "owner": "nora.activity",
        "states": ["206-engaged", "207-source", "208-no-detail"],
        "route": "fixture://nora/micro-states",
        "canonicalNodeId": "281:389",
        "descendantIds": [],
        "descendantCount": 0,
        "cu": ["CU-05", "CU-06"],
        "uxc": ["UXC-04", "UXC-05"],
        "pngRef": None,
        "rawRef": "manifests/raw/deltas-nora-206-208.json",
        "status": "EQUIVALENT_DOCUMENTED",
        "notes": "Shell isomorphic to 03; content-state PARTIAL vs composite headline parity",
    }
    reg["negatives.pilotage"] = {
        "componentId": "negatives.pilotage",
        "owner": "pilotage",
        "states": ["28", "32", "33", "41"],
        "route": "fixture://pilotage/negative",
        "canonicalNodeId": "127:391",
        "descendantIds": [],
        "descendantCount": 0,
        "cu": ["CU-10", "CU-11", "CU-12", "CU-13"],
        "uxc": ["UXC-08", "UXC-09", "UXC-10"],
        "pngRef": None,
        "rawRef": "manifests/raw/negatives-28-32-33-41.json",
        "status": "EQUIVALENT_DOCUMENTED",
        "notes": "EQUIVALENT_SHELL; runtime G5; PNG via frames 22/24/40",
    }

    return {
        "schema": "sfia-next-g2-component-nodes/v1",
        "gitSourceSha": GIT_SHA,
        "extractedAtUtc": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "components": reg,
    }


def patch_l2_manifest(component_nodes: dict, raw_map: dict[str, dict]) -> dict:
    man = json.loads((MAN / "l2-manifest.json").read_text(encoding="utf-8"))
    man["extractedAtUtc"] = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
    man["gitSourceSha"] = GIT_SHA
    man["figmaVersion"] = "NOT AVAILABLE"
    man["status"] = "CANDIDATE_FOR_REVIEW"
    man["componentNodesRef"] = "manifests/component-nodes-l2.json"

    for rail in man.get("f1Rails", []):
        cid = rail["componentId"]
        cn = component_nodes["components"].get(cid, {})
        rail["status"] = cn.get("status", rail.get("status"))
        rail["descendantCount"] = cn.get("descendantCount", 0)
        rail["componentNodesRef"] = f"components.{cid}"
        raw = raw_map.get(f"{cid}.json")
        if raw:
            rail["rawExtractRef"] = f"manifests/raw/{cid}.json"
            rail["geometry"]["local"]["w"] = raw.get("geometry", {}).get("w", raw.get("w"))

    for fr in man.get("frames", []):
        fr["status"] = "PNG_SOURCE_VERIFIED"
        if fr.get("componentId", "").startswith("frame.216") or fr.get("frameId") in ("282:468", "282:492"):
            g = fr.get("geometry", {})
            g["w"], g["h"] = 390, 1350
            fr["geometry"] = g
            fr.setdefault("limits", [])
            note = "mobile board 390×1350 is planche size; runtime viewports 390×844 / 320×568 have no native Figma 320 frame"
            if note not in fr["limits"]:
                fr["limits"].append(note)

    components_summary = []
    for cid, cn in component_nodes["components"].items():
        components_summary.append(
            {
                "componentId": cid,
                "status": cn["status"],
                "canonicalNodeId": cn.get("canonicalNodeId"),
                "descendantCount": cn.get("descendantCount", 0),
                "rawRef": cn.get("rawRef"),
            }
        )
    man["components"] = components_summary
    return man


def main() -> int:
    emit = ROOT / "scripts" / "emit_raw_extracts.py"
    if emit.is_file():
        subprocess.run([sys.executable, str(emit)], check=False)

    raw_files = [
        "shell.rail.personnel.json",
        "shell.rail.conversation.json",
        "shell.rail.projet.json",
        "shell.rail.inspection.json",
        "portfolio.content.json",
        "nora.workzone.03.json",
        "document.workspace.04.json",
        "journal.surface.05.json",
        "mobile.216.json",
        "mobile.217.json",
        "portfolio.empty.64.json",
        "portfolio.list.65.json",
        "deltas-nora-206-208.json",
        "negatives-28-32-33-41.json",
    ]
    raw_map = {f: load_raw(f) for f in raw_files}
    missing = [f for f in raw_files if raw_map[f] is None]
    if missing:
        print("WARN missing raw:", ", ".join(missing), file=sys.stderr)

    cn = build_component_nodes({k: v for k, v in raw_map.items() if v})
    cn_path = MAN / "component-nodes-l2.json"
    cn_path.write_text(json.dumps(cn, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    write_sha256_sidecar(cn_path)
    print("OK component-nodes-l2.json")

    man = patch_l2_manifest(cn, {k: v for k, v in raw_map.items() if v})
    man_path = MAN / "l2-manifest.json"
    man_path.write_text(json.dumps(man, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    write_sha256_sidecar(man_path)
    print("OK l2-manifest.json")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
