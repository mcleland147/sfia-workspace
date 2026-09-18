/**
 * Checkpoint F / R10 — restart recovery CTA precedence (wrong generic current).
 * ZERO REAL / ZERO Execute / ZERO campaign mutation.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  isWrongGenericPreExecReplaceableByRecoveryPrepare,
} from "@/features/project-assistant/w2/recoveryReplaceableCurrentContract";
import type { RecoveryExecutionBinding } from "@/features/project-assistant/w2/resolveRecoveryExecutionBinding";
import {
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_TARGET,
} from "@/lib/oa/execution-attempt";

const TARGET =
  "projects/sfia-studio/.sandbox/product-journey-e2e-real-01.md";
const RECOVERY_HD = "dec:w2-trj:7e6ca68a-a31b-448c-9ae8-648de8772988";

const SAMPLE_BINDING: RecoveryExecutionBinding = {
  kind: "post_evidence_recovery_execution",
  recovery: {
    kind: "post_evidence_recovery",
    attemptId: "xat:w3a:1f49d8e25e20837a",
    attemptStatus: "failed",
    stopReason: "REAL_PROCESS_NONZERO_EXIT",
    executionContractId: "xct:m3-ev:8aaa188b3a3bd7a7",
    evidenceId: "ev:w3b:seed",
    reviewBundleId: "rb:w3b:seed",
    productOutcome: "FAIL",
    recommendationKind: "recover",
    headline: "Échec",
    rationale: "r",
    nextStep: "recovery_diagnose_or_replan",
    realProcessInvoked: true,
    businessEffectProven: false,
    w3cEpistemicItemId: "epi:w3c-rec:seed",
  },
  sourceExecutionContractId: "xct:m3-ev:8aaa188b3a3bd7a7",
  sourceAttemptId: "xat:w3a:1f49d8e25e20837a",
  action: M4_BOUNDED_DOCS_WRITE_ACTION,
  target: M4_BOUNDED_DOCS_WRITE_TARGET,
  targetPath: TARGET,
  scope: "studio.gcec.docs_write",
  requiredCapabilities: ["cap:cursor.docs_write"],
  evidenceRequirements: ["evreq:docs_write_artifact"],
  constraints: ["NO_COMMIT", "NO_PUSH", "NO_PR", "NO_MERGE"],
  stopConditions: [],
  expectedOutputs: [],
  inputs: { targetPath: TARGET },
  projectId: "prj:test",
  cycleInstanceId: null,
  sourceSemanticFingerprint: null,
  sourceStatus: "failed",
};

describe("R10 — wrong generic replaceable by recovery PREPARE (pure)", () => {
  it("T2 — coherent binding + wrong generic confirmation_required → replaceable", () => {
    expect(
      isWrongGenericPreExecReplaceableByRecoveryPrepare({
        recoveryBinding: SAMPLE_BINDING,
        currentContract: {
          action: "product:generate-temporary-artifact",
          target: "product:project-workspace",
          status: "confirmation_required",
        },
        continuityDecisionRef: RECOVERY_HD,
        recoveryDecisionId: RECOVERY_HD,
        attemptPresent: false,
      }),
    ).toBe(true);
  });

  it("T9 — current already docs_write → not replaceable", () => {
    expect(
      isWrongGenericPreExecReplaceableByRecoveryPrepare({
        recoveryBinding: SAMPLE_BINDING,
        currentContract: {
          action: M4_BOUNDED_DOCS_WRITE_ACTION,
          target: M4_BOUNDED_DOCS_WRITE_TARGET,
          status: "confirmation_required",
        },
        continuityDecisionRef: RECOVERY_HD,
        recoveryDecisionId: RECOVERY_HD,
        attemptPresent: false,
      }),
    ).toBe(false);
  });

  it("T10 — different decisionRef → not replaceable", () => {
    expect(
      isWrongGenericPreExecReplaceableByRecoveryPrepare({
        recoveryBinding: SAMPLE_BINDING,
        currentContract: {
          action: "product:generate-temporary-artifact",
          target: "product:project-workspace",
          status: "confirmation_required",
        },
        continuityDecisionRef: "dec:other",
        recoveryDecisionId: RECOVERY_HD,
        attemptPresent: false,
      }),
    ).toBe(false);
  });

  it("T11 — attempt present / confirmed → not replaceable", () => {
    expect(
      isWrongGenericPreExecReplaceableByRecoveryPrepare({
        recoveryBinding: SAMPLE_BINDING,
        currentContract: {
          action: "product:generate-temporary-artifact",
          target: "product:project-workspace",
          status: "confirmation_required",
        },
        continuityDecisionRef: RECOVERY_HD,
        recoveryDecisionId: RECOVERY_HD,
        attemptPresent: true,
      }),
    ).toBe(false);
    expect(
      isWrongGenericPreExecReplaceableByRecoveryPrepare({
        recoveryBinding: SAMPLE_BINDING,
        currentContract: {
          action: "product:generate-temporary-artifact",
          target: "product:project-workspace",
          status: "confirmed",
        },
        continuityDecisionRef: RECOVERY_HD,
        recoveryDecisionId: RECOVERY_HD,
        attemptPresent: false,
      }),
    ).toBe(false);
  });

  it("T12 — no binding → not replaceable", () => {
    expect(
      isWrongGenericPreExecReplaceableByRecoveryPrepare({
        recoveryBinding: null,
        currentContract: {
          action: "product:generate-temporary-artifact",
          target: "product:project-workspace",
          status: "confirmation_required",
        },
        continuityDecisionRef: RECOVERY_HD,
        recoveryDecisionId: RECOVERY_HD,
        attemptPresent: false,
      }),
    ).toBe(false);
  });
});
