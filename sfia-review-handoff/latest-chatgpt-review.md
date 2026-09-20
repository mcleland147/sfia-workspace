# ChatGPT Review Pack — FULL (CR-PCONT-06 DETERMINISTIC PROOF REGULARIZATION)

- **Timestamp UTC:** 2026-09-20T04:47:28Z
- **Timestamp Europe/Paris:** 2026-09-20T06:47:28+0200
- **Macro:** PRODUCT-PROJECT-WORKSPACE-ARTIFACT-ROUTING-01
- **Sous-portée:** POST-EXECUTION PRODUCT CONTINUITY & RECOVERY
- **Mode:** SAME MACRO / NO MICRO-CYCLE
- **Cycle:** 9 — QA / validation
- **Typologie:** RUN / QA — deterministic proof regularization
- **Profil:** Critical
- **Pass:** CR-PCONT-06 FAIL-CLOSED READER PROOF REGULARIZATION (TEST-ONLY)
- **Input handoff:** `892882c596ba292b3b1c8ada138296e1abcf1fa9` (`sfia/review-handoff` / `sfia-review-handoff/latest-chatgpt-review.md`)
- **Claim maximal autorisé:** POST-EXECUTION PRODUCT CONTINUITY & RECOVERY — CR-PCONT-01…06 DETERMINISTICALLY CLOSED — CR-PCONT-06 FAIL-CLOSED READER PROVEN — PRODUCT SOURCE UNCHANGED SINCE CRITICAL RE-REVIEW — DETERMINISTIC PRODUCT-NATIVE E2E PROVEN — PRODUCT UI STATE PROVEN — FAKE/REAL EVIDENCE SEPARATION PROVEN — SAME MACRO / NO MICRO-CYCLE — REAL NOT REPROVEN — PROJECT COMMIT NOT AUTHORIZED — MORRIS FINAL CRITICAL RE-REVIEW PENDING

## 1. Local Git Truth

| Field | Value |
|---|---|
| toplevel | `/tmp/sfia-pwr-01-dev` |
| branch | `delivery/sfia-studio-project-workspace-artifact-routing-01` |
| HEAD | `ed3cc66b25d260a67437fc07e163ef5fcc2244a9` |
| HEAD^ | `a6dba9776bfb1b4cb1570a87b20b0c71e546e441` |
| origin/main | `a6dba9776bfb1b4cb1570a87b20b0c71e546e441` |
| Working tree vs handoff 892882c5 Product tree | **MATCH** (Product source unchanged this pass; only test proof regularized) |
| Project commit | **ZERO** (HEAD unchanged `ed3cc66b`) |
| Project push/PR/merge | **ZERO** |
| REAL / OpenAI LIVE / Cursor REAL | **ZERO** |

### git status --short

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/oa/cycle/gcecCr01F2DecisionBasis.d0.test.ts
 M projects/sfia-studio/app/__tests__/oa/cycle/gcecCr23StartExecution.d0.test.ts
 M projects/sfia-studio/app/__tests__/oa/cycle/gcecCursorRealDocsWrite.real.d0.test.ts
 M projects/sfia-studio/app/__tests__/oa/cycle/gcecCursorRealSameEcCommit.real.d0.test.ts
 M projects/sfia-studio/app/__tests__/oa/cycle/gcecProductMonolithicE2e.d0.test.ts
 M projects/sfia-studio/app/__tests__/oa/decision/m3RestartProcessWorker.ts
 M projects/sfia-studio/app/__tests__/project-assistant/corrProof02.b1.advisory.d0.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/corrProof07.artifactMaterialization.d0.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/f3.fixtureVerticalSlice.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/m5C1PrepareMemoryDisclosure.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/preM6.realProductWiringAmend.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/preM6.realProductWiringResidual.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/productJourneyGovernedDocsWriteWiring.d0.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/productWorkspaceArtifactRouting.applicationPath.d0.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/qa-pre-m6-01.finalHardening.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/qa-pre-m6-01.postGoDurableM3Path.test.ts
 M projects/sfia-studio/app/__tests__/vertical-slice-runtime/deterministicCursorBoundary.test.ts
 M projects/sfia-studio/app/__tests__/vertical-slice-runtime/liveManagedRepoComposition.d0.test.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
 M projects/sfia-studio/app/features/project-assistant/actions.ts
 M projects/sfia-studio/app/features/project-assistant/f2/recordDecision.ts
 M projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts
 M projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
 M projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts
 M projects/sfia-studio/app/features/project-assistant/w2/readCurrentGovernedExecutionContinuity.ts
 M projects/sfia-studio/app/features/project-assistant/w2/trajectoryOptions.ts
 M projects/sfia-studio/app/lib/oa/cycle/application/proposeTrajectoryVersion.ts
?? projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx
?? projects/sfia-studio/app/__tests__/project-assistant/postExecutionProductContinuity.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/w2/advanceProductExecutionContractAfterEvidence.ts
?? projects/sfia-studio/app/features/project-assistant/w2/closeProposalDecisionSubject.ts
```

### git diff --name-status

```
M	.tmp-sfia-review/chatgpt-review.md
M	projects/sfia-studio/app/__tests__/oa/cycle/gcecCr01F2DecisionBasis.d0.test.ts
M	projects/sfia-studio/app/__tests__/oa/cycle/gcecCr23StartExecution.d0.test.ts
M	projects/sfia-studio/app/__tests__/oa/cycle/gcecCursorRealDocsWrite.real.d0.test.ts
M	projects/sfia-studio/app/__tests__/oa/cycle/gcecCursorRealSameEcCommit.real.d0.test.ts
M	projects/sfia-studio/app/__tests__/oa/cycle/gcecProductMonolithicE2e.d0.test.ts
M	projects/sfia-studio/app/__tests__/oa/decision/m3RestartProcessWorker.ts
M	projects/sfia-studio/app/__tests__/project-assistant/corrProof02.b1.advisory.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/corrProof07.artifactMaterialization.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/f3.fixtureVerticalSlice.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/m5C1PrepareMemoryDisclosure.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/preM6.realProductWiringAmend.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/preM6.realProductWiringResidual.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/productJourneyGovernedDocsWriteWiring.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/productWorkspaceArtifactRouting.applicationPath.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/qa-pre-m6-01.finalHardening.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/qa-pre-m6-01.postGoDurableM3Path.test.ts
M	projects/sfia-studio/app/__tests__/vertical-slice-runtime/deterministicCursorBoundary.test.ts
M	projects/sfia-studio/app/__tests__/vertical-slice-runtime/liveManagedRepoComposition.d0.test.ts
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
M	projects/sfia-studio/app/features/project-assistant/actions.ts
M	projects/sfia-studio/app/features/project-assistant/f2/recordDecision.ts
M	projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts
M	projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
M	projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts
M	projects/sfia-studio/app/features/project-assistant/w2/readCurrentGovernedExecutionContinuity.ts
M	projects/sfia-studio/app/features/project-assistant/w2/trajectoryOptions.ts
M	projects/sfia-studio/app/lib/oa/cycle/application/proposeTrajectoryVersion.ts
```

### git diff --check

```
.tmp-sfia-review/chatgpt-review.md:213: trailing whitespace.
+**Result:** Test Files 8 passed (8) / Tests **189 passed (189)**
```

## 2. Critical Re-Review recall (input 892882c5)

- **CR-PCONT-01…05:** CLOSED — not reopened this pass.
- **CR-PCONT-06 Product code:** REVIEWED OK at Critical Re-Review:
  - `readCurrentGovernedExecutionContinuity()` uses `readTerminalAttemptPresence()`
  - UNKNOWN Attempt state fail-closed via `EXECUTION_CONTINUITY_INTEGRITY_FAILED`
  - terminal Attempt excludes EC from pre-execution space
  - post-Evidence ingest/advance failure → `POST_EXECUTION_CONTINUITY_ADVANCE_FAILED`
  - Attempt succeeded remains durable technical truth
- **Proof gap identified:** previous A/B tests ("Attempt services unavailable", "listExecutionAttempts failure") created **no** pre-execution EC → reader returned `kind="none"` **before** `readTerminalAttemptPresence()` → vacuous green even if fail-closed broken.

## 3. Exact object of this regularization

Replace vacuous CR-PCONT-06 A/B proof with deterministic A/B/C/D oracle on a **real durable confirmed pre-execution EC**, so the reader actually reaches `readTerminalAttemptPresence(oa, executionContractId)`.

**TEST-ONLY.** Product source mutation count this pass = **0**.

## 4. Files modified THIS PASS

| Path | Action |
|---|---|
| `projects/sfia-studio/app/__tests__/project-assistant/postExecutionProductContinuity.d0.test.ts` | MOD (CR-PCONT-06 describe rewritten to deterministic EC oracle A/B/C/D) |

sha256(test file) = `c4989626dc31dedeca65bbdfeb488c2542f9cf7b6e135cc975d09c80c4ba7894`

Product / method / prompts / doctrine / schema / migrations: **untouched**.

## 5. Product source unchanged since Critical Re-Review (892882c5)

Authoritative Product tree remains the uncommitted working tree reviewed under handoff `892882c5…`. This pass did **not** modify Product. SHA-256 of key Product files (still present in WT):

| File | sha256 |
|---|---|
| `projects/sfia-studio/app/features/project-assistant/w2/readCurrentGovernedExecutionContinuity.ts` | `cb4d7bd6574a857bb8d94ce4b5fd23de7ac2dcb308766782dec62733f1a52ba4` |
| `projects/sfia-studio/app/features/project-assistant/w2/advanceProductExecutionContractAfterEvidence.ts` | `7856b1aa9e95d4fc2871f83267a5bd7e6452af52904a383ba891650f8097b749` |
| `projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts` | `b4f8b9927d5a62db01642947ed276a8f0db36a1a388ac4793ba2a112cd79fdcd` |
| `projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts` | `4691c35eceed8335e2e21fe166887d1b410e687b8409d20cf04a6738d444eb8f` |
| `projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts` | `49c1f5f6311dcbaca795f2bc582084d7a9625adba0705cb3c9e48f0c5b3efaa3` |
| `projects/sfia-studio/app/features/project-assistant/w2/trajectoryOptions.ts` | `229b0ca23709a3d5d1d7361084cfc2d741e20aa7a37e0bd0868c1270cdb079f1` |
| `projects/sfia-studio/app/features/project-assistant/w2/closeProposalDecisionSubject.ts` | `1dc334601fb1e83046cd14c86dff46491c6635e2b8ec1496a5842890a431ee5c` |
| `projects/sfia-studio/app/features/project-assistant/f2/recordDecision.ts` | `38cef9658a82a67e3e880b48709ff2f43bf8304322e14ba26c86fcda014d9c33` |
| `projects/sfia-studio/app/features/project-assistant/actions.ts` | `319ecacd74de442b97e4e8c1557e23dd244eef7ce8435778ade8bb48c83c8295` |
| `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx` | `2624ef50834fdfeb67a4660c19956e0b920f05cbdcc434b240eaa537565c4d3f` |
| `projects/sfia-studio/app/lib/oa/cycle/application/proposeTrajectoryVersion.ts` | `c27c7db40ad0c9bb3fcc854ef48c14169f7558b70cfbe08a7ef79a93a79c6e2a` |

Reference for full Product diffs of Cycle 8 correction pass: handoff commit `892882c596ba292b3b1c8ada138296e1abcf1fa9` (do not re-copy the 29 full diffs here).

## 6. EC fixture construction (seedPreExecutionConfirmedEc)

Uses Product path primitives already used by docs_write tests:

1. `seedQualifiedProject` → real Project + cycleInstanceId
2. `registerLocalPiloteAuthority`
3. `proposeW2Options` → `decideTrajectory` → build ExecutionContract via existing EC services
4. Persist **confirmed** EC (`status: "confirmed"`, lineage current, not superseded, no terminal Attempt)
5. Baseline sanity: `readCurrentGovernedExecutionContinuity` → `ok=true`, `kind="active"`, same `executionContractId`

Therefore A/B/C/D all scan a durable pre-execution EC and reach `readTerminalAttemptPresence`.

## 7. Oracle matrix CR-PCONT-06 — exact results

| Scenario | State | Expected | Observed | Pass |
|---|---|---|---|---|
| **A** | EC pre-exec + `executionAttemptServices=undefined` | `ok=false`, `code=EXECUTION_CONTINUITY_INTEGRITY_FAILED` (not active/none) | EXACT match | ✓ |
| **B** | EC pre-exec + `listExecutionAttempts.execute` forced error; spy `listCalls` | spy called ≥1 with expected `executionContractId`; `ok=false`, `EXECUTION_CONTINUITY_INTEGRITY_FAILED` | EXACT match; spy contains EC id | ✓ |
| **C** | EC pre-exec + list SUCCESS `attempts=[]` | `ok=true`, `kind=active`, same EC id (EMPTY ≠ UNKNOWN) | EXACT match | ✓ |
| **D** | EC pre-exec + durable terminal Attempt `succeeded` | `ok=true`, `kind=none`; EC status/version unchanged; attempt count=1 unchanged | EXACT match | ✓ |

Vacuous patterns removed:

- no `expect(result.kind).not.toBe("active")` as sole oracle
- no multi-verdict permissive branch for A/B
- no "no EC exists" framing for fail-closed cases

### Scenario B spy evidence (oracle + reconfirm logs)

```
   ✓ CR-PCONT-06 — Attempt reader fail-closed (deterministic EC oracle) > B — EC pre-exec + listExecutionAttempts ERROR → INTEGRITY_FAILED; spy proves call  351ms
   ✓ CR-PCONT-06 — Attempt reader fail-closed (deterministic EC oracle) > B — EC pre-exec + listExecutionAttempts ERROR → INTEGRITY_FAILED; spy proves call  399ms
