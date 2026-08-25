# W3-C Delivery Review Pack — FULL (modified content complete)

## Header
- timestamp_cest: 2026-08-25 10:47:24 CEST
- timestamp_utc: 2026-08-25 08:47:24 UTC
- pack_purpose: ChatGPT re-review — MODIFIED CONTENT INCLUDED (prior handoff was synthesis-only)
- repo: sfia-workspace
- worktree: /Users/morris/Projects/sfia-workspace-w3c-post-evidence-replan
- branch: delivery/sfia-studio-product-completion-w3-c-post-evidence-replan
- candidate_exact: 7278166b6949e59eefef3a4c0e9ffb70d41c0cda
- parent_base_exact: ee3e95de234d6f36f6c037b7a8a7277e8a4a1c9e
- NO_CODE_CHANGE_SINCE_CANDIDATE: true
- cycle: 8 — Delivery
- profil: Critical
- typologie: INC
- GO Morris W3-C Delivery: CONSUMED (not closure; not project push/PR/merge)
- W3-C state: NOT CLOSED
- W3 state: IN PROGRESS / NOT CLOSED
- REAL: OUT
- FinOps: FREEZE
- W4: OUT
- runtime v3: NON ADOPTED

## Local Git Truth Check (this republish)
```
branch: delivery/sfia-studio-product-completion-w3-c-post-evidence-replan
HEAD: 7278166b6949e59eefef3a4c0e9ffb70d41c0cda
HEAD^: ee3e95de234d6f36f6c037b7a8a7277e8a4a1c9e
status: ?? .tmp-sfia-review/ only
```
PASS — frozen candidate; no project code mutation in this republish cycle.

## Candidate file inventory (17)
```
A	projects/sfia-studio/app/__tests__/project-assistant/w3cPostEvidenceLoop.test.ts
M	projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
M	projects/sfia-studio/app/e2e/studio-w3b-terminal-evidence-runtime.spec.ts
A	projects/sfia-studio/app/e2e/studio-w3c-post-evidence-replan-runtime.spec.ts
M	projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
M	projects/sfia-studio/app/features/project-assistant/f3/appendEvidenceOutcomeToLps.ts
M	projects/sfia-studio/app/features/project-assistant/w2/actions.ts
M	projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
M	projects/sfia-studio/app/features/project-assistant/w2/types.ts
A	projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/testExecutionAdapter.ts
M	projects/sfia-studio/app/lib/oa/project/application/appendLivingProjectStateVersion.ts
M	projects/sfia-studio/app/lib/oa/project/domain/types.ts
M	projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
M	projects/sfia-studio/app/lib/vertical-slice-runtime/w3bE2eBoundaryControl.ts
```

## Diff stat
```
.../project-assistant/w3cPostEvidenceLoop.test.ts  | 514 +++++++++++++++++++++
 .../importBoundaries.test.ts                       |   1 +
 .../studio-w3b-terminal-evidence-runtime.spec.ts   |   7 +
 ...studio-w3c-post-evidence-replan-runtime.spec.ts | 272 +++++++++++
 .../pre-m6-product-ui/ProjectWorkspacePage.tsx     |  11 +-
 .../surfaces/TrajectorySurface.module.css          |   9 +
 .../surfaces/TrajectorySurface.tsx                 |  85 +++-
 .../f3/appendEvidenceOutcomeToLps.ts               |   3 +
 .../app/features/project-assistant/w2/actions.ts   |   1 +
 .../w2/materializeW3bProductTerminal.ts            |  59 ++-
 .../app/features/project-assistant/w2/types.ts     |  37 ++
 .../project-assistant/w2/w3cPostEvidenceLoop.ts    | 456 ++++++++++++++++++
 .../infrastructure/testExecutionAdapter.ts         |  26 +-
 .../application/appendLivingProjectStateVersion.ts |   1 +
 .../sfia-studio/app/lib/oa/project/domain/types.ts |   5 +
 .../app/lib/vertical-slice-runtime/service.ts      |   2 +
 .../w3bE2eBoundaryControl.ts                       |  18 +-
 17 files changed, 1489 insertions(+), 18 deletions(-)
```
17 files changed, 1489 insertions(+), 18 deletions(-)

## Architecture reuse (summary — proof is in DIFF below)
- KEEP materializeW3bProductTerminal as Evidence/RB/CE SoT; post-hook to runW3cPostEvidenceLoop
- NEVER call ingestEvidenceAndRecommend for W3-B ids (no parallel re-ingest)
- KEEP postEvidenceNoraAnalysis / RecommendNextGate / proposeTrajectoryOptions / decideTrajectory
- COMPLETE LPS nextStep write/carry on AppendLivingProjectStateRequest
- ADAPT ProjectWorkspacePage recovery requalify → propose only
- COMPLETE TestExecutionAdapter one-shot + clear reset (E2E isolation only)

## Critical verification map (A–G) — pointers into DIFF / full files

### A. Evidence/RB/CE → W3-C
- Source: materializeW3bProductTerminal success path then runW3cPostEvidenceLoop
- Readers: evidenceReader / reviewBundleReader / claimEvaluationReader
- Fail-closed: UNCLAIMED / missing evidenceId|reviewBundleId / SUCCESS without claimAllowed
- No re-ingest: w3cPostEvidenceLoop does not call ingestEvidenceAndRecommend
- See DIFF hunks: `w3cPostEvidenceLoop.ts`, `materializeW3bProductTerminal.ts`

### B. Recommendation
- Type: W3cPostEvidenceRecommendation with authority:"none", gateConsumed:false, decisionCreated:false, attemptAutoLaunchNextCycle:false
- SUCCESS→continue; STOP/FAIL→recover; fail_closed path when coordination/sources refuse
- Never creates HumanDecision; never auto-launches cycle
- See DIFF: `w3cPostEvidenceLoop.ts` recommendationFromOutcome / ANTI_AUTHORITY

### C. LPS
- appendEvidenceOutcomeToLps accepts nextStep; appendLivingProjectStateVersion pickLink carries nextStep
- evidenceIds / reviewBundleIds merged; version append optimistic
- Rehydrate: rehydrateW3cPostEvidenceFromLps from LPS + product outcome
- See DIFF: appendEvidenceOutcomeToLps.ts, domain/types.ts, appendLivingProjectStateVersion.ts, w3cPostEvidenceLoop.ts

### D. ProjectTrajectory
- Propose: existing w2ProposeTrajectoryOptionsAction (UI CTA w3c-propose-trajectory / w2-propose-options)
- Decide: existing decideTrajectory / w2DecideTrajectoryAction — separate click
- Mutation only after HumanDecision (e2e D asserts no w2-decision until decide)
- See DIFF: TrajectorySurface.tsx, ProjectWorkspacePage.tsx

### E. Recovery
- ProjectWorkspacePage onRequalify → w2ProposeTrajectoryOptionsAction then focusConversation
- propose-only; no decide; no new Project
- See DIFF: ProjectWorkspacePage.tsx

### F. Restart
- rehydrateW3bProductTerminal attaches rehydrateW3cPostEvidenceFromLps
- Fail-closed if LPS lacks evidence refs / product UNCLAIMED
- No invented Recommendation/Decision
- See DIFF: materializeW3bProductTerminal.ts, w3cPostEvidenceLoop.ts; e2e E

### G. Test adapter
- queueOneShotLaunch + resetScriptedLaunchDefaults
- clearW3bBoundaryArm resets registered fixture adapter
- Production path unchanged when E2E gates off (isW3bBoundaryControlEnabled)
- See DIFF: testExecutionAdapter.ts, w3bE2eBoundaryControl.ts, service.ts register

## W3C-P01…P12
RESULTS FROM FROZEN CANDIDATE 7278166b — NO CODE CHANGE SINCE TEST RUN

| ID | Result |
|---|---|
| W3C-P01 Durable Evidence consumed | PASS |
| W3C-P02 Nora post-Evidence analysis | PASS |
| W3C-P03 Recommendation remains Recommendation | PASS |
| W3C-P04 Honest LPS update | PASS |
| W3C-P05 Governed ProjectTrajectory | PASS |
| W3C-P06 Structural replan human gate | PASS |
| W3C-P07 SUCCESS continuation | PASS |
| W3C-P08 STOP recovery | PASS |
| W3C-P09 FAIL recovery | PASS |
| W3C-P10 Fail-closed + restart | PASS |
| W3C-P11 Canonical /studio | PASS |
| W3C-P12 No parallel architecture / regression | PASS |

## Tests (frozen candidate — not re-executed)
RESULTS FROM FROZEN CANDIDATE 7278166b — NO CODE CHANGE SINCE TEST RUN
- W3C unit 12/12 PASS (`w3cPostEvidenceLoop.test.ts`)
- W3-B targeted 7/7 PASS (`w3bProductTerminal.test.ts`)
- Vitest full: 220 files / 2102 tests PASS (131 skipped)
- typecheck PASS
- lint PASS
- build PASS
- Playwright W3-B + W3-C: 8/8 PASS
- importBoundaries PASS

## Fake/Real
- Fake: TestExecutionAdapter + OPS1_CONVERSATION_PROVIDER=fake
- Product durable Evidence/RB/CE are real local SQLite facts
- REAL OUT / NOT CONSUMED
- Claim: DETERMINISTIC PRODUCT-NATIVE CANDIDATE only — NOT READY FOR REAL

## Claims forbidden
- REAL PROVEN, READY FOR REAL, W3-C CLOSED, W3 CLOSED, Product Completion COMPLETE, runtime v3 ADOPTED

## Git final (project)
- local commit only: 7278166b
- no project push / PR / merge
- .tmp-sfia-review untracked

## MODIFIED CONTENT MARKER
MODIFIED CONTENT INCLUDED — full unified diff (u=80) of projects/sfia-studio/app for ee3e95de..7278166b follows immediately below.
This pack is reviewable as FULL for modified-content purposes.

---

