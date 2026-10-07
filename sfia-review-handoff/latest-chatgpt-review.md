# P5-S08-4 — FINAL P1/P2 DETAIL FIDELITY CLOSURE

Morris S08-4 GO = AUTHORIZED / CONSUMED / CONTINUED

## Git truth

- origin/main = `eed18bd572d65b6f5f4878ed24b195e4feeb5c7e` (unchanged — MAIN NOT MOVED)
- branch = `delivery/sfia-studio-product-simplification-p5-s08-global-p3-visual-parity` (LOCAL ONLY)
- entry local commits = `301f3645`, `6b90beb3`, `0984a455`, `5bfed2bb`
- new local commits =
  - `038c2e60` feat(sfia-studio): close remaining S08-4 P1 fidelity gaps
  - `bf666042` feat(sfia-studio): prioritize P3 recommendation over durable relecture chrome
  - `bf3dee92` test(sfia-studio): harden S08-4 P3 visual E2E project open wait
  - `035551ce` feat(sfia-studio): complete S08-4 canonical detail sweep for P2 surfaces
- HEAD = `035551ce3ae98cd73616bca9ec3e7af6721b14c5`
- Project push = NONE
- Project PR = NONE

## Consumed handoff baseline

- Latest ChatGPT-reviewed blob = `e3270a4815ac028173bbeb932096b2812fae4977`
- Classification consumed: P0=0; P1 open (Workspace, New Project, Auth, Synthèses); P2 open (Projects residual, Journal, Historique, Aperçu); Projects empty missing; Visual E2E not reclaimed; S08-4D INCOMPLETE

## Live Figma contracts refreshed

- New Project 67:39 design-context extracted (820|404 body; Geist in Figma)
- Auth 190:551 design-context extracted (card 350×310 @ 20,210)
- Workspace 46:2 screenshot + contract already had bodySize 15 / authorMicro 11 (live-aligned)
- Synthèses 164:3 screenshot refreshed
- Projects empty 184:2 screenshot captured
- Compact/mobile: Auth 390 closed against live 190:551; further compact re-extraction remaining for Workspace 190:44 / Synthèses 190:175 as residual

## Canonical QA dataset

- Path: `.tmp-sfia-review/visual/s08-4/final-fidelity/states/`
- `canonical-product.sqlite` + `companion-nora-session.sqlite` + `manifest.json`
- Re-seeded with `S08_4_FIDELITY_SEED=1` → exactly 4 projects (Product Simplification, Nora Completion, Knowledge Core, Runtime v3)
- Nora Completion transcript enriched (2 user / 2 Nora turns) for denser Workspace
- Fake provider only; ZERO REAL

## Surface implementation changes (root causes → fixes)

1. **New Project P1** — sparse empty state vs rich 67:39
   - Seeded progression via capture `pressSequentially` (intention → name → OPTIONAL_CONTEXT)
   - UI: starters, clarification box, understood list, dual readiness, composer box, max-width 1224 / 820|404
   - Root cause: empty initial state + body width 1248 vs Figma 1224

2. **Auth P1** — mobile composition vs 190:551
   - Card-centered mobile dialect: mark 42, title « Bienvenue sur… », CTA h38, card 350×310 @ y210, bg `#f5f0ea`
   - Measured MATCH geometry (x20 y210 w350 h310)

3. **Workspace P1** — density vs 46:2
   - Denser transcript seed; recommendation card leads; durable relecture collapsed under `<details>`
   - Removed better-sqlite3 require (node:sqlite) that caused Next Issues overlay
   - Residual: Figma sample is Product Simplification marketing density; runtime is Nora Completion Product truth (legitimate extras preserved)

4. **Synthèses P1** — master/detail chrome vs 164:3
   - CSS/layout chrome convergence (list 360, selected row, detail sections); SQLite duck-type + loading gate kept
   - Populated synthesis proven (itemCount=1, not degraded)

