#!/usr/bin/env python3
"""build-b3-native-raw.py — write B3 raw JSON from Figma probe payloads."""
from __future__ import annotations

import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TMP = Path(__file__).resolve().parent / "tmp"
RAW = ROOT / "manifests" / "raw"


def pick_state_changing(probe: dict) -> list[dict]:
    """Nodes whose ch differs from generic chrome (status/activity headline)."""
    out = []
    for n in probe.get("discriminativeNodes", []):
        ch = n.get("ch") or ""
        if any(
            k in ch
            for k in (
                "✦",
                "En cours",
                "Consultation",
                "Traitement",
                "confirmée",
                "détail",
                "Analyse",
            )
        ):
            out.append({k: n[k] for k in n if k != "typoQualification"})
    vis = probe.get("visibilityProbes") or []
    for v in vis:
        if "COMPOSITION UNIQUE" in (v.get("n") or "") or "Suivi de travail" in (v.get("n") or ""):
            out.append(
                {
                    "id": v["id"],
                    "n": v["n"],
                    "t": v["t"],
                    "l2Kind": "visibility",
                    "visible": v.get("visible"),
                    "parentLocal": v.get("parentLocal"),
                    "frameRelative": v.get("frameRelative"),
                }
            )
    return out


def build_deltas(delta_probe: dict) -> dict:
    probes = {p["screen"]: p for p in delta_probe["probes"]}
    b03 = probes["03"]
    micro = []
    for screen in ("206", "207", "208"):
        p = probes[screen]
        vis_comp_03 = next(
            (v for v in b03["visibilityProbes"] if "COMPOSITION UNIQUE" in v.get("n", "")),
            None,
        )
        vis_comp_x = next(
            (v for v in p["visibilityProbes"] if "COMPOSITION UNIQUE" in v.get("n", "")),
            None,
        )
        vis_suivi = next(
            (v for v in p["visibilityProbes"] if "Suivi de travail" in v.get("n", "")),
            None,
        )
        micro.append(
            {
                "screen": screen,
                "frameId": p["frameId"],
                "frameTitle": p["frameName"],
                "workzoneId": p["rootId"],
                "rootFrameRelative": p.get("rootFrameRelative"),
                "textCount": p["textCount"],
                "textCountVs03": p["textCount"] - b03["textCount"],
                "contentState": "DISCRIMINATIVE_NATIVE_L2",
                "shellAssessment": "ISOMORPHIC_SHELL — rail 240 + workzone 1440×970",
                "visibilityDelta": {
                    "messageNoraComposition03": vis_comp_03,
                    "messageNoraCompositionMicro": vis_comp_x,
                    "suiviTravailNoraMicro": vis_suivi,
                },
                "changingNodes": pick_state_changing(p),
            }
        )
    return {
        "schema": "sfia-next-g2-raw-extract/v2",
        "family": "deltas-nora-206-208",
        "extractedAtUtc": delta_probe["extractedAtUtc"],
        "figmaSessionNote": "Figma use_figma native L2 probe",
        "baseline03WorkzoneId": "94:249",
        "referenceFrame03": "94:214",
        "baseline03": {
            "screen": "03",
            "frameId": b03["frameId"],
            "frameTitle": b03["frameName"],
            "textCount": b03["textCount"],
            "rootFrameRelative": b03.get("rootFrameRelative"),
            "composerChrome": {
                "placeholder": next(
                    (n for n in b03["discriminativeNodes"] if "Écrire à Nora" in (n.get("ch") or "")),
                    None,
                ),
                "messageNoraVisible": True,
            },
        },
        "shellAssessment": "EQUIVALENT_SHELL — F1 rail 240px + workzone 1440px matches screen 03",
        "contentStateAssessment": "DISCRIMINATIVE — 206–208 hide full Nora composition; show Suivi de travail with distinct status copy (native ff/fs/f + geometry)",
        "microStates": micro,
        "figmaFileKey": delta_probe["figmaFileKey"],
        "pageId": delta_probe["pageId"],
        "gitSourceSha": delta_probe["gitSourceSha"],
    }


def headline_nodes(screen: dict) -> list[dict]:
    samples = screen.get("headlineSamples") or []
    keys = ("Titre / statut", "Titre / principal", "Titre / description")
    out = []
    for n in samples:
        if any(k in (n.get("n") or "") for k in keys):
            out.append({k: n[k] for k in n if k != "typoQualification"})
    return out


def build_negatives(neg_probe: dict) -> dict:
    screens = []
    for s in neg_probe["screens"]:
        heads = headline_nodes(s)
        status = "NATIVE_DISCRIMINATIVE" if heads else "UNRESOLVED"
        screens.append(
            {
                "screen": s["screen"],
                "frameId": s["frameId"],
                "name": s["frameName"],
                "status": status,
                "textCount": s["textCount"],
                "geometry": s.get("geometry"),
                "changingNodes": heads,
                "navigationAccentSample": next(
                    (n for n in (s.get("headlineSamples") or []) if "Navigation / libellé" in (n.get("n") or "") and n.get("f") == "#f5f5fc"),
                    None,
                ),
            }
        )
    all_native = all(x["status"] == "NATIVE_DISCRIMINATIVE" for x in screens)
    return {
        "schema": "sfia-next-g2-raw-extract/v2",
        "family": "negatives-28-32-33-41",
        "extractedAtUtc": neg_probe["extractedAtUtc"],
        "status": "NATIVE_DISCRIMINATIVE" if all_native else "PARTIAL_UNRESOLVED",
        "futureGate": "G5",
        "note": "Pilotage négative variants — shell isomorphic projet rail (246px class); behavioral copy + nav accent differ (native L2). G5 for runtime behavior.",
        "screens": screens,
        "figmaFileKey": neg_probe["figmaFileKey"],
        "pageId": neg_probe["pageId"],
        "gitSourceSha": neg_probe["gitSourceSha"],
    }


def main() -> int:
    dpath = TMP / "b3-probe-deltas.json"
    npath = TMP / "b3-probe-negatives.json"
    if len(sys.argv) >= 3:
        dpath, npath = Path(sys.argv[1]), Path(sys.argv[2])
    deltas = build_deltas(json.loads(dpath.read_text(encoding="utf-8")))
    negs = build_negatives(json.loads(npath.read_text(encoding="utf-8")))
    (RAW / "deltas-nora-206-208.json").write_text(
        json.dumps(deltas, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    (RAW / "negatives-28-32-33-41.json").write_text(
        json.dumps(negs, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    print("OK", RAW / "deltas-nora-206-208.json")
    print("OK", RAW / "negatives-28-32-33-41.json")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
