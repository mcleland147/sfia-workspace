# 18 — Impact map D1-I1 (sans modification code)

| Élément | Action |
|---------|--------|
| `/workspace` | **adapter** (reprises + lien Nouvelle demande) |
| `/projects/new` | **déprécier** comme entrée principale → manuel avancé |
| `/projects/[id]` | **adapter** (audit métier ; masquer technique) |
| `/nouvelle-demande` | **conserver** legacy OPS1 |
| Route intake cible `/` ou `/demande` | **nouveau** (décision naming) |
| `D1AppShell` | **réutiliser** |
| `NewProjectForm` | **adapter** → manuel avancé ; retirer MethodMode UI |
| `MethodModeBadge` select | **déprécier** UI ; badge lecture seule OK |
| `ProjectCockpitView` audit brut | **adapter** |
| `lib/d1` persistence | **réutiliser** |
| `RequestRoutingProposal` | **nouveau** |
| CycleInstance / GuidedSession | **nouveau** (C4–C5) |
| GPT intake | **nouveau** (C2) |
| Context lookup service | **nouveau** (C3) |
| Tests I1 | **conserver** ; étendre C6 |
| Figma page Project Framing | **conserver** ; page Intake **nouvelle** |
| D1-I2 GuidedSession ancien plan | **recaler** après C1–C5 |

## Interdit dans ce cycle

Modifier `app/**`, tests, package.json, framing/modeled/delivery existants.
