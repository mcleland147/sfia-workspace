# SFIA STUDIO — PR #493 CR-PR493-R1 PROVENANCE ORACLE CORRECTION
## Review Pack FULL — Cycle 8 Delivery / PR-readiness continuation

- timestamp Europe/Paris: 2026-09-16 23:17:03 CEST
- timestamp UTC: 2026-09-16T21:17:03Z
- cycle: Cycle 8 — Delivery / PR-readiness continuation
- typology: RUN — BOUNDED CORRECTION
- profile: Critical
- Morris GO: “ok go” after ChatGPT Critical Review CHANGES REQUIRED on CR-PR493-R1
- merge: NOT PERFORMED · auto-merge OFF · conditional merge NOT CONSUMABLE until NEW ChatGPT Critical Review PASS on this R1 HEAD

## 1. Git truth
- repo: mcleland147/sfia-workspace
- worktree: /Users/morris/Projects/sfia-studio-product-real-docs-write-wiring
- branch: delivery/sfia-studio-product-real-docs-write-wiring
- prior PR HEAD: de752376ba8d39977e6cf65ba6158ab96ddae818
- R1 HEAD: 61fb41f65ef88419d3d224b401e56129515a5572
- parent: de752376ba8d39977e6cf65ba6158ab96ddae818 (exact)
- origin/main: a8a5dffaa84fe25f792074b93696a74722de8fdf (unchanged)
- merge-base: a8a5dffaa84fe25f792074b93696a74722de8fdf
- PR #493: OPEN · base a8a5dff · head 61fb41f6 · MERGEABLE · CLEAN · auto-merge null
- superseded handoff tip: 36c1de04ff6ccbac4a8a69e049c003420f6013eb

## 2. Blocker CR-PR493-R1
T10 used TestOnlyRealExecutionLaunchPort (boundaryProofMode=cursor_real) but manually overrode deriveAttemptProvenance with boundaryProofMode: "deterministic_fake".

## 3. Remediation
- Modified file (ONLY): projects/sfia-studio/app/__tests__/project-assistant/preM6.realProductWiringAmend.test.ts
- Production/runtime: NONE
- TrajectorySurface test: unchanged in R1
- deriveAttemptProvenance / TestOnlyRealExecutionLaunchPort: UNCHANGED

### Before → after
- Before: manual boundaryProofMode deterministic_fake → BOUNDED_M4_DETERMINISTIC / realExecution false
- After: boundaryProofMode: launchPort.boundaryProofMode → cursor_real / CURSOR_CLI_REAL / realExecution true / realProcessInvoked true
- Env remains SFIA_STUDIO_CURSOR_REAL=0
- Explicit: cursor_real stub metadata ≠ Cursor OS / StudioCursorRealLaunchGateway; cycle Cursor REAL launches = 0

## 4. Local validation (ZERO REAL)
| Check | Result |
|-------|--------|
| focused (amend + wiring + TrajectorySurface + residual) | 84 passed / 4 files |
| typecheck | PASS |
| lint | PASS |
| build | PASS |
| full Vitest | 374 files passed / 17 skipped; 4175 tests passed / 137 skipped |
| modeled-governance | 73 passed / 0 failed |
| git diff --check | PASS |

## 5. Commit / push
- Commit: 61fb41f65ef88419d3d224b401e56129515a5572
- Message: test(sfia-studio): align T10 with composed boundary proof
- Push: normal (no force) to delivery/sfia-studio-product-real-docs-write-wiring
- Remote SHA = R1 HEAD

## 6. New CI (NOT 35148991573)
| Item | Value |
|------|-------|
| Run ID | 35150853828 |
| Head SHA | 61fb41f65ef88419d3d224b401e56129515a5572 |
| Detect SFIA Studio changes | PASS (7s) job 104978499057 |
| Build and validate SFIA Studio | PASS (5m5s) job 104978550235 |
| SFIA Studio Required Gate | PASS (3s) job 104980188076 |
| Overall | success |

## 7. Fake/Real
- Cursor REAL launches: 0
- OpenAI LIVE: 0
- Nora LIVE: 0
- cursor_real in T10 = test stub projection metadata only

## 8. Scope / reserves
- Protected paths unchanged
- B1/B2/P1 preserved
- Reserves unchanged (REAL gateway not executed; boundaryProofMode not schema-persisted; REAL restart future; ReviewBundle restart weaker)
- No architecture/persistence/schema debt

## 9. Forbidden claims
- READY FOR REAL / REAL BOUNDARY PROVEN / E2E REAL
- runtime v3 ADOPTED
- MERGE performed
- Cursor OS process launched

