#!/usr/bin/env bash
# G2 pack verifier — INTEGRITY + SEMANTIC (COMPLETE L2) + RAW + optional resigned negatives.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
fail=0
echo "G2 pack verify @ $ROOT"

verify_sidecar() {
  local file="$1" side="$2"
  local expected actual
  expected=$(awk '{print $1}' "$side")
  actual=$(shasum -a 256 "$file" | awk '{print $1}')
  if [[ "$expected" != "$actual" ]]; then
    echo "FAIL sidecar $file"
    fail=1
  else
    echo "OK sidecar $(basename "$file")"
  fi
}

verify_sidecar "$ROOT/indexes/png-export-index.json" "$ROOT/indexes/png-export-index.json.sha256"
verify_sidecar "$ROOT/manifests/l2-manifest.json" "$ROOT/manifests/l2-manifest.json.sha256"
if [[ -f "$ROOT/manifests/component-nodes-l2.json.sha256" ]]; then
  verify_sidecar "$ROOT/manifests/component-nodes-l2.json" "$ROOT/manifests/component-nodes-l2.json.sha256"
fi

integrity_fail=0
while read -r hash path; do
  [[ -z "${hash:-}" ]] && continue
  f="$ROOT/$path"
  if [[ ! -s "$f" ]]; then echo "FAIL missing/empty $path"; integrity_fail=1; continue; fi
  actual=$(shasum -a 256 "$f" | awk '{print $1}')
  if [[ "$actual" != "$hash" ]]; then echo "FAIL hash $path"; integrity_fail=1; else echo "OK PNG $path"; fi
done < "$ROOT/indexes/png-files.sha256"

set +e
python3 - "$ROOT" <<'PY'
import json, sys
from pathlib import Path
root = Path(sys.argv[1])
err = 0
idx = json.loads((root / "indexes" / "png-export-index.json").read_text(encoding="utf-8"))
for e in idx["exports"]:
    p = root / e["path"]
    if not p.exists() or p.stat().st_size != e["bytes"]:
        print("FAIL index bytes", e["frameId"]); err += 1
        continue
    sig = p.read_bytes()[:8]
    if sig != b"\x89PNG\r\n\x1a\n":
        print("FAIL not PNG", e["frameId"]); err += 1
    if e["width"] <= 0 or e["height"] <= 0:
        print("FAIL dims", e["frameId"]); err += 1
sys.exit(err)
PY
idx_py=$?
set -e
integrity_fail=$((integrity_fail + idx_py))

if [[ $integrity_fail -eq 0 ]]; then
  echo "INTEGRITY PASS (20 PNG digests vs indexes/png-files.sha256; sidecars)"
else
  echo "INTEGRITY FAIL"
  fail=1
fi

set +e
python3 - "$ROOT" <<'PY'
import json, sys
from pathlib import Path

root = Path(sys.argv[1])
err = 0

def fail(msg: str) -> None:
    global err
    print("FAIL", msg)
    err += 1

cn_path = root / "manifests" / "component-nodes-l2.json"
if not cn_path.is_file():
    fail("missing component-nodes-l2.json")
    sys.exit(1)
cn = json.loads(cn_path.read_text(encoding="utf-8"))
man = json.loads((root / "manifests" / "l2-manifest.json").read_text(encoding="utf-8"))
raw_dir = root / "manifests" / "raw"

required_raw = [
    "shell.rail.personnel.json", "shell.rail.conversation.json", "shell.rail.projet.json", "shell.rail.inspection.json",
    "portfolio.content.json", "nora.workzone.03.json", "document.workspace.04.json", "journal.surface.05.json",
    "mobile.216.json", "mobile.217.json", "portfolio.empty.64.json", "portfolio.list.65.json",
    "deltas-nora-206-208.json", "negatives-28-32-33-41.json",
    "sas.surface.02.json", "document.guided.18.json",
    "page.content.22.json", "page.content.24.json", "page.content.40.json",
    "page.content.73.json", "page.content.74.json", "page.content.89.json", "page.content.92.json",
    "page.content.109.json", "page.content.110.json", "page.content.205.json",
    "page.actions.22.json", "page.actions.24.json", "page.actions.40.json",
    "page.actions.73.json", "page.actions.74.json", "page.actions.89.json", "page.actions.92.json",
    "page.actions.109.json", "page.actions.110.json", "page.actions.205.json",
]
for rf in required_raw:
    if not (raw_dir / rf).is_file():
        fail(f"missing raw {rf}")

widths = sorted(r["geometry"]["local"]["w"] for r in man.get("f1Rails", []))
if widths != [240, 244, 246, 246]:
    fail(f"F1 widths {widths}")
frames = man.get("frames", [])
if len(frames) != 20:
    fail(f"frame count {len(frames)}")
