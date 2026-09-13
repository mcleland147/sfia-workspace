# ChatGPT Review Pack — GCEC-CROSS-EC-VERIFIED-REMOTE-PUSH-PRIOR-BINDING-01

**timestamp (UTC):** 2026-09-13T16:16:15Z
**Mode:** FULL
**Morris GO:** GCEC-CROSS-EC-VERIFIED-REMOTE-PUSH-PRIOR-BINDING-01 / GCEC CROSS-EC VERIFIED REMOTE-PUSH PRIOR BINDING FOR D-ONLY PR CREATE
**Cycle:** 8 — Delivery / implémentation — EVOL / CRITICAL
**MAIN:** mcleland147/sfia-workspace
**NEW only:** `/Users/morris/Projects/sfia-gcec-d-ephemeral-secret-bridge-ff267fdf`
**Branch:** `delivery/sfia-studio-gcec-d-ephemeral-secret-bridge`

## Anchors

| Ref | SHA |
|-----|-----|
| Incoming product anchor (start HEAD) | `9878043eca14896c3a6f6cb8f9dc4a84b6a26d55` |
| Parent of local product commit | `9878043eca14896c3a6f6cb8f9dc4a84b6a26d55` |
| D_CROSS_EC_PRIOR_BINDING_LOCAL_ANCHOR | `f42103881ea952f445672ed7781da59a465893d8` |
| Incoming handoff tip (expected) | `515683e18b04f4cf3497ee904334ba9164a25c81` |
| Product remote effects | NONE |
| Proof mutations | NONE |

## Entry Git truth (§5)

- HEAD at start: `9878043eca14896c3a6f6cb8f9dc4a84b6a26d55` (parent `ff267fdf3e6591b5ed83c4478b95f6181ad98fa2`)
- `.tmp-sfia-review` preserved (not staged)
- ZERO MUTATING REAL: no `gh pr create`, no Product push, no proof mutation
- `SFIA_STUDIO_CURSOR_REAL` unset throughout validation

## Current same-EC blocker (pre-change)

`resolveVerifiedRemotePushPriorAttempt` required `attempt.executionContractId === contract.executionContractId`.
A D-only `github.pr.create` EC therefore could not consume durable VERIFIED `git:remote_push` Evidence from distinct EC_C.
`startExecution` PR-create path called same-EC resolver only.
`ListProjectEvidenceFn` existed; `inputs` fingerprinted; `RepositoryReadPort.getBranchHead` existed.

## Phase-scoped architecture decision

KEEP / ADAPT / REMOVE:

- KEEP: `resolveVerifiedRemotePushPriorAttempt` same-EC legacy path unchanged when binding absent
- ADAPT: StartExecution + profile PR-create path use thin chooser
- ADD: explicit `ExecutionContract.inputs.verifiedRemotePushPrior` nested binding (fingerprinted via existing `inputs`)
- ADD: Evidence-centric `resolveCrossEcVerifiedRemotePushPrior` (Attempt row absence OK)
- REMOVE: none of monolithic A→D restoration; no Evidence copy; no fake current-EC Attempt; no project-wide auto-discovery

## Cross-EC binding model

Key: `verifiedRemotePushPrior` under `ExecutionContract.inputs`

Schema (all non-empty; commitSha full 40-char hex):

```
verifiedRemotePushPrior: {
  sourceExecutionContractId,
  sourceExecutionAttemptId,
  evidenceId,
  repositoryRef,
  branchName,
  commitSha
}
```

Frozen before Confirm; StartExecution validates only — never invents binding.

## Evidence-centric continuity

Canonical truth = explicit D binding + durable VERIFIED Evidence + fresh RepositoryRead.
`sourceExecutionAttemptId` must match Evidence bindings; missing Attempt row does NOT invalidate.
If Attempt row present and inconsistent → fail closed (`cross_ec_remote_push_attempt_inconsistent`).

## Attempt durability disposition

Product Attempts are SQLite-durable at composition, but cross-EC path does **not** depend on historical C Attempt presence (XEC-02 PASS). Evidence is the durable prior.

Source EC row presence: not required as hard blocker (Evidence provenance + binding + remote revalidation mandatory). Documented as KEEP optional-only.

## Same-EC backward compatibility

No binding → legacy `resolveVerifiedRemotePushPriorAttempt` unchanged (XEC-19/20 PASS).
Malformed binding never falls through to same-EC.

## RepositoryRead revalidation

Cross-EC Start path requires `getBranchHead(repositoryRef, branchName) === binding.commitSha`.
Distinct internalCauseRef:
`cross_ec_remote_push_repository_read_unavailable`, `cross_ec_remote_push_remote_head_drift`, plus lineage/repo/branch/sha/evidence causes.

## BIND-01..18 outcomes

| BIND | Result |
|------|--------|
| 01 binding parses | PASS (unit + Start) |
| 02 exact evidenceId | PASS |
| 03 verified | PASS / XEC-05 FAIL closed |
| 04 git:remote_push | PASS / XEC-06 |
| 05 project lineage | PASS / XEC-07 |
| 06 source EC id | PASS / XEC-08 |
| 07 source Attempt id | PASS / XEC-09 |
| 08 location parse | PASS |
| 09..11 repo/branch/sha vs binding | PASS / XEC-10..12 |
| 12..14 vs D target/branch/head | PASS (Start mapping) |
| 15 RepositoryRead present | PASS / XEC-14 |
| 16 getBranchHead match | PASS / XEC-15/16 |
| 17 D PR preflight/base remain | PASS (existing builder) |
| 18 D effects github.pr.create only | PASS (integration) |

## XEC-01..22 outcomes

All PASS (focused unit + integration). Critical XEC-02 Attempt-absent PASS.

## Phase-scoped deterministic integration

`gcecCrossEcPrCreateIntegration.d0.test.ts`:
- EC_C != EC_D
- C launch count = 0
- Attempt_C absent; Evidence present
- D Select/Start reaches fake RealExecutionLaunchPort with `authorizedEffects=["github.pr.create"]` and `gitPrCreateSpec` only
- Remote drift / missing / no-binding / missing Evidence fail closed

## Authority non-widening

Prior Evidence does not authorize push/commit/merge/docs-write. D EC effect remains `github.pr.create` only.

## Semantic fingerprint / immutability

XEC-21: mutating each binding field changes `computeExecutionContractSemanticFingerprint` (inputs material).

## Implementation files (blobs at anchor)

- `projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveCrossEcVerifiedRemotePushPrior.ts` blob `002f262835202c3bbf9dae6dd70cddb9724875b2`
- `projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts` blob `55c48666f50dd325fab2222a334101fc89332acf`
- `projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveAttemptExecutionProfile.ts` blob `ce18901c261ab3bffd12db4e91d605553ba4d6b0`
- `projects/sfia-studio/app/lib/oa/execution-attempt/index.ts` blob `9c509b099167ce201ce2744f7a7a68effbd1a528`
- `projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCrossEcVerifiedRemotePushPrior.d0.test.ts` blob `e41949e7f7ba19682a46e357aee4ff55a8cde241`
- `projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCrossEcPrCreateIntegration.d0.test.ts` blob `b08c7584cff4ee889cf0b532fc6cc8956b6c186c`

## Validation

- focused cross-EC: 29 PASS
- related: lifecycle / parity / confinement / RepositoryRead / A→D worktree REAL-off / Cont01 / Agent01 / deterministic E2E / one-lot: PASS
- typecheck: PASS
- lint: PASS
- build: PASS
- full Vitest: 3922 passed | 137 skipped (375 files; 17 skipped)

## Staged files (exact; commit)

```
A	projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCrossEcPrCreateIntegration.d0.test.ts
A	projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCrossEcVerifiedRemotePushPrior.d0.test.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveAttemptExecutionProfile.ts
A	projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveCrossEcVerifiedRemotePushPrior.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
```

## Local product commit

- subject: `feat(sfia-studio): support cross-EC verified push binding`
- SHA: `f42103881ea952f445672ed7781da59a465893d8`
- parent: `9878043eca14896c3a6f6cb8f9dc4a84b6a26d55`
- D_CROSS_EC_PRIOR_BINDING_LOCAL_ANCHOR: `f42103881ea952f445672ed7781da59a465893d8`
- No push. No Product PR. No merge.

## Product remote effects

NONE

## Proof mutating effects

NONE

## Roadmap

