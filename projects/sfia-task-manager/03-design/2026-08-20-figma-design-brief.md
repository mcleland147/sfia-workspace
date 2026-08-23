# SFIA Task Manager — Figma Design Brief

**Chemin :** `projects/sfia-task-manager/03-design/2026-08-20-figma-design-brief.md`
**Cycle :** Cycle 4 — UX/UI
**Statut :** FIGMA DESIGN — VALIDATED BY MORRIS AS CYCLE 4 DESIGN REFERENCE
**Validation Morris :** VALIDATED BY MORRIS AS CYCLE 4 DESIGN REFERENCE

---

## Morris GOs

Cycle 4 :
GO MORRIS — OPEN CYCLE 4 UX/UI — STANDARD — FIGMA DESIGN-FIRST — INCLUDE R-DOC-02 TRACKING CORRECTION — NO TECH ARCH / BACKLOG / DELIVERY

Figma source :
GO MORRIS — CREATE NEW FIGMA DESIGN FILE "SFIA Task Manager" IN CURRENT PRO TEAM — USE IT AS CYCLE 4 FIGMA SOURCE CANDIDATE — NO DESIGN VALIDATION IMPLIED

Targeted refinement (2026-08-22) :
GO MORRIS — CYCLE 4 TARGETED FIGMA REFINEMENT — PRESERVE CURRENT UX/UI CONTRACT AND FUNCTIONAL RULES — RAISE CORE AND CRITICAL FRAMES TO REPRESENTATIVE MEDIUM FIDELITY WITH REALISTIC CONTENT AND INTERACTION AFFORDANCES — NO NEW PRODUCT DECISION — NO TECH ARCH / BACKLOG / DELIVERY — NO PROJECT COMMIT / PUSH / PR

Luminous visual refinement (2026-08-22) :
GO MORRIS — « Je trouve l'interface un peu terne, rajoute un peu de couleur à tout ça. Que ce soit lumineux mais très lisible et fluide pour l'utilisateur. » — CYCLE 4 LUMINOUS VISUAL REFINEMENT — PRESERVE UX CONTRACT, CONTENT, LAYOUT AND FUNCTIONAL RULES — APPLY CONTROLLED COLOR AND READABILITY DIRECTION ONLY — NO NEW PRODUCT DECISION — NO TECH ARCH / BACKLOG / DELIVERY — NO PROJECT COMMIT / PUSH / PR

Final visual polish (2026-08-22) :
GO MORRIS — « ok go la dessus alors » — CYCLE 4 FINAL VISUAL POLISH — RHYTHM / DEPTH / ICONOGRAPHY / CRITICAL-STATE COMPOSITION — PRESERVE LUMINOUS DIRECTION, UX CONTRACT, CONTENT AND FUNCTIONAL RULES — NO NEW PRODUCT DECISION — NO TECH ARCH / BACKLOG / DELIVERY — NO PROJECT COMMIT / PUSH / PR

Cycle 4 validation (current) :
GO MORRIS — VALIDATE CYCLE 4 UX/UI DESIGN AS REFERENCE — FREEZE UX CONTRACT FOR NEXT AUTHORIZED STEPS — NO DELIVERY / NO TECH ARCH / NO BACKLOG IMPLIED

## Source contract

| Champ | Valeur |
|-------|--------|
| Name | SFIA Task Manager |
| URL | https://www.figma.com/design/2U8pJCYBMtGxaK0F0Ef1nO |
| fileKey | `2U8pJCYBMtGxaK0F0Ef1nO` |
| Editor type | Figma Design |
| Account (revalidated) | ludo_zaya / ludo_zaya@hotmail.fr |
| Plan / seat (revalidated) | Pro / Full |
| WRITE | YES (seat Full + file accessible) |
| Source-of-truth status | **VALIDATED BY MORRIS AS CYCLE 4 DESIGN REFERENCE** |
| Framing note | Historical OPEN fileKey superseded for Cycle 4 candidate source by explicit Morris GO |

## Objectif visuel

Matérialiser le contrat M1 en moyenne fidélité structurante : structure, hiérarchie, densité, états, actions, lisibilité.

## Viewport / fidelity