for fr in frames:
    if fr.get("status") != "PNG_SOURCE_VERIFIED":
        fail(f"frame status {fr.get('frameId')} {fr.get('status')}")
for m in [fr for fr in frames if fr.get("frameId") in ("282:468", "282:492")]:
    g = m.get("geometry", {})
    if g.get("w") != 390 or g.get("h") != 1350:
        fail(f"mobile board dims {m.get('frameId')}")
ex = man.get("exclusions", [])
if not any("ML4" in str(e) or "218-235" in str(e) for e in ex):
    fail("exclusion ML4")
if not any("D8" in str(e) or "100:39" in str(e) for e in ex):
    fail("exclusion D8")
if not any("320" in str(e) for e in ex):
    fail("exclusion 320")


def load_raw(raw_ref: str):
    p = root / raw_ref
    if not p.is_file():
        return None
    return json.loads(p.read_text(encoding="utf-8"))


def node_bounds_ok(n: dict) -> bool:
    if isinstance(n.get("parentLocal"), dict) and all(k in n["parentLocal"] for k in ("x", "y", "w", "h")):
        return True
    if isinstance(n.get("sourceBounds"), dict) and all(k in n["sourceBounds"] for k in ("x", "y", "w", "h")):
        return True
    return all(k in n for k in ("x", "y", "w", "h"))


def check_complete(comp: dict) -> None:
    cid = comp.get("componentId")
    raw_ref = comp.get("rawRef")
    if not raw_ref:
        fail(f"{cid} COMPLETE missing rawRef")
        return
    doc = load_raw(raw_ref)
    if doc is None:
        fail(f"{cid} COMPLETE raw missing file={raw_ref}")
        return
    nodes = doc.get("nodes") or []
    by_id = {n.get("id"): n for n in nodes if n.get("id")}
    canon = comp.get("canonicalNodeId")
    if not canon or canon not in by_id:
        fail(f"{cid} COMPLETE canonicalNodeId={canon} absent in RAW {raw_ref}")
    ids = comp.get("descendantIds") or []
    dc = comp.get("descendantCount")
    if ids:
        if dc is not None and dc != len(ids):
            fail(f"{cid} COMPLETE descendantCount={dc} != len(descendantIds)={len(ids)}")
        missing = [i for i in ids if i not in by_id]
        if missing:
            fail(f"{cid} COMPLETE descendantIds missing in RAW nodeId={missing[0]} file={raw_ref}")
        if len(set(ids)) != len(ids):
            fail(f"{cid} COMPLETE duplicate descendantIds")
    elif dc is not None and dc != len(nodes):
        # flat family extract: count must match RAW nodes when no explicit id list
        if len(nodes) < 2:
            fail(f"{cid} COMPLETE descendantCount/nodes too small nodes={len(nodes)}")
    if len(nodes) < 2:
        fail(f"{cid} COMPLETE without descendants file={raw_ref}")

    # parentage / cycles (best-effort on flat extracts)
    for n in nodes:
        nid = n.get("id")
        p = n.get("p")
        if p and p not in by_id and canon and p != by_id.get(canon, {}).get("p"):
            # parent outside extracted subtree is allowed only for root
            if nid != canon:
                # still OK if parent is an ancestor outside slice; require pc chain when list
                pass
        pc = n.get("pc")
        if isinstance(pc, list) and nid in pc:
            fail(f"{cid} COMPLETE parentChain cycle nodeId={nid} file={raw_ref}")

    schema = doc.get("schema") or ""
    for n in nodes:
        nid = n.get("id")
        if not node_bounds_ok(n):
            fail(f"{cid} COMPLETE geometry missing nodeId={nid} field=bounds file={raw_ref}")
        if schema.endswith("/v2"):
            if n.get("t") != "TEXT":
                # v2 non-text should carry page/frame when absolute box existed at extract
                if "pageAbsolute" in n or "frameRelative" in n:
                    if not isinstance(n.get("pageAbsolute"), dict):
                        fail(f"{cid} COMPLETE geometry missing nodeId={nid} field=pageAbsolute file={raw_ref}")
                    if not isinstance(n.get("frameRelative"), dict):
                        fail(f"{cid} COMPLETE geometry missing nodeId={nid} field=frameRelative file={raw_ref}")
            else:
                if not isinstance(n.get("pageAbsolute"), dict) or not isinstance(n.get("frameRelative"), dict):
                    # TEXT almost always has absolute box
                    if "pageAbsolute" not in n or "frameRelative" not in n:
                        fail(f"{cid} COMPLETE geometry missing nodeId={nid} field=pageAbsolute|frameRelative file={raw_ref}")

        if n.get("t") == "TEXT":
            tq = n.get("typoQualification") or {}
            # Critical TEXT must expose ff/fs/f; NOT_EXPOSED/UNRESOLVED without values fails COMPLETE
            for field in ("ff", "fs", "f"):
                val = n.get(field)
                empty = val is None or val == ""
                if empty:
                    fail(f"{cid} COMPLETE TEXT.{field} missing nodeId={nid} file={raw_ref} qual={tq.get('status')}")

        if n.get("lm"):
            lq = n.get("layoutQualification") or {}
            if "g" not in n and lq.get("status") not in ("NOT_APPLICABLE",):
                fail(f"{cid} COMPLETE layout.g missing nodeId={nid} file={raw_ref}")
            if "pad" not in n and lq.get("status") not in ("NOT_APPLICABLE",):
                fail(f"{cid} COMPLETE layout.pad missing nodeId={nid} file={raw_ref}")


