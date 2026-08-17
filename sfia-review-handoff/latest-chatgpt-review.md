# SFIA Review Pack — FULL — Cycle 8 micro-correctif R3 async continuation

## 1. Timestamp + timezone

- Timestamp: 2026-08-17 11:25:26 CEST
- Timezone: Europe/Paris

## 2. Cycle identity

- Repo: `mcleland147/sfia-workspace`
- Cycle: 8 — Delivery / implémentation — Pre-M6 REAL Product Wiring Amend
- Typologie: INC — micro-correctif borné
- Profil: Critical
- CKC: aucun CKC Delivery inventé; routing/méthode v2.6 only. CKC is not an execution authorization.

## 3. GO Morris consumed

`GO — MICRO-CORRECTIF CYCLE 8 — R3 ASYNC COMPLETION CONTINUATION — ZERO REAL`

Authorized: local inspection, deterministic test, typecheck/lint/build/vitest, FULL review pack, L3 handoff publish.

Not authorized: OpenAI live, Cursor REAL, project commit/push/PR/merge, DB cleanup, M6, UAT, Final Cycle 9.

## 4. Git Truth PRE

```
timestamp=2026-08-17 11:19:40 CEST
branch=delivery/sfia-studio-pre-m6-ui-option-a
HEAD=0d33478566627a9bf507d5a06323962d349308ee
origin/main=0d33478566627a9bf507d5a06323962d349308ee
origin/sfia/review-handoff=cf61d86eb59ce10428239492367f655efb4684fc
staged=0
candidate=DIRTY expected (Pre-M6 + Cycle 8 R1/R2/R3)
```

No reset / clean / stash / rebase / merge / destructive checkout / project staging.

## 5. Git Truth POST (before handoff publish)

```
branch=delivery/sfia-studio-pre-m6-ui-option-a
HEAD=0d33478566627a9bf507d5a06323962d349308ee
origin/main=0d33478566627a9bf507d5a06323962d349308ee
origin/sfia/review-handoff=cf61d86eb59ce10428239492367f655efb4684fc
staged=0
dirty candidate preserved — no project commit
```

## 6. Sources consulted

Governance:
- projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md
- projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md

Doctrine v3:
- 30-knowledge-context-human-decision-doctrine.md
- 32-living-project-state-and-dynamic-trajectory.md
- 34-agent-capabilities-reversibility-and-execution-governance.md
- 35-artifact-evidence-debt-and-controlled-learning.md

Process:
- method/sfia-fast-track/core/sfia-cycle-routing-guide.md
- method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
- method/sfia-fast-track/core/sfia-rules-and-guardrails.md
- prompts/templates/sfia-cycle-execution-template.md

Parent handoff:
- origin/sfia/review-handoff @ cf61d86eb59ce10428239492367f655efb4684fc
- path: sfia-review-handoff/latest-chatgpt-review.md

Code inspected (no production mutation):
- features/project-assistant/f3/completeBoundedReadOnlyLaunch.ts
- features/project-assistant/f3/executeConfirmedBoundedReadOnlyContract.ts
- features/project-assistant/f3/confirmAndExecuteResolvedM3.ts
- features/project-assistant/f3/ingestEvidenceAndRecommend.ts
- features/project-assistant/f3/rehydrateEvidenceOutcomeFromLps.ts
- __tests__/project-assistant/preM6.realProductWiringResidual.test.ts
- __tests__/oa/execution-attempt/support/testOnlyRealExecutionLaunchPort.ts
- lib/oa/execution-attempt/application/startExecution.ts
- lib/oa/execution-attempt/application/recordExecutionResult.ts
- lib/oa/execution-attempt/infrastructure/nodeCursorProcessRunner.ts
- lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts

## 7. Parent handoff cf61d86

R1 CLOSED (live composition OFF-by-default).
R2 CLOSED (server-side baseHeadSha).
R3 implementation present.
R3 async continuation exit proof was incomplete because T-R3-E2E-SUCCESS used `holdCompletion: false` (observation already terminal in the same call).

## 8. Exact proof gap

T-R3-E2E-SUCCESS proved the continuous chain when completion was already terminal at observe/await time.

It did **not** prove:

StartExecution spawn ACK
→ Attempt running
→ return to product without Evidence
→ later completion
→ second canonical product call
→ SAME running Attempt resumed
→ ZERO relaunch.

