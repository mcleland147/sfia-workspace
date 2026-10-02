/**
 * GENERIC-EXECUTION-REVIEW-RESULT-CONVERGENCE-01 — Correction Pass 02
 * CP2-08 / CP2-06 — TrajectorySurface mounted-component continuity proof.
 *
 * Mounts the REAL TrajectorySurface (React Testing Library, jsdom) with a
 * RUNNING Attempt and fake timers. The test NEVER calls reconcileGovernedExecution
 * (nor the reconcile server action) as the « UI behavior »: the component's own
 * scheduler (reconcileContinuePolicy.nextReconcileContinueDelayMs +
 * shouldContinueReconcileNominally) must drive the continue intents beyond the
 * legacy 8-poll budget, and must stop on its own once the durable projection is
 * stable. Server actions are Fake/mocked boundaries only. ZERO REAL.
 *
 * @vitest-environment jsdom
 */
import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import { createElement } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { TrajectorySurface } from "@/features/pre-m6-product-ui/surfaces/TrajectorySurface";
import {
  LEGACY_UI_RUNNING_POLL_BUDGET,
  NOMINAL_RECONCILE_CONTINUE_BUDGET,
  RECONCILE_CONTINUE_BACKOFF_MAX_MS,
  nextReconcileContinueDelayMs,
  shouldAutoResumeReconcileOnRemount,
  shouldContinueReconcileNominally,
} from "@/features/project-assistant/w2/reconcileContinuePolicy";

const {
  proposeMock,
  decideMock,
  inspectMock,
  authorizeMock,
  prepareContractMock,
  confirmMock,
  executeSelectMock,
  executeStartMock,
  executeCompleteMock,
  materializeMock,
  reconcileMock,
  deriveContinuityMock,
  resolveContextMock,
  readReviewItemMock,
  readActiveDecisionSubjectMock,
  readGovernedExecutionContinuityMock,
  readRecoveryExecutionBindingMock,
  readRecoveryOwnedDecisionContinuityMock,
  readPreCycleMock,
  readApprovalMock,
  readPreparedCycleMock,
} = vi.hoisted(() => ({
  proposeMock: vi.fn(),
  decideMock: vi.fn(),
  inspectMock: vi.fn(),
  authorizeMock: vi.fn(),
  prepareContractMock: vi.fn(),
  confirmMock: vi.fn(),
  executeSelectMock: vi.fn(),
  executeStartMock: vi.fn(),
  executeCompleteMock: vi.fn(),
  materializeMock: vi.fn(),
  reconcileMock: vi.fn(),
  deriveContinuityMock: vi.fn(),
  resolveContextMock: vi.fn(),
  readReviewItemMock: vi.fn(),
  readActiveDecisionSubjectMock: vi.fn(),
  readGovernedExecutionContinuityMock: vi.fn(),
  readRecoveryExecutionBindingMock: vi.fn(),
  readRecoveryOwnedDecisionContinuityMock: vi.fn(),
  readPreCycleMock: vi.fn(),
  readApprovalMock: vi.fn(),
  readPreparedCycleMock: vi.fn(),
}));

vi.mock("@/features/project-assistant/actions", () => ({
  projectAssistantConversationContinuityAction: vi.fn(async () => ({
    ok: true,
    transcriptAvailability: "empty",
    messages: [],
    journal: { cycleInstanceId: null, entries: [] },
  })),
  projectAssistantPrepareResolvedM3Action: vi.fn(),
  projectAssistantResolveLegacyM3DocsWriteAction: vi.fn(),
}));

