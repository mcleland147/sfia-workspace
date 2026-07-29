# 06 — Local data and application composition

## 1. Composition cible

```text
features/studio-vertical-slice/ (futur)
  facade/
    createProjectFlow.ts
    recommendCycleFlow.ts
    recordLocalMorrisDecisionFlow.ts
    readinessProjection.ts
  ports.ts          # interfaces only
ui screens → facade only (no domain rules)
```

Factories OA existantes :
- `createInMemoryProjectServices(doctrineResolver)`
- `createInMemoryCycleServices(...)`
- `createInMemoryDecisionServices(...)`
- `createInMemoryEvidenceReviewServices(...)`
- T-A7 pure functions
- Optional: `BoundedAtomicAuditStore` injecté pour journal Project↔Cycle

## 2. Options composition (D-VS-02)

| Option | Description | Verdict Cursor |
|--------|-------------|----------------|
| 1 | Facade + mémoire OA seule | viable |
| 2 | D1 SQLite product commands seules | **rejeté** pour cœur OA (D1 ≠ T-A1) |
| 3 | **Hybride** mémoire OA + audit SQLite optionnel | **recommandé** |

D1 `/projects` reste stack parallèle ; ne pas le présenter comme Project OA.

## 3. Distinctions d’état

| Type | Exemples | Lieu |
|------|----------|------|
| État métier | Project, LPS, Cycle, Decision | adapters OA mémoire (process) |
| Audit local | d1_atomic_audit | SQLite local path env |
| État UI | step, form dirty, panel open | React state |
| Cache | projections | mémoire éphémère |
| Fixture | VS-UX-* | fixtures/ + VsDemoContext |
| Vérité doc | method, framing docs | **Git** |

## 4. sessionStorage

Autorisé : UI éphémère / resume demo.
**Interdit** : source de vérité Project/LPS/Decision.

## 5. Fixture boundary

| Mode | Default | Happy path |
|------|---------|------------|
| Product-local OA | on | **oui** |
| VS fixture demo | off | **non** |
| Harness BeB | off | **non** (slice distinct doc 32) |

## 6. Interdits

Supabase · Postgres distant · API cloud · cookies auth · secrets · PII · réseau · package.json change sans arbitrage.