5. **Projects P2** — card ≈579 → 565; empty proof missing
   - `recentGrid` fixed `565px 565px`; content pad 30; geometry JSON confirms 565×196
   - Projects empty isolated capture present (`runtime/projects-empty-1440.png` vs Figma 184:2)

6. **Aperçu / Journal / Historique P2** — density/geometry sweep via surface CSS/TSX

7. **Typography** — Live Figma uses **Geist**; runtime uses **Inter** via `next/font` (`--font-inter`). Geist package not in repo — **new dependency required for family match** → classified constraint (not silent install; not QNG noise)

## Diff-cluster ledger (summary)

| Surface | meanΔ (full-frame) | Status |
|---------|-------------------|--------|
| Auth 390 | 3.61 | closed / near MATCH |
| Projects empty | 3.40 | closed / near MATCH |
| Projects | 7.17 | residual P2/P3 (copy/rail sample vs Product titles) |
| Synthèses | 7.54 | residual chrome/density |
| Aperçu | 8.86 | residual P2 |
| Historique | 9.81 | residual P2 |
| Journal | 10.10 | residual P2 |
| New Project | 10.90 | residual (name-ask turn vs Figma auto-propose; content) |
| Workspace | 12.61 | residual P1/P2 (Product truth vs Figma sample hierarchy) |

Significant controllable clusters closed: Auth card geometry, New Project split 820|404, Projects card 565, recommendation-first Workspace hierarchy, empty proof present.
Open clusters remain above seven-errors threshold on Workspace / New Project content / secondary surfaces.

## Proof paths

- Runtime: `.tmp-sfia-review/visual/s08-4/final-fidelity/runtime/`
- Figma: `.tmp-sfia-review/visual/s08-4/final-fidelity/figma/`
- Diff: `.tmp-sfia-review/visual/s08-4/final-fidelity/diff/`
- Contact sheets: `.tmp-sfia-review/visual/s08-4/final-fidelity/contact-sheets/`
- Decision/Confirmation regression: visible in fresh capture (`DECISION_VISIBLE` / `CONFIRMATION_VISIBLE` = true)

## Gates

- Visual E2E (`e2e/p3-visual-parity.spec.ts`) = **PASS** (1 passed; hardened open wait)
- Full Vitest = **5382 passed / 141 skipped / 0 failed** (run with `SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY` unset — flag in `.env.local` pollutes authority fail-closed test if inherited)
- Typecheck = PASS
- Lint = PASS
- Build = PASS

## Classification

- P0 = 0
- P1 = 1+ residual (Workspace seven-errors vs 46:2 still immediately visible; New Project content turn model residual)
- P2 = Aperçu, Journal, Historique density/geometry residuals; Projects sample-content residuals
- P3 = micro AA / subpixel
- QNG = font raster **after** family disposition only; **Geist family mismatch is NOT QNG** — explicit constraint: new package required

## Roadmap / P5 local truth

- S08-4D = **INCOMPLETE** (not PASS CANDIDATE)
- GLOBAL P3 VISUAL PARITY = **NOT YET PROVEN**
- S08-5 = NOT STARTED
- P5 COMPLETE = NO
- P6 READY = NO
- runtime v3 = NON ADOPTED

## Remaining blockers (exact)

1. Workspace still fails seven-errors vs Figma 46:2 (conversation/card sample density; Product durable semantics differ from Figma marketing frame)
2. New Project still shows explicit name-ask turn (Product phase honesty) vs Figma auto-proposed name state
3. Live Figma Geist vs runtime Inter — requires new font dependency to close
4. Aperçu / Journal / Historique meanΔ still ~9–10 — further density iteration required
5. Compact/mobile live re-extraction incomplete for all P1 families beyond Auth

## Final verdict

**S08-4D DETAIL FIDELITY INCOMPLETE** — Workspace/New Project residual clusters + Geist constraint + P2 surface density; Visual E2E PASS; full tests PASS under clean authority env.

READY FOR CHATGPT REVIEW OF PROGRESS (not integration). Project push/PR forbidden.