## 9. Existing behavior before this micro-pass

`executeConfirmedBoundedReadOnlyContract` already:

1. lists Attempts for the contract;
2. reuses `status === "succeeded" || status === "running"`;
3. calls `finishBoundedAttempt` → `completeBoundedReadOnlyLaunch`;
4. if `observe()` shows pending (`exitCode === null`, not timedOut), returns running without Evidence;
5. on a later call, `observe()` sees the terminal observation and records result without StartExecution / Gate D / Confirmation.

`confirmAndExecuteResolvedM3` already forwards the same projectId / decisionId / executionContractId into that path.

`TestOnlyRealExecutionLaunchPort.resolveSimulatedCompletion()` already existed.

**Conclusion after inspection: production path already sufficient.**

## 10. Nature of this pass

**TEST-ONLY proof.**

R3 IMPLEMENTATION UNCHANGED
ASYNC CONTINUATION CAPABILITY ALREADY PRESENT
EXIT PROOF ADDED

No production micro-fix required.
No worker / queue / scheduler / new store.

## 11. Files touched this pass only

Modified:
- `projects/sfia-studio/app/__tests__/project-assistant/preM6.realProductWiringResidual.test.ts`

Unchanged (hash-verified vs pre-cycle snapshot):
- `completeBoundedReadOnlyLaunch.ts`
- `executeConfirmedBoundedReadOnlyContract.ts`
- `confirmAndExecuteResolvedM3.ts`
- `testOnlyRealExecutionLaunchPort.ts`

Created: none (test added inside existing file).

Review artifacts:
- `.tmp-sfia-review/pre-m6-r3-async-continuation/**`
- `.tmp-sfia-review/chatgpt-review.md`

## 12. T-R3-ASYNC-CONTINUATION — complete added test