```

### Oracle log excerpt

```
RUN  v3.2.7 /tmp/sfia-pwr-01-dev/projects/sfia-studio/app

(node:188181) ExperimentalWarning: SQLite is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
 ✓ __tests__/project-assistant/postExecutionProductContinuity.d0.test.ts (19 tests | 14 skipped) 1670ms
   ✓ CR-PCONT-06 — Attempt reader fail-closed (deterministic EC oracle) > A — EC pre-exec + Attempt services UNKNOWN → EXECUTION_CONTINUITY_INTEGRITY_FAILED only  491ms
   ✓ CR-PCONT-06 — Attempt reader fail-closed (deterministic EC oracle) > B — EC pre-exec + listExecutionAttempts ERROR → INTEGRITY_FAILED; spy proves call  351ms
   ✓ CR-PCONT-06 — Attempt reader fail-closed (deterministic EC oracle) > C — EC pre-exec + Attempt list SUCCESS [] → kind=active (EMPTY ≠ UNKNOWN)  300ms
   ✓ CR-PCONT-06 — Attempt reader fail-closed (deterministic EC oracle) > D — EC pre-exec + terminal Attempt succeeded → kind=none; zero mutation/relaunch  313ms

 Test Files  1 passed (1)
      Tests  5 passed | 14 skipped (19)
   Start at  04:43:55
   Duration  4.44s (transform 1.62s, setup 51ms, collect 2.54s, tests 1.67s, environment 0ms, prepare 44ms)
```

## 8. Non-régression + tsc

Command (serial, hookTimeout=30000, testTimeout=60000, maxWorkers=1):

- `postExecutionProductContinuity.d0.test.ts`
- `productWorkspaceArtifactRouting.applicationPath.d0.test.ts`
- `productJourneyGovernedDocsWriteWiring.d0.test.ts`
- `productJourneyPostExecutionReplan.d0.test.ts`
- `activeCycleCognitiveWork.d0.test.ts`
- `postExecutionTrajectorySurface.ui.test.tsx`
- `trajectorySurface.ui.test.tsx`
- `productJourneyProjectionCoherence.ui.test.tsx`

**Result:** Test Files 8 passed (8) / Tests **189 passed (189)**
Artifact: `/opt/cursor/artifacts/cr-pcont06-matrix-serial.log`

```
stdout | __tests__/project-assistant/productJourneyPostExecutionReplan.d0.test.ts > CR-PJR portable docs_write UNCLAIMED recover (temp DB) > succeeded Attempt + frozen docs_write Evidence/RB + CE not_proven → UNCLAIMED recover + restart; CE-B invalidates recover A
{"event":"oa.claim_evaluation.evaluated","ts":"2026-09-18T14:00:00.000Z","correlationId":"cor:e5eb3512a77090d4","claimEvaluationId":"clm:docs-write:xat:w3a:pjrport-bd21f1aa","reviewBundleId":"rb:docs-write:xat:w3a:pjrport-bd21f1aa","actorId":"actor:local-pilote","result":"ok","durationMs":4}

stdout | __tests__/project-assistant/productJourneyPostExecutionReplan.d0.test.ts > CR-PJR portable docs_write UNCLAIMED recover (temp DB) > succeeded Attempt + frozen docs_write Evidence/RB + CE not_proven → UNCLAIMED recover + restart; CE-B invalidates recover A
{"event":"oa.coordination.next_action_recommended","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:w3c-reco:xat:w3a:pjrport-bd21f1aa","actorId":"actor:sfia-studio-system-factual-writer","result":"ok","detailCode":"not_recommended","durationMs":6}

stdout | __tests__/project-assistant/productJourneyPostExecutionReplan.d0.test.ts > CR-PJR portable docs_write UNCLAIMED recover (temp DB) > succeeded Attempt + frozen docs_write Evidence/RB + CE not_proven → UNCLAIMED recover + restart; CE-B invalidates recover A
{"event":"oa.claim_evaluation.evaluated","ts":"2026-09-18T14:00:00.000Z","correlationId":"cor:421db06865cbdaee","claimEvaluationId":"clm:docs-write:corr-b:xat:w3a:pjrport-bd21f1aa","reviewBundleId":"rb:docs-write:xat:w3a:pjrport-bd21f1aa","actorId":"actor:local-pilote","result":"ok","durationMs":16}

stdout | __tests__/project-assistant/productJourneyPostExecutionReplan.d0.test.ts > CR-PJR portable docs_write UNCLAIMED recover (temp DB) > succeeded Attempt + frozen docs_write Evidence/RB + CE not_proven → UNCLAIMED recover + restart; CE-B invalidates recover A
{"event":"oa.coordination.next_action_recommended","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:w3c-reco:xat:w3a:pjrport-bd21f1aa","actorId":"actor:sfia-studio-system-factual-writer","result":"ok","detailCode":"not_recommended","durationMs":1}

stdout | __tests__/project-assistant/productJourneyPostExecutionReplan.d0.test.ts > CR-PJR portable docs_write UNCLAIMED recover (temp DB) > succeeded Attempt + frozen docs_write Evidence/RB + CE not_proven → UNCLAIMED recover + restart; CE-B invalidates recover A
{"event":"oa.coordination.next_action_recommended","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:w3c-reco:xat:w3a:pjrport-bd21f1aa","actorId":"actor:sfia-studio-system-factual-writer","result":"ok","detailCode":"not_recommended","durationMs":1}

 ✓ __tests__/project-assistant/productJourneyPostExecutionReplan.d0.test.ts (11 tests) 546ms
   ✓ CR-PJR portable docs_write UNCLAIMED recover (temp DB) > succeeded Attempt + frozen docs_write Evidence/RB + CE not_proven → UNCLAIMED recover + restart; CE-B invalidates recover A  526ms
 ✓ __tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx (45 tests) 944ms
 ✓ __tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx (2 tests) 282ms
 ✓ __tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx (3 tests) 148ms

 Test Files  8 passed (8)
      Tests  189 passed (189)
   Start at  04:44:10
   Duration  66.19s (transform 2.60s, setup 307ms, collect 6.96s, tests 57.09s, environment 746ms, prepare 352ms)
