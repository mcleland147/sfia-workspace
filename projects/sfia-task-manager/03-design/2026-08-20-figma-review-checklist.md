# SFIA Task Manager — Figma Review Checklist (Morris)

**Chemin :** `projects/sfia-task-manager/03-design/2026-08-20-figma-review-checklist.md`
**Cycle :** Cycle 4 — UX/UI
**Source Figma :** https://www.figma.com/design/2U8pJCYBMtGxaK0F0Ef1nO (`2U8pJCYBMtGxaK0F0Ef1nO`)
**Statut :** CHECKLIST FOR MORRIS REVIEW — CYCLE 4 DESIGN REFERENCE VALIDATED

Columns for Morris use: Criterion | Status | Evidence / node | Morris comment | Decision

---

## A. Global

| Criterion | Status | Evidence / node | Morris comment | Decision |
|-----------|--------|-----------------|----------------|----------|
| 1440×1024 respected | | 01–10 all 1440×1024 (`13:2`…`16:119`) | | |
| 5 surfaces present | | 01–05 on page `0:1` | | |
| Quick Inspector transversal (not 6th domain) | | `13:91` inside `13:2` | | |
| 5 critical states present | | 06–10 on page `3:2` | | |
| Sobre / professionnel / dense | | screenshots MCP YES 01–10 | | |
| Luminous / readable (Morris direction) | | blue-tint bg `#F6F9FD`, improved contrast, not gray-flat | | |
| Controlled semantic color palette | | blue/azure dominant + cyan/teal + green/amber/red/violet limited | | |
| No excessive saturation / no rainbow UI | | outline/tint verdicts; no full-sat column backgrounds | | |
| No color-only critical information | | badges with text; borders + labels alongside color | | |
| Consistent palette across 01–10 | | same candidate tokens applied globally | | |
| Control / decision oriented | | frames 03–04, 08–09 | | |
| No Jira clone | | no subtasks/comments/metadata chrome | | |
| No AI-first | | no AI assistant surface | | |
| Hierarchy State → Next Action → Risk → Evidence → Decision → History | | NEXT ACTION banners + sections | | |

## B. Hierarchy / information

| Criterion | Status | Evidence / node | Morris comment | Decision |
|-----------|--------|-----------------|----------------|----------|
| State visible first | | column headers / lifecycle labels | | |
| Next Action prominent | | accent NEXT ACTION banners | | |
| Risk/blocker explicit when present | | `5:113`, WI-099 blocked labels | | |
| Evidence visible where required | | `5:39`, `5:2` control zone | | |
| Decision human-only | | verdict row + disabled reason text | | |
| History reconstructible | | History section / REPLAN conserved | | |

## C. Per-frame (01–10)

For each frame: structure correct · mandatory content · primary actions · disabled reasons · no invented business rule · no critical info color-only

| Frame | Structure | Mandatory content | Primary actions | Disabled reasons | No invented rules | No color-only critical | Evidence / node | Morris comment | Decision |
|-------|-----------|-------------------|-----------------|------------------|-------------------|------------------------|-----------------|----------------|----------|
| 01 Workboard | | | | | | | `13:2` (+ QI `13:91`) | | |
| 02 Work Item | | | | | | | `13:114` | | |
| 03 Cycle Workspace | | | | | | | `14:2` | | |
| 04 Review & Decision | | | | | | | `14:106` | | |
| 05 Project | | | | | | | `14:184` | | |
| 06 Blocked | | | | | | | `16:2` | | |
| 07 Cannot Ready | | | | | | | `16:27` | | |
| 08 GO WITH RESERVE | | | | | | | `16:74` | | |
| 09 REPLAN | | | | | | | `16:96` | | |
| 10 Empty Workspace | | | | | | | `16:119` | | |

## D. Critical variants

| Criterion | Status | Evidence / node | Morris comment | Decision |
|-----------|--------|-----------------|----------------|----------|
| Blocked orthogonal (not lifecycle column) | | `16:2` | | |
| Cannot Ready explanatory (not silent grey) | | `16:27` | | |
| GO WITH RESERVE shows reserve + follow-up | | `16:74` | | |
| REPLAN preserves history / Cycle historical | | `16:96` | | |
| Empty Workspace clear first action | | `16:119` | | |

