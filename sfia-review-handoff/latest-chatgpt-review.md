# SFIA Review Pack FULL — G2 coverage closure Figma — 2026-11-07

**Date / fuseau :** 2026-11-07 (Europe/Paris) / pack closed 2026-11-08 ~00:10 local
**GO :** `/Users/morris/Downloads/sfia-next-cursor-g2-cloture-couverture-figma-go-2026-11-07.md` — mandat Morris « ok go »
**Cycle :** 8 Delivery (DIP L2) + 9 QA intégrée · **Profil :** CRITICAL
**Verdict candidat :** `G2-SOURCE CANDIDATE — READY FOR CHATGPT/MORRIS REVIEW — NO UI CODE`

## 1. Git Truth Check (exécuté)

| Check | Résultat |
|---|---|
| pwd / toplevel | `/Users/morris/Projects/sfia-workspace-next-g2-figma-evidence` |
| branch | `feat/next-convergence-ux-g2-figma-evidence` |
| HEAD | `f0d59bc8f72ed8544ac4c82dfa9ac0f23889c03e` |
| origin/main | `f0d59bc8f72ed8544ac4c82dfa9ac0f23889c03e` |
| merge-base HEAD origin/main | `f0d59bc8…` (identique) |
| staged projet / web/** | **aucun** |
| untracked | `g2-source/` local + `.tmp-sfia-review/` (signal) — **pas de commit projet** |

Baseline inchangée vs GO. Pas de `reset --hard` / force-push / PR.

## 2. Sources consultées (blobs GO)

- SEF / roadmap / arbitrages A1–A3 / fidélité F1–F2 (rails 246/240/246/244)
- `protocole-preflight-source-figma.md`, contrats convergence, product-naming
- Prior DIP semantic-gate ZIP SHA `ceb70f09e8a778d2b4c44cef8611461cc6b8f1703c350a864636fe04904986f5`
- Figma `itgvCulInEnFY6DvgIegvP` page `94:49` (lecture native MCP `use_figma` / pull `sfia.g2.pull`)

## 3. État avant → après (12 lacunes)

**Avant (ZIP semantic-gate) :** 11 frames sans composant contenu L2 rattaché + 89 partiel (rail seul).

**Après :** 12 RAW natifs COMPLETE + `screenCoverage` sur 20/20 frames.

| # | Frame | Famille | RAW SHA-256 | Nodes | rootFr.x |
|---:|---|---|---|---:|---:|
| 1 | 94:135 | sas.surface.02 | 99d5d84eeb9460591fd0560f990dfeb6606a865e1327966daff84a608e4e1e33 | 53 | 246 |
| 2 | 97:359 | document.guided.18 | 4b65d7d89eb002c668d2910711237283121902bc1d2c8e2aa4babf73516dd919 | 100 | 244 |
| 3 | 125:33 | page.content.22 | 27407e3349774c6d38cfd5819af97b38ffb75bac5a662fbe0f7ec87408cc830e | 32 | 285 |
| 4 | 127:106 | page.content.24 | ebe3ee03f31cfb269bdc6f1b030d1091bd46da64a24d9ccc785532242365206e | 32 | 285 |
| 5 | 129:72 | page.content.40 | d7a5fd9b6efd32c20bae139e2c04c24ba50edf2f5fa33e4d78986d49e0409302 | 32 | 285 |
| 6 | 158:912 | page.content.73 | ae8715748a693f1a90ca5c35e7a8cc17e34b7f89b5c4baa318d4c14b22d6839d | 32 | 285 |
| 7 | 159:145 | page.content.74 | 7b5120300ea6cf3215e453942d39888a94f9908e9f74030ca2374326f963f801 | 32 | 285 |
| 8 | 160:175 | page.content.89 | 48e34cec07bb83ebeaee638aa8259b4323c9869652f6b33f04946aa3568dd58f | 32 | 285 |
| 9 | 160:391 | page.content.92 | 03f0dc0398e0255360cbd31132387826a976bd9b121708a54e84e1d8f104f2b5 | 32 | 285 |
| 10 | 161:216 | page.content.109 | c87ffe2f89c7e2e4084c3c69768a541ea07e6b1a6b61aa54d32e3a8e11f1501e | 32 | 285 |
| 11 | 161:288 | page.content.110 | dd9086fab55a14bea3274f19748053d9c177d99639f96b38657ed6e05b1330e2 | 32 | 285 |
| 12 | 241:385 | page.content.205 | 4c539aa634e3b6370b9f2245e135c09d01883557c1cd774ff9a04d7f46d7682a | 32 | 285 |

Wire FNV (compact) matched pull-manifest for all 12 before pretty persist. TEXT ff/fs/f complets ; AL g+pad présents.

## 4. Matrice 20 frames (screenCoverage)

| frameId | P | contentComponentId | railComponentId | status |
|---|---|---|---|---|
| 94:50 | P0 | portfolio.content | shell.rail.personnel | DIRECT |
| 94:135 | P0 | sas.surface.02 | shell.rail.personnel | DIRECT |
| 94:214 | P0 | nora.workzone.03 | shell.rail.conversation | DIRECT |
| 94:370 | P0 | document.workspace.04 | shell.rail.inspection | DIRECT |
| 94:515 | P1 | journal.surface.05 | shell.rail.projet | DIRECT |
| 97:359 | P0 | document.guided.18 | shell.rail.inspection | DIRECT |
| 125:33 | P1 | page.content.22 | shell.rail.projet | DIRECT |
| 127:106 | P1 | page.content.24 | shell.rail.projet | DIRECT |
| 129:72 | P1 | page.content.40 | shell.rail.projet | DIRECT |
| 158:264 | P0 | portfolio.empty.64 | shell.rail.personnel | DIRECT |
| 158:336 | P0 | portfolio.list.65 | shell.rail.personnel | DIRECT |
| 158:912 | P0 | page.content.73 | shell.rail.personnel | DIRECT |
| 159:145 | P0 | page.content.74 | shell.rail.personnel | DIRECT |
| 160:175 | P0 | page.content.89 | shell.rail.projet | DIRECT |
| 160:391 | P0 | page.content.92 | shell.rail.projet | DIRECT |
| 161:216 | P0 | page.content.109 | shell.rail.conversation | DIRECT |
| 161:288 | P0 | page.content.110 | shell.rail.conversation | DIRECT |
| 241:385 | P0 | page.content.205 | shell.rail.inspection | DIRECT |
| 282:468 | P0 | mobile.216 | — | DIRECT |
| 282:492 | P0 | mobile.217 | — | DIRECT |

Composants COMPLETE : 24 · EQUIVALENT_DOCUMENTED : 2 (micro.206-208, negatives.pilotage) · **0 UNRESOLVED critique**.

## 5. Fichiers modifiés / créés (pack local)

**Créés (RAW) :** 12 fichiers sous `manifests/raw/` listés §3.
**Modifiés :** `manifests/component-nodes-l2.json`, `manifests/l2-manifest.json` (+ sidecars), `indexes/raw-files.sha256`, `scripts/verify-g2-pack.sh` (required_raw + screenCoverage + B-N6/B-N7), `CONTROL-REPORT.md`.
**PNG :** inchangés (digests = semantic-gate).
**Hors périmètre :** aucun `web/**`, aucun commit projet.

### Sidecars / index (SHA-256 du fichier)

```
b9f81e9924610c7881ed07ec23e06138cf4bf046bee9cac7e9f1959ba4d85f8e  manifests/l2-manifest.json
0fccacfb845662abdf59e0f8acfe9dd00ec774df814f71e484b00caa6eecc019  manifests/component-nodes-l2.json
a377f2bfe1f7b58fce7282cefc2b8fdc222c7a9017779b048fef1a28dd10efde  indexes/png-files.sha256
08e521324e13f7434ec993a0a4dd980f7be105eb55ee8d16b3a0206844426f8e  indexes/raw-files.sha256
```

### Diff conceptuel verify-g2-pack.sh
- `required_raw` : +12 familles couverture
- Règle sémantique `screenCoverage` (échec si absent, rail-only, composant inconnu, statut non COMPLETE/EQUIVALENT, RAW manquant, rail desktop P0/P1 manquant)
- Négatifs resignés **B-N6** (strip screenCoverage sas) et **B-N7** (rail déclaré comme contenu D5)

## 6. Tests — stdout

### Nominal (`bash scripts/verify-g2-pack.sh`) exit 0

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
OK screenCoverage 20/20 frames with native content attachment
SEMANTIC COVERAGE PASS
OK RAW manifests/raw/deltas-nora-206-208.json
OK RAW manifests/raw/document.guided.18.json
OK RAW manifests/raw/document.workspace.04.json
OK RAW manifests/raw/journal.surface.05.json
OK RAW manifests/raw/mobile.216.json
OK RAW manifests/raw/mobile.217.json
OK RAW manifests/raw/negatives-28-32-33-41.json
OK RAW manifests/raw/nora.workzone.03.json
OK RAW manifests/raw/page.content.109.json
OK RAW manifests/raw/page.content.110.json
OK RAW manifests/raw/page.content.205.json
OK RAW manifests/raw/page.content.22.json
OK RAW manifests/raw/page.content.24.json
OK RAW manifests/raw/page.content.40.json
OK RAW manifests/raw/page.content.73.json
OK RAW manifests/raw/page.content.74.json
OK RAW manifests/raw/page.content.89.json
OK RAW manifests/raw/page.content.92.json
OK RAW manifests/raw/portfolio.content.json
OK RAW manifests/raw/portfolio.empty.64.json
OK RAW manifests/raw/portfolio.list.65.json
OK RAW manifests/raw/sas.surface.02.json
OK RAW manifests/raw/shell.rail.conversation.json
OK RAW manifests/raw/shell.rail.inspection.json
OK RAW manifests/raw/shell.rail.personnel.json
OK RAW manifests/raw/shell.rail.projet.json
OK nora v2 nodes=129 text_typo=77/77 rootFr.x=240
RAW INTEGRITY PASS (indexes/raw-files.sha256 + nora v2)
VERIFY PASS

```

### Négatifs (`G2_VERIFY_NEGATIVE_TEST=1`) — extrait final

```
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
resigned sidecar manifests/component-nodes-l2.json 1329f79e9fff088782399f1848513385e806dcd7521f5a3bb22af4f4aa3d02a1
OK negative BN4_desc_count_resigned — verify FAIL as expected (semantic)
resigned manifests/raw/portfolio.content.json 414a201adcecf059ad99d11de43bf685558f1ed182d3674620bdd1392c4abaeb
resigned sidecar manifests/component-nodes-l2.json 9d780de904b9fd781ad2be8cdf4e988a43db3cb40c5fc2f3e940aa39465b22a3
OK negative BN5_false_complete_resigned — verify FAIL as expected (semantic)
resigned sidecar manifests/l2-manifest.json dd32e27b7a0ea4f561616545b3d5e1840ee40f3b367976af64c05ccbb4450f56
OK negative BN6_screen_coverage_resigned — verify FAIL as expected (semantic)
resigned sidecar manifests/l2-manifest.json 37eb5afd8012dcf795cc6723977ae620a4ffc33600886d7c09a25cc7d98b484a
OK negative BN7_rail_as_content_resigned — verify FAIL as expected (semantic)
NEGATIVE TESTS PASS (all corruptions detected; B-N1..B-N7 semantic)
```

Rejeu sur extraction fraîche du ZIP final : VERIFY PASS + NEGATIVE TESTS PASS.

## 7. ZIP final

- Path : `/Users/morris/Downloads/sfia-next-g2-source-coverage-closure-2026-11-07.zip`
- SHA-256 : `99fcab38e95a58046c5e0886177cdc7a53c94243f4d643242cda23014c8a6dcd`
- Exclusions : `.DS_Store`, `scripts/tmp/`, `scripts/embed/`, `manifests/raw/_staging/`, `_*.json`
- PNG 20/20 digests identiques au ZIP semantic-gate `ceb70f09…`

## 8. Réserves / non-claims

- Figma version id NOT AVAILABLE
- CU-01 / UXC-01 = N/A VISUAL — BEHAVIOR G5
- UXC runtime NOT RUN ; F2 navigateur G5 ; pas de GO G4
- Micro 206–208 et négatifs 28/32/33/41 restent EQUIVALENT_DOCUMENTED (deltas natifs), pas des PNG séparés
- `page.content.*` = panneaux Contenu/colonnes (rootFr.x=285) distincts des rails
- Handoff ≠ octets ZIP : ChatGPT doit recevoir l’archive hors bande
- **Pas** G2 VALIDATED / STABLE / ADOPTED / commit projet

## 9. Arbitres attendus

Morris : accepter le candidat G2 couverture, transmettre ZIP à ChatGPT, décider suite G3/G4.
ChatGPT : revue octets ZIP + ce handoff.
Cursor : STOP — pas d’UI.

---
FIN Review Pack FULL — coverage closure
