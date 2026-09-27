# SFIA Studio — Living Production Runtime Reference

**Nature:** CURRENT AS-IMPLEMENTED / LIVING PRODUCTION RUNTIME REFERENCE
**Reviewed commit:** `1162b36b14ca2f4f644dcd3da970b25113214b06`
**Reviewed at:** 2026-09-27T14:40:00+0200
**Macro foundation:** SFIA-STUDIO-LIVING-PRODUCTION-RUNTIME-REFERENCE-01
**Last audit overlay:** SFIA-STUDIO-LEGACY-ARCHITECTURE-DECOMMISSION-01 (no SAFE removal; CURRENT clarifications only)

## What this corpus is

This corpus describes **how SFIA Studio actually works now** in the checked-out Git tree:

- objects and responsibilities;
- end-to-end flows;
- upstream/downstream dependencies;
- persistence / restart / recovery;
- authority / cognition / execution boundaries;
- environments and configuration;
- tests and proof oracles;
- impact-analysis procedure for future changes.

It is the primary **impact-analysis substrate** for future Studio corrections.

## What this corpus is NOT

It does **not** replace:

- doctrine produit v3 (`sfia-v3-framing/**`);
- Build Doctrine / Roadmap (`convergence/**`);
- Product Completion C1 (`product-completion/**`);
- Morris decisions;
- Pilot HumanDecisions;
- the Transmission Guide as pedagogy/history.

It does **not** invent architecture, promote Runtime v3, or change product behavior.

## Source hierarchy (authority of facts)

1. **Git current tree** (code + tests + schemas + config examples)
2. **Deterministic product tests** (behavior oracles — with documented weaknesses)
3. Product Completion / doctrine / Transmission Guide — **guidance / intent / history only**

When docs conflict with code: **code wins**; mark the conflict as a gap.

## Relation to Transmission Guide

| Corpus | Role |
|---|---|
| `sfia-studio-transmission-guide.md` | Bootstrap / why / pedagogy / capitalization chronology |
| `production-runtime-reference/` | Current machine / how it works **now** |

Do not treat the Transmission Guide as the as-implemented oracle.

## Volumes

| File | Purpose |
|---|---|
| [01-system-runtime-overview.md](./01-system-runtime-overview.md) | System map, composition, layers |
| [02-runtime-object-catalog.md](./02-runtime-object-catalog.md) | Runtime objects |
| [03-end-to-end-flow-catalog.md](./03-end-to-end-flow-catalog.md) | E2E flows F01–F20 |
| [04-dependency-impact-map.md](./04-dependency-impact-map.md) | Dependencies + impact procedure + samples |
| [05-environments-configuration-and-boundaries.md](./05-environments-configuration-and-boundaries.md) | Env/config / Fake-Real |
| [06-persistence-restart-and-recovery.md](./06-persistence-restart-and-recovery.md) | Stores + restart matrix |
| [07-authority-invariants-and-failure-modes.md](./07-authority-invariants-and-failure-modes.md) | Invariants + failure modes |
| [08-test-proof-and-conformance-map.md](./08-test-proof-and-conformance-map.md) | Tests / oracles / bypasses |
| [09-known-gaps-reserves-and-current-boundaries.md](./09-known-gaps-reserves-and-current-boundaries.md) | Gaps + campaign findings |
| [production-runtime-reference.manifest.json](./production-runtime-reference.manifest.json) | Machine-readable index |

## Living maintenance contract

For any Studio change touching tracked paths in the manifest:

1. Run **impact analysis** (see volume 04).
2. Review affected object cards, flows, dependencies, invariants.
3. Review env / persistence / restart if applicable.
4. Run mapped regression tests.
5. Update architecture **content** if semantics changed.
6. Refresh digests **only after** human/ChatGPT review of content.
7. Record `NO SEMANTIC IMPACT` when only implementation changed.

**AUTOMATE DRIFT DETECTION — NEVER AUTOMATE STRUCTURAL ARBITRATION.**

A digest mismatch means: `REFERENCE REVIEW REQUIRED`.
Refreshing a digest ≠ validating semantic correctness.

## Conformance tooling

- Manifest: `production-runtime-reference.manifest.json`
- Checker script: `projects/sfia-studio/app/scripts/check-production-runtime-reference.mjs`
- Vitest: `projects/sfia-studio/app/__tests__/architecture/productionRuntimeReference.conformance.d0.test.ts`

## Explicit non-claims

- Runtime v3 **NON ADOPTED**
- Product Journey **not** declared READY
- E2E REAL **not** declared PROVEN
- PocketTasks campaign gaps are recorded, not fixed here
