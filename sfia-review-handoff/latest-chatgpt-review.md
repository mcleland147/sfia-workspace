# P5-S01 — VISUAL CORRECTION PASS 01 —
MOBILE FLOATING CONTROL / COMPOSER COLLISION —
FINAL PRE-GIT VISUAL REVIEW —
FULL REVIEW PACK

## 1. Timestamp

`2026-10-05T08:48:40Z` (UTC) · Europe/Paris 2026-10-05

## 2. Cycle / profile

| Field | Value |
| --- | --- |
| Project | SFIA Studio |
| Macro | `STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01` |
| Milestone | P5 — Integrated Delivery |
| Slice | P5-S01 — First Integrated Product Vertical Slice |
| Pass | **VISUAL CORRECTION PASS 01** |
| Cycle | Delivery correction / visual evidence |
| Profile | **Critical** |
| Fake / Real | **ZERO REAL** |
| Capability | P5 Integrated Product Delivery — P3 Workspace/Conversation on same Product runtime |

## 3. Morris GO consumed

**YES** — Morris authorized this micro-pass: inspect · minimal B1 fix · targeted tests · local runtime · Figma READ ONLY · Desktop/Compact/Mobile captures · Review Pack · Review Handoff L3.

**NOT authorized / NOT done:** project commit · push · PR · merge · redesign · new navigation · new responsive architecture · Figma mutation · REAL OpenAI · R1/R2/R3 · P5 completion.

## 4. Local Git Truth

| Field | Value |
| --- | --- |
| Repo | `mcleland147/sfia-workspace` |
| Worktree | `/Users/morris/Projects/sfia-studio-chat-first-product-simplification-p3` |
| Branch | `delivery/sfia-studio-product-simplification-p5-s01-integrated-product-vertical-slice` |
| HEAD | `04527bede4a3aad1853387b9eb39af3fe0615412` |
| origin/main | `04527bede4a3aad1853387b9eb39af3fe0615412` |
| Match expected | **YES** |
| Staged | **EMPTY** |
| Dirty P5-S01 worktree | **PRESERVED** (no reset / no stash) |
| Project Git actions this pass | **NONE** |

## 5. Previous handoff

| Field | Value |
| --- | --- |
| Branch | `sfia/review-handoff` |
| Previous SHA | `b63b3b1b61a943210b4c9a1ea2f5f960f001fa34` |
| Canonical file | `sfia-review-handoff/latest-chatgpt-review.md` |
| Previous visual verdict | PASS WITH C/D RESERVES (A=0 / B=0 then) |
| Superseded for this review | ChatGPT direct pixel review → **B=1** (B1) until corrected |

## 6. P3 / Figma sources

| Source | Value |
| --- | --- |
| Figma file | `m4g8j0gNbEzfIuH6S9AZJF` |
| Desktop | `46:2` · 1440×1024 |
| Compact | `190:44` · 1024 |
| Mobile | `190:306` · 390 |
| Mode | **READ ONLY** (MCP screenshot of Mobile 190:306 confirmed) |
| Figma mutation | **NONE** |

P3 Mobile 190:306 shows Conversation + sticky composer — **no floating circular « N »** at bottom-left.

## 7. B1 observed defect

| Observation | Value |
| --- | --- |
| Viewport | Mobile 390×844 |
| Route | `/studio/projects/[id]` |
| Product | **HABITFLOW-REPLAY-02** |
| Symptom | Circular black control with white « N » floating bottom-left overlapped sticky Conversation composer (textarea / status / Send region) |
| Prior geometry (pre-fix) | rail=0 · mobileBar≈54 · conversation≈358 · composer≈326×182 · dark circle bbox ≈ `(19,787)–(56,824)` |
| Same dark circle also present | Desktop + Compact bottom-left (less noticed over rail) — confirms framework chrome, not Mobile-only Product control |

## 8. Actual component identified

**Next.js 15 development route indicator (`devIndicators`)** — framework-injected floating black « N » (default `position: bottom-left`).

Not Product Nora:

| Candidate | Verdict |
| --- | --- |
| `ConversationSurface` turn avatar `{role==="assistant"?"N":"P"}` | In-flow message chrome · not viewport-fixed |
| `ConversationSurface` focus `noraDot` « N » | Top identity row · not bottom-left |
| `ProductShell` profile « P » | Mobile topbar · letter **P** |
| Meridian emblem | Inside rail · `display:none` at ≤767px · decorative |
| P3 Mobile 190:306 | No floating N |

## 9. Semantic role of the control