vi.mock("@/features/project-assistant/w2/actions", () => ({
  w2ProposeTrajectoryOptionsAction: (...a: unknown[]) => proposeMock(...a),
  w2DecideTrajectoryAction: (...a: unknown[]) => decideMock(...a),
  w2InspectExecutionContractAction: (...a: unknown[]) => inspectMock(...a),
  w2ConfirmExecutionContractAction: (...a: unknown[]) => confirmMock(...a),
  w2AuthorizeExecutionContractAction: (...a: unknown[]) => authorizeMock(...a),
  w2AmendExecutionContractAction: vi.fn(),
  w2PrepareExecutionContractAction: (...a: unknown[]) =>
    prepareContractMock(...a),
  w2GovernedExecuteSelectAction: (...a: unknown[]) => executeSelectMock(...a),
  w2GovernedExecuteStartAction: (...a: unknown[]) => executeStartMock(...a),
  w2GovernedExecuteCompleteAction: (...a: unknown[]) =>
    executeCompleteMock(...a),
  w2GovernedExecuteCancelAction: vi.fn(),
  w2MaterializeProductOutcomeAction: (...a: unknown[]) =>
    materializeMock(...a),
  w2ReconcileGovernedExecutionAction: (...a: unknown[]) => reconcileMock(...a),
  w2DeriveGovernedExecutionContinuityAction: (...a: unknown[]) =>
    deriveContinuityMock(...a),
  w2ResolveProductExecutionContextAction: (...a: unknown[]) =>
    resolveContextMock(...a),
  w2ReadExecutionReviewItemAction: (...a: unknown[]) =>
    readReviewItemMock(...a),
  w2RehydrateProductOutcomeAction: vi.fn(),
  w2RematerializeDocsWriteEvidenceAction: vi.fn(),
  w2ReadActiveDecisionSubjectAction: (...a: unknown[]) =>
    readActiveDecisionSubjectMock(...a),
  w2ReadCurrentGovernedExecutionContinuityAction: (...a: unknown[]) =>
    readGovernedExecutionContinuityMock(...a),
  w2ReadRecoveryExecutionBindingAction: (...a: unknown[]) =>
    readRecoveryExecutionBindingMock(...a),
  w2ReadRecoveryOwnedDecisionContinuityAction: (...a: unknown[]) =>
    readRecoveryOwnedDecisionContinuityMock(...a),
  w2PrepareRecoveryDocsWriteAction: vi.fn(),
  w2ReadProjectHistoryAction: vi.fn().mockResolvedValue({
    ok: false,
    code: "UNUSED",
    message: "unused",
  }),
}));

vi.mock("@/features/project-assistant/preCycleCandidateTrajectoryActions", () => ({
  projectAssistantReadPreCycleCandidateTrajectoryAction: (...a: unknown[]) =>
    readPreCycleMock(...a),
  projectAssistantPrepareCandidateTrajectoryAction: vi.fn(),
  projectAssistantReadCandidateTrajectoryApprovalPresentationAction: (
    ...a: unknown[]
  ) => readApprovalMock(...a),
  projectAssistantApprovePreCycleCandidateTrajectoryAction: vi.fn(),
  prepareCycleFromValidatedTrajectoryAction: vi.fn(),
  readPreparedTrajectoryCycleAction: (...a: unknown[]) =>
    readPreparedCycleMock(...a),
  startPreparedTrajectoryCycleAction: vi.fn(),
}));

const PROJECT_ID = "prj:gerrc-cp2-surface";
const EC_ID = "xct:w3a:dec:w2-trj:gerrc-cp2-surface";
const ATTEMPT_ID = "xat:gerrc-cp2-surface";

