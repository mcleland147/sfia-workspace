# SFIA Review Pack — FULL — Cycle 4 R-UI-01 Background Consistency Fix — SFIA Task Manager

**Timestamp (Europe/Paris):** 2026-08-22 15:23:01 CEST
**Cycle:** Cycle 4 — UX/UI — R-UI-01 Core Background Consistency Fix
**Profil:** Standard
**Typologie:** DESIGN / targeted visual consistency fix

## Exact Morris decision

« ok go » — approves R-UI-01: CORE SCREEN 04 GLOBAL BACKGROUND INCONSISTENT WITH APP SHELL — MINOR VISUAL FIX

Prior handoff: `2582d3f301613ebfec674af5d2dfdc3e06e72aa1` (final visual polish — documentary evidence regularization required)

## Git local truth

- Branch: `project/sfia-task-manager-cycle-4-ux-ui`
- Project HEAD: `f850259768e2a4736dc8cce19cd062244a52d727`
- origin/main: `aca3dc8ab250ea1d751a833912787751e856c7b6`
- Remote project branch: **ABSENT** (expected)
- Staged: **NONE**
- Project commit: **NO**
- Project push: **NO**
- PR: **NO**
- Project docs modified this micro-fix: **NONE**

## Figma

- fileKey: `2U8pJCYBMtGxaK0F0Ef1nO`
- URL: https://www.figma.com/design/2U8pJCYBMtGxaK0F0Ef1nO
- WRITE: **YES**
- Frame modified: **04 only** (`14:106`)

## R-UI-01 — Background consistency

### Before

| Node | Role | Fill |
|------|------|------|
| `13:114` Main (ref 02) | Core reference | `#FFFFFF` |
| `14:2` Main (ref 03) | Core reference | `#FFFFFF` |
| `14:106` frame | Top-level | `#F6F9FD` |
| `14:106` Main (`14:120`) | App content area | **`#F5F3FF`** (lavender — inconsistent) |

### Mutation

- Node mutated: **`14:120`** (Main inside `14:106`) only
- Action: copy exact fill from frame 02 Main (`13:128`)
- Frame top-level `14:106` unchanged: `#F6F9FD`

### After

| Node | Fill | Match core |
|------|------|------------|
| `14:120` Main | **`#FFFFFF`** | **YES** — equals 02/03/05 Main |
| `14:106` frame | `#F6F9FD` | YES |

### Semantic colors preserved

| Element | Node | Fill after | Preserved |
|---------|------|------------|-----------|
| Human Decision | `14:165` | `#F5F3FF` | YES |
| Expected Exit Proof | `14:125` | `#EFF6FF` | YES |
| Actual Evidence | `14:139` | `#ECFEFF` | YES |
| GO | `14:171` | `#ECFDF5` | YES |
| GO WITH RESERVE | `14:175` | `#FFFBEB` | YES |
| REPLAN | `14:178` | `#EFF6FF` | YES |
| NO-GO | `14:181` | `#FEF2F2` | YES |

## Layout / content / functional

- Layout changes: **NONE**
- Content changes: **NONE**
- Functional changes: **NONE**
- Overflow violations on 04: **0**
- Other frames modified: **NONE**
- Top-level IDs: **ALL PRESERVED**

## Native screenshots

| Frame | Node | Result |
|-------|------|--------|
| 04 Review & Decision | `14:106` | **PASS** 1440×1024 |
| 02 Work Item (comparison) | `13:114` | **PASS** 1440×1024 |

## Governance

M1 **NOT READY** · AC **0/16** · Design tokens final **OPEN** · Accessibility target **OPEN** · FQ02–FQ05 **OPEN** · Tech arch NOT EXECUTED · Backlog NOT EXECUTED · Delivery NOT EXECUTED

## Verdict

**CYCLE 4 R-UI-01 BACKGROUND CONSISTENCY FIX COMPLETE — CORE APP SHELL RESTORED ON FRAME 04 — DOCUMENTARY REVIEW EVIDENCE REGULARIZED — READY FOR CHATGPT FINAL CYCLE 4 REVIEW — NO PROJECT COMMIT**

Not concluded: CYCLE 4 VALIDATED · FIGMA VALIDATED BY MORRIS · TOKENS VALIDATED · M1 READY