1440 × 1024 · desktop-first · **representative medium fidelity** (structural wireframes elevated with realistic content, states, and visual affordances — not pixel polish)

## Pages

| Page | Contenu |
|------|---------|
| M1 — Core Screens | Frames 01–05 |
| M1 — Critical States | Frames 06–10 |

## Frames 01–10

| # | Name | Hierarchy focus | Mandatory content |
|---|------|-----------------|-------------------|
| 01 | Workboard | State + next action | 7 columns, cards, Quick Inspector |
| 02 | Work Item | Next Action priority | Intent→History sections |
| 03 | Cycle Workspace | Allowed vs control | Contract + Gates/Evidence/Exit |
| 04 | Review & Decision | Evidence vs expected | Expected/Actual + verdicts |
| 05 | Project | Aggregate state | Project intent + WI list |
| 06 | Work Item / Blocked | Risk/blocker | reason/unblock/next_action |
| 07 | Work Item / Cannot Ready | Missing fields | missing list + corrective |
| 08 | Review / GO WITH RESERVE | Reserve path | reserve + follow-up |
| 09 | Review / REPLAN | History preserved | reason + historical cycle + Q/R |
| 10 | Empty Workspace | First action | empty + CTA |

## Visual direction

**Before luminous refinement:** professional but gray / subdued / visually flat — charcoal sidebar, uniform gray surfaces, limited chromatic hierarchy.

**After luminous refinement (Morris direction):** luminous · fresh · controlled semantic color · high readability · visually fluid · professional control/decision tool — no rainbow UI · no gaming UI · no marketing dashboard · no glassmorphism excess.

Principles retained: dense · control/decision · no Jira clone · no AI-first · semantic color · no critical info color-only · badges always include text.

## Candidate tokens (NOT VALIDATED)

All values below are **CANDIDATE — NOT VALIDATED DESIGN TOKEN**. Design tokens final = **OPEN**.

| Token | Candidate value | Role |
|-------|-----------------|------|
| bg/app | #F6F9FD | Very light blue-tinted app background |
| bg/surface | #FFFFFF | Primary cards / panels |
| bg/surface-secondary | #F8FBFF | Secondary panels / column headers |
| bg/surface-blue-tint | #EFF6FF | NEXT ACTION, QI, active accents |
| bg/surface-cyan-tint | #ECFEFF | Exit Control, Actual Evidence |
| bg/sidebar | #172554 | Deep navy sidebar (replaces charcoal #1F2933) |
| text/primary | #0F172A | Headings / primary body |
| text/secondary | #475569 | Labels / secondary body |
| text/on-dark | #F8FAFC | Sidebar active / primary buttons |
| text/nav-inactive | #CBD5E1 | Sidebar inactive nav |
| border/neutral | #D7E1EC | Structural borders |
| border/subtle | #E5EDF5 | Card / row separators |
| accent/primary | #2563EB | Primary blue — CTA, NEXT ACTION label |
| accent/primary-strong | #1D4ED8 | Hover / emphasis |
| accent/azure | #0EA5E9 | QI border, Exit Control accent |
| accent/cyan | #0891B2 | Ready / teal accents |
| status/success | #059669 | Attached / Present / Done / GO |
| status/success-soft | #ECFDF5 | Success tinted backgrounds |
| status/warning | #D97706 | Pending / reserve / attention |
| status/warning-soft | #FFFBEB | Warning tinted backgrounds |
| status/danger | #DC2626 | Missing / Blocked / NO-GO |
| status/danger-soft | #FEF2F2 | Danger tinted backgrounds |
| status/info-violet | #7C3AED | Review / Decision / REPLAN (limited) |
| status/info-violet-soft | #F5F3FF | Human Decision panel |
| status/indigo | #4F46E5 | Qualified badge |
| font/ui | Inter / system sans | Unchanged |
| space/base | 8 / 12 / 16 / 24 | Unchanged |
| radius/card | 8 / 10 | Unchanged |
| shadow/structural | 0 1px 4px rgba(15,30,50,0.08) | Subtle only — no marketing SaaS shadow |

## Semantic status mapping (candidate)