function activeContinuity() {
  return {
    ok: true as const,
    kind: "active" as const,
    decisionRef: "dec:w2-trj:gerrc-cp2-surface",
    contract: {
      executionContractId: EC_ID,
      version: 2,
      status: "confirmed",
      action: "studio.cursor.generalist.execute",
      target: "studio.cursor.generalist.workspace",
      scope: "studio.cursor.generalist.authorized_contract",
      requiredAuthority: "N2",
      constraints: [
        "PRODUCT_GOVERNED",
        "EFFECT_CLASS:local-write",
        "EFFECT_CONFIRMATION_REQUIRED:N2",
      ],
      stopConditions: ["CLAIM_FACT_MISMATCH"],
      requiredCapabilities: ["cap:studio.cursor.generalist"],
      reversibility: "reversible",
      semanticFingerprint: "fp-gerrc-cp2",
      effectConfirmationRequired: true,
      effectConfirmationLevel: "N2",
      inspectionDisclosure: {
        action: "studio.cursor.generalist.execute",
        technicalTarget: "studio.cursor.generalist.workspace",
        scope: "studio.cursor.generalist.authorized_contract",
        targetRepositoryRef: "acme/w2-harness",
        targetPath: null,
        scopeIn: null,
        scopeOut: null,
        createOrModify: null,
        noDelete: null,
        objective: "generic mission",
        artifactType: null,
        artifactBrief: null,
        contentRequirements: null,
        validationExpectations: null,
        expectedOutputs: ["Fichiers créés/modifiés dans le scope autorisé"],
        evidenceRequirements: [
          "evreq:local-write",
          "evreq:studio-verified-changeset",
        ],
        requiredAuthority: "N2",
        requiredCapabilities: ["cap:studio.cursor.generalist"],
        constraints: ["PRODUCT_GOVERNED"],
        stopConditions: ["CLAIM_FACT_MISMATCH"],
        reversibility: "reversible",
        contractVersion: 2,
        executionContractId: EC_ID,
        semanticFingerprint: "fp-gerrc-cp2",
        disclosureComplete: true,
        incompletenessCode: null,
      },
    },
    inspection: {
      executionContractId: EC_ID,
      contractVersion: 2,
      semanticFingerprint: "fp-gerrc-cp2",
      statusLabel: "INSPECTION SUFFISANTE",
      inspectionSufficient: true,
      attestationRef: "insp:gerrc-cp2",
      attestedVersion: 2,
      staleAttestationRef: null,
      reinspectionRequired: false,
      reason: null,
      grantsAuthority: false,
    },
  };
}

type Stage =
  | "RUNNING"
  | "PRODUCT_MATERIALIZATION_PENDING"
  | "POST_EVIDENCE_COMPLETE";

function projection(stage: Stage) {
  const running = stage === "RUNNING";
  return {
    projectId: PROJECT_ID,
    activeCycleInstanceId: null,
    executionContractId: EC_ID,
    executionContractVersion: 2,
    executionContractStatus: "confirmed",
    attemptId: ATTEMPT_ID,
    attemptStatus: running ? "running" : "succeeded",
    stage,
    productOutcome: stage === "POST_EVIDENCE_COMPLETE" ? "UNCLAIMED" : null,
    evidenceId: null,
    reviewBundleId: null,
    claimEvaluationId: null,
    claimEvaluationStatus: null,
    postEvidencePresent: stage === "POST_EVIDENCE_COMPLETE",
    nextDeterministicAction:
      stage === "RUNNING"
        ? ("AWAIT_EXTERNAL" as const)
        : stage === "PRODUCT_MATERIALIZATION_PENDING"
          ? ("MATERIALIZE_PRODUCT" as const)
          : ("NONE" as const),
    humanDecisionRequired: false,
    recoveryRequired: false,
    reason: null,
    blockingCode: null,
    context: null,
  };
}

function reconcileResult(stage: Stage, extra?: Record<string, unknown>) {
  return {
    ok: true as const,
    intent: "continue" as const,
    projection: projection(stage),
    transitionsApplied: [] as string[],
    stoppedReason: stage === "RUNNING" ? "awaiting_external" : "stable",
    ...(extra ?? {}),
  };
}

const MISMATCH_PRODUCT = {
  outcome: "UNCLAIMED",
  businessHeadline: "Qualification produit incomplète",
  businessReason: "CLAIM_FACT_MISMATCH — Product PASS refused",
  claimAllowed: false,
  evidenceId: "ev:mission-result:gerrc-cp2",
  reviewBundleId: "rb:gerrc-cp2",
  claimEvaluationId: "ce:gerrc-cp2",
  claimEvaluationStatus: "not_proven",
  contractResultVerdict: "NOT_SATISFIED",
  evidenceStatus: "available",
  evidenceSummary: "Mission result + verification",
  reviewBundleCompleteness: "partial",
  governedBoundary: "Fake Cursor boundary",
  technicalDetail: {
    attemptId: ATTEMPT_ID,
    attemptStatus: "succeeded",
    resultRef: "res:gerrc-cp2",
    errorRef: null,
    stopReason: null,
    executionContractId: EC_ID,
    executionContractVersion: 2,
  },
  reservations: [],
  antiClaims: {
    ready: false,
    w3Closed: false,
    productCompletionComplete: false,
    runtimeV3Adopted: false,
    realProven: false,
    cycleAutoClosed: false,
    projectArchived: false,
  },
  cycleInstanceClosed: false,
  projectArchived: false,
  noraInvoked: false,
  replanInvoked: false,
  realExecution: false,
};

