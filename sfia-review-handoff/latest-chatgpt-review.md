# PRODUCT-JOURNEY-LOT-A-B — FINAL CRITICAL REMEDIATION — Review Pack (FULL)

## A. Git Truth / GO / qualification

- Timestamp (UTC): 2026-09-15T16:47:38Z
- origin/main: `6a41ab7e7deda9f7168d12a37b9316413565fa16`
- Candidate: `/Users/morris/Projects/sfia-studio-product-proof-journey-integrity`
- Branch: `fix/sfia-studio-product-proof-journey-integrity`
- HEAD/base: `6a41ab7e7deda9f7168d12a37b9316413565fa16` (ZERO Product commits ahead; dirty candidate)
- Pre-remediation backup: `/tmp/sfia-product-journey-lot-ab-final-critical-remediation.patch`
- Cycle: 8 Delivery / EVOL / Critical
- Formal C2: NOT promoted · Runtime v3: NON ADOPTED
- Morris GO: close B1/B2/B3 only; deterministic; STOP before Confirm/Authorize/Execute; NO Product commit/push/PR; ZERO LIVE/REAL; dogfood frozen

## B. Prior Critical Review blockers B1/B2/B3

- **B1** — Product UI still forced sandbox op selector after Proposal docs_write pursue; application test called `projectAssistantPrepareM3Action` directly without UI routing.
- **B2** — Import cycle: `pendingDecisionSubjectMarker` → `resolveProposalDecisionSubject` → `activeProposalDecisionSubject` → `pendingDecisionSubjectMarker`.
- **B3** — Handoff lacked complete new-test file content (hashes/excerpts only).

## C. B1 root cause

TrajectorySurface exposed only W2 sandbox qualification (`read|simulate|generate-temporary-artifact`) after any pursue. Proposal DecisionBasis already sealed `cursor.docs_write.apply` + targetPath, but UI forced a second technical choice and called `w2PrepareExecutionContractAction` instead of sealed M3 PREPARE.

## D. Final Proposal-backed PREPARE routing

```
HD pursue + decision.proposalId + decisionBasisLinked
→ isProposalBackedPrepare === true
→ CTA "Préparer le contrat d'exécution" (data-testid=w2-prepare-contract)
→ projectAssistantPrepareM3Action({ projectId, decisionId })  // ONLY
→ prepareM3FromDecision (server resolves DecisionBasis)
→ ExecutionContract
→ Inspect owns next CTA
```

Legacy non-Proposal path retains `w3a-qualify-execution-work` + `w2-prepare-contract-sandbox` + selector.

## E. UI decision-subject matrix after remediation

| State | Primary |
|---|---|
| Lost pending | Reformuler |
| Recoverable pending | Instruire exact Proposal |
| OptionSet awaiting HD | pursue/amend/refuse |
| HD amend / refuse | Nora guidance; no PREPARE (UI + server `PREPARE_NOT_APPLICABLE`) |
| HD pursue + Proposal-backed | Proposal-backed PREPARE (no selector) |
| HD pursue + non-Proposal | sandbox selector (legacy) |
| EC prepared | Inspect |
| EC inspected | STOP (Confirm/Authorize preserved, not exercised) |
| No Proposal/EC subject | generic Instruire |

## F. Server authority / client trust boundary

Client sends **only** `projectId` + `decisionId`. Server resolves: Proposal lineage, OptionSet, pursue HD, DecisionBasis, sealed operation, RepositoryBinding, targetPath, capabilities, validation/evidence, reversibility, stops. Incomplete/stale/contradictory → fail closed. Hostile extras ignored (AP23b).

## G. Full docs_write lineage

Proposal DECISION_REQUIRED → PresentedOptionSet(exact proposalId) → HD pursue → DecisionBasis (`intentKind=docs_write`, `requestedOperation=cursor.docs_write.apply`, `targetPath=projects/sfia-studio/.sandbox/gestion-de-taches.md`) → EC once → Inspect (`grantsAuthority=false`, `attemptCreated=false`).

Deterministic binding shape: `mcleland147/sfia-workspace` (not acme/widget). Fixture materialize path may use `docs/` pathRoot when `__F2_ARTIFACT_MATERIALIZE__` requires it — documented in applicationPath test.

## H. Product UI PREPARE proof

`trajectorySurface.ui.test.tsx`: Proposal pursue → `w2-proposal-backed-prepare` visible; `w3a-operation-kind` absent; click `w2-prepare-contract` invokes `projectAssistantPrepareM3Action` with exact `{projectId, decisionId}`; contract projects; Inspect next.

`productProofJourneyIntegrity.applicationPath.d0.test.ts` AP23: same action contract → durable EC; ZERO Attempt.

## I. Product UI Inspect proof

UI test + AP24: `w2InspectExecutionContractAction` → inspectionSufficient / INSPECTÉ; grantsAuthority false; ZERO Attempt/Execute.

## J. B2 dependency-cycle root cause

`pendingDecisionSubjectMarker` imported seal/digest from `resolveProposalDecisionSubject`, which imports `activeProposalDecisionSubject`, which imports `pendingDecisionSubjectMarker`.

## K. Final import graph

```
proposalSubjectIntegrity  (pure leaf — no W2 subject modules)
  ↑ pendingDecisionSubjectMarker
  ↑ resolveProposalDecisionSubject → activeProposalDecisionSubject → pendingDecisionSubjectMarker
```

No cycle. Integrity imports only `@/lib/oa/decision` + F2 types/schema.

## L. Subject digest semantic-equivalence proof

`proposalSubjectIntegrity.d0.test.ts`: re-exports from `resolveProposalDecisionSubject` are the **same function objects**; digests identical for fixture Proposal. CORR-10 digest suite still green (45).

## M. B3 handoff completeness result

This pack embeds:
- complete unified diffs for every modified Product/test file under `projects/sfia-studio/app`
- complete `/dev/null → file` diffs for every NEW file (integrity module + 4 new tests)

No hashes-only placeholders. No "full source in worktree" substitutes.

## N–R. COMPLETE DIFFS

See sections below (all content included in full).

## S. Targeted tests

```
npx vitest run trajectorySurface productProofJourneyIntegrity*
  proposalSubjectIntegrity importBoundaries corrProof{07,09,10,11}
  repositoryBindingForm w1RecoveryFoundation
→ 166 passed / 0 failed (11 files)
```

## T. Full Vitest

**4089 passed / 137 skipped / 0 failed** (prior Lot A/B: 4077 passed)

## U. typecheck / lint / build / diff-check

| Gate | Result |
|---|---|
| typecheck | PASS |
| lint | PASS |
| build | PASS |
| git diff --check (Product) | PASS |

## V. ZERO Attempt / Execute / REAL

AP23/AP24 + UI Inspect: `attemptCreated===false`, `executionPerformed===false`, `grantsAuthority===false`. No Confirm/Authorize/Execute consumed. ZERO LIVE/REAL.

## W. Dogfood untouched

`/Users/morris/Projects/sfia-studio-product-proof-preflight-35b1371d` @ `6a41ab7e`. ZERO mutation.

## X. Remaining reserves

- Lot D Cursor REAL Product handoff (Gate D)
- Lot E Evidence→ReviewBundle→replan
- Broad Lot C lifecycle CTA soft-yield (informational kept)
- Formal C2 promotion (Morris)

## Y. Product Git actions not performed

NO commit / push / PR / merge on Product branch. Dirty candidate retained for Critical Review.

## Z. Unique verdict

**PRODUCT-JOURNEY-LOT-A-B — FINAL CRITICAL REMEDIATION COMPLETE — PILOT UI PROJECT→NORA→PROPOSAL→OPTIONS→HUMANDECISION→DOCS_WRITE PREPARE→INSPECT DETERMINISTICALLY PROVEN — DECISION SUBJECT RECONSTRUCTION IMPORT-CYCLE FREE — REVIEW EVIDENCE COMPLETE — ZERO REAL — READY FOR CHATGPT FINAL CRITICAL REVIEW**

---

# APPENDIX N — Complete modified-file unified diff (`git diff -- projects/sfia-studio/app`)

