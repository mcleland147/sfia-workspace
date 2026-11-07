# REVIEW PACK FULL — SFIA Studio Next — G2 semantic gate

**Date:** 2026-11-07 Europe/Paris
**GO:** Morris « ok go » — `/Users/morris/Downloads/sfia-next-cursor-g2-gate-semantique-final-go-2026-11-07.md`
**Cycle:** 8 Delivery (G2 DIP/script) + QA 9 discriminante · Profil **Critical** · Typologie `EVOL` preuves
**Verdict:** `G2-SOURCE CANDIDATE — READY FOR CHATGPT/MORRIS REVIEW — NO UI CODE`

## Gates
- G1 VALIDATED SPEC
- G2 CANDIDATE (this pack) — awaiting ChatGPT/Morris
- G3 A1+A2 VALIDATED SPEC (no code)
- G4 **NO UI CODE GO**
- G5 NOT RUN

## Git Truth
- Worktree: `/Users/morris/Projects/sfia-workspace-next-g2-figma-evidence`
- Branch: `feat/next-convergence-ux-g2-figma-evidence` (local only; **not pushed**)
- HEAD = origin/main = merge-base: `f0d59bc8f72ed8544ac4c82dfa9ac0f23889c03e`
- Status: `M .tmp-sfia-review/chatgpt-review.md`; untracked `g2-source/` + nested `.tmp-sfia-review/` (**signal only**, not used as report)
- Prior handoff tip: `9bf1df8296969a5095a57b794dbe920a2e71a492` blob `9fd2db39e96965d645d0473bfadb3168bb62fc55`
- ENV-01: N/A — no product environment · Versioning: NO RELEASE
- No `web/**` changes · no staged · no project commit/push

## Sources consulted
- GO semantic gate md (Downloads)
- Local G2 pack (source of truth); ZIP B1–B5 `64c539d3…` reference only
- Figma read-only fileKey `itgvCulInEnFY6DvgIegvP` page `94:49` session `e54da595-ca28-4e8e-8d27-17195cee7b0d` (personnel `itemSpacing`)
- Governance/SEF/roadmap/decisions/protocoles as listed in GO (read, not rewritten)

## Blocking defect reproduced (isolated copy)
1. Strip `ff` on `manifests/raw/document.workspace.04.json` node `94:421` (TEXT « Projet Atlas »).
2. Recompute SHA-256 entry in `indexes/raw-files.sha256`.
3. **Before fix:** `bash scripts/verify-g2-pack.sh` → **exit 0 / VERIFY PASS** (false COMPLETE).
4. **After fix:** same resign → `FAIL document.workspace.04 COMPLETE TEXT.ff missing nodeId=94:421` + `SEMANTIC COVERAGE FAIL` + non-zero exit.

## Verifier changes (`scripts/verify-g2-pack.sh`)
- COMPLETE_FOR_COMPONENT: identity (`canonicalNodeId`, `descendantIds`/`descendantCount`), TEXT `ff`/`fs`/`f`, AL `g`/`pad`, bounds, v2 pageAbsolute/frameRelative when schema v2, EQUIVALENT native `changingNodes`.
- Diagnostics print `component / file / nodeId / field`; `set +e` around Python so SEMANTIC/INTEGRITY lines survive.
- PNG magic via Python stdlib (no required `xxd`).
- RAW index: all non-`_` `manifests/raw/*.json` must be indexed; path traversal/duplicates rejected.
- Negative suite: legacy unsigned tampers + **B-N1..B-N5 resigned** requiring `SEMANTIC COVERAGE FAIL` (hash-only does not count).