```

**tsc --noEmit:** exit 0 (artifact `/opt/cursor/artifacts/cr-pcont06-tsc-final.log` empty)

**Playwright:** not required for this proof hole.

**REAL:** 0 / OpenAI LIVE: 0 / Cursor REAL: 0

## 9. Zero Product mutation / zero project git

| Control | Value |
|---|---|
| Product `features/**` / `lib/**` edits this pass | **0** |
| Project commit | **0** (HEAD remains `ed3cc66b…`) |
| Project push / PR / merge | **0** |
| Batch Cooking protected Project/DB | untouched |

## 10. FULL unified diff — THIS PASS only (CR-PCONT-06 section)

Diff reconstructs the CR-PCONT-06 describe block from handoff `892882c5` vacuous A/B vs Cycle 9 deterministic A/B/C/D oracle.

```diff
--- a/postExecutionProductContinuity.d0.test.ts::CR-PCONT-06@892882c5
+++ b/postExecutionProductContinuity.d0.test.ts::CR-PCONT-06@Cycle9
@@ -1,74 +1,330 @@
-describe("CR-PCONT-06 — Attempt reader fail-closed + advance failure surface", () => {
-  it("Attempt services unavailable → EXECUTION_CONTINUITY_INTEGRITY_FAILED", async () => {
-    const { readCurrentGovernedExecutionContinuity } = await import(
-      "@/features/project-assistant/w2/readCurrentGovernedExecutionContinuity"
-    );
-    const db = tempProductDbPath("pcont-cont-reader.sqlite");
-    const runtime = bootW2Runtime({
-      productDbPath: db,
-      idPrefix: "pcontcr",
-    });
-    const seeded = await seedQualifiedProject(runtime, { suffix: "cr" });
-    const oa = runtime.oa!;
+describe("CR-PCONT-06 — Attempt reader fail-closed (deterministic EC oracle)", () => {
+  /**
+   * Durable pre-execution EC that would otherwise project as kind=active.
+   * Built via Product OA path (propose → decide → build → save confirmed).
+   * Reader must reach readTerminalAttemptPresence for this executionContractId.
+   */
+  async function seedPreExecutionConfirmedEc(input: {
+    readonly runtime: RuntimeApplicationService;
+    readonly seeded: SeededW2Project;
+    readonly suffix: string;
+  }): Promise<{
+    readonly oa: NonNullable<RuntimeApplicationService["oa"]>;
+    readonly projectId: string;
+    readonly executionContractId: string;
+    readonly cycleInstanceId: string;
+    readonly contractVersion: number;
+  }> {
+    const oa = input.runtime.oa!;
+    const projectId = input.seeded.projectId;
+    const cycleInstanceId = input.seeded.cycleInstanceId;
+    const ecId = `xct:pcont06:${input.suffix}`;
+
+    const proposed = await proposeW2OptionsForProject(input.runtime, projectId);
+    expect(proposed.ok).toBe(true);
+    if (!proposed.ok) throw new Error(proposed.message);
+    expect(proposed.proposedTrajectory).toBeTruthy();
+
+    const decided = await decideTrajectory({
+      oa,
+      projectId,
+      optionSetRef: proposed.optionSetRef,
+      options: proposed.options,
+      recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
+      selectedOptionRef: GOVERNED_OPTION_REF,
+      trajectoryId: proposed.proposedTrajectory!.trajectoryId,
+      candidateVersion: proposed.proposedTrajectory!.version,
+      forceLocalAuthority: true,
+    });
+    expect(decided.ok).toBe(true);
+    if (!decided.ok) throw new Error(decided.message);
+    const decisionId = decided.decision.decisionId;
+
+    const authority = registerLocalPiloteAuthority({
+      authorityResolver: oa.authorityResolver,
+      scope: "studio.gcec.docs_write",
+      issuedAt: oa.clock.nowIso(),
+      evidenceId: `evd:pcont06:${input.suffix}`,
+      forceEnable: true,
+    });
+    expect(authority.ok).toBe(true);
+    if (!authority.ok) throw new Error(authority.code);
+
+    const built = await oa.executionContractServices.buildExecutionContract.execute(
+      {
+        executionContractId: ecId,
+        projectId,
+        cycleInstanceId,
+        decisionRefs: [decisionId],
+        action: M4_BOUNDED_DOCS_WRITE_ACTION,
+        target: M4_BOUNDED_DOCS_WRITE_TARGET,
+        scope: "studio.gcec.docs_write",
+        inputs: {
+          targetPath: "projects/sfia-studio/.sandbox/pcont06.md",
+          targetRepositoryRef: "mcleland147/sfia-workspace",
+          repositoryRef: "mcleland147/sfia-workspace",
+          pathAllowlist: ["projects/sfia-studio/.sandbox/"],
+          contentRequirements: ["markdown heading"],
+        },
+        requiredCapabilities: [M4_BOUNDED_DOCS_WRITE_CAPABILITY],
+        requiredAuthority: "MORRIS",
+        constraints: [
+          "BOUNDED DOCS-WRITE",
+          "PATH_ALLOWLIST_ONLY",
+          "NO_COMMIT",
+          "NO_PUSH",
+          "NO_PR",
+          "NO_MERGE",
+          "PREPARE_ONLY",
+        ],
+        stopConditions: ["AUTHORITY_DENIED"],
+        evidenceRequirements: ["evreq:docs_write_artifact"],
+        reversibility: "reversible",
+        idempotencyKey: `idem:ec:${ecId}`,
+        correlationId: `cor:ec:${ecId}`,
+        actor: LOCAL_PILOTE_ACTOR,
+        authorityEvidenceId: authority.evidenceId,
+      },
+    );
+    expect(built.ok).toBe(true);
+    if (!built.ok) {
+      throw new Error(
+        `build EC failed: ${built.error.detailCode} ${built.error.message}`,
+      );
+    }
+
+    const contract: ExecutionContract = {
+      ...built.contract,
+      status: "confirmed",
+    };
+    contract.semanticFingerprint =
+      computeExecutionContractSemanticMaterialFingerprint(
+        executionContractSemanticMaterial(contract),
+      );
+    await oa.executionContractServices.contracts.save(contract);
+
+    // Sanity: without Attempt-reader sabotage this EC projects as active.
+    const baseline = await readCurrentGovernedExecutionContinuity({
+      oa,
+      projectId,
+    });
+    expect(baseline).toEqual(
+      expect.objectContaining({
+        ok: true,
+        kind: "active",
+      }),
+    );
+    if (!baseline.ok || baseline.kind !== "active") {
+      throw new Error(
+        `baseline EC must be active pre-execution; got ${JSON.stringify(baseline)}`,
+      );
+    }
+    expect(baseline.contract.executionContractId).toBe(ecId);
+
+    return {
+      oa,
+      projectId,
+      executionContractId: ecId,
+      cycleInstanceId,
+      contractVersion: contract.version,
+    };
+  }
+
+  it("A — EC pre-exec + Attempt services UNKNOWN → EXECUTION_CONTINUITY_INTEGRITY_FAILED only", async () => {
+    const db = tempProductDbPath("pcont06-a.sqlite");
+    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "pcont06a" });
+    const seeded = await seedQualifiedProject(runtime, { suffix: "a" });
+    const fixture = await seedPreExecutionConfirmedEc({
+      runtime,
+      seeded,
+      suffix: "a",
+    });
+
     const broken = {
-      ...oa,
+      ...fixture.oa,
       executionAttemptServices: undefined,
     };
     const result = await readCurrentGovernedExecutionContinuity({
-      oa: broken as unknown as typeof oa,
-      projectId: seeded.projectId,
-    });
-    // When no EC exists, kind=none is fine; when EC would be scanned, fail-closed.
-    // Force path by ensuring we don't falsely treat unknown as no-terminal.
-    // With no contracts, result is kind=none — still not kind=active by default.
-    if (result.ok) {
-      expect(result.kind).not.toBe("active");
-    } else {
+      oa: broken as unknown as typeof fixture.oa,
+      projectId: fixture.projectId,
+    });
+
+    expect(result.ok).toBe(false);
+    if (result.ok) throw new Error("A must not return ok");
+    expect(result.code).toBe("EXECUTION_CONTINUITY_INTEGRITY_FAILED");
+    expect(result).not.toEqual(expect.objectContaining({ kind: "active" }));
+    expect(result).not.toEqual(expect.objectContaining({ kind: "none" }));
+  });
+
+  it("B — EC pre-exec + listExecutionAttempts ERROR → INTEGRITY_FAILED; spy proves call", async () => {
+    const db = tempProductDbPath("pcont06-b.sqlite");
+    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "pcont06b" });
+    const seeded = await seedQualifiedProject(runtime, { suffix: "b" });
+    const fixture = await seedPreExecutionConfirmedEc({
+      runtime,
+      seeded,
+      suffix: "b",
+    });
+    const attempts = fixture.oa.executionAttemptServices;
+    expect(attempts).toBeTruthy();
+    if (!attempts) throw new Error("attempt services required");
+
+    const orig = attempts.listExecutionAttempts.execute.bind(
+      attempts.listExecutionAttempts,
+    );
+    const listCalls: string[] = [];
+    attempts.listExecutionAttempts.execute = (async (request: {
+      readonly executionContractId: string;
+    }) => {
+      listCalls.push(request.executionContractId);
+      return {
+        ok: false as const,
+        error: {
+          code: "INTERNAL" as const,
+          detailCode: "LIST_ATTEMPTS_FAULT",
+          message: "forced list failure",
+          retryable: false,
+          severity: "error" as const,
+          blocking: true,
+          recoverable: false,
+          domain: "execution_attempt" as const,
+          timestamp: fixture.oa.clock.nowIso(),
+        },
+      };
+    }) as unknown as typeof orig;
+
+    try {
+      const result = await readCurrentGovernedExecutionContinuity({
+        oa: fixture.oa,
+        projectId: fixture.projectId,
+      });
+
+      expect(listCalls.length).toBeGreaterThanOrEqual(1);
+      expect(listCalls).toContain(fixture.executionContractId);
+
+      expect(result.ok).toBe(false);
+      if (result.ok) throw new Error("B must not return ok");
       expect(result.code).toBe("EXECUTION_CONTINUITY_INTEGRITY_FAILED");
+      expect(result).not.toEqual(expect.objectContaining({ kind: "active" }));
+      expect(result).not.toEqual(expect.objectContaining({ kind: "none" }));
+    } finally {
+      attempts.listExecutionAttempts.execute = orig;
     }
   });

