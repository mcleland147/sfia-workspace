# SFIA Review Pack FULL — G2-Source Figma preflight (Next UX convergence)
**Date / fuseau :** 2026-11-07 · Europe/Paris
**Cycle :** 8 Delivery / G2-Source pré-build + contrôles 9 QA intégrés
**Profil :** CRITICAL · EVOL · QA Critical
**GO Morris :** G2 acquisition Figma ONLY (2026-11-07) — **NO UI CODE** · **NO project push/PR**
**Handoff L3 :** required / publish-in-cycle (canonical only)

> **Instruction ChatGPT obligatoire :** lire `sfia/review-handoff:sfia-review-handoff/latest-chatgpt-review.md` **depuis Git distant**, vérifier cycle/SHA/base/branche, contenu exploitable, preuves et réserves. Les octets PNG locaux **ne sont pas** accessibles via un SHA raconté — demander transmission du pack `g2-source/` si revue visuelle indépendante requise. En absence/incomplétude : `REVIEW HANDOFF INCOMPLETE — …`.

---

## 0. Verdict

`G2-SOURCE CANDIDATE — READY FOR CHATGPT/MORRIS REVIEW — NO UI CODE`

Gates : **G1 VALIDATED SPEC** · **G2 CANDIDATE (this pack)** · **G3 A1+A2 VALIDATED SPEC** · **G4 NO CODE GO** · **G5 NOT RUN**

**STOP AVANT CODE.** Suite = revue ChatGPT + décision Morris G2, puis GO construction distinct.

---

## 1. GO réel et frontières

**Autorisé :** lecture Figma native · DIP local sous `…/g2-source/` · Review Pack · handoff L3 `sfia/review-handoff`.

**Interdit (respecté) :** `web/src/**` · tests · API · CSS · DB · CI · secrets · Figma write · commit/push projet · PR · RECETTE/STABLE · A1/A2 code · runtime proofs.

---

## 2. Git Review Index

| Champ | Valeur |
|---|---|
| Repo | `mcleland147/sfia-workspace` |
| Worktree G2 | `/Users/morris/Projects/sfia-workspace-next-g2-figma-evidence` |
| Branche locale | `feat/next-convergence-ux-g2-figma-evidence` (**non poussée**) |
| HEAD / base | `f0d59bc8f72ed8544ac4c82dfa9ac0f23889c03e` = `origin/main` baseline **`f0d59bc8…` MATCH** |
| ENV-01 blob | `14b61f0d1265cf85fcca09b028dd09bd8c71597f` (attendu) |
| versioning blob | `8bc93e0fafac0f981c446e978a37f5f93d183875` (attendu) |
| Status | dirty : `.tmp-sfia-review` + untracked `g2-source/` only |
| Runtime | **none started** · NO RELEASE · STABLE N/A · RECETTE N/A for this work |

```
 M .tmp-sfia-review/chatgpt-review.md
?? projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/

```

Prior ML3 worktree restored on `sfia/next-ml3-rct02-live-remediation` (separate).

---

## 3. Source Figma

| Champ | Valeur |
|---|---|
| fileKey | `itgvCulInEnFY6DvgIegvP` |
| page | `94:49` — Parcours produit — Référence UX R3 |
| Auth | Morris Cleland / m.cleland@live.fr (whoami) |
| Version Figma | **NOT AVAILABLE** |
| Session | `98803bb0-2085-43a8-9788-96779041817f` |
| Export method | `download_assets` PNG scale 1 → curl archive local → SHA-256 double-read |
| L2 method | `use_figma` read-only Plugin API (F1 rails + children samples) |
| Metadata | `get_metadata` page tree — all target IDs FOUND |

---

## 4. Inventaire PNG (index)

| frameId | screen | path | bytes | dims | sha256 |
|---|---|---|---:|---|---|
| `94:50` | 01 | `png/frame-94-50.png` | 88388 | 1680x970 | `0f4f7c19ea2833475b1f4894fc2ae83203ab5c57b91e1adfa767a666e4a0f5fc` |
| `94:135` | 02 | `png/frame-94-135.png` | 108291 | 1680x970 | `582eb5f8429fdf516f185ed35733e5f3ea40b714fe2f06889d030a95bf58311c` |
| `94:214` | 03 | `png/frame-94-214.png` | 145783 | 1680x970 | `32872657774b3760c2bee9d739fcb51668ee9a12e3d2d2261486a9042418bb6e` |
| `94:370` | 04 | `png/frame-94-370.png` | 141532 | 1680x970 | `e6ce9258b81b268245eb0564c214912e6392f2414b033d1faa01e4a632b1fe7e` |
| `94:515` | 05 | `png/frame-94-515.png` | 108829 | 1680x970 | `4da68bdbf85eaa242b116b0a422407c0543a53cd115d3ebbab49cda7c07e0bd3` |
| `97:359` | 18 | `png/frame-97-359.png` | 142099 | 1680x970 | `2dff54ce935258d509e47922d2ab987e928b6486bfee4ba65169d8832b149f5f` |
| `125:33` | 22 | `png/frame-125-33.png` | 85548 | 1680x970 | `889f097901d6122dfa52b071697f8217c353f8581fc040d328044324699b4cde` |
| `127:106` | 24 | `png/frame-127-106.png` | 84715 | 1680x970 | `4eb55f8914b5b46cfde25f32078770eab2fc862077a0e23bc1afd87612e5959b` |
| `129:72` | 40 | `png/frame-129-72.png` | 88857 | 1680x970 | `b761126c61a95d65c86f0d25e57b3c32bff0a491f90e0ec3f03ae9c3b0d0dcd1` |
| `158:264` | 64 | `png/frame-158-264.png` | 74363 | 1680x970 | `5b21d74062a8b4f5e421fb5257b67e91bc997f563891e678291ad2394adb0487` |
| `158:336` | 65 | `png/frame-158-336.png` | 75179 | 1680x970 | `9f219843edb95b712bfac0f8a60c334c1b9f2fae5d6e0cb1a306a1ef968eddb0` |
| `158:912` | 73 | `png/frame-158-912.png` | 74008 | 1680x970 | `0c1c9c0d7a2daaae46a1cecfefdf2a30d97ddd1bc9c502d7148f823834cf3a9e` |
| `159:145` | 74 | `png/frame-159-145.png` | 71340 | 1680x970 | `4c0e342fbb1acace7ca719f79ac3d007946d387424958ed1278d901ee12dc824` |
| `160:175` | 89 | `png/frame-160-175.png` | 85339 | 1680x970 | `b989f45746b768834b8249ec09cc243fef817fdfa0c9c5de7f65a06e3d50ce59` |
| `160:391` | 92 | `png/frame-160-391.png` | 83405 | 1680x970 | `167aaa9388271488754b94e668f3a1508a29fc47638e000ff4d6309464b45294` |
| `161:216` | 109 | `png/frame-161-216.png` | 86887 | 1680x970 | `7c450ff2fc9b4f563e70d313da873c8db83b7c66bf013d6558647b7b30a1ceae` |
| `161:288` | 110 | `png/frame-161-288.png` | 83697 | 1680x970 | `c13dc85e1bc311b9f7e9bc96d0c230be616cf39d7e0e83bdd087300d5bd87b09` |
| `241:385` | 205 | `png/frame-241-385.png` | 86023 | 1680x970 | `108da26a93fd8384bf6ffaf3fb6fbce163afe753952b4e80a24b35b0c6c67d48` |
| `282:468` | 216 | `png/frame-282-468.png` | 39859 | 390x1350 | `30033b1a54b5f6de8c6b7168c9892d902b48c73e0964146fa1517cf0b6f32986` |
| `282:492` | 217 | `png/frame-282-492.png` | 39320 | 390x1350 | `e773eefe7a6e02e4500ae224b6bf5e61b693a146d4e90cca2fa9bee6de1d9cc8` |

Sidecar index SHA-256 : `e0cd9403525b24782cb1d82af1d92993485853363ed33ea18c1e9bd1cda28565  png-export-index.json`

---

## 5. Documents créés — contenu intégral

### 5.1 CONTROL-REPORT.md