### Negative suite evidence (pack local)
```
G2 pack verify @ /Users/morris/Projects/sfia-workspace-next-g2-figma-evidence/projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source
OK sidecar png-export-index.json
OK sidecar l2-manifest.json
OK sidecar component-nodes-l2.json
OK PNG png/frame-94-50.png
OK PNG png/frame-94-135.png
OK PNG png/frame-94-214.png
OK PNG png/frame-94-370.png
OK PNG png/frame-94-515.png
OK PNG png/frame-97-359.png
OK PNG png/frame-125-33.png
OK PNG png/frame-127-106.png
OK PNG png/frame-129-72.png
OK PNG png/frame-158-264.png
OK PNG png/frame-158-336.png
OK PNG png/frame-158-912.png
OK PNG png/frame-159-145.png
OK PNG png/frame-160-175.png
OK PNG png/frame-160-391.png
OK PNG png/frame-161-216.png
OK PNG png/frame-161-288.png
OK PNG png/frame-241-385.png
OK PNG png/frame-282-468.png
OK PNG png/frame-282-492.png
INTEGRITY PASS (20 PNG digests vs indexes/png-files.sha256; sidecars)
SEMANTIC COVERAGE PASS
OK RAW manifests/raw/deltas-nora-206-208.json
OK RAW manifests/raw/document.workspace.04.json
OK RAW manifests/raw/journal.surface.05.json
OK RAW manifests/raw/mobile.216.json
OK RAW manifests/raw/mobile.217.json
OK RAW manifests/raw/negatives-28-32-33-41.json
OK RAW manifests/raw/nora.workzone.03.json
OK RAW manifests/raw/portfolio.content.json
OK RAW manifests/raw/portfolio.empty.64.json
OK RAW manifests/raw/portfolio.list.65.json
OK RAW manifests/raw/shell.rail.conversation.json
OK RAW manifests/raw/shell.rail.inspection.json
OK RAW manifests/raw/shell.rail.personnel.json
OK RAW manifests/raw/shell.rail.projet.json
OK nora v2 nodes=129 text_typo=77/77 rootFr.x=240
RAW INTEGRITY PASS (indexes/raw-files.sha256 + nora v2)
VERIFY PASS
B2/B-N negative suite (isolated temp copies, including resign)
OK negative strip_text_ff_nora_unsigned — verify FAIL as expected
OK negative corrupt_raw_bytes — verify FAIL as expected
OK negative bad_frame_status — verify FAIL as expected
OK negative strip_autolayout_gap_unsigned — verify FAIL as expected
resigned manifests/raw/document.workspace.04.json facd72094605f47c57e837f8b2e2614cdee4938ee0d6d28db25d24081bada3c5
OK negative BN1_doc_ff_resigned — verify FAIL as expected (semantic)
stripped fs on 94:560
resigned manifests/raw/journal.surface.05.json 8ca45ed5e47b8d988debcf3af05bea2729c7e15a1f7166d98e7cc9ec23f1cc46
OK negative BN2_journal_fs_resigned — verify FAIL as expected (semantic)
stripped g on 94:420
resigned manifests/raw/document.workspace.04.json d14affe42e1c829adb269a826f9915f38b6dcb1d18186163d383b80f29df9114
OK negative BN3_layout_gap_resigned — verify FAIL as expected (semantic)
resigned sidecar manifests/component-nodes-l2.json a9f06b5a21f48bce822a5694f4b9ac72c8acf3eaa1c11903ae63d59eb761aae1
OK negative BN4_desc_count_resigned — verify FAIL as expected (semantic)
resigned manifests/raw/portfolio.content.json 414a201adcecf059ad99d11de43bf685558f1ed182d3674620bdd1392c4abaeb
resigned sidecar manifests/component-nodes-l2.json d9f3e6d7d3e69153a8b6c20c3f9a8f95c7efe9bd10d5828574c0312c04aa8204
OK negative BN5_false_complete_resigned — verify FAIL as expected (semantic)
NEGATIVE TESTS PASS (all corruptions detected; B-N1..B-N5 semantic)

```

### Nominal
```
G2 pack verify @ /Users/morris/Projects/sfia-workspace-next-g2-figma-evidence/projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source
OK sidecar png-export-index.json
OK sidecar l2-manifest.json
OK sidecar component-nodes-l2.json
OK PNG png/frame-94-50.png
OK PNG png/frame-94-135.png
OK PNG png/frame-94-214.png
OK PNG png/frame-94-370.png
OK PNG png/frame-94-515.png
OK PNG png/frame-97-359.png
OK PNG png/frame-125-33.png
OK PNG png/frame-127-106.png
OK PNG png/frame-129-72.png
OK PNG png/frame-158-264.png
OK PNG png/frame-158-336.png
OK PNG png/frame-158-912.png
OK PNG png/frame-159-145.png
OK PNG png/frame-160-175.png
OK PNG png/frame-160-391.png
OK PNG png/frame-161-216.png
OK PNG png/frame-161-288.png
OK PNG png/frame-241-385.png
OK PNG png/frame-282-468.png
OK PNG png/frame-282-492.png
INTEGRITY PASS (20 PNG digests vs indexes/png-files.sha256; sidecars)
SEMANTIC COVERAGE PASS
OK RAW manifests/raw/deltas-nora-206-208.json
OK RAW manifests/raw/document.workspace.04.json
OK RAW manifests/raw/journal.surface.05.json
OK RAW manifests/raw/mobile.216.json
OK RAW manifests/raw/mobile.217.json
OK RAW manifests/raw/negatives-28-32-33-41.json
OK RAW manifests/raw/nora.workzone.03.json
OK RAW manifests/raw/portfolio.content.json
OK RAW manifests/raw/portfolio.empty.64.json
OK RAW manifests/raw/portfolio.list.65.json
OK RAW manifests/raw/shell.rail.conversation.json
OK RAW manifests/raw/shell.rail.inspection.json
OK RAW manifests/raw/shell.rail.personnel.json
OK RAW manifests/raw/shell.rail.projet.json
OK nora v2 nodes=129 text_typo=77/77 rootFr.x=240
RAW INTEGRITY PASS (indexes/raw-files.sha256 + nora v2)
VERIFY PASS

```

