# SFIA Review Pack — G2 DIFFERENTIAL CORRECTION — EVIDENCE CATALOG REFERENCE COHERENCE

## Metadata
- timestamp: 2026-09-05 13:21:25 CEST
- programme: Nora Cognitive Completion
- milestone: GLOBAL MODEL × REASONING PRE-CAMPAIGN HARNESS HARDENING → G2 DIFFERENTIAL CORRECTION
- Cycle: 8 — Delivery / implémentation
- Nature: CORRECTION DIFFÉRENTIELLE / CRITICAL REVIEW FINDING REMEDIATION
- Profil: CRITICAL
- ZERO REAL: YES
- Prior Review Handoff tip consumed: `ebb7e9a2772313c37784d531157bad1536c703fa`
- Prior blob: `f326799316fcf72e31694705fd5e64bbed96b7e2`

## Critical Review finding
- Symptôme: RunEvidence pour runs global/MW6 portait `cell.scenarioVersion = global-mr-catalog-v1` mais `evidenceRefs = [catalog:mw0-catalog-v1]`.
- Cause racine: `toRunEvidence()` utilisait `getCatalogVersion()` (défaut historique) au lieu de `scenario.catalogVersion`.
- Impact: INTERNAL EVIDENCE PROVENANCE INCONSISTENCY — mesure future Global Model × Reasoning non interprétable.
- Statut avant: G2 NOT YET CLOSED (G1/G3 CLOSED AT REVIEWED SCOPE).

## Differential change
- Ancien: `evidenceRefs: [\`catalog:${getCatalogVersion()}\`]`
- Nouveau: `evidenceRefs: [\`catalog:${scenario.catalogVersion}\`]`
- Fichier: `projects/sfia-studio/app/lib/nora-eval/d0Runner.ts` · fonction `toRunEvidence()`
- Import `getCatalogVersion` retiré de `d0Runner.ts` (devenu inutilisé) ; `getCatalogVersion()` elle-même **non modifiée**.
- Aucune architecture / catalog design / G1 / G3 / mw6Observe change.

### Snippet (toRunEvidence evidenceRefs)
```typescript
istemicLabelsObserved: obs.labels ?? [],
    productPath: "none",
    rawSummary: `D0 ${scenario.scenarioId} → ${scored.passFail}`,
    usage: null,
    cumulativeSpendUsd: 0,
    redacted: true,
    evidenceRefs: [`catalog:${scenario.catalogVersion}`],
    productObservation:

```

### Tests A/B/C ajoutés
```typescript
it("A — historical scenario / historical catalog: scenarioVersion ↔ evidenceRefs", async () => {
    const r = await runD0Scenario(
      "mw0.s01.catalog-mechanics",
      NORA_EVAL_CATALOG_VERSION,
    );
    expect(r.passFail).toBe("PASS");
    expect(r.cell.scenarioVersion).toBe(NORA_EVAL_CATALOG_VERSION);
    expect(r.cell.scenarioVersion).toBe("mw0-catalog-v1");
    expect(r.evidenceRefs).toEqual(["catalog:mw0-catalog-v1"]);
  });

  it("B — MW6 / global catalog: scenarioVersion ↔ evidenceRefs", async () => {
    const r = await runD0Scenario(
      "mw6.s01.domain-aware-source-strategy",
      NORA_EVAL_GLOBAL_CATALOG_VERSION,
    );
    expect(r.passFail).toBe("PASS");
    expect(r.cell.scenarioVersion).toBe(NORA_EVAL_GLOBAL_CATALOG_VERSION);
    expect(r.cell.scenarioVersion).toBe("global-mr-catalog-v1");
    expect(r.evidenceRefs).toEqual(["catalog:global-mr-catalog-v1"]);
    expect(r.evidenceRefs).not.toContain("catalog:mw0-catalog-v1");
  });

  it("C — historical scenario under global catalog: corpus version in evidenceRefs", async () => {
    const r = await runD0Scenario(
      "mw0.s01.catalog-mechanics",
      NORA_EVAL_GLOBAL_CATALOG_VERSION,
    );
    expect(r.passFail).toBe("PASS");
    expect(r.cell.scenarioId).toBe("mw0.s01.catalog-mechanics");
    expect(r.cell.scenarioVersion).toBe(NORA_EVAL_GLOBAL_CATALOG_VERSION);
    expect(r.cell.scenarioVersion).toBe("global-mr-catalog-v1");
    expect(r.evidenceRefs).toEqual(["catalog:global-mr-catalog-v1"]);
    expect(r.evidenceRefs).not.toContain("catalog:mw0-catalog-v1");
  });
});

```