| Status / state | Color family | Application |
|----------------|--------------|-------------|
| In Progress | blue / blue-tint | Badge + column rhythm |
| Ready | cyan / blue-light | Badge |
| Qualified | indigo / neutral-blue | Badge |
| Review | violet / blue-purple (moderate) | Badge + review cards |
| Done | green | Badge + Done column accent |
| Pending | amber | Gate / pending badges |
| Blocked / Missing | red or amber by severity | Banner, badge, row tint |
| Decision | blue/violet controlled | Human Decision panel |
| GO | green outline/tint when available | Verdict button |
| GO WITH RESERVE | amber soft | Verdict + frame 08 |
| REPLAN | blue/violet controlled | Verdict + frame 09 |
| NO-GO | red soft | Verdict button |
| Attached / Present | green soft + text | Evidence rows |
| Missing | red soft + text | Evidence / checklist rows |

## Accessibility candidate guardrails

Target contractuel OPEN. Apply: non color-only critical info, readable contrast, explicit labels, explained disabled, keyboard/focus as candidates.

## Forbidden interpretations

No tech arch · no stack · no backlog · no delivery · no 6th business surface · no Blocked lifecycle column · no silent disabled · no AI-central UI · no design validation claim

## Open Morris decisions

Accessibility target · design tokens final · branding · FQ02–FQ05 · visual validation of this candidate

## Production registry (post targeted refinement — 2026-08-22)

Pages:
- M1 — Core Screens — pageId `0:1`
- M1 — Critical States — pageId `3:2`

Quick Inspector (Workboard transversal): nodeId `13:91` (child of `01 — Workboard` / `13:2`)

| Frame | Node ID | W×H | Screenshot MCP |
|-------|---------|-----|----------------|
| 01 Workboard | `13:2` | 1440×1024 | YES |
| 02 Work Item | `13:114` | 1440×1024 | YES |
| 03 Cycle Workspace | `14:2` | 1440×1024 | YES |
| 04 Review & Decision | `14:106` | 1440×1024 | YES |
| 05 Project | `14:184` | 1440×1024 | YES |
| 06 Blocked | `16:2` | 1440×1024 | YES |
| 07 Cannot Ready | `16:27` | 1440×1024 | YES |
| 08 GO WITH RESERVE | `16:74` | 1440×1024 | YES |
| 09 REPLAN | `16:96` | 1440×1024 | YES |
| 10 Empty Workspace | `16:119` | 1440×1024 | YES |

Frames present: **10/10**

Prior registry (pre-refinement handoff `03bbac31`): node IDs `4:2`…`5:222` — superseded by rebuild preserving same frame names and contract scope.

## Representative scenario (cross-screen)

| Entity | Value |
|--------|-------|
| Project | Alpha |
| Primary WI | WI-104 — Prepare authentication evidence |
| Profile | Standard |
| Lifecycle (WI-104) | In Progress |
| Cycle (WI-104) | C-12 |
| Gate | Review pack — Pending |
| Evidence | E-1 validation note (attached), E-2 screenshot (attached), Git reference (missing) |
| Next action (WI-104) | Attach missing Git reference |
| Blocked WI | WI-099 — Qualified + Blocked (D-17 vendor API) |
| Cannot Ready WI | WI-077 — missing Profile/Out of scope/Guardrails/Exit proof |

## Targeted refinement — before vs after (content/fidelity)

| Frame | Prior issue (ChatGPT review) | After refinement |
|-------|------------------------------|------------------|
| 01 Workboard | Sparse cards, thin QI | Multiple realistic cards across columns; QI panel with identity, badges, Open actions |
| 02 Work Item | Placeholder section text | Real Intent→History content; evidence sidebar; Edit/Attach/Open affordances |
| 03 Cycle Workspace | Abstract bullet lists | Label/value/status blocks; gate pending reason; evidence rows with Attach |
| 04 Review & Decision | Already strong | Structured evidence rows; validation results; GO disabled reason adjacent |
| 05 Project | Simple list | Intent + operational table (state/blocked/cycle/gate/next); summary badges |
| 06 Blocked | Rule shown, thin UX | BLOCKED banner; dependency; unblock condition; Resolve action |
| 07 Cannot Ready | Missing fields listed | Checklist with Present/Missing badges; Mark Ready disabled + reason |
| 08 GO WITH RESERVE | Reserve path thin | Decision panel with reserve, follow-up WI-095, author/date note |
| 09 REPLAN | History rule stated | Historical cycle, preserved evidence, NOT CREATED YET for new cycle |
| 10 Empty Workspace | Adequate | Light polish — dual CTA Create Project / Capture Work Item |

