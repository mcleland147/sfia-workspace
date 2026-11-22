# E08 Exit — G5 Figma ↔ runtime matrix

Date: 2026-11-21
Viewport primary: 1680×970

## Captures runtime (Playwright DEV)
| Asset | SHA-256 |
|---|---|
| runtime/runtime-11.06-integrations-1680x970.png | f635a0b2… |
| runtime/runtime-11.07-disconnect-confirm-1680x970.png | fa95ad29… |
| runtime/runtime-integrations-final-1680x970.png | d233f7de… |
| runtime/runtime-11.07-dom-measures.json | 499946a6… |

## Oracles Figma (MCP)
| Asset | Node | Notes |
|---|---|---|
| png-oracle-exit/figma-11.04-pubs-1680x970.png | 1094:310 | oracle downloaded |
| png-oracle-exit/figma-11.07-disconnect-1680x970.png | 1095:390 | oracle downloaded |

## F2 measures
- disconnectBanner DOM: x=419 y≈243.6 w=1088 h=54 @ 1680×970
- Figma 11.07 amber banner (1095:411): x=284+0 relative content, w=1358 — **parent-chain not fully resolved to CSS-root comparable rect** ⇒ regional F2 **NOT PASS**

## Verdict G5
**NOT PROVEN (PARTIAL evidence)** — runtime captures + oracles present; full geometric F2 matrix across 11.01–11.16 / multi-viewport / ≤2px not completed this cycle.
