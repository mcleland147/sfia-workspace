# SFIA Studio — W3-B Delivery Correction — Review Pack FULL

**Cycle 8 · CRITICAL · INC · Contract-result invariant correction**

Timestamps: **2026-08-24 22:58 CEST** · **2026-08-24 20:58 UTC**

---

## Morris GO (consumed)

W3-B DELIVERY CORRECTION — SAME US-P1-05/06 — preserve reviewed checkpoint `0ef57e73ed28e83c849962117a0a8566d0da8074` — NEW local correction commit — fix ARCH-R02 + TD-W3B-02 + ARCH-R01 + ARCH-R06-C + cancel/stop Evidence + Playwright reproducibility — NO architecture reopen — NO DOC mutation — NO project push/PR/merge.

---

## Git truth

| Item | Value |
| --- | --- |
| origin/main | `a71d9413e0435a8252ab4c695163b67354d193aa` |
| Branch | `delivery/sfia-studio-product-completion-w3-b-td-reconciled` |
| Worktree | `/Users/morris/Projects/sfia-workspace-w3b-delivery-restart` |
| Review checkpoint (preserved) | `0ef57e73ed28e83c849962117a0a8566d0da8074` |
| Correction commit | `0b1e50a5f6b5fb0c84c3015a5f3390fa139cfc09` |
| Parent verified | `0ef57e73ed28e83c849962117a0a8566d0da8074` |
| Project push | NOT performed |
| PR / merge | NOT authorized |

### Historical harvest source (read-only integrity)

| Item | Value |
| --- | --- |
| Path | `/Users/morris/Projects/sfia-workspace` |
| Branch | `delivery/sfia-studio-product-completion-w3-b-terminal-evidence` |
| HEAD | `ba7aa2db408b7fd00faf9638da060ce0833b794b` |
| Mutated this cycle | **NO** (read-only verified) |

---

## ChatGPT blockers consumed (R-W3B-C01…06)

| ID | Before (0ef57e73 defect) | After (0b1e50a5 fix) |
| --- | --- | --- |
| **R-W3B-C01** ARCH-R02 semantic trust | EO PASS from resultRef/Evidence availability shortcuts | Server-owned evaluator `w3b-contract-result/product-generate-temporary-artifact-v1`; unknown EO text → NOT_PROVEN; facts required for PASS |
| **R-W3B-C02** TD-W3B-02 exact binding | `TA5_STATUS_VERSION_DRIFT_MAX` tolerance | Removed; immutable Attempt binding id+version+semanticFingerprint; sync at execution frontiers; zero drift |
| **R-W3B-C03** ARCH-R01 frozen RB | Evaluate on draft-complete RB | CreateReviewBundle → FreezeReviewBundle → Evaluate; frozen snapshot + version enforced |
| **R-W3B-C04** ARCH-R06-C confirmation | Generic structural→Morris on contract-result | Branch on `subjectKind=execution_contract_result`; deterministic→system_deterministic; assisted/human_review→authorized_human + policy ref |
| **R-W3B-C05** Cancel Evidence | Any cancelled → governed-stop path | USER_CANCEL vs SYSTEM_GOVERNED_STOP vs neutral cancellation semantics |
| **R-W3B-C06** Playwright QA | Manual `SFIA_STUDIO_E2E_QA_CONTROL=1` | Added to bounded Playwright webServer env |

---

## Deterministic evaluator (R-W3B-C01)

| Field | Value |
| --- | --- |
| Applicability discriminator | `action=product:generate-temporary-artifact` + `requiredCapabilities` includes `cap:product-temp-artifact` |
| ruleRef | `w3b-contract-result/product-generate-temporary-artifact-v1` |
| EO template (server-owned) | `Résultat d'exécution — generate-temporary-artifact` |
| ER key | `evreq:generate-temporary-artifact` |
| resultRef shape | `res:w3a:<hex>` minted by governed execute path |
| Unknown rule / free-text EO | NOT_PROVEN (fail-closed) |

**Product prep fix:** `w3aProductExecutionSemantics.ts` now emits server-owned EO template for `generate-temporary-artifact` instead of trajectory `expectedOutcome` prose.

---

## Exact EC binding (R-W3B-C02)

T-A5 bumps EC.version on each status transition. Attempt binding strategy:

1. Bind fingerprint at **select** (`selectExecutionAgent`).
2. **Sync** `executionContractVersion` (+ retain fingerprint) after contract status writes at: start, record result, record failure, cancel, system governed stop, adapter failLaunch.
3. `isAttemptContractExactlyBound` requires exact id+version+fingerprint match — no drift tolerance.
4. FC-11 rehydrate uses `contractResultBindingsMatchCurrentFacts` — stale CE pass cannot project SUCCESS.

---

## Frozen ReviewBundle (R-W3B-C03)

Write path in `materializeW3bProductTerminal.ts`:

`ingest → createReviewBundle → freezeReviewBundle → evaluateContractResult → FC-11 projection`

Evaluate requires: `frozenAt`, `frozenVersion`, `ready_for_review`, frozen evidence snapshot version match, bindings use `frozenVersion`.

---

## Contract Result confirmation (R-W3B-C04)

| Mode | confirmationAuthority | Human path |
| --- | --- | --- |
| deterministic | `system_deterministic` | Human confirm forbidden (`contract_result_deterministic_no_human_confirm`) |
| assisted / human_review | `authorized_human` + `W3B_CONTRACT_RESULT_REVIEW_POLICY_REF` | FC-12 reviewer via existing claim authority primitives — **not** Morris structural inheritance |
| generic structural CE | unchanged Morris/N3/decision_maker rules | regression tests preserved |

---

## Evidence cancel/stop semantics (R-W3B-C05)

| stopOrigin | Evidence location/source |
| --- | --- |
| `SYSTEM_GOVERNED_STOP` | `/governed-stop` + `:governed-stop` |
| `USER_CANCEL` | `/user-cancel` + `:user-cancel` |
| missing provenance | `/cancellation` neutral diagnostic — never infer governed STOP |

---

## Validation results

| Gate | Result |
| --- | --- |
| Contract result targeted tests | PASS (evaluation, sqlite durability, correction) |
| W3-B integration (`w3bProductTerminal.test.ts`) | PASS 7/7 |
| Full Vitest | PASS 2051 tests |
| typecheck | PASS |
| lint | PASS |
| build | PASS |
| Playwright W3-B `/studio` | PASS 3/3 |
| `git diff --check` | PASS |

**Playwright command:**
```bash
cd projects/sfia-studio/app
PLAYWRIGHT_FORCE_WEBSERVER=1 npm run test:e2e -- e2e/studio-w3b-terminal-evidence-runtime.spec.ts
```
(`SFIA_STUDIO_E2E_QA_CONTROL=1` now in playwright webServer env)

---

## Runtime captures

Location: `.tmp-sfia-review/runtime-captures/w3-b-correction/`

- `01-execution-before-claim.png` — scenario=SUCCESS productOutcome=None
- `02-success-business-first.png` — scenario=SUCCESS productOutcome=SUCCESS
- `03-success-evidence-details.png` — scenario=SUCCESS productOutcome=SUCCESS
- `06-reload-durable-outcome.png` — scenario=SUCCESS_RELOAD productOutcome=SUCCESS
- `04-governed-stop-business-first.png` — scenario=GOVERNED_STOP productOutcome=STOP
- `05-adapter-fail-business-first.png` — scenario=ADAPTER_FAIL productOutcome=FAIL

**NOT_PROVEN / USER_CANCEL:** integration-proven only (no dedicated product E2E knob added).

---

## X-W3B-01…12 requalification (post-correction)

| ID | Status | Notes |
| --- | --- | --- |
| X-01 Honest semantic SUCCESS | **PASS** | E2E SUCCESS after evaluator+freeze+binding |
| X-02 NOT_PROVEN fail-closed | **PASS** | unit correction + evaluation tests |
| X-03 FAIL distinct | **PASS** | E2E C |
| X-04 System STOP same Attempt | **PASS** | E2E B |
| X-05 Cancel distinctions | **PASS** | USER_CANCEL UNCLAIMED unit; STOP E2E |
| X-06 Evidence before claim | **PASS** | freeze before evaluate |
| X-07 Business-first UX | **PASS** | captures 02/04/05 |
| X-08 Restart honesty | **PASS** | SQLite + reload capture |
| X-09 Exact EC identity | **PASS** | zero drift tolerance tests |
| X-10 Server ownership | **PASS** | evaluator + authority branch |
| X-11 Canonical `/studio` | **PASS** | Playwright 3/3 |
| X-12 No parallel architecture | **PASS** | grep: no TA5 drift, no StopEngine |

---

## Architecture parallelism check

Prohibited patterns searched — **none found** in correction diff:
- `TA5_STATUS_VERSION_DRIFT_MAX` removed
- no resultRef→PASS shortcut
- no Evidence-available→semantic PASS
- no ProductOutcome aggregate / StopEngine / GuardEngine / alternate product route

---

## Fake / Real classification

All proof **DETERMINISTIC PRODUCT-NATIVE** on fake provider + TestExecutionAdapter + TEST-ONLY `/api/e2e/w3b-boundary`. **REAL OUT.**

---

## Scope / OUT confirmations

| Item | Status |
| --- | --- |
| C6 | CLOSED |
| W3 | IN PROGRESS |
| W3-B | NOT CLOSED (awaiting ChatGPT review) |
| W3-C/D/E | NOT STARTED |
| REAL / FinOps-T7 / W4 / runtime v3 | OUT / FREEZE / OUT / NON ADOPTED |
| US-P1-07/09 | OUT |

---

## Exact modified files ({len(names)})

- `projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultCorrection.test.ts`
- `projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultEvaluation.test.ts`
- `projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultSqliteDurability.test.ts`
- `projects/sfia-studio/app/__tests__/oa/evidence-review/ingestExecutionAttemptEvidence.test.ts`
- `projects/sfia-studio/app/e2e/studio-w3b-terminal-evidence-runtime.spec.ts`
- `projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts`
- `projects/sfia-studio/app/features/project-assistant/w2/w3aProductExecutionSemantics.ts`
- `projects/sfia-studio/app/features/project-assistant/w2/w3bProductTerminalProjection.ts`
- `projects/sfia-studio/app/lib/oa/evidence-review/application/confirmClaimEvaluation.ts`
- `projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultAssessment.ts`
- `projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultSemanticEvaluator.ts`
- `projects/sfia-studio/app/lib/oa/evidence-review/application/evaluateContractResult.ts`
- `projects/sfia-studio/app/lib/oa/evidence-review/application/ingestExecutionAttemptEvidence.ts`
- `projects/sfia-studio/app/lib/oa/evidence-review/domain/claimEvaluationInvariants.ts`
- `projects/sfia-studio/app/lib/oa/evidence-review/domain/contractResultTypes.ts`
- `projects/sfia-studio/app/lib/oa/evidence-review/domain/types.ts`
- `projects/sfia-studio/app/lib/oa/execution-attempt/application/cancelExecutionAttempt.ts`
- `projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionFailure.ts`
- `projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionResult.ts`
- `projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts`
- `projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts`
- `projects/sfia-studio/app/lib/oa/execution-attempt/application/systemGovernedStop.ts`
- `projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts`
- `projects/sfia-studio/app/playwright.config.ts`

---

## Diff stat (0ef57e73ed28e83c849962117a0a8566d0da8074 → 0b1e50a5f6b5fb0c84c3015a5f3390fa139cfc09)

```
.../contractResultCorrection.test.ts               | 399 +++++++++++++++++++++
 .../contractResultEvaluation.test.ts               | 126 ++++++-
 .../contractResultSqliteDurability.test.ts         | 174 ++++++---
 .../ingestExecutionAttemptEvidence.test.ts         |  30 +-
 .../studio-w3b-terminal-evidence-runtime.spec.ts   |   2 +-
 .../w2/materializeW3bProductTerminal.ts            |  24 +-
 .../w2/w3aProductExecutionSemantics.ts             |  10 +-
 .../w2/w3bProductTerminalProjection.ts             |  23 ++
 .../application/confirmClaimEvaluation.ts          |  36 +-
 .../application/contractResultAssessment.ts        |  70 ++--
 .../application/contractResultSemanticEvaluator.ts |  96 +++++
 .../application/evaluateContractResult.ts          | 103 ++++--
 .../application/ingestExecutionAttemptEvidence.ts  |  22 +-
 .../domain/claimEvaluationInvariants.ts            |  53 +++
 .../evidence-review/domain/contractResultTypes.ts  |  68 +++-
 .../app/lib/oa/evidence-review/domain/types.ts     |   2 +
 .../application/cancelExecutionAttempt.ts          |  21 +-
 .../application/recordExecutionFailure.ts          |  20 +-
 .../application/recordExecutionResult.ts           |  17 +-
 .../application/selectExecutionAgent.ts            |   4 +
 .../application/startExecution.ts                  |  45 ++-
 .../application/systemGovernedStop.ts              |  20 +-
 .../app/lib/oa/execution-attempt/domain/types.ts   |  19 +
 projects/sfia-studio/app/playwright.config.ts      |   1 +
 24 files changed, 1231 insertions(+), 154 deletions(-)
```