/** .ts file (no JSX) — createElement keeps the requested filename. */
function mountSurface() {
  return createElement(TrajectorySurface, {
    decisionWorkflowMode: "legacy_cta",
    projectId: PROJECT_ID,
  });
}

async function flush(ms = 0): Promise<void> {
  await act(async () => {
    await vi.advanceTimersByTimeAsync(ms);
  });
}

beforeEach(() => {
  vi.useFakeTimers();
  for (const m of [
    proposeMock,
    decideMock,
    inspectMock,
    authorizeMock,
    prepareContractMock,
    confirmMock,
    executeSelectMock,
    executeStartMock,
    executeCompleteMock,
    materializeMock,
    reconcileMock,
    deriveContinuityMock,
    resolveContextMock,
    readReviewItemMock,
    readActiveDecisionSubjectMock,
    readGovernedExecutionContinuityMock,
    readRecoveryExecutionBindingMock,
    readRecoveryOwnedDecisionContinuityMock,
    readPreCycleMock,
    readApprovalMock,
    readPreparedCycleMock,
  ]) {
    m.mockReset();
  }
  readActiveDecisionSubjectMock.mockResolvedValue({ ok: true, kind: "none" });
  readGovernedExecutionContinuityMock.mockResolvedValue(activeContinuity());
  readRecoveryExecutionBindingMock.mockResolvedValue({
    ok: true,
    binding: null,
    recoveryContextPresent: false,
  });
  readRecoveryOwnedDecisionContinuityMock.mockResolvedValue({
    ok: true,
    kind: "none",
  });
  readPreCycleMock.mockResolvedValue({
    ok: true,
    candidate: null,
    activeCycleInstanceId: "cycinst:gerrc-cp2",
    hasCurrentNextCycleRecommendation: false,
  });
  readApprovalMock.mockResolvedValue({
    ok: true,
    presentation: null,
    alreadyDecided: null,
    activeCycleInstanceId: "cycinst:gerrc-cp2",
  });
  readPreparedCycleMock.mockResolvedValue({ ok: true, prepared: null });
  // Durable projection at remount time: Attempt still RUNNING.
  deriveContinuityMock.mockResolvedValue({
    ok: true,
    projection: projection("RUNNING"),
  });
  resolveContextMock.mockResolvedValue({ ok: false, code: "UNUSED", message: "" });
});

afterEach(() => {
  cleanup();
  vi.clearAllTimers();
  vi.useRealTimers();
});

describe("CP2-08 policy seams used by the mounted surface", () => {
  it("no total continue budget; backoff is capped but never abandons", () => {
    expect(NOMINAL_RECONCILE_CONTINUE_BUDGET).toBe(Number.POSITIVE_INFINITY);
    expect(LEGACY_UI_RUNNING_POLL_BUDGET).toBe(8);
    for (let i = 1; i <= 500; i++) {
      const d = nextReconcileContinueDelayMs(i);
      expect(d).toBeGreaterThan(0);
      expect(d).toBeLessThanOrEqual(RECONCILE_CONTINUE_BACKOFF_MAX_MS);
    }
    expect(shouldContinueReconcileNominally(projection("RUNNING"))).toBe(true);
    expect(shouldAutoResumeReconcileOnRemount(projection("RUNNING"))).toBe(true);
    expect(
      shouldContinueReconcileNominally(projection("POST_EVIDENCE_COMPLETE")),
    ).toBe(false);
  });
});

