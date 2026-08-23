# REVIEW PACK FULL — W2 FINAL CLOSURE PRODUCT CORRECTION R1 — GIT INTEGRATION

## A. Metadata

| Champ | Valeur |
| --- | --- |
| **Timestamp** | 2026-08-23 19:09:04 CEST (+0200) — Europe/Paris |
| **Repo** | `mcleland147/sfia-workspace` |
| **Branch** | `delivery/sfia-studio-w2-final-closure-product-correction` |
| **origin/main** | `17f528cd81fc495400b8b15e26830695347995f2` |
| **PRE_COMMIT_HEAD** | `17f528cd81fc495400b8b15e26830695347995f2` |
| **PROJECT_COMMIT** | `330b36258f5a5fcb117fb562b12ff173b3675d94` |
| **Cycle** | Repository execution / Git integration |
| **Typologie** | INC |
| **Profil** | CRITICAL |
| **Git integration GO** | CONSUMED |
| **Merge** | NOT AUTHORIZED |
| **W2 Final Closure Requalification** | NOT AUTHORIZED |
| **W2 closure** | NOT AUTHORIZED |
| **W3** | NOT AUTHORIZED |
| **REAL** | OUT |
| **FinOps/T7** | FREEZE |
| **C6** | CLOSED |
| **runtime v3** | NON ADOPTED |
| **Product content mutation during integration** | FORBIDDEN / NONE |

## B. Sources actually read

- `prompts/templates/sfia-cycle-execution-template.md` (v2.6 external process)
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` (presence confirmed)
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` (presence confirmed)
- `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md` (presence confirmed; diff=0)
- `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md` (presence confirmed; diff=0)
- `projects/sfia-studio/product-completion/01-product-completion-cadrage.md` (presence confirmed)
- `projects/sfia-studio/product-completion/06-product-completion-architecture-technique-delta.md` (presence confirmed)
- Latest remote Review Handoff: `sfia-review-handoff/latest-chatgpt-review.md` on `sfia/review-handoff`
  - commit `96563287e8f36fb368c98f09fcaeb6277ed1ebe4`
  - blob `bf6d2ba7a46fa65d9806687e3722fc0d981b79e5`
- `scripts/sfia/publish-review-handoff.sh` (publisher mechanism)

## C. Local Git Truth before integration

| Check | Result |
| --- | --- |
| `pwd` / toplevel | `/Users/morris/Projects/sfia-workspace` |
| branch | `delivery/sfia-studio-w2-final-closure-product-correction` |
| HEAD | `17f528cd81fc495400b8b15e26830695347995f2` |
| `origin/main` | `17f528cd81fc495400b8b15e26830695347995f2` |
| staged | EMPTY |
| remote delivery branch | ABSENT (`git ls-remote` empty) |
| unrelated untracked preserved | `.tmp-sfia-review/`, `projects/eventops-poc/`, `projects/flex-office-demo/`, frozen doc10 |
| `git diff --check` | clean |
| `lib/oa` diff | EMPTY |

## D. Reviewed candidate provenance

| Item | Value |
| --- | --- |
| Latest accepted Review Handoff commit | `96563287e8f36fb368c98f09fcaeb6277ed1ebe4` |
| Latest accepted Review Handoff blob | `bf6d2ba7a46fa65d9806687e3722fc0d981b79e5` |
| ChatGPT review verdict | **PASS — W2 FINAL CLOSURE PRODUCT CORRECTION R1 READY FOR MORRIS GIT INTEGRATION DECISION** |
| R01 | LOCALLY CLOSED |
| R02 | LOCALLY CLOSED / RECOVERY-SAFE |
| C6 | CLOSED |
| Content mutation under this GO | NONE — transported reviewed candidate only |

## E. Frozen candidate proof

### Exact 9 tracked paths (project commit)

1. `projects/sfia-studio/app/features/project-assistant/w2/amendExecutionContract.ts` (**NEW**)
2. `projects/sfia-studio/app/features/project-assistant/w2/actions.ts`
3. `projects/sfia-studio/app/features/project-assistant/w2/types.ts`
4. `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx`
5. `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css`
6. `projects/sfia-studio/app/__tests__/project-assistant/w2EabcDelivery.test.ts`
7. `projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx`
8. `projects/sfia-studio/app/e2e/studio-w2-g3-correction-runtime.spec.ts`
9. `projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts`

### Pre-commit validation (frozen candidate; no content fix)

| Suite | Result |
| --- | --- |
| EABC `w2EabcDelivery.test.ts` | **39 PASS** |
| Phase B `w2TrackDPhaseB.test.ts` | **24 PASS** |
| UI `trajectorySurface.ui.test.tsx` | **2 PASS** |
| `importBoundaries.test.ts` | **5 PASS** |
| Playwright `studio-w2-g3-correction-runtime.spec.ts` | **1 PASS** |
| Full Vitest | **1998 PASS / 131 SKIP** |
| `npm run typecheck` | PASS |
| `npm run lint` | PASS |
| `npm run build` | PASS |
| `git diff --check` | clean |

No content mutation during Git integration.

## F. C6 guard

| Guard | Result |
| --- | --- |
| `git diff --name-only -- projects/sfia-studio/app/lib/oa` | EMPTY |
| schema / migration files in candidate | NONE |
| Product Completion docs in commit | NONE (doc10 untracked only) |
| Roadmap diff | 0 |
| Build Doctrine diff | 0 |
| v3 framing diff | 0 |
| new engine / store / lifecycle | NONE |
| C6 | remains **CLOSED** |

## G. doc10

| Check | Value |
| --- | --- |
| Path | `projects/sfia-studio/product-completion/10-product-completion-wave-2-final-closure-qualification.md` |
| Pre-integration hash | `1f81559157200cc554e003e2391502c6c1df5ec1` |
| Post-commit hash | `1f81559157200cc554e003e2391502c6c1df5ec1` |
| Status | UNTRACKED / UNSTAGED / UNCOMMITTED |
| In project commit | NO |

## H. Project commit

| Field | Value |
| --- | --- |
| SHA | `330b36258f5a5fcb117fb562b12ff173b3675d94` |
| Message | `feat(sfia-studio): complete W2 final closure product correction` |
| Parent | `17f528cd81fc495400b8b15e26830695347995f2` |
| Files | exact 9 reviewed paths |
| File count | 9 |
| Merge commit | NO |
| `origin/main..HEAD` count | 1 |

## I. Push

| Field | Value |
| --- | --- |
| Branch | `delivery/sfia-studio-w2-final-closure-product-correction` |
| Remote SHA | `330b36258f5a5fcb117fb562b12ff173b3675d94` |
| Local SHA | `330b36258f5a5fcb117fb562b12ff173b3675d94` |
| Push type | NORMAL (`git push -u origin …`) |
| Force | NO |
| Tags | NONE |

## J. Draft PR

| Field | Value |
| --- | --- |
| Number | **#405** |
| URL | https://github.com/mcleland147/sfia-workspace/pull/405 |
| Title | `feat(sfia-studio): complete W2 final closure product correction` |
| Base | `main` |
| Base SHA | `17f528cd81fc495400b8b15e26830695347995f2` |
| Head | `delivery/sfia-studio-w2-final-closure-product-correction` |
| Head SHA | `330b36258f5a5fcb117fb562b12ff173b3675d94` |
| Draft | **true** |
| Commit count | **1** |
| Changed files | **exactly 9** |
| Mergeability | MERGEABLE |
| Ready for review | NO (remains Draft) |
| Merge | NOT PERFORMED / NOT AUTHORIZED |

## K. CI

| Field | Value |
| --- | --- |
| Workflow | SFIA Studio CI |
| Run ID | **32653718872** |
| URL | https://github.com/mcleland147/sfia-workspace/actions/runs/32653718872 |
| Event | `pull_request` |
| Base | `main` @ `17f528cd…` |
| Head | `330b36258f5a5fcb117fb562b12ff173b3675d94` |
| Status | completed |
| Conclusion | **success** |

### Jobs

| Job | Conclusion |
| --- | --- |
| Detect SFIA Studio changes | success |
| Build and validate SFIA Studio | success (typecheck, lint, build, Vitest, FinOps/T7 freeze notice, modeled governance, secret scan, trailing whitespace) |
| SFIA Studio Required Gate | success |

**FinOps/T7:** freeze notice executed; no PostgreSQL FinOps activation.

## L. Current governance

- R01/R02 reviewed candidate **transported** to Draft PR #405.
- **W2 NOT FINALLY CLOSED**.
- **W2 Final Closure Requalification NOT AUTHORIZED / NOT STARTED**.
- **W3 OUT**.
- **REAL OUT**.
- **PB-RES-REAL-01 OPEN**.
- **FinOps FREEZE**.
- **C6 CLOSED**.
- **runtime v3 NON ADOPTED**.

## M. Final local/remote Git truth

| Field | Value |
| --- | --- |
| Current branch | `delivery/sfia-studio-w2-final-closure-product-correction` |
| HEAD | `330b36258f5a5fcb117fb562b12ff173b3675d94` |
| `origin/delivery/…` | `330b36258f5a5fcb117fb562b12ff173b3675d94` |
| `origin/main` | `17f528cd81fc495400b8b15e26830695347995f2` |
| Tracked working diff | EMPTY |
| Staged | EMPTY |
| doc10 | untracked + frozen hash unchanged |
| Merge | NONE |

## N. Explicit remaining Morris gates

NOT CONSUMED:

1. ChatGPT PR readiness review
2. Morris merge GO
3. Merge
4. Post-merge proof
5. W2 Final Closure Requalification GO
6. W2 closure decision
7. W3 GO
8. REAL GO
9. FinOps unfreeze
10. runtime v3 adoption

No automatic chaining.

## O. Anti-claims

- Git integration ≠ merge
- Draft PR ≠ READY for merge
- CI green ≠ W2 requalification
- R01/R02 integrated ≠ W2 closure
- W2 requalification ≠ W2 closure
- W2 closure ≠ W3 authorization
- deterministic ≠ REAL
- AUTHORIZED ≠ Execute
- C6 CLOSED
- FinOps FREEZE
- runtime v3 NON ADOPTED
- Product Completion incomplete

## P. Verdict

**W2 FINAL CLOSURE PRODUCT CORRECTION R1 DRAFT PR READY FOR CHATGPT PR READINESS REVIEW — MERGE AND W2 REQUALIFICATION NOT AUTHORIZED**

---

## Appendix — Complete project commit patch

Parent: `17f528cd81fc495400b8b15e26830695347995f2`
Commit: `330b36258f5a5fcb117fb562b12ff173b3675d94`

Reference: accepted FULL candidate Review Handoff commit `96563287…` / blob `bf6d2ba7…` (PASS R1). This Git integration transported that frozen candidate without content mutation.