## Next gate

**CHATGPT FINAL CYCLE 4 REVIEW → MORRIS CYCLE 4 UX/UI VALIDATION DECISION**

---

# DOCUMENTARY EVIDENCE REGULARIZATION

The following sections reproduce IN FULL the locally modified Cycle 4 design documentation not fully embedded in prior handoffs. No project files were modified for this regularization — content read from local candidate state.

# SFIA Task Manager — M1 UX/UI Contract

**Projet :** SFIA Task Manager
**Chemin :** `projects/sfia-task-manager/03-design/2026-08-20-m1-ux-ui-contract.md`
**Cycle :** Cycle 4 — UX/UI
**Profil :** Standard
**Typologie :** DOC / DESIGN
**Baseline process :** SFIA v2.6
**Viewport cible :** desktop-first 1440 × 1024
**Fidélité :** representative medium fidelity (targeted refinement applied 2026-08-22)
**Statut :** UX/UI CONTRACT — CANDIDATE — MORRIS REVIEW REQUIRED

---

## 1. Purpose / authority

Transformer le contrat fonctionnel M1 validé et l'architecture fonctionnelle validée en expérience visuelle et interactionnelle explicite — sans modifier le modèle métier, le lifecycle ou les décisions humaines.

## 2. Exact Morris Cycle 4 GO

GO MORRIS — OPEN CYCLE 4 UX/UI — STANDARD — FIGMA DESIGN-FIRST — INCLUDE R-DOC-02 TRACKING CORRECTION — NO TECH ARCH / BACKLOG / DELIVERY

## 3. Exact Morris Figma source GO

GO MORRIS — CREATE NEW FIGMA DESIGN FILE "SFIA Task Manager" IN CURRENT PRO TEAM — USE IT AS CYCLE 4 FIGMA SOURCE CANDIDATE — NO DESIGN VALIDATION IMPLIED

## 3b. Morris luminous visual direction (2026-08-22)

GO MORRIS — « Je trouve l'interface un peu terne, rajoute un peu de couleur à tout ça. Que ce soit lumineux mais très lisible et fluide pour l'utilisateur. »

Scope: visual direction only — luminosity, controlled semantic color, readability, visual fluidity. No functional redesign, no new navigation, no new product rules, no lifecycle/content changes.

Applied in Figma candidate (all 10 frames). Palette and tokens remain **CANDIDATE — NOT VALIDATED DESIGN TOKEN**. Design validation Morris: **NO**.

## 3c. Morris final visual polish (2026-08-22)

GO MORRIS — « ok go la dessus alors » — validates ChatGPT-proposed refinement direction: rhythm, depth, iconography, information signatures, header enrichment, critical-state composition (06–09), dynamism without product rule changes.

Scope: visual polish only. Luminous palette preserved. No functional redesign. No new interactions. Design validation Morris: **NO**.

| Élément | Valeur |
|---------|--------|
| Figma file | SFIA Task Manager |
| URL | https://www.figma.com/design/2U8pJCYBMtGxaK0F0Ef1nO |
| fileKey | `2U8pJCYBMtGxaK0F0Ef1nO` |
| Source status | CYCLE 4 FIGMA SOURCE CANDIDATE |
| Design validation Morris | **NO** |

Historical framing decision « Référence/fileKey Figma = OPEN » is **HISTORICAL OPEN DECISION SUPERSEDED FOR CYCLE 4 CANDIDATE SOURCE BY EXPLICIT MORRIS GO**. Framing file itself is not modified.

## 4. Sources / precedence