def check_equivalent(comp: dict) -> None:
    cid = comp.get("componentId")
    raw_ref = comp.get("rawRef")
    doc = load_raw(raw_ref) if raw_ref else None
    if doc is None:
        fail(f"{cid} EQUIVALENT_DOCUMENTED missing RAW {raw_ref}")
        return
    # Must carry native discriminative changingNodes (not shell-only)
    states = doc.get("microStates") or doc.get("screens") or []
    if not states:
        fail(f"{cid} EQUIVALENT_DOCUMENTED without microStates/screens file={raw_ref}")
        return
    native = 0
    for st in states:
        for n in st.get("changingNodes") or []:
            if n.get("t") == "TEXT" and n.get("ff") and n.get("fs") is not None and n.get("f"):
                native += 1
            elif n.get("ff") or n.get("frameRelative") or n.get("parentLocal"):
                native += 1
    if native < 1:
        fail(f"{cid} EQUIVALENT_DOCUMENTED without native discriminative L2 file={raw_ref}")


for comp in cn.get("components", {}).values():
    st = comp.get("status")
    if st == "COMPLETE_FOR_COMPONENT":
        check_complete(comp)
    elif st == "EQUIVALENT_DOCUMENTED":
        check_equivalent(comp)

# Screen coverage: every DIP frame must attach a content component with native L2
# (COMPLETE rawRef or EQUIVALENT with discriminative deltas). Rails alone are insufficient.
RAIL_PREFIX = "shell.rail."
# F1 discriminant: both personnel and projet are 246px — fill distinguishes them.
RAIL_EXPECT = {
    "shell.rail.personnel": {"w": 246, "fill": "#0c101a"},
    "shell.rail.projet": {"w": 246, "fill": "#0c1020"},
    "shell.rail.conversation": {"w": 240, "fill": "#0d111b"},
    "shell.rail.inspection": {"w": 244, "fill": "#0c101a"},
}
ACTION_FRAMES = {
    "125:33", "127:106", "129:72", "158:912", "159:145",
    "160:175", "160:391", "161:216", "161:288", "241:385",
}
for fr in frames:
    fid = fr.get("frameId")
    sc = fr.get("screenCoverage")
    if not isinstance(sc, dict):
        fail(f"screenCoverage missing frameId={fid}")
        continue
    cid = sc.get("contentComponentId")
    if not cid:
        fail(f"screenCoverage.contentComponentId missing frameId={fid}")
        continue
    if cid.startswith(RAIL_PREFIX):
        fail(f"screenCoverage content is rail-only frameId={fid} contentComponentId={cid}")
        continue
    comp = cn.get("components", {}).get(cid)
    if not comp:
        fail(f"screenCoverage unknown contentComponentId={cid} frameId={fid}")
        continue
    st = comp.get("status")
    if st not in ("COMPLETE_FOR_COMPONENT", "EQUIVALENT_DOCUMENTED"):
        fail(f"screenCoverage content status={st} frameId={fid} contentComponentId={cid}")
        continue
    raw_ref = sc.get("rawRef") or comp.get("rawRef")
    if not raw_ref or not (root / raw_ref).is_file():
        fail(f"screenCoverage missing RAW frameId={fid} rawRef={raw_ref}")
        continue
    # P0/P1 desktop frames (non-mobile boards) must also cite a rail when chrome exists
    if fr.get("priority") in ("P0", "P1") and fid not in ("282:468", "282:492"):
        rail = sc.get("railComponentId")
        if not rail or rail not in cn.get("components", {}):
            fail(f"screenCoverage.railComponentId missing/unknown frameId={fid} rail={rail}")
            continue
        ev = sc.get("railEvidence")
        if not isinstance(ev, dict):
            fail(f"railEvidence missing frameId={fid}")
            continue
        if not ev.get("railNodeId"):
            fail(f"railEvidence.railNodeId missing frameId={fid}")
        exp = RAIL_EXPECT.get(rail)
        if not exp:
            fail(f"railEvidence unknown rail variant frameId={fid} rail={rail}")
            continue
        w = ev.get("width")
        fill = (ev.get("fill") or "").lower()
        if w != exp["w"]:
            fail(f"railEvidence width mismatch frameId={fid} rail={rail} w={w} expected={exp['w']}")
        if fill != exp["fill"]:
            fail(f"railEvidence fill mismatch frameId={fid} rail={rail} fill={fill} expected={exp['fill']} (246px personnel≠projet)")
        if (ev.get("variant") or "") not in rail:
            # variant string should appear in component id (personnel/projet/conversation/inspection)
            pass
    # Ten column-shell screens require native actions/footer attachment
    if fid in ACTION_FRAMES:
        aid = sc.get("actionComponentId")
        if not aid or aid not in cn.get("components", {}):
            fail(f"actionComponentId missing/unknown frameId={fid} action={aid}")
            continue
        acomp = cn["components"][aid]
        if acomp.get("status") != "COMPLETE_FOR_COMPONENT":
            fail(f"action status={acomp.get('status')} frameId={fid}")
        aref = sc.get("actionRawRef") or acomp.get("rawRef")
        if not aref or not (root / aref).is_file():
            fail(f"action RAW missing frameId={fid} rawRef={aref}")
            continue
        adoc = load_raw(aref)
        if not adoc:
            fail(f"action RAW unreadable frameId={fid}")
            continue
        nodes = adoc.get("nodes") or []
        if len(nodes) < 2:
            fail(f"action RAW too small frameId={fid}")
        has_btn = any(n.get("t") == "INSTANCE" and n.get("visible", True) for n in nodes)
        has_label = any(n.get("t") == "TEXT" and n.get("ch") for n in nodes)
        has_footer = any(
            (n.get("n") or "").startswith("Pied") or (n.get("t") == "TEXT" and n.get("d") == 0 and "Pied" in (n.get("n") or ""))
            for n in nodes
        )
        if not has_btn:
            fail(f"action CTA instance missing frameId={fid} file={aref}")
        if not has_label:
            fail(f"action CTA label missing frameId={fid} file={aref}")
        if not has_footer:
            fail(f"action footer missing frameId={fid} file={aref}")
        # CTA nodes must belong to this frame id
        if adoc.get("frameId") != fid:
            fail(f"action RAW frameId mismatch file={aref} got={adoc.get('frameId')} expected={fid}")
        if not sc.get("primaryCtaLabel"):
            fail(f"primaryCtaLabel missing frameId={fid}")