```markdown
# G2-Source Control Report — 2026-11-07

**Verdict candidate :** `G2-SOURCE CANDIDATE — READY FOR CHATGPT/MORRIS REVIEW — NO UI CODE`

## Provenance
- Repo: mcleland147/sfia-workspace
- Worktree: /Users/morris/Projects/sfia-workspace-next-g2-figma-evidence
- Branch (local only, **not pushed**): `feat/next-convergence-ux-g2-figma-evidence`
- Git SHA: `f0d59bc8f72ed8544ac4c82dfa9ac0f23889c03e` (= origin/main baseline `f0d59bc8…`)
- Figma fileKey: `itgvCulInEnFY6DvgIegvP` page `94:49`
- Figma auth: Morris Cleland (m.cleland@live.fr) via MCP whoami
- Figma version id: **NOT AVAILABLE**
- Tools: plugin-figma-figma `create_session`, `get_metadata`, `download_assets` (PNG), `use_figma` (read-only L2 rails)

## Pack layout
```
g2-source/
  png/                     # 20 authentic Figma PNG exports
  indexes/png-export-index.json[+.sha256]
  indexes/png-files.sha256
  manifests/l2-manifest.json[+.sha256]
  coverage/cu-uxc-coverage-matrix.md
  coverage/cu-uxc-coverage.json
  scripts/verify-g2-pack.sh
  CONTROL-REPORT.md
```

## Automated verification
```
G2 pack verify @ /Users/morris/Projects/sfia-workspace-next-g2-figma-evidence/projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source
OK sidecar png-export-index.json
OK sidecar l2-manifest.json
OK png/frame-94-50.png
OK png/frame-94-135.png
OK png/frame-94-214.png
OK png/frame-94-370.png
OK png/frame-94-515.png
OK png/frame-97-359.png
OK png/frame-125-33.png
OK png/frame-127-106.png
OK png/frame-129-72.png
OK png/frame-158-264.png
OK png/frame-158-336.png
OK png/frame-158-912.png
OK png/frame-159-145.png
OK png/frame-160-175.png
OK png/frame-160-391.png
OK png/frame-161-216.png
OK png/frame-161-288.png
OK png/frame-241-385.png
OK png/frame-282-468.png
OK png/frame-282-492.png
VERIFY PASS
```

## F1 four variants (native)
| Variant | node | w | fill | pad | gap |
|---|---|---:|---|---|---:|
| personnel | 94:51 | 246 | #0C101A | 20/19/0/19 | 10 |
| conversation | 94:215 | 240 | #0D111B | 25/19/0/19 | 13 |
| projet | 160:176 | 246 | #0C1020 | 24/24/24/24 | 13 |
| inspection | 94:372 | 244 | #0C101A | 23/19/22/19 | 11 |

## Limits / residuals
- Micro-states 206–208 not separately PNG-exported
- Pilotage négative variants 28/32/33/41 not separately PNG-exported
- Deep mixed-typography segments not exhaustively listed beyond rail children samples
- Mobile 216/217 = planches 390×1350 ≠ viewport; no native Figma 320
- Frame 19 / ML4 218–235 OUT_OF_SCOPE
- ChatGPT cannot see local PNG bytes via handoff SHA alone — transmit pack as attachment under Morris channel

## Gates
- G1 VALIDATED SPEC
- G2 SOURCE CANDIDATE (this pack) — awaiting ChatGPT/Morris review
- G3 A1+A2 VALIDATED SPEC
- G4 NO CODE GO
- G5 NOT RUN

## Non-claims
No UI code · no runtime · no FAKE/BROWSER/REAL product proof · no STABLE · no ADOPTED · no project push/PR

```

### 5.2 indexes/png-export-index.json