```ts
  it("T-R3-ASYNC-CONTINUATION — spawn ACK then later resume SAME running Attempt without relaunch", async () => {
    const provider = new CapturingFakeProvider({
      scripted: ["[TEST/FAKE] Nora post-async-completion simulated analysis"],
    });
    setConversationProviderForTests(provider);
    const launchPort = new TestOnlyRealExecutionLaunchPort({
      holdCompletion: true,
    });
    const journal = new MemoryLaunchSafetyJournal();
    const runtime = createRuntime("r3-async", {
      realBoundary: { launchPort, safetyJournal: journal },
    });
    const seeded = await seedGo(runtime, "r3-async");
    const prepared = await prepareAndResolveM3ProductPath({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      currentContext: seeded.currentContext,
      deps: prepareDeps(runtime, {
        preferBoundedReadOnlyProfile: true,
        gitCommandRunner: new FakeGitCommandRunner({
          baseHeadSha: TEST_BOUNDED_BASE_HEAD_SHA,
        }),
      }),
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;

    const decisionsBefore = await runtime.oa!.decisionServices.listDecisionHistory.execute(
      { projectId: seeded.projectId },
    );
    expect(decisionsBefore.ok).toBe(true);
    if (!decisionsBefore.ok) return;
    const contractsBefore =
      await runtime.oa!.executionContractServices.listExecutionContractHistory.execute(
        { projectId: seeded.projectId },
      );
    expect(contractsBefore.ok).toBe(true);
    if (!contractsBefore.ok) return;

    const first = await confirmAndExecuteResolvedM3({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      executionContractId: prepared.payload.successor.executionContractId,
      expectedContractVersion: prepared.payload.successor.version,
      deps: confirmDeps(runtime),
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;

    expect(first.payload.attempt.status).toBe("running");
    expect(first.payload.contract.status).toBe("executing");
    expect(first.payload.attempt.resultRef).toBeFalsy();
    expect(first.payload.evidence.evidenceId).toBe("ev:pending-real");
    expect(first.payload.reviewBundle.reviewBundleId).toBe("rb:pending-real");
    expect(first.payload.recommendation.analysisStatus).toBe("not_attempted");
    expect(first.payload.recommendation.decisionCreated).toBe(false);
    expect(launchPort.launchCallCount).toBe(1);
    expect(runtime.oa!.fixtureAdapter.launchCallCount).toBe(0);
    expect(provider.completeCalls.length).toBe(0);

    const attemptIdX = first.payload.attempt.attemptId;
    const contractIdY = first.payload.contract.executionContractId;
    expect(contractIdY).toBe(prepared.payload.successor.executionContractId);

    const frontiersAfterAck = await journal.findFrontierByAttempt(attemptIdX);
    expect(frontiersAfterAck.filter((r) => r.kind === "CREATED")).toHaveLength(1);
    expect(frontiersAfterAck.filter((r) => r.kind === "LAUNCHED")).toHaveLength(1);
    const launched = frontiersAfterAck.find((r) => r.kind === "LAUNCHED");
    expect(launched?.processRef).toBeTruthy();
    const processRef = launched!.processRef!;
    expect(processRef.length).toBeGreaterThan(0);

    const attemptsAfterAck =
      await runtime.oa!.executionAttemptServices.listExecutionAttempts.execute({
        executionContractId: contractIdY,
      });
    expect(attemptsAfterAck.ok).toBe(true);
    if (!attemptsAfterAck.ok) return;
    expect(attemptsAfterAck.attempts).toHaveLength(1);
    expect(attemptsAfterAck.attempts[0]?.attemptId).toBe(attemptIdX);

    launchPort.resolveSimulatedCompletion(processRef, {
      exitCode: 0,
      stdout: "SIMULATED_CURSOR_ASYNC_COMPLETION_FOR_NORA",
      stderr: "",
    });

    const second = await confirmAndExecuteResolvedM3({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      executionContractId: contractIdY,
      expectedContractVersion: prepared.payload.successor.version,
      deps: confirmDeps(runtime),
    });
    expect(second.ok).toBe(true);
    if (!second.ok) return;

    expect(second.payload.reusedExistingAttempt).toBe(true);
    expect(second.payload.attempt.attemptId).toBe(attemptIdX);
    expect(second.payload.contract.executionContractId).toBe(contractIdY);
    expect(launchPort.launchCallCount).toBe(1);
    expect(runtime.oa!.fixtureAdapter.launchCallCount).toBe(0);
    expect(second.payload.attempt.status).toBe("succeeded");
    expect(second.payload.attempt.resultRef).toBeTruthy();
    expect(second.payload.contract.status).toBe("completed");
    expect(second.payload.evidence.evidenceId.startsWith("ev:m4-bounded-ro:")).toBe(
      true,
    );
    expect(
      second.payload.reviewBundle.reviewBundleId.startsWith("rb:m4-bounded-ro:"),
    ).toBe(true);
    expect(provider.completeCalls.length).toBe(1);
    const userPayload = provider.completeCalls[0]?.find((m) => m.role === "user")
      ?.content;
    expect(userPayload).toContain("SIMULATED_CURSOR_ASYNC_COMPLETION_FOR_NORA");
    expect(second.payload.recommendation.executionAuthority).toBe(false);
    expect(second.payload.recommendation.decisionCreated).toBe(false);
    expect(second.payload.recommendation.analysisStatus).toBe("available");

    const frontiersAfterResume = await journal.findFrontierByAttempt(attemptIdX);
    expect(frontiersAfterResume.filter((r) => r.kind === "CREATED")).toHaveLength(1);
    expect(frontiersAfterResume.filter((r) => r.kind === "LAUNCHED")).toHaveLength(1);
    expect(frontiersAfterResume.find((r) => r.kind === "LAUNCHED")?.processRef).toBe(
      processRef,
    );

    const attemptsAfterResume =
      await runtime.oa!.executionAttemptServices.listExecutionAttempts.execute({
        executionContractId: contractIdY,
      });
    expect(attemptsAfterResume.ok).toBe(true);
    if (!attemptsAfterResume.ok) return;
    expect(attemptsAfterResume.attempts).toHaveLength(1);
    expect(attemptsAfterResume.attempts[0]?.attemptId).toBe(attemptIdX);

    const decisionsAfter = await runtime.oa!.decisionServices.listDecisionHistory.execute(
      { projectId: seeded.projectId },
    );
    expect(decisionsAfter.ok).toBe(true);
    if (!decisionsAfter.ok) return;
    expect(decisionsAfter.decisions).toHaveLength(decisionsBefore.decisions.length);

    const contractsAfter =
      await runtime.oa!.executionContractServices.listExecutionContractHistory.execute(
        { projectId: seeded.projectId },
      );
    expect(contractsAfter.ok).toBe(true);
    if (!contractsAfter.ok) return;
    expect(contractsAfter.contracts).toHaveLength(contractsBefore.contracts.length);

    const rehydrated = await rehydrateEvidenceOutcomeFromLps({
      projectId: seeded.projectId,
      deps: {
        projectServices: runtime.oa!.projectServices,
        evidenceReviewServices: runtime.oa!.evidenceReviewServices,
      },
    });
    expect(rehydrated.ok).toBe(true);
    if (!rehydrated.ok) return;
    expect(rehydrated.evidence.map((e) => e.evidenceId)).toContain(
      second.payload.evidence.evidenceId,
    );
    expect(rehydrated.reviewBundles.map((b) => b.reviewBundleId)).toContain(
      second.payload.reviewBundle.reviewBundleId,
    );
    expect(rehydrated.recommendation?.analysisText).toContain(
      "Nora post-async-completion",
    );
  });
```

