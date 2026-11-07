# SFIA Review Pack FULL — G2 F1 rails / actions / lh correction — 2026-11-08

**Date / fuseau :** 2026-11-08 (Europe/Paris)
**GO :** `/Users/morris/Downloads/sfia-next-cursor-g2-correction-f1-actions-lh-2026-11-08.md` — mandat Morris « ok go »
**Cycle :** 8 Delivery (DIP L2) + 9 QA · **Profil :** CRITICAL
**Verdict candidat :** `G2-SOURCE CANDIDATE — READY FOR CHATGPT/MORRIS REVIEW — NO UI CODE`

## 1. Git Truth Check

| Check | Résultat |
|---|---|
| toplevel | `/Users/morris/Projects/sfia-workspace-next-g2-figma-evidence` |
| branch | `feat/next-convergence-ux-g2-figma-evidence` |
| HEAD / origin/main / merge-base | `f0d59bc8f72ed8544ac4c82dfa9ac0f23889c03e` |
| staged projet / web/** | aucun |
| untracked | `g2-source/` local + `.tmp-sfia-review/` — pas de commit projet |

Prior handoff tip `3eda1e58` / blob `9c2ed796…`. Prior ZIP coverage-closure `99fcab38…`.

## 2. Sources consultées

- Décisions F1 (246/240/246/244 ; fills distincts) ; protocole preflight Figma ; SEF/roadmap lecture
- Figma native `use_figma` session `7cdcb228-4d6d-497d-8c76-59bb5c51ed47` fileKey `itgvCulInEnFY6DvgIegvP` page `94:49`
- Pack local g2-source (pas de modification `web/**` / governance)

## 3. Écart A — 8 rails avant/après (preuve native)

| frameId | avant | après | railNodeId | w | fill | parent |
|---|---|---|---|---:|---|---|
| 94:515 | shell.rail.projet | shell.rail.personnel | 94:516 | 246 | #0c101a | frame |
| 158:264 | shell.rail.personnel | shell.rail.projet | 158:265 | 246 | #0c1020 | frame |
| 158:336 | shell.rail.personnel | shell.rail.projet | 158:337 | 246 | #0c1020 | frame |
| 158:912 | shell.rail.personnel | shell.rail.projet | 158:913 | 246 | #0c1020 | frame |
| 159:145 | shell.rail.personnel | shell.rail.projet | 159:146 | 246 | #0c1020 | frame |
| 161:216 | shell.rail.conversation | shell.rail.projet | 161:217 | 246 | #0c1020 | frame |
| 161:288 | shell.rail.conversation | shell.rail.projet | 161:289 | 246 | #0c1020 | frame |
| 241:385 | shell.rail.inspection | shell.rail.projet | 241:386 | 246 | #0c1020 | frame |

Tous les écrans desktop portent désormais `screenCoverage.railEvidence` (nodeId/width/fill/variant/provenance). Discriminant personnel vs projet à 246 px = **fill** `#0C101A` vs `#0C1020`. Contre-exemples OK : 01/02 personnel ; 03 conversation 240 ; 04/18 inspection 244 (nested) ; 22/24/40/89/92 projet.

## 4. Écart B — 10 CTA/footer avant/après

Avant : `page.content.*` = Contenu/colonnes seul (32 nodes) — Actions/principales + Pied/note hors extraction.
Après : RAW `page.actions.*` COMPLETE liés via `actionComponentId`.

| frameId | actionId | footerId | primary CTA | nodes |
|---|---|---|---|---:|
| 125:33 | 125:97 | 125:104 | Examiner le cycle proposé | 8 |
| 127:106 | 127:170 | 127:174 | Examiner la maturité | 8 |
| 129:72 | 129:136 | 129:140 | Consulter une décision | 8 |
| 158:912 | 158:976 | 158:980 | Retrouver la préparation | 7 |
| 159:145 | 159:209 | 159:213 | Reprendre avec Nora | 7 |
| 160:175 | 160:239 | 160:243 | Ouvrir la vision | 8 |
| 160:391 | 160:455 | 160:459 | Comparer les versions | 7 |
| 161:216 | 161:280 | 161:284 | Décrire mon idée | 8 |
| 161:288 | 161:352 | 161:356 | Reprendre le sujet | 7 |
| 241:385 | 241:449 | 241:453 | Voir la version courante | 7 |

Fichiers : `manifests/raw/page.actions.{22,24,40,73,74,89,92,109,110,205}.json` (complets dans le ZIP).

## 5. Écart C — 190 lineHeight

Tous les TEXT des 10 `page.content.*` (19×10) : Figma `lineHeight.unit=AUTO` → champs `lhMode=AUTO` + `lhQualification={status:AUTO,unit:AUTO,provenance:figma.lineHeight.unit=AUTO}`. Aucune valeur inventée depuis la bbox. Labels CTA : `lhQualification.status=NATIVE` unit PIXELS (souvent 18).

## 6. Fichiers créés / modifiés

**Créés :** 10× `manifests/raw/page.actions.*.json`
**Modifiés :** 10× `page.content.*.json` (lh) ; `component-nodes-l2.json` (+10 COMPLETE) ; `l2-manifest.json` (railEvidence + actionComponentId + 8 rail fixes) ; sidecars ; `indexes/raw-files.sha256` (36 RAW) ; `scripts/verify-g2-pack.sh` (rail fill check, actions 10, lh 190, B-N8..B-N10) ; CONTROL-REPORT.md ; README.md
**PNG :** 20/20 digests identiques au ZIP coverage-closure

## 7. Tests

### Nominal (exit 0)

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
OK railEvidence desktop frames (246 fill discriminant)
OK action/footer coverage 10/10 column-shell frames
OK page.content lineHeight qualification 190/190
SEMANTIC COVERAGE PASS
OK RAW manifests/raw/deltas-nora-206-208.json
OK RAW manifests/raw/document.guided.18.json
OK RAW manifests/raw/document.workspace.04.json
OK RAW manifests/raw/journal.surface.05.json
OK RAW manifests/raw/mobile.216.json
OK RAW manifests/raw/mobile.217.json
OK RAW manifests/raw/negatives-28-32-33-41.json
OK RAW manifests/raw/nora.workzone.03.json
OK RAW manifests/raw/page.actions.109.json
OK RAW manifests/raw/page.actions.110.json
OK RAW manifests/raw/page.actions.205.json
OK RAW manifests/raw/page.actions.22.json
OK RAW manifests/raw/page.actions.24.json
OK RAW manifests/raw/page.actions.40.json
OK RAW manifests/raw/page.actions.73.json
OK RAW manifests/raw/page.actions.74.json
OK RAW manifests/raw/page.actions.89.json
OK RAW manifests/raw/page.actions.92.json
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

### Négatifs — extrait final (B-N1..B-N10)

```
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
resigned sidecar manifests/component-nodes-l2.json 3280f8d2bbbb14ecb8315364b46728a8b28cd96db865ae82dbc0472e98269190
OK negative BN4_desc_count_resigned — verify FAIL as expected (semantic)
resigned manifests/raw/portfolio.content.json 414a201adcecf059ad99d11de43bf685558f1ed182d3674620bdd1392c4abaeb
resigned sidecar manifests/component-nodes-l2.json 14a669a70771f9b00fd092fb81aad63c17b28bcca49604d352c9ade3e2ada979
OK negative BN5_false_complete_resigned — verify FAIL as expected (semantic)
resigned sidecar manifests/l2-manifest.json e227ba280490a264645934114de4ed8e4a8a637eca805c0f510817ae870aca6d
OK negative BN6_screen_coverage_resigned — verify FAIL as expected (semantic)
resigned sidecar manifests/l2-manifest.json 1cc884b83cc13ffc441946eb080473e849de346a42ddc39e40afac9c8bf414b3
OK negative BN7_rail_as_content_resigned — verify FAIL as expected (semantic)
resigned sidecar manifests/l2-manifest.json fff0b44a6f4bedc25d65c0e5b461564ee3541fda38a1e7f37ea29f4f054d4766
OK negative BN8_rail_246_fill_resigned — verify FAIL as expected (semantic)
resigned sidecar manifests/l2-manifest.json 8e7588471d06d91090e7677a88f6ad2bd9b13dd67ed5ea711be384fbd950530d
OK negative BN9_action_cta_resigned — verify FAIL as expected (semantic)
resigned manifests/raw/page.content.22.json 574fb101a9f7678c5c47cbe9ab9cad69653c300316710c8b86364ae8722b6716
OK negative BN10_lh_qualification_resigned — verify FAIL as expected (semantic)
NEGATIVE TESTS PASS (all corruptions detected; B-N1..B-N10 semantic)
```

Rejeu sur extraction fraîche du ZIP : PASS + NEGATIVE PASS.

## 8. ZIP

- Path : `/Users/morris/Downloads/sfia-next-g2-source-f1-actions-lh-2026-11-08.zip`
- SHA-256 : `4d8a964b6be3abc78eed0ec1da9198d9e29889c6320412de2bf9ffb377a4ed33`
- Exclusions : `.DS_Store`, `scripts/tmp/`, `scripts/embed/`, `_staging`, `_*.json`

## 9. Réserves / non-claims

- Figma version id NOT AVAILABLE
- CU-01/UXC-01 N/A VISUAL — BEHAVIOR G5
- Pas G2 VALIDATED / G4 / ADOPTED / commit projet
- Handoff texte ≠ octets ZIP (transmettre l'archive hors bande)

## 10. Arbitres

Morris : accepter/refuser candidat G2 après revue ChatGPT ; GO G4 séparé si OK.
ChatGPT : revue ZIP + handoff distant.
Cursor : STOP — no UI.

---
FIN Review Pack FULL — F1/actions/lh
