# REVIEW PACK FULL — SFIA Studio Next — G2-Source L2 complement

**Date:** 2026-11-07 Europe/Paris
**GO:** Morris — complément ciblé G2-Source / extraction L2 native (2026-11-07) — conserver 20 PNG, corriger COMPLETE abusif frames-only, STOP avant UI.
**Verdict:** `G2-SOURCE CANDIDATE — READY FOR CHATGPT/MORRIS REVIEW — NO UI CODE`

## Gates
- G1 VALIDATED SPEC
- G2 CANDIDATE (this pack) — awaiting ChatGPT/Morris
- G3 A1+A2 VALIDATED SPEC
- G4 NO UI CODE GO
- G5 NOT RUN

## Git Review Index

- Worktree: `/Users/morris/Projects/sfia-workspace-next-g2-figma-evidence`
- Branch: `feat/next-convergence-ux-g2-figma-evidence` (local only; **not pushed**)
- HEAD / origin/main / merge-base: `f0d59bc8f72ed8544ac4c82dfa9ac0f23889c03e`
- Remote: `https://github.com/mcleland147/sfia-workspace.git`
- Status (short):
```
M .tmp-sfia-review/chatgpt-review.md
?? projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/.tmp-sfia-review/
?? projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/
```
- Prior handoff tip: `80f328e1eee83f0523b969b4f3e8e87d5354b259` blob `a60a226fd9078439db3b4243529f33e36edbfbf5`
- ENV-01: N/A — NO PRODUCT ENVIRONMENT EFFECT · Versioning: NO RELEASE

## Sources lues (cycle)
- Prompt: `sfia-next-cursor-g2-complement-l2-go-2026-11-07.md`
- Figma native page `94:49` fileKey `itgvCulInEnFY6DvgIegvP` (session `11cb7e4a-7f90-41eb-93a3-c3b0408dd4b1`)
- Pack local `g2-source/` acquis (PNG + indexes) + L2 complement
- Prior handoff remote (delta base)

## Delta vs handoff `80f328e1`
| Area | Avant | Après |
|------|-------|-------|
| Frames status | COMPLETE_FOR_COMPONENT (abusif) | PNG_SOURCE_VERIFIED |
| Rails | COMPLETE sans registre descendants exploitable | COMPLETE + raw descendants 26/34/29/47 |
| component-nodes-l2.json | absent / insuffisant | présent, 14 composants |
| Verify | INTEGRITY only | INTEGRITY + SEMANTIC COVERAGE PASS |
| Raw nora/document/journal | manquant / journal vide | 44 / 31 / 21 nodes |
| PNG octets | 20 SHA | **inchangés** 20/20 |

## Contrôle automatique
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
VERIFY PASS

```
PNG digests vs `indexes/png-files.sha256`: **20/20 MATCH**. Sidecars OK.

## F1 rails (distincts — non interchangeables)
```json

