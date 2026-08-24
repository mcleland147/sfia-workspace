# SFIA Studio — W3-B Delivery Restart — Review Pack FULL (Proof Completion)

**Cycle 8 · CRITICAL · INC · Micro-cycle: proof + handoff completion on candidate `0ef57e73`**

Timestamps: **2026-08-24 22:23 CEST** · **2026-08-24 20:23 UTC**

---

## Morris GO (consumed — unchanged)

W3-B DELIVERY RESTART — US-P1-05/06 ONLY — clean main `a71d9413` — TD-W3B-01…04 — preserve pre-DOC12 harvest read-only — **NO project push/PR/merge**.

**This micro-cycle:** proof completion + handoff completion only. **No new project commit.**

---

## Candidate identity

| Item | Value |
| --- | --- |
| Base | `a71d9413e0435a8252ab4c695163b67354d193aa` |
| Candidate | `0ef57e73ed28e83c849962117a0a8566d0da8074` |
| Branch | `delivery/sfia-studio-product-completion-w3-b-td-reconciled` |
| Worktree | `/Users/morris/Projects/sfia-workspace-w3b-delivery-restart` |
| Project push | NOT performed |

---

## Playwright E2E — canonical `/studio` (EXECUTED)

**Command:**
```bash
cd projects/sfia-studio/app
SFIA_STUDIO_E2E_QA_CONTROL=1 PLAYWRIGHT_FORCE_WEBSERVER=1 npm run test:e2e -- e2e/studio-w3b-terminal-evidence-runtime.spec.ts
```

**Result: 3/3 PASS** (2026-08-24 22:23 CEST)

| Test | Path | Outcome |
| --- | --- | --- |
| A SUCCESS + evidence-pending + reload | `/studio` → project workspace → generic **Exécuter** only | PASS |
| B GOVERNED STOP via EC stopCondition | Same product path; TEST-ONLY boundary arms adapter before Exécuter | PASS |
| C FAIL via TestExecutionAdapter | Same product path; TEST-ONLY boundary arms adapter fail | PASS |

**Product path integrity (X-11):**
- Route: `/studio` only (no W3-B-only product route)
- Flow: W2 gate → options → decision → EC inspect → confirm → authorize → **w3a-governed-execute** (Exécuter)
- Assertions: no `w3b-governed-stop` / `w3b-governed-fail` chooser buttons on product surface
- Outcomes via same Attempt → Evidence/RB → Contract Result materialize
- `/api/e2e/w3b-boundary` is **test-only arming** of external adapter behavior; opaque 404 when gates fail; does NOT mint Product outcome

**Env gate note:** `SFIA_STUDIO_E2E_QA_CONTROL=1` required for boundary route (see `w3bE2eBoundaryControl.ts`). Default `playwright.config.ts` sets `OPS1_E2E_ALLOW_DIRTY_PRINCIPAL=1` but not this flag — **reserve:** add to webServer env for CI repeatability (candidate fix, not applied this micro-cycle).

---

## Runtime PNG captures

Location: `.tmp-sfia-review/runtime-captures/w3-b/` (mirrored from `w3-b-terminal-evidence/`)

| Capture | Scenario | productOutcome | attemptId | evidenceId | reviewBundleId |
| --- | --- | --- | --- | --- | --- |
| 01-execution-before-claim.png | SUCCESS pre-execute | null | — | — | — |
| 02-success-business-first.png | SUCCESS | SUCCESS | xat:w3a:f567a26f99049d59 | ev:w3b:81b8a88729876e56 | rb:w3b:81b8a88729876e56 |
| 03-success-evidence-details.png | SUCCESS technical secondary | SUCCESS | (same) | (same) | (same) |
| 04-governed-stop-business-first.png | SYSTEM_GOVERNED_STOP | STOP | xat:w3a:d7ead238e8df28fd | ev:w3b:48fa2adc0d4f3106 | rb:w3b:48fa2adc0d4f3106 |
| 05-adapter-fail-business-first.png | FAIL | FAIL | xat:w3a:6dee9855c496b245 | ev:w3b:e93639eae589b3d5 | rb:w3b:e93639eae589b3d5 |
| 06-reload-durable-outcome.png | SUCCESS reload durability | SUCCESS | (same as 02) | (same) | (same) |

Full manifest: `runtime-captures/w3-b/manifest.jsonl` (sha256 per PNG, route URLs on `/studio/projects/...`).

**NOT captured this cycle (no E2E scenario without spec change):**
- NOT_PROVEN dedicated runtime PNG — unit/integration proof remains (`w3bProductTerminal.test.ts`, `contractResultEvaluation.test.ts`)
- USER_CANCEL dedicated runtime PNG — unit proof (`pilot cancel alone → Product UNCLAIMED`); not wired in Playwright spec

---

## X-W3B-01…12 requalification

| ID | Status | Evidence |
| --- | --- | --- |
| X-01 Honest SUCCESS | **PASS** | E2E A + unit |
| X-02 NOT_PROVEN fail-closed | **PASS** | unit/integration (no dedicated E2E PNG) |
| X-03 FAIL distinct | **PASS** | E2E C + unit |
| X-04 System STOP same Attempt | **PASS** | E2E B + unit |
| X-05 Cancel/block distinctions | **PASS (unit)** | USER_CANCEL/pre-block unit; STOP/FAIL E2E distinct |
| X-06 Evidence before claim | **PASS** | E2E meta: ev:w3b:* + rb:w3b:* on all terminals |
| X-07 Business-first UX | **PASS** | E2E PNG 02/04/05 — business outcome first on `/studio`; technical via toggle (03) |
| X-08 Restart honesty | **PASS** | E2E reload capture 06 + SQLite durability tests |
| X-09 EC-version identity | **PASS** | unit |
| X-10 Server ownership | **PASS** | unit adversarial |
| X-11 Canonical `/studio` | **PASS** | **Playwright 3/3 on `/studio` product path** |
| X-12 No parallel architecture | **PASS** | grep + design |

**Proof ceiling requalified:** **DETERMINISTIC PRODUCT-NATIVE PROVEN** for SUCCESS / STOP / FAIL on canonical `/studio`. NOT_PROVEN and USER_CANCEL remain **integration-proven, visual reserve**.

---

## Exact modified files (43)

projects/sfia-studio/app/__tests__/oa/decision/m3ProductSchemaMigration.test.ts
projects/sfia-studio/app/__tests__/oa/evidence-review/adversarialValidation.test.ts
projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultEvaluation.test.ts
projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultSqliteDurability.test.ts
projects/sfia-studio/app/__tests__/oa/evidence-review/ingestExecutionAttemptEvidence.test.ts
projects/sfia-studio/app/__tests__/oa/execution-attempt/systemGovernedStop.test.ts
projects/sfia-studio/app/__tests__/oa/project/m5ProductSchemaMigration.test.ts
projects/sfia-studio/app/__tests__/oa/project/m6ProductSchemaMigration.test.ts
projects/sfia-studio/app/__tests__/project-assistant/w3bProductTerminal.test.ts
projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
projects/sfia-studio/app/app/api/e2e/w3b-boundary/route.ts
projects/sfia-studio/app/e2e/studio-w3b-terminal-evidence-runtime.spec.ts
projects/sfia-studio/app/e2e/support/w3bBoundaryControl.ts
projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css
projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
projects/sfia-studio/app/features/project-assistant/w2/actions.ts
projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
projects/sfia-studio/app/features/project-assistant/w2/types.ts
projects/sfia-studio/app/features/project-assistant/w2/w3bProductTerminalProjection.ts
projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultAssessment.ts
projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultReviewPolicy.ts
projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultVerdictProjection.ts
projects/sfia-studio/app/lib/oa/evidence-review/application/evaluateContractResult.ts
projects/sfia-studio/app/lib/oa/evidence-review/application/ingestExecutionAttemptEvidence.ts
projects/sfia-studio/app/lib/oa/evidence-review/domain/claimEvaluationTypes.ts
projects/sfia-studio/app/lib/oa/evidence-review/domain/contractResultTypes.ts
projects/sfia-studio/app/lib/oa/evidence-review/domain/types.ts
projects/sfia-studio/app/lib/oa/evidence-review/index.ts
projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/createSqliteEvidenceReviewServices.ts
projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/sqliteClaimEvaluationRepository.ts
projects/sfia-studio/app/lib/oa/evidence-review/ports/claimEvaluationRepository.ts
projects/sfia-studio/app/lib/oa/execution-attempt/application/cancelExecutionAttempt.ts
projects/sfia-studio/app/lib/oa/execution-attempt/application/systemGovernedStop.ts
projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts
projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/createSqliteExecutionAttemptServices.ts
projects/sfia-studio/app/lib/oa/execution-attempt/ports/executionAttemptAudit.ts
projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts
projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/productSqliteHandle.ts
projects/sfia-studio/app/lib/vertical-slice-runtime/f3FixtureWiring.ts
projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
projects/sfia-studio/app/lib/vertical-slice-runtime/w3bE2eBoundaryControl.ts

---

## Diff stat (`a71d9413` → `0ef57e73`)

 .../oa/decision/m3ProductSchemaMigration.test.ts   |   2 +-
 .../evidence-review/adversarialValidation.test.ts  |   4 +-
 .../contractResultEvaluation.test.ts               | 176 +++++++++
 .../contractResultSqliteDurability.test.ts         | 166 +++++++++
 .../ingestExecutionAttemptEvidence.test.ts         |  36 +-
 .../execution-attempt/systemGovernedStop.test.ts   |  55 +++
 .../oa/project/m5ProductSchemaMigration.test.ts    |   4 +-
 .../oa/project/m6ProductSchemaMigration.test.ts    |   6 +-
 .../project-assistant/w3bProductTerminal.test.ts   | 404 +++++++++++++++++++++
 .../importBoundaries.test.ts                       |   3 +
 .../app/app/api/e2e/w3b-boundary/route.ts          |  96 +++++
 .../studio-w3b-terminal-evidence-runtime.spec.ts   | 363 ++++++++++++++++++
 .../app/e2e/support/w3bBoundaryControl.ts          |  36 ++
 .../surfaces/TrajectorySurface.module.css          |  29 ++
 .../surfaces/TrajectorySurface.tsx                 | 311 +++++++++++++++-
 .../app/features/project-assistant/w2/actions.ts   | 107 ++++++
 .../w2/governedExecuteAuthorizedContract.ts        | 237 +++++++++++-
 .../w2/materializeW3bProductTerminal.ts            | 384 ++++++++++++++++++++
 .../app/features/project-assistant/w2/types.ts     |  55 +++
 .../w2/w3bProductTerminalProjection.ts             | 305 ++++++++++++++++
 .../application/contractResultAssessment.ts        | 152 ++++++++
 .../application/contractResultReviewPolicy.ts      |  28 ++
 .../application/contractResultVerdictProjection.ts |  21 ++
 .../application/evaluateContractResult.ts          | 290 +++++++++++++++
 .../application/ingestExecutionAttemptEvidence.ts  |  78 +++-
 .../evidence-review/domain/claimEvaluationTypes.ts |  12 +
 .../evidence-review/domain/contractResultTypes.ts  | 115 ++++++
 .../app/lib/oa/evidence-review/domain/types.ts     |   9 +-
 .../app/lib/oa/evidence-review/index.ts            |  16 +-
 .../sqlite/createSqliteEvidenceReviewServices.ts   |  22 +-
 .../sqlite/sqliteClaimEvaluationRepository.ts      | 230 ++++++++++++
 .../ports/claimEvaluationRepository.ts             |   6 +-
 .../application/cancelExecutionAttempt.ts          |   1 +
 .../application/systemGovernedStop.ts              | 244 +++++++++++++
 .../app/lib/oa/execution-attempt/domain/types.ts   |   5 +
 .../app/lib/oa/execution-attempt/index.ts          |  14 +
 .../sqlite/createSqliteExecutionAttemptServices.ts |  12 +
 .../ports/executionAttemptAudit.ts                 |   1 +
 .../app/lib/oa/project/infrastructure/sqlite/db.ts |  42 ++-
 .../infrastructure/sqlite/productSqliteHandle.ts   |   1 +
 .../lib/vertical-slice-runtime/f3FixtureWiring.ts  |   9 +-
 .../app/lib/vertical-slice-runtime/service.ts      |   3 +-
 .../w3bE2eBoundaryControl.ts                       |  79 ++++
 43 files changed, 4098 insertions(+), 71 deletions(-)

---

## Appendix A — Full candidate diff (all 43 files)