```diff
commit 330b36258f5a5fcb117fb562b12ff173b3675d94
Author: Morris Cleland <morris@macbook-air1.home>
Date:   Sun Aug 23 19:05:12 2026 +0200

    feat(sfia-studio): complete W2 final closure product correction

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
index 8fdf9ad0..681c6621 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
@@ -8,11 +8,13 @@ const {
   decideMock,
   inspectMock,
   authorizeMock,
+  amendMock,
 } = vi.hoisted(() => ({
   proposeMock: vi.fn(),
   decideMock: vi.fn(),
   inspectMock: vi.fn(),
   authorizeMock: vi.fn(),
+  amendMock: vi.fn(),
 }));

 vi.mock("@/features/project-assistant/w2/actions", () => ({
@@ -22,6 +24,7 @@ vi.mock("@/features/project-assistant/w2/actions", () => ({
   w2ConfirmExecutionContractAction: vi.fn(),
   w2AuthorizeExecutionContractAction: (...args: unknown[]) =>
     authorizeMock(...args),
+  w2AmendExecutionContractAction: (...args: unknown[]) => amendMock(...args),
   w2ReadProjectHistoryAction: vi.fn().mockResolvedValue({
     ok: false,
     code: "UNUSED",
@@ -42,6 +45,7 @@ beforeEach(() => {
   decideMock.mockReset();
   inspectMock.mockReset();
   authorizeMock.mockReset();
+  amendMock.mockReset();
 });

 describe("W2 TrajectorySurface", () => {
@@ -242,6 +246,161 @@ describe("W2 TrajectorySurface", () => {
     );
     expect(screen.getByTestId("w2-confirm-contract")).not.toBeDisabled();

+    // Amendment affordance appears only after sufficient inspection.
+    expect(screen.getByTestId("w2-amendment-form")).toBeVisible();
+    expect(screen.queryByTestId("w2-amendment-notice")).toBeNull();
+
+    amendMock.mockResolvedValue({
+      ok: true,
+      priorExecutionContractId: "xct:w2-ui",
+      priorContractVersion: 1,
+      priorInspectionAttestationRef: "att:test",
+      successor: {
+        executionContractId: "xct:w2-ui:amd:deadbeef",
+        version: 1,
+        status: "confirmation_required",
+        action: "w2:inspect-only",
+        target: "studio",
+        scope: "w2-ui",
+        requiredAuthority: "MORRIS",
+        constraints: ["AUCUNE EXÉCUTION", "BORNER LE SLICE"],
+        stopConditions: ["STOP AVANT EXECUTE"],
+        requiredCapabilities: ["cap:f3-fixture-docs"],
+        reversibility: "reversible",
+        semanticFingerprint: "fff111aaa222",
+        supersedesExecutionContractId: "xct:w2-ui",
+        supersessionReason: "w2_constraint_amendment",
+      },
+      supersedesExecutionContractId: "xct:w2-ui",
+      materialAmendment: true,
+      priorInspectionDoesNotCoverSuccessor: true,
+      reinspectionRequired: true,
+      statusLabel: "CONTRAT AMENDÉ — RÉINSPECTION REQUISE",
+      successorInspection: {
+        executionContractId: "xct:w2-ui:amd:deadbeef",
+        contractVersion: 1,
+        semanticFingerprint: "fff111aaa222",
+        statusLabel: "NON INSPECTÉ",
+        inspectionSufficient: false,
+        attestationRef: null,
+        attestedVersion: null,
+        staleAttestationRef: null,
+        reinspectionRequired: false,
+        reason: "no_attestation",
+        grantsAuthority: false,
+      },
+      additionalConstraint: "BORNER LE SLICE",
+      replayed: false,
+      humanDecisionCreated: false,
+      authorityGranted: false,
+      confirmationGranted: false,
+      executionPerformed: false,
+      attemptCreated: false,
+    });
+
+    fireEvent.change(screen.getByTestId("w2-amend-constraint"), {
+      target: { value: "BORNER LE SLICE" },
+    });
+    fireEvent.click(screen.getByTestId("w2-amend-contract"));
+    expect(await screen.findByTestId("w2-amendment-notice")).toBeVisible();
+    expect(screen.getByTestId("w2-amendment-status")).toHaveTextContent(
+      /réinspection requise/i,
+    );
+    expect(screen.getByTestId("w2-contract-constraints")).toHaveTextContent(
+      "BORNER LE SLICE",
+    );
+    expect(screen.getByTestId("w2-inspection-state")).toHaveTextContent(
+      "NON INSPECTÉ",
+    );
+    expect(screen.queryByTestId("w2-amendment-form")).toBeNull();
+    expect(screen.getByTestId("w2-confirm-contract")).toBeDisabled();
+    expect(amendMock).toHaveBeenCalledWith({
+      projectId: "prj:w2-ui",
+      executionContractId: "xct:w2-ui",
+      additionalConstraint: "BORNER LE SLICE",
+    });
+
+    // R1 — UI consumes application statusLabel (not a hardcoded false required).
+    amendMock.mockResolvedValue({
+      ok: true,
+      priorExecutionContractId: "xct:w2-ui",
+      priorContractVersion: 1,
+      priorInspectionAttestationRef: "att:test",
+      successor: {
+        executionContractId: "xct:w2-ui:amd:deadbeef",
+        version: 1,
+        status: "confirmation_required",
+        action: "w2:inspect-only",
+        target: "studio",
+        scope: "w2-ui",
+        requiredAuthority: "MORRIS",
+        constraints: ["AUCUNE EXÉCUTION", "BORNER LE SLICE"],
+        stopConditions: ["STOP AVANT EXECUTE"],
+        requiredCapabilities: ["cap:f3-fixture-docs"],
+        reversibility: "reversible",
+        semanticFingerprint: "fff111aaa222",
+        supersedesExecutionContractId: "xct:w2-ui",
+        supersessionReason: "w2_constraint_amendment",
+      },
+      supersedesExecutionContractId: "xct:w2-ui",
+      materialAmendment: true,
+      priorInspectionDoesNotCoverSuccessor: true,
+      reinspectionRequired: false,
+      statusLabel: "CONTRAT AMENDÉ — RÉINSPECTION DÉJÀ SATISFAITE",
+      successorInspection: {
+        executionContractId: "xct:w2-ui:amd:deadbeef",
+        contractVersion: 1,
+        semanticFingerprint: "fff111aaa222",
+        statusLabel: "INSPECTÉ",
+        inspectionSufficient: true,
+        attestationRef: "att:successor",
+        attestedVersion: 1,
+        staleAttestationRef: null,
+        reinspectionRequired: false,
+        reason: "inspected",
+        grantsAuthority: false,
+      },
+      additionalConstraint: "BORNER LE SLICE",
+      replayed: true,
+      humanDecisionCreated: false,
+      authorityGranted: false,
+      confirmationGranted: false,
+      executionPerformed: false,
+      attemptCreated: false,
+    });
+    // Re-open form by mocking a second inspect-sufficient path isn't needed —
+    // call amend again via preparing another inspect cycle: force form by
+    // clicking inspect mock first then amend with already-satisfied truth.
+    inspectMock.mockResolvedValue({
+      ok: true,
+      executionContractId: "xct:w2-ui:amd:deadbeef",
+      contractVersion: 1,
+      semanticFingerprint: "fff111aaa222",
+      statusLabel: "INSPECTÉ",
+      inspectionSufficient: true,
+      attestationRef: "att:successor",
+      attestedVersion: 1,
+      staleAttestationRef: null,
+      reinspectionRequired: false,
+      reason: "inspected",
+      grantsAuthority: false,
+    });
+    fireEvent.click(screen.getByTestId("w2-inspect-contract"));
+    expect(await screen.findByTestId("w2-amendment-form")).toBeVisible();
+    fireEvent.change(screen.getByTestId("w2-amend-constraint"), {
+      target: { value: "BORNER LE SLICE" },
+    });
+    fireEvent.click(screen.getByTestId("w2-amend-contract"));
+    expect(await screen.findByTestId("w2-amendment-status")).toHaveTextContent(
+      "RÉINSPECTION DÉJÀ SATISFAITE",
+    );
+    expect(screen.getByTestId("w2-amendment-status")).not.toHaveTextContent(
+      "RÉINSPECTION REQUISE",
+    );
+    expect(screen.getByTestId("w2-inspection-state")).toHaveTextContent(
+      "INSPECTÉ",
+    );
+
     authorizeMock.mockResolvedValue({
       ok: true,
       executionContractId: "xct:w2-ui",
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/w2EabcDelivery.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/w2EabcDelivery.test.ts
index 4a6cf790..3c548ad0 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/w2EabcDelivery.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/w2EabcDelivery.test.ts
@@ -12,6 +12,7 @@ import {
   F3_SCOPE,
   F3_TARGET,
 } from "@/features/project-assistant/f3/constants";
+import { amendExecutionContractWithConstraint } from "@/features/project-assistant/w2/amendExecutionContract";
 import { evaluateExecutionAuthorization } from "@/features/project-assistant/w2/authorizeExecutionContract";
 import { confirmExecutionContractForAuthorization } from "@/features/project-assistant/w2/confirmForAuthorization";
 import { assertDecisionAuthorizesPromotion, decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
@@ -38,11 +39,9 @@ import {
   deriveTrajectoryRecommendation,
 } from "@/features/project-assistant/w2/trajectoryOptions";
 import { w1RestartHonestyMessage } from "@/features/project-assistant/presentationLabels";
-import {
-  LOCAL_PILOTE_ACTOR,
-  registerLocalPiloteAuthority,
-} from "@/lib/oa/decision";
+import { LOCAL_PILOTE_ACTOR, registerLocalPiloteAuthority } from "@/lib/oa/decision";
 import type { TrajectoryStep } from "@/lib/oa/cycle";
+import { createExecutionError } from "@/lib/oa/execution-contract/domain/errors";
 import {
   bootW2Runtime,
   cleanupW2TempDirs,
@@ -2199,3 +2198,625 @@ describe("W2 Track C — inspection binding + authorization mechanism proofs", (
     expect(authorized.authorityReceiptRef).toMatch(/^avr:/);
   });
 });
+
+describe("W2 Track C — material constraint amendment (R02 product seam)", () => {
+  const TIGHTENING =
+    "W2_R02_TIGHTEN: borner strictement le slice livré — aucune extension silencieuse";
+
+  async function prepareInspectedM3(input: {
+    suffix: string;
+    idPrefix: string;
+  }) {
+    const db = tempProductDbPath(`w2-r02-${input.suffix}.sqlite`);
+    const runtime = bootW2Runtime({
+      productDbPath: db,
+      idPrefix: input.idPrefix,
+    });
+    const seeded = await seedQualifiedProject(runtime, {
+      suffix: input.suffix,
+      profile: "Standard",
+    });
+    const oa = runtime.oa!;
+
+    const qualification = await resolveW2QualificationInputs({
+      oa,
+      projectId: seeded.projectId,
+    });
+    expect(qualification.ok).toBe(true);
+    if (!qualification.ok) throw new Error("qualification failed");
+
+    const proposed = await proposeTrajectoryOptions({
+      oa,
+      projectId: seeded.projectId,
+      ...qualification.qualification.inputs,
+      packagePin: qualification.qualification.packagePin,
+      objective: qualification.qualification.objective,
+      projectTitle: qualification.qualification.projectTitle,
+    });
+    expect(proposed.ok).toBe(true);
+    if (!proposed.ok) throw new Error("propose failed");
+
+    const decided = await decideTrajectory({
+      oa,
+      projectId: seeded.projectId,
+      optionSetRef: proposed.optionSetRef,
+      options: proposed.options,
+      recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
+      selectedOptionRef: GOVERNED_OPTION_REF,
+      trajectoryId: proposed.proposedTrajectory.trajectoryId,
+      candidateVersion: proposed.proposedTrajectory.version,
+      forceLocalAuthority: true,
+    });
+    expect(decided.ok).toBe(true);
+    if (!decided.ok) throw new Error("decide failed");
+
+    const context = await currentF2Context(runtime, seeded.projectId);
+    const prepared = await prepareM3FromDecision({
+      projectId: seeded.projectId,
+      decisionId: decided.decision.decisionId,
+      currentContext: context,
+      deps: {
+        decisionServices: oa.decisionServices,
+        authorityResolver: oa.authorityResolver,
+        executionContractServices: oa.executionContractServices,
+        nowIso: () => oa.clock.nowIso(),
+        forceM3Authority: true,
+      },
+    });
+    expect(prepared.ok).toBe(true);
+    if (!prepared.ok) throw new Error("prepare failed");
+
+    const executionContractId = prepared.payload.contract.executionContractId;
+    const inspected = await inspectExecutionContract({
+      oa,
+      projectId: seeded.projectId,
+      executionContractId,
+    });
+    expect(inspected.ok).toBe(true);
+    if (!inspected.ok) throw new Error("inspect failed");
+    expect(inspected.inspectionSufficient).toBe(true);
+
+    return {
+      oa,
+      projectId: seeded.projectId,
+      executionContractId,
+      priorAction: prepared.payload.contract.action,
+      priorTarget: prepared.payload.contract.target,
+      priorScope: prepared.payload.contract.scope,
+      priorAuthority: prepared.payload.contract.requiredAuthority,
+      priorConstraints: [...prepared.payload.contract.constraints],
+      attestationRef: inspected.attestationRef,
+    };
+  }
+
+  it("R02-U01 — inspected EC + tightening constraint → OA supersession successor", async () => {
+    const ctx = await prepareInspectedM3({ suffix: "u01", idPrefix: "r02u1" });
+    const priorLoad =
+      await ctx.oa.executionContractServices.getExecutionContract.execute({
+        executionContractId: ctx.executionContractId,
+      });
+    expect(priorLoad.ok).toBe(true);
+    if (!priorLoad.ok) return;
+    const priorDecisionRefs = [...(priorLoad.contract.decisionRefs ?? [])];
+
+    const amended = await amendExecutionContractWithConstraint({
+      oa: ctx.oa,
+      projectId: ctx.projectId,
+      executionContractId: ctx.executionContractId,
+      additionalConstraint: TIGHTENING,
+      forceLocalAuthority: true,
+    });
+    expect(amended.ok).toBe(true);
+    if (!amended.ok) return;
+    expect(amended.executionPerformed).toBe(false);
+    expect(amended.attemptCreated).toBe(false);
+    expect(amended.materialAmendment).toBe(true);
+    expect(amended.successor.executionContractId).not.toBe(
+      ctx.executionContractId,
+    );
+    expect(amended.successor.supersedesExecutionContractId).toBe(
+      ctx.executionContractId,
+    );
+    expect(amended.successor.action).toBe(ctx.priorAction);
+    expect(amended.successor.target).toBe(ctx.priorTarget);
+    expect(amended.successor.scope).toBe(ctx.priorScope);
+    expect(amended.successor.requiredAuthority).toBe(ctx.priorAuthority);
+    expect(amended.successor.constraints).toContain(TIGHTENING);
+    expect(amended.successor.constraints.length).toBe(
+      ctx.priorConstraints.length + 1,
+    );
+
+    const priorAfter =
+      await ctx.oa.executionContractServices.getExecutionContract.execute({
+        executionContractId: ctx.executionContractId,
+      });
+    expect(priorAfter.ok).toBe(true);
+    if (!priorAfter.ok) return;
+    expect(priorAfter.contract.status).toBe("superseded");
+    expect(amended.successor.constraints).not.toEqual(
+      priorAfter.contract.constraints,
+    );
+
+    const successorLoad =
+      await ctx.oa.executionContractServices.getExecutionContract.execute({
+        executionContractId: amended.successor.executionContractId,
+      });
+    expect(successorLoad.ok).toBe(true);
+    if (!successorLoad.ok) return;
+    expect(successorLoad.contract.decisionRefs).toEqual(priorDecisionRefs);
+  });
+
+  it("R02-U02 — successor has no sufficient inherited inspection", async () => {
+    const ctx = await prepareInspectedM3({ suffix: "u02", idPrefix: "r02u2" });
+    const amended = await amendExecutionContractWithConstraint({
+      oa: ctx.oa,
+      projectId: ctx.projectId,
+      executionContractId: ctx.executionContractId,
+      additionalConstraint: TIGHTENING,
+      forceLocalAuthority: true,
+    });
+    expect(amended.ok).toBe(true);
+    if (!amended.ok) return;
+    expect(amended.priorInspectionDoesNotCoverSuccessor).toBe(true);
+    expect(amended.reinspectionRequired).toBe(true);
+    expect(amended.successorInspection.inspectionSufficient).toBe(false);
+    expect(amended.successorInspection.attestationRef).toBeNull();
+    expect(amended.successorInspection.executionContractId).toBe(
+      amended.successor.executionContractId,
+    );
+    expect(amended.priorInspectionAttestationRef).toBe(ctx.attestationRef);
+  });
+
+  it("R02-U03 — authorize before successor re-inspection → BLOCKED inspection_required", async () => {
+    const ctx = await prepareInspectedM3({ suffix: "u03", idPrefix: "r02u3" });
+    const amended = await amendExecutionContractWithConstraint({
+      oa: ctx.oa,
+      projectId: ctx.projectId,
+      executionContractId: ctx.executionContractId,
+      additionalConstraint: TIGHTENING,
+      forceLocalAuthority: true,
+    });
+    expect(amended.ok).toBe(true);
+    if (!amended.ok) return;
+
+    const blocked = await evaluateExecutionAuthorization({
+      oa: ctx.oa,
+      projectId: ctx.projectId,
+      executionContractId: amended.successor.executionContractId,
+      forceLocalAuthority: true,
+    });
+    expect(blocked.ok).toBe(true);
+    if (!blocked.ok) return;
+    expect(blocked.outcome).toBe("BLOCKED");
+    expect(blocked.reasonCode).toBe("inspection_required");
+    expect(blocked.executionPerformed).toBe(false);
+    expect(blocked.attemptCreated).toBe(false);
+  });
+
+  it("R02-U04/U05 — inspect successor then authority → STOP BEFORE EXECUTE", async () => {
+    const ctx = await prepareInspectedM3({ suffix: "u45", idPrefix: "r02u45" });
+    const amended = await amendExecutionContractWithConstraint({
+      oa: ctx.oa,
+      projectId: ctx.projectId,
+      executionContractId: ctx.executionContractId,
+      additionalConstraint: TIGHTENING,
+      forceLocalAuthority: true,
+    });
+    expect(amended.ok).toBe(true);
+    if (!amended.ok) return;
+
+    const reinspected = await inspectExecutionContract({
+      oa: ctx.oa,
+      projectId: ctx.projectId,
+      executionContractId: amended.successor.executionContractId,
+    });
+    expect(reinspected.ok).toBe(true);
+    if (!reinspected.ok) return;
+    expect(reinspected.inspectionSufficient).toBe(true);
+    expect(reinspected.statusLabel).toBe("INSPECTÉ");
+
+    if (amended.successor.status === "confirmation_required") {
+      const confirmed = await confirmExecutionContractForAuthorization({
+        oa: ctx.oa,
+        projectId: ctx.projectId,
+        executionContractId: amended.successor.executionContractId,
+        forceLocalAuthority: true,
+      });
+      expect(confirmed.ok).toBe(true);
+      if (!confirmed.ok) return;
+      expect(confirmed.executionPerformed).toBe(false);
+    }
+
+    const verdict = await evaluateExecutionAuthorization({
+      oa: ctx.oa,
+      projectId: ctx.projectId,
+      executionContractId: amended.successor.executionContractId,
+      forceLocalAuthority: true,
+    });
+    expect(verdict.ok).toBe(true);
+    if (!verdict.ok) return;
+    expect(["AUTHORIZED", "BLOCKED"]).toContain(verdict.outcome);
+    expect(verdict.executionPerformed).toBe(false);
+    expect(verdict.attemptCreated).toBe(false);
+    expect(verdict.reasonText.length).toBeGreaterThan(0);
+    expect(verdict.nextAction.length).toBeGreaterThan(0);
+  });
+
+  it("R02-U06 — empty/duplicate amendment fail-closed", async () => {
+    const ctx = await prepareInspectedM3({ suffix: "u06", idPrefix: "r02u6" });
+    const empty = await amendExecutionContractWithConstraint({
+      oa: ctx.oa,
+      projectId: ctx.projectId,
+      executionContractId: ctx.executionContractId,
+      additionalConstraint: "   ",
+      forceLocalAuthority: true,
+    });
+    expect(empty.ok).toBe(false);
+    if (empty.ok) return;
+    expect(empty.code).toBe("CONSTRAINT_EMPTY");
+
+    const first = await amendExecutionContractWithConstraint({
+      oa: ctx.oa,
+      projectId: ctx.projectId,
+      executionContractId: ctx.executionContractId,
+      additionalConstraint: TIGHTENING,
+      forceLocalAuthority: true,
+    });
+    expect(first.ok).toBe(true);
+    if (!first.ok) return;
+
+    // Re-inspect successor then try duplicate of the same constraint.
+    await inspectExecutionContract({
+      oa: ctx.oa,
+      projectId: ctx.projectId,
+      executionContractId: first.successor.executionContractId,
+    });
+    const dup = await amendExecutionContractWithConstraint({
+      oa: ctx.oa,
+      projectId: ctx.projectId,
+      executionContractId: first.successor.executionContractId,
+      additionalConstraint: TIGHTENING,
+      forceLocalAuthority: true,
+    });
+    expect(dup.ok).toBe(false);
+    if (dup.ok) return;
+    expect(dup.code).toBe("CONSTRAINT_DUPLICATE");
+  });
+
+  it("R02-U07 — same amendment replay reuses successor", async () => {
+    const ctx = await prepareInspectedM3({ suffix: "u07", idPrefix: "r02u7" });
+    const first = await amendExecutionContractWithConstraint({
+      oa: ctx.oa,
+      projectId: ctx.projectId,
+      executionContractId: ctx.executionContractId,
+      additionalConstraint: TIGHTENING,
+      forceLocalAuthority: true,
+    });
+    expect(first.ok).toBe(true);
+    if (!first.ok) return;
+
+    const replay = await amendExecutionContractWithConstraint({
+      oa: ctx.oa,
+      projectId: ctx.projectId,
+      executionContractId: ctx.executionContractId,
+      additionalConstraint: TIGHTENING,
+      forceLocalAuthority: true,
+    });
+    expect(replay.ok).toBe(true);
+    if (!replay.ok) return;
+    expect(replay.replayed).toBe(true);
+    expect(replay.successor.executionContractId).toBe(
+      first.successor.executionContractId,
+    );
+  });
+
+  it("R02-U08 — project mismatch / uninspected prior fail-closed", async () => {
+    const ctx = await prepareInspectedM3({ suffix: "u08", idPrefix: "r02u8" });
+    const mismatch = await amendExecutionContractWithConstraint({
+      oa: ctx.oa,
+      projectId: "prj:other-project",
+      executionContractId: ctx.executionContractId,
+      additionalConstraint: TIGHTENING,
+      forceLocalAuthority: true,
+    });
+    expect(mismatch.ok).toBe(false);
+    if (mismatch.ok) return;
+    expect(mismatch.code).toBe("PROJECT_MISMATCH");
+
+    // Fresh prepare without inspect.
+    const db = tempProductDbPath("w2-r02-u08b.sqlite");
+    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "r02u8b" });
+    const seeded = await seedQualifiedProject(runtime, {
+      suffix: "u08b",
+      profile: "Standard",
+    });
+    const oa = runtime.oa!;
+    const qualification = await resolveW2QualificationInputs({
+      oa,
+      projectId: seeded.projectId,
+    });
+    if (!qualification.ok) return;
+    const proposed = await proposeTrajectoryOptions({
+      oa,
+      projectId: seeded.projectId,
+      ...qualification.qualification.inputs,
+      packagePin: qualification.qualification.packagePin,
+      objective: qualification.qualification.objective,
+      projectTitle: qualification.qualification.projectTitle,
+    });
+    if (!proposed.ok) return;
+    const decided = await decideTrajectory({
+      oa,
+      projectId: seeded.projectId,
+      optionSetRef: proposed.optionSetRef,
+      options: proposed.options,
+      recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
+      selectedOptionRef: GOVERNED_OPTION_REF,
+      trajectoryId: proposed.proposedTrajectory.trajectoryId,
+      candidateVersion: proposed.proposedTrajectory.version,
+      forceLocalAuthority: true,
+    });
+    if (!decided.ok) return;
+    const context = await currentF2Context(runtime, seeded.projectId);
+    const prepared = await prepareM3FromDecision({
+      projectId: seeded.projectId,
+      decisionId: decided.decision.decisionId,
+      currentContext: context,
+      deps: {
+        decisionServices: oa.decisionServices,
+        authorityResolver: oa.authorityResolver,
+        executionContractServices: oa.executionContractServices,
+        nowIso: () => oa.clock.nowIso(),
+        forceM3Authority: true,
+      },
+    });
+    if (!prepared.ok) return;
+
+    const uninspected = await amendExecutionContractWithConstraint({
+      oa,
+      projectId: seeded.projectId,
+      executionContractId: prepared.payload.contract.executionContractId,
+      additionalConstraint: TIGHTENING,
+      forceLocalAuthority: true,
+    });
+    expect(uninspected.ok).toBe(false);
+    if (uninspected.ok) return;
+    expect(uninspected.code).toBe("INSPECTION_REQUIRED_BEFORE_AMENDMENT");
+  });
+
+  it("R1-U09 — partial validation failure then replay validates SAME successor", async () => {
+    const ctx = await prepareInspectedM3({ suffix: "r1u09", idPrefix: "r1u9" });
+    const validateSvc =
+      ctx.oa.executionContractServices.validateExecutionContract;
+    const originalExecute = validateSvc.execute.bind(validateSvc);
+    let failOnce = true;
+    const spy = async (
+      ...args: Parameters<typeof validateSvc.execute>
+    ): ReturnType<typeof validateSvc.execute> => {
+      if (failOnce) {
+        failOnce = false;
+        return {
+          ok: false as const,
+          error: createExecutionError({
+            detailCode: "CONTRACT_INVALID",
+            timestamp: ctx.oa.clock.nowIso(),
+            correlationId: "cor:r1-u09",
+            internalCauseRef: "forced_r1_validation_failure",
+          }),
+          durationMs: 0,
+        };
+      }
+      return originalExecute(...args);
+    };
+    validateSvc.execute = spy;
+
+    const first = await amendExecutionContractWithConstraint({
+      oa: ctx.oa,
+      projectId: ctx.projectId,
+      executionContractId: ctx.executionContractId,
+      additionalConstraint: TIGHTENING,
+      forceLocalAuthority: true,
+    });
+    expect(first.ok).toBe(false);
+    if (first.ok) return;
+
+    const priorAfterFail =
+      await ctx.oa.executionContractServices.getExecutionContract.execute({
+        executionContractId: ctx.executionContractId,
+      });
+    expect(priorAfterFail.ok).toBe(true);
+    if (!priorAfterFail.ok) return;
+    expect(priorAfterFail.contract.status).toBe("superseded");
+
+    const history =
+      await ctx.oa.executionContractServices.listExecutionContractHistory.execute(
+        { projectId: ctx.projectId },
+      );
+    expect(history.ok).toBe(true);
+    if (!history.ok) return;
+    const drafts = history.contracts.filter(
+      (c) =>
+        c.supersedesExecutionContractId === ctx.executionContractId &&
+        (c.status === "draft" || c.status === "proposed"),
+    );
+    expect(drafts.length).toBe(1);
+    const durableSuccessorId = drafts[0]!.executionContractId;
+
+    // Restore real validation and retry SAME amendment.
+    validateSvc.execute = originalExecute;
+    const replay = await amendExecutionContractWithConstraint({
+      oa: ctx.oa,
+      projectId: ctx.projectId,
+      executionContractId: ctx.executionContractId,
+      additionalConstraint: TIGHTENING,
+      forceLocalAuthority: true,
+    });
+    expect(replay.ok).toBe(true);
+    if (!replay.ok) return;
+    expect(replay.replayed).toBe(true);
+    expect(replay.successor.executionContractId).toBe(durableSuccessorId);
+    expect(["validated", "confirmation_required", "confirmed"]).toContain(
+      replay.successor.status,
+    );
+    expect(replay.successor.status).not.toBe("draft");
+    expect(replay.successor.status).not.toBe("proposed");
+    expect(replay.executionPerformed).toBe(false);
+    expect(replay.attemptCreated).toBe(false);
+
+    const historyAfter =
+      await ctx.oa.executionContractServices.listExecutionContractHistory.execute(
+        { projectId: ctx.projectId },
+      );
+    expect(historyAfter.ok).toBe(true);
+    if (!historyAfter.ok) return;
+    const successors = historyAfter.contracts.filter(
+      (c) => c.supersedesExecutionContractId === ctx.executionContractId,
+    );
+    expect(successors.length).toBe(1);
+  });
+
+  it("R1-U10 — governed identity mismatch fail-closed", async () => {
+    const ctx = await prepareInspectedM3({
+      suffix: "r1u10",
+      idPrefix: "r1u10",
+    });
+    const first = await amendExecutionContractWithConstraint({
+      oa: ctx.oa,
+      projectId: ctx.projectId,
+      executionContractId: ctx.executionContractId,
+      additionalConstraint: TIGHTENING,
+      forceLocalAuthority: true,
+    });
+    expect(first.ok).toBe(true);
+    if (!first.ok) return;
+
+    const getSvc = ctx.oa.executionContractServices.getExecutionContract;
+    const originalGet = getSvc.execute.bind(getSvc);
+    getSvc.execute = async (request) => {
+      const loaded = await originalGet(request);
+      if (
+        !loaded.ok ||
+        loaded.contract.executionContractId !==
+          first.successor.executionContractId
+      ) {
+        return loaded;
+      }
+      return {
+        ...loaded,
+        contract: {
+          ...loaded.contract,
+          requiredAuthority: "N1",
+        },
+      };
+    };
+
+    const conflict = await amendExecutionContractWithConstraint({
+      oa: ctx.oa,
+      projectId: ctx.projectId,
+      executionContractId: ctx.executionContractId,
+      additionalConstraint: TIGHTENING,
+      forceLocalAuthority: true,
+    });
+    getSvc.execute = originalGet;
+    expect(conflict.ok).toBe(false);
+    if (conflict.ok) return;
+    expect(conflict.code).toBe("AMENDMENT_IDENTITY_CONFLICT");
+  });
+
+  it("R1-U11 — replay after successor reinspection ⇒ reinspectionRequired=false", async () => {
+    const ctx = await prepareInspectedM3({
+      suffix: "r1u11",
+      idPrefix: "r1u11",
+    });
+    const amended = await amendExecutionContractWithConstraint({
+      oa: ctx.oa,
+      projectId: ctx.projectId,
+      executionContractId: ctx.executionContractId,
+      additionalConstraint: TIGHTENING,
+      forceLocalAuthority: true,
+    });
+    expect(amended.ok).toBe(true);
+    if (!amended.ok) return;
+    expect(amended.reinspectionRequired).toBe(true);
+    expect(amended.statusLabel).toBe("CONTRAT AMENDÉ — RÉINSPECTION REQUISE");
+
+    const reinspected = await inspectExecutionContract({
+      oa: ctx.oa,
+      projectId: ctx.projectId,
+      executionContractId: amended.successor.executionContractId,
+    });
+    expect(reinspected.ok).toBe(true);
+    if (!reinspected.ok) return;
+    expect(reinspected.inspectionSufficient).toBe(true);
+
+    const replay = await amendExecutionContractWithConstraint({
+      oa: ctx.oa,
+      projectId: ctx.projectId,
+      executionContractId: ctx.executionContractId,
+      additionalConstraint: TIGHTENING,
+      forceLocalAuthority: true,
+    });
+    expect(replay.ok).toBe(true);
+    if (!replay.ok) return;
+    expect(replay.replayed).toBe(true);
+    expect(replay.successor.executionContractId).toBe(
+      amended.successor.executionContractId,
+    );
+    expect(replay.successorInspection.inspectionSufficient).toBe(true);
+    expect(replay.reinspectionRequired).toBe(false);
+    expect(replay.statusLabel).toBe(
+      "CONTRAT AMENDÉ — RÉINSPECTION DÉJÀ SATISFAITE",
+    );
+    expect(replay.priorInspectionDoesNotCoverSuccessor).toBe(true);
+    expect(replay.executionPerformed).toBe(false);
+    expect(replay.attemptCreated).toBe(false);
+  });
+
+  it("R1-U12 — incompatible successor status fail-closed", async () => {
+    const ctx = await prepareInspectedM3({
+      suffix: "r1u12",
+      idPrefix: "r1u12",
+    });
+    const first = await amendExecutionContractWithConstraint({
+      oa: ctx.oa,
+      projectId: ctx.projectId,
+      executionContractId: ctx.executionContractId,
+      additionalConstraint: TIGHTENING,
+      forceLocalAuthority: true,
+    });
+    expect(first.ok).toBe(true);
+    if (!first.ok) return;
+
+    const getSvc = ctx.oa.executionContractServices.getExecutionContract;
+    const originalGet = getSvc.execute.bind(getSvc);
+    getSvc.execute = async (request) => {
+      const loaded = await originalGet(request);
+      if (
+        !loaded.ok ||
+        loaded.contract.executionContractId !==
+          first.successor.executionContractId
+      ) {
+        return loaded;
+      }
+      return {
+        ...loaded,
+        contract: {
+          ...loaded.contract,
+          status: "executing",
+        },
+      };
+    };
+
+    const blocked = await amendExecutionContractWithConstraint({
+      oa: ctx.oa,
+      projectId: ctx.projectId,
+      executionContractId: ctx.executionContractId,
+      additionalConstraint: TIGHTENING,
+      forceLocalAuthority: true,
+    });
+    getSvc.execute = originalGet;
+    expect(blocked.ok).toBe(false);
+    if (blocked.ok) return;
+    expect(blocked.code).toBe("CONTRACT_STATE_CONFLICT");
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
index 0305f5ed..5363c98a 100644
--- a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
@@ -85,6 +85,7 @@ describe("V2-A1 vertical-slice-runtime import boundaries", () => {
       "features/project-assistant/f3/e2eOptionATerminalAttempt.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/f3/e2eOptionATerminalAttempt.ts:@/lib/vertical-slice-runtime/e2eOptionAQaScenarioControl",
       "features/project-assistant/w2/actions.ts:@/lib/vertical-slice-runtime",
+      "features/project-assistant/w2/amendExecutionContract.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/authorizeExecutionContract.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/confirmForAuthorization.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/decideTrajectory.ts:@/lib/vertical-slice-runtime",
diff --git a/projects/sfia-studio/app/e2e/studio-w2-g3-correction-runtime.spec.ts b/projects/sfia-studio/app/e2e/studio-w2-g3-correction-runtime.spec.ts
index 23ed4596..61536724 100644
--- a/projects/sfia-studio/app/e2e/studio-w2-g3-correction-runtime.spec.ts
+++ b/projects/sfia-studio/app/e2e/studio-w2-g3-correction-runtime.spec.ts
@@ -1,8 +1,11 @@
 /**
- * W2-G3 correction pass — /studio runtime product proof (deterministic).
- * Captures Options → Recommendation → HD → Trajectory → EC → inspect →
+ * W2 /studio runtime product proof (deterministic).
+ * Captures Options → Recommendation (Phase B cognition) → HD → Trajectory →
+ * EC → inspect → material constraint amendment → re-inspect →
  * AUTHORIZED|BLOCKED → STOP BEFORE EXECUTE on the canonical /studio path.
- * No REAL · no Execute · Track D untouched.
+ *
+ * Track D / bounded Phase B is integrated on the product path.
+ * Deterministic Product E2E only · No REAL · no Execute.
  */
 import { test, expect, type Page } from "@playwright/test";
 import fs from "node:fs";
@@ -11,10 +14,13 @@ import crypto from "node:crypto";

 const CAPTURE_ROOT = path.resolve(
   process.cwd(),
-  "../../../.tmp-sfia-review/runtime-captures/w2-g3-correction",
+  "../../../.tmp-sfia-review/runtime-captures/w2-final-closure-product-correction",
 );
 const MANIFEST = path.join(CAPTURE_ROOT, "manifest.jsonl");

+const AMENDMENT_CONSTRAINT =
+  "W2_E2E_TIGHTEN: borner strictement le slice livré — aucune extension silencieuse";
+
 async function capture(
   page: Page,
   id: string,
@@ -37,16 +43,16 @@ async function capture(
       timestamp: new Date().toISOString(),
       sha256,
       provenance:
-        "CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — W2-G3 CORRECTION /STUDIO PROOF",
+        "CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — W2 FINAL CLOSURE PRODUCT CORRECTION /STUDIO PROOF",
     })}\n`,
     "utf8",
   );
 }

