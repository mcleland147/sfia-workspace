# SFIA STUDIO — PR #493 CI REMEDIATION
## Review Pack FULL — Cycle 8 Delivery / PR-readiness continuation

- timestamp Europe/Paris: 2026-09-16 22:57:51 CEST
- timestamp UTC: 2026-09-16T20:57:51Z
- cycle: Cycle 8 — Delivery / PR-readiness CI remediation continuation
- typology: RUN — BOUNDED CORRECTION
- profile: Critical
- Morris GO exact: PR #493 CI REMEDIATION — ALIGN LEGACY PROVENANCE EXPECTATION + TRAJECTORYSURFACE M3 MOCK — CI-EQUIVALENT/FULL VITEST + TYPECHECK/LINT/BUILD — NEW COMMIT + NORMAL PUSH SAME PR — CI + CHATGPT CRITICAL REVIEW — CONDITIONAL MERGE — ZERO REAL
- merge: NOT PERFORMED · auto-merge OFF · conditional Morris merge reserved pending ChatGPT Critical Review of this remediation HEAD

## 1. Git truth
- repo: mcleland147/sfia-workspace
- worktree: /Users/morris/Projects/sfia-studio-product-real-docs-write-wiring
- branch: delivery/sfia-studio-product-real-docs-write-wiring
- prior PR HEAD: bac28db06fb774ee27d7d2cfe563ebc281312343
- remediation HEAD: de752376ba8d39977e6cf65ba6158ab96ddae818
- parent of remediation commit: bac28db06fb774ee27d7d2cfe563ebc281312343 (exact prior HEAD)
- origin/main: a8a5dffaa84fe25f792074b93696a74722de8fdf (unchanged; no base drift)
- merge-base: a8a5dffaa84fe25f792074b93696a74722de8fdf
- PR #493: OPEN · base main@a8a5dff · head@de752376 · mergeable MERGEABLE · mergeStateStatus CLEAN
- prior failing CI run on bac28db0: 35142962365 (not reused as proof)
- new CI run on de752376: 35148991573

## 2. Sources / CKC / Convergence
- Process + Studio sources consulted; CKC PR-readiness ABSENT → routing/template/OM/guardrails fallback
- Historical docs-write handoff continuity: 213544fb (Critical remediation PASS)
- Build Doctrine VALIDATED · Roadmap VALIDATED · PC CLOSED · runtime v3 NON ADOPTED
- Protected paths unchanged: method/prompts/convergence/PC/framing/workflows

## 3. Original CI failures (run 35142962365 @ bac28db0)
### Failure A — provenance legacy expectation
- File: projects/sfia-studio/app/__tests__/project-assistant/preM6.realProductWiringAmend.test.ts
- Test: T10 — PROVENANCE REAL SIMULATED derives from Attempt, not env flag
- Expected (legacy): provenance.mode === CURSOR_CLI_REAL
- Received: BOUNDED_M4_DETERMINISTIC
- Root cause: B1 provenance requires boundaryProofMode; Fake/simulated ACK is not Cursor REAL from agent/adapter alone

### Failure B — TrajectorySurface resolved-M3 mock
- File: projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
- Test: JOURNEY-INTEGRITY — Proposal-backed PREPARE maps the sealed contract
- Error: missing data-testid=w2-contract + unhandled mock miss projectAssistantPrepareResolvedM3Action
- Root cause: component uses projectAssistantPrepareResolvedM3Action + result.f3.successor; test still mocked projectAssistantPrepareM3Action + prepare-only f3.contract

## 4. Remediation (test-only)
Files modified (exactly 2):
1. preM6.realProductWiringAmend.test.ts
2. trajectorySurface.ui.test.tsx

Production/runtime code modified: NONE

### Provenance before → after
- Before: expect(mode).toBe(CURSOR_CLI_REAL) without boundaryProofMode
- After: pass boundaryProofMode deterministic_fake; expect BOUNDED_M4_DETERMINISTIC; realExecution false; keep contractual M4 adapter/executionMode; realProcessInvoked true when launched

### TrajectorySurface mock before → after
- Before: mock projectAssistantPrepareM3Action; fixture f3.contract (prepare-only)
- After: mock projectAssistantPrepareResolvedM3Action; fixture f3.successor (+ coherent prepare/original stubs); same sealed disclosure fields for UI assertions