[
  {
    "componentId": "shell.rail.personnel",
    "status": "COMPLETE_FOR_COMPONENT",
    "variant": "personnel",
    "nodeId": "94:51",
    "frameId": "94:50",
    "geometry": {
      "local": {
        "x": 0,
        "y": 0,
        "w": 246,
        "h": 970
      },
      "absolute": {
        "x": 0,
        "y": 0,
        "w": 246,
        "h": 970
      }
    },
    "layout": {
      "mode": "VERTICAL",
      "sizingH": "FIXED",
      "sizingV": "FIXED",
      "gap": 10,
      "padTRBL": [
        20,
        19,
        0,
        19
      ],
      "clips": true
    },
    "style": {
      "fill": "#0C101A"
    },
    "pngRef": "94:50",
    "cu": [
      "CU-09",
      "CU-15"
    ],
    "uxc": [
      "UXC-13"
    ],
    "notes": "Distinct density/color from other F1 variants — not width-only.",
    "descendantCount": 26,
    "componentNodesRef": "components.shell.rail.personnel"
  },
  {
    "componentId": "shell.rail.conversation",
    "status": "COMPLETE_FOR_COMPONENT",
    "variant": "conversation",
    "nodeId": "94:215",
    "frameId": "94:214",
    "geometry": {
      "local": {
        "x": 0,
        "y": 0,
        "w": 240,
        "h": 970
      },
      "absolute": {
        "x": 3540,
        "y": 0,
        "w": 240,
        "h": 970
      }
    },
    "layout": {
      "mode": "VERTICAL",
      "sizingH": "FIXED",
      "sizingV": "FIXED",
      "gap": 13,
      "padTRBL": [
        25,
        19,
        0,
        19
      ],
      "clips": true
    },
    "style": {
      "fill": "#0D111B"
    },
    "pngRef": "94:214",
    "cu": [
      "CU-09",
      "CU-15"
    ],
    "uxc": [
      "UXC-13"
    ],
    "notes": "Contains visual \"Sources Git\" link — ML4 OUT for functional activation.",
    "descendantCount": 34,
    "componentNodesRef": "components.shell.rail.conversation"
  },
  {
    "componentId": "shell.rail.projet",
    "status": "COMPLETE_FOR_COMPONENT",
    "variant": "projet",
    "nodeId": "160:176",
    "frameId": "160:175",
    "geometry": {
      "local": {
        "x": 0,
        "y": 0,
        "w": 246,
        "h": 970
      },
      "absolute": {
        "x": 0,
        "y": 24100,
        "w": 246,
        "h": 970
      }
    },
    "layout": {
      "mode": "VERTICAL",
      "sizingH": "FIXED",
      "sizingV": "FIXED",
      "gap": 13,
      "padTRBL": [
        24,
        24,
        24,
        24
      ],
      "clips": true
    },
    "style": {
      "fill": "#0C1020"
    },
    "pngRef": "160:175",
    "cu": [
      "CU-09",
      "CU-15"
    ],
    "uxc": [
      "UXC-13"
    ],
    "notes": "Typography Inter Semi Bold observed on brand/nav labels.",
    "descendantCount": 29,
    "componentNodesRef": "components.shell.rail.projet"
  },
  {
    "componentId": "shell.rail.inspection",
    "status": "COMPLETE_FOR_COMPONENT",
    "variant": "inspection",
    "nodeId": "94:372",
    "frameId": "94:370",
    "geometry": {
      "local": {
        "x": 0,
        "y": 0,
        "w": 244,
        "h": 970
      },
      "absolute": {
        "x": 5310,
        "y": 0,
        "w": 244,
        "h": 970
      }
    },
    "layout": {
      "mode": "VERTICAL",
      "sizingH": "FIXED",
      "sizingV": "FIXED",
      "gap": 11,
      "padTRBL": [
        23,
        19,
        22,
        19
      ],
      "clips": true
    },
    "style": {
      "fill": "#0C101A"
    },
    "pngRef": "94:370",
    "cu": [
      "CU-09",
      "CU-15"
    ],
    "uxc": [
      "UXC-13"
    ],
    "notes": "Frame 19 (100:39) is visual-only D8 OUT — not a functional source for this rail.",
    "descendantCount": 47,
    "componentNodesRef": "components.shell.rail.inspection"
  }
]

```

## Registre composants (extrait status)
```json