## Pack mutations this cycle
- `shell.rail.personnel.json`: nodes `94:53/59/66/71/72/74` native `g=0` (Figma `itemSpacing` verified) + resign raw index.
- `component-nodes-l2.json`: `portfolio.content` → `COMPLETE_FOR_COMPONENT` (55 nodes / 31 TEXT) + sidecar.
- `coverage/cu-uxc-coverage.json` (+ matrix note): CU-01/UXC-01 **N/A VISUAL — BEHAVIOR G5**; D5/D6 residual honesty.
- `CONTROL-REPORT.md` / `README.md`: semantic gate notes.
- **PNG 20/20 byte-identical** (oracle unchanged).

## Family coverage table
| componentId | status | frame | nodes | CU | residual |
|---|---|---|---:|---|---|
| `document.workspace.04` | COMPLETE_FOR_COMPONENT | 94:370 | 100 | CU-07,CU-14 | COMPLETE_FOR_COMPONENT |
| `journal.surface.05` | COMPLETE_FOR_COMPONENT | 94:515 | 71 | CU-08 | COMPLETE_FOR_COMPONENT |
| `micro.206-208` | EQUIVALENT_DOCUMENTED | None | 3 | CU-05,CU-06 | EQUIVALENT_DOCUMENTED |
| `mobile.216` | COMPLETE_FOR_COMPONENT | 282:468 | 24 | CU-15,CU-16 | COMPLETE_FOR_COMPONENT |
| `mobile.217` | COMPLETE_FOR_COMPONENT | 282:492 | 24 | CU-14,CU-15,CU-16 | COMPLETE_FOR_COMPONENT |
| `negatives.pilotage` | EQUIVALENT_DOCUMENTED | None | 4 | CU-10,CU-11,CU-12,CU-13 | EQUIVALENT_DOCUMENTED |
| `nora.workzone.03` | COMPLETE_FOR_COMPONENT | 94:214 | 129 | CU-04,CU-05,CU-06 | COMPLETE_FOR_COMPONENT |
| `portfolio.content` | COMPLETE_FOR_COMPONENT | 94:50 | 55 | CU-02 | Promoted 2026-11-07: 55 nodes / 31 TEXT typo native; AL g+pa |
| `portfolio.empty.64` | COMPLETE_FOR_COMPONENT | 158:264 | 28 | CU-02,CU-03 | COMPLETE_FOR_COMPONENT |
| `portfolio.list.65` | COMPLETE_FOR_COMPONENT | 158:336 | 28 | CU-02,CU-03 | COMPLETE_FOR_COMPONENT |
| `shell.rail.conversation` | COMPLETE_FOR_COMPONENT | 94:214 | 34 | CU-09,CU-15 | COMPLETE_FOR_COMPONENT |
| `shell.rail.inspection` | COMPLETE_FOR_COMPONENT | 94:370 | 47 | CU-09,CU-15 | COMPLETE_FOR_COMPONENT |
| `shell.rail.personnel` | COMPLETE_FOR_COMPONENT | 94:50 | 26 | CU-09,CU-15 | COMPLETE_FOR_COMPONENT |
| `shell.rail.projet` | COMPLETE_FOR_COMPONENT | 160:175 | 29 | CU-09,CU-15 | COMPLETE_FOR_COMPONENT |


## D5/D6 residual (honest)
PNG oracles frames 22/24/40 + `negatives-28-32-33-41` native discriminative L2. Full pilotage/décision panel RAW trees not separately indexed. **Not excluded to force PASS**; if Morris requires deep L2 before G4, that is a distinct extraction GO. Macro-lot still CANDIDATE with this residual documented.

## ZIP final
- Path: `/Users/morris/Downloads/sfia-next-g2-source-semantic-gate-2026-11-07.zip`
- SHA256: `ceb70f09e8a778d2b4c44cef8611461cc6b8f1703c350a864636fe04904986f5`
- Excludes: `scripts/tmp/`, `scripts/embed/`, `manifests/raw/_*.json`, `_staging`, `.DS_Store`
- Fresh extract: nominal VERIFY PASS + `G2_VERIFY_NEGATIVE_TEST=1` NEGATIVE TESTS PASS

## Anti-claims
No G2 VALIDATED / ADOPTED / G4 CODE GO / G5 PASS. No UI/CSS/API/DB/CI. No project push. No Figma write. VERIFY PASS ≠ Morris G2 validation.

## Instruction ChatGPT
1. Fetch handoff `sfia/review-handoff` / `sfia-review-handoff/latest-chatgpt-review.md` (new tip after publish).
2. Independently check ZIP `ceb70f09e8a778d2b4c44cef8611461cc6b8f1703c350a864636fe04904986f5` if attached; re-run B-N1 resign mentally against script invariants.
3. Decide G2 submission to Morris. **No implied UI GO.**

## Terminus
**STOP.** Next: ChatGPT review → Morris G2 decision → only then a distinct G4 delivery GO.