| Aspect | Value |
| --- | --- |
| Role | Next.js **dev-only route/status indicator** |
| Desktop / Compact / Mobile | Same framework overlay (default bottom-left) |
| Interactive Product role | **NONE** |
| P3 expectation on Mobile | **NOT required** (absent from 190:306) |
| Production impact | `devIndicators` applies in development only |

## 10. Why chosen fix is minimum-sufficient

Preferred decision **A** applies:

- P3 Mobile does **not** require this floating control.
- Function is framework-dev chrome, not Product Nora / rail / composer.
- Smallest change: `devIndicators: false` in existing `next.config.ts`.
- No Product UI redesign · no new responsive architecture · no Desktop/Compact Product layout change · Nora in-flow avatars preserved.

## 11. Exact files modified (this visual pass)

| File | Change |
| --- | --- |
| `projects/sfia-studio/app/next.config.ts` | `devIndicators: false` |
| `projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s01.workspaceLayout.ui.test.tsx` | B1 assertion + Mobile rail/composer semantics |
| `projects/sfia-studio/product-simplification/05-…integrated-delivery.md` | Living status: visual PASS WITH C/D · B1 CLOSED · ready for Git gate |
| `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md` | Tip evidence line for Visual Correction Pass 01 |

Capture-only / scratch (not Product architecture):

- `.tmp-sfia-review/visual/runtime/*` recaptures + metrics
- `.tmp-sfia-review/chatgpt-review.md` (this pack)

## 12. Useful diff

```diff
--- a/projects/sfia-studio/app/next.config.ts
+++ b/projects/sfia-studio/app/next.config.ts
@@ -2,6 +2,10 @@ import type { NextConfig } from "next";

 const nextConfig: NextConfig = {
   reactStrictMode: true,
+  // Hide the Next.js 15 floating « N » route indicator (default bottom-left).
+  // It is framework-dev chrome, not Product Nora, and collides with the Mobile
+  // Conversation composer at 390px (P5-S01 B1 / P3 Mobile 190:306 has no such control).
+  devIndicators: false,
 };

 export default nextConfig;
```

Test addition (excerpt):

```ts
it("hides Next.js floating « N » indicator (B1) and keeps Mobile Conversation primary", () => {
  expect(nextConfig.devIndicators).toBe(false);
  // Mobile: .rail { display: none } at max-width 767px
  // Composer remains sticky; Product .turnAvatar is not position:fixed
});
```

## 13. Responsive behavior before / after

| Breakpoint | Before B1 | After fix |
| --- | --- | --- |
| Desktop 1440 | Product layout OK · Next.js N at BL over rail | Product layout preserved · **fixed N = 0** · rail **192** |
| Compact 1024 | Product layout OK · Next.js N at BL | Product layout preserved · **fixed N = 0** · rail **160** |
| Mobile 390 | Next.js N overlaps sticky composer | **fixed N = 0** · rail **0** · composer usable · no overflow |
| Mobile scrolled | N overlapped composer / status | **fixed N = 0** · no overlap · status « Vous pilotez. » fully visible |

## 14. Tests

```text
npx vitest run __tests__/pre-m6-product-ui/p5.s01.workspaceLayout.ui.test.tsx
✓ 2 tests PASS (includes new B1 case)
```

No new E2E framework. Full `npm test` not re-run (CSS/config-only visual fix + targeted UI test; import-boundary / PRR digests unaffected by `next.config.ts`).

## 15. Typecheck

```text
npm run typecheck → PASS (tsc --noEmit)
```

## 16. Lint

```text
npm run lint → PASS (No ESLint warnings or errors)
```

## 17. Runtime / auth method

| Item | Value |
| --- | --- |
| Runtime | `npm run dev -- --hostname localhost --port 3020` |
| Provider | `OPS1_CONVERSATION_PROVIDER=fake` |
| Auth | Existing Better Auth + GitHub OAuth bootstrap · saved Playwright `studio-storage-state.json` |
| Parallel auth infra | **NOT created** |
| Product | HABITFLOW-REPLAY-02 (`prj:0ed5c4e1-…` redacted in metrics routes) |

## 18. ZERO REAL confirmation

**YES** — Fake conversation provider · no OpenAI REAL · no R1/R2/R3 · no Cursor REAL execution.

## 19. Initial Desktop capture

- File: `.tmp-sfia-review/visual/runtime/workspace-desktop-1440x1024.png`
- `scrollTo(0,0)` · `scrollY=0` · `projectHeader.y=54` (**visible**)
- rail **192** · conversation **816** · composer sticky · Meridian present · Journal not third master column
- B1 fixed N count = **0**

## 20. Initial Compact capture