## 13. First call (spawn ACK, completion pending)

Observed in targeted PASS run (IDs are run-specific; invariants are stable):

- ok = true
- Attempt.status = running
- Contract.status = executing
- attemptId example: `xat:m3:m3-res:dec:f2:333a98a3-4cb8-4096-88f8-4cb8bf2af676`
- executionContractId example: `xct:m3-res:dec:f2:333a98a3-4cb8-4096-88f8-4cb8bf2af676`
- launchCallCount = 1
- fixtureAdapter.launchCallCount = 0
- frontiers: 1 CREATED + 1 LAUNCHED
- processRef present on LAUNCHED (`proc:sim:<attemptId>`)
- Evidence = `ev:pending-real` (not m4 terminal)
- ReviewBundle = `rb:pending-real`
- Nora completeCalls = 0
- Attempt count = 1

## 14. Deferred completion

`launchPort.resolveSimulatedCompletion(processRef, { exitCode: 0, stdout: "SIMULATED_CURSOR_ASYNC_COMPLETION_FOR_NORA", stderr: "" })`

No StartExecution. No Cursor spawn. No new Attempt.

## 15. Second canonical product call

Same `confirmAndExecuteResolvedM3` with same projectId / decisionId / executionContractId.

- ok = true
- reusedExistingAttempt = true
- attemptId final === first attemptId
- executionContractId unchanged
- launchCallCount still 1
- fixtureAdapter.launchCallCount still 0
- frontiers still 1 CREATED + 1 LAUNCHED, same processRef
- Attempt.status = succeeded
- resultRef present
- Contract.status = completed
- Evidence id starts with `ev:m4-bounded-ro:`
- ReviewBundle id starts with `rb:m4-bounded-ro:`
- Nora called once AFTER terminalisation
- Nora user payload contains `SIMULATED_CURSOR_ASYNC_COMPLETION_FOR_NORA`
- Recommendation.executionAuthority = false
- Recommendation.decisionCreated = false
- Recommendation.analysisStatus = available
- HumanDecision count unchanged
- ExecutionContract count unchanged
- Attempt count still 1
- rehydrateEvidenceOutcomeFromLps retrieves Evidence / RB / Recommendation

## 16. Double-launch / double-gate proof

Indirect, using existing journal + counts (no new business API):

- launchCallCount remained 1 after second call
- CREATED frontier count remained 1
- LAUNCHED frontier count remained 1
- same processRef
- same Attempt
- same Contract
- reusedExistingAttempt = true (skips Confirmation / Gate D / StartExecution)

## 17. Validation results

Env: `NODE_ENV=test SFIA_STUDIO_CURSOR_REAL= OPS1_CURSOR_REAL= OPS1_CONVERSATION_PROVIDER=fake OPENAI_API_KEY=`

| Suite | Result |
|---|---|
| T-R3-ASYNC-CONTINUATION alone | PASS |
| preM6.realProductWiringResidual.test.ts (12) | PASS |
| residual + regressions (8 files, 75 tests) | PASS |
| Full Vitest | 1808 passed / 131 skipped / 0 failed |
| tsc --noEmit | PASS |
| next lint | PASS |
| next build | PASS |

## 18. ZERO REAL proof