## Luminous visual refinement — before vs after (2026-08-22)

| Frame | Before (gray/subdued) | After (luminous/controlled color) |
|-------|----------------------|-----------------------------------|
| 01 Workboard | Charcoal sidebar, flat gray canvas, low-contrast cards | Navy sidebar `#172554`; blue-tint app bg; column headers tinted; active/blocked card accents; QI `#EFF6FF` + azure border |
| 02 Work Item | Uniform gray sections | White section cards + subtle blue borders; NEXT ACTION blue tint + primary border; semantic Exit Proof rows (green/red/amber) |
| 03 Cycle Workspace | Flat two-column split | Execution Contract neutral cool `#F8FBFF`; Exit Control cyan tint + azure 2px border; gate/evidence semantic colors |
| 04 Review & Decision | Muted panels | Expected Exit Proof blue-neutral; Actual Evidence cyan tint; Human Decision violet soft; 4 verdicts outline/tint (not saturated permanent buttons) |
| 05 Project | Gray table | Status chips semantic; WI-104 row blue highlight; primary Next Action CTA |
| 06 Blocked | Thin warning | Amber soft BLOCKED banner + visible border; corrective CTA primary blue |
| 07 Cannot Ready | Flat checklist | Missing=red soft / Present=green soft rows; disabled Mark Ready readable |
| 08 GO WITH RESERVE | Thin reserve panel | Amber/gold soft dominant; reserve + follow-up legible |
| 09 REPLAN | Neutral history | Violet soft REPLAN panel; historical info neutral; NOT CREATED amber |
| 10 Empty Workspace | Adequate but flat | Brightest screen — white card on blue tint; primary Create Project blue |

Placeholders remaining: **NONE** (no “Functional fields from validated contract” generic text)

## Visual affordances introduced (VISUAL CANDIDATES — not new M1 behaviors)

Open Work Item · Open Cycle · Attach evidence · Edit qualification/scope · View history · Resolve dependency · Mark Ready (disabled + reason) · Complete missing fields · Record/view Decision · Update scope · Create Project · Capture Work Item

All affordances map to existing contract surfaces/actions or explanatory UI only. No new product rule introduced.

## Visual contract extracted (from produced Figma)

Common shell (all frames):
- Layout: HORIZONTAL Auto Layout
- Sidebar 220 × 1024 (deep navy `#172554` candidate) + Main 1220 × 1024
- App background: `#F6F9FD` · Main padding: 28 / 28 / 24 / 24 · gap 16
- Typography: Inter Regular / Semi Bold / Bold (candidate) — improved title/body contrast; secondary text `#475569` (not too pale)
- NEXT ACTION banner: `#EFF6FF` fill + `#2563EB` border + blue label + primary CTA (not color-only)
- Sidebar active nav: primary blue fill + white text + optional azure stroke
- Structural shadow: subtle 1px drop only on cards/panels (not decorative float)

Per-frame notes:
| Frame | Layout principal | Zones / actions | Disabled / empty |
|-------|------------------|-----------------|------------------|
| 01 | 7 lifecycle columns + QI panel | Cards: title/project/profile/gate/next; QI transversal | N/A |
| 02 | Vertical sections stack | Next Action stroke-emphasis | N/A |
| 03 | Two-zone split 560+560 | Execution Contract vs Exit control | N/A |
| 04 | Expected vs Actual + verdict row | GO / GO WITH RESERVE / REPLAN / NO-GO | GO reason text when incomplete |
| 05 | Aggregated WI rows | Blocked indicator text on WI-099 | N/A |
| 06 | Work Item variant | Lifecycle + Blocked=true + reason + unblock | Orthogonal blocked |
| 07 | Work Item variant | Missing fields list + corrective | Ready unavailable explained |
| 08 | Review variant | Reserve + follow-up + author/date | N/A |
| 09 | Review variant | Historical cycle + conserved evidence | Not a reset |
| 10 | Empty state center | Minimal copy + Create Project CTA | Empty explained |