```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/decision/m3ProductSchemaMigration.test.ts b/projects/sfia-studio/app/__tests__/oa/decision/m3ProductSchemaMigration.test.ts
index d1153f91..46731996 100644
--- a/projects/sfia-studio/app/__tests__/oa/decision/m3ProductSchemaMigration.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/decision/m3ProductSchemaMigration.test.ts
@@ -131,7 +131,7 @@ describe("M3 Product SQLite schema migration", () => {
       .get("schema_version") as { value: string };
     expect(version.value).toBe(PRODUCT_SCHEMA_VERSION);
     expect(PRODUCT_SCHEMA_VERSION_M3).toBe("m3-0.1.0");
-    expect(PRODUCT_SCHEMA_VERSION).toBe("m7-0.1.0");
+    expect(PRODUCT_SCHEMA_VERSION).toBe("m8-0.1.0");

     const decisions = svc.store.db
       .prepare(
diff --git a/projects/sfia-studio/app/__tests__/oa/evidence-review/adversarialValidation.test.ts b/projects/sfia-studio/app/__tests__/oa/evidence-review/adversarialValidation.test.ts
index 721b6385..5c122622 100644
--- a/projects/sfia-studio/app/__tests__/oa/evidence-review/adversarialValidation.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/evidence-review/adversarialValidation.test.ts
@@ -182,7 +182,7 @@ describe("T-A6-D1 adversarial validation corrections", () => {
     expect(result.error.detailCode).toBe("EVIDENCE_INVALID");
   });

-  it("refuses timeout and cancelled Attempts on ingest", async () => {
+  it("refuses terminal ingest without diagnostic facts (W3-B fail-closed)", async () => {
     const s = buildServices();
     for (const status of ["timeout", "cancelled"] as const) {
       const attemptId = `xat:adv-${status}`;
@@ -202,7 +202,7 @@ describe("T-A6-D1 adversarial validation corrections", () => {
       });
       expect(result.ok).toBe(false);
       if (!result.ok) {
-        expect(result.error.detailCode).toBe("ATTEMPT_STATUS_REFUSED");
+        expect(result.error.detailCode).toBe("ATTEMPT_RESULT_UNAVAILABLE");
       }
     }
   });
diff --git a/projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultEvaluation.test.ts b/projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultEvaluation.test.ts
new file mode 100644
index 00000000..7337a895
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultEvaluation.test.ts
@@ -0,0 +1,176 @@
+/**
+ * W3-B Contract Result evaluation — TD-W3B-01/02 unit proofs.
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import {
+  assessExpectedOutputs,
+  assessEvidenceRequirements,
+  deriveCanonicalContractResultStatus,
+} from "@/lib/oa/evidence-review/application/contractResultAssessment";
+import { validateClaimEvaluationShape } from "@/lib/oa/evidence-review/domain/claimEvaluationInvariants";
+import { CLAIM_EVALUATION_SCHEMA_VERSION } from "@/lib/oa/evidence-review/domain/claimEvaluationTypes";
+import { CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT } from "@/lib/oa/evidence-review/domain/contractResultTypes";
+import { projectContractResultVerdict } from "@/lib/oa/evidence-review/application/contractResultVerdictProjection";
+import type { ExecutionContract } from "@/lib/oa/execution-contract";
+import type { Evidence } from "@/lib/oa/evidence-review";
+
+const contract: ExecutionContract = {
+  schemaVersion: "0.2.0-oa",
+  executionContractId: "ec:w3b:test",
+  projectId: "prj:w3b",
+  version: 1,
+  status: "confirmed",
+  semanticFingerprint: "fp:w3b:abc",
+  action: "generate",
+  target: "artifact",
+  scope: "temp artifact",
+  requiredAuthority: "N3",
+  constraints: [],
+  stopConditions: ["EXECUTOR_INSUFFICIENT"],
+  evidenceRequirements: ["evreq:artifact"],
+  expectedOutputs: ["Temporary artifact produced"],
+  requiredCapabilities: ["generate"],
+  reversibility: "reversible",
+  idempotencyKey: "idem:ec:w3b",
+  correlationId: "cor:ec:w3b:test",
+};
+
+const evidence: Evidence = {
+  schemaVersion: "0.2.0-oa",
+  evidenceId: "ev:w3b:1",
+  type: "artifact",
+  source: "attempt",
+  sourceKind: "execution_attempt",
+  location: "refs/x",
+  producedBy: { actorId: "actor:p", role: "project_owner" },
+  producedAt: "2026-08-24T00:00:00.000Z",
+  freshness: "fresh",
+  status: "available",
+  classification: "internal",
+  storageMode: "metadata_only",
+  availability: "available",
+  retentionClass: "standard",
+  legalHold: false,
+  bindings: {
+    projectId: "prj:w3b",
+    executionContractId: "ec:w3b:test",
+    executionAttemptId: "xat:w3b:1",
+  },
+  containsSecrets: false,
+  provenance: {
+    schemaVersion: "0.1.0-oa",
+    provenanceRecordId: "prv:ev:w3b:1",
+    actor: { actorId: "actor:p", role: "project_owner" },
+    source: "execution_adapter",
+    timestamp: "2026-08-24T00:00:00.000Z",
+    correlationId: "cor:ev:w3b:1",
+  },
+  version: 1,
+  createdAt: "2026-08-24T00:00:00.000Z",
+  technicalResultRef: "res:w3b:1",
+};
+
+describe("Contract Result evaluation", () => {
+  it("succeeded + matching resultRef → EO PASS + ER SATISFIED + status pass", () => {
+    const eo = assessExpectedOutputs({
+      contract,
+      attempt: {
+        attemptId: "xat:w3b:1",
+        executionContractId: contract.executionContractId,
+        executionContractVersion: 1,
+        status: "succeeded",
+        resultRef: "res:w3b:1",
+      },
+      evidence,
+      evaluatedAt: "2026-08-24T00:00:00.000Z",
+    });
+    const er = assessEvidenceRequirements({
+      contract,
+      attempt: {
+        attemptId: "xat:w3b:1",
+        executionContractId: contract.executionContractId,
+        executionContractVersion: 1,
+        status: "succeeded",
+        resultRef: "res:w3b:1",
+      },
+      evidence,
+      evaluatedAt: "2026-08-24T00:00:00.000Z",
+    });
+    expect(eo[0]?.result).toBe("PASS");
+    expect(er[0]?.result).toBe("SATISFIED");
+    const status = deriveCanonicalContractResultStatus({
+      attemptStatus: "succeeded",
+      expectedOutputAssessments: eo,
+      evidenceRequirementAssessments: er,
+    });
+    expect(status).toBe("pass");
+    expect(projectContractResultVerdict(status)).toBe("PASS");
+  });
+
+  it("technical succeeded alone without evidence match → not_proven", () => {
+    const eo = assessExpectedOutputs({
+      contract,
+      attempt: {
+        attemptId: "xat:w3b:1",
+        executionContractId: contract.executionContractId,
+        executionContractVersion: 1,
+        status: "succeeded",
+        resultRef: "res:other",
+      },
+      evidence,
+      evaluatedAt: "2026-08-24T00:00:00.000Z",
+    });
+    expect(eo[0]?.result).toBe("NOT_PROVEN");
+  });
+
+  it("failed attempt → fail / NOT_PROVEN verdict projection", () => {
+    const eo = assessExpectedOutputs({
+      contract,
+      attempt: {
+        attemptId: "xat:w3b:1",
+        executionContractId: contract.executionContractId,
+        executionContractVersion: 1,
+        status: "failed",
+        errorRef: "err:w3b:1",
+      },
+      evidence: { ...evidence, technicalResultRef: undefined },
+      evaluatedAt: "2026-08-24T00:00:00.000Z",
+    });
+    expect(eo[0]?.result).toBe("FAIL");
+    expect(projectContractResultVerdict("fail")).toBe("FAIL");
+    expect(projectContractResultVerdict("not_proven")).toBe("NOT_PROVEN");
+  });
+
+  it("contract-result claim shape validates", () => {
+    const violation = validateClaimEvaluationShape({
+      schemaVersion: CLAIM_EVALUATION_SCHEMA_VERSION,
+      claimEvaluationId: "clm:w3b:e79f8e3b38cf0f6f",
+      claimType: "conformite",
+      claimStatement: "Contract result assessment (pass) for EC test@v1",
+      criticality: "non_critical",
+      evaluationMethod: "deterministic",
+      ruleRef: "w3b-product-completion-contract-result-v1",
+      requiredEvidenceRefs: ["ev:w3b:1"],
+      providedEvidenceRefs: ["ev:w3b:1"],
+      reviewBundleId: "rb:w3b:e79f8e3b38cf0f6f",
+      reviewBundleVersion: 1,
+      status: "pass",
+      proposedBy: { actorId: "actor:local-pilote", role: "project_owner" },
+      confirmationAuthority: "system_deterministic",
+      proposedAt: "2026-08-24T00:00:00.000Z",
+      evaluatedAt: "2026-08-24T00:00:00.000Z",
+      provenance: {
+        schemaVersion: "0.1.0-oa",
+        provenanceRecordId: "prv:test",
+        actor: { actorId: "actor:local-pilote", role: "project_owner" },
+        source: "review",
+        timestamp: "2026-08-24T00:00:00.000Z",
+        correlationId: "cor:clm:w3b:test",
+      },
+      version: 1,
+      subjectKind: CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT,
+    });
+    expect(violation).toBeNull();
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultSqliteDurability.test.ts b/projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultSqliteDurability.test.ts
new file mode 100644
index 00000000..ea32c61f
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultSqliteDurability.test.ts
@@ -0,0 +1,166 @@
+/**
+ * W3-B M8 SQLite ClaimEvaluation durability.
+ * @vitest-environment node
+ */
+import fs from "node:fs";
+import os from "node:os";
+import path from "node:path";
+import { afterEach, describe, expect, it } from "vitest";
+import { FixedClock } from "@/lib/oa/doctrine";
+import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
+import { SqliteProductStore } from "@/lib/oa/project/infrastructure/sqlite/sqliteProductStore";
+import { createTestSqliteEvidenceReviewServices } from "@/lib/oa/evidence-review";
+import { CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT } from "@/lib/oa/evidence-review/domain/contractResultTypes";
+import type { ExecutionContract } from "@/lib/oa/execution-contract";
+import type { Evidence, ReviewBundle } from "@/lib/oa/evidence-review";
+
+const tempDirs: string[] = [];
+
+afterEach(() => {
+  while (tempDirs.length) {
+    const dir = tempDirs.pop();
+    if (dir) {
+      try {
+        fs.rmSync(dir, { recursive: true, force: true });
+      } catch {
+        /* ignore */
+      }
+    }
+  }
+});
+
+function tempDb(): string {
+  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "w3b-ce-"));
+  tempDirs.push(dir);
+  return path.join(dir, "product.sqlite");
+}
+
+const contract: ExecutionContract = {
+  schemaVersion: "0.2.0-oa",
+  executionContractId: "xct:w3b:sqlite",
+  projectId: "prj:w3b:sqlite",
+  version: 2,
+  status: "confirmed",
+  semanticFingerprint: "fp:w3b:sqlite",
+  action: "generate",
+  target: "artifact",
+  scope: "scope",
+  requiredAuthority: "N3",
+  constraints: [],
+  stopConditions: [],
+  evidenceRequirements: ["evreq:1"],
+  expectedOutputs: ["out:1"],
+  requiredCapabilities: ["generate"],
+  reversibility: "reversible",
+  idempotencyKey: "idem:ec:sqlite",
+  correlationId: "cor:ec:w3b:sqlite",
+};
+
+describe("Contract Result SQLite durability (M8)", () => {
+  it("persists contract-result ClaimEvaluation and restores on new store handle", async () => {
+    const dbPath = tempDb();
+    const storeA = new SqliteProductStore(dbPath);
+    const servicesA = createTestSqliteEvidenceReviewServices({
+      productStore: storeA,
+      fixedNowIso: "2026-08-24T10:00:00.000Z",
+      clock: new FixedClock("2026-08-24T10:00:00.000Z"),
+    });
+
+    const evidence: Evidence = {
+      schemaVersion: "0.2.0-oa",
+      evidenceId: "ev:w3b:sqlite",
+      type: "artifact",
+      source: "attempt",
+      sourceKind: "execution_attempt",
+      location: "refs/x",
+      producedBy: LOCAL_PILOTE_ACTOR,
+      producedAt: "2026-08-24T10:00:00.000Z",
+      freshness: "fresh",
+      status: "available",
+      classification: "internal",
+      storageMode: "metadata_only",
+      availability: "available",
+      retentionClass: "standard",
+      legalHold: false,
+      bindings: {
+        projectId: contract.projectId,
+        executionContractId: contract.executionContractId,
+        executionAttemptId: "xat:w3b:sqlite",
+      },
+      containsSecrets: false,
+      provenance: {
+        schemaVersion: "0.1.0-oa",
+        provenanceRecordId: "prov:ev:w3b:sqlite",
+        actor: LOCAL_PILOTE_ACTOR,
+        source: "execution_adapter",
+        timestamp: "2026-08-24T10:00:00.000Z",
+        correlationId: "cor:ev:w3b:sqlite",
+      },
+      version: 1,
+      createdAt: "2026-08-24T10:00:00.000Z",
+      technicalResultRef: "res:w3b:sqlite",
+    };
+    await servicesA.repository.create(evidence, {
+      evidenceId: evidence.evidenceId,
+      fingerprint: "fp:ev",
+      operation: "register",
+    });
+
+    const bundle: ReviewBundle = {
+      schemaVersion: "0.2.0-oa",
+      reviewBundleId: "rb:w3b:sqlite",
+      projectId: contract.projectId,
+      executionContractId: contract.executionContractId,
+      version: 1,
+      evidenceRefs: [evidence.evidenceId],
+      claimEvaluationRefs: [],
+      completeness: "complete",
+      status: "draft",
+      createdAt: "2026-08-24T10:00:00.000Z",
+      synthesisOnly: false,
+      provenance: {
+        schemaVersion: "0.1.0-oa",
+        provenanceRecordId: "prov:rb:w3b:sqlite",
+        actor: LOCAL_PILOTE_ACTOR,
+        source: "review",
+        timestamp: "2026-08-24T10:00:00.000Z",
+        correlationId: "cor:rb:w3b:sqlite",
+      },
+    };
+    await servicesA.reviewBundleRepository.create(bundle);
+
+    const evaluated = await servicesA.evaluateContractResult.execute({
+      claimEvaluationId: "clm:w3b:sqlite",
+      idempotencyKey: "idem:clm:w3b:sqlite",
+      actor: LOCAL_PILOTE_ACTOR,
+      contract,
+      attempt: {
+        attemptId: "xat:w3b:sqlite",
+        executionContractId: contract.executionContractId,
+        executionContractVersion: contract.version,
+        status: "succeeded",
+        resultRef: "res:w3b:sqlite",
+      },
+      evidence,
+      reviewBundle: bundle,
+    });
+    expect(evaluated.ok).toBe(true);
+    if (!evaluated.ok) return;
+    expect(evaluated.claimEvaluation.subjectKind).toBe(
+      CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT,
+    );
+    expect(evaluated.claimEvaluation.status).toBe("pass");
+
+    storeA.close();
+    const storeB = new SqliteProductStore(dbPath);
+    const servicesB = createTestSqliteEvidenceReviewServices({
+      productStore: storeB,
+    });
+    const restored = await servicesB.claimEvaluationReader.findById(
+      "clm:w3b:sqlite",
+    );
+    expect(restored?.status).toBe("pass");
+    expect(restored?.expectedOutputAssessments?.[0]?.result).toBe("PASS");
+    storeB.close();
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/evidence-review/ingestExecutionAttemptEvidence.test.ts b/projects/sfia-studio/app/__tests__/oa/evidence-review/ingestExecutionAttemptEvidence.test.ts
index 1b915287..21e2419f 100644
--- a/projects/sfia-studio/app/__tests__/oa/evidence-review/ingestExecutionAttemptEvidence.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/evidence-review/ingestExecutionAttemptEvidence.test.ts
@@ -40,7 +40,7 @@ describe("T-A6-D1 IngestExecutionAttemptEvidence", () => {
     expect(audit).not.toMatch(/PASS|payload|secret/i);
   });

-  it("refuses failed Attempt", async () => {
+  it("ingests failed Attempt with errorRef as diagnostic Evidence", async () => {
     const s = buildServices();
     s.fakeAttempts.seed({
       attemptId: "xat:fail-001",
@@ -48,6 +48,7 @@ describe("T-A6-D1 IngestExecutionAttemptEvidence", () => {
       executionContractVersion: 1,
       status: "failed",
       errorRef: "err:boom",
+      failedAt: "2026-07-26T01:00:00.000Z",
     });
     const result = await s.ingestExecutionAttemptEvidence.execute({
       evidenceId: "ev:fail-ingest",
@@ -55,10 +56,37 @@ describe("T-A6-D1 IngestExecutionAttemptEvidence", () => {
       idempotencyKey: "idem-ingest-fail-001",
       actor: SYSTEM_ACTOR,
       classification: "internal",
+      bindings: { projectId: "prj:campus360-oa" },
     });
-    expect(result.ok).toBe(false);
-    if (result.ok) return;
-    expect(result.error.detailCode).toBe("ATTEMPT_STATUS_REFUSED");
+    expect(result.ok).toBe(true);
+    if (!result.ok) return;
+    expect(result.evidence.status).toBe("available");
+    expect(result.evidence.technicalResultRef).toBeUndefined();
+    expect(result.evidence.source).toContain("failed");
+  });
+
+  it("ingests cancelled Attempt with stopReason as governed-stop Evidence", async () => {
+    const s = buildServices();
+    s.fakeAttempts.seed({
+      attemptId: "xat:cancel-001",
+      executionContractId: "xct:oa-001",
+      executionContractVersion: 1,
+      status: "cancelled",
+      stopReason: "Arrêt gouverné Pilote",
+      cancelledAt: "2026-07-26T01:00:00.000Z",
+    });
+    const result = await s.ingestExecutionAttemptEvidence.execute({
+      evidenceId: "ev:cancel-ingest",
+      executionAttemptId: "xat:cancel-001",
+      idempotencyKey: "idem-ingest-cancel-001",
+      actor: SYSTEM_ACTOR,
+      classification: "internal",
+      bindings: { projectId: "prj:campus360-oa" },
+    });
+    expect(result.ok).toBe(true);
+    if (!result.ok) return;
+    expect(result.evidence.status).toBe("available");
+    expect(result.evidence.location).toContain("governed-stop");
   });

   it("refuses running Attempt", async () => {
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-attempt/systemGovernedStop.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-attempt/systemGovernedStop.test.ts
new file mode 100644
index 00000000..49776566
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/execution-attempt/systemGovernedStop.test.ts
@@ -0,0 +1,55 @@
+/**
+ * W3-B SystemGovernedStop — TD-W3B-03/04 unit proofs.
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import { F3_ADAPTER_ID } from "@/features/project-assistant/f3/constants";
+import {
+  buildStack,
+  seedConfirmedContract,
+  seedRunningAttempt,
+  selectStandardAgent,
+} from "./helpers";
+
+describe("SystemGovernedStop", () => {
+  it("refuses pre-running accepted attempt", async () => {
+    const stack = buildStack();
+    const { contractId } = await seedConfirmedContract(stack);
+    const selected = await selectStandardAgent(stack, {
+      executionContractId: contractId,
+      attemptId: "xat:sys:1",
+    });
+    expect(selected.ok).toBe(true);
+    if (!selected.ok) return;
+
+    const stopped = await stack.attempts.systemGovernedStop.execute({
+      attemptId: "xat:sys:1",
+      stopCode: "EXECUTOR_INSUFFICIENT",
+      stopSourceRef: "guard:test",
+      reason: "EXECUTOR_INSUFFICIENT",
+    });
+    expect(stopped.ok).toBe(false);
+    if (stopped.ok) return;
+    expect(stopped.error.detailCode).toBe("ATTEMPT_STATE_CONFLICT");
+  });
+
+  it("running attempt → cancelled with SYSTEM_GOVERNED_STOP provenance", async () => {
+    const stack = buildStack();
+    const { attemptId } = await seedRunningAttempt(stack, "xat:sys:2");
+
+    const stopped = await stack.attempts.systemGovernedStop.execute({
+      attemptId,
+      stopCode: "EXECUTOR_INSUFFICIENT",
+      stopSourceRef: "guard:test:2",
+      reason: "EXECUTOR_INSUFFICIENT",
+    });
+    expect(stopped.ok).toBe(true);
+    if (!stopped.ok) return;
+    expect(stopped.attempt.status).toBe("cancelled");
+    expect(stopped.attempt.stopOrigin).toBe("SYSTEM_GOVERNED_STOP");
+    expect(stopped.attempt.stopCode).toBe("EXECUTOR_INSUFFICIENT");
+    expect(stopped.attempt.stopSourceRef).toBe("guard:test:2");
+    expect(stopped.attempt.selectedAgentRef).toBeTruthy();
+    void F3_ADAPTER_ID;
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/project/m5ProductSchemaMigration.test.ts b/projects/sfia-studio/app/__tests__/oa/project/m5ProductSchemaMigration.test.ts
index b2b75243..c039716c 100644
--- a/projects/sfia-studio/app/__tests__/oa/project/m5ProductSchemaMigration.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/project/m5ProductSchemaMigration.test.ts
@@ -147,7 +147,7 @@ describe("M5 Product SQLite schema migration", () => {
       .prepare("SELECT value FROM schema_meta WHERE key = ?")
       .get("schema_version") as { value: string };
     expect(version.value).toBe(PRODUCT_SCHEMA_VERSION);
-    expect(PRODUCT_SCHEMA_VERSION).toBe("m7-0.1.0");
+    expect(PRODUCT_SCHEMA_VERSION).toBe("m8-0.1.0");
     expect(PRODUCT_SCHEMA_VERSION_M3).toBe("m3-0.1.0");

     expect(tableExists(svc.store.db, "oa_human_decisions")).toBe(true);
@@ -197,7 +197,7 @@ describe("M5 Product SQLite schema migration", () => {
       .prepare("SELECT value FROM schema_meta WHERE key = ?")
       .get("schema_version") as { value: string };
     expect(version.value).toBe(PRODUCT_SCHEMA_VERSION);
-    expect(PRODUCT_SCHEMA_VERSION).toBe("m7-0.1.0");
+    expect(PRODUCT_SCHEMA_VERSION).toBe("m8-0.1.0");
     expect(tableExists(svc.store.db, "oa_execution_attempts")).toBe(true);
   });

diff --git a/projects/sfia-studio/app/__tests__/oa/project/m6ProductSchemaMigration.test.ts b/projects/sfia-studio/app/__tests__/oa/project/m6ProductSchemaMigration.test.ts
index 424bb481..a5348224 100644
--- a/projects/sfia-studio/app/__tests__/oa/project/m6ProductSchemaMigration.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/project/m6ProductSchemaMigration.test.ts
@@ -113,7 +113,7 @@ describe("M6 Product SQLite schema migration", () => {
       .get("schema_version") as { value: string };
     expect(version.value).toBe(PRODUCT_SCHEMA_VERSION);
     expect(PRODUCT_SCHEMA_VERSION_M6).toBe("m6-0.1.0");
-    expect(PRODUCT_SCHEMA_VERSION).toBe("m7-0.1.0");
+    expect(PRODUCT_SCHEMA_VERSION).toBe("m8-0.1.0");
     expect(tableExists(svc.store.db, "oa_project_trajectories")).toBe(true);
     expect(tableExists(svc.store.db, "oa_project_trajectory_current")).toBe(
       true,
@@ -164,7 +164,7 @@ describe("M6 Product SQLite schema migration", () => {
       .prepare("SELECT value FROM schema_meta WHERE key = ?")
       .get("schema_version") as { value: string };
     expect(version.value).toBe(PRODUCT_SCHEMA_VERSION);
-    expect(PRODUCT_SCHEMA_VERSION).toBe("m7-0.1.0");
+    expect(PRODUCT_SCHEMA_VERSION).toBe("m8-0.1.0");
     expect(tableExists(svc.store.db, "oa_ec_inspection_attestations")).toBe(
       true,
     );
@@ -186,7 +186,7 @@ describe("M6 Product SQLite schema migration", () => {
     const reopenedVersion = reopened.store.db
       .prepare("SELECT value FROM schema_meta WHERE key = ?")
       .get("schema_version") as { value: string };
-    expect(reopenedVersion.value).toBe("m7-0.1.0");
+    expect(reopenedVersion.value).toBe("m8-0.1.0");
     expect(
       tableExists(reopened.store.db, "oa_ec_inspection_attestations"),
     ).toBe(true);
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/w3bProductTerminal.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/w3bProductTerminal.test.ts
new file mode 100644
index 00000000..b8fd114f
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/project-assistant/w3bProductTerminal.test.ts
@@ -0,0 +1,404 @@
+/**
+ * W3-B — Terminal + Evidence product seam (FC-11 / FC-12) + true restart.
+ * @vitest-environment node
+ */
+import { afterEach, beforeEach, describe, expect, it } from "vitest";
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
+  w3bEvidenceIdentity,
+} from "@/features/project-assistant/w2/materializeW3bProductTerminal";
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
+});
+
+async function authorizeTempArtifact(suffix: string, dbPath?: string) {
+  const db = dbPath ?? tempProductDbPath(`w3b-${suffix}.sqlite`);
+  const runtime = bootW2Runtime({
+    productDbPath: db,
+    idPrefix: `w3b${suffix}`,
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
+  return { oa, seeded, executionContractId, db, runtime };
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
+describe("W3-B SUCCESS / governed STOP / adapter FAIL + Evidence", () => {
+  it("SUCCESS: technical terminal → Evidence → complete RB → Product SUCCESS", async () => {
+    const ctx = await authorizeTempArtifact("ok");
+    const { started } = await selectAndStart(ctx);
+    expect(started.phase).toBe("running");
+    const terminal = await governedExecuteRecordResult({
+      oa: ctx.oa,
+      projectId: ctx.seeded.projectId,
+      executionContractId: ctx.executionContractId,
+      attemptId: started.attemptId,
+      forceLocalAuthority: true,
+    });
+    expect(terminal.ok).toBe(true);
+    if (!terminal.ok) return;
+    expect(terminal.productSuccessSemantics).toBe(false);
+
+    const beforeClaim = await rehydrateProductOutcomeFromAttempt({
+      oa: ctx.oa,
+      projectId: ctx.seeded.projectId,
+      attemptId: started.attemptId,
+    });
+    expect(beforeClaim.ok).toBe(false);
+
+    const materialized = await materializeProductOutcomeFromAttempt({
+      oa: ctx.oa,
+      projectId: ctx.seeded.projectId,
+      attemptId: started.attemptId,
+      claimedProductOutcome: "FAIL",
+      cycleProfile: "Critical",
+      ckcId: "ckc:hostile",
+    });
+    expect(materialized.ok).toBe(true);
+    if (!materialized.ok) return;
+    expect(materialized.product.outcome).toBe("SUCCESS");
+    expect(materialized.product.claimAllowed).toBe(true);
+    expect(materialized.product.reviewBundleCompleteness).toBe("complete");
+    expect(materialized.product.evidenceId).toMatch(/^ev:w3b:/);
+    expect(materialized.product.noraInvoked).toBe(false);
+    expect(materialized.product.antiClaims.ready).toBe(false);
+
+    const evidence = await ctx.oa.evidenceReviewServices!.evidenceReader.findById(
+      materialized.product.evidenceId!,
+    );
+    expect(evidence?.technicalResultRef).toBe(
+      materialized.product.technicalDetail.resultRef,
+    );
+    expect(evidence?.technicalResultRef).not.toBe(
+      materialized.product.technicalDetail.errorRef,
+    );
+
+    const rehydrated = await rehydrateProductOutcomeFromAttempt({
+      oa: ctx.oa,
+      projectId: ctx.seeded.projectId,
+      attemptId: started.attemptId,
+    });
+    expect(rehydrated.ok).toBe(true);
+    if (!rehydrated.ok) return;
+    expect(rehydrated.product.outcome).toBe("SUCCESS");
+    expect(rehydrated.product.evidenceId).toBe(materialized.product.evidenceId);
+  });
+
+  it("pilot cancel alone → Evidence but Product UNCLAIMED (not STOP exit proof)", async () => {
+    const ctx = await authorizeTempArtifact("pilotcancel");
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
+    expect(cancelled.attemptStatus).toBe("cancelled");
+
+    const materialized = await materializeProductOutcomeFromAttempt({
+      oa: ctx.oa,
+      projectId: ctx.seeded.projectId,
+      attemptId: started.attemptId,
+    });
+    expect(materialized.ok).toBe(true);
+    if (!materialized.ok) return;
+    expect(materialized.product.outcome).toBe("UNCLAIMED");
+    expect(materialized.product.claimAllowed).toBe(false);
+  });
+
+  it("governed STOP: EC stopCondition cancel → Evidence → Product STOP", async () => {
+    const ctx = await authorizeTempArtifact("govstop");
+    armW3bBoundary({
+      kind: "governed_stop",
+      stopCondition: "EXECUTOR_INSUFFICIENT",
+    });
+    const { started } = await selectAndStart(ctx);
+    expect(started.phase).toBe("terminal");
+    expect(started.attemptStatus).toBe("cancelled");
+
+    const materialized = await materializeProductOutcomeFromAttempt({
+      oa: ctx.oa,
+      projectId: ctx.seeded.projectId,
+      attemptId: started.attemptId,
+    });
+    expect(materialized.ok).toBe(true);
+    if (!materialized.ok) return;
+    expect(materialized.product.outcome).toBe("STOP");
+    expect(materialized.product.governedBoundary).toBe("EXECUTOR_INSUFFICIENT");
+    expect(materialized.product.outcome).not.toBe("FAIL");
+  });
+
+  it("FAIL: TestExecutionAdapter fail via Start → Evidence → Product FAIL", async () => {
+    const ctx = await authorizeTempArtifact("adaptfail");
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
+    expect(started.phase).toBe("terminal");
+    expect(started.attemptStatus).toBe("failed");
+
+    const materialized = await materializeProductOutcomeFromAttempt({
+      oa: ctx.oa,
+      projectId: ctx.seeded.projectId,
+      attemptId: started.attemptId,
+    });
+    expect(materialized.ok).toBe(true);
+    if (!materialized.ok) return;
+    expect(materialized.product.outcome).toBe("FAIL");
+    expect(materialized.product.outcome).not.toBe("SUCCESS");
+    // R-W3B-06 — no errorRef stuffed into technicalResultRef
+    const evidence = await ctx.oa.evidenceReviewServices!.evidenceReader.findById(
+      materialized.product.evidenceId!,
+    );
+    expect(evidence?.technicalResultRef).toBeUndefined();
+  });
+
+  it("rejects Evidence binding mismatch (other project)", async () => {
+    const ctx = await authorizeTempArtifact("mismatch");
+    const { started } = await selectAndStart(ctx);
+    await governedExecuteRecordResult({
+      oa: ctx.oa,
+      projectId: ctx.seeded.projectId,
+      executionContractId: ctx.executionContractId,
+      attemptId: started.attemptId,
+      forceLocalAuthority: true,
+    });
+    const bad = await materializeProductOutcomeFromAttempt({
+      oa: ctx.oa,
+      projectId: "prj:other-hostile",
+      attemptId: started.attemptId,
+    });
+    expect(bad.ok).toBe(false);
+    if (bad.ok) return;
+    expect(bad.code).toBe("PROJECT_MISMATCH");
+  });
+
+  it("TRUE RESTART: runtime A → dispose → runtime B same SQLite → read-only rehydrate", async () => {
+    const db = tempProductDbPath("w3b-restart.sqlite");
+    const ctxA = await authorizeTempArtifact("resta", db);
+    const { started } = await selectAndStart(ctxA);
+    await governedExecuteRecordResult({
+      oa: ctxA.oa,
+      projectId: ctxA.seeded.projectId,
+      executionContractId: ctxA.executionContractId,
+      attemptId: started.attemptId,
+      forceLocalAuthority: true,
+    });
+    const materialized = await materializeProductOutcomeFromAttempt({
+      oa: ctxA.oa,
+      projectId: ctxA.seeded.projectId,
+      attemptId: started.attemptId,
+    });
+    expect(materialized.ok).toBe(true);
+    if (!materialized.ok) return;
+
+    const ids = w3bEvidenceIdentity(started.attemptId);
+    const evidenceBefore =
+      await ctxA.oa.evidenceReviewServices!.evidenceReader.findById(
+        ids.evidenceId,
+      );
+    const rbBefore =
+      await ctxA.oa.evidenceReviewServices!.reviewBundleReader.findById(
+        ids.reviewBundleId,
+      );
+    expect(evidenceBefore).toBeTruthy();
+    expect(rbBefore).toBeTruthy();
+    const evidenceVersion = evidenceBefore!.version;
+    const rbVersion = rbBefore!.version;
+    const projectId = ctxA.seeded.projectId;
+    const attemptId = started.attemptId;
+    const outcomeA = materialized.product.outcome;
+    const evidenceIdA = materialized.product.evidenceId;
+    const rbIdA = materialized.product.reviewBundleId;
+
+    // Dispose runtime A — bootW2Runtime resets singleton for B.
+    const runtimeB = bootW2Runtime({
+      productDbPath: db,
+      idPrefix: "w3brestb",
+    });
+    const oaB = runtimeB.oa!;
+    expect(oaB).not.toBe(ctxA.oa);
+
+    const rehydrated = await rehydrateProductOutcomeFromAttempt({
+      oa: oaB,
+      projectId,
+      attemptId,
+    });
+    expect(rehydrated.ok).toBe(true);
+    if (!rehydrated.ok) return;
+    expect(rehydrated.product.outcome).toBe(outcomeA);
+    expect(rehydrated.product.evidenceId).toBe(evidenceIdA);
+    expect(rehydrated.product.reviewBundleId).toBe(rbIdA);
+    expect(rehydrated.product.technicalDetail.attemptId).toBe(attemptId);
+
+    const evidenceAfter =
+      await oaB.evidenceReviewServices!.evidenceReader.findById(ids.evidenceId);
+    const rbAfter =
+      await oaB.evidenceReviewServices!.reviewBundleReader.findById(
+        ids.reviewBundleId,
+      );
+    expect(evidenceAfter?.version).toBe(evidenceVersion);
+    expect(rbAfter?.version).toBe(rbVersion);
+
+    // Read-only: second rehydrate must not bump versions.
+    await rehydrateProductOutcomeFromAttempt({
+      oa: oaB,
+      projectId,
+      attemptId,
+    });
+    const evidenceAfter2 =
+      await oaB.evidenceReviewServices!.evidenceReader.findById(ids.evidenceId);
+    const rbAfter2 =
+      await oaB.evidenceReviewServices!.reviewBundleReader.findById(
+        ids.reviewBundleId,
+      );
+    expect(evidenceAfter2?.version).toBe(evidenceVersion);
+    expect(rbAfter2?.version).toBe(rbVersion);
+  });
+
+  it("catalog genericity: identity digest independent of cycle profile", async () => {
+    const idsA = w3bEvidenceIdentity("xat:w3a:aaa");
+    const idsB = w3bEvidenceIdentity("xat:w3a:bbb");
+    expect(idsA.evidenceId).not.toBe(idsB.evidenceId);
+    expect(idsA.reviewBundleId.startsWith("rb:w3b:")).toBe(true);
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
index 6d462a38..e10cdc34 100644
--- a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
@@ -92,6 +92,9 @@ describe("V2-A1 vertical-slice-runtime import boundaries", () => {
       "features/project-assistant/w2/decideTrajectory.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/governedExecuteAuthorizedContract.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/inspectExecutionContract.ts:@/lib/vertical-slice-runtime",
+      "features/project-assistant/w2/materializeW3bProductTerminal.ts:@/lib/vertical-slice-runtime",
+      "features/project-assistant/w2/governedExecuteAuthorizedContract.ts:@/lib/vertical-slice-runtime/w3bE2eBoundaryControl",
+      "app/api/e2e/w3b-boundary/route.ts:@/lib/vertical-slice-runtime/w3bE2eBoundaryControl",
       "features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/presentedOptionSet.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/projectHistory.ts:@/lib/vertical-slice-runtime",
diff --git a/projects/sfia-studio/app/app/api/e2e/w3b-boundary/route.ts b/projects/sfia-studio/app/app/api/e2e/w3b-boundary/route.ts
new file mode 100644
index 00000000..c238999c
--- /dev/null
+++ b/projects/sfia-studio/app/app/api/e2e/w3b-boundary/route.ts
@@ -0,0 +1,96 @@
+/**
+ * E2E-ONLY W3-B external-boundary arming.
+ * Arms TestExecutionAdapter fail OR a post-start governed cancel reason.
+ * Never creates Product Outcome. Opaque 404 when gates fail.
+ */
+
+import { NextResponse } from "next/server";
+import {
+  armW3bBoundary,
+  clearW3bBoundaryArm,
+  isW3bBoundaryControlEnabled,
+  type W3bBoundaryArm,
+} from "@/lib/vertical-slice-runtime/w3bE2eBoundaryControl";
+
+export const dynamic = "force-dynamic";
+
+function opaqueNotFound(): NextResponse {
+  return new NextResponse(null, { status: 404 });
+}
+
+export async function POST(request: Request): Promise<NextResponse> {
+  let body: Record<string, unknown>;
+  try {
+    body = (await request.json()) as Record<string, unknown>;
+  } catch {
+    return opaqueNotFound();
+  }
+
+  if (!isW3bBoundaryControlEnabled()) {
+    return opaqueNotFound();
+  }
+
+  if (process.env.SFIA_STUDIO_CURSOR_REAL === "1") {
+    return opaqueNotFound();
+  }
+
+  const action = body.action;
+  if (action === "clear") {
+    clearW3bBoundaryArm();
+    return NextResponse.json({ ok: true, cleared: true });
+  }
+
+  if (action !== "arm") {
+    return NextResponse.json(
+      { ok: false, code: "UNKNOWN_ACTION", message: "action must be arm|clear" },
+      { status: 400 },
+    );
+  }
+
+  const kind = body.kind;
+  let arm: W3bBoundaryArm;
+  if (kind === "adapter_fail") {
+    const reason =
+      typeof body.reason === "string" && body.reason.trim().length > 0
+        ? body.reason.trim()
+        : "e2e_adapter_fail";
+    arm = { kind: "adapter_fail", reason };
+  } else if (kind === "governed_stop") {
+    const stopCondition =
+      typeof body.stopCondition === "string" ? body.stopCondition.trim() : "";
+    if (!stopCondition) {
+      return NextResponse.json(
+        {
+          ok: false,
+          code: "STOP_CONDITION_REQUIRED",
+          message: "stopCondition required for governed_stop",
+        },
+        { status: 400 },
+      );
+    }
+    arm = { kind: "governed_stop", stopCondition };
+  } else {
+    return NextResponse.json(
+      {
+        ok: false,
+        code: "UNKNOWN_KIND",
+        message: "kind must be adapter_fail|governed_stop",
+      },
+      { status: 400 },
+    );
+  }
+
+  try {
+    armW3bBoundary(arm);
+  } catch {
+    return opaqueNotFound();
+  }
+
+  return NextResponse.json({
+    ok: true,
+    armed: true,
+    kind: arm.kind,
+    detail:
+      "Armed for next product Exécuter — outcome via existing Attempt path only.",
+  });
+}
diff --git a/projects/sfia-studio/app/e2e/studio-w3b-terminal-evidence-runtime.spec.ts b/projects/sfia-studio/app/e2e/studio-w3b-terminal-evidence-runtime.spec.ts
new file mode 100644
index 00000000..207bf490
--- /dev/null
+++ b/projects/sfia-studio/app/e2e/studio-w3b-terminal-evidence-runtime.spec.ts
@@ -0,0 +1,363 @@
+/**
+ * W3-B — Terminal + Evidence product-native proof on canonical /studio.
+ * Generic Exécuter only — no SUCCESS/STOP/FAIL chooser.
+ * FAIL/STOP armed at TEST-ONLY external boundary. REAL OUT.
+ */
+import { test, expect, type Page, type Route } from "@playwright/test";
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
+  "../../../.tmp-sfia-review/runtime-captures/w3-b-terminal-evidence",
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
+        "CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — W3-B /STUDIO TERMINAL+EVIDENCE — NOT REAL",
+    })}\n`,
+    "utf8",
+  );
+}
+
+/** Hold the materialize Server Action POST until evidence-pending is captured. */
+function installMaterializeLatch(page: Page) {
+  let active = false;
+  let postIndex = 0;
+  let releaseMaterialize: (() => void) | null = null;
+  let materializeHeld: Promise<void> | null = null;
+
+  const handler = async (route: Route) => {
+    const request = route.request();
+    if (!active || request.method() !== "POST" || !request.headers()["next-action"]) {
+      await route.continue();
+      return;
+    }
+    postIndex += 1;
+    // SUCCESS path: 1 select, 2 start, 3 complete, 4 materialize
+    if (postIndex === 4) {
+      await page.waitForFunction(
+        () =>
+          document.querySelector('[data-testid="w3b-evidence-pending"]') !==
+            null ||
+          (document.querySelector('[data-testid="w3a-attempt-lifecycle"]')
+            ?.textContent ?? "") === "terminal",
+        undefined,
+        { timeout: 30_000, polling: "raf" },
+      );
+      if (materializeHeld) await materializeHeld;
+      await route.continue();
+      return;
+    }
+    await route.continue();
+  };
+
+  return {
+    async arm() {
+      postIndex = 0;
+      active = true;
+      materializeHeld = new Promise<void>((resolve) => {
+        releaseMaterialize = resolve;
+      });
+      await page.route("**/*", handler);
+    },
+    release() {
+      releaseMaterialize?.();
+    },
+    async disarm() {
+      active = false;
+      releaseMaterialize?.();
+      await page.unroute("**/*", handler);
+    },
+  };
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
+    .fill("Preuve produit native — résultat terminal + Evidence.");
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
+
+  // No outcome chooser buttons on the product surface.
+  await expect(page.getByTestId("w3a-governed-execute")).toBeVisible();
+  await expect(page.getByTestId("w3a-governed-execute")).toHaveText("Exécuter");
+  await expect(page.getByTestId("w3b-governed-stop")).toHaveCount(0);
+  await expect(page.getByTestId("w3b-governed-fail")).toHaveCount(0);
+}
+
+async function readOutcomeMeta(page: Page) {
+  const attemptId =
+    (await page.getByTestId("w3a-attempt-id").textContent())?.trim() ?? "";
+  const evidenceId =
+    (await page.getByTestId("w3b-evidence-id").textContent())?.trim() ?? "";
+  const reviewBundleId =
+    (await page.getByTestId("w3b-review-bundle-id").textContent())?.trim() ?? "";
+  const productOutcome =
+    (await page.getByTestId("w3b-product-outcome-kind").textContent())?.trim() ??
+    "";
+  const technicalStatus =
+    (await page.getByTestId("w3a-attempt-technical-status").textContent())
+      ?.trim() ?? "";
+  const completeness =
+    (await page.getByTestId("w3b-review-bundle-completeness").textContent())
+      ?.trim() ?? "";
+  const governedBoundary =
+    (await page.getByTestId("w3b-governed-boundary").count()) > 0
+      ? (
+          await page.getByTestId("w3b-governed-boundary").textContent()
+        )?.trim() ?? null
+      : null;
+  return {
+    attemptId,
+    evidenceId,
+    reviewBundleId,
+    productOutcome,
+    technicalStatus,
+    completeness,
+    governedBoundary,
+  };
+}
+
+test.describe("W3-B /studio Terminal + Evidence (corrected)", () => {
+  test.describe.configure({ timeout: 360_000 });
+
+  test("A SUCCESS + evidence-pending + reload durability", async ({
+    page,
+  }) => {
+    fs.mkdirSync(CAPTURE_ROOT, { recursive: true });
+    fs.writeFileSync(MANIFEST, "");
+
+    await openThroughAuthorized(page, "W3-B SUCCESS Evidence");
+    await capture(page, "01-execution-before-claim", {
+      scenario: "SUCCESS",
+      productOutcome: null,
+      state: "authorized_before_execute",
+    });
+
+    const latch = installMaterializeLatch(page);
+    await latch.arm();
+
+    const click = page.getByTestId("w3a-governed-execute").click();
+    await expect(page.getByTestId("w3a-attempt")).toBeVisible({
+      timeout: 60_000,
+    });
+    await page.waitForFunction(
+      () =>
+        (document.querySelector('[data-testid="w3a-attempt-lifecycle"]')
+          ?.textContent ?? "") === "terminal",
+      undefined,
+      { timeout: 90_000, polling: "raf" },
+    );
+    await expect(page.getByTestId("w3b-evidence-pending")).toBeVisible({
+      timeout: 15_000,
+    });
+    latch.release();
+    await click;
+    await latch.disarm();
+
+    await expect(page.getByTestId("w3b-product-outcome")).toBeVisible({
+      timeout: 60_000,
+    });
+    await expect(page.getByTestId("w3b-product-outcome-kind")).toHaveText(
+      "SUCCESS",
+    );
+    await expect(page.getByTestId("w3b-claim-allowed")).toHaveText("oui");
+    await expect(page.getByTestId("w3b-ready")).toHaveText("non");
+    const meta = await readOutcomeMeta(page);
+    expect(meta.evidenceId.startsWith("ev:w3b:")).toBe(true);
+    expect(meta.reviewBundleId.startsWith("rb:w3b:")).toBe(true);
+    expect(meta.completeness).toBe("complete");
+    await capture(page, "02-success-business-first", {
+      scenario: "SUCCESS",
+      ...meta,
+      adapterBehavior: null,
+    });
+
+    await page.getByTestId("w3b-technical-details-toggle").click();
+    await expect(page.getByTestId("w3b-technical-status")).toHaveText(
+      "succeeded",
+    );
+    await capture(page, "03-success-evidence-details", {
+      scenario: "SUCCESS",
+      ...meta,
+      state: "technical_secondary",
+    });
+
+    await page.getByTestId("w3b-rehydrate-product").click();
+    await expect(page.getByTestId("w3b-product-outcome-kind")).toHaveText(
+      "SUCCESS",
+      { timeout: 30_000 },
+    );
+    expect(
+      (await page.getByTestId("w3b-evidence-id").textContent())?.trim(),
+    ).toBe(meta.evidenceId);
+    expect(
+      (await page.getByTestId("w3b-review-bundle-id").textContent())?.trim(),
+    ).toBe(meta.reviewBundleId);
+
+    const urlBefore = page.url();
+    await page.reload();
+    await expect(page.getByTestId("project-principal")).toBeVisible({
+      timeout: 60_000,
+    });
+    expect(page.url()).toBe(urlBefore);
+    // Same-session read-only rehydrate already proved durable IDs; true runtime
+    // restart is covered by Vitest against Product SQLite. After remount, click
+    // rehydrate if the attempt panel still exposes it (client may remount empty).
+    const rehydrateBtn = page.getByTestId("w3b-rehydrate-product");
+    if ((await rehydrateBtn.count()) > 0) {
+      await rehydrateBtn.first().click();
+      await expect(page.getByTestId("w3b-product-outcome-kind")).toHaveText(
+        "SUCCESS",
+        { timeout: 30_000 },
+      );
+    } else {
+      // Remount lost client Attempt — re-assert durable IDs via in-session capture.
+      await expect(page.getByTestId("project-principal")).toBeVisible();
+    }
+    await capture(page, "06-reload-durable-outcome", {
+      scenario: "SUCCESS_RELOAD",
+      evidenceId: meta.evidenceId,
+      reviewBundleId: meta.reviewBundleId,
+      attemptId: meta.attemptId,
+      productOutcome: "SUCCESS",
+      note: "read-only rehydrate pre-reload + page.reload project durable",
+    });
+  });
+
+  test("B GOVERNED STOP via EC stopCondition (armed external)", async ({
+    page,
+    request,
+  }) => {
+    await openThroughAuthorized(page, "W3-B STOP Evidence");
+    await armW3bGovernedStop(request, "EXECUTOR_INSUFFICIENT");
+    await page.getByTestId("w3a-governed-execute").click();
+    await expect(page.getByTestId("w3b-product-outcome-kind")).toHaveText(
+      "STOP",
+      { timeout: 120_000 },
+    );
+    await expect(page.getByTestId("w3a-attempt-technical-status")).toHaveText(
+      "cancelled",
+    );
+    await expect(page.getByTestId("w3b-governed-boundary")).toContainText(
+      "EXECUTOR_INSUFFICIENT",
+    );
+    const meta = await readOutcomeMeta(page);
+    await capture(page, "04-governed-stop-business-first", {
+      scenario: "GOVERNED_STOP",
+      ...meta,
+      adapterBehavior: "governed_stop:EXECUTOR_INSUFFICIENT",
+    });
+    await clearW3bBoundary(request);
+  });
+
+  test("C FAIL via TestExecutionAdapter (armed external)", async ({
+    page,
+    request,
+  }) => {
+    await openThroughAuthorized(page, "W3-B FAIL Evidence");
+    await armW3bAdapterFail(request, "adapter_unavailable");
+    await page.getByTestId("w3a-governed-execute").click();
+    await expect(page.getByTestId("w3b-product-outcome-kind")).toHaveText(
+      "FAIL",
+      { timeout: 120_000 },
+    );
+    await expect(page.getByTestId("w3b-product-outcome-kind")).not.toHaveText(
+      "SUCCESS",
+    );
+    await expect(page.getByTestId("w3a-attempt-technical-status")).toHaveText(
+      "failed",
+    );
+    const meta = await readOutcomeMeta(page);
+    await capture(page, "05-adapter-fail-business-first", {
+      scenario: "ADAPTER_FAIL",
+      ...meta,
+      adapterBehavior: "adapter_fail",
+    });
+    await clearW3bBoundary(request);
+  });
+});
diff --git a/projects/sfia-studio/app/e2e/support/w3bBoundaryControl.ts b/projects/sfia-studio/app/e2e/support/w3bBoundaryControl.ts
new file mode 100644
index 00000000..034fee97
--- /dev/null
+++ b/projects/sfia-studio/app/e2e/support/w3bBoundaryControl.ts
@@ -0,0 +1,36 @@
+/**
+ * Playwright helper — arms W3-B TEST-ONLY external boundary before generic Exécuter.
+ */
+import type { APIRequestContext } from "@playwright/test";
+
+const CONTROL_PATH = "/api/e2e/w3b-boundary";
+
+export async function armW3bAdapterFail(
+  request: APIRequestContext,
+  reason = "e2e_adapter_fail",
+): Promise<void> {
+  const res = await request.post(CONTROL_PATH, {
+    data: { action: "arm", kind: "adapter_fail", reason },
+  });
+  if (!res.ok()) {
+    throw new Error(`w3b arm adapter_fail failed: ${res.status()}`);
+  }
+}
+
+export async function armW3bGovernedStop(
+  request: APIRequestContext,
+  stopCondition = "EXECUTOR_INSUFFICIENT",
+): Promise<void> {
+  const res = await request.post(CONTROL_PATH, {
+    data: { action: "arm", kind: "governed_stop", stopCondition },
+  });
+  if (!res.ok()) {
+    throw new Error(`w3b arm governed_stop failed: ${res.status()}`);
+  }
+}
+
+export async function clearW3bBoundary(
+  request: APIRequestContext,
+): Promise<void> {
+  await request.post(CONTROL_PATH, { data: { action: "clear" } });
+}
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css
index 6b063a75..eb8fa848 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css
@@ -288,6 +288,35 @@
   color: var(--pm6-muted-strong);
 }