describe("CP2-08 TrajectorySurface mounted continuity (component-driven)", () => {
  it("remount with RUNNING Attempt auto-continues beyond the legacy budget of 8, with backoff, without any manual reconcile call", async () => {
    // RUNNING for 14 server answers (> legacy 1 + 8), then stable terminal.
    const RUNNING_ANSWERS = 14;
    let calls = 0;
    reconcileMock.mockImplementation(async () => {
      calls += 1;
      return calls <= RUNNING_ANSWERS
        ? reconcileResult("RUNNING")
        : reconcileResult("POST_EVIDENCE_COMPLETE", {
            product: MISMATCH_PRODUCT,
          });
    });

    render(mountSurface());

    // Mount: durable continuity hydrates the EC; remount effect derives the
    // projection and the COMPONENT triggers the first continue intent.
    await flush(0);
    await flush(0);
    expect(deriveContinuityMock).toHaveBeenCalledWith(
      expect.objectContaining({ projectId: PROJECT_ID, executionContractId: EC_ID }),
    );
    expect(reconcileMock).toHaveBeenCalledTimes(1);
    expect(reconcileMock.mock.calls[0]![0]).toEqual(
      expect.objectContaining({
        projectId: PROJECT_ID,
        executionContractId: EC_ID,
        intent: "continue",
      }),
    );

    // The component schedules each next continue with backoff — we only advance
    // the clock; the test never invokes reconcile itself.
    const before = reconcileMock.mock.calls.length;
    await flush(nextReconcileContinueDelayMs(1) - 1);
    expect(reconcileMock.mock.calls.length).toBe(before); // not yet: backoff respected
    await flush(1);
    expect(reconcileMock.mock.calls.length).toBe(before + 1);

    // Drive the clock far past the legacy budget.
    for (let i = 0; i < 40; i++) {
      await flush(RECONCILE_CONTINUE_BACKOFF_MAX_MS);
    }

    const totalAfterTerminal = RUNNING_ANSWERS + 1; // last call returns terminal
    expect(reconcileMock.mock.calls.length).toBe(totalAfterTerminal);
    expect(reconcileMock.mock.calls.length).toBeGreaterThan(
      1 + LEGACY_UI_RUNNING_POLL_BUDGET,
    );
    for (const call of reconcileMock.mock.calls) {
      expect(call[0].intent).toBe("continue"); // never execute → no second Attempt
    }
    expect(executeSelectMock).not.toHaveBeenCalled();
    expect(executeStartMock).not.toHaveBeenCalled();
    expect(executeCompleteMock).not.toHaveBeenCalled();
    expect(materializeMock).not.toHaveBeenCalled();

    // Stable projection ⇒ scheduler stops by itself (no infinite polling after).
    await flush(60_000);
    expect(reconcileMock.mock.calls.length).toBe(totalAfterTerminal);

    // Product result painted from the server answer; attempt id preserved.
    expect(screen.getByTestId("w3a-attempt-id")).toHaveTextContent(ATTEMPT_ID);
    expect(screen.getByTestId("w3b-product-outcome")).toHaveAttribute(
      "data-outcome",
      "UNCLAIMED",
    );
  });

  it("continue intents keep being scheduled while projection stays pending (materialization) — no 120-style abandonment", async () => {
    const TOTAL_PENDING = 130; // > any historical 120 total-budget abandonment
    let calls = 0;
    reconcileMock.mockImplementation(async () => {
      calls += 1;
      return calls <= TOTAL_PENDING
        ? reconcileResult("PRODUCT_MATERIALIZATION_PENDING")
        : reconcileResult("POST_EVIDENCE_COMPLETE", { product: MISMATCH_PRODUCT });
    });

    render(mountSurface());
    await flush(0);
    await flush(0);

    for (let i = 0; i < TOTAL_PENDING + 20; i++) {
      await flush(RECONCILE_CONTINUE_BACKOFF_MAX_MS);
    }
    expect(reconcileMock.mock.calls.length).toBe(TOTAL_PENDING + 1);
    expect(reconcileMock.mock.calls.length).toBeGreaterThan(120);
    await flush(60_000);
    expect(reconcileMock.mock.calls.length).toBe(TOTAL_PENDING + 1);
  });

  it("does not auto-resume on remount when durable projection is already stable", async () => {
    deriveContinuityMock.mockResolvedValue({
      ok: true,
      projection: projection("POST_EVIDENCE_COMPLETE"),
    });
    reconcileMock.mockResolvedValue(reconcileResult("POST_EVIDENCE_COMPLETE"));
    render(mountSurface());
    await flush(0);
    await flush(0);
    await flush(10_000);
    expect(deriveContinuityMock).toHaveBeenCalled();
    expect(reconcileMock).not.toHaveBeenCalled();
  });

  it("unmount cancels the scheduler — no continue after the surface is gone", async () => {
    reconcileMock.mockResolvedValue(reconcileResult("RUNNING"));
    const view = render(mountSurface());
    await flush(0);
    await flush(0);
    await flush(RECONCILE_CONTINUE_BACKOFF_MAX_MS * 3);
    const callsWhileMounted = reconcileMock.mock.calls.length;
    expect(callsWhileMounted).toBeGreaterThan(1);

    view.unmount();
    await flush(RECONCILE_CONTINUE_BACKOFF_MAX_MS * 20);
    expect(reconcileMock.mock.calls.length).toBe(callsWhileMounted);
  });

  it("CP2-06 — Product Resolution drives the real Execution Review block + bounded item read (server-owned)", async () => {
    reconcileMock.mockResolvedValue(
      reconcileResult("POST_EVIDENCE_COMPLETE", { product: MISMATCH_PRODUCT }),
    );
    resolveContextMock.mockResolvedValue({
      ok: true,
      context: {
        attempt: { attemptId: ATTEMPT_ID, status: "succeeded" },
        claimEvaluation: { contractResultVerdict: "NOT_SATISFIED" },
        postEvidence: null,
        executionReview: {
          kind: "EXECUTION_REVIEW_MATERIAL",
          present: true,
          completeness: "PARTIAL",
          reviewMaterialId: "rm:gerrc-cp2",
          reviewItemCount: 1,
          claimFactMismatch: true,
          verificationStatus: "OBSERVED",
          retentionState: "retained",
          reviewEndOfPresent: false,
          verifiedChangeSetPresent: true,
          blockers: [
            "CURSOR_REVIEW_END_OF_MISSING",
            "CLAIM_FACT_MISMATCH unclaimed=b.md",
          ],
          reviewItemSummaries: [
            {
              itemId: "item:b-md",
              kind: "file",
              label: "created: b.md",
              logicalPath: "b.md",
            },
          ],
        },
      },
    });
    readReviewItemMock.mockResolvedValue({
      ok: true,
      itemId: "item:b-md",
      kind: "file",
      label: "created: b.md",
      logicalPath: "b.md",
      content: "B-unclaimed\n",
      completeness: "FULL",
      digest: "sha256:abc",
      claimFactMismatch: true,
      verificationStatus: "OBSERVED",
      reviewEndOfPresent: false,
    });

    render(mountSurface());
    await flush(0);
    await flush(0);
    await flush(0);

    expect(resolveContextMock).toHaveBeenCalledWith({
      projectId: PROJECT_ID,
      attemptId: ATTEMPT_ID,
    });
    expect(screen.getByTestId("w3b-review-mismatch")).toHaveTextContent("oui");
    expect(screen.getByTestId("w3b-review-reo")).toHaveTextContent("manquant");
    expect(screen.getByTestId("w3b-review-verification-status")).toHaveTextContent(
      "OBSERVED",
    );
    expect(screen.getByTestId("w3b-review-contract-result")).toHaveTextContent(
      "NOT_SATISFIED",
    );
    expect(screen.getByTestId("w3b-review-blockers")).toHaveTextContent(
      "CLAIM_FACT_MISMATCH",
    );

    await act(async () => {
      fireEvent.click(screen.getByTestId("w3b-review-item-open-item:b-md"));
      await vi.advanceTimersByTimeAsync(0);
    });
    // Client sends ONLY projectId + attemptId + itemId (no path / contentRef).
    expect(readReviewItemMock).toHaveBeenCalledWith({
      projectId: PROJECT_ID,
      attemptId: ATTEMPT_ID,
      itemId: "item:b-md",
    });
    expect(screen.getByTestId("w3b-review-item-content")).toHaveTextContent(
      "B-unclaimed",
    );
  });
});