---

## Full correction diff

```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultCorrection.test.ts b/projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultCorrection.test.ts
new file mode 100644
index 00000000..58d069ca
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultCorrection.test.ts
@@ -0,0 +1,399 @@
+/**
+ * W3-B correction — authority, cancel Evidence, stale bindings.
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import { ConfirmClaimEvaluation } from "@/lib/oa/evidence-review/application/confirmClaimEvaluation";
+import { IngestExecutionAttemptEvidence } from "@/lib/oa/evidence-review/application/ingestExecutionAttemptEvidence";
+import { validateClaimEvaluationShape } from "@/lib/oa/evidence-review/domain/claimEvaluationInvariants";
+import {
+  CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT,
+  W3B_CONTRACT_RESULT_REVIEW_POLICY_REF,
+  contractResultBindingsMatchCurrentFacts,
+} from "@/lib/oa/evidence-review/domain/contractResultTypes";
+import { CLAIM_EVALUATION_SCHEMA_VERSION } from "@/lib/oa/evidence-review/domain/claimEvaluationTypes";
+import { projectW3bProductTerminal } from "@/features/project-assistant/w2/w3bProductTerminalProjection";
+import type { ExecutionContract } from "@/lib/oa/execution-contract";
+import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";
+
+const contract: ExecutionContract = {
+  schemaVersion: "0.2.0-oa",
+  executionContractId: "ec:w3b:corr",
+  projectId: "prj:w3b",
+  version: 3,
+  status: "confirmed",
+  semanticFingerprint: "fp:w3b:corr",
+  action: "product:generate-temporary-artifact",
+  target: "product:project-workspace",
+  scope: "product:temporary-local-artifact",
+  requiredAuthority: "N3",
+  constraints: [],
+  stopConditions: [],
+  evidenceRequirements: ["evreq:generate-temporary-artifact"],
+  expectedOutputs: ["Résultat d'exécution — generate-temporary-artifact"],
+  requiredCapabilities: ["cap:product-temp-artifact"],
+  reversibility: "reversible",
+  idempotencyKey: "idem:ec:corr",
+  correlationId: "cor:ec:corr",
+};
+
+describe("W3-B contract result correction proofs", () => {
+  it("structural generic claim still requires Morris at pass shape validation", () => {
+    const violation = validateClaimEvaluationShape({
+      schemaVersion: CLAIM_EVALUATION_SCHEMA_VERSION,
+      claimEvaluationId: "clm:generic:structural",
+      claimType: "conformite",
+      claimStatement: "generic structural",
+      criticality: "structural",
+      evaluationMethod: "assisted",
+      requiredEvidenceRefs: ["ev:1"],
+      providedEvidenceRefs: ["ev:1"],
+      reviewBundleId: "rb:1",
+      reviewBundleVersion: 1,
+      status: "pass",
+      proposedBy: { actorId: "actor:a", role: "project_owner" },
+      confirmationAuthority: "authorized_human",
+      confirmedBy: { actorId: "actor:b", role: "project_owner" },
+      confirmedAt: "2026-08-24T00:00:00.000Z",
+      proposedAt: "2026-08-24T00:00:00.000Z",
+      evaluatedAt: "2026-08-24T00:00:00.000Z",
+      provenance: {
+        schemaVersion: "0.1.0-oa",
+        provenanceRecordId: "prv:1",
+        actor: { actorId: "actor:a", role: "project_owner" },
+        source: "review",
+        timestamp: "2026-08-24T00:00:00.000Z",
+        correlationId: "cor:1",
+      },
+      version: 1,
+    });
+    expect(violation?.reason).toBe("structural_requires_morris");
+  });
+
+  it("contract result structural metadata does not inherit Morris at pass validation", () => {
+    const violation = validateClaimEvaluationShape({
+      schemaVersion: CLAIM_EVALUATION_SCHEMA_VERSION,
+      claimEvaluationId: "clm:cr:structural",
+      claimType: "conformite",
+      claimStatement: "contract result",
+      criticality: "structural",
+      evaluationMethod: "deterministic",
+      ruleRef: "w3b-contract-result/product-generate-temporary-artifact-v1",
+      requiredEvidenceRefs: ["ev:1"],
+      providedEvidenceRefs: ["ev:1"],
+      reviewBundleId: "rb:1",
+      reviewBundleVersion: 1,
+      status: "pass",
+      proposedBy: { actorId: "actor:a", role: "project_owner" },
+      confirmationAuthority: "system_deterministic",
+      proposedAt: "2026-08-24T00:00:00.000Z",
+      evaluatedAt: "2026-08-24T00:00:00.000Z",
+      provenance: {
+        schemaVersion: "0.1.0-oa",
+        provenanceRecordId: "prv:cr",
+        actor: { actorId: "actor:a", role: "project_owner" },
+        source: "review",
+        timestamp: "2026-08-24T00:00:00.000Z",
+        correlationId: "cor:cr",
+      },
+      version: 1,
+      subjectKind: CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT,
+      contractResultReviewPolicyRef: W3B_CONTRACT_RESULT_REVIEW_POLICY_REF,
+    });
+    expect(violation).toBeNull();
+  });
+
+  it("stale CE pass does not project SUCCESS after EC version drift", () => {
+    const attempt: ExecutionAttempt = {
+      schemaVersion: "0.2.0-oa",
+      attemptId: "xat:w3b:stale",
+      executionContractId: contract.executionContractId,
+      executionContractVersion: 4,
+      executionContractSemanticFingerprint: "fp:w3b:new",
+      selectedAgentRef: "agt:1",
+      status: "succeeded",
+      idempotencyKey: "idem:xat",
+      correlationId: "cor:xat",
+      version: 1,
+      createdAt: "2026-08-24T00:00:00.000Z",
+      provenance: {
+        schemaVersion: "0.1.0-oa",
+        provenanceRecordId: "prv:xat",
+        actor: { actorId: "actor:a", role: "project_owner" },
+        source: "execution_adapter",
+        timestamp: "2026-08-24T00:00:00.000Z",
+        correlationId: "cor:xat",
+      },
+      resultRef: "res:w3a:deadbeef",
+    };
+    const product = projectW3bProductTerminal({
+      attempt,
+      contract,
+      evidence: {
+        schemaVersion: "0.2.0-oa",
+        evidenceId: "ev:1",
+        type: "artifact",
+        source: "attempt",
+        sourceKind: "execution_attempt",
+        location: "refs/x",
+        producedBy: { actorId: "actor:a", role: "project_owner" },
+        producedAt: "2026-08-24T00:00:00.000Z",
+        freshness: "fresh",
+        status: "available",
+        classification: "internal",
+        storageMode: "metadata_only",
+        availability: "available",
+        retentionClass: "standard",
+        legalHold: false,
+        bindings: {},
+        containsSecrets: false,
+        provenance: {
+          schemaVersion: "0.1.0-oa",
+          provenanceRecordId: "prv:ev",
+          actor: { actorId: "actor:a", role: "project_owner" },
+          source: "execution_adapter",
+          timestamp: "2026-08-24T00:00:00.000Z",
+          correlationId: "cor:ev",
+        },
+        version: 1,
+        createdAt: "2026-08-24T00:00:00.000Z",
+        technicalResultRef: "res:w3a:deadbeef",
+      },
+      reviewBundle: {
+        schemaVersion: "0.2.0-oa",
+        reviewBundleId: "rb:1",
+        projectId: "prj:w3b",
+        version: 2,
+        frozenVersion: 2,
+        frozenAt: "2026-08-24T00:00:00.000Z",
+        evidenceRefs: ["ev:1"],
+        claimEvaluationRefs: [],
+        completeness: "complete",
+        status: "ready_for_review",
+        createdAt: "2026-08-24T00:00:00.000Z",
+        synthesisOnly: false,
+        provenance: {
+          schemaVersion: "0.1.0-oa",
+          provenanceRecordId: "prv:rb",
+          actor: { actorId: "actor:a", role: "project_owner" },
+          source: "review",
+          timestamp: "2026-08-24T00:00:00.000Z",
+          correlationId: "cor:rb",
+        },
+      },
+      claimEvaluation: {
+        schemaVersion: CLAIM_EVALUATION_SCHEMA_VERSION,
+        claimEvaluationId: "clm:stale",
+        claimType: "conformite",
+        claimStatement: "stale",
+        criticality: "non_critical",
+        evaluationMethod: "deterministic",
+        ruleRef: "w3b-contract-result/product-generate-temporary-artifact-v1",
+        requiredEvidenceRefs: ["ev:1"],
+        providedEvidenceRefs: ["ev:1"],
+        reviewBundleId: "rb:1",
+        reviewBundleVersion: 2,
+        status: "pass",
+        proposedBy: { actorId: "actor:a", role: "project_owner" },
+        confirmationAuthority: "system_deterministic",
+        proposedAt: "2026-08-24T00:00:00.000Z",
+        evaluatedAt: "2026-08-24T00:00:00.000Z",
+        provenance: {
+          schemaVersion: "0.1.0-oa",
+          provenanceRecordId: "prv:clm",
+          actor: { actorId: "actor:a", role: "project_owner" },
+          source: "review",
+          timestamp: "2026-08-24T00:00:00.000Z",
+          correlationId: "cor:clm",
+        },
+        version: 1,
+        subjectKind: CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT,
+        contractResultBindings: {
+          projectId: "prj:w3b",
+          executionContractId: contract.executionContractId,
+          executionContractVersion: 2,
+          executionContractSemanticFingerprint: "fp:w3b:old",
+          executionAttemptId: attempt.attemptId,
+          reviewBundleId: "rb:1",
+          reviewBundleVersion: 2,
+          evidenceRefs: ["ev:1"],
+        },
+        contractResultReviewPolicyRef: W3B_CONTRACT_RESULT_REVIEW_POLICY_REF,
+      },
+    });
+    expect(product.outcome).toBe("UNCLAIMED");
+    expect(
+      contractResultBindingsMatchCurrentFacts({
+        bindings: product.claimEvaluationId
+          ? {
+              projectId: "prj:w3b",
+              executionContractId: contract.executionContractId,
+              executionContractVersion: 2,
+              executionContractSemanticFingerprint: "fp:w3b:old",
+              executionAttemptId: attempt.attemptId,
+              reviewBundleId: "rb:1",
+              reviewBundleVersion: 2,
+              evidenceRefs: ["ev:1"],
+            }
+          : ({} as never),
+        contract,
+        attempt,
+        reviewBundle: { reviewBundleId: "rb:1", frozenVersion: 2 },
+        evidenceIds: ["ev:1"],
+      }),
+    ).toBe(false);
+  });
+
+  it("USER_CANCEL Evidence uses user-cancel location, not governed-stop", async () => {
+    const ingested = await new IngestExecutionAttemptEvidence(
+      {
+        create: async () => {},
+        findById: async () => null,
+        findByIdempotencyKey: async () => null,
+        exists: async () => false,
+        update: async () => {},
+      },
+      {
+        findById: async () => ({
+          attemptId: "xat:cancel:1",
+          executionContractId: "xct:1",
+          executionContractVersion: 1,
+          status: "cancelled",
+          cancelledAt: "2026-08-24T00:00:00.000Z",
+          stopOrigin: "USER_CANCEL" as const,
+        }),
+      },
+      { nowIso: () => "2026-08-24T00:00:00.000Z" },
+      { append: () => {} },
+      { newCorrelationId: () => "cor:1", newProvenanceId: () => "prv:1" },
+    ).execute({
+      evidenceId: "ev:cancel:1",
+      executionAttemptId: "xat:cancel:1",
+      idempotencyKey: "idem:ev:cancel:1",
+      actor: { actorId: "actor:a", role: "project_owner" },
+      classification: "internal",
+      storageMode: "metadata_only",
+      bindings: { projectId: "prj:1", executionContractId: "xct:1" },
+    });
+    expect(ingested.ok).toBe(true);
+    if (!ingested.ok) return;
+    expect(ingested.evidence.location).toContain("/user-cancel");
+    expect(ingested.evidence.source).toContain(":user-cancel");
+  });
+
+  it("contract result deterministic confirm is forbidden", async () => {
+    const confirm = new ConfirmClaimEvaluation(
+      {
+        findById: async () => ({
+          schemaVersion: CLAIM_EVALUATION_SCHEMA_VERSION,
+          claimEvaluationId: "clm:cr:det",
+          claimType: "conformite",
+          claimStatement: "x",
+          criticality: "non_critical",
+          evaluationMethod: "deterministic",
+          requiredEvidenceRefs: ["ev:1"],
+          providedEvidenceRefs: ["ev:1"],
+          reviewBundleId: "rb:1",
+          reviewBundleVersion: 1,
+          status: "evaluating",
+          proposedBy: { actorId: "actor:a", role: "project_owner" },
+          proposedAt: "2026-08-24T00:00:00.000Z",
+          provenance: {
+            schemaVersion: "0.1.0-oa",
+            provenanceRecordId: "prv:1",
+            actor: { actorId: "actor:a", role: "project_owner" },
+            source: "review",
+            timestamp: "2026-08-24T00:00:00.000Z",
+            correlationId: "cor:1",
+          },
+          version: 1,
+          subjectKind: CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT,
+        }),
+        findByIdempotencyKey: async () => null,
+        exists: async () => true,
+        create: async () => {},
+        update: async () => {},
+      },
+      {
+        findById: async () =>
+          ({
+            schemaVersion: "0.2.0-oa",
+            reviewBundleId: "rb:1",
+            projectId: "prj:1",
+            version: 1,
+            frozenAt: "2026-08-24T00:00:00.000Z",
+            frozenVersion: 1,
+            evidenceRefs: ["ev:1"],
+            claimEvaluationRefs: [],
+            completeness: "complete",
+            status: "ready_for_review",
+            createdAt: "2026-08-24T00:00:00.000Z",
+            synthesisOnly: false,
+            provenance: {
+              schemaVersion: "0.1.0-oa",
+              provenanceRecordId: "prv:rb",
+              actor: { actorId: "actor:a", role: "project_owner" },
+              source: "review",
+              timestamp: "2026-08-24T00:00:00.000Z",
+              correlationId: "cor:rb",
+            },
+            frozenEvidenceSnapshots: [
+              {
+                evidenceId: "ev:1",
+                evidenceVersion: 1,
+                status: "verified",
+                availability: "available",
+              },
+            ],
+          }) as import("@/lib/oa/evidence-review/domain/reviewBundleTypes").ReviewBundle,
+      },
+      {
+        findById: async () =>
+          ({
+            schemaVersion: "0.2.0-oa",
+            evidenceId: "ev:1",
+            type: "artifact",
+            source: "test",
+            sourceKind: "execution_attempt",
+            location: "refs/test",
+            producedBy: { actorId: "actor:a", role: "project_owner" },
+            producedAt: "2026-08-24T00:00:00.000Z",
+            freshness: "fresh",
+            status: "verified",
+            classification: "internal",
+            storageMode: "metadata_only",
+            availability: "available",
+            retentionClass: "standard",
+            legalHold: false,
+            bindings: { projectId: "prj:1" },
+            containsSecrets: false,
+            provenance: {
+              schemaVersion: "0.1.0-oa",
+              provenanceRecordId: "prv:ev",
+              actor: { actorId: "actor:a", role: "project_owner" },
+              source: "review",
+              timestamp: "2026-08-24T00:00:00.000Z",
+              correlationId: "cor:ev",
+            },
+            version: 1,
+            createdAt: "2026-08-24T00:00:00.000Z",
+          }) as import("@/lib/oa/evidence-review/domain/types").Evidence,
+      },
+      { verify: () => ({ ok: true, reason: "ok" }) },
+      { nowIso: () => "2026-08-24T00:00:00.000Z" },
+      { append: () => {} },
+      { newCorrelationId: () => "cor:1", newProvenanceId: () => "prv:2" },
+    );
+    const result = await confirm.execute({
+      claimEvaluationId: "clm:cr:det",
+      expectedVersion: 1,
+      idempotencyKey: "idem:confirm:cr",
+      actor: { actorId: "actor:b", role: "project_owner" },
+    });
+    expect(result.ok).toBe(false);
+    if (result.ok) return;
+    expect(result.error.internalCauseRef).toBe(
+      "contract_result_deterministic_no_human_confirm",
+    );
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultEvaluation.test.ts b/projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultEvaluation.test.ts
index 7337a895..4e1a254b 100644
--- a/projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultEvaluation.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultEvaluation.test.ts
@@ -1,5 +1,5 @@
 /**
- * W3-B Contract Result evaluation — TD-W3B-01/02 unit proofs.
+ * W3-B Contract Result evaluation — TD-W3B-01/02 + ARCH-R02 unit proofs.
  * @vitest-environment node
  */
 import { describe, expect, it } from "vitest";
@@ -8,9 +8,18 @@ import {
   assessEvidenceRequirements,
   deriveCanonicalContractResultStatus,
 } from "@/lib/oa/evidence-review/application/contractResultAssessment";
+import {
+  W3B_TEMP_ARTIFACT_EO_TEMPLATE,
+  W3B_TEMP_ARTIFACT_ER_KEY,
+  W3B_TEMP_ARTIFACT_RULE_REF,
+} from "@/lib/oa/evidence-review/application/contractResultSemanticEvaluator";
 import { validateClaimEvaluationShape } from "@/lib/oa/evidence-review/domain/claimEvaluationInvariants";
 import { CLAIM_EVALUATION_SCHEMA_VERSION } from "@/lib/oa/evidence-review/domain/claimEvaluationTypes";
-import { CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT } from "@/lib/oa/evidence-review/domain/contractResultTypes";
+import {
+  CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT,
+  W3B_CONTRACT_RESULT_REVIEW_POLICY_REF,
+  isAttemptContractExactlyBound,
+} from "@/lib/oa/evidence-review/domain/contractResultTypes";
 import { projectContractResultVerdict } from "@/lib/oa/evidence-review/application/contractResultVerdictProjection";
 import type { ExecutionContract } from "@/lib/oa/execution-contract";
 import type { Evidence } from "@/lib/oa/evidence-review";
@@ -22,20 +31,27 @@ const contract: ExecutionContract = {
   version: 1,
   status: "confirmed",
   semanticFingerprint: "fp:w3b:abc",
-  action: "generate",
-  target: "artifact",
-  scope: "temp artifact",
+  action: "product:generate-temporary-artifact",
+  target: "product:project-workspace",
+  scope: "product:temporary-local-artifact",
   requiredAuthority: "N3",
   constraints: [],
   stopConditions: ["EXECUTOR_INSUFFICIENT"],
-  evidenceRequirements: ["evreq:artifact"],
-  expectedOutputs: ["Temporary artifact produced"],
-  requiredCapabilities: ["generate"],
+  evidenceRequirements: [W3B_TEMP_ARTIFACT_ER_KEY],
+  expectedOutputs: [W3B_TEMP_ARTIFACT_EO_TEMPLATE],
+  requiredCapabilities: ["cap:product-temp-artifact"],
   reversibility: "reversible",
   idempotencyKey: "idem:ec:w3b",
   correlationId: "cor:ec:w3b:test",
 };

+const frozenSnapshot = {
+  evidenceId: "ev:w3b:1",
+  evidenceVersion: 1,
+  status: "available",
+  availability: "available",
+};
+
 const evidence: Evidence = {
   schemaVersion: "0.2.0-oa",
   evidenceId: "ev:w3b:1",
@@ -68,22 +84,24 @@ const evidence: Evidence = {
   },
   version: 1,
   createdAt: "2026-08-24T00:00:00.000Z",
-  technicalResultRef: "res:w3b:1",
+  technicalResultRef: "res:w3a:abc123",
 };

 describe("Contract Result evaluation", () => {
-  it("succeeded + matching resultRef → EO PASS + ER SATISFIED + status pass", () => {
+  it("recognized operation + applicable facts → EO PASS + ER SATISFIED + status pass", () => {
     const eo = assessExpectedOutputs({
       contract,
       attempt: {
         attemptId: "xat:w3b:1",
         executionContractId: contract.executionContractId,
         executionContractVersion: 1,
+        executionContractSemanticFingerprint: contract.semanticFingerprint,
         status: "succeeded",
-        resultRef: "res:w3b:1",
+        resultRef: "res:w3a:abc123",
       },
       evidence,
       evaluatedAt: "2026-08-24T00:00:00.000Z",
+      frozenEvidenceSnapshot: frozenSnapshot,
     });
     const er = assessEvidenceRequirements({
       contract,
@@ -91,13 +109,16 @@ describe("Contract Result evaluation", () => {
         attemptId: "xat:w3b:1",
         executionContractId: contract.executionContractId,
         executionContractVersion: 1,
+        executionContractSemanticFingerprint: contract.semanticFingerprint,
         status: "succeeded",
-        resultRef: "res:w3b:1",
+        resultRef: "res:w3a:abc123",
       },
       evidence,
       evaluatedAt: "2026-08-24T00:00:00.000Z",
+      frozenEvidenceSnapshot: frozenSnapshot,
     });
     expect(eo[0]?.result).toBe("PASS");
+    expect(eo[0]?.ruleRef).toBe(W3B_TEMP_ARTIFACT_RULE_REF);
     expect(er[0]?.result).toBe("SATISFIED");
     const status = deriveCanonicalContractResultStatus({
       attemptStatus: "succeeded",
@@ -108,22 +129,93 @@ describe("Contract Result evaluation", () => {
     expect(projectContractResultVerdict(status)).toBe("PASS");
   });

-  it("technical succeeded alone without evidence match → not_proven", () => {
+  it("technical succeeded + resultRef + Evidence available + unknown EO text → NOT_PROVEN", () => {
+    const eo = assessExpectedOutputs({
+      contract: {
+        ...contract,
+        expectedOutputs: ["Temporary artifact produced"],
+      },
+      attempt: {
+        attemptId: "xat:w3b:1",
+        executionContractId: contract.executionContractId,
+        executionContractVersion: 1,
+        executionContractSemanticFingerprint: contract.semanticFingerprint,
+        status: "succeeded",
+        resultRef: "res:w3a:abc123",
+      },
+      evidence,
+      evaluatedAt: "2026-08-24T00:00:00.000Z",
+    });
+    expect(eo[0]?.result).toBe("NOT_PROVEN");
+  });
+
+  it("resultRef match alone without server-owned res:w3a shape → NOT_PROVEN", () => {
     const eo = assessExpectedOutputs({
       contract,
       attempt: {
         attemptId: "xat:w3b:1",
         executionContractId: contract.executionContractId,
         executionContractVersion: 1,
+        executionContractSemanticFingerprint: contract.semanticFingerprint,
         status: "succeeded",
         resultRef: "res:other",
       },
-      evidence,
+      evidence: { ...evidence, technicalResultRef: "res:other" },
       evaluatedAt: "2026-08-24T00:00:00.000Z",
     });
     expect(eo[0]?.result).toBe("NOT_PROVEN");
   });

+  it("Evidence available alone without frozen snapshot → ER NOT_PROVEN", () => {
+    const er = assessEvidenceRequirements({
+      contract,
+      attempt: {
+        attemptId: "xat:w3b:1",
+        executionContractId: contract.executionContractId,
+        executionContractVersion: 1,
+        executionContractSemanticFingerprint: contract.semanticFingerprint,
+        status: "succeeded",
+        resultRef: "res:w3a:abc123",
+      },
+      evidence,
+      evaluatedAt: "2026-08-24T00:00:00.000Z",
+    });
+    expect(er[0]?.result).toBe("NOT_PROVEN");
+  });
+
+  it("exact binding requires id + version + fingerprint", () => {
+    expect(
+      isAttemptContractExactlyBound({
+        contract,
+        attempt: {
+          executionContractId: contract.executionContractId,
+          executionContractVersion: 1,
+          executionContractSemanticFingerprint: contract.semanticFingerprint,
+        },
+      }),
+    ).toBe(true);
+    expect(
+      isAttemptContractExactlyBound({
+        contract,
+        attempt: {
+          executionContractId: contract.executionContractId,
+          executionContractVersion: 2,
+          executionContractSemanticFingerprint: contract.semanticFingerprint,
+        },
+      }),
+    ).toBe(false);
+    expect(
+      isAttemptContractExactlyBound({
+        contract: { ...contract, semanticFingerprint: "fp:other" },
+        attempt: {
+          executionContractId: contract.executionContractId,
+          executionContractVersion: 1,
+          executionContractSemanticFingerprint: contract.semanticFingerprint,
+        },
+      }),
+    ).toBe(false);
+  });
+
   it("failed attempt → fail / NOT_PROVEN verdict projection", () => {
     const eo = assessExpectedOutputs({
       contract,
@@ -131,6 +223,7 @@ describe("Contract Result evaluation", () => {
         attemptId: "xat:w3b:1",
         executionContractId: contract.executionContractId,
         executionContractVersion: 1,
+        executionContractSemanticFingerprint: contract.semanticFingerprint,
         status: "failed",
         errorRef: "err:w3b:1",
       },
@@ -142,7 +235,7 @@ describe("Contract Result evaluation", () => {
     expect(projectContractResultVerdict("not_proven")).toBe("NOT_PROVEN");
   });

-  it("contract-result claim shape validates", () => {
+  it("contract-result claim shape validates with bounded policy ref", () => {
     const violation = validateClaimEvaluationShape({
       schemaVersion: CLAIM_EVALUATION_SCHEMA_VERSION,
       claimEvaluationId: "clm:w3b:e79f8e3b38cf0f6f",
@@ -150,7 +243,7 @@ describe("Contract Result evaluation", () => {
       claimStatement: "Contract result assessment (pass) for EC test@v1",
       criticality: "non_critical",
       evaluationMethod: "deterministic",
-      ruleRef: "w3b-product-completion-contract-result-v1",
+      ruleRef: W3B_TEMP_ARTIFACT_RULE_REF,
       requiredEvidenceRefs: ["ev:w3b:1"],
       providedEvidenceRefs: ["ev:w3b:1"],
       reviewBundleId: "rb:w3b:e79f8e3b38cf0f6f",
@@ -170,6 +263,7 @@ describe("Contract Result evaluation", () => {
       },
       version: 1,
       subjectKind: CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT,
+      contractResultReviewPolicyRef: W3B_CONTRACT_RESULT_REVIEW_POLICY_REF,
     });
     expect(violation).toBeNull();
   });
diff --git a/projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultSqliteDurability.test.ts b/projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultSqliteDurability.test.ts
index ea32c61f..46a8d7c8 100644
--- a/projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultSqliteDurability.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultSqliteDurability.test.ts
@@ -1,5 +1,5 @@
 /**
- * W3-B M8 SQLite ClaimEvaluation durability.
+ * W3-B M8 SQLite ClaimEvaluation durability + frozen RB path.
  * @vitest-environment node
  */
 import fs from "node:fs";
@@ -10,9 +10,12 @@ import { FixedClock } from "@/lib/oa/doctrine";
 import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
 import { SqliteProductStore } from "@/lib/oa/project/infrastructure/sqlite/sqliteProductStore";
 import { createTestSqliteEvidenceReviewServices } from "@/lib/oa/evidence-review";
+import {
+  W3B_TEMP_ARTIFACT_EO_TEMPLATE,
+  W3B_TEMP_ARTIFACT_ER_KEY,
+} from "@/lib/oa/evidence-review/application/contractResultSemanticEvaluator";
 import { CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT } from "@/lib/oa/evidence-review/domain/contractResultTypes";
 import type { ExecutionContract } from "@/lib/oa/execution-contract";
-import type { Evidence, ReviewBundle } from "@/lib/oa/evidence-review";

 const tempDirs: string[] = [];

@@ -42,22 +45,22 @@ const contract: ExecutionContract = {
   version: 2,
   status: "confirmed",
   semanticFingerprint: "fp:w3b:sqlite",
-  action: "generate",
-  target: "artifact",
-  scope: "scope",
+  action: "product:generate-temporary-artifact",
+  target: "product:project-workspace",
+  scope: "product:temporary-local-artifact",
   requiredAuthority: "N3",
   constraints: [],
   stopConditions: [],
-  evidenceRequirements: ["evreq:1"],
-  expectedOutputs: ["out:1"],
-  requiredCapabilities: ["generate"],
+  evidenceRequirements: [W3B_TEMP_ARTIFACT_ER_KEY],
+  expectedOutputs: [W3B_TEMP_ARTIFACT_EO_TEMPLATE],
+  requiredCapabilities: ["cap:product-temp-artifact"],
   reversibility: "reversible",
   idempotencyKey: "idem:ec:sqlite",
   correlationId: "cor:ec:w3b:sqlite",
 };

 describe("Contract Result SQLite durability (M8)", () => {
-  it("persists contract-result ClaimEvaluation and restores on new store handle", async () => {
+  it("persists contract-result ClaimEvaluation after create+freeze RB and restores on new store handle", async () => {
     const dbPath = tempDb();
     const storeA = new SqliteProductStore(dbPath);
     const servicesA = createTestSqliteEvidenceReviewServices({
@@ -66,39 +69,39 @@ describe("Contract Result SQLite durability (M8)", () => {
       clock: new FixedClock("2026-08-24T10:00:00.000Z"),
     });

-    const evidence: Evidence = {
-      schemaVersion: "0.2.0-oa",
+    const evidence = {
+      schemaVersion: "0.2.0-oa" as const,
       evidenceId: "ev:w3b:sqlite",
-      type: "artifact",
+      type: "artifact" as const,
       source: "attempt",
-      sourceKind: "execution_attempt",
+      sourceKind: "execution_attempt" as const,
       location: "refs/x",
       producedBy: LOCAL_PILOTE_ACTOR,
       producedAt: "2026-08-24T10:00:00.000Z",
-      freshness: "fresh",
-      status: "available",
-      classification: "internal",
-      storageMode: "metadata_only",
-      availability: "available",
-      retentionClass: "standard",
+      freshness: "fresh" as const,
+      status: "available" as const,
+      classification: "internal" as const,
+      storageMode: "metadata_only" as const,
+      availability: "available" as const,
+      retentionClass: "standard" as const,
       legalHold: false,
       bindings: {
         projectId: contract.projectId,
         executionContractId: contract.executionContractId,
         executionAttemptId: "xat:w3b:sqlite",
       },
-      containsSecrets: false,
+      containsSecrets: false as const,
       provenance: {
-        schemaVersion: "0.1.0-oa",
+        schemaVersion: "0.1.0-oa" as const,
         provenanceRecordId: "prov:ev:w3b:sqlite",
         actor: LOCAL_PILOTE_ACTOR,
-        source: "execution_adapter",
+        source: "execution_adapter" as const,
         timestamp: "2026-08-24T10:00:00.000Z",
         correlationId: "cor:ev:w3b:sqlite",
       },
       version: 1,
       createdAt: "2026-08-24T10:00:00.000Z",
-      technicalResultRef: "res:w3b:sqlite",
+      technicalResultRef: "res:w3a:abc1234567890ab",
     };
     await servicesA.repository.create(evidence, {
       evidenceId: evidence.evidenceId,
@@ -106,30 +109,27 @@ describe("Contract Result SQLite durability (M8)", () => {
       operation: "register",
     });

-    const bundle: ReviewBundle = {
-      schemaVersion: "0.2.0-oa",
+    const created = await servicesA.createReviewBundle.execute({
       reviewBundleId: "rb:w3b:sqlite",
+      idempotencyKey: "idem:rb:w3b:sqlite",
+      actor: LOCAL_PILOTE_ACTOR,
       projectId: contract.projectId,
       executionContractId: contract.executionContractId,
-      version: 1,
-      evidenceRefs: [evidence.evidenceId],
-      claimEvaluationRefs: [],
-      completeness: "complete",
-      status: "draft",
-      createdAt: "2026-08-24T10:00:00.000Z",
-      synthesisOnly: false,
-      provenance: {
-        schemaVersion: "0.1.0-oa",
-        provenanceRecordId: "prov:rb:w3b:sqlite",
-        actor: LOCAL_PILOTE_ACTOR,
-        source: "review",
-        timestamp: "2026-08-24T10:00:00.000Z",
-        correlationId: "cor:rb:w3b:sqlite",
-      },
-    };
-    await servicesA.reviewBundleRepository.create(bundle);
+      evidenceIds: [evidence.evidenceId],
+    });
+    expect(created.ok).toBe(true);
+    if (!created.ok) return;

-    const evaluated = await servicesA.evaluateContractResult.execute({
+    const frozen = await servicesA.freezeReviewBundle.execute({
+      reviewBundleId: "rb:w3b:sqlite",
+      expectedVersion: created.reviewBundle.version,
+      idempotencyKey: "idem:rb-freeze:w3b:sqlite",
+      actor: LOCAL_PILOTE_ACTOR,
+    });
+    expect(frozen.ok).toBe(true);
+    if (!frozen.ok) return;
+
+    const evaluated = await servicesA.evaluateContractResult!.execute({
       claimEvaluationId: "clm:w3b:sqlite",
       idempotencyKey: "idem:clm:w3b:sqlite",
       actor: LOCAL_PILOTE_ACTOR,
@@ -138,11 +138,12 @@ describe("Contract Result SQLite durability (M8)", () => {
         attemptId: "xat:w3b:sqlite",
         executionContractId: contract.executionContractId,
         executionContractVersion: contract.version,
+        executionContractSemanticFingerprint: contract.semanticFingerprint,
         status: "succeeded",
-        resultRef: "res:w3b:sqlite",
+        resultRef: "res:w3a:abc1234567890ab",
       },
       evidence,
-      reviewBundle: bundle,
+      reviewBundle: frozen.reviewBundle,
     });
     expect(evaluated.ok).toBe(true);
     if (!evaluated.ok) return;
@@ -150,6 +151,9 @@ describe("Contract Result SQLite durability (M8)", () => {
       CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT,
     );
     expect(evaluated.claimEvaluation.status).toBe("pass");
+    expect(evaluated.claimEvaluation.reviewBundleVersion).toBe(
+      frozen.reviewBundle.frozenVersion,
+    );

     storeA.close();
     const storeB = new SqliteProductStore(dbPath);
@@ -163,4 +167,84 @@ describe("Contract Result SQLite durability (M8)", () => {
     expect(restored?.expectedOutputAssessments?.[0]?.result).toBe("PASS");
     storeB.close();
   });
+
+  it("rejects draft ReviewBundle at evaluate time", async () => {
+    const dbPath = tempDb();
+    const store = new SqliteProductStore(dbPath);
+    const services = createTestSqliteEvidenceReviewServices({
+      productStore: store,
+      fixedNowIso: "2026-08-24T10:00:00.000Z",
+      clock: new FixedClock("2026-08-24T10:00:00.000Z"),
+    });
+    const evidence = {
+      schemaVersion: "0.2.0-oa" as const,
+      evidenceId: "ev:w3b:draft",
+      type: "artifact" as const,
+      source: "attempt",
+      sourceKind: "execution_attempt" as const,
+      location: "refs/x",
+      producedBy: LOCAL_PILOTE_ACTOR,
+      producedAt: "2026-08-24T10:00:00.000Z",
+      freshness: "fresh" as const,
+      status: "available" as const,
+      classification: "internal" as const,
+      storageMode: "metadata_only" as const,
+      availability: "available" as const,
+      retentionClass: "standard" as const,
+      legalHold: false,
+      bindings: {
+        projectId: contract.projectId,
+        executionContractId: contract.executionContractId,
+        executionAttemptId: "xat:w3b:draft",
+      },
+      containsSecrets: false as const,
+      provenance: {
+        schemaVersion: "0.1.0-oa" as const,
+        provenanceRecordId: "prov:ev:w3b:draft",
+        actor: LOCAL_PILOTE_ACTOR,
+        source: "execution_adapter" as const,
+        timestamp: "2026-08-24T10:00:00.000Z",
+        correlationId: "cor:ev:w3b:draft",
+      },
+      version: 1,
+      createdAt: "2026-08-24T10:00:00.000Z",
+      technicalResultRef: "res:w3a:deadbeef12345678",
+    };
+    await services.repository.create(evidence, {
+      evidenceId: evidence.evidenceId,
+      fingerprint: "fp:ev:draft",
+      operation: "register",
+    });
+    const created = await services.createReviewBundle.execute({
+      reviewBundleId: "rb:w3b:draft",
+      idempotencyKey: "idem:rb:w3b:draft",
+      actor: LOCAL_PILOTE_ACTOR,
+      projectId: contract.projectId,
+      executionContractId: contract.executionContractId,
+      evidenceIds: [evidence.evidenceId],
+    });
+    expect(created.ok).toBe(true);
+    if (!created.ok) return;
+
+    const evaluated = await services.evaluateContractResult!.execute({
+      claimEvaluationId: "clm:w3b:draft",
+      idempotencyKey: "idem:clm:w3b:draft",
+      actor: LOCAL_PILOTE_ACTOR,
+      contract,
+      attempt: {
+        attemptId: "xat:w3b:draft",
+        executionContractId: contract.executionContractId,
+        executionContractVersion: contract.version,
+        executionContractSemanticFingerprint: contract.semanticFingerprint,
+        status: "succeeded",
+        resultRef: "res:w3a:deadbeef12345678",
+      },
+      evidence,
+      reviewBundle: created.reviewBundle,
+    });
+    expect(evaluated.ok).toBe(false);
+    if (evaluated.ok) return;
+    expect(evaluated.error.internalCauseRef).toBe("review_bundle_not_frozen");
+    store.close();
+  });
 });
diff --git a/projects/sfia-studio/app/__tests__/oa/evidence-review/ingestExecutionAttemptEvidence.test.ts b/projects/sfia-studio/app/__tests__/oa/evidence-review/ingestExecutionAttemptEvidence.test.ts
index 21e2419f..b295a140 100644
--- a/projects/sfia-studio/app/__tests__/oa/evidence-review/ingestExecutionAttemptEvidence.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/evidence-review/ingestExecutionAttemptEvidence.test.ts
@@ -65,14 +65,15 @@ describe("T-A6-D1 IngestExecutionAttemptEvidence", () => {
     expect(result.evidence.source).toContain("failed");
   });

-  it("ingests cancelled Attempt with stopReason as governed-stop Evidence", async () => {
+  it("ingests cancelled Attempt with SYSTEM_GOVERNED_STOP as governed-stop Evidence", async () => {
     const s = buildServices();
     s.fakeAttempts.seed({
       attemptId: "xat:cancel-001",
       executionContractId: "xct:oa-001",
       executionContractVersion: 1,
       status: "cancelled",
-      stopReason: "Arrêt gouverné Pilote",
+      stopReason: "EXECUTOR_INSUFFICIENT",
+      stopOrigin: "SYSTEM_GOVERNED_STOP",
       cancelledAt: "2026-07-26T01:00:00.000Z",
     });
     const result = await s.ingestExecutionAttemptEvidence.execute({
@@ -87,6 +88,31 @@ describe("T-A6-D1 IngestExecutionAttemptEvidence", () => {
     if (!result.ok) return;
     expect(result.evidence.status).toBe("available");
     expect(result.evidence.location).toContain("governed-stop");
+    expect(result.evidence.source).toContain(":governed-stop");
+  });
+
+  it("ingests cancelled Attempt without trustworthy provenance as neutral cancellation", async () => {
+    const s = buildServices();
+    s.fakeAttempts.seed({
+      attemptId: "xat:cancel-neutral-001",
+      executionContractId: "xct:oa-001",
+      executionContractVersion: 1,
+      status: "cancelled",
+      stopReason: "Arrêt gouverné Pilote",
+      cancelledAt: "2026-07-26T01:00:00.000Z",
+    });
+    const result = await s.ingestExecutionAttemptEvidence.execute({
+      evidenceId: "ev:cancel-neutral",
+      executionAttemptId: "xat:cancel-neutral-001",
+      idempotencyKey: "idem-ingest-cancel-neutral-001",
+      actor: SYSTEM_ACTOR,
+      classification: "internal",
+      bindings: { projectId: "prj:campus360-oa" },
+    });
+    expect(result.ok).toBe(true);
+    if (!result.ok) return;
+    expect(result.evidence.location).toContain("/cancellation");
+    expect(result.evidence.location).not.toContain("governed-stop");
   });

   it("refuses running Attempt", async () => {
diff --git a/projects/sfia-studio/app/e2e/studio-w3b-terminal-evidence-runtime.spec.ts b/projects/sfia-studio/app/e2e/studio-w3b-terminal-evidence-runtime.spec.ts
index 207bf490..58eab085 100644
--- a/projects/sfia-studio/app/e2e/studio-w3b-terminal-evidence-runtime.spec.ts
+++ b/projects/sfia-studio/app/e2e/studio-w3b-terminal-evidence-runtime.spec.ts
@@ -15,7 +15,7 @@ import {

 const CAPTURE_ROOT = path.resolve(
   process.cwd(),
-  "../../../.tmp-sfia-review/runtime-captures/w3-b-terminal-evidence",
+  "../../../.tmp-sfia-review/runtime-captures/w3-b-correction",
 );
 const MANIFEST = path.join(CAPTURE_ROOT, "manifest.jsonl");

diff --git a/projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts b/projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
index 7fa8b7d5..c31960f4 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
@@ -184,6 +184,21 @@ export async function materializeW3bProductTerminal(input: {
     };
   }

+  const frozen = await services.freezeReviewBundle.execute({
+    reviewBundleId: ids.reviewBundleId,
+    expectedVersion: bundle.reviewBundle.version,
+    idempotencyKey: `idem:w3b-rb-freeze:${attempt.attemptId}`,
+    actor: LOCAL_PILOTE_ACTOR,
+  });
+
+  if (!frozen.ok) {
+    return {
+      ok: false,
+      code: frozen.error.detailCode,
+      message: frozen.error.message,
+    };
+  }
+
   if (!services.evaluateContractResult) {
     return {
       ok: false,
@@ -201,6 +216,8 @@ export async function materializeW3bProductTerminal(input: {
       attemptId: attempt.attemptId,
       executionContractId: attempt.executionContractId,
       executionContractVersion: attempt.executionContractVersion,
+      executionContractSemanticFingerprint:
+        attempt.executionContractSemanticFingerprint,
       status: attempt.status,
       resultRef: attempt.resultRef,
       errorRef: attempt.errorRef,
@@ -216,7 +233,7 @@ export async function materializeW3bProductTerminal(input: {
       selectedAgentRef: attempt.selectedAgentRef,
     },
     evidence: ingested.evidence,
-    reviewBundle: bundle.reviewBundle,
+    reviewBundle: frozen.reviewBundle,
   });

     if (!evaluated.ok) {
@@ -230,7 +247,7 @@ export async function materializeW3bProductTerminal(input: {
         attempt,
         contract,
         evidence: ingested.evidence,
-        reviewBundle: bundle.reviewBundle,
+        reviewBundle: frozen.reviewBundle,
         claimEvaluation: evaluated.claimEvaluation ?? null,
       }),
     };
@@ -241,13 +258,14 @@ export async function materializeW3bProductTerminal(input: {
     reusedFromIdempotency: Boolean(
       ingested.reusedFromIdempotencyKey ||
         bundle.reusedFromIdempotencyKey ||
+        frozen.reusedFromIdempotencyKey ||
         evaluated.reusedFromIdempotencyKey,
     ),
     product: projectFromFacts({
       attempt,
       contract,
       evidence: ingested.evidence,
-      reviewBundle: bundle.reviewBundle,
+      reviewBundle: frozen.reviewBundle,
       claimEvaluation: evaluated.claimEvaluation,
     }),
   };
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/w3aProductExecutionSemantics.ts b/projects/sfia-studio/app/features/project-assistant/w2/w3aProductExecutionSemantics.ts
index b91ba4b6..fdec5bd0 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/w3aProductExecutionSemantics.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/w3aProductExecutionSemantics.ts
@@ -27,6 +27,7 @@ import {
   projectConfirmationRequirementFromEffects,
   qualifyEffectsFromActualExecutionWork,
 } from "./w3aActualExecutionWork";
+import { W3B_TEMP_ARTIFACT_EO_TEMPLATE } from "@/lib/oa/evidence-review/application/contractResultSemanticEvaluator";
 import {
   type EffectQualificationFailure,
   type QualifiedExecutionEffects,
@@ -258,9 +259,12 @@ export function deriveW3AExecutionEnvelope(input: {
       : null;

   const eb = input.basis.executionBasis;
-  const expectedOutputs = eb.expectedOutcome
-    ? [eb.expectedOutcome]
-    : [`Résultat d'exécution — ${effects.effectClass}`];
+  const expectedOutputs =
+    effects.effectClass === "generate-temporary-artifact"
+      ? [W3B_TEMP_ARTIFACT_EO_TEMPLATE]
+      : eb.expectedOutcome
+        ? [eb.expectedOutcome]
+        : [`Résultat d'exécution — ${effects.effectClass}`];

   return {
     ok: true,
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/w3bProductTerminalProjection.ts b/projects/sfia-studio/app/features/project-assistant/w2/w3bProductTerminalProjection.ts
index 5649aaf8..586280bc 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/w3bProductTerminalProjection.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/w3bProductTerminalProjection.ts
@@ -7,6 +7,7 @@ import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";
 import type { ClaimEvaluation } from "@/lib/oa/evidence-review";
 import type { Evidence, ReviewBundle } from "@/lib/oa/evidence-review";
 import { CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT } from "@/lib/oa/evidence-review/domain/contractResultTypes";
+import { contractResultBindingsMatchCurrentFacts } from "@/lib/oa/evidence-review/domain/contractResultTypes";
 import { projectContractResultVerdict } from "@/lib/oa/evidence-review/application/contractResultVerdictProjection";

 export type W3BProductTerminalKind = "SUCCESS" | "STOP" | "FAIL" | "UNCLAIMED";
@@ -207,6 +208,28 @@ export function projectW3bProductTerminal(input: {
   const ce = input.claimEvaluation;
   const verdict = projectContractResultVerdict(ce.status);

+  if (
+    ce.contractResultBindings &&
+    !contractResultBindingsMatchCurrentFacts({
+      bindings: ce.contractResultBindings,
+      contract: input.contract,
+      attempt: input.attempt,
+      reviewBundle: {
+        reviewBundleId: input.reviewBundle.reviewBundleId,
+        frozenVersion: input.reviewBundle.frozenVersion,
+      },
+      evidenceIds: [input.evidence.evidenceId],
+    })
+  ) {
+    return {
+      ...base,
+      ...unclaimed(
+        "Évaluation Contract Result périmée — bindings EC/RB/Attempt ne correspondent plus.",
+      ),
+      evidenceSummary: evidenceSummaryFor("UNCLAIMED", input.attempt.status),
+    };
+  }
+
   if (
     input.attempt.status === "succeeded" &&
     ce.status === "pass" &&
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/application/confirmClaimEvaluation.ts b/projects/sfia-studio/app/lib/oa/evidence-review/application/confirmClaimEvaluation.ts
index 8aab45b2..654eace8 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/application/confirmClaimEvaluation.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/application/confirmClaimEvaluation.ts
@@ -19,6 +19,7 @@ import type {
   ClaimEvaluationResult,
   ConfirmClaimEvaluationRequest,
 } from "../domain/claimEvaluationTypes";
+import { CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT } from "../domain/contractResultTypes";
 import { containsForbiddenSecret } from "../domain/invariants";
 import type { EvidenceAuditPort } from "../ports/evidenceAudit";
 import type { ClaimAuthorityPort } from "../ports/claimAuthorityPort";
@@ -266,13 +267,17 @@ export class ConfirmClaimEvaluation {
         );
       }

-      const requireMorris = current.criticality === "structural";
+      const requireMorris =
+        current.subjectKind !== CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT &&
+        current.criticality === "structural";
       const requiredLevel =
-        current.criticality === "structural"
-          ? ("N3" as const)
-          : current.criticality === "critical"
-            ? ("N2" as const)
-            : ("N1" as const);
+        current.subjectKind === CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT
+          ? ("N1" as const)
+          : current.criticality === "structural"
+            ? ("N3" as const)
+            : current.criticality === "critical"
+              ? ("N2" as const)
+              : ("N1" as const);
       const auth = this.authority.verify({
         actorId: request.actor.actorId,
         requiredLevel,
@@ -293,10 +298,23 @@ export class ConfirmClaimEvaluation {
         );
       }

+      if (
+        current.subjectKind === CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT &&
+        current.evaluationMethod === "deterministic"
+      ) {
+        return fail(
+          "CLAIM_EVALUATION_INVALID_STATE",
+          "contract_result_deterministic_no_human_confirm",
+          { claimEvaluation: current },
+        );
+      }
+
       const confirmationAuthority =
-        current.criticality === "structural"
-          ? ("morris" as const)
-          : ("authorized_human" as const);
+        current.subjectKind === CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT
+          ? ("authorized_human" as const)
+          : current.criticality === "structural"
+            ? ("morris" as const)
+            : ("authorized_human" as const);

       const updated: ClaimEvaluation = {
         ...current,
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultAssessment.ts b/projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultAssessment.ts
index 77703b8c..0ce7e74e 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultAssessment.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultAssessment.ts
@@ -1,10 +1,9 @@
 /**
- * TD-W3B-02 — deterministic EO/ER assessment for contract-result mode.
- * Free-text expectations remain EC source; identity is positional + fingerprint bound.
+ * TD-W3B-02 + ARCH-R02 — deterministic EO/ER assessment for contract-result mode.
+ * Identity: (semanticFingerprint, kind, ordinal). Semantic pass requires known applicable rule.
  */
-import type { ExecutionAttemptSnapshot } from "../domain/types";
-import type { Evidence } from "../domain/types";
 import type { ExecutionContract } from "@/lib/oa/execution-contract";
+import type { Evidence, ExecutionAttemptSnapshot } from "../domain/types";
 import type {
   ContractResultAssessmentProvenance,
   ExpectedOutputAssessment,
@@ -14,6 +13,11 @@ import {
   W3B_CONTRACT_RESULT_RULE_REF,
   buildContractResultItemId,
 } from "../domain/contractResultTypes";
+import {
+  assessTempArtifactEvidenceRequirement,
+  assessTempArtifactExpectedOutput,
+  resolveApplicableContractResultRule,
+} from "./contractResultSemanticEvaluator";

 export type ContractResultAssessmentInput = {
   readonly contract: ExecutionContract;
@@ -21,33 +25,33 @@ export type ContractResultAssessmentInput = {
   readonly evidence: Evidence;
   readonly evaluatedAt: string;
   readonly evaluatorRef?: string;
+  readonly frozenEvidenceSnapshot?: {
+    evidenceId: string;
+    evidenceVersion: number;
+    status: string;
+    availability: string;
+  };
 };

 function provenance(
   input: ContractResultAssessmentInput,
+  ruleRef: string,
 ): ContractResultAssessmentProvenance {
   return {
     evaluatorRef: input.evaluatorRef ?? "w3b-contract-result-assessor",
     evaluatedAt: input.evaluatedAt,
-    ruleRef: W3B_CONTRACT_RESULT_RULE_REF,
+    ruleRef,
   };
 }

-function eoPassEligible(input: ContractResultAssessmentInput): boolean {
-  if (input.attempt.status !== "succeeded") return false;
-  if (!input.attempt.resultRef?.trim()) return false;
-  if (!input.contract.scope?.trim()) return false;
-  if (input.evidence.technicalResultRef !== input.attempt.resultRef) return false;
-  return true;
-}
-
 export function assessExpectedOutputs(
   input: ContractResultAssessmentInput,
 ): ExpectedOutputAssessment[] {
   const fp = input.contract.semanticFingerprint ?? "";
   const outputs = input.contract.expectedOutputs ?? [];
-  const prov = provenance(input);
-  const passEligible = eoPassEligible(input);
+  const rule = resolveApplicableContractResultRule(input.contract);
+  const ruleRef = rule.applicable ? rule.ruleRef : W3B_CONTRACT_RESULT_RULE_REF;
+  const prov = provenance(input, ruleRef);

   return outputs.map((expectation, ordinal) => {
     let result: ExpectedOutputAssessment["result"] = "NOT_PROVEN";
@@ -58,8 +62,13 @@ export function assessExpectedOutputs(
       input.attempt.stopOrigin === "SYSTEM_GOVERNED_STOP"
     ) {
       result = "NOT_PROVEN";
-    } else if (passEligible) {
-      result = "PASS";
+    } else if (rule.applicable) {
+      result = assessTempArtifactExpectedOutput({
+        expectation,
+        ordinal,
+        attempt: input.attempt,
+        evidence: input.evidence,
+      });
     }
     return {
       itemId: buildContractResultItemId({
@@ -70,7 +79,7 @@ export function assessExpectedOutputs(
       expectation,
       result,
       method: "deterministic",
-      ruleRef: W3B_CONTRACT_RESULT_RULE_REF,
+      ruleRef,
       provenance: prov,
     };
   });
@@ -81,21 +90,25 @@ export function assessEvidenceRequirements(
 ): EvidenceRequirementAssessment[] {
   const fp = input.contract.semanticFingerprint ?? "";
   const requirements = input.contract.evidenceRequirements ?? [];
-  const prov = provenance(input);
-  const evidenceOk =
-    input.evidence.status === "available" || input.evidence.status === "verified";
+  const rule = resolveApplicableContractResultRule(input.contract);
+  const ruleRef = rule.applicable ? rule.ruleRef : W3B_CONTRACT_RESULT_RULE_REF;
+  const prov = provenance(input, ruleRef);

   return requirements.map((requirement, ordinal) => {
     let result: EvidenceRequirementAssessment["result"] = "NOT_PROVEN";
-    if (!evidenceOk) {
-      result = "NOT_SATISFIED";
-    } else if (
+    if (
       input.attempt.status === "failed" ||
       input.attempt.status === "timeout"
     ) {
       result = "NOT_SATISFIED";
-    } else {
-      result = "SATISFIED";
+    } else if (rule.applicable) {
+      result = assessTempArtifactEvidenceRequirement({
+        requirement,
+        ordinal,
+        attempt: input.attempt,
+        evidence: input.evidence,
+        frozenSnapshot: input.frozenEvidenceSnapshot,
+      });
     }
     return {
       itemId: buildContractResultItemId({
@@ -106,7 +119,7 @@ export function assessEvidenceRequirements(
       requirement,
       result,
       method: "deterministic",
-      ruleRef: W3B_CONTRACT_RESULT_RULE_REF,
+      ruleRef,
       provenance: prov,
     };
   });
@@ -131,7 +144,8 @@ export function deriveCanonicalContractResultStatus(input: {
     input.attemptStatus === "succeeded" &&
     allEoPass &&
     allErSatisfied &&
-    input.expectedOutputAssessments.length > 0
+    input.expectedOutputAssessments.length > 0 &&
+    input.evidenceRequirementAssessments.length > 0
   ) {
     return "pass";
   }
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultSemanticEvaluator.ts b/projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultSemanticEvaluator.ts
new file mode 100644
index 00000000..b00afb09
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultSemanticEvaluator.ts
@@ -0,0 +1,96 @@
+/**
+ * W3-B ARCH-R02 — bounded server-owned Contract Result semantic evaluator.
+ * No NLP, no resultRef-alone PASS, no Evidence-available-alone ER satisfaction.
+ */
+import type { ExecutionContract } from "@/lib/oa/execution-contract";
+import type { Evidence, ExecutionAttemptSnapshot } from "../domain/types";
+import type { ReviewBundleEvidenceSnapshot } from "../domain/reviewBundleTypes";
+
+export const W3B_TEMP_ARTIFACT_RULE_REF =
+  "w3b-contract-result/product-generate-temporary-artifact-v1" as const;
+
+export const W3B_TEMP_ARTIFACT_OPERATION_KEY =
+  "product:generate-temporary-artifact" as const;
+
+export const W3B_TEMP_ARTIFACT_CAPABILITY = "cap:product-temp-artifact" as const;
+
+export const W3B_TEMP_ARTIFACT_EO_TEMPLATE =
+  "Résultat d'exécution — generate-temporary-artifact" as const;
+
+export const W3B_TEMP_ARTIFACT_ER_KEY = "evreq:generate-temporary-artifact" as const;
+
+/** Governed W3-A execute path mints res:w3a:<hex> — server-owned shape only. */
+const W3A_RESULT_REF_PATTERN = /^res:w3a:[a-f0-9]+$/;
+
+export type ApplicableContractResultRule =
+  | { readonly applicable: true; readonly ruleRef: typeof W3B_TEMP_ARTIFACT_RULE_REF }
+  | { readonly applicable: false; readonly ruleRef: null };
+
+export function resolveApplicableContractResultRule(
+  contract: Pick<ExecutionContract, "action" | "requiredCapabilities">,
+): ApplicableContractResultRule {
+  if (contract.action !== W3B_TEMP_ARTIFACT_OPERATION_KEY) {
+    return { applicable: false, ruleRef: null };
+  }
+  if (!contract.requiredCapabilities?.includes(W3B_TEMP_ARTIFACT_CAPABILITY)) {
+    return { applicable: false, ruleRef: null };
+  }
+  return { applicable: true, ruleRef: W3B_TEMP_ARTIFACT_RULE_REF };
+}
+
+export function tempArtifactExecutionFactsHold(input: {
+  attempt: ExecutionAttemptSnapshot;
+  evidence: Evidence;
+}): boolean {
+  if (input.attempt.status !== "succeeded") return false;
+  const resultRef = input.attempt.resultRef?.trim();
+  if (!resultRef || !W3A_RESULT_REF_PATTERN.test(resultRef)) return false;
+  return input.evidence.technicalResultRef === resultRef;
+}
+
+export function evidenceMatchesFrozenSnapshot(input: {
+  evidence: Evidence;
+  snapshot: ReviewBundleEvidenceSnapshot | undefined;
+}): boolean {
+  if (!input.snapshot) return false;
+  if (input.snapshot.evidenceId !== input.evidence.evidenceId) return false;
+  if (input.snapshot.evidenceVersion !== input.evidence.version) return false;
+  if (
+    input.snapshot.availability === "unavailable" ||
+    input.snapshot.status === "unavailable"
+  ) {
+    return false;
+  }
+  return true;
+}
+
+export function assessTempArtifactExpectedOutput(input: {
+  expectation: string;
+  ordinal: number;
+  attempt: ExecutionAttemptSnapshot;
+  evidence: Evidence;
+}): "PASS" | "NOT_PROVEN" | "FAIL" {
+  if (input.attempt.status === "failed" || input.attempt.status === "timeout") {
+    return "FAIL";
+  }
+  if (input.ordinal !== 0) return "NOT_PROVEN";
+  if (input.expectation !== W3B_TEMP_ARTIFACT_EO_TEMPLATE) return "NOT_PROVEN";
+  if (!tempArtifactExecutionFactsHold(input)) return "NOT_PROVEN";
+  return "PASS";
+}
+
+export function assessTempArtifactEvidenceRequirement(input: {
+  requirement: string;
+  ordinal: number;
+  attempt: ExecutionAttemptSnapshot;
+  evidence: Evidence;
+  frozenSnapshot: ReviewBundleEvidenceSnapshot | undefined;
+}): "SATISFIED" | "NOT_SATISFIED" | "NOT_PROVEN" {
+  if (input.ordinal !== 0) return "NOT_PROVEN";
+  if (input.requirement !== W3B_TEMP_ARTIFACT_ER_KEY) return "NOT_PROVEN";
+  if (!evidenceMatchesFrozenSnapshot({ evidence: input.evidence, snapshot: input.frozenSnapshot })) {
+    return "NOT_PROVEN";
+  }
+  if (!tempArtifactExecutionFactsHold(input)) return "NOT_SATISFIED";
+  return "SATISFIED";
+}
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/application/evaluateContractResult.ts b/projects/sfia-studio/app/lib/oa/evidence-review/application/evaluateContractResult.ts
index 03dcf7a1..952c396e 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/application/evaluateContractResult.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/application/evaluateContractResult.ts
@@ -22,7 +22,7 @@ import { CLAIM_EVALUATION_SCHEMA_VERSION } from "../domain/claimEvaluationTypes"
 import {
   CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT,
   W3B_CONTRACT_RESULT_REVIEW_POLICY_REF,
-  isAttemptContractVersionBound,
+  isAttemptContractExactlyBound,
 } from "../domain/contractResultTypes";
 import type { ExecutionAttemptSnapshot } from "../domain/types";
 import type { Evidence } from "../domain/types";
@@ -36,6 +36,7 @@ import {
   buildContractResultClaimStatement,
   deriveCanonicalContractResultStatus,
 } from "./contractResultAssessment";
+import { resolveApplicableContractResultRule } from "./contractResultSemanticEvaluator";
 import {
   assertIdempotencyKey,
   buildProvenance,
@@ -123,16 +124,69 @@ export class EvaluateContractResult {
       if (contract.executionContractId !== attempt.executionContractId) {
         return fail("CLAIM_EVALUATION_INVALID", "contract_attempt_mismatch");
       }
-      const versionAligned = isAttemptContractVersionBound({
-        contract,
-        attempt,
-      });
+      if (
+        !isAttemptContractExactlyBound({
+          contract: {
+            executionContractId: contract.executionContractId,
+            version: contract.version,
+            semanticFingerprint: contract.semanticFingerprint,
+          },
+          attempt,
+        })
+      ) {
+        return fail(
+          "CLAIM_EVALUATION_INVALID",
+          "contract_attempt_exact_binding_mismatch",
+        );
+      }
       if (evidence.bindings.executionAttemptId !== attempt.attemptId) {
         return fail("CLAIM_EVALUATION_INVALID", "evidence_attempt_mismatch");
       }
       if (reviewBundle.completeness !== "complete") {
         return fail("CLAIM_REVIEW_BUNDLE_INVALID", "review_bundle_incomplete");
       }
+      if (!reviewBundle.frozenAt || !reviewBundle.frozenVersion) {
+        return fail(
+          "CLAIM_REVIEW_BUNDLE_INVALID",
+          "review_bundle_not_frozen",
+        );
+      }
+      if (reviewBundle.status !== "ready_for_review") {
+        return fail(
+          "CLAIM_REVIEW_BUNDLE_INVALID",
+          "review_bundle_not_ready_for_review",
+        );
+      }
+      if (reviewBundle.synthesisOnly) {
+        return fail(
+          "CLAIM_REVIEW_BUNDLE_INVALID",
+          "review_bundle_synthesis_only",
+        );
+      }
+
+      const frozenSnapshot = (reviewBundle.frozenEvidenceSnapshots ?? []).find(
+        (snap) => snap.evidenceId === evidence.evidenceId,
+      );
+      if (!frozenSnapshot) {
+        return fail(
+          "CLAIM_EVIDENCE_NOT_IN_REVIEW_BUNDLE",
+          "evidence_not_in_frozen_snapshot",
+        );
+      }
+      if (frozenSnapshot.evidenceVersion !== evidence.version) {
+        return fail(
+          "CLAIM_EVIDENCE_VERSION_MISMATCH",
+          "evidence_version_frozen_mismatch",
+        );
+      }
+
+      const applicableRule = resolveApplicableContractResultRule(contract);
+      if (!applicableRule.applicable) {
+        return fail(
+          "CLAIM_EVALUATION_INVALID",
+          "contract_result_rule_not_applicable",
+        );
+      }

       const fingerprint = fingerprintCommand(
         registerFingerprintBody({
@@ -174,26 +228,16 @@ export class EvaluateContractResult {
         attempt,
         evidence,
         evaluatedAt: timestamp,
+        frozenEvidenceSnapshot: frozenSnapshot,
       };
-      const expectedOutputAssessments = versionAligned
-        ? assessExpectedOutputs(assessmentInput)
-        : assessExpectedOutputs(assessmentInput).map((a) => ({
-            ...a,
-            result: "NOT_PROVEN" as const,
-          }));
-      const evidenceRequirementAssessments = versionAligned
-        ? assessEvidenceRequirements(assessmentInput)
-        : assessEvidenceRequirements(assessmentInput).map((a) => ({
-            ...a,
-            result: "NOT_PROVEN" as const,
-          }));
-      const status = versionAligned
-        ? deriveCanonicalContractResultStatus({
-            attemptStatus: attempt.status,
-            expectedOutputAssessments,
-            evidenceRequirementAssessments,
-          })
-        : ("not_proven" as const);
+      const expectedOutputAssessments = assessExpectedOutputs(assessmentInput);
+      const evidenceRequirementAssessments =
+        assessEvidenceRequirements(assessmentInput);
+      const status = deriveCanonicalContractResultStatus({
+        attemptStatus: attempt.status,
+        expectedOutputAssessments,
+        evidenceRequirementAssessments,
+      });

       const claimEvaluation: ClaimEvaluation = {
         schemaVersion: CLAIM_EVALUATION_SCHEMA_VERSION,
@@ -206,11 +250,11 @@ export class EvaluateContractResult {
         }),
         criticality: "non_critical",
         evaluationMethod: "deterministic",
-        ruleRef: "w3b-product-completion-contract-result-v1",
+        ruleRef: applicableRule.ruleRef,
         requiredEvidenceRefs: [evidence.evidenceId],
         providedEvidenceRefs: [evidence.evidenceId],
         reviewBundleId: reviewBundle.reviewBundleId,
-        reviewBundleVersion: reviewBundle.version,
+        reviewBundleVersion: reviewBundle.frozenVersion,
         status,
         proposedBy: request.actor,
         confirmationAuthority: "system_deterministic",
@@ -233,10 +277,13 @@ export class EvaluateContractResult {
           cycleInstanceId: contract.cycleInstanceId ?? null,
           executionContractId: contract.executionContractId,
           executionContractVersion: attempt.executionContractVersion,
-          executionContractSemanticFingerprint: contract.semanticFingerprint ?? "",
+          executionContractSemanticFingerprint:
+            attempt.executionContractSemanticFingerprint ??
+            contract.semanticFingerprint ??
+            "",
           executionAttemptId: attempt.attemptId,
           reviewBundleId: reviewBundle.reviewBundleId,
-          reviewBundleVersion: reviewBundle.version,
+          reviewBundleVersion: reviewBundle.frozenVersion,
           evidenceRefs: [evidence.evidenceId],
         },
         expectedOutputAssessments,
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/application/ingestExecutionAttemptEvidence.ts b/projects/sfia-studio/app/lib/oa/evidence-review/application/ingestExecutionAttemptEvidence.ts
index 8ea3ed1e..2e6c1818 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/application/ingestExecutionAttemptEvidence.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/application/ingestExecutionAttemptEvidence.ts
@@ -5,7 +5,9 @@
  * - Terminal Attempts may produce Evidence:
  *   - succeeded + resultRef → available (technicalResultRef = resultRef)
  *   - failed | timeout with errorRef or stopReason → available diagnostic
- *   - cancelled with cancelledAt or stopReason → available governed-stop
+ *   - cancelled with USER_CANCEL → user-cancel diagnostic Evidence
+ *   - cancelled with SYSTEM_GOVERNED_STOP → governed-stop Evidence
+ *   - cancelled without trustworthy provenance → neutral cancellation diagnostic
  * - Non-terminal (accepted/running/result_pending) → ATTEMPT_STATUS_REFUSED.
  * - Created Evidence status is never "verified".
  * - ExecutionAttempt.succeeded ≠ Evidence verified ≠ Product SUCCESS/PASS.
@@ -224,12 +226,18 @@ export class IngestExecutionAttemptEvidence {
       }

       const storageMode = request.storageMode ?? "internal_payload_ref";
+      const cancelLocation =
+        attempt.stopOrigin === "SYSTEM_GOVERNED_STOP"
+          ? `refs/attempts/${attempt.attemptId}/governed-stop`
+          : attempt.stopOrigin === "USER_CANCEL"
+            ? `refs/attempts/${attempt.attemptId}/user-cancel`
+            : `refs/attempts/${attempt.attemptId}/cancellation`;
       const location =
         request.location ??
         (terminalKind === "succeeded"
           ? `refs/attempts/${attempt.attemptId}/result`
           : terminalKind === "cancelled"
-            ? `refs/attempts/${attempt.attemptId}/governed-stop`
+            ? cancelLocation
             : `refs/attempts/${attempt.attemptId}/diagnostic`);

       const producedAt =
@@ -246,7 +254,15 @@ export class IngestExecutionAttemptEvidence {
         schemaVersion: "0.2.0-oa",
         evidenceId: request.evidenceId,
         type: request.type ?? (terminalKind === "succeeded" ? "artifact" : "log_ref"),
-        source: `execution attempt ${attempt.attemptId} (${terminalKind})`,
+        source: `execution attempt ${attempt.attemptId} (${terminalKind}${
+          terminalKind === "cancelled"
+            ? attempt.stopOrigin === "SYSTEM_GOVERNED_STOP"
+              ? ":governed-stop"
+              : attempt.stopOrigin === "USER_CANCEL"
+                ? ":user-cancel"
+                : ":cancellation"
+            : ""
+        })`,
         sourceKind: "execution_attempt",
         location,
         digest: request.digest,
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/domain/claimEvaluationInvariants.ts b/projects/sfia-studio/app/lib/oa/evidence-review/domain/claimEvaluationInvariants.ts
index 7bf9fbd1..ecf1113a 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/domain/claimEvaluationInvariants.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/domain/claimEvaluationInvariants.ts
@@ -15,6 +15,10 @@ import type {
   ClaimEvaluationStatus,
   ClaimType,
 } from "./claimEvaluationTypes";
+import {
+  CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT,
+  W3B_CONTRACT_RESULT_REVIEW_POLICY_REF,
+} from "./contractResultTypes";

 export type ClaimInvariantViolation = {
   detailCode: ClaimEvaluationDetailCode;
@@ -190,6 +194,55 @@ export function validateClaimEvaluationShape(
         reason: "pass_requires_evidence_and_evaluated_at",
       };
     }
+
+    if (claim.subjectKind === CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT) {
+      if (!claim.contractResultReviewPolicyRef) {
+        return {
+          detailCode: "CLAIM_EVALUATION_INVALID",
+          reason: "contract_result_missing_policy_ref",
+        };
+      }
+      if (
+        claim.contractResultReviewPolicyRef !== W3B_CONTRACT_RESULT_REVIEW_POLICY_REF
+      ) {
+        return {
+          detailCode: "CLAIM_EVALUATION_INVALID",
+          reason: "contract_result_unknown_policy_ref",
+        };
+      }
+      if (claim.evaluationMethod === "deterministic") {
+        if (claim.confirmationAuthority !== "system_deterministic") {
+          return {
+            detailCode: "CLAIM_EVALUATION_INVALID",
+            reason: "contract_result_deterministic_requires_system_authority",
+          };
+        }
+      } else {
+        if (claim.confirmationAuthority !== "authorized_human") {
+          return {
+            detailCode: "CLAIM_EVALUATION_INVALID",
+            reason: "contract_result_human_requires_authorized_human",
+          };
+        }
+        if (!claim.confirmedBy || !claim.confirmedAt) {
+          return {
+            detailCode: "CLAIM_CONFIRMATION_REQUIRED",
+            reason: "contract_result_pass_requires_human_confirm",
+          };
+        }
+        if (
+          claim.confirmedBy.role === "system" ||
+          claim.confirmedBy.role === "agent"
+        ) {
+          return {
+            detailCode: "CLAIM_AUTHORITY_FORBIDDEN",
+            reason: "contract_result_system_or_agent_confirm",
+          };
+        }
+      }
+      return null;
+    }
+
     if (claim.criticality === "non_critical" && claim.evaluationMethod === "deterministic") {
       if (claim.confirmationAuthority !== "system_deterministic") {
         return {
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/domain/contractResultTypes.ts b/projects/sfia-studio/app/lib/oa/evidence-review/domain/contractResultTypes.ts
index ac817303..af93bdb6 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/domain/contractResultTypes.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/domain/contractResultTypes.ts
@@ -94,22 +94,74 @@ export function resolveContractResultConfirmationAuthority(
   return "authorized_human";
 }

-/** TA-5 post-selection status transitions may bump EC.version without EO/ER drift. */
-export const TA5_STATUS_VERSION_DRIFT_MAX = 2;
+/** TD-W3B-02 — exact EC id + version + semanticFingerprint binding (zero drift tolerance). */
+export function isAttemptContractExactlyBound(input: {
+  contract: {
+    executionContractId: string;
+    version: number;
+    semanticFingerprint?: string;
+  };
+  attempt: {
+    executionContractId: string;
+    executionContractVersion: number;
+    executionContractSemanticFingerprint?: string;
+  };
+}): boolean {
+  const contractFp = (input.contract.semanticFingerprint ?? "").trim();
+  const attemptFp = (input.attempt.executionContractSemanticFingerprint ?? "").trim();
+  if (!contractFp || !attemptFp) return false;
+  return (
+    input.contract.executionContractId === input.attempt.executionContractId &&
+    input.contract.version === input.attempt.executionContractVersion &&
+    contractFp === attemptFp
+  );
+}

-export function isAttemptContractVersionBound(input: {
-  contract: { executionContractId: string; version: number };
+export function contractResultBindingsMatchCurrentFacts(input: {
+  bindings: ContractResultBindings;
+  contract: {
+    projectId: string;
+    cycleInstanceId?: string | null;
+    executionContractId: string;
+    version: number;
+    semanticFingerprint?: string;
+  };
   attempt: {
+    attemptId: string;
     executionContractId: string;
     executionContractVersion: number;
+    executionContractSemanticFingerprint?: string;
+  };
+  reviewBundle: {
+    reviewBundleId: string;
+    frozenVersion?: number;
   };
+  evidenceIds: readonly string[];
 }): boolean {
+  const fp = (input.contract.semanticFingerprint ?? "").trim();
   if (
-    input.contract.executionContractId !== input.attempt.executionContractId
+    input.bindings.projectId !== input.contract.projectId ||
+    input.bindings.executionContractId !== input.contract.executionContractId ||
+    input.bindings.executionContractVersion !== input.contract.version ||
+    input.bindings.executionContractSemanticFingerprint !== fp ||
+    input.bindings.executionAttemptId !== input.attempt.attemptId ||
+    input.bindings.reviewBundleId !== input.reviewBundle.reviewBundleId ||
+    input.bindings.reviewBundleVersion !== input.reviewBundle.frozenVersion
   ) {
     return false;
   }
-  const drift =
-    input.contract.version - input.attempt.executionContractVersion;
-  return drift >= 0 && drift <= TA5_STATUS_VERSION_DRIFT_MAX;
+  if (
+    (input.contract.cycleInstanceId ?? null) !==
+    (input.bindings.cycleInstanceId ?? null)
+  ) {
+    return false;
+  }
+  if (!isAttemptContractExactlyBound({ contract: input.contract, attempt: input.attempt })) {
+    return false;
+  }
+  if (input.bindings.evidenceRefs.length !== input.evidenceIds.length) return false;
+  for (let i = 0; i < input.evidenceIds.length; i += 1) {
+    if (input.bindings.evidenceRefs[i] !== input.evidenceIds[i]) return false;
+  }
+  return true;
 }
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/domain/types.ts b/projects/sfia-studio/app/lib/oa/evidence-review/domain/types.ts
index 0d63dd4a..866fff8c 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/domain/types.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/domain/types.ts
@@ -244,4 +244,6 @@ export type ExecutionAttemptSnapshot = {
   stopObservedAt?: string;
   completedAt?: string;
   selectedAgentRef?: string;
+  /** Immutable EC semantic material bound at Attempt acceptance (TD-W3B-02). */
+  executionContractSemanticFingerprint?: string;
 };
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/cancelExecutionAttempt.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/cancelExecutionAttempt.ts
index 75c286f6..4b21b467 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/cancelExecutionAttempt.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/cancelExecutionAttempt.ts
@@ -21,6 +21,7 @@ import type {
   ExecutionAttempt,
   ExecutionAttemptResult,
 } from "../domain/types";
+import { withAttemptContractBindingSync } from "../domain/types";
 import type { ExecutionAttemptTechnicalStorePort } from "../ports/executionAttemptTechnicalStorePort";
 import type { AgentRegistryPort } from "../ports/agentRegistry";
 import type { ExecutionAdapterPort } from "../ports/executionAdapter";
@@ -269,9 +270,27 @@ export class CancelExecutionAttempt {
         durationMs,
       });

+      let terminalAttempt = cancelled;
+      if (contractWrite.ok) {
+        terminalAttempt = withAttemptContractBindingSync(
+          cancelled,
+          contractWrite.contract,
+        );
+        if (
+          terminalAttempt.executionContractVersion !==
+          cancelled.executionContractVersion
+        ) {
+          terminalAttempt = {
+            ...terminalAttempt,
+            version: cancelled.version + 1,
+          };
+          await this.attempts.update(terminalAttempt, cancelled.version);
+        }
+      }
+
       return {
         ok: true,
-        attempt: structuredClone(cancelled),
+        attempt: structuredClone(terminalAttempt),
         contractStatus: contractWrite.ok
           ? contractWrite.contract.status
           : contract.status,
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionFailure.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionFailure.ts
index 62267028..9372cfb0 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionFailure.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionFailure.ts
@@ -11,6 +11,7 @@ import type {
   ExecutionAttemptResult,
   RecordExecutionFailureRequest,
 } from "../domain/types";
+import { withAttemptContractBindingSync } from "../domain/types";
 import type { ExecutionAttemptTechnicalStorePort } from "../ports/executionAttemptTechnicalStorePort";
 import type { AgentRegistryPort } from "../ports/agentRegistry";
 import type { ExecutionAttemptAuditPort } from "../ports/executionAttemptAudit";
@@ -168,9 +169,26 @@ export class RecordExecutionFailure {
         durationMs,
       });

+      let terminalAttempt = failed;
+      if (contractWrite.ok) {
+        terminalAttempt = withAttemptContractBindingSync(
+          failed,
+          contractWrite.contract,
+        );
+        if (
+          terminalAttempt.executionContractVersion !== failed.executionContractVersion
+        ) {
+          terminalAttempt = {
+            ...terminalAttempt,
+            version: failed.version + 1,
+          };
+          await this.attempts.update(terminalAttempt, failed.version);
+        }
+      }
+
       return {
         ok: true,
-        attempt: structuredClone(failed),
+        attempt: structuredClone(terminalAttempt),
         contractStatus: contractWrite.ok
           ? contractWrite.contract.status
           : contract.status,
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionResult.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionResult.ts
index c0d5d0da..62036ca0 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionResult.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionResult.ts
@@ -16,6 +16,7 @@ import type {
   ExecutionAttemptResult,
   RecordExecutionResultRequest,
 } from "../domain/types";
+import { withAttemptContractBindingSync } from "../domain/types";
 import type { ExecutionAttemptTechnicalStorePort } from "../ports/executionAttemptTechnicalStorePort";
 import type { AgentRegistryPort } from "../ports/agentRegistry";
 import type { ExecutionAttemptAuditPort } from "../ports/executionAttemptAudit";
@@ -231,9 +232,23 @@ export class RecordExecutionResult {
         };
       }

+      let terminalAttempt = withAttemptContractBindingSync(
+        succeeded,
+        contractWrite.contract,
+      );
+      if (
+        terminalAttempt.executionContractVersion !== succeeded.executionContractVersion
+      ) {
+        terminalAttempt = {
+          ...terminalAttempt,
+          version: succeeded.version + 1,
+        };
+        await this.attempts.update(terminalAttempt, succeeded.version);
+      }
+
       return {
         ok: true,
-        attempt: structuredClone(succeeded),
+        attempt: structuredClone(terminalAttempt),
         contractStatus: contractWrite.contract.status,
         contractVersion: contractWrite.contract.version,
         durationMs,
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts
index a0f03b9c..5a3a242f 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts
@@ -11,6 +11,7 @@ import type {
   CheckExecutionAuthorization,
   ExecutionContractRepositoryPort,
 } from "@/lib/oa/execution-contract";
+import { computeExecutionContractSemanticFingerprint } from "@/lib/oa/execution-contract";
 import { createAttemptError, isExecutionAttemptDomainError } from "../domain/errors";
 import {
   AGENT_SELECTION_SCOPE,
@@ -371,6 +372,9 @@ export class SelectExecutionAgent {
         attemptId: request.attemptId,
         executionContractId: contract.executionContractId,
         executionContractVersion: contract.version,
+        executionContractSemanticFingerprint:
+          contract.semanticFingerprint ??
+          computeExecutionContractSemanticFingerprint(contract),
         selectedAgentRef,
         status: "accepted",
         idempotencyKey: request.idempotencyKey,
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
index b7de0f8e..60829348 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
@@ -52,6 +52,7 @@ import type {
   ExecutionAttemptResult,
   StartExecutionRequest,
 } from "../domain/types";
+import { withAttemptContractBindingSync } from "../domain/types";
 import type {
   ContractSafetyIdentity,
   GateDGrant,
@@ -1028,9 +1029,24 @@ export class StartExecution {
       durationMs,
     });

+    let launchedAttempt = withAttemptContractBindingSync(
+      runningAttempt,
+      contractWrite.contract,
+    );
+    if (
+      launchedAttempt.executionContractVersion !==
+      runningAttempt.executionContractVersion
+    ) {
+      launchedAttempt = {
+        ...launchedAttempt,
+        version: runningAttempt.version + 1,
+      };
+      await this.attempts.update(launchedAttempt, runningAttempt.version);
+    }
+
     return {
       ok: true,
-      attempt: structuredClone(runningAttempt),
+      attempt: structuredClone(launchedAttempt),
       contractStatus: contractWrite.contract.status,
       contractVersion: contractWrite.contract.version,
       durationMs,
@@ -1082,14 +1098,35 @@ export class StartExecution {
     // Indeterminate adapter failure fails the contract; a deterministic
     // rejection leaves it `confirmed` so a Retry stays possible.
     let contractStatus: string | undefined;
+    let contractWrite:
+      | Awaited<ReturnType<ExecutionContractStatusWriter["write"]>>
+      | undefined;
     if (input.cause === "fail") {
-      const write = await this.contractStatusWriter.write({
+      contractWrite = await this.contractStatusWriter.write({
         executionContractId: input.attempt.executionContractId,
         expectedVersion: input.contractVersion,
         nextStatus: "failed",
         reason: "Launch failed before execution started",
       });
-      contractStatus = write.ok ? write.contract.status : undefined;
+      contractStatus = contractWrite.ok ? contractWrite.contract.status : undefined;
+    }
+
+    let terminalAttempt = persistedAttempt;
+    if (persistedAttempt && contractWrite?.ok) {
+      terminalAttempt = withAttemptContractBindingSync(
+        persistedAttempt,
+        contractWrite.contract,
+      );
+      if (
+        terminalAttempt.executionContractVersion !==
+        persistedAttempt.executionContractVersion
+      ) {
+        terminalAttempt = {
+          ...terminalAttempt,
+          version: persistedAttempt.version + 1,
+        };
+        await this.attempts.update(terminalAttempt, persistedAttempt.version);
+      }
     }

     const durationMs = Date.now() - input.started;
@@ -1120,7 +1157,7 @@ export class StartExecution {
         executionContractId: input.attempt.executionContractId,
         internalCauseRef: input.reason,
       }),
-      attempt: persistedAttempt,
+      attempt: terminalAttempt,
       durationMs,
     };
   }
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/systemGovernedStop.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/systemGovernedStop.ts
index 14c3c5b4..b61aa0eb 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/systemGovernedStop.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/systemGovernedStop.ts
@@ -11,6 +11,7 @@ import type {
   ExecutionAttempt,
   ExecutionAttemptResult,
 } from "../domain/types";
+import { withAttemptContractBindingSync } from "../domain/types";
 import type { ExecutionAttemptTechnicalStorePort } from "../ports/executionAttemptTechnicalStorePort";
 import type { AgentRegistryPort } from "../ports/agentRegistry";
 import type { ExecutionAdapterPort } from "../ports/executionAdapter";
@@ -226,9 +227,26 @@ export class SystemGovernedStop {
         durationMs,
       });

+      let terminalAttempt = stopped;
+      if (contractWrite.ok) {
+        terminalAttempt = withAttemptContractBindingSync(
+          stopped,
+          contractWrite.contract,
+        );
+        if (
+          terminalAttempt.executionContractVersion !== stopped.executionContractVersion
+        ) {
+          terminalAttempt = {
+            ...terminalAttempt,
+            version: stopped.version + 1,
+          };
+          await this.attempts.update(terminalAttempt, stopped.version);
+        }
+      }
+
       return {
         ok: true,
-        attempt: structuredClone(stopped),
+        attempt: structuredClone(terminalAttempt),
         contractStatus: contractWrite.ok
           ? contractWrite.contract.status
           : contract.status,
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts
index 85488b94..36f197ec 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts
@@ -143,8 +143,27 @@ export type ExecutionAttempt = {
   stopCode?: string;
   stopSourceRef?: string;
   stopObservedAt?: string;
+  /** Immutable EC semantic fingerprint bound at Attempt acceptance (TD-W3B-02). */
+  executionContractSemanticFingerprint?: string;
 };

+/** Sync Attempt EC binding after T-A5 contract status OCC bump (TD-W3B-02). */
+export function withAttemptContractBindingSync(
+  attempt: ExecutionAttempt,
+  contract: {
+    version: number;
+    semanticFingerprint?: string;
+  },
+): ExecutionAttempt {
+  return {
+    ...attempt,
+    executionContractVersion: contract.version,
+    executionContractSemanticFingerprint:
+      attempt.executionContractSemanticFingerprint ??
+      contract.semanticFingerprint,
+  };
+}
+
 /**
  * Canonical binding carried by the agent_selection Confirmation actionRef.
  * See invariants.formatAgentSelectionActionRef.
diff --git a/projects/sfia-studio/app/playwright.config.ts b/projects/sfia-studio/app/playwright.config.ts
index feff58f6..584d588f 100644
--- a/projects/sfia-studio/app/playwright.config.ts
+++ b/projects/sfia-studio/app/playwright.config.ts
@@ -27,6 +27,7 @@ export default defineConfig({
     env: {
       ...process.env,
       OPS1_E2E_ALLOW_DIRTY_PRINCIPAL: "1",
+      SFIA_STUDIO_E2E_QA_CONTROL: "1",
       // Local Pilote authority TEMPORARY WITH EXIT — required for /studio HD path.
       SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY: "1",
       D1_INTAKE_PROVIDER: process.env.D1_INTAKE_PROVIDER || "fake",

```

---

## Verdict

**READY FOR REVIEW**

W3-B CONTRACT RESULT CORRECTION — NEW LOCAL COMMIT `0b1e50a5f6b5fb0c84c3015a5f3390fa139cfc09` ABOVE `0ef57e73ed28e83c849962117a0a8566d0da8074` — SEMANTIC PASS REQUIRES KNOWN APPLICABLE SERVER EVALUATOR — EXACT EC VERSION/FINGERPRINT BINDING — FROZEN REVIEWBUNDLE BINDING — MODE-SPECIFIC CONTRACT RESULT CONFIRMATION WITHOUT GENERIC MORRIS REGRESSION — USER_CANCEL / SYSTEM_GOVERNED_STOP EVIDENCE DISTINCT — CANONICAL /studio REPROVEN — X-W3B-01…12 REQUALIFIED — C6 CLOSED — US-P1-05/06 ONLY — REAL OUT — NO PUSH/PR/MERGE — AWAITING CHATGPT REVIEW.