- OpenAI live calls this pass: 0 (`OPS1_CONVERSATION_PROVIDER=fake`, `OPENAI_API_KEY=` in test env, FakeConversationProvider only)
- Cursor REAL / NodeCursorProcessRunner live spawn: 0
- Real runtime git worktree: 0
- `SFIA_STUDIO_CURSOR_REAL` global OFF
- `OPS1_CURSOR_REAL` OFF
- Doubles only: TestOnlyRealExecutionLaunchPort, FakeGitCommandRunner, MemoryLaunchSafetyJournal, temp Product SQLite

This pass did not trigger any live OpenAI call. No claim is made about the operator account as a whole.

## 19. Canonical Product DB mutation this pass

**0.** Tests use `mkdtempSync` Product SQLite only.

Historical C8 pollution in the canonical Product DB remains untouched.

## 20. Reserves

- historical `studio.m4.real_off`
- old C8 Product DB pollution untouched
- FULL REAL PRODUCT LOOP still not proven live
- First REAL still requires a distinct Morris GO + `SFIA_STUDIO_CURSOR_REAL=1`

## 21. Claims

Mandatory maturity:

M1→M5 FUNCTIONAL BACKBONE VALIDATED UNDER DETERMINISTIC QA, WITH SELECTIVE REAL BOUNDARY PROOFS; FULL REAL PRODUCT LOOP NOT YET PROVEN.

Authorized this pass:

PASS — CYCLE 8 R3 ASYNC COMPLETION CONTINUATION PROVEN
SAME RUNNING ATTEMPT RESUMED AFTER DEFERRED COMPLETION
ZERO RELAUNCH
R3 CLOSED UNDER DETERMINISTIC ASYNC FULL-CHAIN PROOF
ZERO REAL EXECUTED
READY FOR NEW FINAL CYCLE 9 DETERMINISTIC QA

R3 IMPLEMENTATION UNCHANGED
ASYNC CONTINUATION CAPABILITY ALREADY PRESENT
EXIT PROOF ADDED

Forbidden:

- REAL PRODUCT VALIDATED
- FULL REAL PRODUCT LOOP PROVEN
- READY FOR REAL
- READY FOR UAT
- PRE-M6 COMPLETE
- G-UX-11 CLOSED
- M6 AUTHORIZED
- runtime v3 ADOPTED

Statuses remain:

- Pre-M6 NON COMPLETE
- G-UX-11 OPEN
- UAT NOT READY
- M6 NON AUTHORIZED
- Runtime v3 NON ADOPTED
- FULL REAL PRODUCT LOOP NOT YET PROVEN
- READY FOR REAL = FALSE

## 22. Verdict

**PASS — CYCLE 8 R3 ASYNC COMPLETION CONTINUATION PROVEN**

SAME RUNNING ATTEMPT RESUMED AFTER DEFERRED COMPLETION
ZERO RELAUNCH
R3 CLOSED UNDER DETERMINISTIC ASYNC FULL-CHAIN PROOF
ZERO REAL EXECUTED
READY FOR NEW FINAL CYCLE 9 DETERMINISTIC QA

R3 IMPLEMENTATION UNCHANGED
ASYNC CONTINUATION CAPABILITY ALREADY PRESENT
EXIT PROOF ADDED

## 23. Next (NOT executed)

NEW FINAL CYCLE 9 — DETERMINISTIC QA

After a future Final Cycle 9 PASS, a DISTINCT Morris GO remains required before FIRST REAL PRODUCT LOOP.

## 24. Cycle-specific PRE→POST diff (complete)