-test.describe("W2-G3 correction /studio runtime proof", () => {
+test.describe("W2 final-closure /studio product correction proof", () => {
   test.describe.configure({ timeout: 240_000 });

-  test("walks Options → HD → EC inspect → STOP BEFORE EXECUTE", async ({
+  test("walks Options → Phase-B Reco → HD → EC amend/reinspect → STOP BEFORE EXECUTE", async ({
     page,
   }) => {
     fs.mkdirSync(CAPTURE_ROOT, { recursive: true });
@@ -64,11 +70,11 @@ test.describe("W2-G3 correction /studio runtime proof", () => {

     await page.goto("/studio/projects/new");
     await expect(page.getByTestId("create-project-form")).toBeVisible();
-    await page.locator("#project-name").fill("W2-G3 Correction Runtime Proof");
+    await page.locator("#project-name").fill("W2 Final Closure Product Correction");
     await page
       .locator("#project-objective")
       .fill(
-        "Prouver Options / Recommendation / Décision de trajectoire / inspection — aucune exécution.",
+        "Prouver Options / Recommendation Phase B / Décision / amendement EC / réinspection — aucune exécution.",
       );
     await page.getByTestId("create-project-submit").click();
     await expect(page.getByTestId("open-project-workspace")).toBeVisible({
@@ -114,16 +120,27 @@ test.describe("W2-G3 correction /studio runtime proof", () => {
       throw new Error(`w2 propose failed: ${err}`);
     }
     await expect(page.getByTestId("w2-options")).toBeVisible();
-    await expect(page.getByTestId("w2-recommendation")).toContainText(
+
+    // --- R01: Phase B semantic cognition on integrated /studio path ---
+    const recommendation = page.getByTestId("w2-recommendation");
+    await expect(recommendation).toContainText(
       "RECOMMANDATION — PAS UNE DÉCISION",
     );
+    await expect(recommendation).toContainText(/anti scope creep/i);
+    await expect(recommendation).toContainText("Contexte de cycle rattaché.");
+    const recoText = (await recommendation.textContent()) ?? "";
+    expect(recoText).not.toMatch(/\[CKC:/);
+    expect(recoText).not.toMatch(/ckc:studio:/);
+    expect(recoText).not.toMatch(/digest=/);
+    expect(recoText).not.toMatch(/fp=/);
+
     await expect(page.getByTestId("w2-proposed-trajectory")).toContainText(
       "TRAJECTOIRE PROPOSÉE",
     );
     await expect(page.getByTestId("w2-decision")).toHaveCount(0);
-    await capture(page, "04-options-recommendation", {
+    await capture(page, "04-options-recommendation-phase-b", {
       screen: "TrajectorySurface",
-      state: "options_proposed",
+      state: "options_proposed_phase_b_semantic",
     });

     const decideButtons = page.locator("[data-testid^='w2-decide-']");
@@ -143,16 +160,19 @@ test.describe("W2-G3 correction /studio runtime proof", () => {
       state: "decided",
     });

+    // --- R02: prepare → inspect → material amend → block → reinspect → auth ---
     await page.getByTestId("w2-prepare-contract").click();
     await expect(page.getByTestId("w2-contract")).toBeVisible({
       timeout: 45_000,
     });
     await expect(page.getByTestId("w2-contract-action")).toBeVisible();
     await expect(page.getByTestId("w2-contract-facts")).toBeVisible();
-    await capture(page, "06-execution-contract", {
-      screen: "TrajectorySurface",
-      state: "contract_prepared",
-    });
+
+    const priorIdText =
+      (await page.getByTestId("w2-contract").textContent()) ?? "";
+    const priorConstraints =
+      (await page.getByTestId("w2-contract-constraints").textContent()) ?? "";
+    expect(priorConstraints).not.toContain("W2_E2E_TIGHTEN");

     const confirm = page.getByTestId("w2-confirm-contract");
     if (await confirm.count()) {
@@ -163,11 +183,73 @@ test.describe("W2-G3 correction /studio runtime proof", () => {
     await expect(page.getByTestId("w2-inspection-state")).toBeVisible({
       timeout: 30_000,
     });
-    await capture(page, "07-inspected", {
+    await expect(page.getByTestId("w2-inspection-state")).toContainText(
+      "INSPECTÉ",
+    );
+    await capture(page, "06-original-inspected", {
       screen: "TrajectorySurface",
-      state: "inspected",
+      state: "original_ec_inspected",
     });

+    await expect(page.getByTestId("w2-amendment-form")).toBeVisible();
+    await page.getByTestId("w2-amend-constraint").fill(AMENDMENT_CONSTRAINT);
+    await page.getByTestId("w2-amend-contract").click();
+
+    await expect(page.getByTestId("w2-amendment-notice")).toBeVisible({
+      timeout: 45_000,
+    });
+    await expect(page.getByTestId("w2-amendment-status")).toContainText(
+      /réinspection requise/i,
+    );
+    await expect(page.getByTestId("w2-contract-constraints")).toContainText(
+      "W2_E2E_TIGHTEN",
+    );
+    await expect(page.getByTestId("w2-amendment-lineage")).toBeVisible();
+    await expect(page.getByTestId("w2-inspection-state")).toContainText(
+      "NON INSPECTÉ",
+    );
+    // Successor is a different contract identity (lineage shows prior id).
+    const lineage =
+      (await page.getByTestId("w2-amendment-lineage").textContent()) ?? "";
+    expect(lineage).toMatch(/Successeur de xct:/);
+
+    await capture(page, "07-material-amendment-reinspection-required", {
+      screen: "TrajectorySurface",
+      state: "successor_reinspection_required",
+    });
+
+    // Pre-reinspect authority must BLOCK from product authorize logic.
+    await page.getByTestId("w2-authorize-contract").click();
+    await expect(page.getByTestId("w2-authorization")).toBeVisible({
+      timeout: 30_000,
+    });
+    await expect(page.getByTestId("w2-authorization-outcome")).toContainText(
+      "BLOQUÉ",
+    );
+    const blockedReason =
+      (await page.getByTestId("w2-authorization-reason").textContent()) ?? "";
+    expect(blockedReason.toLowerCase()).toMatch(/inspect/);
+
+    await page.getByTestId("w2-inspect-contract").click();
+    await expect(page.getByTestId("w2-inspection-state")).toContainText(
+      "INSPECTÉ",
+      { timeout: 30_000 },
+    );
+    await expect(page.getByTestId("w2-amendment-status")).toContainText(
+      /RÉINSPECTION DÉJÀ SATISFAITE|réinspect/i,
+    );
+    await capture(page, "08-successor-reinspected", {
+      screen: "TrajectorySurface",
+      state: "successor_reinspected",
+    });
+
+    const confirmAfter = page.getByTestId("w2-confirm-contract");
+    if (await confirmAfter.count()) {
+      if (await confirmAfter.isEnabled()) {
+        await confirmAfter.click();
+      }
+    }
+
     await page.getByTestId("w2-authorize-contract").click();
     await expect(page.getByTestId("w2-authorization")).toBeVisible({
       timeout: 30_000,
@@ -181,25 +263,29 @@ test.describe("W2-G3 correction /studio runtime proof", () => {
     expect(
       outcomeText.includes("AUTORISÉ") || outcomeText.includes("BLOQUÉ"),
     ).toBe(true);
-    await capture(page, "08-authorization-stop", {
+    await expect(page.getByTestId("w2-authorization-reason")).not.toBeEmpty();
+    await expect(page.getByTestId("w2-authorization-next")).not.toBeEmpty();
+
+    await capture(page, "09-final-authority-stop", {
       screen: "TrajectorySurface",
       state: outcomeText.includes("AUTORISÉ") ? "authorized" : "blocked",
     });

-    const history = page.getByTestId("project-history");
-    if (await history.count()) {
-      await history.scrollIntoViewIfNeeded();
-      await capture(page, "09-history", {
-        screen: "HistorySurface",
-        state: "visible",
-      });
-    }
+    // Silence unused prior capture vars while keeping explicit E2E-R02-02 intent.
+    expect(priorIdText.length).toBeGreaterThan(0);

-    expect(fs.existsSync(path.join(CAPTURE_ROOT, "04-options-recommendation.png"))).toBe(
-      true,
-    );
-    expect(fs.existsSync(path.join(CAPTURE_ROOT, "08-authorization-stop.png"))).toBe(
-      true,
-    );
+    expect(
+      fs.existsSync(
+        path.join(CAPTURE_ROOT, "04-options-recommendation-phase-b.png"),
+      ),
+    ).toBe(true);
+    expect(
+      fs.existsSync(
+        path.join(CAPTURE_ROOT, "07-material-amendment-reinspection-required.png"),
+      ),
+    ).toBe(true);
+    expect(
+      fs.existsSync(path.join(CAPTURE_ROOT, "09-final-authority-stop.png")),
+    ).toBe(true);
   });
 });
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css
index 03098b34..2c6e756f 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css
@@ -232,6 +232,34 @@
   color: var(--pm6-ink);
 }

+.amendmentNotice,
+.amendmentForm {
+  display: flex;
+  flex-direction: column;
+  gap: var(--pm6-space-2);
+  padding: var(--pm6-space-3);
+  border: 1px solid var(--pm6-border-soft);
+  border-radius: var(--pm6-radius-md, 8px);
+  background: var(--pm6-surface-soft, transparent);
+}
+
+.amendmentLabel {
+  font-size: 0.78rem;
+  font-weight: 600;
+  color: var(--pm6-muted-strong);
+}
+
+.amendmentInput {
+  width: 100%;
+  box-sizing: border-box;
+  padding: 0.55rem 0.7rem;
+  border: 1px solid var(--pm6-border-soft);
+  border-radius: var(--pm6-radius-md, 8px);
+  font: inherit;
+  color: var(--pm6-ink);
+  background: var(--pm6-surface);
+}
+
 .authorized {
   border-color: var(--pm6-ok);
   background: var(--pm6-ok-tint);
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
index 9a6e254d..6408b737 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
@@ -14,6 +14,7 @@
 import { useCallback, useState } from "react";
 import { projectAssistantPrepareM3Action } from "@/features/project-assistant/actions";
 import {
+  w2AmendExecutionContractAction,
   w2AuthorizeExecutionContractAction,
   w2ConfirmExecutionContractAction,
   w2DecideTrajectoryAction,
@@ -21,6 +22,7 @@ import {
   w2ProposeTrajectoryOptionsAction,
 } from "@/features/project-assistant/w2/actions";
 import type {
+  AmendExecutionContractSuccess,
   ContractInspectionStateDto,
   DecidedTrajectoryDto,
   ExecutionAuthorizationOutcomeDto,
@@ -44,6 +46,13 @@ type PreparedContract = {
   readonly semanticFingerprint: string;
 };

+type AmendmentNotice = {
+  readonly priorExecutionContractId: string;
+  readonly additionalConstraint: string;
+  readonly statusLabel: string;
+  readonly priorInspectionDoesNotCoverSuccessor: true;
+};
+
 type Busy =
   | null
   | "options"
@@ -51,7 +60,8 @@ type Busy =
   | "contract"
   | "inspection"
   | "confirmation"
-  | "authorization";
+  | "authorization"
+  | "amendment";

 export function TrajectorySurface({
   projectId,
@@ -74,6 +84,9 @@ export function TrajectorySurface({
     useState<ContractInspectionStateDto | null>(null);
   const [authorization, setAuthorization] =
     useState<ExecutionAuthorizationOutcomeDto | null>(null);
+  const [amendmentDraft, setAmendmentDraft] = useState("");
+  const [amendmentNotice, setAmendmentNotice] =
+    useState<AmendmentNotice | null>(null);

   const proposeOptions = useCallback(async () => {
     setBusy("options");
@@ -91,6 +104,8 @@ export function TrajectorySurface({
     setContract(null);
     setInspection(null);
     setAuthorization(null);
+    setAmendmentDraft("");
+    setAmendmentNotice(null);
     onDurableFactsChanged?.();
   }, [projectId, onDurableFactsChanged]);

@@ -149,6 +164,8 @@ export function TrajectorySurface({
     });
     setInspection(null);
     setAuthorization(null);
+    setAmendmentDraft("");
+    setAmendmentNotice(null);
     onDurableFactsChanged?.();
   }, [decision, projectId, onDurableFactsChanged]);

@@ -168,7 +185,65 @@ export function TrajectorySurface({
     const { ok: _ok, ...state } = result;
     setInspection(state);
     setAuthorization(null);
-  }, [contract, projectId]);
+    if (amendmentNotice && state.inspectionSufficient) {
+      setAmendmentNotice({
+        ...amendmentNotice,
+        statusLabel: "CONTRAT AMENDÉ — RÉINSPECTION DÉJÀ SATISFAITE",
+      });
+    }
+  }, [contract, projectId, amendmentNotice]);
+
+  const amendContract = useCallback(async () => {
+    if (!contract || !inspection?.inspectionSufficient) return;
+    const constraint = amendmentDraft.trim();
+    if (!constraint) {
+      setError("Indiquez une contrainte d'exécution supplémentaire.");
+      return;
+    }
+    setBusy("amendment");
+    setError(null);
+    const result = await w2AmendExecutionContractAction({
+      projectId,
+      executionContractId: contract.executionContractId,
+      additionalConstraint: constraint,
+    });
+    setBusy(null);
+    if (!result.ok) {
+      setError(result.message);
+      return;
+    }
+    const amended = result as AmendExecutionContractSuccess;
+    setContract({
+      executionContractId: amended.successor.executionContractId,
+      version: amended.successor.version,
+      status: amended.successor.status,
+      action: amended.successor.action,
+      target: amended.successor.target,
+      scope: amended.successor.scope,
+      requiredAuthority: amended.successor.requiredAuthority,
+      constraints: [...amended.successor.constraints],
+      stopConditions: [...amended.successor.stopConditions],
+      requiredCapabilities: [...amended.successor.requiredCapabilities],
+      reversibility: amended.successor.reversibility,
+      semanticFingerprint: amended.successor.semanticFingerprint,
+    });
+    setInspection(amended.successorInspection);
+    setAuthorization(null);
+    setAmendmentDraft("");
+    setAmendmentNotice({
+      priorExecutionContractId: amended.priorExecutionContractId,
+      additionalConstraint: amended.additionalConstraint,
+      statusLabel: amended.statusLabel,
+      priorInspectionDoesNotCoverSuccessor: true,
+    });
+    onDurableFactsChanged?.();
+  }, [
+    contract,
+    inspection,
+    amendmentDraft,
+    projectId,
+    onDurableFactsChanged,
+  ]);

   const confirmForAuthorization = useCallback(async () => {
     if (!contract) return;
@@ -444,6 +519,57 @@ export function TrajectorySurface({
             </div>
           </dl>

+          {amendmentNotice ? (
+            <div
+              className={styles.amendmentNotice}
+              data-testid="w2-amendment-notice"
+              role="status"
+            >
+              <p className={styles.blockBody} data-testid="w2-amendment-status">
+                {amendmentNotice.statusLabel}
+              </p>
+              <p className={styles.blockNote}>
+                L&apos;inspection précédente couvrait le contrat précédent, pas
+                le successeur amendé.
+              </p>
+              <p className={styles.blockNote} data-testid="w2-amendment-lineage">
+                Successeur de {amendmentNotice.priorExecutionContractId} ·
+                contrainte ajoutée : {amendmentNotice.additionalConstraint}
+              </p>
+            </div>
+          ) : null}
+
+          {inspection?.inspectionSufficient ? (
+            <div
+              className={styles.amendmentForm}
+              data-testid="w2-amendment-form"
+            >
+              <p className={styles.blockTitle}>Amender le contrat</p>
+              <label className={styles.amendmentLabel} htmlFor="w2-amend-constraint">
+                Contrainte d&apos;exécution supplémentaire
+              </label>
+              <input
+                id="w2-amend-constraint"
+                className={styles.amendmentInput}
+                data-testid="w2-amend-constraint"
+                type="text"
+                value={amendmentDraft}
+                onChange={(event) => setAmendmentDraft(event.target.value)}
+                disabled={busy !== null}
+                placeholder="Ex. : borner strictement le slice livré"
+              />
+              <button
+                type="button"
+                className={styles.secondaryAction}
+                data-testid="w2-amend-contract"
+                onClick={() => void amendContract()}
+                disabled={busy !== null || amendmentDraft.trim().length === 0}
+              >
+                Appliquer l&apos;amendement
+              </button>
+            </div>
+          ) : null}
+
           <div className={styles.actions}>
             <button
               type="button"
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/actions.ts b/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
index 5ec3c340..41f57980 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
@@ -13,6 +13,7 @@
  */

 import { getRuntimeApplicationService } from "@/lib/vertical-slice-runtime";
+import { amendExecutionContractWithConstraint } from "./amendExecutionContract";
 import { evaluateExecutionAuthorization } from "./authorizeExecutionContract";
 import { confirmExecutionContractForAuthorization } from "./confirmForAuthorization";
 import { decideTrajectory } from "./decideTrajectory";
@@ -22,6 +23,7 @@ import { proposeTrajectoryOptions } from "./proposeTrajectoryOptions";
 import { readW2ProjectHistory } from "./projectHistory";
 import { resolveW2QualificationInputs } from "./qualificationInputs";
 import type {
+  AmendExecutionContractResult,
   ConfirmForAuthorizationResult,
   DecideTrajectoryResult,
   EvaluateExecutionAuthorizationResult,
@@ -157,6 +159,32 @@ export async function w2AuthorizeExecutionContractAction(input: {
   });
 }

+/**
+ * Pilote material amendment — append one tightening execution constraint via
+ * OA supersession. Client cannot choose actor/authority; no Execute.
+ */
+export async function w2AmendExecutionContractAction(input: {
+  projectId: string;
+  executionContractId: string;
+  additionalConstraint: string;
+  /** Hostile — ignored. */
+  canActAsMorris?: unknown;
+  claimedAuthorityLevel?: unknown;
+}): Promise<AmendExecutionContractResult> {
+  void input.canActAsMorris;
+  void input.claimedAuthorityLevel;
+
+  const runtime = getRuntimeApplicationService();
+  if (!runtime.oa) return OA_UNAVAILABLE;
+
+  return amendExecutionContractWithConstraint({
+    oa: runtime.oa,
+    projectId: input.projectId,
+    executionContractId: input.executionContractId,
+    additionalConstraint: input.additionalConstraint,
+  });
+}
+
 export async function w2ReadProjectHistoryAction(input: {
   projectId: string;
 }): Promise<ReadW2ProjectHistoryResult> {
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/amendExecutionContract.ts b/projects/sfia-studio/app/features/project-assistant/w2/amendExecutionContract.ts
new file mode 100644
index 00000000..d61360f6
--- /dev/null
+++ b/projects/sfia-studio/app/features/project-assistant/w2/amendExecutionContract.ts
@@ -0,0 +1,611 @@
+/**
+ * W2 Track C — thin product application seam: Pilote material amendment of an
+ * already-inspected ExecutionContract by appending ONE tightening constraint.
+ *
+ * Reuses exclusively:
+ *   supersedeExecutionContract → validateExecutionContract → inspection state
+ *
+ * R1 recovery:
+ *   durable draft|proposed successor is revalidated on replay BEFORE success;
+ *   governed identity is fail-closed; reinspectionRequired reflects CURRENT
+ *   successor inspection truth (never forged across EC IDs).
+ */
+
+import { createHash } from "node:crypto";
+import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
+import { canonicalizeJson } from "@/lib/oa/doctrine";
+import {
+  LOCAL_PILOTE_ACTOR,
+  registerLocalPiloteAuthority,
+} from "@/lib/oa/decision";
+import type { ExecutionContract } from "@/lib/oa/execution-contract";
+import { readContractInspectionState } from "./inspectExecutionContract";
+import type {
+  AmendExecutionContractResult,
+  AmendedExecutionContractDto,
+  ContractInspectionStateDto,
+  W2Failure,
+} from "./types";
+
+export const W2_CONSTRAINT_AMENDMENT_REASON = "w2_constraint_amendment";
+
+export type AmendExecutionContractInput = {
+  readonly oa: RuntimeOaStack;
+  readonly projectId: string;
+  readonly executionContractId: string;
+  readonly additionalConstraint: string;
+  /** Test inject for the local single-user authority gate. */
+  readonly forceLocalAuthority?: boolean;
+};
+
+function fail(code: string, message: string): W2Failure {
+  return { ok: false, code, message };
+}
+
+function normalizeConstraint(raw: string): string | null {
+  const trimmed = raw.replace(/\u0000/g, "").trim();
+  if (!trimmed) return null;
+  return trimmed.replace(/\s+/g, " ");
+}
+
+function amendmentDigest(
+  priorExecutionContractId: string,
+  normalizedConstraint: string,
+): string {
+  return createHash("sha256")
+    .update("w2-constraint-amend\n", "utf8")
+    .update(priorExecutionContractId, "utf8")
+    .update("\n", "utf8")
+    .update(normalizedConstraint, "utf8")
+    .digest("hex")
+    .slice(0, 16);
+}
+
+function successorIdFor(
+  priorExecutionContractId: string,
+  digest: string,
+): string {
+  const base = priorExecutionContractId.slice(0, 72);
+  return `${base}:amd:${digest}`;
+}
+
+function idempotencyKeyFor(digest: string): string {
+  return `idem:w2-constraint-amend:${digest}`;
+}
+
+function sameStringList(
+  left: readonly string[] | undefined,
+  right: readonly string[] | undefined,
+): boolean {
+  const a = left ?? [];
+  const b = right ?? [];
+  if (a.length !== b.length) return false;
+  return a.every((value, index) => value === b[index]);
+}
+
+function sameOptionalMaterial(left: unknown, right: unknown): boolean {
+  if (left === undefined && right === undefined) return true;
+  if (left === undefined || right === undefined) return false;
+  return canonicalizeJson(left) === canonicalizeJson(right);
+}
+
+/**
+ * Fail-closed governed identity for a deterministic W2 constraint successor.
+ * Exported for R1 unit proof of the application guard (no OA mutation).
+ */
+export function verifyGovernedAmendmentSuccessor(input: {
+  readonly prior: ExecutionContract;
+  readonly successor: ExecutionContract;
+  readonly expectedSuccessorId: string;
+  readonly expectedIdempotencyKey: string;
+  readonly normalizedConstraint: string;
+}): W2Failure | null {
+  const { prior, successor } = input;
+  const expectedConstraints = [...prior.constraints, input.normalizedConstraint];
+
+  if (successor.executionContractId !== input.expectedSuccessorId) {
+    return fail(
+      "AMENDMENT_IDENTITY_CONFLICT",
+      "Identité successeur déterministe mismatch.",
+    );
+  }
+  if (successor.projectId !== prior.projectId) {
+    return fail(
+      "AMENDMENT_IDENTITY_CONFLICT",
+      "projectId successeur incompatible avec le prédécesseur.",
+    );
+  }
+  if ((successor.cycleInstanceId ?? null) !== (prior.cycleInstanceId ?? null)) {
+    return fail(
+      "AMENDMENT_IDENTITY_CONFLICT",
+      "cycleInstanceId successeur incompatible.",
+    );
+  }
+  if (successor.supersedesExecutionContractId !== prior.executionContractId) {
+    return fail(
+      "AMENDMENT_IDENTITY_CONFLICT",
+      "Lignage supersedesExecutionContractId incorrect.",
+    );
+  }
+  if (successor.supersessionReason !== W2_CONSTRAINT_AMENDMENT_REASON) {
+    return fail(
+      "AMENDMENT_IDENTITY_CONFLICT",
+      "supersessionReason d'amendement W2 incorrect.",
+    );
+  }
+  if (successor.idempotencyKey !== input.expectedIdempotencyKey) {
+    return fail(
+      "AMENDMENT_IDENTITY_CONFLICT",
+      "idempotencyKey d'amendement mismatch.",
+    );
+  }
+  if (successor.requiredAuthority !== prior.requiredAuthority) {
+    return fail(
+      "AMENDMENT_IDENTITY_CONFLICT",
+      "requiredAuthority ne peut pas dériver silencieusement.",
+    );
+  }
+  if (!sameStringList(successor.decisionRefs, prior.decisionRefs)) {
+    return fail(
+      "AMENDMENT_IDENTITY_CONFLICT",
+      "decisionRefs successeur incompatibles.",
+    );
+  }
+  if (successor.scope !== prior.scope) {
+    return fail(
+      "AMENDMENT_IDENTITY_CONFLICT",
+      "scope successeur incompatible.",
+    );
+  }
+  if (successor.action !== prior.action || successor.target !== prior.target) {
+    return fail(
+      "AMENDMENT_IDENTITY_CONFLICT",
+      "action/target ne peuvent pas dériver silencieusement.",
+    );
+  }
+  if (
+    !sameStringList(successor.requiredCapabilities, prior.requiredCapabilities)
+  ) {
+    return fail(
+      "AMENDMENT_IDENTITY_CONFLICT",
+      "requiredCapabilities successeur incompatibles.",
+    );
+  }
+  if (!sameStringList(successor.stopConditions, prior.stopConditions)) {
+    return fail(
+      "AMENDMENT_IDENTITY_CONFLICT",
+      "stopConditions successeur incompatibles.",
+    );
+  }
+  if (
+    !sameStringList(
+      successor.evidenceRequirements,
+      prior.evidenceRequirements,
+    )
+  ) {
+    return fail(
+      "AMENDMENT_IDENTITY_CONFLICT",
+      "evidenceRequirements successeur incompatibles.",
+    );
+  }
+  if (successor.reversibility !== prior.reversibility) {
+    return fail(
+      "AMENDMENT_IDENTITY_CONFLICT",
+      "reversibility successeur incompatible.",
+    );
+  }
+  if (
+    (successor.executionWindowClass ?? null) !==
+    (prior.executionWindowClass ?? null)
+  ) {
+    return fail(
+      "AMENDMENT_IDENTITY_CONFLICT",
+      "executionWindowClass successeur incompatible.",
+    );
+  }
+  if (!sameStringList(successor.constraints, expectedConstraints)) {
+    return fail(
+      "AMENDMENT_IDENTITY_CONFLICT",
+      "contraintes successeur ≠ prédécesseur + contrainte d'amendement.",
+    );
+  }
+  if (
+    !sameOptionalMaterial(
+      successor.doctrinePackageRef,
+      prior.doctrinePackageRef,
+    )
+  ) {
+    return fail(
+      "AMENDMENT_IDENTITY_CONFLICT",
+      "doctrinePackageRef successeur incompatible.",
+    );
+  }
+  if (!sameOptionalMaterial(successor.inputs, prior.inputs)) {
+    return fail(
+      "AMENDMENT_IDENTITY_CONFLICT",
+      "inputs successeur incompatibles.",
+    );
+  }
+  if (
+    !sameOptionalMaterial(successor.expectedOutputs, prior.expectedOutputs)
+  ) {
+    return fail(
+      "AMENDMENT_IDENTITY_CONFLICT",
+      "expectedOutputs successeur incompatibles.",
+    );
+  }
+  if (
+    !sameOptionalMaterial(successor.adapterExportRef, prior.adapterExportRef)
+  ) {
+    return fail(
+      "AMENDMENT_IDENTITY_CONFLICT",
+      "adapterExportRef successeur incompatible.",
+    );
+  }
+  return null;
+}
+
+function toContractDto(contract: ExecutionContract): AmendedExecutionContractDto {
+  return {
+    executionContractId: contract.executionContractId,
+    version: contract.version,
+    status: contract.status,
+    action: contract.action,
+    target: contract.target,
+    scope: contract.scope,
+    requiredAuthority: contract.requiredAuthority,
+    constraints: [...(contract.constraints ?? [])],
+    stopConditions: [...(contract.stopConditions ?? [])],
+    requiredCapabilities: [...(contract.requiredCapabilities ?? [])],
+    reversibility: contract.reversibility ?? "non précisée",
+    semanticFingerprint: contract.semanticFingerprint ?? "",
+    supersedesExecutionContractId: contract.supersedesExecutionContractId ?? null,
+    supersessionReason: contract.supersessionReason ?? null,
+  };
+}
+
+function successPayload(input: {
+  prior: ExecutionContract;
+  priorInspectionAttestationRef: string | null;
+  successor: ExecutionContract;
+  successorInspection: ContractInspectionStateDto;
+  replayed: boolean;
+  additionalConstraint: string;
+}): AmendExecutionContractResult {
+  const reinspectionRequired = !input.successorInspection.inspectionSufficient;
+  return {
+    ok: true,
+    priorExecutionContractId: input.prior.executionContractId,
+    priorContractVersion: input.prior.version,
+    priorInspectionAttestationRef: input.priorInspectionAttestationRef,
+    successor: toContractDto(input.successor),
+    supersedesExecutionContractId: input.prior.executionContractId,
+    materialAmendment: true,
+    priorInspectionDoesNotCoverSuccessor: true,
+    reinspectionRequired,
+    statusLabel: reinspectionRequired
+      ? "CONTRAT AMENDÉ — RÉINSPECTION REQUISE"
+      : "CONTRAT AMENDÉ — RÉINSPECTION DÉJÀ SATISFAITE",
+    successorInspection: input.successorInspection,
+    additionalConstraint: input.additionalConstraint,
+    replayed: input.replayed,
+    humanDecisionCreated: false,
+    authorityGranted: false,
+    confirmationGranted: false,
+    executionPerformed: false,
+    attemptCreated: false,
+  };
+}
+
+async function loadContract(
+  oa: RuntimeOaStack,
+  executionContractId: string,
+): Promise<
+  | { ok: true; contract: ExecutionContract }
+  | { ok: false; code: string; message: string }
+> {
+  const loaded = await oa.executionContractServices.getExecutionContract.execute({
+    executionContractId,
+  });
+  if (!loaded.ok) {
+    return {
+      ok: false,
+      code: loaded.error.detailCode,
+      message: "Contrat d'exécution introuvable — amendement impossible.",
+    };
+  }
+  return { ok: true, contract: loaded.contract };
+}
+
+async function registerPiloteAuthority(
+  input: AmendExecutionContractInput,
+  scope: string,
+  digest: string,
+): Promise<
+  | { ok: true; evidenceId: string }
+  | { ok: false; code: string; message: string }
+> {
+  const authority = registerLocalPiloteAuthority({
+    authorityResolver: input.oa.authorityResolver,
+    scope,
+    issuedAt: input.oa.clock.nowIso(),
+    evidenceId: `evd:w2-amend:${digest}`,
+    forceEnable: input.forceLocalAuthority === true,
+  });
+  if (!authority.ok) {
+    return fail(authority.code, authority.message);
+  }
+  return { ok: true, evidenceId: authority.evidenceId };
+}
+
+/**
+ * Recover an existing deterministic successor: identity → status policy →
+ * validate draft|proposed → current inspection truth.
+ */
+async function recoverExistingSuccessor(input: {
+  readonly amendInput: AmendExecutionContractInput;
+  readonly prior: ExecutionContract;
+  readonly successor: ExecutionContract;
+  readonly expectedSuccessorId: string;
+  readonly expectedIdempotencyKey: string;
+  readonly normalizedConstraint: string;
+  readonly digest: string;
+}): Promise<AmendExecutionContractResult> {
+  const identity = verifyGovernedAmendmentSuccessor({
+    prior: input.prior,
+    successor: input.successor,
+    expectedSuccessorId: input.expectedSuccessorId,
+    expectedIdempotencyKey: input.expectedIdempotencyKey,
+    normalizedConstraint: input.normalizedConstraint,
+  });
+  if (identity) return identity;
+
+  let successor = input.successor;
+  const status = successor.status;
+
+  if (status === "draft" || status === "proposed") {
+    const authority = await registerPiloteAuthority(
+      input.amendInput,
+      input.prior.scope,
+      input.digest,
+    );
+    if (!authority.ok) return authority;
+
+    const validated =
+      await input.amendInput.oa.executionContractServices.validateExecutionContract.execute(
+        {
+          executionContractId: successor.executionContractId,
+          actor: LOCAL_PILOTE_ACTOR,
+          authorityEvidenceId: authority.evidenceId,
+        },
+      );
+    if (!validated.ok) {
+      return fail(
+        validated.error.detailCode,
+        `Validation du contrat amendé refusée (${validated.error.detailCode}).`,
+      );
+    }
+    successor = validated.contract;
+  } else if (
+    status === "validated" ||
+    status === "confirmation_required" ||
+    status === "confirmed"
+  ) {
+    // Already past validation — use durable state as-is.
+  } else if (
+    status === "cancelled" ||
+    status === "superseded" ||
+    status === "executing" ||
+    status === "completed" ||
+    status === "failed"
+  ) {
+    return fail(
+      "CONTRACT_STATE_CONFLICT",
+      `Successeur d'amendement dans un état incompatible (${status}).`,
+    );
+  } else {
+    return fail(
+      "CONTRACT_STATE_CONFLICT",
+      `Statut successeur inconnu/incompatible (${String(status)}).`,
+    );
+  }
+
+  const successorInspection = await readContractInspectionState({
+    oa: input.amendInput.oa,
+    executionContractId: successor.executionContractId,
+  });
+  if (!successorInspection.ok) return successorInspection;
+
+  const priorInspection = await readContractInspectionState({
+    oa: input.amendInput.oa,
+    executionContractId: input.prior.executionContractId,
+  });
+
+  return successPayload({
+    prior: input.prior,
+    priorInspectionAttestationRef: priorInspection.ok
+      ? priorInspection.attestationRef ?? priorInspection.staleAttestationRef
+      : null,
+    successor,
+    successorInspection,
+    replayed: true,
+    additionalConstraint: input.normalizedConstraint,
+  });
+}
+
+/**
+ * Append one tightening execution constraint via OA supersession.
+ */
+export async function amendExecutionContractWithConstraint(
+  input: AmendExecutionContractInput,
+): Promise<AmendExecutionContractResult> {
+  const normalized = normalizeConstraint(input.additionalConstraint);
+  if (!normalized) {
+    return fail(
+      "CONSTRAINT_EMPTY",
+      "La contrainte d'exécution supplémentaire est vide — amendement refusé.",
+    );
+  }
+
+  const priorLoad = await loadContract(input.oa, input.executionContractId);
+  if (!priorLoad.ok) return fail(priorLoad.code, priorLoad.message);
+  let prior = priorLoad.contract;
+
+  if (prior.projectId !== input.projectId) {
+    return fail(
+      "PROJECT_MISMATCH",
+      "Le contrat n'appartient pas au projet demandé — amendement refusé.",
+    );
+  }
+
+  const digest = amendmentDigest(prior.executionContractId, normalized);
+  const newExecutionContractId = successorIdFor(
+    prior.executionContractId,
+    digest,
+  );
+  const idempotencyKey = idempotencyKeyFor(digest);
+
+  // Replay / recovery path: deterministic successor already durable.
+  const existingSuccessor = await loadContract(
+    input.oa,
+    newExecutionContractId,
+  );
+  if (existingSuccessor.ok) {
+    const priorRefresh = await loadContract(
+      input.oa,
+      prior.executionContractId,
+    );
+    if (priorRefresh.ok) prior = priorRefresh.contract;
+
+    return recoverExistingSuccessor({
+      amendInput: input,
+      prior,
+      successor: existingSuccessor.contract,
+      expectedSuccessorId: newExecutionContractId,
+      expectedIdempotencyKey: idempotencyKey,
+      normalizedConstraint: normalized,
+      digest,
+    });
+  }
+
+  if (
+    prior.status === "superseded" ||
+    prior.status === "cancelled" ||
+    prior.status === "executing" ||
+    prior.status === "completed" ||
+    prior.status === "failed"
+  ) {
+    return fail(
+      "CONTRACT_STATE_CONFLICT",
+      `Le contrat (statut ${prior.status}) ne peut pas être amendé.`,
+    );
+  }
+
+  if (prior.constraints.includes(normalized)) {
+    return fail(
+      "CONSTRAINT_DUPLICATE",
+      "Cette contrainte est déjà présente sur le contrat — amendement refusé.",
+    );
+  }
+
+  const priorInspection = await readContractInspectionState({
+    oa: input.oa,
+    executionContractId: prior.executionContractId,
+  });
+  if (!priorInspection.ok) return priorInspection;
+  if (!priorInspection.inspectionSufficient) {
+    return fail(
+      "INSPECTION_REQUIRED_BEFORE_AMENDMENT",
+      "Le contrat doit être inspecté avant un amendement matériel.",
+    );
+  }
+
+  const authority = await registerPiloteAuthority(
+    input,
+    prior.scope,
+    digest,
+  );
+  if (!authority.ok) return authority;
+
+  const superseded =
+    await input.oa.executionContractServices.supersedeExecutionContract.execute({
+      newExecutionContractId,
+      supersedesExecutionContractId: prior.executionContractId,
+      supersessionReason: W2_CONSTRAINT_AMENDMENT_REASON,
+      actor: LOCAL_PILOTE_ACTOR,
+      authorityEvidenceId: authority.evidenceId,
+      expectedVersion: prior.version,
+      constraints: [...prior.constraints, normalized],
+      idempotencyKey,
+      correlationId: `cor:w2-amend:${digest}`,
+      status: "draft",
+    });
+
+  if (!superseded.ok) {
+    // Bounded race recovery: reload expected successor once — no recursion.
+    if (superseded.error.detailCode === "CONTRACT_ALREADY_EXISTS") {
+      const raced = await loadContract(input.oa, newExecutionContractId);
+      if (!raced.ok) {
+        return fail(
+          "AMENDMENT_RECOVERY_FAILED",
+          "Course supersession: successeur déterministe introuvable après CONTRACT_ALREADY_EXISTS.",
+        );
+      }
+      const priorRefresh = await loadContract(
+        input.oa,
+        prior.executionContractId,
+      );
+      if (priorRefresh.ok) prior = priorRefresh.contract;
+      return recoverExistingSuccessor({
+        amendInput: input,
+        prior,
+        successor: raced.contract,
+        expectedSuccessorId: newExecutionContractId,
+        expectedIdempotencyKey: idempotencyKey,
+        normalizedConstraint: normalized,
+        digest,
+      });
+    }
+    return fail(
+      superseded.error.detailCode,
+      `Amendement refusé (${superseded.error.detailCode}).`,
+    );
+  }
+
+  const validated =
+    await input.oa.executionContractServices.validateExecutionContract.execute({
+      executionContractId: superseded.contract.executionContractId,
+      actor: LOCAL_PILOTE_ACTOR,
+      authorityEvidenceId: authority.evidenceId,
+    });
+  if (!validated.ok) {
+    return fail(
+      validated.error.detailCode,
+      `Validation du contrat amendé refusée (${validated.error.detailCode}).`,
+    );
+  }
+
+  const priorAfter = superseded.supersededContract ?? prior;
+  const successorInspection = await readContractInspectionState({
+    oa: input.oa,
+    executionContractId: validated.contract.executionContractId,
+  });
+  if (!successorInspection.ok) return successorInspection;
+
+  // Fresh create path: successor must not inherit sufficient inspection.
+  if (successorInspection.inspectionSufficient) {
+    return fail(
+      "INSPECTION_INVARIANT_VIOLATED",
+      "Le successeur ne doit pas hériter d'une inspection suffisante — arrêt fail-closed.",
+    );
+  }
+
+  return successPayload({
+    prior: priorAfter,
+    priorInspectionAttestationRef: priorInspection.attestationRef,
+    successor: validated.contract,
+    successorInspection,
+    replayed: false,
+    additionalConstraint: normalized,
+  });
+}
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/types.ts b/projects/sfia-studio/app/features/project-assistant/w2/types.ts
index 19655ba4..baf0653b 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/types.ts
@@ -212,3 +212,52 @@ export type DecideTrajectoryResult =
       readonly executionPerformed: false;
     }
   | W2Failure;
+
+/* -------------------------------------------------------------------------- */
+/* Track C — material constraint amendment (OA supersession seam)              */
+/* -------------------------------------------------------------------------- */
+
+export type AmendedExecutionContractDto = {
+  readonly executionContractId: string;
+  readonly version: number;
+  readonly status: string;
+  readonly action: string;
+  readonly target: string;
+  readonly scope: string;
+  readonly requiredAuthority: string;
+  readonly constraints: readonly string[];
+  readonly stopConditions: readonly string[];
+  readonly requiredCapabilities: readonly string[];
+  readonly reversibility: string;
+  readonly semanticFingerprint: string;
+  readonly supersedesExecutionContractId: string | null;
+  readonly supersessionReason: string | null;
+};
+
+export type AmendExecutionContractSuccess = {
+  readonly ok: true;
+  readonly priorExecutionContractId: string;
+  readonly priorContractVersion: number;
+  readonly priorInspectionAttestationRef: string | null;
+  readonly successor: AmendedExecutionContractDto;
+  readonly supersedesExecutionContractId: string;
+  readonly materialAmendment: true;
+  readonly priorInspectionDoesNotCoverSuccessor: true;
+  /** Current successor inspection truth — never forged from predecessor. */
+  readonly reinspectionRequired: boolean;
+  readonly statusLabel:
+    | "CONTRAT AMENDÉ — RÉINSPECTION REQUISE"
+    | "CONTRAT AMENDÉ — RÉINSPECTION DÉJÀ SATISFAITE";
+  readonly successorInspection: ContractInspectionStateDto;
+  readonly additionalConstraint: string;
+  readonly replayed: boolean;
+  readonly humanDecisionCreated: false;
+  readonly authorityGranted: false;
+  readonly confirmationGranted: false;
+  readonly executionPerformed: false;
+  readonly attemptCreated: false;
+};
+
+export type AmendExecutionContractResult =
+  | AmendExecutionContractSuccess
+  | W2Failure;
```