## 10. Exact verdict
**PR #493 CR-PR493-R1 — PASS — COMPOSED BOUNDARY ORACLE ALIGNED — NEW HEAD CI GREEN — READY FOR CHATGPT CRITICAL RE-REVIEW — NO MERGE PERFORMED — ZERO REAL**

## 11. Next gate
CHATGPT CRITICAL RE-REVIEW of R1 HEAD 61fb41f6 + CI 35150853828 + exact T10 diff + base a8a5dff.

## 12. ANTI-STUB
### git show --format=fuller --stat
```
commit 61fb41f65ef88419d3d224b401e56129515a5572
Author:     Morris Cleland <morris@e8616b0d-1fc3-4e2d-92d3-8e626c04ce19.home>
AuthorDate: Wed Sep 16 23:10:11 2026 +0200
Commit:     Morris Cleland <morris@e8616b0d-1fc3-4e2d-92d3-8e626c04ce19.home>
CommitDate: Wed Sep 16 23:10:11 2026 +0200

    test(sfia-studio): align T10 with composed boundary proof

    Co-authored-by: Cursor <cursoragent@cursor.com>

 .../preM6.realProductWiringAmend.test.ts               | 18 ++++++++++--------
 1 file changed, 10 insertions(+), 8 deletions(-)

```

### Full R1 patch
```diff
From 61fb41f65ef88419d3d224b401e56129515a5572 Mon Sep 17 00:00:00 2001
From: Morris Cleland <morris@e8616b0d-1fc3-4e2d-92d3-8e626c04ce19.home>
Date: Wed, 16 Sep 2026 23:10:11 +0200
Subject: [PATCH] test(sfia-studio): align T10 with composed boundary proof

Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/__tests__/project-assistant/preM6.realProductWiringAmend.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/preM6.realProductWiringAmend.test.ts
index d60f1e9e..a985f652 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/preM6.realProductWiringAmend.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/preM6.realProductWiringAmend.test.ts
@@ -556,8 +556,9 @@ describe("Cycle 8 — Pre-M6 REAL product wiring amend", () => {
     expect(loaded).toBeTruthy();
   });

-  it("T10 — PROVENANCE REAL SIMULATED derives from Attempt, not env flag", async () => {
+  it("T10 — cursor_real simulated ACK derives provenance from composed boundary proof, not env flag", async () => {
     const launchPort = new TestOnlyRealExecutionLaunchPort();
+    expect(launchPort.boundaryProofMode).toBe("cursor_real");
     const runtime = createRuntime("t10", {
       launchPort,
       safetyJournal: new MemoryLaunchSafetyJournal(),
@@ -597,20 +598,21 @@ describe("Cycle 8 — Pre-M6 REAL product wiring amend", () => {
     const agent = runtime.oa!.executionAttemptServices.registry.getAgent(
       recorded.attempt.selectedAgentRef,
     );
-    // B1 — provenance from boundaryProofMode, not env / agent alone.
-    // TestOnlyRealExecutionLaunchPort is a simulated ACK (not Cursor OS REAL).
-    // Classify as deterministic Fake proof mode: BOUNDED_M4_DETERMINISTIC.
+    // B1 / CR-PR493-R1 — provenance from the ACTUAL composed launch-port proof
+    // mode (same source as production). TestOnlyRealExecutionLaunchPort declares
+    // cursor_real as a simulated ACK stub; that is projection metadata only —
+    // it does NOT prove Cursor OS / StudioCursorRealLaunchGateway execution.
     const provenance = deriveAttemptProvenance({
       attempt: recorded.attempt,
       agent,
-      boundaryProofMode: "deterministic_fake",
+      boundaryProofMode: launchPort.boundaryProofMode,
     });
     expect(process.env.SFIA_STUDIO_CURSOR_REAL).toBe("0");
-    expect(provenance.mode).toBe("BOUNDED_M4_DETERMINISTIC");
-    expect(provenance.boundaryProofMode).toBe("deterministic_fake");
+    expect(provenance.boundaryProofMode).toBe("cursor_real");
+    expect(provenance.mode).toBe("CURSOR_CLI_REAL");
     expect(provenance.adapterRef).toBe(M4_REAL_GATEWAY_ADAPTER_ID);
     expect(provenance.executionMode).toBe("cursor_cli_real");
-    expect(provenance.realExecution).toBe(false);
+    expect(provenance.realExecution).toBe(true);
     expect(provenance.realProcessInvoked).toBe(true);
     expect(provenance.evidenceId.startsWith("ev:m4-bounded-ro:")).toBe(true);
     if (previousFlag === undefined) {

```