[
  {
    "componentId": "shell.rail.personnel",
    "status": "COMPLETE_FOR_COMPONENT",
    "canonicalNodeId": "94:51",
    "frameId": "94:50",
    "descendantCount": 26,
    "pngRef": "94:50",
    "cu": [
      "CU-09",
      "CU-15"
    ],
    "uxc": [
      "UXC-13"
    ],
    "rawRef": "manifests/raw/shell.rail.personnel.json"
  },
  {
    "componentId": "shell.rail.conversation",
    "status": "COMPLETE_FOR_COMPONENT",
    "canonicalNodeId": "94:215",
    "frameId": "94:214",
    "descendantCount": 34,
    "pngRef": "94:214",
    "cu": [
      "CU-09",
      "CU-15"
    ],
    "uxc": [
      "UXC-13"
    ],
    "rawRef": "manifests/raw/shell.rail.conversation.json"
  },
  {
    "componentId": "shell.rail.projet",
    "status": "COMPLETE_FOR_COMPONENT",
    "canonicalNodeId": "160:176",
    "frameId": "160:175",
    "descendantCount": 29,
    "pngRef": "160:175",
    "cu": [
      "CU-09",
      "CU-15"
    ],
    "uxc": [
      "UXC-13"
    ],
    "rawRef": "manifests/raw/shell.rail.projet.json"
  },
  {
    "componentId": "shell.rail.inspection",
    "status": "COMPLETE_FOR_COMPONENT",
    "canonicalNodeId": "94:372",
    "frameId": "94:370",
    "descendantCount": 47,
    "pngRef": "94:370",
    "cu": [
      "CU-09",
      "CU-15"
    ],
    "uxc": [
      "UXC-13"
    ],
    "rawRef": "manifests/raw/shell.rail.inspection.json"
  },
  {
    "componentId": "portfolio.content",
    "status": "PNG_SOURCE_VERIFIED",
    "canonicalNodeId": "94:84",
    "frameId": "94:50",
    "descendantCount": 55,
    "pngRef": "94:50",
    "cu": [
      "CU-02"
    ],
    "uxc": [
      "UXC-02"
    ],
    "rawRef": "manifests/raw/portfolio.content.json"
  },
  {
    "componentId": "nora.workzone.03",
    "status": "COMPLETE_FOR_COMPONENT",
    "canonicalNodeId": "94:249",
    "frameId": "94:214",
    "descendantCount": 44,
    "pngRef": "94:214",
    "cu": [
      "CU-04",
      "CU-05",
      "CU-06"
    ],
    "uxc": [
      "UXC-03",
      "UXC-04",
      "UXC-05"
    ],
    "rawRef": "manifests/raw/nora.workzone.03.json"
  },
  {
    "componentId": "document.workspace.04",
    "status": "COMPLETE_FOR_COMPONENT",
    "canonicalNodeId": "94:419",
    "frameId": "94:370",
    "descendantCount": 31,
    "pngRef": "94:370",
    "cu": [
      "CU-07",
      "CU-14"
    ],
    "uxc": [
      "UXC-06"
    ],
    "rawRef": "manifests/raw/document.workspace.04.json"
  },
  {
    "componentId": "journal.surface.05",
    "status": "COMPLETE_FOR_COMPONENT",
    "canonicalNodeId": "94:558",
    "frameId": "94:515",
    "descendantCount": 21,
    "pngRef": "94:515",
    "cu": [
      "CU-08"
    ],
    "uxc": [
      "UXC-07"
    ],
    "rawRef": "manifests/raw/journal.surface.05.json"
  },
  {
    "componentId": "mobile.216",
    "status": "COMPLETE_FOR_COMPONENT",
    "canonicalNodeId": "282:468",
    "frameId": "282:468",
    "descendantCount": 24,
    "pngRef": "282:468",
    "cu": [
      "CU-15",
      "CU-16"
    ],
    "uxc": [
      "UXC-13",
      "UXC-14"
    ],
    "rawRef": "manifests/raw/mobile.216.json"
  },
  {
    "componentId": "mobile.217",
    "status": "COMPLETE_FOR_COMPONENT",
    "canonicalNodeId": "282:492",
    "frameId": "282:492",
    "descendantCount": 24,
    "pngRef": "282:492",
    "cu": [
      "CU-14",
      "CU-15",
      "CU-16"
    ],
    "uxc": [
      "UXC-11",
      "UXC-13",
      "UXC-14"
    ],
    "rawRef": "manifests/raw/mobile.217.json"
  },
  {
    "componentId": "portfolio.empty.64",
    "status": "COMPLETE_FOR_COMPONENT",
    "canonicalNodeId": "158:300",
    "frameId": "158:264",
    "descendantCount": 28,
    "pngRef": "158:264",
    "cu": [
      "CU-02",
      "CU-03"
    ],
    "uxc": [
      "UXC-02",
      "UXC-11"
    ],
    "rawRef": "manifests/raw/portfolio.empty.64.json"
  },
  {
    "componentId": "portfolio.list.65",
    "status": "COMPLETE_FOR_COMPONENT",
    "canonicalNodeId": "158:372",
    "frameId": "158:336",
    "descendantCount": 28,
    "pngRef": "158:336",
    "cu": [
      "CU-02",
      "CU-03"
    ],
    "uxc": [
      "UXC-02",
      "UXC-12"
    ],
    "rawRef": "manifests/raw/portfolio.list.65.json"
  },
  {
    "componentId": "micro.206-208",
    "status": "EQUIVALENT_DOCUMENTED",
    "canonicalNodeId": "281:389",
    "frameId": null,
    "descendantCount": 0,
    "pngRef": null,
    "cu": [
      "CU-05",
      "CU-06"
    ],
    "uxc": [
      "UXC-04",
      "UXC-05"
    ],
    "rawRef": "manifests/raw/deltas-nora-206-208.json"
  },
  {
    "componentId": "negatives.pilotage",
    "status": "EQUIVALENT_DOCUMENTED",
    "canonicalNodeId": "127:391",
    "frameId": null,
    "descendantCount": 0,
    "pngRef": null,
    "cu": [
      "CU-10",
      "CU-11",
      "CU-12",
      "CU-13"
    ],
    "uxc": [
      "UXC-08",
      "UXC-09",
      "UXC-10"
    ],
    "rawRef": "manifests/raw/negatives-28-32-33-41.json"
  }
]