## 5. Local validation (ZERO REAL)
Env: SFIA_STUDIO_CURSOR_REAL=0 OPS1_CURSOR_REAL=0 OPS1_CONVERSATION_PROVIDER=fake · OPENAI unset · M3 local authority unset for full suite

| Check | Result |
|-------|--------|
| focused amend + trajectorySurface + wiring + residual | 84 passed (4 files) |
| typecheck | PASS |
| lint | PASS |
| build | PASS |
| npm test (full Vitest) | 374 files passed / 17 skipped; 4175 tests passed / 137 skipped |
| modeled-governance (3 node --test files) | 73 passed / 0 failed |
| git diff --check | PASS |

Note: one intermediate full-suite failure on corrProof05 D/E7 was shell pollution (SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY=1 left from prior wiring harness). Re-run with unset → PASS. Not a Product defect; not modified.

## 6. Commit / push
- Commit: de752376ba8d39977e6cf65ba6158ab96ddae818
- Message: test(sfia-studio): align PR493 CI expectations
- Push: normal git push origin delivery/sfia-studio-product-real-docs-write-wiring (no force)
- Remote branch SHA = remediation HEAD
- Second project commit only (feature + this test remediation); no amend of bac28db0

## 7. New CI (run 35148991573 @ de752376)
| Job | Result |
|-----|--------|
| Detect SFIA Studio changes | PASS (6s) job 104972192151 |
| Build and validate SFIA Studio | PASS (5m13s) job 104972234126 |
| SFIA Studio Required Gate | PASS (3s) job 104973936542 |
| Overall | success |

## 8. Fake/Real
- Deterministic Fake / simulated ACK only
- Cursor REAL launches: 0
- OpenAI LIVE: 0
- Nora LIVE: 0
- != READY FOR REAL · != REAL BOUNDARY PROVEN · != E2E REAL

## 9. Scope / reserves / claims
### Preserved
- B1 Fake/Real provenance honesty
- B2 DecisionBasis no-widening
- P1 SQLite restart proof (untouched)
- Reserves: REAL gateway not executed; boundaryProofMode not schema-persisted; ReviewBundle restart granularity weaker

### Authorized claims
- PR #493 CI remediation PASS on new HEAD
- Required Gate PASS
- Test-only scope; production unchanged

### Forbidden claims
- MERGE executed / auto-merge
- REAL proven
- runtime v3 ADOPTED
- architecture/persistence change

## 10. Exact verdict
**PR #493 CI REMEDIATION — PASS — NEW HEAD CI GREEN — READY FOR CHATGPT CRITICAL REVIEW — NO MERGE PERFORMED — ZERO REAL**

## 11. Next gate
CHATGPT CRITICAL REVIEW of remediation HEAD de752376, exact test diff, CI run 35148991573, Required Gate PASS, base still a8a5dff.
Conditional Morris merge consumable only after that review PASS with no drift.

## 12. ANTI-STUB — remediation commit

### git show --format=fuller --stat
```
commit de752376ba8d39977e6cf65ba6158ab96ddae818
Author:     Morris Cleland <morris@e8616b0d-1fc3-4e2d-92d3-8e626c04ce19.home>
AuthorDate: Wed Sep 16 22:50:48 2026 +0200
Commit:     Morris Cleland <morris@e8616b0d-1fc3-4e2d-92d3-8e626c04ce19.home>
CommitDate: Wed Sep 16 22:50:48 2026 +0200

    test(sfia-studio): align PR493 CI expectations

    Co-authored-by: Cursor <cursoragent@cursor.com>

 .../trajectorySurface.ui.test.tsx                  | 134 +++++++++++++--------
 .../preM6.realProductWiringAmend.test.ts           |   8 +-
 2 files changed, 93 insertions(+), 49 deletions(-)

```