## E. Governance

| Criterion | Status | Evidence / node | Morris comment | Decision |
|-----------|--------|-----------------|----------------|----------|
| Figma candidate only (not validated) | | | | |
| Tokens candidate only | | | | |
| Accessibility target OPEN | | | | |
| FQ02–FQ05 OPEN | | | | |
| No tech arch | | | | |
| No backlog | | | | |
| No delivery | | | | |
| M1 NOT READY | | | | |
| AC demonstrated 0/16 | | | | |
| No project commit implied | | | | |

## F. Luminous visual refinement (Morris 2026-08-22)

| Criterion | Status | Evidence / node | Morris comment | Decision |
|-----------|--------|-----------------|----------------|----------|
| Perceptibly more luminous than prior gray candidate | | app bg `#F6F9FD`, white cards, navy sidebar | | |
| NEXT ACTION visually primary | | blue tint banners all frames | | |
| Human Decision explicit on 04 | | violet soft panel `14:106` | | |
| 4 verdicts visible on 04 (not 4 saturated permanent buttons) | | GO / GO WITH RESERVE / REPLAN / NO-GO outline+tint | | |
| Sidebar brighter (navy not charcoal) | | `#172554` all frames | | |
| Status badges semantic + text | | In Progress/Ready/Done/etc. | | |
| Layout non-regression (02/03/04) | | overflow 0 on `13:114`, `14:2`, `14:106` | | |

## G. Final visual polish (Morris 2026-08-22)

| Criterion | Status | Evidence / node | Morris comment | Decision |
|-----------|--------|-----------------|----------------|----------|
| Visual rhythm improved vs luminous-only | | composed panels, headers, card rails | | |
| Light iconography coherent (icon + text) | | → ◧ ◉ ✓ ✕ ⚠ ↻ across frames | | |
| Depth hierarchy consistent (L0/L1/L2) | | shadows on headers, QI, critical panels | | |
| Information signatures distinguishable | | STATE/NEXT ACTION/EVIDENCE/DECISION/HISTORY | | |
| Critical states 06–09 more composed | | ~780px panels, not isolated top-left cards | | |
| REPLAN trajectory readable | | `16:96` trajectory line | | |
| GO WITH RESERVE composition readable | | `16:74` structured blocks | | |
| Quick Inspector layout non-regression | | `13:92` width 1132, no clipping | | |
| No clipping / no overflow | | 0 violations all 10 frames | | |
| No icon-only critical information | | all icons paired with text | | |

## H. Morris decision record

| Decision | Result | Date | Notes |
|----------|--------|------|-------|
| Visual accept / revise / reject | **ACCEPT AS DESIGN REFERENCE** | 2026-08-23 | GO MORRIS — VALIDATE CYCLE 4 UX/UI DESIGN AS REFERENCE — FREEZE UX CONTRACT FOR NEXT AUTHORIZED STEPS — NO DELIVERY / NO TECH ARCH / NO BACKLOG IMPLIED |
| Token promotion | OPEN | | Remains OPEN unless Morris decides |
| Accessibility target | OPEN | | Remains OPEN unless Morris decides |
| Project commit authorization | Separate GO | | Local regularization authorized separately; push/PR/merge NOT authorized by Cycle 4 validation |

## I. Final Cycle 4 review outcome

**MORRIS VISUAL / UX REVIEW — COMPLETED**

**CYCLE 4 DESIGN REFERENCE — VALIDATED**

Exact GO:

GO MORRIS — VALIDATE CYCLE 4 UX/UI DESIGN AS REFERENCE — FREEZE UX CONTRACT FOR NEXT AUTHORIZED STEPS — NO DELIVERY / NO TECH ARCH / NO BACKLOG IMPLIED

| Item | Status |
|------|--------|
| Runtime comparison | **NOT EXECUTED / N/A** |
| Delivery | **NOT EXECUTED** |
| Design tokens final | **OPEN** |
| Branding final | **OPEN** |
| Accessibility / WCAG declared | **OPEN** |
| M1 | **NOT READY** |
| AC demonstrated | **0/16** |