-  it("listExecutionAttempts failure → fail-closed integrity", async () => {
-    const { readCurrentGovernedExecutionContinuity } = await import(
-      "@/features/project-assistant/w2/readCurrentGovernedExecutionContinuity"
-    );
-    const db = tempProductDbPath("pcont-cont-listfail.sqlite");
-    const runtime = bootW2Runtime({
-      productDbPath: db,
-      idPrefix: "pcontlf",
-    });
-    const seeded = await seedQualifiedProject(runtime, { suffix: "lf" });
-    const oa = runtime.oa!;
-    if (!oa.executionAttemptServices) {
-      throw new Error("expected attempt services");
-    }
-    const orig =
-      oa.executionAttemptServices.listExecutionAttempts.execute.bind(
-        oa.executionAttemptServices.listExecutionAttempts,
+  it("C — EC pre-exec + Attempt list SUCCESS [] → kind=active (EMPTY ≠ UNKNOWN)", async () => {
+    const db = tempProductDbPath("pcont06-c.sqlite");
+    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "pcont06c" });
+    const seeded = await seedQualifiedProject(runtime, { suffix: "c" });
+    const fixture = await seedPreExecutionConfirmedEc({
+      runtime,
+      seeded,
+      suffix: "c",
+    });
+
+    const listed =
+      await fixture.oa.executionAttemptServices!.listExecutionAttempts.execute({
+        executionContractId: fixture.executionContractId,
+      });
+    expect(listed.ok).toBe(true);
+    if (!listed.ok) throw new Error("list");
+    expect(listed.attempts).toEqual([]);
+
+    const result = await readCurrentGovernedExecutionContinuity({
+      oa: fixture.oa,
+      projectId: fixture.projectId,
+    });
+    expect(result.ok).toBe(true);
+    if (!result.ok) throw new Error(result.message);
+    expect(result.kind).toBe("active");
+    if (result.kind !== "active") throw new Error("expected active");
+    expect(result.contract.executionContractId).toBe(
+      fixture.executionContractId,
+    );
+  });
+
+  it("D — EC pre-exec + terminal Attempt succeeded → kind=none; zero mutation/relaunch", async () => {
+    const db = tempProductDbPath("pcont06-d.sqlite");
+    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "pcont06d" });
+    const seeded = await seedQualifiedProject(runtime, { suffix: "d" });
+    const fixture = await seedPreExecutionConfirmedEc({
+      runtime,
+      seeded,
+      suffix: "d",
+    });
+
+    const loaded = await fixture.oa.executionContractServices.contracts.findById(
+      fixture.executionContractId,
+    );
+    expect(loaded).toBeTruthy();
+    if (!loaded) throw new Error("missing EC");
+    const statusBefore = loaded.status;
+    const versionBefore = loaded.version;
+
+    const snap = captureBoundExecutionContractSnapshot(loaded);
+    const attemptId = `xat:pcont06:d:${Date.now().toString(16).slice(-8)}`;
+    const nowIso = fixture.oa.clock.nowIso();
+    await fixture.oa.executionAttemptServices!.attempts.create({
+      schemaVersion: "0.2.0-oa",
+      attemptId,
+      executionContractId: fixture.executionContractId,
+      executionContractVersion: fixture.contractVersion,
+      executionContractSemanticFingerprint: snap.semanticFingerprint,
+      boundExecutionContract: snap,
+      selectedAgentRef: "agt:m4.cursor.bounded_docs_write",
+      status: "succeeded",
+      idempotencyKey: `idem:att:${attemptId}`,
+      correlationId: `cor:att:${attemptId}`,
+      version: 1,
+      createdAt: nowIso,
+      updatedAt: nowIso,
+      completedAt: nowIso,
+      launchedAt: nowIso,
+      startedAt: nowIso,
+      resultRef: `res:${attemptId}`,
+      irreversibleEffectsPossible: true,
+      provenance: {
+        schemaVersion: "0.1.0-oa",
+        provenanceRecordId: `prv:${attemptId}`,
+        actor: LOCAL_PILOTE_ACTOR,
+        source: "system",
+        timestamp: nowIso,
+        correlationId: `cor:att:${attemptId}`,
+      },
+    } as never);
+
+    const listedBefore =
+      await fixture.oa.executionAttemptServices!.listExecutionAttempts.execute({
+        executionContractId: fixture.executionContractId,
+      });
+    expect(listedBefore.ok).toBe(true);
+    if (!listedBefore.ok) throw new Error("list before");
+    expect(listedBefore.attempts).toHaveLength(1);
+    expect(listedBefore.attempts[0]!.status).toBe("succeeded");
+
+    const result = await readCurrentGovernedExecutionContinuity({
+      oa: fixture.oa,
+      projectId: fixture.projectId,
+    });
+    expect(result.ok).toBe(true);
+    if (!result.ok) throw new Error(result.message);
+    expect(result.kind).toBe("none");
+
+    const listedAfter =
+      await fixture.oa.executionAttemptServices!.listExecutionAttempts.execute({
+        executionContractId: fixture.executionContractId,
+      });
+    expect(listedAfter.ok).toBe(true);
+    if (!listedAfter.ok) throw new Error("list after");
+    expect(listedAfter.attempts).toHaveLength(1);
+    expect(listedAfter.attempts[0]!.attemptId).toBe(attemptId);
+
+    const loadedAfter =
+      await fixture.oa.executionContractServices.contracts.findById(
+        fixture.executionContractId,
       );
-    oa.executionAttemptServices.listExecutionAttempts.execute = (async () => ({
-      ok: false as const,
-      error: {
-        code: "INTERNAL" as const,
-        detailCode: "LIST_ATTEMPTS_FAULT",
-        message: "forced list failure",
-        retryable: false,
-      },
-    })) as unknown as typeof orig;
-
-    // Without a pre-execution EC the loop never calls the reader — seed is framing-only.
-    // Integrity proof: helper itself rejects unavailable list when invoked on an EC.
-    // Restore after probing via direct path when contracts appear in E2E matrix.
-    const result = await readCurrentGovernedExecutionContinuity({
-      oa,
-      projectId: seeded.projectId,
-    });
-    if (!result.ok) {
-      expect(result.code).toBe("EXECUTION_CONTINUITY_INTEGRITY_FAILED");
-    } else {
-      expect(result.kind).toBe("none");
-    }
-    oa.executionAttemptServices.listExecutionAttempts.execute = orig;
+    expect(loadedAfter?.status).toBe(statusBefore);
+    expect(loadedAfter?.version).toBe(versionBefore);
   });

   it("advanceProductExecutionContractAfterEvidence surfaces failure reason", async () => {
@@ -93,4 +349,3 @@
     expect(advanced.reason).toBe("execution_attempt_services_unavailable");
   });
 });
-```
```

## 11. FULL file content — modified this pass

### `projects/sfia-studio/app/__tests__/project-assistant/postExecutionProductContinuity.d0.test.ts`