```json
{
  "schema": "sfia-next-g2-png-index/v1",
  "figmaFileKey": "itgvCulInEnFY6DvgIegvP",
  "pageId": "94:49",
  "pageName": "01 · Parcours produit — Référence UX R3",
  "gitSourceSha": "f0d59bc8f72ed8544ac4c82dfa9ac0f23889c03e",
  "capturedAtUtc": "2026-11-07T18:24:46Z",
  "figmaVersion": "NOT AVAILABLE",
  "authenticity": "Figma MCP download_assets export PNG archived locally; not synthetic",
  "exports": [
    {
      "frameId": "94:50",
      "path": "png/frame-94-50.png",
      "bytes": 88388,
      "sha256": "0f4f7c19ea2833475b1f4894fc2ae83203ab5c57b91e1adfa767a666e4a0f5fc",
      "width": 1680,
      "height": 970,
      "dims": "1680x970",
      "expectedDims": "1680x970",
      "dimsMatchNative": true,
      "uiState": "Portefeuille et choix du projet",
      "fixtureId": "figma-native-01",
      "screenNumber": "01",
      "priority": "P0",
      "family": "shell_F1_personnel",
      "cu": [
        "CU-02",
        "CU-09",
        "CU-15"
      ],
      "uxc": [
        "UXC-02",
        "UXC-13"
      ],
      "provenance": {
        "figmaFileKey": "itgvCulInEnFY6DvgIegvP",
        "pageId": "94:49",
        "frameId": "94:50",
        "exportTool": "plugin-figma-figma/download_assets",
        "format": "png",
        "defaultScale": 1,
        "gitSourceSha": "f0d59bc8f72ed8544ac4c82dfa9ac0f23889c03e",
        "capturedAtUtc": "2026-11-07T18:24:46Z",
        "figmaVersion": "NOT AVAILABLE"
      }
    },
    {
      "frameId": "94:135",
      "path": "png/frame-94-135.png",
      "bytes": 108291,
      "sha256": "582eb5f8429fdf516f185ed35733e5f3ea40b714fe2f06889d030a95bf58311c",
      "width": 1680,
      "height": 970,
      "dims": "1680x970",
      "expectedDims": "1680x970",
      "dimsMatchNative": true,
      "uiState": "Sas — conversation avant projet",
      "fixtureId": "figma-native-02",
      "screenNumber": "02",
      "priority": "P0",
      "family": "sas_nora",
      "cu": [
        "CU-04",
        "CU-05"
      ],
      "uxc": [
        "UXC-03",
        "UXC-04"
      ],
      "provenance": {
        "figmaFileKey": "itgvCulInEnFY6DvgIegvP",
        "pageId": "94:49",
        "frameId": "94:135",
        "exportTool": "plugin-figma-figma/download_assets",
        "format": "png",
        "defaultScale": 1,
        "gitSourceSha": "f0d59bc8f72ed8544ac4c82dfa9ac0f23889c03e",
        "capturedAtUtc": "2026-11-07T18:24:46Z",
        "figmaVersion": "NOT AVAILABLE"
      }
    },
    {
      "frameId": "94:214",
      "path": "png/frame-94-214.png",
      "bytes": 145783,
      "sha256": "32872657774b3760c2bee9d739fcb51668ee9a12e3d2d2261486a9042418bb6e",
      "width": 1680,
      "height": 970,
      "dims": "1680x970",
      "expectedDims": "1680x970",
      "dimsMatchNative": true,
      "uiState": "Nora — conversation longue",
      "fixtureId": "figma-native-03",
      "screenNumber": "03",
      "priority": "P0",
      "family": "shell_F1_conversation",
      "cu": [
        "CU-04",
        "CU-05",
        "CU-06",
        "CU-09"
      ],
      "uxc": [
        "UXC-03",
        "UXC-04",
        "UXC-05",
        "UXC-13"
      ],
      "provenance": {
        "figmaFileKey": "itgvCulInEnFY6DvgIegvP",
        "pageId": "94:49",
        "frameId": "94:214",
        "exportTool": "plugin-figma-figma/download_assets",
        "format": "png",
        "defaultScale": 1,
        "gitSourceSha": "f0d59bc8f72ed8544ac4c82dfa9ac0f23889c03e",
        "capturedAtUtc": "2026-11-07T18:24:46Z",
        "figmaVersion": "NOT AVAILABLE"
      }
    },
    {
      "frameId": "94:370",
      "path": "png/frame-94-370.png",
      "bytes": 141532,
      "sha256": "e6ce9258b81b268245eb0564c214912e6392f2414b033d1faa01e4a632b1fe7e",
      "width": 1680,
      "height": 970,
      "dims": "1680x970",
      "expectedDims": "1680x970",
      "dimsMatchNative": true,
      "uiState": "Document Nora — consultation",
      "fixtureId": "figma-native-04",
      "screenNumber": "04",
      "priority": "P0",
      "family": "shell_F1_inspection",
      "cu": [
        "CU-07",
        "CU-09",
        "CU-14"
      ],
      "uxc": [
        "UXC-06",
        "UXC-13"
      ],
      "provenance": {
        "figmaFileKey": "itgvCulInEnFY6DvgIegvP",
        "pageId": "94:49",
        "frameId": "94:370",
        "exportTool": "plugin-figma-figma/download_assets",
        "format": "png",
        "defaultScale": 1,
        "gitSourceSha": "f0d59bc8f72ed8544ac4c82dfa9ac0f23889c03e",
        "capturedAtUtc": "2026-11-07T18:24:46Z",
        "figmaVersion": "NOT AVAILABLE"
      }
    },
    {
      "frameId": "94:515",
      "path": "png/frame-94-515.png",
      "bytes": 108829,
      "sha256": "4da68bdbf85eaa242b116b0a422407c0543a53cd115d3ebbab49cda7c07e0bd3",
      "width": 1680,
      "height": 970,
      "dims": "1680x970",
      "expectedDims": "1680x970",
      "dimsMatchNative": true,
      "uiState": "Journal — sujets et décisions",
      "fixtureId": "figma-native-05",
      "screenNumber": "05",
      "priority": "P1",
      "family": "journal_d4",
      "cu": [
        "CU-08"
      ],
      "uxc": [
        "UXC-07"
      ],
      "provenance": {
        "figmaFileKey": "itgvCulInEnFY6DvgIegvP",
        "pageId": "94:49",
        "frameId": "94:515",
        "exportTool": "plugin-figma-figma/download_assets",
        "format": "png",
        "defaultScale": 1,
        "gitSourceSha": "f0d59bc8f72ed8544ac4c82dfa9ac0f23889c03e",
        "capturedAtUtc": "2026-11-07T18:24:46Z",
        "figmaVersion": "NOT AVAILABLE"
      }
    },
    {
      "frameId": "97:359",
      "path": "png/frame-97-359.png",
      "bytes": 142099,
      "sha256": "2dff54ce935258d509e47922d2ab987e928b6486bfee4ba65169d8832b149f5f",
      "width": 1680,
      "height": 970,
      "dims": "1680x970",
      "expectedDims": "1680x970",
      "dimsMatchNative": true,
      "uiState": "Document Nora — révision guidée",
      "fixtureId": "figma-native-18",
      "screenNumber": "18",
      "priority": "P0",
      "family": "document_d4",
      "cu": [
        "CU-07",
        "CU-14"
      ],
      "uxc": [
        "UXC-06",
        "UXC-11"
      ],
      "provenance": {
        "figmaFileKey": "itgvCulInEnFY6DvgIegvP",
        "pageId": "94:49",
        "frameId": "97:359",
        "exportTool": "plugin-figma-figma/download_assets",
        "format": "png",
        "defaultScale": 1,
        "gitSourceSha": "f0d59bc8f72ed8544ac4c82dfa9ac0f23889c03e",
        "capturedAtUtc": "2026-11-07T18:24:46Z",
        "figmaVersion": "NOT AVAILABLE"
      }
    },
    {
      "frameId": "125:33",
      "path": "png/frame-125-33.png",
      "bytes": 85548,
      "sha256": "889f097901d6122dfa52b071697f8217c353f8581fc040d328044324699b4cde",
      "width": 1680,
      "height": 970,
      "dims": "1680x970",
      "expectedDims": "1680x970",
      "dimsMatchNative": true,
      "uiState": "Trajectoire — sans cycle actif",
      "fixtureId": "figma-native-22",
      "screenNumber": "22",
      "priority": "P1",
      "family": "pilotage_d5",
      "cu": [
        "CU-10",
        "CU-11"
      ],
      "uxc": [
        "UXC-08"
      ],
      "provenance": {
        "figmaFileKey": "itgvCulInEnFY6DvgIegvP",
        "pageId": "94:49",
        "frameId": "125:33",
        "exportTool": "plugin-figma-figma/download_assets",
        "format": "png",
        "defaultScale": 1,
        "gitSourceSha": "f0d59bc8f72ed8544ac4c82dfa9ac0f23889c03e",
        "capturedAtUtc": "2026-11-07T18:24:46Z",
        "figmaVersion": "NOT AVAILABLE"
      }
    },
    {
      "frameId": "127:106",
      "path": "png/frame-127-106.png",
      "bytes": 84715,
      "sha256": "4eb55f8914b5b46cfde25f32078770eab2fc862077a0e23bc1afd87612e5959b",
      "width": 1680,
      "height": 970,
      "dims": "1680x970",
      "expectedDims": "1680x970",
      "dimsMatchNative": true,
      "uiState": "Cycle — actif et guidance CKI",
      "fixtureId": "figma-native-24",
      "screenNumber": "24",
      "priority": "P1",
      "family": "pilotage_cki",
      "cu": [
        "CU-10",
        "CU-11",
        "CU-12"
      ],
      "uxc": [
        "UXC-08",
        "UXC-09"
      ],
      "provenance": {
        "figmaFileKey": "itgvCulInEnFY6DvgIegvP",
        "pageId": "94:49",
        "frameId": "127:106",
        "exportTool": "plugin-figma-figma/download_assets",
        "format": "png",
        "defaultScale": 1,
        "gitSourceSha": "f0d59bc8f72ed8544ac4c82dfa9ac0f23889c03e",
        "capturedAtUtc": "2026-11-07T18:24:46Z",
        "figmaVersion": "NOT AVAILABLE"
      }
    },
    {
      "frameId": "129:72",
      "path": "png/frame-129-72.png",
      "bytes": 88857,
      "sha256": "b761126c61a95d65c86f0d25e57b3c32bff0a491f90e0ec3f03ae9c3b0d0dcd1",
      "width": 1680,
      "height": 970,
      "dims": "1680x970",
      "expectedDims": "1680x970",
      "dimsMatchNative": true,
      "uiState": "Journal — décisions",
      "fixtureId": "figma-native-40",
      "screenNumber": "40",
      "priority": "P1",
      "family": "decisions_d6",
      "cu": [
        "CU-12",
        "CU-13"
      ],
      "uxc": [
        "UXC-09",
        "UXC-10"
      ],
      "provenance": {
        "figmaFileKey": "itgvCulInEnFY6DvgIegvP",
        "pageId": "94:49",
        "frameId": "129:72",
        "exportTool": "plugin-figma-figma/download_assets",
        "format": "png",
        "defaultScale": 1,
        "gitSourceSha": "f0d59bc8f72ed8544ac4c82dfa9ac0f23889c03e",
        "capturedAtUtc": "2026-11-07T18:24:46Z",
        "figmaVersion": "NOT AVAILABLE"
      }
    },
    {
      "frameId": "158:264",
      "path": "png/frame-158-264.png",
      "bytes": 74363,
      "sha256": "5b21d74062a8b4f5e421fb5257b67e91bc997f563891e678291ad2394adb0487",
      "width": 1680,
      "height": 970,
      "dims": "1680x970",
      "expectedDims": "1680x970",
      "dimsMatchNative": true,
      "uiState": "Portefeuille — aucun projet",
      "fixtureId": "figma-native-64",
      "screenNumber": "64",
      "priority": "P0",
      "family": "portfolio_empty",
      "cu": [
        "CU-02",
        "CU-03"
      ],
      "uxc": [
        "UXC-02",
        "UXC-11"
      ],
      "provenance": {
        "figmaFileKey": "itgvCulInEnFY6DvgIegvP",
        "pageId": "94:49",
        "frameId": "158:264",
        "exportTool": "plugin-figma-figma/download_assets",
        "format": "png",
        "defaultScale": 1,
        "gitSourceSha": "f0d59bc8f72ed8544ac4c82dfa9ac0f23889c03e",
        "capturedAtUtc": "2026-11-07T18:24:46Z",
        "figmaVersion": "NOT AVAILABLE"
      }
    },
    {
      "frameId": "158:336",
      "path": "png/frame-158-336.png",
      "bytes": 75179,
      "sha256": "9f219843edb95b712bfac0f8a60c334c1b9f2fae5d6e0cb1a306a1ef968eddb0",
      "width": 1680,
      "height": 970,
      "dims": "1680x970",
      "expectedDims": "1680x970",
      "dimsMatchNative": true,
      "uiState": "Portefeuille — liste de projets",
      "fixtureId": "figma-native-65",
      "screenNumber": "65",
      "priority": "P0",
      "family": "portfolio_list",
      "cu": [
        "CU-02",
        "CU-03"
      ],
      "uxc": [
        "UXC-02",
        "UXC-12"
      ],
      "provenance": {
        "figmaFileKey": "itgvCulInEnFY6DvgIegvP",
        "pageId": "94:49",
        "frameId": "158:336",
        "exportTool": "plugin-figma-figma/download_assets",
        "format": "png",
        "defaultScale": 1,
        "gitSourceSha": "f0d59bc8f72ed8544ac4c82dfa9ac0f23889c03e",
        "capturedAtUtc": "2026-11-07T18:24:46Z",
        "figmaVersion": "NOT AVAILABLE"
      }
    },
    {
      "frameId": "158:912",
      "path": "png/frame-158-912.png",
      "bytes": 74008,
      "sha256": "0c1c9c0d7a2daaae46a1cecfefdf2a30d97ddd1bc9c502d7148f823834cf3a9e",
      "width": 1680,
      "height": 970,
      "dims": "1680x970",
      "expectedDims": "1680x970",
      "dimsMatchNative": true,
      "uiState": "Portefeuille — retour sans projet créé",
      "fixtureId": "figma-native-73",
      "screenNumber": "73",
      "priority": "P0",
      "family": "portfolio_return",
      "cu": [
        "CU-02",
        "CU-03"
      ],
      "uxc": [
        "UXC-02",
        "UXC-11"
      ],
      "provenance": {
        "figmaFileKey": "itgvCulInEnFY6DvgIegvP",
        "pageId": "94:49",
        "frameId": "158:912",
        "exportTool": "plugin-figma-figma/download_assets",
        "format": "png",
        "defaultScale": 1,
        "gitSourceSha": "f0d59bc8f72ed8544ac4c82dfa9ac0f23889c03e",
        "capturedAtUtc": "2026-11-07T18:24:46Z",
        "figmaVersion": "NOT AVAILABLE"
      }
    },
    {
      "frameId": "159:145",
      "path": "png/frame-159-145.png",
      "bytes": 71340,
      "sha256": "4c0e342fbb1acace7ca719f79ac3d007946d387424958ed1278d901ee12dc824",
      "width": 1680,
      "height": 970,
      "dims": "1680x970",
      "expectedDims": "1680x970",
      "dimsMatchNative": true,
      "uiState": "Sas — préparation retrouvée",
      "fixtureId": "figma-native-74",
      "screenNumber": "74",
      "priority": "P0",
      "family": "sas_resume",
      "cu": [
        "CU-03",
        "CU-04"
      ],
      "uxc": [
        "UXC-03",
        "UXC-12"
      ],
      "provenance": {
        "figmaFileKey": "itgvCulInEnFY6DvgIegvP",
        "pageId": "94:49",
        "frameId": "159:145",
        "exportTool": "plugin-figma-figma/download_assets",
        "format": "png",
        "defaultScale": 1,
        "gitSourceSha": "f0d59bc8f72ed8544ac4c82dfa9ac0f23889c03e",
        "capturedAtUtc": "2026-11-07T18:24:46Z",
        "figmaVersion": "NOT AVAILABLE"
      }
    },
    {
      "frameId": "160:175",
      "path": "png/frame-160-175.png",
      "bytes": 85339,
      "sha256": "b989f45746b768834b8249ec09cc243fef817fdfa0c9c5de7f65a06e3d50ce59",
      "width": 1680,
      "height": 970,
      "dims": "1680x970",
      "expectedDims": "1680x970",
      "dimsMatchNative": true,
      "uiState": "Documents — bibliothèque du projet",
      "fixtureId": "figma-native-89",
      "screenNumber": "89",
      "priority": "P0",
      "family": "shell_F1_projet",
      "cu": [
        "CU-07",
        "CU-09"
      ],
      "uxc": [
        "UXC-06",
        "UXC-13"
      ],
      "provenance": {
        "figmaFileKey": "itgvCulInEnFY6DvgIegvP",
        "pageId": "94:49",
        "frameId": "160:175",
        "exportTool": "plugin-figma-figma/download_assets",
        "format": "png",
        "defaultScale": 1,
        "gitSourceSha": "f0d59bc8f72ed8544ac4c82dfa9ac0f23889c03e",
        "capturedAtUtc": "2026-11-07T18:24:46Z",
        "figmaVersion": "NOT AVAILABLE"
      }
    },
    {
      "frameId": "160:391",
      "path": "png/frame-160-391.png",
      "bytes": 83405,
      "sha256": "167aaa9388271488754b94e668f3a1508a29fc47638e000ff4d6309464b45294",
      "width": 1680,
      "height": 970,
      "dims": "1680x970",
      "expectedDims": "1680x970",
      "dimsMatchNative": true,
      "uiState": "Document — révision concurrente",
      "fixtureId": "figma-native-92",
      "screenNumber": "92",
      "priority": "P0",
      "family": "document_conflict",
      "cu": [
        "CU-07",
        "CU-14"
      ],
      "uxc": [
        "UXC-06",
        "UXC-11"
      ],
      "provenance": {
        "figmaFileKey": "itgvCulInEnFY6DvgIegvP",
        "pageId": "94:49",
        "frameId": "160:391",
        "exportTool": "plugin-figma-figma/download_assets",
        "format": "png",
        "defaultScale": 1,
        "gitSourceSha": "f0d59bc8f72ed8544ac4c82dfa9ac0f23889c03e",
        "capturedAtUtc": "2026-11-07T18:24:46Z",
        "figmaVersion": "NOT AVAILABLE"
      }
    },
    {
      "frameId": "161:216",
      "path": "png/frame-161-216.png",
      "bytes": 86887,
      "sha256": "7c450ff2fc9b4f563e70d313da873c8db83b7c66bf013d6558647b7b30a1ceae",
      "width": 1680,
      "height": 970,
      "dims": "1680x970",
      "expectedDims": "1680x970",
      "dimsMatchNative": true,
      "uiState": "Nora — première conversation",
      "fixtureId": "figma-native-109",
      "screenNumber": "109",
      "priority": "P0",
      "family": "nora_first",
      "cu": [
        "CU-04",
        "CU-05"
      ],
      "uxc": [
        "UXC-03",
        "UXC-04"
      ],
      "provenance": {
        "figmaFileKey": "itgvCulInEnFY6DvgIegvP",
        "pageId": "94:49",
        "frameId": "161:216",
        "exportTool": "plugin-figma-figma/download_assets",
        "format": "png",
        "defaultScale": 1,
        "gitSourceSha": "f0d59bc8f72ed8544ac4c82dfa9ac0f23889c03e",
        "capturedAtUtc": "2026-11-07T18:24:46Z",
        "figmaVersion": "NOT AVAILABLE"
      }
    },
    {
      "frameId": "161:288",
      "path": "png/frame-161-288.png",
      "bytes": 83697,
      "sha256": "c13dc85e1bc311b9f7e9bc96d0c230be616cf39d7e0e83bdd087300d5bd87b09",
      "width": 1680,
      "height": 970,
      "dims": "1680x970",
      "expectedDims": "1680x970",
      "dimsMatchNative": true,
      "uiState": "Nora — reprise contextualisée",
      "fixtureId": "figma-native-110",
      "screenNumber": "110",
      "priority": "P0",
      "family": "nora_resume",
      "cu": [
        "CU-04",
        "CU-05",
        "CU-06"
      ],
      "uxc": [
        "UXC-03",
        "UXC-05"
      ],
      "provenance": {
        "figmaFileKey": "itgvCulInEnFY6DvgIegvP",
        "pageId": "94:49",
        "frameId": "161:288",
        "exportTool": "plugin-figma-figma/download_assets",
        "format": "png",
        "defaultScale": 1,
        "gitSourceSha": "f0d59bc8f72ed8544ac4c82dfa9ac0f23889c03e",
        "capturedAtUtc": "2026-11-07T18:24:46Z",
        "figmaVersion": "NOT AVAILABLE"
      }
    },
    {
      "frameId": "241:385",
      "path": "png/frame-241-385.png",
      "bytes": 86023,
      "sha256": "108da26a93fd8384bf6ffaf3fb6fbce163afe753952b4e80a24b35b0c6c67d48",
      "width": 1680,
      "height": 970,
      "dims": "1680x970",
      "expectedDims": "1680x970",
      "dimsMatchNative": true,
      "uiState": "Document — inspection des révisions",
      "fixtureId": "figma-native-205",
      "screenNumber": "205",
      "priority": "P0",
      "family": "document_revisions",
      "cu": [
        "CU-07",
        "CU-14"
      ],
      "uxc": [
        "UXC-06",
        "UXC-12"
      ],
      "provenance": {
        "figmaFileKey": "itgvCulInEnFY6DvgIegvP",
        "pageId": "94:49",
        "frameId": "241:385",
        "exportTool": "plugin-figma-figma/download_assets",
        "format": "png",
        "defaultScale": 1,
        "gitSourceSha": "f0d59bc8f72ed8544ac4c82dfa9ac0f23889c03e",
        "capturedAtUtc": "2026-11-07T18:24:46Z",
        "figmaVersion": "NOT AVAILABLE"
      }
    },
    {
      "frameId": "282:468",
      "path": "png/frame-282-468.png",
      "bytes": 39859,
      "sha256": "30033b1a54b5f6de8c6b7168c9892d902b48c73e0964146fa1517cf0b6f32986",
      "width": 390,
      "height": 1350,
      "dims": "390x1350",
      "expectedDims": "390x1350",
      "dimsMatchNative": true,
      "uiState": "Nora — travail en cours à 390 px",
      "fixtureId": "figma-native-216",
      "screenNumber": "216",
      "priority": "P0",
      "family": "mobile_board",
      "cu": [
        "CU-15",
        "CU-16"
      ],
      "uxc": [
        "UXC-13",
        "UXC-14"
      ],
      "provenance": {
        "figmaFileKey": "itgvCulInEnFY6DvgIegvP",
        "pageId": "94:49",
        "frameId": "282:468",
        "exportTool": "plugin-figma-figma/download_assets",
        "format": "png",
        "defaultScale": 1,
        "gitSourceSha": "f0d59bc8f72ed8544ac4c82dfa9ac0f23889c03e",
        "capturedAtUtc": "2026-11-07T18:24:46Z",
        "figmaVersion": "NOT AVAILABLE"
      },
      "note": "BOARD size ≠ runtime viewport 390×844"
    },
    {
      "frameId": "282:492",
      "path": "png/frame-282-492.png",
      "bytes": 39320,
      "sha256": "e773eefe7a6e02e4500ae224b6bf5e61b693a146d4e90cca2fa9bee6de1d9cc8",
      "width": 390,
      "height": 1350,
      "dims": "390x1350",
      "expectedDims": "390x1350",
      "dimsMatchNative": true,
      "uiState": "Nora — interruption et reprise à 390 px",
      "fixtureId": "figma-native-217",
      "screenNumber": "217",
      "priority": "P0",
      "family": "mobile_board",
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
      "provenance": {
        "figmaFileKey": "itgvCulInEnFY6DvgIegvP",
        "pageId": "94:49",
        "frameId": "282:492",
        "exportTool": "plugin-figma-figma/download_assets",
        "format": "png",
        "defaultScale": 1,
        "gitSourceSha": "f0d59bc8f72ed8544ac4c82dfa9ac0f23889c03e",
        "capturedAtUtc": "2026-11-07T18:24:46Z",
        "figmaVersion": "NOT AVAILABLE"
      },
      "note": "BOARD size ≠ runtime viewport 390×844"
    }
  ]
}

```