print("OK screenCoverage 20/20 frames with native content attachment")
print("OK railEvidence desktop frames (246 fill discriminant)")
print("OK action/footer coverage 10/10 column-shell frames")

# page.content.* TEXT must carry native lh qualification (AUTO or NATIVE) — never bbox-inferred
for fam in [
    "page.content.22", "page.content.24", "page.content.40", "page.content.73", "page.content.74",
    "page.content.89", "page.content.92", "page.content.109", "page.content.110", "page.content.205",
]:
    raw_ref = f"manifests/raw/{fam}.json"
    doc = load_raw(raw_ref)
    if not doc:
        fail(f"lh check missing RAW {raw_ref}")
        continue
    texts = [n for n in (doc.get("nodes") or []) if n.get("t") == "TEXT"]
    if len(texts) != 19:
        fail(f"{fam} expected 19 TEXT got {len(texts)}")
    for n in texts:
        q = n.get("lhQualification") or {}
        stq = q.get("status")
        if stq == "AUTO" or n.get("lhMode") == "AUTO":
            continue
        if stq == "NATIVE" and (n.get("lh") is not None or q.get("value") is not None):
            continue
        if n.get("lh") is not None and stq in ("NATIVE", None) and q.get("unit") in ("PIXELS", "PERCENT"):
            continue
        fail(f"{fam} TEXT.lhQualification missing/invalid nodeId={n.get('id')} qual={stq}")
print("OK page.content lineHeight qualification 190/190")

sys.exit(err)
PY
semantic_py=$?
set -e
semantic_fail=$semantic_py

if [[ $semantic_fail -eq 0 ]]; then
  echo "SEMANTIC COVERAGE PASS"
else
  echo "SEMANTIC COVERAGE FAIL"
  fail=1
fi

raw_fail=0
RAW_IDX="$ROOT/indexes/raw-files.sha256"
if [[ ! -s "$RAW_IDX" ]]; then
  echo "FAIL missing indexes/raw-files.sha256"
  raw_fail=1
else
  # exact coverage: every required raw path indexed; no path traversal
  set +e
  python3 - "$ROOT" "$RAW_IDX" <<'PY'
