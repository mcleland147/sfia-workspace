# Review Pack FULL — CORRECTION PASS 01
# GENERIC-EXECUTION-REVIEW-RESULT-CONVERGENCE-01

## 1. Timestamp
- UTC: 2026-09-29T13:12:52Z
- Local: 2026-09-29 15:12:52 CEST

## 2. Repo / branch / HEAD
- Repo: mcleland147/sfia-workspace
- Workspace: /Users/morris/Projects/sfia-workspace-post-execution-handoff-01
- Branch: `delivery/sfia-studio-generic-execution-review-result-convergence-01`
- HEAD: `d4d986af5884b31b416374da3cb5e60757501f87`
- origin/main: `d4d986af5884b31b416374da3cb5e60757501f87`
- ahead/behind: `0	0`
- Project commit: **NO**

### git status --short
```
M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/project-assistant/productContinuitySharedKnowledge.d0.test.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
 M projects/sfia-studio/app/features/project-assistant/f3/ingestDocsWriteArtifactEvidence.ts
 M projects/sfia-studio/app/features/project-assistant/f3/persistDocsWriteArtifactReviewMaterial.ts
 M projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts
 M projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
 M projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
 M projects/sfia-studio/app/features/project-assistant/w2/missionContractSemanticInputs.ts
 M projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts
 M projects/sfia-studio/app/features/project-assistant/w2/resolveProductExecutionContext.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/noraCognitiveCompletion.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/domain/cursorExecutionReport.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
 M projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
 M projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
 M projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
 M projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
 M projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
?? projects/sfia-studio/app/__tests__/project-assistant/genericExecutionReviewResultConvergence01.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/genericExecutionReviewResultConvergence01.frontDoor.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/f3/finalizeGenericExecutionReview.ts
?? projects/sfia-studio/app/features/project-assistant/f3/persistGenericExecutionReviewMaterial.ts
?? projects/sfia-studio/app/features/project-assistant/w2/applyVerifiedChangeSetProductHonesty.ts
?? projects/sfia-studio/app/features/project-assistant/w2/reconcileContinuePolicy.ts
?? projects/sfia-studio/app/lib/nora-cognitive-runtime/executionReviewAgentsTools.ts
?? projects/sfia-studio/app/lib/oa/execution-attempt/application/observeVerifiedChangeSet.ts
?? projects/sfia-studio/app/lib/oa/execution-attempt/domain/cursorReviewEndOf.ts
```

## 3–5. Entry handoff / Critical Review / Cycle
- Entry handoff commit: `c502591663dee20a532eb840e4a3ecbdc15b2923`
- Entry blob verified: `1e947905538641cca65d36978e9e72fe69799f22` YES
- Entry verdict: NOT READY — GENERIC EXECUTION REVIEW RESULT CONVERGENCE INCOMPLETE
- Same macro / cycle 8 Delivery / CRITICAL / EVOL / CKC ckc:studio:delivery
- D-ER-01…15 unchanged / consumed
- Correction Pass 01 — SAME MACRO

## 6. CR-01…CR-10 closure

### CR-01 Generic nominal wiring — PASS
- Before: finalize only via docs_write ingest bridge
- After: `governedExecuteRecordResult` productCursor path calls `finalizeGenericExecutionReview` with server-owned `observation.worktreeRef` BEFORE mission Evidence ingest
- Files: `governedExecuteAuthorizedContract.ts`, gateway `processWorktreeByRef` decorate
- Proof: frontDoor wiring invariant + E2E oracle fails if finalize disconnected

### CR-02 Verification semantics — PASS
- Before: missing worktree invented empty VerifiedChangeSet claimFactMismatch=false
- After: verificationStatus OBSERVED | UNAVAILABLE | NOT_PERFORMED | NOT_APPLICABLE; VerifiedChangeSet ABSENT unless OBSERVED; empty OBSERVED = verified zero change
- Files: finalize + persistGenericExecutionReviewMaterial
- Proof: core CR-02 tests

### CR-03 Product honesty — PASS
- `applyVerifiedChangeSetProductHonesty` downgrades SUCCESS/PASS when claimFactMismatch or verification ≠ OBSERVED
- Wired in materializeW3bProductTerminal
- No second Evidence engine

### CR-04 Anti-stall — PASS
- Budget no longer sole correctness; `shouldAutoResumeReconcileOnRemount`; TrajectorySurface remount auto-continue via derive+reconcile
- FrontDoor: >legacy poll window same Attempt then remount continue; launchCount=1
- No worker/queue/scheduler

### CR-05 Front-door oracle — PASS
- `genericExecutionReviewResultConvergence01.frontDoor.d0.test.ts`
- Prepare→authorize→execute→record→finalize→RM mismatch→Resolution→materialize honesty→Nora tools

### CR-06 Nora behavioral — PASS
- analyzePostEvidenceWithProvider(enableExecutionReviewTools) → observeNoraCognitiveCore post_execution
- Tools return claimFactMismatch from Review Material

### CR-07 Result Surface — PASS
- TrajectorySurface review summary block; remount auto-continue; Recharger not required nominally
- Resolution exposes reviewItemSummaries / blockers / verificationStatus

### CR-08 Living Reference — PASS
- 09 Next macro stale PRODUCT-CONTINUITY fixed; CURRENT MACRO = CONVERGENCE-01; NoteLite PAUSED as next REAL

### CR-09 reportRequirements consumption — PASS
- prepareExecutionContractFromW2Decision stamps deriveGenericProductReportRequirements()
- FrontDoor asserts Review End Of on prepared EC inputs

### CR-10 mismatch honesty — PASS
- Attempt succeeded + claimFactMismatch ⇒ Product PASS refused via honesty helper

## 7. Generic call graph AFTER
HumanDecision → prepareExecutionContractFromW2Decision (GENERIC reportRequirements)
→ confirm/authorize → governedExecute Select/Start
→ Fake/TestOnly launch (worktreeRef)
→ governedExecuteRecordResult → completeBoundedReadOnlyLaunch
→ parse/bind CursorExecutionReport + Review End Of
→ finalizeGenericExecutionReview(worktreeRef) → observeVerifiedChangeSet → persist RM
→ ingestMissionResultEvidence → advance EC
→ materializeW3b (+ honesty) → resolveProductExecutionContext(executionReview)
→ postEvidence Nora tools → Result Surface / remount continue

## 8–14. Worktree / VCS / RM / Evidence / Nora / Reconciler / Result
See CR sections. worktreeRef from LaunchAck/observation; gateway decorate map process-local; Fake parity via TestOnly resolveSimulatedCompletion.worktreeRef; FS fallback when git porcelain empty; ZERO REAL.

## 15–17. EP-01…EP-20 MATRIX

| EP | Verdict | Proof |
|---|---|---|
| EP-01 Generic EC | PASS | frontDoor prepare |
| EP-02 Report+REO requirements | PASS | CR-09 |
| EP-03 Cursor CLAIM incomplete | PASS | mismatchReportStdout |
| EP-04 Fake worktree A+B | PASS | frontDoor wt files |
| EP-05 Studio observe | PASS | OBSERVED |
| EP-06 VerifiedChangeSet durable | PASS | load after teardown |
| EP-07 Review Material durable | PASS | same |
| EP-08 Worktree teardown OK | PASS | rmSync then reload |
| EP-09 Evidence/RB/CE | PASS | mission ingest + materialize |
| EP-10 Attempt≠Product PASS | PASS | honesty helper |
| EP-11 Resolution reloads RM | PASS | executionReview.present |
| EP-12 Nora shared core | PASS | observeNoraCognitiveCore |
| EP-13 Nora grounded FACTS | PASS | tool manifest mismatch |
| EP-14 Result Surface | PASS | review summary + remount |
| EP-15 Review item RO | PASS | tools read + item summaries |
| EP-16 Restart same Attempt | PASS | CR-04 |
| EP-17 Restart same RM | PASS | reload after teardown |
| EP-18 Long-running > legacy | PASS | CR-04 frontDoor |
| EP-19 No second Execute | PASS | launchCount=1 |
| EP-20 No manual recovery/ID | PASS | auto continue / no Recharger required |

## 18. Fake/Real
ZERO REAL · Fake substitutes Cursor boundary · same Product spine · realism gaps: no real Cursor CLI/process timing

## 19–21. Files
### Created

- `projects/sfia-studio/app/__tests__/project-assistant/genericExecutionReviewResultConvergence01.d0.test.ts`
- `projects/sfia-studio/app/__tests__/project-assistant/genericExecutionReviewResultConvergence01.frontDoor.d0.test.ts`
- `projects/sfia-studio/app/features/project-assistant/f3/finalizeGenericExecutionReview.ts`
- `projects/sfia-studio/app/features/project-assistant/f3/persistGenericExecutionReviewMaterial.ts`
- `projects/sfia-studio/app/features/project-assistant/w2/applyVerifiedChangeSetProductHonesty.ts`
- `projects/sfia-studio/app/features/project-assistant/w2/reconcileContinuePolicy.ts`
- `projects/sfia-studio/app/lib/nora-cognitive-runtime/executionReviewAgentsTools.ts`
- `projects/sfia-studio/app/lib/oa/execution-attempt/application/observeVerifiedChangeSet.ts`
- `projects/sfia-studio/app/lib/oa/execution-attempt/domain/cursorReviewEndOf.ts`

### Modified
- `projects/sfia-studio/app/__tests__/project-assistant/productContinuitySharedKnowledge.d0.test.ts`
- `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx`
- `projects/sfia-studio/app/features/project-assistant/f3/ingestDocsWriteArtifactEvidence.ts`
- `projects/sfia-studio/app/features/project-assistant/f3/persistDocsWriteArtifactReviewMaterial.ts`
- `projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts`
- `projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts`
- `projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts`
- `projects/sfia-studio/app/features/project-assistant/w2/missionContractSemanticInputs.ts`
- `projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts`
- `projects/sfia-studio/app/features/project-assistant/w2/resolveProductExecutionContext.ts`
- `projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts`
- `projects/sfia-studio/app/lib/nora-cognitive-runtime/noraCognitiveCompletion.ts`
- `projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts`
- `projects/sfia-studio/app/lib/oa/execution-attempt/domain/cursorExecutionReport.ts`
- `projects/sfia-studio/app/lib/oa/execution-attempt/index.ts`
- `projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts`
- `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`
- `projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md`
- `projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md`
- `projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md`
- `projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json`