```

## Frames (20) — PNG_SOURCE_VERIFIED only
```json

[
  {
    "frameId": "94:50",
    "status": "PNG_SOURCE_VERIFIED",
    "name": "Portefeuille et choix du projet",
    "png": {
      "path": "png/frame-94-50.png",
      "sha256": "0f4f7c19ea2833475b1f4894fc2ae83203ab5c57b91e1adfa767a666e4a0f5fc",
      "bytes": 88388
    },
    "geometry": {
      "w": 1680,
      "h": 970
    },
    "family": "shell_F1_personnel"
  },
  {
    "frameId": "94:135",
    "status": "PNG_SOURCE_VERIFIED",
    "name": "Sas — conversation avant projet",
    "png": {
      "path": "png/frame-94-135.png",
      "sha256": "582eb5f8429fdf516f185ed35733e5f3ea40b714fe2f06889d030a95bf58311c",
      "bytes": 108291
    },
    "geometry": {
      "w": 1680,
      "h": 970
    },
    "family": "sas_nora"
  },
  {
    "frameId": "94:214",
    "status": "PNG_SOURCE_VERIFIED",
    "name": "Nora — conversation longue",
    "png": {
      "path": "png/frame-94-214.png",
      "sha256": "32872657774b3760c2bee9d739fcb51668ee9a12e3d2d2261486a9042418bb6e",
      "bytes": 145783
    },
    "geometry": {
      "w": 1680,
      "h": 970
    },
    "family": "shell_F1_conversation"
  },
  {
    "frameId": "94:370",
    "status": "PNG_SOURCE_VERIFIED",
    "name": "Document Nora — consultation",
    "png": {
      "path": "png/frame-94-370.png",
      "sha256": "e6ce9258b81b268245eb0564c214912e6392f2414b033d1faa01e4a632b1fe7e",
      "bytes": 141532
    },
    "geometry": {
      "w": 1680,
      "h": 970
    },
    "family": "shell_F1_inspection"
  },
  {
    "frameId": "94:515",
    "status": "PNG_SOURCE_VERIFIED",
    "name": "Journal — sujets et décisions",
    "png": {
      "path": "png/frame-94-515.png",
      "sha256": "4da68bdbf85eaa242b116b0a422407c0543a53cd115d3ebbab49cda7c07e0bd3",
      "bytes": 108829
    },
    "geometry": {
      "w": 1680,
      "h": 970
    },
    "family": "journal_d4"
  },
  {
    "frameId": "97:359",
    "status": "PNG_SOURCE_VERIFIED",
    "name": "Document Nora — révision guidée",
    "png": {
      "path": "png/frame-97-359.png",
      "sha256": "2dff54ce935258d509e47922d2ab987e928b6486bfee4ba65169d8832b149f5f",
      "bytes": 142099
    },
    "geometry": {
      "w": 1680,
      "h": 970
    },
    "family": "document_d4"
  },
  {
    "frameId": "125:33",
    "status": "PNG_SOURCE_VERIFIED",
    "name": "Trajectoire — sans cycle actif",
    "png": {
      "path": "png/frame-125-33.png",
      "sha256": "889f097901d6122dfa52b071697f8217c353f8581fc040d328044324699b4cde",
      "bytes": 85548
    },
    "geometry": {
      "w": 1680,
      "h": 970
    },
    "family": "pilotage_d5"
  },
  {
    "frameId": "127:106",
    "status": "PNG_SOURCE_VERIFIED",
    "name": "Cycle — actif et guidance CKI",
    "png": {
      "path": "png/frame-127-106.png",
      "sha256": "4eb55f8914b5b46cfde25f32078770eab2fc862077a0e23bc1afd87612e5959b",
      "bytes": 84715
    },
    "geometry": {
      "w": 1680,
      "h": 970
    },
    "family": "pilotage_cki"
  },
  {
    "frameId": "129:72",
    "status": "PNG_SOURCE_VERIFIED",
    "name": "Journal — décisions",
    "png": {
      "path": "png/frame-129-72.png",
      "sha256": "b761126c61a95d65c86f0d25e57b3c32bff0a491f90e0ec3f03ae9c3b0d0dcd1",
      "bytes": 88857
    },
    "geometry": {
      "w": 1680,
      "h": 970
    },
    "family": "decisions_d6"
  },
  {
    "frameId": "158:264",
    "status": "PNG_SOURCE_VERIFIED",
    "name": "Portefeuille — aucun projet",
    "png": {
      "path": "png/frame-158-264.png",
      "sha256": "5b21d74062a8b4f5e421fb5257b67e91bc997f563891e678291ad2394adb0487",
      "bytes": 74363
    },
    "geometry": {
      "w": 1680,
      "h": 970
    },
    "family": "portfolio_empty"
  },
  {
    "frameId": "158:336",
    "status": "PNG_SOURCE_VERIFIED",
    "name": "Portefeuille — liste de projets",
    "png": {
      "path": "png/frame-158-336.png",
      "sha256": "9f219843edb95b712bfac0f8a60c334c1b9f2fae5d6e0cb1a306a1ef968eddb0",
      "bytes": 75179
    },
    "geometry": {
      "w": 1680,
      "h": 970
    },
    "family": "portfolio_list"
  },
  {
    "frameId": "158:912",
    "status": "PNG_SOURCE_VERIFIED",
    "name": "Portefeuille — retour sans projet créé",
    "png": {
      "path": "png/frame-158-912.png",
      "sha256": "0c1c9c0d7a2daaae46a1cecfefdf2a30d97ddd1bc9c502d7148f823834cf3a9e",
      "bytes": 74008
    },
    "geometry": {
      "w": 1680,
      "h": 970
    },
    "family": "portfolio_return"
  },
  {
    "frameId": "159:145",
    "status": "PNG_SOURCE_VERIFIED",
    "name": "Sas — préparation retrouvée",
    "png": {
      "path": "png/frame-159-145.png",
      "sha256": "4c0e342fbb1acace7ca719f79ac3d007946d387424958ed1278d901ee12dc824",
      "bytes": 71340
    },
    "geometry": {
      "w": 1680,
      "h": 970
    },
    "family": "sas_resume"
  },
  {
    "frameId": "160:175",
    "status": "PNG_SOURCE_VERIFIED",
    "name": "Documents — bibliothèque du projet",
    "png": {
      "path": "png/frame-160-175.png",
      "sha256": "b989f45746b768834b8249ec09cc243fef817fdfa0c9c5de7f65a06e3d50ce59",
      "bytes": 85339
    },
    "geometry": {
      "w": 1680,
      "h": 970
    },
    "family": "shell_F1_projet"
  },
  {
    "frameId": "160:391",
    "status": "PNG_SOURCE_VERIFIED",
    "name": "Document — révision concurrente",
    "png": {
      "path": "png/frame-160-391.png",
      "sha256": "167aaa9388271488754b94e668f3a1508a29fc47638e000ff4d6309464b45294",
      "bytes": 83405
    },
    "geometry": {
      "w": 1680,
      "h": 970
    },
    "family": "document_conflict"
  },
  {
    "frameId": "161:216",
    "status": "PNG_SOURCE_VERIFIED",
    "name": "Nora — première conversation",
    "png": {
      "path": "png/frame-161-216.png",
      "sha256": "7c450ff2fc9b4f563e70d313da873c8db83b7c66bf013d6558647b7b30a1ceae",
      "bytes": 86887
    },
    "geometry": {
      "w": 1680,
      "h": 970
    },
    "family": "nora_first"
  },
  {
    "frameId": "161:288",
    "status": "PNG_SOURCE_VERIFIED",
    "name": "Nora — reprise contextualisée",
    "png": {
      "path": "png/frame-161-288.png",
      "sha256": "c13dc85e1bc311b9f7e9bc96d0c230be616cf39d7e0e83bdd087300d5bd87b09",
      "bytes": 83697
    },
    "geometry": {
      "w": 1680,
      "h": 970
    },
    "family": "nora_resume"
  },
  {
    "frameId": "241:385",
    "status": "PNG_SOURCE_VERIFIED",
    "name": "Document — inspection des révisions",
    "png": {
      "path": "png/frame-241-385.png",
      "sha256": "108da26a93fd8384bf6ffaf3fb6fbce163afe753952b4e80a24b35b0c6c67d48",
      "bytes": 86023
    },
    "geometry": {
      "w": 1680,
      "h": 970
    },
    "family": "document_revisions"
  },
  {
    "frameId": "282:468",
    "status": "PNG_SOURCE_VERIFIED",
    "name": "Nora — travail en cours à 390 px",
    "png": {
      "path": "png/frame-282-468.png",
      "sha256": "30033b1a54b5f6de8c6b7168c9892d902b48c73e0964146fa1517cf0b6f32986",
      "bytes": 39859
    },
    "geometry": {
      "w": 390,
      "h": 1350
    },
    "family": "mobile_board"
  },
  {
    "frameId": "282:492",
    "status": "PNG_SOURCE_VERIFIED",
    "name": "Nora — interruption et reprise à 390 px",
    "png": {
      "path": "png/frame-282-492.png",
      "sha256": "e773eefe7a6e02e4500ae224b6bf5e61b693a146d4e90cca2fa9bee6de1d9cc8",
      "bytes": 39320
    },
    "geometry": {
      "w": 390,
      "h": 1350
    },
    "family": "mobile_board"
  }
]