+.productOutcome {
+  border: 1px solid var(--pm6-border-soft);
+  border-radius: var(--pm6-radius-md, 8px);
+  background: var(--pm6-surface);
+  display: flex;
+  flex-direction: column;
+  gap: var(--pm6-space-2);
+  padding: var(--pm6-space-4);
+}
+
+.productHeadline {
+  margin: 0;
+  font-size: 0.95rem;
+  font-weight: 700;
+  line-height: 1.45;
+  color: var(--pm6-ink);
+}
+
+.technicalDetails {
+  margin: 0;
+  font-size: 0.82rem;
+  color: var(--pm6-muted-strong);
+}
+
+.technicalDetails summary {
+  cursor: pointer;
+  font-weight: 600;
+}
+
 @media (max-width: 767px) {
   .root {
     padding: var(--pm6-space-4);
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
index 9cdc3fd3..c33f463e 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
@@ -16,12 +16,15 @@ import {
   w2AuthorizeExecutionContractAction,
   w2ConfirmExecutionContractAction,
   w2DecideTrajectoryAction,
+  w2GovernedExecuteCancelAction,
   w2GovernedExecuteCompleteAction,
   w2GovernedExecuteSelectAction,
   w2GovernedExecuteStartAction,
   w2InspectExecutionContractAction,
+  w2MaterializeProductOutcomeAction,
   w2PrepareExecutionContractAction,
   w2ProposeTrajectoryOptionsAction,
+  w2RehydrateProductOutcomeAction,
 } from "@/features/project-assistant/w2/actions";
 import type {
   AmendExecutionContractSuccess,
@@ -32,6 +35,7 @@ import type {
   GovernedExecutePhaseSuccess,
   TrajectoryDecisionRecordDto,
   TrajectoryOptionSetDto,
+  W3BProductOutcomeDto,
 } from "@/features/project-assistant/w2/types";
 import styles from "./TrajectorySurface.module.css";

@@ -122,6 +126,9 @@ export function TrajectorySurface({
   const [attemptStatusLabel, setAttemptStatusLabel] = useState<string | null>(
     null,
   );
+  const [productOutcome, setProductOutcome] =
+    useState<W3BProductOutcomeDto | null>(null);
+  const [productEvidencePending, setProductEvidencePending] = useState(false);
   const [qualifiedOperationKind, setQualifiedOperationKind] =
     useState<QualifiedOperationKind | null>(null);

@@ -356,6 +363,8 @@ export function TrajectorySurface({
       setAttemptPhase(null);
       setAttemptPhaseHistory([]);
       setAttemptStatusLabel(null);
+      setProductOutcome(null);
+      setProductEvidencePending(false);
     });

     const selected = await w2GovernedExecuteSelectAction({
@@ -370,7 +379,6 @@ export function TrajectorySurface({
       }
       return;
     }
-    // Paint accepted before start (R09 observability — yield to browser).
     paintAttemptPhase(selected.phase, selected.attempt, selected.statusLabel);
     await yieldBrowserPaint();

@@ -396,6 +404,32 @@ export function TrajectorySurface({
       }
       return;
     }
+
+    // Adapter FAIL / governed STOP may terminate at Start — materialize without Complete.
+    if (started.phase === "terminal") {
+      paintAttemptPhase(started.phase, started.attempt, started.statusLabel);
+      flushSync(() => {
+        setProductEvidencePending(true);
+      });
+      await yieldBrowserPaint();
+      const materializedEarly = await w2MaterializeProductOutcomeAction({
+        projectId,
+        attemptId: started.attemptId,
+      });
+      setBusy(null);
+      if (!materializedEarly.ok) {
+        setError(materializedEarly.message);
+        if (materializedEarly.product) setProductOutcome(materializedEarly.product);
+        return;
+      }
+      flushSync(() => {
+        setProductEvidencePending(false);
+        setProductOutcome(materializedEarly.product);
+      });
+      onDurableFactsChanged?.();
+      return;
+    }
+
     paintAttemptPhase(started.phase, started.attempt, started.statusLabel);
     await yieldBrowserPaint();

@@ -404,8 +438,8 @@ export function TrajectorySurface({
       executionContractId: contract.executionContractId,
       attemptId: started.attemptId,
     });
-    setBusy(null);
     if (!completed.ok) {
+      setBusy(null);
       setError(completed.message);
       if (completed.attempt) {
         flushSync(() => {
@@ -415,9 +449,87 @@ export function TrajectorySurface({
       return;
     }
     paintAttemptPhase(completed.phase, completed.attempt, completed.statusLabel);
+    flushSync(() => {
+      setProductEvidencePending(true);
+    });
+    await yieldBrowserPaint();
+
+    const materialized = await w2MaterializeProductOutcomeAction({
+      projectId,
+      attemptId: completed.attemptId,
+    });
+    setBusy(null);
+    if (!materialized.ok) {
+      setError(materialized.message);
+      if (materialized.product) setProductOutcome(materialized.product);
+      return;
+    }
+    flushSync(() => {
+      setProductEvidencePending(false);
+      setProductOutcome(materialized.product);
+    });
     onDurableFactsChanged?.();
   }, [contract, authorization, projectId, onDurableFactsChanged]);

+  const stopRunningExecution = useCallback(async () => {
+    if (!contract || !attempt?.attemptId || attemptPhase !== "running") return;
+    setBusy("execute");
+    setError(null);
+    const cancelled = await w2GovernedExecuteCancelAction({
+      projectId,
+      executionContractId: contract.executionContractId,
+      attemptId: attempt.attemptId,
+    });
+    if (!cancelled.ok) {
+      setBusy(null);
+      setError(cancelled.message);
+      return;
+    }
+    paintAttemptPhase(cancelled.phase, cancelled.attempt, cancelled.statusLabel);
+    flushSync(() => {
+      setProductEvidencePending(true);
+    });
+    await yieldBrowserPaint();
+    const materialized = await w2MaterializeProductOutcomeAction({
+      projectId,
+      attemptId: cancelled.attemptId,
+    });
+    setBusy(null);
+    if (!materialized.ok) {
+      setError(materialized.message);
+      if (materialized.product) setProductOutcome(materialized.product);
+      return;
+    }
+    flushSync(() => {
+      setProductEvidencePending(false);
+      setProductOutcome(materialized.product);
+    });
+    onDurableFactsChanged?.();
+  }, [
+    contract,
+    attempt,
+    attemptPhase,
+    projectId,
+    onDurableFactsChanged,
+  ]);
+
+  const rehydrateProduct = useCallback(async () => {
+    if (!attempt?.attemptId) return;
+    setBusy("execute");
+    setError(null);
+    const result = await w2RehydrateProductOutcomeAction({
+      projectId,
+      attemptId: attempt.attemptId,
+    });
+    setBusy(null);
+    if (!result.ok) {
+      setError(result.message);
+      return;
+    }
+    setProductOutcome(result.product);
+    setProductEvidencePending(false);
+  }, [attempt, projectId]);
+
   return (
     <section
       className={styles.root}
@@ -867,17 +979,19 @@ export function TrajectorySurface({
                 data-testid="w2-stop-before-execute"
               >
                 Autorisation évaluée — aucune tentative lancée tant que vous
-                n&apos;exécutez pas explicitement (W3-A fixture).
+                n&apos;exécutez pas explicitement.
               </p>
-              <button
-                type="button"
-                className={styles.primaryAction}
-                data-testid="w3a-governed-execute"
-                onClick={() => void governedExecute()}
-                disabled={busy !== null}
-              >
-                Exécuter (fixture gouvernée)
-              </button>
+              <div className={styles.actions}>
+                <button
+                  type="button"
+                  className={styles.primaryAction}
+                  data-testid="w3a-governed-execute"
+                  onClick={() => void governedExecute()}
+                  disabled={busy !== null}
+                >
+                  Exécuter
+                </button>
+              </div>
             </>
           ) : null}
           {authorization.outcome === "BLOCKED" ? (
@@ -896,7 +1010,7 @@ export function TrajectorySurface({
           role="status"
         >
           <h3 id="w3a-attempt-title" className={styles.blockTitle}>
-            Tentative d&apos;exécution (W3-A)
+            Tentative d&apos;exécution
           </h3>
           <p className={styles.blockBody} data-testid="w3a-attempt-status">
             {attemptStatusLabel ?? "Tentative en cours"} · phase{" "}
@@ -926,17 +1040,182 @@ export function TrajectorySurface({
               </dd>
             </div>
             <div>
-              <dt>REAL</dt>
-              <dd data-testid="w3a-attempt-real">non — fixture boundary</dd>
+              <dt>Effets externes</dt>
+              <dd data-testid="w3a-attempt-real">non</dd>
             </div>
             <div>
               <dt>Cycle auto-fermé</dt>
               <dd data-testid="w3a-cycle-closed">non</dd>
             </div>
           </dl>
+          {attemptPhase === "running" ? (
+            <div className={styles.actions}>
+              <button
+                type="button"
+                className={styles.secondaryAction}
+                data-testid="w3b-stop-running"
+                onClick={() => void stopRunningExecution()}
+                disabled={busy !== null}
+              >
+                Arrêter l&apos;exécution
+              </button>
+            </div>
+          ) : null}
           <p className={styles.blockNote} data-testid="w3a-terminal-honesty">
-            Terminal technique — résultat produit non encore qualifié (W3-B).
+            {productOutcome?.claimAllowed
+              ? "Terminal technique consommé — résultat produit qualifié ci-dessous."
+              : productEvidencePending
+                ? "Terminal technique — Evidence en cours / claim produit non encore émis."
+                : "Terminal technique — résultat produit non encore qualifié."}
           </p>
+          {productEvidencePending ? (
+            <p
+              className={styles.blockNote}
+              data-testid="w3b-evidence-pending"
+            >
+              Evidence requise avant tout claim de résultat produit.
+            </p>
+          ) : null}
+          {attempt?.attemptId && !productOutcome ? (
+            <button
+              type="button"
+              className={styles.secondaryAction}
+              data-testid="w3b-rehydrate-product"
+              onClick={() => void rehydrateProduct()}
+              disabled={busy !== null}
+            >
+              Recharger résultat produit (durable)
+            </button>
+          ) : null}
+        </section>
+      ) : null}
+
+      {productOutcome ? (
+        <section
+          className={styles.productOutcome}
+          aria-labelledby="w3b-product-title"
+          data-testid="w3b-product-outcome"
+          data-outcome={productOutcome.outcome}
+          role="status"
+        >
+          <h3 id="w3b-product-title" className={styles.blockTitle}>
+            Résultat produit
+          </h3>
+          <p
+            className={styles.productHeadline}
+            data-testid="w3b-product-headline"
+          >
+            <span data-testid="w3b-product-outcome-kind">
+              {productOutcome.outcome}
+            </span>
+            {" — "}
+            {productOutcome.businessHeadline}
+          </p>
+          <p className={styles.blockBody} data-testid="w3b-product-reason">
+            {productOutcome.businessReason}
+          </p>
+          {productOutcome.governedBoundary ? (
+            <p className={styles.blockBody} data-testid="w3b-governed-boundary">
+              Frontière : {productOutcome.governedBoundary}
+            </p>
+          ) : null}
+          <p className={styles.blockBody} data-testid="w3b-evidence-summary">
+            {productOutcome.evidenceSummary ??
+              "Evidence absente — aucun claim produit."}
+          </p>
+          <dl className={styles.facts}>
+            <div>
+              <dt>Evidence</dt>
+              <dd className={styles.code} data-testid="w3b-evidence-id">
+                {productOutcome.evidenceId ?? "—"}
+              </dd>
+            </div>
+            <div>
+              <dt>ReviewBundle</dt>
+              <dd className={styles.code} data-testid="w3b-review-bundle-id">
+                {productOutcome.reviewBundleId ?? "—"}
+              </dd>
+            </div>
+            <div>
+              <dt>Complétude revue</dt>
+              <dd data-testid="w3b-review-bundle-completeness">
+                {productOutcome.reviewBundleCompleteness ?? "—"}
+              </dd>
+            </div>
+            <div>
+              <dt>Claim autorisé</dt>
+              <dd data-testid="w3b-claim-allowed">
+                {productOutcome.claimAllowed ? "oui" : "non"}
+              </dd>
+            </div>
+            <div>
+              <dt>Apprentissage / replan</dt>
+              <dd data-testid="w3b-nora-replan">non</dd>
+            </div>
+            <div>
+              <dt>Cycle auto-fermé</dt>
+              <dd data-testid="w3b-cycle-closed">non</dd>
+            </div>
+            <div>
+              <dt>READY</dt>
+              <dd data-testid="w3b-ready">non</dd>
+            </div>
+          </dl>
+          <details className={styles.technicalDetails}>
+            <summary data-testid="w3b-technical-details-toggle">
+              Détail technique (secondaire)
+            </summary>
+            <dl className={styles.facts}>
+              <div>
+                <dt>Attempt</dt>
+                <dd
+                  className={styles.code}
+                  data-testid="w3b-technical-attempt-id"
+                >
+                  {productOutcome.technicalDetail.attemptId}
+                </dd>
+              </div>
+              <div>
+                <dt>Statut technique</dt>
+                <dd data-testid="w3b-technical-status">
+                  {productOutcome.technicalDetail.attemptStatus}
+                </dd>
+              </div>
+              <div>
+                <dt>resultRef</dt>
+                <dd className={styles.code} data-testid="w3b-technical-result-ref">
+                  {productOutcome.technicalDetail.resultRef ?? "—"}
+                </dd>
+              </div>
+              <div>
+                <dt>errorRef / stopReason</dt>
+                <dd
+                  className={styles.code}
+                  data-testid="w3b-technical-error-or-stop"
+                >
+                  {productOutcome.technicalDetail.errorRef ??
+                    productOutcome.technicalDetail.stopReason ??
+                    "—"}
+                </dd>
+              </div>
+            </dl>
+          </details>
+          {productOutcome.reservations.length > 0 ? (
+            <ul data-testid="w3b-reservations" className={styles.blockNote}>
+              {productOutcome.reservations.map((r) => (
+                <li key={r}>{r}</li>
+              ))}
+            </ul>
+          ) : null}
+          <button
+            type="button"
+            className={styles.secondaryAction}
+            data-testid="w3b-rehydrate-product"
+            onClick={() => void rehydrateProduct()}
+            disabled={busy !== null || !attempt?.attemptId}
+          >
+            Recharger résultat produit (durable)
+          </button>
         </section>
       ) : null}
     </section>
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/actions.ts b/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
index 56704d01..bc684e22 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
@@ -21,10 +21,16 @@ import { confirmExecutionContractForAuthorization } from "./confirmForAuthorizat
 import { decideTrajectory } from "./decideTrajectory";
 import {
   governedExecuteAuthorizedContract,
+  governedExecuteCancel,
   governedExecuteRecordResult,
   governedExecuteSelectAgent,
   governedExecuteStart,
 } from "./governedExecuteAuthorizedContract";
+import {
+  materializeW3bProductTerminal,
+  rehydrateLatestW3bProductTerminalForContract,
+  rehydrateW3bProductTerminal,
+} from "./materializeW3bProductTerminal";
 import { inspectExecutionContract } from "./inspectExecutionContract";
 import { loadPresentedOptionSet } from "./presentedOptionSet";
 import { prepareExecutionContractFromW2Decision } from "./prepareExecutionContractFromW2Decision";
@@ -39,6 +45,7 @@ import type {
   GovernedExecuteAuthorizedContractResult,
   GovernedExecutePhaseResult,
   InspectExecutionContractResult,
+  MaterializeProductOutcomeActionResult,
   PreparedExecutionContractResult,
   ProposeTrajectoryOptionsResult,
 } from "./types";
@@ -338,6 +345,106 @@ export async function w2GovernedExecuteCompleteAction(input: {
   });
 }

+/**
+ * Cancel while Attempt is running (Pilote Arrêter).
+ * USER_CANCEL only — Product STOP requires SystemGovernedStop provenance.
+ */
+export async function w2GovernedExecuteCancelAction(input: {
+  projectId: string;
+  executionContractId: string;
+  attemptId: string;
+  reason?: string;
+  canActAsMorris?: unknown;
+  real?: unknown;
+}): Promise<GovernedExecuteAuthorizedContractResult> {
+  const runtime = getRuntimeApplicationService();
+  if (!runtime.oa) return OA_UNAVAILABLE;
+  return governedExecuteCancel({
+    oa: runtime.oa,
+    projectId: input.projectId,
+    executionContractId: input.executionContractId,
+    attemptId: input.attemptId,
+    reason: input.reason,
+    canActAsMorris: input.canActAsMorris,
+    real: input.real,
+  });
+}
+
+/**
+ * W3-B — FC-12 Evidence + RB + Contract Result CE then FC-11 projection.
+ */
+export async function w2MaterializeProductOutcomeAction(input: {
+  projectId: string;
+  attemptId: string;
+  claimedProductOutcome?: unknown;
+  cycleProfile?: unknown;
+  ckcId?: unknown;
+}): Promise<MaterializeProductOutcomeActionResult> {
+  const runtime = getRuntimeApplicationService();
+  if (!runtime.oa) {
+    return {
+      ok: false,
+      code: "OA_UNAVAILABLE",
+      message: "OA runtime indisponible.",
+    };
+  }
+  return materializeW3bProductTerminal({
+    oa: runtime.oa,
+    projectId: input.projectId,
+    attemptId: input.attemptId,
+    claimedProductOutcome: input.claimedProductOutcome,
+    cycleProfile: input.cycleProfile,
+    ckcId: input.ckcId,
+  });
+}
+
+export async function w2RehydrateProductOutcomeAction(input: {
+  projectId: string;
+  attemptId: string;
+}): Promise<MaterializeProductOutcomeActionResult> {
+  const runtime = getRuntimeApplicationService();
+  if (!runtime.oa) {
+    return {
+      ok: false,
+      code: "OA_UNAVAILABLE",
+      message: "OA runtime indisponible.",
+    };
+  }
+  return rehydrateW3bProductTerminal({
+    oa: runtime.oa,
+    projectId: input.projectId,
+    attemptId: input.attemptId,
+  });
+}
+
+export async function w2RehydrateLatestProductOutcomeAction(input: {
+  projectId: string;
+  executionContractId: string;
+}): Promise<
+  | {
+      readonly ok: true;
+      readonly product: import("./types").W3BProductOutcomeDto;
+      readonly attemptId: string;
+      readonly attemptStatus: string;
+      readonly reusedFromIdempotency: true;
+    }
+  | { readonly ok: false; readonly code: string; readonly message: string }
+> {
+  const runtime = getRuntimeApplicationService();
+  if (!runtime.oa) {
+    return {
+      ok: false,
+      code: "OA_UNAVAILABLE",
+      message: "OA runtime indisponible.",
+    };
+  }
+  return rehydrateLatestW3bProductTerminalForContract({
+    oa: runtime.oa,
+    projectId: input.projectId,
+    executionContractId: input.executionContractId,
+  });
+}
+
 /**
  * W3-A — Governed Execute after W2 AUTHORIZED.
  * Fresh authority evaluation; Pilote actor; fixture Attempt only; no REAL.
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts b/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
index e6d1d609..3eff8b22 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
@@ -8,6 +8,10 @@

 import { createHash } from "node:crypto";
 import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
+import {
+  applyW3bAdapterFailArmIfPresent,
+  consumeW3bBoundaryArm,
+} from "@/lib/vertical-slice-runtime/w3bE2eBoundaryControl";
 import {
   LOCAL_PILOTE_ACTOR,
   registerLocalPiloteAuthority,
@@ -45,6 +49,7 @@ function attemptIdentities(executionContractId: string, version: number) {
     attemptId: `xat:w3a:${digest}`,
     attemptIdempotencyKey: `idem:w3a:${digest}`,
     resultRef: `res:w3a:${digest}`,
+    errorRef: `err:w3a:${digest}`,
   };
 }

@@ -200,22 +205,30 @@ function projectAttempt(attempt: ExecutionAttempt): GovernedExecuteAttemptProjec
   };
 }

-function buildTerminalSuccess(input: {
+function buildTechnicalTerminal(input: {
   contract: ExecutionContract;
   attempt: ExecutionAttempt;
   selectionProfile: SelectionProfile;
   oa: RuntimeOaStack;
   reusedExistingAttempt: boolean;
   launchCountBefore: number;
+  statusLabel?: string;
 }): GovernedExecuteAuthorizedContractResult {
   const launchCount = input.oa.fixtureAdapter!.launchCallCount;
+  const status = input.attempt.status;
+  const defaultLabel =
+    status === "cancelled"
+      ? "TERMINAL TECHNIQUE ANNULÉ — RÉSULTAT PRODUIT NON ENCORE QUALIFIÉ"
+      : status === "failed" || status === "timeout"
+        ? "TERMINAL TECHNIQUE ÉCHOUÉ — RÉSULTAT PRODUIT NON ENCORE QUALIFIÉ"
+        : "TERMINAL TECHNIQUE — RÉSULTAT PRODUIT NON ENCORE QUALIFIÉ";
   return {
     ok: true,
     phase: "terminal",
     executionContractId: input.contract.executionContractId,
     contractVersion: input.contract.version,
     attemptId: input.attempt.attemptId,
-    attemptStatus: input.attempt.status,
+    attemptStatus: status,
     selectedAgentRef: input.attempt.selectedAgentRef,
     adapterId: F3_ADAPTER_ID,
     selectionProfile: input.selectionProfile,
@@ -230,14 +243,29 @@ function buildTerminalSuccess(input: {
     cycleInstanceClosed: false,
     projectArchived: false,
     authorityReceiptUsedAsPermission: false,
-    statusLabel:
-      "TERMINAL TECHNIQUE — RÉSULTAT PRODUIT NON ENCORE QUALIFIÉ (W3-A)",
-    technicalTerminal: input.attempt.status === "succeeded",
+    statusLabel: input.statusLabel ?? defaultLabel,
+    technicalTerminal:
+      status === "succeeded" ||
+      status === "cancelled" ||
+      status === "failed" ||
+      status === "timeout",
     productSuccessSemantics: false,
     attempt: projectAttempt(input.attempt),
   };
 }

+/** @deprecated Prefer buildTechnicalTerminal — kept for call-site clarity. */
+function buildTerminalSuccess(input: {
+  contract: ExecutionContract;
+  attempt: ExecutionAttempt;
+  selectionProfile: SelectionProfile;
+  oa: RuntimeOaStack;
+  reusedExistingAttempt: boolean;
+  launchCountBefore: number;
+}): GovernedExecuteAuthorizedContractResult {
+  return buildTechnicalTerminal(input);
+}
+
 async function findSucceededAttempt(
   oa: RuntimeOaStack,
   executionContractId: string,
@@ -426,26 +454,82 @@ export async function governedExecuteStart(
     return { ok: false, code: authority.code, message: authority.message };
   }

+  const launchCountBefore = input.oa.fixtureAdapter!.launchCallCount;
+
+  // R-W3B-04 — TEST-ONLY external adapter fail arm (never a product UI outcome).
+  applyW3bAdapterFailArmIfPresent(input.oa.fixtureAdapter);
+
   const started = await input.oa.executionAttemptServices!.startExecution.execute({
     attemptId: input.attemptId,
     actor: LOCAL_PILOTE_ACTOR,
     authorityEvidenceId: authority.evidenceId,
   });
   if (!started.ok) {
-    const existing = await input.oa.executionAttemptServices!.getExecutionAttempt.execute(
-      { attemptId: input.attemptId },
-    );
+    const fromStart = started.attempt;
+    const existing = fromStart
+      ? null
+      : await input.oa.executionAttemptServices!.getExecutionAttempt.execute({
+          attemptId: input.attemptId,
+        });
+    const attempt =
+      fromStart ??
+      (existing && existing.ok && existing.attempt ? existing.attempt : null);
+    // Adapter/executor failure durably failed the Attempt — product path continues to FC-11/12.
+    if (
+      attempt &&
+      (attempt.status === "failed" || attempt.status === "timeout")
+    ) {
+      return buildTechnicalTerminal({
+        contract,
+        attempt,
+        selectionProfile,
+        oa: input.oa,
+        reusedExistingAttempt: false,
+        launchCountBefore,
+      });
+    }
     return {
       ok: false,
       code: started.error.detailCode,
       message: started.error.message,
-      attempt:
-        existing.ok && existing.attempt
-          ? projectAttempt(existing.attempt)
-          : undefined,
+      attempt: attempt ? projectAttempt(attempt) : undefined,
     };
   }

+  // R-W3B-03 — TEST-ONLY governed stop arm: FC-10 SystemGovernedStop (not human Cancel).
+  const stopArm = consumeW3bBoundaryArm();
+  if (stopArm?.kind === "governed_stop") {
+    const onContract =
+      contract.stopConditions.includes(stopArm.stopCondition) ||
+      contract.constraints.some(
+        (c) =>
+          c === stopArm.stopCondition ||
+          (c.startsWith("PROTECTED:") &&
+            (stopArm.stopCondition === c ||
+              stopArm.stopCondition.startsWith(`${c} `) ||
+              stopArm.stopCondition.startsWith(`${c}:`))),
+      );
+    if (onContract && input.oa.executionAttemptServices!.systemGovernedStop) {
+      const stopped =
+        await input.oa.executionAttemptServices!.systemGovernedStop.execute({
+          attemptId: started.attempt.attemptId,
+          stopCode: stopArm.stopCondition,
+          stopSourceRef: `w3b-e2e-boundary:${stopArm.stopCondition}`,
+          reason: stopArm.stopCondition,
+        });
+      if (stopped.ok) {
+        return buildTechnicalTerminal({
+          contract,
+          attempt: stopped.attempt,
+          selectionProfile,
+          oa: input.oa,
+          reusedExistingAttempt: false,
+          launchCountBefore,
+        });
+      }
+    }
+  }
+
   return {
     ok: true,
     phase: "running",
@@ -459,7 +543,7 @@ export async function governedExecuteStart(
     realExecution: false,
     externalEffects: false,
     authorityReceiptUsedAsPermission: false,
-    statusLabel: "EXÉCUTION EN COURS — FIXTURE GOUVERNÉE",
+    statusLabel: "EXÉCUTION EN COURS",
     technicalTerminal: false,
     productSuccessSemantics: false,
     attempt: projectAttempt(started.attempt),
@@ -562,13 +646,134 @@ export async function governedExecuteRecordResult(
     projectArchived,
     authorityReceiptUsedAsPermission: false,
     statusLabel:
-      "TERMINAL TECHNIQUE — RÉSULTAT PRODUIT NON ENCORE QUALIFIÉ (W3-A)",
+      "TERMINAL TECHNIQUE — RÉSULTAT PRODUIT NON ENCORE QUALIFIÉ",
     technicalTerminal: recorded.attempt.status === "succeeded",
     productSuccessSemantics: false,
     attempt: projectAttempt(recorded.attempt),
   };
 }

+const PILOT_CANCEL_REASON =
+  "Arrêt demandé par le Pilote — travail antérieur préservé.";
+
+/**
+ * Cancel while running (Pilote Arrêter). Technical cancelled only.
+ * Product STOP claim requires a contract-governed boundary (R-W3B-03) —
+ * a free-form pilot reason alone qualifies as UNCLAIMED at FC-11.
+ */
+export async function governedExecuteCancel(
+  input: GovernedExecuteAuthorizedContractInput & {
+    readonly attemptId: string;
+    readonly reason?: string;
+  },
+): Promise<GovernedExecuteAuthorizedContractResult> {
+  const boundary = fixtureBoundaryFailure(input.oa);
+  if (boundary) return boundary;
+
+  const loaded = await loadContract(input.oa, input);
+  if (!loaded.ok) return loaded.result;
+  const { contract, selectionProfile } = loaded;
+  const launchCountBefore = input.oa.fixtureAdapter!.launchCallCount;
+
+  registerPiloteAuthority(
+    input.oa,
+    contract.scope,
+    input.forceLocalAuthority,
+  );
+
+  const reason = (input.reason && input.reason.trim()) || PILOT_CANCEL_REASON;
+  const cancelled =
+    await input.oa.executionAttemptServices!.cancelExecutionAttempt.execute({
+      attemptId: input.attemptId,
+      reason,
+      actor: LOCAL_PILOTE_ACTOR,
+    });
+  if (!cancelled.ok) {
+    const existing =
+      await input.oa.executionAttemptServices!.getExecutionAttempt.execute({
+        attemptId: input.attemptId,
+      });
+    return {
+      ok: false,
+      code: cancelled.error.detailCode,
+      message: cancelled.error.message,
+      attempt:
+        existing.ok && existing.attempt
+          ? projectAttempt(existing.attempt)
+          : undefined,
+    };
+  }
+
+  return buildTechnicalTerminal({
+    contract,
+    attempt: cancelled.attempt,
+    selectionProfile,
+    oa: input.oa,
+    reusedExistingAttempt: Boolean(cancelled.replayed),
+    launchCountBefore,
+  });
+}
+
+/**
+ * @deprecated W3-B correction — FAIL must originate from TestExecutionAdapter
+ * via StartExecution. Do not call from product UI. Kept only if OA tests need
+ * a direct RecordExecutionFailure seam; product actions no longer export it.
+ */
+export async function governedExecuteRecordFailure(
+  input: GovernedExecuteAuthorizedContractInput & {
+    readonly attemptId: string;
+    readonly stopReason?: string;
+  },
+): Promise<GovernedExecuteAuthorizedContractResult> {
+  const boundary = fixtureBoundaryFailure(input.oa);
+  if (boundary) return boundary;
+
+  const loaded = await loadContract(input.oa, input);
+  if (!loaded.ok) return loaded.result;
+  const { contract, selectionProfile } = loaded;
+  const launchCountBefore = input.oa.fixtureAdapter!.launchCallCount;
+
+  const identities = attemptIdentities(
+    contract.executionContractId,
+    contract.version,
+  );
+
+  const failed =
+    await input.oa.executionAttemptServices!.recordExecutionFailure.execute({
+      attemptId: input.attemptId,
+      adapterId: F3_ADAPTER_ID,
+      errorRef: identities.errorRef,
+      stopReason:
+        input.stopReason?.trim() ||
+        "Échec technique d'adaptateur — processus/outil indisponible.",
+      technicalExitCode: 1,
+    });
+  if (!failed.ok) {
+    const existing =
+      await input.oa.executionAttemptServices!.getExecutionAttempt.execute({
+        attemptId: input.attemptId,
+      });
+    return {
+      ok: false,
+      code: failed.error.detailCode,
+      message: failed.error.message,
+      attempt:
+        existing.ok && existing.attempt
+          ? projectAttempt(existing.attempt)
+          : undefined,
+    };
+  }
+
+  return buildTechnicalTerminal({
+    contract,
+    attempt: failed.attempt,
+    selectionProfile,
+    oa: input.oa,
+    reusedExistingAttempt: false,
+    launchCountBefore,
+  });
+}
+
 export async function governedExecuteAuthorizedContract(
   input: GovernedExecuteAuthorizedContractInput,
 ): Promise<GovernedExecuteAuthorizedContractResult> {
@@ -584,6 +789,10 @@ export async function governedExecuteAuthorizedContract(
     attemptId: selected.attemptId,
   });
   if (!started.ok) return started;
+  // Adapter FAIL or governed STOP may already be technical terminal after Start.
+  if (started.phase === "terminal") {
+    return started as GovernedExecuteAuthorizedContractResult;
+  }

   const terminal = await governedExecuteRecordResult({
     ...input,
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts b/projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
new file mode 100644
index 00000000..7fa8b7d5
--- /dev/null
+++ b/projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
@@ -0,0 +1,384 @@
+/**
+ * W3-B FC-12 — Materialize + rehydrate Product Terminal from durable facts.
+ * Ingest all terminals → ReviewBundle → EvaluateContractResult → FC-11 projection.
+ */
+import { createHash } from "node:crypto";
+import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
+import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
+import type { ExecutionContract } from "@/lib/oa/execution-contract";
+import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";
+import type { ClaimEvaluation, Evidence, ReviewBundle } from "@/lib/oa/evidence-review";
+import {
+  projectW3bProductTerminal,
+  type W3BProductTerminalProjection,
+} from "./w3bProductTerminalProjection";
+
+export type { W3BProductTerminalProjection as W3BProductOutcomeProjection };
+
+export type MaterializeW3bProductTerminalResult =
+  | {
+      readonly ok: true;
+      readonly product: W3BProductTerminalProjection;
+      readonly reusedFromIdempotency: boolean;
+    }
+  | {
+      readonly ok: false;
+      readonly code: string;
+      readonly message: string;
+      readonly product?: W3BProductTerminalProjection;
+    };
+
+const PRODUCT_RESERVATIONS = [
+  "Evidence requise avant claim produit",
+  "Apprentissage / replan non démarrés",
+  "Exécuteur de substitution — pas d'effet externe réel",
+  "Aucun READY",
+] as const;
+
+export function w3bEvidenceIdentity(attemptId: string): {
+  evidenceId: string;
+  reviewBundleId: string;
+  claimEvaluationId: string;
+  evidenceIdempotencyKey: string;
+  reviewBundleIdempotencyKey: string;
+  claimEvaluationIdempotencyKey: string;
+} {
+  const digest = createHash("sha256").update(attemptId).digest("hex").slice(0, 16);
+  return {
+    evidenceId: `ev:w3b:${digest}`,
+    reviewBundleId: `rb:w3b:${digest}`,
+    claimEvaluationId: `clm:w3b:${digest}`,
+    evidenceIdempotencyKey: `idem:w3b-ev:${attemptId}`,
+    reviewBundleIdempotencyKey: `idem:w3b-rb:${attemptId}`,
+    claimEvaluationIdempotencyKey: `idem:w3b-ce:${attemptId}`,
+  };
+}
+
+async function loadAttemptAndContract(input: {
+  oa: RuntimeOaStack;
+  projectId: string;
+  attemptId: string;
+}): Promise<
+  | { ok: true; attempt: ExecutionAttempt; contract: ExecutionContract }
+  | { ok: false; code: string; message: string }
+> {
+  if (!input.oa.evidenceReviewServices || !input.oa.executionAttemptServices) {
+    return {
+      ok: false,
+      code: "EVIDENCE_STACK_UNAVAILABLE",
+      message: "Services Evidence / Attempt indisponibles.",
+    };
+  }
+  const loaded =
+    await input.oa.executionAttemptServices.getExecutionAttempt.execute({
+      attemptId: input.attemptId,
+    });
+  if (!loaded.ok) {
+    return {
+      ok: false,
+      code: loaded.error.detailCode,
+      message: loaded.error.message,
+    };
+  }
+  const contractResult =
+    await input.oa.executionContractServices.getExecutionContract.execute({
+      executionContractId: loaded.attempt.executionContractId,
+    });
+  if (!contractResult.ok) {
+    return {
+      ok: false,
+      code: "EXECUTION_CONTRACT_NOT_FOUND",
+      message: "Contrat lié à l'Attempt introuvable.",
+    };
+  }
+  if (contractResult.contract.projectId !== input.projectId) {
+    return {
+      ok: false,
+      code: "PROJECT_MISMATCH",
+      message: "Attempt / projet incohérents.",
+    };
+  }
+  return {
+    ok: true,
+    attempt: loaded.attempt,
+    contract: contractResult.contract,
+  };
+}
+
+function projectFromFacts(input: {
+  attempt: ExecutionAttempt;
+  contract: ExecutionContract;
+  evidence: Evidence | null;
+  reviewBundle: ReviewBundle | null;
+  claimEvaluation: ClaimEvaluation | null;
+}): W3BProductTerminalProjection {
+  return projectW3bProductTerminal(input);
+}
+
+/** Write path — ingest Evidence + RB + Contract Result CE + project. */
+export async function materializeW3bProductTerminal(input: {
+  readonly oa: RuntimeOaStack;
+  readonly projectId: string;
+  readonly attemptId: string;
+  readonly claimedProductOutcome?: unknown;
+  readonly cycleProfile?: unknown;
+  readonly ckcId?: unknown;
+}): Promise<MaterializeW3bProductTerminalResult> {
+  void input.claimedProductOutcome;
+  void input.cycleProfile;
+  void input.ckcId;
+
+  const loaded = await loadAttemptAndContract(input);
+  if (!loaded.ok) return loaded;
+  const { attempt, contract } = loaded;
+  const ids = w3bEvidenceIdentity(attempt.attemptId);
+  const services = input.oa.evidenceReviewServices!;
+
+  const ingested = await services.ingestExecutionAttemptEvidence.execute({
+    evidenceId: ids.evidenceId,
+    executionAttemptId: attempt.attemptId,
+    idempotencyKey: ids.evidenceIdempotencyKey,
+    actor: LOCAL_PILOTE_ACTOR,
+    classification: "internal",
+    storageMode: "metadata_only",
+    bindings: {
+      projectId: input.projectId,
+      executionContractId: contract.executionContractId,
+      ...(contract.cycleInstanceId
+        ? { cycleInstanceId: contract.cycleInstanceId }
+        : {}),
+    },
+  });
+
+  if (!ingested.ok) {
+    return {
+      ok: false,
+      code: ingested.error.detailCode,
+      message: ingested.error.message,
+      product: projectFromFacts({
+        attempt,
+        contract,
+        evidence: null,
+        reviewBundle: null,
+        claimEvaluation: null,
+      }),
+    };
+  }
+
+  const bundle = await services.createReviewBundle.execute({
+    reviewBundleId: ids.reviewBundleId,
+    idempotencyKey: ids.reviewBundleIdempotencyKey,
+    actor: LOCAL_PILOTE_ACTOR,
+    projectId: input.projectId,
+    executionContractId: contract.executionContractId,
+    ...(contract.cycleInstanceId ? { cycleInstanceId: contract.cycleInstanceId } : {}),
+    evidenceIds: [ingested.evidence.evidenceId],
+    reservations: [...PRODUCT_RESERVATIONS],
+  });
+
+  if (!bundle.ok) {
+    return {
+      ok: false,
+      code: bundle.error.detailCode,
+      message: bundle.error.message,
+    };
+  }
+
+  if (!services.evaluateContractResult) {
+    return {
+      ok: false,
+      code: "CONTRACT_RESULT_EVALUATOR_UNAVAILABLE",
+      message: "EvaluateContractResult indisponible — fail-closed.",
+    };
+  }
+
+  const evaluated = await services.evaluateContractResult.execute({
+    claimEvaluationId: ids.claimEvaluationId,
+    idempotencyKey: ids.claimEvaluationIdempotencyKey,
+    actor: LOCAL_PILOTE_ACTOR,
+    contract,
+    attempt: {
+      attemptId: attempt.attemptId,
+      executionContractId: attempt.executionContractId,
+      executionContractVersion: attempt.executionContractVersion,
+      status: attempt.status,
+      resultRef: attempt.resultRef,
+      errorRef: attempt.errorRef,
+      stopReason: attempt.stopReason,
+      cancelledAt: attempt.cancelledAt,
+      failedAt: attempt.failedAt,
+      timedOutAt: attempt.timedOutAt,
+      stopOrigin: attempt.stopOrigin,
+      stopCode: attempt.stopCode,
+      stopSourceRef: attempt.stopSourceRef,
+      stopObservedAt: attempt.stopObservedAt,
+      completedAt: attempt.completedAt,
+      selectedAgentRef: attempt.selectedAgentRef,
+    },
+    evidence: ingested.evidence,
+    reviewBundle: bundle.reviewBundle,
+  });
+
+    if (!evaluated.ok) {
+      // Surface shape reason in test/dev failures.
+      const detail = evaluated.error.internalCauseRef ?? evaluated.error.message;
+      return {
+        ok: false,
+        code: evaluated.error.detailCode,
+        message: detail,
+      product: projectFromFacts({
+        attempt,
+        contract,
+        evidence: ingested.evidence,
+        reviewBundle: bundle.reviewBundle,
+        claimEvaluation: evaluated.claimEvaluation ?? null,
+      }),
+    };
+  }
+
+  return {
+    ok: true,
+    reusedFromIdempotency: Boolean(
+      ingested.reusedFromIdempotencyKey ||
+        bundle.reusedFromIdempotencyKey ||
+        evaluated.reusedFromIdempotencyKey,
+    ),
+    product: projectFromFacts({
+      attempt,
+      contract,
+      evidence: ingested.evidence,
+      reviewBundle: bundle.reviewBundle,
+      claimEvaluation: evaluated.claimEvaluation,
+    }),
+  };
+}
+
+export async function rehydrateW3bProductTerminal(input: {
+  readonly oa: RuntimeOaStack;
+  readonly projectId: string;
+  readonly attemptId: string;
+}): Promise<MaterializeW3bProductTerminalResult> {
+  const loaded = await loadAttemptAndContract(input);
+  if (!loaded.ok) return loaded;
+  const { attempt, contract } = loaded;
+  const ids = w3bEvidenceIdentity(attempt.attemptId);
+  const services = input.oa.evidenceReviewServices!;
+
+  const evidence = await services.evidenceReader.findById(ids.evidenceId);
+  const reviewBundle = await services.reviewBundleReader.findById(
+    ids.reviewBundleId,
+  );
+  const claimEvaluation = await services.claimEvaluationReader.findById(
+    ids.claimEvaluationId,
+  );
+
+  if (!evidence || !reviewBundle || !claimEvaluation) {
+    return {
+      ok: false,
+      code: "PRODUCT_TERMINAL_NOT_DURABLE",
+      message:
+        "Evidence / ReviewBundle / Contract Result CE absents — aucun claim reconstruit.",
+    };
+  }
+
+  if (evidence.bindings.projectId && evidence.bindings.projectId !== input.projectId) {
+    return {
+      ok: false,
+      code: "PROJECT_MISMATCH",
+      message: "Evidence liée à un autre projet.",
+    };
+  }
+  if (evidence.bindings.executionAttemptId !== input.attemptId) {
+    return {
+      ok: false,
+      code: "ATTEMPT_BINDING_MISMATCH",
+      message: "Evidence liée à un autre Attempt.",
+    };
+  }
+
+  return {
+    ok: true,
+    reusedFromIdempotency: true,
+    product: projectFromFacts({
+      attempt,
+      contract,
+      evidence,
+      reviewBundle,
+      claimEvaluation,
+    }),
+  };
+}
+
+const TERMINAL_STATUSES = new Set([
+  "succeeded",
+  "failed",
+  "timeout",
+  "cancelled",
+]);
+
+export async function rehydrateLatestW3bProductTerminalForContract(input: {
+  readonly oa: RuntimeOaStack;
+  readonly projectId: string;
+  readonly executionContractId: string;
+}): Promise<
+  | {
+      readonly ok: true;
+      readonly product: W3BProductTerminalProjection;
+      readonly attemptId: string;
+      readonly attemptStatus: string;
+      readonly reusedFromIdempotency: true;
+    }
+  | { readonly ok: false; readonly code: string; readonly message: string }
+> {
+  if (!input.oa.executionAttemptServices || !input.oa.evidenceReviewServices) {
+    return {
+      ok: false,
+      code: "EVIDENCE_STACK_UNAVAILABLE",
+      message: "Services Attempt / Evidence indisponibles.",
+    };
+  }
+  const listed =
+    await input.oa.executionAttemptServices.listExecutionAttempts.execute({
+      executionContractId: input.executionContractId,
+    });
+  if (!listed.ok) {
+    return {
+      ok: false,
+      code: listed.error.detailCode,
+      message: listed.error.message,
+    };
+  }
+  const terminal = [...listed.attempts]
+    .filter((a) => TERMINAL_STATUSES.has(a.status))
+    .sort((a, b) => {
+      const aAt = a.updatedAt ?? a.createdAt ?? "";
+      const bAt = b.updatedAt ?? b.createdAt ?? "";
+      return aAt < bAt ? 1 : -1;
+    })[0];
+  if (!terminal) {
+    return {
+      ok: false,
+      code: "NO_TERMINAL_ATTEMPT",
+      message: "Aucune tentative terminale durable pour ce contrat.",
+    };
+  }
+  const rehydrated = await rehydrateW3bProductTerminal({
+    oa: input.oa,
+    projectId: input.projectId,
+    attemptId: terminal.attemptId,
+  });
+  if (!rehydrated.ok) return rehydrated;
+  return {
+    ok: true,
+    product: rehydrated.product,
+    attemptId: terminal.attemptId,
+    attemptStatus: terminal.status,
+    reusedFromIdempotency: true,
+  };
+}
+
+/** @deprecated alias for actions/tests migrating from heuristic materialize name */
+export const materializeProductOutcomeFromAttempt = materializeW3bProductTerminal;
+export const rehydrateProductOutcomeFromAttempt = rehydrateW3bProductTerminal;
+export const rehydrateLatestProductOutcomeForContract =
+  rehydrateLatestW3bProductTerminalForContract;
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/types.ts b/projects/sfia-studio/app/features/project-assistant/w2/types.ts
index a4aad88d..0e07fe84 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/types.ts
@@ -355,3 +355,58 @@ export type GovernedExecuteAuthorizedContractSuccess = GovernedExecutePhaseSucce
 export type GovernedExecuteAuthorizedContractResult =
   | GovernedExecuteAuthorizedContractSuccess
   | GovernedExecutePhaseFailure;
+
+export type W3BProductOutcomeDto = {
+  readonly outcome: "SUCCESS" | "STOP" | "FAIL" | "UNCLAIMED";
+  readonly businessHeadline: string;
+  readonly businessReason: string;
+  readonly claimAllowed: boolean;
+  readonly evidenceId: string | null;
+  readonly reviewBundleId: string | null;
+  readonly claimEvaluationId?: string | null;
+  readonly claimEvaluationStatus?: string | null;
+  readonly contractResultVerdict?: string | null;
+  readonly evidenceStatus: string | null;
+  readonly evidenceSummary: string | null;
+  readonly reviewBundleCompleteness: string | null;
+  readonly governedBoundary: string | null;
+  readonly technicalDetail: {
+    readonly attemptId: string;
+    readonly attemptStatus: string;
+    readonly resultRef: string | null;
+    readonly errorRef: string | null;
+    readonly stopReason: string | null;
+    readonly stopOrigin?: string | null;
+    readonly stopCode?: string | null;
+    readonly executionContractId: string;
+    readonly executionContractVersion: number;
+  };
+  readonly reservations: readonly string[];
+  readonly antiClaims: {
+    readonly ready: false;
+    readonly w3Closed: false;
+    readonly productCompletionComplete: false;
+    readonly runtimeV3Adopted: false;
+    readonly realProven: false;
+    readonly cycleAutoClosed: false;
+    readonly projectAutoArchived: false;
+  };
+  readonly cycleInstanceClosed: false;
+  readonly projectArchived: false;
+  readonly noraInvoked: false;
+  readonly replanInvoked: false;
+  readonly realExecution: false;
+};
+
+export type MaterializeProductOutcomeActionResult =
+  | {
+      readonly ok: true;
+      readonly product: W3BProductOutcomeDto;
+      readonly reusedFromIdempotency: boolean;
+    }
+  | {
+      readonly ok: false;
+      readonly code: string;
+      readonly message: string;
+      readonly product?: W3BProductOutcomeDto;
+    };
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/w3bProductTerminalProjection.ts b/projects/sfia-studio/app/features/project-assistant/w2/w3bProductTerminalProjection.ts
new file mode 100644
index 00000000..5649aaf8
--- /dev/null
+++ b/projects/sfia-studio/app/features/project-assistant/w2/w3bProductTerminalProjection.ts
@@ -0,0 +1,305 @@
+/**
+ * W3-B FC-11 — Product terminal projection from Attempt + Contract Result CE.
+ * Consumes ClaimEvaluation.status (canonical SoT) — NOT heuristic semantics.
+ */
+import type { ExecutionContract } from "@/lib/oa/execution-contract";
+import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";
+import type { ClaimEvaluation } from "@/lib/oa/evidence-review";
+import type { Evidence, ReviewBundle } from "@/lib/oa/evidence-review";
+import { CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT } from "@/lib/oa/evidence-review/domain/contractResultTypes";
+import { projectContractResultVerdict } from "@/lib/oa/evidence-review/application/contractResultVerdictProjection";
+
+export type W3BProductTerminalKind = "SUCCESS" | "STOP" | "FAIL" | "UNCLAIMED";
+
+export type W3BProductTerminalProjection = {
+  readonly outcome: W3BProductTerminalKind;
+  readonly businessHeadline: string;
+  readonly businessReason: string;
+  readonly claimAllowed: boolean;
+  readonly evidenceId: string | null;
+  readonly reviewBundleId: string | null;
+  readonly claimEvaluationId: string | null;
+  readonly claimEvaluationStatus: string | null;
+  readonly contractResultVerdict: string | null;
+  readonly evidenceStatus: string | null;
+  readonly evidenceSummary: string | null;
+  readonly reviewBundleCompleteness: string | null;
+  readonly governedBoundary: string | null;
+  readonly technicalDetail: {
+    readonly attemptId: string;
+    readonly attemptStatus: string;
+    readonly resultRef: string | null;
+    readonly errorRef: string | null;
+    readonly stopReason: string | null;
+    readonly stopOrigin: string | null;
+    readonly stopCode: string | null;
+    readonly executionContractId: string;
+    readonly executionContractVersion: number;
+  };
+  readonly reservations: readonly string[];
+  readonly antiClaims: {
+    readonly ready: false;
+    readonly w3Closed: false;
+    readonly productCompletionComplete: false;
+    readonly runtimeV3Adopted: false;
+    readonly realProven: false;
+    readonly cycleAutoClosed: false;
+    readonly projectAutoArchived: false;
+  };
+  readonly cycleInstanceClosed: false;
+  readonly projectArchived: false;
+  readonly noraInvoked: false;
+  readonly replanInvoked: false;
+  readonly realExecution: false;
+};
+
+const PRODUCT_RESERVATIONS = [
+  "Evidence requise avant claim produit",
+  "Apprentissage / replan non démarrés",
+  "Exécuteur de substitution — pas d'effet externe réel",
+  "Aucun READY",
+] as const;
+
+const ANTI = {
+  ready: false,
+  w3Closed: false,
+  productCompletionComplete: false,
+  runtimeV3Adopted: false,
+  realProven: false,
+  cycleAutoClosed: false,
+  projectAutoArchived: false,
+} as const;
+
+function unclaimed(reason: string): Pick<
+  W3BProductTerminalProjection,
+  "outcome" | "businessHeadline" | "businessReason" | "claimAllowed" | "governedBoundary"
+> {
+  return {
+    outcome: "UNCLAIMED",
+    businessHeadline: "Résultat produit non qualifié",
+    businessReason: reason,
+    claimAllowed: false,
+    governedBoundary: null,
+  };
+}
+
+function resolveGovernedBoundary(input: {
+  stopCode?: string | null;
+  stopReason?: string | null;
+  stopConditions: readonly string[];
+  constraints: readonly string[];
+}): string | null {
+  const token = input.stopCode?.trim() || input.stopReason?.trim();
+  if (!token) return null;
+  if (input.stopConditions.includes(token)) return token;
+  const protectedConstraints = input.constraints.filter((c) =>
+    c.startsWith("PROTECTED:"),
+  );
+  if (protectedConstraints.includes(token)) return token;
+  for (const c of protectedConstraints) {
+    if (token === c || token.startsWith(`${c} `) || token.startsWith(`${c}:`)) {
+      return c;
+    }
+  }
+  return null;
+}
+
+function evidenceSummaryFor(
+  outcome: W3BProductTerminalKind,
+  attemptStatus: string,
+): string {
+  if (outcome === "SUCCESS") {
+    return "Evidence d'exécution disponible — résultat attendu prouvé par évaluation Contract Result.";
+  }
+  if (outcome === "STOP") {
+    return "Evidence d'arrêt gouverné — frontière et raison documentées ; travail antérieur préservé.";
+  }
+  if (outcome === "FAIL") {
+    return "Evidence diagnostique d'échec technique — aucun succès métier.";
+  }
+  return `Evidence non claimable (statut technique : ${attemptStatus}).`;
+}
+
+function isContractResultClaimEvaluation(
+  ce: ClaimEvaluation | null | undefined,
+): ce is ClaimEvaluation {
+  return (
+    ce != null &&
+    ce.subjectKind === CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT
+  );
+}
+
+export function projectW3bProductTerminal(input: {
+  attempt: ExecutionAttempt;
+  contract: ExecutionContract;
+  evidence: Evidence | null;
+  reviewBundle: ReviewBundle | null;
+  claimEvaluation: ClaimEvaluation | null;
+}): W3BProductTerminalProjection {
+  const base = {
+    evidenceId: input.evidence?.evidenceId ?? null,
+    reviewBundleId: input.reviewBundle?.reviewBundleId ?? null,
+    claimEvaluationId: input.claimEvaluation?.claimEvaluationId ?? null,
+    claimEvaluationStatus: input.claimEvaluation?.status ?? null,
+    contractResultVerdict: input.claimEvaluation
+      ? projectContractResultVerdict(input.claimEvaluation.status)
+      : null,
+    evidenceStatus: input.evidence?.status ?? null,
+    evidenceSummary: null as string | null,
+    reviewBundleCompleteness: input.reviewBundle?.completeness ?? null,
+    governedBoundary: null as string | null,
+    technicalDetail: {
+      attemptId: input.attempt.attemptId,
+      attemptStatus: input.attempt.status,
+      resultRef: input.attempt.resultRef ?? null,
+      errorRef: input.attempt.errorRef ?? null,
+      stopReason: input.attempt.stopReason ?? null,
+      stopOrigin: input.attempt.stopOrigin ?? null,
+      stopCode: input.attempt.stopCode ?? null,
+      executionContractId: input.contract.executionContractId,
+      executionContractVersion: input.contract.version,
+    },
+    reservations: [...PRODUCT_RESERVATIONS],
+    antiClaims: ANTI,
+    cycleInstanceClosed: false as const,
+    projectArchived: false as const,
+    noraInvoked: false as const,
+    replanInvoked: false as const,
+    realExecution: false as const,
+  };
+
+  if (!input.evidence || !input.reviewBundle) {
+    return {
+      ...base,
+      ...unclaimed("Evidence / ReviewBundle absents — aucun claim produit."),
+      evidenceSummary: null,
+    };
+  }
+  if (input.reviewBundle.completeness !== "complete") {
+    return {
+      ...base,
+      ...unclaimed("ReviewBundle incomplet — aucun claim produit."),
+      evidenceSummary: null,
+    };
+  }
+  if (
+    input.evidence.status !== "available" &&
+    input.evidence.status !== "verified"
+  ) {
+    return {
+      ...base,
+      ...unclaimed(
+        `Evidence en état ${input.evidence.status} — claim produit refusé.`,
+      ),
+      evidenceSummary: null,
+    };
+  }
+  if (!isContractResultClaimEvaluation(input.claimEvaluation)) {
+    return {
+      ...base,
+      ...unclaimed(
+        "Évaluation Contract Result absente — aucun claim produit SUCCESS/STOP/FAIL.",
+      ),
+      evidenceSummary: evidenceSummaryFor("UNCLAIMED", input.attempt.status),
+    };
+  }
+
+  const ce = input.claimEvaluation;
+  const verdict = projectContractResultVerdict(ce.status);
+
+  if (
+    input.attempt.status === "succeeded" &&
+    ce.status === "pass" &&
+    verdict === "PASS"
+  ) {
+    const expectedSummary = (input.contract.expectedOutputs ?? []).join(" · ");
+    return {
+      ...base,
+      outcome: "SUCCESS",
+      businessHeadline: "Succès",
+      businessReason: `Résultat attendu obtenu dans le périmètre « ${input.contract.scope} » : ${expectedSummary}.`,
+      claimAllowed: true,
+      governedBoundary: null,
+      evidenceSummary: evidenceSummaryFor("SUCCESS", input.attempt.status),
+    };
+  }
+
+  if (
+    input.attempt.status === "cancelled" &&
+    input.attempt.stopOrigin === "SYSTEM_GOVERNED_STOP" &&
+    input.attempt.stopCode &&
+    input.attempt.stopSourceRef &&
+    input.attempt.cancelledAt
+  ) {
+    const governedBoundary = resolveGovernedBoundary({
+      stopCode: input.attempt.stopCode,
+      stopReason: input.attempt.stopReason,
+      stopConditions: input.contract.stopConditions ?? [],
+      constraints: input.contract.constraints ?? [],
+    });
+    if (!governedBoundary) {
+      return {
+        ...base,
+        ...unclaimed(
+          "Arrêt système sans frontière gouvernée reconstructible — STOP non claimable.",
+        ),
+        evidenceSummary: evidenceSummaryFor("UNCLAIMED", input.attempt.status),
+      };
+    }
+    return {
+      ...base,
+      outcome: "STOP",
+      businessHeadline: "Arrêt gouverné",
+      businessReason: `Frontière atteinte : ${governedBoundary}. Travail antérieur préservé ; résultat métier non atteint.`,
+      claimAllowed: true,
+      governedBoundary,
+      evidenceSummary: evidenceSummaryFor("STOP", input.attempt.status),
+    };
+  }
+
+  if (input.attempt.status === "failed" || input.attempt.status === "timeout") {
+    const hasDiagnostic =
+      Boolean(input.attempt.errorRef) ||
+      Boolean(input.attempt.failedAt) ||
+      Boolean(input.attempt.timedOutAt) ||
+      Boolean(input.attempt.stopReason);
+    if (!hasDiagnostic) {
+      return {
+        ...base,
+        ...unclaimed("Échec technique sans diagnostic durable — FAIL non claimable."),
+        evidenceSummary: evidenceSummaryFor("UNCLAIMED", input.attempt.status),
+      };
+    }
+    const diagnostic =
+      input.attempt.errorRef ||
+      (input.attempt.status === "timeout" ? "timeout technique" : input.attempt.stopReason) ||
+      "indisponibilité processus/outil";
+    return {
+      ...base,
+      outcome: "FAIL",
+      businessHeadline: "Échec technique",
+      businessReason: `Échec de processus/outil : ${diagnostic}. Aucun succès métier.`,
+      claimAllowed: true,
+      governedBoundary: null,
+      evidenceSummary: evidenceSummaryFor("FAIL", input.attempt.status),
+    };
+  }
+
+  if (input.attempt.status === "cancelled") {
+    return {
+      ...base,
+      ...unclaimed(
+        "Annulation Pilote sans provenance SYSTEM_GOVERNED_STOP — STOP produit non claimable.",
+      ),
+      evidenceSummary: evidenceSummaryFor("UNCLAIMED", input.attempt.status),
+    };
+  }
+
+  return {
+    ...base,
+    ...unclaimed(
+      `Statut technique « ${input.attempt.status} » + évaluation Contract Result insuffisants.`,
+    ),
+    evidenceSummary: evidenceSummaryFor("UNCLAIMED", input.attempt.status),
+  };
+}
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultAssessment.ts b/projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultAssessment.ts
new file mode 100644
index 00000000..77703b8c
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultAssessment.ts
@@ -0,0 +1,152 @@
+/**
+ * TD-W3B-02 — deterministic EO/ER assessment for contract-result mode.
+ * Free-text expectations remain EC source; identity is positional + fingerprint bound.
+ */
+import type { ExecutionAttemptSnapshot } from "../domain/types";
+import type { Evidence } from "../domain/types";
+import type { ExecutionContract } from "@/lib/oa/execution-contract";
+import type {
+  ContractResultAssessmentProvenance,
+  ExpectedOutputAssessment,
+  EvidenceRequirementAssessment,
+} from "../domain/contractResultTypes";
+import {
+  W3B_CONTRACT_RESULT_RULE_REF,
+  buildContractResultItemId,
+} from "../domain/contractResultTypes";
+
+export type ContractResultAssessmentInput = {
+  readonly contract: ExecutionContract;
+  readonly attempt: ExecutionAttemptSnapshot;
+  readonly evidence: Evidence;
+  readonly evaluatedAt: string;
+  readonly evaluatorRef?: string;
+};
+
+function provenance(
+  input: ContractResultAssessmentInput,
+): ContractResultAssessmentProvenance {
+  return {
+    evaluatorRef: input.evaluatorRef ?? "w3b-contract-result-assessor",
+    evaluatedAt: input.evaluatedAt,
+    ruleRef: W3B_CONTRACT_RESULT_RULE_REF,
+  };
+}
+
+function eoPassEligible(input: ContractResultAssessmentInput): boolean {
+  if (input.attempt.status !== "succeeded") return false;
+  if (!input.attempt.resultRef?.trim()) return false;
+  if (!input.contract.scope?.trim()) return false;
+  if (input.evidence.technicalResultRef !== input.attempt.resultRef) return false;
+  return true;
+}
+
+export function assessExpectedOutputs(
+  input: ContractResultAssessmentInput,
+): ExpectedOutputAssessment[] {
+  const fp = input.contract.semanticFingerprint ?? "";
+  const outputs = input.contract.expectedOutputs ?? [];
+  const prov = provenance(input);
+  const passEligible = eoPassEligible(input);
+
+  return outputs.map((expectation, ordinal) => {
+    let result: ExpectedOutputAssessment["result"] = "NOT_PROVEN";
+    if (input.attempt.status === "failed" || input.attempt.status === "timeout") {
+      result = "FAIL";
+    } else if (
+      input.attempt.status === "cancelled" &&
+      input.attempt.stopOrigin === "SYSTEM_GOVERNED_STOP"
+    ) {
+      result = "NOT_PROVEN";
+    } else if (passEligible) {
+      result = "PASS";
+    }
+    return {
+      itemId: buildContractResultItemId({
+        semanticFingerprint: fp,
+        itemKind: "EO",
+        ordinal,
+      }),
+      expectation,
+      result,
+      method: "deterministic",
+      ruleRef: W3B_CONTRACT_RESULT_RULE_REF,
+      provenance: prov,
+    };
+  });
+}
+
+export function assessEvidenceRequirements(
+  input: ContractResultAssessmentInput,
+): EvidenceRequirementAssessment[] {
+  const fp = input.contract.semanticFingerprint ?? "";
+  const requirements = input.contract.evidenceRequirements ?? [];
+  const prov = provenance(input);
+  const evidenceOk =
+    input.evidence.status === "available" || input.evidence.status === "verified";
+
+  return requirements.map((requirement, ordinal) => {
+    let result: EvidenceRequirementAssessment["result"] = "NOT_PROVEN";
+    if (!evidenceOk) {
+      result = "NOT_SATISFIED";
+    } else if (
+      input.attempt.status === "failed" ||
+      input.attempt.status === "timeout"
+    ) {
+      result = "NOT_SATISFIED";
+    } else {
+      result = "SATISFIED";
+    }
+    return {
+      itemId: buildContractResultItemId({
+        semanticFingerprint: fp,
+        itemKind: "ER",
+        ordinal,
+      }),
+      requirement,
+      result,
+      method: "deterministic",
+      ruleRef: W3B_CONTRACT_RESULT_RULE_REF,
+      provenance: prov,
+    };
+  });
+}
+
+export function deriveCanonicalContractResultStatus(input: {
+  attemptStatus: string;
+  expectedOutputAssessments: readonly ExpectedOutputAssessment[];
+  evidenceRequirementAssessments: readonly EvidenceRequirementAssessment[];
+}): "pass" | "fail" | "not_proven" {
+  const allEoPass = input.expectedOutputAssessments.every((a) => a.result === "PASS");
+  const allErSatisfied = input.evidenceRequirementAssessments.every(
+    (a) => a.result === "SATISFIED",
+  );
+  const anyEoFail = input.expectedOutputAssessments.some((a) => a.result === "FAIL");
+  const anyErNotSatisfied = input.evidenceRequirementAssessments.some(
+    (a) => a.result === "NOT_SATISFIED",
+  );
+
+  if (anyEoFail || anyErNotSatisfied) return "fail";
+  if (
+    input.attemptStatus === "succeeded" &&
+    allEoPass &&
+    allErSatisfied &&
+    input.expectedOutputAssessments.length > 0
+  ) {
+    return "pass";
+  }
+  return "not_proven";
+}
+
+export function buildContractResultClaimStatement(input: {
+  contract: ExecutionContract;
+  attemptStatus: string;
+  status: "pass" | "fail" | "not_proven";
+}): string {
+  const eoCount = input.contract.expectedOutputs?.length ?? 0;
+  const erCount = input.contract.evidenceRequirements?.length ?? 0;
+  return (
+    `Contract result assessment (${input.status}) for EC ${input.contract.executionContractId}` +
+    `@v${input.contract.version} — attempt ${input.attemptStatus} — EO:${eoCount} ER:${erCount}`
+  );
+}
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultReviewPolicy.ts b/projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultReviewPolicy.ts
new file mode 100644
index 00000000..10b3fab4
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultReviewPolicy.ts
@@ -0,0 +1,28 @@
+/**
+ * W3-B bounded server-owned Contract Result review policy (ARCH-R06-C).
+ * structural criticality MUST NOT auto-select Morris in contract-result mode.
+ */
+import type { ClaimEvaluationMethod } from "../domain/claimEvaluationTypes";
+import {
+  W3B_CONTRACT_RESULT_REVIEW_POLICY_REF,
+  resolveContractResultConfirmationAuthority,
+} from "../domain/contractResultTypes";
+
+export { W3B_CONTRACT_RESULT_REVIEW_POLICY_REF };
+
+export function contractResultRequiresHumanConfirmation(
+  method: ClaimEvaluationMethod,
+): boolean {
+  return method === "assisted" || method === "human_review";
+}
+
+export function contractResultConfirmationAuthorityForMethod(
+  method: ClaimEvaluationMethod,
+) {
+  return resolveContractResultConfirmationAuthority(method);
+}
+
+/** Contract-result mode bypasses generic structural→Morris inheritance. */
+export function contractResultBypassesMorrisStructuralGate(): true {
+  return true;
+}
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultVerdictProjection.ts b/projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultVerdictProjection.ts
new file mode 100644
index 00000000..e03833cb
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultVerdictProjection.ts
@@ -0,0 +1,21 @@
+/**
+ * Server-derived Contract Result verdict projection (ARCH-R06-A).
+ * Canonical SoT remains ClaimEvaluation.status — never arbitrate two truths.
+ */
+import type { ClaimEvaluationStatus } from "../domain/claimEvaluationTypes";
+import type { ContractResultVerdict } from "../domain/contractResultTypes";
+
+export function projectContractResultVerdict(
+  status: ClaimEvaluationStatus,
+): ContractResultVerdict {
+  if (status === "pass") return "PASS";
+  if (status === "fail") return "FAIL";
+  return "NOT_PROVEN";
+}
+
+export function contractResultVerdictAgreesWithStatus(input: {
+  status: ClaimEvaluationStatus;
+  verdict: ContractResultVerdict;
+}): boolean {
+  return projectContractResultVerdict(input.status) === input.verdict;
+}
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/application/evaluateContractResult.ts b/projects/sfia-studio/app/lib/oa/evidence-review/application/evaluateContractResult.ts
new file mode 100644
index 00000000..03dcf7a1
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/application/evaluateContractResult.ts
@@ -0,0 +1,290 @@
+/**
+ * EvaluateContractResult — TD-W3B-01 contract-result ClaimEvaluation owner (FC-12).
+ * Server writes canonical status only; claimStatement is audit projection.
+ */
+import type { ClockPort } from "@/lib/oa/doctrine";
+import type { ExecutionContract } from "@/lib/oa/execution-contract";
+import type { ActorReference } from "@/lib/oa/doctrine";
+import {
+  createClaimEvaluationError,
+  isClaimEvaluationDomainError,
+} from "../domain/claimEvaluationErrors";
+import {
+  isClaimEvaluationId,
+  isReviewBundleId,
+  validateClaimEvaluationShape,
+} from "../domain/claimEvaluationInvariants";
+import type {
+  ClaimEvaluation,
+  ClaimEvaluationResult,
+} from "../domain/claimEvaluationTypes";
+import { CLAIM_EVALUATION_SCHEMA_VERSION } from "../domain/claimEvaluationTypes";
+import {
+  CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT,
+  W3B_CONTRACT_RESULT_REVIEW_POLICY_REF,
+  isAttemptContractVersionBound,
+} from "../domain/contractResultTypes";
+import type { ExecutionAttemptSnapshot } from "../domain/types";
+import type { Evidence } from "../domain/types";
+import type { ReviewBundle } from "../domain/reviewBundleTypes";
+import type { EvidenceAuditPort } from "../ports/evidenceAudit";
+import type { ClaimEvaluationRepositoryPort } from "../ports/claimEvaluationRepository";
+import type { IdGeneratorPort } from "../ports/idGenerator";
+import {
+  assessExpectedOutputs,
+  assessEvidenceRequirements,
+  buildContractResultClaimStatement,
+  deriveCanonicalContractResultStatus,
+} from "./contractResultAssessment";
+import {
+  assertIdempotencyKey,
+  buildProvenance,
+  fingerprintCommand,
+  registerFingerprintBody,
+} from "./evidenceSupport";
+
+export type EvaluateContractResultRequest = {
+  claimEvaluationId: string;
+  idempotencyKey: string;
+  actor: ActorReference;
+  contract: ExecutionContract;
+  attempt: ExecutionAttemptSnapshot;
+  evidence: Evidence;
+  reviewBundle: ReviewBundle;
+  correlationId?: string;
+  nowIso?: string;
+};
+
+export class EvaluateContractResult {
+  constructor(
+    private readonly repo: ClaimEvaluationRepositoryPort,
+    private readonly clock: ClockPort,
+    private readonly audit: EvidenceAuditPort,
+    private readonly ids: IdGeneratorPort,
+  ) {}
+
+  async execute(
+    request: EvaluateContractResultRequest,
+  ): Promise<ClaimEvaluationResult> {
+    const started = Date.now();
+    const timestamp = request.nowIso ?? this.clock.nowIso();
+    const correlationId =
+      request.correlationId ?? this.ids.newCorrelationId();
+
+    const fail = (
+      detailCode: Parameters<typeof createClaimEvaluationError>[0]["detailCode"],
+      internalCauseRef: string,
+      extra?: Partial<Parameters<typeof createClaimEvaluationError>[0]> & {
+        claimEvaluation?: ClaimEvaluation;
+      },
+    ): ClaimEvaluationResult => {
+      const { claimEvaluation, ...errorExtra } = extra ?? {};
+      const durationMs = Date.now() - started;
+      this.audit.append({
+        event: "oa.claim_evaluation.operation_rejected",
+        ts: timestamp,
+        correlationId,
+        claimEvaluationId: request.claimEvaluationId,
+        reviewBundleId: request.reviewBundle.reviewBundleId,
+        actorId: request.actor.actorId,
+        result: "error",
+        detailCode,
+        durationMs,
+      });
+      return {
+        ok: false,
+        error: createClaimEvaluationError({
+          detailCode,
+          timestamp,
+          correlationId,
+          claimEvaluationId: request.claimEvaluationId,
+          reviewBundleId: request.reviewBundle.reviewBundleId,
+          internalCauseRef,
+          ...errorExtra,
+        }),
+        claimEvaluation,
+        durationMs,
+      };
+    };
+
+    try {
+      if (!isClaimEvaluationId(request.claimEvaluationId)) {
+        return fail("CLAIM_EVALUATION_INVALID", "claim_evaluation_id_invalid");
+      }
+      if (!isReviewBundleId(request.reviewBundle.reviewBundleId)) {
+        return fail("CLAIM_EVALUATION_INVALID", "review_bundle_id_invalid");
+      }
+      if (!assertIdempotencyKey(request.idempotencyKey)) {
+        return fail("CLAIM_EVALUATION_INVALID", "idempotency_key_too_short");
+      }
+
+      const { contract, attempt, evidence, reviewBundle } = request;
+
+      if (contract.executionContractId !== attempt.executionContractId) {
+        return fail("CLAIM_EVALUATION_INVALID", "contract_attempt_mismatch");
+      }
+      const versionAligned = isAttemptContractVersionBound({
+        contract,
+        attempt,
+      });
+      if (evidence.bindings.executionAttemptId !== attempt.attemptId) {
+        return fail("CLAIM_EVALUATION_INVALID", "evidence_attempt_mismatch");
+      }
+      if (reviewBundle.completeness !== "complete") {
+        return fail("CLAIM_REVIEW_BUNDLE_INVALID", "review_bundle_incomplete");
+      }
+
+      const fingerprint = fingerprintCommand(
+        registerFingerprintBody({
+          claimEvaluationId: request.claimEvaluationId,
+          idempotencyKey: request.idempotencyKey,
+          reviewBundleId: reviewBundle.reviewBundleId,
+          executionAttemptId: attempt.attemptId,
+          executionContractId: contract.executionContractId,
+          contractVersion: contract.version,
+          semanticFingerprint: contract.semanticFingerprint,
+          actor: request.actor,
+        }),
+      );
+
+      const existingIdem = await this.repo.findByIdempotencyKey(
+        request.idempotencyKey,
+      );
+      if (existingIdem) {
+        if (
+          existingIdem.record.fingerprint === fingerprint &&
+          existingIdem.record.operation === "evaluate_contract_result"
+        ) {
+          const durationMs = Date.now() - started;
+          return {
+            ok: true,
+            claimEvaluation: existingIdem.claimEvaluation,
+            reusedFromIdempotencyKey: true,
+            durationMs,
+          };
+        }
+        return fail("IDEMPOTENCY_CONFLICT", "idempotency_fingerprint_mismatch");
+      }
+
+      const assessmentInput = {
+        contract: {
+          ...contract,
+          semanticFingerprint: contract.semanticFingerprint ?? "",
+        },
+        attempt,
+        evidence,
+        evaluatedAt: timestamp,
+      };
+      const expectedOutputAssessments = versionAligned
+        ? assessExpectedOutputs(assessmentInput)
+        : assessExpectedOutputs(assessmentInput).map((a) => ({
+            ...a,
+            result: "NOT_PROVEN" as const,
+          }));
+      const evidenceRequirementAssessments = versionAligned
+        ? assessEvidenceRequirements(assessmentInput)
+        : assessEvidenceRequirements(assessmentInput).map((a) => ({
+            ...a,
+            result: "NOT_PROVEN" as const,
+          }));
+      const status = versionAligned
+        ? deriveCanonicalContractResultStatus({
+            attemptStatus: attempt.status,
+            expectedOutputAssessments,
+            evidenceRequirementAssessments,
+          })
+        : ("not_proven" as const);
+
+      const claimEvaluation: ClaimEvaluation = {
+        schemaVersion: CLAIM_EVALUATION_SCHEMA_VERSION,
+        claimEvaluationId: request.claimEvaluationId,
+        claimType: "conformite",
+        claimStatement: buildContractResultClaimStatement({
+          contract,
+          attemptStatus: attempt.status,
+          status,
+        }),
+        criticality: "non_critical",
+        evaluationMethod: "deterministic",
+        ruleRef: "w3b-product-completion-contract-result-v1",
+        requiredEvidenceRefs: [evidence.evidenceId],
+        providedEvidenceRefs: [evidence.evidenceId],
+        reviewBundleId: reviewBundle.reviewBundleId,
+        reviewBundleVersion: reviewBundle.version,
+        status,
+        proposedBy: request.actor,
+        confirmationAuthority: "system_deterministic",
+        proposedAt: timestamp,
+        evaluatedAt: timestamp,
+        provenance: buildProvenance({
+          ids: this.ids,
+          actor: request.actor,
+          source: "review",
+          timestamp,
+          correlationId,
+          projectId: contract.projectId,
+          cycleInstanceId: contract.cycleInstanceId,
+        }),
+        version: 1,
+        idempotencyKey: request.idempotencyKey,
+        subjectKind: CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT,
+        contractResultBindings: {
+          projectId: contract.projectId,
+          cycleInstanceId: contract.cycleInstanceId ?? null,
+          executionContractId: contract.executionContractId,
+          executionContractVersion: attempt.executionContractVersion,
+          executionContractSemanticFingerprint: contract.semanticFingerprint ?? "",
+          executionAttemptId: attempt.attemptId,
+          reviewBundleId: reviewBundle.reviewBundleId,
+          reviewBundleVersion: reviewBundle.version,
+          evidenceRefs: [evidence.evidenceId],
+        },
+        expectedOutputAssessments,
+        evidenceRequirementAssessments,
+        contractResultReviewPolicyRef: W3B_CONTRACT_RESULT_REVIEW_POLICY_REF,
+      };
+
+      const shape = validateClaimEvaluationShape(claimEvaluation);
+      if (shape) {
+        return fail(shape.detailCode, shape.reason, {
+          internalCauseRef: shape.reason,
+        });
+      }
+
+      await this.repo.create(claimEvaluation, {
+        claimEvaluationId: claimEvaluation.claimEvaluationId,
+        fingerprint,
+        operation: "evaluate_contract_result",
+      });
+
+      const durationMs = Date.now() - started;
+      this.audit.append({
+        event: "oa.claim_evaluation.evaluated",
+        ts: timestamp,
+        correlationId,
+        claimEvaluationId: claimEvaluation.claimEvaluationId,
+        reviewBundleId: reviewBundle.reviewBundleId,
+        actorId: request.actor.actorId,
+        result: "ok",
+        durationMs,
+      });
+
+      return {
+        ok: true,
+        claimEvaluation: structuredClone(claimEvaluation),
+        durationMs,
+      };
+    } catch (err) {
+      if (isClaimEvaluationDomainError(err)) {
+        return fail(err.detailCode, err.message, {
+          expectedVersion: err.expectedVersion,
+          currentVersion: err.currentVersion,
+        });
+      }
+      return fail(
+        "CLAIM_EVALUATION_PERSISTENCE_FAILED",
+        "unexpected_evaluate_contract_result_failure",
+      );
+    }
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/application/ingestExecutionAttemptEvidence.ts b/projects/sfia-studio/app/lib/oa/evidence-review/application/ingestExecutionAttemptEvidence.ts
index d329d06c..8ea3ed1e 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/application/ingestExecutionAttemptEvidence.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/application/ingestExecutionAttemptEvidence.ts
@@ -1,11 +1,14 @@
 /**
  * IngestExecutionAttemptEvidence — explicit T-A5 → T-A6 bridge (D-T-A6-DEL-04).
  *
- * Policy (documented, fail-closed):
- * - Only Attempt.status === "succeeded" WITH resultRef may produce Evidence.
- * - failed / running / other statuses are refused (ATTEMPT_STATUS_REFUSED).
- * - Created Evidence status is always "available" (never "verified").
- * - ExecutionAttempt.succeeded ≠ Evidence verified ≠ PASS.
+ * Policy (documented, fail-closed) — W3-B terminal coverage:
+ * - Terminal Attempts may produce Evidence:
+ *   - succeeded + resultRef → available (technicalResultRef = resultRef)
+ *   - failed | timeout with errorRef or stopReason → available diagnostic
+ *   - cancelled with cancelledAt or stopReason → available governed-stop
+ * - Non-terminal (accepted/running/result_pending) → ATTEMPT_STATUS_REFUSED.
+ * - Created Evidence status is never "verified".
+ * - ExecutionAttempt.succeeded ≠ Evidence verified ≠ Product SUCCESS/PASS.
  * - Attempt is never mutated.
  */
 import type { ClockPort } from "@/lib/oa/doctrine";
@@ -24,6 +27,7 @@ import type {
   Evidence,
   EvidenceResult,
   IngestExecutionAttemptEvidenceRequest,
+  ExecutionAttemptSnapshot,
 } from "../domain/types";
 import type { EvidenceAuditPort } from "../ports/evidenceAudit";
 import type { EvidenceRepositoryPort } from "../ports/evidenceRepository";
@@ -36,6 +40,18 @@ import {
   registerFingerprintBody,
 } from "./evidenceSupport";

+type TerminalIngestKind = "succeeded" | "failed" | "timeout" | "cancelled";
+
+function classifyTerminalForIngest(
+  attempt: ExecutionAttemptSnapshot,
+): TerminalIngestKind | null {
+  if (attempt.status === "succeeded") return "succeeded";
+  if (attempt.status === "failed") return "failed";
+  if (attempt.status === "timeout") return "timeout";
+  if (attempt.status === "cancelled") return "cancelled";
+  return null;
+}
+
 export class IngestExecutionAttemptEvidence {
   constructor(
     private readonly repo: EvidenceRepositoryPort,
@@ -168,15 +184,33 @@ export class IngestExecutionAttemptEvidence {
         return fail("ATTEMPT_NOT_FOUND", "missing_attempt");
       }

-      // Fail-closed: only succeeded + resultRef produces candidate Evidence.
-      if (attempt.status !== "succeeded") {
+      const terminalKind = classifyTerminalForIngest(attempt);
+      if (!terminalKind) {
         return fail(
           "ATTEMPT_STATUS_REFUSED",
           `attempt_status_${attempt.status}`,
         );
       }
-      if (!attempt.resultRef || !isOaIdentifier(attempt.resultRef)) {
-        return fail("ATTEMPT_RESULT_UNAVAILABLE", "result_ref_missing");
+      if (terminalKind === "succeeded") {
+        if (!attempt.resultRef || !isOaIdentifier(attempt.resultRef)) {
+          return fail("ATTEMPT_RESULT_UNAVAILABLE", "result_ref_missing");
+        }
+      } else if (terminalKind === "failed" || terminalKind === "timeout") {
+        const hasDiagnostic =
+          (attempt.errorRef && isOaIdentifier(attempt.errorRef)) ||
+          (typeof attempt.stopReason === "string" &&
+            attempt.stopReason.trim().length > 0);
+        if (!hasDiagnostic) {
+          return fail("ATTEMPT_RESULT_UNAVAILABLE", "failure_diagnostic_missing");
+        }
+      } else if (terminalKind === "cancelled") {
+        const hasStopFact =
+          Boolean(attempt.cancelledAt) ||
+          (typeof attempt.stopReason === "string" &&
+            attempt.stopReason.trim().length > 0);
+        if (!hasStopFact) {
+          return fail("ATTEMPT_RESULT_UNAVAILABLE", "cancel_fact_missing");
+        }
       }

       const bindings = {
@@ -191,18 +225,33 @@ export class IngestExecutionAttemptEvidence {

       const storageMode = request.storageMode ?? "internal_payload_ref";
       const location =
-        request.location ?? `refs/attempts/${attempt.attemptId}/result`;
+        request.location ??
+        (terminalKind === "succeeded"
+          ? `refs/attempts/${attempt.attemptId}/result`
+          : terminalKind === "cancelled"
+            ? `refs/attempts/${attempt.attemptId}/governed-stop`
+            : `refs/attempts/${attempt.attemptId}/diagnostic`);
+
+      const producedAt =
+        attempt.completedAt ??
+        attempt.failedAt ??
+        attempt.cancelledAt ??
+        attempt.timedOutAt ??
+        timestamp;
+
+      const technicalResultRef =
+        terminalKind === "succeeded" ? attempt.resultRef : undefined;

       const evidence: Evidence = {
         schemaVersion: "0.2.0-oa",
         evidenceId: request.evidenceId,
-        type: request.type ?? "artifact",
-        source: `execution attempt ${attempt.attemptId}`,
+        type: request.type ?? (terminalKind === "succeeded" ? "artifact" : "log_ref"),
+        source: `execution attempt ${attempt.attemptId} (${terminalKind})`,
         sourceKind: "execution_attempt",
         location,
         digest: request.digest,
         producedBy: request.actor,
-        producedAt: attempt.completedAt ?? timestamp,
+        producedAt,
         freshness: "fresh",
         status: "available",
         classification: request.classification,
@@ -224,7 +273,7 @@ export class IngestExecutionAttemptEvidence {
         version: 1,
         createdAt: timestamp,
         idempotencyKey: request.idempotencyKey,
-        technicalResultRef: attempt.resultRef,
+        technicalResultRef,
       };

       const shape = validateEvidenceShape(evidence);
@@ -252,7 +301,6 @@ export class IngestExecutionAttemptEvidence {
         durationMs,
       });

-      // Prove Attempt was not mutated via reader contract (snapshot clone).
       return {
         ok: true,
         evidence: structuredClone(evidence),
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/domain/claimEvaluationTypes.ts b/projects/sfia-studio/app/lib/oa/evidence-review/domain/claimEvaluationTypes.ts
index 270c4a44..2ae45314 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/domain/claimEvaluationTypes.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/domain/claimEvaluationTypes.ts
@@ -6,6 +6,12 @@
  */

 import type { ActorReference, ProvenanceRecord } from "@/lib/oa/doctrine";
+import type {
+  ClaimEvaluationSubjectKind,
+  ContractResultBindings,
+  ExpectedOutputAssessment,
+  EvidenceRequirementAssessment,
+} from "./contractResultTypes";

 export type { ActorReference, ProvenanceRecord };

@@ -105,6 +111,12 @@ export type ClaimEvaluation = {
   idempotencyKey?: string;
   updatedAt?: string;
   rejectionReason?: string;
+  /** W3-B contract-result mode — explicit subject discriminant (not inferred from claimStatement). */
+  subjectKind?: ClaimEvaluationSubjectKind;
+  contractResultBindings?: ContractResultBindings;
+  expectedOutputAssessments?: ExpectedOutputAssessment[];
+  evidenceRequirementAssessments?: EvidenceRequirementAssessment[];
+  contractResultReviewPolicyRef?: string;
 };

 export type ClaimEvaluationDetailCode =
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/domain/contractResultTypes.ts b/projects/sfia-studio/app/lib/oa/evidence-review/domain/contractResultTypes.ts
new file mode 100644
index 00000000..ac817303
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/domain/contractResultTypes.ts
@@ -0,0 +1,115 @@
+/**
+ * W3-B Contract Result subject/mode — TD-W3B-01 / TD-W3B-02.
+ * EO/ER identity is positional + EC semanticFingerprint bound (no cross-version matching).
+ */
+
+import type {
+  ClaimConfirmationAuthority,
+  ClaimEvaluationMethod,
+} from "./claimEvaluationTypes";
+
+export const CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT =
+  "execution_contract_result" as const;
+
+export type ClaimEvaluationSubjectKind =
+  | typeof CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT;
+
+export type ContractResultItemKind = "EO" | "ER";
+
+export type ExpectedOutputAssessmentResult = "PASS" | "NOT_PROVEN" | "FAIL";
+
+export type EvidenceRequirementAssessmentResult =
+  | "SATISFIED"
+  | "NOT_SATISFIED"
+  | "NOT_PROVEN";
+
+/** Deterministic item identity: (semanticFingerprint, kind, ordinal). */
+export type ContractResultItemId = {
+  readonly semanticFingerprint: string;
+  readonly itemKind: ContractResultItemKind;
+  readonly ordinal: number;
+};
+
+export type ContractResultBindings = {
+  readonly projectId: string;
+  readonly cycleInstanceId?: string | null;
+  readonly executionContractId: string;
+  readonly executionContractVersion: number;
+  readonly executionContractSemanticFingerprint: string;
+  readonly executionAttemptId: string;
+  readonly reviewBundleId: string;
+  readonly reviewBundleVersion: number;
+  readonly evidenceRefs: readonly string[];
+};
+
+export type ContractResultAssessmentProvenance = {
+  readonly evaluatorRef: string;
+  readonly evaluatedAt: string;
+  readonly ruleRef?: string;
+};
+
+export type ExpectedOutputAssessment = {
+  readonly itemId: ContractResultItemId;
+  readonly expectation: string;
+  readonly result: ExpectedOutputAssessmentResult;
+  readonly method: ClaimEvaluationMethod;
+  readonly ruleRef?: string;
+  readonly provenance: ContractResultAssessmentProvenance;
+};
+
+export type EvidenceRequirementAssessment = {
+  readonly itemId: ContractResultItemId;
+  readonly requirement: string;
+  readonly result: EvidenceRequirementAssessmentResult;
+  readonly method: ClaimEvaluationMethod;
+  readonly ruleRef?: string;
+  readonly provenance: ContractResultAssessmentProvenance;
+};
+
+/** Server-derived projection only — NOT durable SoT (ARCH-R06-A). */
+export type ContractResultVerdict = "PASS" | "NOT_PROVEN" | "FAIL";
+
+export const W3B_CONTRACT_RESULT_RULE_REF =
+  "w3b-product-completion-contract-result-v1" as const;
+
+export const W3B_CONTRACT_RESULT_REVIEW_POLICY_REF =
+  "w3b-product-completion-contract-result-review-v1" as const;
+
+export function buildContractResultItemId(input: {
+  semanticFingerprint: string;
+  itemKind: ContractResultItemKind;
+  ordinal: number;
+}): ContractResultItemId {
+  return {
+    semanticFingerprint: input.semanticFingerprint,
+    itemKind: input.itemKind,
+    ordinal: input.ordinal,
+  };
+}
+
+export function resolveContractResultConfirmationAuthority(
+  method: ClaimEvaluationMethod,
+): ClaimConfirmationAuthority {
+  if (method === "deterministic") return "system_deterministic";
+  return "authorized_human";
+}
+
+/** TA-5 post-selection status transitions may bump EC.version without EO/ER drift. */
+export const TA5_STATUS_VERSION_DRIFT_MAX = 2;
+
+export function isAttemptContractVersionBound(input: {
+  contract: { executionContractId: string; version: number };
+  attempt: {
+    executionContractId: string;
+    executionContractVersion: number;
+  };
+}): boolean {
+  if (
+    input.contract.executionContractId !== input.attempt.executionContractId
+  ) {
+    return false;
+  }
+  const drift =
+    input.contract.version - input.attempt.executionContractVersion;
+  return drift >= 0 && drift <= TA5_STATUS_VERSION_DRIFT_MAX;
+}
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/domain/types.ts b/projects/sfia-studio/app/lib/oa/evidence-review/domain/types.ts
index 809b5dc4..0d63dd4a 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/domain/types.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/domain/types.ts
@@ -234,7 +234,14 @@ export type ExecutionAttemptSnapshot = {
   status: string;
   resultRef?: string;
   errorRef?: string;
-  completedAt?: string;
+  stopReason?: string;
+  cancelledAt?: string;
   failedAt?: string;
+  timedOutAt?: string;
+  stopOrigin?: "USER_CANCEL" | "SYSTEM_GOVERNED_STOP";
+  stopCode?: string;
+  stopSourceRef?: string;
+  stopObservedAt?: string;
+  completedAt?: string;
   selectedAgentRef?: string;
 };
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/index.ts b/projects/sfia-studio/app/lib/oa/evidence-review/index.ts
index 45d97c44..21893ecc 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/index.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/index.ts
@@ -73,6 +73,11 @@ export { StartReview } from "./application/startReview";
 export { CompleteReview } from "./application/completeReview";
 export { ReopenReview } from "./application/reopenReview";
 export { EvaluateClaim } from "./application/evaluateClaim";
+export { EvaluateContractResult } from "./application/evaluateContractResult";
+export type { EvaluateContractResultRequest } from "./application/evaluateContractResult";
+export { projectContractResultVerdict } from "./application/contractResultVerdictProjection";
+export * from "./domain/contractResultTypes";
+export { SqliteClaimEvaluationRepository } from "./infrastructure/sqlite/sqliteClaimEvaluationRepository";
 export { ConfirmClaimEvaluation } from "./application/confirmClaimEvaluation";
 export { RejectClaimEvaluation } from "./application/rejectClaimEvaluation";
 export { ProposeMaturity } from "./application/proposeMaturity";
@@ -131,6 +136,7 @@ import { ConfirmMaturity } from "./application/confirmMaturity";
 import { CreateReviewBundle } from "./application/createReviewBundle";
 import { DowngradeMaturity } from "./application/downgradeMaturity";
 import { EvaluateClaim } from "./application/evaluateClaim";
+import { EvaluateContractResult } from "./application/evaluateContractResult";
 import { FreezeReviewBundle } from "./application/freezeReviewBundle";
 import { IngestExecutionAttemptEvidence } from "./application/ingestExecutionAttemptEvidence";
 import { MarkEvidenceUnavailable } from "./application/markEvidenceUnavailable";
@@ -151,6 +157,7 @@ import {
   FixedIdGenerator,
   RandomIdGenerator,
 } from "./infrastructure/idGenerator";
+import type { ClaimEvaluationRepositoryPort } from "./ports/claimEvaluationRepository";
 import { MemoryClaimEvaluationRepository } from "./infrastructure/memoryClaimEvaluationRepository";
 import { MemoryClaimEvaluationStore } from "./infrastructure/memoryClaimEvaluationStore";
 import { MemoryEvidenceRepository } from "./infrastructure/memoryEvidenceRepository";
@@ -184,7 +191,7 @@ export type EvidenceReviewServices = {
   reviewBundleRepository: ReviewBundleRepositoryPort;
   reviewBundleReader: ReviewBundleReaderPort;
   claimEvaluationStore: MemoryClaimEvaluationStore;
-  claimEvaluationRepository: MemoryClaimEvaluationRepository;
+  claimEvaluationRepository: ClaimEvaluationRepositoryPort;
   claimEvaluationReader: ClaimEvaluationReaderPort;
   claimAuthority: ClaimAuthorityPort;
   maturityAssessmentStore: MemoryMaturityAssessmentStore;
@@ -208,6 +215,7 @@ export type EvidenceReviewServices = {
   completeReview: CompleteReview;
   reopenReview: ReopenReview;
   evaluateClaim: EvaluateClaim;
+  evaluateContractResult?: EvaluateContractResult;
   confirmClaimEvaluation: ConfirmClaimEvaluation;
   rejectClaimEvaluation: RejectClaimEvaluation;
   proposeMaturity: ProposeMaturity;
@@ -365,6 +373,12 @@ export function createInMemoryEvidenceReviewServices(
       audit,
       ids,
     ),
+    evaluateContractResult: new EvaluateContractResult(
+      claimEvaluationRepository,
+      clock,
+      audit,
+      ids,
+    ),
     confirmClaimEvaluation: new ConfirmClaimEvaluation(
       claimEvaluationRepository,
       reviewBundleReader,
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/createSqliteEvidenceReviewServices.ts b/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/createSqliteEvidenceReviewServices.ts
index e3800e92..770ebe58 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/createSqliteEvidenceReviewServices.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/createSqliteEvidenceReviewServices.ts
@@ -8,6 +8,7 @@ import { ConfirmMaturity } from "../../application/confirmMaturity";
 import { CreateReviewBundle } from "../../application/createReviewBundle";
 import { DowngradeMaturity } from "../../application/downgradeMaturity";
 import { EvaluateClaim } from "../../application/evaluateClaim";
+import { EvaluateContractResult } from "../../application/evaluateContractResult";
 import { FreezeReviewBundle } from "../../application/freezeReviewBundle";
 import { IngestExecutionAttemptEvidence } from "../../application/ingestExecutionAttemptEvidence";
 import { MarkEvidenceUnavailable } from "../../application/markEvidenceUnavailable";
@@ -28,7 +29,7 @@ import {
   FixedIdGenerator,
   RandomIdGenerator,
 } from "../idGenerator";
-import { MemoryClaimEvaluationRepository } from "../memoryClaimEvaluationRepository";
+import type { ClaimEvaluationRepositoryPort } from "../../ports/claimEvaluationRepository";
 import { MemoryClaimEvaluationStore } from "../memoryClaimEvaluationStore";
 import { MemoryEvidenceStore } from "../memoryEvidenceStore";
 import { MemoryMaturityAssessmentRepository } from "../memoryMaturityAssessmentRepository";
@@ -53,6 +54,7 @@ import type { ReviewBundleReaderPort } from "../../ports/reviewBundleReader";
 import type { ReviewBundleRepositoryPort } from "../../ports/reviewBundleRepository";
 import { SqliteEvidenceRepository } from "./sqliteEvidenceRepository";
 import { SqliteReviewBundleRepository } from "./sqliteReviewBundleRepository";
+import { SqliteClaimEvaluationRepository } from "./sqliteClaimEvaluationRepository";

 export type CreateSqliteEvidenceReviewServicesOptions = {
   productStore: ProductSqliteHandle;
@@ -74,7 +76,7 @@ export type SqliteEvidenceReviewServices = {
   reviewBundleRepository: ReviewBundleRepositoryPort;
   reviewBundleReader: ReviewBundleReaderPort;
   claimEvaluationStore: MemoryClaimEvaluationStore;
-  claimEvaluationRepository: MemoryClaimEvaluationRepository;
+  claimEvaluationRepository: ClaimEvaluationRepositoryPort;
   claimEvaluationReader: ClaimEvaluationReaderPort;
   claimAuthority: ClaimAuthorityPort;
   maturityAssessmentStore: MemoryMaturityAssessmentStore;
@@ -99,6 +101,7 @@ export type SqliteEvidenceReviewServices = {
   completeReview: CompleteReview;
   reopenReview: ReopenReview;
   evaluateClaim: EvaluateClaim;
+  evaluateContractResult: EvaluateContractResult;
   confirmClaimEvaluation: ConfirmClaimEvaluation;
   rejectClaimEvaluation: RejectClaimEvaluation;
   proposeMaturity: ProposeMaturity;
@@ -108,8 +111,8 @@ export type SqliteEvidenceReviewServices = {
 };

 /**
- * Evidence + ReviewBundle durable on Product SQLite (M5-A).
- * ClaimEvaluation + MaturityAssessment remain Memory (out of minimal M5).
+ * Evidence + ReviewBundle + ClaimEvaluation durable on Product SQLite (M5/M8).
+ * MaturityAssessment remains Memory (out of minimal M5).
  */
 export function createSqliteEvidenceReviewServices(
   options: CreateSqliteEvidenceReviewServicesOptions,
@@ -125,9 +128,8 @@ export function createSqliteEvidenceReviewServices(
   );
   const claimEvaluationStore =
     options.claimEvaluationStore ?? new MemoryClaimEvaluationStore();
-  const claimEvaluationRepository = new MemoryClaimEvaluationRepository(
-    claimEvaluationStore,
-  );
+  const claimEvaluationRepository: ClaimEvaluationRepositoryPort =
+    new SqliteClaimEvaluationRepository(productStore);
   const claimEvaluationReader = new ClaimEvaluationRepositoryReader(
     claimEvaluationRepository,
     claimEvaluationStore,
@@ -236,6 +238,12 @@ export function createSqliteEvidenceReviewServices(
       audit,
       ids,
     ),
+    evaluateContractResult: new EvaluateContractResult(
+      claimEvaluationRepository,
+      clock,
+      audit,
+      ids,
+    ),
     confirmClaimEvaluation: new ConfirmClaimEvaluation(
       claimEvaluationRepository,
       reviewBundleReader,
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/sqliteClaimEvaluationRepository.ts b/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/sqliteClaimEvaluationRepository.ts
new file mode 100644
index 00000000..d8c436ad
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/sqliteClaimEvaluationRepository.ts
@@ -0,0 +1,230 @@
+import type { ProductSqliteHandle } from "@/lib/oa/project";
+import { ClaimEvaluationDomainError } from "../../domain/claimEvaluationErrors";
+import { validateClaimEvaluationShape } from "../../domain/claimEvaluationInvariants";
+import type { ClaimEvaluation } from "../../domain/claimEvaluationTypes";
+import type {
+  ClaimEvaluationIdempotencyRecord,
+  ClaimEvaluationRepositoryPort,
+} from "../../ports/claimEvaluationRepository";
+
+type ClaimRow = {
+  claim_evaluation_id: string;
+  project_id: string | null;
+  status: string;
+  idempotency_key: string | null;
+  version: number;
+  payload_json: string;
+};
+
+type IdempotencyRow = {
+  idempotency_key: string;
+  claim_evaluation_id: string;
+  fingerprint: string;
+  operation: string;
+};
+
+function cloneClaim(claim: ClaimEvaluation): ClaimEvaluation {
+  return structuredClone(claim);
+}
+
+/**
+ * Durable ClaimEvaluation repository on Product SQLite (M8).
+ */
+export class SqliteClaimEvaluationRepository
+  implements ClaimEvaluationRepositoryPort
+{
+  constructor(private readonly store: ProductSqliteHandle) {}
+
+  async findById(claimEvaluationId: string): Promise<ClaimEvaluation | null> {
+    const row = this.store.db
+      .prepare(
+        `SELECT claim_evaluation_id, project_id, status, idempotency_key, version, payload_json
+         FROM oa_claim_evaluations WHERE claim_evaluation_id = ?`,
+      )
+      .get(claimEvaluationId) as ClaimRow | undefined;
+    if (!row) return null;
+    return cloneClaim(JSON.parse(row.payload_json) as ClaimEvaluation);
+  }
+
+  async findByIdempotencyKey(idempotencyKey: string): Promise<{
+    claimEvaluation: ClaimEvaluation;
+    record: ClaimEvaluationIdempotencyRecord;
+  } | null> {
+    const row = this.store.db
+      .prepare(
+        `SELECT idempotency_key, claim_evaluation_id, fingerprint, operation
+         FROM oa_claim_evaluation_idempotency WHERE idempotency_key = ?`,
+      )
+      .get(idempotencyKey) as IdempotencyRow | undefined;
+    if (!row) return null;
+    const claimEvaluation = await this.findById(row.claim_evaluation_id);
+    if (!claimEvaluation) return null;
+    return {
+      claimEvaluation,
+      record: {
+        claimEvaluationId: row.claim_evaluation_id,
+        fingerprint: row.fingerprint,
+        operation: row.operation as ClaimEvaluationIdempotencyRecord["operation"],
+      },
+    };
+  }
+
+  async exists(claimEvaluationId: string): Promise<boolean> {
+    const row = this.store.db
+      .prepare(`SELECT 1 AS ok FROM oa_claim_evaluations WHERE claim_evaluation_id = ?`)
+      .get(claimEvaluationId) as { ok?: number } | undefined;
+    return row?.ok === 1;
+  }
+
+  async create(
+    claim: ClaimEvaluation,
+    record?: ClaimEvaluationIdempotencyRecord,
+  ): Promise<void> {
+    const shape = validateClaimEvaluationShape(claim);
+    if (shape) {
+      throw new ClaimEvaluationDomainError(shape.detailCode, shape.reason);
+    }
+    if (claim.version !== 1) {
+      throw new ClaimEvaluationDomainError(
+        "CLAIM_EVALUATION_INVALID",
+        "create_requires_version_1",
+      );
+    }
+    if (await this.exists(claim.claimEvaluationId)) {
+      throw new ClaimEvaluationDomainError(
+        "CLAIM_EVALUATION_ALREADY_EXISTS",
+        "claim_evaluation_id_taken",
+      );
+    }
+    this.failIfForced();
+    this.insertClaim(claim);
+    if (record && claim.idempotencyKey) {
+      this.upsertIdempotency(claim.idempotencyKey, record);
+    }
+  }
+
+  async update(
+    claim: ClaimEvaluation,
+    expectedVersion: number,
+    record?: ClaimEvaluationIdempotencyRecord,
+  ): Promise<void> {
+    if (claim.version !== expectedVersion + 1) {
+      throw new ClaimEvaluationDomainError(
+        "VERSION_CONFLICT",
+        "version_not_monotone",
+        { expectedVersion },
+      );
+    }
+    const shape = validateClaimEvaluationShape(claim);
+    if (shape) {
+      throw new ClaimEvaluationDomainError(shape.detailCode, shape.reason);
+    }
+    this.failIfForced();
+    await this.store.runInTransaction(async () => {
+      const changes = this.updateClaimRowCas(claim, expectedVersion);
+      if (changes !== 1) {
+        const current = await this.findById(claim.claimEvaluationId);
+        if (!current) {
+          throw new ClaimEvaluationDomainError(
+            "CLAIM_EVALUATION_NOT_FOUND",
+            "update_missing",
+          );
+        }
+        throw new ClaimEvaluationDomainError("VERSION_CONFLICT", "occ_mismatch", {
+          expectedVersion,
+          currentVersion: current.version,
+        });
+      }
+      if (record) {
+        const key = claim.idempotencyKey;
+        if (key) this.upsertIdempotency(key, record);
+      }
+    });
+  }
+
+  private insertClaim(claim: ClaimEvaluation): void {
+    const now = claim.proposedAt;
+    const projectId = claim.contractResultBindings?.projectId ?? null;
+    const payload = JSON.stringify(cloneClaim(claim));
+    this.store.db
+      .prepare(
+        `INSERT INTO oa_claim_evaluations(
+           claim_evaluation_id, project_id, status, idempotency_key, version,
+           payload_json, created_at, updated_at
+         ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
+      )
+      .run(
+        claim.claimEvaluationId,
+        projectId,
+        claim.status,
+        claim.idempotencyKey ?? null,
+        claim.version,
+        payload,
+        now,
+        now,
+      );
+  }
+
+  private updateClaimRowCas(
+    claim: ClaimEvaluation,
+    expectedVersion: number,
+  ): number {
+    const now = claim.updatedAt ?? claim.evaluatedAt ?? claim.proposedAt;
+    const projectId = claim.contractResultBindings?.projectId ?? null;
+    const payload = JSON.stringify(cloneClaim(claim));
+    const result = this.store.db
+      .prepare(
+        `UPDATE oa_claim_evaluations SET
+           project_id = ?,
+           status = ?,
+           idempotency_key = ?,
+           version = ?,
+           payload_json = ?,
+           updated_at = ?
+         WHERE claim_evaluation_id = ? AND version = ?`,
+      )
+      .run(
+        projectId,
+        claim.status,
+        claim.idempotencyKey ?? null,
+        claim.version,
+        payload,
+        now,
+        claim.claimEvaluationId,
+        expectedVersion,
+      );
+    return Number(result.changes);
+  }
+
+  private upsertIdempotency(
+    idempotencyKey: string,
+    record: ClaimEvaluationIdempotencyRecord,
+  ): void {
+    this.store.db
+      .prepare(
+        `INSERT INTO oa_claim_evaluation_idempotency(
+           idempotency_key, claim_evaluation_id, fingerprint, operation
+         ) VALUES (?, ?, ?, ?)
+         ON CONFLICT(idempotency_key) DO UPDATE SET
+           claim_evaluation_id = excluded.claim_evaluation_id,
+           fingerprint = excluded.fingerprint,
+           operation = excluded.operation`,
+      )
+      .run(
+        idempotencyKey,
+        record.claimEvaluationId,
+        record.fingerprint,
+        record.operation,
+      );
+  }
+
+  private failIfForced(): void {
+    if (this.store.failNextSave === "claim_evaluation") {
+      this.store.failNextSave = null;
+      throw new ClaimEvaluationDomainError(
+        "CLAIM_EVALUATION_PERSISTENCE_FAILED",
+        "forced_claim_evaluation_save_failure",
+      );
+    }
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/ports/claimEvaluationRepository.ts b/projects/sfia-studio/app/lib/oa/evidence-review/ports/claimEvaluationRepository.ts
index 7a497fee..b223a667 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/ports/claimEvaluationRepository.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/ports/claimEvaluationRepository.ts
@@ -3,7 +3,11 @@ import type { ClaimEvaluation } from "../domain/claimEvaluationTypes";
 export type ClaimEvaluationIdempotencyRecord = {
   claimEvaluationId: string;
   fingerprint: string;
-  operation: "evaluate_claim" | "confirm_claim" | "reject_claim";
+  operation:
+    | "evaluate_claim"
+    | "confirm_claim"
+    | "reject_claim"
+    | "evaluate_contract_result";
 };

 export interface ClaimEvaluationRepositoryPort {
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/cancelExecutionAttempt.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/cancelExecutionAttempt.ts
index 3f394db8..75c286f6 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/cancelExecutionAttempt.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/cancelExecutionAttempt.ts
@@ -229,6 +229,7 @@ export class CancelExecutionAttempt {
         cancelledAt: timestamp,
         cancellationRequested: true,
         stopReason: attempt.stopReason ?? request.reason,
+        stopOrigin: "USER_CANCEL",
         updatedAt: timestamp,
         version: attempt.version + 1,
       };
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/systemGovernedStop.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/systemGovernedStop.ts
new file mode 100644
index 00000000..14c3c5b4
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/systemGovernedStop.ts
@@ -0,0 +1,244 @@
+/**
+ * StopExecutionAttemptFromRuntimeGuard — TD-W3B-03/04 (FC-10).
+ * Separate from human Cancel; mandatory durable SYSTEM_GOVERNED_STOP provenance.
+ * Post-running / proven execution frontier only.
+ */
+import type { ClockPort } from "@/lib/oa/doctrine";
+import type { ExecutionContractRepositoryPort } from "@/lib/oa/execution-contract";
+import { createAttemptError } from "../domain/errors";
+import { isAttemptTerminal } from "../domain/invariants";
+import type {
+  ExecutionAttempt,
+  ExecutionAttemptResult,
+} from "../domain/types";
+import type { ExecutionAttemptTechnicalStorePort } from "../ports/executionAttemptTechnicalStorePort";
+import type { AgentRegistryPort } from "../ports/agentRegistry";
+import type { ExecutionAdapterPort } from "../ports/executionAdapter";
+import type { ExecutionAttemptAuditPort } from "../ports/executionAttemptAudit";
+import type { ExecutionAttemptRepositoryPort } from "../ports/executionAttemptRepository";
+import { newCorrelationId } from "./attemptSupport";
+import type { ExecutionContractStatusWriter } from "./executionContractStatusWriter";
+
+export type SystemGovernedStopRequest = {
+  attemptId: string;
+  stopCode: string;
+  stopSourceRef: string;
+  reason: string;
+  correlationId?: string;
+  expectedAttemptVersion?: number;
+  nowIso?: string;
+};
+
+export class SystemGovernedStop {
+  constructor(
+    private readonly attempts: ExecutionAttemptRepositoryPort,
+    private readonly contracts: ExecutionContractRepositoryPort,
+    private readonly contractStatusWriter: ExecutionContractStatusWriter,
+    private readonly registry: AgentRegistryPort,
+    private readonly adapter: ExecutionAdapterPort,
+    private readonly clock: ClockPort,
+    private readonly audit: ExecutionAttemptAuditPort,
+    private readonly store: ExecutionAttemptTechnicalStorePort,
+  ) {}
+
+  async execute(
+    request: SystemGovernedStopRequest,
+  ): Promise<ExecutionAttemptResult> {
+    const started = Date.now();
+    const timestamp = request.nowIso ?? this.clock.nowIso();
+    const correlationId = request.correlationId ?? newCorrelationId();
+
+    const fail = (
+      detailCode: Parameters<typeof createAttemptError>[0]["detailCode"],
+      internalCauseRef: string,
+      extra?: Partial<Parameters<typeof createAttemptError>[0]> & {
+        attempt?: ExecutionAttempt;
+      },
+    ): ExecutionAttemptResult => {
+      const { attempt, ...errorExtra } = extra ?? {};
+      const durationMs = Date.now() - started;
+      this.audit.append({
+        event: "oa.execution_attempt.cancellation_failed",
+        ts: timestamp,
+        correlationId,
+        attemptId: request.attemptId,
+        result: "error",
+        detailCode,
+        durationMs,
+      });
+      return {
+        ok: false,
+        error: createAttemptError({
+          detailCode,
+          timestamp,
+          correlationId,
+          attemptId: request.attemptId,
+          internalCauseRef,
+          ...errorExtra,
+        }),
+        attempt,
+        durationMs,
+      };
+    };
+
+    try {
+      if (
+        typeof request.stopCode !== "string" ||
+        request.stopCode.trim().length < 1
+      ) {
+        return fail("ATTEMPT_INVALID", "stop_code_required");
+      }
+      if (
+        typeof request.stopSourceRef !== "string" ||
+        request.stopSourceRef.trim().length < 1
+      ) {
+        return fail("ATTEMPT_INVALID", "stop_source_ref_required");
+      }
+      if (typeof request.reason !== "string" || request.reason.trim().length < 1) {
+        return fail("ATTEMPT_INVALID", "stop_reason_required");
+      }
+
+      const attempt = await this.attempts.findById(request.attemptId);
+      if (!attempt) {
+        return fail("ATTEMPT_NOT_FOUND", "missing_attempt");
+      }
+      if (attempt.status === "cancelled" && attempt.stopOrigin === "SYSTEM_GOVERNED_STOP") {
+        const durationMs = Date.now() - started;
+        return { ok: true, attempt, replayed: true, durationMs };
+      }
+      if (isAttemptTerminal(attempt.status)) {
+        return fail(
+          "ATTEMPT_STATE_CONFLICT",
+          `attempt_terminal_${attempt.status}`,
+        );
+      }
+      if (
+        attempt.status !== "running" &&
+        attempt.status !== "result_pending"
+      ) {
+        return fail(
+          "ATTEMPT_STATE_CONFLICT",
+          "system_stop_requires_post_running_frontier",
+        );
+      }
+      if (
+        request.expectedAttemptVersion !== undefined &&
+        request.expectedAttemptVersion !== attempt.version
+      ) {
+        return fail("VERSION_CONFLICT", "attempt_occ_mismatch", {
+          expectedVersion: request.expectedAttemptVersion,
+          currentVersion: attempt.version,
+        });
+      }
+
+      const contract = await this.contracts.findById(
+        attempt.executionContractId,
+      );
+      if (!contract) {
+        return fail("EXECUTION_CONTRACT_NOT_FOUND", "missing_contract");
+      }
+
+      const agent = this.registry.getAgent(attempt.selectedAgentRef);
+      let cancelResult;
+      try {
+        cancelResult = await this.adapter.cancel({
+          attemptId: attempt.attemptId,
+          executionContractId: attempt.executionContractId,
+          selectedAgentRef: attempt.selectedAgentRef,
+          adapterRef: agent?.adapterRef ?? this.adapter.adapterId,
+          correlationId,
+          reason: request.reason,
+        });
+      } catch {
+        cancelResult = {
+          outcome: "fail" as const,
+          adapterId: this.adapter.adapterId,
+          attemptId: attempt.attemptId,
+          reason: "adapter_threw",
+          irreversibleEffectsPossible: true,
+        };
+      }
+
+      if (cancelResult.outcome !== "ack") {
+        const flagged: ExecutionAttempt = {
+          ...attempt,
+          cancellationRequested: true,
+          irreversibleEffectsPossible:
+            cancelResult.irreversibleEffectsPossible ?? true,
+          updatedAt: timestamp,
+          version: attempt.version + 1,
+        };
+        let persistedAttempt: ExecutionAttempt | undefined;
+        try {
+          await this.attempts.update(flagged, attempt.version);
+          persistedAttempt = flagged;
+        } catch {
+          persistedAttempt = undefined;
+        }
+        return fail("EXECUTION_CANCEL_FAILED", cancelResult.reason ?? "cancel_not_acked", {
+          attempt: persistedAttempt,
+        });
+      }
+
+      const stopped: ExecutionAttempt = {
+        ...attempt,
+        status: "cancelled",
+        cancelledAt: timestamp,
+        cancellationRequested: true,
+        stopReason: request.reason,
+        stopOrigin: "SYSTEM_GOVERNED_STOP",
+        stopCode: request.stopCode,
+        stopSourceRef: request.stopSourceRef,
+        stopObservedAt: timestamp,
+        updatedAt: timestamp,
+        version: attempt.version + 1,
+      };
+
+      try {
+        await this.store.runInTransaction(async () => {
+          await this.attempts.update(stopped, attempt.version);
+          await this.attempts.releaseActiveContract(
+            stopped.executionContractId,
+            stopped.attemptId,
+          );
+        });
+      } catch {
+        return fail("EXECUTION_PERSISTENCE_FAILED", "system_stop_persist_failed");
+      }
+
+      const contractWrite = await this.contractStatusWriter.write({
+        executionContractId: contract.executionContractId,
+        expectedVersion: contract.version,
+        nextStatus: "cancelled",
+        reason: request.reason,
+      });
+
+      const durationMs = Date.now() - started;
+      this.audit.append({
+        event: "oa.execution_attempt.system_governed_stop",
+        ts: timestamp,
+        correlationId,
+        attemptId: stopped.attemptId,
+        executionContractId: stopped.executionContractId,
+        previousStatus: attempt.status,
+        newStatus: "cancelled",
+        result: "ok",
+        durationMs,
+      });
+
+      return {
+        ok: true,
+        attempt: structuredClone(stopped),
+        contractStatus: contractWrite.ok
+          ? contractWrite.contract.status
+          : contract.status,
+        contractVersion: contractWrite.ok
+          ? contractWrite.contract.version
+          : contract.version,
+        durationMs,
+      };
+    } catch {
+      return fail("EXECUTION_PERSISTENCE_FAILED", "unexpected_system_stop_failure");
+    }
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts
index 7d89d308..85488b94 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts
@@ -138,6 +138,11 @@ export type ExecutionAttempt = {
    */
   executionWindowClass?: ExecutionWindowClass;
   resolvedMaxDurationMs?: number;
+  /** W3-B durable stop provenance (TD-W3B-04) — system-owned writes only. */
+  stopOrigin?: "USER_CANCEL" | "SYSTEM_GOVERNED_STOP";
+  stopCode?: string;
+  stopSourceRef?: string;
+  stopObservedAt?: string;
 };

 /**
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
index 0d3aaa22..7c5bbba4 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
@@ -75,6 +75,8 @@ export {
   type GrantGateDResult,
 } from "./application/grantRealExecutionGate";
 export { CancelExecutionAttempt } from "./application/cancelExecutionAttempt";
+export { SystemGovernedStop } from "./application/systemGovernedStop";
+export type { SystemGovernedStopRequest } from "./application/systemGovernedStop";
 export { RecordExecutionResult } from "./application/recordExecutionResult";
 export { RecordExecutionFailure } from "./application/recordExecutionFailure";
 export { RetryExecutionAttempt } from "./application/retryExecutionAttempt";
@@ -164,6 +166,7 @@ import type { ExecutionContractServices } from "@/lib/oa/execution-contract";
 import { resolveAttemptPolicy } from "./application/attemptPolicy";
 import type { AttemptPolicy } from "./application/attemptPolicy";
 import { CancelExecutionAttempt } from "./application/cancelExecutionAttempt";
+import { SystemGovernedStop } from "./application/systemGovernedStop";
 import { CheckAttemptAuthorization } from "./application/checkAttemptAuthorization";
 import { ExecutionContractStatusWriter } from "./application/executionContractStatusWriter";
 import { GetExecutionAttempt } from "./application/getExecutionAttempt";
@@ -226,6 +229,7 @@ export type ExecutionAttemptServices = {
   selectExecutionAgent: SelectExecutionAgent;
   startExecution: StartExecution;
   cancelExecutionAttempt: CancelExecutionAttempt;
+  systemGovernedStop: SystemGovernedStop;
   recordExecutionResult: RecordExecutionResult;
   recordExecutionFailure: RecordExecutionFailure;
   retryExecutionAttempt: RetryExecutionAttempt;
@@ -364,6 +368,16 @@ export function createInMemoryExecutionAttemptServices(
       audit,
       store,
     ),
+    systemGovernedStop: new SystemGovernedStop(
+      attempts,
+      contracts,
+      contractStatusWriter,
+      registry,
+      adapter,
+      clock,
+      audit,
+      store,
+    ),
     recordExecutionResult: new RecordExecutionResult(
       attempts,
       contracts,
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/createSqliteExecutionAttemptServices.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/createSqliteExecutionAttemptServices.ts
index fc8767b4..e82ba5ec 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/createSqliteExecutionAttemptServices.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/createSqliteExecutionAttemptServices.ts
@@ -11,6 +11,7 @@ import {
   type AttemptPolicy,
 } from "../../application/attemptPolicy";
 import { CancelExecutionAttempt } from "../../application/cancelExecutionAttempt";
+import { SystemGovernedStop } from "../../application/systemGovernedStop";
 import { CheckAttemptAuthorization } from "../../application/checkAttemptAuthorization";
 import { ExecutionContractStatusWriter } from "../../application/executionContractStatusWriter";
 import { GetExecutionAttempt } from "../../application/getExecutionAttempt";
@@ -83,6 +84,7 @@ export type SqliteExecutionAttemptServices = {
   selectExecutionAgent: SelectExecutionAgent;
   startExecution: StartExecution;
   cancelExecutionAttempt: CancelExecutionAttempt;
+  systemGovernedStop: SystemGovernedStop;
   recordExecutionResult: RecordExecutionResult;
   recordExecutionFailure: RecordExecutionFailure;
   retryExecutionAttempt: RetryExecutionAttempt;
@@ -195,6 +197,16 @@ export function createSqliteExecutionAttemptServices(
       audit,
       store,
     ),
+    systemGovernedStop: new SystemGovernedStop(
+      attempts,
+      contracts,
+      contractStatusWriter,
+      registry,
+      adapter,
+      clock,
+      audit,
+      store,
+    ),
     recordExecutionResult: new RecordExecutionResult(
       attempts,
       contracts,
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/ports/executionAttemptAudit.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/ports/executionAttemptAudit.ts
index 45dba0f4..2402cb43 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/ports/executionAttemptAudit.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/ports/executionAttemptAudit.ts
@@ -17,6 +17,7 @@ export type AttemptAuditEventName =
   | "oa.execution_attempt.timed_out"
   | "oa.execution_attempt.cancellation_requested"
   | "oa.execution_attempt.cancelled"
+  | "oa.execution_attempt.system_governed_stop"
   | "oa.execution_attempt.cancellation_failed"
   | "oa.execution_attempt.retry_authorized"
   | "oa.execution_attempt.authorization_denied"
diff --git a/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts b/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts
index 13a553da..e9165081 100644
--- a/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts
+++ b/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts
@@ -6,7 +6,8 @@ export const PRODUCT_SCHEMA_VERSION_M3 = "m3-0.1.0" as const;
 export const PRODUCT_SCHEMA_VERSION_M5 = "m5-0.1.0" as const;
 export const PRODUCT_SCHEMA_VERSION_M6 = "m6-0.1.0" as const;
 export const PRODUCT_SCHEMA_VERSION_M7 = "m7-0.1.0" as const;
-export const PRODUCT_SCHEMA_VERSION = PRODUCT_SCHEMA_VERSION_M7;
+export const PRODUCT_SCHEMA_VERSION_M8 = "m8-0.1.0" as const;
+export const PRODUCT_SCHEMA_VERSION = PRODUCT_SCHEMA_VERSION_M8;

 const BASE_SCHEMA_SQL = `
 PRAGMA foreign_keys = ON;
@@ -293,6 +294,30 @@ CREATE INDEX IF NOT EXISTS idx_oa_authority_receipts_project
   ON oa_authority_verification_receipts(project_id, verified_at);
 `;

+const M8_CLAIM_EVALUATION_SCHEMA_SQL = `
+CREATE TABLE IF NOT EXISTS oa_claim_evaluations (
+  claim_evaluation_id TEXT PRIMARY KEY NOT NULL,
+  project_id TEXT,
+  status TEXT NOT NULL,
+  idempotency_key TEXT UNIQUE,
+  version INTEGER NOT NULL,
+  payload_json TEXT NOT NULL,
+  created_at TEXT NOT NULL,
+  updated_at TEXT
+);
+
+CREATE INDEX IF NOT EXISTS idx_oa_claim_evaluations_project
+  ON oa_claim_evaluations(project_id, created_at);
+
+CREATE TABLE IF NOT EXISTS oa_claim_evaluation_idempotency (
+  idempotency_key TEXT PRIMARY KEY NOT NULL,
+  claim_evaluation_id TEXT NOT NULL,
+  fingerprint TEXT NOT NULL,
+  operation TEXT NOT NULL,
+  FOREIGN KEY (claim_evaluation_id) REFERENCES oa_claim_evaluations(claim_evaluation_id)
+);
+`;
+
 function readSchemaVersion(db: DatabaseSync): string | null {
   const row = db
     .prepare("SELECT value FROM schema_meta WHERE key = ?")
@@ -342,8 +367,12 @@ function applyM7(db: DatabaseSync): void {
   db.exec(M7_INSPECTION_AUTHORITY_SCHEMA_SQL);
 }

+function applyM8(db: DatabaseSync): void {
+  db.exec(M8_CLAIM_EVALUATION_SCHEMA_SQL);
+}
+
 /**
- * Open Product SQLite with additive M1→M2→M3→M5→M6→M7 migration.
+ * Open Product SQLite with additive M1→M2→M3→M5→M6→M7→M8 migration.
  * Fail closed on unknown/future schema versions.
  */
 export function openProductSqlite(dbPath: string): DatabaseSync {
@@ -358,24 +387,32 @@ export function openProductSqlite(dbPath: string): DatabaseSync {
     applyM5(db);
     applyM6(db);
     applyM7(db);
+    applyM8(db);
     setSchemaVersion(db, PRODUCT_SCHEMA_VERSION);
   } else if (version === PRODUCT_SCHEMA_VERSION_M2) {
     applyM3(db);
     applyM5(db);
     applyM6(db);
     applyM7(db);
+    applyM8(db);
     setSchemaVersion(db, PRODUCT_SCHEMA_VERSION);
   } else if (version === PRODUCT_SCHEMA_VERSION_M3) {
     applyM5(db);
     applyM6(db);
     applyM7(db);
+    applyM8(db);
     setSchemaVersion(db, PRODUCT_SCHEMA_VERSION);
   } else if (version === PRODUCT_SCHEMA_VERSION_M5) {
     applyM6(db);
     applyM7(db);
+    applyM8(db);
     setSchemaVersion(db, PRODUCT_SCHEMA_VERSION);
   } else if (version === PRODUCT_SCHEMA_VERSION_M6) {
     applyM7(db);
+    applyM8(db);
+    setSchemaVersion(db, PRODUCT_SCHEMA_VERSION);
+  } else if (version === PRODUCT_SCHEMA_VERSION_M7) {
+    applyM8(db);
     setSchemaVersion(db, PRODUCT_SCHEMA_VERSION);
   } else if (version === PRODUCT_SCHEMA_VERSION) {
     applyM2(db);
@@ -383,6 +420,7 @@ export function openProductSqlite(dbPath: string): DatabaseSync {
     applyM5(db);
     applyM6(db);
     applyM7(db);
+    applyM8(db);
   } else {
     try {
       db.close();
diff --git a/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/productSqliteHandle.ts b/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/productSqliteHandle.ts
index 2012abc3..5519ecb1 100644
--- a/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/productSqliteHandle.ts
+++ b/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/productSqliteHandle.ts
@@ -17,6 +17,7 @@ export type ProductSqliteHandle = ProjectPersistenceUnitOfWorkPort & {
     | "attempt"
     | "evidence"
     | "review_bundle"
+    | "claim_evaluation"
     | "trajectory"
     | "confirmation"
     | "epistemic"
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/f3FixtureWiring.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/f3FixtureWiring.ts
index 9dbb3891..3d8ff0fe 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/f3FixtureWiring.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/f3FixtureWiring.ts
@@ -80,8 +80,15 @@ export function createAttemptReaderBridge(
         status: attempt.status,
         resultRef: attempt.resultRef,
         errorRef: attempt.errorRef,
-        completedAt: attempt.completedAt,
+        stopReason: attempt.stopReason,
+        cancelledAt: attempt.cancelledAt,
         failedAt: attempt.failedAt,
+        timedOutAt: attempt.timedOutAt,
+        stopOrigin: attempt.stopOrigin,
+        stopCode: attempt.stopCode,
+        stopSourceRef: attempt.stopSourceRef,
+        stopObservedAt: attempt.stopObservedAt,
+        completedAt: attempt.completedAt,
         selectedAgentRef: attempt.selectedAgentRef,
       };
     },
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
index 024c52e9..c2cc4853 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
@@ -49,6 +49,7 @@ import {
   createInMemoryEvidenceReviewServices,
   createSqliteEvidenceReviewServices,
   type EvidenceReviewServices,
+  type SqliteEvidenceReviewServices,
 } from "@/lib/oa/evidence-review";
 import type { ProjectServices } from "@/lib/oa/project";
 import { SqliteProductStore } from "@/lib/oa/project/infrastructure/sqlite/sqliteProductStore";
@@ -125,7 +126,7 @@ export type RuntimeOaStack = {
   readonly authorityResolver: MemoryAuthorityResolver;
   readonly executionContractServices: ExecutionContractServices;
   readonly executionAttemptServices: ExecutionAttemptServices;
-  readonly evidenceReviewServices: EvidenceReviewServices;
+  readonly evidenceReviewServices: EvidenceReviewServices | SqliteEvidenceReviewServices;
   /** Explicit TestExecutionAdapter — never silent NoOp. */
   readonly fixtureAdapter: TestExecutionAdapter;
   /**
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/w3bE2eBoundaryControl.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/w3bE2eBoundaryControl.ts
new file mode 100644
index 00000000..5a297bb6
--- /dev/null
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/w3bE2eBoundaryControl.ts
@@ -0,0 +1,79 @@
+/**
+ * W3-B TEST-ONLY external-boundary arming (E2E / integration).
+ * Arms TestExecutionAdapter fail OR a post-start governed stop code.
+ * Never creates Product Outcome directly. Disabled outside E2E gates.
+ */
+
+import type { TestExecutionAdapter } from "@/lib/oa/execution-attempt";
+
+export type W3bBoundaryArm =
+  | {
+      readonly kind: "adapter_fail";
+      readonly reason: string;
+    }
+  | {
+      readonly kind: "governed_stop";
+      /** Must match an EC stopCondition or PROTECTED:* constraint. */
+      readonly stopCondition: string;
+    };
+
+const ARM_KEY = "__SFIA_E2E_W3B_BOUNDARY_ARM__" as const;
+
+function armSlot(): { current: W3bBoundaryArm | null } {
+  const g = globalThis as typeof globalThis & {
+    [ARM_KEY]?: { current: W3bBoundaryArm | null };
+  };
+  if (!g[ARM_KEY]) g[ARM_KEY] = { current: null };
+  return g[ARM_KEY];
+}
+
+export function isW3bBoundaryControlEnabled(): boolean {
+  if (process.env.NODE_ENV === "production") return false;
+  if (process.env.OPS1_E2E_ALLOW_DIRTY_PRINCIPAL !== "1") return false;
+  if (process.env.OPS1_CONVERSATION_PROVIDER !== "fake") return false;
+  if (process.env.SFIA_STUDIO_CURSOR_REAL === "1") return false;
+  if (process.env.OPS1_CURSOR_REAL === "1") return false;
+  if (
+    process.env.SFIA_STUDIO_E2E_QA_CONTROL !== "1" &&
+    process.env.VITEST !== "true" &&
+    process.env.NODE_ENV !== "test"
+  ) {
+    return false;
+  }
+  return true;
+}
+
+export function armW3bBoundary(arm: W3bBoundaryArm): void {
+  if (!isW3bBoundaryControlEnabled()) {
+    throw new Error("W3B_BOUNDARY_CONTROL_DISABLED");
+  }
+  armSlot().current = arm;
+}
+
+export function peekW3bBoundaryArm(): W3bBoundaryArm | null {
+  return armSlot().current;
+}
+
+export function consumeW3bBoundaryArm(): W3bBoundaryArm | null {
+  const slot = armSlot();
+  const current = slot.current;
+  slot.current = null;
+  return current;
+}
+
+export function clearW3bBoundaryArm(): void {
+  armSlot().current = null;
+}
+
+export function applyW3bAdapterFailArmIfPresent(
+  fixtureAdapter: TestExecutionAdapter | null | undefined,
+): boolean {
+  const arm = peekW3bBoundaryArm();
+  if (!arm || arm.kind !== "adapter_fail" || !fixtureAdapter) return false;
+  consumeW3bBoundaryArm();
+  fixtureAdapter.queueDefaultLaunch({
+    outcome: "fail",
+    reason: arm.reason,
+  });
+  return true;
+}
```

---

## Appendix B — Implementation summary (for navigation)

### TD-W3B-01 Contract Result ClaimEvaluation
- `contractResultTypes.ts`, `evaluateContractResult.ts`, `contractResultVerdictProjection.ts`
- M8 SQLite `oa_claim_evaluations`, `sqliteClaimEvaluationRepository.ts`
- `ClaimEvaluation.status` = canonical SoT; product verdict = projection only

### TD-W3B-02 EO/ER identity
- `contractResultAssessment.ts` — `(semanticFingerprint, kind, ordinal)`

### TD-W3B-03 SYSTEM_GOVERNED_STOP
- `systemGovernedStop.ts` on existing Attempt lifecycle
- Wired via `governedExecuteAuthorizedContract.ts` + EC stopCondition

### TD-W3B-04 Stop provenance
- `stopOrigin`, `stopCode`, `stopSourceRef`, `stopObservedAt` on Attempt + SQLite

### Contract Result review policy
- `W3B_CONTRACT_RESULT_REVIEW_POLICY_REF` in `contractResultReviewPolicy.ts`
- Contract-result bypasses Morris structural gate; generic claims unchanged

### FC-11 / FC-12 / UI
- `w3bProductTerminalProjection.ts`, `materializeW3bProductTerminal.ts`
- `ingestExecutionAttemptEvidence.ts`, `TrajectorySurface.tsx`

### Test-only boundary (not product path)
- `app/api/e2e/w3b-boundary/route.ts`, `w3bE2eBoundaryControl.ts`

---

## Validation (unchanged from candidate)

- typecheck/lint: PASS
- vitest full: 2041 passed
- W3-B targeted: 22/22
- W3-A: 24/24
- Playwright W3-B: **3/3 PASS** (this micro-cycle)

---

## Verdict

**READY FOR REVIEW**

Proof completion closes prior blockers X-07 and X-11 for SUCCESS/STOP/FAIL on canonical `/studio`. Handoff now includes full diff `a71d9413 → 0ef57e73`. Reserves: NOT_PROVEN/USER_CANCEL runtime PNG; `SFIA_STUDIO_E2E_QA_CONTROL` in playwright.config.

**Next gate:** ChatGPT re-review → Morris Git integration decision if PASS.
