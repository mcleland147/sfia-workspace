# SFIA Studio — W3-B Option B Micro-Correction Post-Review — Review Pack FULL

## Meta

| Field | Value |
|---|---|
| Cycle | 8 — Delivery / correction |
| Profil | CRITICAL |
| Typologie | RUN borné sur INC W3-B |
| Scope US | US-P1-05 / US-P1-06 UNIQUEMENT |
| Timestamps | 2026-08-25 00:51:34 CEST / 2026-08-24 22:51:34 UTC |
| Worktree | `/Users/morris/Projects/sfia-workspace-w3b-bound-snapshot` |
| Branch | `delivery/sfia-studio-product-completion-w3-b-bound-snapshot` |
| Starting HEAD (reviewed candidate) | `66427eaf3ea74388b61c73e738f4b4df7b9a983a` |
| Correction HEAD | `8c1f9b863a36391131b01ffd81a673d0105c1122` |
| Parent | `66427eaf3ea74388b61c73e738f4b4df7b9a983a` |
| origin/main | `8520f546f3613ec66c0b98aa7390163cb1350efe` |
| Incoming handoff | `7f8e65421f8d3897a121c28b90add9e705d6add6` (candidate=66427eaf) |
| C6 | CLOSED |
| W3 | IN PROGRESS |
| W3-B | **NOT CLOSED** |
| W3-C/D/E | NOT STARTED |
| REAL | OUT |
| FinOps | FREEZE |
| W4 | OUT |
| Runtime v3 | NON ADOPTED |
| Handoff note | ChatGPT re-review: code `8c1f9b86` REVIEW-CLEAN; this republication remaps X-W3B-01…12 to canonical exit IDs only (no project commit) |

## Morris GO consumed

GO MORRIS — W3-B OPTION B MICRO-CORRECTIF POST-REVIEW — SAME US-P1-05/06 — START EXACTLY FROM 66427EAF — FIX ONLY SNAPSHOT CANONICAL VALIDATION + REAL ATTEMPT STATUS AT CONTRACT RESULT CONFIRM + W3-B FRESHNESS FAIL-CLOSED AT CONFIRM — PRESERVE OPTION B / NOT_PROVEN / FROZEN RB / SYSTEM STOP / CANCEL / SQLITE / CANONICAL /studio — NO ARCHITECTURE REOPEN — NO DOC MUTATION — NO PROJECT PUSH/PR/MERGE — C6 CLOSED — W3-B NOT CLOSED — W3-C/D/E NOT STARTED — REAL OUT — FINOPS FREEZE — W4 OUT — RUNTIME V3 NON ADOPTED.

## Local Git Truth (pre-commit)

```
pwd: /Users/morris/Projects/sfia-workspace-w3b-bound-snapshot
toplevel: /Users/morris/Projects/sfia-workspace-w3b-bound-snapshot
branch: delivery/sfia-studio-product-completion-w3-b-bound-snapshot
HEAD: 66427eaf3ea74388b61c73e738f4b4df7b9a983a
origin/main: 8520f546f3613ec66c0b98aa7390163cb1350efe
dirty (pre-commit): 5 project files OB01–OB03 + .tmp-sfia-review review-only
```

No silent reset/stash. No main merge/rebase.

## Sources loaded (read-only; not mutated)