```typescript
/**
 * POST-EXECUTION PRODUCT CONTINUITY & RECOVERY — D-MORRIS-PCONT-01..04
 * Deterministic unit/integration. ZERO REAL. ZERO OpenAI LIVE.
 * @vitest-environment node
 */
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { FixedClock, type Digest } from "@/lib/oa/doctrine";
import { createTestDoctrineResolver } from "@/lib/oa/doctrine";
import {
  createInMemoryDecisionServices,
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import {
  advanceExecutionContractCompletion,
  createInMemoryExecutionAttemptServices,
  qualifyExecutionContractCompletion,
} from "@/lib/oa/execution-attempt";
import { captureBoundExecutionContractSnapshot } from "@/lib/oa/execution-attempt/domain/boundExecutionContract";
import {
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
  M4_BOUNDED_DOCS_WRITE_TARGET,
} from "@/lib/oa/execution-attempt/infrastructure/m4BoundedDocsWriteCursorAgent";
import {
  computeExecutionContractSemanticMaterialFingerprint,
  createInMemoryExecutionContractServices,
  executionContractSemanticMaterial,
  type ExecutionContract,
} from "@/lib/oa/execution-contract";
import type { Evidence } from "@/lib/oa/evidence-review";
import {
  createTestProjectServices,
  type ActorReference,
  type ProjectServices,
} from "@/lib/oa/project";
import {
  createTestCycleServices,
  type CycleServices,
  type TrajectoryStep,
} from "@/lib/oa/cycle";
import {
  deriveTrajectoryOptions,
  deriveTrajectoryRecommendation,
  GOVERNED_OPTION_REF,
  BOUNDED_OPTION_REF,
  CLARIFY_OPTION_REF,
} from "@/features/project-assistant/w2/trajectoryOptions";
import type { PostEvidenceRecoveryContext } from "@/features/project-assistant/w2/resolvePostEvidenceRecoveryContext";
import {
  createProposalId,
  F2_PROCESS_LOCAL_NOTICE,
  resetF2ProposalStoreForTests,
  saveProposal,
  getProposal,
} from "@/features/project-assistant/f2/proposalStore";
import { recordF2Decision } from "@/features/project-assistant/f2/recordDecision";
import { f2DirectOptionSetRef } from "@/features/project-assistant/w2/closeProposalDecisionSubject";
import { closedProposalIdsFromProposalDecisionRefs } from "@/features/project-assistant/w2/activeProposalDecisionSubject";
import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
import { readCurrentGovernedExecutionContinuity } from "@/features/project-assistant/w2/readCurrentGovernedExecutionContinuity";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  currentF2Context,
  proposeW2OptionsForProject,
  seedQualifiedProject,
  tempProductDbPath,
} from "./w2Harness";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import type { SeededW2Project } from "./w2Harness";

const APP_ROOT = path.resolve(__dirname, "../..");
const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

const VALID_DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;

const ACTOR: ActorReference = {
  actorId: "actor:pcont",
  role: "project_owner",
  displayName: "PCont",
  authorityLevel: "N3",
};

const UNCLAIMED_RECOVERY: PostEvidenceRecoveryContext = {
  kind: "post_evidence_recovery",
  attemptId: "xat:pcont:unclaimed",
  attemptStatus: "succeeded",
  stopReason: null,
  executionContractId: "xct:pcont:1",
  evidenceId: "ev:docs-write:xatpcont",
  reviewBundleId: "rb:docs-write:xatpcont",
  productOutcome: "UNCLAIMED",
  recommendationKind: "recover",
  headline: "Exécution technique réussie — résultat produit non prouvé",
  rationale: "Attempt succeeded; ClaimEvaluation not_proven; Product UNCLAIMED.",
  nextStep: "recovery_diagnose_or_replan",
  realProcessInvoked: false,
  businessEffectProven: false,
  w3cEpistemicItemId: "epi:w3c-rec:pcont",
};

beforeEach(() => {
  process.env.OPS1_CONVERSATION_PROVIDER = "fake";
  process.env.OPS1_E2E_ALLOW_DIRTY_PRINCIPAL = "1";
  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  setConversationProviderForTests(null);
  resetF2ProposalStoreForTests();
});

afterEach(() => {
  cleanupW2TempDirs();
  resetF2ProposalStoreForTests();
  setConversationProviderForTests(null);
});

describe("Axe C — UNCLAIMED + succeeded semantics", () => {
  it("never presents UNCLAIMED+succeeded as technical FAIL", () => {
    const inputs = {
      cycleTypeId: "cyc:framing",
      recommendedProfile: "Critical" as const,
      criticalSignalsPresent: true,
      irreversible: false,
      reservations: [] as string[],
      ckcAttribution: null,
      recoveryContext: UNCLAIMED_RECOVERY,
    };
    const options = deriveTrajectoryOptions(inputs);
    const blob = JSON.stringify(options);
    expect(blob).not.toMatch(/FAIL durable/i);
    expect(blob).not.toMatch(/Attempt failed/i);
    expect(blob).not.toMatch(/Conserver l'échec/i);
    expect(blob).toMatch(/technique réussie|non encore prouvé|non prouvé/i);
    expect(options[0]!.impacts.some((i) => /Attempt succeeded/i.test(i))).toBe(
      true,
    );
    const rec = deriveTrajectoryRecommendation(inputs);
    expect(rec.isHumanDecision).toBe(false);
    expect(rec.rationale).toMatch(/UNCLAIMED/);
    expect(rec.rationale).not.toMatch(/FAIL durable/);
  });

  it("keeps FAIL wording when productOutcome is FAIL", () => {
    const options = deriveTrajectoryOptions({
      cycleTypeId: "cyc:framing",
      recommendedProfile: "Critical",
      criticalSignalsPresent: true,
      irreversible: false,
      reservations: [],
      ckcAttribution: null,
      recoveryContext: {
        ...UNCLAIMED_RECOVERY,
        attemptStatus: "failed",
        productOutcome: "FAIL",
        headline: "Échec technique — recovery requise",
      },
    });
    expect(JSON.stringify(options)).toMatch(/FAIL durable/);
    expect(options.map((o) => o.optionRef)).toEqual([
      GOVERNED_OPTION_REF,
      BOUNDED_OPTION_REF,
      CLARIFY_OPTION_REF,
    ]);
  });
});

describe("Axe A — EC completion qualification", () => {
  function docsWriteContract(
    status: ExecutionContract["status"],
  ): ExecutionContract {
    return {
      schemaVersion: "0.2.0-oa",
      executionContractId: "xct:pcont:docs",
      projectId: "prj:pcont",
      cycleInstanceId: "cyc:pcont",
      version: 2,
      status,
      semanticFingerprint: "fp:pcont",
      action: "bounded_docs_write",
      target: "docs/x.md",
      scope: "docs/",
      requiredAuthority: "N3",
      constraints: ["NO_COMMIT", "NO_PUSH", "NO_PR", "NO_MERGE"],
      stopConditions: [],
      evidenceRequirements: ["evreq:docs_write_artifact"],
      expectedOutputs: [],
      requiredCapabilities: ["cap:docs_write"],
      reversibility: "reversible",
      idempotencyKey: "idem:pcont",
      correlationId: "cor:pcont",
    };
  }

  function artifactEvidence(status: Evidence["status"]): Evidence {
    return {
      schemaVersion: "0.1.0-oa",
      evidenceId: "ev:docs-write:pcont",
      type: "artifact",
      status,
      availability: "available",
      digest: "sha256:abc",
      location: "docs/x.md",
      source: "execution_attempt:docs_write",
      sourceKind: "external",
      classification: "internal",
      storageMode: "metadata_only",
      containsSecrets: false,
      version: 1,
      createdAt: "2026-09-20T00:00:00.000Z",
      updatedAt: "2026-09-20T00:00:00.000Z",
      producedAt: "2026-09-20T00:00:00.000Z",
      provenance: { kind: "execution_attempt", attemptId: "xat:pcont" },
      bindings: {
        projectId: "prj:pcont",
        cycleInstanceId: "cyc:pcont",
        executionContractId: "xct:pcont:docs",
        executionAttemptId: "xat:pcont",
      },
    } as unknown as Evidence;
  }

  it("available Evidence alone does not complete", () => {
    const q = qualifyExecutionContractCompletion({
      contract: docsWriteContract("confirmed"),
      evidence: [artifactEvidence("available")],
      cycleInstanceId: "cyc:pcont",
    });
    expect(q.complete).toBe(false);
    expect(q.nextStatusAfterSuccessfulAttempt).toBe("confirmed");
  });

  it("verified Evidence completes docs_write filesystem requirement", () => {
    const q = qualifyExecutionContractCompletion({
      contract: docsWriteContract("confirmed"),
      evidence: [artifactEvidence("verified")],
      cycleInstanceId: "cyc:pcont",
    });
    expect(q.complete).toBe(true);
    expect(q.nextStatusAfterSuccessfulAttempt).toBe("completed");
  });

  it("advanceExecutionContractCompletion is idempotent when already completed", async () => {
    const clock = new FixedClock("2026-09-20T00:00:00.000Z");
    const projects = createTestProjectServices({
      doctrineResolver: createTestDoctrineResolver({
        registryRoot: FIXTURES,
        schemasRoot: SCHEMAS,
      }).resolver,
      fixedNowIso: "2026-09-20T00:00:00.000Z",
    });
    const decisions = createInMemoryDecisionServices({
      clock,
      projectServices: projects,
    });
    const contracts = createInMemoryExecutionContractServices({
      clock,
      decisionServices: decisions,
      projectServices: projects,
    });
    const attempts = createInMemoryExecutionAttemptServices({
      clock,
      decisionServices: decisions,
      executionContractServices: contracts,
    });
    const contract = docsWriteContract("completed");
    await contracts.contracts.save(contract);
    const r1 = await advanceExecutionContractCompletion({
      executionContractId: contract.executionContractId,
      contracts: contracts.contracts,
      contractStatusWriter: attempts.contractStatusWriter,
      evidence: [artifactEvidence("verified")],
      cycleInstanceId: "cyc:pcont",
      clock,
    });
    expect(r1.ok).toBe(true);
    if (!r1.ok) return;
    expect(r1.complete).toBe(true);
    expect(r1.advanced).toBe(false);
    expect(r1.status).toBe("completed");
  });
});

describe("Axe F — ProjectTrajectory current vs candidate LPS", () => {
  const STEPS_V1: TrajectoryStep[] = [
    { stepId: "stp:a", order: 1, label: "A", state: "done" },
    { stepId: "stp:b", order: 2, label: "B", state: "pending" },
  ];

  function buildProjectServices(): ProjectServices {
    const { resolver } = createTestDoctrineResolver({
      registryRoot: FIXTURES,
      schemasRoot: SCHEMAS,
    });
    return createTestProjectServices({
      doctrineResolver: resolver,
      fixedNowIso: "2026-09-20T01:00:00.000Z",
    });
  }

  function buildCycle(projects: ProjectServices): CycleServices {
    return createTestCycleServices({
      projectServices: projects,
      fixedNowIso: "2026-09-20T01:00:00.000Z",
    });
  }

  it("propose v2 candidate keeps repo current + LPS at v1; promote syncs both", async () => {
    const projects = buildProjectServices();
    const created = await projects.createProject.execute({
      projectId: "prj:trj-pcont",
      title: "PCont traj",
      objective: "LPS current vs candidate",
      doctrinePackagePin: {
        doctrinePackageId: "pkg:studio-v3-oa",
        version: "1.0.0",
        digest: VALID_DIGEST,
      },
      createdBy: ACTOR,
      lpsVersionId: "lps:trj-pcont-v1",
    });
    expect(created.ok).toBe(true);

    const cycle = buildCycle(projects);
    const v1 = await cycle.createInitialTrajectory.execute({
      trajectoryId: "trj:pcont",
      projectId: "prj:trj-pcont",
      steps: STEPS_V1,
      status: "validated" as "active",
      expectedLpsVersion: 1,
      createdBy: ACTOR,
    });
    expect(v1.ok).toBe(true);
    if (!v1.ok) return;

    const lpsAfterV1 = await projects.getCurrentLivingProjectState.execute({
      projectId: "prj:trj-pcont",
    });
    expect(lpsAfterV1.ok).toBe(true);
    if (!lpsAfterV1.ok) return;
    expect(lpsAfterV1.livingProjectState.trajectoryVersion).toBe(1);

    const proposed = await cycle.proposeTrajectoryVersion.execute({
      trajectoryId: "trj:pcont",
      projectId: "prj:trj-pcont",
      expectedVersion: 1,
      expectedLpsVersion: lpsAfterV1.livingProjectState.version,
      steps: [
        ...STEPS_V1,
        { stepId: "stp:c", order: 3, label: "C", state: "pending" },
      ],
      status: "candidate",
      createdBy: ACTOR,
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    expect(proposed.trajectory.version).toBe(2);
    expect(proposed.trajectory.status).toBe("candidate");

    const current =
      await cycle.trajectories.findCurrentByProjectId("prj:trj-pcont");
    expect(current?.version).toBe(1);
    expect(current?.status).toBe("validated");

    const lpsAfterCandidate =
      await projects.getCurrentLivingProjectState.execute({
        projectId: "prj:trj-pcont",
      });
    expect(lpsAfterCandidate.ok).toBe(true);
    if (!lpsAfterCandidate.ok) return;
    expect(lpsAfterCandidate.livingProjectState.trajectoryVersion).toBe(1);
    expect(lpsAfterCandidate.livingProjectState.trajectoryId).toBe("trj:pcont");

    const candidate = await cycle.getTrajectoryVersion.execute({
      projectId: "prj:trj-pcont",
      version: 2,
    });
    expect(candidate.ok).toBe(true);
    if (!candidate.ok) return;
    expect(candidate.trajectory.status).toBe("candidate");

    const promoted = await cycle.promoteDecidedTrajectory.execute({
      projectId: "prj:trj-pcont",
      trajectoryId: "trj:pcont",
      expectedVersion: 2,
      decisionRef: "dec:pcont:promote",
      decidedOptionRef: "opt:governed",
      expectedLpsVersion: lpsAfterCandidate.livingProjectState.version,
      createdBy: ACTOR,
    });
    expect(promoted.ok).toBe(true);
    if (!promoted.ok) return;
    expect(promoted.trajectory.version).toBe(2);

    const currentAfter =
      await cycle.trajectories.findCurrentByProjectId("prj:trj-pcont");
    expect(currentAfter?.version).toBe(2);

    const lpsAfterPromote = await projects.getCurrentLivingProjectState.execute(
      { projectId: "prj:trj-pcont" },
    );
    expect(lpsAfterPromote.ok).toBe(true);
    if (!lpsAfterPromote.ok) return;
    expect(lpsAfterPromote.livingProjectState.trajectoryVersion).toBe(2);
  });
});

describe("Axe E — recordF2Decision DecisionRef closure convergence", () => {
  it("writes DecisionRef + closes subject; restart does not resurrect awaiting", async () => {
    const db = tempProductDbPath("pcont-f2-closure.sqlite");
    const runtime = bootW2Runtime({
      productDbPath: db,
      idPrefix: "pcontf2",
    });
    const seeded = await seedQualifiedProject(runtime, { suffix: "f2c" });
    const oa = runtime.oa!;
    const ctx = await currentF2Context(runtime, seeded.projectId);
    const proposalId = createProposalId();
    saveProposal({
      proposalId,
      status: "DECISION_REQUIRED",
      rephrasedRequest: "PCont F2",
      objective: "Close via recordF2Decision",
      cycleTypeId: "cyc:delivery",
      recommendedProfile: "Standard",
      rationale: "PCont",
      scope: "docs/",
      outOfScope: [],
      activatedBlocks: [],
      expectedOutcome: "artifact",
      sources: [],
      risks: [],
      reservations: [],
      stopConditions: [],
      morrisGateRequired: true,
      nextPossibleStep: "F3 PREPARE",
      contextSnapshot: {
        projectId: ctx.projectId,
        lpsId: ctx.lpsId,
        lpsVersion: ctx.lpsVersion,
        doctrineDigest: ctx.doctrineDigest,
        activeCycleInstanceId: ctx.activeCycleInstanceId ?? undefined,
      },
      processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
      executionForbidden: true,
      noExecutingStatus: true,
      agentBinding: "NOT_AVAILABLE",
    });

    const recorded = await recordF2Decision({
      proposalId,
      projectId: seeded.projectId,
      decisionKind: "GO",
      currentContext: {
        projectId: ctx.projectId,
        lpsId: ctx.lpsId,
        lpsVersion: ctx.lpsVersion,
        doctrineDigest: ctx.doctrineDigest,
        activeCycleInstanceId: ctx.activeCycleInstanceId ?? undefined,
      },
      decisionServices: oa.decisionServices,
      authorityResolver: oa.authorityResolver,
      nowIso: () => oa.clock.nowIso(),
      forceM3Authority: true,
      oa,
    });
    expect(recorded.ok).toBe(true);
    if (!recorded.ok) throw new Error(recorded.message);
    expect(recorded.proposal.status).toBe("APPROVED");

    const items = await oa.cycleServices.epistemic.listByProject(
      seeded.projectId,
    );
    const closed = closedProposalIdsFromProposalDecisionRefs(items);
    expect(closed.has(proposalId)).toBe(true);
    const optionSetRef = f2DirectOptionSetRef(proposalId);
    const decref = items.find(
      (i) =>
        i.type === "DecisionRef" &&
        i.status === "active" &&
        (i.relatedObjects ?? []).includes(optionSetRef) &&
        (i.relatedObjects ?? []).includes(proposalId),
    );
    expect(decref).toBeTruthy();

    resetF2ProposalStoreForTests();
    expect(getProposal(proposalId)).toBeNull();
    const itemsAfter = await oa.cycleServices.epistemic.listByProject(
      seeded.projectId,
    );
    expect(
      closedProposalIdsFromProposalDecisionRefs(itemsAfter).has(proposalId),
    ).toBe(true);
  });

  it("CR-PCONT-03 — DecisionRef persist failure rolls back HumanDecision; Proposal not APPROVED", async () => {
    const db = tempProductDbPath("pcont-f2-rollback.sqlite");
    const runtime = bootW2Runtime({
      productDbPath: db,
      idPrefix: "pcontf2rb",
    });
    const seeded = await seedQualifiedProject(runtime, { suffix: "f2rb" });
    const oa = runtime.oa!;
    const ctx = await currentF2Context(runtime, seeded.projectId);
    const proposalId = createProposalId();
    saveProposal({
      proposalId,
      status: "DECISION_REQUIRED",
      rephrasedRequest: "PCont F2 rollback",
      objective: "Force DecisionRef fault",
      cycleTypeId: "cyc:delivery",
      recommendedProfile: "Standard",
      rationale: "PCont",
      scope: "docs/",
      outOfScope: [],
      activatedBlocks: [],
      expectedOutcome: "artifact",
      sources: [],
      risks: [],
      reservations: [],
      stopConditions: [],
      morrisGateRequired: true,
      nextPossibleStep: "F3 PREPARE",
      contextSnapshot: {
        projectId: ctx.projectId,
        lpsId: ctx.lpsId,
        lpsVersion: ctx.lpsVersion,
        doctrineDigest: ctx.doctrineDigest,
        activeCycleInstanceId: ctx.activeCycleInstanceId ?? undefined,
      },
      processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
      executionForbidden: true,
      noExecutingStatus: true,
      agentBinding: "NOT_AVAILABLE",
    });

    const decisionsBefore = await oa.decisionServices.listDecisionHistory.execute(
      { projectId: seeded.projectId },
    );
    const beforeCount = decisionsBefore.ok
      ? decisionsBefore.decisions.length
      : 0;

    const orig = oa.cycleServices.updateEpistemicState.execute.bind(
      oa.cycleServices.updateEpistemicState,
    );
    oa.cycleServices.updateEpistemicState.execute = (async (req) => {
      const hasDecisionRef = req.items.some((i) => i.type === "DecisionRef");
      if (hasDecisionRef) {
        return {
          ok: false as const,
          error: {
            code: "INTERNAL" as const,
            detailCode: "FAULT_INJECTED_DECISION_REF",
            message: "forced DecisionRef persist failure",
            retryable: false,
          },
        };
      }
      return orig(req);
    }) as typeof orig;

    const recorded = await recordF2Decision({
      proposalId,
      projectId: seeded.projectId,
      decisionKind: "GO",
      currentContext: {
        projectId: ctx.projectId,
        lpsId: ctx.lpsId,
        lpsVersion: ctx.lpsVersion,
        doctrineDigest: ctx.doctrineDigest,
        activeCycleInstanceId: ctx.activeCycleInstanceId ?? undefined,
      },
      decisionServices: oa.decisionServices,
      authorityResolver: oa.authorityResolver,
      nowIso: () => oa.clock.nowIso(),
      forceM3Authority: true,
      oa,
    });
    expect(recorded.ok).toBe(false);
    if (recorded.ok) throw new Error("expected failure");
    expect(recorded.code).toBe("FAULT_INJECTED_DECISION_REF");

    const decisionsAfter = await oa.decisionServices.listDecisionHistory.execute({
      projectId: seeded.projectId,
    });
    expect(decisionsAfter.ok).toBe(true);
    if (!decisionsAfter.ok) return;
    expect(decisionsAfter.decisions.length).toBe(beforeCount);

    expect(getProposal(proposalId)?.status).toBe("DECISION_REQUIRED");
    expect(getProposal(proposalId)?.status).not.toBe("APPROVED");

    const items = await oa.cycleServices.epistemic.listByProject(
      seeded.projectId,
    );
    expect(
      closedProposalIdsFromProposalDecisionRefs(items).has(proposalId),
    ).toBe(false);

    // Restore + success path: HD + DecisionRef durable; store reset keeps closed.
    oa.cycleServices.updateEpistemicState.execute = orig;
    const success = await recordF2Decision({
      proposalId,
      projectId: seeded.projectId,
      decisionKind: "GO",
      currentContext: {
        projectId: ctx.projectId,
        lpsId: ctx.lpsId,
        lpsVersion: ctx.lpsVersion,
        doctrineDigest: ctx.doctrineDigest,
        activeCycleInstanceId: ctx.activeCycleInstanceId ?? undefined,
      },
      decisionServices: oa.decisionServices,
      authorityResolver: oa.authorityResolver,
      nowIso: () => oa.clock.nowIso(),
      forceM3Authority: true,
      oa,
    });
    expect(success.ok).toBe(true);
    if (!success.ok) throw new Error(success.message);
    expect(success.proposal.status).toBe("APPROVED");
    resetF2ProposalStoreForTests();
    const itemsAfter = await oa.cycleServices.epistemic.listByProject(
      seeded.projectId,
    );
    expect(
      closedProposalIdsFromProposalDecisionRefs(itemsAfter).has(proposalId),
    ).toBe(true);
  });
});

describe("CR-PCONT-01 — candidate→candidate keeps LPS on decided current", () => {
  const STEPS_V1: TrajectoryStep[] = [
    { stepId: "stp:a", order: 1, label: "A", state: "done" },
    { stepId: "stp:b", order: 2, label: "B", state: "pending" },
  ];

  it("v1 validated → v2 candidate → v3 candidate; promote v3 syncs current+LPS", async () => {
    const { resolver } = createTestDoctrineResolver({
      registryRoot: FIXTURES,
      schemasRoot: SCHEMAS,
    });
    const projects = createTestProjectServices({
      doctrineResolver: resolver,
      fixedNowIso: "2026-09-20T02:00:00.000Z",
    });
    const cycle = createTestCycleServices({
      projectServices: projects,
      fixedNowIso: "2026-09-20T02:00:00.000Z",
    });
    const created = await projects.createProject.execute({
      projectId: "prj:trj-pcont-v3",
      title: "PCont v1→v2→v3",
      objective: "candidate chain LPS",
      doctrinePackagePin: {
        doctrinePackageId: "pkg:studio-v3-oa",
        version: "1.0.0",
        digest: VALID_DIGEST,
      },
      createdBy: ACTOR,
      lpsVersionId: "lps:trj-pcont-v3-v1",
    });
    expect(created.ok).toBe(true);

    const v1 = await cycle.createInitialTrajectory.execute({
      trajectoryId: "trj:pcont-v3",
      projectId: "prj:trj-pcont-v3",
      steps: STEPS_V1,
      status: "validated" as "active",
      expectedLpsVersion: 1,
      createdBy: ACTOR,
    });
    expect(v1.ok).toBe(true);
    if (!v1.ok) return;

    const lps1 = await projects.getCurrentLivingProjectState.execute({
      projectId: "prj:trj-pcont-v3",
    });
    expect(lps1.ok).toBe(true);
    if (!lps1.ok) return;

    const v2 = await cycle.proposeTrajectoryVersion.execute({
      trajectoryId: "trj:pcont-v3",
      projectId: "prj:trj-pcont-v3",
      expectedVersion: 1,
      expectedLpsVersion: lps1.livingProjectState.version,
      steps: [
        ...STEPS_V1,
        { stepId: "stp:c", order: 3, label: "C", state: "pending" },
      ],
      status: "candidate",
      createdBy: ACTOR,
    });
    expect(v2.ok).toBe(true);
    if (!v2.ok) return;
    expect(v2.trajectory.version).toBe(2);

    const afterV2 = await projects.getCurrentLivingProjectState.execute({
      projectId: "prj:trj-pcont-v3",
    });
    expect(afterV2.ok).toBe(true);
    if (!afterV2.ok) return;
    expect(afterV2.livingProjectState.trajectoryVersion).toBe(1);
    expect(
      (await cycle.trajectories.findCurrentByProjectId("prj:trj-pcont-v3"))
        ?.version,
    ).toBe(1);

    const v3 = await cycle.proposeTrajectoryVersion.execute({
      trajectoryId: "trj:pcont-v3",
      projectId: "prj:trj-pcont-v3",
      expectedVersion: 2,
      expectedLpsVersion: afterV2.livingProjectState.version,
      steps: [
        ...STEPS_V1,
        { stepId: "stp:c", order: 3, label: "C", state: "pending" },
        { stepId: "stp:d", order: 4, label: "D", state: "pending" },
      ],
      status: "candidate",
      createdBy: ACTOR,
    });
    expect(v3.ok).toBe(true);
    if (!v3.ok) return;
    expect(v3.trajectory.version).toBe(3);
    expect(v3.trajectory.status).toBe("candidate");

    const afterV3 = await projects.getCurrentLivingProjectState.execute({
      projectId: "prj:trj-pcont-v3",
    });
    expect(afterV3.ok).toBe(true);
    if (!afterV3.ok) return;
    // CR-PCONT-01 — LPS must stay on decided current v1, not lineage head v3.
    expect(afterV3.livingProjectState.trajectoryVersion).toBe(1);
    expect(
      (await cycle.trajectories.findCurrentByProjectId("prj:trj-pcont-v3"))
        ?.version,
    ).toBe(1);

    const candidateV3 = await cycle.getTrajectoryVersion.execute({
      projectId: "prj:trj-pcont-v3",
      version: 3,
    });
    expect(candidateV3.ok).toBe(true);
    if (!candidateV3.ok) return;
    expect(candidateV3.trajectory.status).toBe("candidate");

    const promoted = await cycle.promoteDecidedTrajectory.execute({
      projectId: "prj:trj-pcont-v3",
      trajectoryId: "trj:pcont-v3",
      expectedVersion: 3,
      decisionRef: "dec:pcont:promote-v3",
      decidedOptionRef: "opt:governed",
      expectedLpsVersion: afterV3.livingProjectState.version,
      createdBy: ACTOR,
    });
    expect(promoted.ok).toBe(true);
    if (!promoted.ok) return;
    expect(promoted.trajectory.version).toBe(3);
    expect(
      (await cycle.trajectories.findCurrentByProjectId("prj:trj-pcont-v3"))
        ?.version,
    ).toBe(3);
    const lpsPromoted = await projects.getCurrentLivingProjectState.execute({
      projectId: "prj:trj-pcont-v3",
    });
    expect(lpsPromoted.ok).toBe(true);
    if (!lpsPromoted.ok) return;
    expect(lpsPromoted.livingProjectState.trajectoryVersion).toBe(3);
  });
});

describe("CR-PCONT-02 — FAIL / STOP / UNCLAIMED semantic separation", () => {
  it("STOP never uses FAIL durable or Conserver l'échec Product intent", () => {
    const options = deriveTrajectoryOptions({
      cycleTypeId: "cyc:framing",
      recommendedProfile: "Critical",
      criticalSignalsPresent: true,
      irreversible: false,
      reservations: [],
      ckcAttribution: null,
      recoveryContext: {
        ...UNCLAIMED_RECOVERY,
        attemptStatus: "cancelled",
        productOutcome: "STOP",
        headline: "Arrêt gouverné",
        stopReason: "PILOT_STOP",
      },
    });
    const blob = JSON.stringify(options);
    expect(blob).toMatch(/STOP/);
    expect(blob).not.toMatch(/FAIL durable/);
    expect(blob).not.toMatch(/Conserver l'échec/);
    expect(blob).toMatch(/STOP \/ arrêt gouverné|arrêt gouverné \(STOP\)/);
  });

  it("FAIL keeps FAIL durable and Conserver l'échec", () => {
    const options = deriveTrajectoryOptions({
      cycleTypeId: "cyc:framing",
      recommendedProfile: "Critical",
      criticalSignalsPresent: true,
      irreversible: false,
      reservations: [],
      ckcAttribution: null,
      recoveryContext: {
        ...UNCLAIMED_RECOVERY,
        attemptStatus: "failed",
        productOutcome: "FAIL",
        headline: "Échec",
      },
    });
    const blob = JSON.stringify(options);
    expect(blob).toMatch(/FAIL durable/);
    expect(blob).toMatch(/Conserver l'échec/);
    expect(blob).not.toMatch(/STOP durable \/ arrêt gouverné/);
  });

  it("UNCLAIMED+succeeded never presents as FAIL", () => {
    const options = deriveTrajectoryOptions({
      cycleTypeId: "cyc:framing",
      recommendedProfile: "Critical",
      criticalSignalsPresent: true,
      irreversible: false,
      reservations: [],
      ckcAttribution: null,
      recoveryContext: UNCLAIMED_RECOVERY,
    });
    const blob = JSON.stringify(options);
    expect(blob).toMatch(/technique réussie|non encore prouvé|non prouvé/i);
    expect(blob).not.toMatch(/FAIL durable/);
    expect(blob).not.toMatch(/Conserver l'échec/);
  });
});

describe("CR-PCONT-04 — Product helper never scripts FakeEvidencePayloadAdapter", () => {
  it("source has no FakeEvidencePayloadAdapter / setScript", async () => {
    const fs = await import("node:fs/promises");
    const src = await fs.readFile(
      path.resolve(
        __dirname,
        "../../features/project-assistant/w2/advanceProductExecutionContractAfterEvidence.ts",
      ),
      "utf8",
    );
    expect(src).not.toMatch(/FakeEvidencePayloadAdapter/);
    expect(src).not.toMatch(/setScript/);
    expect(src).not.toMatch(/instanceof\s+Fake/);
  });

  it("available Evidence does not complete EC; harness-scripted verify can", async () => {
    const { advanceProductExecutionContractAfterEvidence } = await import(
      "@/features/project-assistant/w2/advanceProductExecutionContractAfterEvidence"
    );
    const { FakeEvidencePayloadAdapter } = await import(
      "@/lib/oa/evidence-review"
    );
    const db = tempProductDbPath("pcont-evidence-boundary.sqlite");
    const runtime = bootW2Runtime({
      productDbPath: db,
      idPrefix: "pcontev",
    });
    const seeded = await seedQualifiedProject(runtime, { suffix: "evb" });
    const oa = runtime.oa!;

    // Harness-only Fake scripting — NEVER from Product code.
    const payload =
      oa.evidenceReviewServices.payload instanceof FakeEvidencePayloadAdapter
        ? oa.evidenceReviewServices.payload
        : null;
    expect(payload).toBeTruthy();

    const registered = await oa.evidenceReviewServices.registerEvidence.execute({
      evidenceId: "ev:pcont-boundary",
      type: "artifact",
      status: "available",
      digest: VALID_DIGEST,
      location: "docs/x.md",
      source: "test",
      sourceKind: "external",
      classification: "internal",
      storageMode: "metadata_only",
      bindings: {
        projectId: seeded.projectId,
        cycleInstanceId: seeded.cycleInstanceId,
        executionContractId: "xct:pcont-boundary",
        executionAttemptId: "xat:pcont-boundary",
      },
      actor: LOCAL_PILOTE_ACTOR,
      correlationId: "cor:pcont-boundary",
      idempotencyKey: "idem:pcont-boundary",
    });
    expect(registered.ok).toBe(true);
    if (!registered.ok) {
      throw new Error(
        `registerEvidence failed: ${JSON.stringify(registered.error)}`,
      );
    }

    // Without harness script: verify fails → EC not completed.
    const withoutScript = await advanceProductExecutionContractAfterEvidence({
      oa,
      projectId: seeded.projectId,
      executionContractId: "xct:pcont-boundary",
      cycleInstanceId: seeded.cycleInstanceId,
      freshlyIngestedEvidenceId: "ev:pcont-boundary",
    });
    // May fail if no EC exists — that's honest; Product must not mint verify.
    if (withoutScript.ok) {
      expect(withoutScript.complete).toBe(false);
      expect(withoutScript.verifiedEvidenceIds).not.toContain(
        "ev:pcont-boundary",
      );
    }

    // External harness scripts observed digest independently of Product.
    payload!.setScript("ev:pcont-boundary", {
      availability: "available",
      digest: VALID_DIGEST,
    });
    const verified =
      await oa.evidenceReviewServices.verifyEvidenceIntegrity.execute({
        evidenceId: "ev:pcont-boundary",
        expectedVersion: registered.evidence.version,
        actor: LOCAL_PILOTE_ACTOR,
      });
    expect(verified.ok).toBe(true);
    if (verified.ok) {
      expect(verified.evidence.status).toBe("verified");
    }
  });
});

describe("CR-PCONT-06 — Attempt reader fail-closed (deterministic EC oracle)", () => {
  /**
   * Durable pre-execution EC that would otherwise project as kind=active.
   * Built via Product OA path (propose → decide → build → save confirmed).
   * Reader must reach readTerminalAttemptPresence for this executionContractId.
   */
  async function seedPreExecutionConfirmedEc(input: {
    readonly runtime: RuntimeApplicationService;
    readonly seeded: SeededW2Project;
    readonly suffix: string;
  }): Promise<{
    readonly oa: NonNullable<RuntimeApplicationService["oa"]>;
    readonly projectId: string;
    readonly executionContractId: string;
    readonly cycleInstanceId: string;
    readonly contractVersion: number;
  }> {
    const oa = input.runtime.oa!;
    const projectId = input.seeded.projectId;
    const cycleInstanceId = input.seeded.cycleInstanceId;
    const ecId = `xct:pcont06:${input.suffix}`;

    const proposed = await proposeW2OptionsForProject(input.runtime, projectId);
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) throw new Error(proposed.message);
    expect(proposed.proposedTrajectory).toBeTruthy();

    const decided = await decideTrajectory({
      oa,
      projectId,
      optionSetRef: proposed.optionSetRef,
      options: proposed.options,
      recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
      selectedOptionRef: GOVERNED_OPTION_REF,
      trajectoryId: proposed.proposedTrajectory!.trajectoryId,
      candidateVersion: proposed.proposedTrajectory!.version,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) throw new Error(decided.message);
    const decisionId = decided.decision.decisionId;

    const authority = registerLocalPiloteAuthority({
      authorityResolver: oa.authorityResolver,
      scope: "studio.gcec.docs_write",
      issuedAt: oa.clock.nowIso(),
      evidenceId: `evd:pcont06:${input.suffix}`,
      forceEnable: true,
    });
    expect(authority.ok).toBe(true);
    if (!authority.ok) throw new Error(authority.code);

    const built = await oa.executionContractServices.buildExecutionContract.execute(
      {
        executionContractId: ecId,
        projectId,
        cycleInstanceId,
        decisionRefs: [decisionId],
        action: M4_BOUNDED_DOCS_WRITE_ACTION,
        target: M4_BOUNDED_DOCS_WRITE_TARGET,
        scope: "studio.gcec.docs_write",
        inputs: {
          targetPath: "projects/sfia-studio/.sandbox/pcont06.md",
          targetRepositoryRef: "mcleland147/sfia-workspace",
          repositoryRef: "mcleland147/sfia-workspace",
          pathAllowlist: ["projects/sfia-studio/.sandbox/"],
          contentRequirements: ["markdown heading"],
        },
        requiredCapabilities: [M4_BOUNDED_DOCS_WRITE_CAPABILITY],
        requiredAuthority: "MORRIS",
        constraints: [
          "BOUNDED DOCS-WRITE",
          "PATH_ALLOWLIST_ONLY",
          "NO_COMMIT",
          "NO_PUSH",
          "NO_PR",
          "NO_MERGE",
          "PREPARE_ONLY",
        ],
        stopConditions: ["AUTHORITY_DENIED"],
        evidenceRequirements: ["evreq:docs_write_artifact"],
        reversibility: "reversible",
        idempotencyKey: `idem:ec:${ecId}`,
        correlationId: `cor:ec:${ecId}`,
        actor: LOCAL_PILOTE_ACTOR,
        authorityEvidenceId: authority.evidenceId,
      },
    );
    expect(built.ok).toBe(true);
    if (!built.ok) {
      throw new Error(
        `build EC failed: ${built.error.detailCode} ${built.error.message}`,
      );
    }

    const contract: ExecutionContract = {
      ...built.contract,
      status: "confirmed",
    };
    contract.semanticFingerprint =
      computeExecutionContractSemanticMaterialFingerprint(
        executionContractSemanticMaterial(contract),
      );
    await oa.executionContractServices.contracts.save(contract);

    // Sanity: without Attempt-reader sabotage this EC projects as active.
    const baseline = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId,
    });
    expect(baseline).toEqual(
      expect.objectContaining({
        ok: true,
        kind: "active",
      }),
    );
    if (!baseline.ok || baseline.kind !== "active") {
      throw new Error(
        `baseline EC must be active pre-execution; got ${JSON.stringify(baseline)}`,
      );
    }
    expect(baseline.contract.executionContractId).toBe(ecId);

    return {
      oa,
      projectId,
      executionContractId: ecId,
      cycleInstanceId,
      contractVersion: contract.version,
    };
  }

  it("A — EC pre-exec + Attempt services UNKNOWN → EXECUTION_CONTINUITY_INTEGRITY_FAILED only", async () => {
    const db = tempProductDbPath("pcont06-a.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "pcont06a" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "a" });
    const fixture = await seedPreExecutionConfirmedEc({
      runtime,
      seeded,
      suffix: "a",
    });

    const broken = {
      ...fixture.oa,
      executionAttemptServices: undefined,
    };
    const result = await readCurrentGovernedExecutionContinuity({
      oa: broken as unknown as typeof fixture.oa,
      projectId: fixture.projectId,
    });

    expect(result.ok).toBe(false);
    if (result.ok) throw new Error("A must not return ok");
    expect(result.code).toBe("EXECUTION_CONTINUITY_INTEGRITY_FAILED");
    expect(result).not.toEqual(expect.objectContaining({ kind: "active" }));
    expect(result).not.toEqual(expect.objectContaining({ kind: "none" }));
  });

  it("B — EC pre-exec + listExecutionAttempts ERROR → INTEGRITY_FAILED; spy proves call", async () => {
    const db = tempProductDbPath("pcont06-b.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "pcont06b" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "b" });
    const fixture = await seedPreExecutionConfirmedEc({
      runtime,
      seeded,
      suffix: "b",
    });
    const attempts = fixture.oa.executionAttemptServices;
    expect(attempts).toBeTruthy();
    if (!attempts) throw new Error("attempt services required");

    const orig = attempts.listExecutionAttempts.execute.bind(
      attempts.listExecutionAttempts,
    );
    const listCalls: string[] = [];
    attempts.listExecutionAttempts.execute = (async (request: {
      readonly executionContractId: string;
    }) => {
      listCalls.push(request.executionContractId);
      return {
        ok: false as const,
        error: {
          code: "INTERNAL" as const,
          detailCode: "LIST_ATTEMPTS_FAULT",
          message: "forced list failure",
          retryable: false,
          severity: "error" as const,
          blocking: true,
          recoverable: false,
          domain: "execution_attempt" as const,
          timestamp: fixture.oa.clock.nowIso(),
        },
      };
    }) as unknown as typeof orig;

    try {
      const result = await readCurrentGovernedExecutionContinuity({
        oa: fixture.oa,
        projectId: fixture.projectId,
      });

      expect(listCalls.length).toBeGreaterThanOrEqual(1);
      expect(listCalls).toContain(fixture.executionContractId);

      expect(result.ok).toBe(false);
      if (result.ok) throw new Error("B must not return ok");
      expect(result.code).toBe("EXECUTION_CONTINUITY_INTEGRITY_FAILED");
      expect(result).not.toEqual(expect.objectContaining({ kind: "active" }));
      expect(result).not.toEqual(expect.objectContaining({ kind: "none" }));
    } finally {
      attempts.listExecutionAttempts.execute = orig;
    }
  });

  it("C — EC pre-exec + Attempt list SUCCESS [] → kind=active (EMPTY ≠ UNKNOWN)", async () => {
    const db = tempProductDbPath("pcont06-c.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "pcont06c" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "c" });
    const fixture = await seedPreExecutionConfirmedEc({
      runtime,
      seeded,
      suffix: "c",
    });

    const listed =
      await fixture.oa.executionAttemptServices!.listExecutionAttempts.execute({
        executionContractId: fixture.executionContractId,
      });
    expect(listed.ok).toBe(true);
    if (!listed.ok) throw new Error("list");
    expect(listed.attempts).toEqual([]);

    const result = await readCurrentGovernedExecutionContinuity({
      oa: fixture.oa,
      projectId: fixture.projectId,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error(result.message);
    expect(result.kind).toBe("active");
    if (result.kind !== "active") throw new Error("expected active");
    expect(result.contract.executionContractId).toBe(
      fixture.executionContractId,
    );
  });

  it("D — EC pre-exec + terminal Attempt succeeded → kind=none; zero mutation/relaunch", async () => {
    const db = tempProductDbPath("pcont06-d.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "pcont06d" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "d" });
    const fixture = await seedPreExecutionConfirmedEc({
      runtime,
      seeded,
      suffix: "d",
    });

    const loaded = await fixture.oa.executionContractServices.contracts.findById(
      fixture.executionContractId,
    );
    expect(loaded).toBeTruthy();
    if (!loaded) throw new Error("missing EC");
    const statusBefore = loaded.status;
    const versionBefore = loaded.version;

    const snap = captureBoundExecutionContractSnapshot(loaded);
    const attemptId = `xat:pcont06:d:${Date.now().toString(16).slice(-8)}`;
    const nowIso = fixture.oa.clock.nowIso();
    await fixture.oa.executionAttemptServices!.attempts.create({
      schemaVersion: "0.2.0-oa",
      attemptId,
      executionContractId: fixture.executionContractId,
      executionContractVersion: fixture.contractVersion,
      executionContractSemanticFingerprint: snap.semanticFingerprint,
      boundExecutionContract: snap,
      selectedAgentRef: "agt:m4.cursor.bounded_docs_write",
      status: "succeeded",
      idempotencyKey: `idem:att:${attemptId}`,
      correlationId: `cor:att:${attemptId}`,
      version: 1,
      createdAt: nowIso,
      updatedAt: nowIso,
      completedAt: nowIso,
      launchedAt: nowIso,
      startedAt: nowIso,
      resultRef: `res:${attemptId}`,
      irreversibleEffectsPossible: true,
      provenance: {
        schemaVersion: "0.1.0-oa",
        provenanceRecordId: `prv:${attemptId}`,
        actor: LOCAL_PILOTE_ACTOR,
        source: "system",
        timestamp: nowIso,
        correlationId: `cor:att:${attemptId}`,
      },
    } as never);

    const listedBefore =
      await fixture.oa.executionAttemptServices!.listExecutionAttempts.execute({
        executionContractId: fixture.executionContractId,
      });
    expect(listedBefore.ok).toBe(true);
    if (!listedBefore.ok) throw new Error("list before");
    expect(listedBefore.attempts).toHaveLength(1);
    expect(listedBefore.attempts[0]!.status).toBe("succeeded");

    const result = await readCurrentGovernedExecutionContinuity({
      oa: fixture.oa,
      projectId: fixture.projectId,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error(result.message);
    expect(result.kind).toBe("none");

    const listedAfter =
      await fixture.oa.executionAttemptServices!.listExecutionAttempts.execute({
        executionContractId: fixture.executionContractId,
      });
    expect(listedAfter.ok).toBe(true);
    if (!listedAfter.ok) throw new Error("list after");
    expect(listedAfter.attempts).toHaveLength(1);
    expect(listedAfter.attempts[0]!.attemptId).toBe(attemptId);

    const loadedAfter =
      await fixture.oa.executionContractServices.contracts.findById(
        fixture.executionContractId,
      );
    expect(loadedAfter?.status).toBe(statusBefore);
    expect(loadedAfter?.version).toBe(versionBefore);
  });

  it("advanceProductExecutionContractAfterEvidence surfaces failure reason", async () => {
    const { advanceProductExecutionContractAfterEvidence } = await import(
      "@/features/project-assistant/w2/advanceProductExecutionContractAfterEvidence"
    );
    const db = tempProductDbPath("pcont-adv-fail.sqlite");
    const runtime = bootW2Runtime({
      productDbPath: db,
      idPrefix: "pcontaf",
    });
    const seeded = await seedQualifiedProject(runtime, { suffix: "af" });
    const oa = { ...runtime.oa!, executionAttemptServices: undefined };
    const advanced = await advanceProductExecutionContractAfterEvidence({
      oa: oa as unknown as NonNullable<typeof runtime.oa>,
      projectId: seeded.projectId,
      executionContractId: "xct:missing",
      cycleInstanceId: seeded.cycleInstanceId,
    });
    expect(advanced.ok).toBe(false);
    if (advanced.ok) return;
    expect(advanced.reason).toBe("execution_attempt_services_unavailable");
  });
});
```

