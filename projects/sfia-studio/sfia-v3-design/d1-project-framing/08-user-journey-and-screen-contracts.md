# 08 — User journey and screen contracts

## Parcours nominal

Workspace Home → New Project → Project Cockpit → select MethodMode → Project Framing (trajectory) → open Cycle → Guided Session (+ Context Status) → Reserve Panel / Decision Center → Gate Modal → Transition Review → Cycle Review seal → Audit Timeline.

## Contrats d’écran

| Écran | Objectif | Données | Actions | États | E | A11y | Acceptation |
|-------|----------|---------|---------|-------|---|------|-------------|
| Workspace Home | Lister projets | projects[] | create, open | L/E/Err | E4 no-project en v3 | landmarks | liste + CTA visible |
| New Project | Créer | form title | submit | validating | — | labels | CreateProject OK |
| Project Cockpit | Pilotage | project, cycles, openGates | open cycle, archive | stale badge | mode badge | headings | mode visible |
| Project Framing | Trajectory | trajectory | edit, ask GPT draft | — | E1 | — | save trajectory |
| Cycle Header | État cycle | cycle state machine | pause/cancel | — | — | live region state | state announced |
| Guided Session | Conversation | turns, proposals | send, apply draft? | context stale lock | E4 stale/free-chat | chat a11y | cannot send if stale |
| Context Status | Digests/HEAD | ContextUsageReceipt | reload | stale/unavail | E4 | status text | shows headSha |
| Reserve Panel | E2 items | reserves | acknowledge | — | E2 | — | reserve listed |
| Decision Center | Open DRs/gates | list | open gate | empty | E3 | — | gate reachable |
| Gate Modal | Décider | gate payload | approve/reject | expired | E3/E4 role | focus trap | RecordHumanDecision |
| Transition Review | Review proposal | proposal | approve/reject | — | E3 | — | invalid transition blocked |
| Cycle Review | Bundle | refs+digests | seal, export MD | unresolved | E3 no-review | — | seal only if verified |
| Audit Timeline | Preuve | events | filter | — | — | table | events append-only visible |

## Visuel

Réutiliser design system Studio existant ; pas de nouveau Figma obligatoire.  
Recommandation : cycle UX ultérieur pour cockpits D1 si GO design.

## Permissions UI

Masquer actions non autorisées **et** refuser côté serveur (doc 10). Responsive : mobile lecture + décisions ; drafting préféré desktop.
