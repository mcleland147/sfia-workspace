# Pre-M6 Option A — product presentation layer

Clean-slate presentation for SFIA Studio Pre-M6 Option A. Every screen in this
folder is new JSX + new CSS modules. Nothing is copied from `studio-projects`,
`vertical-slice-ui`, `StudioShell`, `UtilityRail` or
`project-assistant.module.css`.

## What is reused

Only headless engine artefacts:

- server actions — `@/features/project-assistant/actions`,
  `@/lib/vertical-slice-runtime/actions`
- DTO types — `@/features/project-assistant/types`, `.../f2/types`, `.../f3/types`
- presentation helpers — `@/features/project-assistant/presentationLabels`
  (`deriveRecommendationFreshness`, `attemptStatusUserLabel`,
  `shouldShowProjectRecovery`, `G_UX_08_AMEND_DEFERRED_MESSAGE`)

No domain, persistence or authority change. Confirmation stays process-local,
Recommendation stays distinct from HumanDecision, and no execution authority is
implied anywhere in this layer.

## Structure

| File | Role |
| --- | --- |
| `product-tokens.css` | `--pm6-*` tokens from the manual Figma evidence set; imported once by `ProductShell` |
| `ProductShell` | self-contained brand header + warm canvas; keeps the `studio-shell` E2E anchor |
| `ProjectsPage` | F1 projects entry |
| `NewProjectIntentionPage` | provisional intention sheet (see below) |
| `ProjectWorkspacePage` | F2/F3 workspace: conversation + project state |
| `hooks/useProductConversation` | headless F2/F3 controller (state machine only, no JSX) |
| `surfaces/ConversationSurface` | F2–F8 conversation, decision, contract, attempt and recommendation cards |
| `surfaces/LpsSurface` | "ÉTAT DU PROJET" panel |
| `surfaces/HistorySurface` | F9 durable anchors |
| `surfaces/RecoverySurface` | F10 recovery banner |

## Responsive behaviour

- ≥1400px — conversation + 380px project state column
- 1025–1399px — conversation + 320px project state column
- ≤1024px — project state becomes a right drawer, closed by default, opened via
  `lps-drawer-toggle`
- <768px — conversation full width, composer always reachable

## PROVISIONAL: the new-project screen

There is **no dedicated Figma frame** for project creation. `NewProjectIntentionPage`
is therefore provisional and must be revisited once a frame exists.

Current mapping to `createProjectRuntimeAction`:

| UI field | Runtime input |
| --- | --- |
| Nom du projet (`#project-name`) | `name` |
| Votre intention (`#project-objective`) | `objective` |
| Précisions utiles, optional (`#project-context`) | `context`, falling back to the intention when empty |
| — | `criticality: "STANDARD"` |
| — | `constraints: []` |

Criticality and constraints are no longer asked for: they are qualification
inputs, not product decisions, and the Figma product language never surfaces
them at creation time. `#project-context` is kept as a visible optional field
because the Option A E2E suites fill it directly; a future Figma frame may drop
it in favour of intention-only creation.

## E2E contract

Data-testids are load-bearing. The conversation surface preserves the full
`project-assistant-*`, `f2-*`, `f3-*` and `durable-*` set previously exposed by
`ProjectAssistantPanel`, plus `studio-projects-*`, `project-principal`,
`project-lps-column`, `lps-drawer-toggle`, `lps-drawer-close`,
`living-project-state-panel`, `project-history-panel`, `lps-diagnostics`,
`project-recovery-banner`, `recovery-resume-durable`, `recovery-requalify`,
`project-durability-hint`, `create-project-form`, `create-project-submit`,
`idempotency-key`, `submit-error` and `open-project-workspace`.

Two structural constraints the suites depend on:

- `project-assistant-f3-prepare` contains exactly one `<summary>` (the legacy
  fixture path), because a spec does `.locator("summary")` on it.
- each route renders exactly one `<h1>`, because the accessibility smoke test
  resolves `heading level 1` in strict mode.