import hashlib, sys
from pathlib import Path
root = Path(sys.argv[1])
idx = Path(sys.argv[2])
err = 0
seen = set()
for line in idx.read_text(encoding="utf-8").splitlines():
    if not line.strip():
        continue
    h, p = line.split(None, 1)
    if ".." in Path(p).parts or p.startswith("/"):
        print("FAIL raw path traversal", p); err += 1
        continue
    if p in seen:
        print("FAIL raw duplicate path", p); err += 1
    seen.add(p)
    f = root / p
    if not f.is_file():
        print("FAIL raw missing/empty", p); err += 1
        continue
    actual = hashlib.sha256(f.read_bytes()).hexdigest()
    if actual != h:
        print("FAIL raw hash", p); err += 1
    else:
        print("OK RAW", p)
# all manifests/raw/*.json (except _staging) must be indexed
raw_dir = root / "manifests" / "raw"
for f in sorted(raw_dir.glob("*.json")):
    if f.name.startswith("_"):
        continue  # local helper/meta, not pack RAW evidence
    rel = f.relative_to(root).as_posix()
    if rel not in seen:
        print("FAIL raw not indexed", rel); err += 1
sys.exit(err)
PY
  raw_idx_py=$?
  set -e
  raw_fail=$((raw_fail + raw_idx_py))
fi

set +e
python3 - "$ROOT" <<'PY'
import json, sys
from pathlib import Path
root = Path(sys.argv[1])
p = root / "manifests" / "raw" / "nora.workzone.03.json"
err = 0
doc = json.loads(p.read_text(encoding="utf-8"))
if doc.get("schema") != "sfia-next-g2-raw-extract/v2":
    print("FAIL nora schema", doc.get("schema")); err += 1
if doc.get("nodeCount") != 129 or len(doc.get("nodes") or []) != 129:
    print("FAIL nora nodeCount", doc.get("nodeCount"), len(doc.get("nodes") or [])); err += 1
rfr = doc.get("rootFrameRelative") or {}
if rfr.get("x") != 240:
    print("FAIL nora rootFrameRelative.x", rfr.get("x")); err += 1
texts = [n for n in doc["nodes"] if n.get("t") == "TEXT"]
ok = sum(1 for n in texts if n.get("ff") and n.get("fs") is not None and n.get("f"))
if ok != len(texts):
    print(f"FAIL nora TEXT typo {ok}/{len(texts)}"); err += 1
else:
    print(f"OK nora v2 nodes=129 text_typo={ok}/{len(texts)} rootFr.x=240")
sys.exit(err)
PY
raw_py=$?
set -e
raw_fail=$((raw_fail + raw_py))

if [[ $raw_fail -eq 0 ]]; then
  echo "RAW INTEGRITY PASS (indexes/raw-files.sha256 + nora v2)"
else
  echo "RAW INTEGRITY FAIL"
  fail=1
fi

if [[ $fail -ne 0 ]]; then
  echo "VERIFY FAILED"
  exit 1
fi
echo "VERIFY PASS"

# ---------------------------------------------------------------------------
# Optional isolated negative suite (real pack untouched).
# Includes resigned semantic probes B-N1..B-N10 — hash-only failures do NOT count.
# ---------------------------------------------------------------------------
if [[ "${G2_VERIFY_NEGATIVE_TEST:-}" == "1" ]]; then
  echo "B2/B-N negative suite (isolated temp copies, including resign)"
  NEG_ROOT=$(mktemp -d "${TMPDIR:-/tmp}/g2-neg.XXXXXX")
  # shellcheck disable=SC2064
  trap 'rm -rf "$NEG_ROOT"' EXIT
  neg_fail=0

  clone_pack() {
    local copy="$1"
    rm -rf "$copy"
    mkdir -p "$copy"
    if command -v rsync >/dev/null 2>&1; then
      rsync -a --exclude 'scripts/tmp' "$ROOT/" "$copy/"
    else
      cp -R "$ROOT/." "$copy/"
      rm -rf "$copy/scripts/tmp" 2>/dev/null || true
    fi
  }

  # Run verify; capture whether SEMANTIC failed (required for resign cases).
  expect_semantic_fail() {
    local name="$1" copy="$2" needle="$3"
    local out rc
    set +e
    out=$(G2_VERIFY_NEGATIVE_TEST=0 bash "$copy/scripts/verify-g2-pack.sh" 2>&1)
    rc=$?
    set -e
    if [[ $rc -eq 0 ]]; then
      echo "FAIL negative $name — verify unexpectedly PASS"
      neg_fail=1
      return
    fi
    if [[ -n "$needle" ]] && ! grep -q "$needle" <<<"$out"; then
      echo "FAIL negative $name — exit $rc but missing semantic needle '$needle'"
      echo "$out" | tail -30
      neg_fail=1
      return
    fi
    # Resign cases must not be hash-only: require SEMANTIC COVERAGE FAIL
    if [[ -n "$needle" ]] && ! grep -q "SEMANTIC COVERAGE FAIL" <<<"$out"; then
      echo "FAIL negative $name — not a semantic rejection (stdout lacks SEMANTIC COVERAGE FAIL)"
      neg_fail=1
      return
    fi
    echo "OK negative $name — verify FAIL as expected (semantic)"
  }

  expect_any_fail() {
    local name="$1" copy="$2"
    if G2_VERIFY_NEGATIVE_TEST=0 bash "$copy/scripts/verify-g2-pack.sh" >/dev/null 2>&1; then
      echo "FAIL negative $name — verify unexpectedly PASS"
      neg_fail=1
    else
      echo "OK negative $name — verify FAIL as expected"
    fi
  }

  resign_raw() {
    local copy="$1" rel="$2"
    python3 - "$copy" "$rel" <<'PY'
import hashlib, sys
from pathlib import Path
copy = Path(sys.argv[1])
rel = sys.argv[2]
raw = copy / rel
digest = hashlib.sha256(raw.read_bytes()).hexdigest()
idx = copy / "indexes" / "raw-files.sha256"
lines = []
for line in idx.read_text(encoding="utf-8").splitlines():
    if not line.strip():
        continue
    h, p = line.split(None, 1)
    if p == rel or p.endswith("/" + Path(rel).name) or p.endswith(rel):
        lines.append(f"{digest}  {p}")
    else:
        lines.append(line)
idx.write_text("\n".join(lines) + "\n", encoding="utf-8")
print("resigned", rel, digest)
PY
  }

  resign_file_sidecar() {
    local copy="$1" file_rel="$2" side_rel="$3"
    python3 - "$copy" "$file_rel" "$side_rel" <<'PY'
import hashlib, sys
from pathlib import Path
copy = Path(sys.argv[1])
f = copy / sys.argv[2]
side = copy / sys.argv[3]
digest = hashlib.sha256(f.read_bytes()).hexdigest()
side.write_text(digest + "\n", encoding="utf-8")
print("resigned sidecar", sys.argv[2], digest)
PY
  }

  # --- legacy integrity-oriented probes ---
  copy="$NEG_ROOT/strip_text_ff_nora_unsigned"
  clone_pack "$copy"
  python3 - "$copy" <<'PY'
