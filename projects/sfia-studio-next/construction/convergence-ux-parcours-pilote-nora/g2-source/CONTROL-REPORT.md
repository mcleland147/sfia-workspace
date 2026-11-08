# G2-Source Control Report — F1 / actions / lh correction 2026-11-08

**Verdict candidate:** `G2-SOURCE CANDIDATE — READY FOR CHATGPT/MORRIS REVIEW — NO UI CODE`

Corrects three coverage false-positives after independent review of the coverage-closure ZIP: (A) 8 F1 rail mis-associations, (B) missing Actions/footer on 10 column-shell screens, (C) missing native lineHeight qualification on 190 page.content TEXT nodes.

## Provenance
- Worktree: `/Users/morris/Projects/sfia-workspace-next-g2-figma-evidence`
- Branch (local only): `feat/next-convergence-ux-g2-figma-evidence` @ `f0d59bc8…` (= origin/main)
- Figma: `itgvCulInEnFY6DvgIegvP` page `94:49` — native `use_figma` probes 2026-11-08
- Prior ZIP: coverage-closure SHA `99fcab38…` (20 PNG unchanged)
- New ZIP: `/Users/morris/Downloads/sfia-next-g2-source-f1-actions-lh-2026-11-08.zip` (SHA in Review Pack)

## A — Rail corrections (native width+fill)
| frameId | was | now | railNodeId | fill | w |
|---|---|---|---|---|---:|
| 94:515 | projet | personnel | 94:516 | #0c101a | 246 |
| 158:264 | personnel | projet | 158:265 | #0c1020 | 246 |
| 158:336 | personnel | projet | 158:337 | #0c1020 | 246 |
| 158:912 | personnel | projet | 158:913 | #0c1020 | 246 |
| 159:145 | personnel | projet | 159:146 | #0c1020 | 246 |
| 161:216 | conversation | projet | 161:217 | #0c1020 | 246 |
| 161:288 | conversation | projet | 161:289 | #0c1020 | 246 |
| 241:385 | inspection | projet | 241:386 | #0c1020 | 246 |

All desktop frames now carry `screenCoverage.railEvidence` (nodeId/width/fill/variant). Discriminant for the two 246 px rails is **fill**, not width.

## B — Actions / footer (10 screens)
New COMPLETE RAW `page.actions.{22,24,40,73,74,89,92,109,110,205}` — `Actions / principales` + `Pied / note`, linked via `screenCoverage.actionComponentId`.

## C — lineHeight
190 `page.content.*` TEXT nodes: native `lineHeight.unit=AUTO` → `lhMode=AUTO` + `lhQualification`. CTA labels: NATIVE PIXELS (typically 18).

## Verification
- Nominal VERIFY PASS (railEvidence + actions 10/10 + lh 190/190)
- Negatives B-N1..B-N10 PASS (incl. B-N8 fill mismatch, B-N9 CTA strip, B-N10 lh strip)

## Non-claims
No UI · no project commit/push · PNG immutable · not G2 VALIDATED
