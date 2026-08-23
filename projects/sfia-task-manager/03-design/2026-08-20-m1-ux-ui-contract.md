# SFIA Task Manager — M1 UX/UI Contract

**Projet :** SFIA Task Manager
**Chemin :** `projects/sfia-task-manager/03-design/2026-08-20-m1-ux-ui-contract.md`
**Cycle :** Cycle 4 — UX/UI
**Profil :** Standard
**Typologie :** DOC / DESIGN
**Baseline process :** SFIA v2.6
**Viewport cible :** desktop-first 1440 × 1024
**Fidélité :** representative medium fidelity (targeted refinement applied 2026-08-22)
**Statut :** UX/UI CONTRACT — VALIDATED BY MORRIS AS CYCLE 4 DESIGN REFERENCE

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

Applied in Figma candidate (all 10 frames). Palette and tokens remain **CANDIDATE — NOT VALIDATED DESIGN TOKEN**.

**HISTORICAL STATE AT TIME OF REFINEMENT :** Design validation Morris: **NO** (refinement pass — validation deferred).

## 3c. Morris final visual polish (2026-08-22)

GO MORRIS — « ok go la dessus alors » — validates ChatGPT-proposed refinement direction: rhythm, depth, iconography, information signatures, header enrichment, critical-state composition (06–09), dynamism without product rule changes.

Scope: visual polish only. Luminous palette preserved. No functional redesign. No new interactions.

**HISTORICAL STATE AT TIME OF REFINEMENT :** Design validation Morris: **NO** (polish pass — validation deferred).

| Élément | Valeur |
|---------|--------|
| Figma file | SFIA Task Manager |
| URL | https://www.figma.com/design/2U8pJCYBMtGxaK0F0Ef1nO |
| fileKey | `2U8pJCYBMtGxaK0F0Ef1nO` |
| Source status (current) | **VALIDATED BY MORRIS AS CYCLE 4 DESIGN REFERENCE** |
| Design validation Morris (current) | **YES — AS REFERENCE** |

Historical framing decision « Référence/fileKey Figma = OPEN » is **HISTORICAL OPEN DECISION SUPERSEDED FOR CYCLE 4 CANDIDATE SOURCE BY EXPLICIT MORRIS GO**. Framing file itself is not modified.

## 3d. Morris Cycle 4 Validation Decision

GO MORRIS — VALIDATE CYCLE 4 UX/UI DESIGN AS REFERENCE — FREEZE UX CONTRACT FOR NEXT AUTHORIZED STEPS — NO DELIVERY / NO TECH ARCH / NO BACKLOG IMPLIED

| Élément | Valeur |
|---------|--------|
| UX contract | **FROZEN AS REFERENCE** for next authorized steps |
| Figma fileKey (Cycle 4 design reference) | `2U8pJCYBMtGxaK0F0Ef1nO` |
| Delivery authorized by this validation | **NO** |
| Tech arch implied | **NO** (Cycle 5 separate) |
| Backlog implied | **NO** |
| M1 | **NOT READY** |
| AC demonstrated | **0/16** |
| Design tokens final | **OPEN** |
| Accessibility target | **OPEN** |
| FQ02–FQ05 | **OPEN** |

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
| Design Morris validation | **YES — AS CYCLE 4 DESIGN REFERENCE** |

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
| Status | **VALIDATED BY MORRIS AS CYCLE 4 DESIGN REFERENCE** |
| Pages | M1 — Core Screens (`0:1`) ; M1 — Critical States (`3:2`) |
| Design validation | **YES — AS REFERENCE** (not tokens/branding/WCAG/runtime) |

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
- Figma source Cycle 4 design reference tracée (`2U8pJCYBMtGxaK0F0Ef1nO`)
- M1 NOT READY / AC 0/16
- tokens candidate only (NOT VALIDATED DESIGN TOKEN)
- design validated by Morris **as reference only**

## 33. Morris Cycle 4 validation gate (current)

**MORRIS VISUAL / UX REVIEW — COMPLETED**

GO MORRIS — VALIDATE CYCLE 4 UX/UI DESIGN AS REFERENCE — FREEZE UX CONTRACT FOR NEXT AUTHORIZED STEPS — NO DELIVERY / NO TECH ARCH / NO BACKLOG IMPLIED

Not authorized by this validation : project push / PR / merge / delivery / backlog / M1 READY / tokens final / branding final / WCAG declared / runtime alignment.