- `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md`
- `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`
- `projects/sfia-studio/product-completion/01..03,05,06,11,12` (DOC12 Option B)
- Applicable v3 framing 30–37 (read-only)
- Process: `prompts/templates/sfia-cycle-execution-template.md`, `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- Incoming Review Handoff `7f8e6542` — candidate HEAD `66427eaf` confirmed

## ChatGPT review blockers (exactly 3)

| ID | Defect |
|---|---|
| **R-W3B-OB01** | Contract Result used weaker `isAttemptBoundSnapshotValid` than canonical `validateBoundExecutionContractSnapshot` (schema / Project / Cycle gaps). |
| **R-W3B-OB02** | Confirm loaded real Attempt but still inferred `attemptStatus` from EO assessments via `inferAttemptStatusFromContractResultAssessments`. |
| **R-W3B-OB03** | Evaluate used W3-B fresh-only Evidence; Confirm reused permissive generic `assessRequiredEvidence`. |

Architecture Option B accepted. No architecture reopen in this cycle.

---

## OB01 — Canonical full snapshot validation

### Prior defect

`isAttemptBoundSnapshotValid` checked EC id / version / fingerprint recompute but **not**:
- `executionContractSchemaVersion` support
- Project coherence vs expected durable context
- Cycle coherence vs expected durable context

Evaluate / Confirm / FC-11 could treat unsupported-schema or Project/Cycle-incoherent snapshots as valid.

### After

**Single canonical primitive:** `validateBoundExecutionContractSnapshot` in
`lib/oa/execution-attempt/domain/boundExecutionContract.ts`

`isAttemptBoundSnapshotValid` is now a **strict thin wrapper** delegating to that primitive with `requirePresent: true` + optional project/cycle expectations.

Fingerprint rule tightened: when snapshot present, empty/missing Attempt fingerprint → `bound_snapshot_attempt_fingerprint_mismatch` (fail-closed).

### Validation matrix (PASS requires all)

| Check | Reason on fail | Evaluate | Confirm | FC-11 |
|---|---|---|---|---|
| Snapshot present | `bound_snapshot_missing` | historical missing → NOT_PROVEN path (no snap) | refuse | no SUCCESS |
| Schema supported (`0.1.0-oa`) | `bound_snapshot_schema_unsupported` | refuse / no PASS | refuse | no SUCCESS |
| EC id match | `bound_snapshot_ec_id_mismatch` | refuse | refuse | no SUCCESS |
| Version match | `bound_snapshot_version_mismatch` | refuse | refuse | no SUCCESS |
| Attempt FP == snap FP | `bound_snapshot_attempt_fingerprint_mismatch` | refuse | refuse | no SUCCESS |
| Recomputed FP == snap FP | `bound_snapshot_fingerprint_corrupt` | refuse | refuse | no SUCCESS |
| Project expected | `bound_snapshot_project_mismatch` | vs `contract.projectId` | vs bindings.projectId | vs bindings/projectId |
| Cycle expected | `bound_snapshot_cycle_mismatch` | vs `contract.cycleInstanceId` | vs bindings.cycleInstanceId | vs bindings/cycle |

No latest-EC consultation. No third validator. No duplicated logic.

### Evaluate / Confirm / FC-11 behavior

- **Evaluate:** if snap present → canonical validate with contract Project/Cycle; fail with validator reason; historical missing snap still durable NOT_PROVEN.
- **Confirm:** canonical validate with bindings Project/Cycle; fail with validator reason.
- **FC-11 `contractResultBindingsMatchCurrentFacts`:** calls wrapper with Project/Cycle expectations; schema/project/cycle mismatch → false (no SUCCESS).

### OB01 tests

- A schema unsupported → Evaluate refuses
- B projectId mismatch → Evaluate refuses
- C cycleInstanceId mismatch → Evaluate refuses
- D–F Confirm refuses schema/project/cycle snapshot incoherence
- G–I FC-11 schema/project/cycle mismatch → no SUCCESS
- Preserved: historical missing snapshot → NOT_PROVEN; corrupt → fail-closed

---

## OB02 — Real `attempt.status` at Confirm

### Prior defect

Confirm loaded durable Attempt then used `inferAttemptStatusFromContractResultAssessments(stampedEOs)` which could mint `"succeeded"` from all-EO-PASS — forbidden for Contract Result PASS (FC-10 technical status is independent of EO).

### After

```ts
deriveCanonicalContractResultStatus({
  attemptStatus: contractResultAttempt.status, // real Attempt
  expectedOutputAssessments: stampedExpectedOutputs,
  evidenceRequirementAssessments: stampedEvidenceRequirements,
})
```

`inferAttemptStatusFromContractResultAssessments` removed from Confirm import/usage (helper file may still export it unused — no out-of-scope cleanup).

### Status matrix at Confirm (assisted + EO PASS + ER SATISFIED + otherwise valid)

| attempt.status | Confirm PASS? |
|---|---|
| failed | NO |
| cancelled | NO |
| timeout | NO |
| running | NO |
| accepted | NO |
| succeeded | YES (may pass when all other gates hold) |

### OB02 tests

- EO PASS cannot mint pass when attempt.status ∈ {failed,cancelled,timeout,running,accepted}
- succeeded + EO PASS + ER SATISFIED + valid bindings → may pass

---

## OB03 — W3-B freshness fail-closed at Confirm

### Prior defect

Evaluate: `isW3bContractResultEvidenceUsable` fresh-only allowlist.
Confirm: generic `assessRequiredEvidence` could accept verified+available Evidence with freshness ≠ fresh (e.g. aging).

### After

For `subjectKind === execution_contract_result`, after generic bundle/evidence checks, Confirm **additionally** revalidates each required Evidence with:

`isW3bContractResultEvidenceUsable({ evidence: live, snapshot: frozenSnap })`

Fail-closed before any PASS write (`contract_result_confirm_evidence_not_w3b_usable`).

Generic ClaimEvaluation / `assessRequiredEvidence` / `evidenceSupportsPass` **unchanged**.

### Freshness matrix at Confirm (Contract Result)

| freshness | Confirm |
|---|---|
| undefined | refused |
| unknown | refused |
| aging | refused |
| stale | refused |
| fresh (+ status/availability/version/snapshot OK) | may pass |
| live fresh + frozen snapshot incompatible | refused |

### OB03 tests

- undefined / unknown / aging / stale → refused
- fresh + valid → may pass
- live fresh but frozen snapshot incompatible → refused

---

## Integrated pass bar (adversarial)

Contract Result assisted PASS at Confirm only if ALL of:
- real Attempt.status == succeeded
- bound snapshot canonically valid (schema + EC + version + FP + project + cycle)
- frozen ReviewBundle exact
- Evidence version exact + usable status + available + freshness fresh
- all EO PASS + all ER SATISFIED
- FC-12 confirmation authorized
- reviewConfirmation stamped
- final re-derivation == pass

Each family broken in OB01/OB02/OB03 suites → no PASS written.

---

## Exact files changed

1. `projects/sfia-studio/app/lib/oa/execution-attempt/domain/boundExecutionContract.ts`
2. `projects/sfia-studio/app/lib/oa/evidence-review/domain/contractResultTypes.ts`
3. `projects/sfia-studio/app/lib/oa/evidence-review/application/evaluateContractResult.ts`
4. `projects/sfia-studio/app/lib/oa/evidence-review/application/confirmClaimEvaluation.ts`
5. `projects/sfia-studio/app/__tests__/oa/evidence-review/optionBBoundSnapshot.test.ts`

No DOC / convergence / product-completion / method / prompts mutations.
No package/dependency changes. No new persistence / endpoints / engines.
Four primary zones sufficient — no extra app files required.

---

## Full useful diff (66427eaf → working tree / NEW_HEAD)

```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/evidence-review/optionBBoundSnapshot.test.ts b/projects/sfia-studio/app/__tests__/oa/evidence-review/optionBBoundSnapshot.test.ts
index 703b915e..60c09d54 100644
--- a/projects/sfia-studio/app/__tests__/oa/evidence-review/optionBBoundSnapshot.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/evidence-review/optionBBoundSnapshot.test.ts
@@ -395,7 +395,7 @@ describe("Option B — Contract Result snapshot-only + freshness", () => {
     expect(evaluated.ok).toBe(false);
     if (evaluated.ok) return;
     expect(evaluated.error.internalCauseRef).toBe(
-      "bound_snapshot_corrupt_or_inconsistent",
+      "bound_snapshot_attempt_fingerprint_mismatch",
     );
   });