1. Git main courant
2. Décisions Morris explicites (Cycle 4 GO + Figma source GO + FQ01 / architecture)
3. Spec fonctionnelle Cycle 2 validée
4. Architecture fonctionnelle Cycle 3 validée
5. Framing historique (baseline ; formulations obsolètes n'écrasent pas les décisions Morris postérieures)
6. Guidance CKC candidate (sans autorité d'exécution)

## 5. M1 maturity

| Élément | Valeur |
|---------|--------|
| M1 | **NOT READY** |
| AC demonstrated | **0/16** |
| Architecture technique | NOT EXECUTED |
| Backlog | NOT EXECUTED |
| Delivery/code | NOT EXECUTED |
| Design Morris validation | **NO** |

## 6. UX principles

| ID | Principe |
|----|----------|
| UX-P1 | Répondre immédiatement : où / pourquoi / bloque / next action / preuve / décision |
| UX-P2 | Hiérarchie State → Next action → Risk/blocker → Evidence → Decision → History |
| UX-P3 | Sobre, professionnelle, dense, orientée contrôle |
| UX-P4 | Pas clone Jira ; pas interface AI futuriste ; IA non centrale |
| UX-P5 | Couleur sémantique ; information critique jamais couleur-only |
| UX-P6 | Surfaces = projections ; pas sources de vérité métier distinctes |
| UX-P7 | Action indisponible = reason visible (pas silent disable) |
| UX-P8 | Blocked orthogonal au lifecycle |
| UX-P9 | Human Decision jamais automatisée |
| UX-P10 | Desktop-first 1440×1024 ; moyenne fidélité structurante |

## 7. Information hierarchy

State → Next action → Risk / blocker → Evidence → Decision → History

## 8. Navigation model

| Zone | Rôle |
|------|------|
| Primary nav | Workboard / Work Item / Cycle Workspace / Review & Decision / Project |
| Contextual | Quick Inspector (Workboard transversal) |
| No | secondary analytics nav, AI chat dock, configurable Jira-like workflow |

## 9. Screen map

| # | Frame | Page Figma |
|---|-------|------------|
| 01 | Workboard | M1 — Core Screens |
| 02 | Work Item | M1 — Core Screens |
| 03 | Cycle Workspace | M1 — Core Screens |
| 04 | Review & Decision | M1 — Core Screens |
| 05 | Project | M1 — Core Screens |
| 06 | Work Item / Blocked | M1 — Critical States |
| 07 | Work Item / Cannot Ready | M1 — Critical States |
| 08 | Review / GO WITH RESERVE | M1 — Critical States |
| 09 | Review / REPLAN | M1 — Critical States |
| 10 | Empty Workspace | M1 — Critical States |

## 10. Surface responsibility matrix

| Surface | Objectif | Affiche | Actions | Ne possède PAS |
|---------|----------|---------|---------|----------------|
| Workboard | Lecture kanban + next action | WI cards, columns, Blocked flag | create WI, open WI, inspect | Decision verdict, Cycle contract |
| Work Item | Qualification / détail | Intent→History | qualify, ready prep, block/unblock | Auto-decision |
| Cycle Workspace | Exécution bornée | Contract vs control | progress, attach evidence, gates | Done verdict |
| Review & Decision | Preuve vs expected + verdict | Expected vs Actual | GO / GO WITH RESERVE / REPLAN / NO-GO | Create Project |
| Project | Agrégation | Project intent + WI list | open WI, create WI | Cycle internals |
| Quick Inspector | Aperçu transversal Workboard | title, objective, status, next_action, blocked, cycle, gate | navigation only | Source de vérité ; 6e domaine |

## 11. Workboard specification

Colonnes : Inbox · Qualified · Ready · In Progress · Review · Decision · Done

Carte minimale : title, project, SFIA profile, blocked indicator si applicable, next_action, current gate si applicable.

Pas de badge status redondant si la colonne suffit.

Quick Inspector : panneau transversal ; projection uniquement.

## 12. Work Item specification

Sections : Intent, Qualification, Scope, Dependencies, Guardrails, Exit Proof, Current Cycle, Next Action, History.

Next Action prioritaire.

Interdit : comments/subtasks Jira-like, AI assistant central.

## 13. Cycle Workspace specification

Zone principale — Execution Contract : objective, cycle_type, profile, scope, out_of_scope, guardrails, allowed/forbidden files.

Zone contrôle — Gates, Stop Conditions, Exit Proof, Evidence, review pack status, git refs informationnels.

Lecture : autorisé vs contrôle de sortie.

## 14. Review & Decision specification

Comparaison explicite Expected exit proof vs Actual evidence.

Aussi : validation results, reservations, guardrail violations, review pack status, Git refs, human decision.

Verdicts : GO · GO WITH RESERVE · REPLAN · NO-GO.

Action indisponible = reason visible.

## 15. Project specification

Intention Project, Work Items, états, blocked indicators, next actions, current Cycles utiles.

Interdit : advanced analytics, reporting complexe, workflow configurable.

## 16. Quick Inspector specification

Transversal Workboard. Affiche : title, objective court, status, next_action, blocked/reason, current Cycle, current Gate.

Ne possède aucun état métier.

## 17. Critical states matrix

| Frame | Base | Différenciateur |
|-------|------|-----------------|
| 06 Blocked | Work Item | flag Blocked + reason + unblock + next_action ; lifecycle inchangé |
| 07 Cannot Ready | Work Item Qualified | Ready indisponible + champs manquants + corrective |
| 08 GO WITH RESERVE | Review | reserve + follow-up + Decision |
| 09 REPLAN | Review | reason + Cycle historical + retour Q/R + history preserved |
| 10 Empty | Workspace | empty state + first action |

## 18. Blocked UX

Lifecycle state courant visible.
Blocked = true + reason + unblock condition + next_action.
Pas de colonne/status Blocked.

## 19. Cannot Ready UX

Ready indisponible avec liste des préconditions manquantes (profile, in_scope, out_of_scope, dependencies, guardrails, exit_proof) + action corrective.
Pas de bouton grisé silencieux.

## 20. GO WITH RESERVE UX

Expected vs Actual + reserve obligatoire + follow-up/next_action + author/date.
Trajectoire de réserve visible.

## 21. REPLAN UX

Reason + Cycle → Historical + Evidence/Decision conservées + retour Qualified OU Ready + next_action.
Pas de reset / suppression / effacement historique.

## 22. Empty Workspace UX

État vide clair + explication minimale + première action.
Pas de wizard/onboarding long/IA centrale.

## 23. Interaction rules

| Règle | Comportement |
|-------|--------------|
| Primary CTA | Une action primaire claire par surface |
| Secondary | Visible mais subordonnée |
| Destructive / structurant | Confirmation humaine explicite |
| Disabled | Toujours avec reason |
| Navigation | Conserve contexte WI/Cycle |

## 24. Disabled / error explanation rules

Toute action structurante indisponible expose la cause et la next_action corrective.
Errors : message + champ concerné + remediation.

## 25. Desktop 1440×1024 assumptions

Toutes frames candidates : 1440 × 1024.
Desktop-first ; pas de responsive mobile complet dans ce cycle.

## 26. Accessibility candidate guardrails

Accessibility target contractuel : **OPEN**.

Guardrails candidats (non contractuels) :
- info critique non couleur-only ;
- contraste lisible ;
- labels textuels ;
- disabled expliqué ;
- focus/clavier = exigences candidates.

## 27. Design-token candidate status

Design tokens définitifs : **OPEN**.
Valeurs utilisées en Figma = **CANDIDATE — NOT VALIDATED DESIGN TOKEN**.

## 28. Figma source

| Champ | Valeur |
|-------|--------|
| URL | https://www.figma.com/design/2U8pJCYBMtGxaK0F0Ef1nO |
| fileKey | `2U8pJCYBMtGxaK0F0Ef1nO` |
| Editor type | Figma Design |
| Status | CYCLE 4 FIGMA SOURCE CANDIDATE |
| Pages | M1 — Core Screens (`0:1`) ; M1 — Critical States (`3:2`) |
| Design validation | **NOT VALIDATED BY MORRIS** |

| Frame | Node ID | W×H |
|-------|---------|-----|
| 01 — Workboard | `13:2` | 1440×1024 |
| Quick Inspector (transversal) | `13:91` | (panel inside 01) |
| 02 — Work Item | `13:114` | 1440×1024 |
| 03 — Cycle Workspace | `14:2` | 1440×1024 |
| 04 — Review & Decision | `14:106` | 1440×1024 |
| 05 — Project | `14:184` | 1440×1024 |
| 06 — Work Item / Blocked | `16:2` | 1440×1024 |
| 07 — Work Item / Cannot Ready | `16:27` | 1440×1024 |
| 08 — Review / GO WITH RESERVE | `16:74` | 1440×1024 |
| 09 — Review / REPLAN | `16:96` | 1440×1024 |
| 10 — Empty Workspace | `16:119` | 1440×1024 |

Targeted refinement (2026-08-22): frames rebuilt with representative content and visual affordances. Buttons/CTAs shown are **VISUAL CANDIDATES** for comprehension — not new validated M1 behaviors unless already in functional contract.

Screenshots MCP: YES for frames 01–10 (ephemeral asset URLs; not design validation).

## 29. AC01–AC16 design traceability

| AC | Surface / état UX | Coverage |
|----|-------------------|----------|
| AC01 | Project | MAPPED / NOT DEMONSTRATED |
| AC02 | Workboard Inbox | MAPPED / NOT DEMONSTRATED |
| AC03 | Work Item Qualify | MAPPED / NOT DEMONSTRATED |
| AC04 | Cannot Ready | MAPPED / NOT DEMONSTRATED |
| AC05–AC07 | Cycle Workspace | MAPPED / NOT DEMONSTRATED |
| AC08 | Blocked | MAPPED / NOT DEMONSTRATED |
| AC09–AC10 | Cycle / Review evidence | MAPPED / NOT DEMONSTRATED |
| AC11–AC12 | Review Decision / Done | MAPPED / NOT DEMONSTRATED |
| AC13 | REPLAN | MAPPED / NOT DEMONSTRATED |
| AC14 | Workboard / Project | MAPPED / NOT DEMONSTRATED |
| AC15 | History sections | MAPPED / NOT DEMONSTRATED |
| AC16 | No auto decision UI | MAPPED / NOT DEMONSTRATED |

**AC demonstrated : 0/16**

## 30. Explicit non-decisions

Frontend stack · backend · APIs · database · auth · hosting · Figma Make · design tokens définitifs · accessibility target contractuel · branding définitif · backlog · delivery · Git native · agent UI central.

## 31. Open questions

| # | Question | Statut |
|---|----------|--------|
| FQ02–FQ05 | Type / priority / Evidence delete / archive | **OPEN** |
| UX-Q1 | Densité exacte carte Workboard | OPEN — NON BLOCKING |
| UX-Q2 | Placement Quick Inspector gauche/droite | OPEN — NON BLOCKING |
| Accessibility target | WCAG level | **OPEN** |
| Design tokens final | Palette/type/spacing | **OPEN** |

## 32. Exit proof Cycle 4

- 5 surfaces + Quick Inspector
- 10 frames mappées
- variants critiques explicites
- aucune règle métier nouvelle
- Figma source candidate tracée
- M1 NOT READY / AC 0/16
- tokens candidate only
- design non validé Morris

## 33. Morris visual review gate

Next gate : **MORRIS CYCLE 4 VISUAL / UX REVIEW**

Not authorized : project commit / push / PR / delivery / tech arch / backlog / M1 READY / design validated without Morris.


---

# APPENDIX B — FIGMA DESIGN BRIEF (FULL LOCAL CANDIDATE)

# SFIA Task Manager — Figma Design Brief

**Chemin :** `projects/sfia-task-manager/03-design/2026-08-20-figma-design-brief.md`
**Cycle :** Cycle 4 — UX/UI
**Statut :** FIGMA DESIGN BRIEF — SOURCE ESTABLISHED — DESIGN CANDIDATE — FINAL VISUAL POLISH APPLIED
**Validation Morris :** NOT VALIDATED BY MORRIS

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
| Source-of-truth status | CYCLE 4 FIGMA SOURCE CANDIDATE — NOT VALIDATED BY MORRIS |
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
- Validation status remains: **NOT VALIDATED BY MORRIS**.


---

# APPENDIX C — FIGMA REVIEW CHECKLIST (FULL LOCAL CANDIDATE)

# SFIA Task Manager — Figma Review Checklist (Morris)

**Chemin :** `projects/sfia-task-manager/03-design/2026-08-20-figma-review-checklist.md`
**Cycle :** Cycle 4 — UX/UI
**Source Figma :** https://www.figma.com/design/2U8pJCYBMtGxaK0F0Ef1nO (`2U8pJCYBMtGxaK0F0Ef1nO`)
**Statut :** CHECKLIST FOR MORRIS REVIEW — NOT PRE-VALIDATED

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
| Visual accept / revise / reject | | | Do not prefill |
| Token promotion | | | Remains OPEN unless Morris decides |
| Accessibility target | | | Remains OPEN unless Morris decides |
| Project commit authorization | | | Separate GO required |