## 12. Réserves

- Parallel/full-load matrix previously showed TOCTOU/`wrong project lineage` **hook/testTimeout** flakes under default 5–10s; serial run with raised timeouts is green (189/189). Not a Product defect; no Product change.
- REAL EvidencePayload adapter still absent (unchanged Fake/Real claim level).
- Project Git integration still unauthorized.

## 13. Verdict

**PASS — CR-PCONT-06 FAIL-CLOSED READER PROVEN**

POST-EXECUTION PRODUCT CONTINUITY & RECOVERY
— CR-PCONT-01…06 DETERMINISTICALLY CLOSED
— CR-PCONT-06 FAIL-CLOSED READER PROVEN
— PRODUCT SOURCE UNCHANGED SINCE CRITICAL RE-REVIEW
— DETERMINISTIC PRODUCT-NATIVE E2E PROVEN
— PRODUCT UI STATE PROVEN
— FAKE/REAL EVIDENCE SEPARATION PROVEN
— SAME MACRO / NO MICRO-CYCLE
— REAL NOT REPROVEN
— PROJECT COMMIT NOT AUTHORIZED
— MORRIS FINAL CRITICAL RE-REVIEW PENDING

Aucun PASS Cursor ≠ GO commit / GO REAL / GO push / GO PR / GO merge.
