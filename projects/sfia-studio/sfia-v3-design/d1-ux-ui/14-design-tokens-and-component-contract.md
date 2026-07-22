# 14 — Tokens & components

## Audit tokens existants (`tokens.css`)
Réutiliser couleurs/ombres/fonts Studio. **Ne pas** réutiliser layout artboard 1440×1024 comme vérité D1.

Nouveaux tokens candidats (non implémentés) :
`--sfia-nav-width`, `--sfia-context-rail-min/max`, `--sfia-shell-gutter`, `--sfia-e0..e4-*`

## Composants UX candidats

| Composant | Rôle | Variants | A11y | Mapping code futur |
|-----------|------|----------|------|--------------------|
| AppShell | grid 3 zones | collapsed rail | landmarks | remplace StudioShell layout |
| WorkspaceSwitcher | WS | — | combobox | new |
| ProjectHeader | identité+badges | — | heading | new |
| MethodModeBadge | mode | v26/transition/v3 | status | extend globalModeBadge |
| ProjectStateBadge | state | DRAFT… | status | new |
| CycleHeader | cycle state | — | status | new |
| CycleStepper | progression | — | — | new |
| ContextStatus | digests | ready/stale | live | new |
| ReserveCard | E2 | open/resolved | — | new |
| DecisionCard | DR | open/decided | — | new |
| GateDialog | E3 | open/expired | dialog | extend action gate UI |
| GuidedConversation | chat | — | log | from Ops1 journal |
| StructuredProposal | proposals | kinds | — | new |
| ContextualRail | control channel | collapsed | complementary | replace Copilot |
| ReviewSummary | bundle | draft/sealed | — | new |
| AuditTimeline | events | — | table | extend events |
| Empty/Error/StaleBanner | states | — | alert | new |

Aucun composant n’est baseline avant validation UX.