```

## Extrait raw — shell.rail.personnel (nodes[0:4])
```json

{
  "family": "shell.rail.personnel",
  "rootId": "94:51",
  "nodeCount": 26,
  "nodes": [
    {
      "id": "94:51",
      "n": "Barre latérale produit",
      "t": "FRAME",
      "p": "94:50",
      "pc": 11,
      "x": 0,
      "y": 0,
      "w": 246,
      "h": 970,
      "lm": "VERTICAL",
      "sh": "FIXED",
      "sv": "FIXED",
      "g": 10,
      "pad": [
        20,
        19,
        0,
        19
      ],
      "clips": 1,
      "r": 0,
      "f": "#0c101a"
    },
    {
      "id": "94:52",
      "n": "Marque SFIA Studio",
      "t": "FRAME",
      "p": "94:51",
      "pc": 2,
      "x": 19,
      "y": 20,
      "w": 203,
      "h": 43,
      "lm": "HORIZONTAL",
      "sh": "FIXED",
      "sv": "FIXED",
      "g": 9,
      "pad": [
        0,
        0,
        0,
        0
      ],
      "clips": 1,
      "r": 0,
      "f": "#0c101a"
    },
    {
      "id": "94:53",
      "n": "Monogramme S",
      "t": "FRAME",
      "p": "94:52",
      "pc": 1,
      "x": 0,
      "y": 5.5,
      "w": 32,
      "h": 32,
      "lm": "VERTICAL",
      "sh": "FIXED",
      "sv": "FIXED",
      "pad": [
        5,
        0,
        0,
        10
      ],
      "clips": 1,
      "r": 8,
      "f": "#2b2e59"
    },
    {
      "id": "94:54",
      "n": "S",
      "t": "TEXT",
      "p": "94:53",
      "pc": 0,
      "x": 10,
      "y": 5,
      "w": 20,
      "h": 21,
      "f": "#f4f6fc",
      "ff": "Inter",
      "fst": "Bold",
      "fw": 700,
      "fs": 15,
      "lh": 21,
      "ch": "S"
    }
  ]
}

