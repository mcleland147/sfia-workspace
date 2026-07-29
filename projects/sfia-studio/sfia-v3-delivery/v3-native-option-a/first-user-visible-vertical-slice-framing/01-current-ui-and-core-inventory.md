# 01 — Current UI and core inventory

## 1. Observation confirmée

Une UI POC existe. Elle n’est **pas** un produit fonctionnel branché sur Option A.

## 2. Routes existantes

| Route | Rôle actuel | Source données | KEEP/ADAPT/REPLACE/REMOVE |
|-------|-------------|----------------|---------------------------|
| `/` | redirect → `/synthese` | n/a | **ADAPT** → empty/list ou dashboard |
| `/synthese` | VS-UX-10 clôture POC | fixture + harness | **ADAPT** → Readiness Dashboard |
| `/decision` | Gate Morris POC GO/NO-GO… | fixture + harness | **ADAPT** → Morris Decision (T-A3) |
| `/cycle-actif` | Exécution/analyse POC | fixture + harness | **REPLACE LATER** pour V1–V5 (hors happy path) ; conserver demo |
| `/nouvelle-demande` | D1 intake conversationnel | D1 SQLite | **KEEP** (parcours parallèle) ; **ne pas** fusionner forcé en V1 |
| `/ops1/nouvelle-demande` | OPS1 legacy | OPS1 sessionStorage | **REMOVE LATER** (hors slice) |
| `/workspace` | D1 home | D1 SQLite | **KEEP** parallèle ; éventuel lien futur |
| `/projects/new` | Création D1 manuelle | D1 commands | **ADAPT inspiration** ; V1 doit appeler **OA T-A1** pas seulement D1 |
| `/projects/[id]` | Cockpit D1 | D1 get/audit | **ADAPT inspiration** → Project overview OA |

## 3. Composants

| Composant | Décision |
|-----------|----------|
| `StudioShell` | **KEEP** — layout rail/topbar/canvas/copilot |
| `UtilityRail` / `Topbar` / `FLUSH_TABS` | **ADAPT** — onglets alignés parcours cible |
| `CopilotPanel` (Nora) | **KEEP** en mode disclosure ; pas d’autorité |
| `VsDemoRoot` / `VsDemoChrome` / `VsDemoContext` | **KEEP** pour demo fixture ; **ne pas** devenir store produit |
| `Vs*Screen` | **ADAPT** patterns UI ; remplacer data fixture par projections facade |
| UI primitives (`StatusPill`, `MetricCard`, `CtaButton`, `Card`…) | **KEEP** |
| `D1AppShell` / intake | **KEEP** stack D1 parallèle |
| Harness (`lib/harness/**`) | **KEEP** pour BeB demo ; **hors** happy path V1–V5 |
| `sessionStorage` VS keys | **UI éphémère / resume demo only** — **interdit** pour état métier OA |

## 4. Cœur OA (non branché UI)

| Zone | Path | Factory |
|------|------|---------|
| T-A0 | `app/lib/oa/doctrine/**` | `createLocalDoctrineResolver` / test |
| T-A1 | `app/lib/oa/project/**` | `createInMemoryProjectServices` |
| T-A2 | `app/lib/oa/cycle/**` | `createInMemoryCycleServices` |
| T-A3 | `app/lib/oa/decision/**` | `createInMemoryDecisionServices` |
| T-A4 | `app/lib/oa/execution-contract/**` | in-memory |
| T-A5 | `app/lib/oa/execution-attempt/**` | NoOp/Test adapters only |
| T-A6 | `app/lib/oa/evidence-review/**` | in-memory |
| T-A7 | `app/lib/platform/t-a7/**` | fonctions pure/read-only |
| Audit local | `app/lib/d1/boundedAtomicAudit.ts` | `BoundedAtomicAuditStore` |

**Gap critique** : zéro import `@/lib/oa/**` depuis `app/app/**` ou `features/**`.

## 5. Dette POC

- Trois stacks parallèles (VS / OPS1 / D1)
- VsDemoContext comme pseudo-store
- sessionStorage métier-adjacent
- Copy « simulation » / gates fixture confondables avec décisions réelles
- Tab Preuves disabled simulé
- Doc `32` décrit un BeB harness/agent — **distinct** du slice user-visible OA ciblé ici

## 6. Réutilisable tel quel

StudioShell layout · tokens.css · UI primitives · use cases OA · T-A7 evaluators · doctrine fixtures registry.

## 7. Fixture-only aujourd’hui

Tout `Vs*` happy path · harness fixture/simulation · Increment C/D/E panels.