### Full remediation patch
```diff
commit de752376ba8d39977e6cf65ba6158ab96ddae818
Author: Morris Cleland <morris@e8616b0d-1fc3-4e2d-92d3-8e626c04ce19.home>
Date:   Wed Sep 16 22:50:48 2026 +0200

    test(sfia-studio): align PR493 CI expectations

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
index d61444d5..0110360b 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
@@ -46,12 +46,11 @@ const {
 }));

 /**
- * JOURNEY-INTEGRITY Lot A-B — the Proposal-backed PREPARE routes the very same
- * application entrypoint the AP23 application-path proof exercises
- * (productProofJourneyIntegrity.applicationPath.d0.test.ts).
+ * JOURNEY-INTEGRITY Lot A-B — Proposal-backed PREPARE uses the resolved-M3
+ * entrypoint (prepareAndResolve → successor), matching TrajectorySurface.
  */
 vi.mock("@/features/project-assistant/actions", () => ({
-  projectAssistantPrepareM3Action: (...args: unknown[]) =>
+  projectAssistantPrepareResolvedM3Action: (...args: unknown[]) =>
     prepareM3Mock(...args),
 }));

@@ -1230,64 +1229,103 @@ describe("JOURNEY-INTEGRITY — Proposal-backed PREPARE (sealed operation)", ()
     };
   }

+  const sealedSuccessor = {
+    executionContractId: "xct:sealed-docs-write",
+    version: 1,
+    status: "confirmation_required",
+    action: "cursor.docs_write.apply",
+    target: "workspace.isolated.docs_write",
+    scope: "product:artifact-materialization",
+    requiredAuthority: "N3",
+    constraints: ["PRODUCT_GOVERNED", "SEALED_DECISION_BASIS"],
+    stopConditions: ["STOP AVANT EXECUTE"],
+    requiredCapabilities: ["cap:cursor.docs_write"],
+    reversibility: "reversible" as const,
+    semanticFingerprint: "sealed0fingerprint",
+    inspectionDisclosure: {
+      action: "cursor.docs_write.apply",
+      technicalTarget: "workspace.isolated.docs_write",
+      scope: "product:artifact-materialization",
+      targetRepositoryRef: "mcleland147/sfia-workspace",
+      targetPath: "projects/sfia-studio/.sandbox/gestion-de-taches.md",
+      scopeIn: ["projects/sfia-studio/.sandbox/"],
+      scopeOut: ["projects/sfia-studio/app/"],
+      createOrModify: true,
+      noDelete: true,
+      objective: "Matérialiser la note",
+      artifactType: "markdown",
+      artifactBrief: null,
+      contentRequirements: null,
+      validationExpectations: null,
+      expectedOutputs: ["note markdown"],
+      evidenceRequirements: ["evreq:git-working-tree"],
+      requiredAuthority: "N3",
+      requiredCapabilities: ["cap:cursor.docs_write"],
+      constraints: ["PRODUCT_GOVERNED", "SEALED_DECISION_BASIS"],
+      stopConditions: ["STOP AVANT EXECUTE"],
+      reversibility: "reversible" as const,
+      contractVersion: 1,
+      executionContractId: "xct:sealed-docs-write",
+      semanticFingerprint: "sealed0fingerprint",
+      disclosureComplete: true,
+      incompletenessCode: null,
+    },
+  };
+
+  /** Resolved-M3 success shape consumed by TrajectorySurface (`result.f3.successor`). */
   const M3_PREPARED = {
     ok: true,
     status: "ok",
-    mode: "m3_prepare",
+    mode: "m3_resolved_fixture",
     presentation: "unconfirmed",
-    text: "Contrat préparé.",
+    text: "Contrat résolu — confirmation requise.",
     ephemeralNotice: "",
+    project: {
+      projectId: "prj:sealed",
+      name: "sealed",
+      lpsId: "lps:sealed",
+      lpsVersion: 1,
+      doctrineDigest: "digest:sealed",
+      activeCycleInstanceId: null,
+      ckcResolutionRef: null,
+    },
     f3: {
-      turnKind: "f3_m3_prepare",
-      mode: "M3_PREPARE",
+      turnKind: "f3_m3_resolved",
+      mode: "M3_RESOLVED_BOUNDED_DOCS_WRITE",
       decisionId: "dec:sealed-pursue",
       projectId: "prj:sealed",
-      contract: {
-        executionContractId: "xct:sealed-docs-write",
+      prepare: {
+        turnKind: "f3_m3_prepare",
+        mode: "M3_PREPARE",
+        decisionId: "dec:sealed-pursue",
+        projectId: "prj:sealed",
+        contract: { ...sealedSuccessor, status: "draft" },
+        executionPerformed: false,
+        attemptCreated: false,
+        cursorReal: false,
+        executionAllowed: false,
+        disclosures: [],
+      },
+      original: {
+        executionContractId: "xct:sealed-docs-write-prepare",
         version: 1,
-        status: "confirmation_required",
-        action: "cursor.docs_write.apply",
-        target: "workspace.isolated.docs_write",
-        scope: "product:artifact-materialization",
+        status: "draft",
+        action: sealedSuccessor.action,
+        target: sealedSuccessor.target,
+        scope: "decision:dec:sealed-pursue",
         requiredAuthority: "N3",
-        constraints: ["PRODUCT_GOVERNED", "SEALED_DECISION_BASIS"],
-        stopConditions: ["STOP AVANT EXECUTE"],
+        constraints: ["PREPARE_ONLY", "NO_CURSOR_REAL", "NO_ATTEMPT"],
+        stopConditions: ["AUTHORITY_DENIED"],
         requiredCapabilities: ["cap:cursor.docs_write"],
-        reversibility: "reversible",
-        semanticFingerprint: "sealed0fingerprint",
-        inspectionDisclosure: {
-          action: "cursor.docs_write.apply",
-          technicalTarget: "workspace.isolated.docs_write",
-          scope: "product:artifact-materialization",
-          targetRepositoryRef: "mcleland147/sfia-workspace",
-          targetPath: "projects/sfia-studio/.sandbox/gestion-de-taches.md",
-          scopeIn: ["projects/sfia-studio/.sandbox/"],
-          scopeOut: ["projects/sfia-studio/app/"],
-          createOrModify: true,
-          noDelete: true,
-          objective: "Matérialiser la note",
-          artifactType: "markdown",
-          artifactBrief: null,
-          contentRequirements: null,
-          validationExpectations: null,
-          expectedOutputs: ["note markdown"],
-          evidenceRequirements: ["evreq:git-working-tree"],
-          requiredAuthority: "N3",
-          requiredCapabilities: ["cap:cursor.docs_write"],
-          constraints: ["PRODUCT_GOVERNED", "SEALED_DECISION_BASIS"],
-          stopConditions: ["STOP AVANT EXECUTE"],
-          reversibility: "reversible",
-          contractVersion: 1,
-          executionContractId: "xct:sealed-docs-write",
-          semanticFingerprint: "sealed0fingerprint",
-          disclosureComplete: true,
-          incompletenessCode: null,
-        },
+        reversibility: "reversible" as const,
+        semanticFingerprint: "prepare0fingerprint",
       },
+      successor: sealedSuccessor,
+      reusedFromIdempotency: false,
       executionPerformed: false,
       attemptCreated: false,
-      cursorReal: false,
-      executionAllowed: false,
+      confirmationRequired: true,
+      realExecution: false,
       disclosures: [],
     },
   };
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/preM6.realProductWiringAmend.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/preM6.realProductWiringAmend.test.ts
index ea3d6a3c..d60f1e9e 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/preM6.realProductWiringAmend.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/preM6.realProductWiringAmend.test.ts
@@ -597,14 +597,20 @@ describe("Cycle 8 — Pre-M6 REAL product wiring amend", () => {
     const agent = runtime.oa!.executionAttemptServices.registry.getAgent(
       recorded.attempt.selectedAgentRef,
     );
+    // B1 — provenance from boundaryProofMode, not env / agent alone.
+    // TestOnlyRealExecutionLaunchPort is a simulated ACK (not Cursor OS REAL).
+    // Classify as deterministic Fake proof mode: BOUNDED_M4_DETERMINISTIC.
     const provenance = deriveAttemptProvenance({
       attempt: recorded.attempt,
       agent,
+      boundaryProofMode: "deterministic_fake",
     });
     expect(process.env.SFIA_STUDIO_CURSOR_REAL).toBe("0");
-    expect(provenance.mode).toBe("CURSOR_CLI_REAL");
+    expect(provenance.mode).toBe("BOUNDED_M4_DETERMINISTIC");
+    expect(provenance.boundaryProofMode).toBe("deterministic_fake");
     expect(provenance.adapterRef).toBe(M4_REAL_GATEWAY_ADAPTER_ID);
     expect(provenance.executionMode).toBe("cursor_cli_real");
+    expect(provenance.realExecution).toBe(false);
     expect(provenance.realProcessInvoked).toBe(true);
     expect(provenance.evidenceId.startsWith("ev:m4-bounded-ro:")).toBe(true);
     if (previousFlag === undefined) {

```
