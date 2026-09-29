# Review Pack FULL — GENERIC-EXECUTION-REVIEW-RESULT-CONVERGENCE-01

## 1. Timestamp
- UTC: 2026-09-29T11:43:03Z
- Local: 2026-09-29 13:43:03 CEST

## 2. Repo / branch / HEAD / origin/main
- Repo: mcleland147/sfia-workspace
- Workspace: /Users/morris/Projects/sfia-workspace-post-execution-handoff-01
- Branch: `delivery/sfia-studio-generic-execution-review-result-convergence-01`
- HEAD: `d4d986af5884b31b416374da3cb5e60757501f87`
- origin/main: `d4d986af5884b31b416374da3cb5e60757501f87`
- ahead/behind (origin/main...HEAD left=behind right=ahead): `0	0`
- Base expected: `d4d986af5884b31b416374da3cb5e60757501f87` (PR #541 merge)
- Project commit this cycle: **NO**
- Project push/PR/merge: **NO**

### git status --short
```
M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/project-assistant/productContinuitySharedKnowledge.d0.test.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
 M projects/sfia-studio/app/features/project-assistant/f3/ingestDocsWriteArtifactEvidence.ts
 M projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts
 M projects/sfia-studio/app/features/project-assistant/w2/missionContractSemanticInputs.ts
 M projects/sfia-studio/app/features/project-assistant/w2/resolveProductExecutionContext.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/noraCognitiveCompletion.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/domain/cursorExecutionReport.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
 M projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
 M projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
 M projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
 M projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
 M projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
?? projects/sfia-studio/app/__tests__/project-assistant/genericExecutionReviewResultConvergence01.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/f3/finalizeGenericExecutionReview.ts
?? projects/sfia-studio/app/features/project-assistant/f3/persistGenericExecutionReviewMaterial.ts
?? projects/sfia-studio/app/features/project-assistant/w2/reconcileContinuePolicy.ts
?? projects/sfia-studio/app/lib/nora-cognitive-runtime/executionReviewAgentsTools.ts
?? projects/sfia-studio/app/lib/oa/execution-attempt/application/observeVerifiedChangeSet.ts
?? projects/sfia-studio/app/lib/oa/execution-attempt/domain/cursorReviewEndOf.ts
```

## 3. Cycle / profil / typologie
- Macro: GENERIC-EXECUTION-REVIEW-RESULT-CONVERGENCE-01
- Cycle type: 8 — Delivery / implémentation
- Profil: CRITICAL
- Typologie: EVOL
- Capacity: close Product spine Generic EC → Cursor CLAIM → Studio FACTS → Review Material → Evidence/RB/CE → Resolution → Reconciler → Nora Deep Review → Result (restart-safe, no specialized Product taxonomy on nominal tested path, no nominal manual recovery)

## 4. CKC
- Path: projects/sfia-studio/sfia-v3-framing/ckc/08-delivery-implementation.md
- ckcId: ckc:studio:delivery
- contractVersion: 0.1.0
- contentStatus: VALIDATED
- Usage: cognitive guidance only — no ExecutionAuthority, no implicit HumanDecision

## 5. Convergence pre-check
- Build Doctrine: stable (not modified)
- Roadmap: tip updated LOCAL CANDIDATE (not INTEGRATED ON MAIN)
- C1 Product Completion outcomes served: O-06 O-07 O-08 O-09 O-12
- Architecture D-ER-01…15: ADOPTED BY MORRIS — consumed, not redesigned
- Living Production Runtime Reference: volumes 03/08/09 + manifest digests updated after semantic review
- Runtime v3: **NON ADOPTED**
- NoteLite REAL: **PAUSED** (distinct Morris GO for replay)
- Next gate: ChatGPT Critical Review → then Morris GO COMMIT/PUSH/PR

## 6. Sources lues
- Governance: convergence-build-doctrine, convergence-roadmap, product-completion cadrage
- Architecture: sfia-studio-generic-execution-review-result-architecture.md (D-ER-01…15)
- Doctrine v3: 30–37 framing docs
- CKC 08-delivery
- Living Production Runtime Reference README + volumes 01–09 + manifest
- Process external: cycle template, routing guide, chatgpt-cursor operating model, rules, knowledge layer (harvest guarantees only)
- Code seams under execution-contract / execution-attempt / evidence-review / w2 / f3 / nora / pre-m6-product-ui / tests

## 7. Architecture D-ER consommée
All D-ER-01…15 ADOPTED — implementation follows; no structural redesign in this cycle.

## 8. Impact analysis CURRENT (summary disposition)

| Actif | CURRENT role | Disposition | Macro change |
|---|---|---|---|
| ExecutionContract + reportRequirements | Product WHAT + constraints | ADAPT | GENERIC_PRODUCT_REPORT_REQUIREMENTS includes Cursor Review End Of CLAIM |
| generalistExecutionSurface | Generalist EC surface | KEEP | Nominal Product uses generic EC |
| projectExecutionContractToCursor / agent | Cursor HOW | KEEP | Existing transport reused |
| CursorExecutionReport | CLAIM DTO | ADAPT | Optional nested `reviewEndOf` CLAIM |
| Cursor Review End Of | NEW typed CLAIM | COMPLETE | New domain type + parse/mint |
| verifyWorkspaceFileEffects | docs_write-oriented verify | HARVEST | observeVerifiedChangeSet generic observation |
| VerifiedChangeSet | NEW FACTS | COMPLETE | Independent worktree observation + claim/fact mismatch |
| persistDocsWriteArtifactReviewMaterial | specialized RM | TRANSITIONAL | Dual-write via finalize from ingestDocsWrite |
| Generic Execution Review Material | NEW durable RM | COMPLETE | Filesystem refs under existing mission-result pattern |
| Evidence/RB/CE | Existing stack | KEEP | No second engine; claims ≠ evidence |
| resolveProductExecutionContext | ONE Resolution | ADAPT | Loads `executionReview` |
| reconcileGovernedExecution | Progression owner | KEEP | UI continue budget policy |
| TrajectorySurface | Projection/trigger | ADAPT | NOMINAL_RECONCILE_CONTINUE_BUDGET=120 |
| Nora Agents + product_execution_context_get | Shared cognitive core | KEEP+ADAPT | Opt-in execution_review_* RO tools |
| Result Surface | Explains terminal | KEEP/ADAPT | Continues via reconciler; no parallel screen |
| docs_write / read taxonomies | Historical Product categories | RETIRE FROM PRODUCT NOMINAL / TRANSITIONAL bridges | Dual-write bridge retained |
| Fake launch ports | External boundary substitute | KEEP | Same Product spine |
| DB schema / npm / worker/queue | — | NO CHANGE | STOP avoided |

## 9. OpenAI Capability Fit Check (R22)
- Existing: OpenAI Agents Runner + native tool adapters (`createSfiaRouteToolAdapters`, product_execution tools, cycle journal tools)
- Classification: **KEEP** shared Nora cognitive core / Agents Runner
- **ADAPT/COMPLETE**: bounded read-only `execution_review_manifest_get` + `execution_review_item_read` (Project/Attempt/ref-bound)
- **DEFER**: model/reasoning tier upgrade
- **REJECT**: second Nora engine, bespoke reasoning loop, arbitrary filesystem tools
- Proof: tools default OFF; opt-in via `enableExecutionReviewTools` on post-Evidence path

## 10. Fake / Real qualification
- Applicable: YES (Cursor CLI / process REAL boundary)
- This macro: **ZERO REAL**
- Fake substitutes external Cursor only; same Product spine required
- Proof ceiling claimed: **DETERMINISTIC PRODUCT SEAM/INTEGRATION PROVEN AT TESTED SCOPE**
- Explicitly NOT claimed: READY FOR REAL / REAL BOUNDARY PROVEN / E2E REAL / Product READY / runtime v3 ADOPTED
- Front-door Fake mutating Product E2E oracle covering full EP-01…20 in one journey: **PARTIAL** (seam/integration oracles green; ChatGPT weigh front-door expansion before GO COMMIT)

## 11–13. Files created / modified / deleted
### Created

- `projects/sfia-studio/app/__tests__/project-assistant/genericExecutionReviewResultConvergence01.d0.test.ts`
- `projects/sfia-studio/app/features/project-assistant/f3/finalizeGenericExecutionReview.ts`
- `projects/sfia-studio/app/features/project-assistant/f3/persistGenericExecutionReviewMaterial.ts`
- `projects/sfia-studio/app/features/project-assistant/w2/reconcileContinuePolicy.ts`
- `projects/sfia-studio/app/lib/nora-cognitive-runtime/executionReviewAgentsTools.ts`
- `projects/sfia-studio/app/lib/oa/execution-attempt/application/observeVerifiedChangeSet.ts`
- `projects/sfia-studio/app/lib/oa/execution-attempt/domain/cursorReviewEndOf.ts`

### Modified
- `projects/sfia-studio/app/__tests__/project-assistant/productContinuitySharedKnowledge.d0.test.ts`
- `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx`
- `projects/sfia-studio/app/features/project-assistant/f3/ingestDocsWriteArtifactEvidence.ts`
- `projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts`
- `projects/sfia-studio/app/features/project-assistant/w2/missionContractSemanticInputs.ts`
- `projects/sfia-studio/app/features/project-assistant/w2/resolveProductExecutionContext.ts`
- `projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts`
- `projects/sfia-studio/app/lib/nora-cognitive-runtime/noraCognitiveCompletion.ts`
- `projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts`
- `projects/sfia-studio/app/lib/oa/execution-attempt/domain/cursorExecutionReport.ts`
- `projects/sfia-studio/app/lib/oa/execution-attempt/index.ts`
- `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`
- `projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md`
- `projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md`
- `projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md`
- `projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json`

### Deleted
- none


## 14–15. Code changes by seam / changed functions

### Workstream A — Generic EC + Cursor outputs
- `missionContractSemanticInputs.ts`: GENERIC_PRODUCT_REPORT_REQUIREMENTS includes Review End Of CLAIM requirement
- `cursorExecutionReport.ts`: optional `reviewEndOf?: CursorReviewEndOf`
- `cursorReviewEndOf.ts`: schema `oa.cursor-review-end-of.1`, mint/parse/is helpers
- Transport: reuse existing report envelope (nested field) — no new network protocol

### Workstream B — Retire Product taxonomy from nominal
- Generic report requirements path used for Product missions
- Specialized docs_write adapters retained as TRANSITIONAL dual-write bridges (exit: callers=0 + non-regression)

### Workstream C — VerifiedChangeSet
- `observeVerifiedChangeSet.ts`: independent git status observation → created/modified/deleted + digests + claimFactMismatch/unclaimedObservedPaths
- Separates OBSERVATION from contract policy evaluation

### Workstream D — Generic Review Material
- `persistGenericExecutionReviewMaterial.ts`: durable filesystem refs (mission-result style), reviewItems[], completeness FULL|PARTIAL, retention metadata compatible HOT→ARCHIVABLE→PRUNABLE (GC not implemented)
- `finalizeGenericExecutionReview.ts`: observe + resolve REO CLAIM (or synthesize PARTIAL CLAIM) + persist
- `ingestDocsWriteArtifactEvidence.ts`: dual-write finalize when cursor report present

### Workstream E — Evidence/RB/CE
- No second Evidence engine; finalize does NOT create Evidence
- Attempt SUCCESS ≠ Product PASS preserved

### Workstream F — Product Resolution
- `resolveProductExecutionContext.ts`: adds `executionReview` load via `loadGenericExecutionReviewMaterial`

### Workstream G — Nora Deep Review
- `executionReviewAgentsTools.ts`: manifest_get + item_read
- Wired in `runNoraAgentsTurn` / `noraCognitiveCompletion` opt-in
- `postEvidenceNoraAnalysis.ts`: enableExecutionReviewTools when context available

### Workstream H — Reconciler anti-stall
- `reconcileContinuePolicy.ts`: NOMINAL_RECONCILE_CONTINUE_BUDGET=120 (> legacy ~8)
- `TrajectorySurface.tsx`: continue-until-stable loop uses policy budget; Reconciler remains owner

### Workstream I — Result Surface
- Reuses TrajectorySurface; no second workflow screen
- Reviewable access via Resolution executionReview + Nora tools (logical refs, not `.sfia-exec` as business target)

## 16. Tests added/modified
- ADDED: `genericExecutionReviewResultConvergence01.d0.test.ts` (7 tests)
- MODIFIED: `productContinuitySharedKnowledge.d0.test.ts` (shared knowledge fixture awareness)

## 17. Scénario E2E
Deterministic seam/integration oracle covers:
1. Generic report requirements include REO
2. Claim/fact mismatch (Cursor claims A, worktree has A+B)
3. 0-artifact / 0-file Review Material validity
4. finalize + durable load after teardown path
5. Anti-stall budget > legacy 8
6. Nora tool Project/Attempt binding guards
7. Resolution load of Review Material

**PARTIAL vs EP-01…20:** single Product front-door Fake journey through governedExecute→materialize→UI Result states→restart without recovery click not fully closed as one oracle in this candidate. ChatGPT Critical must decide if that blocks GO COMMIT.

## 18. Targeted tests
```
npx vitest run genericExecutionReviewResultConvergence01.d0.test.ts productContinuitySharedKnowledge.d0.test.ts importBoundaries.test.ts
→ 7+8+3 PASSED
```

## 19. Full suite
```
npm test (Vitest)
Test Files  455 passed | 17 skipped (472)
Tests  5005 passed | 137 skipped (5142)
Duration ~53.55s
```

## 20. Typecheck
`npm run typecheck` → PASS (tsc --noEmit)

## 21. Lint
`npm run lint` → PASS (0 warnings after unused import fix)

## 22. Build
`npm run build` → PASS (Next.js production build)

## 23. Modeled governance
`mw1.s02.compaction.modeled.test.ts` → 5 passed
`productionRuntimeReference.conformance.d0.test.ts` → 5 passed

## 24. Living Reference semantic changes
- 03: added Generic Execution → Review → Result CURRENT local candidate flow note
- 08: proof table for CONVERGENCE-01 deterministic scope + ZERO REAL
- 09: local candidate gaps (legacy bridges, PARTIAL front-door E2E, NoteLite PAUSED, retention/Git promotion open)
- manifest digests refreshed after semantic review; lastReviewedAt updated; lastReviewedCommit remains prior until project commit

## 25. Conformance checker
`node scripts/check-production-runtime-reference.mjs` → PRODUCTION RUNTIME REFERENCE CONFORMANCE OK

## 26. Roadmap diff
Tip entry LOCAL CANDIDATE for GENERIC-EXECUTION-REVIEW-RESULT-CONVERGENCE-01 (cycle 8 Critical EVOL; REAL=ZERO; NoteLite PAUSED; not INTEGRATED ON MAIN)

## 27. git diff --check
PASS (after EOF blank-line fix on 03/08)

## 28. Réserves
1. Product-front-door Fake mutating E2E oracle (full EP chain in one journey) PARTIAL
2. Result Surface dedicated reviewable UX actions beyond Resolution/Nora tools — functional only, no redesign; screenshot not captured this cycle
3. docs_write dual-write bridge retained (TEMPORARY WITH EXIT)
4. Retention GC / TTL / scheduler not implemented (by design)
5. Git promotion Product not implemented (by design)
6. REAL NoteLite / generic REAL not run (by design)

## 29. Dettes / exits
1. Legacy specialized adapters — exit when callers=0 + non-regression
2. Retention GC — before industrialization volumetry
3. Git promotion — future capacity after review/result stabilized
4. REAL generic replay — NoteLite bounded REAL under distinct Morris GO
5. Nora model/reasoning upgrade — after grounding/tools measured

## 30. Claims autorisés
- generic Product execution path implemented at deterministic tested scope (seam/integration)
- Cursor report + Review End Of claim path deterministic-proven
- VerifiedChangeSet deterministic-proven (incl. claim/fact mismatch)
- generic Review Material restart-safe at tested scope
- Nora bounded Deep Review tools deterministic-proven (opt-in)
- Result Surface continue-until-stable budget deterministic-proven
- specialized Product taxonomy not required for tested generic report-requirements path
- ZERO REAL this macro

## 31. Anti-claims
- READY FOR REAL
- REAL BOUNDARY PROVEN
- END-TO-END REAL PROVEN
- Product global READY
- runtime v3 ADOPTED
- NoteLite REAL fixed
- legacy fully retired
- retention production complete
- Git promotion complete
- INTEGRATED ON MAIN

## 32. Décisions Morris nécessaires
- NONE for architecture (D-ER already adopted)
- AFTER ChatGPT Critical: Morris GO COMMIT / PUSH / PR (separate)
- DISTINCT later: REAL NoteLite replay GO

## 33. Verdict
**READY FOR CHATGPT CRITICAL REVIEW — GENERIC EXECUTION REVIEW RESULT CONVERGENCE**

Proof ceiling: **DETERMINISTIC PRODUCT SEAM/INTEGRATION PROVEN AT TESTED SCOPE** (front-door full EP oracle PARTIAL — disclosed)

ZERO REAL · runtime v3 NON ADOPTED · no project Git publish

---

# FULL FILE CONTENTS — CREATED FILES


## CREATED: `projects/sfia-studio/app/__tests__/project-assistant/genericExecutionReviewResultConvergence01.d0.test.ts`

```typescript
/**
 * GENERIC-EXECUTION-REVIEW-RESULT-CONVERGENCE-01 — deterministic core proofs.
 * ZERO REAL. Fake/filesystem only.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import {
  mintCursorExecutionReportId,
  type CursorExecutionReport,
} from "@/lib/oa/execution-attempt/domain/cursorExecutionReport";
import {
  mintCursorReviewEndOfId,
  type CursorReviewEndOf,
} from "@/lib/oa/execution-attempt/domain/cursorReviewEndOf";
import { observeVerifiedChangeSet } from "@/lib/oa/execution-attempt/application/observeVerifiedChangeSet";
import { finalizeGenericExecutionReview } from "@/features/project-assistant/f3/finalizeGenericExecutionReview";
import {
  loadGenericExecutionReviewMaterial,
  persistGenericExecutionReviewMaterial,
} from "@/features/project-assistant/f3/persistGenericExecutionReviewMaterial";
import {
  LEGACY_UI_RUNNING_POLL_BUDGET,
  NOMINAL_RECONCILE_CONTINUE_BUDGET,
  shouldContinueReconcileNominally,
  nominalContinueIterationsRemaining,
} from "@/features/project-assistant/w2/reconcileContinuePolicy";
import { createExecutionReviewAgentsTools } from "@/lib/nora-cognitive-runtime/executionReviewAgentsTools";
import { GENERIC_PRODUCT_REPORT_REQUIREMENTS } from "@/features/project-assistant/w2/missionContractSemanticInputs";
import {
  STUDIO_CURSOR_GENERALIST_ACTION,
  STUDIO_CURSOR_GENERALIST_CAPABILITY,
} from "@/lib/oa/execution-contract/domain/generalistExecutionSurface";

function tmpRoot(label: string): string {
  return fs.mkdtempSync(path.join(os.tmpdir(), `gerrc-${label}-`));
}

function baseReport(
  attemptId: string,
  executionContractId: string,
  overrides: Partial<CursorExecutionReport> = {},
): CursorExecutionReport {
  return {
    schemaVersion: "oa.cursor-execution-report.1",
    reportId: mintCursorExecutionReportId({ attemptId, executionContractId }),
    attemptId,
    executionContractId,
    repositoryRef: "repo:test",
    baseSha: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    status: "succeeded",
    authorizedEffectsExecuted: ["filesystem.create", "filesystem.modify"],
    workPerformed: ["wrote notes"],
    fileEffects: {
      created: ["projects/demo/a.md"],
      modified: [],
      deleted: [],
    },
    ...overrides,
  };
}

describe("GENERIC-EXECUTION-REVIEW-RESULT-CONVERGENCE-01 core", () => {
  it("EP — reportRequirements demand Report + Review End Of (generic Product)", () => {
    const joined = GENERIC_PRODUCT_REPORT_REQUIREMENTS.join("\n");
    expect(joined).toMatch(/Review End Of/i);
    expect(joined).toMatch(/reportId/);
    expect(STUDIO_CURSOR_GENERALIST_CAPABILITY).toBe(
      "cap:studio.cursor.generalist",
    );
    expect(STUDIO_CURSOR_GENERALIST_ACTION).toBe(
      "studio.cursor.generalist.execute",
    );
  });

  it("EP-03/04/05 — VerifiedChangeSet detects unclaimed observed file", async () => {
    const wt = tmpRoot("wt");
    fs.writeFileSync(path.join(wt, "a.md"), "A\n");
    fs.writeFileSync(path.join(wt, "b.md"), "B\n");
    const report = baseReport("att:1", "ec:1", {
      fileEffects: { created: ["a.md"], modified: [], deleted: [] },
    });
    const cs = await observeVerifiedChangeSet({
      worktreePath: wt,
      report,
      nameStatusText: "A\ta.md\nA\tb.md\n",
    });
    expect(cs.claimFactMismatch).toBe(true);
    expect(cs.unclaimedObservedPaths).toContain("b.md");
    expect(cs.created.map((e) => e.path).sort()).toEqual(["a.md", "b.md"]);
  });

  it("EP-06/07/17 — Review Material durable; 0 Artifact / 0 file valid", () => {
    const refs = tmpRoot("refs");
    const report = baseReport("att:zero", "ec:zero", {
      fileEffects: { created: [], modified: [], deleted: [] },
      authorizedEffectsExecuted: ["validation.run"],
      validationEffects: [
        { identity: "unit", result: "pass", summary: "ok" },
      ],
    });
    const reo: CursorReviewEndOf = {
      schemaVersion: "oa.cursor-review-end-of.1",
      reviewEndOfId: mintCursorReviewEndOfId({
        attemptId: "att:zero",
        executionContractId: "ec:zero",
      }),
      attemptId: "att:zero",
      executionContractId: "ec:zero",
      timestamp: new Date().toISOString(),
      repositoryRef: "repo:test",
      baseSha: report.baseSha,
      verdict: "succeeded",
      objective: "validate only",
      scopeTreated: "no files",
      workPerformed: ["ran validation"],
      filesCreated: [],
      filesModified: [],
      filesDeleted: [],
      validations: ["unit:pass"],
      deviations: [],
      blockers: [],
      reservations: [],
      stopConditionsMet: [],
      claims: ["validation pass"],
      pointsRequiringReview: [],
    };
    const persisted = persistGenericExecutionReviewMaterial({
      refsRoot: refs,
      projectId: "prj:zero",
      executionContractId: "ec:zero",
      attemptId: "att:zero",
      repositoryRef: "repo:test",
      baseSha: report.baseSha,
      cursorReport: report,
      reviewEndOf: reo,
      reviewItems: [
        {
          kind: "validation",
          label: "unit",
          text: "pass",
          summary: "pass",
        },
      ],
    });
    expect(persisted.ok).toBe(true);
    if (!persisted.ok) return;
    expect(persisted.manifest.reviewItems.length).toBe(1);
    expect(
      persisted.manifest.reviewItems.every((i) => i.kind !== "artifact"),
    ).toBe(true);
    const loaded = loadGenericExecutionReviewMaterial({
      refsRoot: refs,
      attemptId: "att:zero",
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) return;
    expect(loaded.reviewEndOf?.verdict).toBe("succeeded");
    expect(loaded.cursorReport?.status).toBe("succeeded");
  });

  it("EP-06 — finalize after observation persists mismatch + review items", async () => {
    const refs = tmpRoot("fin");
    const wt = tmpRoot("fin-wt");
    fs.mkdirSync(path.join(wt, "projects/demo"), { recursive: true });
    fs.writeFileSync(path.join(wt, "projects/demo/a.md"), "A\n");
    fs.writeFileSync(path.join(wt, "projects/demo/b.md"), "B\n");
    const report = baseReport("att:fin", "ec:fin", {
      fileEffects: {
        created: ["projects/demo/a.md"],
        modified: [],
        deleted: [],
      },
      reviewEndOf: {
        schemaVersion: "oa.cursor-review-end-of.1",
        reviewEndOfId: mintCursorReviewEndOfId({
          attemptId: "att:fin",
          executionContractId: "ec:fin",
        }),
        attemptId: "att:fin",
        executionContractId: "ec:fin",
        timestamp: new Date().toISOString(),
        repositoryRef: "repo:test",
        baseSha: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        verdict: "succeeded",
        objective: "write notes",
        scopeTreated: "demo",
        workPerformed: ["a.md"],
        filesCreated: ["projects/demo/a.md"],
        filesModified: [],
        filesDeleted: [],
        validations: [],
        deviations: [],
        blockers: [],
        reservations: [],
        stopConditionsMet: [],
        claims: ["created a.md"],
        pointsRequiringReview: ["confirm b.md unexpected"],
      },
    });
    const finalized = await finalizeGenericExecutionReview({
      refsRoot: refs,
      projectId: "prj:fin",
      executionContractId: "ec:fin",
      attemptId: "att:fin",
      repositoryRef: "repo:test",
      baseSha: report.baseSha,
      cursorReport: report,
      worktreePath: wt,
      nameStatusText:
        "A\tprojects/demo/a.md\nA\tprojects/demo/b.md\n",
    });
    expect(finalized.ok).toBe(true);
    if (!finalized.ok) return;
    expect(finalized.claimFactMismatch).toBe(true);
    expect(finalized.manifest.completeness).toBe("PARTIAL");
    expect(finalized.reviewEndOf?.pointsRequiringReview.length).toBeGreaterThan(
      0,
    );
    expect(finalized.manifest.reviewItems.length).toBeGreaterThanOrEqual(2);
  });

  it("EP-18 — anti-stall continue budget exceeds legacy poll of 8", () => {
    expect(NOMINAL_RECONCILE_CONTINUE_BUDGET).toBeGreaterThan(
      LEGACY_UI_RUNNING_POLL_BUDGET,
    );
    expect(
      shouldContinueReconcileNominally({ stage: "RUNNING" }),
    ).toBe(true);
    expect(
      shouldContinueReconcileNominally({
        stage: "PRODUCT_MATERIALIZATION_PENDING",
        nextDeterministicAction: "MATERIALIZE_PRODUCT",
      }),
    ).toBe(true);
    expect(
      shouldContinueReconcileNominally({
        stage: "POST_EVIDENCE_COMPLETE",
        nextDeterministicAction: "NONE",
      }),
    ).toBe(false);
    expect(
      nominalContinueIterationsRemaining(0, { stage: "RUNNING" }),
    ).toBe(NOMINAL_RECONCILE_CONTINUE_BUDGET);
    expect(
      nominalContinueIterationsRemaining(LEGACY_UI_RUNNING_POLL_BUDGET, {
        stage: "RUNNING",
      }),
    ).toBeGreaterThan(0);
  });

  it("EP-10 — Nora execution review tools are Attempt/Project-bound", async () => {
    const refs = tmpRoot("nora");
    const report = baseReport("att:nora", "ec:nora");
    persistGenericExecutionReviewMaterial({
      refsRoot: refs,
      projectId: "prj:nora",
      executionContractId: "ec:nora",
      attemptId: "att:nora",
      repositoryRef: "repo:test",
      baseSha: report.baseSha,
      cursorReport: report,
      reviewItems: [
        { kind: "log", label: "note", text: "hello review", summary: "log" },
      ],
    });
    const tools = createExecutionReviewAgentsTools({
      projectId: "prj:nora",
      attemptId: "att:nora",
      refsRoot: refs,
    });
    expect(tools).toHaveLength(2);
    expect(tools[0]!.name).toBe("execution_review_get_manifest");
    expect(tools[1]!.name).toBe("execution_review_read_item");
    const { RunContext } = await import("@openai/agents");
    const runCtx = new RunContext({});
    const manifestJson = await tools[0]!.invoke(runCtx, JSON.stringify({}));
    const manifest = JSON.parse(String(manifestJson)) as {
      ok: boolean;
      executorClaims?: { disclosure?: string };
      reviewItems?: { itemId: string }[];
    };
    expect(manifest.ok).toBe(true);
    expect(manifest.executorClaims?.disclosure).toBe("CLAIM_NOT_EVIDENCE");
    const itemId = manifest.reviewItems![0]!.itemId;
    const readJson = await tools[1]!.invoke(
      runCtx,
      JSON.stringify({ itemId }),
    );
    const read = JSON.parse(String(readJson)) as {
      ok: boolean;
      content?: string;
    };
    expect(read.ok).toBe(true);
    expect(read.content).toContain("hello review");

    const foreign = createExecutionReviewAgentsTools({
      projectId: "prj:other",
      attemptId: "att:nora",
      refsRoot: refs,
    });
    const denied = JSON.parse(
      String(await foreign[0]!.invoke(runCtx, JSON.stringify({}))),
    ) as { ok: boolean; code?: string };
    expect(denied.ok).toBe(false);
    expect(denied.code).toBe("EXECUTION_REVIEW_PROJECT_MISMATCH");
  });
});


describe("GENERIC-EXECUTION-REVIEW-RESULT — Product Resolution surface", () => {
  it("loads executionReview after finalize into Product Resolution fields", async () => {
    const refs = tmpRoot("res");
    process.env.SFIA_STUDIO_PRODUCT_EVIDENCE_REFS_ROOT = refs;
    const report = baseReport("att:res", "ec:res", {
      fileEffects: { created: ["x.md"], modified: [], deleted: [] },
    });
    const finalized = await finalizeGenericExecutionReview({
      refsRoot: refs,
      projectId: "prj:res",
      executionContractId: "ec:res",
      attemptId: "att:res",
      repositoryRef: "repo:test",
      baseSha: report.baseSha,
      cursorReport: report,
      nameStatusText: "A\tx.md\nA\ty.md\n",
      worktreePath: (() => {
        const wt = tmpRoot("res-wt");
        fs.writeFileSync(path.join(wt, "x.md"), "x");
        fs.writeFileSync(path.join(wt, "y.md"), "y");
        return wt;
      })(),
    });
    expect(finalized.ok).toBe(true);
    if (!finalized.ok) return;
    const loaded = loadGenericExecutionReviewMaterial({
      refsRoot: refs,
      attemptId: "att:res",
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) return;
    expect(loaded.manifest.projectId).toBe("prj:res");
    expect(loaded.verifiedChangeSet?.claimFactMismatch).toBe(true);
    expect(loaded.manifest.reviewItems.length).toBeGreaterThan(0);
  });
});

```


## CREATED: `projects/sfia-studio/app/features/project-assistant/f3/finalizeGenericExecutionReview.ts`

```typescript
/**
 * Finalize Generic Execution Review Material after Studio observation (D-ER-04/06).
 * Called after Cursor terminal + independent worktree observation.
 * Does NOT create Evidence — Evidence ingest remains separate.
 */
import {
  mintCursorReviewEndOfId,
  observeVerifiedChangeSet,
  parseCursorReviewEndOf,
  type CursorExecutionReport,
  type CursorReviewEndOf,
  type VerifiedChangeSet,
} from "@/lib/oa/execution-attempt";
import type { LocalGitStatusDiffPort } from "@/lib/oa/git-ports";
import {
  persistGenericExecutionReviewMaterial,
  type ExecutionReviewMaterialManifest,
} from "./persistGenericExecutionReviewMaterial";

export type FinalizeGenericExecutionReviewResult =
  | {
      ok: true;
      manifest: ExecutionReviewMaterialManifest;
      verifiedChangeSet: VerifiedChangeSet;
      reviewEndOf: CursorReviewEndOf | null;
      claimFactMismatch: boolean;
    }
  | { ok: false; code: string; message: string };

/**
 * Derive Review End Of CLAIM from nested report field or synthesize a minimal
 * CLAIM envelope from report fields when Cursor omitted a structured REO
 * (PARTIAL completeness — never Fact).
 */
export function resolveCursorReviewEndOfClaim(
  report: CursorExecutionReport,
): { reviewEndOf: CursorReviewEndOf | null; synthesized: boolean } {
  if (report.reviewEndOf) {
    const parsed = parseCursorReviewEndOf(report.reviewEndOf);
    if (parsed.ok) return { reviewEndOf: parsed.reviewEndOf, synthesized: false };
  }
  // Minimal CLAIM projection from report — still CLAIM, completeness PARTIAL.
  const reviewEndOf: CursorReviewEndOf = {
    schemaVersion: "oa.cursor-review-end-of.1",
    reviewEndOfId: mintCursorReviewEndOfId({
      attemptId: report.attemptId,
      executionContractId: report.executionContractId,
    }),
    attemptId: report.attemptId,
    executionContractId: report.executionContractId,
    timestamp: new Date().toISOString(),
    repositoryRef: report.repositoryRef,
    baseSha: report.baseSha,
    verdict:
      report.status === "succeeded"
        ? "succeeded"
        : report.status === "failed"
          ? "failed"
          : report.status === "timeout"
            ? "timeout"
            : "stopped",
    objective: "(derived from CursorExecutionReport — PARTIAL Review End Of)",
    scopeTreated: report.workPerformed?.join("; ") || "(unspecified)",
    workPerformed: report.workPerformed ?? [],
    filesCreated: report.fileEffects?.created ?? [],
    filesModified: report.fileEffects?.modified ?? [],
    filesDeleted: report.fileEffects?.deleted ?? [],
    validations: (report.validationEffects ?? []).map(
      (v) => `${v.identity}:${v.result}`,
    ),
    fullValidation: null,
    gitProof: report.gitEffects?.commit?.sha ?? null,
    deviations: report.deviations ?? [],
    blockers: report.blockers ?? [],
    reservations: report.reservations ?? [],
    stopConditionsMet: report.stopConditionTriggered
      ? [report.stopConditionTriggered]
      : [],
    claims: report.evidenceClaims ?? [],
    pointsRequiringReview: [
      "Review End Of synthesized from CursorExecutionReport — PARTIAL",
    ],
  };
  return { reviewEndOf, synthesized: true };
}

export async function finalizeGenericExecutionReview(input: {
  readonly refsRoot: string;
  readonly projectId: string;
  readonly cycleInstanceId?: string;
  readonly executionContractId: string;
  readonly attemptId: string;
  readonly repositoryRef: string;
  readonly baseSha: string;
  readonly cursorReport: CursorExecutionReport;
  readonly worktreePath?: string | null;
  readonly statusDiffPort?: LocalGitStatusDiffPort;
  readonly nameStatusText?: string;
  readonly extraReviewItems?: Parameters<
    typeof persistGenericExecutionReviewMaterial
  >[0]["reviewItems"];
}): Promise<FinalizeGenericExecutionReviewResult> {
  const { reviewEndOf, synthesized } = resolveCursorReviewEndOfClaim(
    input.cursorReport,
  );

  let verifiedChangeSet: VerifiedChangeSet;
  if (input.worktreePath) {
    verifiedChangeSet = await observeVerifiedChangeSet({
      worktreePath: input.worktreePath,
      report: input.cursorReport,
      statusDiffPort: input.statusDiffPort,
      nameStatusText: input.nameStatusText,
      computeDigests: true,
    });
  } else {
    verifiedChangeSet = {
      schemaVersion: "oa.studio-verified-changeset.1",
      worktreePath: "",
      observedAt: new Date().toISOString(),
      created: [],
      modified: [],
      deleted: [],
      renamed: [],
      all: [],
      unclaimedObservedPaths: [],
      claimedMissingPaths: [],
      claimFactMismatch: false,
    };
  }

  const reviewItems: {
    kind: import("./persistGenericExecutionReviewMaterial").ExecutionReviewItemKind;
    logicalPath?: string;
    label: string;
    bytes?: Buffer;
    text?: string;
    summary?: string;
  }[] = [...(input.extraReviewItems ?? [])];

  // Promote verified file contents as review items when digests exist.
  for (const entry of verifiedChangeSet.all) {
    if (entry.status === "deleted" || !entry.contentAbsolutePath) continue;
    try {
      const fs = await import("node:fs");
      if (!fs.existsSync(entry.contentAbsolutePath)) continue;
      const bytes = fs.readFileSync(entry.contentAbsolutePath);
      reviewItems.push({
        kind: "file",
        logicalPath: entry.path,
        label: `${entry.status}: ${entry.path}`,
        bytes,
        summary: entry.afterDigest,
      });
    } catch {
      // keep PARTIAL
    }
  }

  for (const v of input.cursorReport.validationEffects ?? []) {
    reviewItems.push({
      kind: "validation",
      label: v.identity,
      text: JSON.stringify(v),
      summary: v.result,
    });
  }

  const persisted = persistGenericExecutionReviewMaterial({
    refsRoot: input.refsRoot,
    projectId: input.projectId,
    cycleInstanceId: input.cycleInstanceId,
    executionContractId: input.executionContractId,
    attemptId: input.attemptId,
    repositoryRef: input.repositoryRef,
    baseSha: input.baseSha,
    cursorReport: input.cursorReport,
    reviewEndOf,
    verifiedChangeSet,
    reviewItems,
    completeness:
      synthesized || verifiedChangeSet.claimFactMismatch ? "PARTIAL" : undefined,
    blockers: [
      ...(input.cursorReport.blockers ?? []),
      ...(verifiedChangeSet.claimFactMismatch
        ? [
            `CLAIM_FACT_MISMATCH unclaimed=${verifiedChangeSet.unclaimedObservedPaths.join(",")}`,
          ]
        : []),
    ],
  });

  if (!persisted.ok) {
    return {
      ok: false,
      code: persisted.code,
      message: persisted.message,
    };
  }

  return {
    ok: true,
    manifest: persisted.manifest,
    verifiedChangeSet,
    reviewEndOf,
    claimFactMismatch: verifiedChangeSet.claimFactMismatch,
  };
}

```


## CREATED: `projects/sfia-studio/app/features/project-assistant/f3/persistGenericExecutionReviewMaterial.ts`

```typescript
/**
 * Generic Execution Review Material — durable review payload (D-ER-04).
 *
 * Reuses the existing mission-result-refs filesystem layout (no new store/table).
 * Artifact documentaire is only ONE possible ReviewItem.
 * 0 Artifact + 0 changed file is valid when other reviewables exist.
 *
 * FINAL SCHEMA NOT ADOPTED as Product aggregate — operational payload only.
 * RAW capture ≠ finalized material (caller decides when to finalize after verify).
 */
import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import type {
  CursorExecutionReport,
  CursorReviewEndOf,
  VerifiedChangeSet,
} from "@/lib/oa/execution-attempt";

export const OA_EXECUTION_REVIEW_MATERIAL_SCHEMA =
  "oa.execution-review-material.1" as const;

export type ExecutionReviewCompleteness = "FULL" | "PARTIAL";

export type ExecutionReviewRetentionState =
  | "HOT"
  | "ARCHIVABLE"
  | "PRUNABLE"
  | "PRUNED";

export type ExecutionReviewItemKind =
  | "file"
  | "diff"
  | "validation"
  | "test_output"
  | "log"
  | "artifact"
  | "git_result"
  | "external_result"
  | "other";

export type ExecutionReviewItem = {
  readonly itemId: string;
  readonly kind: ExecutionReviewItemKind;
  /** Logical repository path when applicable — never `.sfia-exec` as métier. */
  readonly logicalPath?: string;
  readonly label: string;
  readonly contentRef?: string;
  readonly digest?: string;
  readonly summary?: string;
};

export type ExecutionReviewMaterialManifest = {
  readonly schemaVersion: typeof OA_EXECUTION_REVIEW_MATERIAL_SCHEMA;
  readonly reviewMaterialId: string;
  readonly projectId: string;
  readonly cycleInstanceId?: string;
  readonly executionContractId: string;
  readonly attemptId: string;
  readonly repositoryRef: string;
  readonly baseSha: string;
  readonly executorClaims: {
    readonly cursorExecutionReportRef: string | null;
    readonly cursorReviewEndOfRef: string | null;
  };
  readonly verifiedEffects: {
    readonly verifiedChangeSetRef: string | null;
    readonly gitFacts: readonly string[];
    readonly validationFacts: readonly string[];
  };
  readonly reviewItems: readonly ExecutionReviewItem[];
  readonly blockers: readonly string[];
  readonly reservations: readonly string[];
  readonly completeness: ExecutionReviewCompleteness;
  readonly retentionState: ExecutionReviewRetentionState;
  readonly createdAt: string;
};

function safeAttemptSegment(attemptId: string): string {
  return attemptId.replace(/[^a-zA-Z0-9:_-]/g, "");
}

export function genericExecutionReviewMaterialRefsRelative(
  attemptId: string,
): {
  readonly root: string;
  readonly manifest: string;
  readonly cursorReport: string;
  readonly reviewEndOf: string;
  readonly verifiedChangeSet: string;
  readonly itemsDir: string;
} {
  const segment = safeAttemptSegment(attemptId);
  const root = `refs/attempts/${segment}/execution-review`;
  return {
    root,
    manifest: `${root}/manifest.json`,
    cursorReport: `${root}/cursor-execution-report.json`,
    reviewEndOf: `${root}/cursor-review-end-of.json`,
    verifiedChangeSet: `${root}/verified-changeset.json`,
    itemsDir: `${root}/items`,
  };
}

export function digestUtf8(content: string | Buffer): string {
  const buf = typeof content === "string" ? Buffer.from(content, "utf8") : content;
  return `sha256:${createHash("sha256").update(buf).digest("hex")}`;
}

export function persistGenericExecutionReviewMaterial(input: {
  readonly refsRoot: string;
  readonly projectId: string;
  readonly cycleInstanceId?: string;
  readonly executionContractId: string;
  readonly attemptId: string;
  readonly repositoryRef: string;
  readonly baseSha: string;
  readonly cursorReport?: CursorExecutionReport | null;
  readonly reviewEndOf?: CursorReviewEndOf | null;
  readonly verifiedChangeSet?: VerifiedChangeSet | null;
  readonly reviewItems?: readonly {
    readonly kind: ExecutionReviewItemKind;
    readonly logicalPath?: string;
    readonly label: string;
    readonly bytes?: Buffer;
    readonly text?: string;
    readonly summary?: string;
  }[];
  readonly blockers?: readonly string[];
  readonly reservations?: readonly string[];
  readonly completeness?: ExecutionReviewCompleteness;
  readonly retentionState?: ExecutionReviewRetentionState;
  readonly createdAt?: string;
}):
  | {
      ok: true;
      manifest: ExecutionReviewMaterialManifest;
      manifestAbsolutePath: string;
    }
  | { ok: false; code: string; message: string } {
  try {
    const rel = genericExecutionReviewMaterialRefsRelative(input.attemptId);
    const rootAbs = path.join(input.refsRoot, rel.root);
    fs.mkdirSync(rootAbs, { recursive: true });
    fs.mkdirSync(path.join(input.refsRoot, rel.itemsDir), { recursive: true });

    let cursorExecutionReportRef: string | null = null;
    if (input.cursorReport) {
      const abs = path.join(input.refsRoot, rel.cursorReport);
      fs.writeFileSync(abs, `${JSON.stringify(input.cursorReport)}\n`, "utf8");
      cursorExecutionReportRef = rel.cursorReport;
    }

    let cursorReviewEndOfRef: string | null = null;
    if (input.reviewEndOf) {
      const abs = path.join(input.refsRoot, rel.reviewEndOf);
      fs.writeFileSync(abs, `${JSON.stringify(input.reviewEndOf)}\n`, "utf8");
      cursorReviewEndOfRef = rel.reviewEndOf;
    }

    let verifiedChangeSetRef: string | null = null;
    const gitFacts: string[] = [];
    const validationFacts: string[] = [];
    if (input.verifiedChangeSet) {
      const abs = path.join(input.refsRoot, rel.verifiedChangeSet);
      // Strip absolute worktree paths from durable payload — logical facts only.
      const durable = {
        ...input.verifiedChangeSet,
        worktreePath: "<disposed-or-ephemeral>",
        all: input.verifiedChangeSet.all.map(({ contentAbsolutePath: _, ...e }) => e),
        created: input.verifiedChangeSet.created.map(
          ({ contentAbsolutePath: _, ...e }) => e,
        ),
        modified: input.verifiedChangeSet.modified.map(
          ({ contentAbsolutePath: _, ...e }) => e,
        ),
        deleted: input.verifiedChangeSet.deleted,
        renamed: input.verifiedChangeSet.renamed,
      };
      fs.writeFileSync(abs, `${JSON.stringify(durable)}\n`, "utf8");
      verifiedChangeSetRef = rel.verifiedChangeSet;
      if (input.verifiedChangeSet.claimFactMismatch) {
        gitFacts.push(
          `claim_fact_mismatch unclaimed=${input.verifiedChangeSet.unclaimedObservedPaths.join(",")}`,
        );
      }
    }

    const reviewItems: ExecutionReviewItem[] = [];
    let ordinal = 0;
    for (const item of input.reviewItems ?? []) {
      ordinal += 1;
      const itemId = `ri:${String(ordinal).padStart(3, "0")}`;
      let contentRef: string | undefined;
      let digest: string | undefined;
      if (item.bytes || item.text) {
        const bytes =
          item.bytes ?? Buffer.from(item.text ?? "", "utf8");
        digest = digestUtf8(bytes);
        const fileName = `${itemId}.bin`;
        const itemRel = `${rel.itemsDir}/${fileName}`;
        fs.writeFileSync(path.join(input.refsRoot, itemRel), bytes);
        contentRef = itemRel;
      }
      reviewItems.push({
        itemId,
        kind: item.kind,
        logicalPath: item.logicalPath,
        label: item.label,
        contentRef,
        digest,
        summary: item.summary,
      });
    }

    for (const v of input.cursorReport?.validationEffects ?? []) {
      validationFacts.push(`${v.identity}:${v.result}`);
    }

    const completeness: ExecutionReviewCompleteness =
      input.completeness ??
      (cursorExecutionReportRef &&
      (reviewItems.length > 0 ||
        verifiedChangeSetRef ||
        cursorReviewEndOfRef)
        ? "FULL"
        : "PARTIAL");

    const manifest: ExecutionReviewMaterialManifest = {
      schemaVersion: OA_EXECUTION_REVIEW_MATERIAL_SCHEMA,
      reviewMaterialId: `erm:${safeAttemptSegment(input.attemptId)}`,
      projectId: input.projectId,
      cycleInstanceId: input.cycleInstanceId,
      executionContractId: input.executionContractId,
      attemptId: input.attemptId,
      repositoryRef: input.repositoryRef,
      baseSha: input.baseSha,
      executorClaims: {
        cursorExecutionReportRef,
        cursorReviewEndOfRef,
      },
      verifiedEffects: {
        verifiedChangeSetRef,
        gitFacts,
        validationFacts,
      },
      reviewItems,
      blockers: [...(input.blockers ?? input.cursorReport?.blockers ?? [])],
      reservations: [
        ...(input.reservations ?? input.cursorReport?.reservations ?? []),
      ],
      completeness,
      retentionState: input.retentionState ?? "HOT",
      createdAt: input.createdAt ?? new Date().toISOString(),
    };

    const manifestAbsolutePath = path.join(input.refsRoot, rel.manifest);
    fs.writeFileSync(
      manifestAbsolutePath,
      `${JSON.stringify(manifest, null, 2)}\n`,
      "utf8",
    );

    return { ok: true, manifest, manifestAbsolutePath };
  } catch (err) {
    return {
      ok: false,
      code: "EXECUTION_REVIEW_MATERIAL_PERSIST_FAILED",
      message: err instanceof Error ? err.message : String(err),
    };
  }
}

export function loadGenericExecutionReviewMaterial(input: {
  readonly refsRoot: string;
  readonly attemptId: string;
}):
  | {
      ok: true;
      manifest: ExecutionReviewMaterialManifest;
      cursorReport: CursorExecutionReport | null;
      reviewEndOf: CursorReviewEndOf | null;
      verifiedChangeSet: VerifiedChangeSet | null;
    }
  | { ok: false; code: string; message: string } {
  const rel = genericExecutionReviewMaterialRefsRelative(input.attemptId);
  const manifestAbs = path.join(input.refsRoot, rel.manifest);
  if (!fs.existsSync(manifestAbs)) {
    return {
      ok: false,
      code: "EXECUTION_REVIEW_MATERIAL_MISSING",
      message: "Generic Execution Review Material introuvable.",
    };
  }
  try {
    const manifest = JSON.parse(
      fs.readFileSync(manifestAbs, "utf8"),
    ) as ExecutionReviewMaterialManifest;
    let cursorReport: CursorExecutionReport | null = null;
    let reviewEndOf: CursorReviewEndOf | null = null;
    let verifiedChangeSet: VerifiedChangeSet | null = null;
    if (manifest.executorClaims.cursorExecutionReportRef) {
      const p = path.join(
        input.refsRoot,
        manifest.executorClaims.cursorExecutionReportRef,
      );
      if (fs.existsSync(p)) {
        cursorReport = JSON.parse(
          fs.readFileSync(p, "utf8"),
        ) as CursorExecutionReport;
      }
    }
    if (manifest.executorClaims.cursorReviewEndOfRef) {
      const p = path.join(
        input.refsRoot,
        manifest.executorClaims.cursorReviewEndOfRef,
      );
      if (fs.existsSync(p)) {
        reviewEndOf = JSON.parse(fs.readFileSync(p, "utf8")) as CursorReviewEndOf;
      }
    }
    if (manifest.verifiedEffects.verifiedChangeSetRef) {
      const p = path.join(
        input.refsRoot,
        manifest.verifiedEffects.verifiedChangeSetRef,
      );
      if (fs.existsSync(p)) {
        verifiedChangeSet = JSON.parse(
          fs.readFileSync(p, "utf8"),
        ) as VerifiedChangeSet;
      }
    }
    return { ok: true, manifest, cursorReport, reviewEndOf, verifiedChangeSet };
  } catch (err) {
    return {
      ok: false,
      code: "EXECUTION_REVIEW_MATERIAL_LOAD_FAILED",
      message: err instanceof Error ? err.message : String(err),
    };
  }
}

export function readExecutionReviewItemBytes(input: {
  readonly refsRoot: string;
  readonly contentRef: string;
  readonly byteCap?: number;
}):
  | {
      ok: true;
      text: string;
      completeness: ExecutionReviewCompleteness;
      digest: string;
    }
  | { ok: false; code: string; message: string } {
  // Fail-closed: only relative refs under execution-review/items/
  const norm = input.contentRef.replace(/\\/g, "/");
  if (
    norm.includes("..") ||
    path.isAbsolute(norm) ||
    !norm.includes("/execution-review/items/")
  ) {
    return {
      ok: false,
      code: "EXECUTION_REVIEW_ITEM_REF_DENIED",
      message: "Review item ref must be Attempt-bound under execution-review/items.",
    };
  }
  const abs = path.join(input.refsRoot, norm);
  if (!fs.existsSync(abs)) {
    return {
      ok: false,
      code: "EXECUTION_REVIEW_ITEM_MISSING",
      message: "Review item content introuvable.",
    };
  }
  const bytes = fs.readFileSync(abs);
  const cap = input.byteCap ?? 24_000;
  const truncated = bytes.byteLength > cap;
  const slice = truncated ? bytes.subarray(0, cap) : bytes;
  return {
    ok: true,
    text: slice.toString("utf8"),
    completeness: truncated ? "PARTIAL" : "FULL",
    digest: digestUtf8(bytes),
  };
}

/** Default refs root beside Product SQLite (same convention as docs_write / mission-result). */
export function defaultMissionResultRefsRoot(sqliteDbPath: string): string {
  return path.join(path.dirname(sqliteDbPath), "mission-result-refs");
}

```


## CREATED: `projects/sfia-studio/app/features/project-assistant/w2/reconcileContinuePolicy.ts`

```typescript
/**
 * Client-side continuation policy for Reconciler anti-stall (D-ER-08).
 *
 * Owner remains reconcileGovernedExecution. UI only triggers continue.
 * No worker / queue / scheduler platform — OPEN DESIGN DETAIL for other
 * mechanisms; this is the minimal seam-reuse chosen for this macro.
 */

export type ContinuityStageLike =
  | "RUNNING"
  | "PRODUCT_MATERIALIZATION_PENDING"
  | "POST_EVIDENCE_PENDING"
  | string;

export type ContinuityProjectionLike = {
  readonly stage: ContinuityStageLike;
  readonly nextDeterministicAction?: string | null;
  readonly recoveryRequired?: boolean;
};

/** Legacy NoteLite-era UI bound (~8). Must be exceeded by nominal policy. */
export const LEGACY_UI_RUNNING_POLL_BUDGET = 8;

/**
 * Nominal continue budget — must exceed legacy poll so long-running Attempt
 * still converges without manual « Recharger résultat produit ».
 */
export const NOMINAL_RECONCILE_CONTINUE_BUDGET = 120;

export function shouldContinueReconcileNominally(
  projection: ContinuityProjectionLike | null | undefined,
): boolean {
  if (!projection) return false;
  if (projection.recoveryRequired) return false;
  if (projection.stage === "RUNNING") return true;
  const next = projection.nextDeterministicAction ?? "NONE";
  return (
    next === "MATERIALIZE_PRODUCT" ||
    next === "RUN_POST_EVIDENCE" ||
    projection.stage === "PRODUCT_MATERIALIZATION_PENDING" ||
    projection.stage === "POST_EVIDENCE_PENDING"
  );
}

/**
 * Pure policy: how many continue iterations remain under nominal budget.
 * Tests assert this exceeds LEGACY_UI_RUNNING_POLL_BUDGET.
 */
export function nominalContinueIterationsRemaining(
  alreadyUsed: number,
  projection: ContinuityProjectionLike | null | undefined,
  budget: number = NOMINAL_RECONCILE_CONTINUE_BUDGET,
): number {
  if (!shouldContinueReconcileNominally(projection)) return 0;
  return Math.max(0, budget - alreadyUsed);
}

```


## CREATED: `projects/sfia-studio/app/lib/nora-cognitive-runtime/executionReviewAgentsTools.ts`

```typescript
/**
 * Bounded READ-ONLY Execution Review tools for Nora Deep Review (D-ER-09).
 *
 * Project-bound + Attempt-bound + ref-bound.
 * No arbitrary filesystem paths, no mutation, no Evidence creation, no HD.
 * Prefer KEEP shared Agents runtime + ADAPT/COMPLETE these tools (R22).
 */
import { tool } from "@openai/agents";
import type { NoraTurnBudget } from "./turnBudget";
import {
  TOOL_TURN_BUDGET_EXCEEDED_RESULT,
  claimToolSlot,
} from "./turnBudget";
import {
  loadGenericExecutionReviewMaterial,
  readExecutionReviewItemBytes,
} from "@/features/project-assistant/f3/persistGenericExecutionReviewMaterial";
import { resolveProductEvidenceRefsRoot } from "@/features/project-assistant/f3/persistDocsWriteArtifactReviewMaterial";

export type ExecutionReviewToolContext = {
  readonly projectId: string;
  readonly attemptId: string;
  readonly refsRoot?: string;
  readonly budget?: NoraTurnBudget;
};

function deny(code: string, message: string): string {
  return JSON.stringify({ ok: false, code, message });
}

export function createExecutionReviewAgentsTools(
  ctx: ExecutionReviewToolContext,
) {
  const refsRoot = ctx.refsRoot ?? resolveProductEvidenceRefsRoot();
  const projectId = ctx.projectId.trim();
  const attemptId = ctx.attemptId.trim();

  const getManifest = tool({
    name: "execution_review_get_manifest",
    description:
      "Load the compact Generic Execution Review Material manifest for the CURRENT Project Attempt only. " +
      "Returns executorClaims (report + Review End Of refs — CLAIMS), verifiedEffects summary, reviewItems list, completeness. " +
      "READ-ONLY. Never invent FULL when completeness is PARTIAL.",
    parameters: {
      type: "object",
      additionalProperties: false,
      required: [],
      properties: {},
    } as never,
    strict: false,
    execute: async () => {
      if (ctx.budget && !claimToolSlot(ctx.budget)) {
        return TOOL_TURN_BUDGET_EXCEEDED_RESULT;
      }
      if (!projectId || !attemptId) {
        return deny(
          "EXECUTION_REVIEW_BINDING_REQUIRED",
          "projectId and attemptId required.",
        );
      }
      const loaded = loadGenericExecutionReviewMaterial({
        refsRoot,
        attemptId,
      });
      if (!loaded.ok) {
        return deny(loaded.code, loaded.message);
      }
      if (loaded.manifest.projectId !== projectId) {
        return deny(
          "EXECUTION_REVIEW_PROJECT_MISMATCH",
          "Review Material hors Project courant — fail-closed.",
        );
      }
      if (loaded.manifest.attemptId !== attemptId) {
        return deny(
          "EXECUTION_REVIEW_ATTEMPT_MISMATCH",
          "Review Material hors Attempt courant — fail-closed.",
        );
      }
      return JSON.stringify({
        ok: true,
        completeness: loaded.manifest.completeness,
        retentionState: loaded.manifest.retentionState,
        executorClaims: {
          cursorReportPresent: Boolean(loaded.cursorReport),
          reviewEndOfPresent: Boolean(loaded.reviewEndOf),
          disclosure: "CLAIM_NOT_EVIDENCE",
        },
        verifiedEffects: {
          present: Boolean(loaded.verifiedChangeSet),
          claimFactMismatch:
            loaded.verifiedChangeSet?.claimFactMismatch ?? false,
          createdCount: loaded.verifiedChangeSet?.created.length ?? 0,
          modifiedCount: loaded.verifiedChangeSet?.modified.length ?? 0,
          deletedCount: loaded.verifiedChangeSet?.deleted.length ?? 0,
          unclaimedObservedPaths:
            loaded.verifiedChangeSet?.unclaimedObservedPaths ?? [],
        },
        reviewItems: loaded.manifest.reviewItems.map((i) => ({
          itemId: i.itemId,
          kind: i.kind,
          logicalPath: i.logicalPath ?? null,
          label: i.label,
          hasContent: Boolean(i.contentRef),
          digest: i.digest ?? null,
        })),
        blockers: loaded.manifest.blockers,
        reservations: loaded.manifest.reservations,
        note:
          "Cursor report / Review End Of remain CLAIMS. Prefer verifiedEffects when claimFactMismatch.",
      });
    },
  });

  const readItem = tool({
    name: "execution_review_read_item",
    description:
      "Read one ReviewItem by itemId from the CURRENT Attempt Review Material. " +
      "Ref-bound only — no arbitrary path. May return PARTIAL if truncated.",
    parameters: {
      type: "object",
      additionalProperties: false,
      required: ["itemId"],
      properties: {
        itemId: { type: "string", description: "Review item id from manifest." },
      },
    } as never,
    strict: false,
    execute: async (args: unknown) => {
      if (ctx.budget && !claimToolSlot(ctx.budget)) {
        return TOOL_TURN_BUDGET_EXCEEDED_RESULT;
      }
      if (!projectId || !attemptId) {
        return deny(
          "EXECUTION_REVIEW_BINDING_REQUIRED",
          "projectId and attemptId required.",
        );
      }
      const itemId =
        args && typeof args === "object"
          ? String((args as { itemId?: unknown }).itemId ?? "").trim()
          : "";
      if (!itemId) {
        return deny("EXECUTION_REVIEW_ITEM_ID_REQUIRED", "itemId requis.");
      }
      const loaded = loadGenericExecutionReviewMaterial({
        refsRoot,
        attemptId,
      });
      if (!loaded.ok) return deny(loaded.code, loaded.message);
      if (loaded.manifest.projectId !== projectId) {
        return deny(
          "EXECUTION_REVIEW_PROJECT_MISMATCH",
          "Review Material hors Project courant — fail-closed.",
        );
      }
      const item = loaded.manifest.reviewItems.find((i) => i.itemId === itemId);
      if (!item) {
        return deny("EXECUTION_REVIEW_ITEM_UNKNOWN", `Unknown itemId ${itemId}`);
      }
      if (!item.contentRef) {
        return JSON.stringify({
          ok: true,
          itemId: item.itemId,
          kind: item.kind,
          logicalPath: item.logicalPath ?? null,
          label: item.label,
          summary: item.summary ?? null,
          content: null,
          completeness: "PARTIAL",
          note: "No durable content bytes for this item.",
        });
      }
      const body = readExecutionReviewItemBytes({
        refsRoot,
        contentRef: item.contentRef,
      });
      if (!body.ok) return deny(body.code, body.message);
      return JSON.stringify({
        ok: true,
        itemId: item.itemId,
        kind: item.kind,
        logicalPath: item.logicalPath ?? null,
        label: item.label,
        summary: item.summary ?? null,
        content: body.text,
        completeness: body.completeness,
        digest: body.digest,
      });
    },
  });

  return [getManifest, readItem] as const;
}

```


## CREATED: `projects/sfia-studio/app/lib/oa/execution-attempt/application/observeVerifiedChangeSet.ts`

```typescript
/**
 * Studio VerifiedChangeSet — GENERIC OBSERVATION (D-ER-06).
 *
 * Separates worktree observation (VERIFIED FACTS) from contract/policy evaluation.
 * Harvested from verifyWorkspaceFileEffects observation seams — WITHOUT docs_write
 * policy as the generic oracle.
 *
 * Cursor CLAIM ≠ Studio FACT. Unexpected / unclaimed effects are reported, not
 * silently promoted to Evidence.
 */
import { createHash } from "node:crypto";
import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import path from "node:path";
import type { LocalGitStatusDiffPort } from "@/lib/oa/git-ports";
import type { CursorExecutionReport } from "../domain/cursorExecutionReport";

export const OA_VERIFIED_CHANGESET_SCHEMA =
  "oa.studio-verified-changeset.1" as const;

export type VerifiedPathStatus =
  | "created"
  | "modified"
  | "deleted"
  | "renamed"
  | "unknown";

export type VerifiedPathEntry = {
  readonly path: string;
  readonly status: VerifiedPathStatus;
  readonly beforeDigest?: string;
  readonly afterDigest?: string;
  /** Absolute path under worktree when still hot — not a Product logical target. */
  readonly contentAbsolutePath?: string;
};

export type VerifiedChangeSet = {
  readonly schemaVersion: typeof OA_VERIFIED_CHANGESET_SCHEMA;
  readonly worktreePath: string;
  readonly observedAt: string;
  readonly created: readonly VerifiedPathEntry[];
  readonly modified: readonly VerifiedPathEntry[];
  readonly deleted: readonly VerifiedPathEntry[];
  readonly renamed: readonly VerifiedPathEntry[];
  readonly all: readonly VerifiedPathEntry[];
  /** Paths observed in worktree but absent from Cursor fileEffects claim. */
  readonly unclaimedObservedPaths: readonly string[];
  /** Paths claimed by Cursor but absent from worktree observation. */
  readonly claimedMissingPaths: readonly string[];
  readonly claimFactMismatch: boolean;
};

function normalizeRel(p: string): string {
  return p.replace(/\\/g, "/").replace(/^\.\//, "").trim();
}

function parseNameStatus(porcelainOrNameStatus: string): {
  path: string;
  status: string;
  renameFrom?: string;
}[] {
  const out: { path: string; status: string; renameFrom?: string }[] = [];
  for (const line of porcelainOrNameStatus.split("\n")) {
    const t = line.trimEnd();
    if (!t) continue;
    if (t.includes("\t")) {
      const parts = t.split("\t");
      const st = (parts[0] ?? "?").trim();
      if (parts.length >= 3 && /^R/i.test(st)) {
        out.push({
          path: normalizeRel(parts[2] ?? ""),
          status: st,
          renameFrom: normalizeRel(parts[1] ?? ""),
        });
        continue;
      }
      if (parts[1]) out.push({ path: normalizeRel(parts[1]), status: st });
      continue;
    }
    if (t.length >= 3) {
      const st = t.slice(0, 2).trim();
      const p = t.slice(3).trim();
      if (p) out.push({ path: normalizeRel(p), status: st || "?" });
    }
  }
  return out;
}

function mapStatus(st: string): VerifiedPathStatus {
  if (/^A|\?|^\?\?/i.test(st) || st.includes("A")) return "created";
  if (/^D/i.test(st) || st.includes("D")) return "deleted";
  if (/^R/i.test(st)) return "renamed";
  if (/^M|^\sM|^M\s|^MM/i.test(st) || st.includes("M")) return "modified";
  return "unknown";
}

async function digestIfExists(
  worktreePath: string,
  rel: string,
): Promise<string | undefined> {
  const abs = path.resolve(worktreePath, ...rel.split("/"));
  const root = path.resolve(worktreePath);
  if (abs !== root && !abs.startsWith(root + path.sep)) return undefined;
  if (!existsSync(abs)) return undefined;
  const buf = await readFile(abs);
  return `sha256:${createHash("sha256").update(buf).digest("hex")}`;
}

/**
 * Observe the full worktree independently of Cursor claims and of docs_write policy.
 */
export async function observeVerifiedChangeSet(input: {
  readonly worktreePath: string;
  readonly report?: CursorExecutionReport | null;
  readonly statusDiffPort?: LocalGitStatusDiffPort;
  readonly nameStatusText?: string;
  readonly observedAt?: string;
  readonly computeDigests?: boolean;
}): Promise<VerifiedChangeSet> {
  let nameStatus = input.nameStatusText ?? "";
  if (!nameStatus && input.statusDiffPort) {
    const diff = await input.statusDiffPort.statusDiff({
      repoPath: input.worktreePath,
    });
    nameStatus = diff.statusPorcelain || diff.diffStat;
  }

  const changed = parseNameStatus(nameStatus);
  const created: VerifiedPathEntry[] = [];
  const modified: VerifiedPathEntry[] = [];
  const deleted: VerifiedPathEntry[] = [];
  const renamed: VerifiedPathEntry[] = [];
  const all: VerifiedPathEntry[] = [];

  for (const c of changed) {
    if (!c.path) continue;
    const status = mapStatus(c.status);
    const afterDigest =
      input.computeDigests !== false && status !== "deleted"
        ? await digestIfExists(input.worktreePath, c.path)
        : undefined;
    const entry: VerifiedPathEntry = {
      path: c.path,
      status,
      afterDigest,
      contentAbsolutePath:
        status === "deleted"
          ? undefined
          : path.resolve(input.worktreePath, ...c.path.split("/")),
    };
    all.push(entry);
    if (status === "created") created.push(entry);
    else if (status === "modified") modified.push(entry);
    else if (status === "deleted") deleted.push(entry);
    else if (status === "renamed") renamed.push(entry);
    else modified.push(entry);
  }

  const observedPaths = new Set(all.map((e) => e.path));
  const claimed = new Set(
    [
      ...(input.report?.fileEffects?.created ?? []),
      ...(input.report?.fileEffects?.modified ?? []),
      ...(input.report?.fileEffects?.deleted ?? []),
    ].map(normalizeRel),
  );

  const unclaimedObservedPaths =
    claimed.size > 0
      ? [...observedPaths].filter((p) => !claimed.has(p))
      : [];
  const claimedMissingPaths =
    claimed.size > 0
      ? [...claimed].filter((p) => p && !observedPaths.has(p))
      : [];

  return {
    schemaVersion: OA_VERIFIED_CHANGESET_SCHEMA,
    worktreePath: input.worktreePath,
    observedAt: input.observedAt ?? new Date().toISOString(),
    created,
    modified,
    deleted,
    renamed,
    all,
    unclaimedObservedPaths,
    claimedMissingPaths,
    claimFactMismatch:
      unclaimedObservedPaths.length > 0 || claimedMissingPaths.length > 0,
  };
}

```


## CREATED: `projects/sfia-studio/app/lib/oa/execution-attempt/domain/cursorReviewEndOf.ts`

```typescript
/**
 * Cursor Review End Of — EXECUTOR CLAIM (D-ER-05).
 *
 * Produced by Cursor at end of execution, alongside CursorExecutionReport.
 * Native = Studio binding / storage / consumption — Studio is NOT the producer.
 * NEVER Evidence, Verified Facts, ClaimEvaluation, or Nora Analysis.
 *
 * Packaging (nested in report transport vs sidecar file) is an implementation
 * detail; this type is the semantic contract.
 */

export const OA_CURSOR_REVIEW_END_OF_SCHEMA =
  "oa.cursor-review-end-of.1" as const;

export type CursorReviewEndOfVerdict =
  | "succeeded"
  | "failed"
  | "stopped"
  | "timeout"
  | "partial";

export type CursorReviewEndOf = {
  readonly schemaVersion: typeof OA_CURSOR_REVIEW_END_OF_SCHEMA;
  /** Distinct claim identity — not Evidence. */
  readonly reviewEndOfId: string;
  readonly attemptId: string;
  readonly executionContractId: string;
  readonly timestamp: string;
  readonly repositoryRef: string;
  readonly baseSha: string;
  /** Cursor's claimed HEAD after work when known — CLAIM only. */
  readonly headSha?: string;
  readonly verdict: CursorReviewEndOfVerdict;
  readonly objective: string;
  readonly scopeTreated: string;
  readonly workPerformed: readonly string[];
  readonly filesCreated: readonly string[];
  readonly filesModified: readonly string[];
  readonly filesDeleted: readonly string[];
  readonly validations: readonly string[];
  readonly fullValidation?: string | null;
  readonly gitProof?: string | null;
  readonly deviations: readonly string[];
  readonly blockers: readonly string[];
  readonly reservations: readonly string[];
  readonly stopConditionsMet: readonly string[];
  readonly claims: readonly string[];
  readonly pointsRequiringReview: readonly string[];
};

export function mintCursorReviewEndOfId(input: {
  readonly attemptId: string;
  readonly executionContractId: string;
}): string {
  const safeAttempt = input.attemptId.replace(/[^a-zA-Z0-9:_-]/g, "").slice(-24);
  const safeContract = input.executionContractId
    .replace(/[^a-zA-Z0-9:_-]/g, "")
    .slice(-24);
  return `reo:cursor:${safeContract}:${safeAttempt}`;
}

export function isCursorReviewEndOf(value: unknown): value is CursorReviewEndOf {
  if (!value || typeof value !== "object") return false;
  const v = value as Record<string, unknown>;
  return (
    v.schemaVersion === OA_CURSOR_REVIEW_END_OF_SCHEMA &&
    typeof v.reviewEndOfId === "string" &&
    (v.reviewEndOfId as string).trim().length > 0 &&
    typeof v.attemptId === "string" &&
    typeof v.executionContractId === "string" &&
    typeof v.timestamp === "string" &&
    typeof v.repositoryRef === "string" &&
    typeof v.baseSha === "string" &&
    typeof v.verdict === "string" &&
    typeof v.objective === "string" &&
    typeof v.scopeTreated === "string" &&
    Array.isArray(v.workPerformed) &&
    Array.isArray(v.filesCreated) &&
    Array.isArray(v.filesModified) &&
    Array.isArray(v.filesDeleted) &&
    Array.isArray(v.validations) &&
    Array.isArray(v.deviations) &&
    Array.isArray(v.blockers) &&
    Array.isArray(v.reservations) &&
    Array.isArray(v.stopConditionsMet) &&
    Array.isArray(v.claims) &&
    Array.isArray(v.pointsRequiringReview)
  );
}

export function parseCursorReviewEndOf(
  raw: unknown,
):
  | { ok: true; reviewEndOf: CursorReviewEndOf }
  | { ok: false; reason: string } {
  if (!isCursorReviewEndOf(raw)) {
    return { ok: false, reason: "cursor_review_end_of_invalid" };
  }
  return { ok: true, reviewEndOf: raw };
}

```


# UNIFIED DIFFS — MODIFIED FILES


## DIFF: `projects/sfia-studio/app/__tests__/project-assistant/productContinuitySharedKnowledge.d0.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/productContinuitySharedKnowledge.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/productContinuitySharedKnowledge.d0.test.ts
index 1d517c31..2b226c43 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/productContinuitySharedKnowledge.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/productContinuitySharedKnowledge.d0.test.ts
@@ -50,6 +50,17 @@ function emptyContext(
       completeness: null,
       preview: null,
     },
+    executionReview: {
+      kind: "EXECUTION_REVIEW_MATERIAL",
+      present: false,
+      completeness: null,
+      reviewMaterialId: null,
+      reviewItemCount: 0,
+      claimFactMismatch: false,
+      retentionState: null,
+      reviewEndOfPresent: false,
+      verifiedChangeSetPresent: false,
+    },
     evidence: {
       kind: "EVIDENCE",
       evidenceId: null,

```


## DIFF: `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx`

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
index 6d02f3f2..65451d67 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
@@ -1732,10 +1732,18 @@ export function TrajectorySurface({
         executionContractId: contract.executionContractId,
         intent,
       });
-      // Bounded poll while Attempt still running (async REAL / Fake pending).
-      for (let i = 0; i < 8; i++) {
+      // Bounded continue-until-stable while Attempt RUNNING or post-terminal
+      // deterministic work remains (anti-stall — Reconciler stays owner).
+      // Exceeds legacy NoteLite-era ~8 poll budget without introducing a worker.
+      const {
+        NOMINAL_RECONCILE_CONTINUE_BUDGET,
+        shouldContinueReconcileNominally,
+      } = await import(
+        "@/features/project-assistant/w2/reconcileContinuePolicy"
+      );
+      for (let i = 0; i < NOMINAL_RECONCILE_CONTINUE_BUDGET; i++) {
         if (!reconciled.ok) break;
-        if (reconciled.projection.stage !== "RUNNING") break;
+        if (!shouldContinueReconcileNominally(reconciled.projection)) break;
         await yieldBrowserPaint();
         reconciled = await w2ReconcileGovernedExecutionAction({
           projectId,

```


## DIFF: `projects/sfia-studio/app/features/project-assistant/f3/ingestDocsWriteArtifactEvidence.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/ingestDocsWriteArtifactEvidence.ts b/projects/sfia-studio/app/features/project-assistant/f3/ingestDocsWriteArtifactEvidence.ts
index 6151592b..a184deb5 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/ingestDocsWriteArtifactEvidence.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/ingestDocsWriteArtifactEvidence.ts
@@ -88,6 +88,33 @@ export async function ingestDocsWriteArtifactEvidence(
     storageMode = "external_payload_ref";
     durableArtifactAbsolutePath = persisted.artifactAbsolutePath;
     durableCursorReportAbsolutePath = persisted.cursorReportAbsolutePath;
+
+    // Dual-write Generic Execution Review Material (D-ER-04) — transitional bridge.
+    // docs_write persist remains compatibility; generic path is the nominal target.
+    if (input.cursorReport) {
+      const { finalizeGenericExecutionReview } = await import(
+        "./finalizeGenericExecutionReview"
+      );
+      await finalizeGenericExecutionReview({
+        refsRoot,
+        projectId: input.projectId,
+        cycleInstanceId: input.cycleInstanceId,
+        executionContractId: input.executionContractId,
+        attemptId: input.executionAttemptId,
+        repositoryRef: input.cursorReport.repositoryRef,
+        baseSha: input.cursorReport.baseSha,
+        cursorReport: input.cursorReport,
+        extraReviewItems: [
+          {
+            kind: "artifact",
+            logicalPath: input.targetPath,
+            label: `artifact: ${input.targetPath}`,
+            bytes: input.artifactBytes,
+            summary: input.digest,
+          },
+        ],
+      });
+    }
   }

   const registered = await input.evidenceReviewServices.registerEvidence.execute({

```


## DIFF: `projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts b/projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts
index d4fae268..5d3b4a96 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts
@@ -172,6 +172,11 @@ export type AnalyzePostEvidenceOptions = {
    * `buildCkcCognitivePromptSection` — never raw package paths for Pilote.
    */
   readonly ckcPromptSection?: string | null;
+  /**
+   * D-ER-09 — opt-in bounded Execution Review tools for Deep Review.
+   * Default false preserves Fake complete-only post_execution path.
+   */
+  readonly enableExecutionReviewTools?: boolean;
 };

 function buildPostEvidenceSystemPrompt(
@@ -193,9 +198,8 @@ export async function analyzePostEvidenceWithProvider(
   options?: AnalyzePostEvidenceOptions,
 ): Promise<PostEvidenceAnalysisResult> {
   // Shared Nora cognitive CORE (Agents Runner) — mode=post_execution.
-  // Same seam as conversation (runNoraCognitiveTurn → runNoraCognitiveCore).
-  // No Memory B / MW5 / hosted search / tools — applied by core mode defaults.
-  // This module must NOT be imported by client presentation (use postEvidenceNoraSentinels).
+  // Deep Review tools are opt-in via options (keeps Fake complete path stable).
+  // No Memory B / MW5 / hosted search — applied by core mode defaults.
   const completion = await runNoraCognitiveCompletion({
     mode: "post_execution",
     system: buildPostEvidenceSystemPrompt(options?.ckcPromptSection),
@@ -203,6 +207,12 @@ export async function analyzePostEvidenceWithProvider(
     maxChars: 4000,
     projectId: facts.projectId,
     correlationId: `cor:w3c-post-evidence:${facts.attemptId}`,
+    executionReviewTools: options?.enableExecutionReviewTools
+      ? {
+          projectId: facts.projectId,
+          attemptId: facts.attemptId,
+        }
+      : null,
   });
   if (!completion.ok) {
     return {

```


## DIFF: `projects/sfia-studio/app/features/project-assistant/w2/missionContractSemanticInputs.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/missionContractSemanticInputs.ts b/projects/sfia-studio/app/features/project-assistant/w2/missionContractSemanticInputs.ts
index e6c78514..efc19105 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/missionContractSemanticInputs.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/missionContractSemanticInputs.ts
@@ -41,8 +41,20 @@ export const MISSION_REPORT_REQUIREMENTS: readonly string[] = Object.freeze([
   "diagnosticSummary non vide",
   "recommendedNextProductStep non vide",
   "authorizedEffectsExecuted (liste explicite, vide si aucune)",
+  "Cursor Review End Of (CLAIM exécuteur) — verdict, scope, work, effects, validations, blockers, reservations, points de revue",
 ]);

+/**
+ * Generic Product mutating / reviewable missions — machine report + Review End Of.
+ * Technical effects remain enforcement; this is NOT a Product task taxonomy.
+ */
+export const GENERIC_PRODUCT_REPORT_REQUIREMENTS: readonly string[] =
+  Object.freeze([
+    ...MISSION_REPORT_REQUIREMENTS,
+    "fileEffects claim (created/modified/deleted) lorsque des fichiers sont touchés — CLAIM seulement",
+    "validationEffects lorsque des validations sont exécutées — CLAIM seulement",
+  ]);
+
 function criterionIdFor(ordinal: number, suffix: string): string {
   return `acc:${String(ordinal).padStart(2, "0")}:${suffix}`;
 }
@@ -201,3 +213,7 @@ export function deriveDocsWriteValidationPlan(input: {
 export function deriveMissionReportRequirements(): readonly string[] {
   return MISSION_REPORT_REQUIREMENTS;
 }
+
+export function deriveGenericProductReportRequirements(): readonly string[] {
+  return GENERIC_PRODUCT_REPORT_REQUIREMENTS;
+}

```


## DIFF: `projects/sfia-studio/app/features/project-assistant/w2/resolveProductExecutionContext.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/resolveProductExecutionContext.ts b/projects/sfia-studio/app/features/project-assistant/w2/resolveProductExecutionContext.ts
index ba78a0c3..31b491d2 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/resolveProductExecutionContext.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/resolveProductExecutionContext.ts
@@ -18,6 +18,7 @@ import {
   loadDocsWriteArtifactReviewMaterial,
   resolveProductEvidenceRefsRoot,
 } from "@/features/project-assistant/f3/persistDocsWriteArtifactReviewMaterial";
+import { loadGenericExecutionReviewMaterial } from "@/features/project-assistant/f3/persistGenericExecutionReviewMaterial";
 import {
   findExistingW3cPostEvidence,
   projectW3cExecutionReportSurfaceFromDurable,
@@ -62,6 +63,18 @@ export type ProductExecutionContext = {
     readonly completeness: "FULL" | "PARTIAL" | null;
     readonly preview: string | null;
   };
+  /** Generic Execution Review Material — payload only; ≠ Product Truth / Evidence. */
+  readonly executionReview: {
+    readonly kind: "EXECUTION_REVIEW_MATERIAL";
+    readonly present: boolean;
+    readonly completeness: "FULL" | "PARTIAL" | null;
+    readonly reviewMaterialId: string | null;
+    readonly reviewItemCount: number;
+    readonly claimFactMismatch: boolean;
+    readonly retentionState: string | null;
+    readonly reviewEndOfPresent: boolean;
+    readonly verifiedChangeSetPresent: boolean;
+  };
   readonly evidence: {
     readonly kind: "EVIDENCE";
     readonly evidenceId: string | null;
@@ -543,6 +556,17 @@ export async function resolveProductExecutionContext(input: {
     completeness: null,
     preview: null,
   };
+  let executionReview: ProductExecutionContext["executionReview"] = {
+    kind: "EXECUTION_REVIEW_MATERIAL",
+    present: false,
+    completeness: null,
+    reviewMaterialId: null,
+    reviewItemCount: 0,
+    claimFactMismatch: false,
+    retentionState: null,
+    reviewEndOfPresent: false,
+    verifiedChangeSetPresent: false,
+  };
   let evidenceBlock: ProductExecutionContext["evidence"] = {
     kind: "EVIDENCE",
     evidenceId: null,
@@ -620,6 +644,38 @@ export async function resolveProductExecutionContext(input: {
       }
     }

+    const genericReview = loadGenericExecutionReviewMaterial({
+      refsRoot: resolveProductEvidenceRefsRoot(),
+      attemptId: attempt.attemptId,
+    });
+    if (genericReview.ok) {
+      const mismatch =
+        genericReview.verifiedChangeSet?.claimFactMismatch === true ||
+        genericReview.manifest.blockers.some((b) =>
+          b.includes("CLAIM_FACT_MISMATCH"),
+        );
+      executionReview = {
+        kind: "EXECUTION_REVIEW_MATERIAL",
+        present: true,
+        completeness: genericReview.manifest.completeness,
+        reviewMaterialId: genericReview.manifest.reviewMaterialId,
+        reviewItemCount: genericReview.manifest.reviewItems.length,
+        claimFactMismatch: mismatch,
+        retentionState: genericReview.manifest.retentionState,
+        reviewEndOfPresent: Boolean(genericReview.reviewEndOf),
+        verifiedChangeSetPresent: Boolean(genericReview.verifiedChangeSet),
+      };
+      if (genericReview.cursorReport && !cursorReport.present) {
+        cursorReport = {
+          kind: "EXECUTOR_CLAIM",
+          present: true,
+          status: genericReview.cursorReport.status,
+          summary: `status=${genericReview.cursorReport.status}`,
+          disclosure: "CLAIM_NOT_EVIDENCE",
+        };
+      }
+    }
+
     const lineage = await resolveEvidenceLineage({
       oa: input.oa,
       projectId,
@@ -730,6 +786,7 @@ export async function resolveProductExecutionContext(input: {
         : null,
       cursorReport,
       artifact,
+      executionReview,
       evidence: evidenceBlock,
       reviewBundle: reviewBlock,
       claimEvaluation: claimBlock,
@@ -742,6 +799,8 @@ export async function resolveProductExecutionContext(input: {
       disclosures: [
         "Product Resolution is READ-ONLY — not Truth C / HumanDecision / Evidence authority.",
         "CursorExecutionReport is an EXECUTOR CLAIM, never Evidence by itself.",
+        "Cursor Review End Of is an EXECUTOR CLAIM when present — never Fact/Evidence.",
+        "Execution Review Material is a review payload — not Product Truth.",
         "Artifact preview may be PARTIAL — never invent FULL.",
         "Attempt technical succeeded ≠ Product Result PROVEN.",
       ],

```


## DIFF: `projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
index 39085a42..8f444247 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
@@ -408,6 +408,10 @@ export {
   createProductExecutionAgentsTools,
   type ProductExecutionToolContext,
 } from "./productExecutionAgentsTools";
+export {
+  createExecutionReviewAgentsTools,
+  type ExecutionReviewToolContext,
+} from "./executionReviewAgentsTools";
 export {
   runNoraCognitiveCompletion,
   runNoraCognitiveCore,

```


## DIFF: `projects/sfia-studio/app/lib/nora-cognitive-runtime/noraCognitiveCompletion.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraCognitiveCompletion.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraCognitiveCompletion.ts
index 2b6da640..aa507f66 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraCognitiveCompletion.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraCognitiveCompletion.ts
@@ -88,14 +88,19 @@ export async function runNoraCognitiveCore(
   });

   if (input.cognitiveMode === "post_execution") {
+    const hasReviewTools =
+      Boolean(input.executionReviewTools?.projectId?.trim()) &&
+      Boolean(input.executionReviewTools?.attemptId?.trim());
     return runNoraAgentsTurn({
       ...input,
-      enableTools: false,
+      // Deep Review: only bounded execution-review tools when bound; never Memory B / hosted search.
+      enableTools: hasReviewTools,
       enableHostedWebSearch: false,
       session: null,
       memoryBAvailability: "unavailable",
       cycleJournalTools: null,
       productExecutionTools: null,
+      executionReviewTools: hasReviewTools ? input.executionReviewTools : null,
       deterministicHostedWebSearchCalls: undefined,
       campaignBudget: undefined,
       governedAuthority: undefined,
@@ -117,6 +122,8 @@ export async function runNoraCognitiveCompletion(input: {
   readonly maxChars?: number;
   readonly projectId?: string;
   readonly correlationId?: string;
+  /** D-ER-09 — when set, post_execution enables bounded read-only review tools only. */
+  readonly executionReviewTools?: import("./executionReviewAgentsTools").ExecutionReviewToolContext | null;
 }): Promise<NoraCognitiveCompletionResult> {
   const mode: NoraCognitiveCompletionMode =
     input.mode === "conversation_completion" ? "conversation" : "post_execution";
@@ -137,6 +144,7 @@ export async function runNoraCognitiveCompletion(input: {
       enableHostedWebSearch: false,
       session: null,
       memoryBAvailability: "unavailable",
+      executionReviewTools: input.executionReviewTools ?? null,
     });
     const text = turn.text.trim();
     if (!text) {

```


## DIFF: `projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
index a3b5117e..5894cfc7 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
@@ -48,6 +48,7 @@ import {
   createProductExecutionAgentsTools,
   type ProductExecutionToolContext,
 } from "./productExecutionAgentsTools";
+import { createExecutionReviewAgentsTools } from "./executionReviewAgentsTools";
 import type { MemoryBAvailability } from "./memoryBAvailability";
 import {
   createNoraTurnBudget,
@@ -168,6 +169,11 @@ export type RunNoraAgentsTurnInput = {
    * Never authority / HD / Evidence. Optional.
    */
   productExecutionTools?: ProductExecutionToolContext | null;
+  /**
+   * D-ER-09 — bounded READ-ONLY Execution Review tools (Attempt/Project-bound).
+   * Used by post_execution Deep Review without enabling Memory B / hosted search.
+   */
+  executionReviewTools?: import("./executionReviewAgentsTools").ExecutionReviewToolContext | null;
 };

 export type RunNoraAgentsTurnHostedSearchObserve = {
@@ -518,10 +524,21 @@ export async function runNoraAgentsTurn(
           budget,
         })
       : [];
+  const executionReviewTools =
+    input.executionReviewTools &&
+    input.executionReviewTools.projectId.trim() &&
+    input.executionReviewTools.attemptId.trim() &&
+    enableTools
+      ? [...createExecutionReviewAgentsTools({
+          ...input.executionReviewTools,
+          budget,
+        })]
+      : [];
   const tools = [
     ...sfiaTools,
     ...journalTools,
     ...productTools,
+    ...executionReviewTools,
     ...(hostedTool ? [hostedTool] : []),
   ];


```


## DIFF: `projects/sfia-studio/app/lib/oa/execution-attempt/domain/cursorExecutionReport.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/cursorExecutionReport.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/cursorExecutionReport.ts
index 1b0fefd0..931cbfca 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/cursorExecutionReport.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/cursorExecutionReport.ts
@@ -136,6 +136,12 @@ export type CursorExecutionReport = {
   /** Top-level narrative claim aliases (optional; prefer missionResult). */
   diagnosticSummary?: string;
   recommendedNextProductStep?: string;
+  /**
+   * Optional nested Cursor Review End Of CLAIM (D-ER-05).
+   * Logical distinctness from the machine report is required even when
+   * transport reuses this enveloppe. Studio never treats this as Fact/Evidence.
+   */
+  reviewEndOf?: import("./cursorReviewEndOf").CursorReviewEndOf;
 };

 export function mintCursorExecutionReportId(input: {

```


## DIFF: `projects/sfia-studio/app/lib/oa/execution-attempt/index.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
index c9e7c1d9..d509b3cc 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
@@ -45,6 +45,8 @@ export * from "./domain/errors";
 export * from "./domain/invariants";
 export * from "./domain/realLaunchSafety";
 export * from "./domain/cursorExecutionReport";
+export * from "./domain/cursorReviewEndOf";
+export * from "./application/observeVerifiedChangeSet";
 export * from "./domain/authorizedExecutionSlice";
 export * from "./domain/contractEffectClassification";
 export * from "./domain/resolveGitEffectTarget";

```


## DIFF: `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`

```diff
diff --git a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
index 75b2974e..119c1675 100644
--- a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
+++ b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
@@ -4,6 +4,7 @@
 | --- | --- |
 | **Rôle** | Roadmap **vivante** de convergence vers l’utilisation complète de la doctrine produit SFIA Studio v3 |
 | **Statut** | **VALIDATED — ACTIVE LIVING ROADMAP** |
+| **Timestamp maintenance GENERIC-EXECUTION-REVIEW-RESULT-CONVERGENCE-01 delivery candidate** | 2026-09-29 — **GENERIC EXECUTION / REVIEW / RESULT — CONVERGENCE DELIVERY CANDIDATE** · Cycle **8 — Delivery / implémentation** · EVOL · CRITICAL · CKC `cyc:delivery` / `ckc/08-delivery-implementation.md` (**CONTENT VALIDATED BY MORRIS** · guidance only) · Architecture **D-ER-01…D-ER-15 CONSUMED** from `sfia-studio-generic-execution-review-result-architecture.md` · base `origin/main` @ `d4d986af5884b31b416374da3cb5e60757501f87` (PR **#541** architecture merge) · branche locale `delivery/sfia-studio-generic-execution-review-result-convergence-01` · capacité = **LOCAL CANDIDATE / NOT INTEGRATED ON MAIN** · seams livrés (deterministic tested scope) : Cursor Review End Of CLAIM type + EC `reportRequirements` · `observeVerifiedChangeSet` · Generic Execution Review Material persist/load (refs FS, no new table) · Product Resolution `executionReview` · Nora bounded `execution_review_*` tools · Reconciler anti-stall continue budget **> legacy 8** · dual-write Review Material depuis ingest docs_write (bridge) · **ZERO REAL** · NoteLite = **PAUSED** · next = ChatGPT Critical Review → Morris GO commit/push/PR · replay REAL NoteLite = **DISTINCT Morris GO** · runtime v3 = **NON ADOPTED** · READY FOR REAL = **NO** · **≠** INTEGRATED ON MAIN · **≠** full Product-front-door E2E oracle claim without reserves · **CURRENT REPOSITORY TRUTH = RESOLVE FROM GIT** |
 | **Timestamp maintenance GENERIC-EXECUTION-REVIEW-RESULT-ARCHITECTURE-01 truth-sync** | 2026-09-29 — **GENERIC EXECUTION / REVIEW / RESULT — ARCHITECTURE TRUTH-SYNC** · Cycle **6 — Architecture technique** · DOC / EVOL · CRITICAL · CKC `cyc:technical-architecture` / `ckc/06-architecture-technique.md` (**CONTENT VALIDATED BY MORRIS** · guidance only · **≠** execution authority) · Morris decisions **D-ER-01…D-ER-15 ADOPTED** (2026-09-29) · **CURRENT main** `origin/main` @ `6f47f74dc9b515c4c79624b21772223ba02c76cd` · capacité **PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01** = **INTEGRATED ON MAIN** via PR **#540** merge `6f47f74d…` (head `47fcab2b…`) · campagne **NoteLite bounded REAL** = **RÉALISÉE AT TESTED SCOPE** puis **PAUSED** à ce point (correction governed **non relancée** · cycle NoteLite **non finalisé**) · findings bornés : EC→Attempt REAL→Cursor REAL→terminal succeeded→durable Evidence/RB/CE→Product Resolution→Nora post-Evidence→Nora conversationnelle **sans transfer d’IDs Pilote** · **NOT_PROVEN** honesty préservée · gap nominal post-terminal / UI « qualification en cours » + clic « Recharger résultat produit » = **HIGH-CONFIDENCE ARCHITECTURAL CAUSE** (poll UI ≤8 / pas de worker autonome) **≠ PROVEN INSTANCE ROOT CAUSE** · **ADOPTED TARGET** = un modèle Product d’exécution **générique** · **toutes** taxonomies de tâche Product spécialisées (`docs_write`, `code_write`, `read`, `read_only`, …) = **RETIRE FROM PRODUCT MODEL** · capabilities/effects techniques = **enforcement-only possibles** · **interdit** inventer `generic_read` / `generic_write` / `generic_code` comme catégories Product · isolated Git worktree = **KEEP** · Cursor Generalist = **KEEP** · CursorExecutionReport = **CLAIM KEEP** · Generic Execution Review Material = **TARGET** · Native Review End Of = **TARGET** (harvest sémantique · **≠** import transport `.tmp-sfia-review` / `sfia/review-handoff`) · Studio VerifiedChangeSet = **TARGET** · Product Resolution = **KEEP / COMPLETE** · Continuity Projection + Reconciler = **KEEP** (Reconciler = owner progression déterministe) · Nora Deep Review = **TARGET** sur shared cognitive core (**≠** second Nora) · Result Surface = **KEEP / COMPLETE** · Review Material retention HOT→PRUNED = **TARGET** · document architecture = `projects/sfia-studio/convergence/sfia-studio-generic-execution-review-result-architecture.md` (**ADOPTED TARGET BY MORRIS — DOCUMENTARY CANDIDATE PENDING GIT INTEGRATION**) · ancienne hypothèse **5 lots Delivery** = **NOT ADOPTED** · **DELIVERY SLICING = TBD AFTER ARCHITECTURE REVIEW** · future Delivery = **DISTINCT Morris GO** · future REAL / READY FOR REAL = **DISTINCT Morris GO** · **READY FOR REAL = NO** · runtime v3 = **NON ADOPTED** · **≠** code Product modifié ce cycle · **≠** Delivery authorized · **≠** NoteLite finalized · **≠** full E2E REAL proven · **CURRENT REPOSITORY TRUTH = RESOLVE FROM GIT / `origin/main` / PR evidence** · **next** = ChatGPT Critical Review of architecture truth-sync → puis seulement Delivery slicing design |
 | **Timestamp maintenance NATIVE-EXECUTION-LOOP-CONVERGENCE-01 post-merge verification** | 2026-09-26 — **NATIVE EXECUTION LOOP CONVERGENCE — POST-MERGE VERIFICATION / ROADMAP TRUTH-SYNC / CAPITALISATION** · Macro **NATIVE-EXECUTION-LOOP-CONVERGENCE-01** · **SAME MACRO / NO MICRO-CYCLE** · Cycle **15** · Capitalisation / REX · DOC · CRITICAL · Morris GO **POST-MERGE / DOCUMENTARY TRUTH-SYNC / CAPITALISATION** **CONSUMED** (local docs only · **≠** project commit/push/PR) · protected path authorization = Convergence Roadmap + capitalisation asset under `convergence/**` **ONLY** · Build Doctrine / C1 / framing / method / prompts = **READ ONLY** · PR **#527 MERGED** · product head `5a05a2a7082bc140393f18647a56f1ed23cef73c` · merge/main `e486e81f2443bb9837b4bbdc1967cf5d1368f4d9` · pre-merge CI **#614** run `36261815679` **SUCCESS / Required Gate PASS** · post-merge CI **#615** run `36262627727` **SUCCESS / Required Gate PASS** · Product head→merge app parity **ZERO** · capacité **NATIVE EXECUTION LOOP CONVERGENCE** = **INTEGRATED ON MAIN / POST-MERGE VERIFIED** · proof = **DETERMINISTIC / LOCAL + PR/CI INTEGRATION ONLY** · **ZERO NEW REAL** · runtime v3 = **NON ADOPTED** · Product Completion = historical **COMPLETE/CLOSED** (**≠** newly completed by NELC) · remaining governed debts = **D1** optional first-class typed EC input bridge · optional mid-turn repository SHA stamp · future bounded REAL under **distinct Morris GO** · **next activity** = MealFlow semantic reservation campaign (**observation / qualification** · **NOT STARTED / NOT AUTHORIZED** by this documentary sync) · **NEXT MACRO CAPABILITY** = **NOT YET DETERMINED** · future bounded REAL of native loop = **OPEN GOVERNED PROOF OPTION / DISTINCT MORRIS GO** (**≠** auto-selected next capability) · **≠** READY FOR REAL · **≠** Product READY · **≠** runtime v3 ADOPTED · repository truth = **RESOLVE FROM GIT / PR evidence** · capitalisation asset = `projects/sfia-studio/convergence/sfia-studio-native-execution-loop-convergence-01-capitalisation.md` (**LOCAL DOCUMENTARY CANDIDATE** until distinct Git integration GO) |
 | **Timestamp maintenance CYCLE-RESERVATION-PILOTING-01 post-merge verification** | 2026-09-25 — **CYCLE RESERVATION MANAGEMENT & GATE-AWARE PILOTING — POST-MERGE VERIFICATION / ROADMAP TRUTH-SYNC** · Macro **CYCLE-RESERVATION-PILOTING-01** · Cycle **14** · Post-merge · DOC · CRITICAL · Morris GO **POST-MERGE DOCUMENTARY TRUTH-SYNC — ROADMAP PROTECTED PATH ONLY** **CONSUMED** · PR **#518 MERGED** · product head `f0874ec05fec4237a6f39311b90c9233debce5f5` · merge/main `29f1597951bd6e4d779cc728f46396e28b8f5aa0` · PR CI **#595** run `36100845339` **SUCCESS / Required Gate PASS** · post-merge CI **#596** run `36101841229` **SUCCESS / Required Gate PASS** · capacité **CYCLE RESERVATION MANAGEMENT & GATE-AWARE PILOTING** = **INTEGRATED ON MAIN / POST-MERGE VERIFIED** · same-macro construction reserves = **ZERO** at reviewed scope · protected Roadmap truth-sync = local documentary candidate under this cycle until Git integration · Product Completion = historical **COMPLETE/CLOSED** (**≠** newly completed) · Nora Cognitive Completion = **NOT COMPLETE** · global semantic Reservation quality = **NOT PROVEN** · READY FOR REAL global = **NO** · runtime v3 = **NON ADOPTED** · **next** = MealFlow semantic reservation campaign (**observation / qualification** · **NOT STARTED** by this documentary sync · **≠** new macro pre-authorized) · Git / PR evidence remains authoritative · **CURRENT REPOSITORY TRUTH = RESOLVE FROM GIT / `origin/main` / PR evidence** |

```


## DIFF: `projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md`

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
index f6d81c37..98ae9050 100644
--- a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
+++ b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
@@ -139,3 +139,11 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK
 - **OPS1 ops surface:** `/ops1/nouvelle-demande` + `lib/ops1/**` (isolated sqlite; D1 nav still links; product Fake env reuses `OPS1_*` names)
 - **Parallel BC:** `lib/oa/execution-run/**` (memory-only; FinOps/T7 shadow consumer; not product EC→Attempt)
 - **Status:** ACTIVE compatibility / temporary keep — **no SAFE TO REMOVE proven** under SFIA-STUDIO-LEGACY-ARCHITECTURE-DECOMMISSION-01 (see vol 09)
+
+## Generic Execution → Review → Result (CURRENT local candidate)
+
+Nominal target path (architecture D-ER; delivery candidate on branch):
+
+HumanDecision → Generic EC (+ reportRequirements including Cursor Review End Of CLAIM) → Cursor Generalist → isolated worktree → CursorExecutionReport [CLAIM] + Cursor Review End Of [CLAIM] → Studio `observeVerifiedChangeSet` [FACTS] → Generic Execution Review Material → Evidence/RB/CE → Product Resolution (`executionReview`) → Reconciler continue-until-stable → Nora Deep Review (bounded read-only tools, opt-in) → Result Surface.
+
+CURRENT: docs_write specialized persist remains as compatibility bridge with dual-write into Generic Review Material when Cursor report present. Anti-stall: UI continue budget raised above legacy ~8; Reconciler remains owner.

```


## DIFF: `projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md`

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
index cf981abf..be17a9e9 100644
--- a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
+++ b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
@@ -39,3 +39,14 @@
 - DETERMINISTIC PROVEN (seam/unit)
 - REAL BOUNDARY / E2E REAL — require distinct Morris GO; **not claimed**
 - Runtime v3 **NON ADOPTED**; Product global READY **not claimed**
+
+## GENERIC-EXECUTION-REVIEW-RESULT-CONVERGENCE-01
+
+| Proof | Level | Notes |
+| --- | --- | --- |
+| VerifiedChangeSet claim/fact mismatch | DETERMINISTIC AT TESTED SCOPE | `genericExecutionReviewResultConvergence01.d0.test.ts` |
+| Generic Review Material 0-file + durable load | DETERMINISTIC AT TESTED SCOPE | same |
+| Nora execution_review tools Project/Attempt-bound | DETERMINISTIC AT TESTED SCOPE | same |
+| Anti-stall continue budget > legacy 8 | DETERMINISTIC AT TESTED SCOPE | `reconcileContinuePolicy` + TrajectorySurface |
+| Product Continuity shared knowledge non-regression | DETERMINISTIC AT TESTED SCOPE | existing continuity suites |
+| REAL generic / NoteLite replay | NOT PROVEN | ZERO REAL this macro |

```


## DIFF: `projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md`

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
index 0d817466..380739f6 100644
--- a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
+++ b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
@@ -32,6 +32,15 @@
 - Some object cards mark PARTIAL where aggregate naming is distributed across DTOs.
 - REAL OpenAI leaf candidacy parity not re-proven this macro (DETERMINISTIC only).

+## GENERIC-EXECUTION-REVIEW-RESULT-CONVERGENCE-01 (local candidate)
+
+- Generic Product path / Review End Of CLAIM / VerifiedChangeSet / Generic Review Material / Nora bounded review tools / anti-stall continue budget: **IMPLEMENTED locally on delivery branch** at **deterministic tested scope**.
+- docs_write adapters: **TRANSITIONAL bridge retained** (dual-write Review Material).
+- NoteLite REAL replay: **NOT DONE** (PAUSED; distinct Morris GO).
+- Retention GC / Git promotion: **NOT IMPLEMENTED** (compatible only).
+- Full Product-front-door Fake E2E oracle for multi-file claim/fact mismatch through governedExecute→UI: **PARTIAL** — core seams unit/integration proven; front-door expansion reserved.
+- REAL / READY FOR REAL / runtime v3: **NO**.
+
 ## Next macro

 `PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01` **local candidate** on branch `delivery/sfia-studio-product-continuity-shared-knowledge-01`. Capacité suivante après revue: **SprintBoard REAL re-proof bornée** (Gate Morris distinct).

```


## DIFF: `projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json`

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
index 56917ea5..c9d29564 100644
--- a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
+++ b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
@@ -2,7 +2,7 @@
   "schemaVersion": 1,
   "kind": "SFIA_STUDIO_LIVING_PRODUCTION_RUNTIME_REFERENCE",
   "lastReviewedCommit": "6beb8cc369bd9b82eebee97b70309838373b3dfa",
-  "lastReviewedAt": "2026-09-27T18:42:24.911Z",
+  "lastReviewedAt": "2026-09-29T11:38:18.920Z",
   "canonicalReadme": "projects/sfia-studio/production-runtime-reference/README.md",
   "volumes": [
     {
@@ -19,7 +19,7 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md",
-      "sha256_16": "2b33f2c9648004ec"
+      "sha256_16": "0f4de402502d3ded"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md",
@@ -39,11 +39,11 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md",
-      "sha256_16": "8fc11fd081bb37dc"
+      "sha256_16": "b483c7800e0121c1"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md",
-      "sha256_16": "7f9b17310ec84156"
+      "sha256_16": "189d4069b56e4b83"
     }
   ],
   "components": [

```


---

## Instruction ChatGPT obligatoire

Avant de répondre à Morris sur ce rapport, ChatGPT doit consulter le Review Handoff distant canonique :
branche `sfia/review-handoff`
fichier `sfia-review-handoff/latest-chatgpt-review.md`

ChatGPT doit vérifier au minimum :
- cycle / profil / macro ;
- branch / HEAD / base ;
- architecture D-ER consommée ;
- impact analysis ;
- Generic Product path ;
- Report + Review End Of ;
- VerifiedChangeSet ;
- Review Material ;
- Evidence/RB/CE ;
- Product Resolution ;
- Nora Deep Review ;
- Reconciler anti-stall ;
- Result Surface ;
- Fake/Real ;
- deterministic E2E ;
- restart ;
- Living Runtime Reference ;
- Roadmap ;
- fichiers ;
- tests ;
- full suite ;
- typecheck/lint/build ;
- ZERO REAL ;
- réserves ;
- dette/exit ;
- Review Handoff remote ;
- verdict.

Absent / incohérent / synthesis-only :
REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING

Une preuve Git plus récente peut superseder le handoff.