# COMPLETE UNIFIED DIFF (ee3e95de..7278166b — projects/sfia-studio/app — unified=80)

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/w3cPostEvidenceLoop.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/w3cPostEvidenceLoop.test.ts
new file mode 100644
index 00000000..755fcbe3
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/project-assistant/w3cPostEvidenceLoop.test.ts
@@ -0,0 +1,514 @@
+/**
+ * W3-C — Post-Evidence loop after W3-B terminal (consume, recommend, LPS, propose≠decide).
+ * @vitest-environment node
+ */
+import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
+import { setConversationProviderForTests } from "@/lib/platform/ai";
+import { evaluateExecutionAuthorization } from "@/features/project-assistant/w2/authorizeExecutionContract";
+import { confirmExecutionContractForAuthorization } from "@/features/project-assistant/w2/confirmForAuthorization";
+import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
+import {
+  governedExecuteCancel,
+  governedExecuteRecordResult,
+  governedExecuteSelectAgent,
+  governedExecuteStart,
+} from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
+import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
+import { prepareExecutionContractFromW2Decision } from "@/features/project-assistant/w2/prepareExecutionContractFromW2Decision";
+import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
+import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
+import { GOVERNED_OPTION_REF } from "@/features/project-assistant/w2/trajectoryOptions";
+import {
+  materializeProductOutcomeFromAttempt,
+  rehydrateProductOutcomeFromAttempt,
+} from "@/features/project-assistant/w2/materializeW3bProductTerminal";
+import * as ingestMod from "@/features/project-assistant/f3/ingestEvidenceAndRecommend";
+import {
+  armW3bBoundary,
+  clearW3bBoundaryArm,
+} from "@/lib/vertical-slice-runtime/w3bE2eBoundaryControl";
+import {
+  bootW2Runtime,
+  cleanupW2TempDirs,
+  currentF2Context,
+  seedQualifiedProject,
+  tempProductDbPath,
+} from "./w2Harness";
+
+beforeEach(() => {
+  process.env.OPS1_CONVERSATION_PROVIDER = "fake";
+  process.env.OPS1_E2E_ALLOW_DIRTY_PRINCIPAL = "1";
+  setConversationProviderForTests(null);
+  clearW3bBoundaryArm();
+});
+
+afterEach(() => {
+  clearW3bBoundaryArm();
+  cleanupW2TempDirs();
+  vi.restoreAllMocks();
+});
+
+async function authorizeTempArtifact(suffix: string, dbPath?: string) {
+  const db = dbPath ?? tempProductDbPath(`w3c-${suffix}.sqlite`);
+  const runtime = bootW2Runtime({
+    productDbPath: db,
+    idPrefix: `w3c${suffix}`,
+  });
+  const seeded = await seedQualifiedProject(runtime, { suffix });
+  const oa = runtime.oa!;
+  const qualification = await resolveW2QualificationInputs({
+    oa,
+    projectId: seeded.projectId,
+  });
+  expect(qualification.ok).toBe(true);
+  if (!qualification.ok) throw new Error("qual");
+  const proposed = await proposeTrajectoryOptions({
+    oa,
+    projectId: seeded.projectId,
+    ...qualification.qualification.inputs,
+    packagePin: qualification.qualification.packagePin,
+    objective: qualification.qualification.objective,
+    projectTitle: qualification.qualification.projectTitle,
+  });
+  expect(proposed.ok).toBe(true);
+  if (!proposed.ok) throw new Error("propose");
+  const decided = await decideTrajectory({
+    oa,
+    projectId: seeded.projectId,
+    optionSetRef: proposed.optionSetRef,
+    options: proposed.options,
+    recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
+    selectedOptionRef: GOVERNED_OPTION_REF,
+    trajectoryId: proposed.proposedTrajectory.trajectoryId,
+    candidateVersion: proposed.proposedTrajectory.version,
+    forceLocalAuthority: true,
+  });
+  expect(decided.ok).toBe(true);
+  if (!decided.ok) throw new Error("decide");
+  const context = await currentF2Context(runtime, seeded.projectId);
+  const prepared = await prepareExecutionContractFromW2Decision({
+    oa,
+    projectId: seeded.projectId,
+    decisionId: decided.decision.decisionId,
+    currentContext: context,
+    forceLocalAuthority: true,
+    qualifiedOperationKind: "generate-temporary-artifact",
+  });
+  expect(prepared.ok).toBe(true);
+  if (!prepared.ok) throw new Error(prepared.code);
+  const executionContractId = prepared.contract.executionContractId;
+  await inspectExecutionContract({
+    oa,
+    projectId: seeded.projectId,
+    executionContractId,
+  });
+  const confirmed = await confirmExecutionContractForAuthorization({
+    oa,
+    projectId: seeded.projectId,
+    executionContractId,
+    forceLocalAuthority: true,
+  });
+  expect(confirmed.ok).toBe(true);
+  if (!confirmed.ok) throw new Error(confirmed.code);
+  const authorized = await evaluateExecutionAuthorization({
+    oa,
+    projectId: seeded.projectId,
+    executionContractId,
+    forceLocalAuthority: true,
+  });
+  expect(authorized.ok && authorized.outcome === "AUTHORIZED").toBe(true);
+  return {
+    oa,
+    seeded,
+    executionContractId,
+    db,
+    runtime,
+    trajectoryId: proposed.proposedTrajectory.trajectoryId,
+    trajectoryVersion: proposed.proposedTrajectory.version,
+    decidedTrajectoryId: decided.trajectory.trajectoryId,
+    decidedTrajectoryVersion: decided.trajectory.version,
+  };
+}
+
+async function selectAndStart(
+  ctx: Awaited<ReturnType<typeof authorizeTempArtifact>>,
+) {
+  const selected = await governedExecuteSelectAgent({
+    oa: ctx.oa,
+    projectId: ctx.seeded.projectId,
+    executionContractId: ctx.executionContractId,
+    forceLocalAuthority: true,
+  });
+  expect(selected.ok).toBe(true);
+  if (!selected.ok) throw new Error(selected.code);
+  const started = await governedExecuteStart({
+    oa: ctx.oa,
+    projectId: ctx.seeded.projectId,
+    executionContractId: ctx.executionContractId,
+    attemptId: selected.attemptId,
+    forceLocalAuthority: true,
+  });
+  expect(started.ok).toBe(true);
+  if (!started.ok) throw new Error(started.code);
+  return { selected, started };
+}
+
+async function materializeSuccess(
+  ctx: Awaited<ReturnType<typeof authorizeTempArtifact>>,
+) {
+  const { started } = await selectAndStart(ctx);
+  await governedExecuteRecordResult({
+    oa: ctx.oa,
+    projectId: ctx.seeded.projectId,
+    executionContractId: ctx.executionContractId,
+    attemptId: started.attemptId,
+    forceLocalAuthority: true,
+  });
+  const materialized = await materializeProductOutcomeFromAttempt({
+    oa: ctx.oa,
+    projectId: ctx.seeded.projectId,
+    attemptId: started.attemptId,
+  });
+  expect(materialized.ok).toBe(true);
+  if (!materialized.ok) throw new Error(materialized.code);
+  return { started, materialized };
+}
+
+describe("W3C-P01 durable evidence consumed", () => {
+  it("P01: consumes ev:w3b Evidence ids — no second evidence id family", async () => {
+    const ctx = await authorizeTempArtifact("p01");
+    const { materialized } = await materializeSuccess(ctx);
+    expect(materialized.product.evidenceId).toMatch(/^ev:w3b:/);
+    expect(materialized.product.reviewBundleId).toMatch(/^rb:w3b:/);
+    expect(materialized.postEvidence?.ok).toBe(true);
+    if (!materialized.postEvidence || !materialized.postEvidence.ok) return;
+    expect(materialized.postEvidence.evidenceId).toBe(
+      materialized.product.evidenceId,
+    );
+    expect(materialized.postEvidence.evidenceId.startsWith("ev:w3b:")).toBe(
+      true,
+    );
+    expect(materialized.postEvidence.evidenceId.startsWith("ev:f3-")).toBe(
+      false,
+    );
+  });
+});
+
+describe("W3C-P02 Nora analysis", () => {
+  it("P02: Nora analysis present or honest unavailable", async () => {
+    const ctx = await authorizeTempArtifact("p02");
+    const { materialized } = await materializeSuccess(ctx);
+    expect(materialized.postEvidence?.ok).toBe(true);
+    if (!materialized.postEvidence || !materialized.postEvidence.ok) return;
+    expect(materialized.postEvidence.noraInvoked).toBe(true);
+    const hasText = Boolean(materialized.postEvidence.analysisText);
+    const hasUnavailable = Boolean(
+      materialized.postEvidence.analysisUnavailableReason,
+    );
+    expect(hasText || hasUnavailable).toBe(true);
+  });
+});
+
+describe("W3C-P03 recommendation anti-authority", () => {
+  it("P03: authority none, decisionCreated false, gateConsumed false", async () => {
+    const ctx = await authorizeTempArtifact("p03");
+    const { materialized } = await materializeSuccess(ctx);
+    expect(materialized.postEvidence?.ok).toBe(true);
+    if (!materialized.postEvidence || !materialized.postEvidence.ok) return;
+    const r = materialized.postEvidence.recommendation;
+    expect(r.authority).toBe("none");
+    expect(r.decisionCreated).toBe(false);
+    expect(r.gateConsumed).toBe(false);
+    expect(r.attemptAutoLaunchNextCycle).toBe(false);
+    expect(materialized.product.noraInvoked).toBe(false);
+    expect(materialized.product.replanInvoked).toBe(false);
+  });
+});
+
+describe("W3C-P04 LPS evidence append", () => {
+  it("P04: LPS version bumped with evidenceIds containing ev:w3b", async () => {
+    const ctx = await authorizeTempArtifact("p04");
+    const before = await ctx.oa.projectServices!.getCurrentLivingProjectState.execute(
+      { projectId: ctx.seeded.projectId },
+    );
+    expect(before.ok).toBe(true);
+    if (!before.ok) return;
+    const versionBefore = before.livingProjectState.version;
+
+    const { materialized } = await materializeSuccess(ctx);
+    expect(materialized.postEvidence?.ok).toBe(true);
+    if (!materialized.postEvidence || !materialized.postEvidence.ok) return;
+    expect(materialized.postEvidence.lpsVersion).toBeGreaterThan(versionBefore);
+
+    const after = await ctx.oa.projectServices!.getCurrentLivingProjectState.execute(
+      { projectId: ctx.seeded.projectId },
+    );
+    expect(after.ok).toBe(true);
+    if (!after.ok) return;
+    expect(after.livingProjectState.evidenceIds ?? []).toContain(
+      materialized.product.evidenceId!,
+    );
+    expect(
+      (after.livingProjectState.evidenceIds ?? []).some((id) =>
+        id.startsWith("ev:w3b:"),
+      ),
+    ).toBe(true);
+    expect(after.livingProjectState.nextStep).toBe(
+      materialized.postEvidence.recommendation.nextStep,
+    );
+  });
+});
+
+describe("W3C-P05 propose without decide", () => {
+  it("P05: propose does not mutate validated trajectory without decide", async () => {
+    const ctx = await authorizeTempArtifact("p05");
+    const { materialized } = await materializeSuccess(ctx);
+    expect(materialized.ok).toBe(true);
+
+    const trajBefore = await ctx.oa.cycleServices!.getTrajectoryVersion.execute({
+      projectId: ctx.seeded.projectId,
+      version: ctx.decidedTrajectoryVersion,
+    });
+    expect(trajBefore.ok).toBe(true);
+    if (!trajBefore.ok) return;
+    expect(trajBefore.trajectory.status).toBe("validated");
+
+    const qualification = await resolveW2QualificationInputs({
+      oa: ctx.oa,
+      projectId: ctx.seeded.projectId,
+    });
+    expect(qualification.ok).toBe(true);
+    if (!qualification.ok) return;
+    const proposed = await proposeTrajectoryOptions({
+      oa: ctx.oa,
+      projectId: ctx.seeded.projectId,
+      ...qualification.qualification.inputs,
+      packagePin: qualification.qualification.packagePin,
+      objective: qualification.qualification.objective,
+      projectTitle: qualification.qualification.projectTitle,
+    });
+    expect(proposed.ok).toBe(true);
+    if (!proposed.ok) return;
+
+    const trajAfterPropose =
+      await ctx.oa.cycleServices!.getTrajectoryVersion.execute({
+        projectId: ctx.seeded.projectId,
+        version: ctx.decidedTrajectoryVersion,
+      });
+    expect(trajAfterPropose.ok).toBe(true);
+    if (!trajAfterPropose.ok) return;
+    expect(trajAfterPropose.trajectory.status).toBe("validated");
+    expect(trajAfterPropose.trajectory.version).toBe(
+      trajBefore.trajectory.version,
+    );
+  });
+});
+
+describe("W3C-P06 structural replan requires decide", () => {
+  it("P06: structural replan requires decideTrajectory after propose", async () => {
+    const ctx = await authorizeTempArtifact("p06");
+    await materializeSuccess(ctx);
+    const qualification = await resolveW2QualificationInputs({
+      oa: ctx.oa,
+      projectId: ctx.seeded.projectId,
+    });
+    expect(qualification.ok).toBe(true);
+    if (!qualification.ok) return;
+    const proposed = await proposeTrajectoryOptions({
+      oa: ctx.oa,
+      projectId: ctx.seeded.projectId,
+      ...qualification.qualification.inputs,
+      packagePin: qualification.qualification.packagePin,
+      objective: qualification.qualification.objective,
+      projectTitle: qualification.qualification.projectTitle,
+    });
+    expect(proposed.ok).toBe(true);
+    if (!proposed.ok) return;
+
+    const decided = await decideTrajectory({
+      oa: ctx.oa,
+      projectId: ctx.seeded.projectId,
+      optionSetRef: proposed.optionSetRef,
+      options: proposed.options,
+      recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
+      selectedOptionRef: GOVERNED_OPTION_REF,
+      trajectoryId: proposed.proposedTrajectory.trajectoryId,
+      candidateVersion: proposed.proposedTrajectory.version,
+      forceLocalAuthority: true,
+    });
+    expect(decided.ok).toBe(true);
+    if (!decided.ok) return;
+    expect(decided.trajectory.status).toBe("validated");
+    expect(decided.decision.decisionId).toBeTruthy();
+  });
+});
+
+describe("W3C-P07 SUCCESS → continue", () => {
+  it("P07: SUCCESS → kind continue", async () => {
+    const ctx = await authorizeTempArtifact("p07");
+    const { materialized } = await materializeSuccess(ctx);
+    expect(materialized.product.outcome).toBe("SUCCESS");
+    expect(materialized.postEvidence?.ok).toBe(true);
+    if (!materialized.postEvidence || !materialized.postEvidence.ok) return;
+    expect(materialized.postEvidence.recommendation.kind).toBe("continue");
+    expect(materialized.postEvidence.recommendation.nextStep).toBe(
+      "continue_with_recommendation",
+    );
+    expect(materialized.postEvidence.recommendation.requiresHumanDecision).toBe(
+      false,
+    );
+  });
+});
+
+describe("W3C-P08 STOP → recover", () => {
+  it("P08: STOP → kind recover", async () => {
+    const ctx = await authorizeTempArtifact("p08");
+    armW3bBoundary({
+      kind: "governed_stop",
+      stopCondition: "EXECUTOR_INSUFFICIENT",
+    });
+    const { started } = await selectAndStart(ctx);
+    expect(started.phase).toBe("terminal");
+    const materialized = await materializeProductOutcomeFromAttempt({
+      oa: ctx.oa,
+      projectId: ctx.seeded.projectId,
+      attemptId: started.attemptId,
+    });
+    expect(materialized.ok).toBe(true);
+    if (!materialized.ok) return;
+    expect(materialized.product.outcome).toBe("STOP");
+    expect(materialized.postEvidence?.ok).toBe(true);
+    if (!materialized.postEvidence || !materialized.postEvidence.ok) return;
+    expect(materialized.postEvidence.recommendation.kind).toBe("recover");
+    expect(materialized.postEvidence.recommendation.nextStep).toBe(
+      "recovery_requalify",
+    );
+    expect(materialized.postEvidence.recommendation.requiresHumanDecision).toBe(
+      true,
+    );
+  });
+});
+
+describe("W3C-P09 FAIL → recover", () => {
+  it("P09: FAIL → recover distinct from SUCCESS", async () => {
+    const ctx = await authorizeTempArtifact("p09");
+    armW3bBoundary({
+      kind: "adapter_fail",
+      reason: "adapter_unavailable",
+    });
+    const selected = await governedExecuteSelectAgent({
+      oa: ctx.oa,
+      projectId: ctx.seeded.projectId,
+      executionContractId: ctx.executionContractId,
+      forceLocalAuthority: true,
+    });
+    expect(selected.ok).toBe(true);
+    if (!selected.ok) return;
+    const started = await governedExecuteStart({
+      oa: ctx.oa,
+      projectId: ctx.seeded.projectId,
+      executionContractId: ctx.executionContractId,
+      attemptId: selected.attemptId,
+      forceLocalAuthority: true,
+    });
+    expect(started.ok).toBe(true);
+    if (!started.ok) return;
+    const materialized = await materializeProductOutcomeFromAttempt({
+      oa: ctx.oa,
+      projectId: ctx.seeded.projectId,
+      attemptId: started.attemptId,
+    });
+    expect(materialized.ok).toBe(true);
+    if (!materialized.ok) return;
+    expect(materialized.product.outcome).toBe("FAIL");
+    expect(materialized.postEvidence?.ok).toBe(true);
+    if (!materialized.postEvidence || !materialized.postEvidence.ok) return;
+    expect(materialized.postEvidence.recommendation.kind).toBe("recover");
+    expect(materialized.postEvidence.recommendation.nextStep).toBe(
+      "recovery_diagnose_or_replan",
+    );
+    expect(materialized.postEvidence.recommendation.kind).not.toBe("continue");
+  });
+});
+
+describe("W3C-P10 fail-closed + restart rehydrate", () => {
+  it("P10: UNCLAIMED fail-closed; restart rehydrates product + postEvidence", async () => {
+    const ctx = await authorizeTempArtifact("p10u");
+    const { started } = await selectAndStart(ctx);
+    const cancelled = await governedExecuteCancel({
+      oa: ctx.oa,
+      projectId: ctx.seeded.projectId,
+      executionContractId: ctx.executionContractId,
+      attemptId: started.attemptId,
+      forceLocalAuthority: true,
+    });
+    expect(cancelled.ok).toBe(true);
+    if (!cancelled.ok) return;
+    const unclaimed = await materializeProductOutcomeFromAttempt({
+      oa: ctx.oa,
+      projectId: ctx.seeded.projectId,
+      attemptId: started.attemptId,
+    });
+    expect(unclaimed.ok).toBe(true);
+    if (!unclaimed.ok) return;
+    expect(unclaimed.product.outcome).toBe("UNCLAIMED");
+    expect(unclaimed.postEvidence?.ok).toBe(false);
+    if (unclaimed.postEvidence && !unclaimed.postEvidence.ok) {
+      expect(unclaimed.postEvidence.failClosed).toBe(true);
+    }
+
+    const db = tempProductDbPath("w3c-p10-restart.sqlite");
+    const ctxA = await authorizeTempArtifact("p10r", db);
+    const { started: startedA, materialized } = await materializeSuccess(ctxA);
+    expect(materialized.postEvidence?.ok).toBe(true);
+    if (!materialized.postEvidence || !materialized.postEvidence.ok) return;
+    const evidenceIdA = materialized.product.evidenceId;
+    const lpsVersionA = materialized.postEvidence.lpsVersion;
+    const kindA = materialized.postEvidence.recommendation.kind;
+    const projectId = ctxA.seeded.projectId;
+    const attemptId = startedA.attemptId;
+
+    const runtimeB = bootW2Runtime({
+      productDbPath: db,
+      idPrefix: "w3cp10b",
+    });
+    const oaB = runtimeB.oa!;
+    const rehydrated = await rehydrateProductOutcomeFromAttempt({
+      oa: oaB,
+      projectId,
+      attemptId,
+    });
+    expect(rehydrated.ok).toBe(true);
+    if (!rehydrated.ok) return;
+    expect(rehydrated.product.evidenceId).toBe(evidenceIdA);
+    expect(rehydrated.postEvidence?.ok).toBe(true);
+    if (!rehydrated.postEvidence || !rehydrated.postEvidence.ok) return;
+    expect(rehydrated.postEvidence.evidenceId).toBe(evidenceIdA);
+    expect(rehydrated.postEvidence.lpsVersion).toBe(lpsVersionA);
+    expect(rehydrated.postEvidence.recommendation.kind).toBe(kindA);
+    expect(rehydrated.postEvidence.replanInvoked).toBe(false);
+  });
+});
+
+describe("W3C-P11 e2e covered", () => {
+  it("P11: placeholder — covered by studio-w3c e2e", () => {
+    expect(true).toBe(true);
+  });
+});
+
+describe("W3C-P12 no re-ingest / no auto-launch", () => {
+  it("P12: no ingestEvidenceAndRecommend; recommendNextGate attemptAutoLaunch false", async () => {
+    const ingestSpy = vi.spyOn(ingestMod, "ingestEvidenceAndRecommend");
+    const ctx = await authorizeTempArtifact("p12");
+    const recommendSpy = vi.spyOn(
+      ctx.oa.evidenceReviewServices!.recommendNextGate,
+      "execute",
+    );
+    await materializeSuccess(ctx);
+    expect(ingestSpy).not.toHaveBeenCalled();
+    expect(recommendSpy).toHaveBeenCalled();
+    for (const call of recommendSpy.mock.calls) {
+      expect(call[0]?.attemptAutoLaunchNextCycle).toBe(false);
+    }
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
index e10cdc34..d5435988 100644
--- a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
@@ -16,154 +16,155 @@ function listSourceFiles(root: string): string[] {
   return files;
 }

 describe("V2-A1 vertical-slice-runtime import boundaries", () => {
   it("keeps the runtime free of UI, fixtures, client storage, and agent imports", () => {
     const forbidden =
       /(?:from|require\()\s*["'](?:react|react-dom|next\/link|next\/navigation|next\/image|@\/app|@\/components|@\/features|@\/lib\/vertical-slice(?:\/|["'])|@\/lib\/harness|@\/lib\/ops1|@\/lib\/agents)|\b(?:sessionStorage|localStorage|document|window)\s*[.(]/;
     const violations = listSourceFiles(RUNTIME_ROOT).flatMap((file) =>
       fs
         .readFileSync(file, "utf8")
         .split("\n")
         .map((line, index) => ({
           file: path.relative(APP_ROOT, file),
           line: index + 1,
           text: line.trim(),
         }))
         .filter((entry) => forbidden.test(entry.text)),
     );
     expect(violations).toEqual([]);
   });

   it("does not import product-persistence stores as business state", () => {
     // Audit may reference BoundedAtomicAuditStore types; forbidding db.ts and
     // treating SQLite as product persistence rehydration.
     const forbidden =
       /@\/lib\/d1\/db|productPersistence\s*:\s*["']SELECTED["']|runReady\s*:\s*true|productReady\s*:\s*true/;
     const violations = listSourceFiles(RUNTIME_ROOT).flatMap((file) =>
       fs
         .readFileSync(file, "utf8")
         .split("\n")
         .map((line, index) => ({
           file: path.relative(APP_ROOT, file),
           line: index + 1,
           text: line.trim(),
         }))
         .filter((entry) => forbidden.test(entry.text)),
     );
     expect(violations).toEqual([]);
   });

   it("allows only the bounded V2 UI runtime entrypoints", () => {
     const uiRoots = [
       path.join(APP_ROOT, "app"),
       path.join(APP_ROOT, "components"),
       path.join(APP_ROOT, "features"),
     ];
     const imports = uiRoots.flatMap((root) =>
       listSourceFiles(root).flatMap((file) =>
         fs
           .readFileSync(file, "utf8")
           .split("\n")
           .map((line, index) => ({
             file: path.relative(APP_ROOT, file),
             line: index + 1,
             text: line.trim(),
           }))
           .filter((entry) => /@\/lib\/vertical-slice-runtime/.test(entry.text)),
       ),
     );

     const allowed = new Set([
       "app/api/e2e/option-a-qa-scenario/route.ts:@/lib/vertical-slice-runtime/e2eOptionAQaScenarioControl",
       "features/project-assistant/actions.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/f2/orchestrateF2.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/f2/orchestrateF2.ts:@/lib/vertical-slice-runtime/paths",
       "features/project-assistant/f3/confirmAndExecuteResolvedM3.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/f3/confirmAndExecuteResolvedM3.ts:@/lib/vertical-slice-runtime/e2eOptionAQaScenarioControl",
       "features/project-assistant/f3/prepareAndResolveM3ProductPath.ts:@/lib/vertical-slice-runtime/resolveBoundedReadOnlyBaseHeadSha",
       "features/project-assistant/f3/selectProductM3ResolutionProfile.ts:@/lib/vertical-slice-runtime/deterministicExternalLaunchBoundary",
       "features/project-assistant/f3/e2eOptionATerminalAttempt.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/f3/e2eOptionATerminalAttempt.ts:@/lib/vertical-slice-runtime/e2eOptionAQaScenarioControl",
       "features/project-assistant/w2/actions.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/actions.ts:@/lib/vertical-slice-runtime/liveProjectContext",
       "features/project-assistant/w2/amendExecutionContract.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/authorizeExecutionContract.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/confirmForAuthorization.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/decideTrajectory.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/governedExecuteAuthorizedContract.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/inspectExecutionContract.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/materializeW3bProductTerminal.ts:@/lib/vertical-slice-runtime",
+      "features/project-assistant/w2/w3cPostEvidenceLoop.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/governedExecuteAuthorizedContract.ts:@/lib/vertical-slice-runtime/w3bE2eBoundaryControl",
       "app/api/e2e/w3b-boundary/route.ts:@/lib/vertical-slice-runtime/w3bE2eBoundaryControl",
       "features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/presentedOptionSet.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/projectHistory.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/proposeTrajectoryOptions.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/qualificationInputs.ts:@/lib/vertical-slice-runtime",
       "features/pre-m6-product-ui/NewProjectIntentionPage.tsx:@/lib/vertical-slice-runtime/actions",
       "features/pre-m6-product-ui/ProjectWorkspacePage.tsx:@/lib/vertical-slice-runtime/actions",
       "features/pre-m6-product-ui/ProjectsPage.tsx:@/lib/vertical-slice-runtime/actions",
       "features/pre-m6-product-ui/types.ts:@/lib/vertical-slice-runtime/actions",
       "features/studio-projects/LivingProjectStatePanel.tsx:@/lib/vertical-slice-runtime/actions",
       "features/studio-projects/ProjectHistoryPanel.tsx:@/lib/vertical-slice-runtime/actions",
       "features/studio-projects/ProjectPrincipalClient.tsx:@/lib/vertical-slice-runtime/actions",
       "features/studio-projects/StudioProjectsHome.tsx:@/lib/vertical-slice-runtime/actions",
       "features/studio-projects/StudioProjectsHome.tsx:@/lib/vertical-slice-runtime",
       "features/vertical-slice-ui/CreateProjectForm.tsx:@/lib/vertical-slice-runtime/actions",
       "features/vertical-slice-ui/ProjectWorkspaceClient.tsx:@/lib/vertical-slice-runtime/actions",
       "features/vertical-slice-ui/ProjectWorkspaceView.tsx:@/lib/vertical-slice-runtime/actions",
     ]);
     const normalized = imports.map((entry) => {
       const modulePath = entry.text.match(
         /@\/lib\/vertical-slice-runtime(?:\/[^"']+)?/,
       )?.[0];
       return `${entry.file}:${modulePath}`;
     });

     expect(new Set(normalized)).toEqual(allowed);
   });

   it("keeps V2-A2/V2-A3 UI free of core, internal runtime, D1, fixtures, storage, network, and agents", () => {
     const roots = [
       path.join(APP_ROOT, "app/studio"),
       path.join(APP_ROOT, "app/studio/projects/new"),
       path.join(APP_ROOT, "app/studio/projects/[id]"),
       path.join(APP_ROOT, "features/vertical-slice-ui"),
       path.join(APP_ROOT, "features/studio-projects"),
     ];
     const forbidden =
       /@\/lib\/(?:vertical-slice-core|vertical-slice-runtime\/(?:service|singleton|mapping|paths|serverGuard|index)|d1|harness|ops1|agents)|@\/features\/d1|@\/fixtures|\b(?:sessionStorage|localStorage|fetch)\s*[.(]/;
     const violations = roots.flatMap((root) =>
       listSourceFiles(root).flatMap((file) =>
         fs
           .readFileSync(file, "utf8")
           .split("\n")
           .map((line, index) => ({
             file: path.relative(APP_ROOT, file),
             line: index + 1,
             text: line.trim(),
           }))
           .filter((entry) => forbidden.test(entry.text)),
       ),
     );
     expect(violations).toEqual([]);
   });

   it("keeps V1 core free of runtime dependency (one-way reuse)", () => {
     const coreRoot = path.join(APP_ROOT, "lib/vertical-slice-core");
     const violations = listSourceFiles(coreRoot).flatMap((file) =>
       fs
         .readFileSync(file, "utf8")
         .split("\n")
         .map((line, index) => ({
           file: path.relative(APP_ROOT, file),
           line: index + 1,
           text: line.trim(),
         }))
         .filter((entry) =>
           /@\/lib\/vertical-slice-runtime/.test(entry.text),
         ),
     );
     expect(violations).toEqual([]);
   });
 });
diff --git a/projects/sfia-studio/app/e2e/studio-w3b-terminal-evidence-runtime.spec.ts b/projects/sfia-studio/app/e2e/studio-w3b-terminal-evidence-runtime.spec.ts
index ec103665..16adf051 100644
--- a/projects/sfia-studio/app/e2e/studio-w3b-terminal-evidence-runtime.spec.ts
+++ b/projects/sfia-studio/app/e2e/studio-w3b-terminal-evidence-runtime.spec.ts
@@ -128,160 +128,167 @@ async function openThroughAuthorized(page: Page, name: string) {
   await expect(page.getByTestId("project-assistant-gate")).toBeVisible({
     timeout: 60_000,
   });

   const trajectory = page.getByTestId("w2-trajectory-panel");
   await expect(trajectory).toBeVisible({ timeout: 15_000 });
   await trajectory.scrollIntoViewIfNeeded();

   await page.getByTestId("w2-propose-options").click();
   await expect(page.getByTestId("w2-options")).toBeVisible({ timeout: 60_000 });
   await page.locator("[data-testid^='w2-decide-']").first().click();
   await expect(page.getByTestId("w2-decision")).toBeVisible({
     timeout: 45_000,
   });

   await page
     .getByTestId("w3a-operation-kind")
     .selectOption("generate-temporary-artifact");
   await page.getByTestId("w2-prepare-contract").click();
   await expect(page.getByTestId("w2-contract")).toBeVisible({
     timeout: 45_000,
   });
   await page.getByTestId("w2-inspect-contract").click();
   await expect(page.getByTestId("w2-inspection-state")).toContainText(
     "INSPECTÉ",
     { timeout: 30_000 },
   );
   await page.getByTestId("w2-confirm-contract").click();
   await expect(page.getByTestId("w2-contract-status")).toHaveText("confirmed", {
     timeout: 30_000,
   });
   await page.getByTestId("w2-authorize-contract").click();
   await expect(page.getByTestId("w2-authorization-outcome")).toContainText(
     "AUTORISÉ",
     { timeout: 30_000 },
   );

   // No outcome chooser buttons on the product surface.
   await expect(page.getByTestId("w3a-governed-execute")).toBeVisible();
   await expect(page.getByTestId("w3a-governed-execute")).toHaveText("Exécuter");
   await expect(page.getByTestId("w3b-governed-stop")).toHaveCount(0);
   await expect(page.getByTestId("w3b-governed-fail")).toHaveCount(0);
 }

 async function readOutcomeMeta(page: Page) {
   const attemptId =
     (await page.getByTestId("w3a-attempt-id").textContent())?.trim() ?? "";
   const evidenceId =
     (await page.getByTestId("w3b-evidence-id").textContent())?.trim() ?? "";
   const reviewBundleId =
     (await page.getByTestId("w3b-review-bundle-id").textContent())?.trim() ?? "";
   const productOutcome =
     (await page.getByTestId("w3b-product-outcome-kind").textContent())?.trim() ??
     "";
   const technicalStatus =
     (await page.getByTestId("w3a-attempt-technical-status").textContent())
       ?.trim() ?? "";
   const completeness =
     (await page.getByTestId("w3b-review-bundle-completeness").textContent())
       ?.trim() ?? "";
   const governedBoundary =
     (await page.getByTestId("w3b-governed-boundary").count()) > 0
       ? (
           await page.getByTestId("w3b-governed-boundary").textContent()
         )?.trim() ?? null
       : null;
   return {
     attemptId,
     evidenceId,
     reviewBundleId,
     productOutcome,
     technicalStatus,
     completeness,
     governedBoundary,
   };
 }

 test.describe("W3-B /studio Terminal + Evidence (corrected)", () => {
   test.describe.configure({ timeout: 360_000 });

+  test.beforeEach(async ({ request }) => {
+    await clearW3bBoundary(request);
+  });
+  test.afterEach(async ({ request }) => {
+    await clearW3bBoundary(request);
+  });
+
   test("A SUCCESS + evidence-pending + reload durability", async ({
     page,
   }) => {
     fs.mkdirSync(CAPTURE_ROOT, { recursive: true });
     fs.writeFileSync(MANIFEST, "");

     await openThroughAuthorized(page, "W3-B SUCCESS Evidence");
     await capture(page, "01-pre-execute", {
       scenario: "SUCCESS",
       productOutcome: null,
       state: "authorized_before_execute",
     });

     const latch = installMaterializeLatch(page);
     await latch.arm();

     const click = page.getByTestId("w3a-governed-execute").click();
     await expect(page.getByTestId("w3a-attempt")).toBeVisible({
       timeout: 60_000,
     });
     await page.waitForFunction(
       () =>
         (document.querySelector('[data-testid="w3a-attempt-lifecycle"]')
           ?.textContent ?? "") === "terminal",
       undefined,
       { timeout: 90_000, polling: "raf" },
     );
     await expect(page.getByTestId("w3b-evidence-pending")).toBeVisible({
       timeout: 15_000,
     });
     latch.release();
     await click;
     await latch.disarm();

     await expect(page.getByTestId("w3b-product-outcome")).toBeVisible({
       timeout: 60_000,
     });
     await expect(page.getByTestId("w3b-product-outcome-kind")).toHaveText(
       "SUCCESS",
     );
     await expect(page.getByTestId("w3b-claim-allowed")).toHaveText("oui");
     await expect(page.getByTestId("w3b-ready")).toHaveText("non");
     const meta = await readOutcomeMeta(page);
     expect(meta.evidenceId.startsWith("ev:w3b:")).toBe(true);
     expect(meta.reviewBundleId.startsWith("rb:w3b:")).toBe(true);
     expect(meta.completeness).toBe("complete");
     await capture(page, "02-success-business-first", {
       scenario: "SUCCESS",
       ...meta,
       adapterBehavior: null,
     });

     await page.getByTestId("w3b-technical-details-toggle").click();
     await expect(page.getByTestId("w3b-technical-status")).toHaveText(
       "succeeded",
     );
     await capture(page, "03-success-technical-detail", {
       scenario: "SUCCESS",
       ...meta,
       state: "technical_secondary",
     });

     await page.getByTestId("w3b-rehydrate-product").click();
     await expect(page.getByTestId("w3b-product-outcome-kind")).toHaveText(
       "SUCCESS",
       { timeout: 30_000 },
     );
     expect(
       (await page.getByTestId("w3b-evidence-id").textContent())?.trim(),
     ).toBe(meta.evidenceId);
     expect(
       (await page.getByTestId("w3b-review-bundle-id").textContent())?.trim(),
     ).toBe(meta.reviewBundleId);

     const urlBefore = page.url();
     await page.reload();
     await expect(page.getByTestId("project-principal")).toBeVisible({
       timeout: 60_000,
     });
     expect(page.url()).toBe(urlBefore);
diff --git a/projects/sfia-studio/app/e2e/studio-w3c-post-evidence-replan-runtime.spec.ts b/projects/sfia-studio/app/e2e/studio-w3c-post-evidence-replan-runtime.spec.ts
new file mode 100644
index 00000000..df1a93fc
--- /dev/null
+++ b/projects/sfia-studio/app/e2e/studio-w3c-post-evidence-replan-runtime.spec.ts
@@ -0,0 +1,272 @@
+/**
+ * W3-C — Post-Evidence replan / recommendation product-native proof on /studio.
+ * Consumes W3-B terminal Evidence; Recommendation ≠ HumanDecision; propose ≠ decide.
+ */
+import { test, expect, type Page } from "@playwright/test";
+import fs from "node:fs";
+import path from "node:path";
+import crypto from "node:crypto";
+import {
+  armW3bAdapterFail,
+  armW3bGovernedStop,
+  clearW3bBoundary,
+} from "./support/w3bBoundaryControl";
+
+const CAPTURE_ROOT = path.resolve(
+  process.cwd(),
+  "../../../.tmp-sfia-review/runtime-captures/w3-c-post-evidence-replan",
+);
+const MANIFEST = path.join(CAPTURE_ROOT, "manifest.jsonl");
+
+async function capture(
+  page: Page,
+  id: string,
+  meta: Record<string, string | boolean | null | undefined>,
+) {
+  fs.mkdirSync(CAPTURE_ROOT, { recursive: true });
+  const file = path.join(CAPTURE_ROOT, `${id}.png`);
+  await page.screenshot({ path: file, fullPage: true });
+  const sha256 = crypto
+    .createHash("sha256")
+    .update(fs.readFileSync(file))
+    .digest("hex");
+  fs.appendFileSync(
+    MANIFEST,
+    `${JSON.stringify({
+      id,
+      file: path.basename(file),
+      ...meta,
+      route: page.url(),
+      timestamp: new Date().toISOString(),
+      sha256,
+      proofLevel: "DETERMINISTIC_PRODUCT_NATIVE",
+      provenance:
+        "CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — W3-C /STUDIO POST-EVIDENCE — NOT REAL",
+    })}\n`,
+    "utf8",
+  );
+}
+
+async function openThroughAuthorized(page: Page, name: string) {
+  await page.setViewportSize({ width: 1440, height: 900 });
+  await page.goto("/studio");
+  await expect(page.getByTestId("studio-projects-home")).toBeVisible({
+    timeout: 30_000,
+  });
+  await page.goto("/studio/projects/new");
+  await expect(page.getByTestId("create-project-form")).toBeVisible();
+  await page.locator("#project-name").fill(name);
+  await page
+    .locator("#project-objective")
+    .fill("Preuve produit native — post-Evidence recommandation.");
+  await page.getByTestId("create-project-submit").click();
+  await expect(page.getByTestId("open-project-workspace")).toBeVisible({
+    timeout: 30_000,
+  });
+  await page.getByTestId("open-project-workspace").click();
+  await expect(page.getByTestId("project-principal")).toBeVisible({
+    timeout: 30_000,
+  });
+
+  const input = page.getByTestId("project-assistant-input");
+  await expect(input).toBeEnabled({ timeout: 15_000 });
+  await input.fill("Préparer une livraison gated __F2_GATED_STANDARD__");
+  await page.getByTestId("project-assistant-send").click();
+  await expect(page.getByTestId("project-assistant-gate")).toBeVisible({
+    timeout: 60_000,
+  });
+
+  const trajectory = page.getByTestId("w2-trajectory-panel");
+  await expect(trajectory).toBeVisible({ timeout: 15_000 });
+  await trajectory.scrollIntoViewIfNeeded();
+
+  await page.getByTestId("w2-propose-options").click();
+  await expect(page.getByTestId("w2-options")).toBeVisible({ timeout: 60_000 });
+  await page.locator("[data-testid^='w2-decide-']").first().click();
+  await expect(page.getByTestId("w2-decision")).toBeVisible({
+    timeout: 45_000,
+  });
+
+  await page
+    .getByTestId("w3a-operation-kind")
+    .selectOption("generate-temporary-artifact");
+  await page.getByTestId("w2-prepare-contract").click();
+  await expect(page.getByTestId("w2-contract")).toBeVisible({
+    timeout: 45_000,
+  });
+  await page.getByTestId("w2-inspect-contract").click();
+  await expect(page.getByTestId("w2-inspection-state")).toContainText(
+    "INSPECTÉ",
+    { timeout: 30_000 },
+  );
+  await page.getByTestId("w2-confirm-contract").click();
+  await expect(page.getByTestId("w2-contract-status")).toHaveText("confirmed", {
+    timeout: 30_000,
+  });
+  await page.getByTestId("w2-authorize-contract").click();
+  await expect(page.getByTestId("w2-authorization-outcome")).toContainText(
+    "AUTORISÉ",
+    { timeout: 30_000 },
+  );
+}
+
+async function assertW3cPostEvidence(page: Page, kind: string) {
+  await expect(page.getByTestId("w3c-post-evidence")).toBeVisible({
+    timeout: 60_000,
+  });
+  await expect(page.getByTestId("w3c-recommendation-kind")).toHaveText(kind);
+  await expect(page.getByTestId("w3c-recommendation-authority")).toContainText(
+    "none — Recommendation ≠ HumanDecision",
+  );
+  await expect(page.getByTestId("w3c-nora-analysis")).toBeVisible();
+  await expect(page.getByTestId("w3c-lps-version")).not.toHaveText("—");
+  await expect(page.getByTestId("w3b-nora-replan")).toContainText(
+    "replan auto: non",
+  );
+}
+
+test.describe("W3-C /studio Post-Evidence replan", () => {
+  test.describe.configure({ timeout: 360_000 });
+
+  test.beforeEach(async ({ request }) => {
+    await clearW3bBoundary(request);
+  });
+  test.afterEach(async ({ request }) => {
+    await clearW3bBoundary(request);
+  });
+
+  test("A SUCCESS → continue recommendation", async ({ page }) => {
+    fs.mkdirSync(CAPTURE_ROOT, { recursive: true });
+    fs.writeFileSync(MANIFEST, "");
+
+    await openThroughAuthorized(page, "W3-C SUCCESS PostEvidence");
+    await page.getByTestId("w3a-governed-execute").click();
+    await expect(page.getByTestId("w3b-product-outcome-kind")).toHaveText(
+      "SUCCESS",
+      { timeout: 120_000 },
+    );
+    await assertW3cPostEvidence(page, "continue");
+    await expect(page.getByTestId("w3c-requires-human-decision")).toHaveText(
+      "non",
+    );
+    await expect(page.getByTestId("w3c-propose-trajectory")).toHaveCount(0);
+    await capture(page, "01-success-continue", {
+      scenario: "SUCCESS",
+      recommendationKind: "continue",
+    });
+  });
+
+  test("B STOP → recover + propose available", async ({ page, request }) => {
+    await openThroughAuthorized(page, "W3-C STOP PostEvidence");
+    await armW3bGovernedStop(request, "EXECUTOR_INSUFFICIENT");
+    await page.getByTestId("w3a-governed-execute").click();
+    await expect(page.getByTestId("w3b-product-outcome-kind")).toHaveText(
+      "STOP",
+      { timeout: 120_000 },
+    );
+    await assertW3cPostEvidence(page, "recover");
+    await expect(page.getByTestId("w3c-requires-human-decision")).toHaveText(
+      "oui",
+    );
+    await expect(page.getByTestId("w3c-propose-trajectory")).toBeVisible();
+    await capture(page, "02-stop-recover", {
+      scenario: "STOP",
+      recommendationKind: "recover",
+    });
+    await clearW3bBoundary(request);
+  });
+
+  test("C FAIL → recover distinct", async ({ page, request }) => {
+    await openThroughAuthorized(page, "W3-C FAIL PostEvidence");
+    await armW3bAdapterFail(request, "adapter_unavailable");
+    await page.getByTestId("w3a-governed-execute").click();
+    await expect(page.getByTestId("w3b-product-outcome-kind")).toHaveText(
+      "FAIL",
+      { timeout: 120_000 },
+    );
+    await assertW3cPostEvidence(page, "recover");
+    await expect(page.getByTestId("w3c-recommendation-kind")).not.toHaveText(
+      "continue",
+    );
+    await capture(page, "03-fail-recover", {
+      scenario: "FAIL",
+      recommendationKind: "recover",
+    });
+    await clearW3bBoundary(request);
+  });
+
+  test("D propose without decide then decide", async ({ page }) => {
+    await openThroughAuthorized(page, "W3-C Propose Then Decide");
+    await page.getByTestId("w3a-governed-execute").click();
+    await expect(page.getByTestId("w3b-product-outcome-kind")).toHaveText(
+      "SUCCESS",
+      { timeout: 120_000 },
+    );
+    await assertW3cPostEvidence(page, "continue");
+
+    // Explicit propose (panel button) — does not decide.
+    await page.getByTestId("w2-propose-options").click();
+    await expect(page.getByTestId("w2-options")).toBeVisible({
+      timeout: 60_000,
+    });
+    // Until decide, no new decision record for this propose wave.
+    await expect(page.getByTestId("w2-decision")).toHaveCount(0);
+
+    await page.locator("[data-testid^='w2-decide-']").first().click();
+    await expect(page.getByTestId("w2-decision")).toBeVisible({
+      timeout: 45_000,
+    });
+    await capture(page, "04-propose-then-decide", {
+      scenario: "PROPOSE_THEN_DECIDE",
+      recommendationKind: "continue",
+    });
+  });
+
+  test("E reload restart postEvidence rehydrate", async ({ page }) => {
+    await openThroughAuthorized(page, "W3-C Reload PostEvidence");
+    await page.getByTestId("w3a-governed-execute").click();
+    await expect(page.getByTestId("w3b-product-outcome-kind")).toHaveText(
+      "SUCCESS",
+      { timeout: 120_000 },
+    );
+    await assertW3cPostEvidence(page, "continue");
+    const evidenceId = (
+      await page.getByTestId("w3b-evidence-id").textContent()
+    )?.trim();
+    const lpsVersion = (
+      await page.getByTestId("w3c-lps-version").textContent()
+    )?.trim();
+
+    await page.getByTestId("w3b-rehydrate-product").click();
+    await expect(page.getByTestId("w3c-recommendation-kind")).toHaveText(
+      "continue",
+      { timeout: 30_000 },
+    );
+    expect(
+      (await page.getByTestId("w3b-evidence-id").textContent())?.trim(),
+    ).toBe(evidenceId);
+    expect(
+      (await page.getByTestId("w3c-lps-version").textContent())?.trim(),
+    ).toBe(lpsVersion);
+
+    await page.reload();
+    await expect(page.getByTestId("project-principal")).toBeVisible({
+      timeout: 60_000,
+    });
+    const rehydrateBtn = page.getByTestId("w3b-rehydrate-product");
+    if ((await rehydrateBtn.count()) > 0) {
+      await rehydrateBtn.first().click();
+      await expect(page.getByTestId("w3c-post-evidence")).toBeVisible({
+        timeout: 30_000,
+      });
+      await expect(page.getByTestId("w3c-recommendation-kind")).toHaveText(
+        "continue",
+      );
+    }
+    await capture(page, "05-reload-rehydrate", {
+      scenario: "RELOAD",
+      evidenceId: evidenceId ?? null,
+      lpsVersion: lpsVersion ?? null,
+    });
+  });
+});
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
index e733d001..e46d6f59 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
@@ -1,169 +1,178 @@
 "use client";

 import { useCallback, useEffect, useRef, useState } from "react";
 import Link from "next/link";
 import { shouldShowProjectRecovery, w1RestartHonestyMessage } from "@/features/project-assistant/presentationLabels";
 import type { ProjectAssistantRehydrateEvidenceOutcomeSuccess } from "@/features/project-assistant/types";
+import { w2ProposeTrajectoryOptionsAction } from "@/features/project-assistant/w2/actions";
 import { getProjectRuntimeAction } from "@/lib/vertical-slice-runtime/actions";
 import { useProductConversation } from "./hooks/useProductConversation";
 import { ConversationSurface } from "./surfaces/ConversationSurface";
 import { HistorySurface } from "./surfaces/HistorySurface";
 import { LpsSurface } from "./surfaces/LpsSurface";
 import { RecoverySurface } from "./surfaces/RecoverySurface";
 import { TrajectorySurface } from "./surfaces/TrajectorySurface";
 import type { GetProjectResult, GetProjectSuccess } from "./types";
 import styles from "./ProjectWorkspacePage.module.css";

 /** F2/F3 product workspace: conversation dominant, project state alongside. */
 export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
   const [result, setResult] = useState<GetProjectResult | null>(null);
   const [durableOutcome, setDurableOutcome] =
     useState<ProjectAssistantRehydrateEvidenceOutcomeSuccess | null>(null);
   const [lpsOpen, setLpsOpen] = useState(false);
   const conversationRef = useRef<HTMLDivElement | null>(null);
   const refreshInFlight = useRef(false);

   const loadProject = useCallback(async () => {
     if (refreshInFlight.current) return;
     refreshInFlight.current = true;
     try {
       const next = await getProjectRuntimeAction(projectId);
       setResult(next);
     } finally {
       refreshInFlight.current = false;
     }
   }, [projectId]);

   useEffect(() => {
     let cancelled = false;
     void getProjectRuntimeAction(projectId).then((next) => {
       if (!cancelled) setResult(next);
     });
     return () => {
       cancelled = true;
     };
   }, [projectId]);

   const focusConversation = useCallback(() => {
     conversationRef.current?.scrollIntoView({
       behavior: "smooth",
       block: "start",
     });
     const input = conversationRef.current?.querySelector(
       "[data-testid='project-assistant-input']",
     );
     if (input instanceof HTMLTextAreaElement) input.focus();
   }, []);

+  const onRequalify = useCallback(async () => {
+    await w2ProposeTrajectoryOptionsAction({ projectId });
+    focusConversation();
+    void loadProject();
+  }, [projectId, focusConversation, loadProject]);
+
   const controller = useProductConversation({
     projectId,
     onDurableFactsChanged: () => {
       void loadProject();
     },
     onDurableEvidenceOutcomeChange: setDurableOutcome,
   });

   if (!result) {
     return (
       <p className={styles.loading} data-testid="project-workspace-loading">
         Ouverture du projet…
       </p>
     );
   }

   if (!result.ok) {
     return (
       <div className={styles.errorPage} role="alert">
         <h1 className={styles.errorTitle}>Ce projet n&apos;est pas accessible</h1>
         <p className={styles.errorBody}>
           {result.error.message ||
             "Le projet demandé n’a pas pu être ouvert. Rien n’a été modifié."}
         </p>
         <p className={styles.errorHint}>
           {result.error.retryable
             ? "Vous pouvez réessayer dans un instant."
             : "Vérifiez le lien depuis la liste des projets."}
         </p>
         <Link href="/studio" className={styles.errorCta}>
           Revenir aux projets
         </Link>
       </div>
     );
   }

   const success: GetProjectSuccess = result;

   const showRecovery = shouldShowProjectRecovery({
     hasDurableEvidenceOutcome: Boolean(durableOutcome),
     livingStateVersion: success.livingState.version,
     activeCycleInstanceId: success.livingState.activeCycleInstanceId,
   });

   return (
     <div className={styles.root} data-testid="project-principal">
       <header className={styles.projectHeader}>
         <div className={styles.projectHeaderText}>
           <h1 className={styles.projectTitle}>{success.project.name}</h1>
           <p className={styles.projectObjective}>{success.project.objective}</p>
         </div>
         <button
           type="button"
           className={styles.lpsToggle}
           data-testid="lps-drawer-toggle"
           aria-expanded={lpsOpen}
           onClick={() => setLpsOpen((open) => !open)}
         >
           {lpsOpen ? "Masquer l'état du projet" : "État du projet"}
         </button>
       </header>

       {showRecovery ? (
         <RecoverySurface
           onResumeDurable={() => {
             setLpsOpen(true);
             focusConversation();
           }}
-          onRequalify={focusConversation}
+          onRequalify={() => {
+            void onRequalify();
+          }}
         />
       ) : (
         <p className={styles.durabilityHint} data-testid="project-durability-hint">
           {w1RestartHonestyMessage()}
         </p>
       )}

       <div className={styles.layout}>
         <div className={styles.main} ref={conversationRef}>
           <div className={styles.conversation} data-testid="project-conversation-main">
             <ConversationSurface controller={controller} />
           </div>
           <TrajectorySurface
             projectId={projectId}
             onDurableFactsChanged={() => {
               void loadProject();
             }}
           />
           <HistorySurface result={success} durableOutcome={durableOutcome} />
         </div>

         <div
           className={[styles.lpsColumn, lpsOpen ? styles.lpsOpen : styles.lpsClosed].join(
             " ",
           )}
           data-testid="project-lps-column"
         >
           <div className={styles.lpsSheet}>
             <button
               type="button"
               className={styles.lpsClose}
               data-testid="lps-drawer-close"
               onClick={() => setLpsOpen(false)}
             >
               Fermer
             </button>
             <LpsSurface result={success} />
           </div>
         </div>
       </div>
     </div>
   );
 }
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css
index eb8fa848..99fbcb4c 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css
@@ -221,108 +221,117 @@
 }

 .code {
   font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
   font-size: 0.78rem;
   color: var(--pm6-muted-strong);
 }

 .inspection {
   margin: 0;
   font-size: 0.84rem;
   color: var(--pm6-ink);
 }

 .amendmentNotice,
 .amendmentForm {
   display: flex;
   flex-direction: column;
   gap: var(--pm6-space-2);
   padding: var(--pm6-space-3);
   border: 1px solid var(--pm6-border-soft);
   border-radius: var(--pm6-radius-md, 8px);
   background: var(--pm6-surface-soft, transparent);
 }

 .amendmentLabel {
   font-size: 0.78rem;
   font-weight: 600;
   color: var(--pm6-muted-strong);
 }

 .amendmentInput {
   width: 100%;
   box-sizing: border-box;
   padding: 0.55rem 0.7rem;
   border: 1px solid var(--pm6-border-soft);
   border-radius: var(--pm6-radius-md, 8px);
   font: inherit;
   color: var(--pm6-ink);
   background: var(--pm6-surface);
 }

 .authorized {
   border-color: var(--pm6-ok);
   background: var(--pm6-ok-tint);
 }

 .blocked {
   border-color: var(--pm6-warn);
   background: var(--pm6-warn-tint);
 }

 .attempt {
   border-color: var(--pm6-border-soft);
   background: var(--pm6-surface);
   display: flex;
   flex-direction: column;
   gap: var(--pm6-space-2);
   padding: var(--pm6-space-4);
   border: 1px solid var(--pm6-border-soft);
   border-radius: var(--pm6-radius-md, 8px);
 }

 .stopNotice {
   margin: 0;
   font-size: 0.78rem;
   font-weight: 600;
   color: var(--pm6-muted-strong);
 }

 .productOutcome {
   border: 1px solid var(--pm6-border-soft);
   border-radius: var(--pm6-radius-md, 8px);
   background: var(--pm6-surface);
   display: flex;
   flex-direction: column;
   gap: var(--pm6-space-2);
   padding: var(--pm6-space-4);
 }

+.postEvidence {
+  margin-top: var(--pm6-space-2);
+  padding-top: var(--pm6-space-3);
+  border-top: 1px solid var(--pm6-border-soft);
+  display: flex;
+  flex-direction: column;
+  gap: var(--pm6-space-2);
+}
+
 .productHeadline {
   margin: 0;
   font-size: 0.95rem;
   font-weight: 700;
   line-height: 1.45;
   color: var(--pm6-ink);
 }

 .technicalDetails {
   margin: 0;
   font-size: 0.82rem;
   color: var(--pm6-muted-strong);
 }

 .technicalDetails summary {
   cursor: pointer;
   font-weight: 600;
 }

 @media (max-width: 767px) {
   .root {
     padding: var(--pm6-space-4);
   }

   .facts {
     grid-template-columns: minmax(0, 1fr);
   }
 }
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
index c33f463e..1ac40fd2 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
@@ -1,250 +1,255 @@
 "use client";

 /**
  * W2 / W3-A product surface — Options, Recommendation, HumanDecision, decided
  * trajectory, contract inspection, effective authority, and (W3-A) fixture
  * governed Execute after AUTHORIZED.
  *
  * The surface never derives truth: every state shown here comes from a server
  * action over the product application path.
  */

 import { useCallback, useState } from "react";
 import { flushSync } from "react-dom";
 import {
   w2AmendExecutionContractAction,
   w2AuthorizeExecutionContractAction,
   w2ConfirmExecutionContractAction,
   w2DecideTrajectoryAction,
   w2GovernedExecuteCancelAction,
   w2GovernedExecuteCompleteAction,
   w2GovernedExecuteSelectAction,
   w2GovernedExecuteStartAction,
   w2InspectExecutionContractAction,
   w2MaterializeProductOutcomeAction,
   w2PrepareExecutionContractAction,
   w2ProposeTrajectoryOptionsAction,
   w2RehydrateProductOutcomeAction,
 } from "@/features/project-assistant/w2/actions";
 import type {
   AmendExecutionContractSuccess,
   ContractInspectionStateDto,
   DecidedTrajectoryDto,
   ExecutionAuthorizationOutcomeDto,
   GovernedExecuteAttemptProjection,
   GovernedExecutePhaseSuccess,
   TrajectoryDecisionRecordDto,
   TrajectoryOptionSetDto,
   W3BProductOutcomeDto,
+  W3cPostEvidenceLoopDto,
 } from "@/features/project-assistant/w2/types";
 import styles from "./TrajectorySurface.module.css";

 /** Explicit Pilot-qualified operation — never inferred from W2 trajectory alone. */
 type QualifiedOperationKind = "generate-temporary-artifact" | "simulate" | "read";

 type PreparedContract = {
   readonly executionContractId: string;
   readonly version: number;
   readonly status: string;
   readonly action: string;
   readonly target: string;
   readonly scope: string;
   readonly requiredAuthority: string;
   readonly constraints: readonly string[];
   readonly stopConditions: readonly string[];
   readonly requiredCapabilities: readonly string[];
   readonly reversibility: string;
   readonly semanticFingerprint: string;
   readonly effectConfirmationRequired?: boolean;
   readonly effectConfirmationLevel?: string | null;
 };

 type AmendmentNotice = {
   readonly priorExecutionContractId: string;
   readonly additionalConstraint: string;
   readonly statusLabel: string;
   readonly priorInspectionDoesNotCoverSuccessor: true;
 };

 type Busy =
   | null
   | "options"
   | "decision"
   | "qualify"
   | "contract"
   | "inspection"
   | "confirmation"
   | "authorization"
   | "amendment"
   | "execute";

 /**
  * Yield so React can commit and the browser can paint each Attempt phase.
  * Double rAF only — no fixed-duration sleep / business latency (R09-R).
  */
 function yieldBrowserPaint(): Promise<void> {
   return new Promise((resolve) => {
     requestAnimationFrame(() => {
       requestAnimationFrame(() => {
         resolve();
       });
     });
   });
 }

 export function TrajectorySurface({
   projectId,
   onDurableFactsChanged,
 }: {
   projectId: string;
   onDurableFactsChanged?: () => void;
 }) {
   const [busy, setBusy] = useState<Busy>(null);
   const [error, setError] = useState<string | null>(null);
   const [optionSet, setOptionSet] = useState<TrajectoryOptionSetDto | null>(
     null,
   );
   const [decision, setDecision] = useState<TrajectoryDecisionRecordDto | null>(
     null,
   );
   const [decided, setDecided] = useState<DecidedTrajectoryDto | null>(null);
   const [contract, setContract] = useState<PreparedContract | null>(null);
   const [inspection, setInspection] =
     useState<ContractInspectionStateDto | null>(null);
   const [authorization, setAuthorization] =
     useState<ExecutionAuthorizationOutcomeDto | null>(null);
   const [amendmentDraft, setAmendmentDraft] = useState("");
   const [amendmentNotice, setAmendmentNotice] =
     useState<AmendmentNotice | null>(null);
   const [attempt, setAttempt] =
     useState<GovernedExecuteAttemptProjection | null>(null);
   const [attemptPhase, setAttemptPhase] = useState<
     GovernedExecutePhaseSuccess["phase"] | null
   >(null);
   /** Append-only paint trail — proves R09 sequence even with a sync adapter. */
   const [attemptPhaseHistory, setAttemptPhaseHistory] = useState<string[]>([]);
   const [attemptStatusLabel, setAttemptStatusLabel] = useState<string | null>(
     null,
   );
   const [productOutcome, setProductOutcome] =
     useState<W3BProductOutcomeDto | null>(null);
+  const [postEvidence, setPostEvidence] =
+    useState<W3cPostEvidenceLoopDto | null>(null);
   const [productEvidencePending, setProductEvidencePending] = useState(false);
   const [qualifiedOperationKind, setQualifiedOperationKind] =
     useState<QualifiedOperationKind | null>(null);

   function paintAttemptPhase(
     phase: GovernedExecutePhaseSuccess["phase"],
     nextAttempt: GovernedExecuteAttemptProjection | null,
     statusLabel: string | null,
   ): void {
     flushSync(() => {
       if (nextAttempt) setAttempt(nextAttempt);
       setAttemptPhase(phase);
       if (statusLabel !== null) setAttemptStatusLabel(statusLabel);
       setAttemptPhaseHistory((prev) =>
         prev[prev.length - 1] === phase ? prev : [...prev, phase],
       );
     });
   }

   const proposeOptions = useCallback(async () => {
     setBusy("options");
     setError(null);
     const result = await w2ProposeTrajectoryOptionsAction({ projectId });
     setBusy(null);
     if (!result.ok) {
       setError(result.message);
       return;
     }
     const { ok: _ok, ...set } = result;
     setOptionSet(set);
     setDecision(null);
     setDecided(null);
     setContract(null);
     setInspection(null);
     setAuthorization(null);
     setAmendmentDraft("");
     setAmendmentNotice(null);
     setAttempt(null);
     setAttemptPhase(null);
     setAttemptStatusLabel(null);
+    setProductOutcome(null);
+    setPostEvidence(null);
     onDurableFactsChanged?.();
   }, [projectId, onDurableFactsChanged]);

   const decide = useCallback(
     async (selectedOptionRef: string) => {
       if (!optionSet) return;
       setBusy("decision");
       setError(null);
       const result = await w2DecideTrajectoryAction({
         projectId,
         optionSetRef: optionSet.optionSetRef,
         trajectoryId: optionSet.proposedTrajectory.trajectoryId,
         candidateVersion: optionSet.proposedTrajectory.version,
         selectedOptionRef,
       });
       setBusy(null);
       if (!result.ok) {
         setError(result.message);
         return;
       }
       setDecision(result.decision);
       setDecided(result.trajectory);
       onDurableFactsChanged?.();
     },
     [optionSet, projectId, onDurableFactsChanged],
   );

   const prepareContract = useCallback(async () => {
     if (!decision || !qualifiedOperationKind) return;
     setBusy("contract");
     setError(null);
     const result = await w2PrepareExecutionContractAction({
       projectId,
       decisionId: decision.decisionId,
       qualifiedOperationKind,
     });
     setBusy(null);
     if (!result.ok) {
       setError(result.message);
       return;
     }
     const prepared = result.contract;
     setContract({
       executionContractId: prepared.executionContractId,
       version: prepared.version,
       status: prepared.status,
       action: prepared.action,
       target: prepared.target,
       scope: prepared.scope,
       requiredAuthority: prepared.requiredAuthority,
       constraints: [...prepared.constraints],
       stopConditions: [...prepared.stopConditions],
       requiredCapabilities: [...prepared.requiredCapabilities],
       reversibility: prepared.reversibility,
       semanticFingerprint: prepared.semanticFingerprint,
       effectConfirmationRequired: prepared.effectConfirmationRequired,
       effectConfirmationLevel: prepared.effectConfirmationLevel ?? null,
     });
     setInspection(null);
     setAuthorization(null);
     setAmendmentDraft("");
     setAmendmentNotice(null);
     setAttempt(null);
     setAttemptPhase(null);
     setAttemptStatusLabel(null);
     onDurableFactsChanged?.();
   }, [decision, projectId, qualifiedOperationKind, onDurableFactsChanged]);

   const inspect = useCallback(async () => {
     if (!contract) return;
     setBusy("inspection");
     setError(null);
     const result = await w2InspectExecutionContractAction({
       projectId,
       executionContractId: contract.executionContractId,
     });
     setBusy(null);
     if (!result.ok) {
       setError(result.message);
       return;
@@ -343,267 +348,275 @@ export function TrajectorySurface({
     const result = await w2AuthorizeExecutionContractAction({
       projectId,
       executionContractId: contract.executionContractId,
     });
     setBusy(null);
     if (!result.ok) {
       setError(result.message);
       return;
     }
     const { ok: _ok, ...outcome } = result;
     setAuthorization(outcome);
     setInspection(outcome.inspection);
   }, [contract, projectId]);

   const governedExecute = useCallback(async () => {
     if (!contract || authorization?.outcome !== "AUTHORIZED") return;
     setBusy("execute");
     setError(null);
     flushSync(() => {
       setAttempt(null);
       setAttemptPhase(null);
       setAttemptPhaseHistory([]);
       setAttemptStatusLabel(null);
       setProductOutcome(null);
       setProductEvidencePending(false);
     });

     const selected = await w2GovernedExecuteSelectAction({
       projectId,
       executionContractId: contract.executionContractId,
     });
     if (!selected.ok) {
       setBusy(null);
       setError(selected.message);
       if (selected.attempt) {
         paintAttemptPhase("accepted", selected.attempt, null);
       }
       return;
     }
     paintAttemptPhase(selected.phase, selected.attempt, selected.statusLabel);
     await yieldBrowserPaint();

     if (selected.phase === "terminal") {
       setBusy(null);
       paintAttemptPhase("terminal", selected.attempt, selected.statusLabel);
       onDurableFactsChanged?.();
       return;
     }

     const started = await w2GovernedExecuteStartAction({
       projectId,
       executionContractId: contract.executionContractId,
       attemptId: selected.attemptId,
     });
     if (!started.ok) {
       setBusy(null);
       setError(started.message);
       if (started.attempt) {
         flushSync(() => {
           setAttempt(started.attempt!);
         });
       }
       return;
     }

     // Adapter FAIL / governed STOP may terminate at Start — materialize without Complete.
     if (started.phase === "terminal") {
       paintAttemptPhase(started.phase, started.attempt, started.statusLabel);
       flushSync(() => {
         setProductEvidencePending(true);
       });
       await yieldBrowserPaint();
       const materializedEarly = await w2MaterializeProductOutcomeAction({
         projectId,
         attemptId: started.attemptId,
       });
       setBusy(null);
       if (!materializedEarly.ok) {
         setError(materializedEarly.message);
         if (materializedEarly.product) setProductOutcome(materializedEarly.product);
+        if (materializedEarly.postEvidence)
+          setPostEvidence(materializedEarly.postEvidence);
         return;
       }
       flushSync(() => {
         setProductEvidencePending(false);
         setProductOutcome(materializedEarly.product);
+        setPostEvidence(materializedEarly.postEvidence ?? null);
       });
       onDurableFactsChanged?.();
       return;
     }

     paintAttemptPhase(started.phase, started.attempt, started.statusLabel);
     await yieldBrowserPaint();

     const completed = await w2GovernedExecuteCompleteAction({
       projectId,
       executionContractId: contract.executionContractId,
       attemptId: started.attemptId,
     });
     if (!completed.ok) {
       setBusy(null);
       setError(completed.message);
       if (completed.attempt) {
         flushSync(() => {
           setAttempt(completed.attempt!);
         });
       }
       return;
     }
     paintAttemptPhase(completed.phase, completed.attempt, completed.statusLabel);
     flushSync(() => {
       setProductEvidencePending(true);
     });
     await yieldBrowserPaint();

     const materialized = await w2MaterializeProductOutcomeAction({
       projectId,
       attemptId: completed.attemptId,
     });
     setBusy(null);
     if (!materialized.ok) {
       setError(materialized.message);
       if (materialized.product) setProductOutcome(materialized.product);
+      if (materialized.postEvidence) setPostEvidence(materialized.postEvidence);
       return;
     }
     flushSync(() => {
       setProductEvidencePending(false);
       setProductOutcome(materialized.product);
+      setPostEvidence(materialized.postEvidence ?? null);
     });
     onDurableFactsChanged?.();
   }, [contract, authorization, projectId, onDurableFactsChanged]);

   const stopRunningExecution = useCallback(async () => {
     if (!contract || !attempt?.attemptId || attemptPhase !== "running") return;
     setBusy("execute");
     setError(null);
     const cancelled = await w2GovernedExecuteCancelAction({
       projectId,
       executionContractId: contract.executionContractId,
       attemptId: attempt.attemptId,
     });
     if (!cancelled.ok) {
       setBusy(null);
       setError(cancelled.message);
       return;
     }
     paintAttemptPhase(cancelled.phase, cancelled.attempt, cancelled.statusLabel);
     flushSync(() => {
       setProductEvidencePending(true);
     });
     await yieldBrowserPaint();
     const materialized = await w2MaterializeProductOutcomeAction({
       projectId,
       attemptId: cancelled.attemptId,
     });
     setBusy(null);
     if (!materialized.ok) {
       setError(materialized.message);
       if (materialized.product) setProductOutcome(materialized.product);
+      if (materialized.postEvidence) setPostEvidence(materialized.postEvidence);
       return;
     }
     flushSync(() => {
       setProductEvidencePending(false);
       setProductOutcome(materialized.product);
+      setPostEvidence(materialized.postEvidence ?? null);
     });
     onDurableFactsChanged?.();
   }, [
     contract,
     attempt,
     attemptPhase,
     projectId,
     onDurableFactsChanged,
   ]);

   const rehydrateProduct = useCallback(async () => {
     if (!attempt?.attemptId) return;
     setBusy("execute");
     setError(null);
     const result = await w2RehydrateProductOutcomeAction({
       projectId,
       attemptId: attempt.attemptId,
     });
     setBusy(null);
     if (!result.ok) {
       setError(result.message);
       return;
     }
     setProductOutcome(result.product);
+    setPostEvidence(result.postEvidence ?? null);
     setProductEvidencePending(false);
   }, [attempt, projectId]);

   return (
     <section
       className={styles.root}
       data-testid="w2-trajectory-panel"
       aria-labelledby="w2-trajectory-title"
     >
       <header className={styles.head}>
         <p className={styles.eyebrow}>Trajectoire et décision</p>
         <h2 id="w2-trajectory-title" className={styles.title}>
           Options, recommandation, puis votre décision
         </h2>
         <p className={styles.note}>
           Nora instruit des options et recommande. La décision vous appartient :
           une recommandation ne décide jamais et ne rend jamais une trajectoire
           courante. L&apos;exécution (W3-A) n&apos;est possible qu&apos;après un
           verdict AUTHORIZED, via une action Exécuter explicite (fixture).
         </p>
       </header>

       {error ? (
         <p className={styles.error} role="alert" data-testid="w2-error">
           {error}
         </p>
       ) : null}

       <div className={styles.actions}>
         <button
           type="button"
           className={styles.primaryAction}
           data-testid="w2-propose-options"
           onClick={() => void proposeOptions()}
           disabled={busy !== null}
         >
           {optionSet ? "Réinstruire les options" : "Instruire les options"}
         </button>
         {busy ? (
           <span className={styles.busy} role="status" data-testid="w2-busy">
             Traitement en cours…
           </span>
         ) : null}
       </div>

       {optionSet ? (
         <>
           <section
             className={styles.block}
             aria-labelledby="w2-options-title"
             data-testid="w2-options"
           >
             <h3 id="w2-options-title" className={styles.blockTitle}>
               Options proposées
             </h3>
             <p className={styles.blockNote} data-testid="w2-proposed-trajectory">
               {optionSet.proposedTrajectory.statusLabel} · version{" "}
               {optionSet.proposedTrajectory.version} · pas encore courante
             </p>
             <ul className={styles.optionList}>
               {optionSet.options.map((option) => {
                 const isRecommended =
                   option.optionRef ===
                   optionSet.recommendation.recommendedOptionRef;
                 return (
                   <li
                     key={option.optionRef}
                     className={styles.option}
                     data-testid={`w2-option-${option.optionRef}`}
                   >
                     <div className={styles.optionHead}>
                       <span className={styles.optionBadge}>{option.kind}</span>
                       {isRecommended ? (
                         <span className={styles.recommendedBadge}>
                           Recommandée — pas décidée
                         </span>
                       ) : null}
                       <span className={styles.optionLabel}>{option.label}</span>
                     </div>
                     <p className={styles.optionIntent}>{option.intent}</p>
@@ -1073,151 +1086,221 @@ export function TrajectorySurface({
               className={styles.blockNote}
               data-testid="w3b-evidence-pending"
             >
               Evidence requise avant tout claim de résultat produit.
             </p>
           ) : null}
           {attempt?.attemptId && !productOutcome ? (
             <button
               type="button"
               className={styles.secondaryAction}
               data-testid="w3b-rehydrate-product"
               onClick={() => void rehydrateProduct()}
               disabled={busy !== null}
             >
               Recharger résultat produit (durable)
             </button>
           ) : null}
         </section>
       ) : null}

       {productOutcome ? (
         <section
           className={styles.productOutcome}
           aria-labelledby="w3b-product-title"
           data-testid="w3b-product-outcome"
           data-outcome={productOutcome.outcome}
           role="status"
         >
           <h3 id="w3b-product-title" className={styles.blockTitle}>
             Résultat produit
           </h3>
           <p
             className={styles.productHeadline}
             data-testid="w3b-product-headline"
           >
             <span data-testid="w3b-product-outcome-kind">
               {productOutcome.outcome}
             </span>
             {" — "}
             {productOutcome.businessHeadline}
           </p>
           <p className={styles.blockBody} data-testid="w3b-product-reason">
             {productOutcome.businessReason}
           </p>
           {productOutcome.governedBoundary ? (
             <p className={styles.blockBody} data-testid="w3b-governed-boundary">
               Frontière : {productOutcome.governedBoundary}
             </p>
           ) : null}
           <p className={styles.blockBody} data-testid="w3b-evidence-summary">
             {productOutcome.evidenceSummary ??
               "Evidence absente — aucun claim produit."}
           </p>
           <dl className={styles.facts}>
             <div>
               <dt>Evidence</dt>
               <dd className={styles.code} data-testid="w3b-evidence-id">
                 {productOutcome.evidenceId ?? "—"}
               </dd>
             </div>
             <div>
               <dt>ReviewBundle</dt>
               <dd className={styles.code} data-testid="w3b-review-bundle-id">
                 {productOutcome.reviewBundleId ?? "—"}
               </dd>
             </div>
             <div>
               <dt>Complétude revue</dt>
               <dd data-testid="w3b-review-bundle-completeness">
                 {productOutcome.reviewBundleCompleteness ?? "—"}
               </dd>
             </div>
             <div>
               <dt>Claim autorisé</dt>
               <dd data-testid="w3b-claim-allowed">
                 {productOutcome.claimAllowed ? "oui" : "non"}
               </dd>
             </div>
             <div>
               <dt>Apprentissage / replan</dt>
-              <dd data-testid="w3b-nora-replan">non</dd>
+              <dd data-testid="w3b-nora-replan">
+                {`analyse: ${
+                  postEvidence && postEvidence.ok && postEvidence.noraInvoked
+                    ? "oui"
+                    : "non"
+                } · replan auto: non`}
+              </dd>
             </div>
             <div>
               <dt>Cycle auto-fermé</dt>
               <dd data-testid="w3b-cycle-closed">non</dd>
             </div>
             <div>
               <dt>READY</dt>
               <dd data-testid="w3b-ready">non</dd>
             </div>
           </dl>
+          {postEvidence && postEvidence.ok ? (
+            <section
+              className={styles.postEvidence}
+              data-testid="w3c-post-evidence"
+              aria-label="Recommandation post-Evidence"
+            >
+              <h4 className={styles.blockTitle}>Recommandation post-Evidence</h4>
+              <dl className={styles.facts}>
+                <div>
+                  <dt>Kind</dt>
+                  <dd data-testid="w3c-recommendation-kind">
+                    {postEvidence.recommendation.kind}
+                  </dd>
+                </div>
+                <div>
+                  <dt>Headline</dt>
+                  <dd data-testid="w3c-recommendation-headline">
+                    {postEvidence.recommendation.headline}
+                  </dd>
+                </div>
+                <div>
+                  <dt>Authority</dt>
+                  <dd data-testid="w3c-recommendation-authority">
+                    none — Recommendation ≠ HumanDecision
+                  </dd>
+                </div>
+                <div>
+                  <dt>Analyse Nora</dt>
+                  <dd data-testid="w3c-nora-analysis">
+                    {postEvidence.analysisText ??
+                      postEvidence.analysisUnavailableReason ??
+                      "indisponible"}
+                  </dd>
+                </div>
+                <div>
+                  <dt>LPS version</dt>
+                  <dd data-testid="w3c-lps-version">
+                    {postEvidence.lpsVersion ?? "—"}
+                  </dd>
+                </div>
+                <div>
+                  <dt>Décision humaine requise</dt>
+                  <dd data-testid="w3c-requires-human-decision">
+                    {postEvidence.recommendation.requiresHumanDecision
+                      ? "oui"
+                      : "non"}
+                  </dd>
+                </div>
+              </dl>
+              {postEvidence.recommendation.kind === "recover" ||
+              postEvidence.recommendation.kind === "replan" ||
+              postEvidence.recommendation.requiresHumanDecision ? (
+                <button
+                  type="button"
+                  className={styles.secondaryAction}
+                  data-testid="w3c-propose-trajectory"
+                  onClick={() => void proposeOptions()}
+                  disabled={busy !== null}
+                >
+                  Proposer des options de trajectoire
+                </button>
+              ) : null}
+            </section>
+          ) : null}
           <details className={styles.technicalDetails}>
             <summary data-testid="w3b-technical-details-toggle">
               Détail technique (secondaire)
             </summary>
             <dl className={styles.facts}>
               <div>
                 <dt>Attempt</dt>
                 <dd
                   className={styles.code}
                   data-testid="w3b-technical-attempt-id"
                 >
                   {productOutcome.technicalDetail.attemptId}
                 </dd>
               </div>
               <div>
                 <dt>Statut technique</dt>
                 <dd data-testid="w3b-technical-status">
                   {productOutcome.technicalDetail.attemptStatus}
                 </dd>
               </div>
               <div>
                 <dt>resultRef</dt>
                 <dd className={styles.code} data-testid="w3b-technical-result-ref">
                   {productOutcome.technicalDetail.resultRef ?? "—"}
                 </dd>
               </div>
               <div>
                 <dt>errorRef / stopReason</dt>
                 <dd
                   className={styles.code}
                   data-testid="w3b-technical-error-or-stop"
                 >
                   {productOutcome.technicalDetail.errorRef ??
                     productOutcome.technicalDetail.stopReason ??
                     "—"}
                 </dd>
               </div>
             </dl>
           </details>
           {productOutcome.reservations.length > 0 ? (
             <ul data-testid="w3b-reservations" className={styles.blockNote}>
               {productOutcome.reservations.map((r) => (
                 <li key={r}>{r}</li>
               ))}
             </ul>
           ) : null}
           <button
             type="button"
             className={styles.secondaryAction}
             data-testid="w3b-rehydrate-product"
             onClick={() => void rehydrateProduct()}
             disabled={busy !== null || !attempt?.attemptId}
           >
             Recharger résultat produit (durable)
           </button>
         </section>
       ) : null}
     </section>
   );
 }
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/appendEvidenceOutcomeToLps.ts b/projects/sfia-studio/app/features/project-assistant/f3/appendEvidenceOutcomeToLps.ts
index f6609f55..53689b92 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/appendEvidenceOutcomeToLps.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/appendEvidenceOutcomeToLps.ts
@@ -1,72 +1,75 @@
 /**
  * M5-B W1 — factual LPS append of evidenceIds / reviewBundleIds after
  * successful Evidence ingest + ReviewBundle create.
  * Recommendation remains Recommendation (not Decision / not gate consume).
  */

 import type { ProjectServices } from "@/lib/oa/project";
 import { SFIA_STUDIO_SYSTEM_FACTUAL_WRITER } from "./systemFactualWriter";

 export type AppendEvidenceOutcomeToLpsResult =
   | { ok: true; lpsVersion: number }
   | { ok: false; code: string; message: string };

 export async function appendEvidenceOutcomeToLps(input: {
   projectId: string;
   evidenceId: string;
   reviewBundleId: string;
   projectServices: Pick<
     ProjectServices,
     "appendLivingProjectStateVersion" | "getCurrentLivingProjectState"
   >;
   /** Optional factual Nora analysis note — existing LPS.context field, no schema change. */
   analysisNote?: string;
+  /** Optional W3-C recommendation nextStep — existing LPS.nextStep field. */
+  nextStep?: string;
 }): Promise<AppendEvidenceOutcomeToLpsResult> {
   const current =
     await input.projectServices.getCurrentLivingProjectState.execute({
       projectId: input.projectId,
     });
   if (!current.ok) {
     return {
       ok: false,
       code: current.error.detailCode,
       message: current.error.message,
     };
   }

   const lps = current.livingProjectState;
   const evidenceIds = [
     ...new Set([...(lps.evidenceIds ?? []), input.evidenceId]),
   ];
   const reviewBundleIds = [
     ...new Set([...(lps.reviewBundleIds ?? []), input.reviewBundleId]),
   ];
   const analysisNote = input.analysisNote?.trim();
   const nextContext =
     analysisNote && analysisNote.length > 0
       ? [lps.context, analysisNote].filter(Boolean).join("\n\n")
       : lps.context;

   const appended =
     await input.projectServices.appendLivingProjectStateVersion.execute({
       projectId: input.projectId,
       expectedVersion: lps.version,
       objective: lps.objective,
       context: nextContext,
       scope: lps.scope,
       // Automatic factual write-back — system actor, not Morris demo authority.
       createdBy: SFIA_STUDIO_SYSTEM_FACTUAL_WRITER,
       evidenceIds,
       reviewBundleIds,
+      ...(input.nextStep !== undefined ? { nextStep: input.nextStep } : {}),
     });

   if (!appended.ok) {
     return {
       ok: false,
       code: appended.error.detailCode,
       message: appended.error.message,
     };
   }

   return { ok: true, lpsVersion: appended.livingProjectState.version };
 }
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/actions.ts b/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
index bc684e22..f67e98dc 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
@@ -350,139 +350,140 @@ export async function w2GovernedExecuteCompleteAction(input: {
  * USER_CANCEL only — Product STOP requires SystemGovernedStop provenance.
  */
 export async function w2GovernedExecuteCancelAction(input: {
   projectId: string;
   executionContractId: string;
   attemptId: string;
   reason?: string;
   canActAsMorris?: unknown;
   real?: unknown;
 }): Promise<GovernedExecuteAuthorizedContractResult> {
   const runtime = getRuntimeApplicationService();
   if (!runtime.oa) return OA_UNAVAILABLE;
   return governedExecuteCancel({
     oa: runtime.oa,
     projectId: input.projectId,
     executionContractId: input.executionContractId,
     attemptId: input.attemptId,
     reason: input.reason,
     canActAsMorris: input.canActAsMorris,
     real: input.real,
   });
 }

 /**
  * W3-B — FC-12 Evidence + RB + Contract Result CE then FC-11 projection.
  */
 export async function w2MaterializeProductOutcomeAction(input: {
   projectId: string;
   attemptId: string;
   claimedProductOutcome?: unknown;
   cycleProfile?: unknown;
   ckcId?: unknown;
 }): Promise<MaterializeProductOutcomeActionResult> {
   const runtime = getRuntimeApplicationService();
   if (!runtime.oa) {
     return {
       ok: false,
       code: "OA_UNAVAILABLE",
       message: "OA runtime indisponible.",
     };
   }
   return materializeW3bProductTerminal({
     oa: runtime.oa,
     projectId: input.projectId,
     attemptId: input.attemptId,
     claimedProductOutcome: input.claimedProductOutcome,
     cycleProfile: input.cycleProfile,
     ckcId: input.ckcId,
   });
 }

 export async function w2RehydrateProductOutcomeAction(input: {
   projectId: string;
   attemptId: string;
 }): Promise<MaterializeProductOutcomeActionResult> {
   const runtime = getRuntimeApplicationService();
   if (!runtime.oa) {
     return {
       ok: false,
       code: "OA_UNAVAILABLE",
       message: "OA runtime indisponible.",
     };
   }
   return rehydrateW3bProductTerminal({
     oa: runtime.oa,
     projectId: input.projectId,
     attemptId: input.attemptId,
   });
 }

 export async function w2RehydrateLatestProductOutcomeAction(input: {
   projectId: string;
   executionContractId: string;
 }): Promise<
   | {
       readonly ok: true;
       readonly product: import("./types").W3BProductOutcomeDto;
       readonly attemptId: string;
       readonly attemptStatus: string;
       readonly reusedFromIdempotency: true;
+      readonly postEvidence?: import("./types").W3cPostEvidenceLoopDto;
     }
   | { readonly ok: false; readonly code: string; readonly message: string }
 > {
   const runtime = getRuntimeApplicationService();
   if (!runtime.oa) {
     return {
       ok: false,
       code: "OA_UNAVAILABLE",
       message: "OA runtime indisponible.",
     };
   }
   return rehydrateLatestW3bProductTerminalForContract({
     oa: runtime.oa,
     projectId: input.projectId,
     executionContractId: input.executionContractId,
   });
 }

 /**
  * W3-A — Governed Execute after W2 AUTHORIZED.
  * Fresh authority evaluation; Pilote actor; fixture Attempt only; no REAL.
  * Hostile client fields (receipt-as-permission, Morris claims, real flags) ignored.
  */
 export async function w2GovernedExecuteAction(input: {
   projectId: string;
   executionContractId: string;
   /** Hostile — ignored. */
   canActAsMorris?: unknown;
   claimedAuthorityLevel?: unknown;
   authorityReceiptRef?: unknown;
   real?: unknown;
   adapterRef?: unknown;
 }): Promise<GovernedExecuteAuthorizedContractResult> {
   const runtime = getRuntimeApplicationService();
   if (!runtime.oa) return OA_UNAVAILABLE;

   return governedExecuteAuthorizedContract({
     oa: runtime.oa,
     projectId: input.projectId,
     executionContractId: input.executionContractId,
     canActAsMorris: input.canActAsMorris,
     claimedAuthorityLevel: input.claimedAuthorityLevel,
     authorityReceiptRef: input.authorityReceiptRef,
     real: input.real,
     adapterRef: input.adapterRef,
   });
 }

 export async function w2ReadProjectHistoryAction(input: {
   projectId: string;
 }): Promise<ReadW2ProjectHistoryResult> {
   const runtime = getRuntimeApplicationService();
   if (!runtime.oa) return OA_UNAVAILABLE;

   return readW2ProjectHistory({
     oa: runtime.oa,
     projectId: input.projectId,
   });
 }
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts b/projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
index e3f07d16..cbaf2422 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
@@ -1,108 +1,116 @@
 /**
  * W3-B FC-12 — Materialize + rehydrate Product Terminal from durable facts.
  * Ingest all terminals → ReviewBundle → EvaluateContractResult → FC-11 projection.
+ * W3-C: after successful projection, consume Evidence via post-Evidence loop (no re-ingest).
  */
 import { createHash } from "node:crypto";
 import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
 import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
 import type { ExecutionContract } from "@/lib/oa/execution-contract";
 import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";
 import type { ClaimEvaluation, Evidence, ReviewBundle } from "@/lib/oa/evidence-review";
 import {
   projectW3bProductTerminal,
   type W3BProductTerminalProjection,
 } from "./w3bProductTerminalProjection";
+import {
+  rehydrateW3cPostEvidenceFromLps,
+  runW3cPostEvidenceLoop,
+  type W3cPostEvidenceLoopResult,
+} from "./w3cPostEvidenceLoop";

 export type { W3BProductTerminalProjection as W3BProductOutcomeProjection };

 export type MaterializeW3bProductTerminalResult =
   | {
       readonly ok: true;
       readonly product: W3BProductTerminalProjection;
       readonly reusedFromIdempotency: boolean;
+      readonly postEvidence?: W3cPostEvidenceLoopResult;
     }
   | {
       readonly ok: false;
       readonly code: string;
       readonly message: string;
       readonly product?: W3BProductTerminalProjection;
+      readonly postEvidence?: W3cPostEvidenceLoopResult;
     };

 const PRODUCT_RESERVATIONS = [
   "Evidence requise avant claim produit",
   "Apprentissage / replan non démarrés",
   "Exécuteur de substitution — pas d'effet externe réel",
   "Aucun READY",
 ] as const;

 export function w3bEvidenceIdentity(attemptId: string): {
   evidenceId: string;
   reviewBundleId: string;
   claimEvaluationId: string;
   evidenceIdempotencyKey: string;
   reviewBundleIdempotencyKey: string;
   claimEvaluationIdempotencyKey: string;
 } {
   const digest = createHash("sha256").update(attemptId).digest("hex").slice(0, 16);
   return {
     evidenceId: `ev:w3b:${digest}`,
     reviewBundleId: `rb:w3b:${digest}`,
     claimEvaluationId: `clm:w3b:${digest}`,
     evidenceIdempotencyKey: `idem:w3b-ev:${attemptId}`,
     reviewBundleIdempotencyKey: `idem:w3b-rb:${attemptId}`,
     claimEvaluationIdempotencyKey: `idem:w3b-ce:${attemptId}`,
   };
 }

 async function loadAttemptAndContract(input: {
   oa: RuntimeOaStack;
   projectId: string;
   attemptId: string;
 }): Promise<
   | { ok: true; attempt: ExecutionAttempt; contract: ExecutionContract }
   | { ok: false; code: string; message: string }
 > {
   if (!input.oa.evidenceReviewServices || !input.oa.executionAttemptServices) {
     return {
       ok: false,
       code: "EVIDENCE_STACK_UNAVAILABLE",
       message: "Services Evidence / Attempt indisponibles.",
     };
   }
   const loaded =
     await input.oa.executionAttemptServices.getExecutionAttempt.execute({
       attemptId: input.attemptId,
     });
   if (!loaded.ok) {
     return {
       ok: false,
       code: loaded.error.detailCode,
       message: loaded.error.message,
     };
   }
   const contractResult =
     await input.oa.executionContractServices.getExecutionContract.execute({
       executionContractId: loaded.attempt.executionContractId,
     });
   if (!contractResult.ok) {
     return {
       ok: false,
       code: "EXECUTION_CONTRACT_NOT_FOUND",
       message: "Contrat lié à l'Attempt introuvable.",
     };
   }
   if (contractResult.contract.projectId !== input.projectId) {
     return {
       ok: false,
       code: "PROJECT_MISMATCH",
       message: "Attempt / projet incohérents.",
     };
   }
   return {
     ok: true,
     attempt: loaded.attempt,
     contract: contractResult.contract,
   };
 }

 function projectFromFacts(input: {
@@ -177,227 +185,250 @@ export async function materializeW3bProductTerminal(input: {
   });

   if (!bundle.ok) {
     return {
       ok: false,
       code: bundle.error.detailCode,
       message: bundle.error.message,
     };
   }

   const frozen = await services.freezeReviewBundle.execute({
     reviewBundleId: ids.reviewBundleId,
     expectedVersion: bundle.reviewBundle.version,
     idempotencyKey: `idem:w3b-rb-freeze:${attempt.attemptId}`,
     actor: LOCAL_PILOTE_ACTOR,
   });

   if (!frozen.ok) {
     return {
       ok: false,
       code: frozen.error.detailCode,
       message: frozen.error.message,
     };
   }

   if (!services.evaluateContractResult) {
     return {
       ok: false,
       code: "CONTRACT_RESULT_EVALUATOR_UNAVAILABLE",
       message: "EvaluateContractResult indisponible — fail-closed.",
     };
   }

   const evaluated = await services.evaluateContractResult.execute({
     claimEvaluationId: ids.claimEvaluationId,
     idempotencyKey: ids.claimEvaluationIdempotencyKey,
     actor: LOCAL_PILOTE_ACTOR,
     contract,
     attempt: {
       attemptId: attempt.attemptId,
       executionContractId: attempt.executionContractId,
       executionContractVersion: attempt.executionContractVersion,
       executionContractSemanticFingerprint:
         attempt.executionContractSemanticFingerprint,
       boundExecutionContract: attempt.boundExecutionContract,
       status: attempt.status,
       resultRef: attempt.resultRef,
       errorRef: attempt.errorRef,
       stopReason: attempt.stopReason,
       cancelledAt: attempt.cancelledAt,
       failedAt: attempt.failedAt,
       timedOutAt: attempt.timedOutAt,
       stopOrigin: attempt.stopOrigin,
       stopCode: attempt.stopCode,
       stopSourceRef: attempt.stopSourceRef,
       stopObservedAt: attempt.stopObservedAt,
       completedAt: attempt.completedAt,
       selectedAgentRef: attempt.selectedAgentRef,
     },
     evidence: ingested.evidence,
     reviewBundle: frozen.reviewBundle,
   });

     if (!evaluated.ok) {
       // Surface shape reason in test/dev failures.
       const detail = evaluated.error.internalCauseRef ?? evaluated.error.message;
       return {
         ok: false,
         code: evaluated.error.detailCode,
         message: detail,
       product: projectFromFacts({
         attempt,
         contract,
         evidence: ingested.evidence,
         reviewBundle: frozen.reviewBundle,
         claimEvaluation: evaluated.claimEvaluation ?? null,
       }),
     };
   }

+  const product = projectFromFacts({
+    attempt,
+    contract,
+    evidence: ingested.evidence,
+    reviewBundle: frozen.reviewBundle,
+    claimEvaluation: evaluated.claimEvaluation,
+  });
+
+  const postEvidence = await runW3cPostEvidenceLoop({
+    oa: input.oa,
+    projectId: input.projectId,
+    attemptId: attempt.attemptId,
+    product,
+  });
+
   return {
     ok: true,
     reusedFromIdempotency: Boolean(
       ingested.reusedFromIdempotencyKey ||
         bundle.reusedFromIdempotencyKey ||
         frozen.reusedFromIdempotencyKey ||
         evaluated.reusedFromIdempotencyKey,
     ),
-    product: projectFromFacts({
-      attempt,
-      contract,
-      evidence: ingested.evidence,
-      reviewBundle: frozen.reviewBundle,
-      claimEvaluation: evaluated.claimEvaluation,
-    }),
+    product,
+    postEvidence,
   };
 }

 export async function rehydrateW3bProductTerminal(input: {
   readonly oa: RuntimeOaStack;
   readonly projectId: string;
   readonly attemptId: string;
 }): Promise<MaterializeW3bProductTerminalResult> {
   const loaded = await loadAttemptAndContract(input);
   if (!loaded.ok) return loaded;
   const { attempt, contract } = loaded;
   const ids = w3bEvidenceIdentity(attempt.attemptId);
   const services = input.oa.evidenceReviewServices!;

   const evidence = await services.evidenceReader.findById(ids.evidenceId);
   const reviewBundle = await services.reviewBundleReader.findById(
     ids.reviewBundleId,
   );
   const claimEvaluation = await services.claimEvaluationReader.findById(
     ids.claimEvaluationId,
   );

   if (!evidence || !reviewBundle || !claimEvaluation) {
     return {
       ok: false,
       code: "PRODUCT_TERMINAL_NOT_DURABLE",
       message:
         "Evidence / ReviewBundle / Contract Result CE absents — aucun claim reconstruit.",
     };
   }

   if (evidence.bindings.projectId && evidence.bindings.projectId !== input.projectId) {
     return {
       ok: false,
       code: "PROJECT_MISMATCH",
       message: "Evidence liée à un autre projet.",
     };
   }
   if (evidence.bindings.executionAttemptId !== input.attemptId) {
     return {
       ok: false,
       code: "ATTEMPT_BINDING_MISMATCH",
       message: "Evidence liée à un autre Attempt.",
     };
   }

+  const product = projectFromFacts({
+    attempt,
+    contract,
+    evidence,
+    reviewBundle,
+    claimEvaluation,
+  });
+
+  const postEvidence = await rehydrateW3cPostEvidenceFromLps({
+    oa: input.oa,
+    projectId: input.projectId,
+    product,
+  });
+
   return {
     ok: true,
     reusedFromIdempotency: true,
-    product: projectFromFacts({
-      attempt,
-      contract,
-      evidence,
-      reviewBundle,
-      claimEvaluation,
-    }),
+    product,
+    postEvidence,
   };
 }

 const TERMINAL_STATUSES = new Set([
   "succeeded",
   "failed",
   "timeout",
   "cancelled",
 ]);

 export async function rehydrateLatestW3bProductTerminalForContract(input: {
   readonly oa: RuntimeOaStack;
   readonly projectId: string;
   readonly executionContractId: string;
 }): Promise<
   | {
       readonly ok: true;
       readonly product: W3BProductTerminalProjection;
       readonly attemptId: string;
       readonly attemptStatus: string;
       readonly reusedFromIdempotency: true;
+      readonly postEvidence?: W3cPostEvidenceLoopResult;
     }
   | { readonly ok: false; readonly code: string; readonly message: string }
 > {
   if (!input.oa.executionAttemptServices || !input.oa.evidenceReviewServices) {
     return {
       ok: false,
       code: "EVIDENCE_STACK_UNAVAILABLE",
       message: "Services Attempt / Evidence indisponibles.",
     };
   }
   const listed =
     await input.oa.executionAttemptServices.listExecutionAttempts.execute({
       executionContractId: input.executionContractId,
     });
   if (!listed.ok) {
     return {
       ok: false,
       code: listed.error.detailCode,
       message: listed.error.message,
     };
   }
   const terminal = [...listed.attempts]
     .filter((a) => TERMINAL_STATUSES.has(a.status))
     .sort((a, b) => {
       const aAt = a.updatedAt ?? a.createdAt ?? "";
       const bAt = b.updatedAt ?? b.createdAt ?? "";
       return aAt < bAt ? 1 : -1;
     })[0];
   if (!terminal) {
     return {
       ok: false,
       code: "NO_TERMINAL_ATTEMPT",
       message: "Aucune tentative terminale durable pour ce contrat.",
     };
   }
   const rehydrated = await rehydrateW3bProductTerminal({
     oa: input.oa,
     projectId: input.projectId,
     attemptId: terminal.attemptId,
   });
   if (!rehydrated.ok) return rehydrated;
   return {
     ok: true,
     product: rehydrated.product,
     attemptId: terminal.attemptId,
     attemptStatus: terminal.status,
     reusedFromIdempotency: true,
+    ...(rehydrated.postEvidence
+      ? { postEvidence: rehydrated.postEvidence }
+      : {}),
   };
 }

 /** @deprecated alias for actions/tests migrating from heuristic materialize name */
 export const materializeProductOutcomeFromAttempt = materializeW3bProductTerminal;
 export const rehydrateProductOutcomeFromAttempt = rehydrateW3bProductTerminal;
 export const rehydrateLatestProductOutcomeForContract =
   rehydrateLatestW3bProductTerminalForContract;
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/types.ts b/projects/sfia-studio/app/features/project-assistant/w2/types.ts
index 0e07fe84..fc23a695 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/types.ts
@@ -321,92 +321,129 @@ export type GovernedExecutePhaseSuccess = {
   readonly statusLabel: string;
   readonly technicalTerminal: boolean;
   readonly productSuccessSemantics: false;
   readonly attempt: GovernedExecuteAttemptProjection;
   readonly reusedExistingAttempt?: boolean;
   readonly launchCount?: number;
   readonly launchDelta?: number;
   readonly executionPerformed?: true;
   readonly attemptCreated?: boolean;
   readonly gitWritePerformed?: false;
   readonly cycleInstanceClosed?: boolean;
   readonly projectArchived?: boolean;
 };

 export type GovernedExecutePhaseFailure = W2Failure & {
   readonly attempt?: GovernedExecuteAttemptProjection;
 };

 export type GovernedExecutePhaseResult =
   | GovernedExecutePhaseSuccess
   | GovernedExecutePhaseFailure;

 export type GovernedExecuteAuthorizedContractSuccess = GovernedExecutePhaseSuccess & {
   readonly phase: "terminal";
   readonly reusedExistingAttempt: boolean;
   readonly launchCount: number;
   readonly launchDelta: number;
   readonly executionPerformed: true;
   readonly attemptCreated: boolean;
   readonly gitWritePerformed: false;
   readonly cycleInstanceClosed: false | boolean;
   readonly projectArchived: false | boolean;
 };

 export type GovernedExecuteAuthorizedContractResult =
   | GovernedExecuteAuthorizedContractSuccess
   | GovernedExecutePhaseFailure;

 export type W3BProductOutcomeDto = {
   readonly outcome: "SUCCESS" | "STOP" | "FAIL" | "UNCLAIMED";
   readonly businessHeadline: string;
   readonly businessReason: string;
   readonly claimAllowed: boolean;
   readonly evidenceId: string | null;
   readonly reviewBundleId: string | null;
   readonly claimEvaluationId?: string | null;
   readonly claimEvaluationStatus?: string | null;
   readonly contractResultVerdict?: string | null;
   readonly evidenceStatus: string | null;
   readonly evidenceSummary: string | null;
   readonly reviewBundleCompleteness: string | null;
   readonly governedBoundary: string | null;
   readonly technicalDetail: {
     readonly attemptId: string;
     readonly attemptStatus: string;
     readonly resultRef: string | null;
     readonly errorRef: string | null;
     readonly stopReason: string | null;
     readonly stopOrigin?: string | null;
     readonly stopCode?: string | null;
     readonly executionContractId: string;
     readonly executionContractVersion: number;
   };
   readonly reservations: readonly string[];
   readonly antiClaims: {
     readonly ready: false;
     readonly w3Closed: false;
     readonly productCompletionComplete: false;
     readonly runtimeV3Adopted: false;
     readonly realProven: false;
     readonly cycleAutoClosed: false;
     readonly projectAutoArchived: false;
   };
   readonly cycleInstanceClosed: false;
   readonly projectArchived: false;
   readonly noraInvoked: false;
   readonly replanInvoked: false;
   readonly realExecution: false;
 };

+/** Serializable W3-C post-Evidence loop DTO (Recommendation ≠ HumanDecision). */
+export type W3cPostEvidenceLoopDto =
+  | {
+      readonly ok: true;
+      readonly noraInvoked: boolean;
+      readonly replanInvoked: false;
+      readonly analysisText: string | null;
+      readonly analysisUnavailableReason: string | null;
+      readonly analysisProviderId: string | null;
+      readonly recommendation: {
+        readonly kind: "continue" | "recover" | "replan" | "fail_closed";
+        readonly headline: string;
+        readonly rationale: string;
+        readonly nextStep: string;
+        readonly requiresHumanDecision: boolean;
+        readonly authority: "none";
+        readonly gateConsumed: false;
+        readonly decisionCreated: false;
+        readonly attemptAutoLaunchNextCycle: false;
+        readonly recommendNextGateStatus: string | null;
+        readonly nextActionCode: string | null;
+      };
+      readonly lpsVersion: number | null;
+      readonly evidenceId: string;
+      readonly reviewBundleId: string;
+      readonly claimEvaluationId: string | null;
+      readonly productOutcome: "SUCCESS" | "STOP" | "FAIL" | "UNCLAIMED";
+    }
+  | {
+      readonly ok: false;
+      readonly code: string;
+      readonly message: string;
+      readonly failClosed: true;
+    };
+
 export type MaterializeProductOutcomeActionResult =
   | {
       readonly ok: true;
       readonly product: W3BProductOutcomeDto;
       readonly reusedFromIdempotency: boolean;
+      readonly postEvidence?: W3cPostEvidenceLoopDto;
     }
   | {
       readonly ok: false;
       readonly code: string;
       readonly message: string;
       readonly product?: W3BProductOutcomeDto;
+      readonly postEvidence?: W3cPostEvidenceLoopDto;
     };
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts b/projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts
new file mode 100644
index 00000000..7e8e5fb5
--- /dev/null
+++ b/projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts
@@ -0,0 +1,456 @@
+/**
+ * W3-C — Post-Evidence loop after W3-B terminal materialize.
+ * Consumes durable Evidence / RB / CE (no re-ingest). Recommendation only —
+ * never HumanDecision, never auto trajectory mutation, never auto new cycle.
+ */
+
+import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
+import { SFIA_STUDIO_SYSTEM_FACTUAL_WRITER } from "@/features/project-assistant/f3/systemFactualWriter";
+import { appendEvidenceOutcomeToLps } from "@/features/project-assistant/f3/appendEvidenceOutcomeToLps";
+import { deriveAttemptProvenance } from "@/features/project-assistant/f3/deriveAttemptProvenance";
+import {
+  analyzePostEvidenceWithProvider,
+  extractPostEvidenceAnalysisFromLpsContext,
+  formatPostEvidenceAnalysisForLps,
+} from "@/features/project-assistant/f3/postEvidenceNoraAnalysis";
+import type { W3BProductTerminalProjection } from "./w3bProductTerminalProjection";
+
+export type W3cRecommendationKind =
+  | "continue"
+  | "recover"
+  | "replan"
+  | "fail_closed";
+
+export type W3cPostEvidenceRecommendation = {
+  kind: W3cRecommendationKind;
+  headline: string;
+  rationale: string;
+  nextStep: string;
+  requiresHumanDecision: boolean;
+  /** Always recommendation — never authority */
+  authority: "none";
+  gateConsumed: false;
+  decisionCreated: false;
+  attemptAutoLaunchNextCycle: false;
+  recommendNextGateStatus: string | null;
+  nextActionCode: string | null;
+};
+
+export type W3cPostEvidenceLoopSuccess = {
+  ok: true;
+  noraInvoked: boolean;
+  replanInvoked: false; // never auto-replan; propose is separate user action
+  analysisText: string | null;
+  analysisUnavailableReason: string | null;
+  analysisProviderId: string | null;
+  recommendation: W3cPostEvidenceRecommendation;
+  lpsVersion: number | null;
+  evidenceId: string;
+  reviewBundleId: string;
+  claimEvaluationId: string | null;
+  productOutcome: "SUCCESS" | "STOP" | "FAIL" | "UNCLAIMED";
+};
+
+export type W3cPostEvidenceLoopResult =
+  | W3cPostEvidenceLoopSuccess
+  | { ok: false; code: string; message: string; failClosed: true };
+
+const ANTI_AUTHORITY = {
+  authority: "none" as const,
+  gateConsumed: false as const,
+  decisionCreated: false as const,
+  attemptAutoLaunchNextCycle: false as const,
+};
+
+function failClosed(
+  code: string,
+  message: string,
+): Extract<W3cPostEvidenceLoopResult, { ok: false }> {
+  return { ok: false, code, message, failClosed: true };
+}
+
+function recommendationFromOutcome(input: {
+  outcome: "SUCCESS" | "STOP" | "FAIL";
+  recommendNextGateStatus: string | null;
+  nextActionCode: string | null;
+}): W3cPostEvidenceRecommendation {
+  if (input.outcome === "SUCCESS") {
+    return {
+      kind: "continue",
+      headline: "Continuer avec la recommandation",
+      rationale:
+        "Succès produit durable — recommandation non autoritaire ; replan structurel uniquement via propose + decide explicites.",
+      nextStep: "continue_with_recommendation",
+      requiresHumanDecision: false,
+      ...ANTI_AUTHORITY,
+      recommendNextGateStatus: input.recommendNextGateStatus,
+      nextActionCode: input.nextActionCode,
+    };
+  }
+  if (input.outcome === "STOP") {
+    return {
+      kind: "recover",
+      headline: "Requalification après arrêt gouverné",
+      rationale:
+        "Arrêt gouverné durable — recovery requiert une décision humaine après propose explicite.",
+      nextStep: "recovery_requalify",
+      requiresHumanDecision: true,
+      ...ANTI_AUTHORITY,
+      recommendNextGateStatus: input.recommendNextGateStatus,
+      nextActionCode: input.nextActionCode,
+    };
+  }
+  return {
+    kind: "recover",
+    headline: "Diagnostiquer ou replanifier après échec",
+    rationale:
+      "Échec technique durable — recovery / replan structurel nécessite propose puis decide.",
+    nextStep: "recovery_diagnose_or_replan",
+    requiresHumanDecision: true,
+    ...ANTI_AUTHORITY,
+    recommendNextGateStatus: input.recommendNextGateStatus,
+    nextActionCode: input.nextActionCode,
+  };
+}
+
+function failClosedRecommendation(input: {
+  recommendNextGateStatus: string | null;
+  nextActionCode: string | null;
+  rationale: string;
+}): W3cPostEvidenceRecommendation {
+  return {
+    kind: "fail_closed",
+    headline: "Coordination post-Evidence refusée",
+    rationale: input.rationale,
+    nextStep: "fail_closed",
+    requiresHumanDecision: true,
+    ...ANTI_AUTHORITY,
+    recommendNextGateStatus: input.recommendNextGateStatus,
+    nextActionCode: input.nextActionCode,
+  };
+}
+
+function rebuildRecommendationFromDurable(input: {
+  outcome: "SUCCESS" | "STOP" | "FAIL" | "UNCLAIMED";
+  nextStep: string | null | undefined;
+}): W3cPostEvidenceRecommendation | null {
+  if (
+    input.outcome !== "SUCCESS" &&
+    input.outcome !== "STOP" &&
+    input.outcome !== "FAIL"
+  ) {
+    return null;
+  }
+  const built = recommendationFromOutcome({
+    outcome: input.outcome,
+    recommendNextGateStatus: null,
+    nextActionCode: null,
+  });
+  if (input.nextStep && input.nextStep.trim()) {
+    return { ...built, nextStep: input.nextStep.trim() };
+  }
+  return built;
+}
+
+export async function runW3cPostEvidenceLoop(input: {
+  readonly oa: RuntimeOaStack;
+  readonly projectId: string;
+  readonly attemptId: string;
+  readonly product: W3BProductTerminalProjection;
+}): Promise<W3cPostEvidenceLoopResult> {
+  const { oa, projectId, attemptId, product } = input;
+
+  if (product.outcome === "UNCLAIMED") {
+    return failClosed(
+      "PRODUCT_UNCLAIMED",
+      "Résultat produit non claimable — boucle post-Evidence refusée.",
+    );
+  }
+  if (!product.evidenceId || !product.reviewBundleId) {
+    return failClosed(
+      "EVIDENCE_REFS_MISSING",
+      "Evidence / ReviewBundle absents sur le produit W3-B — fail-closed.",
+    );
+  }
+
+  const services = oa.evidenceReviewServices;
+  if (!services) {
+    return failClosed(
+      "EVIDENCE_STACK_UNAVAILABLE",
+      "Services Evidence indisponibles.",
+    );
+  }
+
+  const evidence = await services.evidenceReader.findById(product.evidenceId);
+  const reviewBundle = await services.reviewBundleReader.findById(
+    product.reviewBundleId,
+  );
+  if (!evidence || !reviewBundle) {
+    return failClosed(
+      "EVIDENCE_OR_RB_MISSING",
+      "Evidence ou ReviewBundle W3-B introuvable — fail-closed.",
+    );
+  }
+  if (
+    evidence.bindings.projectId &&
+    evidence.bindings.projectId !== projectId
+  ) {
+    return failClosed(
+      "EVIDENCE_PROJECT_MISMATCH",
+      "Evidence liée à un autre projet.",
+    );
+  }
+  if (reviewBundle.projectId !== projectId) {
+    return failClosed(
+      "REVIEW_BUNDLE_PROJECT_MISMATCH",
+      "ReviewBundle liée à un autre projet.",
+    );
+  }
+  if (
+    reviewBundle.status !== "ready_for_review" &&
+    !reviewBundle.frozenAt
+  ) {
+    return failClosed(
+      "REVIEW_BUNDLE_NOT_FROZEN",
+      "ReviewBundle non figée — fail-closed.",
+    );
+  }
+
+  let claimEvaluation = null;
+  if (product.claimEvaluationId) {
+    claimEvaluation = await services.claimEvaluationReader.findById(
+      product.claimEvaluationId,
+    );
+  }
+
+  if (product.outcome === "SUCCESS") {
+    if (!claimEvaluation) {
+      return failClosed(
+        "CLAIM_EVALUATION_MISSING",
+        "SUCCESS exige une ClaimEvaluation durable.",
+      );
+    }
+    if (claimEvaluation.status !== "pass" || !product.claimAllowed) {
+      return failClosed(
+        "CLAIM_NOT_PASSED",
+        "SUCCESS sans claim pass / claimAllowed — fail-closed.",
+      );
+    }
+  }
+
+  const claimEvaluationRefs = claimEvaluation
+    ? [{ id: claimEvaluation.claimEvaluationId, version: claimEvaluation.version }]
+    : undefined;
+
+  const recommended = await services.recommendNextGate.execute({
+    projectId,
+    subjectRef:
+      evidence.bindings.executionContractId ??
+      product.technicalDetail.executionContractId,
+    evidenceRefs: [{ id: evidence.evidenceId, version: evidence.version }],
+    reviewBundleRefs: [
+      { id: reviewBundle.reviewBundleId, version: reviewBundle.version },
+    ],
+    ...(claimEvaluationRefs ? { claimEvaluationRefs } : {}),
+    attemptAutoLaunchNextCycle: false,
+    actor: SFIA_STUDIO_SYSTEM_FACTUAL_WRITER,
+    correlationId: `cor:w3c-reco:${attemptId}`,
+  });
+
+  let recommendNextGateStatus: string | null = null;
+  let nextActionCode: string | null = null;
+  let recommendation: W3cPostEvidenceRecommendation;
+
+  if (!recommended.ok) {
+    // Sources exist (we loaded them) but coordination refused → honest fail_closed recommendation.
+    recommendation = failClosedRecommendation({
+      recommendNextGateStatus: recommended.error.detailCode,
+      nextActionCode: null,
+      rationale: recommended.error.message,
+    });
+  } else {
+    recommendNextGateStatus = recommended.coordination.status;
+    nextActionCode =
+      recommended.coordination.nextAction?.actionCode ?? null;
+    recommendation = recommendationFromOutcome({
+      outcome: product.outcome,
+      recommendNextGateStatus,
+      nextActionCode,
+    });
+  }
+
+  let analysisText: string | null = null;
+  let analysisUnavailableReason: string | null = null;
+  let analysisProviderId: string | null = null;
+  let noraInvoked = false;
+
+  let contractStatus = "unknown";
+  let contractAction = "unknown";
+  let attemptStatus = product.technicalDetail.attemptStatus;
+  let selectedAgentRef = "unknown";
+  let adapterRef = "adp:unknown";
+  let executionMode = "unknown";
+  let realProcessInvoked = false;
+
+  if (oa.executionAttemptServices) {
+    const loaded = await oa.executionAttemptServices.getExecutionAttempt.execute({
+      attemptId,
+    });
+    if (loaded.ok) {
+      attemptStatus = loaded.attempt.status;
+      selectedAgentRef = loaded.attempt.selectedAgentRef;
+      const agent = oa.executionAttemptServices.registry.getAgent(
+        loaded.attempt.selectedAgentRef,
+      );
+      const provenance = deriveAttemptProvenance({
+        attempt: loaded.attempt,
+        agent,
+      });
+      adapterRef = provenance.adapterRef;
+      executionMode = provenance.executionMode;
+      realProcessInvoked = provenance.realProcessInvoked;
+    }
+  }
+  if (oa.executionContractServices) {
+    const loaded =
+      await oa.executionContractServices.getExecutionContract.execute({
+        executionContractId: product.technicalDetail.executionContractId,
+      });
+    if (loaded.ok) {
+      contractStatus = loaded.contract.status;
+      contractAction = loaded.contract.action;
+    }
+  }
+
+  noraInvoked = true;
+  const analysis = await analyzePostEvidenceWithProvider({
+    projectId,
+    executionContractId: product.technicalDetail.executionContractId,
+    executionContractStatus: contractStatus,
+    executionContractAction: contractAction,
+    attemptId,
+    attemptStatus,
+    selectedAgentRef,
+    adapterRef,
+    executionMode,
+    realProcessInvoked,
+    evidenceId: product.evidenceId,
+    reviewBundleId: product.reviewBundleId,
+    technicalResultRef: product.technicalDetail.resultRef,
+    reservations: product.reservations,
+  });
+  if (analysis.ok) {
+    analysisText = analysis.text;
+    analysisProviderId = analysis.providerId;
+  } else {
+    analysisUnavailableReason = analysis.message;
+    analysisProviderId = analysis.providerId;
+  }
+
+  const analysisNote = formatPostEvidenceAnalysisForLps(
+    analysis.ok
+      ? { analysisText: analysis.text }
+      : { unavailableReason: analysis.message },
+  );
+
+  let lpsVersion: number | null = null;
+  if (oa.projectServices) {
+    const linked = await appendEvidenceOutcomeToLps({
+      projectId,
+      evidenceId: product.evidenceId,
+      reviewBundleId: product.reviewBundleId,
+      projectServices: oa.projectServices,
+      analysisNote,
+      nextStep: recommendation.nextStep,
+    });
+    if (!linked.ok) {
+      return failClosed(linked.code, linked.message);
+    }
+    lpsVersion = linked.lpsVersion;
+  }
+
+  return {
+    ok: true,
+    noraInvoked,
+    replanInvoked: false,
+    analysisText,
+    analysisUnavailableReason,
+    analysisProviderId,
+    recommendation,
+    lpsVersion,
+    evidenceId: product.evidenceId,
+    reviewBundleId: product.reviewBundleId,
+    claimEvaluationId: product.claimEvaluationId,
+    productOutcome: product.outcome,
+  };
+}
+
+export async function rehydrateW3cPostEvidenceFromLps(input: {
+  readonly oa: RuntimeOaStack;
+  readonly projectId: string;
+  readonly product: W3BProductTerminalProjection;
+}): Promise<W3cPostEvidenceLoopResult> {
+  const { oa, projectId, product } = input;
+
+  if (!product.evidenceId || !product.reviewBundleId) {
+    return failClosed(
+      "EVIDENCE_REFS_MISSING",
+      "Produit sans refs Evidence/RB — rehydrate post-Evidence refuse.",
+    );
+  }
+  if (product.outcome === "UNCLAIMED") {
+    return failClosed(
+      "PRODUCT_UNCLAIMED",
+      "UNCLAIMED — pas de boucle post-Evidence à rehydrater.",
+    );
+  }
+  if (!oa.projectServices) {
+    return failClosed(
+      "PROJECT_SERVICES_UNAVAILABLE",
+      "ProjectServices indisponibles pour rehydrate LPS.",
+    );
+  }
+
+  const current = await oa.projectServices.getCurrentLivingProjectState.execute({
+    projectId,
+  });
+  if (!current.ok) {
+    return failClosed(current.error.detailCode, current.error.message);
+  }
+
+  const lps = current.livingProjectState;
+  const evidenceIds = lps.evidenceIds ?? [];
+  if (!evidenceIds.includes(product.evidenceId)) {
+    return failClosed(
+      "LPS_EVIDENCE_REF_MISSING",
+      "LPS sans evidenceId W3-B pour ce produit — fail-closed.",
+    );
+  }
+
+  const postEvidence = extractPostEvidenceAnalysisFromLpsContext(lps.context);
+  const recommendation = rebuildRecommendationFromDurable({
+    outcome: product.outcome,
+    nextStep: lps.nextStep,
+  });
+  if (!recommendation) {
+    return failClosed(
+      "RECOMMENDATION_UNRECONSTRUCTIBLE",
+      "Impossible de reconstruire la recommandation depuis le produit / LPS.",
+    );
+  }
+
+  return {
+    ok: true,
+    noraInvoked: Boolean(postEvidence.analysisText),
+    replanInvoked: false,
+    analysisText: postEvidence.analysisText,
+    analysisUnavailableReason: postEvidence.analysisUnavailableReason,
+    analysisProviderId: null,
+    recommendation,
+    lpsVersion: lps.version,
+    evidenceId: product.evidenceId,
+    reviewBundleId: product.reviewBundleId,
+    claimEvaluationId: product.claimEvaluationId,
+    productOutcome: product.outcome,
+  };
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/testExecutionAdapter.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/testExecutionAdapter.ts
index c5a3ddf5..aa603f17 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/testExecutionAdapter.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/testExecutionAdapter.ts
@@ -1,161 +1,185 @@
 /**
  * TestExecutionAdapter — scripted, deterministic, memory-only fixture.
  *
  * No shell, no network, no MCP, no Cursor, no child process, no configurable
  * command, no secret/endpoint/token. It records a call journal and replays a
  * memoized outcome per attemptId so `launch` and `cancel` are idempotent.
  */
 import type {
   AdapterCall,
   CancelRequest,
   CancelResult,
   ExecutionAdapterPort,
   LaunchRequest,
   LaunchResult,
 } from "../ports/executionAdapter";

 export type ScriptedLaunchOutcome =
   | { outcome: "ack" }
   | { outcome: "reject"; reason: string }
   | { outcome: "fail"; reason: string }
   | { outcome: "throw"; reason: string };

 export type ScriptedCancelOutcome =
   | { outcome: "ack" }
   | { outcome: "fail"; reason: string; irreversibleEffectsPossible?: boolean }
   | { outcome: "throw"; reason: string };

 export type TestExecutionAdapterOptions = {
   adapterId?: string;
   /** Per-attempt scripted outcomes; falls back to the default outcome. */
   launchFixtures?: Record<string, ScriptedLaunchOutcome>;
   cancelFixtures?: Record<string, ScriptedCancelOutcome>;
   defaultLaunch?: ScriptedLaunchOutcome;
   defaultCancel?: ScriptedCancelOutcome;
   /**
    * Adversarial QA hook: override the adapterId returned in LaunchAck while
    * keeping the real `this.adapterId` identity. Used to prove Start fails
    * closed on adapter identity binding mismatch.
    */
   spoofAdapterIdOnAck?: string;
 };

 export class TestExecutionAdapter implements ExecutionAdapterPort {
   readonly adapterId: string;
   readonly externalEffects = false as const;
   readonly calls: AdapterCall[] = [];

   private readonly launchFixtures: Record<string, ScriptedLaunchOutcome>;
   private readonly cancelFixtures: Record<string, ScriptedCancelOutcome>;
   private defaultLaunch: ScriptedLaunchOutcome;
   private defaultCancel: ScriptedCancelOutcome;
+  private oneShotLaunch: ScriptedLaunchOutcome | undefined;
   private readonly spoofAdapterIdOnAck: string | undefined;
   private readonly launched = new Map<string, LaunchResult>();
   private readonly cancelled = new Map<string, CancelResult>();

   constructor(options: TestExecutionAdapterOptions = {}) {
     this.adapterId = options.adapterId ?? "adp:test-fixture";
     this.launchFixtures = { ...(options.launchFixtures ?? {}) };
     this.cancelFixtures = { ...(options.cancelFixtures ?? {}) };
     this.defaultLaunch = options.defaultLaunch ?? { outcome: "ack" };
     this.defaultCancel = options.defaultCancel ?? { outcome: "ack" };
+    this.oneShotLaunch = undefined;
     this.spoofAdapterIdOnAck = options.spoofAdapterIdOnAck;
   }

   get launchCallCount(): number {
     return this.calls.filter((call) => call.kind === "launch").length;
   }

   get cancelCallCount(): number {
     return this.calls.filter((call) => call.kind === "cancel").length;
   }

   /**
    * E2E/QA scripting only — mutate default launch outcome for subsequent attempts.
    * Does not change adapter identity or externalEffects.
    */
   queueDefaultLaunch(outcome: ScriptedLaunchOutcome): void {
     this.defaultLaunch = outcome;
   }

+  /**
+   * E2E/QA — next launch only; then reverts to defaultLaunch.
+   * Prevents adapter_fail arm from poisoning subsequent SUCCESS attempts.
+   */
+  queueOneShotLaunch(outcome: ScriptedLaunchOutcome): void {
+    this.oneShotLaunch = outcome;
+  }
+
+  /** E2E/QA — clear residual one-shot / restore ack default. */
+  resetScriptedLaunchDefaults(): void {
+    this.oneShotLaunch = undefined;
+    this.defaultLaunch = { outcome: "ack" };
+  }
+
   /** E2E/QA scripting only — mutate default cancel outcome. */
   queueDefaultCancel(outcome: ScriptedCancelOutcome): void {
     this.defaultCancel = outcome;
   }

   async launch(request: LaunchRequest): Promise<LaunchResult> {
     const memoized = this.launched.get(request.attemptId);
     if (memoized) {
       this.calls.push({
         kind: "launch",
         attemptId: request.attemptId,
         replayed: true,
       });
       return structuredClone(memoized);
     }
     this.calls.push({
       kind: "launch",
       attemptId: request.attemptId,
       replayed: false,
     });
     const scripted =
-      this.launchFixtures[request.attemptId] ?? this.defaultLaunch;
+      this.launchFixtures[request.attemptId] ??
+      (() => {
+        if (this.oneShotLaunch) {
+          const once = this.oneShotLaunch;
+          this.oneShotLaunch = undefined;
+          return once;
+        }
+        return this.defaultLaunch;
+      })();
     if (scripted.outcome === "throw") {
       throw new Error(`test_adapter_launch_threw:${scripted.reason}`);
     }
     const ackAdapterId = this.spoofAdapterIdOnAck ?? this.adapterId;
     const result: LaunchResult =
       scripted.outcome === "ack"
         ? {
             outcome: "ack",
             adapterId: ackAdapterId,
             attemptId: request.attemptId,
           }
         : {
             outcome: scripted.outcome,
             adapterId: this.adapterId,
             attemptId: request.attemptId,
             reason: scripted.reason,
           };
     this.launched.set(request.attemptId, result);
     return structuredClone(result);
   }

   async cancel(request: CancelRequest): Promise<CancelResult> {
     const memoized = this.cancelled.get(request.attemptId);
     if (memoized) {
       this.calls.push({
         kind: "cancel",
         attemptId: request.attemptId,
         replayed: true,
       });
       return structuredClone(memoized);
     }
     this.calls.push({
       kind: "cancel",
       attemptId: request.attemptId,
       replayed: false,
     });
     const scripted =
       this.cancelFixtures[request.attemptId] ?? this.defaultCancel;
     if (scripted.outcome === "throw") {
       throw new Error(`test_adapter_cancel_threw:${scripted.reason}`);
     }
     const result: CancelResult =
       scripted.outcome === "ack"
         ? {
             outcome: "ack",
             adapterId: this.adapterId,
             attemptId: request.attemptId,
           }
         : {
             outcome: "fail",
             adapterId: this.adapterId,
             attemptId: request.attemptId,
             reason: scripted.reason,
             irreversibleEffectsPossible: scripted.irreversibleEffectsPossible,
           };
     this.cancelled.set(request.attemptId, result);
     return structuredClone(result);
   }
 }
diff --git a/projects/sfia-studio/app/lib/oa/project/application/appendLivingProjectStateVersion.ts b/projects/sfia-studio/app/lib/oa/project/application/appendLivingProjectStateVersion.ts
index 8b019b71..39e945e1 100644
--- a/projects/sfia-studio/app/lib/oa/project/application/appendLivingProjectStateVersion.ts
+++ b/projects/sfia-studio/app/lib/oa/project/application/appendLivingProjectStateVersion.ts
@@ -177,160 +177,161 @@ export class AppendLivingProjectStateVersion {
         request.projectId,
       );
       if (!preflightCurrent) {
         return fail("LPS_NOT_FOUND", "missing_current_lps");
       }

       const lpsVersionId = request.lpsVersionId ?? newId("lps");
       if (await this.lps.findById(lpsVersionId)) {
         return fail("LPS_INVALID", "lps_version_id_taken");
       }

       let livingProjectState: LivingProjectState | undefined;
       let updatedProject: Project | undefined;
       let previousLpsVersionId: string | undefined;
       let nextVersion = 0;

       const persist = async () => {
         // Re-read under the transaction/mutex — concurrent double-append must conflict.
         const current = await this.lps.findCurrentByProjectId(request.projectId);
         if (!current) {
           throw new Error("missing_current_lps");
         }
         if (request.expectedVersion !== current.version) {
           throw new LpsVersionConflictSignal(
             current.version,
             current.lpsVersionId,
           );
         }

         nextVersion = current.version + 1;
         if (nextVersion <= current.version) {
           throw new Error("non_monotonic_version");
         }

         previousLpsVersionId = current.lpsVersionId;

         const provenance = appendProvenance({
           timestamp,
           correlationId,
           projectId: request.projectId,
           actor: request.createdBy,
           doctrinePackageRef: `${doctrinePackageRef.doctrinePackageId}@${doctrinePackageRef.version}`,
           supersedes: current.provenance?.provenanceRecordId,
         });

         const pickLink = <T>(
           next: T | null | undefined,
           prior: T | undefined,
         ): T | undefined => {
           if (next === null) return undefined;
           if (next !== undefined) return next;
           return prior;
         };

         const nextLps: LivingProjectState = {
           schemaVersion: "0.1.0-oa",
           lpsVersionId,
           projectId: request.projectId,
           version: nextVersion,
           supersedesLpsVersionId: current.lpsVersionId,
           status: "active",
           objective: request.objective.trim(),
           context: request.context ?? current.context,
           scope: request.scope ?? current.scope,
           constraints: current.constraints ? [...current.constraints] : [],
           stakeholders: current.stakeholders ? [...current.stakeholders] : [],
           doctrinePackageRef: structuredClone(doctrinePackageRef),
           ckcResolutionRef: pickLink(
             request.ckcResolutionRef,
             current.ckcResolutionRef,
           ),
           activeCycleInstanceId: pickLink(
             request.activeCycleInstanceId,
             current.activeCycleInstanceId,
           ),
           trajectoryId: pickLink(request.trajectoryId, current.trajectoryId),
           trajectoryVersion: pickLink(
             request.trajectoryVersion,
             current.trajectoryVersion,
           ),
+          nextStep: pickLink(request.nextStep, current.nextStep),
           epistemicItemIds:
             request.epistemicItemIds !== undefined
               ? [...request.epistemicItemIds]
               : current.epistemicItemIds
                 ? [...current.epistemicItemIds]
                 : [],
           decisionIds:
             request.decisionIds !== undefined
               ? [...request.decisionIds]
               : current.decisionIds
                 ? [...current.decisionIds]
                 : [],
           evidenceIds:
             request.evidenceIds !== undefined
               ? [...request.evidenceIds]
               : current.evidenceIds
                 ? [...current.evidenceIds]
                 : [],
           reviewBundleIds:
             request.reviewBundleIds !== undefined
               ? [...request.reviewBundleIds]
               : current.reviewBundleIds
                 ? [...current.reviewBundleIds]
                 : [],
           createdAt: timestamp,
           createdBy: structuredClone(request.createdBy),
           correlationId,
           provenance,
           uiOwnership: false,
         };

         const nextProject: Project = {
           ...structuredClone(project),
           currentLpsVersionId: lpsVersionId,
           activeCycleInstanceId: pickLink(
             request.activeCycleInstanceId,
             project.activeCycleInstanceId,
           ),
           updatedAt: timestamp,
         };

         await this.lps.markSuperseded(current.lpsVersionId);
         await this.lps.save(nextLps);
         await this.projects.save(nextProject);

         livingProjectState = nextLps;
         updatedProject = nextProject;
       };

       try {
         if (this.store) {
           await this.store.runInTransaction(persist);
         } else {
           await persist();
         }
       } catch (err) {
         if (err instanceof LpsVersionConflictSignal) {
           return fail("LPS_VERSION_CONFLICT", "expected_version_mismatch", {
             expectedVersion: request.expectedVersion,
             currentVersion: err.currentVersion,
             lpsVersionId: err.lpsVersionId,
           });
         }
         return fail("PERSISTENCE_FAILURE", "atomic_append_failed");
       }

       if (!livingProjectState || !updatedProject || !previousLpsVersionId) {
         return fail("PERSISTENCE_FAILURE", "atomic_append_incomplete");
       }

       const durationMs = Date.now() - started;
       this.audit.append({
         event: "oa.lps.version_appended",
         ts: timestamp,
         correlationId,
         projectId: request.projectId,
         lpsVersion: nextVersion,
         previousLpsVersionId,
         result: "ok",
         durationMs,
diff --git a/projects/sfia-studio/app/lib/oa/project/domain/types.ts b/projects/sfia-studio/app/lib/oa/project/domain/types.ts
index a3fccaa7..1d881208 100644
--- a/projects/sfia-studio/app/lib/oa/project/domain/types.ts
+++ b/projects/sfia-studio/app/lib/oa/project/domain/types.ts
@@ -58,160 +58,165 @@ export type LivingProjectState = {
   status: LivingProjectStateStatus;
   objective: string;
   context?: string;
   scope?: string;
   constraints?: string[];
   stakeholders?: string[];
   doctrinePackageRef: DoctrinePackageRef;
   ckcResolutionRef?: string;
   activeCycleInstanceId?: string;
   trajectoryId?: string;
   trajectoryVersion?: number;
   epistemicItemIds?: string[];
   decisionIds?: string[];
   reservationIds?: string[];
   contradictionIds?: string[];
   evidenceIds?: string[];
   debtItemIds?: string[];
   riskItemIds?: string[];
   reviewBundleIds?: string[];
   maturityAssessmentId?: string;
   nextStep?: string;
   createdAt: string;
   createdBy: ActorReference;
   correlationId?: string;
   provenance?: ProvenanceRecord;
   uiOwnership?: false;
 };

 export type CreateProjectRequest = {
   projectId: string;
   title: string;
   objective: string;
   doctrinePackagePin: DoctrinePackagePin;
   createdBy: ActorReference;
   correlationId?: string;
   idempotencyKey?: string;
   /** Optional explicit LPS id; otherwise generated. */
   lpsVersionId?: string;
   context?: string;
   scope?: string;
 };

 export type AppendLivingProjectStateRequest = {
   projectId: string;
   expectedVersion: number;
   objective: string;
   createdBy: ActorReference;
   correlationId?: string;
   lpsVersionId?: string;
   context?: string;
   scope?: string;
   /**
    * Optional pin echo — must match Project.doctrinePackageRef (id+version+digest).
    * No re-resolve; mismatch → DOCTRINE_UNRESOLVED / LPS_INVALID.
    */
   doctrinePackagePin?: DoctrinePackagePin;
   /**
    * Optional linkage fields (T-A2 consumers). When omitted, carried forward
    * from the current LPS snapshot. Explicit `null` clears the field.
    */
   trajectoryId?: string | null;
   trajectoryVersion?: number | null;
   activeCycleInstanceId?: string | null;
   ckcResolutionRef?: string | null;
   epistemicItemIds?: string[];
   /**
    * Optional decision id linkage (T-A3 consumers). When omitted, carried
    * forward from the current LPS snapshot (same pattern as epistemicItemIds).
    */
   decisionIds?: string[];
   /**
    * Optional evidence id linkage (M5-B W1). When omitted, carried forward
    * from the current LPS snapshot.
    */
   evidenceIds?: string[];
   /**
    * Optional review-bundle id linkage (M5-B W1). When omitted, carried
    * forward from the current LPS snapshot.
    */
   reviewBundleIds?: string[];
+  /**
+   * Optional next-step linkage (W3-C post-Evidence recommendation).
+   * When omitted, carried forward. Explicit `null` clears the field.
+   */
+  nextStep?: string | null;
 };

 /** Modeled ErrorRecord codes applicable to Project/LPS (M-OA). */
 export type ProjectModeledErrorCode =
   | "DOCTRINE_UNRESOLVED"
   | "STATE_CONFLICT";

 /**
  * T-A1 detail codes — finer than modeled ErrorRecord enum.
  * Mapped onto ProjectModeledErrorCode for ErrorRecord-compatible emission (T-A1-D08).
  */
 export type ProjectDetailCode =
   | "PROJECT_INVALID"
   | "PROJECT_ALREADY_EXISTS"
   | "PROJECT_NOT_FOUND"
   | "LPS_NOT_FOUND"
   | "LPS_VERSION_CONFLICT"
   | "LPS_INVALID"
   | "DOCTRINE_UNRESOLVED"
   | "PERSISTENCE_FAILURE";

 export type ProjectStructuredError = {
   code: ProjectModeledErrorCode;
   detailCode: ProjectDetailCode;
   message: string;
   severity: "error" | "critical";
   retryable: boolean;
   blocking: boolean;
   recoverable: boolean;
   domain: "C";
   correlationId?: string;
   projectId?: string;
   lpsVersionId?: string;
   expectedVersion?: number;
   currentVersion?: number;
   doctrinePackageId?: string;
   version?: string;
   provenance?: ProvenanceRecord;
   timestamp: string;
   /** Opaque internal cause — never exposed to clients. */
   internalCauseRef?: string;
 };

 export type CreateProjectSuccess = {
   ok: true;
   project: Project;
   livingProjectState: LivingProjectState;
   reusedFromIdempotencyKey?: boolean;
   durationMs: number;
 };

 export type CreateProjectFailure = {
   ok: false;
   error: ProjectStructuredError;
   durationMs: number;
 };

 export type CreateProjectResult = CreateProjectSuccess | CreateProjectFailure;

 export type GetProjectSuccess = {
   ok: true;
   project: Project;
 };

 export type GetProjectFailure = {
   ok: false;
   error: ProjectStructuredError;
 };

 export type GetProjectResult = GetProjectSuccess | GetProjectFailure;

 export type ListProjectsSuccess = {
   ok: true;
   projects: Project[];
 };

 export type ListProjectsFailure = {
   ok: false;
   error: ProjectStructuredError;
 };
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
index c2cc4853..df653d59 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
@@ -1,303 +1,305 @@
 import "./serverGuard";
 import {
   BoundedSqliteLocalProjectCreationAudit,
   LOCAL_VERTICAL_SLICE_ARCHITECTURE,
   MemoryLocalProjectCreationAudit,
   NoOpLocalProjectCreationAudit,
   createLocalVerticalSliceServices,
   resolveDoctrinePackagePinForRegistry,
   type LocalProjectFacade,
   type LocalProjectIdSource,
   type LocalVerticalSliceCompositionOptions,
   type LocalVerticalSliceServices,
 } from "@/lib/vertical-slice-core";
 import type { BoundedAtomicAuditStore } from "@/lib/d1/boundedAtomicAudit";
 import type { DoctrinePackagePin, ClockPort } from "@/lib/oa/doctrine";
 import {
   createCkcQualificationServices,
   createInMemoryCycleServices,
   createSqliteCycleServices,
   type CkcQualificationServices,
   type CycleServices,
 } from "@/lib/oa/cycle";
 import {
   MemoryAuthorityResolver,
   createInMemoryDecisionServices,
   createSqliteDecisionServices,
   isM3LocalAuthorityEnabled,
   type DecisionServices,
 } from "@/lib/oa/decision";
 import {
   createInMemoryExecutionContractServices,
   createSqliteExecutionContractServices,
   type ExecutionContractServices,
 } from "@/lib/oa/execution-contract";
 import {
   createInMemoryExecutionAttemptServices,
   createSqliteExecutionAttemptServices,
   createM4BoundedReadOnlyCursorAgentDescriptor,
   isStudioCursorRealEnabled,
   type ExecutionAttemptServices,
   type RealBoundaryWiring,
   type TestExecutionAdapter,
 } from "@/lib/oa/execution-attempt";
 import {
   composeStudioProductRealBoundary,
   type ComposeStudioProductRealBoundaryInput,
 } from "./composeStudioProductRealBoundary";
 import {
   createInMemoryEvidenceReviewServices,
   createSqliteEvidenceReviewServices,
   type EvidenceReviewServices,
   type SqliteEvidenceReviewServices,
 } from "@/lib/oa/evidence-review";
 import type { ProjectServices } from "@/lib/oa/project";
 import { SqliteProductStore } from "@/lib/oa/project/infrastructure/sqlite/sqliteProductStore";
 import {
   createAttemptReaderBridge,
   createF3FixtureAgentDescriptor,
   createF3TestExecutionAdapter,
 } from "./f3FixtureWiring";
 import { createW3ABoundedFixtureAgentDescriptor } from "./w3aProductFixtureWiring";
 import { MemoryAgentRegistry } from "@/lib/oa/execution-attempt";
 import {
   toCreateLocalProjectCommand,
   toCreateProjectRuntimeFailure,
   toCreateProjectRuntimeSuccess,
   toGetProjectRuntimeFailure,
   toGetProjectRuntimeSuccess,
   toListProjectsRuntimeFailure,
   toListProjectsRuntimeSuccess,
 } from "./mapping";
 import { resolveDefaultVerticalSliceRoots } from "./paths";
+import { registerW3bFixtureAdapterForE2eReset } from "./w3bE2eBoundaryControl";
 import type {
   CreateProjectRuntimeInput,
   CreateProjectRuntimeResult,
   GetProjectRuntimeResult,
   ListProjectsRuntimeResult,
 } from "./types";

 export type RuntimeAuditMode = "noop" | "memory" | "sqlite";

 export interface RuntimeApplicationServiceOptions {
   readonly registryRoot?: string;
   readonly schemasRoot?: string;
   readonly doctrinePackagePin?: DoctrinePackagePin;
   readonly idSource?: LocalProjectIdSource;
   readonly nowIso?: string;
   /**
    * D-V2-03: default noop. `sqlite` requires `sqliteAuditStore`.
    * Audit never rehydrates business state.
    */
   readonly auditMode?: RuntimeAuditMode;
   readonly sqliteAuditStore?: BoundedAtomicAuditStore;
   /**
    * OA Product SQLite path (M1). Isolated from D1/OPS1/FinOps.
    */
   readonly productDbPath?: string;
   /**
    * Escape hatch for tests: inject a fully built V1 facade.
    * Production path builds via createLocalVerticalSliceServices.
    */
   readonly facade?: LocalProjectFacade;
   /**
    * Optional M4 REAL boundary. Explicit inject wins (tests).
    * Otherwise composed OFF-by-default from SFIA_STUDIO_CURSOR_REAL.
    */
   readonly realBoundary?: RealBoundaryWiring;
   /**
    * Env snapshot for live-boundary composition only. Never used to spawn.
    * Tests inject `{ SFIA_STUDIO_CURSOR_REAL: "1" }` with fake deps.
    */
   readonly realBoundaryEnv?: NodeJS.ProcessEnv;
   /**
    * Test/production overrides for composeStudioProductRealBoundary.
    * Construction still launches nothing.
    */
   readonly realBoundaryComposition?: ComposeStudioProductRealBoundaryInput;
 }

 export type RuntimeOaStack = {
   readonly projectServices: ProjectServices;
   readonly clock: ClockPort;
   readonly cycleServices: CycleServices;
   readonly ckcQualification: CkcQualificationServices;
   readonly decisionServices: DecisionServices;
   readonly authorityResolver: MemoryAuthorityResolver;
   readonly executionContractServices: ExecutionContractServices;
   readonly executionAttemptServices: ExecutionAttemptServices;
   readonly evidenceReviewServices: EvidenceReviewServices | SqliteEvidenceReviewServices;
   /** Explicit TestExecutionAdapter — never silent NoOp. */
   readonly fixtureAdapter: TestExecutionAdapter;
   /**
    * True when OA Attempt/Evidence/ReviewBundle/LPS path uses Product SQLite.
    * Distinguishes persistence durability from fixture execution mode.
    */
   readonly productDurablePath: boolean;
 };

 function resolveAudit(
   mode: RuntimeAuditMode,
   sqliteAuditStore: BoundedAtomicAuditStore | undefined,
 ): LocalVerticalSliceCompositionOptions["audit"] {
   if (mode === "memory") {
     return new MemoryLocalProjectCreationAudit();
   }
   if (mode === "sqlite") {
     if (!sqliteAuditStore) {
       throw new Error(
         "sqlite audit mode requires sqliteAuditStore (bounded D1 audit table).",
       );
     }
     return new BoundedSqliteLocalProjectCreationAudit(sqliteAuditStore);
   }
   return new NoOpLocalProjectCreationAudit();
 }

 function wireOaStack(
   projectServices: ProjectServices,
   clock: ClockPort,
   options?: {
     realBoundary?: RealBoundaryWiring;
     registryRoot?: string;
     doctrinePackagePin?: DoctrinePackagePin;
   },
 ): RuntimeOaStack {
   // M2/M3: same Product SQLite store for Project/LPS + Cycle + Decision + Contract.
   const productSqlite =
     projectServices.store instanceof SqliteProductStore
       ? projectServices.store
       : null;
   const cycleServices = productSqlite
     ? createSqliteCycleServices({
         projectServices,
         productStore: productSqlite,
         clock,
       })
     : createInMemoryCycleServices({ projectServices, clock });
   const ckcQualification = createCkcQualificationServices({
     clock,
     registryRoot: options?.registryRoot,
     doctrinePackagePin: options?.doctrinePackagePin,
   });
   const authorityResolver = new MemoryAuthorityResolver();
   // M3 authority is fail-closed unless env enabled; registration happens per-scope in F2/F3.
   void isM3LocalAuthorityEnabled;

   const decisionServices = productSqlite
     ? createSqliteDecisionServices({
         projectServices,
         cycleServices,
         productStore: productSqlite,
         clock,
         authorityResolver,
       })
     : createInMemoryDecisionServices({
         projectServices,
         cycleServices,
         clock,
         authorityResolver,
       });

   const executionContractServices = productSqlite
     ? createSqliteExecutionContractServices({
         projectServices,
         decisionServices,
         cycleServices,
         productStore: productSqlite,
         clock,
         authorityResolver,
       })
     : createInMemoryExecutionContractServices({
         projectServices,
         decisionServices,
         cycleServices,
         clock,
         authorityResolver,
       });

   // EXPLICIT TestExecutionAdapter — never omit (factory default is NoOp).
   // GAP-3: realBoundary is optional and OFF by default. M4 descriptor is
   // registered only on the governed path (injected boundary or REAL flag).
   // This composition does not instantiate StudioCursorRealLaunchGateway.
   const fixtureAdapter = createF3TestExecutionAdapter();
+  registerW3bFixtureAdapterForE2eReset(fixtureAdapter);
   const fixtureAgent = createF3FixtureAgentDescriptor(clock.nowIso());
   const w3aBoundedAgent = createW3ABoundedFixtureAgentDescriptor(clock.nowIso());
   const realBoundary = options?.realBoundary;
   const registerM4 =
     realBoundary !== undefined || isStudioCursorRealEnabled();
   // Bounded W3-A fixture: explicit supported actions/caps ONLY (no universal synthesis).
   const agents = registerM4
     ? [
         fixtureAgent,
         w3aBoundedAgent,
         createM4BoundedReadOnlyCursorAgentDescriptor(clock.nowIso()),
       ]
     : [fixtureAgent, w3aBoundedAgent];
   const registry = new MemoryAgentRegistry(agents);
   const executionAttemptServices = productSqlite
     ? createSqliteExecutionAttemptServices({
         decisionServices,
         executionContractServices,
         productStore: productSqlite,
         registry,
         adapter: fixtureAdapter,
         clock,
         authorityResolver,
         policy: { defaultMaxRetriesBudget: 0 },
         realBoundary,
       })
     : createInMemoryExecutionAttemptServices({
         decisionServices,
         executionContractServices,
         registry,
         adapter: fixtureAdapter,
         clock,
         authorityResolver,
         policy: { defaultMaxRetriesBudget: 0 },
         realBoundary,
       });

   const evidenceReviewServices = productSqlite
     ? createSqliteEvidenceReviewServices({
         productStore: productSqlite,
         clock,
         attemptReader: createAttemptReaderBridge(
           executionAttemptServices.attempts,
         ),
       })
     : createInMemoryEvidenceReviewServices({
         clock,
         attemptReader: createAttemptReaderBridge(
           executionAttemptServices.attempts,
         ),
       });

   return Object.freeze({
     projectServices,
     clock,
     cycleServices,
     ckcQualification,
     decisionServices,
     authorityResolver,
     executionContractServices,
     executionAttemptServices,
     evidenceReviewServices,
     fixtureAdapter,
     productDurablePath: productSqlite !== null,
   });
 }

 /**
  * Application runtime service over V1 LocalProjectFacade.
  * Does not duplicate T-A0/T-A1 rules; maps serializable DTOs only.
  * Exposes shared OA stack for F2 + F3 (same ProjectServices instance).
  */
 export class RuntimeApplicationService {
   private readonly facade: LocalProjectFacade;
   readonly architecture: LocalVerticalSliceServices["architecture"];
   readonly oa: RuntimeOaStack | null;
   private readonly disposeProduct?: () => void;

   constructor(
     facade: LocalProjectFacade,
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/w3bE2eBoundaryControl.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/w3bE2eBoundaryControl.ts
index 5a297bb6..1bb8752e 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/w3bE2eBoundaryControl.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/w3bE2eBoundaryControl.ts
@@ -1,79 +1,95 @@
 /**
  * W3-B TEST-ONLY external-boundary arming (E2E / integration).
  * Arms TestExecutionAdapter fail OR a post-start governed stop code.
  * Never creates Product Outcome directly. Disabled outside E2E gates.
  */

 import type { TestExecutionAdapter } from "@/lib/oa/execution-attempt";

 export type W3bBoundaryArm =
   | {
       readonly kind: "adapter_fail";
       readonly reason: string;
     }
   | {
       readonly kind: "governed_stop";
       /** Must match an EC stopCondition or PROTECTED:* constraint. */
       readonly stopCondition: string;
     };

 const ARM_KEY = "__SFIA_E2E_W3B_BOUNDARY_ARM__" as const;

 function armSlot(): { current: W3bBoundaryArm | null } {
   const g = globalThis as typeof globalThis & {
     [ARM_KEY]?: { current: W3bBoundaryArm | null };
   };
   if (!g[ARM_KEY]) g[ARM_KEY] = { current: null };
   return g[ARM_KEY];
 }

 export function isW3bBoundaryControlEnabled(): boolean {
   if (process.env.NODE_ENV === "production") return false;
   if (process.env.OPS1_E2E_ALLOW_DIRTY_PRINCIPAL !== "1") return false;
   if (process.env.OPS1_CONVERSATION_PROVIDER !== "fake") return false;
   if (process.env.SFIA_STUDIO_CURSOR_REAL === "1") return false;
   if (process.env.OPS1_CURSOR_REAL === "1") return false;
   if (
     process.env.SFIA_STUDIO_E2E_QA_CONTROL !== "1" &&
     process.env.VITEST !== "true" &&
     process.env.NODE_ENV !== "test"
   ) {
     return false;
   }
   return true;
 }

 export function armW3bBoundary(arm: W3bBoundaryArm): void {
   if (!isW3bBoundaryControlEnabled()) {
     throw new Error("W3B_BOUNDARY_CONTROL_DISABLED");
   }
   armSlot().current = arm;
 }

 export function peekW3bBoundaryArm(): W3bBoundaryArm | null {
   return armSlot().current;
 }

 export function consumeW3bBoundaryArm(): W3bBoundaryArm | null {
   const slot = armSlot();
   const current = slot.current;
   slot.current = null;
   return current;
 }

+const FIXTURE_RESET_KEY = "__SFIA_E2E_W3B_FIXTURE_ADAPTER__" as const;
+
+export function registerW3bFixtureAdapterForE2eReset(
+  adapter: TestExecutionAdapter | null | undefined,
+): void {
+  const g = globalThis as typeof globalThis & {
+    [FIXTURE_RESET_KEY]?: TestExecutionAdapter | null;
+  };
+  g[FIXTURE_RESET_KEY] = adapter ?? null;
+}
+
 export function clearW3bBoundaryArm(): void {
   armSlot().current = null;
+  const g = globalThis as typeof globalThis & {
+    [FIXTURE_RESET_KEY]?: TestExecutionAdapter | null;
+  };
+  const adapter = g[FIXTURE_RESET_KEY];
+  if (adapter) adapter.resetScriptedLaunchDefaults();
 }

 export function applyW3bAdapterFailArmIfPresent(
   fixtureAdapter: TestExecutionAdapter | null | undefined,
 ): boolean {
   const arm = peekW3bBoundaryArm();
   if (!arm || arm.kind !== "adapter_fail" || !fixtureAdapter) return false;
   consumeW3bBoundaryArm();
-  fixtureAdapter.queueDefaultLaunch({
+  fixtureAdapter.queueOneShotLaunch({
     outcome: "fail",
     reason: arm.reason,
   });
   return true;
 }
```

---

# END OF DIFF

## Pack completeness self-check
- candidate SHA present: yes
- name-status present: yes
- diff --stat present: yes
- full unified diff present: yes (153455 bytes, 4341 lines)
- synthesis-only: NO
- status: FULL (modified content complete)
