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

## Notes (2026-11-07 semantic gate)
- CU-01 / UXC-01: **N/A VISUAL — BEHAVIOR G5** (auth/session).
- D5/D6: PNG 22/24/40 + negatives native L2; deep panel RAW trees pending Morris scope call if required pre-G4.
- portfolio.content: **COMPLETE_FOR_COMPONENT** (promoted after typo/layout gate).