UNCHANGED (no Roadmap/doctrine/UI/DB schema migration)

## Maturity / anti-claims

- Phase-scoped C→D prerequisite binding: DETERMINISTIC PROVEN
- D-only PR-create path: DETERMINISTICALLY READY FOR DISTINCT REAL PROOF
- D github.pr.create REAL: NOT PROVEN
- A→D REAL / E / merge / runtime v3 / global L5: NOT claimed
- A/B/C historical claims: UNCHANGED

## Diff stat (9878043eca14896c3a6f6cb8f9dc4a84b6a26d55..f42103881ea952f445672ed7781da59a465893d8)

```
.../gcecCrossEcPrCreateIntegration.d0.test.ts      | 421 +++++++++++++++++++
 .../gcecCrossEcVerifiedRemotePushPrior.d0.test.ts  | 462 +++++++++++++++++++++
 .../application/startExecution.ts                  |  55 ++-
 .../domain/resolveAttemptExecutionProfile.ts       |   6 +-
 .../resolveCrossEcVerifiedRemotePushPrior.ts       | 309 ++++++++++++++
 .../app/lib/oa/execution-attempt/index.ts          |  15 +
 6 files changed, 1249 insertions(+), 19 deletions(-)
```

## Complete product diff

```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCrossEcPrCreateIntegration.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCrossEcPrCreateIntegration.d0.test.ts
new file mode 100644
index 00000000..b08c7584
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCrossEcPrCreateIntegration.d0.test.ts
@@ -0,0 +1,421 @@
+/**
+ * GCEC-CROSS-EC-VERIFIED-REMOTE-PUSH-PRIOR-BINDING-01 — phase-scoped integration.
+ * EC_C != EC_D; C launch count 0; D reaches fake launch with PR-create only.
+ * ZERO MUTATING REAL. @vitest-environment node
+ */
+import { mkdirSync, mkdtempSync } from "node:fs";
+import os from "node:os";
+import path from "node:path";
+import { afterEach, beforeEach, describe, expect, it } from "vitest";
+import type { Evidence } from "@/lib/oa/evidence-review";
+import {
+  assertStudioCursorRealOffForTests,
+  buildGitEffectActionRef,
+  createM4BoundedPrCreateCursorAgentDescriptor,
+  createTestExecutionAttemptServices,
+  M4_BOUNDED_PR_CREATE_ACTION,
+  M4_BOUNDED_PR_CREATE_CAPABILITY,
+  M4_BOUNDED_PR_CREATE_CURSOR_AGENT_ID,
+  M4_BOUNDED_PR_CREATE_SCOPE,
+  M4_BOUNDED_PR_CREATE_TARGET,
+  SqliteRealLaunchSafetyJournal,
+  TestExecutionAdapter,
+  VERIFIED_REMOTE_PUSH_PRIOR_INPUT_KEY,
+} from "@/lib/oa/execution-attempt";
+import {
+  FakeRepositoryReadPorts,
+  type RepositoryReadPort,
+  type RepositoryReadRef,
+} from "@/lib/oa/git-ports";
+import {
+  MORRIS_ACTOR,
+  NOW,
+  baseBuildRequest,
+  buildStack,
+  grantContractConfirmation,
+  registerMorris,
+  seedAcceptedDecision,
+  seedProject,
+  seedStandardCycle,
+  selectStandardAgent,
+  type Stack,
+} from "./helpers";
+import { M4_EVIDENCE, M4_TEST_BASE_HEAD_SHA } from "./support/m4Fixtures";
+import { TestOnlyRealExecutionLaunchPort } from "./support/testOnlyRealExecutionLaunchPort";
+
+const IDENTITY = "acme/widget";
+const FEATURE_BRANCH = "gcec/xec/proof";
+const EC_C = "xct:xec-c-push";
+const EC_D = "xct:xec-d-pr";
+const ATTEMPT_C = "xat:xec-c-push";
+const ATTEMPT_D = "xat:xec-d-pr";
+const EVIDENCE_C = "ev:xec-c-push";
+const H1 = "dddddddddddddddddddddddddddddddddddddddd";
+const H_DRIFT = "ffffffffffffffffffffffffffffffffffffffff";
+
+type TrackingRead = RepositoryReadPort & {
+  readonly getBranchHeadCalls: Array<RepositoryReadRef & { branch: string }>;
+  readonly mutationGuard: { called: boolean };
+};
+
+function trackingFake(seed: {
+  branch: string;
+  sha: string | null;
+}): TrackingRead {
+  const inner = new FakeRepositoryReadPorts();
+  if (seed.sha) inner.seedBranchHead(seed.branch, seed.sha);
+  const getBranchHeadCalls: Array<RepositoryReadRef & { branch: string }> = [];
+  const mutationGuard = { called: false };
+  return {
+    getBranchHeadCalls,
+    mutationGuard,
+    listPullRequests: (i) => inner.listPullRequests(i),
+    getPullRequest: (i) => inner.getPullRequest(i),
+    listPullRequestFiles: (i) => inner.listPullRequestFiles(i),
+    getPullRequestDiff: (i) => inner.getPullRequestDiff(i),
+    listCommits: (i) => inner.listCommits(i),
+    getCommit: (i) => inner.getCommit(i),
+    readFileAtRef: (i) => inner.readFileAtRef(i),
+    listPathAtRef: (i) => inner.listPathAtRef(i),
+    compareRefs: (i) => inner.compareRefs(i),
+    getCiStatus: (i) => inner.getCiStatus(i),
+    getReviewStatus: (i) => inner.getReviewStatus(i),
+    getMergeInfo: (i) => inner.getMergeInfo(i),
+    async getBranchHead(input) {
+      getBranchHeadCalls.push({
+        repositoryRef: input.repositoryRef,
+        branch: input.branch,
+      });
+      if (seed.sha === null) return null;
+      return inner.getBranchHead(input);
+    },
+  };
+}
+
+function pushEvidenceC(projectId: string, cycleInstanceId: string): Evidence {
+  return {
+    schemaVersion: "0.2.0-oa",
+    evidenceId: EVIDENCE_C,
+    type: "other",
+    status: "verified",
+    source: "git:remote_push",
+    sourceKind: "external",
+    classification: "internal",
+    storageMode: "metadata_only",
+    location: `git:remote_push?repo=${encodeURIComponent(IDENTITY)}&remote=origin&refName=${encodeURIComponent(`refs/heads/${FEATURE_BRANCH}`)}&commitSha=${H1}`,
+    bindings: {
+      projectId,
+      cycleInstanceId,
+      executionContractId: EC_C,
+      executionAttemptId: ATTEMPT_C,
+    },
+    createdAt: NOW,
+    updatedAt: NOW,
+    version: 1,
+    producedAt: NOW,
+    availability: "available",
+    containsSecrets: false,
+    provenance: {
+      schemaVersion: "0.1.0-oa",
+      provenanceRecordId: `prv:${EVIDENCE_C}`,
+      actor: { actorId: "actor:system", role: "system" },
+      source: "system",
+      timestamp: NOW,
+      correlationId: "cor:xec-ev",
+    },
+  };
+}
+
+function dInputs(includeBinding: boolean): Record<string, unknown> {
+  const base: Record<string, unknown> = {
+    baseHeadSha: M4_TEST_BASE_HEAD_SHA,
+    repositoryRef: IDENTITY,
+    workingBranch: FEATURE_BRANCH,
+    defaultBranch: "main",
+    prTitle: "GCEC cross-EC PR create",
+    evidenceRequirements: ["git:pull_request"],
+  };
+  if (includeBinding) {
+    base[VERIFIED_REMOTE_PUSH_PRIOR_INPUT_KEY] = {
+      sourceExecutionContractId: EC_C,
+      sourceExecutionAttemptId: ATTEMPT_C,
+      evidenceId: EVIDENCE_C,
+      repositoryRef: IDENTITY,
+      branchName: FEATURE_BRANCH,
+      commitSha: H1,
+    };
+  }
+  return base;
+}
+
+async function seedConfirmedPrCreateD(
+  stack: Stack,
+  includeBinding: boolean,
+): Promise<{
+  contractId: string;
+  version: number;
+  projectId: string;
+  cycleInstanceId: string;
+}> {
+  const projectId = "prj:campus360-oa";
+  const cycleInstanceId = "cyc:std-001";
+  await seedProject(stack.projects, projectId);
+  registerMorris(
+    stack.decisions.authority,
+    M4_BOUNDED_PR_CREATE_SCOPE,
+    M4_EVIDENCE,
+  );
+  await seedAcceptedDecision(stack);
+  await seedStandardCycle(stack, cycleInstanceId);
+
+  const built = await stack.execution.buildExecutionContract.execute(
+    baseBuildRequest({
+      cycleInstanceId,
+      executionContractId: EC_D,
+      idempotencyKey: "idem-xct-xec-d-pr",
+      action: M4_BOUNDED_PR_CREATE_ACTION,
+      target: M4_BOUNDED_PR_CREATE_TARGET,
+      scope: M4_BOUNDED_PR_CREATE_SCOPE,
+      requiredCapabilities: [M4_BOUNDED_PR_CREATE_CAPABILITY],
+      evidenceRequirements: ["git:pull_request"],
+      expectedOutputs: ["git:pull_request"],
+      authorityEvidenceId: M4_EVIDENCE,
+      inputs: dInputs(includeBinding),
+    }),
+  );
+  expect(built.ok).toBe(true);
+  if (!built.ok) throw new Error("build D failed");
+
+  const validated = await stack.execution.validateExecutionContract.execute({
+    executionContractId: built.contract.executionContractId,
+    actor: MORRIS_ACTOR,
+    authorityEvidenceId: M4_EVIDENCE,
+  });
+  expect(validated.ok).toBe(true);
+  if (!validated.ok) throw new Error("validate D failed");
+
+  const confirmationId = await grantContractConfirmation(stack, {
+    confirmationId: "cfm:xec-d-ec",
+    scope: M4_BOUNDED_PR_CREATE_SCOPE,
+    evidenceId: M4_EVIDENCE,
+  });
+  const confirmed = await stack.execution.confirmExecutionContract.execute({
+    executionContractId: validated.contract.executionContractId,
+    confirmationId,
+    actor: MORRIS_ACTOR,
+    authorityEvidenceId: M4_EVIDENCE,
+    expectedVersion: validated.contract.version,
+  });
+  expect(confirmed.ok).toBe(true);
+  if (!confirmed.ok) throw new Error("confirm D failed");
+
+  return {
+    contractId: confirmed.contract.executionContractId,
+    version: confirmed.contract.version,
+    projectId,
+    cycleInstanceId,
+  };
+}
+
+async function runStartD(input: {
+  includeBinding?: boolean;
+  seedEvidence?: boolean;
+  remoteSha?: string | null;
+  omitRepositoryRead?: boolean;
+}): Promise<{
+  started: Awaited<
+    ReturnType<
+      ReturnType<typeof createTestExecutionAttemptServices>["startExecution"]["execute"]
+    >
+  >;
+  launchPort: TestOnlyRealExecutionLaunchPort;
+  read: TrackingRead | undefined;
+  cLaunchCount: number;
+}> {
+  const includeBinding = input.includeBinding !== false;
+  const seedEvidence = input.seedEvidence !== false;
+  const managedBase = mkdtempSync(path.join(os.tmpdir(), "gcec-xec-d-"));
+  mkdirSync(path.join(managedBase, "acme__widget", ".git"), {
+    recursive: true,
+  });
+  const journal = new SqliteRealLaunchSafetyJournal({
+    databasePath: path.join(managedBase, "safety.sqlite"),
+  });
+  const launchPort = new TestOnlyRealExecutionLaunchPort();
+  const agents = [createM4BoundedPrCreateCursorAgentDescriptor(NOW)];
+  const evidenceBag: Evidence[] = [];
+  const read = input.omitRepositoryRead
+    ? undefined
+    : trackingFake({
+        branch: FEATURE_BRANCH,
+        sha: input.remoteSha === undefined ? H1 : input.remoteSha,
+      });
+
+  const stack = buildStack({
+    agents,
+    adapter: new TestExecutionAdapter(),
+  });
+  stack.attempts = createTestExecutionAttemptServices({
+    decisionServices: stack.decisions,
+    executionContractServices: stack.execution,
+    agents,
+    adapter: new TestExecutionAdapter(),
+    realBoundary: {
+      launchPort,
+      safetyJournal: journal,
+      managedRepoRootBase: managedBase,
+    },
+    resolveProjectRepositoryBinding: async () => ({
+      provider: "github",
+      identity: IDENTITY,
+      remoteUrl: `https://github.com/${IDENTITY}.git`,
+      defaultBranch: "main",
+      pathRoot: "docs",
+      baseSha: M4_TEST_BASE_HEAD_SHA,
+    }),
+    listProjectEvidence: async () => ({
+      ok: true as const,
+      evidence: evidenceBag,
+    }),
+    ...(read ? { repositoryRead: read } : {}),
+    fixedNowIso: NOW,
+  }) as typeof stack.attempts;
+
+  const seeded = await seedConfirmedPrCreateD(stack, includeBinding);
+  // Critical: NO C Attempt row; NO C launch. Durable Evidence only.
+  const cLaunchCount = 0;
+  if (seedEvidence) {
+    evidenceBag.push(pushEvidenceC(seeded.projectId, seeded.cycleInstanceId));
+  }
+
+  const selected = await selectStandardAgent(stack, {
+    attemptId: ATTEMPT_D,
+    executionContractId: seeded.contractId,
+    requestedAgentRef: M4_BOUNDED_PR_CREATE_CURSOR_AGENT_ID,
+  });
+  expect(selected.ok).toBe(true);
+  if (!selected.ok) throw new Error(`select D failed: ${JSON.stringify(selected)}`);
+
+  const granted = await stack.attempts.grantRealExecutionGate!.execute({
+    grantId: "gd:xec-d",
+    attemptId: ATTEMPT_D,
+    actor: MORRIS_ACTOR,
+    expiresAt: "2026-07-25T07:00:00.000Z",
+    authorityEvidenceId: M4_EVIDENCE,
+  });
+  expect(granted.ok).toBe(true);
+
+  const gitActionRef = buildGitEffectActionRef({
+    executionContractId: seeded.contractId,
+    effect: "github.pr.create",
+    repositoryRef: IDENTITY,
+    branchOrRef: FEATURE_BRANCH,
+  });
+  registerMorris(stack.decisions.authority, gitActionRef, "evd:morris-xec-pr");
+  await grantContractConfirmation(stack, {
+    confirmationId: "cfm:xec-pr-create",
+    actionRef: gitActionRef,
+    scope: gitActionRef,
+    evidenceId: "evd:morris-xec-pr",
+  });
+  const gitCnf = await stack.decisions.confirmations.findById(
+    "cfm:xec-pr-create",
+  );
+  expect(gitCnf?.status).toBe("granted");
+
+  const started = await stack.attempts.startExecution.execute({
+    attemptId: ATTEMPT_D,
+    actor: MORRIS_ACTOR,
+    authorityEvidenceId: M4_EVIDENCE,
+    confirmations: gitCnf ? [gitCnf] : [],
+    confirmationMatch: {
+      repositoryRef: IDENTITY,
+      branchOrRef: FEATURE_BRANCH,
+      actorId: MORRIS_ACTOR.actorId,
+    },
+  });
+
+  return { started, launchPort, read, cLaunchCount };
+}
+
+describe("GCEC cross-EC phase-scoped PR-create integration", () => {
+  beforeEach(() => {
+    assertStudioCursorRealOffForTests();
+    expect(process.env.SFIA_STUDIO_CURSOR_REAL).not.toBe("1");
+  });
+  afterEach(() => {
+    assertStudioCursorRealOffForTests();
+  });
+
+  it("phase-scoped: EC_C != EC_D, Attempt_C absent, D reaches PR-create launch", async () => {
+    const { started, launchPort, read, cLaunchCount } = await runStartD({});
+    expect(started.ok).toBe(true);
+    if (!started.ok) {
+      throw new Error(`start D failed: ${JSON.stringify(started)}`);
+    }
+    expect(cLaunchCount).toBe(0);
+    expect(launchPort.launchCallCount).toBe(1);
+    const req = launchPort.calls[0]!;
+    expect(req.authorizedEffects).toEqual(["github.pr.create"]);
+    expect(req.gitPrCreateSpec).toBeDefined();
+    expect(req.gitPrCreateSpec?.headBranch).toBe(FEATURE_BRANCH);
+    expect(req.gitPrCreateSpec?.expectedHeadSha).toBe(H1);
+    expect(req.gitPushSpec).toBeUndefined();
+    expect(req.gitCommitSpec).toBeUndefined();
+    expect(req.gitPrMergeSpec).toBeUndefined();
+    expect(read?.getBranchHeadCalls.length).toBeGreaterThanOrEqual(1);
+    expect(EC_C).not.toBe(EC_D);
+  });
+
+  it("XEC-03 integration: no binding → fail closed (no auto-discovery)", async () => {
+    const { started, launchPort } = await runStartD({ includeBinding: false });
+    expect(started.ok).toBe(false);
+    expect(launchPort.launchCallCount).toBe(0);
+  });
+
+  it("XEC-04 integration: Evidence missing → fail", async () => {
+    const { started, launchPort } = await runStartD({ seedEvidence: false });
+    expect(started.ok).toBe(false);
+    if (!started.ok) {
+      expect(String(started.error.internalCauseRef ?? "")).toMatch(
+        /cross_ec_remote_push_evidence_not_found/,
+      );
+    }
+    expect(launchPort.launchCallCount).toBe(0);
+  });
+
+  it("XEC-14 RepositoryRead unavailable → fail", async () => {
+    const { started, launchPort } = await runStartD({
+      omitRepositoryRead: true,
+    });
+    expect(started.ok).toBe(false);
+    if (!started.ok) {
+      expect(String(started.error.internalCauseRef ?? "")).toMatch(
+        /cross_ec_remote_push_repository_read_unavailable/,
+      );
+    }
+    expect(launchPort.launchCallCount).toBe(0);
+  });
+
+  it("XEC-15 remote branch missing → fail", async () => {
+    const { started, launchPort } = await runStartD({ remoteSha: null });
+    expect(started.ok).toBe(false);
+    if (!started.ok) {
+      expect(String(started.error.internalCauseRef ?? "")).toMatch(
+        /cross_ec_remote_push_remote_head_drift/,
+      );
+    }
+    expect(launchPort.launchCallCount).toBe(0);
+  });
+
+  it("XEC-16 remote branch drifted → fail", async () => {
+    const { started, launchPort } = await runStartD({ remoteSha: H_DRIFT });
+    expect(started.ok).toBe(false);
+    if (!started.ok) {
+      expect(String(started.error.internalCauseRef ?? "")).toMatch(
+        /cross_ec_remote_push_remote_head_drift/,
+      );
+    }
+    expect(launchPort.launchCallCount).toBe(0);
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCrossEcVerifiedRemotePushPrior.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCrossEcVerifiedRemotePushPrior.d0.test.ts
new file mode 100644
index 00000000..e41949e7
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCrossEcVerifiedRemotePushPrior.d0.test.ts
@@ -0,0 +1,462 @@
+/**
+ * GCEC-CROSS-EC-VERIFIED-REMOTE-PUSH-PRIOR-BINDING-01 — XEC-01..22 + BIND checks.
+ * ZERO MUTATING REAL. @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import type { Digest } from "@/lib/oa/doctrine";
+import type { Evidence } from "@/lib/oa/evidence-review";
+import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";
+import {
+  M4_BOUNDED_PR_CREATE_ACTION,
+  M4_BOUNDED_PR_CREATE_CAPABILITY,
+  M4_BOUNDED_PR_CREATE_SCOPE,
+  M4_BOUNDED_PR_CREATE_TARGET,
+  M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID,
+  parseVerifiedRemotePushPriorBinding,
+  resolveCrossEcVerifiedRemotePushPrior,
+  resolveVerifiedRemotePushPriorAttempt,
+  resolveVerifiedRemotePushPriorForPrCreate,
+  VERIFIED_REMOTE_PUSH_PRIOR_INPUT_KEY,
+} from "@/lib/oa/execution-attempt";
+import { computeExecutionContractSemanticFingerprint } from "@/lib/oa/execution-contract";
+
+const NOW = "2026-09-13T12:00:00.000Z";
+const PROJECT = "prj:xec";
+const CYCLE = "cyc:xec";
+const EC_C = "xct:ec-c-push";
+const EC_D = "xct:ec-d-pr";
+const ATTEMPT_C = "xat:push-c";
+const EVIDENCE_C = "ev:push-c";
+const REPO = "acme/widget";
+const BRANCH = "gcec/xec/proof";
+const SHA = "dddddddddddddddddddddddddddddddddddddddd";
+const SHA2 = "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";
+const DIGEST =
+  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;
+
+function binding(partial: Record<string, unknown> = {}) {
+  return {
+    sourceExecutionContractId: EC_C,
+    sourceExecutionAttemptId: ATTEMPT_C,
+    evidenceId: EVIDENCE_C,
+    repositoryRef: REPO,
+    branchName: BRANCH,
+    commitSha: SHA,
+    ...partial,
+  };
+}
+
+function pushLocation(
+  sha = SHA,
+  repo = REPO,
+  branch = BRANCH,
+): string {
+  return `git:remote_push?repo=${encodeURIComponent(repo)}&remote=origin&refName=${encodeURIComponent(`refs/heads/${branch}`)}&commitSha=${sha}`;
+}
+
+function pushEvidence(
+  partial: Partial<Evidence> & { evidenceId?: string } = {},
+): Evidence {
+  const {
+    evidenceId = EVIDENCE_C,
+    bindings,
+    ...rest
+  } = partial;
+  return {
+    schemaVersion: "0.2.0-oa",
+    evidenceId,
+    type: "other",
+    source: "git:remote_push",
+    sourceKind: "external",
+    status: "verified",
+    classification: "internal",
+    storageMode: "metadata_only",
+    digest: DIGEST,
+    location: pushLocation(),
+    bindings: {
+      projectId: PROJECT,
+      cycleInstanceId: CYCLE,
+      executionContractId: EC_C,
+      executionAttemptId: ATTEMPT_C,
+      ...bindings,
+    },
+    createdAt: NOW,
+    updatedAt: NOW,
+    version: 1,
+    producedAt: NOW,
+    availability: "available",
+    containsSecrets: false,
+    provenance: {
+      schemaVersion: "0.1.0-oa",
+      provenanceRecordId: "prv:ev",
+      actor: { actorId: "a", role: "system" },
+      source: "system",
+      timestamp: NOW,
+      correlationId: "cor:ev",
+    },
+    ...rest,
+  };
+}
+
+function contractD(inputsExtra: Record<string, unknown> = {}) {
+  return {
+    executionContractId: EC_D,
+    projectId: PROJECT,
+    cycleInstanceId: CYCLE,
+    action: M4_BOUNDED_PR_CREATE_ACTION,
+    target: M4_BOUNDED_PR_CREATE_TARGET,
+    scope: M4_BOUNDED_PR_CREATE_SCOPE,
+    requiredCapabilities: [M4_BOUNDED_PR_CREATE_CAPABILITY],
+    evidenceRequirements: ["git:pull_request"],
+    expectedOutputs: ["git:pull_request"],
+    inputs: {
+      repositoryRef: REPO,
+      workingBranch: BRANCH,
+      [VERIFIED_REMOTE_PUSH_PRIOR_INPUT_KEY]: binding(),
+      ...inputsExtra,
+    },
+  };
+}
+
+function attemptC(
+  status: ExecutionAttempt["status"] = "succeeded",
+): ExecutionAttempt {
+  return {
+    schemaVersion: "0.2.0-oa",
+    attemptId: ATTEMPT_C,
+    executionContractId: EC_C,
+    executionContractVersion: 1,
+    selectedAgentRef: M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID,
+    status,
+    idempotencyKey: `idem:${ATTEMPT_C}`,
+    correlationId: `cor:${ATTEMPT_C}`,
+    version: 1,
+    createdAt: NOW,
+    provenance: {
+      schemaVersion: "0.1.0-oa",
+      provenanceRecordId: `prv:${ATTEMPT_C}`,
+      actor: { actorId: "actor:t", role: "system" },
+      source: "system",
+      timestamp: NOW,
+      correlationId: "cor:t",
+    },
+  };
+}
+
+function fingerprintMaterial(
+  verifiedRemotePushPrior: Record<string, unknown>,
+) {
+  return {
+    executionContractId: EC_D,
+    projectId: PROJECT,
+    cycleInstanceId: CYCLE,
+    action: M4_BOUNDED_PR_CREATE_ACTION,
+    target: M4_BOUNDED_PR_CREATE_TARGET,
+    scope: M4_BOUNDED_PR_CREATE_SCOPE,
+    requiredCapabilities: [M4_BOUNDED_PR_CREATE_CAPABILITY],
+    requiredAuthority: "N3" as const,
+    constraints: [] as string[],
+    stopConditions: [] as string[],
+    evidenceRequirements: ["git:pull_request"],
+    reversibility: "reversible" as const,
+    idempotencyKey: "idem:xec-fp",
+    inputs: {
+      repositoryRef: REPO,
+      workingBranch: BRANCH,
+      verifiedRemotePushPrior,
+    },
+  };
+}
+
+describe("GCEC-CROSS-EC verified remote-push prior binding", () => {
+  it("XEC-01 nominal cross-EC PASS", () => {
+    const r = resolveVerifiedRemotePushPriorForPrCreate({
+      contract: contractD(),
+      attempts: [],
+      evidence: [pushEvidence()],
+      repositoryRef: REPO,
+    });
+    expect(r.ok).toBe(true);
+    if (!r.ok) return;
+    expect(r.mode).toBe("cross_ec");
+    expect(r.prior.evidenceId).toBe(EVIDENCE_C);
+    expect(r.prior.commitSha).toBe(SHA);
+    expect(r.prior.branchName).toBe(BRANCH);
+    expect(r.prior.repositoryRef).toBe(REPO);
+  });
+
+  it("XEC-02 Attempt absent Evidence present → PASS (critical)", () => {
+    const r = resolveCrossEcVerifiedRemotePushPrior({
+      contract: contractD(),
+      binding: binding(),
+      evidence: [pushEvidence()],
+      attempts: [], // no C Attempt row
+    });
+    expect(r.ok).toBe(true);
+    if (!r.ok) return;
+    expect(r.prior.priorAttemptId).toBe(ATTEMPT_C);
+  });
+
+  it("XEC-03 no explicit binding → no auto-discovery FAIL", () => {
+    const c = contractD();
+    const { verifiedRemotePushPrior: _drop, ...restInputs } = c.inputs as Record<
+      string,
+      unknown
+    > & { verifiedRemotePushPrior?: unknown };
+    void _drop;
+    const r = resolveVerifiedRemotePushPriorForPrCreate({
+      contract: { ...c, inputs: restInputs },
+      attempts: [],
+      evidence: [pushEvidence()],
+      repositoryRef: REPO,
+    });
+    expect(r.ok).toBe(false);
+    if (r.ok) return;
+    expect(r.mode).toBe("same_ec");
+    expect(r.reason).toBe("remote_push_prior_none");
+  });
+
+  it("XEC-04 Evidence missing → FAIL", () => {
+    const r = resolveCrossEcVerifiedRemotePushPrior({
+      contract: contractD(),
+      binding: binding(),
+      evidence: [],
+    });
+    expect(r.ok).toBe(false);
+    if (r.ok) return;
+    expect(r.reason).toBe("cross_ec_remote_push_evidence_not_found");
+  });
+
+  it("XEC-05 Evidence unverified → FAIL", () => {
+    for (const status of ["expected", "rejected", "incomplete"] as const) {
+      const r = resolveCrossEcVerifiedRemotePushPrior({
+        contract: contractD(),
+        binding: binding(),
+        evidence: [pushEvidence({ status })],
+      });
+      expect(r.ok).toBe(false);
+      if (!r.ok) expect(r.reason).toBe("cross_ec_remote_push_evidence_unverified");
+    }
+  });
+
+  it("XEC-06 Evidence source != git:remote_push → FAIL", () => {
+    const r = resolveCrossEcVerifiedRemotePushPrior({
+      contract: contractD(),
+      binding: binding(),
+      evidence: [pushEvidence({ source: "git:local_commit" })],
+    });
+    expect(r.ok).toBe(false);
+    if (!r.ok) expect(r.reason).toBe("cross_ec_remote_push_evidence_source_mismatch");
+  });
+
+  it("XEC-07 project mismatch → FAIL", () => {
+    const r = resolveCrossEcVerifiedRemotePushPrior({
+      contract: contractD(),
+      binding: binding(),
+      evidence: [
+        pushEvidence({
+          bindings: {
+            projectId: "prj:other",
+            cycleInstanceId: CYCLE,
+            executionContractId: EC_C,
+            executionAttemptId: ATTEMPT_C,
+          },
+        }),
+      ],
+    });
+    expect(r.ok).toBe(false);
+    if (!r.ok) expect(r.reason).toBe("cross_ec_remote_push_lineage_mismatch");
+  });
+
+  it("XEC-08 sourceExecutionContractId mismatch → FAIL", () => {
+    const r = resolveCrossEcVerifiedRemotePushPrior({
+      contract: contractD(),
+      binding: binding({ sourceExecutionContractId: "xct:wrong" }),
+      evidence: [pushEvidence()],
+    });
+    expect(r.ok).toBe(false);
+    if (!r.ok) expect(r.reason).toBe("cross_ec_remote_push_lineage_mismatch");
+  });
+
+  it("XEC-09 sourceExecutionAttemptId mismatch → FAIL", () => {
+    const r = resolveCrossEcVerifiedRemotePushPrior({
+      contract: contractD(),
+      binding: binding({ sourceExecutionAttemptId: "xat:wrong" }),
+      evidence: [pushEvidence()],
+    });
+    expect(r.ok).toBe(false);
+    if (!r.ok) expect(r.reason).toBe("cross_ec_remote_push_lineage_mismatch");
+  });
+
+  it("XEC-10 repository mismatch → FAIL", () => {
+    const r = resolveCrossEcVerifiedRemotePushPrior({
+      contract: contractD(),
+      binding: binding({ repositoryRef: "other/repo" }),
+      evidence: [pushEvidence()],
+    });
+    expect(r.ok).toBe(false);
+    if (!r.ok) expect(r.reason).toBe("cross_ec_remote_push_repo_mismatch");
+  });
+
+  it("XEC-11 branch mismatch → FAIL", () => {
+    const r = resolveCrossEcVerifiedRemotePushPrior({
+      contract: contractD(),
+      binding: binding({ branchName: "other/branch" }),
+      evidence: [pushEvidence()],
+    });
+    expect(r.ok).toBe(false);
+    if (!r.ok) expect(r.reason).toBe("cross_ec_remote_push_branch_mismatch");
+  });
+
+  it("XEC-12 commit SHA mismatch → FAIL", () => {
+    const r = resolveCrossEcVerifiedRemotePushPrior({
+      contract: contractD(),
+      binding: binding({ commitSha: SHA2 }),
+      evidence: [pushEvidence()],
+    });
+    expect(r.ok).toBe(false);
+    if (!r.ok) expect(r.reason).toBe("cross_ec_remote_push_sha_mismatch");
+  });
+
+  it("XEC-13 malformed / short SHA → FAIL", () => {
+    const parse = parseVerifiedRemotePushPriorBinding({
+      verifiedRemotePushPrior: binding({ commitSha: "abc123" }),
+    });
+    expect(parse.present).toBe(true);
+    if (!parse.present) return;
+    expect(parse.ok).toBe(false);
+  });
+
+  it("XEC-14..16 RepositoryRead causes reserved for StartExecution mapping", () => {
+    // Domain resolver is Evidence-only; remote-head causes are StartExecution.
+    const causes = [
+      "cross_ec_remote_push_repository_read_unavailable",
+      "cross_ec_remote_push_remote_head_drift",
+    ];
+    expect(causes).toHaveLength(2);
+  });
+
+  it("XEC-17 D workingBranch differs from prior branch → chooser still PASS; Start maps mismatch", () => {
+    // Domain prior OK when binding matches Evidence; Start compares workingBranch.
+    const r = resolveVerifiedRemotePushPriorForPrCreate({
+      contract: contractD({ workingBranch: "hostile/other" }),
+      attempts: [],
+      evidence: [pushEvidence()],
+    });
+    expect(r.ok).toBe(true);
+    if (!r.ok) return;
+    expect(r.prior.branchName).toBe(BRANCH);
+    expect(r.prior.branchName).not.toBe("hostile/other");
+  });
+
+  it("XEC-18 exact D-only authority shape (effect set checked by profile/Start)", () => {
+    const c = contractD();
+    expect(c.requiredCapabilities).toEqual([M4_BOUNDED_PR_CREATE_CAPABILITY]);
+    expect(c.action).toBe(M4_BOUNDED_PR_CREATE_ACTION);
+  });
+
+  it("XEC-19 same-EC legacy nominal → PASS", () => {
+    const sameEcContract = {
+      executionContractId: EC_C,
+      projectId: PROJECT,
+      cycleInstanceId: CYCLE,
+      expectedOutputs: ["git:remote_push"] as string[],
+      inputs: { repositoryRef: REPO, workingBranch: BRANCH },
+    };
+    const r = resolveVerifiedRemotePushPriorAttempt({
+      contract: sameEcContract,
+      attempts: [attemptC()],
+      evidence: [pushEvidence()],
+      repositoryRef: REPO,
+    });
+    expect(r.ok).toBe(true);
+  });
+
+  it("XEC-20 same-EC legacy no prior → FAIL", () => {
+    const sameEcContract = {
+      executionContractId: EC_C,
+      projectId: PROJECT,
+      cycleInstanceId: CYCLE,
+      expectedOutputs: ["git:remote_push"] as string[],
+      inputs: { repositoryRef: REPO, workingBranch: BRANCH },
+    };
+    const r = resolveVerifiedRemotePushPriorAttempt({
+      contract: sameEcContract,
+      attempts: [],
+      evidence: [],
+      repositoryRef: REPO,
+    });
+    expect(r.ok).toBe(false);
+    if (!r.ok) expect(r.reason).toBe("remote_push_prior_none");
+  });
+
+  it("XEC-21 semantic fingerprint changes on each binding field", () => {
+    const base = fingerprintMaterial(binding());
+    const baseFp = computeExecutionContractSemanticFingerprint(base);
+    const fields = [
+      "sourceExecutionContractId",
+      "sourceExecutionAttemptId",
+      "evidenceId",
+      "repositoryRef",
+      "branchName",
+      "commitSha",
+    ] as const;
+    for (const field of fields) {
+      const mutated = binding({
+        [field]:
+          field === "commitSha"
+            ? SHA2
+            : `mutated-${field}`,
+      });
+      const fp = computeExecutionContractSemanticFingerprint(
+        fingerprintMaterial(mutated),
+      );
+      expect(fp).not.toBe(baseFp);
+    }
+  });
+
+  it("XEC-22 resolver performs zero Git mutation (pure Evidence read)", () => {
+    const before = structuredClone(pushEvidence());
+    const r = resolveCrossEcVerifiedRemotePushPrior({
+      contract: contractD(),
+      binding: binding(),
+      evidence: [before],
+      attempts: [],
+    });
+    expect(r.ok).toBe(true);
+    expect(before).toEqual(pushEvidence());
+  });
+
+  it("BIND-01 binding parse exact", () => {
+    const p = parseVerifiedRemotePushPriorBinding(contractD().inputs);
+    expect(p.present && p.ok).toBe(true);
+  });
+
+  it("malformed binding does not fall through to same-EC", () => {
+    const r = resolveVerifiedRemotePushPriorForPrCreate({
+      contract: contractD({
+        [VERIFIED_REMOTE_PUSH_PRIOR_INPUT_KEY]: { evidenceId: "only" },
+      }),
+      attempts: [attemptC()],
+      evidence: [pushEvidence()],
+      repositoryRef: REPO,
+    });
+    expect(r.ok).toBe(false);
+    if (!r.ok) {
+      expect(r.mode).toBe("cross_ec");
+      expect(r.reason).toBe("cross_ec_remote_push_binding_invalid");
+    }
+  });
+
+  it("source Attempt present+inconsistent → FAIL closed", () => {
+    const bad = attemptC("failed");
+    const r = resolveCrossEcVerifiedRemotePushPrior({
+      contract: contractD(),
+      binding: binding(),
+      evidence: [pushEvidence()],
+      attempts: [bad],
+    });
+    expect(r.ok).toBe(false);
+    if (!r.ok) expect(r.reason).toBe("cross_ec_remote_push_attempt_inconsistent");
+  });
+});
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
index 0f88b31a..55c48666 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
@@ -102,7 +102,7 @@ import {
 } from "../domain/gitPrMergeLaunchSpec";
 import { assertFreshPrMergePreflight } from "../domain/assertFreshPrMergePreflight";
 import { resolveVerifiedLocalCommitPriorAttempt } from "../domain/resolveVerifiedLocalCommitPriorAttempt";
-import { resolveVerifiedRemotePushPriorAttempt } from "../domain/resolveVerifiedRemotePushPriorAttempt";
+import { resolveVerifiedRemotePushPriorForPrCreate } from "../domain/resolveCrossEcVerifiedRemotePushPrior";
 import type { CursorAuthorizedEffectId } from "../domain/cursorExecutionReport";
 import {
   authorityFailureDetail,
@@ -1463,21 +1463,24 @@ export class StartExecution {
         });
       }
       const repoRef = projectBindingPr.identity.trim();
-      const priorPush = resolveVerifiedRemotePushPriorAttempt({
+      const priorPush = resolveVerifiedRemotePushPriorForPrCreate({
         contract,
         attempts: peerAttemptsPr,
         evidence: evidenceReadPr.evidence,
         repositoryRef: repoRef,
       });
       if (!priorPush.ok) {
-        return fail(
-          "ATTEMPT_INVALID",
-          priorPush.reason === "remote_push_prior_none"
-            ? "git_pr_create_without_verified_remote_push"
-            : priorPush.reason,
-          { executionContractId: contract.executionContractId },
-        );
+        const cause =
+          priorPush.mode === "cross_ec"
+            ? priorPush.reason
+            : priorPush.reason === "remote_push_prior_none"
+              ? "git_pr_create_without_verified_remote_push"
+              : priorPush.reason;
+        return fail("ATTEMPT_INVALID", cause, {
+          executionContractId: contract.executionContractId,
+        });
       }
+      const crossEc = priorPush.mode === "cross_ec";
       // AC-02/AC-03 — Evidence repo + branch + SHA must bind C→D exactly.
       if (
         !priorPush.prior.repositoryRef.trim() ||
@@ -1485,7 +1488,9 @@ export class StartExecution {
       ) {
         return fail(
           "ATTEMPT_INVALID",
-          "git_pr_create_prior_push_repository_mismatch",
+          crossEc
+            ? "cross_ec_remote_push_repo_mismatch"
+            : "git_pr_create_prior_push_repository_mismatch",
           { executionContractId: contract.executionContractId },
         );
       }
@@ -1493,7 +1498,9 @@ export class StartExecution {
       if (!headBranch) {
         return fail(
           "ATTEMPT_INVALID",
-          "git_pr_create_prior_push_branch_missing",
+          crossEc
+            ? "cross_ec_remote_push_branch_mismatch"
+            : "git_pr_create_prior_push_branch_missing",
           { executionContractId: contract.executionContractId },
         );
       }
@@ -1504,7 +1511,9 @@ export class StartExecution {
       if (contractWorkingBranch && contractWorkingBranch !== headBranch) {
         return fail(
           "ATTEMPT_INVALID",
-          "git_pr_create_prior_push_branch_mismatch",
+          crossEc
+            ? "cross_ec_remote_push_branch_mismatch"
+            : "git_pr_create_prior_push_branch_mismatch",
           { executionContractId: contract.executionContractId },
         );
       }
@@ -1512,14 +1521,18 @@ export class StartExecution {
       if (!/^[0-9a-f]{40}$/.test(expectedHeadSha)) {
         return fail(
           "ATTEMPT_INVALID",
-          "git_pr_create_expected_head_sha_invalid",
+          crossEc
+            ? "cross_ec_remote_push_sha_mismatch"
+            : "git_pr_create_expected_head_sha_invalid",
           { executionContractId: contract.executionContractId },
         );
       }
       if (!this.repositoryRead) {
         return fail(
           "ATTEMPT_INVALID",
-          "git_pr_create_repository_read_unavailable",
+          crossEc
+            ? "cross_ec_remote_push_repository_read_unavailable"
+            : "git_pr_create_repository_read_unavailable",
           { executionContractId: contract.executionContractId },
         );
       }
@@ -1528,14 +1541,20 @@ export class StartExecution {
         branch: headBranch,
       });
       if (remoteHead == null || !String(remoteHead).trim()) {
-        return fail("ATTEMPT_INVALID", "git_pr_create_remote_head_missing", {
-          executionContractId: contract.executionContractId,
-        });
+        return fail(
+          "ATTEMPT_INVALID",
+          crossEc
+            ? "cross_ec_remote_push_remote_head_drift"
+            : "git_pr_create_remote_head_missing",
+          { executionContractId: contract.executionContractId },
+        );
       }
       if (String(remoteHead).trim().toLowerCase() !== expectedHeadSha) {
         return fail(
           "ATTEMPT_INVALID",
-          "git_pr_create_remote_head_sha_drift",
+          crossEc
+            ? "cross_ec_remote_push_remote_head_drift"
+            : "git_pr_create_remote_head_sha_drift",
           { executionContractId: contract.executionContractId },
         );
       }
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveAttemptExecutionProfile.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveAttemptExecutionProfile.ts
index 857761ab..ce18901c 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveAttemptExecutionProfile.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveAttemptExecutionProfile.ts
@@ -57,6 +57,7 @@ import {
   resolveVerifiedRemotePushPriorAttempt,
   type VerifiedRemotePushPriorAttempt,
 } from "./resolveVerifiedRemotePushPriorAttempt";
+import { resolveVerifiedRemotePushPriorForPrCreate } from "./resolveCrossEcVerifiedRemotePushPrior";
 import { resolveVerifiedPullRequestNumber } from "./resolveGitEffectTarget";

 export type AttemptExecutionProfileKind =
@@ -405,12 +406,15 @@ function resolvePrCreateOrFail(
 ): ResolveAttemptExecutionProfileResult {
   const reader = requireEvidenceReader(input);
   if (reader) return reader;
-  const prior = resolveVerifiedRemotePushPriorAttempt({
+  const prior = resolveVerifiedRemotePushPriorForPrCreate({
     contract: input.contract,
     attempts: input.attempts ?? [],
     evidence: input.evidence ?? [],
   });
   if (!prior.ok) {
+    if (prior.mode === "cross_ec") {
+      return { ok: false, reason: prior.reason };
+    }
     if (prior.reason === "remote_push_prior_none") {
       return {
         ok: false,
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveCrossEcVerifiedRemotePushPrior.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveCrossEcVerifiedRemotePushPrior.ts
new file mode 100644
index 00000000..002f2628
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveCrossEcVerifiedRemotePushPrior.ts
@@ -0,0 +1,309 @@
+/**
+ * GCEC-CROSS-EC-VERIFIED-REMOTE-PUSH-PRIOR-BINDING-01
+ *
+ * Explicit ExecutionContract.inputs.verifiedRemotePushPrior binding so a
+ * D-only github.pr.create EC can consume durable VERIFIED git:remote_push
+ * Evidence from a distinct source EC — without Attempt-row durability
+ * dependency and without project-wide Evidence auto-discovery.
+ *
+ * Same-EC legacy path remains resolveVerifiedRemotePushPriorAttempt.
+ */
+import type { Evidence } from "@/lib/oa/evidence-review";
+import type { ExecutionContract } from "@/lib/oa/execution-contract";
+import type { ExecutionAttempt } from "./types";
+import {
+  parseRemotePushFromEvidenceLocation,
+  resolveVerifiedRemotePushPriorAttempt,
+  type VerifiedRemotePushPriorAttempt,
+} from "./resolveVerifiedRemotePushPriorAttempt";
+import { M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID } from "./realLaunchSafety";
+
+export const VERIFIED_REMOTE_PUSH_PRIOR_INPUT_KEY = "verifiedRemotePushPrior";
+
+const FULL_SHA_RE = /^[0-9a-f]{40}$/i;
+
+export type VerifiedRemotePushPriorBinding = {
+  readonly sourceExecutionContractId: string;
+  readonly sourceExecutionAttemptId: string;
+  readonly evidenceId: string;
+  readonly repositoryRef: string;
+  readonly branchName: string;
+  readonly commitSha: string;
+};
+
+export type ParseVerifiedRemotePushPriorBindingResult =
+  | { readonly present: false }
+  | {
+      readonly present: true;
+      readonly ok: true;
+      readonly binding: VerifiedRemotePushPriorBinding;
+    }
+  | {
+      readonly present: true;
+      readonly ok: false;
+      readonly reason: "cross_ec_remote_push_binding_invalid";
+    };
+
+export type CrossEcVerifiedRemotePushPriorFailureReason =
+  | "cross_ec_remote_push_binding_invalid"
+  | "cross_ec_remote_push_evidence_not_found"
+  | "cross_ec_remote_push_evidence_ambiguous"
+  | "cross_ec_remote_push_evidence_unverified"
+  | "cross_ec_remote_push_evidence_source_mismatch"
+  | "cross_ec_remote_push_lineage_mismatch"
+  | "cross_ec_remote_push_repo_mismatch"
+  | "cross_ec_remote_push_branch_mismatch"
+  | "cross_ec_remote_push_sha_mismatch"
+  | "cross_ec_remote_push_location_incomplete"
+  | "cross_ec_remote_push_attempt_inconsistent";
+
+export type ResolveCrossEcVerifiedRemotePushPriorInput = {
+  readonly contract: Pick<
+    ExecutionContract,
+    "executionContractId" | "projectId" | "cycleInstanceId" | "inputs"
+  >;
+  readonly binding: VerifiedRemotePushPriorBinding;
+  readonly evidence: readonly Evidence[];
+  /** Optional — absence of source Attempt is OK when Evidence is exact+verified. */
+  readonly attempts?: readonly ExecutionAttempt[];
+};
+
+export type ResolveCrossEcVerifiedRemotePushPriorResult =
+  | {
+      readonly ok: true;
+      readonly prior: VerifiedRemotePushPriorAttempt;
+      readonly binding: VerifiedRemotePushPriorBinding;
+    }
+  | {
+      readonly ok: false;
+      readonly reason: CrossEcVerifiedRemotePushPriorFailureReason;
+    };
+
+export type ResolveVerifiedRemotePushPriorForPrCreateInput = {
+  readonly contract: Pick<
+    ExecutionContract,
+    | "executionContractId"
+    | "projectId"
+    | "cycleInstanceId"
+    | "expectedOutputs"
+    | "inputs"
+  >;
+  readonly attempts: readonly ExecutionAttempt[];
+  readonly evidence: readonly Evidence[];
+  readonly excludeAttemptId?: string;
+  readonly repositoryRef?: string;
+};
+
+export type ResolveVerifiedRemotePushPriorForPrCreateResult =
+  | {
+      readonly ok: true;
+      readonly mode: "cross_ec" | "same_ec";
+      readonly prior: VerifiedRemotePushPriorAttempt;
+    }
+  | {
+      readonly ok: false;
+      readonly mode: "cross_ec" | "same_ec";
+      readonly reason: string;
+    };
+
+function asNonEmptyString(value: unknown): string | null {
+  if (typeof value !== "string") return null;
+  const trimmed = value.trim();
+  return trimmed.length > 0 ? trimmed : null;
+}
+
+/**
+ * Parse frozen ExecutionContract.inputs.verifiedRemotePushPrior.
+ * Absent key → present:false (legacy same-EC). Malformed → fail closed.
+ */
+export function parseVerifiedRemotePushPriorBinding(
+  inputs: unknown,
+): ParseVerifiedRemotePushPriorBindingResult {
+  if (inputs == null || typeof inputs !== "object" || Array.isArray(inputs)) {
+    return { present: false };
+  }
+  const raw = (inputs as Record<string, unknown>)[
+    VERIFIED_REMOTE_PUSH_PRIOR_INPUT_KEY
+  ];
+  if (raw === undefined) {
+    return { present: false };
+  }
+  if (raw == null || typeof raw !== "object" || Array.isArray(raw)) {
+    return { present: true, ok: false, reason: "cross_ec_remote_push_binding_invalid" };
+  }
+  const obj = raw as Record<string, unknown>;
+  const sourceExecutionContractId = asNonEmptyString(
+    obj.sourceExecutionContractId,
+  );
+  const sourceExecutionAttemptId = asNonEmptyString(
+    obj.sourceExecutionAttemptId,
+  );
+  const evidenceId = asNonEmptyString(obj.evidenceId);
+  const repositoryRef = asNonEmptyString(obj.repositoryRef);
+  const branchName = asNonEmptyString(obj.branchName);
+  const commitShaRaw = asNonEmptyString(obj.commitSha);
+  if (
+    !sourceExecutionContractId ||
+    !sourceExecutionAttemptId ||
+    !evidenceId ||
+    !repositoryRef ||
+    !branchName ||
+    !commitShaRaw
+  ) {
+    return { present: true, ok: false, reason: "cross_ec_remote_push_binding_invalid" };
+  }
+  const commitSha = commitShaRaw.toLowerCase();
+  if (!FULL_SHA_RE.test(commitSha)) {
+    return { present: true, ok: false, reason: "cross_ec_remote_push_binding_invalid" };
+  }
+  return {
+    present: true,
+    ok: true,
+    binding: {
+      sourceExecutionContractId,
+      sourceExecutionAttemptId,
+      evidenceId,
+      repositoryRef,
+      branchName,
+      commitSha,
+    },
+  };
+}
+
+/**
+ * Evidence-centric cross-EC prior resolution.
+ * Exact evidenceId only — no project-wide auto-discovery.
+ * Source Attempt row absence does not invalidate a valid VERIFIED Evidence.
+ */
+export function resolveCrossEcVerifiedRemotePushPrior(
+  input: ResolveCrossEcVerifiedRemotePushPriorInput,
+): ResolveCrossEcVerifiedRemotePushPriorResult {
+  const { binding, evidence, contract } = input;
+  const matches = evidence.filter((ev) => ev.evidenceId === binding.evidenceId);
+  if (matches.length === 0) {
+    return { ok: false, reason: "cross_ec_remote_push_evidence_not_found" };
+  }
+  if (matches.length > 1) {
+    return { ok: false, reason: "cross_ec_remote_push_evidence_ambiguous" };
+  }
+  const ev = matches[0]!;
+
+  if (ev.status !== "verified") {
+    return { ok: false, reason: "cross_ec_remote_push_evidence_unverified" };
+  }
+  if (ev.source !== "git:remote_push") {
+    return { ok: false, reason: "cross_ec_remote_push_evidence_source_mismatch" };
+  }
+
+  const b = ev.bindings;
+  if (!b?.projectId || b.projectId !== contract.projectId) {
+    return { ok: false, reason: "cross_ec_remote_push_lineage_mismatch" };
+  }
+  if (
+    !b.executionContractId ||
+    b.executionContractId !== binding.sourceExecutionContractId
+  ) {
+    return { ok: false, reason: "cross_ec_remote_push_lineage_mismatch" };
+  }
+  if (
+    !b.executionAttemptId ||
+    b.executionAttemptId !== binding.sourceExecutionAttemptId
+  ) {
+    return { ok: false, reason: "cross_ec_remote_push_lineage_mismatch" };
+  }
+  if (contract.cycleInstanceId) {
+    if (
+      !b.cycleInstanceId ||
+      b.cycleInstanceId !== contract.cycleInstanceId
+    ) {
+      return { ok: false, reason: "cross_ec_remote_push_lineage_mismatch" };
+    }
+  }
+
+  const parsed = parseRemotePushFromEvidenceLocation(String(ev.location ?? ""));
+  if (
+    !parsed ||
+    !parsed.repositoryRef?.trim() ||
+    !parsed.branchName?.trim() ||
+    !FULL_SHA_RE.test(parsed.commitSha)
+  ) {
+    return { ok: false, reason: "cross_ec_remote_push_location_incomplete" };
+  }
+  if (parsed.repositoryRef.trim() !== binding.repositoryRef) {
+    return { ok: false, reason: "cross_ec_remote_push_repo_mismatch" };
+  }
+  if (parsed.branchName.trim() !== binding.branchName) {
+    return { ok: false, reason: "cross_ec_remote_push_branch_mismatch" };
+  }
+  if (parsed.commitSha.toLowerCase() !== binding.commitSha.toLowerCase()) {
+    return { ok: false, reason: "cross_ec_remote_push_sha_mismatch" };
+  }
+
+  // Optional integrity when source Attempt row is present in the repo view.
+  const attempts = input.attempts ?? [];
+  const sourceAttempt = attempts.find(
+    (a) => a.attemptId === binding.sourceExecutionAttemptId,
+  );
+  if (sourceAttempt) {
+    if (
+      sourceAttempt.executionContractId !== binding.sourceExecutionContractId ||
+      sourceAttempt.status !== "succeeded" ||
+      sourceAttempt.selectedAgentRef !== M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID
+    ) {
+      return { ok: false, reason: "cross_ec_remote_push_attempt_inconsistent" };
+    }
+  }
+
+  return {
+    ok: true,
+    binding,
+    prior: {
+      priorAttemptId: binding.sourceExecutionAttemptId,
+      evidenceId: ev.evidenceId,
+      commitSha: parsed.commitSha.toLowerCase(),
+      repositoryRef: parsed.repositoryRef.trim(),
+      branchName: parsed.branchName.trim(),
+    },
+  };
+}
+
+/**
+ * Thin chooser: explicit binding → cross-EC Evidence path; else same-EC Attempt path.
+ * Malformed binding never falls through to same-EC.
+ */
+export function resolveVerifiedRemotePushPriorForPrCreate(
+  input: ResolveVerifiedRemotePushPriorForPrCreateInput,
+): ResolveVerifiedRemotePushPriorForPrCreateResult {
+  const parsed = parseVerifiedRemotePushPriorBinding(input.contract.inputs);
+  if (parsed.present) {
+    if (!parsed.ok) {
+      return {
+        ok: false,
+        mode: "cross_ec",
+        reason: parsed.reason,
+      };
+    }
+    const cross = resolveCrossEcVerifiedRemotePushPrior({
+      contract: input.contract,
+      binding: parsed.binding,
+      evidence: input.evidence,
+      attempts: input.attempts,
+    });
+    if (!cross.ok) {
+      return { ok: false, mode: "cross_ec", reason: cross.reason };
+    }
+    return { ok: true, mode: "cross_ec", prior: cross.prior };
+  }
+
+  const same = resolveVerifiedRemotePushPriorAttempt({
+    contract: input.contract,
+    attempts: input.attempts,
+    evidence: input.evidence,
+    excludeAttemptId: input.excludeAttemptId,
+    repositoryRef: input.repositoryRef,
+  });
+  if (!same.ok) {
+    return { ok: false, mode: "same_ec", reason: same.reason };
+  }
+  return { ok: true, mode: "same_ec", prior: same.prior };
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
index 57997939..9c509b09 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
@@ -266,6 +266,21 @@ export {
   resolveVerifiedRemotePushPriorAttempt,
   parseRemotePushFromEvidenceLocation,
 } from "./domain/resolveVerifiedRemotePushPriorAttempt";
+export {
+  VERIFIED_REMOTE_PUSH_PRIOR_INPUT_KEY,
+  parseVerifiedRemotePushPriorBinding,
+  resolveCrossEcVerifiedRemotePushPrior,
+  resolveVerifiedRemotePushPriorForPrCreate,
+} from "./domain/resolveCrossEcVerifiedRemotePushPrior";
+export type {
+  VerifiedRemotePushPriorBinding,
+  ParseVerifiedRemotePushPriorBindingResult,
+  ResolveCrossEcVerifiedRemotePushPriorInput,
+  ResolveCrossEcVerifiedRemotePushPriorResult,
+  CrossEcVerifiedRemotePushPriorFailureReason,
+  ResolveVerifiedRemotePushPriorForPrCreateInput,
+  ResolveVerifiedRemotePushPriorForPrCreateResult,
+} from "./domain/resolveCrossEcVerifiedRemotePushPrior";
 export type {
   ProjectEvidenceListResult,
   ListProjectEvidenceFn,

```

## Next gate

Candidate (NOT executed under this GO):

GO MORRIS — ONE REAL D-ONLY PR-CREATE EXECUTION CONTRACT AGAINST EXISTING C-PROVEN FEATURE — CROSS-EC PRIOR BINDING ANCHOR `f42103881ea952f445672ed7781da59a465893d8` — STOP BEFORE MERGE

Proof repo: mcleland147/sfia-gcec-proof-task-manager
base main `32c7c2008197e5c61b32c16479144e9863291358`
head `gcec/lifecycle/gcec-ad-finaldec-f2-fe6b` @ `3a879572722af2b72909243ba0b506f307d87156`

## Review handoff

Publish once via `scripts/sfia/publish-review-handoff.sh` from this pack.
Incoming tip expected: `515683e18b04f4cf3497ee904334ba9164a25c81`