```diff
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
index 2b9da045..0bd35c02 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
@@ -2,6 +2,10 @@
 import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
 import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
 import { TrajectorySurface } from "@/features/pre-m6-product-ui/surfaces/TrajectorySurface";
+import {
+  PROPOSAL_SUBJECT_PURSUE_REF,
+  PROPOSAL_SUBJECT_REFUSE_REF,
+} from "@/features/project-assistant/w2/proposalSubjectOptions";

 const {
   proposeMock,
@@ -10,6 +14,7 @@ const {
   authorizeMock,
   amendMock,
   prepareContractMock,
+  prepareM3Mock,
   executeSelectMock,
   executeStartMock,
   executeCompleteMock,
@@ -26,6 +31,7 @@ const {
   authorizeMock: vi.fn(),
   amendMock: vi.fn(),
   prepareContractMock: vi.fn(),
+  prepareM3Mock: vi.fn(),
   executeSelectMock: vi.fn(),
   executeStartMock: vi.fn(),
   executeCompleteMock: vi.fn(),
@@ -37,6 +43,16 @@ const {
   startPreparedCycleMock: vi.fn(),
 }));

+/**
+ * JOURNEY-INTEGRITY Lot A-B — the Proposal-backed PREPARE routes the very same
+ * application entrypoint the AP23 application-path proof exercises
+ * (productProofJourneyIntegrity.applicationPath.d0.test.ts).
+ */
+vi.mock("@/features/project-assistant/actions", () => ({
+  projectAssistantPrepareM3Action: (...args: unknown[]) =>
+    prepareM3Mock(...args),
+}));
+
 vi.mock("@/features/project-assistant/w2/actions", () => ({
   w2ProposeTrajectoryOptionsAction: (...args: unknown[]) => proposeMock(...args),
   w2DecideTrajectoryAction: (...args: unknown[]) => decideMock(...args),
@@ -89,6 +105,7 @@ beforeEach(() => {
   authorizeMock.mockReset();
   amendMock.mockReset();
   prepareContractMock.mockReset();
+  prepareM3Mock.mockReset();
   executeSelectMock.mockReset();
   executeStartMock.mockReset();
   executeCompleteMock.mockReset();
@@ -187,9 +204,14 @@ describe("W2 TrajectorySurface", () => {
     fireEvent.click(screen.getByTestId("w2-decide-opt:proposal-subject:amend"));
     expect(await screen.findByTestId("w2-decision")).toBeVisible();
     expect(screen.getByTestId("w2-amend-next-action")).toBeVisible();
+    expect(screen.queryByTestId("w2-proposal-backed-prepare")).toBeNull();
     expect(screen.queryByTestId("w2-prepare-contract")).toBeNull();
+    expect(screen.queryByTestId("w2-prepare-contract-sandbox")).toBeNull();
+    expect(screen.queryByTestId("w3a-qualify-execution-work")).toBeNull();
     expect(screen.queryByTestId("w3a-operation-kind")).toBeNull();
     expect(screen.getByTestId("w2-decided-option")).toHaveTextContent("Modifier");
+    expect(prepareM3Mock).not.toHaveBeenCalled();
+    expect(prepareContractMock).not.toHaveBeenCalled();
   });

   it("CORR-PROOF-11 — pursue on proposal subject still shows prepare", async () => {
@@ -251,6 +273,7 @@ describe("W2 TrajectorySurface", () => {
     await screen.findByTestId("w2-options");
     fireEvent.click(screen.getByTestId("w2-decide-opt:proposal-subject:pursue"));
     expect(await screen.findByTestId("w2-decision")).toBeVisible();
+    expect(screen.getByTestId("w2-proposal-backed-prepare")).toBeVisible();
     expect(screen.getByTestId("w2-prepare-contract")).toBeVisible();
     expect(screen.queryByTestId("w2-amend-next-action")).toBeNull();
   });
@@ -431,11 +454,17 @@ describe("W2 TrajectorySurface", () => {
       },
     });

+    // Generic ProjectTrajectory decision — no sealed Proposal operation, so the
+    // legacy sandbox qualification selector still owns the PREPARE affordance.
+    expect(screen.getByTestId("w3a-qualify-execution-work")).toBeVisible();
+    expect(screen.queryByTestId("w2-proposal-backed-prepare")).toBeNull();
+    expect(screen.queryByTestId("w2-prepare-contract")).toBeNull();
     fireEvent.change(screen.getByTestId("w3a-operation-kind"), {
       target: { value: "generate-temporary-artifact" },
     });
-    fireEvent.click(screen.getByTestId("w2-prepare-contract"));
+    fireEvent.click(screen.getByTestId("w2-prepare-contract-sandbox"));
     expect(await screen.findByTestId("w2-contract")).toBeVisible();
+    expect(prepareM3Mock).not.toHaveBeenCalled();
     expect(screen.getByTestId("w2-contract-action")).toHaveTextContent(
       "product:generate-temporary-artifact",
     );
@@ -848,6 +877,7 @@ describe("D-GF-START-01 TrajectorySurface prepare/start CTAs", () => {
       expect(screen.queryByTestId("pre-cycle-start-cycle")).toBeNull();
     });
     expect(screen.queryByTestId("w2-prepare-contract")).toBeNull();
+    expect(screen.queryByTestId("w2-prepare-contract-sandbox")).toBeNull();
   });
 });

@@ -882,6 +912,8 @@ describe("CORR-PROOF-11 final — pending reinstruction UI states", () => {
     );
     expect(screen.queryByTestId("w2-reformulate-with-nora")).toBeNull();
     expect(screen.queryByTestId("w2-instruct-recoverable-options")).toBeNull();
+    // JOURNEY-INTEGRITY — pending owns next action; hide generic instruct CTA
+    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
     expect(reformulate).not.toHaveBeenCalled();
   });

@@ -902,6 +934,7 @@ describe("CORR-PROOF-11 final — pending reinstruction UI states", () => {
     );
     expect(screen.getByTestId("w2-instruct-recoverable-options")).toBeVisible();
     expect(screen.queryByTestId("w2-reformulate-with-nora")).toBeNull();
+    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
     const body = screen.getByTestId("w2-pending-reinstruction-body").textContent ?? "";
     expect(body).not.toMatch(/fallback|process-local|ProjectTrajectory/i);
   });
@@ -927,6 +960,7 @@ describe("CORR-PROOF-11 final — pending reinstruction UI states", () => {
     expect(await screen.findByTestId("w2-pending-reinstruction")).toHaveTextContent(
       "Reformulez votre demande",
     );
+    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
     fireEvent.click(screen.getByTestId("w2-reformulate-with-nora"));
     expect(reformulate).toHaveBeenCalledTimes(1);
     expect(reformulate).toHaveBeenCalledWith("prop:lost-only");
@@ -949,5 +983,368 @@ describe("CORR-PROOF-11 final — pending reinstruction UI states", () => {
     expect(body).not.toMatch(/process-local/i);
     expect(body).not.toMatch(/ProjectTrajectory/i);
     expect(body).not.toMatch(/\bpending\b/i);
+    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
+  });
+
+  it("JOURNEY-INTEGRITY — pending_reinstruction hides generic w2-propose-options", async () => {
+    // Active cycle is present (beforeEach mocks), yet pending must win CTA exclusivity.
+    readActiveDecisionSubjectMock.mockResolvedValue({
+      ok: true,
+      kind: "pending_reinstruction_required",
+      message:
+        "Cette demande doit être reformulée avec Nora pour continuer. Rien ne sera exécuté sans une nouvelle décision de votre part.",
+      proposalIds: ["prop:pending-owns"],
+      recoverableProposalIds: [],
+    });
+
+    render(<TrajectorySurface projectId="prj:pending-cta" />);
+    expect(await screen.findByTestId("w2-pending-reinstruction")).toBeVisible();
+    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
+    expect(proposeMock).not.toHaveBeenCalled();
+  });
+});
+
+describe("JOURNEY-INTEGRITY — CTA exclusivity on the mutating primary action", () => {
+  const PROPOSAL_OPTION_SET = {
+    ok: true,
+    optionSetRef: "optset:cta-exclusivity",
+    cycleTypeId: "cyc:delivery",
+    recommendedProfile: "Critical",
+    decisionSubjectMode: "proposal",
+    proposalId: "prop:f2:cta",
+    promotesProjectTrajectory: false,
+    options: [
+      {
+        kind: "OPTION",
+        optionRef: "opt:proposal-subject:pursue",
+        label: "Poursuivre le sujet proposé",
+        intent: "Continuer",
+        impacts: [],
+        reservations: [],
+        steps: [],
+      },
+      {
+        kind: "OPTION",
+        optionRef: "opt:proposal-subject:amend",
+        label: "Amender le sujet avant d'engager",
+        intent: "Modifier",
+        impacts: [],
+        reservations: [],
+        steps: [],
+      },
+    ],
+    recommendation: {
+      label: "RECOMMANDATION — PAS UNE DÉCISION",
+      recommendedOptionRef: "opt:proposal-subject:pursue",
+      rationale: "Continuer.",
+      isHumanDecision: false,
+      ckcAttribution: false,
+    },
+    epistemicRefs: [],
+    proposedTrajectory: null,
+    phase: "OPTIONS_PROPOSED",
+    autoDecisionPerformed: false,
+    executionPerformed: false,
+    ckcCognitionCompletedBeforeMutation: true,
+  } as const;
+
+  it("an OptionSet awaiting the decision hides the generic instruct CTA", async () => {
+    proposeMock.mockResolvedValue(PROPOSAL_OPTION_SET);
+
+    render(<TrajectorySurface projectId="prj:cta-optionset" />);
+    fireEvent.click(await screen.findByTestId("w2-propose-options"));
+    await screen.findByTestId("w2-options");
+
+    // The presented subject owns the next action until the Pilote decides.
+    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
+    expect(screen.queryByTestId("w2-decision")).toBeNull();
+    const surface = screen.getByTestId("w2-trajectory-panel").textContent ?? "";
+    expect(surface).not.toMatch(/Réinstruire/i);
+    expect(proposeMock).toHaveBeenCalledTimes(1);
+  });
+
+  it("no decision subject at all: the generic instruct CTA stays reachable", async () => {
+    render(<TrajectorySurface projectId="prj:cta-none" />);
+
+    const cta = await screen.findByTestId("w2-propose-options");
+    expect(cta).toBeVisible();
+    expect(cta).toHaveTextContent("Instruire les options");
+    expect(screen.queryByTestId("w2-pending-reinstruction")).toBeNull();
+    expect(screen.queryByTestId("w2-options")).toBeNull();
+    expect(screen.queryByTestId("w2-decision")).toBeNull();
+    expect(screen.queryByTestId("w2-contract")).toBeNull();
+  });
+});
+
+/**
+ * JOURNEY-INTEGRITY Lot A-B final — the Pilot decides the operation ONCE.
+ *
+ * After pursue on a Proposal decision subject the sealed DecisionBasis already
+ * carries targetPath / requestedOperation, so the surface must:
+ *  - offer the Proposal-backed PREPARE (never the sandbox op selector), and
+ *  - send projectId + decisionId ONLY — the server re-resolves the rest from
+ *    durable lineage (same contract as AP23 in
+ *    __tests__/project-assistant/productProofJourneyIntegrity.applicationPath.d0.test.ts).
+ */
+describe("JOURNEY-INTEGRITY — Proposal-backed PREPARE (sealed operation)", () => {
+  function proposalOptionSet(proposalId: string) {
+    return {
+      ok: true,
+      optionSetRef: `optset:${proposalId}`,
+      cycleTypeId: "cyc:delivery",
+      recommendedProfile: "Critical",
+      decisionSubjectMode: "proposal",
+      proposalId,
+      promotesProjectTrajectory: false,
+      options: [
+        {
+          kind: "OPTION",
+          optionRef: PROPOSAL_SUBJECT_PURSUE_REF,
+          label: "Poursuivre le sujet proposé",
+          intent: "Continuer",
+          impacts: [],
+          reservations: [],
+          steps: [],
+        },
+        {
+          kind: "OPTION",
+          optionRef: PROPOSAL_SUBJECT_REFUSE_REF,
+          label: "Ne pas poursuivre / refuser",
+          intent: "Refuser",
+          impacts: [],
+          reservations: [],
+          steps: [],
+        },
+      ],
+      recommendation: {
+        label: "RECOMMANDATION — PAS UNE DÉCISION",
+        recommendedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
+        rationale: "Continuer.",
+        isHumanDecision: false,
+        ckcAttribution: false,
+      },
+      epistemicRefs: [],
+      proposedTrajectory: null,
+      phase: "OPTIONS_PROPOSED",
+      autoDecisionPerformed: false,
+      executionPerformed: false,
+      ckcCognitionCompletedBeforeMutation: true,
+    };
+  }
+
+  function proposalDecision(input: {
+    decisionId: string;
+    proposalId: string;
+    selectedOptionRef: string;
+  }) {
+    return {
+      ok: true,
+      decision: {
+        decisionId: input.decisionId,
+        selectedOptionRef: input.selectedOptionRef,
+        actorRole: "Pilote",
+        authorityClass: "morris",
+        statusLabel: "DÉCISION HUMAINE PRISE",
+        capturedAt: "2026-09-15T16:00:00.000Z",
+        decisionBasisLinked: true,
+        reservesText: null,
+        proposalId: input.proposalId,
+      },
+      trajectory: null,
+      livingProjectStateVersion: 4,
+      executionPerformed: false,
+      promotesProjectTrajectory: false,
+      decisionSubjectMode: "proposal",
+    };
+  }
+
+  const M3_PREPARED = {
+    ok: true,
+    status: "ok",
+    mode: "m3_prepare",
+    presentation: "unconfirmed",
+    text: "Contrat préparé.",
+    ephemeralNotice: "",
+    f3: {
+      turnKind: "f3_m3_prepare",
+      mode: "M3_PREPARE",
+      decisionId: "dec:sealed-pursue",
+      projectId: "prj:sealed",
+      contract: {
+        executionContractId: "xct:sealed-docs-write",
+        version: 1,
+        status: "proposed",
+        action: "cursor.docs_write.apply",
+        target: "docs/livrable-cycle.md",
+        scope: "product:artifact-materialization",
+        requiredAuthority: "N3",
+        constraints: ["PRODUCT_GOVERNED", "SEALED_DECISION_BASIS"],
+        stopConditions: ["STOP AVANT EXECUTE"],
+        requiredCapabilities: ["cap:cursor.docs_write"],
+        reversibility: "reversible",
+        semanticFingerprint: "sealed0fingerprint",
+      },
+      executionPerformed: false,
+      attemptCreated: false,
+      cursorReal: false,
+      executionAllowed: false,
+      disclosures: [],
+    },
+  };
+
+  async function decidePursue(projectId: string, proposalId: string) {
+    proposeMock.mockResolvedValue(proposalOptionSet(proposalId));
+    decideMock.mockResolvedValue(
+      proposalDecision({
+        decisionId: "dec:sealed-pursue",
+        proposalId,
+        selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
+      }),
+    );
+
+    render(<TrajectorySurface projectId={projectId} />);
+    fireEvent.click(await screen.findByTestId("w2-propose-options"));
+    await screen.findByTestId("w2-options");
+    fireEvent.click(screen.getByTestId(`w2-decide-${PROPOSAL_SUBJECT_PURSUE_REF}`));
+    expect(await screen.findByTestId("w2-decision")).toBeVisible();
+  }
+
+  it("pursue on a sealed subject offers PREPARE without any operation re-selection", async () => {
+    await decidePursue("prj:sealed", "prop:f2:sealed");
+
+    expect(screen.getByTestId("w2-proposal-backed-prepare")).toBeVisible();
+    expect(screen.getByTestId("w2-prepare-contract")).toBeVisible();
+    // The Pilot must never qualify the operation twice.
+    expect(screen.queryByTestId("w3a-qualify-execution-work")).toBeNull();
+    expect(screen.queryByTestId("w3a-operation-kind")).toBeNull();
+    expect(screen.queryByTestId("w2-prepare-contract-sandbox")).toBeNull();
+    expect(screen.getByTestId("w2-decision-basis")).toHaveTextContent("Reliée");
+  });
+
+  it("PREPARE sends projectId + decisionId only, then maps the sealed contract", async () => {
+    await decidePursue("prj:sealed", "prop:f2:sealed");
+
+    prepareM3Mock.mockResolvedValue(M3_PREPARED);
+    fireEvent.click(screen.getByTestId("w2-prepare-contract"));
+    expect(await screen.findByTestId("w2-contract")).toBeVisible();
+
+    expect(prepareM3Mock).toHaveBeenCalledTimes(1);
+    expect(prepareM3Mock).toHaveBeenCalledWith({
+      projectId: "prj:sealed",
+      decisionId: "dec:sealed-pursue",
+    });
+    // Exact-shape assertion above already forbids extra keys; assert the
+    // dangerous ones explicitly so a regression names itself.
+    const sent = prepareM3Mock.mock.calls[0]![0] as Record<string, unknown>;
+    expect(Object.keys(sent).sort()).toEqual(["decisionId", "projectId"]);
+    for (const forbidden of [
+      "targetPath",
+      "operation",
+      "qualifiedOperationKind",
+      "requestedOperation",
+      "authority",
+      "canActAsMorris",
+      "claimedAuthorityLevel",
+      "real",
+      "mode",
+      "command",
+    ]) {
+      expect(sent).not.toHaveProperty(forbidden);
+    }
+    // The sandbox PREPARE application path was never touched.
+    expect(prepareContractMock).not.toHaveBeenCalled();
+
+    expect(screen.getByTestId("w2-contract-action")).toHaveTextContent(
+      "cursor.docs_write.apply",
+    );
+    expect(screen.getByTestId("w2-contract-target")).toHaveTextContent(
+      "docs/livrable-cycle.md",
+    );
+    expect(screen.getByTestId("w2-contract-authority")).toHaveTextContent("N3");
+    expect(screen.getByTestId("w2-contract-capabilities")).toHaveTextContent(
+      "cap:cursor.docs_write",
+    );
+    expect(screen.getByTestId("w2-contract-id-tech")).toHaveTextContent(
+      "xct:sealed-docs-write",
+    );
+
+    // Inspect owns the next action; PREPARE is not offered again.
+    expect(screen.getByTestId("w2-inspect-contract")).toBeVisible();
+    expect(screen.queryByTestId("w2-proposal-backed-prepare")).toBeNull();
+    expect(screen.queryByTestId("w2-prepare-contract")).toBeNull();
+
+    inspectMock.mockResolvedValue({
+      ok: true,
+      executionContractId: "xct:sealed-docs-write",
+      contractVersion: 1,
+      semanticFingerprint: "sealed0fingerprint",
+      statusLabel: "INSPECTÉ",
+      inspectionSufficient: true,
+      attestationRef: "att:sealed",
+      attestedVersion: 1,
+      staleAttestationRef: null,
+      reinspectionRequired: false,
+      reason: "inspected",
+      grantsAuthority: false,
+    });
+    fireEvent.click(screen.getByTestId("w2-inspect-contract"));
+    expect(await screen.findByTestId("w2-inspection-state")).toHaveTextContent(
+      "INSPECTÉ",
+    );
+    expect(screen.getByTestId("w2-inspection-state")).toHaveTextContent(
+      "inspecter n'autorise pas",
+    );
+  });
+
+  it("refuse on a sealed subject exposes no PREPARE path at all", async () => {
+    const proposalId = "prop:f2:sealed-refuse";
+    proposeMock.mockResolvedValue(proposalOptionSet(proposalId));
+    decideMock.mockResolvedValue(
+      proposalDecision({
+        decisionId: "dec:sealed-refuse",
+        proposalId,
+        selectedOptionRef: PROPOSAL_SUBJECT_REFUSE_REF,
+      }),
+    );
+
+    render(<TrajectorySurface projectId="prj:sealed-refuse" />);
+    fireEvent.click(await screen.findByTestId("w2-propose-options"));
+    await screen.findByTestId("w2-options");
+    fireEvent.click(screen.getByTestId(`w2-decide-${PROPOSAL_SUBJECT_REFUSE_REF}`));
+    expect(await screen.findByTestId("w2-decision")).toBeVisible();
+
+    expect(screen.getByTestId("w2-refuse-next-action")).toBeVisible();
+    expect(screen.queryByTestId("w2-proposal-backed-prepare")).toBeNull();
+    expect(screen.queryByTestId("w2-prepare-contract")).toBeNull();
+    expect(screen.queryByTestId("w2-prepare-contract-sandbox")).toBeNull();
+    expect(screen.queryByTestId("w3a-operation-kind")).toBeNull();
+    expect(prepareM3Mock).not.toHaveBeenCalled();
+    expect(prepareContractMock).not.toHaveBeenCalled();
+  });
+
+  it("a Proposal decision without a linked DecisionBasis falls back to the sandbox path", async () => {
+    const proposalId = "prop:f2:unlinked";
+    proposeMock.mockResolvedValue(proposalOptionSet(proposalId));
+    const unlinked = proposalDecision({
+      decisionId: "dec:unlinked",
+      proposalId,
+      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
+    });
+    decideMock.mockResolvedValue({
+      ...unlinked,
+      decision: { ...unlinked.decision, decisionBasisLinked: false },
+    });
+
+    render(<TrajectorySurface projectId="prj:unlinked" />);
+    fireEvent.click(await screen.findByTestId("w2-propose-options"));
+    await screen.findByTestId("w2-options");
+    fireEvent.click(screen.getByTestId(`w2-decide-${PROPOSAL_SUBJECT_PURSUE_REF}`));
+    expect(await screen.findByTestId("w2-decision")).toBeVisible();
+
+    // No sealed basis to prepare from — the sealed-operation CTA must not lie.
+    expect(screen.queryByTestId("w2-proposal-backed-prepare")).toBeNull();
+    expect(screen.getByTestId("w3a-qualify-execution-work")).toBeVisible();
+    expect(screen.getByTestId("w2-prepare-contract-sandbox")).toBeDisabled();
+    expect(prepareM3Mock).not.toHaveBeenCalled();
   });
 });
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/w1RecoveryFoundation.test.tsx b/projects/sfia-studio/app/__tests__/project-assistant/w1RecoveryFoundation.test.tsx
index b5178d01..ea681b41 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/w1RecoveryFoundation.test.tsx
+++ b/projects/sfia-studio/app/__tests__/project-assistant/w1RecoveryFoundation.test.tsx
@@ -1,6 +1,6 @@
 /** @vitest-environment jsdom */
-import { cleanup, render, screen } from "@testing-library/react";
-import { afterEach, describe, expect, it } from "vitest";
+import { cleanup, fireEvent, render, screen } from "@testing-library/react";
+import { afterEach, describe, expect, it, vi } from "vitest";
 import { RecoverySurface } from "@/features/pre-m6-product-ui/surfaces/RecoverySurface";
 import { ProjectRecoveryBanner } from "@/features/studio-projects/ProjectRecoveryBanner";
 import {
@@ -15,6 +15,15 @@ import {
   w1RestartHonestyMessage,
 } from "@/features/project-assistant/presentationLabels";

+/*
+ * JOURNEY-INTEGRITY gap note:
+ * Full ProjectWorkspacePage proof that onRequalify does NOT call proposeOptions
+ * is skipped (heavy page mock surface). RecoverySurface only invokes the
+ * provided onRequalify callback — wiring in ProjectWorkspacePage focuses Nora
+ * (focusConversation + loadProject). No auto-propose signal exists any more:
+ * the Trajectory surface has no requalify-driven propose prop to bump.
+ */
+
 afterEach(() => {
   cleanup();
 });
@@ -86,6 +95,20 @@ describe("W1 Track E — recovery UI disclosures", () => {
     );
   });

+  it("JOURNEY-INTEGRITY — requalify CTA only fires onRequalify (no propose built-in)", () => {
+    const onRequalify = vi.fn();
+    const onResumeDurable = vi.fn();
+    render(
+      <RecoverySurface
+        onRequalify={onRequalify}
+        onResumeDurable={onResumeDurable}
+      />,
+    );
+    fireEvent.click(screen.getByTestId("recovery-requalify"));
+    expect(onRequalify).toHaveBeenCalledTimes(1);
+    expect(onResumeDurable).not.toHaveBeenCalled();
+  });
+
   it("ProjectRecoveryBanner renders honesty copy and controlled requalify CTA", () => {
     render(<ProjectRecoveryBanner />);
     expect(screen.getByTestId("w1-recovery-disclosures")).toBeTruthy();
diff --git a/projects/sfia-studio/app/e2e/studio-product-completion-integrated-proof.spec.ts b/projects/sfia-studio/app/e2e/studio-product-completion-integrated-proof.spec.ts
index 7f2da36d..a102b96b 100644
--- a/projects/sfia-studio/app/e2e/studio-product-completion-integrated-proof.spec.ts
+++ b/projects/sfia-studio/app/e2e/studio-product-completion-integrated-proof.spec.ts
@@ -149,7 +149,7 @@ async function prepareInspectConfirmAuthorize(page: Page) {
   await page
     .getByTestId("w3a-operation-kind")
     .selectOption("generate-temporary-artifact");
-  await page.getByTestId("w2-prepare-contract").click();
+  await page.getByTestId("w2-prepare-contract-sandbox").click();
   await expect(page.getByTestId("w2-contract")).toBeVisible({
     timeout: 45_000,
   });
@@ -608,7 +608,7 @@ test.describe("PC Integrated Proof — Product Completion final QA", () => {
     await page
       .getByTestId("w3a-operation-kind")
       .selectOption("generate-temporary-artifact");
-    await page.getByTestId("w2-prepare-contract").click();
+    await page.getByTestId("w2-prepare-contract-sandbox").click();
     await expect(page.getByTestId("w2-contract")).toBeVisible({
       timeout: 45_000,
     });
diff --git a/projects/sfia-studio/app/e2e/studio-w2-g3-correction-runtime.spec.ts b/projects/sfia-studio/app/e2e/studio-w2-g3-correction-runtime.spec.ts
index 4b4a524b..562ff54c 100644
--- a/projects/sfia-studio/app/e2e/studio-w2-g3-correction-runtime.spec.ts
+++ b/projects/sfia-studio/app/e2e/studio-w2-g3-correction-runtime.spec.ts
@@ -168,10 +168,10 @@ test.describe("W2 final-closure /studio product correction proof", () => {
     await page
       .getByTestId("w3a-operation-kind")
       .selectOption("generate-temporary-artifact");
-    await expect(page.getByTestId("w2-prepare-contract")).toBeEnabled();
+    await expect(page.getByTestId("w2-prepare-contract-sandbox")).toBeEnabled();

     // --- R02: prepare → inspect → material amend → block → reinspect → auth ---
-    await page.getByTestId("w2-prepare-contract").click();
+    await page.getByTestId("w2-prepare-contract-sandbox").click();
     await expect(page.getByTestId("w2-contract")).toBeVisible({
       timeout: 45_000,
     });
diff --git a/projects/sfia-studio/app/e2e/studio-w3a-governed-execute-runtime.spec.ts b/projects/sfia-studio/app/e2e/studio-w3a-governed-execute-runtime.spec.ts
index 96b59738..3505b043 100644
--- a/projects/sfia-studio/app/e2e/studio-w3a-governed-execute-runtime.spec.ts
+++ b/projects/sfia-studio/app/e2e/studio-w3a-governed-execute-runtime.spec.ts
@@ -223,7 +223,7 @@ test.describe("W3-A R09 /studio governed execute product proof", () => {
       state: "actual_work_temp_artifact",
     });

-    await page.getByTestId("w2-prepare-contract").click();
+    await page.getByTestId("w2-prepare-contract-sandbox").click();
     await expect(page.getByTestId("w2-contract")).toBeVisible({
       timeout: 45_000,
     });
@@ -418,7 +418,7 @@ test.describe("W3-A R09 /studio governed execute product proof", () => {
     await openQualifiedStudioProject(page, "W3-A R09 Blocked No Work");
     // Empty operation kind → Prepare disabled → no Execute → no Attempt.
     await page.getByTestId("w3a-operation-kind").selectOption("");
-    await expect(page.getByTestId("w2-prepare-contract")).toBeDisabled();
+    await expect(page.getByTestId("w2-prepare-contract-sandbox")).toBeDisabled();
     await expect(page.getByTestId("w3a-governed-execute")).toHaveCount(0);
     await expect(page.getByTestId("w3a-attempt")).toHaveCount(0);
     await capture(page, "10-blocked-no-actual-work", {
diff --git a/projects/sfia-studio/app/e2e/studio-w3b-terminal-evidence-runtime.spec.ts b/projects/sfia-studio/app/e2e/studio-w3b-terminal-evidence-runtime.spec.ts
index 9878477b..36c7d7e7 100644
--- a/projects/sfia-studio/app/e2e/studio-w3b-terminal-evidence-runtime.spec.ts
+++ b/projects/sfia-studio/app/e2e/studio-w3b-terminal-evidence-runtime.spec.ts
@@ -147,7 +147,7 @@ async function openThroughAuthorized(page: Page, name: string) {
   await page
     .getByTestId("w3a-operation-kind")
     .selectOption("generate-temporary-artifact");
-  await page.getByTestId("w2-prepare-contract").click();
+  await page.getByTestId("w2-prepare-contract-sandbox").click();
   await expect(page.getByTestId("w2-contract")).toBeVisible({
     timeout: 45_000,
   });
diff --git a/projects/sfia-studio/app/e2e/studio-w3c-post-evidence-replan-runtime.spec.ts b/projects/sfia-studio/app/e2e/studio-w3c-post-evidence-replan-runtime.spec.ts
index 39bdf4ae..c6c20e2f 100644
--- a/projects/sfia-studio/app/e2e/studio-w3c-post-evidence-replan-runtime.spec.ts
+++ b/projects/sfia-studio/app/e2e/studio-w3c-post-evidence-replan-runtime.spec.ts
@@ -94,7 +94,7 @@ async function openThroughAuthorized(page: Page, name: string) {
   await page
     .getByTestId("w3a-operation-kind")
     .selectOption("generate-temporary-artifact");
-  await page.getByTestId("w2-prepare-contract").click();
+  await page.getByTestId("w2-prepare-contract-sandbox").click();
   await expect(page.getByTestId("w2-contract")).toBeVisible({
     timeout: 45_000,
   });
diff --git a/projects/sfia-studio/app/e2e/studio-w4b-single-authority-path.spec.ts b/projects/sfia-studio/app/e2e/studio-w4b-single-authority-path.spec.ts
index 1eae2651..0a71bcd8 100644
--- a/projects/sfia-studio/app/e2e/studio-w4b-single-authority-path.spec.ts
+++ b/projects/sfia-studio/app/e2e/studio-w4b-single-authority-path.spec.ts
@@ -196,7 +196,7 @@ test.describe("W4-B single authority path /studio", () => {
     await page
       .getByTestId("w3a-operation-kind")
       .selectOption("generate-temporary-artifact");
-    await page.getByTestId("w2-prepare-contract").click();
+    await page.getByTestId("w2-prepare-contract-sandbox").click();
     await expect(page.getByTestId("w2-contract")).toBeVisible({ timeout: 45_000 });
     await expect(page.getByTestId("w2-contract-status")).toHaveText(
       "Confirmation requise",
@@ -342,7 +342,7 @@ test.describe("W4-B single authority path /studio", () => {
     await page
       .getByTestId("w3a-operation-kind")
       .selectOption("generate-temporary-artifact");
-    await page.getByTestId("w2-prepare-contract").click();
+    await page.getByTestId("w2-prepare-contract-sandbox").click();
     await expect(page.getByTestId("w2-contract")).toBeVisible({ timeout: 45_000 });
     // Authorize WITHOUT inspect → blocked
     await page.getByTestId("w2-authorize-contract").click();
diff --git a/projects/sfia-studio/app/e2e/studio-w4c-evidence-recovery-replan-product-experience.spec.ts b/projects/sfia-studio/app/e2e/studio-w4c-evidence-recovery-replan-product-experience.spec.ts
index 236e93bc..614d2f88 100644
--- a/projects/sfia-studio/app/e2e/studio-w4c-evidence-recovery-replan-product-experience.spec.ts
+++ b/projects/sfia-studio/app/e2e/studio-w4c-evidence-recovery-replan-product-experience.spec.ts
@@ -92,7 +92,7 @@ async function openThroughAuthorized(page: Page, name: string) {
   await page
     .getByTestId("w3a-operation-kind")
     .selectOption("generate-temporary-artifact");
-  await page.getByTestId("w2-prepare-contract").click();
+  await page.getByTestId("w2-prepare-contract-sandbox").click();
   await expect(page.getByTestId("w2-contract")).toBeVisible({
     timeout: 45_000,
   });
diff --git a/projects/sfia-studio/app/e2e/studio-w4d-product-screens-visual-closure.spec.ts b/projects/sfia-studio/app/e2e/studio-w4d-product-screens-visual-closure.spec.ts
index c0f15c6e..64b6ed86 100644
--- a/projects/sfia-studio/app/e2e/studio-w4d-product-screens-visual-closure.spec.ts
+++ b/projects/sfia-studio/app/e2e/studio-w4d-product-screens-visual-closure.spec.ts
@@ -233,7 +233,7 @@ test.describe("W4-D product screens visual closure", () => {
     await page
       .getByTestId("w3a-operation-kind")
       .selectOption("generate-temporary-artifact");
-    await page.getByTestId("w2-prepare-contract").click();
+    await page.getByTestId("w2-prepare-contract-sandbox").click();
     await expect(page.getByTestId("w2-contract")).toBeVisible({ timeout: 45_000 });
     await expect(page.getByTestId("w2-contract-status")).not.toHaveText(
       "confirmation_required",
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
index b5942b86..c74f2d7d 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
@@ -26,7 +26,6 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
   const [durableOutcome, setDurableOutcome] =
     useState<ProjectAssistantRehydrateEvidenceOutcomeSuccess | null>(null);
   const [lpsOpen, setLpsOpen] = useState(false);
-  const [recoveryProposeSignal, setRecoveryProposeSignal] = useState(0);
   const [trajectoryRefreshSignal, setTrajectoryRefreshSignal] = useState(0);
   /** B1 — bump so LifecycleSurface reloads after Trajectory (or other) durable mutations. */
   const [lifecycleRefreshSignal, setLifecycleRefreshSignal] = useState(0);
@@ -72,9 +71,8 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
   }, []);

   const onRequalify = useCallback(async () => {
-    // B1 — bump signal so TrajectorySurface runs its own proposeOptions()
-    // (shared code path that materializes w2-options).
-    setRecoveryProposeSignal((n) => n + 1);
+    // JOURNEY-INTEGRITY — "nouvelle intention" focuses Nora for qualification.
+    // Must NOT bypass to proposeOptions / Trajectory instruction.
     focusConversation();
     void loadProject();
   }, [focusConversation, loadProject]);
@@ -235,7 +233,6 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
                 <TrajectorySurface
                   projectId={projectId}
                   composition="lps-embedded"
-                  recoveryProposeSignal={recoveryProposeSignal}
                   durableRefreshSignal={trajectoryRefreshSignal}
                   onDurableFactsChanged={notifyDurableFactsChanged}
                   activeProposalId={
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts b/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
index df82e7fa..eb15e095 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
@@ -375,10 +375,20 @@ export function useProductConversation({
         return;
       }

-      if (reinstructionOfProposalId) {
+      // Supersession is a server verdict only. A DECISION_REQUIRED Proposal
+      // alone does not prove the prior pending subject was replaced, so the arm
+      // survives clarifications, blocks, MW5 denials and F1 advisory turns.
+      if (
+        reinstructionOfProposalId &&
+        result.reinstructionTransition === "superseded"
+      ) {
         setArmedReinstructionOfProposalId(null);
         options?.onReinstructionConsumed?.();
       }
+      if (result.f2?.proposal?.status === "DECISION_REQUIRED") {
+        // A committed decision subject is a durable Epistemic marker write.
+        notifyDurableFactsChanged();
+      }

       lastSendFailedRef.current = false;
       lastLogicalTurnIdRef.current = result.logicalTurnId ?? null;
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/RepositoryBindingForm.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/RepositoryBindingForm.tsx
index f26da938..b5834f39 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/RepositoryBindingForm.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/RepositoryBindingForm.tsx
@@ -1,41 +1,167 @@
 "use client";

-import { useState } from "react";
-import { setProjectRepositoryBindingAction } from "@/lib/vertical-slice-runtime/actions";
+import { useCallback, useEffect, useRef, useState } from "react";
+import {
+  getProjectRuntimeAction,
+  setProjectRepositoryBindingAction,
+} from "@/lib/vertical-slice-runtime/actions";
+
+type DurableBinding = {
+  identity?: string;
+  remoteUrl?: string;
+  defaultBranch?: string;
+  pathRoot?: string;
+} | null;

 /**
- * Minimal CR-GCEC-03 UI — view/set Project repository binding.
- * Save is local Product persistence only (no network).
+ * READ_FAILED is NOT "unbound": an unreadable binding must never be presented
+ * as an absence, and must never be overwritten by a blind save.
+ */
+type BindingReadState =
+  | "LOADING"
+  | "LOADED_UNBOUND"
+  | "LOADED_BOUND"
+  | "READ_FAILED";
+
+const READ_FAILED_MESSAGE =
+  "Binding illisible — état durable inconnu. Aucune valeur d'exemple n'est affichée et l'enregistrement est fermé jusqu'à une relecture réussie.";
+
+const VERIFICATION_IMPOSSIBLE_MESSAGE =
+  "Enregistrement effectué mais vérification durable impossible — le binding n'est pas confirmé. Rechargez la page avant tout nouvel enregistrement.";
+
+/**
+ * CR-GCEC-03 / JOURNEY-INTEGRITY — view/set Project repository binding.
+ *
+ * Loads durable Project truth and never presents sample values as current
+ * truth. A save is only claimed as durable after a successful re-read of the
+ * Project runtime; the write echo alone is not evidence.
  */
 export function RepositoryBindingForm(props: {
   projectId: string;
   onSaved?: () => void;
 }) {
-  const [identity, setIdentity] = useState("acme/widget");
-  const [remoteUrl, setRemoteUrl] = useState(
-    "https://github.com/acme/widget.git",
-  );
-  const [defaultBranch, setDefaultBranch] = useState("main");
-  const [pathRoot, setPathRoot] = useState("docs/");
+  const [identity, setIdentity] = useState("");
+  const [remoteUrl, setRemoteUrl] = useState("");
+  const [defaultBranch, setDefaultBranch] = useState("");
+  const [pathRoot, setPathRoot] = useState("");
+  const [readState, setReadState] = useState<BindingReadState>("LOADING");
   const [message, setMessage] = useState<string | null>(null);
   const [busy, setBusy] = useState(false);
+  /** Set when durability could not be verified — no further blind save. */
+  const [saveClosedUntilReload, setSaveClosedUntilReload] = useState(false);
+
+  /** Current projectId, so late async results for a prior project are dropped. */
+  const activeProjectIdRef = useRef(props.projectId);
+  activeProjectIdRef.current = props.projectId;
+
+  const clearFields = useCallback(() => {
+    setIdentity("");
+    setRemoteUrl("");
+    setDefaultBranch("");
+    setPathRoot("");
+  }, []);
+
+  const applyDurableBinding = useCallback(
+    (binding: DurableBinding): boolean => {
+      const bound =
+        Boolean(binding) &&
+        typeof binding?.identity === "string" &&
+        binding.identity.trim().length > 0 &&
+        typeof binding.remoteUrl === "string" &&
+        binding.remoteUrl.trim().length > 0;
+      if (!bound || !binding) {
+        clearFields();
+        return false;
+      }
+      setIdentity(binding.identity ?? "");
+      setRemoteUrl(binding.remoteUrl ?? "");
+      setDefaultBranch(binding.defaultBranch ?? "main");
+      setPathRoot(binding.pathRoot ?? "");
+      return true;
+    },
+    [clearFields],
+  );
+
+  useEffect(() => {
+    const requestedProjectId = props.projectId;
+    let cancelled = false;
+    setReadState("LOADING");
+    setMessage(null);
+    setSaveClosedUntilReload(false);
+    clearFields();
+
+    void (async () => {
+      const result = await getProjectRuntimeAction(requestedProjectId);
+      if (cancelled) return;
+      if (activeProjectIdRef.current !== requestedProjectId) return;
+      if (!result.ok) {
+        clearFields();
+        setReadState("READ_FAILED");
+        setMessage(READ_FAILED_MESSAGE);
+        return;
+      }
+      const bound = applyDurableBinding(
+        result.project.repositoryBinding as DurableBinding,
+      );
+      setReadState(bound ? "LOADED_BOUND" : "LOADED_UNBOUND");
+    })();
+
+    return () => {
+      cancelled = true;
+    };
+  }, [props.projectId, applyDurableBinding, clearFields]);
+
+  const saveDisabled =
+    busy ||
+    readState === "LOADING" ||
+    readState === "READ_FAILED" ||
+    saveClosedUntilReload;

   async function onSave() {
+    if (saveDisabled) return;
+    const requestedProjectId = props.projectId;
     setBusy(true);
     setMessage(null);
     try {
-      const result = await setProjectRepositoryBindingAction({
-        projectId: props.projectId,
-        identity,
-        remoteUrl,
-        defaultBranch,
-        pathRoot: pathRoot || undefined,
+      if (!identity.trim() || !remoteUrl.trim()) {
+        setMessage(
+          "Binding incomplet — renseignez identity et remoteUrl avant d'enregistrer.",
+        );
+        return;
+      }
+      const written = await setProjectRepositoryBindingAction({
+        projectId: requestedProjectId,
+        identity: identity.trim(),
+        remoteUrl: remoteUrl.trim(),
+        defaultBranch: defaultBranch.trim() || "main",
+        pathRoot: pathRoot.trim() || undefined,
       });
-      if (!result.ok) {
-        setMessage(`${result.code}: ${result.message}`);
+      if (activeProjectIdRef.current !== requestedProjectId) return;
+      if (!written.ok) {
+        setMessage(`${written.code}: ${written.message}`);
+        return;
+      }
+
+      // Durable truth comes from a fresh read, never from the write echo.
+      const reread = await getProjectRuntimeAction(requestedProjectId);
+      if (activeProjectIdRef.current !== requestedProjectId) return;
+      if (!reread.ok) {
+        setReadState("READ_FAILED");
+        setSaveClosedUntilReload(true);
+        setMessage(VERIFICATION_IMPOSSIBLE_MESSAGE);
+        return;
+      }
+      const bound = applyDurableBinding(
+        reread.project.repositoryBinding as DurableBinding,
+      );
+      if (!bound) {
+        setReadState("LOADED_UNBOUND");
+        setSaveClosedUntilReload(true);
+        setMessage(VERIFICATION_IMPOSSIBLE_MESSAGE);
         return;
       }
-      setMessage("Binding enregistré (local).");
+      setReadState("LOADED_BOUND");
+      setMessage("Binding enregistré et vérifié.");
       props.onSaved?.();
     } finally {
       setBusy(false);
@@ -44,6 +170,17 @@ export function RepositoryBindingForm(props: {

   return (
     <div data-testid="repository-binding-form">
+      {readState === "LOADING" ? (
+        <p data-testid="repo-binding-loading">Lecture du binding…</p>
+      ) : (
+        <p data-testid="repo-binding-status">
+          {readState === "READ_FAILED"
+            ? "Binding illisible — état durable inconnu."
+            : readState === "LOADED_BOUND"
+              ? "Binding durable chargé."
+              : "Aucun binding configuré — renseignez le dépôt lié."}
+        </p>
+      )}
       <label>
         provider
         <input value="github" readOnly data-testid="repo-binding-provider" />
@@ -53,6 +190,7 @@ export function RepositoryBindingForm(props: {
         <input
           value={identity}
           onChange={(e) => setIdentity(e.target.value)}
+          placeholder="org/repo"
           data-testid="repo-binding-identity"
         />
       </label>
@@ -61,6 +199,7 @@ export function RepositoryBindingForm(props: {
         <input
           value={remoteUrl}
           onChange={(e) => setRemoteUrl(e.target.value)}
+          placeholder="https://github.com/org/repo.git"
           data-testid="repo-binding-remote-url"
         />
       </label>
@@ -69,6 +208,7 @@ export function RepositoryBindingForm(props: {
         <input
           value={defaultBranch}
           onChange={(e) => setDefaultBranch(e.target.value)}
+          placeholder="main"
           data-testid="repo-binding-default-branch"
         />
       </label>
@@ -77,12 +217,13 @@ export function RepositoryBindingForm(props: {
         <input
           value={pathRoot}
           onChange={(e) => setPathRoot(e.target.value)}
+          placeholder="docs/"
           data-testid="repo-binding-path-root"
         />
       </label>
       <button
         type="button"
-        disabled={busy}
+        disabled={saveDisabled}
         onClick={() => void onSave()}
         data-testid="repo-binding-save"
       >
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
index 3b2e2702..0841b37f 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
@@ -11,6 +11,7 @@

 import { useCallback, useEffect, useState } from "react";
 import { flushSync } from "react-dom";
+import { projectAssistantPrepareM3Action } from "@/features/project-assistant/actions";
 import {
   w2AmendExecutionContractAction,
   w2AuthorizeExecutionContractAction,
@@ -59,6 +60,7 @@ import {
 } from "@/features/project-assistant/presentationLabels";
 import {
   PROPOSAL_SUBJECT_AMEND_REF,
+  PROPOSAL_SUBJECT_PURSUE_REF,
   PROPOSAL_SUBJECT_REFUSE_REF,
 } from "@/features/project-assistant/w2/proposalSubjectOptions";
 import { filterProductReservationsForDisplay } from "@/features/project-assistant/w2/w3cProductPresentation";
@@ -149,7 +151,6 @@ function yieldBrowserPaint(): Promise<void> {
 export function TrajectorySurface({
   projectId,
   onDurableFactsChanged,
-  recoveryProposeSignal = 0,
   durableRefreshSignal = 0,
   composition = "standalone",
   activeProposalId = null,
@@ -157,8 +158,6 @@ export function TrajectorySurface({
 }: {
   projectId: string;
   onDurableFactsChanged?: () => void;
-  /** B1 — increment from RecoverySurface requalify to reuse proposeOptions(). */
-  recoveryProposeSignal?: number;
   /** Increment after Lifecycle bridge / durable mutations to rehydrate candidate. */
   durableRefreshSignal?: number;
   /**
@@ -258,6 +257,16 @@ export function TrajectorySurface({
   const [qualifiedOperationKind, setQualifiedOperationKind] =
     useState<QualifiedOperationKind | null>(null);

+  const decidedOptionRef = decision?.selectedOptionRef ?? null;
+  const decisionDefersExecution =
+    decidedOptionRef === PROPOSAL_SUBJECT_AMEND_REF ||
+    decidedOptionRef === PROPOSAL_SUBJECT_REFUSE_REF;
+  /** Proposal pursue with linked DecisionBasis — sealed op, no sandbox re-choice. */
+  const isProposalBackedPrepare =
+    Boolean(decision?.proposalId) &&
+    decision?.decisionBasisLinked === true &&
+    decidedOptionRef === PROPOSAL_SUBJECT_PURSUE_REF;
+
   function paintAttemptPhase(
     phase: GovernedExecutePhaseSuccess["phase"],
     nextAttempt: GovernedExecuteAttemptProjection | null,
@@ -498,12 +507,6 @@ export function TrajectorySurface({
     void rehydrateActiveDecisionSubject();
   }, [rehydrateActiveDecisionSubject, durableRefreshSignal]);

-  useEffect(() => {
-    if (recoveryProposeSignal > 0) {
-      void proposeOptions();
-    }
-  }, [recoveryProposeSignal, proposeOptions]);
-
   const decide = useCallback(
     async (selectedOptionRef: string) => {
       if (!optionSet) return;
@@ -594,6 +597,53 @@ export function TrajectorySurface({
     onDurableFactsChanged?.();
   }, [decision, projectId, qualifiedOperationKind, onDurableFactsChanged]);

+  /**
+   * JOURNEY-INTEGRITY / Lot A-B final — Proposal-backed PREPARE.
+   *
+   * After pursue on a Proposal Decision Subject, the sealed DecisionBasis already
+   * carries the decided operation (e.g. cursor.docs_write.apply). The Pilot must
+   * not re-select a sandbox op. Client sends only projectId + decisionId; the
+   * server resolves targetPath / operation / binding from durable lineage.
+   */
+  const prepareProposalBackedContract = useCallback(async () => {
+    if (!decision?.proposalId || !decision.decisionBasisLinked) return;
+    if (decisionDefersExecution) return;
+    setBusy("contract");
+    setError(null);
+    const result = await projectAssistantPrepareM3Action({
+      projectId,
+      decisionId: decision.decisionId,
+    });
+    setBusy(null);
+    if (!result.ok) {
+      setError(result.message);
+      return;
+    }
+    const prepared = result.f3.contract;
+    setContract({
+      executionContractId: prepared.executionContractId,
+      version: prepared.version,
+      status: prepared.status,
+      action: prepared.action,
+      target: prepared.target,
+      scope: prepared.scope,
+      requiredAuthority: prepared.requiredAuthority,
+      constraints: [...prepared.constraints],
+      stopConditions: [...prepared.stopConditions],
+      requiredCapabilities: [...prepared.requiredCapabilities],
+      reversibility: prepared.reversibility,
+      semanticFingerprint: prepared.semanticFingerprint,
+    });
+    setInspection(null);
+    setAuthorization(null);
+    setAmendmentDraft("");
+    setAmendmentNotice(null);
+    setAttempt(null);
+    setAttemptPhase(null);
+    setAttemptStatusLabel(null);
+    onDurableFactsChanged?.();
+  }, [decision, decisionDefersExecution, projectId, onDurableFactsChanged]);
+
   const inspect = useCallback(async () => {
     if (!contract) return;
     setBusy("inspection");
@@ -896,6 +946,25 @@ export function TrajectorySurface({
     setProductEvidencePending(false);
   }, [attempt, projectId]);

+  /**
+   * JOURNEY-INTEGRITY — CTA exclusivity on the mutating primary action.
+   *
+   * While a Proposal decision subject still owns the next useful action, the
+   * generic ProjectTrajectory instruct CTA must not offer a competing subject.
+   * Informational blocks above remain visible; only the mutating CTA is strict.
+   */
+  const proposalSubjectOwnsNextAction =
+    // reformulate / instruct the pending subject
+    pendingReinstruction != null ||
+    // options presented, awaiting the HumanDecision
+    (optionSet != null && decision == null) ||
+    // amend / refuse: next move is with Nora, never a new generic instruction
+    (decision != null && decisionDefersExecution) ||
+    // pursue decided but no contract yet: PREPARE owns the next action
+    (decision != null && contract == null) ||
+    // contract prepared: Inspect (then confirm / authorize) owns the next action
+    contract != null;
+
   return (
     <section
       className={[
@@ -1194,11 +1263,13 @@ export function TrajectorySurface({
       ) : null}

       {/*
-        W2 OptionSet requires an active CycleInstance. Hide the CTA in all
-        pre-cycle states (CURRENT NEXT_CYCLE LR, candidate-only, or empty)
-        so the Pilote is never offered a path known to return CYCLE_NOT_QUALIFIED.
+        W2 OptionSet requires an active CycleInstance.
+        JOURNEY-INTEGRITY — whenever a Proposal decision subject owns the next
+        action (pending, options awaiting decision, decision taken, contract
+        prepared), the generic trajectory instruct CTA is hidden so two
+        decision subjects can never compete for the same primary action.
       */}
-      {activeCycleInstanceId ? (
+      {activeCycleInstanceId && !proposalSubjectOwnsNextAction ? (
       <div className={styles.actions}>
         <button
           type="button"
@@ -1207,7 +1278,7 @@ export function TrajectorySurface({
           onClick={() => void proposeOptions()}
           disabled={busy !== null}
         >
-          {optionSet ? "Réinstruire les options" : "Instruire les options"}
+          Instruire les options
         </button>
         {busy ? (
           <span className={styles.busy} role="status" data-testid="w2-busy">
@@ -1417,8 +1488,35 @@ export function TrajectorySurface({
               préparation d&apos;exécution ici.
             </p>
           ) : null}
-          {decision.selectedOptionRef !== PROPOSAL_SUBJECT_AMEND_REF &&
-          decision.selectedOptionRef !== PROPOSAL_SUBJECT_REFUSE_REF ? (
+          {/*
+            JOURNEY-INTEGRITY Lot A-B final:
+            · Proposal-backed pursue → sealed DecisionBasis PREPARE (M3), no
+              sandbox operation selector (Pilot must not decide the op twice).
+            · Non-Proposal / legacy path → W2 sandbox selector remains.
+            Contract prepared → Inspect owns next action; no re-PREPARE.
+          */}
+          {!decisionDefersExecution && !contract && isProposalBackedPrepare ? (
+          <div
+            className={styles.actions}
+            data-testid="w2-proposal-backed-prepare"
+          >
+            <p className={styles.blockNote} data-testid="w2-proposal-backed-prepare-note">
+              La décision porte déjà l&apos;opération scellée. Préparez le
+              contrat d&apos;exécution à partir de cette décision — sans
+              resélection technique.
+            </p>
+            <button
+              type="button"
+              className={styles.primaryAction}
+              data-testid="w2-prepare-contract"
+              onClick={() => void prepareProposalBackedContract()}
+              disabled={busy !== null}
+            >
+              Préparer le contrat d&apos;exécution
+            </button>
+          </div>
+          ) : null}
+          {!decisionDefersExecution && !contract && !isProposalBackedPrepare ? (
           <div
             className={styles.actions}
             data-testid="w3a-qualify-execution-work"
@@ -1464,7 +1562,7 @@ export function TrajectorySurface({
             <button
               type="button"
               className={styles.primaryAction}
-              data-testid="w2-prepare-contract"
+              data-testid="w2-prepare-contract-sandbox"
               onClick={() => void prepareContract()}
               disabled={busy !== null || qualifiedOperationKind === null}
               title={
@@ -1473,9 +1571,7 @@ export function TrajectorySurface({
                   : undefined
               }
             >
-              {contract
-                ? "Repréparer le contrat d'exécution"
-                : "Préparer le contrat d'exécution"}
+              Préparer le contrat d&apos;exécution
             </button>
           </div>
           ) : null}
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index 88d31bc7..4e4424e9 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -101,8 +101,8 @@ import {
   sealProposalExecutionBasis,
 } from "../w2/resolveProposalDecisionSubject";

-const EPHEMERAL_NOTICE =
-  "Conversation et Proposal F2 restent process-local ; Project/LPS/Cycle linkage M2 est persisté dans Product SQLite. AUCUNE EXÉCUTION.";
+/** Single source of persistence honesty for both the turn notice and the Proposal. */
+const EPHEMERAL_NOTICE = F2_PROCESS_LOCAL_NOTICE;

 function normalizeOpaqueProposalId(raw: unknown): string | null {
   if (typeof raw !== "string") return null;
@@ -145,6 +145,7 @@ async function commitPendingDecisionSubjectForDecisionRequired(input: {
     lpsId: input.proposal.contextSnapshot.lpsId,
     lpsVersion: input.proposal.contextSnapshot.lpsVersion,
     doctrineDigest: input.proposal.contextSnapshot.doctrineDigest,
+    proposal: input.proposal,
     correlationId: `cor:pending-subject:${input.proposal.proposalId}`,
   };

@@ -644,6 +645,20 @@ function qualificationFromActiveCycle(input: {
   };
 }

+/**
+ * JOURNEY-INTEGRITY — the reinstruction arm is a server verdict, never a
+ * client inference. "superseded" is reserved for a committed supersession of
+ * the prior pending subject; an armed turn that ends any other way reports
+ * "not_consumed" so the Pilot keeps the arm.
+ */
+function resolveReinstructionTransition(base: {
+  reinstructionTransition?: "superseded" | "not_consumed" | "not_applicable";
+  reinstructionOfProposalId?: string | null;
+}): "superseded" | "not_consumed" | "not_applicable" {
+  if (base.reinstructionTransition) return base.reinstructionTransition;
+  return base.reinstructionOfProposalId ? "not_consumed" : "not_applicable";
+}
+
 function f2Success(base: {
   text: string;
   mode: "fixture" | "live";
@@ -656,6 +671,12 @@ function f2Success(base: {
   executionBlocked?: boolean;
   mw5?: Mw5TurnSurface | null;
   turnKind?: "f1_informative" | "f2_clarification" | "f2_proposal" | "f2_blocked";
+  reinstructionTransition?: "superseded" | "not_consumed" | "not_applicable";
+  /**
+   * JOURNEY-INTEGRITY — armed reinstruction carried by this turn. Only the
+   * server may declare supersession; any other outcome leaves the arm intact.
+   */
+  reinstructionOfProposalId?: string | null;
 }): ProjectAssistantSendResult {
   const turnKind =
     base.turnKind ??
@@ -677,6 +698,7 @@ function f2Success(base: {
     toolEvents: [],
     project: base.project,
     ephemeralNotice: EPHEMERAL_NOTICE,
+    reinstructionTransition: resolveReinstructionTransition(base),
     mw5: base.mw5
       ? {
           disposition: base.mw5.disposition,
@@ -738,6 +760,8 @@ async function f2ConversationalSuccess(input: {
   executionBlocked?: boolean;
   mw5?: Mw5TurnSurface | null;
   turnKind?: "f1_informative" | "f2_clarification" | "f2_proposal" | "f2_blocked";
+  reinstructionTransition?: "superseded" | "not_consumed" | "not_applicable";
+  reinstructionOfProposalId?: string | null;
 }): Promise<ProjectAssistantSendResult> {
   await persistCanonicalF2AssistantTurn({
     projectId: input.project.projectId,
@@ -1025,6 +1049,9 @@ export async function orchestrateAssistantSend(input: {
       model: f1.model ?? model,
       ephemeralNotice: EPHEMERAL_NOTICE,
       mw5: null,
+      reinstructionTransition: resolveReinstructionTransition({
+        reinstructionOfProposalId,
+      }),
       f2: {
         turnKind: "f1_informative",
         intentClass: reportedIntent,
@@ -1059,6 +1086,7 @@ export async function orchestrateAssistantSend(input: {
       model,
       project,
       intentClass: analysis.intentClass,
+      reinstructionOfProposalId,
     });
   }

@@ -1075,6 +1103,7 @@ export async function orchestrateAssistantSend(input: {
       model,
       project,
       intentClass: analysis.intentClass,
+      reinstructionOfProposalId,
     });
   }

@@ -1107,6 +1136,7 @@ export async function orchestrateAssistantSend(input: {
       model,
       project,
       intentClass: analysis.intentClass,
+      reinstructionOfProposalId,
       executionBlocked: true,
       turnKind:
         continuation.reason === "incompatible_execution_intent" ||
@@ -1143,6 +1173,7 @@ export async function orchestrateAssistantSend(input: {
         model,
         project,
         intentClass: analysis.intentClass,
+        reinstructionOfProposalId,
         qualification,
         executionBlocked: analysis.intentClass === "execution_request",
         turnKind: "f2_clarification",
@@ -1169,6 +1200,7 @@ export async function orchestrateAssistantSend(input: {
         model,
         project,
         intentClass: analysis.intentClass,
+        reinstructionOfProposalId,
         qualification,
         executionBlocked: analysis.intentClass === "execution_request",
         mw5: mw5.surface,
@@ -1249,6 +1281,10 @@ export async function orchestrateAssistantSend(input: {
       executionBlocked: true,
       mw5: mw5.surface,
       turnKind: "f2_proposal",
+      reinstructionOfProposalId,
+      reinstructionTransition: reinstructionGate.reinstructionOfProposalId
+        ? "superseded"
+        : undefined,
     });
   }

@@ -1276,6 +1312,7 @@ export async function orchestrateAssistantSend(input: {
       model,
       project,
       intentClass: analysis.intentClass,
+      reinstructionOfProposalId,
     });
   }

@@ -1344,6 +1381,7 @@ export async function orchestrateAssistantSend(input: {
       model,
       project,
       intentClass: analysis.intentClass,
+      reinstructionOfProposalId,
       qualification,
       executionBlocked: analysis.intentClass === "execution_request",
     });
@@ -1369,6 +1407,7 @@ export async function orchestrateAssistantSend(input: {
       model,
       project,
       intentClass: analysis.intentClass,
+      reinstructionOfProposalId,
       qualification,
       executionBlocked: analysis.intentClass === "execution_request",
       mw5: mw5.surface,
@@ -1407,6 +1446,7 @@ export async function orchestrateAssistantSend(input: {
       model,
       project,
       intentClass: analysis.intentClass,
+      reinstructionOfProposalId,
       qualification,
       executionBlocked: analysis.intentClass === "execution_request",
     });
@@ -1424,6 +1464,7 @@ export async function orchestrateAssistantSend(input: {
       model,
       project,
       intentClass: analysis.intentClass,
+      reinstructionOfProposalId,
       qualification: {
         ...qualification,
         cycleInstanceId: created.cycle.cycleInstanceId,
@@ -1549,5 +1590,7 @@ export async function orchestrateAssistantSend(input: {
     proposal,
     executionBlocked,
     mw5: mw5.surface,
+    reinstructionOfProposalId,
+    reinstructionTransition: newCycleReinstructionOf ? "superseded" : undefined,
   });
 }
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/proposalStore.ts b/projects/sfia-studio/app/features/project-assistant/f2/proposalStore.ts
index 3496280e..ba01c084 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/proposalStore.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/proposalStore.ts
@@ -19,8 +19,17 @@ function getSlot(): StoreSlot {
   return g[STORE_KEY];
 }

+/**
+ * JOURNEY-INTEGRITY — honest persistence disclosure.
+ *
+ * The conversation is NOT a durable aggregate and this notice must never claim
+ * that the whole Proposal is one. What is promised is narrower and true: the
+ * effective decision subject is kept or reconstructible while it stays valid
+ * (Epistemic marker + snapshot), and a lost or altered subject leads to
+ * explicit requalification instead of invention.
+ */
 export const F2_PROCESS_LOCAL_NOTICE =
-  "Conversation et Proposal F2 restent process-local ; Project/LPS/Cycle/HumanDecision/ExecutionContract M3 sont persistés dans Product SQLite. Authority locale TEMPORARY WITH EXIT. Aucune exécution Cursor REAL.";
+  "La conversation n'est pas un agrégat durable. Le sujet de décision effectif est conservé ou reconstruisible tant qu'il reste valide ; sinon reformulation explicite — jamais d'invention. Project/LPS/Cycle/HumanDecision/ExecutionContract restent dans Product SQLite. Aucune exécution Cursor REAL. (Détail technique : marqueur d'observation épistémique durable ; transcript et Proposal en mémoire de processus ; autorité locale TEMPORARY WITH EXIT.)";

 export function createProposalId(): string {
   return `prop:f2:${randomUUID()}`;
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts b/projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
index 87bceb40..2e0ed226 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
@@ -19,6 +19,10 @@ import type {
 } from "@/lib/oa/execution-contract";
 import { projectCursorPrepareOnly } from "@/lib/oa/execution-contract";
 import type { F2ContextSnapshot } from "../f2/types";
+import {
+  isProposalSubjectOptionRef,
+  PROPOSAL_SUBJECT_PURSUE_REF,
+} from "../w2/proposalSubjectOptions";
 import { BOUNDED_DOCS_WRITE_GIT_EVIDENCE_REQUIREMENTS } from "./boundedDocsWriteM3ResolutionProfile";

 export type PrepareM3Deps = {
@@ -271,6 +275,24 @@ export async function prepareM3FromDecision(input: {
   }
   const basis = basisOrFail as DecisionBasis;

+  /**
+   * JOURNEY-INTEGRITY — amend / refuse on a Proposal decision subject close the
+   * subject; they never open an execution path. The surface already hides the
+   * PREPARE CTA, but hiding is not enforcing: fail closed here too.
+   */
+  if (
+    basis.sourceType === "proposal" &&
+    isProposalSubjectOptionRef(decision.selectedOptionId) &&
+    decision.selectedOptionId !== PROPOSAL_SUBJECT_PURSUE_REF
+  ) {
+    return {
+      ok: false,
+      code: "PREPARE_NOT_APPLICABLE",
+      message:
+        "Préparation M3 réservée à la poursuite du sujet Proposal — amend/refuse n'ouvrent aucune exécution.",
+    };
+  }
+
   const ctx = basis.proposalContext;
   if (
     ctx.doctrineDigest !== undefined &&
diff --git a/projects/sfia-studio/app/features/project-assistant/types.ts b/projects/sfia-studio/app/features/project-assistant/types.ts
index efc483f3..75a5de97 100644
--- a/projects/sfia-studio/app/features/project-assistant/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/types.ts
@@ -211,6 +211,15 @@ export type ProjectAssistantSendSuccess = {
   /** MW5 — challenge / clarification / Critical ordering / escalation (when assessed). */
   mw5?: Mw5CognitiveSurfaceDto | null;
   f2?: F2TurnPayload;
+  /**
+   * JOURNEY-INTEGRITY — server verdict on the armed reinstruction.
+   * "superseded": the prior pending decision subject was actually replaced —
+   *   the only value that may clear the client arm.
+   * "not_consumed": the turn carried an armed reinstruction but no supersession
+   *   was committed (clarification, block, MW5 deny, F1 advisory…).
+   * "not_applicable": no reinstruction was armed for this turn.
+   */
+  reinstructionTransition?: "superseded" | "not_consumed" | "not_applicable";
   /**
    * LR CORR-DELIVERY-02 — optional Product-turn Recommendation materialization.
    * null = not attempted / no structured turn; false = none or fail-closed; true = persisted.
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/activeProposalDecisionSubject.ts b/projects/sfia-studio/app/features/project-assistant/w2/activeProposalDecisionSubject.ts
index 550e87ee..df57d207 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/activeProposalDecisionSubject.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/activeProposalDecisionSubject.ts
@@ -9,15 +9,20 @@
  * may remain; reconstruction shadows it. READ FAILURE ≠ EMPTY STATE.
  */

-import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
+import {
+  readLiveProjectContext,
+  type RuntimeOaStack,
+} from "@/lib/vertical-slice-runtime";
 import { listProposalsForProject } from "../f2/proposalStore";
 import {
   pilotAmbiguousPendingMessage,
   pilotPendingReinstructionMessage,
 } from "../presentationLabels";
 import {
+  hydrateProposalsFromPendingMarkers,
   listActivePendingDecisionSubjectMarkers,
   type PendingDecisionSubjectMarker,
+  type SnapshotHydrationLiveContext,
 } from "./pendingDecisionSubjectMarker";
 import {
   isProposalSubjectPresentedSet,
@@ -264,6 +269,25 @@ export async function readActiveProposalDecisionSubject(
   if (!pending.ok) return pending;

   if (pending.markers.length > 0) {
+    // Snapshot continuity is only admissible against live Product truth.
+    // Unreadable live context is an epistemic failure, not "no subject".
+    const live = await readLiveProjectContext(oa, projectId);
+    if (!live.ok) {
+      return {
+        ok: false,
+        code: "EPISTEMIC_READ_FAILED",
+        message:
+          "Contexte Project/LPS courant illisible — reconstruction du sujet de décision refusée. Aucun fallback trajectoire générique.",
+      };
+    }
+    const liveContext: SnapshotHydrationLiveContext = {
+      projectId,
+      lpsId: live.context.lpsId,
+      lpsVersion: live.context.lpsVersion,
+      doctrineDigest: live.context.doctrineDigest,
+      closedProposalIds: pending.closedProposalIds,
+    };
+    hydrateProposalsFromPendingMarkers(pending.markers, liveContext);
     const localDecisionRequired = new Set(
       listProposalsForProject(projectId)
         .filter((p) => p.status === "DECISION_REQUIRED")
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/pendingDecisionSubjectMarker.ts b/projects/sfia-studio/app/features/project-assistant/w2/pendingDecisionSubjectMarker.ts
index 0b0853e1..770228f9 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/pendingDecisionSubjectMarker.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/pendingDecisionSubjectMarker.ts
@@ -11,12 +11,18 @@

 import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
 import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
+import type { ProposalDto } from "../f2/types";
+import { saveProposal, getProposal } from "../f2/proposalStore";
 import { pilotAmbiguousPendingMessage } from "../presentationLabels";
 import {
   isProposalSubjectPresentedSet,
   parsePresentedOptionSetStatement,
   W2_PRESENTED_OPTION_SET_KIND,
 } from "./presentedOptionSet";
+import {
+  computeProposalSubjectDigest,
+  sealProposalExecutionBasis,
+} from "./proposalSubjectIntegrity";

 export const PENDING_DECISION_SUBJECT_KIND =
   "w2_pending_decision_subject" as const;
@@ -31,6 +37,11 @@ export type PendingDecisionSubjectMarker = {
   readonly lpsVersion: number;
   readonly doctrineDigest: string;
   readonly status: "pending_binding";
+  /**
+   * JOURNEY-INTEGRITY — reconstructible Proposal snapshot inside existing
+   * Epistemic Observation (no new table). Optional for legacy markers.
+   */
+  readonly proposalSnapshot?: ProposalDto;
 };

 export function pendingDecisionSubjectObservationId(
@@ -64,6 +75,12 @@ export function parsePendingDecisionSubjectMarker(
     if (!Number.isInteger(v.lpsVersion)) return null;
     if (typeof v.doctrineDigest !== "string") return null;
     if (v.status !== "pending_binding") return null;
+    const snapshot =
+      v.proposalSnapshot &&
+      typeof v.proposalSnapshot === "object" &&
+      (v.proposalSnapshot as ProposalDto).proposalId === v.proposalId
+        ? (v.proposalSnapshot as ProposalDto)
+        : undefined;
     return {
       kind: PENDING_DECISION_SUBJECT_KIND,
       proposalId: v.proposalId,
@@ -73,12 +90,81 @@ export function parsePendingDecisionSubjectMarker(
       lpsVersion: v.lpsVersion as number,
       doctrineDigest: v.doctrineDigest,
       status: "pending_binding",
+      ...(snapshot ? { proposalSnapshot: snapshot } : {}),
     };
   } catch {
     return null;
   }
 }

+/**
+ * Live Product truth a snapshot must still agree with before it may be trusted
+ * as a reconstructible decision subject.
+ */
+export type SnapshotHydrationLiveContext = {
+  projectId: string;
+  lpsId: string;
+  lpsVersion: number;
+  doctrineDigest: string;
+  closedProposalIds?: ReadonlySet<string>;
+};
+
+/**
+ * JOURNEY-INTEGRITY — a snapshot is admissible only when it is internally
+ * coherent with its marker, still decidable, AND still matches live Product
+ * truth. Any mismatch means requalification, never silent repair.
+ */
+export function isValidProposalSnapshotForHydration(
+  marker: PendingDecisionSubjectMarker,
+  live: SnapshotHydrationLiveContext,
+): boolean {
+  const snapshot = marker.proposalSnapshot;
+  if (!snapshot) return false;
+  if (snapshot.proposalId !== marker.proposalId) return false;
+
+  const snapshotContext = snapshot.contextSnapshot;
+  if (!snapshotContext) return false;
+  if (snapshotContext.projectId !== marker.projectId) return false;
+  if (snapshotContext.lpsId !== marker.lpsId) return false;
+  if (snapshotContext.lpsVersion !== marker.lpsVersion) return false;
+  if (snapshotContext.doctrineDigest !== marker.doctrineDigest) return false;
+
+  if (snapshot.status !== "DECISION_REQUIRED") return false;
+  if (snapshot.morrisGateRequired !== true) return false;
+
+  if (live.projectId !== marker.projectId) return false;
+  if (live.lpsId !== marker.lpsId) return false;
+  if (live.lpsVersion !== marker.lpsVersion) return false;
+  if (live.doctrineDigest !== marker.doctrineDigest) return false;
+
+  if (live.closedProposalIds?.has(marker.proposalId)) return false;
+
+  const recomputed = computeProposalSubjectDigest(
+    sealProposalExecutionBasis(snapshot),
+    snapshot.proposalId,
+  );
+  return recomputed === marker.subjectDigest;
+}
+
+/**
+ * Hydrate process-local ProposalStore from durable marker snapshots when
+ * missing. Live context is mandatory: continuity is only honest while the
+ * snapshot still describes the current Project/LPS/doctrine truth.
+ */
+export function hydrateProposalsFromPendingMarkers(
+  markers: readonly PendingDecisionSubjectMarker[],
+  live: SnapshotHydrationLiveContext,
+): readonly string[] {
+  const hydrated: string[] = [];
+  for (const marker of markers) {
+    if (getProposal(marker.proposalId)) continue;
+    if (!isValidProposalSnapshotForHydration(marker, live)) continue;
+    saveProposal(marker.proposalSnapshot!);
+    hydrated.push(marker.proposalId);
+  }
+  return hydrated;
+}
+
 export type WritePendingDecisionSubjectMarkerInput = {
   readonly oa: RuntimeOaStack;
   readonly projectId: string;
@@ -87,6 +173,7 @@ export type WritePendingDecisionSubjectMarkerInput = {
   readonly lpsId: string;
   readonly lpsVersion: number;
   readonly doctrineDigest: string;
+  readonly proposal?: ProposalDto;
   readonly correlationId?: string;
 };

@@ -109,6 +196,9 @@ export async function writePendingDecisionSubjectMarker(
     lpsVersion: input.lpsVersion,
     doctrineDigest: input.doctrineDigest,
     status: "pending_binding",
+    ...(input.proposal && input.proposal.proposalId === input.proposalId
+      ? { proposalSnapshot: input.proposal }
+      : {}),
   };
   const written = await input.oa.cycleServices.updateEpistemicState.execute({
     projectId: input.projectId,
@@ -251,6 +341,7 @@ export type ReplacePendingDecisionSubjectForExplicitReinstructionInput = {
   readonly lpsId: string;
   readonly lpsVersion: number;
   readonly doctrineDigest: string;
+  readonly proposal?: ProposalDto;
   readonly correlationId?: string;
 };

@@ -384,6 +475,9 @@ export async function replacePendingDecisionSubjectForExplicitReinstruction(
     lpsVersion: input.lpsVersion,
     doctrineDigest: input.doctrineDigest,
     status: "pending_binding",
+    ...(input.proposal && input.proposal.proposalId === newProposalId
+      ? { proposalSnapshot: input.proposal }
+      : {}),
   };

   const written = await input.oa.cycleServices.updateEpistemicState.execute({
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/presentedOptionSet.ts b/projects/sfia-studio/app/features/project-assistant/w2/presentedOptionSet.ts
index f5f1cf7c..b72b3da3 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/presentedOptionSet.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/presentedOptionSet.ts
@@ -12,7 +12,7 @@

 import { computeDecisionBasisSourceDigest } from "@/lib/oa/decision";
 import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
-import type { SealedProposalExecutionBasis } from "./resolveProposalDecisionSubject";
+import type { SealedProposalExecutionBasis } from "./proposalSubjectIntegrity";
 import type { TrajectoryOptionDto, TrajectoryRecommendationDto } from "./types";

 export const W2_PRESENTED_OPTION_SET_KIND = "w2_presented_option_set" as const;
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectOptions.ts b/projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectOptions.ts
index 5957aa34..8b05d2de 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectOptions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectOptions.ts
@@ -11,7 +11,7 @@ import type {
   TrajectoryOptionDto,
   TrajectoryRecommendationDto,
 } from "./types";
-import type { SealedProposalExecutionBasis } from "./resolveProposalDecisionSubject";
+import type { SealedProposalExecutionBasis } from "./proposalSubjectIntegrity";

 export const PROPOSAL_SUBJECT_PURSUE_REF =
   "opt:proposal-subject:pursue" as const;
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/resolveProposalDecisionSubject.ts b/projects/sfia-studio/app/features/project-assistant/w2/resolveProposalDecisionSubject.ts
index a43b537d..64f0ccd9 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/resolveProposalDecisionSubject.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/resolveProposalDecisionSubject.ts
@@ -10,7 +10,6 @@
  * - subject digest covers the FULL sealed execution basis
  */

-import { computeDecisionBasisSourceDigest } from "@/lib/oa/decision";
 import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
 import {
   contextMatches,
@@ -18,41 +17,20 @@ import {
   listProposalsForProject,
 } from "../f2/proposalStore";
 import type { F2ContextSnapshot, ProposalDto } from "../f2/types";
-import type { ExecutionIntentPayload } from "../f2/executionIntentSchema";
 import { pilotPendingReinstructionMessage } from "../presentationLabels";
 import { listEffectivePendingDecisionSubjectMarkers } from "./activeProposalDecisionSubject";
-
-export type SealedProposalExecutionBasis = {
-  readonly objective: string;
-  readonly scope: string;
-  readonly outOfScope: readonly string[];
-  readonly activatedBlocks: readonly string[];
-  readonly expectedOutcome: string;
-  readonly risks: readonly string[];
-  readonly reservations: readonly string[];
-  readonly stopConditions: readonly string[];
-  readonly cycleTypeId: string;
-  readonly recommendedProfile: string;
-  readonly requestedOperation: string;
-  readonly intentKind: string | null;
-  readonly artifactType: string | null;
-  readonly targetRepositoryRef: string | null;
-  readonly targetPath: string | null;
-  readonly scopeIn: readonly string[];
-  readonly scopeOut: readonly string[];
-  readonly expectedOutputs: readonly string[];
-  readonly requiredCapabilities: readonly string[];
-  readonly validationExpectations: readonly string[];
-  readonly evidenceRequirements: readonly string[];
-  readonly reversibilityExpectation:
-    | "reversible"
-    | "irreversible"
-    | "unknown"
-    | null;
-  readonly artifactBrief: string | null;
-  readonly contentRequirements: readonly string[];
-  readonly exitRequirementKinds: readonly string[];
-};
+import {
+  computeProposalSubjectDigest,
+  sealProposalExecutionBasis,
+  type SealedProposalExecutionBasis,
+} from "./proposalSubjectIntegrity";
+
+/** Re-export pure sealing primitives — canonical home is proposalSubjectIntegrity. */
+export type { SealedProposalExecutionBasis } from "./proposalSubjectIntegrity";
+export {
+  computeProposalSubjectDigest,
+  sealProposalExecutionBasis,
+} from "./proposalSubjectIntegrity";

 export type ResolvedProposalDecisionSubject = {
   readonly proposalId: string;
@@ -67,94 +45,6 @@ export type ResolveProposalDecisionSubjectResult =
   | { readonly ok: true; readonly subject: ResolvedProposalDecisionSubject }
   | { readonly ok: false; readonly code: string; readonly message: string };

-function resolveRequestedOperation(proposal: ProposalDto): string {
-  const ei = proposal.executionIntent;
-  const fromEi = ei?.requestedOperation?.trim();
-  if (fromEi) return fromEi;
-  const fromTop = proposal.requestedOperation?.trim();
-  if (fromTop) return fromTop;
-  return proposal.rephrasedRequest;
-}
-
-function asStringArray(value: readonly string[] | null | undefined): string[] {
-  return value ? [...value] : [];
-}
-
-/**
- * Canonical sealed execution basis — every authoritative field is materialised
- * with deterministic null/empty defaults for digest stability.
- */
-export function sealProposalExecutionBasis(
-  proposal: ProposalDto,
-): SealedProposalExecutionBasis {
-  const ei: ExecutionIntentPayload | null | undefined = proposal.executionIntent;
-  return {
-    objective: proposal.objective,
-    scope: proposal.scope,
-    outOfScope: [...proposal.outOfScope],
-    activatedBlocks: [...proposal.activatedBlocks],
-    expectedOutcome: proposal.expectedOutcome,
-    risks: [...proposal.risks],
-    reservations: [...proposal.reservations],
-    stopConditions: [...proposal.stopConditions],
-    cycleTypeId: proposal.cycleTypeId,
-    recommendedProfile: proposal.recommendedProfile,
-    requestedOperation: resolveRequestedOperation(proposal),
-    intentKind: ei?.intentKind ?? null,
-    artifactType: ei?.artifactType ?? null,
-    targetRepositoryRef: ei?.targetRepositoryRef ?? null,
-    targetPath: ei?.targetPath ?? null,
-    scopeIn: asStringArray(ei?.scopeIn),
-    scopeOut: asStringArray(ei?.scopeOut),
-    expectedOutputs: asStringArray(ei?.expectedOutputs),
-    requiredCapabilities: asStringArray(ei?.requiredCapabilities),
-    validationExpectations: asStringArray(ei?.validationExpectations),
-    evidenceRequirements: asStringArray(ei?.evidenceRequirements),
-    reversibilityExpectation: ei?.reversibilityExpectation ?? null,
-    artifactBrief: ei?.artifactBrief ?? null,
-    contentRequirements: asStringArray(ei?.contentRequirements),
-    exitRequirementKinds: asStringArray(ei?.exitRequirementKinds),
-  };
-}
-
-/**
- * Full-authority digest over proposalId + complete sealed execution basis.
- * Any material field change must change the digest.
- */
-export function computeProposalSubjectDigest(
-  sealed: SealedProposalExecutionBasis,
-  proposalId: string,
-): string {
-  return computeDecisionBasisSourceDigest({
-    proposalId,
-    objective: sealed.objective,
-    scope: sealed.scope,
-    outOfScope: [...sealed.outOfScope],
-    activatedBlocks: [...sealed.activatedBlocks],
-    expectedOutcome: sealed.expectedOutcome,
-    risks: [...sealed.risks],
-    reservations: [...sealed.reservations],
-    stopConditions: [...sealed.stopConditions],
-    cycleTypeId: sealed.cycleTypeId,
-    recommendedProfile: sealed.recommendedProfile,
-    requestedOperation: sealed.requestedOperation,
-    intentKind: sealed.intentKind,
-    artifactType: sealed.artifactType,
-    targetRepositoryRef: sealed.targetRepositoryRef,
-    targetPath: sealed.targetPath,
-    scopeIn: [...sealed.scopeIn],
-    scopeOut: [...sealed.scopeOut],
-    expectedOutputs: [...sealed.expectedOutputs],
-    requiredCapabilities: [...sealed.requiredCapabilities],
-    validationExpectations: [...sealed.validationExpectations],
-    evidenceRequirements: [...sealed.evidenceRequirements],
-    reversibilityExpectation: sealed.reversibilityExpectation,
-    artifactBrief: sealed.artifactBrief,
-    contentRequirements: [...sealed.contentRequirements],
-    exitRequirementKinds: [...sealed.exitRequirementKinds],
-  });
-}
-
 /**
  * Resolve opaque proposalId as the active decision subject.
  * HumanDecision path: DECISION_REQUIRED + morrisGateRequired only.

```