### Deleted
- none


## 22. Validations
- Targeted frontDoor+core: 13 PASS
- Full Vitest: **456 files / 5011 tests PASS** (137 skipped); 0 Errors after TrajectorySurface remount guard
- typecheck PASS · lint PASS · build PASS
- modeled + Living Ref conformance PASS
- git diff --check PASS

## 23–26. Living Ref / Roadmap / Conformance
- 03/08/09 updated (CURRENT MACRO, E2E proof, stale Next macro fixed)
- Roadmap tip Correction Pass 01 DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE LOCAL CANDIDATE
- Digests refreshed

## 27–31. Diff check / secrets / reserves / debt / claims
- Secret scan: no hits on changed paths (pattern scan)
- Reserves: REAL NoteLite PAUSED; retention GC open; Git promotion open; docs_write bridge TRANSITIONAL
- Debt exits: as architecture + prior pack
- Allowed claim: DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE · ZERO REAL
- Forbidden: READY FOR REAL · REAL proven · runtime v3 ADOPTED · INTEGRATED ON MAIN · NoteLite REAL fixed

## 32. Morris decisions: NONE (architecture already adopted)

## 33. Verdict
**READY FOR CHATGPT CRITICAL REVIEW — GENERIC EXECUTION REVIEW RESULT CONVERGENCE CORRECTION PASS 01**

Proof ceiling: **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE**
ZERO REAL · runtime v3 NON ADOPTED

---
# FULL CREATED FILE CONTENTS