### 5.3 manifests/l2-manifest.json

```json
{
  "schema": "sfia-next-g2-l2-manifest/v1",
  "status": "CANDIDATE_FOR_REVIEW",
  "figmaFileKey": "itgvCulInEnFY6DvgIegvP",
  "pageId": "94:49",
  "pageName": "01 · Parcours produit — Référence UX R3",
  "gitSourceSha": "f0d59bc8f72ed8544ac4c82dfa9ac0f23889c03e",
  "extractedAtUtc": "2026-11-07T18:25:20Z",
  "figmaVersion": "NOT AVAILABLE",
  "coordinateConvention": "local = node.x/y relative to parent; absolute = absoluteBoundingBox in page space",
  "typographyProvenance": {
    "familyObserved": "Inter",
    "stylesObserved": [
      "Semi Bold (wght 600)",
      "Bold"
    ],
    "licenseNote": "Do NOT distribute font files in this pack. Integrator must bind a licensed/allowed Inter source at build time.",
    "runtimeGap": "globals.css does not currently pin Inter explicitly (known from protocol)."
  },
  "exclusions": [
    {
      "frameId": "100:39",
      "screen": "19",
      "status": "OUT_OF_SCOPE",
      "reason": "D8 inspection visual only — no functional Git/ML4 capability"
    },
    {
      "range": "218-235",
      "status": "OUT_OF_SCOPE",
      "reason": "ML4 Git publication screens — excluded by GO"
    },
    {
      "topic": "D7-D9 GitHub actions",
      "status": "OUT_OF_SCOPE",
      "reason": "Not in G2 convergence tranche"
    },
    {
      "topic": "native Figma 320 viewport",
      "status": "OUT_OF_SCOPE",
      "reason": "No contractual Figma 320 frame; reflow test only at runtime G5"
    }
  ],
  "f1Rails": [
    {
      "componentId": "shell.rail.personnel",
      "status": "COMPLETE_FOR_COMPONENT",
      "variant": "personnel",
      "nodeId": "94:51",
      "frameId": "94:50",
      "name": "Barre latérale produit",
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
      "notes": "Distinct density/color from other F1 variants — not width-only."
    },
    {
      "componentId": "shell.rail.conversation",
      "status": "COMPLETE_FOR_COMPONENT",
      "variant": "conversation",
      "nodeId": "94:215",
      "frameId": "94:214",
      "name": "Rail de projet / stable",
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
      "notes": "Contains visual \"Sources Git\" link — ML4 OUT for functional activation."
    },
    {
      "componentId": "shell.rail.projet",
      "status": "COMPLETE_FOR_COMPONENT",
      "variant": "projet",
      "nodeId": "160:176",
      "frameId": "160:175",
      "name": "Rail / Projet",
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
      "notes": "Typography Inter Semi Bold observed on brand/nav labels."
    },
    {
      "componentId": "shell.rail.inspection",
      "status": "COMPLETE_FOR_COMPONENT",
      "variant": "inspection",
      "nodeId": "94:372",
      "frameId": "94:370",
      "name": "Navigation projet — commune",
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
      "notes": "Frame 19 (100:39) is visual-only D8 OUT — not a functional source for this rail."
    }
  ],
  "frames": [
    {
      "componentId": "frame.01",
      "status": "COMPLETE_FOR_COMPONENT",
      "frameId": "94:50",
      "name": "Portefeuille et choix du projet",
      "geometry": {
        "w": 1680,
        "h": 970
      },
      "png": {
        "path": "png/frame-94-50.png",
        "sha256": "0f4f7c19ea2833475b1f4894fc2ae83203ab5c57b91e1adfa767a666e4a0f5fc",
        "bytes": 88388
      },
      "cu": [
        "CU-02",
        "CU-09",
        "CU-15"
      ],
      "uxc": [
        "UXC-02",
        "UXC-13"
      ],
      "priority": "P0",
      "family": "shell_F1_personnel",
      "limits": [],
      "figmaVersion": "NOT AVAILABLE"
    },
    {
      "componentId": "frame.02",
      "status": "COMPLETE_FOR_COMPONENT",
      "frameId": "94:135",
      "name": "Sas — conversation avant projet",
      "geometry": {
        "w": 1680,
        "h": 970
      },
      "png": {
        "path": "png/frame-94-135.png",
        "sha256": "582eb5f8429fdf516f185ed35733e5f3ea40b714fe2f06889d030a95bf58311c",
        "bytes": 108291
      },
      "cu": [
        "CU-04",
        "CU-05"
      ],
      "uxc": [
        "UXC-03",
        "UXC-04"
      ],
      "priority": "P0",
      "family": "sas_nora",
      "limits": [
        "composer/interrupt micro-states 206-208 not separately exported as PNG (board states may exist elsewhere)"
      ],
      "figmaVersion": "NOT AVAILABLE"
    },
    {
      "componentId": "frame.03",
      "status": "COMPLETE_FOR_COMPONENT",
      "frameId": "94:214",
      "name": "Nora — conversation longue",
      "geometry": {
        "w": 1680,
        "h": 970
      },
      "png": {
        "path": "png/frame-94-214.png",
        "sha256": "32872657774b3760c2bee9d739fcb51668ee9a12e3d2d2261486a9042418bb6e",
        "bytes": 145783
      },
      "cu": [
        "CU-04",
        "CU-05",
        "CU-06",
        "CU-09"
      ],
      "uxc": [
        "UXC-03",
        "UXC-04",
        "UXC-05",
        "UXC-13"
      ],
      "priority": "P0",
      "family": "shell_F1_conversation",
      "limits": [
        "composer/interrupt micro-states 206-208 not separately exported as PNG (board states may exist elsewhere)"
      ],
      "figmaVersion": "NOT AVAILABLE"
    },
    {
      "componentId": "frame.04",
      "status": "COMPLETE_FOR_COMPONENT",
      "frameId": "94:370",
      "name": "Document Nora — consultation",
      "geometry": {
        "w": 1680,
        "h": 970
      },
      "png": {
        "path": "png/frame-94-370.png",
        "sha256": "e6ce9258b81b268245eb0564c214912e6392f2414b033d1faa01e4a632b1fe7e",
        "bytes": 141532
      },
      "cu": [
        "CU-07",
        "CU-09",
        "CU-14"
      ],
      "uxc": [
        "UXC-06",
        "UXC-13"
      ],
      "priority": "P0",
      "family": "shell_F1_inspection",
      "limits": [
        "editor caret / conflict micro-interactions not fully L2-descendant-enumerated beyond frame export"
      ],
      "figmaVersion": "NOT AVAILABLE"
    },
    {
      "componentId": "frame.05",
      "status": "COMPLETE_FOR_COMPONENT",
      "frameId": "94:515",
      "name": "Journal — sujets et décisions",
      "geometry": {
        "w": 1680,
        "h": 970
      },
      "png": {
        "path": "png/frame-94-515.png",
        "sha256": "4da68bdbf85eaa242b116b0a422407c0543a53cd115d3ebbab49cda7c07e0bd3",
        "bytes": 108829
      },
      "cu": [
        "CU-08"
      ],
      "uxc": [
        "UXC-07"
      ],
      "priority": "P1",
      "family": "journal_d4",
      "limits": [],
      "figmaVersion": "NOT AVAILABLE"
    },
    {
      "componentId": "frame.18",
      "status": "COMPLETE_FOR_COMPONENT",
      "frameId": "97:359",
      "name": "Document Nora — révision guidée",
      "geometry": {
        "w": 1680,
        "h": 970
      },
      "png": {
        "path": "png/frame-97-359.png",
        "sha256": "2dff54ce935258d509e47922d2ab987e928b6486bfee4ba65169d8832b149f5f",
        "bytes": 142099
      },
      "cu": [
        "CU-07",
        "CU-14"
      ],
      "uxc": [
        "UXC-06",
        "UXC-11"
      ],
      "priority": "P0",
      "family": "document_d4",
      "limits": [
        "editor caret / conflict micro-interactions not fully L2-descendant-enumerated beyond frame export"
      ],
      "figmaVersion": "NOT AVAILABLE"
    },
    {
      "componentId": "frame.22",
      "status": "COMPLETE_FOR_COMPONENT",
      "frameId": "125:33",
      "name": "Trajectoire — sans cycle actif",
      "geometry": {
        "w": 1680,
        "h": 970
      },
      "png": {
        "path": "png/frame-125-33.png",
        "sha256": "889f097901d6122dfa52b071697f8217c353f8581fc040d328044324699b4cde",
        "bytes": 85548
      },
      "cu": [
        "CU-10",
        "CU-11"
      ],
      "uxc": [
        "UXC-08"
      ],
      "priority": "P1",
      "family": "pilotage_d5",
      "limits": [],
      "figmaVersion": "NOT AVAILABLE"
    },
    {
      "componentId": "frame.24",
      "status": "COMPLETE_FOR_COMPONENT",
      "frameId": "127:106",
      "name": "Cycle — actif et guidance CKI",
      "geometry": {
        "w": 1680,
        "h": 970
      },
      "png": {
        "path": "png/frame-127-106.png",
        "sha256": "4eb55f8914b5b46cfde25f32078770eab2fc862077a0e23bc1afd87612e5959b",
        "bytes": 84715
      },
      "cu": [
        "CU-10",
        "CU-11",
        "CU-12"
      ],
      "uxc": [
        "UXC-08",
        "UXC-09"
      ],
      "priority": "P1",
      "family": "pilotage_cki",
      "limits": [],
      "figmaVersion": "NOT AVAILABLE"
    },
    {
      "componentId": "frame.40",
      "status": "COMPLETE_FOR_COMPONENT",
      "frameId": "129:72",
      "name": "Journal — décisions",
      "geometry": {
        "w": 1680,
        "h": 970
      },
      "png": {
        "path": "png/frame-129-72.png",
        "sha256": "b761126c61a95d65c86f0d25e57b3c32bff0a491f90e0ec3f03ae9c3b0d0dcd1",
        "bytes": 88857
      },
      "cu": [
        "CU-12",
        "CU-13"
      ],
      "uxc": [
        "UXC-09",
        "UXC-10"
      ],
      "priority": "P1",
      "family": "decisions_d6",
      "limits": [],
      "figmaVersion": "NOT AVAILABLE"
    },
    {
      "componentId": "frame.64",
      "status": "COMPLETE_FOR_COMPONENT",
      "frameId": "158:264",
      "name": "Portefeuille — aucun projet",
      "geometry": {
        "w": 1680,
        "h": 970
      },
      "png": {
        "path": "png/frame-158-264.png",
        "sha256": "5b21d74062a8b4f5e421fb5257b67e91bc997f563891e678291ad2394adb0487",
        "bytes": 74363
      },
      "cu": [
        "CU-02",
        "CU-03"
      ],
      "uxc": [
        "UXC-02",
        "UXC-11"
      ],
      "priority": "P0",
      "family": "portfolio_empty",
      "limits": [],
      "figmaVersion": "NOT AVAILABLE"
    },
    {
      "componentId": "frame.65",
      "status": "COMPLETE_FOR_COMPONENT",
      "frameId": "158:336",
      "name": "Portefeuille — liste de projets",
      "geometry": {
        "w": 1680,
        "h": 970
      },
      "png": {
        "path": "png/frame-158-336.png",
        "sha256": "9f219843edb95b712bfac0f8a60c334c1b9f2fae5d6e0cb1a306a1ef968eddb0",
        "bytes": 75179
      },
      "cu": [
        "CU-02",
        "CU-03"
      ],
      "uxc": [
        "UXC-02",
        "UXC-12"
      ],
      "priority": "P0",
      "family": "portfolio_list",
      "limits": [],
      "figmaVersion": "NOT AVAILABLE"
    },
    {
      "componentId": "frame.73",
      "status": "COMPLETE_FOR_COMPONENT",
      "frameId": "158:912",
      "name": "Portefeuille — retour sans projet créé",
      "geometry": {
        "w": 1680,
        "h": 970
      },
      "png": {
        "path": "png/frame-158-912.png",
        "sha256": "0c1c9c0d7a2daaae46a1cecfefdf2a30d97ddd1bc9c502d7148f823834cf3a9e",
        "bytes": 74008
      },
      "cu": [
        "CU-02",
        "CU-03"
      ],
      "uxc": [
        "UXC-02",
        "UXC-11"
      ],
      "priority": "P0",
      "family": "portfolio_return",
      "limits": [],
      "figmaVersion": "NOT AVAILABLE"
    },
    {
      "componentId": "frame.74",
      "status": "COMPLETE_FOR_COMPONENT",
      "frameId": "159:145",
      "name": "Sas — préparation retrouvée",
      "geometry": {
        "w": 1680,
        "h": 970
      },
      "png": {
        "path": "png/frame-159-145.png",
        "sha256": "4c0e342fbb1acace7ca719f79ac3d007946d387424958ed1278d901ee12dc824",
        "bytes": 71340
      },
      "cu": [
        "CU-03",
        "CU-04"
      ],
      "uxc": [
        "UXC-03",
        "UXC-12"
      ],
      "priority": "P0",
      "family": "sas_resume",
      "limits": [
        "composer/interrupt micro-states 206-208 not separately exported as PNG (board states may exist elsewhere)"
      ],
      "figmaVersion": "NOT AVAILABLE"
    },
    {
      "componentId": "frame.89",
      "status": "COMPLETE_FOR_COMPONENT",
      "frameId": "160:175",
      "name": "Documents — bibliothèque du projet",
      "geometry": {
        "w": 1680,
        "h": 970
      },
      "png": {
        "path": "png/frame-160-175.png",
        "sha256": "b989f45746b768834b8249ec09cc243fef817fdfa0c9c5de7f65a06e3d50ce59",
        "bytes": 85339
      },
      "cu": [
        "CU-07",
        "CU-09"
      ],
      "uxc": [
        "UXC-06",
        "UXC-13"
      ],
      "priority": "P0",
      "family": "shell_F1_projet",
      "limits": [],
      "figmaVersion": "NOT AVAILABLE"
    },
    {
      "componentId": "frame.92",
      "status": "COMPLETE_FOR_COMPONENT",
      "frameId": "160:391",
      "name": "Document — révision concurrente",
      "geometry": {
        "w": 1680,
        "h": 970
      },
      "png": {
        "path": "png/frame-160-391.png",
        "sha256": "167aaa9388271488754b94e668f3a1508a29fc47638e000ff4d6309464b45294",
        "bytes": 83405
      },
      "cu": [
        "CU-07",
        "CU-14"
      ],
      "uxc": [
        "UXC-06",
        "UXC-11"
      ],
      "priority": "P0",
      "family": "document_conflict",
      "limits": [
        "editor caret / conflict micro-interactions not fully L2-descendant-enumerated beyond frame export"
      ],
      "figmaVersion": "NOT AVAILABLE"
    },
    {
      "componentId": "frame.109",
      "status": "COMPLETE_FOR_COMPONENT",
      "frameId": "161:216",
      "name": "Nora — première conversation",
      "geometry": {
        "w": 1680,
        "h": 970
      },
      "png": {
        "path": "png/frame-161-216.png",
        "sha256": "7c450ff2fc9b4f563e70d313da873c8db83b7c66bf013d6558647b7b30a1ceae",
        "bytes": 86887
      },
      "cu": [
        "CU-04",
        "CU-05"
      ],
      "uxc": [
        "UXC-03",
        "UXC-04"
      ],
      "priority": "P0",
      "family": "nora_first",
      "limits": [
        "composer/interrupt micro-states 206-208 not separately exported as PNG (board states may exist elsewhere)"
      ],
      "figmaVersion": "NOT AVAILABLE"
    },
    {
      "componentId": "frame.110",
      "status": "COMPLETE_FOR_COMPONENT",
      "frameId": "161:288",
      "name": "Nora — reprise contextualisée",
      "geometry": {
        "w": 1680,
        "h": 970
      },
      "png": {
        "path": "png/frame-161-288.png",
        "sha256": "c13dc85e1bc311b9f7e9bc96d0c230be616cf39d7e0e83bdd087300d5bd87b09",
        "bytes": 83697
      },
      "cu": [
        "CU-04",
        "CU-05",
        "CU-06"
      ],
      "uxc": [
        "UXC-03",
        "UXC-05"
      ],
      "priority": "P0",
      "family": "nora_resume",
      "limits": [
        "composer/interrupt micro-states 206-208 not separately exported as PNG (board states may exist elsewhere)"
      ],
      "figmaVersion": "NOT AVAILABLE"
    },
    {
      "componentId": "frame.205",
      "status": "COMPLETE_FOR_COMPONENT",
      "frameId": "241:385",
      "name": "Document — inspection des révisions",
      "geometry": {
        "w": 1680,
        "h": 970
      },
      "png": {
        "path": "png/frame-241-385.png",
        "sha256": "108da26a93fd8384bf6ffaf3fb6fbce163afe753952b4e80a24b35b0c6c67d48",
        "bytes": 86023
      },
      "cu": [
        "CU-07",
        "CU-14"
      ],
      "uxc": [
        "UXC-06",
        "UXC-12"
      ],
      "priority": "P0",
      "family": "document_revisions",
      "limits": [
        "editor caret / conflict micro-interactions not fully L2-descendant-enumerated beyond frame export"
      ],
      "figmaVersion": "NOT AVAILABLE"
    },
    {
      "componentId": "frame.216",
      "status": "COMPLETE_FOR_COMPONENT",
      "frameId": "282:468",
      "name": "Nora — travail en cours à 390 px",
      "geometry": {
        "w": 390,
        "h": 1350
      },
      "png": {
        "path": "png/frame-282-468.png",
        "sha256": "30033b1a54b5f6de8c6b7168c9892d902b48c73e0964146fa1517cf0b6f32986",
        "bytes": 39859
      },
      "cu": [
        "CU-15",
        "CU-16"
      ],
      "uxc": [
        "UXC-13",
        "UXC-14"
      ],
      "priority": "P0",
      "family": "mobile_board",
      "limits": [
        "mobile board 390×1350 is planche size; runtime viewports 390×844 / 320×568 have no native Figma 320 frame"
      ],
      "figmaVersion": "NOT AVAILABLE"
    },
    {
      "componentId": "frame.217",
      "status": "COMPLETE_FOR_COMPONENT",
      "frameId": "282:492",
      "name": "Nora — interruption et reprise à 390 px",
      "geometry": {
        "w": 390,
        "h": 1350
      },
      "png": {
        "path": "png/frame-282-492.png",
        "sha256": "e773eefe7a6e02e4500ae224b6bf5e61b693a146d4e90cca2fa9bee6de1d9cc8",
        "bytes": 39320
      },
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
      "priority": "P0",
      "family": "mobile_board",
      "limits": [
        "mobile board 390×1350 is planche size; runtime viewports 390×844 / 320×568 have no native Figma 320 frame"
      ],
      "figmaVersion": "NOT AVAILABLE"
    }
  ],
  "pngIndexRef": "indexes/png-export-index.json",
  "priorGitL1": "projects/sfia-studio-next/ux-ui/releves-geometriques-convergence-l1.json",
  "priorGitL2partial": "projects/sfia-studio-next/ux-ui/releves-geometriques-convergence-l2-partiel.json",
  "contradictionsVsPriorGit": [
    {
      "topic": "F1 rail fills/padding",
      "assessment": "Native extraction 2026-11-07 confirms protocol table (246/#0C101A/20-19-0-19/gap10; 240/#0D111B/25-19-0-19/gap13; 246/#0C1020/24-24-24-24/gap13; 244/#0C101A/23-19-22-19/gap11). No silent F1/F2 arbitration required.",
      "status": "ALIGNED"
    }
  ],
  "residualGaps": [
    "Micro-state frames 206-208 (composer wait/error/interrupt) not exported as separate PNGs this cycle — CONVERSATION family covered by 02/03/109/110/216/217",
    "Variants 28/32/33/41 pilotage négatives not individually PNG-exported — P1 covered by 22/24/40",
    "Deep L2 for every text segment/mixed style across all descendants not exhaustively listed; F1 rails include first-level children with typography samples",
    "Figma immutable file version id NOT AVAILABLE via tool"
  ]
}

```