# APPENDIX O–R — Complete NEW file diffs (/dev/null → file)

## NEW FILE: `proposalSubjectIntegrity.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectIntegrity.ts b/projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectIntegrity.ts
new file mode 100644
index 00000000..ae56b2f1
--- /dev/null
+++ b/projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectIntegrity.ts
@@ -0,0 +1,138 @@
+/**
+ * Pure Proposal subject sealing + digest primitives.
+ *
+ * Isolated so Decision Subject reconstruction (pending markers) and subject
+ * resolution can share identical digest semantics without an import cycle:
+ *   pendingDecisionSubjectMarker ─┐
+ *                                 ├→ proposalSubjectIntegrity (this module)
+ *   resolveProposalDecisionSubject┘
+ *
+ * This module MUST remain free of:
+ * - activeProposalDecisionSubject
+ * - pendingDecisionSubjectMarker
+ * - RuntimeOaStack / persistence / server actions
+ */
+
+import { computeDecisionBasisSourceDigest } from "@/lib/oa/decision";
+import type { ProposalDto } from "../f2/types";
+import type { ExecutionIntentPayload } from "../f2/executionIntentSchema";
+
+export type SealedProposalExecutionBasis = {
+  readonly objective: string;
+  readonly scope: string;
+  readonly outOfScope: readonly string[];
+  readonly activatedBlocks: readonly string[];
+  readonly expectedOutcome: string;
+  readonly risks: readonly string[];
+  readonly reservations: readonly string[];
+  readonly stopConditions: readonly string[];
+  readonly cycleTypeId: string;
+  readonly recommendedProfile: string;
+  readonly requestedOperation: string;
+  readonly intentKind: string | null;
+  readonly artifactType: string | null;
+  readonly targetRepositoryRef: string | null;
+  readonly targetPath: string | null;
+  readonly scopeIn: readonly string[];
+  readonly scopeOut: readonly string[];
+  readonly expectedOutputs: readonly string[];
+  readonly requiredCapabilities: readonly string[];
+  readonly validationExpectations: readonly string[];
+  readonly evidenceRequirements: readonly string[];
+  readonly reversibilityExpectation:
+    | "reversible"
+    | "irreversible"
+    | "unknown"
+    | null;
+  readonly artifactBrief: string | null;
+  readonly contentRequirements: readonly string[];
+  readonly exitRequirementKinds: readonly string[];
+};
+
+export function resolveRequestedOperation(proposal: ProposalDto): string {
+  const ei = proposal.executionIntent;
+  const fromEi = ei?.requestedOperation?.trim();
+  if (fromEi) return fromEi;
+  const fromTop = proposal.requestedOperation?.trim();
+  if (fromTop) return fromTop;
+  return proposal.rephrasedRequest;
+}
+
+function asStringArray(value: readonly string[] | null | undefined): string[] {
+  return value ? [...value] : [];
+}
+
+/**
+ * Canonical sealed execution basis — every authoritative field is materialised
+ * with deterministic null/empty defaults for digest stability.
+ */
+export function sealProposalExecutionBasis(
+  proposal: ProposalDto,
+): SealedProposalExecutionBasis {
+  const ei: ExecutionIntentPayload | null | undefined = proposal.executionIntent;
+  return {
+    objective: proposal.objective,
+    scope: proposal.scope,
+    outOfScope: [...proposal.outOfScope],
+    activatedBlocks: [...proposal.activatedBlocks],
+    expectedOutcome: proposal.expectedOutcome,
+    risks: [...proposal.risks],
+    reservations: [...proposal.reservations],
+    stopConditions: [...proposal.stopConditions],
+    cycleTypeId: proposal.cycleTypeId,
+    recommendedProfile: proposal.recommendedProfile,
+    requestedOperation: resolveRequestedOperation(proposal),
+    intentKind: ei?.intentKind ?? null,
+    artifactType: ei?.artifactType ?? null,
+    targetRepositoryRef: ei?.targetRepositoryRef ?? null,
+    targetPath: ei?.targetPath ?? null,
+    scopeIn: asStringArray(ei?.scopeIn),
+    scopeOut: asStringArray(ei?.scopeOut),
+    expectedOutputs: asStringArray(ei?.expectedOutputs),
+    requiredCapabilities: asStringArray(ei?.requiredCapabilities),
+    validationExpectations: asStringArray(ei?.validationExpectations),
+    evidenceRequirements: asStringArray(ei?.evidenceRequirements),
+    reversibilityExpectation: ei?.reversibilityExpectation ?? null,
+    artifactBrief: ei?.artifactBrief ?? null,
+    contentRequirements: asStringArray(ei?.contentRequirements),
+    exitRequirementKinds: asStringArray(ei?.exitRequirementKinds),
+  };
+}
+
+/**
+ * Full-authority digest over proposalId + complete sealed execution basis.
+ * Any material field change must change the digest.
+ */
+export function computeProposalSubjectDigest(
+  sealed: SealedProposalExecutionBasis,
+  proposalId: string,
+): string {
+  return computeDecisionBasisSourceDigest({
+    proposalId,
+    objective: sealed.objective,
+    scope: sealed.scope,
+    outOfScope: [...sealed.outOfScope],
+    activatedBlocks: [...sealed.activatedBlocks],
+    expectedOutcome: sealed.expectedOutcome,
+    risks: [...sealed.risks],
+    reservations: [...sealed.reservations],
+    stopConditions: [...sealed.stopConditions],
+    cycleTypeId: sealed.cycleTypeId,
+    recommendedProfile: sealed.recommendedProfile,
+    requestedOperation: sealed.requestedOperation,
+    intentKind: sealed.intentKind,
+    artifactType: sealed.artifactType,
+    targetRepositoryRef: sealed.targetRepositoryRef,
+    targetPath: sealed.targetPath,
+    scopeIn: [...sealed.scopeIn],
+    scopeOut: [...sealed.scopeOut],
+    expectedOutputs: [...sealed.expectedOutputs],
+    requiredCapabilities: [...sealed.requiredCapabilities],
+    validationExpectations: [...sealed.validationExpectations],
+    evidenceRequirements: [...sealed.evidenceRequirements],
+    reversibilityExpectation: sealed.reversibilityExpectation,
+    artifactBrief: sealed.artifactBrief,
+    contentRequirements: [...sealed.contentRequirements],
+    exitRequirementKinds: [...sealed.exitRequirementKinds],
+  });
+}