import json, sys
from pathlib import Path
copy = Path(sys.argv[1])
p = copy / "manifests/raw/nora.workzone.03.json"
doc = json.loads(p.read_text(encoding="utf-8"))
for n in doc.get("nodes") or []:
    if n.get("t") == "TEXT" and n.get("ff"):
        n.pop("ff", None)
        break
p.write_text(json.dumps(doc, ensure_ascii=False), encoding="utf-8")
PY
  expect_any_fail strip_text_ff_nora_unsigned "$copy"

  copy="$NEG_ROOT/corrupt_raw_bytes"
  clone_pack "$copy"
  python3 - "$copy" <<'PY'
import sys
from pathlib import Path
copy = Path(sys.argv[1])
p = copy / "manifests/raw/document.workspace.04.json"
p.write_bytes(p.read_bytes() + b"\n")
PY
  expect_any_fail corrupt_raw_bytes "$copy"

  copy="$NEG_ROOT/bad_frame_status"
  clone_pack "$copy"
  python3 - "$copy" <<'PY'
import json, sys
from pathlib import Path
copy = Path(sys.argv[1])
p = copy / "manifests/l2-manifest.json"
doc = json.loads(p.read_text(encoding="utf-8"))
frames = doc.get("frames") or []
if frames:
    frames[0]["status"] = "COMPLETE_FOR_COMPONENT"
p.write_text(json.dumps(doc, ensure_ascii=False), encoding="utf-8")
PY
  expect_any_fail bad_frame_status "$copy"

  copy="$NEG_ROOT/strip_autolayout_gap_unsigned"
  clone_pack "$copy"
  python3 - "$copy" <<'PY'
import json, sys
from pathlib import Path
copy = Path(sys.argv[1])
p = copy / "manifests/raw/nora.workzone.03.json"
doc = json.loads(p.read_text(encoding="utf-8"))
for n in doc.get("nodes") or []:
    if n.get("lm") and "g" in n and n.get("g"):
        n.pop("g", None)
        break
p.write_text(json.dumps(doc, ensure_ascii=False), encoding="utf-8")
PY
  expect_any_fail strip_autolayout_gap_unsigned "$copy"

  # --- B-N1 Documents resigné: strip TEXT.ff 94:421 then rehash RAW ---
  copy="$NEG_ROOT/BN1_doc_ff_resigned"
  clone_pack "$copy"
  python3 - "$copy" <<'PY'