### 5.4 coverage/cu-uxc-coverage-matrix.md

```markdown
# G2 Coverage Matrix — CU / UXC → frames → PNG proofs

Git SHA: `f0d59bc8f72ed8544ac4c82dfa9ac0f23889c03e`
Figma: `itgvCulInEnFY6DvgIegvP` page `94:49`
Captured: `2026-11-07T18:24:46Z`

## CU-01..16

| CU | Frames PNG | Notes |
|---|---|---|
| CU-01 | — | Auth/session entry — behavioral; no dedicated Figma frame in this tranche (covered by shell presence after login) |
| CU-02 | 94:50, 158:264, 158:336, 158:912 |  |
| CU-03 | 158:264, 158:336, 158:912, 159:145 |  |
| CU-04 | 94:135, 94:214, 159:145, 161:216, 161:288 |  |
| CU-05 | 94:135, 94:214, 161:216, 161:288 |  |
| CU-06 | 94:214, 161:288 |  |
| CU-07 | 94:370, 97:359, 160:175, 160:391, 241:385 |  |
| CU-08 | 94:515 |  |
| CU-09 | 94:50, 94:214, 94:370, 160:175 |  |
| CU-10 | 125:33, 127:106 |  |
| CU-11 | 125:33, 127:106 |  |
| CU-12 | 127:106, 129:72 |  |
| CU-13 | 129:72 |  |
| CU-14 | 94:370, 97:359, 160:391, 241:385, 282:492 |  |
| CU-15 | 94:50, 282:468, 282:492 |  |
| CU-16 | 282:468, 282:492 |  |

## UXC-01..14

| UXC | Frames PNG | Notes |
|---|---|---|
| UXC-01 | — | No direct PNG link this cycle — verify against contrat-acceptation before G4 |
| UXC-02 | 94:50, 158:264, 158:336, 158:912 |  |
| UXC-03 | 94:135, 94:214, 159:145, 161:216, 161:288 |  |
| UXC-04 | 94:135, 94:214, 161:216 |  |
| UXC-05 | 94:214, 161:288 |  |
| UXC-06 | 94:370, 97:359, 160:175, 160:391, 241:385 |  |
| UXC-07 | 94:515 |  |
| UXC-08 | 125:33, 127:106 |  |
| UXC-09 | 127:106, 129:72 |  |
| UXC-10 | 129:72 |  |
| UXC-11 | 97:359, 158:264, 158:912, 160:391, 282:492 |  |
| UXC-12 | 158:336, 159:145, 241:385 |  |
| UXC-13 | 94:50, 94:214, 94:370, 160:175, 282:468, 282:492 |  |
| UXC-14 | 282:468, 282:492 |  |

## F1 rails

| Variant | nodeId | width | fill | pad TRBL | gap | status |
|---|---|---:|---|---|---:|---|
| personnel | `94:51` | 246 | `#0C101A` | [20, 19, 0, 19] | 10 | COMPLETE_FOR_COMPONENT |
| conversation | `94:215` | 240 | `#0D111B` | [25, 19, 0, 19] | 13 | COMPLETE_FOR_COMPONENT |
| projet | `160:176` | 246 | `#0C1020` | [24, 24, 24, 24] | 13 | COMPLETE_FOR_COMPONENT |
| inspection | `94:372` | 244 | `#0C101A` | [23, 19, 22, 19] | 11 | COMPLETE_FOR_COMPONENT |