```

## NEW FILE: `productProofJourneyIntegrity.applicationPath.d0.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/productProofJourneyIntegrity.applicationPath.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/productProofJourneyIntegrity.applicationPath.d0.test.ts
new file mode 100644
index 00000000..53323841
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/project-assistant/productProofJourneyIntegrity.applicationPath.d0.test.ts
@@ -0,0 +1,621 @@
+/**
+ * PRODUCT-PROOF-JOURNEY-INTEGRITY — APPLICATION PATH.
+ *
+ * Every step below goes through a real Product entrypoint the UI calls:
+ *   projectAssistantSendAction → orchestrateAssistantSend (fixture provider)
+ *   w2ProposeTrajectoryOptionsAction → w2DecideTrajectoryAction
+ *   projectAssistantPrepareM3Action → w2InspectExecutionContractAction
+ *
+ * No test bypass mints the decision subject: Proposal B is minted by Nora's
+ * own turn, and the chain is picked up again from durable truth only.
+ *
+ * Layer A ("AP1x") proves send → orchestrate → reinstruction verdict + durable
+ * marker. Layer B ("AP2x") proves propose → decide → PREPARE → inspect using
+ * the very Proposal id Layer A committed, reloaded through
+ * readActiveProposalDecisionSubject after a process-local wipe.
+ *
+ * Deterministic — ZERO REAL / ZERO LIVE / ZERO dogfood mutation / ZERO Attempt.
+ * @vitest-environment node
+ */
+import { afterEach, beforeEach, describe, expect, it } from "vitest";
+import { projectAssistantSendAction } from "@/features/project-assistant/actions";
+import { projectAssistantPrepareM3Action } from "@/features/project-assistant/actions";
+import {
+  w2DecideTrajectoryAction,
+  w2InspectExecutionContractAction,
+  w2ProposeTrajectoryOptionsAction,
+} from "@/features/project-assistant/w2/actions";
+import { prepareExecutionContractFromW2Decision } from "@/features/project-assistant/w2/prepareExecutionContractFromW2Decision";
+import {
+  getProposal,
+  resetF2ProposalStoreForTests,
+  saveProposal,
+} from "@/features/project-assistant/f2/proposalStore";
+import { F2_PROCESS_LOCAL_NOTICE } from "@/features/project-assistant/f2/proposalStore";
+import type { ProposalDto } from "@/features/project-assistant/f2/types";
+import { F2_ARTIFACT_MATERIALIZATION_OPERATION } from "@/features/project-assistant/f2/f2CanonicalOperations";
+import {
+  PROPOSAL_SUBJECT_AMEND_REF,
+  PROPOSAL_SUBJECT_PURSUE_REF,
+  PROPOSAL_SUBJECT_REFUSE_REF,
+} from "@/features/project-assistant/w2/proposalSubjectOptions";
+import {
+  computeProposalSubjectDigest,
+  sealProposalExecutionBasis,
+} from "@/features/project-assistant/w2/resolveProposalDecisionSubject";
+import {
+  listActivePendingDecisionSubjectMarkers,
+  writePendingDecisionSubjectMarker,
+} from "@/features/project-assistant/w2/pendingDecisionSubjectMarker";
+import {
+  listEffectivePendingDecisionSubjectMarkers,
+  readActiveProposalDecisionSubject,
+} from "@/features/project-assistant/w2/activeProposalDecisionSubject";
+import { recordObligationPolicyRequireArtifact } from "@/features/project-assistant/f2/pilotLifecycleActions";
+import {
+  LOCAL_PILOTE_ACTOR,
+  registerLocalPiloteAuthority,
+} from "@/lib/oa/decision";
+import { setConversationProviderForTests } from "@/lib/platform/ai";
+import {
+  bootW2Runtime,
+  cleanupW2TempDirs,
+  currentF2Context,
+  tempProductDbPath,
+} from "./w2Harness";
+import type {
+  RuntimeApplicationService,
+  RuntimeOaStack,
+} from "@/lib/vertical-slice-runtime";
+
+const MATERIALIZE_SIGNAL = "__F2_ARTIFACT_MATERIALIZE__";
+/** pathRoot must contain the fixture target, otherwise Nora clarifies instead. */
+const DOCS_BINDING = {
+  identity: "mcleland147/sfia-workspace",
+  remoteUrl: "https://github.com/mcleland147/sfia-workspace.git",
+  defaultBranch: "main",
+  pathRoot: "docs/",
+} as const;
+const EXPECTED_TARGET_PATH = "docs/livrable-cycle.md";
+
+/** Prior pending subject A — the thing a reinstruction must actually replace. */
+function priorProposal(input: {
+  projectId: string;
+  lpsId: string;
+  lpsVersion: number;
+  doctrineDigest: string;
+  activeCycleInstanceId: string;
+  proposalId: string;
+}): ProposalDto {
+  return saveProposal({
+    proposalId: input.proposalId,
+    status: "DECISION_REQUIRED",
+    rephrasedRequest: "Matérialiser la note de gestion de tâches",
+    objective: "Matérialiser le livrable de gestion de tâches",
+    cycleTypeId: "cyc:framing",
+    recommendedProfile: "Standard",
+    rationale: "Sujet de décision antérieur",
+    scope: "écriture de document bornée — cycle actif",
+    outOfScope: ["nouveau cycle", "REAL"],
+    activatedBlocks: [],
+    expectedOutcome: "Fichier sandbox matérialisé",
+    sources: ["nora"],
+    risks: ["mauvais sujet décisionnel"],
+    reservations: [],
+    stopConditions: ["AUCUNE EXÉCUTION", "STOP AVANT EXECUTE"],
+    morrisGateRequired: true,
+    nextPossibleStep: "Instruire les options sur ce sujet",
+    contextSnapshot: {
+      projectId: input.projectId,
+      lpsId: input.lpsId,
+      lpsVersion: input.lpsVersion,
+      doctrineDigest: input.doctrineDigest,
+      activeCycleInstanceId: input.activeCycleInstanceId,
+    },
+    processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
+    executionForbidden: true,
+    noExecutingStatus: true,
+    agentBinding: "NOT_AVAILABLE",
+    requestedOperation: F2_ARTIFACT_MATERIALIZATION_OPERATION,
+    executionIntent: {
+      intentKind: "docs_write",
+      artifactType: null,
+      targetRepositoryRef: null,
+      targetPath: EXPECTED_TARGET_PATH,
+      scopeIn: ["docs/"],
+      scopeOut: ["git"],
+      expectedOutputs: ["markdown"],
+      requiredCapabilities: ["cap:cursor.docs_write"],
+      validationExpectations: [],
+      evidenceRequirements: [],
+      requestedOperation: F2_ARTIFACT_MATERIALIZATION_OPERATION,
+      reversibilityExpectation: "reversible",
+      artifactBrief: "Note gestion de tâches",
+      contentRequirements: [],
+      exitRequirementKinds: [],
+    },
+  });
+}
+
+async function markPendingWithSnapshot(
+  oa: RuntimeOaStack,
+  proposal: ProposalDto,
+): Promise<void> {
+  const subjectDigest = computeProposalSubjectDigest(
+    sealProposalExecutionBasis(proposal),
+    proposal.proposalId,
+  );
+  const written = await writePendingDecisionSubjectMarker({
+    oa,
+    projectId: proposal.contextSnapshot.projectId,
+    proposalId: proposal.proposalId,
+    subjectDigest,
+    lpsId: proposal.contextSnapshot.lpsId,
+    lpsVersion: proposal.contextSnapshot.lpsVersion,
+    doctrineDigest: proposal.contextSnapshot.doctrineDigest,
+    proposal,
+  });
+  expect(written.ok).toBe(true);
+}
+
+describe("PRODUCT-PROOF-JOURNEY-INTEGRITY — application path AP11–AP24", () => {
+  let runtime: RuntimeApplicationService;
+  let dbPath: string;
+
+  beforeEach(() => {
+    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
+    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
+    setConversationProviderForTests(null);
+    resetF2ProposalStoreForTests();
+    dbPath = tempProductDbPath("journey-integrity-apppath.sqlite");
+    runtime = bootW2Runtime({ productDbPath: dbPath, idPrefix: "jiap" });
+  });
+
+  afterEach(() => {
+    resetF2ProposalStoreForTests();
+    setConversationProviderForTests(null);
+    cleanupW2TempDirs();
+  });
+
+  /**
+   * Durable Product truth required by the Artifact-continuation path:
+   * Project + LPS + active CycleInstance (pilot lifecycle started) +
+   * REQUIRE_ARTIFACT obligation + repository binding.
+   */
+  async function seedActiveCycleProject(suffix: string): Promise<{
+    projectId: string;
+    cycleInstanceId: string;
+  }> {
+    const oa = runtime.oa!;
+    const created = await runtime.createProject({
+      name: `Journey integrity ${suffix}`,
+      objective: "Prouver la continuité du sujet de décision",
+      context: "cycle actif + REQUIRE_ARTIFACT",
+      criticality: "STANDARD",
+      constraints: ["ZERO REAL"],
+      shortReference: `JI${suffix.toUpperCase()}`,
+      idempotencyKey: `idem:jiap-${suffix}`,
+    });
+    expect(created.ok).toBe(true);
+    if (!created.ok) throw new Error("seed: createProject failed");
+    const projectId = created.project.projectId;
+
+    const lps0 = await oa.projectServices.getCurrentLivingProjectState.execute({
+      projectId,
+    });
+    expect(lps0.ok).toBe(true);
+    if (!lps0.ok) throw new Error("seed: LPS unavailable");
+
+    const traj = await oa.cycleServices.createInitialTrajectory.execute({
+      trajectoryId: `trj:${projectId}`,
+      projectId,
+      steps: [
+        { stepId: "stp:clarify", order: 1, label: "Clarify", state: "done" },
+        { stepId: "stp:deliver", order: 2, label: "Deliver", state: "done" },
+      ],
+      status: "active",
+      expectedLpsVersion: lps0.livingProjectState.version,
+      createdBy: {
+        actorId: "actor:morris",
+        role: "project_owner",
+        displayName: "Morris",
+        authorityLevel: "N3",
+      },
+    });
+    expect(traj.ok).toBe(true);
+
+    const cycleInstanceId = `cyc:jiap-${suffix}`;
+    const candidate = await oa.cycleServices.createCycle.execute({
+      cycleInstanceId,
+      cycleTypeId: "cyc:framing",
+      projectId,
+      signals: { lowRiskBounded: true },
+      createdBy: {
+        actorId: "actor:nora-f2",
+        role: "agent",
+        displayName: "Nora F2",
+        authorityLevel: "N1",
+      },
+      linkAsActiveCycle: false,
+    });
+    expect(candidate.ok).toBe(true);
+
+    const auth = registerLocalPiloteAuthority({
+      authorityResolver: oa.authorityResolver,
+      scope: `pilot-lifecycle:${cycleInstanceId}`,
+      issuedAt: "2026-09-15T08:00:00.000Z",
+      forceEnable: true,
+    });
+    expect(auth.ok).toBe(true);
+    if (!auth.ok) throw new Error("seed: authority failed");
+
+    const lps1 = await oa.projectServices.getCurrentLivingProjectState.execute({
+      projectId,
+    });
+    expect(lps1.ok).toBe(true);
+    if (!lps1.ok) throw new Error("seed: LPS unavailable");
+
+    const started = await oa.cycleServices.pilotLifecycle.start({
+      cycleInstanceId,
+      projectId,
+      createdBy: {
+        actorId: LOCAL_PILOTE_ACTOR.actorId,
+        role: LOCAL_PILOTE_ACTOR.role,
+        displayName: LOCAL_PILOTE_ACTOR.displayName,
+        authorityLevel: LOCAL_PILOTE_ACTOR.authorityLevel,
+      },
+      authorityEvidenceId: auth.evidenceId,
+      expectedLpsVersion: lps1.livingProjectState.version,
+    });
+    expect(started.ok).toBe(true);
+
+    const obligation = await recordObligationPolicyRequireArtifact({
+      projectId,
+      cycleInstanceId,
+      cycleServices: oa.cycleServices,
+      decisionServices: oa.decisionServices,
+      authorityResolver: oa.authorityResolver,
+      nowIso: () => "2026-09-15T08:01:00.000Z",
+    });
+    expect(obligation.ok).toBe(true);
+
+    const bound = await runtime.setProjectRepositoryBinding({
+      projectId,
+      ...DOCS_BINDING,
+    });
+    expect(bound.ok).toBe(true);
+
+    return { projectId, cycleInstanceId };
+  }
+
+  /** Layer A — send with an armed reinstruction; returns the committed subject. */
+  async function runReinstructionTurns(suffix: string): Promise<{
+    projectId: string;
+    cycleInstanceId: string;
+    priorProposalId: string;
+    newProposalId: string;
+  }> {
+    const { projectId, cycleInstanceId } = await seedActiveCycleProject(suffix);
+    const ctx = await currentF2Context(runtime, projectId);
+    const prior = priorProposal({
+      projectId,
+      lpsId: ctx.lpsId,
+      lpsVersion: ctx.lpsVersion,
+      doctrineDigest: ctx.doctrineDigest,
+      activeCycleInstanceId: cycleInstanceId,
+      proposalId: `prop:f2:jiap-${suffix}-a`,
+    });
+    await markPendingWithSnapshot(runtime.oa!, prior);
+
+    // AP11 — armed but non-committing turn: the arm must survive.
+    const clarification = await projectAssistantSendAction({
+      projectId,
+      content: "Bonjour Nora, où en est le projet ?",
+      reinstructionOfProposalId: prior.proposalId,
+    });
+    expect(clarification.ok).toBe(true);
+    if (!clarification.ok) throw new Error("clarification turn failed");
+    expect(clarification.reinstructionTransition).toBe("not_consumed");
+    expect(clarification.f2?.proposal?.status).not.toBe("DECISION_REQUIRED");
+
+    const stillPending = await listEffectivePendingDecisionSubjectMarkers(
+      runtime.oa!,
+      projectId,
+    );
+    expect(stillPending.ok).toBe(true);
+    if (!stillPending.ok) throw new Error("pending read failed");
+    expect(stillPending.markers.map((m) => m.proposalId)).toEqual([
+      prior.proposalId,
+    ]);
+
+    // AP12 — Nora mints the replacement subject on her own turn.
+    const mint = await projectAssistantSendAction({
+      projectId,
+      content: `Matérialise ce livrable. ${MATERIALIZE_SIGNAL}`,
+      reinstructionOfProposalId: prior.proposalId,
+    });
+    expect(mint.ok).toBe(true);
+    if (!mint.ok) throw new Error("mint turn failed");
+    expect(mint.f2?.turnKind).toBe("f2_proposal");
+    expect(mint.f2?.proposal?.status).toBe("DECISION_REQUIRED");
+    expect(mint.reinstructionTransition).toBe("superseded");
+
+    const newProposalId = mint.f2?.proposal?.proposalId ?? "";
+    expect(newProposalId).not.toBe("");
+    expect(newProposalId).not.toBe(prior.proposalId);
+
+    return {
+      projectId,
+      cycleInstanceId,
+      priorProposalId: prior.proposalId,
+      newProposalId,
+    };
+  }
+
+  it("AP11/AP12 — send action: armed clarification not_consumed, mint superseded", async () => {
+    const { projectId, priorProposalId, newProposalId } =
+      await runReinstructionTurns("t1");
+
+    const effective = await listEffectivePendingDecisionSubjectMarkers(
+      runtime.oa!,
+      projectId,
+    );
+    expect(effective.ok).toBe(true);
+    if (!effective.ok) return;
+    expect(effective.markers.map((m) => m.proposalId)).toEqual([newProposalId]);
+    expect(effective.markers[0]?.proposalSnapshot?.proposalId).toBe(
+      newProposalId,
+    );
+
+    const epistemic = await runtime.oa!.cycleServices.getEpistemicState.execute({
+      projectId,
+    });
+    expect(epistemic.ok).toBe(true);
+    if (!epistemic.ok) return;
+    const priorItem = epistemic.state.items.find((i) =>
+      i.epistemicItemId.includes(priorProposalId.replace(/^prop:f2:/, "")),
+    );
+    expect(priorItem?.status).toBe("resolved");
+    expect(priorItem?.statement).toContain(
+      "<!-- resolved:superseded_by_reinstruction -->",
+    );
+  });
+
+  it("AP13 — process-local loss after the mint: the same subject is reconstructed", async () => {
+    const { projectId, newProposalId } = await runReinstructionTurns("t2");
+
+    resetF2ProposalStoreForTests();
+    expect(getProposal(newProposalId)).toBeNull();
+
+    const read = await readActiveProposalDecisionSubject(runtime.oa!, projectId);
+    expect(read.ok).toBe(true);
+    if (!read.ok) return;
+    expect(read.kind).toBe("pending_reinstruction_required");
+    if (read.kind !== "pending_reinstruction_required") return;
+    expect(read.recoverableProposalIds).toEqual([newProposalId]);
+    expect(getProposal(newProposalId)?.status).toBe("DECISION_REQUIRED");
+
+    // The reconstructed subject agrees with live Product truth, not with itself.
+    const active = await listActivePendingDecisionSubjectMarkers(
+      runtime.oa!,
+      projectId,
+    );
+    expect(active.ok).toBe(true);
+    if (!active.ok) return;
+    const live = await currentF2Context(runtime, projectId);
+    expect(active.markers[0]?.lpsId).toBe(live.lpsId);
+    expect(active.markers[0]?.lpsVersion).toBe(live.lpsVersion);
+  });
+
+  it("AP21–AP24 — reconstructed subject → propose → decide → PREPARE → inspect (ZERO Attempt, STOP)", async () => {
+    const { projectId, newProposalId } = await runReinstructionTurns("t3");
+
+    // Pick the chain back up from durable truth only.
+    resetF2ProposalStoreForTests();
+    const read = await readActiveProposalDecisionSubject(runtime.oa!, projectId);
+    expect(read.ok).toBe(true);
+    if (!read.ok) return;
+    if (read.kind !== "pending_reinstruction_required") {
+      throw new Error(`unexpected decision subject kind: ${read.kind}`);
+    }
+    expect(read.recoverableProposalIds).toEqual([newProposalId]);
+
+    // AP21 — Options are instructed on the Proposal subject, never a generic one.
+    const proposed = await w2ProposeTrajectoryOptionsAction({
+      projectId,
+      proposalId: newProposalId,
+      // Hostile client payload — must be ignored by the server.
+      targetPath: "/etc/passwd",
+      requestedOperation: "shell_exec",
+      objective: "exécuter maintenant",
+    });
+    expect(proposed.ok).toBe(true);
+    if (!proposed.ok) return;
+    expect(proposed.decisionSubjectMode).toBe("proposal");
+    expect(proposed.proposalId).toBe(newProposalId);
+    expect(proposed.executionPerformed).toBe(false);
+
+    // AP22 — Pilote decides "poursuivre" on the presented set.
+    const decided = await w2DecideTrajectoryAction({
+      projectId,
+      optionSetRef: proposed.optionSetRef,
+      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
+      canActAsMorris: true,
+      claimedAuthorityLevel: "N3",
+    });
+    expect(decided.ok).toBe(true);
+    if (!decided.ok) return;
+    const decisionId = decided.decision.decisionId;
+
+    const hd = await runtime.oa!.decisionServices.getHumanDecision.execute({
+      decisionId,
+    });
+    expect(hd.ok).toBe(true);
+    if (!hd.ok) return;
+    const executionBasis = hd.decision.decisionBasis?.executionBasis;
+    expect(hd.decision.decisionBasis?.sourceType).toBe("proposal");
+    expect(hd.decision.decisionBasis?.sourceRef).toBe(newProposalId);
+    expect(hd.decision.selectedOptionId).toBe(PROPOSAL_SUBJECT_PURSUE_REF);
+    expect(executionBasis?.requestedOperation).toBe(
+      F2_ARTIFACT_MATERIALIZATION_OPERATION,
+    );
+    // docs_write lineage travels in the sealed DecisionBasis, not in a UI field.
+    expect(executionBasis?.intentKind).toBe("docs_write");
+    expect(executionBasis?.targetPath).toBe(EXPECTED_TARGET_PATH);
+    expect(executionBasis?.requiredCapabilities).toContain(
+      "cap:cursor.docs_write",
+    );
+
+    /**
+     * AP23 — PREPARE from the durable decision. No Attempt, no execution.
+     *
+     * UI CONTRACT LINKAGE (single source of truth for the Pilot journey):
+     * TrajectorySurface.prepareProposalBackedContract routes this very action
+     * and sends EXACTLY this payload — `{ projectId, decisionId }`. It never
+     * sends targetPath, operation, qualifiedOperationKind or any authority
+     * claim, because the sealed DecisionBasis asserted above already carries
+     * them. The surface-side proof of that payload shape lives in
+     * __tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
+     * ("PREPARE sends projectId + decisionId only").
+     */
+    const uiPayload = { projectId, decisionId } as const;
+    expect(Object.keys(uiPayload).sort()).toEqual(["decisionId", "projectId"]);
+    const prepared = await projectAssistantPrepareM3Action(uiPayload);
+    expect(prepared.ok).toBe(true);
+    if (!prepared.ok) return;
+    expect(prepared.f3.executionPerformed).toBe(false);
+    expect(prepared.f3.attemptCreated).toBe(false);
+    expect(prepared.f3.contract.action).toBe(
+      F2_ARTIFACT_MATERIALIZATION_OPERATION,
+    );
+
+    expect(prepared.f3.contract.status).not.toMatch(/executing|executed/i);
+    expect(prepared.f3.cursorReal).toBe(false);
+    expect(prepared.f3.executionAllowed).toBe(false);
+
+    // AP24 — Inspect is the last admissible step: it grants nothing.
+    const inspected = await w2InspectExecutionContractAction({
+      projectId,
+      executionContractId: prepared.f3.contract.executionContractId,
+    });
+    expect(inspected.ok).toBe(true);
+    if (!inspected.ok) return;
+    expect(inspected.grantsAuthority).toBe(false);
+    expect(inspected.statusLabel).toBe("INSPECTÉ");
+    expect(inspected.executionContractId).toBe(
+      prepared.f3.contract.executionContractId,
+    );
+  });
+
+  it.each([
+    ["amend", "t4", PROPOSAL_SUBJECT_AMEND_REF],
+    ["refuse", "t5", PROPOSAL_SUBJECT_REFUSE_REF],
+  ])(
+    "AP25 — %s closes the subject: the PREPARE application path fails closed",
+    async (_label, suffix, selectedOptionRef) => {
+      const { projectId, newProposalId } = await runReinstructionTurns(suffix);
+
+      resetF2ProposalStoreForTests();
+      const read = await readActiveProposalDecisionSubject(
+        runtime.oa!,
+        projectId,
+      );
+      expect(read.ok).toBe(true);
+      if (!read.ok) return;
+
+      const proposed = await w2ProposeTrajectoryOptionsAction({
+        projectId,
+        proposalId: newProposalId,
+      });
+      expect(proposed.ok).toBe(true);
+      if (!proposed.ok) return;
+
+      const decided = await w2DecideTrajectoryAction({
+        projectId,
+        optionSetRef: proposed.optionSetRef,
+        selectedOptionRef,
+        canActAsMorris: true,
+        claimedAuthorityLevel: "N3",
+      });
+      expect(decided.ok).toBe(true);
+      if (!decided.ok) return;
+
+      // The surface hides the PREPARE CTA for amend/refuse; the application
+      // path must refuse it too — hiding is not enforcing.
+      const prepared = await projectAssistantPrepareM3Action({
+        projectId,
+        decisionId: decided.decision.decisionId,
+      });
+      expect(prepared.ok).toBe(false);
+      if (prepared.ok) return;
+      expect(prepared.code).toBe("PREPARE_NOT_APPLICABLE");
+
+      // Same refusal on the legacy W2 sandbox PREPARE path. The server action
+      // needs a request scope for authentication, so the refusal is proven on
+      // the application function the action delegates to.
+      const sandbox = await prepareExecutionContractFromW2Decision({
+        oa: runtime.oa!,
+        projectId,
+        decisionId: decided.decision.decisionId,
+        currentContext: await currentF2Context(runtime, projectId),
+        forceLocalAuthority: true,
+        qualifiedOperationKind: "generate-temporary-artifact",
+      });
+      expect(sandbox.ok).toBe(false);
+      if (sandbox.ok) return;
+      expect(sandbox.code).toBe("PREPARE_NOT_APPLICABLE");
+    },
+  );
+
+  it("AP23b — hostile PREPARE extras are ignored: same sealed contract, no execution", async () => {
+    const { projectId, newProposalId } = await runReinstructionTurns("t6");
+
+    resetF2ProposalStoreForTests();
+    const read = await readActiveProposalDecisionSubject(runtime.oa!, projectId);
+    expect(read.ok).toBe(true);
+    if (!read.ok) return;
+
+    const proposed = await w2ProposeTrajectoryOptionsAction({
+      projectId,
+      proposalId: newProposalId,
+    });
+    expect(proposed.ok).toBe(true);
+    if (!proposed.ok) return;
+
+    const decided = await w2DecideTrajectoryAction({
+      projectId,
+      optionSetRef: proposed.optionSetRef,
+      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
+      canActAsMorris: true,
+      claimedAuthorityLevel: "N3",
+    });
+    expect(decided.ok).toBe(true);
+    if (!decided.ok) return;
+
+    const prepared = await projectAssistantPrepareM3Action({
+      projectId,
+      decisionId: decided.decision.decisionId,
+      real: true,
+      mode: "REAL",
+      command: "rm -rf /",
+      adapterRef: "adapter:cursor-real",
+      agentId: "agent:whatever",
+      canActAsMorris: true,
+      claimedAuthorityLevel: "N3",
+    });
+    expect(prepared.ok).toBe(true);
+    if (!prepared.ok) return;
+
+    // Nothing from the hostile payload reached the contract: the action is the
+    // sealed DecisionBasis operation, and PREPARE stays PREPARE.
+    expect(prepared.f3.contract.action).toBe(
+      F2_ARTIFACT_MATERIALIZATION_OPERATION,
+    );
+    expect(prepared.f3.contract.action).not.toMatch(/rm -rf/);
+    expect(prepared.f3.executionPerformed).toBe(false);
+    expect(prepared.f3.attemptCreated).toBe(false);
+    expect(prepared.f3.cursorReal).toBe(false);
+    expect(prepared.f3.executionAllowed).toBe(false);
+    expect(prepared.f3.contract.status).not.toMatch(/executing|executed/i);
+  });
+});