```

## Extrait raw — nora.workzone.03 (nodes[0:3])
```json

{
  "family": "nora.workzone.03",
  "rootId": "94:249",
  "nodeCount": 44,
  "nodes": [
    {
      "id": "94:249",
      "n": "Zone de travail conversationnel",
      "t": "FRAME",
      "p": null,
      "pc": 2,
      "x": 3780,
      "y": 0,
      "w": 1440,
      "h": 970,
      "lm": "VERTICAL"
    },
    {
      "id": "94:250",
      "n": "Barre produit et projet",
      "t": "FRAME",
      "p": "94:249",
      "pc": 2,
      "x": 3780,
      "y": 0,
      "w": 1440,
      "h": 61,
      "lm": "HORIZONTAL"
    },
    {
      "id": "94:251",
      "n": "SFIA Studio  /  Projet Atlas",
      "t": "TEXT",
      "p": "94:250",
      "pc": 0,
      "x": 3810,
      "y": 22,
      "w": 1040,
      "h": 18,
      "sh": "SFIA Studio  /  Projet Atlas"
    }
  ]
}

```

## Extrait raw — document.workspace.04 (nodes[0:3])
```json

{
  "family": "document.workspace.04",
  "rootId": "94:419",
  "nodeCount": 31,
  "nodes": [
    {
      "id": "94:419",
      "n": "Projet / contenu",
      "t": "FRAME",
      "p": null,
      "pc": 2,
      "x": 5554,
      "y": 0,
      "w": 1436,
      "h": 970,
      "lm": "VERTICAL"
    },
    {
      "id": "94:420",
      "n": "Contexte projet et activité",
      "t": "FRAME",
      "p": "94:419",
      "pc": 5,
      "x": 5554,
      "y": 0,
      "w": 1436,
      "h": 54,
      "lm": "HORIZONTAL"
    },
    {
      "id": "94:421",
      "n": "Projet Atlas",
      "t": "TEXT",
      "p": "94:420",
      "pc": 0,
      "x": 5580,
      "y": 18,
      "w": 135,
      "h": 19,
      "sh": "Projet Atlas"
    }
  ]
}