## Exclusions

- **OUT_OF_SCOPE** — 100:39: D8 inspection visual only — no functional Git/ML4 capability
- **OUT_OF_SCOPE** — 218-235: ML4 Git publication screens — excluded by GO
- **OUT_OF_SCOPE** — D7-D9 GitHub actions: Not in G2 convergence tranche
- **OUT_OF_SCOPE** — native Figma 320 viewport: No contractual Figma 320 frame; reflow test only at runtime G5

## Residual gaps

- Micro-state frames 206-208 (composer wait/error/interrupt) not exported as separate PNGs this cycle — CONVERSATION family covered by 02/03/109/110/216/217
- Variants 28/32/33/41 pilotage négatives not individually PNG-exported — P1 covered by 22/24/40
- Deep L2 for every text segment/mixed style across all descendants not exhaustively listed; F1 rails include first-level children with typography samples
- Figma immutable file version id NOT AVAILABLE via tool

```

### 5.5 coverage/cu-uxc-coverage.json

```json
{
  "schema": "sfia-next-g2-coverage/v1",
  "cu": {
    "CU-01": [],
    "CU-02": [
      "94:50",
      "158:264",
      "158:336",
      "158:912"
    ],
    "CU-03": [
      "158:264",
      "158:336",
      "158:912",
      "159:145"
    ],
    "CU-04": [
      "94:135",
      "94:214",
      "159:145",
      "161:216",
      "161:288"
    ],
    "CU-05": [
      "94:135",
      "94:214",
      "161:216",
      "161:288"
    ],
    "CU-06": [
      "94:214",
      "161:288"
    ],
    "CU-07": [
      "94:370",
      "97:359",
      "160:175",
      "160:391",
      "241:385"
    ],
    "CU-08": [
      "94:515"
    ],
    "CU-09": [
      "94:50",
      "94:214",
      "94:370",
      "160:175"
    ],
    "CU-10": [
      "125:33",
      "127:106"
    ],
    "CU-11": [
      "125:33",
      "127:106"
    ],
    "CU-12": [
      "127:106",
      "129:72"
    ],
    "CU-13": [
      "129:72"
    ],
    "CU-14": [
      "94:370",
      "97:359",
      "160:391",
      "241:385",
      "282:492"
    ],
    "CU-15": [
      "94:50",
      "282:468",
      "282:492"
    ],
    "CU-16": [
      "282:468",
      "282:492"
    ]
  },
  "uxc": {
    "UXC-01": [],
    "UXC-02": [
      "94:50",
      "158:264",
      "158:336",
      "158:912"
    ],
    "UXC-03": [
      "94:135",
      "94:214",
      "159:145",
      "161:216",
      "161:288"
    ],
    "UXC-04": [
      "94:135",
      "94:214",
      "161:216"
    ],
    "UXC-05": [
      "94:214",
      "161:288"
    ],
    "UXC-06": [
      "94:370",
      "97:359",
      "160:175",
      "160:391",
      "241:385"
    ],
    "UXC-07": [
      "94:515"
    ],
    "UXC-08": [
      "125:33",
      "127:106"
    ],
    "UXC-09": [
      "127:106",
      "129:72"
    ],
    "UXC-10": [
      "129:72"
    ],
    "UXC-11": [
      "97:359",
      "158:264",
      "158:912",
      "160:391",
      "282:492"
    ],
    "UXC-12": [
      "158:336",
      "159:145",
      "241:385"
    ],
    "UXC-13": [
      "94:50",
      "94:214",
      "94:370",
      "160:175",
      "282:468",
      "282:492"
    ],
    "UXC-14": [
      "282:468",
      "282:492"
    ]
  },
  "f1Complete": true,
  "pngCount": 20,
  "exclusions": [
    {
      "frameId": "100:39",
      "screen": "19",
      "status": "OUT_OF_SCOPE",
      "reason": "D8 inspection visual only — no functional Git/ML4 capability"
    },
    {
      "range": "218-235",
      "status": "OUT_OF_SCOPE",
      "reason": "ML4 Git publication screens — excluded by GO"
    },
    {
      "topic": "D7-D9 GitHub actions",
      "status": "OUT_OF_SCOPE",
      "reason": "Not in G2 convergence tranche"
    },
    {
      "topic": "native Figma 320 viewport",
      "status": "OUT_OF_SCOPE",
      "reason": "No contractual Figma 320 frame; reflow test only at runtime G5"
    }
  ],
  "residualGaps": [
    "Micro-state frames 206-208 (composer wait/error/interrupt) not exported as separate PNGs this cycle — CONVERSATION family covered by 02/03/109/110/216/217",
    "Variants 28/32/33/41 pilotage négatives not individually PNG-exported — P1 covered by 22/24/40",
    "Deep L2 for every text segment/mixed style across all descendants not exhaustively listed; F1 rails include first-level children with typography samples",
    "Figma immutable file version id NOT AVAILABLE via tool"
  ]
}