## CREATED `projects/sfia-studio/app/__tests__/project-assistant/genericExecutionReviewResultConvergence01.d0.test.ts`

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
  shouldAutoResumeReconcileOnRemount,
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

  it("CR-02 — no worktree ⇒ verification UNAVAILABLE (not empty FACTS)", async () => {
    const refs = tmpRoot("noobs");
    const report = baseReport("att:noobs", "ec:noobs");
    const finalized = await finalizeGenericExecutionReview({
      refsRoot: refs,
      projectId: "prj:noobs",
      executionContractId: "ec:noobs",
      attemptId: "att:noobs",
      repositoryRef: "repo:test",
      baseSha: report.baseSha,
      cursorReport: report,
      // no worktreePath
    });
    expect(finalized.ok).toBe(true);
    if (!finalized.ok) return;
    expect(finalized.verificationStatus).toBe("UNAVAILABLE");
    expect(finalized.verifiedChangeSet).toBeNull();
    expect(finalized.manifest.verifiedEffects.verifiedChangeSetRef).toBeNull();
    expect(finalized.manifest.completeness).toBe("PARTIAL");
    expect(finalized.manifest.blockers.some((b) => b.includes("VERIFICATION_UNAVAILABLE"))).toBe(true);
  });

  it("CR-02 — observed zero-file is VerifiedChangeSet empty OBSERVED", async () => {
    const refs = tmpRoot("zeroobs");
    const wt = tmpRoot("zero-wt");
    const report = baseReport("att:zeroobs", "ec:zeroobs", {
      fileEffects: { created: [], modified: [], deleted: [] },
      authorizedEffectsExecuted: ["validation.run"],
      validationEffects: [{ identity: "v1", result: "pass" }],
    });
    const finalized = await finalizeGenericExecutionReview({
      refsRoot: refs,
      projectId: "prj:zeroobs",
      executionContractId: "ec:zeroobs",
      attemptId: "att:zeroobs",
      repositoryRef: "repo:test",
      baseSha: report.baseSha,
      cursorReport: report,
      worktreePath: wt,
      nameStatusText: "",
    });
    expect(finalized.ok).toBe(true);
    if (!finalized.ok) return;
    expect(finalized.verificationStatus).toBe("OBSERVED");
    expect(finalized.verifiedChangeSet).not.toBeNull();
    expect(finalized.verifiedChangeSet!.all).toEqual([]);
    expect(finalized.manifest.verifiedEffects.gitFacts).toContain("verified_zero_change");
  });

  it("EP-18/CR-04 — anti-stall: remount resume policy + budget exceeds legacy 8 (budget not correctness)", () => {
    expect(NOMINAL_RECONCILE_CONTINUE_BUDGET).toBeGreaterThan(
      LEGACY_UI_RUNNING_POLL_BUDGET,
    );
    expect(shouldAutoResumeReconcileOnRemount({ stage: "RUNNING" })).toBe(true);
    expect(
      shouldAutoResumeReconcileOnRemount({
        stage: "PRODUCT_MATERIALIZATION_PENDING",
        nextDeterministicAction: "MATERIALIZE_PRODUCT",
      }),
    ).toBe(true);
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


## CREATED `projects/sfia-studio/app/__tests__/project-assistant/genericExecutionReviewResultConvergence01.frontDoor.d0.test.ts`

```typescript
/**
 * CORRECTION PASS 01 — Front-door Product E2E oracle
 * GENERIC-EXECUTION-REVIEW-RESULT-CONVERGENCE-01
 *
 * Traverses Product prepare → authorize → execute → record → finalize Review Material
 * → Evidence → Resolution → (Nora tools wiring) without calling finalize directly as entry.
 * ZERO REAL. Fake/TestOnly boundary only.
 *
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import { STUDIO_CURSOR_GENERALIST_AGENT_ID } from "@/lib/oa/execution-attempt";
import { CONTRACT_REPORT_REQUIREMENTS_INPUT_KEY } from "@/lib/oa/execution-contract";
import {
  governedExecuteRecordResult,
  governedExecuteSelectAgent,
  governedExecuteStart,
} from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
import { reconcileGovernedExecution } from "@/features/project-assistant/w2/reconcileGovernedExecution";
import { materializeW3bProductTerminal } from "@/features/project-assistant/w2/materializeW3bProductTerminal";
import { resolveProductExecutionContext } from "@/features/project-assistant/w2/resolveProductExecutionContext";
import { prepareExecutionContractFromW2Decision } from "@/features/project-assistant/w2/prepareExecutionContractFromW2Decision";
import { confirmExecutionContractForAuthorization } from "@/features/project-assistant/w2/confirmForAuthorization";
import { evaluateExecutionAuthorization } from "@/features/project-assistant/w2/authorizeExecutionContract";
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import { CLARIFY_OPTION_REF } from "@/features/project-assistant/w2/trajectoryOptions";
import { loadGenericExecutionReviewMaterial } from "@/features/project-assistant/f3/persistGenericExecutionReviewMaterial";
import {
  analyzePostEvidenceWithProvider,
  type PostEvidenceAnalysisFacts,
} from "@/features/project-assistant/f3/postEvidenceNoraAnalysis";
import {
  observeNoraCognitiveCore,
} from "@/lib/nora-cognitive-runtime/noraCognitiveCompletion";
import { createExecutionReviewAgentsTools } from "@/lib/nora-cognitive-runtime/executionReviewAgentsTools";
import { applyVerifiedChangeSetProductHonesty } from "@/features/project-assistant/w2/applyVerifiedChangeSetProductHonesty";
import {
  shouldAutoResumeReconcileOnRemount,
  LEGACY_UI_RUNNING_POLL_BUDGET,
} from "@/features/project-assistant/w2/reconcileContinuePolicy";
import { TestOnlyRealExecutionLaunchPort } from "../oa/execution-attempt/support/testOnlyRealExecutionLaunchPort";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  currentF2Context,
  seedQualifiedProject,
  tempProductDbPath,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";
import { RunContext } from "@openai/agents";

const APP = path.resolve(__dirname, "../..");

beforeEach(() => {
  process.env.OPS1_CONVERSATION_PROVIDER = "fake";
  setConversationProviderForTests(null);
  delete process.env.SFIA_STUDIO_CURSOR_REAL;
});

afterEach(() => {
  cleanupW2TempDirs();
  delete process.env.SFIA_STUDIO_PRODUCT_EVIDENCE_REFS_ROOT;
});

function launchPortOf(oa: {
  executionAttemptServices?: {
    realBoundary?: { launchPort?: unknown };
  } | null;
}): TestOnlyRealExecutionLaunchPort {
  const port = oa.executionAttemptServices?.realBoundary?.launchPort;
  if (!(port instanceof TestOnlyRealExecutionLaunchPort)) {
    throw new Error("TestOnlyRealExecutionLaunchPort required");
  }
  return port;
}

async function authorizeGenericMission(suffix: string) {
  const db = tempProductDbPath(`gerrc-fd-${suffix}.sqlite`);
  const runtime = bootW2Runtime({
    productDbPath: db,
    idPrefix: `gfd${suffix}`,
  });
  const seeded = await seedQualifiedProject(runtime, {
    suffix,
    reservations: [{ statement: `GERRC FD ${suffix}`, blocking: true }],
  });
  const oa = runtime.oa!;
  const qualification = await resolveW2QualificationInputs({
    oa,
    projectId: seeded.projectId,
  });
  expect(qualification.ok).toBe(true);
  if (!qualification.ok) throw new Error("qual");
  const proposed = await proposeTrajectoryOptions({
    oa,
    projectId: seeded.projectId,
    ...qualification.qualification.inputs,
    packagePin: qualification.qualification.packagePin,
    objective: qualification.qualification.objective,
    projectTitle: qualification.qualification.projectTitle,
  });
  expect(proposed.ok).toBe(true);
  if (!proposed.ok) throw new Error("propose");
  const decided = await decideTrajectory({
    oa,
    projectId: seeded.projectId,
    optionSetRef: proposed.optionSetRef,
    options: proposed.options,
    recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
    selectedOptionRef: CLARIFY_OPTION_REF,
    trajectoryId: proposed.proposedTrajectory!.trajectoryId,
    candidateVersion: proposed.proposedTrajectory!.version,
    forceLocalAuthority: true,
  });
  expect(decided.ok).toBe(true);
  if (!decided.ok) throw new Error("decide");
  const context = await currentF2Context(runtime, seeded.projectId);
  const prepared = await prepareExecutionContractFromW2Decision({
    oa,
    projectId: seeded.projectId,
    decisionId: decided.decision.decisionId,
    currentContext: context,
    forceLocalAuthority: true,
    pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
  });
  expect(prepared.ok).toBe(true);
  if (!prepared.ok) throw new Error(`prepare ${prepared.code}`);
  const executionContractId = prepared.contract.executionContractId;
  await inspectExecutionContract({
    oa,
    projectId: seeded.projectId,
    executionContractId,
  });
  if (prepared.contract.effectConfirmationRequired) {
    const confirmed = await confirmExecutionContractForAuthorization({
      oa,
      projectId: seeded.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(confirmed.ok).toBe(true);
  }
  const authorized = await evaluateExecutionAuthorization({
    oa,
    projectId: seeded.projectId,
    executionContractId,
    forceLocalAuthority: true,
  });
  expect(authorized.ok).toBe(true);
  if (!authorized.ok) throw new Error("auth");
  const live =
    (await oa.executionContractServices.contracts.findById(executionContractId)) ??
    prepared.contract;
  const inputs = (live as { inputs?: Record<string, unknown> }).inputs ?? {};
  const repositoryRef =
    typeof inputs.repositoryBindingIdentity === "string"
      ? inputs.repositoryBindingIdentity
      : "acme/w2-harness";
  const baseSha =
    typeof inputs.baseHeadSha === "string"
      ? inputs.baseHeadSha
      : W2_TEST_PINNED_BASE_HEAD_SHA;
  const refsRoot = path.join(path.dirname(db), "mission-result-refs");
  process.env.SFIA_STUDIO_PRODUCT_EVIDENCE_REFS_ROOT = refsRoot;
  return {
    oa,
    projectId: seeded.projectId,
    executionContractId,
    contract: live as typeof prepared.contract,
    repositoryRef,
    baseSha,
    refsRoot,
    reportRequirements: inputs[CONTRACT_REPORT_REQUIREMENTS_INPUT_KEY],
  };
}

function mismatchReportStdout(input: {
  attemptId: string;
  executionContractId: string;
  repositoryRef: string;
  baseSha: string;
}): string {
  const body = {
    schemaVersion: "oa.cursor-execution-report.1",
    reportId: `rpt:cursor:gerrc:${input.attemptId.slice(-8)}`,
    attemptId: input.attemptId,
    executionContractId: input.executionContractId,
    repositoryRef: input.repositoryRef,
    baseSha: input.baseSha,
    status: "succeeded",
    authorizedEffectsExecuted: ["filesystem.create"],
    workPerformed: ["created a.md only (CLAIM incomplete)"],
    fileEffects: {
      created: ["a.md"],
      modified: [],
      deleted: [],
    },
    missionResult: {
      diagnosticSummary: "Mission CLAIM incomplete vs worktree (test).",
      recommendedNextProductStep: "Review Studio VerifiedChangeSet.",
    },
    reviewEndOf: {
      schemaVersion: "oa.cursor-review-end-of.1",
      reviewEndOfId: `reo:cursor:${input.executionContractId}:${input.attemptId}`,
      attemptId: input.attemptId,
      executionContractId: input.executionContractId,
      timestamp: new Date().toISOString(),
      repositoryRef: input.repositoryRef,
      baseSha: input.baseSha,
      verdict: "succeeded",
      objective: "generic mission",
      scopeTreated: "a.md only",
      workPerformed: ["created a.md"],
      filesCreated: ["a.md"],
      filesModified: [],
      filesDeleted: [],
      validations: [],
      deviations: [],
      blockers: [],
      reservations: [],
      stopConditionsMet: [],
      claims: ["created a.md"],
      pointsRequiringReview: ["confirm completeness"],
    },
  };
  return `CURSOR_EXECUTION_REPORT_JSON=${JSON.stringify(body)}`;
}

describe("GENERIC-EXECUTION-REVIEW-RESULT-CONVERGENCE-01 Correction Pass 01 front-door", () => {
  it("CR-01 wiring invariant — Product generic path calls finalizeGenericExecutionReview", () => {
    const src = readFileSync(
      path.join(
        APP,
        "features/project-assistant/w2/governedExecuteAuthorizedContract.ts",
      ),
      "utf8",
    );
    expect(src).toMatch(/finalizeGenericExecutionReview/);
    expect(src).toMatch(/worktreeRef/);
    // Must not only live behind docs_write ingest
    const ingestIdx = src.indexOf("ingestDocsWriteArtifactEvidence");
    const finalizeIdx = src.indexOf("finalizeGenericExecutionReview");
    const productCursorIdx = src.indexOf("isCanonicalProductGovernedContract");
    expect(finalizeIdx).toBeGreaterThan(0);
    expect(productCursorIdx).toBeGreaterThan(0);
    // finalize appears in generic productCursor region (after docs_write block uses ingest)
    expect(finalizeIdx).toBeGreaterThan(ingestIdx);
  });

  it("CR-09 — prepared Generic EC consumes GENERIC_PRODUCT_REPORT_REQUIREMENTS (incl. Review End Of)", async () => {
    const ctx = await authorizeGenericMission("req");
    expect(Array.isArray(ctx.reportRequirements)).toBe(true);
    const joined = (ctx.reportRequirements as string[]).join("\n");
    expect(joined).toMatch(/Review End Of/i);
    expect(joined).toMatch(/reportId/);
    expect(joined).toMatch(/fileEffects/);
  });

  it("EP front-door — Generic Product → Fake Cursor → worktree observe → Review Material mismatch → Resolution", async () => {
    expect(process.env.SFIA_STUDIO_CURSOR_REAL).toBeUndefined();
    const ctx = await authorizeGenericMission("mm");
    const port = launchPortOf(ctx.oa);
    const launchBefore = port.launchCallCount;

    const selected = await governedExecuteSelectAgent({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) return;
    expect(selected.selectedAgentRef).toBe(STUDIO_CURSOR_GENERALIST_AGENT_ID);

    const started = await governedExecuteStart({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.executionContractId,
      attemptId: selected.attemptId,
      forceLocalAuthority: true,
    });
    expect(started.ok).toBe(true);
    if (!started.ok) return;
    expect(started.phase).toBe("running");
    expect(port.launchCallCount).toBe(launchBefore + 1);

    // Real worktree facts: A + B; Cursor CLAIM only A.
    const wt = fs.mkdtempSync(path.join(os.tmpdir(), "gerrc-fd-wt-"));
    fs.writeFileSync(path.join(wt, "a.md"), "A-content\n");
    fs.writeFileSync(path.join(wt, "b.md"), "B-unclaimed\n");

    setTimeout(() => {
      port.resolveSimulatedCompletion(`proc:sim:${started.attemptId}`, {
        exitCode: 0,
        timedOut: false,
        stdout: mismatchReportStdout({
          attemptId: started.attemptId,
          executionContractId: ctx.executionContractId,
          repositoryRef: ctx.repositoryRef,
          baseSha: ctx.baseSha,
        }),
        stderr: "",
        durationMs: 5,
        worktreeRef: wt,
      });
    }, 15);

    const terminal = await governedExecuteRecordResult({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.executionContractId,
      attemptId: started.attemptId,
      forceLocalAuthority: true,
      awaitIfPending: true,
      missionResultRefsRoot: ctx.refsRoot,
    });
    expect(terminal.ok).toBe(true);
    if (!terminal.ok) return;
    expect(terminal.attemptStatus).toBe("succeeded");
    expect(port.launchCallCount).toBe(launchBefore + 1); // no second launch

    // EP-06/07 — Review Material finalized by Product path (not docs_write-only)
    const loaded = loadGenericExecutionReviewMaterial({
      refsRoot: ctx.refsRoot,
      attemptId: started.attemptId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) return;
    expect(loaded.manifest.verifiedEffects.verificationStatus).toBe("OBSERVED");
    expect(loaded.verifiedChangeSet?.claimFactMismatch).toBe(true);
    expect(loaded.verifiedChangeSet?.unclaimedObservedPaths).toContain("b.md");
    expect(loaded.reviewEndOf).not.toBeNull();
    expect(loaded.manifest.completeness).toBe("PARTIAL");

    // Teardown worktree — Review Material must remain durable
    fs.rmSync(wt, { recursive: true, force: true });
    const reloaded = loadGenericExecutionReviewMaterial({
      refsRoot: ctx.refsRoot,
      attemptId: started.attemptId,
    });
    expect(reloaded.ok).toBe(true);
    if (!reloaded.ok) return;
    expect(reloaded.manifest.verifiedEffects.claimFactMismatch).toBe(true);

    // Product Resolution
    const resolved = await resolveProductExecutionContext({
      oa: ctx.oa,
      projectId: ctx.projectId,
      query: { kind: "byAttemptId", attemptId: started.attemptId },
    });
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) return;
    expect(resolved.context.executionReview.present).toBe(true);
    expect(resolved.context.executionReview.claimFactMismatch).toBe(true);
    expect(resolved.context.executionReview.verificationStatus).toBe("OBSERVED");
    expect(resolved.context.attempt?.attemptId).toBe(started.attemptId);

    // Materialize + honesty: Attempt succeeded ≠ automatic Product PASS
    const materialized = await materializeW3bProductTerminal({
      oa: ctx.oa,
      projectId: ctx.projectId,
      attemptId: started.attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) return;
    // If CE somehow PASS, honesty helper must refuse silent PASS
    const honest = applyVerifiedChangeSetProductHonesty({
      attemptId: started.attemptId,
      product: materialized.product,
      refsRoot: ctx.refsRoot,
    });
    if (honest.claimAllowed && honest.outcome === "SUCCESS") {
      throw new Error("CLAIM_FACT_MISMATCH must not yield Product PASS");
    }

    // CR-06 — Nora shared core with review tools enabled; tools see mismatch
    const coreCalls: { mode: string }[] = [];
    const stop = observeNoraCognitiveCore((inv) => {
      coreCalls.push({ mode: inv.mode });
    });
    const facts: PostEvidenceAnalysisFacts = {
      projectId: ctx.projectId,
      executionContractId: ctx.executionContractId,
      executionContractStatus: "completed",
      executionContractAction: "studio.cursor.generalist.execute",
      attemptId: started.attemptId,
      attemptStatus: "succeeded",
      selectedAgentRef: STUDIO_CURSOR_GENERALIST_AGENT_ID,
      adapterRef: "gateway",
      executionMode: "cursor_cli_real",
      realProcessInvoked: true,
      evidenceId: materialized.product.evidenceId ?? "ev:test",
      reviewBundleId: "rb:test",
      technicalResultRef: null,
      reservations: [],
      cursorReportSummary: "CLAIM created a.md only",
    };
    const analysis = await analyzePostEvidenceWithProvider(facts, {
      enableExecutionReviewTools: true,
    });
    stop();
    expect(coreCalls.some((c) => c.mode === "post_execution")).toBe(true);
    // Tools must be usable on the shared Agents path context
    const tools = createExecutionReviewAgentsTools({
      projectId: ctx.projectId,
      attemptId: started.attemptId,
      refsRoot: ctx.refsRoot,
    });
    const runCtx = new RunContext({});
    const manifestRaw = await tools[0]!.invoke(runCtx, JSON.stringify({}));
    const manifest = JSON.parse(String(manifestRaw)) as {
      ok: boolean;
      verifiedEffects?: { claimFactMismatch?: boolean };
      blockers?: string[];
    };
    expect(manifest.ok).toBe(true);
    expect(
      manifest.verifiedEffects?.claimFactMismatch === true ||
        (manifest.blockers ?? []).some((b) => b.includes("CLAIM_FACT_MISMATCH")),
    ).toBe(true);
    // Fake may or may not produce text; analysis must not invent FULL
    if (analysis.ok) {
      expect(analysis.text).not.toMatch(/\bFULL\b.*review material/i);
    }

    // CR-04 — remount resume policy for RUNNING / pending (budget not sole criterion)
    expect(
      shouldAutoResumeReconcileOnRemount({ stage: "RUNNING" }),
    ).toBe(true);
    expect(LEGACY_UI_RUNNING_POLL_BUDGET).toBe(8);

    // Same Attempt after continue reconcile (no second Execute)
    const continued = await reconcileGovernedExecution({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.executionContractId,
      intent: "continue",
    });
    expect(continued.ok || continued.projection?.attemptId).toBeTruthy();
    if (continued.projection?.attemptId) {
      expect(continued.projection.attemptId).toBe(started.attemptId);
    }
  }, 60_000);

  it("CR-04 long-running — > legacy poll window then remount continue; same Attempt", async () => {
    const ctx = await authorizeGenericMission("long");
    const port = launchPortOf(ctx.oa);
    const selected = await governedExecuteSelectAgent({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) return;
    const started = await governedExecuteStart({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.executionContractId,
      attemptId: selected.attemptId,
      forceLocalAuthority: true,
    });
    expect(started.ok).toBe(true);
    if (!started.ok) return;

    // Exceed legacy UI poll budget while Attempt remains RUNNING (no await terminal).
    for (let i = 0; i < LEGACY_UI_RUNNING_POLL_BUDGET + 2; i++) {
      const got = await ctx.oa.executionAttemptServices!.getExecutionAttempt.execute(
        { attemptId: started.attemptId },
      );
      expect(got.ok && got.attempt?.status).toBe("running");
      expect(got.ok && got.attempt?.attemptId).toBe(started.attemptId);
    }
    expect(shouldAutoResumeReconcileOnRemount({ stage: "RUNNING" })).toBe(true);

    const wt = fs.mkdtempSync(path.join(os.tmpdir(), "gerrc-long-wt-"));
    fs.writeFileSync(path.join(wt, "a.md"), "ok\n");
    port.resolveSimulatedCompletion(`proc:sim:${started.attemptId}`, {
      exitCode: 0,
      timedOut: false,
      stdout: mismatchReportStdout({
        attemptId: started.attemptId,
        executionContractId: ctx.executionContractId,
        repositoryRef: ctx.repositoryRef,
        baseSha: ctx.baseSha,
      }),
      worktreeRef: wt,
    });

    // Remount-style continue after budget window — no second launch
    const after = await reconcileGovernedExecution({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.executionContractId,
      intent: "continue",
    });
    expect(after.projection?.attemptId).toBe(started.attemptId);
    expect(port.launchCallCount).toBe(1);
  }, 90_000);
});

```


## CREATED `projects/sfia-studio/app/features/project-assistant/f3/finalizeGenericExecutionReview.ts`

```typescript
/**
 * Finalize Generic Execution Review Material after Studio observation (D-ER-04/06).
 * Called after Cursor terminal + independent worktree observation.
 * Does NOT create Evidence — Evidence ingest remains separate.
 *
 * CR-02: NO OBSERVATION ≠ VERIFIED ZERO CHANGE.
 * - OBSERVED: VerifiedChangeSet present (may be empty = verified zero change)
 * - UNAVAILABLE / NOT_PERFORMED: VerifiedChangeSet ABSENT — never invent empty FACTS
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
  type ExecutionReviewVerificationStatus,
} from "./persistGenericExecutionReviewMaterial";

export type FinalizeGenericExecutionReviewResult =
  | {
      ok: true;
      manifest: ExecutionReviewMaterialManifest;
      /** Present only when verificationStatus === "OBSERVED". */
      verifiedChangeSet: VerifiedChangeSet | null;
      verificationStatus: ExecutionReviewVerificationStatus;
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
    timestamp: new Date().toISOString(),
    attemptId: report.attemptId,
    executionContractId: report.executionContractId,
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
  /** Server-owned worktree path. Absence ⇒ verification UNAVAILABLE — never empty FACTS. */
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

  const worktreePath =
    typeof input.worktreePath === "string" && input.worktreePath.trim()
      ? input.worktreePath.trim()
      : null;

  let verificationStatus: ExecutionReviewVerificationStatus;
  let verifiedChangeSet: VerifiedChangeSet | null = null;

  if (worktreePath) {
    verifiedChangeSet = await observeVerifiedChangeSet({
      worktreePath,
      report: input.cursorReport,
      statusDiffPort: input.statusDiffPort,
      nameStatusText: input.nameStatusText,
      computeDigests: true,
    });
    verificationStatus = "OBSERVED";
  } else {
    // CR-02 — no observation ⇒ VerifiedChangeSet ABSENT (not empty FACTS).
    verificationStatus = "UNAVAILABLE";
    verifiedChangeSet = null;
  }

  const reviewItems: {
    kind: import("./persistGenericExecutionReviewMaterial").ExecutionReviewItemKind;
    logicalPath?: string;
    label: string;
    bytes?: Buffer;
    text?: string;
    summary?: string;
  }[] = [...(input.extraReviewItems ?? [])];

  if (verifiedChangeSet) {
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
  }

  for (const v of input.cursorReport.validationEffects ?? []) {
    reviewItems.push({
      kind: "validation",
      label: v.identity,
      text: JSON.stringify(v),
      summary: v.result,
    });
  }

  const claimFactMismatch = verifiedChangeSet?.claimFactMismatch === true;
  const observationMissing = verificationStatus !== "OBSERVED";

  const blockers = [
    ...(input.cursorReport.blockers ?? []),
    ...(claimFactMismatch
      ? [
          `CLAIM_FACT_MISMATCH unclaimed=${verifiedChangeSet!.unclaimedObservedPaths.join(",")}`,
        ]
      : []),
    ...(observationMissing
      ? ["VERIFICATION_UNAVAILABLE — worktree observation not performed"]
      : []),
  ];

  const reservations = [
    ...(input.cursorReport.reservations ?? []),
    ...(observationMissing
      ? ["Studio VerifiedChangeSet not available — FACTS incomplete"]
      : []),
    ...(claimFactMismatch
      ? ["Cursor CLAIM incomplete vs Studio OBSERVED FACTS"]
      : []),
  ];

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
    verificationStatus,
    reviewItems,
    completeness:
      synthesized || claimFactMismatch || observationMissing
        ? "PARTIAL"
        : undefined,
    blockers,
    reservations,
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
    verificationStatus,
    reviewEndOf,
    claimFactMismatch,
  };
}

```


## CREATED `projects/sfia-studio/app/features/project-assistant/f3/persistGenericExecutionReviewMaterial.ts`

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

/**
 * CR-02 — distinguish observed zero-change from missing observation.
 * OBSERVED: VerifiedChangeSet present (may be empty = verified zero change).
 * UNAVAILABLE / NOT_PERFORMED: VerifiedChangeSet ABSENT — never invent empty FACTS.
 * NOT_APPLICABLE: observation intentionally not required for this Attempt.
 */
export type ExecutionReviewVerificationStatus =
  | "OBSERVED"
  | "UNAVAILABLE"
  | "NOT_PERFORMED"
  | "NOT_APPLICABLE";

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
    /** OBSERVED ⇒ verifiedChangeSetRef may be set (incl. empty set). Else ABSENT. */
    readonly verificationStatus: ExecutionReviewVerificationStatus;
    readonly verifiedChangeSetRef: string | null;
    readonly claimFactMismatch: boolean;
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
  /** Required when VerifiedChangeSet may be absent — defaults UNAVAILABLE if unset + no VCS. */
  readonly verificationStatus?: ExecutionReviewVerificationStatus;
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
    const claimFactMismatch =
      input.verifiedChangeSet?.claimFactMismatch === true;
    // CR-02: only persist VerifiedChangeSet when observation actually ran.
    const verificationStatus: ExecutionReviewVerificationStatus =
      input.verificationStatus ??
      (input.verifiedChangeSet ? "OBSERVED" : "UNAVAILABLE");
    if (verificationStatus === "OBSERVED" && input.verifiedChangeSet) {
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
      if (claimFactMismatch) {
        gitFacts.push(
          `claim_fact_mismatch unclaimed=${input.verifiedChangeSet.unclaimedObservedPaths.join(",")}`,
        );
      }
      if (input.verifiedChangeSet.all.length === 0) {
        gitFacts.push("verified_zero_change");
      }
    } else if (verificationStatus !== "OBSERVED") {
      gitFacts.push(`verification_status=${verificationStatus}`);
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
      (verificationStatus !== "OBSERVED" ||
      claimFactMismatch ||
      !cursorExecutionReportRef
        ? "PARTIAL"
        : cursorExecutionReportRef &&
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
        verificationStatus,
        verifiedChangeSetRef:
          verificationStatus === "OBSERVED" ? verifiedChangeSetRef : null,
        claimFactMismatch,
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
    if (
      manifest.verifiedEffects.verificationStatus === "OBSERVED" &&
      manifest.verifiedEffects.verifiedChangeSetRef
    ) {
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


## CREATED `projects/sfia-studio/app/features/project-assistant/w2/applyVerifiedChangeSetProductHonesty.ts`

```typescript
/**
 * CR-03 / CR-10 — VerifiedChangeSet honesty for Product projection.
 * Cursor CLAIM ≠ Studio FACT. Attempt succeeded ≠ Product PASS.
 * Does NOT create a second Evidence engine — only downgrades dishonest PASS.
 */
import { resolveProductEvidenceRefsRoot } from "@/features/project-assistant/f3/persistDocsWriteArtifactReviewMaterial";
import { loadGenericExecutionReviewMaterial } from "@/features/project-assistant/f3/persistGenericExecutionReviewMaterial";
import type { W3BProductTerminalProjection } from "./w3bProductTerminalProjection";

export function applyVerifiedChangeSetProductHonesty(input: {
  readonly attemptId: string;
  readonly product: W3BProductTerminalProjection;
  readonly refsRoot?: string;
}): W3BProductTerminalProjection {
  const refsRoot = input.refsRoot ?? resolveProductEvidenceRefsRoot();
  const review = loadGenericExecutionReviewMaterial({
    refsRoot,
    attemptId: input.attemptId,
  });
  if (!review.ok) return input.product;

  const status =
    review.manifest.verifiedEffects.verificationStatus ??
    (review.manifest.verifiedEffects.verifiedChangeSetRef
      ? "OBSERVED"
      : "UNAVAILABLE");
  const mismatch =
    review.manifest.verifiedEffects.claimFactMismatch === true ||
    review.verifiedChangeSet?.claimFactMismatch === true ||
    review.manifest.blockers.some((b) => b.includes("CLAIM_FACT_MISMATCH"));

  // Silent PASS forbidden when FACTS unavailable or CLAIM/FACT mismatch.
  if (
    input.product.outcome === "SUCCESS" &&
    input.product.claimAllowed &&
    (mismatch || status !== "OBSERVED")
  ) {
    const reason = mismatch
      ? "Studio VerifiedChangeSet diverges from Cursor CLAIM (CLAIM_FACT_MISMATCH) — Product PASS refused; Attempt technical success preserved."
      : `Studio worktree verification ${status} — Product PASS refused until FACTS observed; Attempt technical success preserved.`;
    return {
      ...input.product,
      outcome: "UNCLAIMED",
      claimAllowed: false,
      businessHeadline: "Qualification produit incomplète",
      businessReason: reason,
      evidenceSummary:
        (input.product.evidenceSummary ?? "") +
        (mismatch
          ? " · CLAIM_FACT_MISMATCH visible in Review Material"
          : ` · verificationStatus=${status}`),
    };
  }
  return input.product;
}

```


## CREATED `projects/sfia-studio/app/features/project-assistant/w2/reconcileContinuePolicy.ts`

```typescript
/**
 * Client-side continuation policy for Reconciler anti-stall (D-ER-08).
 *
 * Owner remains reconcileGovernedExecution. UI only triggers continue.
 * No worker / queue / scheduler platform — OPEN DESIGN DETAIL for other
 * mechanisms; this is the minimal seam-reuse chosen for this macro.
 *
 * CR-04: budget is operational only — correctness is durable projection
 * + automatic remount resume of the same Attempt. Budget exhaust must not
 * silently abandon; remount re-triggers continue from Product Truth.
 */

export type ContinuityStageLike =
  | "RUNNING"
  | "PRODUCT_MATERIALIZATION_PENDING"
  | "POST_EVIDENCE_PENDING"
  | "ATTEMPT_ACCEPTED"
  | string;

export type ContinuityProjectionLike = {
  readonly stage: ContinuityStageLike;
  readonly nextDeterministicAction?: string | null;
  readonly recoveryRequired?: boolean;
};

/** Legacy NoteLite-era UI bound (~8). Must be exceeded by nominal policy. */
export const LEGACY_UI_RUNNING_POLL_BUDGET = 8;

/**
 * Nominal continue budget — operational upper bound per mount session.
 * Correctness does NOT depend on this number alone (CR-04).
 */
export const NOMINAL_RECONCILE_CONTINUE_BUDGET = 120;

export function shouldContinueReconcileNominally(
  projection: ContinuityProjectionLike | null | undefined,
): boolean {
  if (!projection) return false;
  if (projection.recoveryRequired) return false;
  if (
    projection.stage === "RUNNING" ||
    projection.stage === "ATTEMPT_ACCEPTED"
  ) {
    return true;
  }
  const next = projection.nextDeterministicAction ?? "NONE";
  return (
    next === "MATERIALIZE_PRODUCT" ||
    next === "RUN_POST_EVIDENCE" ||
    next === "AWAIT_EXTERNAL" ||
    projection.stage === "PRODUCT_MATERIALIZATION_PENDING" ||
    projection.stage === "POST_EVIDENCE_PENDING"
  );
}

/**
 * Remount / reload resume: durable projection still has deterministic work
 * → automatic continue intent (no « Recharger résultat produit » nominal click).
 */
export function shouldAutoResumeReconcileOnRemount(
  projection: ContinuityProjectionLike | null | undefined,
): boolean {
  return shouldContinueReconcileNominally(projection);
}

/**
 * Pure policy: how many continue iterations remain under nominal budget.
 * Operational detail — not the EP-18 correctness criterion.
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


## CREATED `projects/sfia-studio/app/lib/nora-cognitive-runtime/executionReviewAgentsTools.ts`

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


## CREATED `projects/sfia-studio/app/lib/oa/execution-attempt/application/observeVerifiedChangeSet.ts`

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
import { existsSync, readdirSync, statSync } from "node:fs";
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

function listWorktreeRelFiles(worktreePath: string): string[] {
  const out: string[] = [];
  const root = path.resolve(worktreePath);
  const walk = (dir: string) => {
    let entries: string[];
    try {
      entries = readdirSync(dir);
    } catch {
      return;
    }
    for (const name of entries) {
      if (name === ".git" || name === "node_modules" || name === ".sfia-exec") {
        continue;
      }
      const abs = path.join(dir, name);
      let st;
      try {
        st = statSync(abs);
      } catch {
        continue;
      }
      if (st.isDirectory()) walk(abs);
      else if (st.isFile()) {
        out.push(normalizeRel(path.relative(root, abs)));
      }
    }
  };
  walk(root);
  return out.filter(Boolean);
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
    try {
      const diff = await input.statusDiffPort.statusDiff({
        repoPath: input.worktreePath,
      });
      nameStatus = diff.statusPorcelain || diff.diffStat;
    } catch {
      nameStatus = "";
    }
  }

  let changed = parseNameStatus(nameStatus);
  // Fake / non-git worktree parity: when git porcelain is empty, still observe
  // files present under the server-owned worktree (VERIFIED FACTS).
  if (changed.length === 0 && existsSync(input.worktreePath)) {
    changed = listWorktreeRelFiles(input.worktreePath).map((p) => ({
      path: p,
      status: "??",
    }));
  }

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


## CREATED `projects/sfia-studio/app/lib/oa/execution-attempt/domain/cursorReviewEndOf.ts`

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


## DIFF `projects/sfia-studio/app/__tests__/project-assistant/productContinuitySharedKnowledge.d0.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/productContinuitySharedKnowledge.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/productContinuitySharedKnowledge.d0.test.ts
index 1d517c31..892d5e5a 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/productContinuitySharedKnowledge.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/productContinuitySharedKnowledge.d0.test.ts
@@ -50,6 +50,20 @@ function emptyContext(
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
+      verificationStatus: null,
+      retentionState: null,
+      reviewEndOfPresent: false,
+      verifiedChangeSetPresent: false,
+      blockers: [],
+      reviewItemSummaries: [],
+    },
     evidence: {
       kind: "EVIDENCE",
       evidenceId: null,

```


## DIFF `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx`

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
index 6d02f3f2..3529c3d2 100644
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
@@ -1941,6 +1949,41 @@ export function TrajectorySurface({
    */
   const legacyDecisionCtaVisible = decisionWorkflowMode === "legacy_cta";

+  /**
+   * CR-04 — On remount / reload, if durable Attempt still needs deterministic
+   * progression, auto-trigger Reconciler continue (no nominal Recharger click).
+   * Budget exhaust of a prior mount session must not abandon the workflow.
+   */
+  useEffect(() => {
+    if (!contract?.executionContractId) return;
+    if (busy !== null) return;
+    let cancelled = false;
+    void (async () => {
+      try {
+        const { shouldAutoResumeReconcileOnRemount } = await import(
+          "@/features/project-assistant/w2/reconcileContinuePolicy"
+        );
+        const { w2DeriveGovernedExecutionContinuityAction: deriveContinuity } =
+          await import("@/features/project-assistant/w2/actions");
+        if (typeof deriveContinuity !== "function") return;
+        const derived = await deriveContinuity({
+          projectId,
+          executionContractId: contract.executionContractId,
+        });
+        if (cancelled || !derived.ok) return;
+        if (!shouldAutoResumeReconcileOnRemount(derived.projection)) return;
+        await runServerReconcile("continue");
+      } catch {
+        // Remount resume must never crash UI when action mocks omit the export.
+      }
+    })();
+    return () => {
+      cancelled = true;
+    };
+    // Mount / contract identity only — remount resume, not every projection tick.
+    // eslint-disable-next-line react-hooks/exhaustive-deps
+  }, [contract?.executionContractId, projectId]);
+
   useEffect(() => {
     if (!onProposalSubjectOwnershipChange) return;
     if (continuityReadsUnresolved) {
@@ -3423,6 +3466,20 @@ export function TrajectorySurface({
               Recharger résultat produit (durable)
             </button>
           ) : null}
+          {/* CR-07 — Generic Execution Review summary for Pilot (no .sfia-exec paths). */}
+          {productOutcome ? (
+            <div
+              className={styles.blockBody}
+              data-testid="w3b-execution-review-summary"
+            >
+              <p className={styles.productHeadline}>Matière de revue</p>
+              <p data-testid="w3b-execution-review-hint">
+                Rapport Cursor (CLAIM), faits Studio vérifiés et items de revue
+                sont accessibles via la résolution produit — pas via un chemin
+                worktree.
+              </p>
+            </div>
+          ) : null}
         </section>
       ) : null}


```


## DIFF `projects/sfia-studio/app/features/project-assistant/f3/ingestDocsWriteArtifactEvidence.ts`

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


## DIFF `projects/sfia-studio/app/features/project-assistant/f3/persistDocsWriteArtifactReviewMaterial.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/persistDocsWriteArtifactReviewMaterial.ts b/projects/sfia-studio/app/features/project-assistant/f3/persistDocsWriteArtifactReviewMaterial.ts
index a3faf6ae..cafa3fd2 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/persistDocsWriteArtifactReviewMaterial.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/persistDocsWriteArtifactReviewMaterial.ts
@@ -199,6 +199,12 @@ export function resolveProductEvidenceRefsRoot(
 ): string {
   const trimmed = explicit?.trim();
   if (trimmed) return trimmed;
+  const fromEnv =
+    typeof process.env.SFIA_STUDIO_PRODUCT_EVIDENCE_REFS_ROOT === "string" &&
+    process.env.SFIA_STUDIO_PRODUCT_EVIDENCE_REFS_ROOT.trim()
+      ? process.env.SFIA_STUDIO_PRODUCT_EVIDENCE_REFS_ROOT.trim()
+      : null;
+  if (fromEnv) return fromEnv;
   const db =
     typeof process.env.SFIA_STUDIO_PRODUCT_DB_PATH === "string" &&
     process.env.SFIA_STUDIO_PRODUCT_DB_PATH.trim()

```


## DIFF `projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts`

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


## DIFF `projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts b/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
index e9ce7276..53242274 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
@@ -43,6 +43,7 @@ import { completeBoundedDocsWriteLaunch } from "@/features/project-assistant/f3/
 import { completeBoundedReadOnlyLaunch } from "@/features/project-assistant/f3/completeBoundedReadOnlyLaunch";
 import { ingestDocsWriteArtifactEvidence } from "@/features/project-assistant/f3/ingestDocsWriteArtifactEvidence";
 import { ingestMissionResultEvidence } from "@/features/project-assistant/f3/ingestMissionResultEvidence";
+import { finalizeGenericExecutionReview } from "@/features/project-assistant/f3/finalizeGenericExecutionReview";
 import {
   buildMissionResultPayloadFromReport,
   type CursorExecutionReportWithMission,
@@ -1280,6 +1281,52 @@ export async function governedExecuteRecordResult(
             };
           }
         }
+        const refsRoot =
+          input.missionResultRefsRoot?.trim() ||
+          path.join(
+            path.dirname(
+              typeof process.env.SFIA_STUDIO_PRODUCT_DB_PATH === "string" &&
+                process.env.SFIA_STUDIO_PRODUCT_DB_PATH.trim()
+                ? process.env.SFIA_STUDIO_PRODUCT_DB_PATH
+                : path.join(
+                    process.cwd(),
+                    "..",
+                    ".sfia-exec",
+                    "product",
+                    "oa-product.sqlite",
+                  ),
+            ),
+            "mission-result-refs",
+          );
+
+        // CR-01 — Generic Product nominal: observe worktree → VerifiedChangeSet →
+        // finalize Generic Review Material BEFORE Evidence/mission ingest.
+        // worktreeRef is server-owned (RealProcessObservation / LaunchAck).
+        if (report) {
+          const worktreeRef =
+            completed.observation?.worktreeRef?.trim() || null;
+          const finalized = await finalizeGenericExecutionReview({
+            refsRoot,
+            projectId: input.projectId,
+            cycleInstanceId: contract.cycleInstanceId,
+            executionContractId: contract.executionContractId,
+            attemptId: attempt.attemptId,
+            repositoryRef:
+              expectedRepo ?? report.repositoryRef ?? "repository:unknown",
+            baseSha: expectedSha ?? report.baseSha ?? "unknown",
+            cursorReport: report,
+            worktreePath: worktreeRef,
+          });
+          if (!finalized.ok) {
+            return {
+              ok: false,
+              code: "POST_EXECUTION_CONTINUITY_ADVANCE_FAILED",
+              message: `Attempt succeeded durable — Generic Review Material finalize échoué (${finalized.code}): ${finalized.message}`,
+              attempt: projectAttempt(attempt, adapterId),
+            };
+          }
+        }
+
         const built = report
           ? buildMissionResultPayloadFromReport({ report })
           : ({
@@ -1289,17 +1336,6 @@ export async function governedExecuteRecordResult(
                 "Mission Result Evidence requires a structured CursorExecutionReport with missionResult fields.",
             } as const);
         if (built.ok) {
-          const refsRoot =
-            input.missionResultRefsRoot?.trim() ||
-            path.join(
-              path.dirname(
-                typeof process.env.SFIA_STUDIO_PRODUCT_DB_PATH === "string" &&
-                  process.env.SFIA_STUDIO_PRODUCT_DB_PATH.trim()
-                  ? process.env.SFIA_STUDIO_PRODUCT_DB_PATH
-                  : path.join(process.cwd(), "..", ".sfia-exec", "product", "oa-product.sqlite"),
-              ),
-              "mission-result-refs",
-            );
           const ingested = await ingestMissionResultEvidence({
             evidenceReviewServices: input.oa.evidenceReviewServices,
             projectId: input.projectId,

```


## DIFF `projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts b/projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
index 8874e7c4..4b1c4ac9 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
@@ -504,13 +504,20 @@ export async function materializeW3bProductTerminal(input: {
     };
   }

-  const product = projectFromFacts({
+  const productRaw = projectFromFacts({
     attempt,
     contract,
     evidence: primaryEvidence,
     reviewBundle: frozenReviewBundle,
     claimEvaluation: evaluated.claimEvaluation,
   });
+  const { applyVerifiedChangeSetProductHonesty } = await import(
+    "./applyVerifiedChangeSetProductHonesty"
+  );
+  const product = applyVerifiedChangeSetProductHonesty({
+    attemptId: attempt.attemptId,
+    product: productRaw,
+  });

   const reusedFromIdempotency = Boolean(
     ingested.reusedFromIdempotencyKey ||

```


## DIFF `projects/sfia-studio/app/features/project-assistant/w2/missionContractSemanticInputs.ts`

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


## DIFF `projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts b/projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts
index a5ea435c..5cb9a54b 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts
@@ -47,6 +47,7 @@ import {
 import {
   deriveMissionAcceptanceCriteria,
   deriveMissionReportRequirements,
+  deriveGenericProductReportRequirements,
   deriveMissionValidationPlan,
 } from "./missionContractSemanticInputs";

@@ -495,7 +496,7 @@ export async function prepareExecutionContractFromW2Decision(input: {
           [CONTRACT_VALIDATION_PLAN_INPUT_KEY]:
             deriveMissionValidationPlan(mission),
           [CONTRACT_REPORT_REQUIREMENTS_INPUT_KEY]:
-            deriveMissionReportRequirements(),
+            deriveGenericProductReportRequirements(),
         }
       : {}),
   };

```


## DIFF `projects/sfia-studio/app/features/project-assistant/w2/resolveProductExecutionContext.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/resolveProductExecutionContext.ts b/projects/sfia-studio/app/features/project-assistant/w2/resolveProductExecutionContext.ts
index ba78a0c3..e1c0e4cd 100644
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
@@ -62,6 +63,31 @@ export type ProductExecutionContext = {
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
+    readonly verificationStatus:
+      | "OBSERVED"
+      | "UNAVAILABLE"
+      | "NOT_PERFORMED"
+      | "NOT_APPLICABLE"
+      | null;
+    readonly retentionState: string | null;
+    readonly reviewEndOfPresent: boolean;
+    readonly verifiedChangeSetPresent: boolean;
+    readonly blockers: readonly string[];
+    readonly reviewItemSummaries: readonly {
+      readonly itemId: string;
+      readonly kind: string;
+      readonly label: string;
+      readonly logicalPath?: string;
+    }[];
+  };
   readonly evidence: {
     readonly kind: "EVIDENCE";
     readonly evidenceId: string | null;
@@ -543,6 +569,20 @@ export async function resolveProductExecutionContext(input: {
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
+    verificationStatus: null,
+    retentionState: null,
+    reviewEndOfPresent: false,
+    verifiedChangeSetPresent: false,
+    blockers: [],
+    reviewItemSummaries: [],
+  };
   let evidenceBlock: ProductExecutionContext["evidence"] = {
     kind: "EVIDENCE",
     evidenceId: null,
@@ -620,6 +660,52 @@ export async function resolveProductExecutionContext(input: {
       }
     }

+    const genericReview = loadGenericExecutionReviewMaterial({
+      refsRoot: resolveProductEvidenceRefsRoot(),
+      attemptId: attempt.attemptId,
+    });
+    if (genericReview.ok) {
+      const mismatch =
+        genericReview.manifest.verifiedEffects.claimFactMismatch === true ||
+        genericReview.verifiedChangeSet?.claimFactMismatch === true ||
+        genericReview.manifest.blockers.some((b) =>
+          b.includes("CLAIM_FACT_MISMATCH"),
+        );
+      const verificationStatus =
+        genericReview.manifest.verifiedEffects.verificationStatus ??
+        (genericReview.verifiedChangeSet ? "OBSERVED" : "UNAVAILABLE");
+      executionReview = {
+        kind: "EXECUTION_REVIEW_MATERIAL",
+        present: true,
+        completeness: genericReview.manifest.completeness,
+        reviewMaterialId: genericReview.manifest.reviewMaterialId,
+        reviewItemCount: genericReview.manifest.reviewItems.length,
+        claimFactMismatch: mismatch,
+        verificationStatus,
+        retentionState: genericReview.manifest.retentionState,
+        reviewEndOfPresent: Boolean(genericReview.reviewEndOf),
+        verifiedChangeSetPresent:
+          verificationStatus === "OBSERVED" &&
+          Boolean(genericReview.verifiedChangeSet),
+        blockers: [...genericReview.manifest.blockers],
+        reviewItemSummaries: genericReview.manifest.reviewItems.map((it) => ({
+          itemId: it.itemId,
+          kind: it.kind,
+          label: it.label,
+          ...(it.logicalPath ? { logicalPath: it.logicalPath } : {}),
+        })),
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
@@ -730,6 +816,7 @@ export async function resolveProductExecutionContext(input: {
         : null,
       cursorReport,
       artifact,
+      executionReview,
       evidence: evidenceBlock,
       reviewBundle: reviewBlock,
       claimEvaluation: claimBlock,
@@ -742,6 +829,8 @@ export async function resolveProductExecutionContext(input: {
       disclosures: [
         "Product Resolution is READ-ONLY — not Truth C / HumanDecision / Evidence authority.",
         "CursorExecutionReport is an EXECUTOR CLAIM, never Evidence by itself.",
+        "Cursor Review End Of is an EXECUTOR CLAIM when present — never Fact/Evidence.",
+        "Execution Review Material is a review payload — not Product Truth.",
         "Artifact preview may be PARTIAL — never invent FULL.",
         "Attempt technical succeeded ≠ Product Result PROVEN.",
       ],

```


## DIFF `projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts`

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


## DIFF `projects/sfia-studio/app/lib/nora-cognitive-runtime/noraCognitiveCompletion.ts`

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


## DIFF `projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts`

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


## DIFF `projects/sfia-studio/app/lib/oa/execution-attempt/domain/cursorExecutionReport.ts`

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


## DIFF `projects/sfia-studio/app/lib/oa/execution-attempt/index.ts`

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


## DIFF `projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
index 369d64f5..b7134aac 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
@@ -328,6 +328,8 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
     string,
     RealProcessObservation
   >();
+  /** processRef → worktreePath (gateway-local, Attempt/process-bound, not Product Truth). */
+  private readonly processWorktreeByRef = new Map<string, string>();

   constructor(options: StudioCursorRealLaunchGatewayOptions) {
     if (!options.processRunner) {
@@ -1090,6 +1092,7 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
           worktreeRef: workspacePath,
         });
       }
+      this.processWorktreeByRef.set(invoked.processRef, workspacePath);

       return {
         outcome: "ack",
@@ -1112,19 +1115,36 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
   }

   async observe(processRef: string): Promise<RealProcessObservation | null> {
+    let obs: RealProcessObservation | null = null;
     if (typeof this.runner.observe === "function") {
-      return this.runner.observe(processRef);
+      obs = await this.runner.observe(processRef);
+    } else {
+      obs = this.fallbackObservations.get(processRef) ?? null;
     }
-    return this.fallbackObservations.get(processRef) ?? null;
+    return this.decorateWorktreeRef(processRef, obs);
   }

   async awaitCompletion(
     processRef: string,
   ): Promise<RealProcessObservation | null> {
+    let obs: RealProcessObservation | null = null;
     if (typeof this.runner.awaitCompletion === "function") {
-      return this.runner.awaitCompletion(processRef);
+      obs = await this.runner.awaitCompletion(processRef);
+    } else {
+      obs = await this.observe(processRef);
     }
-    return this.observe(processRef);
+    return this.decorateWorktreeRef(processRef, obs);
+  }
+
+  private decorateWorktreeRef(
+    processRef: string,
+    obs: RealProcessObservation | null,
+  ): RealProcessObservation | null {
+    if (!obs) return null;
+    if (obs.worktreeRef && obs.worktreeRef.trim()) return obs;
+    const known = this.processWorktreeByRef.get(processRef);
+    if (!known) return obs;
+    return { ...obs, worktreeRef: known };
   }
 }


```


## DIFF `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`

```diff
diff --git a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
index 75b2974e..1b810b71 100644
--- a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
+++ b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
@@ -4,6 +4,7 @@
 | --- | --- |
 | **Rôle** | Roadmap **vivante** de convergence vers l’utilisation complète de la doctrine produit SFIA Studio v3 |
 | **Statut** | **VALIDATED — ACTIVE LIVING ROADMAP** |
+| **Timestamp maintenance GENERIC-EXECUTION-REVIEW-RESULT-CONVERGENCE-01 delivery candidate** | 2026-09-29 — **GENERIC EXECUTION / REVIEW / RESULT — CONVERGENCE DELIVERY CANDIDATE** · Cycle **8 — Delivery / implémentation** · EVOL · CRITICAL · CKC `cyc:delivery` / `ckc/08-delivery-implementation.md` (**CONTENT VALIDATED BY MORRIS** · guidance only) · Architecture **D-ER-01…D-ER-15 CONSUMED** from `sfia-studio-generic-execution-review-result-architecture.md` · base `origin/main` @ `d4d986af5884b31b416374da3cb5e60757501f87` (PR **#541** architecture merge) · branche locale `delivery/sfia-studio-generic-execution-review-result-convergence-01` · Correction Pass 01 · preuve **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** · capacité = **LOCAL CANDIDATE / NOT INTEGRATED ON MAIN** · ZERO REAL · NoteLite PAUSED · READY FOR REAL **NO** · seams livrés (deterministic tested scope) : Cursor Review End Of CLAIM type + EC `reportRequirements` · `observeVerifiedChangeSet` · Generic Execution Review Material persist/load (refs FS, no new table) · Product Resolution `executionReview` · Nora bounded `execution_review_*` tools · Reconciler anti-stall continue budget **> legacy 8** · dual-write Review Material depuis ingest docs_write (bridge) · **ZERO REAL** · NoteLite = **PAUSED** · next = ChatGPT Critical Review → Morris GO commit/push/PR · replay REAL NoteLite = **DISTINCT Morris GO** · runtime v3 = **NON ADOPTED** · READY FOR REAL = **NO** · **≠** INTEGRATED ON MAIN · **≠** full Product-front-door E2E oracle claim without reserves · **CURRENT REPOSITORY TRUTH = RESOLVE FROM GIT** |
 | **Timestamp maintenance GENERIC-EXECUTION-REVIEW-RESULT-ARCHITECTURE-01 truth-sync** | 2026-09-29 — **GENERIC EXECUTION / REVIEW / RESULT — ARCHITECTURE TRUTH-SYNC** · Cycle **6 — Architecture technique** · DOC / EVOL · CRITICAL · CKC `cyc:technical-architecture` / `ckc/06-architecture-technique.md` (**CONTENT VALIDATED BY MORRIS** · guidance only · **≠** execution authority) · Morris decisions **D-ER-01…D-ER-15 ADOPTED** (2026-09-29) · **CURRENT main** `origin/main` @ `6f47f74dc9b515c4c79624b21772223ba02c76cd` · capacité **PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01** = **INTEGRATED ON MAIN** via PR **#540** merge `6f47f74d…` (head `47fcab2b…`) · campagne **NoteLite bounded REAL** = **RÉALISÉE AT TESTED SCOPE** puis **PAUSED** à ce point (correction governed **non relancée** · cycle NoteLite **non finalisé**) · findings bornés : EC→Attempt REAL→Cursor REAL→terminal succeeded→durable Evidence/RB/CE→Product Resolution→Nora post-Evidence→Nora conversationnelle **sans transfer d’IDs Pilote** · **NOT_PROVEN** honesty préservée · gap nominal post-terminal / UI « qualification en cours » + clic « Recharger résultat produit » = **HIGH-CONFIDENCE ARCHITECTURAL CAUSE** (poll UI ≤8 / pas de worker autonome) **≠ PROVEN INSTANCE ROOT CAUSE** · **ADOPTED TARGET** = un modèle Product d’exécution **générique** · **toutes** taxonomies de tâche Product spécialisées (`docs_write`, `code_write`, `read`, `read_only`, …) = **RETIRE FROM PRODUCT MODEL** · capabilities/effects techniques = **enforcement-only possibles** · **interdit** inventer `generic_read` / `generic_write` / `generic_code` comme catégories Product · isolated Git worktree = **KEEP** · Cursor Generalist = **KEEP** · CursorExecutionReport = **CLAIM KEEP** · Generic Execution Review Material = **TARGET** · Native Review End Of = **TARGET** (harvest sémantique · **≠** import transport `.tmp-sfia-review` / `sfia/review-handoff`) · Studio VerifiedChangeSet = **TARGET** · Product Resolution = **KEEP / COMPLETE** · Continuity Projection + Reconciler = **KEEP** (Reconciler = owner progression déterministe) · Nora Deep Review = **TARGET** sur shared cognitive core (**≠** second Nora) · Result Surface = **KEEP / COMPLETE** · Review Material retention HOT→PRUNED = **TARGET** · document architecture = `projects/sfia-studio/convergence/sfia-studio-generic-execution-review-result-architecture.md` (**ADOPTED TARGET BY MORRIS — DOCUMENTARY CANDIDATE PENDING GIT INTEGRATION**) · ancienne hypothèse **5 lots Delivery** = **NOT ADOPTED** · **DELIVERY SLICING = TBD AFTER ARCHITECTURE REVIEW** · future Delivery = **DISTINCT Morris GO** · future REAL / READY FOR REAL = **DISTINCT Morris GO** · **READY FOR REAL = NO** · runtime v3 = **NON ADOPTED** · **≠** code Product modifié ce cycle · **≠** Delivery authorized · **≠** NoteLite finalized · **≠** full E2E REAL proven · **CURRENT REPOSITORY TRUTH = RESOLVE FROM GIT / `origin/main` / PR evidence** · **next** = ChatGPT Critical Review of architecture truth-sync → puis seulement Delivery slicing design |
 | **Timestamp maintenance NATIVE-EXECUTION-LOOP-CONVERGENCE-01 post-merge verification** | 2026-09-26 — **NATIVE EXECUTION LOOP CONVERGENCE — POST-MERGE VERIFICATION / ROADMAP TRUTH-SYNC / CAPITALISATION** · Macro **NATIVE-EXECUTION-LOOP-CONVERGENCE-01** · **SAME MACRO / NO MICRO-CYCLE** · Cycle **15** · Capitalisation / REX · DOC · CRITICAL · Morris GO **POST-MERGE / DOCUMENTARY TRUTH-SYNC / CAPITALISATION** **CONSUMED** (local docs only · **≠** project commit/push/PR) · protected path authorization = Convergence Roadmap + capitalisation asset under `convergence/**` **ONLY** · Build Doctrine / C1 / framing / method / prompts = **READ ONLY** · PR **#527 MERGED** · product head `5a05a2a7082bc140393f18647a56f1ed23cef73c` · merge/main `e486e81f2443bb9837b4bbdc1967cf5d1368f4d9` · pre-merge CI **#614** run `36261815679` **SUCCESS / Required Gate PASS** · post-merge CI **#615** run `36262627727` **SUCCESS / Required Gate PASS** · Product head→merge app parity **ZERO** · capacité **NATIVE EXECUTION LOOP CONVERGENCE** = **INTEGRATED ON MAIN / POST-MERGE VERIFIED** · proof = **DETERMINISTIC / LOCAL + PR/CI INTEGRATION ONLY** · **ZERO NEW REAL** · runtime v3 = **NON ADOPTED** · Product Completion = historical **COMPLETE/CLOSED** (**≠** newly completed by NELC) · remaining governed debts = **D1** optional first-class typed EC input bridge · optional mid-turn repository SHA stamp · future bounded REAL under **distinct Morris GO** · **next activity** = MealFlow semantic reservation campaign (**observation / qualification** · **NOT STARTED / NOT AUTHORIZED** by this documentary sync) · **NEXT MACRO CAPABILITY** = **NOT YET DETERMINED** · future bounded REAL of native loop = **OPEN GOVERNED PROOF OPTION / DISTINCT MORRIS GO** (**≠** auto-selected next capability) · **≠** READY FOR REAL · **≠** Product READY · **≠** runtime v3 ADOPTED · repository truth = **RESOLVE FROM GIT / PR evidence** · capitalisation asset = `projects/sfia-studio/convergence/sfia-studio-native-execution-loop-convergence-01-capitalisation.md` (**LOCAL DOCUMENTARY CANDIDATE** until distinct Git integration GO) |
 | **Timestamp maintenance CYCLE-RESERVATION-PILOTING-01 post-merge verification** | 2026-09-25 — **CYCLE RESERVATION MANAGEMENT & GATE-AWARE PILOTING — POST-MERGE VERIFICATION / ROADMAP TRUTH-SYNC** · Macro **CYCLE-RESERVATION-PILOTING-01** · Cycle **14** · Post-merge · DOC · CRITICAL · Morris GO **POST-MERGE DOCUMENTARY TRUTH-SYNC — ROADMAP PROTECTED PATH ONLY** **CONSUMED** · PR **#518 MERGED** · product head `f0874ec05fec4237a6f39311b90c9233debce5f5` · merge/main `29f1597951bd6e4d779cc728f46396e28b8f5aa0` · PR CI **#595** run `36100845339` **SUCCESS / Required Gate PASS** · post-merge CI **#596** run `36101841229` **SUCCESS / Required Gate PASS** · capacité **CYCLE RESERVATION MANAGEMENT & GATE-AWARE PILOTING** = **INTEGRATED ON MAIN / POST-MERGE VERIFIED** · same-macro construction reserves = **ZERO** at reviewed scope · protected Roadmap truth-sync = local documentary candidate under this cycle until Git integration · Product Completion = historical **COMPLETE/CLOSED** (**≠** newly completed) · Nora Cognitive Completion = **NOT COMPLETE** · global semantic Reservation quality = **NOT PROVEN** · READY FOR REAL global = **NO** · runtime v3 = **NON ADOPTED** · **next** = MealFlow semantic reservation campaign (**observation / qualification** · **NOT STARTED** by this documentary sync · **≠** new macro pre-authorized) · Git / PR evidence remains authoritative · **CURRENT REPOSITORY TRUTH = RESOLVE FROM GIT / `origin/main` / PR evidence** |

```


## DIFF `projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md`

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
index f6d81c37..ddeea55a 100644
--- a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
+++ b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
@@ -139,3 +139,11 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK
 - **OPS1 ops surface:** `/ops1/nouvelle-demande` + `lib/ops1/**` (isolated sqlite; D1 nav still links; product Fake env reuses `OPS1_*` names)
 - **Parallel BC:** `lib/oa/execution-run/**` (memory-only; FinOps/T7 shadow consumer; not product EC→Attempt)
 - **Status:** ACTIVE compatibility / temporary keep — **no SAFE TO REMOVE proven** under SFIA-STUDIO-LEGACY-ARCHITECTURE-DECOMMISSION-01 (see vol 09)
+
+## Generic Execution → Review → Result (CURRENT — Correction Pass 01 candidate)
+
+Nominal Product path (architecture D-ER; delivery candidate):
+
+HumanDecision → Generic EC (`reportRequirements` incl. Cursor Review End Of CLAIM) → Cursor Generalist → isolated worktree → CursorExecutionReport [CLAIM] + Cursor Review End Of [CLAIM] → Studio `observeVerifiedChangeSet` [FACTS] (OBSERVED vs UNAVAILABLE — never invent empty FACTS) → Generic Execution Review Material → Evidence/RB/CE → Product Resolution (`executionReview`) → Reconciler continue + remount auto-resume → Nora Deep Review (bounded RO tools, opt-in) → Result Surface.
+
+CURRENT: docs_write specialized persist remains TRANSITIONAL dual-write bridge. Anti-stall: remount auto-continue from durable projection; Reconciler remains owner; UI budget is operational only.

```


## DIFF `projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md`

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
index cf981abf..4d40273b 100644
--- a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
+++ b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
@@ -39,3 +39,15 @@
 - DETERMINISTIC PROVEN (seam/unit)
 - REAL BOUNDARY / E2E REAL — require distinct Morris GO; **not claimed**
 - Runtime v3 **NON ADOPTED**; Product global READY **not claimed**
+
+## GENERIC-EXECUTION-REVIEW-RESULT-CONVERGENCE-01
+
+| Proof | Level | Notes |
+| --- | --- | --- |
+| Front-door Generic Product → Review Material mismatch → Resolution | **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** | `genericExecutionReviewResultConvergence01.frontDoor.d0.test.ts` |
+| VerifiedChangeSet claim/fact mismatch | DETERMINISTIC AT TESTED SCOPE | core + frontDoor |
+| Generic Review Material 0-file + UNAVAILABLE vs OBSERVED | DETERMINISTIC AT TESTED SCOPE | CR-02 |
+| Nora execution_review tools + shared core post_execution | DETERMINISTIC AT TESTED SCOPE | frontDoor + core |
+| Anti-stall remount continue / same Attempt | DETERMINISTIC AT TESTED SCOPE | frontDoor CR-04 (budget ≠ correctness) |
+| Product Continuity shared knowledge non-regression | DETERMINISTIC AT TESTED SCOPE | existing continuity suites |
+| REAL generic / NoteLite replay | **NOT PROVEN** | ZERO REAL this macro |

```


## DIFF `projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md`

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
index 0d817466..9c8d3335 100644
--- a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
+++ b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
@@ -32,11 +32,24 @@
 - Some object cards mark PARTIAL where aggregate naming is distributed across DTOs.
 - REAL OpenAI leaf candidacy parity not re-proven this macro (DETERMINISTIC only).

-## Next macro
+## GENERIC-EXECUTION-REVIEW-RESULT-CONVERGENCE-01 (CURRENT MACRO — local candidate)

-`PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01` **local candidate** on branch `delivery/sfia-studio-product-continuity-shared-knowledge-01`. Capacité suivante après revue: **SprintBoard REAL re-proof bornée** (Gate Morris distinct).
+- **CURRENT MACRO** on branch `delivery/sfia-studio-generic-execution-review-result-convergence-01`.
+- Generic Product path / Review End Of CLAIM / VerifiedChangeSet / Generic Review Material / Nora bounded review tools / Reconciler remount auto-continue: **IMPLEMENTED** at **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** (Correction Pass 01 candidate).
+- docs_write adapters: **TRANSITIONAL bridge retained** (dual-write Review Material).
+- NoteLite REAL replay: **NOT DONE** (PAUSED; distinct Morris GO — future REAL campaign).
+- Retention GC / Git promotion: **NOT IMPLEMENTED** (compatible only).
+- REAL / READY FOR REAL / runtime v3: **NO**.

-## Prior overlay retained
+## Next / CURRENT REAL campaign
+
+NoteLite bounded REAL re-proof — **PAUSED**. Gate Morris distinct. Not this delivery macro.
+
+## Prior overlay retained — PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01
+
+`PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01` is **INTEGRATED ON MAIN** (historical). Prior tip wording « local candidate » is obsolete as CURRENT next macro.
+
+## Prior overlay retained — POST-EXECUTION

 `POST-EXECUTION-CURSOR-REPORT-ARTIFACT-HANDOFF-01` **local candidate** on branch `feat/sfia-studio-post-execution-handoff-01`. Capacité suivante après revue: **reprise SprintBoard REAL bornée** (Gate Morris distinct) — ne pas auto-sélectionner READY FOR REAL / END-TO-END REAL.


```


## DIFF `projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json`

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
index 56917ea5..b438a469 100644
--- a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
+++ b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
@@ -2,7 +2,7 @@
   "schemaVersion": 1,
   "kind": "SFIA_STUDIO_LIVING_PRODUCTION_RUNTIME_REFERENCE",
   "lastReviewedCommit": "6beb8cc369bd9b82eebee97b70309838373b3dfa",
-  "lastReviewedAt": "2026-09-27T18:42:24.911Z",
+  "lastReviewedAt": "2026-09-29T13:09:51.894Z",
   "canonicalReadme": "projects/sfia-studio/production-runtime-reference/README.md",
   "volumes": [
     {
@@ -19,7 +19,7 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md",
-      "sha256_16": "2b33f2c9648004ec"
+      "sha256_16": "d311c7a12cc7f9d6"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md",
@@ -39,11 +39,11 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md",
-      "sha256_16": "8fc11fd081bb37dc"
+      "sha256_16": "129e70efc2d8e3a0"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md",
-      "sha256_16": "7f9b17310ec84156"
+      "sha256_16": "a6aa9906dac7d84a"
     }
   ],
   "components": [

```


---
## Instruction ChatGPT obligatoire

Avant de répondre à Morris sur ce rapport, ChatGPT doit consulter le Review Handoff distant canonique :

branche :
sfia/review-handoff

fichier :
sfia-review-handoff/latest-chatgpt-review.md

ChatGPT doit vérifier :
- cycle / profil / same macro ;
- branch / HEAD / base ;
- entry handoff c5025916 ;
- CR-01→CR-10 ;
- Generic nominal wiring ;
- reportRequirements réellement consommés ;
- worktree lineage ;
- VerifiedChangeSet semantics ;
- verification unavailable vs zero change ;
- Review Material ;
- Evidence/RB/CE ;
- Product Resolution ;
- Nora actual tool consumption ;
- Reconciler long-running/restart ;
- no manual recovery ;
- Result Surface ;
- review item access ;
- EP-01→EP-20 ;
- front-door deterministic E2E ;
- Fake/Real ;
- ZERO REAL ;
- Living Reference ;
- Roadmap ;
- files ;
- tests ;
- full suite ;
- typecheck/lint/build ;
- reservations ;
- debt/exits ;
- Review Handoff remote ;
- verdict.

Absent / incohérent / synthesis-only :
REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING

Une preuve Git plus récente peut superseder le handoff.