@@ -525,6 +525,7 @@ describe("Option B — Confirm exact binding", () => {
           status: "evaluating",
           proposedBy: { actorId: "actor:a", role: "project_owner" },
           proposedAt: "2026-08-24T00:00:00.000Z",
+          evaluatedAt: "2026-08-24T00:00:00.000Z",
           provenance: {
             schemaVersion: "0.1.0-oa",
             provenanceRecordId: "prv:1",
@@ -682,6 +683,7 @@ describe("Option B — Confirm exact binding", () => {
           status: "evaluating",
           proposedBy: { actorId: "actor:a", role: "project_owner" },
           proposedAt: "2026-08-24T00:00:00.000Z",
+          evaluatedAt: "2026-08-24T00:00:00.000Z",
           provenance: {
             schemaVersion: "0.1.0-oa",
             provenanceRecordId: "prv:1",
@@ -839,6 +841,7 @@ describe("Option B — Confirm exact binding", () => {
           status: "evaluating",
           proposedBy: { actorId: "actor:a", role: "project_owner" },
           proposedAt: "2026-08-24T00:00:00.000Z",
+          evaluatedAt: "2026-08-24T00:00:00.000Z",
           provenance: {
             schemaVersion: "0.1.0-oa",
             provenanceRecordId: "prv:1",
@@ -1128,3 +1131,727 @@ describe("Option B — lifecycle immutability of snapshot on spread updates", ()
     }
   });
 });
+
+describe("Option B micro-correction OB01 — canonical snapshot validation", () => {
+  const evidence = makeEvidence();
+  const reviewBundleBase = {
+    schemaVersion: "0.2.0-oa" as const,
+    reviewBundleId: "rb:w3b:1",
+    projectId: contract.projectId,
+    version: 2,
+    frozenAt: "2026-08-24T00:00:00.000Z",
+    frozenVersion: 2,
+    evidenceRefs: [evidence.evidenceId],
+    claimEvaluationRefs: [] as string[],
+    completeness: "complete" as const,
+    status: "ready_for_review" as const,
+    createdAt: "2026-08-24T00:00:00.000Z",
+    synthesisOnly: false,
+    provenance: {
+      schemaVersion: "0.1.0-oa" as const,
+      provenanceRecordId: "prv:rb",
+      actor: LOCAL_PILOTE_ACTOR,
+      source: "review" as const,
+      timestamp: "2026-08-24T00:00:00.000Z",
+      correlationId: "cor:rb",
+    },
+    frozenEvidenceSnapshots: [frozenSnapshot],
+  };
+
+  async function evaluateWithSnap(
+    snapOverrides: Record<string, unknown>,
+    contractOverrides: Partial<ExecutionContract> = {},
+  ) {
+    const snap = captureBoundExecutionContractSnapshot(contract);
+    return new EvaluateContractResult(
+      {
+        findById: async () => null,
+        findByIdempotencyKey: async () => null,
+        exists: async () => false,
+        create: async () => {},
+        update: async () => {},
+      },
+      { nowIso: () => "2026-08-24T00:00:00.000Z" },
+      { append: () => {} },
+      { newCorrelationId: () => "cor:1", newProvenanceId: () => "prv:1" },
+    ).execute({
+      claimEvaluationId: "clm:w3b:ob01",
+      idempotencyKey: `idem:ce:ob01:${JSON.stringify(snapOverrides).slice(0, 40)}`,
+      actor: LOCAL_PILOTE_ACTOR,
+      contract: { ...contract, ...contractOverrides },
+      attempt: makeAttempt({
+        boundExecutionContract: { ...snap, ...snapOverrides },
+      }),
+      evidence,
+      reviewBundle: reviewBundleBase,
+    });
+  }
+
+  it("A schema unsupported → Evaluate refuses", async () => {
+    const evaluated = await evaluateWithSnap({
+      executionContractSchemaVersion: "9.9.9-bad",
+    });
+    expect(evaluated.ok).toBe(false);
+    if (evaluated.ok) return;
+    expect(evaluated.error.internalCauseRef).toBe(
+      "bound_snapshot_schema_unsupported",
+    );
+  });
+
+  it("B projectId mismatch → Evaluate refuses", async () => {
+    const snap = captureBoundExecutionContractSnapshot(contract);
+    const evaluated = await new EvaluateContractResult(
+      {
+        findById: async () => null,
+        findByIdempotencyKey: async () => null,
+        exists: async () => false,
+        create: async () => {},
+        update: async () => {},
+      },
+      { nowIso: () => "2026-08-24T00:00:00.000Z" },
+      { append: () => {} },
+      { newCorrelationId: () => "cor:1", newProvenanceId: () => "prv:1" },
+    ).execute({
+      claimEvaluationId: "clm:w3b:ob01-proj",
+      idempotencyKey: "idem:ce:ob01-proj",
+      actor: LOCAL_PILOTE_ACTOR,
+      contract: { ...contract, projectId: "prj:other" },
+      attempt: makeAttempt({
+        boundExecutionContract: {
+          ...snap,
+          semanticMaterial: { ...snap.semanticMaterial, projectId: contract.projectId },
+        },
+      }),
+      evidence,
+      reviewBundle: reviewBundleBase,
+    });
+    expect(evaluated.ok).toBe(false);
+    if (evaluated.ok) return;
+    expect(evaluated.error.internalCauseRef).toBe(
+      "bound_snapshot_project_mismatch",
+    );
+  });
+
+  it("C cycleInstanceId mismatch → Evaluate refuses", async () => {
+    const withCycle = makeContract({ cycleInstanceId: "cyc:a" });
+    const snap = captureBoundExecutionContractSnapshot(withCycle);
+    const evaluated = await new EvaluateContractResult(
+      {
+        findById: async () => null,
+        findByIdempotencyKey: async () => null,
+        exists: async () => false,
+        create: async () => {},
+        update: async () => {},
+      },
+      { nowIso: () => "2026-08-24T00:00:00.000Z" },
+      { append: () => {} },
+      { newCorrelationId: () => "cor:1", newProvenanceId: () => "prv:1" },
+    ).execute({
+      claimEvaluationId: "clm:w3b:ob01-cycle",
+      idempotencyKey: "idem:ce:ob01-cycle",
+      actor: LOCAL_PILOTE_ACTOR,
+      contract: { ...withCycle, cycleInstanceId: "cyc:b" },
+      attempt: makeAttempt({
+        executionContractSemanticFingerprint: snap.semanticFingerprint,
+        boundExecutionContract: snap,
+      }),
+      evidence: makeEvidence({
+        bindings: {
+          projectId: withCycle.projectId,
+          executionContractId: withCycle.executionContractId,
+          executionAttemptId: "xat:w3b:optb",
+        },
+      }),
+      reviewBundle: { ...reviewBundleBase, projectId: withCycle.projectId },
+    });
+    expect(evaluated.ok).toBe(false);
+    if (evaluated.ok) return;
+    expect(evaluated.error.internalCauseRef).toBe(
+      "bound_snapshot_cycle_mismatch",
+    );
+  });
+
+  it("G–I FC-11 schema/project/cycle mismatch → no SUCCESS", () => {
+    const snap = captureBoundExecutionContractSnapshot(contract);
+    const attempt = makeAttempt({ boundExecutionContract: snap });
+    const bindings = {
+      projectId: contract.projectId,
+      executionContractId: contract.executionContractId,
+      executionContractVersion: contract.version,
+      executionContractSemanticFingerprint: fingerprint,
+      executionAttemptId: attempt.attemptId,
+      reviewBundleId: "rb:1",
+      reviewBundleVersion: 2,
+      evidenceRefs: [evidence.evidenceId],
+    };
+    expect(
+      contractResultBindingsMatchCurrentFacts({
+        bindings,
+        attempt: makeAttempt({
+          boundExecutionContract: {
+            ...snap,
+            executionContractSchemaVersion: "bad",
+          },
+        }),
+        reviewBundle: { reviewBundleId: "rb:1", frozenVersion: 2 },
+        evidenceIds: [evidence.evidenceId],
+      }),
+    ).toBe(false);
+    expect(
+      contractResultBindingsMatchCurrentFacts({
+        bindings,
+        attempt: makeAttempt({
+          boundExecutionContract: {
+            ...snap,
+            semanticMaterial: {
+              ...snap.semanticMaterial,
+              projectId: "prj:tampered",
+            },
+          },
+        }),
+        reviewBundle: { reviewBundleId: "rb:1", frozenVersion: 2 },
+        evidenceIds: [evidence.evidenceId],
+        projectId: contract.projectId,
+      }),
+    ).toBe(false);
+    expect(
+      contractResultBindingsMatchCurrentFacts({
+        bindings: { ...bindings, cycleInstanceId: "cyc:expected" },
+        attempt: makeAttempt({
+          boundExecutionContract: {
+            ...snap,
+            semanticMaterial: {
+              ...snap.semanticMaterial,
+              cycleInstanceId: "cyc:other",
+            },
+          },
+        }),
+        reviewBundle: { reviewBundleId: "rb:1", frozenVersion: 2 },
+        evidenceIds: [evidence.evidenceId],
+        cycleInstanceId: "cyc:expected",
+      }),
+    ).toBe(false);
+  });
+});
+
+
+  it("D–F Confirm refuses schema/project/cycle snapshot incoherence", async () => {
+    async function confirmWithSnap(snapPatch: Record<string, unknown>, bindingProjectId = contract.projectId, bindingCycle: string | null = null) {
+      const snap = captureBoundExecutionContractSnapshot(contract);
+      return new ConfirmClaimEvaluation(
+        {
+          findById: async () => ({
+            schemaVersion: CLAIM_EVALUATION_SCHEMA_VERSION,
+            claimEvaluationId: "clm:cr:ob01-confirm",
+            claimType: "conformite",
+            claimStatement: "x",
+            criticality: "non_critical",
+            evaluationMethod: "assisted",
+            requiredEvidenceRefs: ["ev:1"],
+            providedEvidenceRefs: ["ev:1"],
+            reviewBundleId: "rb:1",
+            reviewBundleVersion: 2,
+            status: "evaluating",
+            proposedBy: { actorId: "actor:a", role: "project_owner" },
+            proposedAt: "2026-08-24T00:00:00.000Z",
+            evaluatedAt: "2026-08-24T00:00:00.000Z",
+            provenance: {
+              schemaVersion: "0.1.0-oa",
+              provenanceRecordId: "prv:1",
+              actor: { actorId: "actor:a", role: "project_owner" },
+              source: "review",
+              timestamp: "2026-08-24T00:00:00.000Z",
+              correlationId: "cor:1",
+            },
+            version: 1,
+            subjectKind: CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT,
+            contractResultReviewPolicyRef: W3B_CONTRACT_RESULT_REVIEW_POLICY_REF,
+            contractResultBindings: {
+              projectId: bindingProjectId,
+              cycleInstanceId: bindingCycle,
+              executionContractId: contract.executionContractId,
+              executionContractVersion: contract.version,
+              executionContractSemanticFingerprint: fingerprint,
+              executionAttemptId: "xat:w3b:optb",
+              reviewBundleId: "rb:1",
+              reviewBundleVersion: 2,
+              evidenceRefs: ["ev:1"],
+            },
+            expectedOutputAssessments: [
+              {
+                itemId: { semanticFingerprint: fingerprint, itemKind: "EO", ordinal: 0 },
+                expectation: W3B_TEMP_ARTIFACT_EO_TEMPLATE,
+                result: "PASS",
+                method: "assisted",
+                provenance: { evaluatorRef: "w3b", evaluatedAt: "2026-08-24T00:00:00.000Z" },
+              },
+            ],
+            evidenceRequirementAssessments: [
+              {
+                itemId: { semanticFingerprint: fingerprint, itemKind: "ER", ordinal: 0 },
+                requirement: W3B_TEMP_ARTIFACT_ER_KEY,
+                result: "SATISFIED",
+                method: "assisted",
+                provenance: { evaluatorRef: "w3b", evaluatedAt: "2026-08-24T00:00:00.000Z" },
+              },
+            ],
+          }),
+          findByIdempotencyKey: async () => null,
+          exists: async () => true,
+          create: async () => {},
+          update: async () => {},
+        },
+        {
+          findById: async () => ({
+            schemaVersion: "0.2.0-oa",
+            reviewBundleId: "rb:1",
+            projectId: contract.projectId,
+            version: 2,
+            frozenVersion: 2,
+            frozenAt: "2026-08-24T00:00:00.000Z",
+            evidenceRefs: ["ev:1"],
+            claimEvaluationRefs: [],
+            completeness: "complete",
+            status: "ready_for_review",
+            createdAt: "2026-08-24T00:00:00.000Z",
+            synthesisOnly: false,
+            provenance: {
+              schemaVersion: "0.1.0-oa",
+              provenanceRecordId: "prv:rb",
+              actor: LOCAL_PILOTE_ACTOR,
+              source: "review",
+              timestamp: "2026-08-24T00:00:00.000Z",
+              correlationId: "cor:rb",
+            },
+            frozenEvidenceSnapshots: [
+              { evidenceId: "ev:1", evidenceVersion: 1, status: "verified", availability: "available" },
+            ],
+          }),
+        },
+        { findById: async () => makeEvidence({ evidenceId: "ev:1", status: "verified" }) },
+        { verify: () => ({ ok: true, reason: "ok", resolvedLevel: "N3", authorityEvidenceId: "auth:1" }) },
+        { nowIso: () => "2026-08-24T00:00:00.000Z" },
+        { append: () => {} },
+        { newCorrelationId: () => "cor:1", newProvenanceId: () => "prv:2" },
+        {
+          findById: async () =>
+            ({
+              ...makeAttempt({
+                boundExecutionContract: { ...snap, ...snapPatch },
+              }),
+              schemaVersion: "0.2.0-oa",
+              selectedAgentRef: "agt:1",
+              idempotencyKey: "idem:x",
+              correlationId: "cor:x",
+              version: 1,
+              createdAt: "2026-08-24T00:00:00.000Z",
+              provenance: {
+                schemaVersion: "0.1.0-oa",
+                provenanceRecordId: "prv:x",
+                actor: LOCAL_PILOTE_ACTOR,
+                source: "execution_adapter",
+                timestamp: "2026-08-24T00:00:00.000Z",
+                correlationId: "cor:x",
+              },
+            }) as never,
+        },
+      ).execute({
+        claimEvaluationId: "clm:cr:ob01-confirm",
+        expectedVersion: 1,
+        idempotencyKey: `idem:confirm:ob01:${JSON.stringify(snapPatch).slice(0, 24)}`,
+        actor: { actorId: "actor:b", role: "project_owner" },
+        authorityEvidenceId: "auth:1",
+      });
+    }
+
+    const schema = await confirmWithSnap({ executionContractSchemaVersion: "bad" });
+    expect(schema.ok).toBe(false);
+    if (!schema.ok) {
+      expect(schema.error.internalCauseRef).toBe("bound_snapshot_schema_unsupported");
+    }
+
+    const project = await confirmWithSnap({}, "prj:other");
+    expect(project.ok).toBe(false);
+    if (!project.ok) {
+      expect(project.error.internalCauseRef).toBe("bound_snapshot_project_mismatch");
+    }
+
+    const cycle = await confirmWithSnap({}, contract.projectId, "cyc:expected");
+    expect(cycle.ok).toBe(false);
+    if (!cycle.ok) {
+      expect(cycle.error.internalCauseRef).toBe("bound_snapshot_cycle_mismatch");
+    }
+  });
+
+describe("Option B micro-correction OB02 — real attempt.status at Confirm", () => {
+  function passAssessments() {
+    return {
+      expectedOutputAssessments: [
+        {
+          itemId: {
+            semanticFingerprint: fingerprint,
+            itemKind: "EO" as const,
+            ordinal: 0,
+          },
+          expectation: W3B_TEMP_ARTIFACT_EO_TEMPLATE,
+          result: "PASS" as const,
+          method: "assisted" as const,
+          provenance: {
+            evaluatorRef: "w3b",
+            evaluatedAt: "2026-08-24T00:00:00.000Z",
+          },
+        },
+      ],
+      evidenceRequirementAssessments: [
+        {
+          itemId: {
+            semanticFingerprint: fingerprint,
+            itemKind: "ER" as const,
+            ordinal: 0,
+          },
+          requirement: W3B_TEMP_ARTIFACT_ER_KEY,
+          result: "SATISFIED" as const,
+          method: "assisted" as const,
+          provenance: {
+            evaluatorRef: "w3b",
+            evaluatedAt: "2026-08-24T00:00:00.000Z",
+          },
+        },
+      ],
+    };
+  }
+
+  async function confirmWithAttemptStatus(status: string) {
+    const assessments = passAssessments();
+    return new ConfirmClaimEvaluation(
+      {
+        findById: async () => ({
+          schemaVersion: CLAIM_EVALUATION_SCHEMA_VERSION,
+          claimEvaluationId: "clm:cr:ob02",
+          claimType: "conformite",
+          claimStatement: "x",
+          criticality: "non_critical",
+          evaluationMethod: "assisted",
+          requiredEvidenceRefs: ["ev:1"],
+          providedEvidenceRefs: ["ev:1"],
+          reviewBundleId: "rb:1",
+          reviewBundleVersion: 2,
+          status: "evaluating",
+          proposedBy: { actorId: "actor:a", role: "project_owner" },
+          proposedAt: "2026-08-24T00:00:00.000Z",
+          evaluatedAt: "2026-08-24T00:00:00.000Z",
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
+          contractResultReviewPolicyRef: W3B_CONTRACT_RESULT_REVIEW_POLICY_REF,
+          contractResultBindings: {
+            projectId: contract.projectId,
+            executionContractId: contract.executionContractId,
+            executionContractVersion: contract.version,
+            executionContractSemanticFingerprint: fingerprint,
+            executionAttemptId: "xat:w3b:optb",
+            reviewBundleId: "rb:1",
+            reviewBundleVersion: 2,
+            evidenceRefs: ["ev:1"],
+          },
+          ...assessments,
+        }),
+        findByIdempotencyKey: async () => null,
+        exists: async () => true,
+        create: async () => {},
+        update: async () => {},
+      },
+      {
+        findById: async () => ({
+          schemaVersion: "0.2.0-oa",
+          reviewBundleId: "rb:1",
+          projectId: contract.projectId,
+          version: 2,
+          frozenVersion: 2,
+          frozenAt: "2026-08-24T00:00:00.000Z",
+          evidenceRefs: ["ev:1"],
+          claimEvaluationRefs: [],
+          completeness: "complete",
+          status: "ready_for_review",
+          createdAt: "2026-08-24T00:00:00.000Z",
+          synthesisOnly: false,
+          provenance: {
+            schemaVersion: "0.1.0-oa",
+            provenanceRecordId: "prv:rb",
+            actor: LOCAL_PILOTE_ACTOR,
+            source: "review",
+            timestamp: "2026-08-24T00:00:00.000Z",
+            correlationId: "cor:rb",
+          },
+          frozenEvidenceSnapshots: [
+            {
+              evidenceId: "ev:1",
+              evidenceVersion: 1,
+              status: "verified",
+              availability: "available",
+            },
+          ],
+        }),
+      },
+      {
+        findById: async () =>
+          makeEvidence({ evidenceId: "ev:1", status: "verified" }),
+      },
+      {
+        verify: () => ({
+          ok: true,
+          reason: "ok",
+          resolvedLevel: "N3",
+          authorityEvidenceId: "auth:1",
+        }),
+      },
+      { nowIso: () => "2026-08-24T00:00:00.000Z" },
+      { append: () => {} },
+      { newCorrelationId: () => "cor:1", newProvenanceId: () => "prv:2" },
+      {
+        findById: async () =>
+          ({
+            ...makeAttempt({ status }),
+            schemaVersion: "0.2.0-oa",
+            selectedAgentRef: "agt:1",
+            idempotencyKey: "idem:x",
+            correlationId: "cor:x",
+            version: 1,
+            createdAt: "2026-08-24T00:00:00.000Z",
+            provenance: {
+              schemaVersion: "0.1.0-oa",
+              provenanceRecordId: "prv:x",
+              actor: LOCAL_PILOTE_ACTOR,
+              source: "execution_adapter",
+              timestamp: "2026-08-24T00:00:00.000Z",
+              correlationId: "cor:x",
+            },
+          }) as never,
+      },
+    ).execute({
+      claimEvaluationId: "clm:cr:ob02",
+      expectedVersion: 1,
+      idempotencyKey: `idem:confirm:ob02:${status}`,
+      actor: { actorId: "actor:b", role: "project_owner" },
+      authorityEvidenceId: "auth:1",
+    });
+  }
+
+  for (const status of [
+    "failed",
+    "cancelled",
+    "timeout",
+    "running",
+    "accepted",
+  ] as const) {
+    it(`EO PASS cannot mint pass when attempt.status=${status}`, async () => {
+      const result = await confirmWithAttemptStatus(status);
+      expect(result.ok).toBe(false);
+      if (result.ok) return;
+      expect(result.error.internalCauseRef).toBe(
+        "contract_result_confirm_derived_not_pass",
+      );
+    });
+  }
+
+  it("succeeded + EO PASS + ER SATISFIED + valid bindings → may pass", async () => {
+    const result = await confirmWithAttemptStatus("succeeded");
+    expect(result.ok).toBe(true);
+    if (!result.ok) return;
+    expect(result.claimEvaluation.status).toBe("pass");
+  });
+});
+
+describe("Option B micro-correction OB03 — W3-B freshness at Confirm", () => {
+  async function confirmWithFreshness(
+    freshness: string | undefined,
+    snapshotStatus = "verified",
+  ) {
+    return new ConfirmClaimEvaluation(
+      {
+        findById: async () => ({
+          schemaVersion: CLAIM_EVALUATION_SCHEMA_VERSION,
+          claimEvaluationId: "clm:cr:ob03",
+          claimType: "conformite",
+          claimStatement: "x",
+          criticality: "non_critical",
+          evaluationMethod: "assisted",
+          requiredEvidenceRefs: ["ev:1"],
+          providedEvidenceRefs: ["ev:1"],
+          reviewBundleId: "rb:1",
+          reviewBundleVersion: 2,
+          status: "evaluating",
+          proposedBy: { actorId: "actor:a", role: "project_owner" },
+          proposedAt: "2026-08-24T00:00:00.000Z",
+          evaluatedAt: "2026-08-24T00:00:00.000Z",
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
+          contractResultReviewPolicyRef: W3B_CONTRACT_RESULT_REVIEW_POLICY_REF,
+          contractResultBindings: {
+            projectId: contract.projectId,
+            executionContractId: contract.executionContractId,
+            executionContractVersion: contract.version,
+            executionContractSemanticFingerprint: fingerprint,
+            executionAttemptId: "xat:w3b:optb",
+            reviewBundleId: "rb:1",
+            reviewBundleVersion: 2,
+            evidenceRefs: ["ev:1"],
+          },
+          expectedOutputAssessments: [
+            {
+              itemId: {
+                semanticFingerprint: fingerprint,
+                itemKind: "EO",
+                ordinal: 0,
+              },
+              expectation: W3B_TEMP_ARTIFACT_EO_TEMPLATE,
+              result: "PASS",
+              method: "assisted",
+              provenance: {
+                evaluatorRef: "w3b",
+                evaluatedAt: "2026-08-24T00:00:00.000Z",
+              },
+            },
+          ],
+          evidenceRequirementAssessments: [
+            {
+              itemId: {
+                semanticFingerprint: fingerprint,
+                itemKind: "ER",
+                ordinal: 0,
+              },
+              requirement: W3B_TEMP_ARTIFACT_ER_KEY,
+              result: "SATISFIED",
+              method: "assisted",
+              provenance: {
+                evaluatorRef: "w3b",
+                evaluatedAt: "2026-08-24T00:00:00.000Z",
+              },
+            },
+          ],
+        }),
+        findByIdempotencyKey: async () => null,
+        exists: async () => true,
+        create: async () => {},
+        update: async () => {},
+      },
+      {
+        findById: async () => ({
+          schemaVersion: "0.2.0-oa",
+          reviewBundleId: "rb:1",
+          projectId: contract.projectId,
+          version: 2,
+          frozenVersion: 2,
+          frozenAt: "2026-08-24T00:00:00.000Z",
+          evidenceRefs: ["ev:1"],
+          claimEvaluationRefs: [],
+          completeness: "complete",
+          status: "ready_for_review",
+          createdAt: "2026-08-24T00:00:00.000Z",
+          synthesisOnly: false,
+          provenance: {
+            schemaVersion: "0.1.0-oa",
+            provenanceRecordId: "prv:rb",
+            actor: LOCAL_PILOTE_ACTOR,
+            source: "review",
+            timestamp: "2026-08-24T00:00:00.000Z",
+            correlationId: "cor:rb",
+          },
+          frozenEvidenceSnapshots: [
+            {
+              evidenceId: "ev:1",
+              evidenceVersion: 1,
+              status: snapshotStatus,
+              availability: "available",
+            },
+          ],
+        }),
+      },
+      {
+        findById: async () =>
+          makeEvidence({
+            evidenceId: "ev:1",
+            status: "verified",
+            freshness: freshness as never,
+          }),
+      },
+      {
+        verify: () => ({
+          ok: true,
+          reason: "ok",
+          resolvedLevel: "N3",
+          authorityEvidenceId: "auth:1",
+        }),
+      },
+      { nowIso: () => "2026-08-24T00:00:00.000Z" },
+      { append: () => {} },
+      { newCorrelationId: () => "cor:1", newProvenanceId: () => "prv:2" },
+      {
+        findById: async () =>
+          ({
+            ...makeAttempt({ status: "succeeded" }),
+            schemaVersion: "0.2.0-oa",
+            selectedAgentRef: "agt:1",
+            idempotencyKey: "idem:x",
+            correlationId: "cor:x",
+            version: 1,
+            createdAt: "2026-08-24T00:00:00.000Z",
+            provenance: {
+              schemaVersion: "0.1.0-oa",
+              provenanceRecordId: "prv:x",
+              actor: LOCAL_PILOTE_ACTOR,
+              source: "execution_adapter",
+              timestamp: "2026-08-24T00:00:00.000Z",
+              correlationId: "cor:x",
+            },
+          }) as never,
+      },
+    ).execute({
+      claimEvaluationId: "clm:cr:ob03",
+      expectedVersion: 1,
+      idempotencyKey: `idem:confirm:ob03:${freshness ?? "undef"}`,
+      actor: { actorId: "actor:b", role: "project_owner" },
+      authorityEvidenceId: "auth:1",
+    });
+  }
+
+  for (const freshness of [undefined, "unknown", "aging", "stale"] as const) {
+    it(`freshness=${String(freshness)} → Confirm refused`, async () => {
+      const result = await confirmWithFreshness(freshness);
+      expect(result.ok).toBe(false);
+      if (result.ok) return;
+      const cause = result.error.internalCauseRef ?? "";
+      expect(
+        cause === "contract_result_confirm_evidence_not_w3b_usable" ||
+          cause.startsWith("confirm_evidence_"),
+      ).toBe(true);
+    });
+  }
+
+  it("fresh + valid snapshot → Confirm may pass", async () => {
+    const result = await confirmWithFreshness("fresh");
+    expect(result.ok).toBe(true);
+    if (!result.ok) return;
+    expect(result.claimEvaluation.status).toBe("pass");
+  });
+
+  it("live fresh but frozen snapshot incompatible → refused", async () => {
+    const result = await confirmWithFreshness("fresh", "stale");
+    expect(result.ok).toBe(false);
+  });
+});
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/application/confirmClaimEvaluation.ts b/projects/sfia-studio/app/lib/oa/evidence-review/application/confirmClaimEvaluation.ts
index 1a5d3a63..eff0ce5b 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/application/confirmClaimEvaluation.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/application/confirmClaimEvaluation.ts
@@ -22,8 +22,8 @@ import type {
 import {
   CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT,
   W3B_CONTRACT_RESULT_REVIEW_POLICY_REF,
-  isAttemptBoundSnapshotValid,
 } from "../domain/contractResultTypes";
+import { validateBoundExecutionContractSnapshot } from "@/lib/oa/execution-attempt/domain/boundExecutionContract";
 import { containsForbiddenSecret } from "../domain/invariants";
 import type { EvidenceAuditPort } from "../ports/evidenceAudit";
 import type { ClaimAuthorityPort } from "../ports/claimAuthorityPort";
@@ -36,10 +36,9 @@ import {
   assessRequiredEvidence,
   detailCodeForAssessment,
 } from "./claimEvidenceAssessment";
-import {
-  deriveCanonicalContractResultStatus,
-  inferAttemptStatusFromContractResultAssessments,
-} from "./contractResultAssessment";
+import { deriveCanonicalContractResultStatus } from "./contractResultAssessment";
+import { isW3bContractResultEvidenceUsable } from "./contractResultSemanticEvaluator";
+import type { ExecutionAttemptSnapshot } from "../domain/types";
 import {
   assertIdempotencyKey,
   fingerprintCommand,
@@ -322,6 +321,8 @@ export class ConfirmClaimEvaluation {
       const isContractResult =
         current.subjectKind === CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT;

+      let contractResultAttempt: ExecutionAttemptSnapshot | null = null;
+
       if (isContractResult) {
         if (!current.contractResultReviewPolicyRef) {
           return fail(
@@ -381,10 +382,16 @@ export class ConfirmClaimEvaluation {
             { claimEvaluation: current },
           );
         }
-        if (!isAttemptBoundSnapshotValid(attempt)) {
+        const snapshotValidation = validateBoundExecutionContractSnapshot({
+          attempt,
+          requirePresent: true,
+          expectedProjectId: bindings.projectId,
+          expectedCycleInstanceId: bindings.cycleInstanceId ?? null,
+        });
+        if (!snapshotValidation.ok) {
           return fail(
             "CLAIM_EVALUATION_INVALID",
-            "contract_result_confirm_corrupt_bound_snapshot",
+            snapshotValidation.reason,
             { claimEvaluation: current },
           );
         }
@@ -403,6 +410,33 @@ export class ConfirmClaimEvaluation {
             { claimEvaluation: current },
           );
         }
+
+        // OB03 — W3-B Evidence freshness/usability fail-closed (stricter than generic).
+        for (const evidenceId of current.requiredEvidenceRefs) {
+          const live = await this.evidence.findById(evidenceId);
+          const frozenSnap = (bundle.frozenEvidenceSnapshots ?? []).find(
+            (s) => s.evidenceId === evidenceId,
+          );
+          if (
+            !live ||
+            !isW3bContractResultEvidenceUsable({
+              evidence: live,
+              snapshot: frozenSnap,
+            })
+          ) {
+            return fail(
+              "CLAIM_EVALUATION_INVALID_STATE",
+              "contract_result_confirm_evidence_not_w3b_usable",
+              {
+                claimEvaluation: current,
+                evidenceId,
+                reviewBundleId: current.reviewBundleId,
+              },
+            );
+          }
+        }
+
+        contractResultAttempt = attempt;
       }

       const confirmationAuthority =
@@ -441,11 +475,16 @@ export class ConfirmClaimEvaluation {

       let contractResultStatus: ClaimEvaluation["status"] = "pass";
       if (isContractResult) {
-        const attemptStatus = inferAttemptStatusFromContractResultAssessments(
-          stampedExpectedOutputs ?? [],
-        );
+        if (!contractResultAttempt) {
+          return fail(
+            "CLAIM_EVALUATION_INVALID",
+            "contract_result_confirm_attempt_not_found",
+            { claimEvaluation: current },
+          );
+        }
+        // OB02 — derive from real Attempt.status (FC-10), never EO-inferred status.
         const derivedStatus = deriveCanonicalContractResultStatus({
-          attemptStatus,
+          attemptStatus: contractResultAttempt.status,
           expectedOutputAssessments: stampedExpectedOutputs ?? [],
           evidenceRequirementAssessments: stampedEvidenceRequirements ?? [],
         });
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/application/evaluateContractResult.ts b/projects/sfia-studio/app/lib/oa/evidence-review/application/evaluateContractResult.ts
index bd76df67..80234cff 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/application/evaluateContractResult.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/application/evaluateContractResult.ts
@@ -22,8 +22,8 @@ import { CLAIM_EVALUATION_SCHEMA_VERSION } from "../domain/claimEvaluationTypes"
 import {
   CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT,
   W3B_CONTRACT_RESULT_REVIEW_POLICY_REF,
-  isAttemptBoundSnapshotValid,
 } from "../domain/contractResultTypes";
+import { validateBoundExecutionContractSnapshot } from "@/lib/oa/execution-attempt/domain/boundExecutionContract";
 import type { ExecutionAttemptSnapshot } from "../domain/types";
 import type { Evidence } from "../domain/types";
 import type { ReviewBundle } from "../domain/reviewBundleTypes";
@@ -128,12 +128,20 @@ export class EvaluateContractResult {

       const snap = attempt.boundExecutionContract;
       // Historical Attempt without snapshot → durable NOT_PROVEN (not error).
-      // Corrupt/tampered snapshot → application error.
-      if (snap && !isAttemptBoundSnapshotValid(attempt)) {
-        return fail(
-          "CLAIM_EVALUATION_INVALID",
-          "bound_snapshot_corrupt_or_inconsistent",
-        );
+      // Corrupt/tampered/incoherent snapshot → application error via canonical validator.
+      if (snap) {
+        const snapshotValidation = validateBoundExecutionContractSnapshot({
+          attempt,
+          requirePresent: true,
+          expectedProjectId: contract.projectId,
+          expectedCycleInstanceId: contract.cycleInstanceId ?? null,
+        });
+        if (!snapshotValidation.ok) {
+          return fail(
+            "CLAIM_EVALUATION_INVALID",
+            snapshotValidation.reason,
+          );
+        }
       }

       if (evidence.bindings.executionAttemptId !== attempt.attemptId) {
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/domain/contractResultTypes.ts b/projects/sfia-studio/app/lib/oa/evidence-review/domain/contractResultTypes.ts
index d7994a9e..a86937e7 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/domain/contractResultTypes.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/domain/contractResultTypes.ts
@@ -9,7 +9,7 @@ import type {
   ClaimEvaluationMethod,
 } from "./claimEvaluationTypes";
 import type { ActorReference } from "@/lib/oa/doctrine";
-import { computeExecutionContractSemanticMaterialFingerprint } from "@/lib/oa/execution-contract";
+import { validateBoundExecutionContractSnapshot } from "@/lib/oa/execution-attempt/domain/boundExecutionContract";
 import type { ExecutionAttemptSnapshot } from "./types";

 export const CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT =
@@ -105,8 +105,14 @@ export function resolveContractResultConfirmationAuthority(
   return "authorized_human";
 }

+export type BoundSnapshotValidityExpectations = {
+  readonly expectedProjectId?: string;
+  readonly expectedCycleInstanceId?: string | null;
+};
+
 /**
- * TD-W3B-02 Option B — Attempt has a self-consistent bound snapshot.
+ * TD-W3B-02 Option B — Contract Result snapshot validity.
+ * Thin wrapper over canonical validateBoundExecutionContractSnapshot (requirePresent).
  * Does NOT consult latest ExecutionContract.
  */
 export function isAttemptBoundSnapshotValid(
@@ -117,29 +123,14 @@ export function isAttemptBoundSnapshotValid(
     | "executionContractSemanticFingerprint"
     | "boundExecutionContract"
   >,
+  expectations?: BoundSnapshotValidityExpectations,
 ): boolean {
-  const snap = attempt.boundExecutionContract;
-  if (!snap) return false;
-  if (
-    snap.semanticMaterial.executionContractId !== attempt.executionContractId
-  ) {
-    return false;
-  }
-  if (snap.executionContractVersion !== attempt.executionContractVersion) {
-    return false;
-  }
-  const attemptFp = (attempt.executionContractSemanticFingerprint ?? "").trim();
-  if (!attemptFp || attemptFp !== snap.semanticFingerprint) return false;
-  try {
-    const recomputed = computeExecutionContractSemanticMaterialFingerprint(
-      snap.semanticMaterial as Parameters<
-        typeof computeExecutionContractSemanticMaterialFingerprint
-      >[0],
-    );
-    return recomputed === snap.semanticFingerprint;
-  } catch {
-    return false;
-  }
+  return validateBoundExecutionContractSnapshot({
+    attempt,
+    requirePresent: true,
+    expectedProjectId: expectations?.expectedProjectId,
+    expectedCycleInstanceId: expectations?.expectedCycleInstanceId,
+  }).ok;
 }

 /**
@@ -193,17 +184,24 @@ export function contractResultBindingsMatchCurrentFacts(input: {
   cycleInstanceId?: string | null;
 }): boolean {
   const snap = input.attempt.boundExecutionContract;
-  if (!snap || !isAttemptBoundSnapshotValid(input.attempt)) return false;
-  const attemptFp = snap.semanticFingerprint;
-  const projectId =
-    input.projectId ?? snap.semanticMaterial.projectId;
-  const cycleInstanceId =
+  if (!snap) return false;
+  const expectedProjectId = input.projectId ?? input.bindings.projectId;
+  const expectedCycleInstanceId =
     input.cycleInstanceId !== undefined
       ? input.cycleInstanceId
-      : (snap.semanticMaterial.cycleInstanceId ?? null);
+      : (input.bindings.cycleInstanceId ?? null);
+  if (
+    !isAttemptBoundSnapshotValid(input.attempt, {
+      expectedProjectId,
+      expectedCycleInstanceId,
+    })
+  ) {
+    return false;
+  }
+  const attemptFp = snap.semanticFingerprint;

   if (
-    input.bindings.projectId !== projectId ||
+    input.bindings.projectId !== expectedProjectId ||
     input.bindings.executionContractId !== input.attempt.executionContractId ||
     input.bindings.executionContractVersion !==
       input.attempt.executionContractVersion ||
@@ -214,7 +212,10 @@ export function contractResultBindingsMatchCurrentFacts(input: {
   ) {
     return false;
   }
-  if ((input.bindings.cycleInstanceId ?? null) !== (cycleInstanceId ?? null)) {
+  if (
+    (input.bindings.cycleInstanceId ?? null) !==
+    (expectedCycleInstanceId ?? null)
+  ) {
     return false;
   }
   if (input.bindings.evidenceRefs.length !== input.evidenceIds.length) {
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/boundExecutionContract.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/boundExecutionContract.ts
index e64cfb2a..21157399 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/boundExecutionContract.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/boundExecutionContract.ts
@@ -60,7 +60,17 @@ export function validateBoundExecutionContractSnapshot(input: {
     executionContractId: string;
     executionContractVersion: number;
     executionContractSemanticFingerprint?: string;
-    boundExecutionContract?: BoundExecutionContractSnapshot;
+    boundExecutionContract?: {
+      executionContractSchemaVersion: string;
+      executionContractVersion: number;
+      semanticFingerprint: string;
+      semanticMaterial: ExecutionContractSemanticMaterial | {
+        executionContractId: string;
+        projectId: string;
+        cycleInstanceId?: string;
+        [key: string]: unknown;
+      };
+    };
   };
   requirePresent?: boolean;
   expectedProjectId?: string;
@@ -93,11 +103,14 @@ export function validateBoundExecutionContractSnapshot(input: {
   const attemptFp = (
     input.attempt.executionContractSemanticFingerprint ?? ""
   ).trim();
-  if (attemptFp && attemptFp !== snap.semanticFingerprint) {
+  // When a snapshot is present, Attempt fingerprint must match exactly.
+  if (!attemptFp || attemptFp !== snap.semanticFingerprint) {
     return { ok: false, reason: "bound_snapshot_attempt_fingerprint_mismatch" };
   }
   const recomputed =
-    computeExecutionContractSemanticMaterialFingerprint(snap.semanticMaterial);
+    computeExecutionContractSemanticMaterialFingerprint(
+      snap.semanticMaterial as ExecutionContractSemanticMaterial,
+    );
   if (recomputed !== snap.semanticFingerprint) {
     return { ok: false, reason: "bound_snapshot_fingerprint_corrupt" };
   }

```

---

## Validation evidence

| Gate | Result |
|---|---|
| OB01/OB02/OB03 targeted (optionBBoundSnapshot) | 35/35 PASS |
| Contract Result evaluation / correction / SQLite / adversarial | PASS |
| W3-B product terminal | PASS |
| SYSTEM_GOVERNED_STOP | PASS |
| W3-A governed execute | PASS |
| Import boundaries | PASS |
| Full Vitest | **2090 passed** / 131 skipped (219 files + 13 skipped) |
| `tsc --noEmit` | PASS |
| `next lint` | PASS (0 warnings/errors) |
| `npm run build` | PASS |
| Playwright `/studio` W3-B (SUCCESS / SYSTEM_GOVERNED_STOP / ADAPTER_FAIL) | **3/3 PASS** |

Captures: existing Option B / W3-B captures remain valid (behavior of product terminal surface unchanged by OB01–OB03; gates are Confirm/Evaluate internals). No new product knob.

---

## X-W3B requalification

Canonical exit IDs (stable across W3-B reviews). Prior published handoff `dd791f4a` mis-indexed X-02/X-04/X-05/X-06/X-07 labels; **proofs remapped only — no code change to `8c1f9b86`.**

| ID | Exit canonique | Verdict | Proof (existing; remapped) |
|---|---|---|---|
| X-W3B-01 | Honest semantic SUCCESS | PASS | W3-B product terminal + Playwright SUCCESS + Confirm uses real `attempt.status==succeeded` only (OB02) |
| X-W3B-02 | NOT_PROVEN fail-closed | PASS (NR) | Historical missing snapshot → durable NOT_PROVEN; no evaluator → NOT_PROVEN; corrupt snapshot → fail-closed (optionBBoundSnapshot) |
| X-W3B-03 | FAIL distinct | PASS (NR) | Playwright ADAPTER_FAIL + w3bProductTerminal adapter FAIL path |
| X-W3B-04 | SYSTEM_GOVERNED_STOP | PASS (NR) | `systemGovernedStop` suite + Playwright GOVERNED STOP |
| X-W3B-05 | Cancel / pre-running block distinctions | PASS (NR) | USER_CANCEL distinct from STOP; cancel suites + W3-A NR; Confirm refuses `cancelled` technical status (OB02) |
| X-W3B-06 | Evidence before claim / frozen RB | PASS (NR) | Frozen ReviewBundle exact binding at Confirm; OB03 frozen-snapshot incompatibility refuse; Evidence before claim C09 path |
| X-W3B-07 | Business-first UX | PASS (NR) | W3-B product terminal business-first projection + Playwright `/studio` SUCCESS/STOP/FAIL surfaces |
| X-W3B-08 | Restart honesty | PASS (NR) | Option B SQLite Attempt snapshot reload + product terminal TRUE RESTART rehydrate |
| X-W3B-09 | Exact EC identity | PASS | OB01 canonical schema/EC/version/fingerprint/project/cycle at Evaluate/Confirm/FC-11 |
| X-W3B-10 | Server ownership / review | PASS | Confirm real Attempt.status + W3-B fresh-only Evidence (OB02/OB03) + FC-12 authority unchanged |
| X-W3B-11 | Canonical `/studio` | PASS (NR) | Playwright `/studio` 3/3 (SUCCESS / SYSTEM_GOVERNED_STOP / ADAPTER_FAIL) |
| X-W3B-12 | No parallel architecture | PASS | Single validator reuse; no EC history repo; no latest-EC; Option B preserved |

Even with X-01…12 PASS: **W3-B remains NOT CLOSED**.

---

## Architecture parallelism proof

- One snapshot validator ownership: `boundExecutionContract.validateBoundExecutionContractSnapshot`
- Wrapper only: `isAttemptBoundSnapshotValid`
- No EC history repository
- No latest-EC semantic matching / auto-migrate / cross-version substitution
- No new Claim/Evidence/Stop/Guard architecture
- Generic structural ClaimEvaluation Morris gate unchanged (test 20)

## Fake / Real

- Fake/fixture adapters for governed execute + Playwright boundary knobs only
- REAL OUT — no real external execution adoption this cycle

## Debt / reserves

- `inferAttemptStatusFromContractResultAssessments` still exported unused (out-of-scope cleanup deferred)
- W3-B NOT CLOSED pending ChatGPT re-review of handoff X-matrix remap + distinct Morris Git integration decision
- W3-C/D/E NOT STARTED; REAL OUT; FinOps FREEZE; W4 OUT; runtime v3 NON ADOPTED

## Git state / publish constraints

- Project candidate frozen at `8c1f9b86` (REVIEW-CLEAN per ChatGPT; **no new project commit**)
- This republication is **handoff / Review Pack only** (X-matrix identity remap)
- **No project push / PR / merge**
- Review Handoff via `scripts/sfia/publish-review-handoff.sh` only

## Verdict

**READY FOR REVIEW** — code `8c1f9b86` REVIEW-CLEAN (OB01–OB03 PASS); handoff X-W3B-01…12 remapped to canonical exit IDs; awaiting ChatGPT re-review limitée à la matrice X puis Morris Git integration decision.

Next gate: ChatGPT re-review ciblée de la matrice X-W3B (handoff only) → Morris Git integration decision.


## Post-commit Git

| Field | Value |
|---|---|
| Correction HEAD | `8c1f9b863a36391131b01ffd81a673d0105c1122` |
| Parent | `66427eaf3ea74388b61c73e738f4b4df7b9a983a` |
| Message | `fix(sfia-studio): close W3-B Option B review gaps` |
| Files | 5 (exact staging) |
| Project push | NO |
| Project PR | NO |
| Project merge | NO |