```

### 5.6 Sidecars

- `indexes/png-export-index.json.sha256` → `e0cd9403525b24782cb1d82af1d92993485853363ed33ea18c1e9bd1cda28565  png-export-index.json`
- `manifests/l2-manifest.json.sha256` → `d95d77d7a7460350d6f9fffab9fb449030ada1663bec01f07f93e541abbaf456  l2-manifest.json`
- `indexes/png-files.sha256` (20 lines) present

---

## 6. Vérification automatique

```
G2 pack verify @ /Users/morris/Projects/sfia-workspace-next-g2-figma-evidence/projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source
OK sidecar png-export-index.json
OK sidecar l2-manifest.json
OK png/frame-94-50.png
OK png/frame-94-135.png
OK png/frame-94-214.png
OK png/frame-94-370.png
OK png/frame-94-515.png
OK png/frame-97-359.png
OK png/frame-125-33.png
OK png/frame-127-106.png
OK png/frame-129-72.png
OK png/frame-158-264.png
OK png/frame-158-336.png
OK png/frame-158-912.png
OK png/frame-159-145.png
OK png/frame-160-175.png
OK png/frame-160-391.png
OK png/frame-161-216.png
OK png/frame-161-288.png
OK png/frame-241-385.png
OK png/frame-282-468.png
OK png/frame-282-492.png
VERIFY PASS

```

Niveaux de preuve : **Figma native REAL source** + **local file digests**. **FAKE/BROWSER/REAL product runtime : NOT CLAIMED.**

---

## 7. Réserves / contradictions / exclusions

- Residual micro-states 206–208 / pilotage 28·32·33·41 not separately PNG'd
- Deep mixed text segments not exhaustive
- Mobile planches ≠ viewports; no Figma 320
- Frame 19 + ML4 218–235 OUT_OF_SCOPE
- Visual "Sources Git" in rails = ML4 OUT functionally
- Prior Git L1/L2 partial **ALIGNED** with native F1 table (no silent F1/F2 arbitration)
- PNG bytes not in handoff — Morris must transmit pack for ChatGPT visual re-check if needed

---

## 8. Décision Morris encore attendue

1. Accepter / refuser **G2-SOURCE** sur ce DIP
2. Si accepté : GO construction G4 distinct (A1/A2 etc.) — **not implied**
3. Canal de transmission du dossier `g2-source/` (attachment) si revue visuelle requise
4. Ne pas merger/pousser la branche preuve sans GO docs séparé

---

## 9. Couverture pack

GO · Git Index · Figma source · PNG index+SHA · JSON/MD intégraux · verify output · réserves · gates · STOP before code — **oui**.