```

## Couverture CU/UXC (schéma)
```json

{
  "schema": "sfia-next-g2-coverage/v1",
  "cuKeys": [
    "CU-01",
    "CU-02",
    "CU-03",
    "CU-04",
    "CU-05",
    "CU-06",
    "CU-07",
    "CU-08",
    "CU-09",
    "CU-10",
    "CU-11",
    "CU-12",
    "CU-13",
    "CU-14",
    "CU-15",
    "CU-16"
  ],
  "uxcKeys": [
    "UXC-01",
    "UXC-02",
    "UXC-03",
    "UXC-04",
    "UXC-05",
    "UXC-06",
    "UXC-07",
    "UXC-08",
    "UXC-09",
    "UXC-10",
    "UXC-11",
    "UXC-12",
    "UXC-13",
    "UXC-14"
  ]
}

```

## Qualifications / réserves non bloquantes
- **206–208:** shell isomorphic to frame 03 (rail 240 + workzone); content-state deltas in `deltas-nora-206-208.json`; no new PNG. EQUIVALENT_DOCUMENTED.
- **28/32/33/41:** shell structure same family as projet rail; structure in `negatives-28-32-33-41.json`; G5 for behavioral content.
- **Mobile 216/217:** boards **390×1350** Figma; **no Figma 320** inventé.
- **ML4 218–235 / D8 frame 19 / Sources Git labels:** OUT_OF_SCOPE functional.
- **Typography:** Inter OBSERVED; no font files distributed; some mixed segments depth-capped (non-blocking).
- **Figma version id:** NOT AVAILABLE.

## Fichiers pack (créés/modifiés ce cycle)
- `g2-source/manifests/raw/*.json`
- `g2-source/manifests/component-nodes-l2.json` + `.sha256`
- `g2-source/manifests/l2-manifest.json` + `.sha256`
- `g2-source/coverage/cu-uxc-coverage.json` + matrix.md
- `g2-source/scripts/verify-g2-pack.sh` (INTEGRITY + SEMANTIC)
- `g2-source/scripts/build-g2-l2-complement.py`
- `g2-source/CONTROL-REPORT.md`, `README.md`
- PNG / indexes: **préservés inchangés**

## Anti-claims
Aucune preuve BROWSER / REAL product / LIVE Nora / E2E / STABLE / ADOPTED. Aucun code UI/API/test/DB. Aucun commit/push projet. Aucun G2 PASSED / G4 autorisé.

## Instruction ChatGPT
1. Relire ce handoff depuis Git distant (`sfia/review-handoff` / `sfia-review-handoff/latest-chatgpt-review.md`) après publication.
2. Comparer au tip `80f328e1` / blob `a60a226f`.
3. Vérifier manifeste L2, component-nodes, digests PNG (octets déjà transmis chat), matrice, verify INTEGRITY+SEMANTIC.
4. Décider soumission G2 à Morris. **Pas de GO UI implicite.**

## Terminus
**STOP.** Macro-lot convergence inchangé. Prochaine décision humaine après revue ChatGPT uniquement.