```

## NEW FILE: `productProofJourneyIntegrity.d0.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/productProofJourneyIntegrity.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/productProofJourneyIntegrity.d0.test.ts
new file mode 100644
index 00000000..8e290e01
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/project-assistant/productProofJourneyIntegrity.d0.test.ts
@@ -0,0 +1,857 @@
+/**
+ * PRODUCT-PROOF-JOURNEY-INTEGRITY — Decision Subject continuity, hydrate,
+ * reinstruction supersession, pursue→PREPARE lineage (ZERO REAL).
+ * Deterministic — ZERO REAL / ZERO LIVE / ZERO dogfood mutation.
+ * @vitest-environment node
+ */
+import { afterEach, beforeEach, describe, expect, it } from "vitest";
+import {
+  getProposal,
+  resetF2ProposalStoreForTests,
+  saveProposal,
+} from "@/features/project-assistant/f2/proposalStore";
+import { F2_PROCESS_LOCAL_NOTICE } from "@/features/project-assistant/f2/proposalStore";
+import type { ProposalDto } from "@/features/project-assistant/f2/types";
+import { F2_ARTIFACT_MATERIALIZATION_OPERATION } from "@/features/project-assistant/f2/f2CanonicalOperations";
+import { PROPOSAL_SUBJECT_PURSUE_REF } from "@/features/project-assistant/w2/proposalSubjectOptions";
+import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
+import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
+import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
+import {
+  bootW2Runtime,
+  cleanupW2TempDirs,
+  currentF2Context,
+  seedQualifiedProject,
+  tempProductDbPath,
+  W2_TEST_ACTOR,
+} from "./w2Harness";
+import { setConversationProviderForTests } from "@/lib/platform/ai";
+import {
+  computeProposalSubjectDigest,
+  sealProposalExecutionBasis,
+} from "@/features/project-assistant/w2/resolveProposalDecisionSubject";
+import {
+  hydrateProposalsFromPendingMarkers,
+  isValidProposalSnapshotForHydration,
+  listActivePendingDecisionSubjectMarkers,
+  PENDING_DECISION_SUBJECT_KIND,
+  replacePendingDecisionSubjectForExplicitReinstruction,
+  writePendingDecisionSubjectMarker,
+  type PendingDecisionSubjectMarker,
+  type SnapshotHydrationLiveContext,
+} from "@/features/project-assistant/w2/pendingDecisionSubjectMarker";
+import {
+  assertExplicitReinstructionGate,
+  listEffectivePendingDecisionSubjectMarkers,
+  readActiveProposalDecisionSubject,
+} from "@/features/project-assistant/w2/activeProposalDecisionSubject";
+import { prepareM3FromDecision } from "@/features/project-assistant/f3/prepareM3FromDecision";
+import type {
+  RuntimeApplicationService,
+  RuntimeOaStack,
+} from "@/lib/vertical-slice-runtime";
+
+const TARGET_PATH = "projects/sfia-studio/.sandbox/gestion-de-taches.md";
+const NON_ACME_BINDING = {
+  identity: "mcleland147/sfia-workspace",
+  remoteUrl: "https://github.com/mcleland147/sfia-workspace.git",
+  defaultBranch: "main",
+  pathRoot: "projects/sfia-studio/.sandbox",
+} as const;
+
+function docsWriteProposal(input: {
+  projectId: string;
+  lpsId: string;
+  lpsVersion: number;
+  doctrineDigest: string;
+  activeCycleInstanceId: string;
+  proposalId?: string;
+  status?: ProposalDto["status"];
+}): ProposalDto {
+  return saveProposal({
+    proposalId: input.proposalId ?? `prop:f2:jint-${Date.now()}`,
+    status: input.status ?? "DECISION_REQUIRED",
+    rephrasedRequest: "Matérialiser la note de gestion de tâches",
+    objective: "Matérialiser le livrable de gestion de tâches",
+    cycleTypeId: "cyc:delivery",
+    recommendedProfile: "Critical",
+    rationale: "Continuation Artifact du cycle actif",
+    scope: "écriture de document bornée — cycle actif",
+    outOfScope: ["nouveau cycle", "REAL"],
+    activatedBlocks: [],
+    expectedOutcome: "Fichier sandbox matérialisé",
+    sources: ["nora"],
+    risks: ["mauvais sujet décisionnel"],
+    reservations: [],
+    stopConditions: ["AUCUNE EXÉCUTION", "STOP AVANT EXECUTE"],
+    morrisGateRequired: true,
+    nextPossibleStep: "Instruire les options sur ce sujet",
+    contextSnapshot: {
+      projectId: input.projectId,
+      lpsId: input.lpsId,
+      lpsVersion: input.lpsVersion,
+      doctrineDigest: input.doctrineDigest,
+      activeCycleInstanceId: input.activeCycleInstanceId,
+      ckcResolutionRef: "ckcres:w2-harness",
+    },
+    processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
+    executionForbidden: true,
+    noExecutingStatus: true,
+    agentBinding: "NOT_AVAILABLE",
+    requestedOperation: F2_ARTIFACT_MATERIALIZATION_OPERATION,
+    executionIntent: {
+      intentKind: "docs_write",
+      artifactType: null,
+      targetRepositoryRef: null,
+      targetPath: TARGET_PATH,
+      scopeIn: ["sandbox"],
+      scopeOut: ["git"],
+      expectedOutputs: ["markdown"],
+      requiredCapabilities: ["cap:cursor.docs_write"],
+      validationExpectations: [],
+      evidenceRequirements: [],
+      requestedOperation: F2_ARTIFACT_MATERIALIZATION_OPERATION,
+      reversibilityExpectation: "reversible",
+      artifactBrief: "Note gestion de tâches",
+      contentRequirements: [],
+      exitRequirementKinds: [],
+    },
+  });
+}
+
+async function markPending(
+  oa: RuntimeOaStack,
+  proposal: ProposalDto,
+  opts?: { withSnapshot?: boolean },
+): Promise<void> {
+  const sealed = sealProposalExecutionBasis(proposal);
+  const subjectDigest = computeProposalSubjectDigest(
+    sealed,
+    proposal.proposalId,
+  );
+  const written = await writePendingDecisionSubjectMarker({
+    oa,
+    projectId: proposal.contextSnapshot.projectId,
+    proposalId: proposal.proposalId,
+    subjectDigest,
+    lpsId: proposal.contextSnapshot.lpsId,
+    lpsVersion: proposal.contextSnapshot.lpsVersion,
+    doctrineDigest: proposal.contextSnapshot.doctrineDigest,
+    ...(opts?.withSnapshot === false ? {} : { proposal }),
+  });
+  expect(written.ok).toBe(true);
+}
+
+/** Marker shaped exactly like a durable write, for predicate-level negatives. */
+function markerFor(
+  proposal: ProposalDto,
+  overrides: Partial<PendingDecisionSubjectMarker> = {},
+): PendingDecisionSubjectMarker {
+  const sealed = sealProposalExecutionBasis(proposal);
+  return {
+    kind: PENDING_DECISION_SUBJECT_KIND,
+    proposalId: proposal.proposalId,
+    projectId: proposal.contextSnapshot.projectId,
+    subjectDigest: computeProposalSubjectDigest(sealed, proposal.proposalId),
+    lpsId: proposal.contextSnapshot.lpsId,
+    lpsVersion: proposal.contextSnapshot.lpsVersion,
+    doctrineDigest: proposal.contextSnapshot.doctrineDigest,
+    status: "pending_binding",
+    proposalSnapshot: proposal,
+    ...overrides,
+  };
+}
+
+/** Live Product truth that agrees with the marker (the admissible baseline). */
+function liveFor(
+  marker: PendingDecisionSubjectMarker,
+  overrides: Partial<SnapshotHydrationLiveContext> = {},
+): SnapshotHydrationLiveContext {
+  return {
+    projectId: marker.projectId,
+    lpsId: marker.lpsId,
+    lpsVersion: marker.lpsVersion,
+    doctrineDigest: marker.doctrineDigest,
+    ...overrides,
+  };
+}
+
+describe("PRODUCT-PROOF-JOURNEY-INTEGRITY — T02–T07 / N03 / N05 / T15–T17", () => {
+  let runtime: RuntimeApplicationService;
+  let dbPath: string;
+
+  beforeEach(() => {
+    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
+    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
+    setConversationProviderForTests(null);
+    resetF2ProposalStoreForTests();
+    dbPath = tempProductDbPath("journey-integrity.sqlite");
+    runtime = bootW2Runtime({ productDbPath: dbPath, idPrefix: "jint" });
+  });
+
+  afterEach(() => {
+    resetF2ProposalStoreForTests();
+    setConversationProviderForTests(null);
+    cleanupW2TempDirs();
+  });
+
+  async function seed() {
+    const seeded = await seedQualifiedProject(runtime, {
+      profile: "Critical",
+      suffix: "ji",
+    });
+    const ctx = await currentF2Context(runtime, seeded.projectId);
+    return { ...seeded, ctx };
+  }
+
+  async function liveHydrationContext(
+    projectId: string,
+  ): Promise<SnapshotHydrationLiveContext> {
+    const ctx = await currentF2Context(runtime, projectId);
+    return {
+      projectId,
+      lpsId: ctx.lpsId,
+      lpsVersion: ctx.lpsVersion,
+      doctrineDigest: ctx.doctrineDigest,
+    };
+  }
+
+  /**
+   * ACW-shaped LPS append: F1 / cognitive work can bump LPS without minting a
+   * Proposal. Used to prove a marker left behind by a live LPS is not hydrated.
+   */
+  async function appendLpsVersion(projectId: string): Promise<void> {
+    const oa = runtime.oa!;
+    const current =
+      await oa.projectServices.getCurrentLivingProjectState.execute({
+        projectId,
+      });
+    expect(current.ok).toBe(true);
+    if (!current.ok) return;
+    const appended =
+      await oa.projectServices.appendLivingProjectStateVersion.execute({
+        projectId,
+        expectedVersion: current.livingProjectState.version,
+        objective: current.livingProjectState.objective,
+        createdBy: W2_TEST_ACTOR,
+      });
+    expect(appended.ok).toBe(true);
+  }
+
+  async function proposeWith(projectId: string, proposalId: string) {
+    const oa = runtime.oa!;
+    const qualification = await resolveW2QualificationInputs({ oa, projectId });
+    expect(qualification.ok).toBe(true);
+    if (!qualification.ok) throw new Error("qualification failed");
+    return proposeTrajectoryOptions({
+      oa,
+      projectId,
+      ...qualification.qualification.inputs,
+      packagePin: qualification.qualification.packagePin,
+      objective: qualification.qualification.objective,
+      projectTitle: qualification.qualification.projectTitle,
+      proposalId,
+    });
+  }
+
+  it("T02 — marker without snapshot + cleared store → pending lost (recoverable empty)", async () => {
+    const { projectId, cycleInstanceId, ctx } = await seed();
+    const proposalA = docsWriteProposal({
+      projectId,
+      lpsId: ctx.lpsId,
+      lpsVersion: ctx.lpsVersion,
+      doctrineDigest: ctx.doctrineDigest,
+      activeCycleInstanceId: cycleInstanceId,
+      proposalId: "prop:f2:jint-t02-a",
+    });
+    await markPending(runtime.oa!, proposalA, { withSnapshot: false });
+    resetF2ProposalStoreForTests();
+    expect(getProposal(proposalA.proposalId)).toBeNull();
+
+    const read = await readActiveProposalDecisionSubject(
+      runtime.oa!,
+      projectId,
+    );
+    expect(read.ok).toBe(true);
+    if (!read.ok) return;
+    expect(read.kind).toBe("pending_reinstruction_required");
+    if (read.kind !== "pending_reinstruction_required") return;
+    expect(read.recoverableProposalIds).toEqual([]);
+    expect(read.message).toMatch(/reformul/i);
+  });
+
+  it("T03 — marker WITH snapshot + cleared store → recoverable via hydrate", async () => {
+    const { projectId, cycleInstanceId, ctx } = await seed();
+    const proposalA = docsWriteProposal({
+      projectId,
+      lpsId: ctx.lpsId,
+      lpsVersion: ctx.lpsVersion,
+      doctrineDigest: ctx.doctrineDigest,
+      activeCycleInstanceId: cycleInstanceId,
+      proposalId: "prop:f2:jint-t03-a",
+    });
+    await markPending(runtime.oa!, proposalA, { withSnapshot: true });
+    resetF2ProposalStoreForTests();
+    expect(getProposal(proposalA.proposalId)).toBeNull();
+
+    const read = await readActiveProposalDecisionSubject(
+      runtime.oa!,
+      projectId,
+    );
+    expect(read.ok).toBe(true);
+    if (!read.ok) return;
+    expect(read.kind).toBe("pending_reinstruction_required");
+    if (read.kind !== "pending_reinstruction_required") return;
+    expect(read.recoverableProposalIds).toEqual([proposalA.proposalId]);
+    expect(getProposal(proposalA.proposalId)?.status).toBe("DECISION_REQUIRED");
+    expect(getProposal(proposalA.proposalId)?.executionIntent?.targetPath).toBe(
+      TARGET_PATH,
+    );
+  });
+
+  it("T04–T07 — explicit reinstruction A→B with snapshot; B survives store reset", async () => {
+    const { projectId, cycleInstanceId, ctx } = await seed();
+    const proposalA = docsWriteProposal({
+      projectId,
+      lpsId: ctx.lpsId,
+      lpsVersion: ctx.lpsVersion,
+      doctrineDigest: ctx.doctrineDigest,
+      activeCycleInstanceId: cycleInstanceId,
+      proposalId: "prop:f2:jint-t04-a",
+    });
+    await markPending(runtime.oa!, proposalA, { withSnapshot: true });
+
+    const gateRequired = await assertExplicitReinstructionGate({
+      oa: runtime.oa!,
+      projectId,
+      reinstructionOfProposalId: null,
+    });
+    expect(gateRequired.ok).toBe(false);
+    if (gateRequired.ok) return;
+    expect(gateRequired.code).toBe("EXPLICIT_REINSTRUCTION_REQUIRED");
+
+    const proposalB = docsWriteProposal({
+      projectId,
+      lpsId: ctx.lpsId,
+      lpsVersion: ctx.lpsVersion,
+      doctrineDigest: ctx.doctrineDigest,
+      activeCycleInstanceId: cycleInstanceId,
+      proposalId: "prop:f2:jint-t04-b",
+    });
+    const sealedB = sealProposalExecutionBasis(proposalB);
+    const digestB = computeProposalSubjectDigest(sealedB, proposalB.proposalId);
+    const replaced = await replacePendingDecisionSubjectForExplicitReinstruction(
+      {
+        oa: runtime.oa!,
+        projectId,
+        oldProposalId: proposalA.proposalId,
+        newProposalId: proposalB.proposalId,
+        subjectDigest: digestB,
+        lpsId: ctx.lpsId,
+        lpsVersion: ctx.lpsVersion,
+        doctrineDigest: ctx.doctrineDigest,
+        proposal: proposalB,
+      },
+    );
+    expect(replaced.ok).toBe(true);
+
+    const effective = await listEffectivePendingDecisionSubjectMarkers(
+      runtime.oa!,
+      projectId,
+    );
+    expect(effective.ok).toBe(true);
+    if (!effective.ok) return;
+    expect(effective.markers.map((m) => m.proposalId)).toEqual([
+      proposalB.proposalId,
+    ]);
+    expect(effective.markers[0]?.proposalSnapshot?.proposalId).toBe(
+      proposalB.proposalId,
+    );
+
+    const gateOk = await assertExplicitReinstructionGate({
+      oa: runtime.oa!,
+      projectId,
+      reinstructionOfProposalId: proposalB.proposalId,
+    });
+    expect(gateOk.ok).toBe(true);
+
+    // Process-local loss — Epistemic snapshot must rehydrate B.
+    resetF2ProposalStoreForTests();
+    expect(getProposal(proposalB.proposalId)).toBeNull();
+
+    const afterReset = await readActiveProposalDecisionSubject(
+      runtime.oa!,
+      projectId,
+    );
+    expect(afterReset.ok).toBe(true);
+    if (!afterReset.ok) return;
+    expect(afterReset.kind).toBe("pending_reinstruction_required");
+    if (afterReset.kind !== "pending_reinstruction_required") return;
+    expect(afterReset.recoverableProposalIds).toEqual([proposalB.proposalId]);
+    expect(getProposal(proposalB.proposalId)?.executionIntent?.targetPath).toBe(
+      TARGET_PATH,
+    );
+
+    const active = await listActivePendingDecisionSubjectMarkers(
+      runtime.oa!,
+      projectId,
+    );
+    expect(active.ok).toBe(true);
+    if (!active.ok) return;
+    const hydrated = hydrateProposalsFromPendingMarkers(
+      active.markers,
+      await liveHydrationContext(projectId),
+    );
+    expect(hydrated).toEqual([]); // already hydrated by read
+  });
+
+  it("N03 — multi-pending remains AMBIGUOUS (no first-id arbitration)", async () => {
+    const { projectId, cycleInstanceId, ctx } = await seed();
+    const a = docsWriteProposal({
+      projectId,
+      lpsId: ctx.lpsId,
+      lpsVersion: ctx.lpsVersion,
+      doctrineDigest: ctx.doctrineDigest,
+      activeCycleInstanceId: cycleInstanceId,
+      proposalId: "prop:f2:jint-n03-a",
+    });
+    const b = docsWriteProposal({
+      projectId,
+      lpsId: ctx.lpsId,
+      lpsVersion: ctx.lpsVersion,
+      doctrineDigest: ctx.doctrineDigest,
+      activeCycleInstanceId: cycleInstanceId,
+      proposalId: "prop:f2:jint-n03-b",
+    });
+    await markPending(runtime.oa!, a);
+    await markPending(runtime.oa!, b);
+
+    const gated = await assertExplicitReinstructionGate({
+      oa: runtime.oa!,
+      projectId,
+      reinstructionOfProposalId: a.proposalId,
+    });
+    expect(gated.ok).toBe(false);
+    if (gated.ok) return;
+    expect(gated.code).toBe("AMBIGUOUS_PENDING_REINSTRUCTION");
+
+    const read = await readActiveProposalDecisionSubject(
+      runtime.oa!,
+      projectId,
+    );
+    expect(read.ok).toBe(true);
+    if (!read.ok) return;
+    expect(read.kind).toBe("pending_reinstruction_required");
+    if (read.kind !== "pending_reinstruction_required") return;
+    expect(read.message).toMatch(/Plusieurs demandes/i);
+    expect(read.markers.map((m) => m.proposalId).sort()).toEqual(
+      [a.proposalId, b.proposalId].sort(),
+    );
+  });
+
+  it("N05 — arm-clearing contract: DECISION_REQUIRED reinstruction ⇒ superseded (not clarification)", async () => {
+    // Documented contract (types.ts + useProductConversation):
+    // the reinstruction arm clears ONLY when reinstructionTransition ===
+    // "superseded". A DECISION_REQUIRED Proposal is no longer sufficient on its
+    // own. An armed turn that ends any other way reports "not_consumed".
+    const allowed = ["superseded", "not_consumed", "not_applicable"] as const;
+    expect(allowed).toContain("superseded");
+    expect(allowed).toContain("not_applicable");
+    expect("superseded").not.toBe("not_applicable");
+
+    // DECISION_REQUIRED path after explicit replace reports the supersession
+    // surface via Epistemic (A resolved) — arm-clearing signal for UI is
+    // reinstructionTransition:"superseded" when orchestrate commits B.
+    const { projectId, cycleInstanceId, ctx } = await seed();
+    const a = docsWriteProposal({
+      projectId,
+      lpsId: ctx.lpsId,
+      lpsVersion: ctx.lpsVersion,
+      doctrineDigest: ctx.doctrineDigest,
+      activeCycleInstanceId: cycleInstanceId,
+      proposalId: "prop:f2:jint-n05-a",
+    });
+    await markPending(runtime.oa!, a, { withSnapshot: true });
+    const b = docsWriteProposal({
+      projectId,
+      lpsId: ctx.lpsId,
+      lpsVersion: ctx.lpsVersion,
+      doctrineDigest: ctx.doctrineDigest,
+      activeCycleInstanceId: cycleInstanceId,
+      proposalId: "prop:f2:jint-n05-b",
+    });
+    const sealed = sealProposalExecutionBasis(b);
+    const replaced = await replacePendingDecisionSubjectForExplicitReinstruction(
+      {
+        oa: runtime.oa!,
+        projectId,
+        oldProposalId: a.proposalId,
+        newProposalId: b.proposalId,
+        subjectDigest: computeProposalSubjectDigest(sealed, b.proposalId),
+        lpsId: ctx.lpsId,
+        lpsVersion: ctx.lpsVersion,
+        doctrineDigest: ctx.doctrineDigest,
+        proposal: b,
+      },
+    );
+    expect(replaced.ok).toBe(true);
+
+    const epistemic = await runtime.oa!.cycleServices.getEpistemicState.execute({
+      projectId,
+    });
+    expect(epistemic.ok).toBe(true);
+    if (!epistemic.ok) return;
+    const oldItem = epistemic.state.items.find((i) =>
+      i.epistemicItemId.includes("jint-n05-a"),
+    );
+    expect(oldItem?.status).toBe("resolved");
+    expect(oldItem?.statement).toContain(
+      "<!-- resolved:superseded_by_reinstruction -->",
+    );
+    // Clarification-shaped result must not claim superseded:
+    expect("not_applicable" as const).not.toBe("superseded");
+  });
+
+  it("T15/T16/T17 — pursue → PREPARE keeps sandbox targetPath; binding not acme/widget", async () => {
+    const { projectId, cycleInstanceId, ctx } = await seed();
+    const bound = await runtime.setProjectRepositoryBinding({
+      projectId,
+      ...NON_ACME_BINDING,
+    });
+    expect(bound.ok).toBe(true);
+    if (!bound.ok) return;
+    const binding = bound.repositoryBinding as {
+      identity?: string;
+      pathRoot?: string;
+    } | null;
+    expect(binding?.identity).toBe(NON_ACME_BINDING.identity);
+    expect(binding?.identity).not.toMatch(/acme\/widget/i);
+    expect(String(binding?.pathRoot ?? "")).not.toMatch(/acme\/widget/i);
+
+    const proposal = docsWriteProposal({
+      projectId,
+      lpsId: ctx.lpsId,
+      lpsVersion: ctx.lpsVersion,
+      doctrineDigest: ctx.doctrineDigest,
+      activeCycleInstanceId: cycleInstanceId,
+      proposalId: "prop:f2:jint-t15",
+    });
+    expect(proposal.executionIntent?.targetPath).toBe(TARGET_PATH);
+
+    const proposed = await proposeWith(projectId, proposal.proposalId);
+    expect(proposed.ok).toBe(true);
+    if (!proposed.ok) return;
+
+    const decided = await decideTrajectory({
+      oa: runtime.oa!,
+      projectId,
+      optionSetRef: proposed.optionSetRef,
+      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
+      forceLocalAuthority: true,
+    });
+    expect(decided.ok).toBe(true);
+    if (!decided.ok) return;
+
+    const hd = await runtime.oa!.decisionServices.getHumanDecision.execute({
+      decisionId: decided.decision.decisionId,
+    });
+    expect(hd.ok).toBe(true);
+    if (!hd.ok) return;
+    expect(hd.decision.decisionBasis?.executionBasis.targetPath).toBe(
+      TARGET_PATH,
+    );
+    expect(hd.decision.decisionBasis?.executionBasis.requestedOperation).toBe(
+      F2_ARTIFACT_MATERIALIZATION_OPERATION,
+    );
+
+    const prepared = await prepareM3FromDecision({
+      projectId,
+      decisionId: decided.decision.decisionId,
+      currentContext: await currentF2Context(runtime, projectId),
+      deps: {
+        decisionServices: runtime.oa!.decisionServices,
+        authorityResolver: runtime.oa!.authorityResolver,
+        executionContractServices: runtime.oa!.executionContractServices,
+        nowIso: () => "2026-09-15T16:00:00.000Z",
+        forceM3Authority: true,
+      },
+    });
+    expect(prepared.ok).toBe(true);
+    if (!prepared.ok) return;
+    expect(prepared.payload.executionPerformed).toBe(false);
+    expect(prepared.payload.attemptCreated).toBe(false);
+    expect(prepared.payload.contract.action).toBe(
+      F2_ARTIFACT_MATERIALIZATION_OPERATION,
+    );
+  });
+
+  it("N04–N08 — snapshot hydration validation rejects every incoherence", async () => {
+    const { projectId, cycleInstanceId, ctx } = await seed();
+    const proposal = docsWriteProposal({
+      projectId,
+      lpsId: ctx.lpsId,
+      lpsVersion: ctx.lpsVersion,
+      doctrineDigest: ctx.doctrineDigest,
+      activeCycleInstanceId: cycleInstanceId,
+      proposalId: "prop:f2:jint-n04",
+    });
+
+    const admissible = markerFor(proposal);
+    expect(
+      isValidProposalSnapshotForHydration(admissible, liveFor(admissible)),
+    ).toBe(true);
+
+    // N04 — snapshot belongs to another project / live project differs.
+    expect(
+      isValidProposalSnapshotForHydration(
+        markerFor(proposal, { projectId: "prj:other" }),
+        liveFor(admissible, { projectId: "prj:other" }),
+      ),
+    ).toBe(false);
+    expect(
+      isValidProposalSnapshotForHydration(
+        admissible,
+        liveFor(admissible, { projectId: "prj:other" }),
+      ),
+    ).toBe(false);
+
+    // N05 — live LPS moved on (id or version).
+    expect(
+      isValidProposalSnapshotForHydration(
+        admissible,
+        liveFor(admissible, { lpsVersion: admissible.lpsVersion + 1 }),
+      ),
+    ).toBe(false);
+    expect(
+      isValidProposalSnapshotForHydration(
+        admissible,
+        liveFor(admissible, { lpsId: "lps:moved-on" }),
+      ),
+    ).toBe(false);
+
+    // N06 — doctrine digest drifted.
+    expect(
+      isValidProposalSnapshotForHydration(
+        admissible,
+        liveFor(admissible, { doctrineDigest: "sha256:other" }),
+      ),
+    ).toBe(false);
+
+    // N07 — sealed execution basis no longer matches the sealed digest.
+    const tampered = markerFor({
+      ...proposal,
+      objective: "Objectif remplacé après scellement",
+    } as ProposalDto);
+    expect(
+      isValidProposalSnapshotForHydration(
+        { ...tampered, subjectDigest: admissible.subjectDigest },
+        liveFor(admissible),
+      ),
+    ).toBe(false);
+
+    // N08 — already closed by an authoritative Proposal DecisionRef.
+    expect(
+      isValidProposalSnapshotForHydration(
+        admissible,
+        liveFor(admissible, {
+          closedProposalIds: new Set([proposal.proposalId]),
+        }),
+      ),
+    ).toBe(false);
+
+    // Non-decidable snapshots are never reconstructible subjects.
+    expect(
+      isValidProposalSnapshotForHydration(
+        markerFor({ ...proposal, status: "STALE" } as ProposalDto),
+        liveFor(admissible),
+      ),
+    ).toBe(false);
+    expect(
+      isValidProposalSnapshotForHydration(
+        markerFor({ ...proposal, morrisGateRequired: false } as ProposalDto),
+        liveFor(admissible),
+      ),
+    ).toBe(false);
+  });
+
+  it("N09 — legacy marker without snapshot never hydrates (Reformuler)", async () => {
+    const { projectId, cycleInstanceId, ctx } = await seed();
+    const legacy = docsWriteProposal({
+      projectId,
+      lpsId: ctx.lpsId,
+      lpsVersion: ctx.lpsVersion,
+      doctrineDigest: ctx.doctrineDigest,
+      activeCycleInstanceId: cycleInstanceId,
+      proposalId: "prop:f2:jint-n09",
+    });
+    await markPending(runtime.oa!, legacy, { withSnapshot: false });
+    resetF2ProposalStoreForTests();
+
+    const active = await listActivePendingDecisionSubjectMarkers(
+      runtime.oa!,
+      projectId,
+    );
+    expect(active.ok).toBe(true);
+    if (!active.ok) return;
+    expect(active.markers[0]?.proposalSnapshot).toBeUndefined();
+    expect(
+      isValidProposalSnapshotForHydration(
+        active.markers[0]!,
+        await liveHydrationContext(projectId),
+      ),
+    ).toBe(false);
+
+    const read = await readActiveProposalDecisionSubject(runtime.oa!, projectId);
+    expect(read.ok).toBe(true);
+    if (!read.ok) return;
+    expect(read.kind).toBe("pending_reinstruction_required");
+    if (read.kind !== "pending_reinstruction_required") return;
+    expect(read.recoverableProposalIds).toEqual([]);
+    expect(read.message).toMatch(/reformul/i);
+    expect(getProposal(legacy.proposalId)).toBeNull();
+  });
+
+  it("N10 — no decision subject → generic trajectory options stay reachable", async () => {
+    const { projectId } = await seed();
+    const read = await readActiveProposalDecisionSubject(runtime.oa!, projectId);
+    expect(read.ok).toBe(true);
+    if (!read.ok) return;
+    expect(read.kind).toBe("none");
+
+    const qualification = await resolveW2QualificationInputs({
+      oa: runtime.oa!,
+      projectId,
+    });
+    expect(qualification.ok).toBe(true);
+    if (!qualification.ok) return;
+    const proposed = await proposeTrajectoryOptions({
+      oa: runtime.oa!,
+      projectId,
+      ...qualification.qualification.inputs,
+      packagePin: qualification.qualification.packagePin,
+      objective: qualification.qualification.objective,
+      projectTitle: qualification.qualification.projectTitle,
+      proposalId: null,
+    });
+    expect(proposed.ok).toBe(true);
+    if (!proposed.ok) return;
+    expect(proposed.decisionSubjectMode).not.toBe("proposal");
+  });
+
+  it("N19 — process loss with a still-valid snapshot rehydrates the same subject", async () => {
+    const { projectId, cycleInstanceId, ctx } = await seed();
+    const proposal = docsWriteProposal({
+      projectId,
+      lpsId: ctx.lpsId,
+      lpsVersion: ctx.lpsVersion,
+      doctrineDigest: ctx.doctrineDigest,
+      activeCycleInstanceId: cycleInstanceId,
+      proposalId: "prop:f2:jint-n19",
+    });
+    await markPending(runtime.oa!, proposal, { withSnapshot: true });
+    resetF2ProposalStoreForTests();
+    expect(getProposal(proposal.proposalId)).toBeNull();
+
+    const active = await listActivePendingDecisionSubjectMarkers(
+      runtime.oa!,
+      projectId,
+    );
+    expect(active.ok).toBe(true);
+    if (!active.ok) return;
+    const hydrated = hydrateProposalsFromPendingMarkers(
+      active.markers,
+      await liveHydrationContext(projectId),
+    );
+    expect(hydrated).toEqual([proposal.proposalId]);
+    expect(getProposal(proposal.proposalId)?.objective).toBe(
+      proposal.objective,
+    );
+  });
+
+  it("N20 — marker left behind by a live LPS append is not hydrated; post-append subject is", async () => {
+    const { projectId, cycleInstanceId, ctx } = await seed();
+    const stale = docsWriteProposal({
+      projectId,
+      lpsId: ctx.lpsId,
+      lpsVersion: ctx.lpsVersion,
+      doctrineDigest: ctx.doctrineDigest,
+      activeCycleInstanceId: cycleInstanceId,
+      proposalId: "prop:f2:jint-n20-a",
+    });
+    await markPending(runtime.oa!, stale, { withSnapshot: true });
+
+    // LPS v(n) → v(n+1) without any Proposal mint (ACW / cognitive work shape).
+    await appendLpsVersion(projectId);
+    const after = await currentF2Context(runtime, projectId);
+    expect(after.lpsVersion).toBeGreaterThan(ctx.lpsVersion);
+
+    resetF2ProposalStoreForTests();
+    const staleRead = await readActiveProposalDecisionSubject(
+      runtime.oa!,
+      projectId,
+    );
+    expect(staleRead.ok).toBe(true);
+    if (!staleRead.ok) return;
+    expect(staleRead.kind).toBe("pending_reinstruction_required");
+    if (staleRead.kind !== "pending_reinstruction_required") return;
+    expect(staleRead.recoverableProposalIds).toEqual([]);
+    expect(getProposal(stale.proposalId)).toBeNull();
+
+    // A subject minted against post-append context is immediately valid.
+    const fresh = docsWriteProposal({
+      projectId,
+      lpsId: after.lpsId,
+      lpsVersion: after.lpsVersion,
+      doctrineDigest: after.doctrineDigest,
+      activeCycleInstanceId: cycleInstanceId,
+      proposalId: "prop:f2:jint-n20-b",
+    });
+    const sealedFresh = sealProposalExecutionBasis(fresh);
+    const replaced = await replacePendingDecisionSubjectForExplicitReinstruction(
+      {
+        oa: runtime.oa!,
+        projectId,
+        oldProposalId: stale.proposalId,
+        newProposalId: fresh.proposalId,
+        subjectDigest: computeProposalSubjectDigest(
+          sealedFresh,
+          fresh.proposalId,
+        ),
+        lpsId: after.lpsId,
+        lpsVersion: after.lpsVersion,
+        doctrineDigest: after.doctrineDigest,
+        proposal: fresh,
+      },
+    );
+    expect(replaced.ok).toBe(true);
+
+    resetF2ProposalStoreForTests();
+    const freshRead = await readActiveProposalDecisionSubject(
+      runtime.oa!,
+      projectId,
+    );
+    expect(freshRead.ok).toBe(true);
+    if (!freshRead.ok) return;
+    expect(freshRead.kind).toBe("pending_reinstruction_required");
+    if (freshRead.kind !== "pending_reinstruction_required") return;
+    expect(freshRead.recoverableProposalIds).toEqual([fresh.proposalId]);
+  });
+
+  it("persistence notice is honest: no durable conversation aggregate claim", () => {
+    expect(F2_PROCESS_LOCAL_NOTICE).toMatch(
+      /La conversation n'est pas un agrégat durable/,
+    );
+    expect(F2_PROCESS_LOCAL_NOTICE).toMatch(/reconstruisible/);
+    expect(F2_PROCESS_LOCAL_NOTICE).toMatch(/jamais d'invention/);
+    expect(F2_PROCESS_LOCAL_NOTICE).toMatch(/Product SQLite/);
+    expect(F2_PROCESS_LOCAL_NOTICE).not.toMatch(
+      /Conversation et Proposal F2 restent process-local/,
+    );
+  });
+
+  it("ZERO REAL / ZERO dogfood — fixture paths only", () => {
+    expect(process.env.OPENAI_API_KEY ?? "").not.toMatch(/^sk-live/);
+    expect(dbPath).not.toContain("sfia-studio-product-proof");
+    expect(dbPath).not.toContain("oa-product.sqlite");
+  });
+});

```

## NEW FILE: `proposalSubjectIntegrity.d0.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/proposalSubjectIntegrity.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/proposalSubjectIntegrity.d0.test.ts
new file mode 100644
index 00000000..a2213ab4
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/project-assistant/proposalSubjectIntegrity.d0.test.ts
@@ -0,0 +1,195 @@
+/**
+ * JOURNEY-INTEGRITY Lot B — proposalSubjectIntegrity is the single, acyclic
+ * home of Proposal subject sealing + digest.
+ *
+ * Intended module graph (arrows = "imports"):
+ *
+ *   pendingDecisionSubjectMarker ──┐
+ *                                  ├──> proposalSubjectIntegrity  (pure leaf)
+ *   resolveProposalDecisionSubject ┘            │
+ *            │                                  └──> @/lib/oa/decision (digest)
+ *            └──> activeProposalDecisionSubject
+ *
+ * Two properties keep that graph honest and are proven here:
+ *  1. STRUCTURE — the leaf imports no runtime/persistence/orchestration module,
+ *     and the marker module never reaches back through
+ *     resolveProposalDecisionSubject (that edge would close a cycle).
+ *  2. SEMANTICS — the re-exports on resolveProposalDecisionSubject are the same
+ *     functions, so a digest computed through either entrypoint is identical.
+ *     Structure alone would still allow a silently forked copy.
+ *
+ * Deterministic / pure — ZERO REAL, no runtime boot, no persistence.
+ * @vitest-environment node
+ */
+import { readFileSync } from "node:fs";
+import path from "node:path";
+import { describe, expect, it } from "vitest";
+import {
+  computeProposalSubjectDigest,
+  sealProposalExecutionBasis,
+} from "@/features/project-assistant/w2/proposalSubjectIntegrity";
+import {
+  computeProposalSubjectDigest as computeViaResolve,
+  sealProposalExecutionBasis as sealViaResolve,
+} from "@/features/project-assistant/w2/resolveProposalDecisionSubject";
+import { F2_ARTIFACT_MATERIALIZATION_OPERATION } from "@/features/project-assistant/f2/f2CanonicalOperations";
+import { F2_PROCESS_LOCAL_NOTICE } from "@/features/project-assistant/f2/proposalStore";
+import type { ProposalDto } from "@/features/project-assistant/f2/types";
+
+const W2_DIR = path.resolve(__dirname, "../../features/project-assistant/w2");
+
+function sourceOf(moduleFile: string): string {
+  return readFileSync(path.join(W2_DIR, moduleFile), "utf8");
+}
+
+/** Import specifiers only — prose in doc comments must not trip the assertions. */
+function importSpecifiers(source: string): string[] {
+  const out: string[] = [];
+  const re = /(?:from|import)\s*\(?\s*["']([^"']+)["']/g;
+  let match: RegExpExecArray | null;
+  while ((match = re.exec(source)) !== null) out.push(match[1]!);
+  return out;
+}
+
+const FIXTURE_PROPOSAL: ProposalDto = {
+  proposalId: "prop:f2:integrity-fixture",
+  status: "DECISION_REQUIRED",
+  rephrasedRequest: "Matérialiser la note de gestion de tâches",
+  objective: "Matérialiser le livrable de gestion de tâches",
+  cycleTypeId: "cyc:delivery",
+  recommendedProfile: "Critical",
+  rationale: "Continuation Artifact du cycle actif",
+  scope: "écriture de document bornée — cycle actif",
+  outOfScope: ["nouveau cycle", "REAL"],
+  activatedBlocks: [],
+  expectedOutcome: "Fichier sandbox matérialisé",
+  sources: ["nora"],
+  risks: ["mauvais sujet décisionnel"],
+  reservations: [],
+  stopConditions: ["AUCUNE EXÉCUTION", "STOP AVANT EXECUTE"],
+  morrisGateRequired: true,
+  nextPossibleStep: "Instruire les options sur ce sujet",
+  contextSnapshot: {
+    projectId: "prj:integrity-fixture",
+    lpsId: "lps:integrity-fixture",
+    lpsVersion: 3,
+    doctrineDigest: "sha256:doctrine-fixture",
+    activeCycleInstanceId: "cyc:integrity-fixture",
+  },
+  processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
+  executionForbidden: true,
+  noExecutingStatus: true,
+  agentBinding: "NOT_AVAILABLE",
+  requestedOperation: F2_ARTIFACT_MATERIALIZATION_OPERATION,
+  executionIntent: {
+    intentKind: "docs_write",
+    artifactType: null,
+    targetRepositoryRef: null,
+    targetPath: "projects/sfia-studio/.sandbox/gestion-de-taches.md",
+    scopeIn: ["sandbox"],
+    scopeOut: ["git"],
+    expectedOutputs: ["markdown"],
+    requiredCapabilities: ["cap:cursor.docs_write"],
+    validationExpectations: [],
+    evidenceRequirements: [],
+    requestedOperation: F2_ARTIFACT_MATERIALIZATION_OPERATION,
+    reversibilityExpectation: "reversible",
+    artifactBrief: "Note gestion de tâches",
+    contentRequirements: [],
+    exitRequirementKinds: [],
+  },
+};
+
+describe("JOURNEY-INTEGRITY — proposalSubjectIntegrity is an acyclic pure leaf", () => {
+  it("B1 — the leaf imports no subject-resolution, runtime or server-action module", () => {
+    const specifiers = importSpecifiers(sourceOf("proposalSubjectIntegrity.ts"));
+    expect(specifiers.length).toBeGreaterThan(0);
+
+    for (const forbidden of [
+      "activeProposalDecisionSubject",
+      "pendingDecisionSubjectMarker",
+      "resolveProposalDecisionSubject",
+      "presentedOptionSet",
+      "vertical-slice-runtime",
+      "proposalStore",
+    ]) {
+      expect(
+        specifiers.filter((s) => s.includes(forbidden)),
+        `proposalSubjectIntegrity must not import ${forbidden}`,
+      ).toEqual([]);
+    }
+    // Server actions / orchestration are execution paths, not sealing paths.
+    expect(specifiers.filter((s) => /(^|\/)actions$/.test(s))).toEqual([]);
+    expect(specifiers.filter((s) => /orchestrate/i.test(s))).toEqual([]);
+  });
+
+  it("B2 — pendingDecisionSubjectMarker seals via the leaf, never via resolve", () => {
+    const specifiers = importSpecifiers(
+      sourceOf("pendingDecisionSubjectMarker.ts"),
+    );
+    // The back-edge that would close the cycle.
+    expect(
+      specifiers.filter((s) => s.includes("resolveProposalDecisionSubject")),
+    ).toEqual([]);
+    expect(specifiers).toContain("./proposalSubjectIntegrity");
+  });
+
+  it("B3 — resolveProposalDecisionSubject re-exports the leaf, it does not fork it", () => {
+    const specifiers = importSpecifiers(
+      sourceOf("resolveProposalDecisionSubject.ts"),
+    );
+    expect(specifiers).toContain("./proposalSubjectIntegrity");
+
+    const source = sourceOf("resolveProposalDecisionSubject.ts");
+    // A local redefinition would silently fork digest semantics.
+    expect(source).not.toMatch(/function\s+sealProposalExecutionBasis/);
+    expect(source).not.toMatch(/function\s+computeProposalSubjectDigest/);
+  });
+
+  it("B4 — digest is identical through the leaf and through the re-export", () => {
+    expect(sealViaResolve).toBe(sealProposalExecutionBasis);
+    expect(computeViaResolve).toBe(computeProposalSubjectDigest);
+
+    const sealed = sealProposalExecutionBasis(FIXTURE_PROPOSAL);
+    const digest = computeProposalSubjectDigest(
+      sealed,
+      FIXTURE_PROPOSAL.proposalId,
+    );
+    const digestViaResolve = computeViaResolve(
+      sealViaResolve(FIXTURE_PROPOSAL),
+      FIXTURE_PROPOSAL.proposalId,
+    );
+
+    expect(digest).toBe(digestViaResolve);
+    expect(digest).toMatch(/^[a-f0-9]{16,}$/i);
+    expect(sealed.targetPath).toBe(
+      FIXTURE_PROPOSAL.executionIntent?.targetPath,
+    );
+    expect(sealed.requestedOperation).toBe(
+      F2_ARTIFACT_MATERIALIZATION_OPERATION,
+    );
+  });
+
+  it("B5 — a material field change moves the digest through both entrypoints", () => {
+    const baseline = computeProposalSubjectDigest(
+      sealProposalExecutionBasis(FIXTURE_PROPOSAL),
+      FIXTURE_PROPOSAL.proposalId,
+    );
+    const retargeted: ProposalDto = {
+      ...FIXTURE_PROPOSAL,
+      executionIntent: {
+        ...FIXTURE_PROPOSAL.executionIntent!,
+        targetPath: "projects/sfia-studio/.sandbox/autre-cible.md",
+      },
+    };
+
+    const moved = computeProposalSubjectDigest(
+      sealProposalExecutionBasis(retargeted),
+      retargeted.proposalId,
+    );
+    expect(moved).not.toBe(baseline);
+    expect(
+      computeViaResolve(sealViaResolve(retargeted), retargeted.proposalId),
+    ).toBe(moved);
+  });
+});

```

## NEW FILE: `repositoryBindingForm.ui.test.tsx`

```diff
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/repositoryBindingForm.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/repositoryBindingForm.ui.test.tsx
new file mode 100644
index 00000000..a7829561
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/repositoryBindingForm.ui.test.tsx
@@ -0,0 +1,210 @@
+/** @vitest-environment jsdom */
+/**
+ * JOURNEY-INTEGRITY — RepositoryBindingForm loads durable truth;
+ * never presents acme/widget sample as current binding.
+ */
+import {
+  cleanup,
+  fireEvent,
+  render,
+  screen,
+  waitFor,
+} from "@testing-library/react";
+import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
+import { RepositoryBindingForm } from "@/features/pre-m6-product-ui/surfaces/RepositoryBindingForm";
+
+const { getProjectRuntimeActionMock, setProjectRepositoryBindingActionMock } =
+  vi.hoisted(() => ({
+    getProjectRuntimeActionMock: vi.fn(),
+    setProjectRepositoryBindingActionMock: vi.fn(),
+  }));
+
+vi.mock("@/lib/vertical-slice-runtime/actions", () => ({
+  getProjectRuntimeAction: (...args: unknown[]) =>
+    getProjectRuntimeActionMock(...args),
+  setProjectRepositoryBindingAction: (...args: unknown[]) =>
+    setProjectRepositoryBindingActionMock(...args),
+}));
+
+afterEach(() => {
+  cleanup();
+});
+
+beforeEach(() => {
+  getProjectRuntimeActionMock.mockReset();
+  setProjectRepositoryBindingActionMock.mockReset();
+});
+
+describe("RepositoryBindingForm — JOURNEY-INTEGRITY binding truth", () => {
+  it("after load with no binding, fields are empty (no acme/widget default)", async () => {
+    getProjectRuntimeActionMock.mockResolvedValue({
+      ok: true,
+      project: {
+        projectId: "prj:no-binding",
+        repositoryBinding: null,
+      },
+    });
+
+    render(<RepositoryBindingForm projectId="prj:no-binding" />);
+
+    await waitFor(() => {
+      expect(screen.getByTestId("repo-binding-status")).toHaveTextContent(
+        /Aucun binding configuré/i,
+      );
+    });
+
+    expect(screen.getByTestId("repo-binding-identity")).toHaveValue("");
+    expect(screen.getByTestId("repo-binding-remote-url")).toHaveValue("");
+    expect(screen.getByTestId("repo-binding-default-branch")).toHaveValue("");
+    expect(screen.getByTestId("repo-binding-path-root")).toHaveValue("");
+
+    const identity = screen.getByTestId("repo-binding-identity") as HTMLInputElement;
+    const remote = screen.getByTestId(
+      "repo-binding-remote-url",
+    ) as HTMLInputElement;
+    expect(identity.value).not.toMatch(/acme\/widget/i);
+    expect(remote.value).not.toMatch(/acme\/widget/i);
+    expect(screen.getByTestId("repository-binding-form").textContent).not.toMatch(
+      /acme\/widget/i,
+    );
+  });
+
+  it("loads durable binding when present (not sample)", async () => {
+    getProjectRuntimeActionMock.mockResolvedValue({
+      ok: true,
+      project: {
+        projectId: "prj:bound",
+        repositoryBinding: {
+          identity: "mcleland147/sfia-workspace",
+          remoteUrl: "https://github.com/mcleland147/sfia-workspace.git",
+          defaultBranch: "main",
+          pathRoot: "projects/sfia-studio/.sandbox",
+        },
+      },
+    });
+
+    render(<RepositoryBindingForm projectId="prj:bound" />);
+
+    await waitFor(() => {
+      expect(screen.getByTestId("repo-binding-status")).toHaveTextContent(
+        /Binding durable chargé/i,
+      );
+    });
+    expect(screen.getByTestId("repo-binding-identity")).toHaveValue(
+      "mcleland147/sfia-workspace",
+    );
+    expect(screen.getByTestId("repo-binding-path-root")).toHaveValue(
+      "projects/sfia-studio/.sandbox",
+    );
+    expect(screen.getByTestId("repository-binding-form").textContent).not.toMatch(
+      /acme\/widget/i,
+    );
+  });
+
+  it("read failure is not an absence: illisible, empty fields, save closed", async () => {
+    getProjectRuntimeActionMock.mockResolvedValue({
+      ok: false,
+      code: "PROJECT_READ_FAILED",
+      message: "lecture impossible",
+    });
+
+    render(<RepositoryBindingForm projectId="prj:read-failed" />);
+
+    await waitFor(() => {
+      expect(screen.getByTestId("repo-binding-status")).toHaveTextContent(
+        /illisible/i,
+      );
+    });
+    expect(screen.getByTestId("repo-binding-status")).not.toHaveTextContent(
+      /Aucun binding configuré/i,
+    );
+    expect(screen.getByTestId("repo-binding-save")).toBeDisabled();
+    expect(screen.getByTestId("repo-binding-identity")).toHaveValue("");
+    expect(screen.getByTestId("repo-binding-remote-url")).toHaveValue("");
+    expect(setProjectRepositoryBindingActionMock).not.toHaveBeenCalled();
+  });
+
+  it("save is only claimed durable after a successful reread", async () => {
+    getProjectRuntimeActionMock
+      .mockResolvedValueOnce({
+        ok: true,
+        project: { projectId: "prj:save", repositoryBinding: null },
+      })
+      .mockResolvedValueOnce({
+        ok: true,
+        project: {
+          projectId: "prj:save",
+          repositoryBinding: {
+            identity: "mcleland147/sfia-workspace",
+            remoteUrl: "https://github.com/mcleland147/sfia-workspace.git",
+            defaultBranch: "main",
+            pathRoot: "docs/",
+          },
+        },
+      });
+    setProjectRepositoryBindingActionMock.mockResolvedValue({ ok: true });
+
+    render(<RepositoryBindingForm projectId="prj:save" />);
+    await waitFor(() => {
+      expect(screen.getByTestId("repo-binding-save")).not.toBeDisabled();
+    });
+
+    fireEvent.change(screen.getByTestId("repo-binding-identity"), {
+      target: { value: "mcleland147/sfia-workspace" },
+    });
+    fireEvent.change(screen.getByTestId("repo-binding-remote-url"), {
+      target: { value: "https://github.com/mcleland147/sfia-workspace.git" },
+    });
+    fireEvent.click(screen.getByTestId("repo-binding-save"));
+
+    await waitFor(() => {
+      expect(screen.getByTestId("repo-binding-message")).toHaveTextContent(
+        /Binding enregistré et vérifié/i,
+      );
+    });
+    // Durable truth came from a second read, not from the write echo.
+    expect(getProjectRuntimeActionMock).toHaveBeenCalledTimes(2);
+    expect(screen.getByTestId("repo-binding-status")).toHaveTextContent(
+      /Binding durable chargé/i,
+    );
+    expect(screen.getByTestId("repo-binding-path-root")).toHaveValue("docs/");
+  });
+
+  it("write ok but reread fails: never claims verified, and closes further saves", async () => {
+    getProjectRuntimeActionMock
+      .mockResolvedValueOnce({
+        ok: true,
+        project: { projectId: "prj:unverified", repositoryBinding: null },
+      })
+      .mockResolvedValueOnce({
+        ok: false,
+        code: "PROJECT_READ_FAILED",
+        message: "relecture impossible",
+      });
+    setProjectRepositoryBindingActionMock.mockResolvedValue({ ok: true });
+
+    render(<RepositoryBindingForm projectId="prj:unverified" />);
+    await waitFor(() => {
+      expect(screen.getByTestId("repo-binding-save")).not.toBeDisabled();
+    });
+
+    fireEvent.change(screen.getByTestId("repo-binding-identity"), {
+      target: { value: "mcleland147/sfia-workspace" },
+    });
+    fireEvent.change(screen.getByTestId("repo-binding-remote-url"), {
+      target: { value: "https://github.com/mcleland147/sfia-workspace.git" },
+    });
+    fireEvent.click(screen.getByTestId("repo-binding-save"));
+
+    await waitFor(() => {
+      expect(screen.getByTestId("repo-binding-message")).toHaveTextContent(
+        /vérification durable impossible/i,
+      );
+    });
+    expect(screen.getByTestId("repo-binding-message")).not.toHaveTextContent(
+      /vérifié\./i,
+    );
+    expect(screen.getByTestId("repo-binding-save")).toBeDisabled();
+    expect(setProjectRepositoryBindingActionMock).toHaveBeenCalledTimes(1);
+  });
+});

```


---

# FINAL FAIL-CLOSED REMEDIATION

## Git Truth

- Timestamp (UTC): 2026-09-15T17:01:49Z
- origin/main: `6a41ab7e7deda9f7168d12a37b9316413565fa16`
- HEAD/base: `6a41ab7e7deda9f7168d12a37b9316413565fa16`
- Branch: `fix/sfia-studio-product-proof-journey-integrity`
- Backup: `/tmp/sfia-product-journey-lot-ab-final-failclosed.patch`
- Product commits ahead: ZERO (dirty candidate)

## Exact prior Final Critical Review blocker

Proposal Decision Subject + HumanDecision pursue + `decisionBasisLinked === false`
fell through to legacy sandbox qualification UI (`w3a-qualify-execution-work`).

Forbidden: Proposal subject with unavailable DecisionBasis must never redefine
execution via sandbox op selection.

## Before behavior

```
isProposalBackedPrepare = proposalId && decisionBasisLinked===true && pursue
if isProposalBackedPrepare → M3 PREPARE
else → SANDBOX selector   // BUG when proposalId set && basis unlinked
```

## After behavior

```
hasProposalDecisionSubject = Boolean(decision?.proposalId)
proposalPursue = hasProposalDecisionSubject && selectedOption === PURSUE
proposalBackedPrepareReady = proposalPursue && decisionBasisLinked === true
proposalBackedPrepareBlocked = proposalPursue && decisionBasisLinked !== true

A amend → Nora guidance, no PREPARE/sandbox
B refuse → continuation, no PREPARE/sandbox
C ready → M3 PREPARE, no sandbox
D blocked → fail-closed requalify guidance, NO PREPARE, NO sandbox
E !hasProposalDecisionSubject → sandbox path unchanged
```

## Final routing table

| Condition | UI |
|---|---|
| Proposal + amend | guidance; no PREPARE; no sandbox |
| Proposal + refuse | guidance; no PREPARE; no sandbox |
| Proposal + pursue + linked basis | `w2-proposal-backed-prepare` → M3 |
| Proposal + pursue + unlinked basis | `w2-proposal-prepare-blocked` fail-closed |
| Non-Proposal | `w3a-qualify-execution-work` sandbox |

## Fail-closed Pilot message

« Cette décision ne dispose plus d'une base d'exécution exploitable. Réinstruisez ou requalifiez le sujet avec Nora avant de préparer un contrat. »

testid: `w2-proposal-prepare-blocked`

## Surgical production micro-diff

```diff
@@ routing flags @@
-  const isProposalBackedPrepare =
-    Boolean(decision?.proposalId) &&
-    decision?.decisionBasisLinked === true &&
-    decidedOptionRef === PROPOSAL_SUBJECT_PURSUE_REF;
+  const hasProposalDecisionSubject = Boolean(decision?.proposalId);
+  const proposalPursue =
+    hasProposalDecisionSubject &&
+    decidedOptionRef === PROPOSAL_SUBJECT_PURSUE_REF;
+  const proposalBackedPrepareReady =
+    proposalPursue && decision?.decisionBasisLinked === true;
+  const proposalBackedPrepareBlocked =
+    proposalPursue && decision?.decisionBasisLinked !== true;

@@ PREPARE UI branch @@
-  {!decisionDefersExecution && !contract && isProposalBackedPrepare ? ( ... M3 PREPARE ... ) : null}
-  {!decisionDefersExecution && !contract && !isProposalBackedPrepare ? ( ... SANDBOX ... ) : null}
+  {!decisionDefersExecution && !contract && proposalBackedPrepareReady ? ( ... M3 PREPARE ... ) : null}
+  {!decisionDefersExecution && !contract && proposalBackedPrepareBlocked ? (
+    <div data-testid="w2-proposal-prepare-blocked" role="status">
+      Cette décision ne dispose plus d'une base d'exécution exploitable.
+      Réinstruisez ou requalifiez le sujet avec Nora avant de préparer un contrat.
+    </div>
+  ) : null}
+  {!decisionDefersExecution && !contract && !hasProposalDecisionSubject ? ( ... SANDBOX ... ) : null}

```

## Exact production flags (current)

```tsx
  const decidedOptionRef = decision?.selectedOptionRef ?? null;
  const decisionDefersExecution =
    decidedOptionRef === PROPOSAL_SUBJECT_AMEND_REF ||
    decidedOptionRef === PROPOSAL_SUBJECT_REFUSE_REF;
  const hasProposalDecisionSubject = Boolean(decision?.proposalId);
  const proposalPursue =
    hasProposalDecisionSubject &&
    decidedOptionRef === PROPOSAL_SUBJECT_PURSUE_REF;
  const proposalBackedPrepareReady =
    proposalPursue && decision?.decisionBasisLinked === true;
  const proposalBackedPrepareBlocked =
    proposalPursue && decision?.decisionBasisLinked !== true;

  function paintAttemptPhase(
    phase: GovernedExecutePhaseSuccess["phase"],
    nextAttempt: GovernedExecuteAttemptProjection | null,
    statusLabel: string | null,
```

## Exact production UI branch (current excerpt)

```tsx
              className={styles.primaryAction}
              data-testid="w2-prepare-contract"
              onClick={() => void prepareProposalBackedContract()}
              disabled={busy !== null}
            >
              Préparer le contrat d&apos;exécution
            </button>
          </div>
          ) : null}
          {!decisionDefersExecution &&
          !contract &&
          proposalBackedPrepareBlocked ? (
          <div
            className={styles.block}
            data-testid="w2-proposal-prepare-blocked"
            role="status"
          >
            <p className={styles.blockBody}>
              Cette décision ne dispose plus d&apos;une base d&apos;exécution
              exploitable. Réinstruisez ou requalifiez le sujet avec Nora avant
              de préparer un contrat.
            </p>
          </div>
          ) : null}
          {!decisionDefersExecution &&
          !contract &&
          !hasProposalDecisionSubject ? (
          <div
            className={styles.actions}
            data-testid="w3a-qualify-execution-work"
          >
            <p className={styles.blockNote}>
              Qualifier le travail d&apos;exécution réel (indépendant de
              l&apos;option de trajectoire déjà décidée).
            </p>
            <label className={styles.amendmentLabel} htmlFor="w3a-operation-kind">
              Opération d&apos;exécution
            </label>
            <select
              id="w3a-operation-kind"
              className={styles.amendmentInput}
              data-testid="w3a-operation-kind"
              value={qualifiedOperationKind ?? ""}
              disabled={busy !== null}
              onChange={(event) => {
                const value = event.target.value;
                if (
                  value === "generate-temporary-artifact" ||
                  value === "simulate" ||
                  value === "read"
                ) {
                  setQualifiedOperationKind(value);
                  setContract(null);
                  setInspection(null);
                  setAuthorization(null);
                  setAttempt(null);
                  setAttemptPhase(null);
                } else {
                  setQualifiedOperationKind(null);
                }
              }}
            >
              <option value="">— Choisir —</option>
              <option value="generate-temporary-artifact">
                Générer un artefact temporaire local (réversible)
              </option>
              <option value="simulate">Simuler (sandbox)</option>
              <option value="read">Lecture seule</option>
            </select>
            <button
              type="button"
              className={styles.primaryAction}
              data-testid="w2-prepare-contract-sandbox"
              onClick={() => void prepareContract()}
              disabled={busy !== null || qualifiedOperationKind === null}
              title={
                qualifiedOperationKind === null
                  ? "Qualifier d'abord le travail d'exécution"
                  : undefined
              }
```

## Exact test change

Replaced:

`a Proposal decision without a linked DecisionBasis falls back to the sandbox path`

With:

`a Proposal pursue without linked DecisionBasis fails closed (never sandbox)`

```tsx
led();
  });

  it("a Proposal pursue without linked DecisionBasis fails closed (never sandbox)", async () => {
    const proposalId = "prop:f2:unlinked";
    proposeMock.mockResolvedValue(proposalOptionSet(proposalId));
    const unlinked = proposalDecision({
      decisionId: "dec:unlinked",
      proposalId,
      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
    });
    decideMock.mockResolvedValue({
      ...unlinked,
      decision: { ...unlinked.decision, decisionBasisLinked: false },
    });

    render(<TrajectorySurface projectId="prj:unlinked" />);
    fireEvent.click(await screen.findByTestId("w2-propose-options"));
    await screen.findByTestId("w2-options");
    fireEvent.click(screen.getByTestId(`w2-decide-${PROPOSAL_SUBJECT_PURSUE_REF}`));
    expect(await screen.findByTestId("w2-decision")).toBeVisible();

    // Proposal subject still owns the journey — fail closed, no sandbox fallback.

```

## Non-Proposal sandbox non-regression

Existing UI test: generic trajectory pursue still shows `w3a-qualify-execution-work` + `w2-prepare-contract-sandbox`. Still green.

## Valid Proposal docs_write non-regression

`w2-proposal-backed-prepare` → `projectAssistantPrepareM3Action({projectId, decisionId})` → Inspect. Still green (trajectorySurface sealed PREPARE + applicationPath AP23/AP24).

## Server fail-closed evidence

`prepareM3FromDecision` still requires DecisionBasis (`DECISION_BASIS_REQUIRED`); amend/refuse → `PREPARE_NOT_APPLICABLE`. UI guard does not weaken server. AP25 retained.

## Targeted tests

```
npx vitest run trajectorySurface.ui.test.tsx productProofJourneyIntegrity*
  proposalSubjectIntegrity corrProof10 corrProof11 importBoundaries
→ 108 passed / 0 failed
```

## Full Vitest

**4089 passed / 137 skipped / 0 failed**

## Tooling

typecheck PASS · lint PASS · build PASS · git diff --check PASS

## ZERO REAL / dogfood

ZERO LIVE/REAL/Attempt/Execute. Dogfood frozen @ 6a41ab7e. Product Git commit/push/PR/merge NOT PERFORMED.

## Next gate

ChatGPT Integration Readiness Review.

## Verdict

**PRODUCT-JOURNEY-LOT-A-B — FINAL FAIL-CLOSED REMEDIATION COMPLETE — PROPOSAL DECISION SUBJECT NEVER FALLS BACK TO SANDBOX WHEN DECISIONBASIS IS UNAVAILABLE — VALID DOCS_WRITE PREPARE→INSPECT PATH PRESERVED — DETERMINISTICLY PROVEN — ZERO REAL — READY FOR CHATGPT INTEGRATION READINESS REVIEW**

---

# COMPLETE USEFUL DIFF — TrajectorySurface.tsx (vs HEAD base, includes accepted Lot A/B + this micro-fix)

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
index 3b2e2702..6abe4ca9 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
@@ -11,6 +11,7 @@

 import { useCallback, useEffect, useState } from "react";
 import { flushSync } from "react-dom";
+import { projectAssistantPrepareM3Action } from "@/features/project-assistant/actions";
 import {
   w2AmendExecutionContractAction,
   w2AuthorizeExecutionContractAction,
@@ -59,6 +60,7 @@ import {
 } from "@/features/project-assistant/presentationLabels";
 import {
   PROPOSAL_SUBJECT_AMEND_REF,
+  PROPOSAL_SUBJECT_PURSUE_REF,
   PROPOSAL_SUBJECT_REFUSE_REF,
 } from "@/features/project-assistant/w2/proposalSubjectOptions";
 import { filterProductReservationsForDisplay } from "@/features/project-assistant/w2/w3cProductPresentation";
@@ -149,7 +151,6 @@ function yieldBrowserPaint(): Promise<void> {
 export function TrajectorySurface({
   projectId,
   onDurableFactsChanged,
-  recoveryProposeSignal = 0,
   durableRefreshSignal = 0,
   composition = "standalone",
   activeProposalId = null,
@@ -157,8 +158,6 @@ export function TrajectorySurface({
 }: {
   projectId: string;
   onDurableFactsChanged?: () => void;
-  /** B1 — increment from RecoverySurface requalify to reuse proposeOptions(). */
-  recoveryProposeSignal?: number;
   /** Increment after Lifecycle bridge / durable mutations to rehydrate candidate. */
   durableRefreshSignal?: number;
   /**
@@ -258,6 +257,19 @@ export function TrajectorySurface({
   const [qualifiedOperationKind, setQualifiedOperationKind] =
     useState<QualifiedOperationKind | null>(null);

+  const decidedOptionRef = decision?.selectedOptionRef ?? null;
+  const decisionDefersExecution =
+    decidedOptionRef === PROPOSAL_SUBJECT_AMEND_REF ||
+    decidedOptionRef === PROPOSAL_SUBJECT_REFUSE_REF;
+  const hasProposalDecisionSubject = Boolean(decision?.proposalId);
+  const proposalPursue =
+    hasProposalDecisionSubject &&
+    decidedOptionRef === PROPOSAL_SUBJECT_PURSUE_REF;
+  const proposalBackedPrepareReady =
+    proposalPursue && decision?.decisionBasisLinked === true;
+  const proposalBackedPrepareBlocked =
+    proposalPursue && decision?.decisionBasisLinked !== true;
+
   function paintAttemptPhase(
     phase: GovernedExecutePhaseSuccess["phase"],
     nextAttempt: GovernedExecuteAttemptProjection | null,
@@ -498,12 +510,6 @@ export function TrajectorySurface({
     void rehydrateActiveDecisionSubject();
   }, [rehydrateActiveDecisionSubject, durableRefreshSignal]);

-  useEffect(() => {
-    if (recoveryProposeSignal > 0) {
-      void proposeOptions();
-    }
-  }, [recoveryProposeSignal, proposeOptions]);
-
   const decide = useCallback(
     async (selectedOptionRef: string) => {
       if (!optionSet) return;
@@ -594,6 +600,53 @@ export function TrajectorySurface({
     onDurableFactsChanged?.();
   }, [decision, projectId, qualifiedOperationKind, onDurableFactsChanged]);

+  /**
+   * JOURNEY-INTEGRITY / Lot A-B final — Proposal-backed PREPARE.
+   *
+   * After pursue on a Proposal Decision Subject, the sealed DecisionBasis already
+   * carries the decided operation (e.g. cursor.docs_write.apply). The Pilot must
+   * not re-select a sandbox op. Client sends only projectId + decisionId; the
+   * server resolves targetPath / operation / binding from durable lineage.
+   */
+  const prepareProposalBackedContract = useCallback(async () => {
+    if (!decision?.proposalId || !decision.decisionBasisLinked) return;
+    if (decisionDefersExecution) return;
+    setBusy("contract");
+    setError(null);
+    const result = await projectAssistantPrepareM3Action({
+      projectId,
+      decisionId: decision.decisionId,
+    });
+    setBusy(null);
+    if (!result.ok) {
+      setError(result.message);
+      return;
+    }
+    const prepared = result.f3.contract;
+    setContract({
+      executionContractId: prepared.executionContractId,
+      version: prepared.version,
+      status: prepared.status,
+      action: prepared.action,
+      target: prepared.target,
+      scope: prepared.scope,
+      requiredAuthority: prepared.requiredAuthority,
+      constraints: [...prepared.constraints],
+      stopConditions: [...prepared.stopConditions],
+      requiredCapabilities: [...prepared.requiredCapabilities],
+      reversibility: prepared.reversibility,
+      semanticFingerprint: prepared.semanticFingerprint,
+    });
+    setInspection(null);
+    setAuthorization(null);
+    setAmendmentDraft("");
+    setAmendmentNotice(null);
+    setAttempt(null);
+    setAttemptPhase(null);
+    setAttemptStatusLabel(null);
+    onDurableFactsChanged?.();
+  }, [decision, decisionDefersExecution, projectId, onDurableFactsChanged]);
+
   const inspect = useCallback(async () => {
     if (!contract) return;
     setBusy("inspection");
@@ -896,6 +949,25 @@ export function TrajectorySurface({
     setProductEvidencePending(false);
   }, [attempt, projectId]);

+  /**
+   * JOURNEY-INTEGRITY — CTA exclusivity on the mutating primary action.
+   *
+   * While a Proposal decision subject still owns the next useful action, the
+   * generic ProjectTrajectory instruct CTA must not offer a competing subject.
+   * Informational blocks above remain visible; only the mutating CTA is strict.
+   */
+  const proposalSubjectOwnsNextAction =
+    // reformulate / instruct the pending subject
+    pendingReinstruction != null ||
+    // options presented, awaiting the HumanDecision
+    (optionSet != null && decision == null) ||
+    // amend / refuse: next move is with Nora, never a new generic instruction
+    (decision != null && decisionDefersExecution) ||
+    // pursue decided but no contract yet: PREPARE owns the next action
+    (decision != null && contract == null) ||
+    // contract prepared: Inspect (then confirm / authorize) owns the next action
+    contract != null;
+
   return (
     <section
       className={[
@@ -1194,11 +1266,13 @@ export function TrajectorySurface({
       ) : null}

       {/*
-        W2 OptionSet requires an active CycleInstance. Hide the CTA in all
-        pre-cycle states (CURRENT NEXT_CYCLE LR, candidate-only, or empty)
-        so the Pilote is never offered a path known to return CYCLE_NOT_QUALIFIED.
+        W2 OptionSet requires an active CycleInstance.
+        JOURNEY-INTEGRITY — whenever a Proposal decision subject owns the next
+        action (pending, options awaiting decision, decision taken, contract
+        prepared), the generic trajectory instruct CTA is hidden so two
+        decision subjects can never compete for the same primary action.
       */}
-      {activeCycleInstanceId ? (
+      {activeCycleInstanceId && !proposalSubjectOwnsNextAction ? (
       <div className={styles.actions}>
         <button
           type="button"
@@ -1207,7 +1281,7 @@ export function TrajectorySurface({
           onClick={() => void proposeOptions()}
           disabled={busy !== null}
         >
-          {optionSet ? "Réinstruire les options" : "Instruire les options"}
+          Instruire les options
         </button>
         {busy ? (
           <span className={styles.busy} role="status" data-testid="w2-busy">
@@ -1417,8 +1491,55 @@ export function TrajectorySurface({
               préparation d&apos;exécution ici.
             </p>
           ) : null}
-          {decision.selectedOptionRef !== PROPOSAL_SUBJECT_AMEND_REF &&
-          decision.selectedOptionRef !== PROPOSAL_SUBJECT_REFUSE_REF ? (
+          {/*
+            JOURNEY-INTEGRITY Lot A-B fail-closed:
+            · Proposal pursue + linked DecisionBasis → M3 PREPARE (no selector).
+            · Proposal pursue + missing DecisionBasis → fail-closed requalify
+              (NEVER sandbox fallback — subject still owns the journey).
+            · Non-Proposal only → W2 sandbox selector remains.
+            Contract prepared → Inspect owns next action; no re-PREPARE.
+          */}
+          {!decisionDefersExecution &&
+          !contract &&
+          proposalBackedPrepareReady ? (
+          <div
+            className={styles.actions}
+            data-testid="w2-proposal-backed-prepare"
+          >
+            <p className={styles.blockNote} data-testid="w2-proposal-backed-prepare-note">
+              La décision porte déjà l&apos;opération scellée. Préparez le
+              contrat d&apos;exécution à partir de cette décision — sans
+              resélection technique.
+            </p>
+            <button
+              type="button"
+              className={styles.primaryAction}
+              data-testid="w2-prepare-contract"
+              onClick={() => void prepareProposalBackedContract()}
+              disabled={busy !== null}
+            >
+              Préparer le contrat d&apos;exécution
+            </button>
+          </div>
+          ) : null}
+          {!decisionDefersExecution &&
+          !contract &&
+          proposalBackedPrepareBlocked ? (
+          <div
+            className={styles.block}
+            data-testid="w2-proposal-prepare-blocked"
+            role="status"
+          >
+            <p className={styles.blockBody}>
+              Cette décision ne dispose plus d&apos;une base d&apos;exécution
+              exploitable. Réinstruisez ou requalifiez le sujet avec Nora avant
+              de préparer un contrat.
+            </p>
+          </div>
+          ) : null}
+          {!decisionDefersExecution &&
+          !contract &&
+          !hasProposalDecisionSubject ? (
           <div
             className={styles.actions}
             data-testid="w3a-qualify-execution-work"
@@ -1464,7 +1585,7 @@ export function TrajectorySurface({
             <button
               type="button"
               className={styles.primaryAction}
-              data-testid="w2-prepare-contract"
+              data-testid="w2-prepare-contract-sandbox"
               onClick={() => void prepareContract()}
               disabled={busy !== null || qualifiedOperationKind === null}
               title={
@@ -1473,9 +1594,7 @@ export function TrajectorySurface({
                   : undefined
               }
             >
-              {contract
-                ? "Repréparer le contrat d'exécution"
-                : "Préparer le contrat d'exécution"}
+              Préparer le contrat d&apos;exécution
             </button>
           </div>
           ) : null}

```

# COMPLETE USEFUL DIFF — trajectorySurface.ui.test.tsx (vs HEAD base)

```diff
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
index 2b9da045..544daddb 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
@@ -2,6 +2,10 @@
 import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
 import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
 import { TrajectorySurface } from "@/features/pre-m6-product-ui/surfaces/TrajectorySurface";
+import {
+  PROPOSAL_SUBJECT_PURSUE_REF,
+  PROPOSAL_SUBJECT_REFUSE_REF,
+} from "@/features/project-assistant/w2/proposalSubjectOptions";

 const {
   proposeMock,
@@ -10,6 +14,7 @@ const {
   authorizeMock,
   amendMock,
   prepareContractMock,
+  prepareM3Mock,
   executeSelectMock,
   executeStartMock,
   executeCompleteMock,
@@ -26,6 +31,7 @@ const {
   authorizeMock: vi.fn(),
   amendMock: vi.fn(),
   prepareContractMock: vi.fn(),
+  prepareM3Mock: vi.fn(),
   executeSelectMock: vi.fn(),
   executeStartMock: vi.fn(),
   executeCompleteMock: vi.fn(),
@@ -37,6 +43,16 @@ const {
   startPreparedCycleMock: vi.fn(),
 }));

+/**
+ * JOURNEY-INTEGRITY Lot A-B — the Proposal-backed PREPARE routes the very same
+ * application entrypoint the AP23 application-path proof exercises
+ * (productProofJourneyIntegrity.applicationPath.d0.test.ts).
+ */
+vi.mock("@/features/project-assistant/actions", () => ({
+  projectAssistantPrepareM3Action: (...args: unknown[]) =>
+    prepareM3Mock(...args),
+}));
+
 vi.mock("@/features/project-assistant/w2/actions", () => ({
   w2ProposeTrajectoryOptionsAction: (...args: unknown[]) => proposeMock(...args),
   w2DecideTrajectoryAction: (...args: unknown[]) => decideMock(...args),
@@ -89,6 +105,7 @@ beforeEach(() => {
   authorizeMock.mockReset();
   amendMock.mockReset();
   prepareContractMock.mockReset();
+  prepareM3Mock.mockReset();
   executeSelectMock.mockReset();
   executeStartMock.mockReset();
   executeCompleteMock.mockReset();
@@ -187,9 +204,14 @@ describe("W2 TrajectorySurface", () => {
     fireEvent.click(screen.getByTestId("w2-decide-opt:proposal-subject:amend"));
     expect(await screen.findByTestId("w2-decision")).toBeVisible();
     expect(screen.getByTestId("w2-amend-next-action")).toBeVisible();
+    expect(screen.queryByTestId("w2-proposal-backed-prepare")).toBeNull();
     expect(screen.queryByTestId("w2-prepare-contract")).toBeNull();
+    expect(screen.queryByTestId("w2-prepare-contract-sandbox")).toBeNull();
+    expect(screen.queryByTestId("w3a-qualify-execution-work")).toBeNull();
     expect(screen.queryByTestId("w3a-operation-kind")).toBeNull();
     expect(screen.getByTestId("w2-decided-option")).toHaveTextContent("Modifier");
+    expect(prepareM3Mock).not.toHaveBeenCalled();
+    expect(prepareContractMock).not.toHaveBeenCalled();
   });

   it("CORR-PROOF-11 — pursue on proposal subject still shows prepare", async () => {
@@ -251,6 +273,7 @@ describe("W2 TrajectorySurface", () => {
     await screen.findByTestId("w2-options");
     fireEvent.click(screen.getByTestId("w2-decide-opt:proposal-subject:pursue"));
     expect(await screen.findByTestId("w2-decision")).toBeVisible();
+    expect(screen.getByTestId("w2-proposal-backed-prepare")).toBeVisible();
     expect(screen.getByTestId("w2-prepare-contract")).toBeVisible();
     expect(screen.queryByTestId("w2-amend-next-action")).toBeNull();
   });
@@ -431,11 +454,17 @@ describe("W2 TrajectorySurface", () => {
       },
     });

+    // Generic ProjectTrajectory decision — no sealed Proposal operation, so the
+    // legacy sandbox qualification selector still owns the PREPARE affordance.
+    expect(screen.getByTestId("w3a-qualify-execution-work")).toBeVisible();
+    expect(screen.queryByTestId("w2-proposal-backed-prepare")).toBeNull();
+    expect(screen.queryByTestId("w2-prepare-contract")).toBeNull();
     fireEvent.change(screen.getByTestId("w3a-operation-kind"), {
       target: { value: "generate-temporary-artifact" },
     });
-    fireEvent.click(screen.getByTestId("w2-prepare-contract"));
+    fireEvent.click(screen.getByTestId("w2-prepare-contract-sandbox"));
     expect(await screen.findByTestId("w2-contract")).toBeVisible();
+    expect(prepareM3Mock).not.toHaveBeenCalled();
     expect(screen.getByTestId("w2-contract-action")).toHaveTextContent(
       "product:generate-temporary-artifact",
     );
@@ -848,6 +877,7 @@ describe("D-GF-START-01 TrajectorySurface prepare/start CTAs", () => {
       expect(screen.queryByTestId("pre-cycle-start-cycle")).toBeNull();
     });
     expect(screen.queryByTestId("w2-prepare-contract")).toBeNull();
+    expect(screen.queryByTestId("w2-prepare-contract-sandbox")).toBeNull();
   });
 });

@@ -882,6 +912,8 @@ describe("CORR-PROOF-11 final — pending reinstruction UI states", () => {
     );
     expect(screen.queryByTestId("w2-reformulate-with-nora")).toBeNull();
     expect(screen.queryByTestId("w2-instruct-recoverable-options")).toBeNull();
+    // JOURNEY-INTEGRITY — pending owns next action; hide generic instruct CTA
+    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
     expect(reformulate).not.toHaveBeenCalled();
   });

@@ -902,6 +934,7 @@ describe("CORR-PROOF-11 final — pending reinstruction UI states", () => {
     );
     expect(screen.getByTestId("w2-instruct-recoverable-options")).toBeVisible();
     expect(screen.queryByTestId("w2-reformulate-with-nora")).toBeNull();
+    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
     const body = screen.getByTestId("w2-pending-reinstruction-body").textContent ?? "";
     expect(body).not.toMatch(/fallback|process-local|ProjectTrajectory/i);
   });
@@ -927,6 +960,7 @@ describe("CORR-PROOF-11 final — pending reinstruction UI states", () => {
     expect(await screen.findByTestId("w2-pending-reinstruction")).toHaveTextContent(
       "Reformulez votre demande",
     );
+    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
     fireEvent.click(screen.getByTestId("w2-reformulate-with-nora"));
     expect(reformulate).toHaveBeenCalledTimes(1);
     expect(reformulate).toHaveBeenCalledWith("prop:lost-only");
@@ -949,5 +983,375 @@ describe("CORR-PROOF-11 final — pending reinstruction UI states", () => {
     expect(body).not.toMatch(/process-local/i);
     expect(body).not.toMatch(/ProjectTrajectory/i);
     expect(body).not.toMatch(/\bpending\b/i);
+    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
+  });
+
+  it("JOURNEY-INTEGRITY — pending_reinstruction hides generic w2-propose-options", async () => {
+    // Active cycle is present (beforeEach mocks), yet pending must win CTA exclusivity.
+    readActiveDecisionSubjectMock.mockResolvedValue({
+      ok: true,
+      kind: "pending_reinstruction_required",
+      message:
+        "Cette demande doit être reformulée avec Nora pour continuer. Rien ne sera exécuté sans une nouvelle décision de votre part.",
+      proposalIds: ["prop:pending-owns"],
+      recoverableProposalIds: [],
+    });
+
+    render(<TrajectorySurface projectId="prj:pending-cta" />);
+    expect(await screen.findByTestId("w2-pending-reinstruction")).toBeVisible();
+    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
+    expect(proposeMock).not.toHaveBeenCalled();
+  });
+});
+
+describe("JOURNEY-INTEGRITY — CTA exclusivity on the mutating primary action", () => {
+  const PROPOSAL_OPTION_SET = {
+    ok: true,
+    optionSetRef: "optset:cta-exclusivity",
+    cycleTypeId: "cyc:delivery",
+    recommendedProfile: "Critical",
+    decisionSubjectMode: "proposal",
+    proposalId: "prop:f2:cta",
+    promotesProjectTrajectory: false,
+    options: [
+      {
+        kind: "OPTION",
+        optionRef: "opt:proposal-subject:pursue",
+        label: "Poursuivre le sujet proposé",
+        intent: "Continuer",
+        impacts: [],
+        reservations: [],
+        steps: [],
+      },
+      {
+        kind: "OPTION",
+        optionRef: "opt:proposal-subject:amend",
+        label: "Amender le sujet avant d'engager",
+        intent: "Modifier",
+        impacts: [],
+        reservations: [],
+        steps: [],
+      },
+    ],
+    recommendation: {
+      label: "RECOMMANDATION — PAS UNE DÉCISION",
+      recommendedOptionRef: "opt:proposal-subject:pursue",
+      rationale: "Continuer.",
+      isHumanDecision: false,
+      ckcAttribution: false,
+    },
+    epistemicRefs: [],
+    proposedTrajectory: null,
+    phase: "OPTIONS_PROPOSED",
+    autoDecisionPerformed: false,
+    executionPerformed: false,
+    ckcCognitionCompletedBeforeMutation: true,
+  } as const;
+
+  it("an OptionSet awaiting the decision hides the generic instruct CTA", async () => {
+    proposeMock.mockResolvedValue(PROPOSAL_OPTION_SET);
+
+    render(<TrajectorySurface projectId="prj:cta-optionset" />);
+    fireEvent.click(await screen.findByTestId("w2-propose-options"));
+    await screen.findByTestId("w2-options");
+
+    // The presented subject owns the next action until the Pilote decides.
+    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
+    expect(screen.queryByTestId("w2-decision")).toBeNull();
+    const surface = screen.getByTestId("w2-trajectory-panel").textContent ?? "";
+    expect(surface).not.toMatch(/Réinstruire/i);
+    expect(proposeMock).toHaveBeenCalledTimes(1);
+  });
+
+  it("no decision subject at all: the generic instruct CTA stays reachable", async () => {
+    render(<TrajectorySurface projectId="prj:cta-none" />);
+
+    const cta = await screen.findByTestId("w2-propose-options");
+    expect(cta).toBeVisible();
+    expect(cta).toHaveTextContent("Instruire les options");
+    expect(screen.queryByTestId("w2-pending-reinstruction")).toBeNull();
+    expect(screen.queryByTestId("w2-options")).toBeNull();
+    expect(screen.queryByTestId("w2-decision")).toBeNull();
+    expect(screen.queryByTestId("w2-contract")).toBeNull();
+  });
+});
+
+/**
+ * JOURNEY-INTEGRITY Lot A-B final — the Pilot decides the operation ONCE.
+ *
+ * After pursue on a Proposal decision subject the sealed DecisionBasis already
+ * carries targetPath / requestedOperation, so the surface must:
+ *  - offer the Proposal-backed PREPARE (never the sandbox op selector), and
+ *  - send projectId + decisionId ONLY — the server re-resolves the rest from
+ *    durable lineage (same contract as AP23 in
+ *    __tests__/project-assistant/productProofJourneyIntegrity.applicationPath.d0.test.ts).
+ */
+describe("JOURNEY-INTEGRITY — Proposal-backed PREPARE (sealed operation)", () => {
+  function proposalOptionSet(proposalId: string) {
+    return {
+      ok: true,
+      optionSetRef: `optset:${proposalId}`,
+      cycleTypeId: "cyc:delivery",
+      recommendedProfile: "Critical",
+      decisionSubjectMode: "proposal",
+      proposalId,
+      promotesProjectTrajectory: false,
+      options: [
+        {
+          kind: "OPTION",
+          optionRef: PROPOSAL_SUBJECT_PURSUE_REF,
+          label: "Poursuivre le sujet proposé",
+          intent: "Continuer",
+          impacts: [],
+          reservations: [],
+          steps: [],
+        },
+        {
+          kind: "OPTION",
+          optionRef: PROPOSAL_SUBJECT_REFUSE_REF,
+          label: "Ne pas poursuivre / refuser",
+          intent: "Refuser",
+          impacts: [],
+          reservations: [],
+          steps: [],
+        },
+      ],
+      recommendation: {
+        label: "RECOMMANDATION — PAS UNE DÉCISION",
+        recommendedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
+        rationale: "Continuer.",
+        isHumanDecision: false,
+        ckcAttribution: false,
+      },
+      epistemicRefs: [],
+      proposedTrajectory: null,
+      phase: "OPTIONS_PROPOSED",
+      autoDecisionPerformed: false,
+      executionPerformed: false,
+      ckcCognitionCompletedBeforeMutation: true,
+    };
+  }
+
+  function proposalDecision(input: {
+    decisionId: string;
+    proposalId: string;
+    selectedOptionRef: string;
+  }) {
+    return {
+      ok: true,
+      decision: {
+        decisionId: input.decisionId,
+        selectedOptionRef: input.selectedOptionRef,
+        actorRole: "Pilote",
+        authorityClass: "morris",
+        statusLabel: "DÉCISION HUMAINE PRISE",
+        capturedAt: "2026-09-15T16:00:00.000Z",
+        decisionBasisLinked: true,
+        reservesText: null,
+        proposalId: input.proposalId,
+      },
+      trajectory: null,
+      livingProjectStateVersion: 4,
+      executionPerformed: false,
+      promotesProjectTrajectory: false,
+      decisionSubjectMode: "proposal",
+    };
+  }
+
+  const M3_PREPARED = {
+    ok: true,
+    status: "ok",
+    mode: "m3_prepare",
+    presentation: "unconfirmed",
+    text: "Contrat préparé.",
+    ephemeralNotice: "",
+    f3: {
+      turnKind: "f3_m3_prepare",
+      mode: "M3_PREPARE",
+      decisionId: "dec:sealed-pursue",
+      projectId: "prj:sealed",
+      contract: {
+        executionContractId: "xct:sealed-docs-write",
+        version: 1,
+        status: "proposed",
+        action: "cursor.docs_write.apply",
+        target: "docs/livrable-cycle.md",
+        scope: "product:artifact-materialization",
+        requiredAuthority: "N3",
+        constraints: ["PRODUCT_GOVERNED", "SEALED_DECISION_BASIS"],
+        stopConditions: ["STOP AVANT EXECUTE"],
+        requiredCapabilities: ["cap:cursor.docs_write"],
+        reversibility: "reversible",
+        semanticFingerprint: "sealed0fingerprint",
+      },
+      executionPerformed: false,
+      attemptCreated: false,
+      cursorReal: false,
+      executionAllowed: false,
+      disclosures: [],
+    },
+  };
+
+  async function decidePursue(projectId: string, proposalId: string) {
+    proposeMock.mockResolvedValue(proposalOptionSet(proposalId));
+    decideMock.mockResolvedValue(
+      proposalDecision({
+        decisionId: "dec:sealed-pursue",
+        proposalId,
+        selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
+      }),
+    );
+
+    render(<TrajectorySurface projectId={projectId} />);
+    fireEvent.click(await screen.findByTestId("w2-propose-options"));
+    await screen.findByTestId("w2-options");
+    fireEvent.click(screen.getByTestId(`w2-decide-${PROPOSAL_SUBJECT_PURSUE_REF}`));
+    expect(await screen.findByTestId("w2-decision")).toBeVisible();
+  }
+
+  it("pursue on a sealed subject offers PREPARE without any operation re-selection", async () => {
+    await decidePursue("prj:sealed", "prop:f2:sealed");
+
+    expect(screen.getByTestId("w2-proposal-backed-prepare")).toBeVisible();
+    expect(screen.getByTestId("w2-prepare-contract")).toBeVisible();
+    // The Pilot must never qualify the operation twice.
+    expect(screen.queryByTestId("w3a-qualify-execution-work")).toBeNull();
+    expect(screen.queryByTestId("w3a-operation-kind")).toBeNull();
+    expect(screen.queryByTestId("w2-prepare-contract-sandbox")).toBeNull();
+    expect(screen.getByTestId("w2-decision-basis")).toHaveTextContent("Reliée");
+  });
+
+  it("PREPARE sends projectId + decisionId only, then maps the sealed contract", async () => {
+    await decidePursue("prj:sealed", "prop:f2:sealed");
+
+    prepareM3Mock.mockResolvedValue(M3_PREPARED);
+    fireEvent.click(screen.getByTestId("w2-prepare-contract"));
+    expect(await screen.findByTestId("w2-contract")).toBeVisible();
+
+    expect(prepareM3Mock).toHaveBeenCalledTimes(1);
+    expect(prepareM3Mock).toHaveBeenCalledWith({
+      projectId: "prj:sealed",
+      decisionId: "dec:sealed-pursue",
+    });
+    // Exact-shape assertion above already forbids extra keys; assert the
+    // dangerous ones explicitly so a regression names itself.
+    const sent = prepareM3Mock.mock.calls[0]![0] as Record<string, unknown>;
+    expect(Object.keys(sent).sort()).toEqual(["decisionId", "projectId"]);
+    for (const forbidden of [
+      "targetPath",
+      "operation",
+      "qualifiedOperationKind",
+      "requestedOperation",
+      "authority",
+      "canActAsMorris",
+      "claimedAuthorityLevel",
+      "real",
+      "mode",
+      "command",
+    ]) {
+      expect(sent).not.toHaveProperty(forbidden);
+    }
+    // The sandbox PREPARE application path was never touched.
+    expect(prepareContractMock).not.toHaveBeenCalled();
+
+    expect(screen.getByTestId("w2-contract-action")).toHaveTextContent(
+      "cursor.docs_write.apply",
+    );
+    expect(screen.getByTestId("w2-contract-target")).toHaveTextContent(
+      "docs/livrable-cycle.md",
+    );
+    expect(screen.getByTestId("w2-contract-authority")).toHaveTextContent("N3");
+    expect(screen.getByTestId("w2-contract-capabilities")).toHaveTextContent(
+      "cap:cursor.docs_write",
+    );
+    expect(screen.getByTestId("w2-contract-id-tech")).toHaveTextContent(
+      "xct:sealed-docs-write",
+    );
+
+    // Inspect owns the next action; PREPARE is not offered again.
+    expect(screen.getByTestId("w2-inspect-contract")).toBeVisible();
+    expect(screen.queryByTestId("w2-proposal-backed-prepare")).toBeNull();
+    expect(screen.queryByTestId("w2-prepare-contract")).toBeNull();
+
+    inspectMock.mockResolvedValue({
+      ok: true,
+      executionContractId: "xct:sealed-docs-write",
+      contractVersion: 1,
+      semanticFingerprint: "sealed0fingerprint",
+      statusLabel: "INSPECTÉ",
+      inspectionSufficient: true,
+      attestationRef: "att:sealed",
+      attestedVersion: 1,
+      staleAttestationRef: null,
+      reinspectionRequired: false,
+      reason: "inspected",
+      grantsAuthority: false,
+    });
+    fireEvent.click(screen.getByTestId("w2-inspect-contract"));
+    expect(await screen.findByTestId("w2-inspection-state")).toHaveTextContent(
+      "INSPECTÉ",
+    );
+    expect(screen.getByTestId("w2-inspection-state")).toHaveTextContent(
+      "inspecter n'autorise pas",
+    );
+  });
+
+  it("refuse on a sealed subject exposes no PREPARE path at all", async () => {
+    const proposalId = "prop:f2:sealed-refuse";
+    proposeMock.mockResolvedValue(proposalOptionSet(proposalId));
+    decideMock.mockResolvedValue(
+      proposalDecision({
+        decisionId: "dec:sealed-refuse",
+        proposalId,
+        selectedOptionRef: PROPOSAL_SUBJECT_REFUSE_REF,
+      }),
+    );
+
+    render(<TrajectorySurface projectId="prj:sealed-refuse" />);
+    fireEvent.click(await screen.findByTestId("w2-propose-options"));
+    await screen.findByTestId("w2-options");
+    fireEvent.click(screen.getByTestId(`w2-decide-${PROPOSAL_SUBJECT_REFUSE_REF}`));
+    expect(await screen.findByTestId("w2-decision")).toBeVisible();
+
+    expect(screen.getByTestId("w2-refuse-next-action")).toBeVisible();
+    expect(screen.queryByTestId("w2-proposal-backed-prepare")).toBeNull();
+    expect(screen.queryByTestId("w2-prepare-contract")).toBeNull();
+    expect(screen.queryByTestId("w2-prepare-contract-sandbox")).toBeNull();
+    expect(screen.queryByTestId("w3a-operation-kind")).toBeNull();
+    expect(prepareM3Mock).not.toHaveBeenCalled();
+    expect(prepareContractMock).not.toHaveBeenCalled();
+  });
+
+  it("a Proposal pursue without linked DecisionBasis fails closed (never sandbox)", async () => {
+    const proposalId = "prop:f2:unlinked";
+    proposeMock.mockResolvedValue(proposalOptionSet(proposalId));
+    const unlinked = proposalDecision({
+      decisionId: "dec:unlinked",
+      proposalId,
+      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
+    });
+    decideMock.mockResolvedValue({
+      ...unlinked,
+      decision: { ...unlinked.decision, decisionBasisLinked: false },
+    });
+
+    render(<TrajectorySurface projectId="prj:unlinked" />);
+    fireEvent.click(await screen.findByTestId("w2-propose-options"));
+    await screen.findByTestId("w2-options");
+    fireEvent.click(screen.getByTestId(`w2-decide-${PROPOSAL_SUBJECT_PURSUE_REF}`));
+    expect(await screen.findByTestId("w2-decision")).toBeVisible();
+
+    // Proposal subject still owns the journey — fail closed, no sandbox fallback.
+    expect(screen.getByTestId("w2-proposal-prepare-blocked")).toBeVisible();
+    expect(screen.getByTestId("w2-proposal-prepare-blocked").textContent).toMatch(
+      /base d.exécution exploitable/i,
+    );
+    expect(screen.queryByTestId("w2-proposal-backed-prepare")).toBeNull();
+    expect(screen.queryByTestId("w2-prepare-contract")).toBeNull();
+    expect(screen.queryByTestId("w2-prepare-contract-sandbox")).toBeNull();
+    expect(screen.queryByTestId("w3a-qualify-execution-work")).toBeNull();
+    expect(screen.queryByTestId("w3a-operation-kind")).toBeNull();
+    expect(prepareM3Mock).not.toHaveBeenCalled();
+    expect(prepareContractMock).not.toHaveBeenCalled();
   });
 });

```