## Provenance matrix

| Case | scenarioId | catalog used | cell.scenarioVersion | evidenceRefs |
| --- | --- | --- | --- | --- |
| A historical+historical | mw0.s01.catalog-mechanics | mw0-catalog-v1 | mw0-catalog-v1 | catalog:mw0-catalog-v1 |
| B MW6+global | mw6.s01.domain-aware-source-strategy | global-mr-catalog-v1 | global-mr-catalog-v1 | catalog:global-mr-catalog-v1 |
| C historical+global | mw0.s01.catalog-mechanics | global-mr-catalog-v1 | global-mr-catalog-v1 | catalog:global-mr-catalog-v1 |

Invariant: cell.scenarioVersion === scenario.catalogVersion === catalog version in evidenceRefs.

## Gap status after correction
- G1 = CLOSED AT REVIEWED SCOPE — UNTOUCHED
- G2 = CLOSED AT DETERMINISTIC TESTED SCOPE (provenance coherence)
- G3 = CLOSED AT REVIEWED SCOPE — UNTOUCHED
- mw6Observe.ts UNTOUCHED (sha256 MATCH)

## Tests
- G2 alone: 7 PASS (includes A/B/C)
- G1+G2+G3+mw0.d0: 26 PASS (exit 0)
- mw3+mw4+mw5 eval: 14 PASS (exit 0)
- typecheck / lint / build / git diff --check: PASS

## Non-regression
- G1 untouched · G3 untouched · MW6 observables untouched · catalog/types design untouched · ZERO REAL

## Local Git Truth

### Before this differential
- worktree: `/Users/morris/Projects/sfia-workspace-global-model-reasoning-pre-campaign-harness`
- branch: `delivery/sfia-studio-global-model-reasoning-pre-campaign-harness-hardening`
- HEAD / origin/main: `d3fee38b270d805144e621804b96ef1e5de3e208`
- dirty candidate G1/G2/G3 expected — MATCH
- handoff tip: `ebb7e9a2772313c37784d531157bad1536c703fa` MATCH

### After this differential (still uncommitted product)
```
M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/lib/nora-eval/capabilityBudget.ts
 M projects/sfia-studio/app/lib/nora-eval/catalog.ts
 M projects/sfia-studio/app/lib/nora-eval/d0Runner.ts
 M projects/sfia-studio/app/lib/nora-eval/index.ts
 M projects/sfia-studio/app/lib/nora-eval/scorers.ts
 M projects/sfia-studio/app/lib/nora-eval/types.ts
?? projects/sfia-studio/app/__tests__/nora-eval/g1.global-capability-policy.test.ts
?? projects/sfia-studio/app/__tests__/nora-eval/g2.catalog-versioning-mw6.test.ts
?? projects/sfia-studio/app/__tests__/nora-eval/g3.human-decision-pilote-only.test.ts
?? projects/sfia-studio/app/lib/nora-eval/mw6Observe.ts
```
- product commit/push/PR/merge: NOT PERFORMED
- only handoff transport authorized after validations

## Gates
- `GO MORRIS — G2 EVIDENCE CATALOG REFERENCE CORRECTION + REVIEW HANDOFF UPDATE — ZERO REAL` = **CONSUMED**
- product commit / push / PR / merge = **NOT AUTHORIZED**
- Global Model × Reasoning REAL = **NOT AUTHORIZED**
- production routing = **NOT SELECTED**
- runtime v3 = **NON ADOPTED**
- Cognitive Completion = **NOT PROVEN**

## Prior G1/G2/G3 context (carried)
- G1 distinct global capability policy preserved
- G2 catalog versioning mw0-catalog-v1 / global-mr-catalog-v1 preserved
- G3 human_decision_pilote_only (NO MORRIS RUNTIME PERSONA) preserved
- This pass only remediates Evidence catalog reference coherence

## Verdict
**READY FOR CHATGPT DIFFERENTIAL REVIEW — ZERO REAL**