```diff
# Cycle 8 micro-pass R3 async continuation — PRE (handoff cf61d86 local) → POST
# Generated: 2026-08-17 11:24:51 CEST
# Production files unchanged. Test-only delta.

===== DIFF projects/sfia-studio/app/__tests__/project-assistant/preM6.realProductWiringResidual.test.ts =====
--- /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/.tmp-sfia-review/pre-m6-r3-async-continuation/pre-cycle/files/projects/sfia-studio/app/__tests__/project-assistant/preM6.realProductWiringResidual.test.ts	2026-08-17 11:19:40
+++ /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/app/__tests__/project-assistant/preM6.realProductWiringResidual.test.ts	2026-08-17 11:20:00
@@ -642,5 +642,175 @@
       executed.payload.reviewBundle.reviewBundleId,
     );
     expect(rehydrated.recommendation?.analysisText).toContain("Nora post-Cursor");
+  });
+
+  it("T-R3-ASYNC-CONTINUATION — spawn ACK then later resume SAME running Attempt without relaunch", async () => {
+    const provider = new CapturingFakeProvider({
+      scripted: ["[TEST/FAKE] Nora post-async-completion simulated analysis"],
+    });
+    setConversationProviderForTests(provider);
+    const launchPort = new TestOnlyRealExecutionLaunchPort({
+      holdCompletion: true,
+    });
+    const journal = new MemoryLaunchSafetyJournal();
+    const runtime = createRuntime("r3-async", {
+      realBoundary: { launchPort, safetyJournal: journal },
+    });
+    const seeded = await seedGo(runtime, "r3-async");
+    const prepared = await prepareAndResolveM3ProductPath({
+      projectId: seeded.projectId,
+      decisionId: seeded.decisionId,
+      currentContext: seeded.currentContext,
+      deps: prepareDeps(runtime, {
+        preferBoundedReadOnlyProfile: true,
+        gitCommandRunner: new FakeGitCommandRunner({
+          baseHeadSha: TEST_BOUNDED_BASE_HEAD_SHA,
+        }),
+      }),
+    });
+    expect(prepared.ok).toBe(true);
+    if (!prepared.ok) return;
+
+    const decisionsBefore = await runtime.oa!.decisionServices.listDecisionHistory.execute(
+      { projectId: seeded.projectId },
+    );
+    expect(decisionsBefore.ok).toBe(true);
+    if (!decisionsBefore.ok) return;
+    const contractsBefore =
+      await runtime.oa!.executionContractServices.listExecutionContractHistory.execute(
+        { projectId: seeded.projectId },
+      );
+    expect(contractsBefore.ok).toBe(true);
+    if (!contractsBefore.ok) return;
+
+    const first = await confirmAndExecuteResolvedM3({
+      projectId: seeded.projectId,
+      decisionId: seeded.decisionId,
+      executionContractId: prepared.payload.successor.executionContractId,
+      expectedContractVersion: prepared.payload.successor.version,
+      deps: confirmDeps(runtime),
+    });
+    expect(first.ok).toBe(true);
+    if (!first.ok) return;
+
+    expect(first.payload.attempt.status).toBe("running");
+    expect(first.payload.contract.status).toBe("executing");
+    expect(first.payload.attempt.resultRef).toBeFalsy();
+    expect(first.payload.evidence.evidenceId).toBe("ev:pending-real");
+    expect(first.payload.reviewBundle.reviewBundleId).toBe("rb:pending-real");
+    expect(first.payload.recommendation.analysisStatus).toBe("not_attempted");
+    expect(first.payload.recommendation.decisionCreated).toBe(false);
+    expect(launchPort.launchCallCount).toBe(1);
+    expect(runtime.oa!.fixtureAdapter.launchCallCount).toBe(0);
+    expect(provider.completeCalls.length).toBe(0);
+
+    const attemptIdX = first.payload.attempt.attemptId;
+    const contractIdY = first.payload.contract.executionContractId;
+    expect(contractIdY).toBe(prepared.payload.successor.executionContractId);
+
+    const frontiersAfterAck = await journal.findFrontierByAttempt(attemptIdX);
+    expect(frontiersAfterAck.filter((r) => r.kind === "CREATED")).toHaveLength(1);
+    expect(frontiersAfterAck.filter((r) => r.kind === "LAUNCHED")).toHaveLength(1);
+    const launched = frontiersAfterAck.find((r) => r.kind === "LAUNCHED");
+    expect(launched?.processRef).toBeTruthy();
+    const processRef = launched!.processRef!;
+    expect(processRef.length).toBeGreaterThan(0);
+
+    const attemptsAfterAck =
+      await runtime.oa!.executionAttemptServices.listExecutionAttempts.execute({
+        executionContractId: contractIdY,
+      });
+    expect(attemptsAfterAck.ok).toBe(true);
+    if (!attemptsAfterAck.ok) return;
+    expect(attemptsAfterAck.attempts).toHaveLength(1);
+    expect(attemptsAfterAck.attempts[0]?.attemptId).toBe(attemptIdX);
+
+    launchPort.resolveSimulatedCompletion(processRef, {
+      exitCode: 0,
+      stdout: "SIMULATED_CURSOR_ASYNC_COMPLETION_FOR_NORA",
+      stderr: "",
+    });
+
+    const second = await confirmAndExecuteResolvedM3({
+      projectId: seeded.projectId,
+      decisionId: seeded.decisionId,
+      executionContractId: contractIdY,
+      expectedContractVersion: prepared.payload.successor.version,
+      deps: confirmDeps(runtime),
+    });
+    expect(second.ok).toBe(true);
+    if (!second.ok) return;
+
+    expect(second.payload.reusedExistingAttempt).toBe(true);
+    expect(second.payload.attempt.attemptId).toBe(attemptIdX);
+    expect(second.payload.contract.executionContractId).toBe(contractIdY);
+    expect(launchPort.launchCallCount).toBe(1);
+    expect(runtime.oa!.fixtureAdapter.launchCallCount).toBe(0);
+    expect(second.payload.attempt.status).toBe("succeeded");
+    expect(second.payload.attempt.resultRef).toBeTruthy();
+    expect(second.payload.contract.status).toBe("completed");
+    expect(second.payload.evidence.evidenceId.startsWith("ev:m4-bounded-ro:")).toBe(
+      true,
+    );
+    expect(
+      second.payload.reviewBundle.reviewBundleId.startsWith("rb:m4-bounded-ro:"),
+    ).toBe(true);
+    expect(provider.completeCalls.length).toBe(1);
+    const userPayload = provider.completeCalls[0]?.find((m) => m.role === "user")
+      ?.content;
+    expect(userPayload).toContain("SIMULATED_CURSOR_ASYNC_COMPLETION_FOR_NORA");
+    expect(second.payload.recommendation.executionAuthority).toBe(false);
+    expect(second.payload.recommendation.decisionCreated).toBe(false);
+    expect(second.payload.recommendation.analysisStatus).toBe("available");
+
+    const frontiersAfterResume = await journal.findFrontierByAttempt(attemptIdX);
+    expect(frontiersAfterResume.filter((r) => r.kind === "CREATED")).toHaveLength(1);
+    expect(frontiersAfterResume.filter((r) => r.kind === "LAUNCHED")).toHaveLength(1);
+    expect(frontiersAfterResume.find((r) => r.kind === "LAUNCHED")?.processRef).toBe(
+      processRef,
+    );
+
+    const attemptsAfterResume =
+      await runtime.oa!.executionAttemptServices.listExecutionAttempts.execute({
+        executionContractId: contractIdY,
+      });
+    expect(attemptsAfterResume.ok).toBe(true);
+    if (!attemptsAfterResume.ok) return;
+    expect(attemptsAfterResume.attempts).toHaveLength(1);
+    expect(attemptsAfterResume.attempts[0]?.attemptId).toBe(attemptIdX);
+
+    const decisionsAfter = await runtime.oa!.decisionServices.listDecisionHistory.execute(
+      { projectId: seeded.projectId },
+    );
+    expect(decisionsAfter.ok).toBe(true);
+    if (!decisionsAfter.ok) return;
+    expect(decisionsAfter.decisions).toHaveLength(decisionsBefore.decisions.length);
+
+    const contractsAfter =
+      await runtime.oa!.executionContractServices.listExecutionContractHistory.execute(
+        { projectId: seeded.projectId },
+      );
+    expect(contractsAfter.ok).toBe(true);
+    if (!contractsAfter.ok) return;
+    expect(contractsAfter.contracts).toHaveLength(contractsBefore.contracts.length);
+
+    const rehydrated = await rehydrateEvidenceOutcomeFromLps({
+      projectId: seeded.projectId,
+      deps: {
+        projectServices: runtime.oa!.projectServices,
+        evidenceReviewServices: runtime.oa!.evidenceReviewServices,
+      },
+    });
+    expect(rehydrated.ok).toBe(true);
+    if (!rehydrated.ok) return;
+    expect(rehydrated.evidence.map((e) => e.evidenceId)).toContain(
+      second.payload.evidence.evidenceId,
+    );
+    expect(rehydrated.reviewBundles.map((b) => b.reviewBundleId)).toContain(
+      second.payload.reviewBundle.reviewBundleId,
+    );
+    expect(rehydrated.recommendation?.analysisText).toContain(
+      "Nora post-async-completion",
+    );
   });
 });

```