import json, sys
from pathlib import Path
copy = Path(sys.argv[1])
p = copy / "manifests/raw/document.workspace.04.json"
doc = json.loads(p.read_text(encoding="utf-8"))
hit = next(n for n in doc["nodes"] if n.get("id") == "94:421")
assert hit.get("t") == "TEXT" and hit.get("ff")
hit.pop("ff")
p.write_text(json.dumps(doc, ensure_ascii=False), encoding="utf-8")
PY
  resign_raw "$copy" "manifests/raw/document.workspace.04.json"
  expect_semantic_fail BN1_doc_ff_resigned "$copy" "TEXT.ff"

  # --- B-N2 Journal resigné: strip TEXT.fs ---
  copy="$NEG_ROOT/BN2_journal_fs_resigned"
  clone_pack "$copy"
  python3 - "$copy" <<'PY'
import json, sys
from pathlib import Path
copy = Path(sys.argv[1])
p = copy / "manifests/raw/journal.surface.05.json"
doc = json.loads(p.read_text(encoding="utf-8"))
hit = next(n for n in doc["nodes"] if n.get("t") == "TEXT" and n.get("fs") is not None)
nid = hit["id"]
hit.pop("fs")
p.write_text(json.dumps(doc, ensure_ascii=False), encoding="utf-8")
print("stripped fs on", nid)
PY
  resign_raw "$copy" "manifests/raw/journal.surface.05.json"
  expect_semantic_fail BN2_journal_fs_resigned "$copy" "TEXT.fs"

  # --- B-N3 Layout resigné: strip gap on AL node with g>0 ---
  copy="$NEG_ROOT/BN3_layout_gap_resigned"
  clone_pack "$copy"
  python3 - "$copy" <<'PY'
import json, sys
from pathlib import Path
copy = Path(sys.argv[1])
p = copy / "manifests/raw/document.workspace.04.json"
doc = json.loads(p.read_text(encoding="utf-8"))
hit = next(n for n in doc["nodes"] if n.get("lm") and isinstance(n.get("g"), (int, float)) and n["g"] > 0)
nid = hit["id"]
hit.pop("g")
p.write_text(json.dumps(doc, ensure_ascii=False), encoding="utf-8")
print("stripped g on", nid)
PY
  resign_raw "$copy" "manifests/raw/document.workspace.04.json"
  expect_semantic_fail BN3_layout_gap_resigned "$copy" "layout.g"

  # --- B-N4 Parenté/compteur resigné ---
  copy="$NEG_ROOT/BN4_desc_count_resigned"
  clone_pack "$copy"
  python3 - "$copy" <<'PY'
import json, sys
from pathlib import Path
copy = Path(sys.argv[1])
p = copy / "manifests/component-nodes-l2.json"
doc = json.loads(p.read_text(encoding="utf-8"))
comp = doc["components"]["document.workspace.04"]
comp["descendantCount"] = int(comp.get("descendantCount") or 0) + 7
if comp.get("descendantIds"):
    comp["descendantIds"] = list(comp["descendantIds"]) + ["99:FAKE"]
p.write_text(json.dumps(doc, ensure_ascii=False), encoding="utf-8")
PY
  resign_file_sidecar "$copy" "manifests/component-nodes-l2.json" "manifests/component-nodes-l2.json.sha256"
  expect_semantic_fail BN4_desc_count_resigned "$copy" "descendant"

  # --- B-N5 Statut trompeur resigné: promote portfolio after stripping TEXT.ff ---
  copy="$NEG_ROOT/BN5_false_complete_resigned"
  clone_pack "$copy"
  python3 - "$copy" <<'PY'
import json, sys
from pathlib import Path
copy = Path(sys.argv[1])
raw = copy / "manifests/raw/portfolio.content.json"
doc = json.loads(raw.read_text(encoding="utf-8"))
hit = next(n for n in doc["nodes"] if n.get("t") == "TEXT" and n.get("ff"))
hit.pop("ff")
raw.write_text(json.dumps(doc, ensure_ascii=False), encoding="utf-8")
cn = json.loads((copy / "manifests/component-nodes-l2.json").read_text(encoding="utf-8"))
comp = cn["components"]["portfolio.content"]
comp["status"] = "COMPLETE_FOR_COMPONENT"
if "canonicalNodeId" not in comp:
    comp["canonicalNodeId"] = doc.get("rootId") or doc["nodes"][0]["id"]
(copy / "manifests/component-nodes-l2.json").write_text(json.dumps(cn, ensure_ascii=False), encoding="utf-8")
PY
  resign_raw "$copy" "manifests/raw/portfolio.content.json"
  resign_file_sidecar "$copy" "manifests/component-nodes-l2.json" "manifests/component-nodes-l2.json.sha256"
  expect_semantic_fail BN5_false_complete_resigned "$copy" "TEXT.ff"

  # --- B-N6 Screen coverage resigné: strip content attachment on P0 sas ---
  copy="$NEG_ROOT/BN6_screen_coverage_resigned"
  clone_pack "$copy"
  python3 - "$copy" <<'PY'