Uncertainty: denser production content vs pixel polish intentionally deferred (medium fidelity). No functional rule invented beyond validated M1 contract.

## Final visual polish — before vs after (2026-08-22)

| Aspect | BEFORE (post-luminous) | AFTER (final polish) |
|--------|------------------------|----------------------|
| Composition | luminous/readable but visually static in parts | more rhythmic, less top-left isolated content |
| Depth | limited surface hierarchy | 3-level depth: app bg / white surfaces / elevated tinted panels |
| Iconography | minimal | light line-style icons (14px) — always icon + text |
| Headers (02–05) | functional but flat | elevated headers with shadow, padding, section identity |
| Critical states 06–09 | small isolated cards in large canvas | composed panels ~780px, structured sections |
| REPLAN (09) | text list only | trajectory line C-12 → Historical → Ready → Next Action |
| GO WITH RESERVE (08) | single amber card | structured Reserve / Follow-up / Human Decision blocks |
| Quick Inspector | layout-fixed, flat | subtle L2 shadow elevation preserved layout |

## Iconography candidate (NOT VALIDATED)

| Category | Symbol candidate | Usage |
|----------|------------------|-------|
| NEXT ACTION | → | banners, CTAs |
| STATE | ◉ | headers, state markers |
| EVIDENCE | ◧ | Expected/Actual panels, rows |
| DECISION | ◉ | Human Decision, verdict context |
| HISTORY | ◷ | history sections |
| SCOPE | ⊞ | Scope sections |
| GUARDRAIL | ⛨ | Guardrails sections |
| BLOCKED | ⚠ | blocked banner |
| SUCCESS | ✓ | attached/present/GO |
| MISSING | ✕ | missing evidence/fields |
| REPLAN | ↻ | REPLAN trajectory |
| CYCLE | ↻ | cycle context |

All icons paired with text labels — no icon-only critical information.

## Depth hierarchy candidate (NOT VALIDATED)

| Level | Surface | Treatment |
|-------|---------|-----------|
| L0 | App background `#F6F9FD` | flat |
| L1 | Cards/panels white `#FFFFFF` | subtle border `#E5EDF5` |
| L2 | Focused/actionable panels | tinted bg + accent border + shadow `0 2px 8px rgba(15,23,42,0.05–0.08)` |

## Information signatures (5 categories)

| Category | Visual signature |
|----------|------------------|
| STATE | badge + status marker icon |
| NEXT ACTION | blue/azure tint panel + → icon + primary CTA |
| EVIDENCE | ◧ icon + tinted panel + semantic row colors |
| DECISION | violet tint elevated panel + ◉ icon |
| HISTORY | ◷ icon + secondary neutral panel |

## Critical-state composition refinements

| Frame | Composition applied |
|-------|---------------------|
| 06 Blocked | State banner (⚠) + blocking context panel + Next Action — ~780px composed width |
| 07 Cannot Ready | State header + readiness checklist with ✓/✕ per field + recovery CTA |
| 08 GO WITH RESERVE | Decision header + Reserve / Follow-up / Human Decision structured blocks |
| 09 REPLAN | Trajectory line + preserved evidence note + NOT CREATED YET amber signal |

## MCP limitations

- `use_figma`: one `setCurrentPageAsync` per call — Core and Critical built in separate invocations.
- Screenshot URLs from `get_screenshot` are short-lived MCP asset URLs (not durable repo artifacts).
- File display name via API may show as Document; URL/fileKey remain authoritative.
- No design-system library import used (from-scratch candidate patterns).
- **HISTORICAL STATE AT TIME OF REFINEMENT :** Validation status was NOT VALIDATED BY MORRIS during candidate production.
- **Current status :** VALIDATED BY MORRIS AS CYCLE 4 DESIGN REFERENCE — tokens/branding/WCAG/runtime remain NOT VALIDATED.