- File: `.tmp-sfia-review/visual/runtime/workspace-compact-1024x768.png`
- `scrollY=0` · `projectHeader.y=54` (**visible**)
- rail **160** · conversation **544** · Context persistent · no overflow
- B1 fixed N count = **0**

## 21. Initial Mobile capture

- File: `.tmp-sfia-review/visual/runtime/workspace-mobile-390x844.png`
- `scrollY=0` · `projectHeader.y=108` (**visible** — not negative)
- rail **0** · conversation **358** · composer **326×182** at y=662
- Conversation primary · mobile chrome usable
- B1 fixed N count = **0** · overflowX = **false**

## 22. Mobile scrolled / composer capture

- File: `.tmp-sfia-review/visual/runtime/workspace-mobile-390x844-scrolled-composer.png`
- Composer sticky visible · Send / textarea / status visible
- Pixel crop bottom-left: **no black circular N** · « Vous pilotez. » fully readable
- B1 fixed N count = **0** · overlapsComposer = **false** · overflowX = **false**

## 23. Geometry metrics (post-fix)

| Capture | rail.w | conversation.w | composer | header.y | scrollY | fixedN | overflowX |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Desktop 1440×1024 | 192 | 816 | 816×182 @ (230,842) | 54 | 0 | 0 | false |
| Compact 1024×768 | 160 | 544 | 544×182 @ (180,586) | 54 | 0 | 0 | false |
| Mobile 390×844 | 0 | 358 | 326×182 @ (32,662) | 108 | 0 | 0 | false |
| Mobile scrolled | 0 | 358 | 326×182 @ (32,662) | -2260 (scrolled) | 2368 | 0 | false |

Manifest: `.tmp-sfia-review/visual/runtime/capture-manifest.json`

## 24. Explicit B1 closure proof

1. Pre-fix screenshots: dark circle bbox bottom-left on Desktop/Compact/Mobile (~37px · y near viewport bottom).
2. Discovery: Next.js `devIndicators` (default bottom-left), not Product Nora.
3. Fix: `devIndicators: false`.
4. Post-fix DOM probe: `fixedBottomLeftNCount=0` on all four captures.
5. Post-fix pixel scan bottom-left 90×120: **dark_bl = 0** on all four PNGs.
6. Scrolled Mobile crop: composer corner clean — status text not obscured.
7. P3 Mobile reference has no such control — alignment restored for this defect class.

**B1 = CLOSED.**

## 25. Regression check — Desktop

- rail direction **192** preserved
- header / focus structure preserved
- Context ~356 direction preserved (Context column present)
- Conversation primary
- Meridian present
- Journal not third master column
- No new Product layout change for B1

## 26. Regression check — Compact

- rail ≈ **160** preserved
- Conversation primary
- Context persistent
- no overflow

## 27. Regression check — Mobile

- desktop rail collapsed (**0**)
- mobile chrome usable
- Conversation primary
- Context secondary (collapsed / non-persistent column)
- composer usable
- **B1 collision CLOSED**
- no horizontal overflow
- initial `scrollTop=0` header visible

## 28. Final A / B / C / D matrix

| Class | Count | Status |
| --- | --- | --- |
| **A — BLOCKING** | **0** | none |
| **B — MUST FIX BEFORE COMMIT** | **0** | B1 closed |
| **C — ACCEPTABLE S01 DEBT** | retained | see §29 |
| **D — FUTURE P5** | retained | see §29 |

## 29. Remaining C / D debt

**C (acceptable S01 debt — unchanged class):**

- Desktop Conversation +24px vs Figma
- composer +4px / chrome polish
- residual Pilotage wording
- transcript wording / jargon
- exact Meridian opacity / placement
- header / composer micro-fidelity

**D (future P5 — unchanged class):**

- Aperçu / Exécution object-native
- Synthèses
- Nora Activity / STOP global contract
- Auth visual P3
- full pixel-perfect responsive campaign
- F2 routing debt
- REAL / R1–R3

No new defects silently reclassified as C.

## 30. Project Git actions

**NONE** — no project commit · no project push · no PR · no merge.

## 31. Final verdict

```text
PASS — P5-S01 FINAL PRE-GIT VISUAL REVIEW COMPLETE —
A=0 / B=0 —
B1 MOBILE OVERLAP CLOSED —
READY FOR MORRIS P5-S01 GIT INTEGRATION GATE
WITH DOCUMENTED C/D RESERVES
```

Explicitly **NOT**:

- PIXEL-PERFECT
- P5-S01 COMPLETE
- P5 COMPLETE
- READY FOR REAL
- R1/R2/R3
- runtime v3 ADOPTED

---

*End FULL Review Pack — P5-S01 Visual Correction Pass 01 — Cursor → ChatGPT.*