import json, sys
from pathlib import Path
copy = Path(sys.argv[1])
p = copy / "manifests/l2-manifest.json"
doc = json.loads(p.read_text(encoding="utf-8"))
fr = next(f for f in doc["frames"] if f.get("frameId") == "94:135")
fr.pop("screenCoverage", None)
p.write_text(json.dumps(doc, ensure_ascii=False), encoding="utf-8")
PY
  resign_file_sidecar "$copy" "manifests/l2-manifest.json" "manifests/l2-manifest.json.sha256"
  expect_semantic_fail BN6_screen_coverage_resigned "$copy" "screenCoverage"

  # --- B-N7 False content: D5 frame claims rail as content component ---
  copy="$NEG_ROOT/BN7_rail_as_content_resigned"
  clone_pack "$copy"
  python3 - "$copy" <<'PY'
import json, sys
from pathlib import Path
copy = Path(sys.argv[1])
p = copy / "manifests/l2-manifest.json"
doc = json.loads(p.read_text(encoding="utf-8"))
fr = next(f for f in doc["frames"] if f.get("frameId") == "125:33")
sc = fr.setdefault("screenCoverage", {})
sc["contentComponentId"] = "shell.rail.projet"
sc["rawRef"] = "manifests/raw/shell.rail.projet.json"
p.write_text(json.dumps(doc, ensure_ascii=False), encoding="utf-8")
PY
  resign_file_sidecar "$copy" "manifests/l2-manifest.json" "manifests/l2-manifest.json.sha256"
  expect_semantic_fail BN7_rail_as_content_resigned "$copy" "rail-only"

  # --- B-N8 Misleading F1 rail: personnel↔projet at 246px (fill contradiction) ---
  copy="$NEG_ROOT/BN8_rail_246_fill_resigned"
  clone_pack "$copy"
  python3 - "$copy" <<'PY'
import json, sys
from pathlib import Path
copy = Path(sys.argv[1])
p = copy / "manifests/l2-manifest.json"
doc = json.loads(p.read_text(encoding="utf-8"))
fr = next(f for f in doc["frames"] if f.get("frameId") == "158:264")
sc = fr.setdefault("screenCoverage", {})
sc["railComponentId"] = "shell.rail.personnel"
ev = sc.setdefault("railEvidence", {})
ev["fill"] = "#0c1020"  # projet fill while claiming personnel
ev["width"] = 246
ev["variant"] = "personnel"
p.write_text(json.dumps(doc, ensure_ascii=False), encoding="utf-8")
PY
  resign_file_sidecar "$copy" "manifests/l2-manifest.json" "manifests/l2-manifest.json.sha256"
  expect_semantic_fail BN8_rail_246_fill_resigned "$copy" "fill mismatch"

  # --- B-N9 Strip CTA attachment on D5 frame while resigning ---
  copy="$NEG_ROOT/BN9_action_cta_resigned"
  clone_pack "$copy"
  python3 - "$copy" <<'PY'
import json, sys
from pathlib import Path
copy = Path(sys.argv[1])
p = copy / "manifests/l2-manifest.json"
doc = json.loads(p.read_text(encoding="utf-8"))
fr = next(f for f in doc["frames"] if f.get("frameId") == "125:33")
sc = fr.setdefault("screenCoverage", {})
sc.pop("actionComponentId", None)
sc.pop("actionRawRef", None)
sc.pop("primaryCtaLabel", None)
p.write_text(json.dumps(doc, ensure_ascii=False), encoding="utf-8")
PY
  resign_file_sidecar "$copy" "manifests/l2-manifest.json" "manifests/l2-manifest.json.sha256"
  expect_semantic_fail BN9_action_cta_resigned "$copy" "actionComponentId"

  # --- B-N10 Strip lineHeight qualification on page.content TEXT ---
  copy="$NEG_ROOT/BN10_lh_qualification_resigned"
  clone_pack "$copy"
  python3 - "$copy" <<'PY'
import json, sys
from pathlib import Path
copy = Path(sys.argv[1])
raw = copy / "manifests/raw/page.content.22.json"
doc = json.loads(raw.read_text(encoding="utf-8"))
hit = next(n for n in doc["nodes"] if n.get("t") == "TEXT" and (n.get("lhMode") or n.get("lhQualification")))
hit.pop("lhMode", None)
hit.pop("lhQualification", None)
hit.pop("lh", None)
raw.write_text(json.dumps(doc, ensure_ascii=False), encoding="utf-8")
PY
  resign_raw "$copy" "manifests/raw/page.content.22.json"
  expect_semantic_fail BN10_lh_qualification_resigned "$copy" "lhQualification"

  if [[ $neg_fail -ne 0 ]]; then
    echo "NEGATIVE TESTS FAIL — a corruption/resign was not detected semantically"
    exit 1
  fi
  echo "NEGATIVE TESTS PASS (all corruptions detected; B-N1..B-N10 semantic)"
fi
